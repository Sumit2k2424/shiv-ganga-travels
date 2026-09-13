// GET /api/google-reviews
// Resolves the GBP listing via Places API (New) text search, verified by
// coordinates so a same-named operator elsewhere can never be picked up,
// then fetches the real reviews. Successful results are cached 24 hrs;
// failures are never cached, so a bad key or quota blip recovers on the
// next request instead of a day later.
// Requires GOOGLE_MAPS_API_KEY (or legacy GOOGLE_PLACES_API_KEY) in Vercel env vars,
// with "Places API (New)" enabled on the GCP project.

import { unstable_cache } from 'next/cache';

const BUSINESS_NAME = 'Shiv Ganga Travels';
const BUSINESS_LAT  = 29.9896838;
const BUSINESS_LNG  = 78.1927454;
const CID           = '16074078434377735602';          // from GBP URL
const MAPS_URL      = 'https://www.google.com/maps?cid=16074078434377735602';
const REVIEW_URL    = 'https://www.google.com/maps?cid=16074078434377735602&action=writeareview';
const CACHE_SECS    = 86400;
const MAX_DIST_M    = 150; // a text-search hit further than this is not our office

// Once the first successful call reports the resolved id, paste it here to
// skip the text search entirely (one API call per refresh instead of two).
const KNOWN_PLACE_ID = process.env.GOOGLE_PLACE_ID || '';

export const dynamic = 'force-dynamic';

function distanceMetres(lat1, lng1, lat2, lng2) {
  const R = 6371000, toRad = d => d * Math.PI / 180;
  const dLat = toRad(lat2 - lat1), dLng = toRad(lng2 - lng1);
  const a = Math.sin(dLat / 2) ** 2
    + Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) * Math.sin(dLng / 2) ** 2;
  return 2 * R * Math.asin(Math.sqrt(a));
}

// Step 1: Find Place ID via Text Search (New), accepting only a hit at our coordinates
async function findPlaceId(apiKey) {
  if (KNOWN_PLACE_ID) return KNOWN_PLACE_ID;

  const res = await fetch('https://places.googleapis.com/v1/places:searchText', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-Goog-Api-Key': apiKey,
      'X-Goog-FieldMask': 'places.id,places.displayName,places.location',
    },
    body: JSON.stringify({
      textQuery: `${BUSINESS_NAME} Haridwar`,
      locationBias: { circle: { center: { latitude: BUSINESS_LAT, longitude: BUSINESS_LNG }, radius: 500 } },
      maxResultCount: 5,
    }),
    cache: 'no-store',
  });
  const data = await res.json();
  if (!res.ok || data.error) {
    throw new Error(`Text Search: ${data.error?.status || res.status} — ${data.error?.message || ''}`);
  }

  const match = (data.places || []).find(p =>
    p.location
    && distanceMetres(BUSINESS_LAT, BUSINESS_LNG, p.location.latitude, p.location.longitude) <= MAX_DIST_M
  );
  if (!match) {
    const seen = (data.places || []).map(p => p.displayName?.text).join(', ') || 'none';
    throw new Error(`Text Search: no result at our coordinates (got: ${seen})`);
  }
  return match.id;
}

// Step 2: Fetch reviews via Place Details (New)
async function fetchReviews(apiKey, placeId) {
  const res = await fetch(`https://places.googleapis.com/v1/places/${placeId}`, {
    headers: {
      'X-Goog-Api-Key': apiKey,
      'X-Goog-FieldMask': 'reviews,rating,userRatingCount',
    },
    cache: 'no-store',
  });
  const data = await res.json();
  if (!res.ok || data.error) {
    throw new Error(`Place Details: ${data.error?.status || res.status} — ${data.error?.message || ''}`);
  }

  return {
    placeId,
    rating: data.rating,
    total:  data.userRatingCount,
    reviews: (data.reviews || [])
      .filter(rv => rv.rating >= 4)
      .slice(0, 6)
      .map(rv => ({
        author: rv.authorAttribution?.displayName || 'Pilgrim',
        photo:  rv.authorAttribution?.photoUri || null,
        rating: rv.rating,
        text:   rv.text?.text || '',
        time:   rv.relativePublishTimeDescription || '',
        url:    rv.authorAttribution?.uri || null,
      })),
  };
}

// Only a successful result is stored; a thrown error leaves the cache empty.
const getCachedReviews = unstable_cache(
  async (apiKey) => {
    const placeId = await findPlaceId(apiKey);
    const result  = await fetchReviews(apiKey, placeId);
    if (!result.reviews?.length) throw new Error('No reviews returned from Places API');
    return result;
  },
  ['google-reviews', CID],
  { revalidate: CACHE_SECS },
);

export async function GET() {
  const apiKey = process.env.GOOGLE_MAPS_API_KEY || process.env.GOOGLE_PLACES_API_KEY;

  if (!apiKey || apiKey === 'your_api_key_here') {
    return Response.json({
      error: 'GOOGLE_MAPS_API_KEY not configured',
      reviews: [], rating: null, total: null,
      mapsUrl: MAPS_URL, reviewUrl: REVIEW_URL,
    });
  }

  try {
    const result = await getCachedReviews(apiKey);
    return Response.json(
      { ...result, mapsUrl: MAPS_URL, reviewUrl: REVIEW_URL },
      { headers: { 'Cache-Control': `public, s-maxage=${CACHE_SECS}, stale-while-revalidate=3600` } }
    );
  } catch (err) {
    console.error('Google Reviews error:', err.message);
    return Response.json(
      {
        error: err.message,
        reviews: [], rating: null, total: null,
        mapsUrl: MAPS_URL, reviewUrl: REVIEW_URL,
      },
      { headers: { 'Cache-Control': 'no-store' } }
    );
  }
}
