'use client';
import { useState, useRef, useEffect } from 'react';

/**
 * PeopleAlsoAsk — Google-style "People also ask" accordion.
 * Mirrors the real PAA widget: collapsed questions that expand on click.
 * Pass real PAA questions sourced from Google for the page's target query.
 * Usage: <PeopleAlsoAsk items={[{ q:'...', a:'...' }]} />
 */
function PAAItem({ q, a, isOpen, onToggle }) {
  const ref = useRef(null);
  const [h, setH] = useState(0);
  useEffect(() => { if (ref.current) setH(ref.current.scrollHeight); }, [a]);
  return (
    <div style={{ borderBottom:'1px solid var(--border)' }}>
      <button onClick={onToggle} aria-expanded={isOpen}
        style={{ width:'100%', background:'none', border:'none', textAlign:'left', cursor:'pointer',
          padding:'15px 4px', display:'flex', justifyContent:'space-between', alignItems:'center', gap:12 }}>
        <span style={{ fontSize:15, fontWeight:600, color:'var(--navy)', lineHeight:1.5 }}>{q}</span>
        <span style={{ flexShrink:0, fontSize:20, color:'var(--teal)', transform:isOpen?'rotate(45deg)':'none', transition:'transform 0.2s' }}>+</span>
      </button>
      <div style={{ maxHeight:isOpen?h:0, overflow:'hidden', transition:'max-height 0.28s ease' }}>
        <div ref={ref} style={{ padding:'0 4px 16px', fontSize:14.5, color:'#475569', lineHeight:1.8 }}>{a}</div>
      </div>
    </div>
  );
}

export default function PeopleAlsoAsk({ items = [], heading = 'People Also Ask', subtext = 'The questions pilgrims most commonly search on Google about this yatra.' }) {
  const [open, setOpen] = useState(0);
  if (!items.length) return null;
  return (
    <section aria-label="People also ask" style={{ marginTop:8 }}>
      {heading ? <h2 style={{ fontFamily:'var(--font-display)', fontSize:'clamp(1.2rem,2.8vw,1.5rem)', fontWeight:700, color:'var(--navy)', marginBottom:6 }}>{heading}</h2> : null}
      {subtext ? <p style={{ fontSize:12.5, color:'var(--text-muted)', marginBottom:10 }}>{subtext}</p> : null}
      <div style={{ background:'#fff', border:'1px solid var(--border)', borderRadius:12, padding:'4px 16px' }}>
        {items.map((it, i) => (
          <PAAItem key={i} q={it.q} a={it.a} isOpen={open===i} onToggle={() => setOpen(open===i?-1:i)} />
        ))}
      </div>
    </section>
  );
}
