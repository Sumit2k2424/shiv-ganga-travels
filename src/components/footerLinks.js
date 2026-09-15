/* Footer link architecture.
   This is the site's internal-link backbone. One rule: every target here must
   be an indexable, 200 page. The footer renders on every route, so a link to a
   noindexed or redirected page is repeated ~200 times sitewide — the strongest
   possible internal signal, pointed at a page we have told Google to drop.
   The cab origin/destination hubs and the long-tail cab routes were noindexed
   on 13 Sep 2026; the footer now links only the indexed cab routes. */


export const COLS = [
  { heading:'Char Dham Packages', links:[
    {l:'Char Dham Yatra 2026',       h:'/char-dham-yatra'},
    {l:'Classic 9N/10D',             h:'/packages/char-dham-yatra-9n-10d-haridwar'},
    {l:'Deluxe 11N/12D',             h:'/packages/char-dham-yatra-11n-12d-haridwar'},
    {l:'Helicopter 5N/6D',           h:'/char-dham-helicopter'},
    {l:'Senior Special 12N/13D',     h:'/packages/char-dham-yatra-senior-citizen-12n-13d'},
    {l:'From Delhi',                 h:'/char-dham-yatra-from-delhi'},
    {l:'From Mumbai',                h:'/char-dham-yatra-from-mumbai'},
    ]},
  { heading:'Single & Do Dham', links:[
    {l:'Kedarnath Yatra',            h:'/kedarnath-yatra'},
    {l:'Badrinath Yatra',            h:'/badrinath-yatra'},
    {l:'Gangotri Yatra',             h:'/gangotri-yatra'},
    {l:'Yamunotri Yatra',            h:'/yamunotri-yatra'},
    {l:'Do Dham Yatra',              h:'/do-dham-yatra'},
    {l:'Teen Dham Yatra',            h:'/teen-dham-yatra'},
    {l:'Ek Dham Yatra',              h:'/ek-dham-yatra'},
    {l:'Panch Badri Yatra',          h:'/panch-badri-yatra'},
    {l:'Chopta & Tungnath',          h:'/chopta-tungnath'},
    {l:'Uttarakhand Tours',          h:'/uttarakhand-tour-packages'},
    ]},
  { heading:'Cabs & Transport', links:[
    {l:'All Uttarakhand Cabs',         h:'/cabs'},
    {l:'Char Dham Cab Booking',       h:'/char-dham-yatra-cab-booking'},
    {l:'Dehradun Airport → Haridwar', h:'/dehradun-airport-to-haridwar-taxi'},
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
    {l:'Panch Prayag (all 5)',       h:'/panch-prayag'},
    {l:'Kainchi Dham',               h:'/kainchi-dham'},
    {l:'Badrinath Weather',          h:'/badrinath-weather'},
    {l:'Gangotri Weather',           h:'/gangotri-weather'},
    {l:'Yamunotri Weather',          h:'/yamunotri-weather'},
  ]},
  { heading:'How to Reach', links:[
    {l:'How to Reach Kedarnath',     h:'/blog/how-to-reach-kedarnath'},
    {l:'How to Reach Badrinath',     h:'/how-to-reach-badrinath'},
    {l:'How to Reach Yamunotri',     h:'/how-to-reach-yamunotri'},
    {l:'Barkot Hotels',              h:'/barkot-hotels'},
    {l:'Emergency Contacts',         h:'/char-dham-yatra-emergency-contacts'},
    {l:'Dehradun Airport → Haridwar',h:'/dehradun-airport-to-haridwar-taxi'},
  ]},
  { heading:'Distances & On-Route', links:[
    ]},
  { heading:'Before You Book', links:[
    {l:'Helicopter Booking Guide',   h:'/char-dham-helicopter-booking-guide'},
    ]},
  { heading:'Winter Char Dham', links:[
    {l:'Omkareshwar, Ukhimath',      h:'/ukhimath'},
    {l:'Narsingh Temple, Joshimath', h:'/joshimath-narsingh-temple'},
    {l:'Mukhba — Ganga’s Seat', h:'/mukhba-gangotri-winter-seat'},
    {l:'Kharsali — Yamuna’s Seat', h:'/kharsali-yamunotri-winter-seat'},
    {l:'Kedarnath Doli Yatra',       h:'/kedarnath-doli-yatra'},
    ]},
  { heading:'Haridwar Darshan', links:[
    {l:'Places to Visit in Haridwar',h:'/haridwar-sightseeing-places'},
    {l:'Har Ki Pauri & Ganga Aarti', h:'/har-ki-pauri-guide'},
    {l:'Mansa Devi Temple',          h:'/mansa-devi-temple'},
    {l:'Chandi Devi Temple',         h:'/chandi-devi-temple'},
    {l:'Daksh Mahadev, Kankhal',     h:'/daksh-mahadev-temple'},
    {l:'Kumbh Mela 2027',            h:'/kumbh-mela-haridwar'},
    ]},
  { heading:'Company', links:[
    {l:'About Us',                   h:'/about'},
    {l:'Press & Media',              h:'/press'},
    {l:'Contact Us',                 h:'/contact'},
    {l:'All Packages',               h:'/packages'},
    {l:'Senior Citizen Package',     h:'/blog/senior-citizen-char-dham'},
    {l:'Leave a Review',             h:'/review'},
    {l:'Site Map',                   h:'/sitemap-page'},
    {l:'Cancellation Policy',        h:'/cancellation-policy'},
    {l:'Privacy Policy',             h:'/privacy-policy'},
    {l:'Terms & Conditions',         h:'/terms-and-conditions'},
  ]},
];


