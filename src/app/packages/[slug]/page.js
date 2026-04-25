import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getPackageBySlug, getAllSlugs, SITE, PACKAGES, CATEGORIES } from '@/data/packages';

const CATEGORY_SLUGS = Object.keys(CATEGORIES);

export async function generateStaticParams() {
  const pkgSlugs = getAllSlugs();
  const catSlugs = CATEGORY_SLUGS.map(s => ({ slug: s }));
  return [...pkgSlugs, ...catSlugs];
}

export async function generateMetadata({ params }) {
  if (CATEGORY_SLUGS.includes(params.slug)) {
    const cat = CATEGORIES[params.slug];
    return {
      title: `${cat.name} Packages 2026 from Haridwar — ${SITE.name}`,
      description: `Book ${cat.name} from Haridwar. Expert guides, VIP darshan, all-inclusive. Trusted since 2010.`,
      alternates: { canonical: `${SITE.baseUrl}/packages/${params.slug}` },
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
      title: pkg.metaTitle, description: pkg.metaDesc, type: 'website',
      url: `${SITE.baseUrl}/packages/${pkg.slug}`, siteName: SITE.name, locale: 'en_IN',
      images: pkg.photo ? [{ url: pkg.photo, width:900, height:560, alt: pkg.name }] : [],
    },
    twitter: { card:'summary_large_image', title: pkg.metaTitle, description: pkg.metaDesc, images: pkg.photo ? [pkg.photo] : [] },
  };
}

const CATEGORY_GUIDES = {
  'char-dham': [
    { label:'Char Dham Yatra 2026 Guide', href:'/char-dham-yatra' },
    { label:'Best Time for Char Dham', href:'/blog/best-time-char-dham' },
    { label:'Packing List', href:'/blog/char-dham-yatra-packing-list' },
    { label:'Cost Breakdown', href:'/blog/char-dham-yatra-cost' },
    { label:'Registration Guide', href:'/blog/char-dham-yatra-registration' },
  ],
  'do-dham': [
    { label:'Kedarnath Yatra Guide', href:'/kedarnath-yatra' },
    { label:'Kedarnath Trek Guide', href:'/blog/kedarnath-trek-guide' },
    { label:'Badrinath Yatra Guide', href:'/blog/badrinath-yatra-guide' },
    { label:'Best Time to Visit', href:'/blog/best-time-char-dham' },
  ],
  'single-dham': [
    { label:'Kedarnath Yatra Guide', href:'/kedarnath-yatra' },
    { label:'Kedarnath Trek Guide', href:'/blog/kedarnath-trek-guide' },
    { label:'Kedarnath Helicopter Booking', href:'/blog/kedarnath-helicopter-booking' },
    { label:'Badrinath Yatra Guide', href:'/blog/badrinath-yatra-guide' },
    { label:'Haridwar to Kedarnath Route', href:'/blog/haridwar-to-kedarnath' },
  ],
  'helicopter': [
    { label:'Kedarnath Helicopter Guide', href:'/blog/kedarnath-helicopter-booking' },
    { label:'Char Dham 2026 Overview', href:'/char-dham-yatra' },
    { label:'Senior Citizen Char Dham', href:'/blog/senior-citizen-char-dham' },
  ],
  'uttarakhand': [
    { label:'Valley of Flowers Trek', href:'/blog/valley-of-flowers-trek' },
    { label:'Rishikesh Adventure Guide', href:'/blog/rishikesh-adventure-guide' },
    { label:'Best Time to Visit', href:'/blog/best-time-char-dham' },
  ],
};

function Schemas({ pkg }) {
  const trip = {
    '@context':'https://schema.org','@type':'TouristTrip',
    '@id':`${SITE.baseUrl}/packages/${pkg.slug}#trip`,
    name:pkg.name, description:pkg.metaDesc,
    touristType:['Pilgrim','ReligiousTourist'],
    url:`${SITE.baseUrl}/packages/${pkg.slug}`,
    image:pkg.photo||'', duration:`P${pkg.duration.days}D`,
    itinerary:{ '@type':'ItemList', itemListElement:pkg.itinerary.map((d,i)=>({'@type':'ListItem',position:i+1,name:`Day ${d.day}: ${d.title}`,description:d.desc})) },
    offers:{ '@type':'Offer', price:pkg.price.discounted, priceCurrency:'INR', priceValidUntil:'2026-10-31', availability:'https://schema.org/InStock', validFrom:'2026-04-01', validThrough:'2026-10-31', seller:{'@type':'TravelAgency',name:SITE.name,url:SITE.baseUrl,telephone:SITE.phone}, url:`${SITE.baseUrl}/packages/${pkg.slug}` },
    provider:{ '@type':'TravelAgency','@id':`${SITE.baseUrl}/#organization`, name:SITE.name, url:SITE.baseUrl, telephone:SITE.phone },
    startLocation:{ '@type':'Place', name:pkg.startCity, address:{'@type':'PostalAddress',addressLocality:pkg.startCity,addressRegion:'Uttarakhand',addressCountry:'IN'} },
    keywords:(pkg.tags||[]).join(', '),
    aggregateRating:{ '@type':'AggregateRating', ratingValue:'4.9', reviewCount:'850', bestRating:'5' },
  };
  const faqSchema = pkg.faqs?.length ? { '@context':'https://schema.org','@type':'FAQPage', mainEntity:pkg.faqs.map(f=>({'@type':'Question',name:f.q,acceptedAnswer:{'@type':'Answer',text:f.a}})) } : null;
  const breadcrumb = { '@context':'https://schema.org','@type':'BreadcrumbList', itemListElement:[
    {'@type':'ListItem',position:1,name:'Home',item:SITE.baseUrl},
    {'@type':'ListItem',position:2,name:'Packages',item:`${SITE.baseUrl}/packages`},
    {'@type':'ListItem',position:3,name:CATEGORIES[pkg.category]?.name||pkg.category,item:`${SITE.baseUrl}/packages/${pkg.category}`},
    {'@type':'ListItem',position:4,name:pkg.name,item:`${SITE.baseUrl}/packages/${pkg.slug}`},
  ]};
  return (<>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html:JSON.stringify(trip) }}/>
    {faqSchema && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html:JSON.stringify(faqSchema) }}/>}
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html:JSON.stringify(breadcrumb) }}/>
  </>);
}

export default function PackageDetailPage({ params }) {

  if (CATEGORY_SLUGS.includes(params.slug)) {
    const cat  = CATEGORIES[params.slug];
    const pkgs = PACKAGES.filter(p => p.category === params.slug);
    const guides = CATEGORY_GUIDES[params.slug] || [];
    return (
      <>
        <section style={{ background:'linear-gradient(145deg,var(--navy) 0%,var(--navy-mid) 60%,var(--teal) 100%)', padding:'56px 20px 44px', textAlign:'center' }}>
          <div style={{ maxWidth:720, margin:'0 auto' }}>
            {cat.cover && (
              <div style={{ width:80, height:80, borderRadius:16, overflow:'hidden', margin:'0 auto 14px', border:'3px solid rgba(255,255,255,0.25)' }}>
                <img src={cat.cover} alt={cat.name} width={80} height={80} style={{ width:'100%', height:'100%', objectFit:'cover' }} loading="eager"/>
              </div>
            )}
            <h1 className="display-title" style={{ color:'#fff', fontSize:'clamp(1.6rem,5vw,2.8rem)', marginBottom:12 }}>{cat.name} <em style={{ color:'#FFD166', fontStyle:'italic' }}>Packages 2026</em></h1>
            <p style={{ color:'rgba(255,255,255,0.75)', fontSize:14.5, lineHeight:1.7 }}>{pkgs.length} packages · From Haridwar · VIP darshan · Zero commission</p>
          </div>
        </section>
        <div style={{ background:'var(--bg)', borderBottom:'1px solid var(--border)', padding:'10px 20px' }}>
          <div style={{ maxWidth:'var(--container)', margin:'0 auto', fontSize:12, color:'var(--text-muted)', display:'flex', gap:6, flexWrap:'wrap' }}>
            <Link href="/" style={{ color:'var(--navy)', textDecoration:'none' }}>Home</Link><span>›</span>
            <Link href="/packages" style={{ color:'var(--navy)', textDecoration:'none' }}>Packages</Link><span>›</span>
            <span>{cat.name}</span>
          </div>
        </div>
        <section style={{ background:'var(--bg)', padding:'40px 20px 60px' }}>
          <div style={{ maxWidth:'var(--container)', margin:'0 auto' }}>
            <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fill,minmax(min(290px,100%),1fr))', gap:20 }}>
              {pkgs.map(p => {
                const sav = p.price.original - p.price.discounted;
                return (
                  <Link key={p.slug} href={`/packages/${p.slug}`} className="pkg-card" style={{ textDecoration:'none', color:'inherit', display:'flex', flexDirection:'column' }}>
                    <div style={{ height:200, position:'relative', overflow:'hidden', flexShrink:0 }}>
                      <div style={{ position:'absolute', inset:0, backgroundImage:p.photo?`linear-gradient(180deg,rgba(15,43,91,0.1) 0%,rgba(15,43,91,0.72) 100%),url('${p.photo}')`: 'linear-gradient(160deg,var(--navy),var(--teal))', backgroundSize:'cover', backgroundPosition:'center' }}/>
                      {p.badge && <span className="badge badge-gold" style={{ position:'absolute', top:12, left:12, zIndex:2 }}>{p.badge}</span>}
                      <span style={{ position:'absolute', top:12, right:12, background:'rgba(0,0,0,0.5)', backdropFilter:'blur(4px)', color:'#fff', fontSize:11, fontWeight:600, padding:'3px 10px', borderRadius:6, zIndex:2 }}>{p.duration.nights}N/{p.duration.days}D</span>
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
                        {p.highlights.slice(0,3).map((h,i) => <li key={i} style={{ fontSize:12.5, color:'var(--text-mid)', paddingLeft:16, position:'relative', lineHeight:1.5, marginBottom:4 }}><span style={{ position:'absolute', left:0, color:'var(--teal)', fontWeight:700, fontSize:11 }}>✓</span>{h}</li>)}
                      </ul>
                      <div style={{ display:'flex', alignItems:'flex-end', justifyContent:'space-between', paddingTop:10, borderTop:'1px solid var(--border)' }}>
                        <div>
                          <div style={{ fontSize:11, color:'var(--text-muted)', textDecoration:'line-through' }}>₹{p.price.original.toLocaleString('en-IN')}</div>
                          <div style={{ fontWeight:800, fontSize:22, color:'var(--navy)', lineHeight:1, fontFamily:'var(--font-display)' }}>₹{p.price.discounted.toLocaleString('en-IN')}</div>
                          {sav>0 && <div style={{ fontSize:11, color:'var(--green)', fontWeight:600, marginTop:2 }}>Save ₹{sav.toLocaleString('en-IN')}</div>}
                        </div>
                        <span className="btn btn-primary" style={{ fontSize:12, padding:'8px 16px' }}>View Details →</span>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
            {guides.length > 0 && (
              <div style={{ marginTop:36, background:'var(--navy-light)', borderRadius:14, padding:'20px 22px' }}>
                <div style={{ fontWeight:700, fontSize:14, color:'var(--navy)', marginBottom:14 }}>📖 {cat.name} Yatra Guides:</div>
                <div style={{ display:'flex', flexWrap:'wrap', gap:8 }}>
                  {guides.map(g => <Link key={g.href} href={g.href} style={{ background:'#fff', color:'var(--navy)', padding:'8px 16px', borderRadius:8, fontSize:13, fontWeight:600, textDecoration:'none', border:'1px solid var(--border)' }}>{g.label} →</Link>)}
                </div>
              </div>
            )}
          </div>
        </section>
      </>
    );
  }

  const pkg = getPackageBySlug(params.slug);
  if (!pkg) notFound();

  const savings  = pkg.price.original - pkg.price.discounted;
  const msg      = encodeURIComponent(`Namaste! I want to book "${pkg.name}" (${pkg.duration.nights}N/${pkg.duration.days}D).`);
  const related  = PACKAGES.filter(p => p.category === pkg.category && p.slug !== pkg.slug).slice(0,3);
  const guides   = CATEGORY_GUIDES[pkg.category] || [];

  const SH = { fontFamily:'var(--font-display)', fontSize:'1.2rem', fontWeight:600, color:'var(--navy)', letterSpacing:'-0.02em', marginBottom:14, paddingBottom:10, borderBottom:'2px solid var(--navy-light)' };

  return (
    <>
      <Schemas pkg={pkg}/>

      {/* Hero */}
      <section style={{ minHeight:340, background:pkg.photo?`linear-gradient(180deg,rgba(10,25,60,0.55) 0%,rgba(10,25,60,0.88) 100%),url('${pkg.photo}') center/cover`:'linear-gradient(145deg,var(--navy),var(--teal))', display:'flex', alignItems:'flex-end', padding:'0 20px 28px' }}>
        <div style={{ maxWidth:'var(--container)', margin:'0 auto', width:'100%' }}>
          <nav style={{ fontSize:11.5, color:'rgba(255,255,255,0.6)', marginBottom:12, display:'flex', gap:5, flexWrap:'wrap' }}>
            <Link href="/" style={{ color:'rgba(255,255,255,0.7)', textDecoration:'none' }}>Home</Link><span>›</span>
            <Link href="/packages" style={{ color:'rgba(255,255,255,0.7)', textDecoration:'none' }}>Packages</Link><span>›</span>
            <Link href={`/packages/${pkg.category}`} style={{ color:'rgba(255,255,255,0.7)', textDecoration:'none', textTransform:'capitalize' }}>{CATEGORIES[pkg.category]?.name||pkg.category}</Link><span>›</span>
            <span style={{ color:'#FFD166' }}>{pkg.name}</span>
          </nav>
          {pkg.badge && <span style={{ background:'var(--gold)', color:'#fff', fontSize:11, fontWeight:700, padding:'3px 12px', borderRadius:100, display:'inline-block', marginBottom:8 }}>{pkg.badge}</span>}
          <h1 style={{ color:'#fff', fontFamily:'var(--font-display)', fontSize:'clamp(1.5rem,3.5vw,2.4rem)', fontWeight:600, lineHeight:1.15, marginBottom:14 }}>{pkg.seoHeading||pkg.name}</h1>
          <div style={{ display:'flex', gap:8, flexWrap:'wrap' }}>
            {[{icon:'📅',val:`${pkg.duration.nights}N/${pkg.duration.days}D`},{icon:'📍',val:`${pkg.startCity} → ${pkg.endCity||pkg.startCity}`},{icon:'🎯',val:pkg.difficulty},{icon:'🚌',val:pkg.transport},{icon:'📅',val:pkg.season}].map(c=>(
              <span key={c.val} style={{ background:'rgba(255,255,255,0.15)', backdropFilter:'blur(6px)', color:'#fff', fontSize:12, padding:'5px 12px', borderRadius:100, display:'flex', gap:5, alignItems:'center' }}>{c.icon} {c.val}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Sticky bar */}
      <div className="sticky-book-bar">
        <div><span style={{ fontSize:11, color:'var(--text-muted)', display:'block' }}>from</span><span style={{ fontWeight:800, fontSize:18, color:'var(--navy)' }}>₹{pkg.price.discounted.toLocaleString('en-IN')}</span></div>
        <a href={`https://wa.me/${SITE.whatsapp}?text=${msg}`} target="_blank" rel="noopener noreferrer" style={{ flex:1, background:'#25D366', color:'#fff', padding:'10px', borderRadius:9, textAlign:'center', fontWeight:700, fontSize:13, textDecoration:'none', display:'block' }}>💬 Book via WhatsApp</a>
        <a href={`tel:${SITE.phone}`} style={{ flex:1, background:'var(--navy)', color:'#fff', padding:'10px', borderRadius:9, textAlign:'center', fontWeight:700, fontSize:13, textDecoration:'none', display:'block' }}>📞 Call Now</a>
      </div>

      <div className="detail-grid" style={{ maxWidth:1100, margin:'0 auto', padding:'28px 16px 100px', display:'grid', gridTemplateColumns:'1fr min(340px,38%)', gap:28, alignItems:'start' }}>

        {/* LEFT */}
        <div style={{ display:'flex', flexDirection:'column', gap:28 }}>

          {/* Quick stats */}
          <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(130px,1fr))', gap:10 }}>
            {[{icon:'⏱',label:'Duration',val:`${pkg.duration.nights}N/${pkg.duration.days}D`},{icon:'👥',label:'Group',val:pkg.groupSize||'2–40'},{icon:'🏔️',label:'Altitude',val:pkg.altitude||'3,583m'},{icon:'🎯',label:'Difficulty',val:pkg.difficulty},{icon:'🚌',label:'Transport',val:pkg.transport},{icon:'📅',label:'Season',val:pkg.season||'May–Oct 2026'}].map(s=>(
              <div key={s.label} style={{ background:'var(--navy-light)', borderRadius:10, padding:'12px', textAlign:'center' }}>
                <div style={{ fontSize:20, marginBottom:3 }}>{s.icon}</div>
                <div style={{ fontSize:11, color:'var(--text-muted)', marginBottom:2 }}>{s.label}</div>
                <div style={{ fontSize:12.5, fontWeight:700, color:'var(--navy)', lineHeight:1.3 }}>{s.val}</div>
              </div>
            ))}
          </div>

          {/* Highlights */}
          <section>
            <h2 style={SH}>✨ Package Highlights</h2>
            <ul style={{ listStyle:'none', display:'grid', gridTemplateColumns:'repeat(auto-fill,minmax(220px,1fr))', gap:8 }}>
              {pkg.highlights.map((h,i)=>(
                <li key={i} style={{ display:'flex', gap:8, alignItems:'flex-start', padding:'8px 10px', background:'#fff', borderRadius:8, border:'1px solid var(--border)', fontSize:13 }}>
                  <span style={{ color:'var(--teal)', fontWeight:700, flexShrink:0 }}>✓</span>
                  <span style={{ color:'var(--text-mid)' }}>{h}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Day-wise Itinerary */}
          <section>
            <h2 style={SH}>🗓️ Day-wise Itinerary</h2>
            <div style={{ position:'relative' }}>
              {pkg.itinerary.map((day,idx)=>(
                <div key={day.day} style={{ display:'grid', gridTemplateColumns:'44px 1fr', gap:0, marginBottom: idx < pkg.itinerary.length-1 ? 20 : 0 }}>
                  <div style={{ display:'flex', flexDirection:'column', alignItems:'center' }}>
                    <div style={{ width:32, height:32, background:'var(--navy)', borderRadius:'50%', display:'flex', alignItems:'center', justifyContent:'center', color:'#fff', fontSize:11, fontWeight:700, flexShrink:0 }}>D{day.day}</div>
                    {idx < pkg.itinerary.length-1 && <div style={{ width:2, flex:1, background:'var(--border)', marginTop:4 }}/>}
                  </div>
                  <div style={{ paddingTop:4, paddingLeft:8, paddingBottom: idx < pkg.itinerary.length-1 ? 16 : 0 }}>
                    <div style={{ fontWeight:700, fontSize:14, color:'var(--navy)', marginBottom:6 }}>{day.title}</div>
                    <div style={{ fontSize:13.5, color:'var(--text-mid)', lineHeight:1.75 }}>{day.desc}</div>
                    {day.meals && <div style={{ marginTop:8, display:'flex', gap:5, flexWrap:'wrap' }}>{day.meals.map(m=><span key={m} style={{ background:'var(--navy-light)', color:'var(--navy)', fontSize:11, fontWeight:600, padding:'2px 8px', borderRadius:100 }}>{m}</span>)}</div>}
                    {day.stay && <div style={{ marginTop:5, fontSize:12, color:'var(--text-muted)' }}>🏨 Stay: {day.stay}</div>}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Inclusions / Exclusions */}
          <section>
            <h2 style={SH}>✅ What&apos;s Included / Excluded</h2>
            <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(min(260px,100%),1fr))', gap:12 }}>
              <div style={{ background:'#f0fdf4', borderRadius:12, padding:'16px' }}>
                <div style={{ fontWeight:700, fontSize:13, color:'#15803d', marginBottom:10 }}>✅ Included</div>
                {(pkg.inclusions||[]).map((item,i)=><div key={i} style={{ fontSize:12.5, color:'var(--text-mid)', padding:'4px 0', borderBottom:'1px solid rgba(0,0,0,0.05)', display:'flex', gap:6 }}><span style={{ color:'#15803d', flexShrink:0 }}>✓</span>{item}</div>)}
              </div>
              <div style={{ background:'#fff1f2', borderRadius:12, padding:'16px' }}>
                <div style={{ fontWeight:700, fontSize:13, color:'#9f1239', marginBottom:10 }}>❌ Not Included</div>
                {(pkg.exclusions||[]).map((item,i)=><div key={i} style={{ fontSize:12.5, color:'var(--text-mid)', padding:'4px 0', borderBottom:'1px solid rgba(0,0,0,0.05)', display:'flex', gap:6 }}><span style={{ color:'#9f1239', flexShrink:0 }}>✗</span>{item}</div>)}
              </div>
            </div>
          </section>

          {/* Travel Tips */}
          {pkg.travelTips?.length > 0 && (
            <section>
              <h2 style={SH}>💡 Travel Tips</h2>
              <div style={{ display:'flex', flexDirection:'column', gap:8 }}>
                {pkg.travelTips.map((tip,i)=>(
                  <div key={i} style={{ display:'flex', gap:10, padding:'10px 14px', background:'#fff', borderRadius:9, border:'1px solid var(--border)', fontSize:13.5, color:'var(--text-mid)', lineHeight:1.6 }}>
                    <span style={{ color:'var(--gold)', flexShrink:0 }}>💡</span>{tip}
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Local Insights */}
          {pkg.localInsights?.length > 0 && (
            <section>
              <h2 style={SH}>🧭 Local Insights</h2>
              <div style={{ display:'flex', flexDirection:'column', gap:8 }}>
                {pkg.localInsights.map((insight,i)=>(
                  <div key={i} style={{ display:'flex', gap:10, padding:'10px 14px', background:'var(--navy-light)', borderRadius:9, border:'1px solid rgba(15,43,91,0.1)', fontSize:13.5, color:'var(--text-mid)', lineHeight:1.6 }}>
                    <span style={{ flexShrink:0 }}>🧭</span>{insight}
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* FAQs */}
          {pkg.faqs?.length > 0 && (
            <section>
              <h2 style={SH}>❓ Frequently Asked Questions</h2>
              <div style={{ display:'flex', flexDirection:'column', gap:0, background:'#fff', borderRadius:12, border:'1px solid var(--border)', overflowX:'auto' }}>
                {pkg.faqs.map((faq,i)=>(
                  <div key={i} style={{ padding:'16px 20px', borderBottom:i<pkg.faqs.length-1?'1px solid var(--border)':'none' }}>
                    <div style={{ fontWeight:700, fontSize:14, color:'var(--navy)', marginBottom:7 }}>Q. {faq.q}</div>
                    <div style={{ fontSize:13.5, color:'var(--text-mid)', lineHeight:1.7 }}>{faq.a}</div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Related Guides — FIX 3 */}
          {guides.length > 0 && (
            <section>
              <h2 style={SH}>📖 Related Guides & Resources</h2>
              <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fill,minmax(210px,1fr))', gap:10 }}>
                {guides.map(g=>(
                  <Link key={g.href} href={g.href} style={{ display:'flex', alignItems:'center', gap:10, padding:'12px 14px', background:'#fff', borderRadius:10, border:'1px solid var(--border)', textDecoration:'none' }}>
                    <span style={{ fontSize:18 }}>📖</span>
                    <span style={{ fontSize:13, fontWeight:600, color:'var(--navy)', lineHeight:1.3 }}>{g.label} →</span>
                  </Link>
                ))}
              </div>
            </section>
          )}

          {/* Related Packages */}
          {related.length > 0 && (
            <section>
              <h2 style={SH}>🔄 You Might Also Like</h2>
              <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fill,minmax(200px,1fr))', gap:12 }}>
                {related.map(r=>(
                  <Link key={r.slug} href={`/packages/${r.slug}`} style={{ display:'block', background:'#fff', borderRadius:10, padding:'14px', border:'1px solid var(--border)', textDecoration:'none' }}>
                    <div style={{ fontWeight:700, fontSize:13, color:'var(--text)', marginBottom:4, lineHeight:1.3 }}>{r.name}</div>
                    <div style={{ fontSize:11, color:'var(--text-muted)', marginBottom:6 }}>{r.duration.nights}N/{r.duration.days}D</div>
                    <div style={{ fontWeight:800, fontSize:17, color:'var(--navy)' }}>₹{r.price.discounted.toLocaleString('en-IN')}</div>
                  </Link>
                ))}
              </div>
            </section>
          )}

          {/* Bottom CTA */}
          <section style={{ background:'linear-gradient(135deg,var(--navy),var(--teal))', borderRadius:16, padding:'28px 24px', textAlign:'center' }}>
            <h2 style={{ color:'#fff', fontFamily:'var(--font-display)', fontSize:'1.4rem', marginBottom:10 }}>Ready to Book?</h2>
            <p style={{ color:'rgba(255,255,255,0.75)', fontSize:14, marginBottom:20 }}>Free itinerary · Zero commission · Reply in 2 hrs</p>
            <div style={{ display:'flex', gap:12, justifyContent:'center', flexWrap:'wrap' }}>
              <a href={`https://wa.me/${SITE.whatsapp}?text=${msg}`} target="_blank" rel="noopener noreferrer" style={{ background:'#25D366', color:'#fff', padding:'12px 26px', borderRadius:9, fontWeight:700, fontSize:14, textDecoration:'none' }}>💬 Book on WhatsApp</a>
              <a href={`tel:${SITE.phone}`} style={{ background:'#fff', color:'var(--navy)', padding:'12px 26px', borderRadius:9, fontWeight:700, fontSize:14, textDecoration:'none' }}>📞 {SITE.phone}</a>
            </div>
          </section>
        </div>

        {/* RIGHT — Sticky booking card */}
        <div style={{ position:'sticky', top:80 }}>
          <div style={{ borderRadius:16, overflow:'hidden', border:'2px solid var(--border)', boxShadow:'var(--shadow-lg)' }}>
            <div style={{ background:'linear-gradient(135deg,var(--navy),var(--navy-mid))', padding:'20px 20px 16px', textAlign:'center' }}>
              <p style={{ color:'rgba(255,255,255,0.6)', fontSize:12, marginBottom:3 }}>Starting from</p>
              {savings>0 && <p style={{ color:'rgba(255,255,255,0.4)', fontSize:13, textDecoration:'line-through' }}>₹{pkg.price.original.toLocaleString('en-IN')}</p>}
              <p style={{ color:'#fff', fontWeight:800, fontSize:36, lineHeight:1, margin:'4px 0', fontFamily:'var(--font-display)' }}>₹{pkg.price.discounted.toLocaleString('en-IN')}</p>
              <p style={{ color:'rgba(255,255,255,0.6)', fontSize:12 }}>per person · all inclusive</p>
              {savings>0 && <p style={{ color:'#6ee7b7', fontSize:12, fontWeight:600, marginTop:6 }}>Save ₹{savings.toLocaleString('en-IN')}!</p>}
            </div>
            <div style={{ padding:16, background:'#fff', display:'flex', flexDirection:'column', gap:10 }}>
              <a href={`https://wa.me/${SITE.whatsapp}?text=${msg}`} target="_blank" rel="noopener noreferrer" style={{ background:'#25D366', color:'#fff', padding:'13px', borderRadius:10, textAlign:'center', fontWeight:700, fontSize:14, textDecoration:'none', display:'block' }}>💬 Book via WhatsApp</a>
              <a href={`tel:${SITE.phone}`} style={{ background:'var(--navy)', color:'#fff', padding:'12px', borderRadius:10, textAlign:'center', fontWeight:700, fontSize:13, textDecoration:'none', display:'block' }}>📞 Call to Book</a>
              <Link href="/contact" style={{ textAlign:'center', fontSize:12, color:'var(--navy)', textDecoration:'none', display:'block', padding:'6px 0' }}>✉️ Send Enquiry Form</Link>
            </div>
            <div style={{ padding:'14px 16px', background:'var(--bg)', borderTop:'1px solid var(--border)' }}>
              {[{icon:'⏱',label:'Duration',val:`${pkg.duration.nights}N/${pkg.duration.days}D`},{icon:'📍',label:'Start',val:pkg.startCity},{icon:'🎯',label:'Difficulty',val:pkg.difficulty},{icon:'📅',label:'Season',val:pkg.season||'May–Oct 2026'}].map(s=>(
                <div key={s.label} style={{ display:'flex', justifyContent:'space-between', padding:'6px 0', borderBottom:'1px solid var(--border)', fontSize:12.5 }}>
                  <span style={{ color:'var(--text-muted)' }}>{s.icon} {s.label}</span>
                  <span style={{ fontWeight:600, color:'var(--text)' }}>{s.val}</span>
                </div>
              ))}
            </div>
            <div style={{ padding:'12px 16px', background:'#fff' }}>
              {['✅ Zero commission','🛡️ Verified operator','💰 Price match guarantee','📋 Free registration help'].map(t=>(
                <div key={t} style={{ fontSize:12, color:'var(--text-mid)', padding:'3px 0' }}>{t}</div>
              ))}
            </div>
            {guides.length>0 && (
              <div style={{ padding:'12px 16px', background:'var(--navy-light)', borderTop:'1px solid var(--border)' }}>
                <div style={{ fontSize:11.5, fontWeight:700, color:'var(--navy)', marginBottom:8 }}>📖 Helpful Guides:</div>
                {guides.slice(0,3).map(g=>(
                  <Link key={g.href} href={g.href} style={{ display:'block', fontSize:12, color:'var(--navy)', textDecoration:'none', padding:'4px 0', borderBottom:'1px solid rgba(15,43,91,0.08)' }}>→ {g.label}</Link>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
