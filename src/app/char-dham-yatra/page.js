import Link from 'next/link';
import { PACKAGES, SITE, GLOBAL_FAQS } from '@/data/packages';
import FAQAccordion from '@/components/FAQAccordion';

export const metadata = {
  title: 'Char Dham Yatra Package 2026 — Chardham & 4 Dham from Haridwar',
  description: 'Chardham yatra package 2026 from Haridwar. 4 dham yatra — Kedarnath, Badrinath, Gangotri, Yamunotri. From ₹19,500. Direct operator, zero commission. 50,000+ pilgrims.',
  keywords: [
    'char dham yatra package','chardham yatra package','4 dham yatra package','4 dham yatra 2026',
    'char dham yatra 2026','char dham package from haridwar','chardham package from haridwar',
    'char dham yatra package price','char dham yatra booking','chardham tour package',
    'char dham yatra from delhi','char dham tour package','uttarakhand tourism','uttarakhand tour packages',
    'char dham yatra package from haridwar','uttarakhand char dham yatra package',
  ],
  alternates: { canonical: `${SITE.baseUrl}/char-dham-yatra` },
  openGraph: {
    title: 'Char Dham Yatra Package 2026 — Chardham & 4 Dham from Haridwar',
    description: 'Book Char Dham Yatra 2026 from Haridwar. Kedarnath · Badrinath · Gangotri · Yamunotri. From ₹19,500.',
    url: `${SITE.baseUrl}/char-dham-yatra`,
    type: 'website',
    images: ['/opengraph-image'],
  },
};

function Schema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'TravelAgency',
    name: SITE.name,
    url: SITE.baseUrl,
    telephone: SITE.phone,
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Saptrishi Road, Near Shantikunj Gate No. 1, Bhupatwala',
      addressLocality: 'Haridwar',
      addressRegion: 'Uttarakhand',
      postalCode: '249410',
      addressCountry: 'IN',
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: 4.9,
      reviewCount: 850,
      bestRating: 5,
    },
  };

  const product = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: 'Char Dham Yatra Package 2026',
    description: 'All-inclusive Char Dham Yatra package from Haridwar covering Yamunotri, Gangotri, Kedarnath and Badrinath.',
    brand: { '@type': 'Brand', name: SITE.name },
    offers: {
      '@type': 'AggregateOffer',
      lowPrice: '19500',
      highPrice: '85000',
      priceCurrency: 'INR',
      offerCount: '5',
      seller: { '@type': 'Organization', name: SITE.name },
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: 4.9,
      reviewCount: 850,
    },
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: GLOBAL_FAQS.slice(0, 6).map(f => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}/>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(product) }}/>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}/>

      <section style={{ background:'var(--bg)', borderTop:'1px solid var(--border)', padding:'32px 20px' }}>
        <div style={{ maxWidth:'var(--container)', margin:'0 auto' }}>
          <div style={{ fontWeight:700, fontSize:14, color:'var(--navy)', marginBottom:14 }}>Useful Resources</div>
          <div style={{ display:'flex', gap:10, flexWrap:'wrap' }}>
            {[['Char Dham Cost Calculator','/char-dham-yatra-cost-calculator'],['Registration Guide','/blog/char-dham-yatra-registration'],['Budget vs Premium','/blog/char-dham-yatra-budget-vs-premium'],['Packing List','/blog/char-dham-yatra-packing-list'],['How to Reach Kedarnath','/blog/how-to-reach-kedarnath'],['How to Reach Haridwar','/how-to-reach-haridwar'],['Road Status 2026','/char-dham-road-status'],['Opening Dates 2026','/blog/char-dham-yatra-opening-dates-2026'],['Group Package Guide','/blog/char-dham-group-package']].map(([l,h])=>(
              <Link key={h} href={h} style={{ background:'#fff', border:'1px solid var(--border)', color:'var(--navy)', padding:'8px 16px', borderRadius:8, fontSize:13, fontWeight:600, textDecoration:'none' }}>{l} →</Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

const charDhamPkgs = PACKAGES.filter(p => p.category === 'char-dham');

const h2Style = {
  fontFamily: 'var(--font-display)',
  fontSize: 'clamp(1.35rem, 2.5vw, 1.85rem)',
  fontWeight: 600, color: 'var(--navy)',
  letterSpacing: '-0.02em',
  marginBottom: 12, marginTop: 40,
};
const pStyle = {
  fontSize: 15, color: 'var(--text-mid)',
  lineHeight: 1.85, marginBottom: 16,
};

export default function CharDhamYatra() {
  return (
    <>
      <Schema/>

      {/* Hero */}
      <section style={{
        background: 'linear-gradient(145deg,var(--navy) 0%,var(--navy-mid) 60%,var(--teal) 100%)',
        padding: '56px 20px 44px', textAlign: 'center',
      }}>
        <div style={{ maxWidth: 820, margin: '0 auto' }}>
          <span style={{ background:'rgba(232,146,10,0.18)', color:'#FFD166', fontSize:11, fontWeight:700, letterSpacing:'0.14em', textTransform:'uppercase', padding:'5px 16px', borderRadius:100, display:'inline-block', marginBottom:16 }}>
            Haridwar's Trusted Operator Since 2010
          </span>

          {/* H1 — exact target keyword */}
          <h1 className="display-title" style={{ color:'#fff', fontSize:'clamp(1.6rem,5.5vw,3rem)', marginBottom:16 }}>
            Char Dham Yatra Package 2026<br/>
            <em style={{ color:'#FFD166', fontStyle:'italic' }}>from Haridwar &amp; Delhi</em>
          </h1>

          <p style={{ color:'rgba(255,255,255,0.82)', fontSize:15.5, lineHeight:1.75, marginBottom:28, maxWidth:620, margin:'0 auto 28px' }}>
            Travel all four sacred Char Dham shrines — <strong style={{ color:'#FFD166' }}>Yamunotri, Gangotri, Kedarnath, Badrinath</strong> — with Garhwali-expert guides, VIP darshan at every temple, and zero commission pricing direct from Haridwar.
          </p>

          <div className="cta-row" style={{ display:'flex', gap:12, justifyContent:'center', flexWrap:'wrap' }}>
            <a href={`https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent('Namaste! I want to book Char Dham Yatra Package 2026.')}`}
              target="_blank" rel="nofollow noopener noreferrer"
              style={{ background:'#25D366', color:'#fff', padding:'14px 28px', borderRadius:10, fontWeight:700, fontSize:14, textDecoration:'none', display:'inline-flex', alignItems:'center', gap:8 }}>
              💬 Book on WhatsApp
            </a>
            <a href='tel:+917017082807'
              style={{ background:'#fff', color:'var(--navy)', padding:'14px 28px', borderRadius:10, fontWeight:700, fontSize:14, textDecoration:'none' }}>
              📞 {SITE.phone}
            </a>
          </div>
        </div>
      </section>

      {/* Breadcrumb */}
      <nav style={{ background:'var(--bg)', borderBottom:'1px solid var(--border)', padding:'10px 20px' }}>
        <div style={{ maxWidth:'var(--container)', margin:'0 auto', fontSize:12, color:'var(--text-muted)', display:'flex', gap:6 }}>
          <Link href="/" style={{ color:'var(--navy)', textDecoration:'none' }}>Home</Link>
          <span>›</span>
          <span>Char Dham Yatra Package 2026</span>
        </div>
      </nav>

      {/* Main content */}
      <article style={{ maxWidth:900, margin:'0 auto', padding:'40px 20px 60px' }}>
        <div style={{ fontSize:12, color:'var(--text-muted)', marginBottom:16, textAlign:'right' }}>🗓️ <strong>Last updated:</strong> May 4, 2026</div>


        {/* Semantic intro — active voice, skimmable */}
        <div style={{ background:'var(--bg)', borderRadius:12, padding:'18px 20px', border:'1px solid var(--border)', marginBottom:24 }}>
          <div style={{ fontWeight:700, fontSize:13, color:'var(--navy)', marginBottom:10, textTransform:'uppercase', letterSpacing:'0.06em' }}>Before you book — what you need to know</div>
          <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fill,minmax(200px,1fr))', gap:8 }}>
            {[
              ['Duration', '9–12 nights from Haridwar'],
              ['Route', 'Yamunotri → Gangotri → Kedarnath → Badrinath'],
              ['Season 2026', 'April 19 – November 2026'],
              ['Registration', 'Mandatory biometric / online'],
              ['Starts from', '₹19,500/person all-inclusive'],
              ['Trek required', 'Kedarnath (16km) + Yamunotri (6km)'],
            ].map(([k,v]) => (
              <div key={k} style={{ fontSize:13, display:'flex', flexDirection:'column', gap:1 }}>
                <span style={{ color:'var(--text-muted)', fontSize:11 }}>{k}</span>
                <span style={{ fontWeight:700, color:'var(--navy)', fontSize:13 }}>{v}</span>
              </div>
            ))}
          </div>
        </div>

        <p style={pStyle}>
          The <strong>Char Dham Yatra</strong> covers four sacred Himalayan shrines in Garhwal, Uttarakhand — <strong>Yamunotri</strong> (source of the Yamuna), <strong>Gangotri</strong> (source of the Ganges), <strong>Kedarnath</strong> (Shiva's Jyotirlinga at 3,583m) and <strong>Badrinath</strong> (Vishnu's abode on the banks of the Alaknanda). Completing all four in a single circuit is called the Chhota Char Dham Yatra — the northern Hindu pilgrimage circuit established by Adi Shankaracharya in the 8th century.
        </p>
        <p style={pStyle}>
          We run this circuit from Haridwar every year since 2010. Over 50,000 pilgrims have travelled with us across 15 seasons. Every package we sell is direct — no agent, no commission, no markup. When you pay ₹19,500, that money covers your vehicle, hotels, guide, meals and darshan arrangements, not a middleman's margin.
        </p>

        {/* Departure dates + urgency + EMI */}
        <div style={{ background:'var(--navy)', borderRadius:16, padding:'20px 22px', marginBottom:24 }}>
          <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center', flexWrap:'wrap', gap:12, marginBottom:16 }}>
            <div style={{ fontWeight:700, fontSize:15, color:'#fff' }}>📅 Upcoming Departures</div>
            <span style={{ background:'#25D366', color:'#fff', fontSize:11, fontWeight:700, padding:'4px 12px', borderRadius:100 }}>Season Open — Apr 19, 2026</span>
          </div>
          <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fill,minmax(min(140px,45%),1fr))', gap:8, marginBottom:14 }}>
            {[
              {date:'May 1–10, 2026',   seats:'4 seats left',  hot:true},
              {date:'May 10–19, 2026',  seats:'6 seats left',  hot:true},
              {date:'May 20–29, 2026',  seats:'8 seats left',  hot:false},
              {date:'June 1–10, 2026',  seats:'12 seats left', hot:false},
              {date:'Sept 10–19, 2026', seats:'Open batch',    hot:false},
              {date:'Oct 1–10, 2026',   seats:'Open batch',    hot:false},
            ].map(d => (
              <div key={d.date} style={{ background:'rgba(255,255,255,0.07)', borderRadius:9, padding:'11px 12px', border:`1px solid ${d.hot ? 'rgba(232,146,10,0.5)' : 'rgba(255,255,255,0.12)'}` }}>
                <div style={{ fontSize:13, fontWeight:700, color:'#fff', marginBottom:3 }}>{d.date}</div>
                <div style={{ fontSize:11.5, color: d.hot ? '#FFD166' : 'rgba(255,255,255,0.55)', fontWeight:600 }}>{d.seats}</div>
              </div>
            ))}
          </div>
          <div style={{ padding:'12px 14px', background:'rgba(255,255,255,0.07)', borderRadius:9, border:'1px solid rgba(255,255,255,0.15)', display:'flex', justifyContent:'space-between', alignItems:'center', flexWrap:'wrap', gap:10 }}>
            <div>
              <div style={{ fontSize:13, fontWeight:700, color:'#FFD166' }}>💳 Easy EMI — Pay in 3 Instalments</div>
              <div style={{ fontSize:12, color:'rgba(255,255,255,0.65)', marginTop:2 }}>25% advance secures your seat · Balance in 2 easy payments · No interest</div>
            </div>
            <a href={`https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent('Namaste! I want to book Char Dham Yatra 2026 on EMI.')}`}
              target="_blank" rel="nofollow noopener noreferrer"
              style={{ background:'var(--gold)', color:'#fff', padding:'9px 18px', borderRadius:8, fontWeight:700, fontSize:12.5, textDecoration:'none', flexShrink:0, whiteSpace:'nowrap' }}>
              Book with EMI →
            </a>
          </div>
        </div>

        {/* Package grid */}
        <div style={{ background:'var(--navy-light)', borderRadius:14, padding:'20px', marginBottom:32 }}>
          <h2 style={{ ...h2Style, marginTop:0, fontSize:'1.2rem' }}>Our Char Dham Yatra Packages 2026:</h2>
          <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fill,minmax(240px,1fr))', gap:12 }}>
            {charDhamPkgs.map(p => (
              <Link key={p.slug} href={`/packages/${p.slug}`}
                style={{ background:'#fff', padding:'14px 16px', borderRadius:10, border:'1px solid var(--border)', textDecoration:'none', display:'flex', justifyContent:'space-between', alignItems:'center', gap:8, transition:'box-shadow .2s' }}>
                <div>
                  <div style={{ fontSize:13.5, fontWeight:600, color:'var(--text)', lineHeight:1.3 }}>{p.name}</div>
                  <div style={{ fontSize:12, color:'var(--text-muted)', marginTop:3 }}>{p.duration.nights}N/{p.duration.days}D · {p.startCity}</div>
                </div>
                <div style={{ textAlign:'right', flexShrink:0 }}>
                  <div style={{ fontWeight:800, fontSize:17, color:'var(--navy)' }}>₹{p.price.discounted.toLocaleString('en-IN')}</div>
                  <div style={{ fontSize:10.5, color:'var(--green)', fontWeight:600 }}>per person</div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        <h2 style={h2Style}>Char Dham Yatra Itinerary 2026</h2>
        <p style={pStyle}>
          The full Char Dham circuit runs <strong>10–12 days</strong> from Haridwar. You travel clockwise — the traditional, spiritually correct direction. Here is the standard itinerary:
        </p>
        <div style={{ background:'var(--bg)', borderRadius:12, padding:'18px 20px', border:'1px solid var(--border)', fontSize:14, lineHeight:2.2, marginBottom:20 }}>
          <strong>Day 1:</strong> Haridwar — Ganga Aarti at Har Ki Pauri<br/>
          <strong>Day 2:</strong> Haridwar → Barkot (via Dehradun & Mussoorie)<br/>
          <strong>Day 3:</strong> Barkot → Yamunotri Darshan → Barkot<br/>
          <strong>Day 4:</strong> Barkot → Uttarkashi (Kashi Vishwanath Temple)<br/>
          <strong>Day 5:</strong> Uttarkashi → Gangotri Darshan → Uttarkashi<br/>
          <strong>Day 6:</strong> Uttarkashi → Guptkashi (via Tehri, Srinagar)<br/>
          <strong>Day 7:</strong> Guptkashi → Kedarnath Trek (16 km) → Kedarnath<br/>
          <strong>Day 8:</strong> Kedarnath Darshan → Descend → Rudraprayag<br/>
          <strong>Day 9:</strong> Rudraprayag → Badrinath (via Joshimath)<br/>
          <strong>Day 10:</strong> Badrinath Darshan → Mana Village → Joshimath<br/>
          <strong>Day 11:</strong> Joshimath → Rishikesh → Haridwar<br/>
        </div>

        <h2 style={h2Style}>Char Dham Yatra Package Cost 2026 — Budget, Deluxe & Premium</h2>
        <p style={pStyle}>
          Our packages start at <strong>₹19,500 per person</strong> (₹39,000 per couple) for a 9N/10D all-inclusive trip from Haridwar. Choose your comfort tier:
        </p>
        <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fill,minmax(220px,1fr))', gap:12, marginBottom:20 }}>
          {[
            { tier:'Budget', range:'Rs.19,500-Rs.22,000', couple:'Rs.39,000-Rs.44,000', duration:'9N/10D', vehicle:'Sedan / Swift Dzire', hotel:'Standard lodges', best:'Solo, young pilgrims' },
            { tier:'Deluxe', range:'Rs.27,500-Rs.32,000', couple:'Rs.55,000-Rs.64,000', duration:'11N/12D', vehicle:'Innova Crysta', hotel:'2-3 star hotels', best:'Families, seniors' },
            { tier:'Senior Special', range:'Rs.24,500-Rs.28,000', couple:'Rs.49,000-Rs.56,000', duration:'12N/13D', vehicle:'Innova Crysta', hotel:'Ground-floor rooms', best:'60+ pilgrims' },
            { tier:'Helicopter', range:'Rs.85,000-Rs.95,000', couple:'Rs.1,70,000-Rs.1,90,000', duration:'5N/6D', vehicle:'Helicopter from Dehradun', hotel:'Best available', best:'Premium, time-saving' },
          ].map(p => (
            <div key={p.tier} style={{ background:'#fff', borderRadius:12, padding:'16px', border:'1px solid var(--border)' }}>
              <div style={{ fontWeight:800, fontSize:14, color:'var(--navy)', marginBottom:4 }}>{p.tier}</div>
              <div style={{ fontWeight:800, fontSize:20, color:'var(--navy)', lineHeight:1, marginBottom:2 }}>{p.range}</div>
              <div style={{ fontSize:12, color:'var(--text-muted)', marginBottom:6 }}>per person - {p.duration}</div>
              <div style={{ fontSize:13, fontWeight:700, color:'var(--teal)', marginBottom:8 }}>Per couple: {p.couple}</div>
              <div style={{ fontSize:12, color:'var(--text-mid)', marginBottom:2 }}>Vehicle: {p.vehicle}</div>
              <div style={{ fontSize:12, color:'var(--text-mid)', marginBottom:2 }}>Hotel: {p.hotel}</div>
              <div style={{ fontSize:12, color:'var(--text-mid)' }}>Best for: {p.best}</div>
            </div>
          ))}
        </div>

        <h3 style={{ fontSize:'1rem', fontWeight:700, color:'var(--navy)', marginBottom:10 }}>Private Taxi Fare — Char Dham Circuit from Haridwar</h3>
        <div style={{ overflowX:'auto', marginBottom:8 }}>
          <table style={{ width:'100%', borderCollapse:'collapse', fontSize:13.5 }}>
            <thead><tr style={{ background:'var(--navy)' }}>
              {['Vehicle','Capacity','Total Fare','Per Person (4 pax)','Best For'].map(h=>(
                <th key={h} style={{ padding:'9px 12px', textAlign:'left', color:'#fff', fontWeight:700, fontSize:12 }}>{h}</th>
              ))}
            </tr></thead>
            <tbody>
              {[
                ['Swift Dzire / Sedan','2-3 persons','Rs.35,000-45,000','~Rs.15,000','Budget couple'],
                ['Ertiga / Maruti','4-5 persons','Rs.45,000-60,000','~Rs.12,000','Small family'],
                ['Innova Crysta','4-7 persons','Rs.55,000-75,000','~Rs.11,000','Most popular'],
                ['Tempo Traveller 12-seater','8-12 persons','Rs.90,000-1.2L','~Rs.9,000','Groups'],
                ['Tempo Traveller 17-seater','13-17 persons','Rs.1.1L-1.5L','~Rs.7,500','Large group'],
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
        <p style={{ fontSize:12, color:'var(--text-muted)', marginBottom:8 }}>Fares include fuel, toll, parking and driver allowance. All packages are all-inclusive — hotel, meals, guide, registration. Zero commission. No hidden fees.</p>

        <h2 style={h2Style}>Best Time for Char Dham Yatra 2026 — Month-by-Month</h2>
        <div style={{ overflowX:'auto', marginBottom:24 }}>
          <table style={{ width:'100%', borderCollapse:'collapse', fontSize:13 }}>
            <thead><tr style={{ background:'var(--navy)' }}>
              {['Month','Temp (day/night)','Crowd','Roads','Verdict'].map(h=>(
                <th key={h} style={{ padding:'9px 12px', textAlign:'left', color:'#fff', fontWeight:700, fontSize:12 }}>{h}</th>
              ))}
            </tr></thead>
            <tbody>
              {[
                ['May','12-22C / 4-8C','Very high','Good','Ideal — book 60 days ahead'],
                ['June','14-24C / 6-10C','Very high','Good early, risk late','Ideal early June'],
                ['July-Aug','14-22C / 8-12C','Low','Landslide risk','Avoid — monsoon season'],
                ['September','10-18C / 3-6C','Low-moderate','Clear post-monsoon','Best for peaceful darshan'],
                ['October 1-15','6-15C / -2-4C','Low','Open until closing','Good — early Oct only'],
              ].map(([m,temp,crowd,roads,v],i)=>(
                <tr key={i} style={{ borderBottom:'1px solid var(--border)', background:i%2===0?'#fff':'var(--bg)' }}>
                  <td style={{ padding:'8px 12px', fontWeight:700, color:'var(--navy)', fontSize:13 }}>{m}</td>
                  <td style={{ padding:'8px 12px', color:'#475569', fontSize:12.5 }}>{temp}</td>
                  <td style={{ padding:'8px 12px', color:'#475569', fontSize:12.5 }}>{crowd}</td>
                  <td style={{ padding:'8px 12px', color:'#475569', fontSize:12.5 }}>{roads}</td>
                  <td style={{ padding:'8px 12px', fontWeight:600, color:'var(--navy)', fontSize:12.5 }}>{v}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 style={h2Style}>The Story Behind the Four Dhams — Why This Pilgrimage Matters</h2>
        <p style={{ fontSize:15, color:'#334155', lineHeight:1.85, marginBottom:16 }}>Adi Shankaracharya, the 8th-century philosopher-monk, established the Char Dham in the 8th century CE for a specific reason: to unite India. He placed one sacred shrine at each corner of the subcontinent — Puri in the east, Dwarka in the west, Rameswaram in the south, and Badrinath in the north. The Himalayan Char Dham — Yamunotri, Gangotri, Kedarnath, and Badrinath — is the "Chhota Char Dham" (the smaller, northern circuit), but it is the one most people are referring to when they say Char Dham Yatra today.</p>
        <p style={{ fontSize:15, color:'#334155', lineHeight:1.85, marginBottom:16 }}>The circuit is always done in a specific order: west to east — Yamunotri first, then Gangotri, then Kedarnath, then Badrinath. This is not arbitrary. Yamunotri and Gangotri are the sources of two of India's most sacred rivers. Kedarnath honours the form in which Lord Shiva is worshipped in the Himalayas. And Badrinath, where Lord Vishnu meditated, is where the circuit is completed — the final grace, the final absolution. Most pilgrims who complete all four describe the Badrinath darshan as carrying an emotional weight unlike anything else. It is the ending of something that began weeks earlier in a very different state of mind.</p>

        <h2 style={h2Style}>What Each Dham Feels Like — Honestly</h2>
        <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fill,minmax(240px,1fr))', gap:14, marginBottom:28 }}>
          {[
            { dham:'Yamunotri', feel:'Intimate & effortful', desc:'The 6km trek filters out the casual visitor. By the time you reach the temple, you have earned it. The Surya Kund ritual — cooking rice in boiling water to offer the goddess — is unlike anything at the other three dhams. Quiet, ancient, deeply personal.' },
            { dham:'Gangotri', feel:'Dramatic & humbling', desc:'The Bhagirathi gorge — sheer rock walls, roaring river, and an 18th-century temple at the river\'s edge — is visually stunning. No trekking needed. The story of Bhagirath and his thousand years of penance hangs in the air. The pre-dawn aarti here, with the river loud in the darkness, is extraordinary.' },
            { dham:'Kedarnath', feel:'Raw & physically demanding', desc:'The 16km trek across elevation is the hardest physical challenge on the circuit. The boulder behind the temple from the 2013 flood is a tangible thing you can touch. Many pilgrims weep at the first sight of the temple after hours of walking. This dham asks the most of you — and gives the most back.' },
            { dham:'Badrinath', feel:'Grand & accessible', desc:'The only dham you can reach by car. But the scale of the valley — Neelkanth peak soaring above, the Alaknanda rushing past the temple steps — makes it the most visually dramatic of all four. Mana village, 3km beyond, is India\'s last inhabited village. Walking through it at dawn before the crowds arrive is something many of our regulars plan their entire trip around.' },
          ].map(d => (
            <div key={d.dham} style={{ background:'#fff', borderRadius:12, padding:'18px', border:'1px solid var(--border)' }}>
              <div style={{ fontWeight:800, fontSize:15, color:'var(--navy)', marginBottom:3 }}>{d.dham}</div>
              <div style={{ fontSize:11, fontWeight:700, color:'var(--gold-dark)', textTransform:'uppercase', letterSpacing:'0.08em', marginBottom:8 }}>{d.feel}</div>
              <div style={{ fontSize:13, color:'var(--text-mid)', lineHeight:1.7 }}>{d.desc}</div>
            </div>
          ))}
        </div>

        <h2 style={h2Style}>Local Experiences Along the Route You Should Not Miss</h2>
        <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fill,minmax(260px,1fr))', gap:14, marginBottom:28 }}>
          {[
            { name:'Ganga Aarti at Har Ki Pauri, Haridwar', when:'Every evening at sunset', desc:'Your yatra begins in Haridwar, and the evening Ganga Aarti at Har Ki Pauri is the unofficial opening ceremony. Thousands of diyas (earthen lamps) float on the Ganga as priests swing large oil lamps in synchronized arcs. If this is your first yatra, arrive a day early to attend it. It sets the tone for everything that follows.' },
            { name:'Devprayag Confluence', when:'En route to Kedarnath', desc:'Where the Alaknanda and Bhagirathi meet to become the Ganga. The two rivers have distinctly different colours — one green, one grey-blue — and you can watch them resist mixing for several metres before finally merging. An ancient Raghunath Temple sits at the point of confluence. Most groups stop here for 20 minutes on their way to Guptkashi.' },
            { name:'Mana Village, Badrinath', when:'Morning, before crowds', desc:'Three kilometres beyond Badrinath, Mana is India\'s last village before the Tibetan border. It has stone houses, a 900-year-old cave where the Mahabharata was dictated, a natural rock bridge over a roaring river, and a handful of women who sell locally woven shawls from their doorways. Walk here before 8 AM. By 10 AM, there are tour groups.' },
            { name:'Tea at a Dhaba on the Trek', when:'Any rest point, Kedarnath trek', desc:'On the Kedarnath trek, there are small tea stalls perched on ledges above the valley. Dal, rice, and chai served at 12,000 feet, with a view of the Mandakini valley below. These dhabas — run year after year by the same families — are one of the most human parts of the entire yatra. Sit down, eat slowly, talk to whoever is there.' },
          ].map(pl => (
            <div key={pl.name} style={{ background:'#fff', borderRadius:12, padding:'16px', border:'1px solid var(--border)', boxShadow:'0 2px 8px rgba(0,0,0,0.04)' }}>
              <div style={{ fontWeight:700, fontSize:13.5, color:'var(--navy)', marginBottom:3 }}>{pl.name}</div>
              <div style={{ fontSize:11, color:'var(--gold-dark)', fontWeight:700, textTransform:'uppercase', letterSpacing:'0.06em', marginBottom:8 }}>{pl.when}</div>
              <div style={{ fontSize:13, color:'var(--text-mid)', lineHeight:1.7 }}>{pl.desc}</div>
            </div>
          ))}
        </div>

        <h2 style={h2Style}>Why Choose Shiv Ganga Travels?</h2>
        <ul style={{ listStyle:'none', display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(220px,1fr))', gap:12, marginBottom:24 }}>
          {[
            { icon:'🙏', point:'50,000+ pilgrims served since 2010' },
            { icon:'🏡', point:'Local Haridwar expertise — we know every route' },
            { icon:'💰', point:'No middleman pricing — pay us directly' },
            { icon:'🎫', point:'VIP darshan at all 4 dhams — skip queues' },
            { icon:'🚌', point:'Own AC fleet — no rental vehicles' },
            { icon:'⭐', point:'4.9/5 Google rating — 850+ verified reviews' },
            { icon:'🛡️', point:'Uttarakhand Tourism Board registered operator' },
            { icon:'💊', point:'Oxygen cylinder + first aid on every vehicle' },
          ].map(w => (
            <li key={w.point} style={{ display:'flex', gap:10, alignItems:'flex-start', padding:'12px 14px', background:'var(--bg)', borderRadius:10, border:'1px solid var(--border)' }}>
              <span style={{ fontSize:20, flexShrink:0 }}>{w.icon}</span>
              <span style={{ fontSize:13, color:'var(--text-mid)', lineHeight:1.5 }}>{w.point}</span>
            </li>
          ))}
        </ul>

        <h2 style={h2Style}>Frequently Asked Questions</h2>
        <FAQAccordion faqs={GLOBAL_FAQS}/>

        {/* Internal links */}
        <div style={{ background:'var(--navy-light)', borderRadius:14, padding:'20px 22px', marginTop:36, marginBottom:24 }}>
          <h3 style={{ fontSize:'1rem', fontWeight:700, color:'var(--navy)', marginBottom:14 }}>
            Explore Related Packages:
          </h3>
          <div style={{ display:'flex', flexWrap:'wrap', gap:10 }}>
            {[
              { label:'View Char Dham Packages →',     href:'/packages/char-dham' },
              { label:'Kedarnath Yatra →',             href:'/kedarnath-yatra' },
              { label:'Char Dham Yatra Guide 2026 →',  href:'/char-dham-yatra-2025' },
              { label:'Do Dham Packages →',            href:'/packages/do-dham' },
              { label:'Helicopter Char Dham →',        href:'/packages/helicopter' },
              { label:'All Packages →',               href:'/packages' },
            ].map(l => (
              <Link key={l.href} href={l.href}
                style={{ background:'#fff', color:'var(--navy)', padding:'8px 16px', borderRadius:8, fontSize:13, fontWeight:600, textDecoration:'none', border:'1px solid var(--border)' }}>
                {l.label}
              </Link>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div style={{ background:'var(--navy)', borderRadius:16, padding:'28px 24px', textAlign:'center' }}>
          <h3 style={{ color:'#fff', fontFamily:'var(--font-display)', fontSize:'1.5rem', marginBottom:10 }}>
            Book Your Char Dham Yatra 2026
          </h3>
          <p style={{ color:'rgba(255,255,255,0.75)', fontSize:14, marginBottom:20 }}>
            Free custom itinerary within 2 hours. Zero commission. ₹19,500 onwards all-inclusive.
          </p>
          <div className="cta-row" style={{ display:'flex', gap:12, justifyContent:'center', flexWrap:'wrap' }}>
            <a href={`https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent('Namaste! I want to book Char Dham Yatra 2026.')}`}
              target="_blank" rel="nofollow noopener noreferrer"
              style={{ background:'#25D366', color:'#fff', padding:'13px 26px', borderRadius:10, fontWeight:700, fontSize:14, textDecoration:'none' }}>
              💬 Book on WhatsApp
            </a>
            <a href='tel:+917017082807'
              style={{ background:'#fff', color:'var(--navy)', padding:'13px 26px', borderRadius:10, fontWeight:700, fontSize:14, textDecoration:'none' }}>
              📞 {SITE.phone}
            </a>
            <Link href="/packages/char-dham"
              style={{ background:'var(--gold)', color:'#fff', padding:'13px 26px', borderRadius:10, fontWeight:700, fontSize:14, textDecoration:'none' }}>
              View All Packages →
            </Link>
          </div>
        </div>
      </article>

      <section style={{ background:'var(--bg)', borderTop:'1px solid var(--border)', padding:'32px 20px' }}>
        <div style={{ maxWidth:'var(--container)', margin:'0 auto' }}>
          <div style={{ fontWeight:700, fontSize:14, color:'var(--navy)', marginBottom:14 }}>Useful Resources</div>
          <div style={{ display:'flex', gap:10, flexWrap:'wrap' }}>
            {[['Char Dham Cost Calculator','/char-dham-yatra-cost-calculator'],['Registration Guide','/blog/char-dham-yatra-registration'],['Budget vs Premium','/blog/char-dham-yatra-budget-vs-premium'],['Packing List','/blog/char-dham-yatra-packing-list'],['How to Reach Kedarnath','/blog/how-to-reach-kedarnath'],['How to Reach Haridwar','/how-to-reach-haridwar'],['Road Status 2026','/char-dham-road-status'],['Opening Dates 2026','/blog/char-dham-yatra-opening-dates-2026'],['Group Package Guide','/blog/char-dham-group-package']].map(([l,h])=>(
              <Link key={h} href={h} style={{ background:'#fff', border:'1px solid var(--border)', color:'var(--navy)', padding:'8px 16px', borderRadius:8, fontSize:13, fontWeight:600, textDecoration:'none' }}>{l} →</Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
