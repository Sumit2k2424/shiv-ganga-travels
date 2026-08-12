/* Homepage structured data — preserved from the previous build. */

import { SITE, GLOBAL_FAQS } from '@/data/packages';

/* ─── Schemas ─── */
export default function Schema() {
  const charDhamProduct = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: 'Char Dham Yatra Package 2026 from Haridwar',
    image: [`${SITE.baseUrl}/opengraph-image`],
    description: 'All-inclusive Char Dham Yatra package covering Yamunotri, Gangotri, Kedarnath and Badrinath. 9N/10D from Haridwar. Direct operator, no commission.',
    url: `${SITE.baseUrl}/char-dham-yatra`,
    brand: { '@type': 'Brand', name: 'Shiv Ganga Travels' },
    offers: {
      '@type': 'Offer',
      price: '13900',
      priceCurrency: 'INR',
      priceValidUntil: '2026-11-30',
      availability: 'https://schema.org/InStock',
      url: `${SITE.baseUrl}/char-dham-yatra`,
      seller: { '@type': 'Organization', name: SITE.name, '@id': `${SITE.baseUrl}/#organization` },
    },
    aggregateRating: { '@type':'AggregateRating', ratingValue: 4.7, reviewCount: 54, bestRating:5 },
  };

  const faqSchema = { '@context':'https://schema.org','@type':'FAQPage', mainEntity: GLOBAL_FAQS.map(f => ({'@type':'Question',name:f.q,acceptedAnswer:{'@type':'Answer',text:f.a}})) };
  // Voice-search: tells Google Assistant / TTS which concise blocks to read aloud
  const webpage = {
    '@context':'https://schema.org','@type':'WebPage',
    '@id':`${SITE.baseUrl}/#webpage`,
    url:SITE.baseUrl,
    name:'Char Dham Yatra 2026 from Haridwar — Shiv Ganga Travels',
    inLanguage:'en-IN',
    isPartOf:{ '@id':`${SITE.baseUrl}/#website` },
    about:{ '@id':`${SITE.baseUrl}/#organization` },
    primaryImageOfPage:{ '@type':'ImageObject', url:`${SITE.baseUrl}/opengraph-image` },
    speakable:{ '@type':'SpeakableSpecification', cssSelector:['.speakable-answer'] },
  };
  return (<><script type="application/ld+json" dangerouslySetInnerHTML={{ __html:JSON.stringify(charDhamProduct) }}/><script type="application/ld+json" dangerouslySetInnerHTML={{ __html:JSON.stringify(webpage) }}/><script type="application/ld+json" dangerouslySetInnerHTML={{ __html:JSON.stringify(faqSchema) }}/></>);
}

