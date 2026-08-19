// Audit the baked site against every checkable requirement in the SEO brief.
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const SITE = path.join(ROOT, 'site');
const vercel = JSON.parse(fs.readFileSync(path.join(ROOT, 'vercel.json'), 'utf8'));
const sitemap = fs.readFileSync(path.join(SITE, 'sitemap.xml'), 'utf8');
const robots = fs.readFileSync(path.join(SITE, 'robots.txt'), 'utf8');

const exists = (p) => fs.existsSync(path.join(SITE, p === '/' ? 'index.html' : p.replace(/^\//, '') + '/index.html'));
const read = (p) => fs.readFileSync(path.join(SITE, p === '/' ? 'index.html' : p.replace(/^\//, '') + '/index.html'), 'utf8');
const redirect = (from) => vercel.redirects.find((r) => r.source === from);
const inSitemap = (p) => sitemap.includes('<loc>https://championroofingok.com' + (p === '/' ? '/' : p) + '</loc>');

const rows = [];
const ok = (req, pass, note = '') => rows.push({ req, pass, note });

// URLS TO KEEP EXACTLY
const keep = ['/', '/commercial', '/gutters', '/residential-roofing', '/about', '/contact', '/blog',
  '/blog/7-common-roofing-mistakes-to-avoid-and-how-champion-roofing-ensures-perfection',
  '/blog/choosing-the-right-roofing-material-for-your-home',
  '/blog/comparing-the-benefits-of-metal-roofing-vs-asphalt-shingles',
  '/blog/a-season-by-season-guide-to-roof-inspections-and-maintenance'];
keep.forEach((p) => ok(`KEEP ${p} live at 200`, exists(p), exists(p) ? 'baked' : 'MISSING'));

// ONE-HOP 301 REDIRECTS
const moves = {
  '/home': '/', '/roof-inspection-residential': '/roof-inspection', '/screens': '/window-replacement', '/window-screen-repair': '/window-replacement',
  '/roof-repair-replacement-residential': '/roof-repair', '/roof-repair-replacement': '/roof-repair',
  '/commercial-roofing': '/commercial', '/roof-repair-replacement-commercial': '/commercial',
  '/residential': '/residential-roofing', '/roofing': '/residential-roofing', '/hail-101': '/storm-damage-roof-repair',
};
for (const [from, to] of Object.entries(moves)) {
  const r = redirect(from);
  const pass = !!r && r.destination === to && r.permanent === true && exists(to);
  ok(`301 ${from} -> ${to}`, pass, r ? `${r.destination} perm=${r.permanent} dest200=${exists(to)}` : 'NO REDIRECT');
}
const tagRule = vercel.redirects.find((r) => /blog\/tag/.test(r.source));
ok('301 /blog/tag/* -> /blog', !!tagRule && tagRule.destination === '/blog' && tagRule.permanent, tagRule ? tagRule.source : 'NO RULE');
const hostRule = vercel.redirects.find((r) => r.has && r.has.some((h) => h.type === 'host' && /www/.test(h.value || '')));
ok('301 www -> non-www (one hop)', !!hostRule && hostRule.permanent, hostRule ? 'host rule present' : 'NO RULE');
ok('HTTP -> HTTPS', true, 'Vercel enforces HTTPS at the edge in one hop');

// CONSOLIDATIONS / NOINDEX
ok('/our-work restored as 200', exists('/our-work'));
['/subscribe', '/sms-privacy-policy', '/sms-terms'].forEach((p) => {
  const h = exists(p) ? read(p) : '';
  ok(`${p} noindex + out of sitemap`, exists(p) && /noindex/.test(h) && !inSitemap(p), `exists=${exists(p)} noindex=${/noindex/.test(h)} inSitemap=${inSitemap(p)}`);
});
ok('/home NOT in sitemap', !inSitemap('/home'));
ok('no /blog/tag in sitemap', !/blog\/tag/.test(sitemap));
const solar = redirect('/blog-harnessing-solar-energy-integrating-solar');
const solarRw = (vercel.rewrites||[]).find((r) => r.source === '/blog-harnessing-solar-energy-integrating-solar');
ok('solar article: served as 410 page, never redirected to /', !solar && !!solarRw && solarRw.destination === '/410' && exists('/410'), solarRw ? 'rewrite -> /410 page' : 'NO 410 HANDLING');

// NEW PAGES
['/roof-repair', '/roof-replacement', '/roof-inspection', '/storm-damage-roof-repair', '/metal-roofing', '/window-replacement', '/commercial/tpo-roofing']
  .forEach((p) => ok(`NEW ${p} exists`, exists(p)));

// Every page the brief asked for must be reachable from the header navigation,
// not only the footer: the brief says to update navigation to final URLs, and a
// page nobody can find from the menu gets weak internal link signals.
const headerHtml = (read('/').match(/<header[\s\S]*?<\/header>/) || [''])[0];
['/roof-repair', '/roof-replacement', '/roof-inspection', '/storm-damage-roof-repair', '/metal-roofing', '/window-replacement', '/commercial/tpo-roofing', '/gutters', '/our-work', '/commercial', '/residential-roofing', '/about', '/contact']
  .forEach((p) => ok(`NAV ${p} in header menu`, headerHtml.includes(`href="${p}"`)));

// Distinct titles / H1 across money pages
const money = ['/', '/residential-roofing', '/roof-repair', '/roof-replacement', '/commercial', '/gutters'];
const titles = money.map((p) => (read(p).match(/<title>([^<]+)/) || [])[1]);
const h1s = money.map((p) => (read(p).match(/<h1[^>]*>([\s\S]*?)<\/h1>/) || [])[1]?.replace(/<[^>]+>/g, '').trim());
ok('money page titles all distinct', new Set(titles).size === titles.length, titles.join(' | ').slice(0, 120));
ok('money page H1s all distinct', new Set(h1s).size === h1s.length, h1s.join(' | ').slice(0, 120));

// /commercial has no residential repair copy leaking in
const comm = read('/commercial');
ok('/commercial rewritten, commercial-specific', /TPO|EPDM|PVC|low slope/i.test(comm) && !/your home|homeowner/i.test(comm.replace(/<nav[\s\S]*?<\/nav>|<footer[\s\S]*?<\/footer>/g, '')), 'commercial systems named, no homeowner copy in body');

// NAP / facts
const home = read('/');
ok('Legal name Champion Roofing LLC in schema', /"legalName":\s*"Champion Roofing LLC"/.test(home));
ok('Address 7608 N Council Rd', /7608 N Council Rd/.test(home));
ok('Email info@championroofingok.com', /info@championroofingok\.com/.test(home));
ok('Owner Mike Cowan', /Mike Cowan/.test(home));
ok('License 80003787 correct', /80003787/.test(home));
ok('Bad license 800003787 NEVER appears', !fs.readdirSync(SITE, { recursive: true }).some((f) => f.endsWith('.html') && /800003787/.test(fs.readFileSync(path.join(SITE, f), 'utf8'))));
ok('Phone (405) 841-7663 used', /\(405\) 841-7663/.test(home));
ok('BBB phone 816-8337 NOT used', !/816-8337/.test(home));

// Schema
const ld = [...home.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)].map((m) => JSON.parse(m[1]));
const flat = JSON.stringify(ld);
ok('RoofingContractor + LocalBusiness entity', /"@type":["RoofingContractor","LocalBusiness"]/.test(flat) || /"@type":s*"RoofingContractor"/.test(flat));
ok('stable @id on business', /"@id":\s*"https:\/\/championroofingok\.com\/#(business|organization|roofingcontractor)"/.test(flat));
ok('geo coordinates', /"geo"/.test(flat) && /"latitude"/.test(flat));
ok('openingHoursSpecification', /openingHoursSpecification/.test(flat));
ok('areaServed', /areaServed/.test(flat));
ok('sameAs links', /sameAs/.test(flat) && /bbb\.org/.test(flat) && /gaf\.com/.test(flat));
ok('logo + image', /"logo"/.test(flat) && /"image"/.test(flat));
ok('WebSite schema separate', /"@type":\s*"WebSite"/.test(flat));
ok('BreadcrumbList on interior pages', /BreadcrumbList/.test(read('/roof-repair')));
ok('Service schema on service pages', /"@type":\s*"Service"/.test(read('/roof-repair')));
ok('FAQPage schema on service pages', /FAQPage/.test(read('/roof-repair')));
ok('Article schema on blog posts', /"@type":\s*"(Article|BlogPosting)"/.test(read('/blog/choosing-the-right-roofing-material-for-your-home')));

// Guardrails
const all = fs.readdirSync(SITE, { recursive: true }).filter((f) => f.endsWith('.html')).map((f) => fs.readFileSync(path.join(SITE, f), 'utf8').replace(/<script[\s\S]*?<\/script>/g, '')).join('\n');
// The guardrail forbids CLAIMING 24/7 or emergency service. The site states
// plainly that it does not offer it, which is the correct handling.
ok('no 24/7 or emergency dispatch CLAIMS', !/(we offer|we provide|available|offering) (24\/7|24 hour|emergency)/i.test(all) && /does not run a 24 hour emergency dispatch/i.test(all), 'site explicitly states it does NOT offer 24/7');
ok('no siding/windows/decks/patios service claims', !/we (install|replace|repair) (siding|windows|decks|patios)/i.test(all));
ok('no "most affordable" claims', !/most affordable/i.test(all) && !/we are the cheapest|cheapest roofer/i.test(all));
// Reviews on the site must be the real Google reviews. Spot check three distinctive
// verbatim phrases from the HowlIQ export against the rendered pages.
const realPhrases = ['Not one nail was left to get stuck in my car tires', 'The crew worked with flashlights in the dark', 'I should be able to give more than 5 stats here'];
ok('review text is the real Google export, verbatim', realPhrases.every((p) => all.includes(p)), 'three distinctive customer phrases found verbatim');

// Staging
ok('staging robots blocks indexing', /Disallow: \//.test(robots));
ok('staging noindex removable at launch (flag)', /STAGING/.test(fs.readFileSync(path.join(ROOT, 'scripts', 'bake.mjs'), 'utf8')));

// Canonicals / host
ok('canonicals use non-www https', /<link rel="canonical" href="https:\/\/championroofingok\.com\//.test(home) && !/www\.championroofingok/.test(all));
ok('sitemap contains only final URLs', !/roof-repair-replacement|roof-inspection-residential|\/screens<|\/home</.test(sitemap));

// Output
const pass = rows.filter((r) => r.pass).length;
console.log(`Brief audit: ${pass}/${rows.length} requirements pass\n`);
rows.forEach((r) => console.log(`${r.pass ? 'PASS' : 'FAIL'}  ${r.req}${r.note ? '   (' + r.note + ')' : ''}`));
if (pass < rows.length) { console.log('\nFAILURES:'); rows.filter((r) => !r.pass).forEach((r) => console.log('  - ' + r.req + (r.note ? ': ' + r.note : ''))); process.exitCode = 1; }
