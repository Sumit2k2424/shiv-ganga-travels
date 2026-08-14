import Link from 'next/link';

import { SITE } from '@/data/packages';
import { VEHICLES, VEHICLE_MATRIX, REVIEWS, ROUTE } from '@/data/experience';
import {
  getPublishedDestinations, getRoutesToDestination, getRoutesFromOrigin,
  routeFrom, routeTo, routeLowestFare, getExpert,
} from '@/data/cabs';

import Icon from '@/components/Icon';
import AnswerBox from '@/components/AnswerBox';
import CabBookingWizard from '@/components/CabBookingWizard';
import RouteMap from '@/components/lux/RouteMap';
import WhyBookDirect from '@/components/lux/WhyBookDirect';
import { Section, SectionHead, Reveal, Pill, Eyebrow } from '@/components/lux/primitives';
import { VehicleShowcase, ReviewsWall, FaqList } from '@/components/lux/PackageSections';
import {
  FactPills, VerifiedStrip, FareTable, InclusionsGrid, CancellationTerms,
  RoadRules, OperatorCard, CabLinkMesh, CabCTA,
} from '@/components/cabs/CabSections';
import { JsonLd, breadcrumb, faqPage } from '@/components/cabs/cabSchema';

const URL = `${SITE.baseUrl}/char-dham-yatra-cab-booking`;

export const metadata = {
  title: { absolute: `Char Dham Yatra Cab Booking ${SITE.season} | Full Circuit from ₹18,000 | Fixed Fare` },
  description:
    `Book a cab for the full Char Dham circuit ${SITE.season} — Innova Crysta, Ertiga, Tempo Traveller from Haridwar. Fixed all-inclusive rates from ₹18,000, hill-experienced drivers, Green Card vehicles. Operator since 2010.`,
  keywords: [
    'char dham yatra cab booking', `char dham taxi ${SITE.season}`, 'char dham yatra car rental',
    'innova crysta char dham', 'tempo traveller char dham', 'char dham cab fare from haridwar',
  ],
  alternates: { canonical: URL },
  openGraph: {
    title: `Char Dham Yatra Cab Booking ${SITE.season} — All Vehicles from Haridwar`,
    description: 'Full Char Dham circuit by road. Fixed all-inclusive fares, our own vehicles, hill-experienced drivers.',
    url: URL, type: 'website', siteName: SITE.name, locale: 'en_IN',
  },
  twitter: {
    card: 'summary_large_image',
    title: `Char Dham Yatra Cab Booking ${SITE.season}`,
    description: 'Full Char Dham circuit by road. Fixed all-inclusive fares from ₹18,000.',
  },
};

/* Full-circuit rates — priced per trip, not per km, because the whole
   point of the circuit booking is that the vehicle stays with you. */
const CIRCUIT_FARES = [
  ['Swift Dzire', '4', '₹18,000–₹24,000'],
  ['Maruti Ertiga', '6', '₹22,000–₹28,000'],
  ['Innova Crysta', '6', '₹26,000–₹32,000'],
  ['Innova HyCross', '6', '₹30,000–₹38,000'],
  ['Tempo Traveller (12)', '12', '₹38,000–₹46,000'],
];

const CIRCUIT_FAQS = [
  ['What is the cab fare for the full Char Dham Yatra from Haridwar?',
   'The whole circuit runs ₹18,000–₹24,000 in a Swift Dzire, ₹26,000–₹32,000 in an Innova Crysta and ₹38,000–₹46,000 in a 12-seater Tempo Traveller. That is the vehicle for the entire 10–12 day trip including fuel, driver, tolls and state taxes — not a per-day rate.'],
  ['Which vehicle is best for the Char Dham circuit?',
   'Innova Crysta for families of four to six — it has the best suspension on the Rudraprayag–Guptkashi stretch and it is what we put senior travellers in. Tempo Traveller for groups of eight and up. A sedan is fine for a couple, but the boot is small, so pack soft duffels.'],
  ['Can I book only the cab, without hotels and meals?',
   'Yes. Cab-only is a normal booking here — plenty of people arrange their own stays, or already have ashram accommodation. You get the vehicle, the driver and everything the fare covers, and nothing else is bundled in.'],
  ['How many days does the full Char Dham circuit take by road?',
   'Ten to twelve days from Haridwar covering all four dhams. Anything advertised under nine days is either skipping a dham or assuming a helicopter leg at Kedarnath.'],
  ['What happens if a landslide blocks the road?',
   'It happens, particularly July to September. Our drivers know the alternate routes and we watch the BRO and district updates daily. If a road closes entirely we hold you at a safe halt rather than pushing through — and any extra night is quoted before it happens, not billed afterwards.'],
  ['Is the same driver with us for the whole trip?',
   'Yes. One vehicle and one driver from the first pickup to the final drop. Changing drivers mid-circuit is how the aggregator model works; it is not how ours does.'],
];

export default function CharDhamCabBooking() {
  const expert = getExpert();
  const dhams = getPublishedDestinations().filter((d) => d.kind === 'dham');
  const haridwarRoutes = getRoutesFromOrigin('haridwar');

  const schema = [
    {
      '@context': 'https://schema.org',
      '@type': 'TaxiService',
      name: 'Char Dham Yatra Cab Booking 2026',
      description: 'Full Char Dham circuit by road from Haridwar — Yamunotri, Gangotri, Kedarnath and Badrinath — in a private vehicle with a hill-experienced driver.',
      url: URL,
      provider: {
        '@type': 'TravelAgency',
        '@id': `${SITE.baseUrl}/#organization`,
        name: SITE.name,
        url: SITE.baseUrl,
        telephone: SITE.phone,
      },
      areaServed: ['Haridwar', 'Yamunotri', 'Gangotri', 'Kedarnath', 'Badrinath'].map((n) => ({ '@type': 'Place', name: n })),
      offers: {
        '@type': 'AggregateOffer',
        priceCurrency: 'INR',
        lowPrice: '18000',
        highPrice: '46000',
        offerCount: String(CIRCUIT_FARES.length),
        url: URL,
      },
    },
    faqPage(CIRCUIT_FAQS),
    breadcrumb([['Home', '/'], ['Cabs', '/cabs'], ['Char Dham Cab Booking', '/char-dham-yatra-cab-booking']]),
  ];

  const linkGroups = [
    { label: 'The four dhams, one at a time', links: dhams.map((d) => [`Cabs to ${d.name}`, `/cabs/to/${d.slug}`]) },
    { label: 'Single-leg routes from Haridwar', links: haridwarRoutes.slice(0, 6).map((r) => [`${routeFrom(r)} → ${routeTo(r)}`, `/cabs/${r.slug}`]) },
    { label: 'Planning the yatra', links: [
      ['Char Dham Yatra packages', '/char-dham-yatra'],
      ['Registration 2026', '/blog/char-dham-yatra-registration'],
      ['Opening dates 2026', '/blog/char-dham-yatra-opening-dates-2026'],
      ['Road status', '/char-dham-road-status'],
      ['Route map', '/char-dham-yatra-route-map'],
    ]},
  ];

  return (
    <div className="lux-noscroll-x">
      <JsonLd items={schema} />

      {/* ── Hero ── */}
      <Section tone="ink">
        <div style={{ maxWidth: 820, margin: '0 auto', textAlign: 'center' }}>
          <nav aria-label="Breadcrumb" style={{ marginBottom: 20 }}>
            <ol style={{ display: 'flex', gap: 8, justifyContent: 'center', flexWrap: 'wrap', listStyle: 'none', margin: 0, padding: 0, fontSize: 12, color: 'rgba(255,255,255,0.55)' }}>
              <li><Link href="/" style={{ color: 'inherit' }}>Home</Link></li>
              <li aria-hidden="true">›</li>
              <li><Link href="/cabs" style={{ color: 'inherit' }}>Cabs</Link></li>
              <li aria-hidden="true">›</li>
              <li aria-current="page">Char Dham Cab Booking</li>
            </ol>
          </nav>
          <Reveal variant="fade"><Pill tone="gold">Full circuit · fixed fare · 2026 season</Pill></Reveal>
          <Reveal>
            <h1 className="lux-display lux-display--xl" style={{ color: '#fff', margin: '22px 0 16px' }}>
              Char Dham Yatra <span className="lux-accent">cab booking</span>
            </h1>
          </Reveal>
          <Reveal>
            <p className="lux-lede" style={{ color: 'rgba(255,255,255,0.74)', margin: '0 auto' }}>
              One vehicle, one driver, all four dhams. Priced for the whole trip rather than by the kilometre.
            </p>
          </Reveal>
          <FactPills items={[
            ['calendar', '10–12 days'],
            ['route', 'All four dhams'],
            ['rupee', 'from ₹18,000'],
            ['car', 'Haridwar start'],
          ]} />
        </div>
      </Section>

      <WhyBookDirect />

      {/* ── Quick answer ── */}
      <Section tone="paper" wrapWidth="narrow" tight>
        <AnswerBox>
          A cab for the full Char Dham circuit from Haridwar costs <strong>₹18,000–₹24,000</strong> in a sedan,
          <strong> ₹26,000–₹32,000</strong> in an Innova Crysta and <strong>₹38,000–₹46,000</strong> in a 12-seater
          Tempo Traveller — for the entire 10–12 day trip, with fuel, driver, tolls and state taxes included.
          The same vehicle and driver stay with you from the first pickup to the final drop.
        </AnswerBox>
        <VerifiedStrip expert={expert} subject="the full Char Dham circuit" />
        <p className="lux-body" style={{ marginTop: 22 }}>
          We run the Char Dham circuit by road out of Haridwar, Rishikesh, Dehradun and Delhi. Every vehicle is our
          own, carries a current Green Card, and is driven by someone who works these roads through the whole season
          rather than being pulled in from the plains in May. You can book the cab on its own if you have your stays
          arranged, or as part of a full package — the vehicle and the driver are identical either way.
        </p>
      </Section>

      {/* ── Booking wizard ── */}
      <Section tone="paper-deep" tight>
        <CabBookingWizard />
      </Section>

      {/* ── Circuit fares ── */}
      <Section tone="paper">
        <SectionHead
          eyebrow="What it costs"
          title="Full circuit rates by vehicle"
          lede="Whole-trip pricing for the standard 10–12 day circuit covering Yamunotri, Gangotri, Kedarnath and Badrinath. Not a daily rate, and not a per-kilometre one."
        />
        <Reveal>
          <FareTable
            fares={CIRCUIT_FARES}
            caption="Indicative 2026 bands for the complete circuit from Haridwar. Starting from Delhi, Jaipur or another city adds the transfer leg at both ends — we quote it as one number. Every enquiry gets a fixed all-in price."
          />
        </Reveal>
      </Section>

      {/* ── What the fare covers ── */}
      <Section tone="paper-deep">
        <SectionHead
          eyebrow="No surprises"
          title="Exactly what the fare covers"
          lede="Both columns, published. On a twelve-day circuit the exclusions matter more than they do on a single transfer, so here they are up front."
        />
        <InclusionsGrid />
      </Section>

      {/* ── The circuit map ── */}
      <Section tone="paper">
        <SectionHead
          eyebrow="The circuit"
          title="Where the vehicle actually goes"
          lede="Haridwar out to the four dhams and back. Scroll to trace it."
        />
        <div className="lux-map-stacked">
          <RouteMap nodes={ROUTE.nodes} category="char-dham" title="The Char Dham circuit" />
        </div>
      </Section>

      {/* ── The four dhams ── */}
      <Section tone="paper-deep">
        <SectionHead
          eyebrow="Leg by leg"
          title="What each dham demands of the vehicle"
          lede="Two of the four have a road to the temple. The other two end at a trailhead, and knowing which is which is most of the planning."
        />
        <div className="lux-grid lux-grid--4" data-lux-stagger="">
          {dhams.map((d) => {
            const routes = getRoutesToDestination(d.slug);
            return (
              <Link key={d.slug} href={`/cabs/to/${d.slug}`} className="lux-card lux-lift" style={{ padding: 20, textDecoration: 'none', color: 'inherit' }} data-cursor="View">
                <div style={{ fontWeight: 700, fontSize: '1rem', color: 'var(--ink)' }}>{d.name}</div>
                <div className="lux-caption" style={{ marginTop: 6 }}>{d.altitude}</div>
                <p className="lux-body" style={{ fontSize: '0.82rem', marginTop: 10 }}>
                  Road ends at {d.lastMotorable}. {d.trek && d.trek !== 'None' ? `Then ${d.trek.toLowerCase()}.` : 'No trek.'}
                </p>
                {routes.length > 0 && (
                  <div className="lux-caption" style={{ marginTop: 10 }}>
                    from {routeLowestFare(routes[0])} as a single leg
                  </div>
                )}
              </Link>
            );
          })}
        </div>
      </Section>

      {/* ── Fleet ── */}
      <Section tone="paper">
        <SectionHead
          eyebrow="The fleet"
          title="The vehicle you live in for twelve days"
          lede="On a circuit this long the seat matters more than the badge. This is what each one is actually like on the hill sections."
        />
        <Reveal><VehicleShowcase vehicles={VEHICLES} matrix={VEHICLE_MATRIX} /></Reveal>
      </Section>

      {/* ── Rules of the road ── */}
      <Section tone="paper-deep">
        <SectionHead eyebrow="Before you book" title="Rules of the road up here" />
        <RoadRules />
      </Section>

      {/* ── Cancellation ── */}
      <Section tone="paper" wrapWidth="narrow">
        <SectionHead eyebrow="If plans change" title="Cancellation, in plain terms" />
        <Reveal><CancellationTerms /></Reveal>
      </Section>

      {/* ── Reviews ── */}
      <Section tone="paper-deep">
        <SectionHead
          eyebrow="Real stories"
          title="What our passengers say"
          aside={
            <a href={REVIEWS.url} target="_blank" rel="nofollow noopener noreferrer" className="lux-link">
              All {REVIEWS.count} on Google <Icon name="external" size={13} />
            </a>
          }
        />
        <Reveal><ReviewsWall reviews={REVIEWS} /></Reveal>
      </Section>

      {/* ── FAQ ── */}
      <Section tone="paper" wrapWidth="narrow">
        <SectionHead eyebrow="Have questions?" title="Char Dham cab booking, answered" />
        <FaqList faqs={CIRCUIT_FAQS.map(([q, a]) => ({ q, a }))} />
      </Section>

      {/* ── Operator ── */}
      <Section tone="paper-deep" wrapWidth="narrow">
        <Reveal><OperatorCard /></Reveal>
      </Section>

      {/* ── Link mesh ── */}
      <Section tone="paper">
        <SectionHead eyebrow="Keep looking" title="Routes, dhams and guides" />
        <CabLinkMesh groups={linkGroups} />
      </Section>

      {/* ── CTA ── */}
      <Section tone="ink">
        <CabCTA
          title="Book your Char Dham cab"
          lede="Tell us your dates, how many of you there are, and where you want to start. One fixed all-in fare back, usually within two hours."
          message="Namaste! I want to book a cab for Char Dham Yatra 2026. Please share vehicle options and rates."
        />
      </Section>
    </div>
  );
}
