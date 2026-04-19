'use client';
import { useEffect, useRef, useState } from 'react';

/**
 * Animated number counter — counts up from 0 to target when scrolled into view.
 * Supports suffix (+, /5, %, etc.) and prefix.
 * Parses the target value from a string like "50,000+" or "4.9/5".
 */
function parseTarget(str) {
  const match = String(str).match(/^([^\d]*)([\d,.]+)(.*)$/);
  if (!match) return { prefix: '', number: 0, suffix: str, decimals: 0 };
  const prefix = match[1];
  const rawNum = match[2].replace(/,/g, '');
  const suffix = match[3];
  const decimals = (rawNum.split('.')[1] || '').length;
  return { prefix, number: parseFloat(rawNum), suffix, decimals };
}

export default function CounterStat({ icon, value, label, sub, border = false }) {
  const { prefix, number, suffix, decimals } = parseTarget(value);
  const [current, setCurrent] = useState(0);
  const ref = useRef(null);
  const started = useRef(false);

  useEffect(() => {
    if (!ref.current) return;
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) { setCurrent(number); return; }

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const duration = 1800;
          const start = performance.now();
          const tick = (now) => {
            const elapsed = now - start;
            const progress = Math.min(elapsed / duration, 1);
            // Ease-out cubic
            const eased = 1 - Math.pow(1 - progress, 3);
            setCurrent(number * eased);
            if (progress < 1) requestAnimationFrame(tick);
            else setCurrent(number);
          };
          requestAnimationFrame(tick);
        }
      },
      { threshold: 0.4 }
    );
    obs.observe(ref.current);
    return () => obs.disconnect();
  }, [number]);

  const formatted = decimals > 0
    ? current.toFixed(decimals)
    : Math.round(current).toLocaleString('en-IN');

  return (
    <div ref={ref} style={{
      flex: '1 1 0',
      textAlign: 'center',
      padding: '24px 12px',
      borderRight: border ? '1px solid rgba(255,255,255,0.12)' : 'none',
      minWidth: 0,
    }}>
      <div style={{ fontSize: 22, marginBottom: 6, opacity: .85 }}>{icon}</div>
      <div className="counter-value" style={{
        color: '#fff', fontWeight: 700, fontSize: 'clamp(1.4rem, 2.5vw, 1.9rem)',
        lineHeight: 1, fontFamily: 'var(--font-display)', letterSpacing: '-0.02em',
      }}>
        {prefix}{formatted}{suffix}
      </div>
      <div style={{ color: 'rgba(255,255,255,0.72)', fontSize: 12, marginTop: 6, fontWeight: 500 }}>
        {label}
      </div>
      {sub && (
        <div style={{ color: 'rgba(255,255,255,0.4)', fontSize: 10.5, marginTop: 3 }}>
          {sub}
        </div>
      )}
    </div>
  );
}
