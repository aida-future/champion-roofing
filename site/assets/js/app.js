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
    var btn = $('button', li);
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
    if (btn) {
      btn.addEventListener('click', function (e) {
        e.preventDefault();
        if (li.classList.contains('is-open')) shut(); else open();
      });
    }
  });
  document.addEventListener('click', function (e) {
    if (!e.target.closest('.nav')) {
      $$('.nav > li.is-open').forEach(function (li) {
        li.classList.remove('is-open');
        var b = $('button', li);
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

  /* ---------- Expanding service row ---------- */
  $$('[data-xrow]').forEach(function (row) {
    var cards = $$('[data-xcard]', row);
    function open(n) {
      cards.forEach(function (c, i) { c.classList.toggle('is-open', i === n); });
    }
    cards.forEach(function (card, n) {
      if (finePointer) {
        card.addEventListener('mouseenter', function () { open(n); });
      }
      card.addEventListener('focus', function () { open(n); });
      // Touch without fine pointer: cards are stacked and fully expanded via
      // CSS, so a tap simply follows the link. No interception needed.
    });
  });

  /* ---------- Current year ---------- */
  $$('[data-year]').forEach(function (el) { el.textContent = new Date().getFullYear(); });
})();
