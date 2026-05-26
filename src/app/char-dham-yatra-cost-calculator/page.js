import Link from 'next/link';
import { SITE } from '@/data/packages';
import CostCalculator from './CostCalculatorClient';

export const metadata = {
  title: 'Char Dham Yatra Cost Calculator 2026 — Free Instant Estimator',
  description: 'Calculate your exact Char Dham Yatra 2026 cost. Add pilgrims, pony, helicopter, and hotel upgrades — get an instant per-person price. Packages from ₹19,500 from Haridwar.',
  keywords: ['char dham yatra cost calculator', 'char dham yatra cost 2026', 'char dham yatra price calculator', 'char dham yatra estimator', 'kedarnath yatra cost calculator'],
  alternates: { canonical: `${SITE.baseUrl}/char-dham-yatra-cost-calculator` },
  openGraph: {
    title: 'Char Dham Yatra Cost Calculator 2026 — Free Instant Estimator',
    description: 'Estimate your Char Dham Yatra cost in 30 seconds. Customise for group size, pony, helicopter, and hotel tier. From ₹19,500 per person.',
    url: `${SITE.baseUrl}/char-dham-yatra-cost-calculator`,
    type: 'website',
    images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: 'Char Dham Yatra Cost Calculator 2026 — Shiv Ganga Travels' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Char Dham Yatra Cost Calculator 2026',
    description: 'Estimate your Char Dham cost in 30 seconds. Free, instant, no signup needed.',
  },
};

function Schema() {
  const faq = {
    '@context': 'https://schema.org', '@type': 'FAQPage',
    mainEntity: [
      { '@type':'Question', name:'How much does Char Dham Yatra cost per person in 2026?',
        acceptedAnswer:{ '@type':'Answer', text:'Char Dham Yatra cost in 2026 ranges from ₹19,500 per person (budget package, 10n/11d from Haridwar) to ₹85,000+ (luxury or helicopter package). Mid-range packages with deluxe hotels and SUV transport cost ₹28,000–35,000 per person. Group of 6+ pilgrims gets the lowest per-person rate.' }},
      { '@type':'Question', name:'What is included in the Char Dham Yatra cost?',
        acceptedAnswer:{ '@type':'Answer', text:'A standard Char Dham package includes accommodation (twin sharing), breakfast and dinner, transport in tempo/SUV with experienced hill driver, registration assistance, all toll/parking, and 24/7 operator support. It does NOT include lunch, personal pony/palki charges, helicopter tickets (if added separately), and personal expenses.' }},
      { '@type':'Question', name:'Is the Char Dham Yatra Cost Calculator accurate?',
        acceptedAnswer:{ '@type':'Answer', text:'Yes — our calculator uses current 2026 rates for hotels, transport, pony, palki, and helicopter, updated monthly. The estimate is typically within 5% of the final quote. The final price depends on exact travel dates (peak season +10–15%) and group size.' }},
      { '@type':'Question', name:'How much extra does a Kedarnath helicopter cost?',
        acceptedAnswer:{ '@type':'Answer', text:'Kedarnath helicopter from Phata to Kedarnath one-way costs ₹2,800–3,500 per person in 2026. Round trip is ₹5,500–7,000 per person. Most pilgrims add helicopter only for Kedarnath; total package cost with helicopter is typically ₹35,000–45,000 per person.' }},
      { '@type':'Question', name:'Can I get a custom quote for my group?',
        acceptedAnswer:{ '@type':'Answer', text:'Yes. After calculating an estimate above, share your details on WhatsApp (+91-7817996730) for a detailed itinerary and final price. Group discounts of 10–18% apply for 8+ pilgrims travelling together.' }},
    ],
  };
  const breadcrumb = {
    '@context':'https://schema.org','@type':'BreadcrumbList',
    itemListElement:[
      { '@type':'ListItem', position:1, name:'Home', item:SITE.baseUrl },
      { '@type':'ListItem', position:2, name:'Char Dham Yatra Cost Calculator', item:`${SITE.baseUrl}/char-dham-yatra-cost-calculator` },
    ],
  };
  return (<>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faq) }} />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
  </>);
}

const h2 = { fontFamily:'var(--font-display)', fontSize:'1.4rem', fontWeight:600, color:'var(--navy)', letterSpacing:'-0.02em', marginBottom:12, marginTop:36 };
const p = { fontSize:15, color:'#334155', lineHeight:1.85, marginBottom:16 };

export default function Page() {
  return (
    <>
      <Schema />
      <section style={{ background:'linear-gradient(145deg,var(--navy) 0%,var(--navy-mid) 60%,var(--teal) 100%)', padding:'48px 20px 36px', textAlign:'center' }}>
        <div style={{ maxWidth:820, margin:'0 auto' }}>
          <span style={{ background:'rgba(232,146,10,0.18)', color:'#FFD166', fontSize:11, fontWeight:700, letterSpacing:'0.12em', textTransform:'uppercase', padding:'5px 16px', borderRadius:100, display:'inline-block', marginBottom:14 }}>Free · 30-Second Estimate · 2026 Rates</span>
          <h1 className="display-title" style={{ color:'#fff', fontSize:'clamp(1.8rem,4.5vw,2.6rem)', marginBottom:12 }}>Char Dham Yatra Cost Calculator 2026</h1>
          <p style={{ color:'rgba(255,255,255,0.82)', fontSize:15, lineHeight:1.7, maxWidth:640, margin:'0 auto' }}>Get your exact per-person cost in 30 seconds. Adjust group size, pony, helicopter, and hotel tier — see the price update live.</p>
        </div>
      </section>

      <nav style={{ background:'var(--bg)', borderBottom:'1px solid var(--border)', padding:'10px 20px' }}>
        <div style={{ maxWidth:'var(--container)', margin:'0 auto', fontSize:12, color:'var(--text-muted)', display:'flex', gap:6, flexWrap:'wrap' }}>
          <Link href="/" style={{ color:'var(--teal)', textDecoration:'none' }}>Home</Link><span>›</span>
          <span>Char Dham Yatra Cost Calculator</span>
        </div>
      </nav>

      <CostCalculator />

      <article style={{ maxWidth:900, margin:'0 auto', padding:'10px 20px 60px' }}>
        <h2 style={h2}>How the Char Dham Yatra Cost Is Calculated</h2>
        <p style={p}>A Char Dham Yatra cost is the sum of six things: accommodation, transport, meals, registration and permits, pony/palki/helicopter (optional for Kedarnath and Yamunotri), and operator service. Each varies based on your travel dates, group size, and comfort level. The calculator above uses our 2026 contract rates with hotels, transport providers, and pony/palki operators — the same rates we charge our package clients.</p>

        <h2 style={h2}>What Drives the Final Price</h2>
        <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fill,minmax(240px,1fr))', gap:12, marginBottom:24 }}>
          {[
            { f:'Group size', d:'A solo pilgrim pays 2x what a 6-person group pays per head, because fixed costs (vehicle, driver, guide) are split. Most savings come at 6 and 10 pilgrims.' },
            { f:'Travel month', d:'May and June (peak) are 10–15% above September rates. October is typically cheapest after October 5, when crowds thin.' },
            { f:'Hotel tier', d:'Budget hotels are ₹600–1,200/night, mid-range ₹2,000–4,000, premium ₹4,500–9,000. Same itinerary, different comfort levels.' },
            { f:'Kedarnath option', d:'Trek with pony adds ₹2,500/person. Helicopter both ways adds ₹6,500–8,000. Helicopter cuts a full day off the itinerary.' },
            { f:'Vehicle type', d:'Tempo Traveller for 8+ pilgrims is most economical. Innova Crysta for 4–6 is more comfortable. SUVs cost 30–40% more than tempos.' },
            { f:'Custom inclusions', d:'VIP darshan, helicopter, special puja, lunch upgrades — each add-on changes the total. Calculator above includes the main ones.' },
          ].map(d=>(
            <div key={d.f} style={{ background:'#fff', borderRadius:12, padding:'14px', border:'1px solid var(--border)' }}>
              <div style={{ fontWeight:700, fontSize:13.5, color:'var(--navy)', marginBottom:6 }}>{d.f}</div>
              <div style={{ fontSize:12.5, color:'var(--text-mid)', lineHeight:1.7 }}>{d.d}</div>
            </div>
          ))}
        </div>

        <h2 style={h2}>Real 2026 Pricing — From Our Actual Bookings</h2>
        <div style={{ overflowX:'auto', marginBottom:24 }}>
          <table style={{ width:'100%', borderCollapse:'collapse', fontSize:13.5 }}>
            <thead>
              <tr style={{ background:'var(--navy)', color:'#fff' }}>
                {['Package','Group Size','Per Person','What You Get'].map(h=><th key={h} style={{ padding:'10px 14px', textAlign:'left', fontWeight:600 }}>{h}</th>)}
              </tr>
            </thead>
            <tbody>
              {[
                ['Char Dham Budget 10N','6+ pilgrims','₹19,500','Standard hotels, tempo, all meals (B+D), all-inclusive'],
                ['Char Dham Deluxe 10N','6+ pilgrims','₹28,500','Deluxe hotels, Innova, all meals, VIP darshan at Kedarnath'],
                ['Char Dham Premium 11N','4+ pilgrims','₹38,500','Best hotels, SUV, lunch included, helicopter Kedarnath'],
                ['Char Dham Helicopter 5D','2+ pilgrims','₹1,85,000','Full helicopter all 4 dhams, premium hotels, fastest itinerary'],
                ['Do Dham (Ked+Bad) 5N','6+ pilgrims','₹10,999','Kedarnath + Badrinath only, standard hotels'],
              ].map((r,i)=>(
                <tr key={r[0]} style={{ background:i%2===0?'var(--bg)':'#fff' }}>
                  {r.map((c,j)=><td key={j} style={{ padding:'9px 14px', borderBottom:'1px solid var(--border)', color:j===0?'var(--navy)':'var(--text-mid)', fontWeight:j===0?700:400 }}>{c}</td>)}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 style={h2}>Hidden Costs Most Operators Don't Tell You</h2>
        <p style={p}>The Char Dham cost most pilgrims see online is usually the bare package price. The actual out-of-pocket spend is higher because of items that operators leave out — sometimes deliberately, sometimes because they vary. Here is what we always disclose upfront:</p>
        <p style={p}>Personal expenses: lunch is typically ₹150–300 per meal in mountain dhabas. Pony/palki at Yamunotri costs ₹1,800–2,500 per person if you cannot walk the 6km trek. Pony at Kedarnath is ₹2,200–3,000 per person one way (you climb 16km, so palki for the round trip is ₹4,500+). Helicopter Kedarnath is ₹2,800–3,500 one way. Photography at the temple, donations, prasad — easily ₹500–1,500 per day.</p>
        <p style={p}>Plan for ₹3,000–6,000 extra per person above the package price as a realistic personal budget. With the helicopter add-on for Kedarnath, add another ₹6,000–7,000.</p>

        <h2 style={h2}>Why Our Rates Are Lower Than Aggregators</h2>
        <p style={p}>We are a direct Haridwar operator, registered in Uttarakhand, with our own driver fleet and pre-blocked hotel contracts at every stop on the route. When you book with MakeMyTrip, Thomas Cook, or Thrillophilia, they add 18–25% on top of an operator's price as their margin. We charge zero commission because we are the operator. That is why our packages start at ₹19,500 where aggregator listings of the same itinerary start at ₹24,000–28,000.</p>

        <div style={{ background:'var(--navy)', borderRadius:16, padding:'26px 24px', textAlign:'center', marginTop:36 }}>
          <h3 style={{ color:'#fff', fontFamily:'var(--font-display)', fontSize:'1.3rem', marginBottom:10 }}>Need a Detailed Quote?</h3>
          <p style={{ color:'rgba(255,255,255,0.75)', fontSize:13.5, marginBottom:18 }}>Send us your group size, travel dates, and city — we will reply with a complete itinerary and final per-person price within 30 minutes.</p>
          <a href={`https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent('Namaste! I need a detailed Char Dham Yatra quote. Please help me plan.')}`} target="_blank" rel="nofollow noopener noreferrer"
            style={{ background:'#25D366', color:'#fff', padding:'11px 28px', borderRadius:9, fontWeight:700, fontSize:13.5, textDecoration:'none' }}>💬 WhatsApp Us</a>
        </div>

        <div style={{ background:'var(--navy-light)', borderRadius:14, padding:'18px 20px', marginTop:28 }}>
          <div style={{ fontWeight:700, fontSize:13.5, color:'var(--navy)', marginBottom:10 }}>Related Guides</div>
          <div style={{ display:'flex', flexWrap:'wrap', gap:8 }}>
            {[{l:'Char Dham Cost Breakdown',h:'/blog/char-dham-yatra-cost'},{l:'Budget vs Premium Compared',h:'/blog/char-dham-yatra-budget-vs-premium'},{l:'Package vs Self-Planned',h:'/blog/char-dham-yatra-package-vs-self-planned'},{l:'Group Packages 10+',h:'/blog/char-dham-group-package'}].map(l => (
              <Link key={l.h} href={l.h} style={{ background:'#fff', color:'var(--navy)', padding:'7px 14px', borderRadius:8, fontSize:12.5, fontWeight:600, textDecoration:'none', border:'1px solid var(--border)' }}>{l.l} →</Link>
            ))}
          </div>
        </div>
      </article>
    </>
  );
}
