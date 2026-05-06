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

    function resize() {
      w = canvas.offsetWidth; h = canvas.offsetHeight;
      canvas.width = w * dpr; canvas.height = h * dpr;
      ctx.scale(dpr, dpr);
    }
    resize();
    window.addEventListener('resize', resize);

    const FLAKES = 160;
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

/* ─── Scene SVG ────────────────────────────────────────────── */
function Scene() {
  return (
    <svg viewBox="0 0 1440 900" preserveAspectRatio="xMidYMid slice"
      style={{ position:'absolute', inset:0, width:'100%', height:'100%', zIndex:2 }}
      aria-hidden="true">
      <defs>

        {/* Sky gradient */}
        <linearGradient id="sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%"   stopColor="#010508"/>
          <stop offset="30%"  stopColor="#040d18"/>
          <stop offset="65%"  stopColor="#081428"/>
          <stop offset="100%" stopColor="#0d1f3a"/>
        </linearGradient>

        {/* Aurora glow */}
        <linearGradient id="aurora1" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%"   stopColor="transparent"/>
          <stop offset="20%"  stopColor="rgba(11,100,100,0.0)"/>
          <stop offset="40%"  stopColor="rgba(11,123,139,0.18)"/>
          <stop offset="60%"  stopColor="rgba(80,40,120,0.12)"/>
          <stop offset="80%"  stopColor="rgba(11,123,139,0.08)"/>
          <stop offset="100%" stopColor="transparent"/>
        </linearGradient>
        <linearGradient id="aurora2" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%"   stopColor="transparent"/>
          <stop offset="30%"  stopColor="rgba(232,146,10,0.04)"/>
          <stop offset="55%"  stopColor="rgba(100,60,160,0.1)"/>
          <stop offset="75%"  stopColor="rgba(11,123,139,0.1)"/>
          <stop offset="100%" stopColor="transparent"/>
        </linearGradient>

        {/* Mountain fill gradients */}
        <linearGradient id="mtn-far" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%"  stopColor="#1a3555" stopOpacity="0.55"/>
          <stop offset="100%" stopColor="#0d2240" stopOpacity="0.8"/>
        </linearGradient>
        <linearGradient id="mtn-mid" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%"  stopColor="#122840" stopOpacity="0.75"/>
          <stop offset="100%" stopColor="#091828" stopOpacity="0.95"/>
        </linearGradient>
        <linearGradient id="mtn-near" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%"  stopColor="#0a1e30"/>
          <stop offset="100%" stopColor="#05101a"/>
        </linearGradient>
        <linearGradient id="kailash-g" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%"  stopColor="#e8c88a" stopOpacity="0.18"/>
          <stop offset="40%"  stopColor="#0c1e30" stopOpacity="0.9"/>
          <stop offset="100%" stopColor="#05101a"/>
        </linearGradient>

        {/* Shiva aura */}
        <radialGradient id="shiva-aura" cx="50%" cy="50%" r="50%">
          <stop offset="0%"   stopColor="#e8b84a" stopOpacity="0.22"/>
          <stop offset="40%"  stopColor="#c87820" stopOpacity="0.1"/>
          <stop offset="100%" stopColor="transparent" stopOpacity="0"/>
        </radialGradient>
        <radialGradient id="shiva-inner" cx="50%" cy="45%" r="50%">
          <stop offset="0%"   stopColor="#ffd166" stopOpacity="0.35"/>
          <stop offset="60%"  stopColor="#e8920a" stopOpacity="0.1"/>
          <stop offset="100%" stopColor="transparent"/>
        </radialGradient>

        {/* Mist at base */}
        <linearGradient id="mist" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%"  stopColor="rgba(100,140,180,0)" />
          <stop offset="60%" stopColor="rgba(60,100,140,0.12)"/>
          <stop offset="100%" stopColor="rgba(20,50,90,0.25)"/>
        </linearGradient>

        {/* Overlay for text legibility */}
        <linearGradient id="overlay" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%"   stopColor="rgba(4,10,20,0.72)"/>
          <stop offset="45%"  stopColor="rgba(4,10,20,0.58)"/>
          <stop offset="100%" stopColor="rgba(4,10,20,0.78)"/>
        </linearGradient>
        {/* Left-lighter overlay — lets Shiva show through on left */}
        <linearGradient id="overlay-lr" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%"   stopColor="rgba(4,10,20,0.05)"/>
          <stop offset="22%"  stopColor="rgba(4,10,20,0.18)"/>
          <stop offset="42%"  stopColor="rgba(4,10,20,0.55)"/>
          <stop offset="100%" stopColor="rgba(4,10,20,0.52)"/>
        </linearGradient>
        <radialGradient id="centre-light" cx="50%" cy="40%" r="45%">
          <stop offset="0%"  stopColor="transparent"/>
          <stop offset="100%" stopColor="rgba(2,6,14,0.35)"/>
        </radialGradient>

        {/* Glow filter */}
        <filter id="glow-gold" x="-40%" y="-40%" width="180%" height="180%">
          <feGaussianBlur stdDeviation="8" result="blur"/>
          <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
        </filter>
        <filter id="glow-soft" x="-60%" y="-60%" width="220%" height="220%">
          <feGaussianBlur stdDeviation="18" result="b"/>
          <feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge>
        </filter>
        <filter id="snow-glow">
          <feGaussianBlur stdDeviation="3"/>
        </filter>

        <style>{`
          @keyframes auroraShift {
            0%,100% { opacity:0.5; transform:scaleX(1) translateX(0); }
            40%     { opacity:0.9; transform:scaleX(1.06) translateX(-1%); }
            70%     { opacity:0.6; transform:scaleX(0.97) translateX(2%); }
          }
          @keyframes auroraShift2 {
            0%,100% { opacity:0.3; transform:scaleX(1) translateX(0); }
            30%     { opacity:0.7; transform:scaleX(1.04) translateX(2%); }
            65%     { opacity:0.45; transform:scaleX(0.98) translateX(-1%); }
          }
          @keyframes shivaAura {
            0%,100% { opacity:0.6; }
            50%     { opacity:1; }
          }
          @keyframes starTwinkle {
            0%,100% { opacity:var(--s-a,0.5); }
            50%     { opacity:calc(var(--s-a,0.5)*0.3); }
          }
          @keyframes moonGlow {
            0%,100% { filter:drop-shadow(0 0 6px rgba(200,220,255,0.4)); }
            50%     { filter:drop-shadow(0 0 14px rgba(200,220,255,0.7)); }
          }
        `}</style>
      </defs>

      {/* Sky */}
      <rect width="1440" height="900" fill="url(#sky)"/>

      {/* Stars */}
      {[
        [120,45,0.7],[240,30,0.5],[380,60,0.8],[520,25,0.6],[680,50,0.9],
        [820,35,0.5],[950,55,0.7],[1100,28,0.8],[1250,48,0.6],[1380,32,0.7],
        [60,90,0.4],[170,75,0.6],[310,100,0.5],[450,80,0.7],[600,95,0.8],
        [740,70,0.5],[880,88,0.6],[1020,72,0.8],[1170,90,0.5],[1320,78,0.7],
        [30,130,0.5],[145,115,0.7],[290,140,0.4],[420,120,0.8],[570,135,0.5],
        [710,125,0.7],[855,140,0.6],[1005,118,0.8],[1150,132,0.5],[1300,122,0.7],
        [200,160,0.6],[350,175,0.4],[500,155,0.7],[650,170,0.5],[800,158,0.8],
        [940,172,0.6],[1080,162,0.7],[1220,178,0.5],[72,195,0.6],[1400,190,0.5],
        [160,22,0.8],[330,15,0.5],[490,40,0.7],[640,18,0.6],[790,28,0.9],
        [920,12,0.5],[1060,38,0.7],[1200,20,0.8],[1360,15,0.6],[440,200,0.5],
      ].map(([x,y,a],i) => (
        <circle key={i} cx={x} cy={y} r={i%7===0?1.5:i%3===0?1.1:0.7}
          fill={i%5===0?'#ffd580':'#c8d8f0'}
          opacity={a}
          style={{
            '--s-a':a, animation:`starTwinkle ${2.5+i%4}s ease-in-out ${i*0.18%3}s infinite`
          }}/>
      ))}

      {/* Crescent moon */}
      <g style={{ animation:'moonGlow 6s ease-in-out infinite' }}>
        <path d="M1280,65 Q1310,50 1330,70 Q1310,60 1295,80 Q1275,75 1280,65 Z"
          fill="#d8e8f8" opacity="0.75"/>
        <circle cx="1317" cy="68" r="2.5" fill="#e8f0ff" opacity="0.5"/>
      </g>

      {/* Aurora layer 1 */}
      <ellipse cx="720" cy="140" rx="780" ry="90"
        fill="url(#aurora1)"
        style={{ animation:'auroraShift 12s ease-in-out infinite', transformOrigin:'720px 140px' }}/>
      {/* Aurora layer 2 */}
      <ellipse cx="620" cy="195" rx="650" ry="60"
        fill="url(#aurora2)"
        style={{ animation:'auroraShift2 18s ease-in-out infinite', transformOrigin:'620px 195px' }}/>

      {/* ── MOUNTAIN RANGE 1 — farthest, ice-blue ── */}
      <path d="
        M0,900 L0,560
        L70,500 L140,545 L220,470 L300,510 L380,440 L460,480
        L540,400 L610,445 L680,370 L730,395 L780,355 L840,390
        L920,430 L1000,385 L1080,420 L1160,370 L1240,415 L1320,450 L1400,420
        L1440,440 L1440,900 Z"
        fill="url(#mtn-far)"/>

      {/* Snow caps — far range */}
      <path d="M540,400 L555,415 L525,415 Z M680,370 L695,390 L665,390 Z
               M780,355 L798,378 L762,378 Z M1080,420 L1096,440 L1064,440 Z
               M1160,370 L1178,394 L1142,394 Z"
        fill="rgba(210,225,245,0.35)"/>

      {/* ── MOUNTAIN RANGE 2 — mid distance ── */}
      <path d="
        M0,900 L0,640
        L90,590 L180,640 L280,565 L370,610 L460,545 L550,590
        L640,510 L700,545 L760,490 L820,530 L880,510 L950,555
        L1030,490 L1110,530 L1190,505 L1270,545 L1360,515 L1440,550
        L1440,900 Z"
        fill="url(#mtn-mid)"/>

      {/* Snow caps — mid range */}
      <path d="M640,510 L658,535 L622,535 Z M760,490 L780,515 L740,515 Z
               M880,510 L897,534 L863,534 Z M1030,490 L1048,516 L1012,516 Z"
        fill="rgba(195,215,240,0.4)"/>

      {/* ── KAILASH — LEFT sacred peak ── */}
      <path d="
        M0,900
        L30,800 L70,830 L110,772 L150,802 L185,742 L205,762
        L225,698 L242,716 L254,648 L260,608
        L266,648 L278,716 L296,698 L318,742 L356,802 L396,772
        L440,830 L490,800 L560,900 Z"
        fill="url(#kailash-g)"/>

      {/* Kailash snow cap */}
      <path d="M242,716 L254,662 L260,608 L266,662 L278,716
               L268,708 L260,696 L252,708 Z"
        fill="rgba(225,240,255,0.72)"/>
      <path d="M228,732 L242,716 L252,708 L260,696 L268,708 L278,716 L292,732
               L276,724 L260,714 L244,724 Z"
        fill="rgba(200,225,248,0.52)"/>
      {/* Extra snow detail */}
      <path d="M218,746 L228,732 L244,724 L260,714 L276,724 L292,732 L302,746
               L286,738 L260,728 L234,738 Z"
        fill="rgba(180,210,240,0.36)"/>

      {/* ── SHIVA on Kailash ── */}
      <g transform="translate(260,590)">

        {/* Outer divine aura — large, soft */}
        <ellipse cx="0" cy="-85" rx="130" ry="140"
          fill="url(#shiva-aura)"
          style={{ animation:'shivaAura 5s ease-in-out infinite' }}/>

        {/* Inner sacred glow */}
        <ellipse cx="0" cy="-90" rx="65" ry="75"
          fill="url(#shiva-inner)"
          style={{ animation:'shivaAura 3.5s ease-in-out 0.8s infinite' }}/>

        {/* Halo ring */}
        <circle cx="0" cy="-95" r="52" fill="none"
          stroke="rgba(232,180,60,0.18)" strokeWidth="12"
          style={{ animation:'shivaAura 4s ease-in-out infinite' }}/>
        <circle cx="0" cy="-95" r="52" fill="none"
          stroke="rgba(255,210,80,0.12)" strokeWidth="22"
          style={{ animation:'shivaAura 4s ease-in-out 1s infinite' }}/>

        {/* ── TRISHUL (Trident) — right side ── */}
        <g transform="translate(44,-155)">
          {/* Staff */}
          <line x1="0" y1="140" x2="0" y2="-5"
            stroke="rgba(200,160,70,0.85)" strokeWidth="2.8" strokeLinecap="round"/>
          {/* Centre prong */}
          <path d="M0,0 L0,-42" stroke="rgba(220,180,80,0.9)" strokeWidth="3" strokeLinecap="round"/>
          {/* Left prong */}
          <path d="M0,-8 Q-14,-20 -12,-42" fill="none" stroke="rgba(210,170,75,0.85)" strokeWidth="2.2" strokeLinecap="round"/>
          {/* Right prong */}
          <path d="M0,-8 Q14,-20 12,-42" fill="none" stroke="rgba(210,170,75,0.85)" strokeWidth="2.2" strokeLinecap="round"/>
          {/* Crossbar */}
          <line x1="-8" y1="-14" x2="8" y2="-14" stroke="rgba(210,170,75,0.7)" strokeWidth="1.8"/>
          {/* Damaru (small drum) on staff */}
          <ellipse cx="-5" cy="60" rx="7" ry="4.5" fill="rgba(180,140,60,0.7)"/>
          <ellipse cx="-5" cy="66" rx="7" ry="4.5" fill="rgba(180,140,60,0.7)"/>
          <line x1="-12" y1="63" x2="2" y2="63" stroke="rgba(180,140,60,0.5)" strokeWidth="0.8"/>
        </g>

        {/* ── JATA (matted locks flowing upward) ── */}
        <path d="M-12,-125 Q-22,-145 -16,-165 Q-8,-180 0,-168 Q8,-180 16,-165 Q22,-145 12,-125"
          fill="rgba(160,130,80,0.7)"/>
        <path d="M-8,-125 Q-18,-142 -24,-158 Q-20,-175 -12,-168"
          fill="none" stroke="rgba(160,130,75,0.55)" strokeWidth="2"/>
        <path d="M8,-125 Q18,-142 24,-158 Q20,-175 12,-168"
          fill="none" stroke="rgba(160,130,75,0.55)" strokeWidth="2"/>
        <path d="M-2,-130 Q-12,-150 -8,-172 Q-2,-182 4,-170"
          fill="none" stroke="rgba(170,140,80,0.45)" strokeWidth="1.5"/>
        {/* Ganga flowing from jata */}
        <path d="M-16,-148 Q-30,-140 -36,-125 Q-40,-108 -32,-95"
          fill="none" stroke="rgba(100,180,220,0.45)" strokeWidth="1.8" strokeLinecap="round"/>

        {/* ── CRESCENT MOON in jata ── */}
        <path d="M-6,-170 Q3,-183 10,-172 Q3,-176 -4,-166 Q-8,-170 -6,-170 Z"
          fill="rgba(210,225,245,0.8)"/>

        {/* ── HEAD ── */}
        <ellipse cx="0" cy="-108" rx="17" ry="18"
          fill="rgba(140,110,70,0.82)"/>

        {/* Third eye (tilak) */}
        <ellipse cx="0" cy="-112" rx="3.5" ry="2.2"
          fill="rgba(255,200,60,0.9)"
          style={{ filter:'drop-shadow(0 0 4px rgba(255,200,60,0.8))' }}/>
        {/* Third eye inner glow */}
        <ellipse cx="0" cy="-112" rx="1.5" ry="1"
          fill="rgba(255,240,120,1)"/>

        {/* Ash marks (vibhuti) — brow */}
        <line x1="-8" y1="-117" x2="-4" y2="-117" stroke="rgba(230,225,215,0.6)" strokeWidth="1.2"/>
        <line x1="4" y1="-117" x2="8" y2="-117" stroke="rgba(230,225,215,0.6)" strokeWidth="1.2"/>

        {/* ── NECK ── */}
        <rect x="-8" y="-90" width="16" height="12" rx="4"
          fill="rgba(135,108,68,0.8)"/>

        {/* Rudraksha mala */}
        <path d="M-14,-88 Q-18,-80 -16,-68 Q-8,-60 0,-62 Q8,-60 16,-68 Q18,-80 14,-88"
          fill="none" stroke="rgba(120,80,40,0.6)" strokeWidth="3.5" strokeLinecap="round"/>
        {/* Mala beads hint */}
        {[-12,-6,0,6,12].map((x,i)=>(
          <circle key={i} cx={x} cy={-74-Math.abs(x)*0.3} r="2"
            fill="rgba(100,65,30,0.7)"/>
        ))}

        {/* ── TORSO ── */}
        <path d="M-24,-76 Q-28,-55 -30,-35 Q-25,-18 0,-16 Q25,-18 30,-35 Q28,-55 24,-76
                 Q12,-78 0,-79 Q-12,-78 -24,-76 Z"
          fill="rgba(130,100,65,0.78)"/>

        {/* Ash stripes on torso */}
        <line x1="-18" y1="-60" x2="-8" y2="-60" stroke="rgba(220,215,205,0.35)" strokeWidth="1.5"/>
        <line x1="-18" y1="-52" x2="-8" y2="-52" stroke="rgba(220,215,205,0.35)" strokeWidth="1.5"/>
        <line x1="8" y1="-60" x2="18" y2="-60" stroke="rgba(220,215,205,0.35)" strokeWidth="1.5"/>
        <line x1="8" y1="-52" x2="18" y2="-52" stroke="rgba(220,215,205,0.35)" strokeWidth="1.5"/>

        {/* Tiger skin around waist */}
        <path d="M-28,-28 Q-24,-16 0,-14 Q24,-16 28,-28 Q24,-24 12,-20 Q0,-18 -12,-20 Q-24,-24 -28,-28 Z"
          fill="rgba(160,120,60,0.55)"/>
        {/* Tiger stripe hints */}
        <line x1="-18" y1="-22" x2="-12" y2="-18" stroke="rgba(80,50,20,0.4)" strokeWidth="1.2"/>
        <line x1="12" y1="-18" x2="18" y2="-22" stroke="rgba(80,50,20,0.4)" strokeWidth="1.2"/>

        {/* ── LEFT ARM (dhyana mudra) ── */}
        <path d="M-24,-62 Q-36,-50 -42,-30 Q-42,-18 -36,-14"
          fill="none" stroke="rgba(130,100,65,0.85)" strokeWidth="14" strokeLinecap="round"/>
        {/* Left hand */}
        <ellipse cx="-38" cy="-10" rx="8" ry="6" fill="rgba(130,100,65,0.8)"/>

        {/* ── RIGHT ARM ── */}
        <path d="M24,-62 Q36,-50 42,-30 Q42,-18 36,-14"
          fill="none" stroke="rgba(130,100,65,0.85)" strokeWidth="14" strokeLinecap="round"/>
        {/* Right hand */}
        <ellipse cx="38" cy="-10" rx="8" ry="6" fill="rgba(130,100,65,0.8)"/>

        {/* ── LEGS (padmasana / lotus pose) ── */}
        <path d="M-30,-16 Q-42,0 -38,16 Q-28,24 0,24 Q28,24 38,16 Q42,0 30,-16
                 Q16,-10 0,-8 Q-16,-10 -30,-16 Z"
          fill="rgba(120,92,58,0.75)"/>

        {/* Feet visible at sides */}
        <ellipse cx="-36" cy="16" rx="10" ry="5.5" transform="rotate(-15,-36,16)"
          fill="rgba(120,92,58,0.7)"/>
        <ellipse cx="36" cy="16" rx="10" ry="5.5" transform="rotate(15,36,16)"
          fill="rgba(120,92,58,0.7)"/>

        {/* ── SNAKE AROUND NECK ── */}
        <path d="M-14,-86 Q-20,-78 -16,-72 Q-8,-68 0,-70 Q8,-68 16,-72 Q20,-78 14,-86"
          fill="none" stroke="rgba(50,110,50,0.5)" strokeWidth="2.5" strokeLinecap="round"/>
        {/* Snake head */}
        <ellipse cx="16" cy="-74" rx="4" ry="3" transform="rotate(-20,16,-74)"
          fill="rgba(50,110,50,0.55)"/>
        {/* Snake tongue */}
        <path d="M19,-72 L22,-70 M19,-72 L22,-74" stroke="rgba(200,50,50,0.5)" strokeWidth="0.8"/>

        {/* Snow at base of figure */}
        <ellipse cx="0" cy="20" rx="45" ry="10" fill="rgba(180,210,240,0.3)"/>

        {/* Glow orb at heart center */}
        <circle cx="0" cy="-50" r="4" fill="rgba(255,210,100,0.25)"
          style={{ filter:'blur(4px)', animation:'shivaAura 2.5s ease-in-out infinite' }}/>
      </g>

      {/* ── NEAR MOUNTAIN RANGE — foreground, dark ── */}
      <path d="
        M0,900
        L0,840 L100,775 L180,840 L260,608 L340,840 L420,775
        L520,720 L640,758 L760,716 L880,748 L1000,714
        L1100,742 L1200,710 L1300,738 L1400,718 L1440,725 L1440,900 Z"
        fill="url(#mtn-near)"/>

      {/* Near snow details */}
      <path d="M760,716 L775,736 L745,736 Z M1000,714 L1016,736 L984,736 Z
               M1200,710 L1217,732 L1183,732 Z"
        fill="rgba(170,200,235,0.42)"/>

      {/* Ground mist */}
      <rect x="0" y="800" width="1440" height="100" fill="url(#mist)" opacity="0.6"/>

      {/* ── OVERLAY for text legibility ── */}
      <rect width="1440" height="900" fill="url(#overlay)"/>
      <rect width="1440" height="900" fill="url(#overlay-lr)"/>
      <rect width="1440" height="900" fill="url(#centre-light)"/>
    </svg>
  );
}

/* ─── Main hero ───────────────────────────────────────────── */
export default function HeroSection() {
  return (
    <section style={{
      position:'relative',
      minHeight:'100svh',
      background:'#010508',
      display:'flex', flexDirection:'column',
      alignItems:'center', justifyContent:'center',
      padding:'clamp(80px,10vw,100px) 16px clamp(80px,12vw,120px)',
      overflow:'hidden',
    }}>
      <Scene/>
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

      {/* Content — flex-end pushes text to right on desktop, centred on mobile */}
      <div className="hero-content" style={{ maxWidth:1240, width:'100%', position:'relative', zIndex:10, display:'flex', justifyContent:'flex-end' }}>
      <div className="hero-text-block" style={{ width:'min(640px,57%)', textAlign:'center' }}>

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

        <h1 className="display-title" style={{
          color:'#fff', fontSize:'clamp(2rem,6vw,4.2rem)',
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

        <p style={{
          color:'rgba(255,255,255,0.72)', fontSize:15.5, lineHeight:1.75,
          marginBottom:30, maxWidth:540, margin:'0 auto 30px',
        }}>
          From{' '}
          <span style={{ color:'#FFD166', fontWeight:700, fontSize:17, textShadow:'0 0 20px rgba(232,146,10,0.5)' }}>
            ₹19,500/person
          </span>
          {' '}all-inclusive · Zero commission · 50,000+ pilgrims served
        </p>

        <HeroSearch/>

        <div style={{ display:'flex', justifyContent:'center', gap:12, flexWrap:'wrap', marginTop:22 }}>
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
            target="_blank" rel="noopener noreferrer"
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
          marginTop:20, fontSize:12, color:'rgba(255,255,255,0.5)',
        }}>
          {['✓ No hidden charges','✓ VIP darshan included','✓ Free cancellation 30 days','✓ 25% advance confirms seat'].map(t => (
            <span key={t} style={{ whiteSpace:'nowrap' }}>{t}</span>
          ))}
        </div>

        <div className="hero-offer-pills" style={{
          display:'flex', justifyContent:'center', gap:10, flexWrap:'wrap', marginTop:14,
        }}>
          {[{icon:'👴',text:'Senior Special — Pony included'},{icon:'🚁',text:'Helicopter — all 4 dhams in 6 days'},{icon:'💳',text:'EMI available — 25% advance books seat'}].map(o=>(
            <div key={o.text} style={{
              display:'inline-flex', alignItems:'center', gap:7,
              background:'rgba(255,255,255,0.05)', backdropFilter:'blur(10px)',
              border:'1px solid rgba(255,255,255,0.1)',
              borderRadius:100, padding:'7px 16px',
              fontSize:12, color:'rgba(255,255,255,0.75)', fontWeight:500,
            }}>
              <span style={{ fontSize:14 }}>{o.icon}</span>
              <span>{o.text}</span>
            </div>
          ))}
        </div>

        {/* Scroll cue */}
        <div style={{
          marginTop:40, display:'flex', flexDirection:'column',
          alignItems:'center', gap:5, opacity:0.4,
        }}>
          <span style={{ fontSize:10, color:'rgba(255,255,255,0.7)', letterSpacing:'0.14em' }}>SCROLL TO EXPLORE</span>
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none"
            style={{ animation:'sgBounce 2s ease-in-out infinite' }}>
            <path d="M5 8l5 5 5-5" stroke="rgba(255,255,255,0.6)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </div>{/* end hero-text-block */}
      </div>{/* end hero-content */}

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
        @media(max-width:860px){
          .hero-content{justify-content:center!important}
          .hero-text-block{width:92%!important;max-width:600px!important}
        }
        @media(max-width:640px){
          .hero-offer-pills>div{font-size:11px!important}
          .hero-badge-right{display:none!important}
          .hero-text-block{width:100%!important}
        }
      `}}/>
    </section>
  );
}
