#!/usr/bin/env python3
"""
YouPlace AI Proxy Server
Bridges the web app to the local `claude` CLI (runs on Max subscription, no API key needed).
Listens on port 8081, accepts POST /chat requests from the browser.
Supports learning memory: after each response, extracts new facts and appends them to agent files.
"""

import json
import os
import subprocess
import sys
import threading
from http.server import HTTPServer, BaseHTTPRequestHandler

# Base data directory
DATA_DIR = os.path.join(os.path.dirname(os.path.abspath(__file__)), '..', '..', 'data')
DATA_DIR = os.path.normpath(DATA_DIR)

# Directory where agent personality .md files live
AGENTS_DIR = os.path.join(DATA_DIR, 'ai-agents')


def read_agent_prompt(agent_id):
    """Read the agent's .md file and return its content as the system prompt."""
    safe_id = os.path.basename(agent_id)  # prevent path traversal
    filepath = os.path.join(AGENTS_DIR, f'{safe_id}.md')
    try:
        with open(filepath, 'r', encoding='utf-8') as f:
            return f.read()
    except FileNotFoundError:
        return 'Jsi AI asistent stavebni firmy You&Place. Odpovidej cesky.'
    except Exception as e:
        print(f'[AI Proxy] Error reading agent file {filepath}: {e}')
        return 'Jsi AI asistent stavebni firmy You&Place. Odpovidej cesky.'


def append_learned_facts(agent_id, facts_text):
    """Append new learned facts to the agent's .md file under '## Naučené poznatky'."""
    safe_id = os.path.basename(agent_id)
    filepath = os.path.join(AGENTS_DIR, f'{safe_id}.md')
    try:
        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read()

        # Find the "Naučené poznatky" section and append
        marker = '## Naučené poznatky'
        if marker in content:
            # Append facts after the section (before next ## or at end)
            idx = content.index(marker) + len(marker)
            # Find the rest after the marker
            rest = content[idx:]
            # Insert facts right after any existing content under this heading
            # Look for the next ## heading
            next_section = rest.find('\n## ', 1)
            if next_section == -1:
                # No next section - append at end
                content = content.rstrip() + '\n' + facts_text + '\n'
            else:
                insert_pos = idx + next_section
                content = content[:insert_pos].rstrip() + '\n' + facts_text + '\n' + content[insert_pos:]
        else:
            # No section found - add it at the end
            content = content.rstrip() + '\n\n## Naučené poznatky\n' + facts_text + '\n'

        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(content)

        print(f'[AI Proxy] Learned facts appended to {safe_id}.md')
    except Exception as e:
        print(f'[AI Proxy] Error appending facts to {filepath}: {e}')


def background_learning(agent_id, conversation_snippet):
    """Run a background claude call to extract learnable facts from the conversation."""
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

        result = subprocess.run(
            ['claude', '-p', learning_prompt],
            capture_output=True,
            text=True,
            timeout=60
        )

        if result.returncode != 0:
            print(f'[AI Proxy] Learning call failed: {result.stderr.strip()}')
            return

        output = result.stdout.strip()
        if not output or output.upper() == 'NONE':
            print(f'[AI Proxy] No new facts to learn for {agent_id}')
            return

        # Append the learned facts with a timestamp
        from datetime import datetime
        timestamp = datetime.now().strftime('%Y-%m-%d')
        facts_block = f'\n### {timestamp}\n{output}'
        append_learned_facts(agent_id, facts_block)

    except subprocess.TimeoutExpired:
        print(f'[AI Proxy] Learning call timed out for {agent_id}')
    except Exception as e:
        print(f'[AI Proxy] Learning error for {agent_id}: {e}')


class ProxyHandler(BaseHTTPRequestHandler):

    def _send_cors_headers(self):
        self.send_header('Access-Control-Allow-Origin', '*')
        self.send_header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS')
        self.send_header('Access-Control-Allow-Headers', 'Content-Type')

    def do_OPTIONS(self):
        self.send_response(200)
        self._send_cors_headers()
        self.end_headers()

    def do_GET(self):
        """Handle GET /files?path=projekty/vinohrady/soubory to list directory contents."""
        if not self.path.startswith('/files'):
            self.send_response(404)
            self._send_cors_headers()
            self.end_headers()
            self.wfile.write(json.dumps({'error': 'Not found'}).encode())
            return

        self.send_response(200)
        self._send_cors_headers()
        self.send_header('Content-Type', 'application/json')
        self.end_headers()

        try:
            from urllib.parse import urlparse, parse_qs
            parsed = urlparse(self.path)
            params = parse_qs(parsed.query)
            rel_path = params.get('path', [''])[0]

            # Security: prevent path traversal
            safe_path = os.path.normpath(rel_path).replace('..', '')
            full_path = os.path.join(DATA_DIR, safe_path)
            full_path = os.path.normpath(full_path)

            if not full_path.startswith(DATA_DIR):
                self.wfile.write(json.dumps({'error': 'Access denied'}).encode())
                return

            if not os.path.exists(full_path):
                self.wfile.write(json.dumps({'files': [], 'dirs': []}).encode())
                return

            if os.path.isfile(full_path):
                stat = os.stat(full_path)
                self.wfile.write(json.dumps({'file': os.path.basename(full_path), 'size': stat.st_size}).encode())
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

    def do_POST(self):
        if self.path != '/chat':
            self.send_response(404)
            self._send_cors_headers()
            self.end_headers()
            self.wfile.write(json.dumps({'error': 'Not found'}).encode())
            return

        try:
            length = int(self.headers.get('Content-Length', 0))
            body = json.loads(self.rfile.read(length)) if length > 0 else {}

            message = body.get('message', '')
            agent_id = body.get('agent_id', 'fr')
            history = body.get('history', [])

            # Also accept legacy 'system' field for backwards compatibility
            system_override = body.get('system', '')

            if not message:
                self.send_response(400)
                self._send_cors_headers()
                self.send_header('Content-Type', 'application/json')
                self.end_headers()
                self.wfile.write(json.dumps({'error': 'No message provided'}).encode())
                return

            # Read the agent personality file as system prompt
            if system_override:
                system_prompt = system_override
            else:
                system_prompt = read_agent_prompt(agent_id)

            # Build the prompt for claude CLI
            prompt_parts = []
            if system_prompt:
                prompt_parts.append(system_prompt)
                prompt_parts.append('')

            if history:
                prompt_parts.append('Previous conversation:')
                for msg in history[:-1]:  # exclude last message (it's the current user message)
                    role_label = 'User' if msg.get('role') == 'user' else 'Assistant'
                    prompt_parts.append(f'{role_label}: {msg.get("content", "")}')
                prompt_parts.append('')

            prompt_parts.append(f'User: {message}')

            prompt_text = '\n'.join(prompt_parts)

            # Call claude CLI
            result = subprocess.run(
                ['claude', '-p', prompt_text],
                capture_output=True,
                text=True,
                timeout=120
            )

            if result.returncode != 0:
                error_msg = result.stderr.strip() or f'claude CLI exited with code {result.returncode}'
                self.send_response(500)
                self._send_cors_headers()
                self.send_header('Content-Type', 'application/json')
                self.end_headers()
                self.wfile.write(json.dumps({'error': error_msg}).encode())
                return

            response_text = result.stdout.strip()
            if not response_text:
                response_text = 'AI neodpovedel.'

            # Send response immediately
            self.send_response(200)
            self._send_cors_headers()
            self.send_header('Content-Type', 'application/json')
            self.end_headers()
            self.wfile.write(json.dumps({'response': response_text}).encode())

            # Launch background learning thread (don't block the response)
            # Build a conversation snippet from the last few messages
            snippet_parts = []
            recent = history[-6:] if len(history) > 6 else history
            for msg in recent:
                role_label = 'User' if msg.get('role') == 'user' else 'Assistant'
                snippet_parts.append(f'{role_label}: {msg.get("content", "")}')
            snippet_parts.append(f'User: {message}')
            snippet_parts.append(f'Assistant: {response_text}')
            conversation_snippet = '\n'.join(snippet_parts)

            learning_thread = threading.Thread(
                target=background_learning,
                args=(agent_id, conversation_snippet),
                daemon=True
            )
            learning_thread.start()

        except subprocess.TimeoutExpired:
            self.send_response(504)
            self._send_cors_headers()
            self.send_header('Content-Type', 'application/json')
            self.end_headers()
            self.wfile.write(json.dumps({'error': 'Claude CLI timeout (120s)'}).encode())

        except Exception as e:
            self.send_response(500)
            self._send_cors_headers()
            self.send_header('Content-Type', 'application/json')
            self.end_headers()
            self.wfile.write(json.dumps({'error': str(e)}).encode())

    def log_message(self, format, *args):
        print(f'[AI Proxy] {args[0]}' if args else '')


def main():
    # Ensure agents directory exists
    os.makedirs(AGENTS_DIR, exist_ok=True)

    port = 8081
    server = HTTPServer(('0.0.0.0', port), ProxyHandler)
    print(f'[AI Proxy] Running on http://127.0.0.1:{port}')
    print(f'[AI Proxy] Agent files directory: {AGENTS_DIR}')
    sys.stdout.flush()
    try:
        server.serve_forever()
    except KeyboardInterrupt:
        pass
    server.server_close()
    print('[AI Proxy] Stopped.')


if __name__ == '__main__':
    main()
