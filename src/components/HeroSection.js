'use client';
import Link from 'next/link';
import { useEffect, useRef } from 'react';
import HeroSearch from '@/components/HeroSearch';
import { SITE } from '@/data/packages';

/* ── Particle canvas ──────────────────────────────────────── */
function ParticleCanvas() {
  const ref = useRef(null);
  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let raf;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    function resize() {
      canvas.width  = canvas.offsetWidth  * dpr;
      canvas.height = canvas.offsetHeight * dpr;
      ctx.scale(dpr, dpr);
    }
    resize();
    window.addEventListener('resize', resize);

    // Create particles — mix of stars and slow-drifting motes
    const W = () => canvas.offsetWidth;
    const H = () => canvas.offsetHeight;
    const COUNT = 90;
    const particles = Array.from({ length: COUNT }, () => ({
      x: Math.random() * W(),
      y: Math.random() * H(),
      r: Math.random() * 1.6 + 0.3,
      vx: (Math.random() - 0.5) * 0.15,
      vy: -(Math.random() * 0.25 + 0.05),
      alpha: Math.random() * 0.6 + 0.1,
      twinkle: Math.random() * Math.PI * 2,
      speed: Math.random() * 0.015 + 0.005,
      gold: Math.random() > 0.75,
    }));

    function draw(t) {
      const w = W(), h = H();
      ctx.clearRect(0, 0, w, h);

      particles.forEach(p => {
        p.twinkle += p.speed;
        p.x += p.vx;
        p.y += p.vy;
        if (p.y < -4) { p.y = h + 4; p.x = Math.random() * w; }
        if (p.x < -4) p.x = w + 4;
        if (p.x > w + 4) p.x = -4;

        const glow = p.alpha * (0.5 + 0.5 * Math.sin(p.twinkle));
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        if (p.gold) {
          ctx.fillStyle = `rgba(255,209,102,${glow})`;
        } else {
          ctx.fillStyle = `rgba(200,220,255,${glow * 0.7})`;
        }
        ctx.fill();
      });

      raf = requestAnimationFrame(draw);
    }
    raf = requestAnimationFrame(draw);
    return () => { cancelAnimationFrame(raf); window.removeEventListener('resize', resize); };
  }, []);

  return (
    <canvas ref={ref} aria-hidden="true" style={{
      position:'absolute', inset:0, width:'100%', height:'100%',
      pointerEvents:'none', zIndex:1,
    }}/>
  );
}

/* ── Sacred geometry SVG overlay ─────────────────────────── */
function SacredGeometry() {
  return (
    <div aria-hidden="true" style={{
      position:'absolute', inset:0, display:'flex',
      alignItems:'center', justifyContent:'center',
      pointerEvents:'none', zIndex:1, overflow:'hidden',
    }}>
      <svg viewBox="0 0 600 600" style={{
        width:'min(72vw,600px)', height:'min(72vw,600px)',
        opacity:0.055, animation:'sgSpin 80s linear infinite',
      }}>
        {/* Outer ring */}
        <circle cx="300" cy="300" r="285" fill="none" stroke="#E8920A" strokeWidth="0.8"/>
        {/* Inner ring */}
        <circle cx="300" cy="300" r="220" fill="none" stroke="#FFD166" strokeWidth="0.5"/>
        {/* 12-pointed star — outer */}
        {Array.from({length:12},(_,i)=>{
          const a = (i/12)*Math.PI*2 - Math.PI/2;
          const b = ((i+0.5)/12)*Math.PI*2 - Math.PI/2;
          return <line key={i}
            x1={300+Math.cos(a)*285} y1={300+Math.sin(a)*285}
            x2={300+Math.cos(b)*140} y2={300+Math.sin(b)*140}
            stroke="#E8920A" strokeWidth="0.4" opacity="0.8"/>
        })}
        {/* Hexagon */}
        <polygon points={
          Array.from({length:6},(_,i)=>{
            const a = (i/6)*Math.PI*2 - Math.PI/2;
            return `${300+Math.cos(a)*180},${300+Math.sin(a)*180}`;
          }).join(' ')
        } fill="none" stroke="#FFD166" strokeWidth="0.6"/>
        {/* Inner hexagon rotated */}
        <polygon points={
          Array.from({length:6},(_,i)=>{
            const a = (i/6)*Math.PI*2 + Math.PI/6;
            return `${300+Math.cos(a)*180},${300+Math.sin(a)*180}`;
          }).join(' ')
        } fill="none" stroke="#0B7B8B" strokeWidth="0.5"/>
        {/* Central lotus petals */}
        {Array.from({length:8},(_,i)=>{
          const a = (i/8)*Math.PI*2;
          const cx = 300+Math.cos(a)*60;
          const cy = 300+Math.sin(a)*60;
          return <ellipse key={i} cx={cx} cy={cy} rx="28" ry="10"
            transform={`rotate(${i*45},${cx},${cy})`}
            fill="none" stroke="#FFD166" strokeWidth="0.4" opacity="0.7"/>
        })}
        {/* OM text in centre */}
        <text x="300" y="310" textAnchor="middle" fontSize="36" fill="#FFD166"
          opacity="0.9" fontFamily="serif">ॐ</text>
      </svg>
    </div>
  );
}

/* ── Mountain silhouette ──────────────────────────────────── */
function MountainSilhouette() {
  return (
    <div aria-hidden="true" style={{
      position:'absolute', bottom:0, left:0, right:0,
      height:'38%', pointerEvents:'none', zIndex:1,
    }}>
      <svg viewBox="0 0 1440 240" preserveAspectRatio="none"
        style={{ width:'100%', height:'100%', display:'block' }}>
        <defs>
          <linearGradient id="mtnFade" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#0a1829" stopOpacity="0"/>
            <stop offset="100%" stopColor="#060e1a" stopOpacity="0.6"/>
          </linearGradient>
        </defs>
        {/* Far range — lightest */}
        <path d="M0,200 L80,140 L160,165 L260,95 L360,130 L460,70 L560,110 L660,55 L760,100 L860,60 L960,105 L1060,75 L1160,115 L1260,80 L1360,120 L1440,100 L1440,240 L0,240 Z"
          fill="rgba(255,255,255,0.03)"/>
        {/* Mid range */}
        <path d="M0,220 L100,165 L200,190 L320,125 L420,155 L540,100 L640,138 L740,90 L860,130 L960,85 L1080,125 L1180,100 L1280,140 L1380,110 L1440,130 L1440,240 L0,240 Z"
          fill="rgba(11,123,139,0.06)"/>
        {/* Near range — darkest teal */}
        <path d="M0,240 L0,210 L120,170 L220,200 L340,150 L460,180 L580,138 L700,165 L820,130 L940,160 L1060,135 L1180,165 L1300,140 L1440,170 L1440,240 Z"
          fill="rgba(11,123,139,0.10)"/>
        {/* Snow glints on peaks */}
        {[[460,70],[660,55],[860,60],[960,105],[1060,75]].map(([x,y],i)=>(
          <ellipse key={i} cx={x} cy={y+4} rx="18" ry="7"
            fill="white" opacity="0.08"/>
        ))}
        <rect width="1440" height="240" fill="url(#mtnFade)" opacity="0.5"/>
      </svg>
    </div>
  );
}

/* ── Animated orbs ────────────────────────────────────────── */
function Orbs() {
  return (
    <div aria-hidden="true" style={{ position:'absolute', inset:0, pointerEvents:'none', zIndex:1, overflow:'hidden' }}>
      {/* Gold orb — top right */}
      <div style={{
        position:'absolute', top:'-8%', right:'-5%',
        width:'42vw', height:'42vw', maxWidth:520, maxHeight:520,
        borderRadius:'50%',
        background:'radial-gradient(circle at 40% 40%, rgba(232,146,10,0.22) 0%, rgba(232,146,10,0.06) 50%, transparent 70%)',
        animation:'orbFloat1 18s ease-in-out infinite',
        filter:'blur(2px)',
      }}/>
      {/* Teal orb — bottom left */}
      <div style={{
        position:'absolute', bottom:'-10%', left:'-8%',
        width:'50vw', height:'50vw', maxWidth:600, maxHeight:600,
        borderRadius:'50%',
        background:'radial-gradient(circle at 60% 60%, rgba(11,123,139,0.2) 0%, rgba(11,123,139,0.05) 50%, transparent 70%)',
        animation:'orbFloat2 22s ease-in-out infinite',
        filter:'blur(3px)',
      }}/>
      {/* Deep purple orb — centre */}
      <div style={{
        position:'absolute', top:'20%', left:'30%',
        width:'60vw', height:'60vw', maxWidth:700, maxHeight:700,
        borderRadius:'50%',
        background:'radial-gradient(circle at 50% 50%, rgba(60,30,100,0.18) 0%, transparent 65%)',
        animation:'orbFloat3 28s ease-in-out infinite',
      }}/>
      {/* Scan line — subtle horizontal sweep */}
      <div style={{
        position:'absolute', left:0, right:0, height:1,
        background:'linear-gradient(90deg, transparent, rgba(232,146,10,0.3), transparent)',
        animation:'scanLine 8s ease-in-out infinite',
        top:'50%',
      }}/>
    </div>
  );
}

/* ── Grid overlay — futuristic depth ─────────────────────── */
function GridOverlay() {
  return (
    <div aria-hidden="true" style={{
      position:'absolute', inset:0, zIndex:1,
      backgroundImage:[
        'linear-gradient(rgba(232,146,10,0.04) 1px, transparent 1px)',
        'linear-gradient(90deg, rgba(232,146,10,0.04) 1px, transparent 1px)',
      ].join(','),
      backgroundSize:'80px 80px',
      maskImage:'radial-gradient(ellipse 80% 60% at 50% 50%, black 0%, transparent 100%)',
      WebkitMaskImage:'radial-gradient(ellipse 80% 60% at 50% 50%, black 0%, transparent 100%)',
      pointerEvents:'none',
      animation:'gridFade 6s ease-in-out infinite alternate',
    }}/>
  );
}

/* ── Main hero ────────────────────────────────────────────── */
export default function HeroSection() {
  return (
    <section style={{
      position:'relative',
      minHeight:'100svh',
      background:'linear-gradient(160deg, #060e1a 0%, #0a1829 35%, #061820 65%, #050d14 100%)',
      display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center',
      padding:'clamp(80px,10vw,100px) 16px clamp(80px,12vw,120px)',
      overflow:'hidden',
    }}>

      {/* Layer stack — back to front */}
      <ParticleCanvas/>
      <GridOverlay/>
      <Orbs/>
      <SacredGeometry/>
      <MountainSilhouette/>

      {/* Season badge */}
      <div className="hero-badge-left" style={{
        position:'absolute', top:22, left:22, zIndex:10,
        display:'flex', alignItems:'center', gap:8,
        background:'rgba(255,255,255,0.06)',
        border:'1px solid rgba(255,255,255,0.12)',
        backdropFilter:'blur(14px)',
        borderRadius:12, padding:'9px 15px',
        animation:'fadeInDown 0.8s ease 0.2s both',
      }}>
        <span style={{ width:7, height:7, borderRadius:'50%', background:'#4ade80',
          boxShadow:'0 0 8px #4ade80', animation:'pulse 2s ease-in-out infinite', flexShrink:0 }}/>
        <div>
          <div style={{ fontSize:9.5, fontWeight:700, color:'#4ade80', letterSpacing:'0.1em', lineHeight:1 }}>SEASON OPEN</div>
          <div style={{ fontSize:12.5, fontWeight:700, color:'#fff', marginTop:2, lineHeight:1 }}>Apr 19 – Nov 13 · 2026</div>
        </div>
      </div>

      {/* Phone — top right */}
      <a href={`tel:${SITE.phone}`}
        className="hero-badge-right"
        style={{
          position:'absolute', top:22, right:22, zIndex:10,
          display:'flex', alignItems:'center', gap:8,
          background:'rgba(232,146,10,0.12)',
          border:'1px solid rgba(232,146,10,0.35)',
          backdropFilter:'blur(14px)',
          borderRadius:12, padding:'9px 15px',
          textDecoration:'none',
          animation:'fadeInDown 0.8s ease 0.3s both',
        }}>
        <svg width="14" height="14" viewBox="0 0 24 24" fill="#E8920A">
          <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
        </svg>
        <div>
          <div style={{ fontSize:9.5, color:'rgba(255,255,255,0.6)', lineHeight:1 }}>CALL DIRECT</div>
          <div style={{ fontSize:12.5, fontWeight:700, color:'#FFD166', lineHeight:1.3 }}>{SITE.phone}</div>
        </div>
      </a>

      {/* ── Main content ── */}
      <div style={{ maxWidth:860, width:'100%', position:'relative', zIndex:10, textAlign:'center' }}>

        {/* Eyebrow chip */}
        <div style={{
          display:'inline-flex', alignItems:'center', gap:8,
          background:'linear-gradient(135deg, rgba(232,146,10,0.18), rgba(232,146,10,0.08))',
          border:'1px solid rgba(232,146,10,0.4)',
          backdropFilter:'blur(8px)',
          color:'#FFD166', fontSize:11, fontWeight:700,
          letterSpacing:'0.16em', textTransform:'uppercase',
          padding:'7px 20px', borderRadius:100,
          marginBottom:28,
          animation:'fadeInUp 0.7s ease 0.3s both',
          boxShadow:'0 0 20px rgba(232,146,10,0.2)',
        }}>
          <span style={{ width:6, height:6, borderRadius:'50%', background:'#FFD166',
            boxShadow:'0 0 10px #FFD166', animation:'pulse 2s ease-in-out infinite' }}/>
          Uttarakhand Tourism Registered · Est. 2010 · Direct Operator
        </div>

        {/* H1 — staggered word animation */}
        <h1 className="display-title" style={{
          color:'#fff', fontSize:'clamp(2rem,6vw,4.2rem)',
          fontWeight:600, lineHeight:1.07, marginBottom:20,
          animation:'fadeInUp 0.7s ease 0.5s both',
          textShadow:'0 4px 40px rgba(0,0,0,0.5)',
        }}>
          Char Dham Yatra 2026 —{' '}
          <span style={{ display:'block', marginTop:4 }}>
            <span style={{
              background:'linear-gradient(135deg, #FFD166 0%, #E8920A 50%, #FFD166 100%)',
              backgroundSize:'200% auto',
              WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent',
              backgroundClip:'text',
              animation:'textShimmer 4s linear infinite',
              fontStyle:'italic',
            }}>Direct Operator · Zero Commission</span>
          </span>
        </h1>

        {/* Dham pills */}
        <div style={{
          display:'flex', justifyContent:'center', gap:10, flexWrap:'wrap',
          marginBottom:16,
          animation:'fadeInUp 0.7s ease 0.65s both',
        }}>
          {[
            { name:'Yamunotri', alt:'3,291m' },
            { name:'Gangotri', alt:'3,415m' },
            { name:'Kedarnath', alt:'3,583m' },
            { name:'Badrinath', alt:'3,133m' },
          ].map(d => (
            <div key={d.name} style={{
              display:'flex', flexDirection:'column', alignItems:'center',
              background:'rgba(255,255,255,0.06)',
              border:'1px solid rgba(255,255,255,0.12)',
              backdropFilter:'blur(10px)',
              borderRadius:10, padding:'6px 16px',
            }}>
              <span style={{ fontSize:13, fontWeight:700, color:'#fff', letterSpacing:'0.02em' }}>{d.name}</span>
              <span style={{ fontSize:10, color:'rgba(255,255,255,0.5)', marginTop:1 }}>{d.alt}</span>
            </div>
          ))}
        </div>

        {/* Subtitle */}
        <p style={{
          color:'rgba(255,255,255,0.72)', fontSize:15.5, lineHeight:1.75,
          marginBottom:32, maxWidth:540, margin:'0 auto 32px',
          animation:'fadeInUp 0.7s ease 0.75s both',
        }}>
          From{' '}
          <span style={{
            color:'#FFD166', fontWeight:700, fontSize:17,
            textShadow:'0 0 20px rgba(232,146,10,0.6)',
          }}>₹19,500/person</span>
          {' '}all-inclusive · Zero commission · 50,000+ pilgrims served
        </p>

        {/* Search widget */}
        <div style={{ animation:'fadeInUp 0.7s ease 0.85s both' }}>
          <HeroSearch/>
        </div>

        {/* CTA row */}
        <div style={{
          display:'flex', justifyContent:'center', gap:12, flexWrap:'wrap',
          marginTop:24,
          animation:'fadeInUp 0.7s ease 0.95s both',
        }}>
          <Link href="/char-dham-yatra-cost-calculator" style={{
            display:'inline-flex', alignItems:'center', gap:9,
            background:'linear-gradient(135deg,#E8920A 0%,#f5a82a 100%)',
            color:'#fff', padding:'13px 26px', borderRadius:50,
            fontWeight:700, fontSize:13.5, textDecoration:'none',
            position:'relative', overflow:'hidden',
            boxShadow:'0 0 24px rgba(232,146,10,0.55), 0 0 48px rgba(232,146,10,0.2), inset 0 1px 0 rgba(255,255,255,0.25)',
            border:'1px solid rgba(255,255,255,0.2)',
          }}>
            <span aria-hidden="true" style={{
              position:'absolute', inset:0,
              background:'linear-gradient(105deg,transparent 40%,rgba(255,255,255,0.22) 50%,transparent 60%)',
              backgroundSize:'200% 100%',
              animation:'shimmerBtn 2.5s ease-in-out infinite',
            }}/>
            <span style={{ fontSize:17, position:'relative' }}>🧮</span>
            <span style={{ position:'relative' }}>Yatra Cost Calculator</span>
          </Link>

          <Link href="/char-dham-yatra-route-map" style={{
            display:'inline-flex', alignItems:'center', gap:9,
            background:'rgba(11,123,139,0.15)',
            backdropFilter:'blur(16px)',
            color:'#fff', padding:'13px 26px', borderRadius:50,
            fontWeight:700, fontSize:13.5, textDecoration:'none',
            border:'1px solid rgba(11,123,139,0.55)',
            boxShadow:'0 0 20px rgba(11,123,139,0.35), inset 0 1px 0 rgba(255,255,255,0.08)',
          }}>
            <span style={{ fontSize:17 }}>🗺️</span>
            Route Map & Distances
          </Link>

          <a href={`https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent('Namaste! I want to book Char Dham Yatra 2026. Please share packages.')}`}
            target="_blank" rel="noopener noreferrer"
            style={{
              display:'inline-flex', alignItems:'center', gap:9,
              background:'rgba(37,211,102,0.12)',
              backdropFilter:'blur(16px)',
              color:'#fff', padding:'13px 26px', borderRadius:50,
              fontWeight:700, fontSize:13.5, textDecoration:'none',
              border:'1px solid rgba(37,211,102,0.4)',
              boxShadow:'0 0 18px rgba(37,211,102,0.25)',
            }}>
            <svg width="17" height="17" viewBox="0 0 24 24" fill="#25D366">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zM12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.118 1.526 5.85L0 24l6.335-1.503A11.951 11.951 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.897 0-3.68-.49-5.23-1.35l-.374-.213-3.884.921.977-3.775-.233-.387A9.953 9.953 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
            </svg>
            Free Quote on WhatsApp
          </a>
        </div>

        {/* Trust strip */}
        <div style={{
          display:'flex', justifyContent:'center', gap:20, flexWrap:'wrap',
          marginTop:24, fontSize:12, color:'rgba(255,255,255,0.55)',
          animation:'fadeInUp 0.7s ease 1.05s both',
        }}>
          {['✓ No hidden charges','✓ VIP darshan included','✓ Free cancellation 30 days','✓ 25% advance confirms seat'].map(t => (
            <span key={t} style={{ whiteSpace:'nowrap' }}>{t}</span>
          ))}
        </div>

        {/* Offer pills */}
        <div className="hero-offer-pills" style={{
          display:'flex', justifyContent:'center', gap:10, flexWrap:'wrap',
          marginTop:16,
          animation:'fadeInUp 0.7s ease 1.1s both',
        }}>
          {[
            { icon:'👴', text:'Senior Special — Pony included' },
            { icon:'🚁', text:'Same-day Kedarnath + Badrinath by heli' },
            { icon:'💳', text:'EMI available — 25% advance books your seat' },
          ].map(o => (
            <div key={o.text} style={{
              display:'inline-flex', alignItems:'center', gap:7,
              background:'rgba(255,255,255,0.05)',
              backdropFilter:'blur(10px)',
              border:'1px solid rgba(255,255,255,0.1)',
              borderRadius:100, padding:'7px 16px',
              fontSize:12, color:'rgba(255,255,255,0.8)', fontWeight:500,
            }}>
              <span style={{ fontSize:14 }}>{o.icon}</span>
              <span>{o.text}</span>
            </div>
          ))}
        </div>

        {/* Scroll cue */}
        <div style={{
          marginTop:44, display:'flex', flexDirection:'column',
          alignItems:'center', gap:6,
          animation:'fadeInUp 0.7s ease 1.3s both',
          opacity:0.45,
        }}>
          <span style={{ fontSize:10.5, color:'rgba(255,255,255,0.6)', letterSpacing:'0.12em' }}>SCROLL TO EXPLORE</span>
          <div style={{ animation:'bounceDown 2s ease-in-out infinite' }}>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M5 8l5 5 5-5" stroke="rgba(255,255,255,0.5)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </div>
      </div>

      {/* Wave into next section */}
      <div className="hero-wave" aria-hidden="true" style={{ zIndex:10 }}>
        <svg viewBox="0 0 1440 56" preserveAspectRatio="none" style={{ display:'block', width:'100%', height:56 }}>
          <path d="M0,32 C480,56 960,8 1440,32 L1440,56 L0,56 Z" fill="var(--bg)"/>
        </svg>
      </div>

      {/* All keyframes */}
      <style dangerouslySetInnerHTML={{ __html:`
        @keyframes fadeInUp {
          from { opacity:0; transform:translateY(24px); }
          to   { opacity:1; transform:translateY(0); }
        }
        @keyframes fadeInDown {
          from { opacity:0; transform:translateY(-16px); }
          to   { opacity:1; transform:translateY(0); }
        }
        @keyframes textShimmer {
          0%   { background-position: 200% center; }
          100% { background-position: -200% center; }
        }
        @keyframes orbFloat1 {
          0%,100% { transform: translate(0,0) scale(1); }
          33%     { transform: translate(-3%,4%) scale(1.04); }
          66%     { transform: translate(3%,-2%) scale(0.97); }
        }
        @keyframes orbFloat2 {
          0%,100% { transform: translate(0,0) scale(1); }
          40%     { transform: translate(4%,-3%) scale(1.06); }
          70%     { transform: translate(-2%,5%) scale(0.95); }
        }
        @keyframes orbFloat3 {
          0%,100% { transform: translate(0,0); }
          50%     { transform: translate(-2%,3%); }
        }
        @keyframes sgSpin {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }
        @keyframes gridFade {
          from { opacity:0.6; }
          to   { opacity:1; }
        }
        @keyframes scanLine {
          0%,100% { opacity:0; top:10%; }
          15%     { opacity:1; }
          85%     { opacity:1; }
          90%     { opacity:0; top:90%; }
        }
        @keyframes bounceDown {
          0%,100% { transform: translateY(0); }
          50%     { transform: translateY(6px); }
        }
        @keyframes shimmerBtn {
          0%   { background-position:200% 0; }
          100% { background-position:-200% 0; }
        }
        @keyframes pulse {
          0%,100% { opacity:1; transform:scale(1); }
          50%     { opacity:0.6; transform:scale(0.85); }
        }
        @media (max-width:640px) {
          .hero-offer-pills > div { font-size:11px !important; }
          .hero-badge-right { display:none !important; }
        }
      `}}/>
    </section>
  );
}
