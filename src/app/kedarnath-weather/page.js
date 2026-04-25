import Link from 'next/link';
import { SITE } from '@/data/packages';
export const metadata = {
  title: 'Kedarnath Weather 2026 — Month-wise Temperature, Best Time & What to Wear',
  description: 'Kedarnath weather guide 2026. Month-by-month temperatures, rainfall, snowfall. Best time to visit: May–June and Sept–Oct. What to wear at 3,583m altitude.',
  keywords: ['kedarnath weather','kedarnath temperature','kedarnath weather in may','kedarnath weather in june','kedarnath best time to visit 2026','kedarnath snowfall'],
  alternates: { canonical: `${SITE.baseUrl}/kedarnath-weather` },
};
const weather = [
  {month:'April',temp:'−2°C to 8°C',snow:'Heavy snow possible',rain:'Low',visit:'⚠️ Temple opens Apr 22 — cold, off-peak, less crowded',wear:'Heavy wool, thermals, snow boots'},
  {month:'May',temp:'5°C to 15°C',snow:'Occasional',rain:'Low–Medium',visit:'✅ Best time — flowers in bloom, clear skies',wear:'Fleece + windproof jacket + wool cap'},
  {month:'June',temp:'8°C to 18°C',snow:'None',rain:'Medium',visit:'✅ Peak season — crowded but pleasant',wear:'Light jacket + layers + rain poncho'},
  {month:'July',temp:'10°C to 17°C',snow:'None',rain:'Heavy (monsoon)',visit:'⚠️ Landslide risk — not recommended',wear:'Full rain gear, waterproof boots'},
  {month:'August',temp:'10°C to 16°C',snow:'None',rain:'Heavy (monsoon)',visit:'⚠️ Avoid — road closures frequent',wear:'Full rain gear mandatory'},
  {month:'September',temp:'8°C to 15°C',snow:'None at lower elevations',rain:'Low–Medium',visit:'✅ Excellent — post-monsoon clarity',wear:'Fleece + jacket + layers'},
  {month:'October',temp:'2°C to 10°C',snow:'Upper peaks',rain:'Very low',visit:'✅ Best for photography — crystal clear views',wear:'Heavy jacket + thermals + warm hat'},
  {month:'November',temp:'−5°C to 3°C',snow:'Heavy',rain:'Very low',visit:'⚠️ Temple closes Nov 11 — extreme cold',wear:'Full winter gear, expedition quality'},
];
const h2 = { fontFamily:'var(--font-display)', fontSize:'1.4rem', fontWeight:600, color:'var(--navy)', letterSpacing:'-0.02em', marginBottom:12, marginTop:32 };
const p  = { fontSize:15, color:'var(--text-mid)', lineHeight:1.85, marginBottom:16 };
export default function KedarnathWeather() {
  return (<>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html:JSON.stringify({'@context':'https://schema.org','@type':'WebPage',name:'Kedarnath Weather Guide 2026',description:'Month-by-month Kedarnath weather guide with temperatures, snowfall, and best time to visit.',url:`${SITE.baseUrl}/kedarnath-weather`}) }}/>
    <section style={{ background:'linear-gradient(145deg,var(--navy) 0%,var(--navy-mid) 60%,var(--teal) 100%)', padding:'56px 20px 44px', textAlign:'center' }}>
      <div style={{ maxWidth:820, margin:'0 auto' }}>
        <span style={{ background:'rgba(232,146,10,0.18)', color:'#FFD166', fontSize:11, fontWeight:700, letterSpacing:'0.12em', textTransform:'uppercase', padding:'5px 16px', borderRadius:100, display:'inline-block', marginBottom:16 }}>🌤️ Weather Guide · 3,583m</span>
        <h1 className="display-title" style={{ color:'#fff', fontSize:'clamp(1.8rem,4.5vw,3rem)', marginBottom:14 }}>Kedarnath Weather 2026 — Month-wise Guide</h1>
        <p style={{ color:'rgba(255,255,255,0.8)', fontSize:15, lineHeight:1.7 }}>Temperature, snowfall, rainfall and best visiting windows for each month</p>
      </div>
    </section>
    <nav style={{ background:'var(--bg)', borderBottom:'1px solid var(--border)', padding:'10px 20px' }}>
      <div style={{ maxWidth:'var(--container)', margin:'0 auto', fontSize:12, color:'var(--text-muted)', display:'flex', gap:6, flexWrap:'wrap' }}>
        <Link href="/" style={{ color:'var(--navy)', textDecoration:'none' }}>Home</Link><span>›</span>
        <Link href="/kedarnath-yatra" style={{ color:'var(--navy)', textDecoration:'none' }}>Kedarnath Yatra</Link><span>›</span><span>Weather Guide</span>
      </div>
    </nav>
    <div style={{ maxWidth:900, margin:'0 auto', padding:'40px 20px 60px' }}>
      <p style={p}>Kedarnath sits at 3,583 metres — one of the highest motorable pilgrimage destinations in India. The weather here is dramatically different from the plains below. Even in peak summer (May–June), temperatures at night can drop to 4–5°C. Understanding the weather cycle is essential for planning a safe and comfortable yatra.</p>
      <div style={{ background:'#dcfce7', border:'1px solid #86efac', borderRadius:12, padding:'14px 18px', marginBottom:24 }}>
        <div style={{ fontWeight:700, fontSize:13.5, color:'#15803d', marginBottom:6 }}>✅ Best months to visit Kedarnath</div>
        <p style={{ margin:0, fontSize:13.5, color:'var(--text-mid)' }}><strong>May–June</strong> and <strong>September–October</strong> are the two ideal windows. May–June has clear skies, mild temperatures, and blooming rhododendrons. September–October has crystal-clear post-monsoon visibility — best for Himalayan photography. Avoid July–August (monsoon, landslides).</p>
      </div>
      <h2 style={h2}>Month-by-Month Weather</h2>
      <div style={{ background:'#fff', borderRadius:12, border:'1px solid var(--border)', overflow:'hidden', marginBottom:28 }}>
        <table style={{ width:'100%', borderCollapse:'collapse', fontSize:13 }}>
          <thead>
            <tr style={{ background:'var(--navy-light)' }}>
              {['Month','Temperature','Snow','Rain','Visit?','What to Wear'].map(h=>(
                <th key={h} style={{ padding:'10px 12px', textAlign:'left', fontWeight:700, fontSize:11, color:'var(--navy)', textTransform:'uppercase', letterSpacing:'0.05em' }}>{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {weather.map((w,i)=>(
              <tr key={w.month} style={{ borderTop:'1px solid var(--border)', background: i%2===0?'#fff':'var(--bg)' }}>
                <td style={{ padding:'10px 12px', fontWeight:700, color:'var(--navy)' }}>{w.month}</td>
                <td style={{ padding:'10px 12px', color:'var(--text-mid)' }}>{w.temp}</td>
                <td style={{ padding:'10px 12px', color:'var(--text-muted)', fontSize:12 }}>{w.snow}</td>
                <td style={{ padding:'10px 12px', color:'var(--text-muted)', fontSize:12 }}>{w.rain}</td>
                <td style={{ padding:'10px 12px', fontSize:12 }}>{w.visit.slice(0,2)}</td>
                <td style={{ padding:'10px 12px', color:'var(--text-mid)', fontSize:12 }}>{w.wear}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <h2 style={h2}>Essential Packing List for Kedarnath Weather</h2>
      <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fill,minmax(200px,1fr))', gap:10, marginBottom:28 }}>
        {[{cat:'Clothing',items:['Thermal inners (2 sets)','Fleece jacket','Windproof outer jacket','Warm cap & gloves','Wool socks (3–4 pairs)']},{cat:'Footwear',items:['Waterproof trekking boots','Extra dry socks','Gaiters (if visiting Oct–Nov)']},{cat:'Essentials',items:['Sunscreen SPF 50+','Lip balm','Reusable water bottle','High-calorie snacks','Personal medicines']},{cat:'Safety',items:['Oxygen can (from Gaurikund)','Rain poncho','Trekking poles','Headtorch with spare batteries']}].map(c=>(
          <div key={c.cat} style={{ background:'#fff', borderRadius:10, padding:'14px', border:'1px solid var(--border)' }}>
            <div style={{ fontWeight:700, fontSize:13, color:'var(--navy)', marginBottom:8 }}>{c.cat}</div>
            {c.items.map(it=><div key={it} style={{ fontSize:12.5, color:'var(--text-mid)', padding:'2px 0', display:'flex', gap:5 }}><span style={{ color:'var(--teal)' }}>✓</span>{it}</div>)}
          </div>
        ))}
      </div>
      <div style={{ background:'var(--navy)', borderRadius:16, padding:'24px', textAlign:'center' }}>
        <h3 style={{ color:'#fff', fontFamily:'var(--font-display)', fontSize:'1.3rem', marginBottom:10 }}>Plan Your Kedarnath Yatra</h3>
        <p style={{ color:'rgba(255,255,255,0.75)', fontSize:13.5, marginBottom:18 }}>Best dates: May 1–June 15 and Sept 10–Oct 31 · Packages from ₹6,499</p>
        <div style={{ display:'flex', gap:10, justifyContent:'center', flexWrap:'wrap' }}>
          <a href={`https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent('Namaste! I want to plan Kedarnath Yatra 2026. Please suggest best dates.')}`} target="_blank" rel="noopener noreferrer" style={{ background:'#25D366', color:'#fff', padding:'11px 24px', borderRadius:9, fontWeight:700, fontSize:13.5, textDecoration:'none' }}>💬 WhatsApp</a>
          <Link href="/kedarnath-yatra" style={{ background:'rgba(255,255,255,0.12)', color:'#fff', padding:'11px 24px', borderRadius:9, fontWeight:700, fontSize:13.5, textDecoration:'none', border:'1px solid rgba(255,255,255,0.2)' }}>View Packages →</Link>
        </div>
      </div>
    </div>
  </>);
}
