import { BIZ } from '../data.mjs';
import { btn } from '../lib.mjs';
import {
  stickyFeature,
  editorialStack,
  pageHero, statStrip, steps, faqSection, split, infoGrid,
  detailAccordion, honestBlock, related, asideCard, ctaBand, ticker, serviceGrid,
} from '../sections.mjs';

const CITIES = BIZ.cities.map((c) => c.name).join(', ').replace(/, ([^,]*)$/, ' and $1');

const COMMERCIAL_ASIDE = asideCard('Commercial at a glance', [
  { icon: 'building', h: 'Buildings', p: 'Offices, retail, industrial, multifamily and institutional.' },
  { icon: 'flat', h: 'Systems', p: 'TPO, EPDM, PVC, modified bitumen, coatings and metal.' },
  { icon: 'users', h: 'On site', p: 'One or two foremen through the working day.' },
  { icon: 'award', h: 'Credentials', p: 'GAF Certified Commercial and GAF CoatingsPro contractor.' },
  { icon: 'pin', h: 'Where', p: CITIES },
]);

/* ========================================================================== */
const commercial = {
  path: '/commercial',
  priority: '0.9',
  title: 'Commercial Roofing Oklahoma City | TPO, EPDM, Coatings',
  desc: 'Commercial roofing in Oklahoma City: TPO, EPDM, PVC, modified bitumen and coatings for offices, retail, industrial and multifamily. GAF Certified contractor.',
  ogImage: 'real-commercial-drone-office',
  crumbs: [{ name: 'Commercial roofing', path: '/commercial' }],
  service: {
    name: 'Commercial roofing',
    type: 'Commercial roofing contractor',
    offers: ['TPO roofing', 'EPDM roofing', 'PVC roofing', 'Modified bitumen roofing', 'Roof coatings and liquid applied roofing', 'Commercial roof maintenance', 'Commercial roof repair', 'Commercial metal roofing'],
  },
  faqs: [
    {
      q: 'Which commercial roofing system do you recommend?',
      a: 'TPO is our usual recommendation for low slope commercial work, because of availability, how it installs and how serviceable it is later. That is a starting position rather than a rule.\n\nIt depends on the building. You do not want to use TPO on a restaurant, for instance, where grease exhaust is a factor. In those cases we point you toward PVC or EPDM because that is what the building actually needs.',
    },
    {
      q: 'Can you work around our tenants and normal operations?',
      a: 'Yes, and it is a routine part of commercial work rather than a special accommodation. We put one or two foremen on site whose job includes staying flexible as things come up during the day.\n\nOn commercial jobs we set up the site properly, including caution taping areas where people are moving in and out beneath the work. Coordination with whoever else is on the building is handled by a foreman who is actually paying attention to it.',
    },
    {
      q: 'Do you coordinate with other trades on the building?',
      a: 'Regularly. Roof penetrations and rooftop equipment mean we end up working alongside plumbers, HVAC contractors, general contractors and architects, plus property owners, property managers and real estate professionals.\n\nWhen project specifications or scheduling require it, that coordination is part of the job rather than something the client has to manage between us.',
    },
    {
      q: 'Can you restore a commercial roof instead of replacing it?',
      a: 'Sometimes. Champion Roofing is a GAF CoatingsPro liquid applied roofing contractor, and a coating system can be the right answer on a roof that is weathered but structurally sound.\n\nIt is not the right answer on a roof that has failed. We will tell you which situation you are in rather than selling you a coating over a problem.',
    },
    {
      q: 'Do you offer commercial roof maintenance?',
      a: 'Yes. Scheduled inspection and maintenance is considerably cheaper than reactive repair, and on a low slope commercial roof small problems become large ones quietly.\n\nRoof penetrations, drainage, seams and flashings are the things that need periodic attention, particularly on buildings with rooftop equipment being serviced by other contractors.',
    },
    {
      q: 'What size of commercial project do you take on?',
      a: 'Offices, retail, industrial buildings, multifamily and institutional properties around the Oklahoma City metro. Our DaVinci Project of the Year awards were both commercial: the Donald W. Reynolds Complex at Bethany Children\'s Health Center in 2021 and Gaillardia Office Park in 2023.\n\nIf a project is outside what we can properly resource, we will tell you that rather than stretch a crew across it.',
    },
  ],
  body: `
${pageHero({
    crumbs: [{ name: 'Commercial roofing', path: '/commercial' }],
    eb: 'Commercial',
    h1: 'Commercial roofing in Oklahoma City',
    lede: 'Low slope membranes, liquid applied coatings and steep slope systems for offices, retail, industrial and multifamily buildings. Specified to the building, not to a preference.',
    image: 'real-commercial-drone-office',
    alt: 'Drone photograph of a commercial office building in Oklahoma City with a Champion Roofing installed roof',
  })}


${ticker()}

${split({
    eb: 'Specification',
    title: 'TPO is usually the answer. It is not always the answer.',
    body: [
      'For most low slope commercial roofs around this metro, TPO is what we recommend. It is readily available, it installs well, and when something needs attention in eight years it is straightforward to service. Those three things matter more over the life of a building than a marginal difference in a specification sheet.',
      'But it is a recommendation, not a default. The owner is specific about this: <strong>you do not want to use TPO on a restaurant, for instance.</strong> Where grease exhaust or other project conditions make TPO unsuitable, we point you to PVC or EPDM instead.',
      'The right answer depends on the building\'s use, its rooftop equipment, the project specification and what is going to happen on that roof over the next twenty years.',
    ],
    list: [
      ['TPO', 'Our usual recommendation for low slope, on availability, installation and serviceability.'],
      ['PVC', 'Where grease, chemical exposure or specific project conditions rule TPO out.'],
      ['EPDM', 'A long established membrane that remains the right call on certain buildings.'],
      ['Modified bitumen and coatings', 'Including GAF CoatingsPro liquid applied systems for roofs worth restoring.'],
    ],
    image: 'tpo-aerial-hvac',
    alt: 'Aerial view of a white TPO membrane roof with rooftop HVAC equipment',
    reverse: true,
    cta: btn('/commercial/tpo-roofing', 'More on TPO roofing', 'btn-dark'),
  })}

${infoGrid('Systems', 'Commercial roofing systems we install', 'Membrane, coating and metal systems for low slope and steep slope commercial roofs.', [
    { icon: 'flat', h: 'TPO', p: 'Thermoplastic single ply membrane. Our usual recommendation for commercial low slope work, and the most commonly specified system on this kind of building.' },
    { icon: 'shield', h: 'PVC', p: 'Where grease exhaust, chemical exposure or particular project conditions make TPO the wrong choice. Restaurants are the obvious example.' },
    { icon: 'building', h: 'EPDM', p: 'A long established synthetic rubber membrane. Still the correct answer on plenty of buildings, particularly where a proven track record matters more than the newest specification.' },
    { icon: 'leaf', h: 'Modified bitumen', p: 'Multi ply asphaltic systems, appropriate on certain low slope applications and in re roofing situations over existing built up roofs.' },
    { icon: 'bolt', h: 'Coatings and liquid applied', p: 'GAF CoatingsPro systems. A restoration route for roofs that are weathered but sound, extending service life without a full tear off.' },
    { icon: 'metal', h: 'Commercial metal', p: 'Standing seam and corrugated systems on steeper commercial and industrial roof sections, and on agricultural buildings.' },
  ], { tint: true })}

${split({
    eb: 'On site',
    title: 'One or two foremen, on the building, all day',
    body: [
      'The difference between a commercial roofing job that runs and one that becomes a problem is almost always site management rather than roofing skill. Tenants are working underneath. Other trades are on the building. Deliveries are arriving. Somebody has to be paying attention to all of it.',
      'On commercial projects we put one or two foremen on site through the working day. Their job is to stay flexible as things come up, keep people safe as they move in and out beneath the work, verify that what arrived is what was specified, and make sure the cleanup at the end is genuine.',
      'On more extensive commercial jobs we caution tape the areas beneath the work. Coordination with whoever else is on the building is handled by somebody who is actually watching it happen.',
    ],
    list: [
      ['Foremen on site through the day.', 'Not a crew dropped off and collected.'],
      ['Site safety around tenants and trades.', 'Including caution taping the areas beneath the work.'],
      ['Materials verified against the spec.', 'Checked on delivery rather than assumed.'],
      ['Magnetic sweeps before we leave.', 'Nails off the ground, debris cleared, materials accounted for.'],
    ],
    image: 'real-commercial-campus',
    alt: 'A large commercial campus building in Oklahoma City roofed by Champion Roofing',
    floatCard: { icon: 'award', title: 'Project of the Year', sub: 'Gaillardia Office Park, 2023' },
  })}

${statStrip([
    { count: 2, label: 'Commercial Project of the Year awards' },
    { count: 22, label: 'Years roofing Oklahoma City' },
    { count: 2, label: 'Foremen on larger commercial sites' },
    { pre: 'A', suffix: '+', label: 'BBB accredited rating' },
  ])}

${stickyFeature('The detail', 'What commercial roofing in Oklahoma City actually involves', `Commercial roofing has less in common with residential work than the shared word suggests. The systems differ, the failure modes differ, and the hardest part is frequently not the roofing at all.`, [
    { img: 'comm-lowslope-black', alt: `A low slope commercial roof`, h: `Restoration versus replacement`, p: `A low slope roof that is weathered but structurally sound is often a candidate for a liquid applied coating rather than a tear off. Champion Roofing holds the GAF CoatingsPro credential for exactly this work, and on an occupied building avoiding a tear off has real value beyond the direct cost.` },
    { img: 'tpo-aerial-hvac', alt: `Aerial view of a white TPO membrane roof with rooftop HVAC equipment`, h: `Why commercial roofs fail quietly`, p: `On a house a roof problem announces itself on a ceiling. On a commercial building with a suspended ceiling and a large roof area, water can be entering for a long time before anyone notices.` },
    { img: 'real-commercial-campus', alt: `A large commercial campus building in Oklahoma City roofed by Champion Roofing`, h: `Coordination, weather and the schedule`, p: `Roof penetrations and rooftop equipment mean we work alongside plumbers, HVAC contractors, general contractors and architects, plus whoever runs the asset. That coordination is part of our job rather than something handed back to the client.` },
  ])}

${steps('How commercial work runs', 'From survey to closeout', 'Five stages, with a named point of contact throughout.', [
    { h: 'Survey', p: 'We come out and assess the roof, the drainage, the penetrations and the rooftop equipment. Drone survey where it helps.' },
    { h: 'Specification', p: 'A recommendation based on the building\'s use and condition, not a default system. Including whether restoration is viable.' },
    { h: 'Scheduling and coordination', p: 'Worked around your tenants, your operations and whichever other trades are on the building.' },
    { h: 'Installation', p: 'One or two foremen on site through the day, managing safety, materials and the areas beneath the work.' },
    { h: 'Closeout', p: 'Site cleared, magnetic sweeps completed, materials accounted for, and the paperwork and warranty documentation handed over.' },
  ], true)}

${faqSection('Commercial FAQs', 'Commercial roofing questions', 'For property owners, managers and general contractors.', [
    {
      q: 'Which commercial roofing system do you recommend?',
      a: 'TPO is our usual recommendation for low slope commercial work, because of availability, how it installs and how serviceable it is later. That is a starting position rather than a rule.\n\nIt depends on the building. You do not want to use TPO on a restaurant, for instance, where grease exhaust is a factor. In those cases we point you toward PVC or EPDM because that is what the building actually needs.',
    },
    {
      q: 'Can you work around our tenants and normal operations?',
      a: 'Yes, and it is a routine part of commercial work rather than a special accommodation. We put one or two foremen on site whose job includes staying flexible as things come up during the day.\n\nOn commercial jobs we set up the site properly, including caution taping areas where people are moving in and out beneath the work. Coordination with whoever else is on the building is handled by a foreman who is actually paying attention to it.',
    },
    {
      q: 'Do you coordinate with other trades on the building?',
      a: 'Regularly. Roof penetrations and rooftop equipment mean we end up working alongside plumbers, HVAC contractors, general contractors and architects, plus property owners, property managers and real estate professionals.\n\nWhen project specifications or scheduling require it, that coordination is part of the job rather than something the client has to manage between us.',
    },
    {
      q: 'Can you restore a commercial roof instead of replacing it?',
      a: 'Sometimes. Champion Roofing is a GAF CoatingsPro liquid applied roofing contractor, and a coating system can be the right answer on a roof that is weathered but structurally sound.\n\nIt is not the right answer on a roof that has failed. We will tell you which situation you are in rather than selling you a coating over a problem.',
    },
    {
      q: 'Do you offer commercial roof maintenance?',
      a: 'Yes. Scheduled inspection and maintenance is considerably cheaper than reactive repair, and on a low slope commercial roof small problems become large ones quietly.\n\nRoof penetrations, drainage, seams and flashings are the things that need periodic attention, particularly on buildings with rooftop equipment being serviced by other contractors.',
    },
    {
      q: 'What size of commercial project do you take on?',
      a: 'Offices, retail, industrial buildings, multifamily and institutional properties around the Oklahoma City metro. Our DaVinci Project of the Year awards were both commercial: the Donald W. Reynolds Complex at Bethany Children\'s Health Center in 2021 and Gaillardia Office Park in 2023.\n\nIf a project is outside what we can properly resource, we will tell you that rather than stretch a crew across it.',
    },
  ])}

${related([
    { path: '/commercial/tpo-roofing', icon: 'flat', h: 'TPO roofing', p: 'The system we recommend most for low slope.' },
    { path: '/metal-roofing', icon: 'metal', h: 'Metal roofing', p: 'For steeper commercial and industrial roofs.' },
    { path: '/our-work', icon: 'award', h: 'Our work', p: 'Including award winning commercial projects.' },
    { path: '/contact', icon: 'phone', h: 'Contact', p: 'Speak to the office about a building.' },
  ])}

${ctaBand('Get a commercial roof surveyed', 'We will assess the roof, the drainage and the penetrations, then tell you whether it needs restoring or replacing.', 'comm-modern-hvac')}
`,
};

/* ========================================================================== */
const tpo = {
  path: '/commercial/tpo-roofing',
  priority: '0.8',
  title: 'TPO Roofing Oklahoma City | Commercial Low Slope | Champion',
  desc: 'TPO roofing in Oklahoma City for commercial low slope buildings. Our usual recommendation on availability, installation and serviceability. GAF Certified.',
  ogImage: 'tpo-white-sunlit',
  crumbs: [
    { name: 'Commercial roofing', path: '/commercial' },
    { name: 'TPO roofing', path: '/commercial/tpo-roofing' },
  ],
  service: {
    name: 'TPO roofing',
    type: 'TPO commercial roofing',
    offers: ['TPO membrane installation', 'TPO roof replacement', 'TPO roof repair', 'Commercial low slope roofing'],
  },
  faqs: [
    {
      q: 'Why do you usually recommend TPO?',
      a: 'Three practical reasons: availability, installation and serviceability. The material is readily obtainable in this market, it installs well, and when something needs attention in several years it is straightforward to repair.\n\nOver the life of a commercial building, those three things matter more than a marginal difference on a specification sheet.',
    },
    {
      q: 'When is TPO the wrong choice?',
      a: 'Restaurants are the clearest example. Where grease exhaust is discharging onto the roof, TPO is not the right membrane and we will recommend PVC or EPDM instead.\n\nMore generally, the building\'s use, its rooftop equipment and the project specification all bear on the decision. TPO is our usual starting point, not an automatic answer.',
    },
    {
      q: 'What kinds of buildings is TPO suited to?',
      a: 'Low slope commercial roofs: offices, retail, industrial buildings, multifamily properties and institutional buildings. It is the most commonly specified single ply membrane on this kind of structure.\n\nIt is not a residential steep slope product. For houses, see our residential roofing pages.',
    },
    {
      q: 'Can a TPO roof be repaired rather than replaced?',
      a: 'Usually, yes, and that is one of its advantages. Membrane repairs, seam work and penetration detailing are all routine on a TPO roof that is otherwise sound.\n\nWhere the membrane is weathered across the whole roof but the structure is fine, a liquid applied coating may also be an option. We hold the GAF CoatingsPro credential for that work.',
    },
    {
      q: 'How disruptive is a TPO installation to a working building?',
      a: 'Less than most people expect, and we plan around your operations. One or two foremen stay on site through the day managing safety, deliveries and the areas beneath the work, including caution taping where people are moving in and out.\n\nCoordination with your tenants and any other trades on the building is handled rather than left to you.',
    },
  ],
  body: `
${pageHero({
    crumbs: [
      { name: 'Commercial roofing', path: '/commercial' },
      { name: 'TPO roofing', path: '/commercial/tpo-roofing' },
    ],
    eb: 'TPO roofing',
    h1: 'TPO roofing for Oklahoma City commercial buildings',
    lede: 'Our usual recommendation for low slope commercial roofs, for three practical reasons: availability, installation and how serviceable it is in ten years.',
    image: 'tpo-white-sunlit',
    alt: 'A white TPO membrane roof on a commercial building in sunlight',
  })}


${infoGrid('Why TPO', 'Three reasons it is our default recommendation', 'Not a specification argument, a practical one about the life of the building.', [
    { icon: 'check', h: 'Availability', p: 'The material is readily obtainable in this market. That matters when a roof needs to go on to a schedule, and it matters more when a repair is needed in five years.' },
    { icon: 'wrench', h: 'Installation', p: 'It installs well and predictably. A system that goes down cleanly is a system with fewer places for a future problem to originate.' },
    { icon: 'shield', h: 'Serviceability', p: 'When something does need attention later, a TPO roof is straightforward to repair. Over twenty years of building ownership, that is worth more than most spec sheet differences.' },
  ])}

${honestBlock(
    'And the case against TPO, for the buildings where it is wrong',
    [
      'We recommend TPO more than anything else, so it is worth being clear about where we do not. The owner names the obvious case directly: you do not want to use TPO on a restaurant.',
      'Grease discharging from kitchen exhaust onto a roof membrane is a genuine compatibility problem. Where that is the situation, PVC or EPDM is the correct specification and that is what we will put in front of you, even though it is not the system we install most.',
    ],
    [
      ['Restaurants and commercial kitchens.', 'Grease exhaust means PVC or EPDM instead.'],
      ['Certain chemical exposures.', 'Where rooftop discharge is incompatible with the membrane.'],
      ['Specific project specifications.', 'Where an architect or owner has specified otherwise for a reason.'],
      ['Steep slope roofs.', 'TPO is a low slope product. Steeper sections want metal or a steep slope system.'],
      ['Residential houses.', 'This is a commercial system. Houses are a different conversation.'],
    ],
  )}

${detailAccordion('The detail', 'What a TPO installation involves, and what makes one last', `TPO is a thermoplastic single ply membrane. Sheets are laid over the roof, mechanically fastened or adhered depending on the system, and the seams between sheets are heat welded to form a continuous surface. Done properly, the result behaves as one piece.`, [
    { icon: 'metal', h: `The seams are the roof`, p: `A heat welded seam, done correctly, is as strong as the membrane either side of it. Done poorly, it is the first thing to fail, and on a large commercial roof there is a great deal of seam. Weld quality is a function of equipment, temperature, speed and the person operating it, which is why it is worth asking who is actually going to be on your roof.` },
    { icon: 'flat', h: `Penetrations, and the equipment above them`, p: `Every pipe, conduit, curb and unit that passes through the membrane is a detail that has to be flashed and welded individually. On a commercial roof carrying substantial rooftop plant, that is a lot of individual details.

It is also worth knowing that rooftop equipment gets serviced by other contractors over the years, and not all of them treat your membrane carefully. That is a strong argument for scheduled maintenance rather than waiting for a problem to appear on a ceiling tile.` },
    { icon: 'gutter', h: `Drainage`, p: `A low slope roof depends entirely on its drains and scuppers doing their job. Ponding water finds every weakness a membrane has, and standing water on a roof that was designed to shed it is a warning rather than a cosmetic issue. Drainage gets assessed as part of any survey we do.` },
    { icon: 'ridge', h: `Insulation and the assembly below`, p: `The membrane is the visible layer of an assembly. What sits beneath it, including insulation and cover board, affects both the thermal performance of the building and how the membrane behaves over time. On a re roof, the condition of what is already there determines whether a tear off is required or whether the existing assembly can be built on.` },
    { icon: 'shield', h: `Restoration as an alternative`, p: `Where a membrane roof is weathered but the assembly beneath it is sound, a liquid applied coating can extend service life significantly without the disruption of a tear off. Champion Roofing is a GAF CoatingsPro liquid applied roofing contractor. On an occupied building, avoiding a tear off has real value beyond the direct cost.

We will tell you when a coating is not appropriate. Coating over a roof that has actually failed is a short delay with a larger bill attached to it.` },
    { icon: 'building', h: `Working on an occupied building`, p: `Most commercial roofing happens over people who are trying to work. One or two foremen stay on site through the day managing deliveries, site safety and the areas beneath the work, including caution taping where people move in and out. Coordination with your tenants and with other trades on the building is handled by somebody watching it rather than assumed to sort itself out.` },
  ], { tint: true })}

${faqSection('TPO FAQs', 'TPO roofing questions', 'Including when we would tell you to use something else.', [
    {
      q: 'Why do you usually recommend TPO?',
      a: 'Three practical reasons: availability, installation and serviceability. The material is readily obtainable in this market, it installs well, and when something needs attention in several years it is straightforward to repair.\n\nOver the life of a commercial building, those three things matter more than a marginal difference on a specification sheet.',
    },
    {
      q: 'When is TPO the wrong choice?',
      a: 'Restaurants are the clearest example. Where grease exhaust is discharging onto the roof, TPO is not the right membrane and we will recommend PVC or EPDM instead.\n\nMore generally, the building\'s use, its rooftop equipment and the project specification all bear on the decision. TPO is our usual starting point, not an automatic answer.',
    },
    {
      q: 'What kinds of buildings is TPO suited to?',
      a: 'Low slope commercial roofs: offices, retail, industrial buildings, multifamily properties and institutional buildings. It is the most commonly specified single ply membrane on this kind of structure.\n\nIt is not a residential steep slope product. For houses, see our residential roofing pages.',
    },
    {
      q: 'Can a TPO roof be repaired rather than replaced?',
      a: 'Usually, yes, and that is one of its advantages. Membrane repairs, seam work and penetration detailing are all routine on a TPO roof that is otherwise sound.\n\nWhere the membrane is weathered across the whole roof but the structure is fine, a liquid applied coating may also be an option. We hold the GAF CoatingsPro credential for that work.',
    },
    {
      q: 'How disruptive is a TPO installation to a working building?',
      a: 'Less than most people expect, and we plan around your operations. One or two foremen stay on site through the day managing safety, deliveries and the areas beneath the work, including caution taping where people are moving in and out.\n\nCoordination with your tenants and any other trades on the building is handled rather than left to you.',
    },
  ])}

${related([
    { path: '/commercial', icon: 'building', h: 'Commercial roofing', p: 'Every commercial system we install.' },
    { path: '/metal-roofing', icon: 'metal', h: 'Metal roofing', p: 'For steeper commercial and industrial sections.' },
    { path: '/our-work', icon: 'award', h: 'Our work', p: 'Award winning commercial projects.' },
    { path: '/contact', icon: 'phone', h: 'Contact', p: 'Speak to the office about a building.' },
  ])}

${ctaBand('Get your low slope roof surveyed', 'We will tell you whether TPO is right for the building, and what to use instead if it is not.', 'comm-lowslope-black')}
`,
};

export default [commercial, tpo];
