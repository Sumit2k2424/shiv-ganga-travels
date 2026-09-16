/* ══════════════════════════════════════════════════════════════
   JSON-LD builders for the cab pages (breadcrumb, FAQ, renderer).

   House rule, inherited from the rest of the site: the rated
   TravelAgency organization node is emitted exactly ONCE, in
   layout.js. Everything here references it by @id and carries no
   aggregateRating of its own — a second rated org node is what
   produced Google's "multiple aggregate ratings" error before.
   Reviews still appear as visible page content, which is what
   both readers and LLMs actually consume.
   ══════════════════════════════════════════════════════════════ */

import { SITE } from '@/data/packages';

const abs = (path) => `${SITE.baseUrl}${path}`;

export function breadcrumb(trail) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: trail.map(([name, path], i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name,
      item: abs(path),
    })),
  };
}

export function faqPage(faqs) {
  // FAQPage JSON-LD retired site-wide on 17 Sep 2026 (see GuideArticle.js).
  return null;
  // eslint-disable-next-line no-unreachable
  if (!faqs?.length) return null;
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(([q, a]) => ({
      '@type': 'Question',
      name: q,
      acceptedAnswer: { '@type': 'Answer', text: a },
    })),
  };
}

/** Renders any number of schema objects, skipping nulls. */
export function JsonLd({ items = [] }) {
  return (
    <>
      {items.filter(Boolean).flat().map((obj, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(obj) }}
        />
      ))}
    </>
  );
}
