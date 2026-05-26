import Link from 'next/link';
import { SITE } from '@/data/packages';
import BlogCTA from '@/components/BlogCTA';
import BlogAuthor from '@/components/BlogAuthor';
export const metadata = {
  title: 'Haridwar to Kedarnath Distance, Route & Travel Guide 2026 – All Options Explained',
  description: 'Haridwar to Kedarnath is 228km by road + 16km trek. Complete 2026 guide: journey time, best stops, cab vs bus options, accommodation at Sonprayag and Guptkashi. Packages from ₹6,499.',
  keywords: ['haridwar to kedarnath distance 2026', 'haridwar to kedarnath route', 'haridwar to kedarnath by road', 'haridwar to kedarnath travel guide', 'haridwar kedarnath trip 2026', 'haridwar to kedarnath cab fare'],
  alternates: { canonical: `${SITE.baseUrl}/blog/haridwar-to-kedarnath` },
};
function Schema() {
  const a = { '@context':'https://schema.org','@type':'BlogPosting', headline:'Haridwar to Kedarnath Distance, Route & Travel Guide 2026', author:{'@type':'Organization',name:SITE.name,url:SITE.baseUrl}, publisher:{'@type':'Organization',name:SITE.name,url:SITE.baseUrl}, datePublished:'2025-03-10', dateModified:'2026-01-01', mainEntityOfPage:`${SITE.baseUrl}/blog/haridwar-to-kedarnath` };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html:JSON.stringify(a) }}/>
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

      <h2 style={h2}>What the 8-Hour Drive Actually Looks Like</h2>
      <p style={p}>Most pilgrims underestimate the drive. The first 100km from Haridwar — through Rishikesh, Devprayag, and up to Srinagar Garhwal — is smooth four-lane highway in 2026 after the Char Dham Pariyojana widening. After Srinagar, the road narrows and the real mountain driving begins. Rudraprayag onwards has switchbacks every few minutes; sensitive stomachs should take a Vomicid or Avomine 30 minutes before this stretch.</p>
      <p style={p}>The single most important advice we give every pilgrim: <strong>start from Haridwar no later than 4:30 AM</strong>. This gets you to Sonprayag before 1 PM, gives you time for the shared jeep to Gaurikund, and leaves daylight for the first kilometre of the trek if you are doing a same-day climb. Pilgrims who start at 7 AM consistently arrive at Sonprayag after 3 PM, miss the day's trekking window, and lose a full day from the itinerary.</p>

      <h2 style={h2}>Where to Break the Journey — Best Overnight Stops</h2>
      <p style={p}><strong>Devprayag (75 km from Haridwar):</strong> The confluence of Bhagirathi and Alaknanda — the official birthplace of the Ganga. A short stop here for tea and photos is worth it. Not a place to stay overnight.</p>
      <p style={p}><strong>Rudraprayag (162 km):</strong> The largest town on the route. Decent hotels (₹1,500–3,000), good food at the Bharat Bhojanalay near the bus stand. A reasonable place to break the journey if you started late from Haridwar.</p>
      <p style={p}><strong>Guptkashi (212 km):</strong> Our strongly recommended overnight stop. Sitting at 1,319m, it provides crucial acclimatisation before the climb to Kedarnath at 3,583m. Hotels are clean and reasonably priced (₹800–4,000). Most of our Kedarnath packages include this overnight by design.</p>
      <p style={p}><strong>Sonprayag (243 km):</strong> The road ends here for private vehicles. Shared jeeps run the final 5km to Gaurikund (₹50/seat). Limited basic accommodation if you need it.</p>

      <h2 style={h2}>Helicopter — When It Is Genuinely Worth the Cost</h2>
      <p style={p}>The helicopter from Phata to Kedarnath (or Sersi/Guptkashi to Kedarnath) takes 7–10 minutes and costs ₹2,800–3,500 one way per person. For a fit pilgrim under 55, the trek is part of the spiritual experience and the helicopter feels like skipping the journey. For anyone over 60, anyone with a knee or heart condition, or anyone on a strict 1-day Kedarnath schedule, the helicopter is not a luxury — it is the right choice.</p>
      <p style={p}>One thing operators do not always disclose: helicopter slots are weather-dependent and can be cancelled with as little as 30 minutes notice. We always recommend a hybrid plan — helicopter one way, trek the other way, with a buffer day at Guptkashi in case of cancellation. Our team handles all helicopter booking through IRCTC-approved operators.</p>

      <h2 style={h2}>Frequently Asked Questions</h2>
      <div style={{ marginBottom:24 }}>
        {[
          { q:'What is the exact distance from Haridwar to Kedarnath?', a:'225 km by road from Haridwar to Sonprayag (where private vehicles must stop). From Sonprayag, a shared jeep covers the final 5km to Gaurikund. From Gaurikund, the 16km trek begins. Total: 246 km from Haridwar to Kedarnath temple.' },
          { q:'How long does the Haridwar to Kedarnath trip take?', a:'Drive time Haridwar to Sonprayag: 7–9 hours including breaks. With an overnight at Guptkashi (recommended), the trip is 2 days minimum (Day 1: Haridwar to Guptkashi, Day 2: Guptkashi to Kedarnath). Same-day Haridwar to Kedarnath is technically possible but exhausting and not advised.' },
          { q:'Is there a direct bus from Haridwar to Kedarnath?', a:'Yes — GMOU and Uttarakhand State Transport buses run from Haridwar/Rishikesh ISBT to Sonprayag during the yatra season (May–October). The trip takes 10–12 hours by bus. Not recommended for senior pilgrims due to the rough ride.' },
          { q:'Can I take my own car to Kedarnath?', a:'Yes, up to Sonprayag (243 km from Haridwar). From Sonprayag onwards, only authorised shared jeeps are allowed for the final 5km to Gaurikund. Parking at Sonprayag costs ₹100–200 per day.' },
        ].map(faq => (
          <details key={faq.q} style={{ background:'#fff', border:'1px solid var(--border)', borderRadius:10, padding:'12px 16px', marginBottom:8 }}>
            <summary style={{ fontWeight:700, fontSize:14, color:'var(--navy)', cursor:'pointer' }}>{faq.q}</summary>
            <p style={{ margin:'10px 0 0', fontSize:14, color:'var(--text-mid)', lineHeight:1.75 }}>{faq.a}</p>
          </details>
        ))}
      </div>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context':'https://schema.org','@type':'FAQPage',
        mainEntity:[
          {'@type':'Question',name:'What is the exact distance from Haridwar to Kedarnath?',acceptedAnswer:{'@type':'Answer',text:'225 km by road from Haridwar to Sonprayag, then 5km shared jeep to Gaurikund, then 16km trek to Kedarnath temple.'}},
          {'@type':'Question',name:'How long does the Haridwar to Kedarnath trip take?',acceptedAnswer:{'@type':'Answer',text:'7–9 hours drive plus overnight at Guptkashi for acclimatisation, then trek day to Kedarnath. Minimum 2 days.'}},
          {'@type':'Question',name:'Is there a direct bus from Haridwar to Kedarnath?',acceptedAnswer:{'@type':'Answer',text:'Yes — GMOU buses run to Sonprayag during yatra season. Not recommended for senior pilgrims.'}},
        ],
      }) }} />

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
