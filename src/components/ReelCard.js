'use client';
import { useState } from 'react';
import Image from 'next/image';

/**
 * A reel card that costs nothing until it is played.
 *
 * The poster is a real image and the play control is a real button;
 * the YouTube iframe (~600 kB of player once it boots) is only
 * inserted on click. Embedding eight players on the homepage would
 * have cost more than the rest of the page put together.
 *
 * Playback uses youtube-nocookie.com, which does not write the
 * tracking cookie until the visitor actually plays something.
 */
export default function ReelCard({ reel, index }) {
  const [playing, setPlaying] = useState(false);
  const [src, setSrc] = useState(reel.poster);

  return (
    <li className="lux-reel">
      {playing ? (
        <iframe
          className="lux-reel__frame"
          src={`https://www.youtube-nocookie.com/embed/${reel.id}?autoplay=1&rel=0&playsinline=1&modestbranding=1`}
          title={reel.title}
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      ) : (
        <button
          type="button"
          className="lux-reel__play"
          onClick={() => {
            setPlaying(true);
            try {
              if (window.gtag) window.gtag('event', 'reel_play', { event_category: 'engagement', event_label: reel.id });
            } catch (e) {}
          }}
          aria-label={`Play reel: ${reel.title}`}
        >
          <Image
            className="lux-reel__poster"
            src={src}
            alt=""
            fill
            sizes="(max-width: 640px) 62vw, 240px"
            /* Only the first card can be near the fold; the rest wait. */
            loading={index === 0 ? 'eager' : 'lazy'}
            onError={() => setSrc(reel.posterFallback)}
          />
          <span className="lux-reel__scrim" aria-hidden="true" />
          <span className="lux-reel__glyph" aria-hidden="true">
            <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden="true">
              <path d="M8 5.14v13.72a1 1 0 0 0 1.54.84l10.29-6.86a1 1 0 0 0 0-1.68L9.54 4.3A1 1 0 0 0 8 5.14z" />
            </svg>
          </span>
          <span className="lux-reel__meta">
            <span className="lux-reel__title">{reel.title}</span>
            {reel.dateLabel && <span className="lux-reel__date">{reel.dateLabel}</span>}
          </span>
        </button>
      )}
    </li>
  );
}
