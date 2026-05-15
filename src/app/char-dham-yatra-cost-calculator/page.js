'use client';
import { useState } from 'react';
import Link from 'next/link';
import { SITE } from '@/data/packages';
import { SITE } from '@/data/packages';

export const metadata = {
  title: 'Char Dham Yatra Cost Calculator 2026',
  description: 'Calculate exact cost of Char Dham Yatra 2026. Add pilgrims, pony, helicopter, hotel upgrade. Packages from ₹19,500 per person from Haridwar.',
  alternates: { canonical: `${SITE.baseUrl}/char-dham-yatra-cost-calculator` },
  openGraph: {
    title: 'Char Dham Yatra Cost Calculator 2026',
    description: 'Estimate your Char Dham Yatra cost instantly. Packages from ₹19,500.',
    url: `${SITE.baseUrl}/char-dham-yatra-cost-calculator`,
    type: 'website',
  },
};


export default function CostCalculator() {
  const [form, setForm] = useState({
    pilgrims: 2,
    packageType: 'standard',
    startCity: 'haridwar',
    ponyKedarnath: false,
    ponyYamunotri: false,
    helicopter: false,
    hotelUpgrade: false,
    insurance: false,
    transport: 'haridwar',
  });
  const [showResult, setShowResult] = useState(false);

  const BASE = {
    standard: 19500,
    deluxe: 27500,
    senior: 24500,
    helicopter: 85000,
  };

  const ADDONS = {
    ponyKedarnath: 4000,
    ponyYamunotri: 2000,
    helicopter: 8500,
    hotelUpgrade: 3000,
    insurance: 500,
  };

  const CITY_ADDON = {
    haridwar: 0,
    delhi: 3000,
    mumbai: 6000,
    bangalore: 7500,
    hyderabad: 6500,
    chennai: 8000,
    pune: 5500,
  };

  function calc() {
    let base = BASE[form.packageType];
    let addons = 0;
    if (form.ponyKedarnath) addons += ADDONS.ponyKedarnath;
    if (form.ponyYamunotri) addons += ADDONS.ponyYamunotri;
    if (form.helicopter && form.packageType !== 'helicopter') addons += ADDONS.helicopter;
    if (form.hotelUpgrade) addons += ADDONS.hotelUpgrade;
    if (form.insurance) addons += ADDONS.insurance;
    const cityAddon = CITY_ADDON[form.startCity] || 0;
    const perPerson = base + addons + cityAddon;
    const total = perPerson * form.pilgrims;
    const trainCost = form.startCity !== 'haridwar' ? Math.round((form.pilgrims * 1500)) : 0;
    return { perPerson, total, addons, cityAddon, trainCost, base };
  }

  const result = calc();

  const set = (k, v) => { setForm(f => ({ ...f, [k]: v })); setShowResult(false); };

  const inputStyle = {
    width:'100%', padding:'10px 12px', border:'1.5px solid var(--border)',
    borderRadius:8, fontSize:14, fontFamily:'var(--font)', color:'var(--text)',
    background:'var(--bg)', outline:'none',
  };
  const labelStyle = {
    display:'block', fontSize:11.5, fontWeight:700,
    color:'var(--text-muted)', textTransform:'uppercase',
    letterSpacing:'0.07em', marginBottom:6,
  };
  const toggleStyle = (active) => ({
    display:'flex', alignItems:'center', gap:10, padding:'10px 14px',
    borderRadius:9, border:`1.5px solid ${active ? 'var(--navy)' : 'var(--border)'}`,
    background: active ? 'var(--navy-light)' : '#fff',
    cursor:'pointer', fontSize:13.5, color:'var(--text)',
    fontFamily:'var(--font)', transition:'all .15s',
    userSelect:'none',
  });

  return (
    <div style={{ maxWidth:760, margin:'0 auto', padding:'40px 20px 60px' }}>

      {/* Header */}
      <div style={{ textAlign:'center', marginBottom:32 }}>
        <span style={{ background:'var(--navy-light)', color:'var(--navy)', fontSize:11, fontWeight:700, letterSpacing:'0.12em', textTransform:'uppercase', padding:'5px 16px', borderRadius:100, display:'inline-block', marginBottom:14 }}>
          Free Tool
        </span>
        <h1 style={{ fontFamily:'var(--font-display)', fontSize:'clamp(1.6rem,4vw,2.4rem)', fontWeight:600, color:'var(--navy)', marginBottom:10, letterSpacing:'-0.03em' }}>
          Char Dham Yatra Cost Calculator 2026
        </h1>
        <h2 style={{ fontSize: '1.5rem', fontWeight: 600, margin: '1.5rem 0 1rem', color: '#1a1a1a' }}>Calculate Your Yatra Cost</h2>
        <p style={{ fontSize:14.5, color:'var(--text-muted)', lineHeight:1.7 }}>
          Get an instant personalised cost estimate for your Char Dham Yatra. Adjust options below.
        </p>
      </div>

      <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(min(100%,280px),1fr))', gap:16, marginBottom:16 }}>

        {/* Pilgrims */}
        <div>
          <label style={labelStyle}>Number of pilgrims</label>
          <select value={form.pilgrims} onChange={e => set('pilgrims', +e.target.value)} style={inputStyle}>
            {[1,2,3,4,5,6,8,10,12,15,20].map(n => <option key={n} value={n}>{n} pilgrim{n>1?'s':''}</option>)}
          </select>
        </div>

        {/* Start city */}
        <div>
          <label style={labelStyle}>Your city</label>
          <select value={form.startCity} onChange={e => set('startCity', e.target.value)} style={inputStyle}>
            <option value="haridwar">Haridwar / Rishikesh</option>
            <option value="delhi">Delhi / NCR</option>
            <option value="mumbai">Mumbai</option>
            <option value="bangalore">Bangalore</option>
            <option value="hyderabad">Hyderabad</option>
            <option value="chennai">Chennai</option>
            <option value="pune">Pune</option>
          </select>
        </div>
      </div>

      {/* Package type */}
      <div style={{ marginBottom:16 }}>
        <label style={labelStyle}>Package type</label>
        <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fill,minmax(160px,1fr))', gap:8 }}>
          {[
            { val:'standard', label:'Standard', sub:'9N/10D · ₹19,500/pp' },
            { val:'deluxe', label:'Deluxe', sub:'11N/12D · ₹27,500/pp' },
            { val:'senior', label:'Senior Special', sub:'12N/13D · ₹24,500/pp' },
            { val:'helicopter', label:'Helicopter', sub:'5N/6D · ₹85,000/pp' },
          ].map(p => (
            <button key={p.val} onClick={() => set('packageType', p.val)}
              style={{ ...toggleStyle(form.packageType === p.val), flexDirection:'column', alignItems:'flex-start', padding:'12px 14px' }}>
              <div style={{ fontWeight:700, fontSize:13.5 }}>{p.label}</div>
              <div style={{ fontSize:11.5, color:'var(--text-muted)', marginTop:2 }}>{p.sub}</div>
            </button>
          ))}
        </div>
      </div>

      {/* Add-ons */}
      {form.packageType !== 'helicopter' && (
        <div style={{ marginBottom:20 }}>
          <label style={labelStyle}>Add-ons (optional)</label>
          <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fill,minmax(200px,1fr))', gap:8 }}>
            {[
              { key:'ponyKedarnath', label:'🐴 Pony at Kedarnath', sub:'+₹4,000/person' },
              { key:'ponyYamunotri', label:'🐴 Pony at Yamunotri', sub:'+₹2,000/person' },
              { key:'helicopter', label:'🚁 Kedarnath Helicopter', sub:'+₹8,500/person' },
              { key:'hotelUpgrade', label:'🏨 Hotel Upgrade', sub:'+₹3,000/person' },
              { key:'insurance', label:'🛡️ Travel Insurance', sub:'+₹500/person' },
            ].map(a => (
              <button key={a.key} onClick={() => set(a.key, !form[a.key])}
                style={{ ...toggleStyle(form[a.key]), justifyContent:'space-between' }}>
                <div>
                  <div style={{ fontWeight:600 }}>{a.label}</div>
                  <div style={{ fontSize:11.5, color:'var(--text-muted)', marginTop:1 }}>{a.sub}</div>
                </div>
                <div style={{ width:18, height:18, borderRadius:'50%', border:`2px solid ${form[a.key] ? 'var(--navy)' : 'var(--border)'}`, background: form[a.key] ? 'var(--navy)' : 'transparent', flexShrink:0, display:'flex', alignItems:'center', justifyContent:'center' }}>
                  {form[a.key] && <svg width="9" height="7" fill="none" stroke="#fff" strokeWidth="2"><path d="M1 3.5l2.5 2.5 5-5"/></svg>}
                </div>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Calculate button */}
      <button
        onClick={() => setShowResult(true)}
        style={{ width:'100%', padding:'14px', background:'var(--navy)', color:'#fff', border:'none', borderRadius:10, fontSize:15, fontWeight:700, cursor:'pointer', fontFamily:'var(--font)' }}>
        Calculate My Yatra Cost →
      </button>

      {/* Result */}
      {showResult && (
        <div style={{ marginTop:24, background:'var(--navy)', borderRadius:16, overflow:'hidden' }}>
          <div style={{ padding:'24px', textAlign:'center', borderBottom:'1px solid rgba(255,255,255,0.1)' }}>
            <div style={{ color:'rgba(255,255,255,0.6)', fontSize:13, marginBottom:6 }}>
              Estimated Total for {form.pilgrims} pilgrim{form.pilgrims > 1 ? 's' : ''}
            </div>
            <div style={{ fontWeight:800, fontSize:48, color:'#fff', lineHeight:1, fontFamily:'var(--font-display)', letterSpacing:'-0.04em' }}>
              ₹{result.total.toLocaleString('en-IN')}
            </div>
            <div style={{ color:'rgba(255,255,255,0.55)', fontSize:13, marginTop:6 }}>
              ₹{result.perPerson.toLocaleString('en-IN')} per person
            </div>
          </div>

          {/* Breakdown */}
          <div style={{ padding:'20px 24px' }}>
            <div style={{ fontSize:12, fontWeight:700, color:'rgba(255,255,255,0.5)', textTransform:'uppercase', letterSpacing:'0.1em', marginBottom:10 }}>Breakdown</div>
            {[
              { label:`Base package (${form.packageType.charAt(0).toUpperCase() + form.packageType.slice(1)})`, val: result.base },
              ...(result.addons > 0 ? [{ label:'Add-ons', val: result.addons }] : []),
              ...(result.cityAddon > 0 ? [{ label:`${form.startCity.charAt(0).toUpperCase() + form.startCity.slice(1)} pickup/drop`, val: result.cityAddon }] : []),
              ...(result.trainCost > 0 ? [{ label:'Train/flight to Haridwar (est.)', val: result.trainCost }] : []),
            ].map(b => (
              <div key={b.label} style={{ display:'flex', justifyContent:'space-between', padding:'6px 0', borderBottom:'1px solid rgba(255,255,255,0.07)', fontSize:13.5, color:'rgba(255,255,255,0.75)' }}>
                <span>{b.label} × {form.pilgrims}</span>
                <span style={{ fontWeight:600, color:'#fff' }}>₹{(b.val * form.pilgrims).toLocaleString('en-IN')}</span>
              </div>
            ))}
          </div>

          <div style={{ padding:'16px 24px', background:'rgba(255,255,255,0.05)' }}>
            <p style={{ fontSize:13, color:'rgba(255,255,255,0.6)', margin:'0 0 14px', lineHeight:1.6 }}>
              This is an estimate. WhatsApp us for an exact quote — we reply within 2 hours. Zero commission, all-inclusive.
            </p>
            <div style={{ display:'flex', gap:10, flexWrap:'wrap' }}>
              <a href={`https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(`Namaste! I used your cost calculator. ${form.pilgrims} pilgrims, ${form.packageType} package from ${form.startCity}. Estimated ₹${result.total.toLocaleString('en-IN')}. Please confirm exact price.`)}`}
                target="_blank" rel="nofollow noopener noreferrer"
                style={{ flex:1, background:'#25D366', color:'#fff', padding:'11px', borderRadius:9, fontWeight:700, fontSize:13.5, textDecoration:'none', textAlign:'center' }}>
                💬 Get Exact Quote on WhatsApp
              </a>
              <a href='tel:+917017082807'
                style={{ flex:1, background:'rgba(255,255,255,0.12)', color:'#fff', padding:'11px', borderRadius:9, fontWeight:700, fontSize:13.5, textDecoration:'none', textAlign:'center', border:'1px solid rgba(255,255,255,0.2)' }}>
                📞 Call Us
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Credit/embed note for backlinks */}
      <div style={{ marginTop:20, padding:'14px 16px', background:'var(--navy-light)', borderRadius:10, border:'1px solid rgba(15,43,91,0.1)', fontSize:12.5, color:'var(--text-muted)' }}>
        <strong style={{ color:'var(--navy)' }}>Using this calculator on your blog or website?</strong> You&apos;re welcome to link to or embed this tool. Credit: <a href={SITE.baseUrl} style={{ color:'var(--navy)', fontWeight:600 }}>Shiv Ganga Travels, Haridwar</a>
      </div>

      <div style={{ marginTop:20, display:'flex', flexWrap:'wrap', gap:8 }}>
        {[
          {label:'View Char Dham Packages →', href:'/char-dham-yatra'},
          {label:'Cost Breakdown Blog →', href:'/blog/char-dham-yatra-cost'},
          {label:'Packing List →', href:'/blog/char-dham-yatra-packing-list'},
        ].map(l => (
          <Link key={l.href} href={l.href} style={{ background:'#fff', color:'var(--navy)', padding:'7px 14px', borderRadius:8, fontSize:12.5, fontWeight:600, textDecoration:'none', border:'1px solid var(--border)' }}>{l.label}</Link>
        ))}
      </div>
    </div>
  );
}
