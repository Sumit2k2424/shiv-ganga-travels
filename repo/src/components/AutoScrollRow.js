'use client';
import { useRef, useEffect, useState, useCallback } from 'react';

/**
 * AutoScrollRow — horizontal scroll container.
 *
 * MOBILE PERFORMANCE: On mobile (pointer: coarse) we use CSS scroll-snap
 * only — no JavaScript timers, no requestAnimationFrame. The JS auto-advance
 * timer only activates on desktop where the CPU cost is negligible.
 *
 * This fixes the TBT (Total Blocking Time) regression caused by 3 simultaneous
 * setInterval calls on the mobile main thread.
 */
export default function AutoScrollRow({ children, interval = 5000, cardWidth = 276 }) {
  const ref     = useRef(null);
  const timer   = useRef(null);
  const paused  = useRef(false);
  const [canLeft,  setCanLeft]  = useState(false);
  const [canRight, setCanRight] = useState(true);
  const [isMobile, setIsMobile] = useState(true); // default mobile — no timer until confirmed desktop

  useEffect(() => {
    // Detect pointer type once — coarse = touch/mobile, fine = mouse/desktop
    const mql = window.matchMedia('(pointer: coarse)');
    setIsMobile(mql.matches);
  }, []);

  const updateArrows = useCallback(() => {
    const el = ref.current;
    if (!el) return;
    setCanLeft(el.scrollLeft > 4);
    setCanRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 4);
  }, []);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    updateArrows();
    el.addEventListener('scroll', updateArrows, { passive: true });
    window.addEventListener('resize', updateArrows, { passive: true });
    return () => {
      el.removeEventListener('scroll', updateArrows);
      window.removeEventListener('resize', updateArrows);
    };
  }, [updateArrows]);

  // Auto-advance timer — DESKTOP ONLY (pointer: fine)
  useEffect(() => {
    if (isMobile) return; // no timer on mobile — saves main thread
    const el = ref.current;
    if (!el) return;

    const advance = () => {
      if (paused.current) return;
      const atEnd = el.scrollLeft >= el.scrollWidth - el.clientWidth - 10;
      el.scrollBy({ left: atEnd ? -el.scrollWidth : cardWidth, behavior: 'smooth' });
    };

    timer.current = setInterval(advance, interval);
    return () => clearInterval(timer.current);
  }, [isMobile, interval, cardWidth]);

  const scroll = (dir) => {
    const el = ref.current;
    if (!el) return;
    el.scrollBy({ left: dir * cardWidth, behavior: 'smooth' });
  };

  return (
    <div style={{ position: 'relative' }}>
      {/* Left arrow — only shown on desktop */}
      {canLeft && (
        <button
          onClick={() => scroll(-1)}
          aria-label="Scroll left"
          style={{
            display: isMobile ? 'none' : 'flex',
            position: 'absolute', left: -18, top: '50%',
            transform: 'translateY(-50%)', zIndex: 2,
            width: 36, height: 36, borderRadius: '50%',
            background: '#fff', border: '1px solid #e2e8f0',
            boxShadow: '0 2px 8px rgba(0,0,0,0.12)',
            alignItems: 'center', justifyContent: 'center', cursor: 'pointer',
          }}>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M10 12L6 8l4-4" stroke="#0F2B5B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      )}

      {/* Scroll container */}
      <div
        ref={ref}
        onMouseEnter={() => { paused.current = true; }}
        onMouseLeave={() => { paused.current = false; }}
        onTouchStart={() => { paused.current = true; }}
        onTouchEnd={() => { setTimeout(() => { paused.current = false; }, 1500); }}
        style={{
          display: 'flex',
          gap: 12,
          overflowX: 'auto',
          scrollSnapType: 'x mandatory',
          WebkitOverflowScrolling: 'touch',
          scrollbarWidth: 'none',
          msOverflowStyle: 'none',
          paddingBottom: 4,
        }}>
        {children}
      </div>

      {/* Right arrow — only shown on desktop */}
      {canRight && (
        <button
          onClick={() => scroll(1)}
          aria-label="Scroll right"
          style={{
            display: isMobile ? 'none' : 'flex',
            position: 'absolute', right: -18, top: '50%',
            transform: 'translateY(-50%)', zIndex: 2,
            width: 36, height: 36, borderRadius: '50%',
            background: '#fff', border: '1px solid #e2e8f0',
            boxShadow: '0 2px 8px rgba(0,0,0,0.12)',
            alignItems: 'center', justifyContent: 'center', cursor: 'pointer',
          }}>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M6 4l4 4-4 4" stroke="#0F2B5B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      )}
    </div>
  );
}
