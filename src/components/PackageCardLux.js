/* Editorial package card for listing grids. Fills its grid cell, equal-height.
   Uses the site-wide `lux-`/`--` tokens + `.lux-gcard*` classes. Server-safe. */

import Link from 'next/link';
import Icon from '@/components/Icon';
import { pxAt, pxSrcSet } from '@/lib/pximg';

export default function PackageCardLux({ pkg, priority = false }) {
  const n = pkg.duration?.nights, d = pkg.duration?.days;
  const save = (pkg.price?.original || 0) - (pkg.price?.discounted || 0);
  return (
    <Link href={`/packages/${pkg.slug}`} className="lux-card lux-lift lux-gcard">
      <div className="lux-gcard__media lux-frame lux-frame--3x2 lux-frame--zoom">
        {pkg.photo && (
          /* eslint-disable-next-line @next/next/no-img-element */
          <img
            src={pxAt(pkg.photo, 600, 400)}
            srcSet={pxSrcSet(pkg.photo, [[320, 213], [600, 400], [800, 533]])}
            sizes="(max-width: 620px) 100vw, (max-width: 980px) 50vw, 300px"
            alt={pkg.name}
            width={600} height={400}
            loading={priority ? 'eager' : 'lazy'}
            decoding="async"
          />
        )}
        {pkg.badge && <span className="lux-pill lux-pill--solid lux-gcard__badge">{pkg.badge}</span>}
        <span className="lux-gcard__dur">{n}N · {d}D</span>
      </div>

      <div className="lux-gcard__body">
        <span className="lux-eyebrow lux-eyebrow--plain" style={{ fontSize: '0.625rem' }}>
          {pkg.startCity} · {pkg.difficulty}
        </span>
        <h3 className="lux-display lux-display--sm" style={{ lineHeight: 1.2 }}>
          {pkg.name.replace(' Package', '')}
        </h3>
        {pkg.subtitle && <p className="lux-caption" style={{ lineHeight: 1.5 }}>{pkg.subtitle}</p>}

        <div className="lux-gcard__foot">
          <div>
            {pkg.price.original > pkg.price.discounted && (
              <span className="lux-gcard__was">₹{pkg.price.original.toLocaleString('en-IN')}</span>
            )}
            <div style={{ display: 'flex', alignItems: 'baseline', gap: 7 }}>
              <span className="lux-caption">From</span>
              <span className="lux-gcard__price">₹{pkg.price.discounted.toLocaleString('en-IN')}</span>
            </div>
            {save > 0 && <span className="lux-gcard__save">Save ₹{save.toLocaleString('en-IN')}</span>}
          </div>
          <span className="lux-link" style={{ borderBottom: 0, paddingBottom: 0 }} aria-hidden="true">
            View <Icon name="arrowRight" size={13} />
          </span>
        </div>
      </div>
    </Link>
  );
}
