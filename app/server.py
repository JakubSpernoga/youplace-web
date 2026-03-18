#!/usr/bin/env python3
"""YouPlace Server - single server for web + AI chat on port 8080."""
import json, os, subprocess, sys, threading, mimetypes
from http.server import HTTPServer, BaseHTTPRequestHandler
from urllib.parse import urlparse, parse_qs

APP_DIR = os.path.dirname(os.path.abspath(__file__))
DATA_DIR = os.path.normpath(os.path.join(APP_DIR, '..', '..', 'data'))
AGENTS_DIR = os.path.join(DATA_DIR, 'ai-agents')

def read_agent_prompt(agent_id):
    try:
        with open(os.path.join(AGENTS_DIR, f'{os.path.basename(agent_id)}.md'), 'r', encoding='utf-8') as f:
            return f.read()
    except:
        return 'Jsi AI asistent stavebni firmy You&Place. Odpovidej cesky.'

def append_learned_facts(agent_id, facts_text):
    safe_id = os.path.basename(agent_id)
    filepath = os.path.join(AGENTS_DIR, f'{safe_id}.md')
    try:
        with open(filepath, 'r', encoding='utf-8') as f: content = f.read()
        marker = '## Naučené poznatky'
        if marker in content:
            content = content.rstrip() + '\n' + facts_text + '\n'
        else:
            content = content.rstrip() + '\n\n## Naučené poznatky\n' + facts_text + '\n'
        with open(filepath, 'w', encoding='utf-8') as f: f.write(content)
    except: pass

def background_learning(agent_id, snippet):
    try:
        env = os.environ.copy()
        env.pop('CLAUDECODE', None)
        env.pop('CLAUDE_CODE', None)
        r = subprocess.run(['claude', '-p',
            'Extract new concrete facts from this conversation (company, projects, clients, dates, decisions). '
            'If nothing new, respond "NONE". Otherwise bullet list in Czech.\n\n' + snippet],
            capture_output=True, text=True, timeout=60, env=env)
        if r.returncode != 0 or not r.stdout.strip() or r.stdout.strip().upper() == 'NONE': return
        from datetime import datetime
        append_learned_facts(agent_id, f'\n### {datetime.now().strftime("%Y-%m-%d")}\n{r.stdout.strip()}')
    except: pass

class Handler(BaseHTTPRequestHandler):
    def do_GET(self):
        parsed = urlparse(self.path)
        path = parsed.path
        if path.startswith('/files'):
            return self._handle_files(parsed)
        if path in ('/', ''): path = '/index.html'
        filepath = os.path.normpath(os.path.join(APP_DIR, path.lstrip('/')))
        if not filepath.startswith(APP_DIR) or not os.path.isfile(filepath):
            self.send_response(404); self.end_headers(); return
        mime = mimetypes.guess_type(filepath)[0] or 'application/octet-stream'
        with open(filepath, 'rb') as f: data = f.read()
        self.send_response(200)
        self.send_header('Content-Type', mime)
        self.send_header('Content-Length', len(data))
        self.end_headers()
        self.wfile.write(data)

    def _handle_files(self, parsed):
        params = parse_qs(parsed.query)
        rel_path = params.get('path', [''])[0]
        full_path = os.path.normpath(os.path.join(DATA_DIR, os.path.normpath(rel_path).replace('..', '')))
        self.send_response(200); self.send_header('Content-Type', 'application/json'); self.end_headers()
        if not full_path.startswith(DATA_DIR) or not os.path.exists(full_path):
            self.wfile.write(json.dumps({'files':[],'dirs':[]}).encode()); return
        if os.path.isfile(full_path):
            s = os.stat(full_path)
            self.wfile.write(json.dumps({'file':os.path.basename(full_path),'size':s.st_size}).encode()); return
        dirs, files = [], []
        for e in sorted(os.listdir(full_path)):
            if e.startswith('.'): continue
            ep = os.path.join(full_path, e)
            if os.path.isdir(ep): dirs.append(e)
            else:
                s = os.stat(ep)
                files.append({'name':e,'size':s.st_size,'modified':int(s.st_mtime)})
        self.wfile.write(json.dumps({'path':rel_path,'dirs':dirs,'files':files}).encode())

    def do_POST(self):
        if self.path != '/chat':
            self.send_response(404); self.end_headers(); return
        try:
            length = int(self.headers.get('Content-Length', 0))
            body = json.loads(self.rfile.read(length)) if length > 0 else {}
            message = body.get('message', '')
            agent_id = body.get('agent_id', 'fr')
            history = body.get('history', [])
            if not message:
                self.send_response(400); self.send_header('Content-Type','application/json'); self.end_headers()
                self.wfile.write(json.dumps({'error':'No message'}).encode()); return
            system_prompt = body.get('system','') or read_agent_prompt(agent_id)
            parts = []
            if system_prompt: parts.append(system_prompt); parts.append('')
            if history:
                parts.append('Previous conversation:')
                for m in history[:-1]: parts.append(f'{"User" if m.get("role")=="user" else "Assistant"}: {m.get("content","")}')
                parts.append('')
            parts.append(f'User: {message}')
            env = os.environ.copy()
            env.pop('CLAUDECODE', None); env.pop('CLAUDE_CODE', None)
            r = subprocess.run(['claude','-p','\n'.join(parts)], capture_output=True, text=True, timeout=120, env=env)
            if r.returncode != 0:
                self.send_response(500); self.send_header('Content-Type','application/json'); self.end_headers()
                self.wfile.write(json.dumps({'error':r.stderr.strip() or 'CLI error'}).encode()); return
            resp = r.stdout.strip() or 'AI neodpovedel.'
            self.send_response(200); self.send_header('Content-Type','application/json'); self.end_headers()
            self.wfile.write(json.dumps({'response':resp}).encode())
            snip = []
            for m in (history[-6:] if len(history)>6 else history):
                snip.append(f'{"User" if m.get("role")=="user" else "Assistant"}: {m.get("content","")}')
            snip.append(f'User: {message}'); snip.append(f'Assistant: {resp}')
            threading.Thread(target=background_learning, args=(agent_id,'\n'.join(snip)), daemon=True).start()
        except subprocess.TimeoutExpired:
            self.send_response(504); self.send_header('Content-Type','application/json'); self.end_headers()
            self.wfile.write(json.dumps({'error':'Timeout 120s'}).encode())
        except Exception as e:
            self.send_response(500); self.send_header('Content-Type','application/json'); self.end_headers()
            self.wfile.write(json.dumps({'error':str(e)}).encode())

    def do_OPTIONS(self):
        self.send_response(200); self.end_headers()

    def log_message(self, fmt, *args):
        print(f'[Server] {args[0]}' if args else '')

def main():
    os.makedirs(AGENTS_DIR, exist_ok=True)
    server = HTTPServer(('0.0.0.0', 8080), Handler)
    print(f'[YouPlace] http://localhost:8080')
    sys.stdout.flush()
    try: server.serve_forever()
    except KeyboardInterrupt: pass

if __name__ == '__main__':
    main()
