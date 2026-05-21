import Link from 'next/link';
import { SITE } from '@/data/packages';
import BlogCTA from '@/components/BlogCTA';

export const metadata = {
  title: 'Char Dham Yatra Group Package 2026 – Price, Discount & Custom Itinerary for 10+ Pilgrims',
  description: 'Book Char Dham Yatra for groups of 10 or more and save 10–15%. Custom itinerary, dedicated vehicle, group meals included. Packages from ₹17,500 per person. WhatsApp to get a quote.',
  keywords: ['char dham yatra group package 2026', 'char dham yatra group booking', 'char dham group package price 2026', 'char dham yatra large group', 'char dham group tour haridwar', 'char dham group discount 2026'],
  alternates: { canonical: `${SITE.baseUrl}/blog/char-dham-group-package` },
  openGraph: { title: 'Char Dham Yatra Group Package 2026 – Price, Discount & Custom Itinerary for 10+ Pilgrims', url: `${SITE.baseUrl}/blog/char-dham-group-package`, type: 'article' },
    images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: 'Char Dham Group Package 2026 — Book for 10+ Pilgrims | Shiv Ganga Travels' }],
};

function Schema() {
  const faq = {
    '@context': 'https://schema.org', '@type': 'FAQPage',
    mainEntity: [
      { '@type': 'Question', name: 'What is the per person cost for a group Char Dham Yatra?',
        acceptedAnswer: { '@type': 'Answer', text: 'Per person cost for group Char Dham Yatra (9N/10D from Haridwar): 2 people ₹24,000–27,000. 4 people ₹21,000–23,000. 6–8 people ₹19,500–21,000. 10–15 people ₹18,000–19,500. 20+ people ₹16,000–18,000. Larger groups benefit from Tempo Traveller economics and bulk hotel negotiation.' }},
      { '@type': 'Question', name: 'What is the minimum group size for Char Dham Yatra?',
        acceptedAnswer: { '@type': 'Answer', text: 'There is no minimum group size — Shiv Ganga Travels accepts bookings for 2 people onwards. However, the most economical packages start from groups of 6–8 (filling one Innova Crysta). Groups above 10 get dedicated Tempo Traveller economics.' }},
      { '@type': 'Question', name: 'How far in advance should a group book Char Dham Yatra?',
        acceptedAnswer: { '@type': 'Answer', text: 'Groups of 10+ should book 90 days ahead for May departures. For September–October, 45–60 days is sufficient. Large groups (20+) require multiple vehicles and hotel blocks — 90–120 days advance is recommended for May–June.' }},
    ],
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faq) }}/>;
}

export default function GroupPackage() {
  return (
    <>
      <Schema/>
      <section style={{ background:'linear-gradient(145deg,var(--navy) 0%,#1A3E75 60%,var(--teal) 100%)', padding:'52px 20px 40px' }}>
        <div style={{ maxWidth:860, margin:'0 auto', textAlign:'center' }}>
          <span style={{ background:'rgba(232,146,10,0.18)', color:'#FFD166', fontSize:11, fontWeight:700, letterSpacing:'0.12em', textTransform:'uppercase', padding:'5px 16px', borderRadius:100, display:'inline-block', marginBottom:14 }}>Group Travel Guide · 2026</span>
          <h1 style={{ color:'#fff', fontFamily:'var(--font-display)', fontSize:'clamp(1.7rem,4vw,2.6rem)', fontWeight:700, letterSpacing:'-0.02em', marginBottom:14 }}>
            Char Dham Yatra Group Package 2026
          </h1>
          <p style={{ color:'rgba(255,255,255,0.8)', fontSize:15, lineHeight:1.7, maxWidth:700, margin:'0 auto 20px' }}>
            Vehicle options for 2–50 pilgrims · Per-person pricing table · Group discounts · 90-day advance booking guide
          </p>
          {['👨‍👩‍👧‍👦 2–50 pilgrims','💰 Group discounts from 6+','🚌 Dedicated Tempo Travellers','📋 Group registration included'].map(t => (
            <span key={t} style={{ background:'rgba(255,255,255,0.12)', color:'#fff', fontSize:12.5, fontWeight:600, padding:'6px 14px', borderRadius:100, border:'1px solid rgba(255,255,255,0.2)', display:'inline-block', margin:'4px' }}>{t}</span>
          ))}
        </div>
      </section>

      <nav style={{ background:'var(--bg)', borderBottom:'1px solid var(--border)', padding:'9px 20px' }}>
        <div style={{ maxWidth:'var(--container)', margin:'0 auto', fontSize:12, color:'var(--text-muted)', display:'flex', gap:6 }}>
          Home<span>›</span>
          Blog<span>›</span>
          <span>Char Dham Group Package 2026</span>
        </div>
      </nav>

      <article className="blog-container" itemScope itemType="https://schema.org/Article">
        <div style={{ fontSize:12, color:'var(--text-muted)', marginBottom:20, textAlign:'right' }}>🗓️ <strong>Last updated:</strong> May 21, 2026</div>

        <p style={{ fontSize:16, color:'#334155', lineHeight:1.9, marginBottom:16 }}>
          Whether you are planning a family reunion, office pilgrimage, temple committee tour, or retirement group yatra — Char Dham Yatra in a group is one of the most spiritually powerful experiences available. Groups share the trek at Kedarnath, hold hands at Gangotri's river bank, and witness each other's darshan in ways that solo travel simply cannot replicate. This guide covers everything about group Char Dham Yatra from Haridwar.
        </p>

        <h2 style={{ fontFamily:'var(--font-display)', fontSize:'1.45rem', fontWeight:700, color:'var(--navy)', marginBottom:14 }}>
          Group Size, Vehicle &amp; Per-Person Pricing
        </h2>
        <div style={{ overflowX:'auto', marginBottom:28 }}>
          <table style={{ width:'100%', borderCollapse:'collapse', fontSize:14 }}>
            <thead>
              <tr style={{ background:'var(--navy)' }}>
                {['Group Size','Vehicle','Circuit Total','Per Person','Saving vs Solo'].map(h=>(
                  <th key={h} style={{ padding:'11px 14px', textAlign:'left', color:'#fff', fontWeight:700, fontSize:12.5 }}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {[
                ['2 people','Ertiga (4S)','₹44,000–50,000','₹22,000–25,000','—'],
                ['4 people','Innova Crysta (6S)','₹82,000–88,000','₹20,500–22,000','₹2,000–3,000 vs solo'],
                ['6–7 people','Innova Crysta (7S)','₹1,16,000–1,25,000','₹16,500–18,000','₹5,000–6,500 vs solo'],
                ['8–9 people','Tempo Traveller (9S)','₹1,44,000–1,57,000','₹16,000–17,500','₹6,000–7,500 vs solo'],
                ['10–12 people','Tempo Traveller (12S)','₹1,92,000–2,20,000','₹16,000–18,000','₹6,000–8,000 vs solo'],
                ['15 people','TT 12S + Ertiga backup','₹2,50,000–2,80,000','₹16,600–18,600','₹5,500–7,000 vs solo'],
                ['20 people','2× Tempo Traveller 12S','₹3,20,000–3,60,000','₹16,000–18,000','₹6,000–8,000 vs solo'],
                ['30 people','3× vehicles (mixed)','₹4,50,000–5,00,000','₹15,000–16,600','₹7,000–9,000 vs solo'],
                ['40–50 people','Call for custom quote','Custom pricing','₹13,500–15,000','₹8,000–10,000 vs solo'],
              ].map(([g,v,t,pp,s],i)=>(
                <tr key={g} style={{ borderBottom:'1px solid var(--border)', background:i===2||i===3?'#F0FDF4':i%2===0?'#fff':'var(--bg)' }}>
                  <td style={{ padding:'10px 14px', fontWeight:700, color:'var(--navy)', fontSize:13.5 }}>{g}</td>
                  <td style={{ padding:'10px 14px', color:'#475569', fontSize:13 }}>{v}</td>
                  <td style={{ padding:'10px 14px', color:'#334155', fontSize:13.5 }}>{t}</td>
                  <td style={{ padding:'10px 14px', fontWeight:800, color:(i===2||i===3)?'#15803D':'var(--navy)', fontSize:15, fontFamily:'var(--font-display)' }}>{pp}</td>
                  <td style={{ padding:'10px 14px', color:s==='—'?'#94A3B8':'#15803D', fontWeight:s==='—'?400:600, fontSize:13 }}>{s}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div style={{ background:'#F0FDF4', borderRadius:10, padding:'12px 16px', marginBottom:28, fontSize:13.5, color:'#15803D' }}>
          <strong>Highlighted rows</strong> (6–9 people) represent the sweet spot for group Char Dham Yatra — best per-person price with comfortable, private vehicle and maximum group bonding.
        </div>

        <h2 style={{ fontFamily:'var(--font-display)', fontSize:'1.45rem', fontWeight:700, color:'var(--navy)', marginBottom:14 }}>
          Advance Booking Timeline for Groups
        </h2>
        {[
          { months:'May departure', book:'January 15 – February 28', why:'Peak season. Hotels at Guptkashi (Kedarnath base) fill fastest. Multiple vehicles need coordinated booking.', urgency:'high' },
          { months:'June departure', book:'March 1 – April 15', why:'Second peak month. Slightly less pressure than May but still book 8 weeks ahead.', urgency:'high' },
          { months:'September departure', book:'June 15 – July 31', why:'Post-monsoon — ideal season. 6–8 weeks adequate for most groups.', urgency:'medium' },
          { months:'October departure', book:'August 1 – September 15', why:'Low season. Best flexibility. Even 4 weeks is often possible.', urgency:'low' },
        ].map(item => (
          <div key={item.months} style={{ display:'flex', gap:0, borderRadius:10, overflow:'hidden', border:'1px solid var(--border)', marginBottom:10 }}>
            <div style={{ background:item.urgency==='high'?'#DC2626':item.urgency==='medium'?'#D97706':'#15803D', minWidth:6, flexShrink:0 }}/>
            <div style={{ padding:'12px 16px', flex:1, background:'#fff' }}>
              <div style={{ display:'flex', justifyContent:'space-between', alignItems:'flex-start', gap:8, marginBottom:5 }}>
                <div style={{ fontWeight:700, fontSize:14, color:'var(--navy)' }}>{item.months}</div>
                <div style={{ fontWeight:700, fontSize:13, color:item.urgency==='high'?'#DC2626':item.urgency==='medium'?'#D97706':'#15803D', flexShrink:0 }}>Book by: {item.book}</div>
              </div>
              <div style={{ fontSize:13.5, color:'#475569' }}>{item.why}</div>
            </div>

        {/* ── Mid-article conversion CTA ── */}
        <BlogCTA variant="inline" intent="info" />
          </div>
        ))}

        <h2 style={{ fontFamily:'var(--font-display)', fontSize:'1.45rem', fontWeight:700, color:'var(--navy)', marginBottom:14, marginTop:28 }}>
          What Shiv Ganga Travels Handles for Group Yatras
        </h2>
        {[
          ['Group biometric registration', 'We complete biometric registration for all group members at Haridwar centre before departure. Provide Aadhaar details 2 weeks before departure for smooth processing.'],
          ['Hotel room allocation', 'For groups of 10+, we pre-block entire floors or wings at key hotels to keep the group together — Guptkashi, Joshimath, Uttarkashi.'],
          ['Vehicle coordination', 'Multiple vehicles travel in convoy. If one vehicle has a breakdown or delay, others wait at the next checkpoint. No pilgrim is ever separated from the group.'],
          ['Temple facilitation', 'We arrange group queue management at all four dhams. For large groups, we coordinate with temple staff for organised darshan rather than individual queue jostling.'],
          ['Medical preparedness', 'Oxygen cylinder in every vehicle. Basic first-aid kit. Emergency contact list for all group members shared with group coordinator.'],
          ['Daily communication', 'WhatsApp group created for all members with daily updates, next day schedule, and emergency contacts.'],
        ].map(([title, desc]) => (
          <div key={title} style={{ display:'flex', gap:12, padding:'12px 0', borderBottom:'1px solid var(--border)' }}>
            <span style={{ color:'var(--teal)', fontWeight:800, fontSize:16, flexShrink:0, marginTop:1 }}>✓</span>
            <div>
              <div style={{ fontWeight:700, fontSize:14.5, color:'var(--navy)', marginBottom:3 }}>{title}</div>
              <div style={{ fontSize:14, color:'#475569', lineHeight:1.7 }}>{desc}</div>
            </div>
          </div>
        ))}

        <div style={{ background:'var(--navy)', borderRadius:16, padding:'28px 24px', textAlign:'center', marginTop:36 }}>
          <h3 style={{ color:'#fff', fontFamily:'var(--font-display)', fontSize:'1.3rem', marginBottom:10 }}>Plan Your Group Yatra</h3>
          <p style={{ color:'rgba(255,255,255,0.7)', fontSize:14, marginBottom:18 }}>Tell us your group size, preferred month, and any special requirements (senior citizens, health conditions). We will send a complete quote within 2 hours. {SITE.phone}</p>
          <div style={{ display:'flex', gap:10, justifyContent:'center', flexWrap:'wrap' }}>
            <a href={`https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent('Namaste! I am planning a group Char Dham Yatra 2026. Please share package details and group pricing.')}`} target="_blank" rel="nofollow noopener noreferrer"
              style={{ background:'#25D366', color:'#fff', padding:'12px 24px', borderRadius:9, fontWeight:700, fontSize:13.5, textDecoration:'none' }}>💬 WhatsApp</a>
            View Packages →
          </div>
        </div>

        <div style={{ borderTop:'1px solid var(--border)', paddingTop:24, marginTop:32 }}>
          <div style={{ fontWeight:700, fontSize:13.5, color:'var(--navy)', marginBottom:12 }}>Related Guides</div>
          <div style={{ display:'flex', gap:10, flexWrap:'wrap' }}>
            {[['Char Dham Cost 2026','/blog/char-dham-yatra-cost'],['Budget vs Premium','/blog/char-dham-yatra-budget-vs-premium'],['Char Dham Registration','/blog/char-dham-yatra-registration'],['Packing List','/blog/char-dham-yatra-packing-list']].map(([l,h])=>(
              <Link key={h} href={h} style={{ background:'var(--bg)', border:'1px solid var(--border)', color:'var(--navy)', padding:'7px 14px', borderRadius:8, fontSize:12.5, fontWeight:600, textDecoration:'none' }}>{l} →</Link>
            ))}
          </div>
        </div>
      
        {/* ── End-of-article booking CTA ── */}
        <BlogCTA variant="footer" intent="info" />
</article>
    </>
  );
}
