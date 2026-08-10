// ═══════════════════════════════════════════════════════════════
//  HARIDWAR LOCAL PLACES — temples, ashrams and the sightseeing hub
//
//  Powers: /mansa-devi-temple · /chandi-devi-temple ·
//          /daksh-mahadev-temple · /maya-devi-temple ·
//          /shantikunj-haridwar-guide · /haridwar-sightseeing-places
//
//  ⚠️  ROPEWAY FARES AND TEMPLE TIMINGS DRIFT.
//  Ropeway fares below come from an August 2026 survey and published
//  sources disagree with each other by ₹50–150, which is why every page
//  tells the reader to confirm at the counter rather than quoting a
//  false-precision number. Temple timings shift seasonally and on
//  festival days. Check these at the start of each season — you are
//  fifteen minutes from all of them and we are not.
// ═══════════════════════════════════════════════════════════════

export const PLACES_VERIFIED = false; // flip once you've checked on the ground

export const PLACES = {
  'mansa-devi': {
    slug: 'mansa-devi-temple',
    name: 'Mansa Devi Temple',
    deity: 'Mansa Devi',
    hill: 'Bilwa Parvat',
    distanceFromHarKiPauri: '1.5 km',
    darshan: '5:00 AM – 9:00 PM (bhog closure roughly 12–2 PM)',
    ropeway: {
      operates: 'Around 7:00 AM – 6:00 PM, seasonal variation',
      roundTrip: '₹165 adult, ₹125 child (approximate)',
      combo: '₹290–340 for the Mansa Devi + Chandi Devi combined ticket',
      wait: '5–15 min on weekdays, 20–45 min at weekends and in season',
      booking: 'Counter only — no official online booking',
    },
    trek: 'Roughly 1.5 km, 45–60 minutes uphill, free',
    entry: 'Free. The ropeway is the only paid part.',
    why: 'Mansa Devi grants wishes — pilgrims tie a thread to the tree in the temple courtyard when they ask, and return to untie it when the wish is granted. That returning is why the queue moves slowly, and it is the most human thing about the place.',
  },

  'chandi-devi': {
    slug: 'chandi-devi-temple',
    name: 'Chandi Devi Temple',
    deity: 'Chandi Devi',
    hill: 'Neel Parvat',
    distanceFromHarKiPauri: '4 km',
    darshan: '6:00 AM – 12:00 PM, 3:00 PM – 6:00 PM (approximate)',
    ropeway: {
      operates: 'Around 7:00 AM – 6:00 PM, seasonal variation',
      roundTrip: '₹250–350 (approximate, sources vary)',
      combo: 'Combined with Mansa Devi, ₹290–340',
      wait: 'Usually shorter than Mansa Devi — fewer visitors get this far',
      booking: 'Counter at Chandighat base station',
    },
    trek: 'About 3 km from Chandighat, 60–90 minutes, moderate. Steeper than the Mansa Devi walk.',
    entry: 'Free.',
    why: 'Built by Suchat Singh of Kashmir in 1929, on a site associated with the goddess who slew Shumbha and Nishumbha. It is quieter than Mansa Devi and the view back over the Ganga plain is the better one.',
  },

  'daksh-mahadev': {
    slug: 'daksh-mahadev-temple',
    name: 'Daksh Mahadev Temple',
    deity: 'Shiva, as Daksheshwar Mahadev',
    hill: null,
    distanceFromHarKiPauri: '4 km, at Kankhal',
    darshan: '6:00 AM – 8:00 PM (approximate)',
    ropeway: null,
    trek: null,
    entry: 'Free.',
    why: 'This is where the Sati story happened. King Daksha held the yajna he pointedly did not invite Shiva to; Sati went anyway and burned herself in the sacrificial fire. The yajnashala is still on the site. Built by Queen Dhankaur in 1810, rebuilt in 1962.',
  },

  'maya-devi': {
    slug: 'maya-devi-temple',
    name: 'Maya Devi Temple',
    deity: 'Maya Devi, presiding goddess of Haridwar',
    hill: null,
    distanceFromHarKiPauri: '1 km',
    darshan: '6:00 AM – 8:00 PM (approximate)',
    ropeway: null,
    trek: null,
    entry: 'Free.',
    why: 'A Shakti Peeth, where tradition holds the heart and navel of Sati fell. Haridwar\'s older name, Mayapuri, comes from this goddess. The surviving structure dates to around the 11th century, which makes it the oldest thing most visitors walk past without noticing.',
  },

  'shantikunj': {
    slug: 'shantikunj-haridwar-guide',
    name: 'Shantikunj',
    deity: 'Gayatri Mata',
    hill: null,
    distanceFromHarKiPauri: '6 km, Sapt Sarovar road',
    darshan: 'Open roughly 5:00 AM – 8:00 PM',
    ropeway: null,
    trek: null,
    entry: 'Free. Accommodation for sadhaks is also free, by prior registration.',
    why: 'Headquarters of the All World Gayatri Pariwar, founded by Pandit Shriram Sharma Acharya in 1971. Not a tourist temple — a working ashram with a daily discipline, and visitors are expected to fit into it rather than the other way round.',
  },
};

// Ordered circuit — the sequence our drivers actually run.
export const CIRCUIT_ORDER = ['maya-devi', 'mansa-devi', 'chandi-devi', 'daksh-mahadev', 'shantikunj'];

export const placeList = () => CIRCUIT_ORDER.map(k => PLACES[k]);
