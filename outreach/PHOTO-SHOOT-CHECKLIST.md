# Shiv Ganga Travels — photo shoot checklist

Prepared 17 Sep 2026. Two parts: **Part A** is the shoot list to forward to the
team on WhatsApp. **Part B** maps every photo to the exact banner / card / hero
slot on the site, so the shoot produces the right orientation the first time.

Ground rules for every photo (copy these to the group too):

- Phone camera is fine. Daylight. **No filters, no beauty mode, no crop** — send the original file.
- Hold the phone **sideways (landscape)** unless the list says PORTRAIT.
- Vehicle shots: **number plate and permit sticker visible** — that is the proof.
- People: driver or staff beside the vehicle, not inside it. Guests only with a
  verbal OK; no close-ups of children.
- Temples: **outside only**. No photos inside any sanctum.
- After each shot, WhatsApp it with one line: *place, date, who is in it*.
  Example: "Sonprayag, 14 May 2026, Ramesh with UK07-TA-1234".
- Also drop the originals in one Google Drive folder — WhatsApp compresses.

---

## Part A — the shoot list (send this)

### 1. Office, Saptrishi Road — 30 minutes, any morning
- [ ] Signboard from the street, whole shopfront in frame
- [ ] Founder at the desk, looking at camera — **PORTRAIT + landscape, one each**
- [ ] The wall with the registration / GST certificate, numbers readable
- [ ] Office with two staff on phones (working, not posing)
- [ ] Close-up of one visiting card or letterhead with phone 7817996730

### 2. Vehicle yard — 45 minutes, before 9 AM light
One shot per vehicle, driver standing at the front-left corner, plate visible:
- [ ] Innova Crysta + driver
- [ ] Ertiga (or sedan) + driver
- [ ] Tempo Traveller + driver, side door open
- [ ] Urbania + driver (if we run one; skip otherwise)
- [ ] Scorpio / XUV + driver
- [ ] Inside a vehicle: the oxygen cylinder and first-aid box in place
- [ ] All vehicles lined up together, wide shot

### 3. Har Ki Pauri, 6 AM departure day
- [ ] Group boarding the Tempo Traveller, luggage going on the roof
- [ ] Founder handing the printed itinerary to the group leader
- [ ] Group in front of the vehicle with Har Ki Pauri behind — **PORTRAIT + landscape**
- [ ] Evening Ganga aarti from the ghat (a separate evening)

### 4. Next Kedarnath run — the driver shoots
- [ ] Gaurikund pony stand **with the official rate board readable**
- [ ] Sonprayag shuttle queue, our group in it
- [ ] Phata / Sersi helipad, group beside the helicopter
- [ ] Kedarnath temple from the courtyard, group in front — **PORTRAIT + landscape**
- [ ] Guptkashi hotel exterior, our vehicle parked outside
- [ ] The road at Rudraprayag junction (Kedarnath / Badrinath signboard)

### 5. Next Badrinath run — the driver shoots
- [ ] Badrinath temple gate, group in front — **PORTRAIT + landscape**
- [ ] Tapt Kund from outside
- [ ] Mana village road / "last Indian village" board
- [ ] Badrinath hotel exterior, our vehicle outside
- [ ] Joshimath / Chamoli stop, tea break with the group

### 6. Next Yamunotri / Gangotri run — the driver shoots
- [ ] Janki Chatti: pony / palki with a senior guest on it
- [ ] Yamunotri temple from the approach — **PORTRAIT + landscape**
- [ ] Gangotri temple across the Bhagirathi — **PORTRAIT + landscape**
- [ ] Harsil valley from the road
- [ ] Barkot and Uttarkashi hotel exteriors, our vehicle outside

### 7. Documents — 10 minutes, flat on a table, good light
- [ ] UTDB registration certificate (number readable)
- [ ] One vehicle permit
- [ ] GST certificate

### 8. Three short videos, 20–40 seconds, phone sideways
- [ ] Founder introducing the business from the office (one take, no script)
- [ ] A driver explaining the Rudraprayag junction
- [ ] A guest's unscripted thank-you at drop-off

**Total: about 40 photos and 3 clips.** Sections 1, 2 and 7 can be done this
week. Sections 3–6 happen on the next trips; give each driver the list for his
route only.

---

## Part B — where each photo goes on the site

This is the developer's map. Every slot below is currently a Pexels stock image
(85 references in `src/`). Orientation matters: a landscape shot will not work
in a portrait slot.

### B1. Package heroes + tour cards — 11 photos, LANDSCAPE, min 1920 × 1100
One photo per package. It is used **three times**: the hero banner on the package
page (`pkg.photo` → 1920×1100), the tour card on `/packages` (900×560), and the
Open Graph / schema image. Data lives in `src/data/packages.js`.

| Package | Shot to use | From section |
|---|---|---|
| Char Dham 9N/10D | Group boarding at Har Ki Pauri with the Tempo | A3 |
| Char Dham 11N/12D Deluxe | Harsil valley from the road, or Tehri lake drive | A6 |
| Char Dham by Helicopter 5N/6D | Group beside the helicopter at Phata | A4 |
| Senior Citizen 12N/13D | Senior guest on palki at Janki Chatti | A6 |
| Char Dham from Delhi 10N/11D | Innova with driver + plate, luggage loaded | A2 |
| Kedarnath–Badrinath Do Dham | Kedarnath courtyard, group in front | A4 |
| Yamunotri–Gangotri Do Dham | Gangotri across the Bhagirathi | A6 |
| Teen Dham 7N/8D | Badrinath temple gate, group | A5 |
| Kedarnath 3N/4D | Sonprayag shuttle queue or Gaurikund rate board | A4 |
| Do Dham Helicopter same-day | Helipad shot (second angle from A4) | A4 |
| Hemkund–Valley of Flowers | **Keep stock until a trip runs** — no real photo yet | — |

### B2. Category covers — 4 photos, LANDSCAPE
`packages.js` `CATEGORIES[].cover` (char-dham, do-dham, single-dham,
helicopter). Reuse four of the B1 photos — no extra shooting.

### B3. Homepage "Four Dhams" cards — 4 photos, **PORTRAIT**, 1200 × 1500
`src/app/page.js` lines 217–220 and `TEMPLES[].photo` in
`src/data/experience.js` (same four, also shown on every package page). This is
why the list says PORTRAIT for each temple shot.

| Card | Shot |
|---|---|
| Yamunotri | Temple from the approach (A6, portrait) |
| Gangotri | Temple across the river (A6, portrait) |
| Kedarnath | Courtyard with group (A4, portrait) |
| Badrinath | Gate with group (A5, portrait) |

### B4. Homepage Kedarnath frame — 1 photo, **PORTRAIT** 4:5, 900 × 1125
`src/app/page.js` line 491. Use the Kedarnath portrait from A4 (same as B3) or
the Har Ki Pauri group portrait from A3 if we want the homepage to show *our*
group rather than the temple.

### B5. `/packages` masthead banner — 1 photo, very wide, 1600 × 700
`src/app/packages/page.js` `HERO_IMG`. Needs a wide shot with nothing important
in the top/bottom 20%: the **all-vehicles-lined-up** shot from A2, or the aarti
from A3.

### B6. Vehicle cards — 4 photos, LANDSCAPE, 1400 × 900
`VEHICLES[].photo` in `experience.js` (innova, tempo, ertiga, suv) — shown on
every package page's "how you travel" block and used by `/cabs`. Straight from
A2. **Plates visible** — this is the strongest single trust signal in the set.

### B7. Hotel cards — 6 photos, LANDSCAPE, 1400 × 900
`HOTELS[].photo` (haridwar, barkot, uttarkashi, guptkashi, kedarnath,
badrinath). The "hotel exterior with our vehicle outside" shots from A4–A6.
Kedarnath = the GMVN huts / camp exterior. Until we have all six, replace the
ones we have and leave the others on stock — mixed is fine.

### B8. Package-page gallery strip — 6 photos, mixed
`GALLERY[]` in `experience.js`. Pick the six best remaining shots that show
**people and our vehicles**, not scenery: pony stand rate board, shuttle queue,
itinerary hand-over, tea break at Chamoli, aarti, Mana road. Each gets a caption
"place · date · who took it" and an `ImageObject` with `creator` = organisation.

### B9. Navbar mega-menu thumbnails — 6 small photos, LANDSCAPE
`src/components/Navbar.js` lines 18–23. Reuse B1/B2 crops. No new shooting.

### B10. `/about` and founder card — 2 photos
Founder portrait (A1, PORTRAIT) for `/about` and the blog author card (currently
initials). Certificate wall (A1) for the registrations block; the A7 document
scans go beside it with the UTDB number typed out as text, not only in the image.

### B11. Homepage hero and blog heroes — **no photo needed now**
Both are SVG/animated art, not stock. `HeroSection.js` already has a
`.hero-photo` layer, so a real photo can be dropped under the animation later —
the A3 departure wide shot is the candidate. Not part of this round.

### Export spec for the developer
- Files go in `public/photos/`, named `place-subject-yyyy-mm.jpg`
  (e.g. `gaurikund-pony-rate-board-2026-05.jpg`).
- Landscape: 1920 wide. Portrait: 1200 × 1500. JPEG quality ~80, target under 250 KB.
- Keep EXIF (date, camera). Strip GPS only if the shot is at someone's home.
- `alt` and visible caption = the WhatsApp line: "Innova UK07-TA-1234 at Sonprayag, May 2026 — driver Ramesh".
- `pximg.js` helpers are Pexels-only; local files bypass them and go through
  `next/image` normally (the "already optimal" note applies to Pexels, not to
  our own files).
- Order of swaps once photos land: B1 (11 packages) → B6 (vehicles) → B3/B4
  (homepage) → B10 (about) → B7/B8 → B5/B9.

### Count
| Slot group | Photos | New shooting? |
|---|---|---|
| B1 package heroes/cards | 11 | yes (10 real + 1 stock kept) |
| B3 dham portraits | 4 | yes |
| B6 vehicles | 4 | yes |
| B7 hotels | 6 | yes |
| B8 gallery | 6 | from leftovers |
| B10 about/founder | 2 | yes |
| B5 banner | 1 | from A2/A3 |
| B2, B4, B9 | 11 | reuse |
| **Distinct photos needed** | **~33** | Part A yields ~40 |
