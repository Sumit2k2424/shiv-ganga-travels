import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getPackageBySlug, getAllSlugs, SITE, PACKAGES, CATEGORIES } from '@/data/packages';

const CATEGORY_SLUGS = Object.keys(CATEGORIES);

export async function generateStaticParams() {
  // Include both individual package slugs AND category slugs
  const pkgSlugs = getAllSlugs();
  const catSlugs = CATEGORY_SLUGS.map(s => ({ slug: s }));
  return [...pkgSlugs, ...catSlugs];
}

export async function generateMetadata({ params }) {
  // Category page metadata
  if (CATEGORY_SLUGS.includes(params.slug)) {
    const cat = CATEGORIES[params.slug];
    const count = PACKAGES.filter(p => p.category === params.slug).length;
    return {
      title: `${cat.name} Packages 2026 from Haridwar`,
      description: `Book ${cat.name} packages from Haridwar. ${count} curated packages with expert guides, VIP darshan, all-inclusive. Trusted since 2010.`,
    };
  }
  const pkg = getPackageBySlug(params.slug);
  if (!pkg) return {};
  return {
    title: pkg.metaTitle,
    description: pkg.metaDesc,
    keywords: pkg.tags || [],
    alternates: { canonical: `${SITE.baseUrl}/packages/${pkg.slug}` },
    openGraph: {
      title: pkg.metaTitle,
      description: pkg.metaDesc,
      type: 'website',
      url: `${SITE.baseUrl}/packages/${pkg.slug}`,
      siteName: SITE.name,
      locale: 'en_IN',
      images: pkg.photo ? [{ url: pkg.photo, width: 900, height: 560, alt: pkg.name }] : [],
    },
    twitter: {
      card: 'summary_large_image',
      title: pkg.metaTitle,
      description: pkg.metaDesc,
      images: pkg.photo ? [pkg.photo] : [],
    },
  };
}

/* ── Schema ── */
function Schemas({ pkg }) {
  const trip = {
    '@context':'https://schema.org','@type':'TouristTrip',
    '@id': `${SITE.baseUrl}/packages/${pkg.slug}#trip`,
    name: pkg.name,
    description: pkg.metaDesc,
    touristType: ['Pilgrim','ReligiousTourist'],
    url: `${SITE.baseUrl}/packages/${pkg.slug}`,
    image: pkg.photo || '',
    duration: `P${pkg.duration.days}D`,
    itinerary: {
      '@type':'ItemList',
      itemListElement: pkg.itinerary.map((d,i) => ({
        '@type':'ListItem', position:i+1,
        name:`Day ${d.day}: ${d.title}`, description: d.desc,
      })),
    },
    offers: {
      '@type':'Offer',
      price: pkg.price.discounted,
      priceCurrency:'INR',
      priceValidUntil: '2026-10-31',
      availability:'https://schema.org/InStock',
      validFrom:'2026-04-01',
      validThrough:'2026-10-31',
      seller: { '@type':'TravelAgency', name:SITE.name, url:SITE.baseUrl, telephone: SITE.phone },
      url: `${SITE.baseUrl}/packages/${pkg.slug}`,
    },
    provider: {
      '@type':'TravelAgency',
      '@id': `${SITE.baseUrl}/#organization`,
      name:SITE.name,
      url:SITE.baseUrl,
      telephone: SITE.phone,
    },
    startLocation: {
      '@type': 'Place',
      name: pkg.startCity,
      address: { '@type': 'PostalAddress', addressLocality: pkg.startCity, addressRegion: 'Uttarakhand', addressCountry: 'IN' },
    },
    keywords: (pkg.tags || []).join(', '),
  };

  const faq = pkg.faqs?.length ? {
    '@context':'https://schema.org','@type':'FAQPage',
    mainEntity: pkg.faqs.map(f => ({
      '@type':'Question', name: f.q,
      acceptedAnswer: { '@type':'Answer', text: f.a },
    })),
  } : null;

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(trip) }}/>
      {faq && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faq) }}/>}
    </>
  );
}

/* ── Breadcrumb ── */
function Breadcrumb({ pkg }) {
  const schema = {
    '@context':'https://schema.org','@type':'BreadcrumbList',
    itemListElement:[
      { '@type':'ListItem', position:1, name:'Home',     item: SITE.baseUrl },
      { '@type':'ListItem', position:2, name:'Packages', item:`${SITE.baseUrl}/packages` },
      { '@type':'ListItem', position:3, name: pkg.name,  item:`${SITE.baseUrl}/packages/${pkg.slug}` },
    ],
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}/>
      <nav style={{ padding:'10px 0', fontSize:12, color:'var(--muted)' }}>
        <Link href="/" style={{ color:'var(--navy)', textDecoration:'none' }}>Home</Link>
        <span style={{ margin:'0 6px' }}>›</span>
        <Link href="/packages" style={{ color:'var(--navy)', textDecoration:'none' }}>Packages</Link>
        <span style={{ margin:'0 6px' }}>›</span>
        <Link href={`/packages/${pkg.category}`} style={{ color:'var(--navy)', textDecoration:'none', textTransform:'capitalize' }}>
          {pkg.category.replace(/-/g,' ')}
        </Link>
        <span style={{ margin:'0 6px' }}>›</span>
        <span style={{ color:'var(--mid)' }}>{pkg.name}</span>
      </nav>
    </>
  );
}

export default function PackageDetailPage({ params }) {
  // ── CATEGORY PAGE (e.g. /packages/char-dham) ──────────────────
  if (CATEGORY_SLUGS.includes(params.slug)) {
    const cat  = CATEGORIES[params.slug];
    const pkgs = PACKAGES.filter(p => p.category === params.slug);
    return (
      <>
        {/* Hero */}
        <section style={{ background:'linear-gradient(145deg, var(--navy) 0%, var(--navy-mid) 60%, var(--teal) 100%)', padding:'56px 20px 44px', textAlign:'center' }}>
          <div style={{ maxWidth:720, margin:'0 auto' }}>
            <span style={{ fontSize:44, display:'block', marginBottom:14 }}>{cat.icon}</span>
            <h1 className="display-title" style={{ color:'#fff', fontSize:'clamp(1.8rem,4vw,2.8rem)', marginBottom:12 }}>
              {cat.name} <em style={{ color:'#FFD166', fontStyle:'italic' }}>Packages 2026</em>
            </h1>
            <p style={{ color:'rgba(255,255,255,0.75)', fontSize:14.5, lineHeight:1.7 }}>
              {pkgs.length} curated packages · All from Haridwar · Expert guides · VIP darshan · Zero commission
            </p>
          </div>
        </section>

        {/* Breadcrumb */}
        <div style={{ background:'var(--bg)', borderBottom:'1px solid var(--border)', padding:'10px 20px' }}>
          <div style={{ maxWidth:'var(--container)', margin:'0 auto', fontSize:12, color:'var(--text-muted)', display:'flex', gap:6, alignItems:'center' }}>
            <Link href="/" style={{ color:'var(--navy)', textDecoration:'none' }}>Home</Link>
            <span>›</span>
            <Link href="/packages" style={{ color:'var(--navy)', textDecoration:'none' }}>All Packages</Link>
            <span>›</span>
            <span style={{ color:'var(--text)' }}>{cat.name}</span>
          </div>
        </div>

        {/* Package grid */}
        <section style={{ background:'var(--bg)', padding:'40px 20px 60px' }}>
          <div style={{ maxWidth:'var(--container)', margin:'0 auto' }}>
            <p style={{ fontSize:13, color:'var(--text-muted)', marginBottom:24 }}>
              {pkgs.length} package{pkgs.length !== 1 ? 's' : ''} found
            </p>
            <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fill, minmax(290px, 1fr))', gap:20 }}>
              {pkgs.map(p => {
                const sav = p.price.original - p.price.discounted;
                return (
                  <Link key={p.slug} href={`/packages/${p.slug}`} className="pkg-card"
                    style={{ textDecoration:'none', color:'inherit', display:'flex', flexDirection:'column' }}>
                    <div style={{ height:200, position:'relative', overflow:'hidden', flexShrink:0 }}>
                      <div className="card-img" style={{
                        position:'absolute', inset:0,
                        backgroundImage: p.photo
                          ? `linear-gradient(180deg,rgba(15,43,91,0.1) 0%,rgba(15,43,91,0.72) 100%),url('${p.photo}')`
                          : 'linear-gradient(160deg,var(--navy),var(--teal))',
                        backgroundSize:'cover', backgroundPosition:'center',
                      }}/>
                      {p.badge && <span className="badge badge-gold" style={{ position:'absolute', top:12, left:12, zIndex:2 }}>{p.badge}</span>}
                      <span style={{ position:'absolute', top:12, right:12, background:'rgba(0,0,0,0.5)', backdropFilter:'blur(4px)', color:'#fff', fontSize:11, fontWeight:600, padding:'3px 10px', borderRadius:6, zIndex:2 }}>
                        {p.duration.nights}N/{p.duration.days}D
                      </span>
                      <div style={{ position:'absolute', bottom:0, left:0, right:0, padding:'12px 16px', zIndex:2 }}>
                        <h2 style={{ color:'#fff', fontWeight:700, fontSize:15, lineHeight:1.3, textShadow:'0 1px 4px rgba(0,0,0,0.6)' }}>{p.name}</h2>
                      </div>
                    </div>
                    <div style={{ padding:'14px 16px', flex:1, display:'flex', flexDirection:'column', gap:10 }}>
                      <div style={{ display:'flex', gap:6, flexWrap:'wrap' }}>
                        <span className="chip">📍 {p.startCity}</span>
                        <span className="chip">🚌 {p.transport}</span>
                        <span className="chip">🎯 {p.difficulty}</span>
                      </div>
                      <ul style={{ listStyle:'none', flex:1 }}>
                        {p.highlights.slice(0,3).map((h,i) => (
                          <li key={i} style={{ fontSize:12.5, color:'var(--text-mid)', paddingLeft:16, position:'relative', lineHeight:1.5, marginBottom:4 }}>
                            <span style={{ position:'absolute', left:0, color:'var(--teal)', fontWeight:700, fontSize:11 }}>✓</span>{h}
                          </li>
                        ))}
                      </ul>
                      <div style={{ display:'flex', alignItems:'flex-end', justifyContent:'space-between', paddingTop:10, borderTop:'1px solid var(--border)' }}>
                        <div>
                          <div style={{ fontSize:11, color:'var(--text-muted)', textDecoration:'line-through' }}>₹{p.price.original.toLocaleString('en-IN')}</div>
                          <div style={{ fontWeight:800, fontSize:22, color:'var(--navy)', lineHeight:1, letterSpacing:'-0.03em', fontFamily:'var(--font-display)' }}>
                            ₹{p.price.discounted.toLocaleString('en-IN')}
                          </div>
                          {sav > 0 && <div style={{ fontSize:11, color:'var(--green)', fontWeight:600, marginTop:2 }}>Save ₹{sav.toLocaleString('en-IN')}</div>}
                        </div>
                        <span className="btn btn-primary" style={{ fontSize:12, padding:'8px 16px' }}>View Details →</span>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>

            {/* CTA */}
            <div style={{ marginTop:48, padding:'28px 24px', background:'#fff', borderRadius:16, border:'1px solid var(--border)', boxShadow:'var(--shadow)', textAlign:'center' }}>
              <p style={{ fontSize:16, fontWeight:600, color:'var(--text)', marginBottom:6 }}>Can&apos;t find the right dates or group size?</p>
              <p style={{ fontSize:13.5, color:'var(--text-muted)', marginBottom:18 }}>We create custom itineraries — any dates, any group, any budget.</p>
              <a href={`https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(`Namaste! I need a custom ${cat.name} package.`)}`}
                 target="_blank" rel="noopener noreferrer"
                 style={{ background:'#25D366', color:'#fff', padding:'12px 28px', borderRadius:10, fontWeight:700, fontSize:13.5, textDecoration:'none', display:'inline-flex', alignItems:'center', gap:7 }}>
                💬 Request Custom Package
              </a>
            </div>
          </div>
        </section>
      </>
    );
  }

  // ── INDIVIDUAL PACKAGE DETAIL ──────────────────────────────────
  const pkg = getPackageBySlug(params.slug);
  if (!pkg) notFound();

  const savings  = pkg.price.original - pkg.price.discounted;
  const msg      = encodeURIComponent(`Namaste! I want to book "${pkg.name}" (${pkg.duration.nights}N/${pkg.duration.days}D). Please share details.`);
  const related  = PACKAGES.filter(p => p.category === pkg.category && p.slug !== pkg.slug).slice(0,3);

  const chipStyle = {
    display:'inline-flex', alignItems:'center', gap:5,
    background:'rgba(255,255,255,0.15)', color:'#fff',
    fontSize:12, fontWeight:500, padding:'5px 12px', borderRadius:20,
    border:'1px solid rgba(255,255,255,0.25)',
  };

  return (
    <>
      <Schemas pkg={pkg}/>

      {/* ── HERO ── */}
      <div style={{ backgroundImage: pkg.photo
          ? `linear-gradient(145deg,rgba(7,20,42,0.75) 0%,rgba(13,39,72,0.68) 40%,rgba(18,96,204,0.72) 80%,rgba(6,182,212,0.78) 100%), url('${pkg.photo}')`
          : 'linear-gradient(145deg,var(--deep) 0%,var(--deep-mid) 40%,var(--blue) 80%,var(--teal) 100%)',
        backgroundSize:'cover', backgroundPosition:'center',
        paddingTop:24, paddingBottom:40 }}>
        <div style={{ maxWidth:1100, margin:'0 auto', padding:'0 16px' }}>
          <Breadcrumb pkg={pkg}/>
          {pkg.badge && (
            <span style={{ background:'var(--navy)', color:'#fff', fontSize:11, fontWeight:700, padding:'4px 12px', borderRadius:20, display:'inline-block', marginBottom:10 }}>
              {pkg.badge}
            </span>
          )}
          <h1 style={{ color:'#fff', fontWeight:700, fontSize:'clamp(1.5rem,4vw,2.4rem)', lineHeight:1.2, marginBottom:6 }}>
            {pkg.seoHeading || pkg.name}
          </h1>
          <p style={{ color:'rgba(255,255,255,0.75)', marginBottom:20, fontSize:14 }}>{pkg.subtitle}</p>
          <div style={{ display:'flex', flexWrap:'wrap', gap:8 }}>
            {[
              { icon:'🗓', text:`${pkg.duration.nights}N / ${pkg.duration.days}D` },
              { icon:'🎯', text: pkg.difficulty },
              { icon:'🚌', text: pkg.transport },
              { icon:'👥', text: pkg.groupSize },
              { icon:'📍', text: `${pkg.startCity} → ${pkg.endCity}` },
              { icon:'🌿', text: pkg.season },
              { icon:'🏔️', text: pkg.altitude },
            ].map(c => <span key={c.text} style={chipStyle}>{c.icon} {c.text}</span>)}
          </div>
        </div>
      </div>

      {/* ── MAIN ── */}
      <div className="detail-grid" style={{ maxWidth:1100, margin:'0 auto', padding:'28px 16px 96px', display:'grid', gridTemplateColumns:'1fr min(320px,38%)', gap:28, alignItems:'start' }}>
        <style dangerouslySetInnerHTML={{ __html: `
          @media (max-width: 860px) {
            .detail-grid { grid-template-columns: 1fr !important; gap: 20px !important; }
            .detail-grid > div:last-child { position: static !important; order: -1; }
          }
        ` }}/>

        {/* Left */}
        <div>

          {/* Highlights */}
          <section style={{ background:'#fff', borderRadius:12, padding:22, marginBottom:20, border:'1px solid var(--border)', boxShadow:'var(--shadow)' }}>
            <h2 style={{ fontWeight:700, fontSize:17, color:'var(--text)', marginBottom:14 }}>✨ Package Highlights</h2>
            <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fill,minmax(280px,1fr))', gap:10 }}>
              {pkg.highlights.map((h,i) => (
                <div key={i} style={{ display:'flex', gap:10, alignItems:'flex-start', background:'var(--navy-light)', padding:'10px 12px', borderRadius:8 }}>
                  <span style={{ color:'var(--teal)', fontWeight:700, marginTop:1, flexShrink:0 }}>✓</span>
                  <span style={{ fontSize:13, color:'var(--mid)', lineHeight:1.5 }}>{h}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Itinerary */}
          <section style={{ background:'#fff', borderRadius:12, padding:22, marginBottom:20, border:'1px solid var(--border)', boxShadow:'var(--shadow)' }}>
            <h2 style={{ fontWeight:700, fontSize:17, color:'var(--text)', marginBottom:18 }}>🗺️ Day-by-Day Itinerary</h2>
            <div>
              {pkg.itinerary.map((day, i) => (
                <div key={day.day} style={{ display:'flex', gap:14, marginBottom: i < pkg.itinerary.length-1 ? 0 : 0 }}>
                  {/* Timeline */}
                  <div style={{ display:'flex', flexDirection:'column', alignItems:'center', flexShrink:0 }}>
                    <div style={{ width:34, height:34, borderRadius:'50%', display:'flex', alignItems:'center', justifyContent:'center', fontWeight:700, fontSize:13, color:'#fff', flexShrink:0, background: i % 2 === 0 ? 'var(--navy)' : 'var(--cyan-dark)' }}>
                      {day.day}
                    </div>
                    {i < pkg.itinerary.length-1 && <div style={{ width:2, flex:1, background:'var(--border)', margin:'4px 0' }}/>}
                  </div>
                  {/* Content */}
                  <div style={{ paddingBottom:20, flex:1 }}>
                    <h3 style={{ fontWeight:700, fontSize:14, color:'var(--text)', marginBottom:5 }}>{day.title}</h3>
                    <p style={{ fontSize:13, color:'var(--mid)', lineHeight:1.7 }}>{day.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Inclusions / Exclusions */}
          <section style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(180px,1fr))', gap:16, marginBottom:20 }}>
            <div style={{ background:'#f0faf5', borderRadius:12, padding:18, border:'1px solid #bbf7d0' }}>
              <h3 style={{ fontWeight:700, fontSize:14, color:'#166534', marginBottom:12 }}>✅ Inclusions</h3>
              <ul style={{ listStyle:'none', display:'flex', flexDirection:'column', gap:6 }}>
                {pkg.inclusions.map((item,i) => (
                  <li key={i} style={{ fontSize:12.5, color:'#374151', display:'flex', gap:7, alignItems:'flex-start', lineHeight:1.5 }}>
                    <span style={{ color:'#16a34a', flexShrink:0 }}>•</span>{item}
                  </li>
                ))}
              </ul>
            </div>
            <div style={{ background:'#fff8f8', borderRadius:12, padding:18, border:'1px solid #fecaca' }}>
              <h3 style={{ fontWeight:700, fontSize:14, color:'#991b1b', marginBottom:12 }}>❌ Exclusions</h3>
              <ul style={{ listStyle:'none', display:'flex', flexDirection:'column', gap:6 }}>
                {pkg.exclusions.map((item,i) => (
                  <li key={i} style={{ fontSize:12.5, color:'#374151', display:'flex', gap:7, alignItems:'flex-start', lineHeight:1.5 }}>
                    <span style={{ color:'#dc2626', flexShrink:0 }}>•</span>{item}
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* FAQs */}
          {pkg.faqs?.length > 0 && (
            <section style={{ background:'#fff', borderRadius:12, padding:22, marginBottom:20, border:'1px solid var(--border)', boxShadow:'var(--shadow)' }}>
              <h2 style={{ fontWeight:700, fontSize:17, color:'var(--text)', marginBottom:16 }}>❓ Frequently Asked Questions</h2>
              <div style={{ display:'flex', flexDirection:'column', gap:14 }}>
                {pkg.faqs.map((faq,i) => (
                  <div key={i} style={{ borderBottom:'1px solid var(--border)', paddingBottom:14 }}>
                    <p style={{ fontWeight:600, fontSize:14, color:'var(--text)', marginBottom:6 }}>Q. {faq.q}</p>
                    <p style={{ fontSize:13, color:'var(--mid)', lineHeight:1.7 }}>A. {faq.a}</p>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Related packages */}
          {related.length > 0 && (
            <section>
              <h2 style={{ fontWeight:700, fontSize:16, color:'var(--text)', marginBottom:14 }}>You Might Also Like</h2>
              <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fill,minmax(220px,1fr))', gap:14 }}>
                {related.map(r => (
                  <Link key={r.slug} href={`/packages/${r.slug}`}
                    style={{ display:'block', background:'#fff', borderRadius:10, padding:'14px', border:'1px solid var(--border)', textDecoration:'none', transition:'box-shadow .2s' }}>
                    <div style={{ fontWeight:700, fontSize:13, color:'var(--text)', marginBottom:4, lineHeight:1.3 }}>{r.name}</div>
                    <div style={{ fontSize:11, color:'var(--muted)', marginBottom:6 }}>{r.duration.nights}N/{r.duration.days}D · {r.transport}</div>
                    <div style={{ fontWeight:700, fontSize:16, color:'var(--navy)' }}>₹{r.price.discounted.toLocaleString('en-IN')}/-</div>
                  </Link>
                ))}
              </div>
            </section>
          )}
        </div>

        {/* Right — Sticky booking card */}
        <div style={{ position:'sticky', top:80 }}>
          <div style={{ borderRadius:16, overflow:'hidden', border:'2px solid var(--border)', boxShadow:'var(--shadow-lg)' }}>
            {/* Price header */}
            <div style={{ background:'linear-gradient(135deg,var(--deep),var(--navy))', padding:'20px 20px 16px', textAlign:'center' }}>
              <p style={{ color:'rgba(255,255,255,0.65)', fontSize:12, marginBottom:3 }}>Starting from</p>
              <p style={{ color:'rgba(255,255,255,0.5)', fontSize:13, textDecoration:'line-through' }}>₹{pkg.price.original.toLocaleString('en-IN')}</p>
              <p style={{ color:'#fff', fontWeight:700, fontSize:36, lineHeight:1, margin:'4px 0' }}>₹{pkg.price.discounted.toLocaleString('en-IN')}/-</p>
              <p style={{ color:'rgba(255,255,255,0.65)', fontSize:12 }}>per person</p>
              {savings > 0 && <p style={{ color:'#6ee7b7', fontSize:12, fontWeight:600, marginTop:6 }}>You save ₹{savings.toLocaleString('en-IN')}!</p>}
            </div>
            {/* Booking actions */}
            <div style={{ padding:16, background:'#fff', display:'flex', flexDirection:'column', gap:10 }}>
              <a href={`https://wa.me/${SITE.whatsapp}?text=${msg}`} target="_blank" rel="noopener noreferrer"
                style={{ background:'#25D366', color:'#fff', padding:'12px', borderRadius:10, textAlign:'center', fontWeight:700, fontSize:13, textDecoration:'none', display:'block' }}>
                💬 Enquire on WhatsApp
              </a>
              <a href={`tel:${SITE.phone}`}
                className="btn-outline"
                style={{ padding:'11px', textAlign:'center', fontSize:13, display:'block' }}>
                📞 Call to Book
              </a>
              <Link href="/contact"
                style={{ textAlign:'center', fontSize:12, color:'var(--navy)', textDecoration:'none', display:'block', padding:'6px 0' }}>
                ✉️ Send an Enquiry Form
              </Link>
            </div>
            {/* Trust badges */}
            <div style={{ padding:'12px 16px', background:'var(--bg)', borderTop:'1px solid var(--border)' }}>
              {['✅ No hidden charges','🔒 100% secure booking','📞 24/7 yatra support','🌿 Season: '+pkg.season].map(t => (
                <p key={t} style={{ fontSize:11.5, color:'var(--mid)', padding:'3px 0' }}>{t}</p>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ── STICKY MOBILE BOOKING BAR ── */}
      <div className="sticky-book-bar">
        <div style={{ flex:1, display:'flex', flexDirection:'column', gap:0, justifyContent:'center' }}>
          <div style={{ fontSize:11, color:'var(--muted)', lineHeight:1 }}>From</div>
          <div style={{ display:'flex', alignItems:'baseline', gap:6 }}>
            <span style={{ fontWeight:800, fontSize:19, color:'var(--navy)', lineHeight:1, letterSpacing:'-0.02em' }}>
              ₹{pkg.price.discounted.toLocaleString('en-IN')}
            </span>
            <span style={{ fontSize:11, color:'var(--muted)' }}>/person</span>
          </div>
        </div>
        <a href={`tel:${SITE.phone}`}
          className="btn-outline"
          style={{ padding:'10px 14px', fontSize:12, flexShrink:0 }}>
          📞 Call
        </a>
        <a href={`https://wa.me/${SITE.whatsapp}?text=${msg}`} target="_blank" rel="noopener noreferrer"
          style={{ background:'#25D366', color:'#fff', padding:'10px 18px', borderRadius:8, fontSize:12, fontWeight:700, textDecoration:'none', flexShrink:0 }}>
          💬 Book Now
        </a>
      </div>
    </>
  );
}
