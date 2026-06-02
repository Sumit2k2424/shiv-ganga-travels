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
    <div style={{ maxWidth:1000, margin:'0 auto', padding:'4px 16px 40px' }}>
      <style>{`
        @keyframes drawRoute { to { stroke-dashoffset: 0; } }
        @keyframes pinPulse { 0%,100% { transform: scale(1); } 50% { transform: scale(1.18); } }
        @keyframes panelIn { from { opacity:0; transform: translateY(10px); } to { opacity:1; transform: translateY(0); } }
        @keyframes floatY { 0%,100% { transform: translateY(0); } 50% { transform: translateY(-3px); } }
        .rm-route { stroke-dasharray: 600; stroke-dashoffset: 600; animation: drawRoute 3.2s ease-out forwards; }
        .rm-pin { cursor:pointer; transition: transform .2s ease; transform-origin:center; transform-box: fill-box; }
        .rm-pin:hover { transform: scale(1.22); }
        .rm-pin.dham { animation: pinPulse 2.6s ease-in-out infinite; }
        .rm-panel { animation: panelIn .35s ease both; }
        @media (prefers-reduced-motion: reduce) {
          .rm-route { animation:none; stroke-dashoffset:0; }
          .rm-pin.dham { animation:none; }
          .rm-panel { animation:none; }
        }
      `}</style>

      {/* ── Interactive map + detail, two columns on desktop ── */}
      <div style={{ display:'grid', gridTemplateColumns:'minmax(0,1fr)', gap:18 }} className="rm-grid">
        <div style={{ display:'grid', gap:18, gridTemplateColumns:'minmax(260px,0.85fr) minmax(0,1.15fr)' }} className="rm-cols">

          {/* MAP */}
          <div style={{ background:'linear-gradient(160deg,#0a1730 0%,#0F2B5B 55%,#0B5560 100%)', borderRadius:18, padding:'14px', position:'relative', overflow:'hidden', minHeight:380 }}>
            <div style={{ position:'absolute', inset:0, opacity:0.5, background:'radial-gradient(circle at 70% 15%, rgba(232,146,10,0.25), transparent 45%)' }} aria-hidden="true" />
            <div style={{ fontSize:11, fontWeight:700, color:'rgba(255,255,255,0.6)', letterSpacing:'0.1em', textTransform:'uppercase', marginBottom:4, position:'relative' }}>Tap a stop to explore</div>
            <svg viewBox="0 0 100 100" style={{ width:'100%', height:'auto', display:'block', position:'relative' }} role="img" aria-label="Char Dham Yatra interactive route map">
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
            <div style={{ display:'flex', gap:12, flexWrap:'wrap', marginTop:6, position:'relative' }}>
              {Object.entries(TYPE_STYLE).map(([k,v]) => (
                <span key={k} style={{ display:'flex', alignItems:'center', gap:5, fontSize:11, color:'rgba(255,255,255,0.75)' }}>
                  <span style={{ width:9, height:9, borderRadius:'50%', background:v.ring, display:'inline-block' }} />{v.label}
                </span>
              ))}
            </div>
          </div>

          {/* DETAIL PANEL */}
          <div key={stop.id} className="rm-panel" style={{ background:'#fff', borderRadius:18, border:`2px solid ${ts.ring}`, overflow:'hidden', display:'flex', flexDirection:'column' }}>
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

        {/* horizontal stop selector chips */}
        <div style={{ display:'flex', gap:7, flexWrap:'wrap', justifyContent:'center' }}>
          {ROUTE_STOPS.map(s => (
            <button key={`${s.id}`} onClick={() => setActive(s.id)}
              style={{
                display:'flex', alignItems:'center', gap:6, padding:'7px 12px', borderRadius:100,
                border:`1.5px solid ${s.id === active ? TYPE_STYLE[s.type].ring : 'var(--border)'}`,
                background: s.id === active ? TYPE_STYLE[s.type].ring : '#fff',
                color: s.id === active ? '#fff' : 'var(--navy)',
                fontSize:12.5, fontWeight:700, cursor:'pointer', fontFamily:'var(--font)', transition:'all .15s',
              }}>
              <span>{s.icon}</span>{s.name}
            </button>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div style={{ background:'var(--navy)', borderRadius:16, padding:'22px 24px', textAlign:'center', marginTop:24 }}>
        <h3 style={{ color:'#fff', fontFamily:'var(--font-display)', fontSize:'1.25rem', marginBottom:8 }}>Want to walk this whole route?</h3>
        <p style={{ color:'rgba(255,255,255,0.7)', fontSize:13.5, marginBottom:16 }}>We run the full circuit from Haridwar — every stop above, all arranged. From ₹19,500/person.</p>
        <div style={{ display:'flex', gap:10, justifyContent:'center', flexWrap:'wrap' }}>
          <a href={`https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent('Namaste! I explored your Char Dham route map. Please share package details.')}`} target="_blank" rel="nofollow noopener noreferrer" style={{ background:'#25D366', color:'#fff', padding:'12px 24px', borderRadius:9, fontWeight:700, fontSize:13.5, textDecoration:'none' }}>💬 Plan My Yatra</a>
          <a href={`tel:${SITE.phone}`} style={{ background:'rgba(255,255,255,0.12)', color:'#fff', padding:'12px 24px', borderRadius:9, fontWeight:700, fontSize:13.5, textDecoration:'none', border:'1px solid rgba(255,255,255,0.2)' }}>📞 {SITE.phone}</a>
        </div>
      </div>

      <style>{`
        @media (max-width: 720px) {
          .rm-cols { grid-template-columns: minmax(0,1fr) !important; }
        }
      `}</style>
    </div>
  );
}
