import Link from 'next/link';
import { PACKAGES, SITE, GLOBAL_FAQS } from '@/data/packages';
import FAQAccordion from '@/components/FAQAccordion';

export const metadata = {
  title: 'Char Dham Yatra 2026 — Registration & Travel',
  description: 'Char Dham Yatra 2026 complete guide. Opening dates, registration, route and packages from Haridwar. Direct operator from ₹19,500.',
  keywords: ['Char Dham Yatra 2026','Char Dham Yatra packages 2025','Char Dham opening date 2025','Char Dham Yatra from Haridwar 2025','Char Dham Yatra registration 2025','Char Dham Yatra price 2025','how to do Char Dham Yatra','Char Dham Yatra route'],
  robots: { index: false, follow: true },
  alternates: { canonical: `${SITE.baseUrl}/char-dham-yatra` },
  openGraph: {
    title: 'Char Dham Yatra 2026 — Complete Guide & Packages from Haridwar',
    description: 'Everything about Char Dham Yatra 2026 — dates, packages, prices, registration, what to carry. Trusted operator since 2010.',
    url: `${SITE.baseUrl}/char-dham-yatra-2025`,
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Char Dham Yatra 2026 — Complete Guide & Packages from Haridwar',
    description: 'Everything about Char Dham Yatra 2026 — dates, packages, prices, registration, what to carry. Trusted operator since 2010.',
    images: [{ url: '/opengraph-image', alt: 'Char Dham Yatra 2026 — Complete Guide & Packages from Haridw | Shiv Ganga Travels' }],
  },
};

const charDhamPkgs = PACKAGES.filter(p => p.category === 'char-dham');

function Schema() {
  const article = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Char Dham Yatra 2026 — Complete Guide, Packages & Prices from Haridwar',
    description: 'Complete guide to planning Char Dham Yatra 2025 including opening dates, registration, routes, packages and what to carry.',
    author: { '@type': 'Organization', name: SITE.name, url: SITE.baseUrl },
    publisher: { '@type': 'Organization', name: SITE.name, url: SITE.baseUrl },
    datePublished: '2025-01-15',
    dateModified: new Date().toISOString().split('T')[0],
    mainEntityOfPage: { '@type': 'WebPage', '@id': `${SITE.baseUrl}/char-dham-yatra-2025` },
    image: '/opengraph-image',
    keywords: 'Char Dham Yatra 2026, Char Dham packages, Kedarnath Yatra, Badrinath Yatra',
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(article) }}/>;
}

const h2 = { fontFamily:'var(--font-display)', fontSize:'clamp(1.4rem,3vw,1.9rem)', fontWeight:600, color:'var(--navy)', letterSpacing:'-0.02em', marginBottom:14, marginTop:36 };
const h3 = { fontSize:'1.1rem', fontWeight:700, color:'var(--text)', marginBottom:10, marginTop:24 };
const p  = { fontSize:14.5, color:'var(--text-mid)', lineHeight:1.85, marginBottom:14 };

export default function CharDhamGuide2025() {
  return (
    <>
      <Schema/>
      {/* Hero */}
      <section style={{ background:'linear-gradient(145deg,var(--navy) 0%,var(--navy-mid) 60%,var(--teal) 100%)', padding:'56px 20px 44px', textAlign:'center' }}>
        <div style={{ maxWidth:800, margin:'0 auto' }}>
          <span style={{ background:'rgba(232,146,10,0.18)', color:'#FFD166', fontSize:11, fontWeight:700, letterSpacing:'0.14em', textTransform:'uppercase', padding:'5px 16px', borderRadius:100, display:'inline-block', marginBottom:16, border:'1px solid rgba(232,146,10,0.3)' }}>Complete Guide 2025</span>
          <h1 className="display-title" style={{ color:'#fff', fontSize:'clamp(1.8rem,4.5vw,3rem)', marginBottom:16 }}>
            Char Dham Yatra 2026 — Opening Dates, New Rules & Travel Guide
          </h1>
          <p style={{ color:'rgba(255,255,255,0.8)', fontSize:15, lineHeight:1.7 }}>
            2026 Season is Open · Yamunotri & Gangotri: Apr 19 · Kedarnath: Apr 22 · Badrinath: Apr 23
          </p>
        </div>
      </section>

      {/* Breadcrumb */}
      <nav style={{ background:'var(--bg)', borderBottom:'1px solid var(--border)', padding:'10px 20px' }}>
        <div style={{ maxWidth:'var(--container)', margin:'0 auto', fontSize:12, color:'var(--text-muted)', display:'flex', gap:6 }}>
          Home
          <span>›</span>
          <span>Char Dham Yatra 2025</span>
        </div>
      </nav>

      {/* Article */}
      <article style={{ maxWidth:860, margin:'0 auto', padding:'40px 20px 60px' }}>

        <p style={{ fontSize:15.5, color:'#334155', lineHeight:1.85, marginBottom:16 }}>The <strong>Char Dham Yatra</strong> is one of the most sacred pilgrimages in Hinduism, encompassing four divine shrines nestled in the Garhwal Himalayas of Uttarakhand — <strong>Yamunotri, Gangotri, Kedarnath,</strong> and <strong>Badrinath</strong>. Completing this circuit, traditionally done in a clockwise direction starting from Yamunotri, is believed to wash away a lifetime of sins and grant liberation (<em>moksha</em>).</p>

        <p style={{ fontSize:15.5, color:'#334155', lineHeight:1.85, marginBottom:16 }}>The 2025 Char Dham season is open from <strong>May to October</strong>. With Shiv Ganga Travels, you can complete the entire Char Dham Yatra from <strong>₹19,500 per person</strong>, all-inclusive with hotel, meals, private AC vehicle, and expert guide.</p>

        {/* Quick package links */}
        <div style={{ background:'var(--navy-light)', borderRadius:14, padding:'20px 22px', marginBottom:32, border:'1px solid rgba(15,43,91,0.1)' }}>
          <div style={{ fontWeight:700, fontSize:14, color:'var(--navy)', marginBottom:14 }}>📦 Our Char Dham Packages 2025:</div>
          <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(220px,1fr))', gap:10 }}>
            {charDhamPkgs.map(p => (
              <Link key={p.slug} href={`/packages/${p.slug}`}
                style={{ background:'#fff', padding:'12px 16px', borderRadius:10, border:'1px solid var(--border)', textDecoration:'none', display:'flex', justifyContent:'space-between', alignItems:'center', gap:8 }}>
                <div>
                  <div style={{ fontSize:13, fontWeight:600, color:'var(--text)' }}>{p.name}</div>
                  <div style={{ fontSize:11.5, color:'var(--text-muted)' }}>{p.duration.nights}N/{p.duration.days}D</div>
                </div>
                <div style={{ fontWeight:800, fontSize:16, color:'var(--navy)', whiteSpace:'nowrap' }}>₹{p.price.discounted.toLocaleString('en-IN')}</div>
              </Link>
            ))}
          </div>
        </div>

        <h2 style={h2}>The Four Sacred Dhams</h2>
        {[
          { name:'Yamunotri', alt:'3,291m', deity:'Goddess Yamuna', desc:'The westernmost dham and first stop in the Char Dham circuit. The temple enshrines a black marble idol of Goddess Yamuna. The famous Surya Kund hot spring here is used to cook rice and potatoes as prasad. A 6 km trek from Janki Chatti leads to the temple.' },
          { name:'Gangotri', alt:'3,415m', deity:'Goddess Ganga', desc:'The origin of the sacred Ganga river. According to legend, King Bhagirath performed penance here to bring Ganga to earth. No trek required — the temple is accessible by road. A side trip to Gaumukh glacier (20 km trek) is available for the adventurous.' },
          { name:'Kedarnath', alt:'3,583m', deity:'Lord Shiva', desc:'One of the 12 Jyotirlingas and the most challenging of the four dhams. The ancient stone temple survives Himalayan winters every year. A 16 km trek from Gaurikund leads to the shrine — pony, palki, and helicopter alternatives are available.' },
          { name:'Badrinath', alt:'3,133m', deity:'Lord Vishnu', desc:'The final and most accessible dham — motor road leads right to the temple. The divine idol of Badrivishal (Lord Vishnu in meditative posture) is believed to be swayambhu (self-manifested). Mana Village, 3 km ahead, is the last Indian village before the Tibet border.' },
        ].map(d => (
          <div key={d.name} style={{ marginBottom:20, padding:'16px 20px', background:'#fff', borderRadius:12, border:'1px solid var(--border)' }}>
            <h3 style={{ ...h3, margin:0, marginBottom:6, display:'flex', justifyContent:'space-between', alignItems:'center', flexWrap:'wrap', gap:8 }}>
              {d.name} — {d.deity}
              <span style={{ fontSize:12, fontWeight:600, background:'var(--navy-light)', color:'var(--navy)', padding:'3px 10px', borderRadius:100 }}>Altitude: {d.alt}</span>
            </h3>
            <p style={{ ...p, margin:0 }}>{d.desc}</p>
          </div>
        ))}

        <h2 style={h2}>Best Time for Char Dham Yatra 2025</h2>
        <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(200px,1fr))', gap:12, marginBottom:20 }}>
          {[
            { season:'Apr 19 – Mid June', rating:'⭐⭐⭐⭐⭐', label:'Peak', color:'#dcfce7', border:'#86efac', tip:'Season open. Temples opened Apr 19-23. May peak — book 60 days ahead.' },
            { season:'Mid Sept – October', rating:'⭐⭐⭐⭐⭐', label:'Best', color:'#dcfce7', border:'#86efac', tip:'Post-monsoon. Clear skies, fewer crowds, great views.' },
            { season:'July – August', rating:'⭐⭐', label:'Avoid', color:'#fef3c7', border:'#fcd34d', tip:'Heavy monsoon. Landslide risk. Many roads blocked.' },
            { season:'Nov – April', rating:'❌', label:'Closed', color:'#fee2e2', border:'#fca5a5', tip:'Temples closed. Snow-covered roads. Not accessible.' },
          ].map(s => (
            <div key={s.season} style={{ background:s.color, border:`1px solid ${s.border}`, borderRadius:10, padding:'14px 16px' }}>
              <div style={{ fontWeight:700, fontSize:13, marginBottom:4 }}>{s.season}</div>
              <div style={{ fontSize:12, marginBottom:6 }}>{s.rating} <strong>{s.label}</strong></div>
              <div style={{ fontSize:12, color:'var(--text-mid)', lineHeight:1.5 }}>{s.tip}</div>
            </div>
          ))}
        </div>

        <h2 style={h2}>Char Dham Yatra 2025 — Registration & Permits</h2>
        <p style={{ fontSize:15.5, color:'#334155', lineHeight:1.85, marginBottom:16 }}>Since 2017, the Government of Uttarakhand requires <strong>mandatory biometric registration</strong> for all Char Dham pilgrims. This helps manage crowd density at high-altitude temples and enables emergency response. Daily pilgrim limits are enforced, particularly at Kedarnath and Badrinath.</p>
        <p style={{ fontSize:15.5, color:'#334155', lineHeight:1.85, marginBottom:16 }}><strong>Shiv Ganga Travels handles your registration completely</strong> — just provide a copy of your government ID (Aadhaar/passport), a photo, and your travel dates. We submit the registration and share your Yatra Card 72 hours before departure. Call us at <a href='tel:+917017082807' style={{ color:'var(--navy)', fontWeight:600 }}
              onClick={() => { try { if(window.gtag) window.gtag('event','phone_call_click',{event_category:'engagement',event_label:'phone_cta',value:1}); } catch(e){} }}>+91-7017082807</a>.</p>

        <h2 style={h2}>Char Dham Yatra Route Map</h2>
        <p style={{ fontSize:15.5, color:'#334155', lineHeight:1.85, marginBottom:16 }}>The traditional route follows a clockwise direction:</p>
        <div style={{ background:'var(--bg)', borderRadius:12, padding:'18px 20px', border:'1px solid var(--border)', fontSize:13.5, lineHeight:2, marginBottom:20 }}>
          <strong>Haridwar</strong> → Barkot → <strong>Yamunotri</strong> → Uttarkashi → <strong>Gangotri</strong> → Guptkashi → Gaurikund → <strong>Kedarnath</strong> → Rudraprayag → Joshimath → <strong>Badrinath</strong> → Rishikesh → <strong>Haridwar</strong>
        </div>

        <h2 style={h2}>Frequently Asked Questions</h2>
        <FAQAccordion faqs={GLOBAL_FAQS.slice(0,6)}/>

        {/* CTA */}
        <div style={{ background:'var(--navy)', borderRadius:16, padding:'28px 24px', textAlign:'center', marginTop:36 }}>
          <h3 style={{ color:'#fff', fontFamily:'var(--font-display)', fontSize:'1.4rem', marginBottom:10 }}>Ready to Plan Your Char Dham Yatra 2025?</h3>
          <p style={{ color:'rgba(255,255,255,0.75)', fontSize:14, marginBottom:20 }}>Speak with our yatra experts. Free custom itinerary within 2 hours.</p>
          <div style={{ display:'flex', gap:12, justifyContent:'center', flexWrap:'wrap' }}>
            <a href='tel:+917017082807' style={{ background:'#fff', color:'var(--navy)', padding:'12px 24px', borderRadius:9, fontWeight:700, fontSize:13.5, textDecoration:'none' }}
              onClick={() => { try { if(window.gtag) window.gtag('event','phone_call_click',{event_category:'engagement',event_label:'phone_cta',value:1}); } catch(e){} }}>📞 {SITE.phone}</a>
            <a href={`https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent('Namaste! I want to plan Char Dham Yatra 2025.')}`} target="_blank" rel="nofollow noopener noreferrer"
              style={{ background:'#25D366', color:'#fff', padding:'12px 24px', borderRadius:9, fontWeight:700, fontSize:13.5, textDecoration:'none' }}
              onClick={() => { try { if(window.gtag) window.gtag('event','generate_lead',{event_category:'engagement',event_label:'whatsapp_hero_cta',value:1}); } catch(e){} }}>💬 WhatsApp Us</a>
            View Packages →
          </div>
        </div>
      </article>
    </>
  );
}
