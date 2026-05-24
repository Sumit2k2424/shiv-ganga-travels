import Link from 'next/link';
import { SITE } from '@/data/packages';

export const metadata = {
  title: 'Hotels Near Badrinath 2026',
  description: 'Best hotels near Badrinath 2026. Badrinath town, Joshimath, Chamoli and Rudraprayag stays — honest guide with prices and recommendations.',
  keywords: ['hotels near badrinath','badrinath hotels 2026','joshimath hotels','badrinath accommodation','where to stay badrinath yatra'],
  alternates: { canonical: `${SITE.baseUrl}/badrinath-hotels` },
  openGraph: {
    title: 'Hotels Near Badrinath 2026 — Guide to Best Stays',
    description: 'Where to stay for Badrinath Yatra — hotel guide for Badrinath town, Joshimath, Chamoli and Pipalkoti.',
    url: `${SITE.baseUrl}/badrinath-hotels`, type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hotels Near Badrinath 2026 — Guide to Best Stays',
    description: 'Where to stay for Badrinath Yatra — hotel guide for Badrinath town, Joshimath, Chamoli and Pipalkoti.',
    images: [{ url: '/opengraph-image', alt: 'Hotels Near Badrinath 2026 — Guide to Best Stays | Shiv Ganga Travels' }],
  },
};

const h2 = { fontFamily:'var(--font-display)', fontSize:'clamp(1.2rem,2.8vw,1.5rem)', fontWeight:700, color:'var(--navy)', marginBottom:14, marginTop:32 };
const p  = { fontSize:15.5, color:'#334155', lineHeight:1.85, marginBottom:16 };

const stays = [
  {
    loc: 'Badrinath Town (3,133m)',
    desc: 'The most sought-after option — staying in Badrinath itself means you can attend the early morning Abhishek Puja (4:30 AM) and the evening Aarti (7 PM) without any travel. Hotels range from basic GMVN rooms to mid-range private hotels. Expect clean but simple rooms. Hot water is available but inconsistent at this altitude.',
    budget: '₹800–₹4,000 per room', comfort: '⭐⭐–⭐⭐⭐', rec: 'Best choice for darshan-first pilgrims. Our premium packages include 2 nights here.',
    type: 'Darshan-first'
  },
  {
    loc: 'Joshimath (1,875m)',
    desc: 'The standard overnight halt for most packages — 45km below Badrinath at a much lower altitude. Joshimath has the best hotel quality in the circuit, with more 3-star options, better food, and reliable hot water. The Auli ropeway is here. We recommend spending the first night in Joshimath to acclimatise before ascending to Badrinath.',
    budget: '₹1,500–₹6,000 per room', comfort: '⭐⭐⭐–⭐⭐⭐⭐', rec: 'Best overall value. All our standard packages include a Joshimath halt.',
    type: 'Standard – Recommended'
  },
  {
    loc: 'Chamoli / Pipalkoti (1,060m)',
    desc: 'Midway between Rudraprayag and Joshimath, these towns are lower altitude and warmer. Used as buffer halts in extended packages or for pilgrims with altitude sensitivity. Fewer hotel options but adequate for a transit night.',
    budget: '₹1,000–₹3,000 per room', comfort: '⭐⭐–⭐⭐⭐', rec: 'Used in our 14N/15D senior citizen packages as a gentle ascent halt.',
    type: 'Budget / Extended itinerary'
  },
  {
    loc: 'Rudraprayag (895m)',
    desc: 'Lowest-altitude option — much warmer and very comfortable. 130km from Badrinath. Used as an arrival/departure night for pilgrims coming from or going to Kedarnath. Good hotel range including GMVN and mid-range private hotels.',
    budget: '₹1,500–₹4,000 per room', comfort: '⭐⭐⭐–⭐⭐⭐⭐', rec: 'Ideal as a combination Do Dham (Kedarnath + Badrinath) pivot halt.',
    type: 'Do Dham / Comfort'
  },
];

export default function BadrinathHotels() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context':'https://schema.org','@type':'WebPage',
        name:'Hotels Near Badrinath 2026 — Complete Guide',
        description:'Where to stay for Badrinath Yatra — hotel guide for Badrinath town, Joshimath, Chamoli and Rudraprayag.',
        url:`${SITE.baseUrl}/badrinath-hotels`,
      })}}/>

      <section style={{ background:'linear-gradient(145deg,var(--navy) 0%,var(--navy-mid) 60%,var(--teal) 100%)', padding:'52px 20px 40px', textAlign:'center' }}>
        <div style={{ maxWidth:820, margin:'0 auto' }}>
          <span style={{ background:'rgba(232,146,10,0.18)', color:'#FFD166', fontSize:11, fontWeight:700, letterSpacing:'0.12em', textTransform:'uppercase', padding:'5px 16px', borderRadius:100, display:'inline-block', marginBottom:14 }}>🏨 Hotel Guide · Badrinath</span>
          <h1 className="display-title" style={{ color:'#fff', fontSize:'clamp(1.8rem,4.5vw,2.8rem)', marginBottom:14 }}>Hotels Near Badrinath 2026 — Where to Stay</h1>
          <p style={{ color:'rgba(255,255,255,0.8)', fontSize:15, lineHeight:1.7, maxWidth:640, margin:'0 auto' }}>
            Badrinath town, Joshimath, Chamoli — honest guide with prices and what each option is actually like
          </p>
        </div>
      </section>

      <nav style={{ background:'var(--bg)', borderBottom:'1px solid var(--border)', padding:'9px 20px' }}>
        <div style={{ maxWidth:'var(--container)', margin:'0 auto', fontSize:12, color:'var(--text-muted)', display:'flex', gap:6 }}>
          Home<span>›</span>
          Badrinath Temple<span>›</span>
          <span>Hotels</span>
        </div>
      </nav>

      <article style={{ maxWidth:900, margin:'0 auto', padding:'36px 20px 60px' }}>
        <div style={{ fontSize:12, color:'var(--text-muted)', marginBottom:16, textAlign:'right' }}>🗓️ Last updated: May 21, 2026</div>

        <p style={p}>
          Badrinath town has limited hotel capacity — it's a high-altitude mountain settlement, not a tourist resort. For most pilgrims, the smart strategy is to stay one night in Joshimath (45km below, 1,875m altitude) for acclimatisation, then travel up to Badrinath for darshan, and optionally spend the night in Badrinath itself before descending. Our packages are designed around this logic.
        </p>

        <div style={{ background:'#eff6ff', border:'1px solid #bfdbfe', borderRadius:12, padding:'14px 18px', marginBottom:24 }}>
          <div style={{ fontWeight:700, fontSize:13.5, color:'#1e40af', marginBottom:6 }}>💡 Altitude tip for Badrinath</div>
          <p style={{ margin:0, fontSize:13.5, color:'#1e3a8a' }}>At 3,133m, Badrinath is below the altitude risk threshold for most healthy adults — but it's still 3+ times higher than the plains. Anyone with cardiac history, hypertension, or respiratory issues should spend an acclimatisation night at Joshimath first and consult their doctor before travelling. Our team carries oxygen cylinders on every vehicle.</p>
        </div>

        {stays.map(s => (
          <div key={s.loc} style={{ background:'#fff', border:'1px solid var(--border)', borderRadius:12, padding:'18px 20px', marginBottom:14 }}>
            <div style={{ display:'flex', justifyContent:'space-between', alignItems:'flex-start', flexWrap:'wrap', gap:8, marginBottom:10 }}>
              <div>
                <span style={{ background:'rgba(232,146,10,0.12)', color:'#92640a', fontSize:11, fontWeight:700, padding:'2px 10px', borderRadius:20, marginBottom:6, display:'inline-block' }}>{s.type}</span>
                <h2 style={{ fontFamily:'var(--font-display)', fontSize:'1.05rem', fontWeight:700, color:'var(--navy)', margin:0 }}>{s.loc}</h2>
              </div>
              <div style={{ textAlign:'right' }}>
                <div style={{ fontWeight:700, color:'var(--navy)', fontSize:14 }}>{s.budget}</div>
                <div style={{ fontSize:13 }}>{s.comfort}</div>
              </div>
            </div>
            <p style={{ fontSize:14, color:'#475569', lineHeight:1.75, marginBottom:10 }}>{s.desc}</p>
            <div style={{ background:'var(--bg)', borderRadius:8, padding:'8px 12px', fontSize:13, color:'var(--navy)', borderLeft:'3px solid var(--gold)' }}>
              <strong>Our recommendation:</strong> {s.rec}
            </div>
          </div>
        ))}

        <h2 style={h2}>Mana Village — Can You Stay There?</h2>
        <p style={p}>
          Mana Village (3km from Badrinath) has a few basic guesthouses run by locals. It's not a standard accommodation option — most pilgrims visit Mana as a day-trip from Badrinath. If you want to stay in Mana for the border-village experience, it's possible but requires advance planning. We can arrange this on request for adventure-oriented groups.
        </p>

        <div style={{ background:'var(--navy)', borderRadius:16, padding:'24px', textAlign:'center', marginTop:32 }}>
          <h3 style={{ color:'#fff', fontFamily:'var(--font-display)', fontSize:'1.2rem', marginBottom:8 }}>Book Badrinath Yatra — Hotels Included</h3>
          <p style={{ color:'rgba(255,255,255,0.7)', fontSize:13.5, marginBottom:16 }}>Pre-confirmed hotels in Joshimath and Badrinath. Your room is waiting when you arrive.</p>
          <div style={{ display:'flex', gap:10, justifyContent:'center', flexWrap:'wrap' }}>
            <a href={`https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent('Namaste! I want to book Badrinath Yatra 2026. Please share packages with hotel details.')}`}
              target="_blank" rel="nofollow noopener noreferrer"
              style={{ background:'#25D366', color:'#fff', padding:'11px 22px', borderRadius:9, fontWeight:700, fontSize:13.5, textDecoration:'none' }}>💬 WhatsApp</a>
            View Package →
          </div>
        </div>

        <div style={{ borderTop:'1px solid var(--border)', paddingTop:24, marginTop:32 }}>
          <div style={{ fontWeight:700, fontSize:13.5, color:'var(--navy)', marginBottom:12 }}>Related guides</div>
          <div style={{ display:'flex', gap:10, flexWrap:'wrap' }}>
            {[['Kedarnath Hotels','/kedarnath-hotels'],['Badrinath Weather','/badrinath-weather'],['How to Reach Badrinath','/how-to-reach-badrinath'],['Badrinath Temple','/badrinath-temple'],['Haridwar to Badrinath Cab','/haridwar-to-badrinath-cab']].map(([l,h]) => (
              <Link key={h} href={h} style={{ background:'var(--bg)', border:'1px solid var(--border)', color:'var(--navy)', padding:'7px 14px', borderRadius:8, fontSize:12.5, fontWeight:600, textDecoration:'none' }}>{l} →</Link>
            ))}
          </div>
        </div>
      </article>
    </>
  );
}
