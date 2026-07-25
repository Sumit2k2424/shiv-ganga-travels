/* Structured data for package pages — preserved verbatim from the
   previous build so no rich result already earned is lost, with the
   gallery added as ImageObject and the trip offer kept authoritative. */

import { SITE, CATEGORIES } from '@/data/packages';
import { GALLERY } from '@/data/experience';


export const CATEGORY_GUIDES = {
  'char-dham': [
    { label:'Char Dham Yatra 2026 Guide', href:'/char-dham-yatra' },
    { label:'Best Time for Char Dham', href:'/blog/best-time-char-dham' },
    { label:'Packing List', href:'/blog/char-dham-yatra-packing-list' },
    { label:'Cost Breakdown', href:'/blog/char-dham-yatra-cost' },
    { label:'Registration Guide', href:'/blog/char-dham-yatra-registration' },
  ],
  'do-dham': [
    { label:'Kedarnath Yatra Guide', href:'/kedarnath-yatra' },
    { label:'Kedarnath Trek Guide', href:'/blog/kedarnath-trek-guide' },
    { label:'Badrinath Yatra Guide', href:'/badrinath-yatra' },
    { label:'Best Time to Visit', href:'/blog/best-time-char-dham' },
  ],
  'single-dham': [
    { label:'Kedarnath Yatra Guide', href:'/kedarnath-yatra' },
    { label:'Kedarnath Trek Guide', href:'/blog/kedarnath-trek-guide' },
    { label:'Kedarnath Helicopter Booking', href:'/blog/kedarnath-helicopter-booking' },
    { label:'Badrinath Yatra Guide', href:'/badrinath-yatra' },
    { label:'Haridwar to Kedarnath Route', href:'/blog/haridwar-to-kedarnath' },
  ],
  'helicopter': [
    { label:'Kedarnath Helicopter Guide', href:'/blog/kedarnath-helicopter-booking' },
    { label:'Char Dham 2026 Overview', href:'/char-dham-yatra' },
    { label:'Senior Citizen Char Dham', href:'/blog/senior-citizen-char-dham' },
  ],
  'uttarakhand': [
    { label:'Valley of Flowers Trek', href:'/blog/valley-of-flowers-trek' },
    { label:'Rishikesh Adventure Guide', href:'/blog/rishikesh-adventure-guide' },
    { label:'Best Time to Visit', href:'/blog/best-time-char-dham' },
  ],
};

export default function Schemas({ pkg }) {
  // TouristTrip — describes the itinerary. NO aggregateRating here:
  // Google does NOT support Review snippets on TouristTrip type.
  const trip = {
    '@context':'https://schema.org','@type':'TouristTrip',
    '@id':`${SITE.baseUrl}/packages/${pkg.slug}#trip`,
    name:pkg.name, description:pkg.metaDesc,
    touristType:['Pilgrim','ReligiousTourist'],
    url:`${SITE.baseUrl}/packages/${pkg.slug}`,
    image:pkg.photo||'', duration:`P${pkg.duration.days}D`,
    itinerary:{ '@type':'ItemList', itemListElement:pkg.itinerary.map((d,i)=>({'@type':'ListItem',position:i+1,name:`Day ${d.day}: ${d.title}`,description:d.desc})) },
    offers:[{ '@type':'Offer', price:pkg.price.discounted, priceCurrency:'INR', priceValidUntil:'2026-10-31', availability:'https://schema.org/InStock', validFrom:'2026-04-01', validThrough:'2026-10-31', seller:{'@type':'TravelAgency',name:SITE.name,url:SITE.baseUrl,telephone:SITE.phone}, url:`${SITE.baseUrl}/packages/${pkg.slug}` }],
    provider:{ '@type':'TravelAgency','@id':`${SITE.baseUrl}/#organization`, name:SITE.name, url:SITE.baseUrl, telephone:SITE.phone },
    startLocation:{ '@type':'Place', name:pkg.startCity, address:{'@type':'PostalAddress',addressLocality:pkg.startCity,addressRegion:'Uttarakhand',addressCountry:'IN'} },
    keywords:(pkg.tags||[]).join(', '),
  };

  // Product schema — carries aggregateRating for Review rich result.
  // Google supports Review snippets on Product type. This is the correct parent.
  const product = {
    '@context':'https://schema.org','@type':'Product',
    '@id':`${SITE.baseUrl}/packages/${pkg.slug}#product`,
    name:pkg.name,
    description:pkg.metaDesc,
    url:`${SITE.baseUrl}/packages/${pkg.slug}`,
    image:pkg.photo||'https://www.shivgangatravels.com/logo.png',
    brand:{ '@type':'Brand', name:SITE.name },
    offers:{
      '@type':'Offer',
      price:pkg.price.discounted,
      priceCurrency:'INR',
      priceValidUntil:'2026-10-31',
      availability:'https://schema.org/InStock',
      seller:{ '@type':'Organization', name:SITE.name, url:SITE.baseUrl },
      url:`${SITE.baseUrl}/packages/${pkg.slug}`,
    },
    aggregateRating:{
      '@type':'AggregateRating',
      ratingValue: 4.7,
      reviewCount: 54,
      bestRating:5,
      worstRating:1,
    },
    review:[
      { '@type':'Review', reviewRating:{'@type':'Rating',ratingValue:5,bestRating:5}, author:{'@type':'Person',name:'Rakesh Sharma'}, reviewBody:'Excellent Char Dham yatra experience. Zero commission as promised. Hotel stays were clean, driver was knowledgeable. Highly recommend Shiv Ganga Travels.' },
      { '@type':'Review', reviewRating:{'@type':'Rating',ratingValue:5,bestRating:5}, author:{'@type':'Person',name:'Priya Mehta'}, reviewBody:'Booked Kedarnath package from Haridwar. Everything was well organised. The VIP darshan arrangement saved us 3 hours of queue time. Will book again for Badrinath.' },
      { '@type':'Review', reviewRating:{'@type':'Rating',ratingValue:5,bestRating:5}, author:{'@type':'Person',name:'Suresh Gupta'}, reviewBody:'Senior citizen package was perfect for my parents. Slow itinerary, ground floor rooms, pony arranged at Kedarnath. Dhanesh ji personally called to check on them.' },
    ],
  };

  const faqSchema = pkg.faqs?.length ? { '@context':'https://schema.org','@type':'FAQPage', mainEntity:pkg.faqs.map(f=>({'@type':'Question',name:f.q,acceptedAnswer:{'@type':'Answer',text:f.a}})) } : null;
  const breadcrumb = { '@context':'https://schema.org','@type':'BreadcrumbList', itemListElement:[
    {'@type':'ListItem',position:1,name:'Home',item:SITE.baseUrl},
    {'@type':'ListItem',position:2,name:'Packages',item:`${SITE.baseUrl}/packages`},
    {'@type':'ListItem',position:3,name:CATEGORIES[pkg.category]?.name||pkg.category,item:`${SITE.baseUrl}/packages/${pkg.category}`},
    {'@type':'ListItem',position:4,name:pkg.name,item:`${SITE.baseUrl}/packages/${pkg.slug}`},
  ]};
  const author = {
    '@context':'https://schema.org','@type':'Person',
    '@id':`${SITE.baseUrl}/#dhanesh-chandra-mishra`,
    name:'Dhanesh Chandra Mishra',
    jobTitle:'Founder & Char Dham Yatra Specialist',
    description:'Retired Indian Army officer who founded Shiv Ganga Travels in 2010. 15+ seasons organising Char Dham, Do Dham and Kedarnath pilgrimages from Haridwar.',
    worksFor:{ '@type':'TravelAgency','@id':`${SITE.baseUrl}/#organization`, name:SITE.name, url:SITE.baseUrl },
    knowsAbout:['Char Dham Yatra','Kedarnath Yatra','Badrinath','Gangotri','Yamunotri','Uttarakhand pilgrimage travel','Char Dham registration'],
    address:{ '@type':'PostalAddress', addressLocality:'Haridwar', addressRegion:'Uttarakhand', addressCountry:'IN' },
    sameAs:['https://www.instagram.com/shivgangatravels/','https://www.google.com/maps?cid=16074078434377735602'],
  };
  // ImageGallery — gives the photography its own crawlable entity and
  // makes the page eligible for image-rich results.
  const gallery = {
    '@context':'https://schema.org','@type':'ImageGallery',
    '@id':`${SITE.baseUrl}/packages/${pkg.slug}#gallery`,
    name:`${pkg.name} — photography`,
    associatedMedia: GALLERY.map(g => ({
      '@type':'ImageObject',
      contentUrl:`${g.src}?auto=compress&cs=tinysrgb&w=1600`,
      caption:g.caption,
      description:g.alt,
      contentLocation:{ '@type':'Place', name:g.place },
    })),
  };

  return (<>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html:JSON.stringify(trip) }}/>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html:JSON.stringify(gallery) }}/>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html:JSON.stringify(product) }}/>
    {faqSchema && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html:JSON.stringify(faqSchema) }}/>}
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html:JSON.stringify(breadcrumb) }}/>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html:JSON.stringify(author) }}/>
  </>);
}
