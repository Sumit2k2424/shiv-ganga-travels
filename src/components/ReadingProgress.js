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

    const update = () => {
      ticking = false;
      const doc = document.documentElement;
      const scrollable = doc.scrollHeight - doc.clientHeight;
      const pct = scrollable > 0 ? (doc.scrollTop / scrollable) * 100 : 0;
      bar.style.width = Math.min(100, Math.max(0, pct)) + '%';
    };

    const onScroll = () => {
      if (!ticking) { ticking = true; requestAnimationFrame(update); }
    };

    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);

  return <div ref={barRef} className="blog-progress" aria-hidden="true" />;
}
