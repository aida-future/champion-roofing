// Audit image usage: duplicates within a page, and slug vs page topic.
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const SITE = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..', 'site');

function walk(d, o = []) {
  for (const e of fs.readdirSync(d, { withFileTypes: true })) {
    const f = path.join(d, e.name);
    if (e.isDirectory()) walk(f, o);
    else if (e.name.endsWith('.html')) o.push(f);
  }
  return o;
}

// Topic families a page is allowed to draw from, keyed by path fragment.
const EXPECT = {
  'roof-repair': ['repair', 'hail', 'crew', 'storm', 'res', 'install', 'real'],
  'roof-replacement': ['replace', 'install', 'crew', 'res', 'real', 'repair'],
  'roof-inspection': ['hail', 'real', 'storm', 'res', 'crew', 'drone'],
  'storm-damage': ['storm', 'hail', 'repair', 'crew', 'res', 'real'],
  'metal-roofing': ['metal', 'crew', 'comm', 'real', 'res'],
  'specialty-roofing': ['specialty', 'real-tile', 'metal-tile', 'install', 'res', 'real'],
  gutters: ['gutter', 'hail', 'res', 'crew', 'storm', 'real'],
  'window-replacement': ['window', 'hail', 'storm', 'real'],
  'commercial/tpo-roofing': ['tpo', 'comm', 'real-commercial', 'real-flat'],
  'commercial/roof-coatings': ['tpo', 'comm', 'real-flat', 'real-commercial'],
  'commercial/roof-maintenance': ['comm', 'tpo', 'real-commercial', 'real-flat'],
  commercial: ['comm', 'tpo', 'real-commercial', 'real-flat', 'metal'],
};

const files = walk(SITE);
const problems = [];
const usage = new Map();

for (const f of files) {
  const rel = '/' + path.relative(SITE, f).replace(/\\/g, '/').replace(/\/?index\.html$/, '');
  const page = rel || '/';
  const html = fs.readFileSync(f, 'utf8');

  // One entry per rendered <img>, not per URL: src and srcset both name the
  // same file, and the OG tags name it again, which triples every count.
  const body = html.replace(/<head[\s\S]*?<\/head>/, '');
  const slugs = [...body.matchAll(/<img\b[^>]*?src="\/assets\/img\/([a-z0-9-]+)-\d+\.jpg"/g)].map((m) => m[1]);
  const counts = {};
  slugs.forEach((s) => { counts[s] = (counts[s] || 0) + 1; });

  // The client dislikes the same photo appearing repeatedly on one page.
  for (const [slug, n] of Object.entries(counts)) {
    if (n >= 3) problems.push(`${page}: "${slug}" used ${n} times on one page`);
  }

  // Topic check
  // Blog articles legitimately show other articles' thumbnails in "keep reading".
  const key = page.startsWith('/blog') ? null : Object.keys(EXPECT).find((k) => page.includes(k));
  if (key) {
    const allowed = EXPECT[key];
    for (const slug of new Set(slugs)) {
      if (!allowed.some((a) => slug.startsWith(a))) {
        problems.push(`${page}: "${slug}" may not match the page topic (${key})`);
      }
    }
  }

  for (const s of new Set(slugs)) {
    if (!usage.has(s)) usage.set(s, []);
    usage.get(s).push(page);
  }
}

// Images processed but never used
const manifest = JSON.parse(fs.readFileSync(path.join(path.dirname(fileURLToPath(import.meta.url)), 'img-manifest.json'), 'utf8'));
const unused = Object.keys(manifest).filter((s) => !usage.has(s));

console.log(`Images in manifest: ${Object.keys(manifest).length}`);
console.log(`Images used:        ${usage.size}`);
console.log(`Never used:         ${unused.length}${unused.length ? ' -> ' + unused.join(', ') : ''}`);
console.log('');
if (problems.length) {
  console.log(`Possible mismatches (${problems.length}):`);
  problems.forEach((p) => console.log('  ' + p));
} else {
  console.log('No duplicate-heavy or off-topic image usage found.');
}
