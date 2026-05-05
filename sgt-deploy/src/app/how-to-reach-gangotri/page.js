import Link from 'next/link';
import { SITE } from '@/data/packages';

export const metadata = {
  title: 'How to Reach Gangotri 2026 — Road Route, Helicopter & Distance from Haridwar',
  description: 'Complete guide on how to reach Gangotri Dham 2026. Road route from Haridwar via Uttarkashi, nearest airport, helicopter options, distance and driving time.',
  keywords: ['how to reach gangotri','gangotri route from haridwar','haridwar to gangotri distance','uttarkashi to gangotri','gangotri by road','nearest airport gangotri 2026'],
  alternates: { canonical: `${SITE.baseUrl}/how-to-reach-gangotri` },
  openGraph: {
    title: 'How to Reach Gangotri 2026 — Road Route & Guide',
    description: 'Road route, helicopter, train options — complete guide to reach Gangotri Dham from Haridwar, Delhi and Dehradun.',
    url: `${SITE.baseUrl}/how-to-reach-gangotri`, type: 'article',
  },
};

const h2 = { fontFamily:'var(--font-display)', fontSize:'clamp(1.2rem,2.8vw,1.5rem)', fontWeight:700, color:'var(--navy)', marginBottom:14, marginTop:32 };
const p  = { fontSize:15.5, color:'#334155', lineHeight:1.85, marginBottom:16 };

export default function HowToReachGangotri() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context':'https://schema.org','@type':'FAQPage',
        mainEntity: [
          { '@type':'Question', name:'How to reach Gangotri from Haridwar?',
            acceptedAnswer:{ '@type':'Answer', text:'Haridwar to Gangotri is approximately 265km by road via Rishikesh, Tehri, Uttarkashi. The drive takes 7–8 hours. Gangotri is directly accessible by road — no trekking required to reach the temple.' }},
          { '@type':'Question', name:'What is the nearest airport to Gangotri?',
            acceptedAnswer:{ '@type':'Answer', text:'The nearest airport to Gangotri is Jolly Grant Airport in Dehradun, approximately 230km away. From Dehradun, take a taxi to Uttarkashi (180km, ~5 hrs) and then to Gangotri (100km, ~3 hrs).' }},
          { '@type':'Question', name:'Is there a helicopter to Gangotri?',
            acceptedAnswer:{ '@type':'Answer', text:'Yes. Helicopter service to Harsil (near Gangotri) operates from Sahastradhara Helipad, Dehradun. From Harsil, Gangotri is about 24km by road. Book via IRCTC heliyatra portal.' }},
        ],
      })}}/>

      <section style={{ background:'linear-gradient(145deg,var(--navy) 0%,var(--navy-mid) 60%,var(--teal) 100%)', padding:'56px 20px 44px', textAlign:'center' }}>
        <div style={{ maxWidth:820, margin:'0 auto' }}>
          <span style={{ background:'rgba(232,146,10,0.18)', color:'#FFD166', fontSize:11, fontWeight:700, letterSpacing:'0.12em', textTransform:'uppercase', padding:'5px 16px', borderRadius:100, display:'inline-block', marginBottom:16 }}>🗺️ Travel Guide · Gangotri</span>
          <h1 className="display-title" style={{ color:'#fff', fontSize:'clamp(1.8rem,4.5vw,3rem)', marginBottom:14 }}>
            How to Reach Gangotri Dham 2026
          </h1>
          <p style={{ color:'rgba(255,255,255,0.8)', fontSize:15, lineHeight:1.7 }}>
            Road, helicopter and train options — all routes from Haridwar, Delhi and Dehradun
          </p>
        </div>
      </section>

      <nav style={{ background:'var(--bg)', borderBottom:'1px solid var(--border)', padding:'10px 20px' }}>
        <div style={{ maxWidth:'var(--container)', margin:'0 auto', fontSize:12, color:'var(--text-muted)', display:'flex', gap:6, flexWrap:'wrap' }}>
          <Link href="/" style={{ color:'var(--navy)', textDecoration:'none' }}>Home</Link><span>›</span>
          <Link href="/gangotri-yatra" style={{ color:'var(--navy)', textDecoration:'none' }}>Gangotri Yatra</Link><span>›</span>
          <span>How to Reach</span>
        </div>
      </nav>

      <article style={{ maxWidth:900, margin:'0 auto', padding:'40px 20px 60px' }}>
        <div style={{ fontSize:12, color:'var(--text-muted)', marginBottom:16, textAlign:'right' }}>🗓️ Last updated: May 2026</div>

        <div style={{ background:'var(--navy)', borderRadius:14, padding:'18px 20px', marginBottom:28, display:'grid', gridTemplateColumns:'repeat(auto-fill,minmax(150px,1fr))', gap:10 }}>
          {[['Altitude','3,415m'],['From Haridwar','~265km by road'],['Drive Time','7–8 hrs'],['Trek Required','None (motor road)'],['Nearest City','Uttarkashi (100km)'],['Temple Opens','Apr 19, 2026']].map(([k,v]) => (
            <div key={k}><div style={{ fontSize:11, color:'rgba(255,255,255,0.55)', marginBottom:2 }}>{k}</div><div style={{ fontWeight:700, fontSize:13, color:'#FFD166' }}>{v}</div></div>
          ))}
        </div>

        <p style={p}>
          Gangotri has one significant advantage over the other three Char Dhams — you can drive all the way to the temple itself. There is no mandatory trek. The Gangotri temple sits directly beside the motorable road at 3,415 metres on the banks of the Bhagirathi River. This makes it the most accessible dham for elderly pilgrims and families with children. The 265km drive from Haridwar passes through some of the most dramatic Himalayan scenery in India.
        </p>

        <h2 style={h2}>Road Route — Haridwar to Gangotri</h2>
        <p style={p}>
          The route follows: <strong>Haridwar → Rishikesh → Devprayag → Tehri → Dharasu → Uttarkashi → Gangotri</strong>. The road is NH94 until Uttarkashi, and then a state highway for the final 100km to Gangotri. The Uttarkashi–Gangotri stretch runs alongside the Bhagirathi River through narrow gorges — it is scenic but requires an experienced hill driver.
        </p>

        <div style={{ background:'#fff', borderRadius:12, border:'1px solid var(--border)', overflow:'hidden', marginBottom:24 }}>
          {[
            { from:'Haridwar', to:'Uttarkashi', dist:'165km', time:'5–6 hrs', note:'Via Tehri–Dharasu — good road, some hairpin bends' },
            { from:'Uttarkashi', to:'Harsil', dist:'75km', time:'2.5 hrs', note:'Narrowing road, beautiful pine forest' },
            { from:'Harsil', to:'Gangotri', dist:'25km', time:'45 mins', note:'Final approach — river gorge, spectacular scenery' },
            { from:'Gangotri', to:'Gaumukh Glacier', dist:'18km trek', time:'1 full day', note:'Separate permit required, advance planning needed' },
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

        <h2 style={h2}>Helicopter to Gangotri (Harsil Helipad)</h2>
        <p style={p}>
          The helicopter for the Gangotri sector lands at Harsil Helipad, approximately 25km from the Gangotri temple. From Harsil, a road transfer takes you to the temple (about 45 minutes). This option is available as part of the Char Dham helicopter package from Sahastradhara Helipad in Dehradun. Individual helicopter bookings for Gangotri are available via the IRCTC heliyatra portal.
        </p>

        <h2 style={h2}>Trains to Reach Gangotri</h2>
        <p style={p}>
          There is no railway line to Gangotri or Uttarkashi. The two practical railheads are Haridwar (265km from Gangotri) and Dehradun (230km). From both, you hire a taxi or join a package vehicle. Haridwar has far more train connections from cities across India, making it the preferred railhead for most pilgrims. The Dehradun Shatabdi Express from New Delhi is comfortable for NCR pilgrims heading to Gangotri.
        </p>

        <div style={{ background:'var(--navy)', borderRadius:16, padding:'24px', textAlign:'center', marginTop:32 }}>
          <h3 style={{ color:'#fff', fontFamily:'var(--font-display)', fontSize:'1.2rem', marginBottom:8 }}>Book Gangotri as Part of Char Dham Yatra</h3>
          <p style={{ color:'rgba(255,255,255,0.7)', fontSize:13.5, marginBottom:16 }}>We manage all road transport, accommodation at Uttarkashi, and darshan arrangements — you only focus on the darshan.</p>
          <div style={{ display:'flex', gap:10, justifyContent:'center', flexWrap:'wrap' }}>
            <a href={`https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent('Namaste! I want to visit Gangotri as part of Char Dham Yatra 2026. Please share packages.')}`}
              target="_blank" rel="noopener noreferrer"
              style={{ background:'#25D366', color:'#fff', padding:'11px 22px', borderRadius:9, fontWeight:700, fontSize:13.5, textDecoration:'none' }}>💬 WhatsApp</a>
            <Link href="/gangotri-yatra" style={{ background:'rgba(255,255,255,0.12)', color:'#fff', padding:'11px 22px', borderRadius:9, fontWeight:700, fontSize:13.5, textDecoration:'none', border:'1px solid rgba(255,255,255,0.2)' }}>View Gangotri Packages →</Link>
          </div>
        </div>

        <div style={{ borderTop:'1px solid var(--border)', paddingTop:24, marginTop:32 }}>
          <div style={{ fontWeight:700, fontSize:13.5, color:'var(--navy)', marginBottom:12 }}>Related guides</div>
          <div style={{ display:'flex', gap:10, flexWrap:'wrap' }}>
            {[['How to Reach Yamunotri','/how-to-reach-yamunotri'],['How to Reach Badrinath','/how-to-reach-badrinath'],['Gangotri Weather','/gangotri-weather'],['Haridwar to Kedarnath Cab','/haridwar-to-kedarnath-cab'],['Char Dham Route Map','/char-dham-yatra-route-map']].map(([l,h]) => (
              <Link key={h} href={h} style={{ background:'var(--bg)', border:'1px solid var(--border)', color:'var(--navy)', padding:'7px 14px', borderRadius:8, fontSize:12.5, fontWeight:600, textDecoration:'none' }}>{l} →</Link>
            ))}
          </div>
        </div>
      </article>
    </>
  );
}
