import { SITE } from '@/data/packages';
import {
  MEDIA_KIT,
  getPublishedReleases,
  releaseTimestamp,
  releaseKeywords,
} from '@/data/press';

// ── Newsroom RSS feed ──────────────────────────────────────────────────────
//
// WHY A FEED IS THE HIGHEST-VALUE FILE IN THIS SECTION
// Everything else here waits to be found. A feed is the one surface a
// journalist can *subscribe* to, and the travel and religion desks that cover
// this beat run reader software. It is also what Google Publisher Center asks
// for if we ever apply, what news aggregators ingest, and what the AI crawlers
// re-fetch cheaply enough to notice a new release within hours instead of on
// the next full crawl.
//
// WHY FULL BODY TEXT, NOT AN EXCERPT
// Standard publisher advice is excerpt-only, to force a click. That advice is
// about ad impressions, which we do not sell. Our goal is that a sub-editor on
// deadline can lift accurate copy without visiting the site at all — a story
// that quotes us correctly from the feed is worth more than a pageview that
// does not. So the full release, the sourced figures and the boilerplate all
// ride in <content:encoded>.
//
// The dateline and figures are inside the item body deliberately: reader
// software strips most markup, and a stripped item that still carries
// "HARIDWAR, Uttarakhand" and a sourced number is still usable copy.

export const revalidate = 3600;

const esc = (s) =>
  String(s)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');

// RSS 2.0 requires RFC-822 dates, which are not what any of our data is in.
const rfc822 = (iso) => new Date(iso).toUTCString();

// CDATA is the only safe container for the HTML body, and the only thing that
// can break it is the terminator appearing in the content itself.
const cdata = (html) => `<![CDATA[${String(html).replace(/]]>/g, ']]&gt;')}]]>`;

function itemHtml(r) {
  const paras = r.body.map((x) => `<p>${esc(x)}</p>`).join('');

  const quotes = r.quotes
    .map(
      (q) =>
        `<blockquote><p>&ldquo;${esc(q.text)}&rdquo;</p><cite>${esc(q.by)}, ${esc(q.role)}</cite></blockquote>`
    )
    .join('');

  const facts = r.facts
    .map(
      (f) =>
        `<tr><td>${esc(f.fact)}</td><td>${esc(f.value)}</td><td>${esc(f.source)}</td></tr>`
    )
    .join('');

  const notes = (r.notesToEditors || [])
    .map((n) => `<li>${esc(n)}</li>`)
    .join('');

  return [
    `<p><strong>${esc(r.dateline)}</strong> &middot; ${esc(r.dateHuman)}</p>`,
    `<p><em>${esc(r.subhead)}</em></p>`,
    paras,
    quotes,
    `<h3>Figures in this release</h3>`,
    `<table><thead><tr><th>Figure</th><th>Value</th><th>Source</th></tr></thead><tbody>${facts}</tbody></table>`,
    `<p>ENDS</p>`,
    notes ? `<h3>Notes to editors</h3><ul>${notes}</ul>` : '',
    `<h3>About ${esc(SITE.name)}</h3><p>${esc(MEDIA_KIT.boilerplateShort)}</p>`,
    `<h3>Media contact</h3><p>${esc(MEDIA_KIT.contact.name)}, ${esc(MEDIA_KIT.contact.role)} &middot; ${esc(SITE.phone)} &middot; ${esc(SITE.email)}</p>`,
  ].join('');
}

export async function GET() {
  const releases = getPublishedReleases();
  const feedUrl = `${SITE.baseUrl}/press/feed.xml`;
  const built = releases.length
    ? rfc822(releaseTimestamp(releases[0]))
    : new Date().toUTCString();

  const items = releases
    .map(
      (r) => `    <item>
      <title>${esc(r.headline)}</title>
      <link>${esc(`${SITE.baseUrl}/press/${r.slug}`)}</link>
      <guid isPermaLink="true">${esc(`${SITE.baseUrl}/press/${r.slug}`)}</guid>
      <pubDate>${esc(rfc822(releaseTimestamp(r)))}</pubDate>
      <dc:creator>${esc(MEDIA_KIT.spokesperson.name)}</dc:creator>
${releaseKeywords(r).map((k) => `      <category>${esc(k)}</category>`).join('\n')}
      <description>${esc(r.summary)}</description>
      <content:encoded>${cdata(itemHtml(r))}</content:encoded>
    </item>`
    )
    .join('\n');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0"
     xmlns:content="http://purl.org/rss/1.0/modules/content/"
     xmlns:dc="http://purl.org/dc/elements/1.1/"
     xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${esc(`${SITE.name} — Press Office`)}</title>
    <link>${esc(`${SITE.baseUrl}/press`)}</link>
    <atom:link href="${esc(feedUrl)}" rel="self" type="application/rss+xml" />
    <description>Press releases and Char Dham Yatra operator data from ${esc(SITE.name)}, Haridwar. Figures are sourced and free for news organisations to use with attribution.</description>
    <language>en-IN</language>
    <copyright>Figures and photographs may be reproduced with attribution to ${esc(SITE.name)}.</copyright>
    <managingEditor>${esc(SITE.email)} (${esc(MEDIA_KIT.contact.name)})</managingEditor>
    <webMaster>${esc(SITE.email)}</webMaster>
    <lastBuildDate>${esc(built)}</lastBuildDate>
    <generator>Shiv Ganga Travels newsroom</generator>
    <ttl>60</ttl>
${items}
  </channel>
</rss>`;

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/rss+xml; charset=utf-8',
      'Cache-Control': 'public, max-age=1800, s-maxage=3600, stale-while-revalidate=1800',
    },
  });
}
