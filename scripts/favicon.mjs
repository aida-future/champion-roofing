// Build the favicon set from a drawn SVG mark rather than the squashed wordmark.
// The mark: brand red rounded square, the roof ridge across the top in ink, and a
// heavy white C. Reads at 16px and carries the site motif. Aida wants the ridge kept.
import fs from 'node:fs';
import path from 'node:path';
import { execFileSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const OUT = path.join(ROOT, 'site');
const IMG = path.join(OUT, 'assets', 'img');

const SVG = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
  <!-- Body: top corners cut to meet the ridge, bottom corners rounded. -->
  <path d="M4 20 L32 3 L60 20 V50 a14 14 0 0 1 -14 14 H18 a14 14 0 0 1 -14 -14 Z" fill="#e22425"/>
  <!-- Ridge line in ink, sitting on the cut top edges. -->
  <path d="M0 22 L32 2 L64 22 L64 15 L32 -5 L0 15 Z" fill="#140d0d"/>
  <!-- heavy C, optically centred a touch low to balance the ridge -->
  <path d="M45.5 45.2c-2.9 3.1-7.1 5-11.6 5-8.9 0-15.9-7.1-15.9-16s7-16 15.9-16c4.5 0 8.7 1.9 11.6 5l-5.3 5.1c-1.6-1.7-3.9-2.7-6.3-2.7-4.8 0-8.6 3.8-8.6 8.6s3.8 8.6 8.6 8.6c2.4 0 4.7-1 6.3-2.7z" fill="#fff"/>
</svg>`;

fs.writeFileSync(path.join(OUT, 'favicon.svg'), SVG);

const tmp = path.join(ROOT, 'favicon-src.svg');
fs.writeFileSync(tmp, SVG);

// PNG sizes. -density gives ImageMagick enough resolution to rasterise the SVG cleanly.
for (const size of [16, 32, 48, 180, 192, 512]) {
  execFileSync('magick', ['-density', '512', '-background', 'none', tmp, '-resize', `${size}x${size}`, path.join(IMG, `favicon-${size}.png`)]);
}
// Multi resolution .ico for legacy browsers and Windows pinning.
execFileSync('magick', [
  path.join(IMG, 'favicon-16.png'), path.join(IMG, 'favicon-32.png'), path.join(IMG, 'favicon-48.png'),
  path.join(OUT, 'favicon.ico'),
]);
// Maskable icon for Android: the mark with extra safe padding.
execFileSync('magick', ['-density', '512', '-background', '#e22425', tmp, '-resize', '400x400', '-gravity', 'center', '-extent', '512x512', path.join(IMG, 'favicon-maskable-512.png')]);

fs.writeFileSync(path.join(OUT, 'site.webmanifest'), JSON.stringify({
  name: 'Champion Roofing',
  short_name: 'Champion',
  icons: [
    { src: '/assets/img/favicon-192.png', sizes: '192x192', type: 'image/png' },
    { src: '/assets/img/favicon-512.png', sizes: '512x512', type: 'image/png' },
    { src: '/assets/img/favicon-maskable-512.png', sizes: '512x512', type: 'image/png', purpose: 'maskable' },
  ],
  theme_color: '#e22425',
  background_color: '#faf7f4',
  display: 'browser',
}, null, 2));

fs.unlinkSync(tmp);
console.log('favicon set written: svg, ico, 16/32/48/180/192/512 png, maskable, webmanifest');
