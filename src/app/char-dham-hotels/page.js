import Link from 'next/link';
import { SITE } from '@/data/packages';

export const metadata = {
  title: 'Char Dham Yatra Hotels 2026 | Where to Stay at Every Stop',
  description: 'Char Dham Yatra hotels 2026 — where to stay at Barkot, Uttarkashi, Guptkashi, Badrinath and Haridwar. Honest price bands and booking tips.',
  keywords: ['char dham hotels','char dham yatra hotels','where to stay char dham yatra','barkot hotels','uttarkashi hotels','guptkashi hotels','badrinath hotels','char dham accommodation 2026'],
  alternates: { canonical: `${SITE.baseUrl}/char-dham-hotels` },
  openGraph: {
    title: 'Char Dham Yatra Hotels 2026 — Where to Stay at Every Stop',
    description: 'Stop-by-stop hotel guide for the Char Dham route — Barkot, Uttarkashi, Guptkashi, Badrinath and Haridwar with real price bands.',
    url: `${SITE.baseUrl}/char-dham-hotels`, type: 'article',
    images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: 'Char Dham Yatra Hotels 2026 — Shiv Ganga Travels' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Char Dham Yatra Hotels 2026 — Where to Stay at Every Stop',
    description: 'Stop-by-stop hotel guide for the Char Dham route with real price bands and tips.',
    images: [{ url: '/opengraph-image', alt: 'Char Dham Yatra Hotels 2026 — Shiv Ganga Travels' }],
  },
};

const h2 = { fontFamily:'var(--font-display)', fontSize:'clamp(1.2rem,2.8vw,1.5rem)', fontWeight:700, color:'var(--navy)', marginBottom:14, marginTop:32 };
const p  = { fontSize:15.5, color:'#334155', lineHeight:1.85, marginBottom:16 };

const stops = [
  { stop:'Haridwar (base)', alt:'314m', dham:'Arrival / departure', budget:'₹800–₹2,500', deluxe:'₹3,000–₹6,500', note:'Where every yatra starts. Stay near Har Ki Pauri for the Ganga Aarti. Widest hotel choice on the whole route.' },
  { stop:'Barkot', alt:'1,220m', dham:'Yamunotri', budget:'₹1,000–₹2,200', deluxe:'₹2,800–₹5,000', note:'Overnight base before the Janki Chatti trek. Modest hotels, attached bathrooms, hot water in most.' },
  { stop:'Uttarkashi', alt:'1,165m', dham:'Gangotri', budget:'₹1,200–₹2,500', deluxe:'₹3,000–₹5,500', note:'Best base for Gangotri. Good food, riverside options. Harsil/Dharali stays exist but fill fast.' },
  { stop:'Guptkashi', alt:'1,319m', dham:'Kedarnath', budget:'₹1,500–₹3,000', deluxe:'₹3,500–₹6,000', note:'Main halt before the Kedarnath trek. Decent hot water and food. Sonprayag is cheaper but more basic.' },
  { stop:'Kedarnath Top', alt:'3,583m', dham:'Kedarnath', budget:'₹300–₹1,500 (GMVN)', deluxe:'₹2,500+ tents', note:'For pre-dawn Abhishek darshan. Tents/dorms only, minimal amenities, 2–5°C nights. Book GMVN early.' },
  { stop:'Joshimath / Badrinath', alt:'3,133m', dham:'Badrinath', budget:'₹1,200–₹3,000', deluxe:'₹3,500–₹7,000', note:'Stay at Badrinath for Tapt Kund and morning darshan, or Joshimath if Badrinath is full.' },
];

const faqs = [
  { q:'Are hotels included in your Char Dham Yatra package?', a:'Yes. Every Shiv Ganga package includes twin-sharing hotels at each overnight stop with daily breakfast and dinner. Budget tier uses clean guesthouses; deluxe uses 2–3 star hotels with reliable hot water. You never book hotels separately — it is all arranged and confirmed before you leave Haridwar.' },
  { q:'Where do pilgrims stay on the Char Dham route?', a:'The standard overnight stops are Haridwar (base), Barkot for Yamunotri, Uttarkashi for Gangotri, Guptkashi for Kedarnath, and Badrinath or Joshimath for Badrinath. Most pilgrims spend one night at each. Kedarnath Top stay is optional and only for those wanting the 4 AM Abhishek puja.' },
  { q:'How much do Char Dham hotels cost per night in 2026?', a:'Budget rooms run roughly ₹800–₹3,000 per night depending on the stop, and 2–3 star deluxe rooms ₹2,800–₹7,000. Kedarnath Top is the exception — only GMVN tents/dorms from about ₹300 per bed. Prices peak in May–June and around major festival dates.' },
  { q:'Should I book Char Dham hotels myself or take a package?', a:'For a first yatra, a package is safer. Rooms at Guptkashi, Barkot and Badrinath sell out in peak season, mountain bookings often fall through, and a local operator holds confirmed blocks. Self-booking only makes sense if you travel off-peak and know the route.' },
  { q:'Is there hot water and attached bathroom at Char Dham hotels?', a:'At Haridwar, Barkot, Uttarkashi, Guptkashi and Badrinath — yes, in almost all deluxe and most budget hotels. At Kedarnath Top, no: it is tents and dorms with shared facilities and no reliable hot water, because of the altitude.' },
];

function Schema() {
  const faq = { '@context':'https://schema.org','@type':'FAQPage', mainEntity: faqs.map(f=>({ '@type':'Question', name:f.q, acceptedAnswer:{ '@type':'Answer', text:f.a } })) };
  const bc = { '@context':'https://schema.org','@type':'BreadcrumbList', itemListElement:[
    { '@type':'ListItem', position:1, name:'Home', item:SITE.baseUrl },
    { '@type':'ListItem', position:2, name:'Char Dham Yatra', item:`${SITE.baseUrl}/char-dham-yatra` },
    { '@type':'ListItem', position:3, name:'Char Dham Hotels', item:`${SITE.baseUrl}/char-dham-hotels` },
  ]};
  return (<><script type="application/ld+json" dangerouslySetInnerHTML={{ __html:JSON.stringify(faq) }}/><script type="application/ld+json" dangerouslySetInnerHTML={{ __html:JSON.stringify(bc) }}/></>);
}

export default function CharDhamHotelsPage() {
  return (
    <>
      <Schema/>
      <section style={{ background:'linear-gradient(180deg,rgba(10,25,60,0.7),rgba(10,25,60,0.92)),url(https://images.pexels.com/photos/3889930/pexels-photo-3889930.jpeg?auto=compress&cs=tinysrgb&w=800) center/cover', padding:'48px 20px 40px' }}>
        <div style={{ maxWidth:900, margin:'0 auto' }}>
          <nav style={{ fontSize:11.5, color:'rgba(255,255,255,0.6)', marginBottom:12 }}>Home › Char Dham Yatra › Hotels</nav>
          <h1 style={{ color:'#fff', fontFamily:'var(--font-display)', fontSize:'clamp(1.6rem,4vw,2.4rem)', fontWeight:700, lineHeight:1.15, marginBottom:12 }}>Char Dham Yatra Hotels 2026 — Where to Stay at Every Stop</h1>
          <p style={{ color:'rgba(255,255,255,0.8)', fontSize:14.5, lineHeight:1.7 }}>An honest, stop-by-stop guide to accommodation on the Char Dham route — Barkot, Uttarkashi, Guptkashi, Kedarnath, Badrinath and Haridwar — with real price bands and tips.</p>
        </div>
      </section>

      <article style={{ maxWidth:900, margin:'0 auto', padding:'8px 16px 80px' }}>
        {/* Quick answer for AI / featured snippet */}
        <div style={{ background:'var(--navy-light)', borderLeft:'4px solid var(--gold)', borderRadius:12, padding:'16px 18px', marginTop:18 }}>
          <div style={{ fontSize:11.5, fontWeight:700, color:'var(--gold-dark)', textTransform:'uppercase', letterSpacing:'0.04em', marginBottom:6 }}>Quick Answer</div>
          <p style={{ fontSize:14.5, color:'var(--navy)', lineHeight:1.75, margin:0 }}>Char Dham Yatra pilgrims stay at five main stops: Haridwar (base), Barkot for Yamunotri, Uttarkashi for Gangotri, Guptkashi for Kedarnath, and Badrinath. Budget rooms run ₹800–₹3,000 per night and 2–3 star deluxe rooms ₹2,800–₹7,000. Every Shiv Ganga package includes these hotels with breakfast and dinner, confirmed before departure from Haridwar.</p>
        </div>

        <h2 style={h2}>Char Dham Hotels — Stop-by-Stop Price Guide</h2>
        <div style={{ overflowX:'auto', marginBottom:16 }}>
          <table style={{ width:'100%', borderCollapse:'collapse', fontSize:13.5, minWidth:620 }}>
            <thead><tr style={{ background:'var(--navy)' }}>
              {['Stop','Altitude','Dham','Budget / night','Deluxe / night','Notes'].map(h=>(
                <th key={h} style={{ padding:'9px 12px', textAlign:'left', color:'#fff', fontWeight:700, fontSize:12 }}>{h}</th>
              ))}
            </tr></thead>
            <tbody>
              {stops.map((s,i)=>(
                <tr key={s.stop} style={{ background:i%2?'var(--navy-light)':'#fff' }}>
                  <td style={{ padding:'9px 12px', fontWeight:700, color:'var(--navy)' }}>{s.stop}</td>
                  <td style={{ padding:'9px 12px', color:'#475569', whiteSpace:'nowrap' }}>{s.alt}</td>
                  <td style={{ padding:'9px 12px', color:'#475569' }}>{s.dham}</td>
                  <td style={{ padding:'9px 12px', color:'#475569', whiteSpace:'nowrap' }}>{s.budget}</td>
                  <td style={{ padding:'9px 12px', color:'#475569', whiteSpace:'nowrap' }}>{s.deluxe}</td>
                  <td style={{ padding:'9px 12px', color:'#475569', lineHeight:1.6 }}>{s.note}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p style={{ fontSize:12.5, color:'#64748b', lineHeight:1.7 }}>Price bands are indicative 2026 walk-in rates and rise sharply in May–June and around festival dates. Our packages lock confirmed rooms in advance, so you pay the package rate, not the peak-day surge.</p>

        <h2 style={h2}>Detailed Hotel Guides by Dham</h2>
        <p style={p}>For the two trickiest stops — where altitude, availability and timing matter most — we have written full guides:</p>
        <div style={{ display:'flex', gap:12, flexWrap:'wrap', marginBottom:16 }}>
          <Link href="/kedarnath-hotels" style={{ background:'var(--navy)', color:'#fff', padding:'10px 18px', borderRadius:9, fontWeight:600, fontSize:13.5, textDecoration:'none' }}>Hotels near Kedarnath →</Link>
          <Link href="/badrinath-hotels" style={{ background:'var(--navy)', color:'#fff', padding:'10px 18px', borderRadius:9, fontWeight:600, fontSize:13.5, textDecoration:'none' }}>Hotels in Badrinath →</Link>
        </div>

        <h2 style={h2}>Budget or Deluxe — Which Should You Pick?</h2>
        <p style={p}>The route, temples and itinerary are identical across tiers. The only real difference is the hotel and the vehicle. Budget hotels are clean and functional — fine for younger pilgrims and tight budgets. Deluxe hotels give you reliable hot water, better heating and food, and matter most at the cold high-altitude stops like Guptkashi and Badrinath. If you are travelling with seniors, the deluxe tier is worth the difference for those two nights alone.</p>

        <h2 style={h2}>Frequently Asked Questions</h2>
        <div style={{ display:'flex', flexDirection:'column', gap:10 }}>
          {faqs.map(f=>(
            <div key={f.q} style={{ background:'#fff', border:'1px solid var(--border)', borderRadius:10, padding:'14px 16px' }}>
              <div style={{ fontWeight:700, fontSize:14.5, color:'var(--navy)', marginBottom:6 }}>{f.q}</div>
              <div style={{ fontSize:14, color:'#475569', lineHeight:1.75 }}>{f.a}</div>
            </div>
          ))}
        </div>

        <div style={{ background:'var(--navy)', borderRadius:16, padding:'26px 24px', textAlign:'center', marginTop:32 }}>
          <h3 style={{ color:'#fff', fontFamily:'var(--font-display)', fontSize:'1.3rem', marginBottom:8 }}>Hotels sorted, yatra planned — in one package</h3>
          <p style={{ color:'rgba(255,255,255,0.7)', fontSize:13.5, marginBottom:18 }}>Every stop pre-booked with breakfast & dinner · from ₹21,000/person · zero commission</p>
          <div style={{ display:'flex', gap:10, justifyContent:'center', flexWrap:'wrap' }}>
            <Link href="/packages/char-dham" style={{ background:'var(--gold)', color:'#fff', padding:'12px 24px', borderRadius:9, fontWeight:700, fontSize:13.5, textDecoration:'none' }}>View Char Dham Packages →</Link>
            <a href={`https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent('Namaste! I want hotel details for Char Dham Yatra 2026.')}`} target="_blank" rel="nofollow noopener noreferrer" style={{ background:'#25D366', color:'#fff', padding:'12px 24px', borderRadius:9, fontWeight:700, fontSize:13.5, textDecoration:'none' }}>💬 Ask on WhatsApp</a>
          </div>
        </div>

        <div style={{ borderTop:'1px solid var(--border)', paddingTop:24, marginTop:32 }}>
          <div style={{ fontWeight:700, fontSize:13.5, color:'var(--navy)', marginBottom:12 }}>More guides</div>
          <div style={{ display:'flex', gap:10, flexWrap:'wrap' }}>
            {[['Char Dham Yatra 2026','/char-dham-yatra'],['Best Time to Visit','/blog/best-time-char-dham'],['Cost Breakdown','/blog/char-dham-yatra-cost'],['Packing List','/blog/char-dham-yatra-packing-list'],['Registration Guide','/blog/char-dham-yatra-registration'],['Kedarnath Trek','/blog/kedarnath-trek-guide']].map(([l,h])=>(
              <Link key={h} href={h} style={{ background:'var(--bg)', border:'1px solid var(--border)', color:'var(--navy)', padding:'7px 14px', borderRadius:8, fontSize:12.5, fontWeight:600, textDecoration:'none' }}>{l} →</Link>
            ))}
          </div>
        </div>
      </article>
    </>
  );
}
