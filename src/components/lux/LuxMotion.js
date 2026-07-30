'use client';

/* ══════════════════════════════════════════════════════════════
   LuxMotion — the single motion engine for the whole site.

   Why one component: every section on the site stays a *server*
   component and simply writes `data-lux-reveal` / `data-lux-parallax`
   attributes. This file is the only client JS that observes them.
   Net effect: cinematic scroll storytelling with ~4 KB of runtime
   and zero per-section hydration cost.

   Responsibilities
   ─────────────────
   1. Lenis smooth/inertia scrolling (desktop pointer devices only)
   2. One IntersectionObserver driving all reveal primitives
   3. rAF-batched parallax + scroll progress rail
   4. Full prefers-reduced-motion and no-JS fallbacks
   ══════════════════════════════════════════════════════════════ */

import { useEffect } from 'react';

const REVEAL_SELECTOR = [
  '[data-lux-reveal]',
  '[data-lux-stagger]',
  '.lux-lines',
  '.lux-reveal-img',
].join(',');

export default function LuxMotion() {
  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const cleanups = [];

    /* ── 0 · Page-entry curtain ─────────────────────────────────
       Renders only on pages that opt in (currently the homepage).
       Fades once its own loading bar finishes filling, so the wait
       always reads as purposeful rather than an arbitrary delay. */
    const curtain = document.querySelector('[data-lux-curtain]');
    if (curtain) {
      const finish = () => curtain.classList.add('is-done');
      if (reduced) {
        finish();
      } else {
        const bar = curtain.querySelector('.lux-curtain__bar > i');
        if (bar) bar.addEventListener('animationend', finish, { once: true });
        // Safety net: never let the curtain outlast ~1.6s, even if the
        // animationend event is missed (backgrounded tab, slow paint).
        setTimeout(finish, 1600);
      }
    }

    /* ── 1 · Reveal observer ────────────────────────────────── */
    const seen = new WeakSet();

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          entry.target.classList.add('is-in');
          io.unobserve(entry.target);
        }
      },
      // Fire slightly before the element is fully on screen so the
      // motion has finished by the time the reader's eye arrives.
      { rootMargin: '0px 0px -12% 0px', threshold: 0.08 }
    );

    const observeAll = (root = document) => {
      root.querySelectorAll(REVEAL_SELECTOR).forEach((el) => {
        if (seen.has(el)) return;
        seen.add(el);
        if (reduced) { el.classList.add('is-in'); return; }
        io.observe(el);
      });
    };
    observeAll();
    cleanups.push(() => io.disconnect());

    // Catch nodes added later (accordions, modals, client widgets)
    const mo = new MutationObserver((records) => {
      for (const r of records) {
        for (const node of r.addedNodes) {
          if (node.nodeType !== 1) continue;
          if (node.matches?.(REVEAL_SELECTOR)) {
            if (seen.has(node)) continue;
            seen.add(node);
            reduced ? node.classList.add('is-in') : io.observe(node);
          }
          observeAll(node);
        }
      }
    });
    mo.observe(document.body, { childList: true, subtree: true });
    cleanups.push(() => mo.disconnect());

    if (reduced) return () => cleanups.forEach((fn) => fn());

    /* ── 2 · Parallax + progress rail (rAF batched) ─────────── */
    const parallaxEls = Array.from(document.querySelectorAll('[data-lux-parallax]'));
    const progressEl = document.querySelector('[data-lux-progress]');
    let ticking = false;

    const paint = () => {
      ticking = false;
      const vh = window.innerHeight;

      for (const el of parallaxEls) {
        const rect = el.getBoundingClientRect();
        if (rect.bottom < -200 || rect.top > vh + 200) continue;
        const speed = parseFloat(el.dataset.luxParallax) || 0.14;
        // -1 .. 1 across the viewport, eased at the edges
        const mid = (rect.top + rect.height / 2 - vh / 2) / vh;
        el.style.transform = `translate3d(0, ${(mid * speed * 100).toFixed(2)}px, 0)`;
      }

      if (progressEl) {
        const doc = document.documentElement;
        const max = doc.scrollHeight - vh;
        const p = max > 0 ? Math.min(1, Math.max(0, window.scrollY / max)) : 0;
        progressEl.style.transform = `scaleX(${p.toFixed(4)})`;
      }
    };

    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(paint);
    };

    paint();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll, { passive: true });
    cleanups.push(() => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    });

    /* ── 3 · Lenis — pointer devices only ───────────────────── */
    // Touch devices already have excellent native inertia; overriding it
    // costs frames and fights the OS. Desktop is where Lenis earns its keep.
    const finePointer = window.matchMedia('(pointer: fine)').matches;
    let lenis;
    let rafId;
    let cancelled = false;

    if (finePointer) {
      import('lenis')
        .then(({ default: Lenis }) => {
          if (cancelled) return;
          lenis = new Lenis({
            duration: 1.05,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            smoothWheel: true,
            wheelMultiplier: 0.95,
            touchMultiplier: 1.6,
            infinite: false,
          });

          const loop = (time) => {
            lenis.raf(time);
            rafId = requestAnimationFrame(loop);
          };
          rafId = requestAnimationFrame(loop);

          lenis.on('scroll', onScroll);

          // Hash links must still work under Lenis
          const onClick = (e) => {
            const a = e.target.closest?.('a[href^="#"]');
            if (!a) return;
            const id = a.getAttribute('href');
            if (!id || id === '#') return;
            const target = document.querySelector(id);
            if (!target) return;
            e.preventDefault();
            lenis.scrollTo(target, { offset: -96, duration: 1.2 });
            history.replaceState(null, '', id);
          };
          document.addEventListener('click', onClick);
          cleanups.push(() => document.removeEventListener('click', onClick));
        })
        .catch(() => {
          /* Lenis unavailable — native scrolling is a perfectly good fallback */
        });
    }

    return () => {
      cancelled = true;
      if (rafId) cancelAnimationFrame(rafId);
      lenis?.destroy?.();
      cleanups.forEach((fn) => fn());
    };
  }, []);

  return null;
}
