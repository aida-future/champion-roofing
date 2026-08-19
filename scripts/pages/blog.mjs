import { BIZ } from '../data.mjs';
import { ICONS, icon, img, btn, eyebrow, secHead } from '../lib.mjs';
import {
  pageHero, faqSection, related, asideCard, ctaBand, ticker, split,
} from '../sections.mjs';

// NOTE FOR HANDOFF: datePublished values below are placeholders.
// The original publication dates should be carried across from the existing CMS
// before launch so the article schema stays accurate.
const POSTS = [
  {
    slug: '7-common-roofing-mistakes-to-avoid-and-how-champion-roofing-ensures-perfection',
    title: '7 Common Roofing Mistakes to Avoid | Champion Roofing',
    h1: 'Seven common roofing mistakes, and how we avoid them',
    desc: 'Seven roofing mistakes we see on Oklahoma City roofs, what each one costs you later, and how Champion Roofing avoids them on every job.',
    excerpt: 'Most roofs that fail early do not fail because of the shingle. They fail because of seven fairly predictable decisions made underneath it.',
    image: 'install-nailgun-shingle',
    alt: 'A nail gun being used to fasten architectural shingles on a roof deck',
    tag: 'Mistakes',
    published: '2026-02-11',
    read: '8 min read',
    body: `
<p class="lead">A roof that fails after five years and a roof that lasts twenty five can be made from identical materials. The difference is almost never the product on top. It is a set of fairly predictable decisions made underneath it, usually to save time.</p>
<p>Here are the seven we see most often on roofs we are called out to repair in Oklahoma City, and what a correct job does instead.</p>

<h2>1. Roofing over the existing layer instead of tearing off</h2>
<p>Installing a new roof over an old one is faster and cheaper, and it is the single most consequential shortcut in the trade. The reason is not the extra weight, although that matters. It is that the decking underneath becomes completely invisible.</p>
<p>Roof decking is the foundation of the entire system. If boards are soft, water damaged, or gapped beyond what code allows, nothing installed above them will perform properly. A layover guarantees that nobody finds out until the next roof.</p>
<p><strong>What should happen instead:</strong> a complete tear off, followed by a proper inspection of the exposed deck. Where problems are found, they get documented and addressed rather than covered.</p>

<h2>2. Using sealant where flashing belongs</h2>
<p>Every place the roof meets something else is a potential leak: chimneys, wall junctions, valleys, and every pipe or vent that passes through the plane. These transitions are supposed to be handled with shaped, layered metal that directs water back out onto the roof surface.</p>
<p>Sealant is quicker. It also has a service life measured in a few years, after which it cracks and the leak arrives. When we investigate a roof that started leaking three years after replacement, the cause is very often a bead of caulk where a piece of flashing should have been.</p>
<p><strong>What should happen instead:</strong> flashing in metal, detailed by hand at every transition. Sealant is a supplement to that work, never a replacement for it.</p>

<h2>3. Ignoring ventilation</h2>
<p>A roof needs to breathe. Without adequate intake at the eaves and exhaust at the ridge, the attic space beneath becomes an oven, and the decking cooks from below while the covering above degrades faster than it should.</p>
<p>Oklahoma summers make this considerably worse than it is in a milder climate. A roof that would have been marginal elsewhere is actively self destructive here.</p>
<p><strong>What should happen instead:</strong> ventilation treated as part of the roof system and specified with it, not as an accessory somebody adds if there is budget left.</p>

<h2>4. Not replacing the pipe boots</h2>
<p>The rubber collar sealing around a plumbing vent has a shorter service life than the shingles around it. It sits in full sun, flexes with every temperature swing, and eventually splits.</p>
<p>Reusing existing boots on a new roof is a small saving and an entirely predictable future leak. It is also one of the most common causes of an interior water stain on a roof that is otherwise in perfect condition.</p>
<p><strong>What should happen instead:</strong> new boots as part of the replacement, every time.</p>

<h2>5. Nailing incorrectly</h2>
<p>Fastener placement, quantity and depth all matter. Nails driven too high miss the layer they are meant to secure. Nails driven too deep cut through the shingle. Too few nails and the roof cannot handle the wind loads this state produces.</p>
<p>None of this is visible once the next course is laid, which is precisely why it gets rushed. It shows up during the first serious wind event.</p>
<p><strong>What should happen instead:</strong> correct fastening to the manufacturer specification, and a foreman on site whose job includes checking it before it is covered.</p>

<h2>6. Choosing a product nobody will stand behind</h2>
<p>Some shingles are cheap because they are efficient. Some are cheap because there is a problem with them. A roofing company that installs whatever is available and moves on has no reason to care about the difference.</p>
<p>Our position is that we will not install a shingle we are not prepared to warranty ourselves. We have moved customers off a synthetic product mid programme when a recall emerged and gone back to a system we trusted instead, at our own inconvenience.</p>
<p><strong>What should happen instead:</strong> ask whoever is quoting whether they will warranty the specific product they are proposing, and what happens if it fails.</p>

<h2>7. Treating the cleanup as optional</h2>
<p>This one does not cause the roof to fail, but it is the part you live with. Roofing produces an extraordinary quantity of nails, and they end up in the grass, the driveway and the flowerbeds.</p>
<p>The related failure is not protecting landscaping before the tear off starts. In Oklahoma, people care about their gardens, and a crew that starts dropping material without covering the planting beds first has created a problem that no amount of good roofing fixes.</p>
<p><strong>What should happen instead:</strong> landscaping covered and protected before anything comes off the roof, and magnetic sweeps across the ground before the crew leaves.</p>

<h2>The common thread</h2>
<p>Every one of these is a time saving. None of them is visible when the job is finished, and all of them are the customer\'s problem rather than the roofer\'s. That is why the useful question to ask a contractor is not what shingle they are using. It is what happens underneath it, and who is on site making sure it happens.</p>
<p>If you want a second opinion on a roof, our <a href="/roof-inspection">assessment is free</a> and you get the findings in writing whether or not there is anything to do about it.</p>
`,
  },
  {
    slug: 'choosing-the-right-roofing-material-for-your-home',
    title: 'Choosing a Roofing Material for Your Home | Champion',
    h1: 'Choosing the right roofing material for your home',
    desc: 'How to choose a roofing material for an Oklahoma home: asphalt, metal, tile, slate and synthetics compared on cost, hail, heat and how long each actually lasts.',
    excerpt: 'There is no best roofing material, only the one that suits your structure, your street and your hail exposure. Here is how to narrow it down.',
    image: 'res-brick-dark-tile',
    alt: 'A brick home with a dark tile roof in Oklahoma City',
    tag: 'Materials',
    published: '2026-03-19',
    read: '9 min read',
    body: `
<p class="lead">There is no best roofing material. There is only the material that suits your structure, your budget, the street you live on, and the specific weather this state produces. Here is how the realistic options actually compare.</p>

<h2>Start with what your structure can carry</h2>
<p>Before anything else: clay tile, concrete tile and natural slate are heavy. Considerably heavier than asphalt. A house framed for a shingle roof cannot necessarily take natural slate without structural work, and that is a conversation to have before you fall in love with a material.</p>
<p>This is the main reason synthetic tile and synthetic slate have become so common on the higher end streets around Oklahoma City. They deliver the appearance at a fraction of the weight, which removes the structural question entirely.</p>

<h2>Asphalt shingle</h2>
<p>The default for most Oklahoma City homes, and the default for good reasons. It is well understood, widely available, works on almost any roof geometry, and comes in a range from builder grade three tab up to designer profiles that read as something considerably more expensive from the street.</p>
<p><strong>Consider it when:</strong> you want proven performance, a wide colour and style range, and predictable cost. This is the right answer for the large majority of houses.</p>
<p><strong>The hail note:</strong> ask about class 4 impact rated shingles. They are built to handle hail better than a standard product, and some insurance carriers treat them differently. That is a question for your carrier rather than your roofer.</p>

<h2>Metal</h2>
<p>Metal comes in three broadly different systems. Standing seam is the concealed fastener system most people picture: raised seams, clean lines, modern. Metal shingle is formed to read like shingle, tile or shake from the ground while behaving like metal. Corrugated is the exposed fastener system common on agricultural and industrial buildings.</p>
<p><strong>Consider it when:</strong> your roof has long uninterrupted runs, the building takes direct weather, or the architecture suits it. Metal handles wind extremely well when fastened correctly.</p>
<p><strong>Think harder when:</strong> your roof is complex. A lot of hips, valleys, dormers and penetrations means substantially more custom flashing work in metal than in shingle, and both cost and risk rise with that complexity.</p>
<p><strong>The hail note:</strong> metal can dent. Whether a dent matters is partly functional and largely aesthetic, and it is worth deciding how you feel about that before rather than after. We cover this in more detail on our <a href="/metal-roofing">metal roofing page</a>.</p>

<h2>Clay and concrete tile</h2>
<p>The traditional Mediterranean and Spanish profile, and genuinely beautiful on the right house. Also heavy, brittle, and completely dependent on the quality of what sits underneath it.</p>
<p><strong>Consider it when:</strong> the architecture calls for it and the structure can carry it. On a stucco house with arched windows, nothing else looks right.</p>
<p><strong>Think harder when:</strong> you have not confirmed the structural capacity, or when the contractor quoting has not done tile before. This is the material where a rushed installation is most expensive to correct.</p>

<h2>Composite and synthetic tile</h2>
<p>Manufactured products designed to deliver the appearance of tile, slate or shake at much lower weight and with far less brittleness. DaVinci, Brava and Grand Manor are the names that come up most around this metro.</p>
<p><strong>Consider it when:</strong> you want the appearance of a specialty roof on a structure that was not designed for the weight of natural material, or when you would rather not deal with the fragility of clay or slate.</p>
<p>Champion Roofing is a DaVinci Masterpiece contractor and was the first company in Oklahoma to install Brava synthetic roofing. These products have become the standard on a lot of the higher end streets here for exactly the reasons above.</p>

<h2>Natural and synthetic slate</h2>
<p>Natural slate is the traditional material on older and higher end properties. It lasts a very long time and it is entirely unforgiving of a poor installation. It is also stone, with all the weight that implies.</p>
<p>Synthetic slate delivers a very similar appearance at a small fraction of the weight, which frequently makes it the correct engineering answer even when budget is not the constraint.</p>
<p><strong>Consider either when:</strong> the house genuinely calls for it. On the right property, slate is unmatched. On the wrong one, it looks like an expensive mistake.</p>

<h2>Wood and synthetic shake</h2>
<p>Cedar shake has a texture and a weathering behaviour that nothing else replicates exactly. It also demands maintenance and carries fire considerations that vary by jurisdiction.</p>
<p>Synthetic shake removes both of those problems while getting close on appearance. For most people wanting the shake look, it is the more practical route.</p>

<h2>The questions that actually decide it</h2>
<ul>
  <li><strong>What can the structure carry?</strong> This eliminates options before anything else does.</li>
  <li><strong>How complex is the roof?</strong> Complexity penalises metal and tile more than it penalises shingle.</li>
  <li><strong>What is on your street?</strong> A roof that is wrong for the neighbourhood affects resale even when it is beautiful.</li>
  <li><strong>How long do you intend to stay?</strong> A material with a fifty year life on a house you will sell in six is a different calculation.</li>
  <li><strong>What does your insurance carrier say?</strong> Particularly regarding impact rated products.</li>
</ul>

<h2>What we would actually tell you</h2>
<p>Most houses in Oklahoma City should have a quality architectural or designer asphalt shingle, and there is nothing disappointing about that answer. The cases where something else is genuinely better are real but less common than the marketing suggests.</p>
<p>Where a specialty material is right, it is worth checking that whoever quotes it has installed that material before. There is not a lot of competition for tile and slate work in this market, and that is not an accident.</p>
<p>If you want an opinion on your specific house, our <a href="/contact">assessment is free</a> and we will tell you when the cheaper option is the right one.</p>
`,
  },
  {
    slug: 'comparing-the-benefits-of-metal-roofing-vs-asphalt-shingles',
    title: 'Metal Roofing vs Asphalt Shingles | Champion Roofing',
    h1: 'Metal roofing versus asphalt shingles',
    desc: 'A direct comparison of metal and asphalt roofing for Oklahoma City homes: cost, complexity, wind and hail performance, noise, appearance and resale.',
    excerpt: 'The honest comparison, including the parts where metal loses. Complexity, hail dents and neighbourhood fit all matter more than the brochures suggest.',
    image: 'metal-standing-seam-commercial',
    alt: 'A white standing seam metal roof on a commercial building',
    tag: 'Materials',
    published: '2026-04-22',
    read: '8 min read',
    body: `
<p class="lead">Metal versus asphalt is the most common material question we get, and most of the comparisons online are written by someone who sells one of them. Here is the version that includes the parts where each one loses.</p>

<h2>Cost</h2>
<p>Asphalt is less expensive to install, in most cases significantly. Metal costs more up front, particularly on a complex roof where a large amount of custom flashing work is required.</p>
<p>The counter argument is service life, and it is a real one: a properly installed metal roof should outlast an asphalt roof. Whether that matters depends entirely on how long you intend to own the house. On a property you plan to sell in five years, the longer life is a benefit you are paying for and somebody else collects.</p>

<h2>Roof complexity, which decides more than people expect</h2>
<p>This is the factor that gets underweighted in nearly every comparison. Asphalt shingle is forgiving of complicated geometry: hips, valleys, dormers and penetrations are all routine.</p>
<p>Metal is not. Every one of those features requires custom flashing work, and the cost and the risk both scale with how many there are. On a simple gable roof, metal is close to ideal. On a roof with six dormers, four valleys and a cluster of penetrations, metal becomes both expensive and demanding of a contractor who genuinely knows the material.</p>

<h2>Wind</h2>
<p>Advantage metal, when it is fastened correctly. Standing seam systems in particular handle high wind very well, which matters in this state.</p>
<p>Asphalt shingle relies on the seal strip bonding each course to the one below. Wind damage to shingle roofs is usually lifted or creased shingles where that seal has broken, and it is one of the most common storm claims we see.</p>

<h2>Hail</h2>
<p>This one is more nuanced than either side usually admits.</p>
<p>Hail damages asphalt shingles by bruising: the impact fractures the mat and knocks the protective granules loose. It is invisible from the ground and the shingle degrades from those points afterwards. This is genuine damage with a real consequence for the life of the roof.</p>
<p>Hail damages metal by denting. A dented panel is frequently still perfectly functional, and the roof continues doing its job. Whether that matters to you is largely aesthetic, but it is not nothing, particularly on a highly visible roof plane.</p>
<p>The practical answer for asphalt is a class 4 impact rated shingle, which is designed to handle hail considerably better than a standard product. It is worth asking your insurance carrier how they treat impact rated roofing, because some treat it differently on premiums.</p>

<h2>Noise</h2>
<p>Metal is far quieter than its reputation. That reputation comes from metal panels over open framing on barns and outbuildings, which is genuinely loud. A metal roof over decking and underlayment on a house with an insulated attic behaves very differently.</p>
<p>Call this a draw for practical purposes, and treat anyone who tells you metal roofs are unbearably noisy as working from a different building type.</p>

<h2>Appearance and neighbourhood fit</h2>
<p>Entirely dependent on the house and the street. Standing seam suits contemporary architecture and certain traditional forms extremely well. On some Oklahoma City streets it will look exactly right; on others it will read as out of place in a way that affects resale.</p>
<p>Designer asphalt shingles have also improved substantially, and a good architectural or designer profile looks considerably more expensive from the street than people expect.</p>
<p>Worth knowing: metal shingle systems exist that read as shingle, tile or shake from the ground while behaving like metal. If you want metal performance without a metal appearance, that is the route.</p>

<h2>Repair and future work</h2>
<p>Asphalt is easier and cheaper to repair, and matching an existing shingle is usually straightforward while the product is still in production.</p>
<p>Metal repairs are more specialised. Panel replacement in the middle of a run is a more involved job than replacing a few shingles, and matching a finish years later can be difficult.</p>

<h2>So which one</h2>
<p><strong>Choose asphalt when:</strong> your roof is complex, you want predictable cost, you may sell within ten years, or you want the widest range of colours and styles. Ask about class 4 impact rated products.</p>
<p><strong>Choose metal when:</strong> your roof has long simple runs, the architecture suits it, you intend to stay long term, or wind performance is a priority for the building.</p>
<p><strong>Consider metal shingle when:</strong> you want metal performance but a traditional appearance.</p>
<p>We install both, which means we have no particular reason to push you toward either. If you want a straight opinion about your specific roof, our <a href="/contact">assessment is free</a>. More detail on systems is on our <a href="/metal-roofing">metal roofing</a> and <a href="/residential-roofing">residential roofing</a> pages.</p>
`,
  },
  {
    slug: 'a-season-by-season-guide-to-roof-inspections-and-maintenance',
    title: 'Season by Season Roof Maintenance Guide | Champion Roofing',
    h1: 'A season by season guide to roof inspections and maintenance',
    desc: 'What to check on your Oklahoma roof through spring storm season, summer heat, autumn leaf fall and winter ice, and when to call somebody instead of climbing up.',
    excerpt: 'Oklahoma puts a roof through four genuinely different kinds of stress in a year. Here is what to watch for in each, from the ground.',
    image: 'res-sunset-shingle',
    alt: 'A shingle roof photographed at sunset',
    tag: 'Maintenance',
    published: '2026-05-27',
    read: '7 min read',
    body: `
<p class="lead">Oklahoma puts a roof through four genuinely different kinds of stress in a year: spring hail, summer heat, autumn debris and winter ice. Here is what each season does and what is worth checking, mostly from the ground.</p>
<p>One thing first: almost nothing on this list requires you to get on the roof. Falls are the real hazard in roofing, and a pair of binoculars from the lawn will answer most of these questions safely.</p>

<h2>Spring, the storm season</h2>
<p>This is the important one in Oklahoma. Spring brings the hail and the high wind, and it is when most genuine roof damage in this state occurs.</p>
<p><strong>After any significant storm, check for:</strong></p>
<ul>
  <li><strong>Shingles in the yard or driveway.</strong> The clearest possible signal, and one that means the roof needs looking at rather than watching.</li>
  <li><strong>Dents in soft metals.</strong> Gutters, downspouts, vents and caps dent under hail that shingles absorb invisibly. This is the most reliable ground level indicator that a hail event was significant.</li>
  <li><strong>Damaged window screens and fencing.</strong> Same principle. These mark readily and corroborate what the storm actually did.</li>
  <li><strong>Granules in the gutters or at the downspout outlets.</strong> Some granule loss is normal over a roof\'s life. A noticeable accumulation after a specific storm is not.</li>
  <li><strong>New stains on ceilings or in the attic.</strong> Check after the next rain rather than immediately, because a leak needs water to show itself.</li>
</ul>
<p>Hail damage to shingles is bruising rather than holes, and it is essentially invisible from the ground. If the soft metals around your house are dented, the roof is worth having assessed even if it looks perfectly fine. Our <a href="/roof-inspection">assessment is free</a> and you get a written report either way.</p>

<h2>Summer, the heat</h2>
<p>Oklahoma summer heat is genuinely hard on roofing materials. Extreme surface temperatures accelerate the ageing of asphalt, and an attic that cannot ventilate turns into an oven that cooks the decking from underneath.</p>
<p><strong>Worth checking:</strong></p>
<ul>
  <li><strong>Attic temperature and airflow.</strong> If your attic is dramatically hotter than the outside air and there is no perceptible movement, ventilation is worth looking at.</li>
  <li><strong>Cupping or curling shingles.</strong> Visible from the ground with binoculars as an uneven, wavy texture across a slope. It usually indicates age, heat stress, or a ventilation problem.</li>
  <li><strong>Cracked sealant and perished pipe boots.</strong> The rubber collars around plumbing vents split in the sun, and they are a very common source of interior leaks on otherwise healthy roofs.</li>
</ul>
<p>Summer is also when roofing schedules move. We delay or stop work when heat becomes unsafe for a crew, which sometimes means starting later in the afternoon and working later into the evening.</p>

<h2>Autumn, the debris season</h2>
<p>Less dramatic and genuinely useful. This is the maintenance season.</p>
<p><strong>Worth doing:</strong></p>
<ul>
  <li><strong>Clear the gutters.</strong> Blocked gutters cause water to back up at the eave, get behind the fascia and reach the roof decking at its most vulnerable edge. That becomes a rot problem rather than a gutter problem.</li>
  <li><strong>Check the downspouts are actually discharging.</strong> Water needs to leave the building, not pool at the foundation.</li>
  <li><strong>Trim back overhanging branches.</strong> Branches abrade shingles in wind and drop the debris that blocks everything below.</li>
  <li><strong>Look at valleys.</strong> Debris collecting in a valley holds moisture against the roof and stops water moving the way it should.</li>
</ul>
<p>If you have mature trees over the roof, this is where <a href="/gutters">leaf protection</a> earns its cost. If nothing overhangs your gutters, it is a much weaker case and we will tell you so.</p>

<h2>Winter, the freeze and thaw</h2>
<p>Oklahoma winters are not severe every year, but they produce enough freeze and thaw cycling to matter, and occasional ice events that put real load on a roof edge.</p>
<p><strong>Worth checking:</strong></p>
<ul>
  <li><strong>Ice building at the eaves.</strong> Ice forming along the roof edge indicates heat escaping into the attic and melting snow that then refreezes at the colder overhang. It is a ventilation and insulation signal.</li>
  <li><strong>Attic condensation.</strong> Moisture on the underside of the decking is a ventilation problem, and left alone it becomes a decking problem.</li>
  <li><strong>Interior stains after a thaw.</strong> Water that entered during a freeze frequently shows up when it melts rather than when it arrived.</li>
</ul>

<h2>Twice a year, and after every serious storm</h2>
<p>The simple version of all of the above: look at the roof properly twice a year, and again after any storm that made you think about it at the time.</p>
<p>Our standard inspection flies the roof in three passes. The first reads the shingle field for granular loss and hail impacts. The second covers chimneys, penetrations, flashing, valleys and eaves on every elevation. The third looks at soft metals, gutters, window screens and fencing. When the drone imagery cannot confirm damage or find a leak, we get on the roof and into the attic.</p>
<p>It takes ten to fifteen minutes, it costs nothing, and you get the findings in writing whether or not there is anything to do about it. If your roof is fine, that is what the report will say.</p>
`,
  },
];

/* ---------- Article pages ---------- */
const articlePages = POSTS.map((p, i) => {
  const others = POSTS.filter((_, n) => n !== i).slice(0, 3);
  return {
    path: `/blog/${p.slug}`,
    priority: '0.6',
    title: p.title,
    desc: p.desc,
    ogImage: p.image,
    crumbs: [{ name: 'Blog', path: '/blog' }, { name: p.h1, path: `/blog/${p.slug}` }],
    article: { headline: p.h1, published: p.published, image: p.image },
    body: `
${pageHero({
      crumbs: [{ name: 'Blog', path: '/blog' }, { name: p.h1, path: `/blog/${p.slug}` }],
      eb: `${p.tag} &middot; ${p.read}`,
      h1: p.h1,
      lede: p.excerpt,
      image: p.image,
      alt: p.alt,
      ctas: false,
    })}

<section class="sec">
  <div class="wrap">
    <div class="split" style="align-items:start;grid-template-columns:1.35fr .65fr">
      <article class="prose" data-reveal style="max-width:var(--max-text)">
        ${p.body}
      </article>
      <aside data-reveal data-reveal-delay="1" style="position:sticky;top:110px">
        ${asideCard('Free assessment', [
          { icon: 'drone', h: 'Drone inspection', p: 'Three laps around the roof, then a report by email.' },
          { icon: 'clock', h: 'Ten to fifteen minutes', p: 'On site, with the findings talked through there.' },
          { icon: 'shield', h: 'No obligation', p: 'If your roof is fine, we will tell you it is fine.' },
        ])}
      </aside>
    </div>
  </div>
</section>

<section class="sec-sm sec-tint">
  <div class="wrap">
    ${secHead('Keep reading', 'More from the Champion Roofing blog', '')}
    <div class="grid g-3">
      ${others.map((o, n) => `<a class="card svc-card" href="/blog/${o.slug}" data-reveal data-reveal-delay="${n}">
        <div class="card-media">${img(o.image, o.alt, { sizes: '(max-width:760px) 100vw, 33vw' })}<span class="card-tag">${o.tag}</span></div>
        <div class="card-body">
          <h3 style="font-size:1.12rem">${o.h1}</h3>
          <p>${o.excerpt}</p>
          <span class="link-ridge">Read${ICONS.arrow}</span>
        </div>
      </a>`).join('')}
    </div>
  </div>
</section>

${ctaBand('Want your roof looked at?', 'Free assessment, drone survey and a written report. No obligation and no sales script.', p.image)}
`,
  };
});

/* ---------- Blog hub ---------- */
const blogHub = {
  path: '/blog',
  priority: '0.7',
  title: 'Roofing Blog | Champion Roofing Oklahoma City',
  desc: 'Practical roofing advice for Oklahoma City homeowners: material comparisons, seasonal maintenance, common installation mistakes and how to read storm damage.',
  ogImage: 'res-shingle-texture',
  crumbs: [{ name: 'Blog', path: '/blog' }],
  body: `
${pageHero({
    crumbs: [{ name: 'Blog', path: '/blog' }],
    eb: 'Blog',
    h1: 'Roofing advice for Oklahoma homeowners',
    lede: 'Written by people who install roofs rather than people who write about them. Practical, specific, and honest about the parts that do not help us sell anything.',
    image: 'res-shingle-texture',
    alt: 'Close view of architectural shingle texture on a residential roof',
    ctas: false,
  })}

<section class="sec">
  <span class="ghost" aria-hidden="true">Articles</span>
  <div class="wrap">
    ${secHead('The archive', 'Every article', 'Four pieces covering materials, maintenance and the mistakes that cause most premature roof failures.')}
    <div class="grid g-2">
      ${POSTS.map((p, i) => `<a class="card svc-card" href="/blog/${p.slug}" data-reveal data-reveal-delay="${i % 2}">
        <div class="card-media">${img(p.image, p.alt, { sizes: '(max-width:760px) 100vw, 50vw' })}<span class="card-tag">${p.tag}</span></div>
        <div class="card-body">
          <h3>${p.h1}</h3>
          <p>${p.excerpt}</p>
          <span style="font-size:.82rem;color:var(--body-dim);letter-spacing:.06em;text-transform:uppercase;font-weight:600">${p.read}</span>
          <span class="link-ridge">Read the article${ICONS.arrow}</span>
        </div>
      </a>`).join('')}
    </div>
  </div>
</section>

${ticker()}

${related([
    { path: '/roof-inspection', icon: 'drone', h: 'Roof inspection', p: 'Book the free drone assessment.' },
    { path: '/residential-roofing', icon: 'house', h: 'Residential roofing', p: 'Everything we do on houses.' },
    { path: '/faq', icon: 'doc', h: 'FAQ', p: 'Cost, insurance, warranties and timelines.' },
    { path: '/contact', icon: 'phone', h: 'Contact', p: 'Speak to the office.' },
  ])}

${ctaBand('Reading about your roof because something is wrong?', 'Stop guessing. The assessment is free and the report comes in writing.', 'res-dormer-row')}
`,
};

export default [blogHub, ...articlePages];
