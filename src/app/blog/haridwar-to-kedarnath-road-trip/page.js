import Link from 'next/link';
import { SITE } from '@/data/packages';
import BlogCTA from '@/components/BlogCTA';
import BlogAuthor from '@/components/BlogAuthor';

export const metadata = {
  title: 'Haridwar to Kedarnath Road Trip 2026 – Distance, Route, Drive Time & Best Stops',
  description: 'Haridwar to Kedarnath road trip guide 2026: 250km route, 7–8 hour drive via Devprayag, Rudraprayag, and Guptkashi. Road tips, fuel stations, and best overnight stops along the way.',
  keywords: ['haridwar to kedarnath road trip 2026', 'haridwar to kedarnath distance', 'haridwar to kedarnath route', 'haridwar to gaurikund distance', 'haridwar to sonprayag distance', 'kedarnath road trip from haridwar'],
  alternates: { canonical: `${SITE.baseUrl}/blog/haridwar-to-kedarnath-road-trip` },
  openGraph: { title: 'Haridwar to Kedarnath Road Trip 2026 – Distance, Route, Drive Time & Best Stops', url: `${SITE.baseUrl}/blog/haridwar-to-kedarnath-road-trip`, type: 'article' },
    images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: 'Haridwar to Kedarnath Distance, Route & Road Trip Guide 2026 | Shiv Ganga Travels' }],
};

function Schema() {
  const faq = {
    '@context': 'https://schema.org', '@type': 'FAQPage',
    mainEntity: [
      { '@type': 'Question', name: 'What is the distance from Haridwar to Kedarnath?',
        acceptedAnswer: { '@type': 'Answer', text: 'Haridwar to Gaurikund (Kedarnath base) is 218km by road via NH7 through Rishikesh, Devprayag, Rudraprayag, and Guptkashi. Driving time: 6–7 hours. From Gaurikund, the 16km Kedarnath trek or helicopter takes 5–7 hours (trek) or 7 minutes (flight). Total door-to-temple distance including trek: approximately 234km.' }},
      { '@type': 'Question', name: 'What is the best time to leave Haridwar for Kedarnath?',
        acceptedAnswer: { '@type': 'Answer', text: 'Leave Haridwar at 4:00–5:00 AM for Kedarnath. This gets you to Sonprayag by 9–10 AM before the one-way police checkpoint fills. Arriving at Gaurikund by 8–9 AM allows you to start the Kedarnath trek in cool morning temperatures. Pilgrims who leave after 7 AM often face 1–2 hour waits at the Sonprayag checkpoint.' }},
      { '@type': 'Question', name: 'What are the main stops on the Haridwar to Kedarnath route?',
        acceptedAnswer: { '@type': 'Answer', text: 'Key stops on Haridwar to Kedarnath route: Rishikesh (24km), Devprayag (70km) — Ganga-Alaknanda confluence, Rudraprayag (140km) — Mandakini river junction, Guptkashi (193km) — Kedarnath base town, Sonprayag (213km) — one-way checkpoint, Gaurikund (218km) — trek/helicopter base.' }},
    ],
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faq) }}/>;
}

const ROUTE = [
  { stop:'Haridwar', km:0, time:'Start (4–5 AM recommended)', notes:'Har Ki Pauri Ganga Aarti the evening before. Biometric registration at tourist centre.', type:'start' },
  { stop:'Rishikesh', km:24, time:'+45 min', notes:'Ram Jhula, Laxman Jhula. Minor fuel/snack stop. Avoid peak hour traffic (8–10 AM) through Rishikesh town.', type:'stop' },
  { stop:'Devprayag', km:70, time:'+2 hrs', notes:'Sacred confluence of Alaknanda and Bhagirathi rivers — the Ganga officially begins here. 15–20 min photo stop recommended.', type:'highlight' },
  { stop:'Srinagar (Garhwal)', km:110, time:'+3.5 hrs', notes:'Larger town. Good for fuel, breakfast, ATM. Last major ATM before Sonprayag. Fill up here.', type:'stop' },
  { stop:'Rudraprayag', km:140, time:'+4.5 hrs', notes:'Mandakini-Alaknanda confluence. Route splits: NH7 straight ahead for Kedarnath, NH58 right for Badrinath.', type:'highlight' },
  { stop:'Agastmuni / Kund', km:165, time:'+5 hrs', notes:'Small valley towns. Scenic riverside driving. Kund area has a Shiva temple worth a brief stop.', type:'stop' },
  { stop:'Guptkashi', km:193, time:'+5.5–6 hrs', notes:'Primary base for Kedarnath. Hotels, restaurants, ATM, medical shop. Vishwanath temple here. Most packages stay overnight at Guptkashi.', type:'stay' },
  { stop:'Sonprayag', km:213, time:'+6–6.5 hrs', notes:'MANDATORY POLICE CHECKPOINT. Vehicles stopped here — only registered yatris proceed. One-way timings enforced. Jeeps/share autos to Gaurikund from here (5km, ₹30–50 per person).', type:'checkpoint' },
  { stop:'Gaurikund', km:218, time:'+6.5–7 hrs', notes:'END OF ROAD. Private vehicles not allowed beyond Sonprayag during peak hours. From Gaurikund: 16km trek or pony/palki to Kedarnath. Helicopter from Phata/Sersi helipad (pre-book via IRCTC).', type:'end' },
];

const TYPE_COLOR = { start:'#15803D', stop:'var(--navy)', highlight:'#D97706', stay:'#0B7B8B', checkpoint:'#DC2626', end:'var(--teal)' };


export default function HaridwarToKedarnath() {
  return (
    <>
      <Schema />
      <section style={{ background:'linear-gradient(145deg,var(--navy) 0%,#1A3E75 60%,var(--teal) 100%)', padding:'52px 20px 40px' }}>
        <div style={{ maxWidth:860, margin:'0 auto', textAlign:'center' }}>
          <span style={{ background:'rgba(232,146,10,0.18)', color:'#FFD166', fontSize:11, fontWeight:700, letterSpacing:'0.12em', textTransform:'uppercase', padding:'5px 16px', borderRadius:100, display:'inline-block', marginBottom:14 }}>Route Guide · 2026</span>
          <h1 style={{ color:'#fff', fontFamily:'var(--font-display)', fontSize:'clamp(1.7rem,4vw,2.6rem)', fontWeight:700, letterSpacing:'-0.02em', marginBottom:14 }}>
            Haridwar to Kedarnath — Complete Route &amp; Road Trip Guide 2026
          </h1>
          <p style={{ color:'rgba(255,255,255,0.8)', fontSize:15, lineHeight:1.7, maxWidth:700, margin:'0 auto 20px' }}>
            218km by road via NH7 · 6–7 hours driving · 9 checkpoints explained · Sonprayag one-way rules · What time to leave
          </p>
          {['📍 218km total','⏱️ 6–7 hrs drive','🚧 Sonprayag checkpoint','🏔️ 16km Kedarnath trek'].map(t => (
            <span key={t} style={{ background:'rgba(255,255,255,0.12)', color:'#fff', fontSize:12.5, fontWeight:600, padding:'6px 14px', borderRadius:100, border:'1px solid rgba(255,255,255,0.2)', display:'inline-block', margin:'4px' }}>{t}</span>
          ))}
        </div>
      </section>

      <nav style={{ background:'var(--bg)', borderBottom:'1px solid var(--border)', padding:'9px 20px' }}>
        <div style={{ maxWidth:'var(--container)', margin:'0 auto', fontSize:12, color:'var(--text-muted)', display:'flex', gap:6 }}>
          Home<span>›</span>
          Blog<span>›</span>
          <span>Haridwar to Kedarnath Road Trip</span>
        </div>
      </nav>

      <article className="blog-container" itemScope itemType="https://schema.org/Article">

        {/* Author byline — E-E-A-T signal */}
        <BlogAuthor variant="top" author="sumit" />
        <div style={{ fontSize:12, color:'var(--text-muted)', marginBottom:20, textAlign:'right' }}>🗓️ <strong>Last updated:</strong> {SITE.lastUpdated}</div>

        <div style={{ background:'var(--navy-light)', borderRadius:14, padding:'16px 20px', marginBottom:24, display:'grid', gridTemplateColumns:'repeat(auto-fill,minmax(160px,1fr))', gap:10 }}>
          {[['Total Distance','218km to Gaurikund'],['Driving Time','6–7 hours'],['Main Route','NH7 via Rishikesh'],['Key Town','Guptkashi (base)'],['Final Checkpoint','Sonprayag'],['Trek from Gaurikund','16km one way']].map(([k,v])=>(
            <div key={k}>
              <div style={{ fontSize:11.5, color:'var(--text-muted)', marginBottom:2 }}>{k}</div>
              <div style={{ fontWeight:700, fontSize:13.5, color:'var(--navy)' }}>{v}</div>
            </div>
          ))}
        </div>

        <h2 style={{ fontFamily:'var(--font-display)', fontSize:'1.45rem', fontWeight:700, color:'var(--navy)', marginBottom:14 }}>
          Turn-by-Turn Route — Haridwar to Gaurikund
        </h2>
        <div style={{ display:'flex', flexDirection:'column', gap:0, marginBottom:28, position:'relative' }}>
          {ROUTE.map((stop, i) => (
            <div key={stop.stop} style={{ display:'flex', gap:0 }}>
              {/* Connector line */}
              <div style={{ display:'flex', flexDirection:'column', alignItems:'center', width:44, flexShrink:0 }}>
                <div style={{ width:16, height:16, borderRadius:'50%', background:TYPE_COLOR[stop.type], border:'2px solid #fff', boxShadow:'0 0 0 2px ' + TYPE_COLOR[stop.type], zIndex:1 }}/>
                {i < ROUTE.length - 1 && <div style={{ width:2, flex:1, background:'var(--border)', minHeight:20 }}/>}
              </div>
              {/* Content */}
              <div style={{ flex:1, paddingBottom:14, paddingLeft:8 }}>
                <div style={{ display:'flex', justifyContent:'space-between', alignItems:'flex-start', gap:8, marginBottom:4 }}>
                  <div style={{ fontWeight:700, fontSize:14.5, color:TYPE_COLOR[stop.type] }}>{stop.stop}</div>
                  <div style={{ display:'flex', gap:8, flexShrink:0 }}>
                    <span style={{ fontSize:11.5, color:'var(--text-muted)' }}>{stop.km}km</span>
                    <span style={{ fontSize:11.5, color:'var(--navy)', fontWeight:600 }}>{stop.time}</span>
                  </div>
                </div>
                <p style={{ fontSize:13.5, color:'#475569', lineHeight:1.7, margin:0 }}>{stop.notes}</p>
              </div>
            </div>
          ))}
        </div>

        <h2 style={{ fontFamily:'var(--font-display)', fontSize:'1.45rem', fontWeight:700, color:'var(--navy)', marginBottom:14 }}>
          The Sonprayag Checkpoint — What Pilgrims Don't Know
        </h2>
        <div style={{ background:'#FFF1F2', border:'2px solid #FECDD3', borderRadius:12, padding:'16px 20px', marginBottom:20 }}>
          <div style={{ fontWeight:700, fontSize:14, color:'#9F1239', marginBottom:8 }}>⚠️ Read This Before You Drive</div>
          <p style={{ fontSize:14.5, color:'#7F1D1D', lineHeight:1.75, marginBottom:12 }}>
            Sonprayag to Gaurikund (5km) operates as a <strong>timed one-way road</strong> enforced by Uttarakhand Police during peak season. Vehicles queue at Sonprayag and are released in batches. During peak May–June, this queue can add 45 minutes to 2 hours to your journey.
          </p>
          <ul style={{ padding:'0 0 0 16px', display:'flex', flexDirection:'column', gap:6 }}>
            {['Arrive at Sonprayag before 9 AM to avoid peak queue','Private vehicles are NOT allowed beyond Sonprayag during yatra peak hours (Shiv Ganga Travels vehicles have operator registration and handle this)','Shared jeeps from Sonprayag to Gaurikund cost ₹30–50 per person','At Gaurikund, trek starts or helicopter pony booking available'].map(p=>(
              <li key={p} style={{ fontSize:13.5, color:'#7F1D1D' }}>{p}</li>
            ))}
          </ul>
        </div>

        <h2 style={{ fontFamily:'var(--font-display)', fontSize:'1.45rem', fontWeight:700, color:'var(--navy)', marginBottom:14 }}>
          From Gaurikund to Kedarnath — 3 Options
        </h2>
        <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fill,minmax(240px,1fr))', gap:12, marginBottom:24 }}>
          {[
            { mode:'Trek (16km)', time:'5–7 hrs ascending, 3–4 hrs descending', cost:'Free', for:'Fit adults under 65', notes:'Most spiritually rewarding. Stone-paved path. Rest stops with tea every 2–3km. Start by 5 AM.' },
            { mode:'Pony/Horse', time:'3–4 hrs (ascending)', cost:'₹3,000–5,000 one way (negotiate at Gaurikund)', for:'65+ or knee problems', notes:'Hire at Gaurikund — registered ponywallas only. Return pony adds ₹3,000–5,000.' },
            { mode:'Helicopter', time:'7 minutes', cost:'₹7,000–9,000 one way via IRCTC', for:'Medical conditions, premium', notes:'Book at irctc.co.in — mandatory 2026. Phata/Sersi/Guptkashi helipads. Very popular — book 60+ days ahead.' },
          ].map(opt=>(
            <div key={opt.mode} style={{ background:'var(--bg)', borderRadius:12, padding:'14px', border:'1px solid var(--border)' }}>
              <div style={{ fontWeight:700, fontSize:15, color:'var(--navy)', marginBottom:8 }}>{opt.mode}</div>
              {[['⏱️ Time',opt.time],['💰 Cost',opt.cost],['👤 Best for',opt.for]].map(([k,v])=>(
                <div key={k} style={{ fontSize:13, color:'#475569', marginBottom:4, display:'flex', gap:6 }}>
                  <span style={{ flexShrink:0 }}>{k}:</span><span style={{ fontWeight:600, color:'#334155' }}>{v}</span>
                </div>              ))}

        {/* ── Mid-article conversion CTA ── */}
        <BlogCTA variant="inline" intent="route" />

              <p style={{ fontSize:12.5, color:'var(--text-muted)', marginTop:8, lineHeight:1.5 }}>{opt.notes}</p>
            </div>
          ))}
        </div>

        <div style={{ background:'var(--navy)', borderRadius:16, padding:'28px 24px', textAlign:'center', marginTop:36 }}>
          <h3 style={{ color:'#fff', fontFamily:'var(--font-display)', fontSize:'1.3rem', marginBottom:10 }}>Book Kedarnath Yatra from Haridwar</h3>
          <p style={{ color:'rgba(255,255,255,0.7)', fontSize:14, marginBottom:18 }}>Shiv Ganga Travels handles all Sonprayag permits, vehicle registration, and Kedarnath logistics. {SITE.phone}</p>
          <div style={{ display:'flex', gap:10, justifyContent:'center', flexWrap:'wrap' }}>
            <a href={`https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent('Namaste! I want to plan Kedarnath Yatra 2026 from Haridwar. Please share package details.')}`} target="_blank" rel="nofollow noopener noreferrer"
              style={{ background:'#25D366', color:'#fff', padding:'12px 24px', borderRadius:9, fontWeight:700, fontSize:13.5, textDecoration:'none' }}>💬 WhatsApp</a>
            Kedarnath Packages →
          </div>
        </div>

        <div style={{ borderTop:'1px solid var(--border)', paddingTop:24, marginTop:32 }}>
          <div style={{ fontWeight:700, fontSize:13.5, color:'var(--navy)', marginBottom:12 }}>Related Guides</div>
          <div style={{ display:'flex', gap:10, flexWrap:'wrap' }}>
            {[['Kedarnath Trek Guide','/blog/kedarnath-trek-guide'],['Kedarnath Darshan Timings','/blog/kedarnath-darshan-timing'],['Road Status 2026','/char-dham-road-status'],['How to Reach Haridwar','/how-to-reach-haridwar'],['Kedarnath Helicopter','/blog/kedarnath-helicopter-booking']].map(([l,h])=>(
              <Link key={h} href={h} style={{ background:'var(--bg)', border:'1px solid var(--border)', color:'var(--navy)', padding:'7px 14px', borderRadius:8, fontSize:12.5, fontWeight:600, textDecoration:'none' }}>{l} →</Link>
            ))}
          </div>
        </div>
      
        {/* ── End-of-article booking CTA ── */}
        <BlogCTA variant="footer" intent="route" />
</article>
    </>
  );
}
