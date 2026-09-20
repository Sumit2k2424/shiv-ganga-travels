import Link from 'next/link';
import { SITE } from '@/data/packages';
import { VEHICLES, VEHICLE_MATRIX, REVIEWS, ROUTE } from '@/data/experience';
import {
  getOriginsByRegion, getRoutesFromOrigin, routeTo, routeLowestFare,
  getPublishedRoutes, getPublishedOrigins, getPublishedDestinations,
  getRoutesToDestination, getExpert,
} from '@/data/cabs';
import { FLEET as LOCAL_FLEET } from '@/data/localTaxi';
import AnswerBox from '@/components/AnswerBox';
import CabHero from '@/components/cabs/CabHero';
import CabBookingWizard from '@/components/CabBookingWizard';
import RouteMap from '@/components/lux/RouteMap';
import WhyBookDirect from '@/components/lux/WhyBookDirect';
import { VehicleShowcase, ReviewsWall, FaqList } from '@/components/lux/PackageSections';
import { Section, SectionHead, Reveal, Eyebrow } from '@/components/lux/primitives';
import {
  VerifiedStrip, FareTable, InclusionsGrid, CancellationTerms,
  RoadRules, OperatorCard, CabLinkMesh, CabCTA,
} from '@/components/cabs/CabSections';
import { JsonLd, breadcrumb } from '@/components/cabs/cabSchema';
import Icon from '@/components/Icon';

/* The one taxi page.

   Until 20 Sep 2026 this hub and /char-dham-yatra-cab-booking were two
   pages with the same wizard, fleet, route map, reviews and FAQ list, and
   only their fare table to tell them apart (0.28 text containment; 0 and 2
   clicks in 90 days). The circuit-hire content — whole-trip rates, what the
   fare covers, the leg-by-leg cards, road rules, cancellation — now lives
   here above the one-way table, and the old URL 301s to this one. */

const URL = `${SITE.baseUrl}/cabs`;

export const metadata = {
  title: { absolute: 'Char Dham Cab Booking & Uttarakhand Taxi Fares | Haridwar' },
  description: `Full Char Dham circuit cab from ₹18,000 for the whole 10–12 day trip, or one-way fares to every dham and hill station from Haridwar, Rishikesh and Dehradun. Fixed all-in prices, own vehicles, hill-experienced drivers.`,
  keywords: [
    'char dham yatra cab booking', 'char dham taxi from haridwar', 'innova crysta char dham', 'tempo traveller char dham',
    'haridwar cab booking', 'uttarakhand taxi service', 'haridwar to kedarnath taxi fare', 'dehradun to badrinath taxi fare',
  ],
  alternates: { canonical: URL },
  openGraph: {
    title: 'Char Dham Cab Booking & Uttarakhand Taxi Fares',
    description: 'Full circuit from ₹18,000, or one-way fares to every dham and hill station. Fixed prices, own vehicles, hill drivers.',
    url: URL, type: 'website', siteName: SITE.name, locale: 'en_IN',
    images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: `Char Dham cab booking — ${SITE.name}` }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Char Dham Cab Booking & Uttarakhand Taxi Fares',
    description: 'Full circuit from ₹18,000, or one-way fares to every dham and hill station. Fixed prices, own vehicles.',
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

const TRUST = [
  { icon: 'receipt',  t: 'Fixed fare, no surge',     d: 'The price we quote is the price you pay — rain, festival or peak season makes no difference.' },
  { icon: 'shield',   t: 'Hill-trained drivers',     d: 'Every driver runs these routes year-round and carries a valid Green Card and trip permit.' },
  { icon: 'medical',  t: 'Oxygen on board',          d: 'Standard in every vehicle above 2,500 m — not an add-on.' },
  { icon: 'headset',  t: '24/7 on-road support',     d: 'A person on WhatsApp, not a call centre queue, for the whole journey.' },
];

/* Circuit questions first, then the ones that apply to any booking. The
   two lists used to live on separate pages and each had a "which vehicle"
   answer; the circuit one is kept because it is the more specific. */
const FAQS = [
  { q: 'What is the cab fare for the full Char Dham Yatra from Haridwar?',
    a: 'The whole circuit runs ₹18,000–₹24,000 in a Swift Dzire, ₹26,000–₹32,000 in an Innova Crysta and ₹38,000–₹46,000 in a 12-seater Tempo Traveller. That is the vehicle for the entire 10–12 day trip including fuel, driver, tolls and state taxes — not a per-day rate.' },
  { q: 'Which vehicle is best for the Char Dham circuit?',
    a: 'Innova Crysta for families of four to six — it has the best suspension on the Rudraprayag–Guptkashi stretch and it is what we put senior travellers in. Tempo Traveller for groups of eight and up. A sedan is fine for a couple, but the boot is small, so pack soft duffels.' },
  { q: 'Can I book only the cab, without hotels and meals?',
    a: 'Yes. Cab-only is a normal booking here — plenty of people arrange their own stays, or already have ashram accommodation. You get the vehicle, the driver and everything the fare covers, and nothing else is bundled in.' },
  { q: 'How many days does the full Char Dham circuit take by road?',
    a: 'Ten to twelve days from Haridwar covering all four dhams. Anything advertised under nine days is either skipping a dham or assuming a helicopter leg at Kedarnath.' },
  { q: 'What happens if a landslide blocks the road?',
    a: 'It happens, particularly July to September. Our drivers know the alternate routes and we watch the BRO and district updates daily. If a road closes entirely we hold you at a safe halt rather than pushing through — and any extra night is quoted before it happens, not billed afterwards.' },
  { q: 'Is the same driver with us for the whole trip?',
    a: 'Yes. One vehicle and one driver from the first pickup to the final drop. Changing drivers mid-circuit is how the aggregator model works; it is not how ours does.' },
  { q: 'Are your one-way fares fixed, or do they change with demand?',
    a: 'Fixed. The fare we quote for a route and vehicle is what you pay — no surge pricing for weekends, festivals or peak season, and no last-minute add-ons.' },
  { q: 'Can I travel Uttarakhand hill routes at night?',
    a: 'No — vehicle movement on Char Dham and most hill routes is banned between 10 PM and 4 AM. We plan pickup times so you reach your halt well before dark.' },
  { q: 'Do your vehicles have the Green Card required for hill routes?',
    a: 'Yes. Every vehicle we send carries a current Green Card and trip card, so you never get turned back at a checkpost.' },
  { q: 'How do I actually book — is there online payment?',
    a: 'No online payment step. Send your trip details on WhatsApp (or use the enquiry form above), we confirm the fixed fare and vehicle, and you pay the driver directly — cash or UPI, your choice.' },
];

export default function CabsPage() {
  const expert = getExpert();
  const dhams = getPublishedDestinations().filter((d) => d.kind === 'dham');

  const schema = [
    {
      '@context': 'https://schema.org',
      '@type': 'TaxiService',
      name: 'Char Dham cab booking and Uttarakhand taxi service',
      description: 'Full Char Dham circuit by road from Haridwar — Yamunotri, Gangotri, Kedarnath and Badrinath — in a private vehicle with a hill-experienced driver, and one-way transfers across Uttarakhand.',
      url: URL,
      provider: {
        '@type': 'TravelAgency',
        '@id': `${SITE.baseUrl}/#organization`,
        name: SITE.name,
        url: SITE.baseUrl,
        telephone: SITE.phone,
      },
      areaServed: ['Haridwar', 'Rishikesh', 'Dehradun', 'Yamunotri', 'Gangotri', 'Kedarnath', 'Badrinath'].map((n) => ({ '@type': 'Place', name: n })),
      offers: {
        '@type': 'AggregateOffer',
        priceCurrency: 'INR',
        lowPrice: '18000',
        highPrice: '46000',
        offerCount: String(CIRCUIT_FARES.length),
        url: URL,
      },
    },
    breadcrumb([['Home', '/'], ['Cabs', '/cabs']]),
  ];

  const linkGroups = [
    { label: 'Transfers', links: [
      ['Dehradun airport to Haridwar', '/dehradun-airport-to-haridwar-taxi'],
      ['How to reach Gangotri', '/how-to-reach-gangotri'],
      ['How to reach Badrinath', '/how-to-reach-badrinath'],
      ['How to reach Yamunotri', '/how-to-reach-yamunotri'],
    ]},
    { label: 'Planning the yatra', links: [
      ['Char Dham Yatra packages', '/char-dham-yatra'],
      ['Registration', '/blog/char-dham-yatra-registration'],
      ['Road status', '/char-dham-road-status'],
      ['Route map', '/char-dham-yatra-route-map'],
    ]},
  ];

  return (
    <div className="lux-noscroll-x">
      <JsonLd items={schema} />

      {/* ── Hero ──
          The hub counts itself: the spec rail is generated from the data
          layer, so the figures move on their own as routes are added and
          can never go stale the way a hand-typed "40+ routes" would. */}
      <CabHero
        crumbs={[['Home', '/'], ['Cabs', null]]}
        eyebrow="Fixed fares · zero commission"
        title="Char Dham cabs, one fixed fare"
        lede="One vehicle and one driver for the whole circuit, or a one-way run from Haridwar, Rishikesh or Dehradun to any dham or hill station — sedans, Innova Crysta and Tempo Travellers, driven by people who know these mountain roads."
        specs={[
          { k: 'Full circuit from', v: '₹18,000', gold: true },
          { k: 'Routes', v: String(getPublishedRoutes().length) },
          { k: 'Pickup cities', v: String(getPublishedOrigins().length) },
          { k: 'Local day from', v: `₹${Math.min(...LOCAL_FLEET.map((v) => v.local8)).toLocaleString('en-IN')}` },
        ]}
      />

      {/* Why book direct — always immediately below the hero */}
      <WhyBookDirect />

      {/* ── Quick answer ── */}
      <Section tone="paper" wrapWidth="narrow" tight>
        <AnswerBox>
          A cab for the full Char Dham circuit from Haridwar costs <strong>₹18,000–₹24,000</strong> in a sedan,
          <strong> ₹26,000–₹32,000</strong> in an Innova Crysta and <strong>₹38,000–₹46,000</strong> in a 12-seater
          Tempo Traveller — for the entire 10–12 day trip, with fuel, driver, tolls and state taxes included.
          The same vehicle and driver stay with you from the first pickup to the final drop. One-way fares for
          single legs are in the table further down.
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

      {/* ── Trust band ── */}
      <Section tone="paper" tight>
        <div className="lux-grid lux-grid--4" data-lux-stagger="">
          {TRUST.map((t) => (
            <div key={t.t} className="lux-feat">
              <span className="lux-feat__i"><Icon name={t.icon} size={18} /></span>
              <div>
                <div style={{ fontWeight: 600, fontSize: '0.9rem', color: 'var(--ink)' }}>{t.t}</div>
                <p className="lux-body" style={{ fontSize: '0.82rem', marginTop: 3 }}>{t.d}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* ── Circuit fares ── */}
      <Section tone="paper-deep">
        <SectionHead
          eyebrow="The full circuit"
          title="Whole-trip rates by vehicle"
          lede="Whole-trip pricing for the standard 10–12 day circuit covering Yamunotri, Gangotri, Kedarnath and Badrinath. Not a daily rate, and not a per-kilometre one."
        />
        <Reveal>
          <FareTable
            fares={CIRCUIT_FARES}
            caption={`Indicative ${SITE.season} bands for the complete circuit from Haridwar. Starting from Delhi, Jaipur or another city adds the transfer leg at both ends — we quote it as one number. Every enquiry gets a fixed all-in price.`}
          />
        </Reveal>
      </Section>

      {/* ── What the fare covers ── */}
      <Section tone="paper">
        <SectionHead
          eyebrow="No surprises"
          title="Exactly what the fare covers"
          lede="Both columns, published. On a twelve-day circuit the exclusions matter more than they do on a single transfer, so here they are up front."
        />
        <InclusionsGrid />
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
              <div key={d.slug} className="lux-card" style={{ padding: 20 }}>
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
              </div>
            );
          })}
        </div>
      </Section>

      {/* ── Every route, one table ──
          This used to be three grids of links into per-destination,
          per-origin and per-route pages — 105 of them at the peak. Those
          pages are gone (see src/data/gone.js); the fares now live here,
          grouped by pickup city, and the wizard above quotes any of them. */}
      <Section tone="paper">
        <SectionHead eyebrow="One-way fares" title="Every route we run, in one place"
          lede="Grouped by pickup city. The sedan fare is the floor; pick the vehicle in the enquiry form above and we confirm one all-in price — fuel, driver, tolls and state taxes included." />
        {getOriginsByRegion().map((region) =>
          region.origins.map((o) => {
            const routes = getRoutesFromOrigin(o.slug);
            if (!routes.length) return null;
            return (
              <div key={o.slug} style={{ marginBottom: 36 }}>
                <Eyebrow plain>Cabs from {o.name}</Eyebrow>
                <div className="lux-matrix-wrap" style={{ marginTop: 14 }}>
                  <table className="lux-matrix">
                    <thead>
                      <tr>
                        <th scope="col">To</th>
                        <th scope="col">Distance</th>
                        <th scope="col">Drive time</th>
                        <th scope="col">Sedan from</th>
                      </tr>
                    </thead>
                    <tbody>
                      {routes.map((r) => (
                        <tr key={r.slug}>
                          <th scope="row">{routeTo(r)}</th>
                          <td>{r.distance}</td>
                          <td>{r.time}</td>
                          <td style={{ whiteSpace: 'nowrap', color: 'var(--gold-dark)', fontWeight: 600 }}>{routeLowestFare(r)}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            );
          })
        )}
        <p className="lux-caption" style={{ marginTop: 4 }}>
          Indicative {SITE.season} one-way bands. Round trips with halts and airport transfers are quoted as one number on enquiry.
        </p>
        <div style={{ marginTop: 18, display: 'flex', gap: 10, flexWrap: 'wrap' }}>
          <Link prefetch={false} href="/dehradun-airport-to-haridwar-taxi" className="lux-funnel-link">
            Dehradun airport to Haridwar<Icon name="arrowRight" size={13} />
          </Link>
          <Link prefetch={false} href="/how-to-reach-gangotri" className="lux-funnel-link">
            Haridwar to Gangotri, stage by stage<Icon name="arrowRight" size={13} />
          </Link>
        </div>
      </Section>

      {/* ── The circuit map ── */}
      <Section tone="paper-deep">
        <SectionHead eyebrow="Where we run" title="The Char Dham circuit, at a glance"
          lede="Haridwar out to the four dhams and back. Scroll to trace it." />
        <div className="lux-map-stacked">
          <RouteMap nodes={ROUTE.nodes} category="char-dham" title="The Char Dham circuit" />
        </div>
      </Section>

      {/* ── Fleet ── */}
      <Section tone="paper">
        <SectionHead
          eyebrow="The fleet"
          title="The vehicle you travel in"
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
        <SectionHead eyebrow="Real stories" title="What our passengers say"
          aside={<a href={REVIEWS.url} target="_blank" rel="nofollow noopener noreferrer" className="lux-link">All {REVIEWS.count} on Google <Icon name="external" size={13} /></a>} />
        <Reveal><ReviewsWall reviews={REVIEWS} /></Reveal>
      </Section>

      {/* ── FAQ ── */}
      <Section tone="paper" wrapWidth="narrow">
        <SectionHead eyebrow="Have questions?" title="Cab booking, answered" />
        <FaqList faqs={FAQS} />
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
          title="Book your cab"
          lede="Tell us your dates, how many of you there are, and where you want to start — the full circuit or a single run. One fixed all-in fare back, usually within two hours."
          message="Namaste! I want to book a cab. Please share vehicle options and rates."
        />
      </Section>
    </div>
  );
}
