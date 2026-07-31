'use client';
import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import TrustStrip from '@/components/TrustStrip';
import { SITE } from '@/data/packages';
import Icon, { WhatsAppIcon } from '@/components/Icon';
import LogoMark from '@/components/lux/LogoMark';

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
  { label:'All Cabs & Fares',      href:'/cabs',                        sub:'Book online · fixed fares · all routes', icon:'car' },
  { label:'Char Dham Cab Booking', href:'/char-dham-yatra-cab-booking', sub:'Innova · Ertiga · Tempo · Full circuit',  icon:'car' },
  { label:'Haridwar → Kedarnath',  href:'/haridwar-to-kedarnath-cab',   sub:'218 km · 6–7 hrs · from ₹3,500',        icon:'route' },
  { label:'Haridwar → Badrinath',  href:'/haridwar-to-badrinath-cab',   sub:'320 km · 8–9 hrs · from ₹4,500',        icon:'route' },
  { label:'Haridwar → Gangotri',   href:'/haridwar-to-gangotri-cab',    sub:'265 km · 7–8 hrs · from ₹4,000',        icon:'route' },
  { label:'Haridwar → Yamunotri',  href:'/char-dham-yatra-cab-booking', sub:'175 km · 5–6 hrs · from ₹4,500',        icon:'route' },
  { label:'Delhi → Haridwar',      href:'/delhi-to-haridwar-cab',       sub:'210 km · 4–5 hrs · from ₹2,800',        icon:'car' },
];

/* Editorial chrome styling — scoped to the navbar. Uses the site-wide
   `lux-`/`--` tokens (now global via layout.js). */
const NAV_CSS = `
  .eq-nav { background:var(--paper); border-bottom:1px solid var(--rule); transition:box-shadow .4s var(--ease-lux), border-color .4s var(--ease-lux); }
  .eq-nav.is-scrolled { box-shadow:var(--ds-elev-2); border-bottom-color:transparent; }
  .eq-wordmark__name { font-size:16px; font-weight:700; color:var(--ink); letter-spacing:0.02em; line-height:1; text-transform:uppercase; }
  .eq-wordmark__name .lt { font-weight:400; color:var(--ink-faint); }
  .eq-wordmark__sub { font-size:9px; color:var(--teal-dark); letter-spacing:0.22em; text-transform:uppercase; margin-top:4px; font-weight:600; }

  .eq-navlink { font-size:0.72rem; font-weight:600; letter-spacing:0.13em; text-transform:uppercase; color:var(--ink-faint); background:none; border:0; cursor:pointer; padding:10px 13px; display:inline-flex; align-items:center; gap:5px; text-decoration:none; position:relative; font-family:var(--font); transition:color .35s var(--ease-lux); }
  .eq-navlink:hover, .eq-navlink[aria-expanded="true"] { color:var(--ink); }
  .eq-navlink::after { content:''; position:absolute; left:13px; right:13px; bottom:4px; height:1px; background:var(--gold); transform:scaleX(0); transform-origin:left; transition:transform .35s var(--ease-lux); }
  .eq-navlink:hover::after, .eq-navlink[aria-expanded="true"]::after { transform:scaleX(1); }
  .eq-navlink:focus-visible { outline:2px solid var(--gold); outline-offset:2px; border-radius:1px; }

  .eq-drop { position:absolute; top:calc(100% + 10px); left:-8px; background:#fff; border:1px solid var(--rule); border-radius:var(--ds-r-2); min-width:308px; box-shadow:var(--ds-elev-3); overflow:hidden; z-index:200; animation:eqDrop .22s var(--ease-lux); }
  @keyframes eqDrop { from { opacity:0; transform:translateY(-6px);} to { opacity:1; transform:none;} }
  .eq-drop__h { padding:14px 18px 11px; border-bottom:1px solid var(--rule); }
  .eq-drop__i { display:flex; align-items:center; gap:13px; padding:12px 18px; text-decoration:none; border-bottom:1px solid var(--rule); transition:background .3s var(--ease-lux); }
  .eq-drop__i:last-child { border-bottom:0; }
  .eq-drop__i:hover { background:var(--paper); }
  .eq-drop__t { font-size:0.85rem; font-weight:600; color:var(--ink); line-height:1.3; }
  .eq-drop__s { font-size:0.72rem; color:var(--ink-faint); margin-top:2px; }

  .eq-phone { display:flex; align-items:center; gap:6px; font-size:0.72rem; font-weight:600; letter-spacing:0.08em; color:var(--ink); text-decoration:none; padding:8px 10px; border-radius:1px; transition:color .3s var(--ease-lux); }
  .eq-phone:hover { color:var(--gold-dark); }
  .eq-wa { display:flex; align-items:center; gap:8px; background:#25D366; color:#fff; padding:11px 20px; border-radius:100px; font-size:0.7rem; font-weight:700; letter-spacing:0.08em; text-transform:uppercase; text-decoration:none; flex-shrink:0; transition:background .3s var(--ease-lux); }
  .eq-wa:hover { background:#1DA851; }

  .eq-burger { display:flex; align-items:center; justify-content:center; width:44px; height:44px; border-radius:var(--ds-r-2); border:1px solid var(--rule-strong); background:#fff; cursor:pointer; color:var(--ink); margin-left:4px; flex-shrink:0; transition:border-color .3s var(--ease-lux); }
  .eq-burger:hover { border-color:var(--ink); }

  .eq-mobile { background:#fff; border-top:1px solid var(--rule); max-height:80vh; overflow-y:auto; }
  .eq-mob-link { display:block; padding:15px 20px; font-size:0.85rem; letter-spacing:0.04em; color:var(--ink); border-bottom:1px solid var(--rule); text-decoration:none; }
  .eq-mob-acc { border-bottom:1px solid var(--rule); }
  .eq-mob-acc__h { width:100%; padding:15px 20px; display:flex; justify-content:space-between; align-items:center; background:none; border:none; cursor:pointer; font-family:var(--font); font-size:0.75rem; font-weight:600; letter-spacing:0.13em; text-transform:uppercase; color:var(--ink); }
`;

function MobileAccordion({ label, children }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="eq-mob-acc">
      <button onClick={() => setOpen(o => !o)} className="eq-mob-acc__h">
        {label} <ChevronDown open={open}/>
      </button>
      {open && <div style={{ background:'var(--paper)', padding:'4px 0' }}>{children}</div>}
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
      <style dangerouslySetInnerHTML={{ __html: NAV_CSS }} />
      {/* ── Sticky header stack: TrustStrip pinned above the navbar ── */}
      <div className="header-sticky">
      <TrustStrip/>

      {/* ── Main navbar ─────────────────────────────────── */}
      <header className={`eq-nav${scrolled ? ' is-scrolled' : ''}`}>
        <div style={{ maxWidth:'var(--lux-max, 1320px)', margin:'0 auto', padding:'0 clamp(20px,4vw,40px)', height:70, display:'flex', alignItems:'center', gap:0 }}>

          {/* Logo */}
          <Link href="/" className="nav-logo" style={{ display:'flex', alignItems:'flex-start', gap:11, textDecoration:'none', flexShrink:0, paddingTop:4 }}>
            <LogoMark size={36}/>
            <div style={{ lineHeight:1, paddingTop:3 }}>
              <div className="eq-wordmark__name">Shiv&nbsp;Ganga <span className="lt">Travels</span></div>
              <div className="eq-wordmark__sub">Haridwar · Est. {SITE.established}</div>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex" style={{ display:'flex', alignItems:'center', gap:2, flex:1, marginLeft:28 }}>

            {/* Packages dropdown */}
            <div ref={dropRef} style={{ position:'relative' }}>
              <button onClick={() => setDropOpen(o => !o)} className="eq-navlink"
                aria-expanded={dropOpen} aria-haspopup="true">
                Packages <ChevronDown open={dropOpen}/>
              </button>

              {dropOpen && (
                <div className="eq-drop">
                  <div className="eq-drop__h">
                    <span className="lux-eyebrow lux-eyebrow--plain" style={{ fontSize:'0.625rem' }}>Yatra Packages</span>
                  </div>
                  {PKG_LINKS.map((l) => (
                    <Link key={l.href} href={l.href} onClick={() => setDropOpen(false)} className="eq-drop__i">
                      <img src={l.img} alt={l.imgAlt || l.label} width={44} height={44}
                        style={{ width:44, height:44, borderRadius:'var(--ds-r-2)', objectFit:'cover', flexShrink:0 }}
                        loading="lazy" decoding="async"/>
                      <div>
                        <div className="eq-drop__t">{l.label}</div>
                        <div className="eq-drop__s">{l.sub}</div>
                      </div>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Cabs dropdown */}
            <div ref={cabRef} style={{ position:'relative' }}>
              <button onClick={() => setCabOpen(o => !o)} className="eq-navlink"
                aria-expanded={cabOpen} aria-haspopup="true">
                Cabs <ChevronDown open={cabOpen}/>
              </button>

              {cabOpen && (
                <div className="eq-drop">
                  <div className="eq-drop__h">
                    <span className="lux-eyebrow lux-eyebrow--plain" style={{ fontSize:'0.625rem' }}>Cab &amp; Taxi Service</span>
                  </div>
                  {CAB_LINKS.map((l) => (
                    <Link key={l.label} href={l.href} onClick={() => setCabOpen(false)} className="eq-drop__i">
                      <span className="lux-ico-chip" style={{ width:38, height:38 }}><Icon name={l.icon} size={17}/></span>
                      <div>
                        <div className="eq-drop__t">{l.label}</div>
                        <div className="eq-drop__s">{l.sub}</div>
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
              { label:'Contact',     href:'/contact' },
            ].map(l => (
              <Link key={l.href} href={l.href} className="eq-navlink">{l.label}</Link>
            ))}

            <div style={{ flex: 1 }}/>
          </nav>

          {/* Right CTAs */}
          <div style={{ display:'flex', alignItems:'center', gap:10, marginLeft:'auto', flexShrink:0 }}>
            <a href="tel:+917817996730" className="eq-phone hidden md:flex">
              <Icon name="phone" size={14}/>
              <span className="hidden lg:inline">+91-7817996730</span>
            </a>

            <a
              href={`https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent('Namaste! I want to book Char Dham Yatra 2026. Please share packages and availability.')}`}
              target="_blank" rel="nofollow noopener noreferrer"
              className="eq-wa hidden md:flex"
            >
              <WhatsAppIcon size={15}/> Free Quote
            </a>

            <button onClick={() => setMobileOpen(o => !o)} className="eq-burger md:hidden"
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileOpen}>
              {mobileOpen
                ? <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M6 18L18 6M6 6l12 12"/></svg>
                : <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M4 6h16M4 12h16M4 18h10"/></svg>
              }
            </button>
          </div>
        </div>

        {/* Mobile drawer */}
        {mobileOpen && (
          <div className="eq-mobile md:hidden">
            <MobileAccordion label="Packages">
              {PKG_LINKS.map(l => (
                <Link key={l.href} href={l.href} onClick={() => setMobileOpen(false)}
                  style={{ display:'flex', alignItems:'center', gap:10, padding:'11px 24px', fontSize:'0.82rem', color:'var(--ink-soft)', textDecoration:'none', borderBottom:'1px solid var(--rule)' }}>
                  {l.label}
                </Link>
              ))}
            </MobileAccordion>
            <MobileAccordion label="Cabs">
              {CAB_LINKS.map(l => (
                <Link key={l.label} href={l.href} onClick={() => setMobileOpen(false)}
                  style={{ display:'flex', alignItems:'center', gap:10, padding:'11px 24px', fontSize:'0.82rem', color:'var(--ink-soft)', textDecoration:'none', borderBottom:'1px solid var(--rule)' }}>
                  <Icon name={l.icon} size={16} style={{ color:'var(--teal-dark)', flexShrink:0 }}/>
                  <div>
                    <div style={{ fontWeight:600, color:'var(--ink)' }}>{l.label}</div>
                    <div style={{ fontSize:'0.72rem', color:'var(--ink-faint)', marginTop:1 }}>{l.sub}</div>
                  </div>
                </Link>
              ))}
            </MobileAccordion>
            {[{label:'Char Dham Yatra',href:'/char-dham-yatra'},{label:'Kedarnath',href:'/kedarnath-yatra'},{label:'From Noida',href:'/char-dham-yatra-from-noida'},{label:'From Mumbai',href:'/char-dham-yatra-from-mumbai'},{label:'Blog',href:'/blog'},{label:'About',href:'/about'},{label:'Contact',href:'/contact'}].map(l => (
              <Link key={l.href} href={l.href} onClick={() => setMobileOpen(false)} className="eq-mob-link">
                {l.label}
              </Link>
            ))}
            <div style={{ padding:'16px', display:'flex', flexDirection:'column', gap:10 }}>
              <a href="tel:+917817996730" className="lux-btn lux-btn--ghost lux-btn--wide">
                <Icon name="phone" size={15}/> {SITE.phone}
              </a>
              <a href={`https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent('Namaste! I want to book Char Dham Yatra 2026. Please share package details.')}`}
                target="_blank" rel="nofollow noopener noreferrer"
                onClick={() => setMobileOpen(false)}
                className="eq-wa" style={{ justifyContent:'center', borderRadius:'var(--ds-r-2)' }}>
                <WhatsAppIcon size={15}/> Enquire on WhatsApp
              </a>
            </div>
          </div>
        )}
      </header>
      </div>
    </>
  );
}
