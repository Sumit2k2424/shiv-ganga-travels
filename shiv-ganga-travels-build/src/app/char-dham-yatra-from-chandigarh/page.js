import Link from 'next/link';
import { SITE } from '@/data/packages';
import BlogCTA from '@/components/BlogCTA';
import BlogAuthor from '@/components/BlogAuthor';

export const metadata = {
  title: 'Char Dham Yatra from Chandigarh 2026 — Packages, Routes & Direct Booking',
  description: 'Char Dham Yatra from Chandigarh 2026. 290 km · 5h road · 4h train · closest major city. All-inclusive packages from ₹21,499/person. Direct Haridwar operator — zero commission. Chandigarh pickup, VIP darshan, registration handled free.',
  keywords: ['char dham yatra from chandigarh','char dham yatra chandigarh 2026','char dham package from chandigarh','kedarnath from chandigarh','haridwar from chandigarh'],
  alternates: { canonical: `${SITE.baseUrl}/char-dham-yatra-from-chandigarh` },
  openGraph: {
    title: 'Char Dham Yatra from Chandigarh 2026 — Direct Operator, Zero Commission',
    description: 'Char Dham Yatra from Chandigarh 2026. 290 km · 5h road · 4h train · closest major city. All-inclusive packages from ₹21,499/person. Direct Haridwar operator — zero commission. Chandigarh pickup, VIP d',
    url: `${SITE.baseUrl}/char-dham-yatra-from-chandigarh`,
    type: 'website',
    images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: 'Char Dham Yatra from Chandigarh 2026 — Shiv Ganga Travels' }],
  },
};

function Schema() {
  const org = {
    '@context': 'https://schema.org', '@type': 'TravelAgency',
    name: SITE.name, url: SITE.baseUrl, telephone: SITE.phone,
    '@id': `${SITE.baseUrl}/#organization`,
    address: { '@type':'PostalAddress', streetAddress:'Saptrishi Road, Near Shantikunj Gate No. 1, Bhupatwala', addressLocality:'Haridwar', addressRegion:'Uttarakhand', postalCode:'249410', addressCountry:'IN' },
    aggregateRating: { '@type':'AggregateRating', ratingValue:4.6, reviewCount:38, bestRating:5 },
    areaServed: [{ '@type':'City', name:'Chandigarh' }, { '@type':'State', name:'Uttarakhand' }],
  };
  const faq = {
    '@context': 'https://schema.org', '@type': 'FAQPage',
    mainEntity: [
      { '@type':'Question', name:'How to reach Haridwar from Chandigarh for Char Dham Yatra?', acceptedAnswer:{ '@type':'Answer', text:'Chandigarh to Haridwar — drive (290km, 5h via NH44) or Chandigarh–Haridwar Express (4h 15m). No flight needed. Closest major city to the yatra base.' } },
      { '@type':'Question', name:'What is the cost of Char Dham Yatra from Chandigarh?', acceptedAnswer:{ '@type':'Answer', text:'Char Dham Yatra from Chandigarh with Shiv Ganga Travels starts at ₹21,499/person for a 9N/10D all-inclusive package from Haridwar. This covers AC vehicle, hotels, breakfast and dinner, VIP darshan at all 4 dhams, and 24x7 support. Chandigarh pickup is available.' } },
    ],
  };
  return (<><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(org) }} /><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faq) }} /></>);
}

const h2 = { fontFamily:'var(--font-display)', fontSize:'clamp(1.2rem,2.5vw,1.5rem)', fontWeight:700, color:'var(--navy)', marginBottom:12, marginTop:36, letterSpacing:'-0.02em' };
const p  = { fontSize:15.5, color:'#334155', lineHeight:1.9, marginBottom:16 };

export default function CharDhamFromChandigarh() {
  return (
    <>
      <Schema />

      <section style={{ background:'linear-gradient(145deg,var(--navy) 0%,#1A3E75 60%,var(--teal) 100%)', padding:'52px 20px 40px' }}>
        <div style={{ maxWidth:860, margin:'0 auto', textAlign:'center' }}>
          <span style={{ background:'rgba(232,146,10,0.18)', color:'#FFD166', fontSize:11, fontWeight:700, letterSpacing:'0.12em', textTransform:'uppercase', padding:'5px 16px', borderRadius:100, display:'inline-block', marginBottom:14 }}>Char Dham Yatra 2026 · From Chandigarh</span>
          <h1 style={{ color:'#fff', fontFamily:'var(--font-display)', fontSize:'clamp(1.7rem,4vw,2.6rem)', fontWeight:700, letterSpacing:'-0.02em', marginBottom:14 }}>
            Char Dham Yatra from Chandigarh 2026
          </h1>
          <p style={{ color:'rgba(255,255,255,0.8)', fontSize:15, lineHeight:1.7, maxWidth:700, margin:'0 auto 20px' }}>
            290 km · 5h road · 4h train · closest major city · All-inclusive from <strong style={{ color:'#FFD166' }}>₹21,499/person</strong> · Zero commission
          </p>
          <div style={{ display:'flex', gap:10, justifyContent:'center', flexWrap:'wrap' }}>
            <a href={`https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent('Namaste! I want to book Char Dham Yatra 2026 from Chandigarh. Please share packages.')}`} target="_blank" rel="nofollow noopener noreferrer"
              style={{ background:'#25D366', color:'#fff', padding:'11px 22px', borderRadius:9, fontWeight:700, fontSize:13.5, textDecoration:'none' }}>💬 WhatsApp Quote</a>
            <a href={`tel:${SITE.phone}`} style={{ background:'rgba(255,255,255,0.15)', color:'#fff', padding:'11px 22px', borderRadius:9, fontWeight:700, fontSize:13.5, textDecoration:'none', border:'1px solid rgba(255,255,255,0.3)' }}>📞 Call Now</a>
          </div>
        </div>
      </section>

      <nav style={{ background:'var(--bg)', borderBottom:'1px solid var(--border)', padding:'9px 20px' }}>
        <div style={{ maxWidth:'var(--container)', margin:'0 auto', fontSize:12, color:'var(--text-muted)', display:'flex', gap:6, flexWrap:'wrap' }}>
          <Link href="/" style={{ color:'var(--navy)', textDecoration:'none' }}>Home</Link><span>›</span>
          <Link href="/char-dham-yatra" style={{ color:'var(--navy)', textDecoration:'none' }}>Char Dham Yatra</Link><span>›</span>
          <span>From Chandigarh</span>
        </div>
      </nav>

      <article style={{ maxWidth:900, margin:'0 auto', padding:'36px 20px 60px' }}>
        <BlogAuthor variant="top" author="sumit" />

        <div style={{ background:'var(--navy)', borderRadius:14, padding:'18px 20px', marginBottom:28, display:'grid', gridTemplateColumns:'repeat(auto-fill,minmax(140px,1fr))', gap:10 }}>
          <div key="Distance"><div style={{ fontSize:11, color:'rgba(255,255,255,0.55)', marginBottom:2 }}>{`Distance`}</div><div style={{ fontWeight:700, fontSize:13.5, color:'#FFD166' }}>{`290 km`}</div></div>
          <div key="By road (5 AM)"><div style={{ fontSize:11, color:'rgba(255,255,255,0.55)', marginBottom:2 }}>{`By road (5 AM)`}</div><div style={{ fontWeight:700, fontSize:13.5, color:'#FFD166' }}>{`~5 hrs via NH44`}</div></div>
          <div key="Train (14632)"><div style={{ fontSize:11, color:'rgba(255,255,255,0.55)', marginBottom:2 }}>{`Train (14632)`}</div><div style={{ fontWeight:700, fontSize:13.5, color:'#FFD166' }}>{`4h 15m`}</div></div>
          <div key="Package from"><div style={{ fontSize:11, color:'rgba(255,255,255,0.55)', marginBottom:2 }}>{`Package from`}</div><div style={{ fontWeight:700, fontSize:13.5, color:'#FFD166' }}>{`₹21,499/person`}</div></div>
          <div key="Total trip"><div style={{ fontSize:11, color:'rgba(255,255,255,0.55)', marginBottom:2 }}>{`Total trip`}</div><div style={{ fontWeight:700, fontSize:13.5, color:'#FFD166' }}>{`10–12 days`}</div></div>
          <div key="Registration"><div style={{ fontSize:11, color:'rgba(255,255,255,0.55)', marginBottom:2 }}>{`Registration`}</div><div style={{ fontWeight:700, fontSize:13.5, color:'#FFD166' }}>{`FREE · We handle`}</div></div>
        </div>

        <p style={{ ...p, fontStyle:'italic', borderLeft:'3px solid var(--teal)', paddingLeft:16, background:'var(--navy-light)', padding:'14px 16px', borderRadius:'0 10px 10px 0', marginBottom:24 }}>
          <strong>Chandigarh to Haridwar — Char Dham 2026:</strong> Chandigarh is one of the closest major cities to Haridwar — 290km, 5 hours. Most groups drive directly. Leave at 5 AM, you are at Har Ki Pauri for the morning Aarti.
        </p>

        <h2 style={{...h2}}>How to Reach Haridwar from Chandigarh</h2>
        <p style={{...p}}>All our Char Dham packages start and end at Haridwar — the spiritual gateway of the circuit. Getting there is your first step.</p>

        <h3 style={{ fontFamily:'var(--font-display)', fontSize:'1.05rem', fontWeight:700, color:'var(--navy)', marginBottom:10, marginTop:20 }}>🚂 Train from Chandigarh</h3>
        <div style={{ overflowX:'auto', marginBottom:16 }}>
          <table style={{ width:'100%', borderCollapse:'collapse', fontSize:13 }}>
            <thead><tr style={{ background:'var(--navy)' }}>
              {['Train','From','Departs','Arrives','Duration','Cost','Tip'].map(h => (<th key={h} style={{ padding:'9px 12px', textAlign:'left', color:'#fff', fontWeight:700, fontSize:11.5, whiteSpace:'nowrap' }}>{h}</th>))}
            </tr></thead>
            <tbody>
              <tr style={{ borderBottom:'1px solid var(--border)', background:'#fff' }}><td style={{ padding:'8px 12px', fontWeight:600, color:'var(--navy)', fontSize:12.5 }}>{`Chandigarh–Haridwar Exp (14632)`}</td><td style={{ padding:'8px 12px', color:'#475569', fontSize:12 }}>{`Chandigarh`}</td><td style={{ padding:'8px 12px', color:'#475569', fontSize:12 }}>{`06:05`}</td><td style={{ padding:'8px 12px', color:'#475569', fontSize:12 }}>{`Haridwar`}</td><td style={{ padding:'8px 12px', color:'#475569', fontSize:12 }}>{`10:20`}</td><td style={{ padding:'8px 12px', color:'#475569', fontSize:12 }}>{`4h 15m`}</td><td style={{ padding:'8px 12px', color:'#475569', fontSize:12 }}>{`Morning arrival, ideal timing`}</td></tr>
              <tr style={{ borderBottom:'1px solid var(--border)', background:'var(--bg)' }}><td style={{ padding:'8px 12px', fontWeight:600, color:'var(--navy)', fontSize:12.5 }}>{`Nanda Devi Express (12205)`}</td><td style={{ padding:'8px 12px', color:'#475569', fontSize:12 }}>{`Chandigarh`}</td><td style={{ padding:'8px 12px', color:'#475569', fontSize:12 }}>{`23:30`}</td><td style={{ padding:'8px 12px', color:'#475569', fontSize:12 }}>{`Haridwar`}</td><td style={{ padding:'8px 12px', color:'#475569', fontSize:12 }}>{`01:30 (+1)`}</td><td style={{ padding:'8px 12px', color:'#475569', fontSize:12 }}>{`~2h`}</td><td style={{ padding:'8px 12px', color:'#475569', fontSize:12 }}>{`Overnight, arrives very late`}</td></tr>
            </tbody>
          </table>
        </div>

        <div style={{ background:'#EEF6FF', border:'1px solid #B5D4F4', borderRadius:10, padding:'12px 16px', marginBottom:14 }}>
          <div style={{ fontWeight:700, fontSize:13.5, color:'#0C447C', marginBottom:4 }}>✈️ Flight from Chandigarh</div>
          <div style={{ fontSize:13.5, color:'#185FA5', lineHeight:1.7 }}>No flight needed — Chandigarh to Haridwar is 290km by good highway. Save your money for the yatra itself.</div>
        </div>

        <div style={{ background:'#fff', borderRadius:10, padding:'12px 16px', border:'1px solid var(--border)', borderLeft:'3px solid var(--teal)', marginBottom:20 }}>
          <div style={{ fontWeight:700, fontSize:13.5, color:'var(--navy)', marginBottom:4 }}>🚗 By Road from Chandigarh</div>
          <div style={{ fontSize:13.5, color:'#475569', lineHeight:1.7 }}>Chandigarh to Haridwar: NH44 south via Panchkula, then NH7 through Yamunanagar and Saharanpur. Clean 4-lane highway for most of the route. Leave before 5:30 AM to avoid Ambala morning traffic.</div>
        </div>

        <div style={{ background:'rgba(232,146,10,0.07)', border:'1px solid rgba(232,146,10,0.25)', borderRadius:10, padding:'14px 16px', marginBottom:28 }}>
          <div style={{ fontWeight:700, fontSize:13, color:'#7B3F00', marginBottom:4 }}>💡 What we know about Chandigarh pilgrims — 15 seasons of experience</div>
          <div style={{ fontSize:13.5, color:'#7B3F00', lineHeight:1.75 }}>Punjab and Haryana send some of our most regular pilgrims — the Shaivite and Vaishnava traditions in this region are strong, and the proximity to Haridwar means many Chandigarh families have done parts of the circuit multiple times. A common pattern we see: first visit does only Kedarnath–Badrinath (Do Dham), second visit returns to complete Yamunotri–Gangotri. Our Do Dham package at ₹10,999 is one of the most booked products among Chandigarh pilgrims. Groups of 10+ often hire a full Tempo Traveller from Chandigarh and treat the drive as the start of the yatra.</div>
        </div>

        <BlogCTA variant="inline" intent="booking" />

        <h2 style={{...h2}}>Package Inclusions — Char Dham from Chandigarh</h2>
        <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(200px,1fr))', gap:8, marginBottom:16 }}>
          {[
            '✅ AC vehicle (Innova / Tempo Traveller)',
            '✅ Airport / station pickup in Chandigarh or Haridwar',
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
          <strong>Package from Chandigarh:</strong> ₹21,499/person · 9N/10D · All-inclusive · Zero commission
        </div>

        <h2 style={{...h2}}>Pickup Points in Chandigarh</h2>
        <div style={{ display:'flex', gap:8, flexWrap:'wrap', marginBottom:16 }}>
<span key="Chandigarh Railway Station" style={{ background:'#fff', border:'1px solid var(--border)', color:'var(--navy)', padding:'7px 14px', borderRadius:8, fontSize:12.5, fontWeight:600 }}>📍 {`Chandigarh Railway Station`}</span>
          <span key="Sector 17 Bus Stand" style={{ background:'#fff', border:'1px solid var(--border)', color:'var(--navy)', padding:'7px 14px', borderRadius:8, fontSize:12.5, fontWeight:600 }}>📍 {`Sector 17 Bus Stand`}</span>
          <span key="Sector 43 ISBT" style={{ background:'#fff', border:'1px solid var(--border)', color:'var(--navy)', padding:'7px 14px', borderRadius:8, fontSize:12.5, fontWeight:600 }}>📍 {`Sector 43 ISBT`}</span>
          <span key="Mohali" style={{ background:'#fff', border:'1px solid var(--border)', color:'var(--navy)', padding:'7px 14px', borderRadius:8, fontSize:12.5, fontWeight:600 }}>📍 {`Mohali`}</span>
          <span key="Panchkula" style={{ background:'#fff', border:'1px solid var(--border)', color:'var(--navy)', padding:'7px 14px', borderRadius:8, fontSize:12.5, fontWeight:600 }}>📍 {`Panchkula`}</span>
          <span key="Zirakpur" style={{ background:'#fff', border:'1px solid var(--border)', color:'var(--navy)', padding:'7px 14px', borderRadius:8, fontSize:12.5, fontWeight:600 }}>📍 {`Zirakpur`}</span>
        </div>
        <p style={{ ...p, fontSize:14 }}>For groups of 12+ from Chandigarh and Punjab, we can arrange a dedicated Tempo Traveller pickup from Chandigarh. Fold it into the package cost and the per-person vehicle saving is substantial compared to individual train tickets. WhatsApp us your group size for a combined Chandigarh-to-Char-Dham quote.</p>

        <h2 style={{...h2}}>2026 Season Status</h2>
        <div style={{ background:'#F0FDF4', border:'1px solid #86EFAC', borderRadius:12, padding:'16px 20px', marginBottom:24, display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(150px,1fr))', gap:12 }}>
          {[['🌊 Yamunotri','Open Apr 19','Closes ~Nov 7'],['🌿 Gangotri','Open Apr 19','Closes ~Nov 7'],['🏔️ Kedarnath','Open Apr 22','Closes ~Nov 11'],['🕌 Badrinath','Open Apr 23','Closes ~Nov 13']].map(([dh,o,c]) => (
            <div key={dh} style={{ textAlign:'center' }}><div style={{ fontWeight:700, fontSize:14, color:'var(--navy)', marginBottom:3 }}>{dh}</div><div style={{ fontSize:12.5, color:'#15803D', fontWeight:600 }}>{o}</div><div style={{ fontSize:12, color:'#64748b' }}>{c}</div></div>
          ))}
        </div>

        <BlogAuthor variant="bottom" author="sumit" />
        <BlogCTA variant="footer" intent="booking" />
      </article>
    </>
  );
}
