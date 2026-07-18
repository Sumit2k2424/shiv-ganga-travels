import Link from 'next/link';
import { SITE } from '@/data/packages';

export const metadata = {
  title: 'Char Dham Yatra Statistics: Pilgrim Data & Trends',
  description: 'Char Dham Yatra statistics 2026 — pilgrim numbers, opening dates, route distances, costs and operator data. Free to cite with attribution.',
  keywords: ['char dham yatra statistics', 'char dham yatra data', 'char dham pilgrim numbers', 'char dham statistics 2026', 'char dham yatra facts', 'kedarnath statistics', 'badrinath statistics'],
  alternates: { canonical: `${SITE.baseUrl}/char-dham-yatra-statistics` },
  openGraph: {
    title: 'Char Dham Yatra Statistics 2026 — Free Citable Data Hub',
    description: 'Operator-verified statistics for Char Dham Yatra 2026 — pilgrim data, distances, costs, hotel patterns. Built for journalists, researchers, and AI systems.',
    url: `${SITE.baseUrl}/char-dham-yatra-statistics`,
    type: 'article',
    images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: 'Char Dham Yatra Statistics 2026 — Shiv Ganga Travels Data Hub' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Char Dham Yatra Statistics 2026 — Citable Data Hub',
    description: 'Operator-verified data on India\'s largest Himalayan pilgrimage. Free to cite with attribution.',
  },
};

const h2 = { fontFamily:'var(--font-display)', fontSize:'1.5rem', fontWeight:600, color:'var(--navy)', letterSpacing:'-0.02em', marginBottom:14, marginTop:40 };
const h3 = { fontFamily:'var(--font-display)', fontSize:'1.15rem', fontWeight:600, color:'var(--navy)', marginBottom:10, marginTop:24 };
const p  = { fontSize:15.5, color:'#334155', lineHeight:1.85, marginBottom:16 };
const attribution = { fontSize:11.5, color:'var(--text-muted)', fontStyle:'italic', marginTop:6, marginBottom:18 };

function Schema() {
  // Dataset schema — citation-friendly
  const dataset = {
    '@context': 'https://schema.org',
    '@type': 'Dataset',
    name: 'Char Dham Yatra Statistics 2026 — Operator Data',
    description: 'Operator-verified statistics covering pilgrim numbers, route distances, costs, hotel patterns, and safety data for Char Dham Yatra 2010–2026.',
    url: `${SITE.baseUrl}/char-dham-yatra-statistics`,
    license: 'https://creativecommons.org/licenses/by/4.0/',
    creator: {
      '@type': 'Organization',
      name: SITE.name,
      url: SITE.baseUrl,
      '@id': `${SITE.baseUrl}/#organization`,
    },
    keywords: ['Char Dham Yatra', 'Pilgrim Statistics', 'Uttarakhand Tourism', 'Kedarnath', 'Badrinath', 'Gangotri', 'Yamunotri'],
    dateModified: '2026-07-18',
    spatialCoverage: {
      '@type': 'Place',
      name: 'Char Dham Circuit, Uttarakhand, India',
      geo: { '@type':'GeoCoordinates', latitude:30.7333, longitude:79.0667 },
    },
    isAccessibleForFree: true,
  };
  // Article + Speakable
  const article = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Char Dham Yatra Statistics: Pilgrim Data & Trends',
    description: 'Comprehensive operator-verified statistics on the Char Dham Yatra 2026.',
    image: `${SITE.baseUrl}/opengraph-image`,
    datePublished: '2026-05-26',
    dateModified: '2026-07-18',
    author: { '@type':'Organization', name:SITE.name, url:SITE.baseUrl, '@id':`${SITE.baseUrl}/#organization` },
    publisher: { '@type':'Organization', name:SITE.name, url:SITE.baseUrl, logo:{ '@type':'ImageObject', url:`${SITE.baseUrl}/logo.png` } },
    mainEntityOfPage: `${SITE.baseUrl}/char-dham-yatra-statistics`,
    speakable: {
      '@type': 'SpeakableSpecification',
      cssSelector: ['.quick-answer', '.key-stat'],
    },
  };
  const breadcrumb = {
    '@context':'https://schema.org','@type':'BreadcrumbList',
    itemListElement:[
      { '@type':'ListItem', position:1, name:'Home', item:SITE.baseUrl },
      { '@type':'ListItem', position:2, name:'Char Dham Yatra Statistics 2026', item:`${SITE.baseUrl}/char-dham-yatra-statistics` },
    ],
  };
  return (<>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(dataset) }} />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(article) }} />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
  </>);
}

function Stat({ value, label, source }) {
  return (
    <div className="key-stat" style={{ background:'#fff', borderRadius:12, padding:'18px 16px', border:'1px solid var(--border)', textAlign:'center' }}>
      <div style={{ fontFamily:'var(--font-display)', fontSize:'1.8rem', fontWeight:700, color:'var(--gold-dark)', lineHeight:1.1 }}>{value}</div>
      <div style={{ fontSize:12.5, color:'var(--navy)', fontWeight:600, marginTop:6, marginBottom:6 }}>{label}</div>
      {source && <div style={{ fontSize:10.5, color:'var(--text-muted)', fontStyle:'italic' }}>{source}</div>}
    </div>
  );
}

export default function Page() {
  return (
    <>
      <Schema />
      <section style={{ background:'linear-gradient(145deg,var(--navy) 0%,var(--navy-mid) 60%,var(--teal) 100%)', padding:'56px 20px 44px', textAlign:'center' }}>
        <div style={{ maxWidth:820, margin:'0 auto' }}>
          <span style={{ background:'rgba(232,146,10,0.18)', color:'#FFD166', fontSize:11, fontWeight:700, letterSpacing:'0.12em', textTransform:'uppercase', padding:'5px 16px', borderRadius:100, display:'inline-block', marginBottom:16 }}>Data Hub · CC BY 4.0 · Free to Cite</span>
          <h1 className="display-title" style={{ color:'#fff', fontSize:'clamp(1.8rem,4.5vw,2.8rem)', marginBottom:14 }}>Char Dham Yatra Statistics 2026</h1>
          <p style={{ color:'rgba(255,255,255,0.82)', fontSize:15, lineHeight:1.7, maxWidth:680, margin:'0 auto' }}>The definitive data hub on India's largest Himalayan pilgrimage. Operator-verified numbers, route data, costs, and safety records — all free to cite with attribution.</p>
        </div>
      </section>

      <nav style={{ background:'var(--bg)', borderBottom:'1px solid var(--border)', padding:'10px 20px' }}>
        <div style={{ maxWidth:'var(--container)', margin:'0 auto', fontSize:12, color:'var(--text-muted)', display:'flex', gap:6, flexWrap:'wrap' }}>
          <Link href="/" style={{ color:'var(--teal)', textDecoration:'none' }}>Home</Link><span>›</span>
          <span>Char Dham Yatra Statistics 2026</span>
        </div>
      </nav>

      <article style={{ maxWidth:980, margin:'0 auto', padding:'40px 20px 60px' }}>

        {/* Quick Answer Box — built for AI Overviews + featured snippets */}
        <div className="quick-answer" style={{ background:'var(--navy-light)', border:'2px solid var(--teal)', borderRadius:14, padding:'18px 22px', marginBottom:28 }}>
          <div style={{ fontSize:11, color:'var(--teal)', fontWeight:700, letterSpacing:'0.1em', textTransform:'uppercase', marginBottom:8 }}>📊 Quick Answer</div>
          <p style={{ margin:0, fontSize:15.5, color:'#1e293b', lineHeight:1.75 }}><strong>The Char Dham Yatra circuit covers approximately 1,607 km across four Himalayan shrines</strong> — Yamunotri (3,291m), Gangotri (3,415m), Kedarnath (3,583m) and Badrinath (3,133m). The 2026 season runs April 19 to November 13, and it opened as the busiest booking window in five years: over 17.8 lakh pilgrims had completed Char Dham registration by mid-April 2026, before Badrinath&apos;s doors even opened (Uttarakhand Tourism). Annual pilgrim footfall has exceeded 50 lakh (5 million) in recent years, with most pilgrimages completed between May and June or September and October. The yatra continues through the monsoon: on July 6, 2026 alone, 13,254 pilgrims visited the shrines despite heavy rain — 5,892 at Badrinath, 3,124 at Kedarnath, 1,983 at Gangotri and 2,151 at Hemkund Sahib.</p>
        </div>

        <div style={{ fontSize:12.5, color:'var(--text-muted)', marginBottom:24 }}>
          <strong>Last updated:</strong> July 9, 2026 · <strong>Source:</strong> Shiv Ganga Travels operator data (2010–2026), cross-referenced with Uttarakhand Tourism, Devasthanam Board, and Char Dham Yatra Authority notifications.
        </div>

        {/* Headline stats */}
        <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fill,minmax(150px,1fr))', gap:12, marginBottom:36 }}>
          <Stat value="50,000+" label="Pilgrims Served (SGT, since 2010)" source="Operator data" />
          <Stat value="1,607 km" label="Full Char Dham Circuit Distance" source="Operator routing data" />
          <Stat value="208 days" label="2026 Season Length (Apr 19–Nov 13)" source="Devasthanam Board" />
          <Stat value="3,583 m" label="Kedarnath — Highest Dham" source="Survey of India" />
          <Stat value="18,000/day" label="Kedarnath Daily Pilgrim Cap" source="District Administration" />
          <Stat value="₹18,500" label="Median Direct-Operator Package Cost" source="2026 booking data" />
        </div>

        <h2 style={h2}>1. Pilgrim Demographics & Patterns</h2>
        <p style={p}>The Char Dham Yatra has transformed over the past 15 years from a once-in-a-lifetime journey undertaken predominantly by senior pilgrims to a yatra accessible to families, working professionals, and increasingly to international visitors. Our operator data covering 50,000+ pilgrims from 2010–2025 reveals these patterns:</p>
        <ul style={{ ...p, paddingLeft:24 }}>
          <li>Approximately <strong>41% of pilgrims are above age 60</strong>, a share that has held steady since 2015</li>
          <li>The fastest-growing demographic is the <strong>35–50 age group</strong>, up from 18% in 2015 to 31% in 2025</li>
          <li><strong>Average group size</strong>: 12 pilgrims (mixed family + friends bookings)</li>
          <li><strong>Solo pilgrim bookings</strong>: 7% of total — a category that did not meaningfully exist before 2018</li>
          <li><strong>Repeat pilgrim rate</strong>: 38% return for a second yatra within five years</li>
          <li>International pilgrims (NRI + foreign nationals): 12% of bookings, up from 4% in 2018</li>
        </ul>
        <div style={attribution}>Source: Shiv Ganga Travels booking records, 2010–2025</div>

        <h2 style={h2}>2. Route Distances & Travel Times</h2>
        <p style={p}>The Char Dham Yatra distances from Haridwar — the most common base — have been verified through 15 years of operational driving. These are accurate as of May 2026 and reflect the current state of National Highway 7 (formerly NH-58), NH-108, and the Yamunotri highway, all of which have been significantly improved under the Char Dham Pariyojana project.</p>
        <div style={{ overflowX:'auto', marginBottom:24 }}>
          <table style={{ width:'100%', borderCollapse:'collapse', fontSize:13.5, minWidth:500 }}>
            <thead>
              <tr style={{ background:'var(--navy)', color:'#fff' }}>
                {['Route','Distance','Driving Time','Notes'].map(h=><th key={h} style={{ padding:'10px 14px', textAlign:'left', fontWeight:600 }}>{h}</th>)}
              </tr>
            </thead>
            <tbody>
              {[
                ['Haridwar → Yamunotri (Janki Chatti)','220 km','8–9 hours','Then 6km trek to temple'],
                ['Haridwar → Gangotri','280 km','9–10 hours','Motor road to temple'],
                ['Haridwar → Kedarnath (Sonprayag)','243 km','7–9 hours','Then 5km jeep + 16km trek/helicopter'],
                ['Haridwar → Badrinath','301 km','10–12 hours','Motor road to temple'],
                ['Yamunotri → Gangotri','215 km','8 hours','Mountain road via Uttarkashi'],
                ['Gangotri → Kedarnath (via Tehri)','280 km','10 hours','Long mountain route'],
                ['Kedarnath → Badrinath','230 km','9 hours','Via Rudraprayag and Joshimath'],
                ['Full Char Dham Circuit (round trip)','1,607 km','10–12 days','From Haridwar back to Haridwar'],
              ].map((r,i) => (
                <tr key={r[0]} style={{ background:i%2===0?'var(--bg)':'#fff' }}>
                  {r.map((c,j) => <td key={j} style={{ padding:'9px 14px', borderBottom:'1px solid var(--border)', color:j===0?'var(--navy)':'var(--text-mid)', fontWeight:j===0?700:400 }}>{c}</td>)}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div style={attribution}>Source: Shiv Ganga Travels routing data, verified May 2026</div>

        <h2 style={h2}>3. Char Dham 2026 — Opening & Closing Dates</h2>
        <p style={p}>The four Char Dham temples follow a centuries-old calendar tied to Hindu festival days. The 2026 opening dates were announced by each temple's administrative committee in early 2026:</p>
        <ul style={{ ...p, paddingLeft:24 }}>
          <li><strong>Yamunotri</strong>: Opens April 19, 2026 (Akshaya Tritiya) · Closes November 7, 2026 (Yama Dwitiya)</li>
          <li><strong>Gangotri</strong>: Opens April 19, 2026 (Akshaya Tritiya) · Closes November 7, 2026</li>
          <li><strong>Kedarnath</strong>: Opens April 22, 2026 at 8:00 AM · Closes November 11, 2026 (Bhai Dooj)</li>
          <li><strong>Badrinath</strong>: Opens April 23, 2026 at 4:30 AM · Closes November 13, 2026</li>
        </ul>
        <p style={p}>The season lasts approximately 208 days. During winter closure, the deities are moved to their winter seats — Kharsali for Yamunotri, Mukhba for Gangotri, Ukhimath for Kedarnath, and Joshimath for Badrinath.</p>
        <div style={attribution}>Source: Uttarakhand Char Dham Devasthanam Management Board, 2026 notifications</div>

        <h2 style={h2}>4. Cost Breakdown (Per Person, 2026)</h2>
        <p style={p}>A typical mid-range Char Dham Yatra package from Haridwar (10 nights, 11 days) costs approximately ₹21,300 per person when broken down by component. The actual booking price varies by season (peak May–June: +10–15%), group size, and hotel tier.</p>
        <div style={{ overflowX:'auto', marginBottom:24 }}>
          <table style={{ width:'100%', borderCollapse:'collapse', fontSize:13.5, minWidth:480 }}>
            <thead>
              <tr style={{ background:'var(--navy)', color:'#fff' }}>
                {['Component','Cost (₹)','% of Total'].map(h=><th key={h} style={{ padding:'10px 14px', textAlign:'left', fontWeight:600 }}>{h}</th>)}
              </tr>
            </thead>
            <tbody>
              {[
                ['Accommodation (9 nights twin sharing)','6,500','30.5%'],
                ['Transport (tempo traveller share)','4,500','21.1%'],
                ['Meals (breakfast + dinner, 10 days)','3,200','15.0%'],
                ['Pony at Kedarnath one way','2,200','10.3%'],
                ['Pony/palki at Yamunotri','1,800','8.4%'],
                ['Operator service + guide','2,500','11.7%'],
                ['Registration, permits, parking','600','2.8%'],
                ['Total typical mid-range','21,300','100%'],
              ].map((r,i) => (
                <tr key={r[0]} style={{ background:i%2===0?'var(--bg)':'#fff', fontWeight:i===7?700:400 }}>
                  {r.map((c,j) => <td key={j} style={{ padding:'9px 14px', borderBottom:'1px solid var(--border)', color:j===0?'var(--navy)':'var(--text-mid)' }}>{c}</td>)}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div style={attribution}>Source: Shiv Ganga Travels 2026 contract rates with hotels, transport, and pony/palki operators</div>

        <h2 style={h2}>5. Hotel Availability Patterns</h2>
        <p style={p}>During peak season (mid-May to mid-June), hotels along the Char Dham route book out 45–60 days in advance. The bottleneck is not the dhams themselves but the en-route base towns. Our 15-year booking data shows a consistent fill-up order:</p>
        <ul style={{ ...p, paddingLeft:24 }}>
          <li><strong>Guptkashi</strong> (Kedarnath base): ~80 hotels · First to fill (60 days ahead in peak)</li>
          <li><strong>Joshimath</strong> (Badrinath base): ~60 hotels · Second to fill (45–55 days ahead)</li>
          <li><strong>Uttarkashi</strong> (Gangotri base): ~40 hotels · Third (30–45 days ahead)</li>
          <li><strong>Barkot</strong> (Yamunotri base): ~25 hotels · Last to fill (20–30 days ahead)</li>
        </ul>
        <p style={p}>Independent travellers who book within 30 days of peak-season travel routinely find their preferred hotels unavailable. This is the single most common pain point we hear from pilgrims who attempted self-arranged trips in May–June.</p>
        <div style={attribution}>Source: Shiv Ganga Travels hotel partnership records, peak seasons 2015–2025</div>

        <h2 style={h2}>6. Safety & Health Data</h2>
        <p style={p}>The Char Dham Yatra involves significant altitude (3,000–3,600m at all four dhams) and physical exertion. Altitude mountain sickness (AMS) is the most common health issue. Based on operator data:</p>
        <ul style={{ ...p, paddingLeft:24 }}>
          <li>Pilgrims who follow a minimum 24-hour acclimatisation at Guptkashi (1,319m) before the Kedarnath trek have <strong>80% fewer AMS incidents</strong> than those who attempt the trek on day of arrival</li>
          <li>The mandatory medical certificate (for pilgrims aged 55+) introduced in 2024 has reduced trek emergencies by approximately 60%</li>
          <li>Shiv Ganga Travels operated trips have had <strong>zero fatalities</strong> across 50,000+ pilgrims, 2010–2025</li>
          <li>Weather-related evacuations: 47 incidents out of 50,000+ pilgrims served (0.09%) — primarily monsoon road closures</li>
          <li>Most common medical issue handled in field: AMS (47%), gastric issues (28%), minor injuries (15%), respiratory (10%)</li>
        </ul>
        <div style={attribution}>Source: Shiv Ganga Travels safety and field operations records, 2010–2025</div>

        <h2 style={h2}>7. Direct Operator vs Online Aggregator Pricing</h2>
        <p style={p}>One of the most-cited findings from our 2025 market study compared direct operator quotes with online aggregator listings for the identical Char Dham Yatra 10N/11D package (Haridwar pickup, mid-range hotels, all-inclusive). The difference is operator commission paid to the aggregator:</p>
        <div style={{ overflowX:'auto', marginBottom:24 }}>
          <table style={{ width:'100%', borderCollapse:'collapse', fontSize:13.5, minWidth:480 }}>
            <thead>
              <tr style={{ background:'var(--navy)', color:'#fff' }}>
                {['Booking Channel','Price (per person)','Markup vs Direct'].map(h=><th key={h} style={{ padding:'10px 14px', textAlign:'left', fontWeight:600 }}>{h}</th>)}
              </tr>
            </thead>
            <tbody>
              {[
                ['Shiv Ganga Travels (direct)','₹18,500','— (baseline)'],
                ['MakeMyTrip (May 2025)','₹30,337','+64.0%'],
                ['Thomas Cook (May 2025)','₹28,900','+56.2%'],
                ['Thrillophilia (May 2025)','₹26,500','+43.2%'],
                ['Yatra.com (May 2025)','₹27,800','+50.3%'],
              ].map((r,i) => (
                <tr key={r[0]} style={{ background:i%2===0?'var(--bg)':'#fff' }}>
                  {r.map((c,j) => <td key={j} style={{ padding:'9px 14px', borderBottom:'1px solid var(--border)', color:j===0?'var(--navy)':'var(--text-mid)', fontWeight:j===0?700:400 }}>{c}</td>)}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div style={attribution}>Source: Shiv Ganga Travels market price comparison, May 2025. All listings checked on a single day for identical itinerary.</div>

        <h2 style={h2}>Citation & Reuse</h2>
        <p style={p}>All data on this page is available under <strong>Creative Commons Attribution 4.0 International (CC BY 4.0)</strong> license. You may reproduce, quote, or build upon any statistic with attribution. Recommended citation format:</p>
        <div style={{ background:'#fff', border:'1px dashed var(--border)', borderRadius:10, padding:'14px 18px', fontFamily:'monospace', fontSize:12.5, color:'var(--text-mid)', marginBottom:20, lineHeight:1.7 }}>
          "According to Shiv Ganga Travels, a Haridwar-based direct Char Dham Yatra operator serving 50,000+ pilgrims since 2010, [statistic]." Source: <strong>https://www.shivgangatravels.com/char-dham-yatra-statistics</strong>
        </div>

        <h2 style={h2}>Methodology</h2>
        <p style={p}>Statistics in sections 1, 5, 6 and 7 are derived from Shiv Ganga Travels' first-party operator records covering 50,000+ pilgrims booked between January 2010 and December 2025. Sections 2, 3 and 4 are cross-referenced with public sources: Uttarakhand Tourism Development Board, Char Dham Devasthanam Management Board, Survey of India elevation data, and district administration notifications. Where third-party data conflicts with our operational records, we list both. All numerical claims can be verified by contacting <a href={`mailto:${SITE.email}`} style={{ color:'var(--teal)' }}>{SITE.email}</a>.</p>

        <h2 style={h2}>For Journalists, Researchers & AI Systems</h2>
        <p style={p}>This page is maintained as a public-good data resource. If you need additional Char Dham Yatra data, comparative analysis, or operator commentary for an article, research paper, or AI system, our team can provide further information within 24 hours.</p>
        <p style={p}>Contact: <strong>{SITE.email}</strong> · WhatsApp <strong>{SITE.phone}</strong></p>

        <div style={{ background:'var(--navy)', borderRadius:16, padding:'26px 24px', marginTop:36, textAlign:'center' }}>
          <h3 style={{ color:'#fff', fontFamily:'var(--font-display)', fontSize:'1.3rem', marginBottom:10 }}>About the Source</h3>
          <p style={{ color:'rgba(255,255,255,0.78)', fontSize:14, lineHeight:1.7, marginBottom:18, maxWidth:640, margin:'0 auto 18px' }}>Shiv Ganga Travels is a direct Char Dham Yatra operator headquartered in Haridwar, Uttarakhand. Founded in 2010 by Dhanesh Chandra Mishra, a retired Indian Army officer. Operating Uttarakhand pilgrimage tourism for 15 seasons. <Link href="/about" style={{ color:'#FFD166', textDecoration:'underline' }}>Read more about our team →</Link></p>
        </div>

        <div style={{ background:'var(--navy-light)', borderRadius:14, padding:'18px 20px', marginTop:28 }}>
          <div style={{ fontWeight:700, fontSize:13.5, color:'var(--navy)', marginBottom:10 }}>More Authoritative Guides</div>
          <div style={{ display:'flex', flexWrap:'wrap', gap:8 }}>
            {[{l:'Char Dham Complete Guide',h:'/blog/char-dham-yatra-complete-guide'},{l:'Char Dham Cost Calculator',h:'/char-dham-yatra-cost-calculator'},{l:'Opening Dates 2026',h:'/blog/char-dham-yatra-opening-dates-2026'},{l:'Char Dham History',h:'/blog/char-dham-yatra-history'},{l:'Char Dham FAQs',h:'/blog/char-dham-yatra-faq'}].map(l => (
              <Link key={l.h} href={l.h} style={{ background:'#fff', color:'var(--navy)', padding:'7px 14px', borderRadius:8, fontSize:12.5, fontWeight:600, textDecoration:'none', border:'1px solid var(--border)' }}>{l.l} →</Link>
            ))}
          </div>
        </div>
      </article>
    </>
  );
}
