import Link from 'next/link';
import { pxAt, pxSrcSet } from '@/lib/pximg';
import { notFound } from 'next/navigation';
import { getPackageBySlug, getAllSlugs, SITE, PACKAGES, CATEGORIES, INC_STD, EXC_STD } from '@/data/packages';
import FloatingBookCTA from '@/components/FloatingBookCTA';
import { BlurFade } from '@/components/magicui/blur-fade';
import SpecRail from '@/components/lux/SpecRail';
import RouteMap from '@/components/lux/RouteMap';
import WhyBookDirect from '@/components/lux/WhyBookDirect';
import { DayTimeline, HotelShowcase, FaqList } from '@/components/lux/PackageSections';
import { nodesForPackage, hotelsForPackage, dhamDatesForPackage, stayLede, datesLede, datesHeading, datesNote, altitudeLede } from '@/data/packageRoute';
import Icon, { WhatsAppIcon } from '@/components/Icon';
import AnswerBox from '@/components/AnswerBox';
import { Pill } from '@/components/lux/primitives';
import { pageDates } from '@/lib/pageDates';

const PAGE_DATES = pageDates('/packages/[slug]');

// The /packages/<category> listing routes were retired on 17 Sep 2026 (301 to the
// hand-written hubs below). Category is now only a label and a breadcrumb.
const CATEGORY_HUB = {
  'char-dham': '/char-dham-yatra',
  'do-dham': '/do-dham-yatra',
  'single-dham': '/ek-dham-yatra',
  'helicopter': '/char-dham-helicopter',
};

export async function generateStaticParams() {
  return getAllSlugs();
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const pkg = getPackageBySlug(slug);
  if (!pkg) return {};
  return {
    title: pkg.metaTitle,
    description: pkg.metaDesc,
    keywords: pkg.tags || [],
    alternates: { canonical: `${SITE.baseUrl}/packages/${pkg.slug}` },
    ...(pkg.noindex ? { robots: { index: false, follow: true } } : {}),
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
    { label:'Badrinath Yatra Guide', href:'/badrinath-yatra' },
    { label:'Best Time to Visit', href:'/blog/best-time-char-dham' },
  ],
  'single-dham': [
    { label:'Kedarnath Yatra Guide', href:'/kedarnath-yatra' },
    { label:'Kedarnath Trek Guide', href:'/blog/kedarnath-trek-guide' },
    { label:'Kedarnath Helicopter Booking', href:'/blog/kedarnath-helicopter-booking' },
    { label:'Badrinath Yatra Guide', href:'/badrinath-yatra' },
    { label:'Haridwar to Kedarnath Route', href:'/blog/haridwar-to-kedarnath' },
  ],
  'helicopter': [
    { label:'Kedarnath Helicopter Guide', href:'/blog/kedarnath-helicopter-booking' },
    { label:'Char Dham 2026 Overview', href:'/char-dham-yatra' },
    { label:'Senior Citizen Char Dham', href:'/blog/senior-citizen-char-dham' },
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

  // No Product node. There used to be one alongside the TouristTrip above,
  // carrying the same name, description and offer. A tour package is a
  // service, and Google's Product / merchant-listing structured data is for
  // physical goods on a product page — 39 packages marked up as Products put
  // the site into Search Console's "Merchant listings" and "Product snippets"
  // reports for things that are not products. The TouristTrip already carries
  // the offer; the duplicate node added nothing but a markup/content mismatch.

  const breadcrumb = { '@context':'https://schema.org','@type':'BreadcrumbList', itemListElement:[
    {'@type':'ListItem',position:1,name:'Home',item:SITE.baseUrl},
    {'@type':'ListItem',position:2,name:'Packages',item:`${SITE.baseUrl}/packages`},
    {'@type':'ListItem',position:3,name:CATEGORIES[pkg.category]?.name||pkg.category,item:`${SITE.baseUrl}${CATEGORY_HUB[pkg.category] || '/packages'}`},
    {'@type':'ListItem',position:4,name:pkg.name,item:`${SITE.baseUrl}/packages/${pkg.slug}`},
  ]};
  const author = {
    '@context':'https://schema.org','@type':'Person',
    // See the identical node in ./schemas.js — @id is `/#founder` so these 39
    // pages resolve to the same Person as every article byline, and sameAs
    // carries his personal profile only, never company-owned URLs.
    '@id':`${SITE.baseUrl}/#founder`,
    name:'Dhanesh Chandra Mishra',
    jobTitle:'Founder & Director, Shiv Ganga Travels',
    description:'Retired Indian Army officer who founded Shiv Ganga Travels. Organises Char Dham, Do Dham and Kedarnath pilgrimages from Haridwar.',
    url:`${SITE.baseUrl}/about`,
    worksFor:{ '@type':'TravelAgency','@id':`${SITE.baseUrl}/#organization`, name:SITE.name, url:SITE.baseUrl },
    knowsAbout:['Char Dham Yatra','Kedarnath Yatra','Badrinath','Gangotri','Yamunotri','Uttarakhand pilgrimage travel','Char Dham registration'],
    address:{ '@type':'PostalAddress', addressLocality:'Haridwar', addressRegion:'Uttarakhand', addressCountry:'IN' },
    sameAs:['https://www.linkedin.com/in/dhanesh-chandra-635564429/'],
  };
  return (<>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html:JSON.stringify(trip) }}/>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html:JSON.stringify(breadcrumb) }}/>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html:JSON.stringify(author) }}/>
  </>);
}

export default async function PackageDetailPage({ params }) {
  const { slug } = await params;

  const pkg = getPackageBySlug(slug);
  if (!pkg) notFound();

  const savings  = pkg.price.isRange ? 0 : pkg.price.original - pkg.price.discounted;
  const isRange  = !!pkg.price.isRange;
  const priceTxt = isRange
    ? `${pkg.price.currency}${pkg.price.discounted.toLocaleString('en-IN')} – ${pkg.price.currency}${pkg.price.original.toLocaleString('en-IN')}`
    : `${pkg.price.currency}${pkg.price.discounted.toLocaleString('en-IN')}`;
  const related  = PACKAGES.filter(p => p.category === pkg.category && p.slug !== pkg.slug).slice(0,3);
  const guides   = CATEGORY_GUIDES[pkg.category] || [];
  const isYatra  = true; // every remaining package is a pilgrimage itinerary
  const isCharDham = pkg.category === 'char-dham';
  const fromDelhi = (pkg.startCity || '').toLowerCase() === 'delhi';
  // Standard-terms packages spread INC_STD; anything beyond it is this itinerary's own.
  const stdTerms = INC_STD.every((x) => (pkg.inclusions || []).includes(x)) && EXC_STD.every((x) => (pkg.exclusions || []).includes(x));
  const extraInc = stdTerms ? (pkg.inclusions || []).filter((x) => !INC_STD.includes(x)) : [];
  const dham2026 = [
    { dham:'Yamunotri', opens:'19 April 2026', closes:'11 Nov 2026', reg:'Mandatory' },
    { dham:'Gangotri',  opens:'19 April 2026', closes:'10 Nov 2026', reg:'Mandatory' },
    { dham:'Kedarnath', opens:'22 April 2026', closes:'11 Nov 2026', reg:'Mandatory' },
    { dham:'Badrinath', opens:'23 April 2026', closes:'13 Nov 2026', reg:'Mandatory' },
  ];
  const delhiModes = [
    { mode:'Volvo / AC Bus (overnight)', time:'~6 hrs', cost:'Included in package', note:'Sleep through the journey, arrive Haridwar by 6 AM. Best value for groups.' },
    { mode:'Private Car (Innova/Ertiga)', time:'5–6 hrs', cost:'₹6,500–₹9,000 one way', note:'Door pickup anywhere in Delhi NCR; same vehicle stays for the full yatra.' },
    { mode:'Train (Shatabdi/Jan Shatabdi)', time:'4.5–6 hrs', cost:'₹350–₹1,200/person', note:'Fastest budget option. We receive you at Haridwar station and switch to the 9N/10D plan.' },
    { mode:'Helicopter (via Dehradun)', time:'~50 min flight', cost:'₹2,30,000 (5N/6D heli charter)', note:'No chopper from Delhi direct — the Char Dham heli circuit starts at Dehradun.' },
  ];
  const msg      = encodeURIComponent(`Namaste! I want to book "${pkg.name}" (${pkg.duration.nights}N/${pkg.duration.days}D).`);
  const quickAnswer = `The ${pkg.name} is a ${pkg.duration.nights}-night, ${pkg.duration.days}-day pilgrimage from ${pkg.startCity} priced from ${priceTxt} per person, all-inclusive, by ${pkg.transport.toLowerCase()}. ${pkg.subtitle ? pkg.subtitle.replace(/\s*\|\s*/g, ' · ') + '.' : ''}`;

  // Editorial section header — one change restyles every <h2 style={SH}> below.
  const SH = { fontFamily:'var(--font-display)', fontSize:'clamp(1.3rem,2.4vw,1.75rem)', fontWeight:600, color:'var(--ink)', letterSpacing:'-0.018em', lineHeight:1.15, marginBottom:18, paddingBottom:14, borderBottom:'1px solid var(--rule)' };

  // Route nodes for the interactive map (yatra packages only).
  // Stops this package actually makes. Keyed to the package, not its
  // category — see src/data/packageRoute.js for why that mattered.
  const routeNodes = nodesForPackage(pkg);
  const stays      = hotelsForPackage(pkg);

  return (
    <>
      <Schemas pkg={pkg}/>
      {/* Motion runtime + scroll-progress rail are mounted site-wide in app/layout.js. */}

      {/* Hero — editorial masthead */}
      <section className="lux-hero" style={{ minHeight:'min(62svh,540px)' }}>
        {pkg.photo && (
          <div className="lux-hero__media" data-lux-parallax="0.08">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={pxAt(pkg.photo, 1920, 1100)}
              srcSet={pxSrcSet(pkg.photo, [[900,560],[1400,860],[1920,1100]])}
              sizes="100vw"
              alt={pkg.name}
              fetchPriority="high" decoding="sync" width={1920} height={1100}
            />
          </div>
        )}
        <div className="lux-hero__veil" aria-hidden="true"/>
        <div className="lux-hero__dawn" aria-hidden="true"/>
        <div className="lux-hero__scrim" aria-hidden="true"/>
        <div className="lux-hero__grain" aria-hidden="true"/>
        <div className="lux-hero__body lux-wrap">
          {/* Breadcrumb — every level a real link */}
          <nav aria-label="Breadcrumb" style={{ marginBottom:22 }}>
            <ol style={{ display:'flex', flexWrap:'wrap', gap:8, listStyle:'none', margin:0, padding:0, fontSize:11, letterSpacing:'0.12em', textTransform:'uppercase', color:'rgba(255,255,255,0.6)' }}>
              <li><Link href="/" style={{ color:'inherit', textDecoration:'none' }}>Home</Link></li>
              <li aria-hidden="true">/</li>
              <li><Link href="/packages" style={{ color:'inherit', textDecoration:'none' }}>Packages</Link></li>
              <li aria-hidden="true">/</li>
              <li><Link href={CATEGORY_HUB[pkg.category] || '/packages'} style={{ color:'inherit', textDecoration:'none' }}>{CATEGORIES[pkg.category]?.name || pkg.category}</Link></li>
              <li aria-hidden="true">/</li>
              <li style={{ color:'var(--gold)' }} aria-current="page">{pkg.name}</li>
            </ol>
          </nav>

          {pkg.badge && <Pill tone="solid" style={{ marginBottom:16 }}>{pkg.badge}</Pill>}

          <h1 className="lux-display lux-display--xl" style={{ maxWidth:'20ch' }}>{pkg.seoHeading || pkg.name}</h1>

          {/* Five identical light pills used to sit here — duration, route,
              difficulty, transport, season, all the same weight, and the price
              nowhere in the hero at all. On a booking page the price is the
              number people came for, so it now leads the rail in gold and the
              rest fall in behind it. `season` moved out: it is a sentence, not
              a spec, and it already reads better in the answer box below. */}
          <SpecRail items={[
            { k: 'Price from', v: `₹${pkg.price.discounted.toLocaleString('en-IN')}`, gold: true },
            { k: 'Duration', v: `${pkg.duration.nights}N / ${pkg.duration.days}D` },
            { k: 'Route', v: `${pkg.startCity} → ${pkg.endCity || pkg.startCity}` },
            { k: 'Transport', v: pkg.transport },
          ]} />
        </div>
      </section>

      {/* Direct answer — one self-contained paragraph, assembled from this
          package's own data rather than written as boilerplate, so each of the
          44 package pages states its real duration, price, route and what the
          fare covers. This is the passage an answer engine lifts when someone
          asks "how much is the 9N/10D Char Dham package from Haridwar"; before
          it existed, the facts were on the page but scattered across a pill
          row, a sticky bar and an inclusions list with nothing to quote. */}
      <section style={{ maxWidth:'var(--container)', margin:'0 auto', padding:'26px 20px 0' }}>
        <AnswerBox>
          <strong>{pkg.seoHeading || pkg.name}</strong> runs {pkg.duration.nights} nights and{' '}
          {pkg.duration.days} days from {pkg.startCity}
          {pkg.endCity && pkg.endCity !== pkg.startCity ? ` to ${pkg.endCity}` : ', returning to the same city'},
          {' '}priced {isRange ? 'between ' : 'from '}
          <strong>
            ₹{pkg.price.discounted.toLocaleString('en-IN')}
            {isRange ? `–₹${pkg.price.original.toLocaleString('en-IN')}` : ''}
          </strong>{' '}
          per person all-inclusive.
          {pkg.season ? ` It operates ${pkg.season}.` : ''}
          {pkg.transport ? ` Transport is by ${pkg.transport.toLowerCase()}.` : ''}
          {pkg.difficulty ? ` Difficulty is rated ${pkg.difficulty.toLowerCase()}.` : ''}
          {' '}The price covers accommodation, daily breakfast and dinner, the vehicle with a hill-experienced
          driver, all tolls, parking and driver allowance, and Char Dham registration. It does not cover
          travel to {pkg.startCity}, pony or helicopter charges at Kedarnath, or lunch on travel days.
        </AnswerBox>
      </section>

      {/* Why book direct — always immediately below the hero */}
      <WhyBookDirect />

      {/* Sticky bar */}
      <div className="sticky-book-bar">
        <div>
          <span style={{ fontSize:11, color:'var(--text-muted)', display:'block' }}>{isRange ? 'range' : 'from'}</span>
          <span style={{ fontWeight:800, fontSize:isRange?14:18, color:'var(--navy)' }}>
            {isRange ? `₹${pkg.price.discounted.toLocaleString('en-IN')}–₹${pkg.price.original.toLocaleString('en-IN')}` : `₹${pkg.price.discounted.toLocaleString('en-IN')}`}
          </span>
        </div>
        <a href={`https://wa.me/${SITE.whatsapp}?text=${msg}`} target="_blank" rel="nofollow noopener noreferrer" style={{ flex:1, background:'#25D366', color:'#fff', padding:'10px', borderRadius:9, textAlign:'center', fontWeight:700, fontSize:13, textDecoration:'none', display:'block' }}>💬 Book via WhatsApp</a>
        <a href='tel:+917817996730' style={{ flex:1, background:'var(--navy)', color:'#fff', padding:'10px', borderRadius:9, textAlign:'center', fontWeight:700, fontSize:13, textDecoration:'none', display:'block' }}>📞 Call Now</a>
      </div>
      {/* Trust micro-signals below sticky bar */}
      <div style={{ display:'flex', gap:12, justifyContent:'center', flexWrap:'wrap', padding:'6px 16px', fontSize:11.5, color:'var(--text-muted)', background:'#fff', borderBottom:'1px solid hsl(var(--border))' }}>
        <span>✓ 50,000+ pilgrims served</span>
        <span>✓ Zero commission</span>
        <span>✓ Retd. Army Officer founder</span>
        {/* Was a bare text node reading "Flexible cancellation →" with no link
            attached — restored to the cancellation policy page it points at. */}
        <Link href="/cancellation-policy" style={{ color:'var(--navy)', fontWeight:600, textDecoration:'none' }}>
          Flexible cancellation →
        </Link>
      </div>
      {/* Date updated — E-E-A-T freshness signal */}
      <div style={{ maxWidth:1100, margin:'8px auto 0', padding:'0 16px', fontSize:11.5, color:'var(--text-muted)', display:'flex', gap:16, flexWrap:'wrap' }}>
        <span>🗓️ <strong>Last updated:</strong> {PAGE_DATES.modifiedHuman} · Season open Apr 19 – Nov 2026</span>
        <span>✍️ <strong>Verified by:</strong> Dhanesh Chandra Mishra, Founder, Shiv Ganga Travels (Retd. Army Officer · many seasons)</span>
      </div>

      {/* Quick Answer — self-contained, claim-first block for AI Overviews / ChatGPT citation */}
      <div style={{ maxWidth:1100, margin:'14px auto 0', padding:'0 16px' }}>
        <div style={{ background:'var(--navy-light)', border:'1px solid hsl(var(--border))', borderLeft:'4px solid var(--gold)', borderRadius:12, padding:'16px 18px' }}>
          <div style={{ fontSize:11.5, fontWeight:700, color:'var(--gold-dark)', textTransform:'uppercase', letterSpacing:'0.04em', marginBottom:6 }}>Quick Answer</div>
          <p style={{ fontSize:14.5, color:'var(--navy)', lineHeight:1.75, margin:0 }}>{quickAnswer}</p>
          <ul style={{ listStyle:'none', display:'flex', flexWrap:'wrap', gap:'6px 18px', margin:'10px 0 0', padding:0, fontSize:12.5, color:'var(--text-mid)' }}>
            <li><strong>Price:</strong> from {priceTxt}/person</li>
            <li><strong>Duration:</strong> {pkg.duration.nights}N/{pkg.duration.days}D</li>
            <li><strong>Start:</strong> {pkg.startCity}</li>
            <li><strong>Season:</strong> {pkg.season || 'Apr–Nov 2026'}</li>
            <li><strong>Operator:</strong> Shiv Ganga Travels</li>
          </ul>
        </div>
      </div>

      <div className="detail-grid" style={{ maxWidth:1100, margin:'0 auto', padding:'28px 16px 100px', display:'grid', gridTemplateColumns:'minmax(0,1fr) min(340px,38%)', gap:28, alignItems:'start' }}>

        {/* LEFT */}
        <div style={{ display:'flex', flexDirection:'column', gap:28 }}>

          {/* Quick stats — BlurFade is applied only to presentational chrome
              like this, never to the long-form itinerary / inclusions / FAQ
              copy, because motion renders its initial `opacity:0` into the
              SSR HTML and that text is what ranks. */}
          <BlurFade inView offset={12}>
            <div className="grid grid-cols-[repeat(auto-fit,minmax(130px,1fr))] gap-2.5">
              {[
                { icon:'⏱',  label:'Duration',   val:`${pkg.duration.nights}N/${pkg.duration.days}D` },
                { icon:'👥',  label:'Group',      val:pkg.groupSize || '2–40' },
                { icon:'🏔️', label:'Altitude',   val:pkg.altitude  || '3,583m' },
                { icon:'🎯',  label:'Difficulty', val:pkg.difficulty },
                { icon:'🚌',  label:'Transport',  val:pkg.transport },
                { icon:'📅',  label:'Season',     val:pkg.season    || 'May–Oct 2026' },
              ].map(s => (
                <div
                  key={s.label}
                  className="rounded-xl border border-transparent bg-navy-light p-3 text-center
                             transition-all duration-200 hover:border-navy/15
                             motion-safe:hover:-translate-y-0.5"
                >
                  <div className="mb-1 text-[20px]" aria-hidden="true">{s.icon}</div>
                  <div className="mb-0.5 text-[11px] text-slate-500">{s.label}</div>
                  <div className="text-[12.5px] font-bold leading-tight text-navy">{s.val}</div>
                </div>
              ))}
            </div>
          </BlurFade>

          {/* Tier cards, the vehicle fare table and the price explainer used to
              repeat here. They are the same on every package, so they live once
              on the pillar and the hub; this page keeps what is its own. */}
          {isCharDham && (
            <p style={{ fontSize:13.5, color:'var(--text-mid)', lineHeight:1.7, margin:0 }}>
              Budget, Deluxe and Premium tiers, and the vehicle-wise fare table for the full circuit, are on the{' '}
              <Link href="/char-dham-yatra" style={{ color:'var(--teal)', fontWeight:600 }}>Char Dham Yatra 2026 guide</Link>; the{' '}
              <Link href="/char-dham-yatra-cost-calculator" style={{ color:'var(--teal)', fontWeight:600 }}>cost calculator</Link> prices your exact group.
            </p>
          )}

          {/* Highlights */}
          <section>
            <h2 style={SH}>Package Highlights</h2>
            <ul style={{ listStyle:'none', display:'grid', gridTemplateColumns:'repeat(auto-fill,minmax(220px,1fr))', gap:8 }}>
              {pkg.highlights.map((h,i)=>(
                <li key={i} style={{ display:'flex', gap:8, alignItems:'flex-start', padding:'8px 10px', background:'#fff', borderRadius:8, border:'1px solid hsl(var(--border))', fontSize:13 }}>
                  <span style={{ color:'var(--teal)', fontWeight:700, flexShrink:0 }}>✓</span>
                  <span style={{ color:'var(--text-mid)' }}>{h}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Day-wise Itinerary */}
          <section>
            <h2 style={SH}>Itinerary at a glance</h2>
            <div style={{ border:'1px solid var(--rule)', borderRadius:'var(--ds-r-2)', padding:'18px 20px', marginBottom:26 }}>
              {pkg.itinerary.map((day, i) => (
                <div key={day.day} style={{ display:'grid', gridTemplateColumns:'70px 1fr', gap:12, padding:'9px 0', borderBottom: i < pkg.itinerary.length-1 ? '1px solid var(--rule)' : 'none' }}>
                  <div style={{ fontSize:11, fontWeight:600, color:'var(--ink-faint)', whiteSpace:'nowrap', letterSpacing:'0.1em', textTransform:'uppercase' }}>Day {day.day}</div>
                  <div style={{ fontSize:13.5, color:'var(--ink-soft)', lineHeight:1.5 }}>{day.title}</div>
                </div>
              ))}
            </div>
            <h2 style={SH}>Day by day</h2>
            <DayTimeline days={pkg.itinerary} stops={[]} />
          </section>

          {/* Interactive route map — yatra packages (after the itinerary it visualises) */}
          {isYatra && routeNodes.length > 1 && (
            <section>
              <h2 style={SH}>The route, mapped</h2>
              <div className="lux-map-stacked">
                <RouteMap nodes={routeNodes} category={pkg.category} title={`${pkg.name} route`} />
              </div>
            </section>
          )}

          {/* Inclusions / Exclusions — the standard terms are printed once on
              /packages#included; this page lists only what this itinerary adds
              or changes. A package with its own full list (helicopter) shows it. */}
          <section>
            <h2 style={SH}>✅ What&apos;s Included / Excluded</h2>
            {stdTerms && (
              <p style={{ fontSize:13.5, color:'var(--text-mid)', lineHeight:1.7, marginBottom: extraInc.length ? 12 : 0 }}>
                Standard package terms apply.{' '}
                <Link href="/packages#included" style={{ color:'var(--teal)', fontWeight:600 }}>What every package includes and excludes →</Link>
              </p>
            )}
            {(extraInc.length > 0 || !stdTerms) && (
              <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(min(260px,100%),1fr))', gap:12 }}>
                <div style={{ background:'#f0fdf4', borderRadius:12, padding:'16px' }}>
                  <div style={{ fontWeight:700, fontSize:13, color:'#15803d', marginBottom:10 }}>{stdTerms ? '✅ Also included on this itinerary' : '✅ Included'}</div>
                  {(stdTerms ? extraInc : (pkg.inclusions||[])).map((item,i)=><div key={i} style={{ fontSize:12.5, color:'var(--text-mid)', padding:'4px 0', borderBottom:'1px solid rgba(0,0,0,0.05)', display:'flex', gap:6 }}><span style={{ color:'#15803d', flexShrink:0 }}>✓</span>{item}</div>)}
                </div>
                {!stdTerms && (
                  <div style={{ background:'#fff1f2', borderRadius:12, padding:'16px' }}>
                    <div style={{ fontWeight:700, fontSize:13, color:'#9f1239', marginBottom:10 }}>❌ Not Included</div>
                    {(pkg.exclusions||[]).map((item,i)=><div key={i} style={{ fontSize:12.5, color:'var(--text-mid)', padding:'4px 0', borderBottom:'1px solid rgba(0,0,0,0.05)', display:'flex', gap:6 }}><span style={{ color:'#9f1239', flexShrink:0 }}>✕</span>{item}</div>)}
                  </div>
                )}
              </div>
            )}
          </section>

          {/* Where you stay — yatra packages with at least one night */}
          {isYatra && stays.length > 0 && (
            <section>
              <h2 style={SH}>Where you stay</h2>
              <p style={{ fontSize:14, color:'var(--ink-soft)', lineHeight:1.7, marginBottom:22 }}>
                {stayLede(pkg)}
              </p>
              <HotelShowcase hotels={stays} compact />
            </section>
          )}

          {/* Travel Tips */}
          {pkg.travelTips?.length > 0 && (
            <section>
              <h2 style={SH}>💡 Travel Tips</h2>
              <div style={{ display:'flex', flexDirection:'column', gap:8 }}>
                {pkg.travelTips.map((tip,i)=>(
                  <div key={i} style={{ display:'flex', gap:10, padding:'10px 14px', background:'#fff', borderRadius:9, border:'1px solid hsl(var(--border))', fontSize:13.5, color:'var(--text-mid)', lineHeight:1.6 }}>
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
              <h2 style={SH}>Frequently asked questions</h2>
              <FaqList faqs={pkg.faqs} />
            </section>
          )}

          {/* Related Guides — FIX 3 */}
          {guides.length > 0 && (
            <section>
              <h2 style={SH}>📖 Related Guides & Resources</h2>
              <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fill,minmax(210px,1fr))', gap:10 }}>
                {guides.map(g=>(
                  <Link key={g.href} href={g.href} style={{ display:'flex', alignItems:'center', gap:10, padding:'12px 14px', background:'#fff', borderRadius:10, border:'1px solid hsl(var(--border))', textDecoration:'none' }}>
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
                  <Link key={r.slug} href={`/packages/${r.slug}`} style={{ display:'block', background:'#fff', borderRadius:10, padding:'14px', border:'1px solid hsl(var(--border))', textDecoration:'none' }}>
                    <div style={{ fontWeight:700, fontSize:13, color:'var(--text)', marginBottom:4, lineHeight:1.3 }}>{r.name}</div>
                    <div style={{ fontSize:11, color:'var(--text-muted)', marginBottom:6 }}>{r.duration.nights}N/{r.duration.days}D</div>
                    <div style={{ fontWeight:800, fontSize:17, color:'var(--navy)' }}>₹{r.price.discounted.toLocaleString('en-IN')}</div>
                  </Link>
                ))}
              </div>
            </section>
          )}

          {/* The packing list, fifteen travel tips, emergency helplines, season
              table and "why Haridwar" blocks that used to sit here were identical
              on every package page — roughly 1,100 shared words per page. Each
              now lives on its own page; this strip links them. The altitude
              note stays because it is written per package. */}
          <section style={{ background:'#FCEBEB', border:'1px solid #F09595', borderRadius:12, padding:'14px 16px' }}>
            <div style={{ fontWeight:700, fontSize:13.5, color:'#791F1F', marginBottom:6 }}>🩺 Altitude on this itinerary</div>
            <div style={{ fontSize:13.5, color:'#7f1d1d', lineHeight:1.7 }}>{altitudeLede(pkg)}</div>
          </section>
          <section>
            <h2 style={SH}>Before you go</h2>
            <div style={{ display:'flex', flexWrap:'wrap', gap:8 }}>
              {[
                ['Packing list', '/blog/char-dham-yatra-packing-list'],
                ['Registration 2026', '/blog/char-dham-yatra-registration'],
                ['Emergency contacts', '/char-dham-yatra-emergency-contacts'],
                ['Best time to go', '/blog/best-time-char-dham'],
                ['Medical certificate', '/blog/char-dham-yatra-medical-certificate'],
                ['What every package includes', '/packages#included'],
              ].map(([t, href]) => (
                <Link key={href} href={href} className="lux-pill" style={{ textDecoration:'none' }}>{t}</Link>
              ))}
            </div>
          </section>

          {/* Delhi → Haridwar travel options — fills the by-car/train/bus/helicopter intent */}
          {fromDelhi && (
          <section style={{ background:'var(--bg)', borderRadius:14, padding:'20px 22px', border:'1px solid hsl(var(--border))' }}>
            <h2 style={SH}>🚗 Char Dham Yatra from Delhi — Travel Options Compared</h2>
            <p style={{ fontSize:14, color:'var(--text-mid)', lineHeight:1.8, marginBottom:14 }}>
              Delhi to Haridwar is about 220–240 km, roughly 5–6 hours on the Delhi–Dehradun Expressway. How you cover that first leg decides your cost and comfort. Here is how the four ways stack up, and what we recommend for each kind of traveller.
            </p>
            <div style={{ overflowX:'auto', marginBottom:8 }}>
              <table style={{ width:'100%', borderCollapse:'collapse', fontSize:13, minWidth:560 }}>
                <thead><tr style={{ background:'var(--navy)' }}>
                  {['Mode','Time','Cost','Notes'].map(h=>(
                    <th key={h} style={{ padding:'9px 12px', textAlign:'left', color:'#fff', fontWeight:700, fontSize:12 }}>{h}</th>
                  ))}
                </tr></thead>
                <tbody>
                  {delhiModes.map((m,i)=>(
                    <tr key={m.mode} style={{ background:i%2?'var(--navy-light)':'#fff' }}>
                      <td style={{ padding:'9px 12px', fontWeight:700, color:'var(--navy)' }}>{m.mode}</td>
                      <td style={{ padding:'9px 12px', color:'var(--text-mid)', whiteSpace:'nowrap' }}>{m.time}</td>
                      <td style={{ padding:'9px 12px', color:'var(--text-mid)' }}>{m.cost}</td>
                      <td style={{ padding:'9px 12px', color:'#475569', lineHeight:1.6 }}>{m.note}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p style={{ fontSize:12.5, color:'var(--text-muted)', lineHeight:1.7 }}>
              Our group package uses the overnight Volvo so you do not lose a daytime leg. Want door pickup from Noida, Greater Noida, Gurugram or Faridabad instead? We send a private car across Delhi NCR, usually at no extra charge within the region — just ask when you book.
            </p>
          </section>
          )}

          {/* Char Dham 2026 Registration — high-intent, GEO-citable, fills competitor gap */}
          {isYatra && (
          <section style={{ background:'#fff', borderRadius:14, padding:'20px 22px', border:'2px solid var(--gold)' }}>
            <h2 style={SH}>📋 Registration and temple dates for this itinerary</h2>
            <p style={{ fontSize:13.5, color:'var(--text-mid)', lineHeight:1.7, marginBottom:14 }}>
              Registration is compulsory and free; we do it for every guest on this package, or you can register yourself in ten minutes — see the{' '}
              <Link href="/blog/char-dham-yatra-registration" style={{ color:'var(--teal)', fontWeight:600 }}>2026 registration guide</Link>.
            </p>
            <h3 style={{ fontSize:'1rem', fontWeight:700, color:'var(--navy)', marginBottom:6 }}>🗓️ {datesHeading(pkg)}</h3>
            <p style={{ fontSize:13, color:'var(--text-mid)', lineHeight:1.7, marginBottom:10 }}>{datesLede(pkg)}</p>
            <div style={{ overflowX:'auto', marginBottom:12 }}>
              <table style={{ width:'100%', borderCollapse:'collapse', fontSize:13, minWidth:480 }}>
                <thead><tr style={{ background:'var(--navy)' }}>
                  {['Dham','Opens (Kapat)','Closes','Registration'].map(h=>(
                    <th key={h} style={{ padding:'9px 12px', textAlign:'left', color:'#fff', fontWeight:700, fontSize:12 }}>{h}</th>
                  ))}
                </tr></thead>
                <tbody>
                  {dhamDatesForPackage(pkg, dham2026).map((d,i)=>(
                    <tr key={d.dham} style={{ background:i%2?'var(--navy-light)':'#fff' }}>
                      <td style={{ padding:'9px 12px', fontWeight:700, color:'var(--navy)' }}>{d.dham}</td>
                      <td style={{ padding:'9px 12px', color:'var(--text-mid)' }}>{d.opens}</td>
                      <td style={{ padding:'9px 12px', color:'var(--text-mid)' }}>{d.closes}</td>
                      <td style={{ padding:'9px 12px', color:'#B45309', fontWeight:600 }}>{d.reg}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p style={{ fontSize:12.5, color:'var(--text-muted)', lineHeight:1.7 }}>
              {datesNote(pkg)}
            </p>
          </section>
          )}

          {/* Operator identity is one line here; the full case is on /about and
              the trust strip under the sticky bar already carries the numbers. */}
          <p style={{ fontSize:13.5, color:'var(--text-mid)', lineHeight:1.7, margin:0 }}>
            Run directly by <Link href="/about" style={{ color:'var(--teal)', fontWeight:600 }}>Shiv Ganga Travels, Haridwar</Link> — founded by a retired Army officer, {SITE.reviews.rating}/5 from {SITE.reviews.count} Google reviews, no aggregator in between.
          </p>

          {/* Bottom CTA */}
          <section className="lux-card lux-card--dark" style={{ background:'var(--ink)', padding:'clamp(28px,4vw,44px)', textAlign:'center' }}>
            <h2 className="lux-display lux-display--md" style={{ color:'#fff', marginBottom:10 }}>Ready to begin?</h2>
            <p className="lux-caption" style={{ color:'rgba(255,255,255,0.66)', marginBottom:24 }}>Free itinerary · Zero commission · Reply in 2 hrs</p>
            <div style={{ display:'flex', gap:12, justifyContent:'center', flexWrap:'wrap' }}>
              <a href={`https://wa.me/${SITE.whatsapp}?text=${msg}`} target="_blank" rel="nofollow noopener noreferrer" className="lux-btn" style={{ background:'#25D366', color:'#fff', borderColor:'#25D366' }}><WhatsAppIcon size={16}/> Book on WhatsApp</a>
              <a href='tel:+917817996730' className="lux-btn lux-btn--ghost-light"><Icon name="phone" size={15}/> {SITE.phone}</a>
            </div>
          </section>
        </div>

        {/* RIGHT — Editorial sticky booking rail */}
        <div style={{ position:'sticky', top:96 }}>
          <div className="lux-card" style={{ overflow:'hidden' }}>
            {/* Price */}
            <div style={{ background:'var(--ink)', color:'#fff', padding:'24px 22px' }}>
              <span className="lux-eyebrow lux-eyebrow--light">{isRange ? 'Price range · per person' : 'From · per person'}</span>
              {!isRange && savings>0 && <div style={{ color:'rgba(255,255,255,0.45)', fontSize:14, textDecoration:'line-through', marginTop:12 }}>₹{pkg.price.original.toLocaleString('en-IN')}</div>}
              {isRange ? (
                <>
                  <div className="lux-figure" style={{ color:'#fff', fontSize:'clamp(1.5rem,3vw,2rem)', marginTop:10 }}>₹{pkg.price.discounted.toLocaleString('en-IN')} – ₹{pkg.price.original.toLocaleString('en-IN')}</div>
                  <p className="lux-caption" style={{ color:'rgba(255,255,255,0.6)', marginTop:8 }}>all inclusive · Budget · Standard · Deluxe</p>
                </>
              ) : (
                <>
                  <div className="lux-figure" style={{ color:'#fff', fontSize:'clamp(2.2rem,4vw,3rem)', marginTop:6 }}>₹{pkg.price.discounted.toLocaleString('en-IN')}</div>
                  <p className="lux-caption" style={{ color:'rgba(255,255,255,0.6)', marginTop:8 }}>all inclusive · ≈ ₹{(pkg.price.discounted*2).toLocaleString('en-IN')} per couple</p>
                  {savings>0 && <p style={{ color:'#6ee7b7', fontSize:12.5, fontWeight:600, marginTop:8 }}>Save ₹{savings.toLocaleString('en-IN')}</p>}
                </>
              )}
            </div>
            {/* CTAs */}
            <div style={{ display:'flex', flexDirection:'column', gap:10, padding:18 }}>
              <a href={`https://wa.me/${SITE.whatsapp}?text=${msg}`} target="_blank" rel="nofollow noopener noreferrer"
                className="lux-btn lux-btn--wide" style={{ background:'#25D366', color:'#fff', borderColor:'#25D366' }}>
                <WhatsAppIcon size={15}/> Book via WhatsApp
              </a>
              <a href="tel:+917817996730" className="lux-btn lux-btn--ink lux-btn--wide">
                <Icon name="phone" size={14}/> Call to book
              </a>
              <Link href={`/book?pkg=${pkg.slug}`} className="lux-btn lux-btn--ghost lux-btn--wide">
                <Icon name="clipboard" size={14}/> Build your booking
              </Link>
            </div>
            {/* Facts */}
            <div style={{ padding:'4px 20px 18px' }}>
              <dl className="lux-facts">
                {[['Duration',`${pkg.duration.nights}N / ${pkg.duration.days}D`],['Start',pkg.startCity],['Difficulty',pkg.difficulty],['Season',pkg.season||'May–Oct 2026']].map(([k,v])=>(
                  <div className="lux-facts__row" key={k}><dt className="lux-facts__k">{k}</dt><dd className="lux-facts__v">{v}</dd></div>
                ))}
              </dl>
            </div>
            {/* Assurances */}
            <div style={{ padding:'16px 20px', borderTop:'1px solid var(--rule)' }}>
              {['Zero commission','Verified operator','Price match guarantee','Free registration help'].map(t=>(
                <div key={t} style={{ fontSize:12.5, color:'var(--ink-soft)', padding:'4px 0', display:'flex', gap:8, alignItems:'center' }}>
                  <Icon name="check" size={13} style={{ color:'var(--gold-dark)', flexShrink:0 }}/>{t}
                </div>
              ))}
            </div>
            {guides.length>0 && (
              <div style={{ padding:'16px 20px', borderTop:'1px solid var(--rule)', background:'var(--paper-deep)' }}>
                <span className="lux-eyebrow lux-eyebrow--plain" style={{ fontSize:'0.625rem' }}>Helpful guides</span>
                <div style={{ marginTop:12, display:'grid', gap:10 }}>
                  {guides.slice(0,3).map(g=>(
                    <Link key={g.href} href={g.href} className="lux-link" style={{ fontSize:'0.7rem' }}>{g.label}</Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      <FloatingBookCTA packageName={pkg.name}/>
    </>
  );
}
