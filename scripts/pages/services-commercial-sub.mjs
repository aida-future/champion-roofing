import { BIZ } from '../data.mjs';
import { btn } from '../lib.mjs';
import {
  pageHero, statStrip, steps, faqSection, split, infoGrid, stickyFeature,
  honestBlock, related, asideCard, ctaBand, pageReviews,
} from '../sections.mjs';

const CITIES = BIZ.cities.map((c) => c.name).join(', ').replace(/, ([^,]*)$/, ' and $1');

const ASIDE = asideCard('At a glance', [
  { icon: 'building', h: 'Buildings', p: 'Offices, retail, industrial, multifamily and institutional.' },
  { icon: 'award', h: 'Credential', p: 'GAF CoatingsPro liquid applied roofing contractor.' },
  { icon: 'users', h: 'On site', p: 'One or two foremen through the working day.' },
  { icon: 'clock', h: 'Survey', p: 'Free, no obligation, across the metro.' },
  { icon: 'pin', h: 'Where', p: CITIES },
]);

const COATING_FAQS = [
    {
      q: 'What is a liquid applied roof coating?',
      a: 'A fluid membrane applied over an existing commercial roof, which cures into a continuous seamless surface. It seals the details that tend to fail first, meaning seams, flashings and penetrations, without removing the roof underneath.\n\nChampion Roofing is a GAF CoatingsPro liquid applied roofing contractor, which is a separate credential from our residential and commercial certifications.',
    },
    {
      q: 'When is coating the right answer, and when is it not?',
      a: 'Coating suits a roof that is weathered but structurally sound: the membrane is tired, the details need attention, but the assembly beneath it is dry and intact.\n\nIt is the wrong answer on a roof that has genuinely failed. Coating over saturated insulation or a compromised deck buys a short delay and a larger bill later. Part of our survey is establishing which situation your building is actually in, and we will tell you when restoration is not appropriate.',
    },
    {
      q: 'How disruptive is a coating compared with a tear off?',
      a: 'Considerably less, which is usually the main reason to consider it. There is no tear off, so no open roof, far less noise and debris, and much less risk to the building during the work.\n\nOn an occupied building that difference has a real value beyond the direct cost of the job.',
    },
    {
      q: 'Will a coating fix a leak?',
      a: 'It can, where the leak originates in the membrane surface, a seam or a detail that the coating encapsulates. It will not fix a leak caused by a structural problem, a failed deck, or water already trapped in the assembly.\n\nWe find the actual source before recommending anything. Coating over an unresolved leak just hides it.',
    },
    {
      q: 'How long does a coating last?',
      a: 'It depends on the system specified, the condition of the substrate and the exposure on your building, so we will not quote a number that sounds good on a web page.\n\nWhat we will do is tell you what the manufacturer warrants for the specific system we are proposing, in writing, before you commit.',
    },];

const MAINT_FAQS = [
    {
      q: 'Why does a commercial roof need scheduled maintenance?',
      a: 'Because on a commercial building, roof problems stay hidden. On a house a leak announces itself on a ceiling. On a large low slope roof above a suspended ceiling, water can be entering for a long time before anybody notices, and by then it has been finding its way into insulation and decking.\n\nScheduled inspection catches the small things while they are still small, which is substantially cheaper than reactive repair and far less disruptive than a replacement.',
    },
    {
      q: 'What actually gets checked?',
      a: 'Penetrations, rooftop equipment and the areas around it, drainage including drains and scuppers, seams between membrane sheets, flashings and upstands, and the general condition of the field.\n\nThose are the things that fail on a low slope roof, in roughly that order.',
    },
    {
      q: 'How often should a commercial roof be inspected?',
      a: 'Twice a year is a sensible baseline for most buildings, plus an additional look after any significant storm.\n\nBuildings with a lot of rooftop plant being serviced by other contractors are worth checking more often, because foot traffic and equipment work are a common source of membrane damage.',
    },
    {
      q: 'Do other contractors really damage the roof?',
      a: 'It happens more than building owners expect. HVAC and other equipment gets serviced on the roof over the years, and not every contractor is careful about the membrane they are standing on or the tools they set down.\n\nIt is not usually malicious, but it is a genuine and recurring source of damage, and it is one of the better arguments for looking at the roof on a schedule.',
    },
    {
      q: 'Can maintenance extend the life of the roof?',
      a: 'Meaningfully, yes, because most commercial roofs do not fail all at once. They fail at a detail, water gets in, the assembly beneath gets wet, and the problem spreads from there.\n\nCatching that detail early is the difference between a repair and a tear off. It is also what makes a restoration coating a viable option later rather than a wasted spend.',
    },];

/* ========================================================================== */
const coatings = {
  path: '/commercial/roof-coatings',
  priority: '0.75',
  title: 'Commercial Roof Coatings Oklahoma City | Champion Roofing',
  desc: 'GAF CoatingsPro liquid applied roof coatings in Oklahoma City. Restore a weathered but sound commercial roof without a tear off. Free survey.',
  ogImage: 'tpo-white-sunlit',
  crumbs: [
    { name: 'Commercial roofing', path: '/commercial' },
    { name: 'Roof coatings', path: '/commercial/roof-coatings' },
  ],
  service: {
    name: 'Commercial roof coatings',
    type: 'Liquid applied roof coating',
    offers: ['Liquid applied roof coatings', 'Roof restoration', 'Commercial roof recoating'],
  },
  faqs: COATING_FAQS,
  body: `
${pageHero({
    crumbs: [
      { name: 'Commercial roofing', path: '/commercial' },
      { name: 'Roof coatings', path: '/commercial/roof-coatings' },
    ],
    eb: 'Roof coatings',
    h1: 'Liquid applied roof coatings',
    lede: 'A way to get more service life out of a commercial roof that is weathered but sound, without the disruption and cost of a full tear off.',
    image: 'tpo-white-sunlit',
    alt: 'A white commercial membrane roof in sunlight',
  })}

${split({
    eb: 'The credential',
    title: 'GAF CoatingsPro, which is its own certification',
    body: [
      'Champion Roofing holds the GAF CoatingsPro liquid applied roofing credential. It is separate from our GAF Master Elite residential certification and our GAF Certified commercial certification, and it exists specifically for this kind of restoration work.',
      'A coating is applied as a fluid and cures into a continuous, seamless membrane across the whole roof. That matters because it encapsulates the details that fail first on a low slope roof: seams, flashings, and every penetration through the surface.',
      'What it does not do is fix a roof that has actually failed. If the insulation is saturated or the deck is compromised, a coating is a delay with a larger bill attached. Establishing which situation you are in is what the survey is for.',
    ],
    list: [
      ['GAF CoatingsPro contractor.', 'A separate credential for liquid applied systems.'],
      ['Seamless once cured.', 'No joints across the field of the roof.'],
      ['Far less disruption.', 'No tear off, so no open roof over an occupied building.'],
      ['An honest assessment first.', 'We will tell you when coating is the wrong call.'],
    ],
    image: 'comm-lowslope-black',
    alt: 'A low slope commercial roof surface',
    reverse: true,
    cta: btn('/contact', 'Book a free survey', 'btn-dark'),
    floatCard: { icon: 'award', title: 'GAF CoatingsPro', sub: 'Liquid applied roofing contractor' },
  })}

${stickyFeature(
    'How it works',
    'What a coating project actually involves',
    'It is not paint. The preparation decides the outcome, exactly as it does on a new roof.',
    [
      {
        img: 'comm-modern-hvac',
        alt: 'A modern commercial building with rooftop plant',
        h: 'Survey and moisture check',
        p: 'Before anything is specified, we establish whether the assembly beneath the membrane is dry and sound. A coating is only appropriate over a substrate that is intact.',
      },
      {
        img: 'real-flat-roof-drone',
        alt: 'Drone view along the coping of a commercial low slope roof',
        h: 'Preparation and detailing',
        p: 'The roof is cleaned, and the seams, flashings, upstands and penetrations are detailed before the field coat goes on. This is the slow part, and where the job is won or lost.',
      },
      {
        img: 'tpo-aerial-hvac',
        alt: 'Aerial view of a white membrane roof with rooftop HVAC equipment',
        h: 'Application and warranty',
        p: 'The system is applied to the manufacturer specification and cures into one continuous membrane. You get the warranty terms for that specific system in writing before you commit.',
      },
    ],
    { tint: true },
  )}

${honestBlock(
    'When we will tell you not to coat',
    [
      'Coatings are a good product and they are also oversold. Because the work is less disruptive and cheaper than a replacement, it is tempting for a contractor to recommend one whatever the roof is doing.',
      'We would rather quote you the replacement you actually need than take an easier job that fails.',
    ],
    [
      ['The insulation is wet.', 'Coating traps that moisture in the assembly rather than removing it.'],
      ['The deck is compromised.', 'A surface treatment does not address a structural problem.'],
      ['The membrane has failed across the field.', 'At that point you are coating a roof that has stopped being a roof.'],
      ['The leak source is unresolved.', 'We find the actual source first. Coating over it just hides it.'],
      ['Drainage was never right.', 'Standing water will undermine a coating the same way it undermined the membrane.'],
    ],
  )}

${statStrip([
    { count: 22, label: 'Years roofing Oklahoma City' },
    { count: 2, label: 'Commercial Project of the Year awards' },
    { pre: 'GAF', label: 'CoatingsPro contractor' },
    { pre: 'A', suffix: '+', label: 'BBB accredited rating' },
  ])}

${faqSection('Coating FAQs', 'Roof coating questions', 'Including the cases where we would steer you away from one.', COATING_FAQS)}

${related([
    { path: '/commercial', icon: 'building', h: 'Commercial roofing', p: 'Every commercial system we install.' },
    { path: '/commercial/tpo-roofing', icon: 'flat', h: 'TPO roofing', p: 'Our usual low slope recommendation.' },
    { path: '/commercial/roof-maintenance', icon: 'calendar', h: 'Roof maintenance', p: 'Catching problems before they need a coating.' },
    { path: '/contact', icon: 'phone', h: 'Contact', p: 'Book a free commercial survey.' },
  ])}

${ctaBand('Is your roof worth restoring?', 'We will survey it and tell you honestly whether a coating is the right spend or whether you need a replacement.', 'comm-dark-flat-aerial')}
`,
};

/* ========================================================================== */
const maintenance = {
  path: '/commercial/roof-maintenance',
  priority: '0.75',
  title: 'Commercial Roof Maintenance Oklahoma City | Champion Roofing',
  desc: 'Scheduled commercial roof maintenance in Oklahoma City. Catch penetrations, drainage and seam problems before they become a replacement. Free survey.',
  ogImage: 'comm-modern-hvac',
  crumbs: [
    { name: 'Commercial roofing', path: '/commercial' },
    { name: 'Roof maintenance', path: '/commercial/roof-maintenance' },
  ],
  service: {
    name: 'Commercial roof maintenance',
    type: 'Commercial roof maintenance',
    offers: ['Scheduled roof inspection', 'Commercial roof maintenance', 'Commercial roof repair', 'Drainage clearing'],
  },
  faqs: MAINT_FAQS,
  body: `
${pageHero({
    crumbs: [
      { name: 'Commercial roofing', path: '/commercial' },
      { name: 'Roof maintenance', path: '/commercial/roof-maintenance' },
    ],
    eb: 'Maintenance',
    h1: 'Commercial roof maintenance',
    lede: 'Low slope roofs fail quietly. Scheduled inspection catches penetrations, drainage and seam problems while they are still repairs rather than replacements.',
    image: 'comm-modern-hvac',
    alt: 'A modern commercial building with rooftop plant and a low slope roof',
  })}

${split({
    eb: 'The case for it',
    title: 'A commercial roof rarely fails all at once',
    body: [
      'It fails at a detail. Water gets in, the assembly beneath gets wet, and the problem spreads outward from that point. By the time it shows on a ceiling tile, it has usually been happening for a while.',
      'That is the whole argument for looking at the roof on a schedule rather than waiting for a phone call from a tenant. Catching a failed penetration detail early is a repair. Finding it two years later is frequently a tear off.',
      'It also keeps restoration on the table. A coating is only viable over a roof that is still sound, so maintenance is what preserves the cheaper option for later.',
    ],
    list: [
      ['Penetrations and rooftop equipment.', 'The most common origin of a commercial leak.'],
      ['Drainage, drains and scuppers.', 'Ponding water finds every weakness a roof has.'],
      ['Seams, flashings and upstands.', 'Where thermal movement concentrates.'],
      ['Documented each visit.', 'So you have a record of how the roof is changing.'],
    ],
    image: 'comm-retail-aerial',
    alt: 'Aerial view of a commercial retail building with a low slope roof',
    reverse: true,
    cta: btn('/contact', 'Ask about a maintenance visit', 'btn-dark'),
  })}

${infoGrid('The checklist', 'What we look at on a maintenance visit', 'The same list every time, so the record is comparable from one visit to the next.', [
    { icon: 'flat', h: 'Penetrations', p: 'Every pipe, conduit, curb and unit passing through the membrane. Each one is an individually flashed detail and each one can fail.' },
    { icon: 'building', h: 'Rooftop equipment', p: 'The membrane around plant that other contractors service. Foot traffic and dropped tools are a recurring and underestimated source of damage.' },
    { icon: 'gutter', h: 'Drainage', p: 'Drains, scuppers and any evidence of ponding. A low slope roof depends entirely on water leaving it.' },
    { icon: 'wrench', h: 'Seams and flashings', p: 'The joints between membrane sheets and at every upstand. These carry the thermal movement and open up first.' },
    { icon: 'search', h: 'The field', p: 'General surface condition, weathering, and anything that has changed since the last visit.' },
    { icon: 'doc', h: 'A written record', p: 'Findings documented each visit, so you can see how the roof is trending rather than guessing.' },
  ], { tint: true })}

${steps('The rhythm', 'How a maintenance programme runs', 'Twice a year for most buildings, plus a look after any significant storm.', [
    { h: 'Baseline survey', p: 'We establish the current condition of the roof and document it, so later visits have something to compare against.' },
    { h: 'Scheduled visits', p: 'The same checklist each time, at an interval that suits the building and its rooftop traffic.' },
    { h: 'Small repairs as found', p: 'The point of the programme. Details get dealt with while they are still details.' },
    { h: 'A plan for the roof', p: 'When the roof does approach the end of its life, you know it is coming and can budget for restoration or replacement rather than reacting.' },
  ], true)}

${statStrip([
    { count: 2, label: 'Inspections a year, typical' },
    { count: 22, label: 'Years roofing this metro' },
    { count: 2, label: 'Foremen on larger commercial sites' },
    { pre: 'Free', label: 'Initial survey' },
  ])}

${faqSection('Maintenance FAQs', 'Commercial maintenance questions', 'For property owners, managers and facilities teams.', MAINT_FAQS)}

${related([
    { path: '/commercial', icon: 'building', h: 'Commercial roofing', p: 'Every commercial system we install.' },
    { path: '/commercial/roof-coatings', icon: 'shield', h: 'Roof coatings', p: 'Restoring a roof that is still sound.' },
    { path: '/commercial/tpo-roofing', icon: 'flat', h: 'TPO roofing', p: 'Our usual low slope recommendation.' },
    { path: '/contact', icon: 'phone', h: 'Contact', p: 'Book a free commercial survey.' },
  ])}

${ctaBand('Get the roof on a schedule', 'A baseline survey costs nothing, and it is the cheapest thing you will ever do for a commercial roof.', 'comm-warehouse-aerial')}
`,
};

export default [coatings, maintenance];
