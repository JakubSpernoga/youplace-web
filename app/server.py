#!/usr/bin/env python3
"""
YouPlace Server - Combined web + AI proxy on single port 8080.
Serves static files AND handles /chat, /files API endpoints.
"""
import json, os, subprocess, sys, threading
from http.server import HTTPServer, SimpleHTTPRequestHandler
from urllib.parse import urlparse, parse_qs

APP_DIR = os.path.dirname(os.path.abspath(__file__))
DATA_DIR = os.path.normpath(os.path.join(APP_DIR, '..', '..', 'data'))
AGENTS_DIR = os.path.join(DATA_DIR, 'ai-agents')
os.makedirs(AGENTS_DIR, exist_ok=True)

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
        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read()
        content = content.rstrip() + '\n' + facts_text + '\n'
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(content)
    except:
        pass

def background_learning(agent_id, snippet):
    try:
        env = os.environ.copy()
        env.pop('CLAUDECODE', None)
        env.pop('CLAUDE_CODE', None)
        r = subprocess.run(['claude', '-p',
            'Extract new facts from this conversation. If nothing new, say NONE. Otherwise bullet points in Czech.\n\n' + snippet],
            capture_output=True, text=True, timeout=60, env=env)
        if r.returncode != 0 or not r.stdout.strip() or r.stdout.strip().upper() == 'NONE':
            return
        from datetime import datetime
        append_learned_facts(agent_id, f'\n### {datetime.now().strftime("%Y-%m-%d")}\n{r.stdout.strip()}')
    except:
        pass

class Handler(SimpleHTTPRequestHandler):
    def __init__(self, *a, **kw):
        super().__init__(*a, directory=APP_DIR, **kw)

    def do_OPTIONS(self):
        self.send_response(200)
        self.send_header('Access-Control-Allow-Origin', '*')
        self.send_header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS')
        self.send_header('Access-Control-Allow-Headers', 'Content-Type')
        self.end_headers()

    def do_GET(self):
        p = urlparse(self.path)
        if p.path == '/files':
            return self._files(p)
        super().do_GET()

    def do_POST(self):
        if urlparse(self.path).path == '/chat':
            return self._chat()
        self.send_response(404)
        self.end_headers()

    def _files(self, p):
        self.send_response(200)
        self.send_header('Content-Type', 'application/json')
        self.send_header('Access-Control-Allow-Origin', '*')
        self.end_headers()
        try:
            rel = parse_qs(p.query).get('path', [''])[0]
            fp = os.path.normpath(os.path.join(DATA_DIR, os.path.normpath(rel).replace('..', '')))
            if not fp.startswith(DATA_DIR) or not os.path.exists(fp):
                self.wfile.write(b'{"files":[],"dirs":[]}')
                return
            dirs, files = [], []
            for e in sorted(os.listdir(fp)):
                if e.startswith('.'): continue
                ep = os.path.join(fp, e)
                if os.path.isdir(ep):
                    dirs.append(e)
                else:
                    s = os.stat(ep)
                    files.append({'name': e, 'size': s.st_size, 'modified': int(s.st_mtime)})
            self.wfile.write(json.dumps({'path': rel, 'dirs': dirs, 'files': files}).encode())
        except Exception as e:
            self.wfile.write(json.dumps({'error': str(e)}).encode())

    def _chat(self):
        try:
            body = json.loads(self.rfile.read(int(self.headers.get('Content-Length', 0))))
            msg = body.get('message', '')
            aid = body.get('agent_id', 'fr')
            hist = body.get('history', [])
            if not msg:
                return self._j(400, {'error': 'No message'})
            sp = body.get('system', '') or read_agent_prompt(aid)
            parts = [sp, '']
            if hist:
                parts.append('Previous conversation:')
                for m in hist[-20:]:
                    parts.append(f'{"User" if m.get("role")=="user" else "Assistant"}: {m.get("content","")}')
                parts.append('')
            parts.append(f'User: {msg}')
            env = os.environ.copy()
            env.pop('CLAUDECODE', None)
            env.pop('CLAUDE_CODE', None)
            r = subprocess.run(['claude', '-p', '\n'.join(parts)], capture_output=True, text=True, timeout=120, env=env)
            if r.returncode != 0:
                return self._j(500, {'error': r.stderr.strip() or f'claude exit {r.returncode}'})
            resp = r.stdout.strip() or 'AI neodpovedel.'
            self._j(200, {'response': resp})
            sn = []
            for m in hist[-6:]:
                sn.append(f'{"User" if m.get("role")=="user" else "Assistant"}: {m.get("content","")}')
            sn.append(f'User: {msg}')
            sn.append(f'Assistant: {resp}')
            threading.Thread(target=background_learning, args=(aid, '\n'.join(sn)), daemon=True).start()
        except subprocess.TimeoutExpired:
            self._j(504, {'error': 'Claude timeout'})
        except Exception as e:
            self._j(500, {'error': str(e)})

    def _j(self, code, data):
        self.send_response(code)
        self.send_header('Content-Type', 'application/json')
        self.send_header('Access-Control-Allow-Origin', '*')
        self.end_headers()
        self.wfile.write(json.dumps(data).encode())

    def log_message(self, f, *a):
        print(f'[YouPlace] {a[0]}' if a else '')

if __name__ == '__main__':
    port = 8080
    srv = HTTPServer(('0.0.0.0', port), Handler)
    print(f'[YouPlace] http://localhost:{port} | App: {APP_DIR} | Data: {DATA_DIR}')
    sys.stdout.flush()
    try:
        srv.serve_forever()
    except KeyboardInterrupt:
        pass
