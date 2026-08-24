import { SITE } from '@/data/packages';
import { getRecentReleases, releaseTimestamp } from '@/data/press';

// ── Google News sitemap ────────────────────────────────────────────────────
//
// WHY THIS IS A SEPARATE FILE FROM /sitemap.xml
// The main sitemap tells Google a URL exists. A news sitemap tells Google News
// a URL is *news*, and it is read by a different pipeline with different rules:
// only articles from the last two days, a required <news:publication> block,
// and a publication date carrying a real UTC offset. Putting news markup in the
// main sitemap does nothing, and putting the whole site in a news sitemap gets
// the news sitemap ignored.
//
// WHAT THIS DOES AND DOES NOT BUY US
// It makes us *technically eligible*. It does not admit us to Google News —
// that needs the site to be accepted as a publication, and Google's news
// policies specifically exclude routine corporate press releases from news
// surfaces. So the honest expected value here is: correct handling if we are
// ever accepted, faster discovery of dated pages in ordinary Search, and a
// well-formed feed for the non-Google aggregators that do read these. The
// citations we actually want come from journalists reading /press and from
// answer engines quoting the figures — not from this file.
//
// WHY IT IS USUALLY EMPTY
// Two-day window, and we publish a few times a season. An empty <urlset> is
// valid and is the correct steady state. Resist the urge to widen the window to
// make it look busy: stale URLs in a news sitemap is a documented way to lose
// news eligibility.

// Revalidate hourly. The two-day window is computed at request time, so a
// statically cached copy would keep advertising a release as "news" for as long
// as the cache lived — the one thing this file must not do.
export const revalidate = 3600;

const esc = (s) =>
  String(s)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');

export async function GET() {
  const releases = getRecentReleases(2);

  const entries = releases
    .map(
      (r) => `  <url>
    <loc>${esc(`${SITE.baseUrl}/press/${r.slug}`)}</loc>
    <news:news>
      <news:publication>
        <news:name>${esc(SITE.name)}</news:name>
        <news:language>en</news:language>
      </news:publication>
      <news:publication_date>${esc(releaseTimestamp(r))}</news:publication_date>
      <news:title>${esc(r.headline)}</news:title>
    </news:news>
  </url>`
    )
    .join('\n');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:news="http://www.google.com/schemas/sitemap-news/0.9">
${entries}
</urlset>`;

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      // Short cache: the window moves every hour whether or not we publish.
      'Cache-Control': 'public, max-age=600, s-maxage=3600, stale-while-revalidate=600',
    },
  });
}
