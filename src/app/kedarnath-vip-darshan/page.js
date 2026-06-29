import Link from 'next/link';
import { SITE } from '@/data/packages';
import PeopleAlsoAsk from '@/components/PeopleAlsoAsk';
import AnswerBox from '@/components/AnswerBox';
import BlogAuthor from '@/components/BlogAuthor';
import KedarnathPujaPicker from '@/components/KedarnathPujaPicker';

export const metadata = {
  title: 'Kedarnath VIP Darshan 2026 — Price, Booking & Sparsh Darshan',
  description: 'Kedarnath VIP darshan 2026: no flat pass — priority sanctum access is bundled with BKTC pujas (₹300–₹28,600). Online booking steps, sparsh darshan, helicopter combo, Badrinath rates and the tout scam to avoid.',
  keywords: ['kedarnath vip darshan 2026','kedarnath vip darshan booking','kedarnath vip darshan ticket price','kedarnath vip darshan online booking','kedarnath puja booking','kedarnath rudrabhishek price','kedarnath special darshan','kedarnath sparsh darshan','kedarnath mahabhishek booking','bktc puja booking','kedarnath vip darshan cost','kedarnath darshan timing 2026','badrinath vip darshan price'],
  alternates: { canonical: `${SITE.baseUrl}/kedarnath-vip-darshan` },
  openGraph: {
    title: 'Kedarnath VIP Darshan 2026 — Price, Online Booking & Sparsh Darshan',
    description: 'No flat VIP pass exists. Priority Garbha Griha access comes with BKTC pujas (₹300–₹28,600). Full 2026 price table, booking steps, helicopter combo & fraud warning.',
    url: `${SITE.baseUrl}/kedarnath-vip-darshan`,
    type: 'article',
    images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: 'Kedarnath VIP Darshan 2026 — Price, Booking & Sparsh Darshan | Shiv Ganga Travels' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kedarnath VIP Darshan 2026 — Price, Booking & Sparsh Darshan',
    description: 'No flat pass — priority sanctum access is bundled with BKTC pujas (₹300–₹28,600). Booking steps, sparsh darshan, helicopter combo, fraud warning.',
    images: [{ url: '/opengraph-image', alt: 'Kedarnath VIP Darshan 2026 | Shiv Ganga Travels' }],
  },
};

const UPDATED = 'June 2026';

function Schema() {
  const faq = {
    '@context': 'https://schema.org', '@type': 'FAQPage',
    mainEntity: [
      { '@type': 'Question', name: 'What is the Kedarnath VIP darshan price in 2026?', acceptedAnswer: { '@type': 'Answer', text: 'There is no single fixed VIP ticket at Kedarnath. Priority sanctum access is bundled with a paid puja booked through the BKTC temple committee. The committee-set minimum for special darshan is ₹300 per person; the commonly bought option is the ₹1,100 special darshan parchi. Bigger pujas cost more — Rudrabhishek around ₹1,700, evening Sampoorna Aarti around ₹3,100 per person, Shodashopachar from ₹7,500, Maha Abhishek ₹5,500+, and the full-day puja up to ₹28,600 for a group of five. Confirm the live rate on badrinath-kedarnath.gov.in before paying anyone.' } },
      { '@type': 'Question', name: 'Is general darshan at Kedarnath free?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. General darshan at Kedarnath is completely free — no entry ticket, no darshan fee, no queue-token cost. You complete the free yatra registration, join the general queue, and enter when your turn comes. What costs money are optional puja bookings (Rudrabhishek, Maha Abhishek, Shodashopachar, aarti) that buy priority entry and inner-sanctum time. VIP darshan is an enhancement, not a requirement.' } },
      { '@type': 'Question', name: 'How do I book Kedarnath VIP darshan online?', acceptedAnswer: { '@type': 'Answer', text: 'Go to badrinath-kedarnath.gov.in, log in or sign up with your mobile number, click Book Puja Online and select Kedarnath Dham, accept the terms, choose your puja and add it to the cart, enter the participants details (name and gotra), confirm the amount, pay online, and download the receipt. Carry a printed receipt and a government photo ID to the puja counter. All bookings are non-refundable and non-transferable.' } },
      { '@type': 'Question', name: 'What is sparsh darshan at Kedarnath?', acceptedAnswer: { '@type': 'Answer', text: 'Sparsh darshan means physically touching the Shivling inside the Garbha Griha (inner sanctum), as opposed to viewing it from the outer hall. At Kedarnath the Shivling is a natural trapezoidal rock, not a carved idol, which makes the contact especially meaningful. Sparsh darshan is available only to puja/VIP holders and only before 3:00 PM. There is no separate sparsh ticket — it comes with any special-darshan puja booking.' } },
      { '@type': 'Question', name: 'Can Kedarnath VIP darshan be suspended?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. BKTC can suspend or pause VIP darshan and pujas during extremely heavy rush, major festivals, or bad weather to manage crowd flow, and during a solar or lunar eclipse the temple closes and booked pujas are rescheduled. VIP darshan is never fully guaranteed in peak May–June. This is why advance booking on the official portal, plus a flexible plan, is the safest approach.' } },
      { '@type': 'Question', name: 'Is the Kedarnath VIP darshan tout scam real?', acceptedAnswer: { '@type': 'Answer', text: 'Yes, and it catches first-timers every season. Touts, some posing as priests or agents, sell fake VIP darshan or Garbha Griha entry for ₹2,000–5,000 in cash near the temple. There is no loose VIP pass — access only comes with an official BKTC puja receipt. Anything sold outside that counter is fraud, and accepting a backdoor entry can get you removed and your yatra registration flagged. Pay only on badrinath-kedarnath.gov.in or at the official BKTC counter.' } },
      { '@type': 'Question', name: 'What is the Badrinath VIP darshan price in 2026?', acceptedAnswer: { '@type': 'Answer', text: 'Badrinath works the same way — same committee, same portal, puja-linked priority. Basic special darshan starts at ₹300 per person. Puja-based access ranges from about ₹151 for the Kapoor Aarti up to ₹5,500 for the pre-dawn Maha Abhishek, the most-booked VIP option. BKTC raised special-puja charges by roughly 10–20% for the 2026 season, so older price lists are out of date. Book only on badrinath-kedarnath.gov.in.' } },
    ],
  };
  const bc = { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: SITE.baseUrl },
    { '@type': 'ListItem', position: 2, name: 'Kedarnath Yatra', item: `${SITE.baseUrl}/kedarnath-yatra` },
    { '@type': 'ListItem', position: 3, name: 'VIP Darshan', item: `${SITE.baseUrl}/kedarnath-vip-darshan` },
  ] };
  const svc = { '@context': 'https://schema.org', '@type': 'Service', serviceType: 'Kedarnath VIP darshan and BKTC puja booking assistance',
    provider: { '@type': 'TravelAgency', name: SITE.name, telephone: SITE.phone, url: SITE.baseUrl, image: `${SITE.baseUrl}/opengraph-image` },
    areaServed: { '@type': 'Place', name: 'Kedarnath, Rudraprayag, Uttarakhand' },
    description: 'Guidance and assistance for Kedarnath VIP darshan, special pujas, sparsh darshan and BKTC online booking, as part of Kedarnath yatra packages.' };
  const wp = { '@context': 'https://schema.org', '@type': 'WebPage', '@id': `${SITE.baseUrl}/kedarnath-vip-darshan#webpage`,
    url: `${SITE.baseUrl}/kedarnath-vip-darshan`, name: 'Kedarnath VIP Darshan 2026 — Price, Booking & Sparsh Darshan', inLanguage: 'en-IN',
    dateModified: '2026-06-29', speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.speakable-answer'] } };
  return (<>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faq) }} />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(bc) }} />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(svc) }} />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(wp) }} />
  </>);
}

const h2 = { fontFamily: 'var(--font-display)', fontSize: 'clamp(1.25rem,3vw,1.75rem)', fontWeight: 700, color: 'var(--navy)', letterSpacing: '-0.02em', marginBottom: 12, marginTop: 40 };
const h3 = { fontSize: 'clamp(1rem,2vw,1.2rem)', fontWeight: 700, color: 'var(--navy)', marginBottom: 8, marginTop: 22 };
const p  = { fontSize: 15.5, color: '#334155', lineHeight: 1.9, marginBottom: 16 };
const wrap = { maxWidth: 820, margin: '0 auto', padding: '0 20px' };
const tableWrap = { overflowX: 'auto', margin: '14px 0 8px', border: '1px solid var(--border)', borderRadius: 12 };
const table = { width: '100%', borderCollapse: 'collapse', minWidth: 540, fontSize: 14 };
const th = { textAlign: 'left', padding: '11px 14px', background: 'var(--navy)', color: '#fff', fontWeight: 700, fontSize: 12.5, whiteSpace: 'nowrap' };
const td = { padding: '11px 14px', borderTop: '1px solid var(--border)', color: '#334155' };

const PAA = [
  { q: 'Can I touch the Shivling without VIP darshan?', a: 'No. Sparsh darshan — touching the Shivling — happens only inside the Garbha Griha, which needs a puja or VIP booking, and is allowed only before 3:00 PM. General darshan pilgrims view the Shivling from the outer hall, three or four metres back. If touching the stone matters to you, book any special-darshan puja; sparsh comes bundled with it.' },
  { q: 'What is the cheapest Kedarnath VIP darshan option?', a: 'The committee-set special darshan minimum is ₹300 per person, and the commonly bought special darshan parchi is ₹1,100. Either gets you the priority lane and brief sanctum access. If you only want to skip the queue and not perform a big ritual, the ₹300–1,100 band is all you need — the larger pujas are about the ritual, not faster entry.' },
  { q: 'Do I still need yatra registration for VIP darshan?', a: 'Yes. Kedarnath yatra registration (free, at registrationandtouristcare.uk.gov.in) is mandatory for every pilgrim and is checked at Sonprayag. A VIP darshan or puja booking does not replace it. Carry both the registration QR slip and your puja receipt, plus a government photo ID, to the temple.' },
  { q: 'Can foreign nationals book Kedarnath VIP darshan?', a: 'Yes. Foreign pilgrims can book the same BKTC pujas online, provided they complete Kedarnath yatra registration and carry a valid passport and visa as ID at the puja counter. The booking process and rates are identical — only the accepted ID differs.' },
  { q: 'How long does VIP darshan take versus the general queue?', a: 'VIP/priority darshan usually takes about 20–45 minutes depending on crowd, against several hours in the general queue on busy peak-season days. In September–October the general queue is often calm enough that the time saving is small — which is exactly when many pilgrims skip the paid option.' },
  { q: 'Can the puja be performed if I cannot attend?', a: 'Yes. Most Kedarnath pujas — Mahabhishek, Rudrabhishek, Sodashopachar, aarti and the various paths — are attending pujas, but if you cannot be present, the Chief Priest / Vedpathi performs the booked puja with your name and gotra. This non-attending option, booked on the BKTC portal, suits the elderly, those abroad, or anyone with health limits, and prasad can be sent afterwards.' },
];

function PAASchema() {
  const paa = { '@context': 'https://schema.org', '@type': 'FAQPage',
    mainEntity: PAA.map(x => ({ '@type': 'Question', name: x.q, answerCount: 1, acceptedAnswer: { '@type': 'Answer', text: x.a } })) };
  return (<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(paa) }} />);
}

const wa = (msg) => `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(msg)}`;
const KED = [
  ['Basic special darshan', '₹300 / person', 'Committee-set minimum — priority entry'],
  ['Special darshan parchi (popular)', '₹1,100 / person', 'Priority lane + brief sanctum access + Abhishek'],
  ['Rudrabhishek', '₹1,700 (approx)', 'Dedicated Rudra puja with sanctum access'],
  ['Sampoorna / Evening Aarti', '₹3,100 / person', 'Reserved place at the evening aarti'],
  ['Maha Abhishek (4 AM)', '₹5,500+', 'Pre-dawn ritual bathing of the Shivling'],
  ['Shodashopachar Puja', 'from ₹7,500 (up to 5)', '16-step puja, group sanctum access'],
  ['Entire-day Puja', 'up to ₹28,600', 'All-day sanctum access for a group of five'],
];
const BAD = [
  ['Basic special darshan', '₹300 / person', 'Priority entry'],
  ['Kapoor Aarti', '₹151 (approx)', 'During scheduled aarti'],
  ['Ved Path / Vishnu Sahasranama', '₹701 (approx)', 'Morning rituals'],
  ['Maha Abhishek (most popular)', '₹5,500 / person', 'Pre-dawn 4:30–6:30 AM'],
];

export default function KedarnathVipDarshan() {
  return (
    <>
      <Schema />
      <PAASchema />

      <section style={{ background: 'linear-gradient(145deg,var(--navy) 0%,#1A3E75 60%,var(--teal) 100%)', padding: '52px 20px 40px', textAlign: 'center' }}>
        <div style={{ maxWidth: 840, margin: '0 auto' }}>
          <span style={{ background: 'rgba(232,146,10,0.18)', color: '#FFD166', fontSize: 11, fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', padding: '5px 16px', borderRadius: 100, display: 'inline-block', marginBottom: 16 }}>BKTC puja-linked · Sparsh Darshan · Updated {UPDATED}</span>
          <h1 className="display-title speakable-answer" style={{ color: '#fff', fontSize: 'clamp(1.7rem,4.5vw,2.8rem)', marginBottom: 14 }}>Kedarnath VIP Darshan 2026 — Price &amp; Booking</h1>
          <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: 15, lineHeight: 1.7 }}>The honest version: there's no flat VIP pass. Priority sanctum access comes bundled with a BKTC puja. Here are the real 2026 rates, how to book, and the scam to avoid.</p>
          <div style={{ display: 'flex', gap: 10, justifyContent: 'center', flexWrap: 'wrap', marginTop: 20 }}>
            <a href={wa('Namaste! I want help arranging Kedarnath VIP darshan / puja with my yatra.')} target="_blank" rel="nofollow noopener noreferrer" style={{ background: '#25D366', color: '#fff', padding: '12px 24px', borderRadius: 9, fontWeight: 700, fontSize: 13.5, textDecoration: 'none' }}>💬 Get a Free Quote</a>
            <a href={`tel:${SITE.phone}`} style={{ background: 'rgba(255,255,255,0.12)', color: '#fff', padding: '12px 24px', borderRadius: 9, fontWeight: 700, fontSize: 13.5, textDecoration: 'none', border: '1px solid rgba(255,255,255,0.2)' }}>📞 {SITE.phone}</a>
          </div>
        </div>
      </section>

      <article style={{ background: 'var(--bg)', padding: '32px 0 56px' }}>
        <div style={wrap}>

          <AnswerBox>
            Kedarnath has no flat "VIP pass" sold at a window. Priority entry into the Garbha Griha — the part that lets you touch the Shivling — is bundled with a paid puja booked through the Badrinath-Kedarnath Temple Committee (BKTC). It starts at ₹300 for basic special darshan, ₹1,100 for the popular parchi, and runs up to ₹28,600 for a full-day group puja. Book it on badrinath-kedarnath.gov.in. General darshan, by the way, is completely free.
          </AnswerBox>

          <p style={p}>
            Most websites throw you one confusing number — ₹1,100, or ₹3,000, or ₹11,000 — as if there's a single VIP ticket. There isn't. I arrange this for pilgrim groups every season, so let me clear it up once: at Kedarnath the temple committee doesn't run a separate paid express lane you can just walk up and buy. What you pay for is a <strong>puja</strong>. When you book one, the priest needs you inside the sanctum to perform it — so you get priority entry, a few minutes before the Shivling, and the chance to touch it. The "VIP" label is marketing. The mechanism is the puja booking. Once you see that, the pricing stops being a mystery.
          </p>

          <h2 style={h2}>Kedarnath VIP darshan price 2026 — full puja table</h2>
          <p style={p}>
            These are the BKTC committee-set rates for the 2026 season. Each one buys priority Garbha Griha access — they differ in the ritual, not the queue.
          </p>
          <div style={tableWrap}>
            <table style={table}>
              <thead><tr><th style={th}>Puja / darshan</th><th style={th}>Rate (2026)</th><th style={th}>What you get</th></tr></thead>
              <tbody>
                {KED.map((r, i) => (<tr key={i}><td style={td}><strong>{r[0]}</strong></td><td style={td}>{r[1]}</td><td style={td}>{r[2]}</td></tr>))}
              </tbody>
            </table>
          </div>
          <p style={{ ...p, fontSize: 13.5, color: '#64748b' }}>
            Rates are revised at the start of each season — always check the live figure on <strong>badrinath-kedarnath.gov.in</strong> before paying. All bookings are non-refundable and non-transferable.
          </p>

          <h2 style={h2}>Not sure which one? Pick in three taps</h2>
          <p style={p}>
            The table looks busier than the decision actually is. Tell it who's travelling and what you want, and it'll point you to the right puja — the same call we'd make for you on the phone.
          </p>
          <KedarnathPujaPicker />

          <h2 style={h2}>How to book Kedarnath VIP darshan online (step by step)</h2>
          <ol style={{ ...p, paddingLeft: 22 }}>
            <li style={{ marginBottom: 8 }}>Open <strong>badrinath-kedarnath.gov.in</strong> and log in or sign up with your mobile number.</li>
            <li style={{ marginBottom: 8 }}>Click <strong>Book Puja Online</strong>, select <strong>Kedarnath Dham</strong>, and accept the terms.</li>
            <li style={{ marginBottom: 8 }}>Pick your puja, add it to the cart, and enter each participant's <strong>name and gotra</strong>.</li>
            <li style={{ marginBottom: 8 }}>Confirm the amount, pay online, and <strong>download the receipt</strong>.</li>
            <li style={{ marginBottom: 0 }}>Carry the printed receipt and a government photo ID. For morning Abhishek, reach the puja counter <strong>15–30 minutes before</strong> your slot.</li>
          </ol>
          <p style={p}>
            Two honest cautions from experience: there's <strong>no fixed date when online booking opens</strong> each season, so check the portal regularly; and slots — especially Rudrabhishek and Shodashopachar, with only ~120 tickets a night — sell out. If portal timing stresses you, our <Link href="/kedarnath-yatra" style={{ color: 'var(--teal)', fontWeight: 600 }}>Kedarnath packages</Link> include puja booking so you're not refreshing a government site at midnight.
          </p>

          <div style={{ background: '#FEF3F2', border: '1px solid #FECACA', borderRadius: 12, padding: '18px 18px', margin: '26px 0' }}>
            <div style={{ fontWeight: 800, color: '#B42318', fontSize: 15.5, marginBottom: 8 }}>⚠️ The one scam that catches first-timers</div>
            <p style={{ ...p, marginBottom: 10 }}>
              The biggest fraud at Kedarnath: touts — some posing as priests or agents — selling "VIP darshan" or "Garbha Griha entry" for ₹2,000–5,000 in cash near the temple. There is <strong>no loose VIP pass</strong>. Access only comes with an official BKTC puja receipt, and anything sold outside that counter is fraud.
            </p>
            <ul style={{ ...p, marginBottom: 0, paddingLeft: 20 }}>
              <li>Pay only on <strong>badrinath-kedarnath.gov.in</strong> or at the official BKTC counter at the temple.</li>
              <li>Never accept a "backdoor" entry — you can be removed and your yatra registration flagged.</li>
              <li>WhatsApp "VIP pass" offers from unknown agents are reported every season. Ignore them.</li>
            </ul>
          </div>

          <h2 style={h2}>Sparsh darshan — touching the Shivling</h2>
          <p style={p}>
            Sparsh darshan means touching the deity rather than viewing it from a distance, and at Kedarnath it matters more than at most temples. The Shivling here isn't a carved idol — it's a natural trapezoidal rock, believed to be the hump of Lord Shiva's bull form. General darshan pilgrims see it from the outer hall; sparsh darshan lets you stand inside the Garbha Griha and place your hands on the stone. It's available only to puja/VIP holders and only before 3:00 PM, after which the sanctum closes for the afternoon. There's no separate sparsh ticket — book any special-darshan puja above and it comes with it.
          </p>

          <h2 style={h2}>VIP darshan with helicopter</h2>
          <p style={p}>
            If you're flying in, the combination is genuinely the easiest Kedarnath there is — but the two bookings are separate. Helicopter tickets come from the official IRCTC heliyatra portal (flights run from <Link href="/blog/kedarnath-helicopter-booking" style={{ color: 'var(--teal)', fontWeight: 600 }}>Phata, Sersi and Guptkashi</Link>), and the VIP darshan puja comes from the BKTC portal. A heli ticket does not include sanctum priority on its own; you still book the puja. Many of our heli pilgrims pair a morning flight with a pre-dawn Maha Abhishek for the calmest possible darshan.
          </p>

          <h2 style={h2}>Is VIP darshan worth it? (honest take)</h2>
          <p style={p}>
            In <strong>peak May–June</strong>, when the general queue can run 3–5 hours on a busy day, yes — a ₹1,100 parchi for priority entry and sanctum access is money well spent, especially with elderly parents or children. In <strong>September–October</strong>, the crowd thins out and the free general queue is often calm and unhurried; paid priority adds little, and you can keep the money. Book the ritual if the ritual itself is what you want. Book priority only if the wait is the problem you're solving.
          </p>

          <h2 style={h2}>Badrinath VIP darshan price 2026</h2>
          <p style={p}>
            Most people doing Kedarnath do Badrinath too, and it runs on the exact same logic — same committee, same portal, puja-linked priority.
          </p>
          <div style={tableWrap}>
            <table style={table}>
              <thead><tr><th style={th}>Puja / darshan</th><th style={th}>Rate (2026)</th><th style={th}>Notes</th></tr></thead>
              <tbody>
                {BAD.map((r, i) => (<tr key={i}><td style={td}><strong>{r[0]}</strong></td><td style={td}>{r[1]}</td><td style={td}>{r[2]}</td></tr>))}
              </tbody>
            </table>
          </div>
          <p style={{ ...p, fontSize: 13.5, color: '#64748b' }}>The pre-dawn Maha Abhishek (4:30–6:30 AM) is the most-booked Badrinath VIP option. BKTC raised special-puja charges ~10–20% for 2026, so older lists are stale.</p>

          <h2 style={h2}>Temple timings &amp; key rules (2026)</h2>
          <ul style={{ ...p, paddingLeft: 20 }}>
            <li style={{ marginBottom: 8 }}><strong>4:00 AM</strong> — Maha Abhishek begins (booking holders); <strong>7:00 AM</strong> — general &amp; priority darshan opens.</li>
            <li style={{ marginBottom: 8 }}><strong>3:00–5:00 PM</strong> — temple closed; sparsh/touching only before 3:00 PM.</li>
            <li style={{ marginBottom: 8 }}>Evening aarti, then Shayan Aarti closes the day (no fixed time — it starts once all darshan finishes).</li>
            <li style={{ marginBottom: 8 }}><strong>Mobile phones are banned</strong> during the special pujas inside the sanctum.</li>
            <li style={{ marginBottom: 0 }}>Eclipse days: temple closes and booked pujas are rescheduled. Kapat opened 22 April 2026; tentative closing ~11 November 2026.</li>
          </ul>

          <h2 style={h2}>Frequently asked questions</h2>
          <PeopleAlsoAsk items={PAA} />

          <div style={{ background: 'linear-gradient(135deg,var(--navy),#1A3E75)', borderRadius: 14, padding: '26px 22px', margin: '34px 0 10px', textAlign: 'center' }}>
            <div style={{ color: '#fff', fontWeight: 800, fontSize: 18, marginBottom: 6 }}>Want VIP darshan handled for you?</div>
            <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: 14.5, lineHeight: 1.7, maxWidth: 560, margin: '0 auto 16px' }}>
              We've run Kedarnath since 2010 and book pujas for our pilgrims directly through BKTC — no touts, no cash near the temple. Tell us your dates and we'll sort registration, the puja and the trek. ₹0 to enquire, no advance to talk.
            </p>
            <div style={{ display: 'flex', gap: 10, justifyContent: 'center', flexWrap: 'wrap' }}>
              <a href={wa('Namaste! Please arrange Kedarnath VIP darshan / puja for my group.')} target="_blank" rel="nofollow noopener noreferrer" style={{ background: '#25D366', color: '#fff', padding: '12px 24px', borderRadius: 9, fontWeight: 700, fontSize: 13.5, textDecoration: 'none' }}>💬 WhatsApp Us</a>
              <Link href="/kedarnath-yatra" style={{ background: 'rgba(255,255,255,0.12)', color: '#fff', padding: '12px 24px', borderRadius: 9, fontWeight: 700, fontSize: 13.5, textDecoration: 'none', border: '1px solid rgba(255,255,255,0.2)' }}>View Kedarnath Packages →</Link>
            </div>
          </div>

          <p style={{ fontSize: 13, color: '#94a3b8', marginTop: 18 }}>
            Related: <Link href="/kedarnath-pony-palki-kandi-rates" style={{ color: 'var(--teal)' }}>Pony, palki &amp; kandi rates</Link> · <Link href="/blog/kedarnath-darshan-timing" style={{ color: 'var(--teal)' }}>Kedarnath darshan timings</Link> · <Link href="/blog/kedarnath-registration-2026" style={{ color: 'var(--teal)' }}>Kedarnath registration 2026</Link> · <Link href="/blog/kedarnath-helicopter-booking" style={{ color: 'var(--teal)' }}>Helicopter booking</Link>
          </p>

          <BlogAuthor author="sumit" variant="bottom" />
        </div>
      </article>
    </>
  );
}
