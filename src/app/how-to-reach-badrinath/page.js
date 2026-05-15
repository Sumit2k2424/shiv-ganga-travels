import Link from 'next/link';
import { SITE } from '@/data/packages';

export const metadata = {
  title: 'How to Reach Badrinath 2026 — Road & Route',
  description: 'How to reach Badrinath Dham 2026. Road route from Haridwar via Joshimath (320km, 9-10 hrs). Helicopter from Dehradun. No trekking needed.',
  keywords: ['how to reach badrinath','badrinath route from haridwar','haridwar to badrinath distance','joshimath to badrinath','badrinath by road 2026','nearest airport badrinath'],
  alternates: { canonical: `${SITE.baseUrl}/how-to-reach-badrinath` },
  openGraph: {
    title: 'How to Reach Badrinath 2026 — Road Route & Complete Guide',
    description: 'Road route, helicopter, train options — complete guide to reach Badrinath Dham from Haridwar, Delhi and Dehradun.',
    url: `${SITE.baseUrl}/how-to-reach-badrinath`, type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Reach Badrinath 2026 — Road Route & Complete Guide',
    description: 'Road route, helicopter, train options — complete guide to reach Badrinath Dham from Haridwar, Delhi and Dehradun.',
    images: [{ url: '/opengraph-image', alt: 'How to Reach Badrinath 2026 — Road Route & Complete Guide | Shiv Ganga Travels' }],
  },
};

const h2 = { fontFamily:'var(--font-display)', fontSize:'clamp(1.2rem,2.8vw,1.5rem)', fontWeight:700, color:'var(--navy)', marginBottom:14, marginTop:32 };
const p  = { fontSize:15.5, color:'#334155', lineHeight:1.85, marginBottom:16 };

export default function HowToReachBadrinath() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context':'https://schema.org','@type':'FAQPage',
        mainEntity: [
          { '@type':'Question', name:'How to reach Badrinath from Haridwar?',
            acceptedAnswer:{ '@type':'Answer', text:'Haridwar to Badrinath is approximately 320km by road via Rishikesh, Devprayag, Rudraprayag, Joshimath. The drive takes 9–10 hours. Badrinath is fully motorable — no trekking required.' }},
          { '@type':'Question', name:'What is the nearest airport to Badrinath?',
            acceptedAnswer:{ '@type':'Answer', text:'Jolly Grant Airport in Dehradun is the nearest airport, approximately 295km from Badrinath. Fly to Dehradun, then take a taxi to Joshimath (255km, ~7 hrs) and then to Badrinath (45km, 1.5 hrs).' }},
          { '@type':'Question', name:'Is there helicopter service to Badrinath?',
            acceptedAnswer:{ '@type':'Answer', text:'Yes. Helicopter service to Badrinath lands at Badrinath Helipad (adjacent to the temple). Flights operate from Sahastradhara Helipad in Dehradun. Book via IRCTC heliyatra portal only.' }},
        ],
      })}}/>

      <section style={{ background:'linear-gradient(145deg,var(--navy) 0%,var(--navy-mid) 60%,var(--teal) 100%)', padding:'56px 20px 44px', textAlign:'center' }}>
        <div style={{ maxWidth:820, margin:'0 auto' }}>
          <span style={{ background:'rgba(232,146,10,0.18)', color:'#FFD166', fontSize:11, fontWeight:700, letterSpacing:'0.12em', textTransform:'uppercase', padding:'5px 16px', borderRadius:100, display:'inline-block', marginBottom:16 }}>🗺️ Travel Guide · Badrinath</span>
          <h1 className="display-title" style={{ color:'#fff', fontSize:'clamp(1.8rem,4.5vw,3rem)', marginBottom:14 }}>
            How to Reach Badrinath Dham 2026
          </h1>
          <p style={{ color:'rgba(255,255,255,0.8)', fontSize:15, lineHeight:1.7 }}>
            Road, helicopter and train options — all routes from Haridwar, Delhi and Dehradun
          </p>
        </div>
      </section>

      <nav style={{ background:'var(--bg)', borderBottom:'1px solid var(--border)', padding:'10px 20px' }}>
        <div style={{ maxWidth:'var(--container)', margin:'0 auto', fontSize:12, color:'var(--text-muted)', display:'flex', gap:6, flexWrap:'wrap' }}>
          <Link href="/" style={{ color:'var(--navy)', textDecoration:'none' }}>Home</Link><span>›</span>
          <Link href="/badrinath-temple" style={{ color:'var(--navy)', textDecoration:'none' }}>Badrinath Temple</Link><span>›</span>
          <span>How to Reach</span>
        </div>
      </nav>

      <article style={{ maxWidth:900, margin:'0 auto', padding:'40px 20px 60px' }}>
        <div style={{ fontSize:12, color:'var(--text-muted)', marginBottom:16, textAlign:'right' }}>🗓️ Last updated: May 2026</div>

        <div style={{ background:'var(--navy)', borderRadius:14, padding:'18px 20px', marginBottom:28, display:'grid', gridTemplateColumns:'repeat(auto-fill,minmax(150px,1fr))', gap:10 }}>
          {[['Altitude','3,133m'],['From Haridwar','~320km by road'],['Drive Time','9–10 hrs'],['Trek Required','None (motorable)'],['Nearest Town','Joshimath (45km)'],['Temple Opens','Apr 23, 2026']].map(([k,v]) => (
            <div key={k}><div style={{ fontSize:11, color:'rgba(255,255,255,0.55)', marginBottom:2 }}>{k}</div><div style={{ fontWeight:700, fontSize:13, color:'#FFD166' }}>{v}</div></div>
          ))}
        </div>

        <p style={p}>
          Badrinath is the final and holiest stop on the Char Dham circuit — dedicated to Lord Vishnu, set dramatically between the Nar and Narayan ranges with the 6,596m Nilkantha peak soaring above. Like Gangotri, Badrinath is fully motorable — the temple sits right on the road at 3,133 metres. At 320km from Haridwar, it is the longest road journey of the four dhams, but well worth every kilometre.
        </p>

        <h2 style={h2}>Road Route — Haridwar to Badrinath</h2>
        <p style={p}>
          The classic route follows: <strong>Haridwar → Rishikesh → Devprayag → Srinagar → Rudraprayag → Chamoli → Joshimath → Badrinath</strong>. The entire 320km journey runs alongside the Alaknanda and Bhagirathi rivers. The stretch from Rudraprayag onwards is particularly scenic, passing the Panchprayag (five sacred river confluences). The final 45km from Joshimath to Badrinath is the most dramatic — a narrow road carved into a cliff face above the Alaknanda gorge.
        </p>

        <div style={{ background:'#fff', borderRadius:12, border:'1px solid var(--border)', overflow:'hidden', marginBottom:24 }}>
          {[
            { from:'Haridwar', to:'Rudraprayag', dist:'165km', time:'5 hrs', note:'Via Devprayag, Srinagar — good national highway' },
            { from:'Rudraprayag', to:'Joshimath', dist:'110km', time:'3.5 hrs', note:'Via Chamoli, Vishnuprayag — mountain road, scenic' },
            { from:'Joshimath', to:'Badrinath', dist:'45km', time:'1.5 hrs', note:'Final stretch — breathtaking Alaknanda gorge' },
            { from:'Badrinath', to:'Mana Village', dist:'3km', time:'15 mins', note:'Last Indian village before Tibet border — worth a visit' },
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

        <h2 style={h2}>Helicopter to Badrinath</h2>
        <p style={p}>
          Badrinath has a helipad directly adjacent to the temple complex — which means helicopter pilgrims land virtually at the temple gate. This is the most convenient helicopter arrangement of all four dhams. Flights operate from Sahastradhara Helipad in Dehradun, and the flight time is approximately 45 minutes. For the Char Dham helicopter package, Badrinath is typically Day 5 or Day 6. Book via the official IRCTC heliyatra portal only — not through any agent.
        </p>

        <h2 style={h2}>Joshimath — The Night Halt Before Badrinath</h2>
        <p style={p}>
          Joshimath (45km from Badrinath) is the standard overnight halt for Badrinath-bound pilgrims. This gives time for altitude acclimatisation before the final ascent to 3,133m. Joshimath also serves as the winter seat of the Badrinath deity (Lord Vishnu's idol is moved to Pandukheshwar/Joshimath from November to April). The town has good hotel options and is also the base for the Auli ski resort. Our packages include a comfortable night in Joshimath at a pre-booked property.
        </p>

        <div style={{ background:'var(--navy)', borderRadius:16, padding:'24px', textAlign:'center', marginTop:32 }}>
          <h3 style={{ color:'#fff', fontFamily:'var(--font-display)', fontSize:'1.2rem', marginBottom:8 }}>Book Badrinath as Part of Char Dham Yatra</h3>
          <p style={{ color:'rgba(255,255,255,0.7)', fontSize:13.5, marginBottom:16 }}>We handle transport, Joshimath halt, darshan arrangements, and Tapt Kund access.</p>
          <div style={{ display:'flex', gap:10, justifyContent:'center', flexWrap:'wrap' }}>
            <a href={`https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent('Namaste! I want to visit Badrinath as part of Char Dham Yatra 2026. Please share packages.')}`}
              target="_blank" rel="nofollow noopener noreferrer"
              style={{ background:'#25D366', color:'#fff', padding:'11px 22px', borderRadius:9, fontWeight:700, fontSize:13.5, textDecoration:'none' }}>💬 WhatsApp</a>
            <Link href="/packages/badrinath-yatra-package-2n-3d-haridwar" style={{ background:'rgba(255,255,255,0.12)', color:'#fff', padding:'11px 22px', borderRadius:9, fontWeight:700, fontSize:13.5, textDecoration:'none', border:'1px solid rgba(255,255,255,0.2)' }}>View Badrinath Package →</Link>
          </div>
        </div>

        <div style={{ borderTop:'1px solid var(--border)', paddingTop:24, marginTop:32 }}>
          <div style={{ fontWeight:700, fontSize:13.5, color:'var(--navy)', marginBottom:12 }}>Related guides</div>
          <div style={{ display:'flex', gap:10, flexWrap:'wrap' }}>
            {[['How to Reach Kedarnath','/blog/how-to-reach-kedarnath'],['Badrinath Weather','/badrinath-weather'],['Badrinath Temple Guide','/badrinath-temple'],['Haridwar to Badrinath Cab','/haridwar-to-badrinath-cab'],['Char Dham Route Map','/char-dham-yatra-route-map']].map(([l,h]) => (
              <Link key={h} href={h} style={{ background:'var(--bg)', border:'1px solid var(--border)', color:'var(--navy)', padding:'7px 14px', borderRadius:8, fontSize:12.5, fontWeight:600, textDecoration:'none' }}>{l} →</Link>
            ))}
          </div>
        </div>
      </article>
    </>
  );
}
