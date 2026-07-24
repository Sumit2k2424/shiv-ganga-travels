'use client';
import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { SITE } from '@/data/packages';
import Icon, { WhatsAppIcon } from '@/components/Icon';

function LogoMark({ size = 36 }) {
  return (
    <div style={{ position:'relative', width:size, height:size + 14, flexShrink:0 }} aria-hidden="true">
      <style dangerouslySetInnerHTML={{ __html:`
        @keyframes logoAura {
          0%,100% { opacity:.55; transform:scale(1); }
          50%      { opacity:.9;  transform:scale(1.08); }
        }
        @keyframes logoSpin {
          from { transform:rotate(0deg); }
          to   { transform:rotate(360deg); }
        }
        @keyframes omPulse {
          0%,100% { opacity:.7; }
          50%      { opacity:1; }
        }
        @keyframes riverFlow {
          0%   { stroke-dashoffset: 120; opacity:.35; }
          50%  { opacity:.75; }
          100% { stroke-dashoffset: -120; opacity:.35; }
        }
        @keyframes ripple1 {
          0%   { transform:scaleX(1)   translateY(0); opacity:.6; }
          100% { transform:scaleX(1.3) translateY(2px); opacity:0; }
        }
        @keyframes ripple2 {
          0%   { transform:scaleX(.8)  translateY(0); opacity:.5; }
          100% { transform:scaleX(1.1) translateY(3px); opacity:0; }
        }
        @keyframes snowGlint {
          0%,100% { opacity:.55; }
          50%      { opacity:1; }
        }
        @keyframes peakShimmer {
          0%   { stop-color:#E8920A; }
          50%  { stop-color:#FFD166; }
          100% { stop-color:#E8920A; }
        }
        .logo-aura   { animation: logoAura   3.5s ease-in-out infinite; transform-origin:22px 22px; }
        .logo-ring   { animation: logoSpin   18s linear infinite; transform-origin:22px 22px; }
        .logo-om     { animation: omPulse    2.8s ease-in-out infinite; }
        .river-main  { animation: riverFlow  2.2s ease-in-out infinite; stroke-dasharray:40 80; }
        .river-side  { animation: riverFlow  2.8s ease-in-out .4s infinite; stroke-dasharray:25 60; }
        .rip1        { animation: ripple1    1.8s ease-out .2s infinite; transform-origin:22px 52px; }
        .rip2        { animation: ripple2    1.8s ease-out .9s infinite; transform-origin:22px 52px; }
        .snow-glint  { animation: snowGlint  2s ease-in-out infinite; }
      `}}/>

      {/* Main logo mark */}
      <svg width={size} height={size} viewBox="0 0 44 44" fill="none" style={{ display:'block' }}>
        <defs>
          <radialGradient id="lgAura" cx="50%" cy="50%" r="50%">
            <stop offset="0%"   stopColor="#E8920A" stopOpacity=".3"/>
            <stop offset="100%" stopColor="#E8920A" stopOpacity="0"/>
          </radialGradient>
          <radialGradient id="lgBg" cx="40%" cy="35%" r="70%">
            <stop offset="0%"   stopColor="#1a3d7c"/>
            <stop offset="100%" stopColor="#0F2B5B"/>
          </radialGradient>
          <linearGradient id="lgPeak" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%"   stopColor="#FFD166"/>
            <stop offset="100%" stopColor="#E8920A"/>
          </linearGradient>
          <linearGradient id="lgSnow" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%"   stopColor="#fff"   stopOpacity=".95"/>
            <stop offset="100%" stopColor="#d8eeff" stopOpacity=".7"/>
          </linearGradient>
          <clipPath id="lgClip">
            <circle cx="22" cy="22" r="19"/>
          </clipPath>
        </defs>

        {/* Outer aura glow */}
        <circle cx="22" cy="22" r="21" fill="url(#lgAura)" className="logo-aura"/>

        {/* Rotating dotted ring */}
        <circle cx="22" cy="22" r="20" stroke="#E8920A" strokeWidth="1"
          strokeDasharray="3 5" strokeOpacity=".5" fill="none" className="logo-ring"/>

        {/* Main circle bg */}
        <circle cx="22" cy="22" r="19" fill="url(#lgBg)"/>

        {/* Inner content clipped */}
        <g clipPath="url(#lgClip)">
          {/* Far mountain — blue-grey */}
          <path d="M4,34 L13,20 L18,26 L23,14 L28,22 L33,16 L40,30 L40,36 L4,36 Z"
            fill="rgba(11,123,139,0.35)"/>
          {/* Near mountain peaks — gold gradient */}
          <path d="M4,36 L14,22 L19,28 L22,10 L25,28 L30,20 L40,36 Z"
            fill="url(#lgPeak)"/>
          {/* Snow caps */}
          <path d="M19,28 L22,10 L25,28 L23.5,24 L22,18 L20.5,24 Z"
            fill="url(#lgSnow)" className="snow-glint"/>
          <path d="M27,22 L30,20 L33,24 L31,22.5 L30,21 Z"
            fill="rgba(255,255,255,.6)" className="snow-glint"/>
          <path d="M11,24 L14,22 L17,26 L15.5,24.5 L14,23 Z"
            fill="rgba(255,255,255,.6)" className="snow-glint"/>
        </g>

        {/* Border ring */}
        <circle cx="22" cy="22" r="19" stroke="#E8920A" strokeWidth="1.2" fill="none" strokeOpacity=".6"/>

        {/* Om symbol */}
        <text x="22" y="37" textAnchor="middle" fontSize="9" fontWeight="700"
          fontFamily="serif" fill="#FFD166" className="logo-om">ॐ</text>
      </svg>

      {/* River flowing downward from logo */}
      <svg width={size} height={16} viewBox="0 0 44 16" fill="none"
        style={{ display:'block', marginTop:-2, overflow:'visible' }}>
        <defs>
          <linearGradient id="rvGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%"   stopColor="#0B7B8B" stopOpacity=".9"/>
            <stop offset="100%" stopColor="#0B7B8B" stopOpacity="0"/>
          </linearGradient>
        </defs>

        {/* Main river stream */}
        <path d="M22,0 Q20,4 22,8 Q24,12 22,16"
          stroke="url(#rvGrad)" strokeWidth="2.5" strokeLinecap="round"
          fill="none" className="river-main"/>

        {/* Side tributary left */}
        <path d="M22,2 Q18,5 16,9 Q14,12 15,14"
          stroke="#0B7B8B" strokeWidth="1.2" strokeLinecap="round"
          fill="none" opacity=".5" className="river-side"/>

        {/* Side tributary right */}
        <path d="M22,2 Q26,5 28,9 Q30,12 29,14"
          stroke="#0B7B8B" strokeWidth="1.2" strokeLinecap="round"
          fill="none" opacity=".5" className="river-side"/>

        {/* Ripple at base */}
        <ellipse cx="22" cy="14.5" rx="6" ry="1.5"
          stroke="#0B7B8B" strokeWidth="1" fill="none" opacity=".4" className="rip1"/>
        <ellipse cx="22" cy="14.5" rx="9" ry="2.2"
          stroke="#0B7B8B" strokeWidth=".7" fill="none" opacity=".25" className="rip2"/>
      </svg>
    </div>
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
  { label:'Char Dham Yatra',  href:'/packages/char-dham',   sub:'All 4 dhams — 5 to 15 days',             imgAlt:'Kedarnath Temple — Char Dham Yatra', img:'https://images.pexels.com/photos/15031440/pexels-photo-15031440.jpeg?auto=compress&cs=tinysrgb&w=96&h=96&fit=crop' },
  { label:'Do Dham Yatra',    href:'/packages/do-dham',     sub:'Kedarnath–Badrinath · Yamunotri–Gangotri', imgAlt:'Badrinath Temple — Do Dham Yatra', img:'https://images.pexels.com/photos/15017640/pexels-photo-15017640.jpeg?auto=compress&cs=tinysrgb&w=96&h=96&fit=crop' },
  { label:'Single Dham',      href:'/packages/single-dham', sub:'Kedarnath · Badrinath · and more',         imgAlt:'Kedarnath Temple Single Dham Yatra', img:'https://images.pexels.com/photos/15031440/pexels-photo-15031440.jpeg?auto=compress&cs=tinysrgb&w=96&h=96&fit=crop' },
  { label:'Helicopter Tours', href:'/packages/helicopter',  sub:'All 4 dhams in 6 days — VIP experience',  img:'https://images.pexels.com/photos/34912011/pexels-photo-34912011.jpeg?auto=compress&cs=tinysrgb&w=96&h=96&fit=crop' },
  { label:'Uttarakhand Tours',href:'/packages/uttarakhand', sub:'Hills, adventure, wildlife & more',        img:'https://images.pexels.com/photos/15031440/pexels-photo-15031440.jpeg?auto=compress&cs=tinysrgb&w=96&h=96&fit=crop' },
  { label:'Browse All',       href:'/packages',             sub:'Complete catalogue of 28 packages',        imgAlt:'Haridwar Ganga Ghats — All Packages', img:'https://images.pexels.com/photos/15031440/pexels-photo-15031440.jpeg?auto=compress&cs=tinysrgb&w=96&h=96&fit=crop' },
];

const CAB_LINKS = [
  { label:'Char Dham Cab Booking', href:'/char-dham-yatra-cab-booking', sub:'Innova · Ertiga · Tempo · Full circuit',  icon:'car' },
  { label:'Haridwar → Kedarnath',  href:'/haridwar-to-kedarnath-cab',   sub:'218 km · 6–7 hrs · from ₹3,500',        icon:'route' },
  { label:'Haridwar → Badrinath',  href:'/haridwar-to-badrinath-cab',   sub:'320 km · 8–9 hrs · from ₹4,500',        icon:'route' },
  { label:'Haridwar → Gangotri',   href:'/haridwar-to-gangotri-cab',    sub:'265 km · 7–8 hrs · from ₹4,000',        icon:'route' },
  { label:'Haridwar → Yamunotri',  href:'/char-dham-yatra-cab-booking', sub:'175 km · 5–6 hrs · from ₹4,500',        icon:'route' },
  { label:'Delhi → Haridwar',      href:'/delhi-to-haridwar-cab',       sub:'210 km · 4–5 hrs · from ₹2,800',        icon:'car' },
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
      {/* ── Utility strip — the single bar above the navbar.
             Positive framing of the direct-operator fact (the old red
             "Warning" bar and the duplicate sub-nav strip are gone). ── */}
      <div style={{ background:'var(--navy)', padding:'0' }}>
        <div className='utility-strip' style={{ maxWidth:'var(--container)', margin:'0 auto', padding:'8px 16px', display:'flex', justifyContent:'space-between', alignItems:'center', gap:8 }}>
          <div className='utility-strip-left' style={{ display:'flex', gap:14, fontSize:11.5, color:'rgba(255,255,255,0.62)', flexWrap:'wrap', alignItems:'center' }}>
            <span style={{ color:'#fff', fontWeight:600 }}>Direct Char Dham operator in Haridwar since {SITE.established} — you pay us, not a middleman</span>
            <span className="hidden md:inline" style={{ color:'rgba(255,255,255,0.3)' }}>·</span>
            <span className="hidden md:inline">2026 season open · Apr 19 – Nov 13</span>
          </div>
          {/* Compact line shown only on small screens (CSS swaps the two) */}
          <span className='utility-strip-short' style={{ display:'none', fontSize:11.5, color:'#fff', fontWeight:600, textAlign:'center' }}>
            Direct operator in Haridwar · Est. {SITE.established}
          </span>
          <a href={`mailto:${SITE.email}`} className="hidden lg:inline" style={{ color:'rgba(255,255,255,0.5)', textDecoration:'none', fontSize:11.5 }}>{SITE.email}</a>
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
          <Link href="/" className="nav-logo" style={{ display:'flex', alignItems:'flex-start', gap:10, textDecoration:'none', flexShrink:0, paddingTop:4 }}>
            <LogoMark size={36}/>
            <div style={{ lineHeight:1, paddingTop:2 }}>
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
                        padding:'10px 16px', textDecoration:'none',
                        borderBottom: i < PKG_LINKS.length-1 ? '1px solid var(--border)' : 'none',
                        transition:'background var(--t)',
                      }}
                      onMouseEnter={e => e.currentTarget.style.background='var(--bg)'}
                      onMouseLeave={e => e.currentTarget.style.background='transparent'}>
                      <img src={l.img} alt={l.label} width={44} height={44}
                        style={{ width:44, height:44, borderRadius:8, objectFit:'cover', flexShrink:0 }}
                        loading="lazy" decoding="async"/>
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
                Cabs <ChevronDown open={cabOpen}/>
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
                        background:'var(--navy-light)', color:'var(--navy)',
                        display:'flex', alignItems:'center', justifyContent:'center',
                      }}><Icon name={l.icon} size={17}/></span>
                      <div>
                        <div style={{ fontSize:13.5, fontWeight:600, color:'var(--text)', lineHeight:1.3 }}>{l.label}</div>
                        <div style={{ fontSize:11.5, color:'var(--text-muted)', marginTop:2 }}>{l.sub}</div>
                      </div>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Plain links — minimal, high-intent only */}
            {[
              { label:'Kedarnath',   href:'/kedarnath-yatra' },
              { label:'Blog',        href:'/blog' },
              { label:'About',       href:'/about' },
              { label:'Contact Us',  href:'/contact' },
            ].map(l => (
              <Link key={l.href} href={l.href} className="nav-link">{l.label}</Link>
            ))}

            {/* Spacer */}
            <div style={{ flex: 1 }}/>
          </nav>

          {/* Right CTAs — one phone instance above the fold, one WhatsApp CTA.
              CTA grammar: green = WhatsApp, navy = quiet secondary. */}
          <div style={{ display:'flex', alignItems:'center', gap:8, marginLeft:'auto', flexShrink:0 }}>
            <a href='tel:+917817996730'
              className="hidden md:flex"
              style={{
                display:'flex', alignItems:'center', gap:6, fontSize:12.5, fontWeight:600,
                color:'var(--navy)', textDecoration:'none', padding:'7px 10px',
                borderRadius:'var(--r-sm)', transition:'background var(--t)',
              }}
              onMouseEnter={e => e.currentTarget.style.background='var(--navy-light)'}
              onMouseLeave={e => e.currentTarget.style.background='transparent'}>
              <Icon name="phone" size={14}/>
              <span className="hidden lg:inline">+91-7817996730</span>
            </a>

            <a
              href={`https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent('Namaste! I want to book Char Dham Yatra 2026. Please share packages and availability.')}`}
              target="_blank" rel="nofollow noopener noreferrer"
              className="hidden md:flex"
              style={{
                display: 'flex', alignItems: 'center', gap: 7,
                background: '#25D366',
                color: '#fff', padding: '9px 18px',
                borderRadius: 100, fontSize: 13, fontWeight: 700,
                textDecoration: 'none', flexShrink: 0,
              }}
            >
              <WhatsAppIcon size={15}/>
              Free Quote
            </a>

            <button onClick={() => setMobileOpen(o => !o)} className="md:hidden"
              style={{
                display:'flex', alignItems:'center', justifyContent:'center',
                width:42, height:42, borderRadius:10,
                border:'1px solid var(--border)', background:'var(--navy-light)', cursor:'pointer',
                color:'var(--navy)', marginLeft:4, flexShrink:0, transition:'background var(--t)',
              }}
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileOpen}>
              {mobileOpen
                ? <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12"/></svg>
                : <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h10"/></svg>
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
            <MobileAccordion label="Cabs">
              {CAB_LINKS.map(l => (
                <Link key={l.href} href={l.href} onClick={() => setMobileOpen(false)}
                  style={{ display:'flex', alignItems:'center', gap:10, padding:'11px 24px', fontSize:13.5, color:'var(--text-mid)', textDecoration:'none', borderBottom:'1px solid var(--border)' }}>
                  <Icon name={l.icon} size={16} style={{ color:'var(--navy)', flexShrink:0 }}/>
                  <div>
                    <div style={{ fontWeight:600 }}>{l.label}</div>
                    <div style={{ fontSize:11.5, color:'var(--text-muted)', marginTop:1 }}>{l.sub}</div>
                  </div>
                </Link>
              ))}
            </MobileAccordion>
            {[{label:'Char Dham Yatra',href:'/char-dham-yatra'},{label:'Kedarnath',href:'/kedarnath-yatra'},{label:'From Noida',href:'/char-dham-yatra-from-noida'},{label:'From Mumbai',href:'/char-dham-yatra-from-mumbai'},{label:'Blog',href:'/blog'},{label:'About',href:'/about'},{label:'Contact',href:'/contact'}].map(l => (
              <Link key={l.href} href={l.href} onClick={() => setMobileOpen(false)}
                style={{ display:'block', padding:'15px 20px', fontSize:14, color:'var(--text)', borderBottom:'1px solid var(--border)', textDecoration:'none' }}>
                {l.label}
              </Link>
            ))}
            <div style={{ padding:'14px 16px', display:'flex', flexDirection:'column', gap:10 }}>
              <a href='tel:+917817996730'
                style={{ display:'flex', alignItems:'center', justifyContent:'center', gap:8, padding:'12px', borderRadius:'var(--r-sm)', fontSize:14, fontWeight:600, color:'var(--navy)', border:'1.5px solid var(--navy)', background:'var(--navy-light)', textDecoration:'none' }}>
                <Icon name="phone" size={15}/> {SITE.phone}
              </a>
              <a href={`https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent('Namaste! I want to book Char Dham Yatra 2026. Please share package details.')}`}
                target="_blank" rel="nofollow noopener noreferrer"
                onClick={() => setMobileOpen(false)}
                style={{ display:'flex', alignItems:'center', justifyContent:'center', gap:8, padding:'13px', borderRadius:'var(--r-sm)', fontSize:14, fontWeight:700, color:'#fff', background:'#25D366', textDecoration:'none' }}>
                <WhatsAppIcon size={15}/> Enquire on WhatsApp
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
