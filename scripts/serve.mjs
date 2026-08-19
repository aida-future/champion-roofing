// Local preview server that mirrors Vercel's cleanUrls behaviour,
// so what you review locally is what deploys.
import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const SITE = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..', 'site');
const PORT = Number(process.env.PORT || 4321);

const TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.xml': 'application/xml; charset=utf-8',
  '.txt': 'text/plain; charset=utf-8',
  '.jpg': 'image/jpeg',
  '.webp': 'image/webp',
  '.png': 'image/png',
  '.ico': 'image/x-icon',
  '.svg': 'image/svg+xml',
};

// Same permanent redirects Vercel will serve.
const { REDIRECTS } = await import('./data.mjs');
const redirectMap = new Map(REDIRECTS);

http.createServer((req, res) => {
  const url = decodeURIComponent(req.url.split('?')[0]);
  const clean = url.length > 1 ? url.replace(/\/$/, '') : url;

  if (redirectMap.has(clean)) {
    res.writeHead(301, { Location: redirectMap.get(clean) });
    return res.end();
  }
  if (clean.startsWith('/blog/tag/')) {
    res.writeHead(301, { Location: '/blog' });
    return res.end();
  }

  const candidates = [
    path.join(SITE, clean),
    path.join(SITE, clean, 'index.html'),
    path.join(SITE, clean + '.html'),
  ];
  for (const file of candidates) {
    if (fs.existsSync(file) && fs.statSync(file).isFile()) {
      const ext = path.extname(file);
      res.writeHead(200, { 'Content-Type': TYPES[ext] || 'application/octet-stream' });
      return res.end(fs.readFileSync(file));
    }
  }

  const notFound = path.join(SITE, '404', 'index.html');
  res.writeHead(404, { 'Content-Type': 'text/html; charset=utf-8' });
  res.end(fs.existsSync(notFound) ? fs.readFileSync(notFound) : 'Not found');
}).listen(PORT, () => console.log(`Champion Roofing preview on http://localhost:${PORT}`));
