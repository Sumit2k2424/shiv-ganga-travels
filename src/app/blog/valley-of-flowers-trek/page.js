import Link from 'next/link';
import { SITE } from '@/data/packages';
import BlogCTA from '@/components/BlogCTA';
import BlogAuthor from '@/components/BlogAuthor';
import BlogHero from '@/components/BlogHero';
import ReadingProgress from '@/components/ReadingProgress';
import BlogTOC from '@/components/BlogTOC';
import KeyTakeaways from '@/components/KeyTakeaways';
import FAQAccordion from '@/components/FAQAccordion';
import { h2, p } from "@/lib/prose";

/* The old title read "Price Starts at ₹150", which was the national park entry
   fee auto-templated into a package-price slot. On a page whose own package is
   ₹10,100 that is both wrong and the kind of number a pilgrim quotes back at
   you on the phone. The fee itself now lives in the permit section, where it
   belongs and where the page's own "entry fee" keyword can actually land. */

const faqs = [
  { q: 'What is the Valley of Flowers entry fee in 2026?', a: 'Around ₹200 for Indian nationals and ₹800 for foreign nationals, valid for three days, with roughly ₹50 and ₹250 for each additional day. Children under 12 enter free. The fee is revised between seasons and earlier years were cheaper, so treat this as the current figure rather than a fixed rate — and carry cash, because the counter at Ghangaria does not reliably take cards.' },
  { q: 'Do you need a permit for the Valley of Flowers?', a: 'Yes. It is a national park, and the permit is issued at the forest department counter at Ghangaria against photo ID. It covers three days of entry. There is also a cap of 300 visitors a day, in force since 2017 to protect the meadow, so in peak August the queue at the counter starts before it opens at around 6:30 AM.' },
  { q: 'What are the Valley of Flowers timings?', a: 'The park opens at 7:00 AM, last entry is 2:00 PM, and every visitor must be out by 5:00 PM. Those times are enforced, not advisory. Since the valley is a 4km walk each way from Ghangaria plus however long you spend inside, an entry after about noon means a rushed visit — go at opening.' },
  { q: 'Can you stay overnight in the Valley of Flowers?', a: 'No. Camping and overnight stays inside the park are prohibited outright. Ghangaria is the only accommodation, and it is where everyone doing this trek sleeps — a small settlement with basic guesthouses and a gurudwara, which itself shuts down out of season.' },
  { q: 'When is the Valley of Flowers at peak bloom?', a: 'Mid-July to mid-September, peaking in August. That is monsoon season across most of India, and it is precisely the rain that produces the bloom — so the trade-off is flowers against wet, slippery trail and frequent cloud. The park is open roughly June to October; June is green but sparse, and by late September the meadow is going over.' },
  { q: 'How hard is the Valley of Flowers trek?', a: 'Moderate. Govindghat to Ghangaria is 13km, or about 9km if you take the shared jeep to Pulna, and it takes 4–6 hours on a well-made stone path. From Ghangaria the valley is a 4km day walk each way. The harder day is Hemkund Sahib — 6km each way, steep, and it climbs to 4,329m. Neither requires technical skill; both require being able to walk uphill for several hours at altitude.' },
  { q: 'Is there a helicopter to Ghangaria?', a: 'Yes, from Govindghat, and it runs through the season subject to weather. It saves the 13km approach trek, which makes the trip viable for people who cannot manage that stretch — but it does not help inside the park, where the only way to see the valley is on foot. Book ahead; monsoon cancellations are common and the backlog clears slowly.' },
];

export const metadata = {
  title: { absolute: `Valley of Flowers Trek ${SITE.season} — Best Time, Permit & Route Guide` },
  description: `Valley of Flowers trek ${SITE.season} — UNESCO site at 3,352m. Peak bloom, permit and entry fee, park timings, the 13km route from Govindghat, and how to combine it with Hemkund Sahib.`,
  keywords: [`valley of flowers trek ${SITE.season}`, 'valley of flowers best time', 'valley of flowers trek guide', 'govindghat to valley of flowers', 'valley of flowers uttarakhand', `valley of flowers entry fee ${SITE.season}`, 'valley of flowers flowers list'],
  alternates: { canonical: `${SITE.baseUrl}/blog/valley-of-flowers-trek` },
};
function Schema() {
  const a = {
    '@context':'https://schema.org','@type':'BlogPosting',
    headline:'Valley of Flowers Trek Guide 2026 — Best Time, Permit and Route',
    description:'Peak bloom windows, the national park permit and entry fee, park timings, the 13km route from Govindghat via Ghangaria, and combining the valley with Hemkund Sahib.',
    image:`${SITE.baseUrl}/opengraph-image`,
    author:{ '@type':'Person', '@id':`${SITE.baseUrl}/#founder`, name:'Dhanesh Chandra Mishra' },
    publisher:{ '@type':'Organization', '@id':`${SITE.baseUrl}/#organization`, name:SITE.name, url:SITE.baseUrl, logo:{ '@type':'ImageObject', url:`${SITE.baseUrl}/logo.png` } },
    datePublished:'2025-03-25', dateModified:'2026-08-22',
    mainEntityOfPage:`${SITE.baseUrl}/blog/valley-of-flowers-trek`,
    about:{ '@type':'Place', name:'Valley of Flowers National Park', geo:{ '@type':'GeoCoordinates', latitude:30.7280, longitude:79.6050, elevation:'3352' } },
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
      { '@type':'ListItem', position:3, name:'Valley of Flowers Trek Guide', item:`${SITE.baseUrl}/blog/valley-of-flowers-trek` },
    ],
  };
  return (<>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html:JSON.stringify(a) }}/>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html:JSON.stringify(faq) }}/>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html:JSON.stringify(bc) }}/>
  </>);
}
export default function ValleyOfFlowersTrek() {
  return (<>
    <Schema/>
    <ReadingProgress/>

    <BlogHero
      badge="UNESCO Heritage Trek · 2026"
      title="Valley of Flowers Trek 2026 — Best Time & Complete Guide"
      dek="UNESCO World Heritage · 500+ wildflower species · Best July–September · 5N/6D from Haridwar"
      author="Dhanesh Chandra Mishra"
      updated="Updated 2026"
      readTime="7 min read"
      facts={[
        { label:'Peak bloom', value:'August' },
        { label:'Core trek',  value:'13 km to Ghangaria' },
        { label:'Species',    value:'500+ wildflowers' },
        { label:'Package',    value:'₹10,100 · 5N/6D' },
      ]}
    />

    <nav style={{ background:'var(--bg)', borderBottom:'1px solid hsl(var(--border))', padding:'10px 20px' }}>
      <div style={{ maxWidth:'var(--container)', margin:'0 auto', fontSize:12, color:'var(--text-muted)', display:'flex', gap:6, flexWrap:'wrap' }}>
        <Link href="/" style={{ color:'var(--teal)', textDecoration:'none' }}>Home</Link><span>›</span>
        <Link href="/blog" style={{ color:'var(--teal)', textDecoration:'none' }}>Blog</Link><span>›</span>
        <span>Valley of Flowers Trek Guide</span>
      </div>
    </nav>
    <article className="blog-container" itemScope itemType="https://schema.org/Article">

        {/* Author byline — E-E-A-T signal */}
        <BlogAuthor variant="top" author="dhanesh" />
      <p className="blog-lede">There are landscapes that photographs cannot do justice to. The Valley of Flowers is one of them. Imagine a valley so wide you can’t see its edges, blanketed in thousands of wildflowers in colours so vivid they seem painted — cobalt Himalayan blue poppies, crimson cobra lilies, soft lavender primulas, waxy white Brahma Kamals. And overhead, glacier peaks. And the only sound is the Pushpawati stream and the wind.</p>
      <p style={{ fontSize:15.5, color:'#334155', lineHeight:1.85, marginBottom:16 }}>This is a <strong>UNESCO World Heritage Site</strong> since 1982, and rightly so. It's one of the most genuinely extraordinary places in India. This complete guide covers when to go, how to get there, what you'll see, and how to combine it with the equally magnificent Hemkund Sahib pilgrimage.</p>

      <KeyTakeaways points={[
        <><strong>Peak bloom is August</strong>; the valley is worth visiting mid-July to mid-September and open roughly June to October.</>,
        <><strong>Permit required</strong> — about ₹200 for Indians and ₹800 for foreign nationals, valid three days, issued at Ghangaria.</>,
        <><strong>Park hours 7 AM–5 PM</strong>, last entry 2 PM, and a cap of <strong>300 visitors a day</strong>.</>,
        <><strong>No overnight stay inside</strong> the park. Ghangaria is the only accommodation.</>,
        <>Govindghat to Ghangaria is <strong>13 km</strong> on foot, or 9 km if you take the shared jeep to Pulna. The valley is a 4 km day walk from there.</>,
      ]}/>

      <BlogTOC items={[
        { id:'best-time', label:'Best time to visit' },
        { id:'permit',    label:'Permit, entry fee & timings' },
        { id:'route',     label:'Trek route & distance' },
        { id:'flowers',   label:'What flowers you will see' },
        { id:'hemkund',   label:'Hemkund Sahib combo' },
        { id:'faq',       label:'Frequently asked questions' },
      ]}/>

      <h2 id="best-time" style={h2}>Best Time to Visit Valley of Flowers</h2>
      <p style={{ fontSize:15.5, color:'#334155', lineHeight:1.85, marginBottom:16 }}>The valley is in full bloom from <strong>mid-July to mid-September</strong>. This is also the monsoon season in most of India, but in the high Himalayas the rain brings the flowers rather than destroying them. The peak bloom is typically in <strong>August</strong>. The valley is officially open from June to October.</p>
      <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(160px,1fr))', gap:10, marginBottom:20 }}>
        {[
          { month:'June', bloom:'Early – sparse', note:'Accessible. Some early flowers.' },
          { month:'July', bloom:'Building to peak', note:'Good wildflowers, rains start.' },
          { month:'August', bloom:'⭐ PEAK BLOOM', note:'Maximum flowers. Best time.' },
          { month:'September', bloom:'Good – thinning', note:'Clear weather, fewer crowds.' },
          { month:'Oct–May', bloom:'Closed', note:'Snow-covered. Not accessible.' },
        ].map(m => (
          <div key={m.month} style={{ background: m.bloom.includes('PEAK') ? '#dcfce7' : '#fff', borderRadius:10, padding:'11px', border:`1px solid ${m.bloom.includes('PEAK') ? '#86efac' : 'hsl(var(--border))'}`, textAlign:'center' }}>
            <div style={{ fontWeight:700, fontSize:13.5, color:'var(--navy)', marginBottom:3 }}>{m.month}</div>
            <div style={{ fontSize:11.5, fontWeight:600, color: m.bloom.includes('PEAK') ? '#15803D' : 'var(--text-mid)', marginBottom:3 }}>{m.bloom}</div>
            <div style={{ fontSize:11, color:'var(--text-muted)' }}>{m.note}</div>
          </div>
        ))}
      </div>

      <h2 id="permit" style={h2}>Permit, Entry Fee &amp; Park Timings</h2>
      <p style={p}>
        The Valley of Flowers is a national park, not an open meadow you wander into, and the rules are
        enforced at the gate. The permit is issued at the forest department counter at Ghangaria against photo
        ID, covers three days, and is the same price whether you arrange it in advance or on the morning.
      </p>
      <div style={{ background:'#fff', borderRadius:12, border:'1px solid hsl(var(--border))', overflowX:'auto', marginBottom:14 }}>
        <table style={{ width:'100%', borderCollapse:'collapse', fontSize:13, minWidth:520 }}>
          <caption className="sr-only">Valley of Flowers permit fees and park entry rules</caption>
          <thead>
            <tr style={{ background:'var(--navy-light)' }}>
              {['Rule','Detail'].map(x => (
                <th key={x} scope="col" style={{ padding:'10px 12px', textAlign:'left', fontWeight:700, fontSize:11, color:'var(--navy)', textTransform:'uppercase', letterSpacing:'0.05em' }}>{x}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {[
              ['Entry fee, Indian nationals', 'About ₹200 for 3 days, plus roughly ₹50 per extra day'],
              ['Entry fee, foreign nationals', 'About ₹800 for 3 days, plus roughly ₹250 per extra day'],
              ['Children under 12', 'Free'],
              ['Where to get it', 'Forest department counter, Ghangaria. Photo ID required. Carry cash.'],
              ['Park opens', '7:00 AM'],
              ['Last entry', '2:00 PM'],
              ['Mandatory exit', '5:00 PM — enforced, no exceptions'],
              ['Daily visitor cap', '300, in force since 2017'],
              ['Overnight stay / camping', 'Prohibited inside the park. Stay at Ghangaria.'],
            ].map(([k, v], i) => (
              <tr key={k} style={{ borderTop:'1px solid hsl(var(--border))', background: i%2===0 ? '#fff' : 'var(--bg)' }}>
                <th scope="row" style={{ padding:'10px 12px', fontWeight:600, color:'var(--navy)', fontSize:13, textAlign:'left' }}>{k}</th>
                <td style={{ padding:'10px 12px', color:'var(--text-mid)', fontSize:12.5 }}>{v}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p style={{ ...p, fontSize:'0.95em', color:'var(--text-muted)' }}>
        Fees are revised between seasons — earlier years were ₹150 and ₹600 — so these are the current
        figures rather than a fixed tariff. Last checked August 2026 against Uttarakhand forest department
        and operator sources; confirm at the counter.
      </p>
      <p style={p}>
        The two rules that actually change your day are the 2 PM last entry and the 5 PM exit. The valley is
        4km each way from Ghangaria before you have looked at anything, so a late entry buys you a march
        rather than a visit. Everyone who has a good day here leaves Ghangaria at first light.
      </p>

      <h2 id="route" style={h2}>Trek Route &amp; Distance</h2>
      <div style={{ background:'var(--bg)', borderRadius:12, padding:'16px 20px', border:'1px solid hsl(var(--border))', fontSize:14, lineHeight:2.2, marginBottom:20 }}>
        <strong>Haridwar</strong> → Joshimath (300km, overnight) → Govindghat → <strong>Ghangaria base camp</strong> (13km trek) → <strong>Valley of Flowers</strong> (4km day trek) → <strong>Hemkund Sahib</strong> (6km day trek) → Govindghat → <strong>Badrinath</strong> → Haridwar
      </div>
      <p style={{ fontSize:15.5, color:'#334155', lineHeight:1.85, marginBottom:16 }}>The core trek from <Link href="/govindghat" style={{ color:'var(--teal)', fontWeight:600 }}>Govindghat</Link> to Ghangaria (base camp) is <strong>13km</strong> and takes 4–6 hours. From Ghangaria, the Valley of Flowers is a 4km one-way day trek, and Hemkund Sahib is a steep 6km one-way day trek. Most people do both on separate days.</p>
      <p style={p}>
        Two things shorten that first day, and neither is widely advertised. Shared jeeps run the first 4km
        from Govindghat to <strong>Pulna</strong>, which cuts the approach trek to about <strong>9km</strong>;
        and a helicopter operates Govindghat to Ghangaria through the season, which removes it entirely. The
        helicopter is what makes this trip possible for people who cannot manage 13km with a pack — though it
        buys you nothing inside the park, where the only way to see the valley is on foot. Monsoon
        cancellations are frequent and the backlog clears slowly, so build a spare day around it.
      </p>
      <p style={p}>
        Ghangaria at 3,050m is the hinge of the whole trip. It is a small seasonal settlement with basic
        guesthouses, a gurudwara and a langar, no road, and no reliable network — and it is the only place to
        sleep for both the valley and Hemkund. It shuts down completely once the season ends, which is why
        nothing here can be booked the way a hotel would be.
      </p>

      <h2 id="flowers" style={h2}>What Flowers Will You See?</h2>
      <p style={{ fontSize:15.5, color:'#334155', lineHeight:1.85, marginBottom:16 }}>The valley contains over <strong>500 species of wildflowers</strong>, many of them Himalayan endemics found nowhere else in the world. Some highlights:</p>
      <ul style={{ paddingLeft:20, color:'var(--text-mid)', fontSize:14.5, lineHeight:2.2, marginBottom:20 }}>
        <li><strong>Brahma Kamal</strong> — The state flower of Uttarakhand. Sacred in Hindu tradition. Found on high slopes.</li>
        <li><strong>Blue Himalayan Poppy (Meconopsis)</strong> — Extraordinarily rare. The most photographed flower in the valley.</li>
        <li><strong>Cobra Lily (Arisaema)</strong> — Unusual, dramatically shaped. Deep red and green.</li>
        <li><strong>Primula</strong> — Carpets the meadow floor in lavender and purple.</li>
        <li><strong>Anemone, Geranium, Marsh Marigold</strong> — In abundance throughout August.</li>
      </ul>


        {/* ── Mid-article conversion CTA ── */}
        <BlogCTA variant="inline" intent="info" />
      <h2 id="hemkund" style={h2}>Hemkund Sahib — Combine for the Perfect 5-Day Trip</h2>
      <p style={{ fontSize:15.5, color:'#334155', lineHeight:1.85, marginBottom:16 }}>Full route, season and altitude detail is in our <Link href="/hemkund-sahib-yatra" style={{ color:'var(--teal)', fontWeight:600 }}>Hemkund Sahib yatra guide</Link>.</p>
      <p style={{ fontSize:15.5, color:'#334155', lineHeight:1.85, marginBottom:16 }}>Hemkund Sahib (4,329m) is a Sikh pilgrimage site of extraordinary beauty — a glacial lake surrounded by snow peaks with a pristine gurudwara on its shores. It is said that Guru Gobind Singh meditated here in a previous life. The <strong>Langar</strong> (free kitchen) serves dal, roti and kheer to everyone regardless of faith — one of the most moving expressions of community in any religious place in India.</p>
      <p style={{ fontSize:15.5, color:'#334155', lineHeight:1.85, marginBottom:16 }}>Our <strong>Valley of Flowers + Hemkund Sahib + Badrinath package (5N/6D)</strong> covers all three in one trip from Haridwar for ₹10,100 per person.</p>

      <h2 id="faq" style={h2}>Frequently Asked Questions</h2>
      <FAQAccordion faqs={faqs} />

        {/* ── End-of-article booking CTA ── */}
        <BlogCTA variant="footer" intent="info" />
</article>
  </>);
}
