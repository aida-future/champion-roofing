import { BIZ } from '../data.mjs';
import { ICONS, btn, img, eyebrow, secHead, checks } from '../lib.mjs';
import {
  hero, leadForm, ticker, statStrip, steps, droneSection, materialExplorer,
  compareSection, reviewSection, pullQuote, areasSection, ctaBand, faqSection,
  serviceGrid, serviceShowcase, split,
} from '../sections.mjs';

const FAQS = [
  {
    q: 'How much does a roof assessment cost in Oklahoma City?',
    a: 'Nothing. Champion Roofing provides no cost, no obligation roof assessments across the Oklahoma City metro. An inspector comes out, flies the roof with a drone, and sends you the findings by email whether or not there is anything wrong.\n\nYou are not committing to anything by booking one, and there is no charge if the answer turns out to be that your roof is fine.',
  },
  {
    q: 'Do you help with insurance claims after hail?',
    a: 'Yes. We handle the roofing paperwork on the insurance side, meet the adjuster at the property, and work through the approved scope with your carrier if there is disagreement about what the damage actually is.\n\nWhat we cannot do is decide the outcome. Your carrier and their adjuster determine whether a claim is approved and what it covers. We document what we find, including code related decking conditions when a replacement is required, and we make the case.',
  },
  {
    q: 'Will the price change once you start the job?',
    a: 'That is not how we work. In the owner\'s words: when we give you a price, that is the price. If we come across something in the middle of a job, we usually absorb it rather than passing it along.\n\nThe exception would be something genuinely impossible to see beforehand, such as a structural problem hidden under the decking. Even then you hear about it before anything is done, not after.',
  },
  {
    q: 'What warranty comes with a Champion Roofing roof?',
    a: 'Every roof we install comes with a two year written workmanship warranty from Champion Roofing. That covers anything installed improperly, or a detail we missed that causes a leak.\n\nQualifying customers can also purchase higher tier GAF or Malarkey manufacturer warranties, which run to 25 or 30 years and include extended manufacturer backed workmanship coverage. Those upgraded warranties are transferable if you sell the house.',
  },
  {
    q: 'What areas around Oklahoma City do you cover?',
    a: 'Oklahoma City, Edmond, Norman, Moore, Midwest City, Del City, Yukon, Mustang and Bethany.\n\nWe are based on North Council Road in northwest Oklahoma City. If you are just outside that list, call the office anyway and we will tell you honestly whether we are the right people for the job.',
  },
  {
    q: 'Are you licensed and insured in Oklahoma?',
    a: `Yes. Champion Roofing LLC holds Oklahoma Construction Industries Board roofing registration number ${BIZ.license}.\n\nWe are also a GAF Master Elite residential contractor, a GAF Certified commercial contractor, a GAF CoatingsPro liquid applied contractor, a DaVinci Masterpiece contractor, and a BBB accredited business with an A plus rating.`,
  },
];

const SERVICES = [
  {
    path: '/roof-repair', tag: 'Repair', h: 'Roof repair',
    p: 'Leaks, storm damage, lifted or missing shingles, failed flashing and penetrations. We find the actual cause before we quote a fix.',
    img: 'repair-damaged-shingles', alt: 'Damaged and lifted asphalt shingles on a residential roof',
  },
  {
    path: '/roof-replacement', tag: 'Replacement', h: 'Roof replacement',
    p: 'A full tear off, a decking inspection you get told the truth about, and a complete new system with a written workmanship warranty.',
    img: 'replace-aerial-crew-bundles', alt: 'Aerial view of a roof replacement in progress with shingle bundles staged on the deck',
  },
  {
    path: '/roof-inspection', tag: 'Inspection', h: 'Roof inspection',
    p: 'A drone flies three laps around your roof, then we get on it and into the attic if the imagery cannot answer the question.',
    img: 'hail-chalk-marks-grey', alt: 'Hail impact marks circled in chalk during a roof inspection',
  },
  {
    path: '/storm-damage-roof-repair', tag: 'Storm and hail', h: 'Storm damage repair',
    p: 'Hail and wind assessment, documentation for your carrier, and the repair or replacement once the scope is settled.',
    img: 'storm-tarp-crew', alt: 'Roofing crew fitting a protective tarp over a storm damaged roof',
  },
  {
    path: '/commercial', tag: 'Commercial', h: 'Commercial roofing',
    p: 'Low slope membranes, coatings and steep slope systems for offices, retail, industrial and multifamily buildings.',
    img: 'comm-retail-aerial', alt: 'Aerial view of a commercial retail building with a low slope roof',
  },
  {
    path: '/gutters', tag: 'Gutters', h: 'Seamless gutters',
    p: 'The service our reviews mention most after the roof itself. Seamless gutter installation, repair and leaf protection.',
    img: 'gutter-downspout-white', alt: 'New white seamless gutter and downspout against a clear sky',
  },
];

const PROCESS = [
  { h: 'You call, we schedule', p: 'Tell us what you are seeing. The office books an inspector out to the property, usually within a few days.' },
  { h: 'Drone inspection, three laps', p: 'Ten to fifteen minutes on site. We talk through what we found with you there, then send the report by email.' },
  { h: 'Insurance, if there is damage', p: 'If it is a hail or storm claim, we meet your adjuster at the property and work through the scope with your carrier.' },
  { h: 'The roof goes on', p: 'A foreman is on site all day. Landscaping gets protected, materials get checked, and the ground gets swept with magnets before we leave.' },
];

export default {
  path: '/',
  title: 'Oklahoma City Roofer | Champion Roofing OKC',
  desc: 'GAF Master Elite and DaVinci Masterpiece roofer in Oklahoma City since 2004. Repair, replacement, inspections, storm damage and gutters. Free assessments.',
  ogImage: 'real-luxury-brick-home',
  faqs: FAQS,
  body: `
${hero([
    {
      slug: 'real-luxury-brick-home',
      alt: 'Designer shingle roof on a brick and stone home in Oklahoma City',
      caption: 'Designer shingle roof, Oklahoma City metro',
      badge: 'Roofing contractor, Oklahoma City, since 2004',
      h1: 'The Oklahoma City roofer <em>you only need to call once</em>',
      lede: 'GAF Master Elite and DaVinci Masterpiece certified. We roof homes, commercial buildings and the specialty tile and slate most contractors in this market will not quote. When we give you a price, that is the price.',
    },
    {
      slug: 'real-tile-during',
      alt: 'Champion Roofing crew setting clay tile on the ridge of a stucco home in Oklahoma City',
      caption: 'Clay tile roof going on, our specialty crew on the ridge',
      badge: 'Tile, slate and synthetic specialists',
      h1: 'The roofs most contractors here <em>will not quote</em>',
      lede: 'Clay, concrete, natural slate and synthetics, installed by a crew that knows how to move across a tile roof. We were the first company in Oklahoma to install Brava synthetic roofing.',
    },
    {
      slug: 'real-commercial-drone-office',
      alt: 'Drone photograph of a commercial office building with a new roof',
      caption: 'Commercial re-roof, surveyed by drone',
      badge: 'Two DaVinci Projects of the Year, both commercial',
      h1: 'Commercial roofing specified <em>to the building</em>',
      lede: 'TPO, EPDM, PVC, modified bitumen and GAF CoatingsPro liquid applied systems, specified to the building rather than to a preference. A foreman stays on site through the working day.',
    },
    {
      slug: 'real-french-brick-estate',
      alt: 'Large brick estate home with a new architectural shingle roof',
      caption: 'Estate re-roof, north Oklahoma City',
      badge: 'Free drone assessment, no obligation',
      h1: 'If your roof is fine, <em>we will tell you it is fine</em>',
      lede: 'Three passes around your roof, the findings talked through on site, and a written report by email. If your roof is fine, we will tell you it is fine and charge you nothing.',
    },
  ], {
    badge: 'Roofing contractor, Oklahoma City, since 2004',
    h1: 'The Oklahoma City roofer <em>you only need to call once</em>',
    lede: 'GAF Master Elite and DaVinci Masterpiece certified. We roof homes, commercial buildings and the specialty tile and slate that most contractors in this market will not quote. When we give you a price, that is the price.',
    proof: 'GAF Master Elite. DaVinci Masterpiece. BBB accredited, A plus rated.',
  })}

${leadForm()}

${ticker()}

${split({
    eb: 'Who you are calling',
    title: 'Mike Cowan was a roofer before he was an owner',
    body: [
      'Champion Roofing started in 2004, and the person whose name is on it had already spent years on roofs himself. That is why the standard here is set from the roof down rather than from a sales office.',
      'We work on both ends of the market and treat them the same. In the owner\'s words: <strong>we cater to our customers no matter what kind of money they have. We treat them all the same.</strong> A designer slate roof in Nichols Hills and a small repair on a starter home get the same crew and the same standard.',
    ],
    list: [
      ['22 years in Oklahoma City.', 'Founded in 2004 and still locally owned.'],
      ['GAF Master Elite.', 'A certification held by a small share of American roofers.'],
      ['DaVinci Masterpiece Contractor.', 'Project of the Year winner in 2021 and again in 2023.'],
      ['BBB accredited, A plus rated.', `Oklahoma roofing registration ${BIZ.license}.`],
    ],
    image: 'real-roofer-ladder-chimney',
    alt: 'A Champion Roofing crew member on a ladder at the chimney of an Oklahoma City home',
    cta: btn('/about', 'More about Champion Roofing', 'btn-dark'),
    floatCard: { icon: 'award', title: 'DaVinci Project of the Year', sub: 'Won in 2021 and again in 2023' },
  })}

${serviceShowcase(
    'What we do',
    'Roofing services across the Oklahoma City metro',
    'Residential, commercial and specialty roofing, plus the gutter work our customers keep bringing up in reviews.',
    SERVICES,
  )}

${droneSection()}

${compareSection()}

${materialExplorer()}

${steps(
    'How a job runs',
    'From the first call to the magnet sweep',
    'No mystery, no disappearing crews, and a foreman on site who is actually paying attention.',
    PROCESS,
  )}

${pullQuote(
    'We care about our customers <em>more than we do money</em>.',
    `Mike Cowan, owner, ${BIZ.name}`,
  )}

${split({
    eb: 'Commercial',
    title: 'Commercial roofs, and the coordination that comes with them',
    body: [
      'Offices, retail, industrial and multifamily buildings across the metro. TPO is our usual recommendation for low slope work because of availability, installation and how serviceable it is later, though we will steer you to PVC or EPDM where the building calls for it.',
      'On commercial projects we put one or two foremen on site. They verify materials, handle changes as they come up, keep the site safe while your tenants and other trades are moving around, and supervise the cleanup at the end.',
    ],
    list: [
      ['TPO, EPDM, PVC and modified bitumen.', 'Specified to the building, not to a preference.'],
      ['GAF CoatingsPro liquid applied systems.', 'For roofs worth restoring rather than replacing.'],
      ['We coordinate with your trades.', 'Plumbers, HVAC, general contractors and property managers.'],
    ],
    image: 'real-commercial-campus',
    alt: 'A large commercial campus building in Oklahoma City with a Champion Roofing installed roof',
    reverse: true,
    tint: true,
    cta: btn('/commercial', 'Commercial roofing', 'btn-dark'),
  })}

${split({
    eb: 'Gutters',
    title: 'The gutters keep coming up in our reviews',
    body: [
      'Thirteen Google reviews mention gutters by name, and another six mention gutter replacement specifically. It is the service customers talk about most after the roof itself, so it gets a real page rather than a footnote.',
      'Seamless gutter installation, gutter repair and maintenance, and leaf protection. When a roof goes on, the gutters get looked at as part of the same job rather than left as somebody else\'s problem.',
    ],
    list: [
      ['Seamless gutter installation.', 'Formed to the run, not joined every few feet.'],
      ['Gutter repair and maintenance.', 'Including after hail, which marks soft metals first.'],
      ['Leaf protection.', 'Fitted to the gutter profile you actually have.'],
    ],
    image: 'gutter-leaf-guard',
    alt: 'Installing leaf protection over a residential gutter',
    cta: btn('/gutters', 'Seamless gutters', 'btn-dark'),
  })}

${areasSection()}

${faqSection(
    'Common questions',
    'The things people ask before they call',
    'If your question is not here, the office will answer it on the phone without putting you through a sales pitch.',
    FAQS,
    'light',
  )}

${reviewSection({ tint: true })}

${ctaBand(
    'Get a straight answer about your roof',
    'A free assessment, a drone survey, and a written report by email. If your roof is fine, we will tell you it is fine.',
  )}
`,
};
