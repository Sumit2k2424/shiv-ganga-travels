import Link from 'next/link';
import { SITE } from '@/data/packages';

export const metadata = {
  title: 'Gangotri Weather 2026 — Month-wise Temperature Guide',
  description: 'Gangotri weather guide 2026. Month-by-month temperatures at 3,415m. Best time: May-June and Sept-Oct. Road conditions and packing guide.',
  keywords: ['gangotri weather','gangotri temperature','gangotri weather may','gangotri best time to visit','gangotri weather 2026','gangotri snowfall'],
  alternates: { canonical: `${SITE.baseUrl}/gangotri-weather` },
  openGraph: {
    title: 'Gangotri Weather 2026 — Month-wise Temperature Guide',
    description: 'Month-by-month Gangotri weather guide. Best time to visit, what to pack, temperature ranges at 3,415m.',
    url: `${SITE.baseUrl}/gangotri-weather`, type: 'article',
  },
};

const weather = [
  { month:'April', temp:'0°C to 10°C', snow:'Heavy above Gangotri', rain:'Low', visit:'⚠️ Opens Apr 19 — icy roads possible, very cold nights', wear:'Heavy wool, thermals, snow boots, balaclava' },
  { month:'May', temp:'7°C to 17°C', snow:'Melting on approach road', rain:'Low–Medium', visit:'✅ Best time — clear skies, Bhagirathi peaks visible', wear:'Fleece + windproof jacket + warm cap' },
  { month:'June', temp:'10°C to 20°C', snow:'None on route', rain:'Medium', visit:'✅ Peak season — crowds are high, weather is ideal', wear:'Layers + rain poncho + medium jacket' },
  { month:'July', temp:'11°C to 19°C', snow:'None', rain:'Heavy (monsoon)', visit:'⚠️ Landslides common on Uttarkashi–Gangotri road', wear:'Full waterproof gear, rubber sole shoes' },
  { month:'August', temp:'11°C to 18°C', snow:'None', rain:'Very heavy', visit:'⚠️ Avoid — high landslide risk, roads often blocked', wear:'Full rain gear, extra warm change of clothes' },
  { month:'September', temp:'7°C to 16°C', snow:'None on route', rain:'Light', visit:'✅ Excellent — fewer pilgrims, crystal-clear views of glaciers', wear:'Fleece + medium jacket + layers' },
  { month:'October', temp:'2°C to 10°C', snow:'Upper peaks', rain:'Very low', visit:'✅ Beautiful autumn light, Gangotri glacier best visible', wear:'Heavy jacket + thermals + wool hat + gloves' },
  { month:'November', temp:'−5°C to 2°C', snow:'Heavy at temple', rain:'Very low', visit:'⚠️ Temple closes Oct–Nov — not advisable for most pilgrims', wear:'Full winter expedition gear' },
];

const h2 = { fontFamily:'var(--font-display)', fontSize:'clamp(1.2rem,2.8vw,1.5rem)', fontWeight:700, color:'var(--navy)', marginBottom:14, marginTop:32 };
const p  = { fontSize:15.5, color:'#334155', lineHeight:1.85, marginBottom:16 };

export default function GangotriWeather() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context':'https://schema.org','@type':'WebPage',
        name:'Gangotri Weather Guide 2026',
        description:'Month-by-month Gangotri weather guide with temperatures, best time to visit, and what to wear.',
        url:`${SITE.baseUrl}/gangotri-weather`,
      })}}/>

      <section style={{ background:'linear-gradient(145deg,var(--navy) 0%,var(--navy-mid) 60%,var(--teal) 100%)', padding:'56px 20px 44px', textAlign:'center' }}>
        <div style={{ maxWidth:820, margin:'0 auto' }}>
          <span style={{ background:'rgba(232,146,10,0.18)', color:'#FFD166', fontSize:11, fontWeight:700, letterSpacing:'0.12em', textTransform:'uppercase', padding:'5px 16px', borderRadius:100, display:'inline-block', marginBottom:16 }}>🌤️ Weather Guide · 3,415m</span>
          <h1 className="display-title" style={{ color:'#fff', fontSize:'clamp(1.8rem,4.5vw,3rem)', marginBottom:14 }}>
            Gangotri Weather 2026 — Month-wise Guide
          </h1>
          <p style={{ color:'rgba(255,255,255,0.8)', fontSize:15, lineHeight:1.7 }}>
            Temperature, snowfall, rainfall and best visiting windows at the source of the Ganges
          </p>
        </div>
      </section>

      <nav style={{ background:'var(--bg)', borderBottom:'1px solid var(--border)', padding:'10px 20px' }}>
        <div style={{ maxWidth:'var(--container)', margin:'0 auto', fontSize:12, color:'var(--text-muted)', display:'flex', gap:6, flexWrap:'wrap' }}>
          <Link href="/" style={{ color:'var(--navy)', textDecoration:'none' }}>Home</Link><span>›</span>
          <Link href="/gangotri-yatra" style={{ color:'var(--navy)', textDecoration:'none' }}>Gangotri Yatra</Link><span>›</span>
          <span>Weather Guide</span>
        </div>
      </nav>

      <div style={{ maxWidth:900, margin:'0 auto', padding:'40px 20px 60px' }}>
        <p style={p}>
          Gangotri, perched at 3,415 metres in the Uttarkashi district of Uttarakhand, is the most accessible of the four Char Dhams — you can drive all the way to the temple without any trekking. But "accessible" doesn't mean easy. The weather at this altitude is highly variable, and the 100km road from Uttarkashi to Gangotri is one of the most dramatically weather-affected roads in Uttarakhand. A sunny morning can turn into a hailstorm by afternoon, and monsoon rains in July–August close the road for days at a stretch.
        </p>

        <div style={{ background:'#dcfce7', border:'1px solid #86efac', borderRadius:12, padding:'14px 18px', marginBottom:24 }}>
          <div style={{ fontWeight:700, fontSize:13.5, color:'#15803d', marginBottom:6 }}>✅ Best months to visit Gangotri</div>
          <p style={{ margin:0, fontSize:13.5, color:'var(--text-mid)' }}>
            <strong>May–June</strong> and <strong>September–October</strong> offer the clearest skies and best road conditions. May especially is spectacular — the Bhagirathi peaks behind the temple are snow-covered and visible in full morning light. October brings autumn colours to the surrounding forests, making the drive from Uttarkashi particularly beautiful. Avoid July and August due to monsoon landslides.
          </p>
        </div>

        <h2 style={h2}>Month-by-Month Weather at Gangotri</h2>
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

        <h2 style={h2}>The Gangotri Glacier — A Weather Note</h2>
        <p style={p}>
          Gaumukh, the snout of the Gangotri Glacier and the technical source of the Ganges, lies 18km further upstream from the temple. If you plan to trek to Gaumukh (a separate day-trek), weather planning is even more critical — the glacier trek involves crossing moraines and camping overnight, and is only safe in May–June and September–October. Gaumukh trek requires a Forest Department permit and should not be attempted during or after rain.
        </p>

        <h2 style={h2}>Road Conditions by Season</h2>
        <p style={p}>
          The Uttarkashi–Gangotri road (about 100km) runs alongside the Bhagirathi River and is prone to landslides between mileposts 30–70. In dry months (May, June, September, October), the road is generally fine. In monsoon (July–August), rockfalls and road wash-outs are common. SDRF maintains road-clearing machinery, but delays of 4–12 hours are not unusual. All Shiv Ganga Travels vehicles carry satphone contact and our drivers are trained for emergency rerouting.
        </p>

        <div style={{ background:'var(--navy)', borderRadius:16, padding:'24px', textAlign:'center', marginTop:32 }}>
          <h3 style={{ color:'#fff', fontFamily:'var(--font-display)', fontSize:'1.2rem', marginBottom:8 }}>Planning a Gangotri Yatra in 2026?</h3>
          <p style={{ color:'rgba(255,255,255,0.7)', fontSize:13.5, marginBottom:16 }}>We'll tell you exactly what weather to expect on your specific dates and pack your group accordingly.</p>
          <div style={{ display:'flex', gap:10, justifyContent:'center', flexWrap:'wrap' }}>
            <a href={`https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent('Namaste! I want to book Gangotri Yatra 2026. Please share packages and weather advice.')}`}
              target="_blank" rel="nofollow noopener noreferrer"
              style={{ background:'#25D366', color:'#fff', padding:'11px 22px', borderRadius:9, fontWeight:700, fontSize:13.5, textDecoration:'none' }}>💬 WhatsApp</a>
            <Link href="/gangotri-yatra" style={{ background:'rgba(255,255,255,0.12)', color:'#fff', padding:'11px 22px', borderRadius:9, fontWeight:700, fontSize:13.5, textDecoration:'none', border:'1px solid rgba(255,255,255,0.2)' }}>View Gangotri Packages →</Link>
          </div>
        </div>

        <div style={{ borderTop:'1px solid var(--border)', paddingTop:24, marginTop:32 }}>
          <div style={{ fontWeight:700, fontSize:13.5, color:'var(--navy)', marginBottom:12 }}>Related guides</div>
          <div style={{ display:'flex', gap:10, flexWrap:'wrap' }}>
            {[['Yamunotri Weather','/yamunotri-weather'],['Kedarnath Weather','/kedarnath-weather'],['Badrinath Weather','/badrinath-weather'],['Best Time to Visit','/blog/best-time-char-dham'],['Gangotri Yatra','/gangotri-yatra']].map(([l,h]) => (
              <Link key={h} href={h} style={{ background:'var(--bg)', border:'1px solid var(--border)', color:'var(--navy)', padding:'7px 14px', borderRadius:8, fontSize:12.5, fontWeight:600, textDecoration:'none' }}>{l} →</Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
