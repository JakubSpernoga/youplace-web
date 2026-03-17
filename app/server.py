#!/usr/bin/env python3
"""
YouPlace Unified Server
Serves static files AND handles AI chat on ONE port (8080).
No CORS issues, no cross-port problems.
"""

import json
import os
import subprocess
import sys
import threading
from http.server import HTTPServer, SimpleHTTPRequestHandler
from urllib.parse import urlparse, parse_qs

# Directories
APP_DIR = os.path.dirname(os.path.abspath(__file__))
DATA_DIR = os.path.normpath(os.path.join(APP_DIR, '..', '..', 'data'))
AGENTS_DIR = os.path.join(DATA_DIR, 'ai-agents')


def read_agent_prompt(agent_id):
    safe_id = os.path.basename(agent_id)
    filepath = os.path.join(AGENTS_DIR, f'{safe_id}.md')
    try:
        with open(filepath, 'r', encoding='utf-8') as f:
            return f.read()
    except:
        return 'Jsi AI asistent stavebni firmy You&Place. Odpovidej cesky.'


def append_learned_facts(agent_id, facts_text):
    safe_id = os.path.basename(agent_id)
    filepath = os.path.join(AGENTS_DIR, f'{safe_id}.md')
    try:
        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read()
        marker = '## Naučené poznatky'
        if marker in content:
            content = content.rstrip() + '\n' + facts_text + '\n'
        else:
            content = content.rstrip() + '\n\n## Naučené poznatky\n' + facts_text + '\n'
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(content)
        print(f'[Server] Learned facts saved for {safe_id}')
    except Exception as e:
        print(f'[Server] Error saving facts: {e}')


def background_learning(agent_id, conversation_snippet):
    try:
        learning_prompt = (
            'Based on this conversation, extract any new concrete facts or information about '
            'the company, projects, clients, numbers, dates, decisions, or preferences that '
            'should be remembered for future conversations. '
            'If there is nothing new worth remembering, respond with just "NONE". '
            'Otherwise respond with a bullet point list of new facts in Czech. '
            'Each bullet should start with "- " and be a single concise fact.\n\n'
            f'Conversation:\n{conversation_snippet}'
        )
        env = os.environ.copy()
        env.pop('CLAUDECODE', None)
        env.pop('CLAUDE_CODE', None)
        result = subprocess.run(
            ['claude', '-p', learning_prompt],
            capture_output=True, text=True, timeout=60, env=env
        )
        if result.returncode != 0:
            return
        output = result.stdout.strip()
        if not output or output.upper() == 'NONE':
            return
        from datetime import datetime
        timestamp = datetime.now().strftime('%Y-%m-%d')
        append_learned_facts(agent_id, f'\n### {timestamp}\n{output}')
    except:
        pass


class UnifiedHandler(SimpleHTTPRequestHandler):
    """Serves static files + handles /chat and /files API endpoints."""

    def do_OPTIONS(self):
        self.send_response(200)
        self.send_header('Access-Control-Allow-Origin', '*')
        self.send_header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS')
        self.send_header('Access-Control-Allow-Headers', 'Content-Type')
        self.end_headers()

    def do_GET(self):
        if self.path.startswith('/files'):
            self._handle_files()
        else:
            # Serve static files normally
            super().do_GET()

    def do_POST(self):
        if self.path == '/chat':
            self._handle_chat()
        else:
            self.send_response(404)
            self.end_headers()

    def _handle_files(self):
        self.send_response(200)
        self.send_header('Content-Type', 'application/json')
        self.end_headers()
        try:
            parsed = urlparse(self.path)
            params = parse_qs(parsed.query)
            rel_path = params.get('path', [''])[0]
            safe_path = os.path.normpath(rel_path).replace('..', '')
            full_path = os.path.normpath(os.path.join(DATA_DIR, safe_path))
            if not full_path.startswith(DATA_DIR):
                self.wfile.write(json.dumps({'error': 'Access denied'}).encode())
                return
            if not os.path.exists(full_path):
                self.wfile.write(json.dumps({'files': [], 'dirs': []}).encode())
                return
            entries = os.listdir(full_path)
            dirs = []
            files = []
            for e in sorted(entries):
                if e.startswith('.'):
                    continue
                ep = os.path.join(full_path, e)
                if os.path.isdir(ep):
                    dirs.append(e)
                else:
                    stat = os.stat(ep)
                    files.append({'name': e, 'size': stat.st_size, 'modified': int(stat.st_mtime)})
            self.wfile.write(json.dumps({'path': rel_path, 'dirs': dirs, 'files': files}).encode())
        except Exception as e:
            self.wfile.write(json.dumps({'error': str(e)}).encode())

    def _handle_chat(self):
        try:
            length = int(self.headers.get('Content-Length', 0))
            body = json.loads(self.rfile.read(length)) if length > 0 else {}
            message = body.get('message', '')
            agent_id = body.get('agent_id', 'fr')
            history = body.get('history', [])

            if not message:
                self.send_response(400)
                self.send_header('Content-Type', 'application/json')
                self.end_headers()
                self.wfile.write(json.dumps({'error': 'No message'}).encode())
                return

            system_prompt = body.get('system', '') or read_agent_prompt(agent_id)

            prompt_parts = [system_prompt, '']
            if history:
                prompt_parts.append('Previous conversation:')
                for msg in history[:-1]:
                    role = 'User' if msg.get('role') == 'user' else 'Assistant'
                    prompt_parts.append(f'{role}: {msg.get("content", "")}')
                prompt_parts.append('')
            prompt_parts.append(f'User: {message}')

            env = os.environ.copy()
            env.pop('CLAUDECODE', None)
            env.pop('CLAUDE_CODE', None)

            result = subprocess.run(
                ['claude', '-p', '\n'.join(prompt_parts)],
                capture_output=True, text=True, timeout=120, env=env
            )

            if result.returncode != 0:
                error_msg = result.stderr.strip() or f'claude exited with code {result.returncode}'
                self.send_response(500)
                self.send_header('Content-Type', 'application/json')
                self.end_headers()
                self.wfile.write(json.dumps({'error': error_msg}).encode())
                return

            response_text = result.stdout.strip() or 'AI neodpovedel.'

            self.send_response(200)
            self.send_header('Content-Type', 'application/json')
            self.end_headers()
            self.wfile.write(json.dumps({'response': response_text}).encode())

            # Background learning
            snippet_parts = []
            for msg in (history[-6:] if len(history) > 6 else history):
                role = 'User' if msg.get('role') == 'user' else 'Assistant'
                snippet_parts.append(f'{role}: {msg.get("content", "")}')
            snippet_parts.append(f'User: {message}')
            snippet_parts.append(f'Assistant: {response_text}')
            threading.Thread(
                target=background_learning,
                args=(agent_id, '\n'.join(snippet_parts)),
                daemon=True
            ).start()

        except subprocess.TimeoutExpired:
            self.send_response(504)
            self.send_header('Content-Type', 'application/json')
            self.end_headers()
            self.wfile.write(json.dumps({'error': 'Timeout (120s)'}).encode())
        except Exception as e:
            self.send_response(500)
            self.send_header('Content-Type', 'application/json')
            self.end_headers()
            self.wfile.write(json.dumps({'error': str(e)}).encode())


def main():
    os.makedirs(AGENTS_DIR, exist_ok=True)
    os.chdir(APP_DIR)
    port = 8080
    server = HTTPServer(('0.0.0.0', port), UnifiedHandler)
    print(f'[YouPlace] Server running on http://localhost:{port}')
    print(f'[YouPlace] App dir: {APP_DIR}')
    print(f'[YouPlace] Data dir: {DATA_DIR}')
    sys.stdout.flush()
    try:
        server.serve_forever()
    except KeyboardInterrupt:
        pass
    server.server_close()


if __name__ == '__main__':
    main()
