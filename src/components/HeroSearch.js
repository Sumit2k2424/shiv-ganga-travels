'use client';
import { useState } from 'react';
import { SITE } from '@/data/packages';

const TABS = [
  { id:'char-dham',   label:'Char Dham' },
  { id:'do-dham',     label:'Do Dham' },
  { id:'single-dham', label:'Single Dham' },
  { id:'helicopter',  label:'🚁 Helicopter' },
];
const MONTHS = ['May 2026','June 2026','September 2026','October 2026'];

export default function HeroSearch() {
  const [tab,     setTab]     = useState('char-dham');
  const [month,   setMonth]   = useState('');
  const [pilgrims,setPilgrims]= useState('2');

  function handleSearch(e) {
    e.preventDefault();
    const label = TABS.find(t=>t.id===tab)?.label || tab;
    const msg   = `Namaste! I want to book a ${label} package for ${pilgrims} pilgrim(s) in ${month||'upcoming season'}.`;
    window.open(`https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(msg)}`,'_blank');
  }

  const selectStyle = {
    width:'100%', padding:'11px 14px',
    border:'1.5px solid var(--border)',
    borderRadius:'var(--r-sm)',
    fontSize:13.5, color:'var(--text)',
    background:'#fff', outline:'none',
    fontFamily:'var(--font)',
    transition:'border-color .15s, box-shadow .15s',
    cursor:'pointer',
  };
  const labelStyle = {
    display:'block', fontSize:10.5, fontWeight:700,
    color:'var(--text-mid)', marginBottom:6,
    textTransform:'uppercase', letterSpacing:'0.08em',
  };

  return (
    <div style={{
      background:'rgba(255,255,255,0.96)',
      backdropFilter:'blur(16px)',
      borderRadius:'var(--r-xl)',
      overflow:'hidden',
      boxShadow:'0 24px 64px rgba(15,43,91,0.3), 0 4px 12px rgba(15,43,91,0.1)',
      border:'1px solid rgba(255,255,255,0.7)',
      maxWidth:820,
      margin:'0 auto',
    }}>
      {/* Tabs */}
      <div style={{ display:'flex', borderBottom:'1px solid var(--border)', background:'var(--bg)', overflowX:'auto' }}>
        {TABS.map(t => {
          const active = tab === t.id;
          return (
            <button key={t.id} onClick={()=>setTab(t.id)}
              style={{
                padding:'13px 24px', fontSize:13, fontWeight:600,
                border:'none',
                borderBottom: active ? '2px solid var(--gold)' : '2px solid transparent',
                background:'none',
                color: active ? 'var(--navy)' : 'var(--text-muted)',
                cursor:'pointer', whiteSpace:'nowrap',
                fontFamily:'var(--font)',
                transition:'color .15s, border-color .15s',
                flex: '1 1 auto',
              }}>
              {t.label}
            </button>
          );
        })}
      </div>

      {/* Form */}
      <form onSubmit={handleSearch} className="hero-search-form" style={{ padding:'20px 24px', display:'flex', gap:14, flexWrap:'wrap', alignItems:'flex-end' }}>
        <div style={{ flex:'1 1 130px', minWidth:110 }}>
          <label style={labelStyle}>Travel Month</label>
          <select value={month} onChange={e=>setMonth(e.target.value)} style={selectStyle}
            onFocus={e=>{e.target.style.borderColor='var(--navy)';e.target.style.boxShadow='0 0 0 3px rgba(15,43,91,0.1)'}}
            onBlur={e=>{e.target.style.borderColor='var(--border)';e.target.style.boxShadow='none'}}>
            <option value="">Select month</option>
            {MONTHS.map(m=><option key={m}>{m}</option>)}
          </select>
        </div>
        <div style={{ flex:'1 1 130px', minWidth:110 }}>
          <label style={labelStyle}>Pilgrims</label>
          <select value={pilgrims} onChange={e=>setPilgrims(e.target.value)} style={selectStyle}
            onFocus={e=>{e.target.style.borderColor='var(--navy)';e.target.style.boxShadow='0 0 0 3px rgba(15,43,91,0.1)'}}
            onBlur={e=>{e.target.style.borderColor='var(--border)';e.target.style.boxShadow='none'}}>
            {['1','2','3','4','5','6','7','8','9','10+'].map(n=>(
              <option key={n} value={n}>{n} Pilgrim{n!=='1'?'s':''}</option>
            ))}
          </select>
        </div>
        <div style={{ flex:'1 1 130px', minWidth:110 }}>
          <label style={labelStyle}>Package Type</label>
          <div style={{ ...selectStyle, background:'var(--navy-light)', color:'var(--navy)', fontWeight:600, cursor:'default', display:'flex', alignItems:'center' }}>
            {TABS.find(t=>t.id===tab)?.label}
          </div>
        </div>
        <button type="submit" className="btn btn-primary" style={{ flex:'0 0 auto', padding:'12px 32px', fontSize:14, fontWeight:700, marginTop:4 }}>
          Search Packages
        </button>
      </form>
    </div>
  );
}
