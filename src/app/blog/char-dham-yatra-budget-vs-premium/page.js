import Link from 'next/link';
import { SITE } from '@/data/packages';

export const metadata = {
  title: 'Char Dham Budget vs Premium Package 2026 – What Actually Changes? Honest Comparison',
  description: 'Budget Char Dham package (₹19,500) vs Premium (₹38,000+) — what really changes in hotels, vehicles, meals, and darshan quality. Detailed honest comparison by a 15-year Haridwar operator.',
  keywords: ['char dham yatra budget vs premium', 'char dham yatra package comparison 2026', 'is premium char dham package worth it', 'char dham yatra deluxe vs budget', 'char dham luxury package vs budget'],
  alternates: { canonical: `${SITE.baseUrl}/blog/char-dham-yatra-budget-vs-premium` },
  openGraph: { title: 'Char Dham Budget vs Premium Package 2026 – What Actually Changes? Honest Comparison', url: `${SITE.baseUrl}/blog/char-dham-yatra-budget-vs-premium`, type: 'article' },
    images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: 'Char Dham Budget vs Premium Package 2026 — Compared | Shiv Ganga Travels' }],
};

function Schema() {
  const faq = {
    '@context': 'https://schema.org', '@type': 'FAQPage',
    mainEntity: [
      { '@type': 'Question', name: 'What is the difference between budget and premium Char Dham Yatra package?',
        acceptedAnswer: { '@type': 'Answer', text: 'Budget packages (₹19,500–22,000) use 3-star equivalent guesthouses, shared AC vehicle (Innova Crysta for group), and basic veg meals. Premium packages (₹35,000–50,000) use 4-star hotels, private Innova Crysta or Hycross for couples/small groups, and better meal options. The darshan experience and spiritual value are identical in both packages.' }},
      { '@type': 'Question', name: 'Is a premium Char Dham Yatra package worth the extra cost?',
        acceptedAnswer: { '@type': 'Answer', text: 'For senior citizens (65+), pilgrims with health conditions, couples, and those who value comfort, a premium package is worth the extra ₹12,000–18,000 per person. Better hotels have hot water, room heaters, and ground-floor options critical for senior comfort. Private vehicles mean flexible timings. For young, fit pilgrims in groups of 6+, a budget package delivers the same spiritual experience at lower cost.' }},
    ],
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faq) }}/>;
}

const COMPARE = [
  { factor:'Price per person (9N/10D)', budget:'₹19,500–22,000', standard:'₹26,000–32,000', premium:'₹36,000–50,000', note:'Price difference is mostly hotels and vehicle exclusivity' },
  { factor:'Hotels', budget:'2–3 star guesthouses. Clean but basic. Shared facilities possible at some stops.', standard:'3-star certified hotels at all stops. Private bathroom, hot water, AC/heater.', premium:'4-star hotels. River/mountain views. Better linen, superior service, restaurant quality.', note:'Biggest practical difference for senior pilgrims' },
  { factor:'Vehicle', budget:'Innova Crysta shared (6–8 pilgrims). Good hill vehicle, experienced driver.', standard:'Innova Crysta private (group of 4–6). Your own vehicle, flexible stops.', premium:'Innova Hycross or Fortuner. Leather seats, panoramic roof option, extra legroom.', note:'Shared vs private is more important than vehicle brand' },
  { factor:'Meals', budget:'Breakfast + dinner at hotel. Standard thali — dal, roti, sabzi, rice.', standard:'Breakfast + dinner. Better variety, restaurant-quality. Jain on request.', premium:'All 3 meals included at most stops. Chef-prepared. More variety. Special diet accommodated.', note:'Food quality matters more than you expect at altitude' },
  { factor:'Darshan quality', budget:'General queue. Guide helps navigate. VIP not included.', standard:'Guide facilitates queue management. VIP darshan attempted where available.', premium:'VIP darshan included at Kedarnath + Badrinath. Advance Mahabhishek booking.', note:'This is the one area where premium genuinely delivers spiritual value' },
  { factor:'Kedarnath approach', budget:'Trek mandatory or pony self-arranged at Gaurikund.', standard:'Pony booking included for 60+ pilgrims. Trek for others.', premium:'Helicopter for Kedarnath included or available as add-on at preferential rate.', note:'Single biggest comfort upgrade for older pilgrims' },
  { factor:'Guide', budget:'Experienced guide shared across group.', standard:'Experienced guide, more personalised.', premium:'Dedicated guide + temple expert with deep scriptural knowledge.', note:'Most pilgrims underestimate how much a good guide adds to spiritual depth' },
  { factor:'Best for', budget:'Groups of 6–10 pilgrims. Fit adults. Budget-conscious families.', standard:'Families of 4–6. Mixed age groups. Pilgrims wanting comfort without luxury.', premium:'Couples. Senior citizens. NRIs. Pilgrims with health conditions.', note:'Match the package to your group, not to price alone' },
];

export default function BudgetVsPremium() {
  return (
    <>
      <Schema/>
      <section style={{ background:'linear-gradient(145deg,var(--navy) 0%,#1A3E75 60%,var(--teal) 100%)', padding:'52px 20px 40px' }}>
        <div style={{ maxWidth:860, margin:'0 auto', textAlign:'center' }}>
          <span style={{ background:'rgba(232,146,10,0.18)', color:'#FFD166', fontSize:11, fontWeight:700, letterSpacing:'0.12em', textTransform:'uppercase', padding:'5px 16px', borderRadius:100, display:'inline-block', marginBottom:14 }}>Honest Comparison · 2026</span>
          <h1 style={{ color:'#fff', fontFamily:'var(--font-display)', fontSize:'clamp(1.7rem,4vw,2.6rem)', fontWeight:700, letterSpacing:'-0.02em', marginBottom:14 }}>
            Char Dham Yatra — Budget vs Premium Package 2026
          </h1>
          <p style={{ color:'rgba(255,255,255,0.8)', fontSize:15, lineHeight:1.7, maxWidth:700, margin:'0 auto 20px' }}>
            What actually changes between ₹19,500 and ₹50,000 per person · Honest breakdown from a 15-year operator
          </p>
        </div>
      </section>

      <nav style={{ background:'var(--bg)', borderBottom:'1px solid var(--border)', padding:'9px 20px' }}>
        <div style={{ maxWidth:'var(--container)', margin:'0 auto', fontSize:12, color:'var(--text-muted)', display:'flex', gap:6 }}>
          Home<span>›</span>
          Blog<span>›</span>
          <span>Budget vs Premium Char Dham Package</span>
        </div>
      </nav>

      <article className="blog-container" itemScope itemType="https://schema.org/Article">
        <div style={{ fontSize:12, color:'var(--text-muted)', marginBottom:20, textAlign:'right' }}>🗓️ <strong>Last updated:</strong> May 21, 2026</div>

        <p style={{ fontSize:16, color:'#334155', lineHeight:1.9, marginBottom:16 }}>
          Every pilgrim asks the same question: <em>"Is it worth paying ₹35,000 when there’s a ₹19,500 package available?"</em> After 15 years and 50,000+ pilgrims, the honest answer from Shiv Ganga Travels is: <strong>it depends entirely on your age, group size, and priorities.</strong> Here is the complete breakdown of what actually changes.
        </p>

        {/* Three-tier price summary */}
        <div style={{ display:'grid', gridTemplateColumns:'repeat(3,1fr)', gap:12, marginBottom:28 }}>
          {[
            { tier:'Budget', price:'₹19,500–22,000', icon:'💼', for:'Groups of 6–10 · Fit adults · Budget families', highlight:false },
            { tier:'Standard', price:'₹26,000–32,000', icon:'🏨', for:'Families of 4–6 · Mixed ages · Comfort seekers', highlight:true },
            { tier:'Premium', price:'₹36,000–50,000', icon:'⭐', for:'Couples · Seniors 65+ · NRIs · Health conditions', highlight:false },
          ].map(t => (
            <div key={t.tier} style={{ borderRadius:12, padding:'16px', textAlign:'center', border:t.highlight?'2px solid var(--gold)':'1px solid var(--border)', background:t.highlight?'#FFFBF3':'var(--bg)' }}>
              <div style={{ fontSize:28, marginBottom:8 }}>{t.icon}</div>
              <div style={{ fontWeight:800, fontSize:16, color:'var(--navy)', marginBottom:4 }}>{t.tier}</div>
              <div style={{ fontWeight:800, fontSize:18, color:t.highlight?'#B45309':'var(--navy)', fontFamily:'var(--font-display)', marginBottom:8 }}>{t.price}</div>
              <div style={{ fontSize:12, color:'var(--text-muted)', lineHeight:1.5 }}>{t.for}</div>
              {t.highlight && <div style={{ background:'var(--gold)', color:'#fff', fontSize:10.5, fontWeight:800, padding:'3px 12px', borderRadius:100, display:'inline-block', marginTop:8 }}>Most Chosen</div>}
            </div>
          ))}
        </div>

        <h2 style={{ fontFamily:'var(--font-display)', fontSize:'1.45rem', fontWeight:700, color:'var(--navy)', marginBottom:14 }}>
          Factor-by-Factor Comparison
        </h2>
        <div style={{ display:'flex', flexDirection:'column', gap:12, marginBottom:28 }}>
          {COMPARE.map((row,i) => (
            <div key={row.factor} style={{ borderRadius:12, overflow:'hidden', border:'1px solid var(--border)' }}>
              <div style={{ background:'var(--navy-light)', padding:'10px 16px', fontWeight:700, fontSize:13.5, color:'var(--navy)', display:'flex', justifyContent:'space-between', alignItems:'center' }}>
                <span>{row.factor}</span>
                <span style={{ fontSize:11.5, color:'var(--text-muted)', fontWeight:400 }}>💡 {row.note}</span>
              </div>
              <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(min(100%,220px),1fr))', gap:0 }}>
                {[['Budget',row.budget,'#fff'],['Standard',row.standard,'#FFFBF3'],['Premium',row.premium,'#F0FDF4']].map(([tier,val,bg])=>(
                  <div key={tier} style={{ padding:'10px 14px', background:bg, borderRight:'1px solid var(--border)' }}>
                    <div style={{ fontSize:10.5, fontWeight:700, color:'var(--text-muted)', marginBottom:4, textTransform:'uppercase', letterSpacing:'0.05em' }}>{tier}</div>
                    <div style={{ fontSize:13, color:'#334155', lineHeight:1.6 }}>{val}</div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <h2 style={{ fontFamily:'var(--font-display)', fontSize:'1.45rem', fontWeight:700, color:'var(--navy)', marginBottom:14 }}>
          The One Area Where Premium Genuinely Wins — Darshan Quality
        </h2>
        <p style={{ fontSize:16, color:'#334155', lineHeight:1.9, marginBottom:16 }}>
          The spiritual experience is the same regardless of package tier — Lord Shiva at Kedarnath does not distinguish between pilgrims who paid ₹20,000 and those who paid ₹50,000. But the access experience is very different. Premium packages include <strong>Mahabhishek booking at Kedarnath</strong> — the 4 AM private puja where you are inches from the Shivalinga in near silence, while the entire temple is still dark. This experience is impossible to have in a general queue. For many pilgrims, this 45-minute puja at 4 AM is worth the entire upgrade cost on its own.
        </p>

        <div style={{ background:'var(--navy-light)', borderRadius:12, padding:'16px 20px', marginBottom:24 }}>
          <div style={{ fontWeight:700, fontSize:14, color:'var(--navy)', marginBottom:8 }}>Our Recommendation Based on 50,000+ Pilgrims</div>
          <p style={{ fontSize:14.5, color:'#334155', lineHeight:1.75, margin:0 }}>
            For a group of 8 working adults under 50, the Budget package delivers full value — excellent Char Dham experience at ₹19,500. For a family with grandparents above 65, Standard minimum (₹26,000+) is essential — the hotel quality and private vehicle flexibility are not a luxury, they are a health requirement at altitude. For couples or pilgrims who want the deepest darshan experience, Premium at ₹36,000+ earns its price. Never upgrade based on prestige — upgrade based on what genuinely improves your specific situation.
          </p>
        </div>

        <div style={{ background:'var(--navy)', borderRadius:16, padding:'28px 24px', textAlign:'center', marginTop:36 }}>
          <h3 style={{ color:'#fff', fontFamily:'var(--font-display)', fontSize:'1.3rem', marginBottom:10 }}>Get a Personalised Package Recommendation</h3>
          <p style={{ color:'rgba(255,255,255,0.7)', fontSize:14, marginBottom:18 }}>Tell us your group size, ages, and budget — we will suggest the right tier. No upselling, honest advice always. {SITE.phone}</p>
          <div style={{ display:'flex', gap:10, justifyContent:'center', flexWrap:'wrap' }}>
            <a href={`https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent('Namaste! I need help choosing between budget and premium Char Dham Yatra package 2026.')}`} target="_blank" rel="nofollow noopener noreferrer"
              style={{ background:'#25D366', color:'#fff', padding:'12px 24px', borderRadius:9, fontWeight:700, fontSize:13.5, textDecoration:'none' }}>💬 WhatsApp</a>
            View All Packages →
          </div>
        </div>

        <div style={{ borderTop:'1px solid var(--border)', paddingTop:24, marginTop:32 }}>
          <div style={{ fontWeight:700, fontSize:13.5, color:'var(--navy)', marginBottom:12 }}>Related Guides</div>
          <div style={{ display:'flex', gap:10, flexWrap:'wrap' }}>
            {[['Char Dham Cost Breakdown','/blog/char-dham-yatra-cost'],['Package vs Self-Planned','/blog/char-dham-yatra-package-vs-self-planned'],['Senior Citizen Guide','/blog/senior-citizen-char-dham'],['Char Dham vs Do Dham','/blog/char-dham-vs-do-dham']].map(([l,h])=>(
              <Link key={h} href={h} style={{ background:'var(--bg)', border:'1px solid var(--border)', color:'var(--navy)', padding:'7px 14px', borderRadius:8, fontSize:12.5, fontWeight:600, textDecoration:'none' }}>{l} →</Link>
            ))}
          </div>
        </div>
      </article>
    </>
  );
}
