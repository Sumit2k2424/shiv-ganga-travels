'use client';
import { useState } from 'react';
import { SITE } from '@/data/packages';
import { ROUTE_STOPS } from '@/data/routeStops';

const TYPE_STYLE = {
  dham: { ring:'#E8920A', label:'Dham', glow:'rgba(232,146,10,0.5)' },
  stop: { ring:'#0B7B8B', label:'Halt', glow:'rgba(11,123,139,0.45)' },
  base: { ring:'#0F2B5B', label:'Base', glow:'rgba(15,43,91,0.45)' },
};

export default function RouteMapInteractive() {
  const [active, setActive] = useState(2); // open Yamunotri by default
  const stop = ROUTE_STOPS.find(s => s.id === active) || ROUTE_STOPS[0];
  const ts = TYPE_STYLE[stop.type];

  // Build a smooth path through the marker coordinates for the "river" route line.
  const pts = ROUTE_STOPS.filter((s, i) => !(i === ROUTE_STOPS.length - 1)); // dedupe return Haridwar
  const d = pts.map((s, i) => `${i === 0 ? 'M' : 'L'} ${s.x} ${s.y}`).join(' ');

  return (
    <div className="rm-fullscreen">
      <style>{`
        .rm-fullscreen {
          position: relative;
          width: 100vw;
          margin-left: calc(50% - 50vw);
          min-height: 100vh;
          min-height: 100svh;
          display: flex;
          flex-direction: column;
          background: linear-gradient(160deg,#0a1730 0%,#0F2B5B 55%,#0B5560 100%);
          overflow: hidden;
        }
        .rm-stage {
          position: relative;
          flex: 1;
          display: grid;
          grid-template-columns: 1.25fr 0.95fr;
          gap: 0;
          min-height: 0;
        }
        .rm-map-pane {
          position: relative;
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding: 24px clamp(16px, 4vw, 56px);
          min-height: 0;
        }
        .rm-detail-pane {
          position: relative;
          display: flex;
          align-items: center;
          padding: 24px clamp(16px, 3vw, 40px) 24px 0;
          min-height: 0;
        }
        @keyframes drawRoute { to { stroke-dashoffset: 0; } }
        @keyframes pinPulse { 0%,100% { transform: scale(1); } 50% { transform: scale(1.18); } }
        @keyframes panelIn { from { opacity:0; transform: translateY(10px); } to { opacity:1; transform: translateY(0); } }
        @keyframes floatY { 0%,100% { transform: translateY(0); } 50% { transform: translateY(-3px); } }
        @keyframes scrollHint { 0%,100% { transform: translateY(0); opacity:.7; } 50% { transform: translateY(5px); opacity:1; } }
        .rm-route { stroke-dasharray: 600; stroke-dashoffset: 600; animation: drawRoute 3.2s ease-out forwards; }
        .rm-pin { cursor:pointer; transition: transform .2s ease; transform-origin:center; transform-box: fill-box; }
        .rm-pin:hover { transform: scale(1.22); }
        .rm-pin.dham { animation: pinPulse 2.6s ease-in-out infinite; }
        .rm-panel { animation: panelIn .35s ease both; }
        @media (prefers-reduced-motion: reduce) {
          .rm-route { animation:none; stroke-dashoffset:0; }
          .rm-pin.dham { animation:none; }
          .rm-panel, .rm-scrollhint { animation:none; }
        }
        @media (max-width: 820px) {
          .rm-stage { grid-template-columns: 1fr; grid-template-rows: auto 1fr; }
          .rm-map-pane { padding: 16px 16px 8px; }
          .rm-detail-pane { padding: 0 12px 16px; align-items: stretch; }
        }
      `}</style>

      {/* top title bar inside the immersive section */}
      <div style={{ position:'relative', padding:'18px clamp(16px,4vw,56px) 0', textAlign:'center' }}>
        <div style={{ fontFamily:'var(--font-display)', fontSize:'clamp(1.3rem,3.4vw,2rem)', fontWeight:700, color:'#fff', lineHeight:1.15 }}>Char Dham Yatra — Interactive Route Map</div>
        <div style={{ fontSize:12.5, color:'rgba(255,255,255,0.7)', marginTop:5 }}>Haridwar → Yamunotri → Gangotri → Kedarnath → Badrinath · tap to explore each stop</div>
      </div>

      {/* ── Full-screen immersive map + detail ── */}
      <div className="rm-stage">

        {/* MAP PANE */}
        <div className="rm-map-pane">
          <div style={{ position:'absolute', inset:0, opacity:0.6, background:'radial-gradient(circle at 70% 12%, rgba(232,146,10,0.22), transparent 50%)', pointerEvents:'none' }} aria-hidden="true" />
          <div style={{ fontSize:11.5, fontWeight:700, color:'rgba(255,255,255,0.65)', letterSpacing:'0.12em', textTransform:'uppercase', marginBottom:8, position:'relative' }}>🗺️ Tap a stop to explore the route</div>
          <svg viewBox="0 0 100 100" preserveAspectRatio="xMidYMid meet" style={{ width:'100%', height:'100%', maxHeight:'62vh', display:'block', position:'relative' }} role="img" aria-label="Char Dham Yatra interactive route map">
            {/* snow peaks backdrop */}
            <path d="M0,30 L12,12 L22,26 L34,8 L46,24 L58,10 L72,26 L86,12 L100,28 L100,100 L0,100 Z" fill="rgba(255,255,255,0.04)" />
            <path d="M0,46 L16,30 L30,44 L44,28 L60,44 L76,30 L92,46 L100,40 L100,100 L0,100 Z" fill="rgba(255,255,255,0.03)" />
            {/* route line */}
            <path d={d} fill="none" stroke="url(#routeGrad)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="rm-route" />
            <defs>
              <linearGradient id="routeGrad" x1="0" y1="1" x2="1" y2="0">
                <stop offset="0%" stopColor="#0B7B8B" />
                <stop offset="55%" stopColor="#E8920A" />
                <stop offset="100%" stopColor="#FFD166" />
              </linearGradient>
            </defs>
            {/* pins */}
            {pts.map(s => {
              const st = TYPE_STYLE[s.type];
              const isActive = s.id === active;
              const r = s.type === 'dham' ? 3.4 : 2.4;
              return (
                <g key={s.id} onClick={() => setActive(s.id)} className={`rm-pin ${s.type}`} role="button" tabIndex={0}
                   onKeyDown={(e)=>{ if(e.key==='Enter'||e.key===' ') setActive(s.id); }}
                   aria-label={`${s.name}, ${st.label}`}>
                  {isActive && <circle cx={s.x} cy={s.y} r={r+3} fill="none" stroke="#fff" strokeWidth="0.7" opacity="0.9" />}
                  <circle cx={s.x} cy={s.y} r={r+1.6} fill={st.glow} />
                  <circle cx={s.x} cy={s.y} r={r} fill={st.ring} stroke="#fff" strokeWidth="0.6" />
                  <text x={s.x} y={s.y - r - 1.5} textAnchor="middle" fontSize="2.6" fontWeight="700" fill="#fff" style={{ pointerEvents:'none' }}>{s.name}</text>
                </g>
              );
            })}
          </svg>
          {/* legend */}
          <div style={{ display:'flex', gap:14, flexWrap:'wrap', marginTop:10, position:'relative' }}>
            {Object.entries(TYPE_STYLE).map(([k,v]) => (
              <span key={k} style={{ display:'flex', alignItems:'center', gap:5, fontSize:11.5, color:'rgba(255,255,255,0.78)' }}>
                <span style={{ width:9, height:9, borderRadius:'50%', background:v.ring, display:'inline-block' }} />{v.label}
              </span>
            ))}
          </div>
        </div>

        {/* DETAIL PANE */}
        <div className="rm-detail-pane">
          <div key={stop.id} className="rm-panel" style={{ width:'100%', maxHeight:'82vh', background:'#fff', borderRadius:18, border:`2px solid ${ts.ring}`, overflow:'hidden', display:'flex', flexDirection:'column', boxShadow:'0 20px 60px rgba(0,0,0,0.35)' }}>
            <div style={{ background:`linear-gradient(135deg, ${stop.color} 0%, ${ts.ring} 140%)`, padding:'18px 20px', color:'#fff' }}>
              <div style={{ display:'flex', alignItems:'center', gap:10 }}>
                <span style={{ fontSize:30, animation:'floatY 3s ease-in-out infinite' }}>{stop.icon}</span>
                <div>
                  <div style={{ display:'flex', alignItems:'center', gap:8, flexWrap:'wrap' }}>
                    <h2 style={{ margin:0, fontFamily:'var(--font-display)', fontSize:'1.5rem', fontWeight:700 }}>{stop.name}</h2>
                    <span style={{ background:'rgba(255,255,255,0.2)', fontSize:10.5, fontWeight:700, padding:'3px 9px', borderRadius:100, textTransform:'uppercase', letterSpacing:'0.06em' }}>{ts.label}</span>
                  </div>
                  <div style={{ fontSize:12.5, color:'rgba(255,255,255,0.85)', marginTop:2 }}>{stop.tagline}</div>
                </div>
              </div>
              <div style={{ display:'flex', gap:14, marginTop:12, flexWrap:'wrap', fontSize:12 }}>
                <span style={{ background:'rgba(255,255,255,0.15)', padding:'4px 10px', borderRadius:8 }}>⛰️ {stop.alt}</span>
                <span style={{ background:'rgba(255,255,255,0.15)', padding:'4px 10px', borderRadius:8 }}>📏 {stop.dist}</span>
                <span style={{ background:'rgba(255,255,255,0.15)', padding:'4px 10px', borderRadius:8 }}>📅 {stop.day}</span>
              </div>
            </div>

            <div style={{ padding:'16px 20px', overflowY:'auto' }}>
              <p style={{ fontSize:14, color:'var(--text-mid)', lineHeight:1.7, marginTop:0, marginBottom:14 }}>{stop.desc}</p>

              <div style={{ fontSize:11, fontWeight:800, color:ts.ring, textTransform:'uppercase', letterSpacing:'0.08em', marginBottom:8 }}>✨ Things to do</div>
              <div style={{ display:'flex', flexDirection:'column', gap:8, marginBottom:16 }}>
                {stop.todo.map(([emoji, title, text]) => (
                  <div key={title} style={{ display:'flex', gap:10, background:'var(--bg)', borderRadius:10, padding:'10px 12px' }}>
                    <span style={{ fontSize:18, flexShrink:0 }}>{emoji}</span>
                    <div>
                      <div style={{ fontWeight:700, fontSize:13.5, color:'var(--navy)' }}>{title}</div>
                      <div style={{ fontSize:12.5, color:'var(--text-mid)', lineHeight:1.55, marginTop:1 }}>{text}</div>
                    </div>
                  </div>
                ))}
              </div>

              <div style={{ fontSize:11, fontWeight:800, color:ts.ring, textTransform:'uppercase', letterSpacing:'0.08em', marginBottom:8 }}>📌 Key points</div>
              <ul style={{ margin:'0 0 16px', padding:0, listStyle:'none', display:'flex', flexDirection:'column', gap:5 }}>
                {stop.points.map(pt => (
                  <li key={pt} style={{ fontSize:13, color:'var(--text-mid)', lineHeight:1.55, paddingLeft:18, position:'relative' }}>
                    <span style={{ position:'absolute', left:0, color:ts.ring, fontWeight:700 }}>›</span>{pt}
                  </li>
                ))}
              </ul>

              <div style={{ display:'flex', gap:10, padding:'11px 13px', background:`${ts.ring}14`, borderRadius:10, fontSize:13, color:'var(--navy)', lineHeight:1.55 }}>
                <span style={{ flexShrink:0 }}>💡</span><span><strong>Local tip:</strong> {stop.tip}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* bottom chip bar — inside the full-screen section */}
      <div style={{ position:'relative', padding:'12px clamp(12px,3vw,40px)', borderTop:'1px solid rgba(255,255,255,0.12)', background:'rgba(0,0,0,0.15)' }}>
        <div style={{ display:'flex', gap:7, overflowX:'auto', paddingBottom:2, WebkitOverflowScrolling:'touch' }}>
          {ROUTE_STOPS.map(s => (
            <button key={`${s.id}`} onClick={() => setActive(s.id)}
              style={{
                display:'flex', alignItems:'center', gap:6, padding:'7px 13px', borderRadius:100, flexShrink:0,
                border:`1.5px solid ${s.id === active ? TYPE_STYLE[s.type].ring : 'rgba(255,255,255,0.25)'}`,
                background: s.id === active ? TYPE_STYLE[s.type].ring : 'rgba(255,255,255,0.08)',
                color:'#fff', fontSize:12.5, fontWeight:700, cursor:'pointer', fontFamily:'var(--font)', transition:'all .15s',
              }}>
              <span>{s.icon}</span>{s.name}
            </button>
          ))}
        </div>
        <div className="rm-scrollhint" style={{ textAlign:'center', marginTop:8, fontSize:11, color:'rgba(255,255,255,0.55)', animation:'scrollHint 1.8s ease-in-out infinite' }}>
          ↓ Scroll for distances, day-wise plan &amp; full route table
        </div>
      </div>
    </div>
  );
}

