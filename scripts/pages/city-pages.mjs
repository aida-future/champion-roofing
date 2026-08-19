import { BIZ, CITY_PAGES } from '../data.mjs';
import { ICONS, icon, btn, img, eyebrow, secHead, checks } from '../lib.mjs';
import {
  pageHero, statStrip, steps, faqSection, split, infoGrid, related,
  ctaBand, serviceGrid, materialExplorer,
  areasSection, pageReviews,
} from '../sections.mjs';

// Shared card catalogue; each city picks three.
const SERVICE_CATALOGUE = {
  '/roof-repair': { path: '/roof-repair', tag: 'Repair', h: 'Roof repair', p: 'Leaks, storm damage, lifted shingles and failed flashing, diagnosed before they are quoted.', img: 'repair-damaged-shingles', alt: 'Damaged asphalt shingles on a residential roof' },
  '/roof-replacement': { path: '/roof-replacement', tag: 'Replacement', h: 'Roof replacement', p: 'Full tear off, decking reported honestly, and a complete new system.', img: 'replace-aerial-crew-bundles', alt: 'Aerial view of a roof replacement in progress' },
  '/roof-inspection': { path: '/roof-inspection', tag: 'Inspection', h: 'Roof inspection', p: 'Free drone survey, three laps, and a written report by email.', img: 'hail-chalk-marks-tan', alt: 'Hail impact marks circled in chalk on a roof' },
  '/storm-damage-roof-repair': { path: '/storm-damage-roof-repair', tag: 'Storm', h: 'Storm and hail damage', p: 'Documentation for your carrier, and we meet the adjuster on site.', img: 'storm-blue-tarp-aerial', alt: 'Aerial view of a tarp over a storm damaged roof' },
  '/gutters': { path: '/gutters', tag: 'Gutters', h: 'Seamless gutters', p: 'Installation, repair and leaf protection, on their own or with a roof.', img: 'gutter-leaf-guard', alt: 'Leaf protection being fitted over a residential gutter' },
  '/commercial': { path: '/commercial', tag: 'Commercial', h: 'Commercial roofing', p: 'Low slope membranes, coatings and metal for commercial buildings.', img: 'real-commercial-drone-office', alt: 'Drone photograph of a commercial building roof' },
  '/metal-roofing': { path: '/metal-roofing', tag: 'Metal', h: 'Metal roofing', p: 'Standing seam, metal shingle and corrugated, detailed to last.', img: 'metal-standing-seam-commercial', alt: 'A standing seam metal roof' },
  '/specialty-roofing': { path: '/specialty-roofing', tag: 'Specialty', h: 'Tile, slate and synthetics', p: 'The roofs most contractors in this market will not quote.', img: 'real-tile-during', alt: 'A crew setting clay tile on a roof ridge' },
};

// Each city gets a structurally different secondary block, chosen by `focus`,
// so the pages are genuinely distinct rather than one template with the name swapped.
const FOCUS_BLOCK = {
  specialty: () => infoGrid('Specialty', 'The roofs most contractors here will not quote', 'Tile, slate and synthetics are what we are best known for, and there is not much competition for the work in this market.', [
    { icon: 'tile', h: 'Clay and concrete tile', p: 'Beautiful, heavy and brittle. Almost everything that decides whether it lasts happens underneath: underlayment, batten layout and fastening.' },
    { icon: 'award', h: 'Natural and synthetic slate', p: 'The material on the older and higher end streets. Synthetic delivers the appearance at a fraction of the weight, which is frequently the right engineering answer.' },
    { icon: 'shield', h: 'Composite and synthetic', p: 'DaVinci, Brava and Grand Manor. We were the first company in Oklahoma to install Brava synthetic roofing.' },
  ], { tint: true }),
  inspection: () => steps('The inspection', 'What happens when we come out', 'Ten to fifteen minutes on site, and you get it in writing either way.', [
    { h: 'Drone survey', p: 'Three passes around the roof: the field, then the details, then soft metals, gutters, screens and fencing.' },
    { h: 'On the roof if needed', p: 'Where the imagery cannot confirm damage or find a leak, the inspector gets on the roof and into the attic.' },
    { h: 'Talked through on site', p: 'You hear the findings while the evidence is fresh and can ask questions there and then.' },
    { h: 'Report by email', p: 'A written record of the roof condition, whether or not there is anything to do about it.' },
  ], true),
  storm: () => steps('After a storm', 'What happens once you call', 'The order things happen in, and who is responsible for each.', [
    { h: 'We inspect and document', p: 'Drone flown in three passes: the field, the details, then soft metals, gutters, screens and fencing.' },
    { h: 'You decide about a claim', p: 'You get our written report to work from whether or not you file.' },
    { h: 'We meet the adjuster', p: 'At the property, so the assessment happens with somebody who has been on the roof.' },
    { h: 'The work goes ahead', p: 'Once the scope is settled. Final payment when the carrier sends the final cheque.' },
  ], true),
  metal: () => materialExplorer(),
  replacement: () => steps('How a replacement runs', 'From tear off to magnet sweep', 'Six stages, and you know where you are at every one.', [
    { h: 'Assessment', p: 'Drone inspection, findings on site, then a written report and a price.' },
    { h: 'Selection', p: 'Material and colour, with real guidance on how it will read on your house.' },
    { h: 'Protection', p: 'Landscaping covered and protected before anything comes off the roof.' },
    { h: 'Tear off and decking', p: 'Complete tear off, then the deck inspected and reported honestly.' },
    { h: 'The new system', p: 'Underlayment, flashing, covering, ridge and ventilation, in order.' },
    { h: 'Cleanup', p: 'Magnetic sweeps for nails, debris cleared, warranty paperwork handed over.' },
  ], true),
  repair: () => infoGrid('Common repairs', 'What we are usually called out for', 'The repairs that come up most on roofs in this part of the metro.', [
    { icon: 'storm', h: 'Storm and hail damage', p: 'Impact bruising, granular loss, and shingles lifted or torn off by wind.' },
    { icon: 'wrench', h: 'Failed flashing', p: 'Chimneys, wall transitions and valleys. The most common origin of a leak.' },
    { icon: 'house', h: 'Roof penetrations', p: 'Pipe boots and vents. Rubber perishes long before the shingles around it.' },
    { icon: 'gutter', h: 'Eaves and drainage', p: 'Water backing up at the eave will find the fascia and then the decking.' },
    { icon: 'tile', h: 'Missing or slipped units', p: 'Shingles, tiles or slates that have come off, matched to what is there.' },
    { icon: 'leaf', h: 'Decking damage', p: 'Where water has been getting in a while, the repair is not only the surface.' },
  ], { tint: true }),
  gutters: () => infoGrid('Gutters', 'Why gutters matter more than they look like they do', 'The service our customers mention most after the roof itself.', [
    { icon: 'gutter', h: 'Seamless installation', p: 'Formed to the length of the run, so the only joints are at corners and outlets. Fewer joints means fewer future leaks.' },
    { icon: 'wrench', h: 'Repair, not just replacement', p: 'A failed seal, a loose hanger or a blocked downspout does not require replacing a whole run.' },
    { icon: 'leaf', h: 'Leaf protection where it earns it', p: 'Worth fitting where trees overhang the roof. Much weaker case where nothing does, and we will say so.' },
    { icon: 'storm', h: 'Hail marks gutters first', p: 'Soft metals dent under impacts a shingle absorbs invisibly, so they are worth documenting after a storm.' },
  ], { tint: true, cols: 4 }),
};

const pages = CITY_PAGES.map((c) => ({
  path: `/service-areas/${c.slug}`,
  priority: '0.7',
  title: c.seoTitle,
  desc: c.seoDesc,
  ogImage: c.image,
  crumbs: [
    { name: 'Service areas', path: '/service-areas' },
    { name: c.name, path: `/service-areas/${c.slug}` },
  ],
  service: {
    name: `Roofing in ${c.name}, Oklahoma`,
    type: 'Roofing contractor',
    desc: `Residential and commercial roofing, repair, replacement, inspection and gutters in ${c.name}, Oklahoma.`,
    offers: ['Roof repair', 'Roof replacement', 'Roof inspection', 'Storm damage roof repair', 'Metal roofing', 'Seamless gutters', 'Commercial roofing'],
  },
  faqs: c.faqs,
  body: `
${pageHero({
    crumbs: [
      { name: 'Service areas', path: '/service-areas' },
      { name: c.name, path: `/service-areas/${c.slug}` },
    ],
    eb: `${c.position} &middot; ${BIZ.state}`,
    h1: `Roofing in ${c.name}, Oklahoma`,
    lede: c.lede,
    image: c.image,
    alt: c.alt,
  })}

${split({
    eb: c.name,
    title: c.angle,
    body: c.intro,
    list: c.highlights,
    image: c.image2,
    alt: c.alt2,
    reverse: true,
    cta: btn('/contact', `Book a free assessment`, 'btn-dark'),
    floatCard: { icon: 'pin', title: `${c.position}`, sub: `From ${BIZ.street}` },
  })}

${statStrip([
    { count: 22, label: 'Years roofing this metro' },
    { count: 59, label: 'Google reviews, 5.0 rating' },
    { count: 3, label: 'Drone laps per inspection' },
    { count: 2, label: 'Year workmanship warranty' },
  ])}

${(FOCUS_BLOCK[c.focus] || FOCUS_BLOCK.repair)()}

${serviceGrid(
    `In ${c.name}`,
    `What we are most often asked for in ${c.name}`,
    'Three of the services we bring here most. Every service is available; these are the ones this part of the metro calls about.',
    c.picks.map((path) => SERVICE_CATALOGUE[path]),
  )}

${pageReviews(`/service-areas/${c.slug}`, `What ${BIZ.city} metro customers say`)}

${faqSection(
    `${c.name} questions`,
    `Roofing in ${c.name}, answered`,
    'The practical questions people in this part of the metro actually ask.',
    c.faqs,
  )}

${related([
    { path: '/service-areas', icon: 'pin', h: 'All service areas', p: 'Every city we cover.' },
    { path: '/roof-inspection', icon: 'drone', h: 'Free inspection', p: 'What the three laps look at.' },
    { path: '/our-work', icon: 'award', h: 'Our work', p: 'Real projects across the metro.' },
    { path: '/contact', icon: 'phone', h: 'Contact', p: 'Speak to the office.' },
  ])}

${ctaBand(
    `Roof trouble in ${c.name}?`,
    'A free assessment, a drone survey and a written report. If your roof is fine, we will tell you it is fine.',
    c.image3,
  )}
`,
}));

export default pages;
