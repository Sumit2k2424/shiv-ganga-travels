'use client';
import { useState, useRef, useEffect, useCallback } from 'react';
import { SITE } from '@/data/packages';
import { ROUTE_STOPS } from '@/data/routeStops';

const TYPE_STYLE = {
  dham: { ring:'#E8920A', label:'Dham', glow:'rgba(232,146,10,0.55)' },
  stop: { ring:'#0B7B8B', label:'Halt', glow:'rgba(11,123,139,0.45)' },
  base: { ring:'#0F2B5B', label:'Base', glow:'rgba(15,43,91,0.45)' },
};

// Forward journey nodes (drop the duplicated return-Haridwar at the end).
const NODES = ROUTE_STOPS.slice(0, ROUTE_STOPS.length - 1);

// Pre-compute polyline geometry so the van can ride the route and the gold
// trail can grow by an exact length-fraction.
const SEG = [];
let TOTAL = 0;
for (let i = 1; i < NODES.length; i++) {
  const a = NODES[i - 1], b = NODES[i];
  const len = Math.hypot(b.x - a.x, b.y - a.y);
  SEG.push(len); TOTAL += len;
}
const NODE_FRAC = [0];
{ let acc = 0; for (let i = 0; i < SEG.length; i++) { acc += SEG[i]; NODE_FRAC.push(acc / TOTAL); } }
const PATH_D = NODES.map((s, i) => `${i === 0 ? 'M' : 'L'} ${s.x} ${s.y}`).join(' ');

// altitude range for the climb meter
const ALT = NODES.map(s => parseInt(String(s.alt).replace(/[^0-9]/g, ''), 10) || 0);
const ALT_MIN = Math.min(...ALT), ALT_MAX = Math.max(...ALT);

function posAt(f) {
  f = Math.max(0, Math.min(1, f));
  for (let i = 1; i < NODES.length; i++) {
    if (f <= NODE_FRAC[i] || i === NODES.length - 1) {
      const t0 = NODE_FRAC[i - 1], t1 = NODE_FRAC[i];
      const k = t1 === t0 ? 0 : (f - t0) / (t1 - t0);
      const a = NODES[i - 1], b = NODES[i];
      return { x: a.x + (b.x - a.x) * k, y: a.y + (b.y - a.y) * k, seg: i };
    }
  }
  const l = NODES[NODES.length - 1];
  return { x: l.x, y: l.y, seg: NODES.length - 1 };
}
function altAt(f) {
  const { seg } = posAt(f);
  const t0 = NODE_FRAC[seg - 1] ?? 0, t1 = NODE_FRAC[seg] ?? 1;
  const k = t1 === t0 ? 0 : (Math.max(0, Math.min(1, f)) - t0) / (t1 - t0);
  const a = ALT[seg - 1] ?? ALT[0], b = ALT[seg] ?? a;
  return a + (b - a) * k;
}

const DURATION = 17000; // full route playthrough, ms

export default function RouteMapInteractive() {
  const [active, setActive] = useState(2);
  const [f, setF] = useState(NODE_FRAC[2]);
  const [playing, setPlaying] = useState(false);
  const [hover, setHover] = useState(null);
  const [burst, setBurst] = useState(0);
  const [reached, setReached] = useState(() => new Set([0, 1, 2]));

  const raf = useRef(0);
  const last = useRef(0);
  const fRef = useRef(NODE_FRAC[2]);
  const activeRef = useRef(2);
  fRef.current = f; activeRef.current = active;

  const stop = ROUTE_STOPS.find(s => s.id === active) || ROUTE_STOPS[0];
  const ts = TYPE_STYLE[stop.type];
  const marker = posAt(f);
  const climb = (altAt(f) - ALT_MIN) / (ALT_MAX - ALT_MIN || 1);

  // when f crosses a node while playing, update the open panel + celebrate dhams
  const syncActiveToF = useCallback((val) => {
    let idx = 0;
    for (let i = 0; i < NODES.length; i++) if (val + 0.0005 >= NODE_FRAC[i]) idx = i;
    const node = NODES[idx];
    if (node && node.id !== activeRef.current) {
      setActive(node.id);
      setReached(prev => { const n = new Set(prev); n.add(node.id); return n; });
      if (node.type === 'dham') setBurst(b => b + 1);
    }
  }, []);

  const tick = useCallback((now) => {
    if (!last.current) last.current = now;
    const dt = now - last.current; last.current = now;
    let nf = fRef.current + dt / DURATION;
    if (nf >= 1) { nf = 1; setF(1); syncActiveToF(1); setPlaying(false); return; }
    setF(nf); syncActiveToF(nf);
    raf.current = requestAnimationFrame(tick);
  }, [syncActiveToF]);

  useEffect(() => {
    if (playing) { last.current = 0; raf.current = requestAnimationFrame(tick); }
    return () => cancelAnimationFrame(raf.current);
  }, [playing, tick]);

  const play = () => { if (f >= 1) { setF(0); setActive(0); setReached(new Set([0])); } setPlaying(true); };
  const pause = () => setPlaying(false);

  const jump = (id) => {
    setPlaying(false);
    setActive(id);
    setReached(prev => { const n = new Set(prev); n.add(id); return n; });
    const node = NODES.find(n => n.id === id);
    setF(node ? NODE_FRAC[NODES.indexOf(node)] : 1);
    const s = ROUTE_STOPS.find(s => s.id === id);
    if (s && s.type === 'dham') setBurst(b => b + 1);
  };

  return (
    <div className="rm-fullscreen">
      <style>{`
        .rm-fullscreen{position:relative;width:100%;min-height:100vh;min-height:100svh;display:flex;flex-direction:column;background:linear-gradient(160deg,#081229 0%,#0F2B5B 52%,#0B5560 100%);overflow:hidden;}
        .rm-stage{position:relative;flex:1;display:grid;grid-template-columns:1.25fr .95fr;gap:0;min-height:0;}
        .rm-map-pane{position:relative;display:flex;flex-direction:column;justify-content:center;padding:18px clamp(16px,4vw,52px);min-height:0;}
        .rm-detail-pane{position:relative;display:flex;align-items:center;padding:18px clamp(16px,3vw,38px) 18px 0;min-height:0;}
        @keyframes drawRoute{to{stroke-dashoffset:0;}}
        @keyframes pinPulse{0%,100%{transform:scale(1);}50%{transform:scale(1.16);}}
        @keyframes panelIn{from{opacity:0;transform:translateY(10px);}to{opacity:1;transform:translateY(0);}}
        @keyframes floatY{0%,100%{transform:translateY(0);}50%{transform:translateY(-3px);}}
        @keyframes vanBob{0%,100%{transform:translateY(0) rotate(-2deg);}50%{transform:translateY(-1.2px) rotate(2deg);}}
        @keyframes drop{0%{transform:translateY(-9px) scale(.4);opacity:0;}70%{transform:translateY(1.5px) scale(1.08);}100%{transform:translateY(0) scale(1);opacity:1;}}
        @keyframes drift{from{transform:translateX(-12%);}to{transform:translateX(112%);}}
        @keyframes confettiUp{0%{transform:translate(0,0) scale(.6);opacity:0;}15%{opacity:1;}100%{transform:translate(var(--dx),var(--dy)) scale(1.1);opacity:0;}}
        @keyframes scrollHint{0%,100%{transform:translateY(0);opacity:.7;}50%{transform:translateY(5px);opacity:1;}}
        @keyframes sparkle{0%,100%{opacity:.25;}50%{opacity:.9;}}
        .rm-route-bg{stroke-dasharray:1;stroke-dashoffset:1;animation:drawRoute 3.2s ease-out forwards;}
        .rm-pin{cursor:pointer;transition:transform .2s ease;transform-origin:center;transform-box:fill-box;animation:drop .5s cubic-bezier(.2,1.3,.5,1) both;}
        .rm-pin:hover{transform:scale(1.25);}
        .rm-pin.dham{animation:drop .5s cubic-bezier(.2,1.3,.5,1) both, pinPulse 2.6s ease-in-out infinite 1s;}
        .rm-panel{animation:panelIn .35s ease both;}
        .rm-cloud{position:absolute;border-radius:100px;background:rgba(255,255,255,.07);filter:blur(2px);pointer-events:none;animation:drift linear infinite;}
        .rm-star{position:absolute;width:2px;height:2px;border-radius:50%;background:#fff;animation:sparkle 3s ease-in-out infinite;pointer-events:none;}
        .rm-ctrl{display:flex;align-items:center;gap:8px;border:none;border-radius:100px;padding:9px 18px;font-weight:800;font-size:13.5px;cursor:pointer;font-family:var(--font);box-shadow:0 6px 18px rgba(232,146,10,.35);transition:transform .12s;}
        .rm-ctrl:active{transform:scale(.96);}
        @media (prefers-reduced-motion: reduce){
          .rm-route-bg{animation:none;stroke-dashoffset:0;}
          .rm-pin,.rm-pin.dham{animation:none;}
          .rm-panel,.rm-scrollhint,.rm-cloud,.rm-star,.rm-van{animation:none;}
        }
        @media (max-width:820px){
          .rm-fullscreen{min-height:auto;}
          .rm-stage{grid-template-columns:1fr;grid-template-rows:auto auto;}
          .rm-map-pane{padding:12px 12px 4px;}
          .rm-detail-pane{padding:4px 12px 14px;align-items:stretch;}
          .rm-map-pane svg{max-height:54vh !important;}
          .rm-panel{max-height:none !important;}
        }
        @media (max-width:380px){.rm-map-pane svg{max-height:46vh !important;}}
      `}</style>

      {/* title */}
      <div style={{ position:'relative', padding:'16px clamp(16px,4vw,52px) 0', textAlign:'center' }}>
        <div style={{ fontFamily:'var(--font-display)', fontSize:'clamp(1.3rem,3.4vw,2rem)', fontWeight:700, color:'#fff', lineHeight:1.15 }}>Char Dham Yatra — Interactive Route Map</div>
        <div style={{ fontSize:12.5, color:'rgba(255,255,255,0.72)', marginTop:5 }}>Press play to ride the whole journey 🚐 — or tap any stop to explore it</div>
      </div>

      <div className="rm-stage">
        {/* MAP */}
        <div className="rm-map-pane">
          {/* ambient sky */}
          <div aria-hidden="true" style={{ position:'absolute', inset:0, opacity:.7, background:'radial-gradient(circle at 72% 10%, rgba(232,146,10,0.22), transparent 52%)', pointerEvents:'none' }} />
          <div aria-hidden="true" className="rm-cloud" style={{ top:'12%', width:90, height:18, animationDuration:'34s' }} />
          <div aria-hidden="true" className="rm-cloud" style={{ top:'26%', width:60, height:13, animationDuration:'46s', animationDelay:'-12s' }} />
          <div aria-hidden="true" className="rm-cloud" style={{ top:'6%', width:120, height:22, animationDuration:'58s', animationDelay:'-30s' }} />
          {[['18%','20%'],['40%','9%'],['63%','15%'],['82%','24%'],['30%','13%'],['74%','7%']].map(([l,t],i)=>(
            <div key={i} aria-hidden="true" className="rm-star" style={{ left:l, top:t, animationDelay:`${i*0.5}s` }} />
          ))}

          <div style={{ display:'flex', alignItems:'center', gap:10, marginBottom:8, position:'relative', flexWrap:'wrap' }}>
            <button className="rm-ctrl" onClick={playing ? pause : play}
              style={{ background:playing ? 'rgba(255,255,255,0.16)' : 'linear-gradient(135deg,#E8920A,#FFB347)', color:'#fff' }}>
              {playing ? '⏸ Pause' : (f >= 1 ? '↺ Replay journey' : '▶ Play journey')}
            </button>
            <span style={{ fontSize:11.5, fontWeight:700, color:'rgba(255,255,255,0.75)' }}>
              {Math.round(f * 100)}% · {reached.size} of {NODES.length} stops
            </span>
          </div>

          <svg viewBox="0 0 100 100" preserveAspectRatio="xMidYMid meet" style={{ width:'100%', height:'100%', maxHeight:'60vh', display:'block', position:'relative' }} role="img" aria-label="Char Dham Yatra animated interactive route map">
            <defs>
              <linearGradient id="routeGrad" x1="0" y1="1" x2="1" y2="0">
                <stop offset="0%" stopColor="#0B7B8B" /><stop offset="55%" stopColor="#E8920A" /><stop offset="100%" stopColor="#FFD166" />
              </linearGradient>
              <radialGradient id="vanGlow"><stop offset="0%" stopColor="#FFD166" stopOpacity="0.9" /><stop offset="100%" stopColor="#FFD166" stopOpacity="0" /></radialGradient>
            </defs>
            {/* snow peaks */}
            <path d="M0,30 L12,12 L22,26 L34,8 L46,24 L58,10 L72,26 L86,12 L100,28 L100,100 L0,100 Z" fill="rgba(255,255,255,0.045)" />
            <path d="M0,46 L16,30 L30,44 L44,28 L60,44 L76,30 L92,46 L100,40 L100,100 L0,100 Z" fill="rgba(255,255,255,0.03)" />
            {/* base + travelled route */}
            <path d={PATH_D} fill="none" stroke="rgba(255,255,255,0.18)" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" className="rm-route-bg" pathLength="1" />
            <path d={PATH_D} fill="none" stroke="url(#routeGrad)" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" pathLength="1" strokeDasharray="1" strokeDashoffset={1 - f} />

            {/* pins */}
            {NODES.map((s, i) => {
              const st = TYPE_STYLE[s.type];
              const isActive = s.id === active;
              const done = reached.has(s.id);
              const r = s.type === 'dham' ? 3.4 : 2.3;
              return (
                <g key={s.id} onClick={() => jump(s.id)} onMouseEnter={() => setHover(s.id)} onMouseLeave={() => setHover(null)}
                   className={`rm-pin ${s.type}`} role="button" tabIndex={0} style={{ animationDelay:`${0.25 + i * 0.12}s` }}
                   onKeyDown={(e)=>{ if(e.key==='Enter'||e.key===' '){ e.preventDefault(); jump(s.id);} }}
                   aria-label={`${s.name}, ${st.label}, ${s.dist}`}>
                  {isActive && <circle cx={s.x} cy={s.y} r={r + 3} fill="none" stroke="#fff" strokeWidth="0.7" opacity="0.9" />}
                  <circle cx={s.x} cy={s.y} r={r + 1.6} fill={st.glow} />
                  <circle cx={s.x} cy={s.y} r={r} fill={done ? st.ring : '#15315f'} stroke="#fff" strokeWidth="0.6" />
                  {done && <text x={s.x} y={s.y + 0.9} textAnchor="middle" fontSize="2.4" style={{ pointerEvents:'none' }}>{s.type === 'dham' ? '★' : ''}</text>}
                  <text x={s.x} y={s.y - r - 1.4} textAnchor="middle" fontSize="2.6" fontWeight="700" fill="#fff" style={{ pointerEvents:'none' }}>{s.name}</text>
                  {hover === s.id && (
                    <g style={{ pointerEvents:'none' }}>
                      <rect x={s.x - 11} y={s.y + r + 1.4} width="22" height="6.2" rx="1.6" fill="#0b1730" opacity="0.92" />
                      <text x={s.x} y={s.y + r + 5.6} textAnchor="middle" fontSize="2.5" fill="#FFD166" fontWeight="700">{s.dist}</text>
                    </g>
                  )}
                </g>
              );
            })}

            {/* travelling van */}
            <g style={{ transition:'none', pointerEvents:'none' }} className="rm-van">
              <circle cx={marker.x} cy={marker.y} r="4.5" fill="url(#vanGlow)" />
              <text x={marker.x} y={marker.y + 1.6} textAnchor="middle" fontSize="4.6" style={{ animation:'vanBob 1.1s ease-in-out infinite' }}>🚐</text>
            </g>

            {/* confetti burst at the active stop */}
            {ROUTE_STOPS.find(s => s.id === active)?.type === 'dham' && (
              <g key={burst} style={{ pointerEvents:'none' }}>
                {['🌸','🎉','🙏','✨','🌼','🔱'].map((e, i) => {
                  const ang = (i / 6) * Math.PI * 2;
                  return (
                    <text key={i} x={marker.x} y={marker.y} textAnchor="middle" fontSize="3.2"
                      style={{ ['--dx']: `${Math.cos(ang) * 9}px`, ['--dy']: `${Math.sin(ang) * 9 - 4}px`, animation:'confettiUp 1.1s ease-out forwards', animationDelay:`${i * 0.04}s` }}>{e}</text>
                  );
                })}
              </g>
            )}
          </svg>

          {/* altitude climb meter + legend */}
          <div style={{ position:'relative', marginTop:10 }}>
            <div style={{ display:'flex', justifyContent:'space-between', fontSize:10.5, color:'rgba(255,255,255,0.6)', marginBottom:3 }}>
              <span>⛰️ Altitude climbed</span><span>{Math.round(altAt(f)).toLocaleString('en-IN')} m</span>
            </div>
            <div style={{ height:6, borderRadius:100, background:'rgba(255,255,255,0.12)', overflow:'hidden' }}>
              <div style={{ height:'100%', width:`${climb * 100}%`, background:'linear-gradient(90deg,#0B7B8B,#E8920A,#FFD166)', borderRadius:100, transition:'width .12s linear' }} />
            </div>
            <div style={{ display:'flex', gap:14, flexWrap:'wrap', marginTop:9 }}>
              {Object.entries(TYPE_STYLE).map(([k, v]) => (
                <span key={k} style={{ display:'flex', alignItems:'center', gap:5, fontSize:11.5, color:'rgba(255,255,255,0.78)' }}>
                  <span style={{ width:9, height:9, borderRadius:'50%', background:v.ring, display:'inline-block' }} />{v.label}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* DETAIL */}
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

              <div style={{ fontSize:11, fontWeight:800, color:ts.ring, textTransform:'uppercase', letterSpacing:'0.08em', marginBottom:8 }}>✨ Places to visit & things to do</div>
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

              <div style={{ fontSize:11, fontWeight:800, color:ts.ring, textTransform:'uppercase', letterSpacing:'0.08em', marginBottom:8 }}>📌 Good to know</div>
              <ul style={{ margin:'0 0 16px', padding:0, listStyle:'none', display:'flex', flexDirection:'column', gap:5 }}>
                {stop.points.map(pt => (
                  <li key={pt} style={{ fontSize:13, color:'var(--text-mid)', lineHeight:1.55, paddingLeft:18, position:'relative' }}>
                    <span style={{ position:'absolute', left:0, color:ts.ring, fontWeight:700 }}>›</span>{pt}
                  </li>
                ))}
              </ul>

              <div style={{ display:'flex', gap:10, padding:'11px 13px', background:`${ts.ring}14`, borderRadius:10, fontSize:13, color:'var(--navy)', lineHeight:1.55, marginBottom:14 }}>
                <span style={{ flexShrink:0 }}>💡</span><span><strong>Local tip:</strong> {stop.tip}</span>
              </div>

              <a href={`https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(`Namaste! I'm planning Char Dham and want to include ${stop.name}. Please share a package.`)}`}
                target="_blank" rel="nofollow noopener noreferrer"
                style={{ display:'inline-flex', alignItems:'center', gap:8, background:'#25D366', color:'#fff', padding:'10px 18px', borderRadius:9, fontWeight:700, fontSize:13.5, textDecoration:'none' }}>
                💬 Plan my yatra with {stop.name}
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* chip bar */}
      <div style={{ position:'relative', padding:'12px clamp(12px,3vw,40px)', borderTop:'1px solid rgba(255,255,255,0.12)', background:'rgba(0,0,0,0.16)' }}>
        <div style={{ display:'flex', gap:7, overflowX:'auto', paddingBottom:2, WebkitOverflowScrolling:'touch' }}>
          {ROUTE_STOPS.map(s => (
            <button key={`${s.id}`} onClick={() => jump(s.id)}
              style={{ display:'flex', alignItems:'center', gap:6, padding:'7px 13px', borderRadius:100, flexShrink:0,
                border:`1.5px solid ${s.id === active ? TYPE_STYLE[s.type].ring : 'rgba(255,255,255,0.25)'}`,
                background: s.id === active ? TYPE_STYLE[s.type].ring : 'rgba(255,255,255,0.08)',
                color:'#fff', fontSize:12.5, fontWeight:700, cursor:'pointer', fontFamily:'var(--font)', transition:'all .15s' }}>
              <span>{s.icon}</span>{s.name}
            </button>
          ))}
        </div>
        <div className="rm-scrollhint" style={{ textAlign:'center', marginTop:8, fontSize:11, color:'rgba(255,255,255,0.55)' }}>
          ↓ Scroll for distances, day-wise plan &amp; full route table
        </div>
      </div>
    </div>
  );
}
