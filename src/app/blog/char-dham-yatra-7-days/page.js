import Link from 'next/link';
import { SITE } from '@/data/packages';
import BlogCTA from '@/components/BlogCTA';
import BlogAuthor from '@/components/BlogAuthor';

export const metadata = {
  title: 'Char Dham Yatra in 7 Days 2026 – Is It Possible? Complete Itinerary & Honest Tips',
  description: 'Can you complete Char Dham Yatra in 7 days? Yes — with the right itinerary. Day-by-day plan, what to skip, driving distances, and honest advice for pilgrims with limited time in 2026.',
  keywords: ['char dham yatra 7 days itinerary', 'char dham yatra in 7 days possible', '7 day char dham yatra plan', 'char dham yatra minimum days', 'char dham yatra short duration 2026'],
  alternates: { canonical: `${SITE.baseUrl}/blog/char-dham-yatra-7-days` },
  openGraph: { title: 'Char Dham Yatra in 7 Days 2026 – Is It Possible? Complete Itinerary & Honest Tips', description: 'Honest 7-day Char Dham Yatra itinerary with what is rushed, what is skipped, and when it makes sense.', url: `${SITE.baseUrl}/blog/char-dham-yatra-7-days`, type: 'article' },
    images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: 'Char Dham Yatra in 7 Days 2026 — Is It Possible? | Shiv Ganga Travels' }],
};

function Schema() {
  const faq = {
    '@context': 'https://schema.org', '@type': 'FAQPage',
    mainEntity: [
      { '@type': 'Question', name: 'Can Char Dham Yatra be completed in 7 days?',
        acceptedAnswer: { '@type': 'Answer', text: 'Technically yes, but it is not recommended for first-time pilgrims. A 7-day Char Dham Yatra involves driving 200–250km daily on narrow mountain roads and allows very limited darshan time at each shrine. The Kedarnath trek alone takes 5–7 hours one way. For pilgrims with only 7 days, Do Dham (Kedarnath + Badrinath, 5N/6D) is a better choice.' }},
      { '@type': 'Question', name: 'What is the minimum number of days for Char Dham Yatra?',
        acceptedAnswer: { '@type': 'Answer', text: 'The minimum comfortable duration for Char Dham Yatra from Haridwar is 10 nights 11 days for road travel. Helicopter yatra can be done in 5 nights 6 days. Attempting all four dhams by road in fewer than 10 days results in exhaustion, missed darshan, and health risks at altitude.' }},
      { '@type': 'Question', name: 'What is the 7-day Char Dham Yatra itinerary?',
        acceptedAnswer: { '@type': 'Answer', text: 'Day 1: Haridwar → Barkot (Yamunotri base, 175km). Day 2: Yamunotri darshan + drive to Uttarkashi. Day 3: Gangotri darshan + drive to Guptkashi. Day 4: Early morning Kedarnath trek + return to Guptkashi. Day 5: Drive Guptkashi → Joshimath (260km via Rudraprayag). Day 6: Badrinath darshan + drive back to Rishikesh/Haridwar. Day 7: Return home. This itinerary has very long driving days and minimal rest.' }},
      { '@type': 'Question', name: 'Is 7 days enough for Char Dham Yatra for senior citizens?',
        acceptedAnswer: { '@type': 'Answer', text: 'No. Senior pilgrims should never attempt Char Dham Yatra in 7 days. A minimum of 12 nights 13 days is recommended for pilgrims above 60 years. Rushed travel increases altitude sickness risk and physical exhaustion. Senior-friendly packages include acclimatisation stops and slower driving days.' }},
    ],
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faq) }}/>;
}

const DAY_ITINERARY = [
  { day:'Day 1', route:'Haridwar → Barkot', dist:'175km / 5–6 hrs', details:'Leave Haridwar by 5 AM. Reach Barkot by 11 AM via Mussoorie bypass. Check in. Rest. Attend Aarti at local temple. Prepare for early morning trek day tomorrow. Stay: Barkot.', warning:'175km on mountain roads — tiring but doable. Do not leave after 6 AM or you will arrive in darkness.' },
  { day:'Day 2', route:'Yamunotri + Uttarkashi', dist:'Trek 12km + drive 120km', details:'Leave Barkot at 5 AM for Janki Chatti (30 min). Trek 6km to Yamunotri (3–4 hrs ascending). Darshan. Cook rice in Surya Kund hot spring. Trek back 6km. Drive to Uttarkashi (100km, 2.5 hrs). Stay: Uttarkashi.', warning:'Very long day. 12km trek + 3.5hrs driving. Pilgrims with knee problems must take pony (pre-book at Janki Chatti, ₹1,200 one way).' },
  { day:'Day 3', route:'Gangotri + drive to Guptkashi', dist:'265km total driving', details:'Leave Uttarkashi by 6 AM. Reach Gangotri (100km, 3 hrs). Darshan at Gangotri temple. Bhagirathi river. Drive back to Uttarkashi (100km, 3 hrs) then continue to Guptkashi (180km, 5 hrs) via Rudraprayag. Very long day. Stay: Guptkashi.', warning:'This is the hardest driving day — 265km on mountain roads. Unavoidable if doing 7 days. Consider Uttarkashi overnight (Day 3) and add one day.' },
  { day:'Day 4', route:'Kedarnath trek + return', dist:'32km round trek + 15km driving', details:'Leave Guptkashi at 3 AM for Sonprayag (15km). Jeep shuttle to Gaurikund. Trek 16km to Kedarnath (5–7 hrs ascending). Darshan. Trek back 16km to Gaurikund (4–5 hrs). Return to Guptkashi. Stay: Guptkashi.', warning:'Trek starts in darkness (5 AM). Carry headtorch. Do not start after 6 AM — afternoon clouds reduce visibility. Helicopter option recommended for this day if budget allows.' },
  { day:'Day 5', route:'Guptkashi → Joshimath', dist:'260km / 7–8 hrs', details:'Long driving day through Rudraprayag, Chamoli, Pipalkoti to Joshimath. Arrive by 5–6 PM. Rest. Joshimath acclimatisation important before Badrinath. Stay: Joshimath.', warning:'Joshimath road has 30 km/h speed restriction through town. Allow extra time. Do not push this to reach Badrinath same evening — altitude sickness risk is high.' },
  { day:'Day 6', route:'Badrinath darshan + return to Haridwar', dist:'330km total', details:'Leave Joshimath at 5 AM for Badrinath (25km, 40 min). Tapt Kund bath. Darshan at Badrinath temple (6 AM, far fewer crowds than afternoon). Drive back — Badrinath → Joshimath → Rudraprayag → Rishikesh → Haridwar (300km, 9 hrs). Arrive Haridwar midnight.', warning:'Extremely long return day. Consider stopping overnight at Rudraprayag or Rishikesh if exhausted. Night driving on mountain roads is risky.' },
  { day:'Day 7', route:'Return home', dist:'—', details:'Travel home from Haridwar via train, flight from Dehradun, or road. Allow full day — do not book a noon flight on Day 7 if you are driving back from mountains on Day 6 night.', warning:'Many pilgrims miss flights because they underestimate Day 6 return driving time. Book Day 7 evening flights only.' },
];


export default function SevenDaysBlog() {
  return (
    <>
      <Schema />
      <section style={{ background:'linear-gradient(145deg,var(--navy) 0%,#1A3E75 60%,var(--teal) 100%)', padding:'52px 20px 40px' }}>
        <div style={{ maxWidth:860, margin:'0 auto', textAlign:'center' }}>
          <span style={{ background:'rgba(232,146,10,0.18)', color:'#FFD166', fontSize:11, fontWeight:700, letterSpacing:'0.12em', textTransform:'uppercase', padding:'5px 16px', borderRadius:100, display:'inline-block', marginBottom:14 }}>Itinerary Guide · 2026</span>
          <h1 style={{ color:'#fff', fontFamily:'var(--font-display)', fontSize:'clamp(1.7rem,4vw,2.6rem)', fontWeight:700, letterSpacing:'-0.02em', marginBottom:14 }}>
            Char Dham Yatra in 7 Days — Is It Possible?
          </h1>
          <p style={{ color:'rgba(255,255,255,0.8)', fontSize:15, lineHeight:1.7, maxWidth:700, margin:'0 auto 20px' }}>
            Complete 7-day itinerary with honest warnings · What gets rushed · What gets skipped · When 7 days makes sense
          </p>
          {['⚠️ Not ideal for seniors','📍 1,500km+ driving','🏔️ Kedarnath trek included','✅ Possible for fit adults'].map(t => (
            <span key={t} style={{ background:'rgba(255,255,255,0.12)', color:'#fff', fontSize:12.5, fontWeight:600, padding:'6px 14px', borderRadius:100, border:'1px solid rgba(255,255,255,0.2)', display:'inline-block', margin:'4px' }}>{t}</span>
          ))}
        </div>
      </section>

      <nav style={{ background:'var(--bg)', borderBottom:'1px solid var(--border)', padding:'9px 20px' }}>
        <div style={{ maxWidth:'var(--container)', margin:'0 auto', fontSize:12, color:'var(--text-muted)', display:'flex', gap:6 }}>
          Home<span>›</span>
          Blog<span>›</span>
          <span>Char Dham Yatra in 7 Days</span>
        </div>
      </nav>

      <article className="blog-container" itemScope itemType="https://schema.org/Article">

        {/* Author byline — E-E-A-T signal */}
        <BlogAuthor variant="top" author="sumit" />
        <div style={{ fontSize:12, color:'var(--text-muted)', marginBottom:20, textAlign:'right' }}>🗓️ <strong>Last updated:</strong> May 21, 2026</div>

        {/* Verdict box */}
        <div style={{ background:'#FFF3CD', border:'2px solid #E8920A', borderRadius:14, padding:'18px 20px', marginBottom:28 }}>
          <div style={{ fontWeight:700, fontSize:15, color:'#7B3F00', marginBottom:8 }}>⚠️ The Honest Verdict Before You Read Further</div>
          <p style={{ fontSize:14.5, color:'#7B3F00', lineHeight:1.75, margin:0 }}>
            A 7-day Char Dham Yatra is <strong>physically possible for fit adults under 60</strong> but involves 200–250km of mountain driving daily, very limited darshan time, and virtually no rest. It is not recommended by Shiv Ganga Travels as a primary option. If you have only 7 days, we suggest Do Dham Yatra (Kedarnath + Badrinath) in 5N/6D instead — you get two of the most powerful dhams with adequate time at each.
          </p>
        </div>

        <h2 style={{ fontFamily:'var(--font-display)', fontSize:'1.45rem', fontWeight:700, color:'var(--navy)', marginBottom:14 }}>
          Why Most Pilgrims Need 10 Days (Not 7)
        </h2>
        <p style={{ fontSize:16, color:'#334155', lineHeight:1.9, marginBottom:16 }}>
          The Char Dham circuit from Haridwar covers approximately 1,500km of mountain roads. The four dhams span altitudes of 2,675m (Yamunotri) to 3,583m (Kedarnath). Between Gangotri and Guptkashi alone, you are driving 265km on narrow Himalayan roads — that is 7–8 hours. Add the 32km Kedarnath trek (round trip) and you have what is genuinely one of the most physically demanding pilgrimage circuits in the world.
        </p>
        <p style={{ fontSize:16, color:'#334155', lineHeight:1.9, marginBottom:24 }}>
          The 10-day minimum exists not because operators want to sell more nights — it exists because the human body at altitude needs time. Rushing creates altitude sickness, missed darshan at overcrowded temples, and the spiritual exhaustion of a yatra that felt like a race rather than a pilgrimage.
        </p>

        {/* Comparison table */}
        <h2 style={{ fontFamily:'var(--font-display)', fontSize:'1.45rem', fontWeight:700, color:'var(--navy)', marginBottom:14 }}>
          7 Days vs 10 Days vs 12 Days — What Changes
        </h2>
        <div style={{ overflowX:'auto', marginBottom:28 }}>
          <table style={{ width:'100%', borderCollapse:'collapse', fontSize:14 }}>
            <thead>
              <tr style={{ background:'var(--navy)' }}>
                {['Factor','7 Days (Rushed)','10 Days (Standard)','12 Days (Comfortable)'].map(h=>(
                  <th key={h} style={{ padding:'11px 14px', textAlign:'left', color:'#fff', fontWeight:700, fontSize:12.5 }}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {[
                ['Daily driving','200–260km/day','100–150km/day','80–120km/day'],
                ['Kedarnath approach','Trek mandatory (rushed)','Trek or helicopter','Relaxed pace + optional helicopter'],
                ['Darshan time per dham','30–60 min','2–3 hours','3–5 hours'],
                ['Rest stops','Zero','1–2 per day','2–3 per day'],
                ['Altitude sickness risk','High','Moderate','Low'],
                ['Senior-friendly','No','With modifications','Yes — recommended'],
                ['Cost difference','₹19,500/person','₹19,500/person','₹22,000/person (+₹2,500)'],
                ['Best for','Fit adults < 60, urgent','Most pilgrims','Families, 60+, first-timers'],
              ].map(([f,...vals],i)=>(
                <tr key={f} style={{ borderBottom:'1px solid var(--border)', background:i%2===0?'#fff':'var(--bg)' }}>
                  <td style={{ padding:'10px 14px', fontWeight:700, color:'var(--navy)', fontSize:13.5 }}>{f}</td>
                  <td style={{ padding:'10px 14px', color:'#DC2626', fontSize:13.5 }}>{vals[0]}</td>
                  <td style={{ padding:'10px 14px', color:'#15803D', fontWeight:600, fontSize:13.5 }}>{vals[1]}</td>
                  <td style={{ padding:'10px 14px', color:'#0B7B8B', fontSize:13.5 }}>{vals[2]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 style={{ fontFamily:'var(--font-display)', fontSize:'1.45rem', fontWeight:700, color:'var(--navy)', marginBottom:20 }}>
          The 7-Day Char Dham Yatra Itinerary — Day by Day
        </h2>
        <div style={{ display:'flex', flexDirection:'column', gap:14, marginBottom:32 }}>
          {DAY_ITINERARY.map((day,i) => (
            <div key={day.day} style={{ borderRadius:12, overflow:'hidden', border:'1px solid var(--border)' }}>
              <div style={{ background:'var(--navy)', padding:'12px 18px', display:'flex', justifyContent:'space-between', alignItems:'center', flexWrap:'wrap', gap:8 }}>
                <div>
                  <span style={{ color:'#FFD166', fontWeight:800, fontSize:16, fontFamily:'var(--font-display)' }}>{day.day}</span>
                  <span style={{ color:'#fff', fontSize:15, fontWeight:700, marginLeft:12 }}>{day.route}</span>
                </div>
                <span style={{ color:'rgba(255,255,255,0.6)', fontSize:12.5 }}>📍 {day.dist}</span>
              </div>
              <div style={{ padding:'14px 18px', background:'#fff' }}>
                <p style={{ fontSize:14.5, color:'#334155', lineHeight:1.8, marginBottom:10 }}>{day.details}</p>
                <div style={{ background:'#FFF3CD', borderRadius:8, padding:'10px 14px', display:'flex', gap:8, fontSize:13, color:'#7B3F00' }}>
                  <span style={{ flexShrink:0 }}>⚠️</span><span>{day.warning}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <h2 style={{ fontFamily:'var(--font-display)', fontSize:'1.45rem', fontWeight:700, color:'var(--navy)', marginBottom:14 }}>
          When 7 Days Actually Makes Sense
        </h2>
        {[
          ['You are a repeat pilgrim', 'If you have done Char Dham before and know the routes, the 7-day circuit is familiar rather than overwhelming. Experienced pilgrims can handle the pace.'],
          ['You are combining with a helicopter for Kedarnath', 'Flying Kedarnath one-way (Phata helipad, ₹7,000–9,000 via IRCTC) eliminates the 7-hour trek. This saves one full day and makes the 7-day plan significantly more manageable.'],
          ['Your group is all under 50 and physically active', 'For a group of young, fit pilgrims who are comfortable with long mountain drives, 7 days works. The experience will be intense but achievable.'],
          ['You are doing only 3 dhams (skip Gangotri)', 'A modified 7-day plan skipping Gangotri covers Yamunotri, Kedarnath, and Badrinath with much less driving. Gangotri is accessible by road so it can be done as a separate trip later.'],
        ].map(([title, desc]) => (
          <div key={title} style={{ display:'flex', gap:14, padding:'14px 0', borderBottom:'1px solid var(--border)' }}>
            <span style={{ color:'var(--teal)', fontWeight:800, fontSize:16, flexShrink:0, marginTop:2 }}>✓</span>
            <div>
              <div style={{ fontWeight:700, fontSize:14.5, color:'var(--navy)', marginBottom:4 }}>{title}</div>
              <div style={{ fontSize:14.5, color:'#475569', lineHeight:1.75 }}>{desc}</div>
            </div>

        {/* ── Mid-article conversion CTA ── */}
        <BlogCTA variant="inline" intent="info" />
          </div>
        ))}

        <div style={{ background:'var(--navy-light)', borderRadius:14, padding:'18px 20px', margin:'28px 0' }}>
          <div style={{ fontWeight:700, fontSize:14, color:'var(--navy)', marginBottom:8 }}>Our Recommendation</div>
          <p style={{ fontSize:14.5, color:'#334155', lineHeight:1.75, margin:0 }}>
            For most pilgrims with exactly 7 days, the <strong>Do Dham Yatra (Kedarnath + Badrinath) in 5N/6D</strong> is far better than a rushed Char Dham. You spend adequate time at Lord Shiva’s most powerful Jyotirlinga and Lord Vishnu’s primary abode. Many pilgrims who do Do Dham come back for Gangotri and Yamunotri the following year — and that second yatra feels even more special because it is anticipated. See our Do Dham Yatra packages from ₹10,999.
          </p>
        </div>

        {/* FAQ */}
        <h2 style={{ fontFamily:'var(--font-display)', fontSize:'1.4rem', fontWeight:700, color:'var(--navy)', marginBottom:14 }}>Frequently Asked Questions</h2>
        {[
          ['Can I do Char Dham Yatra in 7 days from Delhi?', 'You need to add 1 day for Delhi to Haridwar travel (train or road, 5–6 hours). So a 7-day Char Dham circuit from Delhi actually becomes an 8-day trip from home. If you only have 7 days total from Delhi, Do Dham (Kedarnath + Badrinath) in 5N/6D from Haridwar is the right option.'],
          ['Is the 7-day itinerary suitable for people with BP or heart conditions?', 'Absolutely not. Pilgrims with high blood pressure, heart conditions, or diabetes should not attempt a 7-day Char Dham Yatra under any circumstances. The rapid altitude gain combined with exhaustion from long drives significantly increases cardiac risk. The minimum recommended package for pilgrims with health conditions is the 12N/13D Senior Citizen package with helicopter at Kedarnath.'],
          ['What if I fall sick during the 7-day itinerary?', 'A buffer day is the most important thing you have no room for in a 7-day plan. If you develop altitude sickness at Kedarnath, you will likely miss Badrinath entirely. In a 10-day plan, you have a rest day that absorbs this. This is the most practical reason to add at least 2–3 days.'],
        ].map(([q,a],i)=>(
          <details key={i} style={{ background:'#fff', borderRadius:10, border:'1px solid var(--border)', overflow:'hidden', marginBottom:10 }}>
            <summary style={{ padding:'14px 16px', cursor:'pointer', listStyle:'none', fontWeight:600, fontSize:14.5, color:'var(--navy)', display:'flex', justifyContent:'space-between', alignItems:'center' }}>
              {q}<span style={{ flexShrink:0, fontSize:18 }}>＋</span>
            </summary>
            <div style={{ padding:'12px 16px', fontSize:14.5, color:'#334155', lineHeight:1.8, borderTop:'1px solid var(--border)' }}>{a}</div>
          </details>
        ))}

        <div style={{ background:'var(--navy)', borderRadius:16, padding:'28px 24px', textAlign:'center', marginTop:36 }}>
          <h3 style={{ color:'#fff', fontFamily:'var(--font-display)', fontSize:'1.3rem', marginBottom:10 }}>Book the Right Duration for Your Yatra</h3>
          <p style={{ color:'rgba(255,255,255,0.7)', fontSize:14, marginBottom:18 }}>We will suggest the ideal itinerary based on your group, age, and available days. No pressure — honest advice always.</p>
          <div style={{ display:'flex', gap:10, justifyContent:'center', flexWrap:'wrap' }}>
            <a href={`https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent('Namaste! I have limited days for Char Dham Yatra 2026. Please suggest the best itinerary.')}`} target="_blank" rel="nofollow noopener noreferrer"
              style={{ background:'#25D366', color:'#fff', padding:'12px 24px', borderRadius:9, fontWeight:700, fontSize:13.5, textDecoration:'none' }}>💬 WhatsApp</a>
            Char Dham Packages →
            Do Dham (5N/6D) →
          </div>
        </div>

        <div style={{ borderTop:'1px solid var(--border)', paddingTop:24, marginTop:32 }}>
          <div style={{ fontWeight:700, fontSize:13.5, color:'var(--navy)', marginBottom:12 }}>Related Guides</div>
          <div style={{ display:'flex', gap:10, flexWrap:'wrap' }}>
            {[['Char Dham Cost 2026','/blog/char-dham-yatra-cost'],['Do Dham vs Char Dham','/blog/char-dham-vs-do-dham'],['Senior Citizen Guide','/blog/senior-citizen-char-dham'],['Registration Guide','/blog/char-dham-yatra-registration'],['Kedarnath Trek Guide','/blog/kedarnath-trek-guide']].map(([l,h])=>(
              <Link key={h} href={h} style={{ background:'var(--bg)', border:'1px solid var(--border)', color:'var(--navy)', padding:'7px 14px', borderRadius:8, fontSize:12.5, fontWeight:600, textDecoration:'none' }}>{l} →</Link>
            ))}
          </div>
        </div>
      
        {/* ── End-of-article booking CTA ── */}
        <BlogCTA variant="footer" intent="info" />
</article>
    </>
  );
}
