import http from 'node:http';
import fs from 'node:fs/promises';
import path from 'node:path';

const PORT = Number(process.env.PORT || 3001);
const MESSAGES_FILE = path.resolve(process.cwd(), 'contact-messages.json');

async function ensureStore() {
  try {
    await fs.access(MESSAGES_FILE);
  } catch {
    await fs.writeFile(MESSAGES_FILE, '[]', 'utf8');
  }
}

async function readMessages() {
  await ensureStore();
  const raw = await fs.readFile(MESSAGES_FILE, 'utf8');
  try {
    return JSON.parse(raw);
  } catch {
    return [];
  }
}

async function writeMessages(messages) {
  await fs.writeFile(MESSAGES_FILE, JSON.stringify(messages, null, 2), 'utf8');
}

function sendJson(res, statusCode, payload) {
  res.writeHead(statusCode, {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
  });
  res.end(JSON.stringify(payload));
}

const server = http.createServer(async (req, res) => {
  const url = new URL(req.url, `http://${req.headers.host}`);

  if (req.method === 'OPTIONS') {
    sendJson(res, 204, {});
    return;
  }

  if (req.method === 'GET' && url.pathname === '/api/health') {
    sendJson(res, 200, { status: 'ok' });
    return;
  }

  if (req.method === 'POST' && url.pathname === '/api/contact') {
    let body = '';

    req.on('data', (chunk) => {
      body += chunk;
    });

    req.on('end', async () => {
      try {
        const payload = JSON.parse(body || '{}');
        const { name, email, subject, message } = payload;

        if (!name || !email || !subject || !message) {
          sendJson(res, 400, { error: 'Please fill in all required fields.' });
          return;
        }

        const messages = await readMessages();
        messages.push({
          name,
          email,
          subject,
          message,
          createdAt: new Date().toISOString(),
        });

        await writeMessages(messages);
        console.log(`[contact] ${new Date().toISOString()} - ${name} <${email}>: ${subject}`);
        sendJson(res, 201, { message: 'Message received successfully.' });
      } catch {
        sendJson(res, 400, { error: 'Invalid request payload.' });
      }
    });

    return;
  }

  sendJson(res, 404, { error: 'Not found' });
});

server.listen(PORT, () => {
  console.log(`Contact API is running on http://localhost:${PORT}`);
});
