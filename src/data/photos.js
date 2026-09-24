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

// Sunirmal Ji and his wife, pilgrims who travelled with us, at the
// Singh Dwar. NOT our photograph: it came to us as a phone shot of the
// print they brought home, so it carries no copyright or licence
// fields — only creditText naming who shared it. The print's white
// paper border was trimmed, levels lifted slightly, the frame cut to
// 4:3 around the gate and both faces, resized to 1200×900, q78 (195 KB).
// A 3px median pass takes out the print's paper grain — sharpening it
// instead made the served AVIF 2.5× the helipad photo's size.
// Taken on their darshan day, Saturday 19 Sep 2026; Sunirmal Ji sent it.
export const BADRINATH_PILGRIMS_PHOTO = {
  src: '/images/badrinath-temple-singh-dwar-pilgrims.jpg',
  width: 1200,
  height: 900,
  alt: 'Sunirmal Ji, in a brown sweater and black woollen cap, and his wife, in a mustard-yellow kurta, stand with folded hands in front of the painted Singh Dwar of Badrinath Temple, pilgrims climbing the steps behind them under a clear blue sky',
  place: 'Badrinath Temple, Chamoli district, Uttarakhand',
  dateISO: '2026-09-19',
  dateHuman: '19 September 2026',
  creditText: 'Sunirmal Ji',
};
BADRINATH_PILGRIMS_PHOTO.credit = `Photo shared by Sunirmal Ji, Badrinath, ${BADRINATH_PILGRIMS_PHOTO.dateHuman}.`;
