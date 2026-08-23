import Link from 'next/link';
import Image from 'next/image';
import { Section, SectionHead } from '@/components/lux/primitives';
import Icon from '@/components/Icon';
import ReelCard from '@/components/ReelCard';
import { getReels } from '@/lib/reels';
import { INSTAGRAM_REELS } from '@/data/reels';
import { SOCIAL_LIVE } from '@/data/social';

/**
 * "From the road" — the reels rail.
 *
 * Server component: the feed is read at build and re-read hourly
 * (ISR), so the section stays current without anyone editing code.
 * Only the individual cards are client-side, and only to swap a
 * poster for a player on click.
 */
export default async function ReelsSection() {
  const reels = await getReels();
  if (!reels.length && !INSTAGRAM_REELS.length) return null;

  const yt = SOCIAL_LIVE.find(s => s.id === 'youtube');
  const ig = SOCIAL_LIVE.find(s => s.id === 'instagram');

  return (
    <Section tone="paper-deep" id="reels">
      <SectionHead
        eyebrow="From the road"
        title="Recent reels"
        lede="Short films from the routes we are running this season — shot by our own drivers and guides, not stock footage."
        aside={
          yt && (
            <a href={yt.url} target="_blank" rel="noopener noreferrer" className="lux-link">
              All reels on YouTube <Icon name="arrowRight" size={14} />
            </a>
          )
        }
      />

      <ul className="lux-reels" role="list">
        {reels.map((reel) => (
          <ReelCard key={reel.id} reel={reel} />
        ))}

        {/* Instagram-only reels, if any are listed by hand. These link
            out rather than embed — see the note in data/reels.js. */}
        {INSTAGRAM_REELS.map(r => (
          <li key={r.id} className="lux-reel">
            <a
              className="lux-reel__play"
              href={`https://www.instagram.com/reel/${r.id}/`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Watch on Instagram: ${r.caption}`}
            >
              <Image className="lux-reel__poster" src={r.poster} alt="" fill sizes="(max-width: 640px) 62vw, 240px" loading="lazy" />
              <span className="lux-reel__scrim" aria-hidden="true" />
              <span className="lux-reel__glyph" aria-hidden="true">
                <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true">
                  <path d="M8 5.14v13.72a1 1 0 0 0 1.54.84l10.29-6.86a1 1 0 0 0 0-1.68L9.54 4.3A1 1 0 0 0 8 5.14z" />
                </svg>
              </span>
              <span className="lux-reel__meta">
                <span className="lux-reel__title">{r.caption}</span>
                <span className="lux-reel__date">Instagram</span>
              </span>
            </a>
          </li>
        ))}

        {ig && (
          <li className="lux-reel lux-reel--more">
            <a href={ig.url} target="_blank" rel="noopener noreferrer" className="lux-reel__morelink">
              {/* Icon.js has no brand glyphs — this is Instagram's mark,
                  inlined here rather than added to a set of hand-drawn
                  UI icons it does not belong in. */}
              <span className="lux-reel__moreicon" aria-hidden="true">
                <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
                  <rect x="2.5" y="2.5" width="19" height="19" rx="5.5" />
                  <circle cx="12" cy="12" r="4.5" />
                  <circle cx="17.6" cy="6.4" r="1.1" fill="currentColor" stroke="none" />
                </svg>
              </span>
              <span className="lux-reel__moretext">
                More on Instagram
                <span className="lux-reel__morehandle">{ig.handle}</span>
              </span>
            </a>
          </li>
        )}
      </ul>
    </Section>
  );
}
