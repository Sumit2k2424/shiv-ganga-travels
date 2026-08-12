/* ══════════════════════════════════════════════════════════════
   REELS — what the "From the road" section on the homepage plays.

   YouTube is automatic. The channel publishes an RSS feed, so new
   Shorts appear on the site within the hour with nothing to edit
   here. Channel: @Shivgangatravelsharidwar.

   Instagram is NOT automatic, and cannot be. Meta retired the public
   oEmbed endpoint (it now needs a reviewed Facebook app token), and
   the profile page itself serves a login wall to anything that is
   not a signed-in browser — verified 2026-08-12. So Instagram reels
   are listed by hand below, or not at all.

   Since the same reels are cross-posted to both platforms, the
   section runs off YouTube and links out to Instagram. Add entries
   to INSTAGRAM_REELS only for reels that exist ONLY on Instagram.
   ══════════════════════════════════════════════════════════════ */

/** Resolved from the channel page 2026-08-12. Stable for the life of the channel. */
export const YOUTUBE_CHANNEL_ID = 'UC3mgcBDq4J-3dtY0mJXN4TA';

/** How many reels the rail shows. The feed returns 15. */
export const REEL_COUNT = 8;

/** Re-read the feed this often (seconds). One hour is plenty for a reel. */
export const REEL_REVALIDATE = 3600;

/**
 * Instagram-only reels. Each needs a poster image committed to
 * /public/reels/ — Instagram's own CDN URLs are signed and expire,
 * so they cannot be hotlinked.
 *
 *   { id: 'DAbc123', caption: 'Kedarnath at first light', poster: '/reels/kedarnath-dawn.jpg' }
 *
 * The card links out to the reel; Instagram is not embedded (its
 * embed script is ~90 kB of Meta JS and would need the CSP widened
 * to allow their scripts as well as their frames).
 */
export const INSTAGRAM_REELS = [];

/**
 * Shown only if the YouTube feed cannot be reached at build or
 * revalidate time, so the section degrades to something real
 * instead of vanishing. These were the six most recent Shorts on
 * 2026-08-12; they stay valid until the videos are deleted.
 */
export const FALLBACK_REELS = [
  { id: 'VBdsydrXDFE', title: 'Badrinath Dham 2026 | Badrinath Temple Uttarakhand | Char Dham Yatra', published: '2026-08-12' },
  { id: 'x3I3DacEZGY', title: 'Chamoli Cloudburst & Flash Flood Destruction | Uttarakhand', published: '2026-08-10' },
  { id: 'UfeG_7C5nX0', title: 'Yamunotri Dham — the sacred beginning of the Char Dham Yatra', published: '2026-08-10' },
  { id: 'ZM2N2G94LXk', title: 'Welcome to the breathtaking waterfalls of Shillong, Meghalaya!', published: '2026-07-02' },
  { id: 'KPa-Lsei_AE', title: 'Hidden Waterfall Paradise | Nature at Its Best | Shiv Ganga Travels', published: '2026-06-26' },
  { id: 'Oz3cq9KofA4', title: 'Kedarnath Temple 2026 | Divine Vibes of Mahadev', published: '2026-06-02' },
];
