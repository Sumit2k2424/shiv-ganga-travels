import Link from 'next/link';
import { PACKAGES, SITE, GLOBAL_FAQS } from '@/data/packages';
import FAQAccordion from '@/components/FAQAccordion';

export const metadata = {
  title: 'Char Dham Yatra Package 2026 from Haridwar | Shiv Ganga Travels',
  description: 'Book Char Dham Yatra package 2026 from Haridwar & Delhi. Kedarnath, Badrinath, Gangotri, Yamunotri. Starting ₹19,500. Verified operator, safe travel, VIP darshan.',
  keywords: [
    'char dham yatra package','char dham yatra 2026','char dham package from haridwar',
    'char dham yatra package price','char dham yatra booking','chardham yatra package 2026',
    'char dham yatra from delhi','char dham tour package',
  ],
  alternates: { canonical: `${SITE.baseUrl}/char-dham-yatra` },
  openGraph: {
    title: 'Char Dham Yatra Package 2026 from Haridwar | Shiv Ganga Travels',
    description: 'Book Char Dham Yatra 2026 from Haridwar. Kedarnath · Badrinath · Gangotri · Yamunotri. From ₹19,500.',
    url: `${SITE.baseUrl}/char-dham-yatra`,
    type: 'website',
    images: ['https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/Kedarnathji-mandir.JPG/1200px-Kedarnathji-mandir.JPG'],
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
      streetAddress: 'Near Har Ki Pauri',
      addressLocality: 'Haridwar',
      addressRegion: 'Uttarakhand',
      postalCode: '249401',
      addressCountry: 'IN',
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '850',
      bestRating: '5',
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
      ratingValue: '4.9',
      reviewCount: '850',
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
            Book affordable Char Dham Yatra packages covering <strong style={{ color:'#FFD166' }}>Kedarnath, Badrinath, Gangotri,</strong> and <strong style={{ color:'#FFD166' }}>Yamunotri</strong> with experienced Garhwali guides, VIP darshan, and complete travel support.
          </p>

          <div style={{ display:'flex', gap:12, justifyContent:'center', flexWrap:'wrap' }}>
            <a href={`https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent('Namaste! I want to book Char Dham Yatra Package 2026.')}`}
              target="_blank" rel="noopener noreferrer"
              style={{ background:'#25D366', color:'#fff', padding:'14px 28px', borderRadius:10, fontWeight:700, fontSize:14, textDecoration:'none', display:'inline-flex', alignItems:'center', gap:8 }}>
              💬 Book on WhatsApp
            </a>
            <a href={`tel:${SITE.phone}`}
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

        <p style={pStyle}>
          The <strong>Char Dham Yatra</strong> is the holiest pilgrimage in Hinduism, covering four sacred shrines in the Garhwal Himalayas of Uttarakhand — <strong>Yamunotri, Gangotri, Kedarnath,</strong> and <strong>Badrinath</strong>. At <strong>Shiv Ganga Travels</strong>, we have been organising Char Dham Yatra packages from Haridwar since 2010, serving over 50,000 pilgrims with zero commission, all-inclusive pricing, and verified drivers.
        </p>

        {/* Departure dates + urgency + EMI */}
        <div style={{ background:'var(--navy)', borderRadius:16, padding:'20px 22px', marginBottom:24 }}>
          <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center', flexWrap:'wrap', gap:12, marginBottom:16 }}>
            <div style={{ fontWeight:700, fontSize:15, color:'#fff' }}>📅 Upcoming Departures</div>
            <span style={{ background:'#25D366', color:'#fff', fontSize:11, fontWeight:700, padding:'4px 12px', borderRadius:100 }}>Season Open — Apr 19, 2026</span>
          </div>
          <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fill,minmax(140px,1fr))', gap:8, marginBottom:14 }}>
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
              target="_blank" rel="noopener noreferrer"
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
          The complete Char Dham Yatra covers <strong>10–12 days</strong> from Haridwar, travelling in a traditional clockwise direction. Here is the standard route:
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

        <h2 style={h2Style}>Char Dham Yatra Package Cost 2026</h2>
        <p style={pStyle}>
          Our Char Dham Yatra package prices <strong>start from ₹19,500 per person</strong> for the standard 9N/10D package. Prices vary based on package type, hotel category, and group size:
        </p>
        <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(200px,1fr))', gap:12, marginBottom:24 }}>
          {[
            { type:'Standard Package',  nights:'9N/10D', price:'₹19,500', note:'Shared vehicle, standard hotels' },
            { type:'Deluxe Package',    nights:'11N/12D',price:'₹27,500', note:'3-star hotels, more rest days' },
            { type:'Senior Special',    nights:'12N/13D',price:'₹24,500', note:'Pony/palki + medical attendant' },
            { type:'Helicopter Package',nights:'5N/6D',  price:'₹85,000', note:'All 4 dhams by air — VIP' },
          ].map(p => (
            <div key={p.type} style={{ background:'#fff', borderRadius:10, padding:'14px 16px', border:'1px solid var(--border)' }}>
              <div style={{ fontWeight:700, fontSize:13.5, color:'var(--text)', marginBottom:4 }}>{p.type}</div>
              <div style={{ fontWeight:800, fontSize:20, color:'var(--navy)', lineHeight:1 }}>{p.price}</div>
              <div style={{ fontSize:12, color:'var(--text-muted)', marginTop:4 }}>{p.nights} · {p.note}</div>
            </div>
          ))}
        </div>
        <p style={{ ...pStyle, fontSize:13.5 }}>
          All packages are <strong>all-inclusive</strong> — hotel accommodation, daily meals (breakfast + dinner), private AC vehicle, experienced Garhwali guide, biometric registration, toll & parking charges. <strong>Zero commission. No hidden fees.</strong>
        </p>

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
          <div style={{ display:'flex', gap:12, justifyContent:'center', flexWrap:'wrap' }}>
            <a href={`https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent('Namaste! I want to book Char Dham Yatra 2026.')}`}
              target="_blank" rel="noopener noreferrer"
              style={{ background:'#25D366', color:'#fff', padding:'13px 26px', borderRadius:10, fontWeight:700, fontSize:14, textDecoration:'none' }}>
              💬 Book on WhatsApp
            </a>
            <a href={`tel:${SITE.phone}`}
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
    </>
  );
}
