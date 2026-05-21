import Link from 'next/link';
import { SITE } from '@/data/packages';

export const metadata = {
  title: 'Char Dham Yatra Opening Dates 2026 – Yamunotri, Gangotri, Kedarnath & Badrinath Dates',
  description: 'Official Char Dham Yatra 2026 opening dates: Yamunotri & Gangotri April 19, Kedarnath April 22 at 8 AM, Badrinath April 23 at 6:15 AM. Closing dates, puja timings, and registration info.',
  keywords: ['char dham yatra opening dates 2026', 'kedarnath opening date 2026', 'badrinath opening date 2026', 'gangotri opening date 2026', 'yamunotri opening date 2026', 'char dham 2026 start date', 'char dham season 2026 dates'],
  alternates: { canonical: `${SITE.baseUrl}/blog/char-dham-yatra-opening-dates-2026` },
  openGraph: { title: 'Char Dham Yatra Opening Dates 2026 – Yamunotri, Gangotri, Kedarnath & Badrinath Dates', description: 'Official opening and closing dates for all 4 Char Dham shrines in 2026 with booking guide.', url: `${SITE.baseUrl}/blog/char-dham-yatra-opening-dates-2026`, type: 'article' },
    images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: 'Char Dham Yatra Opening Dates 2026 — All 4 Dhams | Shiv Ganga Travels' }],
};

function Schema() {
  const faq = {
    '@context': 'https://schema.org', '@type': 'FAQPage',
    mainEntity: [
      { '@type': 'Question', name: 'When does Char Dham Yatra 2026 start?',
        acceptedAnswer: { '@type': 'Answer', text: 'Char Dham Yatra 2026 starts on April 19, 2026, with the opening of Yamunotri and Gangotri temples on Akshaya Tritiya. Kedarnath opens on April 22 at 8:00 AM and Badrinath opens on April 23 at 6:15 AM.' }},
      { '@type': 'Question', name: 'When does Kedarnath close in 2026?',
        acceptedAnswer: { '@type': 'Answer', text: 'Kedarnath temple closes on November 11, 2026 (Bhai Dooj). The closing ceremony involves the Panchamukhi idol being carried to Omkareshwar Temple, Ukhimath, for the winter months. The exact closing time is announced by temple priests.' }},
      { '@type': 'Question', name: 'When does Badrinath close in 2026?',
        acceptedAnswer: { '@type': 'Answer', text: 'Badrinath temple closes on November 13, 2026. Badrinath has the longest season of all four dhams — typically remaining open until mid-November.' }},
      { '@type': 'Question', name: 'What is the best month for Char Dham Yatra 2026?',
        acceptedAnswer: { '@type': 'Answer', text: 'May and September–October are the best months for Char Dham Yatra 2026. May offers clear skies and blooming rhododendrons. September–October has post-monsoon crystal clarity with fewer crowds. Avoid July–August (monsoon, landslide risk). The very start of season (April 19–30) is cold but uncrowded.' }},
    ],
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faq) }}/>;
}


// Style constants used in closing dates section
const h2 = { fontFamily:'var(--font-display)', fontSize:'clamp(1.2rem,2.8vw,1.5rem)', fontWeight:700, color:'var(--navy)', marginBottom:12, marginTop:32 };
const p  = { fontSize:15.5, color:'#334155', lineHeight:1.9, marginBottom:16 };

const DHAMS = [
  { name:'Yamunotri', deity:'Goddess Yamuna', altitude:'3,291m', opens:'April 19, 2026', openTime:'7:30 AM (Akshaya Tritiya)', closes:'November 7, 2026 (Bhai Dooj – 1)', announcement:'Announced on Basant Panchami by temple priests at Kharsali village', icon:'🏔️',
    about:'Yamunotri is the westernmost and first shrine in the Char Dham circuit. Motor road ends at Janki Chatti — a 6km trek leads to the temple. The Surya Kund hot spring (90°C) at the temple is used to cook rice as prasad.',
    access:'Janki Chatti → 6km trek or pony (₹1,200 one way). Motor road from Haridwar: 175km, 5–6 hours.',
    bestTime:'May–June (flowers, clear trails), October (post-monsoon clarity)', crowd:'Low in April–early May, high May 10–June 20, very low in October' },
  { name:'Gangotri', deity:'Goddess Ganga', altitude:'3,415m', opens:'April 19, 2026', openTime:'8:00 AM (Akshaya Tritiya)', closes:'November 7, 2026 (Bhai Dooj – 1)', announcement:'Announced on Basant Panchami by Gangotri temple committee, Uttarkashi', icon:'🌊',
    about:'Gangotri is unique among the four dhams — motor road reaches all the way to the temple. No trekking required. The Bhagirathi river flows directly past the temple. Gaumukh glacier (20km trek) is an optional extension.',
    access:'Motor road from Haridwar: 265km, 7–8 hours via Uttarkashi. No trek required.',
    bestTime:'May–June, September–October. Avoid July–August (NH108 rockfall risk)', crowd:'Moderate throughout season — lower than Kedarnath/Badrinath' },
  { name:'Kedarnath', deity:'Lord Shiva (Jyotirlinga)', altitude:'3,583m', opens:'April 22, 2026', openTime:'8:00 AM (official Mahabhishek ceremony)', closes:'November 11, 2026 (Bhai Dooj)', announcement:'Announced on Maha Shivratri by Kedarnath temple priests at Omkareshwar Temple, Ukhimath', icon:'⛩️',
    about:'Kedarnath is the highest, most challenging, and most revered of the four dhams. One of the 12 Jyotirlingas. Survived the 2013 floods while most of the town was destroyed. The 16km trek from Gaurikund is the most iconic pilgrim route in India.',
    access:'Gaurikund → 16km trek (5–7 hrs) or pony (₹3,000–5,000 one way) or helicopter from Phata/Sersi helipad (₹7,000–9,000 one way via IRCTC)',
    bestTime:'May (post-snowmelt), September (clearest skies)', crowd:'Highest of all 4 dhams — arrives at daily limit (15,000–17,000) on peak May days' },
  { name:'Badrinath', deity:'Lord Vishnu', altitude:'3,133m', opens:'April 23, 2026', openTime:'6:15 AM', closes:'November 13, 2026 (longest season)', announcement:'Announced on Basant Panchami by Raj Purohit at Joshimath', icon:'🕌',
    about:'Badrinath is the final dham in the clockwise circuit. Motor road reaches the temple directly at 3,133m — the only Char Dham accessible entirely by vehicle. The Tapt Kund hot spring (55°C) just below the temple is used for the traditional pre-darshan bath.',
    access:'Motor road from Haridwar: 320km, 8–9 hours via Joshimath. No trek required.',
    bestTime:'May–June, September–October', crowd:'Second-highest after Kedarnath — daily limit 20,000 pilgrims' },
];

export default function OpeningDates() {
  return (
    <>
      <Schema/>
      <section style={{ background:'linear-gradient(145deg,var(--navy) 0%,#1A3E75 60%,var(--teal) 100%)', padding:'52px 20px 40px' }}>
        <div style={{ maxWidth:860, margin:'0 auto', textAlign:'center' }}>
          <span style={{ background:'rgba(21,128,61,0.25)', color:'#86EFAC', fontSize:11, fontWeight:700, letterSpacing:'0.12em', textTransform:'uppercase', padding:'5px 16px', borderRadius:100, display:'inline-block', marginBottom:10 }}>🟢 Season Open — All 4 Dhams Active</span>
          <br/>
          <span style={{ background:'rgba(232,146,10,0.18)', color:'#FFD166', fontSize:11, fontWeight:700, letterSpacing:'0.12em', textTransform:'uppercase', padding:'5px 16px', borderRadius:100, display:'inline-block', marginBottom:14 }}>Official Dates · 2026 Season</span>
          <h1 style={{ color:'#fff', fontFamily:'var(--font-display)', fontSize:'clamp(1.7rem,4vw,2.6rem)', fontWeight:700, letterSpacing:'-0.02em', marginBottom:14 }}>
            Char Dham Yatra Opening Dates 2026
          </h1>
          <p style={{ color:'rgba(255,255,255,0.8)', fontSize:15, lineHeight:1.7, maxWidth:700, margin:'0 auto 20px' }}>
            Official opening and closing dates for all 4 dhams — Yamunotri, Gangotri, Kedarnath, Badrinath — with best season guide and booking timeline
          </p>
        </div>
      </section>

      <nav style={{ background:'var(--bg)', borderBottom:'1px solid var(--border)', padding:'9px 20px' }}>
        <div style={{ maxWidth:'var(--container)', margin:'0 auto', fontSize:12, color:'var(--text-muted)', display:'flex', gap:6 }}>
          <Link href="/" style={{ color:'var(--navy)', textDecoration:'none' }}>Home</Link><span>›</span>
          <Link href="/blog" style={{ color:'var(--navy)', textDecoration:'none' }}>Blog</Link><span>›</span>
          <span>Char Dham Opening Dates 2026</span>
        </div>
      </nav>

      <article className="blog-container" itemScope itemType="https://schema.org/Article">
        <div style={{ fontSize:12, color:'var(--text-muted)', marginBottom:20, textAlign:'right' }}>🗓️ <strong>Last updated:</strong> May 21, 2026 · Officially verified</div>

        {/* Quick dates card */}
        <div style={{ background:'var(--navy)', borderRadius:14, padding:'20px', marginBottom:28 }}>
          <div style={{ fontWeight:700, fontSize:14, color:'#FFD166', marginBottom:14, textAlign:'center' }}>2026 Official Dates at a Glance</div>
          <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fill,minmax(180px,1fr))', gap:10 }}>
            {[['Yamunotri Opens','Apr 19, 2026','Apr 19 opens'],['Gangotri Opens','Apr 19, 2026','Same as Yamunotri'],['Kedarnath Opens','Apr 22, 2026','8:00 AM'],['Badrinath Opens','Apr 23, 2026','6:15 AM'],['Kedarnath Closes','Nov 11, 2026','Bhai Dooj'],['Badrinath Closes','Nov 13, 2026','Last to close']].map(([l,d,n])=>(
              <div key={l} style={{ background:'rgba(255,255,255,0.08)', borderRadius:10, padding:'12px 14px', border:'1px solid rgba(255,255,255,0.12)' }}>
                <div style={{ fontSize:11.5, color:'rgba(255,255,255,0.55)', marginBottom:4 }}>{l}</div>
                <div style={{ fontWeight:800, fontSize:16, color:'#FFD166', fontFamily:'var(--font-display)' }}>{d}</div>
                <div style={{ fontSize:11, color:'rgba(255,255,255,0.45)', marginTop:2 }}>{n}</div>
              </div>
            ))}
          </div>
        </div>

        <h2 style={{ fontFamily:'var(--font-display)', fontSize:'1.45rem', fontWeight:700, color:'var(--navy)', marginBottom:16 }}>
          Each Dham — Opening Dates, Access &amp; Best Season
        </h2>

        {DHAMS.map((dham, i) => (
          <div key={dham.name} style={{ marginBottom:28, borderRadius:14, overflow:'hidden', border:'1px solid var(--border)' }}>
            <div style={{ background: i===0?'#1A3E75':i===1?'#0B4F6C':i===2?'var(--navy)':'#1B4332', padding:'16px 20px', display:'flex', justifyContent:'space-between', alignItems:'center', flexWrap:'wrap', gap:8 }}>
              <div style={{ display:'flex', gap:12, alignItems:'center' }}>
                <span style={{ fontSize:28 }}>{dham.icon}</span>
                <div>
                  <div style={{ color:'#fff', fontWeight:800, fontSize:18, fontFamily:'var(--font-display)' }}>{dham.name}</div>
                  <div style={{ color:'rgba(255,255,255,0.65)', fontSize:12.5 }}>{dham.deity} · {dham.altitude}</div>
                </div>
              </div>
              <div style={{ textAlign:'right' }}>
                <div style={{ color:'#FFD166', fontWeight:800, fontSize:16 }}>{dham.opens}</div>
                <div style={{ color:'rgba(255,255,255,0.6)', fontSize:12 }}>{dham.openTime}</div>
              </div>
            </div>
            <div style={{ padding:'16px 20px', background:'#fff' }}>
              <p style={{ fontSize:14.5, color:'#334155', lineHeight:1.8, marginBottom:14 }}>{dham.about}</p>
              <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fill,minmax(220px,1fr))', gap:10 }}>
                {[['📅 Closes',dham.closes],['🚗 Access',dham.access],['☀️ Best Time',dham.bestTime],['👥 Crowds',dham.crowd]].map(([k,v])=>(
                  <div key={k} style={{ background:'var(--bg)', borderRadius:8, padding:'10px 12px', border:'1px solid var(--border)' }}>
                    <div style={{ fontWeight:700, fontSize:12, color:'var(--navy)', marginBottom:3 }}>{k}</div>
                    <div style={{ fontSize:13, color:'#475569' }}>{v}</div>
                  </div>
                ))}
              </div>
              <div style={{ fontSize:12, color:'var(--text-muted)', marginTop:12, fontStyle:'italic' }}>
                <strong>How dates are decided:</strong> {dham.announcement}
              </div>
            </div>
          </div>
        ))}

        <h2 style={{ fontFamily:'var(--font-display)', fontSize:'1.45rem', fontWeight:700, color:'var(--navy)', marginBottom:14 }}>
          Month-by-Month Season Guide — When to Go
        </h2>
        <div style={{ overflowX:'auto', marginBottom:28 }}>
          <table style={{ width:'100%', borderCollapse:'collapse', fontSize:13.5 }}>
            <thead>
              <tr style={{ background:'var(--navy)' }}>
                {['Month','Temp at Dhams','Crowds','Road Conditions','Verdict'].map(h=>(
                  <th key={h} style={{ padding:'10px 12px', textAlign:'left', color:'#fff', fontWeight:700, fontSize:12 }}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {[
                ['April 19–30','0–8°C','Very low','Snow on some sections','Great for quiet darshan — cold but peaceful'],
                ['May 1–20','5–15°C','Building up','All routes open','Excellent — best weather, pre-peak'],
                ['May 21–June 15','8–18°C','Peak','All open — best maintained','Busiest period — book 60 days ahead'],
                ['June 16–30','10–20°C','High','Good','Good but approaching monsoon'],
                ['July–August','12–20°C','Low','Landslide risk','Not recommended — NH108 (Gangotri) risky'],
                ['September','8–18°C','Moderate','Excellent post-monsoon','Best overall — clear skies, thin crowds'],
                ['October 1–25','2–12°C','Low–moderate','All open','Excellent — golden season'],
                ['Late October–Nov','−2–8°C','Very low','Watch for early snow','Cold but uncrowded. Closing season.'],
              ].map(([m,t,c,r,v],i)=>(
                <tr key={m} style={{ borderBottom:'1px solid var(--border)', background:i%2===0?'#fff':'var(--bg)' }}>
                  <td style={{ padding:'9px 12px', fontWeight:700, color:'var(--navy)', fontSize:13 }}>{m}</td>
                  <td style={{ padding:'9px 12px', color:'#334155', fontSize:13 }}>{t}</td>
                  <td style={{ padding:'9px 12px', color:c.includes('Peak')?'#DC2626':c.includes('Very low')?'#15803D':'#475569', fontWeight:c.includes('Peak')?700:400, fontSize:13 }}>{c}</td>
                  <td style={{ padding:'9px 12px', color:'#475569', fontSize:13 }}>{r}</td>
                  <td style={{ padding:'9px 12px', fontWeight:600, color:'#334155', fontSize:12.5 }}>{v}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 style={{ fontFamily:'var(--font-display)', fontSize:'1.45rem', fontWeight:700, color:'var(--navy)', marginBottom:14 }}>
          Booking Timeline — When to Book for Each Month
        </h2>
        {[['May departure','Book by March 15. Hotels at Guptkashi (Kedarnath base) fill by end of March. Char Dham Yatra registration opens March 6.'],['June departure','Book by April 20. June is slightly less crowded than May — still book 6 weeks ahead.'],['September departure','Book by July 15. September is post-monsoon — book 6–8 weeks ahead. October is the ideal casual booking window.'],['October departure','Book by August 20. October is the sweet spot — great weather, thin crowds, 4–6 weeks booking lead time is sufficient.']].map(([m,d])=>(
          <div key={m} style={{ display:'flex', gap:14, padding:'12px 0', borderBottom:'1px solid var(--border)' }}>
            <div style={{ fontWeight:700, fontSize:14, color:'var(--navy)', minWidth:150, flexShrink:0 }}>{m}</div>
            <div style={{ fontSize:14.5, color:'#475569', lineHeight:1.75 }}>{d}</div>
          </div>
        ))}

        <div style={{ background:'var(--navy)', borderRadius:16, padding:'28px 24px', textAlign:'center', marginTop:36 }}>
          <h3 style={{ color:'#fff', fontFamily:'var(--font-display)', fontSize:'1.3rem', marginBottom:10 }}>Book Char Dham Yatra 2026 — Season Still Open</h3>
          <p style={{ color:'rgba(255,255,255,0.7)', fontSize:14, marginBottom:18 }}>Packages available May–October 2026. Direct operator from Haridwar. {SITE.phone}</p>
          <div style={{ display:'flex', gap:10, justifyContent:'center', flexWrap:'wrap' }}>
            <a href={`https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent('Namaste! I want to book Char Dham Yatra 2026. Please share available dates and packages.')}`} target="_blank" rel="nofollow noopener noreferrer"
              style={{ background:'#25D366', color:'#fff', padding:'12px 24px', borderRadius:9, fontWeight:700, fontSize:13.5, textDecoration:'none' }}>💬 WhatsApp</a>
            <Link href="/char-dham-yatra" style={{ background:'rgba(255,255,255,0.12)', color:'#fff', padding:'12px 24px', borderRadius:9, fontWeight:700, fontSize:13.5, textDecoration:'none', border:'1px solid rgba(255,255,255,0.2)' }}>View Packages →</Link>
          </div>
        </div>

        
        {/* Closing dates section — competitors rank for this separately */}
        <h2 style={h2}>Char Dham Closing Dates 2026 — When All 4 Dhams Close</h2>
        <p style={p}>
          The 2026 Char Dham season closes in November as temperatures drop and snowfall makes the high-altitude routes inaccessible. Closing dates follow the Hindu lunar calendar — Gangotri and Yamunotri close on Diwali/Bhai Dooj, Kedarnath two days after Diwali, and Badrinath approximately 2 weeks later.
        </p>
        <div style={{ overflowX:'auto', marginBottom:20 }}>
          <table style={{ width:'100%', borderCollapse:'collapse', fontSize:14 }}>
            <thead><tr style={{ background:'var(--navy)' }}>
              {['Dham','Closing date 2026','Occasion','Winter abode (deity moved here)'].map(h=>(
                <th key={h} style={{ padding:'10px 12px', textAlign:'left', color:'#fff', fontWeight:700, fontSize:12 }}>{h}</th>
              ))}
            </tr></thead>
            <tbody>
              {[
                ['🌿 Gangotri','November 10, 2026','Diwali','Mukhba village, Uttarkashi'],
                ['🌊 Yamunotri','November 11, 2026','Bhai Dooj','Kharsali village, Uttarkashi'],
                ['🏔️ Kedarnath','November 11, 2026','Bhai Dooj (Bhai Duj)','Ukhimath — Omkareshwar Temple'],
                ['🕌 Badrinath','November 13, 2026','~2 weeks post-Diwali','Pandukheshwar / Joshimath'],
              ].map(([dham,date,occasion,abode],i)=>(
                <tr key={dham} style={{ borderBottom:'1px solid var(--border)', background:i%2===0?'#fff':'var(--bg)' }}>
                  <td style={{ padding:'9px 12px', fontWeight:700, color:'var(--navy)', fontSize:15 }}>{dham}</td>
                  <td style={{ padding:'9px 12px', fontWeight:700, color:'#D85A30' }}>{date}</td>
                  <td style={{ padding:'9px 12px', color:'#475569', fontSize:13 }}>{occasion}</td>
                  <td style={{ padding:'9px 12px', color:'#64748b', fontSize:13 }}>{abode}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p style={p}>
          <strong>What happens at closing:</strong> Each dham has a Kapat Band (door-closing) ceremony. At Kedarnath, Lord Shiva's Panchmukhi Doli (five-faced palanquin) travels from Kedarnath to Ukhimath over 4 days. Before the doors seal, the priest lights the <em>Akhand Jyot</em> — an eternal flame that burns inside the locked temple for all 6 winter months. When the doors reopen in April, the flame is still burning. Thousands of pilgrims attend the closing ceremony specifically for this moment.
        </p>
        <div style={{ background:'rgba(232,146,10,0.07)', border:'1px solid rgba(232,146,10,0.25)', borderRadius:10, padding:'12px 16px', marginBottom:28, fontSize:13.5, color:'#7B3F00' }}>
          <strong>💡 October visits — last chance with best conditions:</strong> October is arguably the best month to visit Char Dham. Crowds are 70% lighter than peak season, prices are lower, and post-monsoon skies are crystal clear. The dhams are all still open through October. <Link href="/blog/char-dham-yatra-in-october" style={{ color:'var(--teal)', fontWeight:600 }}>See our October Char Dham guide →</Link>
        </div>

<div style={{ borderTop:'1px solid var(--border)', paddingTop:24, marginTop:32 }}>
          <div style={{ fontWeight:700, fontSize:13.5, color:'var(--navy)', marginBottom:12 }}>Related Guides</div>
          <div style={{ display:'flex', gap:10, flexWrap:'wrap' }}>
            {[['Best Time for Char Dham','/blog/best-time-char-dham'],['Char Dham Registration','/blog/char-dham-yatra-registration'],['Road Status 2026','/char-dham-road-status'],['Char Dham Cost','/blog/char-dham-yatra-cost'],['Kedarnath Timings','/blog/kedarnath-darshan-timing']].map(([l,h])=>(
              <Link key={h} href={h} style={{ background:'var(--bg)', border:'1px solid var(--border)', color:'var(--navy)', padding:'7px 14px', borderRadius:8, fontSize:12.5, fontWeight:600, textDecoration:'none' }}>{l} →</Link>
            ))}
          </div>
        </div>
      </article>
    </>
  );
}
