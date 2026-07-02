import Link from 'next/link';
import CityLinkMesh from '@/components/CityLinkMesh';
import { SITE } from '@/data/packages';
import BlogCTA from '@/components/BlogCTA';
import BlogAuthor from '@/components/BlogAuthor';
import PeopleAlsoAsk from '@/components/PeopleAlsoAsk';

export const metadata = {
  title: 'Char Dham Yatra from Kolkata 2026: Packages',
  description: 'Char Dham Yatra from Kolkata 2026 — packages from ₹24,999/person with pickup, VIP darshan and free registration help. Direct Haridwar operator.',
  keywords: ['char dham yatra from kolkata','char dham yatra kolkata 2026','char dham package from kolkata','kedarnath from kolkata','haridwar from kolkata'],
  alternates: { canonical: `${SITE.baseUrl}/char-dham-yatra-from-kolkata` },
  openGraph: {
    title: 'Char Dham Yatra from Kolkata 2026 — Direct Operator, Zero Commission',
    description: 'Char Dham Yatra from Kolkata 2026. 1,500 km · Doon Express 27.5h direct · or 2h flight. All-inclusive packages from ₹24,999/person. Direct Haridwar operator — zero commission. Kolkata pickup, VIP dars',
    url: `${SITE.baseUrl}/char-dham-yatra-from-kolkata`,
    type: 'website',
    images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: 'Char Dham Yatra from Kolkata 2026 — Shiv Ganga Travels' }],
  },
};

function Schema() {
  const org = {
    '@context': 'https://schema.org', '@type': 'TravelAgency',
    name: SITE.name, url: SITE.baseUrl, telephone: SITE.phone,
    '@id': `${SITE.baseUrl}/#organization`,
    address: { '@type':'PostalAddress', streetAddress:'Saptrishi Road, Near Shantikunj Gate No. 1, Bhupatwala', addressLocality:'Haridwar', addressRegion:'Uttarakhand', postalCode:'249410', addressCountry:'IN' },
    aggregateRating: { '@type':'AggregateRating', ratingValue:4.6, reviewCount:38, bestRating:5 },
    areaServed: [{ '@type':'City', name:'Kolkata' }, { '@type':'State', name:'Uttarakhand' }],
  };
  const faq = {
    '@context': 'https://schema.org', '@type': 'FAQPage',
    mainEntity: [
      { '@type':'Question', name:'How to reach Haridwar from Kolkata for Char Dham Yatra?', acceptedAnswer:{ '@type':'Answer', text:'Kolkata (Howrah) to Haridwar — take the Doon Express (13009), direct, ~27.5 hours. Or fly Kolkata to Dehradun (2h, IndiGo). Both options are comfortable.' } },
      { '@type':'Question', name:'What is the cost of Char Dham Yatra from Kolkata?', acceptedAnswer:{ '@type':'Answer', text:'Char Dham Yatra from Kolkata with Shiv Ganga Travels starts at ₹24,999/person for a 9N/10D all-inclusive package from Haridwar. This covers AC vehicle, hotels, breakfast and dinner, VIP darshan at all 4 dhams, and 24x7 support. Kolkata pickup is available.' } },
    ],
  };
  return (<><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(org) }} /><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faq) }} /></>);
}

const h2 = { fontFamily:'var(--font-display)', fontSize:'clamp(1.2rem,2.5vw,1.5rem)', fontWeight:700, color:'var(--navy)', marginBottom:12, marginTop:36, letterSpacing:'-0.02em' };
const p  = { fontSize:15.5, color:'#334155', lineHeight:1.9, marginBottom:16 };

const PAA = [
  { q:'How far is Char Dham Yatra from Kolkata?', a:'Kolkata to Haridwar — the gateway to the dhams — is roughly 1,500 km. The full Char Dham circuit then covers about 1,100–1,400 km from Haridwar and back.' },
  { q:'How do I reach Haridwar from Kolkata?', a:'From Kolkata it\'s about 1,500 km to Haridwar. Best options: Doon Express (~27.5h direct) or a 2h flight to Dehradun. Jolly Grant Airport, Dehradun is the nearest airport (35 km from Haridwar); Haridwar Junction is the nearest railhead. From there the circuit begins.' },
  { q:'How many days are needed for Char Dham Yatra from Kolkata?', a:'Plan 10–12 days for the full road circuit including travel from Kolkata. By helicopter (flying from Dehradun) the on-ground portion drops to 5–6 days. Senior citizens should allow a couple of extra days for acclimatisation.' },
  { q:'What is the cost of Char Dham Yatra from Kolkata?', a:'Our all-inclusive road packages start from ₹24,999 per person, covering vehicle from Haridwar, hotels, meals, guide, VIP darshan and free registration. The helicopter package runs about ₹2.2–2.4 lakh. Train or flight fare to Haridwar/Dehradun is usually separate.' },
  { q:'What is the best time for Char Dham Yatra from Kolkata?', a:'May–June and September–October, matching the temple season — the 2026 dhams open between April 19 and 23. Book early for these peak windows and avoid the July–August monsoon, when landslides can delay the mountain stretches.' },
  { q:'Is Char Dham Yatra registration mandatory?', a:'Yes. Free biometric registration is compulsory for all four dhams and checked at police barriers like Sonprayag. Register online at registrationandtouristcare.uk.gov.in before travelling — we complete it free for everyone in our packages.' },
];

function PAASchema() {
  const paa = { '@context':'https://schema.org','@type':'FAQPage',
    mainEntity: PAA.map(x => ({ '@type':'Question', name:x.q, answerCount:1, acceptedAnswer:{ '@type':'Answer', text:x.a } })) };
  return null; // one FAQPage per page — PAA answers stay visible in the accordion, schema lives in the main FAQ node
}

export default function CharDhamFromKolkata() {
  return (
    <>
      <Schema />

      <section style={{ background:'linear-gradient(145deg,var(--navy) 0%,#1A3E75 60%,var(--teal) 100%)', padding:'52px 20px 40px' }}>
        <div style={{ maxWidth:860, margin:'0 auto', textAlign:'center' }}>
          <span style={{ background:'rgba(232,146,10,0.18)', color:'#FFD166', fontSize:11, fontWeight:700, letterSpacing:'0.12em', textTransform:'uppercase', padding:'5px 16px', borderRadius:100, display:'inline-block', marginBottom:14 }}>Char Dham Yatra 2026 · From Kolkata</span>
          <h1 style={{ color:'#fff', fontFamily:'var(--font-display)', fontSize:'clamp(1.7rem,4vw,2.6rem)', fontWeight:700, letterSpacing:'-0.02em', marginBottom:14 }}>
            Char Dham Yatra from Kolkata 2026
          </h1>
          <p style={{ color:'rgba(255,255,255,0.8)', fontSize:15, lineHeight:1.7, maxWidth:700, margin:'0 auto 20px' }}>
            1,500 km · Doon Express 27.5h direct · or 2h flight · All-inclusive from <strong style={{ color:'#FFD166' }}>₹24,999/person</strong> · Zero commission
          </p>
          <div style={{ display:'flex', gap:10, justifyContent:'center', flexWrap:'wrap' }}>
            <a href={`https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent('Namaste! Ami Char Dham Yatra 2026 book korte chai Kolkata theke. Please share packages.')}`} target="_blank" rel="nofollow noopener noreferrer"
              style={{ background:'#25D366', color:'#fff', padding:'11px 22px', borderRadius:9, fontWeight:700, fontSize:13.5, textDecoration:'none' }}>💬 WhatsApp Quote</a>
            <a href={`tel:${SITE.phone}`} style={{ background:'rgba(255,255,255,0.15)', color:'#fff', padding:'11px 22px', borderRadius:9, fontWeight:700, fontSize:13.5, textDecoration:'none', border:'1px solid rgba(255,255,255,0.3)' }}>📞 Call Now</a>
          </div>
        </div>
      </section>

      <nav style={{ background:'var(--bg)', borderBottom:'1px solid var(--border)', padding:'9px 20px' }}>
        <div style={{ maxWidth:'var(--container)', margin:'0 auto', fontSize:12, color:'var(--text-muted)', display:'flex', gap:6, flexWrap:'wrap' }}>
          <Link href="/" style={{ color:'var(--navy)', textDecoration:'none' }}>Home</Link><span>›</span>
          <Link href="/char-dham-yatra" style={{ color:'var(--navy)', textDecoration:'none' }}>Char Dham Yatra</Link><span>›</span>
          <span>From Kolkata</span>
        </div>
      </nav>

      <article style={{ maxWidth:900, margin:'0 auto', padding:'36px 20px 60px' }}>
        <BlogAuthor variant="top" author="sumit" />

        <div style={{ background:'var(--navy)', borderRadius:14, padding:'18px 20px', marginBottom:28, display:'grid', gridTemplateColumns:'repeat(auto-fill,minmax(140px,1fr))', gap:10 }}>
          <div key="Distance"><div style={{ fontSize:11, color:'rgba(255,255,255,0.55)', marginBottom:2 }}>{`Distance`}</div><div style={{ fontWeight:700, fontSize:13.5, color:'#FFD166' }}>{`1,500 km`}</div></div>
          <div key="Doon Express"><div style={{ fontSize:11, color:'rgba(255,255,255,0.55)', marginBottom:2 }}>{`Doon Express`}</div><div style={{ fontWeight:700, fontSize:13.5, color:'#FFD166' }}>{`~27.5h direct`}</div></div>
          <div key="Flight to Dehradun"><div style={{ fontSize:11, color:'rgba(255,255,255,0.55)', marginBottom:2 }}>{`Flight to Dehradun`}</div><div style={{ fontWeight:700, fontSize:13.5, color:'#FFD166' }}>{`~2h`}</div></div>
          <div key="Package from"><div style={{ fontSize:11, color:'rgba(255,255,255,0.55)', marginBottom:2 }}>{`Package from`}</div><div style={{ fontWeight:700, fontSize:13.5, color:'#FFD166' }}>{`₹24,999/person`}</div></div>
          <div key="Total trip"><div style={{ fontSize:11, color:'rgba(255,255,255,0.55)', marginBottom:2 }}>{`Total trip`}</div><div style={{ fontWeight:700, fontSize:13.5, color:'#FFD166' }}>{`11–13 days`}</div></div>
          <div key="Registration"><div style={{ fontSize:11, color:'rgba(255,255,255,0.55)', marginBottom:2 }}>{`Registration`}</div><div style={{ fontWeight:700, fontSize:13.5, color:'#FFD166' }}>{`FREE · We handle`}</div></div>
        </div>

        <p style={{ ...p, fontStyle:'italic', borderLeft:'3px solid var(--teal)', paddingLeft:16, background:'var(--navy-light)', padding:'14px 16px', borderRadius:'0 10px 10px 0', marginBottom:24 }}>
          <strong>Kolkata to Haridwar — Char Dham 2026:</strong> Kolkata has a rare thing — a direct train to Haridwar. The Doon Express runs Howrah to Haridwar in about 28 hours. It passes through the Gangetic plain at dawn. Many Kolkata pilgrims consider this journey part of the pilgrimage itself.
        </p>

        <h2 style={{...h2}}>How to Reach Haridwar from Kolkata</h2>
        <p style={{...p}}>All our Char Dham packages start and end at Haridwar — the spiritual gateway of the circuit. Getting there is your first step.</p>

        <h3 style={{ fontFamily:'var(--font-display)', fontSize:'1.05rem', fontWeight:700, color:'var(--navy)', marginBottom:10, marginTop:20 }}>🚂 Train from Kolkata</h3>
        <div style={{ overflowX:'auto', marginBottom:16 }}>
          <table style={{ width:'100%', borderCollapse:'collapse', fontSize:13 }}>
            <thead><tr style={{ background:'var(--navy)' }}>
              {['Train','From','Departs','Arrives','Duration','Cost','Tip'].map(h => (<th key={h} style={{ padding:'9px 12px', textAlign:'left', color:'#fff', fontWeight:700, fontSize:11.5, whiteSpace:'nowrap' }}>{h}</th>))}
            </tr></thead>
            <tbody>
              <tr style={{ borderBottom:'1px solid var(--border)', background:'#fff' }}><td style={{ padding:'8px 12px', fontWeight:600, color:'var(--navy)', fontSize:12.5 }}>{`Doon Express (13009)`}</td><td style={{ padding:'8px 12px', color:'#475569', fontSize:12 }}>{`Howrah`}</td><td style={{ padding:'8px 12px', color:'#475569', fontSize:12 }}>{`19:50`}</td><td style={{ padding:'8px 12px', color:'#475569', fontSize:12 }}>{`Haridwar`}</td><td style={{ padding:'8px 12px', color:'#475569', fontSize:12 }}>{`23:30 (+1)`}</td><td style={{ padding:'8px 12px', color:'#475569', fontSize:12 }}>{`~27.5h`}</td><td style={{ padding:'8px 12px', color:'#475569', fontSize:12 }}>{`Only direct, very popular`}</td></tr>
              <tr style={{ borderBottom:'1px solid var(--border)', background:'var(--bg)' }}><td style={{ padding:'8px 12px', fontWeight:600, color:'var(--navy)', fontSize:12.5 }}>{`Kolkata Mail (12312)`}</td><td style={{ padding:'8px 12px', color:'#475569', fontSize:12 }}>{`Howrah`}</td><td style={{ padding:'8px 12px', color:'#475569', fontSize:12 }}>{`20:00`}</td><td style={{ padding:'8px 12px', color:'#475569', fontSize:12 }}>{`Delhi HNizamuddin`}</td><td style={{ padding:'8px 12px', color:'#475569', fontSize:12 }}>{`~17h`}</td><td style={{ padding:'8px 12px', color:'#475569', fontSize:12 }}>{`Then Haridwar train`}</td><td style={{ padding:'8px 12px', color:'#475569', fontSize:12 }}>{`Faster via Delhi`}</td></tr>
            </tbody>
          </table>
        </div>

        <div style={{ background:'#EEF6FF', border:'1px solid #B5D4F4', borderRadius:10, padding:'12px 16px', marginBottom:14 }}>
          <div style={{ fontWeight:700, fontSize:13.5, color:'#0C447C', marginBottom:4 }}>✈️ Flight from Kolkata</div>
          <div style={{ fontSize:13.5, color:'#185FA5', lineHeight:1.7 }}>Kolkata (CCU) to Dehradun (DED) — IndiGo direct, ~2h, from ₹2,800. Alternatively fly to Delhi (1h 30m) and take the Mussoorie Express overnight to Haridwar.</div>
        </div>

        <div style={{ background:'#fff', borderRadius:10, padding:'12px 16px', border:'1px solid var(--border)', borderLeft:'3px solid var(--teal)', marginBottom:20 }}>
          <div style={{ fontWeight:700, fontSize:13.5, color:'var(--navy)', marginBottom:4 }}>🚗 By Road from Kolkata</div>
          <div style={{ fontSize:13.5, color:'#475569', lineHeight:1.7 }}>Kolkata to Haridwar is 1,500km — roughly two days via Patna and Allahabad. Some families do this as a gradual entry into the Gangetic spiritual geography. We can provide dharmashala waypoints if you drive.</div>
        </div>

        <div style={{ background:'rgba(232,146,10,0.07)', border:'1px solid rgba(232,146,10,0.25)', borderRadius:10, padding:'14px 16px', marginBottom:28 }}>
          <div style={{ fontWeight:700, fontSize:13, color:'#7B3F00', marginBottom:4 }}>💡 What we know about Kolkata pilgrims — 15 seasons of experience</div>
          <div style={{ fontSize:13.5, color:'#7B3F00', lineHeight:1.75 }}>Bengal has a profound Shaivite tradition — Kolkata sends some of the most emotionally engaged Kedarnath pilgrims we see each season. The Durga Puja calendar means October batches book quickly: pilgrims combine post-Puja travel with the yatra. We have had Kolkata families tell us their grandfathers did the Doon Express to Char Dham — and now they are continuing that tradition. The Doon Express feels like more than transport for them. It feels like the yatra starting the moment they board at Howrah.</div>
        </div>

        <BlogCTA variant="inline" intent="booking" />

        <h2 style={{...h2}}>Package Inclusions — Char Dham from Kolkata</h2>
        <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(200px,1fr))', gap:8, marginBottom:16 }}>
          {[
            '✅ AC vehicle (Innova / Tempo Traveller)',
            '✅ Airport / station pickup in Kolkata or Haridwar',
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
          <strong>Package from Kolkata:</strong> ₹24,999/person · 9N/10D · All-inclusive · Zero commission
        </div>

        <h2 style={{...h2}}>Pickup Points in Kolkata</h2>
        <div style={{ display:'flex', gap:8, flexWrap:'wrap', marginBottom:16 }}>
<span key="Howrah Station" style={{ background:'#fff', border:'1px solid var(--border)', color:'var(--navy)', padding:'7px 14px', borderRadius:8, fontSize:12.5, fontWeight:600 }}>📍 {`Howrah Station`}</span>
          <span key="Sealdah Station" style={{ background:'#fff', border:'1px solid var(--border)', color:'var(--navy)', padding:'7px 14px', borderRadius:8, fontSize:12.5, fontWeight:600 }}>📍 {`Sealdah Station`}</span>
          <span key="Kolkata Airport (CCU)" style={{ background:'#fff', border:'1px solid var(--border)', color:'var(--navy)', padding:'7px 14px', borderRadius:8, fontSize:12.5, fontWeight:600 }}>📍 {`Kolkata Airport (CCU)`}</span>
          <span key="Salt Lake Sector V" style={{ background:'#fff', border:'1px solid var(--border)', color:'var(--navy)', padding:'7px 14px', borderRadius:8, fontSize:12.5, fontWeight:600 }}>📍 {`Salt Lake Sector V`}</span>
          <span key="New Town Rajarhat" style={{ background:'#fff', border:'1px solid var(--border)', color:'var(--navy)', padding:'7px 14px', borderRadius:8, fontSize:12.5, fontWeight:600 }}>📍 {`New Town Rajarhat`}</span>
          <span key="Esplanade" style={{ background:'#fff', border:'1px solid var(--border)', color:'var(--navy)', padding:'7px 14px', borderRadius:8, fontSize:12.5, fontWeight:600 }}>📍 {`Esplanade`}</span>
        </div>
        <p style={{ ...p, fontSize:14 }}>Our Haridwar team has staff comfortable with Bengali. Pre-trip coordination can happen in Bengali if that is more comfortable for elderly family members. We brief all Kolkata pilgrims about the Kedarnath cold — the contrast with Bengal humidity makes it a surprise for first-timers.</p>

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
              <CityLinkMesh current="kolkata" />
      </article>
    </>
  );
}
