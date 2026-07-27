import Link from 'next/link';
import { PACKAGES, SITE, GLOBAL_FAQS, TRUST, getFeaturedPackages } from '@/data/packages';
import HeroSection from '@/components/HeroSection';
import { pxAt, pxSrcSet } from '@/lib/pximg';
import ScrollReveal from '@/components/ScrollReveal';
import FAQAccordion from '@/components/FAQAccordion';
import Icon, { WhatsAppIcon } from '@/components/Icon';
// ssr:false dynamic imports moved to Client Component wrapper (Next.js 15 requirement)
import { HeroSearch, GoogleReviews, AutoScrollRow } from '@/components/PageClientWidgets';
import dynamic from 'next/dynamic';

// CounterStat keeps ssr:true so Googlebot sees real values — allowed in Server Components
const CounterStat = dynamic(() => import('@/components/CounterStat'), {
  ssr: true,
});

export const metadata = {
  title: { absolute: `Char Dham Yatra 2026 Packages from Haridwar — Shiv Ganga Travels` },
  description: 'Char Dham Yatra 2026 packages from Haridwar. Direct operator, zero commission. From ₹18,500. Kedarnath, Badrinath, Gangotri, Yamunotri. 50,000+ served.',
  keywords: ['char dham yatra 2026','char dham yatra haridwar','kedarnath yatra package','char dham yatra package from haridwar','do dham yatra','char dham helicopter package','shiv ganga travels haridwar'],
  openGraph: {
    title: 'Char Dham Yatra 2026 Packages Haridwar',
    description: 'Yamunotri · Gangotri · Kedarnath · Badrinath. Zero commission. Direct operator since 2010.',
    url: 'https://www.shivgangatravels.com',
    siteName: 'Shiv Ganga Travels',
    images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: 'Kedarnath Temple — Char Dham Yatra 2026 with Shiv Ganga Travels Haridwar' }],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Shiv Ganga Travels — Char Dham Yatra 2026',
    description: 'Zero commission Char Dham Yatra from Haridwar. Est. 2010.',
    images: [{ url: '/opengraph-image', alt: 'Char Dham Yatra 2026 from Haridwar — Shiv Ganga Travels, Direct Operator since 2010' }],
  },
  alternates: { canonical: 'https://www.shivgangatravels.com' },
};

/* ─── Schemas ─── */
function Schema() {
  const charDhamProduct = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: 'Char Dham Yatra Package 2026 from Haridwar',
    image: [`${SITE.baseUrl}/opengraph-image`],
    description: 'All-inclusive Char Dham Yatra package covering Yamunotri, Gangotri, Kedarnath and Badrinath. 9N/10D from Haridwar. Direct operator, no commission.',
    url: `${SITE.baseUrl}/char-dham-yatra`,
    brand: { '@type': 'Brand', name: 'Shiv Ganga Travels' },
    offers: {
      '@type': 'Offer',
      price: '18500',
      priceCurrency: 'INR',
      priceValidUntil: '2026-11-30',
      availability: 'https://schema.org/InStock',
      url: `${SITE.baseUrl}/char-dham-yatra`,
      seller: { '@type': 'Organization', name: SITE.name, '@id': `${SITE.baseUrl}/#organization` },
    },
    aggregateRating: { '@type':'AggregateRating', ratingValue: 4.7, reviewCount: 54, bestRating:5 },
  };

  const faqSchema = { '@context':'https://schema.org','@type':'FAQPage', mainEntity: GLOBAL_FAQS.map(f => ({'@type':'Question',name:f.q,acceptedAnswer:{'@type':'Answer',text:f.a}})) };
  // Voice-search: tells Google Assistant / TTS which concise blocks to read aloud
  const webpage = {
    '@context':'https://schema.org','@type':'WebPage',
    '@id':`${SITE.baseUrl}/#webpage`,
    url:SITE.baseUrl,
    name:'Char Dham Yatra 2026 from Haridwar — Shiv Ganga Travels',
    inLanguage:'en-IN',
    isPartOf:{ '@id':`${SITE.baseUrl}/#website` },
    about:{ '@id':`${SITE.baseUrl}/#organization` },
    primaryImageOfPage:{ '@type':'ImageObject', url:`${SITE.baseUrl}/opengraph-image` },
    speakable:{ '@type':'SpeakableSpecification', cssSelector:['.speakable-answer'] },
  };
  return (<><script type="application/ld+json" dangerouslySetInnerHTML={{ __html:JSON.stringify(charDhamProduct) }}/><script type="application/ld+json" dangerouslySetInnerHTML={{ __html:JSON.stringify(webpage) }}/><script type="application/ld+json" dangerouslySetInnerHTML={{ __html:JSON.stringify(faqSchema) }}/></>);
}

/* ─── Inline compact card ───
   Pricing theatre removed: no blanket strike-through anchors, no engineered
   "Save ₹X,001" chips. One honest price, one numeral voice (UI sans). */
function PkgCard({ pkg }) {
  const fallBg = { 'char-dham':'linear-gradient(160deg,#0F2B5B,#0B7B8B)', 'do-dham':'linear-gradient(160deg,#0B2C44,#16A993)', 'single-dham':'linear-gradient(160deg,#1A0E3B,#4C3A9E)' };
  return (
    <Link href={`/packages/${pkg.slug}`} className="pkg-card"
      style={{ display:'flex', flexDirection:'column', minWidth:240, maxWidth:280, flex:'0 0 260px', textDecoration:'none', color:'inherit' }}>
      {/* Image */}
      <div style={{ height:168, position:'relative', overflow:'hidden', flexShrink:0, background: fallBg[pkg.category] || fallBg['char-dham'] }}>
        {pkg.photo && (
          <img
            src={pxAt(pkg.photo, 320, 200)}
            srcSet={pxSrcSet(pkg.photo, [[320,200],[560,340]])}
            sizes="260px"
            alt={pkg.name}
            width={280} height={168}
            loading="lazy" decoding="async"
            style={{ width:'100%', height:'100%', objectFit:'cover', objectPosition:'center', display:'block' }}
          />
        )}
        {/* Overlay gradient */}
        <div style={{ position:'absolute', inset:0, background:'linear-gradient(180deg,rgba(15,43,91,0.08) 0%,rgba(15,43,91,0.75) 100%)', pointerEvents:'none' }}/>
        {pkg.badge && <span className="badge badge-gold" style={{ position:'absolute', top:10, left:10, zIndex:2 }}>{pkg.badge}</span>}
        <span style={{ position:'absolute', top:10, right:10, background:'rgba(0,0,0,0.5)', backdropFilter:'blur(4px)', color:'#fff', fontSize:10.5, fontWeight:600, padding:'3px 9px', borderRadius:6, zIndex:2 }}>{pkg.duration.nights}N</span>
        <div style={{ position:'absolute', bottom:0, left:0, right:0, padding:'10px 14px', zIndex:2 }}>
          <h2 style={{ color:'#fff', fontWeight:700, fontSize:13.5, lineHeight:1.3, textShadow:'0 1px 4px rgba(0,0,0,0.6)' }}>{pkg.name}</h2>
        </div>
      </div>
      {/* Body */}
      <div style={{ padding:'14px', flex:1, display:'flex', flexDirection:'column', gap:10 }}>
        <div style={{ display:'flex', gap:6, flexWrap:'wrap' }}>
          <span className="chip" style={{ display:'inline-flex', alignItems:'center', gap:5 }}><Icon name="map" size={12}/>{pkg.startCity}</span>
          <span className="chip" style={{ display:'inline-flex', alignItems:'center', gap:5 }}><Icon name="car" size={12}/>{pkg.transport}</span>
        </div>
        <div style={{ display:'flex', alignItems:'flex-end', justifyContent:'space-between', marginTop:'auto' }}>
          <div>
            <div style={{ fontSize:11, color:'var(--text-muted)' }}>From</div>
            <div style={{ fontWeight:800, fontSize:20, color:'var(--navy)', lineHeight:1.1, letterSpacing:'-0.02em' }}>₹{pkg.price.discounted.toLocaleString('en-IN')}</div>
            <div style={{ fontSize:10.5, color:'var(--text-muted)', marginTop:1 }}>per person · all-inclusive</div>
          </div>
          <span className="btn btn-primary" style={{ fontSize:11.5, padding:'7px 14px' }}>View itinerary</span>
        </div>
      </div>
    </Link>
  );
}

/* ─── Dham destination tile ─── */
function DhamTile({ name, icon, href, sub }) {
  return (
    <Link href={href} className="dham-tile">
      <div className="dham-circle" style={{ color:'var(--navy)' }}><Icon name={icon} size={26}/></div>
      <div style={{ textAlign:'center' }}>
        <div style={{ fontSize:13, fontWeight:600, color:'var(--text)', lineHeight:1.3 }}>{name}</div>
        {sub && <div style={{ fontSize:11, color:'var(--text-muted)', marginTop:2 }}>{sub}</div>}
      </div>
    </Link>
  );
}

/* ─── Section row header ─── */
function RowHeader({ eyebrow, title, sub, href }) {
  return (
    <div style={{ display:'flex', justifyContent:'space-between', alignItems:'flex-end', marginBottom:24, flexWrap:'wrap', gap:14 }}>
      <div>
        <span className="section-tag">{eyebrow}</span>
        <h2 className="section-title">{title}</h2>
        {sub && <p className="section-subtitle" style={{ marginBottom:0 }}>{sub}</p>}
      </div>
      {href && (
        <Link href={href} className="view-all">
          View All
          <svg width="13" height="13" viewBox="0 0 13 13" fill="none" stroke="currentColor" strokeWidth="2"><path d="M2.5 6.5h8M6.5 2.5l4 4-4 4"/></svg>
        </Link>
      )}
    </div>
  );
}

const charDham   = PACKAGES.filter(p => p.category === 'char-dham');
const doDham     = PACKAGES.filter(p => p.category === 'do-dham');
const singleDham = PACKAGES.filter(p => p.category === 'single-dham');

export default function HomePage() {
  return (
    <>
      <Schema/>

      <HeroSection/>

      {/* ═══════════════════════════════════════════════
          INTENT SELECTOR — "What are you looking for?"
          Promoted to slot #2 (was buried under two trust
          strips): the natural router for the four intents.
      ═══════════════════════════════════════════════ */}
      <section style={{ background:'#fff', padding:'36px 20px 28px', borderBottom:'1px solid var(--border)' }}>
        <div style={{ maxWidth:'var(--container)', margin:'0 auto' }}>
          <div style={{ textAlign:'center', marginBottom:20 }}>
            <p style={{ fontSize:13, fontWeight:700, color:'var(--text-muted)', textTransform:'uppercase', letterSpacing:'0.12em', marginBottom:6 }}>Start Here</p>
            <h2 style={{ fontFamily:'var(--font-display)', fontSize:'clamp(1.3rem,3vw,1.7rem)', fontWeight:600, color:'var(--navy)', margin:0, letterSpacing:'-0.02em' }}>
              What are you looking for?
            </h2>
          </div>
          <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(min(200px,100%),1fr))', gap:12 }}>
            {[
              {
                icon:'temple', title:'Char Dham Yatra',
                desc:'All 4 sacred dhams — Yamunotri, Gangotri, Kedarnath, Badrinath',
                tag:'Most popular', tagColor:'#15803D', tagBg:'#F0FDF4',
                from:'₹18,500', href:'/char-dham-yatra', cta:'See itineraries',
                accent:'var(--navy)',
              },
              {
                icon:'mountain', title:'Kedarnath Yatra',
                desc:'3 nights 4 days — Lord Shiva\'s abode at 3,583m',
                tag:'Shortest trip', tagColor:'var(--teal-dark)', tagBg:'#E6F7F9',
                from:'₹6,999', href:'/kedarnath-yatra', cta:'Plan the trek',
                accent:'var(--teal)',
              },
              {
                icon:'helicopter', title:'Helicopter Package',
                desc:'All 4 dhams in 6 days — for seniors & VIP darshan',
                tag:'Premium', tagColor:'#B45309', tagBg:'#FEF3E2',
                from:'₹85,000', href:'/char-dham-helicopter', cta:'See flight plan',
                accent:'#B45309',
              },
              {
                icon:'car', title:'Just the Cab',
                desc:'Vehicle only — Innova, Ertiga, Tempo from Haridwar',
                tag:'Cab only', tagColor:'var(--navy)', tagBg:'var(--navy-light)',
                from:'₹5,500', href:'/char-dham-yatra-cab-booking', cta:'Check cab rates',
                accent:'var(--navy)',
              },
            ].map(card => (
              <Link key={card.href} href={card.href}
                style={{
                  display:'flex', flexDirection:'column', gap:10,
                  padding:'18px', borderRadius:14,
                  border:`2px solid transparent`,
                  background:'var(--bg)',
                  textDecoration:'none', color:'inherit',
                  transition:'all .18s',
                  boxShadow:'0 1px 4px rgba(15,43,91,0.06)',
                  position:'relative', overflow:'hidden',
                }}
                className="intent-card"
              >
                {/* Left accent bar */}
                <div style={{ position:'absolute', left:0, top:0, bottom:0, width:3, background:card.accent, borderRadius:'14px 0 0 14px' }}/>
                <div style={{ display:'flex', alignItems:'center', justifyContent:'space-between' }}>
                  <span style={{ width:40, height:40, borderRadius:10, background:'#fff', border:'1px solid var(--border)', display:'flex', alignItems:'center', justifyContent:'center', color:card.accent }}>
                    <Icon name={card.icon} size={21}/>
                  </span>
                  <span style={{ fontSize:10.5, fontWeight:700, color:card.tagColor, background:card.tagBg, padding:'3px 10px', borderRadius:100 }}>{card.tag}</span>
                </div>
                <div>
                  <div style={{ fontWeight:700, fontSize:15, color:'var(--navy)', marginBottom:4 }}>{card.title}</div>
                  <div style={{ fontSize:12.5, color:'var(--text-muted)', lineHeight:1.5 }}>{card.desc}</div>
                </div>
                <div style={{ display:'flex', alignItems:'center', justifyContent:'space-between', marginTop:'auto' }}>
                  <div style={{ fontSize:12, color:'var(--text-muted)' }}>
                    From <span style={{ fontWeight:800, fontSize:16, color:'var(--navy)' }}>{card.from}</span>
                  </div>
                  <span style={{ fontSize:12, fontWeight:600, color:card.accent, display:'inline-flex', alignItems:'center', gap:4 }}>{card.cta} <Icon name="arrowRight" size={12}/></span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          TRUST BAND — the page's one stats moment.
          Three claims, stated once. (The IATA/ISO badge
          strip and two duplicate stat bands are gone.)
      ═══════════════════════════════════════════════ */}
      <div style={{ background:'var(--navy)' }}>
        <div style={{ maxWidth:'var(--container)', margin:'0 auto', display:'flex', flexWrap:'wrap' }}>
          {TRUST.stats.map((s,i) => (
            <CounterStat key={s.label} {...s} border={i < TRUST.stats.length-1}/>
          ))}
        </div>
      </div>

      {/* ═══════════════════════════════════════════════
          CAB SECTION HERO
      ═══════════════════════════════════════════════ */}
      <section style={{ background:'linear-gradient(135deg,#1a1a2e 0%,#16213e 50%,#0f3460 100%)', padding:'52px 20px' }}>
        <div style={{ maxWidth:'var(--container)', margin:'0 auto' }}>
          <div className='cab-hero-grid' style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(min(100%,280px),1fr))', gap:40, alignItems:'center' }}>

            {/* Left — text */}
            <div>
              <span style={{ background:'rgba(232,146,10,0.2)', color:'#FFD166', fontSize:11, fontWeight:700, letterSpacing:'0.14em', textTransform:'uppercase', padding:'5px 16px', borderRadius:100, display:'inline-block', marginBottom:18 }}>
                Char Dham Cab Service
              </span>
              <h2 style={{ fontFamily:'var(--font-display)', fontSize:'clamp(1.6rem,3.5vw,2.4rem)', fontWeight:600, color:'#fff', lineHeight:1.15, marginBottom:14, letterSpacing:'-0.03em' }}>
                AC cab for the full circuit —<br/>Innova, Tempo &amp; Ertiga
              </h2>
              <p style={{ fontSize:15, color:'rgba(255,255,255,0.8)', lineHeight:1.75, marginBottom:24 }}>
                Haridwar–Kedarnath–Badrinath–Gangotri–Yamunotri and back. Hill-seasoned drivers,
                fixed rates including fuel, driver and tolls. Available standalone or as part of any package.
              </p>

              {/* Vehicle chips */}
              <div style={{ display:'flex', flexWrap:'wrap', gap:8, marginBottom:24 }}>
                {[
                  { v:'Ertiga', s:'4 seats', p:'from ₹22,000' },
                  { v:'Innova Crysta', s:'6 seats', p:'from ₹30,000', hot:true },
                  { v:'Tempo 9S', s:'9 seats', p:'from ₹38,000' },
                  { v:'Tempo 12S', s:'12 seats', p:'from ₹44,000' },
                ].map(c => (
                  <div key={c.v} style={{
                    background: c.hot ? 'rgba(232,146,10,0.2)' : 'rgba(255,255,255,0.07)',
                    border: `1px solid ${c.hot ? 'rgba(232,146,10,0.5)' : 'rgba(255,255,255,0.15)'}`,
                    borderRadius:9, padding:'8px 14px',
                  }}>
                    <div style={{ fontSize:12.5, fontWeight:700, color: c.hot ? '#FFD166' : '#fff' }}>{c.v}</div>
                    <div style={{ fontSize:11.5, color:'rgba(255,255,255,0.72)', marginTop:1 }}>{c.s} · {c.p}</div>
                  </div>
                ))}
              </div>
              <p style={{ fontSize:12, color:'rgba(255,255,255,0.6)', marginBottom:20 }}>
                Full-circuit prices · fuel, driver &amp; tolls included · green tax and parking itemised in your quote
              </p>

              <div style={{ display:'flex', gap:12, flexWrap:'wrap', alignItems:'center' }}>
                <a href={`https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent('Namaste! I want to book a cab for Char Dham Yatra 2026. Please share rates.')}`}
                  target="_blank" rel="nofollow noopener noreferrer"
                  style={{ display:'inline-flex', alignItems:'center', gap:8, background:'#25D366', color:'#fff', padding:'12px 24px', borderRadius:9, fontWeight:700, fontSize:14, textDecoration:'none' }}>
                  <WhatsAppIcon size={15}/> Book Cab on WhatsApp
                </a>
                <Link href="/cabs" style={{ display:'inline-flex', alignItems:'center', gap:6, color:'#fff', fontSize:13.5, fontWeight:600, textDecoration:'none', borderBottom:'1px solid rgba(255,255,255,0.4)', paddingBottom:1 }}>
                  View all vehicles <Icon name="arrowRight" size={13}/>
                </Link>
              </div>
            </div>

            {/* Right — route cards */}
            <div style={{ display:'flex', flexDirection:'column', gap:10 }}>
              <div style={{ fontSize:11, fontWeight:700, color:'rgba(255,255,255,0.4)', textTransform:'uppercase', letterSpacing:'0.12em', marginBottom:4 }}>Popular Routes</div>
              {[
                { from:'Haridwar', to:'Kedarnath', dist:'225 km', time:'6–7 hrs', fare:'from ₹3,500', href:'/haridwar-to-kedarnath-cab' },
                { from:'Haridwar', to:'Badrinath', dist:'320 km', time:'8–9 hrs', fare:'from ₹4,500', href:'/haridwar-to-badrinath-cab' },
                { from:'Haridwar', to:'Gangotri',  dist:'265 km', time:'7–8 hrs', fare:'from ₹4,000', href:'/haridwar-to-gangotri-cab' },
                { from:'Delhi',    to:'Haridwar',  dist:'210 km', time:'4–5 hrs', fare:'from ₹2,800', href:'/delhi-to-haridwar-cab' },
              ].map(r => (
                <Link key={r.href} href={r.href}
                  style={{ display:'grid', gridTemplateColumns:'1fr auto', alignItems:'center', gap:12, padding:'13px 16px', background:'rgba(255,255,255,0.06)', borderRadius:11, border:'1px solid rgba(255,255,255,0.1)', textDecoration:'none', transition:'background .15s' }}>
                  <div>
                    <div style={{ fontSize:13.5, fontWeight:700, color:'#fff' }}>{r.from} → {r.to}</div>
                    <div style={{ fontSize:12, color:'rgba(255,255,255,0.5)', marginTop:2 }}>{r.dist} · {r.time}</div>
                  </div>
                  <div style={{ textAlign:'right' }}>
                    <div style={{ fontSize:14, fontWeight:800, color:'#FFD166' }}>{r.fare}</div>
                    <div style={{ fontSize:11, color:'rgba(255,255,255,0.6)', marginTop:1 }}>Innova one-way</div>
                  </div>
                </Link>
              ))}
              <Link href="/char-dham-yatra-cab-booking" style={{ display:'inline-flex', alignItems:'center', gap:6, color:'#fff', fontSize:13, fontWeight:600, textDecoration:'none', marginTop:6 }}>
                All cab options + group rates <Icon name="arrowRight" size={13}/>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          4 DHAMS — tile grid
          (The five-claim zero-commission ribbon is gone —
          each of its promises now lives once, where it
          answers a live objection.)
      ═══════════════════════════════════════════════ */}
      <ScrollReveal as="section" style={{ background:'#fff', padding:'56px 0 44px' }}>
        <div style={{ maxWidth:'var(--container)', margin:'0 auto', padding:'0 20px' }}>
          <div style={{ textAlign:'center', marginBottom:36 }}>
            <span className="section-tag">The Sacred Four</span>
            <h2 className="section-title">Explore the <em>Char Dham</em></h2>
            <p className="section-subtitle" style={{ margin:'0 auto' }}>
              Four sacred shrines. One divine circuit. A journey Hindus make once in a lifetime.
            </p>
          </div>
          <div style={{ display:'flex', justifyContent:'center', gap:'clamp(18px,4vw,48px)', flexWrap:'wrap' }}>
            <DhamTile name="Yamunotri"    icon="water"      href="/packages/yamunotri-yatra-package-2n-3d-haridwar" sub="3,291m · Goddess Yamuna"/>
            <DhamTile name="Gangotri"     icon="leaf"       href="/packages/gangotri-yatra-package-2n-3d-haridwar"  sub="3,415m · Mother Ganga"/>
            <DhamTile name="Kedarnath"    icon="mountain"   href="/packages/kedarnath-yatra-package-3n-4d-haridwar" sub="3,583m · Lord Shiva"/>
            <DhamTile name="Badrinath"    icon="temple"     href="/packages/badrinath-yatra-package-2n-3d-haridwar" sub="3,133m · Lord Vishnu"/>
            <DhamTile name="Helicopter"   icon="helicopter" href="/packages/char-dham-yatra-helicopter-5n-6d-dehradun" sub="VIP · 6 days"/>
          </div>
        </div>
      </ScrollReveal>

      {/* Gradient promo-chip rail removed — it duplicated the package rails
          below with less information and outshouted the actual product. */}

      {/* ═══════════════════════════════════════════════
          COST TRANSPARENCY — "Where your money goes"
          Replaces the competitor price table: naming
          MakeMyTrip/Thrillophilia with specific prices
          carried legal risk, advertised the competition
          and injected doubt. Transparency about OUR
          price is the proof our brand promise rests on.
      ═══════════════════════════════════════════════ */}
      <section style={{ background:'var(--navy)', padding:'56px 20px' }}>
        <div style={{ maxWidth:960, margin:'0 auto' }}>
          <div style={{ textAlign:'center', marginBottom:32 }}>
            <span style={{ background:'rgba(232,146,10,0.2)', color:'#FFD166', fontSize:11, fontWeight:700, letterSpacing:'0.12em', textTransform:'uppercase', padding:'5px 16px', borderRadius:100, display:'inline-block', marginBottom:12 }}>
              Full Cost Transparency
            </span>
            <h2 style={{ fontFamily:'var(--font-display)', fontSize:'clamp(1.4rem,3vw,2.1rem)', fontWeight:600, color:'#fff', letterSpacing:'-0.02em', marginBottom:10 }}>
              Where your ₹18,500 goes
            </h2>
            <p style={{ color:'rgba(255,255,255,0.75)', fontSize:14.5, maxWidth:560, margin:'0 auto', lineHeight:1.7 }}>
              You book with the operator, so there is no commission layer to hide.
              Every quote we send is itemised line by line — this is what it covers.
            </p>
          </div>

          <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(min(260px,100%),1fr))', gap:12, marginBottom:28 }}>
            {[
              { icon:'car',      t:'Vehicle, fuel & driver',   d:'AC vehicle for the full circuit, hill-seasoned driver, fuel, tolls and driver allowance.' },
              { icon:'calendar', t:'Hotels — every night',     d:'Named hotels near the temples, confirmed before you pay. No "similar category" surprises.' },
              { icon:'meal',     t:'Meals & sattvic kitchen',  d:'Breakfast and dinner throughout — pure veg, Jain on request.' },
              { icon:'clipboard',t:'Permits & registration',   d:'Biometric yatra registration, green tax and parking — itemised, not sprung on you later.' },
              { icon:'users',    t:'Guide & on-road support',  d:'Garhwali guides and a 24/7 support line for every day you are in the hills.' },
              { icon:'receipt',  t:'Our margin — on the sheet',d:'Our operator margin appears as its own line. You see exactly what we earn.' },
            ].map(r => (
              <div key={r.t} style={{ background:'rgba(255,255,255,0.06)', borderRadius:14, padding:'18px 16px', border:'1px solid rgba(255,255,255,0.1)', display:'flex', gap:12, alignItems:'flex-start' }}>
                <span style={{ width:38, height:38, borderRadius:10, background:'rgba(232,146,10,0.16)', color:'#FFD166', display:'flex', alignItems:'center', justifyContent:'center', flexShrink:0 }}>
                  <Icon name={r.icon} size={19}/>
                </span>
                <div>
                  <div style={{ fontWeight:700, fontSize:14, color:'#fff', marginBottom:4 }}>{r.t}</div>
                  <div style={{ fontSize:12.5, color:'rgba(255,255,255,0.68)', lineHeight:1.6 }}>{r.d}</div>
                </div>
              </div>
            ))}
          </div>

          <div style={{ textAlign:'center' }}>
            <a href={`https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent('Namaste! Please send me the full line-by-line price breakdown for Char Dham Yatra 2026.')}`}
              target="_blank" rel="nofollow noopener noreferrer"
              style={{ display:'inline-flex', alignItems:'center', gap:8, background:'#25D366', color:'#fff', padding:'13px 28px', borderRadius:10, fontWeight:700, fontSize:14, textDecoration:'none' }}>
              <WhatsAppIcon size={16}/>
              Get my full price breakdown
            </a>
            <p style={{ color:'rgba(255,255,255,0.6)', fontSize:12, marginTop:12, maxWidth:480, margin:'12px auto 0', lineHeight:1.6 }}>
              Booking direct with an operator typically avoids the 10–20% that
              commission channels add. Compare any quote line by line — we will walk you through ours.
            </p>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          CHAR DHAM PACKAGES
      ═══════════════════════════════════════════════ */}
      <ScrollReveal as="section" style={{ background:'var(--bg)', padding:'8px 0 40px' }}>
        <div style={{ maxWidth:'var(--container)', margin:'0 auto', padding:'0 20px' }}>
          <RowHeader eyebrow="Most Popular" title={<><em>Char Dham</em> Yatra Packages</>} sub="All four dhams in one divine journey — from 5 days to 15 days." href="/packages/char-dham"/>
          <AutoScrollRow>{charDham.map(p=><PkgCard key={p.slug} pkg={p}/>)}</AutoScrollRow>
        </div>
      </ScrollReveal>

      {/* ═══════════════════════════════════════════════
          DO DHAM
      ═══════════════════════════════════════════════ */}
      <ScrollReveal as="section" style={{ background:'var(--bg)', padding:'48px 0 40px' }}>
        <div style={{ maxWidth:'var(--container)', margin:'0 auto', padding:'0 20px' }}>
          <RowHeader eyebrow="Two Dhams · One Journey" title={<><em>Do Dham</em> Yatra Packages</>} sub="Perfect when time is limited but devotion is full." href="/packages/do-dham"/>
          <AutoScrollRow>{doDham.map(p=><PkgCard key={p.slug} pkg={p}/>)}</AutoScrollRow>
        </div>
      </ScrollReveal>

      {/* ═══════════════════════════════════════════════
          SINGLE DHAM
      ═══════════════════════════════════════════════ */}
      <ScrollReveal as="section" style={{ background:'var(--bg)', padding:'48px 0 40px' }}>
        <div style={{ maxWidth:'var(--container)', margin:'0 auto', padding:'0 20px' }}>
          <RowHeader eyebrow="Focused · Affordable" title={<><em>Single Dham</em> Packages</>} sub="One sacred shrine. Deeply meaningful. From ₹5,299." href="/packages/single-dham"/>
          <AutoScrollRow>{singleDham.map(p=><PkgCard key={p.slug} pkg={p}/>)}</AutoScrollRow>
        </div>
      </ScrollReveal>

      {/* ═══════════════════════════════════════════════
          WHY CHOOSE US — compact icon grid
      ═══════════════════════════════════════════════ */}
      <ScrollReveal as="section" className="section-lazy" style={{ background:'#fff', padding:'56px 0 48px' }}>
        <div style={{ maxWidth:'var(--container)', margin:'0 auto', padding:'0 20px' }}>
          <div className="why-split" style={{ display:'grid', gap:32, alignItems:'center' }}>
            {/* Left: copy */}
            <div>
              <span className="section-tag">What sets us apart</span>
              <h2 className="section-title">What every yatra<br/>with us includes</h2>
              <p className="section-subtitle">
                Fifteen years of running the same circuit teaches you what actually matters
                at 3,500 metres. These aren&apos;t add-ons — they&apos;re standard.
              </p>
              <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(min(100%,240px),1fr))', gap:12 }}>
                {[
                  {icon:'ticket',   t:'VIP Darshan',      d:'Skip-the-line arrangements at all 4 dhams'},
                  {icon:'compass',  t:'Garhwali Guides',  d:'Local guides with 10+ years on these routes'},
                  {icon:'medical',  t:'Medical Support',  d:'Oxygen cylinders and first aid in every vehicle'},
                  {icon:'receipt',  t:'One Clear Price',  d:'Line-by-line quote — green tax and parking included'},
                  {icon:'meal',     t:'Sattvic Meals',    d:'Pure veg throughout; Jain meals on request'},
                  {icon:'headset',  t:'24/7 Support',     d:'A person, not a bot — WhatsApp and phone'},
                ].map(w => (
                  <div key={w.t} style={{ display:'flex', gap:10, alignItems:'flex-start', padding:'14px', background:'var(--bg)', borderRadius:'var(--r)', border:'1px solid var(--border)' }}>
                    <div style={{ width:36, height:36, borderRadius:9, background:'var(--navy-light)', color:'var(--navy)', display:'flex', alignItems:'center', justifyContent:'center', flexShrink:0 }}><Icon name={w.icon} size={18}/></div>
                    <div>
                      <div style={{ fontWeight:700, fontSize:13, color:'var(--text)' }}>{w.t}</div>
                      <div style={{ fontSize:12, color:'var(--text-mid)', marginTop:2, lineHeight:1.5 }}>{w.d}</div>
                    </div>
                  </div>
                ))}
              </div>
              <div style={{ marginTop:24 }}>
                <Link href="/packages" className="btn btn-primary" style={{ display:'inline-flex', alignItems:'center', gap:8 }}>
                  See the 2026 packages <Icon name="arrowRight" size={14}/>
                </Link>
              </div>
            </div>
            {/* Right: image block — swap for the operator's own fleet/route
                photography when available. No duplicate stat overlay: the
                page's numbers live in the trust band, once. */}
            <div className="why-split-image" style={{ position:'relative', borderRadius:'var(--r-xl)', overflow:'hidden', height:480 }}>
              <div style={{
                position:'absolute', inset:0,
                backgroundImage:'url(https://images.pexels.com/photos/15031440/pexels-photo-15031440.jpeg?auto=compress&cs=tinysrgb&w=800)',
                backgroundSize:'cover', backgroundPosition:'center',
              }}/>
              <div style={{ position:'absolute', inset:0, background:'linear-gradient(to top, rgba(15,43,91,0.7) 0%, transparent 45%)' }}/>
              <div style={{ position:'absolute', bottom:20, left:20, right:20, color:'#fff' }}>
                <div style={{ fontFamily:'var(--font-display)', fontSize:17, fontWeight:600, lineHeight:1.4 }}>Kedarnath, 3,583m</div>
                <div style={{ fontSize:12.5, color:'rgba(255,255,255,0.8)', marginTop:3 }}>The final darshan of the circuit — and the reason every checklist exists.</div>
              </div>
            </div>
          </div>
        </div>
      </ScrollReveal>

      {/* ═══════════════════════════════════════════════
          FOUNDER STORY
      ═══════════════════════════════════════════════ */}
      <ScrollReveal as="section" className="section-lazy" style={{ background:'var(--bg)', padding:'56px 0' }}>
        <div style={{ maxWidth:'var(--container)', margin:'0 auto', padding:'0 20px' }}>
          <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(min(100%,280px),1fr))', gap:40, alignItems:'center' }} className="founder-grid">
            {/* Left: story */}
            <div>
              <span className="section-tag">The people behind your yatra</span>
              <h2 className="section-title" style={{ marginBottom:16 }}>
                Founded by a <em>Retired Army Officer</em>
              </h2>
              <p style={{ fontSize:15.5, color:'#334155', lineHeight:1.9, marginBottom:16 }}>
                In 2010, Dhanesh Chandra Mishra — a retired officer of the Indian Army — started Shiv Ganga Travels with a single vehicle and one conviction: that pilgrims deserved to be treated with the same care and discipline that the Army demands of every mission.
              </p>
              <p style={{ fontSize:15.5, color:'#334155', lineHeight:1.9, marginBottom:16 }}>
                He'd seen what happened when families entrusted their sacred journey to operators who prioritised profit over safety. Overloaded vehicles. Substandard hotels. Missing guides. Stranded pilgrims at 3,500 metres. He decided to do it differently.
              </p>
              <p style={{ fontSize:15.5, color:'#334155', lineHeight:1.9, marginBottom:24 }}>
                Fifteen years later, Shiv Ganga Travels has carried over 50,000 pilgrims across every season. Every vehicle is maintained to Army safety standards. Every driver is trained for high-altitude emergencies. Every rupee is accounted for before you pay.
              </p>
              <div style={{ display:'flex', flexDirection:'column', gap:10, marginBottom:28 }}>
                {[
                  { icon:'medal',       t:'Military discipline',    d:'Punctuality, safety protocols, and accountability on every trip' },
                  { icon:'shieldCheck', t:'Safety as a practice',   d:'Hill-trained drivers, oxygen on board, and a vehicle check before every departure' },
                  { icon:'receipt',     t:'Full cost transparency', d:'Every package includes a line-by-line cost breakdown before you book' },
                ].map(f => (
                  <div key={f.t} style={{ display:'flex', gap:12, alignItems:'flex-start', padding:'12px 14px', background:'#fff', borderRadius:10, border:'1px solid var(--border)' }}>
                    <div style={{ width:34, height:34, borderRadius:8, background:'var(--navy-light)', color:'var(--navy)', display:'flex', alignItems:'center', justifyContent:'center', flexShrink:0 }}><Icon name={f.icon} size={17}/></div>
                    <div>
                      <div style={{ fontWeight:700, fontSize:13.5, color:'var(--navy)' }}>{f.t}</div>
                      <div style={{ fontSize:12.5, color:'var(--text-muted)', marginTop:2, lineHeight:1.5 }}>{f.d}</div>
                    </div>
                  </div>
                ))}
              </div>
              <Link href="/about" className="btn btn-outline" style={{ display:'inline-flex', alignItems:'center', gap:8 }}>
                Read our full story <Icon name="arrowRight" size={14}/>
              </Link>
            </div>
            {/* Right: founder card */}
            <div style={{ display:'flex', flexDirection:'column', gap:16 }}>
              <div style={{ background:'var(--navy)', borderRadius:20, padding:'28px 24px', color:'#fff', position:'relative', overflow:'hidden' }}>
                <div style={{ position:'absolute', top:-30, right:-30, width:120, height:120, borderRadius:'50%', background:'rgba(232,146,10,0.15)' }}/>
                <div style={{ position:'absolute', bottom:-20, left:-20, width:90, height:90, borderRadius:'50%', background:'rgba(11,123,139,0.2)' }}/>
                <div style={{ position:'relative', zIndex:1 }}>
                  {/* TODO: replace initials with a real portrait of the founder —
                      the single highest-value trust asset this site can add.
                      <img src="/founder.jpg" alt="Dhanesh Chandra Mishra" .../> */}
                  <div style={{ width:56, height:56, borderRadius:'50%', background:'var(--gold)', display:'flex', alignItems:'center', justifyContent:'center', fontSize:22, fontWeight:800, color:' var(--navy)', marginBottom:14 }}>DM</div>
                  <div style={{ fontFamily:'var(--font-display)', fontSize:'1.2rem', fontWeight:600, color:'#fff', marginBottom:4 }}>Dhanesh Chandra Mishra</div>
                  <div style={{ fontSize:12.5, color:'rgba(255,255,255,0.65)', marginBottom:20 }}>Founder & Director · Retired Indian Army Officer</div>
                  <blockquote style={{ borderLeft:'3px solid var(--gold)', paddingLeft:16, margin:0, fontStyle:'italic', fontSize:14.5, color:'rgba(255,255,255,0.85)', lineHeight:1.7 }}>
                    "Every pilgrim who boards one of our vehicles carries faith, family, and often a lifelong dream. I treat that responsibility the same way I treated my duty in the Army — with total commitment and zero compromise."
                  </blockquote>
                </div>
              </div>
              {/* Trust badges row */}
              <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(min(100%,280px),1fr))', gap:10 }}>
                {[
                  { v:'Est. 2010', l:'15 years running' },
                  { v:'20+ Vehicles', l:'Fleet owned outright' },
                ].map(s => (
                  <div key={s.l} style={{ background:'#fff', border:'1px solid var(--border)', borderRadius:10, padding:'12px 14px', textAlign:'center' }}>
                    <div style={{ fontWeight:800, fontSize:17, color:'var(--navy)' }}>{s.v}</div>
                    <div style={{ fontSize:11.5, color:'var(--text-muted)', marginTop:2 }}>{s.l}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </ScrollReveal>

      {/* ═══════════════════════════════════════════════
          JOURNEY STEPS
      ═══════════════════════════════════════════════ */}
      <ScrollReveal as="section" className="section-lazy" style={{ background:'#fff', padding:'56px 0' }}>
        <div style={{ maxWidth:'var(--container)', margin:'0 auto', padding:'0 20px' }}>
          <div style={{ textAlign:'center', marginBottom:36 }}>
            <span className="section-tag">Simple & clear</span>
            <h2 className="section-title">Booking takes four steps</h2>
            <p className="section-subtitle" style={{ margin:'0 auto' }}>
              Only a 25% advance confirms your seats — the balance is due after you arrive in Haridwar.
            </p>
          </div>
          <div className="steps-grid" style={{ display:'grid', gridTemplateColumns:'repeat(4,1fr)', gap:20, maxWidth:1040, margin:'0 auto' }}>
            {[
              {n:'01', icon:'chat',      t:'Enquire',   d:'Call or WhatsApp us. Tell us your dates and group size.'},
              {n:'02', icon:'clipboard', t:'Customise', d:'Review the itinerary. We adjust to your preferences.'},
              {n:'03', icon:'receipt',   t:'Confirm',   d:'Pay 25% advance. Receive your kit & registration.'},
              {n:'04', icon:'pray',      t:'Depart',    d:'Pickup at Haridwar, and you are on the road.'},
            ].map((s,i,a)=>(
              <div key={s.n} style={{ position:'relative', textAlign:'center', padding:'0 8px' }}>
                {i < a.length-1 && (
                  <div className="step-connector" style={{ position:'absolute', top:26, left:'calc(50% + 34px)', right:'calc(-50% + 34px)', height:2, background:'var(--border)', zIndex:0 }} aria-hidden="true"/>
                )}
                <div style={{ position:'relative', zIndex:1 }}>
                  <div style={{ width:52, height:52, margin:'0 auto 12px', borderRadius:'50%', background:'var(--navy)', color:'#fff', display:'flex', alignItems:'center', justifyContent:'center' }}><Icon name={s.icon} size={22}/></div>
                  <div style={{ fontSize:11, fontWeight:700, color:'var(--text-muted)', letterSpacing:'0.12em', marginBottom:4 }}>STEP {s.n}</div>
                  <h3 style={{ fontSize:15.5, fontWeight:700, color:'var(--text)', marginBottom:6 }}>{s.t}</h3>
                  <p style={{ fontSize:13, color:'var(--text-mid)', lineHeight:1.6 }}>{s.d}</p>
                </div>
              </div>
            ))}
          </div>
          <div style={{ textAlign:'center', marginTop:32 }}>
            <a href={`https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent('Namaste! I want to start planning Char Dham Yatra 2026.')}`}
              target="_blank" rel="nofollow noopener noreferrer"
              style={{ display:'inline-flex', alignItems:'center', gap:8, background:'#25D366', color:'#fff', padding:'12px 26px', borderRadius:10, fontWeight:700, fontSize:14, textDecoration:'none' }}>
              <WhatsAppIcon size={15}/> Start step one on WhatsApp
            </a>
          </div>
        </div>
      </ScrollReveal>

      {/* ═══════════════════════════════════════════════
          TESTIMONIALS
      ═══════════════════════════════════════════════ */}

      {/* ═══ CONTENT FUNNEL ═══ */}
      <ScrollReveal as="section" className="section-lazy" style={{ background:'var(--bg)', padding:'52px 0' }}>
        <div style={{ maxWidth:'var(--container)', margin:'0 auto', padding:'0 20px' }}>
          <div style={{ textAlign:'center', marginBottom:32 }}>
            <span className="section-tag">Plan Your Perfect Yatra</span>
            <h2 className="section-title">Not Sure Where to Start? <em>We&apos;ll Guide You</em></h2>
          </div>
          <div className='funnel-grid' style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(240px,1fr))', gap:20 }}>
            <div style={{ background:'var(--navy-light)', borderRadius:16, padding:'24px', border:'1px solid rgba(15,43,91,0.1)' }}>
              <div style={{ display:'flex', alignItems:'center', gap:10, marginBottom:16 }}>
                <div style={{ width:36, height:36, background:'var(--navy)', borderRadius:'50%', display:'flex', alignItems:'center', justifyContent:'center', color:'#fff', fontWeight:800, fontSize:16 }}>1</div>
                <div style={{ fontWeight:700, fontSize:15, color:'var(--navy)' }}>Learn &amp; Plan</div>
              </div>
              <p style={{ fontSize:13.5, color:'var(--text-mid)', lineHeight:1.65, marginBottom:16 }}>New to Char Dham Yatra? Understand the route, best time, costs, and what to expect before booking.</p>
              <div style={{ display:'flex', flexDirection:'column', gap:7 }}>
                {[
                  {label:'Complete Yatra Guide',href:'/char-dham-yatra'},
                  {label:'Best Time to Visit',href:'/blog/best-time-char-dham'},
                  {label:'What Does It Cost?',href:'/blog/char-dham-yatra-cost'},
                  {label:'What to Pack',href:'/blog/char-dham-yatra-packing-list'},
                ].map(l=>(
                  <Link key={l.href} href={l.href} style={{ fontSize:13, color:'var(--navy)', textDecoration:'none', padding:'7px 10px', background:'#fff', borderRadius:8, fontWeight:500, display:'flex', justifyContent:'space-between', border:'1px solid var(--border)' }}>
                    <span>{l.label}</span><span style={{ color:'var(--gold)' }}>→</span>
                  </Link>
                ))}
              </div>
            </div>
            <div style={{ background:'linear-gradient(135deg,var(--navy),var(--navy-mid))', borderRadius:16, padding:'24px' }}>
              <div style={{ display:'flex', alignItems:'center', gap:10, marginBottom:16 }}>
                <div style={{ width:36, height:36, background:'var(--gold)', borderRadius:'50%', display:'flex', alignItems:'center', justifyContent:'center', color:'#fff', fontWeight:800, fontSize:16 }}>2</div>
                <div style={{ fontWeight:700, fontSize:15, color:'#fff' }}>Choose Your Yatra</div>
              </div>
              <p style={{ fontSize:13.5, color:'rgba(255,255,255,0.75)', lineHeight:1.65, marginBottom:16 }}>Browse by dham type, duration, or budget. Full day-wise itinerary on every package page.</p>
              <div style={{ display:'flex', flexDirection:'column', gap:7 }}>
                {[
                  {label:'Char Dham (All 4)',href:'/packages/char-dham'},
                  {label:'Do Dham (2 shrines)',href:'/do-dham-yatra'},
                  {label:'Kedarnath Only',href:'/kedarnath-yatra'},
                  {label:'Helicopter Package',href:'/char-dham-helicopter'},
                ].map(l=>(
                  <Link key={l.href} href={l.href} style={{ fontSize:13, color:'#fff', textDecoration:'none', padding:'7px 10px', background:'rgba(255,255,255,0.1)', borderRadius:8, fontWeight:500, display:'flex', justifyContent:'space-between', border:'1px solid rgba(255,255,255,0.15)' }}>
                    <span>{l.label}</span><span style={{ color:'#FFD166' }}>→</span>
                  </Link>
                ))}
              </div>
            </div>
            <div style={{ background:'linear-gradient(135deg,var(--teal),#0a6670)', borderRadius:16, padding:'24px' }}>
              <div style={{ display:'flex', alignItems:'center', gap:10, marginBottom:16 }}>
                <div style={{ width:36, height:36, background:'#fff', borderRadius:'50%', display:'flex', alignItems:'center', justifyContent:'center', color:'var(--teal)', fontWeight:800, fontSize:16 }}>3</div>
                <div style={{ fontWeight:700, fontSize:15, color:'#fff' }}>Book with Confidence</div>
              </div>
              <p style={{ fontSize:13.5, color:'rgba(255,255,255,0.8)', lineHeight:1.65, marginBottom:16 }}>Zero commission. Free itinerary in 2 hours. 50,000+ pilgrims trusted us since 2010.</p>
              <div style={{ display:'flex', flexDirection:'column', gap:10 }}>
                <a href={`https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent('Namaste! I want to plan Char Dham Yatra 2026.')}`}
                  target="_blank" rel="nofollow noopener noreferrer"
                  style={{ display:'flex', alignItems:'center', justifyContent:'center', gap:7, background:'#25D366', color:'#fff', padding:'11px 16px', borderRadius:9, fontWeight:700, fontSize:13.5, textDecoration:'none' }}>
                  <WhatsAppIcon size={14}/> Start on WhatsApp
                </a>
                <a href='tel:+917817996730'
                  style={{ display:'flex', alignItems:'center', justifyContent:'center', gap:7, background:'rgba(255,255,255,0.15)', color:'#fff', padding:'10px 16px', borderRadius:9, fontWeight:600, fontSize:13, textDecoration:'none', border:'1px solid rgba(255,255,255,0.25)' }}>
                  <Icon name="phone" size={13}/> {SITE.phone}
                </a>
              </div>
            </div>
          </div>
        </div>
      </ScrollReveal>

      <ScrollReveal as="section" className="section-lazy" style={{ background:'#fff', padding:'56px 0' }}>
        <div style={{ maxWidth:'var(--container)', margin:'0 auto', padding:'0 20px' }}>
          <div style={{ marginBottom:28, textAlign:'center' }}>
            <span className="section-tag">Real stories</span>
            <h2 className="section-title">What Our <em>Pilgrims</em> Say</h2>
            <p className="section-subtitle" style={{ margin:'0 auto' }}>
              Real Google reviews from pilgrims who trusted us with their sacred journey.
            </p>
          </div>
          <GoogleReviews/>
        </div>
      </ScrollReveal>


      {/* ═══════════════════════════════════════════════
          PLAN YOUR YATRA — curated tools & guides.
          The 60-link "All Resources" directory is gone:
          deep-scrolled visitors are the hottest traffic,
          and the full link mesh already lives in the
          footer for SEO. Six cards + one compact row.
      ═══════════════════════════════════════════════ */}
      <ScrollReveal as="section" className="section-lazy" style={{ background:'var(--bg)', padding:'56px 0' }}>
        <div style={{ maxWidth:'var(--container)', margin:'0 auto', padding:'0 20px' }}>
          <div style={{ textAlign:'center', marginBottom:32 }}>
            <span className="section-tag">Free planning tools</span>
            <h2 className="section-title">Plan your yatra properly</h2>
            <p className="section-subtitle" style={{ margin:'0 auto' }}>The guides and tools pilgrims use most, before they ever call us.</p>
          </div>
          <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fill,minmax(240px,1fr))', gap:12 }}>
            {[
              { icon:'calculator', title:'Yatra Cost Calculator', desc:'Instant personalised estimate for your group size and route', href:'/char-dham-yatra-cost-calculator' },
              { icon:'map',        title:'Route Map 2026',        desc:'All distances, altitudes and stops from Haridwar',            href:'/char-dham-yatra-route-map' },
              { icon:'calendar',   title:'Best Time to Visit',    desc:'Month-by-month weather across all four dhams',               href:'/blog/best-time-char-dham' },
              { icon:'clipboard',  title:'Registration Guide',    desc:'Biometric yatra registration, step by step',                 href:'/blog/char-dham-yatra-registration' },
              { icon:'megaphone',  title:'2026 New Rules',        desc:'Phone ban, age 55+ certificate, IRCTC helicopter',           href:'/blog/char-dham-yatra-2026-new-rules' },
              { icon:'backpack',   title:'Packing List',          desc:'Exactly what to carry — and what to leave behind',           href:'/blog/char-dham-yatra-packing-list' },
            ].map(l => (
              <Link key={l.href} href={l.href} className="pkg-card"
                style={{ background:'#fff', padding:'16px', borderRadius:12, border:'1px solid var(--border)', textDecoration:'none', display:'flex', gap:12, alignItems:'flex-start' }}>
                <span style={{ width:38, height:38, borderRadius:10, background:'var(--navy-light)', color:'var(--navy)', display:'flex', alignItems:'center', justifyContent:'center', flexShrink:0 }}>
                  <Icon name={l.icon} size={18}/>
                </span>
                <div>
                  <div style={{ fontWeight:700, fontSize:13.5, color:'var(--navy)', marginBottom:3 }}>{l.title}</div>
                  <div style={{ fontSize:12, color:'var(--text-muted)', lineHeight:1.5 }}>{l.desc}</div>
                </div>
              </Link>
            ))}
          </div>

          {/* Compact link rows — internal-link equity without the card walls */}
          <div style={{ marginTop:28, paddingTop:20, borderTop:'1px solid var(--border)', display:'flex', flexDirection:'column', gap:10 }}>
            <p style={{ fontSize:13, color:'var(--text-mid)', lineHeight:1.9, margin:0 }}>
              <strong style={{ color:'var(--navy)', fontWeight:700 }}>Starting from your city:</strong>{' '}
              {[
                ['Delhi','/char-dham-yatra-from-delhi'],['Mumbai','/char-dham-yatra-from-mumbai'],['Bangalore','/char-dham-yatra-from-bangalore'],
                ['Hyderabad','/char-dham-yatra-from-hyderabad'],['Chennai','/char-dham-yatra-from-chennai'],['Pune','/char-dham-yatra-from-pune'],
                ['Noida','/char-dham-yatra-from-noida'],['Chandigarh','/char-dham-yatra-from-chandigarh'],['Kolkata','/char-dham-yatra-from-kolkata'],
              ].map(([c,h],i,a)=>(
                <span key={h}><Link href={h} style={{ color:'var(--navy)', fontWeight:500 }}>{c}</Link>{i<a.length-1?' · ':''}</span>
              ))}
            </p>
            <p style={{ fontSize:13, color:'var(--text-mid)', lineHeight:1.9, margin:0 }}>
              <strong style={{ color:'var(--navy)', fontWeight:700 }}>Temple guides &amp; more:</strong>{' '}
              {[
                ['Kedarnath Temple','/kedarnath-temple'],['Badrinath Temple','/badrinath-temple'],['Online Puja Booking','/online-puja-booking'],
                ['Kedarnath Weather','/kedarnath-weather'],['Emergency Contacts','/char-dham-yatra-emergency-contacts'],['All Blog Posts','/blog'],
              ].map(([c,h],i,a)=>(
                <span key={h}><Link href={h} style={{ color:'var(--navy)', fontWeight:500 }}>{c}</Link>{i<a.length-1?' · ':''}</span>
              ))}
            </p>
          </div>
        </div>
      </ScrollReveal>

      {/* ═══════════════════════════════════════════════
          FAQ
      ═══════════════════════════════════════════════ */}
      <ScrollReveal as="section" className="section-lazy" style={{ background:'var(--bg)', padding:'56px 0' }}>
        <div style={{ maxWidth:800, margin:'0 auto', padding:'0 20px' }}>
          <div style={{ textAlign:'center', marginBottom:32 }}>
            <span className="section-tag">Have questions?</span>
            <h2 className="section-title">Everything You Need to <em>Know</em></h2>
            <p className="section-subtitle" style={{ margin:'0 auto' }}>Before booking your yatra — answered clearly.</p>
          </div>
          <FAQAccordion faqs={GLOBAL_FAQS}/>
          <div style={{ textAlign:'center', marginTop:24 }}>
            <a href={`https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent('Namaste! I have a question about Char Dham Yatra.')}`}
               target="_blank" rel="nofollow noopener noreferrer"
               className="btn btn-outline" style={{ display:'inline-flex', alignItems:'center', gap:7 }}>
              <WhatsAppIcon size={14}/> Still have questions? Ask on WhatsApp
            </a>
          </div>
        </div>
      </ScrollReveal>

      {/* ═══════════════════════════════════════════════
          FINAL CTA — full bleed navy
      ═══════════════════════════════════════════════ */}
      <section style={{ background:'var(--navy)', padding:'64px 20px', textAlign:'center', position:'relative', overflow:'hidden' }}>
        {/* Decorative circles */}
        <div style={{ position:'absolute', top:'-60px', right:'-60px', width:280, height:280, borderRadius:'50%', background:'rgba(232,146,10,0.08)', filter:'blur(50px)', pointerEvents:'none' }} aria-hidden="true"/>
        <div style={{ position:'absolute', bottom:'-80px', left:'8%', width:220, height:220, borderRadius:'50%', background:'rgba(11,123,139,0.15)', filter:'blur(40px)', pointerEvents:'none' }} aria-hidden="true"/>

        <div style={{ maxWidth:760, margin:'0 auto', position:'relative', zIndex:1 }}>
          {/* Real dates instead of unquantified "limited seats" scarcity */}
          <span style={{ background:'rgba(232,146,10,0.18)', color:'#FFD166', fontSize:11, fontWeight:600, letterSpacing:'0.14em', textTransform:'uppercase', padding:'5px 16px', borderRadius:100, display:'inline-block', marginBottom:20, border:'1px solid rgba(232,146,10,0.3)' }}>
            Season 2026 · Apr 19 – Nov 13
          </span>
          <h2 className="display-title" style={{ color:'#fff', fontSize:'clamp(1.6rem,5vw,2.8rem)', marginBottom:16 }}>
            Plan your 2026 yatra <em style={{ color:'#FFD166' }}>with the operator</em>
          </h2>
          <p style={{ color:'rgba(255,255,255,0.78)', fontSize:15, lineHeight:1.75, marginBottom:32, maxWidth:540, margin:'0 auto 32px' }}>
            Talk to the team that will actually run your journey. Free itinerary within
            2 hours — and only a 25% advance to confirm your dates.
          </p>
          <div style={{ display:'flex', justifyContent:'center', gap:12, flexWrap:'wrap', marginBottom:44 }}>
            <a href={`https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent('Namaste! I want to book Char Dham Yatra 2026.')}`} target="_blank" rel="nofollow noopener noreferrer"
               style={{ display:'inline-flex', alignItems:'center', gap:8, background:'#25D366', color:'#fff', padding:'14px 28px', borderRadius:'var(--r-sm)', fontWeight:700, fontSize:14, textDecoration:'none' }}>
              <WhatsAppIcon size={16}/> WhatsApp us now
            </a>
            <a href='tel:+917817996730' style={{ display:'inline-flex', alignItems:'center', gap:8, background:'transparent', color:'#fff', padding:'14px 28px', borderRadius:'var(--r-sm)', fontWeight:700, fontSize:14, textDecoration:'none', border:'1.5px solid rgba(255,255,255,0.5)' }}>
              <Icon name="phone" size={15}/> {SITE.phone}
            </a>
          </div>
          {/* Season-guide email capture — its own moment, its own value */}
          <div style={{ borderTop:'1px solid rgba(255,255,255,0.1)', paddingTop:32, maxWidth:480, margin:'0 auto' }}>
            <p style={{ color:'#fff', fontSize:14.5, fontWeight:600, marginBottom:6 }}>Not booking yet? Plan ahead by email.</p>
            <p style={{ color:'rgba(255,255,255,0.6)', fontSize:12.5, marginBottom:14, lineHeight:1.6 }}>
              Season dates, month-by-month weather, cost guidance and preparation checklists — a few emails a season, nothing more.
            </p>
            <form action={`https://wa.me/${SITE.whatsapp}`} target="_blank" style={{ display:'flex', gap:8, maxWidth:400, margin:'0 auto', flexWrap:'wrap' }}>
              <input type="email" placeholder="your@email.com" className="newsletter-input" required/>
              <button type="submit" className="btn btn-primary" style={{ flexShrink:0 }}>Send me the guide</button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
