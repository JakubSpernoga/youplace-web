#!/usr/bin/env python3
"""YouPlace Server — web + AI chat se streamingem."""
import json, os, subprocess, sys, threading, mimetypes, time
from http.server import HTTPServer, BaseHTTPRequestHandler
from urllib.parse import urlparse, parse_qs

APP_DIR = os.path.dirname(os.path.abspath(__file__))
DATA_DIR = os.path.normpath(os.path.join(APP_DIR, '..', '..', 'data'))
AGENTS_DIR = os.path.join(DATA_DIR, 'ai-agents')

def claude_env():
    env = os.environ.copy()
    for k in list(env.keys()):
        if 'CLAUDE' in k.upper():
            del env[k]
    return env

def read_agent(agent_id):
    path = os.path.join(AGENTS_DIR, f'{os.path.basename(agent_id)}.md')
    try:
        with open(path, 'r', encoding='utf-8') as f:
            return f.read()
    except:
        return 'Jsi AI asistent firmy You&Place. Odpovídej česky, stručně.'

def save_agent(agent_id, content):
    path = os.path.join(AGENTS_DIR, f'{os.path.basename(agent_id)}.md')
    try:
        with open(path, 'w', encoding='utf-8') as f:
            f.write(content)
    except:
        pass

def ask_claude(prompt, timeout=60):
    try:
        r = subprocess.run(['claude', '-p', prompt],
            capture_output=True, text=True, timeout=timeout, env=claude_env())
        if r.returncode != 0:
            return None, r.stderr.strip() or f'Exit {r.returncode}'
        return r.stdout.strip(), None
    except subprocess.TimeoutExpired:
        return None, 'Timeout'
    except Exception as e:
        return None, str(e)

def learn_background(agent_id, conversation):
    existing = read_agent(agent_id)
    prompt = (
        'Přepiš soubor AI agenta. Zachovej Role/Kompetence/Osobnost. '
        'Naučené poznatky: všechna důležitá fakta (staré+nové), bez duplikátů, 1 řádek = 1 fakt. '
        'Pokud nic nového, vrať beze změny. Vrať POUZE obsah souboru.\n\n'
        f'SOUBOR:\n{existing}\n\nKONVERZACE:\n{conversation[-1200:]}'
    )
    resp, err = ask_claude(prompt, timeout=60)
    if not err and resp and '# ' in resp and 'Role' in resp:
        save_agent(agent_id, resp)
        print(f'[Learn] {agent_id} updated')

class Handler(BaseHTTPRequestHandler):

    def do_GET(self):
        parsed = urlparse(self.path)
        path = parsed.path
        if path.startswith('/files'):
            return self._files(parsed)
        if path in ('/', ''):
            path = '/index.html'
        fp = os.path.normpath(os.path.join(APP_DIR, path.lstrip('/')))
        if not fp.startswith(APP_DIR) or not os.path.isfile(fp):
            self.send_response(404); self.end_headers(); return
        mime = mimetypes.guess_type(fp)[0] or 'application/octet-stream'
        with open(fp, 'rb') as f:
            data = f.read()
        self.send_response(200)
        self.send_header('Content-Type', mime)
        self.send_header('Content-Length', len(data))
        self.end_headers()
        self.wfile.write(data)

    def do_POST(self):
        if self.path == '/chat':
            return self._chat()
        if self.path == '/learn':
            return self._learn()
        self.send_response(404); self.end_headers()

    def do_OPTIONS(self):
        self.send_response(200)
        self.send_header('Access-Control-Allow-Origin', '*')
        self.send_header('Access-Control-Allow-Methods', 'GET,POST,OPTIONS')
        self.send_header('Access-Control-Allow-Headers', 'Content-Type')
        self.end_headers()

    def _json(self, code, data):
        body = json.dumps(data, ensure_ascii=False).encode()
        self.send_response(code)
        self.send_header('Content-Type', 'application/json')
        self.send_header('Access-Control-Allow-Origin', '*')
        self.end_headers()
        self.wfile.write(body)

    def _body(self):
        n = int(self.headers.get('Content-Length', 0))
        return json.loads(self.rfile.read(n)) if n > 0 else {}

    def _chat(self):
        try:
            b = self._body()
            msg = (b.get('message') or '').strip()
            aid = b.get('agent_id', 'fr')
            hist = b.get('history', [])
            if not msg:
                return self._json(400, {'error': 'Prázdná zpráva'})

            # Compact prompt
            system = read_agent(aid)
            parts = [system, '']
            for m in hist[-4:]:
                r = 'U' if m.get('role') == 'user' else 'A'
                parts.append(f'{r}: {(m.get("content",""))[:300]}')
            if hist:
                parts.append('')
            parts.append(f'Uživatel: {msg[:800]}')
            prompt = '\n'.join(parts)

            print(f'[Chat] {aid} | {len(prompt)}ch | "{msg[:40]}"')
            sys.stdout.flush()

            # STREAMING: use Popen to stream output as it arrives
            proc = subprocess.Popen(
                ['claude', '-p', prompt],
                stdout=subprocess.PIPE, stderr=subprocess.PIPE,
                text=True, env=claude_env()
            )

            # Stream response via SSE (Server-Sent Events)
            self.send_response(200)
            self.send_header('Content-Type', 'text/event-stream')
            self.send_header('Cache-Control', 'no-cache')
            self.send_header('Access-Control-Allow-Origin', '*')
            self.end_headers()

            full_response = []
            try:
                while True:
                    chunk = proc.stdout.read(80)
                    if not chunk:
                        break
                    full_response.append(chunk)
                    # Send SSE event
                    data = json.dumps({'chunk': chunk}, ensure_ascii=False)
                    self.wfile.write(f'data: {data}\n\n'.encode())
                    self.wfile.flush()
            except:
                pass

            # Send done event
            resp_text = ''.join(full_response).strip()
            data = json.dumps({'done': True, 'full': resp_text}, ensure_ascii=False)
            self.wfile.write(f'data: {data}\n\n'.encode())
            self.wfile.flush()

            proc.wait(timeout=5)
            if proc.returncode != 0 and not resp_text:
                err = proc.stderr.read()
                data = json.dumps({'error': err.strip() or 'Claude error'}, ensure_ascii=False)
                self.wfile.write(f'data: {data}\n\n'.encode())
                self.wfile.flush()

            print(f'[Chat] {aid} | done | {len(resp_text)}ch response')
            sys.stdout.flush()

        except Exception as e:
            try:
                data = json.dumps({'error': str(e)}, ensure_ascii=False)
                self.wfile.write(f'data: {data}\n\n'.encode())
                self.wfile.flush()
            except:
                pass

    def _learn(self):
        try:
            b = self._body()
            aid = b.get('agent_id', 'fr')
            conv = b.get('conversation', '')
            if conv:
                threading.Thread(target=learn_background, args=(aid, conv), daemon=True).start()
            return self._json(200, {'ok': True})
        except:
            return self._json(200, {'ok': True})

    def _files(self, parsed):
        params = parse_qs(parsed.query)
        rel = params.get('path', [''])[0]
        safe = os.path.normpath(rel).replace('..', '')
        full = os.path.normpath(os.path.join(DATA_DIR, safe))
        if not full.startswith(DATA_DIR) or not os.path.exists(full):
            return self._json(200, {'files': [], 'dirs': []})
        if os.path.isfile(full):
            return self._json(200, {'file': os.path.basename(full), 'size': os.stat(full).st_size})
        dirs, files = [], []
        for e in sorted(os.listdir(full)):
            if e.startswith('.'): continue
            ep = os.path.join(full, e)
            if os.path.isdir(ep):
                dirs.append(e)
            else:
                s = os.stat(ep)
                files.append({'name': e, 'size': s.st_size, 'modified': int(s.st_mtime)})
        return self._json(200, {'path': rel, 'dirs': dirs, 'files': files})

    def log_message(self, fmt, *args):
        pass  # quiet

def main():
    os.makedirs(AGENTS_DIR, exist_ok=True)
    print('[YouPlace] Starting...')
    sys.stdout.flush()
    server = HTTPServer(('0.0.0.0', 8080), Handler)
    print(f'[YouPlace] http://localhost:8080')
    sys.stdout.flush()
    try:
        server.serve_forever()
    except KeyboardInterrupt:
        pass

if __name__ == '__main__':
    main()
