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

const faqs = [
  { q: 'What is the minimum age for Char Dham Yatra?', a: 'There is no legal minimum, but altitude is the real limit. We do not recommend the full circuit for children under 5 — Kedarnath at 3,583m and Gangotri at 3,415m are high enough that a small child who becomes unwell cannot easily tell you what is wrong. Children from about 8 upward generally handle the circuit well with a slower itinerary. For younger families, Do Dham or Badrinath alone is the sensible version.' },
  { q: 'Do children need Char Dham registration?', a: 'Yes, every pilgrim needs their own registration regardless of age, and it is free. Register children on the same portal using their Aadhaar. The medical certificate requirement applies at 55 and over, so it does not apply to children — but if your child has asthma or any respiratory condition, carry a doctor\'s note and their inhaler anyway.' },
  { q: 'Can children do the Kedarnath trek?', a: 'A fit child of 10 or over can usually walk the 16km, though it takes them longer and the descent is harder on young knees than the climb. Below that age, take a pony or palki — both carry children routinely and the cost is the same as for an adult. What does not work is starting the walk and deciding halfway; arrange the pony at Gaurikund before you set off.' },
  { q: 'How do you spot altitude sickness in a child?', a: 'It usually presents as unusual behaviour rather than a stated complaint. Watch for a child who goes quiet and refuses food, becomes unusually clingy or irritable, complains of a headache that does not improve, or vomits without any other stomach symptom. Treat any of those at altitude as AMS until proved otherwise — stop climbing, and descend if it does not resolve within a few hours.' },
  { q: 'Which dham is easiest with children?', a: 'Badrinath. The road runs to the temple, it is the lowest of the four at 3,133m, Mana village 3km away is genuinely interesting to children, and the Tapt Kund hot spring is the part they remember. Gangotri is a close second for the same reason — no trek. Yamunotri and Kedarnath both require walking, which is where families struggle.' },
  { q: 'What should children eat and drink on the yatra?', a: 'More water than they will ask for — dehydration at altitude looks a lot like altitude sickness and makes it worse. Keep familiar snacks from home in the daypack, because hill food is heavier and spicier than most children are used to and a child who stops eating goes downhill fast. Avoid cut fruit and roadside cold drinks; stick to hot food and sealed bottles.' },
  { q: 'How long should a family itinerary be?', a: 'Longer than the standard one. Where an adult group runs the circuit in 9 nights, a family with children should plan 11 to 13, using the extra nights as rest days at Guptkashi and Barkot rather than extra sightseeing. The single biggest predictor of a family yatra going badly is a schedule with no slack in it.' },
];

export const metadata = {
  title: { absolute: `Char Dham Yatra with Kids ${SITE.season} | Age & Altitude Safety` },
  description: `Char Dham with children — doable for fit kids from about 8, ponies from ₹1,800 if they cannot walk. Gangotri needs no trek at all; altitude rules by age.`,
  keywords: [`char dham yatra with kids ${SITE.season}`, 'char dham yatra with children', 'kedarnath yatra with family', 'char dham yatra family package', 'char dham with small children', 'kids char dham yatra altitude safety'],
  alternates: { canonical: `${SITE.baseUrl}/blog/char-dham-yatra-with-kids` },
};


function Schema() {
  const article = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Char Dham Yatra with Kids: Age & Altitude Safety',
    description: '',
    image: `${SITE.baseUrl}/opengraph-image`,
    datePublished: '2025-01-01',
    dateModified: '2026-05-21',
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
    mainEntityOfPage: `${SITE.baseUrl}/blog/char-dham-yatra-with-kids`,
  };
  const faq = {
    '@context': 'https://schema.org', '@type': 'FAQPage',
    mainEntity: faqs.map(f => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
  };
  return (<>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(article) }} />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faq) }} />
  </>);
}


export default function Page() {
  return (
    <>
      <Schema />
      <ReadingProgress/>

      <BlogHero
        badge="Family Travel · Honest Guide"
        title="Char Dham Yatra with Kids — What Parents Need to Know"
        dek="Age guidelines · Altitude safety · Which dhams are kid-friendly · Packing for children · Our honest take"
        author="Dhanesh Chandra Mishra"
        updated={`Updated ${SITE.lastUpdated}`}
        readTime="6 min read"
        facts={[
          { label:'Gangotri & Badrinath', value:'All ages (road)' },
          { label:'Yamunotri',  value:'8+ (6 km trek)' },
          { label:'Kedarnath',  value:'12+ or heli' },
          { label:'Under 10',   value:'Skip the K-trek' },
        ]}
      />

      <nav style={{ background:'var(--bg)', borderBottom:'1px solid hsl(var(--border))', padding:'10px 20px' }}>
        <div style={{ maxWidth:'var(--container)', margin:'0 auto', fontSize:12, color:'var(--text-muted)', display:'flex', gap:6, flexWrap:'wrap' }}>
          <Link href="/" style={{ color:'var(--teal)', textDecoration:'none' }}>Home</Link><span>›</span>
          <Link href="/blog" style={{ color:'var(--teal)', textDecoration:'none' }}>Blog</Link><span>›</span>
          <span>Char Dham with Kids</span>
        </div>
      </nav>

      <article className="blog-container" itemScope itemType="https://schema.org/Article">

        {/* Author byline — E-E-A-T signal */}
        <BlogAuthor variant="top" author="dhanesh" />
        <div style={{ fontSize:12, color:'var(--text-muted)', marginBottom:20, textAlign:'right' }}>🗓️ <strong>Last updated:</strong> {SITE.lastUpdated}</div>

        <div style={{ background:'var(--navy-light)', borderRadius:12, padding:'16px 20px', marginBottom:24, border:'2px solid var(--teal)' }}>
          <div style={{ fontWeight:700, fontSize:14, color:'var(--navy)', marginBottom:4 }}>Our honest answer</div>
          <div style={{ fontSize:14.5, color:'#334155', lineHeight:1.7 }}>Yes, children can do the Char Dham Yatra — but the experience varies a lot by age, fitness, and which dhams you prioritise. Badrinath and Gangotri are very manageable for children of all ages. Yamunotri involves a 6km trek. Kedarnath involves a 16km trek at altitude — which is genuinely difficult and not appropriate for children under 10. Helicopter is the right option if you want to include Kedarnath with young children.</div>
        </div>

        <KeyTakeaways points={[
          <>We do not recommend the <strong>full circuit under age 5</strong> — Kedarnath is 3,583m and a small child cannot tell you what is wrong.</>,
          <><strong>Badrinath is the easiest dham</strong> with children: road to the door, lowest of the four, and Mana village nearby.</>,
          <>Children need <strong>their own registration</strong>, free, same portal. The 55+ medical certificate rule does not apply to them.</>,
          <>Plan <strong>11–13 days instead of 9</strong>, using the extra nights as rest days rather than more sightseeing.</>,
          <>In children, altitude sickness shows as <strong>going quiet, refusing food or unusual clinginess</strong> — not as a stated complaint.</>,
        ]}/>

        <BlogTOC items={[
          { id:'dham-by-dham', label:'Dham-by-dham with children' },
          { id:'altitude',     label:'Altitude sickness in children' },
          { id:'packing',      label:'Packing list for children' },
          { id:'meaningful',   label:'Making it meaningful for kids' },
          { id:'faq',          label:'Frequently asked questions' },
        ]}/>

        <h2 id="dham-by-dham" style={h2}>Dham-by-Dham: What to Expect with Children</h2>
        <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fill,minmax(240px,1fr))', gap:12, marginBottom:28 }}>
          {[
            { dham:'Yamunotri', age:'8+ recommended', trek:'6km from Janki Chatti', verdict:'Doable for fit children 8+. Ponies available from ₹1,800 for those who cannot walk. The trek through forest is actually the most child-friendly of all — shorter, cooler, and interesting (hot spring cooking ritual at the top is a huge hit with kids).' },
            { dham:'Gangotri', age:'All ages', trek:'No trek — motor road to temple', verdict:'The easiest dham for families. No trekking at all. Children can manage this at any age. The Bhagirathi river gorge and the Harsil Valley drive are genuinely beautiful and children respond to the landscape well.' },
            { dham:'Kedarnath', age:'12+ for trek', trek:'16km trek at 3,583m', verdict:'The 16km trek at high altitude is not appropriate for children under 10. For 10–14 year olds, pony is available. For younger children, the helicopter option from Phata or Sersi (20-minute flight) is the right choice and is actually thrilling for kids.' },
            { dham:'Badrinath', age:'All ages', trek:'No trek — motor road to temple', verdict:'Like Gangotri, fully accessible by car. The Mana Village walk (3km from temple) is excellent for children — the Bhim Pul boulder bridge, the caves, and the "last dhaba before Tibet" sign all make for memorable moments.' },
          ].map(d=>(
            <div key={d.dham} style={{ background:'#fff', borderRadius:12, padding:'16px', border:'1px solid hsl(var(--border))' }}>
              <div style={{ fontWeight:800, fontSize:14, color:'var(--navy)', marginBottom:3 }}>{d.dham}</div>
              <div style={{ fontSize:11.5, color:'var(--gold-dark)', fontWeight:600, marginBottom:3 }}>Min. age: {d.age}</div>
              <div style={{ fontSize:11.5, color:'var(--text-muted)', marginBottom:8 }}>Trek: {d.trek}</div>
              <div style={{ fontSize:12.5, color:'var(--text-mid)', lineHeight:1.65 }}>{d.verdict}</div>
            </div>
          ))}
        </div>

        <h2 id="altitude" style={h2}>Altitude Sickness in Children — What Parents Must Know</h2>
        <p style={p}>Children are actually more susceptible to altitude sickness (AMS) than adults, and they are often less able to communicate how they are feeling. The key altitudes are Kedarnath (3,583m), Badrinath (3,133m), Gangotri (3,415m), and Yamunotri (3,291m) — all above 3,000m. AMS symptoms to watch for include headache, vomiting, loss of appetite, irritability (beyond normal), and breathlessness at rest.</p>
        <p style={p}>Our standard precautions for children: ascend slowly and give an extra half-day acclimatisation at an intermediate altitude (Guptkashi for Kedarnath, Joshimath for Badrinath). Ensure constant hydration — children dehydrate faster. Avoid any physical exertion in the first 4–6 hours at high altitude. We carry oxygen cylinders on all our vehicles and have basic medical training. If a child shows symptoms, we descend immediately — non-negotiable.</p>

        <h2 id="packing" style={h2}>Packing List for Children on Char Dham Yatra</h2>
        <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fill,minmax(200px,1fr))', gap:10, marginBottom:24 }}>
          {['Warm inner thermals (2 pairs)','Heavy fleece or down jacket','Waterproof outer jacket','Woollen hat and gloves','Comfortable trekking shoes (not new)','Extra socks (wool preferred)','Child-specific altitude sickness medicine (consult doctor)','Oral rehydration salts','High-energy snacks (dry fruits, energy bars)','Small backpack child can carry themselves','Sunscreen SPF 50+ (altitude UV is intense)','Wet wipes and hand sanitiser'].map(i=>(
            <div key={i} style={{ display:'flex', gap:8, alignItems:'flex-start', fontSize:13, color:'var(--text-mid)', background:'var(--bg)', padding:'8px 12px', borderRadius:8, border:'1px solid hsl(var(--border))' }}>
              <span style={{ color:'var(--teal)', fontWeight:700, flexShrink:0 }}>✓</span>{i}
            </div>
          ))}
        </div>

        {/* ── Mid-article conversion CTA ── */}
        <BlogCTA variant="inline" intent="info" />

        <h2 id="meaningful" style={h2}>Making the Yatra Meaningful for Children</h2>
        <p style={p}>The Char Dham Yatra is not just a physical journey — it is a story. Children who understand the stories respond to it completely differently from those who are just being taken along. Before the trip, tell them the stories: why the Pandavas went to Kedarnath, why King Bhagirath performed penance at Gangotri, who Adi Shankaracharya was. The trek to Kedarnath becomes an adventure when a child knows they are following in the footsteps of the Pandavas.</p>
        <p style={p}>The Surya Kund at Yamunotri — where you cook rice in a 88°C natural hot spring — is genuinely magical for children. The Bhim Pul boulder bridge at Mana Village. The marmots that pop out of their burrows along the Kedarnath valley. The Himalayan monals (the jewel-coloured pheasants) that cross the path. A child who comes home from the Char Dham Yatra has experienced things that most adults never will.</p>

        <h2 id="faq" style={h2}>Frequently Asked Questions</h2>
        <FAQAccordion faqs={faqs} />

        <div style={{ background:'var(--navy-light)', borderRadius:14, padding:'18px 20px', marginTop:28 }}>
          <div style={{ fontWeight:700, fontSize:13.5, color:'var(--navy)', marginBottom:10 }}>Related Guides</div>
          <div style={{ display:'flex', flexWrap:'wrap', gap:8 }}>
            {[{l:'Packing List',h:'/blog/char-dham-yatra-packing-list'},{l:'Senior Citizen Package',h:'/blog/senior-citizen-char-dham'},{l:'Kedarnath Helicopter',h:'/blog/kedarnath-helicopter-booking'},{l:'Char Dham Yatra Cost',h:'/blog/char-dham-yatra-cost'}].map(l=>(
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
