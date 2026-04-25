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
        {/* Subtle grain */}
        <div style={{ position:'absolute', inset:0, opacity:0.03, backgroundImage:'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'n\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.85\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23n)\'/%3E%3C/svg%3E")', pointerEvents:'none' }} aria-hidden="true"/>

        {/* Offer badge — top right */}
        <div style={{ position:'absolute', top:24, right:24, background:'linear-gradient(135deg,#E8920A,#f5a623)', borderRadius:14, padding:'10px 16px', zIndex:2, maxWidth:170, textAlign:'center', border:'1px solid rgba(255,255,255,0.25)', boxShadow:'0 4px 20px rgba(232,146,10,0.4)' }}>
          <div style={{ fontSize:10, fontWeight:700, color:'rgba(255,255,255,0.85)', letterSpacing:'0.1em', textTransform:'uppercase' }}>🔥 Early Bird</div>
          <div style={{ fontSize:16, fontWeight:800, color:'#fff', lineHeight:1.1, margin:'3px 0' }}>10% OFF</div>
          <div style={{ fontSize:10, color:'rgba(255,255,255,0.8)' }}>Book 60 days ahead</div>
        </div>

        {/* Season badge — top left */}
        <div style={{ position:'absolute', top:24, left:24, background:'rgba(255,255,255,0.1)', backdropFilter:'blur(10px)', borderRadius:14, padding:'10px 16px', border:'1px solid rgba(255,255,255,0.2)', zIndex:2, textAlign:'center' }}>
          <div style={{ fontSize:10, fontWeight:700, color:'#4ade80', letterSpacing:'0.08em' }}>● SEASON OPEN</div>
          <div style={{ fontSize:13, fontWeight:700, color:'#fff', marginTop:2 }}>Apr 19 – Nov 13</div>
        </div>

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
              <span style={{ width:6, height:6, background:'#FFD166', borderRadius:'50%' }}/>
              2026 Season Open · Apr 19 – Nov 13
            </div>

            {/* Hero headline */}
            <h1 className="display-title" style={{
              color:'#fff', fontSize:'clamp(2.2rem, 5.5vw, 4rem)',
              fontWeight:600, marginBottom:18, lineHeight:1.08,
            }}>
              Char Dham Yatra Package 2026<br/>
              <em style={{ fontStyle:'italic', color:'#FFD166', fontWeight:700 }}>from Haridwar &amp; Delhi</em>
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

            {/* Trust row */}
            <div style={{ display:'flex', justifyContent:'center', gap:22, flexWrap:'wrap', marginTop:24, fontSize:12, color:'rgba(255,255,255,0.65)' }}>
              {['✓ No hidden charges','✓ VIP darshan included','✓ 24/7 yatra support','✓ Free cancellation 30 days'].map(t=>(
                <span key={t} style={{ whiteSpace:'nowrap' }}>{t}</span>
              ))}
            </div>

            {/* Offer pills — static, no animation */}
            <div style={{ display:'flex', justifyContent:'center', gap:10, flexWrap:'wrap', marginTop:20 }}>
              {[
                { emoji:'🔥', text:'10% Early Bird — Book 60 days ahead' },
                { emoji:'👴', text:'Senior Special — Pony included' },
                { emoji:'🚁', text:'Same-day Kedarnath + Badrinath by heli' },
              ].map(o => (
                <div key={o.text} style={{
                  display:'inline-flex', alignItems:'center', gap:7,
                  background:'rgba(255,255,255,0.08)',
                  backdropFilter:'blur(8px)',
                  border:'1px solid rgba(255,255,255,0.18)',
                  borderRadius:100, padding:'6px 14px',
                  fontSize:12, color:'#fff', fontWeight:500,
                }}>
                  <span>{o.emoji}</span>
                  <span>{o.text}</span>
                </div>
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
          CAB SECTION HERO
      ═══════════════════════════════════════════════ */}
      <section style={{ background:'linear-gradient(135deg,#1a1a2e 0%,#16213e 50%,#0f3460 100%)', padding:'52px 20px' }}>
        <div style={{ maxWidth:'var(--container)', margin:'0 auto' }}>
          <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:40, alignItems:'center' }}>

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
                  target="_blank" rel="noopener noreferrer"
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

      {/* ═══ CONTENT FUNNEL ═══ */}
      <ScrollReveal as="section" style={{ background:'var(--bg)', padding:'52px 0' }}>
        <div style={{ maxWidth:'var(--container)', margin:'0 auto', padding:'0 20px' }}>
          <div style={{ textAlign:'center', marginBottom:32 }}>
            <span className="section-tag">Plan Your Perfect Yatra</span>
            <h2 className="section-title">Not Sure Where to Start? <em>We&apos;ll Guide You</em></h2>
          </div>
          <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(240px,1fr))', gap:20 }}>
            <div style={{ background:'var(--navy-light)', borderRadius:16, padding:'24px', border:'1px solid rgba(15,43,91,0.1)' }}>
              <div style={{ display:'flex', alignItems:'center', gap:10, marginBottom:16 }}>
                <div style={{ width:36, height:36, background:'var(--navy)', borderRadius:'50%', display:'flex', alignItems:'center', justifyContent:'center', color:'#fff', fontWeight:800, fontSize:16 }}>1</div>
                <div style={{ fontWeight:700, fontSize:15, color:'var(--navy)' }}>Learn &amp; Plan</div>
              </div>
              <p style={{ fontSize:13.5, color:'var(--text-mid)', lineHeight:1.65, marginBottom:16 }}>New to Char Dham Yatra? Understand the route, best time, costs, and what to expect before booking.</p>
              <div style={{ display:'flex', flexDirection:'column', gap:7 }}>
                {[
                  {label:'Complete Yatra Guide',href:'/char-dham-yatra-2025'},
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
                  target="_blank" rel="noopener noreferrer"
                  style={{ background:'#25D366', color:'#fff', padding:'11px 16px', borderRadius:9, fontWeight:700, fontSize:13.5, textDecoration:'none', textAlign:'center' }}>
                  💬 Start on WhatsApp
                </a>
                <a href={`tel:${SITE.phone}`}
                  style={{ background:'rgba(255,255,255,0.15)', color:'#fff', padding:'10px 16px', borderRadius:9, fontWeight:600, fontSize:13, textDecoration:'none', textAlign:'center', border:'1px solid rgba(255,255,255,0.25)' }}>
                  📞 {SITE.phone}
                </a>
              </div>
            </div>
          </div>
        </div>
      </ScrollReveal>

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


      {/* ═══ FULL SITE DIRECTORY ═══ */}
      <ScrollReveal as="section" style={{ background:'var(--bg)', padding:'56px 0' }}>
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
            <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fill,minmax(180px,1fr))', gap:10 }}>
              {[
                { img:'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/Kedarnathji-mandir.JPG/400px-Kedarnathji-mandir.JPG', title:'Char Dham Yatra', desc:'All 4 dhams · From ₹19,500', href:'/char-dham-yatra' },
                { img:'https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Badrinath_Temple_%28front_view%29.jpg/400px-Badrinath_Temple_%28front_view%29.jpg', title:'Do Dham Yatra', desc:'Kedarnath + Badrinath', href:'/do-dham-yatra' },
                { img:'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/Kedarnathji-mandir.JPG/400px-Kedarnathji-mandir.JPG', title:'Kedarnath Yatra', desc:'3N/4D · From ₹6,499', href:'/kedarnath-yatra' },
                { img:'https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Badrinath_Temple_%28front_view%29.jpg/400px-Badrinath_Temple_%28front_view%29.jpg', title:'Badrinath Yatra', desc:'2N/3D · From ₹5,999', href:'/blog/badrinath-yatra-guide' },
                { img:'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Gangotri_temple.jpg/400px-Gangotri_temple.jpg', title:'Gangotri Yatra', desc:'2N/3D · From ₹5,299', href:'/gangotri-yatra' },
                { img:'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Yamunotri_Temple.jpg/400px-Yamunotri_Temple.jpg', title:'Yamunotri Yatra', desc:'2N/3D · From ₹5,499', href:'/yamunotri-yatra' },
                { img:'https://images.pexels.com/photos/1544931/pexels-photo-1544931.jpeg?auto=compress&cs=tinysrgb&w=400&h=260&fit=crop', title:'Helicopter Package', desc:'All 4 dhams in 6 days', href:'/char-dham-helicopter' },
                { img:'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/Kedarnathji-mandir.JPG/400px-Kedarnathji-mandir.JPG', title:'Panch Kedar Yatra', desc:'5 Shiva temples · 8N/9D', href:'/panch-kedar-yatra' },
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
                target="_blank" rel="noopener noreferrer"
                style={{ background:'#25D366', color:'#fff', padding:'10px 20px', borderRadius:9, fontWeight:700, fontSize:13.5, textDecoration:'none' }}>
                💬 WhatsApp
              </a>
              <a href={`tel:${SITE.phone}`}
                style={{ background:'rgba(255,255,255,0.12)', color:'#fff', padding:'10px 20px', borderRadius:9, fontWeight:700, fontSize:13.5, textDecoration:'none', border:'1px solid rgba(255,255,255,0.2)' }}>
                📞 {SITE.phone}
              </a>
            </div>
          </div>
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
