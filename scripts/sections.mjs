// Reusable page sections. Composed by bake.mjs into pages.
import { BIZ, TICKER, SERVICE_OPTIONS } from './data.mjs';
import { AGGREGATE, TOPICS, ITEMS, byTag, forPage, topicsForPage } from './reviews.mjs';
import { ICONS, icon, img, eyebrow, secHead, btn, stars, checks, faqBlock, esc } from './lib.mjs';

/* ---------- Hero ---------- */
export function hero(slides, content) {
  return `
<section class="hero" data-hero>
  <div class="hero-slides">
    ${slides.map((s, i) => `<div class="hero-slide${i === 0 ? ' is-active' : ''}" data-caption="${esc(s.caption)}"
      data-badge="${esc(s.badge || content.badge)}" data-h1="${esc(s.h1 || content.h1)}" data-lede="${esc(s.lede || content.lede)}">
      ${img(s.slug, s.alt, { sizes: '100vw', loading: i === 0 ? 'eager' : 'lazy' })}
    </div>`).join('')}
  </div>
  <div class="wrap hero-inner">
    <span class="hero-badge"><b>${ICONS.ridgeSolid}</b><span data-hero-badge>${esc(slides[0].badge || content.badge)}</span></span>
    <!-- Amprite pattern: the whole headline changes with the slide. The page
         still has exactly one heading element; its visible text is swapped per
         slide, with slide one carrying the primary keyword headline in the
         baked HTML so crawlers and the first paint both see the ranking line. -->
    <h1 data-hero-h1>${slides[0].h1 || content.h1}</h1>
    <p class="hero-lede" data-hero-lede>${esc(slides[0].lede || content.lede)}</p>
    <div class="btn-row">
      ${btn('/contact', 'Book a free assessment', 'btn-lg')}
      ${btn('/about', 'Who you are calling', 'btn-ghost btn-lg', 'arrow')}
    </div>
    <p class="hero-proof">${stars()} <span><strong>${BIZ.rating}</strong> from ${BIZ.reviewCount} Google reviews. ${content.proof}</span></p>
  </div>
  <div class="hero-ctl">
    <p class="hero-caption" data-hero-caption>${esc(slides[0].caption)}</p>
    <div class="hero-arrows">
      <button class="hero-arrow" type="button" data-dir="prev" aria-label="Previous slide">${ICONS.arrowLongL}</button>
      <span class="hero-count"><b data-hero-current>01</b> / <span data-hero-total>0${slides.length}</span></span>
      <button class="hero-arrow" type="button" data-dir="next" aria-label="Next slide">${ICONS.arrowLong}</button>
    </div>
  </div>
  <div class="hero-progress" aria-hidden="true"><i></i></div>
</section>`;
}

/* ---------- Docked lead form ---------- */
export function leadForm({ docked = true, title, blurb, compact = false } = {}) {
  return `
<section class="${docked ? 'dock' : 'sec-sm'}">
  <div class="wrap">
    <div class="lead-card" data-reveal>
      <div class="lead-card-head">
        <div>
          ${eyebrow('Free, no obligation')}
          <h2>${title || 'Tell us about your roof'}</h2>
          <p>${blurb || 'Send this over and someone from the office will call you back to set a time. No pressure, no sales script.'}</p>
        </div>
        <span class="status-pill" data-status data-open-hour="9" data-close-hour="17" data-open="true" style="background:var(--paper-2);color:var(--ink)">
          <i class="status-dot" aria-hidden="true"></i><span data-status-text>Mon to Fri, 9am to 5pm</span>
        </span>
      </div>
      <form data-lead action="https://formsubmit.co/${BIZ.email}" method="POST">
        <input type="hidden" name="_subject" value="New roof assessment request, championroofingok.com">
        <input type="hidden" name="_template" value="table">
        <input type="hidden" name="_captcha" value="false">
        <input class="hp" type="text" name="_honey" tabindex="-1" autocomplete="off" aria-hidden="true">
        <!-- Three columns. Who you are first, then what you need, so the form
             reads in the order a person would actually say it out loud. -->
        <div class="field-grid">
          <div class="field">
            <label for="lf-name">Name <span class="req">*</span></label>
            <input id="lf-name" name="Name" type="text" required autocomplete="name" placeholder="Your name">
            <span class="err">Please tell us your name.</span>
          </div>
          <div class="field">
            <label for="lf-phone">Phone <span class="req">*</span></label>
            <input id="lf-phone" name="Phone" type="tel" required autocomplete="tel" placeholder="(405) 000-0000">
            <span class="err">A number we can reach you on.</span>
          </div>
          <div class="field">
            <label for="lf-email">Email <span class="req">*</span></label>
            <input id="lf-email" name="Email" type="email" required autocomplete="email" placeholder="you@example.com">
            <span class="err">Please check the email address.</span>
          </div>
          <div class="field">
            <label for="lf-service">What do you need?</label>
            <select id="lf-service" name="Service">
              ${SERVICE_OPTIONS.map((o) => `<option>${o}</option>`).join('')}
            </select>
          </div>
          <div class="field wide">
            <label for="lf-address">Property address or city</label>
            <input id="lf-address" name="Property" type="text" autocomplete="street-address" placeholder="Street, or just the city">
          </div>
          ${compact ? '' : `<div class="field full">
            <label for="lf-msg">Tell us what is going on</label>
            <textarea id="lf-msg" name="Details" placeholder="Water stain on the ceiling, shingles in the yard after the storm, or anything else that helps."></textarea>
          </div>`}
        </div>
        <div class="form-foot">
          <small>We use your details to respond to this request and nothing else. Calls after 5pm go to voicemail; this form is open around the clock.</small>
          <button class="btn btn-lg" type="submit">Request my free assessment${ICONS.arrow}</button>
        </div>
      </form>
    </div>
  </div>
</section>`;
}

/* ---------- Ticker ---------- */
export function ticker() {
  const group = `<div class="ticker-group">${TICKER.map((t) => `<span class="ticker-item">${t}</span>`).join('')}</div>`;
  return `<div class="ticker" aria-hidden="true"><div class="ticker-track">${group}${group}</div></div>`;
}

/* ---------- Stat strip ---------- */
export function statStrip(items) {
  return `
<section class="stat-strip">
  <div class="wrap-wide">
    <div class="stat-grid">
      ${items.map((s) => `<div class="stat">
        <b>${s.count ? `<span data-count="${s.count}">0</span>` : ''}${s.pre || ''}${s.suffix ? `<span class="suf">${s.suffix}</span>` : ''}</b>
        <span>${s.label}</span>
      </div>`).join('')}
    </div>
  </div>
</section>`;
}

/* ---------- Process steps ---------- */
export function steps(eb, title, blurb, items, tone = false) {
  const cls = tone === true || tone === 'dark' ? ' sec-dark' : tone === 'tint' ? ' sec-tint' : '';
  return `
<section class="sec${cls}">
  <span class="ghost" aria-hidden="true">Process</span>
  <div class="wrap">
    ${secHead(eb, title, blurb)}
    <ol class="steps">
      ${items.map((s, i) => `<li class="step" data-reveal data-reveal-delay="${i % 4}">
        <span class="peak-badge">${String(i + 1).padStart(2, '0')}</span>
        <h3>${s.h}</h3>
        <p>${s.p}</p>
      </li>`).join('')}
    </ol>
  </div>
</section>`;
}

/* ---------- Three-lap drone inspection ---------- */
const LAPS = [
  {
    h: 'Lap one, the field',
    p: 'The first pass reads the shingle field itself: granular loss, hail bruising and impact marks, and how the surface is wearing side to side.',
  },
  {
    h: 'Lap two, the details',
    p: 'The second pass covers the parts that actually leak. Chimneys, roof penetrations, flashing, valleys and eaves, checked on every elevation.',
  },
  {
    h: 'Lap three, everything else',
    p: 'The third pass looks at soft metals, gutters, window screens and fencing, because a hail event that damaged your roof usually marked those too.',
  },
];

export function droneSection() {
  const ring = (i, r) => {
    const pathId = `lapPath${i}`;
    const colors = ['#e22425', '#f0605f', '#c9a44d'];
    return `
      <path id="${pathId}" d="M 200 ${200 - r} a ${r} ${r} 0 1 1 -0.01 0" fill="none"/>
      <circle class="lap-ring" cx="200" cy="200" r="${r}" stroke="${colors[i]}"/>
      <g class="drone-lap" data-lap-dot="${i}">
        <circle r="7" fill="${colors[i]}">
          <animateMotion dur="${9 + i * 2}s" repeatCount="indefinite" rotate="auto">
            <mpath href="#${pathId}"/>
          </animateMotion>
        </circle>
        <circle r="14" fill="${colors[i]}" opacity=".22">
          <animateMotion dur="${9 + i * 2}s" repeatCount="indefinite" rotate="auto">
            <mpath href="#${pathId}"/>
          </animateMotion>
        </circle>
      </g>`;
  };

  return `
<section class="sec sec-dark" data-drone>
  <span class="ghost" aria-hidden="true">Inspection</span>
  <div class="wrap">
    <div class="drone-wrap">
      <div>
        ${secHead('How we inspect', 'Three laps around your roof, every time', 'Our inspector flies the roof before anyone walks it. It is the same procedure on a starter home and on a Nichols Hills slate roof, and it takes about ten to fifteen minutes.')}
        <div class="lap-list">
          ${LAPS.map((l, i) => `<button class="lap-item${i === 0 ? ' is-live' : ''}" type="button" data-lap="${i}">
            <span class="lap-num">0${i + 1}</span>
            <span><h4>${l.h}</h4><p>${l.p}</p></span>
          </button>`).join('')}
        </div>
        <p style="margin-top:1.6rem;font-size:.95rem;color:rgba(255,255,255,.6)">When the drone imagery cannot confirm damage or find a leak, we get on the roof and into the attic. Findings come back to you as a report by email either way.</p>
        <div class="btn-row" style="margin-top:1.8rem">
          ${btn('/roof-inspection', 'How inspections work', '')}
        </div>
      </div>
      <div class="drone-stage" data-reveal>
        <svg viewBox="0 0 400 400" role="img" aria-label="Diagram of a drone flying three passes around a roof">
          <defs>
            <linearGradient id="roofGrad" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0" stop-color="#3a2e2e"/><stop offset="1" stop-color="#1c1616"/>
            </linearGradient>
          </defs>
          <!-- roof seen from above -->
          <g opacity=".95">
            <path d="M130 155 L200 120 L270 155 L270 245 L200 280 L130 245 Z" fill="url(#roofGrad)" stroke="rgba(255,255,255,.22)" stroke-width="1.5"/>
            <path d="M130 155 L200 190 L270 155" fill="none" stroke="rgba(255,255,255,.28)" stroke-width="1.5"/>
            <path d="M200 190 L200 280" fill="none" stroke="rgba(255,255,255,.28)" stroke-width="1.5"/>
            <rect x="176" y="132" width="16" height="20" rx="2" fill="#241c1c" stroke="rgba(255,255,255,.25)"/>
          </g>
          ${ring(0, 95)}
          ${ring(1, 132)}
          ${ring(2, 168)}
        </svg>
      </div>
    </div>
  </div>
</section>`;
}

/* ---------- Material explorer ---------- */
const MATERIALS = [
  {
    key: 'asphalt', icon: 'house', label: 'Asphalt shingle',
    h: 'Architectural and designer asphalt shingles',
    p: 'The system on most Oklahoma City homes, and the one we install most often. As a GAF Master Elite contractor we can offer manufacturer warranties that most roofers in the metro cannot, and we will not put a shingle on your house that we are not willing to warranty ourselves.',
    img: 'res-ridge-chimneys', alt: 'Architectural asphalt shingle roof with brick chimneys',
    specs: [
      ['Systems we install', 'Three tab, architectural, designer'],
      ['Hail consideration', 'Class 4 impact rated options'],
      ['Manufacturer', 'GAF and Malarkey'],
    ],
  },
  {
    key: 'metal', icon: 'metal', label: 'Metal roofing',
    h: 'Standing seam, metal shingle and corrugated',
    p: 'Metal suits Oklahoma homes and outbuildings that take direct weather, and it works on both modern and traditional elevations. The detailing is where metal roofs succeed or fail, so panel layout, fastening and flashing get planned before anything is ordered.',
    img: 'metal-standing-seam-cabin', alt: 'Black standing seam metal roof on a timber home',
    specs: [
      ['Profiles', 'Standing seam, metal shingle, corrugated'],
      ['Best for', 'Long runs, simple to moderately complex roofs'],
      ['Also used on', 'Commercial and agricultural buildings'],
    ],
  },
  {
    key: 'tile', icon: 'tile', label: 'Tile roofing',
    h: 'Clay, concrete, composite and synthetic tile',
    p: 'Tile is the work we are best known for, and there is not much competition for it in this market. A correct tile installation is about what happens underneath: underlayment, battens, fastening and the flashing details at every hip, valley and penetration.',
    img: 'specialty-clay-tile-home', alt: 'A clay tile roof on a home in the Oklahoma City metro',
    specs: [
      ['Materials', 'Clay, concrete, composite, synthetic'],
      ['Brands', 'DaVinci, Brava, Grand Manor'],
      ['Recognition', 'DaVinci Masterpiece Contractor'],
    ],
  },
  {
    key: 'slate', icon: 'award', label: 'Slate and shake',
    h: 'Natural slate, synthetic slate, wood and synthetic shake',
    p: 'These are the roofs on the older and higher end streets around the metro, and they are unforgiving of a rushed install. Champion Roofing was the first company in Oklahoma to install Brava synthetic roofing, and we have maintained specialty roofs in Nichols Hills, Gaillardia, Rose Creek, Cobblestone and Heritage Hills.',
    img: 'res-brick-dark-tile', alt: 'A brick home with a dark tile roof',
    specs: [
      ['Materials', 'Natural slate, synthetic slate'],
      ['Also', 'Wood shake and synthetic shake'],
      ['Neighbourhoods', 'Nichols Hills, Gaillardia, Heritage Hills'],
    ],
  },
  {
    key: 'flat', icon: 'flat', label: 'Low slope and flat',
    h: 'TPO, EPDM, PVC, modified bitumen and coatings',
    p: 'TPO is our usual recommendation for commercial low slope work because of availability, installation and how serviceable it is later. It is not right everywhere: on a restaurant with grease exhaust we will point you to PVC or EPDM instead, because that is what the building actually needs.',
    img: 'tpo-white-sunlit', alt: 'White TPO membrane roof on a commercial building',
    specs: [
      ['Membranes', 'TPO, EPDM, PVC, modified bitumen'],
      ['Coatings', 'GAF CoatingsPro liquid applied'],
      ['Typical buildings', 'Offices, retail, industrial, multifamily'],
    ],
  },
];

export function materialExplorer({ dark = true } = {}) {
  return `
<section class="sec${dark ? ' sec-dark' : ' sec-tint'}">
  <span class="ghost ghost-r" aria-hidden="true">Systems</span>
  <div class="wrap">
    ${secHead('What goes on your roof', 'Every system we install, and when we would actually recommend it', 'We install across the whole range, from a builder grade shingle to a synthetic slate. Pick a system to see what it suits.')}
    <div class="explorer" data-explorer>
      <div class="explorer-tabs" role="tablist" aria-label="Roofing systems">
        ${MATERIALS.map((m, i) => `<button class="explorer-tab" type="button" role="tab" id="tab-${m.key}"
          aria-controls="panel-${m.key}" aria-selected="${i === 0}" tabindex="${i === 0 ? 0 : -1}">
          ${icon(m.icon)}${m.label}
        </button>`).join('')}
      </div>
      <div>
        ${MATERIALS.map((m, i) => `<div class="explorer-panel${i === 0 ? ' is-active' : ''}" role="tabpanel"
          id="panel-${m.key}" aria-labelledby="tab-${m.key}">
          <div>
            <h3>${m.h}</h3>
            <p>${m.p}</p>
            <dl class="spec-row">
              ${m.specs.map(([k, v]) => `<div><dt>${k}</dt><dd>${v}</dd></div>`).join('')}
            </dl>
          </div>
          <div class="explorer-media">${img(m.img, m.alt, { sizes: '(max-width:1024px) 100vw, 40vw' })}</div>
        </div>`).join('')}
      </div>
    </div>
  </div>
</section>`;
}

/* ---------- Drag compare ---------- */
export function compareSection({ tint = false } = {}) {
  return `
<section class="sec${tint ? ' sec-tint' : ''}">
  <span class="ghost" aria-hidden="true">Tile</span>
  <div class="wrap">
    <div class="split">
      <div>
        ${secHead('A real Champion project', 'Drag across a tile roof, mid install and finished', 'This is one of ours, photographed during the install and again on completion. Tile is slow, expensive to get wrong, and the reason a lot of roofers will not quote it.')}
        ${checks([
          ['Underlayment first.', 'What sits under the tile decides whether the roof lasts.'],
          ['Battens and fastening.', 'Set out before a single tile is loaded onto the roof.'],
          ['Every hip and valley.', 'Flashed and detailed by hand, not filled with sealant.'],
        ])}
        <div class="btn-row" style="margin-top:2rem">
          ${btn('/specialty-roofing', 'Specialty and tile roofing', '')}
          ${btn('/our-work', 'More projects', 'btn-ghost')}
        </div>
      </div>
      <div class="compare" data-compare data-reveal>
        ${img('real-tile-complete', 'Completed clay tile roof on an Oklahoma City home', { sizes: '(max-width:1024px) 100vw, 50vw' })}
        <div class="compare-top">${img('real-tile-during', 'The same tile roof during installation, with a Champion Roofing crew member setting tile at the ridge', { sizes: '(max-width:1024px) 100vw, 50vw' })}</div>
        <span class="compare-grip" aria-hidden="true"></span>
        <span class="compare-label l">During install</span>
        <span class="compare-label r">Completed</span>
        <input class="compare-range" type="range" min="0" max="100" value="50" aria-label="Reveal the roof during installation or completed">
      </div>
    </div>
  </div>
</section>`;
}

/* ---------- Reviews ---------- */
const initials = (name) => name.split(/\s+/).map((w) => w[0]).join('').slice(0, 2).toUpperCase();

export function reviewCard(r, { expandable = false } = {}) {
  // Long reviews clamp to a uniform height; a read more toggle reveals the rest.
  // The full text is always in the HTML, so crawlers see every word.
  const long = expandable && r.text.length > 260;
  return `<figure class="review${long ? ' is-clamp' : ''}"${expandable ? ' data-review-card' : ''}>
    <span class="review-mark" aria-hidden="true">${ICONS.ridgeSolid}</span>
    ${stars(r.rating || 5)}
    <blockquote><p>${r.text}</p></blockquote>
    ${long ? `<button class="review-more" type="button" aria-expanded="false">Read more${ICONS.chevron}</button>` : ''}
    <figcaption class="review-who">
      <span class="avatar">${initials(r.name)}</span>
      <span class="review-id">
        <b>${r.name}</b>
        <span>${r.location || 'Oklahoma City metro'}</span>
      </span>
    </figcaption>
    ${r.service ? `<span class="review-tag">${r.service}</span>` : ''}
  </figure>`;
}

/** Centre stage review carousel: active card centred, neighbours visible and dimmed. */
export function reviewCarousel(items) {
  if (!items.length) return '';
  return `<div class="rcar" data-rcar>
    <div class="rcar-track">${items.map((r, i) => `<div class="rcar-slide${i === 0 ? ' is-active' : ''}" data-i="${i}">${reviewCard(r)}</div>`).join('')}</div>
    <div class="rcar-ctl">
      <button class="rcar-btn" type="button" data-rdir="-1" aria-label="Previous review">${ICONS.arrowLongL}</button>
      <span class="rcar-count"><b data-rcur>01</b> / ${String(items.length).padStart(2, '0')}</span>
      <button class="rcar-btn" type="button" data-rdir="1" aria-label="Next review">${ICONS.arrowLong}</button>
    </div>
  </div>`;
}

/** Big rating block plus either real reviews or the verified topic evidence. */
export function reviewSection({ tint = false } = {}) {
  const hasReviews = ITEMS.length > 0;
  // Lead with roofing stories that carry real substance: substantive length,
  // and about the core work rather than a sideline like a fence.
  const CORE = ['replacement', 'repair', 'storm', 'insurance', 'inspection', 'gutters'];
  const featured = ITEMS.filter((r) => r.text.length > 220 && r.tags.some((t) => CORE.includes(t))).slice(0, 9);
  const marquee = hasReviews
    ? reviewCarousel(featured)
    : `<div class="topic-cloud">
        ${TOPICS.map((t) => `<span class="topic-chip"><b>${t.count}</b>${t.label}</span>`).join('')}
      </div>`;

  return `
<section class="sec${tint ? ' sec-tint' : ''}">
  <span class="ghost ghost-r" aria-hidden="true">Reviews</span>
  <div class="wrap">
    <div class="rating-split">
      <div data-reveal>
        ${eyebrow('What customers say')}
        <div class="rating-big">
          <b>${AGGREGATE.rating}</b>
          <span>${stars()}<span>${AGGREGATE.count} Google reviews</span></span>
        </div>
        <p style="margin-top:1.2rem;max-width:40ch;color:var(--body-dim)">${hasReviews
          ? 'Every review below is from the Champion Roofing Google Business Profile, published exactly as it was written.'
          : 'These are the topics Google itself pulled out of those reviews, with the number of reviews behind each one.'}</p>
        <div class="btn-row" style="margin-top:1.8rem">
          <a class="btn btn-dark" href="/reviews">All reviews${ICONS.arrow}</a>
          <a class="btn btn-ghost" href="${BIZ.mapsUrl}" rel="noopener" target="_blank">Read on Google${ICONS.arrow}</a>
        </div>
      </div>
      <div data-reveal data-reveal-delay="1">${marquee}</div>
    </div>
  </div>
</section>`;
}

/** Reviews tagged to one page. Falls back to the topic evidence for that page. */
export function pageReviews(path, heading, { tone = 'tint' } = {}) {
  const tagged = forPage(path);
  const topics = topicsForPage(path);
  if (!tagged.length && !topics.length) return '';

  if (!tagged.length) {
    return `
<section class="sec-sm sec-tint">
  <div class="wrap">
    <div class="topic-evidence" data-reveal>
      <div>
        ${eyebrow('Review evidence')}
        <h2 style="font-size:var(--t-h3);margin-block:.6rem .7rem">${heading}</h2>
        <p style="color:var(--body-dim);max-width:52ch">Google groups reviews by topic. These are the ones that point at this service, taken from the ${AGGREGATE.count} reviews on the Champion Roofing profile.</p>
      </div>
      <div class="topic-cloud">
        ${topics.map((t) => `<span class="topic-chip"><b>${t.count}</b>${t.label}</span>`).join('')}
        <a class="btn btn-ghost btn-sm" href="${BIZ.mapsUrl}" rel="noopener" target="_blank">Read on Google${ICONS.arrow}</a>
      </div>
    </div>
  </div>
</section>`;
  }

  return `
<section class="sec${tone === 'tint' ? ' sec-tint' : tone === 'dark' ? ' sec-dark' : ''}">
  <span class="ghost" aria-hidden="true">Reviews</span>
  <div class="wrap">
    ${secHead('What customers say', heading, `${tagged.length} of the ${AGGREGATE.count} reviews on the Champion Roofing Google profile mention this work. Published exactly as written.`)}
    ${reviewCarousel(tagged)}
    <div class="btn-row" style="margin-top:2rem">
      <a class="btn btn-dark" href="/reviews">All ${AGGREGATE.count} reviews${ICONS.arrow}</a>
      <a class="btn btn-ghost" href="${BIZ.mapsUrl}" rel="noopener" target="_blank">Read on Google${ICONS.arrow}</a>
    </div>
  </div>
</section>`;
}

/* ---------- Pull quote ---------- */
export function pullQuote(quote, cite) {
  return `
<section class="sec sec-dark quote-band">
  <!-- A folded roof plane in perspective, lit from the left. Built from stacked
       gradients rather than a photograph so the words stay the subject. -->
  <div class="quote-bg" aria-hidden="true">
    <svg width="100%" height="100%" preserveAspectRatio="xMidYMid slice" viewBox="0 0 1200 620">
      <defs>
        <linearGradient id="qFaceL" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stop-color="#3a1113"/><stop offset="1" stop-color="#160c0d"/>
        </linearGradient>
        <linearGradient id="qFaceR" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stop-color="#120a0b"/><stop offset="1" stop-color="#2a1012"/>
        </linearGradient>
        <linearGradient id="qEdge" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stop-color="rgba(226,36,37,.85)"/>
          <stop offset="1" stop-color="rgba(226,36,37,0)"/>
        </linearGradient>
        <radialGradient id="qGlow" cx="26%" cy="16%" r="78%">
          <stop offset="0" stop-color="rgba(240,96,95,.28)"/>
          <stop offset="1" stop-color="rgba(240,96,95,0)"/>
        </radialGradient>
      </defs>
      <!-- The fold sits in the lower third so nothing crosses the quote. -->
      <g class="qslab">
        <path d="M-60 900 600 430 600 560 -60 1030Z" fill="url(#qFaceL)"/>
        <path d="M1260 900 600 430 600 560 1260 1030Z" fill="url(#qFaceR)"/>
        <path d="M-60 900 600 430 1260 900" fill="none" stroke="url(#qEdge)" stroke-width="2.5"/>
        <path d="M-60 1010 600 540 1260 1010" fill="none" stroke="rgba(255,255,255,.08)" stroke-width="1.5"/>
        <path d="M-60 1120 600 650 1260 1120" fill="none" stroke="rgba(255,255,255,.05)" stroke-width="1.5"/>
      </g>
      <rect width="1200" height="620" fill="url(#qGlow)"/>
    </svg>
  </div>
  <div class="wrap">
    <div class="pullquote" data-reveal>
      <span class="quote-mark" aria-hidden="true">${ICONS.ridgeSolid}</span>
      <blockquote>${quote}</blockquote>
      <cite>${cite}</cite>
    </div>
  </div>
</section>`;
}

/* ---------- Service areas ---------- */
export function areasSection(compact = false) {
  const pin = (c) => `
    <g class="area-pin" data-city="${c.name}" tabindex="0" role="img" aria-label="${c.name}">
      <circle cx="${c.x * 5}" cy="${c.y * 4}" r="${c.name === BIZ.city ? 11 : 7}" fill="${c.name === BIZ.city ? '#e22425' : 'rgba(255,255,255,.42)'}"/>
      ${c.name === BIZ.city ? `<circle cx="${c.x * 5}" cy="${c.y * 4}" r="20" fill="none" stroke="#e22425" stroke-width="1.5" opacity=".5"/>` : ''}
      <text x="${c.x * 5}" y="${c.y * 4 - 15}" fill="rgba(255,255,255,.8)" font-size="15" text-anchor="middle" font-family="Inter, sans-serif">${c.name}</text>
    </g>`;

  return `
<section class="sec sec-dark" data-areas>
  <span class="ghost" aria-hidden="true">Metro</span>
  <div class="wrap">
    <div class="areas">
      <div class="area-map" data-reveal>
        <svg viewBox="0 0 500 400" role="img" aria-label="Map of the Oklahoma City metro showing the cities Champion Roofing serves">
          <rect width="500" height="400" fill="rgba(255,255,255,.03)" rx="18"/>
          <path d="M0 200h500M250 0v400" stroke="rgba(255,255,255,.06)" stroke-width="1"/>
          <path d="M0 100h500M0 300h500M125 0v400M375 0v400" stroke="rgba(255,255,255,.035)" stroke-width="1"/>
          ${BIZ.cities.map(pin).join('')}
        </svg>
      </div>
      <div>
        ${secHead('Where we work', 'Oklahoma City and the metro around it', 'We are based on North Council Road in northwest Oklahoma City and work across the metro. We would rather tell you we are not the right fit than stretch a crew somewhere we cannot look after you.')}
        <div class="area-chips">
          ${BIZ.cities.map((c) => `<a class="area-chip" href="/service-areas" data-city="${c.name}">${c.name}</a>`).join('')}
        </div>
        ${compact ? '' : `<p style="margin-top:1.6rem;font-size:.95rem;color:rgba(255,255,255,.6)">Outside these? Call the office anyway. Every neighbourhood in Oklahoma gets hit at some point, and we would rather point you somewhere good than leave you guessing.</p>`}
        <div class="btn-row" style="margin-top:2rem">
          ${btn('/service-areas', 'Service areas in detail', '')}
        </div>
      </div>
    </div>
  </div>
</section>`;
}

/* ---------- CTA band ---------- */
export function ctaBand(title, blurb, image = 'real-french-brick-estate') {
  return `
<section class="cta-band sec">
  <div class="cta-band-bg">${img(image, 'A Champion Roofing project in the Oklahoma City metro', { sizes: '100vw' })}</div>
  <div class="wrap">
    <h2>${title}</h2>
    <p>${blurb}</p>
    <div class="btn-row">
      ${btn('/contact', 'Book a free assessment', 'btn-lg')}
      <a class="btn btn-ghost btn-lg" href="tel:${BIZ.phoneRaw}">${ICONS.phone}${BIZ.phone}</a>
    </div>
  </div>
</section>`;
}

/* ---------- Page hero ---------- */
export function pageHero({ crumbs = [], eb, h1, lede, image, alt, ctas = true }) {
  return `
<section class="phero">
  <div class="phero-bg">${img(image, alt, { sizes: '100vw', loading: 'eager' })}</div>
  <div class="wrap">
    <nav aria-label="Breadcrumb">
      <ol class="crumbs">
        <li><a href="/">Home</a></li>
        ${crumbs.map((c, i) => `<li>${i === crumbs.length - 1
          ? `<span aria-current="page">${c.name}</span>`
          : `<a href="${c.path}">${c.name}</a>`}</li>`).join('')}
      </ol>
    </nav>
    ${eb ? `<div style="margin-top:1.4rem">${eyebrow(eb)}</div>` : ''}
    <h1>${h1}</h1>
    <p>${lede}</p>
    ${ctas ? `<div class="btn-row">
      ${btn('/contact', 'Free assessment', '')}
      <a class="btn btn-ghost" href="tel:${BIZ.phoneRaw}">${ICONS.phone}${BIZ.phone}</a>
    </div>` : ''}
  </div>
</section>`;
}

/* ---------- FAQ section ---------- */
export function faqSection(eb, title, blurb, items, tone = 'tint') {
  const cls = tone === true || tone === 'dark' ? ' sec-dark' : tone === 'light' ? '' : ' sec-tint';
  return `
<section class="sec${cls}">
  <span class="ghost" aria-hidden="true">Answers</span>
  <div class="wrap">
    ${secHead(eb, title, blurb)}
    ${faqBlock(items)}
  </div>
</section>`;
}

/* ---------- Service card grid ---------- */
export function serviceGrid(eb, title, blurb, items) {
  return `
<section class="sec">
  <span class="ghost" aria-hidden="true">Services</span>
  <div class="wrap">
    ${secHead(eb, title, blurb)}
    <div class="grid g-3">
      ${items.map((s, i) => `<a class="card svc-card" href="${s.path}" data-reveal data-reveal-delay="${i % 3}">
        <div class="card-media">
          ${img(s.img, s.alt, { sizes: '(max-width:760px) 100vw, (max-width:1024px) 50vw, 33vw' })}
          <span class="card-tag">${s.tag}</span>
        </div>
        <div class="card-body">
          <h3>${s.h}</h3>
          <p>${s.p}</p>
          <span class="link-ridge">${s.cta || 'Read more'}${ICONS.arrow}</span>
        </div>
      </a>`).join('')}
    </div>
  </div>
</section>`;
}

/* ---------- Split feature ---------- */
export function split({ eb, title, body, image, alt, reverse = false, list, cta, floatCard, tint = false, dark = false }) {
  return `
<section class="sec${dark ? ' sec-dark' : tint ? ' sec-tint' : ''}">
  <div class="wrap">
    <div class="split${reverse ? ' rev' : ''}">
      ${reverse ? '' : `<div class="split-media" data-reveal>${img(image, alt, { sizes: '(max-width:1024px) 100vw, 50vw' })}${floatCard ? floatCardHtml(floatCard) : ''}</div>`}
      <div data-reveal data-reveal-delay="1">
        ${eyebrow(eb)}
        <h2 style="font-size:var(--t-h2);margin-block:.7rem 1rem">${title}</h2>
        ${body.map((p) => `<p style="margin-bottom:1rem">${p}</p>`).join('')}
        ${list ? checks(list) : ''}
        ${cta ? `<div class="btn-row" style="margin-top:2rem">${cta}</div>` : ''}
      </div>
      ${reverse ? `<div class="split-media" data-reveal>${img(image, alt, { sizes: '(max-width:1024px) 100vw, 50vw' })}${floatCard ? floatCardHtml(floatCard) : ''}</div>` : ''}
    </div>
  </div>
</section>`;
}

function floatCardHtml(fc) {
  return `<div class="float-card"><span class="ridge-chip">${icon(fc.icon)}</span><span><b>${fc.title}</b><span>${fc.sub}</span></span></div>`;
}

/* ---------- Mosaic gallery ---------- */
export function mosaic(items) {
  return `<div class="mosaic">
    ${items.map((t) => `<figure class="tile${t.size ? ' ' + t.size : ''}" data-reveal>
      ${img(t.img, t.alt, { sizes: t.size === 'big' ? '(max-width:760px) 100vw, 50vw' : '(max-width:760px) 100vw, 25vw', ratio: t.size === 'big' ? 1 : t.size === 'wide' ? 0.5 : 1 })}
      <figcaption>${t.cap}</figcaption>
    </figure>`).join('')}
  </div>`;
}

/* ---------- Icon info grid (informational, not linked) ---------- */
export function infoGrid(eb, title, blurb, items, { dark = false, tint = false, cols = 3 } = {}) {
  return `
<section class="sec${dark ? ' sec-dark' : tint ? ' sec-tint' : ''}">
  <span class="ghost" aria-hidden="true">${eb.split(' ')[0]}</span>
  <div class="wrap">
    ${secHead(eb, title, blurb)}
    <div class="grid g-${cols}">
      ${items.map((it, i) => `<div class="${dark ? 'glow-card' : 'card'}" data-reveal data-reveal-delay="${i % cols}"${dark ? '' : ' style="padding:1.9rem"'}>
        <span class="ridge-chip">${icon(it.icon || 'ridge')}</span>
        <h3${dark ? '' : ' style="font-size:var(--t-h4);margin-block:1rem .55rem"'}>${it.h}</h3>
        <p${dark ? '' : ' style="font-size:.95rem;color:var(--body-dim)"'}>${it.p}</p>
      </div>`).join('')}
    </div>
  </div>
</section>`;
}

/* ---------- Long-form prose block ---------- */
export function proseSection(eb, title, html, { tint = false, aside = null } = {}) {
  return `
<section class="sec${tint ? ' sec-tint' : ''}">
  <div class="wrap">
    <div class="split" style="align-items:start;grid-template-columns:${aside ? '1.35fr .65fr' : '1fr'}">
      <div data-reveal>
        ${eyebrow(eb)}
        <h2 style="font-size:var(--t-h2);margin-block:.7rem 1.2rem">${title}</h2>
        <div class="prose" style="max-width:var(--max-text)">${html}</div>
      </div>
      ${aside ? `<aside data-reveal data-reveal-delay="1" style="position:sticky;top:110px">${aside}</aside>` : ''}
    </div>
  </div>
</section>`;
}

/* ---------- Honest limitations callout ---------- */
export function honestBlock(title, paras, list) {
  return `
<section class="sec sec-dark">
  <span class="ghost ghost-r" aria-hidden="true">Straight</span>
  <div class="wrap">
    <div class="split">
      <div data-reveal>
        ${eyebrow('Straight talk')}
        <h2 style="font-size:var(--t-h2);margin-block:.7rem 1.2rem">${title}</h2>
        ${paras.map((p) => `<p style="margin-bottom:1rem">${p}</p>`).join('')}
      </div>
      <div data-reveal data-reveal-delay="1">${checks(list)}</div>
    </div>
  </div>
</section>`;
}

/* ---------- Related internal links ---------- */
export function related(items, title = 'Where to go next') {
  return `
<section class="sec-sm">
  <div class="wrap">
    ${secHead('Keep reading', title, '')}
    <div class="grid g-4">
      ${items.map((it, i) => `<a class="card svc-card" href="${it.path}" data-reveal data-reveal-delay="${i % 4}" style="padding:1.6rem">
        <span class="ridge-chip">${icon(it.icon || 'ridge')}</span>
        <h3 style="font-size:1.08rem;margin-block:.95rem .4rem">${it.h}</h3>
        <p style="font-size:.9rem;color:var(--body-dim);flex:1">${it.p}</p>
        <span class="link-ridge" style="margin-top:.8rem">Open${ICONS.arrow}</span>
      </a>`).join('')}
    </div>
  </div>
</section>`;
}

/* ---------- Aside card for prose pages ---------- */
export function asideCard(title, rows, cta) {
  return `<div class="contact-panel">
    <div>
      ${eyebrow(title)}
      <div class="contact-rows" style="margin-top:1.2rem">
        ${rows.map((r) => `<div class="contact-row">${icon(r.icon || 'check')}<span><b>${r.h}</b>${r.p}</span></div>`).join('')}
      </div>
    </div>
    <a class="contact-phone" href="tel:${BIZ.phoneRaw}"><small>Call the office</small><b>${BIZ.phone}</b></a>
    ${cta || `<a class="btn" href="/contact">Free assessment${ICONS.arrow}</a>`}
  </div>`;
}

/* ---------- Interactive roof build-up ----------
   Replaces a wall of prose with a cross section you can click through.
   All copy is server rendered so crawlers and AI engines still read it. */
const LAYERS = [
  {
    key: 'deck', icon: 'house', label: 'The deck',
    h: 'Decking is where honesty gets tested',
    p: 'You cannot judge decking through an existing roof, which is why a complete tear off matters. Once the old roof is off, soft boards, water damage, inadequate thickness and gaps that fail code all become obvious. They can also be quietly covered by the next layer of underlayment, and you would never know. We document what we find. On an insurance job, code related decking conditions are documented for supplementation so the approved scope matches the roof as it actually is.',
  },
  {
    key: 'underlayment', icon: 'shield', label: 'Underlayment',
    h: 'The barrier that works when the covering does not',
    p: 'Underlayment is the secondary defence for when wind driven rain gets past the surface, which on an Oklahoma roof it periodically will. Ice and water protection goes into the areas that matter most: eaves, valleys and around every penetration. It is invisible the moment the covering goes down, which is exactly why it is the first thing a cheap quote reduces.',
  },
  {
    key: 'flashing', icon: 'wrench', label: 'Flashing',
    h: 'The part that decides the outcome',
    p: 'Every transition is a potential leak: chimneys, wall junctions, valleys, vent pipes, anything passing through the roof plane. Doing these properly takes time and metal. Doing them quickly takes sealant. Roofs that leak within a few years of replacement almost always leak at a transition, not in the middle of a slope.',
  },
  {
    key: 'covering', icon: 'tile', label: 'The covering',
    h: 'Material selection, honestly',
    p: 'We install across the whole range and will tell you where you genuinely do not need to spend more. Where the hail exposure here justifies it, we try to get customers into a class 4 impact rated shingle, and it is worth asking your carrier how they treat impact rated roofing. What we will not do is install a product we are not willing to warranty. We have moved customers off a product mid programme when a recall emerged and gone back to a system we trusted.',
  },
  {
    key: 'ventilation', icon: 'bolt', label: 'Ventilation',
    h: 'Easy to ignore, expensive to skip',
    p: 'A roof that cannot breathe cooks its own decking from underneath and shortens the life of the covering above it. Oklahoma summers make that considerably worse than it is in a milder climate. Ridge and intake ventilation is part of the system, not an accessory somebody adds if there is budget left over.',
  },
];

export function roofBuildUp(eb = 'The build up', title = 'What separates a good roof from a cheap one') {
  return `
<section class="sec sec-dark">
  <span class="ghost" aria-hidden="true">Layers</span>
  <div class="wrap">
    ${secHead(eb, title, 'Two roofers can quote the same house and use a shingle with the same name on the wrapper. The difference is almost never the shingle. Click through the build up.')}
    <div class="buildup" data-buildup>
      <div class="buildup-list" role="tablist" aria-label="Roof layers">
        ${LAYERS.map((l, i) => `<button class="buildup-tab" type="button" role="tab" id="lay-${l.key}"
          aria-controls="laypanel-${l.key}" aria-selected="${i === 0}" tabindex="${i === 0 ? 0 : -1}" data-layer="${l.key}">
          <span class="ridge-chip">${icon(l.icon)}</span>
          <span class="buildup-tab-txt"><b>${l.label}</b><span>${l.h}</span></span>
        </button>`).join('')}
      </div>
      <div class="buildup-stage">
        <svg viewBox="0 0 420 320" role="img" aria-label="Cross section of a roof build up">
          <g class="lay" data-lay="deck">
            <path d="M40 250 210 150 380 250 380 268 210 168 40 268Z" fill="#4a3a2c" stroke="rgba(255,255,255,.25)" stroke-width="1.5"/>
          </g>
          <g class="lay" data-lay="underlayment">
            <path d="M40 232 210 132 380 232 380 246 210 146 40 246Z" fill="#2f3a4a" stroke="rgba(255,255,255,.25)" stroke-width="1.5"/>
          </g>
          <g class="lay" data-lay="flashing">
            <path d="M196 120 216 120 216 150 196 150Z" fill="#8a8f96" stroke="rgba(255,255,255,.35)" stroke-width="1.5"/>
            <path d="M186 148 226 148 226 158 186 158Z" fill="#b6bcc4" stroke="rgba(255,255,255,.35)" stroke-width="1.5"/>
          </g>
          <g class="lay" data-lay="covering">
            <path d="M40 214 210 114 380 214 380 230 210 130 40 230Z" fill="#7d2224" stroke="rgba(255,255,255,.3)" stroke-width="1.5"/>
            <path d="M96 196 128 214M152 168 184 186M264 186 296 168M320 214 352 196" stroke="rgba(255,255,255,.22)" stroke-width="1.5"/>
          </g>
          <g class="lay" data-lay="ventilation">
            <path d="M188 112 232 112 226 100 194 100Z" fill="#c9a44d" stroke="rgba(255,255,255,.4)" stroke-width="1.5"/>
            <path d="M200 96v-14M210 96v-20M220 96v-14" stroke="#c9a44d" stroke-width="2.5" stroke-linecap="round"/>
          </g>
        </svg>
      </div>
      <div class="buildup-panels">
        ${LAYERS.map((l, i) => `<div class="buildup-panel${i === 0 ? ' is-active' : ''}" role="tabpanel"
          id="laypanel-${l.key}" aria-labelledby="lay-${l.key}">
          <h3>${l.h}</h3>
          <p>${l.p}</p>
        </div>`).join('')}
      </div>
    </div>
  </div>
</section>`;
}

/* ---------- Detail accordion ----------
   Long-form depth, presented as designed disclosure rather than a wall of text.
   Server rendered and collapsed with CSS so crawlers still read every word. */
export function detailAccordion(eb, title, blurb, items, { dark = false, tint = false } = {}) {
  return `
<section class="sec${dark ? ' sec-dark' : tint ? ' sec-tint' : ''}">
  <span class="ghost ghost-r" aria-hidden="true">Detail</span>
  <div class="wrap">
    ${secHead(eb, title, blurb)}
    <div class="detail-grid">
      ${items.map((it, i) => `<details class="detail-card" data-reveal data-reveal-delay="${i % 3}"${i === 0 ? ' open' : ''}>
        <summary>
          <span class="ridge-chip">${icon(it.icon || 'ridge')}</span>
          <span class="detail-sum"><b>${it.h}</b><span>${it.sub || ''}</span></span>
        </summary>
        <div class="detail-body">${it.p.split('\n\n').map((p) => `<p>${p}</p>`).join('')}</div>
      </details>`).join('')}
    </div>
  </div>
</section>`;
}

/* ---------- Annotated roof ----------
   The inspection checklist as hotspots on a roof rather than a list.
   Used on /roof-inspection so the orbit diagram stays unique to the homepage. */
const HOTSPOTS = [
  { x: 50, y: 30, n: 1, h: 'The field', p: 'Overall shingle condition, granular loss and hail impact marks, read across every elevation rather than one convenient slope.' },
  { x: 30, y: 20, n: 2, h: 'Chimney and flashing', p: 'Where the roof meets something else. These transitions are the origin of a leak far more often than the open field is.' },
  { x: 68, y: 44, n: 3, h: 'Penetrations', p: 'Pipe boots, vents and anything else passing through the plane. Rubber collars perish long before the shingles around them do.' },
  { x: 22, y: 55, n: 4, h: 'Valleys and eaves', p: 'Where water concentrates and leaves the roof. Debris, backup and detailing all get checked here.' },
  { x: 80, y: 66, n: 5, h: 'Gutters and soft metals', p: 'These dent under hail that a shingle absorbs invisibly, so they establish what a storm actually did.' },
  { x: 46, y: 74, n: 6, h: 'Screens and fencing', p: 'Marked readily by hail, and frequently damaged in their own right. Documented while the adjuster is still involved.' },
];

export function annotatedRoof() {
  return `
<section class="sec sec-dark" data-hotspots>
  <span class="ghost" aria-hidden="true">Checked</span>
  <div class="wrap">
    ${secHead('The checklist', 'Six things we look at, on every roof', 'Not a marketing summary. This is the list our inspectors actually work through. Tap a marker.')}
    <div class="hotspot-wrap">
      <figure class="hotspot-media">
        ${img('real-luxury-brick-home', 'A residential roof with inspection points marked', { sizes: '(max-width:1024px) 100vw, 58vw' })}
        ${HOTSPOTS.map((s, i) => `<button class="hotspot" type="button" data-spot="${i}"
          style="left:${s.x}%;top:${s.y}%" aria-label="${esc(s.h)}"${i === 0 ? ' aria-pressed="true"' : ''}>
          <span>${s.n}</span>
        </button>`).join('')}
      </figure>
      <div class="hotspot-panels">
        ${HOTSPOTS.map((s, i) => `<article class="hotspot-panel${i === 0 ? ' is-active' : ''}" data-panel="${i}">
          <span class="hotspot-num">0${s.n}</span>
          <h3>${s.h}</h3>
          <p>${s.p}</p>
        </article>`).join('')}
        <p class="hotspot-note">When the drone imagery cannot confirm damage or find a leak, the inspector gets on the roof and into the attic. Findings come back to you as a report by email either way.</p>
      </div>
    </div>
  </div>
</section>`;
}

/* ---------- Editorial stack ----------
   Alternating image and text bands. Replaces long prose and repeated accordions
   with something that reads like a magazine feature. */
export function editorialStack(eb, title, blurb, items, { tint = false } = {}) {
  return `
<section class="sec${tint ? ' sec-tint' : ''}">
  <span class="ghost ghost-r" aria-hidden="true">${eb.split(' ')[0]}</span>
  <div class="wrap">
    ${secHead(eb, title, blurb)}
    <div class="ed-stack">
      ${items.map((it, i) => `<article class="ed-row${i % 2 ? ' rev' : ''}" data-reveal>
        <figure class="ed-media">
          ${img(it.img, it.alt, { sizes: '(max-width:900px) 100vw, 46vw' })}
          <figcaption class="ed-index">${String(i + 1).padStart(2, '0')}</figcaption>
        </figure>
        <div class="ed-body">
          ${it.kicker ? `<span class="ed-kicker">${icon(it.icon || 'ridge')}${it.kicker}</span>` : ''}
          <h3>${it.h}</h3>
          ${it.p.split('\n\n').map((p) => `<p>${p}</p>`).join('')}
        </div>
      </article>`).join('')}
    </div>
  </div>
</section>`;
}

/* ---------- Gallery trio ----------
   Three images with concise content beneath. Replaces the long alternating
   image bands: fewer, larger pictures and less scrolling. */
export function galleryTrio(eb, title, blurb, items, { tint = false, dark = false } = {}) {
  return `
<section class="sec${dark ? ' sec-dark' : tint ? ' sec-tint' : ''}">
  <span class="ghost ghost-r" aria-hidden="true">${eb.split(' ')[0]}</span>
  <div class="wrap">
    ${secHead(eb, title, blurb)}
    <div class="trio">
      ${items.slice(0, 3).map((it, i) => `<article class="trio-item" data-reveal data-reveal-delay="${i}">
        <figure class="trio-media">
          ${img(it.img, it.alt, { sizes: '(max-width:900px) 100vw, 33vw' })}
          <span class="trio-num">${String(i + 1).padStart(2, '0')}</span>
        </figure>
        <h3>${it.h}</h3>
        ${it.p.split('\n\n').map((p) => `<p>${p}</p>`).join('')}
      </article>`).join('')}
    </div>
  </div>
</section>`;
}

/* ---------- Sticky feature ----------
   The image pins while the copy scrolls past it and swaps as each block
   arrives. No cards, no numbered list, no accordion. */
export function stickyFeature(eb, title, blurb, items, { tint = false, dark = false } = {}) {
  return `
<section class="sec${dark ? ' sec-dark' : tint ? ' sec-tint' : ''}" data-sticky>
  <span class="ghost ghost-r" aria-hidden="true">${eb.split(' ')[0]}</span>
  <div class="wrap">
    ${secHead(eb, title, blurb)}
    <div class="stik">
      <div class="stik-media" aria-hidden="true">
        <div class="stik-frame">
          ${items.map((it, i) => `<figure class="stik-img${i === 0 ? ' is-live' : ''}" data-img="${i}">
            ${img(it.img, it.alt, { sizes: '(max-width:900px) 100vw, 48vw' })}
          </figure>`).join('')}
          <span class="stik-rule"><i data-stik-bar></i></span>
        </div>
      </div>
      <div class="stik-copy">
        ${items.map((it, i) => `<article class="stik-block" data-block="${i}">
          <h3>${it.h}</h3>
          ${it.p.split('\n\n').map((p) => `<p>${p}</p>`).join('')}
        </article>`).join('')}
      </div>
    </div>
  </div>
</section>`;
}

/* ---------- Manifesto ----------
   Commitments set as an editorial ledger: the claim on the left, the substance
   on the right, hairline rules between. The owner's own words are pulled out. */
export function manifesto(eb, title, blurb, items, { dark = false } = {}) {
  return `
<section class="sec${dark ? ' sec-dark' : ''}">
  <span class="ghost" aria-hidden="true">${eb.split(' ')[0]}</span>
  <div class="wrap">
    ${secHead(eb, title, blurb)}
    <div class="ledger">
      ${items.map((it) => `<article class="ledger-row" data-reveal>
        <div class="ledger-claim">
          <span class="ridge-chip">${icon(it.icon || 'ridge')}</span>
          <h3>${it.h}</h3>
        </div>
        <div class="ledger-body">
          ${it.quote ? `<blockquote class="ledger-quote">${it.quote}</blockquote>` : ''}
          ${it.p.split('\n\n').map((p) => `<p>${p}</p>`).join('')}
        </div>
      </article>`).join('')}
    </div>
  </div>
</section>`;
}

/* ---------- Error page ----------
   Giant ghost code, the ridge motif, a plain statement and the most likely
   destinations. No hero, no template sections. Used for 404 and 410. */
export function errorPage(code, h1, lede, links) {
  return `
<section class="errpage">
  <span class="errpage-ghost" aria-hidden="true">${code}</span>
  <svg class="errpage-ridge" viewBox="0 0 1200 220" preserveAspectRatio="none" aria-hidden="true">
    <path d="M0 220 600 30 1200 220" fill="none" stroke="rgba(226,36,37,.6)" stroke-width="2"/>
    <path d="M0 260 600 70 1200 260" fill="none" stroke="rgba(255,255,255,.08)" stroke-width="1.5"/>
  </svg>
  <div class="wrap errpage-inner">
    <span class="errpage-code">${ICONS.ridgeSolid} Error ${code}</span>
    <h1>${h1}</h1>
    <p class="errpage-lede">${lede}</p>
    <div class="errpage-links">
      ${links.map((l) => `<a class="errpage-link" href="${l.path}">
        <span class="ridge-chip">${icon(l.icon)}</span>
        <span class="errpage-link-txt"><b>${l.h}</b><span>${l.p}</span></span>
        ${ICONS.arrow}
      </a>`).join('')}
    </div>
    <p class="errpage-foot">Or call the office on <a href="tel:${BIZ.phoneRaw}">${BIZ.phone}</a> and someone will point you the right way.</p>
  </div>
</section>`;
}
