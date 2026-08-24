import { SITE } from '@/data/packages';
import { getPublishedReleases } from '@/data/press';

// ── IndexNow submission ────────────────────────────────────────────────────
//
// WHAT THIS ACTUALLY REACHES
// IndexNow is Bing, Yandex, Seznam and Naver. Google is NOT an IndexNow
// participant and has never announced one — it evaluated the protocol and did
// not adopt it. An earlier version of this file posted to api.indexnow.org
// under a "Ping Google IndexNow" comment; api.indexnow.org is the protocol's
// shared endpoint that fans out to participating engines, and Google is not
// among them. The call is still worth making — it is the fastest path into
// Bing, which is what Copilot and several AI answer engines index against — but
// nobody should read this route as a Google notification. Google discovery
// still comes from the sitemaps and from crawl.
//
// WHAT CHANGED AND WHY
// It used to submit exactly two URLs: the homepage and /sitemap.xml. Neither is
// what IndexNow is for. The protocol expects the URLs whose *content changed*,
// and submitting a sitemap URL tells it only that an XML file changed. So the
// payload is now the pages that actually turn over — the newsroom releases and
// the dated, maintained pages — which is also what makes the weekly cron in
// vercel.json worth its slot.
//
// ON-PUBLISH SUBMISSION
// POST with { urls: [...] } to push a specific set immediately, which is what
// you want the moment a release goes live rather than waiting for Monday.
// The route only accepts URLs on this host — IndexNow rejects cross-host
// submissions anyway, and validating here turns a silent 422 into a clear one.

const INDEX_NOW_KEY = 'sgt2026indexnow7017082807';
const HOST = 'www.shivgangatravels.com';

// The shared endpoint fans out to every participating engine, so one call is
// enough; bing.com/indexnow is kept as a direct second submission because Bing
// is the participant that matters most to us and a fan-out failure there is
// worth being insulated from.
const ENDPOINTS = [
  ['indexnow', 'https://api.indexnow.org/indexnow'],
  ['bing', 'https://www.bing.com/indexnow'],
];

/** Pages whose content genuinely changes and is worth re-crawling weekly. */
function routineUrls() {
  const b = SITE.baseUrl;
  return [
    b,
    `${b}/press`,
    ...getPublishedReleases().map((r) => `${b}/press/${r.slug}`),
    `${b}/char-dham-road-status`,
    `${b}/char-dham-yatra-statistics`,
    `${b}/packages`,
  ];
}

async function submit(urlList) {
  const body = JSON.stringify({
    host: HOST,
    key: INDEX_NOW_KEY,
    keyLocation: `${SITE.baseUrl}/${INDEX_NOW_KEY}.txt`,
    urlList,
  });

  const results = await Promise.allSettled(
    ENDPOINTS.map(([, url]) =>
      fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json; charset=utf-8' },
        body,
      })
    )
  );

  return Object.fromEntries(
    results.map((res, i) => [
      ENDPOINTS[i][0],
      res.status === 'fulfilled' ? res.value.status : `failed: ${res.reason?.message}`,
    ])
  );
}

export async function GET() {
  const urlList = routineUrls();
  try {
    const endpoints = await submit(urlList);
    return Response.json({
      ok: true,
      submitted: urlList.length,
      urlList,
      endpoints,
      note: 'IndexNow reaches Bing, Yandex, Seznam and Naver. Google does not participate.',
      timestamp: new Date().toISOString(),
    });
  } catch (e) {
    return Response.json({ ok: false, error: e.message }, { status: 500 });
  }
}

export async function POST(request) {
  let urls;
  try {
    ({ urls } = await request.json());
  } catch {
    return Response.json({ ok: false, error: 'Body must be JSON: { "urls": [...] }' }, { status: 400 });
  }

  if (!Array.isArray(urls) || urls.length === 0) {
    return Response.json({ ok: false, error: '`urls` must be a non-empty array' }, { status: 400 });
  }

  const offHost = urls.filter((u) => !String(u).startsWith(SITE.baseUrl));
  if (offHost.length) {
    return Response.json(
      { ok: false, error: `All URLs must be on ${SITE.baseUrl}`, offHost },
      { status: 400 }
    );
  }

  try {
    const endpoints = await submit(urls);
    return Response.json({
      ok: true,
      submitted: urls.length,
      endpoints,
      timestamp: new Date().toISOString(),
    });
  } catch (e) {
    return Response.json({ ok: false, error: e.message }, { status: 500 });
  }
}
