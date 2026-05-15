import Link from 'next/link';
import { SITE } from '@/data/packages';

export const metadata = {
  title: 'How to Reach Yamunotri 2026 — Trek & Route Guide',
  description: 'How to reach Yamunotri Dham 2026. Road route, helicopter, 6km trek from Janki Chatti. Distance from Haridwar and nearest railway station.',
  keywords: ['how to reach yamunotri','yamunotri route','haridwar to yamunotri','janki chatti to yamunotri','yamunotri trek','how to reach yamunotri from delhi','nearest railway station to yamunotri'],
  alternates: { canonical: `${SITE.baseUrl}/how-to-reach-yamunotri` },
  openGraph: {
    title: 'How to Reach Yamunotri 2026 — Road, Trek & Route Guide',
    description: 'Road route, helicopter, trekking options — complete guide to reach Yamunotri Dham from Haridwar, Delhi and Dehradun.',
    url: `${SITE.baseUrl}/how-to-reach-yamunotri`, type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Reach Yamunotri 2026 — Road, Trek & Route Guide',
    description: 'Road route, helicopter, trekking options — complete guide to reach Yamunotri Dham from Haridwar, Delhi and Dehradun.',
    images: [{ url: '/opengraph-image', alt: 'How to Reach Yamunotri 2026 — Road, Trek & Route Guide | Shiv Ganga Travels' }],
  },
};

const h2 = { fontFamily:'var(--font-display)', fontSize:'clamp(1.2rem,2.8vw,1.5rem)', fontWeight:700, color:'var(--navy)', marginBottom:14, marginTop:32 };
const p  = { fontSize:15.5, color:'#334155', lineHeight:1.85, marginBottom:16 };

export default function HowToReachYamunotri() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context':'https://schema.org','@type':'FAQPage',
        mainEntity: [
          { '@type':'Question', name:'How to reach Yamunotri from Haridwar?',
            acceptedAnswer:{ '@type':'Answer', text:'Haridwar to Janki Chatti (base of Yamunotri trek) is approximately 250km by road via NH94, Barkot and Hanuman Chatti. The drive takes 7–8 hours. From Janki Chatti, you trek 6km uphill to the Yamunotri temple (2.5–3 hrs).' }},
          { '@type':'Question', name:'What is the nearest railway station to Yamunotri?',
            acceptedAnswer:{ '@type':'Answer', text:'The nearest railway station to Yamunotri is Dehradun Railway Station (175km away) or Haridwar Railway Station (250km away). From either, hire a taxi or join a package vehicle to Janki Chatti.' }},
          { '@type':'Question', name:'Can I reach Yamunotri by helicopter?',
            acceptedAnswer:{ '@type':'Answer', text:'Yes. Helicopter service to Kharsali (1km from Yamunotri) operates from Sahastradhara Helipad in Dehradun. Flight time is about 45 minutes. Tickets are sold via official IRCTC heliyatra portal.' }},
        ],
      })}}/>

      <section style={{ background:'linear-gradient(145deg,var(--navy) 0%,var(--navy-mid) 60%,var(--teal) 100%)', padding:'56px 20px 44px', textAlign:'center' }}>
        <div style={{ maxWidth:820, margin:'0 auto' }}>
          <span style={{ background:'rgba(232,146,10,0.18)', color:'#FFD166', fontSize:11, fontWeight:700, letterSpacing:'0.12em', textTransform:'uppercase', padding:'5px 16px', borderRadius:100, display:'inline-block', marginBottom:16 }}>🗺️ Travel Guide · Yamunotri</span>
          <h1 className="display-title" style={{ color:'#fff', fontSize:'clamp(1.8rem,4.5vw,3rem)', marginBottom:14 }}>
            How to Reach Yamunotri Dham 2026
          </h1>
          <p style={{ color:'rgba(255,255,255,0.8)', fontSize:15, lineHeight:1.7 }}>
            Road, helicopter, train and trek options — all routes explained clearly
          </p>
        </div>
      </section>

      <nav style={{ background:'var(--bg)', borderBottom:'1px solid var(--border)', padding:'10px 20px' }}>
        <div style={{ maxWidth:'var(--container)', margin:'0 auto', fontSize:12, color:'var(--text-muted)', display:'flex', gap:6, flexWrap:'wrap' }}>
          <Link href="/" style={{ color:'var(--navy)', textDecoration:'none' }}>Home</Link><span>›</span>
          <Link href="/yamunotri-yatra" style={{ color:'var(--navy)', textDecoration:'none' }}>Yamunotri Yatra</Link><span>›</span>
          <span>How to Reach</span>
        </div>
      </nav>

      <article style={{ maxWidth:900, margin:'0 auto', padding:'40px 20px 60px' }}>
        <div style={{ fontSize:12, color:'var(--text-muted)', marginBottom:16, textAlign:'right' }}>🗓️ Last updated: May 2026</div>

        {/* Quick distance card */}
        <div style={{ background:'var(--navy)', borderRadius:14, padding:'18px 20px', marginBottom:28, display:'grid', gridTemplateColumns:'repeat(auto-fill,minmax(150px,1fr))', gap:10 }}>
          {[['Altitude','3,291m'],['Base Camp','Janki Chatti (2,650m)'],['Trek','6km from Janki Chatti'],['From Haridwar','~250km'],['From Dehradun','~175km'],['Temple Opens','Apr 19, 2026']].map(([k,v]) => (
            <div key={k}><div style={{ fontSize:11, color:'rgba(255,255,255,0.55)', marginBottom:2 }}>{k}</div><div style={{ fontWeight:700, fontSize:13, color:'#FFD166' }}>{v}</div></div>
          ))}
        </div>

        <p style={p}>
          Yamunotri is the first stop on the traditional Char Dham clockwise circuit. The temple itself sits at 3,291 metres, but all roads end at Janki Chatti (2,650m), from where a 6km mountain trek is the only way to reach the shrine on foot. This guide covers every option — by road, by helicopter, and the trek itself — so you can plan based on your group's age, fitness, and budget.
        </p>

        <h2 style={h2}>Road Route — Haridwar to Janki Chatti</h2>
        <p style={p}>
          The standard road route from Haridwar to Janki Chatti covers approximately 250km and takes 7–8 hours. The route follows: <strong>Haridwar → Rishikesh → Narendranagar → Chamba → Barkot → Hanuman Chatti → Janki Chatti</strong>. The road from Barkot onwards runs alongside the Yamuna River through deep gorges — it's narrow and winding in places, but has been significantly improved in recent years. Our drivers know every turn.
        </p>

        <div style={{ background:'#fff', borderRadius:12, border:'1px solid var(--border)', overflow:'hidden', marginBottom:24 }}>
          {[
            { from:'Haridwar', to:'Barkot', dist:'220km', time:'6–7 hrs', note:'NH94 — good road, scenic drive' },
            { from:'Barkot', to:'Hanuman Chatti', dist:'22km', time:'45 mins', note:'Winding mountain road, take it slow' },
            { from:'Hanuman Chatti', to:'Janki Chatti', dist:'6km', time:'20 mins', note:'Last motorable point for Yamunotri' },
            { from:'Janki Chatti', to:'Yamunotri Temple', dist:'6km trek', time:'2.5–3 hrs', note:'Uphill mountain trail' },
          ].map((r, i) => (
            <div key={r.from} style={{ display:'grid', gridTemplateColumns:'1fr 1fr 80px 80px auto', gap:8, padding:'10px 14px', borderBottom:'1px solid var(--border)', background: i%2===0 ? '#fff' : 'var(--bg)', alignItems:'center', fontSize:13 }}>
              <span style={{ fontWeight:600, color:'var(--navy)' }}>{r.from}</span>
              <span style={{ color:'#475569' }}>→ {r.to}</span>
              <span style={{ color:'var(--teal)', fontWeight:700 }}>{r.dist}</span>
              <span style={{ color:'#475569' }}>{r.time}</span>
              <span style={{ fontSize:12, color:'var(--text-muted)' }}>{r.note}</span>
            </div>
          ))}
        </div>

        <h2 style={h2}>The Trek — Janki Chatti to Yamunotri Temple</h2>
        <p style={p}>
          The 6km mountain trail from Janki Chatti to the Yamunotri temple climbs 641 metres in elevation. The path passes through pine and rhododendron forests alongside the Yamuna River, with several chai stops and rest points along the way. Most reasonably fit adults complete it in 2.5–3 hours. If you're taking elderly family members or have knee problems, ponies and doli (palanquin) services are available from Janki Chatti at fixed government-regulated rates.
        </p>

        <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(200px,1fr))', gap:10, marginBottom:24 }}>
          {[
            { type:'On foot', cost:'Free', time:'2.5–3 hrs', note:'Moderate fitness required. Trekking poles help on the descent.' },
            { type:'Pony', cost:'₹1,000–1,500 one way', time:'2–2.5 hrs', note:'Book at Janki Chatti pony stand. Government-regulated. Ponies handle the climb well.' },
            { type:'Doli (Palanquin)', cost:'₹3,000–5,000 one way', time:'3–4 hrs', note:'Carried by 4 porters. Recommended for elderly, mobility-limited pilgrims.' },
          ].map(t => (
            <div key={t.type} style={{ background:'#fff', border:'1px solid var(--border)', borderRadius:10, padding:'14px' }}>
              <div style={{ fontWeight:700, color:'var(--navy)', fontSize:13.5, marginBottom:4 }}>{t.type}</div>
              <div style={{ color:'#E8920A', fontWeight:700, fontSize:13, marginBottom:4 }}>{t.cost}</div>
              <div style={{ fontSize:12.5, color:'#475569' }}>{t.note}</div>
            </div>
          ))}
        </div>

        <h2 style={h2}>Helicopter to Yamunotri (Kharsali Helipad)</h2>
        <p style={p}>
          Helicopter service to Yamunotri lands at Kharsali Helipad, which is about 1km from the temple. From Kharsali, you still walk approximately 1km (or take a doli). Helicopters operate from Dehradun's Sahastradhara Helipad. All tickets must be booked via the official IRCTC heliyatra portal — do not pay any agent for "helicopter tickets" as scams are widespread in this space. The helicopter option is particularly recommended for elderly pilgrims or those with cardiac conditions.
        </p>

        <h2 style={h2}>Nearest Airport and Railway Station</h2>
        <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(min(100%,280px),1fr))', gap:12, marginBottom:24 }}>
          {[
            { icon:'✈️', type:'Nearest Airport', name:'Jolly Grant Airport, Dehradun', dist:'~175km from Janki Chatti', note:'IndiGo, Air India, SpiceJet fly daily from Delhi (40 mins). Taxi to Barkot from airport: ~5 hrs.' },
            { icon:'🚂', type:'Nearest Railway Station', name:'Haridwar or Dehradun', dist:'250km / 175km', note:'Haridwar has more train options from across India. Dehradun has direct trains from Delhi (Shatabdi, Jan Shatabdi).' },
          ].map(x => (
            <div key={x.type} style={{ background:'#fff', border:'1px solid var(--border)', borderRadius:10, padding:'14px' }}>
              <div style={{ fontSize:22, marginBottom:6 }}>{x.icon}</div>
              <div style={{ fontWeight:700, fontSize:12.5, color:'var(--text-muted)', textTransform:'uppercase', letterSpacing:'0.05em', marginBottom:4 }}>{x.type}</div>
              <div style={{ fontWeight:700, color:'var(--navy)', fontSize:14, marginBottom:4 }}>{x.name}</div>
              <div style={{ fontSize:12, color:'#475569' }}>{x.dist}</div>
              <div style={{ fontSize:12.5, color:'#475569', marginTop:6 }}>{x.note}</div>
            </div>
          ))}
        </div>

        <div style={{ background:'var(--navy)', borderRadius:16, padding:'24px', textAlign:'center', marginTop:32 }}>
          <h3 style={{ color:'#fff', fontFamily:'var(--font-display)', fontSize:'1.2rem', marginBottom:8 }}>Include Yamunotri in Your Char Dham Yatra</h3>
          <p style={{ color:'rgba(255,255,255,0.7)', fontSize:13.5, marginBottom:16 }}>We handle all transportation, pony arrangements, and hotel bookings — you focus on the pilgrimage.</p>
          <div style={{ display:'flex', gap:10, justifyContent:'center', flexWrap:'wrap' }}>
            <a href={`https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent('Namaste! I want to visit Yamunotri as part of Char Dham Yatra 2026. Please share packages.')}`}
              target="_blank" rel="nofollow noopener noreferrer"
              style={{ background:'#25D366', color:'#fff', padding:'11px 22px', borderRadius:9, fontWeight:700, fontSize:13.5, textDecoration:'none' }}>💬 WhatsApp</a>
            <Link href="/yamunotri-yatra" style={{ background:'rgba(255,255,255,0.12)', color:'#fff', padding:'11px 22px', borderRadius:9, fontWeight:700, fontSize:13.5, textDecoration:'none', border:'1px solid rgba(255,255,255,0.2)' }}>View Yamunotri Packages →</Link>
          </div>
        </div>

        <div style={{ borderTop:'1px solid var(--border)', paddingTop:24, marginTop:32 }}>
          <div style={{ fontWeight:700, fontSize:13.5, color:'var(--navy)', marginBottom:12 }}>Related guides</div>
          <div style={{ display:'flex', gap:10, flexWrap:'wrap' }}>
            {[['How to Reach Gangotri','/how-to-reach-gangotri'],['How to Reach Badrinath','/how-to-reach-badrinath'],['Yamunotri Weather','/yamunotri-weather'],['Packing List','/blog/char-dham-yatra-packing-list'],['Char Dham Route Map','/char-dham-yatra-route-map']].map(([l,h]) => (
              <Link key={h} href={h} style={{ background:'var(--bg)', border:'1px solid var(--border)', color:'var(--navy)', padding:'7px 14px', borderRadius:8, fontSize:12.5, fontWeight:600, textDecoration:'none' }}>{l} →</Link>
            ))}
          </div>
        </div>
      </article>
    </>
  );
}
