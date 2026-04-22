import Link from 'next/link';
import { PACKAGES, SITE } from '@/data/packages';

export const metadata = {
  title: 'Kedarnath Yatra 2026 — Packages, Trek Guide, Pony & Helicopter | Shiv Ganga Travels',
  description: 'Book Kedarnath Yatra 2026 from Haridwar. ₹6,499/person. 16km trek details, pony, palki & helicopter options, temple timings, what to carry. Expert Garhwali guides.',
  keywords: ['Kedarnath Yatra 2026','Kedarnath package 2026','Kedarnath Yatra from Haridwar','Kedarnath trek','Kedarnath helicopter booking','Kedarnath pony booking','Kedarnath temple opening 2026','Kedarnath yatra package price'],
  alternates: { canonical: `${SITE.baseUrl}/kedarnath-yatra` },
  openGraph: {
    title: 'Kedarnath Yatra 2026 — Complete Package & Guide',
    description: 'Book Kedarnath Yatra from Haridwar ₹6,499. 16km trek guide, pony, palki, helicopter options. Trusted since 2010.',
    url: `${SITE.baseUrl}/kedarnath-yatra`,
    type: 'article',
    images: ['https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/Kedarnathji-mandir.JPG/1200px-Kedarnathji-mandir.JPG'],
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
            Lord Shiva's sacred abode in the Garhwal Himalayas<br/>Packages from <strong style={{ color:'#FFD166' }}>₹6,499</strong> · Trek · Pony · Helicopter options
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
        <p style={p}><strong>Kedarnath</strong>, situated at an altitude of 3,583 metres in the Rudraprayag district of Uttarakhand, is one of the holiest Hindu shrines — the 12th of the 12 Jyotirlingas of Lord Shiva. The ancient stone temple, dating back to the 8th century and attributed to Adi Shankaracharya, draws lakhs of pilgrims every year between May and October.</p>

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

        <h2 style={h2}>Kedarnath Trek — Complete Details</h2>
        <p style={p}>The Kedarnath trek begins at <strong>Gaurikund</strong> (1,982m) and covers <strong>16 km one way</strong>, climbing approximately 1,600 metres in altitude. The trail passes through Jungle Chatti, Bheembali, Lincholi, and Base Camp before arriving at the Kedarnath shrine. Most pilgrims take 5–6 hours for the ascent and 3–4 hours for the descent.</p>

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

        <h2 style={h2}>Temple Timings & Puja</h2>
        <p style={p}>The Kedarnath temple opens at <strong>4:30 AM</strong> for the auspicious Brahma Muhurta puja — the most sacred time to seek blessings. The <strong>Mahabhishek puja</strong> (special ritual with milk, honey, and holy water) can be booked in advance and is a deeply moving spiritual experience. We arrange this for our pilgrims.</p>

        <h2 style={h2}>How to Reach Kedarnath from Haridwar</h2>
        <div style={{ background:'var(--bg)', borderRadius:12, padding:'16px 18px', border:'1px solid var(--border)', fontSize:13.5, lineHeight:2, marginBottom:16 }}>
          <strong>Haridwar</strong> (0 km) → Rishikesh → Devprayag → Rudraprayag → Agastyamuni → <strong>Guptkashi</strong> (220 km, ~7 hrs) → Sonprayag → Gaurikund → <strong>Kedarnath Trek begins</strong> (228 km + 16 km trek)
        </div>

        {/* CTA */}
        <div style={{ background:'var(--navy)', borderRadius:16, padding:'28px 24px', textAlign:'center', marginTop:32 }}>
          <h3 style={{ color:'#fff', fontFamily:'var(--font-display)', fontSize:'1.4rem', marginBottom:10 }}>Book Kedarnath Yatra 2026</h3>
          <p style={{ color:'rgba(255,255,255,0.75)', fontSize:14, marginBottom:20 }}>Free custom itinerary in 2 hours. Zero commission. ₹6,499/person all-inclusive.</p>
          <div style={{ display:'flex', gap:12, justifyContent:'center', flexWrap:'wrap' }}>
            <Link href="/packages/kedarnath-yatra-package-3n-4d-haridwar" style={{ background:'var(--gold)', color:'#fff', padding:'12px 24px', borderRadius:9, fontWeight:700, fontSize:13.5, textDecoration:'none' }}>View Package</Link>
            <a href={`https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent('Namaste! I want to book Kedarnath Yatra 2026.')}`} target="_blank" rel="noopener noreferrer"
              style={{ background:'#25D366', color:'#fff', padding:'12px 24px', borderRadius:9, fontWeight:700, fontSize:13.5, textDecoration:'none' }}>💬 WhatsApp</a>
          </div>
        </div>
      </article>
    </>
  );
}
