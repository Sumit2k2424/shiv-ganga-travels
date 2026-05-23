import Link from 'next/link';
import { SITE } from '@/data/packages';
import BlogCTA from '@/components/BlogCTA';
import BlogAuthor from '@/components/BlogAuthor';

export const metadata = {
  title: 'Best Time for Char Dham Yatra 2026 – Month-by-Month Weather & Opening Dates',
  description: 'When is the best time for Char Dham Yatra 2026? May and Sept–Oct are ideal. Month-by-month weather, opening & closing dates, crowd levels, and honest advice from a Haridwar operator.',
  keywords: ['best time for char dham yatra', 'char dham yatra best month 2026', 'char dham yatra weather month wise', 'char dham opening dates 2026', 'char dham yatra season', 'best month char dham yatra'],
  alternates: { canonical: `${SITE.baseUrl}/blog/best-time-char-dham` },
  openGraph: {
    title: 'Best Time for Char Dham Yatra 2026 – Month-by-Month Weather & Opening Dates',
    description: 'Month-by-month guide: weather, crowds, opening dates, honest advice.',
    url: `${SITE.baseUrl}/blog/best-time-char-dham`, type: 'article',
    images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: 'Best Time for Char Dham Yatra 2026 — Month-by-Month Weather, Crowd & P | Shiv Ganga Travels' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Best Time for Char Dham Yatra 2026 — Month-by-Month Weather, Crowd & P',
    description: 'Month-by-month guide: weather, crowds, opening dates, honest advice.',
    images: [{ url: '/opengraph-image', alt: 'Best Time for Char Dham Yatra 2026 — Month-by-Month Weather, | Shiv Ganga Travels' }],
  },
};

const h2 = { fontFamily:'var(--font-display)', fontSize:'clamp(1.3rem,2.5vw,1.75rem)', fontWeight:700, color:'var(--navy)', letterSpacing:'-0.02em', marginBottom:12, marginTop:36 };
const h3 = { fontFamily:'var(--font-display)', fontSize:'1.05rem', fontWeight:700, color:'var(--navy)', marginBottom:8, marginTop:20 };
const p  = { fontSize:15.5, color:'#334155', lineHeight:1.9, marginBottom:14 };

const faqSchema = {
  '@context': 'https://schema.org', '@type': 'FAQPage',
  mainEntity: [
    { '@type':'Question', name:'What is the best month for Char Dham Yatra?',
      acceptedAnswer:{ '@type':'Answer', text:'May and September–October are the best months. May (8–18°C) has clear skies, blooming rhododendrons and manageable crowds. September–October delivers post-monsoon crystal clarity, cooler temperatures and the fewest queues. Both windows completely avoid the July–August monsoon risk. The 2026 season opens April 19 (Yamunotri/Gangotri), April 22 (Kedarnath) and April 23 (Badrinath).' }},
    { '@type':'Question', name:'Can I do Char Dham Yatra in August?',
      acceptedAnswer:{ '@type':'Answer', text:'August is the peak of the Uttarakhand monsoon. Landslides close the Kedarnath and Gangotri routes without warning. Road blockages of 4–12 hours are common. We strongly advise against August for first-time pilgrims and senior citizens. If you must travel in August, add 2–3 buffer days and book an operator who monitors road conditions daily.' }},
    { '@type':'Question', name:'When does Char Dham Yatra open and close in 2026?',
      acceptedAnswer:{ '@type':'Answer', text:'2026 opening dates: Yamunotri April 19, Gangotri April 19, Kedarnath April 22, Badrinath April 23. Closing dates follow Diwali–Bhai Dooj (typically late October–early November). Exact closing dates are announced by the temple trusts approximately 3 weeks before closure.' }},
    { '@type':'Question', name:'Is October good for Char Dham Yatra?',
      acceptedAnswer:{ '@type':'Answer', text:'October (first two weeks) is excellent — arguably the best month for photography and comfort. Post-monsoon skies are the clearest of the year. The Himalayan peaks behind Kedarnath, Gangotri and Badrinath emerge in sharp relief. Crowds thin out sharply after September. Night temperatures drop to 2–5°C at the dhams by October, so carry warm layers.' }},
  ],
};

function Schema() {
  const article = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Best Time for Char Dham Yatra 2026 – Month-by-Month Weather & Opening Dates',
    description: '',
    image: `${SITE.baseUrl}/opengraph-image`,
    datePublished: '2025-01-01',
    dateModified: '2026-05-21',
    author: {
      '@type': 'Person',
      name: 'Sumit Mishra',
      jobTitle: 'Operations Manager, Shiv Ganga Travels',
      url: `${SITE.baseUrl}/about`,
      sameAs: ['https://www.linkedin.com/in/sumit-mishra-863734171/', 'https://www.facebook.com/sumi2112'],
    },
    publisher: {
      '@type': 'Organization',
      name: SITE.name,
      url: SITE.baseUrl,
      logo: { '@type': 'ImageObject', url: `${SITE.baseUrl}/logo.png` },
    },
    mainEntityOfPage: `${SITE.baseUrl}/blog/best-time-char-dham`,
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(article) }} />;
}


export default function BestTimeCharDham() {
  const months = [
    { month:'April', open:'Opens Apr 19–23', temp:'0–12°C', crowd:'Low–Moderate', verdict:'✅ Good', color:'#f0fdf4', border:'#86efac',
      detail:'Cold but spiritually charged. Snowfields above the dhams. The temples feel intimate in late April — the crowds haven\'t peaked yet. Carry heavy woolens and waterproof boots.' },
    { month:'May', open:'Peak season', temp:'8–22°C', crowd:'Very High', verdict:'⭐ Best', color:'#dcfce7', border:'#4ade80',
      detail:'Rhododendrons bloom across the Garhwal slopes. Weather is clear and warm enough to trek without heavy gear. Book 60–90 days ahead — May fills faster than any other month.' },
    { month:'June', open:'Peak season', temp:'10–24°C', crowd:'High', verdict:'✅ Good', color:'#dcfce7', border:'#86efac',
      detail:'Excellent in the first half. Pre-monsoon clouds roll in around June 15. Carry a quality rain poncho. Kedarnath trek becomes slippery in rain — wear proper trekking shoes.' },
    { month:'July', open:'Risk season', temp:'13–20°C', crowd:'Low', verdict:'⚠️ Avoid', color:'#fff7ed', border:'#fdba74',
      detail:'Monsoon in full force. Landslides hit the Sonprayag–Gaurikund stretch and the Uttarkashi–Gangotri highway. Pilgrims can be stranded for days. We suspend most July departures.' },
    { month:'August', open:'Risk season', temp:'12–19°C', crowd:'Very Low', verdict:'🚫 Avoid', color:'#fee2e2', border:'#fca5a5',
      detail:'The highest-risk month of the year. NDRF issues frequent advisories. The 2013 Kedarnath tragedy happened in June, but August is statistically the worst for landslides and flash floods.' },
    { month:'September', open:'Post-monsoon', temp:'7–18°C', crowd:'Low', verdict:'⭐ Excellent', color:'#dcfce7', border:'#4ade80',
      detail:'The sleeper pick. Rain stops, skies clear overnight. The Himalayan peaks emerge in full sharp relief. Far fewer pilgrims than May. Our guides call September "the yatra season for people who know".' },
    { month:'October', open:'Last window', temp:'2–12°C', crowd:'Very Low', verdict:'⭐⭐ Best', color:'#dcfce7', border:'#4ade80',
      detail:'Spectacular autumn colours. Crystal clear panoramas. Near-empty temples. Cold nights (2–5°C) but pleasant days. Temples close by Bhai Dooj — book early October departures to be safe.' },
    { month:'Nov–Apr', open:'CLOSED', temp:'−10 to 5°C', crowd:'None', verdict:'❌ Closed', color:'#f1f5f9', border:'#cbd5e1',
      detail:'All four dhams close for winter. Priests carry the deities to valley temples: Kedarnath deity to Ukhimath, Badrinath to Joshimath/Pandukheshwar. Roads close under snow.' },
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}/>

      <section style={{ background:'linear-gradient(145deg,var(--navy) 0%,var(--navy-mid) 60%,var(--teal) 100%)', padding:'56px 20px 44px', textAlign:'center' }}>
        <div style={{ maxWidth:800, margin:'0 auto' }}>
          <span style={{ background:'rgba(232,146,10,0.18)', color:'#FFD166', fontSize:11, fontWeight:700, letterSpacing:'0.12em', textTransform:'uppercase', padding:'5px 16px', borderRadius:100, display:'inline-block', marginBottom:16 }}>Travel Guide · Updated May 2026</span>
          <h1 className="display-title" style={{ color:'#fff', fontSize:'clamp(1.8rem,4.5vw,3rem)', marginBottom:14 }}>
            Best Time for Char Dham Yatra 2026
          </h1>
          <p style={{ color:'rgba(255,255,255,0.8)', fontSize:15.5, lineHeight:1.75, maxWidth:580, margin:'0 auto' }}>
            Month-by-month weather · Temple opening dates · When to book · Honest advice from 15 years of running Char Dham yatras
          </p>
        </div>
      </section>

      <nav style={{ background:'var(--bg)', borderBottom:'1px solid var(--border)', padding:'10px 20px' }}>
        <div style={{ maxWidth:'var(--container)', margin:'0 auto', fontSize:12, color:'var(--text-muted)', display:'flex', gap:6, flexWrap:'wrap' }}>
          Home<span>›</span>
          Blog<span>›</span>
          <span>Best Time for Char Dham Yatra 2026</span>
        </div>
      </nav>

      <article style={{ maxWidth:860, margin:'0 auto', padding:'40px 20px 60px' }}>

        {/* Author byline — E-E-A-T signal */}
        <BlogAuthor variant="top" author="sumit" />
        <div style={{ fontSize:12, color:'var(--text-muted)', marginBottom:20, textAlign:'right' }}>🗓️ Last updated: May 21, 2026 · Author: Shiv Ganga Travels team, Haridwar</div>

        {/* Quick answer box — skimmable */}
        <div style={{ background:'var(--navy)', borderRadius:14, padding:'20px 24px', marginBottom:28 }}>
          <div style={{ fontSize:12, color:'rgba(255,255,255,0.55)', marginBottom:8, fontWeight:600, textTransform:'uppercase', letterSpacing:'0.08em' }}>Quick answer</div>
          <div style={{ fontSize:16, fontWeight:700, color:'#FFD166', marginBottom:10 }}>
            Best months: May and September–October
          </div>
          <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fill,minmax(160px,1fr))', gap:8 }}>
            {[
              ['Opening', 'Apr 19–23, 2026'],
              ['Peak season', 'May–June'],
              ['Avoid', 'July–August'],
              ['Best combo', 'Sept 15 – Oct 10'],
              ['Closing', 'Late Oct/early Nov'],
              ['Book ahead', '60–90 days for May'],
            ].map(([k,v]) => (
              <div key={k} style={{ background:'rgba(255,255,255,0.08)', borderRadius:8, padding:'8px 12px' }}>
                <div style={{ fontSize:10.5, color:'rgba(255,255,255,0.5)', marginBottom:2 }}>{k}</div>
                <div style={{ fontSize:13, fontWeight:700, color:'#fff' }}>{v}</div>
              </div>
            ))}
          </div>
        </div>

        <p style={p}>
          The Char Dham season runs from late April to early November. But not every month within that window works equally well. The window matters enormously — travel in May and you get blooming mountains and pleasant trekking weather. Travel in August and you risk being stranded by landslides. Here is the honest, month-by-month picture we give our own pilgrims.
        </p>

        {/* Month table */}
        <h2 style={h2}>Month-by-Month: Char Dham Weather & Conditions</h2>
        <div style={{ display:'flex', flexDirection:'column', gap:10, marginBottom:28 }}>
          {months.map(m => (
            <div key={m.month} style={{ background:m.color, borderRadius:12, padding:'14px 18px', border:`1px solid ${m.border}` }}>
              <div style={{ display:'flex', justifyContent:'space-between', alignItems:'flex-start', flexWrap:'wrap', gap:8, marginBottom:6 }}>
                <div style={{ display:'flex', gap:10, alignItems:'center', flexWrap:'wrap' }}>
                  <span style={{ fontWeight:800, fontSize:15, color:'var(--navy)' }}>{m.month}</span>
                  <span style={{ fontSize:12.5, color:'#475569' }}>{m.temp}</span>
                  <span style={{ fontSize:12, color:'#64748b', background:'rgba(0,0,0,0.06)', padding:'2px 8px', borderRadius:20 }}>Crowd: {m.crowd}</span>
                </div>
                <span style={{ fontWeight:700, fontSize:13.5 }}>{m.verdict}</span>
              </div>
              <p style={{ fontSize:13.5, color:'#334155', lineHeight:1.7, margin:0 }}>{m.detail}</p>
            </div>
          ))}
        </div>

        <h2 style={h2}>The Two Best Windows — What You Actually Experience</h2>
        <h3 style={h3}>May–June: The Classic Peak Season</h3>
        <p style={p}>
          May is when Char Dham Yatra hits full swing. The Garhwal Himalayas turn green after the snowmelt. Rhododendron forests blaze red and pink along the Kedarnath trek route. Daytime temperatures at the dhams sit between 12–22°C — warm enough to walk comfortably, cool enough to sleep well at altitude. The Yamunotri trek is dry and firm underfoot. At Gangotri, the Bhagirathi River runs blue-green from the snowmelt rather than the silty brown of monsoon.
        </p>
        <p style={p}>
          The trade-off in May is crowds. VIP darshan queues at Kedarnath start by 4 AM. Good hotels in Guptkashi sell out 45 days ahead. Vehicles on the Sonprayag road back up for hours on busy days. If you book with us in May, we secure hotel and VIP darshan slots as part of the package — you skip the queue and arrive to confirmed rooms. Book at least 60 days ahead for May departures.
        </p>

        <h3 style={h3}>September–October: The Insider's Choice</h3>
        <p style={p}>
          After the monsoon ends — usually by September 10–15 — the Uttarakhand sky does something dramatic. The haze and cloud cover vanish. The peaks emerge in sharp, crystalline detail. The Nilkantha range behind Badrinath, the ridgeline above Kedarnath, the Bhagirathi peaks at Gangotri — all fully visible. Our guides consistently say: the most powerful darshan moments they witness happen in October, not May.
        </p>
        <p style={p}>
          Practically: October crowds are a fraction of May. You walk straight to the Kedarnath temple. Hotels have last-minute availability. Roads are dry and fast. The autumn colour on the descent from Kedarnath — the birch and rhododendron in gold and crimson — makes the trek visually spectacular in both directions. Night temperatures drop to 2–5°C at the dhams, so pack thermals and a warm jacket. Temples close by Bhai Dooj (late October/early November) — plan departures before October 20 to be completely safe.
        </p>

        <h2 style={h2}>Char Dham Yatra 2026 — Official Opening Dates</h2>
        <div style={{ overflowX:'auto', borderRadius:12, border:'1px solid var(--border)', marginBottom:24 }}>
          <table style={{ width:'100%', borderCollapse:'collapse', fontSize:14, minWidth:460 }}>
            <thead><tr style={{ background:'var(--navy)' }}>
              {['Dham','Opening Date 2026','Altitude','Nearest Base'].map(h => (
                <th key={h} style={{ padding:'10px 14px', textAlign:'left', color:'#fff', fontSize:12, fontWeight:700 }}>{h}</th>
              ))}
            </tr></thead>
            <tbody>
              {[
                ['Yamunotri', 'April 19, 2026 (Akshaya Tritiya)', '3,291m', 'Janki Chatti / Barkot'],
                ['Gangotri',  'April 19, 2026 (Akshaya Tritiya)', '3,415m', 'Uttarkashi / Harsil'],
                ['Kedarnath', 'April 22, 2026 (Shiv Puja muhurta)', '3,583m', 'Guptkashi / Sonprayag'],
                ['Badrinath', 'April 23, 2026 (Brahmamuhurta)', '3,133m', 'Joshimath'],
              ].map(([d,dt,alt,base], i) => (
                <tr key={d} style={{ borderBottom:'1px solid var(--border)', background: i%2===0 ? '#fff' : 'var(--bg)' }}>
                  <td style={{ padding:'10px 14px', fontWeight:700, color:'var(--navy)', fontSize:14 }}>{d}</td>
                  <td style={{ padding:'10px 14px', color:'#334155', fontSize:13.5 }}>{dt}</td>
                  <td style={{ padding:'10px 14px', color:'#475569', fontSize:13.5 }}>{alt}</td>
                  <td style={{ padding:'10px 14px', color:'#475569', fontSize:13 }}>{base}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p style={{ ...p, fontSize:13, color:'#64748b' }}>
          Note: All four dhams open on Akshaya Tritiya or within 4 days. The exact time of the opening puja (muhurta) is set by the Badrinath–Kedarnath Temple Committee (BKTC) each year. Closing dates for 2026 will be announced in September.
        </p>

        {/* ── Mid-article conversion CTA ── */}
        <BlogCTA variant="inline" intent="info" />

        <h2 style={h2}>How Weather Affects Each Part of the Journey</h2>
        <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(240px,1fr))', gap:12, marginBottom:24 }}>
          {[
            { place:'Yamunotri (6km trek)', impact:'Rain makes the rocky trail slippery. Good boots are non-negotiable. In monsoon, the path alongside the Yamuna can flood. Best in May or October.' },
            { place:'Gangotri (motorable)', impact:'No trek needed — you drive all the way. But the Uttarkashi–Gangotri highway runs through gorge country prone to rockfalls. In monsoon, plan for potential delays.' },
            { place:'Kedarnath (16km trek)', impact:'The most weather-sensitive of the four. The trek crosses open moorland above treeline. Afternoon clouds build from June onwards. Start by 6 AM. In rain, the stone path becomes a stream.' },
            { place:'Badrinath (motorable)', impact:'Drive to the temple gate. The Joshimath–Badrinath road (45km) runs above the Alaknanda gorge — spectacular and occasionally hit by rockfalls in monsoon. Generally very good in May and October.' },
          ].map(x => (
            <div key={x.place} style={{ background:'#fff', border:'1px solid var(--border)', borderRadius:10, padding:'14px 16px' }}>
              <div style={{ fontWeight:700, fontSize:13.5, color:'var(--navy)', marginBottom:6 }}>{x.place}</div>
              <p style={{ fontSize:13, color:'#475569', lineHeight:1.7, margin:0 }}>{x.impact}</p>
            </div>
          ))}
        </div>

        <h2 style={h2}>When to Book — Practical Timing</h2>
        <div style={{ display:'flex', flexDirection:'column', gap:8, marginBottom:24 }}>
          {[
            { window:'May departure', rule:'Book 60–90 days before. VIP darshan, good hotels and confirmed seats go first. Waiting past March risks getting pushed to June.' },
            { window:'June departure', rule:'Book 45–60 days before. First half of June is almost as good as May. Hotels are slightly more available but still fill up.' },
            { window:'September–October departure', rule:'Book 30–45 days before. Less demand means more flexibility, but don\'t leave it to 2 weeks out — the best Guptkashi hotels still fill.' },
            { window:'Last-minute (< 2 weeks)', rule:'Possible for September–October with some flexibility on hotel category. Very difficult for May–June. Call us directly — we sometimes have cancellation slots.' },
          ].map(r => (
            <div key={r.window} style={{ display:'flex', gap:12, alignItems:'flex-start', padding:'12px 14px', background:'#fff', border:'1px solid var(--border)', borderRadius:10 }}>
              <span style={{ background:'var(--navy)', color:'#FFD166', fontSize:11, fontWeight:700, padding:'4px 10px', borderRadius:20, flexShrink:0, whiteSpace:'nowrap' }}>{r.window}</span>
              <p style={{ margin:0, fontSize:14, color:'#334155', lineHeight:1.7 }}>{r.rule}</p>
            </div>
          ))}
        </div>

        <h2 style={h2}>Frequently Asked Questions</h2>
        {faqSchema.mainEntity.map((q, i) => (
          <div key={i} style={{ marginBottom:16, padding:'16px 18px', background:'var(--bg)', borderRadius:12, border:'1px solid var(--border)' }}>
            <div style={{ fontWeight:700, fontSize:14.5, color:'var(--navy)', marginBottom:8 }}>Q: {q.name}</div>
            <p style={{ margin:0, fontSize:14, color:'#334155', lineHeight:1.8 }}>{q.acceptedAnswer.text}</p>
          </div>
        ))}

        <div style={{ background:'var(--navy)', borderRadius:16, padding:'24px', textAlign:'center', marginTop:32 }}>
          <h3 style={{ color:'#fff', fontFamily:'var(--font-display)', fontSize:'1.25rem', marginBottom:8 }}>
            Plan Your Char Dham Yatra 2026
          </h3>
          <p style={{ color:'rgba(255,255,255,0.7)', fontSize:14, marginBottom:16 }}>
            Tell us your preferred month and group size. We send a free custom itinerary within 2 hours.
          </p>
          <div style={{ display:'flex', gap:10, justifyContent:'center', flexWrap:'wrap' }}>
            <a href={`https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent('Namaste! I want to plan Char Dham Yatra 2026. Please advise on the best dates.')}`}
              target="_blank" rel="nofollow noopener noreferrer"
              style={{ background:'#25D366', color:'#fff', padding:'12px 22px', borderRadius:9, fontWeight:700, fontSize:13.5, textDecoration:'none' }}>💬 WhatsApp</a>
            
              View Packages →
            
          </div>
        </div>

        <div style={{ borderTop:'1px solid var(--border)', paddingTop:24, marginTop:32 }}>
          <div style={{ fontWeight:700, fontSize:13.5, color:'var(--navy)', marginBottom:12 }}>Related guides</div>
          <div style={{ display:'flex', gap:8, flexWrap:'wrap' }}>
            {[['Packing List 2026','/blog/char-dham-yatra-packing-list'],['Registration Guide','/blog/char-dham-yatra-registration'],['Kedarnath Weather','/kedarnath-weather'],['Senior Citizen Tips','/blog/senior-citizen-char-dham'],['Char Dham Packages','/packages/char-dham']].map(([l,h]) => (
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
