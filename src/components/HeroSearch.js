'use client';
import { useState } from 'react';
import { SITE } from '@/data/packages';

const TABS = [
  { id:'char-dham',   label:'Char Dham',   icon:'🛕' },
  { id:'do-dham',     label:'Do Dham',     icon:'⛰️' },
  { id:'single-dham', label:'Single Dham', icon:'🙏' },
  { id:'helicopter',  label:'Helicopter',  icon:'🚁' },
  { id:'cab',         label:'Cabs',        icon:'🚕' },
];
const MONTHS = ['July 2026','August 2026','September 2026','October 2026'];
const CITIES = ['Haridwar','Delhi','Rishikesh','Dehradun'];

export default function HeroSearch() {
  const [tab,      setTab]      = useState('char-dham');
  const [city,     setCity]     = useState('Haridwar');
  const [month,    setMonth]    = useState('');
  const [pilgrims, setPilgrims] = useState('2');

  function handleSearch(e) {
    e.preventDefault();
    const label = TABS.find(t=>t.id===tab)?.label || tab;
    const msg = tab === 'cab'
      ? `Namaste! I want to book a cab from ${city} for ${pilgrims} passenger(s) in ${month||'the upcoming weeks'}. Please share rates.`
      : `Namaste! I want to book a ${label} package from ${city} for ${pilgrims} pilgrim(s) in ${month||'upcoming season'}.`;
    window.open(`https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(msg)}`,'_blank');
  }

  const fieldWrap = {
    flex:'1 1 150px', minWidth:130,
    border:'1px solid var(--border)', borderRadius:10,
    padding:'10px 14px 8px', background:'#fff',
    transition:'border-color .15s, box-shadow .15s',
  };
  const labelStyle = {
    display:'block', fontSize:10, fontWeight:700,
    color:'var(--text-muted)', marginBottom:2,
    textTransform:'uppercase', letterSpacing:'0.08em',
  };
  const bigSelect = {
    width:'100%', border:'none', outline:'none', background:'transparent',
    fontSize:19, fontWeight:800, color:'var(--text)',
    fontFamily:'var(--font)', cursor:'pointer', padding:0,
    appearance:'none', WebkitAppearance:'none',
  };

  return (
    <div style={{
      background:'#fff',
      borderRadius:16,
      boxShadow:'0 24px 64px rgba(15,43,91,0.3), 0 4px 12px rgba(15,43,91,0.1)',
      maxWidth:960, margin:'0 auto',
      position:'relative', paddingBottom:28,
    }}>
      {/* Icon tabs — OTA product row */}
      <div role="tablist" aria-label="Package type" style={{
        display:'flex', justifyContent:'center', gap:2,
        borderBottom:'1px solid var(--border)', padding:'6px 8px 0', overflowX:'auto',
      }}>
        {TABS.map(t => {
          const active = tab === t.id;
          return (
            <button key={t.id} role="tab" aria-selected={active} onClick={()=>setTab(t.id)}
              style={{
                display:'flex', flexDirection:'column', alignItems:'center', gap:3,
                padding:'10px 18px 12px', minWidth:84,
                border:'none', background:'none', cursor:'pointer',
                borderBottom: active ? '3px solid var(--gold)' : '3px solid transparent',
                color: active ? 'var(--navy)' : 'var(--text-muted)',
                fontFamily:'var(--font)', transition:'color .15s, border-color .15s',
              }}>
              <span aria-hidden="true" style={{
                fontSize:20, lineHeight:1,
                filter: active ? 'none' : 'grayscale(0.6) opacity(0.75)',
              }}>{t.icon}</span>
              <span style={{ fontSize:12.5, fontWeight: active ? 800 : 600, whiteSpace:'nowrap' }}>{t.label}</span>
            </button>
          );
        })}
      </div>

      {/* Fields */}
      <form onSubmit={handleSearch} className="hero-search-form" style={{ padding:'18px 20px 10px', display:'flex', gap:12, flexWrap:'wrap' }}>
        <div style={fieldWrap}>
          <label style={labelStyle} htmlFor="hs-city">Starting From</label>
          <select id="hs-city" value={city} onChange={e=>setCity(e.target.value)} style={bigSelect}>
            {CITIES.map(c=><option key={c}>{c}</option>)}
          </select>
        </div>
        <div style={fieldWrap}>
          <label style={labelStyle} htmlFor="hs-month">Travel Month</label>
          <select id="hs-month" value={month} onChange={e=>setMonth(e.target.value)} style={{ ...bigSelect, fontSize: month ? 19 : 15, fontWeight: month ? 800 : 600, color: month ? 'var(--text)' : 'var(--text-muted)' }}>
            <option value="">Any month</option>
            {MONTHS.map(m=><option key={m}>{m}</option>)}
          </select>
        </div>
        <div style={fieldWrap}>
          <label style={labelStyle} htmlFor="hs-pax">Pilgrims</label>
          <select id="hs-pax" value={pilgrims} onChange={e=>setPilgrims(e.target.value)} style={bigSelect}>
            {['1','2','3','4','5','6','7','8','9','10+'].map(n=>(
              <option key={n} value={n}>{n} {n==='1'?'Pilgrim':'Pilgrims'}</option>
            ))}
          </select>
        </div>
        <div style={{ ...fieldWrap, background:'var(--navy-light)', borderColor:'transparent' }}>
          <span style={labelStyle}>Trip Type</span>
          <div style={{ fontSize:19, fontWeight:800, color:'var(--navy)' }}>{TABS.find(t=>t.id===tab)?.label}</div>
        </div>

        {/* Floating SEARCH pill — breaks the card edge, MMT-style */}
        <button type="submit" aria-label="Search packages" style={{
          position:'absolute', left:'50%', bottom:0, transform:'translate(-50%,50%)',
          background:'linear-gradient(93deg,#F5A82A,#E8920A 55%,#C67A08)',
          color:'#fff', border:'none', cursor:'pointer',
          padding:'15px 54px', borderRadius:50,
          fontSize:16, fontWeight:800, letterSpacing:'0.14em',
          fontFamily:'var(--font)',
          boxShadow:'0 10px 26px rgba(232,146,10,0.45), inset 0 1px 0 rgba(255,255,255,0.3)',
          transition:'transform .15s, box-shadow .15s',
        }}
          onMouseEnter={e=>{e.currentTarget.style.transform='translate(-50%,50%) scale(1.04)'}}
          onMouseLeave={e=>{e.currentTarget.style.transform='translate(-50%,50%)'}}>
          SEARCH
        </button>
      </form>

      <div style={{ textAlign:'center', fontSize:11.5, color:'var(--text-muted)', paddingBottom:6 }}>
        Instant quote on WhatsApp · No login, no payment to enquire
      </div>
    </div>
  );
}
