'use client';

import { useEffect, useRef, useState } from 'react';

/**
 * Scroll-in reveal — a drop-in replacement for MagicUI's <BlurFade> that
 * costs zero KB of runtime beyond this file.
 *
 * MagicUI's version is lovely but pulls in `motion` (framer-motion), which
 * adds ~87 kB of First Load JS to any route that touches it. This does the
 * same fade + rise with an IntersectionObserver and a CSS transition.
 *
 * Differences from BlurFade, deliberately:
 *   - The element is rendered in its final position in the SSR HTML and only
 *     hidden once JS runs, so crawlers and no-JS visitors always see content.
 *   - Honours prefers-reduced-motion by skipping the animation entirely.
 */
export default function Reveal({
  children,
  delay = 0,        // seconds, to match BlurFade's API
  offset = 16,      // px of travel
  duration = 0.55,  // seconds
  className = '',
  as: Tag = 'div',
  ...rest
}) {
  const ref = useRef(null);
  // Starts true so server-rendered HTML is fully visible; the effect below
  // arms the animation only when JS is available and motion is welcome.
  const [shown, setShown] = useState(true);
  const [armed, setArmed] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    setArmed(true);
    setShown(false);

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true);
          obs.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    );

    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <Tag
      ref={ref}
      className={className}
      style={
        armed
          ? {
              opacity: shown ? 1 : 0,
              transform: shown ? 'none' : `translateY(${offset}px)`,
              filter: shown ? 'none' : 'blur(5px)',
              transition:
                `opacity ${duration}s cubic-bezier(0.16,1,0.3,1) ${delay}s,` +
                `transform ${duration}s cubic-bezier(0.16,1,0.3,1) ${delay}s,` +
                `filter ${duration}s cubic-bezier(0.16,1,0.3,1) ${delay}s`,
              willChange: shown ? 'auto' : 'opacity, transform',
            }
          : undefined
      }
      {...rest}
    >
      {children}
    </Tag>
  );
}
