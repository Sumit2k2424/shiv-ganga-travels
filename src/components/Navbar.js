'use client';
import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { SITE } from '@/data/packages';

function LogoMark({ size = 36 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 44 44" fill="none" aria-hidden="true">
      {/* Outer circle ring */}
      <circle cx="22" cy="22" r="20" stroke="#0F2B5B" strokeWidth="2"/>
      {/* Inner filled circle accent */}
      <circle cx="22" cy="22" r="14" fill="#0F2B5B"/>
      {/* Mountain peaks — two triangles */}
      <path d="M10 30 L17 18 L22 25 L27 16 L34 30 Z" fill="#E8920A"/>
      {/* Om symbol subtle */}
      <text x="22" y="34.5" textAnchor="middle" fontSize="7" fontWeight="700"
        fontFamily="serif" fill="rgba(255,255,255,0.55)" letterSpacing="0">ॐ</text>
    </svg>
  );
}

function ChevronDown({ open }) {
  return (
    <svg width="11" height="11" viewBox="0 0 11 11" fill="none" style={{ transition:'transform .2s', transform: open ? 'rotate(180deg)' : 'none', marginLeft:2 }}>
      <path d="M2 4L5.5 7.5L9 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

const PKG_LINKS = [
  { label:'Char Dham Yatra',  href:'/packages/char-dham',   sub:'All 4 dhams — 5 to 15 days',            icon:'🏔️' },
  { label:'Do Dham Yatra',    href:'/packages/do-dham',     sub:'Kedarnath–Badrinath · Yamunotri–Gangotri', icon:'🕌' },
  { label:'Single Dham',      href:'/packages/single-dham', sub:'Kedarnath · Badrinath · and more',         icon:'🙏' },
  { label:'Helicopter Tours', href:'/packages/helicopter',  sub:'All 4 dhams in 6 days — VIP experience',  icon:'🚁' },
  { label:'Uttarakhand Tours',href:'/packages/uttarakhand', sub:'Hills, adventure, wildlife & more',        icon:'🌿' },
  { label:'Browse All',       href:'/packages',             sub:'Complete catalogue of 28 packages',        icon:'📋' },
];

const CAB_LINKS = [
  { label:'Char Dham Cab Booking', href:'/char-dham-yatra-cab-booking', sub:'All vehicles — Innova, Ertiga, Tempo',  icon:'🚙' },
  { label:'Haridwar → Kedarnath',  href:'/haridwar-to-kedarnath-cab',   sub:'225 km · 6–7 hrs · from ₹5,500',       icon:'🗺️' },
  { label:'Haridwar → Badrinath',  href:'/haridwar-to-badrinath-cab',   sub:'320 km · 8–9 hrs · from ₹7,000',       icon:'🗺️' },
  { label:'Haridwar → Gangotri',   href:'/haridwar-to-gangotri-cab',    sub:'265 km · 7–8 hrs · from ₹6,500',       icon:'🗺️' },
  { label:'Delhi → Haridwar',      href:'/delhi-to-haridwar-cab',       sub:'210 km · 4–5 hrs · from ₹3,500',       icon:'🚗' },
];

function MobileAccordion({ label, children }) {
  const [open, setOpen] = useState(false);
  return (
    <div style={{ borderBottom:'1px solid var(--border)' }}>
      <button onClick={() => setOpen(o => !o)} style={{
        width:'100%', padding:'15px 20px', display:'flex', justifyContent:'space-between',
        alignItems:'center', background:'none', border:'none', cursor:'pointer',
        fontFamily:'var(--font)', fontSize:14, fontWeight:500, color:'var(--text)',
      }}>
        {label} <ChevronDown open={open}/>
      </button>
      {open && <div style={{ background:'var(--bg)', padding:'4px 0' }}>{children}</div>}
    </div>
  );
}

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled,   setScrolled]   = useState(false);
  const [dropOpen,   setDropOpen]   = useState(false);
  const [cabOpen,    setCabOpen]    = useState(false);
  const dropRef = useRef(null);
  const cabRef  = useRef(null);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', fn, { passive:true });
    return () => window.removeEventListener('scroll', fn);
  }, []);

  useEffect(() => {
    const fn = e => { if (dropRef.current && !dropRef.current.contains(e.target)) setDropOpen(false); };
    document.addEventListener('mousedown', fn);
    return () => document.removeEventListener('mousedown', fn);
  }, []);

  useEffect(() => {
    const fn = e => { if (cabRef.current && !cabRef.current.contains(e.target)) setCabOpen(false); };
    document.addEventListener('mousedown', fn);
    return () => document.removeEventListener('mousedown', fn);
  }, []);

  return (
    <>
      {/* ── Utility strip ─────────────────────────────────── */}
      <div style={{ background:'var(--navy)', padding:'0' }}>
        <div style={{ maxWidth:'var(--container)', margin:'0 auto', padding:'7px 20px', display:'flex', justifyContent:'space-between', alignItems:'center', gap:8 }}>
          <div style={{ display:'flex', gap:16, fontSize:11.5, color:'rgba(255,255,255,0.55)', flexWrap:'wrap' }}>
            <span style={{ color:'#FFD166', fontWeight:600 }}>✦ Uttarakhand Tourism Registered</span>
            <span>·</span>
            <span>2026 Season Open — Apr 19 to Nov 13</span>
          </div>
          <div style={{ display:'flex', gap:16, fontSize:11.5 }}>
            <a href={`tel:${SITE.phone}`} style={{ color:'#FFD166', textDecoration:'none', fontWeight:600 }}>{SITE.phone}</a>
            <a href={`mailto:${SITE.email}`} style={{ color:'rgba(255,255,255,0.5)', textDecoration:'none', display:'none' }} className="hidden lg:inline">{SITE.email}</a>
          </div>
        </div>
      </div>

      {/* ── Main navbar ─────────────────────────────────── */}
      <header style={{
        position:'sticky', top:0, zIndex:100,
        background:'#fff',
        borderBottom:`1px solid ${scrolled ? 'transparent' : 'var(--border)'}`,
        boxShadow: scrolled ? '0 2px 20px rgba(15,43,91,0.1)' : 'none',
        transition:'box-shadow .3s, border-color .3s',
      }}>
        <div style={{ maxWidth:'var(--container)', margin:'0 auto', padding:'0 20px', height:64, display:'flex', alignItems:'center', gap:0 }}>

          {/* Logo */}
          <Link href="/" style={{ display:'flex', alignItems:'center', gap:10, textDecoration:'none', marginRight:36, flexShrink:0 }}>
            <LogoMark size={36}/>
            <div style={{ lineHeight:1 }}>
              <div style={{ display:'flex', alignItems:'baseline', gap:5 }}>
                <span style={{
                  fontSize:17, fontWeight:800, color:'var(--navy)',
                  letterSpacing:'-0.04em', lineHeight:1, fontFamily:'var(--font)',
                  textTransform:'uppercase',
                }}>SHIV GANGA</span>
                <span style={{
                  fontSize:17, fontWeight:300, color:'var(--navy)',
                  letterSpacing:'-0.01em', lineHeight:1,
                }}>TRAVELS</span>
              </div>
              <div style={{
                fontSize:9.5, color:'var(--teal)', letterSpacing:'0.18em',
                textTransform:'uppercase', marginTop:3, fontWeight:600,
              }}>
                HARIDWAR · EST. {SITE.established}
              </div>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex" style={{ display:'flex', alignItems:'center', gap:2, flex:1 }}>

            {/* Packages dropdown */}
            <div ref={dropRef} style={{ position:'relative' }}>
              <button onClick={() => setDropOpen(o => !o)}
                style={{
                  display:'flex', alignItems:'center', gap:3,
                  padding:'8px 12px', fontSize:13.5, fontWeight:500,
                  color: dropOpen ? 'var(--navy)' : 'var(--text-mid)',
                  background:'none', border:'none', cursor:'pointer',
                  fontFamily:'var(--font)', borderRadius:'var(--r-sm)',
                  transition:'color var(--t)',
                }}
                aria-expanded={dropOpen} aria-haspopup="true">
                Packages <ChevronDown open={dropOpen}/>
              </button>

              {dropOpen && (
                <div style={{
                  position:'absolute', top:'calc(100% + 10px)', left:'-8px',
                  background:'#fff', border:'1px solid var(--border)',
                  borderRadius:16, minWidth:290,
                  boxShadow:'0 16px 48px rgba(15,43,91,0.15), 0 4px 12px rgba(15,43,91,0.08)',
                  overflow:'hidden', zIndex:200,
                  animation:'dropIn .18s ease',
                }}>
                  {/* Dropdown header */}
                  <div style={{ padding:'12px 18px 10px', borderBottom:'1px solid var(--border)', background:'var(--bg)' }}>
                    <span style={{ fontSize:10.5, fontWeight:700, color:'var(--text-muted)', textTransform:'uppercase', letterSpacing:'0.12em' }}>
                      Yatra Packages
                    </span>
                  </div>
                  {PKG_LINKS.map((l, i) => (
                    <Link key={l.href} href={l.href} onClick={() => setDropOpen(false)}
                      style={{
                        display:'flex', alignItems:'center', gap:12,
                        padding:'12px 18px', textDecoration:'none',
                        borderBottom: i < PKG_LINKS.length-1 ? '1px solid var(--border)' : 'none',
                        transition:'background var(--t)',
                      }}
                      onMouseEnter={e => e.currentTarget.style.background='var(--bg)'}
                      onMouseLeave={e => e.currentTarget.style.background='transparent'}>
                      <span style={{
                        width:36, height:36, borderRadius:10, flexShrink:0,
                        background:'var(--navy-light)',
                        display:'flex', alignItems:'center', justifyContent:'center', fontSize:17,
                      }}>{l.icon}</span>
                      <div>
                        <div style={{ fontSize:13.5, fontWeight:600, color:'var(--text)', lineHeight:1.3 }}>{l.label}</div>
                        <div style={{ fontSize:11.5, color:'var(--text-muted)', marginTop:2 }}>{l.sub}</div>
                      </div>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Cabs dropdown */}
            <div ref={cabRef} style={{ position:'relative' }}>
              <button onClick={() => setCabOpen(o => !o)}
                style={{
                  display:'flex', alignItems:'center', gap:3,
                  padding:'8px 12px', fontSize:13.5, fontWeight:500,
                  color: cabOpen ? 'var(--navy)' : 'var(--text-mid)',
                  background:'none', border:'none', cursor:'pointer',
                  fontFamily:'var(--font)', borderRadius:'var(--r-sm)',
                  transition:'color var(--t)',
                }}
                aria-expanded={cabOpen} aria-haspopup="true">
                🚙 Cabs <ChevronDown open={cabOpen}/>
              </button>

              {cabOpen && (
                <div style={{
                  position:'absolute', top:'calc(100% + 10px)', left:'-8px',
                  background:'#fff', border:'1px solid var(--border)',
                  borderRadius:16, minWidth:290,
                  boxShadow:'0 16px 48px rgba(15,43,91,0.15), 0 4px 12px rgba(15,43,91,0.08)',
                  overflow:'hidden', zIndex:200,
                  animation:'dropIn .18s ease',
                }}>
                  <div style={{ padding:'12px 18px 10px', borderBottom:'1px solid var(--border)', background:'var(--bg)' }}>
                    <span style={{ fontSize:10.5, fontWeight:700, color:'var(--text-muted)', textTransform:'uppercase', letterSpacing:'0.12em' }}>
                      Cab & Taxi Service
                    </span>
                  </div>
                  {CAB_LINKS.map((l, i) => (
                    <Link key={l.href} href={l.href} onClick={() => setCabOpen(false)}
                      style={{
                        display:'flex', alignItems:'center', gap:12,
                        padding:'12px 18px', textDecoration:'none',
                        borderBottom: i < CAB_LINKS.length-1 ? '1px solid var(--border)' : 'none',
                        transition:'background var(--t)',
                      }}
                      onMouseEnter={e => e.currentTarget.style.background='var(--bg)'}
                      onMouseLeave={e => e.currentTarget.style.background='transparent'}>
                      <span style={{
                        width:36, height:36, borderRadius:10, flexShrink:0,
                        background:'#fff8e8',
                        display:'flex', alignItems:'center', justifyContent:'center', fontSize:17,
                      }}>{l.icon}</span>
                      <div>
                        <div style={{ fontSize:13.5, fontWeight:600, color:'var(--text)', lineHeight:1.3 }}>{l.label}</div>
                        <div style={{ fontSize:11.5, color:'var(--text-muted)', marginTop:2 }}>{l.sub}</div>
                      </div>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Plain links */}
            {[
              { label:'Char Dham',    href:'/packages/char-dham' },
              { label:'Kedarnath',    href:'/kedarnath-yatra' },
              { label:'Helicopter',   href:'/packages/helicopter' },
              { label:'Blog',         href:'/blog' },
              { label:'Contact',      href:'/contact' },
            ].map(l => (
              <Link key={l.href} href={l.href} className="nav-link">{l.label}</Link>
            ))}
          </nav>

          {/* Right CTAs */}
          <div style={{ display:'flex', alignItems:'center', gap:8, marginLeft:'auto', flexShrink:0 }}>
            <a href={`tel:${SITE.phone}`}
              className="hidden md:flex"
              style={{
                display:'flex', alignItems:'center', gap:6, fontSize:12.5, fontWeight:500,
                color:'var(--text-mid)', textDecoration:'none', padding:'7px 10px',
                borderRadius:'var(--r-sm)', transition:'background var(--t)',
              }}
              onMouseEnter={e => e.currentTarget.style.background='var(--navy-light)'}
              onMouseLeave={e => e.currentTarget.style.background='transparent'}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--navy)" strokeWidth="2" strokeLinecap="round"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.67A2 2 0 012 0h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 14h0v2.92z"/></svg>
              <span className="hidden lg:inline">{SITE.phone}</span>
            </a>

            <a href={`https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent('Namaste! Enquiry about Char Dham Yatra 2025.')}`}
              target="_blank" rel="noopener noreferrer"
              className="hidden md:inline-flex btn"
              style={{ background:'var(--navy-light)', color:'var(--navy)', padding:'8px 16px', fontSize:12.5, gap:5, fontWeight:600, borderRadius:'var(--r-sm)', textDecoration:'none', display:'inline-flex', alignItems:'center' }}>
              💬 Enquire
            </a>

            <Link href="/contact" className="btn btn-primary" style={{ padding:'9px 20px', fontSize:13 }}>
              Book Now
            </Link>

            <button onClick={() => setMobileOpen(o => !o)} className="md:hidden"
              style={{
                display:'flex', alignItems:'center', justifyContent:'center',
                width:38, height:38, borderRadius:'var(--r-sm)',
                border:'1px solid var(--border)', background:'none', cursor:'pointer',
                color:'var(--text)', marginLeft:4, transition:'background var(--t)',
              }}
              aria-label="Menu">
              {mobileOpen
                ? <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12"/></svg>
                : <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h10"/></svg>
              }
            </button>
          </div>
        </div>

        {/* Mobile drawer */}
        {mobileOpen && (
          <div className="md:hidden" style={{ background:'#fff', borderTop:'1px solid var(--border)', maxHeight:'80vh', overflowY:'auto' }}>
            <MobileAccordion label="Packages">
              {PKG_LINKS.map(l => (
                <Link key={l.href} href={l.href} onClick={() => setMobileOpen(false)}
                  style={{ display:'flex', alignItems:'center', gap:10, padding:'11px 24px', fontSize:13.5, color:'var(--text-mid)', textDecoration:'none', borderBottom:'1px solid var(--border)' }}>
                  <span>{l.icon}</span> {l.label}
                </Link>
              ))}
            </MobileAccordion>
            <MobileAccordion label="🚙 Cabs">
              {CAB_LINKS.map(l => (
                <Link key={l.href} href={l.href} onClick={() => setMobileOpen(false)}
                  style={{ display:'flex', alignItems:'center', gap:10, padding:'11px 24px', fontSize:13.5, color:'var(--text-mid)', textDecoration:'none', borderBottom:'1px solid var(--border)' }}>
                  <span>{l.icon}</span>
                  <div>
                    <div style={{ fontWeight:600 }}>{l.label}</div>
                    <div style={{ fontSize:11.5, color:'var(--text-muted)', marginTop:1 }}>{l.sub}</div>
                  </div>
                </Link>
              ))}
            </MobileAccordion>
            {[{label:'Kedarnath',href:'/kedarnath-yatra'},{label:'Blog',href:'/blog'},{label:'About',href:'/about'},{label:'Contact',href:'/contact'},{label:'All Packages',href:'/packages'}].map(l => (
              <Link key={l.href} href={l.href} onClick={() => setMobileOpen(false)}
                style={{ display:'block', padding:'15px 20px', fontSize:14, color:'var(--text)', borderBottom:'1px solid var(--border)', textDecoration:'none' }}>
                {l.label}
              </Link>
            ))}
            <div style={{ padding:'14px 16px', display:'flex', flexDirection:'column', gap:10 }}>
              <a href={`tel:${SITE.phone}`}
                style={{ display:'flex', alignItems:'center', justifyContent:'center', gap:8, padding:'12px', borderRadius:'var(--r-sm)', fontSize:14, fontWeight:600, color:'var(--navy)', border:'1.5px solid var(--navy)', background:'var(--navy-light)', textDecoration:'none' }}>
                📞 {SITE.phone}
              </a>
              <Link href="/contact" onClick={() => setMobileOpen(false)}
                style={{ display:'block', textAlign:'center', padding:'13px', borderRadius:'var(--r-sm)', fontSize:14, fontWeight:700, color:'#fff', background:'var(--gold)', textDecoration:'none' }}>
                Book Now
              </Link>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
