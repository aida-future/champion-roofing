// Serves the retired solar article URL with a true 410 Gone. The brief
// requires 410, never a redirect to the homepage. A static rewrite alone can
// only return 200, so this returns the designed page with the right status.
// Copied into site/api/ by bake.mjs; edit the template, not the copy.
import { readFileSync } from 'node:fs';
import { join } from 'node:path';

export default function handler(req, res) {
  const html = readFileSync(join(process.cwd(), '410', 'index.html'), 'utf8');
  res.status(410);
  res.setHeader('Content-Type', 'text/html; charset=utf-8');
  res.setHeader('X-Robots-Tag', 'noindex');
  res.setHeader('Cache-Control', 'public, max-age=3600');
  res.end(html);
}
