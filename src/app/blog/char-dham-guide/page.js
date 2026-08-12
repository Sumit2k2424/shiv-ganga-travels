import Link from 'next/link';
import { SITE, GLOBAL_FAQS } from '@/data/packages';
import FAQAccordion from '@/components/FAQAccordion';
import BlogCTA from '@/components/BlogCTA';
import BlogAuthor from '@/components/BlogAuthor';
import BlogHero from '@/components/BlogHero';
import ReadingProgress from '@/components/ReadingProgress';
import KeyTakeaways from '@/components/KeyTakeaways';
import BlogTOC from '@/components/BlogTOC';
import ExpertNote from '@/components/ExpertNote';
import PullQuote from '@/components/PullQuote';
import { h2, p } from "@/lib/prose";

export const metadata = {
  title: { absolute: 'Char Dham Yatra Guide 2026 | Route, Cost & Registration Tips' },
  description: 'Char Dham Yatra 2026 planning guide — route, cost, registration. Trusted operator, 15+ yrs experience, customizable itinerary & instant confirmation.',
  keywords: ['char dham yatra complete guide 2026', 'char dham yatra route map', 'char dham yatra cost 2026', 'char dham yatra registration', 'char dham yatra packing list', 'char dham yatra tips 2026'],
  alternates: { canonical: `${SITE.baseUrl}/blog/char-dham-guide` },
  openGraph: {
    title: 'Char Dham Yatra Guide 2026: Route, Cost & Tips',
    description: 'Everything you need to know before planning your Char Dham Yatra — route, cost, registration, tips.',
    url: `${SITE.baseUrl}/blog/char-dham-guide`,
    type: 'article',
    images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: 'Char Dham Yatra Complete Guide 2026 — Route & Tips | Shiv Ganga Travels' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Char Dham Yatra Complete Guide 2026',
    description: 'Everything you need to know before planning your Char Dham Yatra — route, cost, registration, tips.',
    images: [{ url: '/opengraph-image', alt: 'Char Dham Yatra Complete Guide 2026 | Shiv Ganga Travels' }],
  },
};

function Schema() {
  const article = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: 'Char Dham Yatra Complete Guide 2026',
    description: 'Complete guide to planning Char Dham Yatra 2026 from Haridwar.',
    author: {
        '@type': 'Person',
        '@id': `${SITE.baseUrl}/about#sumit-mishra`,
        name: 'Sumit Mishra',
        jobTitle: 'Operations Manager, Shiv Ganga Travels',
        url: `${SITE.baseUrl}/about`,
        sameAs: ['https://www.linkedin.com/in/sumit-mishra-863734171/', 'https://www.facebook.com/sumi2112'],
      },
    publisher: { '@type': 'Organization', name: SITE.name, url: SITE.baseUrl, logo: { '@type': 'ImageObject', url: 'https://www.shivgangatravels.com/logo.png' } },
    datePublished: '2025-01-15',
    dateModified: '2026-01-01',
    mainEntityOfPage: `${SITE.baseUrl}/blog/char-dham-guide`,
    image: '/opengraph-image',
    keywords: 'Char Dham Yatra 2026, char dham guide, char dham route, char dham cost',
    articleSection: 'Travel Guide',
    wordCount: '1200',
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(article) }}/>
}


const TOC = [
  { id:'what-is',      label:'What is the Char Dham Yatra?' },
  { id:'best-time',    label:'Best time to go in 2026' },
  { id:'route',        label:'Route from Haridwar' },
  { id:'cost',         label:'Cost breakdown 2026' },
  { id:'registration', label:'Registration, step by step' },
  { id:'packing',      label:'Packing list' },
  { id:'faq',          label:'Frequently asked questions' },
];

export default function CharDhamGuide() {
  return (
    <>
      <Schema/>
      <ReadingProgress/>

      <BlogHero
        badge="Travel Guide · 2026"
        title="Char Dham Yatra Complete Guide 2026"
        dek="Route · Itinerary · Cost · Registration · Packing List · Expert Tips — from an operator who runs these roads every season."
        author="Sumit Mishra"
        updated="Updated Jan 2026"
        readTime="8 min read"
        facts={[
          { label:'Duration',    value:'10–12 days' },
          { label:'Packages from', value:'₹13,900 pp' },
          { label:'Best months', value:'May & Sep–Oct' },
          { label:'Shrines',     value:'4 Dhams' },
        ]}
      />

      <nav style={{ background:'var(--bg)', borderBottom:'1px solid hsl(var(--border))', padding:'10px 20px' }}>
        <div style={{ maxWidth:'var(--container)', margin:'0 auto', fontSize:12, color:'var(--text-muted)', display:'flex', gap:6, flexWrap:'wrap' }}>
          <Link href="/" style={{ color:'var(--teal)', textDecoration:'none' }}>Home</Link>
          <span>›</span>
          <Link href="/blog" style={{ color:'var(--teal)', textDecoration:'none' }}>Blog</Link>
          <span>›</span>
          <span>Char Dham Yatra Guide</span>
        </div>
      </nav>

      <article className="blog-container" itemScope itemType="https://schema.org/Article">

        {/* Author byline — E-E-A-T signal */}
        <BlogAuthor variant="top" author="sumit" />

        <p className="blog-lede">Planning a <strong>Char Dham Yatra</strong> can feel overwhelming — four high-altitude shrines, 10–12 days of travel, mountain weather, and complex logistics. This complete guide covers everything from the route and cost to registration and what to pack, so you arrive fully prepared for one of Hinduism's most sacred journeys.</p>

        <KeyTakeaways
          points={[
            <>Four shrines — <strong>Yamunotri, Gangotri, Kedarnath, Badrinath</strong> — over ~10–12 days and roughly 1,200 km by road.</>,
            <>Go in <strong>May–mid June</strong> or <strong>mid September–October</strong>. Avoid July–August (monsoon, landslides).</>,
            <>Road packages run <strong>₹13,900–₹30,000 per person</strong> all-inclusive from Haridwar; the helicopter charter from Dehradun is <strong>₹2,30,000</strong>.</>,
            <>Biometric registration is <strong>mandatory</strong> — we handle it for every pilgrim.</>,
            <>Only Kedarnath needs a <strong>16 km trek</strong> (pony or helicopter optional); the other three reach the temple by road.</>,
          ]}
        />

        <BlogTOC items={TOC} />

        <h2 id="what-is" style={h2}>What is the Char Dham Yatra?</h2>
        <p style={p}>The Char Dham Yatra consists of four sacred shrines in the Garhwal Himalayas of Uttarakhand state, India. The four dhams are:</p>
        <ul style={{ listStyle:'none', display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(200px,1fr))', gap:10, marginBottom:20 }}>
          {[
            { name:'Yamunotri', alt:'3,291m', god:'Goddess Yamuna', desc:'Source of the Yamuna river. First stop on the circuit.' },
            { name:'Gangotri', alt:'3,415m', god:'Goddess Ganga', desc:'Origin of the holy Ganga river. Accessible by road.' },
            { name:'Kedarnath', alt:'3,583m', god:'Lord Shiva', desc:'12th Jyotirlinga. Requires a 16 km trek from Gaurikund.' },
            { name:'Badrinath', alt:'3,133m', god:'Lord Vishnu', desc:'Final dham. Motor road to temple. Mana village nearby.' },
          ].map(d => (
            <li key={d.name} style={{ background:'var(--bg)', borderRadius:10, padding:'14px', border:'1px solid hsl(var(--border))' }}>
              <div style={{ fontWeight:700, fontSize:14, color:'var(--navy)', marginBottom:4 }}>{d.name} <span style={{ fontSize:11, fontWeight:500, color:'var(--text-muted)' }}>({d.alt})</span></div>
              <div style={{ fontSize:12, color:'var(--gold-dark)', fontWeight:600, marginBottom:4 }}>{d.god}</div>
              <div style={{ fontSize:12.5, color:'var(--text-mid)' }}>{d.desc}</div>
            </li>
          ))}
        </ul>

        <PullQuote cite="Dhanesh Chandra Mishra, Founder — Shiv Ganga Travels">
          You don't conquer the Char Dham — you surrender to it. Our only job is to make sure the logistics never break your focus.
        </PullQuote>

        <h2 id="best-time" style={h2}>Best Time for Char Dham Yatra 2026</h2>
        <p style={p}>The temples open in <strong>May</strong> (Akshaya Tritiya) and close in <strong>November</strong> (Bhai Dooj). The ideal windows are:</p>
        <ul style={{ paddingLeft:20, marginBottom:16, color:'var(--text-mid)', fontSize:14.5, lineHeight:2 }}>
          <li><strong style={{ color:'var(--navy)' }}>May – Mid June</strong> — Spring season, post-opening rush, pleasant weather. Book 90 days ahead.</li>
          <li><strong style={{ color:'var(--navy)' }}>Mid September – October</strong> — Post-monsoon, crystal-clear views, less crowded. Best season overall.</li>
          <li><strong style={{ color:'var(--red)' }}>July – August</strong> — Heavy monsoon, landslide risk. Avoid.</li>
          <li><strong style={{ color:'var(--red)' }}>November – April</strong> — Temples closed, snow-covered roads. Not accessible.</li>
        </ul>

        <ExpertNote variant="insider">
          If your dates are flexible, we quietly push pilgrims toward <strong>late September and October</strong>. The monsoon has washed the haze out of the valleys, the peaks are sharp against the sky, hotels drop 25–40%, and the crowds from the May rush are long gone. It's the season we'd choose for our own families.
        </ExpertNote>

        <h2 id="route" style={h2}>Char Dham Yatra Route from Haridwar</h2>
        <p style={p}>The complete route follows a clockwise direction and covers approximately <strong>1,200 km</strong> by road plus trekking:</p>
        <div style={{ background:'var(--bg)', borderRadius:12, padding:'18px 20px', border:'1px solid hsl(var(--border))', fontSize:14, lineHeight:2.2, marginBottom:20 }}>
          <strong>Haridwar</strong> → Rishikesh → Barkot → <strong>Yamunotri</strong> → Uttarkashi → <strong>Gangotri</strong> → Guptkashi → Gaurikund → <strong>Kedarnath</strong> (16km trek) → Rudraprayag → Joshimath → <strong>Badrinath</strong> → Mana Village → Devprayag → Rishikesh → <strong>Haridwar</strong>
        </div>

        <ExpertNote variant="usp">
          Pilgrims walk the circuit west to east — Yamunotri first, Badrinath last — for a reason: it acclimatises you gradually and keeps the hardest climb (Kedarnath) in the middle when you're rested but not yet exhausted. We've run this exact order for <strong>15 seasons</strong>, pre-blocking hotels in each base town before peak dates so you're never stranded looking for a room at 9 PM in Guptkashi. Direct operator, zero agent commission.
        </ExpertNote>

        <h2 id="cost" style={h2}>Char Dham Yatra Cost Breakdown 2026</h2>
        <p style={p}>A complete Char Dham Yatra package from a reputable operator like Shiv Ganga Travels costs between <strong>₹13,900 and ₹30,000 per person</strong> by road, depending on the package type — the helicopter charter is a separate product at ₹2,30,000. Here is what is typically included:</p>
        <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(180px,1fr))', gap:10, marginBottom:20 }}>
          {[
            { item:'Hotel Accommodation', type:'Included', note:'All nights, twin sharing' },
            { item:'Daily Meals', type:'Included', note:'Breakfast + dinner, veg' },
            { item:'Private AC Vehicle', type:'Included', note:'Innova / Tempo Traveller' },
            { item:'Local Guide', type:'Included', note:'Experienced Garhwali guide' },
            { item:'Biometric Registration', type:'Included', note:'Mandatory, handled for you' },
            { item:'Toll & Parking', type:'Included', note:'All charges covered' },
            { item:'Kedarnath Trek', type:'Included', note:'Pony/helicopter extra' },
            { item:'Train Tickets', type:'Not Included', note:'Delhi/city → Haridwar' },
          ].map(r => (
            <div key={r.item} style={{ background: r.type === 'Included' ? '#dcfce7' : '#fee2e2', borderRadius:8, padding:'10px 12px', border:`1px solid ${r.type === 'Included' ? '#86efac' : '#fca5a5'}` }}>
              <div style={{ fontWeight:600, fontSize:12.5, color:'var(--text)', marginBottom:3 }}>{r.item}</div>
              <div style={{ fontSize:11.5, fontWeight:700, color: r.type === 'Included' ? 'var(--green)' : 'var(--red)', marginBottom:2 }}>{r.type === 'Included' ? '✅ Included' : '❌ Extra'}</div>
              <div style={{ fontSize:11, color:'var(--text-muted)' }}>{r.note}</div>
            </div>
          ))}
        </div>

        {/* ── Mid-article conversion CTA ── */}
        <BlogCTA variant="inline" intent="cost" />

        <h2 id="registration" style={h2}>Char Dham Yatra Registration 2026</h2>
        <p style={p}>Since 2017, all Char Dham Yatra pilgrims must complete <strong>mandatory biometric registration</strong> on the Uttarakhand Tourism portal. Daily pilgrim limits are enforced at Kedarnath and Badrinath. <strong>Shiv Ganga Travels handles the complete registration</strong> for all our pilgrims — just provide your Aadhaar/passport, a photo, and travel dates.</p>

        <ExpertNote variant="warning">
          Don't skip this. At <strong>Sonprayag and Gaurikund</strong>, police check registration before they let vehicles or trekkers through — every season we see unregistered families turned back within sight of the checkpoint. If you book with us, you never touch the portal; if you're going independent, register before you leave home, not on the road where the mobile network drops.
        </ExpertNote>

        <h2 id="packing" style={h2}>Char Dham Yatra Packing List</h2>
        <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(220px,1fr))', gap:12, marginBottom:24 }}>
          {[
            { cat:'👗 Clothing', items:['Heavy jacket / fleece', 'Rain poncho', 'Thermal innerwear', 'Trekking shoes', 'Woollen socks & cap'] },
            { cat:'💊 Health', items:['Your regular medicines', 'Diamox (altitude)', 'ORS sachets', 'Sunscreen SPF 50', 'Lip balm'] },
            { cat:'📋 Documents', items:['Aadhaar / Passport (original)', 'Yatra registration card', 'Emergency contact list', 'Cash ₹5,000+ extra'] },
            { cat:'🎒 Essentials', items:['Power bank', 'Reusable water bottle', 'Dry snacks & energy bars', 'Small torch / headlamp'] },
          ].map(c => (
            <div key={c.cat} style={{ background:'#fff', borderRadius:10, padding:'14px', border:'1px solid hsl(var(--border))' }}>
              <div style={{ fontWeight:700, fontSize:13.5, color:'var(--navy)', marginBottom:8 }}>{c.cat}</div>
              <ul style={{ paddingLeft:14, margin:0 }}>
                {c.items.map(i => <li key={i} style={{ fontSize:12.5, color:'var(--text-mid)', lineHeight:1.7 }}>{i}</li>)}
              </ul>
            </div>
          ))}
        </div>

        <ExpertNote variant="tip">
          The one thing first-timers forget: <strong>break in your trekking shoes before you arrive.</strong> New shoes on the 16 km Kedarnath climb are the fastest way to end a yatra early. Wear them on a few long walks at home first.
        </ExpertNote>

        <h2 id="faq" style={h2}>Frequently Asked Questions</h2>
        <FAQAccordion faqs={GLOBAL_FAQS}/>

        {/* Internal links */}
        <div style={{ background:'var(--navy-light)', borderRadius:14, padding:'18px 20px', marginTop:32, marginBottom:24 }}>
          <div style={{ fontWeight:700, fontSize:13.5, color:'var(--navy)', marginBottom:12 }}>Related Articles & Packages:</div>
          <div style={{ display:'flex', flexWrap:'wrap', gap:8 }}>
            {[
              { label:'Char Dham Packages 2026 →',        href:'/char-dham-yatra' },
              { label:'Kedarnath Yatra Guide →',          href:'/kedarnath-yatra' },
              { label:'Char Dham Yatra 2026 Dates →',     href:'/char-dham-yatra' },
              { label:'Helicopter Char Dham →',           href:'/packages/char-dham-yatra-helicopter-5n-6d-dehradun' },
              { label:'Senior Citizen Package →',         href:'/packages/char-dham-yatra-senior-citizen-12n-13d' },
              { label:'Best Time Blog →',                 href:'/blog/best-time-char-dham' },
            ].map(l => (
              <Link key={l.href} href={l.href} style={{ background:'#fff', color:'var(--navy)', padding:'7px 14px', borderRadius:8, fontSize:12.5, fontWeight:600, textDecoration:'none', border:'1px solid hsl(var(--border))' }}>
                {l.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Author bio card — E-E-A-T */}
        <BlogAuthor variant="bottom" author="sumit" />

        {/* ── End-of-article booking CTA ── */}
        <BlogCTA variant="footer" intent="info" />
      </article>
    </>
  );
}
