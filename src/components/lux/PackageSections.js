'use client';

/* ══════════════════════════════════════════════════════════════
   Interactive sections of the package experience.

   Everything here needs state or gesture handling, so it is client
   side. The static storytelling sections stay server-rendered in
   the page itself.
   ══════════════════════════════════════════════════════════════ */

import { useState, useCallback, useEffect, useRef } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { AnimatePresence, motion } from 'motion/react';
import { pxAt, pxSrcSet } from '@/lib/pximg';
import {
  ChevronDown, ChevronLeft, ChevronRight, X, Star, MapPin,
  Clock, Utensils, Camera, Mountain, BedDouble, Check,
} from 'lucide-react';

const EASE = [0.22, 1, 0.36, 1];

/* ══════════════════════════════════════════════════════════════
   Carousel scaffolding — one implementation, four uses
   ══════════════════════════════════════════════════════════════ */

function useCarousel(options = {}) {
  const [ref, api] = useEmblaCarousel({ align: 'start', containScroll: 'trimSnaps', ...options });
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(false);
  const [index, setIndex] = useState(0);

  const sync = useCallback((e) => {
    if (!e) return;
    setCanPrev(e.canScrollPrev());
    setCanNext(e.canScrollNext());
    setIndex(e.selectedScrollSnap());
  }, []);

  useEffect(() => {
    if (!api) return;
    sync(api);
    api.on('select', sync).on('reInit', sync);
    return () => { api.off('select', sync); api.off('reInit', sync); };
  }, [api, sync]);

  return {
    ref,
    api,
    canPrev,
    canNext,
    index,
    prev: () => api?.scrollPrev(),
    next: () => api?.scrollNext(),
    to: (i) => api?.scrollTo(i),
  };
}

function CarouselNav({ canPrev, canNext, prev, next, label }) {
  return (
    <div style={{ display: 'flex', gap: 8 }} role="group" aria-label={label}>
      <button className="lux-arrow" onClick={prev} disabled={!canPrev} aria-label="Previous">
        <ChevronLeft size={17} strokeWidth={1.6} />
      </button>
      <button className="lux-arrow" onClick={next} disabled={!canNext} aria-label="Next">
        <ChevronRight size={17} strokeWidth={1.6} />
      </button>
    </div>
  );
}

/* ══════════════════════════════════════════════════════════════
   1 · DAY-BY-DAY TIMELINE
   ══════════════════════════════════════════════════════════════ */

export function DayTimeline({ days = [], stops = [] }) {
  const [open, setOpen] = useState(0);

  return (
    <ol className="lux-timeline">
      {days.map((d, i) => {
        const isOpen = open === i;
        const stop = stops[Math.min(i, stops.length - 1)];
        const meta = parseDayTitle(d.title);

        return (
          <li key={d.day} className={`lux-timeline__item${isOpen ? ' is-open' : ''}`} data-lux-reveal="">
            <button
              className="lux-timeline__head"
              onClick={() => setOpen(isOpen ? -1 : i)}
              aria-expanded={isOpen}
              aria-controls={`day-panel-${d.day}`}
            >
              <span className="lux-timeline__num">
                <span className="lux-caption" style={{ letterSpacing: '0.2em' }}>Day</span>
                <span className="lux-figure">{String(d.day).padStart(2, '0')}</span>
              </span>

              <span className="lux-timeline__title">
                <span className="lux-display lux-display--sm" style={{ display: 'block' }}>
                  {meta.place}
                </span>
                {meta.leg && (
                  <span className="lux-caption" style={{ display: 'block', marginTop: 8 }}>
                    {meta.leg}
                  </span>
                )}
              </span>

              <span className="lux-timeline__chev" aria-hidden="true">
                <ChevronDown size={18} strokeWidth={1.4} />
              </span>
            </button>

            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  id={`day-panel-${d.day}`}
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.45, ease: EASE }}
                  style={{ overflow: 'hidden' }}
                >
                  <div className="lux-timeline__body">
                    <p className="lux-body">{d.desc}</p>

                    <div className="lux-timeline__facts">
                      {meta.distance && <MiniFact icon={<MapPin size={14} />} k="Distance" v={meta.distance} />}
                      {meta.hours && <MiniFact icon={<Clock size={14} />} k="On the road" v={meta.hours} />}
                      {stop && <MiniFact icon={<Mountain size={14} />} k="Altitude" v={`${stop.alt.toLocaleString('en-IN')} m`} />}
                      <MiniFact icon={<Utensils size={14} />} k="Meals" v={i === 0 ? 'Dinner' : 'Breakfast · Dinner'} />
                      <MiniFact icon={<BedDouble size={14} />} k="Overnight" v={meta.place.split('→').pop().trim()} />
                    </div>

                    {stop?.note && (
                      <p className="lux-mark lux-body" style={{ fontSize: 14, marginTop: 22 }}>
                        {stop.note}
                      </p>
                    )}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </li>
        );
      })}
    </ol>
  );
}

/** Itinerary titles read "Haridwar → Barkot (220 km | 7–8 hrs)". Split that up. */
function parseDayTitle(title = '') {
  const m = title.match(/^(.*?)\s*\(([^)]*)\)\s*$/);
  const place = (m ? m[1] : title).trim();
  const inner = m ? m[2] : '';
  const parts = inner.split('|').map((s) => s.trim());
  const distance = parts.find((p) => /km/i.test(p)) || null;
  const hours = parts.find((p) => /hr|hour/i.test(p)) || null;
  const leg = inner && !distance && !hours ? inner : null;
  return { place, distance, hours, leg };
}

function MiniFact({ icon, k, v }) {
  return (
    <span className="lux-minifact">
      <span className="lux-minifact__i" aria-hidden="true">{icon}</span>
      <span>
        <span className="lux-minifact__k">{k}</span>
        <span className="lux-minifact__v">{v}</span>
      </span>
    </span>
  );
}

/* ══════════════════════════════════════════════════════════════
   2 · HOTEL SHOWCASE
   ══════════════════════════════════════════════════════════════ */

export function HotelShowcase({ hotels = [] }) {
  const c = useCarousel({ align: 'start' });

  return (
    <>
      <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: 22 }}>
        <CarouselNav {...c} label="Hotel gallery" />
      </div>

      <div className="lux-embla" ref={c.ref}>
        <div className="lux-embla__track">
          {hotels.map((h) => (
            <article key={h.id} className="lux-embla__slide lux-embla__slide--hotel lux-zoom-host">
              <div className="lux-frame lux-frame--4x5 lux-frame--zoom">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={pxAt(h.photo, 700, 875)}
                  srcSet={pxSrcSet(h.photo, [[400, 500], [560, 700], [800, 1000]])}
                  sizes="(max-width: 487px) 82vw, 400px"
                  alt={h.photoAlt} loading="lazy" decoding="async" width={700} height={875}
                />
                <span className="lux-embla__badge">{h.stop}</span>
              </div>

              <div style={{ paddingTop: 24 }}>
                <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', gap: 14 }}>
                  <span className="lux-caption">{h.tier}</span>
                  <span style={{ display: 'inline-flex', alignItems: 'center', gap: 5, fontSize: 12.5, fontWeight: 600, color: 'var(--ink)' }}>
                    <Star size={12} fill="var(--gold)" stroke="none" /> {h.rating}
                  </span>
                </div>

                <h3 className="lux-display lux-display--sm" style={{ marginTop: 10 }}>{h.name}</h3>
                <p className="lux-body" style={{ fontSize: 14.5, marginTop: 12 }}>{h.blurb}</p>

                <ul className="lux-chips" style={{ marginTop: 18 }}>
                  {h.amenities.slice(0, 5).map((a) => (
                    <li key={a} className="lux-pill">{a}</li>
                  ))}
                </ul>

                <dl className="lux-facts" style={{ marginTop: 20 }}>
                  <div className="lux-facts__row"><dt className="lux-facts__k">Altitude</dt><dd className="lux-facts__v">{h.altitude}</dd></div>
                  <div className="lux-facts__row"><dt className="lux-facts__k">Nights</dt><dd className="lux-facts__v">{h.nights}</dd></div>
                  <div className="lux-facts__row"><dt className="lux-facts__k">Rooms</dt><dd className="lux-facts__v">{h.rooms.join(' · ')}</dd></div>
                  <div className="lux-facts__row"><dt className="lux-facts__k">Meals</dt><dd className="lux-facts__v">{h.meals}</dd></div>
                </dl>

                {h.caveat && (
                  <p className="lux-mark lux-caption" style={{ marginTop: 18, lineHeight: 1.65 }}>{h.caveat}</p>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </>
  );
}

/* ══════════════════════════════════════════════════════════════
   3 · VEHICLE SHOWCASE
   ══════════════════════════════════════════════════════════════ */

export function VehicleShowcase({ vehicles = [], matrix }) {
  const [sel, setSel] = useState(0);
  const [compare, setCompare] = useState(false);
  const v = vehicles[sel];

  return (
    <>
      <div className="lux-tabs" role="tablist" aria-label="Vehicles">
        {vehicles.map((x, i) => (
          <button
            key={x.id}
            role="tab"
            aria-selected={sel === i}
            className={`lux-tab${sel === i ? ' is-on' : ''}`}
            onClick={() => { setSel(i); setCompare(false); }}
          >
            {x.name}
          </button>
        ))}
        <button
          className={`lux-tab${compare ? ' is-on' : ''}`}
          onClick={() => setCompare((c) => !c)}
          aria-pressed={compare}
        >
          Compare all
        </button>
      </div>

      <AnimatePresence mode="wait">
        {compare ? (
          <motion.div
            key="matrix"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.35, ease: EASE }}
            className="lux-matrix-wrap"
          >
            <table className="lux-matrix">
              <caption className="sr-only">Vehicle comparison for the Char Dham circuit</caption>
              <thead>
                <tr>
                  <th scope="col" />
                  {matrix.columns.map((c) => <th key={c} scope="col">{c}</th>)}
                </tr>
              </thead>
              <tbody>
                {matrix.rows.map((r) => (
                  <tr key={r.label}>
                    <th scope="row">{r.label}</th>
                    {r.values.map((val, i) => <td key={i}>{val}</td>)}
                  </tr>
                ))}
              </tbody>
            </table>
          </motion.div>
        ) : (
          <motion.div
            key={v.id}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.35, ease: EASE }}
            className="lux-vehicle"
          >
            <div className="lux-frame lux-frame--3x2">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={pxAt(v.photo, 1400, 933)}
                srcSet={pxSrcSet(v.photo, [[700, 467], [1000, 667], [1400, 933]])}
                sizes="(max-width: 620px) 94vw, 46vw"
                alt={v.photoAlt} loading="lazy" decoding="async" width={1400} height={933}
              />
            </div>

            <div>
              <span className="lux-eyebrow">{v.klass}</span>
              <h3 className="lux-display lux-display--md" style={{ marginTop: 16 }}>{v.name}</h3>
              <p className="lux-body" style={{ marginTop: 16 }}>{v.note}</p>

              <dl className="lux-facts" style={{ marginTop: 26 }}>
                <div className="lux-facts__row"><dt className="lux-facts__k">Seats</dt><dd className="lux-facts__v">{v.seats}</dd></div>
                <div className="lux-facts__row"><dt className="lux-facts__k">Luggage</dt><dd className="lux-facts__v">{v.luggage}</dd></div>
                <div className="lux-facts__row"><dt className="lux-facts__k">Best for</dt><dd className="lux-facts__v">{v.ideal}</dd></div>
                <div className="lux-facts__row"><dt className="lux-facts__k">Availability</dt><dd className="lux-facts__v">{v.priceHint}</dd></div>
              </dl>

              <ul className="lux-chips" style={{ marginTop: 22 }}>
                {v.comfort.map((c) => <li key={c} className="lux-pill">{c}</li>)}
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

/* ══════════════════════════════════════════════════════════════
   4 · TEMPLE GUIDE
   ══════════════════════════════════════════════════════════════ */

export function TempleGuide({ temples = [] }) {
  const [sel, setSel] = useState(0);
  const t = temples[sel];
  if (!t) return null;

  return (
    <>
      <div className="lux-tabs" role="tablist" aria-label="Temples on this journey">
        {temples.map((x, i) => (
          <button
            key={x.id}
            role="tab"
            aria-selected={sel === i}
            className={`lux-tab${sel === i ? ' is-on' : ''}`}
            onClick={() => setSel(i)}
          >
            {x.name.replace(' Dham', '')}
          </button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={t.id}
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.4, ease: EASE }}
          className="lux-temple"
        >
          <div className="lux-temple__media lux-zoom-host">
            <div className="lux-frame lux-frame--3x4 lux-frame--zoom">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={pxAt(t.photo, 900, 1200)}
                srcSet={pxSrcSet(t.photo, [[450, 600], [700, 933], [900, 1200]])}
                sizes="(max-width: 620px) 94vw, 46vw"
                alt={t.photoAlt} loading="lazy" decoding="async" width={900} height={1200}
              />
            </div>
            <dl className="lux-facts" style={{ marginTop: 26 }}>
              <div className="lux-facts__row"><dt className="lux-facts__k">Deity</dt><dd className="lux-facts__v">{t.deity}</dd></div>
              <div className="lux-facts__row"><dt className="lux-facts__k">Altitude</dt><dd className="lux-facts__v">{t.altitude}</dd></div>
              <div className="lux-facts__row"><dt className="lux-facts__k">Opens 2026</dt><dd className="lux-facts__v">{t.opens2026}</dd></div>
              <div className="lux-facts__row"><dt className="lux-facts__k">Closes 2026</dt><dd className="lux-facts__v">{t.closes2026}</dd></div>
              <div className="lux-facts__row"><dt className="lux-facts__k">Darshan</dt><dd className="lux-facts__v">{t.darshanHours}</dd></div>
              <div className="lux-facts__row"><dt className="lux-facts__k">Approach</dt><dd className="lux-facts__v">{t.approach}</dd></div>
            </dl>
          </div>

          <div className="lux-temple__text">
            <h3 className="lux-display lux-display--md">{t.name}</h3>

            <h4 className="lux-eyebrow" style={{ marginTop: 34 }}>The temple</h4>
            <p className="lux-body" style={{ marginTop: 14 }}>{t.history}</p>

            <h4 className="lux-eyebrow" style={{ marginTop: 34 }}>Why pilgrims come</h4>
            <p className="lux-body" style={{ marginTop: 14 }}>{t.importance}</p>

            <h4 className="lux-eyebrow" style={{ marginTop: 34 }}>Rituals</h4>
            <ul className="lux-list" style={{ marginTop: 14 }}>
              {t.rituals.map((r) => <li key={r}>{r}</li>)}
            </ul>

            <h4 className="lux-eyebrow" style={{ marginTop: 34 }}>Worth knowing</h4>
            <ul className="lux-list" style={{ marginTop: 14 }}>
              {t.facts.map((f) => <li key={f}>{f}</li>)}
            </ul>

            <p className="lux-caption" style={{ marginTop: 30, display: 'inline-flex', alignItems: 'center', gap: 8 }}>
              <Camera size={14} /> {t.photography}
            </p>
          </div>
        </motion.div>
      </AnimatePresence>
    </>
  );
}

/* ══════════════════════════════════════════════════════════════
   5 · GALLERY with lightbox
   ══════════════════════════════════════════════════════════════ */

export function Gallery({ items = [] }) {
  const [open, setOpen] = useState(null);
  const closeRef = useRef(null);
  const boxRef = useRef(null);
  const restoreRef = useRef(null); // the gallery cell that opened the lightbox

  const move = useCallback(
    (dir) => setOpen((i) => (i == null ? i : (i + dir + items.length) % items.length)),
    [items.length]
  );

  // Keyed on open/closed only — arrow-key navigation changes `open` but must
  // not re-run this effect (that would fire the focus-restore mid-session).
  const isOpen = open != null;
  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e) => {
      if (e.key === 'Escape') setOpen(null);
      if (e.key === 'ArrowRight') move(1);
      if (e.key === 'ArrowLeft') move(-1);
      // Keep Tab inside the dialog — it's aria-modal, so focus must not
      // wander into the page behind the backdrop.
      if (e.key === 'Tab' && boxRef.current) {
        const focusables = boxRef.current.querySelectorAll('button');
        if (!focusables.length) return;
        const first = focusables[0];
        const last = focusables[focusables.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault(); last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault(); first.focus();
        }
      }
    };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    closeRef.current?.focus();
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
      // Hand focus back to the cell that opened us (dialog exit contract)
      restoreRef.current?.focus?.();
    };
  }, [isOpen, move]);

  const src = (u, w, h) => `${u}?auto=compress&cs=tinysrgb&w=${w}&h=${h}&fit=crop`;

  return (
    <>
      <div className="lux-gallery" data-lux-stagger="">
        {items.map((g, i) => (
          <button
            key={i}
            className={`lux-gallery__cell${g.span ? ` lux-gallery__cell--${g.span}` : ''} lux-zoom-host`}
            onClick={(e) => { restoreRef.current = e.currentTarget; setOpen(i); }}
            aria-label={`Open image: ${g.caption}`}
          >
            <span className="lux-frame lux-frame--zoom" style={{ display: 'block', height: '100%' }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={src(g.src, 900, 700)}
                srcSet={pxSrcSet(g.src, [[450, 350], [700, 544], [900, 700]])}
                sizes="(max-width: 860px) 50vw, 25vw"
                alt={g.alt} loading="lazy" decoding="async"
              />
            </span>
            <span className="lux-gallery__cap">
              <span className="lux-gallery__cap-t">{g.caption}</span>
              <span className="lux-gallery__cap-s">{g.place}</span>
            </span>
          </button>
        ))}
      </div>

      <AnimatePresence>
        {open != null && (
          <motion.div
            ref={boxRef}
            className="lux-lightbox"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.28 }}
            role="dialog"
            aria-modal="true"
            aria-label={items[open].caption}
            onClick={(e) => { if (e.target === e.currentTarget) setOpen(null); }}
          >
            <button ref={closeRef} className="lux-lightbox__x" onClick={() => setOpen(null)} aria-label="Close">
              <X size={22} strokeWidth={1.4} />
            </button>
            <button className="lux-lightbox__nav lux-lightbox__nav--l" onClick={() => move(-1)} aria-label="Previous image">
              <ChevronLeft size={26} strokeWidth={1.3} />
            </button>

            <motion.figure
              key={open}
              initial={{ opacity: 0, scale: 0.985 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, ease: EASE }}
              className="lux-lightbox__fig"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={src(items[open].src, 1800, 1200)} alt={items[open].alt} />
              <figcaption>
                <strong>{items[open].caption}</strong>
                <span>{items[open].place}</span>
                <span className="lux-lightbox__count">{open + 1} / {items.length}</span>
              </figcaption>
            </motion.figure>

            <button className="lux-lightbox__nav lux-lightbox__nav--r" onClick={() => move(1)} aria-label="Next image">
              <ChevronRight size={26} strokeWidth={1.3} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

/* ══════════════════════════════════════════════════════════════
   6 · REVIEWS
   ══════════════════════════════════════════════════════════════ */

export function ReviewsWall({ reviews }) {
  const c = useCarousel({ align: 'start' });

  return (
    <>
      <div className="lux-reviews__top">
        <div style={{ display: 'flex', alignItems: 'flex-end', gap: 28, flexWrap: 'wrap' }}>
          <div>
            <span className="lux-figure" style={{ fontSize: 'clamp(3rem,6vw,4.4rem)' }}>{reviews.rating}</span>
            <span style={{ display: 'flex', gap: 3, marginTop: 12 }} aria-label={`${reviews.rating} out of 5`}>
              {[0, 1, 2, 3, 4].map((i) => (
                <Star key={i} size={14} fill={i < Math.round(reviews.rating) ? 'var(--gold)' : 'none'} stroke="var(--gold)" strokeWidth={1.3} />
              ))}
            </span>
            <span className="lux-caption" style={{ display: 'block', marginTop: 10 }}>
              {reviews.count} reviews on {reviews.source}
            </span>
          </div>

          <div style={{ minWidth: 210, flex: 1, maxWidth: 320 }}>
            {reviews.breakdown.map((b) => (
              <div key={b.stars} style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 7 }}>
                <span className="lux-caption" style={{ width: 12 }}>{b.stars}</span>
                <span className="lux-bar"><i style={{ width: `${b.pct}%` }} /></span>
                <span className="lux-caption" style={{ width: 32, textAlign: 'right' }}>{b.pct}%</span>
              </div>
            ))}
          </div>
        </div>

        <CarouselNav {...c} label="Traveller reviews" />
      </div>

      <div className="lux-embla" ref={c.ref} style={{ marginTop: 42 }}>
        <div className="lux-embla__track">
          {reviews.items.map((r, i) => (
            <blockquote key={i} className="lux-embla__slide lux-embla__slide--review lux-card">
              <span style={{ display: 'flex', gap: 3 }} aria-label={`${r.stars} out of 5`}>
                {[0, 1, 2, 3, 4].map((s) => (
                  <Star key={s} size={12} fill={s < r.stars ? 'var(--gold)' : 'none'} stroke="var(--gold)" strokeWidth={1.4} />
                ))}
              </span>
              <p className="lux-body" style={{ fontSize: 15, marginTop: 20, flex: 1 }}>{r.text}</p>
              <footer style={{ marginTop: 26, paddingTop: 20, borderTop: '1px solid var(--rule)' }}>
                <cite style={{ fontStyle: 'normal', fontWeight: 600, fontSize: 14.5, color: 'var(--ink)' }}>{r.name}</cite>
                <span className="lux-caption" style={{ display: 'block', marginTop: 5 }}>
                  {r.where} · {r.trip} · {r.when}
                </span>
                {r.verified && (
                  <span className="lux-pill lux-pill--gold" style={{ marginTop: 12 }}>
                    <Check size={11} strokeWidth={2.4} /> Verified traveller
                  </span>
                )}
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </>
  );
}

/* ══════════════════════════════════════════════════════════════
   7 · FAQ
   ══════════════════════════════════════════════════════════════ */

export function FaqList({ faqs = [] }) {
  const [open, setOpen] = useState(0);

  return (
    <div className="lux-faq">
      {faqs.map((f, i) => {
        const isOpen = open === i;
        return (
          <div key={i} className="lux-faq__item">
            <h3 style={{ margin: 0 }}>
              <button
                className="lux-faq__q"
                onClick={() => setOpen(isOpen ? -1 : i)}
                aria-expanded={isOpen}
                aria-controls={`faq-${i}`}
              >
                <span>{f.q}</span>
                <ChevronDown
                  size={18}
                  strokeWidth={1.5}
                  style={{ flex: 'none', transition: 'transform .4s cubic-bezier(.22,1,.36,1)', transform: isOpen ? 'rotate(180deg)' : 'none' }}
                />
              </button>
            </h3>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  id={`faq-${i}`}
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.4, ease: EASE }}
                  style={{ overflow: 'hidden' }}
                >
                  <p className="lux-body lux-faq__a">{f.a}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
