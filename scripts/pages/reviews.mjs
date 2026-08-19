import { BIZ } from '../data.mjs';
import { AGGREGATE, ITEMS } from '../reviews.mjs';
import { ICONS, icon, btn, eyebrow, secHead, stars } from '../lib.mjs';
import { pageHero, related, ctaBand, ticker, reviewCard, statStrip } from '../sections.mjs';

export default {
  path: '/reviews',
  priority: '0.7',
  title: `Reviews | ${BIZ.rating} from ${BIZ.reviewCount} Google Reviews | Champion Roofing`,
  desc: `Champion Roofing holds a ${BIZ.rating} rating across ${BIZ.reviewCount} Google reviews in Oklahoma City. See what customers say about the roofing, the gutters and the process.`,
  ogImage: 'real-luxury-brick-home',
  crumbs: [{ name: 'Reviews', path: '/reviews' }],
  body: `
${pageHero({
    crumbs: [{ name: 'Reviews', path: '/reviews' }],
    eb: 'Reviews',
    h1: `${AGGREGATE.rating} across ${AGGREGATE.count} Google reviews`,
    lede: 'Every review Champion Roofing has on Google, published exactly as it was written. We do not edit reviews, and we do not ask customers to mention particular services.',
    image: 'real-luxury-brick-home',
    alt: 'A brick and stone Oklahoma City home with a designer shingle roof',
  })}

${statStrip([
    { pre: AGGREGATE.rating, label: 'Average Google rating' },
    { count: AGGREGATE.count, label: 'Total Google reviews' },
    { count: 13, label: 'Reviews that mention gutters' },
    { count: 22, label: 'Years in Oklahoma City' },
  ])}

<section class="sec sec-tint">
  <span class="ghost ghost-r" aria-hidden="true">Reviews</span>
  <div class="wrap">
    <div class="rev-head" data-reveal>
      <div>
        ${eyebrow('Most recent')}
        <h2>The last twelve, in their own words</h2>
        <p>Newest first, exactly as written. The rest are on Google, and the link is below.</p>
      </div>
      <a class="btn btn-dark" href="${BIZ.writeReviewUrl}" rel="noopener" target="_blank">${icon('star')}Write a review</a>
    </div>
    <div class="rev-grid">
      ${ITEMS.slice(0, 12).map((r) => reviewCard(r, { expandable: true })).join('')}
    </div>
    <div class="btn-row" style="margin-top:2.4rem">
      <a class="btn btn-ghost" href="${BIZ.mapsUrl}" rel="noopener" target="_blank">Read all ${AGGREGATE.count} on Google${ICONS.arrow}</a>
    </div>
  </div>
</section>

<section class="sec sec-dark">
  <div class="wrap">
    <div class="split">
      <div data-reveal>
        ${eyebrow('How we treat reviews')}
        <h2 style="font-size:var(--t-h2);margin-block:.7rem 1.2rem">We do not coach reviews</h2>
        <p style="margin-bottom:1rem">Some of our people ask customers for a review at the end of a job, which is normal. What we do not do is tell anybody what to write, ask them to mention a particular service, or work keywords into somebody else's words.</p>
        <p style="margin-bottom:1rem">The owner's view on why the reputation matters is simple enough: <strong>in Oklahoma, your name gets spread pretty fast if you do a bad job.</strong> Most of our work comes from repeat customers and referrals, which makes the reviews a consequence of the work rather than a marketing exercise.</p>
        <p>If a job goes wrong, we would rather you called the office than left it in a review. Either way we will come and deal with it.</p>
      </div>
      <div data-reveal data-reveal-delay="1">
        <div class="glow-card">
          <span class="ridge-chip">${icon('star')}</span>
          <h3>Worked with us? Leave a review</h3>
          <p>If we have worked on your roof and you have something to say about it, good or otherwise, the Google profile is the place. It takes a minute.</p>
          <div class="btn-row" style="margin-top:1.6rem">
            <a class="btn" href="${BIZ.writeReviewUrl}" rel="noopener" target="_blank">Write a review on Google${ICONS.arrow}</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

${related([
    { path: '/our-work', icon: 'award', h: 'Our work', p: 'The roofs behind the reviews.' },
    { path: '/about', icon: 'users', h: 'About us', p: 'How Champion Roofing works.' },
    { path: '/gutters', icon: 'gutter', h: 'Seamless gutters', p: 'The service customers mention most after the roof.' },
    { path: '/contact', icon: 'phone', h: 'Contact', p: 'Speak to the office.' },
  ])}

${ctaBand('Fifty nine people said yes. Your roof is next.', 'A free drone assessment, the findings talked through on site, and a written report by email. If your roof is fine, we will tell you it is fine.', 'real-ranch-new-roof')}
`,
};
