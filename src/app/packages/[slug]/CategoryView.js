/* Category collection — an editorial index rather than a results grid.
   Server component: zero client JS beyond the site-wide motion engine. */

import Link from 'next/link';
import { pxAt, pxSrcSet } from '@/lib/pximg';
import { SITE, CATEGORIES } from '@/data/packages';
import { REVIEWS, ASSURANCES } from '@/data/experience';
import { Section, Reveal, Stagger, SectionHead, Eyebrow, Pill } from '@/components/lux/primitives';

export default function CategoryView({ category, packages, guides = [] }) {
  const from = packages.length
    ? Math.min(...packages.map((p) => p.price.discounted))
    : null;

  const others = Object.values(CATEGORIES).filter((c) => c.slug !== category.slug);

  return (
    <>
      {/* ── Editorial masthead ─────────────────────────── */}
      <section className="lux-hero" style={{ minHeight: 'min(72svh, 700px)' }}>
        <div className="lux-hero__media" data-lux-parallax="0.1">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={pxAt(category.cover, 1920, 1100)}
            srcSet={pxSrcSet(category.cover, [[750, 900], [1400, 1000], [1920, 1100]])}
            sizes="100vw"
            alt={category.coverAlt || category.name}
            fetchPriority="high"
            decoding="sync"
            width={1920}
            height={1100}
          />
        </div>
        <div className="lux-hero__veil" aria-hidden="true" />

        <div className="lux-hero__body lux-wrap">
          <Reveal variant="fade">
            <nav aria-label="Breadcrumb" style={{ marginBottom: 24 }}>
              <ol style={{ display: 'flex', gap: 10, listStyle: 'none', margin: 0, padding: 0, fontSize: 11, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.6)' }}>
                <li><Link href="/" style={{ color: 'inherit', textDecoration: 'none' }}>Home</Link></li>
                <li aria-hidden="true">/</li>
                <li><Link href="/packages" style={{ color: 'inherit', textDecoration: 'none' }}>Journeys</Link></li>
              </ol>
            </nav>
          </Reveal>

          <Reveal>
            <h1 className="lux-display lux-display--xl">{category.name}</h1>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="lux-lede" style={{ color: 'rgba(255,255,255,0.8)', marginTop: 22, maxWidth: '44ch' }}>
              {category.desc}. {packages.length} itinerar{packages.length === 1 ? 'y' : 'ies'},
              {from ? ` from ₹${from.toLocaleString('en-IN')} per person,` : ''} run direct from
              Haridwar since {SITE.established}.
            </p>
          </Reveal>

          <Reveal delay={0.16}>
            <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap', marginTop: 30 }}>
              <Pill tone="light">★ {REVIEWS.rating} · {REVIEWS.count} reviews</Pill>
              <Pill tone="light">Zero agent commission</Pill>
              <Pill tone="light">2026 season · Apr 19 – Nov 13</Pill>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── The collection ─────────────────────────────── */}
      <Section tone="paper">
        <SectionHead
          eyebrow="The collection"
          title="Choose your pace"
          lede="Same road, different rhythms. The longer itineraries build in acclimatisation days before Kedarnath, which is the single biggest factor in how the yatra feels."
          aside={<span className="lux-caption">{packages.length} journeys</span>}
        />

        <div className="lux-collection">
          {packages.map((p, i) => (
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
                      loading={i < 2 ? 'eager' : 'lazy'}
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

                  <h2 className="lux-display lux-display--md" style={{ marginTop: 14 }}>
                    <Link href={`/packages/${p.slug}`} style={{ color: 'inherit', textDecoration: 'none' }}>
                      {p.name.replace(' Package', '')}
                    </Link>
                  </h2>

                  <p className="lux-body" style={{ fontSize: 15, marginTop: 16 }}>
                    {p.highlights.slice(0, 2).join('. ')}.
                  </p>

                  <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: 22, flexWrap: 'wrap', marginTop: 28, paddingTop: 22, borderTop: '1px solid var(--rule)' }}>
                    <span>
                      <span className="lux-facts__k">From, per person</span>
                      <span style={{ display: 'flex', alignItems: 'baseline', gap: 10, marginTop: 8 }}>
                        <strong style={{ fontFamily: 'var(--font-display)', fontSize: 27, fontWeight: 600, color: 'var(--ink)' }}>
                          ₹{p.price.discounted.toLocaleString('en-IN')}
                        </strong>
                        {p.price.original > p.price.discounted && (
                          <s style={{ color: 'var(--ink-faint)', fontSize: 14 }}>
                            ₹{p.price.original.toLocaleString('en-IN')}
                          </s>
                        )}
                      </span>
                    </span>
                    <Link href={`/packages/${p.slug}`} className="lux-link">View the journey</Link>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* ── Assurances ─────────────────────────────────── */}
      <Section tone="ink" tight>
        <SectionHead light eyebrow="Booking direct" title="What that actually buys you" size="md" />
        <Stagger className="lux-grid lux-grid--3">
          {ASSURANCES.map((a) => (
            <div key={a.title} style={{ paddingTop: 24, borderTop: '1px solid var(--rule-light)' }}>
              <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 18, fontWeight: 600, color: '#fff' }}>{a.title}</h3>
              <p className="lux-body" style={{ fontSize: 14, marginTop: 12, color: 'rgba(255,255,255,0.66)' }}>{a.body}</p>
            </div>
          ))}
        </Stagger>

        <Reveal>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginTop: 44 }}>
            <a
              href={`https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(`Namaste! Please share ${category.name} options and 2026 availability.`)}`}
              target="_blank"
              rel="nofollow noopener noreferrer"
              className="lux-btn lux-btn--gold"
            >
              Ask about {category.shortName}
            </a>
            <a href={`tel:${SITE.phone.replace(/-/g, '')}`} className="lux-btn lux-btn--ghost-light">
              Call {SITE.phone}
            </a>
          </div>
        </Reveal>
      </Section>

      {/* ── Cross-links ────────────────────────────────── */}
      <Section tone="paper" tight>
        <SectionHead eyebrow="Elsewhere" title="Other collections" size="md" />
        <Stagger className="lux-grid lux-grid--4">
          {others.map((c) => (
            <Link key={c.slug} href={`/packages/${c.slug}`} className="lux-zoom-host" style={{ textDecoration: 'none', display: 'block' }}>
              <span className="lux-frame lux-frame--4x5 lux-frame--zoom" style={{ display: 'block' }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={pxAt(c.cover, 500, 625)}
                  srcSet={pxSrcSet(c.cover, [[300, 375], [500, 625], [640, 800]])}
                  sizes="(max-width: 620px) 94vw, (max-width: 980px) 46vw, 300px"
                  alt={c.coverAlt || c.name} loading="lazy" decoding="async" width={500} height={625}
                />
              </span>
              <span className="lux-display lux-display--sm" style={{ display: 'block', marginTop: 16 }}>{c.name}</span>
              <span className="lux-caption" style={{ display: 'block', marginTop: 6 }}>{c.desc}</span>
            </Link>
          ))}
        </Stagger>

        {guides.length > 0 && (
          <div style={{ marginTop: 'clamp(40px, 5vw, 64px)', paddingTop: 32, borderTop: '1px solid var(--rule)' }}>
            <Eyebrow>Planning reading</Eyebrow>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '14px 28px', marginTop: 22 }}>
              {guides.map((g) => (
                <Link key={g.href} href={g.href} className="lux-link">{g.label}</Link>
              ))}
            </div>
          </div>
        )}
      </Section>
    </>
  );
}
