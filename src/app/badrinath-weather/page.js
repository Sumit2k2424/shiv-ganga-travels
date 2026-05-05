import Link from 'next/link';
import { SITE } from '@/data/packages';

export const metadata = {
  title: 'Badrinath Weather 2026 — Month-wise Temperature, Best Time & What to Pack',
  description: 'Badrinath weather guide 2026. Month-by-month temperatures at 3,133m. Best time to visit Badrinath Dham: May–June and September–October. Snowfall and road conditions.',
  keywords: ['badrinath weather','badrinath temperature','badrinath weather may','badrinath best time to visit 2026','badrinath snowfall','badrinath weather in october'],
  alternates: { canonical: `${SITE.baseUrl}/badrinath-weather` },
  openGraph: {
    title: 'Badrinath Weather 2026 — Month-wise Temperature Guide',
    description: 'Month-by-month Badrinath weather guide. Best time to visit, what to pack, temperature ranges at 3,133m.',
    url: `${SITE.baseUrl}/badrinath-weather`, type: 'article',
  },
};

const weather = [
  { month:'April', temp:'3°C to 14°C', snow:'Heavy near Joshimath', rain:'Low', visit:'⚠️ Opens Apr 23 — cold and pristine, low crowd, icy road patches', wear:'Heavy wool, thermals, snow boots, balaclava' },
  { month:'May', temp:'8°C to 18°C', snow:'Melting on approach', rain:'Low–Medium', visit:'✅ Best time — clear skies, Nilkantha peak views, moderate crowd', wear:'Fleece + windproof jacket + warm cap' },
  { month:'June', temp:'12°C to 22°C', snow:'None on route', rain:'Medium', visit:'✅ Peak season — highest footfall, most comfortable weather', wear:'Light jacket + layers + rain poncho' },
  { month:'July', temp:'13°C to 20°C', snow:'None', rain:'Heavy (monsoon)', visit:'⚠️ Road from Joshimath can close — landslides above Vishnuprayag', wear:'Full waterproof gear, rubber-soled shoes' },
  { month:'August', temp:'12°C to 18°C', snow:'None', rain:'Heavy (monsoon)', visit:'⚠️ Avoid — highest risk month for road blockages', wear:'Full rain gear, waterproof bag for electronics' },
  { month:'September', temp:'7°C to 16°C', snow:'None on route', rain:'Light', visit:'✅ Excellent — post-monsoon clarity, Nilkantha fully visible', wear:'Fleece + medium jacket + layers' },
  { month:'October', temp:'3°C to 12°C', snow:'Upper peaks', rain:'Very low', visit:'✅ Beautiful — last weeks before closure, autumn colours in Joshimath', wear:'Heavy jacket + thermals + wool hat + gloves' },
  { month:'November', temp:'−5°C to 4°C', snow:'Heavy — road can close', rain:'Very low', visit:'⚠️ Temple closes Nov 2026 — not recommended for pilgrims', wear:'Full winter expedition gear mandatory' },
];

const h2 = { fontFamily:'var(--font-display)', fontSize:'clamp(1.2rem,2.8vw,1.5rem)', fontWeight:700, color:'var(--navy)', marginBottom:14, marginTop:32 };
const p  = { fontSize:15.5, color:'#334155', lineHeight:1.85, marginBottom:16 };

export default function BadrinathWeather() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context':'https://schema.org','@type':'WebPage',
        name:'Badrinath Weather Guide 2026',
        description:'Month-by-month Badrinath weather guide with temperatures, best time to visit, and what to wear.',
        url:`${SITE.baseUrl}/badrinath-weather`,
      })}}/>

      <section style={{ background:'linear-gradient(145deg,var(--navy) 0%,var(--navy-mid) 60%,var(--teal) 100%)', padding:'56px 20px 44px', textAlign:'center' }}>
        <div style={{ maxWidth:820, margin:'0 auto' }}>
          <span style={{ background:'rgba(232,146,10,0.18)', color:'#FFD166', fontSize:11, fontWeight:700, letterSpacing:'0.12em', textTransform:'uppercase', padding:'5px 16px', borderRadius:100, display:'inline-block', marginBottom:16 }}>🌤️ Weather Guide · 3,133m</span>
          <h1 className="display-title" style={{ color:'#fff', fontSize:'clamp(1.8rem,4.5vw,3rem)', marginBottom:14 }}>
            Badrinath Weather 2026 — Month-wise Guide
          </h1>
          <p style={{ color:'rgba(255,255,255,0.8)', fontSize:15, lineHeight:1.7 }}>
            Temperature, snowfall and best visiting windows at the abode of Lord Vishnu
          </p>
        </div>
      </section>

      <nav style={{ background:'var(--bg)', borderBottom:'1px solid var(--border)', padding:'10px 20px' }}>
        <div style={{ maxWidth:'var(--container)', margin:'0 auto', fontSize:12, color:'var(--text-muted)', display:'flex', gap:6, flexWrap:'wrap' }}>
          <Link href="/" style={{ color:'var(--navy)', textDecoration:'none' }}>Home</Link><span>›</span>
          <Link href="/badrinath-temple" style={{ color:'var(--navy)', textDecoration:'none' }}>Badrinath Temple</Link><span>›</span>
          <span>Weather Guide</span>
        </div>
      </nav>

      <div style={{ maxWidth:900, margin:'0 auto', padding:'40px 20px 60px' }}>
        <p style={p}>
          Badrinath is the final — and for many pilgrims, the most spiritually significant — stop on the Char Dham Yatra. Located at 3,133 metres in the Chamoli district of Uttarakhand, it sits between the towering Nar and Narayan mountain ranges with the Nilkantha peak (6,596m) rising dramatically behind the temple. Unlike Kedarnath and Yamunotri, Badrinath is accessible entirely by road — which makes weather on the approach route, especially the Joshimath–Badrinath stretch, the key variable for safe travel.
        </p>

        <div style={{ background:'#dcfce7', border:'1px solid #86efac', borderRadius:12, padding:'14px 18px', marginBottom:24 }}>
          <div style={{ fontWeight:700, fontSize:13.5, color:'#15803d', marginBottom:6 }}>✅ Best months to visit Badrinath</div>
          <p style={{ margin:0, fontSize:13.5, color:'var(--text-mid)' }}>
            <strong>May–June</strong> and <strong>September–October</strong> are ideal. May has the clearest views of Nilkantha and the valley in bloom. October's post-monsoon skies offer the sharpest mountain photography. The evening Aarti (7 PM) is spectacular on clear autumn nights. Avoid July–August due to the monsoon landslide risk on the approach road from Joshimath.
          </p>
        </div>

        <h2 style={h2}>Month-by-Month Weather at Badrinath</h2>
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

        <h2 style={h2}>Mana Village — Beyond Badrinath</h2>
        <p style={p}>
          Mana Village, just 3km from the Badrinath temple and the last Indian village before the Tibet border, is an essential side visit. At 3,310m, Mana is accessible by road and is worth a 1–2 hour visit. The Vyas Gufa (cave where the Mahabharata was composed), Bhim Pul, and the Saraswati River are all here. Weather-wise, Mana gets the same conditions as Badrinath but feels windier due to its border valley position — pack an extra jacket.
        </p>

        <h2 style={h2}>Tapt Kund — The Natural Hot Spring</h2>
        <p style={p}>
          Adjacent to the Badrinath temple, Tapt Kund is a natural hot spring at 55°C where it is customary to bathe before entering the temple for darshan. The spring flows year-round, even during the coldest October mornings when the surrounding air is near-freezing. This contrast — ice-cold mountain air, warm sacred spring — is one of the most memorable sensory experiences of the Char Dham.
        </p>

        <div style={{ background:'var(--navy)', borderRadius:16, padding:'24px', textAlign:'center', marginTop:32 }}>
          <h3 style={{ color:'#fff', fontFamily:'var(--font-display)', fontSize:'1.2rem', marginBottom:8 }}>Planning a Badrinath Yatra in 2026?</h3>
          <p style={{ color:'rgba(255,255,255,0.7)', fontSize:13.5, marginBottom:16 }}>Book a standalone Badrinath package or include it as part of your full Char Dham tour.</p>
          <div style={{ display:'flex', gap:10, justifyContent:'center', flexWrap:'wrap' }}>
            <a href={`https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent('Namaste! I want to book Badrinath Yatra 2026. Please share packages.')}`}
              target="_blank" rel="noopener noreferrer"
              style={{ background:'#25D366', color:'#fff', padding:'11px 22px', borderRadius:9, fontWeight:700, fontSize:13.5, textDecoration:'none' }}>💬 WhatsApp</a>
            <Link href="/packages/badrinath-yatra-package-2n-3d-haridwar" style={{ background:'rgba(255,255,255,0.12)', color:'#fff', padding:'11px 22px', borderRadius:9, fontWeight:700, fontSize:13.5, textDecoration:'none', border:'1px solid rgba(255,255,255,0.2)' }}>View Badrinath Package →</Link>
          </div>
        </div>

        <div style={{ borderTop:'1px solid var(--border)', paddingTop:24, marginTop:32 }}>
          <div style={{ fontWeight:700, fontSize:13.5, color:'var(--navy)', marginBottom:12 }}>Related guides</div>
          <div style={{ display:'flex', gap:10, flexWrap:'wrap' }}>
            {[['Kedarnath Weather','/kedarnath-weather'],['Gangotri Weather','/gangotri-weather'],['Yamunotri Weather','/yamunotri-weather'],['Badrinath Temple','/badrinath-temple'],['Best Time to Visit','/blog/best-time-char-dham']].map(([l,h]) => (
              <Link key={h} href={h} style={{ background:'var(--bg)', border:'1px solid var(--border)', color:'var(--navy)', padding:'7px 14px', borderRadius:8, fontSize:12.5, fontWeight:600, textDecoration:'none' }}>{l} →</Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
