import Link from 'next/link';
import { SITE } from '@/data/packages';

export const metadata = {
  title: 'How to Reach Haridwar',
  description: 'How to reach Haridwar 2026. Train from Delhi (3.5 hrs), flight to Dehradun, bus and road routes from Mumbai, Bangalore and all major cities.',
  keywords: ['how to reach haridwar','haridwar train from delhi','nearest airport to haridwar','haridwar bus from delhi','haridwar from mumbai','haridwar from bangalore','haridwar distance from delhi','char dham yatra haridwar how to reach','jolly grant airport haridwar','dehradun airport haridwar'],
  alternates: { canonical: `${SITE.baseUrl}/how-to-reach-haridwar` },
  openGraph: {
    title: 'How to Reach Haridwar for Char Dham Yatra 2026',
    description: 'Train, flight, bus, and road options from all major cities to Haridwar — starting point of Char Dham Yatra.',
    url: `${SITE.baseUrl}/how-to-reach-haridwar`,
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Reach Haridwar for Char Dham Yatra 2026',
    description: 'Train, flight, bus, and road options from all major cities to Haridwar — starting point of Char Dham Yatra.',
    images: [{ url: '/opengraph-image', alt: 'How to Reach Haridwar for Char Dham Yatra 2026 | Shiv Ganga Travels' }],
  },
};

function Schema() {
  const faq = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      { '@type': 'Question', name: 'What is the nearest airport to Haridwar?',
        acceptedAnswer: { '@type': 'Answer', text: 'Jolly Grant Airport (Dehradun) is the nearest airport to Haridwar — 35km, approximately 1 hour by taxi (₹800–1,200). It connects to Delhi (1 hour, IndiGo/Air India daily), Mumbai, Bangalore, and Hyderabad. Shiv Ganga Travels provides airport pickup from Jolly Grant for all our packages.' }},
      { '@type': 'Question', name: 'Which is the best train from Delhi to Haridwar?',
        acceptedAnswer: { '@type': 'Answer', text: 'Best trains from Delhi to Haridwar: (1) Shatabdi Express (12017) — NDLS to HW, departs 6:45 AM, arrives 10:55 AM, 4.2 hours, ₹680 CC. (2) Nanda Devi Express (12205) — NDLS to HW, overnight, ₹350 SL to ₹950 3A. (3) Mussoorie Express (14041) — overnight from NDLS, reaches Haridwar early morning — ideal for Char Dham pilgrims.' }},
      { '@type': 'Question', name: 'How far is Haridwar from Delhi?',
        acceptedAnswer: { '@type': 'Answer', text: 'Haridwar is 210km from Delhi by road via NH58 (Meerut–Muzaffarnagar route) and 335km via NH24. By car: 5–6 hours. By train: 4–5 hours (Shatabdi). By bus: 5–7 hours from ISBT Kashmere Gate or Anand Vihar. Haridwar is the primary starting point for Char Dham Yatra.' }},
      { '@type': 'Question', name: 'How to reach Haridwar from Mumbai for Char Dham Yatra?',
        acceptedAnswer: { '@type': 'Answer', text: 'Best option: Fly from Mumbai to Dehradun (Jolly Grant Airport) — 1.5 hour flight, ₹2,500–6,000. From Jolly Grant, taxi to Haridwar (35km, 1 hour, ₹800–1,200). Train: Mumbai to Haridwar via Yoga Express (19031) — 24 hours, ₹700 SL to ₹2,200 3A. Shiv Ganga Travels can arrange pickup from Mumbai airport to Haridwar with a Delhi overnight option.' }},
      { '@type': 'Question', name: 'Is there a direct flight to Haridwar?',
        acceptedAnswer: { '@type': 'Answer', text: 'There is no airport in Haridwar itself. The nearest airport is Jolly Grant Airport (Dehradun/DED), 35km from Haridwar. IndiGo and Air India operate daily flights from Delhi (1 hour), Mumbai (1.5 hours), Bangalore (2.5 hours), and Hyderabad (2 hours) to Dehradun. From Dehradun airport to Haridwar: taxi ₹800–1,200, approximately 1 hour.' }},
      { '@type': 'Question', name: 'What is the best time to reach Haridwar before Char Dham Yatra?',
        acceptedAnswer: { '@type': 'Answer', text: 'Arrive in Haridwar the evening before your Char Dham departure. Attend the Ganga Aarti at Har Ki Pauri (6:30–7:30 PM) — this is the traditional start of every Char Dham Yatra. Complete biometric registration at the Haridwar registration centre. Your vehicle departs for the dhams at 4–5 AM the next morning. Shiv Ganga Travels office at Saptrishi Road (near Shantikunj Gate No. 1) is open till 9 PM for pre-departure briefing.' }},
    ],
  };
  const article = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'How to Reach Haridwar for Char Dham Yatra 2026 — Complete Guide',
    author: { '@type': 'Organization', name: SITE.name, url: SITE.baseUrl },
    publisher: { '@type': 'Organization', name: SITE.name, url: SITE.baseUrl, logo: { '@type': 'ImageObject', url: 'https://www.shivgangatravels.com/logo.png' } },
    datePublished: '2026-01-01',
    dateModified: '2026-05-04',
    mainEntityOfPage: `${SITE.baseUrl}/how-to-reach-haridwar`,
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faq) }}/>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(article) }}/>
    </>
  );
}

const CITY_DATA = [
  { city:'Delhi / NCR', dist:'210–335km', road:'5–6 hrs via NH58', train:'4–5 hrs (Shatabdi)', flight:'No direct — use Dehradun', bus:'5–7 hrs from Kashmere Gate ISBT',
    bestRoute:'Train (Shatabdi or overnight) or road',
    trains:[['Shatabdi Express 12017','NDLS → HW','06:45','10:55','CC ₹680, EC ₹1,285'],['Mussoorie Express 14041','NDLS → HW','22:35','05:10+1','SL ₹245, 3A ₹645'],['Nanda Devi Express 12205','NDLS → HW','23:55','05:20+1','SL ₹350, 3A ₹950']],
  },
  { city:'Mumbai', dist:'1,450km', road:'28–30 hrs (not practical)', train:'24 hrs (Yoga Express)', flight:'1.5 hrs to Dehradun',
    bestRoute:'Fly to Dehradun (Jolly Grant) then taxi to Haridwar',
    trains:[['Yoga Express 19031','BDTS → HW','05:00','05:25+1','SL ₹700, 3A ₹1,850'],['Swatantrata Senani 12561','CSTM → HW','12:30','15:20+1','SL ₹815, 3A ₹2,130']],
  },
  { city:'Bangalore', dist:'2,080km', road:'Not practical', train:'38+ hrs', flight:'2.5 hrs to Dehradun',
    bestRoute:'Fly Bangalore → Dehradun (IndiGo/Air India, daily) then taxi 1 hr to Haridwar',
    trains:[['No direct train','Via Delhi change','—','40+ hrs total','SL ₹1,100+ via Delhi']],
  },
  { city:'Hyderabad', dist:'1,620km', road:'Not practical', train:'36+ hrs', flight:'2 hrs to Dehradun',
    bestRoute:'Fly Hyderabad → Dehradun (IndiGo, daily) then taxi to Haridwar',
    trains:[['No direct train','Via Delhi change','—','38+ hrs total','SL ₹950+ via Delhi']],
  },
  { city:'Chennai', dist:'2,180km', road:'Not practical', train:'40+ hrs', flight:'2.5 hrs to Delhi then transfer',
    bestRoute:'Fly Chennai → Delhi → Dehradun (same-day connection) OR fly Chennai → Delhi and take Shatabdi to Haridwar',
    trains:[['No direct train','Via Delhi change','—','42+ hrs total','SL ₹1,250+ via Delhi']],
  },
  { city:'Pune', dist:'1,580km', road:'Not practical', train:'26+ hrs', flight:'1.5 hrs to Delhi then transfer',
    bestRoute:'Fly Pune → Delhi → Dehradun OR Pune → Delhi then Shatabdi to Haridwar',
    trains:[['No direct','Via Delhi or Mumbai','—','26–30 hrs','SL ₹850+ via Delhi']],
  },
];

export default function HowToReachHaridwar() {
  return (
    <>
      <Schema/>

      {/* Hero */}
      <section style={{ background:'linear-gradient(145deg,var(--navy) 0%,#1A3E75 60%,var(--teal) 100%)', padding:'52px 20px 40px' }}>
        <div style={{ maxWidth:860, margin:'0 auto', textAlign:'center' }}>
          <span style={{ background:'rgba(232,146,10,0.18)', color:'#FFD166', fontSize:11, fontWeight:700, letterSpacing:'0.12em', textTransform:'uppercase', padding:'5px 16px', borderRadius:100, display:'inline-block', marginBottom:14 }}>
            Travel Guide · Updated May 2026
          </span>
          <h1 style={{ color:'#fff', fontFamily:'var(--font-display)', fontSize:'clamp(1.7rem,4vw,2.6rem)', fontWeight:700, letterSpacing:'-0.02em', marginBottom:14 }}>
            How to Reach Haridwar for Char Dham Yatra 2026
          </h1>
          <p style={{ color:'rgba(255,255,255,0.8)', fontSize:15, lineHeight:1.7, maxWidth:680, margin:'0 auto 20px' }}>
            Train · Flight · Bus · Road — from Delhi, Mumbai, Bangalore, Hyderabad, Chennai, Pune. 
            Haridwar is the <strong style={{ color:'#FFD166' }}>starting point of every Char Dham Yatra.</strong>
          </p>
          <div style={{ display:'flex', gap:10, justifyContent:'center', flexWrap:'wrap' }}>
            {['✈️ Nearest Airport: Dehradun (35km)','🚂 Trains from Delhi: 4–5 hrs','🚌 Buses from Delhi: 5–7 hrs'].map(t=>(
              <span key={t} style={{ background:'rgba(255,255,255,0.12)', color:'#fff', fontSize:12.5, fontWeight:600, padding:'6px 14px', borderRadius:100, border:'1px solid rgba(255,255,255,0.2)' }}>{t}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Breadcrumb */}
      <nav style={{ background:'var(--bg)', borderBottom:'1px solid var(--border)', padding:'9px 20px' }}>
        <div style={{ maxWidth:'var(--container)', margin:'0 auto', fontSize:12, color:'var(--text-muted)', display:'flex', gap:6 }}>
          <Link href="/" style={{ color:'var(--navy)', textDecoration:'none' }}>Home</Link><span>›</span>
          <Link href="/char-dham-yatra" style={{ color:'var(--navy)', textDecoration:'none' }}>Char Dham Yatra</Link><span>›</span>
          <span>How to Reach Haridwar</span>
        </div>
      </nav>

      <article style={{ maxWidth:900, margin:'0 auto', padding:'36px 20px 60px' }}>
        <div style={{ fontSize:12, color:'var(--text-muted)', marginBottom:20, textAlign:'right' }}>🗓️ <strong>Last updated:</strong> May 21, 2026</div>

        {/* Why Haridwar */}
        <div style={{ background:'var(--navy-light)', borderRadius:14, padding:'18px 20px', marginBottom:28 }}>
          <div style={{ fontWeight:700, fontSize:14, color:'var(--navy)', marginBottom:8 }}>📍 Why Start from Haridwar?</div>
          <p style={{ fontSize:14.5, color:'var(--text-mid)', lineHeight:1.75, margin:0 }}>
            Haridwar is the traditional gateway to the Char Dham Yatra. All four dham routes begin here — biometric registration centres are at Har Ki Pauri, the Ganga Aarti is the spiritual commencement of every yatra, and Shiv Ganga Travels office at Saptrishi Road is your pre-departure briefing point. Most packages depart Haridwar at 4–5 AM for the dhams.
          </p>
        </div>

        {/* Nearest airport */}
        <h2 style={{ fontFamily:'var(--font-display)', fontSize:'1.45rem', fontWeight:700, color:'var(--navy)', marginBottom:14 }}>
          Nearest Airport to Haridwar
        </h2>
        <div style={{ background:'#fff', border:'2px solid var(--teal)', borderRadius:14, padding:'18px 20px', marginBottom:28 }}>
          <div style={{ display:'flex', gap:14, alignItems:'flex-start' }}>
            <span style={{ fontSize:32, flexShrink:0 }}>✈️</span>
            <div>
              <div style={{ fontWeight:700, fontSize:16, color:'var(--navy)', marginBottom:6 }}>Jolly Grant Airport (DED) — Dehradun · 35km from Haridwar</div>
              <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fill,minmax(200px,1fr))', gap:10, marginBottom:12 }}>
                {[['Delhi → Dehradun','1 hr · ₹2,500–5,000 · Daily'],['Mumbai → Dehradun','1.5 hrs · ₹3,000–7,000 · Daily'],['Bangalore → Dehradun','2.5 hrs · ₹3,500–8,000 · Daily'],['Hyderabad → Dehradun','2 hrs · ₹3,000–7,000 · Daily']].map(([r,d])=>(
                  <div key={r} style={{ background:'var(--bg)', borderRadius:8, padding:'10px 12px', border:'1px solid var(--border)' }}>
                    <div style={{ fontWeight:700, fontSize:12.5, color:'var(--navy)' }}>{r}</div>
                    <div style={{ fontSize:12, color:'var(--text-muted)', marginTop:2 }}>{d}</div>
                  </div>
                ))}
              </div>
              <div style={{ fontSize:13.5, color:'var(--text-muted)' }}>
                <strong>Airport → Haridwar:</strong> Prepaid taxi ₹800–1,200 · 35km · approximately 1 hour. Shiv Ganga Travels provides airport pickup from Jolly Grant — included in all packages.
              </div>
            </div>
          </div>
        </div>

        {/* City-by-city */}
        <h2 style={{ fontFamily:'var(--font-display)', fontSize:'1.45rem', fontWeight:700, color:'var(--navy)', marginBottom:14 }}>
          How to Reach Haridwar from Each City
        </h2>
        <div style={{ display:'flex', flexDirection:'column', gap:16, marginBottom:32 }}>
          {CITY_DATA.map(city => (
            <details key={city.city} style={{ background:'#fff', borderRadius:12, border:'1px solid var(--border)', overflow:'hidden' }}>
              <summary style={{ padding:'16px 18px', cursor:'pointer', listStyle:'none', display:'flex', justifyContent:'space-between', alignItems:'center', fontWeight:700, fontSize:15, color:'var(--navy)' }}>
                <div style={{ display:'flex', gap:12, alignItems:'center' }}>
                  <span>{city.city}</span>
                  <span style={{ fontSize:12.5, fontWeight:500, color:'var(--text-muted)' }}>{city.dist}</span>
                </div>
                <span style={{ background:'var(--navy-light)', color:'var(--navy)', fontSize:11, fontWeight:700, padding:'3px 12px', borderRadius:100, flexShrink:0 }}>Best: {city.bestRoute.split(' ')[0]}</span>
              </summary>
              <div style={{ padding:'0 18px 18px', borderTop:'1px solid var(--border)', paddingTop:16 }}>
                <div style={{ background:'#F0FDF4', border:'1px solid #86EFAC', borderRadius:10, padding:'10px 14px', marginBottom:14 }}>
                  <strong style={{ color:'#15803D', fontSize:13 }}>✅ Recommended:</strong>
                  <span style={{ color:'#15803D', fontSize:13.5, marginLeft:6 }}>{city.bestRoute}</span>
                </div>
                <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fill,minmax(160px,1fr))', gap:8, marginBottom:14 }}>
                  {[['🚗 Road',city.road],['🚂 Train',city.train],['✈️ Flight',city.flight],['🚌 Bus',city.bus]].map(([mode,info])=>(
                    <div key={mode} style={{ background:'var(--bg)', borderRadius:8, padding:'9px 12px', border:'1px solid var(--border)' }}>
                      <div style={{ fontWeight:700, fontSize:12, color:'var(--navy)', marginBottom:3 }}>{mode}</div>
                      <div style={{ fontSize:12.5, color:'var(--text-muted)' }}>{info}</div>
                    </div>
                  ))}
                </div>
                {city.trains[0][0] !== 'No direct train' && city.trains[0][0] !== 'No direct' && (
                  <>
                    <div style={{ fontWeight:700, fontSize:12.5, color:'var(--navy)', marginBottom:8, textTransform:'uppercase', letterSpacing:'0.06em' }}>Key Trains</div>
                    <div style={{ overflowX:'auto' }}>
                      <table style={{ width:'100%', borderCollapse:'collapse', fontSize:13 }}>
                        <thead><tr style={{ background:'var(--navy-light)' }}>
                          {['Train','Route','Departs','Arrives','Fare'].map(h=><th key={h} style={{ padding:'8px 10px', textAlign:'left', color:'var(--navy)', fontWeight:700, fontSize:11.5 }}>{h}</th>)}
                        </tr></thead>
                        <tbody>
                          {city.trains.map(([t,r,d,a,f])=>(
                            <tr key={t} style={{ borderBottom:'1px solid var(--border)' }}>
                              {[t,r,d,a,f].map((v,i)=><td key={i} style={{ padding:'8px 10px', fontSize:13, color:i===0?'var(--navy)':'var(--text-muted)', fontWeight:i===0?600:400 }}>{v}</td>)}
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </>
                )}
              </div>
            </details>
          ))}
        </div>

        {/* Haridwar local info */}
        <h2 style={{ fontFamily:'var(--font-display)', fontSize:'1.45rem', fontWeight:700, color:'var(--navy)', marginBottom:14 }}>
          Once You Reach Haridwar — What to Do
        </h2>
        {[
          ['🏨 Where to stay', 'Haridwar has hotels near Har Ki Pauri (pilgrim area) at ₹800–3,000/night. Most Char Dham packages include overnight stay in Haridwar on arrival day. Shiv Ganga Travels recommends arriving the evening before departure for a smooth start.'],
          ['🙏 Ganga Aarti', 'Attend the Ganga Aarti at Har Ki Pauri at sunset (6:30–7:30 PM in summer). This is the traditional spiritual start of every Char Dham Yatra. Arrive 30 minutes early for a good spot.'],
          ['🪪 Biometric Registration', 'Complete Char Dham biometric registration at the Haridwar centre near Har Ki Pauri (open 8 AM–8 PM). Bring original Aadhaar. Shiv Ganga Travels handles this for all our package pilgrims.'],
          ['📍 Our Office', 'Shiv Ganga Travels office: Saptrishi Road, Near Shantikunj Gate No. 1, Bhupatwala, Haridwar 249410. Open 7 AM–9 PM daily. Pre-departure briefing, final itinerary, vehicle inspection — all done the evening before.'],
        ].map(([icon_title, desc]) => (
          <div key={icon_title} style={{ display:'flex', gap:12, padding:'12px 0', borderBottom:'1px solid var(--border)', marginBottom:4 }}>
            <div style={{ fontWeight:700, fontSize:14, color:'var(--navy)', minWidth:180, flexShrink:0 }}>{icon_title}</div>
            <div style={{ fontSize:14.5, color:'var(--text-mid)', lineHeight:1.75 }}>{desc}</div>
          </div>
        ))}

        {/* CTA */}
        <div style={{ background:'var(--navy)', borderRadius:16, padding:'28px 24px', textAlign:'center', marginTop:36 }}>
          <h3 style={{ color:'#fff', fontFamily:'var(--font-display)', fontSize:'1.3rem', marginBottom:10 }}>
            Need Help Planning Your Journey to Haridwar?
          </h3>
          <p style={{ color:'rgba(255,255,255,0.7)', fontSize:14, marginBottom:20 }}>
            Tell us your city and we will suggest the best route, trains to book, and handle your Haridwar pickup.
          </p>
          <div style={{ display:'flex', gap:10, justifyContent:'center', flexWrap:'wrap' }}>
            <a href={`https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent('Namaste! I need help reaching Haridwar for Char Dham Yatra 2026. Please guide me.')}`}
              target="_blank" rel="nofollow noopener noreferrer"
              style={{ background:'#25D366', color:'#fff', padding:'12px 24px', borderRadius:9, fontWeight:700, fontSize:13.5, textDecoration:'none' }}>
              💬 WhatsApp — Get Travel Advice
            </a>
            <a href='tel:+917017082807'
              style={{ background:'rgba(255,255,255,0.12)', color:'#fff', padding:'12px 24px', borderRadius:9, fontWeight:700, fontSize:13.5, textDecoration:'none', border:'1px solid rgba(255,255,255,0.2)' }}>
              📞 {SITE.phone}
            </a>
          </div>
        </div>

        {/* Related */}
        <div style={{ borderTop:'1px solid var(--border)', paddingTop:24, marginTop:32 }}>
          <div style={{ fontWeight:700, fontSize:13.5, color:'var(--navy)', marginBottom:12 }}>Related Guides</div>
          <div style={{ display:'flex', gap:10, flexWrap:'wrap' }}>
            {[['Char Dham Road Status 2026','/char-dham-road-status'],['Char Dham Registration','/blog/char-dham-yatra-registration'],['Char Dham Cost 2026','/blog/char-dham-yatra-cost'],['Emergency Contacts','/char-dham-yatra-emergency-contacts']].map(([label,href])=>(
              <Link key={href} href={href} style={{ background:'var(--bg)', border:'1px solid var(--border)', color:'var(--navy)', padding:'7px 14px', borderRadius:8, fontSize:12.5, fontWeight:600, textDecoration:'none' }}>
                {label} →
              </Link>
            ))}
          </div>
        </div>
      </article>
    </>
  );
}
