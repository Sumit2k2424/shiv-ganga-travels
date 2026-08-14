import Link from 'next/link';
import { SITE } from '@/data/packages';
import PeopleAlsoAsk from '@/components/PeopleAlsoAsk';
import AnswerBox from '@/components/AnswerBox';
import BlogAuthor from '@/components/BlogAuthor';
import FAQAccordion from '@/components/FAQAccordion';
import BlogCTA from '@/components/BlogCTA';
import { h2, h3, p } from '@/lib/prose';

// This page deliberately hard-codes 2027 rather than using SITE.season: the
// year IS the subject here, so it must not roll forward with the rest of the
// site. Same rule as the opening-dates / new-rules pages.

export const metadata = {
  title: { absolute: 'Char Dham Yatra 2027 — Dates, Registration & Cost' },
  description: 'Char Dham Yatra 2027 opens ~3 weeks later than 2026 — Yamunotri & Gangotri 8 May. Full expected dates, registration, cost and what the late start changes.',
  keywords: ['char dham yatra 2027', 'char dham yatra 2027 dates', 'char dham yatra 2027 opening date', 'chardham yatra 2027 registration', 'char dham 2027 package cost', 'char dham yatra 2027 booking'],
  alternates: { canonical: `${SITE.baseUrl}/char-dham-yatra-2027` },
  openGraph: {
    title: 'Char Dham Yatra 2027 — Dates, Registration & Cost',
    description: 'Why 2027 starts three weeks later than 2026, the expected opening dates for all four dhams, and what the shift means for booking.',
    url: `${SITE.baseUrl}/char-dham-yatra-2027`,
    type: 'article',
    images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: 'Char Dham Yatra 2027 — Dates and Registration Guide' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Char Dham Yatra 2027 — Dates, Registration & Cost',
    description: 'Yamunotri and Gangotri open 8 May 2027 on Akshaya Tritiya — nineteen days later than 2026. Here is what that changes.',
    images: [{ url: '/opengraph-image', alt: 'Char Dham Yatra 2027' }],
  },
};

// ── The dates ────────────────────────────────────────────────────
// 2026 figures are confirmed and already live across the site.
// 2027 figures are TENTATIVE — see the "when these become official" section.
const DHAMS_2027 = [
  { dham: 'Yamunotri',  open: 'Sat 8 May 2027',  status: 'Fixed by tithi', note: 'Opens on Akshaya Tritiya, same day as Gangotri' },
  { dham: 'Gangotri',   open: 'Sat 8 May 2027',  status: 'Fixed by tithi', note: 'Opens on Akshaya Tritiya, same day as Yamunotri' },
  { dham: 'Kedarnath',  open: 'Tue 11 May 2027', status: 'Tentative',      note: 'Confirmed on Maha Shivratri at Omkareshwar Temple, Ukhimath' },
  { dham: 'Badrinath',  open: 'Thu 13 May 2027', status: 'Tentative',      note: 'Confirmed on Basant Panchami at Narendranagar' },
];

const SHIFT = [
  { dham: 'Yamunotri', y26: '19 Apr 2026', y27: '8 May 2027',  gap: '+19 days' },
  { dham: 'Gangotri',  y26: '19 Apr 2026', y27: '8 May 2027',  gap: '+19 days' },
  { dham: 'Kedarnath', y26: '22 Apr 2026', y27: '11 May 2027', gap: '+19 days' },
  { dham: 'Badrinath', y26: '23 Apr 2026', y27: '13 May 2027', gap: '+20 days' },
];

const PAA = [
  { q: 'What are the Char Dham Yatra 2027 dates?',
    a: 'Yamunotri and Gangotri are expected to open on 8 May 2027, which is Akshaya Tritiya. Kedarnath is expected around 11 May and Badrinath around 13 May. The Yamunotri and Gangotri dates are effectively certain because they are fixed to the tithi; the Kedarnath and Badrinath dates stay tentative until the temple committees announce them on Maha Shivratri and Basant Panchami respectively.' },
  { q: 'Why does Char Dham Yatra 2027 start later than 2026?',
    a: 'Because the opening is tied to Akshaya Tritiya, a lunar date, not to a fixed calendar day. Akshaya Tritiya fell on 19 April in 2026 and falls on 8 May in 2027, so the whole season shifts about nineteen days later. Nothing has changed about the route or the rules — only the Hindu calendar.' },
  { q: 'When does Char Dham registration open for 2027?',
    a: 'Registration usually opens a few weeks before the first temple, so expect it around late March to mid April 2027. It is free and happens at registrationandtouristcare.uk.gov.in. Uttarakhand has not announced the exact 2027 date yet.' },
  { q: 'Is it too early to book Char Dham Yatra 2027?',
    a: 'No, and for May departures it is close to the right time. Hotel rooms in the small base towns are the bottleneck, not vehicles. The good rooms at Barkot, Uttarkashi and Guptkashi get pre-blocked months out, so booking six to eight months ahead is normal for peak May and June.' },
  { q: 'Will Char Dham Yatra 2027 be more expensive?',
    a: 'Expect a modest rise. Package prices track fuel, hotel tariffs and the state-set vehicle rates, which are revised each season. Our 2026 packages start at ₹13,900 per person for the 9N/10D road circuit; a single-digit percentage increase for 2027 would be typical of past seasons.' },
  { q: 'Does the later start mean better or worse weather?',
    a: 'Better, on balance. A May opening skips the coldest fortnight of the old April window. The dhams sit around 8–18°C by mid May instead of near freezing, the snow clearance on the Kedarnath and Gangotri approaches is further along, and you get more usable daylight for the treks.' },
];

const FAQS = [
  { q: 'When does Char Dham Yatra 2027 start?',
    a: 'Yamunotri and Gangotri are expected to open on 8 May 2027 (Akshaya Tritiya), Kedarnath around 11 May and Badrinath around 13 May. That is roughly three weeks later than the 2026 season, which began on 19 April.',
    plain: 'Yamunotri and Gangotri open 8 May 2027, Kedarnath around 11 May, Badrinath around 13 May — about three weeks later than 2026.' },
  { q: 'Are the 2027 Char Dham dates confirmed?',
    a: 'Partly. Yamunotri and Gangotri are effectively fixed because they always open on Akshaya Tritiya, which falls on 8 May 2027. Kedarnath and Badrinath are tentative: their dates are formally announced by the temple committees on Maha Shivratri (around March 2027) and Basant Panchami (around February 2027). Treat anything published before those announcements, including this page, as a well-informed estimate.',
    plain: 'Yamunotri and Gangotri are fixed to Akshaya Tritiya, 8 May 2027. Kedarnath and Badrinath remain tentative until announced on Maha Shivratri and Basant Panchami.' },
  { q: 'When will Char Dham Yatra 2027 close?',
    a: 'Closing dates follow Diwali, so they will fall later in November 2027 than the 2026 closings did. Gangotri shuts on Annakut, Yamunotri and Kedarnath on Bhai Dooj, and Badrinath a few days after. The exact days are announced during the season, not in advance.',
    plain: 'Closing follows Diwali — Gangotri on Annakut, Yamunotri and Kedarnath on Bhai Dooj, Badrinath a few days later. Expect later-November dates than 2026.' },
  { q: 'How much will Char Dham Yatra cost in 2027?',
    a: 'Our current road packages start at ₹13,900 per person for 9 nights and 10 days from Haridwar, all-inclusive. Helicopter charter covering all four dhams runs far higher. 2027 pricing is not published yet — package rates are set once the state announces the season vehicle rates and hotels confirm tariffs, usually early in the year.',
    plain: 'Road packages currently start at ₹13,900 per person for 9N/10D from Haridwar. 2027 rates are set after the state publishes season vehicle rates, usually early in the year.' },
  { q: 'How do I register for Char Dham Yatra 2027?',
    a: 'Registration is free and mandatory, done at registrationandtouristcare.uk.gov.in with Aadhaar verification, or in person at the biometric counters in Haridwar, Rishikesh and Rudraprayag. You cannot enter any of the four temples without it. The 2027 portal typically opens a few weeks before the first temple, so watch for it from late March 2027.',
    plain: 'Register free at registrationandtouristcare.uk.gov.in with Aadhaar, or at biometric counters in Haridwar, Rishikesh and Rudraprayag. Expect the 2027 portal from late March 2027.' },
  { q: 'Does a later start change how many days I need?',
    a: 'No. The circuit is still about 1,500–1,600 km of mountain road from Haridwar with two treks, so ten days remains the comfortable minimum and twelve is better for anyone over 55. What changes is the calendar you plan around, not the itinerary length.',
    plain: 'No. Ten days remains the comfortable minimum, twelve for pilgrims over 55. The later start changes the dates, not the duration.' },
  { q: 'Is May 2027 going to be more crowded than April 2026 was?',
    a: 'Probably, in the opening fortnight. Opening week always draws heavy crowds, and in 2027 that week lands inside May rather than in the quieter late-April slot. If you want the season without the crush, look at the first half of June or the September–October window after the monsoon clears.',
    plain: 'The opening fortnight will likely be busier because it now falls in May. For fewer crowds consider early June or the post-monsoon September–October window.' },
  { q: 'Should I wait for the official 2027 announcement before booking?',
    a: 'For Yamunotri and Gangotri there is nothing to wait for — Akshaya Tritiya is 8 May 2027 and that is that. For a full circuit, waiting until the March announcement usually means the good rooms in the base towns are gone. Most of our 2027 enquiries are already booking on the expected dates with the flexibility to shift a day or two if Kedarnath lands differently.',
    plain: 'No need to wait for Yamunotri and Gangotri. Waiting until the March announcement usually costs you the better base-town rooms; book on expected dates with a day or two of flexibility.' },
  { q: 'Does Hemkund Sahib open at the same time in 2027?',
    a: 'Later, as always. Hemkund Sahib sits at 4,632m and needs more snow clearance than the Char Dham shrines, so it is expected around 25 May 2027, roughly a fortnight after Yamunotri and Gangotri. Pilgrims combining Hemkund with Badrinath should plan for late May at the earliest.',
    plain: 'Hemkund Sahib is expected around 25 May 2027, about two weeks after the Char Dham shrines open, because of snow clearance at 4,632m.' },
  { q: 'Can I book a 2027 package now and pay later?',
    a: 'Yes. We hold 2027 dates on a booking amount and take the balance closer to departure. Because we run our own vehicles and pre-block rooms directly rather than going through a platform, an early hold costs you nothing extra and protects the room, which is the part that actually runs out.',
    plain: 'Yes — dates are held on a booking amount with the balance due closer to departure, which protects the base-town room that is the real bottleneck.' },
];

function Schema() {
  const article = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    '@id': `${SITE.baseUrl}/char-dham-yatra-2027#article`,
    headline: 'Char Dham Yatra 2027 — Dates, Registration and Cost',
    description: 'Expected 2027 opening dates for all four dhams, why the season starts three weeks later than 2026, registration process and cost.',
    image: `${SITE.baseUrl}/opengraph-image`,
    datePublished: '2026-08-13',
    dateModified: SITE.lastUpdatedISO,
    inLanguage: 'en-IN',
    author: {
      '@type': 'Person',
      '@id': `${SITE.baseUrl}/#founder`,
      name: 'Dhanesh Chandra Mishra',
      jobTitle: 'Founder & Director, Shiv Ganga Travels',
      url: `${SITE.baseUrl}/about`,
      sameAs: ['https://www.linkedin.com/in/dhanesh-chandra-635564429/'],
    },
    publisher: { '@id': `${SITE.baseUrl}/#organization` },
    mainEntityOfPage: `${SITE.baseUrl}/char-dham-yatra-2027`,
  };

  const faq = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [...PAA, ...FAQS].map(f => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.plain || f.a },
    })),
  };

  const crumbs = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: SITE.baseUrl },
      { '@type': 'ListItem', position: 2, name: 'Char Dham Yatra', item: `${SITE.baseUrl}/char-dham-yatra` },
      { '@type': 'ListItem', position: 3, name: 'Char Dham Yatra 2027', item: `${SITE.baseUrl}/char-dham-yatra-2027` },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(article) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faq) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(crumbs) }} />
    </>
  );
}

const cell = { padding: '10px 12px', borderBottom: '1px solid hsl(var(--border))', fontSize: 14, color: '#334155', textAlign: 'left', verticalAlign: 'top' };
const head = { ...cell, fontWeight: 700, color: 'var(--navy)', background: 'var(--navy-light)', whiteSpace: 'nowrap' };

export default function CharDham2027() {
  return (
    <>
      <Schema />

      {/* HERO */}
      <section style={{ background: 'linear-gradient(145deg,var(--navy) 0%,#1A3E75 55%,var(--teal) 100%)', padding: '54px 20px 42px' }}>
        <div style={{ maxWidth: 880, margin: '0 auto', textAlign: 'center' }}>
          <span style={{ background: 'rgba(232,146,10,0.18)', color: '#FFD166', fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', padding: '5px 16px', borderRadius: 100, display: 'inline-block', marginBottom: 14 }}>
            Next Season · Planning Guide
          </span>
          <h1 style={{ color: '#fff', fontFamily: 'var(--font-display)', fontSize: 'clamp(1.7rem,4vw,2.6rem)', fontWeight: 800, letterSpacing: '-0.025em', marginBottom: 14, lineHeight: 1.22 }}>
            Char Dham Yatra 2027
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: 15.5, lineHeight: 1.75, maxWidth: 700, margin: '0 auto 20px' }}>
            The 2027 season starts about three weeks later than 2026 did. Here are the expected dates for all four dhams, why they moved, when they become official, and what a May start changes for your planning.
          </p>
          <div style={{ display: 'inline-flex', flexWrap: 'wrap', justifyContent: 'center', gap: 8 }}>
            {['🗓️ Yamunotri & Gangotri 8 May', '⛰️ Kedarnath ~11 May', '🛕 Badrinath ~13 May'].map(t => (
              <span key={t} style={{ background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.18)', borderRadius: 100, padding: '6px 14px', fontSize: 12.5, color: 'rgba(255,255,255,0.88)' }}>{t}</span>
            ))}
          </div>
        </div>
      </section>

      {/* BREADCRUMB */}
      <nav aria-label="Breadcrumb" style={{ background: 'var(--bg)', borderBottom: '1px solid hsl(var(--border))', padding: '9px 20px' }}>
        <div style={{ maxWidth: 'var(--container)', margin: '0 auto', fontSize: 12, color: 'var(--text-muted)', display: 'flex', gap: 6, flexWrap: 'wrap' }}>
          <Link href="/" style={{ color: 'var(--navy)', textDecoration: 'none' }}>Home</Link><span>›</span>
          <Link href="/char-dham-yatra" style={{ color: 'var(--navy)', textDecoration: 'none' }}>Char Dham Yatra</Link><span>›</span>
          <span>2027</span>
        </div>
      </nav>

      <article style={{ maxWidth: 900, margin: '0 auto', padding: '34px 20px 60px' }}>
        <BlogAuthor variant="top" author="dhanesh" />
        <div style={{ fontSize: 12, color: 'var(--text-muted)', marginBottom: 22, textAlign: 'right' }}>
          🗓️ <strong>Last updated:</strong> {SITE.lastUpdated} · Dates revised as announcements come in
        </div>

        <AnswerBox>
          Char Dham Yatra 2027 is expected to open on <strong>8 May 2027</strong>, when Yamunotri and Gangotri unlock on Akshaya Tritiya, followed by Kedarnath around 11 May and Badrinath around 13 May. That is roughly nineteen days later than the 2026 season, which opened on 19 April. The shift is calendar arithmetic, not a policy change: the opening is tied to a lunar date that simply falls later next year.
        </AnswerBox>

        <h2 style={h2} id="dates">Char Dham Yatra 2027 opening dates</h2>
        <p style={p}>
          Two of these four dates you can more or less bank on. The other two are informed estimates, and anyone presenting all four as settled fact is guessing with more confidence than the calendar allows.
        </p>

        <div style={{ overflowX: 'auto', WebkitOverflowScrolling: 'touch', margin: '0 0 10px', border: '1px solid hsl(var(--border))', borderRadius: 12 }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: 560 }}>
            <caption className="sr-only">Expected Char Dham Yatra 2027 opening dates by shrine</caption>
            <thead>
              <tr><th scope="col" style={head}>Dham</th><th scope="col" style={head}>Expected opening</th><th scope="col" style={head}>Certainty</th><th scope="col" style={head}>How it gets fixed</th></tr>
            </thead>
            <tbody>
              {DHAMS_2027.map(d => (
                <tr key={d.dham}>
                  <th scope="row" style={{ ...cell, fontWeight: 700, color: 'var(--navy)' }}>{d.dham}</th>
                  <td style={cell}>{d.open}</td>
                  <td style={cell}>
                    <span style={{ fontSize: 11.5, fontWeight: 700, padding: '2px 9px', borderRadius: 20, background: d.status === 'Tentative' ? '#FEF3C7' : '#DCFCE7', color: d.status === 'Tentative' ? '#92400E' : '#166534' }}>{d.status}</span>
                  </td>
                  <td style={cell}>{d.note}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p style={{ ...p, fontSize: 13, color: 'var(--text-muted)' }}>
          Closing dates follow Diwali and are announced during the season. Expect them later in November 2027 than the 2026 closings, for the same reason the opening moved.
        </p>

        <h2 style={h2} id="why-later">Why 2027 starts three weeks later than 2026</h2>
        <p style={p}>
          This is the part almost nobody explains, and it causes real planning mistakes. Yamunotri and Gangotri do not open on a fixed calendar day. They open on <strong>Akshaya Tritiya</strong>, a lunar date that drifts against the Gregorian calendar by two to three weeks each year. In 2026 it landed on 19 April. In 2027 it lands on 8 May.
        </p>
        <p style={p}>
          Everything else moves with it. Kedarnath and Badrinath are announced separately, but historically they follow within a few days of the first two, which is why the whole season slides together rather than stretching.
        </p>

        <div style={{ overflowX: 'auto', WebkitOverflowScrolling: 'touch', margin: '0 0 18px', border: '1px solid hsl(var(--border))', borderRadius: 12 }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: 520 }}>
            <caption className="sr-only">Char Dham opening dates compared, 2026 against 2027</caption>
            <thead>
              <tr><th scope="col" style={head}>Dham</th><th scope="col" style={head}>2026 (actual)</th><th scope="col" style={head}>2027 (expected)</th><th scope="col" style={head}>Shift</th></tr>
            </thead>
            <tbody>
              {SHIFT.map(s => (
                <tr key={s.dham}>
                  <th scope="row" style={{ ...cell, fontWeight: 700, color: 'var(--navy)' }}>{s.dham}</th>
                  <td style={cell}>{s.y26}</td>
                  <td style={cell}>{s.y27}</td>
                  <td style={{ ...cell, fontWeight: 700, color: 'var(--teal)' }}>{s.gap}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p style={p}>
          The practical trap: pilgrims who travelled in 2026 often assume next year looks the same and start pencilling in late April leave from work. In 2027 that lands you at Yamunotri before the doors open. I have had families arrive on a date that worked perfectly the previous season and find the shrine still shut.
        </p>

        <h2 style={h2} id="what-changes">What a May start actually changes</h2>
        <p style={p}>
          Mostly for the better, and this is worth understanding rather than just noting the new dates.
        </p>

        <h3 style={h3}>The weather is friendlier</h3>
        <p style={p}>
          An April opening means the first pilgrims of the season walk into genuine cold — near freezing at Kedarnath overnight, with snow still banked along the trek. Starting in May skips that fortnight. Expect roughly 8–18°C at the dhams in the daytime, considerably more comfortable for anyone travelling with elderly parents.
        </p>

        <h3 style={h3}>Snow clearance is further along</h3>
        <p style={p}>
          The approaches to Kedarnath and Gangotri need heavy clearing before the season, and in an April opening that work is often finishing right up to the last day. A May start gives crews three extra weeks. Roads and the Gaurikund trek tend to be in better shape for the opening rush.
        </p>

        <h3 style={h3}>The opening crowd lands in peak season</h3>
        <p style={p}>
          Here is the downside. Opening week is always heaving. In 2026 that fell in late April, slightly ahead of the main rush. In 2027 it falls squarely inside May, on top of school holidays and the usual peak. If crowds matter more to you than being early, the first half of June or the post-monsoon September to October window will be calmer.
        </p>

        <h3 style={h3}>Your monsoon buffer shrinks</h3>
        <p style={p}>
          The monsoon does not shift with the lunar calendar. It arrives in the hills around late June regardless. A season that opens nineteen days later has that much less clear weather before the rains, which makes the May and early June slots more contested than usual. If you want a pre-monsoon yatra in 2027, the booking window is genuinely tighter.
        </p>

        <BlogCTA
          variant="note"
          intent="char-dham"
          eyebrow="Planning 2027 already?"
          line="We are holding 2027 dates now. The base-town rooms go long before the vehicles do."
          href="/char-dham-yatra"
          linkLabel="See the packages"
        />

        <h2 style={h2} id="official">When these dates become official</h2>
        <p style={p}>
          Each shrine has its own announcement ritual, and knowing which is which tells you how much to trust a date you read anywhere, including here.
        </p>
        <ul style={{ margin: '0 0 18px', paddingLeft: 22, color: '#334155', fontSize: 15.5, lineHeight: 1.85 }}>
          <li style={{ marginBottom: 8 }}><strong>Yamunotri and Gangotri</strong> — no announcement needed in the usual sense. They open on Akshaya Tritiya, so once you know the tithi you know the date. 8 May 2027.</li>
          <li style={{ marginBottom: 8 }}><strong>Badrinath</strong> — declared on <strong>Basant Panchami</strong>, around February 2027, at the Narendranagar royal palace.</li>
          <li style={{ marginBottom: 8 }}><strong>Kedarnath</strong> — declared on <strong>Maha Shivratri</strong>, around March 2027, by the Badrinath Kedarnath Temple Committee at Omkareshwar Temple in Ukhimath, where the deity spends the winter.</li>
        </ul>
        <p style={p}>
          So the sequence is Badrinath first, then Kedarnath, then the season. Until Basant Panchami passes, every 2027 Kedarnath and Badrinath date on the internet is an estimate. We will update this page as each announcement lands.
        </p>

        <h2 style={h2} id="registration">Char Dham Yatra 2027 registration</h2>
        <p style={p}>
          Registration is mandatory and free. Without it you are not getting into any of the four temples, and the checkposts do enforce it. It is done through the Uttarakhand government portal at{' '}
          <a href="https://registrationandtouristcare.uk.gov.in" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--teal)', fontWeight: 600 }}>registrationandtouristcare.uk.gov.in</a>{' '}
          with Aadhaar verification, or in person at the biometric counters in Haridwar, Rishikesh and Rudraprayag.
        </p>
        <p style={p}>
          The 2027 portal is not open yet. Based on how the last several seasons have run, expect it to go live somewhere between late March and mid April 2027 — a few weeks before the 8 May opening. When it opens, register early: the state caps daily pilgrim numbers at each shrine, and the popular dates fill quickly.
        </p>
        <p style={p}>
          Anyone selling you a paid &ldquo;registration service&rdquo; is selling you something that costs nothing. We handle registration for our own pilgrims as part of the package, at no charge, because it is a form, not a product. If you want the full walk-through, the{' '}
          <Link href="/blog/char-dham-yatra-registration" style={{ color: 'var(--teal)', fontWeight: 600 }}>step-by-step registration guide</Link>{' '}
          covers documents, the 55-plus medical rule and the common mistakes.
        </p>

        <h2 style={h2} id="cost">What Char Dham Yatra 2027 will cost</h2>
        <p style={p}>
          Nobody can publish real 2027 package prices yet, and operators who do are quoting a number they will revise. Package rates get set once two things are known: the state-notified vehicle rates for the season, and the hotel tariffs the base towns settle on. Both land early in the year.
        </p>
        <p style={p}>
          What I can give you is the current baseline. Our 2026 road packages start at <strong>₹13,900 per person</strong> for the 9-night, 10-day circuit from Haridwar, all-inclusive — vehicle, hotels, meals, guide, registration help. Looking at how the last several seasons moved, a single-digit percentage rise for 2027 would be normal. A jump much beyond that usually means fuel or hotel tariffs did something unusual.
        </p>
        <p style={p}>
          For the full breakdown of where the money actually goes, the{' '}
          <Link href="/blog/char-dham-yatra-cost" style={{ color: 'var(--teal)', fontWeight: 600 }}>Char Dham cost guide</Link>{' '}
          itemises every line, and{' '}
          <Link href="/blog/char-dham-yatra-budget-vs-premium" style={{ color: 'var(--teal)', fontWeight: 600 }}>budget versus premium</Link>{' '}
          explains what the extra spend buys you on this particular route.
        </p>

        <h2 style={h2} id="when-to-book">When to book for 2027</h2>
        <p style={p}>
          The instinct is to wait for official dates. On this route that instinct costs you the good rooms.
        </p>
        <p style={p}>
          Understand where the real constraint sits. Vehicles are not scarce — we can put another Innova or Tempo Traveller on the road. Hotel rooms in Barkot, Uttarkashi and Guptkashi are scarce, because those are small towns with a finite number of decent properties, and operators pre-block them months ahead. By the time Kedarnath is announced on Maha Shivratri, the better rooms for the opening weeks are largely spoken for.
        </p>
        <p style={p}>
          For a May or early June 2027 departure, six to eight months ahead is normal rather than early. Yamunotri and Gangotri are locked to 8 May regardless, so you can commit to that end of the circuit with confidence right now and keep a day or two of flexibility in case Kedarnath lands differently than expected.
        </p>

        <h2 style={h2} id="paa">People also ask</h2>
        <PeopleAlsoAsk items={PAA} />

        <h2 style={h2} id="faq">Char Dham Yatra 2027 FAQ</h2>
        <FAQAccordion faqs={FAQS} />

        <h2 style={h2} id="related">Keep planning</h2>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, margin: '0 0 8px' }}>
          {[
            ['Char Dham packages', '/char-dham-yatra'],
            ['Registration guide', '/blog/char-dham-yatra-registration'],
            ['Cost breakdown', '/blog/char-dham-yatra-cost'],
            ['Best time to go', '/blog/best-time-char-dham'],
            ['Route map & distances', '/char-dham-yatra-route-map'],
            ['Hemkund Sahib 2027', '/hemkund-sahib-yatra'],
            ['Weather month by month', '/blog/char-dham-weather-guide'],
            ['Do Dham option', '/do-dham-yatra'],
          ].map(([label, href]) => (
            <Link key={href} href={href} style={{ fontSize: 13, fontWeight: 600, color: 'var(--navy)', background: 'var(--navy-light)', border: '1px solid hsl(var(--border))', borderRadius: 8, padding: '7px 13px', textDecoration: 'none' }}>
              {label} →
            </Link>
          ))}
        </div>

        <BlogAuthor variant="bottom" author="dhanesh" />
        <BlogCTA variant="footer" intent="char-dham" />
      </article>
    </>
  );
}
