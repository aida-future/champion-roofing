// Champion Roofing image pipeline.
// Renames source photos to semantic names, emits 3 widths x (jpg + webp),
// and writes a manifest of real intrinsic dimensions so every <img> gets width/height.
import { execFileSync } from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';

const ROOT = path.resolve(process.argv[2] ?? path.join(process.cwd(), '..'));
const SRC = path.join(ROOT, 'src-img');
const CLIENT = path.resolve(ROOT, '..', '_assets_extracted', 'Champion Roofing_ Assets (Client Shared)');
const OUT = path.join(ROOT, 'site', 'assets', 'img');
const WIDTHS = [640, 1280, 1920];

// Real Champion Roofing photography (from their Google Business Profile).
// These are the differentiators: real crews, real drone shots, real tile work.
const CLIENT_MAP = {
  'Champion Roofing GBP Photo 01.jpg': 'real-luxury-brick-home',
  'Champion Roofing GBP Photo 02.jpg': 'real-french-brick-estate',
  'Champion Roofing GBP Photo 03.jpg': 'real-roofer-ladder-chimney',
  'Champion Roofing GBP Photo 04.jpg': 'real-ranch-new-roof',
  'Champion Roofing GBP Photo 05.jpg': 'real-commercial-campus',
  'Champion Roofing GBP Photo 06.jpg': 'real-tile-during',
  'Champion Roofing GBP Photo 07.jpg': 'real-timber-pavilion',
  'Champion Roofing GBP Photo 08.jpg': 'real-commercial-drone-office',
  'Champion Roofing GBP Photo 09.jpg': 'real-property-staging',
  'Champion Roofing GBP Photo 10.jpg': 'real-supply-truck',
  'Champion Roofing GBP Photo 11.jpg': 'real-landscape-protection',
  'Champion Roofing GBP Photo 12.jpg': 'real-multifamily-sign',
  'Champion Roofing GBP Photo 13.jpg': 'real-flat-roof-drone',
  'Champion Roofing GBP Photo 14.jpg': 'real-tile-complete',
};

// Stock library, catalogued by eye from contact sheets so each image matches its content.
const STOCK_MAP = {
  // Window replacement set, added 2026-08-19. Catalogued by eye.
  'AdobeStock_1986220948.jpeg': 'window-install-exterior-two',
  'AdobeStock_1152553357.jpeg': 'window-install-ladder-exterior',
  'AdobeStock_286708812.jpeg': 'window-install-interior-crew',
  'AdobeStock_660934291.jpeg': 'window-install-exterior-sun',
  'AdobeStock_281754539.jpeg': 'window-screen-fitting',
  'AdobeStock_1066092818.jpeg': 'comm-lowslope-black',
  'AdobeStock_110704605.jpeg': 'res-craftsman-gables',
  'AdobeStock_1141017230.jpeg': 'comm-retail-aerial',
  'AdobeStock_1219042636.jpeg': 'comm-multiunit-aerial',
  'AdobeStock_1255096210.jpeg': 'comm-industrial-metal',
  'AdobeStock_1268302668.jpeg': 'comm-warehouse-aerial',
  'AdobeStock_1308002507.jpeg': 'repair-damaged-shingles',
  'AdobeStock_1394038482.jpeg': 'tpo-white-sunlit',
  'AdobeStock_145976094.jpeg': 'res-shake-gable',
  'AdobeStock_1553574881.jpeg': 'tpo-aerial-hvac',
  'AdobeStock_1634826412.jpeg': 'res-white-house-dark-roof',
  'AdobeStock_1682970551.jpeg': 'metal-tile-profile',
  'AdobeStock_170819461.jpeg': 'specialty-clay-tile-home',
  'AdobeStock_1761189098.jpeg': 'metal-standing-seam-commercial',
  'AdobeStock_1926666469.jpeg': 'res-dormers-grey',
  'AdobeStock_208443798.jpeg': 'metal-green-tile',
  'AdobeStock_2097404360.jpeg': 'res-skylight-dark',
  'AdobeStock_2125417906.jpeg': 'storm-tarp-crew',
  'AdobeStock_221803475.jpeg': 'specialty-tile-hands',
  'AdobeStock_242462104.jpeg': 'res-gable-sky',
  'AdobeStock_254299295.jpeg': 'install-nailgun-shingle',
  'AdobeStock_268598062.jpeg': 'res-ridge-chimneys',
  'AdobeStock_273064181.jpeg': 'res-luxury-aerial',
  'AdobeStock_284382532.jpeg': 'crew-two-roofers',
  'AdobeStock_285025354.jpeg': 'res-dormer-blue-sky',
  'AdobeStock_291472123.jpeg': 'res-modern-ridge',
  'AdobeStock_300255932.jpeg': 'res-shingle-texture',
  'AdobeStock_302613703.jpeg': 'install-battens-crew',
  'AdobeStock_315092821.jpeg': 'storm-tree-on-roof',
  'AdobeStock_320666862.jpeg': 'res-tan-new-roof',
  'AdobeStock_325577969.jpeg': 'gutter-downspout-white',
  'AdobeStock_336818927.jpeg': 'res-brick-dark-tile',
  'AdobeStock_356531689.jpeg': 'install-hand-shingles',
  'AdobeStock_356782960.jpeg': 'replace-aerial-decking',
  'AdobeStock_356783144.jpeg': 'replace-aerial-tearoff',
  'AdobeStock_357881127.jpeg': 'replace-aerial-crew-bundles',
  'AdobeStock_386695192.jpeg': 'crew-ladder-ranch',
  'AdobeStock_408877028.jpeg': 'repair-patch-section',
  'AdobeStock_427984588.jpeg': 'comm-modern-hvac',
  'AdobeStock_433303708.jpeg': 'crew-gable-work',
  'AdobeStock_467942780.jpeg': 'metal-standing-seam-cabin',
  'AdobeStock_490925531.jpeg': 'hail-chalk-marks-grey',
  'AdobeStock_600098502.jpeg': 'res-dormer-row',
  'AdobeStock_709355177.jpeg': 'comm-apartment-flat',
  'AdobeStock_746318382.jpeg': 'res-grey-gable-siding',
  'AdobeStock_84070935.jpeg': 'repair-steep-chimney',
  'AdobeStock_856214130.jpeg': 'gutter-worker-install',
  'AdobeStock_880139016.jpeg': 'res-sunset-shingle',
  'AdobeStock_964732557.jpeg': 'gutter-leaf-guard',
  'AdobeStock_984787827.jpeg': 'comm-dark-flat-aerial',
  'high-angle-beautiful-roof-wooden-house.jpg': 'metal-dark-chimney-field',
  'long-shot-men-working-roof-together.jpg': 'crew-metal-scaffold',
  'long-shot-roofer-working-with-helmet.jpg': 'crew-metal-aerial',
  'roof-inspection-hail-damage.jpg.webp': 'hail-chalk-marks-tan',
  'storm-roofer-inspection.jpg.webp': 'storm-blue-tarp-aerial',
  'svc-as9.jpg.webp': 'res-arched-window-gable',
};

function magick(args) {
  return execFileSync('magick', args, { encoding: 'buffer', maxBuffer: 1 << 28 });
}

fs.mkdirSync(OUT, { recursive: true });
const manifest = {};
let made = 0;

function emit(srcFile, slug) {
  if (!fs.existsSync(srcFile)) {
    console.warn(`  missing: ${srcFile}`);
    return;
  }
  const dims = magick(['identify', '-format', '%w %h', srcFile]).toString().trim().split(/\s+/);
  const sw = Number(dims[0]);
  const sh = Number(dims[1]);
  const ratio = sh / sw;

  for (const w of WIDTHS) {
    // Never upscale past the source width.
    const target = Math.min(w, sw);
    const h = Math.round(target * ratio);
    for (const ext of ['jpg', 'webp']) {
      const outFile = path.join(OUT, `${slug}-${w}.${ext}`);
      if (fs.existsSync(outFile)) continue;
      magick([
        srcFile,
        '-auto-orient',
        '-resize', `${target}x`,
        '-strip',
        '-colorspace', 'sRGB',
        '-quality', ext === 'webp' ? '80' : '82',
        '-interlace', 'Plane',
        outFile,
      ]);
      made++;
    }
    if (w === WIDTHS[WIDTHS.length - 1]) {
      manifest[slug] = { w: target, h, ratio: Number(ratio.toFixed(4)) };
    }
  }
}

console.log('Processing real Champion Roofing photography...');
for (const [file, slug] of Object.entries(CLIENT_MAP)) {
  emit(path.join(CLIENT, file), slug);
}
console.log('Processing stock library...');
for (const [file, slug] of Object.entries(STOCK_MAP)) {
  emit(path.join(SRC, file), slug);
}

// Logo: keep a crisp full-res copy plus favicon sizes.
const logoSrc = path.resolve(ROOT, '..', 'Champion+logo.webp');
if (fs.existsSync(logoSrc)) {
  magick([logoSrc, '-resize', '900x', '-strip', path.join(OUT, 'champion-logo.png')]);
  // Favicon: crop to the roofline mark area is unreliable, so use the full lockup on white.
  for (const s of [32, 180, 512]) {
    magick([logoSrc, '-resize', `${s}x${s}`, '-background', 'white', '-gravity', 'center',
      '-extent', `${s}x${s}`, '-strip', path.join(OUT, `favicon-${s}.png`)]);
  }
  magick([logoSrc, '-resize', '64x64', '-background', 'white', '-gravity', 'center',
    '-extent', '64x64', path.join(ROOT, 'site', 'favicon.ico')]);
}

fs.writeFileSync(path.join(ROOT, 'scripts', 'img-manifest.json'), JSON.stringify(manifest, null, 2));
console.log(`Done. ${made} files written, ${Object.keys(manifest).length} images in manifest.`);
