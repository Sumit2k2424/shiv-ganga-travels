/* Footer link architecture — every route preserved verbatim.
   This is the site's internal-link backbone; do not prune it. */

import { LANGUAGE_PAGES } from '@/data/languages';

export const COLS = [
  { heading:'Char Dham Packages', links:[
    {l:'Char Dham Yatra 2026',       h:'/char-dham-yatra'},
    {l:'Char Dham Guide 2026',       h:'/blog/char-dham-guide'},
    {l:'Classic 9N/10D',             h:'/packages/char-dham-yatra-9n-10d-haridwar'},
    {l:'Deluxe 11N/12D',             h:'/packages/char-dham-yatra-11n-12d-haridwar'},
    {l:'Helicopter 5N/6D',           h:'/char-dham-helicopter'},
    {l:'Senior Special 12N/13D',     h:'/packages/char-dham-yatra-senior-citizen-12n-13d'},
    {l:'From Delhi',                 h:'/char-dham-yatra-from-delhi'},
    {l:'From Noida',                 h:'/char-dham-yatra-from-noida'},
    {l:'From Mumbai',                h:'/char-dham-yatra-from-mumbai'},
    {l:'From Bangalore',             h:'/char-dham-yatra-from-bangalore'},
  ]},
  { heading:'Single & Do Dham', links:[
    {l:'Kedarnath Yatra',            h:'/kedarnath-yatra'},
    {l:'Kedarnath Package 3N/4D',    h:'/kedarnath-tour-package'},
    {l:'Badrinath Package 2N/3D',    h:'/badrinath-tour-package'},
    {l:'Badrinath Yatra',            h:'/badrinath-yatra'},
    {l:'Gangotri Yatra',             h:'/gangotri-yatra'},
    {l:'Yamunotri Yatra',            h:'/yamunotri-yatra'},
    {l:'Do Dham Yatra',              h:'/do-dham-yatra'},
    {l:'Panch Kedar Yatra',          h:'/panch-kedar-yatra'},
    {l:'Panch Badri Yatra',          h:'/panch-badri-yatra'},
    {l:'Chopta & Tungnath',          h:'/chopta-tungnath'},
    {l:'Uttarakhand Tours',          h:'/uttarakhand-tour-packages'},
    {l:'Valley of Flowers',          h:'/packages/valley-of-flowers-hemkund-sahib-5n-6d'},
  ]},
  { heading:'Cabs & Transport', links:[
    {l:'All Uttarakhand Cabs',         h:'/cabs'},
    {l:'Char Dham Cab Booking',       h:'/char-dham-yatra-cab-booking'},
    {l:'Cabs from Haridwar',          h:'/cabs/from/haridwar'},
    {l:'Cabs to Kedarnath',           h:'/cabs/to/kedarnath'},
    {l:'Cabs to Badrinath',           h:'/cabs/to/badrinath'},
    {l:'Haridwar → Kedarnath Cab',    h:'/cabs/haridwar-to-kedarnath-cab'},
    {l:'Delhi → Haridwar Cab',        h:'/cabs/delhi-to-haridwar-cab'},
  ]},
  { heading:'Guides & Tools', links:[
    {l:'2026 New Rules',             h:'/blog/char-dham-yatra-2026-new-rules'},
    {l:'Cost Calculator',            h:'/char-dham-yatra-cost-calculator'},
    {l:'Route Map',                  h:'/char-dham-yatra-route-map'},
    {l:'Kedarnath Trek Guide',       h:'/blog/kedarnath-trek-guide'},
    {l:'Helicopter Booking',         h:'/blog/kedarnath-helicopter-booking'},
    {l:'Packing List',               h:'/blog/char-dham-yatra-packing-list'},
    {l:'Cost Breakdown',             h:'/blog/char-dham-yatra-cost'},
    {l:'Registration Guide',         h:'/blog/char-dham-yatra-registration'},
    {l:'Best Time to Visit',         h:'/blog/best-time-char-dham'},
    {l:'All Blog Posts',             h:'/blog'},
  ]},
  { heading:'Temples & Weather', links:[
    {l:'Kedarnath Temple Guide',     h:'/kedarnath-temple'},
    {l:'Badrinath Temple Guide',     h:'/badrinath-temple'},
    {l:'Gangotri Temple Guide',      h:'/gangotri-temple'},
    {l:'Yamunotri Temple Guide',     h:'/yamunotri-temple'},
    {l:'Dhari Devi Temple',          h:'/dhari-devi-temple'},
    {l:'Kedarnath Height & Facts',   h:'/kedarnath-height'},
    {l:'Kedarnath Weather',          h:'/kedarnath-weather'},
    {l:'Badrinath Weather',          h:'/badrinath-weather'},
    {l:'Gangotri Weather',           h:'/gangotri-weather'},
    {l:'Yamunotri Weather',          h:'/yamunotri-weather'},
  ]},
  { heading:'How to Reach', links:[
    {l:'How to Reach Kedarnath',     h:'/blog/how-to-reach-kedarnath'},
    {l:'How to Reach Badrinath',     h:'/how-to-reach-badrinath'},
    {l:'How to Reach Gangotri',      h:'/how-to-reach-gangotri'},
    {l:'How to Reach Yamunotri',     h:'/how-to-reach-yamunotri'},
    {l:'Kedarnath Hotels',           h:'/kedarnath-hotels'},
    {l:'Badrinath Hotels',           h:'/badrinath-hotels'},
    {l:'Emergency Contacts',         h:'/char-dham-yatra-emergency-contacts'},
  ]},
  { heading:'Company', links:[
    {l:'About Us',                   h:'/about'},
    {l:'Contact Us',                 h:'/contact'},
    {l:'All Packages',               h:'/packages'},
    {l:'Online Puja Booking',        h:'/online-puja-booking'},
    {l:'Senior Citizen Package',     h:'/blog/senior-citizen-char-dham'},
    {l:'Leave a Review',             h:'/review'},
    {l:'Site Map',                   h:'/sitemap-page'},
  ]},
];

export const LANGUAGE_COL = {
  heading: 'Char Dham in Your Language',
  links: LANGUAGE_PAGES.map(l => ({ l: `${l.native} · ${l.label}`, h: `/${l.slug}` })),
};

