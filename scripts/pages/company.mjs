import { BIZ } from '../data.mjs';
import { ICONS, icon, img, btn, eyebrow, secHead, checks } from '../lib.mjs';
import {
  manifesto,
  pageHero, leadForm, statStrip, steps, faqSection, split, infoGrid,
  proseSection, related, asideCard, ctaBand, ticker, mosaic, areasSection,
  pullQuote, honestBlock, errorPage,
} from '../sections.mjs';

const CITIES = BIZ.cities.map((c) => c.name).join(', ').replace(/, ([^,]*)$/, ' and $1');

/* ========================================================================== */
const about = {
  path: '/about',
  priority: '0.8',
  title: 'About Champion Roofing | Oklahoma City Roofer Since 2004',
  desc: 'Champion Roofing was founded in Oklahoma City in 2004 by Mike Cowan, who roofed houses himself first. GAF Master Elite, DaVinci Masterpiece, BBB A+ accredited.',
  ogImage: 'real-supply-truck',
  crumbs: [{ name: 'About', path: '/about' }],
  faqs: [
    {
      q: 'How long has Champion Roofing been in business?',
      a: `Champion Roofing LLC was founded in Oklahoma City in April 2004, which makes ${BIZ.years} years. It has been locally owned by Mike Cowan throughout.\n\nThe company operates from 7608 N Council Rd in northwest Oklahoma City and holds Oklahoma Construction Industries Board roofing registration number ${BIZ.license}.`,
    },
    {
      q: 'Who owns Champion Roofing?',
      a: 'Mike Cowan. He worked as a roofer before founding the company, which is why the standard here gets set from the roof rather than from a sales office.\n\nHe also serves on the board and building committee of Bethany Children\'s Health Center.',
    },
    {
      q: 'What certifications does Champion Roofing hold?',
      a: 'GAF Master Elite residential roofing contractor, GAF Certified commercial contractor, GAF CoatingsPro liquid applied roofing contractor, GAF listed FORTIFIED Roof contractor, and DaVinci Masterpiece contractor.\n\nChampion Roofing is also a BBB accredited business with an A plus rating.',
    },
    {
      q: 'Has Champion Roofing won any awards?',
      a: 'Two DaVinci Roofscapes Masterpiece Contractor Project of the Year awards. The first in 2021 for a commercial project at the Donald W. Reynolds Complex at Bethany Children\'s Health Center, and the second in 2023 for a commercial project at Gaillardia Office Park.',
    },
  ],
  body: `
${pageHero({
    crumbs: [{ name: 'About', path: '/about' }],
    eb: 'About us',
    h1: 'Champion Roofing, Oklahoma City, since 2004',
    lede: 'A locally owned roofing company on North Council Road. The owner roofed houses himself before he started it, and that is still visible in how the work runs.',
    image: 'real-supply-truck',
    alt: 'A Champion Roofing materials delivery truck on site at an Oklahoma City property',
  })}

${ticker()}

${split({
    eb: 'The owner',
    title: 'Mike Cowan was on roofs before he was in an office',
    body: [
      'Champion Roofing LLC was founded in April 2004. Before that, Mike Cowan was a roofer. He came close to taking a different path entirely, and stayed in the trade instead.',
      'That background matters more than it sounds like it should. A company run by someone who has installed roofs personally has a different sense of what is acceptable and what is a shortcut, and a different tolerance for putting a product on a customer\'s house that will need attention in five years.',
      'It is also why he is so specific about change orders, about not installing a shingle the company is unwilling to warranty, and about treating a small repair with the same seriousness as a designer slate roof.',
    ],
    list: [
      ['Founded April 2004.', `Locally owned in Oklahoma City for ${BIZ.years} years.`],
      ['Owner worked as a roofer first.', 'The standard is set from the roof down.'],
      [`Oklahoma registration ${BIZ.license}.`, 'Held by Champion Roofing LLC.'],
      ['7608 N Council Rd.', 'A real address in northwest Oklahoma City.'],
    ],
    image: 'real-roofer-ladder-chimney',
    alt: 'A Champion Roofing crew member working from a ladder at a chimney',
    reverse: true,
  })}

${pullQuote(
    'We cater to our customers <em>no matter what kind of money they have</em>. We treat them all the same.',
    `Mike Cowan, owner, ${BIZ.name}`,
  )}

${statStrip([
    { count: 22, label: 'Years in Oklahoma City' },
    { count: 59, label: 'Google reviews, 5.0 rating' },
    { count: 2, label: 'DaVinci Project of the Year awards' },
    { count: 5, label: 'GAF and DaVinci certifications' },
  ])}

${infoGrid('Credentials', 'What Champion Roofing is certified to do', 'Certifications matter mostly because of what they unlock: the higher tier manufacturer warranties that a non certified roofer cannot offer you.', [
    { icon: 'award', h: 'GAF Master Elite', p: 'The residential certification held by a small proportion of American roofing contractors. It is what allows us to offer upgraded GAF manufacturer warranties.' },
    { icon: 'building', h: 'GAF Certified Commercial', p: 'The commercial equivalent, covering low slope and commercial roofing systems.' },
    { icon: 'shield', h: 'GAF CoatingsPro', p: 'Liquid applied roofing systems, used to restore commercial roofs that are weathered but structurally sound.' },
    { icon: 'house', h: 'GAF FORTIFIED Roof', p: 'A GAF listed FORTIFIED Roof contractor, for construction meeting the FORTIFIED standard.' },
    { icon: 'tile', h: 'DaVinci Masterpiece', p: 'The specialty and synthetic tile credential, and the one behind both of our Project of the Year awards.' },
    { icon: 'check', h: 'BBB Accredited, A+', p: 'Accredited with an A plus rating, listing the same address, owner and licence number you see here.' },
  ], { tint: true })}

${split({
    eb: 'The awards',
    title: 'Two DaVinci Projects of the Year, both commercial',
    body: [
      'In 2021, Champion Roofing won the DaVinci Roofscapes Masterpiece Contractor Project of the Year award for a commercial project at the Donald W. Reynolds Complex at Bethany Children\'s Health Center.',
      'In 2023, we won it again, for a commercial project at Gaillardia Office Park.',
      'Awards are not a substitute for a reference from someone whose roof we did. But two national Project of the Year awards on commercial specialty work is a reasonable indication of the kind of project we are trusted with.',
    ],
    list: [
      ['2021 Project of the Year.', 'Donald W. Reynolds Complex, Bethany Children\'s Health Center.'],
      ['2023 Project of the Year.', 'Gaillardia Office Park.'],
      ['First Brava install in Oklahoma.', 'On a church project, working alongside the product\'s founder.'],
    ],
    image: 'real-commercial-campus',
    alt: 'A large commercial campus building in Oklahoma City with a Champion Roofing installed roof',
    floatCard: { icon: 'award', title: 'DaVinci Masterpiece', sub: 'Project of the Year, 2021 and 2023' },
  })}

${manifesto('How we work', 'The things that actually distinguish one roofing company from another', `Every roofing company in Oklahoma City says the same handful of things about quality and service. These are the commitments that are actually different, in the owner’s own words where we have them.`, [
    { icon: 'check', h: `The price is the price`, quote: `I do not like change orders. When we give you a price, that is going to be the price. If we come across something, we usually just eat it. We do not pass it along to the customer.`, p: `Change orders are a genuine profit centre in this trade. A number gets quoted, work begins, and the additions start arriving.

The exception is a condition nobody could have known about, such as a structural problem hidden beneath decking. Even then, you hear about it before anything is done.` },
    { icon: 'shield', h: `We will not install a shingle we would not warranty`, p: `If a product has a known problem, it does not go on your house, regardless of whether it is cheap, available or already ordered.

We have moved customers off a synthetic product mid programme when a recall emerged, and gone back to a system we trusted instead.` },
    { icon: 'users', h: `Every customer gets the same crew`, quote: `Nobody is special, everybody, we just try to put on a good roof for everybody.`, p: `We install designer synthetic slate on some of the more expensive streets around the metro, and we also do small repairs on ordinary houses. The standard does not change between them.` },
    { icon: 'phone', h: `The sales approach is not a sales approach`, quote: `They are not real salesy. We treat people like they are family. We are here to help. We want to understand you, we want to know what you are looking for out of this so that we can best serve you.`, p: `Our people are not commission driven closers.

The practical version of that is spending time on someone’s best interest rather than on a close, and then usually getting the roof anyway because the honest opinion is what they wanted.` },
    { icon: 'award', h: `We stand behind work past the warranty when it is our fault`, quote: `In Oklahoma, your name gets spread pretty fast if you do a bad job.`, p: `There is a roof we replaced where the customer called five years later, after the warranty had already expired, because a problem had appeared. We went out, looked at it, decided it was our fault, and dealt with it.

Most of our work comes from repeat customers and referrals, which makes reputation the entire business model rather than a marketing consideration.` },
    { icon: 'storm', h: `We stop when the weather says stop`, p: `We delay or stop roofing work when rain, snow or unsafe heat could endanger the crew or expose your property.

On hot days that sometimes means starting later in the afternoon rather than not at all. It is a scheduling cost we accept rather than a promise we break.` },
    { icon: 'leaf', h: `The site gets looked after while we are on it`, p: `Gardens get protected before tear off begins, because in Oklahoma people care about their landscaping and disruption is the thing that actually upsets people about a roofing job. A foreman stays on site through the day.

Before we leave, the ground is swept with magnets for nails, debris is cleared and materials are accounted for.` },
  ])}

${infoGrid('The crew', 'Who is actually on your property', 'A roofing company is only as good as the people it puts on the roof and the person watching them.', [
    { icon: 'users', h: 'Foremen on site', p: 'One on residential jobs and usually two on commercial. They stay flexible as things come up, manage safety while people move in and out, and verify materials against the specification.' },
    { icon: 'check', h: 'Cleanup is their job too', p: 'Before the job closes out, the foreman makes sure the site is swept with magnets for nails, debris is gone and all material is accounted for.' },
    { icon: 'search', h: 'Leadership checks the work', p: 'Company leadership goes out to job sites and checks for nails and workmanship, because quality that is not inspected does not stay quality.' },
    { icon: 'drone', h: 'Inspectors with drones', p: 'Roof inspections are flown in three passes before anyone walks the roof, then followed up physically and in the attic where the imagery cannot answer the question.' },
  ], { cols: 4 })}

${split({
    eb: 'Beyond the roof',
    title: 'Where the company puts its time locally',
    body: [
      'Mike Cowan serves on the board and the building committee of Bethany Children\'s Health Center. The Donald W. Reynolds Complex there is also the project that won Champion Roofing its first DaVinci Project of the Year award in 2021.',
      'The company supports Water4 and The Salvation Army.',
      'None of this makes a roof last longer. It is here because when you are choosing who to let onto your property for a week, it is reasonable to want to know what kind of company you are dealing with.',
    ],
    list: [
      ['Bethany Children\'s Health Center.', 'Board and building committee.'],
      ['Water4.', 'Supported by the company.'],
      ['The Salvation Army.', 'Supported by the company.'],
    ],
    image: 'real-timber-pavilion',
    alt: 'A timber framed pavilion with a newly installed shingle roof',
    reverse: true,
  })}


${faqSection('About FAQs', 'Questions about the company', 'The verifiable details, with sources you can check yourself.', [
    {
      q: 'How long has Champion Roofing been in business?',
      a: `Champion Roofing LLC was founded in Oklahoma City in April 2004, which makes ${BIZ.years} years. It has been locally owned by Mike Cowan throughout.\n\nThe company operates from 7608 N Council Rd in northwest Oklahoma City and holds Oklahoma Construction Industries Board roofing registration number ${BIZ.license}.`,
    },
    {
      q: 'Who owns Champion Roofing?',
      a: 'Mike Cowan. He worked as a roofer before founding the company, which is why the standard here gets set from the roof rather than from a sales office.\n\nHe also serves on the board and building committee of Bethany Children\'s Health Center.',
    },
    {
      q: 'What certifications does Champion Roofing hold?',
      a: 'GAF Master Elite residential roofing contractor, GAF Certified commercial contractor, GAF CoatingsPro liquid applied roofing contractor, GAF listed FORTIFIED Roof contractor, and DaVinci Masterpiece contractor.\n\nChampion Roofing is also a BBB accredited business with an A plus rating.',
    },
    {
      q: 'Has Champion Roofing won any awards?',
      a: 'Two DaVinci Roofscapes Masterpiece Contractor Project of the Year awards. The first in 2021 for a commercial project at the Donald W. Reynolds Complex at Bethany Children\'s Health Center, and the second in 2023 for a commercial project at Gaillardia Office Park.',
    },
  ])}

${related([
    { path: '/our-work', icon: 'award', h: 'Our work', p: 'Real projects across the metro.' },
    { path: '/faq', icon: 'doc', h: 'FAQ', p: 'Everything people ask before they call.' },
    { path: '/service-areas', icon: 'pin', h: 'Service areas', p: 'Where we actually work.' },
    { path: '/contact', icon: 'phone', h: 'Contact', p: 'Speak to the office.' },
  ])}

${ctaBand('Work with a company that will still be here', 'Twenty two years in Oklahoma City, and a reputation that is the entire business model.')}
`,
};

/* ========================================================================== */
const ourWork = {
  path: '/our-work',
  priority: '0.8',
  title: 'Our Work | Champion Roofing Projects in Oklahoma City',
  desc: 'Real Champion Roofing projects across the Oklahoma City metro: designer shingle, clay tile, commercial low slope and drone surveyed re roofs.',
  ogImage: 'real-french-brick-estate',
  crumbs: [{ name: 'Our work', path: '/our-work' }],
  body: `
${pageHero({
    crumbs: [{ name: 'Our work', path: '/our-work' }],
    eb: 'Our work',
    h1: 'Real roofs, photographed on our own jobs',
    lede: 'Every photograph on this page is a Champion Roofing project in the Oklahoma City metro. Residential, commercial, specialty tile, and the parts of the job most companies do not show you.',
    image: 'real-french-brick-estate',
    alt: 'A large French style brick estate in Oklahoma City with a new architectural shingle roof',
  })}

<section class="sec">
  <span class="ghost" aria-hidden="true">Projects</span>
  <div class="wrap-wide">
    ${secHead('The portfolio', 'Recent Champion Roofing projects', 'Grouped by the kind of work rather than dressed up as case studies. What you see is what was on the roof.')}
    ${mosaic([
      { img: 'real-luxury-brick-home', alt: 'A brick and stone home in Oklahoma City with a completed designer shingle roof and a Champion Roofing yard sign', cap: 'Designer shingle roof, brick and stone residence', size: 'big' },
      { img: 'real-tile-complete', alt: 'A completed clay tile roof on a stucco home with arched windows', cap: 'Clay tile roof, completed' },
      { img: 'real-tile-during', alt: 'A crew member setting clay tile at the ridge during installation', cap: 'The same tile roof, mid install' },
      { img: 'real-commercial-drone-office', alt: 'Drone photograph of a commercial office building with a new roof', cap: 'Commercial office building, surveyed by drone', size: 'wide' },
      { img: 'real-commercial-campus', alt: 'A large commercial campus building with a fountain in the foreground', cap: 'Commercial campus roof' },
      { img: 'real-french-brick-estate', alt: 'A French style brick estate with a new architectural shingle roof', cap: 'Estate re roof, north metro' },
      { img: 'real-ranch-new-roof', alt: 'A single storey ranch home with a newly installed dark shingle roof', cap: 'Ranch home, new shingle roof' },
      { img: 'real-timber-pavilion', alt: 'A timber framed pavilion with a newly installed shingle roof', cap: 'Timber pavilion, new construction' },
      { img: 'real-flat-roof-drone', alt: 'Drone view along the coping of a commercial low slope roof', cap: 'Low slope commercial, coping detail' },
      { img: 'real-multifamily-sign', alt: 'A two storey multifamily building with a Champion Roofing yard sign in front', cap: 'Multifamily property re roof' },
      { img: 'real-roofer-ladder-chimney', alt: 'A crew member on a ladder working beside a brick chimney', cap: 'Chimney and flashing work' },
      { img: 'real-property-staging', alt: 'Protective staging and covers set up around a house before roofing work', cap: 'Property protected before tear off' },
    ])}
  </div>
</section>

${split({
    eb: 'The unglamorous part',
    title: 'The photographs most roofing companies leave out',
    body: [
      'Two of the images above are not finished roofs. One shows protective staging and covers set up around a house before the tear off starts. Another shows a materials delivery with the site coned off.',
      'They are here deliberately. Disruption is the thing people actually worry about when they let a roofing crew onto their property, and in Oklahoma the specific worry is usually the garden.',
      'Protecting landscaping is set up as a system before work begins rather than improvised on the day, and a foreman stays on site managing what moves in and out.',
    ],
    list: [
      ['Landscaping covered before tear off.', 'Not after the first load comes down.'],
      ['A foreman on site through the day.', 'Managing access, safety and deliveries.'],
      ['Magnetic sweeps before we leave.', 'Nails off the ground, debris cleared.'],
      ['Materials accounted for.', 'Checked against the specification on delivery.'],
    ],
    image: 'real-landscape-protection',
    alt: 'Protective netting and covers laid over landscaping and planting beds during roofing work',
    reverse: true,
    tint: true,
  })}

${statStrip([
    { count: 2, label: 'DaVinci Project of the Year awards' },
    { pre: '1st', label: 'Brava install in Oklahoma' },
    { count: 5, label: 'Metro neighbourhoods we maintain' },
    { count: 22, label: 'Years of Oklahoma City roofs' },
  ])}

${split({
    eb: 'Specialty',
    title: 'Where the specialty roofs are',
    body: [
      'Champion Roofing has completed and maintains specialty roofing projects in Nichols Hills, Gaillardia, Rose Creek, Cobblestone and Heritage Hills.',
      'Those streets carry a lot of synthetic and natural slate, designer tile and higher end shingle. Products like DaVinci, Brava and Grand Manor appear repeatedly, and knowing what is already on a street matters when you are matching a repair.',
      'The 2023 DaVinci Project of the Year award was a commercial project at Gaillardia Office Park. The 2021 award was the Donald W. Reynolds Complex at Bethany Children\'s Health Center.',
    ],
    list: [
      ['Nichols Hills.', 'Synthetic and natural slate, designer tile.'],
      ['Gaillardia.', 'Including the 2023 Project of the Year at the office park.'],
      ['Rose Creek, Cobblestone and Heritage Hills.', 'Specialty roofs completed and maintained.'],
    ],
    image: 'specialty-tile-hands',
    alt: 'Gloved hands setting a clay tile into place on a roof',
    cta: btn('/specialty-roofing', 'Specialty and tile roofing', 'btn-dark'),
  })}

${areasSection(true)}

${related([
    { path: '/specialty-roofing', icon: 'tile', h: 'Tile and slate', p: 'The work behind both of our awards.' },
    { path: '/commercial', icon: 'building', h: 'Commercial roofing', p: 'Offices, retail, industrial and multifamily.' },
    { path: '/residential-roofing', icon: 'house', h: 'Residential roofing', p: 'Everything we do on houses.' },
    { path: '/about', icon: 'users', h: 'About us', p: 'Who Champion Roofing actually is.' },
  ])}

${ctaBand('Want your roof to look like these?', 'Book a free assessment and we will tell you what it actually needs.', 'real-luxury-brick-home')}
`,
};

/* ========================================================================== */
const serviceAreas = {
  path: '/service-areas',
  priority: '0.8',
  title: 'Service Areas | Oklahoma City Metro Roofing | Champion',
  desc: 'Champion Roofing serves Oklahoma City, Edmond, Norman, Moore, Midwest City, Del City, Yukon, Mustang and Bethany from North Council Road in northwest OKC.',
  ogImage: 'res-luxury-aerial',
  crumbs: [{ name: 'Service areas', path: '/service-areas' }],
  faqs: [
    {
      q: 'Which cities does Champion Roofing serve?',
      a: `Oklahoma City, ${BIZ.cities.filter((c) => c.name !== 'Oklahoma City').map((c) => c.name).join(', ').replace(/, ([^,]*)$/, ' and $1')}.\n\nWe operate from 7608 N Council Rd in northwest Oklahoma City, so the whole metro is within a reasonable working radius.`,
    },
    {
      q: 'What if I am just outside your service area?',
      a: 'Call the office anyway. We would rather tell you honestly that we are not the right fit than have you guessing, and if we cannot help we will usually be able to point you toward someone who can.\n\nWhat we will not do is stretch a crew somewhere we cannot properly look after you afterwards, because the warranty means nothing if we cannot get back to you.',
    },
    {
      q: 'Do you charge more to travel across the metro?',
      a: 'No. The cities listed here are all within our normal working area and are priced the same way.\n\nIf a property is far enough out that travel genuinely changes the job, we will tell you that up front rather than adding it later. The quoted price is the price.',
    },
    {
      q: 'Do you have separate pages for each city?',
      a: 'Deliberately not. Thin pages that swap one city name for another are a well known search engine tactic and they are of no use to you as a homeowner.\n\nThis single page covers where we work honestly. If you want detail about a service, the service pages have it.',
    },
  ],
  body: `
${pageHero({
    crumbs: [{ name: 'Service areas', path: '/service-areas' }],
    eb: 'Service areas',
    h1: 'Where Champion Roofing works',
    lede: 'Nine cities across the Oklahoma City metro, worked from a real address on North Council Road. If we cannot look after you properly afterwards, we will say so before we start.',
    image: 'res-luxury-aerial',
    alt: 'Aerial view of a large Oklahoma City home with a complex roof',
  })}

${areasSection()}

<section class="sec">
  <span class="ghost" aria-hidden="true">Metro</span>
  <div class="wrap">
    ${secHead('The list', 'Nine cities, one metro', 'We are based in northwest Oklahoma City, which puts the whole metro within a working radius rather than a special trip.')}
    <div class="grid g-3">
      ${BIZ.cities.map((c, i) => `<div class="card" data-reveal data-reveal-delay="${i % 3}" style="padding:1.8rem">
        <span class="ridge-chip">${icon(c.name === BIZ.city ? 'house' : 'pin')}</span>
        <h3 style="font-size:var(--t-h4);margin-block:1rem .4rem">${c.name}, ${BIZ.state}</h3>
        <p style="font-size:.94rem;color:var(--body-dim)">${c.note}</p>
      </div>`).join('')}
    </div>
  </div>
</section>

${honestBlock(
    'Why there is no page here for every city',
    [
      'A common tactic in local search is to create dozens of near identical pages, each swapping in a different city name, in the hope of ranking for all of them. You have probably read a few without realising it.',
      'We are not doing that. It produces pages that are useless to read, and search engines have been treating them as what they are for a long time now. This single honest page covers where we work.',
    ],
    [
      ['Nine cities, listed plainly.', 'Rather than nine near identical pages.'],
      ['One real address.', `${BIZ.street}, ${BIZ.city}, ${BIZ.state} ${BIZ.zip}.`],
      ['Same pricing across the metro.', 'No travel surcharge appearing later.'],
      ['An honest answer if you are outside it.', 'Including a pointer somewhere else when we are not the right fit.'],
    ],
  )}

${infoGrid('What we bring', 'The same service in every one of them', 'Location does not change the process, the crew or the warranty.', [
    { icon: 'drone', h: 'Free drone assessment', p: 'Three laps around the roof, findings talked through on site, and a written report by email. No charge and no obligation, in every city on this list.' },
    { icon: 'shield', h: 'The same warranty', p: 'Two year written workmanship warranty on every roof we install, with upgraded transferable manufacturer options for qualifying customers.' },
    { icon: 'users', h: 'The same crews', p: 'A foreman on site through the day, landscaping protected before tear off, magnetic sweeps before we leave.' },
    { icon: 'doc', h: 'The same insurance support', p: 'We document the damage, meet your adjuster at the property, and work the scope through with your carrier.' },
    { icon: 'tile', h: 'The same specialty capability', p: 'Tile, slate, shake and synthetics, which most contractors in this market will not quote anywhere.' },
    { icon: 'building', h: 'Commercial too', p: 'Offices, retail, industrial and multifamily buildings across the metro, not only residential work.' },
  ], { tint: true })}

${faqSection('Area FAQs', 'Questions about where we work', 'Including why you will not find a page here for every suburb.', [
    {
      q: 'Which cities does Champion Roofing serve?',
      a: `Oklahoma City, ${BIZ.cities.filter((c) => c.name !== 'Oklahoma City').map((c) => c.name).join(', ').replace(/, ([^,]*)$/, ' and $1')}.\n\nWe operate from 7608 N Council Rd in northwest Oklahoma City, so the whole metro is within a reasonable working radius.`,
    },
    {
      q: 'What if I am just outside your service area?',
      a: 'Call the office anyway. We would rather tell you honestly that we are not the right fit than have you guessing, and if we cannot help we will usually be able to point you toward someone who can.\n\nWhat we will not do is stretch a crew somewhere we cannot properly look after you afterwards, because the warranty means nothing if we cannot get back to you.',
    },
    {
      q: 'Do you charge more to travel across the metro?',
      a: 'No. The cities listed here are all within our normal working area and are priced the same way.\n\nIf a property is far enough out that travel genuinely changes the job, we will tell you that up front rather than adding it later. The quoted price is the price.',
    },
    {
      q: 'Do you have separate pages for each city?',
      a: 'Deliberately not. Thin pages that swap one city name for another are a well known search engine tactic and they are of no use to you as a homeowner.\n\nThis single page covers where we work honestly. If you want detail about a service, the service pages have it.',
    },
  ])}

${related([
    { path: '/residential-roofing', icon: 'house', h: 'Residential roofing', p: 'Everything we do on houses.' },
    { path: '/commercial', icon: 'building', h: 'Commercial roofing', p: 'Buildings across the metro.' },
    { path: '/our-work', icon: 'award', h: 'Our work', p: 'Projects around Oklahoma City.' },
    { path: '/contact', icon: 'phone', h: 'Contact', p: 'Speak to the office.' },
  ])}

${ctaBand('Book an assessment anywhere in the metro', 'Free, no obligation, and the same crews and warranty in every city on the list.')}
`,
};

/* ========================================================================== */
const faq = {
  path: '/faq',
  priority: '0.7',
  title: 'Roofing FAQ | Champion Roofing Oklahoma City',
  desc: 'Answers about roofing costs, insurance claims, warranties and timelines from Champion Roofing in Oklahoma City, including ones that do not sell anything.',
  ogImage: 'res-shingle-texture',
  crumbs: [{ name: 'FAQ', path: '/faq' }],
  faqs: [
    {
      q: 'How much will my roof cost?',
      a: 'We do not quote roofs over the phone, because the honest answer depends on the size and complexity of the roof, the material, the condition of the decking underneath, and whether insurance is involved.\n\nWhat we will commit to is that the assessment costs nothing, and the price we give you afterwards is the price you pay. We do not use change orders as a profit centre.',
    },
    {
      q: 'Is the assessment really free?',
      a: 'Yes. No cost, no obligation, and no charge if the answer is that your roof is fine.\n\nAn inspector comes out, flies the roof with a drone in three passes, talks the findings through with you on site, and emails you a written report either way.',
    },
    {
      q: 'Do you offer emergency or 24 hour service?',
      a: 'No, and we would rather say so plainly than imply otherwise. Champion Roofing does not run a 24 hour emergency dispatch.\n\nOur office hours are Monday to Friday, 9am to 5pm. Calls received after hours go to voicemail. The contact form on this site is open around the clock and the office picks it up the next working day.',
    },
    {
      q: 'What warranty do I get?',
      a: 'A two year written workmanship warranty from Champion Roofing on every roof we install. That covers anything installed improperly, or a detail we missed that causes a leak.\n\nQualifying customers can additionally purchase higher tier GAF or Malarkey manufacturer warranties, available in 25 and 30 year options, which include extended manufacturer backed workmanship coverage and are transferable if you sell the property.',
    },
    {
      q: 'How do I make a claim under the workmanship warranty?',
      a: 'Call the office. If something we installed is causing a leak, we come out and deal with it.\n\nIn practice we have honoured problems past the warranty period when the fault was ours. There is a roof where the customer called five years later, after the warranty had expired, and we took care of it because it was our fault.',
    },
    {
      q: 'Will you help with my insurance claim?',
      a: 'Yes, on the roofing side. We document the damage, meet your adjuster at the property, reconcile the approved scope with your carrier, and handle the roofing paperwork. Where a replacement is required we document code related decking conditions for supplementation.\n\nWhat we cannot do is determine the outcome. Your carrier decides. Be careful of any roofer who guarantees an approval.',
    },
    {
      q: 'Do you use subcontractors?',
      a: 'We put our own foremen on site, one on residential work and usually two on commercial. Their job is to manage the work, verify materials against the specification, keep the site safe and supervise the cleanup.\n\nCompany leadership also visits job sites to check workmanship and cleanup, because quality that is not inspected does not stay quality.',
    },
    {
      q: 'What happens to my garden while you are working?',
      a: 'It gets protected before the tear off starts. Landscaping disruption is the thing people in Oklahoma actually worry about with roofing work, and we set up a system to cover and protect planting rather than improvising it on the day.\n\nBefore we leave, the ground is swept with magnets for nails, debris is cleared, and materials are accounted for.',
    },
    {
      q: 'What happens if it rains during my job?',
      a: 'We delay or stop. Roofing work gets paused when rain, snow or unsafe heat could endanger the crew or expose your property.\n\nOn very hot days that sometimes means starting later in the afternoon and working later, rather than not working at all. It moves the schedule, and we would rather move a schedule than open a roof ahead of a storm.',
    },
    {
      q: 'Do you install siding, decks or patios?',
      a: 'This site covers roofing, gutters, window replacement and window screens, which are the services we can currently document. Siding, decks and patios are not listed here. If you need something outside what is on the site, call the office and ask directly rather than assuming from a web page either way.',
    },
    {
      q: 'How do I know you will still be here in five years?',
      a: 'It is a fair question given how many roofing companies appear after a storm season and disappear before the next one.\n\nChampion Roofing LLC has operated from 7608 N Council Rd in Oklahoma City since 2004, holds Oklahoma roofing registration 80003787, and is BBB accredited with an A plus rating. Those are all things you can verify independently rather than take our word for.',
    },
    {
      q: 'Why should I choose Champion Roofing over a cheaper quote?',
      a: 'Sometimes you should not, and we will occasionally tell you that. But a cheap quote in this trade frequently becomes an expensive job through change orders, and a low price on a roof usually reflects what is being left out underneath rather than efficiency.\n\nOur position is that the price we give you is the price, that we will not install a product we are not willing to warranty, and that the company will still be here when you need the warranty. Judge that against what you are comparing it to.',
    },
  ],
  body: `
${pageHero({
    crumbs: [{ name: 'FAQ', path: '/faq' }],
    eb: 'FAQ',
    h1: 'Questions people ask before they call',
    lede: 'Cross cutting answers about cost, insurance, warranties and what actually happens on site. Service specific questions live on the service pages.',
    image: 'res-shingle-texture',
    alt: 'Close view of architectural shingle texture on a residential roof',
  })}

${faqSection(
    'Everything else',
    'Roofing questions, answered straight',
    'Including the ones that do nothing to help us sell you a roof.',
    [
      { q: 'How much will my roof cost?', a: 'We do not quote roofs over the phone, because the honest answer depends on the size and complexity of the roof, the material, the condition of the decking underneath, and whether insurance is involved.\n\nWhat we will commit to is that the assessment costs nothing, and the price we give you afterwards is the price you pay. We do not use change orders as a profit centre.' },
      { q: 'Is the assessment really free?', a: 'Yes. No cost, no obligation, and no charge if the answer is that your roof is fine.\n\nAn inspector comes out, flies the roof with a drone in three passes, talks the findings through with you on site, and emails you a written report either way.' },
      { q: 'Do you offer emergency or 24 hour service?', a: 'No, and we would rather say so plainly than imply otherwise. Champion Roofing does not run a 24 hour emergency dispatch.\n\nOur office hours are Monday to Friday, 9am to 5pm. Calls received after hours go to voicemail. The contact form on this site is open around the clock and the office picks it up the next working day.' },
      { q: 'What warranty do I get?', a: 'A two year written workmanship warranty from Champion Roofing on every roof we install. That covers anything installed improperly, or a detail we missed that causes a leak.\n\nQualifying customers can additionally purchase higher tier GAF or Malarkey manufacturer warranties, available in 25 and 30 year options, which include extended manufacturer backed workmanship coverage and are transferable if you sell the property.' },
      { q: 'How do I make a claim under the workmanship warranty?', a: 'Call the office. If something we installed is causing a leak, we come out and deal with it.\n\nIn practice we have honoured problems past the warranty period when the fault was ours. There is a roof where the customer called five years later, after the warranty had expired, and we took care of it because it was our fault.' },
      { q: 'Will you help with my insurance claim?', a: 'Yes, on the roofing side. We document the damage, meet your adjuster at the property, reconcile the approved scope with your carrier, and handle the roofing paperwork. Where a replacement is required we document code related decking conditions for supplementation.\n\nWhat we cannot do is determine the outcome. Your carrier decides. Be careful of any roofer who guarantees an approval.' },
      { q: 'Do you use subcontractors?', a: 'We put our own foremen on site, one on residential work and usually two on commercial. Their job is to manage the work, verify materials against the specification, keep the site safe and supervise the cleanup.\n\nCompany leadership also visits job sites to check workmanship and cleanup, because quality that is not inspected does not stay quality.' },
      { q: 'What happens to my garden while you are working?', a: 'It gets protected before the tear off starts. Landscaping disruption is the thing people in Oklahoma actually worry about with roofing work, and we set up a system to cover and protect planting rather than improvising it on the day.\n\nBefore we leave, the ground is swept with magnets for nails, debris is cleared, and materials are accounted for.' },
      { q: 'What happens if it rains during my job?', a: 'We delay or stop. Roofing work gets paused when rain, snow or unsafe heat could endanger the crew or expose your property.\n\nOn very hot days that sometimes means starting later in the afternoon and working later, rather than not working at all. It moves the schedule, and we would rather move a schedule than open a roof ahead of a storm.' },
      { q: 'Do you install siding, decks or patios?', a: 'This site covers roofing, gutters, window replacement and window screens, which are the services we can currently document. Siding, decks and patios are not listed here. If you need something outside what is on the site, call the office and ask directly rather than assuming from a web page either way.' },
      { q: 'How do I know you will still be here in five years?', a: 'It is a fair question given how many roofing companies appear after a storm season and disappear before the next one.\n\nChampion Roofing LLC has operated from 7608 N Council Rd in Oklahoma City since 2004, holds Oklahoma roofing registration 80003787, and is BBB accredited with an A plus rating. Those are all things you can verify independently rather than take our word for.' },
      { q: 'Why should I choose Champion Roofing over a cheaper quote?', a: 'Sometimes you should not, and we will occasionally tell you that. But a cheap quote in this trade frequently becomes an expensive job through change orders, and a low price on a roof usually reflects what is being left out underneath rather than efficiency.\n\nOur position is that the price we give you is the price, that we will not install a product we are not willing to warranty, and that the company will still be here when you need the warranty. Judge that against what you are comparing it to.' },
    ],
  )}

${infoGrid('Service specific', 'Questions about a particular service', 'Each service page carries its own detailed FAQ section.', [
    { icon: 'wrench', h: 'Roof repair questions', p: 'Cost, leak diagnosis, whether insurance covers it, and when a repair is the wrong answer. On the <a href="/roof-repair" style="color:var(--red-deep);text-decoration:underline">roof repair page</a>.' },
    { icon: 'hammer', h: 'Replacement questions', p: 'Timelines, decking, colour selection and warranties. On the <a href="/roof-replacement" style="color:var(--red-deep);text-decoration:underline">roof replacement page</a>.' },
    { icon: 'drone', h: 'Inspection questions', p: 'What the drone looks at and when it is not enough. On the <a href="/roof-inspection" style="color:var(--red-deep);text-decoration:underline">roof inspection page</a>.' },
    { icon: 'storm', h: 'Storm and hail questions', p: 'Claims, adjusters and what hail actually does. On the <a href="/storm-damage-roof-repair" style="color:var(--red-deep);text-decoration:underline">storm damage page</a>.' },
    { icon: 'building', h: 'Commercial questions', p: 'Systems, tenants, coordination and maintenance. On the <a href="/commercial" style="color:var(--red-deep);text-decoration:underline">commercial roofing page</a>.' },
    { icon: 'gutter', h: 'Gutter questions', p: 'Seamless versus sectional, and whether leaf protection is worth it. On the <a href="/gutters" style="color:var(--red-deep);text-decoration:underline">gutters page</a>.' },
  ])}

${ctaBand('Still have a question?', 'Call the office and ask. Nobody will put you through a sales script.', 'res-sunset-shingle')}
`,
};

/* ========================================================================== */
const contact = {
  path: '/contact',
  priority: '0.8',
  title: 'Contact Champion Roofing | Oklahoma City Roofing Contractor',
  desc: `Contact Champion Roofing in Oklahoma City. Call ${BIZ.phone} or request a free, no obligation roof assessment. 7608 N Council Rd, Oklahoma City.`,
  ogImage: 'real-ranch-new-roof',
  crumbs: [{ name: 'Contact', path: '/contact' }],
  body: `
${pageHero({
    crumbs: [{ name: 'Contact', path: '/contact' }],
    eb: 'Contact',
    h1: 'Talk to Champion Roofing',
    lede: 'Call the office, send the form, or email. Someone will get back to you to set a time for a free assessment. There is no sales script waiting at the other end.',
    image: 'real-ranch-new-roof',
    alt: 'A single storey ranch home in Oklahoma City with a newly installed shingle roof',
    ctas: false,
  })}

<section class="sec">
  <div class="wrap">
    <div class="split" style="align-items:start;grid-template-columns:1.25fr .75fr">
      <div class="lead-card" data-reveal>
        <div class="lead-card-head">
          <div>
            ${eyebrow('Free, no obligation')}
            <h2 style="font-size:var(--t-h3)">Request a roof assessment</h2>
            <p style="font-size:.92rem;color:var(--body-dim);margin-top:.35rem">Everything marked with a red asterisk is needed so we can get back to you. The rest just helps us turn up prepared.</p>
          </div>
        </div>
        <form data-lead action="https://formsubmit.co/${BIZ.email}" method="POST">
          <input type="hidden" name="_subject" value="New roof assessment request, contact page">
          <input type="hidden" name="_template" value="table">
          <input type="hidden" name="_captcha" value="false">
          <input class="hp" type="text" name="_honey" tabindex="-1" autocomplete="off" aria-hidden="true">
          <div class="field-grid">
            <div class="field wide">
              <label for="c-name">Name <span class="req">*</span></label>
              <input id="c-name" name="Name" type="text" required autocomplete="name" placeholder="Your name">
              <span class="err">Please tell us your name.</span>
            </div>
            <div class="field wide">
              <label for="c-phone">Phone <span class="req">*</span></label>
              <input id="c-phone" name="Phone" type="tel" required autocomplete="tel" placeholder="(405) 000-0000">
              <span class="err">A number we can reach you on.</span>
            </div>
            <div class="field wide">
              <label for="c-email">Email <span class="req">*</span></label>
              <input id="c-email" name="Email" type="email" required autocomplete="email" placeholder="you@example.com">
              <span class="err">Please check the email address.</span>
            </div>
            <div class="field wide">
              <label for="c-service">What do you need?</label>
              <select id="c-service" name="Service">
                <option>Roof inspection or assessment</option>
                <option>Roof repair</option>
                <option>Roof replacement</option>
                <option>Storm or hail damage</option>
                <option>Metal roofing</option>
                <option>Specialty or tile roofing</option>
                <option>Commercial roofing</option>
                <option>Seamless gutters</option>
                <option>Window screen replacement</option>
                <option>Something else</option>
              </select>
            </div>
            <div class="field full">
              <label for="c-address">Property address</label>
              <input id="c-address" name="Property" type="text" autocomplete="street-address" placeholder="Street address, or just the city">
            </div>
            <div class="field full">
              <label for="c-msg">Tell us what is going on</label>
              <textarea id="c-msg" name="Details" placeholder="A stain on the ceiling, shingles in the yard after the storm, an adjuster coming Thursday, or a building you manage that needs surveying."></textarea>
            </div>
          </div>
          <div class="form-foot">
            <small>We use your details to respond to this request and for nothing else. See our <a href="/privacy" style="color:var(--red-deep);text-decoration:underline">privacy policy</a>.</small>
            <button class="btn btn-lg" type="submit">Send request${ICONS.arrow}</button>
          </div>
        </form>
      </div>

      <div class="contact-panel" data-reveal data-reveal-delay="1">
        <div>
          ${eyebrow('The office')}
          <a class="contact-phone" href="tel:${BIZ.phoneRaw}" style="margin-top:.8rem"><small>Call us</small><b>${BIZ.phone}</b></a>
        </div>
        <span class="status-pill" data-status data-open-hour="9" data-close-hour="17" data-open="true">
          <i class="status-dot" aria-hidden="true"></i><span data-status-text>Mon to Fri, 9am to 5pm</span>
        </span>
        <div class="contact-rows">
          <div class="contact-row">${ICONS.mail}<span><b>Email</b><a href="mailto:${BIZ.email}" style="text-decoration:underline">${BIZ.email}</a></span></div>
          <div class="contact-row">${ICONS.pin}<span><b>Address</b><a href="${BIZ.mapsUrl}" rel="noopener" target="_blank" style="text-decoration:underline">${BIZ.street}<br>${BIZ.city}, ${BIZ.state} ${BIZ.zip}</a></span></div>
          <div class="contact-row">${ICONS.clock}<span><b>Hours</b>Monday to Friday, 9am to 5pm.<br>Calls after hours go to voicemail. This form is open all the time.</span></div>
          <div class="contact-row">${ICONS.shield}<span><b>Oklahoma registration</b>${BIZ.license}</span></div>
        </div>
        <div class="trust-pills">
          <span class="trust-pill">GAF Master Elite</span>
          <span class="trust-pill">DaVinci Masterpiece</span>
          <span class="trust-pill">BBB A+ accredited</span>
          <span class="trust-pill">${BIZ.rating} from ${BIZ.reviewCount} reviews</span>
        </div>
        <div class="btn-row">
          <a class="btn" href="tel:${BIZ.phoneRaw}">${ICONS.phone}Call now</a>
        </div>
      </div>
    </div>
  </div>
</section>

${steps('What happens next', 'After you hit send', 'Four steps and no mystery about who does what.', [
    { h: 'The office calls you back', p: 'To confirm the details and set a time that works. During office hours that is usually the same day.' },
    { h: 'An inspector comes out', p: 'The drone flies three laps around the roof. Ten to fifteen minutes on site, and they talk you through what they found.' },
    { h: 'You get it in writing', p: 'A report by email covering what was found, whether or not there is anything to do about it.' },
    { h: 'You decide', p: 'No obligation, no follow up pressure. If your roof is fine we will tell you it is fine and you owe us nothing.' },
  ], 'tint')}

${areasSection(true)}

${ctaBand('Prefer to just call?', `The office is open Monday to Friday, 9am to 5pm Central. Call ${BIZ.phone}.`, 'real-roofer-ladder-chimney')}
`,
};

/* ========================================================================== */
const privacy = {
  path: '/privacy',
  priority: '0.2',
  title: 'Privacy Policy | Champion Roofing',
  desc: 'How Champion Roofing collects, uses and protects the information you send through this website.',
  crumbs: [{ name: 'Privacy policy', path: '/privacy' }],
  body: `
${pageHero({
    crumbs: [{ name: 'Privacy policy', path: '/privacy' }],
    eb: 'Legal',
    h1: 'Privacy policy',
    lede: 'What we collect through this website, why, and what we do with it.',
    image: 'res-gable-sky',
    alt: 'A residential roof gable against a clear blue sky',
    ctas: false,
  })}

<section class="sec">
  <div class="wrap-narrow prose">
    <p><strong>Last updated:</strong> this policy applies to championroofingok.com, operated by ${BIZ.legalName}, ${BIZ.street}, ${BIZ.city}, ${BIZ.state} ${BIZ.zip}.</p>

    <h2>What we collect</h2>
    <p>When you submit a form on this site, we collect the information you choose to put into it: your name, phone number, email address, the service you are interested in, your property address or city, and whatever details you write in the message field.</p>
    <p>We do not ask for and do not want financial information, social security numbers, or any other sensitive identifiers through this website.</p>

    <h2>Why we collect it</h2>
    <p>To respond to your request. That is the whole purpose. We use your contact details to get back to you about a roof assessment, a quote, or whatever else you contacted us about, and we use the property details so the inspector arrives at the right place knowing what they are looking at.</p>

    <h2>What we do not do with it</h2>
    <ul>
      <li>We do not sell your information.</li>
      <li>We do not rent or trade it to third parties for their marketing.</li>
      <li>We do not add you to unrelated mailing lists because you asked about a roof.</li>
    </ul>

    <h2>Who else sees it</h2>
    <p>Form submissions on this site are delivered by a third party form handling service, which processes the message in order to email it to us. Our own staff see it in order to respond to you. Where your enquiry involves an insurance claim, relevant details may be shared with your carrier or adjuster as part of handling that claim, with your knowledge.</p>

    <h2>Cookies and analytics</h2>
    <p>This site may use analytics to understand which pages people find useful. That data is aggregated and is not used to identify you personally.</p>

    <h2>Text messages</h2>
    <p>If you opt in to text messages from us, that is covered separately. See our <a href="/sms-terms">SMS terms</a> and <a href="/sms-privacy-policy">SMS privacy policy</a>.</p>

    <h2>Your choices</h2>
    <p>You can ask us to delete the information you have sent us, or to stop contacting you, at any time. Email <a href="mailto:${BIZ.email}">${BIZ.email}</a> or call <a href="tel:${BIZ.phoneRaw}">${BIZ.phone}</a> and we will take care of it.</p>

    <h2>Changes</h2>
    <p>If this policy changes we will update this page. Material changes will be reflected in the date at the top.</p>

    <h2>Contact</h2>
    <p>${BIZ.legalName}<br>${BIZ.street}<br>${BIZ.city}, ${BIZ.state} ${BIZ.zip}<br><a href="tel:${BIZ.phoneRaw}">${BIZ.phone}</a><br><a href="mailto:${BIZ.email}">${BIZ.email}</a></p>
  </div>
</section>
`,
};

/* ========================================================================== */
const smsPrivacy = {
  path: '/sms-privacy-policy',
  noindex: true,
  title: 'SMS Privacy Policy | Champion Roofing',
  desc: 'How Champion Roofing handles information related to text message communications.',
  crumbs: [{ name: 'SMS privacy policy', path: '/sms-privacy-policy' }],
  body: `
${pageHero({
    crumbs: [{ name: 'SMS privacy policy', path: '/sms-privacy-policy' }],
    eb: 'Legal',
    h1: 'SMS privacy policy',
    lede: 'How we handle phone numbers and information connected to text messaging.',
    image: 'res-gable-sky',
    alt: 'A residential roof gable against a clear blue sky',
    ctas: false,
  })}
<section class="sec">
  <div class="wrap-narrow prose">
    <p>This policy covers text message communications from ${BIZ.legalName}.</p>
    <h2>Consent</h2>
    <p>We send text messages only to people who have given consent to receive them. Consent to receive texts is never a condition of purchasing any service from us.</p>
    <h2>What we use your number for</h2>
    <p>To communicate with you about your enquiry, your appointment or your job. We do not sell or share mobile numbers or SMS consent with third parties for their marketing purposes.</p>
    <h2>Opting out</h2>
    <p>Reply STOP to any message to opt out. Reply HELP for assistance, or contact us on <a href="tel:${BIZ.phoneRaw}">${BIZ.phone}</a>.</p>
    <h2>Rates</h2>
    <p>Message and data rates may apply, depending on your carrier and plan.</p>
    <h2>Contact</h2>
    <p>${BIZ.legalName}, ${BIZ.street}, ${BIZ.city}, ${BIZ.state} ${BIZ.zip}. <a href="mailto:${BIZ.email}">${BIZ.email}</a></p>
    <p>See also our general <a href="/privacy">privacy policy</a> and our <a href="/sms-terms">SMS terms</a>.</p>
  </div>
</section>
`,
};

const smsTerms = {
  path: '/sms-terms',
  noindex: true,
  title: 'SMS Terms | Champion Roofing',
  desc: 'Terms covering text message communications from Champion Roofing.',
  crumbs: [{ name: 'SMS terms', path: '/sms-terms' }],
  body: `
${pageHero({
    crumbs: [{ name: 'SMS terms', path: '/sms-terms' }],
    eb: 'Legal',
    h1: 'SMS terms',
    lede: 'The terms that apply if you opt in to text messages from Champion Roofing.',
    image: 'res-gable-sky',
    alt: 'A residential roof gable against a clear blue sky',
    ctas: false,
  })}
<section class="sec">
  <div class="wrap-narrow prose">
    <h2>Programme description</h2>
    <p>${BIZ.legalName} may send text messages about your enquiry, your scheduled appointment, or the progress of work on your property.</p>
    <h2>Consent</h2>
    <p>By providing your mobile number and opting in, you consent to receive these messages. Consent is not a condition of purchase.</p>
    <h2>Frequency</h2>
    <p>Message frequency varies according to your enquiry and any job in progress.</p>
    <h2>Cost</h2>
    <p>Message and data rates may apply.</p>
    <h2>Opting out</h2>
    <p>Reply STOP at any time to stop receiving messages. Reply HELP for help, or call <a href="tel:${BIZ.phoneRaw}">${BIZ.phone}</a>.</p>
    <h2>Carriers</h2>
    <p>Carriers are not liable for delayed or undelivered messages.</p>
    <h2>Privacy</h2>
    <p>See our <a href="/sms-privacy-policy">SMS privacy policy</a> and our general <a href="/privacy">privacy policy</a>.</p>
  </div>
</section>
`,
};

const subscribe = {
  path: '/subscribe',
  noindex: true,
  title: 'Subscribe | Champion Roofing',
  desc: 'Opt in to occasional updates from Champion Roofing in Oklahoma City about seasonal roof maintenance and storm preparation. No sales pressure, unsubscribe at any time.',
  crumbs: [{ name: 'Subscribe', path: '/subscribe' }],
  body: `
${pageHero({
    crumbs: [{ name: 'Subscribe', path: '/subscribe' }],
    eb: 'Updates',
    h1: 'Stay in touch with Champion Roofing',
    lede: 'Occasional updates about seasonal roof maintenance and storm preparation. No sales pressure, and you can stop at any time.',
    image: 'res-sunset-shingle',
    alt: 'A shingle roof at sunset',
    ctas: false,
  })}
<section class="sec">
  <div class="wrap-narrow">
    <div class="lead-card">
      <div class="lead-card-head"><div>${eyebrow('Opt in')}<h2 style="font-size:var(--t-h3)">Sign up</h2></div></div>
      <form data-lead action="https://formsubmit.co/${BIZ.email}" method="POST">
        <input type="hidden" name="_subject" value="New subscriber, championroofingok.com">
        <input type="hidden" name="_template" value="table">
        <input type="hidden" name="_captcha" value="false">
        <input class="hp" type="text" name="_honey" tabindex="-1" autocomplete="off" aria-hidden="true">
        <div class="field-grid">
          <div class="field wide">
            <label for="s-name">Name <span class="req">*</span></label>
            <input id="s-name" name="Name" type="text" required autocomplete="name">
            <span class="err">Please tell us your name.</span>
          </div>
          <div class="field wide">
            <label for="s-email">Email <span class="req">*</span></label>
            <input id="s-email" name="Email" type="email" required autocomplete="email">
            <span class="err">Please check the email address.</span>
          </div>
        </div>
        <div class="form-foot">
          <small>You can unsubscribe at any time. See our <a href="/privacy" style="color:var(--red-deep);text-decoration:underline">privacy policy</a>.</small>
          <button class="btn" type="submit">Subscribe${ICONS.arrow}</button>
        </div>
      </form>
    </div>
  </div>
</section>
`,
};

/* ========================================================================== */
const notFound = {
  path: '/404',
  noindex: true,
  title: 'Page not found | Champion Roofing',
  desc: 'That page does not exist. Here is where to go instead.',
  body: `
${errorPage("404", "That page is not up here", "The link may be old, or the page moved when we rebuilt the site. Nothing is lost. Everything below is where things actually live now.", [
    {"path":"/","icon":"house","h":"Home","p":"Start again from the top."},
    {"path":"/residential-roofing","icon":"ridge","h":"Residential roofing","p":"Repair, replacement, inspection and more."},
    {"path":"/commercial","icon":"building","h":"Commercial roofing","p":"Low slope, coatings and metal."},
    {"path":"/contact","icon":"phone","h":"Contact","p":"Book a free assessment."},
  ])}
`,
};

/* ========================================================================== */
// Served for the retired solar article. The brief requires 410, not a redirect
// to the homepage. It says plainly the article was removed and offers the two
// living articles closest to the old topic.
const gone = {
  path: '/410',
  noindex: true,
  title: 'This article has been removed | Champion Roofing',
  desc: 'This article is no longer published. Here are the related articles that are.',
  body: `
${errorPage("410", "This article has been removed", "The solar roofing article that used to live here is no longer published, because it does not describe a service Champion Roofing currently offers. It was retired rather than redirected.", [
    {"path":"/blog/choosing-the-right-roofing-material-for-your-home","icon":"tile","h":"Choosing the right roofing material","p":"The closest living article to the old topic."},
    {"path":"/blog/comparing-the-benefits-of-metal-roofing-vs-asphalt-shingles","icon":"metal","h":"Metal roofing vs asphalt shingles","p":"A material comparison that is still current."},
    {"path":"/blog","icon":"doc","h":"All articles","p":"Everything we currently publish."},
    {"path":"/contact","icon":"phone","h":"Contact","p":"Ask the office directly."},
  ])}
`,
};

export default [about, ourWork, serviceAreas, faq, contact, privacy, smsPrivacy, smsTerms, subscribe, notFound, gone];
