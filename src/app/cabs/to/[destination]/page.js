import Link from 'next/link';
import { notFound } from 'next/navigation';

import { SITE } from '@/data/packages';
import { VEHICLES, VEHICLE_MATRIX, REVIEWS } from '@/data/experience';
import {
  getDestination, getDestinationParams, isDestinationPublishable,
  getRoutesToDestination, getPublishedDestinations,
  routeFrom, routeLowestFare, getExpert,
} from '@/data/cabs';

import Icon from '@/components/Icon';
import AnswerBox from '@/components/AnswerBox';
import { Section, SectionHead, Reveal, Pill, Eyebrow, Facts } from '@/components/lux/primitives';
import { VehicleShowcase, ReviewsWall, FaqList } from '@/components/lux/PackageSections';
import {
  FactPills, VerifiedStrip, OriginFareTable, InclusionsGrid,
  RoadRules, OperatorCard, CabLinkMesh, CabCTA,
} from '@/components/cabs/CabSections';
import { JsonLd, breadcrumb, faqPage, destinationSchema, routeItemList } from '@/components/cabs/cabSchema';

export function generateStaticParams() {
  return getDestinationParams();
}

export async function generateMetadata({ params }) {
  const { destination } = await params;
  const d = getDestination(destination);
  if (!d || !isDestinationPublishable(d)) return {};

  const routes = getRoutesToDestination(d.slug);
  const cheapest = routes
    .map((r) => routeLowestFare(r))
    .filter(Boolean)
    .sort((a, b) => Number(a.replace(/[^0-9]/g, '')) - Number(b.replace(/[^0-9]/g, '')))[0];
  const url = `${SITE.baseUrl}/cabs/to/${d.slug}`;

  const title = `${d.name} Taxi Service 2026 | Cab Fares from ${routes.length} ${routes.length === 1 ? 'City' : 'Cities'}`;
  const desc = `Book a cab to ${d.name} from ${routes.map(routeFrom).join(', ')}. Fares from ${cheapest}, fixed all-inclusive. Road ends at ${d.lastMotorable}. Haridwar operator since 2010.`;

  return {
    title: { absolute: title },
    description: desc,
    keywords: [
      `${d.name} taxi service`, `cab to ${d.name}`, `${d.name} cab booking`,
      `taxi to ${d.name} 2026`, `${d.name} taxi fare`, `how to reach ${d.name} by road`,
    ],
    alternates: { canonical: url },
    openGraph: { title, description: desc, url, type: 'website', siteName: SITE.name, locale: 'en_IN' },
    twitter: { card: 'summary_large_image', title, description: desc },
  };
}

export default async function DestinationPage({ params }) {
  const { destination } = await params;
  const d = getDestination(destination);
  if (!d || !isDestinationPublishable(d)) notFound();

  const routes = getRoutesToDestination(d.slug);
  const url = `/cabs/to/${d.slug}`;
  const expert = getExpert();

  const rows = routes.map((r) => ({
    from: routeFrom(r),
    distance: r.distance,
    time: r.time,
    fare: routeLowestFare(r),
    href: `/cabs/${r.slug}`,
  }));

  const cheapest = [...rows].sort(
    (a, b) => Number(a.fare.replace(/[^0-9]/g, '')) - Number(b.fare.replace(/[^0-9]/g, ''))
  )[0];

  const schema = [
    destinationSchema({ destination: d, routes, url }),
    routeItemList({
      name: `Cab routes to ${d.name}`,
      routes,
      label: (r) => `${routeFrom(r)} to ${d.name} cab`,
    }),
    faqPage(d.faqs),
    breadcrumb([['Home', '/'], ['Cabs', '/cabs'], [`Cabs to ${d.name}`, url]]),
  ];

  const otherDestinations = getPublishedDestinations()
    .filter((x) => x.slug !== d.slug && x.kind === d.kind)
    .slice(0, 5);

  const linkGroups = [
    { label: `Every route to ${d.name}`, links: routes.map((r) => [`${routeFrom(r)} → ${d.name}`, `/cabs/${r.slug}`]) },
    otherDestinations.length && {
      label: d.kind === 'dham' ? 'The other dhams' : 'Other places we drive to',
      links: otherDestinations.map((x) => [`Cabs to ${x.name}`, `/cabs/to/${x.slug}`]),
    },
    d.guides?.length && { label: `Planning guides for ${d.name}`, links: d.guides },
  ].filter(Boolean);

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
              <li aria-current="page">Cabs to {d.name}</li>
            </ol>
          </nav>
          <Reveal variant="fade"><Pill tone="gold">{routes.length} pickup {routes.length === 1 ? 'city' : 'cities'} · fixed fares</Pill></Reveal>
          <Reveal>
            <h1 className="lux-display lux-display--xl" style={{ color: '#fff', margin: '22px 0 16px' }}>
              {d.name} taxi service
            </h1>
          </Reveal>
          <Reveal>
            <p className="lux-lede" style={{ color: 'rgba(255,255,255,0.74)', margin: '0 auto' }}>
              Every road to {d.name}, what each one costs, and where the tarmac actually runs out.
            </p>
          </Reveal>
          <FactPills items={[
            ['mountain', d.altitude],
            ['car', `Road ends: ${d.lastMotorable}`],
            ['rupee', `from ${cheapest.fare}`],
          ]} />
        </div>
      </Section>

      {/* ── Quick answer ── */}
      <Section tone="paper" wrapWidth="narrow" tight>
        <AnswerBox>
          Cabs run to {d.name} from {rows.map((x) => x.from).join(', ')}, with one-way fares starting at{' '}
          <strong>{cheapest.fare}</strong> from {cheapest.from}. The road ends at <strong>{d.lastMotorable}</strong>
          {d.trek && d.trek !== 'None' ? `, and the last stretch is ${d.trek.toLowerCase()}` : ''}. {d.season}.
        </AnswerBox>
        <VerifiedStrip expert={expert} subject={`the roads into ${d.name}`} />
        <p className="lux-body" style={{ marginTop: 22 }}>{d.intro}</p>
      </Section>

      {/* ── Fare comparison across origins — the reason this page exists ── */}
      <Section tone="paper-deep">
        <SectionHead
          eyebrow="Compare"
          title={`Cab fares to ${d.name}, city by city`}
          lede="Sedan one-way bands. Pick a row for the full fare table, the road, and the stops along it."
        />
        <Reveal><OriginFareTable rows={rows} /></Reveal>
        <p className="lux-caption" style={{ marginTop: 12 }}>
          Fares shown are indicative 2026 one-way bands for a Swift Dzire. Larger vehicles, round trips and
          multi-day packages are quoted on the individual route pages.
        </p>
      </Section>

      {/* ── The practical facts ── */}
      <Section tone="paper">
        <SectionHead eyebrow="Know before you go" title={`What ${d.name} actually requires`} />
        <div className="lux-grid lux-grid--2">
          <Reveal>
            <Facts items={[
              { k: 'Altitude', v: d.altitude },
              { k: 'Road ends at', v: d.lastMotorable },
              { k: 'On foot from there', v: d.trek || 'None' },
              { k: 'Season', v: d.season },
              { k: 'Permits', v: d.permits },
            ]} />
          </Reveal>
          <Reveal>
            <div className="lux-card" style={{ padding: 22 }}>
              <Eyebrow plain>Getting around once you arrive</Eyebrow>
              <div style={{ display: 'grid', gap: 14, marginTop: 14 }}>
                {d.gettingAround?.map(([what, detail]) => (
                  <div key={what}>
                    <div style={{ fontWeight: 600, fontSize: '0.88rem', color: 'var(--ink)' }}>{what}</div>
                    <p className="lux-body" style={{ fontSize: '0.82rem', marginTop: 3 }}>{detail}</p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* ── Where to stay ── */}
      {d.whereToStay?.length > 0 && (
        <Section tone="paper-deep">
          <SectionHead
            eyebrow="Where to break the journey"
            title={`Staying near ${d.name}`}
            lede="Which base actually makes sense, and why. We book these for you if you want — billed separately, at what the hotel charges."
          />
          <div className="lux-grid lux-grid--3" data-lux-stagger="">
            {d.whereToStay.map(([place, why]) => (
              <div key={place} className="lux-card" style={{ padding: 20 }}>
                <div style={{ fontWeight: 600, fontSize: '0.92rem', color: 'var(--ink)' }}>{place}</div>
                <p className="lux-body" style={{ fontSize: '0.84rem', marginTop: 6 }}>{why}</p>
              </div>
            ))}
          </div>
        </Section>
      )}

      {/* ── What the fare covers ── */}
      <Section tone="paper">
        <SectionHead eyebrow="No surprises" title="What every fare on this page includes" />
        <InclusionsGrid />
      </Section>

      {/* ── Rules of the road ── */}
      <Section tone="paper-deep">
        <SectionHead eyebrow="Before you book" title="Rules of the road up here" />
        <RoadRules />
      </Section>

      {/* ── Fleet ── */}
      <Section tone="paper">
        <SectionHead eyebrow="The fleet" title="The vehicle you travel in" />
        <Reveal><VehicleShowcase vehicles={VEHICLES} matrix={VEHICLE_MATRIX} /></Reveal>
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
        <SectionHead eyebrow="Have questions?" title={`Cabs to ${d.name}, answered`} />
        <FaqList faqs={d.faqs.map(([q, a]) => ({ q, a }))} />
      </Section>

      {/* ── Operator ── */}
      <Section tone="paper-deep" wrapWidth="narrow">
        <Reveal><OperatorCard /></Reveal>
      </Section>

      {/* ── Link mesh ── */}
      <Section tone="paper">
        <SectionHead eyebrow="Keep looking" title="Routes and guides" />
        <CabLinkMesh groups={linkGroups} />
      </Section>

      {/* ── CTA ── */}
      <Section tone="ink">
        <CabCTA
          title={`Book your cab to ${d.name}`}
          lede="Tell us which city you are starting from and when. One fixed all-in fare back, usually within two hours."
          message={`Namaste! I want a cab to ${d.name}. Please share fares and availability.`}
        />
      </Section>
    </div>
  );
}
