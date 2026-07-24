'use client';
import { useState } from 'react';
import Link from 'next/link';
import { SITE } from '@/data/packages';
import { WhatsAppIcon } from '@/components/Icon';

/*
 * HeroSearch — simplified enquiry widget.
 * The old five-tab / four-dropdown "SEARCH" card promised a results engine
 * the site doesn't have (the conversion model is enquiry). This version asks
 * only what the operator actually needs — month and group size — and labels
 * the CTA with what really happens next. Cab & helicopter intents are links.
 */
const MONTHS = ['July 2026','August 2026','September 2026','October 2026'];
const CITIES = ['Haridwar','Delhi','Rishikesh','Dehradun'];

export default function HeroSearch() {
  const [city,     setCity]     = useState('Haridwar');
  const [month,    setMonth]    = useState('');
  const [pilgrims, setPilgrims] = useState('2');

  function handleSubmit(e) {
    e.preventDefault();
    const msg = `Namaste! I want to plan a Char Dham Yatra from ${city} for ${pilgrims} pilgrim(s) in ${month || 'the upcoming season'}. Please share the itinerary and price.`;
    try {
      window.dispatchEvent(new CustomEvent('sgt:lead', { detail: {
        type: 'Hero Enquiry', package: 'Char Dham', number: '+' + SITE.whatsapp,
        detail: `From: ${city} | Month: ${month||'—'} | Pilgrims: ${pilgrims}`,
      }}));
    } catch {}
    window.open(`https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(msg)}`,'_blank');
  }

  const fieldWrap = {
    flex:'1 1 150px', minWidth:130,
    border:'1px solid var(--border)', borderRadius:10,
    padding:'10px 32px 8px 14px', background:'#fff',
    transition:'border-color .15s, box-shadow .15s',
    position:'relative', textAlign:'left',
  };
  const chevron = (
    <svg aria-hidden="true" width="12" height="12" viewBox="0 0 12 12" style={{ position:'absolute', right:12, top:'50%', transform:'translateY(-25%)', pointerEvents:'none' }}>
      <path d="M2 4l4 4 4-4" fill="none" stroke="var(--text-muted)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
  const labelStyle = {
    display:'block', fontSize:10.5, fontWeight:700,
    color:'var(--text-muted)', marginBottom:2,
    textTransform:'uppercase', letterSpacing:'0.08em',
  };
  const bigSelect = {
    width:'100%', border:'none', outline:'none', background:'transparent',
    fontSize:17, fontWeight:700, color:'var(--text)',
    fontFamily:'var(--font)', cursor:'pointer', padding:0,
    appearance:'none', WebkitAppearance:'none',
  };

  return (
    <div style={{
      background:'#fff',
      borderRadius:16,
      boxShadow:'0 24px 64px rgba(15,43,91,0.3), 0 4px 12px rgba(15,43,91,0.1)',
      maxWidth:860, margin:'0 auto',
      position:'relative', padding:'20px 20px 14px',
      textAlign:'left',
    }}>
      <form onSubmit={handleSubmit} className="hero-search-form" style={{ display:'flex', gap:12, flexWrap:'wrap', alignItems:'stretch' }}>
        <div className="hs-field" style={fieldWrap}>
          {chevron}
          <label style={labelStyle} htmlFor="hs-city">Starting from</label>
          <select id="hs-city" value={city} onChange={e=>setCity(e.target.value)} style={bigSelect}>
            {CITIES.map(c=><option key={c}>{c}</option>)}
          </select>
        </div>
        <div className="hs-field" style={fieldWrap}>
          {chevron}
          <label style={labelStyle} htmlFor="hs-month">Travel month</label>
          <select id="hs-month" value={month} onChange={e=>setMonth(e.target.value)} style={{ ...bigSelect, color: month ? 'var(--text)' : 'var(--text-muted)', fontWeight: month ? 700 : 600 }}>
            <option value="">Any month</option>
            {MONTHS.map(m=><option key={m}>{m}</option>)}
          </select>
        </div>
        <div className="hs-field" style={fieldWrap}>
          {chevron}
          <label style={labelStyle} htmlFor="hs-pax">Pilgrims</label>
          <select id="hs-pax" value={pilgrims} onChange={e=>setPilgrims(e.target.value)} style={bigSelect}>
            {['1','2','3','4','5','6','7','8','9','10+'].map(n=>(
              <option key={n} value={n}>{n} {n==='1'?'Pilgrim':'Pilgrims'}</option>
            ))}
          </select>
        </div>

        {/* Primary action — gold, labelled with what actually happens */}
        <button type="submit" style={{
          flex:'1 1 200px', minWidth:190,
          background:'var(--gold)',
          color:'#fff', border:'none', cursor:'pointer',
          padding:'14px 22px', borderRadius:10,
          fontSize:15, fontWeight:700,
          fontFamily:'var(--font)',
          transition:'background .15s',
        }}
          onMouseEnter={e=>{e.currentTarget.style.background='var(--gold-dark)'}}
          onMouseLeave={e=>{e.currentTarget.style.background='var(--gold)'}}>
          Get My Itinerary &amp; Price
        </button>
      </form>

      <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center', flexWrap:'wrap', gap:8, marginTop:12, paddingTop:10, borderTop:'1px solid var(--border)' }}>
        <span style={{ display:'inline-flex', alignItems:'center', gap:6, fontSize:12, color:'var(--text-muted)' }}>
          <WhatsAppIcon size={13} color="#25D366"/>
          Replies on WhatsApp within 2 hours · No login, no payment to enquire
        </span>
        <span style={{ fontSize:12.5, color:'var(--text-mid)' }}>
          Need something else?{' '}
          <Link href="/char-dham-yatra-cab-booking" style={{ color:'var(--navy)', fontWeight:600 }}>Cab only</Link>
          {' · '}
          <Link href="/char-dham-helicopter" style={{ color:'var(--navy)', fontWeight:600 }}>Helicopter yatra</Link>
        </span>
      </div>
    </div>
  );
}
