import Link from 'next/link';
import { SITE } from '@/data/packages';
import BlogCTA from '@/components/BlogCTA';
import BlogAuthor from '@/components/BlogAuthor';
import BlogHero from '@/components/BlogHero';
import ReadingProgress from '@/components/ReadingProgress';
import BlogTOC from '@/components/BlogTOC';
import KeyTakeaways from '@/components/KeyTakeaways';
import FAQAccordion from '@/components/FAQAccordion';
import { h2, h3, p } from "@/lib/prose";

/* This page is the canonical target of a 301 from /blog/kedarnath-yatra-guide,
   and "kedarnath" is the biggest single term the site chases — so it has to be
   the deep one, not a stub that links away five times.

   Two figures were wrong here until Aug 2026 and are worth not reintroducing:
   the road distance read "218 km from Haridwar", which is actually the
   Kedarnath→Badrinath leg (src/data/cabs/routes.js has Haridwar→Gaurikund at
   235 km, 8–9 hrs); and the daily cap was given as both "15,000–17,000" and
   "18,000" on the same page. The cap genuinely moves between seasons and is cut
   on weather days, so it is now stated once, as a range, with the reason. */

const faqs = [
  { q: 'How much does Kedarnath Yatra cost in 2026?', a: 'An all-inclusive 3N/4D package from Haridwar starts at ₹5,250 per person, covering vehicle, hotels at Guptkashi, meals and darshan assistance. On top of that, budget for the pony if you are not walking (₹3,000–5,000 one way), or the helicopter (₹7,000–9,000 one way, IRCTC only), plus puja if you want one. Realistic all-in for a trekking pilgrim is ₹7,000–9,000; ₹14,000–18,000 if you fly both ways.' },
  { q: 'How many days are needed for Kedarnath Yatra?', a: 'Three nights and four days from Haridwar is the comfortable minimum: day one Haridwar to Guptkashi, day two trek up and stay at Kedarnath, day three morning darshan and descend, day four back to Haridwar. It can be squeezed into 2N/3D by descending the same day you climb, which makes for a brutal 32km on foot. The helicopter version fits the same schedule without the trek.' },
  { q: 'Is Kedarnath Yatra registration mandatory in 2026?', a: 'Yes, and it is checked. Registration at registrationandtouristcare.uk.gov.in is free and takes about fifteen minutes; the QR yatra card is scanned at the Sonprayag checkpoint and pilgrims without one are turned back, having already driven eight hours. Pilgrims aged 55 and over also need a medical fitness certificate.' },
  { q: 'How far is Kedarnath from Haridwar?', a: '235km by road to Gaurikund, and 8–9 hours of driving. Your vehicle actually stops at Sonprayag; the last 5km to Gaurikund is a police-controlled shuttle, and the 16km trek starts there. Nobody sensible drives this from Haridwar and starts the trek the same morning — a night at Guptkashi is what makes the itinerary work.' },
  { q: 'How long does the Kedarnath trek take?', a: '5–7 hours up for the 16km from Gaurikund, and 4–5 hours back down. The path is stone, well made and busy, climbing about 1,600m via Jungle Chatti, Bhimbali and Linchauli. Most groups leave Gaurikund between 4am and 5am so they finish the climb before the afternoon cloud comes up the valley.' },
  { q: 'Is there a daily limit on Kedarnath pilgrims?', a: 'Yes, though the number moves. The cap has been set between roughly 15,000 and 18,000 a day in recent seasons, decided by the temple committee and the district administration, and it is cut further on bad-weather days. Once the day\'s quota is reached the Sonprayag barrier closes regardless of whether you hold a valid registration — which is the practical argument for registering early and starting early.' },
  { q: 'What is the best time to visit Kedarnath?', a: 'May to mid-June, or mid-September to October. The first window is warmest and by far the busiest; the second has the clearest mountain views and a fraction of the crowds. July and August are peak monsoon — the temple stays open but landslides close the road repeatedly and helicopters are frequently grounded.' },
  { q: 'Can you stay overnight at Kedarnath?', a: 'Yes. There is GMVN accommodation, tented camps and a few private lodges at the temple, and staying up means you get the morning aarti before the day\'s trekkers arrive. It is basic, cold and needs booking well ahead for May and June. The alternative most packages use is a base at Guptkashi at 1,319m, which is warmer and far easier to sleep at.' },
  { q: 'Do you need a medical certificate for Kedarnath?', a: 'If you are 55 or over, yes — it is part of the registration requirement, and health check points operate along the route. Below that age it is not mandatory, but the trek gains 1,600m and the temple sits at 3,583m, so anyone with a cardiac, respiratory or blood-pressure condition should be carrying a doctor\'s clearance and their own medication regardless of what the rules demand.' },
];

export const metadata = {
  title: { absolute: `Kedarnath Yatra Guide ${SITE.season} | Price Starts at ₹5,250 | Route & Darshan` },
  description: `Kedarnath Yatra ${SITE.season} guide — 16km trek, registration, darshan timings. Trusted operator, 15+ yrs experience, fixed departures & instant confirmation.`,
  keywords: [`kedarnath yatra ${SITE.season} complete guide`, 'kedarnath yatra guide', 'how to do kedarnath yatra', `kedarnath yatra cost ${SITE.season}`, 'kedarnath yatra package haridwar', `kedarnath yatra planning guide ${SITE.season}`],
  alternates: { canonical: `${SITE.baseUrl}/blog/kedarnath-yatra-complete-guide` },
  openGraph: { title: `Kedarnath Yatra Guide ${SITE.season}: Route, Cost & Darshan`, url: `${SITE.baseUrl}/blog/kedarnath-yatra-complete-guide`, type: 'article', 
    images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: `Kedarnath Yatra Guide ${SITE.season}: Route, Cost & Darshan` }],
  },
};

function Schema() {
  const faq = {
    '@context': 'https://schema.org', '@type': 'FAQPage',
    mainEntity: faqs.map(f => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
  };
  const article = {
    '@context': 'https://schema.org', '@type': 'BlogPosting',
    headline: `Kedarnath Yatra ${SITE.season} — Complete Guide`,
    description: 'Kedarnath route from Haridwar, registration, the 16km trek, cost breakdown, darshan timings, helicopter and where to stay.',
    image: `${SITE.baseUrl}/opengraph-image`,
    author: { '@type': 'Person', '@id': `${SITE.baseUrl}/#founder`, name: 'Dhanesh Chandra Mishra' },
    publisher: { '@type': 'Organization', '@id': `${SITE.baseUrl}/#organization`, name: SITE.name, url: SITE.baseUrl, logo: { '@type': 'ImageObject', url: `${SITE.baseUrl}/logo.png` } },
    datePublished: '2025-08-15', dateModified: '2026-08-22',
    mainEntityOfPage: `${SITE.baseUrl}/blog/kedarnath-yatra-complete-guide`,
    about: { '@type': 'Place', name: 'Kedarnath Temple', geo: { '@type': 'GeoCoordinates', latitude: 30.7346, longitude: 79.0669, elevation: '3583' } },
    speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.blog-keytakeaways'] },
  };
  const bc = {
    '@context': 'https://schema.org', '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: SITE.baseUrl },
      { '@type': 'ListItem', position: 2, name: 'Blog', item: `${SITE.baseUrl}/blog` },
      { '@type': 'ListItem', position: 3, name: 'Kedarnath Yatra Complete Guide', item: `${SITE.baseUrl}/blog/kedarnath-yatra-complete-guide` },
    ],
  };
  return (<>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(article) }}/>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faq) }}/>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(bc) }}/>
  </>);
}


export default function KedarnathCompleteGuide() {
  return (
    <>
      <Schema />
      <ReadingProgress/>

      <BlogHero
        badge="Complete A-Z Guide · 2026"
        title="Kedarnath Yatra 2026 — Complete Guide"
        dek="Route · Cost · Registration · Trek · Helicopter · Darshan Timings · Hotels · Packages — Everything in one place"
        author="Dhanesh Chandra Mishra"
        updated="Updated 2026"
        readTime="8 min read"
        facts={[
          { label:'Altitude',   value:'3,583 m' },
          { label:'Opens',      value:'April 22, 2026' },
          { label:'Trek',       value:'16 km one way' },
          { label:'Package from', value:'₹5,250 pp' },
        ]}
      />

      <nav style={{ background:'var(--bg)', borderBottom:'1px solid hsl(var(--border))', padding:'9px 20px' }}>
        <div style={{ maxWidth:'var(--container)', margin:'0 auto', fontSize:12, color:'var(--text-muted)', display:'flex', gap:6 }}>
          <Link href="/" style={{ color:'var(--teal)', textDecoration:'none' }}>Home</Link><span>›</span>
          <Link href="/blog" style={{ color:'var(--teal)', textDecoration:'none' }}>Blog</Link><span>›</span>
          <span>Kedarnath Yatra Complete Guide 2026</span>
        </div>
      </nav>

      <article className="blog-container" itemScope itemType="https://schema.org/Article">

        {/* Author byline — E-E-A-T signal */}
        <BlogAuthor variant="top" author="dhanesh" article={{"slug": "kedarnath-yatra-complete-guide", "title": "Kedarnath Yatra Guide 2026: Route, Cost & Darshan", "description": "Kedarnath Yatra 2026 guide: 16 km trek from Gaurikund, registration, puja costs, darshan timings, helicopter booking and packages from ₹5,250.", "datePublished": "2025-08-15", "dateModified": "2026-06-20", "lang": "en-IN"}} />
        <div style={{ fontSize:12, color:'var(--text-muted)', marginBottom:20, textAlign:'right' }}>🗓️ <strong>Last updated:</strong> {SITE.lastUpdated} · Verified for current season</div>

        {/* Quick facts */}
        <div style={{ background:'var(--navy)', borderRadius:14, padding:'18px 20px', marginBottom:28, display:'grid', gridTemplateColumns:'repeat(auto-fill,minmax(160px,1fr))', gap:10 }}>
          {[['Altitude','3,583 metres'],['Opens','April 22, 2026'],['Closes','November 11, 2026'],['Distance (road)','235km from Haridwar'],['Trek distance','16km one way'],['Daily limit','~15,000–18,000 pilgrims'],['Package from','₹5,250/person'],['Trek time','5–7 hrs ascending']].map(([k,v])=>(
            <div key={k}>
              <div style={{ fontSize:11, color:'rgba(255,255,255,0.55)', marginBottom:2 }}>{k}</div>
              <div style={{ fontWeight:700, fontSize:13.5, color:'#FFD166' }}>{v}</div>
            </div>
          ))}
        </div>

        <KeyTakeaways points={[
          <>Kedarnath opens <strong>22 April 2026</strong> and closes <strong>11 November</strong>. Altitude <strong>3,583m</strong>.</>,
          <><strong>235km from Haridwar</strong> (8–9 hrs driving) to Gaurikund, then a <strong>16km trek</strong> taking 5–7 hours up.</>,
          <>Registration is <strong>free and mandatory</strong> — the QR card is scanned at Sonprayag and unregistered pilgrims are turned back.</>,
          <>Packages from <strong>₹5,250</strong> for 3N/4D. Pony ₹3,000–5,000 one way; helicopter ₹7,000–9,000, IRCTC only.</>,
          <>Best windows: <strong>May to mid-June</strong> and <strong>mid-September to October</strong>. Avoid the July–August monsoon.</>,
        ]}/>

        <BlogTOC items={[
          { id:'significance', label:'Significance of Kedarnath' },
          { id:'plan',         label:'How to plan (step by step)' },
          { id:'trek',         label:'The trek from Gaurikund' },
          { id:'best-time',    label:'When to go' },
          { id:'stay',         label:'Where to stay' },
          { id:'cost',         label:'Complete cost breakdown' },
          { id:'faq',          label:'Frequently asked questions' },
        ]}/>

        <h2 id="significance" style={h2}>
          Significance of Kedarnath
        </h2>
        <p style={{ fontSize:16, color:'#334155', lineHeight:1.9, marginBottom:16 }}>
          Kedarnath is not merely a temple — it is one of the twelve Jyotirlingas (primordial pillars of light) of Lord Shiva and one of the four dhams in the Char Dham circuit. Situated at 3,583m in the Rudraprayag district, it sits in the shadow of the Kedarnath peak (6,940m) with the Mandakini river originating from the Chorabari glacier above. The temple was built (or rebuilt after earlier construction) by Adi Shankaracharya in the 8th century CE. It survived the catastrophic 2013 floods when a massive boulder deflected the floodwaters, protecting the main temple structure — an event widely considered miraculous.
        </p>

        <h2 id="plan" style={h2}>
          Step-by-Step: How to Plan Kedarnath Yatra 2026
        </h2>
        {[
          { step:'1', title:'Complete Biometric Registration', desc:'Register at registrationandtouristcare.uk.gov.in (free). Upload Aadhaar details and download your yatra card. Pilgrims 55+ upload medical fitness certificate. Shiv Ganga Travels handles this for all package pilgrims.', link:'/blog/char-dham-yatra-registration', linkText:'Registration Guide →' },
          { step:'2', title:'Book Your Package', desc:'Packages from Haridwar start at ₹5,250 per person for 3N/4D. Price includes vehicle, hotels at Guptkashi, meals, guide, and darshan assistance. Book 30–60 days ahead for May–June.', link:'/kedarnath-yatra', linkText:'View Packages →' },
          { step:'3', title:'Decide: Trek, Pony, or Helicopter', desc:'Trek (16km, 5–7 hrs) — most rewarding and free. Pony (₹3,000–5,000 one way) — for 60+ or knee problems. Helicopter (₹7,000–9,000 one way) — book via IRCTC, mandatory 2026 rule.', link:'/blog/kedarnath-helicopter-booking', linkText:'Helicopter Booking Guide →' },
          { step:'4', title:'Plan Your Darshan Timing', desc:'Arrive at Kedarnath by 7–9 AM for shortest queue. Mahabhishek at 4 AM (advance booking ₹3,100) is the deepest experience. Shringaar Aarti at 7:30 PM is unmissable — arrive by 7 PM.', link:'/blog/kedarnath-darshan-timing', linkText:'Darshan Timings →' },
          { step:'5', title:'Pack for High Altitude', desc:'Thermal inners (mandatory — nights 0–5°C even in June), fleece, windproof jacket, warm cap, gloves, trekking boots, ORS sachets, personal medicines for 2 extra days, headtorch for 5 AM trek start.', link:'/blog/char-dham-yatra-packing-list', linkText:'Packing List →' },
        ].map(s => (
          <div key={s.step} style={{ display:'flex', gap:0, borderRadius:10, overflow:'hidden', border:'1px solid hsl(var(--border))', marginBottom:10 }}>
            <div style={{ background:'var(--navy)', minWidth:44, display:'flex', alignItems:'center', justifyContent:'center', padding:'14px 8px' }}>
              <span style={{ color:'#FFD166', fontWeight:800, fontSize:18, fontFamily:'var(--font-display)' }}>{s.step}</span>
            </div>
            <div style={{ padding:'14px 16px', flex:1, background:'#fff' }}>
              <div style={{ fontWeight:700, fontSize:14.5, color:'var(--navy)', marginBottom:5 }}>{s.title}</div>
              <p style={{ fontSize:14, color:'#475569', lineHeight:1.75, margin:0, marginBottom:8 }}>{s.desc}</p>
              {s.link && <Link href={s.link} style={{ fontSize:13, color:'var(--teal)', fontWeight:600, textDecoration:'none' }}>{s.linkText}</Link>}
            </div>
          </div>
        ))}

        <h2 id="trek" style={h2}>The Trek from Gaurikund</h2>
        <p style={p}>
          Your vehicle does not reach Gaurikund. It stops at <strong>Sonprayag</strong>, and the last 5km is a
          police-controlled shared shuttle — this catches people out, because it means your luggage and your
          driver stay behind and whatever you want on the mountain has to be on your back. From Gaurikund the
          trek is <strong>16km, climbing roughly 1,600m</strong>, on a made stone path that is busy from
          first light.
        </p>
        <div style={{ background:'#fff', borderRadius:12, border:'1px solid hsl(var(--border))', overflowX:'auto', marginBottom:16 }}>
          <table style={{ width:'100%', borderCollapse:'collapse', fontSize:13, minWidth:560 }}>
            <caption className="sr-only">Kedarnath trek stages from Gaurikund with distance and elevation</caption>
            <thead>
              <tr style={{ background:'var(--navy-light)' }}>
                {['Stage','From Gaurikund','Elevation','What it is like'].map(x=>(
                  <th key={x} scope="col" style={{ padding:'10px 12px', textAlign:'left', fontWeight:700, fontSize:11, color:'var(--navy)', textTransform:'uppercase', letterSpacing:'0.05em' }}>{x}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {[
                ['Gaurikund','0 km','1,982m','Trek starts. Hot spring, last proper shops, pony stand.'],
                ['Jungle Chatti','4 km','2,300m','Forest section, steady gradient. First tea stalls.'],
                ['Bhimbali','7 km','2,500m','Roughly halfway in effort. Food and a medical post.'],
                ['Linchauli','13 km','3,048m','The cold starts here. Most people slow down noticeably.'],
                ['Kedarnath','16 km','3,583m','Last 3km opens out. Temple visible well before you arrive.'],
              ].map(([a,b,c,d],i)=>(
                <tr key={a} style={{ borderTop:'1px solid hsl(var(--border))', background:i%2===0?'#fff':'var(--bg)' }}>
                  <th scope="row" style={{ padding:'10px 12px', fontWeight:700, color:'var(--navy)', fontSize:13, textAlign:'left' }}>{a}</th>
                  <td style={{ padding:'10px 12px', color:'var(--teal)', fontWeight:700, fontFamily:'monospace' }}>{b}</td>
                  <td style={{ padding:'10px 12px', color:'var(--text-mid)', fontFamily:'monospace', fontSize:12.5 }}>{c}</td>
                  <td style={{ padding:'10px 12px', color:'var(--text-muted)', fontSize:12.5 }}>{d}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p style={p}>
          Start early. Groups that leave Gaurikund at 4–5am finish the climb before the afternoon cloud comes
          up the valley; groups that leave at nine routinely walk the last two hours in rain. If you are not
          walking, pony and palki are booked at the Gaurikund stand, and the{' '}
          <Link href="/kedarnath-pony-palki-kandi-rates" style={{ color:'var(--teal)' }}>official rate card</Link>{' '}
          is worth reading before you negotiate. Full detail is in the{' '}
          <Link href="/blog/kedarnath-trek-guide" style={{ color:'var(--teal)' }}>trek guide</Link>.
        </p>

        <h2 id="best-time" style={h2}>When to Go</h2>
        <p style={p}>
          Two good windows. <strong>May to mid-June</strong> is warmest and is what most people picture —
          it is also the most crowded fortnight of the year, when the daily cap actually binds and the pony
          queue at Gaurikund runs to an hour. <strong>Mid-September to October</strong> has the clearest views
          of the season and a fraction of the people; the trade-off is night temperatures at the temple
          dropping below freezing by October.
        </p>
        <p style={p}>
          July and August are peak monsoon. The temple stays open and the yatra is not formally suspended,
          but the Rudraprayag–Sonprayag road closes repeatedly, helicopters are grounded for days at a time,
          and you often see nothing of the mountains. Month-by-month temperatures, day and night, are on{' '}
          <Link href="/kedarnath-weather" style={{ color:'var(--teal)' }}>Kedarnath weather</Link>.
        </p>

        <h2 id="stay" style={h2}>Where to Stay</h2>
        <p style={p}>
          The real decision is whether you sleep at the temple or at the base. <strong>Guptkashi</strong>{' '}
          (1,319m) is what most packages use, ours included — warm, well supplied, and an easy night&apos;s
          sleep, at the cost of a 3am start on trek day. <strong>Sonprayag and Sitapur</strong> are closer to
          the road head and buy you an hour in bed, with far less accommodation. Staying{' '}
          <strong>at Kedarnath</strong> itself, in GMVN rooms, tented camps or a handful of lodges, is basic
          and cold and needs booking well ahead — but it is the only way to attend the morning aarti before
          the day&apos;s trekkers arrive, and most people who do it say it was the point of the trip.
        </p>

        <h2 id="cost" style={h2}>
          Complete Cost Breakdown — Kedarnath Yatra 2026
        </h2>
        <div style={{ overflowX:'auto', marginBottom:24 }}>
          <table style={{ width:'100%', borderCollapse:'collapse', fontSize:14 }}>
            <thead>
              <tr style={{ background:'var(--navy)' }}>
                {['Expense','Budget','Standard','Notes'].map(h=>(
                  <th key={h} style={{ padding:'10px 12px', textAlign:'left', color:'#fff', fontWeight:700, fontSize:12.5 }}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {[
                ['Package (3N/4D from Haridwar)','₹5,250','₹7,500–12,000','Includes vehicle, hotels, meals, guide'],
                ['Kedarnath trek','Free','Free','No cost — walk yourself'],
                ['Pony (instead of trek)','₹3,000–5,000','₹3,000–5,000','Per person, one way. Negotiable.'],
                ['Helicopter (one way)','₹7,000–9,000','₹7,000–9,000','Via IRCTC booking only'],
                ['Mahabhishek puja','₹3,100','₹3,100','At 4 AM, advance booking'],
                ['Rudrabhishek puja','₹2,500','₹2,500','6–8 AM, temple counter'],
                ['General darshan','Free','Free','Standard queue'],
                ['Prasad / personal expenses','₹500–2,000','₹500–2,000','Per person'],
                ['Registration','Free','Free','registrationandtouristcare.uk.gov.in'],
                ['Total estimated (trek)','₹7,000–9,000','₹10,500–15,000','Package + puja + personal'],
                ['Total estimated (helicopter)','₹14,000–18,000','₹17,000–22,000','Package + helicopter both ways'],
              ].map(([exp,b,s,n],i)=>(
                <tr key={exp} style={{ borderBottom:'1px solid hsl(var(--border))', background:i===9||i===10?'var(--navy-light)':i%2===0?'#fff':'var(--bg)' }}>
                  <td style={{ padding:'9px 12px', fontWeight:i>=9?700:400, color:'var(--navy)', fontSize:13.5 }}>{exp}</td>
                  <td style={{ padding:'9px 12px', fontWeight:700, color:'var(--navy)', fontSize:i>=9?15:13.5 }}>{b}</td>
                  <td style={{ padding:'9px 12px', fontWeight:700, color:i>=9?'#15803D':'var(--navy)', fontSize:i>=9?15:13.5 }}>{s}</td>
                  <td style={{ padding:'9px 12px', color:'var(--text-muted)', fontSize:12.5 }}>{n}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* ── Mid-article conversion CTA ── */}
        <BlogCTA variant="inline" intent="kedarnath" />

        <h2 id="faq" style={h2}>Frequently Asked Questions</h2>
        <FAQAccordion faqs={faqs} />

        <div style={{ borderTop:'1px solid hsl(var(--border))', paddingTop:24, marginTop:32 }}>
          <div style={{ fontWeight:700, fontSize:13.5, color:'var(--navy)', marginBottom:12 }}>Complete Kedarnath Reference</div>
          <div style={{ display:'flex', gap:10, flexWrap:'wrap' }}>
            {[['Darshan Timings','/blog/kedarnath-darshan-timing'],['Trek Guide','/blog/kedarnath-trek-guide'],['Helicopter Booking','/blog/kedarnath-helicopter-booking'],['Haridwar to Kedarnath','/blog/haridwar-to-kedarnath-road-trip'],['Pony vs Helicopter','/blog/kedarnath-pony-vs-helicopter'],['Senior Citizen Guide','/blog/senior-citizen-char-dham']].map(([l,h])=>(
              <Link key={h} href={h} style={{ background:'var(--bg)', border:'1px solid hsl(var(--border))', color:'var(--navy)', padding:'7px 14px', borderRadius:8, fontSize:12.5, fontWeight:600, textDecoration:'none' }}>{l} →</Link>
            ))}
          </div>
        </div>

        <div style={{ borderTop:'1px solid hsl(var(--border))', paddingTop:24, marginTop:32 }}>
          <div style={{ fontWeight:700, fontSize:13.5, color:'var(--navy)', marginBottom:12 }}>Related Guides</div>
          <div style={{ display:'flex', gap:10, flexWrap:'wrap' }}>
            {[['Kedarnath Packages','/kedarnath-yatra'],['Kedarnath Darshan Timings','/blog/kedarnath-darshan-timing'],['Kedarnath Trek Guide','/blog/kedarnath-trek-guide'],['Helicopter Booking','/blog/kedarnath-helicopter-booking'],['Haridwar to Kedarnath','/blog/haridwar-to-kedarnath-road-trip'],['How to Reach Haridwar','/how-to-reach-haridwar']].map(([l,h])=>(
              <Link key={h} href={h} style={{ background:'var(--bg)', border:'1px solid hsl(var(--border))', color:'var(--navy)', padding:'7px 14px', borderRadius:8, fontSize:12.5, fontWeight:600, textDecoration:'none' }}>{l} →</Link>
            ))}
          </div>
        </div>
      
        {/* ── End-of-article booking CTA ── */}
        <BlogCTA variant="footer" intent="kedarnath" />
</article>
    </>
  );
}
