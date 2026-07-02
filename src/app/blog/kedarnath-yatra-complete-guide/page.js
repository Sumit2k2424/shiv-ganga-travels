import Link from 'next/link';
import { SITE } from '@/data/packages';
import BlogCTA from '@/components/BlogCTA';
import BlogAuthor from '@/components/BlogAuthor';

export const metadata = {
  title: 'Kedarnath Yatra Guide 2026: Route, Cost & Darshan',
  description: 'Kedarnath Yatra 2026 guide: 16 km trek from Gaurikund, registration, puja costs, darshan timings, helicopter booking and packages from ₹6,499.',
  keywords: ['kedarnath yatra 2026 complete guide', 'kedarnath yatra guide', 'how to do kedarnath yatra', 'kedarnath yatra cost 2026', 'kedarnath yatra package haridwar', 'kedarnath yatra planning guide 2026'],
  alternates: { canonical: `${SITE.baseUrl}/blog/kedarnath-yatra-complete-guide` },
  openGraph: { title: 'Kedarnath Yatra Guide 2026: Route, Cost & Darshan', url: `${SITE.baseUrl}/blog/kedarnath-yatra-complete-guide`, type: 'article' },
    images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: 'Kedarnath Yatra 2026 — Complete Planning Guide | Shiv Ganga Travels' }],
};

function Schema() {
  const faq = {
    '@context': 'https://schema.org', '@type': 'FAQPage',
    mainEntity: [
      { '@type': 'Question', name: 'How much does Kedarnath Yatra cost in 2026?',
        acceptedAnswer: { '@type': 'Answer', text: 'Kedarnath Yatra cost 2026: All-inclusive 3N/4D package from ₹6,499 per person (Haridwar base, Innova Crysta, hotels, meals). Add pony at Kedarnath ₹3,000–5,000 or helicopter ₹7,000–9,000 (one way). Total trip cost including personal expenses: ₹10,000–18,000 per person.' }},
      { '@type': 'Question', name: 'How many days are needed for Kedarnath Yatra?',
        acceptedAnswer: { '@type': 'Answer', text: 'A comfortable Kedarnath Yatra takes 3 nights 4 days from Haridwar: Day 1 Haridwar to Guptkashi, Day 2 trek to Kedarnath (16km) and overnight stay near temple, Day 3 morning darshan and return to Guptkashi, Day 4 return to Haridwar. For helicopter option, same schedule without the trek.' }},
      { '@type': 'Question', name: 'Is Kedarnath Yatra registration mandatory in 2026?',
        acceptedAnswer: { '@type': 'Answer', text: 'Yes. Registration at registrationandtouristcare.uk.gov.in is mandatory. Free, takes 15 minutes. Yatra card is checked at Sonprayag checkpoint — pilgrims without registration are turned back. Pilgrims 55+ must also submit a medical fitness certificate.' }},
    ],
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faq) }}/>;
}


export default function KedarnathCompleteGuide() {
  return (
    <>
      <Schema />
      <section style={{ background:'linear-gradient(145deg,var(--navy) 0%,#1A3E75 60%,var(--teal) 100%)', padding:'52px 20px 40px' }}>
        <div style={{ maxWidth:860, margin:'0 auto', textAlign:'center' }}>
          <span style={{ background:'rgba(232,146,10,0.18)', color:'#FFD166', fontSize:11, fontWeight:700, letterSpacing:'0.12em', textTransform:'uppercase', padding:'5px 16px', borderRadius:100, display:'inline-block', marginBottom:14 }}>Complete A-Z Guide · 2026</span>
          <h1 style={{ color:'#fff', fontFamily:'var(--font-display)', fontSize:'clamp(1.7rem,4vw,2.6rem)', fontWeight:700, letterSpacing:'-0.02em', marginBottom:14 }}>
            Kedarnath Yatra 2026 — Complete Guide
          </h1>
          <p style={{ color:'rgba(255,255,255,0.8)', fontSize:15, lineHeight:1.7, maxWidth:700, margin:'0 auto 20px' }}>
            Route · Cost · Registration · Trek · Helicopter · Darshan Timings · Hotels · Packages — Everything in one place
          </p>
          {['🕌 Opens April 22','📍 218km from Haridwar','🏔️ 16km trek','From ₹6,499/person'].map(t => (
            <span key={t} style={{ background:'rgba(255,255,255,0.12)', color:'#fff', fontSize:12.5, fontWeight:600, padding:'6px 14px', borderRadius:100, border:'1px solid rgba(255,255,255,0.2)', display:'inline-block', margin:'4px' }}>{t}</span>
          ))}
        </div>
      </section>

      <nav style={{ background:'var(--bg)', borderBottom:'1px solid var(--border)', padding:'9px 20px' }}>
        <div style={{ maxWidth:'var(--container)', margin:'0 auto', fontSize:12, color:'var(--text-muted)', display:'flex', gap:6 }}>
          Home<span>›</span>
          Blog<span>›</span>
          <span>Kedarnath Yatra Complete Guide 2026</span>
        </div>
      </nav>

      <article className="blog-container" itemScope itemType="https://schema.org/Article">

        {/* Author byline — E-E-A-T signal */}
        <BlogAuthor variant="top" author="sumit" />
        <div style={{ fontSize:12, color:'var(--text-muted)', marginBottom:20, textAlign:'right' }}>🗓️ <strong>Last updated:</strong> {SITE.lastUpdated} · Verified for current season</div>

        {/* Quick facts */}
        <div style={{ background:'var(--navy)', borderRadius:14, padding:'18px 20px', marginBottom:28, display:'grid', gridTemplateColumns:'repeat(auto-fill,minmax(160px,1fr))', gap:10 }}>
          {[['Altitude','3,583 metres'],['Opens','April 22, 2026'],['Closes','November 11, 2026'],['Distance (road)','218km from Haridwar'],['Trek distance','16km one way'],['Daily limit','15,000–17,000 pilgrims'],['Package from','₹6,499/person'],['Trek time','5–7 hrs ascending']].map(([k,v])=>(
            <div key={k}>
              <div style={{ fontSize:11, color:'rgba(255,255,255,0.55)', marginBottom:2 }}>{k}</div>
              <div style={{ fontWeight:700, fontSize:13.5, color:'#FFD166' }}>{v}</div>
            </div>
          ))}
        </div>

        <h2 style={{ fontFamily:'var(--font-display)', fontSize:'1.45rem', fontWeight:700, color:'var(--navy)', marginBottom:14 }}>
          Significance of Kedarnath
        </h2>
        <p style={{ fontSize:16, color:'#334155', lineHeight:1.9, marginBottom:16 }}>
          Kedarnath is not merely a temple — it is one of the twelve Jyotirlingas (primordial pillars of light) of Lord Shiva and one of the four dhams in the Char Dham circuit. Situated at 3,583m in the Rudraprayag district, it sits in the shadow of the Kedarnath peak (6,940m) with the Mandakini river originating from the Chorabari glacier above. The temple was built (or rebuilt after earlier construction) by Adi Shankaracharya in the 8th century CE. It survived the catastrophic 2013 floods when a massive boulder deflected the floodwaters, protecting the main temple structure — an event widely considered miraculous.
        </p>

        <h2 style={{ fontFamily:'var(--font-display)', fontSize:'1.45rem', fontWeight:700, color:'var(--navy)', marginBottom:14 }}>
          Step-by-Step: How to Plan Kedarnath Yatra 2026
        </h2>
        {[
          { step:'1', title:'Complete Biometric Registration', desc:'Register at registrationandtouristcare.uk.gov.in (free). Upload Aadhaar details and download your yatra card. Pilgrims 55+ upload medical fitness certificate. Shiv Ganga Travels handles this for all package pilgrims.', link:'/blog/char-dham-yatra-registration', linkText:'Registration Guide →' },
          { step:'2', title:'Book Your Package', desc:'Packages from Haridwar start at ₹6,499 per person for 3N/4D. Price includes vehicle, hotels at Guptkashi, meals, guide, and darshan assistance. Book 30–60 days ahead for May–June.', link:'/kedarnath-yatra', linkText:'View Packages →' },
          { step:'3', title:'Decide: Trek, Pony, or Helicopter', desc:'Trek (16km, 5–7 hrs) — most rewarding and free. Pony (₹3,000–5,000 one way) — for 60+ or knee problems. Helicopter (₹7,000–9,000 one way) — book via IRCTC, mandatory 2026 rule.', link:'/blog/kedarnath-helicopter-booking', linkText:'Helicopter Booking Guide →' },
          { step:'4', title:'Plan Your Darshan Timing', desc:'Arrive at Kedarnath by 7–9 AM for shortest queue. Mahabhishek at 4 AM (advance booking ₹3,100) is the deepest experience. Shringaar Aarti at 7:30 PM is unmissable — arrive by 7 PM.', link:'/blog/kedarnath-darshan-timing', linkText:'Darshan Timings →' },
          { step:'5', title:'Pack for High Altitude', desc:'Thermal inners (mandatory — nights 0–5°C even in June), fleece, windproof jacket, warm cap, gloves, trekking boots, ORS sachets, personal medicines for 2 extra days, headtorch for 5 AM trek start.', link:'/blog/char-dham-yatra-packing-list', linkText:'Packing List →' },
        ].map(s => (
          <div key={s.step} style={{ display:'flex', gap:0, borderRadius:10, overflow:'hidden', border:'1px solid var(--border)', marginBottom:10 }}>
            <div style={{ background:'var(--navy)', minWidth:44, display:'flex', alignItems:'center', justifyContent:'center', padding:'14px 8px' }}>
              <span style={{ color:'#FFD166', fontWeight:800, fontSize:18, fontFamily:'var(--font-display)' }}>{s.step}</span>
            </div>
            <div style={{ padding:'14px 16px', flex:1, background:'#fff' }}>
              <div style={{ fontWeight:700, fontSize:14.5, color:'var(--navy)', marginBottom:5 }}>{s.title}</div>
              <p style={{ fontSize:14, color:'#475569', lineHeight:1.75, margin:0, marginBottom:8 }}>{s.desc}</p>
              {s.link && <Link href={s.link} style={{ fontSize:13, color:'var(--teal)', fontWeight:600, textDecoration:'none' }}>{s.linkText}</Link>}
            </div>
          </div>
        ))}

        <h2 style={{ fontFamily:'var(--font-display)', fontSize:'1.45rem', fontWeight:700, color:'var(--navy)', marginBottom:14, marginTop:28 }}>
          Complete Cost Breakdown — Kedarnath Yatra 2026
        </h2>
        <div style={{ overflowX:'auto', marginBottom:24 }}>
          <table style={{ width:'100%', borderCollapse:'collapse', fontSize:14 }}>
            <thead>
              <tr style={{ background:'var(--navy)' }}>
                {['Expense','Budget','Standard','Notes'].map(h=>(
                  <th key={h} style={{ padding:'10px 12px', textAlign:'left', color:'#fff', fontWeight:700, fontSize:12.5 }}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {[
                ['Package (3N/4D from Haridwar)','₹6,499','₹9,999–12,000','Includes vehicle, hotels, meals, guide'],
                ['Kedarnath trek','Free','Free','No cost — walk yourself'],
                ['Pony (instead of trek)','₹3,000–5,000','₹3,000–5,000','Per person, one way. Negotiable.'],
                ['Helicopter (one way)','₹7,000–9,000','₹7,000–9,000','Via IRCTC booking only'],
                ['Mahabhishek puja','₹3,100','₹3,100','At 4 AM, advance booking'],
                ['Rudrabhishek puja','₹2,500','₹2,500','6–8 AM, temple counter'],
                ['General darshan','Free','Free','Standard queue'],
                ['Prasad / personal expenses','₹500–2,000','₹500–2,000','Per person'],
                ['Registration','Free','Free','registrationandtouristcare.uk.gov.in'],
                ['Total estimated (trek)','₹7,000–9,000','₹10,500–15,000','Package + puja + personal'],
                ['Total estimated (helicopter)','₹14,000–18,000','₹17,000–22,000','Package + helicopter both ways'],
              ].map(([exp,b,s,n],i)=>(
                <tr key={exp} style={{ borderBottom:'1px solid var(--border)', background:i===9||i===10?'var(--navy-light)':i%2===0?'#fff':'var(--bg)' }}>
                  <td style={{ padding:'9px 12px', fontWeight:i>=9?700:400, color:'var(--navy)', fontSize:13.5 }}>{exp}</td>
                  <td style={{ padding:'9px 12px', fontWeight:700, color:'var(--navy)', fontSize:i>=9?15:13.5 }}>{b}</td>
                  <td style={{ padding:'9px 12px', fontWeight:700, color:i>=9?'#15803D':'var(--navy)', fontSize:i>=9?15:13.5 }}>{s}</td>
                  <td style={{ padding:'9px 12px', color:'var(--text-muted)', fontSize:12.5 }}>{n}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* ── Mid-article conversion CTA ── */}
        <BlogCTA variant="inline" intent="kedarnath" />

        <div style={{ background:'var(--navy)', borderRadius:16, padding:'28px 24px', textAlign:'center', marginTop:36 }}>
          <h3 style={{ color:'#fff', fontFamily:'var(--font-display)', fontSize:'1.3rem', marginBottom:10 }}>Book Kedarnath Yatra 2026 — Direct from Haridwar</h3>
          <p style={{ color:'rgba(255,255,255,0.7)', fontSize:14, marginBottom:18 }}>15 years · 50,000+ pilgrims · Direct operator · Zero commission · {SITE.phone}</p>
          <div style={{ display:'flex', gap:10, justifyContent:'center', flexWrap:'wrap' }}>
            <a href={`https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent('Namaste! I want to book Kedarnath Yatra 2026. Please share package details.')}`} target="_blank" rel="nofollow noopener noreferrer"
              style={{ background:'#25D366', color:'#fff', padding:'12px 24px', borderRadius:9, fontWeight:700, fontSize:13.5, textDecoration:'none' }}>💬 WhatsApp</a>
            View Packages →
          </div>
        </div>

        <div style={{ borderTop:'1px solid var(--border)', paddingTop:24, marginTop:32 }}>
          <div style={{ fontWeight:700, fontSize:13.5, color:'var(--navy)', marginBottom:12 }}>Complete Kedarnath Reference</div>
          <div style={{ display:'flex', gap:10, flexWrap:'wrap' }}>
            {[['Darshan Timings','/blog/kedarnath-darshan-timing'],['Trek Guide','/blog/kedarnath-trek-guide'],['Helicopter Booking','/blog/kedarnath-helicopter-booking'],['Haridwar to Kedarnath','/blog/haridwar-to-kedarnath-road-trip'],['Pony vs Helicopter','/blog/kedarnath-pony-vs-helicopter'],['Senior Citizen Guide','/blog/senior-citizen-char-dham']].map(([l,h])=>(
              <Link key={h} href={h} style={{ background:'var(--bg)', border:'1px solid var(--border)', color:'var(--navy)', padding:'7px 14px', borderRadius:8, fontSize:12.5, fontWeight:600, textDecoration:'none' }}>{l} →</Link>
            ))}
          </div>
        </div>

        <div style={{ borderTop:'1px solid var(--border)', paddingTop:24, marginTop:32 }}>
          <div style={{ fontWeight:700, fontSize:13.5, color:'var(--navy)', marginBottom:12 }}>Related Guides</div>
          <div style={{ display:'flex', gap:10, flexWrap:'wrap' }}>
            {[['Kedarnath Packages','/kedarnath-yatra'],['Kedarnath Darshan Timings','/blog/kedarnath-darshan-timing'],['Kedarnath Trek Guide','/blog/kedarnath-trek-guide'],['Helicopter Booking','/blog/kedarnath-helicopter-booking'],['Haridwar to Kedarnath','/blog/haridwar-to-kedarnath-road-trip'],['How to Reach Haridwar','/how-to-reach-haridwar']].map(([l,h])=>(
              <Link key={h} href={h} style={{ background:'var(--bg)', border:'1px solid var(--border)', color:'var(--navy)', padding:'7px 14px', borderRadius:8, fontSize:12.5, fontWeight:600, textDecoration:'none' }}>{l} →</Link>
            ))}
          </div>
        </div>
      
        {/* ── End-of-article booking CTA ── */}
        <BlogCTA variant="footer" intent="kedarnath" />
</article>
    </>
  );
}
