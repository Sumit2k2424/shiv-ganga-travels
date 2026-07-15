'use client';
import Link from 'next/link';
import { useEffect, useRef } from 'react';
import HeroSearch from '@/components/HeroSearch';
import { SITE } from '@/data/packages';

/* ─── Snowfall canvas ──────────────────────────────────────── */
function Snow() {
  const ref = useRef(null);
  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let raf, w, h;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const isMobile = window.matchMedia('(max-width: 640px)').matches;

    function resize() {
      w = canvas.offsetWidth; h = canvas.offsetHeight;
      canvas.width = w * dpr; canvas.height = h * dpr;
      ctx.scale(dpr, dpr);
    }
    resize();
    window.addEventListener('resize', resize);

    // On mobile (or reduced-motion) skip the rAF snow loop entirely — it is the
    // single biggest main-thread cost on phones, and Lighthouse measures mobile.
    const FLAKES = (reduce || isMobile) ? 0 : 90;
    if (FLAKES === 0) {
      return () => { window.removeEventListener('resize', resize); };
    }
    const flakes = Array.from({ length: FLAKES }, () => ({
      x:  Math.random() * 1440,
      y:  Math.random() * 900,
      r:  Math.random() * 2.2 + 0.4,
      vx: (Math.random() - 0.5) * 0.5,
      vy: Math.random() * 0.9 + 0.25,
      alpha: Math.random() * 0.55 + 0.15,
      wobble: Math.random() * Math.PI * 2,
      wobbleSpeed: Math.random() * 0.012 + 0.004,
    }));

    function draw() {
      ctx.clearRect(0, 0, w, h);
      const scaleX = w / 1440, scaleY = h / 900;
      flakes.forEach(f => {
        f.wobble += f.wobbleSpeed;
        f.x += f.vx + Math.sin(f.wobble) * 0.35;
        f.y += f.vy;
        if (f.y > h / scaleY + 10) { f.y = -6; f.x = Math.random() * 1440; }
        if (f.x > 1450) f.x = -5;
        if (f.x < -10) f.x = 1445;
        ctx.beginPath();
        ctx.arc(f.x * scaleX, f.y * scaleY, f.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(220,235,255,${f.alpha})`;
        ctx.fill();
      });
      raf = requestAnimationFrame(draw);
    }
    raf = requestAnimationFrame(draw);
    return () => { cancelAnimationFrame(raf); window.removeEventListener('resize', resize); };
  }, []);

  return <canvas ref={ref} aria-hidden="true" style={{
    position:'absolute', inset:0, width:'100%', height:'100%',
    pointerEvents:'none', zIndex:4,
  }}/>;
}

/* ─── Animated photographic backdrop (Pexels, CSS-only Ken Burns) ── */
const px = (id, w, h) =>
  `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=${w}&h=${h}&fit=crop`;

// Frame 1 is the LCP image — eager + high priority. Frames 2–3 lazy-load
// and crossfade in on an infinite 24s cycle (pure CSS, GPU-composited).
const FRAMES = [
  { id: 34376161, pos: 'center 42%' }, // Aerial — Kedarnath temple in the Himalayas
  { id: 35408529, pos: 'center 58%' }, // Badrinath temple with prayer flags
  { id: 18590571, pos: 'center 45%' }, // Bhagirathi peaks above Gangotri, winter
];

function HeroPhoto() {
  return (
    <div aria-hidden="true" style={{ position:'absolute', inset:0, zIndex:2, overflow:'hidden' }}>
      {FRAMES.map((f, i) => (
        <img key={f.id}
          src={px(f.id, 1600, 1000)}
          srcSet={`${px(f.id,800,600)} 800w, ${px(f.id,1200,800)} 1200w, ${px(f.id,1920,1080)} 1920w`}
          sizes="100vw"
          alt="" decoding="async"
          fetchPriority={i === 0 ? 'high' : 'low'}
          loading={i === 0 ? 'eager' : 'lazy'}
          className={i === 0 ? 'hero-frame-base' : 'hero-frame'}
          style={{
            position:'absolute', inset:0, width:'100%', height:'100%',
            objectFit:'cover', objectPosition:f.pos, willChange:'transform, opacity',
            ...(i === 0 ? {} : { opacity:0, animationDelay:`${i * 8}s` }),
          }}
        />
      ))}
      {/* Legibility overlays — deep navy wash + bottom anchor + vignette */}
      <div style={{ position:'absolute', inset:0,
        background:'linear-gradient(180deg, rgba(1,8,18,0.78) 0%, rgba(3,15,32,0.46) 42%, rgba(1,6,14,0.88) 100%)' }}/>
      <div style={{ position:'absolute', inset:0,
        background:'radial-gradient(ellipse 70% 55% at 50% 46%, rgba(0,0,0,0) 0%, rgba(1,5,10,0.42) 100%)' }}/>
      {/* Slow-drifting gold light sweep — premium sheen */}
      <div className="hero-sheen" style={{ position:'absolute', inset:0, opacity:0.5,
        background:'linear-gradient(115deg, transparent 30%, rgba(232,146,10,0.10) 47%, rgba(255,209,102,0.14) 50%, rgba(232,146,10,0.10) 53%, transparent 70%)',
        backgroundSize:'280% 100%' }}/>
    </div>
  );
}


/* ─── Main hero ───────────────────────────────────────────── */
export default function HeroSection() {
  return (
    <section style={{
      position:'relative',
      minHeight:'clamp(600px,78vh,760px)',
      background:'#010508',
      display:'flex', flexDirection:'column',
      alignItems:'center', justifyContent:'center',
      padding:'clamp(64px,7vw,88px) 16px clamp(56px,7vw,80px)',
      overflow:'hidden',
    }}>
      <HeroPhoto/>
      <Snow/>

      {/* Season badge */}
      <div className="hero-badge-left" style={{
        position:'absolute', top:22, left:22, zIndex:10,
        display:'flex', alignItems:'center', gap:8,
        background:'rgba(255,255,255,0.07)',
        border:'1px solid rgba(255,255,255,0.12)',
        backdropFilter:'blur(14px)',
        borderRadius:12, padding:'9px 15px',
      }}>
        <span style={{ width:7, height:7, borderRadius:'50%', background:'#4ade80',
          boxShadow:'0 0 8px #4ade80', flexShrink:0,
          animation:'sgPulse 2s ease-in-out infinite' }}/>
        <div>
          <div style={{ fontSize:9.5, fontWeight:700, color:'#4ade80', letterSpacing:'0.1em', lineHeight:1 }}>SEASON OPEN</div>
          <div style={{ fontSize:12.5, fontWeight:700, color:'#fff', marginTop:2, lineHeight:1 }}>Apr 19 – Nov 13 · 2026</div>
        </div>
      </div>

      {/* Phone — top right */}
      <a href={`tel:${SITE.phone}`} className="hero-badge-right" style={{
        position:'absolute', top:22, right:22, zIndex:10,
        display:'flex', alignItems:'center', gap:8,
        background:'rgba(232,146,10,0.12)',
        border:'1px solid rgba(232,146,10,0.35)',
        backdropFilter:'blur(14px)',
        borderRadius:12, padding:'9px 15px',
        textDecoration:'none',
      }}>
        <svg width="14" height="14" viewBox="0 0 24 24" fill="#E8920A">
          <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
        </svg>
        <div>
          <div style={{ fontSize:9.5, color:'rgba(255,255,255,0.55)', lineHeight:1 }}>CALL DIRECT</div>
          <div style={{ fontSize:12.5, fontWeight:700, color:'#FFD166', lineHeight:1.3 }}>{SITE.phone}</div>
        </div>
      </a>

      <div className="hero-content" style={{ maxWidth:1000, width:'100%', position:'relative', zIndex:10 }}>

        <div style={{
          display:'inline-flex', alignItems:'center', gap:8,
          background:'rgba(232,146,10,0.14)',
          border:'1px solid rgba(232,146,10,0.38)',
          backdropFilter:'blur(8px)',
          color:'#FFD166', fontSize:11, fontWeight:700,
          letterSpacing:'0.16em', textTransform:'uppercase',
          padding:'7px 20px', borderRadius:100,
          marginBottom:24,
          boxShadow:'0 0 20px rgba(232,146,10,0.18)',
        }}>
          <span style={{ width:6, height:6, borderRadius:'50%', background:'#FFD166',
            boxShadow:'0 0 10px #FFD166', animation:'sgPulse 2s ease-in-out infinite' }}/>
          Uttarakhand Tourism Registered · Est. 2010 · Direct Operator
        </div>

        <h1 className="display-title speakable-answer" style={{
          color:'#fff', fontSize:'clamp(1.8rem,4.6vw,3.2rem)',
          fontWeight:600, lineHeight:1.07, marginBottom:18,
          textShadow:'0 4px 40px rgba(0,0,0,0.6)',
        }}>
          Char Dham Yatra 2026 — Haridwar<br/>
          <em style={{ color:'#FFD166', fontWeight:700, fontStyle:'italic' }}>
            Direct Operator · Zero Commission
          </em>
        </h1>

        <div style={{
          display:'flex', justifyContent:'center', gap:10, flexWrap:'wrap', marginBottom:16,
        }}>
          {[{name:'Yamunotri',alt:'3,291m'},{name:'Gangotri',alt:'3,415m'},{name:'Kedarnath',alt:'3,583m'},{name:'Badrinath',alt:'3,133m'}].map(d => (
            <div key={d.name} style={{
              background:'rgba(255,255,255,0.06)',
              border:'1px solid rgba(255,255,255,0.12)',
              backdropFilter:'blur(10px)',
              borderRadius:10, padding:'6px 16px',
              display:'flex', flexDirection:'column', alignItems:'center',
            }}>
              <span style={{ fontSize:13, fontWeight:700, color:'#fff' }}>{d.name}</span>
              <span style={{ fontSize:10, color:'rgba(255,255,255,0.5)', marginTop:1 }}>{d.alt}</span>
            </div>
          ))}
        </div>

        <p className="speakable-answer" style={{
          color:'rgba(255,255,255,0.72)', fontSize:15.5, lineHeight:1.75,
          marginBottom:30, maxWidth:540, margin:'0 auto 30px',
        }}>
          From{' '}
          <span style={{ color:'#FFD166', fontWeight:700, fontSize:17, textShadow:'0 0 20px rgba(232,146,10,0.5)' }}>
            ₹21,000/person
          </span>
          {' '}all-inclusive · Zero commission · 50,000+ pilgrims served
        </p>

        <HeroSearch/>

        <div style={{ display:'flex', justifyContent:'center', gap:12, flexWrap:'wrap', marginTop:56 }}>
          <Link href="/char-dham-yatra-cost-calculator" style={{
            display:'inline-flex', alignItems:'center', gap:9,
            background:'linear-gradient(135deg,#E8920A,#f5a82a)',
            color:'#fff', padding:'13px 26px', borderRadius:50,
            fontWeight:700, fontSize:13.5, textDecoration:'none',
            boxShadow:'0 0 24px rgba(232,146,10,0.5), inset 0 1px 0 rgba(255,255,255,0.25)',
            border:'1px solid rgba(255,255,255,0.2)',
            position:'relative', overflow:'hidden',
          }}>
            <span aria-hidden="true" style={{
              position:'absolute', inset:0,
              background:'linear-gradient(105deg,transparent 40%,rgba(255,255,255,0.22) 50%,transparent 60%)',
              backgroundSize:'200% 100%',
              animation:'sgShimmer 2.5s ease-in-out infinite',
            }}/>
            <span style={{ fontSize:17, position:'relative' }}>🧮</span>
            <span style={{ position:'relative' }}>Yatra Cost Calculator</span>
          </Link>

          <Link href="/char-dham-yatra-route-map" style={{
            display:'inline-flex', alignItems:'center', gap:9,
            background:'rgba(11,123,139,0.15)', backdropFilter:'blur(16px)',
            color:'#fff', padding:'13px 26px', borderRadius:50,
            fontWeight:700, fontSize:13.5, textDecoration:'none',
            border:'1px solid rgba(11,123,139,0.55)',
            boxShadow:'0 0 20px rgba(11,123,139,0.3)',
          }}>
            <span style={{ fontSize:17 }}>🗺️</span>
            Route Map & Distances
          </Link>

          <a href={`https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent('Namaste! I want to book Char Dham Yatra 2026.')}`}
            target="_blank" rel="nofollow noopener noreferrer"
            style={{
              display:'inline-flex', alignItems:'center', gap:9,
              background:'rgba(37,211,102,0.12)', backdropFilter:'blur(16px)',
              color:'#fff', padding:'13px 26px', borderRadius:50,
              fontWeight:700, fontSize:13.5, textDecoration:'none',
              border:'1px solid rgba(37,211,102,0.4)',
              boxShadow:'0 0 16px rgba(37,211,102,0.22)',
            }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="#25D366">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zM12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.118 1.526 5.85L0 24l6.335-1.503A11.951 11.951 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.897 0-3.68-.49-5.23-1.35l-.374-.213-3.884.921.977-3.775-.233-.387A9.953 9.953 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
            </svg>
            Free Quote on WhatsApp
          </a>
        </div>

        <div style={{
          display:'flex', justifyContent:'center', gap:20, flexWrap:'wrap',
          marginTop:20, fontSize:12.5, color:'rgba(255,255,255,0.78)',
        }}>
          {['✓ No hidden charges','✓ VIP darshan included','✓ Free cancellation 30 days','✓ 25% advance confirms seat'].map(t => (
            <span key={t} style={{ whiteSpace:'nowrap' }}>{t}</span>
          ))}
        </div>


      </div>

      {/* Wave */}
      <div className="hero-wave" aria-hidden="true" style={{ zIndex:10 }}>
        <svg viewBox="0 0 1440 56" preserveAspectRatio="none" style={{ display:'block', width:'100%', height:56 }}>
          <path d="M0,32 C480,56 960,8 1440,32 L1440,56 L0,56 Z" fill="var(--bg)"/>
        </svg>
      </div>

      <style dangerouslySetInnerHTML={{ __html:`
        @keyframes sgPulse  { 0%,100%{opacity:1;transform:scale(1)} 50%{opacity:0.55;transform:scale(0.82)} }
        @keyframes sgBounce { 0%,100%{transform:translateY(0)} 50%{transform:translateY(7px)} }
        @keyframes sgShimmer{ 0%{background-position:200% 0} 100%{background-position:-200% 0} }

        /* ── Animated hero backdrop ── */
        @keyframes sgKenBurns { from{transform:scale(1) translateY(0)} to{transform:scale(1.14) translateY(-1.5%)} }
        @keyframes sgFrameCycle {
          0%{opacity:0; transform:scale(1.02)}
          4%{opacity:1}
          30%{opacity:1; transform:scale(1.12)}
          37%{opacity:0; transform:scale(1.13)}
          100%{opacity:0; transform:scale(1.02)}
        }
        @keyframes sgSheenDrift { 0%{background-position:120% 0} 100%{background-position:-120% 0} }
        @keyframes sgRise { from{opacity:0; transform:translateY(18px)} to{opacity:1; transform:translateY(0)} }
        .hero-frame-base { animation: sgKenBurns 24s ease-in-out infinite alternate; }
        .hero-frame      { animation: sgFrameCycle 24s ease-in-out infinite; }
        .hero-sheen      { animation: sgSheenDrift 14s linear infinite; }
        .hero-content    { animation: sgRise 0.8s cubic-bezier(0.22,1,0.36,1) both; }
        .hero-badge-left, .hero-badge-right { animation: sgRise 0.9s 0.25s cubic-bezier(0.22,1,0.36,1) both; }

        @media(max-width:640px){
          .hero-badge-right{display:none!important}
          .hero-frame-base, .hero-frame { object-position: 62% 40% !important; }
        }
        @media (prefers-reduced-motion: reduce){
          .hero-frame-base, .hero-frame, .hero-sheen, .hero-content,
          .hero-badge-left, .hero-badge-right { animation: none !important; }
          .hero-frame { opacity: 0 !important; }
        }
      `}}/>
    </section>
  );
}
