import Link from 'next/link';
import { SITE } from '@/data/packages';
import { pxAt, pxSrcSet } from '@/lib/pximg';

const CAT_FALLBACK = {
  'char-dham':   'linear-gradient(160deg, #0F2B5B 0%, #1A3E75 50%, #0B7B8B 100%)',
  'do-dham':     'linear-gradient(160deg, #0B2C44 0%, #0B7B8B 60%, #16A993 100%)',
  'single-dham': 'linear-gradient(160deg, #1A0E3B 0%, #2D1B6E 50%, #4C3A9E 100%)',
  'helicopter':  'linear-gradient(160deg, #7B1D1D 0%, #B91C1C 60%, #F97316 100%)',
  'uttarakhand': 'linear-gradient(160deg, #14532D 0%, #15803D 60%, #16A34A 100%)',
};

/**
 * Server component — every hover effect below is pure CSS, so this ships
 * zero JavaScript. Scroll-in animation is applied by the parent (the
 * listing page wraps each card in <BlurFade>).
 */
export default function PackageCard({ pkg }) {
  const savings = pkg.price.original - pkg.price.discounted;
  const pct     = Math.round((savings / pkg.price.original) * 100);
  const fallBg  = CAT_FALLBACK[pkg.category] || CAT_FALLBACK['char-dham'];
  const msg     = encodeURIComponent(
    `Namaste! I am interested in "${pkg.name}" for Char Dham Yatra 2026. Please share details and availability.`
  );

  return (
    <article
      className="group relative flex flex-col overflow-hidden rounded-2xl border border-slate-200/80 bg-white
                 shadow-[0_1px_2px_rgba(15,43,91,0.04)]
                 transition-[transform,box-shadow,border-color] duration-300 ease-out
                 motion-safe:hover:-translate-y-1.5
                 hover:border-slate-300 hover:shadow-[0_18px_40px_-12px_rgba(15,43,91,0.22)]
                 focus-within:border-navy/40 focus-within:shadow-[0_18px_40px_-12px_rgba(15,43,91,0.22)]"
    >
      {/* ── Image ── */}
      {/* A plain div, not a second <Link> — the title link's ::after overlay
          already makes the whole card clickable, so this avoids emitting two
          duplicate anchors to the same URL. */}
      <div
        className="relative block aspect-[16/10] overflow-hidden"
        style={{ background: fallBg }}
      >
        {pkg.photo && (
          <img
            src={pxAt(pkg.photo, 480, 300)}
            alt={pkg.name}
            width={400}
            height={250}
            srcSet={pxSrcSet(pkg.photo, [[400, 250], [800, 500]])}
            sizes="(max-width:640px) 92vw, (max-width:1024px) 45vw, 380px"
            loading="lazy"
            decoding="async"
            className="h-full w-full object-cover object-center
                       transition-transform [transition-duration:900ms] [transition-timing-function:cubic-bezier(0.16,1,0.3,1)]
                       motion-safe:group-hover:scale-[1.07]"
          />
        )}

        {/* Scrim — deepens on hover so the chips stay legible over the zoom */}
        <span
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 bottom-0 h-24
                     bg-gradient-to-t from-[rgba(2,10,26,0.62)] to-transparent
                     opacity-90 transition-opacity duration-300 group-hover:opacity-100"
        />

        {/* Deal ribbon */}
        {pct >= 10 && (
          <span className="absolute left-0 top-3 z-10 rounded-r-md bg-emerald-600 py-1 pl-2.5 pr-3
                           text-[11px] font-extrabold tracking-wide text-white
                           shadow-[0_2px_8px_rgba(5,150,105,0.4)]">
            {pct}% OFF
          </span>
        )}

        {/* Duration chip */}
        <span className="absolute right-3 top-3 z-10 rounded-md bg-slate-900/55 px-2.5 py-1
                         text-[11px] font-bold text-white backdrop-blur-md">
          {pkg.duration.nights}N / {pkg.duration.days}D
        </span>

        {/* Start city — reads as a caption on the photo */}
        <span className="absolute bottom-3 left-3 z-10 inline-flex items-center gap-1.5
                         text-[11.5px] font-semibold text-white/95">
          <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor"
               strokeWidth="2.5" strokeLinecap="round" aria-hidden="true">
            <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0116 0z" />
            <circle cx="12" cy="10" r="2.5" />
          </svg>
          From {pkg.startCity}
        </span>
      </div>

      {/* ── Body ── */}
      <div className="flex flex-1 flex-col gap-3 p-4">

        {/* Title + rating */}
        <div className="flex items-start justify-between gap-3">
          <h3 className="flex-1 text-[15.5px] font-bold leading-[1.35] tracking-[-0.01em] text-navy">
            <Link
              href={`/packages/${pkg.slug}`}
              className="line-clamp-2 rounded-sm transition-colors duration-200
                         after:absolute after:inset-0 after:content-['']
                         hover:text-navy-mid focus-visible:outline-none
                         focus-visible:ring-2 focus-visible:ring-navy/40"
            >
              {pkg.name}
            </Link>
          </h3>

          <div className="shrink-0 text-right">
            <span className="inline-block rounded-lg rounded-bl-none bg-navy px-2 py-1
                             text-[12.5px] font-extrabold text-white">
              4.7
            </span>
            <div className="mt-1 whitespace-nowrap text-[9.5px] text-slate-500">
              54 Google reviews
            </div>
          </div>
        </div>

        {/* Meta chips */}
        <div className="flex flex-wrap gap-1.5">
          {[
            pkg.transport.split('/')[0].trim(),
            pkg.difficulty,
            pkg.groupSize,
          ].filter(Boolean).map((label) => (
            <span
              key={label}
              className="rounded-md border border-slate-200 bg-slate-50 px-2 py-[3px]
                         text-[11px] font-medium text-slate-600
                         transition-colors duration-200 group-hover:border-slate-300"
            >
              {label}
            </span>
          ))}
        </div>

        {/* Highlights */}
        <ul className="flex flex-1 flex-col gap-1.5">
          {pkg.highlights.slice(0, 2).map((h, i) => (
            <li key={i} className="relative pl-[18px] text-[12.5px] leading-[1.55] text-slate-600">
              <svg
                className="absolute left-0 top-[4px] text-emerald-600"
                width="12" height="12" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" strokeWidth="3.5" strokeLinecap="round"
                strokeLinejoin="round" aria-hidden="true"
              >
                <path d="M20 6L9 17l-5-5" />
              </svg>
              <span className="line-clamp-2">{h}</span>
            </li>
          ))}
        </ul>

        {/* Reassurance */}
        <p className="flex items-center gap-1.5 text-[11.5px] font-semibold text-emerald-700">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor"
               strokeWidth="2.5" strokeLinecap="round" aria-hidden="true">
            <path d="M20 6L9 17l-5-5" />
          </svg>
          Free cancellation up to 30 days before departure
        </p>

        {/* Price + CTAs */}
        <div className="flex flex-wrap items-end justify-between gap-3 border-t border-slate-200 pt-3">
          <div>
            <div className="text-[11.5px] text-slate-500">
              {/* Only show a struck-through price when there is a real saving —
                  otherwise an undiscounted package renders ₹X crossed out beside ₹X. */}
              {savings > 0 && <s className="text-rose-600/75">₹{pkg.price.original.toLocaleString('en-IN')}</s>}
              {savings > 0 && (
                <span className="ml-1.5 font-bold text-emerald-600">
                  Save ₹{savings.toLocaleString('en-IN')}
                </span>
              )}
            </div>
            <div className="text-[23px] font-extrabold leading-tight tracking-[-0.02em] text-slate-900">
              ₹{pkg.price.discounted.toLocaleString('en-IN')}
              <span className="text-[11.5px] font-medium text-slate-500"> /person</span>
            </div>
            <div className="text-[10.5px] text-slate-500">All-inclusive · No hidden charges</div>
          </div>

          {/* z-10 lifts these above the title's ::after overlay link */}
          <div className="relative z-10 flex shrink-0 flex-col gap-1.5">
            <a
              href={`https://wa.me/${SITE.whatsapp}?text=${msg}`}
              target="_blank"
              rel="nofollow noopener noreferrer"
              className="rounded-lg bg-gradient-to-br from-[#F5A82A] to-gold-dark px-4 py-2.5
                         text-center text-[12.5px] font-extrabold tracking-wide text-white
                         shadow-[0_3px_10px_rgba(232,146,10,0.35)]
                         transition-[transform,box-shadow,filter] duration-200
                         hover:shadow-[0_6px_18px_rgba(232,146,10,0.45)] hover:brightness-105
                         motion-safe:hover:-translate-y-0.5 active:translate-y-0
                         focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2"
            >
              Get Free Quote
            </a>
            <Link
              href={`/packages/${pkg.slug}`}
              className="group/btn inline-flex items-center justify-center gap-1 rounded-lg border
                         border-slate-300 bg-white px-4 py-1.5 text-[12px] font-bold text-navy
                         transition-colors duration-200 hover:border-navy hover:bg-navy-light
                         focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-navy/40"
            >
              View Details
              <svg
                width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"
                className="transition-transform duration-200 motion-safe:group-hover/btn:translate-x-0.5"
              >
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}
