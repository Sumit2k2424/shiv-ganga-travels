import Link from 'next/link';
import { SITE } from '@/data/packages';
import { FLEET, CIRCUITS, TRANSFERS, inr } from '@/data/localTaxi';
import { h2 } from "@/lib/prose";
import AnswerBox from '@/components/AnswerBox';

export const metadata = {
  title: { absolute: `Taxi Service in Haridwar ${SITE.season} — Rates from ₹1,600/Day` },
  description: 'Book a Haridwar taxi direct from a local operator running since 2010. Fixed 8hr/80km rates, no commission, no surge pricing. Full fare chart inside.',
  keywords: ['taxi service in haridwar','haridwar taxi booking','car rental haridwar','haridwar cab rates','tempo traveller haridwar','haridwar local sightseeing taxi','innova crysta haridwar','haridwar taxi fare chart','cab service haridwar','haridwar car hire'],
  alternates: { canonical: `${SITE.baseUrl}/taxi-service-in-haridwar` },
  openGraph: {
    title: 'Taxi Service in Haridwar — Real Rates, Direct Operator',
    description: 'Haridwar taxi rates from ₹1,600 for 8hr/80km. Own fleet, no aggregator markup. Sedan to Force Urbania.',
    url: `${SITE.baseUrl}/taxi-service-in-haridwar`,
    type: 'article',
    images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: 'Taxi Service in Haridwar — Shiv Ganga Travels, direct operator rates' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Taxi Service in Haridwar — Real Rates, Direct Operator',
    description: 'Haridwar taxi rates from ₹1,600 for 8hr/80km. Own fleet, no aggregator markup.',
    images: [{ url: '/opengraph-image', alt: 'Taxi Service in Haridwar | Shiv Ganga Travels' }],
  },
};

const FAQS = [
  { q:'How much does a taxi cost in Haridwar for a day?',
    a:'A full day in Haridwar is priced as 8 hours / 80 km. A Swift Dzire is ₹1,600, an Ertiga ₹2,300, an Innova Crysta ₹3,200 and a 12-seat Tempo Traveller ₹4,500. Those figures include the driver, fuel, and local parking. Cross 8 hours or 80 km and the extra-hour and extra-kilometre rates on our fare chart apply — a Dzire runs ₹13 per extra km and ₹150 per extra hour.' },
  { q:'What is the taxi fare from Haridwar to Rishikesh?',
    a:'₹900 in a Swift Dzire for a one-way drop, ₹1,300 in an Ertiga, ₹1,600 in an Innova Crysta. The distance is 25 km on NH-34 and takes 40 to 55 minutes. If you want the driver to wait while you see Ram Jhula and Triveni Ghat and bring you back, book the 8-hour local package instead — a return trip billed as two one-way drops always costs more than the day rate.' },
  { q:'Is there a prepaid taxi counter at Haridwar railway station?',
    a:'No. Haridwar Junction has no government prepaid taxi booth of the kind you find at Delhi or Dehradun airport. What waits outside is an unmetered stand where the fare is whatever you negotiate, and pilgrims arriving on the overnight trains routinely pay two to three times the going rate. Book before you board, and have the driver meet you at the Gate 1 exit with a name board.' },
  { q:'What does 8 hours / 80 km actually mean on a Haridwar taxi bill?',
    a:'It is a slab, not an allowance you have to use up. The clock starts when the car reaches your pickup point and stops when it drops you. Kilometres are counted from our garage in Bhupatwala, not from your hotel — that is the industry standard across Uttarakhand and the single most common cause of billing arguments. We show you the opening odometer reading before you get in.' },
  { q:'Do Haridwar taxis charge extra for AC in the hills?',
    a:'Yes, and any operator who tells you otherwise is building it into the base fare. On the climb past Rishikesh the air conditioning is switched off because it strains the engine on gradients. For our Char Dham packages AC in the hills is an optional ₹2,000 add-on. For local Haridwar running, which is all flat ground, AC is included in the rates on this page.' },
  { q:'Can I book a Haridwar taxi one way for Char Dham Yatra?',
    a:'One-way to Kedarnath or Badrinath is possible but rarely sensible. The driver has to come back empty, so you pay for the return leg regardless — usually as a fixed one-way charge that works out higher than a round trip. Unless you are flying out from Dehradun afterwards, book the round trip. Our Char Dham cab pages carry the route-by-route pricing.' },
  { q:'Are your drivers licensed for commercial hill driving?',
    a:'Every driver holds a commercial licence with a hill endorsement, which the Uttarakhand Transport Department requires for the Char Dham routes. Our regular drivers have between eight and twenty years on these roads. For local Haridwar work that matters less; for anything past Rishikesh it matters a great deal, and it is a fair question to ask any operator you are considering.' },
  { q:'What happens if I cancel a Haridwar taxi booking?',
    a:'Cancel more than 24 hours before pickup and there is no charge. Inside 24 hours we ask for 25% because the vehicle has been blocked off. No-show at the pickup point is billed in full. We take no advance for a single-day local hire — you pay the driver at the end of the day.' },
];

function Schema() {
  const faq = {
    '@context':'https://schema.org', '@type':'FAQPage',
    mainEntity: FAQS.map(f => ({
      '@type':'Question', name:f.q,
      acceptedAnswer:{ '@type':'Answer', text:f.a },
    })),
  };
  const service = {
    '@context':'https://schema.org', '@type':'Service',
    '@id': `${SITE.baseUrl}/taxi-service-in-haridwar#service`,
    name:'Taxi Service in Haridwar',
    serviceType:'Taxi and car rental service',
    provider:{ '@id': `${SITE.baseUrl}/#organization` },
    areaServed:[
      { '@type':'City', name:'Haridwar' },
      { '@type':'City', name:'Rishikesh' },
      { '@type':'State', name:'Uttarakhand' },
    ],
    hasOfferCatalog:{
      '@type':'OfferCatalog', name:'Haridwar local taxi rates (8 hours / 80 km)',
      itemListElement: FLEET.map(v => ({
        '@type':'Offer',
        itemOffered:{ '@type':'Service', name:`${v.name} — ${v.seats} seater` },
        price:v.local8, priceCurrency:'INR',
        priceSpecification:{ '@type':'UnitPriceSpecification', price:v.local8, priceCurrency:'INR', unitText:'8 hours / 80 km' },
      })),
    },
  };
  const article = {
    '@context':'https://schema.org', '@type':'Article',
    headline:'Taxi Service in Haridwar — Rates, Fleet and How the Billing Works',
    author:{ '@id': `${SITE.baseUrl}/#founder` },
    publisher:{ '@id': `${SITE.baseUrl}/#organization` },
    datePublished:'2026-08-10',
    dateModified:SITE.lastUpdatedISO,
    mainEntityOfPage:`${SITE.baseUrl}/taxi-service-in-haridwar`,
  };
  const crumbs = {
    '@context':'https://schema.org', '@type':'BreadcrumbList',
    itemListElement:[
      { '@type':'ListItem', position:1, name:'Home', item:SITE.baseUrl },
      { '@type':'ListItem', position:2, name:'Cabs & Taxi', item:`${SITE.baseUrl}/cabs` },
      { '@type':'ListItem', position:3, name:'Taxi Service in Haridwar', item:`${SITE.baseUrl}/taxi-service-in-haridwar` },
    ],
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faq) }}/>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(service) }}/>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(article) }}/>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(crumbs) }}/>
    </>
  );
}

const H2 = ({ children }) => (
  <h2 style={h2}>
    {children}
  </h2>
);

export default function TaxiServiceInHaridwar() {
  const routes = [
    ['Rishikesh',           TRANSFERS['haridwar-rishikesh'].km, TRANSFERS['haridwar-rishikesh'].fares.dzire, '/haridwar-to-rishikesh-taxi'],
    ['Delhi',               TRANSFERS['haridwar-delhi'].km,     TRANSFERS['haridwar-delhi'].fares.dzire,     '/haridwar-to-delhi-taxi'],
    ['Dehradun Airport',    TRANSFERS['airport-haridwar'].km,   TRANSFERS['airport-haridwar'].fares.dzire,   '/dehradun-airport-to-haridwar-taxi'],
  ];

  return (
    <>
      <Schema/>

      {/* Hero */}
      <section style={{ background:'linear-gradient(145deg,var(--navy) 0%,#1A3E75 60%,var(--teal) 100%)', padding:'52px 20px 40px' }}>
        <div style={{ maxWidth:860, margin:'0 auto', textAlign:'center' }}>
          <span style={{ background:'rgba(232,146,10,0.18)', color:'#FFD166', fontSize:11, fontWeight:700, letterSpacing:'0.12em', textTransform:'uppercase', padding:'5px 16px', borderRadius:100, display:'inline-block', marginBottom:14 }}>
            Local Service · Haridwar · Since 2010
          </span>
          <h1 style={{ color:'#fff', fontFamily:'var(--font-display)', fontSize:'clamp(1.7rem,4vw,2.6rem)', fontWeight:700, letterSpacing:'-0.02em', marginBottom:14 }}>
            Taxi Service in Haridwar
          </h1>
          <p style={{ color:'rgba(255,255,255,0.82)', fontSize:15.5, lineHeight:1.75, maxWidth:700, margin:'0 auto 20px' }}>
            A taxi in Haridwar costs <strong style={{ color:'#FFD166' }}>₹1,600 for 8 hours and 80 km</strong> in a Swift Dzire,
            up to ₹6,500 for a Force Urbania. Those are our rates, from our own fleet,
            with nobody's commission sitting on top.
          </p>
          <div style={{ display:'flex', gap:10, justifyContent:'center', flexWrap:'wrap' }}>
            {['🚗 Own fleet — not a broker','💰 No surge, no festival pricing','📍 Office on Saptrishi Road'].map(t=>(
              <span key={t} style={{ background:'rgba(255,255,255,0.12)', color:'#fff', fontSize:12.5, fontWeight:600, padding:'6px 14px', borderRadius:100, border:'1px solid rgba(255,255,255,0.2)' }}>{t}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Breadcrumb */}
      <nav aria-label="Breadcrumb" style={{ background:'var(--bg)', borderBottom:'1px solid hsl(var(--border))', padding:'9px 20px' }}>
        <div style={{ maxWidth:'var(--container)', margin:'0 auto', fontSize:12, color:'var(--text-muted)', display:'flex', gap:6, flexWrap:'wrap' }}>
          <Link href="/" style={{ color:'var(--text-muted)', textDecoration:'none' }}>Home</Link><span>›</span>
          <Link href="/cabs" style={{ color:'var(--text-muted)', textDecoration:'none' }}>Cabs &amp; Taxi</Link><span>›</span>
          <span style={{ color:'var(--navy)', fontWeight:600 }}>Taxi Service in Haridwar</span>
        </div>
      </nav>


        <AnswerBox>
          <strong>Haridwar taxi fares run from about ₹2,500 for a local day to ₹3,000+ for the hill routes.</strong> Local sightseeing covering Har Ki Pauri, both ropeways and Kankhal is a half or full day; Rishikesh is a short hop; Char Dham legs are full-day mountain drives priced accordingly. What matters more than the rate on a hill route is the vehicle's Green Card and whether the driver runs these roads every season — a plains taxi on the Kedarnath road is a genuine risk.
        </AnswerBox>
      <article style={{ maxWidth:900, margin:'0 auto', padding:'36px 20px 60px' }}>
        <div style={{ fontSize:12, color:'var(--text-muted)', marginBottom:20, textAlign:'right' }}>
          🗓️ <strong>Last updated:</strong> {SITE.lastUpdated}
        </div>

        {/* Direct answer — GEO */}
        <p style={{ fontSize:16.5, lineHeight:1.8, color:'var(--text-mid)', marginBottom:22 }}>
          Hiring a taxi in Haridwar is straightforward once you understand the one convention that
          governs every fare in this town: the <strong>8 hour / 80 km day</strong>. Nearly every local
          operator prices against that slab, and nearly every billing argument between a pilgrim and a
          driver comes from not knowing where the meter started. This page gives you our full rate card,
          explains the extra charges before you meet them on an invoice, and tells you what the going
          rate should be even if you end up booking with somebody else.
        </p>

        <div style={{ background:'var(--navy-light)', borderRadius:14, padding:'18px 20px', marginBottom:8 }}>
          <div style={{ fontWeight:700, fontSize:14, color:'var(--navy)', marginBottom:8 }}>📍 Who is writing this</div>
          <p style={{ fontSize:14.5, color:'var(--text-mid)', lineHeight:1.75, margin:0 }}>
            Shiv Ganga Travels has run vehicles out of Bhupatwala since 2010. We are not a booking
            website that forwards your trip to a local operator — we <em>are</em> the local operator,
            which is why the rates below are the rates you pay. Founded by Dhanesh Chandra Mishra,
            a retired Indian Army officer. <Link href="/about" style={{ color:'var(--teal)', fontWeight:600 }}>More about us →</Link>
          </p>
        </div>

        {/* Fare chart */}
        <H2>Haridwar Taxi Rates — Full Fare Chart</H2>
        <p style={{ fontSize:15, lineHeight:1.8, color:'var(--text-mid)', marginBottom:16 }}>
          Local rates below cover Haridwar city and the immediate area. Fuel, driver and local parking
          are included. Ropeway tickets, temple donations and your own meals are not.
        </p>
        <div style={{ overflowX:'auto', marginBottom:10 }}>
          <table style={{ width:'100%', borderCollapse:'collapse', fontSize:13.5, minWidth:600 }}>
            <thead><tr style={{ background:'var(--navy-light)' }}>
              {['Vehicle','Seats','8 hr / 80 km','Extra km','Extra hour','Outstation /km'].map(h=>(
                <th key={h} style={{ padding:'10px', textAlign:'left', color:'var(--navy)', fontWeight:700, fontSize:11.5, whiteSpace:'nowrap' }}>{h}</th>
              ))}
            </tr></thead>
            <tbody>
              {FLEET.map(v=>(
                <tr key={v.id} style={{ borderBottom:'1px solid hsl(var(--border))' }}>
                  <td style={{ padding:'10px', fontWeight:600, color:'var(--navy)' }}>
                    {v.name}
                    <div style={{ fontWeight:400, fontSize:12, color:'var(--text-muted)', marginTop:3 }}>{v.note}</div>
                  </td>
                  <td style={{ padding:'10px', color:'var(--text-muted)' }}>{v.seats}</td>
                  <td style={{ padding:'10px', fontWeight:700, color:'var(--teal)', whiteSpace:'nowrap' }}>{inr(v.local8)}</td>
                  <td style={{ padding:'10px', color:'var(--text-muted)', whiteSpace:'nowrap' }}>{inr(v.extraKm)}</td>
                  <td style={{ padding:'10px', color:'var(--text-muted)', whiteSpace:'nowrap' }}>{inr(v.extraHr)}</td>
                  <td style={{ padding:'10px', color:'var(--text-muted)', whiteSpace:'nowrap' }}>{inr(v.outstationKm)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p style={{ fontSize:12.5, color:'var(--text-muted)', marginBottom:8 }}>
          Rates current for the 2026 season. Night running between 10 PM and 6 AM adds ₹300 to any
          local booking. Outstation trips add a ₹300 per night driver allowance.
        </p>

        {/* Definitions — OPPORTUNITY gap: nobody defines their own terms */}
        <H2>What the Charges on Your Bill Actually Mean</H2>
        <p style={{ fontSize:15, lineHeight:1.8, color:'var(--text-mid)', marginBottom:14 }}>
          Four terms cause almost every dispute at drop-off. Here is what each one means in plain
          language, so nothing on the invoice is a surprise.
        </p>
        {[
          ['8 hr / 80 km','A slab, not a target. Whichever limit you cross first starts the extra charges. Eight hours of sightseeing that covers 40 km still costs the full day rate — you are booking the vehicle and the driver, not the distance.'],
          ['Garage-to-garage','Kilometres are counted from our yard in Bhupatwala to your pickup, through your day, and back to the yard. This is standard across Uttarakhand and is not a trick, but it does mean a hotel 6 km away adds 12 km to your total before you have gone anywhere. We show you the odometer at the start.'],
          ['Driver allowance','A fixed ₹300 a night on outstation trips, covering the driver\'s food and lodging. It is not a tip and it is not optional. On local day hires there is no allowance.'],
          ['Hill charge','Applied past Rishikesh, where gradients roughly double fuel burn and halve the vehicle\'s life. On Char Dham routes we quote it inside the package price rather than adding it later. For local Haridwar work it never applies.'],
        ].map(([term, def])=>(
          <div key={term} style={{ display:'flex', gap:14, padding:'13px 0', borderBottom:'1px solid hsl(var(--border))' }}>
            <div style={{ fontWeight:700, fontSize:14, color:'var(--navy)', minWidth:150, flexShrink:0 }}>{term}</div>
            <div style={{ fontSize:14.5, color:'var(--text-mid)', lineHeight:1.75 }}>{def}</div>
          </div>
        ))}

        {/* Circuits */}
        <H2>Local Sightseeing Circuits</H2>
        <p style={{ fontSize:15, lineHeight:1.8, color:'var(--text-mid)', marginBottom:16 }}>
          Most visitors want one of four days. Each fits inside a standard 8-hour hire unless noted.
        </p>
        <div style={{ display:'flex', flexDirection:'column', gap:14, marginBottom:8 }}>
          {CIRCUITS.map(c=>(
            <div key={c.name} style={{ background:'#fff', border:'1px solid hsl(var(--border))', borderRadius:12, padding:'16px 18px' }}>
              <div style={{ display:'flex', justifyContent:'space-between', gap:12, flexWrap:'wrap', marginBottom:10 }}>
                <div style={{ fontWeight:700, fontSize:15.5, color:'var(--navy)' }}>{c.name}</div>
                <div style={{ display:'flex', gap:8 }}>
                  <span style={{ background:'var(--navy-light)', color:'var(--navy)', fontSize:11, fontWeight:700, padding:'3px 10px', borderRadius:100 }}>{c.hours}</span>
                  <span style={{ background:'var(--bg)', color:'var(--text-muted)', fontSize:11, fontWeight:700, padding:'3px 10px', borderRadius:100, border:'1px solid hsl(var(--border))' }}>{c.km}</span>
                </div>
              </div>
              <div style={{ display:'flex', gap:7, flexWrap:'wrap', marginBottom:10 }}>
                {c.stops.map(s=>(
                  <span key={s} style={{ background:'var(--bg)', border:'1px solid hsl(var(--border))', color:'var(--text-mid)', fontSize:12.5, padding:'4px 11px', borderRadius:7 }}>{s}</span>
                ))}
              </div>
              <p style={{ fontSize:13.5, color:'var(--text-muted)', lineHeight:1.7, margin:0 }}>{c.note}</p>
            </div>
          ))}
        </div>

        {/* Transfers */}
        <H2>Airport, Station and Outstation Transfers</H2>
        <p style={{ fontSize:15, lineHeight:1.8, color:'var(--text-mid)', marginBottom:16 }}>
          Fixed one-way drops, priced all-inclusive of toll, state tax and parking. Sedan fares shown —
          each route page carries the full vehicle-by-vehicle chart.
        </p>
        <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fill,minmax(240px,1fr))', gap:12, marginBottom:14 }}>
          {routes.map(([to, km, fare, href])=>(
            <Link key={href} href={href} style={{ background:'#fff', border:'1px solid hsl(var(--border))', borderRadius:12, padding:'15px 17px', textDecoration:'none', display:'block' }}>
              <div style={{ fontWeight:700, fontSize:14.5, color:'var(--navy)', marginBottom:5 }}>Haridwar ↔ {to}</div>
              <div style={{ fontSize:12.5, color:'var(--text-muted)', marginBottom:8 }}>{km} km</div>
              <div style={{ fontWeight:700, fontSize:15, color:'var(--teal)' }}>from {inr(fare)} →</div>
            </Link>
          ))}
        </div>
        <p style={{ fontSize:14.5, lineHeight:1.8, color:'var(--text-mid)' }}>
          Haridwar Junction has no prepaid taxi counter, unlike Dehradun airport. If you are arriving on
          the Shatabdi or one of the overnight trains from Delhi, arrange the pickup in advance — the
          stand outside the station prices by how tired you look. Our driver waits at the Gate 1 exit
          with a name board, and the fare is agreed before you travel.
        </p>

        {/* Scam section — OPPORTUNITY gap nobody covers */}
        <H2>How to Avoid the Usual Haridwar Taxi Traps</H2>
        <p style={{ fontSize:15, lineHeight:1.8, color:'var(--text-mid)', marginBottom:14 }}>
          We would rather you booked with us. Failing that, we would rather you did not get fleeced,
          because pilgrims who get fleeced stop coming to Haridwar. Four things to watch:
        </p>
        <ul style={{ paddingLeft:20, marginBottom:16 }}>
          {[
            ['The quote that does not mention the slab.','If a driver quotes "₹1,500 for the day" without saying 8 hours and 80 km, the extras are where the money is. Ask for both limits and the per-km rate before you get in.'],
            ['The vehicle that is not the vehicle.','You book an Innova Crysta and a nine-year-old Innova arrives. Ask for the registration number at booking and check it when the car turns up.'],
            ['The commission stop.','Some drivers detour to a specific shop, dharamshala or "government emporium" that pays them a cut. It costs you an hour and inflates whatever you buy. Tell the driver at the start that you want no shopping stops.'],
            ['The Char Dham quote made on the pavement.','Nobody can price a ten-day yatra accurately in two minutes outside a railway station. If somebody does, the number will move later. Get it in writing with the hotels named.'],
          ].map(([bold, rest])=>(
            <li key={bold} style={{ fontSize:14.5, color:'var(--text-mid)', lineHeight:1.8, marginBottom:10 }}>
              <strong style={{ color:'var(--navy)' }}>{bold}</strong> {rest}
            </li>
          ))}
        </ul>
        <p style={{ fontSize:14.5, lineHeight:1.8, color:'var(--text-mid)' }}>
          We have written the longer version of this for pilgrimage bookings on our{' '}
          <Link href="/char-dham-yatra-scams" style={{ color:'var(--teal)', fontWeight:600 }}>Char Dham yatra scams page</Link>,
          which covers the fake-registration and phantom-hotel routines that cost people real money every season.
        </p>

        {/* Booking */}
        <H2>Booking, Payment and Cancellation</H2>
        <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fill,minmax(230px,1fr))', gap:12, marginBottom:8 }}>
          {[
            ['📞 How to book','Call or WhatsApp. Tell us the date, pickup point, vehicle and rough plan. You get the driver\'s name, number and the vehicle registration the evening before.'],
            ['💳 Payment','No advance on a single-day local hire — settle with the driver at drop-off. Cash, UPI and card all work. Outstation and multi-day trips take a 25% advance.'],
            ['🧾 Receipt','Ask and you get a printed bill with the odometer readings on it. Useful if you are claiming the trip, and a reasonable thing to expect from any operator.'],
            ['❌ Cancellation','Free more than 24 hours out. 25% inside 24 hours. Full charge for a no-show. Read the full terms on our cancellation policy page.'],
          ].map(([t,d])=>(
            <div key={t} style={{ background:'var(--bg)', border:'1px solid hsl(var(--border))', borderRadius:11, padding:'14px 16px' }}>
              <div style={{ fontWeight:700, fontSize:14, color:'var(--navy)', marginBottom:6 }}>{t}</div>
              <div style={{ fontSize:13.5, color:'var(--text-muted)', lineHeight:1.7 }}>{d}</div>
            </div>
          ))}
        </div>

        {/* FAQ */}
        <H2>Haridwar Taxi — Questions We Get Asked</H2>
        <div style={{ display:'flex', flexDirection:'column', gap:10 }}>
          {FAQS.map(f=>(
            <details key={f.q} style={{ background:'#fff', border:'1px solid hsl(var(--border))', borderRadius:11, overflow:'hidden' }}>
              <summary style={{ padding:'14px 17px', cursor:'pointer', listStyle:'none', fontWeight:700, fontSize:14.5, color:'var(--navy)' }}>
                {f.q}
              </summary>
              <div style={{ padding:'0 17px 15px', fontSize:14.5, color:'var(--text-mid)', lineHeight:1.8 }}>{f.a}</div>
            </details>
          ))}
        </div>

        {/* Sources — OPPORTUNITY gap: nobody cites anything */}
        <div style={{ background:'var(--bg)', border:'1px solid hsl(var(--border))', borderRadius:12, padding:'16px 18px', marginTop:32 }}>
          <div style={{ fontWeight:700, fontSize:13.5, color:'var(--navy)', marginBottom:9 }}>Sources &amp; official references</div>
          <ul style={{ paddingLeft:18, margin:0 }}>
            {[
              ['Uttarakhand Transport Department — commercial permits and hill endorsements','https://transport.uk.gov.in/'],
              ['Uttarakhand Tourism Development Board — registered operators','https://uttarakhandtourism.gov.in/'],
              ['Indian Railways / IRCTC — Haridwar Junction arrivals','https://www.irctc.co.in/'],
            ].map(([label,href])=>(
              <li key={href} style={{ fontSize:13, color:'var(--text-muted)', lineHeight:1.7, marginBottom:5 }}>
                <a href={href} target="_blank" rel="noopener noreferrer" style={{ color:'var(--teal)' }}>{label}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* CTA */}
        <div style={{ background:'var(--navy)', borderRadius:16, padding:'28px 24px', textAlign:'center', marginTop:32 }}>
          <h3 style={{ color:'#fff', fontFamily:'var(--font-display)', fontSize:'1.3rem', marginBottom:10 }}>
            Need a car in Haridwar today?
          </h3>
          <p style={{ color:'rgba(255,255,255,0.7)', fontSize:14, marginBottom:20 }}>
            Tell us the date and where you want to go. We will send the rate, the driver's name and the
            vehicle number — no deposit for a local day hire.
          </p>
          <div style={{ display:'flex', gap:10, justifyContent:'center', flexWrap:'wrap' }}>
            <a href={`https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent('Namaste! I need a taxi in Haridwar. Please share rates and availability.')}`}
              target="_blank" rel="nofollow noopener noreferrer"
              style={{ background:'#25D366', color:'#fff', padding:'12px 24px', borderRadius:9, fontWeight:700, fontSize:13.5, textDecoration:'none' }}>
              💬 WhatsApp for a Rate
            </a>
            <a href="tel:+917817996730"
              style={{ background:'rgba(255,255,255,0.12)', color:'#fff', padding:'12px 24px', borderRadius:9, fontWeight:700, fontSize:13.5, textDecoration:'none', border:'1px solid rgba(255,255,255,0.2)' }}>
              📞 {SITE.phone}
            </a>
          </div>
          <p style={{ color:'rgba(255,255,255,0.5)', fontSize:12, marginTop:16, marginBottom:0 }}>
            Saptrishi Road, Near Shantikunj Gate No. 1, Bhupatwala, Haridwar 249410 · Open 7 AM–9 PM
          </p>
        </div>

        {/* Related */}
        <div style={{ borderTop:'1px solid hsl(var(--border))', paddingTop:24, marginTop:32 }}>
          <div style={{ fontWeight:700, fontSize:13.5, color:'var(--navy)', marginBottom:12 }}>Related Pages</div>
          <div style={{ display:'flex', gap:10, flexWrap:'wrap' }}>
            {[
              ['Haridwar to Delhi Taxi','/haridwar-to-delhi-taxi'],
              ['Haridwar to Rishikesh Taxi','/haridwar-to-rishikesh-taxi'],
              ['Dehradun Airport to Haridwar','/dehradun-airport-to-haridwar-taxi'],
              ['Har Ki Pauri Guide','/har-ki-pauri-guide'],
              ['All Cab Routes','/cabs'],
              ['Haridwar Tour Packages','/haridwar-tour-packages'],
              ['Char Dham Cab Booking','/char-dham-yatra-cab-booking'],
              ['How to Reach Haridwar','/how-to-reach-haridwar'],
            ].map(([label,href])=>(
              <Link key={href} href={href} style={{ background:'var(--bg)', border:'1px solid hsl(var(--border))', color:'var(--navy)', padding:'7px 14px', borderRadius:8, fontSize:12.5, fontWeight:600, textDecoration:'none' }}>
                {label} →
              </Link>
            ))}
          </div>
        </div>
      </article>
    </>
  );
}
