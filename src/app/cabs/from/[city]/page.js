import Link from 'next/link';
import { notFound } from 'next/navigation';

import { SITE } from '@/data/packages';
import { VEHICLES, VEHICLE_MATRIX, REVIEWS } from '@/data/experience';
import {
  getOrigin, getOriginParams, isOriginPublishable,
  getRoutesFromOrigin, getPublishedOrigins, getDestination,
  routeTo, routeLowestFare, getExpert,
  reviewsForSlug,
} from '@/data/cabs';
import { roadRulesFor } from '@/data/cabs/policy';
import {
  originFleetLede, originInclusionsLede, originOperatorLede, hubCancellationLede,
} from '@/data/cabs/showcase';

import Icon from '@/components/Icon';
import AnswerBox from '@/components/AnswerBox';
import { Section, SectionHead, Reveal, Eyebrow } from '@/components/lux/primitives';
import { VehicleShowcase, ReviewsWall, FaqList } from '@/components/lux/PackageSections';
import {
  VerifiedStrip, FareQuoteBar, InclusionsGrid, CancellationTerms,
  RoadRules, OperatorCard, CabLinkMesh, CabCTA,
} from '@/components/cabs/CabSections';
import CabHero from '@/components/cabs/CabHero';
import { JsonLd, breadcrumb, faqPage, originService, routeItemList } from '@/components/cabs/cabSchema';

export function generateStaticParams() {
  return getOriginParams();
}

export async function generateMetadata({ params }) {
  const { city } = await params;
  const o = getOrigin(city);
  if (!o || !isOriginPublishable(o)) return {};

  const routes = getRoutesFromOrigin(o.slug);
  const url = `${SITE.baseUrl}/cabs/from/${o.slug}`;

  // Keep the title under 60 characters — the sitewide trim from the September
  // CTR work. The route count is the first thing to go, since it is the least
  // useful half of the title to a searcher.
  const base = `Cab Service in ${o.name} ${SITE.season} | Outstation Taxi Fares`;
  const withCount = `${base} | ${routes.length} ${routes.length === 1 ? 'Route' : 'Routes'}`;
  const title = withCount.length <= 60 ? withCount : base;
  const desc = `Book an outstation cab from ${o.name} — ${routes.map(routeTo).slice(0, 4).join(', ')} and more. Fixed all-inclusive fares, doorstep pickup, hill-experienced drivers. Operator since 2010.`;

  return {
    title: { absolute: title },
    description: desc,
    keywords: [
      `cab service in ${o.name}`, `${o.name} taxi booking`, `outstation cab ${o.name}`,
      `${o.name} taxi service 2026`, `car rental ${o.name}`, `taxi from ${o.name}`,
    ],
    alternates: { canonical: url },
    openGraph: { title, description: desc, url, type: 'website', siteName: SITE.name, locale: 'en_IN', images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: title }] },
    twitter: { card: 'summary_large_image', title, description: desc },
  };
}

export default async function OriginPage({ params }) {
  const { city } = await params;
  const o = getOrigin(city);
  if (!o || !isOriginPublishable(o)) notFound();

  const routes = getRoutesFromOrigin(o.slug);
  const url = `/cabs/from/${o.slug}`;
  const expert = getExpert();

  const cheapest = routes
    .map((r) => routeLowestFare(r))
    .filter(Boolean)
    .sort((a, b) => Number(a.replace(/[^0-9]/g, '')) - Number(b.replace(/[^0-9]/g, '')))[0];

  const schema = [
    originService({ origin: o, routes, url }),
    routeItemList({
      name: `Cab routes from ${o.name}`,
      routes,
      label: (r) => `${o.name} to ${routeTo(r)} cab`,
    }),
    faqPage(o.faqs),
    breadcrumb([['Home', '/'], ['Cabs', '/cabs'], [`Cabs from ${o.name}`, url]]),
  ];

  const otherOrigins = getPublishedOrigins().filter((x) => x.slug !== o.slug).slice(0, 6);

  const linkGroups = [
    { label: `Every route from ${o.name}`, links: routes.map((r) => [`${o.name} → ${routeTo(r)}`, `/cabs/${r.slug}`]) },
    {
      label: 'Popular destinations',
      links: [...new Set(routes.map((r) => r.destination))]
        .map((slug) => getDestination(slug))
        .filter(Boolean)
        .map((d) => [`Cabs to ${d.name}`, `/cabs/to/${d.slug}`]),
    },
    otherOrigins.length && {
      label: 'Pick up from another city',
      links: otherOrigins.map((x) => [`Cabs from ${x.name}`, `/cabs/from/${x.slug}`]),
    },
  ].filter(Boolean);

  return (
    <div className="lux-noscroll-x">
      <JsonLd items={schema} />

      {/* ── Hero ──
          "Doorstep pickup" is false at a shuttle barrier at 1,829 m and in
          the foot-only lanes above a dham, so the return-leg origins
          override the eyebrow with something true. */}
      <CabHero
        crumbs={[['Home', '/'], ['Cabs', '/cabs'], [`Cabs from ${o.name}`, null]]}
        eyebrow={`${o.pickupLabel || (o.isBase ? 'One of our home bases' : 'Doorstep pickup')} · fixed fares`}
        title={`Cab service in ${o.name}`}
        lede={`Outstation taxi hire from ${o.name} — where we pick up, what each route costs, and who is driving.`}
        specs={[
          { k: 'Routes from here', v: String(routes.length) },
          { k: 'Fares from', v: cheapest, gold: true },
          { k: 'Pickup', v: o.pickupLabel || 'Anywhere in the city' },
          { k: 'State', v: o.state },
        ]}
      />

      {/* ── Quick answer ── */}
      <Section tone="paper" wrapWidth="narrow" tight>
        <AnswerBox>
          We run outstation cabs from {o.name} to {routes.map(routeTo).join(', ')}, with one-way fares from{' '}
          <strong>{cheapest}</strong>. Pickup is free anywhere in the city, including{' '}
          {o.pickupPoints.slice(0, 2).map(([p]) => p).join(' and ')}. Every fare is fixed and all-inclusive —
          fuel, driver, tolls and state taxes are already in the number.
        </AnswerBox>
        <VerifiedStrip expert={expert} subject={`routes out of ${o.name}`} />
        <p className="lux-body" style={{ marginTop: 22 }}>{o.intro}</p>
      </Section>

      {/* ── Pickup points — the local-intent hook ── */}
      <Section tone="paper-deep">
        <SectionHead
          eyebrow="Where we pick up"
          title={`Pickup points in ${o.name}`}
          lede="All included in the fare. No airport surcharge, no station surcharge, no 'outside city limits' line item."
        />
        <div className="lux-grid lux-grid--2" data-lux-stagger="">
          {o.pickupPoints.map(([place, detail]) => (
            <div key={place} className="lux-card" style={{ padding: 20 }}>
              <div style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
                <span style={{ color: 'var(--teal)', flex: 'none' }}><Icon name="map" size={16} /></span>
                <strong style={{ fontSize: '0.92rem', color: 'var(--ink)' }}>{place}</strong>
              </div>
              <p className="lux-body" style={{ fontSize: '0.84rem', marginTop: 8 }}>{detail}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* ── Routes from here ── */}
      <Section tone="paper">
        <SectionHead
          eyebrow="Where we go"
          title={`Outstation routes from ${o.name}`}
          lede="Pick a route for the full fare table, the road, the stops and the local advice."
        />
        <div className="lux-grid lux-grid--3" data-lux-stagger="">
          {routes.map((r) => (
            <Link key={r.slug} href={`/cabs/${r.slug}`} className="lux-card lux-lift" style={{ padding: 20, textDecoration: 'none', color: 'inherit' }} data-cursor="View">
              <div style={{ fontWeight: 600, fontSize: '0.95rem', color: 'var(--ink)' }}>
                {o.name} → {routeTo(r)}
              </div>
              <div className="lux-caption" style={{ marginTop: 6 }}>{r.distance} · {r.time}</div>
              <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.15rem', color: 'var(--gold-dark)', marginTop: 10 }}>
                from {routeLowestFare(r)}
              </div>
            </Link>
          ))}
        </div>
        <FareQuoteBar
          vehicles={['Swift Dzire', 'Ertiga', 'Innova Crysta', 'Tempo Traveller']}
          message={`Namaste! I want to book a cab from ${o.name}.`}
          note={`Not sure which route or which vehicle? Send us where you are going and how many of you there are — we answer with one fixed all-in fare out of ${o.name}.`}
        />
      </Section>

      {/* ── Local runs ── */}
      {o.localRuns?.length > 0 && (
        <Section tone="paper-deep">
          <SectionHead
            eyebrow="Half a day, not a week"
            title={`Local hire in ${o.name}`}
            lede="Sightseeing runs and short transfers, quoted as a flat package rather than by the kilometre."
          />
          <div className="lux-grid lux-grid--3" data-lux-stagger="">
            {o.localRuns.map(([what, detail]) => (
              <div key={what} className="lux-card" style={{ padding: 20 }}>
                <div style={{ fontWeight: 600, fontSize: '0.9rem', color: 'var(--ink)' }}>{what}</div>
                <p className="lux-body" style={{ fontSize: '0.84rem', marginTop: 6 }}>{detail}</p>
              </div>
            ))}
          </div>
          <p className="lux-caption" style={{ marginTop: 16 }}>
            Local packages are quoted on enquiry — send us the day and the vehicle you want.
          </p>
        </Section>
      )}

      {/* ── What the fare covers ── */}
      <Section tone="paper">
        <SectionHead eyebrow="No surprises" title={`What every fare out of ${o.name} includes`} lede={originInclusionsLede(o)} />
        <InclusionsGrid extras={false} />
      </Section>

      {/* ── Fleet ── */}
      <Section tone="paper-deep">
        <SectionHead eyebrow="The fleet" title={`The vehicle you travel in from ${o.name}`} lede={originFleetLede(o)} />
        <Reveal><VehicleShowcase vehicles={VEHICLES} matrix={VEHICLE_MATRIX} /></Reveal>
      </Section>

      {/* ── Rules of the road ── */}
      <Section tone="paper">
        <SectionHead
          eyebrow="Before you book"
          title={routes.some((x) => x.terrain === 'hills') ? 'Rules of the road up here' : `Booking a run out of ${o.name}`}
        />
        {/* An origin serving hill routes needs the hill rules; a plains-only
            origin does not. Derived from where this city's routes actually go. */}
        <RoadRules items={roadRulesFor({
          terrain: routes.some((x) => x.terrain === 'hills') ? 'hills' : 'plains',
          dham: routes.some((x) => getDestination(x.destination)?.kind === 'dham'),
        })} />
      </Section>

      {/* ── Cancellation ── */}
      <Section tone="paper-deep" wrapWidth="narrow">
        <SectionHead eyebrow="If plans change" title="Cancellation, in plain terms" />
        <Reveal><CancellationTerms compact lede={hubCancellationLede(o.name)} /></Reveal>
      </Section>

      {/* ── Reviews ── */}
      <Section tone="paper">
        <SectionHead
          eyebrow="Real stories"
          title="What our passengers say"
          aside={
            <a href={REVIEWS.url} target="_blank" rel="nofollow noopener noreferrer" className="lux-link">
              All {REVIEWS.count} on Google <Icon name="external" size={13} />
            </a>
          }
        />
        <Reveal><ReviewsWall reviews={reviewsForSlug(REVIEWS, o.slug)} /></Reveal>
      </Section>

      {/* ── FAQ ── */}
      <Section tone="paper-deep" wrapWidth="narrow">
        <SectionHead eyebrow="Have questions?" title={`Booking a cab in ${o.name}`} />
        <FaqList faqs={o.faqs.map(([q, a]) => ({ q, a }))} />
      </Section>

      {/* ── Operator ── */}
      <Section tone="paper" wrapWidth="narrow">
        <Reveal><OperatorCard lede={originOperatorLede(o)} showCredentials={false} /></Reveal>
      </Section>

      {/* ── Link mesh ── */}
      <Section tone="paper-deep">
        <SectionHead eyebrow="Keep looking" title="Routes and destinations" />
        <CabLinkMesh groups={linkGroups} />
      </Section>

      {/* ── CTA ── */}
      <Section tone="ink">
        <CabCTA
          title={`Book a cab from ${o.name}`}
          lede="Send us where you are going and when. One fixed all-in fare back, usually within two hours."
          message={`Namaste! I want to book a cab from ${o.name}. Please share routes and fares.`}
        />
      </Section>
    </div>
  );
}
