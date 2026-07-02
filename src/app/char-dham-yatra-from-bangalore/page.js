import Link from 'next/link';
import CityLinkMesh from '@/components/CityLinkMesh';
import { SITE } from '@/data/packages';
import BlogCTA from '@/components/BlogCTA';
import BlogAuthor from '@/components/BlogAuthor';
import PeopleAlsoAsk from '@/components/PeopleAlsoAsk';

export const metadata = {
  title: 'Char Dham Yatra from Bangalore 2026: Packages',
  description: 'Char Dham Yatra from Bangalore 2026 — packages from ₹26,999/person with pickup, VIP darshan and free registration help. Direct Haridwar operator.',
  keywords: ['char dham yatra from bangalore','char dham yatra bangalore 2026','char dham package from bangalore','kedarnath from bangalore','haridwar from bangalore'],
  alternates: { canonical: `${SITE.baseUrl}/char-dham-yatra-from-bangalore` },
  openGraph: {
    title: 'Char Dham Yatra from Bangalore 2026 — Direct Operator, Zero Commission',
    description: 'Char Dham Yatra from Bangalore 2026. 2,100 km · 2h 30m direct flight to Dehradun. All-inclusive packages from ₹26,999/person. Direct Haridwar operator — zero commission. Bangalore pickup, VIP darshan,',
    url: `${SITE.baseUrl}/char-dham-yatra-from-bangalore`,
    type: 'website',
    images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: 'Char Dham Yatra from Bangalore 2026 — Shiv Ganga Travels' }],
  },
};

function Schema() {
  const org = {
    '@context': 'https://schema.org', '@type': 'TravelAgency',
    name: SITE.name, url: SITE.baseUrl, telephone: SITE.phone,
    '@id': `${SITE.baseUrl}/#organization`,
    address: { '@type':'PostalAddress', streetAddress:'Saptrishi Road, Near Shantikunj Gate No. 1, Bhupatwala', addressLocality:'Haridwar', addressRegion:'Uttarakhand', postalCode:'249410', addressCountry:'IN' },
    aggregateRating: { '@type':'AggregateRating', ratingValue:4.6, reviewCount:38, bestRating:5 },
    areaServed: [{ '@type':'City', name:'Bangalore' }, { '@type':'State', name:'Uttarakhand' }],
  };
  const faq = {
    '@context': 'https://schema.org', '@type': 'FAQPage',
    mainEntity: [
      { '@type':'Question', name:'How to reach Haridwar from Bangalore for Char Dham Yatra?', acceptedAnswer:{ '@type':'Answer', text:'Bangalore (BLR) to Dehradun (DED) — IndiGo direct, 2h 30m, from ₹3,200. Fly to Dehradun, cab 35km to Haridwar (45 min). Strongly recommended over the 40+ hour train.' } },
      { '@type':'Question', name:'What is the cost of Char Dham Yatra from Bangalore?', acceptedAnswer:{ '@type':'Answer', text:'Char Dham Yatra from Bangalore with Shiv Ganga Travels starts at ₹26,999/person for a 9N/10D all-inclusive package from Haridwar. This covers AC vehicle, hotels, breakfast and dinner, VIP darshan at all 4 dhams, and 24x7 support. Bangalore pickup is available.' } },
    ],
  };
  return (<><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(org) }} /><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faq) }} /></>);
}

const h2 = { fontFamily:'var(--font-display)', fontSize:'clamp(1.2rem,2.5vw,1.5rem)', fontWeight:700, color:'var(--navy)', marginBottom:12, marginTop:36, letterSpacing:'-0.02em' };
const p  = { fontSize:15.5, color:'#334155', lineHeight:1.9, marginBottom:16 };

const PAA = [
  { q:'How far is Char Dham Yatra from Bangalore?', a:'Bangalore to Haridwar — the gateway to the dhams — is roughly 2,100 km. The full Char Dham circuit then covers about 1,100–1,400 km from Haridwar and back.' },
  { q:'How do I reach Haridwar from Bangalore?', a:'From Bangalore it\'s about 2,100 km to Haridwar. Best options: 2h 30m direct flight to Dehradun. Jolly Grant Airport, Dehradun is the nearest airport (35 km from Haridwar); Haridwar Junction is the nearest railhead. From there the circuit begins.' },
  { q:'How many days are needed for Char Dham Yatra from Bangalore?', a:'Plan 10–12 days for the full road circuit including travel from Bangalore. By helicopter (flying from Dehradun) the on-ground portion drops to 5–6 days. Senior citizens should allow a couple of extra days for acclimatisation.' },
  { q:'What is the cost of Char Dham Yatra from Bangalore?', a:'Our all-inclusive road packages start from ₹26,999 per person, covering vehicle from Haridwar, hotels, meals, guide, VIP darshan and free registration. The helicopter package runs about ₹2.2–2.4 lakh. Train or flight fare to Haridwar/Dehradun is usually separate.' },
  { q:'What is the best time for Char Dham Yatra from Bangalore?', a:'May–June and September–October, matching the temple season — the 2026 dhams open between April 19 and 23. Book early for these peak windows and avoid the July–August monsoon, when landslides can delay the mountain stretches.' },
  { q:'Is Char Dham Yatra registration mandatory?', a:'Yes. Free biometric registration is compulsory for all four dhams and checked at police barriers like Sonprayag. Register online at registrationandtouristcare.uk.gov.in before travelling — we complete it free for everyone in our packages.' },
];

function PAASchema() {
  const paa = { '@context':'https://schema.org','@type':'FAQPage',
    mainEntity: PAA.map(x => ({ '@type':'Question', name:x.q, answerCount:1, acceptedAnswer:{ '@type':'Answer', text:x.a } })) };
  return null; // one FAQPage per page — PAA answers stay visible in the accordion, schema lives in the main FAQ node
}

export default function CharDhamFromBangalore() {
  return (
    <>
      <Schema />

      <section style={{ background:'linear-gradient(145deg,var(--navy) 0%,#1A3E75 60%,var(--teal) 100%)', padding:'52px 20px 40px' }}>
        <div style={{ maxWidth:860, margin:'0 auto', textAlign:'center' }}>
          <span style={{ background:'rgba(232,146,10,0.18)', color:'#FFD166', fontSize:11, fontWeight:700, letterSpacing:'0.12em', textTransform:'uppercase', padding:'5px 16px', borderRadius:100, display:'inline-block', marginBottom:14 }}>Char Dham Yatra 2026 · From Bangalore</span>
          <h1 style={{ color:'#fff', fontFamily:'var(--font-display)', fontSize:'clamp(1.7rem,4vw,2.6rem)', fontWeight:700, letterSpacing:'-0.02em', marginBottom:14 }}>
            Char Dham Yatra from Bangalore 2026
          </h1>
          <p style={{ color:'rgba(255,255,255,0.8)', fontSize:15, lineHeight:1.7, maxWidth:700, margin:'0 auto 20px' }}>
            2,100 km · 2h 30m direct flight to Dehradun · All-inclusive from <strong style={{ color:'#FFD166' }}>₹26,999/person</strong> · Zero commission
          </p>
          <div style={{ display:'flex', gap:10, justifyContent:'center', flexWrap:'wrap' }}>
            <a href={`https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent('Namaste! I want to book Char Dham Yatra 2026 from Bangalore. Please share packages and availability.')}`} target="_blank" rel="nofollow noopener noreferrer"
              style={{ background:'#25D366', color:'#fff', padding:'11px 22px', borderRadius:9, fontWeight:700, fontSize:13.5, textDecoration:'none' }}>💬 WhatsApp Quote</a>
            <a href={`tel:${SITE.phone}`} style={{ background:'rgba(255,255,255,0.15)', color:'#fff', padding:'11px 22px', borderRadius:9, fontWeight:700, fontSize:13.5, textDecoration:'none', border:'1px solid rgba(255,255,255,0.3)' }}>📞 Call Now</a>
          </div>
        </div>
      </section>

      <nav style={{ background:'var(--bg)', borderBottom:'1px solid var(--border)', padding:'9px 20px' }}>
        <div style={{ maxWidth:'var(--container)', margin:'0 auto', fontSize:12, color:'var(--text-muted)', display:'flex', gap:6, flexWrap:'wrap' }}>
          <Link href="/" style={{ color:'var(--navy)', textDecoration:'none' }}>Home</Link><span>›</span>
          <Link href="/char-dham-yatra" style={{ color:'var(--navy)', textDecoration:'none' }}>Char Dham Yatra</Link><span>›</span>
          <span>From Bangalore</span>
        </div>
      </nav>

      <article style={{ maxWidth:900, margin:'0 auto', padding:'36px 20px 60px' }}>
        <BlogAuthor variant="top" author="sumit" />

        <div style={{ background:'var(--navy)', borderRadius:14, padding:'18px 20px', marginBottom:28, display:'grid', gridTemplateColumns:'repeat(auto-fill,minmax(140px,1fr))', gap:10 }}>
          <div key="Distance"><div style={{ fontSize:11, color:'rgba(255,255,255,0.55)', marginBottom:2 }}>{`Distance`}</div><div style={{ fontWeight:700, fontSize:13.5, color:'#FFD166' }}>{`2,100 km`}</div></div>
          <div key="Flight time"><div style={{ fontSize:11, color:'rgba(255,255,255,0.55)', marginBottom:2 }}>{`Flight time`}</div><div style={{ fontWeight:700, fontSize:13.5, color:'#FFD166' }}>{`2h 30m direct`}</div></div>
          <div key="Total trip"><div style={{ fontSize:11, color:'rgba(255,255,255,0.55)', marginBottom:2 }}>{`Total trip`}</div><div style={{ fontWeight:700, fontSize:13.5, color:'#FFD166' }}>{`11–13 days`}</div></div>
          <div key="Package from"><div style={{ fontSize:11, color:'rgba(255,255,255,0.55)', marginBottom:2 }}>{`Package from`}</div><div style={{ fontWeight:700, fontSize:13.5, color:'#FFD166' }}>{`₹26,999/person`}</div></div>
          <div key="Best route"><div style={{ fontSize:11, color:'rgba(255,255,255,0.55)', marginBottom:2 }}>{`Best route`}</div><div style={{ fontWeight:700, fontSize:13.5, color:'#FFD166' }}>{`Fly to Dehradun`}</div></div>
          <div key="Registration"><div style={{ fontSize:11, color:'rgba(255,255,255,0.55)', marginBottom:2 }}>{`Registration`}</div><div style={{ fontWeight:700, fontSize:13.5, color:'#FFD166' }}>{`FREE · We handle`}</div></div>
        </div>

        <p style={{ ...p, fontStyle:'italic', borderLeft:'3px solid var(--teal)', paddingLeft:16, background:'var(--navy-light)', padding:'14px 16px', borderRadius:'0 10px 10px 0', marginBottom:24 }}>
          <strong>Bangalore to Haridwar — Char Dham 2026:</strong> Bangalore is 2,100km from Haridwar. The train takes 40+ hours — don't do it. Fly to Dehradun (2h 30m direct) and arrive rested. Bengaluru–Dehradun fares drop to ₹3,200 in October.
        </p>

        <h2 style={{...h2}}>How to Reach Haridwar from Bangalore</h2>
        <p style={{...p}}>All our Char Dham packages start and end at Haridwar — the spiritual gateway of the circuit. Getting there is your first step.</p>

        <h3 style={{ fontFamily:'var(--font-display)', fontSize:'1.05rem', fontWeight:700, color:'var(--navy)', marginBottom:10, marginTop:20 }}>🚂 Train from Bangalore</h3>
        <div style={{ overflowX:'auto', marginBottom:16 }}>
          <table style={{ width:'100%', borderCollapse:'collapse', fontSize:13 }}>
            <thead><tr style={{ background:'var(--navy)' }}>
              {['Train','From','Departs','Arrives','Duration','Cost','Tip'].map(h => (<th key={h} style={{ padding:'9px 12px', textAlign:'left', color:'#fff', fontWeight:700, fontSize:11.5, whiteSpace:'nowrap' }}>{h}</th>))}
            </tr></thead>
            <tbody>
              <tr style={{ borderBottom:'1px solid var(--border)', background:'#fff' }}><td style={{ padding:'8px 12px', fontWeight:600, color:'var(--navy)', fontSize:12.5 }}>{`Sampark Kranti (12649)`}</td><td style={{ padding:'8px 12px', color:'#475569', fontSize:12 }}>{`KSR Bengaluru`}</td><td style={{ padding:'8px 12px', color:'#475569', fontSize:12 }}>{`08:00 PM`}</td><td style={{ padding:'8px 12px', color:'#475569', fontSize:12 }}>{`Delhi`}</td><td style={{ padding:'8px 12px', color:'#475569', fontSize:12 }}>{`40h`}</td><td style={{ padding:'8px 12px', color:'#475569', fontSize:12 }}>{`Then Haridwar train`}</td><td style={{ padding:'8px 12px', color:'#475569', fontSize:12 }}>{`2-step, 50h+ total`}</td></tr>
              <tr style={{ borderBottom:'1px solid var(--border)', background:'var(--bg)' }}><td style={{ padding:'8px 12px', fontWeight:600, color:'var(--navy)', fontSize:12.5 }}>{`Via Delhi`}</td><td style={{ padding:'8px 12px', color:'#475569', fontSize:12 }}>{`KSR Bengaluru`}</td><td style={{ padding:'8px 12px', color:'#475569', fontSize:12 }}>{`Various`}</td><td style={{ padding:'8px 12px', color:'#475569', fontSize:12 }}>{`Delhi`}</td><td style={{ padding:'8px 12px', color:'#475569', fontSize:12 }}>{`38h+`}</td><td style={{ padding:'8px 12px', color:'#475569', fontSize:12 }}>{`Then Haridwar train`}</td><td style={{ padding:'8px 12px', color:'#475569', fontSize:12 }}>{`Fly instead`}</td></tr>
            </tbody>
          </table>
        </div>

        <div style={{ background:'#EEF6FF', border:'1px solid #B5D4F4', borderRadius:10, padding:'12px 16px', marginBottom:14 }}>
          <div style={{ fontWeight:700, fontSize:13.5, color:'#0C447C', marginBottom:4 }}>✈️ Flight from Bangalore</div>
          <div style={{ fontSize:13.5, color:'#185FA5', lineHeight:1.7 }}>Bangalore (BLR) to Dehradun (DED) — IndiGo direct, 2h 30m. Book 60+ days ahead for ₹3,200–5,500. Jolly Grant Airport is 35km from Haridwar, cab takes 45 minutes.</div>
        </div>

        <div style={{ background:'#fff', borderRadius:10, padding:'12px 16px', border:'1px solid var(--border)', borderLeft:'3px solid var(--teal)', marginBottom:20 }}>
          <div style={{ fontWeight:700, fontSize:13.5, color:'var(--navy)', marginBottom:4 }}>🚗 By Road from Bangalore</div>
          <div style={{ fontSize:13.5, color:'#475569', lineHeight:1.7 }}>Bangalore to Haridwar is 2,100km — three days minimum. Not recommended before a demanding 10-day yatra circuit.</div>
        </div>

        <div style={{ background:'rgba(232,146,10,0.07)', border:'1px solid rgba(232,146,10,0.25)', borderRadius:10, padding:'14px 16px', marginBottom:28 }}>
          <div style={{ fontWeight:700, fontSize:13, color:'#7B3F00', marginBottom:4 }}>💡 What we know about Bangalore pilgrims — 15 seasons of experience</div>
          <div style={{ fontSize:13.5, color:'#7B3F00', lineHeight:1.75 }}>Bengaluru sends a strong contingent — IT professionals who plan the yatra for May long weekends, with bookings spiking in late February. Kannada and Tamil-speaking groups from South Bengaluru consolidate into groups of 12–20 for shared Innova or Tempo Traveller bookings. Families from Koramangala and Whitefield form the bulk of our October batch. Bengaluru pilgrims are some of the best planners we see — if you WhatsApp us early, we can reserve slots before they fill.</div>
        </div>

        <BlogCTA variant="inline" intent="booking" />

        <h2 style={{...h2}}>Package Inclusions — Char Dham from Bangalore</h2>
        <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(200px,1fr))', gap:8, marginBottom:16 }}>
          {[
            '✅ AC vehicle (Innova / Tempo Traveller)',
            '✅ Airport / station pickup in Bangalore or Haridwar',
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
          <strong>Package from Bangalore:</strong> ₹26,999/person · 9N/10D · All-inclusive · Zero commission
        </div>

        <h2 style={{...h2}}>Pickup Points in Bangalore</h2>
        <div style={{ display:'flex', gap:8, flexWrap:'wrap', marginBottom:16 }}>
<span key="Kempegowda International Airport (BLR)" style={{ background:'#fff', border:'1px solid var(--border)', color:'var(--navy)', padding:'7px 14px', borderRadius:8, fontSize:12.5, fontWeight:600 }}>📍 {`Kempegowda International Airport (BLR)`}</span>
          <span key="Majestic (KSR) Railway Station" style={{ background:'#fff', border:'1px solid var(--border)', color:'var(--navy)', padding:'7px 14px', borderRadius:8, fontSize:12.5, fontWeight:600 }}>📍 {`Majestic (KSR) Railway Station`}</span>
          <span key="Koramangala" style={{ background:'#fff', border:'1px solid var(--border)', color:'var(--navy)', padding:'7px 14px', borderRadius:8, fontSize:12.5, fontWeight:600 }}>📍 {`Koramangala`}</span>
          <span key="Whitefield" style={{ background:'#fff', border:'1px solid var(--border)', color:'var(--navy)', padding:'7px 14px', borderRadius:8, fontSize:12.5, fontWeight:600 }}>📍 {`Whitefield`}</span>
          <span key="Electronic City" style={{ background:'#fff', border:'1px solid var(--border)', color:'var(--navy)', padding:'7px 14px', borderRadius:8, fontSize:12.5, fontWeight:600 }}>📍 {`Electronic City`}</span>
          <span key="Yeshwanthpur Station" style={{ background:'#fff', border:'1px solid var(--border)', color:'var(--navy)', padding:'7px 14px', borderRadius:8, fontSize:12.5, fontWeight:600 }}>📍 {`Yeshwanthpur Station`}</span>
        </div>
        <p style={{ ...p, fontSize:14 }}>South Indian pilgrims doing their first Himalayan Char Dham are sometimes unprepared for Kedarnath cold — 5–10°C even in May. We brief every Bengaluru group specifically: thermal layers and a windproof jacket are not optional. Our vehicles carry oxygen cylinders, which gives first-time high-altitude travellers peace of mind.</p>

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
              <CityLinkMesh current="bangalore" />
      </article>
    </>
  );
}
