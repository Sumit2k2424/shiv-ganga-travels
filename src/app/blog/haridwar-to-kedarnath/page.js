import Link from 'next/link';
import { SITE } from '@/data/packages';
import BlogCTA from '@/components/BlogCTA';
import BlogAuthor from '@/components/BlogAuthor';
export const metadata = {
  title: 'Haridwar to Kedarnath 2026 — Distance, Cab, Bus & Helicopter',
  description: 'Haridwar to Kedarnath is 228km by road + 16km trek. 2026 guide to every option — cab/taxi fare, bus ticket price, helicopter, train route, map and journey time. Packages from ₹6,499.',
  keywords: ['haridwar to kedarnath distance 2026', 'haridwar to kedarnath cab', 'haridwar to kedarnath taxi fare', 'haridwar to kedarnath bus', 'haridwar to kedarnath helicopter', 'haridwar to kedarnath train', 'haridwar to kedarnath map'],
  alternates: { canonical: `${SITE.baseUrl}/blog/haridwar-to-kedarnath` },
};
const FAQS = [
  { q:'What is the distance from Haridwar to Kedarnath?', a:'Haridwar to Kedarnath is about 228 km by road up to Gaurikund, then a 16 km trek to the temple — roughly 244 km in total. Driving takes 8–9 hours and the trek another 5–7 hours, so most pilgrims split it across two days with a night at Guptkashi.' },
  { q:'How much is a Haridwar to Kedarnath cab or taxi fare?', a:'A one-way cab from Haridwar to Gaurikund costs about ₹3,500 in a Swift Dzire (4 seats), ₹5,500–₹6,500 in an Innova/Ertiga (6–7 seats) and ₹9,000–₹12,000 in a Tempo Traveller (12 seats). Round-trip with a 2–3 day halt is usually quoted as a package. Hill-experienced drivers only.' },
  { q:'Is there a bus from Haridwar to Kedarnath?', a:'There is no direct bus to Kedarnath. State and private buses run from Haridwar/Rishikesh to Sonprayag or Guptkashi (₹400–₹700, 9–11 hours); from Sonprayag you take a shared jeep to Gaurikund and trek. Buses are cheapest but slow and seasonal — most pilgrims prefer a cab or package.' },
  { q:'Can I take a helicopter from Haridwar to Kedarnath?', a:'Helicopters do not fly from Haridwar directly. You drive to a helipad — Phata, Sersi or Guptkashi (6–7 hrs from Haridwar) — and fly the last leg to Kedarnath in 8–10 minutes. Round-trip helicopter tickets run ₹7,500–₹9,500 per person and must be booked in advance.' },
  { q:'Is there a train to Kedarnath from Haridwar?', a:'No railway line reaches Kedarnath. Haridwar is itself the nearest major railhead; from there it is entirely road plus trek. Rishikesh station is slightly closer to the hills but offers fewer trains. Pilgrims arriving by train at Haridwar switch to a cab or package for the rest of the journey.' },
  { q:'What is the route and map from Haridwar to Kedarnath?', a:'The road route is Haridwar → Rishikesh → Devprayag → Srinagar → Rudraprayag → Agastyamuni → Guptkashi → Sonprayag → Gaurikund, then a 16 km trek to Kedarnath. It follows the Ganga and Mandakini rivers through Devprayag and Rudraprayag confluences.' },
  { q:'When does Kedarnath open in 2026?', a:'Kedarnath temple opens on 22 April 2026 at 8:00 AM and closes around 11 November 2026 (Bhai Dooj). May–June and September–October are the most comfortable months to travel from Haridwar.' },
];
function Schema() {
  const a = { '@context':'https://schema.org','@type':'BlogPosting', headline:'Haridwar to Kedarnath Distance, Route & Travel Guide 2026', author:{'@type':'Organization',name:SITE.name,url:SITE.baseUrl}, publisher:{'@type':'Organization',name:SITE.name,url:SITE.baseUrl}, datePublished:'2025-03-10', dateModified:'2026-05-30', mainEntityOfPage:`${SITE.baseUrl}/blog/haridwar-to-kedarnath` };
  const faq = { '@context':'https://schema.org','@type':'FAQPage', mainEntity: FAQS.map(f=>({ '@type':'Question', name:f.q, acceptedAnswer:{ '@type':'Answer', text:f.a } })) };
  return (<><script type="application/ld+json" dangerouslySetInnerHTML={{ __html:JSON.stringify(a) }}/><script type="application/ld+json" dangerouslySetInnerHTML={{ __html:JSON.stringify(faq) }}/></>);
}
const h2 = { fontFamily:'var(--font-display)', fontSize:'clamp(1.3rem,2.5vw,1.75rem)', fontWeight:600, color:'var(--navy)', letterSpacing:'-0.02em', marginBottom:12, marginTop:36 };
const p  = { fontSize:15, color:'var(--text-mid)', lineHeight:1.85, marginBottom:16 };
export default function HaridwarToKedarnath() {
  return (<>
    <Schema/>
    <section style={{ background:'linear-gradient(145deg,var(--navy) 0%,var(--navy-mid) 60%,var(--teal) 100%)', padding:'56px 20px 44px', textAlign:'center' }}>
      <div style={{ maxWidth:820, margin:'0 auto' }}>
        <span style={{ background:'rgba(232,146,10,0.18)', color:'#FFD166', fontSize:11, fontWeight:700, letterSpacing:'0.12em', textTransform:'uppercase', padding:'5px 16px', borderRadius:100, display:'inline-block', marginBottom:16 }}>Route Guide · 2026</span>
        <h1 className="display-title" style={{ color:'#fff', fontSize:'clamp(1.8rem,4.5vw,3rem)', marginBottom:14 }}>Haridwar to Kedarnath — Complete Route Guide 2026</h1>
        <p style={{ color:'rgba(255,255,255,0.8)', fontSize:15, lineHeight:1.7 }}>228km by road + 16km trek · Journey time · Key stops · Best route</p>
      </div>
    </section>
    <nav style={{ background:'var(--bg)', borderBottom:'1px solid var(--border)', padding:'10px 20px' }}>
      <div style={{ maxWidth:'var(--container)', margin:'0 auto', fontSize:12, color:'var(--text-muted)', display:'flex', gap:6, flexWrap:'wrap' }}>
        Home<span>›</span>
        Blog<span>›</span>
        <span>Haridwar to Kedarnath Route</span>
      </div>
    </nav>
    <article className="blog-container" itemScope itemType="https://schema.org/Article">

        {/* Author byline — E-E-A-T signal */}
        <BlogAuthor variant="top" author="sumit" />
      <p style={{ fontSize:15.5, color:'#334155', lineHeight:1.85, marginBottom:16 }}>The road from Haridwar to Kedarnath is not just a journey — it’s a preparation. By the time you reach Gaurikund and take your first steps on the 16km trail, the mountains have already begun their work on you. The river gorges, the Devprayag confluence, the narrow mountain roads — they peel away the city before you even reach the temple.</p>
      <p style={{ fontSize:15.5, color:'#334155', lineHeight:1.85, marginBottom:16 }}>Here is the complete route guide from <strong>Haridwar to Kedarnath</strong>, including distances, journey times, the best places to stop, and exactly what to expect at each stage.</p>

      {/* Quick Answer — self-contained block for AI Overviews / featured snippet */}
      <div style={{ background:'var(--bg)', borderLeft:'4px solid var(--gold)', borderRadius:12, padding:'16px 18px', marginBottom:24 }}>
        <div style={{ fontSize:11.5, fontWeight:700, color:'var(--gold-dark)', textTransform:'uppercase', letterSpacing:'0.04em', marginBottom:6 }}>Quick Answer</div>
        <p style={{ fontSize:14.5, color:'var(--navy)', lineHeight:1.75, margin:0 }}>Haridwar to Kedarnath is <strong>228 km by road</strong> to Gaurikund, then a <strong>16 km trek</strong> (or pony/helicopter) to the temple. By cab it is 8–9 hours of driving (one-way fare from ₹3,500); there is no direct bus or train, and helicopters fly only the final leg from Phata/Guptkashi. Kedarnath opens 22 April 2026. Most pilgrims take a 2–3 day package with a night at Guptkashi.</p>
      </div>

      <h2 style={h2}>Total Distance: Haridwar to Kedarnath</h2>
      <div style={{ background:'var(--bg)', borderRadius:12, padding:'18px 20px', border:'1px solid var(--border)', marginBottom:24, fontSize:14.5, lineHeight:2.2 }}>
        🚗 <strong>By Road:</strong> Haridwar → Rishikesh → Devprayag → Rudraprayag → Agastyamuni → Guptkashi → Sonprayag → Gaurikund = <strong>228 km (~8–9 hours driving)</strong><br/>
        🥾 <strong>By Trek:</strong> Gaurikund → Kedarnath = <strong>16 km (5–7 hours)</strong><br/>
        📏 <strong>Total journey:</strong> 228km + 16km = approximately <strong>244 km and 13–16 hours total</strong>
      </div>

      <h2 style={h2}>Day-by-Day Route Breakdown</h2>
      <div style={{ display:'flex', flexDirection:'column', gap:10, marginBottom:24 }}>
        {[
          { day:'Day 1', route:'Haridwar → Guptkashi (220 km | 7–8 hrs)', desc:'Start early — 5 AM ideally. The drive follows the Ganga through Rishikesh, passes the sacred Devprayag confluence (Bhagirathi + Alaknanda), continues through Srinagar Garhwal, Rudraprayag, and Agastyamuni to Guptkashi. Overnight in Guptkashi — best base for Kedarnath.' },
          { day:'Day 2', route:'Guptkashi → Gaurikund → Kedarnath (8 km drive + 16 km trek)', desc:'Drive from Guptkashi to Sonprayag (30 min), then shared jeep to Gaurikund (7 km). Hot spring dip at Gauri Kund. Begin the 16km trek by 6–7 AM for a comfortable ascent. Arrive Kedarnath by early afternoon. Evening darshan.' },
          { day:'Day 3', route:'Kedarnath → Gaurikund → Return (16 km descent)', desc:'4:30 AM Brahma Muhurta puja — the most auspicious time. Trek down or take the descent services. Continue journey to the next dham or return base.' },
        ].map(d => (
          <div key={d.day} style={{ background:'#fff', borderRadius:10, padding:'16px', border:'1px solid var(--border)' }}>
            <div style={{ fontWeight:700, fontSize:14.5, color:'var(--navy)', marginBottom:6 }}>{d.day}: {d.route}</div>
            <div style={{ fontSize:15, color:'#334155', lineHeight:1.85 }}>{d.desc}</div>
          </div>
        ))}
      </div>

      <h2 style={h2}>Key Stops Along the Route</h2>
      <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(180px,1fr))', gap:10, marginBottom:24 }}>
        {[
          { place:'Devprayag', why:'Sacred confluence of Bhagirathi + Alaknanda = Ganga. Photo stop. Temple visit. 10–15 min.' },
          { place:'Rudraprayag', why:'Confluence of Mandakini + Alaknanda. Koteshwar Mahadev cave temple. Lunch break point.' },
          { place:'Guptkashi', why:'Best overnight base for Kedarnath. Vishwanath Temple. Mountain views. Good hotels.' },
          { place:'Sonprayag', why:'Last motor vehicle point before Gaurikund. Mandakini + Songannga confluence.' },
          { place:'Gaurikund', why:'Trek starting point. Hot spring. Gauri Temple. Last food and supplies point.' },
        ].map(s => (
          <div key={s.place} style={{ background:'var(--bg)', borderRadius:10, padding:'12px', border:'1px solid var(--border)' }}>
            <div style={{ fontWeight:700, fontSize:13.5, color:'var(--navy)', marginBottom:4 }}>{s.place}</div>
            <div style={{ fontSize:12.5, color:'var(--text-mid)', lineHeight:1.5 }}>{s.why}</div>
          </div>        ))}

        {/* ── Mid-article conversion CTA ── */}
        <BlogCTA variant="inline" intent="kedarnath" />

      </div>

      <h2 style={h2}>How to Reach Kedarnath from Haridwar — All Options Compared</h2>
      <p style={p}>There is no single &ldquo;Haridwar to Kedarnath&rdquo; vehicle that drops you at the temple — the last 16 km is a trek no road covers. What changes is how you cover the 228 km to Gaurikund. Here is every option side by side.</p>
      <div style={{ overflowX:'auto', marginBottom:8 }}>
        <table style={{ width:'100%', borderCollapse:'collapse', fontSize:13.5, minWidth:600 }}>
          <thead><tr style={{ background:'var(--navy)' }}>
            {['Mode','Distance / Route','Time','Cost','Notes'].map(hd=>(
              <th key={hd} style={{ padding:'9px 12px', textAlign:'left', color:'#fff', fontWeight:700, fontSize:12 }}>{hd}</th>
            ))}
          </tr></thead>
          <tbody>
            {[
              { m:'Cab / Taxi', r:'228 km to Gaurikund', t:'8–9 hrs', c:'From ₹3,500 (one way)', n:'Most popular. Door pickup, your own pace, hill-experienced driver. Same cab waits for your trek.' },
              { m:'Bus', r:'To Sonprayag/Guptkashi', t:'9–11 hrs', c:'₹400–₹700', n:'No direct bus to Kedarnath. Cheapest but slow and seasonal; jeep + trek from Sonprayag.' },
              { m:'Helicopter', r:'Drive to Phata/Guptkashi, fly last leg', t:'6–7 hrs road + 8–10 min flight', c:'₹7,500–₹9,500 round trip', n:'No chopper from Haridwar itself. Saves the trek. Book early — limited daily slots.' },
              { m:'Train', r:'Haridwar is the railhead', t:'Road + trek beyond', c:'Train fare to Haridwar only', n:'No rail line to Kedarnath. Arrive Haridwar by train, switch to cab or package.' },
            ].map((x,i)=>(
              <tr key={x.m} style={{ background:i%2?'var(--bg)':'#fff' }}>
                <td style={{ padding:'9px 12px', fontWeight:700, color:'var(--navy)' }}>{x.m}</td>
                <td style={{ padding:'9px 12px', color:'#475569' }}>{x.r}</td>
                <td style={{ padding:'9px 12px', color:'#475569', whiteSpace:'nowrap' }}>{x.t}</td>
                <td style={{ padding:'9px 12px', color:'#475569', whiteSpace:'nowrap' }}>{x.c}</td>
                <td style={{ padding:'9px 12px', color:'#475569', lineHeight:1.6 }}>{x.n}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p style={{ fontSize:12.5, color:'var(--text-muted)', lineHeight:1.7, marginBottom:8 }}>Need a fixed cab quote? See our <Link href="/haridwar-to-kedarnath-cab" style={{ color:'var(--teal)', textDecoration:'underline', fontWeight:600 }}>Haridwar to Kedarnath cab fares</Link> page for vehicle-wise rates and booking.</p>

      <h2 style={h2}>Haridwar to Kedarnath Taxi Fare (by vehicle)</h2>
      <div style={{ overflowX:'auto', marginBottom:24 }}>
        <table style={{ width:'100%', borderCollapse:'collapse', fontSize:13.5, minWidth:420 }}>
          <thead><tr style={{ background:'var(--navy)' }}>
            {['Vehicle','Seats','One-way fare','Best for'].map(hd=>(
              <th key={hd} style={{ padding:'9px 12px', textAlign:'left', color:'#fff', fontWeight:700, fontSize:12 }}>{hd}</th>
            ))}
          </tr></thead>
          <tbody>
            {[
              ['Swift Dzire','4','₹3,500–₹4,500','Couples, solo pilgrims'],
              ['Ertiga / Innova','6–7','₹5,500–₹6,500','Families'],
              ['Innova Crysta','6','₹6,500–₹8,000','Comfort on hill roads'],
              ['Tempo Traveller','12','₹9,000–₹12,000','Groups'],
            ].map((r,i)=>(
              <tr key={r[0]} style={{ background:i%2?'var(--bg)':'#fff' }}>
                <td style={{ padding:'9px 12px', fontWeight:700, color:'var(--navy)' }}>{r[0]}</td>
                <td style={{ padding:'9px 12px', color:'#475569' }}>{r[1]}</td>
                <td style={{ padding:'9px 12px', color:'#475569', whiteSpace:'nowrap' }}>{r[2]}</td>
                <td style={{ padding:'9px 12px', color:'#475569' }}>{r[3]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h2 style={h2}>Haridwar to Kedarnath Route Map</h2>
      <div style={{ borderRadius:12, overflow:'hidden', border:'1px solid var(--border)', marginBottom:24 }}>
        <iframe
          title="Haridwar to Kedarnath route map"
          src="https://maps.google.com/maps?saddr=Haridwar,Uttarakhand&daddr=Gaurikund,Uttarakhand&output=embed"
          width="100%" height="320" style={{ border:0, display:'block' }} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
      </div>
      <p style={p}>The drive ends at Gaurikund (1,982 m), the last motorable point. From there the 16 km trail to Kedarnath (3,583 m) is on foot, pony or palki, or you skip it with a helicopter from Phata or Guptkashi.</p>

      <h2 style={h2}>Frequently Asked Questions</h2>
      <div style={{ display:'flex', flexDirection:'column', gap:10, marginBottom:8 }}>
        {FAQS.map(f=>(
          <div key={f.q} style={{ background:'#fff', border:'1px solid var(--border)', borderRadius:10, padding:'14px 16px' }}>
            <div style={{ fontWeight:700, fontSize:14.5, color:'var(--navy)', marginBottom:6 }}>{f.q}</div>
            <div style={{ fontSize:14, color:'#475569', lineHeight:1.75 }}>{f.a}</div>
          </div>
        ))}
      </div>

      <div style={{ background:'var(--navy)', borderRadius:16, padding:'24px', textAlign:'center', marginTop:32 }}>
        <h3 style={{ color:'#fff', fontFamily:'var(--font-display)', fontSize:'1.3rem', marginBottom:10 }}>Book Kedarnath Package from Haridwar</h3>
        <p style={{ color:'rgba(255,255,255,0.75)', fontSize:14, marginBottom:18 }}>₹6,499 all-inclusive · Pickup from Haridwar · Expert guide</p>
        <div style={{ display:'flex', gap:10, justifyContent:'center', flexWrap:'wrap' }}>
          <a href={`https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent('Namaste! I want to book Kedarnath Yatra from Haridwar 2026.')}`} target="_blank" rel="nofollow noopener noreferrer" style={{ background:'#25D366', color:'#fff', padding:'11px 22px', borderRadius:8, fontWeight:700, fontSize:13.5, textDecoration:'none' }}>💬 Book Now</a>
          View Package →
        </div>
      </div>
    
        {/* ── End-of-article booking CTA ── */}
        <BlogCTA variant="footer" intent="kedarnath" />
</article>
  </>);
}
