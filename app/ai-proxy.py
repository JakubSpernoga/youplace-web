#!/usr/bin/env python3
"""
YouPlace AI Proxy Server
Bridges the web app to the local `claude` CLI (runs on Max subscription, no API key needed).
Listens on port 8081, accepts POST /chat requests from the browser.
"""

import json
import subprocess
import sys
from http.server import HTTPServer, BaseHTTPRequestHandler


class ProxyHandler(BaseHTTPRequestHandler):

    def _send_cors_headers(self):
        self.send_header('Access-Control-Allow-Origin', '*')
        self.send_header('Access-Control-Allow-Methods', 'POST, OPTIONS')
        self.send_header('Access-Control-Allow-Headers', 'Content-Type')

    def do_OPTIONS(self):
        self.send_response(200)
        self._send_cors_headers()
        self.end_headers()

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
            system = body.get('system', '')
            history = body.get('history', [])

            if not message:
                self.send_response(400)
                self._send_cors_headers()
                self.send_header('Content-Type', 'application/json')
                self.end_headers()
                self.wfile.write(json.dumps({'error': 'No message provided'}).encode())
                return

            # Build the prompt for claude CLI
            prompt_parts = []
            if system:
                prompt_parts.append(system)
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

            self.send_response(200)
            self._send_cors_headers()
            self.send_header('Content-Type', 'application/json')
            self.end_headers()
            self.wfile.write(json.dumps({'response': response_text}).encode())

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
    port = 8081
    server = HTTPServer(('127.0.0.1', port), ProxyHandler)
    print(f'[AI Proxy] Running on http://127.0.0.1:{port}')
    sys.stdout.flush()
    try:
        server.serve_forever()
    except KeyboardInterrupt:
        pass
    server.server_close()
    print('[AI Proxy] Stopped.')


if __name__ == '__main__':
    main()
