'use client';
import { useState, useMemo } from 'react';
import Link from 'next/link';
import { SITE } from '@/data/packages';

/* Range-based Char Dham cost estimator.
   Every tier is a LOW–HIGH band (matching our /blog/char-dham-yatra-cost ranges
   and the real 2026 market), adjusted for group size, season and start city.
   Output is an honest range, not false precision. */

const TIERS = {
  budget:    { label:'Budget',    sub:'Guesthouses · shared Tempo', nights:'9N/10D',  lo:18500, hi:28000 },
  deluxe:    { label:'Deluxe',    sub:'2–3★ hotels · Innova',       nights:'11N/12D', lo:28000, hi:40000 },
  luxury:    { label:'Luxury',    sub:'Premium hotels · private',   nights:'11N/12D', lo:45000, hi:65000 },
  helicopter:{ label:'Helicopter',sub:'5N/6D · VIP darshan',        nights:'5N/6D',   lo:165000, hi:250000 },
};

// Per-person add-ons as ranges (low–high)
const ADDONS = {
  ponyKedarnath: { label:'🐴 Pony at Kedarnath', lo:3500, hi:5000 },
  ponyYamunotri: { label:'🐴 Pony at Yamunotri', lo:1500, hi:2500 },
  helicopter:    { label:'🚁 Kedarnath Helicopter (Sersi–Guptkashi)', lo:6390, hi:12762 },
  vipDarshan:    { label:'🛕 VIP Darshan (all dhams)', lo:1100, hi:4400 },
  insurance:     { label:'🛡️ Travel Insurance', lo:400, hi:700 },
};

// Start-city pickup add-on per person (low–high). Haridwar = base.
const CITY = {
  haridwar:  { label:'Haridwar / Rishikesh / Dehradun', lo:0, hi:0 },
  delhi:     { label:'Delhi / NCR / Noida', lo:2000, hi:3500 },
  jaipur:    { label:'Jaipur', lo:2500, hi:4000 },
  lucknow:   { label:'Lucknow', lo:2500, hi:4500 },
  pune:      { label:'Pune', lo:5000, hi:7000 },
  mumbai:    { label:'Mumbai', lo:5500, hi:8000 },
  hyderabad: { label:'Hyderabad', lo:5500, hi:8000 },
  bangalore: { label:'Bangalore', lo:6500, hi:9000 },
  chennai:   { label:'Chennai', lo:7000, hi:9500 },
};

// Group-size discount on the road portion — larger groups share vehicle/guide cost.
function groupFactor(n) {
  if (n >= 12) return 0.85;   // –15%
  if (n >= 6)  return 0.92;   // –8%
  if (n >= 4)  return 0.96;   // –4%
  if (n === 1) return 1.15;   // solo surcharge (no sharing)
  return 1.0;                 // 2–3
}

// Season multiplier on the package band.
const SEASON = {
  shoulder: { label:'Sep–Oct (cheaper)', f:0.95 },
  standard: { label:'Apr / Nov',         f:1.0 },
  peak:     { label:'May–Jun (peak)',    f:1.12 },
};

const FAQS = [
  { q:'How much does the Char Dham Yatra cost per person in 2026?', a:'Per person, a road-based Char Dham Yatra from Haridwar costs roughly ₹18,500–₹28,000 on a budget tier, ₹28,000–₹40,000 deluxe, and ₹45,000–₹65,000 luxury. A full helicopter package runs ₹1.65–2.5 lakh. The exact figure depends on group size, season, start city and add-ons like pony or VIP darshan — which is what this calculator estimates.' },
  { q:'Why is the cost shown as a range, not one fixed price?', a:'Because an honest Char Dham quote is a range until your dates and group are confirmed. Hotel rates swing with season, fuel and vehicle cost drop per head as the group grows, and add-ons are optional. A single number on other sites is usually the lowest possible figure shown without the conditions. We show the realistic low–high band, then confirm an exact fixed price on WhatsApp.' },
  { q:'Do larger groups pay less per person?', a:'Yes. Transport and guide costs are shared, so per-head price falls as the group grows. Groups of 4+ save around 4%, 6+ save about 8%, and 12+ save roughly 15% versus a couple. A solo pilgrim pays a small surcharge since nothing is shared — joining a group departure is cheaper.' },
  { q:'Does the season change the price?', a:'It does. May–June is peak and costs about 12% more as hotels and vehicles are in highest demand. September–October is the value window, typically around 5% cheaper, with thinner crowds and clear post-monsoon views. April and November sit in between.' },
  { q:'What is included in these estimates?', a:'The package bands include AC transport, twin-sharing hotels, daily breakfast and dinner, guide, pujari, oxygen cylinder and Char Dham registration assistance. They exclude train/flight to Haridwar, pony/palki, helicopter and personal expenses — those are added separately in the calculator where relevant.' },
];

export default function CostCalculator() {
  const [pilgrims, setPilgrims] = useState(2);
  const [tier, setTier] = useState('budget');
  const [city, setCity] = useState('haridwar');
  const [season, setSeason] = useState('standard');
  const [addons, setAddons] = useState({});
  const [show, setShow] = useState(false);

  const toggle = (k) => { setAddons(a => ({ ...a, [k]: !a[k] })); setShow(false); };
  const reset = (fn) => (v) => { fn(v); setShow(false); };

  const r = useMemo(() => {
    const t = TIERS[tier];
    const gf = groupFactor(pilgrims);
    const sf = SEASON[season].f;
    // base band, season + group adjusted
    let baseLo = t.lo * sf * gf;
    let baseHi = t.hi * sf * gf;
    // helicopter package: group/season affect it less, no road add-ons
    const isHeli = tier === 'helicopter';
    let addLo = 0, addHi = 0;
    if (!isHeli) {
      Object.keys(addons).forEach(k => { if (addons[k] && ADDONS[k]) { addLo += ADDONS[k].lo; addHi += ADDONS[k].hi; } });
    }
    const c = CITY[city];
    const ppLo = Math.round(baseLo + addLo + c.lo);
    const ppHi = Math.round(baseHi + addHi + c.hi);
    return {
      ppLo, ppHi,
      totLo: ppLo * pilgrims, totHi: ppHi * pilgrims,
      baseLo: Math.round(baseLo), baseHi: Math.round(baseHi),
      addLo, addHi, cityLo: c.lo, cityHi: c.hi, isHeli,
    };
  }, [pilgrims, tier, city, season, addons]);

  const faqSchema = { '@context':'https://schema.org','@type':'FAQPage', mainEntity: FAQS.map(f=>({ '@type':'Question', name:f.q, acceptedAnswer:{ '@type':'Answer', text:f.a } })) };
  const fmt = (n) => '₹' + n.toLocaleString('en-IN');
  const range = (lo, hi) => lo === hi ? fmt(lo) : `${fmt(lo)} – ${fmt(hi)}`;

  const input = { width:'100%', padding:'10px 12px', border:'1.5px solid var(--border)', borderRadius:8, fontSize:14, fontFamily:'var(--font)', color:'var(--text)', background:'var(--bg)', outline:'none' };
  const lbl = { display:'block', fontSize:11.5, fontWeight:700, color:'var(--text-muted)', textTransform:'uppercase', letterSpacing:'0.07em', marginBottom:6 };
  const tog = (a) => ({ display:'flex', alignItems:'center', gap:10, padding:'10px 14px', borderRadius:9, border:`1.5px solid ${a?'var(--navy)':'var(--border)'}`, background:a?'var(--navy-light)':'#fff', cursor:'pointer', fontSize:13.5, color:'var(--text)', fontFamily:'var(--font)', transition:'all .15s', userSelect:'none' });

  const waMsg = encodeURIComponent(`Namaste! I used your cost calculator: ${pilgrims} pilgrim(s), ${TIERS[tier].label} tier, from ${CITY[city].label}, ${SEASON[season].label}. Estimate ${range(r.totLo, r.totHi)} total. Please confirm an exact price.`);

  return (
    <div style={{ maxWidth:760, margin:'0 auto', padding:'40px 20px 60px' }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <div style={{ textAlign:'center', marginBottom:32 }}>
        <span style={{ background:'var(--navy-light)', color:'var(--navy)', fontSize:11, fontWeight:700, letterSpacing:'0.12em', textTransform:'uppercase', padding:'5px 16px', borderRadius:100, display:'inline-block', marginBottom:14 }}>Free Tool</span>
        <h1 style={{ fontFamily:'var(--font-display)', fontSize:'clamp(1.6rem,4vw,2.4rem)', fontWeight:600, color:'var(--navy)', marginBottom:10, letterSpacing:'-0.03em' }}>Char Dham Yatra Cost Calculator 2026</h1>
        <p style={{ fontSize:14.5, color:'var(--text-muted)', lineHeight:1.7, maxWidth:560, margin:'0 auto' }}>Get a realistic <strong>price range</strong> for your Char Dham Yatra — adjusted for your group size, season, city and add-ons. No false single number; an honest low–high band, then an exact quote on WhatsApp.</p>
      </div>

      <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(min(100%,240px),1fr))', gap:16, marginBottom:16 }}>
        <div>
          <label style={lbl}>Number of pilgrims</label>
          <select value={pilgrims} onChange={e=>reset(setPilgrims)(+e.target.value)} style={input}>
            {[1,2,3,4,5,6,8,10,12,15,20,25].map(n=> <option key={n} value={n}>{n} pilgrim{n>1?'s':''}</option>)}
          </select>
          <div style={{ fontSize:11, color:'var(--teal)', fontWeight:600, marginTop:5 }}>
            {pilgrims>=12?'✓ 15% group discount applied':pilgrims>=6?'✓ 8% group discount applied':pilgrims>=4?'✓ 4% group discount applied':pilgrims===1?'Solo — join a group to save':'Add 4+ pilgrims to unlock group rates'}
          </div>
        </div>
        <div>
          <label style={lbl}>Your city</label>
          <select value={city} onChange={e=>reset(setCity)(e.target.value)} style={input}>
            {Object.entries(CITY).map(([k,v])=> <option key={k} value={k}>{v.label}</option>)}
          </select>
        </div>
        <div>
          <label style={lbl}>Travel month</label>
          <select value={season} onChange={e=>reset(setSeason)(e.target.value)} style={input}>
            {Object.entries(SEASON).map(([k,v])=> <option key={k} value={k}>{v.label}</option>)}
          </select>
        </div>
      </div>

      <div style={{ marginBottom:16 }}>
        <label style={lbl}>Package tier</label>
        <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fill,minmax(160px,1fr))', gap:8 }}>
          {Object.entries(TIERS).map(([k,t])=>(
            <button key={k} onClick={()=>reset(setTier)(k)} style={{ ...tog(tier===k), flexDirection:'column', alignItems:'flex-start', padding:'12px 14px' }}>
              <div style={{ fontWeight:700, fontSize:13.5 }}>{t.label}</div>
              <div style={{ fontSize:11, color:'var(--text-muted)', marginTop:2 }}>{t.nights} · {t.sub}</div>
              <div style={{ fontSize:11.5, color:'var(--teal)', fontWeight:700, marginTop:4 }}>{range(t.lo,t.hi)}/pp</div>
            </button>
          ))}
        </div>
      </div>

      {tier !== 'helicopter' && (
        <div style={{ marginBottom:20 }}>
          <label style={lbl}>Add-ons (optional · per person)</label>
          <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fill,minmax(220px,1fr))', gap:8 }}>
            {Object.entries(ADDONS).map(([k,a])=>(
              <button key={k} onClick={()=>toggle(k)} style={{ ...tog(!!addons[k]), justifyContent:'space-between' }}>
                <div>
                  <div style={{ fontWeight:600 }}>{a.label}</div>
                  <div style={{ fontSize:11.5, color:'var(--text-muted)', marginTop:1 }}>+{range(a.lo,a.hi)}</div>
                </div>
                <div style={{ width:18, height:18, borderRadius:'50%', border:`2px solid ${addons[k]?'var(--navy)':'var(--border)'}`, background:addons[k]?'var(--navy)':'transparent', flexShrink:0, display:'flex', alignItems:'center', justifyContent:'center' }}>
                  {addons[k] && <svg width="9" height="7" fill="none" stroke="#fff" strokeWidth="2"><path d="M1 3.5l2.5 2.5 5-5"/></svg>}
                </div>
              </button>
            ))}
          </div>
        </div>
      )}

      <button onClick={()=>setShow(true)} style={{ width:'100%', padding:'14px', background:'var(--navy)', color:'#fff', border:'none', borderRadius:10, fontSize:15, fontWeight:700, cursor:'pointer', fontFamily:'var(--font)' }}>
        Calculate My Cost Range →
      </button>

      {show && (
        <div style={{ marginTop:24, background:'var(--navy)', borderRadius:16, overflow:'hidden' }}>
          <div style={{ padding:'24px', textAlign:'center', borderBottom:'1px solid rgba(255,255,255,0.1)' }}>
            <div style={{ color:'rgba(255,255,255,0.6)', fontSize:13, marginBottom:6 }}>Estimated total for {pilgrims} pilgrim{pilgrims>1?'s':''}</div>
            <div style={{ fontWeight:800, fontSize:'clamp(1.8rem,6vw,2.6rem)', color:'#fff', lineHeight:1.05, fontFamily:'var(--font-display)', letterSpacing:'-0.03em' }}>{range(r.totLo, r.totHi)}</div>
            <div style={{ color:'rgba(255,255,255,0.55)', fontSize:13, marginTop:6 }}>{range(r.ppLo, r.ppHi)} per person · {SEASON[season].label}</div>
          </div>
          <div style={{ padding:'20px 24px' }}>
            <div style={{ fontSize:12, fontWeight:700, color:'rgba(255,255,255,0.5)', textTransform:'uppercase', letterSpacing:'0.1em', marginBottom:10 }}>Per-person breakdown</div>
            {[
              { label:`${TIERS[tier].label} package (${TIERS[tier].nights})`, lo:r.baseLo, hi:r.baseHi },
              ...(r.addLo>0 ? [{ label:'Add-ons', lo:r.addLo, hi:r.addHi }] : []),
              ...(r.cityLo>0 || r.cityHi>0 ? [{ label:`${CITY[city].label} pickup`, lo:r.cityLo, hi:r.cityHi }] : []),
            ].map(b=>(
              <div key={b.label} style={{ display:'flex', justifyContent:'space-between', padding:'6px 0', borderBottom:'1px solid rgba(255,255,255,0.07)', fontSize:13.5, color:'rgba(255,255,255,0.75)' }}>
                <span>{b.label}</span>
                <span style={{ fontWeight:600, color:'#fff' }}>{range(b.lo, b.hi)}</span>
              </div>
            ))}
            {pilgrims>=4 && !r.isHeli && (
              <div style={{ display:'flex', justifyContent:'space-between', padding:'6px 0', fontSize:13, color:'#86efac' }}>
                <span>Group discount</span><span style={{ fontWeight:600 }}>{pilgrims>=12?'–15%':pilgrims>=6?'–8%':'–4%'} applied</span>
              </div>
            )}
          </div>
          <div style={{ padding:'16px 24px', background:'rgba(255,255,255,0.05)' }}>
            <p style={{ fontSize:13, color:'rgba(255,255,255,0.6)', margin:'0 0 14px', lineHeight:1.6 }}>This is a realistic estimate range. WhatsApp us for an exact, fixed all-inclusive quote — we reply within 2 hours. Zero commission, no hidden charges.</p>
            <div style={{ display:'flex', gap:10, flexWrap:'wrap' }}>
              <a href={`https://wa.me/${SITE.whatsapp}?text=${waMsg}`} target="_blank" rel="nofollow noopener noreferrer" style={{ flex:1, minWidth:180, background:'#25D366', color:'#fff', padding:'11px', borderRadius:9, fontWeight:700, fontSize:13.5, textDecoration:'none', textAlign:'center' }}>💬 Get Exact Quote</a>
              <a href={`tel:${SITE.phone}`} style={{ flex:1, minWidth:120, background:'rgba(255,255,255,0.12)', color:'#fff', padding:'11px', borderRadius:9, fontWeight:700, fontSize:13.5, textDecoration:'none', textAlign:'center', border:'1px solid rgba(255,255,255,0.2)' }}>📞 Call Us</a>
            </div>
          </div>
        </div>
      )}

      {/* FAQ — visible + schema-backed for ranking */}
      <div style={{ marginTop:36 }}>
        <h2 style={{ fontFamily:'var(--font-display)', fontSize:'1.4rem', fontWeight:700, color:'var(--navy)', marginBottom:14 }}>Char Dham Yatra Cost — FAQs</h2>
        <div style={{ display:'flex', flexDirection:'column', gap:10 }}>
          {FAQS.map(f=>(
            <div key={f.q} style={{ background:'#fff', border:'1px solid var(--border)', borderRadius:10, padding:'14px 16px' }}>
              <div style={{ fontWeight:700, fontSize:14.5, color:'var(--navy)', marginBottom:6 }}>{f.q}</div>
              <div style={{ fontSize:14, color:'var(--text-mid)', lineHeight:1.75 }}>{f.a}</div>
            </div>
          ))}
        </div>
      </div>

      <div style={{ marginTop:20, padding:'14px 16px', background:'var(--navy-light)', borderRadius:10, border:'1px solid rgba(15,43,91,0.1)', fontSize:12.5, color:'var(--text-muted)' }}>
        <strong style={{ color:'var(--navy)' }}>Using this calculator on your blog?</strong> You&apos;re welcome to link to it. Credit: <a href={SITE.baseUrl} style={{ color:'var(--navy)', fontWeight:600 }}>Shiv Ganga Travels, Haridwar</a>
      </div>

      <div style={{ marginTop:20, display:'flex', flexWrap:'wrap', gap:8 }}>
        {[
          {label:'Full Cost Breakdown →', href:'/blog/char-dham-yatra-cost'},
          {label:'View Char Dham Packages →', href:'/char-dham-yatra'},
          {label:'Helicopter Booking →', href:'/blog/kedarnath-helicopter-booking'},
          {label:'Packing List →', href:'/blog/char-dham-yatra-packing-list'},
        ].map(l=>(
          <Link key={l.href} href={l.href} style={{ background:'#fff', color:'var(--navy)', padding:'7px 14px', borderRadius:8, fontSize:12.5, fontWeight:600, textDecoration:'none', border:'1px solid var(--border)' }}>{l.label}</Link>
        ))}
      </div>
    </div>
  );
}
