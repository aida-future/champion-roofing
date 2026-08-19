// On-page SEO audit across a set of pages: titles, descriptions, H1s, H2 sets,
// canonicals, schema, internal links, and body text overlap between pages.
// Usage: node scripts/seo-audit.mjs [pathPrefix]   (default: /service-areas/)
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const SITE = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..', 'site');
const ARG = process.argv[2] || '/service-areas/';
const LIST = ARG.includes(',') ? ARG.split(',') : null;
const PREFIX = LIST ? '' : ARG;

function walk(d, o = []) {
  for (const e of fs.readdirSync(d, { withFileTypes: true })) {
    const f = path.join(d, e.name);
    if (e.isDirectory()) walk(f, o); else if (e.name === 'index.html') o.push(f);
  }
  return o;
}
const pages = walk(SITE)
  .map((f) => ({ f, p: '/' + path.relative(SITE, path.dirname(f)).replace(/\\/g, '/') }))
  .filter((x) => LIST ? LIST.includes(x.p) : (x.p.startsWith(PREFIX) && x.p !== PREFIX.replace(/\/$/, '')))
  .sort((a, b) => a.p.localeCompare(b.p));

const pick = (h, re) => (h.match(re) || [])[1] || '';
const strip = (s) => s.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
const words = (s) => strip(s).toLowerCase().split(/[^a-z0-9']+/).filter((w) => w.length > 3);
const shingles = (arr, k = 8) => { const s = new Set(); for (let i = 0; i + k <= arr.length; i++) s.add(arr.slice(i, i + k).join(' ')); return s; };

const rows = pages.map(({ f, p }) => {
  const h = fs.readFileSync(f, 'utf8');
  const main = (h.match(/<main[\s\S]*?<\/main>/) || [h])[0]
    .replace(/<nav[\s\S]*?<\/nav>/g, '')
    .replace(/<footer[\s\S]*?<\/footer>/g, '');
  const title = pick(h, /<title>([^<]+)/);
  const desc = pick(h, /<meta name="description" content="([^"]+)"/);
  const h1 = strip(pick(h, /<h1[^>]*>([\s\S]*?)<\/h1>/));
  const h2s = [...main.matchAll(/<h2[^>]*>([\s\S]*?)<\/h2>/g)].map((m) => strip(m[1]));
  const canonical = pick(h, /<link rel="canonical" href="([^"]+)"/);
  const ld = [...h.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)].map((m) => m[1]).join('');
  const schemaTypes = [...new Set([...ld.matchAll(/"@type":\s*"([A-Za-z]+)"/g)].map((m) => m[1]))];
  const serviceName = pick(ld, /"@type":"Service"[^}]*?"name":"([^"]+)"/) || pick(ld, /"name":"(Roofing in [^"]+)"/);
  const internal = [...new Set([...main.matchAll(/href="(\/[^"#?]*)"/g)].map((m) => m[1]))];
  const body = words(main.replace(/<h1[\s\S]*?<\/h1>/, ''));
  return { p, title, desc, h1, h2s, canonical, schemaTypes, serviceName, internal, body, bodyWords: body.length, sh: shingles(body) };
});

// Uniqueness checks
const dup = (key) => { const m = new Map(); rows.forEach((r) => { const k = r[key]; m.set(k, (m.get(k) || []).concat(r.p)); }); return [...m.entries()].filter(([, v]) => v.length > 1); };

console.log(`SEO audit: ${rows.length} pages under ${PREFIX}\n`);
console.log('PAGE                              WORDS  TITLE(len)  DESC(len)  H2s  LINKS  SCHEMA');
rows.forEach((r) => console.log(
  `${r.p.padEnd(34)}${String(r.bodyWords).padStart(5)}  ${String(r.title.length).padStart(9)}  ${String(r.desc.length).padStart(9)}  ${String(r.h2s.length).padStart(3)}  ${String(r.internal.length).padStart(5)}  ${r.schemaTypes.filter((t) => ['Service', 'FAQPage', 'BreadcrumbList', 'WebPage'].includes(t)).join(',')}`,
));

console.log('\n--- Titles ---'); rows.forEach((r) => console.log(`  ${r.p.padEnd(34)} ${r.title}`));
console.log('\n--- Meta descriptions ---'); rows.forEach((r) => console.log(`  ${r.p.padEnd(34)} ${r.desc}`));
console.log('\n--- H1 ---'); rows.forEach((r) => console.log(`  ${r.p.padEnd(34)} ${r.h1}`));

const problems = [];
for (const k of ['title', 'desc', 'h1']) dup(k).forEach(([v, ps]) => problems.push(`DUPLICATE ${k}: "${v.slice(0, 60)}" on ${ps.join(', ')}`));
rows.forEach((r) => {
  const util = /^\/(404|410|privacy|sms-|subscribe)/.test(r.p);
  if (!util && r.title.length > 60) problems.push(`${r.p}: title ${r.title.length} chars (aim 50 to 60)`);
  if (!util && (r.desc.length > 160 || r.desc.length < 120)) problems.push(`${r.p}: description ${r.desc.length} chars (aim 120 to 160)`);
  if (!r.canonical.endsWith(r.p)) problems.push(`${r.p}: canonical mismatch ${r.canonical}`);
  const isService = r.schemaTypes.includes('Service');
  if (isService && !r.schemaTypes.includes('BreadcrumbList')) problems.push(`${r.p}: no BreadcrumbList`);
  if (isService && !r.schemaTypes.includes('FAQPage')) problems.push(`${r.p}: service page without FAQPage`);
});

// Body overlap: share of one page's 8-word shingles that appear on another page.
console.log('\n--- Body text overlap (share of 8-word shingles shared with the most similar other page) ---');
rows.forEach((a) => {
  let worst = { p: '', pct: 0 };
  rows.forEach((b) => {
    if (a === b) return;
    let hit = 0; for (const s of a.sh) if (b.sh.has(s)) hit++;
    const pct = a.sh.size ? Math.round((hit / a.sh.size) * 100) : 0;
    if (pct > worst.pct) worst = { p: b.p, pct };
  });
  console.log(`  ${a.p.padEnd(34)} ${String(worst.pct).padStart(3)}% shared with ${worst.p}`);
  if (worst.pct > 45) problems.push(`${a.p}: ${worst.pct}% of body shingles also on ${worst.p} (near duplicate risk)`);
});

// H2 sets that are identical across pages
const h2key = (r) => r.h2s.join(' | ');
dup('h2s').length; // no-op, h2s is array
const h2m = new Map(); rows.forEach((r) => { const k = h2key(r); h2m.set(k, (h2m.get(k) || []).concat(r.p)); });
[...h2m.entries()].filter(([, v]) => v.length > 1).forEach(([k, v]) => problems.push(`IDENTICAL H2 set on ${v.length} pages: ${v.join(', ')}`));

console.log('\n' + (problems.length ? `PROBLEMS (${problems.length}):\n  - ` + problems.join('\n  - ') : 'No problems found.'));
process.exitCode = problems.length ? 1 : 0;
