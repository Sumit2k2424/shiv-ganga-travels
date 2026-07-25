/* ══════════════════════════════════════════════════════════════
   Homepage.

   Reads as a magazine cover story rather than a booking funnel:
   an opening image that earns its full screen, then the four dhams
   as an editorial index, the collection, the case for booking direct,
   the people who went, and the practical answers. The commercial
   surfaces are always one tap away but never shout over the story.

   Server component. All motion comes from data-lux attributes read
   by the site-wide LuxMotion island.
   ══════════════════════════════════════════════════════════════ */

import Link from 'next/link';
import { PACKAGES, SITE, GLOBAL_FAQS, TRUST, getFeaturedPackages, CATEGORIES } from '@/data/packages';
import { REVIEWS, ASSURANCES, TEMPLES, GALLERY } from '@/data/experience';
import { pxAt, pxSrcSet } from '@/lib/pximg';
import { Section, Reveal, Stagger, SectionHead, Eyebrow, Pill, Facts } from '@/components/lux/primitives';
import { FaqList, Gallery, ReviewsWall } from '@/components/lux/PackageSections';
import Schema from './homeSchema';

export const metadata = {
  title: { absolute: `Char Dham Yatra 2026 Packages from Haridwar — Shiv Ganga Travels` },
  description:
    'Char Dham Yatra 2026 packages from Haridwar. Direct operator, zero commission. From ₹18,500. Kedarnath, Badrinath, Gangotri, Yamunotri. 50,000+ served.',
  keywords: [
    'char dham yatra 2026', 'char dham yatra haridwar', 'kedarnath yatra package',
    'char dham yatra package from haridwar', 'do dham yatra',
    'char dham helicopter package', 'shiv ganga travels haridwar',
  ],
  openGraph: {
    title: 'Char Dham Yatra 2026 Packages Haridwar',
    description: 'Yamunotri · Gangotri · Kedarnath · Badrinath. Zero commission. Direct operator since 2010.',
    url: 'https://www.shivgangatravels.com',
    siteName: 'Shiv Ganga Travels',
    images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: 'Kedarnath Temple — Char Dham Yatra 2026 with Shiv Ganga Travels Haridwar' }],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Shiv Ganga Travels — Char Dham Yatra 2026',
    description: 'Zero commission Char Dham Yatra from Haridwar. Est. 2010.',
    images: [{ url: '/opengraph-image', alt: 'Char Dham Yatra 2026 from Haridwar — Shiv Ganga Travels, Direct Operator since 2010' }],
  },
  alternates: { canonical: 'https://www.shivgangatravels.com' },
};

const HERO = 'https://images.pexels.com/photos/15031440/pexels-photo-15031440.jpeg';

const DHAMS = [
  { id: 'yamunotri', href: '/yamunotri-yatra', order: 'First' },
  { id: 'gangotri',  href: '/gangotri-yatra',  order: 'Second' },
  { id: 'kedarnath', href: '/kedarnath-yatra', order: 'Third' },
  { id: 'badrinath', href: '/badrinath-yatra', order: 'Fourth' },
];

const STEPS = [
  { n: '01', t: 'Tell us your dates', d: 'WhatsApp or call with your dates, group size and the city you are starting from. No form to fill in.' },
  { n: '02', t: 'Get a written costing', d: 'Within two hours: hotels named, vehicle confirmed, inclusions and exclusions itemised. Read it before you commit.' },
  { n: '03', t: 'Twenty-five percent holds it', d: 'UPI, bank transfer or card. That secures your rooms and your darshan slots. No booking fee on top.' },
  { n: '04', t: 'We handle the rest', d: 'Tourist Care registration, hotel blocks, driver briefing, pony or helicopter if you want them. You pack and arrive.' },
];

export default function HomePage() {
  const featured = getFeaturedPackages().slice(0, 4);
  const collections = Object.values(CATEGORIES);

  return (
    <>
      <Schema />

      {/* ══ COVER ════════════════════════════════════════════ */}
      <section className="lux-hero">
        <div className="lux-hero__media" data-lux-parallax="0.1">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={pxAt(HERO, 1920, 1280)}
            srcSet={pxSrcSet(HERO, [[750, 1000], [1200, 1400], [1920, 1280]])}
            sizes="100vw"
            alt="Kedarnath Temple below snow-covered Himalayan peaks — Char Dham Yatra 2026 from Haridwar"
            fetchPriority="high"
            decoding="sync"
            width={1920}
            height={1280}
          />
        </div>
        <div className="lux-hero__veil" aria-hidden="true" />

        <div className="lux-hero__body lux-wrap">
          <Reveal variant="fade">
            <Eyebrow light>Haridwar · Est. {SITE.established}</Eyebrow>
          </Reveal>

          <Reveal>
            <h1 className="lux-display lux-display--xl" style={{ marginTop: 26 }}>
              Four shrines. One road.{' '}
              <span className="lux-accent">No middleman.</span>
            </h1>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="lux-lede speakable-answer" style={{ color: 'rgba(255,255,255,0.84)', marginTop: 26, maxWidth: '48ch' }}>
              Char Dham Yatra 2026 from Haridwar, run by the people who run it — Yamunotri,
              Gangotri, Kedarnath and Badrinath from ₹18,500 per person. Fifty thousand pilgrims
              since 2010, and not one of them paid an agent’s commission.
            </p>
          </Reveal>

          <Reveal delay={0.16}>
            <div className="lux-hero__meta">
              <div><span className="lux-hero__k">Season</span><span className="lux-hero__v">Apr 19 – Nov 13</span></div>
              <div><span className="lux-hero__k">From</span><span className="lux-hero__v">₹18,500</span></div>
              <div><span className="lux-hero__k">Google rating</span><span className="lux-hero__v">{REVIEWS.rating} / 5</span></div>
              <div><span className="lux-hero__k">Pilgrims served</span><span className="lux-hero__v">50,000+</span></div>
            </div>
          </Reveal>

          <Reveal delay={0.22}>
            <div className="lux-hero__cta">
              <a
                href={`https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent('Namaste! Please share Char Dham Yatra 2026 packages and availability.')}`}
                target="_blank"
                rel="nofollow noopener noreferrer"
                className="lux-btn lux-btn--gold"
              >
                Plan your yatra
              </a>
              <Link href="/packages" className="lux-btn lux-btn--ghost-light">See the collection</Link>
              <a href={`tel:${SITE.phone.replace(/-/g, '')}`} className="lux-btn lux-btn--ghost-light">{SITE.phone}</a>
            </div>
          </Reveal>
        </div>

        <a href="#dhams" className="lux-scroll-cue lux-hero__cue" aria-label="Scroll to the four dhams">
          <span className="lux-scroll-cue__line" aria-hidden="true" />
          Scroll
        </a>
      </section>

      {/* ══ THE FOUR DHAMS ═══════════════════════════════════ */}
      <Section id="dhams" tone="paper">
        <SectionHead
          eyebrow="The circuit"
          title="Four shrines, in the order the road takes them"
          lede="The Char Dham is walked clockwise — west to east, Yamuna to Vishnu. Each one sits at a different altitude and asks something different of you."
        />

        <Stagger className="lux-grid lux-grid--4">
          {DHAMS.map(({ id, href, order }) => {
            const t = TEMPLES[id];
            return (
              <Link key={id} href={href} className="lux-zoom-host" style={{ textDecoration: 'none', display: 'block' }}>
                <span className="lux-frame lux-frame--3x4 lux-frame--zoom" style={{ display: 'block' }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={pxAt(t.photo, 600, 800)} alt={t.photoAlt} loading="lazy" decoding="async" width={600} height={800} />
                </span>
                <span className="lux-caption" style={{ display: 'block', marginTop: 18 }}>
                  {order} dham · {t.altitude}
                </span>
                <span className="lux-display lux-display--sm" style={{ display: 'block', marginTop: 8 }}>
                  {t.name.replace(' Dham', '')}
                </span>
                <span className="lux-body" style={{ display: 'block', fontSize: 13.5, marginTop: 10 }}>
                  {t.deity}
                </span>
              </Link>
            );
          })}
        </Stagger>

        <Reveal>
          <div style={{ marginTop: 'clamp(36px, 4vw, 56px)', paddingTop: 30, borderTop: '1px solid var(--rule)', display: 'flex', gap: '14px 30px', flexWrap: 'wrap' }}>
            <Link href="/char-dham-yatra" className="lux-link">The complete 2026 guide</Link>
            <Link href="/char-dham-yatra-route-map" className="lux-link">Route map</Link>
            <Link href="/blog/char-dham-yatra-cost" className="lux-link">What it costs</Link>
            <Link href="/blog/char-dham-yatra-registration" className="lux-link">Registration</Link>
          </div>
        </Reveal>
      </Section>

      {/* ══ THE COLLECTION ═══════════════════════════════════ */}
      <Section id="journeys" tone="paper-deep">
        <SectionHead
          eyebrow="The collection"
          title="Choose your pace"
          lede="Thirty-one itineraries across five ways of doing this — on the road, by helicopter, or one shrine at a time."
          aside={<Link href="/packages" className="lux-link">Browse all journeys</Link>}
        />

        <div className="lux-collection">
          {featured.map((p, i) => (
            <Reveal key={p.slug} variant={i % 2 ? 'right' : 'left'}>
              <article className="lux-collection__row lux-zoom-host">
                <Link href={`/packages/${p.slug}`} className="lux-collection__media">
                  <span className="lux-frame lux-frame--3x2 lux-frame--zoom" style={{ display: 'block' }}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={pxAt(p.photo, 900, 600)}
                      srcSet={pxSrcSet(p.photo, [[600, 400], [900, 600], [1200, 800]])}
                      sizes="(max-width: 900px) 100vw, 46vw"
                      alt={p.name}
                      loading={i === 0 ? 'eager' : 'lazy'}
                      decoding="async"
                      width={900}
                      height={600}
                    />
                  </span>
                  {p.badge && <span className="lux-embla__badge">{p.badge}</span>}
                </Link>

                <div className="lux-collection__text">
                  <span className="lux-caption">
                    {p.duration.nights}N / {p.duration.days}D · {p.startCity} · {p.difficulty}
                  </span>
                  <h3 className="lux-display lux-display--md" style={{ marginTop: 14 }}>
                    <Link href={`/packages/${p.slug}`} style={{ color: 'inherit', textDecoration: 'none' }}>
                      {p.name.replace(' Package', '')}
                    </Link>
                  </h3>
                  <p className="lux-body" style={{ fontSize: 15, marginTop: 16 }}>
                    {p.highlights.slice(0, 2).join('. ')}.
                  </p>
                  <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: 22, flexWrap: 'wrap', marginTop: 28, paddingTop: 22, borderTop: '1px solid var(--rule)' }}>
                    <span>
                      <span className="lux-facts__k">From, per person</span>
                      <strong style={{ display: 'block', fontFamily: 'var(--font-display)', fontSize: 27, fontWeight: 600, color: 'var(--ink)', marginTop: 8 }}>
                        ₹{p.price.discounted.toLocaleString('en-IN')}
                      </strong>
                    </span>
                    <Link href={`/packages/${p.slug}`} className="lux-link">View the journey</Link>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Stagger className="lux-grid lux-grid--4" style={{ marginTop: 'clamp(48px, 6vw, 88px)' }}>
          {collections.map((c) => (
            <Link key={c.slug} href={`/packages/${c.slug}`} className="lux-zoom-host" style={{ textDecoration: 'none', display: 'block' }}>
              <span className="lux-frame lux-frame--4x5 lux-frame--zoom" style={{ display: 'block' }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={pxAt(c.cover, 500, 625)} alt={c.coverAlt || c.name} loading="lazy" decoding="async" width={500} height={625} />
              </span>
              <span className="lux-display lux-display--sm" style={{ display: 'block', marginTop: 16 }}>{c.name}</span>
              <span className="lux-caption" style={{ display: 'block', marginTop: 6 }}>{c.desc}</span>
            </Link>
          ))}
        </Stagger>
      </Section>

      {/* ══ WHY DIRECT ═══════════════════════════════════════ */}
      <Section tone="ink">
        <div className="lux-rail">
          <div className="lux-rail__aside">
            <Reveal variant="fade"><Eyebrow light>The difference</Eyebrow></Reveal>
            <Reveal>
              <p className="lux-display lux-display--md" style={{ color: '#fff', marginTop: 22 }}>
                Most Char Dham prices carry an{' '}
                <span className="lux-accent">agent’s margin</span> you never see.
              </p>
            </Reveal>
            <Reveal delay={0.08}>
              <p className="lux-body speakable-answer" style={{ color: 'rgba(255,255,255,0.66)', marginTop: 22, fontSize: 15 }}>
                We are the operator. The vehicles, the drivers, the hotel relationships and the
                pujaris at the temples are ours. When you pay us, the money goes into the trip
                rather than into the layer above it.
              </p>
            </Reveal>
          </div>

          <Stagger className="lux-grid lux-grid--2">
            {ASSURANCES.map((a) => (
              <div key={a.title} style={{ paddingTop: 24, borderTop: '1px solid var(--rule-light)' }}>
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 19, fontWeight: 600, color: '#fff' }}>{a.title}</h3>
                <p className="lux-body" style={{ fontSize: 14, marginTop: 12, color: 'rgba(255,255,255,0.64)' }}>{a.body}</p>
              </div>
            ))}
          </Stagger>
        </div>

        <Reveal>
          <div style={{ display: 'flex', gap: 'clamp(28px, 6vw, 88px)', flexWrap: 'wrap', marginTop: 'clamp(48px, 6vw, 80px)', paddingTop: 40, borderTop: '1px solid var(--rule-light)' }}>
            {TRUST.stats.map((s) => (
              <div key={s.label}>
                <span className="lux-figure" style={{ color: '#fff' }}>{s.value}</span>
                <span style={{ display: 'block', fontSize: 11, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--gold)', marginTop: 14, fontWeight: 600 }}>
                  {s.label}
                </span>
                <span className="lux-caption" style={{ display: 'block', marginTop: 8, color: 'rgba(255,255,255,0.48)' }}>{s.sub}</span>
              </div>
            ))}
          </div>
        </Reveal>
      </Section>

      {/* ══ HOW BOOKING WORKS ════════════════════════════════ */}
      <Section tone="paper">
        <SectionHead
          eyebrow="How it works"
          title="Four steps, no forms"
          lede="You will talk to someone in Haridwar who has driven this route. That is the whole process."
        />
        <Stagger className="lux-grid lux-grid--4">
          {STEPS.map((s) => (
            <div key={s.n} style={{ paddingTop: 24, borderTop: '1px solid var(--rule-strong)' }}>
              <span className="lux-figure" style={{ fontSize: '2rem', color: 'var(--gold)' }}>{s.n}</span>
              <h3 className="lux-display lux-display--sm" style={{ marginTop: 18 }}>{s.t}</h3>
              <p className="lux-body" style={{ fontSize: 14, marginTop: 12 }}>{s.d}</p>
            </div>
          ))}
        </Stagger>
      </Section>

      {/* ══ PHOTOGRAPHY ══════════════════════════════════════ */}
      <Section tone="paper-deep">
        <SectionHead
          eyebrow="Photography"
          title="The Garhwal, unretouched"
          aside={<span className="lux-caption">Click any frame to enlarge</span>}
        />
        <Gallery items={GALLERY} />
      </Section>

      {/* ══ REVIEWS ══════════════════════════════════════════ */}
      <Section id="reviews">
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

      {/* ══ PLANNING ═════════════════════════════════════════ */}
      <Section tone="paper">
        <div className="lux-rail">
          <div className="lux-rail__aside">
            <Reveal variant="fade"><Eyebrow>Plan properly</Eyebrow></Reveal>
            <Reveal>
              <p className="lux-display lux-display--md" style={{ marginTop: 22 }}>
                Read before you book.
              </p>
            </Reveal>
            <Reveal delay={0.08}>
              <p className="lux-body" style={{ fontSize: 14.5, marginTop: 20 }}>
                Fifteen seasons of notes on registration, altitude, weather windows and
                what the Kedarnath trek is actually like.
              </p>
            </Reveal>
          </div>

          <Stagger className="lux-grid lux-grid--2">
            {[
              { t: 'Char Dham Yatra 2026 — the complete guide', h: '/char-dham-yatra', d: 'Dates, route, costs, registration and what to expect at each dham.' },
              { t: 'Best time to travel', h: '/blog/best-time-char-dham', d: 'Why May and September beat June, and what the monsoon does to the roads.' },
              { t: 'What it costs, honestly', h: '/blog/char-dham-yatra-cost', d: 'Line-by-line breakdown of every tier, including what operators leave out.' },
              { t: 'Registration, step by step', h: '/blog/char-dham-yatra-registration', d: 'The Tourist Care portal, the QR slip, and the checkpoints that enforce it.' },
              { t: 'Packing list', h: '/blog/char-dham-yatra-packing-list', d: 'What you need at 3,583 metres and what you can leave in Haridwar.' },
              { t: 'The Kedarnath trek', h: '/blog/kedarnath-trek-guide', d: 'Sixteen kilometres, 1,600 metres of climb, and every option for doing it.' },
            ].map((g) => (
              <Link key={g.h} href={g.h} style={{ textDecoration: 'none', display: 'block', paddingTop: 22, borderTop: '1px solid var(--rule)' }}>
                <span className="lux-display lux-display--sm" style={{ display: 'block' }}>{g.t}</span>
                <span className="lux-body" style={{ display: 'block', fontSize: 13.5, marginTop: 10 }}>{g.d}</span>
              </Link>
            ))}
          </Stagger>
        </div>
      </Section>

      {/* ══ FAQ ══════════════════════════════════════════════ */}
      <Section id="faq" tone="paper-deep">
        <div className="lux-rail">
          <div className="lux-rail__aside">
            <Reveal variant="fade"><Eyebrow>Questions</Eyebrow></Reveal>
            <Reveal>
              <p className="lux-display lux-display--md" style={{ marginTop: 20 }}>
                Everything people ask first.
              </p>
            </Reveal>
          </div>
          <FaqList faqs={GLOBAL_FAQS} />
        </div>
      </Section>

      {/* ══ CLOSE ════════════════════════════════════════════ */}
      <Section tone="navy">
        <div style={{ maxWidth: 760 }}>
          <Reveal variant="fade"><Eyebrow light>Start here</Eyebrow></Reveal>
          <Reveal>
            <h2 className="lux-display lux-display--lg" style={{ color: '#fff', marginTop: 22 }}>
              The 2026 season runs{' '}
              <span className="lux-accent">April 19 to November 13</span>.
              May and September fill first.
            </h2>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="lux-lede" style={{ color: 'rgba(255,255,255,0.74)', marginTop: 24 }}>
              Message us with your dates. You will get a real itinerary and a real price,
              from a real person in Haridwar, inside two hours.
            </p>
          </Reveal>
          <Reveal delay={0.14}>
            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginTop: 36 }}>
              <a
                href={`https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent('Namaste! Please share Char Dham Yatra 2026 packages, dates and pricing.')}`}
                target="_blank"
                rel="nofollow noopener noreferrer"
                className="lux-btn lux-btn--gold"
              >
                Enquire on WhatsApp
              </a>
              <a href={`tel:${SITE.phone.replace(/-/g, '')}`} className="lux-btn lux-btn--ghost-light">Call {SITE.phone}</a>
              <Link href="/contact" className="lux-btn lux-btn--ghost-light">Visit the office</Link>
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <div style={{ marginTop: 46 }}>
              <Facts
                items={[
                  { k: 'Office', v: SITE.address },
                  { k: 'Hours', v: '7:00 AM – 9:00 PM, every day' },
                  { k: 'Email', v: SITE.email },
                  { k: 'Also at', v: 'Roorkee, Uttarakhand' },
                ]}
              />
            </div>
          </Reveal>
        </div>
      </Section>
    </>
  );
}
