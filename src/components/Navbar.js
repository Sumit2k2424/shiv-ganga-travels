'use client';

/* ══════════════════════════════════════════════════════════════
   Luxury editorial header.

   Behaviour
   ─────────
   · Opaque on every page: dark credential strip over a paper bar.
     Photography never sits behind the navigation.
   · Nav links from 768px (four) and 1080px (all six). Only true
     phone widths get the burger, and it is labelled "Menu".
   · Retracts on scroll-down at desktop widths only — pinned on
     mobile, where the menu and call button matter more than 76px.
   · Mega-menu panels with real photography, not a list of links
   · Full-screen mobile overlay with staggered entry

   All original routes, phone numbers and WhatsApp CTAs are preserved.
   ══════════════════════════════════════════════════════════════ */

import { useState, useEffect, useRef, useCallback } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { AnimatePresence, motion } from 'motion/react';
import { SITE } from '@/data/packages';
import Icon, { WhatsAppIcon } from '@/components/Icon';
import LogoMark from '@/components/lux/LogoMark';
import { SOCIAL_LIVE } from '@/data/social';
import { SocialRow } from '@/components/lux/SocialIcons';

/* ── Navigation model ───────────────────────────────────────── */

const PKG_LINKS = [
  { label: 'Char Dham Yatra',   href: '/packages/char-dham',   sub: 'All four dhams — 5 to 15 days',           img: 'https://images.pexels.com/photos/15031440/pexels-photo-15031440.jpeg?auto=compress&cs=tinysrgb&w=320&h=400&fit=crop', imgAlt: 'Kedarnath Temple — Char Dham Yatra' },
  { label: 'Do Dham Yatra',     href: '/packages/do-dham',     sub: 'Kedarnath–Badrinath · Yamunotri–Gangotri', img: 'https://images.pexels.com/photos/15017640/pexels-photo-15017640.jpeg?auto=compress&cs=tinysrgb&w=320&h=400&fit=crop', imgAlt: 'Badrinath Temple — Do Dham Yatra' },
  { label: 'Single Dham',       href: '/packages/single-dham', sub: 'One shrine, undivided devotion',          img: 'https://images.pexels.com/photos/19271393/pexels-photo-19271393.jpeg?auto=compress&cs=tinysrgb&w=320&h=400&fit=crop', imgAlt: 'Kedarnath Temple — Single Dham Yatra' },
  { label: 'Helicopter Tours',  href: '/packages/helicopter',  sub: 'All four dhams in six days',              img: 'https://images.pexels.com/photos/34912011/pexels-photo-34912011.jpeg?auto=compress&cs=tinysrgb&w=320&h=400&fit=crop', imgAlt: 'Helicopter over Himalayan peaks' },
  { label: 'Uttarakhand Tours', href: '/packages/uttarakhand', sub: 'Hills, lakes, wildlife and adventure',    img: 'https://images.pexels.com/photos/15031440/pexels-photo-15031440.jpeg?auto=compress&cs=tinysrgb&w=320&h=400&fit=crop', imgAlt: 'Uttarakhand hill landscape' },
  { label: 'Browse All',        href: '/packages',             sub: 'The complete collection',                 img: 'https://images.pexels.com/photos/15031440/pexels-photo-15031440.jpeg?auto=compress&cs=tinysrgb&w=320&h=400&fit=crop', imgAlt: 'Haridwar Ganga ghats' },
];

const CAB_LINKS = [
  { label: 'Char Dham Cab Booking', href: '/char-dham-yatra-cab-booking', sub: 'Innova · Ertiga · Tempo · full circuit', icon: 'car' },
  { label: 'Haridwar → Kedarnath',  href: '/haridwar-to-kedarnath-cab',   sub: '218 km · 6–7 hrs · from ₹3,500',        icon: 'route' },
  { label: 'Haridwar → Badrinath',  href: '/haridwar-to-badrinath-cab',   sub: '320 km · 8–9 hrs · from ₹4,500',        icon: 'route' },
  { label: 'Haridwar → Gangotri',   href: '/haridwar-to-gangotri-cab',    sub: '265 km · 7–8 hrs · from ₹4,000',        icon: 'route' },
  { label: 'Haridwar → Yamunotri',  href: '/char-dham-yatra-cab-booking', sub: '175 km · 5–6 hrs · from ₹4,500',        icon: 'route' },
  { label: 'Delhi → Haridwar',      href: '/delhi-to-haridwar-cab',       sub: '210 km · 4–5 hrs · from ₹2,800',        icon: 'car' },
];

/* `wide: true` links only appear once there is room for six items.
   Between 768px and 1080px the bar carries the four that earn their
   place; About and Contact live in the Journeys panel and the footer
   anyway, so nothing becomes unreachable. */
const FLAT_LINKS = [
  { label: 'Kedarnath', href: '/kedarnath-yatra' },
  { label: 'Journal',   href: '/blog' },
  { label: 'About',     href: '/about', wide: true },
  { label: 'Contact',   href: '/contact', wide: true },
];

const WA_TEXT = encodeURIComponent(
  'Namaste! I want to book Char Dham Yatra 2026. Please share packages and availability.'
);
const WA_HREF = `https://wa.me/${SITE.whatsapp}?text=${WA_TEXT}`;

/* ── Credential ticker ──────────────────────────────────────────
   The two facts that decide whether someone trusts a pilgrimage
   operator — who founded it, and whether anyone is skimming the
   price — rolled on every page of the site.

   Pure CSS: one transform keyframe on a stacked list, no timers,
   no state, no re-renders. The last row repeats the first so the
   loop point is invisible.

   Accessibility: the roll is decorative and hidden from assistive
   tech; one static sentence carries the same information. Under
   prefers-reduced-motion the animation is dropped and the first
   credential simply sits there.
   ─────────────────────────────────────────────────────────────── */

const CREDENTIALS = [
  'Founded by a retired Indian Army officer',
  'Direct operator — zero agent commission',
  'You pay us, never a middleman',
  `Haridwar, since ${SITE.established} · 50,000+ pilgrims`,
];

function CredentialTicker() {
  return (
    <p className="lux-ticker">
      <span className="sr-only">
        {`Shiv Ganga Travels — founded by a retired Indian Army officer. Direct operator in Haridwar since ${SITE.established}, zero agent commission, 50,000+ pilgrims served.`}
      </span>

      <span className="lux-ticker__inner" aria-hidden="true">
        <span className="lux-ticker__mark" />
        <span className="lux-ticker__win">
          <span className="lux-ticker__list">
            {/* The repeat of index 0 at the end is what makes the loop seamless */}
            {[...CREDENTIALS, CREDENTIALS[0]].map((text, i) => (
              <span className="lux-ticker__row" key={i}>{text}</span>
            ))}
          </span>
        </span>
      </span>
    </p>
  );
}

/* ── Small parts ────────────────────────────────────────────── */

function Chevron({ open }) {
  return (
    <svg width="9" height="9" viewBox="0 0 11 11" fill="none" aria-hidden="true"
      style={{ transition: 'transform .35s cubic-bezier(.22,1,.36,1)', transform: open ? 'rotate(180deg)' : 'none' }}>
      <path d="M2 4L5.5 7.5L9 4" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

const panelMotion = {
  initial: { opacity: 0, y: -8 },
  animate: { opacity: 1, y: 0 },
  exit:    { opacity: 0, y: -8 },
  transition: { duration: 0.32, ease: [0.22, 1, 0.36, 1] },
};

/* ── Header ─────────────────────────────────────────────────── */

export default function Navbar() {
  const pathname = usePathname();
  const [openMenu, setOpenMenu] = useState(null);   // 'packages' | 'cabs' | null
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const lastY = useRef(0);
  const headerRef = useRef(null);

  /* The header carries its own background on every page — dark strip over a
     paper bar. It never goes transparent, so hero photography is never the
     thing sitting behind the navigation. `scrolled` only deepens the
     hairline and shadow slightly. */

  /* Scroll state: elevation, plus hide-on-scroll-down on desktop only.
     On a phone the header retracting is the wrong trade: the menu and
     the call button are the two things a visitor reaches for most, the
     screen is small enough that 76px costs little, and mobile browsers
     fire scroll events during URL-bar collapse and rubber-band bounce
     that the naive "y > lastY" test reads as deliberate downward
     scrolling — so the bar hides when nobody asked it to. Pinned on
     mobile, retracting on desktop. */
  useEffect(() => {
    const desktop = window.matchMedia('(min-width: 1080px) and (pointer: fine)');

    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 24);
      if (!desktop.matches) {
        setHidden(false);
        lastY.current = y;
        return;
      }
      // 6px deadzone so trackpad jitter doesn't toggle the bar
      if (y > 320 && y > lastY.current + 6 && !openMenu && !mobileOpen) setHidden(true);
      else if (y < lastY.current - 6 || y <= 320) setHidden(false);
      lastY.current = y;
    };

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    desktop.addEventListener('change', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      desktop.removeEventListener('change', onScroll);
    };
  }, [openMenu, mobileOpen]);

  /* Close menus on route change */
  useEffect(() => {
    setOpenMenu(null);
    setMobileOpen(false);
  }, [pathname]);

  /* Escape closes, click-outside closes */
  useEffect(() => {
    const onKey = (e) => {
      if (e.key !== 'Escape') return;
      setOpenMenu(null);
      setMobileOpen(false);
    };
    const onDown = (e) => {
      if (headerRef.current && !headerRef.current.contains(e.target)) setOpenMenu(null);
    };
    document.addEventListener('keydown', onKey);
    document.addEventListener('mousedown', onDown);
    return () => {
      document.removeEventListener('keydown', onKey);
      document.removeEventListener('mousedown', onDown);
    };
  }, []);

  /* Body lock under the mobile overlay */
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  const toggle = useCallback(
    (key) => setOpenMenu((cur) => (cur === key ? null : key)),
    []
  );

  const ink = 'var(--ink)';
  const faint = 'var(--ink-faint)';

  return (
    <>
      {/* ── Header block ──────────────────────────────────
          The utility strip and the header live in ONE sticky
          wrapper pinned at top:-34px. The strip scrolls away, the
          header pins. Previously these were two siblings with
          competing z-indexes and a negative margin, which buried
          the top half of the navigation under the strip. */}
      <div
        ref={headerRef}
        className={`lux-headwrap${scrolled ? ' is-scrolled' : ''}${hidden ? ' is-hidden' : ''}`}
      >
        <div className="lux-utility">
          <div className="lux-wrap lux-utility__row">
            <CredentialTicker />
            <div className="lux-utility__right">
              <span style={{ fontSize: 10.5, letterSpacing: '0.13em', textTransform: 'uppercase', color: 'var(--gold)', fontWeight: 600 }}>
                2026 season · Apr 19 – Nov 13
              </span>
              <a href={`mailto:${SITE.email}`} style={{ fontSize: 10.5, letterSpacing: '0.08em', color: 'rgba(255,255,255,0.5)', textDecoration: 'none' }}>
                {SITE.email}
              </a>
            </div>
          </div>
        </div>

        <header className="lux-header">
          <div className="lux-wrap" style={{ display: 'flex', alignItems: 'center', gap: 8, height: '100%' }}>

          {/* Wordmark */}
          <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: 12, textDecoration: 'none', flex: 'none' }}>
            <LogoMark size={34} />
            <span style={{ lineHeight: 1 }}>
              <span style={{ display: 'block', fontFamily: 'var(--font-display)', fontSize: 20, fontWeight: 600, letterSpacing: '0.01em', color: ink, transition: 'color .4s' }}>
                Shiv Ganga
              </span>
              <span style={{ display: 'block', fontSize: 8.5, letterSpacing: '0.34em', textTransform: 'uppercase', color: faint, marginTop: 5, fontWeight: 600, transition: 'color .4s' }}>
                Travels · Haridwar
              </span>
            </span>
          </Link>

          {/* Desktop navigation */}
          <nav className="lux-nav" style={{ alignItems: 'center', gap: 4, marginLeft: 48 }} aria-label="Primary">
            <MenuTrigger label="Journeys" open={openMenu === 'packages'} onClick={() => toggle('packages')} color={ink} />
            <MenuTrigger label="Private Cars" open={openMenu === 'cabs'} onClick={() => toggle('cabs')} color={ink} />
            {FLAT_LINKS.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className={`lux-nav-link${l.wide ? ' lux-nav-link--wide' : ''}`}
                style={{ color: ink }}
              >
                {l.label}
              </Link>
            ))}
          </nav>

          {/* Right rail */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginLeft: 'auto', flex: 'none' }}>
            <a
              href={`tel:${SITE.phone.replace(/-/g, '')}`}
              className="hidden md:flex"
              style={{ alignItems: 'center', gap: 8, fontSize: 12.5, fontWeight: 600, color: ink, textDecoration: 'none', letterSpacing: '0.02em', transition: 'color .4s' }}
            >
              <Icon name="phone" size={14} />
              {/* `hidden xl:inline` was hiding this at every width — this
                  codebase's hand-rolled utility block has md: and lg: but
                  never defined xl:, so the number never rendered. */}
              <span className="lux-phone-num">{SITE.phone}</span>
            </a>

            <a
              href={WA_HREF}
              target="_blank"
              rel="nofollow noopener noreferrer"
              className="lux-btn lux-btn--ink lux-from-md"
              style={{ padding: '12px 22px', minHeight: 42 }}
            >
              <WhatsAppIcon size={14} />
              Enquire
            </a>

            {/* Display lives in CSS, not inline: an inline `display:flex`
                outranks `lg:hidden` and left the burger on screen next to
                the desktop menu. */}
            <button
              onClick={() => setMobileOpen((o) => !o)}
              className="lux-burger"
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileOpen}
            >
              <span className="lux-burger__bars" aria-hidden="true">
                <span style={{ transform: mobileOpen ? 'translateY(6.5px) rotate(45deg)' : 'none' }} />
                <span style={{ opacity: mobileOpen ? 0 : 1 }} />
                <span style={{ transform: mobileOpen ? 'translateY(-6.5px) rotate(-45deg)' : 'none' }} />
              </span>
              {/* Spelling it out removes any doubt about where the menu went */}
              <span className="lux-burger__label" aria-hidden="true">
                {mobileOpen ? 'Close' : 'Menu'}
              </span>
            </button>
          </div>
        </div>

        {/* ── Mega panels ────────────────────────────────── */}
        <AnimatePresence>
          {openMenu === 'packages' && (
            <motion.div key="packages" {...panelMotion} className="lux-mega">
              <div className="lux-wrap" style={{ paddingTop: 42, paddingBottom: 46 }}>
                <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', gap: 20, paddingBottom: 20, borderBottom: '1px solid var(--rule)', marginBottom: 30 }}>
                  <span className="lux-eyebrow">The Collection</span>
                  <Link href="/packages" className="lux-link">All journeys</Link>
                </div>
                <div className="lux-mega__grid">
                  {PKG_LINKS.map((l) => (
                    <Link key={l.href} href={l.href} className="lux-mega__item lux-zoom-host">
                      <span className="lux-frame lux-frame--4x5 lux-frame--zoom" style={{ display: 'block', marginBottom: 16 }}>
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img src={l.img} alt={l.imgAlt} width={320} height={400} loading="lazy" decoding="async" />
                      </span>
                      <span style={{ display: 'block', fontFamily: 'var(--font-display)', fontSize: 17, fontWeight: 600, color: 'var(--ink)', lineHeight: 1.25 }}>
                        {l.label}
                      </span>
                      <span style={{ display: 'block', fontSize: 12, color: 'var(--ink-faint)', marginTop: 6, lineHeight: 1.5 }}>
                        {l.sub}
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            </motion.div>
          )}

          {openMenu === 'cabs' && (
            <motion.div key="cabs" {...panelMotion} className="lux-mega">
              <div className="lux-wrap" style={{ paddingTop: 42, paddingBottom: 46 }}>
                <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', gap: 20, paddingBottom: 20, borderBottom: '1px solid var(--rule)', marginBottom: 12 }}>
                  <span className="lux-eyebrow">Private Cars &amp; Transfers</span>
                  <span className="lux-caption">Chauffeur-driven · hill-trained drivers</span>
                </div>
                <div className="lux-mega__rows">
                  {CAB_LINKS.map((l) => (
                    <Link key={l.href + l.label} href={l.href} className="lux-mega__row">
                      <Icon name={l.icon} size={17} style={{ color: 'var(--teal)', flex: 'none' }} />
                      <span style={{ minWidth: 0 }}>
                        <span style={{ display: 'block', fontSize: 14, fontWeight: 600, color: 'var(--ink)' }}>{l.label}</span>
                        <span style={{ display: 'block', fontSize: 12, color: 'var(--ink-faint)', marginTop: 3 }}>{l.sub}</span>
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
        </header>
      </div>

      {/* ── Mobile overlay ───────────────────────────────── */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.28 }}
            className="lux-drawer"
          >
            <div className="lux-drawer__inner">
              <MobileGroup title="Journeys" links={PKG_LINKS} onNav={() => setMobileOpen(false)} />
              <MobileGroup title="Private Cars" links={CAB_LINKS} onNav={() => setMobileOpen(false)} />

              <nav style={{ marginTop: 8 }}>
                {[{ label: 'Char Dham Yatra', href: '/char-dham-yatra' }, ...FLAT_LINKS].map((l, i) => (
                  <motion.div
                    key={l.href}
                    initial={{ opacity: 0, y: 14 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.08 + i * 0.045, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <Link href={l.href} onClick={() => setMobileOpen(false)} className="lux-drawer__link">
                      {l.label}
                    </Link>
                  </motion.div>
                ))}
              </nav>

              <div style={{ marginTop: 'auto', paddingTop: 28, display: 'grid', gap: 10 }}>
                <a href={WA_HREF} target="_blank" rel="nofollow noopener noreferrer" className="lux-btn lux-btn--gold lux-btn--wide">
                  <WhatsAppIcon size={15} /> Enquire on WhatsApp
                </a>
                <a href={`tel:${SITE.phone.replace(/-/g, '')}`} className="lux-btn lux-btn--ghost lux-btn--wide">
                  <Icon name="phone" size={14} /> {SITE.phone}
                </a>

                {SOCIAL_LIVE.length > 0 && (
                  <div style={{ display: 'flex', justifyContent: 'center', paddingTop: 18, marginTop: 4, borderTop: '1px solid var(--rule)' }}>
                    <SocialRow accounts={SOCIAL_LIVE} tone="dark" size={18} />
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

/* ── Sub-components ─────────────────────────────────────────── */

function MenuTrigger({ label, open, onClick, color }) {
  return (
    <button
      onClick={onClick}
      aria-expanded={open}
      aria-haspopup="true"
      className="lux-nav-link"
      style={{ color, background: 'none', border: 0, cursor: 'pointer', display: 'inline-flex', alignItems: 'center', gap: 7 }}
    >
      {label}
      <Chevron open={open} />
    </button>
  );
}

function MobileGroup({ title, links, onNav }) {
  const [open, setOpen] = useState(false);
  return (
    <div style={{ borderBottom: '1px solid var(--rule)' }}>
      <button
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        style={{
          width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          padding: '20px 0', background: 'none', border: 0, cursor: 'pointer',
          fontFamily: 'var(--font-display)', fontSize: 26, fontWeight: 600,
          color: 'var(--ink)', letterSpacing: '-0.02em', textAlign: 'left',
        }}
      >
        {title}
        <Chevron open={open} />
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.38, ease: [0.22, 1, 0.36, 1] }}
            style={{ overflow: 'hidden' }}
          >
            <div style={{ paddingBottom: 18 }}>
              {links.map((l) => (
                <Link
                  key={l.href + l.label}
                  href={l.href}
                  onClick={onNav}
                  style={{ display: 'block', padding: '11px 0 11px 18px', borderLeft: '1px solid var(--rule)', textDecoration: 'none' }}
                >
                  <span style={{ display: 'block', fontSize: 14.5, fontWeight: 600, color: 'var(--ink)' }}>{l.label}</span>
                  <span style={{ display: 'block', fontSize: 12, color: 'var(--ink-faint)', marginTop: 2 }}>{l.sub}</span>
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
