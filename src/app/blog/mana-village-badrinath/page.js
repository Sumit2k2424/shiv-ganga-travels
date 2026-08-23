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

/* "First" vs "last" village: the signboard was officially changed in 2022 and
   most travel pages still have not caught up. Both terms stay on this page on
   purpose — "India's last village" is still what pilgrims type into a search
   box, so dropping it would cost the query, while only saying "last" leaves us
   four years out of date and correctable by anyone who has been. Explaining the
   change is the version of this page that is worth citing. */

export const metadata = {
  title: { absolute: `Mana Village Near Badrinath ${SITE.season} — India's First (and Last) Village` },
  description: 'Mana village, 3km from Badrinath — officially renamed India\'s first village in 2022, long known as its last. Vyas Gufa, Bhim Pul, the Saraswati, and what to actually plan for.',
  keywords: ['mana village near badrinath', 'mana village last village india', 'mana village first village india', `mana village guide ${SITE.season}`, 'mana village vyas gufa', 'bhim pul mana village', 'india last village tibet border', 'mana village distance badrinath'],
  alternates: { canonical: `${SITE.baseUrl}/blog/mana-village-badrinath` },
};

const faqs = [
  { q: 'Is Mana India\'s first village or its last village?', a: 'Officially the first, and it has been since 2022. Mana was known for decades as "India\'s last village", and the old signboard said exactly that. In October 2022 the Prime Minister described border settlements as the country\'s first villages rather than its last, and the Border Roads Organisation put up a new sign at the entrance reading "India\'s First Village". Both names still circulate — locals and pilgrims often say last, the signboard says first, and they refer to the same place.' },
  { q: 'How far is Mana village from Badrinath?', a: '3km, on a made road. It is a 45-minute walk from the temple or a short shared jeep ride at roughly ₹30–50. Because it is so close, almost every Badrinath itinerary fits Mana in on the morning of departure — it costs you an hour or two, not a day.' },
  { q: 'What is there to see in Mana village?', a: 'Vyas Gufa and Ganesh Gufa, the two facing caves where the Mahabharata is said to have been dictated and transcribed; Bhim Pul, a single enormous boulder bridging the Saraswati gorge; the point where the Saraswati goes underground; and the village\'s working shawl weavers, who sell from their own doorways. There is also a dhaba advertising itself as the last before Tibet.' },
  { q: 'Do foreign nationals need a permit for Mana?', a: 'Yes. Mana sits close to the international border in a restricted area, and foreign nationals need an Inner Line Permit, issued at Joshimath. Indian citizens need nothing beyond their Char Dham registration. Rules on border areas can tighten at short notice, so foreign visitors should confirm before travelling rather than at Joshimath.' },
  { q: 'When is Mana village open?', a: 'It follows the Badrinath temple exactly — open from 23 April 2026 and closed when the temple closes on 13 November. Mana is a winter-migration village: the residents move down the valley to Chamoli district for the cold months, so out of season there is genuinely nobody there.' },
  { q: 'How much time do you need at Mana?', a: 'Two to three hours covers everything without rushing. Go before 8 AM if you can — the tour vehicles from Badrinath start arriving mid-morning and the village is a different place before they do.' },
  { q: 'What is the altitude of Mana village?', a: 'About 3,200m, effectively the same as Badrinath at 3,133m. There is no extra acclimatisation to plan for; if you are comfortable at the temple you will be comfortable at Mana. The walk to Bhim Pul is short but it is still at altitude, so take it slowly.' },
];


function Schema() {
  const article = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Mana Village Near Badrinath: India\'s First (and Last) Village',
    description: 'Mana village, 3km from Badrinath — renamed India\'s first village in 2022 after decades as its last. Vyas Gufa, Ganesh Gufa, Bhim Pul, the Saraswati, permits and timing.',
    image: `${SITE.baseUrl}/opengraph-image`,
    datePublished: '2025-01-01',
    dateModified: '2026-08-22',
    about: { '@type': 'Place', name: 'Mana, Chamoli district, Uttarakhand', geo: { '@type': 'GeoCoordinates', latitude: 30.7714, longitude: 79.4936, elevation: '3200' } },
    speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.blog-keytakeaways'] },
    author: {
      '@type': 'Person',
      '@id': `${SITE.baseUrl}/#founder`,
      name: 'Dhanesh Chandra Mishra',
      jobTitle: 'Founder & Director, Shiv Ganga Travels',
      url: `${SITE.baseUrl}/about`,
      sameAs: ['https://www.linkedin.com/in/dhanesh-chandra-635564429/'],
    },
    publisher: {
      '@type': 'Organization',
      name: SITE.name,
      url: SITE.baseUrl,
      logo: { '@type': 'ImageObject', url: `${SITE.baseUrl}/logo.png` },
    },
    mainEntityOfPage: `${SITE.baseUrl}/blog/mana-village-badrinath`,
  };
  const faq = {
    '@context': 'https://schema.org', '@type': 'FAQPage',
    mainEntity: faqs.map(f => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
  };
  const bc = {
    '@context': 'https://schema.org', '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: SITE.baseUrl },
      { '@type': 'ListItem', position: 2, name: 'Blog', item: `${SITE.baseUrl}/blog` },
      { '@type': 'ListItem', position: 3, name: 'Mana Village', item: `${SITE.baseUrl}/blog/mana-village-badrinath` },
    ],
  };
  return (<>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(article) }} />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faq) }} />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(bc) }} />
  </>);
}


export default function Page() {
  return (
    <>
      <Schema />
      <ReadingProgress/>

      <BlogHero
        badge="Badrinath · Hidden Gem"
        title="Mana Village — India's Last Village Before Tibet"
        dek="3km from Badrinath · Vyas Gufa · Bhim Pul · Saraswati River · Local Shawl Weavers"
        author="Dhanesh Chandra Mishra"
        updated={`Updated ${SITE.lastUpdated}`}
        readTime="5 min read"
        facts={[
          { label:'Distance', value:'3 km from Badrinath' },
          { label:'Altitude', value:'3,219 m' },
          { label:'Highlights', value:'Vyas Gufa · Bhim Pul' },
          { label:'River',    value:'Saraswati source' },
        ]}
      />

      <nav style={{ background:'var(--bg)', borderBottom:'1px solid hsl(var(--border))', padding:'10px 20px' }}>
        <div style={{ maxWidth:'var(--container)', margin:'0 auto', fontSize:12, color:'var(--text-muted)', display:'flex', gap:6, flexWrap:'wrap' }}>
          <Link href="/" style={{ color:'var(--teal)', textDecoration:'none' }}>Home</Link><span>›</span>
          <Link href="/blog" style={{ color:'var(--teal)', textDecoration:'none' }}>Blog</Link><span>›</span>
          <span>Mana Village Guide</span>
        </div>
      </nav>

      <article className="blog-container" itemScope itemType="https://schema.org/Article">

        {/* Author byline — E-E-A-T signal */}
        <BlogAuthor variant="top" author="dhanesh" />
        <div style={{ fontSize:12, color:'var(--text-muted)', marginBottom:20, textAlign:'right' }}>🗓️ <strong>Last updated:</strong> {SITE.lastUpdated}</div>

        <p style={p}>Most Badrinath pilgrims spend their entire time at the temple, do their darshan, and leave without ever knowing that 3km up the same road is one of the most extraordinary places in India. Mana Village — officially the last inhabited village before the China (Tibet) border — sits at 3,200m at the confluence of the Saraswati and Alaknanda rivers, surrounded by peaks above 6,000m, and it has been continuously inhabited for over a thousand years.</p>
        <p style={p}>The village is small — maybe 70–80 stone houses — and for eight months of the year it is completely buried under snow. The Bhotia community who live here migrate to the lower valleys every winter and return in April when the Badrinath temple reopens. Beyond Mana the road continues to the Mana Pass and into Tibet; there is nothing else on the Indian side.</p>

        <KeyTakeaways points={[
          <><strong>3km from Badrinath temple</strong> — a 45-minute walk or a ₹30–50 shared jeep. Allow 2–3 hours.</>,
          <>Officially <strong>India&apos;s first village since 2022</strong>, having been called its last for decades. The signboard was changed.</>,
          <>See <strong>Vyas Gufa, Ganesh Gufa, Bhim Pul</strong> and the point the Saraswati goes underground.</>,
          <>Altitude <strong>3,200m</strong>, effectively the same as Badrinath — no extra acclimatisation needed.</>,
          <>Open <strong>23 April to 13 November 2026</strong>, with the temple. Foreign nationals need an Inner Line Permit from Joshimath.</>,
        ]}/>

        <BlogTOC items={[
        { id:'first-or-last', label:'First village or last?' },
        { id:'what-to-see', label:'What to see in Mana' },
        { id:'pandavas',    label:'The Pandavas story' },
        { id:'tips',        label:'Practical visiting tips' },
        { id:'open-2026',   label:'Is Mana open in 2026?' },
        { id:'faq',         label:'Frequently asked questions' },
      ]}/>

      <h2 id="first-or-last" style={h2}>India&apos;s First Village, or Its Last?</h2>
      <p style={p}>
        Both, depending on which decade you learned about it. For as long as anyone can remember Mana was
        &ldquo;India&apos;s last village&rdquo; — the final inhabited settlement before the border, and the
        old signboard at the entrance said so. In October 2022 the Prime Minister argued the framing had it
        backwards: border settlements are the country&apos;s first villages, not its last. The Border Roads
        Organisation replaced the sign, and it now reads <strong>&ldquo;India&apos;s First Village&rdquo;</strong>.
      </p>
      <p style={p}>
        This matters more than a naming quibble if you are relying on older travel writing, because a great
        deal of it still describes a signboard that is no longer there — and arriving to photograph
        &ldquo;the last village&rdquo; sign is a small, common disappointment. Locals and pilgrims still use
        both names interchangeably. Geographically nothing changed: beyond Mana the road climbs to the Mana
        Pass and into Tibet, and there is no further Indian settlement on it.
      </p>

      <h2 id="what-to-see" style={h2}>What to See in Mana Village</h2>
        <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fill,minmax(260px,1fr))', gap:14, marginBottom:28 }}>
          {[
            { name:'Vyas Gufa', desc:'A natural cave where the sage Vyas Muni is said to have composed — and dictated — the Mahabharata to Lord Ganesha. The cave is small and dark, with a small shrine inside. You can enter, though it is a tight fit. Standing in it knowing the story is one of those moments that makes pilgrimage different from tourism.' },
            { name:'Ganesh Gufa', desc:'Directly opposite Vyas Gufa is the smaller Ganesh Gufa, where Lord Ganesha supposedly sat and transcribed the Mahabharata as Vyas dictated. Two caves, face-to-face, connected by one of the greatest stories ever written. Both caves are just a few metres off the main village path.' },
            { name:'Bhim Pul', desc:'A single massive, flat boulder that spans the roaring Saraswati river gorge, acting as a natural bridge. Legend says Bhima (of the Pandavas) placed this rock for Draupadi to cross on the way to the heavens. The Saraswati river — which is said to disappear underground just metres ahead and resurface at Prayagraj — rushes beneath with tremendous force.' },
            { name:'Saraswati River', desc:'The mythological Saraswati river — one of the three rivers of the Triveni Sangam at Prayagraj — is said to originate here and flow underground. You can see the river above ground for only a few hundred metres before it disappears. There is a small kund where pilgrims take water before it vanishes.' },
            { name:'Local Shawl Weavers', desc:'The women of Mana weave pashmina and wool shawls in their doorways using traditional hand looms. These are not tourist-facing trinket stalls — they are working weavers who sell directly from home. The shawls are genuine and considerably cheaper than what you will find in Haridwar bazaars. Take time to talk to them.' },
            { name:'Last Tea Stall in India', desc:'There is literally a sign outside one of the dhabas in Mana reading "Last dhaba before Tibet." The rajma-chawal here costs ₹80 and tastes disproportionately good. Sit down, eat slowly, look at the mountains. This is the point where many pilgrims feel the journey has come full circle.' },
          ].map(pl=>(
            <div key={pl.name} style={{ background:'#fff', borderRadius:12, padding:'16px', border:'1px solid hsl(var(--border))' }}>
              <div style={{ fontWeight:700, fontSize:14, color:'var(--navy)', marginBottom:8 }}>{pl.name}</div>
              <div style={{ fontSize:13, color:'var(--text-mid)', lineHeight:1.7 }}>{pl.desc}</div>
            </div>
          ))}
        </div>

        <h2 id="pandavas" style={h2}>The Story of the Pandavas and Mana</h2>
        <p style={p}>Mana sits on what is believed to be the route the Pandavas took to heaven (Swargarohini) after the Kurukshetra war. The entire stretch from Badrinath through Mana and up toward the high passes carries Mahabharata mythology so thickly that it is impossible to separate the landscape from the story. Bhim Pul, Vyas Gufa, Ganesh Gufa, the Saraswati river — these are not isolated sights but parts of the same narrative. Walking through the village with this in mind transforms it completely. The stone lanes, the cave entrances, the roaring river — it all becomes a scene from an epic that Indians have been telling for three thousand years.</p>

        <h2 id="tips" style={h2}>Practical Tips for Visiting Mana</h2>
        <div style={{ background:'var(--bg)', borderRadius:12, padding:'20px 22px', border:'1px solid hsl(var(--border))', marginBottom:24 }}>
          {[
            ['Best time to visit', 'Early morning — before 8 AM — when the tour buses have not arrived. The village has a completely different quality in the first light.'],
            ['How to get there', '3km road from Badrinath temple — walkable in 45 minutes, or take a shared jeep (₹30–50) from Badrinath.'],
            ['Time needed', '2–3 hours is sufficient to see everything properly without rushing.'],
            ['Altitude', '3,200m — same as Badrinath. No additional acclimatisation needed.'],
            ['Entry fee', 'No entry fee. The caves have a small voluntary donation box.'],
            ['Shops', 'Only local hand-made goods. No plastic trinkets. Bring cash — no UPI at the shawl weavers.'],
          ].map(([k,v],i)=>(
            <div key={i} style={{ display:'grid', gridTemplateColumns:'160px 1fr', gap:12, borderTop:i>0?'1px solid hsl(var(--border))':'none', padding:'10px 0' }}>
              <div style={{ fontWeight:700, fontSize:13, color:'var(--navy)' }}>{k}</div>
              <div style={{ fontSize:13, color:'var(--text-mid)', lineHeight:1.6 }}>{v}</div>
            </div>          ))}


        </div>

        {/* ── Mid-article conversion CTA ── */}
        <BlogCTA variant="inline" intent="info" />

        <h2 id="open-2026" style={h2}>Is Mana Village Open in 2026?</h2>
        <p style={p}>Mana Village opens with the Badrinath temple in late April and closes when the temple closes in November. In 2026, Badrinath opens on April 23 — so Mana will be accessible from that date. The village is open to all Indian citizens. Foreign nationals require an Inner Line Permit (ILP) issued at Joshimath, as Mana is in a restricted area near the international border.</p>

        <h2 id="faq" style={h2}>Frequently Asked Questions</h2>
        <FAQAccordion faqs={faqs} />

        <div style={{ background:'var(--navy-light)', borderRadius:14, padding:'18px 20px', marginTop:28 }}>
          <div style={{ fontWeight:700, fontSize:13.5, color:'var(--navy)', marginBottom:10 }}>Related Articles</div>
          <div style={{ display:'flex', flexWrap:'wrap', gap:8 }}>
            {[{l:'Badrinath Temple Guide',h:'/badrinath-temple'},{l:'Char Dham Yatra 2026',h:'/char-dham-yatra'},{l:'Do Dham Package',h:'/do-dham-yatra'},{l:'Char Dham Packing List',h:'/blog/char-dham-yatra-packing-list'}].map(l=>(
              <Link key={l.h} href={l.h} style={{ background:'#fff', color:'var(--navy)', padding:'7px 14px', borderRadius:8, fontSize:12.5, fontWeight:600, textDecoration:'none', border:'1px solid hsl(var(--border))' }}>{l.l} →</Link>
            ))}
          </div>
        </div>
      
        {/* ── End-of-article booking CTA ── */}
        <BlogCTA variant="footer" intent="info" />
</article>
    </>
  );
}
