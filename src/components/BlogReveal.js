'use client';
import { useEffect } from 'react';

/**
 * BlogReveal — subtle scroll-in animation for the premium content blocks.
 *
 * Progressive enhancement: it adds `reveal-ready` to <html> and a `reveal`
 * class to a curated set of blocks, then reveals each with an Intersection
 * Observer. If JS never runs (or IO is unsupported), nothing is hidden —
 * `.reveal` only has a hidden state under `.reveal-ready`. Reduced-motion and
 * print force everything visible (see globals.css).
 *
 * Only structural "objects" animate (takeaways, TOC, callouts, pull-quotes,
 * facts, tables, CTAs, cards) — running text and headings appear normally,
 * which keeps the effect tasteful rather than busy.
 */
const SELECTOR = [
  '.blog-keytakeaways',
  '.blog-toc2',
  '.blog-callout',
  '.pull-quote',
  '.blog-facts',
  '.blog-cta',
  '.blog-container table',
  '.pkg-card',
].join(',');

export default function BlogReveal() {
  useEffect(() => {
    if (typeof IntersectionObserver === 'undefined') return;
    const root = document.documentElement;
    root.classList.add('reveal-ready');

    const els = Array.from(document.querySelectorAll(SELECTOR));
    if (!els.length) return;

    const io = new IntersectionObserver((entries, obs) => {
      for (const e of entries) {
        if (e.isIntersecting) {
          e.target.classList.add('reveal-in');
          obs.unobserve(e.target);
        }
      }
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.08 });

    let i = 0;
    for (const el of els) {
      el.classList.add('reveal');
      // small stagger for blocks that share a viewport, capped so nothing lags
      el.style.setProperty('--reveal-delay', Math.min(i, 4) * 60 + 'ms');
      i++;
      io.observe(el);
    }

    return () => io.disconnect();
  }, []);

  return null;
}
