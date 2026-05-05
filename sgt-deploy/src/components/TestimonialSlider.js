'use client';
import { useRef, useState, useEffect } from 'react';

function Star({ filled }) {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill={filled ? '#F59E0B' : '#E5E7EB'} style={{ flexShrink: 0 }}>
      <path d="M7 0l2.163 4.383 4.837.703-3.5 3.411.826 4.815L7 11.04 2.674 13.312l.826-4.815L0 5.086l4.837-.703L7 0z"/>
    </svg>
  );
}

export default function TestimonialSlider({ items }) {
  const scrollRef = useRef(null);
  const [canLeft, setCanLeft]   = useState(false);
  const [canRight, setCanRight] = useState(true);

  const updateArrows = () => {
    const el = scrollRef.current;
    if (!el) return;
    setCanLeft(el.scrollLeft > 4);
    setCanRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 4);
  };

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    updateArrows();
    el.addEventListener('scroll', updateArrows, { passive: true });
    window.addEventListener('resize', updateArrows);
    return () => {
      el.removeEventListener('scroll', updateArrows);
      window.removeEventListener('resize', updateArrows);
    };
  }, []);

  const scroll = (dir) => {
    const el = scrollRef.current;
    if (!el) return;
    el.scrollBy({ left: dir * 360, behavior: 'smooth' });
  };

  const arrowBtn = (dir, disabled) => (
    <button
      onClick={() => scroll(dir)}
      disabled={disabled}
      aria-label={dir > 0 ? 'Next testimonial' : 'Previous testimonial'}
      style={{
        width: 38, height: 38, borderRadius: '50%',
        background: '#fff',
        border: '1px solid var(--border)',
        cursor: disabled ? 'not-allowed' : 'pointer',
        opacity: disabled ? 0.4 : 1,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        boxShadow: 'var(--shadow)',
        transition: 'all .2s',
        color: 'var(--navy)',
      }}
    >
      <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
        {dir > 0 ? <path d="M5 1l6 6-6 6"/> : <path d="M9 1L3 7l6 6"/>}
      </svg>
    </button>
  );

  return (
    <div style={{ position: 'relative' }}>
      {/* Arrow controls */}
      <div style={{ display: 'flex', gap: 8, marginBottom: 14, justifyContent: 'flex-end' }}>
        {arrowBtn(-1, !canLeft)}
        {arrowBtn(1, !canRight)}
      </div>

      <div ref={scrollRef} className="hscroll">
        {items.map(t => (
          <article key={t.id} className="testimonial-card">
            <span className="testimonial-quote">&ldquo;</span>

            {/* Stars */}
            <div style={{ display: 'flex', gap: 3, marginBottom: 12 }}>
              {[...Array(5)].map((_, i) => <Star key={i} filled={i < t.rating} />)}
            </div>

            {/* Quote */}
            <p style={{
              fontSize: 13.5, color: 'var(--mid)', lineHeight: 1.7,
              marginBottom: 18, flex: 1, fontStyle: 'italic',
            }}>
              {t.text}
            </p>

            {/* Author */}
            <div style={{
              display: 'flex', alignItems: 'center', gap: 12,
              paddingTop: 14, borderTop: '1px solid var(--border)',
            }}>
              <div className="testimonial-avatar">{t.avatar}</div>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ fontWeight: 700, fontSize: 13, color: 'var(--text)', lineHeight: 1.3 }}>
                  {t.name}
                </div>
                <div style={{ fontSize: 11, color: 'var(--muted)', marginTop: 2 }}>
                  {t.location} · {t.date}
                </div>
              </div>
            </div>

            {/* Package tag */}
            <div style={{
              marginTop: 12, padding: '6px 10px',
              background: 'var(--navy-light)',
              borderRadius: 6, fontSize: 11,
              color: 'var(--navy)', fontWeight: 600,
              display: 'inline-block', alignSelf: 'flex-start',
            }}>
              ✓ {t.package}
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
