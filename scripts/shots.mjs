// Full page screenshots from the real render, using the installed Chrome.
// Scrolls stepwise first so scroll reveals have settled before capture.
import puppeteer from 'puppeteer-core';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const OUT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..', 'shots');
const CHROME = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const BASE = 'http://localhost:4321';

const PAGES = process.argv[2]
  ? [process.argv[2]]
  : ['/', '/gutters', '/reviews'];

const VIEWS = [
  { name: 'desktop', width: 1600, height: 1000, dsf: 1 },
  { name: 'mobile', width: 390, height: 844, dsf: 2 },
];

fs.mkdirSync(OUT, { recursive: true });

const browser = await puppeteer.launch({
  protocolTimeout: 180000,
  executablePath: CHROME,
  headless: 'new',
  args: ['--hide-scrollbars', '--disable-gpu', '--force-color-profile=srgb'],
});

for (const view of VIEWS) {
  const page = await browser.newPage();
  await page.setViewport({ width: view.width, height: view.height, deviceScaleFactor: view.dsf });

  for (const route of PAGES) {
    await page.goto(BASE + route, { waitUntil: 'networkidle0', timeout: 60000 });

    // Step down the page so IntersectionObserver reveals fire, then return to top.
    // scroll-behavior:smooth would animate every step and the observer would
    // never settle, so turn it off for the duration of the capture.
    await page.evaluate(async () => {
      const root = document.documentElement;
      const prev = root.style.scrollBehavior;
      root.style.scrollBehavior = 'auto';
      const step = Math.round(window.innerHeight * 0.75);
      // Snapshot the height: lazy images grow the page as we go, so re-reading
      // scrollHeight each iteration can chase a moving target and never finish.
      let target = root.scrollHeight;
      for (let y = 0, n = 0; y < target && n < 400; y += step, n++) {
        window.scrollTo(0, y);
        await new Promise((r) => setTimeout(r, 120));
        target = Math.max(target, Math.min(root.scrollHeight, target + step * 2));
      }
      window.scrollTo(0, 0);
      await new Promise((r) => setTimeout(r, 700));
      root.style.scrollBehavior = prev;
    });

    // Lazy images only start loading once scrolled to. Wait for the stragglers,
    // but never block forever on one that fires no event.
    await page.evaluate(() => Promise.all(
      [...document.images]
        .filter((i) => !i.complete)
        .map((i) => Promise.race([
          new Promise((res) => { i.onload = i.onerror = res; }),
          new Promise((res) => setTimeout(res, 5000)),
        ])),
    ));

    // Loaded is not the same as painted. Decode everything, or a fullPage
    // capture can catch an image that has arrived but not yet been rasterised.
    await page.evaluate(() => Promise.all(
      [...document.images].map((i) => (i.decode ? Promise.race([
        i.decode().catch(() => {}),
        new Promise((r) => setTimeout(r, 3000)),
      ]) : null)),
    ));
    await new Promise((r) => setTimeout(r, 400));

    const state = await page.evaluate(() => ({
      missed: document.querySelectorAll('[data-reveal]:not(.is-in)').length,
      broken: [...document.images].filter((i) => i.naturalWidth === 0).map((i) => i.currentSrc || i.src),
    }));
    if (state.missed) console.warn(`  warning: ${state.missed} reveals did not fire on ${route}`);
    if (state.broken.length) console.warn(`  warning: broken images on ${route}: ${state.broken.join(', ')}`);

    const slug = route === '/' ? 'home' : route.replace(/^\//, '').replace(/\//g, '-');
    const file = path.join(OUT, `${view.name}-${slug}.png`);
    await page.screenshot({ path: file, fullPage: true });
    const kb = Math.round(fs.statSync(file).size / 1024);
    console.log(`${view.name.padEnd(8)} ${route.padEnd(24)} -> ${path.basename(file)} (${kb}kb)`);
  }
  await page.close();
}

await browser.close();
console.log('Done.');
