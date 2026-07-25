/* ══════════════════════════════════════════════════════════════
   Package experience page.

   The page is a server component end to end. Only five leaves
   hydrate — the timeline, the showcases, the map, the gallery and
   the booking surfaces — which is what keeps a page this rich
   inside the performance budget.

   Narrative order, deliberately: arrive → understand the shape of
   the trip → see the ground → walk it day by day → see where you
   sleep and what you travel in → know exactly what is and is not
   included → understand the temples → look at it → hear from people
   who went → answer the last objections → book.
   ══════════════════════════════════════════════════════════════ */

import Link from 'next/link';
import { notFound } from 'next/navigation';
import { pxAt, pxSrcSet } from '@/lib/pximg';
import {
  getPackageBySlug, getAllSlugs, SITE, PACKAGES, CATEGORIES,
} from '@/data/packages';
import {
  HOTELS, VEHICLES, VEHICLE_MATRIX, TEMPLES, MEAL_PLAN,
  WEATHER, GALLERY, REVIEWS, ASSURANCES,
} from '@/data/experience';
import { nodesForCategory } from '@/lib/route-geometry';
import Schemas, { CATEGORY_GUIDES } from './schemas';
import CategoryView from './CategoryView';

import { Section, Reveal, Stagger, SectionHead, Eyebrow, Facts, Pill } from '@/components/lux/primitives';
import RouteMap from '@/components/lux/RouteMap';
import {
  DayTimeline, HotelShowcase, VehicleShowcase, TempleGuide, Gallery, ReviewsWall, FaqList,
} from '@/components/lux/PackageSections';
import { BookingProvider, BookingRail, BookingBar, CostBuilder } from '@/components/lux/BookingPanel';

export const dynamicParams = false;

const CATEGORY_SLUGS = Object.keys(CATEGORIES);

/* ── Routing ────────────────────────────────────────────────── */

export async function generateStaticParams() {
  return [...getAllSlugs(), ...CATEGORY_SLUGS.map((slug) => ({ slug }))];
}

export async function generateMetadata({ params }) {
  const { slug } = await params;

  if (CATEGORY_SLUGS.includes(slug)) {
    const cat = CATEGORIES[slug];
    return {
      title: `${cat.name} Packages 2026 from Haridwar`,
      description: `Book ${cat.name} from Haridwar. Expert guides, VIP darshan, all-inclusive. Trusted since 2010.`,
      alternates: { canonical: `${SITE.baseUrl}/packages/${slug}` },
    };
  }

  const pkg = getPackageBySlug(slug);
  if (!pkg) return {};

  return {
    title: pkg.metaTitle,
    description: pkg.metaDesc,
    keywords: pkg.tags || [],
    alternates: { canonical: `${SITE.baseUrl}/packages/${pkg.slug}` },
    openGraph: {
      title: pkg.metaTitle,
      description: pkg.metaDesc,
      type: 'website',
      url: `${SITE.baseUrl}/packages/${pkg.slug}`,
      siteName: SITE.name,
      locale: 'en_IN',
      images: pkg.photo ? [{ url: pkg.photo, width: 900, height: 560, alt: pkg.name }] : [],
    },
    twitter: {
      card: 'summary_large_image',
      title: pkg.metaTitle,
      description: pkg.metaDesc,
      images: pkg.photo ? [pkg.photo] : [],
    },
  };
}

/* ── Content selection ──────────────────────────────────────── */

/** Which temples this itinerary actually visits. Never show a dham the trip skips. */
function templesFor(pkg) {
  const hay = `${pkg.name} ${pkg.itinerary.map((d) => d.title + d.desc).join(' ')}`.toLowerCase();
  return ['yamunotri', 'gangotri', 'kedarnath', 'badrinath']
    .filter((id) => hay.includes(id))
    .map((id) => TEMPLES[id]);
}

/** Which hotels this itinerary actually uses. */
function hotelsFor(pkg) {
  const hay = pkg.itinerary.map((d) => d.title).join(' ').toLowerCase();
  const used = HOTELS.filter((h) => hay.includes(h.stop.toLowerCase()));
  return used.length >= 3 ? used : HOTELS.slice(0, 4);
}

/* ── Page ───────────────────────────────────────────────────── */

export default async function PackagePage({ params }) {
  const { slug } = await params;

  if (CATEGORY_SLUGS.includes(slug)) {
    const cat = CATEGORIES[slug];
    const pkgs = PACKAGES.filter((p) => p.category === slug);
    return <CategoryView category={cat} packages={pkgs} guides={CATEGORY_GUIDES[slug] || []} />;
  }

  const pkg = getPackageBySlug(slug);
  if (!pkg) notFound();

  const cat = CATEGORIES[pkg.category];
  const nodes = nodesForCategory(pkg.category);
  const temples = templesFor(pkg);
  const hotels = hotelsFor(pkg);
  const guides = CATEGORY_GUIDES[pkg.category] || [];
  const related = PACKAGES.filter((p) => p.category === pkg.category && p.slug !== pkg.slug).slice(0, 3);

  return (
    <BookingProvider pkg={pkg}>
      <Schemas pkg={pkg} />

      {/* ══ HERO ═════════════════════════════════════════════ */}
      <section className="lux-hero">
        <div className="lux-hero__media" data-lux-parallax="0.12">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={pxAt(pkg.photo, 1920, 1280)}
            srcSet={pxSrcSet(pkg.photo, [[750, 1000], [1200, 1400], [1920, 1280]])}
            sizes="100vw"
            alt={`${pkg.name} — ${cat?.coverAlt || 'Char Dham Yatra 2026'}`}
            fetchPriority="high"
            decoding="sync"
            width={1920}
            height={1280}
          />
        </div>
        <div className="lux-hero__veil" aria-hidden="true" />

        <div className="lux-hero__body lux-wrap">
          <Reveal variant="fade">
            <nav aria-label="Breadcrumb" style={{ marginBottom: 26 }}>
              <ol style={{ display: 'flex', gap: 10, listStyle: 'none', margin: 0, padding: 0, flexWrap: 'wrap', fontSize: 11, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.6)' }}>
                <li><Link href="/" style={{ color: 'inherit', textDecoration: 'none' }}>Home</Link></li>
                <li aria-hidden="true">/</li>
                <li><Link href="/packages" style={{ color: 'inherit', textDecoration: 'none' }}>Journeys</Link></li>
                <li aria-hidden="true">/</li>
                <li><Link href={`/packages/${pkg.category}`} style={{ color: 'inherit', textDecoration: 'none' }}>{cat?.shortName}</Link></li>
              </ol>
            </nav>
          </Reveal>

          <Reveal variant="fade">
            <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap', marginBottom: 26 }}>
              {pkg.badge && <Pill tone="solid">{pkg.badge}</Pill>}
              <Pill tone="light">{cat?.name}</Pill>
              <Pill tone="light">★ {REVIEWS.rating} · {REVIEWS.count} reviews</Pill>
              <Pill tone="light">50,000+ pilgrims since 2010</Pill>
            </div>
          </Reveal>

          <Reveal>
            <h1 className="lux-display lux-display--xl">
              {pkg.seoHeading || pkg.name}
            </h1>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="lux-lede" style={{ color: 'rgba(255,255,255,0.82)', marginTop: 24, maxWidth: '46ch' }}>
              {pkg.subtitle}. Run by the people who run it — a Haridwar operator since {SITE.established},
              with no agent between you and the mountain.
            </p>
          </Reveal>

          <Reveal delay={0.16}>
            <div className="lux-hero__meta">
              <div><span className="lux-hero__k">Duration</span><span className="lux-hero__v">{pkg.duration.nights}N / {pkg.duration.days}D</span></div>
              <div><span className="lux-hero__k">From</span><span className="lux-hero__v">₹{pkg.price.discounted.toLocaleString('en-IN')}</span></div>
              <div><span className="lux-hero__k">Season</span><span className="lux-hero__v">{pkg.season.split('&')[0].trim()}</span></div>
              <div><span className="lux-hero__k">Highest point</span><span className="lux-hero__v">{pkg.altitude.replace('Max: ', '')}</span></div>
            </div>
          </Reveal>

          <Reveal delay={0.22}>
            <div className="lux-hero__cta">
              <a
                href={`https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(`Namaste! I am interested in ${pkg.name}. Please share availability and the detailed costing.`)}`}
                target="_blank"
                rel="nofollow noopener noreferrer"
                className="lux-btn lux-btn--gold"
              >
                Check availability
              </a>
              <a href="#itinerary" className="lux-btn lux-btn--ghost-light">See the itinerary</a>
              <a href={`tel:${SITE.phone.replace(/-/g, '')}`} className="lux-btn lux-btn--ghost-light">{SITE.phone}</a>
            </div>
          </Reveal>
        </div>

        <a href="#overview" className="lux-scroll-cue lux-hero__cue" aria-label="Scroll to the journey overview">
          <span className="lux-scroll-cue__line" aria-hidden="true" />
          Scroll
        </a>
      </section>

      {/* ══ OVERVIEW ═════════════════════════════════════════ */}
      <Section id="overview" tone="paper">
        <div className="lux-rail">
          <div className="lux-rail__aside">
            <Eyebrow>The journey at a glance</Eyebrow>
            <Reveal>
              <p className="lux-display lux-display--md" style={{ marginTop: 22 }}>
                {pkg.duration.days} days,{' '}
                <span className="lux-accent">{temples.length || 4} shrines</span>,
                one road through the Garhwal Himalaya.
              </p>
            </Reveal>
            <Reveal delay={0.08}>
              <div style={{ marginTop: 30 }}>
                <a href="#cost" className="lux-link">Build your costing</a>
              </div>
            </Reveal>
          </div>

          <div>
            <Stagger className="lux-grid lux-grid--2">
              {[
                { k: 'Duration',       v: `${pkg.duration.nights} nights · ${pkg.duration.days} days` },
                { k: 'Difficulty',     v: pkg.difficulty },
                { k: 'Highest point',  v: pkg.altitude.replace('Max: ', '') },
                { k: 'Best season',    v: pkg.season },
                { k: 'Group size',     v: pkg.groupSize },
                { k: 'Vehicle',        v: pkg.transport },
                { k: 'Accommodation',  v: 'Twin / triple sharing, hotels and lodges' },
                { k: 'Meals',          v: 'Breakfast and dinner daily, pure vegetarian' },
                { k: 'Guide',          v: 'Local guide plus pujari at every darshan' },
                { k: 'Medical',        v: 'Oxygen cylinder and first-aid on every vehicle' },
                { k: 'Starts / ends',  v: `${pkg.startCity} → ${pkg.endCity}` },
                { k: 'Registration',   v: 'Uttarakhand Tourist Care — handled by us' },
              ].map((f) => (
                <div key={f.k} className="lux-card" style={{ padding: '22px 24px' }}>
                  <span className="lux-facts__k">{f.k}</span>
                  <span style={{ display: 'block', fontSize: 15, color: 'var(--ink)', marginTop: 9, fontWeight: 500, lineHeight: 1.5 }}>
                    {f.v}
                  </span>
                </div>
              ))}
            </Stagger>

            <Reveal>
              <div className="lux-mark" style={{ marginTop: 40 }}>
                <Eyebrow plain>What makes this itinerary work</Eyebrow>
                <ul className="lux-list" style={{ marginTop: 18 }}>
                  {pkg.highlights.map((h) => <li key={h}>{h}</li>)}
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </Section>

      {/* ══ ROUTE ════════════════════════════════════════════ */}
      <Section id="route" tone="paper-deep">
        <SectionHead
          eyebrow="The ground you cover"
          title="Every turn of the circuit"
          lede="The route draws itself as you scroll. Hover any stop to see what happens there, and read the elevation profile below for what the climb actually asks of you."
        />
        <RouteMap nodes={nodes} category={pkg.category} />
      </Section>

      {/* ══ ITINERARY ════════════════════════════════════════ */}
      <Section id="itinerary">
        <SectionHead
          eyebrow="Day by day"
          title="How the journey unfolds"
          lede="Open any day for the drive, the distance, where you sleep and what to expect when you get there."
          aside={<span className="lux-caption">{pkg.itinerary.length} days · tap to expand</span>}
        />

        <div className="lux-itin">
          <DayTimeline days={pkg.itinerary} stops={nodes} />
          {/* The rail and the sticky mobile bar are mutually exclusive by
              design — they share a breakpoint so two price surfaces never
              compete for the same thumb. */}
          <div className="lux-hide-narrow">
            <BookingRail />
          </div>
        </div>
      </Section>

      {/* ══ HOTELS ═══════════════════════════════════════════ */}
      <Section id="stays" tone="paper">
        <SectionHead
          eyebrow="Where you sleep"
          title="Every night at a different altitude"
          lede="A riverside room in Haridwar and a heated hut at 3,583 metres are not the same promise, and we do not pretend otherwise. Here is exactly what each night looks like."
        />
        <HotelShowcase hotels={hotels} />
      </Section>

      {/* ══ VEHICLES ═════════════════════════════════════════ */}
      <Section id="vehicles">
        <SectionHead
          eyebrow="How you travel"
          title="The vehicle is most of the trip"
          lede="You spend more hours in this than anywhere else on the yatra. Every vehicle is hill-serviced before departure and carries oxygen from Haridwar onwards."
        />
        <VehicleShowcase vehicles={VEHICLES} matrix={VEHICLE_MATRIX} />
      </Section>

      {/* ══ INCLUSIONS ═══════════════════════════════════════ */}
      <Section id="inclusions" tone="ink">
        <SectionHead
          light
          eyebrow="The fine print, in plain sight"
          title="What is included, and what is not"
          lede="We put the exclusions next to the inclusions at the same size. Anything that would surprise you at the end of the trip belongs on this page, not in a footnote."
        />

        <div className="lux-grid lux-grid--2">
          <Reveal>
            <div className="lux-card lux-card--dark" style={{ padding: 'clamp(26px, 3vw, 38px)' }}>
              <Eyebrow light>Included in the price</Eyebrow>
              <ul className="lux-list lux-list--check" style={{ marginTop: 24 }}>
                {pkg.inclusions.map((i) => (
                  <li key={i} style={{ color: 'rgba(255,255,255,0.82)' }}>{i}</li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="lux-card lux-card--dark" style={{ padding: 'clamp(26px, 3vw, 38px)' }}>
              <Eyebrow light>Not included</Eyebrow>
              <ul className="lux-list lux-list--cross" style={{ marginTop: 24 }}>
                {pkg.exclusions.map((e) => (
                  <li key={e} style={{ color: 'rgba(255,255,255,0.62)' }}>{e}</li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>

        <Reveal>
          <p className="lux-caption" style={{ marginTop: 34, color: 'rgba(255,255,255,0.5)', maxWidth: '70ch', lineHeight: 1.75 }}>
            Lunch is left out on purpose. Drivers stop where they eat themselves, it runs ₹150–300 a head,
            and building it into the package would mean charging you a margin on a dhaba bill.
          </p>
        </Reveal>
      </Section>

      {/* ══ MEALS ════════════════════════════════════════════ */}
      <Section id="meals" tone="paper">
        <SectionHead eyebrow="At the table" title="Pure vegetarian, every day" lede={MEAL_PLAN.summary} />

        <Stagger className="lux-grid lux-grid--3">
          {MEAL_PLAN.meals.map((m) => (
            <div key={m.name} className="lux-card" style={{ padding: 'clamp(24px, 2.6vw, 32px)' }}>
              <h3 className="lux-display lux-display--sm">{m.name}</h3>
              <span className="lux-caption" style={{ display: 'block', marginTop: 10 }}>{m.time}</span>
              <span className="lux-caption" style={{ display: 'block', marginTop: 4 }}>{m.served}</span>
              <p className="lux-body" style={{ fontSize: 14.5, marginTop: 18 }}>{m.typical}</p>
            </div>
          ))}
        </Stagger>

        <div className="lux-rail" style={{ marginTop: 'clamp(40px, 5vw, 68px)' }}>
          <div className="lux-rail__aside">
            <Eyebrow>Dietary requirements</Eyebrow>
          </div>
          <div>
            <Facts items={MEAL_PLAN.dietary.map((d) => ({ k: d.label, v: d.detail }))} />
            <Reveal>
              <p className="lux-mark lux-body" style={{ fontSize: 14.5, marginTop: 30 }}>{MEAL_PLAN.note}</p>
            </Reveal>
          </div>
        </div>
      </Section>

      {/* ══ TEMPLES ══════════════════════════════════════════ */}
      {temples.length > 0 && (
        <Section id="temples">
          <SectionHead
            eyebrow="The shrines"
            title="What you are actually walking towards"
            lede="History, ritual, timings and the things nobody tells you until you are standing there."
          />
          <TempleGuide temples={temples} />
        </Section>
      )}

      {/* ══ WEATHER ══════════════════════════════════════════ */}
      <Section id="weather" tone="paper-deep">
        <SectionHead
          eyebrow="Conditions"
          title="What the mountain will be doing"
          lede="Four stations across three thousand metres of altitude change. Pack for the highest one, not the one you fly into."
          aside={<span className="lux-caption">{WEATHER.updated}</span>}
        />

        <Stagger className="lux-weather">
          {WEATHER.stations.map((s) => (
            <div key={s.place}>
              <h3 className="lux-display lux-display--sm">{s.place}</h3>
              <span className="lux-caption" style={{ display: 'block', marginTop: 6 }}>{s.alt}</span>
              <div style={{ marginTop: 22 }}>
                {s.bands.map((b) => (
                  <div key={b.months} style={{ paddingBottom: 18, marginBottom: 18, borderBottom: '1px solid var(--rule)' }}>
                    <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', gap: 10 }}>
                      <span className="lux-facts__k">{b.months}</span>
                      <span style={{ fontSize: 14, fontWeight: 600, color: 'var(--ink)', fontVariantNumeric: 'tabular-nums' }}>
                        {b.high}° / {b.low}°
                      </span>
                    </div>
                    <span className="lux-caption" style={{ display: 'block', marginTop: 8, color: 'var(--teal-dark)' }}>
                      Rain: {b.rain}
                    </span>
                    <p className="lux-body" style={{ fontSize: 13.5, marginTop: 8 }}>{b.note}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </Stagger>

        <div className="lux-rail" style={{ marginTop: 'clamp(40px, 5vw, 64px)' }}>
          <div className="lux-rail__aside"><Eyebrow>What to pack</Eyebrow></div>
          <Stagger className="lux-grid lux-grid--3">
            {WEATHER.packing.map((p) => (
              <div key={p.group}>
                <h4 className="lux-facts__k">{p.group}</h4>
                <ul className="lux-list" style={{ marginTop: 14 }}>
                  {p.items.map((i) => <li key={i} style={{ fontSize: 14 }}>{i}</li>)}
                </ul>
              </div>
            ))}
          </Stagger>
        </div>
      </Section>

      {/* ══ GALLERY ══════════════════════════════════════════ */}
      <Section id="gallery">
        <SectionHead
          eyebrow="Photography"
          title="The Garhwal, unretouched"
          aside={<span className="lux-caption">Click any frame to enlarge</span>}
        />
        <Gallery items={GALLERY} />
      </Section>

      {/* ══ ASSURANCES ═══════════════════════════════════════ */}
      <Section tone="navy" tight>
        <SectionHead light eyebrow="Why book direct" title="Six things we will put in writing" size="md" />
        <Stagger className="lux-grid lux-grid--3">
          {ASSURANCES.map((a) => (
            <div key={a.title} style={{ paddingTop: 24, borderTop: '1px solid var(--rule-light)' }}>
              <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 18, fontWeight: 600, color: '#fff' }}>{a.title}</h3>
              <p className="lux-body" style={{ fontSize: 14, marginTop: 12, color: 'rgba(255,255,255,0.66)' }}>{a.body}</p>
            </div>
          ))}
        </Stagger>
      </Section>

      {/* ══ REVIEWS ══════════════════════════════════════════ */}
      <Section id="reviews" tone="paper">
        <SectionHead
          eyebrow="Travellers"
          title="What people said afterwards"
          aside={
            <a href={REVIEWS.url} target="_blank" rel="nofollow noopener noreferrer" className="lux-link">
              Read on Google
            </a>
          }
        />
        <ReviewsWall reviews={REVIEWS} />
      </Section>

      {/* ══ COST BUILDER ═════════════════════════════════════ */}
      <Section id="cost">
        <SectionHead
          eyebrow="Your costing"
          title="Change anything, watch the number move"
          lede="Travellers, hotel tier, vehicle, pickup city, extra nights and add-ons. When it looks right, send the whole configuration to us on WhatsApp in one tap."
        />
        <CostBuilder />
      </Section>

      {/* ══ FAQ ══════════════════════════════════════════════ */}
      {pkg.faqs?.length > 0 && (
        <Section id="faq" tone="paper-deep">
          <div className="lux-rail">
            <div className="lux-rail__aside">
              <Eyebrow>Questions</Eyebrow>
              <Reveal>
                <p className="lux-display lux-display--md" style={{ marginTop: 20 }}>
                  Everything people ask before they book.
                </p>
              </Reveal>
              <Reveal delay={0.08}>
                <p className="lux-body" style={{ fontSize: 14.5, marginTop: 20 }}>
                  Not here? Message us — you will get a person, in Haridwar, who has run this route.
                </p>
              </Reveal>
            </div>
            <FaqList faqs={pkg.faqs} />
          </div>
        </Section>
      )}

      {/* ══ BOOKING CLOSE ════════════════════════════════════ */}
      <Section id="book" tone="ink">
        <div style={{ maxWidth: 780 }}>
          <Reveal variant="fade"><Eyebrow light>Booking</Eyebrow></Reveal>
          <Reveal>
            <h2 className="lux-display lux-display--lg" style={{ color: '#fff', marginTop: 22 }}>
              Twenty-five percent holds your{' '}
              <span className="lux-accent">{pkg.duration.days} days</span> on the mountain.
            </h2>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="lux-lede" style={{ color: 'rgba(255,255,255,0.72)', marginTop: 24 }}>
              Send us your dates and we come back within two hours with a written costing —
              hotels named, vehicle confirmed, inclusions and exclusions itemised. Nothing is
              charged until you have read it.
            </p>
          </Reveal>

          <Reveal delay={0.14}>
            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginTop: 36 }}>
              <a
                href={`https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(`Namaste! I want to book ${pkg.name} (${pkg.duration.nights}N/${pkg.duration.days}D). Please share the detailed costing and availability.`)}`}
                target="_blank"
                rel="nofollow noopener noreferrer"
                className="lux-btn lux-btn--gold"
              >
                Enquire on WhatsApp
              </a>
              <a href={`tel:${SITE.phone.replace(/-/g, '')}`} className="lux-btn lux-btn--ghost-light">
                Call {SITE.phone}
              </a>
              <a href={`mailto:${SITE.email}`} className="lux-btn lux-btn--ghost-light">Email us</a>
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <dl className="lux-facts" style={{ marginTop: 44, maxWidth: 560 }}>
              <div className="lux-facts__row"><dt className="lux-facts__k">Office</dt><dd className="lux-facts__v">{SITE.address}</dd></div>
              <div className="lux-facts__row"><dt className="lux-facts__k">Hours</dt><dd className="lux-facts__v">7:00 AM – 9:00 PM, every day</dd></div>
              <div className="lux-facts__row"><dt className="lux-facts__k">2026 season</dt><dd className="lux-facts__v">April 19 – November 13</dd></div>
              <div className="lux-facts__row"><dt className="lux-facts__k">Payment</dt><dd className="lux-facts__v">UPI, bank transfer, cards. No booking fee.</dd></div>
            </dl>
          </Reveal>
        </div>
      </Section>

      {/* ══ RELATED + GUIDES ═════════════════════════════════ */}
      {(related.length > 0 || guides.length > 0) && (
        <Section tone="paper" tight>
          {related.length > 0 && (
            <>
              <SectionHead
                eyebrow="Other ways to do this"
                title={`More ${cat?.shortName} journeys`}
                size="md"
                aside={<Link href={`/packages/${pkg.category}`} className="lux-link">View all</Link>}
              />
              <Stagger className="lux-grid lux-grid--3">
                {related.map((r) => (
                  <Link key={r.slug} href={`/packages/${r.slug}`} className="lux-zoom-host" style={{ textDecoration: 'none', display: 'block' }}>
                    <span className="lux-frame lux-frame--3x2 lux-frame--zoom" style={{ display: 'block' }}>
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={pxAt(r.photo, 600, 400)} alt={r.name} loading="lazy" decoding="async" width={600} height={400} />
                    </span>
                    <span className="lux-caption" style={{ display: 'block', marginTop: 18 }}>
                      {r.duration.nights}N / {r.duration.days}D · from ₹{r.price.discounted.toLocaleString('en-IN')}
                    </span>
                    <span className="lux-display lux-display--sm" style={{ display: 'block', marginTop: 8 }}>
                      {r.name.replace(' Package', '')}
                    </span>
                  </Link>
                ))}
              </Stagger>
            </>
          )}

          {guides.length > 0 && (
            <div style={{ marginTop: 'clamp(44px, 5vw, 72px)', paddingTop: 34, borderTop: '1px solid var(--rule)' }}>
              <Eyebrow>Planning reading</Eyebrow>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '14px 28px', marginTop: 22 }}>
                {guides.map((g) => (
                  <Link key={g.href} href={g.href} className="lux-link">{g.label}</Link>
                ))}
              </div>
            </div>
          )}
        </Section>
      )}

      <BookingBar />
    </BookingProvider>
  );
}
