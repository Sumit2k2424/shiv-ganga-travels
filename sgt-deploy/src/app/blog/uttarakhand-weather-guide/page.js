import Link from 'next/link';
import { SITE } from '@/data/packages';

export const metadata = {
  title: 'Uttarakhand Weather 2026 — Month-by-Month Guide',
  description: 'Month-by-month weather guide for Char Dham Yatra routes in Uttarakhand 2026. Temperatures at Kedarnath, Badrinath, Gangotri, Yamunotri by month',
  keywords: ['uttarakhand weather month by month','kedarnath weather 2026','char dham yatra weather','badrinath temperature month wise','best weather char dham yatra','uttarakhand climate guide','kedarnath temperature june','char dham yatra september weather'],
  alternates: { canonical: `${SITE.baseUrl}/blog/uttarakhand-weather-guide` },
  openGraph: { title: 'Uttarakhand Weather Month by Month — Char Dham Yatra Climate Guide 2026', url: `${SITE.baseUrl}/blog/uttarakhand-weather-guide`, type: 'article' },
};

function Schema() {
  const faq = {
    '@context': 'https://schema.org', '@type': 'FAQPage',
    mainEntity: [
      { '@type': 'Question', name: 'What is the temperature at Kedarnath in June?',
        acceptedAnswer: { '@type': 'Answer', text: 'Kedarnath temperature in June: daytime 8–14°C, night 0–4°C. June is peak season with the most pleasant trekking weather. Occasional afternoon showers possible. Carry warm layers — temperature drops significantly after sunset.' }},
      { '@type': 'Question', name: 'What is the temperature at Kedarnath in September?',
        acceptedAnswer: { '@type': 'Answer', text: 'Kedarnath in September: daytime 5–12°C, night −2 to 3°C. Post-monsoon clarity makes September ideal — crystal clear skies, dramatically fewer crowds than May–June, and spectacular mountain views. Early snowfall possible after mid-September.' }},
      { '@type': 'Question', name: 'Is Char Dham Yatra possible in July and August?',
        acceptedAnswer: { '@type': 'Answer', text: 'July–August is monsoon season in Uttarakhand. The Gangotri highway (NH108) and Kedarnath route face regular landslide risk. While the dhams remain open, the government advises caution. Experienced operators like Shiv Ganga Travels monitor roads daily during this period. We recommend May–June or September–October for safer, more pleasant travel.' }},
      { '@type': 'Question', name: 'What should I wear for Char Dham Yatra in May?',
        acceptedAnswer: { '@type': 'Answer', text: 'May packing: thermal inners (mandatory — nights are 2–6°C at dhams), fleece jacket, windproof outer layer, warm cap and gloves, wool socks (3+ pairs), waterproof trekking boots, sunscreen SPF50+, sunglasses. Daytime at lower altitudes can reach 20°C but dham elevations are always cold.' }},
    ],
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faq) }}/>;
}

const WEATHER = [
  { month:'April (19–30)', kedarnath:'−2 to 8°C · Heavy snow patches · Frozen sections on trek', badrinath:'2 to 12°C · Cold, often overcast', gangotri:'0 to 10°C · Snow on Harsil stretch', yamunotri:'2 to 12°C · Cold, icy mornings', pilgrim:'Very low', suitability:'Good for uncrowded darshan but very cold. Not for 55+. Carry heavy winter gear.', verdict:'⭐⭐⭐' },
  { month:'May (1–20)', kedarnath:'2 to 12°C · Snow melting · Clear trails · Rhododendrons', badrinath:'5 to 18°C · Pleasant, mostly clear', gangotri:'5 to 15°C · Good conditions', yamunotri:'5 to 15°C · Best trekking weather', pilgrim:'Building to peak', suitability:'Excellent. Best weather for trekking. Comfortable for most age groups.', verdict:'⭐⭐⭐⭐⭐' },
  { month:'May (21–31)', kedarnath:'4 to 14°C · Peak crowds', badrinath:'8 to 20°C · Busy', gangotri:'8 to 18°C · Moderate crowds', yamunotri:'8 to 18°C · Moderate crowds', pilgrim:'Peak (15,000+/day at Kedarnath)', suitability:'Best weather but busiest period. Book 60+ days ahead. Queue at Kedarnath 2–4 hours.', verdict:'⭐⭐⭐⭐' },
  { month:'June (1–15)', kedarnath:'5 to 16°C · Excellent', badrinath:'10 to 22°C · Very pleasant', gangotri:'10 to 20°C · Good', yamunotri:'10 to 20°C · Good', pilgrim:'Peak, tapering', suitability:'Very good. Approaching monsoon but usually dry until mid-June. Good crowd levels.', verdict:'⭐⭐⭐⭐⭐' },
  { month:'June (16–30)', kedarnath:'8 to 18°C · Pre-monsoon showers', badrinath:'12 to 24°C · Warm', gangotri:'10 to 20°C · Watch NH108', yamunotri:'10 to 20°C · Occasional rain', pilgrim:'Moderate, declining', suitability:'Manageable. Monitor Gangotri highway weather. Showers possible but usually brief.', verdict:'⭐⭐⭐⭐' },
  { month:'July', kedarnath:'10 to 18°C · Monsoon showers', badrinath:'14 to 24°C · Warm but wet', gangotri:'12 to 20°C · Landslide risk', yamunotri:'12 to 22°C · Slippery trails', pilgrim:'Low', suitability:'Not recommended for first-time pilgrims or seniors. Road risk especially Gangotri route.', verdict:'⭐⭐' },
  { month:'August', kedarnath:'10 to 18°C · Peak monsoon', badrinath:'14 to 22°C · Heavy rains', gangotri:'10 to 18°C · Frequent blockages', yamunotri:'12 to 20°C · Treacherous trek', pilgrim:'Very low', suitability:'Monsoon peak. Highest landslide risk. Not recommended. Dhams open but risky.', verdict:'⭐' },
  { month:'September', kedarnath:'5 to 12°C · Post-monsoon clarity', badrinath:'8 to 18°C · Crystal clear skies', gangotri:'8 to 16°C · Excellent visibility', yamunotri:'8 to 16°C · Ideal trekking', pilgrim:'Low–moderate (sweet spot)', suitability:'Best overall month. Clear skies, 360° Himalayan views, thin crowds, good roads. Ideal for photography.', verdict:'⭐⭐⭐⭐⭐' },
  { month:'October (1–25)', kedarnath:'0 to 10°C · Stunning clarity', badrinath:'2 to 15°C · Cold, beautiful', gangotri:'2 to 12°C · Quiet, golden', yamunotri:'2 to 12°C · Autumn colours', pilgrim:'Low', suitability:'Excellent. Autumn colours, low crowds, pleasant days. Cold nights — carry winter gear.', verdict:'⭐⭐⭐⭐⭐' },
  { month:'Late Oct–November', kedarnath:'−5 to 5°C · Possible snowfall', badrinath:'0 to 10°C · Closing season', gangotri:'−2 to 8°C · Cold', yamunotri:'−2 to 8°C · Very cold', pilgrim:'Very low', suitability:'Cold with early snowfall risk. Closing ceremonies on Bhai Dooj. Season ends Nov 11–13.', verdict:'⭐⭐⭐' },
];

export default function WeatherGuide() {
  return (
    <>
      <Schema/>
      <section style={{ background:'linear-gradient(145deg,var(--navy) 0%,#1A3E75 60%,var(--teal) 100%)', padding:'52px 20px 40px' }}>
        <div style={{ maxWidth:860, margin:'0 auto', textAlign:'center' }}>
          <span style={{ background:'rgba(232,146,10,0.18)', color:'#FFD166', fontSize:11, fontWeight:700, letterSpacing:'0.12em', textTransform:'uppercase', padding:'5px 16px', borderRadius:100, display:'inline-block', marginBottom:14 }}>Climate Guide · 2026 Season</span>
          <h1 style={{ color:'#fff', fontFamily:'var(--font-display)', fontSize:'clamp(1.7rem,4vw,2.6rem)', fontWeight:700, letterSpacing:'-0.02em', marginBottom:14 }}>
            Uttarakhand Weather Month by Month
          </h1>
          <p style={{ color:'rgba(255,255,255,0.8)', fontSize:15, lineHeight:1.7, maxWidth:700, margin:'0 auto 20px' }}>
            Complete weather data for Kedarnath, Badrinath, Gangotri &amp; Yamunotri — temperatures, rainfall, snowfall, best months, and what to pack
          </p>
        </div>
      </section>

      <nav style={{ background:'var(--bg)', borderBottom:'1px solid var(--border)', padding:'9px 20px' }}>
        <div style={{ maxWidth:'var(--container)', margin:'0 auto', fontSize:12, color:'var(--text-muted)', display:'flex', gap:6 }}>
          <Link href="/" style={{ color:'var(--navy)', textDecoration:'none' }}>Home</Link><span>›</span>
          <Link href="/blog" style={{ color:'var(--navy)', textDecoration:'none' }}>Blog</Link><span>›</span>
          <span>Uttarakhand Weather Guide</span>
        </div>
      </nav>

      <article className="blog-container" itemScope itemType="https://schema.org/Article">
        <div style={{ fontSize:12, color:'var(--text-muted)', marginBottom:20, textAlign:'right' }}>🗓️ <strong>Last updated:</strong> May 4, 2026</div>

        {/* Season summary */}
        <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fill,minmax(160px,1fr))', gap:10, marginBottom:28 }}>
          {[['April–early May','Cold, quiet, beautiful','⭐⭐⭐'],['Mid May–June 15','Warm, peak, excellent','⭐⭐⭐⭐⭐'],['July–August','Monsoon risk, avoid','⭐'],['September','Best overall','⭐⭐⭐⭐⭐'],['October','Cold, spectacular','⭐⭐⭐⭐⭐'],['November','Closing, very cold','⭐⭐']].map(([period, desc, stars]) => (
            <div key={period} style={{ background:'var(--bg)', borderRadius:10, padding:'12px', border:'1px solid var(--border)', textAlign:'center' }}>
              <div style={{ fontSize:11, fontWeight:700, color:'var(--navy)', marginBottom:4 }}>{period}</div>
              <div style={{ fontSize:12, color:'var(--text-muted)', marginBottom:4 }}>{desc}</div>
              <div style={{ fontSize:14 }}>{stars}</div>
            </div>
          ))}
        </div>

        <h2 style={{ fontFamily:'var(--font-display)', fontSize:'1.45rem', fontWeight:700, color:'var(--navy)', marginBottom:14 }}>
          Month-by-Month Temperature &amp; Conditions
        </h2>
        <div style={{ overflowX:'auto', marginBottom:28 }}>
          <table style={{ width:'100%', borderCollapse:'collapse', fontSize:12.5 }}>
            <thead>
              <tr style={{ background:'var(--navy)' }}>
                {['Month','Kedarnath (3,583m)','Badrinath (3,133m)','Gangotri (3,415m)','Yamunotri (3,291m)','Crowds','Verdict'].map(h=>(
                  <th key={h} style={{ padding:'9px 10px', textAlign:'left', color:'#fff', fontWeight:700, fontSize:11.5, whiteSpace:'nowrap' }}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {WEATHER.map((w,i)=>(
                <tr key={w.month} style={{ borderBottom:'1px solid var(--border)', background:w.verdict==='⭐⭐⭐⭐⭐'?'#F0FDF4':w.verdict==='⭐'||w.verdict==='⭐⭐'?'#FFF1F2':i%2===0?'#fff':'var(--bg)' }}>
                  <td style={{ padding:'9px 10px', fontWeight:700, color:'var(--navy)', fontSize:13, whiteSpace:'nowrap' }}>{w.month}</td>
                  <td style={{ padding:'9px 10px', color:'#334155', fontSize:12 }}>{w.kedarnath}</td>
                  <td style={{ padding:'9px 10px', color:'#334155', fontSize:12 }}>{w.badrinath}</td>
                  <td style={{ padding:'9px 10px', color:'#334155', fontSize:12 }}>{w.gangotri}</td>
                  <td style={{ padding:'9px 10px', color:'#334155', fontSize:12 }}>{w.yamunotri}</td>
                  <td style={{ padding:'9px 10px', color:'#475569', fontSize:12 }}>{w.pilgrim}</td>
                  <td style={{ padding:'9px 10px', fontSize:14, whiteSpace:'nowrap' }}>{w.verdict}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 style={{ fontFamily:'var(--font-display)', fontSize:'1.45rem', fontWeight:700, color:'var(--navy)', marginBottom:14 }}>
          What to Pack by Month
        </h2>
        {[
          { months:'April–May', pack:['Heavy thermal inners (mandatory — nights 0–5°C)','Thick fleece + windproof outer jacket','Warm cap, gloves, scarf','Waterproof trekking boots','Wool socks (4+ pairs)','Sunscreen SPF50+ (high UV at altitude)','Rain poncho (May showers possible)'] },
          { months:'June', pack:['Light thermal inners (nights still cold)','Medium fleece jacket','Warm cap and light gloves','Trekking boots (waterproof)','Sunscreen and sunglasses','Light rain jacket','Warm layers for evening at dhams'] },
          { months:'September–October', pack:['Heavy thermals (September nights 2–5°C, October −2 to 3°C)','Thick fleece + heavy outer jacket','Warm cap, gloves, scarf (October especially)','Waterproof boots','Heavy wool socks (4+ pairs)','Handwarmer packets for October','Extra warm layers vs May'] },
        ].map(item => (
          <div key={item.months} style={{ marginBottom:18 }}>
            <div style={{ fontWeight:700, fontSize:15, color:'var(--navy)', marginBottom:10 }}>📦 {item.months} Packing</div>
            <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fill,minmax(280px,1fr))', gap:6 }}>
              {item.pack.map(p => (
                <div key={p} style={{ display:'flex', gap:8, fontSize:13.5, color:'#334155', padding:'6px 0', borderBottom:'1px solid var(--border)' }}>
                  <span style={{ color:'var(--teal)', fontWeight:700, flexShrink:0 }}>✓</span>{p}
                </div>
              ))}
            </div>
          </div>
        ))}

        <div style={{ background:'var(--navy)', borderRadius:16, padding:'28px 24px', textAlign:'center', marginTop:36 }}>
          <h3 style={{ color:'#fff', fontFamily:'var(--font-display)', fontSize:'1.3rem', marginBottom:10 }}>Plan Your Yatra for the Best Weather</h3>
          <p style={{ color:'rgba(255,255,255,0.7)', fontSize:14, marginBottom:18 }}>We will suggest the ideal travel dates based on weather, crowds, and your group. {SITE.phone}</p>
          <div style={{ display:'flex', gap:10, justifyContent:'center', flexWrap:'wrap' }}>
            <a href={`https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent('Namaste! I need advice on the best dates for Char Dham Yatra 2026.')}`} target="_blank" rel="noopener noreferrer"
              style={{ background:'#25D366', color:'#fff', padding:'12px 24px', borderRadius:9, fontWeight:700, fontSize:13.5, textDecoration:'none' }}>💬 WhatsApp</a>
            <Link href="/blog/best-time-char-dham" style={{ background:'rgba(255,255,255,0.12)', color:'#fff', padding:'12px 24px', borderRadius:9, fontWeight:700, fontSize:13.5, textDecoration:'none', border:'1px solid rgba(255,255,255,0.2)' }}>Best Time Guide →</Link>
          </div>
        </div>

        <div style={{ borderTop:'1px solid var(--border)', paddingTop:24, marginTop:32 }}>
          <div style={{ fontWeight:700, fontSize:13.5, color:'var(--navy)', marginBottom:12 }}>Related Guides</div>
          <div style={{ display:'flex', gap:10, flexWrap:'wrap' }}>
            {[['Best Time for Char Dham','/blog/best-time-char-dham'],['Packing List','/blog/char-dham-yatra-packing-list'],['Road Status 2026','/char-dham-road-status'],['Opening Dates 2026','/blog/char-dham-yatra-opening-dates-2026']].map(([l,h])=>(
              <Link key={h} href={h} style={{ background:'var(--bg)', border:'1px solid var(--border)', color:'var(--navy)', padding:'7px 14px', borderRadius:8, fontSize:12.5, fontWeight:600, textDecoration:'none' }}>{l} →</Link>
            ))}
          </div>
        </div>
      </article>
    </>
  );
}
