import Link from 'next/link';
import { PACKAGES, SITE, TESTIMONIALS, GLOBAL_FAQS, TRUST, getFeaturedPackages } from '@/data/packages';
import HeroSearch from '@/components/HeroSearch';
import ScrollReveal from '@/components/ScrollReveal';
import CounterStat from '@/components/CounterStat';
import FAQAccordion from '@/components/FAQAccordion';
import TestimonialSlider from '@/components/TestimonialSlider';
import AutoScrollRow from '@/components/AutoScrollRow';

export const metadata = {
  title: `${SITE.name} — Char Dham Yatra Packages 2025 from Haridwar`,
  description: 'Book Char Dham, Do Dham & Single Dham Yatra packages from Haridwar. Zero commission, VIP darshan, expert guides, all-inclusive. Trusted since 2010 by 50,000+ pilgrims.',
  openGraph: {
    title: `${SITE.name} — Char Dham Yatra 2025`,
    description: 'Yamunotri · Gangotri · Kedarnath · Badrinath. Zero commission. Trusted since 2010.',
    images: ['https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/Kedarnathji-mandir.JPG/1200px-Kedarnathji-mandir.JPG'],
  },
};

/* ─── Schemas ─── */
function Schema() {
  const agency = { '@context':'https://schema.org','@type':'TravelAgency', name:SITE.name, url:SITE.baseUrl, telephone:SITE.phone, email:SITE.email, address:{'@type':'PostalAddress',streetAddress:'Near Har Ki Pauri',addressLocality:'Haridwar',addressRegion:'Uttarakhand',postalCode:'249401',addressCountry:'IN'}, foundingDate:String(SITE.established), aggregateRating:{'@type':'AggregateRating',ratingValue:'4.9',reviewCount:'850',bestRating:'5'}, priceRange:'₹₹' };
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

      {/* ═══════════════════════════════════════════════
          HERO — full bleed photo + glass search card
      ═══════════════════════════════════════════════ */}
      <section style={{
        position:'relative', minHeight:'620px',
        backgroundImage:'linear-gradient(160deg,rgba(10,28,60,0.88) 0%,rgba(10,28,60,0.65) 45%,rgba(11,80,100,0.72) 100%), url(https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/Kedarnathji-mandir.JPG/1600px-Kedarnathji-mandir.JPG)',
        backgroundSize:'cover', backgroundPosition:'center',
        display:'flex', alignItems:'center',
        padding:'72px 20px 100px', overflow:'hidden',
      }}>
        {/* Subtle animated grain */}
        <div style={{ position:'absolute', inset:0, opacity:0.03, backgroundImage:'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'n\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.85\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23n)\'/%3E%3C/svg%3E")', pointerEvents:'none' }} aria-hidden="true"/>

        <div style={{ maxWidth:'var(--container)', margin:'0 auto', width:'100%', position:'relative', zIndex:1 }}>
          <div style={{ maxWidth:820, margin:'0 auto', textAlign:'center' }}>

            {/* Eyebrow */}
            <div style={{
              display:'inline-flex', alignItems:'center', gap:8,
              background:'rgba(232,146,10,0.18)', color:'#FFD166',
              border:'1px solid rgba(232,146,10,0.35)',
              fontSize:11.5, fontWeight:600, letterSpacing:'0.14em', textTransform:'uppercase',
              padding:'6px 18px', borderRadius:100,
              marginBottom:22,
            }}>
              <span style={{ width:6, height:6, background:'#FFD166', borderRadius:'50%', animation:'blink 2s infinite' }}/>
              Char Dham Yatra Specialist · Season 2025 Open
            </div>

            {/* Hero headline */}
            <h1 className="display-title" style={{
              color:'#fff', fontSize:'clamp(2.2rem, 5.5vw, 4rem)',
              fontWeight:600, marginBottom:18, lineHeight:1.08,
            }}>
              Begin Your Sacred<br/>
              <em style={{ fontStyle:'italic', color:'#FFD166', fontWeight:700 }}>Char Dham Journey</em>
            </h1>

            <p style={{
              color:'rgba(255,255,255,0.78)', fontSize:16, lineHeight:1.75,
              marginBottom:36, maxWidth:580, margin:'0 auto 36px',
            }}>
              Yamunotri · Gangotri · Kedarnath · Badrinath<br/>
              <span style={{ color:'#FFD166', fontWeight:600 }}>Starting ₹5,299 per person</span>
              &nbsp;·&nbsp;Zero commission &nbsp;·&nbsp; VIP darshan
            </p>

            {/* Search widget */}
            <HeroSearch/>

            {/* Quick trust row */}
            <div style={{ display:'flex', justifyContent:'center', gap:22, flexWrap:'wrap', marginTop:24, fontSize:12, color:'rgba(255,255,255,0.65)' }}>
              {['✓ No hidden charges','✓ VIP darshan included','✓ 24/7 yatra support','✓ Free cancellation 30 days'].map(t=>(
                <span key={t} style={{ whiteSpace:'nowrap' }}>{t}</span>
              ))}
            </div>
          </div>
        </div>

        {/* Wave */}
        <div className="hero-wave" aria-hidden="true">
          <svg viewBox="0 0 1440 56" preserveAspectRatio="none" style={{ display:'block', width:'100%', height:56 }}>
            <path d="M0,32 C480,56 960,8 1440,32 L1440,56 L0,56 Z" fill="var(--bg)"/>
          </svg>
        </div>
        <style dangerouslySetInnerHTML={{ __html:'@keyframes blink{0%,100%{opacity:1}50%{opacity:.35}}' }}/>
      </section>

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
          ZERO COMMISSION STRIP
      ═══════════════════════════════════════════════ */}
      <div style={{ background:'#fff', borderBottom:'1px solid var(--border)' }}>
        <div style={{ maxWidth:'var(--container)', margin:'0 auto' }}>
          <div style={{ display:'flex', alignItems:'stretch', overflow:'hidden', minHeight:76 }}>
            {/* Dark label */}
            <div style={{ background:'var(--navy)', padding:'16px 28px', display:'flex', alignItems:'center', gap:14, flexShrink:0 }}>
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
            {/* Arrow */}
            <div style={{ width:0, height:0, borderTop:'38px solid transparent', borderBottom:'38px solid transparent', borderLeft:'20px solid var(--navy)', flexShrink:0 }} aria-hidden="true"/>
            {/* Chips */}
            <div className="zero-comm-chips" style={{ flex:1, display:'flex', alignItems:'center', overflowX:'auto', gap:0, padding:'0 4px' }}>
              {[
                {icon:'💸',text:'Pay us directly',sub:'No agency fees'},
                {icon:'🤝',text:'We ARE the operator',sub:'15-year family business'},
                {icon:'📋',text:'Full price breakdown',sub:'Before you book'},
                {icon:'💰',text:'Price match guarantee',sub:'Beat any genuine quote'},
              ].map((c,i)=>(
                <div key={c.text} style={{ display:'flex', alignItems:'center', gap:10, padding:'0 22px', borderRight:i<3?'1px solid var(--border)':'none', flexShrink:0, height:'100%' }}>
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
              <a href={`tel:${SITE.phone}`} style={{ display:'flex', flexDirection:'column', alignItems:'center', gap:2, textDecoration:'none' }}>
                <span style={{ fontSize:18 }}>📞</span>
                <span style={{ fontWeight:700, fontSize:12.5, color:'var(--navy)', whiteSpace:'nowrap' }}>{SITE.phone}</span>
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
          CHAR DHAM PACKAGES
      ═══════════════════════════════════════════════ */}
      <ScrollReveal as="section" style={{ background:'var(--bg)', padding:'8px 0 40px' }}>
        <div style={{ maxWidth:'var(--container)', margin:'0 auto', padding:'0 20px' }}>
          <RowHeader eyebrow="Most Popular" title={<><em>Char Dham</em> Yatra Packages</>} sub="All four dhams in one divine journey — from 5 days to 15 days." href="/packages/char-dham"/>
          <AutoScrollRow>{charDham.map(p=><PkgCard key={p.slug} pkg={p}/>)}</AutoScrollRow>
        </div>
      </ScrollReveal>

      {/* ═══════════════════════════════════════════════
          WHY CHOOSE US — compact icon grid
      ═══════════════════════════════════════════════ */}
      <ScrollReveal as="section" style={{ background:'#fff', padding:'56px 0 48px' }}>
        <div style={{ maxWidth:'var(--container)', margin:'0 auto', padding:'0 20px' }}>
          <div className="why-split" style={{ display:'grid', gap:32, alignItems:'center' }}>
            {/* Left: copy */}
            <div>
              <span className="section-tag">What sets us apart</span>
              <h2 className="section-title">Why <em>50,000+ Pilgrims</em><br/>Choose Us</h2>
              <p className="section-subtitle">
                15 years. Uttarakhand Tourism registered. Zero incident record. Every rupee accounted for.
              </p>
              <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:12 }}>
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
                <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:10 }}>
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
          DO DHAM
      ═══════════════════════════════════════════════ */}
      <ScrollReveal as="section" style={{ background:'var(--bg)', padding:'48px 0 40px' }}>
        <div style={{ maxWidth:'var(--container)', margin:'0 auto', padding:'0 20px' }}>
          <RowHeader eyebrow="Two Dhams · One Journey" title={<><em>Do Dham</em> Yatra Packages</>} sub="Perfect when time is limited but devotion is full." href="/packages/do-dham"/>
          <AutoScrollRow>{doDham.map(p=><PkgCard key={p.slug} pkg={p}/>)}</AutoScrollRow>
        </div>
      </ScrollReveal>

      {/* ═══════════════════════════════════════════════
          JOURNEY STEPS
      ═══════════════════════════════════════════════ */}
      <ScrollReveal as="section" style={{ background:'#fff', padding:'56px 0' }}>
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
          SINGLE DHAM
      ═══════════════════════════════════════════════ */}
      <ScrollReveal as="section" style={{ background:'var(--bg)', padding:'48px 0 40px' }}>
        <div style={{ maxWidth:'var(--container)', margin:'0 auto', padding:'0 20px' }}>
          <RowHeader eyebrow="Focused · Affordable" title={<><em>Single Dham</em> Packages</>} sub="One sacred shrine. Deeply meaningful. From ₹5,299." href="/packages/single-dham"/>
          <AutoScrollRow>{singleDham.map(p=><PkgCard key={p.slug} pkg={p}/>)}</AutoScrollRow>
        </div>
      </ScrollReveal>

      {/* ═══════════════════════════════════════════════
          TESTIMONIALS
      ═══════════════════════════════════════════════ */}
      <ScrollReveal as="section" style={{ background:'#fff', padding:'56px 0' }}>
        <div style={{ maxWidth:'var(--container)', margin:'0 auto', padding:'0 20px' }}>
          <div style={{ marginBottom:28, textAlign:'center' }}>
            <span className="section-tag">Real stories</span>
            <h2 className="section-title">What Our <em>Pilgrims</em> Say</h2>
            <p className="section-subtitle" style={{ margin:'0 auto' }}>Genuine reviews from 50,000+ souls who trusted us with their sacred journey.</p>
          </div>
          <TestimonialSlider items={TESTIMONIALS}/>
        </div>
      </ScrollReveal>

      {/* ═══════════════════════════════════════════════
          FAQ
      ═══════════════════════════════════════════════ */}
      <ScrollReveal as="section" style={{ background:'var(--bg)', padding:'56px 0' }}>
        <div style={{ maxWidth:800, margin:'0 auto', padding:'0 20px' }}>
          <div style={{ textAlign:'center', marginBottom:32 }}>
            <span className="section-tag">Have questions?</span>
            <h2 className="section-title">Everything You Need to <em>Know</em></h2>
            <p className="section-subtitle" style={{ margin:'0 auto' }}>Before booking your yatra — answered clearly.</p>
          </div>
          <FAQAccordion faqs={GLOBAL_FAQS}/>
          <div style={{ textAlign:'center', marginTop:24 }}>
            <a href={`https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent('Namaste! I have a question about Char Dham Yatra.')}`}
               target="_blank" rel="noopener noreferrer"
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
            Season 2025 · Limited seats per batch
          </span>
          <h2 className="display-title" style={{ color:'#fff', fontSize:'clamp(1.8rem,4vw,2.8rem)', marginBottom:16 }}>
            Your Sacred Journey <em style={{ color:'#FFD166' }}>Awaits</em>
          </h2>
          <p style={{ color:'rgba(255,255,255,0.72)', fontSize:15, lineHeight:1.75, marginBottom:32, maxWidth:540, margin:'0 auto 32px' }}>
            Speak with our yatra experts today. Limited seats per batch — book early for the best dates and pricing.
          </p>
          <div style={{ display:'flex', justifyContent:'center', gap:12, flexWrap:'wrap', marginBottom:44 }}>
            <a href={`tel:${SITE.phone}`} style={{ display:'inline-flex', alignItems:'center', gap:8, background:'#fff', color:'var(--navy)', padding:'14px 28px', borderRadius:'var(--r-sm)', fontWeight:700, fontSize:14, textDecoration:'none', boxShadow:'var(--shadow-lg)', transition:'transform var(--t)' }}>
              📞 {SITE.phone}
            </a>
            <a href={`https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent('Namaste! I want to book Char Dham Yatra 2025.')}`} target="_blank" rel="noopener noreferrer"
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
