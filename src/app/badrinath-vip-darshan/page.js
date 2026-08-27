import Link from 'next/link';
import { SITE } from '@/data/packages';
import PeopleAlsoAsk from '@/components/PeopleAlsoAsk';
import AnswerBox from '@/components/AnswerBox';
import BlogAuthor from '@/components/BlogAuthor';
import FAQAccordion from '@/components/FAQAccordion';
import BlogCTA from '@/components/BlogCTA';
import { h2, h3, p } from '@/lib/prose';

export const metadata = {
  title: { absolute: `Badrinath VIP Darshan ${SITE.season} — Ticket Price & Online Booking` },
  description: 'Badrinath VIP darshan ticket price and online booking — special darshan from ₹300, puja-linked priority access, the BKTC portal, timings and the free slot that beats most paid shortcuts.',
  keywords: ['badrinath vip darshan', 'badrinath special darshan', 'badrinath puja booking', 'badrinath maha abhishek', 'badrinath darshan timings', 'badrinath temple vip pass', 'badrinath vip darshan ticket price', 'badrinath vip darshan tickets online booking', 'badrinath special darshan price', 'badrinath vip darshan booking'],
  alternates: { canonical: `${SITE.baseUrl}/badrinath-vip-darshan` },
  openGraph: {
    title: `Badrinath VIP Darshan ${SITE.season} — Ticket Price, Online Booking & Timings`,
    description: 'What Badrinath VIP darshan costs, what it actually gets you, which puja to book on the BKTC portal, and how to time your visit so the queue is short.',
    url: `${SITE.baseUrl}/badrinath-vip-darshan`,
    type: 'article',
    images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: 'Badrinath VIP Darshan and Special Puja Guide' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: `Badrinath VIP Darshan ${SITE.season} — Ticket Price & Online Booking`,
    description: 'The price, the pujas, the portal, the timings — and the free trick that beats most paid shortcuts.',
    images: [{ url: '/opengraph-image', alt: 'Badrinath VIP Darshan' }],
  },
};

const PUJAS = [
  { name: 'Maha Abhishek', when: 'Early morning, ~4:30 am', what: 'The first ritual of the day. You are present in the sanctum while the deity is bathed, before general darshan begins.' },
  { name: 'Abhishek Puja', when: 'Early morning', what: 'Performed alongside Maha Abhishek. Seated participation, limited numbers per day.' },
  { name: 'Ved Path', when: 'Morning', what: 'Recitation of the Vedas in your name or your family name.' },
  { name: 'Geeta Path', when: 'Morning', what: 'Bhagavad Gita recitation, commonly booked for ancestors.' },
  { name: 'Vishnu Sahasranamam', when: 'Morning', what: 'The thousand names of Vishnu, chanted on your behalf.' },
  { name: 'Swarna Aarti', when: 'Evening', what: 'The evening aarti. Among the most sought-after slots in peak season.' },
  { name: 'Shayan Aarti', when: 'Night, before closing', what: 'The last ritual before the temple shuts for the night. Quietest and, for many, the most affecting.' },
];

const PAA = [
  { q: 'Is there VIP darshan at Badrinath?',
    a: 'Yes, but it is not a queue-jump pass in the way people expect. At Badrinath the fast route is to book a named puja through the Badrinath Kedarnath Temple Committee, which places you inside the ritual rather than in the general line. There is also a special darshan ticket sold at the counter on the day. Neither is an unlimited skip-the-line product — the sanctum is small and the numbers per slot are capped.' },
  { q: 'How do I book Badrinath special puja online?',
    a: 'Through the official Badrinath Kedarnath Temple Committee portal at badrinath-kedarnath.gov.in. Slots for the early-morning Maha Abhishek and evening aartis open ahead of the season and go quickly for peak dates. Booking is in the pilgrim name and you carry ID matching it.' },
  { q: 'What are Badrinath darshan timings?',
    a: 'The temple typically opens around 4:30 am for Maha Abhishek, runs general darshan through the morning, closes for a few hours in the afternoon, then reopens in the evening until the Shayan Aarti at night. Exact timings shift a little across the season and on festival days.' },
  { q: 'How long is the general darshan queue at Badrinath?',
    a: 'Anywhere from twenty minutes to four hours, almost entirely depending on when you go. Opening week and the mid-May to mid-June peak are the worst. Early morning before 7 am and the last hour of the evening are consistently the shortest, and both are free.' },
  { q: 'Do I need to book VIP darshan in advance for Badrinath?',
    a: 'For a named puja, yes — the good slots go weeks ahead in peak season. For the counter-issued special darshan, no, but availability on the day is not guaranteed and it sells out on busy mornings.' },
  { q: 'Is VIP darshan worth it at Badrinath?',
    a: 'It depends what you want. If you want a ritual you take part in and remember, book the Maha Abhishek — it is genuinely different from filing past. If you only want to avoid a queue, going at 6 am on an ordinary weekday costs nothing and usually works just as well.' },
];

const FAQS = [
  { q: 'What is the difference between VIP darshan and special puja at Badrinath?',
    a: 'They are different products that get conflated. Special darshan is a paid ticket that puts you in a shorter line — you still walk past the deity. A special puja books you into a named ritual such as Maha Abhishek or Ved Path, performed in your name, where you are seated and present for it. The puja is the one people remember; the ticket just saves time.',
    plain: 'Special darshan is a paid shorter queue. A special puja books you into a named ritual in your name with seated participation. They are different things.' },
  { q: 'How do I book Badrinath VIP darshan or puja?',
    a: 'Online through the Badrinath Kedarnath Temple Committee at badrinath-kedarnath.gov.in, which is the only official channel. Bookings are in the pilgrim name, so carry matching photo ID. Anyone offering guaranteed VIP access outside that portal is selling you something the temple did not authorise.',
    plain: 'Book at badrinath-kedarnath.gov.in, the official BKTC portal. Bookings are name-matched; carry photo ID. It is the only authorised channel.' },
  { q: 'What does Badrinath special puja cost?',
    a: 'Rates are set by the temple committee and revised each season, so any figure printed on a travel website ages badly. Check the current rate on the BKTC portal at the time you book. As a rough shape, the early-morning abhishek pujas sit at the top of the range and the recitation pujas such as Ved Path and Geeta Path are considerably cheaper. We book on behalf of our pilgrims at the temple rate with nothing added.',
    plain: 'Rates are set by the temple committee and revised each season — check the current figure on the BKTC portal. Abhishek pujas cost most; recitations such as Ved Path cost less.' },
  { q: 'What time should I reach the temple for Maha Abhishek?',
    a: 'Be at the gate by 4 am for a 4:30 am ritual. It is cold and dark and you will be glad of a warm layer, but this is the calmest hour at Badrinath and the sanctum is nearly empty compared with mid-morning.',
    plain: 'Reach the gate by about 4 am for the 4:30 am Maha Abhishek. Carry a warm layer — it is cold and dark at that hour.' },
  { q: 'Can senior citizens get priority darshan at Badrinath?',
    a: 'Badrinath is the kindest of the four dhams in this respect, because the temple is right beside the road — no trek, unlike Kedarnath or Yamunotri. Assistance is generally available for elderly and differently-abled pilgrims at the temple. Combined with an early-morning slot, most senior pilgrims manage darshan without difficulty.',
    plain: 'Badrinath requires no trek — the temple is beside the road — and assistance is generally available for elderly and differently-abled pilgrims.' },
  { q: 'Is photography allowed inside Badrinath temple?',
    a: 'Not inside the sanctum. Phones and cameras are restricted in the inner temple and there are lockers and counters outside for deposits. Photography of the temple exterior and the surroundings is fine. Enforcement tightened across the Char Dham shrines in recent seasons, so do not plan on discretion.',
    plain: 'Photography is not allowed inside the sanctum. Deposit phones and cameras outside; exterior photography is permitted.' },
  { q: 'Should I book puja before or after Tapt Kund?',
    a: 'Bathe in Tapt Kund first — the hot spring below the temple — then go for darshan. That is the traditional order and it also means you are not queuing wet in cold air. In the pre-dawn slot the kund is a genuine pleasure at around 40°C while the air outside is close to freezing.',
    plain: 'Bathe at Tapt Kund first, then take darshan. That is the traditional order and more comfortable in the cold.' },
  { q: 'Can you arrange Badrinath VIP darshan as part of a package?',
    a: 'Yes. We book pujas through the official portal for pilgrims travelling with us and time the itinerary so you reach Badrinath the evening before rather than the same morning, which is what actually makes an early slot workable. Arriving at 11 am after a long drive and hoping for a short queue is how most people end up disappointed.',
    plain: 'Yes — we book through the official portal and schedule arrival the evening before, which is what makes an early-morning slot realistic.' },
];

function Schema() {
  const article = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    '@id': `${SITE.baseUrl}/badrinath-vip-darshan#article`,
    headline: 'Badrinath VIP Darshan — Special Puja, Booking and Timings',
    description: 'How VIP and special darshan works at Badrinath, the puja list, official booking channel, timings and the quietest slots.',
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
    mainEntityOfPage: `${SITE.baseUrl}/badrinath-vip-darshan`,
  };

  const faq = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [...PAA, ...FAQS].map(f => ({
      '@type': 'Question', name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.plain || f.a },
    })),
  };

  const crumbs = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: SITE.baseUrl },
      { '@type': 'ListItem', position: 2, name: 'Badrinath Temple', item: `${SITE.baseUrl}/badrinath-temple` },
      { '@type': 'ListItem', position: 3, name: 'Badrinath VIP Darshan', item: `${SITE.baseUrl}/badrinath-vip-darshan` },
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

export default function BadrinathVipDarshan() {
  return (
    <>
      <Schema />

      <section style={{ background: 'linear-gradient(145deg,var(--navy) 0%,#1A3E75 55%,var(--gold-dark) 100%)', padding: '54px 20px 42px' }}>
        <div style={{ maxWidth: 880, margin: '0 auto', textAlign: 'center' }}>
          <span style={{ background: 'rgba(232,146,10,0.18)', color: '#FFD166', fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', padding: '5px 16px', borderRadius: 100, display: 'inline-block', marginBottom: 14 }}>
            Darshan Guide · Badrinath
          </span>
          <h1 style={{ color: '#fff', fontFamily: 'var(--font-display)', fontSize: 'clamp(1.7rem,4vw,2.6rem)', fontWeight: 800, letterSpacing: '-0.025em', marginBottom: 14, lineHeight: 1.22 }}>
            Badrinath VIP Darshan
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: 15.5, lineHeight: 1.75, maxWidth: 700, margin: '0 auto 20px' }}>
            What VIP darshan at Badrinath actually gets you, which puja is worth booking, how to do it through the official portal, and the free timing trick that beats most paid shortcuts.
          </p>
        </div>
      </section>

      <nav aria-label="Breadcrumb" style={{ background: 'var(--bg)', borderBottom: '1px solid hsl(var(--border))', padding: '9px 20px' }}>
        <div style={{ maxWidth: 'var(--container)', margin: '0 auto', fontSize: 12, color: 'var(--text-muted)', display: 'flex', gap: 6, flexWrap: 'wrap' }}>
          <Link href="/" style={{ color: 'var(--navy)', textDecoration: 'none' }}>Home</Link><span>›</span>
          <Link href="/badrinath-temple" style={{ color: 'var(--navy)', textDecoration: 'none' }}>Badrinath Temple</Link><span>›</span>
          <span>VIP Darshan</span>
        </div>
      </nav>

      <article style={{ maxWidth: 900, margin: '0 auto', padding: '34px 20px 60px' }}>
        <BlogAuthor variant="top" author="dhanesh" />
        <div style={{ fontSize: 12, color: 'var(--text-muted)', marginBottom: 22, textAlign: 'right' }}>
          🗓️ <strong>Last updated:</strong> {SITE.lastUpdated} · Verified for current season
        </div>

        <AnswerBox>
          Badrinath does not sell a straightforward VIP queue pass. The real fast route is to book a <strong>named puja</strong> — Maha Abhishek, Ved Path, an evening aarti — through the official Badrinath Kedarnath Temple Committee portal, which seats you inside the ritual instead of in the general line. A counter-issued <strong>special darshan</strong> ticket also exists on the day. Both are capped, and neither beats simply arriving before 7 am on a weekday, which is free.
        </AnswerBox>

        <h2 style={h2} id="how-it-works">How darshan at Badrinath actually works</h2>
        <p style={p}>
          Badrinath is the easiest of the four dhams to reach — the temple stands beside the road, no trek, no pony, no helicopter needed. That accessibility is exactly why the queue can be long. Everybody arrives on wheels, and most of them arrive between nine and noon.
        </p>
        <p style={p}>
          There are three ways in. <strong>General darshan</strong> is free and is what most pilgrims do. <strong>Special darshan</strong> is a paid ticket bought at the counter for a shorter line. A <strong>booked puja</strong> puts you in the sanctum as a participant while the ritual is performed in your name. People say &ldquo;VIP darshan&rdquo; meaning any of the three, which is where the confusion starts.
        </p>

        <h2 style={h2} id="pujas">The pujas you can book</h2>
        <p style={p}>
          These are the rituals the temple committee takes bookings for. Morning abhishek pujas are the most sought after and the hardest to get in peak season.
        </p>

        <div style={{ overflowX: 'auto', WebkitOverflowScrolling: 'touch', margin: '0 0 18px', border: '1px solid hsl(var(--border))', borderRadius: 12 }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: 600 }}>
            <caption className="sr-only">Badrinath temple pujas available for booking, with timing and description</caption>
            <thead>
              <tr><th scope="col" style={head}>Puja</th><th scope="col" style={head}>When</th><th scope="col" style={head}>What it involves</th></tr>
            </thead>
            <tbody>
              {PUJAS.map(x => (
                <tr key={x.name}>
                  <th scope="row" style={{ ...cell, fontWeight: 700, color: 'var(--navy)' }}>{x.name}</th>
                  <td style={cell}>{x.when}</td>
                  <td style={cell}>{x.what}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p style={{ ...p, fontSize: 13.5, color: 'var(--text-muted)' }}>
          Puja rates are set by the temple committee and revised each season, which is why you should take the current figure from the official portal rather than from any travel site — including this one. We book at the temple rate for our own pilgrims and add nothing to it.
        </p>

        <h2 style={h2} id="price">What Badrinath VIP darshan costs</h2>
        <AnswerBox>
          There is no single VIP ticket price at Badrinath, because there is no single VIP ticket.
          Counter-issued <strong>special darshan starts at &#8377;300 per person</strong>. Puja-linked
          access &mdash; the route most people actually mean by VIP &mdash; starts at roughly
          <strong> &#8377;151 for the Kapoor Aarti</strong> and climbs steeply towards the pre-dawn
          abhishek pujas, which are both the most-booked and the most expensive. BKTC revised special-puja
          charges upward for the current season, so older price lists circulating online are out of date.
        </AnswerBox>
        <p style={p}>
          We are deliberately not printing a full rate card. The committee revises these figures between
          seasons, the abhishek rates in particular have moved, and a number frozen into a travel page is a
          number that will be wrong by next April. What we can give you is the shape of it: the recitations
          &mdash; Ved Path, Geeta Path, Vishnu Sahasranamam &mdash; sit at the cheap end, the evening aartis
          in the middle, and Maha Abhishek at the top. Take the live figure from the portal at the moment
          you book.
        </p>
        <p style={p}>
          If you are pricing Kedarnath in the same trip, it is the same committee, the same portal and the
          same logic &mdash; our{' '}
          <Link href="/kedarnath-vip-darshan" style={{ color: 'var(--teal)', fontWeight: 600 }}>Kedarnath VIP darshan guide</Link>{' '}
          carries that side.
        </p>

        <h2 style={h2} id="booking">Booking it properly</h2>
        <p style={p}>
          One official channel: the Badrinath Kedarnath Temple Committee at{' '}
          <a href="https://badrinath-kedarnath.gov.in" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--teal)', fontWeight: 600 }}>badrinath-kedarnath.gov.in</a>.
          Bookings are made in the pilgrim name and you carry photo ID that matches. If somebody is offering you guaranteed VIP entry through a private arrangement, they are selling access the temple has not authorised, and it is the sort of thing that unravels at the gate.
        </p>
        <p style={p}>
          Book the morning slots well ahead for mid-May to mid-June. Outside peak, a week or two is usually enough. The evening Swarna Aarti fills faster than people expect.
        </p>

        <h3 style={h3}>You still need Char Dham registration</h3>
        <p style={p}>
          A puja booking is not a substitute for the state yatra registration, which is separate, free and mandatory at{' '}
          <a href="https://registrationandtouristcare.uk.gov.in" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--teal)', fontWeight: 600 }}>registrationandtouristcare.uk.gov.in</a>.
          Pilgrims occasionally turn up with a puja receipt and no registration, and the checkposts on the way up do not treat one as the other. The{' '}
          <Link href="/blog/char-dham-yatra-registration" style={{ color: 'var(--teal)', fontWeight: 600 }}>registration guide</Link>{' '}
          walks through it.
        </p>

        <BlogCTA
          variant="note"
          intent="badrinath"
          eyebrow="Want the 4:30 am slot?"
          line="It only works if you sleep at Badrinath or Joshimath the night before. We plan the itinerary around it."
          href="/badrinath-tour-package"
          linkLabel="See Badrinath packages"
        />

        <h2 style={h2} id="timing">The free trick that beats most paid shortcuts</h2>
        <p style={p}>
          After fifteen seasons on this route, the single most useful thing I can tell you about Badrinath darshan has nothing to do with tickets: <strong>go early, and sleep close.</strong>
        </p>
        <p style={p}>
          The queue at 6 am on an ordinary weekday is a fraction of what it is at 11 am. It costs nothing. The reason most pilgrims miss it is not the ticket — it is the itinerary. They drive up from Joshimath or further in the morning, reach town at ten or eleven, and join the worst queue of the day already tired.
        </p>
        <p style={p}>
          Stay in Badrinath town or Joshimath the previous night, be at the gate before dawn, bathe at Tapt Kund, take darshan, and you will be having breakfast while the day&apos;s crowd is still on the road. If you also book a Maha Abhishek for that morning, you get the best of both.
        </p>

        <h2 style={h2} id="when">Quietest and busiest times</h2>
        <ul style={{ margin: '0 0 18px', paddingLeft: 22, color: '#334155', fontSize: 15.5, lineHeight: 1.85 }}>
          <li style={{ marginBottom: 8 }}><strong>Busiest</strong> — opening week, and mid-May through mid-June. Weekends throughout the season.</li>
          <li style={{ marginBottom: 8 }}><strong>Quietest</strong> — September and October, once the monsoon clears. Fewer people, better air, and the valley at its best.</li>
          <li style={{ marginBottom: 8 }}><strong>Best hours any day</strong> — before 7 am, and the final hour of the evening before Shayan Aarti.</li>
        </ul>
        <p style={p}>
          Note that in 2027 the season opens later, on roughly 13 May for Badrinath, which pushes the opening-week crush into mid-May. Details on the{' '}
          <Link href="/char-dham-yatra-2027" style={{ color: 'var(--teal)', fontWeight: 600 }}>Char Dham 2027 page</Link>.
        </p>

        <h2 style={h2} id="paa">People also ask</h2>
        <PeopleAlsoAsk items={PAA} />

        <h2 style={h2} id="faq">Badrinath VIP darshan FAQ</h2>
        <FAQAccordion faqs={FAQS} />

        <h2 style={h2} id="related">Plan the rest of Badrinath</h2>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, margin: '0 0 8px' }}>
          {[
            ['Badrinath temple guide', '/badrinath-temple'],
            ['Badrinath packages', '/badrinath-tour-package'],
            ['Badrinath hotels', '/badrinath-hotels'],
            ['How to reach Badrinath', '/how-to-reach-badrinath'],
            ['Mana village', '/blog/mana-village-badrinath'],
            ['Kedarnath VIP darshan', '/kedarnath-vip-darshan'],
            ['Online puja booking', '/online-puja-booking'],
          ].map(([label, href]) => (
            <Link key={href} href={href} style={{ fontSize: 13, fontWeight: 600, color: 'var(--navy)', background: 'var(--navy-light)', border: '1px solid hsl(var(--border))', borderRadius: 8, padding: '7px 13px', textDecoration: 'none' }}>
              {label} →
            </Link>
          ))}
        </div>

        <BlogAuthor variant="bottom" author="dhanesh" />
        <BlogCTA variant="footer" intent="badrinath" />
      </article>
    </>
  );
}
