#!/usr/bin/env python3
"""YouPlace Server — web + AI chat na jednom portu 8080."""
import json, os, subprocess, sys, threading, mimetypes
from http.server import HTTPServer, BaseHTTPRequestHandler
from urllib.parse import urlparse, parse_qs

APP_DIR = os.path.dirname(os.path.abspath(__file__))
DATA_DIR = os.path.normpath(os.path.join(APP_DIR, '..', '..', 'data'))
AGENTS_DIR = os.path.join(DATA_DIR, 'ai-agents')

# === AGENT FILES ===

def read_agent(agent_id):
    """Přečte soubor agenta. Vrátí stručný system prompt."""
    path = os.path.join(AGENTS_DIR, f'{os.path.basename(agent_id)}.md')
    try:
        with open(path, 'r', encoding='utf-8') as f:
            return f.read()
    except:
        return 'Jsi AI asistent firmy You&Place. Odpovídej česky, stručně.'

def save_agent(agent_id, content):
    """Uloží přepsaný soubor agenta."""
    path = os.path.join(AGENTS_DIR, f'{os.path.basename(agent_id)}.md')
    try:
        with open(path, 'w', encoding='utf-8') as f:
            f.write(content)
    except Exception as e:
        print(f'[!] Save agent error: {e}')

# === CLAUDE CLI ===

def claude_env():
    """Vrátí env bez CLAUDECODE proměnných (aby nešlo o nested session)."""
    env = os.environ.copy()
    env.pop('CLAUDECODE', None)
    env.pop('CLAUDE_CODE', None)
    return env

def ask_claude(prompt, timeout=90):
    """Zavolá claude -p s promptem. Vrátí (response, error)."""
    try:
        r = subprocess.run(
            ['claude', '-p', prompt],
            capture_output=True, text=True,
            timeout=timeout, env=claude_env()
        )
        if r.returncode != 0:
            return None, r.stderr.strip() or f'Exit code {r.returncode}'
        return r.stdout.strip() or 'AI neodpověděl.', None
    except subprocess.TimeoutExpired:
        return None, f'Timeout {timeout}s'
    except Exception as e:
        return None, str(e)

# === LEARNING (background) ===

def learn_in_background(agent_id, conversation_text):
    """Po konverzaci přepíše soubor agenta — sloučí, deduplikuje."""
    existing = read_agent(agent_id)
    prompt = (
        'Tady je soubor AI agenta a nová konverzace.\n'
        'Přepiš CELÝ soubor:\n'
        '- Role/Kompetence/Osobnost beze změny\n'
        '- Naučené poznatky: VŠECHNA důležitá fakta (staré+nové), BEZ duplikátů\n'
        '- Každý fakt 1 řádek, seskupené podle tématu\n'
        '- Jen konkrétní fakta (čísla, jména, data) — žádné fráze\n'
        '- Pokud nic nového, vrať soubor beze změny\n'
        'Vrať POUZE obsah souboru.\n\n'
        f'=== SOUBOR ===\n{existing}\n\n'
        f'=== KONVERZACE ===\n{conversation_text[-1500:]}'
    )
    resp, err = ask_claude(prompt, timeout=60)
    if err or not resp:
        return
    # Kontrola - musí obsahovat hlavičku
    if '# ' not in resp or 'Role' not in resp:
        return
    save_agent(agent_id, resp)
    print(f'[Learn] {agent_id} updated')

# === HTTP HANDLER ===

class Handler(BaseHTTPRequestHandler):

    def do_GET(self):
        parsed = urlparse(self.path)
        path = parsed.path

        # API: list files
        if path.startswith('/files'):
            return self._files(parsed)

        # Static files
        if path in ('/', ''):
            path = '/index.html'
        filepath = os.path.normpath(os.path.join(APP_DIR, path.lstrip('/')))
        if not filepath.startswith(APP_DIR) or not os.path.isfile(filepath):
            self.send_response(404)
            self.end_headers()
            return
        mime = mimetypes.guess_type(filepath)[0] or 'application/octet-stream'
        with open(filepath, 'rb') as f:
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
        self.send_response(404)
        self.end_headers()

    def do_OPTIONS(self):
        self.send_response(200)
        self._cors()
        self.end_headers()

    def _cors(self):
        self.send_header('Access-Control-Allow-Origin', '*')
        self.send_header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS')
        self.send_header('Access-Control-Allow-Headers', 'Content-Type')

    def _json_response(self, code, data):
        self.send_response(code)
        self._cors()
        self.send_header('Content-Type', 'application/json')
        self.end_headers()
        self.wfile.write(json.dumps(data, ensure_ascii=False).encode())

    # --- /chat ---
    def _chat(self):
        try:
            body = self._read_body()
            message = body.get('message', '').strip()
            agent_id = body.get('agent_id', 'fr')
            history = body.get('history', [])

            if not message:
                return self._json_response(400, {'error': 'Prázdná zpráva'})

            # Sestav prompt: system + krátká historie + zpráva
            system = read_agent(agent_id)
            parts = [system, '']

            # Max 4 zprávy z historie, každá max 300 znaků
            recent = history[-4:]
            if recent:
                for m in recent:
                    role = 'Uživatel' if m.get('role') == 'user' else 'Asistent'
                    text = (m.get('content', '') or '')[:300]
                    parts.append(f'{role}: {text}')
                parts.append('')

            parts.append(f'Uživatel: {message[:800]}')

            full_prompt = '\n'.join(parts)
            print(f'[Chat] agent={agent_id}, prompt={len(full_prompt)} chars')
            sys.stdout.flush()

            resp, err = ask_claude(full_prompt, timeout=90)
            if err:
                return self._json_response(500, {'error': err})

            return self._json_response(200, {'response': resp})

        except Exception as e:
            return self._json_response(500, {'error': str(e)})

    # --- /learn ---
    def _learn(self):
        try:
            body = self._read_body()
            agent_id = body.get('agent_id', 'fr')
            conversation = body.get('conversation', '')
            if conversation:
                threading.Thread(
                    target=learn_in_background,
                    args=(agent_id, conversation),
                    daemon=True
                ).start()
            return self._json_response(200, {'ok': True})
        except Exception as e:
            return self._json_response(500, {'error': str(e)})

    # --- /files ---
    def _files(self, parsed):
        params = parse_qs(parsed.query)
        rel_path = params.get('path', [''])[0]
        safe = os.path.normpath(rel_path).replace('..', '')
        full = os.path.normpath(os.path.join(DATA_DIR, safe))
        if not full.startswith(DATA_DIR) or not os.path.exists(full):
            return self._json_response(200, {'files': [], 'dirs': []})
        if os.path.isfile(full):
            s = os.stat(full)
            return self._json_response(200, {'file': os.path.basename(full), 'size': s.st_size})
        dirs, files = [], []
        for e in sorted(os.listdir(full)):
            if e.startswith('.'): continue
            ep = os.path.join(full, e)
            if os.path.isdir(ep):
                dirs.append(e)
            else:
                s = os.stat(ep)
                files.append({'name': e, 'size': s.st_size, 'modified': int(s.st_mtime)})
        return self._json_response(200, {'path': rel_path, 'dirs': dirs, 'files': files})

    def _read_body(self):
        length = int(self.headers.get('Content-Length', 0))
        return json.loads(self.rfile.read(length)) if length > 0 else {}

    def log_message(self, fmt, *args):
        print(f'[Server] {args[0]}' if args else '')

# === MAIN ===

def main():
    os.makedirs(AGENTS_DIR, exist_ok=True)
    port = 8080
    server = HTTPServer(('0.0.0.0', port), Handler)
    print(f'[YouPlace] http://localhost:{port}')
    print(f'[YouPlace] Agents: {AGENTS_DIR}')
    sys.stdout.flush()
    try:
        server.serve_forever()
    except KeyboardInterrupt:
        pass

if __name__ == '__main__':
    main()
