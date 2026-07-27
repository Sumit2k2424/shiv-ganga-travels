// GET /api/google-reviews
// Auto-discovers Place ID via text search, then fetches real reviews.
// Cached 24 hrs. Requires GOOGLE_PLACES_API_KEY in Vercel env vars.

const BUSINESS_NAME = 'Shiv Ganga Travels';
const BUSINESS_LAT  = 29.9896838;
const BUSINESS_LNG  = 78.1927454;
const CID           = '16074078434377735602';          // from GBP URL
const MAPS_URL      = 'https://www.google.com/maps?cid=16074078434377735602';
const REVIEW_URL    = 'https://www.google.com/maps?cid=16074078434377735602&action=writeareview';
const CACHE_SECS    = 86400;

export const revalidate = 86400; // 24 hours — must be a static literal in Next.js 15

// Step 1: Find Place ID via text search
async function findPlaceId(apiKey) {
  const url = `https://maps.googleapis.com/maps/api/place/findplacefromtext/json`
    + `?input=${encodeURIComponent(BUSINESS_NAME + ' Haridwar')}`
    + `&inputtype=textquery`
    + `&locationbias=point:${BUSINESS_LAT},${BUSINESS_LNG}`
    + `&fields=place_id,name`
    + `&key=${apiKey}`;

  const res = await fetch(url, { next: { revalidate: CACHE_SECS } });
  if (!res.ok) throw new Error(`Find Place HTTP ${res.status}`);
  const data = await res.json();
  if (data.status !== 'OK' || !data.candidates?.length) {
    throw new Error(`Find Place: ${data.status}`);
  }
  return data.candidates[0].place_id;
}

// Step 2: Fetch reviews using Place ID (legacy API)
async function fetchReviews(apiKey, placeId) {
  const url = `https://maps.googleapis.com/maps/api/place/details/json`
    + `?place_id=${placeId}`
    + `&fields=reviews,rating,user_ratings_total`
    + `&reviews_sort=newest`
    + `&language=en`
    + `&key=${apiKey}`;

  const res = await fetch(url, { next: { revalidate: CACHE_SECS } });
  if (!res.ok) throw new Error(`Place Details HTTP ${res.status}`);
  const data = await res.json();
  if (data.status !== 'OK') throw new Error(`Place Details: ${data.status} — ${data.error_message || ''}`);

  const r = data.result;
  return {
    rating: r.rating,
    total:  r.user_ratings_total,
    reviews: (r.reviews || [])
      .filter(rv => rv.rating >= 4)
      .slice(0, 6)
      .map(rv => ({
        author: rv.author_name,
        photo:  rv.profile_photo_url || null,
        rating: rv.rating,
        text:   rv.text,
        time:   rv.relative_time_description,
        url:    rv.author_url || null,
      })),
  };
}

// Step 2 alt: new Places API (v1) — tried if legacy fails
async function fetchReviewsNew(apiKey, placeId) {
  const url = `https://places.googleapis.com/v1/places/${placeId}`;
  const res = await fetch(url, {
    headers: {
      'X-Goog-Api-Key': apiKey,
      'X-Goog-FieldMask': 'reviews,rating,userRatingCount',
    },
    next: { revalidate: CACHE_SECS },
  });
  if (!res.ok) throw new Error(`Places v1 HTTP ${res.status}`);
  const data = await res.json();
  if (data.error) throw new Error(data.error.message);

  return {
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

export async function GET() {
  const apiKey = process.env.GOOGLE_PLACES_API_KEY;

  if (!apiKey || apiKey === 'your_api_key_here') {
    return Response.json({
      error: 'GOOGLE_PLACES_API_KEY not configured',
      reviews: [], rating: null, total: null,
      mapsUrl: MAPS_URL, reviewUrl: REVIEW_URL,
    });
  }

  try {
    // Auto-discover the correct Place ID
    const placeId = await findPlaceId(apiKey);

    // Try legacy API first, fall back to new API
    let result;
    try {
      result = await fetchReviews(apiKey, placeId);
    } catch {
      result = await fetchReviewsNew(apiKey, placeId);
    }

    if (!result.reviews?.length) {
      throw new Error('No reviews returned from Places API');
    }

    return Response.json(
      { ...result, mapsUrl: MAPS_URL, reviewUrl: REVIEW_URL },
      { headers: { 'Cache-Control': `public, s-maxage=${CACHE_SECS}, stale-while-revalidate=3600` } }
    );
  } catch (err) {
    console.error('Google Reviews error:', err.message);
    return Response.json({
      error: err.message,
      reviews: [], rating: null, total: null,
      mapsUrl: MAPS_URL, reviewUrl: REVIEW_URL,
    });
  }
}
