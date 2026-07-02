import Link from 'next/link';
import { SITE } from '@/data/packages';
import BlogCTA from '@/components/BlogCTA';
import BlogAuthor from '@/components/BlogAuthor';

export const metadata = {
  title: 'Kedarnath Helicopter Booking 2026: Price & IRCTC',
  description: 'Kedarnath helicopter booking 2026: IRCTC fares — Sersi ₹6,390, Phata ₹10,164, Guptkashi ₹12,762 round trip. Heliyatra portal steps and weather tips.',
  keywords: ['kedarnath helicopter booking 2026', 'kedarnath helicopter price 2026', 'kedarnath helicopter booking online', 'phata to kedarnath helicopter', 'kedarnath helicopter irctc', 'kedarnath helicopter cost 2026', 'guptkashi kedarnath helicopter'],
  alternates: { canonical: `${SITE.baseUrl}/blog/kedarnath-helicopter-booking` },
  openGraph: {
    title: 'Kedarnath Helicopter Booking 2026: Price & IRCTC',
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
  { q: 'How much does a Kedarnath helicopter cost in 2026?', a: 'Official 2026 round-trip fares are ₹6,390 from Sersi, ₹10,164 from Phata and ₹12,762 from Guptkashi per person, plus a ₹300 IRCTC convenience fee and 18% GST. One-way fares are roughly ₹3,043 (Sersi), ₹4,840 (Phata) and ₹6,077 (Guptkashi). Fares are fixed by UCADA and sold only on the IRCTC HeliYatra portal.' },
  { q: 'Which is the best helipad for Kedarnath helicopter?', a: 'Phata is the practical choice — the most operators and best availability, at a middle price. Sersi is closest to Kedarnath and cheapest but its slots sell out fastest. Guptkashi is the most expensive yet the easiest helipad to reach by road and stay near. All three reach the temple in 7–10 minutes.' },
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
          <p style={{ color:'rgba(255,255,255,0.8)', fontSize:15, lineHeight:1.7 }}>Official IRCTC fares ₹6,390–₹12,762 round trip · Sersi · Phata · Guptkashi · How to book</p>
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

        {/* Quick Answer — claim-first, extractable for AI Overviews / ChatGPT */}
        <div style={{ background:'var(--navy-light)', borderLeft:'4px solid var(--gold)', borderRadius:12, padding:'16px 18px', marginBottom:24 }}>
          <div style={{ fontSize:11.5, fontWeight:700, color:'var(--gold-dark)', textTransform:'uppercase', letterSpacing:'0.04em', marginBottom:6 }}>Quick Answer</div>
          <p style={{ fontSize:14.5, color:'var(--navy)', lineHeight:1.75, margin:0 }}>Kedarnath helicopters fly from three helipads — <strong>Sersi, Phata and Guptkashi</strong> — reaching the temple in 7–10 minutes. Official 2026 round-trip fares are <strong>₹6,390 (Sersi), ₹10,164 (Phata) and ₹12,762 (Guptkashi)</strong> per person, plus a ₹300 IRCTC fee and 18% GST. Tickets are booked only on the IRCTC HeliYatra portal (heliyatra.irctc.co.in) and require a valid Char Dham registration. Shiv Ganga Travels arranges the road journey, registration and morning-slot guidance around your flight.</p>
        </div>

        <h2 style={h2}>Kedarnath Helicopter Price 2026 (Official IRCTC Fares)</h2>
        <p style={{ fontSize:15.5, color:'#334155', lineHeight:1.85, marginBottom:16 }}>Fares are fixed per helipad by the Uttarakhand Civil Aviation Development Authority (UCADA) and charged <strong>per person</strong>. The difference reflects distance from Kedarnath, not service quality — Sersi is closest and cheapest, Guptkashi farthest and priciest. All fares below exclude the ₹300 IRCTC convenience fee and 18% GST.</p>
        <div style={{ overflowX:'auto', marginBottom:14 }}>
          <table style={{ width:'100%', borderCollapse:'collapse', fontSize:13.5, minWidth:540 }}>
            <thead><tr style={{ background:'var(--navy)' }}>
              {['Helipad','Distance to Kedarnath','Round-trip fare','One-way fare','Notes'].map(hd=>(
                <th key={hd} style={{ padding:'9px 12px', textAlign:'left', color:'#fff', fontWeight:700, fontSize:12 }}>{hd}</th>
              ))}
            </tr></thead>
            <tbody>
              {[
                ['Sersi (Sirsi)','Closest','₹6,390','₹3,043','Cheapest. Highest demand — hardest slot to grab.'],
                ['Phata','Middle','₹10,164','₹4,840','Best balance of price and availability. Most operators.'],
                ['Guptkashi','Farthest','₹12,762','₹6,077','Priciest but easiest helipad to reach by road.'],
              ].map((r,i)=>(
                <tr key={r[0]} style={{ background:i%2?'var(--bg)':'#fff' }}>
                  <td style={{ padding:'9px 12px', fontWeight:700, color:'var(--navy)' }}>{r[0]}</td>
                  <td style={{ padding:'9px 12px', color:'#475569' }}>{r[1]}</td>
                  <td style={{ padding:'9px 12px', color:'#475569', fontWeight:700, whiteSpace:'nowrap' }}>{r[2]}</td>
                  <td style={{ padding:'9px 12px', color:'#475569', whiteSpace:'nowrap' }}>{r[3]}</td>
                  <td style={{ padding:'9px 12px', color:'#475569', lineHeight:1.55 }}>{r[4]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p style={{ ...p, background:'var(--gold-light)', padding:'12px 16px', borderRadius:10, border:'1px solid rgba(232,146,10,0.2)', fontSize:13.5 }}>
          ⚠️ <strong>Book only on the official portal:</strong> Kedarnath helicopter tickets are sold exclusively on <strong>heliyatra.irctc.co.in</strong>. IRCTC allocates the operator per flight — you don’t choose it. Any site or agent selling &ldquo;guaranteed&rdquo; heli tickets outside IRCTC is unauthorised; the Uttarakhand administration has flagged fake booking sites every season. A one-way ticket up plus trek down is a popular money-saver for fit pilgrims.
        </p>

        <h2 style={h2}>The Three Helipads — Which One Should You Choose?</h2>
        <p style={{ fontSize:15.5, color:'#334155', lineHeight:1.85, marginBottom:16 }}>All three reach Kedarnath in roughly 7–10 minutes; the choice comes down to budget, road access and how fast slots vanish. <strong>Sersi</strong> is cheapest but its slots sell out fastest. <strong>Phata</strong> is the practical middle choice with the most operators and best availability. <strong>Guptkashi</strong> costs the most but is the easiest helipad to drive to and to stay near the night before. If you’re on a Kedarnath or Char Dham package with us, we point you to <strong>Phata or Sersi</strong> for the best price-to-availability balance and book your road leg to match.</p>

        <h2 style={h2}>Weather & When to Book Morning Slots</h2>
        <p style={{ fontSize:15.5, color:'#334155', lineHeight:1.85, marginBottom:16 }}>This is the most important practical tip — and most operators won’t tell you this upfront. <strong>Kedarnath gets heavy cloud cover almost every afternoon from 11 AM onwards</strong>, especially in the shoulder season. If your flight is scheduled for 2 PM and clouds roll in, it gets cancelled.</p>
        <p style={{ fontSize:15.5, color:'#334155', lineHeight:1.85, marginBottom:16 }}>Always request the <strong>first morning slot (6:00 AM – 8:00 AM)</strong>. Yes, it means waking at 4 AM. But the success rate for morning flights is over 95%. Afternoon flights, especially in May–June, get cancelled frequently. When we book helicopter for our pilgrims, morning slots are non-negotiable.</p>

        <h2 style={h2}>How to Book on the IRCTC HeliYatra Portal (Step by Step)</h2>
        <p style={{ fontSize:15.5, color:'#334155', lineHeight:1.85, marginBottom:16 }}>Since the system moved fully to IRCTC, this is the only official way to buy a Kedarnath helicopter ticket online. Bookings typically open in mid-April for the season, with a 6 PM daily release window — and prime Sersi/Phata slots can vanish within hours.</p>
        <ol style={{ paddingLeft:22, marginBottom:20, color:'var(--text-mid)', fontSize:14.5, lineHeight:2.1 }}>
          <li>Complete your <Link href="/blog/char-dham-yatra-registration" style={{ color:'var(--teal)', textDecoration:'underline' }}>Char Dham registration</Link> first — you cannot book a heli ticket without a valid registration ID.</li>
          <li>Go to the official portal <strong>heliyatra.irctc.co.in</strong> (no other site is authorised) and log in.</li>
          <li>Pick your helipad — Sersi, Phata or Guptkashi — then the date and time slot.</li>
          <li>Enter passenger details linked to the registration. Up to 6 seats per ID (12 for groups).</li>
          <li>Pay online. IRCTC allocates the operator per flight by rotation — you don’t choose the company.</li>
          <li>Save the e-ticket; carry the same ID you registered with to the helipad.</li>
        </ol>

        <h2 style={h2}>How We Help Around Your Helicopter Booking</h2>
        <p style={{ fontSize:15.5, color:'#334155', lineHeight:1.85, marginBottom:16 }}>The flight itself is IRCTC-only, but the helicopter is just 7 minutes of a multi-day journey. When you book a <strong>Kedarnath Yatra package</strong> with Shiv Ganga Travels, we take care of everything around it:</p>
        <ol style={{ paddingLeft:22, marginBottom:20, color:'var(--text-mid)', fontSize:14.5, lineHeight:2.2 }}>
          <li>We complete your mandatory Char Dham registration so you’re eligible to book the heli ticket</li>
          <li>We advise the best helipad for your dates and push you toward a morning slot</li>
          <li>We arrange the road journey, hotel and timing so you reach the helipad rested and on time</li>
          <li>You receive helipad location, check-in time, and what to carry via WhatsApp</li>
          <li>If weather cancels the flight, we immediately arrange the trek, pony or a rebooked road plan so your darshan still happens</li>
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
