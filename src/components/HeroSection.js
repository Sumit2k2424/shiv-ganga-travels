'use client';
import { useEffect, useRef } from 'react';
import HeroSearch from '@/components/HeroSearch';
import Icon from '@/components/Icon';
import KedarnathScene from '@/components/lux/KedarnathScene';
import CountUp from '@/components/CountUp';
import { SITE } from '@/data/packages';

/*
 * Hero — illustrated, journey-first, tuned for emotional reassurance.
 *
 * The background is a hand-drawn, fully-animated Kedarnath scene at
 * Brahma-muhurta (KedarnathScene) — temple, massif, snow, drifting cloud
 * and the sun coming up — rendered as pure SVG + CSS keyframes. No photo,
 * no WebGL, no network image: it is ~7 KB, server-rendered so it paints
 * instantly, resolution-independent, and every animated property is a
 * transform or opacity, so it stays on the compositor at 60fps and holds a
 * still dawn frame under prefers-reduced-motion.
 *
 * The register to hit is "the opening scene of a quiet documentary," not a
 * travel banner. Everything that moves LOWERS arousal: a push-in so slow it
 * reads as stillness, a reveal that composes the thought one line at a time,
 * a single dawn-warm glow at the base. The scene sits BELOW the navy scrims,
 * so white type stays AAA-legible.
 */

/* Proof, shown rather than asserted. Every figure here is backed elsewhere on
   the page (TRUST stats, founder story, fleet section) — the hero just states
   them quietly, once, where an anxious first-time pilgrim scans for them. */
/* `n` counts up once when the hero is seen; `fig` is rendered as-is.
   24×7 has no `n` deliberately — it is a pattern, not a quantity, and
   counting to it would be theatre. CountUp starts at 80% of the target and
   its SSR output is the REAL figure, so a crawler never sees a false low
   number, and the digit count never changes mid-animation (40,000→50,000,
   12→15, 16→20) — which is what keeps this out of CLS. */
const HERO_TRUST = [
  { icon: 'medal',   n: 15,    suffix: '+', label: 'Years · since ' + SITE.established },
  { icon: 'users',   n: 50000, suffix: '+', label: 'Pilgrims served' },
  { icon: 'car',     n: 20,    suffix: '+', label: 'Own fleet vehicles' },
  { icon: 'headset', fig: '24×7',           label: 'On-road support' },
];

export default function HeroSection() {
  // Restrained pointer-parallax, now per depth band rather than one shift of
  // the whole picture — near ridge travels ~4x the far range, which is what
  // actually reads as depth instead of as the scene sliding. This writes two
  // unitless numbers to CSS custom properties on the scene root; luxury.css
  // (.k-px--*) multiplies them per layer. One style write per frame on one
  // element, so cost is flat no matter how many bands the scene grows.
  //
  // Desktop fine-pointer only, no-op under prefers-reduced-motion. The values
  // sit on an inner wrapper so they compose with (never fight) the `heroPush`
  // scale on the outer `.hero-photo`.
  const parallaxRef = useRef(null);
  useEffect(() => {
    const el = parallaxRef.current;
    if (!el) return;
    const fine = window.matchMedia('(pointer: fine)').matches;
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!fine || reduced) return;

    let tx = 0, ty = 0, cx = 0, cy = 0, raf = null;
    const paint = () => {
      // Critically damped enough to feel weighted: the scene keeps arriving
      // after the cursor stops, which is the difference between parallax and
      // cursor-tracking.
      cx += (tx - cx) * 0.06;
      cy += (ty - cy) * 0.06;
      el.style.setProperty('--mx', cx.toFixed(4));
      el.style.setProperty('--my', cy.toFixed(4));
      raf = requestAnimationFrame(paint);
    };
    const onMove = (e) => {
      tx = (e.clientX / window.innerWidth - 0.5) * 2;
      ty = (e.clientY / window.innerHeight - 0.5) * 2;
    };
    window.addEventListener('mousemove', onMove, { passive: true });
    raf = requestAnimationFrame(paint);
    return () => { window.removeEventListener('mousemove', onMove); cancelAnimationFrame(raf); };
  }, []);

  return (
    <section style={{
      position:'relative',
      /* svh, not vh: on mobile `vh` is pinned to the browser's address-bar
         state, so the hero grew/shrank as the bar hid on scroll and every
         section below jumped. `svh` is the stable (small) viewport unit —
         the hero holds one height, so nothing reflows while scrolling.
         Matches the package hero (luxury.css `.lux-hero`). */
      minHeight:'clamp(600px,80svh,760px)',
      background:'#050f24',
      display:'flex', flexDirection:'column',
      alignItems:'center', justifyContent:'center',
      padding:'clamp(64px,6vw,88px) 16px clamp(72px,7vw,96px)',
      overflow:'hidden',
    }}>
      {/* Animated Kedarnath scene — wrapped so the slow push-in scales the
          frame, not the SVG box. Vector, so it stays crisp at any scale. */}
      <div className="hero-photo" aria-hidden="true" style={{ position:'absolute', inset:0, overflow:'hidden' }}>
        <div ref={parallaxRef} style={{ width:'100%', height:'100%' }}>
          <KedarnathScene/>
        </div>
      </div>

      {/* Scrims — the scene is already dark at the base, so these are lighter
          than the photo needed: enough to hold white type AAA, light enough
          that the artwork still breathes. Tinted to the scene's own navy. */}
      <div aria-hidden="true" style={{ position:'absolute', inset:0,
        background:'linear-gradient(180deg, rgba(5,15,36,0.28) 0%, rgba(5,15,36,0.14) 42%, rgba(5,15,36,0.60) 100%)' }}/>
      <div aria-hidden="true" style={{ position:'absolute', inset:0,
        background:'radial-gradient(ellipse 72% 56% at 50% 44%, rgba(5,15,36,0.34) 0%, rgba(5,15,36,0) 76%)' }}/>
      {/* Dawn warmth at the base — a whisper of sunrise gold under the text
          zone. Low enough that it only tints the already-dark scene; white
          type over it still measures >13:1. */}
      <div aria-hidden="true" style={{ position:'absolute', inset:0,
        background:'linear-gradient(0deg, rgba(232,146,10,0.12) 0%, rgba(232,146,10,0.04) 15%, rgba(232,146,10,0) 32%)' }}/>

      <div className="hero-content" style={{ maxWidth:920, width:'100%', position:'relative', zIndex:10, textAlign:'center' }}>

        {/* One quiet credential badge — stated once, proven below */}
        <div className="hero-in" style={{ '--d':'0.05s',
          display:'inline-flex', alignItems:'center', gap:8,
          background:'rgba(5,15,36,0.5)',
          border:'1px solid rgba(255,255,255,0.22)',
          backdropFilter:'blur(8px)', WebkitBackdropFilter:'blur(8px)',
          color:'rgba(255,255,255,0.92)', fontSize:11.5, fontWeight:600,
          letterSpacing:'0.08em', textTransform:'uppercase',
          padding:'7px 18px', borderRadius:100,
          marginBottom:24,
        }}>
          Uttarakhand Tourism Registered · Est. {SITE.established}
        </div>

        <h1 className="display-title speakable-answer hero-title" style={{
          color:'#fff', fontSize:'clamp(2.15rem,5vw,3.65rem)',
          fontWeight:600, lineHeight:1.06, letterSpacing:'-0.02em',
          marginBottom:18,
        }}>
          <span className="hero-title__mask"><span className="hero-title__ln" style={{ '--ld':'0.15s' }}>Char Dham Yatra <span className="hero-title__accent">2026</span>,</span></span>
          <span className="hero-title__mask"><span className="hero-title__ln" style={{ '--ld':'0.32s' }}>from Haridwar</span></span>
        </h1>

        <p className="speakable-answer hero-in" style={{ '--d':'0.5s',
          color:'rgba(255,255,255,0.9)', fontSize:'clamp(15px,1.8vw,17.5px)', lineHeight:1.72,
          maxWidth:580, margin:'0 auto 34px',
          textShadow:'0 1px 12px rgba(0,0,0,0.45)',
        }}>
          Yamunotri · Gangotri · Kedarnath · Badrinath — with the operator who has
          carried <span className="hero-highlight">50,000+ pilgrims</span> since {SITE.established}.
          From <span className="hero-highlight">₹13,900</span> per person, all-inclusive.
        </p>

        <div className="hero-in" style={{ '--d':'0.62s' }}>
          <HeroSearch/>
        </div>

        {/* Proof, shown — quiet line-icons with the figures anxious pilgrims scan for */}
        <div className="hero-trust hero-in" style={{ '--d':'0.76s' }}>
          {HERO_TRUST.map((t) => (
            <span key={t.label} className="hero-trust__item">
              <span className="hero-trust__ico"><Icon name={t.icon} size={17} /></span>
              <span className="hero-trust__txt">
                <span className="hero-trust__fig">
                  {t.n != null ? <><CountUp value={t.n} />{t.suffix}</> : t.fig}
                </span>
                <span className="hero-trust__lbl">{t.label}</span>
              </span>
            </span>
          ))}
        </div>
      </div>

      {/* Minimal scroll cue — a thin line with a slowly travelling highlight.
          No bouncing mouse; desktop only, where there is room below the fold. */}
      <div className="hero-scroll" aria-hidden="true">
        <span className="hero-scroll__line"><span className="hero-scroll__dot"/></span>
        <span className="hero-scroll__label">Scroll</span>
      </div>

      {/* Wave */}
      <div className="hero-wave" aria-hidden="true" style={{ zIndex:10 }}>
        <svg viewBox="0 0 1440 56" preserveAspectRatio="none" style={{ display:'block', width:'100%', height:56 }}>
          <path d="M0,32 C480,56 960,8 1440,32 L1440,56 L0,56 Z" fill="var(--bg)"/>
        </svg>
      </div>

      <style dangerouslySetInnerHTML={{ __html:`
        /* Cinematic push-in: 100% -> 104.5% over 40s, linear, held. So slow it
           reads as stillness — "quietly standing in the mountains". */
        @keyframes heroPush { from { transform: scale(1); } to { transform: scale(1.045); } }
        .hero-photo { animation: heroPush 40s linear both; transform-origin: 50% 46%; will-change: transform; }

        /* Sequenced reveal: each line composed one after another, not all at once.
           Blur-to-focus, not just fade — the same "coming into clarity" read
           used on Linear/Vercel-style hero copy, kept slow enough to stay
           documentary rather than flashy. */
        @keyframes heroReveal { from { opacity:0; transform: translateY(18px); filter: blur(6px); } to { opacity:1; transform: translateY(0); filter: blur(0); } }
        .hero-in { opacity:0; animation: heroReveal 0.85s cubic-bezier(0.22,1,0.36,1) both; animation-delay: var(--d, 0s); }

        /* Headline — each line rises out of a mask like a curtain lifting,
           composed one after another rather than the whole block fading at
           once. The mask (overflow:hidden) is what makes the translateY
           read as a reveal instead of a slide. */
        /* Padding/negative-margin pair so overflow:hidden doesn't clip
           descenders (the comma after "2026") while the mask is animating. */
        .hero-title__mask { display:block; overflow:hidden; padding-bottom:0.16em; margin-bottom:-0.16em; }
        .hero-title__ln {
          display:block; transform: translateY(112%); opacity:0; filter: blur(10px);
          animation: heroLineIn 1s cubic-bezier(0.16,1,0.3,1) both;
          animation-delay: var(--ld, 0s);
          text-shadow: 0 2px 28px rgba(0,0,0,0.5);
        }
        @keyframes heroLineIn { to { transform: translateY(0); opacity:1; filter: blur(0); } }

        /* "2026" — the one accent in an otherwise all-white headline: a slow
           gold shimmer sweeping through the numerals, like light moving
           across brushed metal. Quiet, continuous, never garish. */
        .hero-title__accent {
          background: linear-gradient(100deg, #E8920A 0%, #F4B860 22%, #FFE9C7 42%, #F4B860 62%, #E8920A 100%);
          background-size: 260% 100%;
          -webkit-background-clip: text; background-clip: text; color: transparent;
          filter: drop-shadow(0 0 20px rgba(244,184,96,0.38));
          animation: heroShimmer 6s linear infinite;
        }
        @keyframes heroShimmer { to { background-position: -260% 0; } }

        /* Subtitle — the two figures a pilgrim is actually scanning for get
           a quiet gold weight instead of sitting flat in the paragraph. */
        .hero-highlight { color:#F4B860; font-weight:600; }

        /* Proof row */
        .hero-trust {
          display:flex; flex-wrap:wrap; justify-content:center;
          gap:14px 30px; margin-top:40px;
        }
        .hero-trust__item { display:inline-flex; align-items:center; gap:10px; white-space:nowrap; }
        .hero-trust__ico {
          flex:none; width:34px; height:34px; border-radius:100px;
          display:grid; place-items:center;
          color:#F4B860; background:rgba(232,146,10,0.14);
          border:1px solid rgba(232,146,10,0.34);
        }
        .hero-trust__txt { display:flex; flex-direction:column; align-items:flex-start; line-height:1.1; text-align:left; }
        .hero-trust__fig { font-family:var(--font-display); font-size:1.12rem; font-weight:600; color:#fff; letter-spacing:-0.01em; }
        .hero-trust__lbl { font-size:11px; color:rgba(255,255,255,0.74); letter-spacing:0.02em; }
        @media (max-width:560px) {
          .hero-trust { gap:16px 22px; margin-top:30px; }
          .hero-trust__item { flex:0 0 40%; justify-content:center; }
        }

        /* Scroll cue */
        .hero-scroll {
          position:absolute; left:50%; bottom:78px; transform:translateX(-50%);
          z-index:11; display:none; flex-direction:column; align-items:center; gap:9px;
        }
        @media (min-width:1000px) { .hero-scroll { display:flex; } }
        .hero-scroll__line {
          position:relative; width:1px; height:44px;
          background:linear-gradient(rgba(255,255,255,0.5), rgba(255,255,255,0));
          overflow:hidden;
        }
        .hero-scroll__dot {
          position:absolute; top:0; left:-1px; width:3px; height:9px; border-radius:2px;
          background:rgba(255,255,255,0.92);
          animation: heroScrollDot 2.8s cubic-bezier(0.4,0,0.2,1) infinite;
        }
        @keyframes heroScrollDot {
          0%   { transform: translateY(-9px); opacity:0; }
          22%  { opacity:1; }
          78%  { opacity:1; }
          100% { transform: translateY(44px); opacity:0; }
        }
        .hero-scroll__label {
          font-size:9.5px; letter-spacing:0.3em; text-transform:uppercase;
          color:rgba(255,255,255,0.6);
        }

        /* Nothing moves for visitors who asked for stillness. */
        @media (prefers-reduced-motion: reduce) {
          .hero-photo { animation: none; }
          .hero-in { opacity:1; animation: none; filter:none; }
          .hero-title__ln { opacity:1; transform:none; filter:none; animation:none; }
          .hero-title__accent { animation:none; }
          .hero-scroll__dot { animation: none; opacity:0.7; }
        }

        /* Mobile: freeze the scene's decorative motion (stars, clouds, mist,
           snow, birds, lamps, aarti, flag, plus the 40s push-in) — same
           reasoning as the sitewide mobile-hero rule this replaces: this many
           concurrent compositor layers under overflow:hidden, directly below
           the sticky header, is what shows up on real phones as the hero
           flickering/going blank while scrolling. Static dawn frame, held. */
        @media (max-width: 640px) {
          .hero-photo { animation: none; }
          /* Text paints immediately — the staged reveal starts each line at
             opacity:0, and Chrome won't count the h1/paragraph toward LCP
             until it's visible, costing ~1.2s of measured LCP on phones.
             Same logic as freezing the scene: mobile gets the held frame. */
          .hero-in { opacity:1; animation: none; filter:none; }
          .hero-title__ln { opacity:1; transform:none; filter:none; animation:none; }
          .k-star, .k-dawn, .k-cloud--a, .k-cloud--b, .k-firstlight, .k-layer--far,
          .k-layer--mid, .k-mist--a, .k-mist--b, .k-mist--c, .k-aarti, .k-door,
          .k-kalash, .k-flag, .k-lamp, .k-flake, .k-bird { animation: none !important; }
          .k-flake, .k-bird { display: none; }
          .k-star, .k-firstlight, .k-aarti, .k-door, .k-kalash { opacity: 1; }
        }
      `}}/>
    </section>
  );
}
