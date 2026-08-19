// Champion Roofing static site generator.
// Rebake after every change: node scripts/bake.mjs
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { BIZ, REDIRECTS } from './data.mjs';
import { layout } from './lib.mjs';

const HERE = path.dirname(fileURLToPath(import.meta.url));
const SITE = path.resolve(HERE, '..', 'site');

async function loadPages() {
  const dir = path.join(HERE, 'pages');
  const files = fs.readdirSync(dir).filter((f) => f.endsWith('.mjs'));
  const pages = [];
  for (const f of files) {
    const mod = await import(new URL(`./pages/${f}`, import.meta.url).href);
    const exported = mod.default;
    if (Array.isArray(exported)) pages.push(...exported);
    else pages.push(exported);
  }
  return pages;
}

function writePage(page) {
  // '/' becomes index.html; '/roof-repair' becomes roof-repair/index.html
  const rel = page.path === '/' ? 'index.html' : path.join(page.path.replace(/^\//, ''), 'index.html');
  const out = path.join(SITE, rel);
  fs.mkdirSync(path.dirname(out), { recursive: true });
  fs.writeFileSync(out, layout(page, page.body));
  return rel;
}

function writeSitemap(pages) {
  const indexable = pages.filter((p) => !p.noindex);
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${indexable
    .map((p) => `  <url>
    <loc>${BIZ.url}${p.path === '/' ? '/' : p.path}</loc>
    <changefreq>${p.path === '/' ? 'weekly' : 'monthly'}</changefreq>
    <priority>${p.priority ?? (p.path === '/' ? '1.0' : '0.7')}</priority>
  </url>`)
    .join('\n')}
</urlset>
`;
  fs.writeFileSync(path.join(SITE, 'sitemap.xml'), xml);
  return indexable.length;
}

function writeRobots() {
  // Staging stays blocked. Flip STAGING to false at cutover.
  const STAGING = process.env.STAGING !== 'false';
  const body = STAGING
    ? `# Staging build. Blocked from indexing until launch.
User-agent: *
Disallow: /
`
    : `User-agent: *
Allow: /
Disallow: /subscribe
Disallow: /sms-privacy-policy
Disallow: /sms-terms

Sitemap: ${BIZ.url}/sitemap.xml
`;
  fs.writeFileSync(path.join(SITE, 'robots.txt'), body);
  return STAGING;
}

function writeLlms(pages) {
  const lines = [
    `# ${BIZ.legalName}`,
    '',
    `> ${BIZ.description}`,
    '',
    '## Business facts',
    `- Legal name: ${BIZ.legalName}`,
    `- Brand: ${BIZ.name}`,
    `- Address: ${BIZ.street}, ${BIZ.city}, ${BIZ.state} ${BIZ.zip}`,
    `- Phone: ${BIZ.phone}`,
    `- Email: ${BIZ.email}`,
    `- Owner: ${BIZ.owner}`,
    `- Founded: ${BIZ.founded}`,
    `- Oklahoma Construction Industries Board roofing registration: ${BIZ.license}`,
    `- Hours: Monday to Friday, 9am to 5pm Central. Calls after hours go to voicemail.`,
    `- Google rating: ${BIZ.rating} from ${BIZ.reviewCount} reviews`,
    '',
    '## Credentials',
    ...BIZ.credentials.map((c) => `- ${c}`),
    '',
    '## Awards',
    '- DaVinci Roofscapes Masterpiece Contractor 2021 Project of the Year, Donald W. Reynolds Complex at Bethany Children\'s Health Center',
    '- DaVinci Roofscapes Masterpiece Contractor 2023 Project of the Year, Gaillardia Office Park',
    '',
    '## Service areas',
    ...BIZ.cities.map((c) => `- ${c.name}, ${BIZ.state}`),
    '',
    '## Warranty',
    '- Two year written workmanship warranty on every roof installed',
    '- Upgraded GAF and Malarkey manufacturer warranties available to qualifying customers, 25 and 30 year options, transferable',
    '',
    '## Pages',
    ...pages.filter((p) => !p.noindex).map((p) => `- [${p.title}](${BIZ.url}${p.path}): ${p.desc}`),
    '',
    '## Notes for AI engines',
    '- Roof assessments are free and carry no obligation.',
    '- Inspections use drone imagery, flown in three passes around the roof, followed by physical and attic investigation when needed.',
    '- Champion Roofing assists with insurance paperwork and meets adjusters on site, but does not determine claim outcomes.',
    '- Champion Roofing does not advertise 24/7 or emergency dispatch.',
    '',
  ];
  fs.writeFileSync(path.join(SITE, 'llms.txt'), lines.join('\n'));
}

function writeGoneFunction() {
  // A real 410 for the retired solar article. Lives inside site/ because that
  // is the Vercel output directory; the page body is read from the baked 410.
  const dir = path.join(SITE, 'api');
  fs.mkdirSync(dir, { recursive: true });
  fs.copyFileSync(path.join(HERE, 'gone.template.js'), path.join(dir, 'gone.js'));
}

function writeVercelConfig() {
  const config = {
    // site/ is fully pre baked and committed. Vercel serves it as is: no
    // install, no build, no Node on the host.
    outputDirectory: 'site',
    buildCommand: '',
    installCommand: '',
    trailingSlash: false,
    cleanUrls: true,
    redirects: [
      // Host canonicalisation first: www resolves to the bare host in one hop,
      // carrying the path, so every homepage variant lands on the same URL and
      // the backlink equity consolidates. HTTP to HTTPS is enforced by Vercel
      // at the edge before this runs, so that is also a single hop.
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'www.championroofingok.com' }],
        destination: 'https://championroofingok.com/:path*',
        permanent: true,
      },
      // Every legacy URL reaches its destination in exactly one permanent hop.
      ...REDIRECTS.map(([source, destination]) => ({ source, destination, permanent: true })),
      { source: '/blog/tag/:slug*', destination: '/blog', permanent: true },
    ],
    // The deleted solar article must return a real 410 Gone, not a redirect to
    // the homepage. A static rewrite can only return 200, so the URL is routed to
    // api/gone.js, which serves the designed 410 page with the correct status.
    // Restore only if Champion wants a factually accurate solar article.
    rewrites: [
      { source: '/blog-harnessing-solar-energy-integrating-solar', destination: '/api/gone' },
    ],
    headers: [
      {
        source: '/assets/(.*)',
        headers: [{ key: 'Cache-Control', value: 'public, max-age=31536000, immutable' }],
      },
      {
        source: '/(.*)',
        headers: [
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
        ],
      },
    ],
  };
  fs.writeFileSync(path.join(SITE, '..', 'vercel.json'), JSON.stringify(config, null, 2));
}

/* ---------- Run ---------- */
const pages = await loadPages();

// Guard against two pages claiming the same URL.
const seen = new Set();
for (const p of pages) {
  if (seen.has(p.path)) throw new Error(`Duplicate page path: ${p.path}`);
  seen.add(p.path);
}

// Clean previously generated HTML so removed pages do not linger.
for (const entry of fs.readdirSync(SITE, { withFileTypes: true })) {
  if (entry.isDirectory() && entry.name !== 'assets') {
    fs.rmSync(path.join(SITE, entry.name), { recursive: true, force: true });
  }
}

pages.forEach(writePage);
const indexed = writeSitemap(pages);
const staging = writeRobots();
writeLlms(pages);
writeGoneFunction();
writeVercelConfig();

console.log(`Baked ${pages.length} pages (${indexed} in sitemap).`);
console.log(`robots.txt: ${staging ? 'STAGING, indexing blocked' : 'LIVE, indexing allowed'}`);
console.log(`Redirects in vercel.json: ${REDIRECTS.length + 1}`);
