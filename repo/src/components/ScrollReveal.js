'use client';
import { useEffect, useRef, useState } from 'react';

/**
 * Wraps any element to fade-in on scroll.
 * Uses Intersection Observer (zero layout cost).
 * Auto-skips on reduced-motion preference.
 */
export default function ScrollReveal({ children, delay = 0, as = 'div', className = '', ...rest }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!ref.current) return;
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) { setVisible(true); return; }

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setVisible(true), delay);
          obs.disconnect();
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -60px 0px' }
    );
    obs.observe(ref.current);
    return () => obs.disconnect();
  }, [delay]);

  const Tag = as;
  return (
    <Tag ref={ref} className={`fade-in ${visible ? 'visible' : ''} ${className}`.trim()} {...rest}>
      {children}
    </Tag>
  );
}
