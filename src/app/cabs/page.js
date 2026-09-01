import Link from 'next/link';
import { SITE } from '@/data/packages';
import { VEHICLES, VEHICLE_MATRIX, REVIEWS, ROUTE } from '@/data/experience';
import {
  getOriginsByRegion, getDestinationsByKind, getRoutesFromOrigin,
  getRoutesToDestination, routeTo, routeLowestFare,
} from '@/data/cabs';
import CabBookingWizard from '@/components/CabBookingWizard';
import RouteMap from '@/components/lux/RouteMap';
import WhyBookDirect from '@/components/lux/WhyBookDirect';
import { VehicleShowcase, ReviewsWall, FaqList } from '@/components/lux/PackageSections';
import { Section, SectionHead, Reveal, Eyebrow, Pill } from '@/components/lux/primitives';
import Icon, { WhatsAppIcon } from '@/components/Icon';

export const metadata = {
  title: { absolute: `Uttarakhand Taxi Service ${SITE.season} | Fixed Fares | Instant Enquiry` },
  description: `Cabs from Haridwar, Rishikesh and Dehradun across Uttarakhand — one fixed all-in fare per run, doorstep pickup, no station surcharge, hill-trained drivers.`,
  keywords: ['uttarakhand taxi service', 'haridwar cab booking', 'rishikesh taxi', 'dehradun cab', `char dham taxi ${SITE.season}`, 'uttarakhand cab fare'],
  alternates: { canonical: `${SITE.baseUrl}/cabs` },
  openGraph: { title: `Uttarakhand Cab & Taxi Service ${SITE.season}`, description: 'Cabs from Haridwar, Rishikesh & Dehradun across Uttarakhand. Fixed fares, hill drivers.', url: `${SITE.baseUrl}/cabs`, type: 'website' ,
    images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: 'Cab & taxi booking in Uttarakhand — Shiv Ganga Travels' }],
  },
};

function Schema() {
  const bc = { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: SITE.baseUrl },
    { '@type': 'ListItem', position: 2, name: 'Cabs', item: `${SITE.baseUrl}/cabs` },
  ]};
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(bc) }} />;
}

const wa = (msg) => `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(msg)}`;

const TRUST = [
  { icon: 'receipt',  t: 'Fixed fare, no surge',     d: 'The price we quote is the price you pay — rain, festival or peak season makes no difference.' },
  { icon: 'shield',   t: 'Hill-trained drivers',     d: 'Every driver runs these routes year-round and carries a valid Green Card and trip permit.' },
  { icon: 'medical',  t: 'Oxygen on board',          d: 'Standard in every vehicle above 2,500 m — not an add-on.' },
  { icon: 'headset',  t: '24/7 on-road support',     d: 'A person on WhatsApp, not a call centre queue, for the whole journey.' },
];

const CAB_FAQS = [
  { q: 'Are your cab fares fixed, or do they change with demand?', a: 'Fixed. The fare we quote for a route and vehicle is what you pay — no surge pricing for weekends, festivals or peak season, and no last-minute add-ons.' },
  { q: 'Can I travel Uttarakhand hill routes at night?', a: 'No — vehicle movement on Char Dham and most hill routes is banned between 10 PM and 4 AM. We plan pickup times so you reach your halt well before dark.' },
  { q: 'Do your vehicles have the Green Card required for hill routes?', a: 'Yes. Every vehicle we send carries a current Green Card and trip card, so you never get turned back at a checkpost.' },
  { q: 'How do I actually book — is there online payment?', a: 'No online payment step. Send your trip details on WhatsApp (or use the enquiry form above), we confirm the fixed fare and vehicle, and you pay the driver directly — cash or UPI, your choice.' },
  { q: 'Which vehicle should I choose for a hill route?', a: 'A sedan or Ertiga suits couples and small families on well-paved stretches; an Innova Crysta gives the smoothest ride for families and senior travellers; a Tempo Traveller is the standard choice for groups of eight or more.' },
];

export default function CabsPage() {
  return (
    <div className="lux-noscroll-x">
      <Schema />

      {/* ── Hero ── */}
      <Section tone="ink">
        <div style={{ maxWidth: 760, margin: '0 auto', textAlign: 'center' }}>
          <Reveal variant="fade"><Pill tone="gold">Fixed fares · zero commission</Pill></Reveal>
          <Reveal>
            <h1 className="lux-display lux-display--xl" style={{ color: '#fff', margin: '22px 0 16px' }}>
              Uttarakhand cabs, <span className="lux-accent">booked in a minute</span>
            </h1>
          </Reveal>
          <Reveal>
            <p className="lux-lede" style={{ color: 'rgba(255,255,255,0.74)', margin: '0 auto' }}>
              Haridwar, Rishikesh and Dehradun to every dham and hill station — sedans, SUVs, Innova Crysta and Tempo Travellers, driven by people who know these mountain roads.
            </p>
          </Reveal>
        </div>
      </Section>

      {/* Why book direct — always immediately below the hero */}
      <WhyBookDirect />

      {/* ── Booking wizard ── */}
      <Section tone="paper" tight>
        <CabBookingWizard />
      </Section>

      {/* ── Trust band ── */}
      <Section tone="paper-deep" tight>
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

      {/* ── Vehicle showcase ── */}
      <Section tone="paper">
        <SectionHead eyebrow="The fleet" title="The vehicle you travel in"
          lede="Hill-seasoned drivers, fixed rates including fuel, driver and tolls." />
        <Reveal><VehicleShowcase vehicles={VEHICLES} matrix={VEHICLE_MATRIX} /></Reveal>
      </Section>

      {/* ── Illustrative circuit map ── */}
      <Section tone="paper-deep">
        <SectionHead eyebrow="Where we run" title="The Char Dham circuit, at a glance"
          lede="Most of our cab bookings feed into this circuit — Haridwar out to the four dhams and back. Scroll to trace it." />
        <div className="lux-map-stacked">
          <RouteMap nodes={ROUTE.nodes} category="char-dham" title="The Char Dham circuit" />
        </div>
      </Section>

      {/* ── Where we drive to — destination landing pages ── */}
      <Section tone="paper">
        <SectionHead
          eyebrow="Where we drive to"
          title="Pick a destination"
          lede="Every road to a place, side by side — what each departure city costs, and where the tarmac actually runs out."
        />
        {getDestinationsByKind().map((group) => (
          <div key={group.id} style={{ marginBottom: 36 }}>
            <Eyebrow plain>{group.label}</Eyebrow>
            <div className="lux-grid lux-grid--4" style={{ marginTop: 16 }} data-lux-stagger="">
              {group.destinations.map((d) => {
                const routes = getRoutesToDestination(d.slug);
                return (
                  <Link key={d.slug} href={`/cabs/to/${d.slug}`} className="lux-card lux-lift" style={{ padding: 18, textDecoration: 'none', color: 'inherit' }} data-cursor="View">
                    <div style={{ fontWeight: 700, fontSize: '0.95rem', color: 'var(--ink)' }}>Cabs to {d.name}</div>
                    <div className="lux-caption" style={{ marginTop: 6 }}>{d.altitude} · {routes.length} {routes.length === 1 ? 'route' : 'routes'}</div>
                    <div className="lux-body" style={{ fontSize: '0.8rem', marginTop: 8 }}>Road ends at {d.lastMotorable}</div>
                  </Link>
                );
              })}
            </div>
          </div>
        ))}
      </Section>

      {/* ── Where we pick up from — origin city pages ── */}
      <Section tone="paper-deep">
        <SectionHead
          eyebrow="Where we pick up"
          title="Or start from your city"
          lede="Doorstep pickup, no airport or station surcharge, and one fixed all-in fare for the whole run."
        />
        {getOriginsByRegion().map((region) => (
          <div key={region.id} style={{ marginBottom: 36 }}>
            <Eyebrow plain>{region.label}</Eyebrow>
            <div className="lux-grid lux-grid--4" style={{ marginTop: 16 }} data-lux-stagger="">
              {region.origins.map((o) => {
                const routes = getRoutesFromOrigin(o.slug);
                return (
                  <Link key={o.slug} href={`/cabs/from/${o.slug}`} className="lux-card lux-lift" style={{ padding: 18, textDecoration: 'none', color: 'inherit' }} data-cursor="View">
                    <div style={{ fontWeight: 700, fontSize: '0.95rem', color: 'var(--ink)' }}>Cabs from {o.name}</div>
                    <div className="lux-caption" style={{ marginTop: 6 }}>{routes.length} {routes.length === 1 ? 'route' : 'routes'} · {o.state}</div>
                    <div className="lux-body" style={{ fontSize: '0.8rem', marginTop: 8 }}>
                      {routes.slice(0, 3).map(routeTo).join(' · ')}
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        ))}
      </Section>

      {/* ── Every route, flat ── */}
      <Section tone="paper">
        <SectionHead eyebrow="Popular routes" title="Pick a route for the full fare & road map" />
        {getOriginsByRegion().map((region) =>
          region.origins.map((o) => {
            const routes = getRoutesFromOrigin(o.slug);
            if (!routes.length) return null;
            return (
              <div key={o.slug} style={{ marginBottom: 36 }}>
                <Eyebrow plain>Cabs from {o.name}</Eyebrow>
                <div className="lux-grid lux-grid--4" style={{ marginTop: 16 }} data-lux-stagger="">
                  {routes.map((r) => (
                    <Link key={r.slug} href={`/cabs/${r.slug}`} className="lux-card lux-lift" style={{ padding: 18, textDecoration: 'none', color: 'inherit' }} data-cursor="View">
                      <div style={{ fontWeight: 700, fontSize: '0.95rem', color: 'var(--ink)' }}>{o.name} → {routeTo(r)}</div>
                      <div className="lux-caption" style={{ marginTop: 6 }}>{r.distance} · {r.time}</div>
                      <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.15rem', color: 'var(--gold-dark)', marginTop: 10 }}>
                        from {routeLowestFare(r)}
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            );
          })
        )}
        <div style={{ marginTop: 12, display: 'flex', gap: 10, flexWrap: 'wrap' }}>
          <Link href="/char-dham-yatra-cab-booking" className="lux-funnel-link">
            Full Char Dham circuit cab<Icon name="arrowRight" size={13} />
          </Link>
          <Link href="/taxi-service-in-haridwar" className="lux-funnel-link">
            Local taxi service in Haridwar<Icon name="arrowRight" size={13} />
          </Link>
          <Link href="/dehradun-airport-to-haridwar-taxi" className="lux-funnel-link">
            Dehradun airport to Haridwar<Icon name="arrowRight" size={13} />
          </Link>
        </div>
      </Section>

      {/* ── Reviews ── */}
      <Section tone="paper-deep">
        <SectionHead eyebrow="Real stories" title="What our passengers say"
          aside={<a href={REVIEWS.url} target="_blank" rel="nofollow noopener noreferrer" className="lux-link">All {REVIEWS.count} on Google <Icon name="external" size={13} /></a>} />
        <Reveal><ReviewsWall reviews={REVIEWS} /></Reveal>
      </Section>

      {/* ── FAQ ── */}
      <Section tone="paper" wrapWidth="narrow">
        <SectionHead eyebrow="Have questions?" title="Cab booking, answered clearly" />
        <FaqList faqs={CAB_FAQS} />
      </Section>

      {/* ── Final CTA ── */}
      <Section tone="ink">
        <div style={{ maxWidth: 620, margin: '0 auto', textAlign: 'center' }}>
          <Reveal>
            <h2 className="lux-display lux-display--lg" style={{ color: '#fff', marginBottom: 16 }}>Ready to book your cab?</h2>
          </Reveal>
          <Reveal>
            <p className="lux-lede" style={{ color: 'rgba(255,255,255,0.74)', margin: '0 auto 30px' }}>
              Send your route on WhatsApp and we&rsquo;ll confirm the fixed fare within two hours.
            </p>
          </Reveal>
          <a href={wa('Namaste! I want to book a cab. Please share routes and fares.')} target="_blank" rel="nofollow noopener noreferrer" className="lux-btn" style={{ background: '#25D366', color: '#fff', borderColor: '#25D366' }} data-magnetic data-cursor="Chat">
            <WhatsAppIcon size={16} /> WhatsApp us now
          </a>
        </div>
      </Section>
    </div>
  );
}
