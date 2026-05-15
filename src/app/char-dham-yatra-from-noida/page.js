import Link from 'next/link';
import { SITE } from '@/data/packages';

export const metadata = {
  title: 'Char Dham Yatra from Noida 2026',
  description: 'Char Dham Yatra from Noida 2026. 270km to Haridwar via NH334. All-inclusive packages from ₹19,500. Door-to-door Noida pickup available.',
  keywords: ['char dham yatra from noida','char dham yatra package from noida 2026','noida to char dham yatra','noida to haridwar char dham','char dham tour from noida'],
  alternates: { canonical: `${SITE.baseUrl}/char-dham-yatra-from-noida` },
  openGraph: {
    title: 'Char Dham Yatra Package from Noida 2026 — Route, Distance & Booking',
    description: 'Char Dham Yatra from Noida 2026. 285km to Haridwar. Packages from ₹19,500/person. Direct operator, zero commission.',
    url: `${SITE.baseUrl}/char-dham-yatra-from-noida`,
    type: 'website',
    images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: 'Char Dham Yatra 2026 from Noida — Shiv Ganga Travels' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Char Dham Yatra from Noida 2026',
    description: 'Char Dham Yatra from Noida. 250km to Haridwar. Direct operator. Zero commission.',
    images: [{ url: '/opengraph-image', alt: 'Char Dham Yatra 2026 from Noida — Shiv Ganga Travels' }],
  },
};

function Schema() {
  const faq = {
    '@context': 'https://schema.org', '@type': 'FAQPage',
    mainEntity: [
      { '@type': 'Question', name: 'How far is Noida from Haridwar for Char Dham Yatra?',
        acceptedAnswer: { '@type': 'Answer', text: 'Noida is approximately 240–285km from Haridwar depending on your sector. Via NH334 (Meerut–Muzaffarnagar route), the drive takes 4.5–5.5 hours by car, avoiding Delhi traffic.' } },
      { '@type': 'Question', name: 'What is the cost of Char Dham Yatra from Noida?',
        acceptedAnswer: { '@type': 'Answer', text: 'Char Dham Yatra from Noida starts at ₹19,500 per person for 9N/10D from Haridwar (packages by Shiv Ganga Travels). Add Noida–Haridwar transfer cost separately, which we can arrange at ₹3,000–4,500 by cab.' } },
      { '@type': 'Question', name: 'What is the best route from Noida to Haridwar for Char Dham?',
        acceptedAnswer: { '@type': 'Answer', text: 'Best route: Noida → NH58/NH334 → Meerut → Muzaffarnagar → Roorkee → Haridwar. Total distance ~270km, 4.5–5 hours. Avoid NH24 via Delhi as it adds 60–90 mins in traffic.' } },
      { '@type': 'Question', name: 'Which train connects Noida to Haridwar for Char Dham Yatra?',
        acceptedAnswer: { '@type': 'Answer', text: 'From Ghaziabad (nearest railhead, 15 mins from Noida): multiple daily trains to Haridwar including Jan Shatabdi Express (3.5 hrs). From New Delhi station: Haridwar Express, Mussoorie Express. Best option for time-saving is Ghaziabad–Haridwar Jan Shatabdi.' } },
    ],
  };
  const bc = {
    '@context': 'https://schema.org', '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: SITE.baseUrl },
      { '@type': 'ListItem', position: 2, name: 'Char Dham Yatra', item: `${SITE.baseUrl}/char-dham-yatra` },
      { '@type': 'ListItem', position: 3, name: 'From Noida', item: `${SITE.baseUrl}/char-dham-yatra-from-noida` },
    ],
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faq) }}/>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(bc) }}/>
    </>
  );
}

const h2 = { fontFamily:'var(--font-display)', fontSize:'clamp(1.2rem,2.8vw,1.5rem)', fontWeight:700, color:'var(--navy)', marginBottom:14, marginTop:32 };
const p  = { fontSize:15.5, color:'#334155', lineHeight:1.85, marginBottom:16 };

export default function Page() {
  return (
    <>
      <Schema/>
      <section style={{ background:'linear-gradient(145deg,var(--navy) 0%,#1A3E75 60%,var(--teal) 100%)', padding:'52px 20px 40px' }}>
        <div style={{ maxWidth:860, margin:'0 auto', textAlign:'center' }}>
          <span style={{ background:'rgba(232,146,10,0.18)', color:'#FFD166', fontSize:11, fontWeight:700, letterSpacing:'0.12em', textTransform:'uppercase', padding:'5px 16px', borderRadius:100, display:'inline-block', marginBottom:14 }}>
            Noida NCR · Char Dham 2026
          </span>
          <h1 style={{ color:'#fff', fontFamily:'var(--font-display)', fontSize:'clamp(1.7rem,4vw,2.6rem)', fontWeight:700, letterSpacing:'-0.02em', marginBottom:14 }}>
            Char Dham Yatra Package from Noida 2026
          </h1>
          <p style={{ color:'rgba(255,255,255,0.8)', fontSize:15, lineHeight:1.7, maxWidth:680, margin:'0 auto 20px' }}>
            Yamunotri · Gangotri · Kedarnath · Badrinath — from <strong style={{ color:'#FFD166' }}>₹19,500/person</strong> · Direct operator · Zero commission
          </p>
          {['📍 ~270km to Haridwar','✅ Zero commission','🙏 9N/10D circuit','⭐ 50,000+ pilgrims'].map(t => (
            <span key={t} style={{ background:'rgba(255,255,255,0.12)', color:'#fff', fontSize:12.5, fontWeight:600, padding:'6px 14px', borderRadius:100, border:'1px solid rgba(255,255,255,0.2)', display:'inline-block', margin:'4px' }}>{t}</span>
          ))}
        </div>
      </section>

      <nav style={{ background:'var(--bg)', borderBottom:'1px solid var(--border)', padding:'9px 20px' }}>
        <div style={{ maxWidth:'var(--container)', margin:'0 auto', fontSize:12, color:'var(--text-muted)', display:'flex', gap:6 }}>
          <Link href="/" style={{ color:'var(--navy)', textDecoration:'none' }}>Home</Link><span>›</span>
          <Link href="/char-dham-yatra" style={{ color:'var(--navy)', textDecoration:'none' }}>Char Dham Yatra</Link><span>›</span>
          <span>From Noida</span>
        </div>
      </nav>

      <article style={{ maxWidth:900, margin:'0 auto', padding:'36px 20px 60px' }}>
        <div style={{ fontSize:12, color:'var(--text-muted)', marginBottom:20, textAlign:'right' }}>🗓️ <strong>Last updated:</strong> May 2026</div>

        {/* Quick stats */}
        <div style={{ background:'var(--navy)', borderRadius:14, padding:'18px 20px', marginBottom:28, display:'grid', gridTemplateColumns:'repeat(auto-fill,minmax(140px,1fr))', gap:10 }}>
          {[['Distance to Haridwar','~270km'],['Best Route','NH334 via Meerut'],['Drive Time','4.5–5 hrs'],['Yatra Duration','9N/10D'],['Package From','₹19,500/person'],['Season','Apr 19 – Nov 2026']].map(([k,v]) => (
            <div key={k}><div style={{ fontSize:11, color:'rgba(255,255,255,0.55)', marginBottom:2 }}>{k}</div><div style={{ fontWeight:700, fontSize:13.5, color:'#FFD166' }}>{v}</div></div>
          ))}
        </div>

        <p style={p}>
          Noida is one of the best-connected NCR locations for Char Dham Yatra pilgrims. At roughly 270km from Haridwar, the journey takes about 4.5–5 hours by road — and you completely skip the congestion of Delhi city by taking the NH334 route through Meerut and Muzaffarnagar. Most Noida pilgrims prefer an early morning departure (5–6 AM) to arrive in Haridwar by 10–11 AM, leaving the full day for the Ganga Aarti and first-day formalities.
        </p>

        <h2 style={h2}>How to Reach Haridwar from Noida</h2>
        <p style={p}>There are three good ways to get from Noida to Haridwar. Which one works best depends on your group size and budget.</p>

        <div style={{ display:'flex', flexDirection:'column', gap:10, marginBottom:24 }}>
          {[
            { icon:'🚗', mode:'Private Car / Cab (Recommended)', time:'4.5–5 hrs', cost:'₹3,500–4,500 per car', desc:'Take the NH334 route via Meerut–Muzaffarnagar–Roorkee–Haridwar. Avoids Delhi traffic completely. We can arrange door-to-door pickup from any Noida sector.' },
            { icon:'🚂', mode:'Train from Ghaziabad (GZB)', time:'3–3.5 hrs', cost:'₹80–400 per person', desc:'Jan Shatabdi Express (GZB to HW) is the fastest and cheapest. Ghaziabad station is just 15 mins from Noida. Book on IRCTC 60 days ahead for confirmed seats in peak season.' },
            { icon:'✈️', mode:'Flight to Dehradun', time:'40 min + 1.5 hrs road', cost:'₹2,500–4,000', desc:'IndiGo and Air India fly Delhi to Dehradun (use Delhi airport — Noida to IGI is ~50 mins). Then 1.5 hrs by cab from Jolly Grant Airport to Haridwar.' },
          ].map(r => (
            <div key={r.mode} style={{ background:'#fff', borderRadius:10, padding:'14px 16px', border:'1px solid var(--border)' }}>
              <div style={{ display:'flex', justifyContent:'space-between', flexWrap:'wrap', gap:8, marginBottom:6 }}>
                <strong style={{ fontSize:13.5, color:'var(--navy)' }}>{r.icon} {r.mode}</strong>
                <div style={{ display:'flex', gap:8 }}>
                  <span style={{ background:'var(--navy-light)', color:'var(--navy)', fontSize:12, padding:'2px 10px', borderRadius:20, fontWeight:600 }}>{r.time}</span>
                  <span style={{ background:'rgba(232,146,10,0.12)', color:'#92640a', fontSize:12, padding:'2px 10px', borderRadius:20, fontWeight:600 }}>{r.cost}</span>
                </div>
              </div>
              <p style={{ fontSize:13.5, color:'#475569', lineHeight:1.7, margin:0 }}>{r.desc}</p>
            </div>
          ))}
        </div>

        <h2 style={h2}>Train Schedule — Ghaziabad to Haridwar</h2>
        <div style={{ overflowX:'auto', marginBottom:28 }}>
          <table style={{ width:'100%', borderCollapse:'collapse', fontSize:13.5 }}>
            <thead><tr style={{ background:'var(--navy)' }}>
              {['Train','Dep GZB','Arr HW','Days','Fare (SL / 3A)'].map(h => (
                <th key={h} style={{ padding:'10px 12px', textAlign:'left', color:'#fff', fontWeight:700, fontSize:12 }}>{h}</th>
              ))}
            </tr></thead>
            <tbody>
              {[
                ['Jan Shatabdi 12055','06:20','09:55','Daily','₹260 / ₹680'],
                ['Mussoorie Express 14041','22:20','05:40+1','Daily','₹170 / ₹430'],
                ['Dehradun Express 19019','23:10','07:00+1','Daily','₹165 / ₹440'],
                ['Nanda Devi Express 12205','23:30','06:35+1','Tue,Thu,Sat','₹180 / ₹450'],
              ].map(([tr,dep,arr,days,fare], i) => (
                <tr key={tr} style={{ borderBottom:'1px solid var(--border)', background: i%2===0 ? '#fff' : 'var(--bg)' }}>
                  <td style={{ padding:'9px 12px', fontWeight:600, color:'var(--navy)', fontSize:13 }}>{tr}</td>
                  <td style={{ padding:'9px 12px', color:'#475569', fontSize:13 }}>{dep}</td>
                  <td style={{ padding:'9px 12px', color:'#475569', fontSize:13 }}>{arr}</td>
                  <td style={{ padding:'9px 12px', color:'#475569', fontSize:13 }}>{days}</td>
                  <td style={{ padding:'9px 12px', fontWeight:700, color:'var(--navy)', fontSize:13 }}>{fare}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 style={h2}>Our Noida Pickup Service</h2>
        <p style={p}>
          We operate a dedicated Noida pickup service for Char Dham pilgrims. Our AC Innova or Tempo Traveller collects your group from your Noida sector address early morning and drives you directly to Haridwar, where your yatra vehicle is waiting. No train booking stress, no lugging bags through stations. From Noida Sector 18, the pickup typically happens at 5:30 AM for a 10 AM Haridwar arrival. Cost: ₹3,500–4,500 per car (not per person) one-way from central Noida.
        </p>

        <h2 style={h2}>Char Dham Packages from Noida 2026</h2>
        <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(250px,1fr))', gap:12, marginBottom:28 }}>
          {[
            { name:'Char Dham Classic', duration:'9N/10D', price:'₹19,500', badge:'Most Popular', href:'/packages/char-dham-yatra-9n-10d-haridwar' },
            { name:'Char Dham Deluxe', duration:'11N/12D', price:'₹45,000', badge:'Best Value', href:'/packages/char-dham-yatra-11n-12d-haridwar' },
            { name:'Senior Citizen Special', duration:'12N/13D', price:'₹27,999', badge:'With Pony', href:'/packages/char-dham-yatra-senior-citizen-12n-13d' },
            { name:'Char Dham by Helicopter', duration:'5N/6D', price:'₹85,000', badge:'Premium', href:'/char-dham-helicopter' },
          ].map(pkg => (
            <Link key={pkg.href} href={pkg.href} style={{ background:'#fff', borderRadius:12, padding:'16px', border:'1px solid var(--border)', textDecoration:'none', display:'flex', flexDirection:'column', gap:6 }}>
              <span style={{ background:'rgba(232,146,10,0.12)', color:'#92640a', fontSize:11, fontWeight:700, padding:'3px 10px', borderRadius:20, width:'fit-content' }}>{pkg.badge}</span>
              <div style={{ fontWeight:700, fontSize:14, color:'var(--navy)' }}>{pkg.name}</div>
              <div style={{ fontSize:12.5, color:'var(--text-muted)' }}>{pkg.duration}</div>
              <div style={{ fontWeight:800, fontSize:16, color:'var(--gold)' }}>{pkg.price}<span style={{ fontSize:11, color:'var(--text-muted)', fontWeight:400 }}> /person</span></div>
            </Link>
          ))}
        </div>

        <h2 style={h2}>Why Book with Shiv Ganga Travels?</h2>
        <p style={p}>
          We're a Haridwar-based direct operator — not an online aggregator. That means when you pay ₹19,500, every rupee goes toward your accommodation, vehicle, meals, and guide. No platform fee. No agent commission. No markup. We've been running Char Dham Yatras since 2010, founded by a Retired Army Officer. Over 50,000 pilgrims have trusted us with their sacred journey.
        </p>
        <p style={p}>
          For Noida pilgrims specifically, we're popular because we offer Noida doorstep pickup, flexible dates (not fixed departure batches), and a Noida-specific WhatsApp contact line where you can discuss packages in Hindi or English. Most of our Noida groups book 45–60 days in advance for May and October — which are peak months for NCR pilgrims.
        </p>

        <div style={{ background:'var(--navy)', borderRadius:16, padding:'28px 24px', textAlign:'center', marginTop:32 }}>
          <h3 style={{ color:'#fff', fontFamily:'var(--font-display)', fontSize:'1.3rem', marginBottom:8 }}>Get Your Noida Package Quote — Free, 2 Hours</h3>
          <p style={{ color:'rgba(255,255,255,0.7)', fontSize:13.5, marginBottom:18 }}>Tell us your dates and group size. We'll send a detailed, no-obligation itinerary with exact pricing.</p>
          <div style={{ display:'flex', gap:10, justifyContent:'center', flexWrap:'wrap' }}>
            <a href={`https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent('Namaste! I am from Noida and want to book Char Dham Yatra 2026. Please share packages and Noida pickup details.')}`}
              target="_blank" rel="nofollow noopener noreferrer"
              style={{ background:'#25D366', color:'#fff', padding:'12px 24px', borderRadius:9, fontWeight:700, fontSize:13.5, textDecoration:'none' }}>💬 WhatsApp — Enquire Now</a>
            <a href={`tel:${SITE.phone}`}
              style={{ background:'rgba(255,255,255,0.12)', color:'#fff', padding:'12px 24px', borderRadius:9, fontWeight:700, fontSize:13.5, textDecoration:'none', border:'1px solid rgba(255,255,255,0.2)' }}>📞 {SITE.phone}</a>
          </div>
        </div>

        <div style={{ borderTop:'1px solid var(--border)', paddingTop:24, marginTop:32 }}>
          <div style={{ fontWeight:700, fontSize:13.5, color:'var(--navy)', marginBottom:12 }}>Related guides</div>
          <div style={{ display:'flex', gap:10, flexWrap:'wrap' }}>
            {[['How to Reach Haridwar','/how-to-reach-haridwar'],['Char Dham Cost 2026','/blog/char-dham-yatra-cost'],['Registration Guide','/blog/char-dham-yatra-registration'],['Delhi Package','/char-dham-yatra-from-delhi'],['Route Map','/char-dham-yatra-route-map']].map(([l,h]) => (
              <Link key={h} href={h} style={{ background:'var(--bg)', border:'1px solid var(--border)', color:'var(--navy)', padding:'7px 14px', borderRadius:8, fontSize:12.5, fontWeight:600, textDecoration:'none' }}>{l} →</Link>
            ))}
          </div>
        </div>
      </article>
    </>
  );
}
