import { BIZ } from '../data.mjs';
import { btn } from '../lib.mjs';
import {
  pageReviews,
  stickyFeature,
  editorialStack,
  pageHero, statStrip, steps, faqSection, split, infoGrid,
  detailAccordion, related, asideCard, ctaBand, ticker,
} from '../sections.mjs';

const CITIES = BIZ.cities.map((c) => c.name).join(', ').replace(/, ([^,]*)$/, ' and $1');

const ASIDE = asideCard('At a glance', [
  { icon: 'clock', h: 'Assessment', p: 'Free, no obligation, usually inside a few days.' },
  { icon: 'gutter', h: 'Gutter work', p: 'Seamless installation, repair, maintenance and leaf protection.' },
  { icon: 'shield', h: 'Warranty', p: 'Two year written workmanship warranty on installed work.' },
  { icon: 'star', h: 'Reviews', p: '13 Google reviews mention gutters by name.' },
  { icon: 'pin', h: 'Where', p: CITIES },
]);

/* ========================================================================== */
const gutters = {
  path: '/gutters',
  priority: '0.9',
  title: 'Seamless Gutters Oklahoma City | Install, Repair | Champion',
  desc: 'Seamless gutter installation, repair and leaf protection in Oklahoma City. The service our customers mention most after the roof itself. Free assessment.',
  ogImage: 'gutter-worker-install',
  crumbs: [{ name: 'Seamless gutters', path: '/gutters' }],
  service: {
    name: 'Seamless gutters',
    type: 'Gutter installation and repair',
    offers: ['Seamless gutter installation', 'Gutter repair and maintenance', 'Gutter replacement', 'Leaf protection installation', 'Downspout installation'],
  },
  faqs: [
    {
      q: 'What makes a seamless gutter better than a sectional one?',
      a: 'Joints are where gutters leak. A sectional gutter has a joint every few feet, and every one of those is a seal that will eventually fail. A seamless gutter is formed to the length of the run, so the only joints are at corners and outlets.\n\nFewer joints means fewer future leaks, and it also reads as a cleaner line along the fascia.',
    },
    {
      q: 'Should the gutters be done at the same time as the roof?',
      a: 'It is usually the sensible order, yes. The crew is already there, the eave detail is exposed, and the relationship between the roof edge, the drip edge and the gutter is easier to get right when both are being handled together.\n\nIt also avoids the situation where a new roof is finished and the old gutters are quietly still failing underneath it.',
    },
    {
      q: 'Does hail damage gutters?',
      a: 'Frequently, and often more visibly than it damages the roof. Gutters and other soft metals dent under hail impact that a shingle absorbs invisibly, which is exactly why our inspection covers them.\n\nIf you are making a storm claim, the gutters are worth having documented at the same time rather than discovering the damage after the claim has closed.',
    },
    {
      q: 'Is leaf protection worth fitting?',
      a: 'It depends on what is above the gutter. On a property with mature trees overhanging the roof, leaf protection saves a recurring maintenance job and prevents the blockages that cause water to back up at the eave.\n\nOn a property with nothing overhanging it, the case is weaker. We will tell you which situation you are in rather than fitting it as a default upsell.',
    },
    {
      q: 'What happens when gutters stop working?',
      a: 'Water stops leaving the roof in a controlled way. It backs up at the eave, gets behind the fascia, and finds the decking. Over time that becomes a rot problem in the roof edge rather than a gutter problem.\n\nIt also means water discharging directly at the base of the wall rather than away from the structure, which is a foundation and landscaping issue as much as a roofing one.',
    },
    {
      q: 'Do you repair gutters or only replace them?',
      a: 'Both. Plenty of gutter problems are a failed seal, a loose hanger, a damaged section or a blocked downspout, and none of those require replacing a whole run.\n\nWhere the gutters are old, damaged along their length, or undersized for the roof area they are draining, replacement is the better spend and we will say so.',
    },
  ],
  body: `
${pageHero({
    crumbs: [{ name: 'Seamless gutters', path: '/gutters' }],
    eb: 'Gutters',
    h1: 'Seamless gutters in Oklahoma City',
    lede: 'Seamless gutter installation, repair, maintenance and leaf protection. This is the service our customers bring up most often after the roof itself, and it gets treated accordingly.',
    image: 'gutter-downspout-white',
    alt: 'A new white seamless gutter and downspout on an Oklahoma City home against a clear sky',
  })}


${ticker()}

${split({
    eb: 'Why this page exists',
    title: 'Thirteen reviews mention gutters. That is not a footnote service.',
    body: [
      'When Google analysed the reviews on our profile, gutters came out as the single most common topic after roofing itself. Thirteen reviews mention gutters by name. Another six mention gutter replacement specifically.',
      'A lot of roofing companies treat gutters as an afterthought, a line item added at the end of a roof job. Our customers evidently do not experience it that way, so it gets a real page, a real process, and the same standard as everything else.',
      'The practical reason is straightforward: gutters are the part of the roof system that people actually see and interact with from the ground. When they work, nobody thinks about them. When they do not, it shows up on the fascia, in the landscaping and at the foundation.',
    ],
    list: [
      ['Seamless, formed to the run.', 'Joints only at corners and outlets, not every few feet.'],
      ['Repair as well as replacement.', 'A failed seal is not a reason to replace a whole run.'],
      ['Leaf protection where it earns its place.', 'Fitted to the gutter profile you actually have.'],
      ['Assessed with the roof.', 'Because hail marks soft metals before it marks shingles.'],
    ],
    image: 'gutter-worker-install',
    alt: 'A worker installing a seamless gutter along the eave of a house',
    reverse: true,
    cta: btn('/contact', 'Book a free assessment', 'btn-dark'),
    floatCard: { icon: 'star', title: '13 reviews mention gutters', sub: 'The top non roofing topic on our profile' },
  })}

${infoGrid('What we do', 'Gutter services', 'Installation, repair and protection, on their own or alongside a roof.', [
    { icon: 'gutter', h: 'Seamless gutter installation', p: 'Formed to the length of the run so the only joints are at corners and outlets. Sized to the roof area actually draining into them.' },
    { icon: 'wrench', h: 'Gutter repair', p: 'Failed seals, loose or missing hangers, damaged sections and blocked downspouts. Most gutter problems do not require a full replacement.' },
    { icon: 'leaf', h: 'Leaf protection', p: 'Fitted to the gutter profile you have. Worth doing where trees overhang the roof, less so where nothing does, and we will tell you which.' },
    { icon: 'storm', h: 'Storm damage assessment', p: 'Gutters dent under hail that a shingle absorbs invisibly. If you are claiming, they should be documented at the same time.' },
    { icon: 'house', h: 'Gutters with a new roof', p: 'Handled together so the roof edge, drip edge and gutter relationship is right, rather than leaving old gutters under a new roof.' },
    { icon: 'search', h: 'Maintenance', p: 'Periodic clearing and checking, particularly on properties with mature trees. Cheaper than dealing with what a blocked gutter does to a fascia.' },
  ], { tint: true })}

${stickyFeature('The detail', 'What gutters actually do, and what happens when they stop', `Gutters are the least glamorous part of a roof system and one of the more consequential. When they stop working, the damage does not stay at the gutter.`, [
    { img: 'gutter-downspout-white', alt: `A new white seamless gutter and downspout against a clear sky`, h: `Where the water goes instead`, p: `When a gutter blocks or fails, water backs up at the eave, gets behind the fascia and reaches the roof decking at its most vulnerable edge. That becomes a rot problem in the roof structure, and it develops quietly over seasons.` },
    { img: 'gutter-worker-install', alt: `A worker installing a seamless gutter along a roof eave`, h: `Seamless, and sized to the roof`, p: `Every joint is a seal, and every seal has a shorter life than the metal it joins. A sectional run has a joint every few feet. A seamless gutter is formed to the length of the run, so the only joints are at corners and outlets.` },
    { img: 'gutter-leaf-guard', alt: `Leaf protection being fitted over a residential gutter`, h: `Leaf protection, honestly`, p: `On a property with mature trees overhanging the roof, leaf protection removes a recurring maintenance job and prevents the blockages that cause everything above. On a property with clear sky above the gutters, the case is considerably weaker.` },
  ])}

${steps('How it runs', 'Gutter work, start to finish', 'Same process as the roof, scaled to the job.', [
    { h: 'Assessment', p: 'We look at the gutters, the eave condition, the roof area draining into them and what is overhanging the property.' },
    { h: 'Recommendation and price', p: 'Repair or replacement, with sizing and downspout placement based on the roof rather than on what was there before.' },
    { h: 'Installation', p: 'Seamless runs formed on site, hung correctly, with the drip edge and roof edge relationship detailed properly.' },
    { h: 'Cleanup', p: 'Site cleared, offcuts and fixings collected, and magnetic sweeps where the work involved the roof.' },
  ])}


${pageReviews('/gutters', 'What customers say about our gutter work')}

${faqSection('Gutter FAQs', 'Gutter questions', 'Including when leaf protection is not worth fitting.', [
    {
      q: 'What makes a seamless gutter better than a sectional one?',
      a: 'Joints are where gutters leak. A sectional gutter has a joint every few feet, and every one of those is a seal that will eventually fail. A seamless gutter is formed to the length of the run, so the only joints are at corners and outlets.\n\nFewer joints means fewer future leaks, and it also reads as a cleaner line along the fascia.',
    },
    {
      q: 'Should the gutters be done at the same time as the roof?',
      a: 'It is usually the sensible order, yes. The crew is already there, the eave detail is exposed, and the relationship between the roof edge, the drip edge and the gutter is easier to get right when both are being handled together.\n\nIt also avoids the situation where a new roof is finished and the old gutters are quietly still failing underneath it.',
    },
    {
      q: 'Does hail damage gutters?',
      a: 'Frequently, and often more visibly than it damages the roof. Gutters and other soft metals dent under hail impact that a shingle absorbs invisibly, which is exactly why our inspection covers them.\n\nIf you are making a storm claim, the gutters are worth having documented at the same time rather than discovering the damage after the claim has closed.',
    },
    {
      q: 'Is leaf protection worth fitting?',
      a: 'It depends on what is above the gutter. On a property with mature trees overhanging the roof, leaf protection saves a recurring maintenance job and prevents the blockages that cause water to back up at the eave.\n\nOn a property with nothing overhanging it, the case is weaker. We will tell you which situation you are in rather than fitting it as a default upsell.',
    },
    {
      q: 'What happens when gutters stop working?',
      a: 'Water stops leaving the roof in a controlled way. It backs up at the eave, gets behind the fascia, and finds the decking. Over time that becomes a rot problem in the roof edge rather than a gutter problem.\n\nIt also means water discharging directly at the base of the wall rather than away from the structure, which is a foundation and landscaping issue as much as a roofing one.',
    },
    {
      q: 'Do you repair gutters or only replace them?',
      a: 'Both. Plenty of gutter problems are a failed seal, a loose hanger, a damaged section or a blocked downspout, and none of those require replacing a whole run.\n\nWhere the gutters are old, damaged along their length, or undersized for the roof area they are draining, replacement is the better spend and we will say so.',
    },
  ], 'light')}

${related([
    { path: '/roof-inspection', icon: 'drone', h: 'Roof inspection', p: 'Our inspection covers gutters and soft metals.' },
    { path: '/storm-damage-roof-repair', icon: 'storm', h: 'Storm damage', p: 'Gutters dent before shingles show a mark.' },
    { path: '/window-replacement', icon: 'screen', h: 'Windows and screens', p: 'Another soft component hail marks first.' },
    { path: '/roof-replacement', icon: 'hammer', h: 'Roof replacement', p: 'Gutters are best handled with the roof.' },
  ])}

${ctaBand('Get the gutters looked at', 'Free assessment, whether it is a repair, a replacement or just leaf protection.', 'gutter-leaf-guard')}
`,
};

/* ========================================================================== */
const windows = {
  path: '/window-replacement',
  priority: '0.7',
  title: 'Window Replacement Oklahoma City | Storm Damage | Champion',
  desc: 'Window replacement in Oklahoma City. Storm damaged windows and screens assessed with the roof, documented for your claim, and replaced by the same crew.',
  ogImage: 'window-install-exterior-two',
  crumbs: [{ name: 'Window replacement', path: '/window-replacement' }],
  service: {
    name: 'Window replacement',
    type: 'Window replacement and screen replacement',
    offers: ['Window replacement', 'Storm damaged window replacement', 'Window screen replacement', 'Window screen repair'],
  },
  faqs: [
    {
      q: 'Why does a roofing company replace windows?',
      a: 'Because the same storm that damages a roof damages the windows beneath it, and because the exterior envelope of a house is one system. Hail marks window frames and screens before it visibly marks a shingle, and wind driven debris finds glass.\n\nOur inspection already covers windows and screens as part of establishing what a storm did to a property. Being able to replace them afterwards, with the same crew, the same foreman and the same warranty paperwork, is the sensible continuation of that rather than a separate trade you have to coordinate yourself.',
    },
    {
      q: 'Is window damage covered by a storm claim?',
      a: 'It can be, and it is worth documenting at the same time as the roof rather than afterwards. Once a claim has been settled it is considerably harder to add to it.\n\nAs with any insurance question, the decision belongs to your carrier. What we can do is make sure window and screen damage is recorded properly while the adjuster is still involved, alongside the roof, gutters and soft metals.',
    },
    {
      q: 'Do you replace windows without roof work?',
      a: 'Yes. Window replacement is a real service and we will come out for it on its own.\n\nThe honest note is that we are a roofing company first. For a whole house window project with no roofing or storm component, it is worth asking whether a window specialist is a better fit for you. We will tell you if we think so.',
    },
    {
      q: 'Can you match existing windows and screens?',
      a: 'Generally, yes. Frame profile, glazing, grid pattern, colour and screen mesh all vary, and matching what is already on the house matters when only some units were damaged.\n\nWe look at what you have before quoting rather than assuming a standard product.',
    },
    {
      q: 'What about just the screens?',
      a: 'Screens are a smaller job and we do them on their own. They are among the first things a hail storm marks, so they are part of every inspection, and replacing them afterwards is routine.\n\nIf the damage is limited to screens, you do not need to replace the window to get them sorted.',
    },
  ],
  body: `
${pageHero({
    crumbs: [{ name: 'Window replacement', path: '/window-replacement' }],
    eb: 'Windows',
    h1: 'Window replacement in Oklahoma City',
    lede: 'The storm that damages a roof damages the windows under it. We assess them together, document them together for your claim, and replace them with the same crew.',
    image: 'window-install-exterior-two',
    alt: 'Two installers fitting a replacement window into the exterior wall of a home',
  })}

${split({
    eb: 'Why we do this',
    title: 'The exterior of a house is one system',
    body: [
      'When our inspector flies the third lap around a roof, they are looking at soft metals, gutters, window screens, frames and fencing. Those materials mark under hail impacts that an asphalt shingle absorbs without showing anything from the ground, and wind driven debris finds glass.',
      'That makes windows genuinely useful when we are working out what a storm actually did to a property. It also means they are frequently damaged in their own right, and worth documenting while your adjuster is still involved rather than after a claim has been settled.',
      'Replacing them afterwards is the natural continuation. Same foreman, same site protection, same cleanup, and one set of paperwork instead of two trades you have to coordinate.',
    ],
    list: [
      ['Assessed with the roof.', 'Frames, glass and screens on every inspection.'],
      ['Documented for your claim.', 'While the adjuster is still on the property.'],
      ['Matched to the house.', 'Frame profile, glazing, grids and colour.'],
      ['Available on their own.', 'No roof work needed to book a window replacement.'],
    ],
    image: 'window-install-exterior-sun',
    alt: 'An installer setting a replacement window into a frame on a sunny day',
    reverse: true,
    tint: true,
  })}

${stickyFeature(
    'How it runs',
    'What a window replacement involves',
    'The short version. The detail that matters is the same as on a roof: the part you cannot see afterwards decides how long it lasts.',
    [
      {
        img: 'window-install-ladder-exterior',
        alt: 'An installer working from a ladder at a second storey window',
        h: 'Measure and match',
        p: 'Every opening is measured, and the existing units are looked at for profile, glazing and grid pattern, so the replacement reads as part of the house rather than a patch.',
      },
      {
        img: 'window-install-interior-crew',
        alt: 'Two installers fitting a window frame from inside the room',
        h: 'Remove, flash and set',
        p: 'The old unit comes out, the rough opening is checked, and the new window is flashed and set square. The flashing is the part that decides whether water gets in later.',
      },
      {
        img: 'window-screen-fitting',
        alt: 'A new insect screen being fitted into a window frame',
        h: 'Seal, screen and clean up',
        p: 'Exterior sealed, interior trimmed, screens fitted, and the site cleaned before we leave. A foreman checks the work the same way they would check a roof.',
      },
    ],
    { tint: false },
  )}

${infoGrid('Screens', 'Window screens, on their own or with the windows', 'The smallest job we do, and one of the most common after a hail storm.', [
    { icon: 'screen', h: 'Hail marks screens first', p: 'Mesh and frames dent and tear under impacts a shingle absorbs invisibly. They are evidence of what a storm did, and they are damage in their own right.' },
    { icon: 'search', h: 'Part of every inspection', p: 'Screens are on the third lap of the drone survey along with soft metals, gutters and fencing. You do not have to ask us to look.' },
    { icon: 'wrench', h: 'Replaced without the window', p: 'If the glass and frame are fine, the screen is a standalone job. Mesh type and frame colour are matched to what is there.' },
    { icon: 'doc', h: 'Documented with the roof', p: 'Recorded for your carrier at the same time as everything else, while the adjuster is still on the property.' },
  ], { tint: true, cols: 4 })}

${pageReviews('/window-replacement', 'What customers say about windows and screens')}

${faqSection('Window FAQs', 'Window and screen questions', 'Including when we would point you to a specialist instead.', [
    {
      q: 'Why does a roofing company replace windows?',
      a: 'Because the same storm that damages a roof damages the windows beneath it, and because the exterior envelope of a house is one system. Hail marks window frames and screens before it visibly marks a shingle, and wind driven debris finds glass.\n\nOur inspection already covers windows and screens as part of establishing what a storm did to a property. Being able to replace them afterwards, with the same crew, the same foreman and the same warranty paperwork, is the sensible continuation of that rather than a separate trade you have to coordinate yourself.',
    },
    {
      q: 'Is window damage covered by a storm claim?',
      a: 'It can be, and it is worth documenting at the same time as the roof rather than afterwards. Once a claim has been settled it is considerably harder to add to it.\n\nAs with any insurance question, the decision belongs to your carrier. What we can do is make sure window and screen damage is recorded properly while the adjuster is still involved, alongside the roof, gutters and soft metals.',
    },
    {
      q: 'Do you replace windows without roof work?',
      a: 'Yes. Window replacement is a real service and we will come out for it on its own.\n\nThe honest note is that we are a roofing company first. For a whole house window project with no roofing or storm component, it is worth asking whether a window specialist is a better fit for you. We will tell you if we think so.',
    },
    {
      q: 'Can you match existing windows and screens?',
      a: 'Generally, yes. Frame profile, glazing, grid pattern, colour and screen mesh all vary, and matching what is already on the house matters when only some units were damaged.\n\nWe look at what you have before quoting rather than assuming a standard product.',
    },
    {
      q: 'What about just the screens?',
      a: 'Screens are a smaller job and we do them on their own. They are among the first things a hail storm marks, so they are part of every inspection, and replacing them afterwards is routine.\n\nIf the damage is limited to screens, you do not need to replace the window to get them sorted.',
    },
  ], 'light')}

${related([
    { path: '/storm-damage-roof-repair', icon: 'storm', h: 'Storm damage', p: 'Where window damage usually comes from.' },
    { path: '/roof-inspection', icon: 'drone', h: 'Roof inspection', p: 'Windows and screens are covered on the third lap.' },
    { path: '/gutters', icon: 'gutter', h: 'Seamless gutters', p: 'The other soft component hail marks first.' },
    { path: '/contact', icon: 'phone', h: 'Contact', p: 'Speak to the office.' },
  ])}

${ctaBand('Had hail? Get the whole property looked at', 'Roof, gutters, soft metals, windows and screens, documented together while it still counts.', 'window-install-ladder-exterior')}
`,
};

export default [gutters, windows];