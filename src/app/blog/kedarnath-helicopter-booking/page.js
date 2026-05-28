import Link from 'next/link';
import { SITE } from '@/data/packages';
import BlogCTA from '@/components/BlogCTA';
import BlogAuthor from '@/components/BlogAuthor';

export const metadata = {
  title: 'Kedarnath Helicopter Booking 2026 – Price, Helipads, IRCTC Portal & Booking Tips',
  description: 'Kedarnath helicopter booking 2026: prices ₹7,500–9,500 per person, helipads at Phata, Guptkashi, and Sirsi. How to book via IRCTC heliyatra portal, cancellation policy, and weather tips.',
  keywords: ['kedarnath helicopter booking 2026', 'kedarnath helicopter price 2026', 'kedarnath helicopter booking online', 'phata to kedarnath helicopter', 'kedarnath helicopter irctc', 'kedarnath helicopter cost 2026', 'guptkashi kedarnath helicopter'],
  alternates: { canonical: `${SITE.baseUrl}/blog/kedarnath-helicopter-booking` },
  openGraph: {
    title: 'Kedarnath Helicopter Booking 2026 – Price, Helipads, IRCTC Portal & Booking Tips',
    description: 'How to book Kedarnath helicopter — prices, helipads, tips.',
    url: `${SITE.baseUrl}/blog/kedarnath-helicopter-booking`,
    type: 'article',
    images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: 'Kedarnath Helicopter Booking 2026 — Price & Guide | Shiv Ganga Travels' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kedarnath Helicopter Booking 2026 — Complete Guide',
    description: 'How to book Kedarnath helicopter — prices, helipads, tips.',
    images: [{ url: '/opengraph-image', alt: 'Kedarnath Helicopter Booking 2026 — Complete Guide | Shiv Ganga Travels' }],
  },
};

const faqData = [
  { q: 'How much does a Kedarnath helicopter cost in 2026?', a: 'Kedarnath helicopter prices for 2026 range from ₹7,500 to ₹9,500 per person for a round trip, depending on the helipad (Phata, Sersi, or Guptkashi) and the operator. Prices increase closer to peak season. Book early for the best rates.' },
  { q: 'Which is the best helipad for Kedarnath helicopter?', a: 'Phata helipad (35 km from Kedarnath) is the most popular and has the most operators. Sersi helipad is 29 km away and slightly cheaper. Guptkashi helipad is 48 km away — good if you\'re already staying in Guptkashi. All three reach Kedarnath in 7–10 minutes.' },
  { q: 'What happens if the Kedarnath helicopter is cancelled due to weather?', a: 'Weather cancellations are fully refunded or rescheduled at no extra cost. Cloud cover at Kedarnath is common in the afternoon — morning slots (6–10 AM) have the best success rate. Always book return flight for the same day and plan an extra buffer day in your itinerary.' },
  { q: 'Can I book Kedarnath helicopter for senior citizens?', a: 'Yes, absolutely. Helicopter is actually our recommended option for pilgrims above 65 years of age, those with heart or lung conditions, or anyone who cannot manage the 16km trek. The flight is just 7–10 minutes and completely safe.' },
  { q: 'How early in advance should I book Kedarnath helicopter?', a: 'For May and June (peak season), book helicopter slots at least 60–90 days in advance. Slots fill up very quickly. September–October is slightly more flexible but still books up 30–45 days ahead. Last-minute bookings are possible but risky.' },
];

function Schema() {
  const article = { '@context':'https://schema.org','@type':'BlogPosting', headline:'Kedarnath Helicopter Booking 2026 — Price, Helipads, Tips & How to Book', author: {
        '@type': 'Person',
        name: 'Sumit Mishra',
        jobTitle: 'Operations Manager, Shiv Ganga Travels',
        url: `${SITE.baseUrl}/about`,
        sameAs: ['https://www.linkedin.com/in/sumit-mishra-863734171/', 'https://www.facebook.com/sumi2112'],
      }, publisher:{ '@type':'Organization', name:SITE.name, url:SITE.baseUrl }, datePublished:'2025-02-10', dateModified:'2026-04-27', mainEntityOfPage:`${SITE.baseUrl}/blog/kedarnath-helicopter-booking` };
  const faq = { '@context':'https://schema.org','@type':'FAQPage', mainEntity:faqData.map(f=>({'@type':'Question',name:f.q,acceptedAnswer:{'@type':'Answer',text:f.a}})) };
  return (<><script type="application/ld+json" dangerouslySetInnerHTML={{ __html:JSON.stringify(article) }}/><script type="application/ld+json" dangerouslySetInnerHTML={{ __html:JSON.stringify(faq) }}/></>);
}

const h2 = { fontFamily:'var(--font-display)', fontSize:'clamp(1.3rem,2.5vw,1.75rem)', fontWeight:600, color:'var(--navy)', letterSpacing:'-0.02em', marginBottom:12, marginTop:36 };
const p  = { fontSize:15, color:'var(--text-mid)', lineHeight:1.85, marginBottom:16 };

export default function KedarnathHelicopterBooking() {
  return (
    <>
      <Schema/>
      <section style={{ background:'linear-gradient(145deg,var(--navy) 0%,var(--navy-mid) 60%,var(--teal) 100%)', padding:'56px 20px 44px', textAlign:'center' }}>
        <div style={{ maxWidth:820, margin:'0 auto' }}>
          <span style={{ background:'rgba(232,146,10,0.18)', color:'#FFD166', fontSize:11, fontWeight:700, letterSpacing:'0.12em', textTransform:'uppercase', padding:'5px 16px', borderRadius:100, display:'inline-block', marginBottom:16 }}>Helicopter Guide · 2026</span>
          <h1 className="display-title" style={{ color:'#fff', fontSize:'clamp(1.8rem,4.5vw,3rem)', marginBottom:14 }}>
            Kedarnath Helicopter Booking 2026 — Complete Guide
          </h1>
          <p style={{ color:'rgba(255,255,255,0.8)', fontSize:15, lineHeight:1.7 }}>₹7,500–9,500 round trip · Phata · Sersi · Guptkashi · Weather tips · How to book</p>
        </div>
      </section>

      <nav style={{ background:'var(--bg)', borderBottom:'1px solid var(--border)', padding:'10px 20px' }}>
        <div style={{ maxWidth:'var(--container)', margin:'0 auto', fontSize:12, color:'var(--text-muted)', display:'flex', gap:6, flexWrap:'wrap' }}>
          Home
          <span>›</span>
          Blog
          <span>›</span>
          <span>Kedarnath Helicopter Booking 2026</span>
        </div>
      </nav>

      <article className="blog-container" itemScope itemType="https://schema.org/Article">

        {/* Author byline — E-E-A-T signal */}
        <BlogAuthor variant="top" author="sumit" />

        <p style={{ fontSize:15.5, color:'#334155', lineHeight:1.85, marginBottom:16 }}>My father refused to consider the Kedarnath helicopter for years. "Yatra toh paidal karte hain," he would say — the pilgrimage is done on foot. Then at 71, with a knee replacement and early-stage COPD, he finally agreed. Seven minutes from Phata to Kedarnath. He stood inside the ancient stone temple and wept for twenty minutes. "Same darshan," he said afterwards, smiling. "Shiva doesn’t care how you arrive."</p>

        <p style={{ fontSize:15.5, color:'#334155', lineHeight:1.85, marginBottom:16 }}>Whether you’re booking for yourself, your parents, or someone who simply cannot manage the 16km trek — this is everything you need to know about <strong>Kedarnath helicopter booking in 2026</strong>, written honestly from 15 years of arranging these flights for our pilgrims.</p>

        <h2 style={h2}>Kedarnath Helicopter Price 2026</h2>
        <p style={{ fontSize:15.5, color:'#334155', lineHeight:1.85, marginBottom:16 }}>Helicopter prices are <strong>per person, round trip</strong>. One-way bookings are rarely available. Prices vary by helipad:</p>
        <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(200px,1fr))', gap:12, marginBottom:20 }}>
          {[
            { pad:'Phata Helipad', dist:'35 km', price:'₹8,000–9,500', note:'Most popular. Most operators. Best availability.', rating:'⭐⭐⭐' },
            { pad:'Sersi Helipad', dist:'29 km', price:'₹7,500–8,500', note:'Slightly cheaper. Fewer operators. Good option.', rating:'⭐⭐⭐' },
            { pad:'Guptkashi Helipad', dist:'48 km', price:'₹7,000–8,000', note:'Cheapest option. Good if staying in Guptkashi.', rating:'⭐⭐' },
          ].map(h => (
            <div key={h.pad} style={{ background:'#fff', borderRadius:10, padding:'16px', border:'1px solid var(--border)' }}>
              <div style={{ fontWeight:700, fontSize:14, color:'var(--navy)', marginBottom:4 }}>{h.pad}</div>
              <div style={{ fontSize:12, color:'var(--text-muted)', marginBottom:6 }}>{h.rating} · {h.dist} from Kedarnath</div>
              <div style={{ fontWeight:800, fontSize:18, color:'var(--navy)', marginBottom:6 }}>{h.price}</div>
              <div style={{ fontSize:12.5, color:'var(--text-mid)', lineHeight:1.5 }}>{h.note}</div>
            </div>
          ))}
        </div>
        <p style={{ ...p, background:'var(--gold-light)', padding:'12px 16px', borderRadius:10, border:'1px solid rgba(232,146,10,0.2)', fontSize:13.5 }}>
          💡 <strong>Important:</strong> These prices are approximate for 2026. Actual rates depend on the operator, booking date, and season. Prices in May–June (peak) are typically 15–20% higher than September–October.
        </p>

        <h2 style={h2}>The Three Helipads — Which One Should You Choose?</h2>
        <p style={{ fontSize:15.5, color:'#334155', lineHeight:1.85, marginBottom:16 }}>All three helipads reach Kedarnath in roughly 7–10 minutes. The choice depends on where you’re staying and your budget. If you’re on a standard Char Dham or Kedarnath package with us, we book from <strong>Phata or Sersi</strong> as they offer the best combination of price, availability, and reliability.</p>

        <h2 style={h2}>Weather & When to Book Morning Slots</h2>
        <p style={{ fontSize:15.5, color:'#334155', lineHeight:1.85, marginBottom:16 }}>This is the most important practical tip — and most operators won’t tell you this upfront. <strong>Kedarnath gets heavy cloud cover almost every afternoon from 11 AM onwards</strong>, especially in the shoulder season. If your flight is scheduled for 2 PM and clouds roll in, it gets cancelled.</p>
        <p style={{ fontSize:15.5, color:'#334155', lineHeight:1.85, marginBottom:16 }}>Always request the <strong>first morning slot (6:00 AM – 8:00 AM)</strong>. Yes, it means waking at 4 AM. But the success rate for morning flights is over 95%. Afternoon flights, especially in May–June, get cancelled frequently. When we book helicopter for our pilgrims, morning slots are non-negotiable.</p>

        <h2 style={h2}>How to Book Kedarnath Helicopter Through Us</h2>
        <p style={{ fontSize:15.5, color:'#334155', lineHeight:1.85, marginBottom:16 }}>When you book a <strong>Kedarnath Yatra package</strong> with Shiv Ganga Travels, we handle the helicopter booking as part of the package or as an add-on. Here's our process:</p>
        <ol style={{ paddingLeft:22, marginBottom:20, color:'var(--text-mid)', fontSize:14.5, lineHeight:2.2 }}>
          <li>You confirm your travel dates with us (at least 60 days ahead for peak season)</li>
          <li>We check availability across all three helipads and secure the best rate</li>
          <li>You pay the helicopter amount to us — we handle the booking and send confirmation</li>
          <li>You receive helipad location, check-in time, and what to carry via WhatsApp</li>
          <li>If weather cancels the flight, we immediately rebook or arrange ground transport and refund the helicopter portion</li>
        </ol>


        {/* ── Mid-article conversion CTA ── */}
        <BlogCTA variant="inline" intent="kedarnath" />
        <h2 style={h2}>Frequently Asked Questions</h2>
        <div style={{ display:'flex', flexDirection:'column', gap:0, background:'#fff', borderRadius:12, border:'1px solid var(--border)', overflowX:'auto', marginBottom:24 }}>
          {faqData.map((f, i) => (
            <div key={i} style={{ padding:'16px 20px', borderBottom:i<faqData.length-1?'1px solid var(--border)':'none' }}>
              <div style={{ fontWeight:700, fontSize:14, color:'var(--navy)', marginBottom:6 }}>Q: {f.q}</div>
              <div style={{ fontSize:15, color:'#334155', lineHeight:1.7 }}>A: {f.a}</div>
            </div>
          ))}
        </div>

        <div style={{ background:'var(--navy)', borderRadius:16, padding:'28px 24px', textAlign:'center' }}>
          <h3 style={{ color:'#fff', fontFamily:'var(--font-display)', fontSize:'1.4rem', marginBottom:10 }}>Book Kedarnath Helicopter 2026</h3>
          <p style={{ color:'rgba(255,255,255,0.75)', fontSize:14, marginBottom:20 }}>We handle helipad booking, biometric registration & VIP darshan. Call us before slots fill up.</p>
          <div style={{ display:'flex', gap:12, justifyContent:'center', flexWrap:'wrap' }}>
            <a href={`https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent('Namaste! I want to book Kedarnath helicopter for 2026.')}`} target="_blank" rel="nofollow noopener noreferrer"
              style={{ background:'#25D366', color:'#fff', padding:'12px 24px', borderRadius:9, fontWeight:700, fontSize:14, textDecoration:'none' }}>💬 WhatsApp for Booking</a>
            <a href='tel:+917817996730' style={{ background:'#fff', color:'var(--navy)', padding:'12px 24px', borderRadius:9, fontWeight:700, fontSize:14, textDecoration:'none' }}>📞 Call Direct</a>
          </div>
        </div>

        <div style={{ borderTop:'1px solid var(--border)', paddingTop:24, marginTop:32 }}>
          <div style={{ fontWeight:700, fontSize:13.5, color:'var(--navy)', marginBottom:12 }}>Related Guides</div>
          <div style={{ display:'flex', gap:10, flexWrap:'wrap' }}>
            {[['Kedarnath Packages','/kedarnath-yatra'],['Char Dham Helicopter','/char-dham-helicopter'],['Kedarnath Trek Guide','/blog/kedarnath-trek-guide'],['Pony vs Helicopter','/blog/kedarnath-pony-vs-helicopter'],['Kedarnath Darshan Timings','/blog/kedarnath-darshan-timing'],['How to Reach Kedarnath','/blog/how-to-reach-kedarnath']].map(([l,h])=>(
              <Link key={h} href={h} style={{ background:'var(--bg)', border:'1px solid var(--border)', color:'var(--navy)', padding:'7px 14px', borderRadius:8, fontSize:12.5, fontWeight:600, textDecoration:'none' }}>{l} →</Link>
            ))}
          </div>
        </div>
      
        {/* ── End-of-article booking CTA ── */}
        <BlogCTA variant="footer" intent="kedarnath" />
</article>
    </>
  );
}
