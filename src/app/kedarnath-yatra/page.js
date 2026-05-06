import Link from 'next/link';
import { PACKAGES, SITE } from '@/data/packages';

export const metadata = {
  title: 'Kedarnath Yatra 2026 — Packages, Trek & Helicopter',
  description: 'Book Kedarnath Yatra 2026 from Haridwar. 3N/4D packages from ₹12,999. Helicopter, pony, VIP darshan. Senior citizen packages available.',
  keywords: ['Kedarnath Yatra 2026','Kedarnath package 2025','Kedarnath Yatra from Haridwar','Kedarnath trek','Kedarnath helicopter booking','Kedarnath pony booking','Kedarnath temple opening 2025','Kedarnath yatra package price'],
  alternates: { canonical: `${SITE.baseUrl}/kedarnath-yatra` },
  openGraph: {
    title: 'Kedarnath Yatra 2026 — Complete Package & Guide',
    description: 'Book Kedarnath Yatra from Haridwar ₹6,499. 16km trek guide, pony, palki, helicopter options. Trusted since 2010.',
    url: `${SITE.baseUrl}/kedarnath-yatra`,
    type: 'article',
    images: ['/opengraph-image'],
  },
};

const kedarnathPkgs = PACKAGES.filter(p => p.tags?.includes('kedarnath') || p.slug.includes('kedarnath'));

const h2 = { fontFamily:'var(--font-display)', fontSize:'clamp(1.3rem,3vw,1.8rem)', fontWeight:600, color:'var(--navy)', letterSpacing:'-0.02em', marginBottom:12, marginTop:32 };
const p  = { fontSize:14.5, color:'var(--text-mid)', lineHeight:1.85, marginBottom:14 };

export default function KedarnathYatra() {
  return (
    <>
      <section style={{ background:'linear-gradient(145deg,var(--navy) 0%,#1A3E75 60%,var(--teal) 100%)', padding:'56px 20px 44px', textAlign:'center' }}>
        <div style={{ maxWidth:800, margin:'0 auto' }}>
          <span style={{ background:'rgba(232,146,10,0.18)', color:'#FFD166', fontSize:11, fontWeight:700, letterSpacing:'0.14em', textTransform:'uppercase', padding:'5px 16px', borderRadius:100, display:'inline-block', marginBottom:16 }}>Sacred Jyotirlinga · 3,583m</span>
          <h1 className="display-title" style={{ color:'#fff', fontSize:'clamp(1.8rem,4.5vw,3rem)', marginBottom:16 }}>
            Kedarnath Yatra 2026 — Complete Guide & Packages
          </h1>
          <p style={{ color:'rgba(255,255,255,0.8)', fontSize:15, lineHeight:1.7 }}>
            Lord Shiva’s sacred abode in the Garhwal Himalayas<br/>Packages from <strong style={{ color:'#FFD166' }}>₹6,499</strong> · Trek · Pony · Helicopter options
          </p>
        </div>
      </section>

      <nav style={{ background:'var(--bg)', borderBottom:'1px solid var(--border)', padding:'10px 20px' }}>
        <div style={{ maxWidth:'var(--container)', margin:'0 auto', fontSize:12, color:'var(--text-muted)', display:'flex', gap:6 }}>
          <Link href="/" style={{ color:'var(--navy)', textDecoration:'none' }}>Home</Link>
          <span>›</span>
          <Link href="/packages/single-dham" style={{ color:'var(--navy)', textDecoration:'none' }}>Single Dham</Link>
          <span>›</span>
          <span>Kedarnath Yatra</span>
        </div>
      </nav>

      <article style={{ maxWidth:860, margin:'0 auto', padding:'40px 20px 60px' }}>
        {/* Quick facts — skimmable entry point */}
        <div style={{ background:'var(--bg)', borderRadius:12, padding:'16px 20px', border:'1px solid var(--border)', marginBottom:20, display:'grid', gridTemplateColumns:'repeat(auto-fill,minmax(150px,1fr))', gap:8 }}>
          {[['Altitude','3,583m (Rudraprayag)'],['Jyotirlinga','12th of 12 Shiva temples'],['Trek','16km from Gaurikund'],['Season','April 22 – Nov 2026'],['From Haridwar','230km by road'],['Package from','₹6,499/person']].map(([k,v])=>(
            <div key={k}><div style={{ fontSize:11, color:'var(--text-muted)' }}>{k}</div><div style={{ fontWeight:700, fontSize:13, color:'var(--navy)' }}>{v}</div></div>
          ))}
        </div>
        <p style={{p}}>
          <strong>Kedarnath</strong> stands at 3,583 metres in the Rudraprayag district of Uttarakhand — the 12th Jyotirlinga, the highest Shiva temple in the Himalayan range. Adi Shankaracharya built the current stone temple in the 8th century. The structure has survived 12 centuries of Himalayan winters. It survived the 2013 cloudbursts that destroyed everything around it. The boulder that deflected the flood now stands behind the temple as a permanent reminder.
        </p>
        <p style={{p}}>
          Every year from late April to early November, hundreds of thousands of pilgrims make the 16km trek from Gaurikund to seek the darshan of Lord Kedarnath. The temple opens before dawn for the Mahabhishek puja at 4:30 AM. You can book this ritual in advance — we arrange it for all our Kedarnath Yatra pilgrims.
        </p>

        {/* Packages */}
        <div style={{ background:'var(--navy-light)', borderRadius:14, padding:'18px 20px', marginBottom:28 }}>
          <div style={{ fontWeight:700, fontSize:14, color:'var(--navy)', marginBottom:14 }}>📦 Kedarnath Packages:</div>
          <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(220px,1fr))', gap:10 }}>
            {kedarnathPkgs.slice(0,4).map(p => (
              <Link key={p.slug} href={`/packages/${p.slug}`}
                style={{ background:'#fff', padding:'12px 16px', borderRadius:10, border:'1px solid var(--border)', textDecoration:'none', display:'flex', justifyContent:'space-between', alignItems:'center' }}>
                <div>
                  <div style={{ fontSize:13, fontWeight:600, color:'var(--text)', lineHeight:1.3 }}>{p.name}</div>
                  <div style={{ fontSize:11.5, color:'var(--text-muted)', marginTop:2 }}>{p.duration.nights}N/{p.duration.days}D from {p.startCity}</div>
                </div>
                <div style={{ fontWeight:800, fontSize:16, color:'var(--navy)', whiteSpace:'nowrap', marginLeft:10 }}>₹{p.price.discounted.toLocaleString('en-IN')}</div>
              </Link>
            ))}
          </div>
        </div>

        <h2 style={{h2}}>Kedarnath Trek — Complete Details</h2>
        <p style={{p}}>The Kedarnath trek begins at <strong>Gaurikund</strong> (1,982m) and covers <strong>16 km one way</strong>, climbing approximately 1,600 metres in altitude. The trail passes through Jungle Chatti, Bheembali, Lincholi, and Base Camp before arriving at the Kedarnath shrine. Most pilgrims take 5–6 hours for the ascent and 3–4 hours for the descent.</p>

        <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(180px,1fr))', gap:12, marginBottom:20 }}>
          {[
            { mode:'On Foot', cost:'Free', time:'5–6 hrs up', note:'Most spiritual; good fitness needed' },
            { mode:'🐴 Pony', cost:'₹3,500–4,500', time:'4–5 hrs up', note:'One way; book at Gaurikund' },
            { mode:'🛕 Palki/Doli', cost:'₹8,000–12,000', time:'5–6 hrs', note:'Carried by 4–6 people; best for elderly' },
            { mode:'🚁 Helicopter', cost:'₹7,500–9,500', time:'7 minutes', note:'From Phata/Sersi/Guptkashi helipads' },
          ].map(m => (
            <div key={m.mode} style={{ background:'#fff', borderRadius:10, padding:'14px', border:'1px solid var(--border)' }}>
              <div style={{ fontWeight:700, fontSize:13.5, color:'var(--text)', marginBottom:6 }}>{m.mode}</div>
              <div style={{ fontSize:12, color:'var(--gold-dark)', fontWeight:600, marginBottom:4 }}>{m.cost}</div>
              <div style={{ fontSize:12, color:'var(--text-mid)', marginBottom:4 }}>⏱ {m.time}</div>
              <div style={{ fontSize:11.5, color:'var(--text-muted)' }}>{m.note}</div>
            </div>
          ))}
        </div>

        <h2 style={{h2}}>Temple Timings & Puja</h2>
        <p style={{p}}>The Kedarnath temple opens at <strong>4:30 AM</strong> for the auspicious Brahma Muhurta puja — the most sacred time to seek blessings. The <strong>Mahabhishek puja</strong> (special ritual with milk, honey, and holy water) you can book in advance and is a deeply moving spiritual experience. We arrange this for our pilgrims.</p>

        <h2 style={{h2}}>How to Reach Kedarnath from Haridwar</h2>
        <div style={{ background:'var(--bg)', borderRadius:12, padding:'16px 18px', border:'1px solid var(--border)', fontSize:13.5, lineHeight:2, marginBottom:16 }}>
          <strong>Haridwar</strong> (0 km) → Rishikesh → Devprayag → Rudraprayag → Agastyamuni → <strong>Guptkashi</strong> (220 km, ~7 hrs) → Sonprayag → Gaurikund → <strong>Kedarnath Trek begins</strong> (228 km + 16 km trek)
        </div>


        <h2 style={{ fontFamily:'var(--font-display)', fontSize:'1.4rem', fontWeight:700, color:'var(--navy)', marginBottom:14, marginTop:32 }}>Places to Visit Along the Kedarnath Route</h2>
        <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fill,minmax(260px,1fr))', gap:14, marginBottom:28 }}>
          {[
            { name:'Devprayag', dist:'75km from Haridwar', desc:'The most sacred of the five Prayags — the confluence of the Alaknanda and Bhagirathi rivers that together form the Ganga. Standing at the confluence and watching two rivers of completely different colours merge is a moment worth stopping for. The ancient Raghunath Temple here is over 1,200 years old.' },
            { name:'Guptkashi', dist:'220km from Haridwar', desc:'Your overnight base before the trek. Guptkashi has its own Vishwanath Temple — said to be the site where Shiva hid from the Pandavas before being found at Kedarnath. The town sits above a deep valley and the evening views of the Himalayan ridges from its ridge road are remarkable.' },
            { name:'Ukhimath (winter Kedarnath)', dist:'Near Guptkashi', desc:'When Kedarnath temple closes in November, the deity is brought down to Ukhimath for the winter months. This small village temple is where Lord Kedarnath "lives" from November to April. If you are visiting in winter — or if you just want a quieter, more personal darshan — Ukhimath is worth visiting.' },
            { name:'Triyuginarayan Temple', dist:'12km from Sonprayag', desc:'The temple where Lord Shiva and Goddess Parvati were married, with Vishnu himself officiating as brother of the bride. The sacred fire in the courtyard is said to have been burning since the wedding — through three yugas (cosmic ages), which is how the village got its name. Rarely on standard itineraries, almost never crowded.' },
            { name:'Gaurikund', dist:'Trek start, 228km from Haridwar', desc:'Named after Goddess Gauri (Parvati), who bathed in the hot spring here while waiting for Shiva. The kund is still there — a small hot spring pool surrounded by stone walls. Trek starts here. The short walk from the parking area to Gaurikund passes through a bustling small market of walking sticks, poncho sellers, and warm chai shops.' },
            { name:'Shankar Math (top of trek)', dist:'Kedarnath, trek end', desc:'A small monastery near the temple, run by the Jyotirmath peetham. Monks here have maintained continuous worship at Kedarnath for centuries. The math is open to pilgrims and has a simple guest house. Spending the night at Kedarnath and attending the 4 AM Mahabhishek is an experience that most day-visitors never get.' },
          ].map(pl => (
            <div key={pl.name} style={{ background:'#fff', borderRadius:12, padding:'16px', border:'1px solid var(--border)', boxShadow:'0 2px 8px rgba(0,0,0,0.04)' }}>
              <div style={{ fontWeight:700, fontSize:14, color:'var(--navy)', marginBottom:3 }}>{pl.name}</div>
              <div style={{ fontSize:11.5, color:'var(--gold-dark)', fontWeight:600, marginBottom:8 }}>📍 {pl.dist}</div>
              <div style={{ fontSize:13, color:'var(--text-mid)', lineHeight:1.7 }}>{pl.desc}</div>
            </div>
          ))}
        </div>

        <h2 style={{ fontFamily:'var(--font-display)', fontSize:'1.4rem', fontWeight:700, color:'var(--navy)', marginBottom:14, marginTop:32 }}>Recommended Hotels Near Kedarnath Base (Guptkashi / Sonprayag)</h2>
        <p style={{ fontSize:'14.5px', color:'var(--text-muted)', marginBottom:16 }}>
          Shiv Ganga Travels has pre-blocked rooms at these properties during peak season.
        </p>
        <div style={{ overflowX:'auto', marginBottom:28 }}>
          <table style={{ width:'100%', borderCollapse:'collapse', fontSize:13.5 }}>
            <thead><tr style={{ background:'var(--navy)' }}>
              {['Hotel','Location','Rating','Price/Night','Notes'].map(h=>(
                <th key={h} style={{ padding:'10px 12px', textAlign:'left', color:'#fff', fontWeight:700, fontSize:12 }}>{h}</th>
              ))}
            </tr></thead>
            <tbody>
              <tr style={{ borderBottom:'1px solid var(--border)', background:'#fff' }}>
                <td style={{ padding:'10px 12px', fontWeight:700, color:'var(--navy)', fontSize:13.5 }}>Hotel Ukhimath Residency</td>
                <td style={{ padding:'10px 12px', color:'var(--text-muted)', fontSize:13 }}>Guptkashi</td>
                <td style={{ padding:'10px 12px', color:'#E8920A', fontWeight:700, fontSize:13 }}>★★★</td>
                <td style={{ padding:'10px 12px', fontWeight:700, color:'var(--navy)', fontSize:13.5 }}>₹2,200–3,500/night</td>
                <td style={{ padding:'10px 12px', color:'var(--text-muted)', fontSize:12.5 }}>Best base for Kedarnath. 15 mins from Sonprayag. Clean rooms, hot water, veg meals.</td>
              </tr>
              <tr style={{ borderBottom:'1px solid var(--border)', background:'var(--bg)' }}>
                <td style={{ padding:'10px 12px', fontWeight:700, color:'var(--navy)', fontSize:13.5 }}>GMVN Guptkashi</td>
                <td style={{ padding:'10px 12px', color:'var(--text-muted)', fontSize:13 }}>Guptkashi</td>
                <td style={{ padding:'10px 12px', color:'#E8920A', fontWeight:700, fontSize:13 }}>★★</td>
                <td style={{ padding:'10px 12px', fontWeight:700, color:'var(--navy)', fontSize:13.5 }}>₹1,200–2,000/night</td>
                <td style={{ padding:'10px 12px', color:'var(--text-muted)', fontSize:12.5 }}>Government guest house. Budget option. Book via gmvnl.in or through your operator.</td>
              </tr>
              <tr style={{ borderBottom:'1px solid var(--border)', background:'#fff' }}>
                <td style={{ padding:'10px 12px', fontWeight:700, color:'var(--navy)', fontSize:13.5 }}>Hotel Shivam</td>
                <td style={{ padding:'10px 12px', color:'var(--text-muted)', fontSize:13 }}>Sonprayag</td>
                <td style={{ padding:'10px 12px', color:'#E8920A', fontWeight:700, fontSize:13 }}>★★</td>
                <td style={{ padding:'10px 12px', fontWeight:700, color:'var(--navy)', fontSize:13.5 }}>₹1,500–2,500/night</td>
                <td style={{ padding:'10px 12px', color:'var(--text-muted)', fontSize:12.5 }}>Closest to Sonprayag checkpoint. Good if arriving late. Simple rooms, restaurant.</td>
              </tr>
              <tr style={{ borderBottom:'1px solid var(--border)', background:'var(--bg)' }}>
                <td style={{ padding:'10px 12px', fontWeight:700, color:'var(--navy)', fontSize:13.5 }}>Mandakini Resort</td>
                <td style={{ padding:'10px 12px', color:'var(--text-muted)', fontSize:13 }}>Near Kund</td>
                <td style={{ padding:'10px 12px', color:'#E8920A', fontWeight:700, fontSize:13 }}>★★★</td>
                <td style={{ padding:'10px 12px', fontWeight:700, color:'var(--navy)', fontSize:13.5 }}>₹2,800–4,500/night</td>
                <td style={{ padding:'10px 12px', color:'var(--text-muted)', fontSize:12.5 }}>Premium option. River-facing rooms. Best for seniors needing extra comfort.</td>
              </tr>
            </tbody>
          </table>
        </div>
        {/* CTA */}
        <div style={{ background:'var(--navy)', borderRadius:16, padding:'28px 24px', textAlign:'center', marginTop:32 }}>
          <h3 style={{ color:'#fff', fontFamily:'var(--font-display)', fontSize:'1.4rem', marginBottom:10 }}>Book Kedarnath Yatra 2026</h3>
          <p style={{ color:'rgba(255,255,255,0.75)', fontSize:14, marginBottom:20 }}>Free custom itinerary in 2 hours. Zero commission. ₹6,499/person all-inclusive.</p>
          <div style={{ display:'flex', gap:12, justifyContent:'center', flexWrap:'wrap' }}>
            <Link href="/packages/kedarnath-yatra-package-3n-4d-haridwar" style={{ background:'var(--gold)', color:'#fff', padding:'12px 24px', borderRadius:9, fontWeight:700, fontSize:13.5, textDecoration:'none' }}>View Package</Link>
            <a href={`https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent('Namaste! I want to book Kedarnath Yatra 2026.')}`} target="_blank" rel="nofollow noopener noreferrer"
              style={{ background:'#25D366', color:'#fff', padding:'12px 24px', borderRadius:9, fontWeight:700, fontSize:13.5, textDecoration:'none' }}>💬 WhatsApp</a>
          </div>
        </div>
      </article>

      <section style={{ background:'var(--bg)', borderTop:'1px solid var(--border)', padding:'32px 20px' }}>
        <div style={{ maxWidth:'var(--container)', margin:'0 auto' }}>
          <div style={{ fontWeight:700, fontSize:14, color:'var(--navy)', marginBottom:14 }}>Useful Resources</div>
          <div style={{ display:'flex', gap:10, flexWrap:'wrap' }}>
            {[['How to Reach Kedarnath','/blog/how-to-reach-kedarnath'],['Kedarnath Darshan Timings','/blog/kedarnath-darshan-timing'],['Kedarnath Trek Guide','/blog/kedarnath-trek-guide'],['Helicopter Booking','/blog/kedarnath-helicopter-booking'],['Haridwar to Kedarnath Route','/blog/haridwar-to-kedarnath-road-trip'],['Medical Certificate','/blog/char-dham-yatra-medical-certificate'],['Registration Guide','/blog/char-dham-yatra-registration']].map(([l,h])=>(
              <Link key={h} href={h} style={{ background:'#fff', border:'1px solid var(--border)', color:'var(--navy)', padding:'8px 16px', borderRadius:8, fontSize:13, fontWeight:600, textDecoration:'none' }}>{l} →</Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
