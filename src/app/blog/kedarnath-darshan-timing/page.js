import Link from 'next/link';
import { SITE } from '@/data/packages';

export const metadata = {
  title: 'Kedarnath Darshan Timings 2026 — Hours & Puja Guide',
  description: 'Kedarnath temple darshan timings 2026. Morning session 6 AM–3 PM, evening 5–9 PM. Mahabhishek at 4 AM, Shringaar Aarti 7:30 PM. VIP darshan booking',
  keywords: ['kedarnath darshan timings 2026','kedarnath temple opening time','kedarnath darshan time','kedarnath mandir timing','kedarnath aarti time','kedarnath puja timing','kedarnath temple closing time','kedarnath VIP darshan booking'],
  alternates: { canonical: `${SITE.baseUrl}/blog/kedarnath-darshan-timing` },
  openGraph: { title: 'Kedarnath Darshan Timings 2026 — Complete Schedule', description: 'All Kedarnath temple timings 2026 — darshan hours, puja schedule, aarti times, VIP booking.', url: `${SITE.baseUrl}/blog/kedarnath-darshan-timing`, type: 'article' },
};

function Schema() {
  const faq = {
    '@context': 'https://schema.org', '@type': 'FAQPage',
    mainEntity: [
      { '@type': 'Question', name: 'What time does Kedarnath temple open for darshan in 2026?',
        acceptedAnswer: { '@type': 'Answer', text: 'Kedarnath temple opens for general darshan at 6:00 AM daily in 2026. The Mahabhishek puja begins at 4:00 AM (advance booking required, ₹3,100). General darshan runs from 6 AM to 3 PM, then resumes at 5 PM until 9 PM. The temple closes at 9:00 PM.' }},
      { '@type': 'Question', name: 'What is the Kedarnath Mahabhishek timing and cost?',
        acceptedAnswer: { '@type': 'Answer', text: 'Kedarnath Mahabhishek is performed at 4:00 AM daily. It is a special private puja where the Shivalinga is bathed with milk, honey, ghee, and sacred herbs while Vedic mantras are recited. The cost is ₹3,100 per person. Advance booking is required through the Kedarnath temple committee or through your tour operator. Shiv Ganga Travels books Mahabhishek for all our Kedarnath packages.' }},
      { '@type': 'Question', name: 'What is the best time to visit Kedarnath for darshan?',
        acceptedAnswer: { '@type': 'Answer', text: 'The best time for Kedarnath darshan is 5:00–8:00 AM. The temple queue is shortest at this time, the mountain light is golden, and the atmosphere is most peaceful. By 10 AM–12 PM, queues can stretch 1–3 hours. Afternoon darshan (5–7 PM) is second-best — the evening aarti at 7:30 PM is particularly moving. Avoid 10 AM–3 PM peak hours if possible.' }},
      { '@type': 'Question', name: 'What is the Kedarnath temple opening date 2026?',
        acceptedAnswer: { '@type': 'Answer', text: 'Kedarnath temple opened on April 22, 2026 at 8:00 AM with the Mahabhishek ceremony. The 2026 season closes on November 11, 2026 (Bhai Dooj). The opening date is announced on Maha Shivratri each year by the temple priests at Omkareshwar Temple, Ukhimath.' }},
    ],
  };
  const event = {
    '@context': 'https://schema.org', '@type': 'TouristAttraction',
    name: 'Kedarnath Temple',
    address: { '@type': 'PostalAddress', addressLocality: 'Kedarnath', addressRegion: 'Uttarakhand', addressCountry: 'IN' },
    geo: { '@type': 'GeoCoordinates', latitude: 30.7346, longitude: 79.0669 },
    openingHoursSpecification: [
      { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'], opens: '06:00', closes: '21:00' },
    ],
    description: 'Kedarnath Temple — one of the 12 Jyotirlingas, dedicated to Lord Shiva. Located at 3,583m in Rudraprayag district, Uttarakhand.',
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faq) }}/>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(event) }}/>
    </>
  );
}

const TIMINGS = [
  { time:'4:00 AM', name:'Mahabhishek', type:'special', desc:'Private puja — Shivalinga bathed with milk, honey, ghee, water. Vedic mantras by temple priests. Most spiritually significant puja. Advance booking required.', price:'₹3,100 per person', book:true },
  { time:'4:30 AM', name:'Abhishek Puja', type:'special', desc:'Group Abhishek puja. Open to pilgrims who pre-register. Temple atmosphere is mystical before sunrise.', price:'₹1,500 per person', book:true },
  { time:'6:00 AM', name:'General Darshan Opens', type:'darshan', desc:'General darshan begins. Early morning is the best time — queue is short, atmosphere serene, temple freshly adorned.', price:'Free', book:false },
  { time:'7:00 AM', name:'Balabhog (Morning Offering)', type:'aarti', desc:'Morning food offering to Lord Kedarnath. Brief aarti with conch shells and bells. Pilgrims present receive prasad.', price:'Free', book:false },
  { time:'10:00 AM', name:'Peak Hours Begin', type:'warning', desc:'Queue longest between 10 AM and 2 PM during peak season (May–June). Wait time can be 1–3 hours. Consider arriving at 6 AM to avoid this.', price:'—', book:false },
  { time:'12:00 PM', name:'Madhyan Darshan', type:'darshan', desc:'Brief midday offering. Regular general darshan continues. For special puja requests, approach the seva counter near the temple entrance.', price:'—', book:false },
  { time:'3:00 PM', name:'Temple Closes (Afternoon)', type:'close', desc:'Temple closes for afternoon rest. All pilgrims exit the sanctum. This closure lasts from 3 PM to 5 PM.', price:'—', book:false },
  { time:'5:00 PM', name:'Evening Darshan Opens', type:'darshan', desc:'Temple reopens. Evening light on the mountains is spectacular. The pace is calmer than morning peak hours.', price:'Free', book:false },
  { time:'7:30 PM', name:'Shringaar Aarti', type:'aarti', desc:'The most visually magnificent aarti. Lord Kedarnath is adorned with flowers, dhatura, bhasma. Multi-diya aarti with temple musicians. Highly recommended for all pilgrims.', price:'Free', book:false },
  { time:'8:30 PM', name:'Shayan Aarti (Closing)', type:'aarti', desc:'Closing aarti. Lord Kedarnath is prepared for the night with special rituals. The last aarti of the day.', price:'Free', book:false },
  { time:'9:00 PM', name:'Temple Closes', type:'close', desc:'Temple closes for the night. All pilgrims must exit. The temple complex remains lit with oil lamps overnight.', price:'—', book:false },
];

const TYPE_STYLE = {
  special: { bg:'#FEF3E2', border:'#E8920A', color:'#7B3F00' },
  darshan: { bg:'#F0FDF4', border:'#86EFAC', color:'#15803D' },
  aarti:   { bg:'#EFF6FF', border:'#BFDBFE', color:'#1E40AF' },
  warning: { bg:'#FFF1F2', border:'#FECDD3', color:'#9F1239' },
  close:   { bg:'#F8FAFC', border:'#CBD5E1', color:'#475569' },
};

export default function KedarnathTimings() {
  return (
    <>
      <Schema/>
      <section style={{ background:'linear-gradient(145deg,var(--navy) 0%,#1A3E75 60%,var(--teal) 100%)', padding:'52px 20px 40px' }}>
        <div style={{ maxWidth:860, margin:'0 auto', textAlign:'center' }}>
          <span style={{ background:'rgba(232,146,10,0.18)', color:'#FFD166', fontSize:11, fontWeight:700, letterSpacing:'0.12em', textTransform:'uppercase', padding:'5px 16px', borderRadius:100, display:'inline-block', marginBottom:14 }}>Temple Guide · 2026 Season</span>
          <h1 style={{ color:'#fff', fontFamily:'var(--font-display)', fontSize:'clamp(1.7rem,4vw,2.6rem)', fontWeight:700, letterSpacing:'-0.02em', marginBottom:14 }}>
            Kedarnath Darshan Timings 2026
          </h1>
          <p style={{ color:'rgba(255,255,255,0.8)', fontSize:15, lineHeight:1.7, maxWidth:700, margin:'0 auto 20px' }}>
            Complete schedule — General darshan, Mahabhishek, Shringaar Aarti, Shayan Aarti · Puja prices · Best time to visit · VIP darshan booking
          </p>
          {['🕕 Opens 6:00 AM','🌙 Closes 9:00 PM','🔔 Mahabhishek 4:00 AM','⭐ Best time: 5–8 AM'].map(t => (
            <span key={t} style={{ background:'rgba(255,255,255,0.12)', color:'#fff', fontSize:12.5, fontWeight:600, padding:'6px 14px', borderRadius:100, border:'1px solid rgba(255,255,255,0.2)', display:'inline-block', margin:'4px' }}>{t}</span>
          ))}
        </div>
      </section>

      <nav style={{ background:'var(--bg)', borderBottom:'1px solid var(--border)', padding:'9px 20px' }}>
        <div style={{ maxWidth:'var(--container)', margin:'0 auto', fontSize:12, color:'var(--text-muted)', display:'flex', gap:6 }}>
          <Link href="/" style={{ color:'var(--navy)', textDecoration:'none' }}>Home</Link><span>›</span>
          <Link href="/blog" style={{ color:'var(--navy)', textDecoration:'none' }}>Blog</Link><span>›</span>
          <span>Kedarnath Darshan Timings 2026</span>
        </div>
      </nav>

      <article className="blog-container" itemScope itemType="https://schema.org/Article">
        <div style={{ fontSize:12, color:'var(--text-muted)', marginBottom:20, textAlign:'right' }}>🗓️ <strong>Last updated:</strong> May 4, 2026 · Verified for current season</div>

        {/* Quick summary box */}
        <div style={{ background:'var(--navy)', borderRadius:14, padding:'18px 20px', marginBottom:28, display:'grid', gridTemplateColumns:'repeat(auto-fill,minmax(140px,1fr))', gap:12 }}>
          {[['4:00 AM','Mahabhishek'],['6:00 AM','Darshan Opens'],['3:00 PM','Afternoon Close'],['5:00 PM','Evening Opens'],['7:30 PM','Shringaar Aarti'],['9:00 PM','Temple Closes']].map(([t,l])=>(
            <div key={l} style={{ textAlign:'center' }}>
              <div style={{ color:'#FFD166', fontWeight:800, fontSize:16, fontFamily:'var(--font-display)' }}>{t}</div>
              <div style={{ color:'rgba(255,255,255,0.7)', fontSize:11.5, marginTop:2 }}>{l}</div>
            </div>
          ))}
        </div>

        <h2 style={{ fontFamily:'var(--font-display)', fontSize:'1.45rem', fontWeight:700, color:'var(--navy)', marginBottom:14 }}>
          Complete Kedarnath Temple Schedule 2026
        </h2>
        <p style={{ fontSize:16, color:'#334155', lineHeight:1.9, marginBottom:20 }}>
          Kedarnath temple follows a strict daily schedule maintained by the Shri Kedarnath temple committee. The timings remain consistent throughout the season (April 22 – November 11, 2026) with minor adjustments for special festivals. Understanding this schedule is essential for planning your darshan — arriving during closed hours or peak queue times means a 2–3 hour wait or missing the aarti.
        </p>

        <div style={{ display:'flex', flexDirection:'column', gap:10, marginBottom:28 }}>
          {TIMINGS.map(t => {
            const style = TYPE_STYLE[t.type];
            return (
              <div key={t.time} style={{ display:'flex', gap:0, borderRadius:10, overflow:'hidden', border:`1.5px solid ${style.border}` }}>
                <div style={{ background:style.bg, minWidth:90, display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center', padding:'12px 8px', flexShrink:0 }}>
                  <span style={{ fontWeight:800, fontSize:15, color:style.color, fontFamily:'var(--font-display)' }}>{t.time}</span>
                </div>
                <div style={{ padding:'12px 16px', flex:1, background:'#fff' }}>
                  <div style={{ display:'flex', justifyContent:'space-between', alignItems:'flex-start', gap:8, marginBottom:5 }}>
                    <div style={{ fontWeight:700, fontSize:14.5, color:'var(--navy)' }}>{t.name}</div>
                    <div style={{ display:'flex', gap:6, flexShrink:0 }}>
                      {t.price !== '—' && <span style={{ background:style.bg, color:style.color, fontSize:11, fontWeight:700, padding:'2px 10px', borderRadius:100 }}>{t.price}</span>}
                      {t.book && <span style={{ background:'#0F2B5B', color:'#fff', fontSize:10.5, fontWeight:700, padding:'2px 10px', borderRadius:100 }}>Advance booking</span>}
                    </div>
                  </div>
                  <p style={{ fontSize:13.5, color:'#475569', lineHeight:1.7, margin:0 }}>{t.desc}</p>
                </div>
              </div>
            );
          })}
        </div>

        <h2 style={{ fontFamily:'var(--font-display)', fontSize:'1.45rem', fontWeight:700, color:'var(--navy)', marginBottom:14 }}>
          Kedarnath Puja Booking — Prices & Types
        </h2>
        <div style={{ overflowX:'auto', marginBottom:28 }}>
          <table style={{ width:'100%', borderCollapse:'collapse', fontSize:14 }}>
            <thead>
              <tr style={{ background:'var(--navy)' }}>
                {['Puja Name','Time','Cost','Duration','How to Book'].map(h=>(
                  <th key={h} style={{ padding:'11px 14px', textAlign:'left', color:'#fff', fontWeight:700, fontSize:12.5 }}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {[
                ['Mahabhishek','4:00 AM','₹3,100','45–60 min','Temple counter / Shiv Ganga Travels'],
                ['Abhishek','4:30 AM','₹1,500','30 min','Temple counter / operator'],
                ['Rudra Abhishek','6:00–8:00 AM','₹2,500','30 min','Temple counter on arrival'],
                ['Laghu Rudra','6:00 AM–2:00 PM','₹5,000','1 hour','Advance booking required'],
                ['Maha Rudra','By appointment','₹15,000+','3 hours','Advance booking, limited slots'],
                ['General Darshan','6 AM–3 PM, 5–9 PM','Free','5–45 min (queue dependent)','No booking needed'],
              ].map(([name,time,cost,dur,how],i)=>(
                <tr key={name} style={{ borderBottom:'1px solid var(--border)', background:i%2===0?'#fff':'var(--bg)' }}>
                  <td style={{ padding:'10px 14px', fontWeight:700, color:'var(--navy)', fontSize:13.5 }}>{name}</td>
                  <td style={{ padding:'10px 14px', color:'#334155', fontSize:13.5 }}>{time}</td>
                  <td style={{ padding:'10px 14px', fontWeight:700, color:'var(--navy)', fontSize:14 }}>{cost}</td>
                  <td style={{ padding:'10px 14px', color:'#475569', fontSize:13 }}>{dur}</td>
                  <td style={{ padding:'10px 14px', color:'var(--teal)', fontSize:13 }}>{how}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 style={{ fontFamily:'var(--font-display)', fontSize:'1.45rem', fontWeight:700, color:'var(--navy)', marginBottom:14 }}>
          What to Expect During the Shringaar Aarti (7:30 PM)
        </h2>
        <p style={{ fontSize:16, color:'#334155', lineHeight:1.9, marginBottom:16 }}>
          The Shringaar Aarti is the most visually striking ritual at Kedarnath. The Shivalinga is adorned with flowers — particularly dhatura blossoms sacred to Lord Shiva — along with fresh bhasma (sacred ash), sandalwood paste, and precious stones. The aarti is performed by temple priests with large multi-wick diyas while conch shells, bells, and devotional instruments create an atmosphere unlike anything in modern India.
        </p>
        <p style={{ fontSize:16, color:'#334155', lineHeight:1.9, marginBottom:20 }}>
          Arriving at the temple by 7:00 PM secures a good viewing position. The aarti lasts approximately 20–25 minutes. The smoke from the diyas and incense in the enclosed stone temple creates a sacred haze. Many pilgrims describe the Shringaar Aarti as the most moving 25 minutes of their entire yatra.
        </p>

        <div style={{ background:'var(--navy-light)', borderRadius:12, padding:'16px 20px', marginBottom:24 }}>
          <div style={{ fontWeight:700, fontSize:14, color:'var(--navy)', marginBottom:8 }}>📅 2026 Season Dates</div>
          <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(min(100%,280px),1fr))', gap:12 }}>
            {[['Opening Date','April 22, 2026 at 8:00 AM'],['Closing Date','November 11, 2026 (Bhai Dooj)'],['Best Season','May 10 – June 20 & Sep 15 – Oct 25'],['Daily Pilgrim Limit','15,000–17,000 per day']].map(([k,v])=>(
              <div key={k} style={{ display:'flex', gap:8 }}>
                <span style={{ color:'var(--text-muted)', fontSize:13, minWidth:130, flexShrink:0 }}>{k}:</span>
                <span style={{ fontWeight:700, fontSize:13.5, color:'var(--navy)' }}>{v}</span>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ */}
        <h2 style={{ fontFamily:'var(--font-display)', fontSize:'1.4rem', fontWeight:700, color:'var(--navy)', marginBottom:14 }}>Frequently Asked Questions</h2>
        {[
          ['Can I book Kedarnath Mahabhishek online?', 'Yes. Mahabhishek you can book through the Shri Kedarnath temple website or through your tour operator. Shiv Ganga Travels books Mahabhishek puja for all our Kedarnath packages as standard. The puja is at 4:00 AM, so your vehicle must reach Gaurikund by 2 AM at the latest — which means leaving Guptkashi at 1 AM.'],
          ['Is there a separate darshan line for senior citizens?', 'Yes. A dedicated Divyangjan (disabled) and Senior Citizens queue is maintained at Kedarnath temple. Our guides facilitate access to this queue for pilgrims aged 70+ or those with mobility limitations. Ask your guide to approach the queue management staff at the temple entrance.'],
          ['Can I see the temple open during the Kedarnath trek?', 'No. The Kedarnath trek from Gaurikund (16km) takes 5–7 hours ascending. If you leave Gaurikund at 5 AM, you reach Kedarnath by 11 AM–12 PM — right at the end of the morning session. Timing your trek start is critical. Many pilgrims who leave at 7–8 AM arrive during the 3 PM afternoon closure and miss morning darshan entirely.'],
          ['What is the phone ban rule at Kedarnath temple?', 'Mobile phones are banned inside the inner sanctum (garbhagriha) of Kedarnath temple in 2026. Phone deposit counters are set up at the temple entrance. Photography outside the temple complex remains permitted. This rule is enforced by temple security and Uttarakhand Police.'],
        ].map(([q,a],i)=>(
          <details key={i} style={{ background:'#fff', borderRadius:10, border:'1px solid var(--border)', overflow:'hidden', marginBottom:10 }}>
            <summary style={{ padding:'14px 16px', cursor:'pointer', listStyle:'none', fontWeight:600, fontSize:14.5, color:'var(--navy)', display:'flex', justifyContent:'space-between', alignItems:'center' }}>
              {q}<span style={{ flexShrink:0, fontSize:18 }}>＋</span>
            </summary>
            <div style={{ padding:'12px 16px', fontSize:14.5, color:'#334155', lineHeight:1.8, borderTop:'1px solid var(--border)' }}>{a}</div>
          </details>
        ))}

        <div style={{ background:'var(--navy)', borderRadius:16, padding:'28px 24px', textAlign:'center', marginTop:36 }}>
          <h3 style={{ color:'#fff', fontFamily:'var(--font-display)', fontSize:'1.3rem', marginBottom:10 }}>Book Kedarnath Yatra 2026 — Including Mahabhishek Booking</h3>
          <p style={{ color:'rgba(255,255,255,0.7)', fontSize:14, marginBottom:18 }}>Shiv Ganga Travels books Mahabhishek puja, manages temple queue, and arranges VIP darshan. Haridwar-based direct operator. {SITE.phone}</p>
          <div style={{ display:'flex', gap:10, justifyContent:'center', flexWrap:'wrap' }}>
            <a href={`https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent('Namaste! I want to book Kedarnath Yatra 2026 with Mahabhishek puja. Please share details.')}`} target="_blank" rel="nofollow noopener noreferrer"
              style={{ background:'#25D366', color:'#fff', padding:'12px 24px', borderRadius:9, fontWeight:700, fontSize:13.5, textDecoration:'none' }}>💬 WhatsApp</a>
            <Link href="/kedarnath-yatra" style={{ background:'rgba(255,255,255,0.12)', color:'#fff', padding:'12px 24px', borderRadius:9, fontWeight:700, fontSize:13.5, textDecoration:'none', border:'1px solid rgba(255,255,255,0.2)' }}>Kedarnath Packages →</Link>
          </div>
        </div>

        <div style={{ borderTop:'1px solid var(--border)', paddingTop:24, marginTop:32 }}>
          <div style={{ fontWeight:700, fontSize:13.5, color:'var(--navy)', marginBottom:12 }}>Related Guides</div>
          <div style={{ display:'flex', gap:10, flexWrap:'wrap' }}>
            {[['Kedarnath Trek Guide','/blog/kedarnath-trek-guide'],['Kedarnath Helicopter','/blog/kedarnath-helicopter-booking'],['How to Reach Haridwar','/how-to-reach-haridwar'],['Char Dham Registration','/blog/char-dham-yatra-registration'],['Senior Citizen Guide','/blog/senior-citizen-char-dham']].map(([l,h])=>(
              <Link key={h} href={h} style={{ background:'var(--bg)', border:'1px solid var(--border)', color:'var(--navy)', padding:'7px 14px', borderRadius:8, fontSize:12.5, fontWeight:600, textDecoration:'none' }}>{l} →</Link>
            ))}
          </div>
        </div>
      </article>
    </>
  );
}
