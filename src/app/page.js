import Link from 'next/link';
import { PACKAGES, SITE, TESTIMONIALS, GLOBAL_FAQS, TRUST, getFeaturedPackages } from '@/data/packages';
import HeroSearch from '@/components/HeroSearch';
import ScrollReveal from '@/components/ScrollReveal';
import CounterStat from '@/components/CounterStat';
import FAQAccordion from '@/components/FAQAccordion';
import TestimonialSlider from '@/components/TestimonialSlider';

export const metadata = {
  title:`${SITE.name} — Char Dham Yatra Packages 2025 from Haridwar`,
  description:'Book Char Dham, Do Dham & Single Dham Yatra packages from Haridwar. Zero commission, VIP darshan, expert guides, all-inclusive. Trusted since 2010 by 50,000+ pilgrims.',
  openGraph: {
    title: `${SITE.name} — Premium Char Dham Yatra 2025`,
    description: 'Yamunotri · Gangotri · Kedarnath · Badrinath. 15 years, 50,000+ happy pilgrims.',
    images: ['https://images.unsplash.com/photo-1591189863345-9db058f9f8ec?auto=format&fit=crop&w=1200&q=70'],
  },
};

/* SCHEMA */
function Schema() {
  const travelAgency = {
    '@context':'https://schema.org','@type':'TravelAgency',
    name:SITE.name, url:SITE.baseUrl, telephone:SITE.phone, email:SITE.email,
    address:{'@type':'PostalAddress',streetAddress:'Near Har Ki Pauri',addressLocality:'Haridwar',addressRegion:'Uttarakhand',postalCode:'249401',addressCountry:'IN'},
    foundingDate:String(SITE.established),
    aggregateRating:{'@type':'AggregateRating',ratingValue:'4.9',reviewCount:'850',bestRating:'5'},
    priceRange:'₹₹',
    description:'Trusted Char Dham Yatra operator since 2010. 50,000+ happy pilgrims.',
    sameAs:[`https://wa.me/${SITE.whatsapp}`],
  };
  const reviewSchema = {
    '@context':'https://schema.org','@type':'ItemList',
    itemListElement: TESTIMONIALS.map((t, i) => ({
      '@type':'ListItem', position: i + 1,
      item: {
        '@type':'Review',
        reviewRating: { '@type':'Rating', ratingValue: t.rating, bestRating: 5 },
        author: { '@type':'Person', name: t.name },
        datePublished: t.date,
        reviewBody: t.text,
      },
    })),
  };
  const faqSchema = {
    '@context':'https://schema.org','@type':'FAQPage',
    mainEntity: GLOBAL_FAQS.map(f => ({
      '@type':'Question', name: f.q,
      acceptedAnswer: { '@type':'Answer', text: f.a },
    })),
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(travelAgency) }}/>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }}/>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}/>
    </>
  );
}

/* INLINE PACKAGE CARD */
function PkgCard({ pkg }) {
  const savings = pkg.price.original - pkg.price.discounted;
  return (
    <Link href={`/packages/${pkg.slug}`} className="pkg-card"
      style={{ display:'flex', flexDirection:'column', background:'#fff', borderRadius:14, overflow:'hidden', border:'1px solid var(--border)', minWidth:230, maxWidth:270, flex:'0 0 250px', textDecoration:'none', color:'inherit', boxShadow:'var(--shadow)' }}>
      <div style={{ height:160, position:'relative', overflow:'hidden', flexShrink:0 }}>
        <div className="pkg-img" style={{
          position:'absolute', inset:0,
          backgroundImage: pkg.photo
            ? `linear-gradient(to bottom,rgba(7,20,42,0.12) 0%,rgba(7,20,42,0.78) 100%), url('${pkg.photo}')`
            : 'linear-gradient(135deg,#07142A 0%,#1260CC 75%,#06B6D4 100%)',
          backgroundSize:'cover', backgroundPosition:'center',
        }}/>
        {pkg.badge && <span style={{ position:'absolute', top:10, left:10, background:'var(--blue)', color:'#fff', fontSize:10, fontWeight:700, padding:'3px 10px', borderRadius:20, zIndex:2, boxShadow:'0 2px 8px rgba(18,96,204,0.4)' }}>{pkg.badge}</span>}
        <span style={{ position:'absolute', top:10, right:10, background:'rgba(0,0,0,0.45)', color:'#fff', fontSize:10, fontWeight:600, padding:'3px 9px', borderRadius:8, zIndex:2, backdropFilter:'blur(6px)' }}>{pkg.duration.nights}N/{pkg.duration.days}D</span>
        <div style={{ position:'absolute', bottom:12, left:12, right:12, zIndex:2 }}>
          <h3 style={{ color:'#fff', fontWeight:700, fontSize:13.5, lineHeight:1.3, textShadow:'0 1px 6px rgba(0,0,0,0.7)' }}>{pkg.name}</h3>
        </div>
      </div>
      <div style={{ padding:'14px', flex:1, display:'flex', flexDirection:'column' }}>
        <div style={{ fontSize:11, color:'var(--muted)', marginBottom:8 }}>📍 {pkg.startCity} · 🚌 {pkg.transport}</div>
        <div style={{ display:'flex', justifyContent:'space-between', alignItems:'flex-end', marginTop:'auto' }}>
          <div>
            <div style={{ fontSize:10.5, color:'var(--muted)', textDecoration:'line-through' }}>₹{pkg.price.original.toLocaleString('en-IN')}</div>
            <div style={{ fontWeight:800, fontSize:19, color:'var(--blue)', lineHeight:1, letterSpacing:'-0.02em' }}>₹{pkg.price.discounted.toLocaleString('en-IN')}</div>
            {savings > 0 && <div style={{ fontSize:10, color:'var(--green)', fontWeight:600, marginTop:2 }}>Save ₹{savings.toLocaleString('en-IN')}</div>}
          </div>
          <span className="btn-primary" style={{ fontSize:11, padding:'7px 13px' }}>Book →</span>
        </div>
      </div>
    </Link>
  );
}

function DhamTile({ name, emoji, href, sub }) {
  return (
    <Link href={href} style={{ display:'flex', flexDirection:'column', alignItems:'center', gap:10, textDecoration:'none', color:'inherit', flex:'0 0 auto', minWidth:100 }}>
      <div className="dham-circle">{emoji}</div>
      <div style={{ textAlign:'center' }}>
        <div style={{ fontSize:13, fontWeight:600, color:'var(--text)', lineHeight:1.3 }}>{name}</div>
        {sub && <div style={{ fontSize:10.5, color:'var(--muted)', marginTop:2 }}>{sub}</div>}
      </div>
    </Link>
  );
}

const charDham   = PACKAGES.filter(p => p.category === 'char-dham');
const doDham     = PACKAGES.filter(p => p.category === 'do-dham');
const singleDham = PACKAGES.filter(p => p.category === 'single-dham');

export default function HomePage() {
  return (
    <>
      <Schema />

      {/* HERO */}
      <section style={{
        position:'relative',
        backgroundImage: 'linear-gradient(145deg,rgba(7,20,42,0.82) 0%,rgba(13,39,72,0.75) 30%,rgba(18,96,204,0.70) 65%,rgba(6,182,212,0.80) 100%), url(https://images.unsplash.com/photo-1591189863345-9db058f9f8ec?auto=format&fit=crop&w=1600&q=60)',
        backgroundSize:'cover', backgroundPosition:'center',
        padding:'70px 16px 110px', overflow:'hidden',
      }}>
        <div style={{ position:'absolute', top:'-100px', right:'-80px', width:380, height:380, borderRadius:'50%', background:'rgba(6,182,212,0.10)', filter:'blur(40px)', pointerEvents:'none' }} aria-hidden="true"/>
        <div style={{ position:'absolute', bottom:'80px', left:'-80px', width:280, height:280, borderRadius:'50%', background:'rgba(18,96,204,0.18)', filter:'blur(50px)', pointerEvents:'none' }} aria-hidden="true"/>

        <div style={{ maxWidth:1200, margin:'0 auto', position:'relative', zIndex:1 }}>
          <div style={{ textAlign:'center', marginBottom:36 }}>
            <span style={{ background:'rgba(6,182,212,0.18)', color:'var(--cyan)', fontSize:11, fontWeight:600, letterSpacing:'0.14em', textTransform:'uppercase', padding:'6px 18px', borderRadius:100, display:'inline-flex', alignItems:'center', gap:8, marginBottom:18, border:'1px solid rgba(6,182,212,0.35)' }}>
              <span style={{ width:6, height:6, background:'var(--cyan)', borderRadius:'50%', animation:'pulse 2s infinite' }}/>
              Season 2025 Bookings Now Open
            </span>
            <h1 className="font-display" style={{ color:'#fff', fontWeight:600, fontSize:'clamp(2rem, 5.5vw, 3.6rem)', lineHeight:1.1, marginBottom:16, letterSpacing:'-0.02em' }}>
              Your Sacred Journey Through<br/>
              <span style={{ color:'var(--cyan)', fontWeight:700, fontStyle:'italic' }}>The Char Dham</span>
            </h1>
            <p style={{ color:'rgba(255,255,255,0.8)', fontSize:15, maxWidth:620, margin:'0 auto', lineHeight:1.7 }}>
              Yamunotri · Gangotri · Kedarnath · Badrinath<br/>
              <span style={{ color:'var(--cyan)', fontWeight:500 }}>Starting ₹5,299 per person</span> · All-inclusive · Zero commission
            </p>
          </div>
          <HeroSearch />
          <div style={{ display:'flex', justifyContent:'center', gap:24, flexWrap:'wrap', marginTop:28, fontSize:12, color:'rgba(255,255,255,0.75)' }}>
            {['✓ No hidden charges', '✓ 24/7 yatra support', '✓ VIP darshan included', '✓ Instant booking confirmation'].map(t => (
              <span key={t} style={{ whiteSpace:'nowrap' }}>{t}</span>
            ))}
          </div>
        </div>

        <div className="hero-wave" aria-hidden="true">
          <svg viewBox="0 0 1440 60" preserveAspectRatio="none" style={{ display:'block', width:'100%', height:60 }}>
            <path d="M0,36 C360,60 1080,12 1440,36 L1440,60 L0,60 Z" fill="var(--bg)"/>
          </svg>
        </div>
        <style dangerouslySetInnerHTML={{ __html: `@keyframes pulse { 0%,100%{opacity:1} 50%{opacity:0.4} }` }}/>
      </section>

      {/* STATS */}
      <div style={{ background:'linear-gradient(90deg, var(--deep) 0%, var(--blue-dark) 50%, var(--deep) 100%)' }}>
        <div style={{ maxWidth:1200, margin:'0 auto', display:'flex', flexWrap:'wrap' }}>
          {TRUST.stats.map((s, i) => (
            <CounterStat key={s.label} {...s} border={i < TRUST.stats.length - 1}/>
          ))}
        </div>
      </div>

      {/* ZERO COMMISSION BANNER */}
      <section style={{ background:'#fff', borderBottom:'1px solid var(--border)' }}>
        <div style={{ maxWidth:1200, margin:'0 auto', padding:'0 16px' }}>
          <div style={{ display:'flex', alignItems:'center', flexWrap:'wrap', overflow:'hidden' }}>
            <div style={{ flex:'0 0 auto', background:'var(--deep)', padding:'20px 30px', display:'flex', alignItems:'center', gap:16 }}>
              <span style={{ fontSize:32 }}>🛡️</span>
              <div>
                <div style={{ color:'var(--cyan)', fontWeight:700, fontSize:17, letterSpacing:'-0.02em', lineHeight:1.1, fontFamily:'var(--font-display)' }}>Zero Commission</div>
                <div style={{ color:'rgba(255,255,255,0.6)', fontSize:10.5, fontWeight:500, letterSpacing:'0.1em', textTransform:'uppercase', marginTop:3 }}>No middleman. No markup.</div>
              </div>
            </div>
            <div style={{ width:0, height:0, borderTop:'42px solid transparent', borderBottom:'42px solid transparent', borderLeft:'22px solid var(--deep)', flexShrink:0 }} aria-hidden="true"/>
            <div style={{ flex:1, display:'flex', alignItems:'center', overflowX:'auto', padding:'0 4px' }}>
              {[
                { icon:'💸', text:'Pay operator direct', sub:'No agency fees' },
                { icon:'🤝', text:'We ARE the operator', sub:'15 yr family business' },
                { icon:'📋', text:'Price transparency',  sub:'Full cost breakdown' },
                { icon:'💰', text:'Lowest price match',  sub:'We beat any quote' },
              ].map((c, i) => (
                <div key={c.text} style={{ display:'flex', alignItems:'center', gap:12, padding:'16px 20px', borderRight: i < 3 ? '1px solid var(--border)' : 'none', flexShrink:0 }}>
                  <span style={{ fontSize:22, flexShrink:0 }}>{c.icon}</span>
                  <div>
                    <div style={{ fontWeight:600, fontSize:12.5, color:'var(--text)', whiteSpace:'nowrap' }}>{c.text}</div>
                    <div style={{ fontSize:10.5, color:'var(--muted)', marginTop:1, whiteSpace:'nowrap' }}>{c.sub}</div>
                  </div>
                </div>
              ))}
            </div>
            <div style={{ flexShrink:0, padding:'14px 22px', borderLeft:'1px solid var(--border)' }}>
              <a href={`tel:${SITE.phone}`} style={{ display:'flex', flexDirection:'column', alignItems:'center', gap:2, textDecoration:'none' }}>
                <span style={{ fontSize:18 }}>📞</span>
                <span style={{ fontWeight:700, fontSize:13, color:'var(--blue)', whiteSpace:'nowrap' }}>{SITE.phone}</span>
                <span style={{ fontSize:10, color:'var(--muted)' }}>Call us direct</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 4 DHAMS */}
      <ScrollReveal as="section" style={{ background:'#fff', padding:'48px 0 36px' }}>
        <div style={{ maxWidth:1200, margin:'0 auto', padding:'0 16px' }}>
          <div style={{ textAlign:'center', marginBottom:32 }}>
            <span className="section-tag">The Sacred Four</span>
            <h2 className="section-title">Explore the <em>Four Holy Dhams</em></h2>
            <p className="section-subtitle" style={{ margin:'0 auto' }}>Nestled in the Garhwal Himalayas, these are the four most revered pilgrimage sites in Hinduism.</p>
          </div>
          <div style={{ display:'flex', justifyContent:'center', gap:'clamp(20px, 4vw, 40px)', flexWrap:'wrap' }}>
            <DhamTile name="Yamunotri"  emoji="🌊" href="/packages/yamunotri-yatra-package-2n-3d-haridwar" sub="3,291 m"/>
            <DhamTile name="Gangotri"   emoji="🌿" href="/packages/gangotri-yatra-package-2n-3d-haridwar"  sub="3,415 m"/>
            <DhamTile name="Kedarnath"  emoji="🏔️" href="/packages/kedarnath-yatra-package-3n-4d-haridwar" sub="3,583 m"/>
            <DhamTile name="Badrinath"  emoji="🕌" href="/packages/badrinath-yatra-package-2n-3d-haridwar" sub="3,133 m"/>
            <DhamTile name="Helicopter" emoji="🚁" href="/packages/char-dham-yatra-helicopter-5n-6d-dehradun" sub="VIP 6D"/>
          </div>
        </div>
      </ScrollReveal>

      {/* CHAR DHAM */}
      <ScrollReveal as="section" style={{ background:'var(--bg)', padding:'48px 0 32px' }}>
        <div style={{ maxWidth:1200, margin:'0 auto', padding:'0 16px' }}>
          <div style={{ display:'flex', justifyContent:'space-between', alignItems:'flex-end', marginBottom:24, flexWrap:'wrap', gap:12 }}>
            <div>
              <span className="section-tag">Most popular</span>
              <h2 className="section-title"><em>Char Dham</em> Yatra Packages</h2>
              <p className="section-subtitle">All four dhams in one blessed journey — from 5 days to 15 days.</p>
            </div>
            <Link href="/packages/char-dham" className="view-all">View all packages
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 7h8M7 3l4 4-4 4"/></svg>
            </Link>
          </div>
          <div className="hscroll">{charDham.map(p => <PkgCard key={p.slug} pkg={p}/>)}</div>
        </div>
      </ScrollReveal>

      {/* DO DHAM */}
      <ScrollReveal as="section" style={{ background:'#fff', padding:'48px 0 32px' }}>
        <div style={{ maxWidth:1200, margin:'0 auto', padding:'0 16px' }}>
          <div style={{ display:'flex', justifyContent:'space-between', alignItems:'flex-end', marginBottom:24, flexWrap:'wrap', gap:12 }}>
            <div>
              <span className="section-tag">Two dhams · One journey</span>
              <h2 className="section-title"><em>Do Dham</em> Yatra Packages</h2>
              <p className="section-subtitle">Perfect when time is limited but devotion is full.</p>
            </div>
            <Link href="/packages/do-dham" className="view-all">View all
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 7h8M7 3l4 4-4 4"/></svg>
            </Link>
          </div>
          <div className="hscroll">{doDham.map(p => <PkgCard key={p.slug} pkg={p}/>)}</div>
        </div>
      </ScrollReveal>

      {/* SINGLE DHAM */}
      <ScrollReveal as="section" style={{ background:'var(--bg)', padding:'48px 0 32px' }}>
        <div style={{ maxWidth:1200, margin:'0 auto', padding:'0 16px' }}>
          <div style={{ display:'flex', justifyContent:'space-between', alignItems:'flex-end', marginBottom:24, flexWrap:'wrap', gap:12 }}>
            <div>
              <span className="section-tag">Focused · Affordable</span>
              <h2 className="section-title"><em>Single Dham</em> Packages</h2>
              <p className="section-subtitle">One sacred shrine. Deeply meaningful. From ₹5,299.</p>
            </div>
            <Link href="/packages/single-dham" className="view-all">View all
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 7h8M7 3l4 4-4 4"/></svg>
            </Link>
          </div>
          <div className="hscroll">{singleDham.map(p => <PkgCard key={p.slug} pkg={p}/>)}</div>
        </div>
      </ScrollReveal>

      {/* WHY CHOOSE US */}
      <ScrollReveal as="section" style={{ background:'#fff', padding:'56px 0 48px' }}>
        <div style={{ maxWidth:1200, margin:'0 auto', padding:'0 16px' }}>
          <div style={{ textAlign:'center', marginBottom:40 }}>
            <span className="section-tag">What sets us apart</span>
            <h2 className="section-title">Why <em>Shiv Ganga Travels</em>?</h2>
            <p className="section-subtitle" style={{ margin:'0 auto' }}>15 years. 50,000+ pilgrims. Zero incident record.</p>
          </div>
          <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fill,minmax(220px,1fr))', gap:16 }}>
            {[
              { icon:'🎫', title:'VIP Darshan',      desc:'Skip-the-line priority at all four dhams — save hours of waiting.' },
              { icon:'🏔️', title:'Expert Guides',    desc:'Garhwali locals with 10+ years experience on every mountain route.' },
              { icon:'🚌', title:'AC Fleet Vehicles', desc:'Well-maintained Tempo Travellers & Innova Crystas. Trained drivers.' },
              { icon:'🍱', title:'Sattvic Meals',    desc:'Pure vegetarian breakfast & dinner at every stop. Jain options.' },
              { icon:'💊', title:'Medical Support',  desc:'Oxygen cylinder, first-aid & medical attendant on every vehicle.' },
              { icon:'💰', title:'Transparent Pricing', desc:'Every rupee accounted for. No surprises. Lowest price guaranteed.' },
              { icon:'📱', title:'24/7 Support',     desc:'WhatsApp + phone support throughout your yatra, day and night.' },
              { icon:'🛡️', title:'Safety First',    desc:'GPS-tracked vehicles. Uttarakhand Tourism Board registered.' },
            ].map(w => (
              <div key={w.title} style={{ background:'#fff', borderRadius:14, padding:'22px 20px', border:'1px solid var(--border)', boxShadow:'var(--shadow)' }}>
                <div style={{ width:46, height:46, background:'var(--blue-light)', borderRadius:12, display:'flex', alignItems:'center', justifyContent:'center', fontSize:22, marginBottom:14 }}>{w.icon}</div>
                <div style={{ fontWeight:700, fontSize:14, color:'var(--text)', marginBottom:6 }}>{w.title}</div>
                <div style={{ fontSize:12.5, color:'var(--muted)', lineHeight:1.6 }}>{w.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </ScrollReveal>

      {/* JOURNEY TIMELINE */}
      <ScrollReveal as="section" style={{ background:'linear-gradient(180deg, var(--bg) 0%, #fff 100%)', padding:'56px 0 56px' }}>
        <div style={{ maxWidth:1100, margin:'0 auto', padding:'0 16px' }}>
          <div style={{ textAlign:'center', marginBottom:44 }}>
            <span className="section-tag">Your sacred journey</span>
            <h2 className="section-title">How Your Yatra <em>Unfolds</em></h2>
            <p className="section-subtitle" style={{ margin:'0 auto' }}>From enquiry until your blessed return home.</p>
          </div>
          <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit, minmax(200px, 1fr))', gap:0 }}>
            {[
              { num:'01', title:'Enquire & Plan',     desc:'WhatsApp or call us. We understand your dates, group size, and preferences.', icon:'💬' },
              { num:'02', title:'Customise & Book',   desc:'Review the itinerary, make adjustments, pay 25% advance to confirm.',          icon:'📋' },
              { num:'03', title:'Pre-Yatra Briefing', desc:'Receive your complete kit — registrations, tickets, packing list, contacts.', icon:'📦' },
              { num:'04', title:'Embark & Experience',desc:'Pickup at Haridwar. Begin your journey with our guide and driver.',           icon:'🚌' },
              { num:'05', title:'Blessed Return',     desc:'Drop at Haridwar with prasad, photos, and divine memories for a lifetime.',    icon:'🙏' },
            ].map(step => (
              <div key={step.num} style={{ padding:'0 12px', textAlign:'center' }}>
                <div style={{ width:60, height:60, margin:'0 auto 14px', background:'linear-gradient(135deg, var(--blue), var(--cyan))', borderRadius:'50%', display:'flex', alignItems:'center', justifyContent:'center', fontSize:26, color:'#fff', boxShadow:'0 6px 18px rgba(18,96,204,0.3)' }}>
                  {step.icon}
                </div>
                <div style={{ fontSize:11, fontWeight:700, color:'var(--blue)', letterSpacing:'0.15em', marginBottom:4 }}>STEP {step.num}</div>
                <h3 style={{ fontSize:15, fontWeight:700, color:'var(--text)', marginBottom:6 }}>{step.title}</h3>
                <p style={{ fontSize:12.5, color:'var(--muted)', lineHeight:1.6 }}>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </ScrollReveal>

      {/* TESTIMONIALS */}
      <ScrollReveal as="section" style={{ background:'var(--bg)', padding:'56px 0' }}>
        <div style={{ maxWidth:1200, margin:'0 auto', padding:'0 16px' }}>
          <div style={{ marginBottom:28, textAlign:'center' }}>
            <span className="section-tag">Real stories</span>
            <h2 className="section-title">Voices of Our <em>Pilgrims</em></h2>
            <p className="section-subtitle" style={{ margin:'0 auto' }}>What 50,000+ pilgrims say about their journey with us.</p>
          </div>
          <TestimonialSlider items={TESTIMONIALS}/>
        </div>
      </ScrollReveal>

      {/* FEATURED DEALS */}
      <ScrollReveal as="section" style={{ background:'#fff', padding:'48px 0' }}>
        <div style={{ maxWidth:1200, margin:'0 auto', padding:'0 16px' }}>
          <div style={{ display:'flex', justifyContent:'space-between', alignItems:'flex-end', marginBottom:24, flexWrap:'wrap', gap:12 }}>
            <div>
              <span className="section-tag">Limited time</span>
              <h2 className="section-title">Featured <em>Yatra Deals</em></h2>
            </div>
            <Link href="/packages" className="view-all">All packages
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 7h8M7 3l4 4-4 4"/></svg>
            </Link>
          </div>
          <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fill,minmax(240px,1fr))', gap:16 }}>
            {getFeaturedPackages().map(pkg => (
              <Link key={pkg.slug} href={`/packages/${pkg.slug}`} className="pkg-card"
                style={{ display:'flex', flexDirection:'column', background:'#fff', border:'1px solid var(--border)', textDecoration:'none', color:'inherit', boxShadow:'var(--shadow)', borderRadius:14, overflow:'hidden' }}>
                <div style={{ height:180, position:'relative', overflow:'hidden' }}>
                  <div className="pkg-img" style={{
                    position:'absolute', inset:0,
                    backgroundImage: pkg.photo
                      ? `linear-gradient(to bottom,rgba(7,20,42,0.15) 0%,rgba(7,20,42,0.78) 100%), url('${pkg.photo}')`
                      : 'linear-gradient(135deg,#07142A,#1260CC,#06B6D4)',
                    backgroundSize:'cover', backgroundPosition:'center',
                  }}/>
                  {pkg.badge && <span style={{ position:'absolute', top:12, left:12, background:'var(--blue)', color:'#fff', fontSize:10, fontWeight:700, padding:'4px 11px', borderRadius:20, zIndex:2 }}>{pkg.badge}</span>}
                  <div style={{ position:'absolute', bottom:14, left:14, right:14, zIndex:2 }}>
                    <h3 style={{ color:'#fff', fontWeight:700, fontSize:14.5, lineHeight:1.3, textShadow:'0 1px 6px rgba(0,0,0,0.7)', marginBottom:3 }}>{pkg.name}</h3>
                  </div>
                </div>
                <div style={{ padding:'14px 16px' }}>
                  <div style={{ fontSize:11, color:'var(--muted)', marginBottom:6 }}>→ {pkg.duration.nights}N / {pkg.duration.days}D · {pkg.transport}</div>
                  <div style={{ display:'flex', alignItems:'baseline', gap:6 }}>
                    <span style={{ fontSize:11, color:'var(--muted)', textDecoration:'line-through' }}>₹{pkg.price.original.toLocaleString('en-IN')}</span>
                    <span style={{ fontWeight:800, fontSize:19, color:'var(--blue)', letterSpacing:'-0.02em' }}>₹{pkg.price.discounted.toLocaleString('en-IN')}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </ScrollReveal>

      {/* FAQ */}
      <ScrollReveal as="section" style={{ background:'var(--bg)', padding:'56px 0' }}>
        <div style={{ maxWidth:820, margin:'0 auto', padding:'0 16px' }}>
          <div style={{ textAlign:'center', marginBottom:32 }}>
            <span className="section-tag">Answers ahead</span>
            <h2 className="section-title">Frequently Asked <em>Questions</em></h2>
            <p className="section-subtitle" style={{ margin:'0 auto' }}>Everything you need to know before booking your yatra.</p>
          </div>
          <FAQAccordion faqs={GLOBAL_FAQS}/>
          <div style={{ textAlign:'center', marginTop:24 }}>
            <p style={{ fontSize:13, color:'var(--muted)', marginBottom:10 }}>Still have questions? Our yatra experts are here to help.</p>
            <a href={`https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent('Namaste! I have a question about Char Dham Yatra.')}`}
               target="_blank" rel="noopener noreferrer" className="btn-outline" style={{ gap:8 }}>
              💬 Ask on WhatsApp
            </a>
          </div>
        </div>
      </ScrollReveal>

      {/* FINAL CTA + NEWSLETTER */}
      <section style={{ background:'linear-gradient(135deg, var(--deep) 0%, var(--deep-mid) 50%, var(--blue-dark) 100%)', padding:'64px 16px', position:'relative', overflow:'hidden' }}>
        <div style={{ position:'absolute', top:'-60px', right:'-60px', width:260, height:260, borderRadius:'50%', background:'rgba(6,182,212,0.12)', filter:'blur(40px)', pointerEvents:'none' }} aria-hidden="true"/>
        <div style={{ position:'absolute', bottom:'-80px', left:'10%', width:200, height:200, borderRadius:'50%', background:'rgba(255,255,255,0.04)', filter:'blur(30px)', pointerEvents:'none' }} aria-hidden="true"/>
        <div style={{ maxWidth:800, margin:'0 auto', position:'relative', zIndex:1, textAlign:'center' }}>
          <span style={{ background:'rgba(6,182,212,0.18)', color:'var(--cyan)', fontSize:11, fontWeight:600, letterSpacing:'0.14em', textTransform:'uppercase', padding:'5px 16px', borderRadius:100, display:'inline-block', marginBottom:18, border:'1px solid rgba(6,182,212,0.3)' }}>
            Ready to begin?
          </span>
          <h2 className="font-display" style={{ color:'#fff', fontWeight:600, fontSize:'clamp(1.6rem, 4vw, 2.4rem)', lineHeight:1.2, marginBottom:14, letterSpacing:'-0.02em' }}>
            Your Sacred Journey Awaits
          </h2>
          <p style={{ color:'rgba(255,255,255,0.75)', fontSize:14.5, marginBottom:30, lineHeight:1.7, maxWidth:560, margin:'0 auto 30px' }}>
            Speak with our yatra experts today. Limited seats per batch — book early to secure your dates for the 2025 season.
          </p>
          <div style={{ display:'flex', justifyContent:'center', gap:12, flexWrap:'wrap', marginBottom:40 }}>
            <a href={`tel:${SITE.phone}`} style={{ display:'inline-flex', alignItems:'center', gap:8, background:'#fff', color:'var(--blue)', padding:'14px 28px', borderRadius:10, fontWeight:700, fontSize:14, textDecoration:'none', boxShadow:'0 4px 20px rgba(0,0,0,0.25)' }}>
              📞 {SITE.phone}
            </a>
            <a href={`https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent('Namaste! I want to book Char Dham Yatra 2025.')}`}
               target="_blank" rel="noopener noreferrer"
               style={{ display:'inline-flex', alignItems:'center', gap:8, background:'#25D366', color:'#fff', padding:'14px 28px', borderRadius:10, fontWeight:700, fontSize:14, textDecoration:'none', boxShadow:'0 4px 20px rgba(37,211,102,0.4)' }}>
              💬 WhatsApp Us
            </a>
          </div>
          <div style={{ borderTop:'1px solid rgba(255,255,255,0.1)', paddingTop:32, marginTop:16 }}>
            <p style={{ color:'rgba(255,255,255,0.75)', fontSize:13, marginBottom:14 }}>📬 Get yatra updates, early-bird discounts & sacred stories</p>
            <form action={`https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent('Namaste! Please add me to your yatra updates list.')}`} target="_blank"
                  style={{ display:'flex', gap:8, maxWidth:420, margin:'0 auto', flexWrap:'wrap' }}>
              <input type="email" placeholder="your@email.com" className="newsletter-input" aria-label="Email address" required/>
              <button type="submit" className="btn-primary" style={{ background:'var(--cyan)', flexShrink:0 }}>Subscribe</button>
            </form>
            <p style={{ color:'rgba(255,255,255,0.4)', fontSize:11, marginTop:10 }}>No spam. Unsubscribe anytime.</p>
          </div>
        </div>
      </section>
    </>
  );
}
