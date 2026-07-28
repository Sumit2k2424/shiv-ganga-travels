'use client';

/* ══════════════════════════════════════════════════════════════
   /packages — editorial catalogue (Phase 3)

   Client component (filter/search/sort). Logic preserved verbatim
   from the previous version; the shell is rebuilt in the editorial
   `lux-` system. Metadata is supplied by packages/layout.js.
   ══════════════════════════════════════════════════════════════ */

import { useState, useMemo } from 'react';
import Link from 'next/link';
import { PACKAGES, CATEGORIES, SITE } from '@/data/packages';
import Icon, { WhatsAppIcon } from '@/components/Icon';
import PackageCardLux from '@/components/PackageCardLux';

const ALL_TAB = { slug: 'all', name: 'All Packages', shortName: 'All' };

const SORT_OPTIONS = [
  { id: 'popular',  label: 'Most Popular' },
  { id: 'price-lo', label: 'Price: Low to High' },
  { id: 'price-hi', label: 'Price: High to Low' },
  { id: 'days-lo',  label: 'Shortest First' },
  { id: 'days-hi',  label: 'Longest First' },
];

const HERO_IMG =
  'https://images.pexels.com/photos/14149541/pexels-photo-14149541.jpeg?auto=compress&cs=tinysrgb&w=1600&h=700&fit=crop';

const wa = (msg) => `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(msg)}`;

const PKG_CSS = `
  .pk-hero { position:relative; overflow:hidden; background:var(--ink); color:#fff; padding:clamp(64px,9vw,120px) var(--lux-gutter) clamp(48px,6vw,80px); }
  .pk-hero__img { position:absolute; inset:0; width:100%; height:100%; object-fit:cover; object-position:center 35%; opacity:0.32; }
  .pk-hero__veil { position:absolute; inset:0; background:linear-gradient(180deg,rgba(11,27,56,0.5),rgba(11,27,56,0.86)); }
  .pk-hero__in { position:relative; z-index:2; max-width:var(--lux-max,1320px); margin:0 auto; }
  .pk-stats { display:flex; flex-wrap:wrap; gap:clamp(28px,5vw,64px); margin-top:38px; }
  .pk-stat__n { font-family:var(--font-display); font-size:clamp(1.9rem,3.2vw,2.6rem); color:#fff; line-height:1; letter-spacing:-0.02em; }
  .pk-stat__l { font-size:0.68rem; letter-spacing:0.14em; text-transform:uppercase; color:rgba(255,255,255,0.55); margin-top:8px; }

  .pk-filter { position:sticky; top:0; z-index:30; border-bottom:1px solid var(--rule); }
  .pk-filter__in { max-width:var(--lux-max,1320px); margin:0 auto; padding:14px var(--lux-gutter) 12px; }
  .pk-controls { display:flex; flex-wrap:wrap; gap:12px; align-items:center; }
  .pk-search { position:relative; flex:1; min-width:220px; }
  .pk-search svg.i { position:absolute; left:14px; top:50%; transform:translateY(-50%); color:var(--ink-faint); pointer-events:none; }
  .pk-search .lux-input { padding-left:40px; }
  .pk-search__x { position:absolute; right:10px; top:50%; transform:translateY(-50%); display:grid; place-items:center; width:24px; height:24px; border:0; background:none; color:var(--ink-faint); cursor:pointer; border-radius:100px; }
  .pk-search__x:hover { background:var(--rule); color:var(--ink); }
  .pk-sort { display:flex; align-items:center; gap:9px; }
  .pk-sort label { font-size:0.68rem; letter-spacing:0.12em; text-transform:uppercase; color:var(--ink-faint); font-weight:600; }
  .pk-sort .lux-select { width:auto; min-width:180px; min-height:44px; padding:11px 15px; }

  .pk-pills { display:flex; gap:8px; overflow-x:auto; scrollbar-width:none; margin-top:12px; padding-bottom:2px; }
  .pk-pills::-webkit-scrollbar { display:none; }
  .pk-pill { flex:none; display:inline-flex; align-items:center; gap:8px; white-space:nowrap; padding:9px 16px; border:1px solid var(--rule-strong); border-radius:var(--ds-r-pill); background:#fff; color:var(--ink-soft); font-size:0.72rem; font-weight:600; letter-spacing:0.06em; cursor:pointer; transition:border-color .3s var(--ease-lux), color .3s var(--ease-lux), background .3s var(--ease-lux); }
  .pk-pill:hover { border-color:var(--ink); color:var(--ink); }
  .pk-pill.is-on { background:var(--ink); border-color:var(--ink); color:#fff; }
  .pk-pill__c { font-size:0.65rem; padding:1px 7px; border-radius:100px; background:var(--paper-deep); color:var(--ink-soft); font-variant-numeric:tabular-nums; }
  .pk-pill.is-on .pk-pill__c { background:rgba(255,255,255,0.2); color:#fff; }
  .pk-pill:focus-visible { outline:2px solid var(--gold); outline-offset:2px; }

  .pk-grid { display:grid; grid-template-columns:repeat(auto-fill,minmax(288px,1fr)); gap:20px; }
  @media (max-width:620px){ .pk-grid{ grid-template-columns:1fr; } }
`;

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
  const lowestPrice = useMemo(() => Math.min(...PACKAGES.map((p) => p.price.discounted)), []);
  const hasFilters = query.trim() !== '' || active !== 'all';

  return (
    <div className="lux-noscroll-x">
      <style dangerouslySetInnerHTML={{ __html: PKG_CSS }} />

      {/* ══ Editorial masthead ══ */}
      <section className="pk-hero">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={HERO_IMG} alt="" aria-hidden="true" className="pk-hero__img" fetchPriority="high" decoding="async" />
        <div className="pk-hero__veil" aria-hidden="true" />
        <div className="pk-hero__in">
          <span className="lux-eyebrow lux-eyebrow--light">Complete catalogue · 2026 season</span>
          <h1 className="lux-display lux-display--xl" style={{ color: '#fff', margin: '20px 0 0', maxWidth: '18ch' }}>
            All yatra <span className="lux-accent">packages</span>
          </h1>
          <p className="lux-lede" style={{ color: 'rgba(255,255,255,0.75)', marginTop: 20, maxWidth: '52ch' }}>
            Char Dham, Do Dham, Single Dham, helicopter yatras and Uttarakhand tours — departing from
            Haridwar or Dehradun. All-inclusive, zero commission.
          </p>
          <dl className="pk-stats">
            {[
              { n: PACKAGES.length, l: 'Packages' },
              { n: `₹${lowestPrice.toLocaleString('en-IN')}`, l: 'Starting from' },
              { n: '50,000+', l: 'Pilgrims since 2010' },
            ].map((s) => (
              <div key={s.l}>
                <dd className="pk-stat__n">{s.n}</dd>
                <dt className="pk-stat__l">{s.l}</dt>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* ══ Sticky filter bar (glass) ══ */}
      <div className="pk-filter lux-glass">
        <div className="pk-filter__in">
          <div className="pk-controls">
            <div className="pk-search">
              <svg className="i" width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <circle cx="7" cy="7" r="5" /><path d="M14 14l-3-3" strokeLinecap="round" />
              </svg>
              <input
                type="search"
                className="lux-input"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search by name, city or highlight…"
                aria-label="Search packages"
              />
              {query && (
                <button className="pk-search__x" onClick={() => setQuery('')} aria-label="Clear search">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" aria-hidden="true"><path d="M6 6l12 12M18 6L6 18" /></svg>
                </button>
              )}
            </div>
            <div className="pk-sort">
              <label htmlFor="pk-sort-sel">Sort</label>
              <select id="pk-sort-sel" className="lux-select" value={sort} onChange={(e) => setSort(e.target.value)} aria-label="Sort packages">
                {SORT_OPTIONS.map((o) => <option key={o.id} value={o.id}>{o.label}</option>)}
              </select>
            </div>
          </div>

          <div className="pk-pills" role="tablist" aria-label="Filter by category">
            {tabs.map((tab) => {
              const count = tab.slug === 'all' ? PACKAGES.length : PACKAGES.filter((p) => p.category === tab.slug).length;
              const isOn = active === tab.slug;
              return (
                <button key={tab.slug} role="tab" aria-selected={isOn}
                  className={`pk-pill${isOn ? ' is-on' : ''}`} onClick={() => setActive(tab.slug)}>
                  {tab.shortName || tab.name}
                  <span className="pk-pill__c">{count}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* ══ Results ══ */}
      <section className="lux-section lux-section--paper" style={{ minHeight: '50vh', paddingTop: 'clamp(28px,4vw,44px)' }}>
        <div className="lux-wrap">
          <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: 12, marginBottom: 22 }}>
            <p className="lux-caption" aria-live="polite">
              {filtered.length === 0 ? 'No packages found' : <>Showing <strong style={{ color: 'var(--ink)' }}>{filtered.length}</strong> {filtered.length === 1 ? 'package' : 'packages'}</>}
              {query && <> for “<strong style={{ color: 'var(--ink)' }}>{query}</strong>”</>}
            </p>
            {hasFilters && (
              <button className="lux-link" style={{ border: 0, background: 'none', cursor: 'pointer', padding: 0 }} onClick={() => { setQuery(''); setActive('all'); }}>
                Clear filters <Icon name="arrowRight" size={13} />
              </button>
            )}
          </div>

          {filtered.length === 0 ? (
            <div className="lux-card" style={{ padding: 'clamp(40px,7vw,80px)', textAlign: 'center' }}>
              <span className="lux-ico-chip" style={{ margin: '0 auto 18px' }}><Icon name="map" size={22} /></span>
              <h2 className="lux-display lux-display--sm">No packages match that</h2>
              <p className="lux-body" style={{ margin: '10px auto 0', maxWidth: '42ch' }}>
                Try a different keyword, or clear the filters to see all {PACKAGES.length} packages.
              </p>
              <button className="lux-btn lux-btn--ink" style={{ marginTop: 24 }} onClick={() => { setQuery(''); setActive('all'); }}>
                Clear filters
              </button>
            </div>
          ) : (
            <div className="pk-grid">
              {filtered.map((pkg, i) => <PackageCardLux key={pkg.slug} pkg={pkg} priority={i < 3} />)}
            </div>
          )}

          {/* Bottom CTA */}
          {filtered.length > 0 && (
            <div className="lux-card lux-card--dark" style={{ background: 'var(--ink)', marginTop: 56, padding: 'clamp(32px,5vw,56px)', textAlign: 'center' }}>
              <span className="lux-eyebrow lux-eyebrow--light lux-eyebrow--center" style={{ justifyContent: 'center' }}>Bespoke</span>
              <h2 className="lux-display lux-display--md" style={{ color: '#fff', margin: '16px 0 10px' }}>Can’t find the right fit?</h2>
              <p className="lux-body" style={{ color: 'rgba(255,255,255,0.72)', margin: '0 auto', maxWidth: '46ch' }}>
                We build custom itineraries around your dates, group size and budget — talk to the people who actually run the trip.
              </p>
              <div style={{ display: 'flex', justifyContent: 'center', gap: 12, flexWrap: 'wrap', marginTop: 28 }}>
                <a href={wa('Namaste! I want a custom Char Dham package.')} target="_blank" rel="nofollow noopener noreferrer"
                  className="lux-btn" style={{ background: '#25D366', color: '#fff', borderColor: '#25D366' }}>
                  <WhatsAppIcon size={16} /> Request a custom quote
                </a>
                <a href="tel:+917817996730" className="lux-btn lux-btn--ghost-light">
                  <Icon name="phone" size={15} /> {SITE.phone}
                </a>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
