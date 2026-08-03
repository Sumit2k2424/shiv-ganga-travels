import Link from 'next/link';
import { notFound } from 'next/navigation';

import { SITE } from '@/data/packages';
import { VEHICLES, VEHICLE_MATRIX, REVIEWS } from '@/data/experience';
import {
  getRoute, getRouteParams, isPublishable,
  getOrigin, getDestination, getRouteSiblings,
  routeFrom, routeTo, routeFares, routeLowestFare, routeExpert,
} from '@/data/cabs';

import Icon from '@/components/Icon';
import AnswerBox from '@/components/AnswerBox';
import { Section, SectionHead, Reveal, Pill } from '@/components/lux/primitives';
import { VehicleShowcase, ReviewsWall, FaqList } from '@/components/lux/PackageSections';
import {
  FactPills, VerifiedStrip, FareTable, InclusionsGrid, CancellationTerms,
  RouteStops, RoadRules, LocalTip, OperatorCard, CabLinkMesh, CabCTA,
} from '@/components/cabs/CabSections';
import { JsonLd, breadcrumb, faqPage, routeService } from '@/components/cabs/cabSchema';

export function generateStaticParams() {
  return getRouteParams();
}

export async function generateMetadata({ params }) {
  const { route } = await params;
  const r = getRoute(route);
  if (!r || !isPublishable(r)) return {};

  const from = routeFrom(r);
  const to = routeTo(r);
  const low = routeLowestFare(r);
  const url = `${SITE.baseUrl}/cabs/${r.slug}`;

  const title = `${from} to ${to} Cab 2026 | Fare from ${low} | Fixed Price`;
  const desc = `${from} to ${to} cab — ${r.distance}, ${r.time}. Fixed all-inclusive fare from ${low}, no hidden tolls. Haridwar operator since 2010, hill-experienced drivers, pickup anywhere in ${from}.`;

  return {
    title: { absolute: title },
    description: desc,
    keywords: [
      `${from} to ${to} cab`, `${from} to ${to} taxi fare`, `${from} to ${to} distance`,
      `${from} to ${to} taxi 2026`, `cab from ${from} to ${to}`, `${to} taxi service`,
    ],
    alternates: { canonical: url },
    openGraph: { title, description: desc, url, type: 'website', siteName: SITE.name, locale: 'en_IN' },
    twitter: { card: 'summary_large_image', title, description: desc },
  };
}

export default async function CabRoutePage({ params }) {
  const { route } = await params;
  const r = getRoute(route);
  if (!r || !isPublishable(r)) notFound();

  const from = routeFrom(r);
  const to = routeTo(r);
  const origin = getOrigin(r.origin);
  const destination = getDestination(r.destination);
  const fares = routeFares(r);
  const low = routeLowestFare(r);
  const expert = routeExpert(r);
  const { sameDestination, sameOrigin } = getRouteSiblings(r);
  const url = `/cabs/${r.slug}`;

  const schema = [
    routeService({ route: r, from, to, fares, url, expert }),
    faqPage(r.faqs),
    breadcrumb([['Home', '/'], ['Cabs', '/cabs'], [`${from} to ${to}`, url]]),
  ];

  const linkGroups = [
    sameDestination.length && {
      label: `Other ways to reach ${to}`,
      links: [
        ...sameDestination.map((s) => [`${routeFrom(s)} → ${to}`, `/cabs/${s.slug}`]),
        [`All cabs to ${to}`, `/cabs/to/${destination.slug}`],
      ],
    },
    sameOrigin.length && {
      label: `More cabs from ${from}`,
      links: [
        ...sameOrigin.map((s) => [`${from} → ${routeTo(s)}`, `/cabs/${s.slug}`]),
        [`Everything from ${from}`, `/cabs/from/${origin.slug}`],
      ],
    },
    destination.guides?.length && {
      label: `Planning guides for ${to}`,
      links: destination.guides,
    },
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
              <li aria-current="page">{from} to {to}</li>
            </ol>
          </nav>
          <Reveal variant="fade"><Pill tone="gold">Fixed fare · no surge · zero commission</Pill></Reveal>
          <Reveal>
            <h1 className="lux-display lux-display--xl" style={{ color: '#fff', margin: '22px 0 16px' }}>
              {from} to {to} cab
            </h1>
          </Reveal>
          <Reveal>
            <p className="lux-lede" style={{ color: 'rgba(255,255,255,0.74)', margin: '0 auto' }}>
              Fare, distance and the road itself — written by the people who drive it.
            </p>
          </Reveal>
          <FactPills items={[
            ['route', r.distance],
            ['calendar', r.time],
            ['rupee', `from ${low}`],
            ['map', r.endPoint || to],
          ]} />
        </div>
      </Section>

      {/* ── Quick answer + who wrote this ── */}
      <Section tone="paper" wrapWidth="narrow" tight>
        <AnswerBox>
          {from} to {to} is <strong>{r.distance}</strong>, about <strong>{r.time}</strong> by cab, running {r.via}.
          One-way fares start at <strong>{low}</strong> in a sedan and the vehicle reaches <strong>{r.endPoint || to}</strong>.
          Booked direct with Shiv Ganga Travels, a Haridwar operator since 2010 — one fixed all-inclusive price, tolls and driver included.
        </AnswerBox>
        <VerifiedStrip expert={expert} lastDrivenOn={r.lastDrivenOn} subject={`the ${from}–${to} road`} />
        <p className="lux-body" style={{ marginTop: 22 }}>{r.intro}</p>
      </Section>

      {/* ── Fares ── */}
      <Section tone="paper-deep">
        <SectionHead
          eyebrow="What it costs"
          title={`${from} to ${to} taxi fare`}
          lede="One-way bands by vehicle. Every quote we send is a single fixed all-in number — fuel, driver, tolls, state taxes and parking already inside it."
        />
        <Reveal><FareTable fares={fares} /></Reveal>
      </Section>

      {/* ── What the fare covers ── */}
      <Section tone="paper">
        <SectionHead
          eyebrow="No surprises"
          title="Exactly what the fare covers"
          lede="Most operators in this market publish a number and leave the rest for the end of the trip. Here is the whole thing, both columns."
        />
        <InclusionsGrid />
      </Section>

      {/* ── The road ── */}
      <Section tone="paper-deep">
        <SectionHead eyebrow="The road" title="Where you actually stop" />
        <RouteStops via={r.via} stops={r.stops} />
        <div style={{ marginTop: 22 }}><LocalTip>{r.tip}</LocalTip></div>
      </Section>

      {/* ── Rules of the road ── */}
      <Section tone="paper">
        <SectionHead
          eyebrow="Before you book"
          title="Rules of the road up here"
          lede="Hill routes in Uttarakhand run on rules that catch first-time visitors out. None of these are ours — they are the administration's, and they shape how the trip has to be planned."
        />
        <RoadRules />
      </Section>

      {/* ── Fleet ── */}
      <Section tone="paper-deep">
        <SectionHead
          eyebrow="The fleet"
          title="The vehicle you travel in"
          lede="Our own vehicles, not a marketplace of whoever is nearest."
        />
        <Reveal><VehicleShowcase vehicles={VEHICLES} matrix={VEHICLE_MATRIX} /></Reveal>
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
        <SectionHead eyebrow="Have questions?" title={`${from} to ${to}, answered`} />
        <FaqList faqs={r.faqs.map(([q, a]) => ({ q, a }))} />
      </Section>

      {/* ── Who you are booking with ── */}
      <Section tone="paper-deep" wrapWidth="narrow">
        <Reveal><OperatorCard /></Reveal>
      </Section>

      {/* ── Link mesh ── */}
      <Section tone="paper">
        <SectionHead eyebrow="Keep looking" title="Related routes and guides" />
        <CabLinkMesh groups={linkGroups} />
      </Section>

      {/* ── CTA ── */}
      <Section tone="ink">
        <CabCTA
          title={`Book your ${from} → ${to} cab`}
          lede={`Send us the date and how many of you there are. We reply with one fixed all-in fare — usually within two hours.`}
          message={`Namaste! I want a cab from ${from} to ${to}. Please share the fixed fare and availability.`}
        />
      </Section>
    </div>
  );
}
