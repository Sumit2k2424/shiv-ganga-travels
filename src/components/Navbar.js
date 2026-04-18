'use client';
import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { SITE } from '@/data/packages';

/* ─── Mountain + OM logo mark (inline SVG — zero extra requests) ─── */
function LogoMark({ size = 36 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 36 36" fill="none" aria-hidden="true">
      {/* Circle ring */}
      <circle cx="18" cy="18" r="17" stroke="url(#lg)" strokeWidth="1.5"/>
      {/* Mountain peaks */}
      <path d="M7 25 L13 14 L18 21 L23 12 L29 25 Z"
        fill="url(#lg)" opacity="0.9"/>
      {/* OM glyph — centre bottom */}
      <text x="18" y="32" textAnchor="middle" fontSize="7" fontWeight="700"
        fontFamily="serif" fill="url(#lg)" letterSpacing="0">ॐ</text>
      <defs>
        <linearGradient id="lg" x1="0" y1="0" x2="36" y2="36" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#1260CC"/>
          <stop offset="100%" stopColor="#06B6D4"/>
        </linearGradient>
      </defs>
    </svg>
  );
}

/* ─── Dropdown chevron SVG ─── */
function Chevron({ open }) {
  return (
    <svg width="10" height="10" viewBox="0 0 10 10" fill="none"
      style={{ transition:'transform .2s', transform: open ? 'rotate(180deg)' : 'rotate(0deg)', marginLeft:3 }}
      aria-hidden="true">
      <path d="M2 3.5L5 6.5L8 3.5" stroke="currentColor" strokeWidth="1.5"
        strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

/* ─── Package dropdown links ─── */
const PKG_LINKS = [
  { label:'Char Dham Yatra',  href:'/packages/char-dham',
    sub:'Yamunotri · Gangotri · Kedarnath · Badrinath', icon:'🏔️' },
  { label:'Do Dham Yatra',    href:'/packages/do-dham',
    sub:'Kedarnath–Badrinath · Yamunotri–Gangotri',     icon:'🕌' },
  { label:'Single Dham',      href:'/packages/single-dham',
    sub:'Kedarnath · Badrinath · Yamunotri · Gangotri', icon:'🙏' },
  { label:'All Packages',     href:'/packages',
    sub:'Browse the complete catalogue',                icon:'📋' },
];

/* ─── Mobile accordion ─── */
function MobileAccordion({ label, children }) {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <button onClick={() => setOpen(o => !o)} style={{
        width:'100%', padding:'14px 20px',
        display:'flex', justifyContent:'space-between', alignItems:'center',
        background:'none', border:'none', cursor:'pointer',
        fontSize:14, fontWeight:400, color:'var(--mid)',
        fontFamily:'var(--font)', borderBottom:'1px solid var(--border)',
      }}>
        {label}
        <Chevron open={open}/>
      </button>
      {open && (
        <div style={{ background:'var(--bg)' }}>
          {children}
        </div>
      )}
    </div>
  );
}

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled,   setScrolled]   = useState(false);
  const [dropOpen,   setDropOpen]   = useState(false);
  const dropRef = useRef(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  /* Close dropdown on outside click */
  useEffect(() => {
    const handler = (e) => {
      if (dropRef.current && !dropRef.current.contains(e.target)) setDropOpen(false);
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  return (
    <>
      {/* ── Micro top bar ─────────────────────────────────── */}
      <div style={{
        background: 'var(--deep)',
        borderBottom: '1px solid rgba(255,255,255,0.06)',
        padding: '0',
        lineHeight: 1,
      }}>
        <div style={{
          maxWidth: 1200, margin: '0 auto', padding: '7px 20px',
          display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        }}>
          <span style={{ fontSize: 11, color: 'rgba(255,255,255,0.45)', letterSpacing: '0.04em' }}>
            Season open &nbsp;·&nbsp; May – June &nbsp;&amp;&nbsp; Sept – Oct 2025
          </span>
          <div style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
            <a href={`tel:${SITE.phone}`}
              style={{ fontSize: 11, color: 'var(--cyan)', textDecoration: 'none', fontWeight: 500, letterSpacing: '0.02em' }}>
              {SITE.phone}
            </a>
            <a href={`mailto:${SITE.email}`}
              style={{ fontSize: 11, color: 'rgba(255,255,255,0.4)', textDecoration: 'none' }}>
              {SITE.email}
            </a>
          </div>
        </div>
      </div>

      {/* ── Main navbar ───────────────────────────────────── */}
      <header style={{
        position: 'sticky',
        top: 0,
        zIndex: 100,
        background: '#fff',
        borderBottom: '1px solid var(--border)',
        transition: 'box-shadow .3s',
        boxShadow: scrolled ? '0 1px 24px rgba(18,96,204,0.09)' : 'none',
      }}>
        <div style={{
          maxWidth: 1200, margin: '0 auto',
          padding: '0 20px',
          height: 66,
          display: 'flex',
          alignItems: 'center',
          gap: 0,
        }}>

          {/* ── Logo ── */}
          <Link href="/" style={{
            display: 'flex', alignItems: 'center', gap: 11,
            textDecoration: 'none', marginRight: 40, flexShrink: 0,
          }}>
            <LogoMark size={38}/>
            <div style={{ lineHeight: 1 }}>
              <div style={{
                fontSize: 16,
                fontWeight: 600,
                color: 'var(--text)',
                letterSpacing: '-0.03em',
                lineHeight: 1.15,
              }}>
                Shiv Ganga
                <span style={{ color: 'var(--blue)', fontWeight: 300 }}> Travels</span>
              </div>
              <div style={{
                fontSize: 9.5,
                color: 'var(--muted)',
                letterSpacing: '0.14em',
                textTransform: 'uppercase',
                marginTop: 2,
                fontWeight: 400,
              }}>
                Haridwar · Est. {SITE.established}
              </div>
            </div>
          </Link>

          {/* ── Desktop nav ── */}
          <nav className="hidden md:flex" style={{
            display: 'flex', alignItems: 'center',
            gap: 2, flex: 1,
          }}>

            {/* Packages dropdown — click-based for accessibility */}
            <div ref={dropRef} style={{ position: 'relative' }}>
              <button
                onClick={() => setDropOpen(o => !o)}
                style={{
                  display: 'flex', alignItems: 'center',
                  padding: '8px 12px',
                  fontSize: 13, fontWeight: 400,
                  color: dropOpen ? 'var(--blue)' : 'var(--mid)',
                  background: 'none', border: 'none', cursor: 'pointer',
                  fontFamily: 'var(--font)',
                  borderRadius: 7,
                  transition: 'color .15s, background .15s',
                  gap: 2,
                }}
                aria-expanded={dropOpen}
                aria-haspopup="true"
              >
                Packages <Chevron open={dropOpen}/>
              </button>

              {/* Dropdown panel */}
              {dropOpen && (
                <div style={{
                  position: 'absolute',
                  top: 'calc(100% + 10px)',
                  left: '-8px',
                  background: '#fff',
                  border: '1px solid var(--border)',
                  borderRadius: 14,
                  minWidth: 280,
                  boxShadow: '0 12px 40px rgba(18,96,204,0.13), 0 2px 8px rgba(0,0,0,0.06)',
                  overflow: 'hidden',
                  zIndex: 200,
                  animation: 'dropIn .18s ease',
                }}>
                  {/* Top tint strip */}
                  <div style={{
                    padding: '10px 16px 8px',
                    borderBottom: '1px solid var(--border)',
                    background: 'var(--bg)',
                  }}>
                    <span style={{ fontSize: 10, fontWeight: 600, color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                      Yatra Packages
                    </span>
                  </div>

                  {PKG_LINKS.map((l, i) => (
                    <Link key={l.href} href={l.href}
                      onClick={() => setDropOpen(false)}
                      style={{
                        display: 'flex', alignItems: 'center', gap: 12,
                        padding: '11px 16px',
                        textDecoration: 'none',
                        borderBottom: i < PKG_LINKS.length - 1 ? '1px solid var(--border)' : 'none',
                        transition: 'background .12s',
                      }}
                      onMouseEnter={e => e.currentTarget.style.background = 'var(--bg)'}
                      onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
                    >
                      <span style={{
                        width: 34, height: 34, borderRadius: 8,
                        background: 'var(--blue-light)',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        fontSize: 16, flexShrink: 0,
                      }}>{l.icon}</span>
                      <div>
                        <div style={{ fontSize: 13, fontWeight: 500, color: 'var(--text)', lineHeight: 1.3 }}>{l.label}</div>
                        <div style={{ fontSize: 11, color: 'var(--muted)', marginTop: 2, lineHeight: 1.4 }}>{l.sub}</div>
                      </div>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Plain nav links */}
            {[
              { label: 'Char Dham',   href: '/packages/char-dham' },
              { label: 'Do Dham',     href: '/packages/do-dham' },
              { label: 'Single Dham', href: '/packages/single-dham' },
              { label: 'About',       href: '/about' },
              { label: 'Contact',     href: '/contact' },
            ].map(l => (
              <Link key={l.href} href={l.href} className="nav-link">
                {l.label}
              </Link>
            ))}
          </nav>

          {/* ── Right CTAs ── */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginLeft: 'auto', flexShrink: 0 }}>
            <a href={`tel:${SITE.phone}`}
              className="hidden md:flex"
              style={{
                display: 'flex', alignItems: 'center', gap: 6,
                fontSize: 12, fontWeight: 500, color: 'var(--mid)',
                textDecoration: 'none', padding: '6px 10px',
                borderRadius: 8,
              }}
              onMouseEnter={e => e.currentTarget.style.background = 'var(--bg)'}
              onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--blue)" strokeWidth="2" strokeLinecap="round"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.67A2 2 0 012 0h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 14h0v2.92z"/></svg>
              <span className="hidden lg:inline">{SITE.phone}</span>
            </a>

            <Link href="/contact" style={{
              display: 'inline-flex', alignItems: 'center', gap: 6,
              padding: '8px 20px',
              fontSize: 12.5, fontWeight: 600,
              color: '#fff',
              background: 'var(--blue)',
              borderRadius: 8,
              textDecoration: 'none',
              letterSpacing: '0.01em',
              transition: 'background .15s, transform .15s',
              boxShadow: '0 2px 10px rgba(18,96,204,.25)',
            }}
              onMouseEnter={e => { e.currentTarget.style.background = 'var(--blue-dark)'; e.currentTarget.style.transform = 'translateY(-1px)'; }}
              onMouseLeave={e => { e.currentTarget.style.background = 'var(--blue)'; e.currentTarget.style.transform = 'none'; }}
            >
              Book Now
            </Link>

            {/* Mobile hamburger */}
            <button
              onClick={() => setMobileOpen(o => !o)}
              className="md:hidden"
              style={{
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                width: 38, height: 38, borderRadius: 8,
                border: '1px solid var(--border)',
                background: 'none', cursor: 'pointer',
                color: 'var(--text)', marginLeft: 2,
                transition: 'background .15s',
              }}
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            >
              {mobileOpen
                ? <svg width="17" height="17" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M6 18L18 6M6 6l12 12"/></svg>
                : <svg width="17" height="17" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M4 6h16M4 12h16M4 18h10"/></svg>
              }
            </button>
          </div>
        </div>

        {/* ── Mobile drawer ── */}
        {mobileOpen && (
          <div className="md:hidden" style={{
            background: '#fff',
            borderTop: '1px solid var(--border)',
            maxHeight: '80vh', overflowY: 'auto',
          }}>
            <MobileAccordion label="Packages">
              {PKG_LINKS.map(l => (
                <Link key={l.href} href={l.href}
                  onClick={() => setMobileOpen(false)}
                  style={{
                    display: 'flex', alignItems: 'center', gap: 10,
                    padding: '11px 24px', fontSize: 13, color: 'var(--mid)',
                    textDecoration: 'none', borderBottom: '1px solid var(--border)',
                  }}>
                  <span>{l.icon}</span> {l.label}
                </Link>
              ))}
            </MobileAccordion>

            {[
              { label: 'About Us', href: '/about' },
              { label: 'Contact',  href: '/contact' },
            ].map(l => (
              <Link key={l.href} href={l.href}
                onClick={() => setMobileOpen(false)}
                style={{
                  display: 'block', padding: '14px 20px',
                  fontSize: 14, color: 'var(--mid)',
                  borderBottom: '1px solid var(--border)', textDecoration: 'none',
                }}>
                {l.label}
              </Link>
            ))}

            <div style={{ padding: '14px 16px', display: 'flex', flexDirection: 'column', gap: 10 }}>
              <a href={`tel:${SITE.phone}`}
                style={{
                  display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8,
                  padding: '11px', borderRadius: 8, fontSize: 14, fontWeight: 500,
                  color: 'var(--blue)', border: '1.5px solid var(--blue)',
                  textDecoration: 'none', background: 'var(--blue-light)',
                }}>
                📞 {SITE.phone}
              </a>
              <Link href="/contact" onClick={() => setMobileOpen(false)}
                style={{
                  display: 'block', textAlign: 'center', padding: '12px',
                  borderRadius: 8, fontSize: 14, fontWeight: 600,
                  color: '#fff', background: 'var(--blue)', textDecoration: 'none',
                }}>
                Book Now
              </Link>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
