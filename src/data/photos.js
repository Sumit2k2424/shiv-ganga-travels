// ═══════════════════════════════════════════════════════════════
//  OUR OWN PHOTOS — used on more than one page
//
//  One record per photo so the alt text, caption and date cannot
//  drift between the pages that show it. Files live in
//  public/images/, already cropped and compressed; next/image serves
//  AVIF/WebP at the width each visitor needs, and the JPEG itself is
//  only fetched as the og:image.
// ═══════════════════════════════════════════════════════════════

// Shot by our team on the Kedarnath helipad, 16 Sep 2026. A small badge
// in the bottom-right corner (the photographer's own) was cropped off;
// the frame was cut to 1.9:1 (the og:image ratio) around the airframe,
// resized to 1600×840 and saved as a q78 progressive JPEG (180 KB).
export const HELIPAD_PHOTO = {
  src: '/images/kedarnath-helipad-helicopter-2026-09-16.jpg',
  width: 1600,
  height: 840,
  alt: 'Orange-and-white Pawan Hans helicopter, registration VT-PHU, on the Kedarnath helipad with its rotor turning, a green boulder-strewn slope behind',
  place: 'Kedarnath helipad',
  dateISO: '2026-09-16',
  dateHuman: '16 September 2026',
};
HELIPAD_PHOTO.credit = `Photo: Shiv Ganga Travels, ${HELIPAD_PHOTO.place}, ${HELIPAD_PHOTO.dateHuman}.`;
