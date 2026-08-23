import Link from 'next/link';
import { SITE } from '@/data/packages';
import BlogCTA from '@/components/BlogCTA';
import BlogAuthor from '@/components/BlogAuthor';
import BlogHero from '@/components/BlogHero';
import ReadingProgress from '@/components/ReadingProgress';
import BlogTOC from '@/components/BlogTOC';
import KeyTakeaways from '@/components/KeyTakeaways';
import FAQAccordion from '@/components/FAQAccordion';
import { ROUTES } from '@/data/distances';
import { h2, p } from "@/lib/prose";

/* Route legs are read from the data layer rather than retyped — the same
   figures power /haridwar-to-badrinath-distance and the cab pages, and the one
   thing worse than no route section is two route sections that disagree. */
const badrinathRoute = ROUTES['haridwar-badrinath'];

const faqs = [
  { q: 'How far is Badrinath from Haridwar?', a: `${badrinathRoute.kmLabel} by road via Rishikesh, Devprayag, Rudraprayag, Karnaprayag, Chamoli and Joshimath. Allow ${badrinathRoute.time} of driving. It is the longest single leg of the Char Dham circuit and the one pilgrims most often underestimate — on a plains highway 320km is four hours, but this road climbs 2,800 metres following a river gorge.` },
  { q: 'What are the Badrinath darshan timings in 2026?', a: 'The temple opens at 4:30 AM for Mahabhishek Puja, general morning darshan runs 7:00 AM to 1:00 PM, the temple closes 1:00 to 4:00 PM, and evening darshan runs 4:00 to 9:00 PM with aarti at 8:00 PM. Timings shift slightly around festival days and the temple committee announces changes on the day.' },
  { q: 'Do you need to trek to Badrinath?', a: 'No. The motor road runs to the temple, and the walk from the car park across the Alaknanda footbridge takes a few minutes. Along with Gangotri it is one of the two dhams with no trek, which makes it the most realistic for elderly pilgrims — the constraint is the altitude at 3,133m, not the walking.' },
  { q: 'When does Badrinath open and close in 2026?', a: 'Badrinath opens on 23 April 2026 at 6:15 AM and closes on 13 November 2026. It has the longest season of the four dhams and is always the last to close. The opening date is announced by the Raj Purohit at Joshimath on Basant Panchami; after closing, the deity moves to Pandukeshwar for winter worship.' },
  { q: 'How hot is Tapt Kund at Badrinath?', a: 'Around 45°C — hot but bearable, unlike the Surya Kund at Yamunotri which runs near 88°C and is used for cooking rather than bathing. Tapt Kund sits just below the temple on the bank of the Alaknanda, and pilgrims traditionally bathe there before darshan. It holds that temperature through snow.' },
  { q: 'Is Mana village worth visiting?', a: 'Yes, and it is 3km from the temple so it costs you an hour, not a day. Mana is the last village on the Indian side of this valley and holds Vyas Gufa, Ganesh Gufa, the Bhim Pul rock bridge over the Saraswati, and the point where the Saraswati disappears underground. Most Badrinath itineraries include it on the morning of departure.' },
  { q: 'How many days do you need for Badrinath from Haridwar?', a: 'Three days is the realistic minimum — a full day up, a day at the temple and Mana, and a day back. Our 2N/3D package is built on exactly that. Doing it as a two-day round trip means roughly 21 hours of driving inside 48, which is legal only if you plan around the 10 PM to 4 AM night-driving ban, and is not something we run.' },
];
export const metadata = {
  title: { absolute: `Badrinath Yatra Guide ${SITE.season} | Price Starts at ₹4,500 | Timings & Route` },
  description: `Badrinath Yatra ${SITE.season} guide — darshan timings, Tapt Kund, Mana Village. Trusted operator, 15+ yrs experience, fixed departures & instant confirmation.`,
  keywords: [`badrinath yatra guide ${SITE.season}`, 'badrinath temple darshan timings', 'badrinath yatra route haridwar', 'haridwar to badrinath distance', `badrinath yatra package ${SITE.season}`, 'badrinath best time to visit', 'tapt kund badrinath', 'mana village badrinath'],
  alternates: { canonical: `${SITE.baseUrl}/blog/badrinath-yatra-guide` },
};
function Schema() {
  // Author is the founder Person entity, not the Organization — every byline on
  // this site resolves to /#founder so the author graph stays single-sourced.
  const a = {
    '@context':'https://schema.org','@type':'BlogPosting',
    headline:'Badrinath Yatra Guide 2026 — Darshan Timings, Route, Package & Travel Tips',
    description:'Badrinath darshan timings, the 320km road route from Haridwar stage by stage, Tapt Kund, Mana village and what to plan for at 3,133m.',
    image:`${SITE.baseUrl}/opengraph-image`,
    author:{ '@type':'Person', '@id':`${SITE.baseUrl}/#founder`, name:'Dhanesh Chandra Mishra' },
    publisher:{ '@type':'Organization', '@id':`${SITE.baseUrl}/#organization`, name:SITE.name, url:SITE.baseUrl, logo:{ '@type':'ImageObject', url:`${SITE.baseUrl}/logo.png` } },
    datePublished:'2025-03-20', dateModified:'2026-08-22',
    mainEntityOfPage:`${SITE.baseUrl}/blog/badrinath-yatra-guide`,
    about:{ '@type':'Place', name:'Badrinath Temple', geo:{ '@type':'GeoCoordinates', latitude:30.7446, longitude:79.4938, elevation:'3133' } },
    speakable:{ '@type':'SpeakableSpecification', cssSelector:['.blog-keytakeaways'] },
  };
  const faq = {
    '@context':'https://schema.org','@type':'FAQPage',
    mainEntity: faqs.map(f => ({ '@type':'Question', name:f.q, acceptedAnswer:{ '@type':'Answer', text:f.a } })),
  };
  const bc = {
    '@context':'https://schema.org','@type':'BreadcrumbList',
    itemListElement:[
      { '@type':'ListItem', position:1, name:'Home', item:SITE.baseUrl },
      { '@type':'ListItem', position:2, name:'Blog', item:`${SITE.baseUrl}/blog` },
      { '@type':'ListItem', position:3, name:'Badrinath Yatra Guide 2026', item:`${SITE.baseUrl}/blog/badrinath-yatra-guide` },
    ],
  };
  return (<>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html:JSON.stringify(a) }}/>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html:JSON.stringify(faq) }}/>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html:JSON.stringify(bc) }}/>
  </>);
}
export default function BadrinathYatraGuide() {
  return (<>
    <Schema/>
    <ReadingProgress/>

    <BlogHero
      badge="Yatra Guide · 2026"
      title="Badrinath Yatra Guide 2026 — Temple, Timings & Travel Tips"
      dek="3,133m · Lord Vishnu · No trek needed · Mana village · Tapt Kund · From ₹4,500"
      author="Dhanesh Chandra Mishra"
      updated="Updated 2026"
      readTime="6 min read"
      facts={[
        { label:'Altitude', value:'3,133 m' },
        { label:'Deity',    value:'Lord Vishnu' },
        { label:'Access',   value:'Road — no trek' },
        { label:'Package from', value:'₹4,500' },
      ]}
    />

    <nav style={{ background:'var(--bg)', borderBottom:'1px solid hsl(var(--border))', padding:'10px 20px' }}>
      <div style={{ maxWidth:'var(--container)', margin:'0 auto', fontSize:12, color:'var(--text-muted)', display:'flex', gap:6, flexWrap:'wrap' }}>
        <Link href="/" style={{ color:'var(--teal)', textDecoration:'none' }}>Home</Link><span>›</span>
        <Link href="/blog" style={{ color:'var(--teal)', textDecoration:'none' }}>Blog</Link><span>›</span>
        <span>Badrinath Yatra Guide 2026</span>
      </div>
    </nav>
    <article className="blog-container" itemScope itemType="https://schema.org/Article">

        {/* Author byline — E-E-A-T signal */}
        <BlogAuthor variant="top" author="dhanesh" />
      <p style={{ fontSize:15.5, color:'#334155', lineHeight:1.85, marginBottom:16 }}>If Kedarnath is Shiva in all his fierce and formidable mountain glory, Badrinath is Vishnu at complete peace — meditative, still, and somehow deeply reassuring. The Badrinath Temple, with its colourful facade against the stark Himalayan backdrop, is one of the most photographed temples in India. And unlike Kedarnath, you can drive straight to it.</p>
      <p style={{ fontSize:15.5, color:'#334155', lineHeight:1.85, marginBottom:16 }}>This guide covers everything you need to know about the <strong>Badrinath Yatra in 2026</strong> — temple darshan timings, the route from Haridwar, what to see beyond the temple, and honest travel tips from people who have guided thousands of pilgrims here.</p>

      <KeyTakeaways points={[
        <>Badrinath opens <strong>23 April 2026</strong> and closes <strong>13 November</strong> — the longest season of the four dhams, and always the last to close.</>,
        <>It is <strong>{badrinathRoute.kmLabel} from Haridwar</strong>, {badrinathRoute.time} of driving. The longest single leg of the circuit.</>,
        <><strong>No trek.</strong> The road runs to the temple; it is a few minutes on foot from the car park.</>,
        <>Darshan runs <strong>7 AM–1 PM and 4–9 PM</strong>, with Mahabhishek from 4:30 AM and aarti at 8 PM.</>,
        <>Altitude <strong>3,133m</strong> — the lowest of the four dhams, which is why it is the easiest on elderly pilgrims.</>,
      ]}/>

      <BlogTOC items={[
        { id:'quick-facts', label:'Badrinath quick facts' },
        { id:'route',       label:'The route from Haridwar' },
        { id:'timings',     label:'Darshan timings 2026' },
        { id:'beyond',      label:'Beyond the temple' },
        { id:'faq',         label:'Frequently asked questions' },
      ]}/>

      <h2 id="quick-facts" style={h2}>Badrinath Temple — Quick Facts</h2>
      <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(180px,1fr))', gap:10, marginBottom:24 }}>
        {[
          { label:'Altitude', value:'3,133 metres' },
          { label:'Deity', value:'Lord Vishnu (Badrivishal)' },
          { label:'Trek Required', value:'No — motor road to temple' },
          { label:'District', value:'Chamoli, Uttarakhand' },
          { label:'Nearest City', value:'Joshimath (45 km)' },
          { label:'Season 2026', value:'23 Apr – 13 Nov' },
        ].map(f => (
          <div key={f.label} style={{ background:'var(--navy-light)', borderRadius:10, padding:'12px', border:'1px solid rgba(15,43,91,0.1)', textAlign:'center' }}>
            <div style={{ fontSize:11.5, color:'var(--text-muted)', marginBottom:4 }}>{f.label}</div>
            <div style={{ fontWeight:700, fontSize:14, color:'var(--navy)' }}>{f.value}</div>
          </div>
        ))}
      </div>

      <h2 id="route" style={h2}>The Route from Haridwar</h2>
      <p style={p}>
        Badrinath is {badrinathRoute.kmLabel} from Haridwar and takes {badrinathRoute.time} of driving. That
        ratio is the single most useful fact on this page: it works out under 30km/h, and pilgrims who plan
        from the distance alone arrive four hours later than they expected, in the dark, at 3,133m. The route
        runs {badrinathRoute.via.join(' → ')}.
      </p>
      <div style={{ background:'#fff', borderRadius:12, border:'1px solid hsl(var(--border))', overflowX:'auto', marginBottom:14 }}>
        <table style={{ width:'100%', borderCollapse:'collapse', fontSize:13, minWidth:640 }}>
          <caption className="sr-only">Haridwar to Badrinath road route, stage by stage</caption>
          <thead>
            <tr style={{ background:'var(--navy-light)' }}>
              {['Stage','Distance','Time','Road notes'].map(x => (
                <th key={x} scope="col" style={{ padding:'10px 12px', textAlign:'left', fontWeight:700, fontSize:11, color:'var(--navy)', textTransform:'uppercase', letterSpacing:'0.05em' }}>{x}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {badrinathRoute.legs.map(([leg, km, time, note], i) => (
              <tr key={leg} style={{ borderTop:'1px solid hsl(var(--border))', background: i%2===0 ? '#fff' : 'var(--bg)' }}>
                <th scope="row" style={{ padding:'10px 12px', fontWeight:600, color:'var(--navy)', fontSize:13, textAlign:'left', whiteSpace:'nowrap' }}>{leg}</th>
                <td style={{ padding:'10px 12px', color:'var(--teal)', fontWeight:700, fontFamily:'monospace' }}>{km}</td>
                <td style={{ padding:'10px 12px', color:'#475569', fontSize:12.5 }}>{time}</td>
                <td style={{ padding:'10px 12px', color:'var(--text-muted)', fontSize:12.5 }}>{note}</td>
              </tr>
            ))}
            <tr style={{ borderTop:'2px solid var(--navy)', background:'var(--navy-light)' }}>
              <th scope="row" style={{ padding:'10px 12px', fontWeight:800, color:'var(--navy)', fontSize:13, textAlign:'left' }}>Haridwar → Badrinath</th>
              <td style={{ padding:'10px 12px', color:'var(--navy)', fontWeight:800, fontFamily:'monospace' }}>{badrinathRoute.kmLabel}</td>
              <td style={{ padding:'10px 12px', color:'var(--navy)', fontWeight:700 }}>{badrinathRoute.time}</td>
              <td style={{ padding:'10px 12px', color:'var(--text-muted)', fontSize:12.5 }}>Most groups break the drive at Rudraprayag or Joshimath.</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p style={{ ...p, fontSize:'0.96em' }}>
        {badrinathRoute.whySlow}
      </p>
      {badrinathRoute.note && (
        <div style={{ background:'#fffbeb', border:'1px solid #fde68a', borderRadius:10, padding:'13px 16px', marginBottom:20 }}>
          <strong style={{ fontSize:13.5, color:'#92400e' }}>Worth knowing: </strong>
          <span style={{ fontSize:13.5, color:'#78350f', lineHeight:1.75 }}>{badrinathRoute.note}</span>
        </div>
      )}
      <p style={p}>
        Full stage detail, alternate routes and current conditions are on{' '}
        <Link href="/haridwar-to-badrinath-distance" style={{ color:'var(--teal)' }}>Haridwar to Badrinath distance</Link>{' '}
        and <Link href="/how-to-reach-badrinath" style={{ color:'var(--teal)' }}>how to reach Badrinath</Link>.
      </p>

      <h2 id="timings" style={h2}>Badrinath Temple Darshan Timings 2026</h2>
      <div style={{ background:'var(--bg)', borderRadius:12, padding:'18px 20px', border:'1px solid hsl(var(--border))', marginBottom:20, fontSize:14 }}>
        <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(min(100%,280px),1fr))', gap:10 }}>
          {[
            { session:'Morning Opening', time:'4:30 AM' },
            { session:'Mahabhishek Puja', time:'4:30 – 6:30 AM' },
            { session:'Morning Darshan', time:'7:00 AM – 1:00 PM' },
            { session:'Afternoon Closure', time:'1:00 PM – 4:00 PM' },
            { session:'Evening Darshan', time:'4:00 PM – 9:00 PM' },
            { session:'Evening Aarti', time:'8:00 PM' },
          ].map(t => (
            <div key={t.session} style={{ display:'flex', justifyContent:'space-between', padding:'8px 12px', background:'#fff', borderRadius:8, border:'1px solid hsl(var(--border))' }}>
              <span style={{ fontWeight:600, color:'var(--text)', fontSize:13 }}>{t.session}</span>
              <span style={{ fontWeight:700, color:'var(--navy)', fontSize:13 }}>{t.time}</span>
            </div>
          ))}
        </div>
      </div>
      <p style={{ ...p, fontSize:13.5 }}>💡 <strong>Pro tip:</strong> The <strong>Mahabhishek Puja at 4:30 AM</strong> is the most spiritually powerful. Book in advance through us — it requires advance registration and involves witnessing the lord being bathed and adorned for the day.</p>


        {/* ── Mid-article conversion CTA ── */}
        <BlogCTA variant="inline" intent="info" />
      <h2 id="beyond" style={h2}>Beyond the Temple — What Else to See</h2>
      <div style={{ display:'flex', flexDirection:'column', gap:8, marginBottom:24 }}>
        {[
          { place:'Tapt Kund', desc:'The natural hot spring right outside the temple. Pilgrims take a holy dip here before entering the temple. Temperature stays around 45°C even in snow. Sacred and purifying.' },
          { place:'Mana Village', desc:'Just 3km from the temple, Mana is the last Indian village before the Tibet border. Visit Vyas Gufa (where Vyas wrote the Mahabharata), Ganesh Gufa, and the Bhim Pul — a massive natural rock bridge over the roaring Saraswati river.' },
          { place:'Brahamakapal Ghat', desc:'A sacred platform on the banks of the Alaknanda river where Pitru Puja (prayers for ancestors) is performed. Deeply moving for many pilgrims.' },
          { place:'Neelkanth Peak', desc:'The majestic 6,596m peak visible from Badrinath. On clear days (early morning is best), the snow-covered summit glows in the dawn light. One of the most breathtaking views in the Himalayas.' },
          { place:'Satopanth Lake', desc:'20km trek from Mana — a high-altitude glacial lake at 4,402m shaped like an equilateral triangle. Only for fit trekkers. Available as an add-on.' },
        ].map(s => (
          <div key={s.place} style={{ background:'#fff', borderRadius:10, padding:'14px 16px', border:'1px solid hsl(var(--border))' }}>
            <div style={{ fontWeight:700, fontSize:14, color:'var(--navy)', marginBottom:5 }}>📍 {s.place}</div>
            <div style={{ fontSize:15, color:'#334155', lineHeight:1.85 }}>{s.desc}</div>
          </div>
        ))}
      </div>

      <h2 id="faq" style={h2}>Frequently Asked Questions</h2>
      <FAQAccordion faqs={faqs} />

      <BlogCTA
        variant="note"
        line="Our Badrinath package runs 2N/3D from Haridwar at ₹4,500 per person, all-inclusive, with VIP darshan arranged."
        href="/badrinath-yatra"
        linkLabel="See the Badrinath package"
      />

        {/* ── End-of-article booking CTA ── */}
        <BlogCTA variant="footer" intent="info" />
</article>
  </>);
}
