import Link from 'next/link';
import { SITE } from '@/data/packages';
import BlogCTA from '@/components/BlogCTA';
import BlogAuthor from '@/components/BlogAuthor';

export const metadata = {
  title: 'Kedarnath VIP Darshan 2026 — Price, Online Booking & Sparsh Darshan',
  description: 'Kedarnath VIP darshan 2026: there is no flat pass — priority sanctum access comes with BKTC pujas (₹300 to ₹28,600). Online booking steps, helicopter combo, sparsh darshan, Badrinath rates & fraud warning.',
  keywords: ['VIP darshan kedarnath 2026', 'kedarnath VIP darshan price', 'vip darshan kedarnath online booking', 'kedarnath VIP darshan with helicopter', 'kedarnath sparsh darshan booking', 'VIP darshan pass kedarnath', 'badrinath VIP darshan ticket price', 'badrinath temple VIP darshan booking'],
  alternates: { canonical: `${SITE.baseUrl}/blog/vip-darshan-kedarnath-booking` },
  openGraph: {
    title: 'Kedarnath VIP Darshan 2026 — Price, Online Booking & Sparsh Darshan',
    description: 'No flat VIP pass exists. Priority Garbha Griha access is bundled with BKTC pujas. Full 2026 price table, online booking steps, helicopter combo, sparsh darshan & the ₹2,000+ tout scam to avoid.',
    url: `${SITE.baseUrl}/blog/vip-darshan-kedarnath-booking`,
    type: 'article',
    images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: 'Kedarnath VIP Darshan 2026 — Price, Online Booking & Sparsh Darshan Guide | Shiv Ganga Travels' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kedarnath VIP Darshan 2026 — Price, Booking & Sparsh Darshan',
    description: 'No flat VIP pass — priority sanctum access is bundled with BKTC pujas. 2026 prices, online booking steps, helicopter combo & fraud warning.',
    images: [{ url: '/opengraph-image', alt: 'Kedarnath VIP Darshan 2026 Guide | Shiv Ganga Travels' }],
  },
};

function Schema() {
  const faq = {
    '@context': 'https://schema.org', '@type': 'FAQPage',
    mainEntity: [
      { '@type': 'Question', name: 'What is the VIP darshan price for Kedarnath in 2026?', acceptedAnswer: { '@type': 'Answer', text: 'There is no single fixed "VIP ticket" at Kedarnath. Priority sanctum access is bundled with a paid puja booked through the BKTC temple committee. The committee-set minimum for special darshan is ₹300 per person; the commonly bought option is the ₹1,100 special darshan parchi. Bigger pujas cost more — Rudrabhishek around ₹1,700, evening Sampoorna Aarti around ₹3,100 per person, Shodashopachar from ₹7,500, and the full-day puja up to ₹28,600 for a group of five. Always confirm the live rate on badrinath-kedarnath.gov.in before paying anyone.' } },
      { '@type': 'Question', name: 'How do I book Kedarnath VIP darshan online?', acceptedAnswer: { '@type': 'Answer', text: 'Go to the official BKTC portal badrinath-kedarnath.gov.in, register with your mobile number and email, open "Book Puja Online", select Kedarnath, choose the puja and slot, add each pilgrim\'s details with a valid photo ID upload, pay online, then download the QR-coded slip. Carry a printout to the temple. Yatra registration is not required to book the puja, but it is mandatory to complete the yatra itself.' } },
      { '@type': 'Question', name: 'Can I get Kedarnath VIP darshan with a helicopter package?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Most Kedarnath helicopter packages from Phata, Sersi, Guptkashi or Sitapur include priority darshan as part of the deal — the operator walks you to the sanctum on arrival, so you skip the general queue. Round-trip helicopter fares run roughly ₹6,000 to ₹9,999 per person depending on the helipad. The VIP/priority darshan coordination is usually bundled; confirm in writing that it is included before you pay.' } },
      { '@type': 'Question', name: 'What is sparsh darshan at Kedarnath and how do I book it?', acceptedAnswer: { '@type': 'Answer', text: 'Sparsh darshan means physically touching the Shivling inside the Garbha Griha (inner sanctum), as opposed to viewing it from the outer hall. It is available only to puja/VIP darshan holders and only before 3:00 PM. To book it, reserve any special-darshan puja on the BKTC portal (badrinath-kedarnath.gov.in) or arrange it through your tour operator — there is no separate "sparsh" ticket beyond the puja booking.' } },
      { '@type': 'Question', name: 'Is there a separate VIP darshan pass at Kedarnath?', acceptedAnswer: { '@type': 'Answer', text: 'No. Kedarnath does not sell a standalone "VIP pass" you can buy at a window for instant entry. Priority access is always linked to a booked puja through the temple committee. Anyone selling a loose "VIP pass" in cash near the temple for ₹2,000–5,000 is running a scam — the official route is a puja receipt from the BKTC counter or portal.' } },
      { '@type': 'Question', name: 'What is the Badrinath VIP darshan ticket price in 2026?', acceptedAnswer: { '@type': 'Answer', text: 'Badrinath works the same way — basic special darshan starts at ₹300 per person, and puja-based priority access ranges from about ₹151 (Kapoor Aarti) up to ₹5,500 for the pre-dawn Maha Abhishek, the most popular VIP option. BKTC raised special-puja charges by roughly 10–20% for the 2026 season. Book only through badrinath-kedarnath.gov.in.' } },
      { '@type': 'Question', name: 'When is Kedarnath VIP darshan suspended?', acceptedAnswer: { '@type': 'Answer', text: 'During peak season (May–June) when 15,000–18,000 pilgrims arrive daily, the temple committee can suspend VIP/priority darshan entirely because the narrow sanctum cannot hold a separate queue. You will not know in advance — ask at the official BKTC counter on arrival. September–October visitors almost never face suspension.' } },
    ],
  };
  const bc = {
    '@context': 'https://schema.org', '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: SITE.baseUrl },
      { '@type': 'ListItem', position: 2, name: 'Blog', item: `${SITE.baseUrl}/blog` },
      { '@type': 'ListItem', position: 3, name: 'Kedarnath VIP Darshan 2026', item: `${SITE.baseUrl}/blog/vip-darshan-kedarnath-booking` },
    ],
  };
  const article = {
    '@context': 'https://schema.org', '@type': 'Article',
    headline: 'Kedarnath VIP Darshan 2026 — Price, Online Booking & Sparsh Darshan',
    author: { '@type': 'Person', name: 'Sumit Mishra', jobTitle: 'Operations Manager, Shiv Ganga Travels' },
    publisher: { '@type': 'Organization', name: 'Shiv Ganga Travels', url: SITE.baseUrl },
    datePublished: '2026-03-10', dateModified: '2026-05-28',
    mainEntityOfPage: `${SITE.baseUrl}/blog/vip-darshan-kedarnath-booking`,
  };
  return (<><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faq) }} /><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(bc) }} /><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(article) }} /></>);
}

const h2 = { fontFamily: 'var(--font-display)', fontSize: 'clamp(1.15rem,2.5vw,1.4rem)', fontWeight: 700, color: 'var(--navy)', marginBottom: 12, marginTop: 32 };
const h3 = { fontFamily: 'var(--font-display)', fontSize: '1.05rem', fontWeight: 700, color: 'var(--navy)', marginBottom: 8, marginTop: 22 };
const p = { fontSize: 15.5, color: '#334155', lineHeight: 1.9, marginBottom: 16 };

export default function VIPDarshan() {
  return (
    <>
      <Schema />
      <section style={{ background: 'linear-gradient(145deg,var(--navy) 0%,#1A3E75 60%,var(--teal) 100%)', padding: '52px 20px 40px', textAlign: 'center' }}>
        <div style={{ maxWidth: 800, margin: '0 auto' }}>
          <span style={{ background: 'rgba(232,146,10,0.18)', color: '#FFD166', fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', padding: '5px 16px', borderRadius: 100, display: 'inline-block', marginBottom: 14 }}>
            Kedarnath 2026 · Official BKTC Booking Only
          </span>
          <h1 style={{ color: '#fff', fontFamily: 'var(--font-display)', fontSize: 'clamp(1.7rem,4vw,2.5rem)', fontWeight: 700, marginBottom: 14 }}>
            Kedarnath VIP Darshan 2026
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: 15, maxWidth: 660, margin: '0 auto 16px' }}>
            Prices, online booking on the BKTC portal, sparsh darshan, the helicopter combo, and Badrinath rates — plus the one scam that catches first-timers every season.
          </p>
        </div>
      </section>

      <nav style={{ background: 'var(--bg)', borderBottom: '1px solid var(--border)', padding: '9px 20px' }}>
        <div style={{ maxWidth: 'var(--container)', margin: '0 auto', fontSize: 12, color: 'var(--text-muted)', display: 'flex', gap: 6 }}>
          <Link href="/" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>Home</Link><span>›</span>
          <Link href="/blog" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>Blog</Link><span>›</span>
          <span>Kedarnath VIP Darshan 2026</span>
        </div>
      </nav>

      <article style={{ maxWidth: 860, margin: '0 auto', padding: '40px 20px 60px' }}>

        <BlogAuthor variant="top" author="sumit" />
        <div style={{ fontSize: 12, color: 'var(--text-muted)', marginBottom: 20, textAlign: 'right' }}>🗓️ <strong>Last updated:</strong> May 28, 2026</div>

        {/* Direct answer first — GEO */}
        <p style={{ ...p, fontSize: 16.5, color: '#1e293b', background: '#F8FAFC', borderLeft: '4px solid var(--gold)', padding: '14px 18px', borderRadius: '0 10px 10px 0' }}>
          Here is the short version: <strong>Kedarnath has no flat "VIP pass" you buy at a window.</strong> Priority entry into the Garbha Griha — the part that lets you touch the Shivling — is bundled with a paid puja booked through the Badrinath-Kedarnath Temple Committee (BKTC). It starts at ₹300 for basic special darshan, the popular parchi is ₹1,100, and bigger pujas run up to ₹28,600 for a group. Book it on <strong>badrinath-kedarnath.gov.in</strong> or have your operator arrange it. Never hand cash to anyone offering "VIP entry" near the temple.
        </p>

        <div style={{ background: '#FCEBEB', border: '1px solid #F09595', borderRadius: 12, padding: '14px 16px', marginBottom: 24 }}>
          <div style={{ fontWeight: 700, fontSize: 13.5, color: '#791F1F', marginBottom: 6 }}>⚠️ Fraud Warning — Read Before You Pay Anyone</div>
          <div style={{ fontSize: 13.5, color: '#7f1d1d', lineHeight: 1.75 }}>
            The biggest scam at Kedarnath: priests, agents and touts selling "VIP darshan" or "Garbha Griha entry" for ₹2,000–5,000 in cash. There is no loose VIP pass — access only comes with an official BKTC puja receipt. Anything sold outside that counter is fraud. Don't pay cash before you reach the official window, and don't accept a "backdoor" entry — you can be removed from the premises and your Yatra Registration flagged.
          </div>
        </div>

        <h2 style={h2}>What "VIP Darshan" Actually Means at Kedarnath</h2>
        <p style={p}>
          Most websites quote you a single confusing number — ₹1,100, or ₹3,000, or ₹11,000 — as if there's one VIP ticket. There isn't. At Kedarnath, the temple committee doesn't run a separate paid express lane that anyone can walk up and buy. What you're actually paying for is a <strong>puja</strong>. When you book a puja, the priest needs you inside the sanctum to perform it, so you get priority entry, a few minutes before the Shivling, and the chance to touch it — sparsh darshan. The "VIP" label is marketing. The mechanism is the puja booking.
        </p>
        <p style={p}>
          That's why the prices look all over the place online: each writer is quoting a different puja. A ₹300 special darshan and a ₹28,600 full-day puja both get you priority — they just buy very different rituals. Once you understand it's puja-linked, the pricing stops being mysterious.
        </p>

        <h2 style={h2}>Kedarnath VIP Darshan Price 2026 — Full Puja Table</h2>
        <p style={p}>These are the BKTC-managed special-darshan and puja rates for the 2026 season. Treat them as a guide — the committee revises charges before each season and slots are limited in May–June. Confirm the live amount on the official portal before booking.</p>
        <div style={{ overflowX: 'auto', marginBottom: 18 }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 13.5 }}>
            <thead>
              <tr style={{ background: 'var(--navy)' }}>
                {['Puja / Darshan type', 'Approx. cost (2026)', 'What you get'].map(h => (
                  <th key={h} style={{ padding: '9px 12px', textAlign: 'left', color: '#fff', fontWeight: 700, fontSize: 12 }}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {[
                ['Special darshan (basic)', '₹300 / person', 'Committee-set minimum priority entry'],
                ['Special darshan parchi (popular)', '₹1,100 / person', 'Priority lane + brief sanctum access + Abhishek'],
                ['Rudrabhishek', '₹1,700 (approx)', 'Dedicated Rudra puja with sanctum access'],
                ['Sampoorna / Evening Aarti', '₹3,100 / person', 'Reserved place at the evening aarti'],
                ['Shodashopachar Puja', 'from ₹7,500 (up to 5)', '16-step puja, group sanctum access'],
                ['Maha Abhishek (4 AM)', '₹5,500+', 'Pre-dawn ritual bathing of the Shivling'],
                ['Whole Day Puja', '₹28,600 (up to 5)', 'Full day of rituals in your family name'],
              ].map(([type, cost, gets], i) => (
                <tr key={type} style={{ borderBottom: '1px solid var(--border)', background: i % 2 === 0 ? '#fff' : 'var(--bg)' }}>
                  <td style={{ padding: '9px 12px', fontWeight: 700, color: 'var(--navy)' }}>{type}</td>
                  <td style={{ padding: '9px 12px', color: '#334155', whiteSpace: 'nowrap' }}>{cost}</td>
                  <td style={{ padding: '9px 12px', color: '#64748b', fontSize: 13 }}>{gets}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div style={{ fontSize: 12.5, color: 'var(--text-muted)', marginBottom: 24 }}>
          Source: <a href="https://badrinath-kedarnath.gov.in" target="_blank" rel="nofollow noopener noreferrer" style={{ color: 'var(--teal)' }}>Shri Badrinath-Kedarnath Temple Committee (BKTC)</a> puja portal. Rates are non-refundable and non-transferable — book only when your dates are fixed.
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(260px,1fr))', gap: 12, marginBottom: 24 }}>
          <div style={{ background: '#F0FDF4', border: '1px solid #86EFAC', borderRadius: 12, padding: '14px 16px' }}>
            <div style={{ fontWeight: 700, fontSize: 13.5, color: '#15803D', marginBottom: 8 }}>✅ Priority Darshan Includes</div>
            {['Shorter, separate queue from general darshan', 'Entry to the Garbha Griha (inner sanctum)', 'Sparsh darshan — touch the Shivling (before 3 PM)', 'A brief Abhishek by the temple priest', 'Prasad from the temple'].map(item => (
              <div key={item} style={{ fontSize: 13, color: '#166534', padding: '3px 0', display: 'flex', gap: 6 }}>
                <span style={{ flexShrink: 0 }}>✓</span>{item}
              </div>
            ))}
          </div>
          <div style={{ background: '#FFF8F0', border: '1px solid #FDBA74', borderRadius: 12, padding: '14px 16px' }}>
            <div style={{ fontWeight: 700, fontSize: 13.5, color: '#92400E', marginBottom: 8 }}>📌 What It Does NOT Cover</div>
            {['A "skip everything" pass — peak days still mean a wait', 'Extended time in the sanctum (access is brief)', 'Photography inside the temple (strictly banned)', 'Guaranteed availability in May–June (can be suspended)', 'Helicopter or pony — those are separate bookings'].map(item => (
              <div key={item} style={{ fontSize: 13, color: '#7c2d12', padding: '3px 0', display: 'flex', gap: 6 }}>
                <span style={{ flexShrink: 0 }}>→</span>{item}
              </div>
            ))}
          </div>
        </div>

        <h2 style={h2}>How to Book Kedarnath VIP Darshan Online (Step by Step)</h2>
        <p style={p}>The only authorised online route is the BKTC portal. It takes about ten minutes. Here's exactly what happens:</p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8, marginBottom: 20 }}>
          {[
            ['1. Register', 'Open badrinath-kedarnath.gov.in and sign up with your active mobile number and email. You\'ll verify with an OTP.'],
            ['2. Open "Book Puja Online"', 'From the menu, choose the puja booking section and select Kedarnath as the temple.'],
            ['3. Pick the puja, date & slot', 'Choose the puja from the table above and a date the temple is open. Early-morning Abhishek slots go first in peak season.'],
            ['4. Add pilgrim details + ID', 'Enter each person\'s name and upload a valid photo ID (Aadhaar, passport, voter ID) for everyone taking part.'],
            ['5. Pay online', 'Confirm the payable amount and pay by UPI, card or netbanking. Amounts are non-refundable.'],
            ['6. Download the QR slip', 'You get a QR-coded confirmation slip. Save it on your phone and carry a printout — you\'ll show it at the temple gate.'],
          ].map(([t, d]) => (
            <div key={t} style={{ background: '#fff', borderRadius: 10, padding: '12px 14px', border: '1px solid var(--border)' }}>
              <div style={{ fontWeight: 700, fontSize: 13.5, color: 'var(--navy)', marginBottom: 5 }}>{t}</div>
              <div style={{ fontSize: 13.5, color: '#475569', lineHeight: 1.7 }}>{d}</div>
            </div>
          ))}
        </div>
        <p style={{ ...p, fontSize: 14.5 }}>
          One thing that confuses people: <strong>you don't need Yatra Registration to book the puja online.</strong> But you do need Yatra Registration to actually complete the yatra and enter the valley. Carry both. If online slots are sold out, you can still book at the official BKTC counter beside the temple on arrival — subject to that day's availability.
        </p>

        <h2 style={h2}>Kedarnath VIP Darshan With Helicopter</h2>
        <p style={p}>
          If you're short on time or travelling with elders, the helicopter route is the real "VIP" experience — and priority darshan is usually built into it. Choppers run from <strong>Phata, Sersi, Guptkashi and Sitapur</strong>, landing about 500 metres from the temple. Round-trip fares run roughly ₹6,000 to ₹9,999 per person depending on the helipad, with Phata typically the cheapest and Guptkashi the priciest.
        </p>
        <p style={p}>
          On most heli packages the operator's ground team meets you at the helipad and walks you to the sanctum through the priority lane, so you're in and out in 30–90 minutes instead of standing in the general queue for hours. The catch: not every cheap heli ticket includes it. Get it in writing that <strong>priority/VIP darshan is part of the package</strong> before you pay — and book the chopper only through a registered operator or the official IRCTC/heliservices portal, never a random WhatsApp number.
        </p>

        <h2 style={h2}>Sparsh Darshan — Touching the Shivling</h2>
        <p style={p}>
          "Sparsh darshan" simply means touching the deity rather than viewing it from a distance. At Kedarnath this matters more than at most temples. The Shivling here isn't a carved idol — it's a natural rock in a distinctive trapezoidal shape, believed to be the hump of Lord Shiva's bull form, and it's covered in ghee and offerings through the day.
        </p>
        <p style={p}>
          General darshan pilgrims see it from the outer hall, three or four metres back. Sparsh darshan lets you stand inside the Garbha Griha and place your hands on the stone — available only to puja/VIP holders, and only before 3:00 PM, after which the sanctum closes for the afternoon. There's no separate "sparsh ticket": book any special-darshan puja above and sparsh darshan comes with it. For most pilgrims who've trekked 16km to get there, that contact is the whole point of the journey.
        </p>

        <h2 style={h2}>When VIP Darshan Gets Suspended</h2>
        <div style={{ background: '#FFF8F0', border: '1px solid #FDBA74', borderRadius: 12, padding: '14px 16px', marginBottom: 24 }}>
          <p style={{ fontSize: 13.5, color: '#78350F', lineHeight: 1.8, margin: 0 }}>
            In peak season — usually May and June, when 15,000–18,000 pilgrims arrive daily — the committee sometimes <strong>suspends VIP/priority darshan completely</strong>. The reason is physical: the sanctum passage is narrow, and a separate queue just jams it further. When the temple is at capacity, everyone is on general darshan. You won't be told in advance — ask at the BKTC counter when you reach Kedarnath. If it's suspended, general darshan is still a full, complete darshan; the Shivling is right there.
          </p>
          <div style={{ marginTop: 12, fontSize: 13, color: '#854F0B', fontWeight: 600 }}>
            💡 Tip: September–October visitors almost never hit suspension — crowds are well within limits and priority darshan is nearly always running.
          </div>
        </div>

        <h2 style={h2}>Is VIP Darshan Worth It? (Honest Take)</h2>
        <p style={p}>
          For senior citizens, families with young kids, anyone with a knee or heart issue, or pilgrims on a tight schedule — yes, easily. Standing 3–6 hours in a peak-season queue at 3,500m altitude is genuinely hard on the body, and a puja booking can cut that to under an hour. That alone justifies the ₹1,100.
        </p>
        <p style={p}>
          But if you're visiting in late September or October and you're fit, the general queue can be 30–45 minutes, and spending thousands on a big puja for "speed" makes little sense. Book the puja for the ritual and the sparsh darshan, not as a queue-jump you may not need. Match the spend to your season and your group.
        </p>

        {/* Mid-article CTA */}
        <BlogCTA variant="inline" intent="kedarnath" />

        <h2 style={h2}>Badrinath VIP Darshan Price & Booking 2026</h2>
        <p style={p}>
          People planning Kedarnath usually do Badrinath too, and it runs on the exact same logic — same committee, same portal, puja-linked priority. Basic special darshan starts at <strong>₹300 per person</strong>. Puja-based access ranges from about ₹151 for the Kapoor Aarti up to <strong>₹5,500 for the pre-dawn Maha Abhishek</strong> (4:30–6:30 AM), which is the most-booked VIP option and the one that gets you closest to Lord Badri Narayan before the gates open to the public. Note: BKTC raised special-puja charges by roughly 10–20% for 2026, so older price lists are out of date.
        </p>
        <div style={{ overflowX: 'auto', marginBottom: 18 }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 13.5 }}>
            <thead>
              <tr style={{ background: 'var(--teal)' }}>
                {['Badrinath puja / darshan', 'Approx. cost (2026)', 'Timing'].map(h => (
                  <th key={h} style={{ padding: '9px 12px', textAlign: 'left', color: '#fff', fontWeight: 700, fontSize: 12 }}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {[
                ['Special darshan (basic)', '₹300 / person', 'Daytime priority entry'],
                ['Kapoor Aarti', '₹151 (approx)', 'During scheduled aarti'],
                ['Ved Path / Vishnu Sahasranama', '₹701 (approx)', 'Morning rituals'],
                ['Maha Abhishek (most popular)', '₹5,500 / person', 'Pre-dawn 4:30–6:30 AM'],
              ].map(([type, cost, time], i) => (
                <tr key={type} style={{ borderBottom: '1px solid var(--border)', background: i % 2 === 0 ? '#fff' : 'var(--bg)' }}>
                  <td style={{ padding: '9px 12px', fontWeight: 700, color: 'var(--navy)' }}>{type}</td>
                  <td style={{ padding: '9px 12px', color: '#334155', whiteSpace: 'nowrap' }}>{cost}</td>
                  <td style={{ padding: '9px 12px', color: '#64748b', fontSize: 13 }}>{time}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p style={{ ...p, fontSize: 14.5 }}>
          Booking is identical to Kedarnath — same portal, just select Badrinath as the temple. The same fraud rule applies: agents sell fake Badrinath VIP passes over WhatsApp every season. Book only on <strong>badrinath-kedarnath.gov.in</strong>.
        </p>

        <h2 style={h2}>Kedarnath Temple Darshan Timings 2026</h2>
        <div style={{ overflowX: 'auto', marginBottom: 24 }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 13.5 }}>
            <thead>
              <tr style={{ background: 'var(--navy)' }}>
                {['Time', 'What happens', 'Who can attend'].map(h => (
                  <th key={h} style={{ padding: '9px 12px', textAlign: 'left', color: '#fff', fontWeight: 700, fontSize: 12 }}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {[
                ['4:00 AM', 'Maha Abhishek begins — milk, curd, ghee, honey on the Shivling', 'Abhishek booking holders'],
                ['6:00 AM', 'General darshan opens — Shivling visible from outer hall', 'All pilgrims with Yatra Registration'],
                ['7:00 AM', 'VIP/priority darshan begins — Garbha Griha access', 'Puja/parchi holders'],
                ['3:00 PM', 'Temple closes for afternoon prayers — no entry', 'Nobody — doors sealed'],
                ['5:00 PM', 'Temple reopens for evening darshan', 'All pilgrims'],
                ['6:00 PM', 'Shayan aarti — evening lamp ceremony', 'All pilgrims, free to attend'],
                ['9:00 PM', 'Temple closes for the night', 'Nobody'],
              ].map(([time, what, who], i) => (
                <tr key={time} style={{ borderBottom: '1px solid var(--border)', background: i % 2 === 0 ? '#fff' : 'var(--bg)' }}>
                  <td style={{ padding: '9px 12px', fontWeight: 700, color: 'var(--navy)', whiteSpace: 'nowrap' }}>{time}</td>
                  <td style={{ padding: '9px 12px', color: '#334155' }}>{what}</td>
                  <td style={{ padding: '9px 12px', color: '#64748b', fontSize: 13 }}>{who}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 style={h2}>Frequently Asked Questions</h2>
        {[
          ['Is there a separate VIP darshan pass at Kedarnath?', 'No. There\'s no standalone pass sold at a window. Priority access is always tied to a booked puja through the temple committee. Anyone offering a loose "VIP pass" in cash is scamming you.'],
          ['Do I need Yatra Registration for VIP darshan?', 'Not to book the puja online — you can do that without it. But Yatra Registration is mandatory to complete the yatra and enter the valley, so carry both your registration and your puja slip.'],
          ['Can I touch the Shivling without VIP darshan?', 'No. Sparsh darshan (touching the Shivling) is only inside the Garbha Griha, which needs a puja/VIP booking and is allowed only before 3 PM. General darshan is from the outer hall.'],
          ['What is the cheapest VIP darshan option?', 'The committee-set special darshan minimum is ₹300 per person; the commonly bought parchi is ₹1,100. Either gets you priority entry and brief sanctum access.'],
          ['Is VIP darshan good for senior citizens?', 'Yes — it\'s the single best reason to book it. It cuts hours of standing at high altitude down to under an hour and reduces physical strain considerably.'],
        ].map(([q, a]) => (
          <div key={q} style={{ borderBottom: '1px solid var(--border)', padding: '14px 0' }}>
            <div style={{ fontWeight: 700, fontSize: 14.5, color: 'var(--navy)', marginBottom: 6 }}>{q}</div>
            <div style={{ fontSize: 14, color: '#475569', lineHeight: 1.8 }}>{a}</div>
          </div>
        ))}

        <div style={{ background: 'var(--navy)', borderRadius: 14, padding: '24px 22px', textAlign: 'center', marginTop: 32 }}>
          <h3 style={{ color: '#fff', fontFamily: 'var(--font-display)', fontSize: '1.2rem', marginBottom: 8 }}>We Arrange VIP Darshan for Our Pilgrims</h3>
          <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: 13.5, marginBottom: 18 }}>Every Shiv Ganga Travels Kedarnath overnight and helicopter package includes VIP/priority darshan coordination and puja arrangement. You pay the official BKTC rate at the counter — we make sure you're there at the right time, in the right queue.</p>
          <div style={{ display: 'flex', gap: 10, justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href={`https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent('Namaste! I want to book Kedarnath Yatra with VIP darshan / sparsh darshan. Please share details.')}`}
              target="_blank" rel="nofollow noopener noreferrer"
              style={{ background: '#25D366', color: '#fff', padding: '11px 22px', borderRadius: 9, fontWeight: 700, fontSize: 13.5, textDecoration: 'none' }}>💬 Book With VIP Darshan</a>
            <a href={`tel:${SITE.phone}`} style={{ background: 'rgba(255,255,255,0.12)', color: '#fff', padding: '11px 22px', borderRadius: 9, fontWeight: 700, fontSize: 13.5, textDecoration: 'none', border: '1px solid rgba(255,255,255,0.2)' }}>📞 {SITE.phone}</a>
          </div>
        </div>

        <div style={{ borderTop: '1px solid var(--border)', paddingTop: 24, marginTop: 32 }}>
          <div style={{ fontWeight: 700, fontSize: 13, color: 'var(--navy)', marginBottom: 10 }}>Related guides</div>
          <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
            {[
              ['Kedarnath Helicopter Booking', '/blog/kedarnath-helicopter-booking'],
              ['Kedarnath Darshan Timings', '/blog/kedarnath-darshan-timing'],
              ['Pony & Palki Rates 2026', '/blog/kedarnath-pony-palki-rates-2026'],
              ['Kedarnath Complete Guide', '/blog/kedarnath-yatra-complete-guide'],
              ['Kedarnath Package', '/kedarnath-yatra'],
            ].map(([l, h]) => (
              <Link key={h} href={h} style={{ background: 'var(--bg)', border: '1px solid var(--border)', color: 'var(--navy)', padding: '6px 12px', borderRadius: 7, fontSize: 12.5, fontWeight: 600, textDecoration: 'none' }}>{l} →</Link>
            ))}
          </div>
        </div>

        <BlogCTA variant="footer" intent="kedarnath" />
      </article>
    </>
  );
}
