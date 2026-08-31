// Shared renderer for the /X-to-Y-distance pages.
//
// Chrome and the leg table come from src/data/distances.js. Every page
// supplies its own FAQs and its own closing section, because a distance page
// with nothing but a number is the definition of thin — the reason these rank
// is the "why the time goes where it goes" prose, and that cannot be shared.

import Link from 'next/link';
import { SITE } from '@/data/packages';
import AnswerBox from '@/components/AnswerBox';
import {
  Hero, Crumbs, Article, Updated, H2, P, Table, Note,
  FAQBlock, Sources, CTA, Related,
} from '@/components/LocalPageKit';

export function distanceSchema({ route, faqs, crumbs }) {
  const url = `${SITE.baseUrl}/${route.slug}`;
  return [
    {
      '@context':'https://schema.org', '@type':'FAQPage',
      mainEntity: faqs.map(f => ({ '@type':'Question', name:f.q, acceptedAnswer:{ '@type':'Answer', text:f.a } })),
    },
    {
      '@context':'https://schema.org', '@type':'Trip',
      name: `${route.from} to ${route.to} by road`,
      description: `Road route from ${route.from} to ${route.to} — ${route.kmLabel}, ${route.time}.`,
      itinerary: [
        { '@type':'Place', name: route.from },
        ...route.via.map(v => ({ '@type':'Place', name: v })),
        { '@type':'Place', name: route.to },
      ],
      provider: { '@id': `${SITE.baseUrl}/#organization` },
    },
    {
      '@context':'https://schema.org', '@type':'Article',
      headline: `${route.from} to ${route.to} Distance — Route, Time and Halts`,
      author: { '@id': `${SITE.baseUrl}/#founder` },
      publisher: { '@id': `${SITE.baseUrl}/#organization` },
      datePublished: '2026-08-11', dateModified: SITE.lastUpdatedISO,
      mainEntityOfPage: url,
    },
    {
      '@context':'https://schema.org', '@type':'BreadcrumbList',
      itemListElement: [
        { '@type':'ListItem', position:1, name:'Home', item:SITE.baseUrl },
        ...crumbs.map((c,i) => ({ '@type':'ListItem', position:i+2, name:c[0], item:`${SITE.baseUrl}${c[1]}` })),
      ],
    },
  ];
}

export default function DistancePage({ route, faqs, crumbTrail, related, sources, cta, children }) {
  return (
    <>
      <Hero eyebrow={`${route.kmLabel} · ${route.time}`} title={`${route.from} to ${route.to} Distance`}>
        <strong style={{ color:'#FFD166' }}>{route.kmLabel}</strong> by road, {route.time} of driving.
        {route.trek ? ` The road ends at ${route.endPoint.split('—')[0].trim()}, then ${route.trek}.` : ` ${route.endPoint}.`}
      </Hero>

      <Crumbs trail={crumbTrail}/>

      <Article>
        <Updated/>

        {/* Direct answer — the block AI engines lift.
            This was already written as the page's answer, but it rendered as a
            plain <P>, so it carried none of the signals an extractor keys on:
            no .speakable-answer hook, no visual framing separating it from the
            body copy. AnswerBox adds both without changing a word of it. */}
        <AnswerBox>
          <strong>{route.from} to {route.to} is {route.kmLabel} by
          road and takes {route.time}</strong> in normal conditions.
          {route.trek ? ` Vehicles stop at ${route.endPoint.split('—')[0].trim()}; the final stretch is ${route.trek}.` : ''}{' '}
          The route runs {route.from} → {route.via.join(' → ')} → {route.to}. Below is where the hours
          actually go, leg by leg, from drivers who run this road through the season.
        </AnswerBox>

        <H2>The Route, Leg by Leg</H2>
        <Table
          head={['Leg', 'Distance', 'Time', 'What to expect']}
          rows={route.legs.map(l => [l[0], l[1], l[2], l[3]])}
        />
        <p style={{ fontSize:12.5, color:'var(--text-muted)', marginBottom:8 }}>
          Times are for a private vehicle in dry conditions, excluding meal stops. Night driving is
          banned on all Char Dham routes between 10 PM and 4 AM.
        </p>

        <H2>Why It Takes Longer Than the Distance Suggests</H2>
        <P>{route.whySlow}</P>

        {route.note && (
          <Note tone="warn" title="Worth knowing before you fix dates">
            {route.note}
          </Note>
        )}

        {/* Cumulative vs direct — pre-empts the obvious confusion */}
        <Note tone="info" title="Why our route map shows a bigger number">
          Our{' '}
          <Link href="/char-dham-yatra-route-map" style={{ color:'var(--navy)', fontWeight:700 }}>Char Dham route map</Link>{' '}
          gives running totals along the full circuit — Badrinath reads 560 km there because that is the
          distance covered via all four dhams in order. The figure on this page is direct, {route.from} to{' '}
          {route.to}. Both are right; they answer different questions.
        </Note>

        {/* Page-specific section */}
        {children}

        <H2>Frequently Asked Questions</H2>
        <FAQBlock faqs={faqs}/>

        <Sources items={sources}/>

        <CTA title={cta.title} blurb={cta.blurb} waMessage={cta.waMessage}/>

        <Related links={related}/>
      </Article>
    </>
  );
}
