'use client';
import { useEffect, useRef } from 'react';

/**
 * ReadingProgress — thin scroll-driven bar pinned to the top of the viewport.
 * Signals "skimmable depth" and gives long guides a premium editorial feel.
 * Pure client component, no props. rAF-throttled, passive listeners.
 */
export default function ReadingProgress() {
  const barRef = useRef(null);

  useEffect(() => {
    const bar = barRef.current;
    if (!bar) return;
    let ticking = false;
    // Cache the scrollable distance so the per-frame scroll handler only reads
    // the cheap window.scrollY — never scrollHeight/clientHeight, which force a
    // layout reflow. Recompute it only on resize / content changes.
    let scrollable = 0;
    const measure = () => {
      const doc = document.documentElement;
      scrollable = doc.scrollHeight - doc.clientHeight;
      paint();
    };
    const paint = () => {
      ticking = false;
      const pct = scrollable > 0 ? (window.scrollY / scrollable) * 100 : 0;
      bar.style.width = Math.min(100, Math.max(0, pct)) + '%';
    };
    const onScroll = () => {
      if (!ticking) { ticking = true; requestAnimationFrame(paint); }
    };

    measure();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', measure, { passive: true });
    // Late layout shifts (fonts, images) change scrollHeight — re-measure.
    const ro = typeof ResizeObserver !== 'undefined'
      ? new ResizeObserver(measure) : null;
    if (ro) ro.observe(document.body);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', measure);
      if (ro) ro.disconnect();
    };
  }, []);

  return <div ref={barRef} className="blog-progress" aria-hidden="true" />;
}
