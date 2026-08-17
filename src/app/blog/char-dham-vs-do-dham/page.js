import Link from 'next/link';
import { SITE } from '@/data/packages';
import BlogCTA from '@/components/BlogCTA';
import BlogAuthor from '@/components/BlogAuthor';
import BlogHero from '@/components/BlogHero';
import ReadingProgress from '@/components/ReadingProgress';
import KeyTakeaways from '@/components/KeyTakeaways';
import BlogTOC from '@/components/BlogTOC';
import { h2 } from "@/lib/prose";

export const metadata = {
  title: { absolute: `Char Dham vs Do Dham Yatra ${SITE.season} | Price Starts at ₹8,200 | Compare` },
  description: `Char Dham vs Do Dham Yatra ${SITE.season} — compare time, cost, difficulty. Trusted operator, 15+ yrs experience, fixed departures & instant confirmation.`,
  keywords: ['char dham vs do dham yatra', 'difference between char dham and do dham', `do dham yatra ${SITE.season}`, 'which is better char dham or do dham', 'char dham vs do dham cost', 'do dham yatra from haridwar'],
  alternates: { canonical: `${SITE.baseUrl}/blog/char-dham-vs-do-dham` },
};

const ROWS = [
  ['Dhams covered', 'All 4 — Yamunotri, Gangotri, Kedarnath, Badrinath', 'Usually 2 — Kedarnath + Badrinath'],
  ['Duration', '10–12 days (minimum)', '5–6 days (comfortable)'],
  ['Road distance', '~1,500–1,600 km from Haridwar', '~750–800 km from Haridwar'],
  ['Total trekking', '22 km (6km Yamunotri + 16km Kedarnath)', '16 km (Kedarnath only)'],
  ['Package cost (road)', 'From ₹13,900 per person', 'From ₹8,200 per person'],
  ['Package cost (helicopter)', '₹2,30,000 per person', 'From ₹22,500 per person'],
  ['Difficulty level', 'Moderate — 10+ days of mountain travel', 'Easy to moderate — manageable in 5 days'],
  ['Best for', 'First-time complete pilgrims, those with 12+ days', 'Limited time, first-time yatris, repeat pilgrims'],
  ['Senior-friendly', 'Yes — with 12N/13D senior package', 'Yes — most manageable option for 65+'],
  ['Spiritual completeness', 'Complete circuit — all 4 dhams', 'The 2 most powerful shrines (Shiva + Vishnu)'],
  ['Booking lead time', '60+ days for peak season', '30–45 days sufficient'],
];

function Schema() {
  const faq = {
    '@context': 'https://schema.org', '@type': 'FAQPage',
    mainEntity: [
      { '@type': 'Question', name: 'What is the difference between Char Dham and Do Dham Yatra?',
        acceptedAnswer: { '@type': 'Answer', text: 'Char Dham Yatra covers all 4 sacred shrines — Yamunotri, Gangotri, Kedarnath, and Badrinath — in 10–12 days. Do Dham Yatra covers 2 dhams (typically Kedarnath + Badrinath) in 5–6 days. Char Dham costs ₹13,900+ per person; Do Dham costs ₹8,200+ per person.' }},
      { '@type': 'Question', name: 'Which is better — Char Dham or Do Dham Yatra?',
        acceptedAnswer: { '@type': 'Answer', text: 'For pilgrims with 10+ days, Char Dham is the complete and most spiritually fulfilling option. For those with limited time (5–7 days), first-time pilgrims wanting to test mountain travel, or senior citizens, Do Dham (Kedarnath + Badrinath) is the better choice — it covers the two most significant shrines and is more manageable.' }},
      { '@type': 'Question', name: 'Can I do Char Dham Yatra in 7 days?',
        acceptedAnswer: { '@type': 'Answer', text: 'Technically possible but not recommended. A 7-day Char Dham itinerary would require 200+ km of mountain driving daily and allow minimal time at each dham. The Kedarnath trek alone takes 4–6 hours one way. A Do Dham package in 5–6 days is far more sustainable for most pilgrims.' }},
    ],
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faq) }}/>
}


export default function ComparisonPage() {
  return (
    <>
      <Schema />
      <ReadingProgress/>

      <BlogHero
        badge="Comparison Guide · 2026"
        title="Char Dham vs Do Dham Yatra — Which is Right for You?"
        dek="Full comparison — duration, cost, difficulty, best for whom · Expert guide by Dhanesh Chandra Mishra, Shiv Ganga Travels"
        author="Dhanesh Chandra Mishra"
        authorInitials="DM"
        updated={`Updated ${SITE.lastUpdated}`}
        readTime="6 min read"
        facts={[
          { label:'Char Dham', value:'10–12 days' },
          { label:'Do Dham',   value:'5–7 days' },
          { label:'Char Dham from', value:'₹13,900' },
          { label:'Do Dham from',   value:'₹8,200' },
        ]}
      />

      <div style={{ background:'#fff', borderBottom:'1px solid hsl(var(--border))', padding:'10px 20px' }}>
        <div style={{ maxWidth:'var(--container)', margin:'0 auto', fontSize:12.5, color:'var(--text-muted)', display:'flex', gap:20, flexWrap:'wrap' }}>
          <span>✍️ <strong style={{ color:'var(--navy)' }}>Author:</strong> Dhanesh Chandra Mishra, Founder, Shiv Ganga Travels (Retd. Army Officer)</span>
          <span>🗓️ <strong style={{ color:'var(--navy)' }}>Last updated:</strong> {SITE.lastUpdated}</span>
          <span>📊 <strong style={{ color:'var(--navy)' }}>Based on:</strong> 50,000+ pilgrims, 15 years</span>
        </div>
      </div>

      <article className="blog-container" itemScope itemType="https://schema.org/Article">

        {/* Author byline — E-E-A-T signal */}
        <BlogAuthor variant="top" author="dhanesh" article={{"slug": "char-dham-vs-do-dham", "title": "Char Dham vs Do Dham Yatra: Which Suits You?", "description": "Char Dham vs Do Dham Yatra — compare time (10 vs 6 days), cost (₹13,900 vs ₹8,200), difficulty and significance to pick the right pilgrimage for 2026.", "datePublished": "2025-08-15", "dateModified": "2026-06-20", "lang": "en-IN"}} />

        <p className="blog-lede">
          One of the most common questions Dhanesh ji receives at Shiv Ganga Travels: <strong>"Should we do Char Dham or Do Dham?"</strong> After guiding 50,000+ pilgrims since 2010, the answer depends entirely on your time, health, and what you want from the yatra.
        </p>

        <KeyTakeaways title="The short answer"
          points={[
            <><strong>Char Dham</strong> (all 4) needs ~10–12 days and suits first-timers wanting the complete circuit, reasonable fitness, and a vow to honour.</>,
            <><strong>Do Dham</strong> (Kedarnath + Badrinath) fits 5–7 days, tighter budgets, and pilgrims 65+ or short on time.</>,
            <>Do Dham costs roughly <strong>40% less</strong> — from ₹8,200 vs ₹13,900.</>,
            <>Both include the two hardest/holiest shrines; Do Dham simply skips Yamunotri and Gangotri.</>,
          ]}
        />

        <BlogTOC items={[
          { id:'comparison',   label:'Side-by-side comparison' },
          { id:'choose-char',  label:'Choose Char Dham if…' },
          { id:'choose-do',    label:'Choose Do Dham if…' },
        ]}/>

        {/* Comparison table */}
        <h2 id="comparison" style={h2}>Side-by-Side Comparison</h2>
        <div style={{ overflowX:'auto', marginBottom:36 }}>
          <table style={{ width:'100%', borderCollapse:'collapse', fontSize:13.5 }}>
            <thead>
              <tr>
                <th style={{ padding:'12px 16px', textAlign:'left', background:'var(--navy)', color:'#fff', fontWeight:700, fontSize:12 }}>Feature</th>
                <th style={{ padding:'12px 16px', textAlign:'center', background:'var(--navy)', color:'#FFD166', fontWeight:700, fontSize:12 }}>Char Dham Yatra (All 4)</th>
                <th style={{ padding:'12px 16px', textAlign:'center', background:'var(--teal)', color:'#fff', fontWeight:700, fontSize:12 }}>Do Dham Yatra</th>
              </tr>
            </thead>
            <tbody>
              {ROWS.map(([feature, cd, dd], i) => (
                <tr key={feature} style={{ borderBottom:'1px solid hsl(var(--border))', background: i%2===0?'#fff':'var(--bg)' }}>
                  <td style={{ padding:'11px 16px', fontWeight:600, color:'var(--navy)', fontSize:13 }}>{feature}</td>
                  <td style={{ padding:'11px 16px', textAlign:'center', color:'var(--text-mid)', fontSize:13 }}>{cd}</td>
                  <td style={{ padding:'11px 16px', textAlign:'center', color:'var(--text-mid)', fontSize:13 }}>{dd}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 id="choose-char" style={h2}>Choose Char Dham if...</h2>
        {['You have 10+ days available and no serious health conditions at altitude','You are completing the yatra for the first time and want the full spiritual circuit','You are aged 40–65 and in reasonable fitness','Family reunion or group pilgrimage where all members want the complete experience','You want to honour a vow (mannat) that requires all four dhams'].map(r => (
          <div key={r} style={{ display:'flex', gap:10, padding:'8px 0', borderBottom:'1px solid hsl(var(--border))', fontSize:15.5, color:'#2D3748' }}><span style={{ color:'var(--navy)', fontWeight:700 }}>✓</span>{r}</div>
        ))}

        <h2 id="choose-do" style={h2}>Choose Do Dham (Kedarnath + Badrinath) if...</h2>
        {['You have only 5–7 days available','You are above 65 or have health conditions','You are a first-time yatri wanting to experience mountain pilgrimage before committing to the full circuit','You have previously done Yamunotri and Gangotri and want to complete Kedarnath + Badrinath','Budget is a key consideration — Do Dham costs approximately 40% less than Char Dham'].map(r => (
          <div key={r} style={{ display:'flex', gap:10, padding:'8px 0', borderBottom:'1px solid hsl(var(--border))', fontSize:15.5, color:'#2D3748' }}><span style={{ color:'var(--teal)', fontWeight:700 }}>✓</span>{r}</div>
        ))}


        {/* ── Mid-article conversion CTA ── */}
        <BlogCTA variant="inline" intent="info" />
        <div style={{ background:'var(--navy-light)', borderRadius:14, padding:'18px 20px', margin:'28px 0' }}>
          <div style={{ fontWeight:700, fontSize:14, color:'var(--navy)', marginBottom:8 }}>💬 From 15 years of experience:</div>
          <p style={{ fontSize:15.5, color:'#2D3748', lineHeight:1.75, margin:0 }}>
            "In my experience, pilgrims who rush Char Dham in 7–8 days feel unsatisfied — they missed the experience at each dham. I always recommend: if you have less than 10 days, do Do Dham well rather than Char Dham in a rush. The journey matters as much as the destination." — <strong>Dhanesh Chandra Mishra, Founder, Shiv Ganga Travels</strong>
          </p>
        </div>

        <div style={{ borderTop:'1px solid hsl(var(--border))', paddingTop:24, marginTop:32 }}>
          <div style={{ fontWeight:700, fontSize:13.5, color:'var(--navy)', marginBottom:12 }}>Related Guides</div>
          <div style={{ display:'flex', gap:10, flexWrap:'wrap' }}>
            {[['Char Dham Packages','char-dham-yatra'],['Do Dham Packages','/do-dham-yatra'],['Teen Dham Packages','/teen-dham-yatra'],['7-Day Itinerary','/blog/char-dham-yatra-7-days'],['Cost Breakdown','/blog/char-dham-yatra-cost'],['Registration Guide','/blog/char-dham-yatra-registration'],['Budget vs Premium','/blog/char-dham-yatra-budget-vs-premium']].map(([l,h])=>(
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
