'use client';

import { useEffect, useRef, useState } from 'react';

/**
 * Inline number count-up — a drop-in replacement for MagicUI's
 * <NumberTicker> with no `motion` dependency.
 *
 * Follows the same principle as the site's existing CounterStat: the initial
 * state is the REAL value, so Googlebot and no-JS visitors never see a "0".
 * The animation runs from `from`% of the target up to 100% once scrolled
 * into view, which reads as a count-up without ever rendering a false figure.
 */
export default function CountUp({
  value,
  from = 0.8,       // fraction of the target to start the animation at
  duration = 1500,  // ms
  locale = 'en-IN',
  className = '',
}) {
  const [current, setCurrent] = useState(value);
  const ref = useRef(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || started.current) return;
        started.current = true;

        const startVal = value * from;
        setCurrent(startVal);
        const t0 = performance.now();

        const tick = (now) => {
          const p = Math.min((now - t0) / duration, 1);
          const eased = 1 - Math.pow(1 - p, 3); // ease-out cubic
          setCurrent(startVal + (value - startVal) * eased);
          if (p < 1) requestAnimationFrame(tick);
          else setCurrent(value);
        };
        requestAnimationFrame(tick);
        obs.disconnect();
      },
      { threshold: 0.4 }
    );

    obs.observe(el);
    return () => obs.disconnect();
  }, [value, from, duration]);

  return (
    <span ref={ref} className={`tabular-nums ${className}`.trim()}>
      {Math.round(current).toLocaleString(locale)}
    </span>
  );
}
