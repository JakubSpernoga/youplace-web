#!/usr/bin/env python3
"""YouPlace Server — web + AI chat. Persistent claude sessions per agent."""
import json, os, subprocess, sys, threading, mimetypes, time, queue
from http.server import HTTPServer, BaseHTTPRequestHandler
from urllib.parse import urlparse, parse_qs

APP_DIR = os.path.dirname(os.path.abspath(__file__))
DATA_DIR = os.path.normpath(os.path.join(APP_DIR, '..', '..', 'data'))
AGENTS_DIR = os.path.join(DATA_DIR, 'ai-agents')

def claude_env():
    env = os.environ.copy()
    env.pop('CLAUDECODE', None)
    env.pop('CLAUDE_CODE', None)
    return env

def read_agent(agent_id):
    path = os.path.join(AGENTS_DIR, f'{os.path.basename(agent_id)}.md')
    try:
        with open(path, 'r', encoding='utf-8') as f:
            return f.read()
    except:
        return 'Jsi AI asistent firmy You&Place. Odpovídej česky.'

def save_agent(agent_id, content):
    path = os.path.join(AGENTS_DIR, f'{os.path.basename(agent_id)}.md')
    try:
        with open(path, 'w', encoding='utf-8') as f:
            f.write(content)
    except:
        pass

# === AGENT POOL ===
# Each agent gets a lock so requests are serialized per agent

agent_locks = {}

def get_lock(agent_id):
    if agent_id not in agent_locks:
        agent_locks[agent_id] = threading.Lock()
    return agent_locks[agent_id]

def ask_claude(prompt, timeout=90):
    """Fast claude call. Short prompt = fast response."""
    try:
        r = subprocess.run(
            ['claude', '-p', prompt],
            capture_output=True, text=True,
            timeout=timeout, env=claude_env()
        )
        if r.returncode != 0:
            return None, r.stderr.strip() or f'Exit {r.returncode}'
        return r.stdout.strip() or 'AI neodpověděl.', None
    except subprocess.TimeoutExpired:
        return None, f'Timeout {timeout}s'
    except Exception as e:
        return None, str(e)

def learn_background(agent_id, conversation):
    """Přepíše soubor agenta — sloučí staré+nové poznatky, bez duplikátů."""
    existing = read_agent(agent_id)
    prompt = (
        'Přepiš tento soubor AI agenta. Zachovej Role/Kompetence/Osobnost. '
        'Do Naučených poznatků přidej nová fakta z konverzace (bez duplikátů, 1 fakt = 1 řádek). '
        'Pokud nic nového, vrať beze změny. Vrať POUZE obsah souboru.\n\n'
        f'SOUBOR:\n{existing}\n\nKONVERZACE:\n{conversation[-1200:]}'
    )
    resp, err = ask_claude(prompt, timeout=60)
    if not err and resp and '# ' in resp and 'Role' in resp:
        save_agent(agent_id, resp)
        print(f'[Learn] {agent_id} updated')

# === HTTP ===

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
        self.send_header('Content-Length', len(body))
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

            # Build compact prompt
            system = read_agent(aid)
            parts = [system, '']

            # Last 4 messages, each max 300 chars
            for m in hist[-4:]:
                r = 'Uživatel' if m.get('role') == 'user' else 'Asistent'
                parts.append(f'{r}: {(m.get("content",""))[:300]}')
            if hist:
                parts.append('')
            parts.append(f'Uživatel: {msg[:800]}')

            prompt = '\n'.join(parts)
            print(f'[Chat] {aid} | {len(prompt)} chars | "{msg[:50]}"')
            sys.stdout.flush()

            # Serialize per agent
            lock = get_lock(aid)
            with lock:
                resp, err = ask_claude(prompt)

            if err:
                return self._json(500, {'error': err})
            return self._json(200, {'response': resp})
        except Exception as e:
            return self._json(500, {'error': str(e)})

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
        if args:
            msg = args[0]
            if 'GET' not in msg or '.html' in msg:
                print(f'[Server] {msg}')

def main():
    os.makedirs(AGENTS_DIR, exist_ok=True)
    # Pre-warm claude CLI (first call is always slow)
    print('[YouPlace] Pre-warming claude...')
    sys.stdout.flush()
    ask_claude('Řekni OK', timeout=30)
    print('[YouPlace] Claude ready!')

    server = HTTPServer(('0.0.0.0', 8080), Handler)
    print(f'[YouPlace] http://localhost:8080')
    sys.stdout.flush()
    try:
        server.serve_forever()
    except KeyboardInterrupt:
        pass

if __name__ == '__main__':
    main()
