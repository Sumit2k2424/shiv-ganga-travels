'use client';

import { useState, useMemo } from 'react';
import PackageCard from '@/components/PackageCard';
import { PACKAGES, CATEGORIES, SITE } from '@/data/packages';

import { Input } from '@/components/ui/input';
import {
  Select, SelectTrigger, SelectValue, SelectContent, SelectItem,
} from '@/components/ui/select';
import { BlurFade } from '@/components/magicui/blur-fade';
import { NumberTicker } from '@/components/magicui/number-ticker';

const ALL_TAB = { slug: 'all', name: 'All Packages', shortName: 'All', icon: '✨' };

const SORT_OPTIONS = [
  { id: 'popular',  label: 'Most Popular' },
  { id: 'price-lo', label: 'Price: Low to High' },
  { id: 'price-hi', label: 'Price: High to Low' },
  { id: 'days-lo',  label: 'Shortest First' },
  { id: 'days-hi',  label: 'Longest First' },
];

const HERO_IMG =
  'https://images.pexels.com/photos/14149541/pexels-photo-14149541.jpeg?auto=compress&cs=tinysrgb&w=1600&h=700&fit=crop';

export default function PackagesPage() {
  const [active, setActive] = useState('all');
  const [query,  setQuery]  = useState('');
  const [sort,   setSort]   = useState('popular');

  const filtered = useMemo(() => {
    let list = active === 'all' ? PACKAGES : PACKAGES.filter((p) => p.category === active);

    if (query.trim()) {
      const q = query.trim().toLowerCase();
      list = list.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.tags?.some((t) => t.toLowerCase().includes(q)) ||
          p.startCity.toLowerCase().includes(q) ||
          p.highlights.some((h) => h.toLowerCase().includes(q))
      );
    }

    const sorters = {
      'popular':  (a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0),
      'price-lo': (a, b) => a.price.discounted - b.price.discounted,
      'price-hi': (a, b) => b.price.discounted - a.price.discounted,
      'days-lo':  (a, b) => a.duration.days - b.duration.days,
      'days-hi':  (a, b) => b.duration.days - a.duration.days,
    };
    return [...list].sort(sorters[sort]);
  }, [active, query, sort]);

  const tabs = [ALL_TAB, ...Object.values(CATEGORIES)];

  // Cheapest package drives the "from ₹x" figure in the hero. Computed rather
  // than hardcoded, so it can never drift out of date the way the old
  // "11 curated packages" line did (there are actually 39).
  //
  // NOTE: this currently resolves to ₹3,499 — the Nag Tibba weekend trek, an
  // Uttarakhand adventure tour rather than a yatra. If you'd rather anchor on
  // pilgrimage pricing, filter the category out:
  //   PACKAGES.filter(p => p.category !== 'uttarakhand')   → ₹5,699
  const lowestPrice = useMemo(
    () => Math.min(...PACKAGES.map((p) => p.price.discounted)),
    []
  );

  const hasFilters = query.trim() !== '' || active !== 'all';

  return (
    <>
      {/* ══ Hero ══ */}
      <section className="relative overflow-hidden px-4 pb-16 pt-16 text-center sm:pb-20 sm:pt-20">
        <img
          src={HERO_IMG}
          alt=""
          aria-hidden="true"
          fetchPriority="high"
          decoding="async"
          className="absolute inset-0 h-full w-full object-cover object-[center_35%]"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[linear-gradient(180deg,rgba(5,16,38,0.86)_0%,rgba(5,16,38,0.66)_50%,rgba(5,14,32,0.94)_100%)]"
        />

        <div className="relative z-10 mx-auto max-w-3xl">
          <BlurFade delay={0.05}>
            <span className="inline-flex items-center gap-2 rounded-full border border-teal/30
                             bg-teal/15 px-4 py-1.5 text-[11px] font-semibold uppercase
                             tracking-[0.14em] text-teal-light backdrop-blur-sm">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full rounded-full bg-teal-light
                                 opacity-75 motion-safe:animate-ping" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-teal-light" />
              </span>
              Complete Catalogue · 2026 Season
            </span>
          </BlurFade>

          <BlurFade delay={0.14}>
            <h1 className="font-display mt-5 text-[clamp(2.1rem,5.5vw,3.4rem)] font-semibold
                           leading-[1.12] tracking-[-0.02em] text-white">
              All Yatra{' '}
              <em className="bg-gradient-to-r from-teal-light to-gold bg-clip-text
                             font-bold italic text-transparent">
                Packages
              </em>
            </h1>
          </BlurFade>

          <BlurFade delay={0.22}>
            <p className="mx-auto mt-4 max-w-xl text-[15px] leading-[1.7] text-white/75">
              Char Dham, Do Dham, Single Dham, helicopter yatras and Uttarakhand
              tours — departing from Haridwar or Dehradun. All-inclusive, zero commission.
            </p>
          </BlurFade>

          {/* Stat strip */}
          <BlurFade delay={0.3}>
            <dl className="mt-8 flex flex-wrap items-center justify-center gap-x-8 gap-y-4 sm:gap-x-12">
              {[
                { value: PACKAGES.length, prefix: '',  suffix: '',  label: 'Packages' },
                { value: lowestPrice,     prefix: '₹', suffix: '',  label: 'Starting from' },
                { value: 50000,           prefix: '',  suffix: '+', label: 'Pilgrims since 2010' },
              ].map((s) => (
                <div key={s.label} className="text-center">
                  <dd className="text-[26px] font-extrabold tracking-[-0.02em] text-white sm:text-[30px]">
                    {/* The ticker starts at 0, so the real figure is also rendered
                        for crawlers and screen readers rather than a flash of "0". */}
                    <span className="sr-only">
                      {s.prefix}{s.value.toLocaleString('en-IN')}{s.suffix}
                    </span>
                    <span aria-hidden="true">
                      {s.prefix}
                      <NumberTicker value={s.value} className="text-white" />
                      {s.suffix}
                    </span>
                  </dd>
                  <dt className="mt-0.5 text-[11px] font-medium uppercase tracking-[0.1em] text-white/55">
                    {s.label}
                  </dt>
                </div>
              ))}
            </dl>
          </BlurFade>
        </div>
      </section>

      {/* ══ Sticky filter bar ══ */}
      <div className="sticky top-0 z-40 border-b border-slate-200 bg-white/85 backdrop-blur-xl
                      supports-[backdrop-filter]:bg-white/75">
        <div className="mx-auto max-w-[1200px] px-4">

          {/* Search + sort */}
          <div className="flex flex-wrap items-center gap-3 pb-2.5 pt-3.5">
            <div className="relative min-w-[200px] flex-1 basis-60">
              <svg
                width="16" height="16" viewBox="0 0 16 16" fill="none"
                stroke="currentColor" strokeWidth="2" aria-hidden="true"
                className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400"
              >
                <circle cx="7" cy="7" r="5" />
                <path d="M14 14l-3-3" strokeLinecap="round" />
              </svg>
              <Input
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search by name, city or highlight…"
                aria-label="Search packages"
                className="h-10 rounded-xl border-slate-200 bg-slate-50 pl-10 pr-9 text-[13.5px]
                           transition-colors focus-visible:bg-white
                           [&::-webkit-search-cancel-button]:hidden"
              />
              {query && (
                <button
                  onClick={() => setQuery('')}
                  aria-label="Clear search"
                  className="absolute right-2.5 top-1/2 grid h-6 w-6 -translate-y-1/2 place-items-center
                             rounded-full text-slate-400 transition-colors hover:bg-slate-200
                             hover:text-slate-700"
                >
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                       strokeWidth="3" strokeLinecap="round" aria-hidden="true">
                    <path d="M6 6l12 12M18 6L6 18" />
                  </svg>
                </button>
              )}
            </div>

            <div className="flex items-center gap-2">
              <span className="whitespace-nowrap text-[12px] font-medium text-slate-500">Sort</span>
              <Select value={sort} onValueChange={setSort}>
                <SelectTrigger
                  aria-label="Sort packages"
                  className="h-10 w-[176px] rounded-xl border-slate-200 text-[13px]"
                >
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {SORT_OPTIONS.map((o) => (
                    <SelectItem key={o.id} value={o.id} className="text-[13px]">
                      {o.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Category pills */}
          <div className="-mx-4 overflow-x-auto px-4 pb-3 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            <div className="flex min-w-max gap-2">
              {tabs.map((tab) => {
                const count =
                  tab.slug === 'all'
                    ? PACKAGES.length
                    : PACKAGES.filter((p) => p.category === tab.slug).length;
                const isActive = active === tab.slug;
                return (
                  <button
                    key={tab.slug}
                    onClick={() => setActive(tab.slug)}
                    aria-pressed={isActive}
                    className={[
                      'inline-flex items-center gap-2 whitespace-nowrap rounded-full border px-4 py-2',
                      'text-[13px] font-semibold transition-all duration-200 ease-out',
                      'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-navy/40',
                      isActive
                        ? 'border-navy bg-navy text-white shadow-[0_4px_14px_-4px_rgba(15,43,91,0.5)]'
                        : 'border-slate-200 bg-white text-slate-600 hover:border-slate-300 hover:bg-slate-50 hover:text-navy',
                    ].join(' ')}
                  >
                    <span aria-hidden="true" className="text-[13px]">{tab.icon}</span>
                    {tab.shortName || tab.name}
                    <span
                      className={[
                        'rounded-full px-1.5 py-px text-[10.5px] font-bold tabular-nums transition-colors',
                        isActive ? 'bg-white/25 text-white' : 'bg-navy-light text-navy',
                      ].join(' ')}
                    >
                      {count}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* ══ Results ══ */}
      <section className="min-h-[50vh] bg-bg px-4 pb-16 pt-7">
        <div className="mx-auto max-w-[1200px]">

          {/* Result count */}
          <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
            <p className="text-[13px] text-slate-500" aria-live="polite">
              {filtered.length === 0 ? (
                'No packages found'
              ) : (
                <>
                  Showing{' '}
                  <strong className="font-bold tabular-nums text-slate-900">{filtered.length}</strong>{' '}
                  {filtered.length === 1 ? 'package' : 'packages'}
                </>
              )}
              {query && (
                <> for “<strong className="font-semibold text-slate-900">{query}</strong>”</>
              )}
            </p>

            {hasFilters && (
              <button
                onClick={() => { setQuery(''); setActive('all'); }}
                className="inline-flex items-center gap-1.5 rounded-lg px-2.5 py-1 text-[12.5px]
                           font-semibold text-navy transition-colors hover:bg-navy-light"
              >
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                     strokeWidth="3" strokeLinecap="round" aria-hidden="true">
                  <path d="M6 6l12 12M18 6L6 18" />
                </svg>
                Clear filters
              </button>
            )}
          </div>

          {/* Grid / empty state */}
          {filtered.length === 0 ? (
            <BlurFade>
              <div className="rounded-2xl border border-slate-200 bg-white px-5 py-16 text-center">
                <div className="mx-auto mb-4 grid h-14 w-14 place-items-center rounded-2xl bg-slate-100">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                       strokeWidth="2" className="text-slate-400" aria-hidden="true">
                    <circle cx="11" cy="11" r="7" />
                    <path d="M21 21l-4.3-4.3" strokeLinecap="round" />
                  </svg>
                </div>
                <h2 className="text-[17px] font-bold text-slate-900">No packages match that</h2>
                <p className="mx-auto mt-1.5 max-w-sm text-[13.5px] text-slate-500">
                  Try a different keyword, or clear the filters to see all {PACKAGES.length} packages.
                </p>
                <button
                  onClick={() => { setQuery(''); setActive('all'); }}
                  className="mt-5 rounded-xl bg-navy px-6 py-2.5 text-[13px] font-bold text-white
                             transition-all duration-200 hover:bg-navy-mid
                             motion-safe:hover:-translate-y-0.5"
                >
                  Clear filters
                </button>
              </div>
            </BlurFade>
          ) : (
            <div className="grid grid-cols-[repeat(auto-fill,minmax(288px,1fr))] gap-5">
              {filtered.map((pkg, i) => (
                <BlurFade
                  key={pkg.slug}
                  inView
                  delay={Math.min(i, 8) * 0.055}
                  offset={14}
                  className="h-full"
                >
                  <PackageCard pkg={pkg} />
                </BlurFade>
              ))}
            </div>
          )}

          {/* Bottom CTA */}
          {filtered.length > 0 && (
            <BlurFade inView offset={16}>
              <div className="relative mt-14 overflow-hidden rounded-2xl border border-navy/15
                              bg-[linear-gradient(135deg,#0F2B5B_0%,#1A3E75_55%,#0B7B8B_100%)]
                              px-6 py-10 text-center">
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full
                             bg-gold/20 blur-3xl"
                />
                <div className="relative">
                  <h2 className="font-display text-[22px] font-bold text-white sm:text-[26px]">
                    Can&apos;t find the right fit?
                  </h2>
                  <p className="mx-auto mt-2 max-w-md text-[13.5px] leading-relaxed text-white/70">
                    We build custom itineraries around your dates, group size and budget —
                    talk to the people who actually run the trip.
                  </p>
                  <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
                    <a
                      href={`https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(
                        'Namaste! I want a custom Char Dham package.'
                      )}`}
                      target="_blank"
                      rel="nofollow noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-xl bg-[#25D366] px-6 py-3
                                 text-[13.5px] font-bold text-white shadow-lg
                                 transition-all duration-200 hover:brightness-105
                                 motion-safe:hover:-translate-y-0.5"
                    >
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                        <path d="M12 2a10 10 0 00-8.6 15L2 22l5.2-1.4A10 10 0 1012 2zm0 18.2a8.2 8.2 0 01-4.2-1.2l-.3-.2-3.1.8.8-3-.2-.3A8.2 8.2 0 1112 20.2z" />
                        <path d="M17.5 14.4c-.3-.2-1.7-.9-2-1-.3-.1-.4-.2-.6.1-.2.3-.7 1-.9 1.2-.2.2-.3.2-.6.1-.3-.2-1.2-.5-2.3-1.4-.9-.8-1.4-1.7-1.6-2-.2-.3 0-.5.1-.6l.5-.5c.1-.2.2-.3.3-.5 0-.2 0-.4 0-.5 0-.2-.6-1.5-.9-2-.2-.5-.4-.4-.6-.4h-.5c-.2 0-.5.1-.7.3-.3.3-1 1-1 2.4s1 2.8 1.2 3c.1.2 2 3.1 4.9 4.3.7.3 1.2.5 1.6.6.7.2 1.3.2 1.8.1.6-.1 1.7-.7 1.9-1.4.2-.7.2-1.2.2-1.4-.1-.1-.3-.2-.6-.3z" />
                      </svg>
                      Request a custom quote
                    </a>
                    <a
                      href="tel:+917817996730"
                      className="inline-flex items-center gap-2 rounded-xl border border-white/25
                                 bg-white/10 px-6 py-3 text-[13.5px] font-bold text-white
                                 backdrop-blur-sm transition-colors duration-200 hover:bg-white/20"
                    >
                      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                           strokeWidth="2.2" strokeLinecap="round" aria-hidden="true">
                        <path d="M22 16.9v3a2 2 0 01-2.2 2 19.8 19.8 0 01-8.6-3.1 19.5 19.5 0 01-6-6A19.8 19.8 0 012.1 4.2 2 2 0 014.1 2h3a2 2 0 012 1.7c.1 1 .4 1.9.7 2.8a2 2 0 01-.5 2.1L8.1 9.9a16 16 0 006 6l1.3-1.2a2 2 0 012.1-.5c.9.3 1.8.6 2.8.7a2 2 0 011.7 2z" />
                      </svg>
                      {SITE.phone}
                    </a>
                  </div>
                </div>
              </div>
            </BlurFade>
          )}
        </div>
      </section>
    </>
  );
}
