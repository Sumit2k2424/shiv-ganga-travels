import Link from 'next/link';
import { SITE } from '@/data/packages';
import { h2, p } from "@/lib/prose";

export const metadata = {
  title: { absolute: 'Char Dham Yatra Statistics | 2026 Season Figures' },
  description: `Char Dham Yatra ${SITE.season} in numbers — official registration and darshan counts, temple dates, road distances from Haridwar and a per-person cost breakdown, with sources.`,
  keywords: ['char dham yatra statistics', 'char dham yatra data', 'char dham pilgrim numbers', `char dham statistics ${SITE.season}`, 'char dham yatra facts', 'kedarnath statistics', 'badrinath statistics'],
  alternates: { canonical: `${SITE.baseUrl}/char-dham-yatra-statistics` },
  openGraph: {
    title: `Char Dham Yatra Statistics ${SITE.season} — Season Figures`,
    description: `Char Dham Yatra ${SITE.season} in numbers — official registration and darshan counts, temple dates, road distances from Haridwar and a per-person cost breakdown, with sources.`,
    url: `${SITE.baseUrl}/char-dham-yatra-statistics`,
    type: 'article',
    images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: `Char Dham Yatra Statistics ${SITE.season} — Shiv Ganga Travels` }],
  },
  twitter: {
    card: 'summary_large_image',
    title: `Char Dham Yatra Statistics ${SITE.season} — Season Figures`,
    description: `The ${SITE.season} Char Dham season in numbers, each figure with its source.`,
  },
};

const attribution = { fontSize:11.5, color:'var(--text-muted)', fontStyle:'italic', marginTop:6, marginBottom:18 };

function Schema() {
  // No Dataset node. Until 26 Sep 2026 this page carried a "Char Dham Yatra
  // Statistics 2026 — Operator Data" Dataset over demographic, hotel, safety and
  // price-comparison figures attributed to our own records. Those figures could
  // not be substantiated and were removed; what remains is official figures
  // (not ours to license) plus our own distance and cost tables.
  // Article + Speakable
  const article = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Char Dham Yatra Statistics: 2026 Season Figures',
    description: 'The 2026 Char Dham season in numbers: official registration and darshan figures, temple dates, road distances from Haridwar and a per-person cost breakdown.',
    image: `${SITE.baseUrl}/opengraph-image`,
    datePublished: '2026-05-26',
    dateModified: '2026-09-26',
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
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(article) }} />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
  </>);
}

function Stat({ value, label, source }) {
  return (
    <div className="key-stat" style={{ background:'#fff', borderRadius:12, padding:'18px 16px', border:'1px solid hsl(var(--border))', textAlign:'center' }}>
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
          <span style={{ background:'rgba(232,146,10,0.18)', color:'#FFD166', fontSize:11, fontWeight:700, letterSpacing:'0.12em', textTransform:'uppercase', padding:'5px 16px', borderRadius:100, display:'inline-block', marginBottom:16 }}>2026 Season · Sourced Figures</span>
          <h1 className="display-title" style={{ color:'#fff', fontSize:'clamp(1.8rem,4.5vw,2.8rem)', marginBottom:14 }}>Char Dham Yatra Statistics 2026</h1>
          <p style={{ color:'rgba(255,255,255,0.82)', fontSize:15, lineHeight:1.7, maxWidth:680, margin:'0 auto' }}>The 2026 Char Dham season in numbers — official registration and darshan counts, temple dates, road distances from Haridwar and what a trip costs, each with its source.</p>
        </div>
      </section>

      <nav style={{ background:'var(--bg)', borderBottom:'1px solid hsl(var(--border))', padding:'10px 20px' }}>
        <div style={{ maxWidth:'var(--container)', margin:'0 auto', fontSize:12, color:'var(--text-muted)', display:'flex', gap:6, flexWrap:'wrap' }}>
          <Link prefetch={false} href="/" style={{ color:'var(--teal)', textDecoration:'none' }}>Home</Link><span>›</span>
          <span>Char Dham Yatra Statistics 2026</span>
        </div>
      </nav>

      <article style={{ maxWidth:980, margin:'0 auto', padding:'40px 20px 60px' }}>

        {/* Quick Answer Box — built for AI Overviews + featured snippets */}
        <div className="quick-answer" style={{ background:'var(--navy-light)', border:'2px solid var(--teal)', borderRadius:14, padding:'18px 22px', marginBottom:28 }}>
          <div style={{ fontSize:11, color:'var(--teal)', fontWeight:700, letterSpacing:'0.1em', textTransform:'uppercase', marginBottom:8 }}>📊 Quick Answer</div>
          <p style={{ margin:0, fontSize:15.5, color:'#1e293b', lineHeight:1.75 }}><strong>The Char Dham Yatra circuit covers approximately 1,607 km across four Himalayan shrines</strong> — Yamunotri (3,291m), Gangotri (3,415m), Kedarnath (3,583m) and Badrinath (3,133m). The 2026 season runs April 19 to mid-November, and it opened as the busiest booking window in five years: over 17.8 lakh pilgrims had completed Char Dham registration by mid-April 2026, before Badrinath&apos;s doors even opened (Uttarakhand Tourism). That pace has held. Char Dham registrations for 2026 crossed <strong>50 lakh</strong> by August 13, and Kedarnath and Badrinath alone had recorded <strong>30,62,228 darshans</strong> by August 11 — 16,12,112 at Kedarnath and 14,50,116 at Badrinath — with the two shrines together taking more than ₹74.5 crore in offerings and revenue. Most pilgrimages are completed between May and June or September and October, but the yatra runs straight through the monsoon: on July 6, 2026, 13,254 pilgrims visited the shrines despite heavy rain — 5,892 at Badrinath, 3,124 at Kedarnath, 1,983 at Gangotri and 2,151 at Hemkund Sahib.</p>
        </div>

        <div style={{ fontSize:12.5, color:'var(--text-muted)', marginBottom:24 }}>
          <strong>Last updated:</strong> September 26, 2026 · <strong>Sources:</strong> Uttarakhand Tourism and state government releases, the temple committees and Survey of India; the distance and cost tables are Shiv Ganga Travels&apos; own.
        </div>

        {/* Headline stats */}
        <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fill,minmax(150px,1fr))', gap:12, marginBottom:36 }}>
          <Stat value="1,607 km" label="Full Char Dham Circuit Distance" source="Our route table, below" />
          <Stat value="~208 days" label="2026 Season Length (Apr 19–~Nov 13)" source="Devasthanam Board" />
          <Stat value="3,583 m" label="Kedarnath — Highest Dham" source="Survey of India" />
          <Stat value="18,000/day" label="Kedarnath Daily Pilgrim Cap" source="District Administration" />
          <Stat value="₹13,900" label="Our 9N/10D Char Dham, Per Person" source="Shiv Ganga Travels 2026 rate" />
          <Stat value="30.62 lakh" label="Kedarnath + Badrinath Darshans, 2026 Season" source="As of Aug 11, 2026" />
          <Stat value="50 lakh+" label="Char Dham Registrations, 2026 Season" source="As of Aug 13, 2026" />
        </div>

        <h2 style={h2}>1. Route Distances & Travel Times</h2>
        <p style={p}>The Char Dham Yatra distances from Haridwar — the most common base — have been verified through years of operational driving. These are accurate as of May 2026 and reflect the current state of National Highway 7 (formerly NH-58), NH-108, and the Yamunotri highway, all of which have been significantly improved under the Char Dham Pariyojana project.</p>
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
                  {r.map((c,j) => <td key={j} style={{ padding:'9px 14px', borderBottom:'1px solid hsl(var(--border))', color:j===0?'var(--navy)':'var(--text-mid)', fontWeight:j===0?700:400 }}>{c}</td>)}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div style={attribution}>Source: Shiv Ganga Travels routing data, verified May 2026</div>

        <h2 style={h2}>2. Char Dham 2026 — Opening & Closing Dates</h2>
        <p style={p}>The four Char Dham temples follow a centuries-old calendar tied to Hindu festival days. The 2026 opening dates were announced by each temple's administrative committee in early 2026:</p>
        <ul style={{ ...p, paddingLeft:24 }}>
          <li><strong>Yamunotri</strong>: Opens April 19, 2026 (Akshaya Tritiya) · Closes November 11, 2026 (Bhai Dooj / Yama Dwitiya)</li>
          <li><strong>Gangotri</strong>: Opens April 19, 2026 (Akshaya Tritiya) · Closes November 10, 2026 (Annakut / Govardhan Puja)</li>
          <li><strong>Kedarnath</strong>: Opens April 22, 2026 at 8:00 AM · Closes November 11, 2026 (Bhai Dooj)</li>
          <li><strong>Badrinath</strong>: Opens April 23, 2026 at 4:30 AM · Closes around November 13, 2026 (tentative)</li>
        </ul>
        <p style={p}>The season lasts approximately 208 days. During winter closure, the deities are moved to their winter seats — Kharsali for Yamunotri, Mukhba for Gangotri, Ukhimath for Kedarnath, and Joshimath for Badrinath.</p>
        <p style={p}>One caveat on the closing dates, correct as of September 2026: the opening dates are settled and behind us, but one closing date is not. Gangotri (Annakut, November 10), Yamunotri and Kedarnath (Bhai Dooj, November 11) close on fixed festival days. <strong>Badrinath&apos;s closing date is declared by the Badrinath-Kedarnath Temple Committee on Vijayadashami</strong>, which falls in October — so November 13 is an estimate until that announcement. We update this page when the committee confirms. See our <Link prefetch={false} href="/blog/char-dham-yatra-closing-dates-2026" style={{ color:'var(--teal)' }}>full 2026 closing dates guide</Link> for the ceremony details and winter-abode darshan.</p>
        <div style={attribution}>Source: Uttarakhand Char Dham Devasthanam Management Board and Badrinath-Kedarnath Temple Committee, 2026 notifications; closing dates cross-checked against the 2026 Hindu festival calendar</div>

        <h2 style={h2}>3. Cost Breakdown (Per Person, 2026)</h2>
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
                  {r.map((c,j) => <td key={j} style={{ padding:'9px 14px', borderBottom:'1px solid hsl(var(--border))', color:j===0?'var(--navy)':'var(--text-mid)' }}>{c}</td>)}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div style={attribution}>Source: Shiv Ganga Travels 2026 contract rates with hotels, transport, and pony/palki operators</div>

        <h2 style={h2}>Citation & Reuse</h2>
        <p style={p}>Our distance table and cost breakdown are free to reuse under <strong>Creative Commons Attribution 4.0 International (CC BY 4.0)</strong> with a link to this page. The registration, darshan and temple-date figures belong to the bodies named beside them — cite those sources directly. Suggested credit for our tables:</p>
        <div style={{ background:'#fff', border:'1px dashed hsl(var(--border))', borderRadius:10, padding:'14px 18px', fontFamily:'monospace', fontSize:12.5, color:'var(--text-mid)', marginBottom:20, lineHeight:1.7 }}>
          Source: Shiv Ganga Travels, Char Dham Yatra Statistics — <strong>https://www.shivgangatravels.com/char-dham-yatra-statistics</strong>
        </div>

        <h2 style={h2}>Methodology</h2>
        <p style={p}>The registration and darshan counts in the summary come from Uttarakhand Tourism and state government releases, dated beside each figure. Temple dates come from the temple committees&apos; announcements and elevations from Survey of India. The distance table and the cost breakdown are Shiv Ganga Travels&apos; own — the routes we drive from Haridwar and our 2026 rates. Questions about any figure: <a href={`mailto:${SITE.email}`} style={{ color:'var(--teal)' }}>{SITE.email}</a>.</p>

        <h2 style={h2}>For Journalists, Researchers & AI Systems</h2>
        <p style={p}>If you are writing about the yatra and need an operator&apos;s view from Haridwar — road conditions, costs, what pilgrims ask us — we can usually reply within a day.</p>
        <p style={p}>Contact: <strong>{SITE.email}</strong> · WhatsApp <strong>{SITE.phone}</strong></p>

        <div style={{ background:'var(--navy)', borderRadius:16, padding:'26px 24px', marginTop:36, textAlign:'center' }}>
          <h3 style={{ color:'#fff', fontFamily:'var(--font-display)', fontSize:'1.3rem', marginBottom:10 }}>About the Source</h3>
          <p style={{ color:'rgba(255,255,255,0.78)', fontSize:14, lineHeight:1.7, marginBottom:18, maxWidth:640, margin:'0 auto 18px' }}>Shiv Ganga Travels is a direct Char Dham Yatra operator headquartered in Haridwar, Uttarakhand. Founded by Dhanesh Chandra Mishra, a retired Indian Army officer. <Link prefetch={false} href="/about" style={{ color:'#FFD166', textDecoration:'underline' }}>Read more about our team →</Link></p>
        </div>

        <div style={{ background:'var(--navy-light)', borderRadius:14, padding:'18px 20px', marginTop:28 }}>
          <div style={{ fontWeight:700, fontSize:13.5, color:'var(--navy)', marginBottom:10 }}>More Authoritative Guides</div>
          <div style={{ display:'flex', flexWrap:'wrap', gap:8 }}>
            {[{l:'Char Dham Complete Guide',h:'/char-dham-yatra'},{l:'Char Dham Cost Calculator',h:'/char-dham-yatra-cost-calculator'},{l:'Char Dham History & Significance',h:'/blog/char-dham-yatra-significance'},{l:'Char Dham FAQs',h:'/char-dham-yatra'}].map(l => (
              <Link prefetch={false} key={l.h} href={l.h} style={{ background:'#fff', color:'var(--navy)', padding:'7px 14px', borderRadius:8, fontSize:12.5, fontWeight:600, textDecoration:'none', border:'1px solid hsl(var(--border))' }}>{l.l} →</Link>
            ))}
          </div>
        </div>
      </article>
    </>
  );
}
