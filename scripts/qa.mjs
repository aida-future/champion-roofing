// Static QA sweep over the generated site.
// Run the preview server first, then: node scripts/qa.mjs
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const SITE = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..', 'site');
const problems = [];
const warn = (page, msg) => problems.push({ level: 'WARN', page, msg });
const fail = (page, msg) => problems.push({ level: 'FAIL', page, msg });

function walk(dir, out = []) {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, e.name);
    if (e.isDirectory()) walk(full, out);
    else if (e.name.endsWith('.html')) out.push(full);
  }
  return out;
}

const files = walk(SITE);
const routes = new Set(files.map((f) => {
  const rel = '/' + path.relative(SITE, f).replace(/\\/g, '/').replace(/index\.html$/, '');
  return rel.length > 1 ? rel.replace(/\/$/, '') : '/';
}));

// Every asset that exists on disk
const assetSet = new Set();
(function collect(dir) {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, e.name);
    if (e.isDirectory()) collect(full);
    else assetSet.add('/' + path.relative(SITE, full).replace(/\\/g, '/'));
  }
})(SITE);

let totalWords = 0;
const wordCounts = [];

for (const file of files) {
  const route = '/' + path.relative(SITE, file).replace(/\\/g, '/').replace(/index\.html$/, '');
  const page = route.length > 1 ? route.replace(/\/$/, '') : '/';
  const html = fs.readFileSync(file, 'utf8');

  // Structure
  const h1s = html.match(/<h1[\s>]/g) || [];
  if (h1s.length !== 1) fail(page, `expected exactly 1 <h1>, found ${h1s.length}`);
  if (!/<title>[^<]{10,}<\/title>/.test(html)) fail(page, 'missing or short <title>');
  if (!/<meta name="description" content="[^"]{50,}"/.test(html)) fail(page, 'missing or short meta description');
  if (!/<link rel="canonical" href="https:\/\/championroofingok\.com/.test(html)) fail(page, 'missing canonical');
  if (!html.trimEnd().endsWith('</html>')) fail(page, 'file does not end with </html>');

  // Structured data
  const ld = html.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/);
  if (!ld) fail(page, 'no JSON-LD');
  else {
    try {
      const parsed = JSON.parse(ld[1]);
      if (!parsed['@graph'] || !parsed['@graph'].length) fail(page, 'JSON-LD has empty @graph');
    } catch (e) {
      fail(page, `invalid JSON-LD: ${e.message}`);
    }
  }

  // Internal links resolve
  const hrefs = [...html.matchAll(/href="(\/[^"#?]*)"/g)].map((m) => m[1]);
  for (const href of new Set(hrefs)) {
    const clean = href.length > 1 ? href.replace(/\/$/, '') : '/';
    if (assetSet.has(clean)) continue;
    if (!routes.has(clean)) fail(page, `broken internal link: ${href}`);
  }

  // Images resolve and carry dimensions
  const imgTags = [...html.matchAll(/<img\b[^>]*>/g)].map((m) => m[0]);
  for (const tag of imgTags) {
    const src = (tag.match(/src="([^"]+)"/) || [])[1];
    if (src && src.startsWith('/') && !assetSet.has(src)) fail(page, `missing image file: ${src}`);
    if (!/width="\d+"/.test(tag) || !/height="\d+"/.test(tag)) fail(page, `img without width/height: ${src}`);
    if (!/alt="/.test(tag)) fail(page, `img without alt: ${src}`);
  }
  // srcset entries
  for (const m of html.matchAll(/srcset="([^"]+)"/g)) {
    for (const part of m[1].split(',')) {
      const url = part.trim().split(/\s+/)[0];
      if (url.startsWith('/') && !assetSet.has(url)) fail(page, `missing srcset file: ${url}`);
    }
  }

  // Copy rules: no em dash, en dash, double hyphen or spaced hyphen in visible text.
  const visible = html
    .replace(/<script[\s\S]*?<\/script>/g, '')
    .replace(/<style[\s\S]*?<\/style>/g, '')
    .replace(/<[^>]+>/g, ' ');
  // Customer reviews are reproduced verbatim and must not be edited to satisfy
  // our house style, so the dash rules apply to our own copy only.
  const ours = html
    .replace(/<script[\s\S]*?<\/script>/g, '')
    .replace(/<style[\s\S]*?<\/style>/g, '')
    .replace(/<figure class="review[^"]*"[\s\S]*?<\/figure>/g, '')
    .replace(/<[^>]+>/g, ' ');
  if (/[–—]/.test(ours)) fail(page, 'contains an en dash or em dash');
  if (/\s--\s|\s-\s/.test(ours)) fail(page, 'contains a spaced or double hyphen');
  // Emoji
  if (/[\u{1F300}-\u{1FAFF}\u{2600}-\u{27BF}]/u.test(visible)) fail(page, 'contains an emoji');
  // The wrong licence number must never appear
  if (/800003787/.test(html)) fail(page, 'contains the incorrect licence number 800003787');
  // A stray backslash in visible copy means a template escaped something twice
  if (visible.includes(String.fromCharCode(92))) fail(page, 'stray backslash in visible text');

  // Depth
  const words = visible.split(/\s+/).filter(Boolean).length;
  totalWords += words;
  wordCounts.push({ page, words });

  // Accessibility basics
  if (!/<html lang="en"/.test(html)) fail(page, 'missing lang attribute');
  if (!/class="skip"/.test(html)) warn(page, 'missing skip link');
}

// Sitemap sanity
const sitemap = fs.readFileSync(path.join(SITE, 'sitemap.xml'), 'utf8');
const smUrls = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
for (const u of smUrls) {
  const p = u.replace('https://championroofingok.com', '') || '/';
  const clean = p.length > 1 ? p.replace(/\/$/, '') : '/';
  if (!routes.has(clean)) fail('sitemap.xml', `lists a URL that does not exist: ${u}`);
}
for (const bad of ['/home', '/subscribe', '/sms-privacy-policy', '/sms-terms', '/blog/tag']) {
  if (sitemap.includes(bad)) fail('sitemap.xml', `must not list ${bad}`);
}
// Required URLs that carry SEO equity
const REQUIRED = ['/', '/commercial', '/gutters', '/residential-roofing', '/about', '/contact', '/blog',
  '/roof-repair', '/roof-replacement', '/roof-inspection', '/storm-damage-roof-repair', '/metal-roofing',
  '/window-replacement', '/our-work', '/commercial/tpo-roofing',
  '/blog/7-common-roofing-mistakes-to-avoid-and-how-champion-roofing-ensures-perfection',
  '/blog/choosing-the-right-roofing-material-for-your-home',
  '/blog/comparing-the-benefits-of-metal-roofing-vs-asphalt-shingles',
  '/blog/a-season-by-season-guide-to-roof-inspections-and-maintenance'];
for (const r of REQUIRED) {
  if (!routes.has(r)) fail('routes', `REQUIRED URL missing: ${r}`);
}

/* ---------- Report ---------- */
const fails = problems.filter((p) => p.level === 'FAIL');
const warns = problems.filter((p) => p.level === 'WARN');

console.log(`Pages checked: ${files.length}`);
console.log(`Total words:   ${totalWords.toLocaleString()}`);
console.log('');
console.log('Word count by page (money pages should be 1,400+):');
wordCounts.sort((a, b) => b.words - a.words).forEach((w) => {
  const flagLow = w.words < 400 ? '  <- thin' : '';
  console.log(`  ${String(w.words).padStart(5)}  ${w.page}${flagLow}`);
});
console.log('');
if (fails.length) {
  console.log(`FAILURES (${fails.length}):`);
  fails.forEach((p) => console.log(`  [${p.page}] ${p.msg}`));
} else {
  console.log('No failures.');
}
if (warns.length) {
  console.log(`\nWarnings (${warns.length}):`);
  warns.forEach((p) => console.log(`  [${p.page}] ${p.msg}`));
}
process.exit(fails.length ? 1 : 0);
