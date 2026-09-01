import Link from 'next/link';
import { SITE } from '@/data/packages';
import BlogCTA from '@/components/BlogCTA';
import BlogAuthor from '@/components/BlogAuthor';
import BlogHero from '@/components/BlogHero';
import ReadingProgress from '@/components/ReadingProgress';
import KeyTakeaways from '@/components/KeyTakeaways';
import { h2, h3, p } from '@/lib/prose';

/* The comparison table states the two totals; this is the arithmetic behind
   them. Figures are per person for a 9N/10D circuit from Haridwar in peak
   season, given as ranges because vehicle class and hotel tier move them more
   than anything else. They are deliberately consistent with the totals in the
   table above — do not edit one without the other. */
const selfPlannedCosts = [
  { item: 'Vehicle + driver, 10 days', two: '₹12,500–16,000', ten: '₹3,500–4,500', note: 'Roughly 1,600 km. A hill-permit vehicle with an experienced driver costs more than a plains taxi, and is worth it.' },
  { item: 'Hotels, 9 nights twin-sharing', two: '₹4,500–9,000', ten: '₹4,500–9,000', note: 'Does not fall with group size. Peak-season Guptkashi and Barkot rooms are the ones that spike.' },
  { item: 'Meals, 10 days', two: '₹4,000–6,000', ten: '₹4,000–6,000', note: '₹400–600 a day. Dhaba food on the route is cheap; hotel dinners are not.' },
  { item: 'Pony / palki at Kedarnath', two: '₹3,000–5,000', ten: '₹3,000–5,000', note: 'One way. Skip it if you are walking the 16 km.' },
  { item: 'Pony at Yamunotri', two: '₹1,200–2,000', ten: '₹1,200–2,000', note: 'The 6 km from Janki Chatti. Most groups take it at least one way.' },
  { item: 'Registration', two: 'Free', ten: 'Free', note: 'Genuinely ₹0. Anyone charging you for it is not the government.' },
  { item: 'Parking, tolls, puja, misc', two: '₹2,000–4,000', ten: '₹2,000–4,000', note: 'The line everyone forgets, and it is never zero.' },
];

export const metadata = {
  title: { absolute: `Char Dham Package vs Self-Planned Trip ${SITE.season} | Real Costs` },
  description: `Char Dham package vs going independent in ${SITE.season} — honest cost comparison, what you gain and lose, and which option suits which type of pilgrim.`,
  keywords: ['char dham yatra package vs self planned', 'char dham yatra self booking', 'is char dham yatra package worth it', 'char dham yatra independent travel', `char dham package or self arranged ${SITE.season}`],
  alternates: { canonical: `${SITE.baseUrl}/blog/char-dham-yatra-package-vs-self-planned` },
};

function Schema() {
  const faq = {
    '@context': 'https://schema.org', '@type': 'FAQPage',
    mainEntity: [
      { '@type': 'Question', name: 'Is a Char Dham Yatra package worth it?',
        acceptedAnswer: { '@type': 'Answer', text: 'For most pilgrims, yes. A Char Dham Yatra package from a direct operator is typically 10–20% cheaper than self-arranging all components separately during peak season, while removing logistical complexity. The key is booking with a direct operator (not an aggregator) — Shiv Ganga Travels charges zero commission.' }},
      { '@type': 'Question', name: 'Can I do Char Dham Yatra on my own without a travel agent?',
        acceptedAnswer: { '@type': 'Answer', text: 'Yes, it is possible. You need to arrange: biometric registration, vehicle hire, hotels at Barkot/Uttarkashi/Guptkashi/Joshimath, and Kedarnath trek logistics. During peak season (May–June), hotels fill 45–60 days in advance — independent travellers often find their preferred options unavailable. For first-time pilgrims or senior citizens, a package is strongly recommended.' }},
    ],
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faq) }}/>
}


export default function PkgVsSelf() {
  const rows = [
    ['Hotel booking', 'Pre-blocked rooms guaranteed', 'May be unavailable in peak season'],
    ['Vehicle', 'Hill-certified, experienced driver included', 'Hire separately — quality varies'],
    ['Cost transparency', 'One price, all inclusive', 'Multiple separate costs, surprises common'],
    ['Biometric registration', 'Operator handles all paperwork', 'Self-arrange online or at Haridwar centre'],
    ['Kedarnath logistics', 'Pony/helicopter pre-arranged', 'Self-arrange at Gaurikund — long queues'],
    ['Emergency support', 'Operator on call 24/7', 'On your own'],
    ['Flexibility', 'Fixed itinerary — less spontaneous', 'Change plans freely'],
    ['Cost (2 people, peak)', '₹22,000–28,000 per person', '₹24,000–32,000 per person (peak hotels)'],
    ['Cost (10 people, peak)', '₹13,900 per person', '₹18,000–22,000 per person (possible saving)'],
    ['Best for', 'First-time, senior, 2–8 person groups', 'Experienced, 10+ people, repeat pilgrims'],
  ];
  return (
    <>
      <Schema />
      <ReadingProgress/>

      <BlogHero
        badge="Honest Comparison · 2026"
        title="Package vs Self-Planned Char Dham Yatra 2026"
        dek="Honest analysis from Dhanesh Chandra Mishra — 15-year Char Dham operator · Shiv Ganga Travels, Haridwar"
        author="Dhanesh Chandra Mishra"
        authorInitials="DM"
        updated={`Updated ${SITE.lastUpdated}`}
        readTime="7 min read"
        facts={[
          { label:'Package from', value:'₹13,900 pp' },
          { label:'Self-planned', value:'Similar, more effort' },
          { label:'Best for DIY',  value:'Fit, flexible groups' },
          { label:'Direct operator', value:'Zero commission' },
        ]}
      />
      <div style={{ background:'#fff', borderBottom:'1px solid hsl(var(--border))', padding:'10px 20px' }}>
        <div style={{ maxWidth:'var(--container)', margin:'0 auto', fontSize:12.5, color:'var(--text-muted)', display:'flex', gap:20, flexWrap:'wrap' }}>
          <span>✍️ <strong style={{ color:'var(--navy)' }}>Author:</strong> Dhanesh Chandra Mishra · Founder, Shiv Ganga Travels · Retd. Army Officer</span>
          <span>🗓️ <strong style={{ color:'var(--navy)' }}>Last updated:</strong> {SITE.lastUpdated}</span>
        </div>
      </div>
      <article className="blog-container" itemScope itemType="https://schema.org/Article">

        {/* Author byline — E-E-A-T signal */}
        <BlogAuthor variant="top" author="dhanesh" article={{"slug": "char-dham-yatra-package-vs-self-planned", "title": "Char Dham Package vs Self-Planned Trip: Real Costs", "description": "Char Dham package vs going independent in 2026 — honest cost comparison, what you gain and lose, and which option suits which type of pilgrim.", "datePublished": "2025-08-15", "dateModified": "2026-06-20", "lang": "en-IN"}} />
        <p className="blog-lede">
          An honest answer from someone who runs packages: self-planned is absolutely possible, and for some pilgrims it is the better choice. But for most first-time pilgrims and senior citizens, a direct operator package wins on cost, convenience, and safety — especially if you book with a zero-commission direct operator rather than an aggregator.
        </p>

        <KeyTakeaways title="The honest verdict"
          points={[
            <><strong>Self-planned</strong> suits fit, flexible groups who enjoy logistics and have done the route before.</>,
            <>For <strong>first-timers and seniors</strong>, a package wins on cost, convenience and safety.</>,
            <>Going independent rarely saves much once you count fuel, hotels, registration and time.</>,
            <>A <strong>direct operator</strong> (not an aggregator) gives package convenience without the 15–25% middleman margin.</>,
          ]}
        />
        <h2 style={h2}>Package vs self-planned, factor by factor</h2>
        <div style={{ overflowX:'auto', marginBottom:36 }}>
          <table style={{ width:'100%', borderCollapse:'collapse', fontSize:13.5 }}>
            <thead>
              <tr>
                <th style={{ padding:'12px 16px', textAlign:'left', background:'var(--navy)', color:'#fff', fontWeight:700, fontSize:12 }}>Factor</th>
                <th style={{ padding:'12px 16px', textAlign:'center', background:'var(--navy)', color:'#FFD166', fontWeight:700, fontSize:12 }}>Package (Direct Operator)</th>
                <th style={{ padding:'12px 16px', textAlign:'center', background:'var(--teal)', color:'#fff', fontWeight:700, fontSize:12 }}>Self-Planned</th>
              </tr>
            </thead>
            <tbody>
              {rows.map(([f,p,s],i) => (
                <tr key={f} style={{ borderBottom:'1px solid hsl(var(--border))', background:i%2===0?'#fff':'var(--bg)' }}>
                  <td style={{ padding:'11px 16px', fontWeight:600, color:'var(--navy)', fontSize:13 }}>{f}</td>
                  <td style={{ padding:'11px 16px', textAlign:'center', color:'var(--text-mid)', fontSize:13 }}>{p}</td>
                  <td style={{ padding:'11px 16px', textAlign:'center', color:'var(--text-mid)', fontSize:13 }}>{s}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <h2 style={h2}>Where the self-planned money actually goes</h2>
        <p style={p}>
          The table above gives two totals. This is the arithmetic behind them, per person, for the standard
          9N/10D circuit from Haridwar in peak season. The reason the two columns diverge so sharply is that
          exactly one line — the vehicle — divides across the group, and it is the biggest line.
        </p>
        <div style={{ background:'#fff', borderRadius:12, border:'1px solid hsl(var(--border))', overflowX:'auto', marginBottom:14 }}>
          <table style={{ width:'100%', borderCollapse:'collapse', fontSize:13, minWidth:660 }}>
            <caption className="sr-only">Self-planned Char Dham cost per person, by line item, for a group of two and a group of ten</caption>
            <thead>
              <tr style={{ background:'var(--navy-light)' }}>
                {['Cost', 'Group of 2', 'Group of 10', 'Notes'].map(x => (
                  <th key={x} scope="col" style={{ padding:'10px 12px', textAlign:'left', fontWeight:700, fontSize:11, color:'var(--navy)', textTransform:'uppercase', letterSpacing:'0.05em' }}>{x}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {selfPlannedCosts.map((c, i) => (
                <tr key={c.item} style={{ borderTop:'1px solid hsl(var(--border))', background: i%2===0 ? '#fff' : 'var(--bg)' }}>
                  <th scope="row" style={{ padding:'10px 12px', fontWeight:600, color:'var(--navy)', fontSize:13, textAlign:'left' }}>{c.item}</th>
                  <td style={{ padding:'10px 12px', color:'var(--teal)', fontWeight:700, whiteSpace:'nowrap' }}>{c.two}</td>
                  <td style={{ padding:'10px 12px', color:'var(--teal)', fontWeight:700, whiteSpace:'nowrap' }}>{c.ten}</td>
                  <td style={{ padding:'10px 12px', color:'var(--text-muted)', fontSize:12.5 }}>{c.note}</td>
                </tr>
              ))}
              <tr style={{ borderTop:'2px solid var(--navy)', background:'var(--navy-light)' }}>
                <th scope="row" style={{ padding:'11px 12px', fontWeight:800, color:'var(--navy)', fontSize:13, textAlign:'left' }}>Total per person</th>
                <td style={{ padding:'11px 12px', fontWeight:800, color:'var(--navy)', fontSize:14.5, whiteSpace:'nowrap' }}>₹27,000–42,000</td>
                <td style={{ padding:'11px 12px', fontWeight:800, color:'#15803D', fontSize:14.5, whiteSpace:'nowrap' }}>₹18,000–31,000</td>
                <td style={{ padding:'11px 12px', color:'var(--text-muted)', fontSize:12.5 }}>Against a package from ₹13,900 per person.</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p style={{ ...p, fontSize:'0.95em', color:'var(--text-muted)' }}>
          The lower end of each range assumes a smaller vehicle and budget rooms; the upper end is an Innova
          with 3-star hotels in peak weeks. A pair travelling comfortably lands nearer the top of the two-person
          band, which is why the summary table quotes ₹24,000–32,000 for a mid-range self-planned trip and why
          it can run higher than that in June.
        </p>

        <h3 style={h3}>The costs people leave out of the comparison</h3>
        <p style={p}>
          Three of them, consistently. <strong>Empty running</strong> — you pay the vehicle for the days it
          waits at Guptkashi while you are up at Kedarnath, not just the days you drive. <strong>Peak-season
          room premiums</strong> — the Barkot and Guptkashi rates people quote each other are off-season rates,
          and the same room in the first week of June is often double. And <strong>the cost of a lost day</strong>,
          which is the one that actually hurts: a landslide closure or a missed darshan slot means an extra
          night, an extra day of vehicle hire and, for many people, a changed flight home.
        </p>
        <p style={p}>
          None of that argues that self-planning is wrong. It argues that the honest comparison is not
          package price against fuel cost — it is package price against the full column above, including the
          days you had not budgeted for. For a group of ten who know the route, the arithmetic genuinely can
          favour going alone. For two first-timers, it very rarely does.
        </p>

        <div style={{ background:'var(--navy-light)', borderRadius:14, padding:'18px 20px', marginBottom:24 }}>
          <h2 style={{ ...h2, fontSize:14, marginTop:0, marginBottom:8 }}>⚠️ The most common self-planning mistake</h2>
          <p style={{ fontSize:15.5, color:'#2D3748', lineHeight:1.75, margin:0 }}>Pilgrims who plan independently often underestimate hotel availability in peak season. Hotels at Guptkashi (Kedarnath base) and Joshimath (Badrinath base) fill up 45–60 days ahead in May–June. Operators like Shiv Ganga Travels pre-block rooms from January each year. A self-planner arriving in Haridwar in late April for a May departure will find most good hotels already gone.</p>
        </div>
        {/* ── Mid-article CTA — right where the hotel-availability point lands ── */}
        <BlogCTA
          variant="inline"
          intent="booking"
          eyebrow="Rooms are blocked in January"
          line="Tell us your month and group size — we will tell you honestly whether the dates are still workable and what a package costs."
        />

        <div style={{ borderTop:'1px solid hsl(var(--border))', paddingTop:24, marginTop:32 }}>
          <div style={{ fontWeight:700, fontSize:13.5, color:'var(--navy)', marginBottom:12 }}>Related Guides</div>
          <div style={{ display:'flex', gap:10, flexWrap:'wrap' }}>
            {[['Char Dham Packages','/char-dham-yatra'],['Cost Breakdown','/blog/char-dham-yatra-cost'],['Budget vs Premium','/blog/char-dham-yatra-budget-vs-premium'],['Group Packages','/blog/char-dham-group-package'],['Cancellation Policy','/cancellation-policy'],['Registration Guide','/blog/char-dham-yatra-registration']].map(([l,h])=>(
              <Link key={h} href={h} style={{ background:'var(--bg)', border:'1px solid hsl(var(--border))', color:'var(--navy)', padding:'7px 14px', borderRadius:8, fontSize:12.5, fontWeight:600, textDecoration:'none' }}>{l} →</Link>
            ))}
          </div>
        </div>
      
        {/* ── End-of-article booking CTA ── */}
        <BlogCTA variant="footer" intent="info" />
</article>
    </>
  );
}
