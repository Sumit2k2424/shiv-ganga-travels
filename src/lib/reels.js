import {
  YOUTUBE_CHANNEL_ID,
  REEL_COUNT,
  REEL_REVALIDATE,
  FALLBACK_REELS,
} from '@/data/reels';

/* YouTube's per-channel Atom feed. No API key, no quota, no account —
   it is the same feed any RSS reader subscribes to. */
const FEED = `https://www.youtube.com/feeds/videos.xml?channel_id=${YOUTUBE_CHANNEL_ID}`;

const first = (xml, tag) => {
  const m = xml.match(new RegExp(`<${tag}[^>]*>([\\s\\S]*?)</${tag}>`));
  return m ? m[1].trim() : '';
};

/* The feed is small and well-formed and we read four fields out of it,
   so a parser dependency would cost more than it earns. */
function parseFeed(xml) {
  return xml
    .split('<entry>')
    .slice(1)
    .map(entry => ({
      id: first(entry, 'yt:videoId'),
      title: decode(first(entry, 'title')),
      published: first(entry, 'published').slice(0, 10),
    }))
    .filter(r => r.id);
}

function decode(s) {
  return s
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'");
}

/**
 * The channel's most recent Shorts.
 *
 * Never throws and never returns empty: a YouTube outage at build or
 * revalidate time falls back to the seeded list rather than dropping a
 * section out of the homepage. Every upload on this channel is a Short
 * (checked across all 15 in the feed); the cards use object-fit: cover,
 * so a landscape upload still fills the 9:16 frame rather than breaking
 * the rail.
 */
export async function getReels(limit = REEL_COUNT) {
  try {
    const res = await fetch(FEED, {
      next: { revalidate: REEL_REVALIDATE },
      headers: { 'User-Agent': 'ShivGangaTravels/1.0 (+https://www.shivgangatravels.com)' },
    });
    if (!res.ok) throw new Error(`feed ${res.status}`);

    const reels = parseFeed(await res.text());
    if (!reels.length) throw new Error('feed parsed empty');
    return reels.slice(0, limit).map(withPoster);
  } catch {
    return FALLBACK_REELS.slice(0, limit).map(withPoster);
  }
}

/* `oardefault` is the original-aspect-ratio still — the vertical frame
   itself. `hqdefault` is the 16:9 one with pillarbox bars baked in, so
   it is only the fallback. */
function withPoster(reel) {
  return {
    ...reel,
    poster: `https://i.ytimg.com/vi/${reel.id}/oardefault.jpg`,
    posterFallback: `https://i.ytimg.com/vi/${reel.id}/hqdefault.jpg`,
    href: `https://www.youtube.com/shorts/${reel.id}`,
    dateLabel: formatDate(reel.published),
  };
}

/* Formatted on the server so the client never re-derives it and the
   markup cannot mismatch on hydration. */
function formatDate(iso) {
  if (!iso) return '';
  const d = new Date(`${iso}T00:00:00Z`);
  if (Number.isNaN(d.getTime())) return '';
  return d.toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric', timeZone: 'UTC' });
}
