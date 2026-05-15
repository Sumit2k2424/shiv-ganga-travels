import Link from 'next/link';
import dynamic from 'next/dynamic';
import { PACKAGES, SITE, GLOBAL_FAQS, TRUST, getFeaturedPackages } from '@/data/packages';
import HeroSection from '@/components/HeroSection';
import ScrollReveal from '@/components/ScrollReveal';
import FAQAccordion from '@/components/FAQAccordion';

// ── Lazy-load below-the-fold interactive components ──────────────────────────
// These are NOT needed for LCP (first visible content). Loading them lazily
// removes them from the critical JS bundle, directly improving:
//   • LCP  — hero renders without waiting for these
//   • TBT  — main thread not blocked by AutoScrollRow × 3 + GoogleReviews
//   • TTI  — page becomes interactive faster on mobile 3G/4G

// HeroSearch — small but interactive; defer 1 tick so hero text paints first
const HeroSearch = dynamic(() => import('@/components/HeroSearch'), {
  ssr: false,
  loading: () => (
    <div style={{ height:160, background:'rgba(255,255,255,0.06)', borderRadius:16 }}/>
  ),
});

// CounterStat — pure visual, no interaction needed before scroll
const CounterStat = dynamic(() => import('@/components/CounterStat'), {
  ssr: true, // keep SSR so Googlebot sees real values
});

// GoogleReviews — fetches API on mount; load only when near viewport
const GoogleReviews = dynamic(() => import('@/components/GoogleReviews'), {
  ssr: false,
  loading: () => (
    <div style={{ height:300, display:'flex', alignItems:'center', justifyContent:'center', color:'rgba(255,255,255,0.4)', fontSize:14 }}>
      Loading reviews…
    </div>
  ),
});

// AutoScrollRow — runs JS timers; 3 instances on page. Load after hydration
const AutoScrollRow = dynamic(() => import('@/components/AutoScrollRow'), {
  ssr: false,
  loading: () => <div style={{ height:240, overflowX:'hidden' }}/>,
});

export const metadata = {
  title: `Shiv Ganga Travels — Char Dham Yatra Packages 2026 from Haridwar | Est. 2010`,
  description: 'Char Dham Yatra 2026 packages from Haridwar. Direct operator, zero commission. From ₹19,500. Kedarnath, Badrinath, Gangotri, Yamunotri. 50,000+ served.',
  keywords: ['char dham yatra 2026','char dham yatra haridwar','kedarnath yatra package','char dham yatra package from haridwar','do dham yatra','char dham helicopter package','shiv ganga travels haridwar'],
  openGraph: {
    title: 'Shiv Ganga Travels — Char Dham Yatra 2026 from Haridwar',
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
  const agency = { '@context':'https://schema.org','@type':'TravelAgency', name:SITE.name, url:SITE.baseUrl, telephone:SITE.phone, email:SITE.email, address:{'@type':'PostalAddress',streetAddress:'Saptrishi Road, Near Shantikunj Gate No. 1, Bhupatwala',addressLocality:'Haridwar',addressRegion:'Uttarakhand',postalCode:'249410',addressCountry:'IN'}, foundingDate:String(SITE.established), aggregateRating:{'@type':'AggregateRating',ratingValue:4.9,reviewCount:850,bestRating:5}, priceRange:'₹₹' };
  const faqSchema = { '@context':'https://schema.org','@type':'FAQPage', mainEntity: GLOBAL_FAQS.map(f => ({'@type':'Question',name:f.q,acceptedAnswer:{'@type':'Answer',text:f.a}})) };
  return (<><script type="application/ld+json" dangerouslySetInnerHTML={{ __html:JSON.stringify(agency) }}/><script type="application/ld+json" dangerouslySetInnerHTML={{ __html:JSON.stringify(faqSchema) }}/></>);
}

/* ─── Inline compact card ─── */
function PkgCard({ pkg }) {
  const savings = pkg.price.original - pkg.price.discounted;
  const fallBg = { 'char-dham':'linear-gradient(160deg,#0F2B5B,#0B7B8B)', 'do-dham':'linear-gradient(160deg,#0B2C44,#16A993)', 'single-dham':'linear-gradient(160deg,#1A0E3B,#4C3A9E)' };
  return (
    <Link href={`/packages/${pkg.slug}`} className="pkg-card"
      style={{ display:'flex', flexDirection:'column', minWidth:240, maxWidth:280, flex:'0 0 260px', textDecoration:'none', color:'inherit' }}>
      {/* Image */}
      <div style={{ height:168, position:'relative', overflow:'hidden', flexShrink:0 }}>
        <div className="card-img" style={{
          position:'absolute', inset:0,
          backgroundImage: pkg.photo
            ? `linear-gradient(180deg,rgba(15,43,91,0.08) 0%,rgba(15,43,91,0.72) 100%), url('${pkg.photo}')`
            : (fallBg[pkg.category] || fallBg['char-dham']),
          backgroundSize:'cover', backgroundPosition:'center',
        }}/>
        {pkg.badge && <span className="badge badge-gold" style={{ position:'absolute', top:10, left:10, zIndex:2 }}>{pkg.badge}</span>}
        <span style={{ position:'absolute', top:10, right:10, background:'rgba(0,0,0,0.5)', backdropFilter:'blur(4px)', color:'#fff', fontSize:10.5, fontWeight:600, padding:'3px 9px', borderRadius:6, zIndex:2 }}>{pkg.duration.nights}N</span>
        <div style={{ position:'absolute', bottom:0, left:0, right:0, padding:'10px 14px', zIndex:2 }}>
          <h3 style={{ color:'#fff', fontWeight:700, fontSize:13.5, lineHeight:1.3, textShadow:'0 1px 4px rgba(0,0,0,0.6)' }}>{pkg.name}</h3>
        </div>
      </div>
      {/* Body */}
      <div style={{ padding:'14px', flex:1, display:'flex', flexDirection:'column', gap:10 }}>
        <div style={{ display:'flex', gap:6, flexWrap:'wrap' }}>
          <span className="chip">📍{pkg.startCity}</span>
          <span className="chip">🚌{pkg.transport}</span>
        </div>
        <div style={{ display:'flex', alignItems:'flex-end', justifyContent:'space-between', marginTop:'auto' }}>
          <div>
            <div style={{ fontSize:11, color:'var(--text-muted)', textDecoration:'line-through' }}>₹{pkg.price.original.toLocaleString('en-IN')}</div>
            <div style={{ fontWeight:800, fontSize:20, color:'var(--navy)', lineHeight:1, letterSpacing:'-0.03em', fontFamily:'var(--font-display)' }}>₹{pkg.price.discounted.toLocaleString('en-IN')}</div>
            {savings>0 && <div style={{ fontSize:10.5, color:'var(--green)', fontWeight:600, marginTop:1 }}>Save ₹{savings.toLocaleString('en-IN')}</div>}
          </div>
          <span className="btn btn-primary" style={{ fontSize:11.5, padding:'7px 14px' }}>Book →</span>
        </div>
      </div>
    </Link>
  );
}

/* ─── Dham destination tile ─── */
function DhamTile({ name, emoji, href, sub }) {
  return (
    <Link href={href} className="dham-tile">
      <div className="dham-circle">{emoji}</div>
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
          STATS BAR — animated counters
      ═══════════════════════════════════════════════ */}
      <div style={{ background:'var(--navy)' }}>
        <div style={{ maxWidth:'var(--container)', margin:'0 auto', display:'flex', flexWrap:'wrap' }}>
          {TRUST.stats.map((s,i) => (
            <CounterStat key={s.label} {...s} border={i < TRUST.stats.length-1}/>
          ))}
        </div>
      </div>

      {/* ═══════════════════════════════════════════════
          TRUST BADGE STRIP
      ═══════════════════════════════════════════════ */}
      <div style={{ background:'#fff', borderBottom:'1px solid var(--border)', padding:'14px 20px' }}>
        <div style={{ maxWidth:'var(--container)', margin:'0 auto', display:'flex', alignItems:'center', justifyContent:'center', gap:0, flexWrap:'wrap' }}>
          {[
            { icon:'🏅', label:'IATA Approved', sub:'Tour Operator' },
            { icon:'🏛️', label:'Uttarakhand Tourism', sub:'Registered' },
            { icon:'⚔️', label:'Founded by', sub:'Retd. Army Officer' },
            { icon:'📅', label:'Est. 2010', sub:'15 Years' },
            { icon:'🙏', label:'50,000+ Pilgrims', sub:'Served' },
            { icon:'🚫', label:'Zero Commission', sub:'Direct Operator' },
          ].map((b,i,a) => (
            <div key={b.label} style={{
              display:'flex', alignItems:'center', gap:10,
              padding:'8px 20px',
              borderRight: i < a.length-1 ? '1px solid var(--border)' : 'none',
              flexShrink:0,
            }}>
              <span style={{ fontSize:20 }}>{b.icon}</span>
              <div>
                <div style={{ fontWeight:700, fontSize:12.5, color:'var(--navy)', lineHeight:1.2 }}>{b.label}</div>
                <div style={{ fontSize:11, color:'var(--text-muted)' }}>{b.sub}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ═══════════════════════════════════════════════
          INTENT SELECTOR — "What are you looking for?"
          Psychology: removes decision paralysis, guides
          pilgrim to right package instantly (Hick's Law)
      ═══════════════════════════════════════════════ */}
      <section style={{ background:'#fff', padding:'36px 20px 28px', borderBottom:'1px solid var(--border)' }}>
        <div style={{ maxWidth:'var(--container)', margin:'0 auto' }}>
          <div style={{ textAlign:'center', marginBottom:20 }}>
            <p style={{ fontSize:13, fontWeight:700, color:'var(--text-muted)', textTransform:'uppercase', letterSpacing:'0.12em', marginBottom:6 }}>Find Your Yatra in 3 Seconds</p>
            <h2 style={{ fontFamily:'var(--font-display)', fontSize:'clamp(1.3rem,3vw,1.7rem)', fontWeight:600, color:'var(--navy)', margin:0, letterSpacing:'-0.02em' }}>
              What are you looking for?
            </h2>
          </div>
          <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(min(200px,100%),1fr))', gap:12 }}>
            {[
              {
                emoji:'🏔️', title:'Char Dham Yatra',
                desc:'All 4 sacred dhams — Yamunotri, Gangotri, Kedarnath, Badrinath',
                tag:'Most popular', tagColor:'#16A34A', tagBg:'#F0FDF4',
                from:'₹19,500', href:'/char-dham-yatra',
                accent:'var(--navy)',
              },
              {
                emoji:'🕌', title:'Kedarnath Yatra',
                desc:'3 nights 4 days — Lord Shiva\'s abode at 3,583m',
                tag:'Fastest booking', tagColor:'var(--teal)', tagBg:'#E6F7F9',
                from:'₹6,499', href:'/kedarnath-yatra',
                accent:'var(--teal)',
              },
              {
                emoji:'🚁', title:'Helicopter Package',
                desc:'All 4 dhams in 6 days — for seniors & VIP darshan',
                tag:'Premium', tagColor:'#B45309', tagBg:'#FEF3E2',
                from:'₹85,000', href:'/char-dham-helicopter',
                accent:'#B45309',
              },
              {
                emoji:'🚙', title:'Just the Cab',
                desc:'Vehicle only — Innova, Ertiga, Tempo from Haridwar',
                tag:'Cab only', tagColor:'#6D28D9', tagBg:'#F5F3FF',
                from:'₹5,500', href:'/char-dham-yatra-cab-booking',
                accent:'#6D28D9',
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
                  <span style={{ fontSize:28 }}>{card.emoji}</span>
                  <span style={{ fontSize:10.5, fontWeight:700, color:card.tagColor, background:card.tagBg, padding:'3px 10px', borderRadius:100 }}>{card.tag}</span>
                </div>
                <div>
                  <div style={{ fontWeight:700, fontSize:15, color:'var(--navy)', marginBottom:4 }}>{card.title}</div>
                  <div style={{ fontSize:12.5, color:'var(--text-muted)', lineHeight:1.5 }}>{card.desc}</div>
                </div>
                <div style={{ display:'flex', alignItems:'center', justifyContent:'space-between', marginTop:'auto' }}>
                  <div style={{ fontSize:12, color:'var(--text-muted)' }}>
                    From <span style={{ fontWeight:800, fontSize:16, color:'var(--navy)', fontFamily:'var(--font-display)' }}>{card.from}</span>
                  </div>
                  <span style={{ fontSize:12, fontWeight:600, color:card.accent }}>Explore →</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          CAB SECTION HERO
      ═══════════════════════════════════════════════ */}
      <section style={{ background:'linear-gradient(135deg,#1a1a2e 0%,#16213e 50%,#0f3460 100%)', padding:'52px 20px' }}>
        <div style={{ maxWidth:'var(--container)', margin:'0 auto' }}>
          <div className='cab-hero-grid' style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(min(100%,280px),1fr))', gap:40, alignItems:'center' }}>

            {/* Left — text */}
            <div>
              <span style={{ background:'rgba(232,146,10,0.2)', color:'#FFD166', fontSize:11, fontWeight:700, letterSpacing:'0.14em', textTransform:'uppercase', padding:'5px 16px', borderRadius:100, display:'inline-block', marginBottom:18 }}>
                🚙 Char Dham Cab Service
              </span>
              <h2 style={{ fontFamily:'var(--font-display)', fontSize:'clamp(1.6rem,3.5vw,2.4rem)', fontWeight:600, color:'#fff', lineHeight:1.15, marginBottom:14, letterSpacing:'-0.03em' }}>
                AC Cab for Char Dham Yatra —<br/>
                <em style={{ color:'#FFD166', fontStyle:'italic' }}>Innova · Tempo · Ertiga</em>
              </h2>
              <p style={{ fontSize:15, color:'rgba(255,255,255,0.72)', lineHeight:1.75, marginBottom:24 }}>
                Haridwar–Kedarnath–Badrinath–Gangotri–Yamunotri and back. Experienced hill drivers, fixed rates, no hidden charges. Available standalone or as part of any package.
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
                    <div style={{ fontSize:11, color:'rgba(255,255,255,0.5)', marginTop:1 }}>{c.s} · {c.p}</div>
                  </div>
                ))}
              </div>

              <div style={{ display:'flex', gap:10, flexWrap:'wrap' }}>
                <a href={`https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent('Namaste! I want to book a cab for Char Dham Yatra 2026. Please share rates.')}`}
                  target="_blank" rel="nofollow noopener noreferrer"
                  style={{ background:'#25D366', color:'#fff', padding:'12px 24px', borderRadius:9, fontWeight:700, fontSize:14, textDecoration:'none' }}>
                  💬 Book Cab on WhatsApp
                </a>
                <Link href="/char-dham-yatra-cab-booking"
                  style={{ background:'rgba(255,255,255,0.1)', color:'#fff', padding:'12px 24px', borderRadius:9, fontWeight:600, fontSize:14, textDecoration:'none', border:'1px solid rgba(255,255,255,0.2)' }}>
                  View All Vehicles →
                </Link>
              </div>
            </div>

            {/* Right — route cards */}
            <div style={{ display:'flex', flexDirection:'column', gap:10 }}>
              <div style={{ fontSize:11, fontWeight:700, color:'rgba(255,255,255,0.4)', textTransform:'uppercase', letterSpacing:'0.12em', marginBottom:4 }}>Popular Routes</div>
              {[
                { from:'Haridwar', to:'Kedarnath', dist:'225 km', time:'6–7 hrs', fare:'₹5,500+', href:'/haridwar-to-kedarnath-cab' },
                { from:'Haridwar', to:'Badrinath', dist:'320 km', time:'8–9 hrs', fare:'₹7,000+', href:'/haridwar-to-badrinath-cab' },
                { from:'Haridwar', to:'Gangotri',  dist:'265 km', time:'7–8 hrs', fare:'₹6,500+', href:'/haridwar-to-gangotri-cab' },
                { from:'Delhi',    to:'Haridwar',  dist:'210 km', time:'4–5 hrs', fare:'₹3,500+', href:'/delhi-to-haridwar-cab' },
              ].map(r => (
                <Link key={r.href} href={r.href}
                  style={{ display:'grid', gridTemplateColumns:'1fr auto', alignItems:'center', gap:12, padding:'13px 16px', background:'rgba(255,255,255,0.06)', borderRadius:11, border:'1px solid rgba(255,255,255,0.1)', textDecoration:'none', transition:'background .15s' }}>
                  <div>
                    <div style={{ fontSize:13.5, fontWeight:700, color:'#fff' }}>{r.from} → {r.to}</div>
                    <div style={{ fontSize:12, color:'rgba(255,255,255,0.5)', marginTop:2 }}>{r.dist} · {r.time}</div>
                  </div>
                  <div style={{ textAlign:'right' }}>
                    <div style={{ fontSize:14, fontWeight:800, color:'#FFD166' }}>{r.fare}</div>
                    <div style={{ fontSize:10.5, color:'rgba(255,255,255,0.4)', marginTop:1 }}>Innova one-way</div>
                  </div>
                </Link>
              ))}
              <Link href="/char-dham-yatra-cab-booking"
                style={{ textAlign:'center', fontSize:12.5, color:'rgba(255,255,255,0.5)', textDecoration:'none', padding:'10px', borderRadius:9, border:'1px dashed rgba(255,255,255,0.15)', marginTop:2 }}>
                View all cab options + group rates →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          ZERO COMMISSION STRIP
      ═══════════════════════════════════════════════ */}
      <div style={{ background:'#fff', borderBottom:'1px solid var(--border)' }}>
        <div style={{ maxWidth:'var(--container)', margin:'0 auto' }}>
          <div className="zero-comm-strip" style={{ display:'flex', alignItems:'stretch', minHeight:76 }}>
            {/* Dark label */}
            <div className="zero-comm-label" style={{ background:'var(--navy)', padding:'16px 28px', display:'flex', alignItems:'center', gap:14, flexShrink:0 }}>
              <span style={{ fontSize:28 }}>🛡️</span>
              <div>
                <div style={{ color:'var(--gold)', fontWeight:700, fontSize:15, letterSpacing:'-0.01em', fontFamily:'var(--font-display)', fontStyle:'italic' }}>
                  Zero Commission
                </div>
                <div style={{ color:'rgba(255,255,255,0.55)', fontSize:10.5, textTransform:'uppercase', letterSpacing:'0.1em', marginTop:2 }}>
                  No middleman. No markup.
                </div>
              </div>
            </div>
            {/* Arrow — desktop only */}
            <div className="zero-comm-arrow" style={{ width:0, height:0, borderTop:'38px solid transparent', borderBottom:'38px solid transparent', borderLeft:'20px solid var(--navy)', flexShrink:0 }} aria-hidden="true"/>
            {/* Chips */}
            <div className="zero-comm-chips" style={{ flex:1, display:'flex', alignItems:'center', gap:0 }}>
              {[
                {icon:'💸',text:'Pay us directly',sub:'No agency fees'},
                {icon:'🤝',text:'We ARE the operator',sub:'15-year family business'},
                {icon:'📋',text:'Full price breakdown',sub:'Before you book'},
                {icon:'💰',text:'Price match guarantee',sub:'Beat any genuine quote'},
              ].map((c,i)=>(
                <div className="zero-comm-chip" key={c.text} style={{ display:'flex', alignItems:'center', gap:10, padding:'0 22px', borderRight:i<3?'1px solid var(--border)':'none', flexShrink:0, height:'100%' }}>
                  <span style={{ fontSize:20 }}>{c.icon}</span>
                  <div>
                    <div style={{ fontWeight:600, fontSize:12.5, color:'var(--text)', whiteSpace:'nowrap' }}>{c.text}</div>
                    <div style={{ fontSize:11, color:'var(--text-muted)', whiteSpace:'nowrap' }}>{c.sub}</div>
                  </div>
                </div>
              ))}
            </div>
            {/* Phone */}
            <div className="zero-comm-phone" style={{ flexShrink:0, padding:'0 22px', borderLeft:'1px solid var(--border)', display:'flex', alignItems:'center' }}>
              <a href='tel:+917017082807' style={{ display:'flex', flexDirection:'column', alignItems:'center', gap:2, textDecoration:'none' }}>
                <span style={{ fontSize:18 }}>📞</span>
                <span style={{ fontWeight:700, fontSize:12.5, color:'var(--navy)', whiteSpace:'nowrap' }}>+91-7017082807</span>
                <span style={{ fontSize:10, color:'var(--text-muted)' }}>Call direct</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* ═══════════════════════════════════════════════
          4 DHAMS — tile grid
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
            <DhamTile name="Yamunotri"    emoji="🌊" href="/packages/yamunotri-yatra-package-2n-3d-haridwar" sub="3,291m · Goddess Yamuna"/>
            <DhamTile name="Gangotri"     emoji="🌿" href="/packages/gangotri-yatra-package-2n-3d-haridwar"  sub="3,415m · Mother Ganga"/>
            <DhamTile name="Kedarnath"    emoji="🏔️" href="/packages/kedarnath-yatra-package-3n-4d-haridwar" sub="3,583m · Lord Shiva"/>
            <DhamTile name="Badrinath"    emoji="🕌" href="/packages/badrinath-yatra-package-2n-3d-haridwar" sub="3,133m · Lord Vishnu"/>
            <DhamTile name="Helicopter"   emoji="🚁" href="/packages/char-dham-yatra-helicopter-5n-6d-dehradun" sub="VIP · 6 days"/>
          </div>
        </div>
      </ScrollReveal>

      {/* ═══════════════════════════════════════════════
          FEATURED PROMO STRIPS
      ═══════════════════════════════════════════════ */}
      <section style={{ background:'var(--bg)', padding:'48px 0 8px' }}>
        <div style={{ maxWidth:'var(--container)', margin:'0 auto', padding:'0 20px' }}>
          <div className="hscroll" style={{ paddingBottom:24 }}>
            {[
              { label:'🚁 Helicopter Yatra',   sub:'All 4 dhams in 6 days', href:'/packages/char-dham-yatra-helicopter-5n-6d-dehradun', bg:'linear-gradient(130deg,#0F2B5B 0%,#0B7B8B 100%)' },
              { label:'👴 Senior Special',      sub:'14N/15D — pony included', href:'/packages/char-dham-yatra-senior-citizen-14n-15d',  bg:'linear-gradient(130deg,#1A0E3B 0%,#4C3A9E 100%)' },
              { label:'🏔️ Char Dham Classic',  sub:'10N/11D from ₹19,500',  href:'/packages/char-dham-yatra-10n-11d-haridwar',         bg:'linear-gradient(130deg,#0B2C44 0%,#E8920A 100%)' },
              { label:'🕌 Kedarnath–Badrinath', sub:'Best value — ₹10,999', href:'/packages/kedarnath-badrinath-do-dham-5n-6d',         bg:'linear-gradient(130deg,#09274F 0%,#0B7B8B 100%)' },
              { label:'🌊 Yamunotri–Gangotri',  sub:'4N/5D — ₹8,999',       href:'/packages/yamunotri-gangotri-do-dham-4n-5d',          bg:'linear-gradient(130deg,#0B2C44 0%,#15803D 100%)' },
            ].map(b => (
              <Link key={b.href} href={b.href}
                style={{
                  flex:'0 0 270px', height:110, background:b.bg, borderRadius:'var(--r-lg)',
                  display:'flex', flexDirection:'column', justifyContent:'center', padding:'0 22px',
                  textDecoration:'none', boxShadow:'var(--shadow-md)',
                  position:'relative', overflow:'hidden',
                }}
                className="promo-card">
                <div style={{ color:'#fff', fontWeight:700, fontSize:15.5 }}>{b.label}</div>
                <div style={{ color:'rgba(255,255,255,0.7)', fontSize:12, marginTop:4 }}>{b.sub}</div>
                <div style={{ color:'#FFD166', fontSize:11.5, marginTop:8, fontWeight:600 }}>View Package →</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          PRICE COMPARISON — Direct vs OTA
          Psychology: loss aversion — show what they'd
          OVERPAY booking via MakeMyTrip/Thrillophilia
      ═══════════════════════════════════════════════ */}
      <section style={{ background:'var(--navy)', padding:'48px 20px' }}>
        <div style={{ maxWidth:'var(--container)', margin:'0 auto' }}>
          <div style={{ textAlign:'center', marginBottom:28 }}>
            <span style={{ background:'rgba(232,146,10,0.2)', color:'#FFD166', fontSize:11, fontWeight:700, letterSpacing:'0.12em', textTransform:'uppercase', padding:'5px 16px', borderRadius:100, display:'inline-block', marginBottom:12 }}>
              Why Book Direct
            </span>
            <h2 style={{ fontFamily:'var(--font-display)', fontSize:'clamp(1.3rem,3vw,2rem)', fontWeight:700, color:'#fff', letterSpacing:'-0.02em', marginBottom:8 }}>
              Save ₹10,000+ Per Person — Book Direct
            </h2>
            <p style={{ color:'rgba(255,255,255,0.65)', fontSize:14 }}>Same 9N/10D Char Dham Yatra. Identical itinerary. Very different price.</p>
          </div>

          <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(min(220px,100%),1fr))', gap:12, marginBottom:24 }}>
            {[
              { source:'MakeMyTrip', price:'₹30,337', type:'Online Travel Agent', badge:'Commission included', badgeBg:'#DC2626', detail:'Aggregator markup + platform fee + agent commission' },
              { source:'Thrillophilia', price:'₹24,000+', type:'Activity Aggregator', badge:'Upto 20% commission', badgeBg:'#DC2626', detail:'Their "15% off" is off their inflated base price' },
              { source:'Local Agent', price:'₹22,000+', type:'Travel Agent', badge:'Hidden markup', badgeBg:'#B45309', detail:'Agent earns ₹2,000–4,000 per booking from your payment' },
              { source:'Shiv Ganga Travels', price:'₹19,500', type:'Direct Operator', badge:'Zero commission', badgeBg:'#15803D', detail:'You pay the operator directly — no one takes a cut', highlight:true },
            ].map(r => (
              <div key={r.source} style={{
                background: r.highlight ? 'rgba(232,146,10,0.15)' : 'rgba(255,255,255,0.06)',
                borderRadius:14, padding:'18px 16px',
                border: r.highlight ? '2px solid #E8920A' : '1px solid rgba(255,255,255,0.1)',
                position:'relative',
              }}>
                {r.highlight && (
                  <div style={{ position:'absolute', top:-10, left:'50%', transform:'translateX(-50%)', background:'#E8920A', color:'#fff', fontSize:10.5, fontWeight:800, padding:'3px 14px', borderRadius:100, whiteSpace:'nowrap' }}>
                    ✓ Best Price
                  </div>
                )}
                <div style={{ fontWeight:700, fontSize:15, color: r.highlight ? '#FFD166' : '#fff', marginBottom:6 }}>{r.source}</div>
                <div style={{ fontWeight:800, fontSize:28, color: r.highlight ? '#FFD166' : '#fff', fontFamily:'var(--font-display)', letterSpacing:'-0.03em', lineHeight:1 }}>{r.price}</div>
                <div style={{ fontSize:11.5, color:'rgba(255,255,255,0.5)', marginBottom:10 }}>per person · 9N/10D</div>
                <span style={{ background:r.badgeBg, color:'#fff', fontSize:10.5, fontWeight:700, padding:'3px 10px', borderRadius:100, display:'inline-block', marginBottom:8 }}>{r.badge}</span>
                <div style={{ fontSize:12, color:'rgba(255,255,255,0.55)', lineHeight:1.5 }}>{r.detail}</div>
              </div>
            ))}
          </div>

          <div style={{ textAlign:'center' }}>
            <a href={`https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent('Namaste! I want to book Char Dham Yatra 2026 directly. Please share packages and pricing.')}`}
              target="_blank" rel="nofollow noopener noreferrer"
              style={{ display:'inline-flex', alignItems:'center', gap:8, background:'#25D366', color:'#fff', padding:'13px 28px', borderRadius:10, fontWeight:700, fontSize:14, textDecoration:'none', boxShadow:'0 4px 16px rgba(37,211,102,0.35)' }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              Book Direct — Save Up to ₹10,837
            </a>
            <p style={{ color:'rgba(255,255,255,0.45)', fontSize:11.5, marginTop:10 }}>No booking fee · No agent · Pay us directly</p>
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
              <h2 className="section-title">Why <em>50,000+ Pilgrims</em><br/>Choose Us</h2>
              <p className="section-subtitle">
                15 years. Uttarakhand Tourism registered. Zero incident record. Every rupee accounted for.
              </p>
              <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(min(100%,280px),1fr))', gap:12 }}>
                {[
                  {icon:'🎫', t:'VIP Darshan',     d:'Skip-the-line at all 4 dhams'},
                  {icon:'🏔️', t:'Expert Guides',   d:'Garhwali locals, 10+ yrs'},
                  {icon:'💊', t:'Medical Support',  d:'Oxygen + first aid on board'},
                  {icon:'💰', t:'Price Guarantee',  d:'Lowest price, no surprises'},
                  {icon:'🍱', t:'Sattvic Meals',    d:'Pure veg, Jain on request'},
                  {icon:'📱', t:'24/7 Support',     d:'WhatsApp + phone, always'},
                ].map(w => (
                  <div key={w.t} style={{ display:'flex', gap:10, alignItems:'flex-start', padding:'14px', background:'var(--bg)', borderRadius:'var(--r)', border:'1px solid var(--border)' }}>
                    <div style={{ width:36, height:36, borderRadius:9, background:'var(--navy-light)', display:'flex', alignItems:'center', justifyContent:'center', fontSize:18, flexShrink:0 }}>{w.icon}</div>
                    <div>
                      <div style={{ fontWeight:700, fontSize:13, color:'var(--text)' }}>{w.t}</div>
                      <div style={{ fontSize:11.5, color:'var(--text-muted)', marginTop:2, lineHeight:1.4 }}>{w.d}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {/* Right: image block */}
            <div className="why-split-image" style={{ position:'relative', borderRadius:'var(--r-xl)', overflow:'hidden', height:420 }}>
              <div style={{
                position:'absolute', inset:0,
                backgroundImage:'url(https://images.pexels.com/photos/15031440/pexels-photo-15031440.jpeg?auto=compress&cs=tinysrgb&w=800)',
                backgroundSize:'cover', backgroundPosition:'center',
              }}/>
              <div style={{ position:'absolute', inset:0, background:'linear-gradient(to top, rgba(15,43,91,0.85) 0%, transparent 55%)' }}/>
              {/* Stats overlay */}
              <div style={{ position:'absolute', bottom:20, left:20, right:20 }}>
                <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(min(100%,280px),1fr))', gap:10 }}>
                  {[{v:'50,000+',l:'Happy Pilgrims'},{v:'15+',l:'Years of Trust'},{v:'4.9/5',l:'Google Rating'},{v:'100%',l:'Safe Record'}].map(s=>(
                    <div key={s.l} style={{ background:'rgba(255,255,255,0.12)', backdropFilter:'blur(8px)', borderRadius:10, padding:'10px 14px', border:'1px solid rgba(255,255,255,0.2)' }}>
                      <div style={{ color:'#FFD166', fontWeight:800, fontSize:18, fontFamily:'var(--font-display)', lineHeight:1 }}>{s.v}</div>
                      <div style={{ color:'rgba(255,255,255,0.75)', fontSize:11, marginTop:3 }}>{s.l}</div>
                    </div>
                  ))}
                </div>
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
                Founded by a <em>Retired Army Officer</em> — Not a Startup
              </h2>
              <p style={{ fontSize:15.5, color:'#334155', lineHeight:1.9, marginBottom:16 }}>
                In 2010, Dhanesh Chandra Mishra — a retired officer of the Indian Army — started Shiv Ganga Travels with a single vehicle and one conviction: that pilgrims deserved to be treated with the same care and discipline that the Army demands of every mission.
              </p>
              <p style={{ fontSize:15.5, color:'#334155', lineHeight:1.9, marginBottom:16 }}>
                He'd seen what happened when families entrusted their sacred journey to operators who prioritised profit over safety. Overloaded vehicles. Substandard hotels. Missing guides. Stranded pilgrims at 3,500 metres. He decided to do it differently.
              </p>
              <p style={{ fontSize:15.5, color:'#334155', lineHeight:1.9, marginBottom:24 }}>
                Fifteen years later, Shiv Ganga Travels has carried over 50,000 pilgrims across every season — with a zero incident record. Every vehicle is maintained to Army safety standards. Every driver is trained for high-altitude emergencies. Every rupee is accounted for before you pay.
              </p>
              <div style={{ display:'flex', flexDirection:'column', gap:10, marginBottom:28 }}>
                {[
                  { icon:'⚔️', t:'Military discipline', d:'Punctuality, safety protocols, and accountability on every trip' },
                  { icon:'🛡️', t:'Zero incident record', d:'15 seasons, 50,000+ pilgrims — not one safety failure' },
                  { icon:'📋', t:'Full cost transparency', d:'Every package includes a line-by-line cost breakdown before you book' },
                ].map(f => (
                  <div key={f.t} style={{ display:'flex', gap:12, alignItems:'flex-start', padding:'12px 14px', background:'#fff', borderRadius:10, border:'1px solid var(--border)' }}>
                    <div style={{ width:34, height:34, borderRadius:8, background:'var(--navy-light)', display:'flex', alignItems:'center', justifyContent:'center', fontSize:16, flexShrink:0 }}>{f.icon}</div>
                    <div>
                      <div style={{ fontWeight:700, fontSize:13.5, color:'var(--navy)' }}>{f.t}</div>
                      <div style={{ fontSize:12.5, color:'var(--text-muted)', marginTop:2, lineHeight:1.5 }}>{f.d}</div>
                    </div>
                  </div>
                ))}
              </div>
              <Link href="/about" style={{ display:'inline-flex', alignItems:'center', gap:8, background:'var(--navy)', color:'#fff', padding:'11px 22px', borderRadius:9, fontWeight:700, fontSize:13.5, textDecoration:'none' }}>
                Our full story →
              </Link>
            </div>
            {/* Right: founder card */}
            <div style={{ display:'flex', flexDirection:'column', gap:16 }}>
              <div style={{ background:'var(--navy)', borderRadius:20, padding:'28px 24px', color:'#fff', position:'relative', overflow:'hidden' }}>
                <div style={{ position:'absolute', top:-30, right:-30, width:120, height:120, borderRadius:'50%', background:'rgba(232,146,10,0.15)' }}/>
                <div style={{ position:'absolute', bottom:-20, left:-20, width:90, height:90, borderRadius:'50%', background:'rgba(11,123,139,0.2)' }}/>
                <div style={{ position:'relative', zIndex:1 }}>
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
                  { v:'50,000+', l:'Pilgrims served' },
                  { v:'20+ Vehicles', l:'Fleet owned outright' },
                  { v:'0 Incidents', l:'Across 15 seasons' },
                ].map(s => (
                  <div key={s.l} style={{ background:'#fff', border:'1px solid var(--border)', borderRadius:10, padding:'12px 14px', textAlign:'center' }}>
                    <div style={{ fontWeight:800, fontSize:17, color:'var(--navy)', fontFamily:'var(--font-display)' }}>{s.v}</div>
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
          <div style={{ textAlign:'center', marginBottom:44 }}>
            <span className="section-tag">Simple & clear</span>
            <h2 className="section-title">Book in <em>4 Easy Steps</em></h2>
          </div>
          <div className="steps-grid" style={{ display:'grid', gap:20 }}>
            {[
              {n:'01', icon:'💬', t:'Enquire',     d:'Call or WhatsApp us. Tell us your dates and group size.'},
              {n:'02', icon:'📋', t:'Customise',   d:'Review the itinerary. We adjust to your preferences.'},
              {n:'03', icon:'💳', t:'Confirm',     d:'Pay 25% advance. Receive complete kit & registration.'},
              {n:'04', icon:'🙏', t:'Embark',      d:'Pickup at Haridwar. Your blessed journey begins.'},
            ].map((s,i,a)=>(
              <div key={s.n} style={{ position:'relative', textAlign:'center', padding:'0 8px' }}>
                {i < a.length-1 && (
                  <div style={{ position:'absolute', top:34, left:'calc(50% + 38px)', right:'-50%', height:2, background:'var(--border)', zIndex:0 }} className="hidden lg:block" aria-hidden="true"/>
                )}
                <div style={{ position:'relative', zIndex:1 }}>
                  <div style={{ width:68, height:68, margin:'0 auto 14px', borderRadius:'50%', background:'linear-gradient(135deg, var(--navy), var(--teal))', display:'flex', alignItems:'center', justifyContent:'center', fontSize:26, boxShadow:'0 6px 20px rgba(15,43,91,0.25)' }}>{s.icon}</div>
                  <div style={{ fontSize:11, fontWeight:700, color:'var(--gold)', letterSpacing:'0.15em', marginBottom:4 }}>STEP {s.n}</div>
                  <h3 style={{ fontSize:15, fontWeight:700, color:'var(--text)', marginBottom:6 }}>{s.t}</h3>
                  <p style={{ fontSize:12.5, color:'var(--text-mid)', lineHeight:1.6 }}>{s.d}</p>
                </div>
              </div>
            ))}
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
                  style={{ background:'#25D366', color:'#fff', padding:'11px 16px', borderRadius:9, fontWeight:700, fontSize:13.5, textDecoration:'none', textAlign:'center' }}>
                  💬 Start on WhatsApp
                </a>
                <a href='tel:+917017082807'
                  style={{ background:'rgba(255,255,255,0.15)', color:'#fff', padding:'10px 16px', borderRadius:9, fontWeight:600, fontSize:13, textDecoration:'none', textAlign:'center', border:'1px solid rgba(255,255,255,0.25)' }}>
                  📞 {SITE.phone}
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


      {/* ═══ FULL SITE DIRECTORY ═══ */}
      <ScrollReveal as="section" className="section-lazy" style={{ background:'var(--bg)', padding:'56px 0' }}>
        <div style={{ maxWidth:'var(--container)', margin:'0 auto', padding:'0 20px' }}>
          <div style={{ textAlign:'center', marginBottom:36 }}>
            <span className="section-tag">Everything in One Place</span>
            <h2 className="section-title">Explore <em>All Resources</em></h2>
            <p className="section-subtitle" style={{ margin:'0 auto' }}>Packages, guides, tools, and city pages — all linked from here.</p>
          </div>

          {/* Row 1 — Yatra Packages */}
          <div style={{ marginBottom:32 }}>
            <div style={{ display:'flex', alignItems:'center', gap:10, marginBottom:14 }}>
              <div style={{ width:3, height:20, background:'var(--navy)', borderRadius:2 }}/>
              <h3 style={{ fontSize:14, fontWeight:700, color:'var(--navy)', textTransform:'uppercase', letterSpacing:'0.08em', margin:0 }}>Yatra Packages</h3>
            </div>
            <div className='pkg-dir-grid' style={{ display:'grid', gridTemplateColumns:'repeat(auto-fill,minmax(180px,1fr))', gap:10 }}>
              {[
                { img:'https://images.pexels.com/photos/3889930/pexels-photo-3889930.jpeg?auto=compress&cs=tinysrgb&w=800', title:'Char Dham Yatra', desc:'All 4 dhams · From ₹19,500', href:'/char-dham-yatra' },
                { img:'https://images.pexels.com/photos/2404046/pexels-photo-2404046.jpeg?auto=compress&cs=tinysrgb&w=800', title:'Do Dham Yatra', desc:'Kedarnath + Badrinath', href:'/do-dham-yatra' },
                { img:'https://images.pexels.com/photos/3889930/pexels-photo-3889930.jpeg?auto=compress&cs=tinysrgb&w=800', title:'Kedarnath Yatra', desc:'3N/4D · From ₹6,499', href:'/kedarnath-yatra' },
                { img:'https://images.pexels.com/photos/2404046/pexels-photo-2404046.jpeg?auto=compress&cs=tinysrgb&w=800', title:'Badrinath Yatra', desc:'2N/3D · From ₹5,999', href:'/blog/badrinath-yatra-guide' },
                { img:'https://images.pexels.com/photos/1266810/pexels-photo-1266810.jpeg?auto=compress&cs=tinysrgb&w=800', title:'Gangotri Yatra', desc:'2N/3D · From ₹5,299', href:'/gangotri-yatra' },
                { img:'https://images.pexels.com/photos/1366909/pexels-photo-1366909.jpeg?auto=compress&cs=tinysrgb&w=800', title:'Yamunotri Yatra', desc:'2N/3D · From ₹5,499', href:'/yamunotri-yatra' },
                { img:'https://images.pexels.com/photos/1544931/pexels-photo-1544931.jpeg?auto=compress&cs=tinysrgb&w=400&h=260&fit=crop', title:'Helicopter Package', desc:'All 4 dhams in 6 days', href:'/char-dham-helicopter' },
                { img:'https://images.pexels.com/photos/3889930/pexels-photo-3889930.jpeg?auto=compress&cs=tinysrgb&w=800', title:'Panch Kedar Yatra', desc:'5 Shiva temples · 8N/9D', href:'/panch-kedar-yatra' },
                { img:'https://images.pexels.com/photos/15031440/pexels-photo-15031440.jpeg?auto=compress&cs=tinysrgb&w=400&h=260&fit=crop', title:'Uttarakhand Tours', desc:'Hills, wildlife, adventure', href:'/uttarakhand-tour-packages' },
                { img:'https://images.pexels.com/photos/19271393/pexels-photo-19271393.jpeg?auto=compress&cs=tinysrgb&w=400&h=260&fit=crop', title:'Senior Citizen', desc:'Special care package', href:'/packages/char-dham-yatra-senior-citizen-12n-13d' },
              ].map(l => (
                <Link key={l.href} href={l.href} className="pkg-card"
                  style={{ textDecoration:'none', color:'inherit', display:'flex', flexDirection:'column', borderRadius:10, overflow:'hidden', border:'1px solid var(--border)' }}>
                  <img src={l.img} alt={l.title} width={400} height={180}
                    style={{ width:'100%', height:100, objectFit:'cover', display:'block' }}
                    loading="lazy" decoding="async"/>
                  <div style={{ padding:'10px 12px' }}>
                    <div style={{ fontWeight:700, fontSize:12.5, color:'var(--navy)', marginBottom:2 }}>{l.title}</div>
                    <div style={{ fontSize:11.5, color:'var(--text-muted)' }}>{l.desc}</div>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Row 2 — Plan by City */}
          <div style={{ marginBottom:32 }}>
            <div style={{ display:'flex', alignItems:'center', gap:10, marginBottom:14 }}>
              <div style={{ width:3, height:20, background:'var(--teal)', borderRadius:2 }}/>
              <h3 style={{ fontSize:14, fontWeight:700, color:'var(--navy)', textTransform:'uppercase', letterSpacing:'0.08em', margin:0 }}>Book from Your City</h3>
            </div>
            <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fill,minmax(160px,1fr))', gap:10 }}>
              {[
                { icon:'🏙️', title:'From Delhi', href:'/char-dham-yatra-from-delhi' },
                { icon:'🌆', title:'From Mumbai', href:'/char-dham-yatra-from-mumbai' },
                { icon:'🌇', title:'From Bangalore', href:'/char-dham-yatra-from-bangalore' },
                { icon:'🌃', title:'From Hyderabad', href:'/char-dham-yatra-from-hyderabad' },
                { icon:'🌉', title:'From Chennai', href:'/char-dham-yatra-from-chennai' },
                { icon:'🌁', title:'From Pune', href:'/char-dham-yatra-from-pune' },
                { icon:'🏘️', title:'From Noida', href:'/char-dham-yatra-from-noida' },
                { icon:'🏙️', title:'From Chandigarh', href:'/char-dham-yatra-from-chandigarh' },
                { icon:'🌆', title:'From Nagpur', href:'/char-dham-yatra-from-nagpur' },
                { icon:'🏛️', title:'From Patna', href:'/char-dham-yatra-from-patna' },
                { icon:'🕌', title:'From Lucknow', href:'/char-dham-yatra-from-lucknow' },
                { icon:'🏛️', title:'From Ahmedabad', href:'/char-dham-yatra-from-ahmedabad' },
                { icon:'🌊', title:'From Kolkata', href:'/char-dham-yatra-from-kolkata' },
                { icon:'🏯', title:'From Jaipur', href:'/char-dham-yatra-from-jaipur' },
                { icon:'🕍', title:'From Bhopal', href:'/char-dham-yatra-from-bhopal' },
                { icon:'🏭', title:'From Indore', href:'/char-dham-yatra-from-indore' },
                { icon:'🚢', title:'From Surat', href:'/char-dham-yatra-from-surat' },
              ].map(l => (
                <Link key={l.href} href={l.href}
                  style={{ background:'var(--teal)', color:'#fff', padding:'12px 14px', borderRadius:10, textDecoration:'none', display:'flex', gap:10, alignItems:'center' }}>
                  <span style={{ fontSize:18 }}>{l.icon}</span>
                  <span style={{ fontWeight:600, fontSize:13 }}>{l.title}</span>
                </Link>
              ))}
            </div>
          </div>

          {/* Row 3 — Cabs */}
          <div style={{ marginBottom:32 }}>
            <div style={{ display:'flex', alignItems:'center', gap:10, marginBottom:14 }}>
              <div style={{ width:3, height:20, background:'#f59e0b', borderRadius:2 }}/>
              <h3 style={{ fontSize:14, fontWeight:700, color:'var(--navy)', textTransform:'uppercase', letterSpacing:'0.08em', margin:0 }}>Cab & Taxi Service</h3>
            </div>
            <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fill,minmax(180px,1fr))', gap:10 }}>
              {[
                { icon:'🚙', title:'All Char Dham Cabs', desc:'Innova, Tempo, Ertiga — rates & booking', href:'/char-dham-yatra-cab-booking', hot:true },
                { icon:'🚗', title:'Haridwar → Kedarnath', desc:'225km · 6–7hrs · from ₹5,500', href:'/haridwar-to-kedarnath-cab' },
                { icon:'🚗', title:'Haridwar → Badrinath', desc:'320km · 8–9hrs · from ₹7,000', href:'/haridwar-to-badrinath-cab' },
                { icon:'🚗', title:'Haridwar → Gangotri', desc:'265km · 7–8hrs · from ₹6,500', href:'/haridwar-to-gangotri-cab' },
                { icon:'🚗', title:'Delhi → Haridwar', desc:'210km · 4–5hrs · from ₹3,500', href:'/delhi-to-haridwar-cab' },
              ].map(l => (
                <Link key={l.href} href={l.href} className="pkg-card"
                  style={{ background: l.hot ? 'var(--navy)' : '#fff', padding:'14px', borderRadius:10, border: l.hot ? 'none' : '1px solid var(--border)', textDecoration:'none', display:'flex', gap:10, alignItems:'flex-start' }}>
                  <span style={{ fontSize:20, flexShrink:0 }}>{l.icon}</span>
                  <div>
                    <div style={{ fontWeight:700, fontSize:13, color: l.hot ? '#fff' : 'var(--navy)', marginBottom:2 }}>{l.title}</div>
                    <div style={{ fontSize:11.5, color: l.hot ? 'rgba(255,255,255,0.65)' : 'var(--text-muted)' }}>{l.desc}</div>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Row 3b — Temple & Spiritual */}
          <div style={{ marginBottom:32 }}>
            <div style={{ display:'flex', alignItems:'center', gap:10, marginBottom:14 }}>
              <div style={{ width:3, height:20, background:'var(--teal)', borderRadius:2 }}/>
              <h3 style={{ fontSize:14, fontWeight:700, color:'var(--navy)', textTransform:'uppercase', letterSpacing:'0.08em', margin:0 }}>Temple Guides & Puja</h3>
            </div>
            <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fill,minmax(180px,1fr))', gap:10 }}>
              {[
                { icon:'🕌', title:'Kedarnath Temple', desc:'Timings, history & puja guide', href:'/kedarnath-temple' },
                { icon:'🕌', title:'Badrinath Temple', desc:'Darshan, Tapt Kund & puja', href:'/badrinath-temple' },
                { icon:'🙏', title:'Online Puja Booking', desc:'Abhishek, Rudrabhishek — all temples', href:'/online-puja-booking', hot:true },
                { icon:'🌤️', title:'Kedarnath Weather', desc:'Month-wise temperature guide', href:'/kedarnath-weather' },
                { icon:'🚨', title:'Emergency Contacts', desc:'Helplines, SDRF, hospitals', href:'/char-dham-yatra-emergency-contacts' },
              ].map(l => (
                <Link key={l.href} href={l.href} className="pkg-card"
                  style={{ background: l.hot ? '#fff9f0' : '#fff', padding:'14px', borderRadius:10, border:`1px solid ${l.hot ? 'rgba(232,146,10,0.3)' : 'var(--border)'}`, textDecoration:'none', display:'flex', gap:10, alignItems:'flex-start' }}>
                  <span style={{ fontSize:20, flexShrink:0 }}>{l.icon}</span>
                  <div>
                    <div style={{ fontWeight:700, fontSize:13, color:'var(--navy)', marginBottom:2 }}>{l.title}</div>
                    <div style={{ fontSize:11.5, color:'var(--text-muted)' }}>{l.desc}</div>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Row 4 — Planning Tools */}
          <div style={{ marginBottom:32 }}>
            <div style={{ display:'flex', alignItems:'center', gap:10, marginBottom:14 }}>
              <div style={{ width:3, height:20, background:'var(--gold)', borderRadius:2 }}/>
              <h3 style={{ fontSize:14, fontWeight:700, color:'var(--navy)', textTransform:'uppercase', letterSpacing:'0.08em', margin:0 }}>Free Planning Tools</h3>
            </div>
            <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fill,minmax(220px,1fr))', gap:10 }}>
              {[
                { icon:'🧮', title:'Yatra Cost Calculator', desc:'Instant personalised price estimate for your group', href:'/char-dham-yatra-cost-calculator', hot:true },
                { icon:'🗺️', title:'Route Map 2026', desc:'All distances, altitudes & stops from Haridwar', href:'/char-dham-yatra-route-map', hot:true },
                { icon:'📋', title:'Biometric Registration', desc:'How to register — step by step guide', href:'/blog/char-dham-yatra-registration', hot:false },
              ].map(l => (
                <Link key={l.href} href={l.href}
                  style={{ background: l.hot ? 'var(--navy)' : '#fff', padding:'16px', borderRadius:12, border: l.hot ? 'none' : '1px solid var(--border)', textDecoration:'none', display:'flex', gap:12, alignItems:'flex-start' }}>
                  <span style={{ fontSize:26, flexShrink:0 }}>{l.icon}</span>
                  <div>
                    <div style={{ fontWeight:700, fontSize:13.5, color: l.hot ? '#fff' : 'var(--navy)', marginBottom:3 }}>
                      {l.title}
                      {l.hot && <span style={{ marginLeft:8, background:'var(--gold)', color:'#fff', fontSize:9.5, fontWeight:700, padding:'1px 7px', borderRadius:100 }}>FREE</span>}
                    </div>
                    <div style={{ fontSize:12, color: l.hot ? 'rgba(255,255,255,0.65)' : 'var(--text-muted)', lineHeight:1.5 }}>{l.desc}</div>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Row 4 — Travel Guides (blog) */}
          <div style={{ marginBottom:32 }}>
            <div style={{ display:'flex', alignItems:'center', gap:10, marginBottom:14 }}>
              <div style={{ width:3, height:20, background:'#25D366', borderRadius:2 }}/>
              <h3 style={{ fontSize:14, fontWeight:700, color:'var(--navy)', textTransform:'uppercase', letterSpacing:'0.08em', margin:0 }}>Travel Guides & Blog</h3>
            </div>
            <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fill,minmax(220px,1fr))', gap:10 }}>
              {[
                { icon:'📢', title:'2026 New Rules', desc:'Phone ban, age 55+ certificate, IRCTC helicopter', href:'/blog/char-dham-yatra-2026-new-rules', new:true },
                { icon:'📅', title:'Best Time to Visit', desc:'Month-by-month weather guide', href:'/blog/best-time-char-dham' },
                { icon:'🥾', title:'Kedarnath Trek Guide', desc:'16km route, difficulty, tips', href:'/blog/kedarnath-trek-guide' },
                { icon:'🚁', title:'Helicopter Booking Guide', desc:'Prices, helipads, weather tips', href:'/blog/kedarnath-helicopter-booking' },
                { icon:'🎒', title:'Packing List', desc:'Exactly what to carry', href:'/blog/char-dham-yatra-packing-list' },
                { icon:'💰', title:'Cost Breakdown', desc:'Every rupee explained', href:'/blog/char-dham-yatra-cost' },
                { icon:'👴', title:'Senior Citizen Guide', desc:'Age 60-85+ can do it', href:'/blog/senior-citizen-char-dham' },
                { icon:'🗺️', title:'Haridwar to Kedarnath', desc:'Route, stops & travel time', href:'/blog/haridwar-to-kedarnath' },
                { icon:'🌸', title:'Valley of Flowers', desc:'UNESCO trek guide', href:'/blog/valley-of-flowers-trek' },
                { icon:'🏄', title:'Rishikesh Adventure', desc:'Rafting, bungee & camping', href:'/blog/rishikesh-adventure-guide' },
                { icon:'📖', title:'All Blog Posts →', desc:'Complete yatra knowledge hub', href:'/blog' },
              ].map(l => (
                <Link key={l.href} href={l.href}
                  style={{ background:'#fff', padding:'12px 14px', borderRadius:10, border:`1px solid ${l.new ? 'rgba(232,146,10,0.4)' : 'var(--border)'}`, textDecoration:'none', display:'flex', gap:10, alignItems:'flex-start', background: l.new ? '#fff9f0' : '#fff' }}>
                  <span style={{ fontSize:20, flexShrink:0 }}>{l.icon}</span>
                  <div>
                    <div style={{ fontWeight:700, fontSize:12.5, color:'var(--navy)', marginBottom:2, display:'flex', alignItems:'center', gap:5 }}>
                      {l.title}
                      {l.new && <span style={{ background:'var(--gold)', color:'#fff', fontSize:9, fontWeight:700, padding:'1px 6px', borderRadius:100 }}>NEW</span>}
                    </div>
                    <div style={{ fontSize:11.5, color:'var(--text-muted)', lineHeight:1.4 }}>{l.desc}</div>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Quick contact strip */}
          <div style={{ background:'var(--navy)', borderRadius:14, padding:'20px 24px', display:'flex', justifyContent:'space-between', alignItems:'center', flexWrap:'wrap', gap:16 }}>
            <div>
              <div style={{ fontWeight:700, fontSize:15, color:'#fff', marginBottom:3 }}>Need help choosing the right package?</div>
              <div style={{ fontSize:13, color:'rgba(255,255,255,0.65)' }}>Call or WhatsApp — free advice, no obligation</div>
            </div>
            <div style={{ display:'flex', gap:10, flexWrap:'wrap' }}>
              <a href={`https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent('Namaste! I need help choosing the right Char Dham Yatra package.')}`}
                target="_blank" rel="nofollow noopener noreferrer"
                style={{ background:'#25D366', color:'#fff', padding:'10px 20px', borderRadius:9, fontWeight:700, fontSize:13.5, textDecoration:'none' }}>
                💬 WhatsApp
              </a>
              <a href='tel:+917017082807'
                style={{ background:'rgba(255,255,255,0.12)', color:'#fff', padding:'10px 20px', borderRadius:9, fontWeight:700, fontSize:13.5, textDecoration:'none', border:'1px solid rgba(255,255,255,0.2)' }}>
                📞 {SITE.phone}
              </a>
              <a href="https://www.instagram.com/shivgangatravels/" target="_blank" rel="noopener noreferrer"
                style={{ background:'linear-gradient(135deg,#833ab4,#fd1d1d,#fcb045)', color:'#fff', padding:'10px 20px', borderRadius:9, fontWeight:700, fontSize:13.5, textDecoration:'none', display:'inline-flex', alignItems:'center', gap:7 }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                Instagram
              </a>
              <a href="https://www.facebook.com/profile.php?id=100083198213052" target="_blank" rel="noopener noreferrer"
                style={{ background:'#1877F2', color:'#fff', padding:'10px 20px', borderRadius:9, fontWeight:700, fontSize:13.5, textDecoration:'none', display:'inline-flex', alignItems:'center', gap:7 }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.41c0-3.025 1.792-4.697 4.533-4.697 1.313 0 2.686.236 2.686.236v2.97h-1.513c-1.491 0-1.956.931-1.956 1.886v2.267h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073z"/>
                </svg>
                Facebook
              </a>
              <a href="https://www.youtube.com/@Shivgangatravelsharidwar" target="_blank" rel="noopener noreferrer"
                style={{ background:'#FF0000', color:'#fff', padding:'10px 20px', borderRadius:9, fontWeight:700, fontSize:13.5, textDecoration:'none', display:'inline-flex', alignItems:'center', gap:7 }}>
                <svg width="18" height="13" viewBox="0 0 24 17" fill="currentColor" aria-hidden="true">
                  <path d="M23.495 2.656A3.016 3.016 0 0 0 21.37.516C19.505 0 12 0 12 0S4.495 0 2.63.516A3.016 3.016 0 0 0 .505 2.656C0 4.532 0 8.45 0 8.45s0 3.918.505 5.794a3.016 3.016 0 0 0 2.125 2.14C4.495 16.9 12 16.9 12 16.9s7.505 0 9.37-.516a3.016 3.016 0 0 0 2.125-2.14C24 12.368 24 8.45 24 8.45s0-3.918-.505-5.794zM9.545 12.027V4.873l6.272 3.577-6.272 3.577z"/>
                </svg>
                YouTube
              </a>
            </div>
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
               className="btn btn-outline" style={{ display:'inline-flex', gap:7 }}>
              💬 Still have questions? Ask on WhatsApp
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
          <span style={{ background:'rgba(232,146,10,0.18)', color:'#FFD166', fontSize:11, fontWeight:600, letterSpacing:'0.14em', textTransform:'uppercase', padding:'5px 16px', borderRadius:100, display:'inline-block', marginBottom:20, border:'1px solid rgba(232,146,10,0.3)' }}>
            Season 2026 · Limited seats per batch
          </span>
          <h2 className="display-title" style={{ color:'#fff', fontSize:'clamp(1.6rem,5vw,2.8rem)', marginBottom:16 }}>
            Your Sacred Journey <em style={{ color:'#FFD166' }}>Awaits</em>
          </h2>
          <p style={{ color:'rgba(255,255,255,0.72)', fontSize:15, lineHeight:1.75, marginBottom:32, maxWidth:540, margin:'0 auto 32px' }}>
            Speak with our yatra experts today. Limited seats per batch — book early for the best dates and pricing.
          </p>
          <div style={{ display:'flex', justifyContent:'center', gap:12, flexWrap:'wrap', marginBottom:44 }}>
            <a href='tel:+917017082807' style={{ display:'inline-flex', alignItems:'center', gap:8, background:'#fff', color:'var(--navy)', padding:'14px 28px', borderRadius:'var(--r-sm)', fontWeight:700, fontSize:14, textDecoration:'none', boxShadow:'var(--shadow-lg)', transition:'transform var(--t)' }}>
              📞 {SITE.phone}
            </a>
            <a href={`https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent('Namaste! I want to book Char Dham Yatra 2026.')}`} target="_blank" rel="nofollow noopener noreferrer"
               style={{ display:'inline-flex', alignItems:'center', gap:8, background:'#25D366', color:'#fff', padding:'14px 28px', borderRadius:'var(--r-sm)', fontWeight:700, fontSize:14, textDecoration:'none', boxShadow:'0 4px 20px rgba(37,211,102,0.4)' }}>
              💬 WhatsApp Us Now
            </a>
          </div>
          {/* Newsletter */}
          <div style={{ borderTop:'1px solid rgba(255,255,255,0.1)', paddingTop:32 }}>
            <p style={{ color:'rgba(255,255,255,0.6)', fontSize:13, marginBottom:14 }}>📬 Get yatra updates, early-bird offers & pilgrimage insights</p>
            <form action={`https://wa.me/${SITE.whatsapp}`} target="_blank" style={{ display:'flex', gap:8, maxWidth:400, margin:'0 auto', flexWrap:'wrap' }}>
              <input type="email" placeholder="your@email.com" className="newsletter-input" required/>
              <button type="submit" className="btn btn-primary" style={{ flexShrink:0 }}>Subscribe</button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
