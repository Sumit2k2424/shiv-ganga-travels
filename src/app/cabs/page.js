import Link from 'next/link';
import { SITE } from '@/data/packages';
import { VEHICLES, VEHICLE_MATRIX, REVIEWS, ROUTE } from '@/data/experience';
import {
  getOriginsByRegion, getRoutesFromOrigin, routeTo, routeLowestFare,
  getPublishedRoutes, getPublishedOrigins, getPublishedDestinations,
} from '@/data/cabs';
import { FLEET as LOCAL_FLEET } from '@/data/localTaxi';
import CabHero from '@/components/cabs/CabHero';
import CabBookingWizard from '@/components/CabBookingWizard';
import RouteMap from '@/components/lux/RouteMap';
import WhyBookDirect from '@/components/lux/WhyBookDirect';
import { VehicleShowcase, ReviewsWall, FaqList } from '@/components/lux/PackageSections';
import { Section, SectionHead, Reveal, Eyebrow } from '@/components/lux/primitives';
import Icon, { WhatsAppIcon } from '@/components/Icon';

export const metadata = {
  title: { absolute: 'Uttarakhand Taxi Service from Haridwar | Fixed Fares' },
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

      {/* ── Hero ──
          The hub counts itself: the spec rail is generated from the data
          layer, so the figures move on their own as routes are added and
          can never go stale the way a hand-typed "40+ routes" would. */}
      <CabHero
        crumbs={[['Home', '/'], ['Cabs', null]]}
        eyebrow="Fixed fares · zero commission"
        title="Uttarakhand cabs, booked in a minute"
        lede="Haridwar, Rishikesh and Dehradun to every dham and hill station — sedans, SUVs, Innova Crysta and Tempo Travellers, driven by people who know these mountain roads."
        specs={[
          { k: 'Routes', v: String(getPublishedRoutes().length) },
          { k: 'Pickup cities', v: String(getPublishedOrigins().length) },
          { k: 'Destinations', v: String(getPublishedDestinations().length) },
          { k: 'Local day from', v: `₹${Math.min(...LOCAL_FLEET.map((v) => v.local8)).toLocaleString('en-IN')}`, gold: true },
        ]}
      />

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

      {/* ── Every route, one table ──
          This used to be three grids of links into per-destination,
          per-origin and per-route pages — 105 of them at the peak. Those
          pages are gone (see src/data/gone.js); the fares now live here,
          grouped by pickup city, and the wizard above quotes any of them. */}
      <Section tone="paper">
        <SectionHead eyebrow="Fixed one-way fares" title="Every route we run, in one place"
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
          Indicative {SITE.season} one-way bands. Round trips with halts, multi-day circuits and airport transfers are quoted as a package on enquiry.
        </p>
        <div style={{ marginTop: 18, display: 'flex', gap: 10, flexWrap: 'wrap' }}>
          <Link prefetch={false} href="/char-dham-yatra-cab-booking" className="lux-funnel-link">
            Full Char Dham circuit cab<Icon name="arrowRight" size={13} />
          </Link>
          <Link prefetch={false} href="/dehradun-airport-to-haridwar-taxi" className="lux-funnel-link">
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
