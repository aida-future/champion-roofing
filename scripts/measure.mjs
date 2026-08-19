// Measure layout at a real desktop width. Usage: node scripts/measure.mjs [path]
import puppeteer from 'puppeteer-core';

const CHROME = 'C:/Program Files/Google/Chrome/Application/chrome.exe';
const path = process.argv[2] || '/';

const b = await puppeteer.launch({ executablePath: CHROME, headless: true });
const p = await b.newPage();
await p.setViewport({ width: 1600, height: 1000 });
await p.goto('http://localhost:4321' + path, { waitUntil: 'networkidle0' });

const r = await p.evaluate(() => {
  const q = (s) => document.querySelector(s);
  const box = (el) => {
    if (!el) return null;
    const b = el.getBoundingClientRect();
    return { x: Math.round(b.x), w: Math.round(b.width), right: Math.round(b.right) };
  };
  const out = { vw: innerWidth };
  const inner = q('.hero-inner');
  if (inner) {
    out.hero = {
      inner: box(inner),
      h1: box(q('.hero h1')),
      headerWrap: box(q('.header .wrap') || q('header .wrap')),
      marginInline: getComputedStyle(inner).marginInline,
      maxWidth: getComputedStyle(inner).maxWidth,
    };
  }
  const stik = q('.stik');
  if (stik) {
    const h = (el) => Math.round(el.getBoundingClientRect().height);
    out.sticky = {
      mediaH: h(q('.stik-media')), copyH: h(q('.stik-copy')), frameH: h(q('.stik-frame')),
      blocks: [...document.querySelectorAll('.stik-block')].map(h),
      frameTop: Math.round(q('.stik-frame').getBoundingClientRect().top + scrollY),
      firstBlockTop: Math.round(q('.stik-block').getBoundingClientRect().top + scrollY),
      firstH3Top: Math.round(q('.stik-block h3').getBoundingClientRect().top + scrollY),
    };
  }
  const fg = q('.field-grid');
  if (fg) {
    out.form = {
      cols: getComputedStyle(fg).gridTemplateColumns.split(' ').length,
      order: [...fg.querySelectorAll('label')].map((l) => l.textContent.replace('*', '').trim()),
    };
  }
  return out;
});
console.log(JSON.stringify(r, null, 1));
await b.close();
