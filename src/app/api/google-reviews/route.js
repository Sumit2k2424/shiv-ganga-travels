// GET /api/google-reviews
// Fetches real Google reviews via Places API, cached 24 hrs on the server.
// Requires GOOGLE_PLACES_API_KEY in .env.local

const PLACE_ID    = 'ChIJcbRpbaBHCTkRsh3aBCyZEt8';
const MAPS_URL    = 'https://www.google.com/maps/place/Shiv+Ganga+Travels/@29.9896838,78.1927454,17z';
const CACHE_SECS  = 86400; // 24 hours

export const revalidate = 86400;

export async function GET() {
  const apiKey = process.env.GOOGLE_PLACES_API_KEY;

  if (!apiKey) {
    return Response.json(
      { error: 'GOOGLE_PLACES_API_KEY not set', reviews: [], rating: null, total: null, mapsUrl: MAPS_URL },
      { status: 200 }
    );
  }

  try {
    const fields = 'reviews,rating,user_ratings_total,name';
    const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${PLACE_ID}&fields=${fields}&reviews_sort=newest&language=en&key=${apiKey}`;

    const res = await fetch(url, {
      next: { revalidate: CACHE_SECS },
    });

    if (!res.ok) throw new Error(`Places API ${res.status}`);

    const data = await res.json();

    if (data.status !== 'OK') {
      throw new Error(`Places API status: ${data.status}`);
    }

    const result = data.result;

    const reviews = (result.reviews || [])
      .filter(r => r.rating >= 4)          // only 4-5 star reviews
      .slice(0, 6)                          // max 6 on homepage
      .map(r => ({
        author: r.author_name,
        photo:  r.profile_photo_url || null,
        rating: r.rating,
        text:   r.text,
        time:   r.relative_time_description,
        url:    r.author_url || null,
      }));

    return Response.json(
      {
        reviews,
        rating: result.rating,
        total:  result.user_ratings_total,
        mapsUrl: MAPS_URL,
      },
      {
        headers: {
          'Cache-Control': `public, s-maxage=${CACHE_SECS}, stale-while-revalidate=3600`,
        },
      }
    );
  } catch (err) {
    console.error('Google Reviews API error:', err.message);
    return Response.json(
      { error: err.message, reviews: [], rating: null, total: null, mapsUrl: MAPS_URL },
      { status: 200 }
    );
  }
}
