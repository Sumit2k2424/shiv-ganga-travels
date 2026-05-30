import Link from 'next/link';
import { SITE } from '@/data/packages';
import BlogCTA from '@/components/BlogCTA';
import BlogAuthor from '@/components/BlogAuthor';
import PeopleAlsoAsk from '@/components/PeopleAlsoAsk';

export const metadata = {
  title: 'Char Dham Yatra from Mumbai 2026 — Packages, Routes & Direct Booking',
  description: 'Char Dham Yatra from Mumbai 2026. 1,450 km · 1h 45m flight · 26h train. All-inclusive packages from ₹24,999/person. Direct Haridwar operator — zero commission. Mumbai pickup, VIP darshan, registration handled free.',
  keywords: ['char dham yatra from mumbai','char dham yatra mumbai 2026','char dham package from mumbai','kedarnath from mumbai','haridwar from mumbai'],
  alternates: { canonical: `${SITE.baseUrl}/char-dham-yatra-from-mumbai` },
  openGraph: {
    title: 'Char Dham Yatra from Mumbai 2026 — Direct Operator, Zero Commission',
    description: 'Char Dham Yatra from Mumbai 2026. 1,450 km · 1h 45m flight · 26h train. All-inclusive packages from ₹24,999/person. Direct Haridwar operator — zero commission. Mumbai pickup, VIP darshan, registration',
    url: `${SITE.baseUrl}/char-dham-yatra-from-mumbai`,
    type: 'website',
    images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: 'Char Dham Yatra from Mumbai 2026 — Shiv Ganga Travels' }],
  },
};

function Schema() {
  const org = {
    '@context': 'https://schema.org', '@type': 'TravelAgency',
    name: SITE.name, url: SITE.baseUrl, telephone: SITE.phone,
    '@id': `${SITE.baseUrl}/#organization`,
    address: { '@type':'PostalAddress', streetAddress:'Saptrishi Road, Near Shantikunj Gate No. 1, Bhupatwala', addressLocality:'Haridwar', addressRegion:'Uttarakhand', postalCode:'249410', addressCountry:'IN' },
    aggregateRating: { '@type':'AggregateRating', ratingValue:4.6, reviewCount:38, bestRating:5 },
    areaServed: [{ '@type':'City', name:'Mumbai' }, { '@type':'State', name:'Uttarakhand' }],
  };
  const faq = {
    '@context': 'https://schema.org', '@type': 'FAQPage',
    mainEntity: [
      { '@type':'Question', name:'How to reach Haridwar from Mumbai for Char Dham Yatra?', acceptedAnswer:{ '@type':'Answer', text:'Mumbai (BOM) to Dehradun (DED) — 1h 45m direct (IndiGo/Air India). Fly in the morning, reach Haridwar by afternoon. Alternatively take the Dehradun Express (26h direct train). Fly is strongly recommended.' } },
      { '@type':'Question', name:'What is the cost of Char Dham Yatra from Mumbai?', acceptedAnswer:{ '@type':'Answer', text:'Char Dham Yatra from Mumbai with Shiv Ganga Travels starts at ₹24,999/person for a 9N/10D all-inclusive package from Haridwar. This covers AC vehicle, hotels, breakfast and dinner, VIP darshan at all 4 dhams, and 24x7 support. Mumbai pickup is available.' } },
    ],
  };
  return (<><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(org) }} /><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faq) }} /></>);
}

const h2 = { fontFamily:'var(--font-display)', fontSize:'clamp(1.2rem,2.5vw,1.5rem)', fontWeight:700, color:'var(--navy)', marginBottom:12, marginTop:36, letterSpacing:'-0.02em' };
const p  = { fontSize:15.5, color:'#334155', lineHeight:1.9, marginBottom:16 };

const PAA = [
  { q:'How do I reach Char Dham from Mumbai?', a:'Fly Mumbai to Dehradun (about 2.5 hours, often via Delhi) or to Delhi and continue by train/road to Haridwar. Trains from Mumbai to Haridwar run too but take 24+ hours. From Haridwar or Dehradun, the road yatra begins.' },
  { q:'How many days for Char Dham Yatra from Mumbai?', a:'Allow 12–14 days including flights: travel to Haridwar, the 9–10 day circuit, and return. The helicopter option from Dehradun cuts the on-ground portion to 5–6 days, so 8–9 days total from Mumbai.' },
  { q:'What is the cost of Char Dham Yatra from Mumbai?', a:'The land portion from Haridwar starts around ₹20,999–40,900 per person depending on hotels and vehicle, plus your Mumbai–Dehradun/Delhi airfare. Helicopter packages run about ₹2.2–2.4 lakh per person.' },
  { q:'What is the best time for Char Dham Yatra from Mumbai?', a:'May–June or September–October. Book flights and packages early for these windows, as they\'re peak season. The 2026 dhams open between April 19 and 23. Avoid the July–August monsoon.' },
  { q:'Is Char Dham Yatra suitable for families from Mumbai?', a:'Yes — it\'s a popular family pilgrimage. For elderly members or young children, the helicopter package or a senior-friendly road itinerary with extra rest days and pony/palki support at Yamunotri and Kedarnath works best.' },
];

function PAASchema() {
  const paa = { '@context':'https://schema.org','@type':'FAQPage',
    mainEntity: PAA.map(x => ({ '@type':'Question', name:x.q, answerCount:1, acceptedAnswer:{ '@type':'Answer', text:x.a } })) };
  return (<script type="application/ld+json" dangerouslySetInnerHTML={{ __html:JSON.stringify(paa) }}/>);
}

export default function CharDhamFromMumbai() {
  return (
    <>
      <Schema />

      <section style={{ background:'linear-gradient(145deg,var(--navy) 0%,#1A3E75 60%,var(--teal) 100%)', padding:'52px 20px 40px' }}>
        <div style={{ maxWidth:860, margin:'0 auto', textAlign:'center' }}>
          <span style={{ background:'rgba(232,146,10,0.18)', color:'#FFD166', fontSize:11, fontWeight:700, letterSpacing:'0.12em', textTransform:'uppercase', padding:'5px 16px', borderRadius:100, display:'inline-block', marginBottom:14 }}>Char Dham Yatra 2026 · From Mumbai</span>
          <h1 style={{ color:'#fff', fontFamily:'var(--font-display)', fontSize:'clamp(1.7rem,4vw,2.6rem)', fontWeight:700, letterSpacing:'-0.02em', marginBottom:14 }}>
            Char Dham Yatra from Mumbai 2026
          </h1>
          <p style={{ color:'rgba(255,255,255,0.8)', fontSize:15, lineHeight:1.7, maxWidth:700, margin:'0 auto 20px' }}>
            1,450 km · 1h 45m flight · 26h train · All-inclusive from <strong style={{ color:'#FFD166' }}>₹24,999/person</strong> · Zero commission
          </p>
          <div style={{ display:'flex', gap:10, justifyContent:'center', flexWrap:'wrap' }}>
            <a href={`https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent('Namaste! I want to book Char Dham Yatra 2026 from Mumbai. Please share packages and availability.')}`} target="_blank" rel="nofollow noopener noreferrer"
              style={{ background:'#25D366', color:'#fff', padding:'11px 22px', borderRadius:9, fontWeight:700, fontSize:13.5, textDecoration:'none' }}>💬 WhatsApp Quote</a>
            <a href={`tel:${SITE.phone}`} style={{ background:'rgba(255,255,255,0.15)', color:'#fff', padding:'11px 22px', borderRadius:9, fontWeight:700, fontSize:13.5, textDecoration:'none', border:'1px solid rgba(255,255,255,0.3)' }}>📞 Call Now</a>
          </div>
        </div>
      </section>

      <nav style={{ background:'var(--bg)', borderBottom:'1px solid var(--border)', padding:'9px 20px' }}>
        <div style={{ maxWidth:'var(--container)', margin:'0 auto', fontSize:12, color:'var(--text-muted)', display:'flex', gap:6, flexWrap:'wrap' }}>
          <Link href="/" style={{ color:'var(--navy)', textDecoration:'none' }}>Home</Link><span>›</span>
          <Link href="/char-dham-yatra" style={{ color:'var(--navy)', textDecoration:'none' }}>Char Dham Yatra</Link><span>›</span>
          <span>From Mumbai</span>
        </div>
      </nav>

      <article style={{ maxWidth:900, margin:'0 auto', padding:'36px 20px 60px' }}>
        <BlogAuthor variant="top" author="sumit" />

        <div style={{ background:'var(--navy)', borderRadius:14, padding:'18px 20px', marginBottom:28, display:'grid', gridTemplateColumns:'repeat(auto-fill,minmax(140px,1fr))', gap:10 }}>
          <div key="Distance"><div style={{ fontSize:11, color:'rgba(255,255,255,0.55)', marginBottom:2 }}>{`Distance`}</div><div style={{ fontWeight:700, fontSize:13.5, color:'#FFD166' }}>{`1,450 km`}</div></div>
          <div key="Flight time"><div style={{ fontSize:11, color:'rgba(255,255,255,0.55)', marginBottom:2 }}>{`Flight time`}</div><div style={{ fontWeight:700, fontSize:13.5, color:'#FFD166' }}>{`1h 45m`}</div></div>
          <div key="Total trip"><div style={{ fontSize:11, color:'rgba(255,255,255,0.55)', marginBottom:2 }}>{`Total trip`}</div><div style={{ fontWeight:700, fontSize:13.5, color:'#FFD166' }}>{`11–13 days`}</div></div>
          <div key="Package from"><div style={{ fontSize:11, color:'rgba(255,255,255,0.55)', marginBottom:2 }}>{`Package from`}</div><div style={{ fontWeight:700, fontSize:13.5, color:'#FFD166' }}>{`₹24,999/person`}</div></div>
          <div key="Best route"><div style={{ fontSize:11, color:'rgba(255,255,255,0.55)', marginBottom:2 }}>{`Best route`}</div><div style={{ fontWeight:700, fontSize:13.5, color:'#FFD166' }}>{`Fly to Dehradun`}</div></div>
          <div key="Registration"><div style={{ fontSize:11, color:'rgba(255,255,255,0.55)', marginBottom:2 }}>{`Registration`}</div><div style={{ fontWeight:700, fontSize:13.5, color:'#FFD166' }}>{`FREE · We handle`}</div></div>
        </div>

        <p style={{ ...p, fontStyle:'italic', borderLeft:'3px solid var(--teal)', paddingLeft:16, background:'var(--navy-light)', padding:'14px 16px', borderRadius:'0 10px 10px 0', marginBottom:24 }}>
          <strong>Mumbai to Haridwar — Char Dham 2026:</strong> Most Mumbai pilgrims fly. The Dehradun Express exists — but 26 hours before a 10-day trek is punishing. Book your flight 60 days out and you'll pay under ₹3,500.
        </p>

        <h2 style={{...h2}}>How to Reach Haridwar from Mumbai</h2>
        <p style={{...p}}>All our Char Dham packages start and end at Haridwar — the spiritual gateway of the circuit. Getting there is your first step.</p>

        <h3 style={{ fontFamily:'var(--font-display)', fontSize:'1.05rem', fontWeight:700, color:'var(--navy)', marginBottom:10, marginTop:20 }}>🚂 Train from Mumbai</h3>
        <div style={{ overflowX:'auto', marginBottom:16 }}>
          <table style={{ width:'100%', borderCollapse:'collapse', fontSize:13 }}>
            <thead><tr style={{ background:'var(--navy)' }}>
              {['Train','From','Departs','Arrives','Duration','Cost','Tip'].map(h => (<th key={h} style={{ padding:'9px 12px', textAlign:'left', color:'#fff', fontWeight:700, fontSize:11.5, whiteSpace:'nowrap' }}>{h}</th>))}
            </tr></thead>
            <tbody>
              <tr style={{ borderBottom:'1px solid var(--border)', background:'#fff' }}><td style={{ padding:'8px 12px', fontWeight:600, color:'var(--navy)', fontSize:12.5 }}>{`Dehradun Express (19019)`}</td><td style={{ padding:'8px 12px', color:'#475569', fontSize:12 }}>{`Mumbai Bandra T`}</td><td style={{ padding:'8px 12px', color:'#475569', fontSize:12 }}>{`02:00 PM`}</td><td style={{ padding:'8px 12px', color:'#475569', fontSize:12 }}>{`Haridwar`}</td><td style={{ padding:'8px 12px', color:'#475569', fontSize:12 }}>{`05:30 AM (+2)`}</td><td style={{ padding:'8px 12px', color:'#475569', fontSize:12 }}>{`~26h`}</td><td style={{ padding:'8px 12px', color:'#475569', fontSize:12 }}>{`Only direct train`}</td></tr>
              <tr style={{ borderBottom:'1px solid var(--border)', background:'var(--bg)' }}><td style={{ padding:'8px 12px', fontWeight:600, color:'var(--navy)', fontSize:12.5 }}>{`Mumbai–LTT (19031)`}</td><td style={{ padding:'8px 12px', color:'#475569', fontSize:12 }}>{`Lokmanya Tilak T`}</td><td style={{ padding:'8px 12px', color:'#475569', fontSize:12 }}>{`10:10 PM`}</td><td style={{ padding:'8px 12px', color:'#475569', fontSize:12 }}>{`Haridwar`}</td><td style={{ padding:'8px 12px', color:'#475569', fontSize:12 }}>{`01:05 AM (+2)`}</td><td style={{ padding:'8px 12px', color:'#475569', fontSize:12 }}>{`~26.5h`}</td><td style={{ padding:'8px 12px', color:'#475569', fontSize:12 }}>{`Book 3AC early`}</td></tr>
            </tbody>
          </table>
        </div>

        <div style={{ background:'#EEF6FF', border:'1px solid #B5D4F4', borderRadius:10, padding:'12px 16px', marginBottom:14 }}>
          <div style={{ fontWeight:700, fontSize:13.5, color:'#0C447C', marginBottom:4 }}>✈️ Flight from Mumbai</div>
          <div style={{ fontSize:13.5, color:'#185FA5', lineHeight:1.7 }}>Mumbai (BOM) to Dehradun (DED) — IndiGo, Air India, SpiceJet. 1h 45m direct. Fly in the morning and you can do Har Ki Pauri Aarti the same evening. October fares drop to ₹2,800.</div>
        </div>

        <div style={{ background:'#fff', borderRadius:10, padding:'12px 16px', border:'1px solid var(--border)', borderLeft:'3px solid var(--teal)', marginBottom:20 }}>
          <div style={{ fontWeight:700, fontSize:13.5, color:'var(--navy)', marginBottom:4 }}>🚗 By Road from Mumbai</div>
          <div style={{ fontSize:13.5, color:'#475569', lineHeight:1.7 }}>Mumbai to Haridwar is 1,450km — two long days minimum. NH48 to Delhi, then NH334 to Haridwar. Only practical if driving is part of the pilgrimage experience itself.</div>
        </div>

        <div style={{ background:'rgba(232,146,10,0.07)', border:'1px solid rgba(232,146,10,0.25)', borderRadius:10, padding:'14px 16px', marginBottom:28 }}>
          <div style={{ fontWeight:700, fontSize:13, color:'#7B3F00', marginBottom:4 }}>💡 What we know about Mumbai pilgrims — 15 seasons of experience</div>
          <div style={{ fontSize:13.5, color:'#7B3F00', lineHeight:1.75 }}>Over 15 seasons, we have seen Mumbai pilgrims split almost evenly between May and October. The October Navratri batch from Maharashtra fills within two weeks every year — purely word of mouth. Book October by August if you are from Mumbai. Pune, Nashik and Aurangabad groups often combine with Mumbai for shared Tempo Traveller batches.</div>
        </div>

        <BlogCTA variant="inline" intent="booking" />

        <h2 style={{...h2}}>Package Inclusions — Char Dham from Mumbai</h2>
        <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(200px,1fr))', gap:8, marginBottom:16 }}>
          {[
            '✅ AC vehicle (Innova / Tempo Traveller)',
            '✅ Airport / station pickup in Mumbai or Haridwar',
            '✅ Hotels — all 9 nights (twin sharing)',
            '✅ Breakfast + dinner every day',
            '✅ VIP darshan — no queue at all 4 dhams',
            '✅ Experienced Garhwali guide throughout',
            '✅ Biometric registration — completely free',
            '✅ All tolls, parking, driver allowance',
            '✅ Oxygen cylinder + first aid in vehicle',
            '✅ 24×7 WhatsApp support throughout',
          ].map(item => (<div key={item} style={{ background:'#fff', borderRadius:8, padding:'9px 12px', border:'1px solid var(--border)', fontSize:13, color:'#334155' }}>{item}</div>))}
        </div>
        <div style={{ background:'rgba(29,158,117,0.08)', border:'1px solid #1D9E75', borderRadius:10, padding:'12px 16px', marginBottom:24, fontSize:13.5, color:'#0F5132' }}>
          <strong>Package from Mumbai:</strong> ₹24,999/person · 9N/10D · All-inclusive · Zero commission
        </div>

        <h2 style={{...h2}}>Pickup Points in Mumbai</h2>
        <div style={{ display:'flex', gap:8, flexWrap:'wrap', marginBottom:16 }}>
<span key="Chhatrapati Shivaji Terminus (CST)" style={{ background:'#fff', border:'1px solid var(--border)', color:'var(--navy)', padding:'7px 14px', borderRadius:8, fontSize:12.5, fontWeight:600 }}>📍 {`Chhatrapati Shivaji Terminus (CST)`}</span>
          <span key="Dadar Station East" style={{ background:'#fff', border:'1px solid var(--border)', color:'var(--navy)', padding:'7px 14px', borderRadius:8, fontSize:12.5, fontWeight:600 }}>📍 {`Dadar Station East`}</span>
          <span key="Bandra East" style={{ background:'#fff', border:'1px solid var(--border)', color:'var(--navy)', padding:'7px 14px', borderRadius:8, fontSize:12.5, fontWeight:600 }}>📍 {`Bandra East`}</span>
          <span key="Andheri East" style={{ background:'#fff', border:'1px solid var(--border)', color:'var(--navy)', padding:'7px 14px', borderRadius:8, fontSize:12.5, fontWeight:600 }}>📍 {`Andheri East`}</span>
          <span key="Thane Station" style={{ background:'#fff', border:'1px solid var(--border)', color:'var(--navy)', padding:'7px 14px', borderRadius:8, fontSize:12.5, fontWeight:600 }}>📍 {`Thane Station`}</span>
          <span key="Navi Mumbai (Vashi)" style={{ background:'#fff', border:'1px solid var(--border)', color:'var(--navy)', padding:'7px 14px', borderRadius:8, fontSize:12.5, fontWeight:600 }}>📍 {`Navi Mumbai (Vashi)`}</span>
        </div>
        <p style={{ ...p, fontSize:14 }}>Maharashtrian pilgrims have a strong tradition of both Kedarnath and Pandharpur Wari. We brief all Mumbai pilgrims about Kedarnath cold — a proper down jacket and thermal inners are non-negotiable even in May.</p>

        <h2 style={{...h2}}>2026 Season Status</h2>
        <div style={{ background:'#F0FDF4', border:'1px solid #86EFAC', borderRadius:12, padding:'16px 20px', marginBottom:24, display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(150px,1fr))', gap:12 }}>
          {[['🌊 Yamunotri','Open Apr 19','Closes ~Nov 7'],['🌿 Gangotri','Open Apr 19','Closes ~Nov 7'],['🏔️ Kedarnath','Open Apr 22','Closes ~Nov 11'],['🕌 Badrinath','Open Apr 23','Closes ~Nov 13']].map(([dh,o,c]) => (
            <div key={dh} style={{ textAlign:'center' }}><div style={{ fontWeight:700, fontSize:14, color:'var(--navy)', marginBottom:3 }}>{dh}</div><div style={{ fontSize:12.5, color:'#15803D', fontWeight:600 }}>{o}</div><div style={{ fontSize:12, color:'#64748b' }}>{c}</div></div>
          ))}
        </div>

        <BlogAuthor variant="bottom" author="sumit" />
        <BlogCTA variant="footer" intent="booking" />
              <div style={{ marginTop:36 }}>
          <PAASchema/>
          <PeopleAlsoAsk items={PAA}/>
        </div>
      </article>
    </>
  );
}
