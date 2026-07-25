/* ══════════════════════════════════════════════════════════════
   SOCIAL ACCOUNTS — single source of truth.

   Editing this file updates all four places at once:
     · the footer social icon row
     · the footer legal links
     · the mobile menu
     · schema.org `sameAs` in src/app/layout.js

   Anything set `verified:false` is hidden from the site AND left
   out of sameAs — a 404 in sameAs damages Google knowledge-panel
   trust, so a missing link beats a broken one. Add future accounts
   the same way.

   NOTE on the Facebook URL: it is a numeric `profile.php?id=` link
   because the page has no vanity username yet. It works, but a
   custom username (facebook.com/shivgangatravels) is worth claiming
   — it is more memorable, survives being copied into print, and
   reads better to both people and crawlers. Update it here when
   you set one; nothing else needs touching.
   ══════════════════════════════════════════════════════════════ */

export const SOCIAL = [
  {
    id: 'instagram',
    label: 'Instagram',
    handle: '@shivgangatravels',
    url: 'https://www.instagram.com/shivgangatravels/',
    verified: true,   // already live in the previous build's schema
  },
  {
    id: 'facebook',
    label: 'Facebook',
    handle: 'Shiv Ganga Travels',
    url: 'https://www.facebook.com/profile.php?id=100083198213052',
    verified: true,
  },
  {
    id: 'youtube',
    label: 'YouTube',
    handle: '@Shivgangatravelsharidwar',
    url: 'https://www.youtube.com/@Shivgangatravelsharidwar',
    verified: true,
  },
];

/** Only accounts confirmed to exist. Everything on the site reads this. */
export const SOCIAL_LIVE = SOCIAL.filter((s) => s.verified);

/** URLs for schema.org sameAs — verified only, for the reason above. */
export const SOCIAL_SAME_AS = SOCIAL_LIVE.map((s) => s.url);
