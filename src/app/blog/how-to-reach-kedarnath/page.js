import Link from 'next/link';
import { SITE } from '@/data/packages';

export const metadata = {
  title: 'How to Reach Kedarnath 2026 – By Road, Train, Flight & Helicopter from Major Cities',
  description: 'Complete guide to reaching Kedarnath in 2026 from Delhi, Mumbai, Bengaluru, and Hyderabad. Nearest railway station, airport, road route to Gaurikund, and helicopter options from Phata.',
  keywords: ['how to reach kedarnath 2026', 'kedarnath how to reach', 'how to go to kedarnath', 'kedarnath nearest railway station', 'kedarnath nearest airport', 'how to reach kedarnath from delhi', 'kedarnath journey guide 2026'],
  robots: { index: true, follow: true },
  alternates: { canonical: `${SITE.baseUrl}/blog/how-to-reach-kedarnath` },
  openGraph: { title: 'How to Reach Kedarnath 2026 – By Road, Train, Flight & Helicopter from Major Cities', url: `${SITE.baseUrl}/blog/how-to-reach-kedarnath`, type: 'article' },
    images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: 'How to Reach Kedarnath 2026 — All Routes Explained | Shiv Ganga Travels' }],
};

function Schema() {
  const faq = {
    '@context': 'https://schema.org', '@type': 'FAQPage',
    mainEntity: [
      { '@type': 'Question', name: 'What is the nearest railway station to Kedarnath?',
        acceptedAnswer: { '@type': 'Answer', text: 'Rishikesh (216km from Gaurikund) and Haridwar (218km) are the nearest railway stations to Kedarnath. Both are on the Haridwar-Dehradun rail line. From either station, road travel to Gaurikund (Kedarnath base) takes 6–7 hours. Haridwar has more frequent trains from major cities than Rishikesh.' }},
      { '@type': 'Question', name: 'What is the nearest airport to Kedarnath?',
        acceptedAnswer: { '@type': 'Answer', text: 'Jolly Grant Airport (Dehradun) is the nearest airport to Kedarnath — approximately 250km from Gaurikund (7–8 hours by road). It connects to Delhi (1 hour), Mumbai (1.5 hours), Bangalore (2.5 hours), and Hyderabad (2 hours). From Dehradun airport, taxi to Haridwar (35km, 1 hour) then onwards to Gaurikund.' }},
      { '@type': 'Question', name: 'How long does the Kedarnath trek take?',
        acceptedAnswer: { '@type': 'Answer', text: 'Kedarnath trek from Gaurikund is 16km one way. Ascending time: 5–7 hours for first-time pilgrims. Descending: 3–4 hours. The trail is stone-paved and well-marked with rest stops every 1–2km. Start by 5 AM to arrive before peak queue at the temple and to start the return before afternoon cloud cover.' }},
    ],
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faq) }}/>;
}

const CITY_ROUTES = [
  { city:'Delhi', dist:'350km to Haridwar', bestRoute:'Train (Shatabdi/overnight) or road via NH58', step1:'Delhi → Haridwar by Shatabdi (4.5 hrs) or overnight train', step2:'Haridwar → Guptkashi by road (6 hrs, 190km)', step3:'Guptkashi → Sonprayag → Gaurikund (25km)', step4:'Gaurikund → Kedarnath (16km trek or helicopter)', total:'1.5–2 days total journey' },
  { city:'Mumbai', dist:'1,450km to Haridwar', bestRoute:'Fly to Dehradun (1.5 hrs) then road', step1:'Mumbai → Dehradun flight (IndiGo/Air India, 1.5 hrs)', step2:'Dehradun → Haridwar (35km, 1 hr by taxi)', step3:'Haridwar → Guptkashi → Gaurikund (7 hrs)', step4:'Gaurikund → Kedarnath (16km trek or helicopter)', total:'1.5–2 days total journey' },
  { city:'Bangalore', dist:'2,080km to Haridwar', bestRoute:'Fly Bangalore → Dehradun (2.5 hrs)', step1:'Bangalore → Dehradun flight (IndiGo daily, 2.5 hrs)', step2:'Dehradun → Haridwar (35km, 1 hr)', step3:'Haridwar → Guptkashi → Gaurikund (7 hrs)', step4:'Gaurikund → Kedarnath', total:'1.5–2 days total' },
  { city:'Hyderabad', dist:'1,620km to Haridwar', bestRoute:'Fly Hyderabad → Dehradun (2 hrs)', step1:'Hyderabad → Dehradun flight (IndiGo, 2 hrs)', step2:'Dehradun → Haridwar → Guptkashi → Gaurikund (8 hrs total)', step3:'Gaurikund → Kedarnath trek or helicopter', step4:'Total: 1.5–2 days', total:'1.5–2 days total' },
];

export default function HowToReachKedarnath() {
  return (
    <>
      <Schema/>
      <section style={{ background:'linear-gradient(145deg,var(--navy) 0%,#1A3E75 60%,var(--teal) 100%)', padding:'52px 20px 40px' }}>
        <div style={{ maxWidth:860, margin:'0 auto', textAlign:'center' }}>
          <span style={{ background:'rgba(232,146,10,0.18)', color:'#FFD166', fontSize:11, fontWeight:700, letterSpacing:'0.12em', textTransform:'uppercase', padding:'5px 16px', borderRadius:100, display:'inline-block', marginBottom:14 }}>Journey Guide · 2026</span>
          <h1 style={{ color:'#fff', fontFamily:'var(--font-display)', fontSize:'clamp(1.7rem,4vw,2.6rem)', fontWeight:700, letterSpacing:'-0.02em', marginBottom:14 }}>
            How to Reach Kedarnath 2026
          </h1>
          <p style={{ color:'rgba(255,255,255,0.8)', fontSize:15, lineHeight:1.7, maxWidth:700, margin:'0 auto 20px' }}>
            Train · Flight · Road · Trek · Helicopter — From Delhi, Mumbai, Bangalore &amp; all major cities to Kedarnath temple
          </p>
          {['🚂 Train to Haridwar','✈️ Fly to Dehradun','🚗 Drive to Gaurikund','🏔️ 16km Trek to Temple'].map(t => (
            <span key={t} style={{ background:'rgba(255,255,255,0.12)', color:'#fff', fontSize:12.5, fontWeight:600, padding:'6px 14px', borderRadius:100, border:'1px solid rgba(255,255,255,0.2)', display:'inline-block', margin:'4px' }}>{t}</span>
          ))}
        </div>
      </section>

      <nav style={{ background:'var(--bg)', borderBottom:'1px solid var(--border)', padding:'9px 20px' }}>
        <div style={{ maxWidth:'var(--container)', margin:'0 auto', fontSize:12, color:'var(--text-muted)', display:'flex', gap:6 }}>
          <Link href="/" style={{ color:'var(--navy)', textDecoration:'none' }}>Home</Link><span>›</span>
          <Link href="/blog" style={{ color:'var(--navy)', textDecoration:'none' }}>Blog</Link><span>›</span>
          <span>How to Reach Kedarnath 2026</span>
        </div>
      </nav>

      <article className="blog-container" itemScope itemType="https://schema.org/Article">
        <div style={{ fontSize:12, color:'var(--text-muted)', marginBottom:20, textAlign:'right' }}>🗓️ <strong>Last updated:</strong> May 4, 2026</div>

        <div style={{ background:'var(--navy)', borderRadius:14, padding:'16px 20px', marginBottom:24, display:'grid', gridTemplateColumns:'repeat(auto-fill,minmax(180px,1fr))', gap:10 }}>
          {[['Nearest Railway Station','Haridwar / Rishikesh'],['Nearest Airport','Jolly Grant (Dehradun, 250km)'],['Road Base','Gaurikund (218km from HW)'],['Trek Distance','16km one way'],['Helicopter','Phata/Sersi helipads'],['Total Journey (from Delhi)','1.5–2 days']].map(([k,v])=>(
            <div key={k}>
              <div style={{ fontSize:11, color:'rgba(255,255,255,0.55)', marginBottom:2 }}>{k}</div>
              <div style={{ fontWeight:700, fontSize:13.5, color:'#FFD166' }}>{v}</div>
            </div>
          ))}
        </div>

        <h2 style={{ fontFamily:'var(--font-display)', fontSize:'1.45rem', fontWeight:700, color:'var(--navy)', marginBottom:14 }}>
          The 4 Stages of Every Kedarnath Journey
        </h2>
        <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fill,minmax(220px,1fr))', gap:10, marginBottom:28 }}>
          {[
            { num:'1', stage:'Your City → Haridwar', options:'Train (best), flight to Dehradun + taxi, road', note:'The gateway to Kedarnath' },
            { num:'2', stage:'Haridwar → Gaurikund', options:'Road: 218km, 6–7 hours via Guptkashi', note:'NH7 through Rishikesh, Rudraprayag, Guptkashi' },
            { num:'3', stage:'Gaurikund → Kedarnath', options:'Trek (16km, 5–7 hrs), pony, or helicopter', note:'No vehicles beyond Gaurikund' },
            { num:'4', stage:'Kedarnath Darshan', options:'General queue (free), VIP puja (₹1,500–3,100)', note:'Temple open 6 AM–9 PM' },
          ].map(s=>(
            <div key={s.num} style={{ background:'var(--bg)', borderRadius:12, padding:'14px', border:'1px solid var(--border)' }}>
              <div style={{ display:'flex', gap:10, alignItems:'center', marginBottom:8 }}>
                <div style={{ width:32, height:32, borderRadius:'50%', background:'var(--navy)', display:'flex', alignItems:'center', justifyContent:'center', color:'#FFD166', fontWeight:800, fontSize:16, flexShrink:0 }}>{s.num}</div>
                <div style={{ fontWeight:700, fontSize:14, color:'var(--navy)' }}>{s.stage}</div>
              </div>
              <div style={{ fontSize:13.5, color:'#334155', marginBottom:6 }}>{s.options}</div>
              <div style={{ fontSize:12, color:'var(--text-muted)', fontStyle:'italic' }}>{s.note}</div>
            </div>
          ))}
        </div>

        <h2 style={{ fontFamily:'var(--font-display)', fontSize:'1.45rem', fontWeight:700, color:'var(--navy)', marginBottom:14 }}>
          City-by-City Route Guide
        </h2>
        {CITY_ROUTES.map(city => (
          <details key={city.city} style={{ background:'#fff', borderRadius:12, border:'1px solid var(--border)', overflow:'hidden', marginBottom:10 }}>
            <summary style={{ padding:'14px 18px', cursor:'pointer', listStyle:'none', fontWeight:700, fontSize:15, color:'var(--navy)', display:'flex', justifyContent:'space-between', alignItems:'center' }}>
              <span>Kedarnath from {city.city}</span>
              <div style={{ display:'flex', gap:8, alignItems:'center' }}>
                <span style={{ fontSize:12, color:'var(--text-muted)', fontWeight:400 }}>{city.dist}</span>
                <span style={{ fontSize:11.5, fontWeight:700, color:'var(--teal)', background:'var(--navy-light)', padding:'3px 10px', borderRadius:100, flexShrink:0 }}>{city.bestRoute}</span>
              </div>
            </summary>
            <div style={{ padding:'0 18px 16px', borderTop:'1px solid var(--border)', paddingTop:14 }}>
              <div style={{ display:'flex', flexDirection:'column', gap:8 }}>
                {[city.step1, city.step2, city.step3, city.step4].filter(Boolean).map((step, i)=>(
                  <div key={i} style={{ display:'flex', gap:10, fontSize:14, color:'#334155' }}>
                    <span style={{ background:'var(--navy)', color:'#fff', width:22, height:22, borderRadius:'50%', display:'flex', alignItems:'center', justifyContent:'center', fontSize:11, fontWeight:700, flexShrink:0, marginTop:1 }}>{i+1}</span>
                    {step}
                  </div>
                ))}
              </div>
              <div style={{ background:'#F0FDF4', borderRadius:8, padding:'8px 12px', marginTop:10, fontSize:13, color:'#15803D' }}>
                <strong>Total journey time:</strong> {city.total}
              </div>
            </div>
          </details>
        ))}

        <h2 style={{ fontFamily:'var(--font-display)', fontSize:'1.45rem', fontWeight:700, color:'var(--navy)', marginBottom:14, marginTop:28 }}>
          Stage 3 Options: Gaurikund to Kedarnath
        </h2>
        <div style={{ overflowX:'auto', marginBottom:24 }}>
          <table style={{ width:'100%', borderCollapse:'collapse', fontSize:14 }}>
            <thead>
              <tr style={{ background:'var(--navy)' }}>
                {['Mode','Distance','Time','Cost','Best For'].map(h=>(
                  <th key={h} style={{ padding:'10px 12px', textAlign:'left', color:'#fff', fontWeight:700, fontSize:12.5 }}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {[
                ['Trek (on foot)','16km one way','5–7 hrs up, 3–4 hrs down','Free','Fit pilgrims under 65, spiritual experience'],
                ['Pony/Horse','16km one way','3–4 hrs up','₹3,000–5,000 one way','65+, knee problems, children'],
                ['Palki/Doli','16km carried','4–5 hrs','₹8,000–12,000 one way','Mobility limitations, premium comfort'],
                ['Helicopter (Phata)','Direct fly','7 minutes','₹7,000–9,000 one way (IRCTC)','Medical conditions, premium, time-saving'],
                ['Helicopter (Sersi)','Direct fly','12 minutes','₹7,000–9,000 one way (IRCTC)','Alternative helipad to Phata'],
              ].map(([m,d,t,c,b],i)=>(
                <tr key={m} style={{ borderBottom:'1px solid var(--border)', background:i%2===0?'#fff':'var(--bg)' }}>
                  <td style={{ padding:'9px 12px', fontWeight:700, color:'var(--navy)', fontSize:13.5 }}>{m}</td>
                  <td style={{ padding:'9px 12px', color:'#475569', fontSize:13 }}>{d}</td>
                  <td style={{ padding:'9px 12px', color:'#475569', fontSize:13 }}>{t}</td>
                  <td style={{ padding:'9px 12px', fontWeight:700, color:'var(--navy)', fontSize:13.5 }}>{c}</td>
                  <td style={{ padding:'9px 12px', color:'#475569', fontSize:12.5 }}>{b}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div style={{ background:'var(--navy)', borderRadius:16, padding:'28px 24px', textAlign:'center', marginTop:36 }}>
          <h3 style={{ color:'#fff', fontFamily:'var(--font-display)', fontSize:'1.3rem', marginBottom:10 }}>Book Your Kedarnath Journey — Haridwar Direct</h3>
          <p style={{ color:'rgba(255,255,255,0.7)', fontSize:14, marginBottom:18 }}>Shiv Ganga Travels arranges the complete journey — from your arrival in Haridwar to your Kedarnath darshan. {SITE.phone}</p>
          <div style={{ display:'flex', gap:10, justifyContent:'center', flexWrap:'wrap' }}>
            <a href={`https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent('Namaste! I need help planning how to reach Kedarnath 2026. Please guide me.')}`} target="_blank" rel="nofollow noopener noreferrer"
              style={{ background:'#25D366', color:'#fff', padding:'12px 24px', borderRadius:9, fontWeight:700, fontSize:13.5, textDecoration:'none' }}>💬 WhatsApp</a>
            <Link href="/kedarnath-yatra" style={{ background:'rgba(255,255,255,0.12)', color:'#fff', padding:'12px 24px', borderRadius:9, fontWeight:700, fontSize:13.5, textDecoration:'none', border:'1px solid rgba(255,255,255,0.2)' }}>Kedarnath Packages →</Link>
          </div>
        </div>

        <div style={{ borderTop:'1px solid var(--border)', paddingTop:24, marginTop:32 }}>
          <div style={{ fontWeight:700, fontSize:13.5, color:'var(--navy)', marginBottom:12 }}>Related Guides</div>
          <div style={{ display:'flex', gap:10, flexWrap:'wrap' }}>
            {[['Haridwar to Kedarnath Route','/blog/haridwar-to-kedarnath-road-trip'],['How to Reach Haridwar','/how-to-reach-haridwar'],['Kedarnath Trek Guide','/blog/kedarnath-trek-guide'],['Kedarnath Helicopter','/blog/kedarnath-helicopter-booking'],['Kedarnath Timings','/blog/kedarnath-darshan-timing']].map(([l,h])=>(
              <Link key={h} href={h} style={{ background:'var(--bg)', border:'1px solid var(--border)', color:'var(--navy)', padding:'7px 14px', borderRadius:8, fontSize:12.5, fontWeight:600, textDecoration:'none' }}>{l} →</Link>
            ))}
          </div>
        </div>
      </article>
    </>
  );
}
