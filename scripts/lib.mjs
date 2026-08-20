// Shared building blocks: icons, image helper, layout shell, schema.
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { BIZ, NAV, SERVICE_MENU } from './data.mjs';

const HERE = path.dirname(fileURLToPath(import.meta.url));
import { createHash } from 'node:crypto';
const assetHash = (rel) => {
  try { return createHash('md5').update(fs.readFileSync(path.join(HERE, '..', 'site', rel))).digest('hex').slice(0, 10); }
  catch { return Date.now().toString(36); }
};
const CSS_V = assetHash('assets/css/app.css');
const JS_V = assetHash('assets/js/app.js');
export const MANIFEST = JSON.parse(fs.readFileSync(path.join(HERE, 'img-manifest.json'), 'utf8'));

/* ---------- Icons (SVG only, never emoji) ---------- */
const S = (d, extra = '') =>
  `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"${extra}>${d}</svg>`;

export const ICONS = {
  // The motif: a roof ridge.
  ridge: S('<path d="M2 16.5 12 7l10 9.5"/><path d="M6 16.5 12 11l6 5.5" opacity=".45"/>'),
  ridgeSolid: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M2 17 12 6.5 22 17l-4-1.6L12 11l-6 4.4Z" fill="currentColor"/></svg>`,
  phone: S('<path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.2a2 2 0 0 1 2.1-.5c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2Z"/>'),
  mail: S('<rect x="2" y="4" width="20" height="16" rx="2"/><path d="m2 7 10 6 10-6"/>'),
  pin: S('<path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/>'),
  clock: S('<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3.5 2"/>'),
  check: S('<circle cx="12" cy="12" r="9.5" opacity=".28"/><path d="m7.8 12.3 2.8 2.8 5.6-5.9"/>'),
  star: `<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="m12 2.6 2.9 5.9 6.5.9-4.7 4.6 1.1 6.5-5.8-3-5.8 3 1.1-6.5L2.6 9.4l6.5-.9Z"/></svg>`,
  arrow: S('<path d="M5 12h14"/><path d="m13 6 6 6-6 6"/>'),
  // Written out in full rather than through S(): these need their own viewBox,
  // and adding a second one to S()'s output silently kept the 24x24 original,
  // which clipped the arrowhead and left just a line.
  arrowLong: `<svg viewBox="0 0 46 14" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M1 7h42"/><path d="m37 2 6 5-6 5"/></svg>`,
  arrowLongL: `<svg viewBox="0 0 46 14" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M45 7H3"/><path d="m9 2-6 5 6 5"/></svg>`,
  chevron: S('<path d="m6 9 6 6 6-6"/>'),
  close: S('<path d="M18 6 6 18M6 6l12 12"/>'),
  shield: S('<path d="M12 2.5 4 6v6c0 4.6 3.4 8.5 8 9.5 4.6-1 8-4.9 8-9.5V6Z"/><path d="m9 12 2.2 2.2L15.4 10"/>'),
  drone: S('<path d="M7.5 7.5h9v9h-9z"/><path d="M7.5 7.5 4 4M16.5 7.5 20 4M7.5 16.5 4 20M16.5 16.5 20 20"/><circle cx="4" cy="4" r="2"/><circle cx="20" cy="4" r="2"/><circle cx="4" cy="20" r="2"/><circle cx="20" cy="20" r="2"/>'),
  house: S('<path d="M3 10.5 12 3l9 7.5"/><path d="M5.5 9.5V20h13V9.5"/><path d="M10 20v-5h4v5"/>'),
  building: S('<path d="M3 21h18"/><path d="M5 21V4a1 1 0 0 1 1-1h7a1 1 0 0 1 1 1v17"/><path d="M14 9h4a1 1 0 0 1 1 1v11"/><path d="M8 7h3M8 11h3M8 15h3"/>'),
  gutter: S('<path d="M3 8h18v3a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3Z"/><path d="M17 14v6"/><path d="M14 20h6"/><path d="M6 3.5 8 8M12 3.5 13 8"/>'),
  wrench: S('<path d="M14.5 6a4.5 4.5 0 0 1 5.9 5.6l-9 9a2.6 2.6 0 0 1-3.7-3.7l9-9Z" opacity=".35"/><path d="M15.7 3.6a5 5 0 0 0-5.4 8l-6.6 6.6a2 2 0 0 0 2.8 2.8l6.6-6.6a5 5 0 0 0 8-5.4l-3 3-2.8-.6-.6-2.8Z"/>'),
  hammer: S('<path d="m14 6 5.5 5.5"/><path d="M17 3.5 21 7.5a1.5 1.5 0 0 1 0 2.1l-1.4 1.4a1.5 1.5 0 0 1-2.1 0l-4-4a1.5 1.5 0 0 1 0-2.1l1.4-1.4a1.5 1.5 0 0 1 2.1 0Z"/><path d="m13.5 10.5-9 9a2 2 0 0 1-2.8-2.8l9-9"/>'),
  search: S('<circle cx="11" cy="11" r="7"/><path d="m20 20-3.6-3.6"/>'),
  storm: S('<path d="M6.5 16.5a4.5 4.5 0 0 1 .6-9 6 6 0 0 1 11.2 1.6 3.9 3.9 0 0 1-.8 7.4"/><path d="m13 12-3 4.5h3.5L11 21"/>'),
  metal: S('<path d="M3 19 12 4l9 15"/><path d="M8 19 12 9l4 10"/><path d="M3 19h18"/>'),
  tile: S('<path d="M3 8.5a2.5 2.5 0 0 1 5 0 2.5 2.5 0 0 1 5 0 2.5 2.5 0 0 1 5 0 2.5 2.5 0 0 1 3 0"/><path d="M3 14a2.5 2.5 0 0 1 5 0 2.5 2.5 0 0 1 5 0 2.5 2.5 0 0 1 5 0 2.5 2.5 0 0 1 3 0"/><path d="M3 19.5a2.5 2.5 0 0 1 5 0 2.5 2.5 0 0 1 5 0 2.5 2.5 0 0 1 5 0 2.5 2.5 0 0 1 3 0"/>'),
  screen: S('<rect x="3" y="4" width="18" height="16" rx="1.5"/><path d="M3 9h18M3 14h18M8 4v16M14 4v16" opacity=".5"/>'),
  flat: S('<path d="M2 15h20"/><path d="M4 15V9h16v6"/><circle cx="9" cy="11.5" r="1.3"/><rect x="13" y="10" width="4" height="3" rx=".5"/>'),
  award: S('<circle cx="12" cy="9" r="6"/><path d="m8.5 14-1.5 7 5-2.6 5 2.6-1.5-7"/>'),
  users: S('<path d="M16.5 20v-1.8a3.6 3.6 0 0 0-3.6-3.6H6.6A3.6 3.6 0 0 0 3 18.2V20"/><circle cx="9.7" cy="7.2" r="3.6"/><path d="M21 20v-1.8a3.6 3.6 0 0 0-2.7-3.5"/><path d="M15.3 3.8a3.6 3.6 0 0 1 0 6.9"/>'),
  doc: S('<path d="M14 2.5H7a2 2 0 0 0-2 2v15a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7.5Z"/><path d="M14 2.5v5h5"/><path d="M9 13h6M9 17h4"/>'),
  calendar: S('<rect x="3" y="5" width="18" height="16" rx="2"/><path d="M3 10h18M8 3v4M16 3v4"/>'),
  leaf: S('<path d="M4 20c0-8 6-14 16-15 0 10-5.5 15-12 15Z"/><path d="M4 20c3-5 6-7.5 10-9.5"/>'),
  bolt: S('<path d="M13 2 4.5 13.5H11L10 22l8.5-11.5H12Z"/>'),
  facebook: `<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M22 12a10 10 0 1 0-11.6 9.9v-7H7.9V12h2.5V9.8c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.2.2 2.2.2v2.5h-1.3c-1.2 0-1.6.8-1.6 1.6V12h2.8l-.4 2.9h-2.4v7A10 10 0 0 0 22 12Z"/></svg>`,
  instagram: `<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2.2c3.2 0 3.6 0 4.9.1 1.2.1 1.8.3 2.2.4.6.2 1 .5 1.4.9.4.4.7.8.9 1.4.2.4.4 1 .4 2.2.1 1.3.1 1.7.1 4.9s0 3.6-.1 4.9c-.1 1.2-.3 1.8-.4 2.2-.2.6-.5 1-.9 1.4-.4.4-.8.7-1.4.9-.4.2-1 .4-2.2.4-1.3.1-1.7.1-4.9.1s-3.6 0-4.9-.1c-1.2-.1-1.8-.3-2.2-.4-.6-.2-1-.5-1.4-.9-.4-.4-.7-.8-.9-1.4-.2-.4-.4-1-.4-2.2C2.2 15.6 2.2 15.2 2.2 12s0-3.6.1-4.9c.1-1.2.3-1.8.4-2.2.2-.6.5-1 .9-1.4.4-.4.8-.7 1.4-.9.4-.2 1-.4 2.2-.4C8.4 2.2 8.8 2.2 12 2.2Zm0 5.8a4 4 0 1 0 0 8 4 4 0 0 0 0-8Zm0 6.6a2.6 2.6 0 1 1 0-5.2 2.6 2.6 0 0 1 0 5.2Zm5.1-6.8a.94.94 0 1 1-1.9 0 .94.94 0 0 1 1.9 0Z"/></svg>`,
};

export const icon = (name) => ICONS[name] || ICONS.ridge;

/* ---------- Images ---------- */
// Where the subject sits in each photograph, as CSS object-position. Roofing
// photos carry their subject high in the frame, so the default is the upper
// third rather than dead centre; specific images override.
export const FOCAL = {
  default: '50% 30%',
  'real-supply-truck': '22% 70%',
  'real-commercial-drone-office': '50% 45%',
  'replace-aerial-crew-bundles': '50% 35%',
  'real-ranch-new-roof': '50% 28%',
  'gutter-downspout-white': '30% 25%',
  'gutter-worker-install': '50% 40%',
  'res-luxury-aerial': '50% 35%',
  'metal-standing-seam-cabin': '50% 22%',
  'real-french-brick-estate': '50% 38%',
  'real-luxury-brick-home': '55% 35%',
  'hail-chalk-marks-grey': '50% 50%',
  'storm-tarp-crew': '50% 40%',
  'repair-damaged-shingles': '50% 45%',
  'window-install-exterior-two': '60% 40%',
  'specialty-clay-tile-home': '50% 30%',
  'real-tile-during': '50% 35%',
  'real-roofer-ladder-chimney': '55% 30%',
  'comm-retail-aerial': '50% 45%',
};
export const focal = (slug) => FOCAL[slug] || FOCAL.default;

export function img(slug, alt, opts = {}) {
  const m = MANIFEST[slug];
  if (!m) throw new Error(`Unknown image slug: ${slug}`);
  const { sizes = '100vw', loading = 'lazy', className = '', ratio } = opts;
  // Declared height keeps layout stable; ratio override is for cropped containers.
  const h = ratio ? Math.round(m.w * ratio) : m.h;
  const base = `/assets/img/${slug}`;
  return `<picture${className ? ` class="${className}"` : ''}>
<source type="image/webp" srcset="${base}-640.webp 640w, ${base}-1280.webp 1280w, ${base}-1920.webp 1920w" sizes="${sizes}">
<img src="${base}-1280.jpg" srcset="${base}-640.jpg 640w, ${base}-1280.jpg 1280w, ${base}-1920.jpg 1920w" sizes="${sizes}" width="${m.w}" height="${h}" alt="${esc(alt)}" style="object-position:${focal(slug)}" loading="${loading}"${loading === 'eager' ? ' fetchpriority="high"' : ''} decoding="async">
</picture>`;
}

export const esc = (s = '') =>
  String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

/* ---------- Small components ---------- */
export const eyebrow = (t) => `<span class="eyebrow">${ICONS.ridgeSolid}${t}</span>`;

export const secHead = (eb, h2, p, level = 2) => `
<div class="sec-head" data-reveal>
  ${eyebrow(eb)}
  <h${level}>${h2}</h${level}>
  ${p ? `<p>${p}</p>` : ''}
</div>`;

export const btn = (href, label, cls = '', ico = 'arrow') =>
  `<a class="btn ${cls}" href="${href}"${cls.includes('btn-magnet') ? ' data-magnetic' : ''}>${label}${ico ? icon(ico) : ''}</a>`;

export const stars = (n = 5) =>
  `<span class="stars" aria-hidden="true">${ICONS.star.repeat(n)}</span>`;

export function checks(items) {
  return `<ul class="checks">${items.map((i) => {
    const [b, rest] = Array.isArray(i) ? i : [null, i];
    return `<li>${ICONS.check}<span>${b ? `<b>${b}</b> ` : ''}${rest}</span></li>`;
  }).join('')}</ul>`;
}

export function faqBlock(items) {
  return `<div class="faq">${items.map((f) => `
  <details>
    <summary>${f.q}</summary>
    <div class="faq-a">${f.a.split('\n\n').map((p) => `<p>${p}</p>`).join('')}</div>
  </details>`).join('')}</div>`;
}

/* ---------- Structured data ---------- */
const ORG_ID = `${BIZ.url}/#organization`;
const SITE_ID = `${BIZ.url}/#website`;

export function localBusinessSchema() {
  return {
    '@type': ['RoofingContractor', 'LocalBusiness'],
    '@id': ORG_ID,
    name: BIZ.name,
    legalName: BIZ.legalName,
    url: BIZ.url + '/',
    telephone: BIZ.phoneRaw,
    email: BIZ.email,
    image: `${BIZ.url}/assets/img/real-luxury-brick-home-1280.jpg`,
    logo: { '@type': 'ImageObject', url: `${BIZ.url}/assets/img/champion-logo.png` },
    description: BIZ.description,
    foundingDate: BIZ.foundedISO,
    founder: { '@type': 'Person', name: BIZ.owner },
    address: {
      '@type': 'PostalAddress',
      streetAddress: BIZ.street,
      addressLocality: BIZ.city,
      addressRegion: BIZ.state,
      postalCode: BIZ.zip,
      addressCountry: 'US',
    },
    geo: { '@type': 'GeoCoordinates', latitude: BIZ.geo.lat, longitude: BIZ.geo.lng },
    openingHoursSpecification: [{
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: BIZ.opens,
      closes: BIZ.closes,
    }],
    areaServed: BIZ.cities.map((c) => ({ '@type': 'City', name: `${c.name}, ${BIZ.state}` })),
    hasCredential: BIZ.credentials.map((c) => ({
      '@type': 'EducationalOccupationalCredential', credentialCategory: 'certification', name: c,
    })),
    identifier: {
      '@type': 'PropertyValue',
      name: 'Oklahoma Construction Industries Board roofing registration',
      value: BIZ.license,
    },
    sameAs: BIZ.sameAs,
    priceRange: '$$',
    currenciesAccepted: 'USD',
  };
}

export function pageSchema(page) {
  const graph = [
    localBusinessSchema(),
    {
      '@type': 'WebSite',
      '@id': SITE_ID,
      url: BIZ.url + '/',
      name: BIZ.name,
      publisher: { '@id': ORG_ID },
      inLanguage: 'en-US',
    },
    {
      '@type': 'WebPage',
      '@id': `${BIZ.url}${page.path}#webpage`,
      url: `${BIZ.url}${page.path}`,
      name: page.title,
      description: page.desc,
      isPartOf: { '@id': SITE_ID },
      about: { '@id': ORG_ID },
      inLanguage: 'en-US',
    },
  ];

  if (page.crumbs && page.crumbs.length) {
    graph.push({
      '@type': 'BreadcrumbList',
      '@id': `${BIZ.url}${page.path}#breadcrumbs`,
      itemListElement: [{ name: 'Home', path: '/' }, ...page.crumbs].map((c, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        name: c.name,
        item: `${BIZ.url}${c.path}`,
      })),
    });
  }

  if (page.service) {
    graph.push({
      '@type': 'Service',
      '@id': `${BIZ.url}${page.path}#service`,
      name: page.service.name,
      serviceType: page.service.type || page.service.name,
      description: page.service.desc || page.desc,
      provider: { '@id': ORG_ID },
      areaServed: BIZ.cities.map((c) => ({ '@type': 'City', name: `${c.name}, ${BIZ.state}` })),
      ...(page.service.offers ? {
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: page.service.name,
          itemListElement: page.service.offers.map((o) => ({
            '@type': 'Offer', itemOffered: { '@type': 'Service', name: o },
          })),
        },
      } : {}),
    });
  }

  if (page.faqs && page.faqs.length) {
    graph.push({
      '@type': 'FAQPage',
      '@id': `${BIZ.url}${page.path}#faq`,
      mainEntity: page.faqs.map((f) => ({
        '@type': 'Question',
        name: f.q,
        acceptedAnswer: { '@type': 'Answer', text: f.a.replace(/\n\n/g, ' ') },
      })),
    });
  }

  if (page.article) {
    graph.push({
      '@type': 'BlogPosting',
      '@id': `${BIZ.url}${page.path}#article`,
      headline: page.article.headline || page.title,
      description: page.desc,
      datePublished: page.article.published,
      dateModified: page.article.modified || page.article.published,
      author: { '@id': ORG_ID },
      publisher: { '@id': ORG_ID },
      image: `${BIZ.url}/assets/img/${page.article.image}-1280.jpg`,
      mainEntityOfPage: { '@id': `${BIZ.url}${page.path}#webpage` },
    });
  }

  return { '@context': 'https://schema.org', '@graph': graph };
}

/* ---------- Chrome ---------- */
function topbar() {
  return `
<div class="topbar">
  <div class="wrap-wide">
    <div class="topbar-facts">
      <span>${ICONS.pin}${BIZ.street}, ${BIZ.city}, ${BIZ.state} ${BIZ.zip}</span>
      <span>${ICONS.award}GAF Master Elite and DaVinci Masterpiece contractor</span>
      <span>${ICONS.shield}OK licence ${BIZ.license}</span>
    </div>
    <span class="status-pill" data-status data-open-hour="9" data-close-hour="17" data-open="true">
      <i class="status-dot" aria-hidden="true"></i><span data-status-text>Mon to Fri, 9am to 5pm</span>
    </span>
  </div>
</div>`;
}

function navList() {
  return NAV.map((n) => {
    if (!n.children) {
      return `<li><a href="${n.path}">${n.label}</a></li>`;
    }
    return `<li>
      <button type="button" aria-expanded="false">${n.label}<span class="caret">${ICONS.chevron}</span></button>
      <div class="mega">
        <div class="mega-grid">
          ${n.children.map((c) => `<a class="mega-item" href="${c.path}">
            <span class="ridge-chip">${icon(c.icon)}</span>
            <span><strong>${c.label}</strong><span>${c.blurb}</span></span>
          </a>`).join('')}
        </div>
        <div class="mega-note">
          <span>${n.note}</span>
          <span class="mega-links">
            ${n.allServices ? `<a class="link-ridge" href="/services">View all services${ICONS.arrow}</a>` : ''}
            <a class="link-ridge" href="${n.path}">${n.hubLabel || 'All ' + n.label.toLowerCase()}${ICONS.arrow}</a>
          </span>
        </div>
      </div>
    </li>`;
  }).join('');
}

function drawerList() {
  const out = [];
  NAV.forEach((n) => {
    out.push(`<a href="${n.path || (n.children && n.children[0].path)}">${n.label}</a>`);
    if (n.children) n.children.forEach((c) => out.push(`<a class="sub" href="${c.path}">${c.label}</a>`));
    if (n.allServices) out.push(`<a class="sub" href="/services">View all services</a>`);
  });
  return out.join('');
}

function header() {
  return `
<a class="skip" href="#main">Skip to content</a>
<div class="scroll-bar" aria-hidden="true"></div>
${topbar()}
<header class="site-head">
  <div class="wrap-wide head-inner">
    <a class="brand" href="/" aria-label="${BIZ.name}, home">
      <img src="/assets/img/champion-logo.png" width="190" height="83" alt="${BIZ.name}">
    </a>
    <nav aria-label="Primary">
      <ul class="nav">${navList()}</ul>
    </nav>
    <div class="head-cta">
      <a class="head-phone" href="tel:${BIZ.phoneRaw}">
        <small>Call the office</small><b>${BIZ.phone}</b>
      </a>
      <a class="btn btn-sm" href="/contact">Free assessment</a>
      <button class="burger" type="button" aria-expanded="false" aria-controls="drawer" aria-label="Open menu">
        <span></span><span></span><span></span>
      </button>
    </div>
  </div>
</header>
<div class="scrim" hidden-scrim></div>
<aside class="drawer" id="drawer" aria-label="Mobile menu">
  <div class="drawer-top">
    <button class="drawer-close" type="button" aria-label="Close menu">${ICONS.close}</button>
  </div>
  ${drawerList()}
  <a class="btn" href="tel:${BIZ.phoneRaw}">${ICONS.phone}Call ${BIZ.phone}</a>
  <a class="btn btn-ghost" href="/contact">Request a free assessment</a>
</aside>`;
}

function footer() {
  const col = (title, links) => `
  <div class="foot-col">
    <h4>${title}</h4>
    <ul>${links.map((l) => `<li><a href="${l.path}">${l.label}</a></li>`).join('')}</ul>
  </div>`;

  return `
<footer class="site-foot">
  <div class="wrap-wide">
    <div class="foot-grid">
      <div class="foot-brand">
        <a href="/" aria-label="${BIZ.name} home"><img src="/assets/img/champion-logo.png" width="205" height="89" alt="${BIZ.name}"></a>
        <p>${BIZ.footerBlurb}</p>
        <div class="socials">
          <a href="${BIZ.facebook}" rel="noopener" target="_blank" aria-label="Champion Roofing on Facebook">${ICONS.facebook}</a>
          <a href="${BIZ.instagram}" rel="noopener" target="_blank" aria-label="Champion Roofing on Instagram">${ICONS.instagram}</a>
        </div>
      </div>
      ${col('Residential', SERVICE_MENU.residential)}
      ${col('Commercial and more', SERVICE_MENU.commercial)}
      <div class="foot-col">
        <h4>Get in touch</h4>
        <ul>
          <li><a href="tel:${BIZ.phoneRaw}">${BIZ.phone}</a></li>
          <li><a href="mailto:${BIZ.email}">${BIZ.email}</a></li>
          <li><a href="${BIZ.mapsUrl}" rel="noopener" target="_blank">${BIZ.street}<br>${BIZ.city}, ${BIZ.state} ${BIZ.zip}</a></li>
          <li>Monday to Friday, 9am to 5pm</li>
        </ul>
      </div>
    </div>
    <div class="foot-bar">
      <span>&copy; <span data-year>2026</span> ${BIZ.legalName}. Oklahoma roofing registration ${BIZ.license}.</span>
      <ul>
        <li><a href="/services">All services</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/our-work">Our work</a></li>
        <li><a href="/faq">FAQ</a></li>
        <li><a href="/service-areas">Service areas</a></li>
        <li><a href="/blog">Blog</a></li>
        <li><a href="/privacy">Privacy</a></li>
      </ul>
    </div>
    <p class="foot-legal">${BIZ.legalNote}</p>
    <!-- Agency credit. On hover the wolf lifts its head and the howl ripples
         out as sound arcs, with the tagline sliding in. Pure CSS, no audio. -->
    <a class="howl" href="https://localhowl.com" rel="noopener" target="_blank" aria-label="Website by Local Howl">
      <span class="howl-mark" aria-hidden="true">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round">
          <path class="howl-wolf" d="M7.5 20c-.6-2.2-.3-4.3 1-6l-2-4.5L9 11l1.5-3.5L13 10l4-5.5c1.8 2.8 2.4 5.8 1.4 8.9-.9 2.9-2.9 5-5.9 6.1-1.8.6-3.5.5-5-.5Z"/>
          <path class="howl-w1" d="M17.5 4.5c1 .3 1.8.9 2.4 1.8"/>
          <path class="howl-w2" d="M18.6 2.4c1.5.5 2.7 1.4 3.6 2.8"/>
        </svg>
      </span>
      <span class="howl-txt">Powered by <b>Local Howl</b></span>
      <span class="howl-tag" aria-hidden="true">Rank higher. Get found.</span>
    </a>
  </div>
</footer>
<div class="callbar">
  <a class="btn" href="tel:${BIZ.phoneRaw}">${ICONS.phone}Call now</a>
  <a class="btn btn-dark" href="/contact">Free assessment</a>
</div>`;
}

/* ---------- Page shell ---------- */
export function layout(page, body) {
  const canonical = `${BIZ.url}${page.path === '/' ? '/' : page.path}`;
  const ogImage = `${BIZ.url}/assets/img/${page.ogImage || 'real-luxury-brick-home'}-1280.jpg`;
  // STAGING (the default) stamps noindex on every page as well as blocking in
  // robots.txt, because robots.txt alone does not stop a URL being indexed from
  // an external link. STAGING=false at cutover lifts both in one switch.
  const STAGING = process.env.STAGING !== 'false';
  const robots = (page.noindex || STAGING) ? 'noindex, nofollow' : 'index, follow, max-image-preview:large, max-snippet:-1';

  return `<!doctype html>
<html lang="en" class="no-js">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${esc(page.title)}</title>
<meta name="description" content="${esc(page.desc)}">
<link rel="canonical" href="${canonical}">
<meta name="robots" content="${robots}">
<meta name="theme-color" content="#100c0c">
<meta property="og:type" content="${page.article ? 'article' : 'website'}">
<meta property="og:site_name" content="${BIZ.name}">
<meta property="og:title" content="${esc(page.title)}">
<meta property="og:description" content="${esc(page.desc)}">
<meta property="og:url" content="${canonical}">
<meta property="og:image" content="${ogImage}">
<meta property="og:locale" content="en_US">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="${esc(page.title)}">
<meta name="twitter:description" content="${esc(page.desc)}">
<meta name="twitter:image" content="${ogImage}">
<link rel="icon" href="/favicon.svg" type="image/svg+xml">
<link rel="icon" href="/favicon.ico" sizes="32x32">
<link rel="apple-touch-icon" href="/assets/img/favicon-180.png">
<link rel="manifest" href="/site.webmanifest">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="preload" as="style" href="https://fonts.googleapis.com/css2?family=Archivo:wght@400;500;600;700;800&family=Inter:wght@400;500;600;650;700&display=swap">
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Archivo:wght@400;500;600;700;800&family=Inter:wght@400;500;600;650;700&display=swap">
<link rel="stylesheet" href="/assets/css/app.css?v=${CSS_V}">
<script type="application/ld+json">${JSON.stringify(pageSchema(page))}</script>
</head>
<body>
${header()}
<main id="main">
${body}
</main>
${footer()}
<script src="/assets/js/app.js?v=${JS_V}" defer></script>
</body>
</html>`;
}
