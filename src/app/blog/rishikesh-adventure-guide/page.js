import Link from 'next/link';
import { SITE } from '@/data/packages';
import BlogCTA from '@/components/BlogCTA';
import BlogAuthor from '@/components/BlogAuthor';
export const metadata = {
  title: 'Rishikesh Adventure Guide 2026 – Rafting Prices, Bungee Jumping & Beach Camping',
  description: 'Complete Rishikesh adventure guide 2026: river rafting ₹600–1,200, bungee jumping ₹3,550, beach camping ₹1,200/night. Best time to visit, booking tips, and safety guide for all activities.',
  keywords: ['rishikesh adventure guide 2026', 'rishikesh river rafting price 2026', 'rishikesh bungee jumping price', 'rishikesh camping cost', 'rishikesh adventure package', 'rishikesh rafting booking', 'rishikesh best time to visit'],
  alternates: { canonical: `${SITE.baseUrl}/blog/rishikesh-adventure-guide` },
};
function Schema() {
  const a = { '@context':'https://schema.org','@type':'BlogPosting', headline:'Rishikesh Adventure Guide 2026 — Rafting, Bungee, Camping & What It Really Costs', author:{'@type':'Organization',name:SITE.name,url:SITE.baseUrl}, publisher:{'@type':'Organization',name:SITE.name,url:SITE.baseUrl}, datePublished:'2025-03-28', dateModified:'2026-01-01', mainEntityOfPage:`${SITE.baseUrl}/blog/rishikesh-adventure-guide` };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html:JSON.stringify(a) }}/>
}
const h2 = { fontFamily:'var(--font-display)', fontSize:'clamp(1.3rem,2.5vw,1.75rem)', fontWeight:600, color:'var(--navy)', letterSpacing:'-0.02em', marginBottom:12, marginTop:36 };
const p  = { fontSize:15, color:'var(--text-mid)', lineHeight:1.85, marginBottom:16 };
export default function RishikeshAdventureGuide() {
  return (<>
    <Schema/>
    <section style={{ background:'linear-gradient(145deg,var(--navy) 0%,#0B7B8B 60%,var(--teal) 100%)', padding:'56px 20px 44px', textAlign:'center' }}>
      <div style={{ maxWidth:820, margin:'0 auto' }}>
        <span style={{ background:'rgba(232,146,10,0.18)', color:'#FFD166', fontSize:11, fontWeight:700, letterSpacing:'0.12em', textTransform:'uppercase', padding:'5px 16px', borderRadius:100, display:'inline-block', marginBottom:16 }}>Adventure Guide · 2026</span>
        <h1 className="display-title" style={{ color:'#fff', fontSize:'clamp(1.8rem,4.5vw,3rem)', marginBottom:14 }}>Rishikesh Adventure Guide 2026 — Rafting, Bungee & Camping</h1>
        <p style={{ color:'rgba(255,255,255,0.8)', fontSize:15, lineHeight:1.7 }}>Adventure capital of India · White water rafting · 83m bungee · Beach camping · Yoga & spirituality</p>
      </div>
    </section>
    <nav style={{ background:'var(--bg)', borderBottom:'1px solid var(--border)', padding:'10px 20px' }}>
      <div style={{ maxWidth:'var(--container)', margin:'0 auto', fontSize:12, color:'var(--text-muted)', display:'flex', gap:6, flexWrap:'wrap' }}>
        Home<span>›</span>
        Blog<span>›</span>
        <span>Rishikesh Adventure Guide 2026</span>
      </div>
    </nav>
    <article className="blog-container" itemScope itemType="https://schema.org/Article">

        {/* Author byline — E-E-A-T signal */}
        <BlogAuthor variant="top" author="sumit" />
      <p style={{ fontSize:15.5, color:'#334155', lineHeight:1.85, marginBottom:16 }}>Rishikesh is one of those rare places that genuinely delivers on its hype. The Ganga rushing through a gorge of forested hills. Ancient temples and modern ashrams side by side. Yoga studios next to bungee platforms. The same river that witnesses solemn Ganga aarti at sunset carries shrieking rafters through Grade IV rapids in the morning. It's a contradiction that somehow makes perfect sense.</p>
      <p style={{ fontSize:15.5, color:'#334155', lineHeight:1.85, marginBottom:16 }}>This guide covers everything for an <strong>Rishikesh adventure trip in 2026</strong> — what activities are actually worth your money, the honest costs (not the inflated tourist prices), the best time to go, and what not to miss beyond the adventure sports.</p>

      <h2 style={h2}>River Rafting — The Main Event</h2>
      <p style={{ fontSize:15.5, color:'#334155', lineHeight:1.85, marginBottom:16 }}>Rishikesh river rafting on the Ganga is one of the best white-water experiences in Asia. The stretch from Shivpuri to Rishikesh covers <strong>16 km</strong> with multiple rapids ranging from Grade II to Grade IV. No prior experience needed — trained instructors are always on board.</p>
      <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(180px,1fr))', gap:10, marginBottom:20 }}>
        {[
          { route:'Marine Drive to Rishikesh', dist:'26 km', price:'₹700–900/pp', grade:'Grade III-IV', note:'Most popular. 3–4 hours. Best rapids.' },
          { route:'Shivpuri to Rishikesh', dist:'16 km', price:'₹500–700/pp', grade:'Grade II-III', note:'Moderate. Good for beginners.' },
          { route:'Brahampuri to Rishikesh', dist:'9 km', price:'₹300–450/pp', grade:'Grade II', note:'Gentle. Perfect for families.' },
        ].map(r => (
          <div key={r.route} style={{ background:'#fff', borderRadius:10, padding:'12px', border:'1px solid var(--border)' }}>
            <div style={{ fontWeight:700, fontSize:13, color:'var(--navy)', marginBottom:4 }}>{r.route}</div>
            <div style={{ fontSize:12, color:'var(--text-muted)', marginBottom:4 }}>{r.dist} · {r.grade}</div>
            <div style={{ fontWeight:700, fontSize:16, color:'var(--teal-dark)', marginBottom:4 }}>{r.price}</div>
            <div style={{ fontSize:12, color:'var(--text-mid)', fontStyle:'italic' }}>{r.note}</div>
          </div>
        ))}
      </div>
      <p style={{ ...p, fontSize:13.5 }}>💡 <strong>Best time for rafting:</strong> October to May. Avoid July–August (monsoon — water levels too high, safety risk). October–November has perfect water levels and weather.</p>

      <h2 style={h2}>Bungee Jumping — 83 Metres of Pure Terror</h2>
      <p style={{ fontSize:15.5, color:'#334155', lineHeight:1.85, marginBottom:16 }}>Jumpin Heights at Mohan Chatti, 22km from Rishikesh, runs the <strong>highest fixed-platform bungee jump in India at 83 metres</strong>. It's genuinely terrifying and genuinely incredible. Price: <strong>₹3,550 per person</strong>. Includes certificate and video (optional extra). Weight limit: 40–110 kg. Minimum age: 18 years.</p>
      <p style={{ fontSize:15.5, color:'#334155', lineHeight:1.85, marginBottom:16 }}>They also operate Giant Swing (₹3,000) and Flying Fox zipline (₹1,500) at the same location. All bookings should be made in advance — they fill up on weekends and holidays. We pre-book Jumpin Heights slots for all our guests as part of the adventure package.</p>

      <h2 style={h2}>Beach Camping on the Ganga</h2>
      <p style={{ fontSize:15.5, color:'#334155', lineHeight:1.85, marginBottom:16 }}>This is the Rishikesh experience that most tourists miss. Spending a night in a camp on the Ganga riverbank — bonfire, stars overhead, the river 20 metres away, mountains on all sides. It sounds romantic because it is.</p>
      <p style={{ fontSize:15.5, color:'#334155', lineHeight:1.85, marginBottom:16 }}>Our <strong>Rishikesh Adventure Package (2N/3D)</strong> includes two nights of beach camping with tents, sleeping bags, all meals, bonfire, and morning yoga. The camps are comfortable — not glamping luxury, but clean, safe, and genuinely beautiful.</p>

      <h2 style={h2}>The Spiritual Side — Don't Miss This</h2>
      <p style={{ fontSize:15.5, color:'#334155', lineHeight:1.85, marginBottom:16 }}>Rishikesh has two personalities and both are worth experiencing. Beyond the rafting and bungee, make time for:</p>
      <ul style={{ paddingLeft:20, color:'var(--text-mid)', fontSize:14.5, lineHeight:2.2, marginBottom:20 }}>
        <li><strong>Parmarth Niketan Ganga Aarti (6 PM):</strong> The largest Ganga Aarti in India. Hundreds of priests, fire bowls, chanting, floating diyas. Genuinely moving even for non-religious visitors.</li>
        <li><strong>Beatles Ashram (Maharishi Mahesh Yogi):</strong> The ashram where the Beatles stayed in 1968 and wrote much of the White Album. Now open as a cultural art park with murals and meditation spaces.</li>
        <li><strong>Laxman Jhula & Ram Jhula:</strong> Suspension bridges over the Ganga with temples on both banks. Best explored on foot in the early morning before the crowds arrive.</li>
        <li><strong>Morning Triveni Ghat dip:</strong> 5 AM, the Ganga glowing in the dawn light. Priests performing morning aarti. Possibly the most peaceful 30 minutes in India.</li>
      </ul>

      <h2 style={h2}>Where to Stay — Honest Area-by-Area Guide</h2>
      <p style={p}><strong>Tapovan:</strong> The yoga and traveller hub. Best hotels and cafes are here. Rooms ₹1,200–4,500. About 3km from the main ashram belt but worth it for the quality of accommodation. Where most of our clients prefer to stay.</p>
      <p style={p}><strong>Laxman Jhula area:</strong> Older Rishikesh atmosphere. Authentic ashram setting on the river. Properties are simpler, often guesthouse-style. Rooms ₹600–2,500. Genuinely the soul of Rishikesh, but newer buildings are now far from the river.</p>
      <p style={p}><strong>Ram Jhula / Swarg Ashram:</strong> Pedestrian-only zone, completely free of vehicles. Lined with ashrams and small dharamshalas. Rooms ₹400–1,500. Spiritual atmosphere is strongest here, but expect minimal amenities and shared bathrooms in many places.</p>
      <p style={p}><strong>Main Rishikesh town:</strong> The municipal area near the railway station. Mid-range business hotels ₹1,800–3,500. Not where you come for the Rishikesh experience, but useful if you arrive late by train.</p>

      <h2 style={h2}>Food — Where Locals & Long-Stayers Actually Eat</h2>
      <p style={p}>Rishikesh is a vegetarian-only town by religious convention — no meat, no eggs, no alcohol within the municipal boundary. This sounds restrictive but the vegetarian food scene here is one of the best in India. The Little Buddha Cafe and Ramana's Garden (in Tapovan) serve genuinely good international vegetarian. The German Bakery near Laxman Jhula has been operating since 1985. For Indian food, the Chotiwala Restaurant near Ram Jhula has been serving the same thalis since 1958 — the kind of place that doesn't need to change. For chai, just sit anywhere along the ghats early morning.</p>

      <h2 style={h2}>Combining Rishikesh with the Char Dham</h2>
      <p style={p}>The natural pattern most of our pilgrims follow: 1–2 nights in Haridwar (Ganga aarti and main ghats), 1–2 nights in Rishikesh (river activities, ashram visit, optional rafting), then the Char Dham circuit. Rishikesh works particularly well as a soft-start to the mountain journey — you are already at 356m altitude, your body begins acclimatising, and you experience the holy Ganga before it becomes glacier-fed at Devprayag. Several of our 11-day Char Dham packages include 1 night Rishikesh built into the start.</p>

      <h2 style={h2}>Frequently Asked Questions</h2>
      <div style={{ marginBottom:24 }}>
        {[
          { q:'Is Rishikesh safe for solo female travellers?', a:'Yes — Rishikesh is one of the safer Indian destinations for solo women, especially in the Tapovan and Swarg Ashram areas where most travellers stay. The yoga community is international and welcoming. Standard precautions apply at night.' },
          { q:'What is the best month to visit Rishikesh for rafting?', a:'March–April and September–November. Summer (June) gets hot. Monsoon (July–August) suspends rafting. Winter (December–February) is too cold for water activities but excellent for ashram stays and yoga.' },
          { q:'Can I visit Rishikesh in one day from Haridwar?', a:'Yes — Rishikesh is only 25km from Haridwar (45 min by car). A day trip covering Laxman Jhula, Beatles Ashram, and Parmarth Niketan aarti is feasible. We arrange day-trip cars from Haridwar.' },
          { q:'Is alcohol available in Rishikesh?', a:'No. Rishikesh is officially a dry city as a holy town. The nearest legal alcohol is in Haridwar or Dehradun. Most travellers respect this — the atmosphere is part of why Rishikesh feels different from other Indian destinations.' },
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
          {'@type':'Question',name:'Is Rishikesh safe for solo female travellers?',acceptedAnswer:{'@type':'Answer',text:'Yes — Rishikesh is one of the safer Indian destinations for solo women, especially in the Tapovan and Swarg Ashram areas. Standard precautions apply at night.'}},
          {'@type':'Question',name:'What is the best month to visit Rishikesh for rafting?',acceptedAnswer:{'@type':'Answer',text:'March–April and September–November. Summer is hot, monsoon suspends rafting, winter is too cold for water activities.'}},
          {'@type':'Question',name:'Can I visit Rishikesh in one day from Haridwar?',acceptedAnswer:{'@type':'Answer',text:'Yes — Rishikesh is only 25km from Haridwar (45 min by car). A day trip is feasible.'}},
          {'@type':'Question',name:'Is alcohol available in Rishikesh?',acceptedAnswer:{'@type':'Answer',text:'No. Rishikesh is officially a dry city as a holy town. The nearest legal alcohol is in Haridwar or Dehradun.'}},
        ],
      }) }} />

      <div style={{ background:'linear-gradient(135deg,var(--navy),var(--teal))', borderRadius:16, padding:'24px', textAlign:'center', marginTop:32 }}>
        <h3 style={{ color:'#fff', fontFamily:'var(--font-display)', fontSize:'1.3rem', marginBottom:10 }}>Book Rishikesh Adventure Package</h3>
        <p style={{ color:'rgba(255,255,255,0.8)', fontSize:14, marginBottom:18 }}>₹4,999 per person · 2N/3D · Rafting + Camping + Ganga Aarti from Haridwar</p>
        <div style={{ display:'flex', gap:10, justifyContent:'center', flexWrap:'wrap' }}>
          <a href={`https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent('Namaste! I want to book the Rishikesh Adventure package 2026.')}`} target="_blank" rel="nofollow noopener noreferrer" style={{ background:'#fff', color:'var(--navy)', padding:'11px 22px', borderRadius:8, fontWeight:700, fontSize:13.5, textDecoration:'none' }}>💬 Book Now</a>
          View Package →
        </div>
      </div>
    
        {/* ── End-of-article booking CTA ── */}
        <BlogCTA variant="footer" intent="info" />
</article>
  </>);
}
