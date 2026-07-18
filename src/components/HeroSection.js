'use client';
import Link from 'next/link';
import HeroSearch from '@/components/HeroSearch';
import { SITE } from '@/data/packages';

/* --- Stylized animated day scene ------------------------------
   Vibrant flat-design Himalaya: clear blue sky, drifting clouds,
   planes with contrails, winding mountain road and a little red
   car driving it (SMIL animateMotion - zero JS, GPU-cheap).     */
function HeroScene() {
  return (
    <div aria-hidden="true" style={{ position:'absolute', inset:0, zIndex:2, overflow:'hidden' }}>
      <svg viewBox="0 0 1440 900" preserveAspectRatio="xMidYMid slice"
        style={{ position:'absolute', inset:0, width:'100%', height:'100%' }}>
        <defs>
          <linearGradient id="sg-sky" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#1E9BE9"/>
            <stop offset="55%" stopColor="#4FC3F7"/>
            <stop offset="100%" stopColor="#A6E4FF"/>
          </linearGradient>
          <linearGradient id="sg-back" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#B6C9F0"/><stop offset="100%" stopColor="#8FA9DC"/>
          </linearGradient>
          <linearGradient id="sg-mid" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#2FB39B"/><stop offset="100%" stopColor="#1E8A78"/>
          </linearGradient>
          <linearGradient id="sg-front" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#5BC85F"/><stop offset="100%" stopColor="#2E9E4F"/>
          </linearGradient>
          <radialGradient id="sg-sunglow" cx="0.5" cy="0.5" r="0.5">
            <stop offset="0%" stopColor="rgba(255,236,150,0.95)"/>
            <stop offset="55%" stopColor="rgba(255,220,110,0.35)"/>
            <stop offset="100%" stopColor="rgba(255,220,110,0)"/>
          </radialGradient>
          <clipPath id="sg-snowclip"><rect x="-20" y="330" width="300" height="310"/></clipPath>
        </defs>

        {/* Sky + sun */}
        <rect width="1440" height="900" fill="url(#sg-sky)"/>
        <circle cx="1160" cy="150" r="130" fill="url(#sg-sunglow)">
          <animate attributeName="opacity" values="0.85;1;0.85" dur="5s" repeatCount="indefinite"/>
        </circle>
        <circle cx="1160" cy="150" r="52" fill="#FFE066"/>

        {/* Drifting clouds */}
        <g fill="#fff" opacity="0.95">
          <animateTransform attributeName="transform" type="translate" from="-260 128" to="1720 128" dur="75s" begin="-14s" repeatCount="indefinite"/>
          <ellipse cx="0" cy="0" rx="58" ry="20"/><ellipse cx="38" cy="-12" rx="40" ry="18"/><ellipse cx="-40" cy="-8" rx="34" ry="15"/>
        </g>
        <g fill="#fff" opacity="0.8">
          <animateTransform attributeName="transform" type="translate" from="-260 212" to="1720 212" dur="95s" begin="-52s" repeatCount="indefinite"/>
          <ellipse cx="0" cy="0" rx="46" ry="16"/><ellipse cx="30" cy="-10" rx="32" ry="14"/><ellipse cx="-32" cy="-6" rx="26" ry="12"/>
        </g>
        <g fill="#fff" opacity="0.65">
          <animateTransform attributeName="transform" type="translate" from="-260 92" to="1720 92" dur="115s" begin="-84s" repeatCount="indefinite"/>
          <ellipse cx="0" cy="0" rx="70" ry="22"/><ellipse cx="48" cy="-14" rx="44" ry="19"/><ellipse cx="-50" cy="-9" rx="38" ry="16"/>
        </g>

        {/* Planes with contrails */}
        <g>
          <animateTransform attributeName="transform" type="translate" from="-180 150" to="1620 96" dur="30s" repeatCount="indefinite"/>
          <rect x="-92" y="4" width="78" height="2.6" rx="1.3" fill="rgba(255,255,255,0.55)"/>
          <path d="M0,0 Q10,-2 22,0 L38,4 Q40,6 38,8 L22,10 Q10,12 0,10 Q-4,5 0,0 Z" fill="#fff"/>
          <path d="M14,4 L4,-10 L10,-10 L22,3 Z" fill="#E9F6FF"/>
          <path d="M14,7 L4,20 L10,20 L22,8 Z" fill="#D4EDFC"/>
          <circle cx="34" cy="6" r="2.4" fill="#E23B2E"/>
        </g>
        <g>
          <animateTransform attributeName="transform" type="translate" from="1620 238" to="-220 196" dur="42s" begin="-18s" repeatCount="indefinite"/>
          <g transform="scale(-1,1)">
            <rect x="-80" y="4" width="66" height="2.2" rx="1.1" fill="rgba(255,255,255,0.45)"/>
            <path d="M0,0 Q8,-1.6 18,0 L31,3.4 Q33,5 31,6.6 L18,8.4 Q8,10 0,8.4 Q-3,4.2 0,0 Z" fill="#fff"/>
            <path d="M11,3.4 L3,-8 L8,-8 L18,2.6 Z" fill="#E9F6FF"/>
            <path d="M11,5.8 L3,16 L8,16 L18,6.6 Z" fill="#D4EDFC"/>
          </g>
        </g>

        {/* Birds */}
        <g stroke="#1B5E8C" strokeWidth="2.4" strokeLinecap="round" fill="none" opacity="0.7">
          <animateTransform attributeName="transform" type="translate" values="0 0;0 -9;0 0" dur="2.6s" repeatCount="indefinite"/>
          <path d="M300,250 q7,-8 14,0 q7,-8 14,0"/>
          <path d="M350,230 q6,-7 12,0 q6,-7 12,0"/>
        </g>

        {/* Back range - snow-capped */}
        <path d="M-20,640 L150,400 L260,530 L420,330 L560,560 L700,380 L830,570 L980,410 L1130,590 L1290,450 L1460,620 L1460,900 L-20,900 Z" fill="url(#sg-back)"/>
        <path d="M150,400 L196,468 L172,462 L150,486 L128,458 L108,462 Z M420,330 L470,404 L444,396 L420,424 L398,392 L376,398 Z M700,380 L748,450 L722,442 L700,468 L678,438 L658,444 Z M980,410 L1024,472 L1002,466 L980,490 L960,462 L942,468 Z M1290,450 L1330,506 L1310,500 L1290,522 L1272,498 L1256,504 Z" fill="#FFFFFF"/>

        {/* Toon Shiva - meditating on the far-left peak, trishul in hand */}
        <g transform="translate(150,398)">
          <animateTransform attributeName="transform" type="translate" additive="sum" values="0 0;0 -2.5;0 0" dur="4.5s" repeatCount="indefinite"/>
          <circle cx="0" cy="-28" r="15" fill="rgba(255,224,102,0.4)">
            <animate attributeName="opacity" values="0.7;1;0.7" dur="4.5s" repeatCount="indefinite"/>
          </circle>
          <rect x="13.2" y="-54" width="2" height="54" rx="1" fill="#C67A08"/>
          <path d="M14.2,-54 L14.2,-66 M8.5,-54 Q8.5,-62 14.2,-64 M19.9,-54 Q19.9,-62 14.2,-64" stroke="#C67A08" strokeWidth="2" fill="none" strokeLinecap="round"/>
          <circle cx="14.2" cy="-50" r="1.6" fill="#FFD166"/>
          <path d="M-15,3 Q0,-6 15,3 Q0,9 -15,3 Z" fill="#E8920A"/>
          <path d="M-9,2 Q-10,-16 0,-18 Q10,-16 9,2 Z" fill="#7FB8E6"/>
          <path d="M-7,-13 Q-15,-15 -16.5,-21" stroke="#7FB8E6" strokeWidth="3.4" fill="none" strokeLinecap="round"/>
          <circle cx="-17" cy="-22.5" r="2.4" fill="#8CC4EE"/>
          <path d="M7,-13 Q12,-14 13.6,-19" stroke="#7FB8E6" strokeWidth="3.4" fill="none" strokeLinecap="round"/>
          <circle cx="14.2" cy="-20.5" r="2.4" fill="#8CC4EE"/>
          <path d="M-6,-16.5 q6,5 12,0" stroke="#8A5A2B" strokeWidth="1.4" strokeDasharray="1.6 1.6" fill="none"/>
          <circle cx="0" cy="-27" r="8.5" fill="#8CC4EE"/>
          <path d="M-6.5,-32 Q0,-41 6.5,-32 Q3,-37 0,-37.5 Q-3,-37 -6.5,-32 Z" fill="#2E2A3B"/>
          <circle cx="0" cy="-38.5" r="3" fill="#2E2A3B"/>
          <path d="M5,-43 a3.2,3.2 0 1,0 3.4,3.4 a2.5,2.5 0 1,1 -3.4,-3.4" fill="#FFE066"/>
          <rect x="-0.6" y="-33.5" width="1.2" height="3" rx="0.6" fill="#2E2A3B"/>
          <path d="M-4.6,-27.5 q1.6,1.7 3.2,0 M1.4,-27.5 q1.6,1.7 3.2,0" stroke="#2E2A3B" strokeWidth="0.9" fill="none" strokeLinecap="round"/>
          <path d="M-3.2,-23.2 q3.2,3.2 6.4,0" stroke="#2E2A3B" strokeWidth="1.1" fill="none" strokeLinecap="round"/>
        </g>

        {/* Fresh falling snow - extreme left peak only */}
        <g clipPath="url(#sg-snowclip)" fill="#FFFFFF">
          <circle cx="30"  cy="340" r="2.4" opacity="0.9"><animateTransform attributeName="transform" type="translate" from="0 0" to="10 300" dur="5.2s" begin="-1s"   repeatCount="indefinite"/></circle>
          <circle cx="60"  cy="340" r="1.8" opacity="0.75"><animateTransform attributeName="transform" type="translate" from="0 0" to="-8 300" dur="6.8s" begin="-3.4s" repeatCount="indefinite"/></circle>
          <circle cx="95"  cy="340" r="2.8" opacity="0.95"><animateTransform attributeName="transform" type="translate" from="0 0" to="12 300" dur="4.6s" begin="-2.2s" repeatCount="indefinite"/></circle>
          <circle cx="125" cy="340" r="2"   opacity="0.8"><animateTransform attributeName="transform" type="translate" from="0 0" to="-6 300" dur="7.4s" begin="-5s"   repeatCount="indefinite"/></circle>
          <circle cx="155" cy="340" r="2.5" opacity="0.9"><animateTransform attributeName="transform" type="translate" from="0 0" to="9 300"  dur="5.8s" begin="-0.6s" repeatCount="indefinite"/></circle>
          <circle cx="185" cy="340" r="1.7" opacity="0.7"><animateTransform attributeName="transform" type="translate" from="0 0" to="-10 300" dur="6.2s" begin="-4.1s" repeatCount="indefinite"/></circle>
          <circle cx="215" cy="340" r="2.6" opacity="0.9"><animateTransform attributeName="transform" type="translate" from="0 0" to="7 300"  dur="5s"   begin="-2.8s" repeatCount="indefinite"/></circle>
          <circle cx="245" cy="340" r="2"   opacity="0.8"><animateTransform attributeName="transform" type="translate" from="0 0" to="-7 300" dur="6.6s" begin="-1.7s" repeatCount="indefinite"/></circle>
          <circle cx="75"  cy="340" r="1.5" opacity="0.65"><animateTransform attributeName="transform" type="translate" from="0 0" to="5 300"  dur="7.8s" begin="-6.3s" repeatCount="indefinite"/></circle>
          <circle cx="170" cy="340" r="1.5" opacity="0.6"><animateTransform attributeName="transform" type="translate" from="0 0" to="-5 300" dur="8.2s" begin="-3.9s" repeatCount="indefinite"/></circle>
        </g>

        {/* Mid range + tiny temple */}
        <path d="M-20,720 L180,540 L340,660 L520,500 L720,680 L900,530 L1080,690 L1250,560 L1460,700 L1460,900 L-20,900 Z" fill="url(#sg-mid)"/>
        <g transform="translate(893,505)">
          <rect x="-14" y="12" width="28" height="16" rx="2" fill="#F4E3C1"/>
          <path d="M-16,12 L16,12 L0,-10 Z" fill="#E8920A"/>
          <rect x="-2.4" y="-16" width="4.8" height="8" fill="#C67A08"/>
          <circle cx="0" cy="-18" r="3" fill="#FFD166"/>
          <rect x="-3.5" y="18" width="7" height="10" rx="1" fill="#8A5A2B"/>
        </g>

        {/* Front hill */}
        <path d="M-20,900 L-20,760 C220,690 420,730 640,690 C880,646 1120,668 1460,600 L1460,900 Z" fill="url(#sg-front)"/>

        {/* Winding road (car follows the same path) */}
        <path id="sg-roadPath" d="M-60,846 C240,850 420,776 600,752 C790,727 880,682 1060,664 C1240,646 1360,622 1520,610" fill="none" stroke="none"/>
        <path d="M-60,846 C240,850 420,776 600,752 C790,727 880,682 1060,664 C1240,646 1360,622 1520,610" fill="none" stroke="#46536B" strokeWidth="30" strokeLinecap="round"/>
        <path d="M-60,846 C240,850 420,776 600,752 C790,727 880,682 1060,664 C1240,646 1360,622 1520,610" fill="none" stroke="#FFE066" strokeWidth="3" strokeDasharray="22 18"/>

        {/* Pines */}
        <g fill="#1E7A3C">
          <path d="M150,742 L166,706 L182,742 Z M150,724 L166,692 L182,724 Z"/><rect x="163" y="742" width="6" height="10" fill="#6B4423"/>
          <path d="M420,704 L434,672 L448,704 Z M420,688 L434,660 L448,688 Z"/><rect x="431" y="704" width="5" height="9" fill="#6B4423"/>
          <path d="M950,640 L963,610 L976,640 Z M950,625 L963,599 L976,625 Z"/><rect x="960" y="640" width="5" height="8" fill="#6B4423"/>
          <path d="M1240,606 L1252,578 L1264,606 Z M1240,592 L1252,568 L1264,592 Z"/><rect x="1249" y="606" width="5" height="8" fill="#6B4423"/>
        </g>

        {/* Little red car - drives the road forever */}
        <g>
          <animateMotion dur="17s" repeatCount="indefinite" rotate="auto">
            <mpath href="#sg-roadPath"/>
          </animateMotion>
          <g transform="translate(-24,-15)">
            <ellipse cx="24" cy="21" rx="22" ry="3.6" fill="rgba(10,30,20,0.25)"/>
            <rect x="0" y="6" width="48" height="12" rx="5.5" fill="#E23B2E"/>
            <path d="M9,7 Q13,-1 21,-1 L31,-1 Q37,-1 40,7 Z" fill="#C22B20"/>
            <rect x="15" y="1.5" width="14" height="6" rx="2" fill="#BFE9FF"/>
            <circle cx="19" cy="4.6" r="2.2" fill="#FFD9A0"/><circle cx="25" cy="4.6" r="2.2" fill="#FFD9A0"/>
            <path d="M17.8,5.3 q1.2,1.2 2.4,0 M23.8,5.3 q1.2,1.2 2.4,0" stroke="#7A4A1F" strokeWidth="0.7" fill="none" strokeLinecap="round"/>
            <rect x="16" y="-5.2" width="12" height="4.4" rx="1.2" fill="#8A5A2B"/>
            <rect x="19.5" y="-5.2" width="1.4" height="4.4" fill="#5C3A1A"/><rect x="24" y="-5.2" width="1.4" height="4.4" fill="#5C3A1A"/>
            <rect x="29" y="-4" width="6" height="3.2" rx="1" fill="#0B7B8B"/>
            <rect x="44" y="9" width="4" height="4" rx="1.4" fill="#FFE066"/>
            <circle cx="12" cy="18.5" r="5" fill="#22252B"/><circle cx="36" cy="18.5" r="5" fill="#22252B"/>
            <circle cx="12" cy="18.5" r="2.2" fill="#9AA3AE"/><circle cx="36" cy="18.5" r="2.2" fill="#9AA3AE"/>
          </g>
        </g>

        {/* Tempo traveller - full of happy pilgrims + roof luggage */}
        <g>
          <animateMotion dur="17s" begin="-6s" repeatCount="indefinite" rotate="auto">
            <mpath href="#sg-roadPath"/>
          </animateMotion>
          <g transform="translate(-29,-18)">
            <ellipse cx="29" cy="24" rx="27" ry="3.8" fill="rgba(10,30,20,0.25)"/>
            <rect x="0" y="4" width="58" height="15" rx="4" fill="#F4F6F8"/>
            <rect x="0" y="12" width="58" height="3.4" fill="#0B7B8B"/>
            <rect x="47" y="6" width="8" height="5.5" rx="1" fill="#BFE9FF"/>
            <rect x="5" y="6" width="38" height="5.5" rx="1" fill="#BFE9FF"/>
            <circle cx="12" cy="9" r="2.3" fill="#FFD9A0"/><circle cx="22" cy="9" r="2.3" fill="#FFD9A0"/><circle cx="32" cy="9" r="2.3" fill="#FFD9A0"/>
            <path d="M10.8,9.8 q1.2,1.2 2.4,0 M20.8,9.8 q1.2,1.2 2.4,0 M30.8,9.8 q1.2,1.2 2.4,0" stroke="#7A4A1F" strokeWidth="0.7" fill="none" strokeLinecap="round"/>
            <rect x="8" y="-2.6" width="11" height="5" rx="1.2" fill="#E8920A"/>
            <rect x="21" y="-2.2" width="9" height="4.6" rx="1.2" fill="#C0392B"/>
            <rect x="32" y="-1.8" width="10" height="4.2" rx="2" fill="#2E9E4F"/>
            <rect x="6" y="2" width="38" height="1.4" rx="0.7" fill="#8A93A0"/>
            <rect x="55" y="8.5" width="3" height="3.4" rx="1" fill="#FFE066"/>
            <circle cx="13" cy="19.5" r="5" fill="#22252B"/><circle cx="45" cy="19.5" r="5" fill="#22252B"/>
            <circle cx="13" cy="19.5" r="2.2" fill="#9AA3AE"/><circle cx="45" cy="19.5" r="2.2" fill="#9AA3AE"/>
          </g>
        </g>

        {/* Little blue hatchback - couple with a roof bag */}
        <g>
          <animateMotion dur="17s" begin="-11.5s" repeatCount="indefinite" rotate="auto">
            <mpath href="#sg-roadPath"/>
          </animateMotion>
          <g transform="translate(-20,-13)">
            <ellipse cx="20" cy="18" rx="18" ry="3" fill="rgba(10,30,20,0.25)"/>
            <rect x="0" y="5" width="40" height="10" rx="4.5" fill="#1260CC"/>
            <path d="M7,6 Q10,0 16,0 L26,0 Q31,0 34,6 Z" fill="#0E4DA4"/>
            <rect x="12" y="1.5" width="12" height="5" rx="1.5" fill="#BFE9FF"/>
            <circle cx="15.6" cy="4.2" r="1.9" fill="#FFD9A0"/><circle cx="20.4" cy="4.2" r="1.9" fill="#FFD9A0"/>
            <path d="M14.6,4.8 q1,1 2,0 M19.4,4.8 q1,1 2,0" stroke="#7A4A1F" strokeWidth="0.6" fill="none" strokeLinecap="round"/>
            <rect x="14" y="-3.6" width="9" height="4" rx="1.2" fill="#E23B2E"/>
            <rect x="16.6" y="-3.6" width="1.2" height="4" fill="#A81F14"/>
            <rect x="36.5" y="7.5" width="3.5" height="3.4" rx="1.2" fill="#FFE066"/>
            <circle cx="10" cy="15" r="4.3" fill="#22252B"/><circle cx="30" cy="15" r="4.3" fill="#22252B"/>
            <circle cx="10" cy="15" r="1.9" fill="#9AA3AE"/><circle cx="30" cy="15" r="1.9" fill="#9AA3AE"/>
          </g>
        </g>
      </svg>

      {/* Legibility scrims - keep the scene vibrant, keep white text readable */}
      <div style={{ position:'absolute', inset:0,
        background:'radial-gradient(ellipse 64% 52% at 50% 44%, rgba(6,20,42,0.62) 0%, rgba(6,20,42,0.34) 52%, rgba(6,20,42,0) 76%)' }}/>
      <div style={{ position:'absolute', inset:0,
        background:'linear-gradient(180deg, rgba(6,18,38,0.30) 0%, rgba(6,18,38,0) 30%, rgba(4,12,26,0) 68%, rgba(4,12,26,0.45) 100%)' }}/>
    </div>
  );
}


/* ─── Main hero ───────────────────────────────────────────── */
export default function HeroSection() {
  return (
    <section style={{
      position:'relative',
      minHeight:'clamp(600px,78vh,760px)',
      background:'#2FB9EF',
      display:'flex', flexDirection:'column',
      alignItems:'center', justifyContent:'center',
      padding:'clamp(64px,7vw,88px) 16px clamp(56px,7vw,80px)',
      overflow:'hidden',
    }}>
      <HeroScene/>

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
            ₹18,500/person
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

        /* -- Animated day scene -- */
        @keyframes sgRise { from{opacity:0; transform:translateY(18px)} to{opacity:1; transform:translateY(0)} }
        .hero-content    { animation: sgRise 0.8s cubic-bezier(0.22,1,0.36,1) both; }
        .hero-badge-left, .hero-badge-right { animation: sgRise 0.9s 0.25s cubic-bezier(0.22,1,0.36,1) both; }

        @media(max-width:640px){
          .hero-badge-right{display:none!important}
        }

      `}}/>
    </section>
  );
}
