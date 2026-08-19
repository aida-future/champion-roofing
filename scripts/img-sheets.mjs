// Build one contact sheet per page showing every photo it uses, labelled,
// so relevance can be judged by eye rather than by filename.
import fs from 'node:fs';
import path from 'node:path';
import { execFileSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const SITE = path.join(ROOT, 'site');
const OUT = path.join(ROOT, 'shots', 'sheets');
fs.mkdirSync(OUT, { recursive: true });

function walk(d, o = []) {
  for (const e of fs.readdirSync(d, { withFileTypes: true })) {
    const f = path.join(d, e.name);
    if (e.isDirectory() && e.name !== 'assets') walk(f, o);
    else if (e.name === 'index.html') o.push(f);
  }
  return o;
}

const pages = walk(SITE).map((f) => {
  const rel = '/' + path.relative(SITE, path.dirname(f)).replace(/\\/g, '/');
  const page = rel === '/.' || rel === '/' ? '/' : rel;
  const html = fs.readFileSync(f, 'utf8').replace(/<head[\s\S]*?<\/head>/, '');
  const slugs = [...new Set([...html.matchAll(/<img\b[^>]*?src="\/assets\/img\/([a-z0-9-]+)-\d+\.jpg"/g)].map((m) => m[1]))];
  return { page, slugs };
}).filter((p) => p.slugs.length);

const only = process.argv[2];
for (const { page, slugs } of pages) {
  if (only && page !== only) continue;
  const name = page === '/' ? 'home' : page.replace(/^\//, '').replace(/\//g, '_');
  const tiles = slugs.map((s) => path.join(SITE, 'assets', 'img', `${s}-640.jpg`)).filter(fs.existsSync);
  if (!tiles.length) continue;
  const args = [];
  for (const t of tiles) {
    const label = path.basename(t).replace('-640.jpg', '');
    args.push('(', t, '-resize', '300x220^', '-gravity', 'center', '-extent', '300x220',
      '-gravity', 'south', '-background', '#111', '-fill', 'white', '-pointsize', '13', '-splice', '0x22', '-annotate', '+0+4', label, ')');
  }
  args.push('+append', '-background', '#faf7f4', '-splice', '0x30', '-gravity', 'northwest', '-fill', '#111', '-pointsize', '18', '-annotate', '+10+6', page, path.join(OUT, `${name}.png`));
  execFileSync('magick', args);
  console.log(`${page}: ${slugs.length} images -> sheets/${name}.png`);
}
