'use client';
import { useState, useMemo } from 'react';
import PackageCard from '@/components/PackageCard';
import { PACKAGES, CATEGORIES, SITE } from '@/data/packages';

const ALL_TAB = { slug:'all', name:'All Packages', shortName:'All' };
const SORT_OPTIONS = [
  { id:'popular',  label:'Most Popular' },
  { id:'price-lo', label:'Price: Low to High' },
  { id:'price-hi', label:'Price: High to Low' },
  { id:'days-lo',  label:'Shortest First' },
  { id:'days-hi',  label:'Longest First' },
];

export default function PackagesPage() {
  const [active,  setActive]  = useState('all');
  const [query,   setQuery]   = useState('');
  const [sort,    setSort]    = useState('popular');

  const filtered = useMemo(() => {
    let list = active === 'all' ? PACKAGES : PACKAGES.filter(p => p.category === active);

    // Search
    if (query.trim()) {
      const q = query.trim().toLowerCase();
      list = list.filter(p =>
        p.name.toLowerCase().includes(q) ||
        p.tags?.some(t => t.toLowerCase().includes(q)) ||
        p.startCity.toLowerCase().includes(q) ||
        p.highlights.some(h => h.toLowerCase().includes(q))
      );
    }

    // Sort
    const sorters = {
      'popular':  (a,b) => (b.featured?1:0) - (a.featured?1:0),
      'price-lo': (a,b) => a.price.discounted - b.price.discounted,
      'price-hi': (a,b) => b.price.discounted - a.price.discounted,
      'days-lo':  (a,b) => a.duration.days - b.duration.days,
      'days-hi':  (a,b) => b.duration.days - a.duration.days,
    };
    return [...list].sort(sorters[sort]);
  }, [active, query, sort]);

  const tabs = [ALL_TAB, ...Object.values(CATEGORIES)];

  return (
    <>
      {/* ── Page hero ── */}
      <section style={{
        background:'linear-gradient(145deg, var(--deep) 0%, var(--deep-mid) 60%, var(--gold-dark) 100%)',
        padding:'60px 16px 44px', textAlign:'center',
      }}>
        <div style={{ maxWidth:820, margin:'0 auto' }}>
          <span style={{
            background:'rgba(6,182,212,0.18)', color:'var(--teal)',
            fontSize:11, fontWeight:600, letterSpacing:'0.14em', textTransform:'uppercase',
            padding:'5px 16px', borderRadius:100, display:'inline-block', marginBottom:18,
            border:'1px solid rgba(6,182,212,0.3)',
          }}>
            Complete Catalogue · 2026 Season
          </span>
          <h1 className="font-display" style={{
            color:'#fff', fontWeight:600, fontSize:'clamp(2rem, 5vw, 3.2rem)',
            lineHeight:1.15, marginBottom:14, letterSpacing:'-0.02em',
          }}>
            All Yatra <em style={{ fontStyle:'italic', color:'var(--teal)', fontWeight:700 }}>Packages</em>
          </h1>
          <p style={{ color:'rgba(255,255,255,0.75)', fontSize:14.5, lineHeight:1.7, maxWidth:620, margin:'0 auto' }}>
            Choose from 11 curated packages — Char Dham, Do Dham, Single Dham. All from Haridwar or Dehradun. All inclusive. All trusted.
          </p>
        </div>
      </section>

      {/* ── Sticky filter bar ── */}
      <div style={{
        position:'sticky', top:0, zIndex:40,
        background:'#fff', borderBottom:'1px solid var(--border)',
        boxShadow:'0 2px 12px rgba(18,96,204,0.06)',
      }}>
        <div style={{ maxWidth:1200, margin:'0 auto', padding:'0 16px' }}>

          {/* Search + sort row */}
          <div className="pkg-filter-row" style={{
            display:'flex', gap:12, padding:'14px 0 10px',
            flexWrap:'wrap', alignItems:'center',
          }}>
            {/* Search */}
            <div style={{
              flex:'1 1 240px', position:'relative', minWidth:200,
            }}>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="var(--muted)" strokeWidth="2"
                style={{ position:'absolute', left:12, top:'50%', transform:'translateY(-50%)', pointerEvents:'none' }}>
                <circle cx="7" cy="7" r="5"/>
                <path d="M14 14l-3-3" strokeLinecap="round"/>
              </svg>
              <input
                type="search"
                value={query}
                onChange={e => setQuery(e.target.value)}
                placeholder="Search by name, city, or highlight..."
                aria-label="Search packages"
                style={{
                  width:'100%', padding:'10px 14px 10px 36px',
                  border:'1.5px solid var(--border)', borderRadius:10,
                  fontSize:13.5, fontFamily:'var(--font)', outline:'none',
                  background:'var(--bg)', color:'var(--text)',
                  transition:'border-color .2s, background .2s',
                }}
                onFocus={e => { e.currentTarget.style.borderColor = 'var(--navy)'; e.currentTarget.style.background = '#fff'; }}
                onBlur={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.background = 'var(--bg)'; }}
              />
              {query && (
                <button onClick={() => setQuery('')}
                  aria-label="Clear search"
                  style={{
                    position:'absolute', right:10, top:'50%', transform:'translateY(-50%)',
                    background:'none', border:'none', cursor:'pointer', padding:4,
                    color:'var(--muted)', fontSize:18, lineHeight:1,
                  }}>×</button>
              )}
            </div>

            {/* Sort */}
            <div style={{ display:'flex', alignItems:'center', gap:8 }}>
              <label style={{ fontSize:12, color:'var(--muted)', fontWeight:500, whiteSpace:'nowrap' }}>Sort:</label>
              <select
                value={sort}
                onChange={e => setSort(e.target.value)}
                aria-label="Sort packages"
                style={{
                  padding:'9px 14px', border:'1.5px solid var(--border)',
                  borderRadius:10, fontSize:13, fontFamily:'var(--font)',
                  background:'#fff', color:'var(--text)', cursor:'pointer', outline:'none',
                }}>
                {SORT_OPTIONS.map(o => <option key={o.id} value={o.id}>{o.label}</option>)}
              </select>
            </div>
          </div>

          {/* Category tabs */}
          <div style={{ overflowX:'auto', padding:'0 0 12px', scrollbarWidth:'none' }}>
            <div style={{ display:'flex', gap:8, minWidth:'max-content' }}>
              {tabs.map(tab => {
                const count = tab.slug === 'all'
                  ? PACKAGES.length
                  : PACKAGES.filter(p => p.category === tab.slug).length;
                const isActive = active === tab.slug;
                return (
                  <button
                    key={tab.slug}
                    onClick={() => setActive(tab.slug)}
                    style={{
                      padding:'9px 18px', fontSize:13, fontWeight:600,
                      borderRadius:100, border:isActive ? '1.5px solid var(--blue)' : '1.5px solid var(--border)',
                      background: isActive ? 'var(--navy)' : '#fff',
                      color: isActive ? '#fff' : 'var(--mid)',
                      cursor:'pointer', whiteSpace:'nowrap',
                      fontFamily:'var(--font)',
                      transition:'all .18s',
                      display:'inline-flex', alignItems:'center', gap:8,
                    }}>
                    {tab.shortName || tab.name}
                    <span style={{
                      fontSize:11, fontWeight:600,
                      padding:'1px 7px', borderRadius:10,
                      background: isActive ? 'rgba(255,255,255,0.25)' : 'var(--navy-light)',
                      color: isActive ? '#fff' : 'var(--navy)',
                    }}>{count}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* ── Results ── */}
      <section style={{ background:'var(--bg)', padding:'32px 16px 56px', minHeight:'50vh' }}>
        <div style={{ maxWidth:1200, margin:'0 auto' }}>
          {/* Result count */}
          <div style={{ marginBottom:20, display:'flex', justifyContent:'space-between', alignItems:'center', flexWrap:'wrap', gap:10 }}>
            <p style={{ fontSize:13, color:'var(--muted)' }}>
              {filtered.length === 0 ? 'No packages found' : filtered.length === 1 ? '1 package' : `${filtered.length} packages`}
              {query && <span> matching &ldquo;<strong style={{ color:'var(--text)' }}>{query}</strong>&rdquo;</span>}
            </p>
          </div>

          {/* Grid or empty state */}
          {filtered.length === 0 ? (
            <div style={{
              textAlign:'center', padding:'60px 20px',
              background:'#fff', borderRadius:16, border:'1px solid var(--border)',
            }}>
              <div style={{ fontSize:48, marginBottom:16, opacity:0.4 }}>🔍</div>
              <h2 style={{ fontSize:17, fontWeight:700, color:'var(--text)', marginBottom:8 }}>No packages found</h2>
              <p style={{ fontSize:13.5, color:'var(--muted)', marginBottom:20 }}>
                Try different keywords or browse all packages.
              </p>
              <button onClick={() => { setQuery(''); setActive('all'); }}
                className="btn-primary"
                style={{ padding:'10px 22px' }}>
                Clear filters
              </button>
            </div>
          ) : (
            <div className="card-grid" style={{
              display:'grid',
              gridTemplateColumns:'repeat(auto-fill, minmax(280px, 1fr))',
              gap:18,
            }}>
              {filtered.map(pkg => <PackageCard key={pkg.slug} pkg={pkg}/>)}
            </div>
          )}

          {/* CTA at bottom */}
          {filtered.length > 0 && (
            <div style={{
              marginTop:48, padding:'32px 24px',
              background:'#fff', borderRadius:16,
              border:'1px solid var(--border)', boxShadow:'var(--shadow)',
              display:'flex', flexDirection:'column', alignItems:'center', textAlign:'center', gap:12,
            }}>
              <span style={{ fontSize:32 }}>💬</span>
              <div>
                <h3 style={{ fontSize:17, fontWeight:700, color:'var(--text)', marginBottom:4 }}>
                  Can&apos;t find the perfect package?
                </h3>
                <p style={{ fontSize:13, color:'var(--muted)' }}>
                  We create custom itineraries for any dates, group size, or budget.
                </p>
              </div>
              <div style={{ display:'flex', gap:10, flexWrap:'wrap' }}>
                <a href={`https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent('Namaste! I want a custom Char Dham package.')}`}
                   target="_blank" rel="nofollow noopener noreferrer"
                   style={{
                     background:'#25D366', color:'#fff', padding:'10px 22px',
                     borderRadius:10, fontSize:13, fontWeight:600, textDecoration:'none',
                     display:'inline-flex', alignItems:'center', gap:6,
                   }}>
                  💬 Request Custom Quote
                </a>
                <a href='tel:+917017082807' className="btn-outline" style={{ padding:'10px 22px' }}>
                  📞 {SITE.phone}
                </a>
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
