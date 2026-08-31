import Link from 'next/link';
import { SITE } from '@/data/packages';
import AnswerBox from '@/components/AnswerBox';
import FAQAccordion from '@/components/FAQAccordion';
import { h2, p } from '@/lib/prose';

const PAGE = '/online-puja-booking';
const VERIFIED = 'August 22, 2026';
const VERIFIED_ISO = '2026-08-22';

export const metadata = {
  title: { absolute: `Online Puja Booking ${SITE.season} | Kedarnath & Badrinath` },
  description: `Book online puja at Kedarnath, Badrinath, Gangotri & Yamunotri ${SITE.season}. Trusted operator, 15+ yrs experience, instant confirmation. Managed from Haridwar.`,
  keywords: ['online puja booking kedarnath','badrinath abhishek booking','kedarnath mahabhishek','rudrabhishek kedarnath',`char dham puja booking ${SITE.season}`,'badrinath online puja'],
  alternates: { canonical: `${SITE.baseUrl}/online-puja-booking` },
};
const pujas = [
  { temple:'Kedarnath', deity:'Lord Shiva', pujas:[
    { name:'Maha Abhishek', price:'₹3,100', time:'4:00–6:00 AM', desc:'Milk, curd, honey, ghee, sacred water — most powerful Shiva puja. Conducted at pre-dawn.', popular:true },
    { name:'Rudrabhishek', price:'₹1,500', time:'Morning', desc:'Panchamrit abhishek with chanting of Rudrashtadhyayi. Highly auspicious for health and prosperity.' },
    { name:'Sahastra Naam Archana', price:'₹1,200', time:'Afternoon', desc:'1,008 names of Lord Shiva recited. Tulsi, bael leaves, flowers offered to the lingam.' },
    { name:'Shringaar Aarti', price:'₹2,100', time:'7:30 PM', desc:'Lord Shiva adorned with flowers and jewels. One of the most beautiful rituals at Kedarnath.' },
  ]},
  { temple:'Badrinath', deity:'Lord Vishnu', pujas:[
    { name:'Maha Abhishek', price:'₹3,500', time:'4:30 AM', desc:'Pre-dawn abhishek — the holiest puja at Badrinath. Panchamrit + holy water from Alaknanda.', popular:true },
    { name:'Balabhog Archana', price:'₹750', time:'7:00 AM', desc:'Morning offering to Lord Badrinarayan. Flowers, tulsi, dry fruits.' },
    { name:'Shodashopachaar Puja', price:'₹2,100', time:'Morning/Afternoon', desc:'16-step worship ritual — full traditional Vaishnav puja at Badrinath.' },
    { name:'Sandhya Aarti', price:'₹1,500', time:'7:00 PM', desc:'Evening aarti with conch shells, bells, and incense.' },
  ]},
  { temple:'Gangotri', deity:'Goddess Ganga', pujas:[
    { name:'Ganga Abhishek', price:'₹1,100', time:'Morning', desc:'Abhishek with holy water from the Bhagirathi river — deeply purifying ritual.' },
    { name:'Rudrabhishek', price:'₹1,500', time:'Morning', desc:'Shiva puja as Gangadhar (bearer of Ganga). Conducted near Surya Kund.' },
  ]},
  { temple:'Yamunotri', deity:'Goddess Yamuna', pujas:[
    { name:'Yamuna Archana', price:'₹750', time:'Morning', desc:'Flowers and offerings to Goddess Yamuna. Prasad cooked in Surya Kund hot spring.' },
    { name:'Vishesh Puja', price:'₹1,500', time:'Morning/Afternoon', desc:'Special puja with pandit. Includes jal abhishek from the Yamuna source.' },
  ]},
];
const faqs = [
  {
    q: 'Can you book a Char Dham puja online in advance?',
    a: 'Yes. Every puja on this page can be reserved before you travel — you send the pilgrim names, the gotra, the travel date and the puja you want, we confirm the slot with the temple pandit, and the ritual is performed in your name on the day. Advance booking matters most for the pre-dawn Maha Abhishek at Kedarnath and Badrinath, which has a hard daily cap and fills weeks ahead in May and June.',
  },
  {
    q: 'How much does a puja at Kedarnath cost?',
    a: 'Between ₹1,200 and ₹3,100 depending on the ritual. Sahastra Naam Archana is ₹1,200, Rudrabhishek ₹1,500, Shringaar Aarti ₹2,100 and Maha Abhishek — the pre-dawn one — is ₹3,100. Badrinath runs from ₹750 for Balabhog Archana to ₹3,500 for Maha Abhishek. These are the pandit and offering charges; they are not temple entry fees, because there are none.',
  },
  {
    q: 'Do I need to be present for the puja?',
    a: 'No. A puja can be performed in your name and gotra whether or not you are standing there, which is why many families book one for a relative who cannot make the journey. If you want proof it happened, ask for the video — the pandit records it and we send it on WhatsApp the same day.',
  },
  {
    q: 'What is the difference between Maha Abhishek and Rudrabhishek at Kedarnath?',
    a: 'Maha Abhishek is the pre-dawn ritual performed between roughly 4am and 6am, before the temple opens to general darshan, and the abhishek is done directly on the lingam with panchamrit — milk, curd, honey, ghee and sacred water. Rudrabhishek is a morning puja with the same panchamrit offering but accompanied by recitation of the Rudrashtadhyayi, and it is performed after the temple opens. Maha Abhishek is the more restricted and the more expensive of the two.',
  },
  {
    q: 'Is it safe to pay someone online for a temple puja?',
    a: 'It is if you know who you are paying. The recurring scam on this route is a stranger outside the temple offering a "special puja" for cash, with no receipt and no connection to the temple. Book through an operator with a verifiable address and a registered pandit, pay a part-advance rather than the full amount up front, and get the booking confirmed in writing. We are at Saptrishi Road, Haridwar, and we take 50% in advance with the balance after the puja is done.',
  },
  {
    q: 'When should I book a puja for the 2026 season?',
    a: 'For May and June travel, six to eight weeks ahead. Those are the busiest weeks of the year and the pre-dawn slots at both Kedarnath and Badrinath are the first thing to go. September and October are far easier — a week or two is usually enough. Outside the season the temples are closed and no puja can be performed at the shrine itself.',
  },
];

function Schema() {
  const offerCatalog = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Char Dham Online Puja Booking',
    serviceType: 'Temple puja booking',
    provider: { '@type': 'Organization', name: SITE.name, url: SITE.baseUrl, telephone: SITE.phone, '@id': `${SITE.baseUrl}/#organization` },
    url: `${SITE.baseUrl}${PAGE}`,
    areaServed: 'Uttarakhand, India',
    description: `Advance puja booking at Kedarnath, Badrinath, Gangotri and Yamunotri temples for Char Dham Yatra ${SITE.season}, performed by temple-registered pandits.`,
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: `Char Dham puja rate card ${SITE.season}`,
      itemListElement: pujas.map((t) => ({
        '@type': 'OfferCatalog',
        name: `${t.temple} pujas`,
        itemListElement: t.pujas.map((x) => ({
          '@type': 'Offer',
          name: `${x.name} — ${t.temple}`,
          description: x.desc,
          price: x.price.replace(/[₹,]/g, ''),
          priceCurrency: 'INR',
          availability: 'https://schema.org/InStock',
          validFrom: '2026-04-19',
          validThrough: '2026-11-13',
          itemOffered: { '@type': 'Service', name: x.name, description: x.desc },
        })),
      })),
    },
  };
  const faqSchema = {
    '@context': 'https://schema.org', '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
  };
  const article = {
    '@context': 'https://schema.org', '@type': 'Article',
    headline: `Char Dham Online Puja Booking ${SITE.season} — Rates and Rituals`,
    description: 'Full puja rate card for Kedarnath, Badrinath, Gangotri and Yamunotri, what each ritual involves, and how advance booking works.',
    image: `${SITE.baseUrl}/opengraph-image`,
    datePublished: '2026-03-05', dateModified: VERIFIED_ISO,
    author: { '@type': 'Organization', name: SITE.name, url: SITE.baseUrl, '@id': `${SITE.baseUrl}/#organization` },
    publisher: { '@type': 'Organization', name: SITE.name, url: SITE.baseUrl, logo: { '@type': 'ImageObject', url: `${SITE.baseUrl}/logo.png` } },
    mainEntityOfPage: `${SITE.baseUrl}${PAGE}`,
    speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.speakable-answer'] },
  };
  const breadcrumb = {
    '@context': 'https://schema.org', '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: SITE.baseUrl },
      { '@type': 'ListItem', position: 2, name: 'Online Puja Booking', item: `${SITE.baseUrl}${PAGE}` },
    ],
  };
  return (<>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(offerCatalog) }} />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(article) }} />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
  </>);
}

export default function PujaBooking() {
  return (<>
    <Schema />
    <section style={{ background:'linear-gradient(145deg,var(--navy) 0%,var(--navy-mid) 60%,var(--teal) 100%)', padding:'56px 20px 44px', textAlign:'center' }}>
      <div style={{ maxWidth:820, margin:'0 auto' }}>
        <span style={{ background:'rgba(232,146,10,0.18)', color:'#FFD166', fontSize:11, fontWeight:700, letterSpacing:'0.12em', textTransform:'uppercase', padding:'5px 16px', borderRadius:100, display:'inline-block', marginBottom:16 }}>🙏 Advance Booking · 2026</span>
        <h1 className="display-title" style={{ color:'#fff', fontSize:'clamp(1.8rem,4.5vw,3rem)', marginBottom:14 }}>Online Puja Booking — Char Dham 2026</h1>
        {/* This subhead used to be set at #1a1a1a — near-black on a navy-to-teal
            gradient, so it rendered as an invisible line of text in the hero. */}
        <p style={{ color:'rgba(255,255,255,0.8)', fontSize:15, lineHeight:1.7 }}>Mahabhishek · Rudrabhishek · Sahastra Naam · Shringaar Aarti · All four temples · Temple-registered pandits</p>
        <a href={`https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent('Namaste! I want to book a puja at Char Dham temples. Please share availability and prices.')}`} target="_blank" rel="nofollow noopener noreferrer"
          style={{ display:'inline-block', background:'#25D366', color:'#fff', padding:'13px 32px', borderRadius:10, fontWeight:700, fontSize:15, textDecoration:'none', marginTop:20 }}>💬 Book Puja on WhatsApp</a>
      </div>
    </section>
    <nav aria-label="Breadcrumb" style={{ background:'var(--bg)', borderBottom:'1px solid hsl(var(--border))', padding:'10px 20px' }}>
      <div style={{ maxWidth:'var(--container)', margin:'0 auto', fontSize:12, color:'var(--text-muted)', display:'flex', gap:6, flexWrap:'wrap' }}>
        <Link href="/" style={{ color:'var(--teal)', textDecoration:'none' }}>Home</Link><span>›</span>
        <span>Online Puja Booking</span>
      </div>
    </nav>
    <div style={{ maxWidth:960, margin:'0 auto', padding:'32px 20px 60px' }}>

      <AnswerBox>
        <strong>Pujas at the four Char Dham temples can be booked in advance and cost ₹750 to ₹3,500.</strong>{' '}
        At Kedarnath, Sahastra Naam Archana is ₹1,200, Rudrabhishek ₹1,500, Shringaar Aarti ₹2,100 and the
        pre-dawn Maha Abhishek ₹3,100. At Badrinath, Balabhog Archana starts at ₹750 and Maha Abhishek is
        ₹3,500. You do not have to be present — the ritual is performed in your name and gotra, and the pandit
        will record it on request. Rates on this page were last checked on {VERIFIED}.
      </AnswerBox>

      <div style={{ background:'#fff9f0', border:'1px solid rgba(232,146,10,0.3)', borderRadius:12, padding:'14px 18px', marginBottom:28 }}>
        <div style={{ fontWeight:700, fontSize:13.5, color:'var(--navy)', marginBottom:6 }}>📋 How puja booking works</div>
        <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(180px,1fr))', gap:12, fontSize:13, color:'var(--text-mid)' }}>
          {['1. WhatsApp us your name, date of travel & chosen puja','2. We confirm availability with temple pandit','3. Pay advance (50%) to secure your slot','4. Pandit conducts puja in your name on the day','5. Video of puja shared on WhatsApp if requested'].map(s=>(
            <div key={s} style={{ padding:'8px 10px', background:'#fff', borderRadius:8, border:'1px solid hsl(var(--border))' }}>{s}</div>
          ))}
        </div>
      </div>
      {pujas.map(temple => (
        <div key={temple.temple} style={{ marginBottom:32 }}>
          <div style={{ fontFamily:'var(--font-display)', fontSize:'1.3rem', fontWeight:600, color:'var(--navy)', marginBottom:14, paddingBottom:10, borderBottom:'2px solid var(--navy-light)' }}>
            🕌 {temple.temple} — {temple.deity}
          </div>
          <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fill,minmax(min(250px,100%),1fr))', gap:12 }}>
            {temple.pujas.map(puja => (
              <div key={puja.name} style={{ background:'#fff', borderRadius:12, border:`${puja.popular ? '2px solid var(--navy)' : '1px solid hsl(var(--border))'}`, padding:'16px', position:'relative' }}>
                {puja.popular && <div style={{ position:'absolute', top:-1, right:-1, background:'var(--gold)', color:'#fff', fontSize:10, fontWeight:700, padding:'3px 10px', borderRadius:'0 12px 0 8px' }}>POPULAR</div>}
                <div style={{ fontWeight:700, fontSize:14, color:'var(--navy)', marginBottom:4 }}>{puja.name}</div>
                <div style={{ fontWeight:800, fontSize:18, color:'var(--gold)', marginBottom:3 }}>{puja.price}</div>
                <div style={{ fontSize:12, color:'var(--text-muted)', marginBottom:8 }}>⏰ {puja.time}</div>
                <div style={{ fontSize:13, color:'var(--text-mid)', lineHeight:1.6, marginBottom:12 }}>{puja.desc}</div>
                <a href={`https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(`Namaste! I want to book ${puja.name} at ${temple.temple} (${puja.price}). Please confirm availability.`)}`} target="_blank" rel="nofollow noopener noreferrer"
                  style={{ background: puja.popular ? '#25D366' : 'var(--navy-light)', color: puja.popular ? '#fff' : 'var(--navy)', padding:'8px 14px', borderRadius:8, fontWeight:700, fontSize:12.5, textDecoration:'none', display:'block', textAlign:'center' }}>
                  Book {puja.name} →
                </a>
              </div>
            ))}
          </div>
        </div>
      ))}
      <h2 style={h2}>What each ritual actually involves</h2>
      <p style={p}>
        The names on the rate card mean specific things, and the price difference between them is not
        arbitrary. <strong>Abhishek</strong> is a bathing ritual: the deity is anointed with panchamrit — milk,
        curd, honey, ghee and sugar — followed by sacred water. <strong>Maha Abhishek</strong> is the same
        thing performed in the pre-dawn window before the temple opens to general darshan, which is why it is
        the most expensive and the most restricted; at Kedarnath it runs roughly 4am to 6am and the number of
        slots is fixed. <strong>Archana</strong> is a recitation ritual rather than a bathing one — Sahastra
        Naam Archana is the recitation of 1,008 names, offered with tulsi, bael leaves and flowers.{' '}
        <strong>Shringaar</strong> is adornment: the deity is dressed with flowers and jewels, and at
        Kedarnath the evening Shringaar Aarti is the ritual most pilgrims describe afterwards as the one they
        remember.
      </p>
      <p style={p}>
        At Badrinath the vocabulary is Vaishnav rather than Shaiva. <strong>Balabhog</strong> is the morning
        food offering to Lord Badrinarayan, which is why it is the cheapest item on the card at ₹750.{' '}
        <strong>Shodashopachaar</strong> is the full sixteen-step worship — sixteen distinct offerings, from
        the invitation of the deity through to the farewell — and it takes correspondingly longer.
      </p>

      <h2 style={h2}>What the price does and does not cover</h2>
      <p style={p}>
        The figures on this page are the pandit&apos;s dakshina plus the cost of the offering materials. There
        is no temple entry fee at any of the four dhams, and anyone telling you there is at the gate is not
        from the temple. Prasad is included and comes back to you afterwards. What is not included is the
        separate <Link href="/kedarnath-vip-darshan" style={{ color:'var(--teal)' }}>VIP or special darshan</Link>{' '}
        arrangement, which is a different thing entirely — a puja books a ritual in your name, not a place in
        a shorter queue.
      </p>
      <p style={p}>
        Booking a puja through a stranger outside the temple is the single most common way pilgrims lose money
        on this route. The pattern is always the same: cash only, no receipt, no name, and a claim of a special
        connection to the head priest. Our{' '}
        <Link href="/char-dham-yatra-scams" style={{ color:'var(--teal)' }}>guide to Char Dham scams</Link>{' '}
        covers the variants. Whoever you book with, the test is simple — can you find their registered address,
        and will they put the booking in writing before you pay anything.
      </p>

      <h2 style={h2}>Frequently asked questions</h2>
      <FAQAccordion faqs={faqs} />

      <div style={{ margin:'26px 0 24px', borderTop:'1px solid hsl(var(--border))', paddingTop:16, fontSize:12.5, color:'var(--text-muted)', lineHeight:1.8 }}>
        <strong>Rates last verified:</strong> {VERIFIED} · <strong>Season:</strong> 19 April – 13 November 2026.
        Puja rates are set by the temple pandits and can be revised during the season; the figures here are what
        we were quoting as of that date. Pujas cannot be performed at the shrines once the temple doors close
        for winter.
      </div>

      <div style={{ background:'var(--navy-light)', borderRadius:14, padding:'18px 20px', marginBottom:24 }}>
        <div style={{ fontWeight:700, fontSize:13.5, color:'var(--navy)', marginBottom:10 }}>Related:</div>
        <div style={{ display:'flex', flexWrap:'wrap', gap:8 }}>
          {[{l:'Kedarnath Temple Guide',h:'/kedarnath-temple'},{l:'Badrinath VIP Darshan',h:'/badrinath-vip-darshan'},{l:'Badrinath Temple Guide',h:'/badrinath-temple'},{l:'Char Dham Package',h:'/char-dham-yatra'},{l:'Kedarnath Yatra',h:'/kedarnath-yatra'}].map(l=>(
            <Link key={l.h} href={l.h} style={{ background:'#fff', color:'var(--navy)', padding:'7px 14px', borderRadius:8, fontSize:12.5, fontWeight:600, textDecoration:'none', border:'1px solid hsl(var(--border))' }}>{l.l} →</Link>
          ))}
        </div>
      </div>
    </div>
  </>);
}
