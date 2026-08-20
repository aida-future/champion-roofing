import { BIZ } from '../data.mjs';
import {
  pageHero, serviceGrid, statStrip, areasSection, ctaBand,
} from '../sections.mjs';

/* The services overview. One page holding every service we offer, mirroring
   the footer's Residential / Commercial and more split. Card copy is reused
   verbatim from the hub pages so nothing here makes a claim its own page
   does not back up. */
const services = {
  path: '/services',
  priority: '0.8',
  title: 'Roofing Services Oklahoma City | All Services | Champion Roofing',
  desc: 'Every Champion Roofing service in one place: roof repair, replacement, inspection, storm damage, metal, tile and slate, TPO, coatings, maintenance, seamless gutters and window replacement in Oklahoma City.',
  ogImage: 'crew-gable-work',
  crumbs: [{ name: 'Services', path: '/services' }],
  service: {
    name: 'Roofing services',
    type: 'Roofing contractor',
    offers: ['Roof repair', 'Roof replacement', 'Roof inspection', 'Storm damage roof repair', 'Metal roofing', 'Tile and specialty roofing', 'Commercial roofing', 'TPO roofing', 'Roof coatings', 'Commercial roof maintenance', 'Seamless gutters', 'Window replacement'],
  },
  body: `
${pageHero({
    crumbs: [{ name: 'Services', path: '/services' }],
    eb: 'Services',
    h1: 'Everything we do, in one place',
    lede: 'Residential, commercial and the exterior work that goes with a roof. Every card below is a real service with a real page behind it, and if you are not sure which one you need, the free assessment answers that question for you.',
    image: 'crew-gable-work',
    alt: 'Champion Roofing crew working on the gable of a residential roof in Oklahoma City',
  })}

${serviceGrid(
    'Residential',
    'What we do on houses',
    'From a single failed pipe boot to a complete slate roof, installed by a GAF Master Elite and DaVinci Masterpiece contractor. Start at <a href="/residential-roofing">residential roofing</a> for the full picture.',
    [
      { path: '/roof-repair', tag: 'Repair', h: 'Roof repair', p: 'Leaks, lifted or missing shingles, failed flashing and roof penetrations. We diagnose the cause before quoting.', img: 'repair-damaged-shingles', alt: 'Lifted and damaged asphalt shingles on a residential roof' },
      { path: '/roof-replacement', tag: 'Replacement', h: 'Roof replacement', p: 'Complete tear off, decking inspected and reported honestly, then a full new system.', img: 'replace-aerial-decking', alt: 'Aerial view of a roof stripped to the decking during replacement' },
      { path: '/roof-inspection', tag: 'Inspection', h: 'Roof inspection', p: 'Drone flown in three passes, then physical and attic investigation if needed. Report by email.', img: 'hail-chalk-marks-grey', alt: 'Hail impact marks circled in chalk on a grey shingle roof' },
      { path: '/storm-damage-roof-repair', tag: 'Storm', h: 'Storm and hail damage', p: 'Assessment, documentation for your carrier, and the repair once the scope is settled.', img: 'storm-tree-on-roof', alt: 'A fallen tree resting on a storm damaged residential roof' },
      { path: '/metal-roofing', tag: 'Metal', h: 'Metal roofing', p: 'Standing seam, metal shingle and corrugated systems, detailed properly at every transition.', img: 'metal-standing-seam-cabin', alt: 'A black standing seam metal roof on a timber clad home' },
      { path: '/specialty-roofing', tag: 'Specialty', h: 'Tile, slate and shake', p: 'Clay, concrete, composite, synthetic, natural slate and shake. The work we are known for.', img: 'real-tile-complete', alt: 'A completed clay tile roof on a stucco home' },
    ],
  )}

${statStrip([
    { count: 22, label: 'Years roofing Oklahoma City' },
    { count: 59, label: 'Google reviews, 5.0 rating' },
    { count: 3, label: 'Drone laps on every inspection' },
    { count: 2, label: 'Year written workmanship warranty' },
  ])}

${serviceGrid(
    'Commercial and more',
    'Buildings, gutters and windows',
    'Low slope commercial systems for property managers and general contractors, plus the exterior work our reviews keep mentioning. Start at <a href="/commercial">commercial roofing</a> for the building side.',
    [
      { path: '/commercial', tag: 'Commercial', h: 'Commercial roofing', p: 'TPO, coatings and maintenance for offices, retail, warehouses and multi unit buildings across the metro.', img: 'real-commercial-drone-office', alt: 'Aerial drone view of a commercial office building roofed by Champion Roofing' },
      { path: '/commercial/tpo-roofing', tag: 'TPO', h: 'TPO roofing', p: 'The white single ply membrane system we recommend most often for low slope commercial roofs.', img: 'tpo-white-sunlit', alt: 'A white TPO membrane roof in bright sunlight' },
      { path: '/commercial/roof-coatings', tag: 'Coatings', h: 'Roof coatings', p: 'GAF CoatingsPro liquid applied systems that restore a sound low slope roof without a tear off.', img: 'comm-lowslope-black', alt: 'A low slope commercial roof before coating restoration' },
      { path: '/commercial/roof-maintenance', tag: 'Maintenance', h: 'Roof maintenance', p: 'Scheduled inspection and upkeep that catches quiet failures before they reach the ceiling.', img: 'comm-modern-hvac', alt: 'Rooftop HVAC equipment on a modern commercial building roof' },
      { path: '/gutters', tag: 'Gutters', h: 'Seamless gutters', p: 'Seamless gutters sized to the roof, plus honest advice about whether leaf protection is worth it.', img: 'gutter-downspout-white', alt: 'A new white seamless gutter and downspout against a clear sky' },
      { path: '/window-replacement', tag: 'Windows', h: 'Window replacement', p: 'Storm damaged windows and screens, replaced with the roof.', img: 'window-install-exterior-two', alt: 'Two installers fitting a replacement window from the exterior of a home' },
    ],
  )}

${areasSection(true)}

${ctaBand('Not sure which service you need', 'That is what the free assessment is for. The drone flies three laps, you get the findings talked through on site and a written report by email, and if your roof is fine we will tell you that.')}
`,
};

export default [services];
