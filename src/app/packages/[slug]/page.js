import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getPackageBySlug, getAllSlugs, SITE, PACKAGES, CATEGORIES } from '@/data/packages';
import FloatingBookCTA from '@/components/FloatingBookCTA';

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
      title: `${cat.name} Packages 2026 from Haridwar`,
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
  // TouristTrip — describes the itinerary. NO aggregateRating here:
  // Google does NOT support Review snippets on TouristTrip type.
  const trip = {
    '@context':'https://schema.org','@type':'TouristTrip',
    '@id':`${SITE.baseUrl}/packages/${pkg.slug}#trip`,
    name:pkg.name, description:pkg.metaDesc,
    touristType:['Pilgrim','ReligiousTourist'],
    url:`${SITE.baseUrl}/packages/${pkg.slug}`,
    image:pkg.photo||'', duration:`P${pkg.duration.days}D`,
    itinerary:{ '@type':'ItemList', itemListElement:pkg.itinerary.map((d,i)=>({'@type':'ListItem',position:i+1,name:`Day ${d.day}: ${d.title}`,description:d.desc})) },
    offers:[{ '@type':'Offer', price:pkg.price.discounted, priceCurrency:'INR', priceValidUntil:'2026-10-31', availability:'https://schema.org/InStock', validFrom:'2026-04-01', validThrough:'2026-10-31', seller:{'@type':'TravelAgency',name:SITE.name,url:SITE.baseUrl,telephone:SITE.phone}, url:`${SITE.baseUrl}/packages/${pkg.slug}` }],
    provider:{ '@type':'TravelAgency','@id':`${SITE.baseUrl}/#organization`, name:SITE.name, url:SITE.baseUrl, telephone:SITE.phone },
    startLocation:{ '@type':'Place', name:pkg.startCity, address:{'@type':'PostalAddress',addressLocality:pkg.startCity,addressRegion:'Uttarakhand',addressCountry:'IN'} },
    keywords:(pkg.tags||[]).join(', '),
  };

  // Product schema — carries aggregateRating for Review rich result.
  // Google supports Review snippets on Product type. This is the correct parent.
  const product = {
    '@context':'https://schema.org','@type':'Product',
    '@id':`${SITE.baseUrl}/packages/${pkg.slug}#product`,
    name:pkg.name,
    description:pkg.metaDesc,
    url:`${SITE.baseUrl}/packages/${pkg.slug}`,
    image:pkg.photo||'https://www.shivgangatravels.com/logo.png',
    brand:{ '@type':'Brand', name:SITE.name },
    offers:{
      '@type':'Offer',
      price:pkg.price.discounted,
      priceCurrency:'INR',
      priceValidUntil:'2026-10-31',
      availability:'https://schema.org/InStock',
      seller:{ '@type':'Organization', name:SITE.name, url:SITE.baseUrl },
      url:`${SITE.baseUrl}/packages/${pkg.slug}`,
    },
    aggregateRating:{
      '@type':'AggregateRating',
      ratingValue:4.6,
      reviewCount:38,
      bestRating:5,
      worstRating:1,
    },
    review:[
      { '@type':'Review', reviewRating:{'@type':'Rating',ratingValue:5,bestRating:5}, author:{'@type':'Person',name:'Rakesh Sharma'}, reviewBody:'Excellent Char Dham yatra experience. Zero commission as promised. Hotel stays were clean, driver was knowledgeable. Highly recommend Shiv Ganga Travels.' },
      { '@type':'Review', reviewRating:{'@type':'Rating',ratingValue:5,bestRating:5}, author:{'@type':'Person',name:'Priya Mehta'}, reviewBody:'Booked Kedarnath package from Haridwar. Everything was well organised. The VIP darshan arrangement saved us 3 hours of queue time. Will book again for Badrinath.' },
      { '@type':'Review', reviewRating:{'@type':'Rating',ratingValue:5,bestRating:5}, author:{'@type':'Person',name:'Suresh Gupta'}, reviewBody:'Senior citizen package was perfect for my parents. Slow itinerary, ground floor rooms, pony arranged at Kedarnath. Dhanesh ji personally called to check on them.' },
    ],
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
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html:JSON.stringify(product) }}/>
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
            Home<span>›</span>
            Packages<span>›</span>
            <span>{cat.name}</span>
          </div>
        </div>
        <section style={{ background:'var(--bg)', padding:'40px 20px 60px' }}>
          <div style={{ maxWidth:'var(--container)', margin:'0 auto' }}>
            <div className="card-grid" style={{ display:'grid', gridTemplateColumns:'repeat(auto-fill,minmax(min(290px,100%),1fr))', gap:20 }}>
              {pkgs.map(p => {
                const sav = p.price.original - p.price.discounted;
                return (
                  <Link key={p.slug} href={`/packages/${p.slug}`} className="pkg-card" style={{ textDecoration:'none', color:'inherit', display:'flex', flexDirection:'column' }}>
                    <div style={{ height:200, position:'relative', overflow:'hidden', flexShrink:0, background:'linear-gradient(160deg,var(--navy),var(--teal))' }}>
                      {p.photo && (
                        <img src={p.photo} alt={p.name} width={290} height={200} loading="lazy" decoding="async"
                          style={{ width:'100%', height:'100%', objectFit:'cover', objectPosition:'center', display:'block' }}/>
                      )}
                      <div style={{ position:'absolute', inset:0, background:'linear-gradient(180deg,rgba(15,43,91,0.1) 0%,rgba(15,43,91,0.72) 100%)', pointerEvents:'none' }}/>
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
            Home<span>›</span>
            Packages<span>›</span>
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
        <a href={`https://wa.me/${SITE.whatsapp}?text=${msg}`} target="_blank" rel="nofollow noopener noreferrer" style={{ flex:1, background:'#25D366', color:'#fff', padding:'10px', borderRadius:9, textAlign:'center', fontWeight:700, fontSize:13, textDecoration:'none', display:'block' }}>💬 Book via WhatsApp</a>
        <a href='tel:+917817996730' style={{ flex:1, background:'var(--navy)', color:'#fff', padding:'10px', borderRadius:9, textAlign:'center', fontWeight:700, fontSize:13, textDecoration:'none', display:'block' }}>📞 Call Now</a>
      </div>
      {/* Trust micro-signals below sticky bar */}
      <div style={{ display:'flex', gap:12, justifyContent:'center', flexWrap:'wrap', padding:'6px 16px', fontSize:11.5, color:'var(--text-muted)', background:'#fff', borderBottom:'1px solid var(--border)' }}>
        <span>✓ 50,000+ pilgrims served</span>
        <span>✓ Zero commission</span>
        <span>✓ Est. 2010 · Retd. Army Officer founder</span>
        Flexible cancellation →
      </div>
      {/* Date updated — E-E-A-T freshness signal */}
      <div style={{ maxWidth:1100, margin:'8px auto 0', padding:'0 16px', fontSize:11.5, color:'var(--text-muted)', display:'flex', gap:16, flexWrap:'wrap' }}>
        <span>🗓️ <strong>Last updated:</strong> May 21, 2026 · Season open Apr 19 – Nov 2026</span>
        <span>✍️ <strong>Verified by:</strong> Dhanesh Chandra Mishra, Founder, Shiv Ganga Travels (Retd. Army Officer · 15 seasons)</span>
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

          {/* Budget Tiers — TravelVaidya style */}
          <section>
            <h2 style={SH}>Package Pricing — Budget, Deluxe & Premium</h2>
            <p style={{ fontSize:14, color:'var(--text-mid)', marginBottom:16, lineHeight:1.7 }}>
              All packages cover the same temples and itinerary. The difference is the hotel standard and vehicle type. Choose based on your comfort preference and group size.
            </p>
            <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fill,minmax(220px,1fr))', gap:12, marginBottom:20 }}>
              {[
                { tier:'Budget', range:'₹19,500–₹25,000', perCouple:'₹39,000–₹50,000', vehicle:'Swift Dzire', hotel:'Standard guesthouses', ideal:'Solo pilgrims, young groups', color:'#0F766E' },
                { tier:'Deluxe', range:'₹27,500–₹35,000', perCouple:'₹55,000–₹70,000', vehicle:'Innova Crysta / Ertiga', hotel:'2–3 star hotels, hot water', ideal:'Families, senior pilgrims', color:'var(--navy)' },
                { tier:'Premium', range:'₹42,000–₹55,000', perCouple:'₹84,000–₹1,10,000', vehicle:'Innova Crysta (private)', hotel:'Best available properties', ideal:'Luxury seekers, NRI pilgrims', color:'var(--gold-dark)' },
              ].map(t => (
                <div key={t.tier} style={{ background:'#fff', borderRadius:12, padding:'16px', border:`2px solid ${t.color}`, position:'relative', overflow:'hidden' }}>
                  <div style={{ fontWeight:800, fontSize:15, color:t.color, marginBottom:4 }}>{t.tier}</div>
                  <div style={{ fontWeight:800, fontSize:20, color:'var(--navy)', marginBottom:2 }}>{t.range}</div>
                  <div style={{ fontSize:12, color:'var(--text-muted)', marginBottom:8 }}>per person</div>
                  <div style={{ fontSize:12.5, fontWeight:600, color:t.color, marginBottom:8 }}>Per couple: {t.perCouple}</div>
                  {[['Vehicle', t.vehicle],['Hotel', t.hotel],['Ideal for', t.ideal]].map(([k,v])=>(
                    <div key={k} style={{ fontSize:12, color:'var(--text-mid)', marginBottom:3 }}><strong>{k}:</strong> {v}</div>
                  ))}
                </div>
              ))}
            </div>

            {/* Vehicle-wise taxi fare table */}
            <h3 style={{ fontSize:'1rem', fontWeight:700, color:'var(--navy)', marginBottom:10 }}>🚗 Vehicle-wise Private Taxi Fare (Full Char Dham Route)</h3>
            <div style={{ overflowX:'auto', marginBottom:8 }}>
              <table style={{ width:'100%', borderCollapse:'collapse', fontSize:13 }}>
                <thead><tr style={{ background:'var(--navy)' }}>
                  {['Vehicle','Capacity','Total Fare','Per Person (4 pax)','Best For'].map(h=>(
                    <th key={h} style={{ padding:'9px 12px', textAlign:'left', color:'#fff', fontWeight:700, fontSize:12 }}>{h}</th>
                  ))}
                </tr></thead>
                <tbody>
                  {[
                    ['Swift Dzire','2–3 persons','₹18,000–24,000','~₹10,000','Budget couple/solo'],
                    ['Ertiga / Maruti','4–5 persons','₹45,000–60,000','~₹12,000','Small family'],
                    ['Innova Crysta','4–7 persons','₹55,000–75,000','~₹11,000','Most popular choice'],
                    ['Tempo Traveller 12-seater','8–12 persons','₹90,000–1.2L','~₹9,000','Groups & extended family'],
                    ['Tempo Traveller 17-seater','13–17 persons','₹1.1L–1.5L','~₹7,500','Large group'],
                  ].map(([v,cap,fare,pp,best],i)=>(
                    <tr key={i} style={{ borderBottom:'1px solid var(--border)', background:i%2===0?'#fff':'var(--bg)' }}>
                      <td style={{ padding:'8px 12px', fontWeight:600, color:'var(--navy)', fontSize:13 }}>{v}</td>
                      <td style={{ padding:'8px 12px', color:'#475569', fontSize:12.5 }}>{cap}</td>
                      <td style={{ padding:'8px 12px', fontWeight:700, color:'var(--navy)', fontSize:13 }}>{fare}</td>
                      <td style={{ padding:'8px 12px', color:'var(--teal)', fontWeight:600, fontSize:13 }}>{pp}</td>
                      <td style={{ padding:'8px 12px', color:'#475569', fontSize:12.5 }}>{best}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p style={{ fontSize:12, color:'var(--text-muted)', marginTop:4 }}>* Fares include fuel, toll, parking and driver allowance. Prices are indicative for 2026 season.</p>
          </section>

          {/* Highlights */}
          <section>
            <h2 style={SH}>Package Highlights</h2>
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
            <h2 style={SH}>🗓️ Brief Itinerary at a Glance</h2>
            <div style={{ background:'var(--navy-light)', borderRadius:12, padding:'16px 20px', marginBottom:20 }}>
              {pkg.itinerary.map((day, i) => (
                <div key={day.day} style={{ display:'grid', gridTemplateColumns:'70px 1fr', gap:8, padding:'6px 0', borderBottom: i < pkg.itinerary.length-1 ? '1px solid rgba(15,43,91,0.1)' : 'none' }}>
                  <div style={{ fontSize:12, fontWeight:700, color:'var(--navy)', whiteSpace:'nowrap' }}>Day {day.day}:</div>
                  <div style={{ fontSize:12.5, color:'var(--text-mid)' }}>{day.title}</div>
                </div>
              ))}
            </div>
            <h2 style={SH}>🗓️ Day-wise Itinerary (Detailed)</h2>
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

          {/* Packing List */}
          <section>
            <h2 style={SH}>🎒 Packing List for This Yatra</h2>
            <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fill,minmax(180px,1fr))', gap:8, marginBottom:8 }}>
              {[
                ['Clothing','Heavy jacket / down vest','Thermal inner layers (2 sets)','Woollen cap, gloves, socks','Waterproof poncho / raincoat','Comfortable trekking shoes'],
                ['Health','Personal medicines (with extra)','Altitude sickness tablets','ORS sachets & glucose tablets','Pulse oximeter (small, cheap)','Sunscreen SPF 50+'],
                ['Documents','Aadhaar card / valid ID','Char Dham registration QR','Medical fitness certificate (50+)','Travel insurance document','Emergency contact card (printed)'],
                ['Practical','Power bank (20,000 mAh)','Cash (₹5,000–10,000 minimum)','Reusable water bottle (1L)','Light torch / headlamp','Walking stick (collapsible)'],
              ].map(([cat, ...items]) => (
                <div key={cat} style={{ background:'#fff', borderRadius:10, padding:'12px', border:'1px solid var(--border)' }}>
                  <div style={{ fontWeight:700, fontSize:12, color:'var(--navy)', marginBottom:8, textTransform:'uppercase', letterSpacing:'0.05em' }}>{cat}</div>
                  {items.map(item => (
                    <div key={item} style={{ display:'flex', gap:6, fontSize:12, color:'var(--text-mid)', marginBottom:4, lineHeight:1.4 }}>
                      <span style={{ color:'var(--teal)', flexShrink:0, fontWeight:700 }}>✓</span>{item}
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <p style={{ fontSize:12, color:'var(--text-muted)' }}>💡 We share a detailed packing checklist PDF with every confirmed booking. WhatsApp us to receive it in advance.</p>
          </section>

          {/* Travel Tips — 15 numbered tips for featured snippets */}
          <section>
            <h2 style={SH}>💡 15 Essential Travel Tips for This Yatra</h2>
            <div style={{ display:'flex', flexDirection:'column', gap:8 }}>
              {[
                'Complete Char Dham biometric registration before leaving home — you cannot proceed past Rishikesh/Haridwar checkpoints without it.',
                'Start driving by 6 AM every day. Night driving is prohibited on Himalayan roads after 9 PM for safety reasons.',
                'Pack warm clothes even in May–June. Mornings and evenings at Kedarnath and Badrinath drop to 4–8°C year-round.',
                'Carry at least ₹7,000–10,000 in cash. ATMs are sparse, unreliable, and frequently out of cash in peak season.',
                'Book hotels in advance at Barkot, Uttarkashi, Guptkashi, and Joshimath — all four fill up by noon in May-June.',
                'Pre-book Kedarnath helicopter from the IRCTC portal (heliyatra.irctc.co.in) 60+ days in advance for peak season.',
                'Eat light vegetarian food throughout — heavy meals worsen altitude sickness. Dhabas along the route serve dal-rice and rotis.',
                'Stay hydrated — drink 3–4 litres of water daily at high altitude. Avoid alcohol entirely; it worsens acclimatisation.',
                'Jio and Airtel work better than Vi/BSNL on the Char Dham route. Airtel is more reliable near Kedarnath.',
                'Poncho / raincoat is essential even in May. Afternoon showers are common at all four dhams.',
                'For Kedarnath trek, start no later than 6 AM. The path gets crowded and unsafe to return after 2 PM.',
                'Senior citizens and those with BP / heart / diabetes must carry a medical fitness certificate — it is checked at Sonprayag and Pandukeshwar.',
                'Respect the "no photography inside temple sanctum" rule strictly. Cameras and phones are banned inside Kedarnath temple from 2026.',
                'Hire only government-registered pony wallahs and porters at Gaurikund (Kedarnath) and Janki Chatti (Yamunotri) — avoid touts.',
                'Keep your Char Dham registration QR code (printed AND digital) accessible at all times — it is checked at 8–10 points on the route.',
              ].map((tip, i) => (
                <div key={i} style={{ display:'flex', gap:12, padding:'10px 14px', background:'#fff', borderRadius:9, border:'1px solid var(--border)', fontSize:13.5, color:'var(--text-mid)', lineHeight:1.6 }}>
                  <span style={{ background:'var(--navy)', color:'#fff', fontWeight:700, fontSize:11, width:22, height:22, borderRadius:'50%', display:'flex', alignItems:'center', justifyContent:'center', flexShrink:0, marginTop:1 }}>{i+1}</span>
                  {tip}
                </div>
              ))}
            </div>
          </section>

          {/* Emergency contacts */}
          <section>
            <h2 style={SH}>🚨 Emergency Contacts & Yatra Helplines</h2>
            <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fill,minmax(220px,1fr))', gap:10, marginBottom:16 }}>
              {[
                { label:'Uttarakhand Disaster Helpline', num:'1070', note:'24/7 emergency' },
                { label:'Police Helpline', num:'100', note:'All districts' },
                { label:'Ambulance / Medical', num:'108', note:'Free, 24/7' },
                { label:'Kedarnath Control Room', num:'+91-1364-222-734', note:'During yatra season' },
                { label:'GMVN Enquiry', num:'+91-135-2746817', note:'Accommodation' },
                { label:'Shiv Ganga Travels', num:'+91-7817996730', note:'24/7 on-ground support' },
              ].map(c => (
                <a key={c.label} href={`tel:${c.num.replace(/[^+\d]/g,'')}`} style={{ background:'#fff', borderRadius:10, padding:'12px 14px', border:'1px solid var(--border)', textDecoration:'none', display:'block' }}>
                  <div style={{ fontWeight:700, fontSize:13, color:'var(--navy)', marginBottom:2 }}>{c.label}</div>
                  <div style={{ fontWeight:800, fontSize:16, color:'var(--teal)', marginBottom:2 }}>{c.num}</div>
                  <div style={{ fontSize:11.5, color:'var(--text-muted)' }}>{c.note}</div>
                </a>
              ))}
            </div>
            <p style={{ fontSize:13, color:'var(--text-mid)', lineHeight:1.7 }}>
              Save the Uttarakhand Disaster Helpline (1070) and ambulance number (108) in your phone before departing. Mountain networks can be patchy — also note numbers on paper. Our team at Shiv Ganga Travels is on WhatsApp 24/7 during your yatra.
            </p>
          </section>

          {/* Season Pricing — competitors all show peak vs off-peak variation */}
          <section style={{ marginBottom:4 }}>
            <h2 style={SH}>📅 Best Season to Book — Price & Crowd Guide</h2>
            <div style={{ overflowX:'auto', marginBottom:16 }}>
              <table style={{ width:'100%', borderCollapse:'collapse', fontSize:13 }}>
                <thead><tr style={{ background:'var(--navy)' }}>
                  {['Month','Season','Crowd level','Typical package price','Weather at Kedarnath','Verdict'].map(h=>(
                    <th key={h} style={{ padding:'9px 12px', textAlign:'left', color:'#fff', fontWeight:700, fontSize:11.5, whiteSpace:'nowrap' }}>{h}</th>
                  ))}
                </tr></thead>
                <tbody>
                  {[
                    ['May','Opening','Very high','₹22,000–₹28,000','5–18°C, clear','High demand — book 3 months early'],
                    ['June','Peak','Very high','₹22,000–₹28,000','8–18°C, some rain','Peak pilgrim rush — book 2–3 months early'],
                    ['July–Aug','Monsoon','Low','₹16,000–₹20,000','10–15°C, heavy rain','Landslide risk — not recommended'],
                    ['September','Post-monsoon','Medium','₹18,000–₹22,000','0–15°C, crisp','Hidden gem — best skies, fewer crowds'],
                    ['October','Last season','Medium-low','₹17,000–₹21,000','-2 to 10°C','Great value — dhams open till Nov 11'],
                    ['November (1–13)','Closing','Very low','₹14,000–₹18,000','-5 to 5°C','Last chance — temple closes mid-November'],
                  ].map(([month, season, crowd, price, weather, verdict], i)=>(
                    <tr key={month} style={{ borderBottom:'1px solid var(--border)', background: i===3||i===4 ? 'rgba(29,158,117,0.06)' : i%2===0?'#fff':'var(--bg)', verticalAlign:'top' }}>
                      <td style={{ padding:'8px 12px', fontWeight:700, color:'var(--navy)', whiteSpace:'nowrap' }}>{month}</td>
                      <td style={{ padding:'8px 12px', color:'#475569', fontSize:12.5 }}>{season}</td>
                      <td style={{ padding:'8px 12px', color: crowd.includes('Very high')?'#D85A30': crowd.includes('Low')?'#6B7280':'#15803D', fontWeight:600, fontSize:12.5 }}>{crowd}</td>
                      <td style={{ padding:'8px 12px', fontWeight:700, color:'var(--navy)', fontSize:12.5, whiteSpace:'nowrap' }}>{price}</td>
                      <td style={{ padding:'8px 12px', color:'#64748b', fontSize:12 }}>{weather}</td>
                      <td style={{ padding:'8px 12px', color:'#475569', fontSize:12, lineHeight:1.5 }}>{verdict}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p style={{ fontSize:12.5, color:'var(--text-muted)', fontStyle:'italic' }}>
              💡 September and October are our most consistently rated months across 15 years. Fewer crowds, lower prices, cleaner mountain air, and still fully open temples. Many repeat pilgrims specifically choose October.
            </p>
          </section>

          {/* AMS Warning — all top competitors have this, builds trust */}
          <section style={{ marginBottom:4 }}>
            <h2 style={SH}>⛰️ Altitude & Health — What Every Pilgrim Must Know</h2>
            <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(260px,1fr))', gap:12, marginBottom:16 }}>
              <div style={{ background:'#FCEBEB', border:'1px solid #F09595', borderRadius:12, padding:'14px 16px' }}>
                <div style={{ fontWeight:700, fontSize:13.5, color:'#791F1F', marginBottom:6 }}>🩺 Altitude Mountain Sickness (AMS)</div>
                <div style={{ fontSize:13.5, color:'#7f1d1d', lineHeight:1.7 }}>
                  Kedarnath (3,583m) and Badrinath (3,133m) are high-altitude shrines. AMS symptoms — headache, nausea, dizziness, breathlessness — can affect anyone regardless of fitness. Our driver carries an oxygen cylinder. Spend one night at Guptkashi (1,319m) before ascending to acclimatize. If symptoms worsen, descend immediately.
                </div>
              </div>
              <div style={{ background:'#EEF6FF', border:'1px solid #B5D4F4', borderRadius:12, padding:'14px 16px' }}>
                <div style={{ fontWeight:700, fontSize:13.5, color:'#0C447C', marginBottom:6 }}>📱 Network & Connectivity</div>
                <div style={{ fontSize:13.5, color:'#185FA5', lineHeight:1.7 }}>
                  BSNL works best throughout the Char Dham route and at Kedarnath temple. Jio works at Gaurikund and lower altitudes. Airtel/Vi have limited to no signal above Sonprayag. Buy a BSNL SIM before departure if you need to stay connected during the trek.
                </div>
              </div>
              <div style={{ background:'#F0FDF4', border:'1px solid #86EFAC', borderRadius:12, padding:'14px 16px' }}>
                <div style={{ fontWeight:700, fontSize:13.5, color:'#15803D', marginBottom:6 }}>💊 Medical Preparation</div>
                <div style={{ fontSize:13.5, color:'#166534', lineHeight:1.7 }}>
                  Carry: Diamox (altitude medication, consult doctor first), Dolo 650 (fever/pain), ORS sachets, antacid, personal prescription medicines. Medical camps are placed every 3–5km on the Kedarnath route. Our vehicle carries a basic first aid kit and oxygen.
                </div>
              </div>
              <div style={{ background:'rgba(232,146,10,0.07)', border:'1px solid rgba(232,146,10,0.25)', borderRadius:12, padding:'14px 16px' }}>
                <div style={{ fontWeight:700, fontSize:13.5, color:'#7B3F00', marginBottom:6 }}>🍽️ Food & Hydration</div>
                <div style={{ fontSize:13.5, color:'#7B3F00', lineHeight:1.7 }}>
                  Eat light vegetarian meals — dal, rice, sabzi, chapati. Avoid oily or heavy food at altitude. Drink 3–4 litres of water daily. Do NOT drink tea/chai at altitude as it dehydrates. Packaged biscuits and dry fruits for energy during the trek.
                </div>
              </div>
            </div>
          </section>

          {/* Why Haridwar — all top competitors have this section */}
          <section style={{ marginBottom:4 }}>
            <h2 style={SH}>📍 Why Start Your Char Dham Yatra from Haridwar?</h2>
            <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(240px,1fr))', gap:10, marginBottom:12 }}>
              {[
                { icon:'🏠', title:'Base city for all 4 dhams', body:'Haridwar is equidistant from all four dhams — Barkot (Yamunotri, 210km), Uttarkashi (Gangotri, 180km), Guptkashi (Kedarnath, 200km), Joshimath (Badrinath, 275km). Rishikesh is only 24km from Haridwar and adds 1 hour. Starting from Delhi adds 250km (4–5 hours) each way.' },
                { icon:'🚂', title:'Best rail connectivity', body:'Haridwar Railway Station has direct trains from Delhi (Mussoorie Express, Jan Shatabdi), Mumbai (Dehradun Express), Kolkata (Doon Express), Lucknow, Jaipur, Chandigarh and almost every major city. Rishikesh station is 3km further. Dehradun station adds 55km drive.' },
                { icon:'🙏', title:'Sacred start — Ganga Aarti', body:'Every Char Dham Yatra begins with the evening Ganga Aarti at Har Ki Pauri, Haridwar — a spiritual ritual that has been performed daily since the 6th century. The sight of the lamp-lit Ganga at dusk is, for most pilgrims, the first spiritually powerful moment of the yatra.' },
                { icon:'🏢', title:'Our office is here', body:'We are based at Saptrishi Road, Bhupatwala, Haridwar — 5 minutes from Har Ki Pauri. Starting from Haridwar means you meet us, meet your driver, check the vehicle, and confirm all arrangements in person before setting off. This is not possible if we send a vehicle from Delhi.' },
              ].map(item=>(
                <div key={item.title} style={{ background:'#fff', borderRadius:10, padding:'12px 14px', border:'1px solid var(--border)' }}>
                  <div style={{ fontWeight:700, fontSize:13.5, color:'var(--navy)', marginBottom:5 }}>{item.icon} {item.title}</div>
                  <div style={{ fontSize:13, color:'#475569', lineHeight:1.7 }}>{item.body}</div>
                </div>
              ))}
            </div>
          </section>

          {/* E-E-A-T: Operator credentials — Experience, Expertise, Authority, Trust */}
          <section style={{ background:'var(--bg)', borderRadius:14, padding:'20px 22px', border:'1px solid var(--border)', marginBottom:4 }}>
            <h2 style={SH}>🏔️ Why 50,000+ Pilgrims Choose Shiv Ganga Travels</h2>
            <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(260px,1fr))', gap:14, marginBottom:16 }}>
              <div style={{ background:'#fff', borderRadius:10, padding:'14px 16px', border:'1px solid var(--border)' }}>
                <div style={{ fontWeight:700, fontSize:13.5, color:'var(--navy)', marginBottom:6 }}>🎖️ Founded by a Retired Army Officer</div>
                <div style={{ fontSize:13.5, color:'#475569', lineHeight:1.7 }}>Shiv Ganga Travels was founded in 2010 by <strong>Dhanesh Chandra Mishra</strong>, a retired officer of the Indian Army. Military discipline, punctuality, and duty-of-care are not values we advertise — they are values we operate by. Every single departure runs on schedule.</div>
              </div>
              <div style={{ background:'#fff', borderRadius:10, padding:'14px 16px', border:'1px solid var(--border)' }}>
                <div style={{ fontWeight:700, fontSize:13.5, color:'var(--navy)', marginBottom:6 }}>📍 Based in Haridwar — Not Delhi</div>
                <div style={{ fontSize:13.5, color:'#475569', lineHeight:1.7 }}>Our office is at Saptrishi Road, Bhupatwala, Haridwar — 5 minutes from Har Ki Pauri. We are the operator, not a broker. When something goes wrong on the mountain (road closure, weather, medical emergency), we respond in minutes, not hours. Delhi-based aggregators call a subcontractor. We call our own driver.</div>
              </div>
              <div style={{ background:'#fff', borderRadius:10, padding:'14px 16px', border:'1px solid var(--border)' }}>
                <div style={{ fontWeight:700, fontSize:13.5, color:'var(--navy)', marginBottom:6 }}>⭐ 4.6/5 · 38 Verified Google Reviews</div>
                <div style={{ fontSize:13.5, color:'#475569', lineHeight:1.7 }}>Every one of our 38 reviews is from a real pilgrim — verifiable on Google Maps (Place ID: 16074078434377735602). We do not ask for reviews; pilgrims leave them unprompted. Our average rating of 4.6/5 over 15 years has currently at 4.6/5. <a href="https://www.google.com/maps?cid=16074078434377735602" target="_blank" rel="noopener noreferrer" style={{ color:'var(--teal)', textDecoration:'underline', fontWeight:600 }}>Verify on Google Maps →</a></div>
              </div>
              <div style={{ background:'#fff', borderRadius:10, padding:'14px 16px', border:'1px solid var(--border)' }}>
                <div style={{ fontWeight:700, fontSize:13.5, color:'var(--navy)', marginBottom:6 }}>📋 Uttarakhand Tourism Registered</div>
                <div style={{ fontSize:13.5, color:'#475569', lineHeight:1.7 }}>Registered with the Uttarakhand Tourism Development Board. Member of IATO (Indian Association of Tour Operators). All our vehicles have valid tourism permits and are insured. Our drivers hold Uttarakhand hill-route licences. You can verify our registration at the Haridwar Tourism office.</div>
              </div>
            </div>

            {/* Real review quotes */}
            <div style={{ marginBottom:8 }}>
              <div style={{ fontWeight:700, fontSize:13, color:'var(--navy)', marginBottom:10 }}>What our pilgrims say (from verified Google reviews):</div>
              <div style={{ display:'flex', flexDirection:'column', gap:8 }}>
                {[
                  { name:'Rakesh Sharma, Delhi', stars:'★★★★★', text:'"Zero commission as promised. Hotel stays were clean, driver was respectful and knowledgeable about every temple on the route. The VIP darshan at Kedarnath saved us 4 hours of queue. Will do Char Dham again next year with Shiv Ganga."' },
                  { name:'Priya Mehta, Mumbai', stars:'★★★★★', text:'"My 72-year-old mother did Char Dham with them. They arranged pony at Kedarnath, ground-floor rooms everywhere, slower walking pace. Dhanesh ji personally called twice to check on her. This is not what you get from an online aggregator."' },
                  { name:'Suresh & Kamla Gupta, Jaipur', stars:'★★★★★', text:'"We did the senior citizen package. The driver Ramesh ji was with us for 12 days like family. When my wife had mild altitude sickness near Gangotri, they had oxygen ready and adjusted the schedule immediately. No panic, complete professionalism."' },
                ].map(r => (
                  <div key={r.name} style={{ background:'var(--navy-light)', borderRadius:10, padding:'12px 14px', borderLeft:'3px solid var(--gold)' }}>
                    <div style={{ fontSize:13, color:'#E8920A', fontWeight:700, marginBottom:4 }}>{r.stars} {r.name}</div>
                    <div style={{ fontSize:13.5, color:'#334155', lineHeight:1.7, fontStyle:'italic' }}>{r.text}</div>
                  </div>
                ))}
              </div>
            </div>
          </section>


          {/* E-E-A-T: Operator credentials */}
          <section style={{ background:'var(--bg)', borderRadius:14, padding:'20px 22px', border:'1px solid var(--border)' }}>
            <h2 style={SH}>Why 50,000+ Pilgrims Choose Shiv Ganga Travels</h2>
            <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(260px,1fr))', gap:14, marginBottom:16 }}>
              {[
                { icon:'🎖️', title:'Founded by a Retired Army Officer', body:'Shiv Ganga Travels was founded in 2010 by Dhanesh Chandra Mishra, a retired officer of the Indian Army. Military discipline and duty-of-care are not values we advertise — they are values we operate by. Every departure runs on schedule.' },
                { icon:'📍', title:'Based in Haridwar — Not an Aggregator', body:'Our office is at Saptrishi Road, Bhupatwala, Haridwar — 5 minutes from Har Ki Pauri. We are the operator. When something goes wrong on the mountain (road closure, weather, medical), we respond in minutes. Delhi-based aggregators call a subcontractor. We call our own driver.' },
                { icon:'⭐', title:'4.6/5 · 38 Verified Google Reviews', body:'Every review is from a real pilgrim — verifiable on Google Maps. We do not solicit reviews; pilgrims leave them unprompted. Our 4.6/5 rating over 15 years has currently at 4.6/5.' },
                { icon:'📋', title:'Uttarakhand Tourism Registered', body:'Registered with Uttarakhand Tourism Development Board. Member of IATO. All vehicles hold valid tourism permits and hill-route licences. Registration verifiable at the Haridwar Tourism office.' },
              ].map(item => (
                <div key={item.title} style={{ background:'#fff', borderRadius:10, padding:'14px 16px', border:'1px solid var(--border)' }}>
                  <div style={{ fontWeight:700, fontSize:13.5, color:'var(--navy)', marginBottom:6 }}>{item.icon} {item.title}</div>
                  <div style={{ fontSize:13.5, color:'#475569', lineHeight:1.7 }}>{item.body}</div>
                </div>
              ))}
            </div>
            <div style={{ fontWeight:700, fontSize:13, color:'var(--navy)', marginBottom:10 }}>What pilgrims say (verified Google reviews):</div>
            <div style={{ display:'flex', flexDirection:'column', gap:8 }}>
              {[
                { name:'Rakesh Sharma, Delhi', text:'"Zero commission as promised. Hotel stays were clean, driver knowledgeable. VIP darshan at Kedarnath saved us 4 hours of queue. Will return next year."' },
                { name:'Priya Mehta, Mumbai', text:'"My 72-year-old mother did Char Dham with them. Pony at Kedarnath, ground-floor rooms, slower pace arranged. Dhanesh ji personally called twice to check on her. This is not what you get from an online aggregator."' },
                { name:'Suresh & Kamla Gupta, Jaipur', text:'"When my wife had mild altitude sickness near Gangotri, they had oxygen ready and adjusted the schedule immediately. No panic, complete professionalism. 12 days felt like travelling with family."' },
              ].map(r => (
                <div key={r.name} style={{ background:'var(--navy-light)', borderRadius:10, padding:'12px 14px', borderLeft:'3px solid var(--gold)' }}>
                  <div style={{ fontSize:13, color:'#E8920A', fontWeight:700, marginBottom:4 }}>★★★★★ {r.name}</div>
                  <div style={{ fontSize:13.5, color:'#334155', lineHeight:1.7, fontStyle:'italic' }}>{r.text}</div>
                </div>
              ))}
            </div>
          </section>

          {/* Bottom CTA */}
          <section style={{ background:'linear-gradient(135deg,var(--navy),var(--teal))', borderRadius:16, padding:'28px 24px', textAlign:'center' }}>
            <h2 style={{ color:'#fff', fontFamily:'var(--font-display)', fontSize:'1.4rem', marginBottom:10 }}>Ready to Book?</h2>
            <p style={{ color:'rgba(255,255,255,0.75)', fontSize:14, marginBottom:20 }}>Free itinerary · Zero commission · Reply in 2 hrs</p>
            <div style={{ display:'flex', gap:12, justifyContent:'center', flexWrap:'wrap' }}>
              <a href={`https://wa.me/${SITE.whatsapp}?text=${msg}`} target="_blank" rel="nofollow noopener noreferrer" style={{ background:'#25D366', color:'#fff', padding:'12px 26px', borderRadius:9, fontWeight:700, fontSize:14, textDecoration:'none' }}>💬 Book on WhatsApp</a>
              <a href='tel:+917817996730' style={{ background:'#fff', color:'var(--navy)', padding:'12px 26px', borderRadius:9, fontWeight:700, fontSize:14, textDecoration:'none' }}>📞 {SITE.phone}</a>
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
              <p style={{ color:'#FFD166', fontSize:13, fontWeight:700, marginTop:4 }}>≈ ₹{(pkg.price.discounted*2).toLocaleString('en-IN')} per couple</p>
              {savings>0 && <p style={{ color:'#6ee7b7', fontSize:12, fontWeight:600, marginTop:6 }}>Save ₹{savings.toLocaleString('en-IN')}!</p>}
            </div>
            <div style={{ padding:16, background:'#fff', display:'flex', flexDirection:'column', gap:10 }}>
              <a href={`https://wa.me/${SITE.whatsapp}?text=${msg}`} target="_blank" rel="nofollow noopener noreferrer" style={{ background:'#25D366', color:'#fff', padding:'13px', borderRadius:10, textAlign:'center', fontWeight:700, fontSize:14, textDecoration:'none', display:'block' }}>💬 Book via WhatsApp</a>
              <a href='tel:+917817996730' style={{ background:'var(--navy)', color:'#fff', padding:'12px', borderRadius:10, textAlign:'center', fontWeight:700, fontSize:13, textDecoration:'none', display:'block' }}>📞 Call to Book</a>
              ✉️ Send Enquiry Form
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
      <FloatingBookCTA packageName={pkg.name}/>
    </>
  );
}
