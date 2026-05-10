'use client';
import { useRef, useEffect, useState, useCallback } from 'react';

/**
 * AutoScrollRow — horizontal scroll container that auto-advances
 * every `interval` ms. Pauses on hover/touch. Arrow buttons included.
 */
export default function AutoScrollRow({ children, interval = 5000, cardWidth = 276 }) {
  const ref     = useRef(null);
  const timer   = useRef(null);
  const paused  = useRef(false);
  const [canLeft,  setCanLeft]  = useState(false);
  const [canRight, setCanRight] = useState(true);

  const updateArrows = useCallback(() => {
    const el = ref.current;
    if (!el) return;
    setCanLeft(el.scrollLeft > 4);
    setCanRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 4);
  }, []);

  const scrollBy = useCallback((dir) => {
    const el = ref.current;
    if (!el) return;
    el.scrollBy({ left: dir * (cardWidth + 16), behavior: 'smooth' });
  }, [cardWidth]);

  const resetToStart = useCallback(() => {
    const el = ref.current;
    if (!el) return;
    // If at the end, loop back to start
    if (el.scrollLeft >= el.scrollWidth - el.clientWidth - 4) {
      el.scrollTo({ left: 0, behavior: 'smooth' });
    } else {
      el.scrollBy({ left: cardWidth + 16, behavior: 'smooth' });
    }
  }, [cardWidth]);

  // Auto-scroll ticker
  useEffect(() => {
    const start = () => {
      timer.current = setInterval(() => {
        if (!paused.current) resetToStart();
      }, interval);
    };
    start();
    return () => clearInterval(timer.current);
  }, [interval, resetToStart]);

  // Arrow/scroll listeners
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    updateArrows();
    el.addEventListener('scroll', updateArrows, { passive: true });
    return () => el.removeEventListener('scroll', updateArrows);
  }, [updateArrows]);

  const pause  = () => { paused.current = true; };
  const resume = () => { paused.current = false; };

  const arrowBtn = (dir, disabled) => (
    <button
      onClick={() => { scrollBy(dir); }}
      disabled={disabled}
      aria-label={dir > 0 ? 'Next' : 'Previous'}
      style={{
        width: 34, height: 34, borderRadius: '50%',
        background: disabled ? 'var(--bg)' : '#fff',
        border: '1.5px solid var(--border)',
        cursor: disabled ? 'not-allowed' : 'pointer',
        opacity: disabled ? 0.4 : 1,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        boxShadow: disabled ? 'none' : 'var(--shadow)',
        transition: 'all .2s',
        color: 'var(--navy)',
        flexShrink: 0,
      }}
    >
      <svg width="13" height="13" viewBox="0 0 13 13" fill="none"
        stroke="currentColor" strokeWidth="2" strokeLinecap="round">
        {dir > 0
          ? <path d="M2.5 6.5h8M6.5 2.5l4 4-4 4"/>
          : <path d="M10.5 6.5h-8M6.5 2.5l-4 4 4 4"/>
        }
      </svg>
    </button>
  );

  return (
    <div style={{ position: 'relative' }}>
      {/* Arrow controls */}
      <div style={{
        position: 'absolute', top: '50%', left: 0, right: 0,
        transform: 'translateY(-50%)',
        display: 'flex', justifyContent: 'space-between',
        pointerEvents: 'none', zIndex: 10,
        padding: '0 4px',
      }}>
        <div style={{ pointerEvents: 'all' }}>{arrowBtn(-1, !canLeft)}</div>
        <div style={{ pointerEvents: 'all' }}>{arrowBtn( 1, !canRight)}</div>
      </div>

      {/* Scroll container */}
      <div
        ref={ref}
        className="hscroll"
        onMouseEnter={pause}
        onMouseLeave={resume}
        onTouchStart={pause}
        onTouchEnd={resume}
        style={{ padding: '4px 40px 20px' }} /* side padding for arrow buttons */
      >
        {children}
      </div>

      {/* Dot progress indicator */}
      <DotIndicator scrollRef={ref} cardWidth={cardWidth}/>
    </div>
  );
}

/* ── Dot progress dots ── */
function DotIndicator({ scrollRef, cardWidth }) {
  const [active, setActive] = useState(0);
  const [total,  setTotal]  = useState(0);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    const count = Math.round(el.scrollWidth / (cardWidth + 16));
    setTotal(count);
    const onScroll = () => {
      const idx = Math.round(el.scrollLeft / (cardWidth + 16));
      setActive(Math.min(idx, count - 1));
    };
    el.addEventListener('scroll', onScroll, { passive: true });
    return () => el.removeEventListener('scroll', onScroll);
  }, [scrollRef, cardWidth]);

  if (total <= 1) return null;

  return (
    <div style={{
      display: 'flex', justifyContent: 'center',
      gap: 6, marginTop: 4,
    }}>
      {[...Array(Math.min(total, 8))].map((_, i) => (
        <div key={i} style={{
          width: i === active ? 18 : 6,
          height: 6,
          borderRadius: 3,
          background: i === active ? 'var(--gold)' : 'var(--border)',
          transition: 'all .3s ease',
        }}/>
      ))}
    </div>
  );
}
