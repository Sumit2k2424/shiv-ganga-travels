'use client';
import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { SITE } from '@/data/packages';

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
          50%      { opacity:1; filter:drop-shadow(0 0 3px rgba(232,146,10,.9)); }
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
  { label:'Char Dham Yatra',  href:'/packages/char-dham',   sub:'All 4 dhams — 5 to 15 days',             imgAlt:'Kedarnath Temple — Char Dham Yatra', img:'https://images.pexels.com/photos/3889930/pexels-photo-3889930.jpeg?auto=compress&cs=tinysrgb&w=800' },
  { label:'Do Dham Yatra',    href:'/packages/do-dham',     sub:'Kedarnath–Badrinath · Yamunotri–Gangotri', imgAlt:'Badrinath Temple — Do Dham Yatra', img:'https://images.pexels.com/photos/2404046/pexels-photo-2404046.jpeg?auto=compress&cs=tinysrgb&w=800' },
  { label:'Single Dham',      href:'/packages/single-dham', sub:'Kedarnath · Badrinath · and more',         imgAlt:'Kedarnath Temple Single Dham Yatra', img:'https://images.pexels.com/photos/3889930/pexels-photo-3889930.jpeg?auto=compress&cs=tinysrgb&w=800' },
  { label:'Helicopter Tours', href:'/packages/helicopter',  sub:'All 4 dhams in 6 days — VIP experience',  img:'https://images.pexels.com/photos/1544931/pexels-photo-1544931.jpeg?auto=compress&cs=tinysrgb&w=120&h=80&fit=crop' },
  { label:'Uttarakhand Tours',href:'/packages/uttarakhand', sub:'Hills, adventure, wildlife & more',        img:'https://images.pexels.com/photos/15031440/pexels-photo-15031440.jpeg?auto=compress&cs=tinysrgb&w=120&h=80&fit=crop' },
  { label:'Browse All',       href:'/packages',             sub:'Complete catalogue of 28 packages',        imgAlt:'Haridwar Ganga Ghats — All Packages', img:'https://images.pexels.com/photos/15031440/pexels-photo-15031440.jpeg?auto=compress&cs=tinysrgb&w=800' },
];

const CAB_LINKS = [
  { label:'Char Dham Cab Booking', href:'/char-dham-yatra-cab-booking', sub:'Innova · Ertiga · Tempo · Full circuit',  icon:'🚙' },
  { label:'Haridwar → Kedarnath',  href:'/haridwar-to-kedarnath-cab',   sub:'218 km · 6–7 hrs · from ₹3,500',        icon:'🗺️' },
  { label:'Haridwar → Badrinath',  href:'/haridwar-to-badrinath-cab',   sub:'320 km · 8–9 hrs · from ₹4,500',        icon:'🗺️' },
  { label:'Haridwar → Gangotri',   href:'/haridwar-to-gangotri-cab',    sub:'265 km · 7–8 hrs · from ₹4,000',        icon:'🗺️' },
  { label:'Haridwar → Yamunotri',  href:'/char-dham-yatra-cab-booking', sub:'175 km · 5–6 hrs · from ₹4,500',        icon:'🗺️' },
  { label:'Delhi → Haridwar',      href:'/delhi-to-haridwar-cab',       sub:'210 km · 4–5 hrs · from ₹2,800',        icon:'🚗' },
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
      {/* ── Commission alert strip ─────────────────────── */}
      <div style={{
        background:'linear-gradient(90deg,#7f1d1d,#991b1b,#7f1d1d)',
        backgroundSize:'200% 100%',
        padding:'8px 16px', textAlign:'center',
        position:'relative', overflow:'hidden',
      }}>
        {/* Subtle shimmer */}
        <div aria-hidden="true" style={{
          position:'absolute', inset:0,
          background:'linear-gradient(105deg,transparent 35%,rgba(255,255,255,0.06) 50%,transparent 65%)',
          backgroundSize:'300% 100%',
          animation:'commStrip 4s ease-in-out infinite',
        }}/>
        <Link href="/char-dham-yatra" style={{ textDecoration:'none' }}>
          <span style={{ fontSize:12.5, fontWeight:600, color:'#fff', position:'relative' }}>
            <span style={{ color:'#fca5a5', marginRight:6 }}>⚠️ Warning:</span>
            Most travel agents charge 10–20% commission on top of the actual package cost — you pay it without knowing.
            <span style={{ color:'#FFD166', fontWeight:700, marginLeft:8, textDecoration:'underline', textUnderlineOffset:3 }}>
              Book direct. Save the difference. →
            </span>
          </span>
        </Link>
        <style dangerouslySetInnerHTML={{ __html:'@keyframes commStrip{0%{background-position:200% 0}100%{background-position:-200% 0}}' }}/>
      </div>

      {/* ── Utility strip ─────────────────────────────────── */}
      <div style={{ background:'var(--navy)', padding:'0' }}>
        <div className='utility-strip' style={{ maxWidth:'var(--container)', margin:'0 auto', padding:'7px 16px', display:'flex', justifyContent:'space-between', alignItems:'center', gap:8 }}>
          <div className='utility-strip-left' style={{ display:'flex', gap:16, fontSize:11.5, color:'rgba(255,255,255,0.55)', flexWrap:'wrap' }}>
            <span style={{ color:'#FFD166', fontWeight:600 }}>✦ Uttarakhand Tourism Registered</span>
            <span>·</span>
            <span>2026 Season Open — Apr 19 to Nov 13</span>
          </div>
          <div style={{ display:'flex', gap:16, fontSize:11.5 }}>
            <a href='tel:+917817996730' style={{ color:'#FFD166', textDecoration:'none', fontWeight:600 }}>+91-7817996730</a>
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

            {/* Desktop Book Now CTA */}
          <a
            href={`https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent('Namaste! I want to book Char Dham Yatra 2026. Please share packages and availability.')}`}
            target="_blank" rel="nofollow noopener noreferrer"
            className="hidden md:flex"
            style={{
              display: 'flex', alignItems: 'center', gap: 7,
              background: 'linear-gradient(135deg,#25D366,#1db954)',
              color: '#fff', padding: '9px 18px',
              borderRadius: 100, fontSize: 13, fontWeight: 700,
              textDecoration: 'none', flexShrink: 0,
              boxShadow: '0 2px 12px rgba(37,211,102,0.35)',
              border: '1.5px solid rgba(255,255,255,0.25)',
            }}
          >
            <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            Free Quote
          </a>
          </nav>

          {/* Right CTAs */}
          <div style={{ display:'flex', alignItems:'center', gap:8, marginLeft:'auto', flexShrink:0 }}>
            <a href='tel:+917817996730'
              className="hidden md:flex"
              style={{
                display:'flex', alignItems:'center', gap:6, fontSize:12.5, fontWeight:500,
                color:'var(--text-mid)', textDecoration:'none', padding:'7px 10px',
                borderRadius:'var(--r-sm)', transition:'background var(--t)',
              }}
              onMouseEnter={e => e.currentTarget.style.background='var(--navy-light)'}
              onMouseLeave={e => e.currentTarget.style.background='transparent'}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--navy)" strokeWidth="2" strokeLinecap="round"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.67A2 2 0 012 0h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 14h0v2.92z"/></svg>
              <span className="hidden lg:inline">+91-7817996730</span>
            </a>

            <a href={`https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent('Namaste! Namaste! I want to book Char Dham Yatra 2026.')}`}
              target="_blank" rel="nofollow noopener noreferrer"
              className="hidden md:inline-flex btn"
              style={{ background:'var(--navy-light)', color:'var(--navy)', padding:'8px 16px', fontSize:12.5, gap:5, fontWeight:600, borderRadius:'var(--r-sm)', textDecoration:'none', display:'inline-flex', alignItems:'center' }}>
              💬 Enquire
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
            {[{label:'Char Dham Yatra',href:'/char-dham-yatra'},{label:'Kedarnath',href:'/kedarnath-yatra'},{label:'From Noida',href:'/char-dham-yatra-from-noida'},{label:'From Lucknow',href:'/char-dham-yatra-from-lucknow'},{label:'Blog',href:'/blog'},{label:'About',href:'/about'},{label:'Contact',href:'/contact'}].map(l => (
              <Link key={l.href} href={l.href} onClick={() => setMobileOpen(false)}
                style={{ display:'block', padding:'15px 20px', fontSize:14, color:'var(--text)', borderBottom:'1px solid var(--border)', textDecoration:'none' }}>
                {l.label}
              </Link>
            ))}
            <div style={{ padding:'14px 16px', display:'flex', flexDirection:'column', gap:10 }}>
              <a href='tel:+917817996730'
                style={{ display:'flex', alignItems:'center', justifyContent:'center', gap:8, padding:'12px', borderRadius:'var(--r-sm)', fontSize:14, fontWeight:600, color:'var(--navy)', border:'1.5px solid var(--navy)', background:'var(--navy-light)', textDecoration:'none' }}>
                📞 {SITE.phone}
              </a>
              <a href={`https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent('Namaste! I want to book Char Dham Yatra 2026. Please share package details.')}`}
                target="_blank" rel="nofollow noopener noreferrer"
                onClick={() => setMobileOpen(false)}
                style={{ display:'block', textAlign:'center', padding:'13px', borderRadius:'var(--r-sm)', fontSize:14, fontWeight:700, color:'#fff', background:'var(--gold)', textDecoration:'none' }}>
                Book Now
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
