import { SITE } from '@/data/packages';

// IndexNow key — also needs a file at /public/<key>.txt
// Generate your own at https://www.bing.com/indexnow
const INDEX_NOW_KEY = 'sgt2026indexnow7017082807';

export async function GET() {
  const sitemapUrl = `${SITE.baseUrl}/sitemap.xml`;

  try {
    // Ping Bing IndexNow (also notifies Google via partnership)
    const bingRes = await fetch('https://www.bing.com/indexnow', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        host: 'www.shivgangatravels.com',
        key: INDEX_NOW_KEY,
        keyLocation: `${SITE.baseUrl}/${INDEX_NOW_KEY}.txt`,
        urlList: [SITE.baseUrl, sitemapUrl],
      }),
    });

    // Ping Google IndexNow
    const googleRes = await fetch('https://api.indexnow.org/indexnow', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        host: 'www.shivgangatravels.com',
        key: INDEX_NOW_KEY,
        keyLocation: `${SITE.baseUrl}/${INDEX_NOW_KEY}.txt`,
        urlList: [SITE.baseUrl, sitemapUrl],
      }),
    });

    return Response.json({
      ok: true,
      bing: bingRes.status,
      google: googleRes.status,
      timestamp: new Date().toISOString(),
    });
  } catch (e) {
    return Response.json({ ok: false, error: e.message }, { status: 500 });
  }
}
