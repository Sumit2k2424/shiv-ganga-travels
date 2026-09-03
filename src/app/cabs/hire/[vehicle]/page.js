import Link from 'next/link';
import { notFound } from 'next/navigation';

import { SITE } from '@/data/packages';
import { VEHICLES, VEHICLE_MATRIX, REVIEWS } from '@/data/experience';
import { inr } from '@/data/localTaxi';
import { getRoute, isPublishable, routeFrom, routeTo, routeLowestFare, reviewsForSlug } from '@/data/cabs';
import { getExpert, DEFAULT_EXPERT } from '@/data/cabs/experts';
import {
  getHire, getHireParams, isHirePublishable,
  hireRates, hireDayRate, hirePerKm, hireSiblings,
} from '@/data/cabs/hire';

import Icon from '@/components/Icon';
import AnswerBox from '@/components/AnswerBox';
import { Section, SectionHead, Reveal } from '@/components/lux/primitives';
import { VehicleShowcase, ReviewsWall, FaqList } from '@/components/lux/PackageSections';
import {
  VerifiedStrip, FareQuoteBar, InclusionsGrid,
  CancellationTerms, OperatorCard, CabLinkMesh, CabCTA,
} from '@/components/cabs/CabSections';
import CabHero from '@/components/cabs/CabHero';
import { JsonLd, breadcrumb, faqPage } from '@/components/cabs/cabSchema';

export function generateStaticParams() {
  return getHireParams();
}

export async function generateMetadata({ params }) {
  const { vehicle } = await params;
  const h = getHire(vehicle);
  if (!h || !isHirePublishable(h)) return {};

  const url = `${SITE.baseUrl}/cabs/hire/${h.slug}`;
  const perKm = hirePerKm(h);
  const day = hireDayRate(h);

  const title = `${h.name} on Rent in Haridwar — ₹${perKm}/km | ${SITE.season} Rates`;
  const desc = `${h.name} hire in Haridwar from ₹${perKm} per km outstation and ${inr(day)} for a local 8hr/80km day. Full rate card, extra-km and extra-hour rates published. Direct operator since 2010, no aggregator markup.`;

  return {
    title: { absolute: title },
    description: desc,
    keywords: [
      `${h.name.toLowerCase()} on rent in haridwar`,
      `${h.name.toLowerCase()} rate per km haridwar`,
      `${h.name.toLowerCase()} hire haridwar`,
      `${h.name.toLowerCase()} taxi haridwar`,
      `haridwar ${h.name.toLowerCase()} booking ${SITE.season}`,
    ],
    alternates: { canonical: url },
    openGraph: { title, description: desc, url, type: 'website', siteName: SITE.name, locale: 'en_IN', images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: title }] },
    twitter: { card: 'summary_large_image', title, description: desc },
  };
}

/* The rate card, rendered straight from localTaxi.js so it can never
   drift from what /taxi-service-in-haridwar publishes. Competitors
   put a per-km number in a heading and nothing else; the extra-km and
   extra-hour columns are where a day hire actually goes wrong, so
   they are the reason this table exists. */
function RateCard({ rows }) {
  return (
    <>
      <div className="lux-matrix-wrap">
        <table className="lux-matrix">
          <thead>
            <tr>
              <th scope="col">Vehicle</th>
              <th scope="col">Seats</th>
              <th scope="col">8 hr / 80 km</th>
              <th scope="col">Extra km</th>
              <th scope="col">Extra hour</th>
              <th scope="col">Outstation /km</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((v) => (
              <tr key={v.id}>
                <th scope="row">{v.name}</th>
                <td>{v.seats}</td>
                <td style={{ whiteSpace: 'nowrap', color: 'var(--gold-dark)', fontWeight: 600 }}>{inr(v.local8)}</td>
                <td style={{ whiteSpace: 'nowrap' }}>{inr(v.extraKm)}</td>
                <td style={{ whiteSpace: 'nowrap' }}>{inr(v.extraHr)}</td>
                <td style={{ whiteSpace: 'nowrap' }}>{inr(v.outstationKm)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="lux-caption" style={{ marginTop: 12 }}>
        {SITE.season} season rates. The 8 hr / 80 km day is a slab, not a target — whichever limit you cross
        first starts the extras. Outstation trips add a flat ₹300 per night driver allowance; night running
        between 10 PM and 6 AM adds ₹300 to a local booking. Every one of these numbers is on the page
        before you book, which is the entire difference between us and a call-centre quote.
      </p>
    </>
  );
}

function SplitList({ items, icon, tone }) {
  return (
    <div className="lux-grid lux-grid--2" data-lux-stagger="">
      {items.map((item) => {
        const [head, body] = Array.isArray(item) ? item : [null, item];
        return (
          <div key={head || body} className="lux-card" style={{ padding: 20 }}>
            <div style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}>
              <span style={{ color: tone, flex: 'none', marginTop: 2 }}><Icon name={icon} size={16} /></span>
              <div style={{ minWidth: 0 }}>
                {head && <strong style={{ fontSize: '0.92rem', color: 'var(--ink)', display: 'block' }}>{head}</strong>}
                <p className="lux-body" style={{ fontSize: '0.84rem', marginTop: head ? 6 : 0 }}>{body}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default async function CabHirePage({ params }) {
  const { vehicle } = await params;
  const h = getHire(vehicle);
  if (!h || !isHirePublishable(h)) notFound();

  const rows = hireRates(h);
  const perKm = hirePerKm(h);
  const day = hireDayRate(h);
  const url = `/cabs/hire/${h.slug}`;
  const expert = getExpert(DEFAULT_EXPERT);

  // Only routes that actually exist and are published — a hire page must
  // never link into a 404 because a route was renamed underneath it.
  const routes = (h.routes || []).map(getRoute).filter((r) => r && isPublishable(r));

  const schema = [
    {
      '@context': 'https://schema.org',
      '@type': 'Service',
      '@id': `${SITE.baseUrl}${url}#service`,
      name: h.h1,
      serviceType: 'Vehicle hire with driver',
      provider: { '@id': `${SITE.baseUrl}/#organization` },
      areaServed: [
        { '@type': 'City', name: 'Haridwar' },
        { '@type': 'City', name: 'Rishikesh' },
        { '@type': 'State', name: 'Uttarakhand' },
      ],
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: `${h.name} rates in Haridwar`,
        itemListElement: rows.map((v) => ({
          '@type': 'Offer',
          itemOffered: { '@type': 'Service', name: `${v.name} — ${v.seats} seater` },
          price: v.local8,
          priceCurrency: 'INR',
          priceSpecification: {
            '@type': 'UnitPriceSpecification',
            price: v.local8,
            priceCurrency: 'INR',
            unitText: '8 hours / 80 km',
          },
        })),
      },
    },
    faqPage(h.faqs),
    breadcrumb([['Home', '/'], ['Cabs', '/cabs'], ['Vehicle hire', '/cabs'], [h.name, url]]),
  ];

  const linkGroups = [
    routes.length && {
      label: `Routes people book a ${h.name} for`,
      links: routes.map((r) => [`${routeFrom(r)} → ${routeTo(r)} · from ${routeLowestFare(r)}`, `/cabs/${r.slug}`]),
    },
    {
      label: 'Other vehicles on the same rate card',
      links: hireSiblings(h).map((s) => [s.name, `/cabs/hire/${s.slug}`]),
    },
    h.guides?.length && { label: 'Related reading', links: h.guides },
  ].filter(Boolean);

  return (
    <div className="lux-noscroll-x">
      <JsonLd items={schema} />

      {/* ── Hero ── */}
      <CabHero
        crumbs={[['Home', '/'], ['Cabs', '/cabs'], [h.name, null]]}
        eyebrow="Own fleet · rate card published · no aggregator markup"
        title={h.h1}
        lede={`${h.idealFor}.`}
        specs={[
          { k: 'Seats', v: h.seatsLabel },
          { k: 'Outstation', v: `${inr(perKm)}/km`, gold: true },
          { k: '8 hr / 80 km', v: inr(day) },
          { k: 'Hill routes', v: 'Green Card carried' },
        ]}
      />

      {/* ── Quick answer ── */}
      <Section tone="paper" wrapWidth="narrow" tight>
        <AnswerBox>
          A {h.name} in Haridwar costs <strong>{inr(perKm)} per km</strong> on outstation trips and{' '}
          <strong>{inr(day)}</strong> for a local day of 8 hours and 80 km, plus a flat ₹300 per night
          driver allowance on outstation runs. It seats <strong>{h.seatsLabel.toLowerCase()}</strong> and
          takes {h.luggage.toLowerCase()}. Booked direct from our own fleet — there is no aggregator
          commission inside these numbers.
        </AnswerBox>
        <VerifiedStrip expert={expert} subject={`our ${h.name} rates and what the vehicle actually does`} />
        <p className="lux-body" style={{ marginTop: 22 }}>{h.intro}</p>
      </Section>

      {/* ── The rate card — the reason the page exists ── */}
      <Section tone="paper-deep">
        <SectionHead
          eyebrow="What it costs"
          title={`${h.name} rate card, Haridwar`}
          lede="The four numbers that decide a hire bill — the day slab, the extra kilometre, the extra hour and the outstation per-km rate. Most operators publish the first and let you discover the other three."
        />
        <Reveal><RateCard rows={rows} /></Reveal>
        <FareQuoteBar
          vehicles={rows.map((v) => v.name)}
          message={`Namaste! I want to hire a ${h.name} in Haridwar.`}
          note={`Tell us the dates and where you are going and we convert this rate card into one fixed all-in figure for your trip — driver allowance, tolls and parking already in it.`}
        />
      </Section>

      {/* ── Who it suits ── */}
      <Section tone="paper">
        <SectionHead
          eyebrow="Who books it"
          title={`What a ${h.name} is genuinely good for`}
        />
        <SplitList items={h.goodFor} icon="check" tone="var(--teal)" />
      </Section>

      {/* ── Who it does not suit — the block competitors never write ── */}
      <Section tone="paper-deep">
        <SectionHead
          eyebrow="Before you book"
          title={`When not to book a ${h.name}`}
          lede="Every operator will tell you what a vehicle does well. These are the cases where we would put you in something else, including the ones where that earns us less."
        />
        <SplitList items={h.honestLimits} icon="info" tone="var(--gold-dark)" />
        <div className="lux-card" style={{ marginTop: 20, padding: '18px 20px', display: 'flex', gap: 14, alignItems: 'flex-start' }}>
          <span style={{ color: 'var(--teal)', flex: 'none', marginTop: 2 }}><Icon name="shield" size={18} /></span>
          <p className="lux-body" style={{ fontSize: '0.86rem', margin: 0 }}>{h.hillNote}</p>
        </div>
      </Section>

      {/* ── What the fare covers ── */}
      <Section tone="paper">
        <SectionHead
          eyebrow="No surprises"
          title={`What a ${h.name} hire includes`}
          lede="The same terms as every other booking we take. Published here rather than read out on a call, because a rate card without an inclusions list is only half a price."
        />
        <InclusionsGrid />
      </Section>

      {/* ── The vehicle itself ── */}
      <Section tone="paper-deep">
        <SectionHead eyebrow="The fleet" title="The vehicle you actually travel in" />
        {/* Lead with the vehicle this page is about, then the rest of the
            fleet — VehicleShowcase renders vehicles[0] in detail on the SSR
            pass, so the order is what a crawler sees. */}
        <Reveal>
          <VehicleShowcase
            vehicles={[
              ...VEHICLES.filter((v) => v.id === h.showcaseId),
              ...VEHICLES.filter((v) => v.id !== h.showcaseId),
            ]}
            matrix={VEHICLE_MATRIX}
          />
        </Reveal>
      </Section>

      {/* ── Cancellation ── */}
      <Section tone="paper" wrapWidth="narrow">
        <SectionHead eyebrow="If plans change" title="Cancellation, in plain terms" />
        <Reveal><CancellationTerms compact /></Reveal>
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
        <Reveal><ReviewsWall reviews={reviewsForSlug(REVIEWS, h.slug)} /></Reveal>
      </Section>

      {/* ── FAQ ── */}
      <Section tone="paper" wrapWidth="narrow">
        <SectionHead eyebrow="Have questions?" title={`${h.name} hire, answered`} />
        <FaqList faqs={h.faqs.map(([q, a]) => ({ q, a }))} />
      </Section>

      {/* ── Operator ── */}
      <Section tone="paper-deep" wrapWidth="narrow">
        <Reveal><OperatorCard showCredentials={false} /></Reveal>
      </Section>

      {/* ── Link mesh ── */}
      <Section tone="paper">
        <SectionHead eyebrow="Keep looking" title="Routes, vehicles and guides" />
        <CabLinkMesh groups={linkGroups} />
      </Section>

      {/* ── CTA ── */}
      <Section tone="ink">
        <CabCTA
          title={`Book a ${h.name} in Haridwar`}
          lede="Send us the dates, the group size and where you are going. You get one fixed all-in figure back, from the people who own the vehicle."
          message={`Namaste! I want to hire a ${h.name} in Haridwar. Please share availability and a fixed all-in price.`}
        />
      </Section>
    </div>
  );
}
