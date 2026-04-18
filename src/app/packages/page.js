'use client';
import { useState } from 'react';
import PackageCard from '@/components/PackageCard';
import { PACKAGES, CATEGORIES } from '@/data/packages';

const ALL_TAB = { slug: 'all', name: 'All Packages', shortName: 'All' };

export default function PackagesPage() {
  const [active, setActive] = useState('all');

  const filtered =
    active === 'all' ? PACKAGES : PACKAGES.filter((p) => p.category === active);

  const tabs = [ALL_TAB, ...Object.values(CATEGORIES)];

  return (
    <div style={{ paddingTop: '88px', background: '#fef9f0', minHeight: '100vh' }}>
      {/* Page header */}
      <div
        className="py-16 text-center px-4"
        style={{ background: 'linear-gradient(160deg, #142742 0%, #1e3a5f 100%)' }}
      >
        <p className="text-orange-300 text-sm font-semibold tracking-[0.25em] uppercase mb-3">
          Uttarakhand Char Dham 2025
        </p>
        <h1
          className="text-white mb-4"
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(2rem, 5vw, 3.5rem)',
            fontWeight: 600,
          }}
        >
          All Yatra Packages
        </h1>
        <p className="text-blue-200 max-w-xl mx-auto">
          Choose from Char Dham, Do Dham, and Single Dham packages — all from Haridwar,
          all-inclusive, all trusted.
        </p>
      </div>

      {/* Filter tabs */}
      <div className="sticky top-[72px] z-30 shadow-sm" style={{ background: '#fff' }}>
        <div className="max-w-7xl mx-auto px-4 overflow-x-auto">
          <div className="flex gap-1 py-3 min-w-max">
            {tabs.map((tab) => (
              <button
                key={tab.slug}
                onClick={() => setActive(tab.slug)}
                className="px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 whitespace-nowrap"
                style={
                  active === tab.slug
                    ? { background: '#e8620c', color: '#fff' }
                    : { background: '#f5f0e8', color: '#4a4a4a' }
                }
              >
                {tab.shortName || tab.name}
                <span
                  className="ml-2 text-xs px-1.5 py-0.5 rounded-full"
                  style={
                    active === tab.slug
                      ? { background: 'rgba(255,255,255,0.25)', color: '#fff' }
                      : { background: '#ddd', color: '#666' }
                  }
                >
                  {tab.slug === 'all'
                    ? PACKAGES.length
                    : PACKAGES.filter((p) => p.category === tab.slug).length}
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Package grid */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        {filtered.length === 0 ? (
          <p className="text-center text-gray-400 py-20">No packages found.</p>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map((pkg) => (
              <PackageCard key={pkg.slug} pkg={pkg} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
