'use client';
import { useState } from 'react';
import { SITE } from '@/data/packages';

const TABS = [
  { id:'char-dham',   label:'🏔️ Char Dham',  icon:'🏔️' },
  { id:'do-dham',     label:'🕌 Do Dham',     icon:'🕌' },
  { id:'single-dham', label:'🙏 Single Dham', icon:'🙏' },
  { id:'helicopter',  label:'🚁 Helicopter',  icon:'🚁' },
];
const MONTHS = ['May 2025','June 2025','September 2025','October 2025'];

export default function HeroSearch() {
  const [tab,      setTab]      = useState('char-dham');
  const [month,    setMonth]    = useState('');
  const [pilgrims, setPilgrims] = useState('2');

  function handleSearch(e) {
    e.preventDefault();
    const label = TABS.find(t => t.id === tab)?.label.replace(/[^\w\s]/g,'').trim();
    const msg = `Namaste! I want to book a ${label} package for ${pilgrims} pilgrim(s) in ${month || 'upcoming season'}.`;
    window.open(`https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(msg)}`, '_blank');
  }

  const inputStyle = {
    width:'100%', padding:'10px 12px',
    border:'1.5px solid var(--border)', borderRadius:8,
    fontSize:13, color:'var(--text)', background:'#fff',
    outline:'none', fontFamily:'var(--font)',
    transition:'border-color .15s',
  };

  return (
    <div style={{
      background:'rgba(255,255,255,0.97)',
      borderRadius:16,
      overflow:'hidden',
      boxShadow:'0 20px 60px rgba(7,20,42,0.35)',
      backdropFilter:'blur(10px)',
      border:'1px solid rgba(255,255,255,0.6)',
    }}>
      {/* Tabs */}
      <div style={{ display:'flex', borderBottom:'1px solid var(--border)', background:'#f7fbff', overflowX:'auto' }}>
        {TABS.map(t => (
          <button key={t.id} onClick={() => setTab(t.id)}
            style={{
              padding:'13px 22px', fontSize:13, fontWeight:600,
              border:'none', borderBottom: tab===t.id ? '3px solid var(--blue)' : '3px solid transparent',
              background:'none', color: tab===t.id ? 'var(--blue)' : 'var(--muted)',
              cursor:'pointer', whiteSpace:'nowrap', fontFamily:'var(--font)',
              transition:'color .15s, border-color .15s',
            }}>
            {t.label}
          </button>
        ))}
      </div>

      {/* Form */}
      <form onSubmit={handleSearch} style={{ padding:'20px 22px', display:'flex', gap:12, flexWrap:'wrap', alignItems:'flex-end' }}>
        <div style={{ flex:'1 1 160px', minWidth:140 }}>
          <label style={{ display:'block', fontSize:11, fontWeight:600, color:'var(--muted)', marginBottom:6, textTransform:'uppercase', letterSpacing:'0.07em' }}>Travel Month</label>
          <select value={month} onChange={e=>setMonth(e.target.value)} style={inputStyle}>
            <option value="">Select month</option>
            {MONTHS.map(m=><option key={m}>{m}</option>)}
          </select>
        </div>
        <div style={{ flex:'1 1 140px', minWidth:120 }}>
          <label style={{ display:'block', fontSize:11, fontWeight:600, color:'var(--muted)', marginBottom:6, textTransform:'uppercase', letterSpacing:'0.07em' }}>Pilgrims</label>
          <select value={pilgrims} onChange={e=>setPilgrims(e.target.value)} style={inputStyle}>
            {['1','2','3','4','5','6','7','8','9','10+'].map(n=><option key={n} value={n}>{n} Pilgrim{n!=='1'?'s':''}</option>)}
          </select>
        </div>
        <div style={{ flex:'1 1 160px', minWidth:140 }}>
          <label style={{ display:'block', fontSize:11, fontWeight:600, color:'var(--muted)', marginBottom:6, textTransform:'uppercase', letterSpacing:'0.07em' }}>Package Type</label>
          <div style={{ ...inputStyle, background:'var(--blue-light)', color:'var(--blue)', fontWeight:500 }}>
            {TABS.find(t=>t.id===tab)?.label}
          </div>
        </div>
        <button type="submit" className="btn-primary" style={{ flex:'0 0 auto', padding:'11px 32px', fontSize:14, marginTop:4 }}>
          SEARCH
        </button>
      </form>
    </div>
  );
}
