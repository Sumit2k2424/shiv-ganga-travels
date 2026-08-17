'use client';
import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import TrustStrip from '@/components/TrustStrip';
import { SITE } from '@/data/packages';
import Icon, { WhatsAppIcon } from '@/components/Icon';
import LogoBadge from '@/components/lux/LogoBadge';

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
  { label:'Cabs from Haridwar',    href:'/cabs/from/haridwar',          sub:'9 routes · our home base · lowest fares', icon:'city' },
  { label:'Cabs to Kedarnath',     href:'/cabs/to/kedarnath',           sub:'Fares from every pickup city',            icon:'temple' },
  { label:'Cabs to Badrinath',     href:'/cabs/to/badrinath',           sub:'Road reaches the temple · no trek',       icon:'temple' },
  { label:'Haridwar → Kedarnath',  href:'/cabs/haridwar-to-kedarnath-cab', sub:'235 km · 8–9 hrs · from ₹3,500',      icon:'route' },
  { label:'Haridwar → Badrinath',  href:'/cabs/haridwar-to-badrinath-cab', sub:'320 km · 10–11 hrs · from ₹4,500',    icon:'route' },
  { label:'Haridwar → Gangotri',   href:'/cabs/haridwar-to-gangotri-cab',  sub:'265 km · 8–9 hrs · from ₹4,000',      icon:'route' },
  { label:'Delhi → Haridwar',      href:'/cabs/delhi-to-haridwar-cab',     sub:'210 km · 4–5 hrs · from ₹2,800',      icon:'car' },
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
  /* Open is a STATE, not a hover — it must resolve on touch too, so it stays
     outside the (hover: hover) block below. */
  .eq-navlink[aria-expanded="true"] { color:var(--ink); }
  .eq-navlink::after { content:''; position:absolute; left:13px; right:13px; bottom:4px; height:1px; background:var(--gold); transform:scaleX(0); transform-origin:left; transition:transform .35s var(--ease-lux); }
  .eq-navlink[aria-expanded="true"]::after { transform:scaleX(1); }
  .eq-navlink:focus-visible { outline:2px solid var(--gold); outline-offset:2px; border-radius:1px; }

  /* Anchored to its trigger at the top-left, so it scales from there rather
     than from its own centre. Transition + @starting-style instead of a
     keyframe: toggling Packages→Cabs retargets mid-flight instead of
     restarting from zero. 180ms sits in the dropdown band. */
  .eq-drop { position:absolute; top:calc(100% + 10px); left:-8px; background:#fff; border:1px solid var(--rule); border-radius:var(--ds-r-2); min-width:308px; box-shadow:var(--ds-elev-3); overflow:hidden; z-index:200;
    transform-origin:top left; opacity:1; transform:none;
    transition:opacity .18s var(--ease-lux), transform .18s var(--ease-lux); }
  @starting-style { .eq-drop { opacity:0; transform:translateY(-6px) scale(0.985); } }
  .eq-drop__h { padding:14px 18px 11px; border-bottom:1px solid var(--rule); }
  .eq-drop__i { display:flex; align-items:center; gap:13px; padding:12px 18px; text-decoration:none; border-bottom:1px solid var(--rule); transition:background .3s var(--ease-lux); }
  .eq-drop__i:last-child { border-bottom:0; }
  .eq-drop__t { font-size:0.85rem; font-weight:600; color:var(--ink); line-height:1.3; }
  .eq-drop__s { font-size:0.72rem; color:var(--ink-faint); margin-top:2px; }

  .eq-phone { display:flex; align-items:center; gap:6px; font-size:0.72rem; font-weight:600; letter-spacing:0.08em; color:var(--ink); text-decoration:none; padding:8px 10px; border-radius:1px; transition:color .3s var(--ease-lux), transform .14s var(--ease-lux); }
  .eq-wa { display:flex; align-items:center; gap:8px; background:#25D366; color:#fff; padding:11px 20px; border-radius:100px; font-size:0.7rem; font-weight:700; letter-spacing:0.08em; text-transform:uppercase; text-decoration:none; flex-shrink:0; transition:background .3s var(--ease-lux), transform .14s var(--ease-lux); }

  .eq-burger { display:flex; align-items:center; justify-content:center; width:44px; height:44px; border-radius:var(--ds-r-2); border:1px solid var(--rule-strong); background:#fff; cursor:pointer; color:var(--ink); margin-left:4px; flex-shrink:0; transition:border-color .3s var(--ease-lux), transform .14s var(--ease-lux); }

  /* Press feedback — the system answering the tap. Fast on purpose. */
  .eq-wa:active, .eq-phone:active, .eq-burger:active { transform:scale(0.97); }
  /* Full-bleed rows flash instead of scaling — a 3% scale on a bordered
     edge-to-edge row reads as the layout twitching, not as a press. */
  .eq-drop__i:active, .eq-mob-link:active, .eq-mob-acc__h:active { background:var(--paper); }

  /* Hover is gated: on touch, :hover latches after a tap and leaves the nav
     link, CTA or row stuck in its hovered state. Matches the convention
     luxury.css already uses for .lux-btn / .lux-link / .lux-facts__row. */
  @media (hover: hover) and (pointer: fine) {
    .eq-navlink:hover { color:var(--ink); }
    .eq-navlink:hover::after { transform:scaleX(1); }
    .eq-drop__i:hover { background:var(--paper); }
    .eq-phone:hover { color:var(--gold-dark); }
    .eq-wa:hover { background:#1DA851; }
    .eq-burger:hover { border-color:var(--ink); }
  }

  .eq-mobile { background:#fff; border-top:1px solid var(--rule); max-height:80vh; overflow-y:auto; }
  .eq-mob-link { display:block; padding:15px 20px; font-size:0.85rem; letter-spacing:0.04em; color:var(--ink); border-bottom:1px solid var(--rule); text-decoration:none; transition:background .2s var(--ease-lux); }
  .eq-mob-acc { border-bottom:1px solid var(--rule); }
  .eq-mob-acc__h { width:100%; padding:15px 20px; display:flex; justify-content:space-between; align-items:center; background:none; border:none; cursor:pointer; font-family:var(--font); font-size:0.75rem; font-weight:600; letter-spacing:0.13em; text-transform:uppercase; color:var(--ink); transition:background .2s var(--ease-lux); }

  /* This scoped block never participated in the site's reduced-motion
     contract (luxury.css §"Reduced-motion / no-JS"). Movement goes; the
     colour and background feedback that aids comprehension stays. */
  @media (prefers-reduced-motion: reduce) {
    .eq-drop { transition:none; }
    @starting-style { .eq-drop { opacity:1; transform:none; } }
    .eq-navlink::after { transition:none; }
    .eq-wa, .eq-phone, .eq-burger { transition:background .3s var(--ease-lux), color .3s var(--ease-lux), border-color .3s var(--ease-lux); }
    .eq-wa:active, .eq-phone:active, .eq-burger:active { transform:none; }
  }
`;

function MobileAccordion({ label, children }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="eq-mob-acc">
      <button onClick={() => setOpen(o => !o)} className="eq-mob-acc__h" aria-expanded={open}>
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

  /* Escape dismisses any open dropdown or the mobile drawer (keyboard parity
     with the outside-click handlers above). */
  useEffect(() => {
    const fn = e => {
      if (e.key !== 'Escape') return;
      setDropOpen(false);
      setCabOpen(false);
      setMobileOpen(false);
    };
    document.addEventListener('keydown', fn);
    return () => document.removeEventListener('keydown', fn);
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
          {/* Centred, with no paddingTop offsets: those existed to compensate
              for LogoMark's river tail, which hung 14px below the circle. The
              badge is square, so the lockup centres normally. */}
          <Link href="/" className="nav-logo" style={{ display:'flex', alignItems:'center', gap:11, textDecoration:'none', flexShrink:0 }}>
            <LogoBadge size={40}/>
            <div style={{ lineHeight:1 }}>
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
          <nav className="eq-mobile md:hidden" aria-label="Mobile">
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
          </nav>
        )}
      </header>
      </div>
    </>
  );
}
