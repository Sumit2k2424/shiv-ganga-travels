import Link from 'next/link';
import { SITE } from '@/data/packages';

export const metadata = {
  title: 'Yamunotri Weather 2026 — Month-wise Temperature, Best Time & What to Wear',
  description: 'Yamunotri weather guide 2026. Month-by-month temperatures, rainfall and best time to visit. Yamunotri is at 3,291m — what to expect each month and what to pack.',
  keywords: ['yamunotri weather','yamunotri temperature','yamunotri weather in may','yamunotri best time to visit','yamunotri weather 2026','yamunotri trek weather'],
  alternates: { canonical: `${SITE.baseUrl}/yamunotri-weather` },
  openGraph: {
    title: 'Yamunotri Weather 2026 — Month-wise Temperature Guide',
    description: 'Month-by-month Yamunotri weather guide. Best time to visit, what to pack, temperature ranges.',
    url: `${SITE.baseUrl}/yamunotri-weather`, type: 'article',
  },
};

const weather = [
  { month:'April', temp:'2°C to 12°C', snow:'Possible at higher elevations', rain:'Low', visit:'⚠️ Opens Apr 19 — cold, less crowded, beautiful snow views', wear:'Heavy wool, thermals, waterproof boots' },
  { month:'May', temp:'8°C to 18°C', snow:'Melting', rain:'Low–Medium', visit:'✅ Best time — flowers in bloom, moderate crowd', wear:'Fleece + windproof jacket + layers' },
  { month:'June', temp:'12°C to 22°C', snow:'None below trek route', rain:'Medium', visit:'✅ Peak season — very crowded, pleasant weather', wear:'Light jacket + layers + rain poncho' },
  { month:'July', temp:'13°C to 20°C', snow:'None', rain:'Heavy (monsoon)', visit:'⚠️ Landslide risk — route can close suddenly', wear:'Full rain gear, waterproof shoes mandatory' },
  { month:'August', temp:'12°C to 19°C', snow:'None', rain:'Heavy (monsoon)', visit:'⚠️ Avoid — highest landslide risk month', wear:'Full rain gear + extra change of clothes' },
  { month:'September', temp:'8°C to 17°C', snow:'None', rain:'Light–Medium', visit:'✅ Excellent — post-monsoon clarity, less crowd', wear:'Fleece + medium jacket + layers' },
  { month:'October', temp:'4°C to 12°C', snow:'Upper peaks only', rain:'Very low', visit:'✅ Beautiful autumn colours, clear Himalayan views', wear:'Heavy jacket + thermals + warm cap' },
  { month:'November', temp:'−3°C to 5°C', snow:'Heavy', rain:'Very low', visit:'⚠️ Temple closes Nov 2026 — extreme cold, avoid', wear:'Full winter expedition gear' },
];

const h2 = { fontFamily:'var(--font-display)', fontSize:'clamp(1.2rem,2.8vw,1.5rem)', fontWeight:700, color:'var(--navy)', marginBottom:14, marginTop:32 };
const p  = { fontSize:15.5, color:'#334155', lineHeight:1.85, marginBottom:16 };

export default function YamunotriWeather() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context':'https://schema.org','@type':'WebPage',
        name:'Yamunotri Weather Guide 2026',
        description:'Month-by-month Yamunotri weather guide with temperatures, best time to visit, and what to wear.',
        url:`${SITE.baseUrl}/yamunotri-weather`,
        breadcrumb:{ '@type':'BreadcrumbList', itemListElement:[
          { '@type':'ListItem', position:1, name:'Home', item:SITE.baseUrl },
          { '@type':'ListItem', position:2, name:'Yamunotri Yatra', item:`${SITE.baseUrl}/yamunotri-yatra` },
          { '@type':'ListItem', position:3, name:'Yamunotri Weather', item:`${SITE.baseUrl}/yamunotri-weather` },
        ]},
      })}}/>

      <section style={{ background:'linear-gradient(145deg,var(--navy) 0%,var(--navy-mid) 60%,var(--teal) 100%)', padding:'56px 20px 44px', textAlign:'center' }}>
        <div style={{ maxWidth:820, margin:'0 auto' }}>
          <span style={{ background:'rgba(232,146,10,0.18)', color:'#FFD166', fontSize:11, fontWeight:700, letterSpacing:'0.12em', textTransform:'uppercase', padding:'5px 16px', borderRadius:100, display:'inline-block', marginBottom:16 }}>🌤️ Weather Guide · 3,291m</span>
          <h1 className="display-title" style={{ color:'#fff', fontSize:'clamp(1.8rem,4.5vw,3rem)', marginBottom:14 }}>
            Yamunotri Weather 2026 — Month-wise Guide
          </h1>
          <p style={{ color:'rgba(255,255,255,0.8)', fontSize:15, lineHeight:1.7 }}>
            Temperature, snowfall, rainfall and the best visiting windows for each month
          </p>
        </div>
      </section>

      <nav style={{ background:'var(--bg)', borderBottom:'1px solid var(--border)', padding:'10px 20px' }}>
        <div style={{ maxWidth:'var(--container)', margin:'0 auto', fontSize:12, color:'var(--text-muted)', display:'flex', gap:6, flexWrap:'wrap' }}>
          <Link href="/" style={{ color:'var(--navy)', textDecoration:'none' }}>Home</Link><span>›</span>
          <Link href="/yamunotri-yatra" style={{ color:'var(--navy)', textDecoration:'none' }}>Yamunotri Yatra</Link><span>›</span>
          <span>Weather Guide</span>
        </div>
      </nav>

      <div style={{ maxWidth:900, margin:'0 auto', padding:'40px 20px 60px' }}>
        <p style={p}>
          Yamunotri, the westernmost shrine of the Char Dham circuit and the source of the Yamuna River, sits at 3,291 metres in the Uttarkashi district of Uttarakhand. The final stretch of the pilgrimage involves a 6km trek from Janki Chatti — and weather plays a huge role in how comfortable (or challenging) that trek is. Rain, snow, or sudden cloud cover can make the rocky mountain trail slippery and exhausting. Knowing what to expect each month is the difference between a comfortable darshan and a stressful one.
        </p>

        <div style={{ background:'#dcfce7', border:'1px solid #86efac', borderRadius:12, padding:'14px 18px', marginBottom:24 }}>
          <div style={{ fontWeight:700, fontSize:13.5, color:'#15803d', marginBottom:6 }}>✅ Best months to visit Yamunotri</div>
          <p style={{ margin:0, fontSize:13.5, color:'var(--text-mid)' }}>
            <strong>May–June</strong> and <strong>September–October</strong> are the ideal windows. May has blooming rhododendrons and manageable crowds. October offers crystal-clear post-monsoon skies with Himalayan views that make the trek worthwhile even in colder temperatures. Avoid July–August due to monsoon landslides.
          </p>
        </div>

        <h2 style={h2}>Month-by-Month Weather at Yamunotri</h2>
        <div style={{ background:'#fff', borderRadius:12, border:'1px solid var(--border)', overflowX:'auto', marginBottom:28 }}>
          <table style={{ width:'100%', borderCollapse:'collapse', fontSize:13 }}>
            <thead>
              <tr style={{ background:'var(--navy-light)' }}>
                {['Month','Temperature','Snow','Rain','Visit?','What to Wear'].map(h => (
                  <th key={h} style={{ padding:'10px 12px', textAlign:'left', fontWeight:700, fontSize:11, color:'var(--navy)', textTransform:'uppercase', letterSpacing:'0.05em' }}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {weather.map((w, i) => (
                <tr key={w.month} style={{ borderBottom:'1px solid var(--border)', background: i%2===0 ? '#fff' : 'var(--bg)' }}>
                  <td style={{ padding:'10px 12px', fontWeight:700, color:'var(--navy)', fontSize:13 }}>{w.month}</td>
                  <td style={{ padding:'10px 12px', color:'#475569', fontSize:12.5 }}>{w.temp}</td>
                  <td style={{ padding:'10px 12px', color:'#475569', fontSize:12.5 }}>{w.snow}</td>
                  <td style={{ padding:'10px 12px', color:'#475569', fontSize:12.5 }}>{w.rain}</td>
                  <td style={{ padding:'10px 12px', fontSize:12.5 }}>{w.visit}</td>
                  <td style={{ padding:'10px 12px', color:'#475569', fontSize:12.5 }}>{w.wear}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 style={h2}>The Janki Chatti to Yamunotri Trek — Weather Impact</h2>
        <p style={p}>
          The 6km mountain trek from Janki Chatti to the Yamunotri temple is the part of the pilgrimage most affected by weather. The path climbs from roughly 2,650m to 3,291m through dense forests and rocky terrain alongside the Yamuna River. In dry weather, most moderately fit pilgrims complete it in 2.5–3 hours. In rain, the same trail becomes slippery and the time stretches to 4+ hours. Ponies and dolis are available year-round but advance bookings are recommended in peak season.
        </p>

        <h2 style={h2}>Surya Kund — The Natural Hot Spring</h2>
        <p style={p}>
          One of the more unusual weather-related facts about Yamunotri: the Surya Kund hot spring at the temple complex stays at a constant 88°C regardless of external temperature. Pilgrims traditionally cook potatoes and rice in a cloth bag in the spring — a ritual that continues even in winter. The contrast of the boiling spring and the surrounding cold mountain air is something uniquely Yamunotri.
        </p>

        <h2 style={h2}>What to Pack for Yamunotri (Weather-based)</h2>
        <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(220px,1fr))', gap:10, marginBottom:24 }}>
          {[
            { season:'May–June', icon:'🌸', items:'Light fleece, windproof jacket, rain poncho, layering base, trekking shoes, sunscreen SPF 50+' },
            { season:'September–October', icon:'🍂', items:'Heavy fleece, warm jacket, thermal inner, woollen cap, gloves, trekking poles for rocky path' },
            { season:'July–August', icon:'🌧️', items:'Full waterproof rain suit, waterproof backpack cover, dry bag for phone/documents, extra pair of shoes' },
          ].map(s => (
            <div key={s.season} style={{ background:'#fff', border:'1px solid var(--border)', borderRadius:10, padding:'14px' }}>
              <div style={{ fontWeight:700, color:'var(--navy)', fontSize:13.5, marginBottom:8 }}>{s.icon} {s.season}</div>
              <p style={{ margin:0, fontSize:13, color:'#475569', lineHeight:1.65 }}>{s.items}</p>
            </div>
          ))}
        </div>

        <div style={{ background:'var(--navy)', borderRadius:16, padding:'24px', textAlign:'center', marginTop:32 }}>
          <h3 style={{ color:'#fff', fontFamily:'var(--font-display)', fontSize:'1.2rem', marginBottom:8 }}>Planning a Yamunotri Yatra in 2026?</h3>
          <p style={{ color:'rgba(255,255,255,0.7)', fontSize:13.5, marginBottom:16 }}>Get a free package quote for your dates — we'll tell you exactly what weather to expect.</p>
          <div style={{ display:'flex', gap:10, justifyContent:'center', flexWrap:'wrap' }}>
            <a href={`https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent('Namaste! I want to book Yamunotri Yatra 2026. Please share packages.')}`}
              target="_blank" rel="noopener noreferrer"
              style={{ background:'#25D366', color:'#fff', padding:'11px 22px', borderRadius:9, fontWeight:700, fontSize:13.5, textDecoration:'none' }}>💬 WhatsApp</a>
            <Link href="/yamunotri-yatra" style={{ background:'rgba(255,255,255,0.12)', color:'#fff', padding:'11px 22px', borderRadius:9, fontWeight:700, fontSize:13.5, textDecoration:'none', border:'1px solid rgba(255,255,255,0.2)' }}>View Yamunotri Packages →</Link>
          </div>
        </div>

        <div style={{ borderTop:'1px solid var(--border)', paddingTop:24, marginTop:32 }}>
          <div style={{ fontWeight:700, fontSize:13.5, color:'var(--navy)', marginBottom:12 }}>Related guides</div>
          <div style={{ display:'flex', gap:10, flexWrap:'wrap' }}>
            {[['Gangotri Weather','/gangotri-weather'],['Kedarnath Weather','/kedarnath-weather'],['Best Time to Visit','/blog/best-time-char-dham'],['Packing List','/blog/char-dham-yatra-packing-list'],['Yamunotri Yatra','/yamunotri-yatra']].map(([l,h]) => (
              <Link key={h} href={h} style={{ background:'var(--bg)', border:'1px solid var(--border)', color:'var(--navy)', padding:'7px 14px', borderRadius:8, fontSize:12.5, fontWeight:600, textDecoration:'none' }}>{l} →</Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
