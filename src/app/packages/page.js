'use client';

/* ══════════════════════════════════════════════════════════════
   The complete collection.

   Filtering and sorting kept — people genuinely use them — but
   presented as editorial controls rather than an e-commerce
   facet rail. The grid itself reads as a magazine contents page.
   ══════════════════════════════════════════════════════════════ */

import { useState, useMemo, useDeferredValue } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'motion/react';
import { Search, X } from 'lucide-react';
import { PACKAGES, CATEGORIES, SITE } from '@/data/packages';
import { REVIEWS } from '@/data/experience';
import { pxAt, pxSrcSet } from '@/lib/pximg';

const EASE = [0.22, 1, 0.36, 1];
const HERO = 'https://images.pexels.com/photos/14149541/pexels-photo-14149541.jpeg';

const ALL_TAB = { slug: 'all', name: 'All journeys', shortName: 'All' };

const SORTS = [
  { id: 'popular',  label: 'Most booked' },
  { id: 'price-lo', label: 'Price ↑' },
  { id: 'price-hi', label: 'Price ↓' },
  { id: 'days-lo',  label: 'Shortest' },
  { id: 'days-hi',  label: 'Longest' },
];

const SORTERS = {
  popular:  (a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0),
  'price-lo': (a, b) => a.price.discounted - b.price.discounted,
  'price-hi': (a, b) => b.price.discounted - a.price.discounted,
  'days-lo':  (a, b) => a.duration.days - b.duration.days,
  'days-hi':  (a, b) => b.duration.days - a.duration.days,
};

export default function PackagesPage() {
  const [active, setActive] = useState('all');
  const [query, setQuery] = useState('');
  const [sort, setSort] = useState('popular');
  const deferredQuery = useDeferredValue(query);

  const filtered = useMemo(() => {
    let list = active === 'all' ? PACKAGES : PACKAGES.filter((p) => p.category === active);

    const q = deferredQuery.trim().toLowerCase();
    if (q) {
      list = list.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.startCity.toLowerCase().includes(q) ||
          p.tags?.some((t) => t.toLowerCase().includes(q)) ||
          p.highlights.some((h) => h.toLowerCase().includes(q))
      );
    }
    return [...list].sort(SORTERS[sort]);
  }, [active, deferredQuery, sort]);

  const tabs = [ALL_TAB, ...Object.values(CATEGORIES)];
  const from = PACKAGES.length ? Math.min(...PACKAGES.map((p) => p.price.discounted)) : 0;

  return (
    <>
      {/* ── Masthead ─────────────────────────────────── */}
      <section className="lux-hero" style={{ minHeight: 'min(66svh, 620px)' }}>
        <div className="lux-hero__media" data-lux-parallax="0.1">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={pxAt(HERO, 1920, 1000)}
            srcSet={pxSrcSet(HERO, [[750, 800], [1400, 900], [1920, 1000]])}
            sizes="100vw"
            alt="Himalayan valley on the Char Dham Yatra route from Haridwar"
            fetchPriority="high"
            decoding="sync"
            width={1920}
            height={1000}
          />
        </div>
        <div className="lux-hero__veil" aria-hidden="true" />

        <div className="lux-hero__body lux-wrap">
          <span className="lux-eyebrow lux-eyebrow--light">The complete collection</span>
          <h1 className="lux-display lux-display--xl" style={{ marginTop: 24 }}>
            Every journey we run.
          </h1>
          <p className="lux-lede" style={{ color: 'rgba(255,255,255,0.82)', marginTop: 22, maxWidth: '44ch' }}>
            {PACKAGES.length} itineraries across the Garhwal Himalaya, from ₹{from.toLocaleString('en-IN')} per
            person. Direct from Haridwar since {SITE.established} — no aggregator, no commission.
          </p>
          <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap', marginTop: 28 }}>
            <span className="lux-pill lux-pill--light">★ {REVIEWS.rating} · {REVIEWS.count} reviews</span>
            <span className="lux-pill lux-pill--light">2026 season · Apr 19 – Nov 13</span>
          </div>
        </div>
      </section>

      {/* ── Controls ─────────────────────────────────── */}
      <div className="lux-filterbar">
        <div className="lux-wrap lux-filterbar__inner">
          <div className="lux-tabs" style={{ border: 0, margin: 0, flex: 1 }} role="tablist" aria-label="Filter by collection">
            {tabs.map((t) => (
              <button
                key={t.slug}
                role="tab"
                aria-selected={active === t.slug}
                className={`lux-tab${active === t.slug ? ' is-on' : ''}`}
                onClick={() => setActive(t.slug)}
              >
                {t.shortName || t.name}
              </button>
            ))}
          </div>

          <div className="lux-filterbar__tools">
            <label className="lux-search">
              <Search size={15} aria-hidden="true" />
              <input
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search journeys, cities, shrines"
                aria-label="Search journeys"
              />
              {query && (
                <button type="button" onClick={() => setQuery('')} aria-label="Clear search">
                  <X size={14} />
                </button>
              )}
            </label>

            <label className="lux-select">
              <span className="sr-only">Sort by</span>
              <select value={sort} onChange={(e) => setSort(e.target.value)}>
                {SORTS.map((s) => <option key={s.id} value={s.id}>{s.label}</option>)}
              </select>
            </label>
          </div>
        </div>
      </div>

      {/* ── Grid ─────────────────────────────────────── */}
      <section className="lux-section lux-section--paper">
        <div className="lux-wrap">
          <p className="lux-caption" style={{ marginBottom: 34 }} aria-live="polite">
            {filtered.length} {filtered.length === 1 ? 'journey' : 'journeys'}
            {active !== 'all' ? ` in ${CATEGORIES[active]?.name}` : ''}
            {deferredQuery.trim() ? ` matching “${deferredQuery.trim()}”` : ''}
          </p>

          {filtered.length === 0 ? (
            <div style={{ padding: '60px 0', borderTop: '1px solid var(--rule)' }}>
              <h2 className="lux-display lux-display--md">Nothing matches that.</h2>
              <p className="lux-body" style={{ marginTop: 16 }}>
                Try a shrine name, a city, or clear the search. If you have something specific in
                mind we will build it — most of our trips are customised anyway.
              </p>
              <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginTop: 26 }}>
                <button className="lux-btn lux-btn--ghost" onClick={() => { setQuery(''); setActive('all'); }}>
                  Reset filters
                </button>
                <a
                  href={`https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent('Namaste! I am looking for a custom Char Dham itinerary.')}`}
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                  className="lux-btn lux-btn--gold"
                >
                  Ask for a custom itinerary
                </a>
              </div>
            </div>
          ) : (
            <motion.div layout className="lux-grid lux-grid--3">
              <AnimatePresence mode="popLayout">
                {filtered.map((p, i) => (
                  <motion.article
                    key={p.slug}
                    layout
                    initial={{ opacity: 0, y: 18 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.45, ease: EASE, delay: Math.min(i * 0.035, 0.28) }}
                    className="lux-zoom-host"
                  >
                    <Link href={`/packages/${p.slug}`} style={{ textDecoration: 'none', display: 'block' }}>
                      <span className="lux-frame lux-frame--4x5 lux-frame--zoom" style={{ display: 'block', position: 'relative' }}>
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={pxAt(p.photo, 640, 800)}
                          srcSet={pxSrcSet(p.photo, [[440, 550], [640, 800], [900, 1125]])}
                          sizes="(max-width: 620px) 100vw, (max-width: 980px) 50vw, 31vw"
                          alt={p.name}
                          loading={i < 3 ? 'eager' : 'lazy'}
                          decoding="async"
                          width={640}
                          height={800}
                        />
                        {p.badge && <span className="lux-embla__badge">{p.badge}</span>}
                      </span>

                      <span className="lux-caption" style={{ display: 'block', marginTop: 18 }}>
                        {p.duration.nights}N / {p.duration.days}D · {p.startCity} · {p.difficulty}
                      </span>

                      <h2 className="lux-display lux-display--sm" style={{ marginTop: 10 }}>
                        {p.name.replace(' Package', '')}
                      </h2>

                      <span className="lux-body" style={{ display: 'block', fontSize: 13.5, marginTop: 10 }}>
                        {p.highlights[0]}
                      </span>

                      <span style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: 16, marginTop: 20, paddingTop: 16, borderTop: '1px solid var(--rule)' }}>
                        <span>
                          <span className="lux-facts__k">From</span>
                          <strong style={{ display: 'block', fontFamily: 'var(--font-display)', fontSize: 22, fontWeight: 600, color: 'var(--ink)', marginTop: 6 }}>
                            ₹{p.price.discounted.toLocaleString('en-IN')}
                          </strong>
                        </span>
                        <span className="lux-caption">View →</span>
                      </span>
                    </Link>
                  </motion.article>
                ))}
              </AnimatePresence>
            </motion.div>
          )}
        </div>
      </section>

      {/* ── Close ────────────────────────────────────── */}
      <section className="lux-section lux-section--ink lux-section--tight">
        <div className="lux-wrap" style={{ maxWidth: 760 }}>
          <span className="lux-eyebrow lux-eyebrow--light">Not on the list?</span>
          <h2 className="lux-display lux-display--lg" style={{ color: '#fff', marginTop: 22 }}>
            Most of what we run is <span className="lux-accent">built to order</span>.
          </h2>
          <p className="lux-lede" style={{ color: 'rgba(255,255,255,0.72)', marginTop: 22 }}>
            Different dates, a slower pace, a specific hotel, a helicopter leg, a pickup from
            your city — tell us the shape of the trip and we will cost it properly.
          </p>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginTop: 34 }}>
            <a
              href={`https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent('Namaste! I would like a custom Char Dham itinerary. Here is what I have in mind:')}`}
              target="_blank"
              rel="nofollow noopener noreferrer"
              className="lux-btn lux-btn--gold"
            >
              Design my yatra
            </a>
            <a href={`tel:${SITE.phone.replace(/-/g, '')}`} className="lux-btn lux-btn--ghost-light">
              Call {SITE.phone}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
