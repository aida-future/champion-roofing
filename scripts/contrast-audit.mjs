// Find text rendered with too little contrast against what is actually behind it,
// which is exactly what happens when a dark designed component lands on a light
// section. Walks every visible text element on each page, reads its effective
// background by climbing ancestors, and reports anything under 3:1.
import puppeteer from 'puppeteer-core';

const CHROME = 'C:/Program Files/Google/Chrome/Application/chrome.exe';
const PAGES = (process.argv[2] || '/,/roof-repair,/roof-replacement,/roof-inspection,/gutters,/commercial,/about,/reviews,/contact,/service-areas/moore,/window-replacement,/specialty-roofing,/metal-roofing,/storm-damage-roof-repair').split(',');

const b = await puppeteer.launch({ executablePath: CHROME, headless: true });
const p = await b.newPage(); await p.setViewport({ width: 1600, height: 1000 });
const all = [];
for (const path of PAGES) {
  await p.goto('http://localhost:4321' + path, { waitUntil: 'networkidle0' });
  await p.evaluate(async () => { for (let y = 0; y < document.body.scrollHeight; y += 700) { window.scrollTo(0, y); await new Promise((r) => setTimeout(r, 30)); } window.scrollTo(0, 0); });
  await new Promise((r) => setTimeout(r, 300));
  const rows = await p.evaluate(() => {
    const lum = (r, g, b) => { const f = (c) => { c /= 255; return c <= 0.03928 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4; }; return 0.2126 * f(r) + 0.7152 * f(g) + 0.0722 * f(b); };
    const parse = (s) => { const m = s.match(/rgba?\(([\d.]+),\s*([\d.]+),\s*([\d.]+)(?:,\s*([\d.]+))?\)/); return m ? { r: +m[1], g: +m[2], b: +m[3], a: m[4] === undefined ? 1 : +m[4] } : null; };
    const blend = (fg, bg) => ({ r: fg.r * fg.a + bg.r * (1 - fg.a), g: fg.g * fg.a + bg.g * (1 - fg.a), b: fg.b * fg.a + bg.b * (1 - fg.a), a: 1 });
    // Effective background: climb until an opaque layer is found, compositing semi transparent ones.
    const bgOf = (el) => {
      let acc = null; let n = el;
      while (n && n !== document.documentElement) {
        const cs = getComputedStyle(n);
        const c = parse(cs.backgroundColor);
        const hasImg = cs.backgroundImage && cs.backgroundImage !== 'none';
        if (c && c.a > 0) { acc = acc ? blend(acc, c) : c; if (c.a >= 1) return { c: acc, img: false }; }
        if (hasImg) return { c: acc, img: true }; // gradient or photo behind: report separately
        n = n.parentElement;
      }
      const body = parse(getComputedStyle(document.body).backgroundColor) || { r: 250, g: 247, b: 244, a: 1 };
      return { c: acc ? blend(acc, body) : body, img: false };
    };
    const out = [];
    const seen = new Set();
    document.querySelectorAll('main h1, main h2, main h3, main h4, main p, main li, main summary, main b, main strong, main span, main a, main dt, main dd, main label, main small').forEach((el) => {
      const t = (el.childNodes.length && [...el.childNodes].some((n) => n.nodeType === 3 && n.textContent.trim().length > 2)) ? el.innerText.trim() : '';
      if (!t || t.length < 3) return;
      const r = el.getBoundingClientRect(); if (r.width === 0 || r.height === 0) return;
      const cs = getComputedStyle(el); if (cs.visibility === 'hidden' || +cs.opacity === 0) return;
      const fg = parse(cs.color); if (!fg) return;
      const { c: bg, img } = bgOf(el); if (!bg) return;
      const f = fg.a < 1 ? blend(fg, bg) : fg;
      const L1 = lum(f.r, f.g, f.b), L2 = lum(bg.r, bg.g, bg.b);
      const ratio = (Math.max(L1, L2) + 0.05) / (Math.min(L1, L2) + 0.05);
      const sec = el.closest('section'); const secClass = sec ? sec.className : '';
      const key = secClass + '|' + t.slice(0, 30);
      if (ratio < 3 && !img && !seen.has(key) && !el.classList.contains('ghost') && !el.classList.contains('csr-more-ghost') && fg.a > 0) { seen.add(key); out.push({ ratio: +ratio.toFixed(2), text: t.slice(0, 50), tag: el.tagName.toLowerCase(), cls: (el.className || '').toString().slice(0, 30), section: secClass.slice(0, 34), fg: cs.color, bg: `rgb(${Math.round(bg.r)},${Math.round(bg.g)},${Math.round(bg.b)})` }); }
    });
    return out;
  });
  rows.forEach((r) => all.push({ path, ...r }));
}
await b.close();
all.sort((a, b) => a.ratio - b.ratio);
console.log(`Low contrast text (under 3:1, not over a photo), ${all.length} found\n`);
all.forEach((r) => console.log(`  ${String(r.ratio).padStart(5)}:1  ${r.path.padEnd(26)} <${r.tag}${r.cls ? '.' + r.cls.split(' ')[0] : ''}> in [${r.section}]  "${r.text}"  fg ${r.fg} on ${r.bg}`));
process.exitCode = all.length ? 1 : 0;
