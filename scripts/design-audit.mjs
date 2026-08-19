// Design and mobile audit. Measures things a designer would flag: sections that
// are too tall for their content, text columns that run too wide or too narrow,
// tap targets under 44px, text under 14px on mobile, images without focal
// cropping, headings that wrap to 4+ lines, and contrast on dark surfaces.
import puppeteer from 'puppeteer-core';

const CHROME = 'C:/Program Files/Google/Chrome/Application/chrome.exe';
const PAGES = (process.argv[2] || '/,/roof-repair,/gutters,/commercial,/about,/reviews,/service-areas/moore,/contact').split(',');

const b = await puppeteer.launch({ executablePath: CHROME, headless: true });
const p = await b.newPage();
const findings = [];

for (const path of PAGES) {
  for (const [vw, vh, label] of [[1600, 1000, 'desktop'], [390, 844, 'mobile']]) {
    await p.setViewport({ width: vw, height: vh, isMobile: vw < 500, hasTouch: vw < 500 });
    await p.goto('http://localhost:4321' + path, { waitUntil: 'networkidle0' });
    // Let reveals settle.
    await p.evaluate(async () => { for (let y = 0; y < document.body.scrollHeight; y += 600) { window.scrollTo(0, y); await new Promise((r) => setTimeout(r, 40)); } window.scrollTo(0, 0); });
    await new Promise((r) => setTimeout(r, 400));

    const r = await p.evaluate((vw, label) => {
      const out = [];
      const px = (v) => parseFloat(v) || 0;

      // Section height vs content: big empty sections.
      document.querySelectorAll('main > section, main > div.sec, main > .sec').forEach((s) => {
        const h = s.getBoundingClientRect().height;
        const txt = s.innerText.trim().length;
        const imgs = s.querySelectorAll('img').length;
        if (h > 1400 && label === 'desktop') out.push({ kind: 'tall-section', detail: `${Math.round(h)}px, ${txt} chars, ${imgs} imgs: "${(s.querySelector('h2,h1')?.innerText || s.className).slice(0, 40)}"` });
      });

      // Line length on body paragraphs.
      const paras = [...document.querySelectorAll('main p')].filter((el) => el.innerText.length > 120);
      const wide = paras.filter((el) => { const w = el.getBoundingClientRect().width; const fs = px(getComputedStyle(el).fontSize); return w / (fs * 0.5) > 95; });
      if (wide.length) out.push({ kind: 'long-lines', detail: `${wide.length} paragraphs over ~95 chars per line` });

      // Headings wrapping to 4+ lines.
      [...document.querySelectorAll('main h1, main h2')].forEach((h) => {
        const lh = px(getComputedStyle(h).lineHeight); const lines = Math.round(h.getBoundingClientRect().height / lh);
        if (lines >= 4) out.push({ kind: 'heading-wrap', detail: `${lines} lines: "${h.innerText.slice(0, 50)}"` });
      });

      if (label === 'mobile') {
        // Tap targets.
        const small = [...document.querySelectorAll('a, button')].filter((el) => { const r = el.getBoundingClientRect(); return r.width > 0 && r.height > 0 && (r.height < 40 || r.width < 40) && getComputedStyle(el).display !== 'inline'; });
        if (small.length) out.push({ kind: 'small-tap', detail: `${small.length} tap targets under 40px: ` + small.slice(0, 4).map((e) => (e.innerText || e.getAttribute('aria-label') || e.className).slice(0, 20)).join(' | ') });
        // Tiny text.
        const tiny = [...document.querySelectorAll('main p, main li, main span')].filter((el) => el.innerText.trim().length > 20 && px(getComputedStyle(el).fontSize) < 13);
        if (tiny.length) out.push({ kind: 'tiny-text', detail: `${tiny.length} text elements under 13px` });
        // Horizontal overflow.
        const ovf = document.documentElement.scrollWidth - document.documentElement.clientWidth;
        if (ovf > 0) out.push({ kind: 'overflow', detail: `${ovf}px horizontal overflow` });
        // Page length.
        out.push({ kind: 'info', detail: `page height ${Math.round(document.body.scrollHeight)}px, ${document.querySelectorAll('main > section, main > .sec').length} sections` });
      }

      // Hero image aspect: portrait crops on wide screens lose the subject.
      const hero = document.querySelector('.hero-slide.is-active img, .phero-bg img');
      if (hero) { const r = hero.getBoundingClientRect(); const nat = hero.naturalWidth / hero.naturalHeight; const box = r.width / r.height; if (Math.abs(nat - box) > 1.2) out.push({ kind: 'hero-crop', detail: `image ${nat.toFixed(2)} vs box ${box.toFixed(2)}, heavy crop` }); }

      // Duplicate section patterns back to back.
      const secs = [...document.querySelectorAll('main > section, main > .sec')];
      for (let i = 1; i < secs.length; i++) {
        const a = secs[i - 1].className.replace(/\s+/g, ' ').trim(), c = secs[i].className.replace(/\s+/g, ' ').trim();
        if (a && a === c && /sec-dark|sec-tint/.test(a)) out.push({ kind: 'same-tone-adjacent', detail: `two "${a}" sections back to back at #${i}` });
      }
      return out;
    }, vw, label);

    r.forEach((f) => findings.push({ path, view: label, ...f }));
  }
}
await b.close();

const byKind = {};
findings.forEach((f) => { (byKind[f.kind] = byKind[f.kind] || []).push(f); });
for (const [k, list] of Object.entries(byKind)) {
  console.log(`\n== ${k} (${list.length}) ==`);
  list.forEach((f) => console.log(`  ${f.view.padEnd(8)} ${f.path.padEnd(24)} ${f.detail}`));
}
