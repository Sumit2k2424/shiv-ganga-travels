import Link from 'next/link';
import { PACKAGES, SITE, getFeaturedPackages } from '@/data/packages';
import HeroSearch from '@/components/HeroSearch';

export const metadata = {
  title:`${SITE.name} — Char Dham Yatra Packages 2025`,
  description:'Book Char Dham, Do Dham & Single Dham Yatra from Haridwar. VIP darshan, expert guides, all-inclusive. Trusted since 2010.',
};

function Schema() {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
    '@context':'https://schema.org','@type':'TravelAgency',
    name:SITE.name, url:SITE.baseUrl, telephone:SITE.phone,
    address:{'@type':'PostalAddress',addressLocality:'Haridwar',addressRegion:'Uttarakhand',addressCountry:'IN'},
    foundingDate:String(SITE.established),
    aggregateRating:{'@type':'AggregateRating',ratingValue:'4.9',reviewCount:'850'},
  })}}/>;
}

/* ─── Inline package card for homepage scroll rows ─── */
function PkgCard({ pkg }) {
  const ICONS = { kedarnath:'🏔️', badrinath:'🕌', yamunotri:'🌊', gangotri:'🌿', helicopter:'🚁' };
  const icon  = ICONS[pkg.images?.[0]] || '🙏';
  const icon2 = ICONS[pkg.images?.[1]] || '';
  const savings = pkg.price.original - pkg.price.discounted;

  return (
    <Link href={`/packages/${pkg.slug}`} className="pkg-card"
      style={{ display:'flex', flexDirection:'column', background:'#fff', borderRadius:12, overflow:'hidden', border:'1px solid var(--border)', minWidth:230, maxWidth:260, flex:'0 0 245px', textDecoration:'none', color:'inherit', boxShadow:'var(--shadow)' }}>
      <div style={{ height:148, background:'linear-gradient(135deg,#07142A 0%,#0D2748 35%,#1260CC 75%,#06B6D4 100%)', display:'flex', alignItems:'center', justifyContent:'center', gap:12, fontSize:40, position:'relative', flexShrink:0 }}>
        <div style={{ position:'absolute', inset:0, background:'linear-gradient(135deg,rgba(255,255,255,0.06) 0%,transparent 60%)' }}/>
        <span>{icon}</span>{icon2 && <span>{icon2}</span>}
        {pkg.badge && <span style={{ position:'absolute', top:9, left:9, background:'var(--blue)', color:'#fff', fontSize:10, fontWeight:700, padding:'3px 9px', borderRadius:20 }}>{pkg.badge}</span>}
        <span style={{ position:'absolute', bottom:9, right:9, background:'rgba(0,0,0,0.3)', color:'#fff', fontSize:10, padding:'3px 8px', borderRadius:8, backdropFilter:'blur(4px)' }}>{pkg.duration.nights}N</span>
      </div>
      <div style={{ padding:'12px 14px', flex:1, display:'flex', flexDirection:'column' }}>
        <div style={{ fontSize:11, color:'var(--muted)', marginBottom:3 }}>📍 {pkg.startCity} · {pkg.transport}</div>
        <div style={{ fontWeight:700, fontSize:14, color:'var(--text)', lineHeight:1.3, marginBottom:8, flex:1 }}>{pkg.name}</div>
        <div style={{ display:'flex', justifyContent:'space-between', alignItems:'flex-end', marginTop:'auto' }}>
          <div>
            <div style={{ fontSize:11, color:'var(--muted)', textDecoration:'line-through' }}>₹{pkg.price.original.toLocaleString('en-IN')}</div>
            <div style={{ fontWeight:700, fontSize:18, color:'var(--blue)', lineHeight:1 }}>₹{pkg.price.discounted.toLocaleString('en-IN')}/-</div>
            {savings > 0 && <div style={{ fontSize:10, color:'var(--green)', fontWeight:600 }}>Save ₹{savings.toLocaleString('en-IN')}</div>}
          </div>
          <span className="btn-primary" style={{ fontSize:11, padding:'7px 13px' }}>Book Now</span>
        </div>
      </div>
    </Link>
  );
}

/* ─── Dham destination tile ─── */
function DhamTile({ name, emoji, href }) {
  return (
    <Link href={href} style={{ display:'flex', flexDirection:'column', alignItems:'center', gap:8, textDecoration:'none', color:'inherit', flex:'0 0 auto', minWidth:88 }}>
      <div className="dham-circle">{emoji}</div>
      <span style={{ fontSize:12, fontWeight:600, color:'var(--mid)', textAlign:'center', lineHeight:1.3 }}>{name}</span>
    </Link>
  );
}

/* ─── Stat strip item ─── */
function Stat({ icon, value, label, border }) {
  return (
    <div style={{ flex:'1 1 0', textAlign:'center', padding:'18px 10px', borderRight: border ? '1px solid rgba(255,255,255,0.15)' : 'none' }}>
      <div style={{ fontSize:22, marginBottom:4 }}>{icon}</div>
      <div style={{ color:'#fff', fontWeight:700, fontSize:22, lineHeight:1 }}>{value}</div>
      <div style={{ color:'rgba(255,255,255,0.65)', fontSize:11, marginTop:4, fontWeight:400 }}>{label}</div>
    </div>
  );
}

const charDham   = PACKAGES.filter(p => p.category === 'char-dham');
const doDham     = PACKAGES.filter(p => p.category === 'do-dham');
const singleDham = PACKAGES.filter(p => p.category === 'single-dham');

export default function HomePage() {
  return (
    <>
      <Schema />

      {/* ═══════════════════════════════════════════════════
          HERO — deep ocean gradient + wave bottom + search
      ═══════════════════════════════════════════════════ */}
      <section style={{ position:'relative', background:'linear-gradient(145deg,#07142A 0%,#0D2748 30%,#1260CC 65%,#06B6D4 100%)', padding:'60px 16px 100px', overflow:'hidden' }}>

        {/* Decorative circles */}
        <div style={{ position:'absolute', top:'-80px', right:'-80px', width:340, height:340, borderRadius:'50%', background:'rgba(6,182,212,0.08)', pointerEvents:'none' }} aria-hidden="true"/>
        <div style={{ position:'absolute', bottom:'60px', left:'-60px', width:240, height:240, borderRadius:'50%', background:'rgba(18,96,204,0.15)', pointerEvents:'none' }} aria-hidden="true"/>

        <div style={{ maxWidth:1200, margin:'0 auto', position:'relative', zIndex:1 }}>
          {/* Headline */}
          <div style={{ textAlign:'center', marginBottom:32 }}>
            <span style={{ background:'rgba(6,182,212,0.2)', color:'var(--cyan)', fontSize:11, fontWeight:600, letterSpacing:'0.12em', textTransform:'uppercase', padding:'5px 16px', borderRadius:20, display:'inline-block', marginBottom:14, border:'1px solid rgba(6,182,212,0.3)' }}>
              ✦ Char Dham Yatra Specialist Since {SITE.established}
            </span>
            <h1 style={{ color:'#fff', fontWeight:700, fontSize:'clamp(1.8rem,5vw,3rem)', lineHeight:1.2, marginBottom:12, letterSpacing:'-0.02em' }}>
              Book <span style={{ color:'var(--cyan)' }}>Char Dham Yatra</span> Packages 2025
            </h1>
            <p style={{ color:'rgba(255,255,255,0.75)', fontSize:15, maxWidth:560, margin:'0 auto' }}>
              Yamunotri · Gangotri · Kedarnath · Badrinath &nbsp;|&nbsp; Starting ₹4,500/person &nbsp;|&nbsp; All Inclusive
            </p>
          </div>

          {/* Search widget */}
          <HeroSearch />
        </div>

        {/* Wave divider */}
        <div style={{ position:'absolute', bottom:0, left:0, right:0, lineHeight:0 }} aria-hidden="true">
          <svg viewBox="0 0 1440 54" preserveAspectRatio="none" style={{ display:'block', width:'100%', height:54 }}>
            <path d="M0,32 C360,54 1080,10 1440,32 L1440,54 L0,54 Z" fill="var(--bg)"/>
          </svg>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          STATS STRIP — ocean blue bar
      ═══════════════════════════════════════════════════ */}
      <div style={{ background:'linear-gradient(90deg,var(--blue) 0%,var(--cyan-dark) 100%)' }}>
        <div style={{ maxWidth:1200, margin:'0 auto', display:'flex' }}>
          <Stat icon="🏆" value="15+"      label="Years of Trust"   border />
          <Stat icon="🙏" value="50,000+"  label="Happy Pilgrims"   border />
          <Stat icon="⭐" value="4.9/5"    label="Google Rating"    border />
          <Stat icon="🛡️" value="100%"     label="Safe Journeys" />
        </div>
      </div>

      {/* ═══════════════════════════════════════════════════
          ZERO COMMISSION TRUST BANNER
      ═══════════════════════════════════════════════════ */}
      <section style={{ background:'#fff', borderBottom:'1px solid var(--border)', borderTop:'1px solid var(--border)' }}>
        <div style={{ maxWidth:1200, margin:'0 auto', padding:'0 16px' }}>
          <div style={{ display:'flex', alignItems:'center', flexWrap:'wrap', gap:0, overflow:'hidden' }}>

            {/* Left — Bold headline */}
            <div style={{ flex:'0 0 auto', background:'var(--deep)', padding:'18px 28px', display:'flex', alignItems:'center', gap:14 }}>
              <span style={{ fontSize:28 }}>🚫</span>
              <div>
                <div style={{ color:'var(--cyan)', fontWeight:800, fontSize:17, letterSpacing:'-0.02em', lineHeight:1.1 }}>
                  ZERO COMMISSION
                </div>
                <div style={{ color:'rgba(255,255,255,0.6)', fontSize:11, fontWeight:500, letterSpacing:'0.08em', textTransform:'uppercase', marginTop:2 }}>
                  No middleman. No markup.
                </div>
              </div>
            </div>

            {/* Divider arrow */}
            <div style={{ width:0, height:0, borderTop:'38px solid transparent', borderBottom:'38px solid transparent', borderLeft:'20px solid var(--deep)', flexShrink:0 }} aria-hidden="true"/>

            {/* Middle — Trust chips */}
            <div style={{ flex:1, display:'flex', alignItems:'center', gap:0, overflowX:'auto', padding:'0 4px' }}>
              {[
                { icon:'💸', text:'Pay the operator directly', sub:'No agency commissions ever' },
                { icon:'🤝', text:'We are the operator',       sub:'15 years, same family business' },
                { icon:'📋', text:'Price transparency',         sub:'Full breakdown before booking' },
                { icon:'💰', text:'Lowest price guarantee',    sub:'We match any genuine quote' },
              ].map((item, i) => (
                <div key={item.text} style={{
                  display:'flex', alignItems:'center', gap:10, padding:'14px 18px',
                  borderRight: i < 3 ? '1px solid var(--border)' : 'none',
                  flexShrink:0,
                }}>
                  <span style={{ fontSize:20, flexShrink:0 }}>{item.icon}</span>
                  <div>
                    <div style={{ fontWeight:700, fontSize:12.5, color:'var(--text)', whiteSpace:'nowrap' }}>{item.text}</div>
                    <div style={{ fontSize:11, color:'var(--muted)', marginTop:1, whiteSpace:'nowrap' }}>{item.sub}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Right CTA */}
            <div style={{ flexShrink:0, padding:'14px 20px', borderLeft:'1px solid var(--border)' }}>
              <a href={`tel:${SITE.phone}`}
                style={{ display:'flex', flexDirection:'column', alignItems:'center', gap:2, textDecoration:'none' }}>
                <span style={{ fontSize:18 }}>📞</span>
                <span style={{ fontWeight:700, fontSize:13, color:'var(--blue)', whiteSpace:'nowrap' }}>{SITE.phone}</span>
                <span style={{ fontSize:10, color:'var(--muted)' }}>Call us direct</span>
              </a>
            </div>

          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          PROMO BANNERS — horizontal scroll, ocean theme
      ═══════════════════════════════════════════════════ */}
      <section style={{ background:'var(--bg)', padding:'28px 0 12px' }}>
        <div style={{ maxWidth:1200, margin:'0 auto', padding:'0 16px' }}>
          <div className="hscroll" style={{ gap:14 }}>
            {[
              { label:'🚁 Helicopter Package',  sub:'All 4 Dhams in 6 Days',   href:'/packages/char-dham-helicopter-5n-6d',       bg:'linear-gradient(120deg,#07142A,#1260CC)' },
              { label:'👴 Senior Special',       sub:'Slow-paced 14N/15D',      href:'/packages/char-dham-senior-citizen-14n-15d', bg:'linear-gradient(120deg,#0D2748,#0891B2)' },
              { label:'🏔️ Char Dham Classic',   sub:'11N/12D — ₹18,500',       href:'/packages/char-dham-classic-11n-12d',        bg:'linear-gradient(120deg,#063020,#0D7A45)' },
              { label:'🕌 Kedarnath–Badrinath', sub:'Best Value — ₹9,999',     href:'/packages/kedarnath-badrinath-5n-6d',        bg:'linear-gradient(120deg,#1a0a42,#5B21B6)' },
              { label:'🌊 Yamunotri–Gangotri',  sub:'4N/5D — ₹8,500',          href:'/packages/yamunotri-gangotri-4n-5d',         bg:'linear-gradient(120deg,#072033,#065F80)' },
            ].map(b => (
              <Link key={b.href} href={b.href} className="promo-card"
                style={{ flex:'0 0 272px', height:108, background:b.bg, borderRadius:12, display:'flex', flexDirection:'column', justifyContent:'center', padding:'0 20px', textDecoration:'none', boxShadow:'var(--shadow)' }}>
                <div style={{ color:'#fff', fontWeight:700, fontSize:15 }}>{b.label}</div>
                <div style={{ color:'rgba(255,255,255,0.75)', fontSize:12, marginTop:4 }}>{b.sub}</div>
                <div style={{ color:'var(--cyan)', fontSize:11, marginTop:8, fontWeight:600 }}>View Package →</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          CHAR DHAM PACKAGES
      ═══════════════════════════════════════════════════ */}
      <section style={{ background:'var(--bg)', padding:'28px 0 20px' }}>
        <div style={{ maxWidth:1200, margin:'0 auto', padding:'0 16px' }}>
          <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center', marginBottom:16 }}>
            <h2 className="section-title" style={{ marginBottom:0 }}><span>Char Dham</span> Yatra Packages</h2>
            <Link href="/packages/char-dham" className="view-all">View All →</Link>
          </div>
          <div className="hscroll">{charDham.map(p => <PkgCard key={p.slug} pkg={p}/>)}</div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          DO DHAM PACKAGES — white bg alternation
      ═══════════════════════════════════════════════════ */}
      <section style={{ background:'#fff', padding:'28px 0 20px' }}>
        <div style={{ maxWidth:1200, margin:'0 auto', padding:'0 16px' }}>
          <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center', marginBottom:16 }}>
            <h2 className="section-title" style={{ marginBottom:0 }}><span>Do Dham</span> Yatra Packages</h2>
            <Link href="/packages/do-dham" className="view-all">View All →</Link>
          </div>
          <div className="hscroll">{doDham.map(p => <PkgCard key={p.slug} pkg={p}/>)}</div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          SINGLE DHAM PACKAGES
      ═══════════════════════════════════════════════════ */}
      <section style={{ background:'var(--bg)', padding:'28px 0 20px' }}>
        <div style={{ maxWidth:1200, margin:'0 auto', padding:'0 16px' }}>
          <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center', marginBottom:16 }}>
            <h2 className="section-title" style={{ marginBottom:0 }}><span>Single Dham</span> Packages</h2>
            <Link href="/packages/single-dham" className="view-all">View All →</Link>
          </div>
          <div className="hscroll">{singleDham.map(p => <PkgCard key={p.slug} pkg={p}/>)}</div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          EXPLORE DESTINATIONS — ocean-themed tiles
      ═══════════════════════════════════════════════════ */}
      <section style={{ background:'#fff', padding:'32px 0 28px' }}>
        <div style={{ maxWidth:1200, margin:'0 auto', padding:'0 16px' }}>
          <h2 className="section-title">Explore <span>Char Dham</span> Destinations</h2>
          <div style={{ display:'flex', gap:24, flexWrap:'wrap', justifyContent:'center' }}>
            <DhamTile name="Yamunotri"    emoji="🌊" href="/packages/yamunotri-2n-3d"/>
            <DhamTile name="Gangotri"     emoji="🌿" href="/packages/gangotri-2n-3d"/>
            <DhamTile name="Kedarnath"    emoji="🏔️" href="/packages/kedarnath-3n-4d"/>
            <DhamTile name="Badrinath"    emoji="🕌" href="/packages/badrinath-2n-3d"/>
            <DhamTile name="Haridwar"     emoji="🙏" href="/contact"/>
            <DhamTile name="Rishikesh"    emoji="🌊" href="/contact"/>
            <DhamTile name="Mana Village" emoji="🏘️" href="/packages/badrinath-2n-3d"/>
            <DhamTile name="Helicopter"   emoji="🚁" href="/packages/char-dham-helicopter-5n-6d"/>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          WHY CHOOSE US — ocean card grid
      ═══════════════════════════════════════════════════ */}
      <section style={{ background:'var(--bg)', padding:'32px 0 28px' }}>
        <div style={{ maxWidth:1200, margin:'0 auto', padding:'0 16px' }}>
          <h2 className="section-title">Why <span>Shiv Ganga Travels</span>?</h2>
          <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fill,minmax(190px,1fr))', gap:14 }}>
            {[
              { icon:'🎫', title:'VIP Darshan',      desc:'Skip-the-line priority at all four dhams.' },
              { icon:'🏔️', title:'Expert Guides',    desc:'Local Garhwali guides with 10+ years on route.' },
              { icon:'🚌', title:'AC Vehicles',      desc:'Well-maintained vehicles, trained mountain drivers.' },
              { icon:'🍱', title:'Sattvic Meals',    desc:'Pure vegetarian meals at every stop, included.' },
              { icon:'💊', title:'Medical Support',  desc:'Oxygen cylinder and first aid on every vehicle.' },
              { icon:'💰', title:'No Hidden Costs',  desc:'100% transparent pricing, no surprises ever.' },
            ].map(w => (
              <div key={w.title} style={{ background:'#fff', borderRadius:12, padding:'16px', border:'1px solid var(--border)', display:'flex', gap:12, alignItems:'flex-start', boxShadow:'var(--shadow)' }}>
                <div style={{ width:38, height:38, background:'var(--blue-light)', borderRadius:10, display:'flex', alignItems:'center', justifyContent:'center', fontSize:20, flexShrink:0 }}>{w.icon}</div>
                <div>
                  <div style={{ fontWeight:700, fontSize:13, color:'var(--text)', marginBottom:3 }}>{w.title}</div>
                  <div style={{ fontSize:12, color:'var(--muted)', lineHeight:1.5 }}>{w.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          FEATURED DEALS — DPauls "Holiday Deal Packages"
      ═══════════════════════════════════════════════════ */}
      <section style={{ background:'#fff', padding:'28px 0 28px' }}>
        <div style={{ maxWidth:1200, margin:'0 auto', padding:'0 16px' }}>
          <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center', marginBottom:16 }}>
            <h2 className="section-title" style={{ marginBottom:0 }}>Featured <span>Yatra Deals</span></h2>
            <Link href="/packages" className="view-all">All Packages →</Link>
          </div>
          <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fill,minmax(240px,1fr))', gap:16 }}>
            {getFeaturedPackages().map(pkg => {
              const ICONS2 = { kedarnath:'🏔️', badrinath:'🕌', yamunotri:'🌊', gangotri:'🌿', helicopter:'🚁' };
              const ic = ICONS2[pkg.images?.[0]] || '🙏';
              return (
                <Link key={pkg.slug} href={`/packages/${pkg.slug}`} className="pkg-card"
                  style={{ display:'flex', flexDirection:'column', background:'#fff', border:'1px solid var(--border)', textDecoration:'none', color:'inherit', boxShadow:'var(--shadow)' }}>
                  <div style={{ height:170, background:'linear-gradient(135deg,#07142A 0%,#0D2748 35%,#1260CC 75%,#06B6D4 100%)', display:'flex', alignItems:'center', justifyContent:'center', fontSize:52, position:'relative' }}>
                    <div style={{ position:'absolute', inset:0, background:'linear-gradient(135deg,rgba(255,255,255,0.06) 0%,transparent 60%)' }}/>
                    <span style={{ position:'relative' }}>{ic}</span>
                    {pkg.badge && <span style={{ position:'absolute', top:11, left:11, background:'var(--blue)', color:'#fff', fontSize:10, fontWeight:700, padding:'4px 10px', borderRadius:20 }}>{pkg.badge}</span>}
                  </div>
                  <div style={{ padding:'14px' }}>
                    <div style={{ fontSize:11, color:'var(--muted)', marginBottom:4 }}>→ {pkg.duration.nights} Nights</div>
                    <div style={{ fontWeight:700, fontSize:14, color:'var(--text)', marginBottom:6 }}>{pkg.name}</div>
                    <div style={{ fontWeight:700, fontSize:18, color:'var(--blue)' }}>₹{pkg.price.discounted.toLocaleString('en-IN')}/-</div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          CTA BANNER — deep ocean gradient
      ═══════════════════════════════════════════════════ */}
      <section style={{ background:'linear-gradient(135deg,#07142A 0%,#0D2748 40%,#1260CC 80%,#06B6D4 100%)', padding:'52px 16px', textAlign:'center', position:'relative', overflow:'hidden' }}>
        {/* Decorative circles */}
        <div style={{ position:'absolute', top:'-40px', right:'-40px', width:200, height:200, borderRadius:'50%', background:'rgba(6,182,212,0.1)', pointerEvents:'none' }} aria-hidden="true"/>
        <div style={{ position:'absolute', bottom:'-50px', left:'10%', width:160, height:160, borderRadius:'50%', background:'rgba(255,255,255,0.04)', pointerEvents:'none' }} aria-hidden="true"/>

        <div style={{ maxWidth:680, margin:'0 auto', position:'relative', zIndex:1 }}>
          <span style={{ background:'rgba(6,182,212,0.2)', color:'var(--cyan)', fontSize:11, fontWeight:600, letterSpacing:'0.12em', textTransform:'uppercase', padding:'5px 16px', borderRadius:20, display:'inline-block', marginBottom:16, border:'1px solid rgba(6,182,212,0.3)' }}>
            Season Open: May–June &amp; Sept–Oct 2025
          </span>
          <h2 style={{ color:'#fff', fontWeight:700, fontSize:'clamp(1.4rem,3.5vw,2rem)', marginBottom:12, letterSpacing:'-0.01em' }}>
            Ready to Begin Your Sacred Journey?
          </h2>
          <p style={{ color:'rgba(255,255,255,0.75)', fontSize:14, marginBottom:28, lineHeight:1.7 }}>
            Speak with our yatra experts today. Limited seats per batch — book early to secure yours.
          </p>
          <div style={{ display:'flex', justifyContent:'center', gap:12, flexWrap:'wrap' }}>
            <a href={`tel:${SITE.phone}`}
              style={{ background:'#fff', color:'var(--blue)', padding:'12px 28px', borderRadius:10, fontWeight:700, fontSize:14, textDecoration:'none', boxShadow:'0 4px 20px rgba(0,0,0,0.25)', display:'inline-flex', alignItems:'center', gap:6 }}>
              📞 {SITE.phone}
            </a>
            <a href={`https://wa.me/${SITE.whatsapp}?text=Namaste! I want to book a Char Dham Yatra 2025.`} target="_blank" rel="noopener noreferrer"
              style={{ background:'#25D366', color:'#fff', padding:'12px 28px', borderRadius:10, fontWeight:700, fontSize:14, textDecoration:'none', display:'inline-flex', alignItems:'center', gap:6 }}>
              💬 WhatsApp Us
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
