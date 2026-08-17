// ═══════════════════════════════════════════════════════════════
//  WINTER CHAR DHAM — the four winter seats (shishkalin gaddi sthal)
//
//  Powers: /winter-char-dham-yatra · /ukhimath ·
//          /joshimath-narsingh-temple · /mukhba-gangotri-winter-seat ·
//          /kharsali-yamunotri-winter-seat · /kedarnath-doli-yatra
//
//  Closing dates below MUST stay in step with
//  /blog/char-dham-yatra-closing-dates-2026 — two pages disagreeing about
//  when Kedarnath shuts is worse than either page not existing. When the
//  2027 dates are announced on Vijayadashami, update both together.
//
//  ⚠️  Distances and altitudes are from published sources, not our own
//  odometer. Winter road access in particular changes week to week —
//  every page tells the reader to call before travelling, which is the
//  only honest thing to say about a snow-bound valley in January.
// ═══════════════════════════════════════════════════════════════

export const WINTER_VERIFIED = false; // flip once checked against a real winter run

export const SEASON = {
  year: 2026,
  closing: {
    gangotri : { date: '10 November 2026', occasion: 'Diwali / Annakut' },
    kedarnath: { date: '11 November 2026', occasion: 'Bhai Dooj' },
    yamunotri: { date: '11 November 2026', occasion: 'Bhai Dooj' },
    badrinath: { date: '13 November 2026', occasion: 'Two days after Bhai Dooj' },
  },
  // Doors reopen late April / early May; exact dates are declared on
  // Basant Panchami (Badrinath) and Mahashivratri (Kedarnath).
  reopens: 'Late April to early May 2027',
};

export const SEATS = {
  ukhimath: {
    slug: 'ukhimath',
    name: 'Omkareshwar Temple, Ukhimath',
    seatOf: 'Kedarnath',
    alsoSeatOf: 'Madmaheshwar',
    deity: 'Lord Kedarnath, as the Panchmukhi Utsav Doli',
    village: 'Ukhimath, Rudraprayag district',
    altitude: '1,311 m',
    fromHaridwar: 'About 200 km, 7–8 hrs',
    arrives: 'Three days after Kedarnath closes on Bhai Dooj',
    worship: 'All Kedarnath rituals, aarti and puja run here for roughly six months, November to April',
    access: 'Road-accessible all winter. This is the easiest of the four to reach.',
    why: 'Ukhimath is where Kedarnath actually is for half the year. The daily worship does not pause when the doors shut at 3,583 m — it moves down here, and the same rawal and priests perform it. Pilgrims who assume Kedarnath is simply closed from November to April have the wrong idea of how the shrine works.',
  },

  joshimath: {
    slug: 'joshimath-narsingh-temple',
    name: 'Narsingh Temple, Joshimath',
    seatOf: 'Badrinath',
    alsoSeatOf: null,
    deity: 'Lord Badri Vishal; Uddhav and Kubera go to Pandukeshwar',
    village: 'Joshimath (Jyotirmath), Chamoli district',
    altitude: '1,875 m',
    fromHaridwar: 'About 275 km, 9–10 hrs',
    arrives: 'The day after Badrinath closes',
    worship: 'Winter worship of Badri Vishal, with the Yogadhyan Badri temple at Pandukeshwar receiving Uddhav and Kubera',
    access: 'On the main Badrinath highway, open through winter barring snow closures above Chamoli.',
    why: 'Joshimath is one of the four maths established by Adi Shankaracharya, which makes it a major seat in its own right rather than merely a winter address. The Narsingh idol here carries the legend of the thinning arm — when it finally breaks, tradition says the Badrinath route will close and the deity will be worshipped at Bhavishya Badri instead.',
  },

  mukhba: {
    slug: 'mukhba-gangotri-winter-seat',
    name: 'Mukhba (Mukhimath)',
    seatOf: 'Gangotri',
    alsoSeatOf: null,
    deity: 'Goddess Ganga',
    village: 'Mukhba, near Harsil, Uttarkashi district',
    altitude: 'About 2,620 m',
    fromHaridwar: 'About 230 km via Uttarkashi, 9–10 hrs',
    arrives: 'On Diwali, the same day Gangotri closes',
    worship: 'Ganga is worshipped at the Mukhba temple through the winter and returns to Gangotri on Akshaya Tritiya',
    access: 'Harsil valley. Genuinely snow-affected in January and February — call before you commit.',
    why: 'Mukhba sits in the Harsil valley, which is among the most beautiful places in Garhwal and almost empty in winter. The Ganga you queue to see at Gangotri in June is here, in a village temple, with nobody else in the room.',
  },

  kharsali: {
    slug: 'kharsali-yamunotri-winter-seat',
    name: 'Kharsali (Khushimath)',
    seatOf: 'Yamunotri',
    alsoSeatOf: null,
    deity: 'Goddess Yamuna',
    village: 'Kharsali, opposite Janki Chatti, Uttarkashi district',
    altitude: 'About 2,675 m',
    fromHaridwar: 'About 200 km via Barkot, 8–9 hrs',
    arrives: 'On Bhai Dooj, the same day Yamunotri closes',
    worship: 'Yamuna is kept and worshipped at Kharsali through winter, returning to Yamunotri on Akshaya Tritiya',
    access: 'Reachable via Barkot and Janki Chatti. Snow can close the last stretch.',
    why: 'Kharsali also holds what is widely described as one of the oldest Shani Dev temples in India — a multi-storey stone and timber structure in the traditional Garhwali style. Yamuna is Shani\'s sister in the tradition, so brother and sister spend the winter in the same village. That is not a coincidence anybody planned; it is why the place matters.',
  },
};

export const seatList = () => ['ukhimath', 'joshimath', 'mukhba', 'kharsali'].map(k => SEATS[k]);

// The Kedarnath Utsav Doli's descent — three nights on the road.
export const DOLI_LEGS = [
  { day: 'Day 1', from: 'Kedarnath', to: 'Rampur',    note: 'The doli leaves the temple after the kapat band ceremony and descends the trek route.' },
  { day: 'Day 2', from: 'Rampur',    to: 'Guptkashi', note: 'Night halt at the Vishwanath temple. The largest crowds of the procession gather here.' },
  { day: 'Day 3', from: 'Guptkashi', to: 'Ukhimath',  note: 'Arrival at Omkareshwar, where the deity is installed for the winter.' },
];
