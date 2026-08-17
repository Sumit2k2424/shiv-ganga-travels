import Link from 'next/link';
import { SITE } from '@/data/packages';
import PeopleAlsoAsk from '@/components/PeopleAlsoAsk';
import AnswerBox from '@/components/AnswerBox';
import ExpertNote from '@/components/ExpertNote';
import { h2, p } from '@/lib/prose';

export const metadata = {
  title: { absolute: `Ek Dham Yatra ${SITE.season} | From ₹4,250 | Pick One Dham` },
  description: `Ek Dham Yatra ${SITE.season} — one dham from Haridwar, 2N/3D from ₹4,250. Which of the four to pick, honestly, and what each one actually asks of you.`,
  keywords: ['ek dham yatra','ek dham yatra package','one dham yatra',`ek dham yatra ${SITE.season}`,'single dham package','kedarnath ek dham','badrinath ek dham','ek dham yatra from haridwar','ek dham yatra cost'],
  alternates: { canonical: `${SITE.baseUrl}/ek-dham-yatra` },
  openGraph: {
    title: `Ek Dham Yatra ${SITE.season} — One Dham, From ₹4,250`,
    description: 'One dham from Haridwar in 2N/3D. All four compared honestly — trek, altitude, drive and cost — so you pick the right one.',
    url: `${SITE.baseUrl}/ek-dham-yatra`, type: 'website',
    images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: `Ek Dham Yatra ${SITE.season} — single dham package from Haridwar` }],
  },
  twitter: {
    card: 'summary_large_image',
    title: `Ek Dham Yatra ${SITE.season} — One Dham, From ₹4,250`,
    description: 'One dham from Haridwar, 2N/3D from ₹4,250. All four compared honestly.',
    images: [{ url: '/opengraph-image', alt: `Ek Dham Yatra ${SITE.season}` }],
  },
};

/* Prices and durations come straight from the package data — these are the
   real single-dham packages, not derived figures. */
const DHAMS = [
  {
    name: 'Kedarnath', href: '/kedarnath-yatra', pkg: '/kedarnath-tour-package',
    dur: '3N/4D', price: '₹5,250', alt: '3,583 m', deity: 'Shiva (Jyotirlinga)',
    effort: 'Hard', trek: '16 km from Gaurikund',
    who: 'Shaiva devotees, and anyone for whom the climb is the point',
    note: 'The one most people mean when they say "one dham". It is also by some distance the hardest — 16 km and roughly 1,600 m of ascent, or a pony, palki or helicopter if you cannot walk it. Budget four days rather than three; it is the only single dham that genuinely needs the extra one.',
  },
  {
    name: 'Badrinath', href: '/badrinath-yatra', pkg: '/badrinath-tour-package',
    dur: '2N/3D', price: '₹4,500', alt: '3,133 m', deity: 'Vishnu',
    effort: 'Easy', trek: 'None — road to the steps',
    who: 'Seniors, families, anyone who cannot trek',
    note: 'The most accessible of the four. You drive to within a few hundred metres of the temple, and Tapt Kund, Mana village and Bhim Pul are all within walking distance. If someone in the group cannot manage a climb, this is the dham to choose and it is not a compromise.',
  },
  {
    name: 'Yamunotri', href: '/yamunotri-yatra', pkg: null,
    dur: '2N/3D', price: '₹4,500', alt: '3,293 m', deity: 'Yamuna',
    effort: 'Moderate', trek: '5–6 km from Janki Chatti',
    who: 'First-timers wanting a real trek without the Kedarnath commitment',
    note: 'The gentler trek — five or six kilometres on a steady gradient, two to three hours up, with ponies and palkis available the whole way. Surya Kund at the top is the hot spring where people cook rice as prasad. Base is Barkot, night one of every Char Dham itinerary.',
  },
  {
    name: 'Gangotri', href: '/gangotri-yatra', pkg: null,
    dur: '2N/3D', price: '₹4,250', alt: '3,415 m', deity: 'Ganga',
    effort: 'Easy', trek: 'None — road to the temple',
    who: 'Anyone who wants the best drive and the least effort',
    note: 'The cheapest and, to our mind, the most beautiful. Road access right to the temple, which sits on the Bhagirathi with Sudarshan peak behind it. The drive up through the Bhagirathi gorge and Harsil is the finest stretch of road in Garhwal. Highest of the four, but you drive to it.',
  },
];

const FAQS = [
  {
    q: 'What is Ek Dham Yatra?',
    a: 'Visiting one of the four Uttarakhand dhams rather than all of them. Ek means one. You choose a single shrine — Kedarnath, Badrinath, Gangotri or Yamunotri — and travel to it and back, usually in two or three nights from Haridwar. It is what most people actually do the first time, whatever the brochures imply.',
  },
  {
    q: 'Which dham should I choose for Ek Dham Yatra?',
    a: 'Start from what your body can do, not from the deity. If nobody in the group can trek, choose Badrinath or Gangotri — both have road access to the temple. If you want a trek but not a punishing one, Yamunotri. If the 16 km climb to Kedarnath is the reason you are going, choose Kedarnath and give it four days rather than three.',
  },
  {
    q: 'How much does an Ek Dham Yatra cost?',
    a: 'From ₹4,250 per person for Gangotri on a 2N/3D package ex-Haridwar. Yamunotri and Badrinath are ₹4,500, and Kedarnath is ₹5,250 for 3N/4D because it needs the extra day. All rates are all-inclusive — vehicle, hotels on twin sharing, breakfast and dinner, driver, tolls and registration.',
  },
  {
    q: 'How many days does one dham take?',
    a: 'Two nights and three days for Badrinath, Gangotri or Yamunotri from Haridwar. Kedarnath needs three nights and four days because of the trek. Anything shorter than that means driving eight hours, touching the temple and driving back, which is not a yatra so much as an endurance test.',
  },
  {
    q: 'Which is the easiest dham to visit?',
    a: 'Badrinath. The road runs to within a few hundred metres of the temple, the town has the widest choice of rooms of any dham, and Tapt Kund and Mana village are both a short walk. Gangotri is a close second — also road-accessible, though the drive is longer.',
  },
  {
    q: 'Which is the hardest dham?',
    a: 'Kedarnath, and not by a small margin. Sixteen kilometres from Gaurikund with about 1,600 m of ascent, and no road. Ponies, palkis and helicopters from Phata or Sersi all exist, but every one of them costs extra and needs booking ahead.',
  },
  {
    q: 'Is Ek Dham worth it, or should I do Char Dham?',
    a: 'If you have ten days and reasonable fitness, do the full circuit — the marginal cost per extra dham is small once you are already on the road. Ek Dham makes sense when you have three or four days, when you are testing whether you can manage the altitude, or when you have a specific shrine you want to sit at rather than tick off.',
  },
  {
    q: 'Can I visit one dham by helicopter?',
    a: 'For Kedarnath, yes — shuttles run from Phata, Sersi and Guptkashi and turn the trek into a nine-minute flight each way. For the other three there is no comparable single-dham helicopter service; Badrinath and Gangotri have road access anyway, and Yamunotri has no helipad near the temple.',
  },
  {
    q: 'Is registration needed for a single dham?',
    a: 'Yes. Uttarakhand government registration is required for every dham you enter, regardless of how many you visit, and it is checked at police barriers on the way up. It is free on the state portal and we complete it for everyone travelling with us.',
  },
  {
    q: 'When can I do an Ek Dham Yatra?',
    a: 'Between the opening and closing dates, roughly 19 April to mid-November 2026. Gangotri and Yamunotri open on Akshaya Tritiya, Kedarnath and Badrinath a few days later. Outside that window the deities move to their winter seats and you can visit those instead — Ukhimath for Kedarnath, Joshimath for Badrinath.',
  },
];

const PAA = [
  { q: 'Which dham is opened first?', a: 'Gangotri and Yamunotri, both on Akshaya Tritiya — 19 April in 2026. Kedarnath follows on 22 April and Badrinath on 23 April. Closing runs in reverse order around Bhai Dooj in November.' },
  { q: 'Can I do two dhams instead of one?', a: 'Yes — that is Do Dham, usually Kedarnath and Badrinath, at 5N/6D. It is the natural step up from Ek Dham and adds roughly two days and one shrine.' },
  { q: 'Is one dham enough spiritually?', a: 'There is no scriptural rule that four counts and one does not. The circuit is a route, not a requirement. People who sit properly at one shrine often describe it as more meaningful than four visited at speed, and we would rather send you to one dham well than four badly.' },
  { q: 'Which dham is best for elderly parents?', a: 'Badrinath, comfortably. Road access to the temple, the lowest altitude of the four, the widest choice of rooms, and Tapt Kund right below the steps. Gangotri works too but the drive is longer and higher.' },
  { q: 'Can I add Haridwar and Rishikesh sightseeing to a single dham trip?', a: 'Easily, and it is the most common add-on. Har Ki Pauri, Mansa Devi and Chandi Devi at Haridwar, or Triveni Ghat and Neelkanth Mahadev at Rishikesh, fit either side of a 2N/3D dham trip without adding a full day.' },
];

function Schema() {
  const faq = {
    '@context': 'https://schema.org', '@type': 'FAQPage',
    mainEntity: FAQS.map(f => ({ '@type': 'Question', name: f.q, answerCount: 1, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
  };
  const bc = {
    '@context': 'https://schema.org', '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: SITE.baseUrl },
      { '@type': 'ListItem', position: 2, name: 'Char Dham Yatra', item: `${SITE.baseUrl}/char-dham-yatra` },
      { '@type': 'ListItem', position: 3, name: 'Ek Dham Yatra', item: `${SITE.baseUrl}/ek-dham-yatra` },
    ],
  };
  const trip = {
    '@context': 'https://schema.org', '@type': 'TouristTrip',
    name: `Ek Dham Yatra ${SITE.season} — single dham packages from Haridwar`,
    description: `Single-dham packages to Kedarnath, Badrinath, Gangotri or Yamunotri from Haridwar, 2N/3D to 3N/4D, from ₹4,250 per person all-inclusive. Direct operator since ${SITE.established}.`,
    url: `${SITE.baseUrl}/ek-dham-yatra`,
    image: [`${SITE.baseUrl}/opengraph-image`],
    touristType: ['Pilgrims', 'Families', 'Senior citizens', 'First-time visitors'],
    datePublished: SITE.lastUpdatedISO,
    dateModified: SITE.lastUpdatedISO,
    author: { '@type': 'Person', '@id': `${SITE.baseUrl}/#founder`, name: 'Dhanesh Chandra Mishra' },
    provider: {
      '@type': 'TravelAgency', '@id': `${SITE.baseUrl}/#organization`,
      name: SITE.name, telephone: SITE.phone, url: SITE.baseUrl,
    },
    offers: [
      { '@type': 'Offer', name: 'Gangotri Ek Dham 2N/3D', price: '4250', priceCurrency: 'INR', availability: 'https://schema.org/InStock', url: `${SITE.baseUrl}/gangotri-yatra` },
      { '@type': 'Offer', name: 'Yamunotri Ek Dham 2N/3D', price: '4500', priceCurrency: 'INR', availability: 'https://schema.org/InStock', url: `${SITE.baseUrl}/yamunotri-yatra` },
      { '@type': 'Offer', name: 'Badrinath Ek Dham 2N/3D', price: '4500', priceCurrency: 'INR', availability: 'https://schema.org/InStock', url: `${SITE.baseUrl}/badrinath-yatra` },
      { '@type': 'Offer', name: 'Kedarnath Ek Dham 3N/4D', price: '5250', priceCurrency: 'INR', availability: 'https://schema.org/InStock', url: `${SITE.baseUrl}/kedarnath-yatra` },
    ],
  };
  return (<>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faq) }} />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(bc) }} />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(trip) }} />
  </>);
}

const TH = { padding: '10px 12px', textAlign: 'left', color: '#fff', fontWeight: 700, fontSize: 12 };
const TD = { padding: '10px 12px', color: '#475569', fontSize: 13 };
const SCROLL = { overflowX: 'auto', marginBottom: 24 };
const TABLE = { width: '100%', borderCollapse: 'collapse', fontSize: 13.5, minWidth: 640 };

export default function EkDhamYatra() {
  const waText = encodeURIComponent('Namaste! I want an Ek Dham Yatra 2026. Please help me pick the right dham and share details.');

  return (
    <>
      <Schema />

      <section style={{ background: 'linear-gradient(145deg,var(--navy) 0%,#1A3E75 60%,var(--teal) 100%)', padding: '52px 20px 40px', textAlign: 'center' }}>
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          <span style={{ background: 'rgba(232,146,10,0.18)', color: '#FFD166', fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', padding: '5px 16px', borderRadius: 100, display: 'inline-block', marginBottom: 14 }}>
            One dham · 2N/3D · Ex-Haridwar
          </span>
          <h1 style={{ color: '#fff', fontFamily: 'var(--font-display)', fontSize: 'clamp(1.7rem,4vw,2.6rem)', fontWeight: 700, letterSpacing: '-0.02em', marginBottom: 14 }}>
            Ek Dham Yatra {SITE.season} — Which One Should You Pick?
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: 15, lineHeight: 1.7, maxWidth: 680, margin: '0 auto 20px' }}>
            One dham from Haridwar · <strong style={{ color: '#FFD166' }}>from ₹4,250/person</strong> · all four compared honestly · zero commission
          </p>
          <div style={{ display: 'flex', gap: 8, justifyContent: 'center', flexWrap: 'wrap', marginBottom: 22 }}>
            {['🕉️ Any one of the four', '🚗 2 of 4 need no trek', '🎖️ 15 yrs · 50k pilgrims', '⭐ 4.7/5 · 54 reviews'].map(t => (
              <span key={t} style={{ background: 'rgba(255,255,255,0.12)', color: '#fff', fontSize: 12.5, fontWeight: 600, padding: '6px 14px', borderRadius: 100, border: '1px solid rgba(255,255,255,0.2)' }}>{t}</span>
            ))}
          </div>
          <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href={`https://wa.me/${SITE.whatsapp}?text=${waText}`} target="_blank" rel="nofollow noopener noreferrer"
              style={{ background: '#25D366', color: '#fff', padding: '13px 28px', borderRadius: 10, fontWeight: 700, fontSize: 14, textDecoration: 'none' }}>💬 Book Now</a>
            <a href={`tel:${SITE.phone}`} style={{ background: 'rgba(255,255,255,0.12)', color: '#fff', padding: '13px 24px', borderRadius: 10, fontWeight: 700, fontSize: 14, textDecoration: 'none', border: '1px solid rgba(255,255,255,0.2)' }}>📞 {SITE.phone}</a>
          </div>
        </div>
      </section>

      <nav aria-label="Breadcrumb" style={{ background: 'var(--bg)', borderBottom: '1px solid hsl(var(--border))', padding: '9px 20px' }}>
        <div style={{ maxWidth: 'var(--container)', margin: '0 auto', fontSize: 12, color: 'var(--text-muted)', display: 'flex', gap: 6, flexWrap: 'wrap' }}>
          <Link href="/" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>Home</Link><span>›</span>
          <Link href="/char-dham-yatra" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>Char Dham Yatra</Link><span>›</span>
          <span>Ek Dham Yatra</span>
        </div>
      </nav>

      <article style={{ maxWidth: 900, margin: '0 auto', padding: '40px 20px 60px' }}>
        <div style={{ fontSize: 12, color: 'var(--text-muted)', marginBottom: 20, textAlign: 'right' }}>
          🗓️ <strong>Last updated:</strong> {SITE.lastUpdated}
        </div>

        <div style={{ background: 'var(--navy)', borderRadius: 14, padding: '18px 20px', marginBottom: 28, display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(140px,1fr))', gap: 10 }}>
          {[['Duration', '2N/3D – 3N/4D'], ['Dhams', 'Any 1 of 4'], ['From', '₹4,250/person'], ['No-trek options', 'Badrinath, Gangotri'], ['Start', 'Haridwar'], ['Season', 'Apr 19 – Nov 2026']].map(([k, v]) => (
            <div key={k}>
              <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.55)', marginBottom: 2 }}>{k}</div>
              <div style={{ fontWeight: 700, fontSize: 13.5, color: '#FFD166' }}>{v}</div>
            </div>
          ))}
        </div>

        <p style={p}>
          <strong>Ek Dham Yatra is one dham instead of four</strong>, and it is what most people genuinely do the first time regardless of what they set out planning. Packages run 2N/3D from Haridwar and start at ₹4,250. The only decision that matters is <em>which</em> one — and it should be made from what your body can do, not from which deity sounds most important. That is what this page is for.
        </p>

        <h2 style={h2}>What Is Ek Dham Yatra?</h2>
        <AnswerBox>
          Ek Dham Yatra means visiting one of Uttarakhand&rsquo;s four dhams &mdash; Kedarnath, Badrinath,
          Gangotri or Yamunotri &mdash; rather than the full circuit. Packages run 2 nights/3 days from
          Haridwar, or 3N/4D for Kedarnath, starting at ₹4,250 per person all-inclusive.
        </AnswerBox>
        <p style={p}>
          The counting is simple: <strong>Ek Dham</strong> is one, <Link href="/do-dham-yatra">Do Dham</Link> is two, <Link href="/teen-dham-yatra">Teen Dham</Link> is three, <Link href="/char-dham-yatra">Char Dham</Link> is all four. What is not simple, and what nobody explains, is that the four dhams are wildly different trips. Two of them you drive to. One needs a gentle walk. One needs a sixteen-kilometre climb. Picking on vibes rather than on that difference is how people end up not reaching the temple at all.
        </p>

        <h2 style={h2}>The Four, Compared Honestly</h2>
        <div style={SCROLL}>
          <table style={TABLE}>
            <thead><tr style={{ background: 'var(--navy)' }}>
              {['Dham', 'Deity', 'Duration', 'From', 'Altitude', 'Trek', 'Effort'].map(x => <th key={x} style={TH}>{x}</th>)}
            </tr></thead>
            <tbody>
              {DHAMS.map((d, i) => (
                <tr key={d.name} style={{ borderBottom: '1px solid hsl(var(--border))', background: i % 2 === 0 ? '#fff' : 'var(--bg)' }}>
                  <td style={{ ...TD, fontWeight: 700, color: 'var(--navy)' }}>
                    <Link href={d.href} style={{ color: 'var(--teal)' }}>{d.name}</Link>
                  </td>
                  <td style={TD}>{d.deity}</td>
                  <td style={TD}>{d.dur}</td>
                  <td style={{ ...TD, fontWeight: 800, color: '#1D9E75', fontSize: 15 }}>{d.price}</td>
                  <td style={TD}>{d.alt}</td>
                  <td style={{ ...TD, color: '#64748b' }}>{d.trek}</td>
                  <td style={{ ...TD, fontWeight: 700, color: d.effort === 'Hard' ? '#B4453A' : d.effort === 'Moderate' ? '#93701C' : '#1D9E75' }}>{d.effort}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p style={{ fontSize: 12.5, color: 'var(--text-muted)', marginBottom: 28 }}>
          All rates per person, all-inclusive, ex-Haridwar: AC vehicle, hotels on twin sharing, breakfast and dinner, driver allowance, tolls, parking and government registration. Ponies, palkis and helicopters are extra.
        </p>

        <h2 style={h2}>Which One Should You Pick?</h2>
        <p style={p}>
          Run through these in order and you will have your answer in about a minute.
        </p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginBottom: 24 }}>
          {[
            { q: 'Can everyone in the group walk 16 km uphill?', a: 'If no — rule out Kedarnath unless you are willing to pay for ponies, a palki or the helicopter. That is not a judgement, it is arithmetic: 1,600 m of ascent in a day is a serious undertaking and altitude affects fit people too.', color: '#B4453A' },
            { q: 'Do you want any trek at all?', a: 'If no — Badrinath or Gangotri. Both have road access right up to the temple, and neither is a lesser pilgrimage for it. If yes but nothing punishing — Yamunotri, at 5–6 km on a steady gradient with ponies available throughout.', color: '#1D9E75' },
            { q: 'How many days do you actually have?', a: 'Three days works for Badrinath, Gangotri or Yamunotri. Kedarnath needs four. Trying to compress Kedarnath into three means trekking down in the dark, and we will not book it that way.', color: 'var(--navy)' },
            { q: 'Is there a specific deity you are going for?', a: 'Then go to that one. Everything above is about feasibility, and feasibility only decides the question when you have no strong preference. If you have waited years to stand in front of Kedarnath, take the helicopter and go to Kedarnath.', color: '#8B5CF6' },
          ].map(x => (
            <div key={x.q} style={{ background: '#fff', borderRadius: 10, padding: '14px 16px', border: '1px solid hsl(var(--border))', borderLeft: `4px solid ${x.color}` }}>
              <div style={{ fontWeight: 700, fontSize: 13.5, color: x.color, marginBottom: 6 }}>{x.q}</div>
              <div style={{ fontSize: 13.5, color: '#475569', lineHeight: 1.75 }}>{x.a}</div>
            </div>
          ))}
        </div>

        <ExpertNote variant="insider">
          The dham people ask for and the dham that suits them are frequently not the same, and it is worth being blunt about it. Kedarnath is what everyone names first &mdash; it has the reputation, the photographs, the 2013 story. It is also the only one of the four that turns people back. Every season we watch families book Kedarnath, discover on the trail that a parent cannot manage it, and end up sitting at Gaurikund while the rest of the group goes up. Gangotri, at ₹4,250 with the temple beside the road and the best drive in Garhwal, would have given all of them the darshan they came for.
        </ExpertNote>

        <h2 style={h2}>The Four in Detail</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginBottom: 28 }}>
          {DHAMS.map(d => (
            <div key={d.name} style={{ background: '#fff', borderRadius: 10, padding: '15px 17px', border: '1px solid hsl(var(--border))', borderLeft: '4px solid var(--teal)' }}>
              <div style={{ display: 'flex', gap: 10, alignItems: 'center', marginBottom: 8, flexWrap: 'wrap' }}>
                <strong style={{ fontSize: 15, color: 'var(--navy)' }}>{d.name}</strong>
                <span style={{ background: 'var(--bg)', border: '1px solid hsl(var(--border))', fontSize: 11.5, fontWeight: 700, color: '#1D9E75', padding: '2px 9px', borderRadius: 20 }}>{d.price} · {d.dur}</span>
                <span style={{ fontSize: 12, color: 'var(--text-muted)' }}>{d.alt} · {d.trek}</span>
              </div>
              <p style={{ fontSize: 13.5, color: '#475569', lineHeight: 1.75, margin: '0 0 8px' }}>{d.note}</p>
              <div style={{ fontSize: 12.5, color: '#64748b', marginBottom: 8 }}><strong>Best for:</strong> {d.who}</div>
              <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                <Link href={d.href} style={{ fontSize: 12.5, fontWeight: 600, color: 'var(--teal)', textDecoration: 'none' }}>{d.name} yatra guide →</Link>
                {d.pkg && <Link href={d.pkg} style={{ fontSize: 12.5, fontWeight: 600, color: 'var(--teal)', textDecoration: 'none' }}>Package details →</Link>}
              </div>
            </div>
          ))}
        </div>

        <div style={{ background: 'rgba(29,158,117,0.07)', border: '1px solid #1D9E75', borderRadius: 12, padding: '16px 18px', marginBottom: 28, display: 'flex', gap: 14, alignItems: 'center', flexWrap: 'wrap', justifyContent: 'space-between' }}>
          <div>
            <div style={{ fontWeight: 700, fontSize: 14, color: 'var(--navy)', marginBottom: 3 }}>Still not sure which one?</div>
            <div style={{ fontSize: 13, color: '#475569' }}>Tell us the ages, the fitness and how many days you have. We will tell you which dham to pick — and say so if it should not be Kedarnath.</div>
          </div>
          <a href={`https://wa.me/${SITE.whatsapp}?text=${waText}`} target="_blank" rel="nofollow noopener noreferrer"
            style={{ background: '#25D366', color: '#fff', padding: '11px 22px', borderRadius: 9, fontWeight: 700, fontSize: 13.5, textDecoration: 'none', whiteSpace: 'nowrap' }}>💬 Ask us</a>
        </div>

        <h2 style={h2}>Ek Dham vs Do, Teen and Char Dham</h2>
        <div style={SCROLL}>
          <table style={{ ...TABLE, minWidth: 560 }}>
            <thead><tr style={{ background: 'var(--navy)' }}>
              {['Yatra', 'Dhams', 'Duration', 'From', 'Choose it when'].map(x => <th key={x} style={TH}>{x}</th>)}
            </tr></thead>
            <tbody>
              {[
                ['Ek Dham', 'Any 1', '2N/3D – 3N/4D', '₹4,250', 'You have 3–4 days, or one shrine you care about', '/ek-dham-yatra'],
                ['Do Dham', 'Kedarnath + Badrinath', '5N/6D', '₹8,200', 'You have under a week and can walk', '/do-dham-yatra'],
                ['Teen Dham', 'Any 3', '7N/8D', '₹11,600', 'You have 8 days, or need to skip a trek', '/teen-dham-yatra'],
                ['Char Dham', 'All 4', '9N/10D', '₹13,900', 'You have 10 days and want the full circuit', '/char-dham-yatra'],
              ].map((r, i) => (
                <tr key={r[0]} style={{ borderBottom: '1px solid hsl(var(--border))', background: i === 0 ? '#F0FDF4' : (i % 2 === 0 ? '#fff' : 'var(--bg)') }}>
                  <td style={{ ...TD, fontWeight: i === 0 ? 800 : 600, color: 'var(--navy)' }}>
                    {i === 0 ? r[0] : <Link href={r[5]} style={{ color: 'var(--teal)' }}>{r[0]}</Link>}
                  </td>
                  <td style={TD}>{r[1]}</td>
                  <td style={TD}>{r[2]}</td>
                  <td style={{ ...TD, fontWeight: 800, color: '#1D9E75', fontSize: 15 }}>{r[3]}</td>
                  <td style={{ ...TD, color: '#64748b' }}>{r[4]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p style={p}>
          Look at the price column and the logic of the whole circuit becomes obvious: the gap between one dham and four is about ₹9,650, which is a lot in percentage terms and not much per shrine. The fixed costs &mdash; vehicle, driver, permits &mdash; barely move. What you are really buying with each step up is <strong>days</strong>. If you have the days, go further. If you do not, one dham done unhurried beats four done at a sprint.
        </p>

        <h2 style={h2}>Season and Registration</h2>
        <p style={p}>
          The dhams open around <strong>19 April 2026</strong> &mdash; Gangotri and Yamunotri on Akshaya Tritiya, Kedarnath on 22 April, Badrinath on 23 April &mdash; and close around Bhai Dooj in mid-November. Registration is compulsory for every dham you enter, free on the state portal at{' '}
          <a href="https://registrationandtouristcare.uk.gov.in/" target="_blank" rel="noopener noreferrer">registrationandtouristcare.uk.gov.in</a>, and checked at police barriers on the way up. We complete it for everyone booked with us.
        </p>
        <p style={p}>
          Outside the season the deities move down to their winter seats and you can visit those instead &mdash; <Link href="/ukhimath">Ukhimath</Link> for Kedarnath, <Link href="/joshimath-narsingh-temple">Joshimath</Link> for Badrinath &mdash; on roads that stay open. See <Link href="/winter-char-dham-yatra">Winter Char Dham</Link> for how that works.
        </p>

        <h2 style={h2}>Frequently Asked Questions</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8, marginBottom: 28 }}>
          {FAQS.map(f => (
            <details key={f.q} style={{ background: '#fff', border: '1px solid hsl(var(--border))', borderRadius: 10, padding: '12px 16px' }}>
              <summary style={{ fontWeight: 700, fontSize: 14, color: 'var(--navy)', cursor: 'pointer', lineHeight: 1.5 }}>{f.q}</summary>
              <p style={{ fontSize: 13.5, color: '#475569', lineHeight: 1.8, margin: '10px 0 0' }}>{f.a}</p>
            </details>
          ))}
        </div>

        <div style={{ background: 'var(--bg)', border: '1px solid hsl(var(--border))', borderRadius: 12, padding: '18px 20px', marginBottom: 32, display: 'flex', gap: 16, alignItems: 'flex-start', flexWrap: 'wrap' }}>
          <div style={{ width: 52, height: 52, borderRadius: '50%', background: 'var(--navy)', color: '#FFD166', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, fontSize: 17, flexShrink: 0 }}>DM</div>
          <div style={{ flex: '1 1 240px' }}>
            <div style={{ fontWeight: 700, fontSize: 14.5, color: 'var(--navy)' }}>Dhanesh Chandra Mishra</div>
            <div style={{ fontSize: 12.5, color: 'var(--teal)', fontWeight: 600, marginBottom: 8 }}>Founder &amp; Director, {SITE.name}</div>
            <p style={{ fontSize: 13, color: '#475569', lineHeight: 1.75, margin: 0 }}>
              Retired Indian Army officer, founded {SITE.name} in {SITE.established}. Fifteen seasons of talking people out of the wrong dham, which is most of what this page is. <Link href="/about">More about the team</Link>.
            </p>
          </div>
        </div>

        <div style={{ background: 'var(--navy)', borderRadius: 16, padding: '28px 24px', textAlign: 'center', marginTop: 32 }}>
          <h3 style={{ color: '#fff', fontFamily: 'var(--font-display)', fontSize: '1.3rem', marginBottom: 8 }}>Book Ek Dham Yatra {SITE.season} — from ₹4,250/person</h3>
          <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: 13.5, marginBottom: 18 }}>Free itinerary in 2 hours · Zero commission · Registration handled · Direct operator since {SITE.established}</p>
          <div style={{ display: 'flex', gap: 10, justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href={`https://wa.me/${SITE.whatsapp}?text=${waText}`} target="_blank" rel="nofollow noopener noreferrer"
              style={{ background: '#25D366', color: '#fff', padding: '12px 24px', borderRadius: 9, fontWeight: 700, fontSize: 13.5, textDecoration: 'none' }}>💬 Book on WhatsApp</a>
            <a href={`tel:${SITE.phone}`} style={{ background: 'rgba(255,255,255,0.12)', color: '#fff', padding: '12px 24px', borderRadius: 9, fontWeight: 700, fontSize: 13.5, textDecoration: 'none', border: '1px solid rgba(255,255,255,0.2)' }}>📞 {SITE.phone}</a>
          </div>
        </div>

        <div style={{ borderTop: '1px solid hsl(var(--border))', paddingTop: 24, marginTop: 32 }}>
          <div style={{ fontWeight: 700, fontSize: 13.5, color: 'var(--navy)', marginBottom: 12 }}>Related</div>
          <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
            {[['Kedarnath Yatra', '/kedarnath-yatra'], ['Badrinath Yatra', '/badrinath-yatra'], ['Gangotri Yatra', '/gangotri-yatra'], ['Yamunotri Yatra', '/yamunotri-yatra'], ['Do Dham Yatra', '/do-dham-yatra'], ['Teen Dham Yatra', '/teen-dham-yatra'], ['Char Dham Yatra', '/char-dham-yatra'], ['All Packages', '/packages'], ['Cost Calculator', '/char-dham-yatra-cost-calculator'], ['Opening Dates 2026', '/blog/char-dham-yatra-opening-dates-2026'], ['Registration Guide', '/blog/char-dham-yatra-registration'], ['Senior Citizens', '/blog/senior-citizen-char-dham'], ['Kedarnath Helicopter', '/blog/kedarnath-helicopter-booking'], ['Barkot', '/barkot'], ['Gaurikund', '/gaurikund'], ['Winter Char Dham', '/winter-char-dham-yatra']].map(([l, href]) => (
              <Link key={href} href={href} style={{ background: 'var(--bg)', border: '1px solid hsl(var(--border))', color: 'var(--navy)', padding: '7px 14px', borderRadius: 8, fontSize: 12.5, fontWeight: 600, textDecoration: 'none' }}>{l} →</Link>
            ))}
          </div>
        </div>

        <div style={{ marginTop: 36 }}>
          <PeopleAlsoAsk items={PAA} />
        </div>
      </article>
    </>
  );
}
