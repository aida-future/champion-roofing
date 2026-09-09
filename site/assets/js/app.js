/* Champion Roofing, front-end behaviour.
   Everything degrades: with JS off the CSS no-js fallbacks keep the page usable.
   Nothing here animates a photograph. Containers move; images stay still. */
(function () {
  'use strict';

  document.documentElement.classList.remove('no-js');

  var reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var finePointer = window.matchMedia('(pointer: fine)').matches;
  var $ = function (s, c) { return (c || document).querySelector(s); };
  var $$ = function (s, c) { return Array.prototype.slice.call((c || document).querySelectorAll(s)); };

  /* ---------- Scroll progress + sticky header ---------- */
  var bar = $('.scroll-bar');
  var head = $('.site-head');
  var ticking = false;
  function onScroll() {
    if (bar) {
      var max = document.documentElement.scrollHeight - window.innerHeight;
      bar.style.transform = 'scaleX(' + (max > 0 ? window.scrollY / max : 0) + ')';
    }
    if (head) head.classList.toggle('is-stuck', window.scrollY > 12);
    ticking = false;
  }
  window.addEventListener('scroll', function () {
    if (!ticking) { window.requestAnimationFrame(onScroll); ticking = true; }
  }, { passive: true });
  onScroll();

  /* ---------- Reveal on scroll ---------- */
  var revealables = $$('[data-reveal]');
  if (revealables.length) {
    if (reduced || !('IntersectionObserver' in window)) {
      revealables.forEach(function (el) { el.classList.add('is-in'); });
    } else {
      var io = new IntersectionObserver(function (entries) {
        entries.forEach(function (e) {
          if (e.isIntersecting) { e.target.classList.add('is-in'); io.unobserve(e.target); }
        });
      }, { rootMargin: '0px 0px -8% 0px', threshold: 0.08 });
      revealables.forEach(function (el) { io.observe(el); });
    }
  }

  /* ---------- Mobile drawer ---------- */
  var burger = $('.burger');
  var drawer = $('.drawer');
  var scrim = $('.scrim');
  function setDrawer(open) {
    if (!drawer) return;
    drawer.classList.toggle('is-open', open);
    if (scrim) scrim.classList.toggle('is-open', open);
    if (burger) burger.setAttribute('aria-expanded', String(open));
    document.body.style.overflow = open ? 'hidden' : '';
  }
  if (burger) burger.addEventListener('click', function () {
    setDrawer(!drawer.classList.contains('is-open'));
  });
  if (scrim) scrim.addEventListener('click', function () { setDrawer(false); });
  var drawerClose = $('.drawer-close');
  if (drawerClose) drawerClose.addEventListener('click', function () { setDrawer(false); });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') setDrawer(false);
  });

  /* ---------- Mega menu: hover for mouse, click for touch ---------- */
  $$('.nav > li').forEach(function (li) {
    var mega = $('.mega', li);
    if (!mega) return;
    var btn = li.firstElementChild;
    var closeTimer;

    // Keep the panel inside the viewport: it is anchored to the left of its
    // nav item, so an item far along the bar would push it off the right edge.
    var clamp = function () {
      mega.style.left = '0px';
      var pad = parseFloat(getComputedStyle(document.documentElement)
        .getPropertyValue('--pad-x')) || 16;
      var r = mega.getBoundingClientRect();
      var spill = r.right - (window.innerWidth - pad);
      if (spill > 0) mega.style.left = (-spill) + 'px';
    };
    var open = function () {
      li.classList.add('is-open');
      if (btn) btn.setAttribute('aria-expanded', 'true');
      clamp();
    };
    var shut = function () {
      li.classList.remove('is-open');
      if (btn) btn.setAttribute('aria-expanded', 'false');
    };
    window.addEventListener('resize', function () {
      if (li.classList.contains('is-open')) clamp();
    });
    if (finePointer) {
      li.addEventListener('mouseenter', function () {
        clearTimeout(closeTimer);
        open();
      });
      li.addEventListener('mouseleave', function () {
        closeTimer = setTimeout(shut, 160);
      });
    }
    // Keyboard: the panel follows focus into and out of the item.
    li.addEventListener('focusin', function () { open(); });
    li.addEventListener('focusout', function (e) {
      if (!li.contains(e.relatedTarget)) shut();
    });
    // Touch: the first tap opens the panel, a second tap follows the link.
    if (btn && !finePointer) {
      btn.addEventListener('click', function (e) {
        if (!li.classList.contains('is-open')) { e.preventDefault(); open(); }
      });
    }
  });
  document.addEventListener('click', function (e) {
    if (!e.target.closest('.nav')) {
      $$('.nav > li.is-open').forEach(function (li) {
        li.classList.remove('is-open');
        var b = li.firstElementChild;
        if (b) b.setAttribute('aria-expanded', 'false');
      });
    }
  });

  /* ---------- Live open/closed status, Oklahoma time ---------- */
  $$('[data-status]').forEach(function (pill) {
    var openH = Number(pill.getAttribute('data-open-hour') || 9);
    var closeH = Number(pill.getAttribute('data-close-hour') || 17);
    function fmt(h) {
      var suffix = h >= 12 ? 'pm' : 'am';
      var hh = h % 12 === 0 ? 12 : h % 12;
      return hh + suffix;
    }
    function update() {
      // Read the current time as it is in Oklahoma City, wherever the visitor is.
      var parts = new Intl.DateTimeFormat('en-US', {
        timeZone: 'America/Chicago', weekday: 'short', hour: 'numeric', hour12: false
      }).formatToParts(new Date());
      var lookup = {};
      parts.forEach(function (p) { lookup[p.type] = p.value; });
      var day = lookup.weekday;
      var hour = Number(lookup.hour) % 24;
      var weekday = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'].indexOf(day) > -1;
      var open = weekday && hour >= openH && hour < closeH;

      var label = $('[data-status-text]', pill);
      pill.setAttribute('data-open', String(open));
      if (!label) return;
      if (open) {
        label.textContent = 'Open now, until ' + fmt(closeH);
      } else if (weekday && hour < openH) {
        label.textContent = 'Opens today at ' + fmt(openH);
      } else {
        var next = (day === 'Fri' || day === 'Sat' || day === 'Sun') ? 'Monday' : 'tomorrow';
        label.textContent = 'Closed, opens ' + next + ' ' + fmt(openH);
      }
    }
    update();
    setInterval(update, 60000);
  });

  /* ---------- Hero slider ---------- */
  var hero = $('[data-hero]');
  if (hero) {
    var slides = $$('.hero-slide', hero);
    var capEl = $('[data-hero-caption]');
    var curEl = $('[data-hero-current]');
    var totEl = $('[data-hero-total]');
    var fill = $('.hero-progress i');
    var idx = 0;
    var DUR = 8000;
    var timer = null;
    var startedAt = 0;
    var raf = null;

    if (totEl) totEl.textContent = String(slides.length).padStart(2, '0');

    var badgeEl = $('[data-hero-badge]');
    var h1El = $('[data-hero-h1]');
    var ledeEl = $('[data-hero-lede]');

    // Amprite pattern: badge, headline and lede all change with the slide.
    // The <h1> element itself is never replaced, only its content, so the
    // page keeps exactly one h1 and slide one's headline is what is baked in
    // the HTML for crawlers and the first paint.
    function swapText(el, txt, asHtml) {
      if (!el) return;
      var cur = asHtml ? el.innerHTML : el.textContent;
      if (cur === txt) return;
      el.classList.add('is-fading');
      setTimeout(function () {
        if (asHtml) el.innerHTML = txt; else el.textContent = txt;
        el.classList.remove('is-fading');
      }, 260);
    }

    function paint(n) {
      slides.forEach(function (s, i) { s.classList.toggle('is-active', i === n); });
      if (capEl) capEl.textContent = slides[n].getAttribute('data-caption') || '';
      if (curEl) curEl.textContent = String(n + 1).padStart(2, '0');
      swapText(badgeEl, slides[n].getAttribute('data-badge') || '');
      swapText(h1El, slides[n].getAttribute('data-h1') || '', true);
      swapText(ledeEl, slides[n].getAttribute('data-lede') || '');
    }
    function tickProgress() {
      if (!fill) return;
      var pct = Math.min(1, (Date.now() - startedAt) / DUR);
      fill.style.width = (pct * 100) + '%';
      raf = requestAnimationFrame(tickProgress);
    }
    function go(n) {
      idx = (n + slides.length) % slides.length;
      paint(idx);
      startedAt = Date.now();
      if (fill) fill.style.width = '0%';
    }
    function play() {
      if (reduced || slides.length < 2) return;
      stop();
      startedAt = Date.now();
      timer = setInterval(function () { go(idx + 1); }, DUR);
      raf = requestAnimationFrame(tickProgress);
    }
    function stop() {
      clearInterval(timer);
      if (raf) cancelAnimationFrame(raf);
    }

    paint(0);
    play();

    $$('[data-dir]', hero.parentNode || document).forEach(function (b) {
      b.addEventListener('click', function () {
        go(idx + (b.getAttribute('data-dir') === 'next' ? 1 : -1));
        play();
      });
    });
    // Pause while the tab is hidden so the progress bar never desyncs.
    document.addEventListener('visibilitychange', function () {
      if (document.hidden) stop(); else play();
    });
  }

  /* ---------- Line drawings: draw once the band is properly in view ---------- */
  var drawings = $$('[data-draw]');
  if (drawings.length) {
    if (reduced || !('IntersectionObserver' in window)) {
      drawings.forEach(function (el) { el.classList.add('is-drawn'); });
    } else {
      var dio = new IntersectionObserver(function (entries) {
        entries.forEach(function (e) {
          if (!e.isIntersecting) return;
          e.target.classList.add('is-drawn');
          dio.unobserve(e.target);
        });
      }, { threshold: 0.35 });
      drawings.forEach(function (el) { dio.observe(el); });
    }
  }

  /* ---------- Our work: open any photo larger ---------- */
  var tiles = $$('.mosaic .tile');
  if (tiles.length && 'HTMLDialogElement' in window) {
    var CHEV_L = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m15 6-6 6 6 6"/></svg>';
    var CHEV_R = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m9 6 6 6-6 6"/></svg>';
    var CLOSE = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M18 6 6 18M6 6l12 12"/></svg>';
    var lb = document.createElement('dialog');
    lb.className = 'lightbox';
    lb.setAttribute('aria-label', 'Project photo');
    lb.innerHTML = '<button class="lb-close" type="button" aria-label="Close">' + CLOSE + '</button>' +
      '<button class="lb-nav lb-prev" type="button" data-lb="-1" aria-label="Previous photo">' + CHEV_L + '</button>' +
      '<figure><img alt=""><figcaption></figcaption></figure>' +
      '<button class="lb-nav lb-next" type="button" data-lb="1" aria-label="Next photo">' + CHEV_R + '</button>';
    document.body.appendChild(lb);
    var lbImg = $('img', lb), lbCap = $('figcaption', lb), cur = 0;
    // The largest candidate in the srcset, so the enlarged view is not the thumbnail.
    function largest(img) {
      var best = img.currentSrc || img.src, w = 0;
      (img.getAttribute('srcset') || '').split(',').forEach(function (part) {
        var m = part.trim().split(/\s+/);
        var n = parseInt(m[1], 10);
        if (n > w) { w = n; best = m[0]; }
      });
      return best;
    }
    function show(i) {
      cur = (i + tiles.length) % tiles.length;
      var im = $('img', tiles[cur]);
      var cap = $('figcaption', tiles[cur]);
      lbImg.src = largest(im);
      lbImg.alt = im.alt;
      lbCap.textContent = cap ? cap.textContent : '';
    }
    tiles.forEach(function (t, i) {
      var cap = $('figcaption', t);
      t.setAttribute('tabindex', '0');
      t.setAttribute('role', 'button');
      t.setAttribute('aria-label', 'View larger: ' + (cap ? cap.textContent : 'project photo'));
      var openIt = function () { show(i); lb.showModal(); };
      t.addEventListener('click', openIt);
      t.addEventListener('keydown', function (e) { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); openIt(); } });
    });
    $('.lb-close', lb).addEventListener('click', function () { lb.close(); });
    $$('[data-lb]', lb).forEach(function (b) {
      b.addEventListener('click', function () { show(cur + Number(b.getAttribute('data-lb'))); });
    });
    lb.addEventListener('click', function (e) { if (e.target === lb) lb.close(); });
    lb.addEventListener('keydown', function (e) {
      if (e.key === 'ArrowRight') show(cur + 1);
      if (e.key === 'ArrowLeft') show(cur - 1);
    });
  }

  /* ---------- Sixty second roof check ---------- */
  $$('[data-rcheck]').forEach(function (root) {
    var form = $('[data-rcheck-form]', root);
    var steps = $$('.rcheck-step', form);
    var marks = $$('.rcheck-steps li', root);
    var back = $('[data-rcheck-back]', root);
    var next = $('[data-rcheck-next]', root);
    var hint = $('[data-rcheck-hint]', root);
    var cur = $('[data-rcheck-cur]', root);
    var result = $('[data-rcheck-result]', root);
    var i = 0;

    function paint() {
      steps.forEach(function (s, n) { s.classList.toggle('is-live', n === i); });
      marks.forEach(function (m, n) { m.classList.toggle('is-live', n === i); m.classList.toggle('is-done', n < i); });
      back.disabled = i === 0;
      cur.textContent = String(i + 1);
      next.innerHTML = (i === steps.length - 1 ? 'See the answer' : 'Next') + next.querySelector('svg').outerHTML;
      hint.hidden = true;
    }
    function picked(step) { return $$('input:checked', step).map(function (el) { return el.value; }); }
    // The "nothing" chip is exclusive with the others.
    // Multi choice moves on by itself: at once for "nothing", otherwise a
    // beat after the last pick so several boxes can still be ticked.
    var multiTimer;
    $$('input[name="signs"]', form).forEach(function (box) {
      box.addEventListener('change', function () {
        if (box.value === 'none' && box.checked) $$('input[name="signs"]', form).forEach(function (o) { if (o !== box) o.checked = false; });
        else if (box.checked) { var none = $('input[name="signs"][value="none"]', form); if (none) none.checked = false; }
        clearTimeout(multiTimer);
        if (!picked(steps[i]).length) return;
        multiTimer = setTimeout(function () { if (i === 2) { i++; paint(); } }, box.value === 'none' ? 260 : 1400);
      });
    });
    // A single choice advances on its own; multi choice waits for Next.
    $$('input[type="radio"]', form).forEach(function (r) {
      r.addEventListener('change', function () { setTimeout(function () { if (i < steps.length - 1) { i++; paint(); } else finish(); }, 260); });
    });
    next.addEventListener('click', function () {
      if (!picked(steps[i]).length) { hint.hidden = false; return; }
      if (i < steps.length - 1) { i++; paint(); } else finish();
    });
    back.addEventListener('click', function () { if (i > 0) { i--; paint(); } });

    var SERVICE = { shingle: 'Roof inspection or assessment', tile: 'Specialty or tile roofing', metal: 'Metal roofing', flat: 'Commercial roofing', unsure: 'Roof inspection or assessment' };
    var LABEL = { stain: 'a stain on a ceiling', yard: 'shingles in the yard', granules: 'granules in the gutters', lifted: 'lifted or missing shingles', dents: 'dents on gutters or vents' };
    var AGE = { new: '0 to 5 years old', mid: '6 to 12 years old', older: '13 to 20 years old', old: 'over 20 years old', unsure: 'age unknown' };

    function finish() {
      var age = picked(steps[0])[0], storm = picked(steps[1])[0], signs = picked(steps[2]).filter(function (v) { return v !== 'none'; });
      var type = picked(steps[3])[0], street = picked(steps[4])[0];
      var score = signs.length * 2 + (storm === 'yes' ? 2 : storm === 'unsure' ? 1 : 0) + (age === 'older' ? 1 : age === 'old' ? 2 : 0) + (street === 'yes' ? 1 : 0);
      var tier = score >= 4 ? 'now' : score >= 2 ? 'watch' : 'fine';
      var badge = $('[data-r-badge]', result), title = $('[data-r-title]', result), list = $('[data-r-points]', result);
      badge.className = 'rcheck-badge' + (tier === 'watch' ? ' is-watch' : tier === 'fine' ? ' is-fine' : '');
      badge.textContent = tier === 'now' ? 'Worth a free assessment now' : tier === 'watch' ? 'Worth a look before storm season' : 'Probably fine';
      title.textContent = tier === 'now' ? 'Get it looked at before you do anything else.' : tier === 'watch' ? 'Nothing urgent, but worth knowing for certain.' : 'If your roof is fine, we will tell you it is fine.';
      var pts = [];
      if ((storm === 'yes' || storm === 'unsure') && street !== 'no') pts.push('Hail is directional. Do not call in a claim yet: get the roof assessed first. If only one slope took damage, a claim can pay for a repair rather than a replacement and leave you under your deductible with a slope that no longer matches.');
      else if (storm === 'yes') pts.push('After a storm, damage is often invisible from the ground. Hail bruises a shingle rather than putting a hole in it.');
      if (signs.indexOf('stain') > -1) pts.push('A ceiling stain usually starts several feet from where it shows. If the drone imagery cannot find the entry point, we get into the attic.');
      if (signs.indexOf('granules') > -1) pts.push('Granules in the gutters are the shingle surface wearing away, sometimes from hail, sometimes from age. Either way it is worth a look.');
      if (signs.indexOf('lifted') > -1 || signs.indexOf('yard') > -1) pts.push('Lifted or missing shingles let water reach the decking. Small now, bigger after the next storm.');
      if (signs.indexOf('dents') > -1) pts.push('Dents on soft metals are how hail gets corroborated. They are also a separate conversation with your carrier.');
      if (age === 'old') pts.push('A roof past twenty years is near the end of its service life, so a repair may not be the best use of the money. We will tell you which it is.');
      if (type === 'tile') pts.push('Tile and slate need a crew that knows how to move across the roof. That is most of what we are known for.');
      if (!pts.length) pts.push('No signs, and a quiet year for storms. If you want certainty anyway, the assessment is still free and the report is emailed either way.');
      pts.push('Three drone laps, the findings talked through on site, a written report by email. No charge if the roof is fine.');
      list.innerHTML = pts.map(function (t) { return '<li>' + t + '</li>'; }).join('');
      form.hidden = true;
      result.hidden = false;
      root.setAttribute('data-rcheck-summary', 'Roof check: ' + (type && type !== 'unsure' ? type + ' roof' : 'roof') + ', ' + (AGE[age] || 'age unknown') + '. ' +
        (storm === 'yes' ? 'Storm in the last twelve months. ' : storm === 'unsure' ? 'Possible storm in the last twelve months. ' : 'No recent storm. ') +
        (signs.length ? 'Noticed ' + signs.map(function (v) { return LABEL[v]; }).join(', ') + '. ' : 'No visible signs. ') +
        (street === 'yes' ? 'Several neighbours getting new roofs.' : street === 'some' ? 'One or two neighbours getting new roofs.' : ''));
      root.setAttribute('data-rcheck-service', (storm === 'yes' && signs.length) ? 'Storm or hail damage' : (SERVICE[type] || SERVICE.unsure));
      if (result.scrollIntoView) result.scrollIntoView({ block: 'nearest', behavior: reduced ? 'auto' : 'smooth' });
    }
    $('[data-r-again]', root).addEventListener('click', function () {
      form.reset(); i = 0; paint(); result.hidden = true; form.hidden = false;
    });
    // Carry the answers into the lead form so the office gets a qualified enquiry.
    $('[data-r-book]', root).addEventListener('click', function () {
      var card = $('.lead-card'), svc = $('#lf-service'), msg = $('#lf-msg'), name = $('#lf-name');
      if (svc) { var want = root.getAttribute('data-rcheck-service'); $$('option', svc).forEach(function (o) { if (o.textContent === want) svc.value = o.textContent; }); }
      if (msg && !msg.value.trim()) msg.value = root.getAttribute('data-rcheck-summary') || '';
      if (card) {
        card.scrollIntoView({ block: 'start', behavior: reduced ? 'auto' : 'smooth' });
        card.classList.add('is-prefilled');
        setTimeout(function () { card.classList.remove('is-prefilled'); if (name) name.focus({ preventScroll: true }); }, 1400);
      } else { location.href = '/contact'; }
    });
    paint();
  });

  /* ---------- Count-up stats ---------- */
  var counters = $$('[data-count]');
  if (counters.length) {
    if (reduced || !('IntersectionObserver' in window)) {
      counters.forEach(function (el) { el.textContent = el.getAttribute('data-count'); });
    } else {
      var cio = new IntersectionObserver(function (entries) {
        entries.forEach(function (e) {
          if (!e.isIntersecting) return;
          var el = e.target;
          cio.unobserve(el);
          var target = Number(el.getAttribute('data-count'));
          var t0 = null;
          function step(ts) {
            if (!t0) t0 = ts;
            var p = Math.min(1, (ts - t0) / 1400);
            var eased = 1 - Math.pow(1 - p, 3);
            el.textContent = Math.round(target * eased).toString();
            if (p < 1) requestAnimationFrame(step);
          }
          requestAnimationFrame(step);
        });
      }, { threshold: 0.5 });
      counters.forEach(function (el) { cio.observe(el); });
    }
  }

  /* ---------- Pointer-tracking glow on dark cards ---------- */
  if (finePointer && !reduced) {
    $$('.glow-card').forEach(function (card) {
      card.addEventListener('pointermove', function (e) {
        var r = card.getBoundingClientRect();
        card.style.setProperty('--mx', (e.clientX - r.left) + 'px');
        card.style.setProperty('--my', (e.clientY - r.top) + 'px');
      });
    });

    /* Magnetic buttons */
    $$('[data-magnetic]').forEach(function (btn) {
      btn.addEventListener('pointermove', function (e) {
        var r = btn.getBoundingClientRect();
        var x = (e.clientX - r.left - r.width / 2) * 0.22;
        var y = (e.clientY - r.top - r.height / 2) * 0.3;
        btn.style.transform = 'translate(' + x + 'px,' + y + 'px)';
      });
      btn.addEventListener('pointerleave', function () { btn.style.transform = ''; });
    });
  }

  /* ---------- Center-stage carousel ---------- */
  $$('[data-stage]').forEach(function (stage) {
    var track = $('.stage-track', stage);
    var items = $$('.stage-item', track);
    if (items.length < 2) return;
    var dotsWrap = $('.stage-dots', stage.parentNode) || $('.stage-dots', stage);
    var i = 0;

    function layout() {
      var item = items[i];
      var stageRect = stage.getBoundingClientRect();
      var offset = item.offsetLeft - (stageRect.width - item.offsetWidth) / 2;
      track.style.transform = 'translateX(' + (-Math.max(0, offset)) + 'px)';
      items.forEach(function (el, n) { el.classList.toggle('is-active', n === i); });
      if (dotsWrap) {
        $$('button', dotsWrap).forEach(function (d, n) {
          d.setAttribute('aria-selected', String(n === i));
        });
      }
    }
    function go(n) { i = Math.max(0, Math.min(items.length - 1, n)); layout(); }

    $$('[data-stage-dir]', stage.parentNode).forEach(function (b) {
      b.addEventListener('click', function () {
        go(i + (b.getAttribute('data-stage-dir') === 'next' ? 1 : -1));
      });
    });
    if (dotsWrap) {
      $$('button', dotsWrap).forEach(function (d, n) {
        d.addEventListener('click', function () { go(n); });
      });
    }
    stage.setAttribute('tabindex', '0');
    stage.addEventListener('keydown', function (e) {
      if (e.key === 'ArrowRight') { e.preventDefault(); go(i + 1); }
      if (e.key === 'ArrowLeft') { e.preventDefault(); go(i - 1); }
    });
    // Swipe
    var sx = 0, dx = 0;
    stage.addEventListener('touchstart', function (e) { sx = e.touches[0].clientX; dx = 0; }, { passive: true });
    stage.addEventListener('touchmove', function (e) { dx = e.touches[0].clientX - sx; }, { passive: true });
    stage.addEventListener('touchend', function () {
      if (Math.abs(dx) > 45) go(i + (dx < 0 ? 1 : -1));
    });
    window.addEventListener('resize', layout);
    layout();
  });

  /* ---------- Drag-to-compare ---------- */
  $$('[data-compare]').forEach(function (box) {
    var range = $('.compare-range', box);
    var top = $('.compare-top', box);
    var grip = $('.compare-grip', box);
    if (!range || !top || !grip) return;
    function apply() {
      var v = Number(range.value);
      top.style.clipPath = 'inset(0 ' + (100 - v) + '% 0 0)';
      grip.style.left = v + '%';
    }
    range.addEventListener('input', apply);
    apply();
  });

  /* ---------- Material explorer tabs ---------- */
  $$('[data-explorer]').forEach(function (ex) {
    var tabs = $$('[role="tab"]', ex);
    var panels = $$('[role="tabpanel"]', ex);
    function select(n) {
      tabs.forEach(function (t, i) {
        t.setAttribute('aria-selected', String(i === n));
        t.setAttribute('tabindex', i === n ? '0' : '-1');
      });
      panels.forEach(function (p, i) { p.classList.toggle('is-active', i === n); });
    }
    tabs.forEach(function (t, n) {
      t.addEventListener('click', function () { select(n); });
      t.addEventListener('keydown', function (e) {
        var d = e.key === 'ArrowDown' || e.key === 'ArrowRight' ? 1
              : e.key === 'ArrowUp' || e.key === 'ArrowLeft' ? -1 : 0;
        if (!d) return;
        e.preventDefault();
        var next = (n + d + tabs.length) % tabs.length;
        select(next);
        tabs[next].focus();
      });
    });
    select(0);

    // Images inside a display:none panel never load while lazy, so the first
    // click on a tab would flash an empty box. Warm them once the page is idle.
    var warm = function () {
      $$('img[loading="lazy"]', ex).forEach(function (im) {
        if (!im.complete) im.loading = 'eager';
      });
    };
    if ('requestIdleCallback' in window) requestIdleCallback(warm, { timeout: 4000 });
    else setTimeout(warm, 2500);
  });

  /* ---------- Drone three-lap inspection diagram ---------- */
  var drone = $('[data-drone]');
  if (drone) {
    var laps = $$('[data-lap]', drone);
    var rings = $$('.lap-ring', drone);
    var dot = $('.drone-dot', drone);
    var active = 0;
    var cycle = null;

    function show(n) {
      active = n % 3;
      laps.forEach(function (l, i) { l.classList.toggle('is-live', i === active); });
      rings.forEach(function (r, i) { r.classList.toggle('is-live', i === active); });
      if (dot) {
        var path = $('#lapPath' + active, drone);
        if (path) dot.setAttribute('href', '#lapPath' + active);
      }
    }
    laps.forEach(function (l, n) {
      l.addEventListener('click', function () { show(n); restart(); });
    });
    function restart() {
      clearInterval(cycle);
      if (reduced) return;
      cycle = setInterval(function () { show(active + 1); }, 4200);
    }
    show(0);
    if ('IntersectionObserver' in window) {
      new IntersectionObserver(function (entries) {
        entries.forEach(function (e) {
          if (e.isIntersecting) restart(); else clearInterval(cycle);
        });
      }, { threshold: 0.25 }).observe(drone);
    } else { restart(); }
  }

  /* ---------- Service area chips ---------- */
  $$('[data-areas]').forEach(function (root) {
    var chips = $$('.area-chip', root);
    var pins = $$('.area-pin', root);
    function light(name) {
      chips.forEach(function (c) { c.classList.toggle('is-live', c.getAttribute('data-city') === name); });
      pins.forEach(function (p) { p.classList.toggle('is-live', p.getAttribute('data-city') === name); });
    }
    chips.concat(pins).forEach(function (el) {
      el.addEventListener('mouseenter', function () { light(el.getAttribute('data-city')); });
      el.addEventListener('focus', function () { light(el.getAttribute('data-city')); });
    });
    root.addEventListener('mouseleave', function () { light(null); });
  });

  /* ---------- Form: client-side guard before FormSubmit takes over ---------- */
  $$('form[data-lead]').forEach(function (form) {
    form.addEventListener('submit', function (e) {
      // Honeypot: a real person never fills this.
      var honey = form.querySelector('input[name="_honey"]');
      if (honey && honey.value) { e.preventDefault(); return; }
      if (!form.checkValidity()) {
        e.preventDefault();
        var bad = form.querySelector(':invalid');
        if (bad) { bad.focus(); bad.scrollIntoView({ block: 'center', behavior: reduced ? 'auto' : 'smooth' }); }
        return;
      }
      var next = form.querySelector('input[name="_next"]');
      if (next) next.value = location.origin + '/thank-you';
      var em = form.querySelector('input[name="Email"]');
      var rt = form.querySelector('input[name="_replyto"]');
      if (em && rt) rt.value = em.value;
      var smsBox = form.querySelector('[data-sms-consent]');
      var smsField = form.querySelector('[data-sms-field]');
      if (smsBox && smsField) smsField.value = smsBox.checked ? 'Yes' : 'No';
      var btn = form.querySelector('button[type="submit"]');
      if (btn) { btn.disabled = true; btn.textContent = 'Sending...'; }
    });
  });

  /* ---------- Sticky feature: swap the pinned image per block ---------- */
  $$('[data-sticky]').forEach(function (root) {
    var blocks = $$('.stik-block', root);
    var imgs = $$('.stik-img', root);
    var bar = $('[data-stik-bar]', root);
    if (!blocks.length || !imgs.length) return;
    var live = -1;
    function show(n) {
      if (n === live) return;
      live = n;
      imgs.forEach(function (f, i) { f.classList.toggle('is-live', i === n); });
      if (bar) bar.style.width = Math.round(((n + 1) / blocks.length) * 100) + '%';
    }
    // Hovering a block swaps the image. With three short blocks the whole
    // section fits one screen, so scroll position alone would rarely change it.
    blocks.forEach(function (b, i) {
      b.addEventListener('mouseenter', function () { show(i); });
      b.addEventListener('focusin', function () { show(i); });
    });
    // On taller sections, or touch, the block nearest mid-viewport owns it.
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) show(blocks.indexOf(e.target));
      });
    }, { rootMargin: '-45% 0px -45% 0px', threshold: 0 });
    blocks.forEach(function (b) { io.observe(b); });
    show(0);
  });

  /* ---------- Annotated roof hotspots ---------- */
  $$('[data-hotspots]').forEach(function (root) {
    var spots = $$('.hotspot', root);
    var panels = $$('.hotspot-panel', root);
    function select(n) {
      spots.forEach(function (s, i) { s.setAttribute('aria-pressed', String(i === n)); });
      panels.forEach(function (p, i) { p.classList.toggle('is-active', i === n); });
    }
    spots.forEach(function (s, n) {
      s.addEventListener('click', function () { select(n); });
      if (finePointer) s.addEventListener('mouseenter', function () { select(n); });
    });
    select(0);
  });

  /* ---------- Roof build-up cross section ---------- */
  $$('[data-buildup]').forEach(function (bu) {
    var tabs = $$('.buildup-tab', bu);
    var panels = $$('.buildup-panel', bu);
    var layers = $$('.lay', bu);
    function select(n) {
      var key = tabs[n].getAttribute('data-layer');
      tabs.forEach(function (t, i) {
        t.setAttribute('aria-selected', String(i === n));
        t.setAttribute('tabindex', i === n ? '0' : '-1');
      });
      panels.forEach(function (p, i) { p.classList.toggle('is-active', i === n); });
      layers.forEach(function (l) {
        l.classList.toggle('is-live', l.getAttribute('data-lay') === key);
      });
    }
    tabs.forEach(function (t, n) {
      t.addEventListener('click', function () { select(n); });
      t.addEventListener('keydown', function (e) {
        var d = e.key === 'ArrowDown' || e.key === 'ArrowRight' ? 1
              : e.key === 'ArrowUp' || e.key === 'ArrowLeft' ? -1 : 0;
        if (!d) return;
        e.preventDefault();
        var next = (n + d + tabs.length) % tabs.length;
        select(next);
        tabs[next].focus();
      });
    });
    select(0);
  });

  /* ---------- Review carousel: centre stage, arrows, keys, swipe ---------- */
  $$('[data-rcar]').forEach(function (root) {
    var track = $('.rcar-track', root);
    var slides = $$('.rcar-slide', root);
    var cur = $('[data-rcur]', root);
    if (slides.length < 2) return;
    var n = 0;
    var GAP = 19.2; // 1.2rem
    function lay() {
      var w = slides[0].getBoundingClientRect().width;
      var pad = parseFloat(getComputedStyle(root).paddingLeft) || 0;
      var rootW = root.getBoundingClientRect().width - pad * 2;
      // Centre the active card in the visible area.
      var x = (rootW - w) / 2 - n * (w + GAP);
      track.style.transform = 'translate3d(' + x + 'px,0,0)';
      slides.forEach(function (s, i) { s.classList.toggle('is-active', i === n); });
      if (cur) cur.textContent = String(n + 1).padStart(2, '0');
    }
    function go(d) { n = (n + d + slides.length) % slides.length; lay(); }
    $$('[data-rdir]', root).forEach(function (b) {
      b.addEventListener('click', function () { go(parseInt(b.getAttribute('data-rdir'), 10)); });
    });
    slides.forEach(function (s, i) { s.addEventListener('click', function () { if (i !== n) { n = i; lay(); } }); });
    root.tabIndex = 0;
    root.addEventListener('keydown', function (e) {
      if (e.key === 'ArrowRight') { e.preventDefault(); go(1); }
      if (e.key === 'ArrowLeft') { e.preventDefault(); go(-1); }
    });
    var sx = null;
    root.addEventListener('touchstart', function (e) { sx = e.touches[0].clientX; }, { passive: true });
    root.addEventListener('touchend', function (e) {
      if (sx === null) return;
      var dx = e.changedTouches[0].clientX - sx; sx = null;
      if (Math.abs(dx) > 40) go(dx < 0 ? 1 : -1);
    });
    window.addEventListener('resize', lay);
    lay();
  });

  /* ---------- Review read more ---------- */
  $$('[data-review-card] .review-more').forEach(function (b) {
    b.addEventListener('click', function () {
      var card = b.closest('.review');
      var open = card.classList.toggle('is-open');
      b.setAttribute('aria-expanded', String(open));
      b.firstChild.textContent = open ? 'Read less' : 'Read more';
    });
  });

  /* ---------- Review filtering ---------- */
  var filterRow = $('[data-review-filter]');
  var reviewGrid = $('[data-review-grid]');
  if (filterRow && reviewGrid) {
    var cards = $$('[data-tags]', reviewGrid);
    $$('button', filterRow).forEach(function (b) {
      b.addEventListener('click', function () {
        var want = b.getAttribute('data-filter');
        $$('button', filterRow).forEach(function (o) { o.classList.toggle('is-live', o === b); });
        cards.forEach(function (c) {
          var tags = (c.getAttribute('data-tags') || '').split(/\s+/);
          c.hidden = !(want === 'all' || tags.indexOf(want) > -1);
        });
      });
    });
  }

  /* ---------- Core services row: drag to scroll ---------- */
  $$('[data-csrrow]').forEach(function (row) {
    var down = false, startX = 0, startLeft = 0, moved = 0;
    row.addEventListener('pointerdown', function (e) {
      if (e.pointerType !== 'mouse') return;
      down = true; moved = 0; startX = e.clientX; startLeft = row.scrollLeft;
      row.classList.add('is-drag');
    });
    window.addEventListener('pointermove', function (e) {
      if (!down) return;
      var dx = e.clientX - startX;
      moved = Math.max(moved, Math.abs(dx));
      row.scrollLeft = startLeft - dx;
    });
    window.addEventListener('pointerup', function () {
      down = false; row.classList.remove('is-drag');
    });
    // A drag must not fire the card link it started on.
    row.addEventListener('click', function (e) {
      if (moved > 8) { e.preventDefault(); e.stopPropagation(); moved = 0; }
    }, true);
    // Step = one card plus the gap, measured live so it tracks the breakpoint.
    function step() {
      var card = row.querySelector('.csr-card');
      return card ? card.getBoundingClientRect().width + 16 : 340;
    }
    var wrap = row.closest('.csr-wrap') || row.parentElement;
    var cur = wrap.querySelector('[data-csrcur]');
    var totalEl = wrap.querySelector('[data-csrtotal]');
    var bar = wrap.querySelector('[data-csrbar]');
    var track = wrap.querySelector('.csr-track');
    function paint() {
      // Count scroll positions, not cards: with four visible there are three stops.
      var positions = Math.max(1, Math.round((row.scrollWidth - row.clientWidth) / step()) + 1);
      if (totalEl) totalEl.textContent = String(positions).padStart(2, '0');
      var n = Math.min(positions, Math.round(row.scrollLeft / step()) + 1);
      if (cur) cur.textContent = String(n).padStart(2, '0');
      if (bar && track) {
        // The thumb's width is the visible share of the row; its position is
        // the scrolled share. Width set once per paint, position via transform.
        var frac = row.clientWidth / row.scrollWidth;
        var tw = track.clientWidth;
        bar.style.width = Math.max(28, Math.round(tw * frac)) + 'px';
        var range = tw - Math.max(28, Math.round(tw * frac));
        var maxScroll = row.scrollWidth - row.clientWidth;
        bar.style.transform = 'translateX(' + (maxScroll > 0 ? Math.round((row.scrollLeft / maxScroll) * range) : 0) + 'px)';
      }
      wrap.querySelectorAll('[data-csrdir]').forEach(function (b) {
        var d = parseInt(b.getAttribute('data-csrdir'), 10);
        var atStart = row.scrollLeft < 4;
        var atEnd = row.scrollLeft > row.scrollWidth - row.clientWidth - 4;
        b.style.opacity = (d < 0 && atStart) || (d > 0 && atEnd) ? '.3' : '';
      });
    }
    wrap.querySelectorAll('[data-csrdir]').forEach(function (b) {
      b.addEventListener('click', function () {
        row.scrollBy({ left: parseInt(b.getAttribute('data-csrdir'), 10) * step(), behavior: 'smooth' });
      });
    });
    row.addEventListener('scroll', function () { window.requestAnimationFrame(paint); }, { passive: true });
    paint();
    row.addEventListener('keydown', function (e) {
      if (e.key === 'ArrowRight') { row.scrollBy({ left: step(), behavior: 'smooth' }); e.preventDefault(); }
      if (e.key === 'ArrowLeft') { row.scrollBy({ left: -step(), behavior: 'smooth' }); e.preventDefault(); }
    });
  });

  /* ---------- Current year ---------- */
  $$('[data-year]').forEach(function (el) { el.textContent = new Date().getFullYear(); });
})();
