import { BIZ } from '../data.mjs';
import { btn } from '../lib.mjs';
import {
  pageReviews,
  stickyFeature,
  editorialStack,
  pageHero, statStrip, steps, faqSection, split, infoGrid,
  detailAccordion, honestBlock, related, asideCard, ctaBand, annotatedRoof,
  compareSection, ticker, areasSection,
} from '../sections.mjs';

const CITIES = BIZ.cities.map((c) => c.name).join(', ').replace(/, ([^,]*)$/, ' and $1');

const ASIDE = asideCard('At a glance', [
  { icon: 'clock', h: 'Assessment', p: 'Free, no obligation, usually inside a few days.' },
  { icon: 'drone', h: 'Inspection', p: 'Drone flown in three passes, then a report by email.' },
  { icon: 'shield', h: 'Workmanship warranty', p: 'Two years in writing on every roof we install.' },
  { icon: 'award', h: 'Credentials', p: 'GAF Master Elite and DaVinci Masterpiece contractor.' },
  { icon: 'pin', h: 'Where', p: CITIES },
]);

/* ========================================================================== */
const roofInspection = {
  path: '/roof-inspection',
  priority: '0.9',
  title: 'Roof Inspection Oklahoma City | Free Drone Survey | Champion',
  desc: 'Free drone assisted roof inspections in Oklahoma City. Three passes around the roof, attic investigation where needed, and a written report by email.',
  ogImage: 'hail-chalk-marks-grey',
  crumbs: [
    { name: 'Residential roofing', path: '/residential-roofing' },
    { name: 'Roof inspection', path: '/roof-inspection' },
  ],
  service: {
    name: 'Roof inspection',
    type: 'Roof inspection',
    offers: ['Drone assisted roof inspection', 'Hail damage assessment', 'Storm damage assessment', 'Attic and interior leak investigation', 'Pre purchase roof assessment'],
  },
  faqs: [
    {
      q: 'Is the roof inspection really free?',
      a: 'Yes. Champion Roofing provides no cost, no obligation roof assessments across the Oklahoma City metro. You are not committing to any work by booking one.\n\nIf the inspection finds that your roof is in good condition, we tell you that and you owe us nothing. We would rather be the company you call in three years than the one that invented a problem today.',
    },
    {
      q: 'What does the drone actually look at?',
      a: 'Our standard procedure is three laps around the roof. The first pass reads the shingle field: granular loss, hail impacts and general wear. The second covers the details that actually leak, meaning chimneys, penetrations, flashing, valleys and eaves, on every elevation. The third looks at soft metals, gutters, window screens and fencing.\n\nWe deliberately look at a couple of different sides of the house, because hail is frequently directional. If only one elevation shows impacts, that tells us something different than damage on all four.',
    },
    {
      q: 'When is a drone not enough?',
      a: 'When the imagery cannot confirm damage, or cannot locate a leak. Aerial photography is very good at showing surface condition and very poor at explaining where water is entering.\n\nIn those cases the inspector gets on the roof and into the attic. A leak showing on a bedroom ceiling has often entered the roof several feet away and travelled along a rafter before dropping, and that is only findable from inside.',
    },
    {
      q: 'How long does an inspection take?',
      a: 'The drone portion is usually ten to fifteen minutes on site. The inspector talks through the findings with you while they are there, and the written report follows by email.\n\nIf a physical roof and attic investigation is needed, it takes longer, because that is a search rather than a survey.',
    },
    {
      q: 'Should I get a roof inspection after every hail storm?',
      a: 'It is worth doing, because hail damage is frequently invisible from the ground. What hail does to a shingle is usually bruising rather than a hole: an impact that fractures the mat and knocks the protective granules loose. The shingle keeps working for a while and then degrades from those points.\n\nEvery neighbourhood in Oklahoma gets hit at some point. Having it looked at costs nothing and gives you a documented record of the roof condition, which matters if you need to make a claim later.',
    },
    {
      q: 'Do you do inspections for home sales?',
      a: 'Yes. A meaningful part of our business comes from referrals by realtors, and roof condition is one of the things that surfaces during a sale.\n\nGetting the roof assessed before a property goes on the market means you find out on your own timetable rather than during negotiation.',
    },
  ],
  body: `
${pageHero({
    crumbs: [
      { name: 'Residential roofing', path: '/residential-roofing' },
      { name: 'Roof inspection', path: '/roof-inspection' },
    ],
    eb: 'Roof inspection',
    h1: 'Roof inspections in Oklahoma City, flown by drone',
    lede: 'Three passes around your roof, findings talked through on site, and a written report by email. Free, with no obligation, and no invented problems.',
    image: 'hail-chalk-marks-grey',
    alt: 'Hail impact marks circled in chalk during a roof inspection in Oklahoma City',
  })}


${annotatedRoof()}

${split({
    eb: 'The limits',
    title: 'Where drone imagery stops being useful',
    body: [
      'A drone is an excellent tool for reading a roof surface quickly and safely, and for documenting what a storm did across every elevation. It is a poor tool for finding a leak.',
      'Water does not enter where it appears. A stain on a ceiling frequently starts several feet away, runs along a rafter or a length of decking, and drops at the first opportunity. No aerial photograph shows that.',
      'When the imagery cannot confirm damage or locate the source, the inspector gets on the roof and into the attic. That is a search rather than a survey, and it takes longer, but it is the only way to answer the question properly.',
    ],
    list: [
      ['Drone for surface and storm documentation.', 'Fast, safe, and it covers every elevation.'],
      ['Physical inspection when imagery is inconclusive.', 'Somebody gets on the roof.'],
      ['Attic investigation for leaks.', 'Where the water is actually entering, not where it lands.'],
      ['A report either way.', 'Emailed to you after the visit.'],
    ],
    image: 'real-roofer-ladder-chimney',
    alt: 'A Champion Roofing inspector climbing a ladder to a roof beside a brick chimney',
    reverse: true,
  })}

${detailAccordion('The detail', 'Why hail damage is worth having looked at even when the roof looks fine', `The most common misunderstanding about hail is that damage means a visible hole. It rarely does. What hail usually does to an asphalt shingle is bruise it: the impact fractures the mat underneath and dislodges the protective granules on the surface.`, [
    { icon: 'ridge', h: `Why we look at more than the roof`, p: `Soft metals mark more readily than shingles. So do window screens, and so does fencing. When our inspector documents those alongside the roof, it establishes a coherent picture of what the storm actually did, rather than a single ambiguous observation on one slope.

It also explains why gutters and screens come up so often in our work. A hail event that damaged your roof very probably marked the soft metals and the screens too, and those are separate conversations with your carrier.` },
    { icon: 'storm', h: `Hail is often directional`, p: `This is why we deliberately check several sides of the house rather than photographing one slope and calling it done. Storms come from a direction. If impacts appear on the south and west elevations and nowhere else, that is consistent with a real event, and it is documented that way. If the wear pattern is uniform across all four elevations and there are no impact marks, that is age rather than hail, and we will say so.` },
    { icon: 'ridge', h: `What we will not do`, p: `We will not invent damage to generate a claim. That is fraud, it is common enough in this trade to have given roofing a reputation, and it is a fast way to lose a name in a market this size.

We will also not promise you an insurance outcome. We document what we find, we meet your adjuster at the property, and we make the case for the scope the roof genuinely needs. The decision belongs to your carrier.` },
    { icon: 'ridge', h: `What you get at the end`, p: `The inspector talks through the findings with you on site, so you can ask questions while the evidence is fresh. The written report follows by email. If there is damage and it looks storm related, the next conversation is about your carrier. If there is damage and it is not storm related, the conversation is about <a href="/roof-repair">repair</a> or <a href="/roof-replacement">replacement</a>. And if the roof is fine, we tell you it is fine.` },
  ])}

${statStrip([
    { count: 3, label: 'Drone laps on every roof' },
    { count: 15, label: 'Minutes, typical drone survey' },
    { pre: 'Free', label: 'Assessment, no obligation' },
    { count: 59, label: 'Google reviews, 5.0 rating' },
  ])}

${pageReviews('/roof-inspection', 'What customers say about our inspections')}

${faqSection('Inspection FAQs', 'Roof inspection questions', 'Including what a drone genuinely cannot do.', [
    {
      q: 'Is the roof inspection really free?',
      a: 'Yes. Champion Roofing provides no cost, no obligation roof assessments across the Oklahoma City metro. You are not committing to any work by booking one.\n\nIf the inspection finds that your roof is in good condition, we tell you that and you owe us nothing. We would rather be the company you call in three years than the one that invented a problem today.',
    },
    {
      q: 'What does the drone actually look at?',
      a: 'Our standard procedure is three laps around the roof. The first pass reads the shingle field: granular loss, hail impacts and general wear. The second covers the details that actually leak, meaning chimneys, penetrations, flashing, valleys and eaves, on every elevation. The third looks at soft metals, gutters, window screens and fencing.\n\nWe deliberately look at a couple of different sides of the house, because hail is frequently directional. If only one elevation shows impacts, that tells us something different than damage on all four.',
    },
    {
      q: 'When is a drone not enough?',
      a: 'When the imagery cannot confirm damage, or cannot locate a leak. Aerial photography is very good at showing surface condition and very poor at explaining where water is entering.\n\nIn those cases the inspector gets on the roof and into the attic. A leak showing on a bedroom ceiling has often entered the roof several feet away and travelled along a rafter before dropping, and that is only findable from inside.',
    },
    {
      q: 'How long does an inspection take?',
      a: 'The drone portion is usually ten to fifteen minutes on site. The inspector talks through the findings with you while they are there, and the written report follows by email.\n\nIf a physical roof and attic investigation is needed, it takes longer, because that is a search rather than a survey.',
    },
    {
      q: 'Should I get a roof inspection after every hail storm?',
      a: 'It is worth doing, because hail damage is frequently invisible from the ground. What hail does to a shingle is usually bruising rather than a hole: an impact that fractures the mat and knocks the protective granules loose. The shingle keeps working for a while and then degrades from those points.\n\nEvery neighbourhood in Oklahoma gets hit at some point. Having it looked at costs nothing and gives you a documented record of the roof condition, which matters if you need to make a claim later.',
    },
    {
      q: 'Do you do inspections for home sales?',
      a: 'Yes. A meaningful part of our business comes from referrals by realtors, and roof condition is one of the things that surfaces during a sale.\n\nGetting the roof assessed before a property goes on the market means you find out on your own timetable rather than during negotiation.',
    },
  ], 'light')}

${related([
    { path: '/storm-damage-roof-repair', icon: 'storm', h: 'Storm and hail damage', p: 'What happens after the inspection finds damage.' },
    { path: '/roof-repair', icon: 'wrench', h: 'Roof repair', p: 'Fixing what the inspection found.' },
    { path: '/roof-replacement', icon: 'hammer', h: 'Roof replacement', p: 'When the whole system needs to come off.' },
    { path: '/gutters', icon: 'gutter', h: 'Seamless gutters', p: 'Hail marks soft metals before it marks shingles.' },
  ])}

${ctaBand('Book a free roof inspection', 'Three drone laps, findings on site, and a written report by email. If your roof is fine, we will tell you it is fine.', 'hail-chalk-marks-tan')}
`,
};

/* ========================================================================== */
const stormDamage = {
  path: '/storm-damage-roof-repair',
  priority: '0.9',
  title: 'Storm and Hail Damage Roof Repair Oklahoma City | Champion',
  desc: 'Storm and hail damage roof repair in Oklahoma City. Free damage assessment, documentation for your carrier, and we meet your adjuster on site.',
  ogImage: 'storm-tarp-crew',
  crumbs: [
    { name: 'Residential roofing', path: '/residential-roofing' },
    { name: 'Storm damage roof repair', path: '/storm-damage-roof-repair' },
  ],
  service: {
    name: 'Storm damage roof repair',
    type: 'Storm and hail damage roof repair',
    offers: ['Hail damage assessment', 'Wind damage repair', 'Storm damage roof replacement', 'Insurance claim documentation', 'Adjuster meetings'],
  },
  faqs: [
    {
      q: 'Do you handle the insurance paperwork?',
      a: 'Yes. We take care of the roofing paperwork on the insurance side, meet your adjuster at the property, and work through the approved scope with your carrier where there is disagreement about what the damage actually is.\n\nWhen a replacement is required, we document code related decking conditions for supplementation, so the approved scope reflects what the roof genuinely needs.',
    },
    {
      q: 'Can you guarantee my claim will be approved?',
      a: 'No, and you should be cautious of any roofer who says otherwise. Your carrier and their adjuster determine whether a claim is approved and what it covers. That decision is not ours to make.\n\nWhat we can do is document the damage properly, be at the property when the adjuster is there, and make the case for the scope the roof actually needs. That is genuinely worth having, but it is not a guarantee.',
    },
    {
      q: 'How soon after a storm should I call?',
      a: 'Sooner is better, mainly because insurance policies have time limits on reporting damage and because a documented inspection close to the event is stronger evidence than one months later.\n\nThat said, we do not run a 24 hour emergency dispatch and we do not advertise one. Calls after 5pm go to voicemail. The contact form is open around the clock, and the office schedules an inspector out from there.',
    },
    {
      q: 'What does hail actually do to a roof?',
      a: 'Usually bruising rather than holes. The impact fractures the mat of the shingle and knocks the protective granules loose. From the ground this is invisible; from the roof it looks like scattered dark spots.\n\nThe consequence is that the asphalt underneath is now exposed to ultraviolet light at those points and begins degrading. The failure arrives later, which is why an inspection after a storm matters even when the roof looks fine.',
    },
    {
      q: 'My neighbours all got new roofs. Does that mean I need one?',
      a: 'Not necessarily, and it is worth being careful here. Hail is frequently directional, so one side of a street can be hit meaningfully harder than the other.\n\nWe deliberately check several elevations of your house rather than assuming. If your roof was not damaged, that is what our report will say, even when the houses either side of you are being replaced.',
    },
    {
      q: 'What about the gutters, screens and fencing?',
      a: 'They are part of the picture, and our inspection covers them. Soft metals, window screens and fencing mark more readily than shingles do, so they help establish what a storm actually did.\n\nThey are also frequently damaged in their own right. It is worth having them documented at the same time rather than discovering it after the claim has closed.',
    },
  ],
  body: `
${pageHero({
    crumbs: [
      { name: 'Residential roofing', path: '/residential-roofing' },
      { name: 'Storm damage roof repair', path: '/storm-damage-roof-repair' },
    ],
    eb: 'Storm and hail',
    h1: 'Storm and hail damage roof repair',
    lede: 'Free damage assessment, proper documentation for your carrier, and we meet the adjuster at the property. We cannot promise you an approval, and we will not pretend otherwise.',
    image: 'storm-tarp-crew',
    alt: 'A roofing crew fitting a protective tarp over a storm damaged roof',
  })}


${ticker()}

${split({
    eb: 'What we do',
    title: 'We document it, we meet your adjuster, we make the case',
    body: [
      'Insurance is where most storm damage jobs are actually won or lost, and it is the part homeowners find most frustrating. Seven of the written reviews on our Google profile mention insurance specifically.',
      'Our part is concrete. We inspect and document the damage across every elevation. We are at the property when your adjuster comes out. Where there is disagreement about the scope, we work through it with your carrier. When a replacement is required, we document code related decking conditions for supplementation.',
      'What we will not do is promise you an outcome. Your carrier decides. Any roofer who tells you they can guarantee an approval is telling you something they have no ability to know.',
    ],
    list: [
      ['Damage documented properly.', 'Every elevation, plus soft metals, screens and fencing.'],
      ['We meet the adjuster on site.', 'So the conversation happens with someone who has been on the roof.'],
      ['Scope reconciled with your carrier.', 'Including supplementation for code related decking.'],
      ['No promises about approval.', 'That decision belongs to your insurer.'],
    ],
    image: 'storm-blue-tarp-aerial',
    alt: 'Aerial view of a blue protective tarp covering a storm damaged residential roof',
    reverse: true,
    cta: btn('/roof-inspection', 'How our inspections work', 'btn-dark'),
  })}

${steps('After a storm', 'What the process looks like', 'Five steps, and you know who is doing what at each one.', [
    { h: 'You call or send the form', p: 'Tell us roughly when the storm hit and what you have noticed. Shingles in the yard, a stain, or nothing visible at all.' },
    { h: 'We inspect and document', p: 'Drone flown in three passes, covering the field, the details, and the soft metals, screens and fencing that hail marks first.' },
    { h: 'You decide about a claim', p: 'If the damage looks storm related, the next step is your carrier. You get our report to work from either way.' },
    { h: 'We meet the adjuster', p: 'At the property, so the assessment happens with somebody present who has actually been on the roof.' },
    { h: 'The work goes ahead', p: 'Once the scope is settled, the repair or replacement proceeds. Final payment comes when the carrier sends the final cheque.' },
  ], true)}

${honestBlock(
    'Some things about storm claims that most roofers will not put on a website',
    [
      'Storm season brings a lot of companies into Oklahoma who are not from here and will not be here next year. Some of them are fine. Some of them will tell you whatever gets a contract signed.',
      'We have been on North Council Road since 2004 and we are still going to be here. That shapes what we are willing to say to you.',
    ],
    [
      ['A roofer cannot approve your claim.', 'Only your carrier can. Anyone guaranteeing an approval is overselling.'],
      ['Not every storm causes damage.', 'If your roof is fine, our report will say so even if the whole street is being replaced.'],
      ['Hail is directional.', 'Your neighbour getting a new roof is not evidence about yours.'],
      ['Damage is often invisible from the ground.', 'Which cuts both ways: it can be real when you cannot see it, and absent when you think you can.'],
      ['We do not run emergency dispatch.', 'No 24/7 claim here. Calls after 5pm go to voicemail and the form is always open.'],
    ],
  )}

${detailAccordion('The detail', 'Storm damage roofing in Oklahoma, and what to actually do about it', `Every neighbourhood in Oklahoma gets hit at some point. That is not a sales line, it is the reality of the market, and it is why storm work is a significant part of what any roofing company here does.`, [
    { icon: 'storm', h: `Wind damage versus hail damage`, p: `Wind lifts and tears. It removes shingles outright, creases them where they have folded back, and breaks the seal strips that hold each course down. Wind damage is generally the more visible of the two, and a shingle in your yard is the clearest possible sign of it.

Hail bruises. As described above, the impact fractures the shingle mat and dislodges granules. The shingle is still on the roof, still looks roughly normal from below, and is now degrading. This is the damage type that people miss.` },
    { icon: 'drone', h: `The evidence your inspector should be collecting`, p: `<strong>Impact marks on the field</strong>, across every elevation rather than one convenient slope.<br><strong>Granular loss</strong>, both on the roof and accumulating in the gutters below it.<br><strong>Soft metals</strong>: vents, caps and flashing, which take a visible dent from hail that shingles absorb invisibly.<br><strong>Window screens and fencing</strong>, which mark readily and corroborate the event.<br><strong>Directionality</strong>, meaning which elevations were hit and which were not.` },
    { icon: 'doc', h: `Why the adjuster meeting matters`, p: `An adjuster is assessing a lot of properties in a compressed period after a significant storm. Having a roofer present who has already been on the roof, has documented what is there, and can point to specific evidence changes the quality of that conversation.

Where our assessment and the adjuster's differ, there is usually some back and forth about scope. That is normal. We work through it with the carrier rather than leaving you to negotiate a technical roofing argument on your own.` },
    { icon: 'house', h: `Decking and supplementation`, p: `Decking condition cannot be assessed through an existing roof. When a replacement is approved and the tear off exposes decking that is damaged or does not meet current code, that gets documented for supplementation. It is a normal part of the process and it exists so the approved scope covers what the roof genuinely requires.` },
    { icon: 'ridge', h: `What we install afterwards`, p: `Where it makes sense given the hail exposure here, we try to get customers into a class 4 impact rated shingle, which is built to handle hail better than a standard product. It is worth asking your carrier how they treat impact rated roofing, because some treat it differently on premiums.

We will not install a shingle we are not prepared to warranty ourselves. Every roof we install carries a two year written workmanship warranty, and qualifying customers can purchase upgraded GAF or Malarkey manufacturer warranties in 25 and 30 year options.` },
  ], { tint: true })}

${pageReviews('/storm-damage-roof-repair', 'What customers say after a storm')}

${faqSection('Storm FAQs', 'Storm and hail damage questions', 'Straight answers, including the ones about what we cannot do.', [
    {
      q: 'Do you handle the insurance paperwork?',
      a: 'Yes. We take care of the roofing paperwork on the insurance side, meet your adjuster at the property, and work through the approved scope with your carrier where there is disagreement about what the damage actually is.\n\nWhen a replacement is required, we document code related decking conditions for supplementation, so the approved scope reflects what the roof genuinely needs.',
    },
    {
      q: 'Can you guarantee my claim will be approved?',
      a: 'No, and you should be cautious of any roofer who says otherwise. Your carrier and their adjuster determine whether a claim is approved and what it covers. That decision is not ours to make.\n\nWhat we can do is document the damage properly, be at the property when the adjuster is there, and make the case for the scope the roof actually needs. That is genuinely worth having, but it is not a guarantee.',
    },
    {
      q: 'How soon after a storm should I call?',
      a: 'Sooner is better, mainly because insurance policies have time limits on reporting damage and because a documented inspection close to the event is stronger evidence than one months later.\n\nThat said, we do not run a 24 hour emergency dispatch and we do not advertise one. Calls after 5pm go to voicemail. The contact form is open around the clock, and the office schedules an inspector out from there.',
    },
    {
      q: 'What does hail actually do to a roof?',
      a: 'Usually bruising rather than holes. The impact fractures the mat of the shingle and knocks the protective granules loose. From the ground this is invisible; from the roof it looks like scattered dark spots.\n\nThe consequence is that the asphalt underneath is now exposed to ultraviolet light at those points and begins degrading. The failure arrives later, which is why an inspection after a storm matters even when the roof looks fine.',
    },
    {
      q: 'My neighbours all got new roofs. Does that mean I need one?',
      a: 'Not necessarily, and it is worth being careful here. Hail is frequently directional, so one side of a street can be hit meaningfully harder than the other.\n\nWe deliberately check several elevations of your house rather than assuming. If your roof was not damaged, that is what our report will say, even when the houses either side of you are being replaced.',
    },
    {
      q: 'What about the gutters, screens and fencing?',
      a: 'They are part of the picture, and our inspection covers them. Soft metals, window screens and fencing mark more readily than shingles do, so they help establish what a storm actually did.\n\nThey are also frequently damaged in their own right. It is worth having them documented at the same time rather than discovering it after the claim has closed.',
    },
  ], 'light')}

${related([
    { path: '/roof-inspection', icon: 'drone', h: 'Roof inspection', p: 'The three lap survey that documents the damage.' },
    { path: '/roof-replacement', icon: 'hammer', h: 'Roof replacement', p: 'When the storm took the whole roof with it.' },
    { path: '/gutters', icon: 'gutter', h: 'Seamless gutters', p: 'Hail marks soft metals before it marks shingles.' },
    { path: '/window-replacement', icon: 'screen', h: 'Windows and screens', p: 'Frequently damaged in the same storm.' },
  ])}

${ctaBand('Had a storm? Get it documented', 'A free assessment, every elevation photographed, and a written report you can take to your carrier.', 'storm-tree-on-roof')}
`,
};

/* ========================================================================== */
const metalRoofing = {
  path: '/metal-roofing',
  priority: '0.8',
  title: 'Metal Roofing Oklahoma City | Standing Seam and Shingle',
  desc: 'Metal roofing in Oklahoma City. Standing seam, metal shingle and corrugated systems for homes and commercial buildings from a GAF certified contractor.',
  ogImage: 'metal-standing-seam-cabin',
  crumbs: [
    { name: 'Residential roofing', path: '/residential-roofing' },
    { name: 'Metal roofing', path: '/metal-roofing' },
  ],
  service: {
    name: 'Metal roofing',
    type: 'Metal roofing',
    offers: ['Standing seam metal roofing', 'Metal shingle roofing', 'Corrugated metal roofing', 'Commercial metal roofing', 'Metal roof repair'],
  },
  faqs: [
    {
      q: 'What metal roofing systems do you install?',
      a: 'Standing seam, metal shingle and corrugated metal systems, on both residential and commercial buildings.\n\nStanding seam is the concealed fastener system most people picture when they think of a modern metal roof. Metal shingle mimics the appearance of other materials while behaving like metal. Corrugated is the exposed fastener system more common on agricultural and industrial buildings.',
    },
    {
      q: 'Is a metal roof a good idea in Oklahoma?',
      a: 'It suits a lot of Oklahoma buildings, particularly ones taking direct weather with long uninterrupted roof runs. Metal handles wind well and sheds water quickly.\n\nWhere it needs thought is complexity. A roof with a lot of hips, valleys, dormers and penetrations demands considerably more detailing in metal than in shingle, and that detailing is where metal roofs succeed or fail.',
    },
    {
      q: 'Does hail damage metal roofing?',
      a: 'Hail can dent metal panels. Whether that matters depends on the system, the gauge and how you feel about the appearance, because a dented panel is frequently still perfectly functional.\n\nThis is worth discussing honestly before you commit, and it is a conversation about your specific building and your insurance carrier rather than a general claim about the material.',
    },
    {
      q: 'Are metal roofs noisy in rain?',
      a: 'Considerably less than people expect. A metal roof over decking and underlayment on a house with an insulated attic behaves very differently from a metal panel over open framing on a barn, which is where the reputation comes from.',
    },
    {
      q: 'Can you install metal on a commercial building?',
      a: 'Yes. Metal is common on industrial, agricultural and some commercial buildings around the metro, particularly where the roof has long straightforward runs.\n\nFor low slope commercial roofs, a membrane system is usually the better answer. See our <a href="/commercial">commercial roofing</a> page for that.',
    },
  ],
  body: `
${pageHero({
    crumbs: [
      { name: 'Residential roofing', path: '/residential-roofing' },
      { name: 'Metal roofing', path: '/metal-roofing' },
    ],
    eb: 'Metal roofing',
    h1: 'Metal roofing in Oklahoma City',
    lede: 'Standing seam, metal shingle and corrugated systems for homes, outbuildings and commercial properties. The detailing is what decides whether a metal roof lasts, so that is where the work goes.',
    image: 'metal-standing-seam-cabin',
    alt: 'A black standing seam metal roof on a timber clad home',
  })}


${infoGrid('The systems', 'Three metal systems, three different jobs', 'Which one suits your building depends on its slope, its complexity and what it is for.', [
    { icon: 'metal', h: 'Standing seam', p: 'Concealed fastener panels with raised seams at the joints. The system most people picture when they think of a modern metal roof, and the one that handles thermal movement best.' },
    { icon: 'tile', h: 'Metal shingle', p: 'Metal formed to read like shingle, tile or shake from the ground while behaving like metal. Useful where an appearance needs to match a neighbourhood but the performance of metal is wanted.' },
    { icon: 'building', h: 'Corrugated', p: 'Exposed fastener panels, most common on agricultural, industrial and outbuilding applications. Straightforward, economical, and appropriate where appearance is secondary.' },
  ])}

${split({
    eb: 'Where it goes wrong',
    title: 'Metal roofs fail at the details, not in the middle of a panel',
    body: [
      'A metal panel in the open field of a roof will outlast most of the things around it. What fails is the transitions: the ridges, the valleys, the eaves, the places where a panel meets a wall or a chimney, and every penetration through the surface.',
      'Metal also moves. It expands and contracts through Oklahoma\'s temperature range considerably more than an asphalt shingle does, and a system that does not allow for that movement will work its fasteners loose or oil can across the panels.',
      'That is why panel layout, fastening method and flashing get planned before anything is ordered rather than resolved on the roof. It is slower up front and it is the entire difference in outcome.',
    ],
    list: [
      ['Panel layout planned first.', 'Before material is ordered, not once it is on site.'],
      ['Thermal movement allowed for.', 'Metal moves a lot more than shingle through an Oklahoma year.'],
      ['Penetrations detailed properly.', 'Every pipe, vent and unit that comes through the plane.'],
      ['Transitions in metal, not sealant.', 'Sealant is a supplement, never the primary defence.'],
    ],
    image: 'crew-metal-scaffold',
    alt: 'A roofing crew installing metal panels with scaffolding on a residential roof',
    reverse: true,
    tint: true,
  })}

${detailAccordion('The detail', 'Choosing metal roofing for an Oklahoma property', `Metal is a genuinely good answer for a lot of buildings in this state, and a poor answer for some. It is worth being clear about which is which before you spend the money.`, [
    { icon: 'metal', h: `Where metal makes sense`, p: `<strong>Long uninterrupted runs.</strong> A simple gable roof with few penetrations is close to the ideal metal application.<br><strong>Buildings taking direct weather.</strong> Metal sheds water fast and handles wind well when the fastening is correct.<br><strong>Outbuildings, shops and agricultural structures.</strong> Corrugated systems are economical and appropriate here.<br><strong>Modern and traditional elevations alike.</strong> Standing seam suits contemporary architecture; metal shingle covers more traditional appearances.` },
    { icon: 'pin', h: `Where it needs more thought`, p: `<strong>Complex roofs.</strong> Many hips, valleys, dormers and penetrations mean substantially more custom flashing work, and the cost and risk both rise with complexity.<br><strong>Hail exposure.</strong> Metal can dent. Whether a dent matters is partly functional and largely aesthetic, and it is a conversation worth having before rather than after.<br><strong>Neighbourhood context.</strong> On some streets around the metro a metal roof will look out of place, and on some it will look exactly right.` },
    { icon: 'building', h: `Metal on low slope commercial roofs`, p: `Metal is common on industrial and agricultural buildings around Oklahoma City, and it appears on plenty of commercial properties with steeper roof sections. For genuinely low slope commercial roofs, a membrane system is usually the better answer, and TPO is what we most often recommend. That is covered in detail on our <a href="/commercial/tpo-roofing">TPO roofing</a> page.` },
    { icon: 'ridge', h: `What we will tell you`, p: `If metal is not the right system for your building, we will say so. That happens, and it is a better outcome than selling you something expensive that will need attention in five years. The company has been here since 2004 and intends to be here in another twenty, which is a strong incentive to give you a straight answer now.` },
  ])}

${faqSection('Metal roofing FAQs', 'Metal roof questions', 'Including the honest answer about hail.', [
    {
      q: 'What metal roofing systems do you install?',
      a: 'Standing seam, metal shingle and corrugated metal systems, on both residential and commercial buildings.\n\nStanding seam is the concealed fastener system most people picture when they think of a modern metal roof. Metal shingle mimics the appearance of other materials while behaving like metal. Corrugated is the exposed fastener system more common on agricultural and industrial buildings.',
    },
    {
      q: 'Is a metal roof a good idea in Oklahoma?',
      a: 'It suits a lot of Oklahoma buildings, particularly ones taking direct weather with long uninterrupted roof runs. Metal handles wind well and sheds water quickly.\n\nWhere it needs thought is complexity. A roof with a lot of hips, valleys, dormers and penetrations demands considerably more detailing in metal than in shingle, and that detailing is where metal roofs succeed or fail.',
    },
    {
      q: 'Does hail damage metal roofing?',
      a: 'Hail can dent metal panels. Whether that matters depends on the system, the gauge and how you feel about the appearance, because a dented panel is frequently still perfectly functional.\n\nThis is worth discussing honestly before you commit, and it is a conversation about your specific building and your insurance carrier rather than a general claim about the material.',
    },
    {
      q: 'Are metal roofs noisy in rain?',
      a: 'Considerably less than people expect. A metal roof over decking and underlayment on a house with an insulated attic behaves very differently from a metal panel over open framing on a barn, which is where the reputation comes from.',
    },
    {
      q: 'Can you install metal on a commercial building?',
      a: 'Yes. Metal is common on industrial, agricultural and some commercial buildings around the metro, particularly where the roof has long straightforward runs.\n\nFor low slope commercial roofs, a membrane system is usually the better answer. See our commercial roofing page for that.',
    },
  ])}

${related([
    { path: '/specialty-roofing', icon: 'tile', h: 'Tile and slate', p: 'The other end of the specialty spectrum.' },
    { path: '/roof-replacement', icon: 'hammer', h: 'Roof replacement', p: 'Moving from shingle to metal.' },
    { path: '/commercial', icon: 'building', h: 'Commercial roofing', p: 'Metal and membrane systems for buildings.' },
    { path: '/our-work', icon: 'award', h: 'Our work', p: 'Recent Champion Roofing projects.' },
  ])}

${ctaBand('Thinking about a metal roof?', 'We will look at the building and tell you honestly whether metal is the right system for it.', 'metal-dark-chimney-field')}
`,
};

/* ========================================================================== */
const specialtyRoofing = {
  path: '/specialty-roofing',
  priority: '0.85',
  title: 'Tile, Slate and Specialty Roofing Oklahoma City | Champion',
  desc: 'Clay, concrete and synthetic tile, natural and synthetic slate, and shake roofing in Oklahoma City. DaVinci Masterpiece contractor, first Brava installer in OK.',
  ogImage: 'specialty-clay-tile-home',
  crumbs: [
    { name: 'Residential roofing', path: '/residential-roofing' },
    { name: 'Specialty and tile roofing', path: '/specialty-roofing' },
  ],
  service: {
    name: 'Specialty and tile roofing',
    type: 'Tile and slate roofing',
    offers: ['Clay tile roofing', 'Concrete tile roofing', 'Composite and synthetic tile roofing', 'Natural slate roofing', 'Synthetic slate roofing', 'Wood and synthetic shake roofing'],
  },
  faqs: [
    {
      q: 'Why do so few roofers in Oklahoma City quote tile?',
      a: 'Because it is expensive and unforgiving. In the owner\'s words: a lot of people do not want to do it because it costs so much, and if you make a mistake it is going to be a big deal.\n\nThat is genuinely the situation. Tile and slate materials cost a great deal more than asphalt, the install is slower, and errors are expensive to correct. It is also why there is not much competition for this work in the metro, and why we do a lot of it.',
    },
    {
      q: 'What makes a correct tile installation different from an ordinary roof?',
      a: 'Almost everything that matters happens before the tile goes down. Underlayment, batten layout and fastening determine whether the roof performs, and the flashing at every hip, valley and penetration has to be detailed by hand rather than filled with sealant.\n\nTile is also heavy and brittle. Walking it incorrectly damages it, so how the crew moves on the roof during the install is part of the method rather than an afterthought.',
    },
    {
      q: 'What specialty materials do you install?',
      a: 'Clay, concrete, composite and synthetic tile. Natural slate and synthetic slate. Wood shake and synthetic shake.\n\nWe are a DaVinci Masterpiece contractor and we work with Brava and Grand Manor products among others. Champion Roofing was the first company in Oklahoma to install Brava synthetic roofing.',
    },
    {
      q: 'Can you repair a tile or slate roof rather than replace it?',
      a: 'Frequently, yes, and it is a large part of what we do on these roofs. The difficulty is usually matching: finding a product that matches the existing roof closely enough that the repair does not read as a patch from the street.\n\nWe maintain specialty roofs in Nichols Hills, Gaillardia, Rose Creek, Cobblestone and Heritage Hills, so this is routine work for us rather than an unusual request.',
    },
    {
      q: 'Is synthetic tile as good as the real thing?',
      a: 'For a lot of applications it is the better choice, which is why it has become so common on the higher end streets around the metro. Synthetic products are lighter than clay, concrete or natural slate, which matters on structures that were not designed for the load, and they are considerably less brittle.\n\nThey are not identical to natural material and some people prefer the real thing. That is a genuine preference rather than a technical argument, and we install both.',
    },
    {
      q: 'Were you really the first to install Brava in Oklahoma?',
      a: 'Yes. The owner met the product\'s founder, who came out to a church project intending to demonstrate the installation, and by the end of it our crew had worked out the method and were showing him.\n\nIt was a difficult install and the crew kept at it until they had it right. That is roughly how specialty work goes here.',
    },
  ],
  body: `
${pageHero({
    crumbs: [
      { name: 'Residential roofing', path: '/residential-roofing' },
      { name: 'Specialty and tile roofing', path: '/specialty-roofing' },
    ],
    eb: 'Specialty roofing',
    h1: 'Tile, slate and specialty roofing',
    lede: 'Clay, concrete, composite and synthetic tile. Natural and synthetic slate. Wood and synthetic shake. This is the work we are best known for, and the work most roofers in this market will not quote.',
    image: 'specialty-clay-tile-home',
    alt: 'A clay tile roof on a large home in the Oklahoma City metro',
  })}


${ticker()}

${compareSection()}

${split({
    eb: 'Why us',
    title: 'There is not a lot of competition for this work, and that is not an accident',
    body: [
      'Tile and slate are expensive materials, the installation is slow, and mistakes are costly to put right. Most roofing companies in this market decline the work rather than take the risk. The owner is direct about why we do not: <strong>I just knew how to install it, so it never was a thing. I never thought twice about it.</strong>',
      'Champion Roofing is a DaVinci Masterpiece contractor and won the DaVinci Project of the Year award twice, in 2021 for the Donald W. Reynolds Complex at Bethany Children\'s Health Center and again in 2023 for Gaillardia Office Park.',
      'We were also the first company in Oklahoma to install Brava synthetic roofing. The product\'s founder came out to a church project to show our crew how it was done, and by the end of the job our crew were showing him.',
    ],
    list: [
      ['DaVinci Masterpiece Contractor.', 'With Project of the Year awards in 2021 and 2023.'],
      ['First Brava installation in Oklahoma.', 'On a church project, alongside the product\'s founder.'],
      ['Roofs maintained across the metro.', 'Nichols Hills, Gaillardia, Rose Creek, Cobblestone and Heritage Hills.'],
      ['Repairs as well as installations.', 'Including matching existing product on older roofs.'],
    ],
    image: 'real-tile-during',
    alt: 'A Champion Roofing crew member setting clay tile at the ridge during installation',
    reverse: true,
    floatCard: { icon: 'award', title: 'Project of the Year', sub: 'DaVinci Masterpiece, 2021 and 2023' },
  })}

${infoGrid('Materials', 'What we install', 'Six specialty material families, each with different structural and detailing requirements.', [
    { icon: 'tile', h: 'Clay tile', p: 'The traditional Mediterranean and Spanish profile. Beautiful, heavy, brittle, and entirely dependent on what sits underneath it.' },
    { icon: 'tile', h: 'Concrete tile', p: 'Similar profiles and appearance to clay with different weight and cost characteristics. Common across the metro.' },
    { icon: 'shield', h: 'Composite and synthetic tile', p: 'Lighter and considerably less brittle than natural material, which matters on structures not designed for the load. DaVinci, Brava and Grand Manor among others.' },
    { icon: 'award', h: 'Natural slate', p: 'The traditional material on older and higher end properties. Long lived and completely unforgiving of a rushed installation.' },
    { icon: 'metal', h: 'Synthetic slate', p: 'The appearance of slate with a fraction of the weight. Frequently the right answer on a structure that cannot carry natural stone.' },
    { icon: 'leaf', h: 'Wood and synthetic shake', p: 'The traditional shake appearance, in natural cedar or in a synthetic product that removes the maintenance and fire considerations.' },
  ], { tint: true })}

${stickyFeature('The method', 'What a correct tile installation actually involves', `The visible part of a tile roof is the least important part of it. What decides whether it performs for decades is entirely underneath, and invisible the moment the last tile is set.`, [
    { img: 'install-battens-crew', alt: `A crew laying tile over battens on a roof`, h: `Underlayment, battens and layout`, p: `On a tile roof the underlayment does far more work than it does under asphalt. Tile sheds the bulk of the water, but wind driven rain gets underneath it routinely, and the underlayment is what actually keeps the building dry.` },
    { img: 'specialty-tile-hands', alt: `Gloved hands setting a clay tile into place`, h: `Fastening, flashing and how the crew moves`, p: `Tile has to be secured against Oklahoma wind loads without cracking the material or creating a path for water. Every hip, valley, wall junction and penetration is then flashed in metal and detailed by hand. On a complex tile roof there are a great many of these.` },
    { img: 'real-tile-complete', alt: `A completed clay tile roof on a stucco home in Oklahoma City`, h: `Repair, matching and product we trust`, p: `A lot of our specialty work is repair rather than installation, and the hard part is matching: finding product close enough to what is there that the repair does not read as a patch from the street. We maintain specialty roofs in Nichols Hills, Gaillardia, Rose Creek, Cobblestone and Heritage Hills.` },
  ])}

${statStrip([
    { count: 2, label: 'DaVinci Project of the Year awards' },
    { pre: '1st', label: 'Brava install in Oklahoma' },
    { count: 22, label: 'Years roofing Oklahoma City' },
    { count: 5, label: 'Metro neighbourhoods we maintain' },
  ])}

${faqSection('Specialty FAQs', 'Tile and slate questions', 'The things people ask when they have a roof most contractors will not touch.', [
    {
      q: 'Why do so few roofers in Oklahoma City quote tile?',
      a: 'Because it is expensive and unforgiving. In the owner\'s words: a lot of people do not want to do it because it costs so much, and if you make a mistake it is going to be a big deal.\n\nThat is genuinely the situation. Tile and slate materials cost a great deal more than asphalt, the install is slower, and errors are expensive to correct. It is also why there is not much competition for this work in the metro, and why we do a lot of it.',
    },
    {
      q: 'What makes a correct tile installation different from an ordinary roof?',
      a: 'Almost everything that matters happens before the tile goes down. Underlayment, batten layout and fastening determine whether the roof performs, and the flashing at every hip, valley and penetration has to be detailed by hand rather than filled with sealant.\n\nTile is also heavy and brittle. Walking it incorrectly damages it, so how the crew moves on the roof during the install is part of the method rather than an afterthought.',
    },
    {
      q: 'What specialty materials do you install?',
      a: 'Clay, concrete, composite and synthetic tile. Natural slate and synthetic slate. Wood shake and synthetic shake.\n\nWe are a DaVinci Masterpiece contractor and we work with Brava and Grand Manor products among others. Champion Roofing was the first company in Oklahoma to install Brava synthetic roofing.',
    },
    {
      q: 'Can you repair a tile or slate roof rather than replace it?',
      a: 'Frequently, yes, and it is a large part of what we do on these roofs. The difficulty is usually matching: finding a product that matches the existing roof closely enough that the repair does not read as a patch from the street.\n\nWe maintain specialty roofs in Nichols Hills, Gaillardia, Rose Creek, Cobblestone and Heritage Hills, so this is routine work for us rather than an unusual request.',
    },
    {
      q: 'Is synthetic tile as good as the real thing?',
      a: 'For a lot of applications it is the better choice, which is why it has become so common on the higher end streets around the metro. Synthetic products are lighter than clay, concrete or natural slate, which matters on structures that were not designed for the load, and they are considerably less brittle.\n\nThey are not identical to natural material and some people prefer the real thing. That is a genuine preference rather than a technical argument, and we install both.',
    },
    {
      q: 'Were you really the first to install Brava in Oklahoma?',
      a: 'Yes. The owner met the product\'s founder, who came out to a church project intending to demonstrate the installation, and by the end of it our crew had worked out the method and were showing him.\n\nIt was a difficult install and the crew kept at it until they had it right. That is roughly how specialty work goes here.',
    },
  ])}

${related([
    { path: '/our-work', icon: 'award', h: 'Our work', p: 'Real Champion Roofing projects across the metro.' },
    { path: '/metal-roofing', icon: 'metal', h: 'Metal roofing', p: 'Standing seam, metal shingle and corrugated.' },
    { path: '/roof-repair', icon: 'wrench', h: 'Roof repair', p: 'Including repairs to existing tile and slate.' },
    { path: '/about', icon: 'users', h: 'About us', p: 'Who Champion Roofing actually is.' },
  ])}

${ctaBand('Have a tile or slate roof?', 'Most contractors in this market will not quote one. We will come and look at it, and the assessment costs nothing.', 'specialty-tile-hands')}
`,
};

export default [roofInspection, stormDamage, metalRoofing, specialtyRoofing];
