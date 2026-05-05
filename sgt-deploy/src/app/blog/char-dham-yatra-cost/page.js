import Link from 'next/link';
import { SITE } from '@/data/packages';

export const metadata = {
  title: 'Char Dham Yatra Cost 2026 — Complete Budget Breakdown Per Person',
  description: 'Exact Char Dham Yatra cost breakdown for 2026. Package prices, hidden costs, pony/helicopter charges, hotel upgrades. Budget from ₹19,500 to ₹85,000 per person explained.',
  keywords: ['char dham yatra cost','char dham yatra price 2026','char dham yatra budget','char dham yatra package cost','char dham yatra expenses','how much does char dham yatra cost'],
  alternates: { canonical: `${SITE.baseUrl}/blog/char-dham-yatra-cost` },
  openGraph: { title:'Char Dham Yatra Cost 2026 — Complete Budget Breakdown', description:'Everything that goes into the cost of a Char Dham Yatra — package prices, extras, hidden costs.', url:`${SITE.baseUrl}/blog/char-dham-yatra-cost`, type:'article' },
};

function Schema() {
  const article = { '@context':'https://schema.org','@type':'BlogPosting', headline:'Char Dham Yatra Cost 2026 — Complete Budget Breakdown Per Person', author:{ '@type':'Person', name:'Dhanesh Chandra Mishra', jobTitle:'Founder, Shiv Ganga Travels — Retired Indian Army Officer', url:`${SITE.baseUrl}/about` }, publisher:{ '@type':'Organization', name:SITE.name, url:SITE.baseUrl }, datePublished:'2025-02-20', dateModified:'2026-04-27', mainEntityOfPage:`${SITE.baseUrl}/blog/char-dham-yatra-cost` };

    const faq = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      { '@type': 'Question',
        name: 'How much does Char Dham Yatra cost per person in 2026?',
        acceptedAnswer: { '@type': 'Answer', text: 'Char Dham Yatra costs between ₹19,500 and ₹85,000 per person in 2026. A standard 9-night 10-day road package from Haridwar starts at ₹19,500 all-inclusive (vehicle, hotels, meals, guide). Helicopter packages start at ₹85,000 per person. According to Dhanesh Chandra Mishra, founder of Shiv Ganga Travels: "The total cost including personal expenses like pony at Kedarnath, puja, and tips is typically ₹25,000–35,000 for a budget traveller on a ₹19,500 package."' },
      },
      { '@type': 'Question',
        name: 'What is not included in Char Dham Yatra package cost?',
        acceptedAnswer: { '@type': 'Answer', text: 'Items typically excluded: pony/palki/helicopter at Kedarnath (₹3,000–9,000), personal puja expenses (₹500–5,000 per dham), temple entry fees, personal shopping, room heater charges, laundry, tips for driver and guide (customary ₹500–1,000 each), and any upgrade costs if you decide to change hotels en route.' },
      },
      { '@type': 'Question',
        name: 'Is Char Dham Yatra cheaper in September vs May?',
        acceptedAnswer: { '@type': 'Answer', text: 'Prices are similar in September and May — peak season pricing applies to both. Hotel rates may be 10–15% lower in September vs peak May. The main advantage of September is fewer crowds and better views, not lower package costs. Budget packages remain at ₹19,500 in both months at Shiv Ganga Travels.' },
      }
    ],
  };
  return (<>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html:JSON.stringify(article) }}/>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html:JSON.stringify(faq) }}/>
    </>);
}

const h2 = { fontFamily:'var(--font-display)', fontSize:'clamp(1.3rem,2.5vw,1.75rem)', fontWeight:600, color:'var(--navy)', letterSpacing:'-0.02em', marginBottom:12, marginTop:36 };
const p  = { fontSize:15, color:'var(--text-mid)', lineHeight:1.85, marginBottom:16 };

export default function CharDhamCost() {
return (
    <>
      <Schema/>
      <section style={{ background:'linear-gradient(145deg,var(--navy) 0%,var(--navy-mid) 60%,var(--teal) 100%)', padding:'56px 20px 44px', textAlign:'center' }}>
        <div style={{ maxWidth:820, margin:'0 auto' }}>
          <span style={{ background:'rgba(232,146,10,0.18)', color:'#FFD166', fontSize:11, fontWeight:700, letterSpacing:'0.12em', textTransform:'uppercase', padding:'5px 16px', borderRadius:100, display:'inline-block', marginBottom:16 }}>Budget Guide · 2026</span>
          <h1 className="display-title" style={{ color:'#fff', fontSize:'clamp(1.8rem,4.5vw,3rem)', marginBottom:14 }}>
            Char Dham Yatra Cost 2026 — Honest Budget Breakdown, No Surprises
          </h1>
          <p style={{ color:'rgba(255,255,255,0.8)', fontSize:15, lineHeight:1.7 }}>Package prices · Hidden costs · Pony & helicopter · What's included · Budget vs premium</p>
        </div>
      </section>

      <nav style={{ background:'var(--bg)', borderBottom:'1px solid var(--border)', padding:'10px 20px' }}>
        <div style={{ maxWidth:'var(--container)', margin:'0 auto', fontSize:12, color:'var(--text-muted)', display:'flex', gap:6, flexWrap:'wrap' }}>
          <Link href="/" style={{ color:'var(--navy)', textDecoration:'none' }}>Home</Link><span>›</span>
          <Link href="/blog" style={{ color:'var(--navy)', textDecoration:'none' }}>Blog</Link><span>›</span>
          <span>Char Dham Yatra Cost 2026</span>
        </div>
      </nav>

      <article className="blog-container" itemScope itemType="https://schema.org/Article">
        <p style={{ fontSize:15.5, color:'#334155', lineHeight:1.85, marginBottom:16 }}>The most common question we get is: "How much will the entire Char Dham Yatra cost me?" And the honest answer is — it depends on what you choose. But unlike most travel websites that give vague ranges, we're going to break every rupee down for you so you can budget accurately before you call us.</p>

        <h2 style={h2}>Package Cost — What's Actually Included</h2>
        <p style={{ fontSize:15.5, color:'#334155', lineHeight:1.85, marginBottom:16 }}>A reputable all-inclusive Char Dham Yatra package from a registered operator covers:</p>
        <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(200px,1fr))', gap:10, marginBottom:24 }}>
          {[
            { pkg:'Standard 9N/10D', price:'₹19,500', hotel:'Budget/standard hotels', vehicle:'Shared Tempo Traveller', meals:'Breakfast + dinner' },
            { pkg:'Deluxe 11N/12D', price:'₹27,500', hotel:'3-star hotels, better rooms', vehicle:'Private AC Innova', meals:'Breakfast + dinner' },
            { pkg:'Senior Special 12N/13D', price:'₹24,500', hotel:'Ground floor preferred', vehicle:'Private AC, medical attendant', meals:'Breakfast + dinner' },
            { pkg:'Helicopter 5N/6D', price:'₹85,000', hotel:'Luxury hotels', vehicle:'Helicopter all 4 dhams', meals:'All meals included' },
          ].map(p => (
            <div key={p.pkg} style={{ background:'#fff', borderRadius:10, padding:'14px', border:'1px solid var(--border)' }}>
              <div style={{ fontWeight:700, fontSize:13.5, color:'var(--navy)', marginBottom:6 }}>{p.pkg}</div>
              <div style={{ fontWeight:800, fontSize:22, color:'var(--navy)', marginBottom:8 }}>{p.price}<span style={{ fontSize:11, fontWeight:500, color:'var(--text-muted)' }}>/person</span></div>
              <div style={{ fontSize:12, color:'var(--text-mid)', lineHeight:1.7 }}>🏨 {p.hotel}<br/>🚌 {p.vehicle}<br/>🍱 {p.meals}</div>
            </div>
          ))}
        </div>

        <h2 style={h2}>The "Extra" Costs — What Most Operators Don't Tell You Upfront</h2>
        <p style={{ fontSize:15.5, color:'#334155', lineHeight:1.85, marginBottom:16 }}>Here's where we differ from most operators. We tell you about these costs before you book, not after. These are genuine extras that you will encounter:</p>
        <div style={{ display:'flex', flexDirection:'column', gap:8, marginBottom:24 }}>
          {[
            { cost:'Kedarnath Pony (if not trekking)', price:'₹3,500–4,500 one way', note:'Booked at Gaurikund on the day. Price varies by season.' },
            { cost:'Kedarnath Helicopter (optional upgrade)', price:'₹7,500–9,500 round trip', note:'We can arrange this when you book the package.' },
            { cost:'Yamunotri Pony (6km trek)', price:'₹1,800–2,500 one way', note:'Optional. Available at Janki Chatti.' },
            { cost:'Lunch on travel days', price:'₹150–300 per person per day', note:'Breakfast and dinner are included. Lunch on driving days is at local dhabas.' },
            { cost:'Temple entry/special puja', price:'₹200–2,000 depending on puja', note:'Temple entry is free. Abhishek, rudrabhishek pujas are extra.' },
            { cost:'Personal expenses', price:'₹1,000–3,000 for 10 days', note:'Shopping, tips, phone calls, laundry.' },
            { cost:'Train/flight to Haridwar', price:'₹500–5,000 depending on city', note:'We don\'t include this — book your own train.' },
          ].map(e => (
            <div key={e.cost} style={{ display:'grid', gridTemplateColumns:'1.5fr 1fr 1.5fr', gap:12, background:'#fff', borderRadius:10, padding:'12px 16px', border:'1px solid var(--border)', alignItems:'start' }}>
              <div style={{ fontWeight:600, fontSize:13.5, color:'var(--text)' }}>{e.cost}</div>
              <div style={{ fontWeight:700, fontSize:13.5, color:'var(--navy)' }}>{e.price}</div>
              <div style={{ fontSize:12.5, color:'var(--text-muted)' }}>{e.note}</div>
            </div>
          ))}
        </div>

        <h2 style={h2}>Total Budget Estimate for Different Scenarios</h2>
        <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(220px,1fr))', gap:14, marginBottom:24 }}>
          {[
            { scenario:'Budget Pilgrim', total:'₹22,000–25,000', includes:'Standard package + own train ticket + basic extras', note:'For those prioritising cost. Comfortable but basic.' },
            { scenario:'Average Family', total:'₹28,000–32,000', includes:'Deluxe package + pony at Kedarnath + personal expenses', note:'Most comfortable for first-timers.' },
            { scenario:'Senior/Comfort Traveller', total:'₹35,000–45,000', includes:'Senior package + helicopter at Kedarnath + better meals', note:'Peace of mind and physical comfort first.' },
            { scenario:'Premium/Helicopter', total:'₹88,000–95,000', includes:'Full helicopter package + all meals + premium hotels', note:'For those who want the complete VIP experience.' },
          ].map(s => (
            <div key={s.scenario} style={{ background:'var(--bg)', borderRadius:12, padding:'16px', border:'1px solid var(--border)' }}>
              <div style={{ fontWeight:700, fontSize:14, color:'var(--navy)', marginBottom:4 }}>{s.scenario}</div>
              <div style={{ fontWeight:800, fontSize:20, color:'var(--navy)', marginBottom:6 }}>{s.total}</div>
              <div style={{ fontSize:12.5, color:'var(--text-mid)', lineHeight:1.75, marginBottom:6 }}>{s.includes}</div>
              <div style={{ fontSize:12, color:'var(--teal-dark)', fontStyle:'italic' }}>{s.note}</div>
            </div>
          ))}
        </div>

        <h2 style={h2}>How to Get the Best Price</h2>
        <p style={{ fontSize:15.5, color:'#334155', lineHeight:1.85, marginBottom:16 }}><strong>Book early.</strong> May–June slots fill 90 days in advance and prices are 10–15% higher than if you book in January–February. Booking in January for a May yatra typically gives you the best rooms, best vehicles, and 5–10% early bird discount.</p>
        <p style={{ fontSize:15.5, color:'#334155', lineHeight:1.85, marginBottom:16 }}><strong>Travel in a group.</strong> Groups of 6+ get 5% off per person. Groups of 12+ get 8% off. This is real money on a ₹20,000+ package.</p>
        <p style={{ fontSize:15.5, color:'#334155', lineHeight:1.85, marginBottom:16 }}><strong>Consider September–October.</strong> Same quality experience, same temples, 10–15% cheaper than peak May–June season, fewer crowds, better mountain views after the monsoon clears.</p>

        <div style={{ background:'var(--navy)', borderRadius:16, padding:'28px 24px', textAlign:'center', marginTop:32 }}>
          <h3 style={{ color:'#fff', fontFamily:'var(--font-display)', fontSize:'1.4rem', marginBottom:10 }}>Get an Exact Quote for Your Group</h3>
          <p style={{ color:'rgba(255,255,255,0.75)', fontSize:14, marginBottom:20 }}>Tell us your dates, group size, and preferences. We'll send a complete cost breakdown within 2 hours. No obligation.</p>
          <div style={{ display:'flex', gap:12, justifyContent:'center', flexWrap:'wrap' }}>
            <a href={`https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent('Namaste! I want a cost breakdown for Char Dham Yatra 2026.')}`} target="_blank" rel="noopener noreferrer"
              style={{ background:'#25D366', color:'#fff', padding:'12px 24px', borderRadius:9, fontWeight:700, fontSize:14, textDecoration:'none' }}>💬 Get Free Quote</a>
            <Link href="/char-dham-yatra" style={{ background:'var(--gold)', color:'#fff', padding:'12px 24px', borderRadius:9, fontWeight:700, fontSize:14, textDecoration:'none' }}>View All Packages →</Link>
          </div>
        </div>

        <div style={{ borderTop:'1px solid var(--border)', paddingTop:24, marginTop:32 }}>
          <div style={{ fontWeight:700, fontSize:13.5, color:'var(--navy)', marginBottom:12 }}>Related Guides</div>
          <div style={{ display:'flex', gap:10, flexWrap:'wrap' }}>
            {[['Char Dham Packages','/char-dham-yatra'],['Cost Calculator','/char-dham-yatra-cost-calculator'],['Budget vs Premium','/blog/char-dham-yatra-budget-vs-premium'],['Group Package','/blog/char-dham-group-package'],['Cancellation Policy','/cancellation-policy'],['Registration Guide','/blog/char-dham-yatra-registration']].map(([l,h])=>(
              <Link key={h} href={h} style={{ background:'var(--bg)', border:'1px solid var(--border)', color:'var(--navy)', padding:'7px 14px', borderRadius:8, fontSize:12.5, fontWeight:600, textDecoration:'none' }}>{l} →</Link>
            ))}
          </div>
        </div>
      </article>
    </>
  );
}
