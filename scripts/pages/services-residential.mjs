import { BIZ } from '../data.mjs';
import { ICONS, btn, img, eyebrow, secHead, checks } from '../lib.mjs';
import {
  pageReviews,
  stickyFeature,
  editorialStack,
  roofBuildUp,
  pageHero, statStrip, steps, faqSection, serviceGrid, split,
  infoGrid, detailAccordion, honestBlock, related, asideCard, ctaBand,
materialExplorer, compareSection, areasSection, ticker,
} from '../sections.mjs';

const CITIES = BIZ.cities.map((c) => c.name).join(', ').replace(/, ([^,]*)$/, ' and $1');

const WARRANTY_ASIDE = asideCard('At a glance', [
  { icon: 'clock', h: 'Assessment', p: 'Free, no obligation, usually inside a few days.' },
  { icon: 'drone', h: 'Inspection', p: 'Drone flown in three passes, then a report by email.' },
  { icon: 'shield', h: 'Workmanship warranty', p: 'Two years in writing on every roof we install.' },
  { icon: 'doc', h: 'Insurance', p: 'We meet your adjuster and handle the roofing paperwork.' },
  { icon: 'pin', h: 'Where', p: CITIES },
]);

/* ========================================================================== */
const residentialRoofing = {
  path: '/residential-roofing',
  priority: '0.9',
  title: 'Residential Roofing Oklahoma City | Champion Roofing',
  desc: 'Residential roofing in Oklahoma City from a GAF Master Elite contractor. Shingle, metal, tile and slate systems, repairs, replacements and inspections.',
  ogImage: 'real-luxury-brick-home',
  crumbs: [{ name: 'Residential roofing', path: '/residential-roofing' }],
  service: {
    name: 'Residential roofing',
    type: 'Residential roofing contractor',
    offers: ['Roof repair', 'Roof replacement', 'Roof inspection', 'Storm damage roof repair', 'Metal roofing', 'Tile and specialty roofing', 'Seamless gutters'],
  },
  faqs: [
    {
      q: 'How do I know whether my roof needs repair or replacement?',
      a: 'It comes down to how much of the roof is affected and how old the system is. Damage confined to one slope, a handful of shingles, or a single flashing detail is usually a repair. Widespread granular loss, hail bruising across multiple elevations, or a roof already near the end of its service life is usually a replacement.\n\nThe honest answer is that you should not have to guess. Our assessment is free, the drone flies three laps around the roof, and you get the findings in writing by email whichever way it goes.',
    },
    {
      q: 'Do you work on both expensive homes and modest ones?',
      a: 'Yes, and to the same standard. To quote the owner directly: we cater to our customers no matter what kind of money they have, we treat them all the same.\n\nWe install designer slate and synthetic tile on the higher end streets around the metro, and we also do small repairs on ordinary houses. Same crews, same warranty, same standard.',
    },
    {
      q: 'What roofing materials do you install on homes?',
      a: 'Asphalt shingles including architectural and designer profiles, metal in standing seam, metal shingle and corrugated systems, clay and concrete tile, composite and synthetic tile, natural and synthetic slate, and wood and synthetic shake.\n\nWe are a GAF Master Elite residential contractor and a DaVinci Masterpiece contractor, and we were the first company in Oklahoma to install Brava synthetic roofing.',
    },
    {
      q: 'How long does a residential roof replacement take?',
      a: 'Most straightforward shingle replacements are a short job measured in days rather than weeks. Tile, slate and complex steep slope roofs take considerably longer because the detailing cannot be rushed.\n\nWeather moves the schedule. We stop or delay work when rain, snow or unsafe heat would put the crew or your property at risk, so a forecast can push a start date.',
    },
    {
      q: 'Will my landscaping and property be protected?',
      a: 'Yes, and it is something we set up deliberately rather than improvise. Gardens and plantings get covered and protected before tear off begins, and a foreman is on site through the day managing what is moving in and out.\n\nBefore we leave, the site is swept for nails with magnets, debris is cleared, and materials are accounted for.',
    },
  ],
  body: `
${pageHero({
    crumbs: [{ name: 'Residential roofing', path: '/residential-roofing' }],
    eb: 'Residential',
    h1: 'Residential roofing in Oklahoma City',
    lede: 'Shingle, metal, tile and slate roof systems for homes across the metro, installed by a GAF Master Elite and DaVinci Masterpiece contractor that has been here since 2004.',
    image: 'real-luxury-brick-home',
    alt: 'A large brick and stone home in Oklahoma City with a designer shingle roof installed by Champion Roofing',
  })}


${ticker()}

${split({
    eb: 'The standard',
    title: 'The same crew whether it is a slate roof or a small repair',
    body: [
      'Champion Roofing has been roofing houses in Oklahoma City since 2004, and the owner spent years on roofs himself before he started the company. That shapes how jobs run here: the standard gets set from the roof down.',
      'We work on both ends of this market. There are streets around the metro where nearly every house carries synthetic slate or designer tile, and we have roofed a lot of them. We also do repairs on ordinary houses and outbuildings. Same crews, same warranty, same standard.',
      'In the owner\'s words: <strong>nobody is special, everybody, we just try to put on a good roof for everybody.</strong>',
    ],
    list: [
      ['GAF Master Elite residential contractor.', 'Which is what allows us to offer the upgraded manufacturer warranties.'],
      ['DaVinci Masterpiece contractor.', 'Project of the Year winner in 2021 and 2023.'],
      ['Two year written workmanship warranty.', 'On every roof we install, without exception.'],
      ['A foreman on site.', 'Not a crew dropped off in the morning and collected at night.'],
    ],
    image: 'real-french-brick-estate',
    alt: 'A French style brick estate home in Oklahoma City with a new architectural shingle roof',
    cta: btn('/about', 'About Champion Roofing', 'btn-dark'),
    floatCard: { icon: 'award', title: 'Since 2004', sub: 'Locally owned by Mike Cowan' },
  })}

${serviceGrid(
    'Residential services',
    'What we do on houses',
    'Every one of these is a real service with a real page behind it, not a keyword on a list.',
    [
      { path: '/roof-repair', tag: 'Repair', h: 'Roof repair', p: 'Leaks, lifted or missing shingles, failed flashing and roof penetrations. We diagnose the cause before quoting.', img: 'repair-damaged-shingles', alt: 'Lifted and damaged asphalt shingles on a residential roof' },
      { path: '/roof-replacement', tag: 'Replacement', h: 'Roof replacement', p: 'Complete tear off, decking inspected and reported honestly, then a full new system.', img: 'replace-aerial-decking', alt: 'Aerial view of a roof stripped to the decking during replacement' },
      { path: '/roof-inspection', tag: 'Inspection', h: 'Roof inspection', p: 'Drone flown in three passes, then physical and attic investigation if needed. Report by email.', img: 'hail-chalk-marks-grey', alt: 'Hail impact marks circled in chalk on a grey shingle roof' },
      { path: '/storm-damage-roof-repair', tag: 'Storm', h: 'Storm and hail damage', p: 'Assessment, documentation for your carrier, and the repair once the scope is settled.', img: 'storm-tree-on-roof', alt: 'A fallen tree resting on a storm damaged residential roof' },
      { path: '/metal-roofing', tag: 'Metal', h: 'Metal roofing', p: 'Standing seam, metal shingle and corrugated systems, detailed properly at every transition.', img: 'metal-standing-seam-cabin', alt: 'A black standing seam metal roof on a timber clad home' },
      { path: '/specialty-roofing', tag: 'Specialty', h: 'Tile, slate and shake', p: 'Clay, concrete, composite, synthetic, natural slate and shake. The work we are known for.', img: 'real-tile-complete', alt: 'A completed clay tile roof on a stucco home' },
    ],
  )}

${materialExplorer()}

${statStrip([
    { count: 22, label: 'Years roofing Oklahoma City' },
    { count: 59, label: 'Google reviews, 5.0 rating' },
    { count: 3, label: 'Drone laps on every inspection' },
    { count: 2, label: 'Year written workmanship warranty' },
  ])}

${detailAccordion('The detail', 'What a residential roof from Champion Roofing actually involves', `Most roofing pages describe a product. This one describes a process, because the difference between a roof that lasts and a roof that leaks in three years is almost never the shingle on top. It is the decking underneath, the underlayment, and the way every penetration and transition is detailed.`, [
    { icon: 'ridge', h: `It starts with an assessment, not a quote`, p: `Nothing gets priced until somebody has looked properly. An inspector comes to the property, flies the roof with a drone in three passes, and talks through the findings with you on site. The report follows by email. That happens whether the answer is a full replacement, a small repair, or that your roof is fine and you should call us again in a few years.

If the drone imagery cannot confirm what is happening, we get on the roof and into the attic. A leak that shows on a bedroom ceiling frequently originates several feet away, and no amount of aerial photography will find it from above.` },
    { icon: 'house', h: `Decking gets inspected once the old roof is off`, p: `You cannot tell the true condition of roof decking through an existing roof. Once the tear off is done, the deck is inspected properly. Where boards are soft, damaged or fail code requirements, that gets documented rather than covered up. When the work is running through an insurance claim, code related decking conditions are documented for supplementation so the scope reflects what the roof actually needs.` },
    { icon: 'ridge', h: `Then the system goes on, in order`, p: `<strong>Underlayment and ice and water protection</strong> at the vulnerable areas: eaves, valleys and around penetrations.<br><strong>Flashing</strong> at chimneys, walls, valleys and every roof penetration. This is where most roofs fail, and it is not a place for sealant instead of metal.<br><strong>The roof covering itself</strong>, whether that is architectural shingle, standing seam metal, tile on battens, or slate.<br><strong>Ridge and ventilation</strong> detailing, because a roof that cannot breathe will cook its own decking from below.` },
    { icon: 'leaf', h: `Your property gets protected while it happens`, p: `Roofing is destructive by nature. Tear off produces debris, and gardens sit directly underneath. Protecting landscaping is something we set up as a system rather than improvise on the day, because in Oklahoma people care about their plantings and they are right to.

A foreman is on site through the day. Their job is to stay flexible as things come up, keep the site safe while people are moving in and out, verify that the materials delivered are the materials specified, and make sure the cleanup at the end is real. That means debris cleared, materials accounted for, and the ground swept with magnets for nails.` },
    { icon: 'check', h: `The price you were given is the price`, p: `Change orders are common in this trade and they are a genuine source of friction. Champion Roofing does not work that way. If something turns up mid job, we generally absorb it rather than passing it along. The exception is something nobody could have known about, such as a structural problem hidden under the decking, and even then you hear about it before anything is done.` },
    { icon: 'shield', h: `And it is warrantied`, p: `Every roof we install carries a two year written workmanship warranty covering anything installed improperly or a detail we missed that causes a leak. Qualifying customers can purchase higher tier GAF or Malarkey manufacturer warranties, available in 25 and 30 year options, which include extended manufacturer backed workmanship coverage and are transferable if you sell the house.

We also will not install a shingle we are not prepared to warranty. If a product has a known problem, we do not put it on your house just because it is cheap and available.` },
  ], { tint: true })}


${areasSection(true)}

${faqSection(
    'Residential FAQs',
    'Questions homeowners ask us',
    'Straight answers, including the ones that are not in our commercial interest.',
    [
      {
        q: 'How do I know whether my roof needs repair or replacement?',
        a: 'It comes down to how much of the roof is affected and how old the system is. Damage confined to one slope, a handful of shingles, or a single flashing detail is usually a repair. Widespread granular loss, hail bruising across multiple elevations, or a roof already near the end of its service life is usually a replacement.\n\nThe honest answer is that you should not have to guess. Our assessment is free, the drone flies three laps around the roof, and you get the findings in writing by email whichever way it goes.',
      },
      {
        q: 'Do you work on both expensive homes and modest ones?',
        a: 'Yes, and to the same standard. To quote the owner directly: we cater to our customers no matter what kind of money they have, we treat them all the same.\n\nWe install designer slate and synthetic tile on the higher end streets around the metro, and we also do small repairs on ordinary houses. Same crews, same warranty, same standard.',
      },
      {
        q: 'What roofing materials do you install on homes?',
        a: 'Asphalt shingles including architectural and designer profiles, metal in standing seam, metal shingle and corrugated systems, clay and concrete tile, composite and synthetic tile, natural and synthetic slate, and wood and synthetic shake.\n\nWe are a GAF Master Elite residential contractor and a DaVinci Masterpiece contractor, and we were the first company in Oklahoma to install Brava synthetic roofing.',
      },
      {
        q: 'How long does a residential roof replacement take?',
        a: 'Most straightforward shingle replacements are a short job measured in days rather than weeks. Tile, slate and complex steep slope roofs take considerably longer because the detailing cannot be rushed.\n\nWeather moves the schedule. We stop or delay work when rain, snow or unsafe heat would put the crew or your property at risk, so a forecast can push a start date.',
      },
      {
        q: 'Will my landscaping and property be protected?',
        a: 'Yes, and it is something we set up deliberately rather than improvise. Gardens and plantings get covered and protected before tear off begins, and a foreman is on site through the day managing what is moving in and out.\n\nBefore we leave, the site is swept for nails with magnets, debris is cleared, and materials are accounted for.',
      },
    ],
  )}

${related([
    { path: '/roof-repair', icon: 'wrench', h: 'Roof repair', p: 'When part of the roof is the problem, not all of it.' },
    { path: '/roof-replacement', icon: 'hammer', h: 'Roof replacement', p: 'Tear off, decking, and a complete new system.' },
    { path: '/roof-inspection', icon: 'drone', h: 'Roof inspection', p: 'What the three laps actually look at.' },
    { path: '/gutters', icon: 'gutter', h: 'Seamless gutters', p: 'The service our reviews mention most after the roof.' },
  ])}

${ctaBand('Find out what your roof actually needs', 'A free assessment, a drone survey, and a written report. If the answer is that your roof is fine, that is what we will tell you.')}
`,
};

/* ========================================================================== */
const roofRepair = {
  path: '/roof-repair',
  priority: '0.9',
  title: 'Roof Repair Oklahoma City | Leaks, Storm Damage | Champion',
  desc: 'Roof repair in Oklahoma City from a GAF Master Elite contractor. Leaks, missing shingles, flashing and penetrations, diagnosed with a drone inspection first.',
  ogImage: 'repair-damaged-shingles',
  crumbs: [
    { name: 'Residential roofing', path: '/residential-roofing' },
    { name: 'Roof repair', path: '/roof-repair' },
  ],
  service: {
    name: 'Roof repair',
    type: 'Roof repair',
    offers: ['Roof leak repair', 'Shingle repair and replacement', 'Flashing repair', 'Roof penetration repair', 'Storm damage repair'],
  },
  faqs: [
    {
      q: 'How much does roof repair cost in Oklahoma City?',
      a: 'It depends entirely on what is wrong, which is why we do not quote repairs over the phone. A single flashing detail and a leak that has been running into the decking for two years are very different jobs.\n\nWhat we can tell you is that the assessment costs nothing, and the price we give you afterwards is the price. If we run into something mid job we generally absorb it rather than sending you a change order.',
    },
    {
      q: 'Can you find a leak if you cannot see damage from the roof?',
      a: 'Usually, yes, but it takes more than a drone. Water travels. A stain on a bedroom ceiling often starts several feet away from where it shows, and it may follow a rafter or a run of decking before it drops.\n\nWhen the drone imagery cannot confirm damage or locate the source, we get on the roof and into the attic. That is the point of a physical and attic investigation: to find where the water is actually entering rather than patching where it happens to appear.',
    },
    {
      q: 'Should I repair or replace my roof?',
      a: 'Repair makes sense when the damage is localised and the rest of the system has real service life left. A few lifted shingles on one slope, a failed pipe boot, or a flashing detail that was never done correctly are all repairs.\n\nReplacement makes more sense when damage appears across multiple elevations, when granular loss is widespread, or when you would be spending real money on a system that is close to the end of its life anyway. We will tell you which one you are looking at, including when the answer is the cheaper one.',
    },
    {
      q: 'Do you repair roofs you did not install?',
      a: 'Yes. Most repair work is on roofs installed by somebody else, frequently by a company that is no longer around. That is common in this trade.\n\nWhat we will not do is patch over a problem we can see is going to come straight back, and then take your money for it. If a repair is not the right answer we will say so.',
    },
    {
      q: 'Will a repair be covered by insurance?',
      a: 'Sometimes. Sudden damage from a hail or wind event is generally the kind of thing carriers cover. Gradual wear, age and deferred maintenance generally are not.\n\nIf the damage looks storm related we will document it, meet your adjuster at the property, and work through the scope with your carrier. The decision itself belongs to your insurer, not to us, and any roofer who promises you an approval is telling you something they cannot know.',
    },
    {
      q: 'How quickly can you get out to look at it?',
      a: 'The office schedules an inspector out to the property, usually within a few days of your call. The inspection itself takes about ten to fifteen minutes on site.\n\nOne thing worth being straight about: Champion Roofing does not advertise 24 hour or emergency dispatch. Calls received after 5pm go to voicemail, and the contact form is open around the clock.',
    },
  ],
  body: `
${pageHero({
    crumbs: [
      { name: 'Residential roofing', path: '/residential-roofing' },
      { name: 'Roof repair', path: '/roof-repair' },
    ],
    eb: 'Roof repair',
    h1: 'Roof repair in Oklahoma City',
    lede: 'Leaks, storm damage, lifted or missing shingles and failed flashing. We find what is actually causing the problem before we quote a price to fix it.',
    image: 'repair-damaged-shingles',
    alt: 'Lifted and damaged asphalt shingles exposing the roof deck on an Oklahoma City home',
  })}


${split({
    eb: 'Diagnosis first',
    title: 'A patch in the wrong place is money you will spend twice',
    body: [
      'Water travels. A stain that shows up on a bedroom ceiling has often entered the roof several feet away, run along a rafter or a length of decking, and dropped at the first opportunity. Patching the spot above the stain fixes nothing.',
      'That is why every repair starts with an inspection rather than a quote. The drone flies three laps around the roof reading the field, then the details, then everything the same storm is likely to have marked. Where the imagery cannot answer the question, we get on the roof and into the attic.',
      'You get the findings talked through on site, and a written report by email afterwards.',
    ],
    list: [
      ['We diagnose before we price.', 'Nothing gets quoted from the driveway.'],
      ['Attic investigation when needed.', 'Because a leak rarely enters where it appears.'],
      ['The price is the price.', 'If we hit something mid job, we generally absorb it.'],
      ['Two year workmanship warranty.', 'In writing, on work we install.'],
    ],
    image: 'repair-steep-chimney',
    alt: 'A roofer working on a steep roof section beside a brick chimney',
    reverse: true,
    cta: btn('/roof-inspection', 'How our inspections work', 'btn-dark'),
  })}

${infoGrid('Common repairs', 'What we are usually called out for', 'These are the repairs that come up most often on Oklahoma City roofs.', [
    { icon: 'storm', h: 'Storm and hail damage', p: 'Impact bruising, granular loss and shingles lifted or torn off by wind. Frequently insurable, and frequently worse than it looks from the ground.' },
    { icon: 'wrench', h: 'Failed flashing', p: 'Chimneys, wall transitions and valleys. The single most common origin of a leak, and one that sealant will not permanently fix.' },
    { icon: 'house', h: 'Roof penetrations', p: 'Pipe boots, vents and anything else that passes through the roof plane. Rubber boots perish long before the shingles around them do.' },
    { icon: 'tile', h: 'Missing or slipped units', p: 'Shingles, tiles or slates that have come off. On specialty roofs, matching the existing material matters as much as the repair itself.' },
    { icon: 'gutter', h: 'Eaves and drainage', p: 'Water backing up at the eave, or gutters that are no longer moving water away from the structure, will find its way into the fascia and decking.' },
    { icon: 'leaf', h: 'Decking and structure', p: 'Where water has been getting in for a while, the repair is not only the surface. Soft or damaged decking gets documented rather than covered up.' },
  ], { tint: true })}

${honestBlock(
    'When a repair is the wrong answer',
    [
      'Not every roof should be repaired, and we would rather lose the job than take money for a fix that is going to fail. There are situations where patching is genuinely the wrong call, and you deserve to hear that before you spend anything.',
      'This is the part most roofing companies leave off their website. It is also the reason a lot of our work comes from repeat customers and referrals. As the owner puts it: in Oklahoma, your name gets spread pretty fast if you do a bad job.',
    ],
    [
      ['The damage is across multiple elevations.', 'If three sides of the roof show the same hail bruising, you have a roof problem rather than a spot problem.'],
      ['The system is near the end of its life anyway.', 'Spending real money on a roof with a couple of years left rarely makes sense.'],
      ['The shingle is no longer available.', 'A repair that does not match is a visible repair, and on the resale side that matters.'],
      ['Water has been getting in for a long time.', 'Once decking is involved, a surface patch is treating the symptom.'],
      ['It was installed wrong in the first place.', 'Where the underlying detail is the problem, repairing the surface just resets the clock on the same failure.'],
    ],
  )}

${steps('How a repair runs', 'From your call to the magnet sweep', 'Four steps, no mystery, and nobody disappears halfway through.', [
    { h: 'You tell us what you are seeing', p: 'A stain, shingles in the yard, a drip during the last storm. Whatever it is, it helps us know where to look first.' },
    { h: 'We inspect properly', p: 'Drone flown in three passes, then physical and attic investigation if the imagery cannot locate the source. Ten to fifteen minutes on site.' },
    { h: 'You get findings and a price', p: 'Talked through on site, then a written report by email. The price we give you is the price you pay.' },
    { h: 'We repair and clean up', p: 'The repair is made, the site is cleared, and the ground is swept with magnets for nails before we leave.' },
  ])}

${stickyFeature('The detail', 'How roof repair actually works in Oklahoma City', `Oklahoma roofs take a specific kind of punishment: hail, extreme summer heat, sharp temperature swings, high wind and occasional ice. The places that fail first are the joints, not the field.`, [
    { img: 'repair-steep-chimney', alt: `A roofer working beside a brick chimney on a steep roof`, h: `Flashing fails before shingles do`, p: `A shingle field is a large, uniform, forgiving surface. Flashing is where the roof meets something else: a chimney, a wall, a valley, a vent pipe. Those transitions carry all the movement, and they are the parts most likely to have been rushed.` },
    { img: 'repair-damaged-shingles', alt: `Lifted and damaged asphalt shingles exposing the roof deck`, h: `Pipe boots are a predictable failure`, p: `The rubber collar around a plumbing vent has a shorter service life than the shingles around it. It sits in direct sun, flexes with every temperature swing, and eventually splits.` },
    { img: 'hail-chalk-marks-grey', alt: `Hail impact marks circled in chalk on a grey shingle roof`, h: `Hail damage is rarely a hole`, p: `Hail bruises rather than punctures. The impact fractures the mat of the shingle and knocks the protective granules loose. From the ground it looks like nothing. From the roof it looks like scattered dark spots.` },
  ])}

${pageReviews('/roof-repair', 'What customers say about our repairs')}

${faqSection('Repair FAQs', 'Roof repair questions', 'Including the ones that do not help us sell you anything.', [
    {
      q: 'How much does roof repair cost in Oklahoma City?',
      a: 'It depends entirely on what is wrong, which is why we do not quote repairs over the phone. A single flashing detail and a leak that has been running into the decking for two years are very different jobs.\n\nWhat we can tell you is that the assessment costs nothing, and the price we give you afterwards is the price. If we run into something mid job we generally absorb it rather than sending you a change order.',
    },
    {
      q: 'Can you find a leak if you cannot see damage from the roof?',
      a: 'Usually, yes, but it takes more than a drone. Water travels. A stain on a bedroom ceiling often starts several feet away from where it shows, and it may follow a rafter or a run of decking before it drops.\n\nWhen the drone imagery cannot confirm damage or locate the source, we get on the roof and into the attic. That is the point of a physical and attic investigation: to find where the water is actually entering rather than patching where it happens to appear.',
    },
    {
      q: 'Should I repair or replace my roof?',
      a: 'Repair makes sense when the damage is localised and the rest of the system has real service life left. A few lifted shingles on one slope, a failed pipe boot, or a flashing detail that was never done correctly are all repairs.\n\nReplacement makes more sense when damage appears across multiple elevations, when granular loss is widespread, or when you would be spending real money on a system that is close to the end of its life anyway. We will tell you which one you are looking at, including when the answer is the cheaper one.',
    },
    {
      q: 'Do you repair roofs you did not install?',
      a: 'Yes. Most repair work is on roofs installed by somebody else, frequently by a company that is no longer around. That is common in this trade.\n\nWhat we will not do is patch over a problem we can see is going to come straight back, and then take your money for it. If a repair is not the right answer we will say so.',
    },
    {
      q: 'Will a repair be covered by insurance?',
      a: 'Sometimes. Sudden damage from a hail or wind event is generally the kind of thing carriers cover. Gradual wear, age and deferred maintenance generally are not.\n\nIf the damage looks storm related we will document it, meet your adjuster at the property, and work through the scope with your carrier. The decision itself belongs to your insurer, not to us, and any roofer who promises you an approval is telling you something they cannot know.',
    },
    {
      q: 'How quickly can you get out to look at it?',
      a: 'The office schedules an inspector out to the property, usually within a few days of your call. The inspection itself takes about ten to fifteen minutes on site.\n\nOne thing worth being straight about: Champion Roofing does not advertise 24 hour or emergency dispatch. Calls received after 5pm go to voicemail, and the contact form is open around the clock.',
    },
  ], 'light')}

${related([
    { path: '/roof-replacement', icon: 'hammer', h: 'Roof replacement', p: 'When repair is no longer the sensible answer.' },
    { path: '/roof-inspection', icon: 'drone', h: 'Roof inspection', p: 'The three lap drone survey, explained.' },
    { path: '/storm-damage-roof-repair', icon: 'storm', h: 'Storm and hail damage', p: 'Insurance documentation and repair after a storm.' },
    { path: '/residential-roofing', icon: 'house', h: 'Residential roofing', p: 'Everything we do on houses.' },
  ])}

${ctaBand('Get the leak diagnosed properly', 'Free assessment, drone survey, written report. And if a repair is the wrong answer, we will tell you that instead.', 'repair-patch-section')}
`,
};

/* ========================================================================== */
const roofReplacement = {
  path: '/roof-replacement',
  priority: '0.9',
  title: 'Roof Replacement Oklahoma City | New Roof | Champion Roofing',
  desc: 'Roof replacement in Oklahoma City by a GAF Master Elite contractor. Full tear off, honest decking assessment, and a complete new system under written warranty.',
  ogImage: 'replace-aerial-crew-bundles',
  crumbs: [
    { name: 'Residential roofing', path: '/residential-roofing' },
    { name: 'Roof replacement', path: '/roof-replacement' },
  ],
  service: {
    name: 'Roof replacement',
    type: 'Roof replacement',
    offers: ['Complete roof tear off and replacement', 'New roof installation', 'Decking replacement', 'Architectural and designer shingle roofing', 'Metal roof replacement'],
  },
  faqs: [
    {
      q: 'How long does a roof replacement take?',
      a: 'A straightforward asphalt shingle replacement on a typical Oklahoma City home is usually a matter of days rather than weeks. Tile, slate and complex steep slope roofs take substantially longer, because the detailing on those systems cannot be rushed without causing problems later.\n\nWeather is the variable we cannot control. We delay or stop work when rain, snow or unsafe heat would put the crew or your property at risk. Sometimes that means starting later in the afternoon rather than not at all.',
    },
    {
      q: 'What happens if you find bad decking under my old roof?',
      a: 'You get told. There is no way to assess decking accurately through an existing roof, so it is inspected once the tear off is complete. Where boards are soft, damaged or do not meet code, that gets documented rather than quietly covered over.\n\nWhen the work is running through an insurance claim, code related decking conditions are documented for supplementation, so the approved scope reflects what the roof genuinely needs rather than what was visible on day one.',
    },
    {
      q: 'Will the price change once you start?',
      a: 'That is not how we operate. In the owner\'s words: when we give you a price, that is going to be the price. A lot of companies in this trade thrive on change orders, and we deliberately do not.\n\nIf something comes up mid job, we usually absorb it rather than passing it along. The exception would be a genuinely hidden condition, such as a structural issue nobody could have seen, and even then you hear about it before any work is done.',
    },
    {
      q: 'Can I choose the colour and style of the shingle?',
      a: 'Yes, and it is one of the things customers mention most in our reviews. Colour options come up in five separate Google reviews on our profile.\n\nWe will bring options and talk through how they will actually look on your house and your street, rather than handing you a sample board and leaving you to guess.',
    },
    {
      q: 'What warranty comes with a new roof?',
      a: 'Every roof we install carries a two year written workmanship warranty from Champion Roofing, covering anything installed improperly or a missed detail that causes a leak.\n\nQualifying customers can also purchase higher tier GAF or Malarkey manufacturer warranties, available in 25 and 30 year options. Those include extended manufacturer backed workmanship coverage and are transferable if you sell the house.',
    },
    {
      q: 'Do you offer impact resistant shingles for hail?',
      a: 'Yes. Where it makes sense we try to get customers into a class 4 impact rated shingle, which is designed to stand up better to hail than a standard product.\n\nIt is worth asking your insurance carrier about this before you decide, because some carriers treat impact rated roofing differently on premiums. That is a conversation with your insurer rather than with us.',
    },
  ],
  body: `
${pageHero({
    crumbs: [
      { name: 'Residential roofing', path: '/residential-roofing' },
      { name: 'Roof replacement', path: '/roof-replacement' },
    ],
    eb: 'Roof replacement',
    h1: 'Roof replacement in Oklahoma City',
    lede: 'A complete tear off, a decking inspection you get told the truth about, and a full new roof system backed by a written workmanship warranty.',
    image: 'replace-aerial-crew-bundles',
    alt: 'Aerial view of a residential roof replacement with a crew working and shingle bundles staged across the deck',
  })}


${ticker()}

${split({
    eb: 'The commitment',
    title: 'When we give you a price, that is the price',
    body: [
      'A lot of companies in this trade make real money on change orders. A number gets quoted low, work begins, and then the additions start arriving. Champion Roofing does not operate that way, and the owner is blunt about it.',
      '<strong>I do not like change orders. When we give you a price, that is going to be the price. If we come across something, we usually just eat it. We do not pass it along to the customer.</strong>',
      'The only exception is a condition nobody could reasonably have known about, such as a structural problem hidden under the decking. Even then, you hear about it before anything gets done, not on the final invoice.',
    ],
    list: [
      ['One price, agreed up front.', 'Not a starting point that grows during the job.'],
      ['Decking reported honestly.', 'Documented once the tear off exposes it, not covered up.'],
      ['A foreman on site through the day.', 'Managing materials, safety and the cleanup at the end.'],
      ['Two year written workmanship warranty.', 'Plus transferable 25 and 30 year manufacturer options.'],
    ],
    image: 'replace-aerial-tearoff',
    alt: 'A residential roof stripped back to bare decking during a tear off',
    cta: btn('/contact', 'Get a quote', 'btn-dark'),
    floatCard: { icon: 'shield', title: 'No change order games', sub: 'The quoted price is the price' },
  })}

${steps('The sequence', 'What actually happens on a replacement', 'Six stages, and you know where you are at every one of them.', [
    { h: 'Assessment', p: 'Drone inspection in three passes, findings talked through on site, then a written report and a price by email.' },
    { h: 'Insurance, if applicable', p: 'We meet your adjuster at the property and work through the approved scope with your carrier.' },
    { h: 'Selection', p: 'Material and colour chosen with real guidance about how it will read on your house, not just a sample board.' },
    { h: 'Protection and tear off', p: 'Landscaping covered and protected first. Then the old roof comes off completely.' },
    { h: 'Decking and system', p: 'The deck gets inspected and reported. Then underlayment, flashing, covering, ridge and ventilation, in order.' },
    { h: 'Cleanup and paperwork', p: 'Debris cleared, magnets over the ground for nails, materials accounted for, warranty documents handed over.' },
  ], true)}


${roofBuildUp()}

${detailAccordion('On your property', 'What a replacement is like to live through', `Tear off is messy by definition, and the part you actually experience is the site, not the specification.`, [
    { icon: 'leaf', h: `Protecting the property while it happens`, p: `In Oklahoma people care about their gardens, and landscaping disruption is the thing that genuinely upsets people about a roofing job. Protection is set up as a system before work begins rather than improvised on the day. A foreman stays on site managing what moves in and out, keeping the site safe, verifying materials against the specification and supervising the cleanup.\n\nThe cleanup includes magnetic sweeps for nails across the ground, debris cleared and materials accounted for. It is the part of the job you see most closely, and a fair proxy for how the rest was done.` },
    { icon: 'doc', h: `Then the paperwork`, p: `At the end you get the warranty documentation, and where insurance is involved, the reconciliation of the approved scope. Final payment comes after completion, and where a carrier is involved, when the final insurance cheque arrives.` },
  ], { tint: true })}

${infoGrid('Signs it is time', 'When replacement makes more sense than repair', 'If two or three of these are true for your roof, a repair is probably not the right spend.', [
    { icon: 'storm', h: 'Damage across multiple slopes', p: 'Hail bruising or granular loss showing on several elevations is a roof problem rather than a spot problem.' },
    { icon: 'clock', h: 'The system is near the end anyway', p: 'Spending significant money on a roof with a couple of years left in it rarely returns the outlay.' },
    { icon: 'search', h: 'Repeat repairs in the same area', p: 'A leak that keeps coming back usually means the underlying detail, not the surface, is what failed.' },
    { icon: 'leaf', h: 'Granular loss in the gutters', p: 'Significant granule accumulation is the roof surface telling you it is wearing out.' },
    { icon: 'house', h: 'Decking movement underfoot', p: 'Where the deck has softened, the problem is structural and a surface repair will not address it.' },
    { icon: 'doc', h: 'You are selling the house', p: 'An inspection report finding a failing roof will surface during a sale. Better to know now than in negotiation.' },
  ], { tint: false })}

${pageReviews('/roof-replacement', 'What customers say about their new roof')}

${faqSection('Replacement FAQs', 'Roof replacement questions', 'The practical ones people ask before committing to a new roof.', [
    {
      q: 'How long does a roof replacement take?',
      a: 'A straightforward asphalt shingle replacement on a typical Oklahoma City home is usually a matter of days rather than weeks. Tile, slate and complex steep slope roofs take substantially longer, because the detailing on those systems cannot be rushed without causing problems later.\n\nWeather is the variable we cannot control. We delay or stop work when rain, snow or unsafe heat would put the crew or your property at risk. Sometimes that means starting later in the afternoon rather than not at all.',
    },
    {
      q: 'What happens if you find bad decking under my old roof?',
      a: 'You get told. There is no way to assess decking accurately through an existing roof, so it is inspected once the tear off is complete. Where boards are soft, damaged or do not meet code, that gets documented rather than quietly covered over.\n\nWhen the work is running through an insurance claim, code related decking conditions are documented for supplementation, so the approved scope reflects what the roof genuinely needs rather than what was visible on day one.',
    },
    {
      q: 'Will the price change once you start?',
      a: 'That is not how we operate. In the owner\'s words: when we give you a price, that is going to be the price. A lot of companies in this trade thrive on change orders, and we deliberately do not.\n\nIf something comes up mid job, we usually absorb it rather than passing it along. The exception would be a genuinely hidden condition, such as a structural issue nobody could have seen, and even then you hear about it before any work is done.',
    },
    {
      q: 'Can I choose the colour and style of the shingle?',
      a: 'Yes, and it is one of the things customers mention most in our reviews. Colour options come up in five separate Google reviews on our profile.\n\nWe will bring options and talk through how they will actually look on your house and your street, rather than handing you a sample board and leaving you to guess.',
    },
    {
      q: 'What warranty comes with a new roof?',
      a: 'Every roof we install carries a two year written workmanship warranty from Champion Roofing, covering anything installed improperly or a missed detail that causes a leak.\n\nQualifying customers can also purchase higher tier GAF or Malarkey manufacturer warranties, available in 25 and 30 year options. Those include extended manufacturer backed workmanship coverage and are transferable if you sell the house.',
    },
    {
      q: 'Do you offer impact resistant shingles for hail?',
      a: 'Yes. Where it makes sense we try to get customers into a class 4 impact rated shingle, which is designed to stand up better to hail than a standard product.\n\nIt is worth asking your insurance carrier about this before you decide, because some carriers treat impact rated roofing differently on premiums. That is a conversation with your insurer rather than with us.',
    },
  ], 'light')}

${related([
    { path: '/roof-repair', icon: 'wrench', h: 'Roof repair', p: 'When the problem is part of the roof, not all of it.' },
    { path: '/metal-roofing', icon: 'metal', h: 'Metal roofing', p: 'Standing seam, metal shingle and corrugated.' },
    { path: '/specialty-roofing', icon: 'tile', h: 'Tile and slate', p: 'The specialty work we are best known for.' },
    { path: '/storm-damage-roof-repair', icon: 'storm', h: 'Storm damage', p: 'Replacing a roof through an insurance claim.' },
  ])}

${ctaBand('Get a real number for a new roof', 'We assess the roof before we price it, and the price we give you is the one you pay.', 'replace-aerial-decking')}
`,
};

export default [residentialRoofing, roofRepair, roofReplacement];
