import GuideArticle, { H2, P, UL } from '@/components/GuideArticle';
import { SITE } from '@/data/packages';

export const metadata = {
  title: 'Places to See in & Around Kedarnath 2026 — Beyond the Temple',
  description: 'What to see at Kedarnath besides the temple — Bhairavnath, Vasuki Tal, Gandhi Sarovar, Triyuginarayan and Guptkashi, with time needed for each.',
  keywords: ['kedarnath places to see', 'places to visit kedarnath', 'kedarnath sightseeing', 'vasuki tal kedarnath', 'triyuginarayan temple'],
  alternates: { canonical: `${SITE.baseUrl}/blog/kedarnath-places-to-see` },
  openGraph: { title: 'Places to See in & Around Kedarnath 2026', url: `${SITE.baseUrl}/blog/kedarnath-places-to-see`, type: 'article', images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: 'Places to See Around Kedarnath' }] },
};

export default function Page() {
  const faqs = [
    { q: 'What is there to see at Kedarnath besides the temple?', a: 'Within walking distance of the temple: Bhairavnath temple on the ridge above, the Adi Shankaracharya Samadhi just behind the main shrine, and short hikes to Gandhi Sarovar (Chorabari Tal) and the harder Vasuki Tal. Lower down, Triyuginarayan, Sonprayag and Guptkashi are worth a stop.', plain: 'Near the temple: Bhairavnath, the Adi Shankaracharya Samadhi, Gandhi Sarovar and Vasuki Tal. Lower down: Triyuginarayan, Sonprayag and Guptkashi.' },
    { q: 'Is Vasuki Tal worth the trek?', a: 'For fit trekkers, yes — it is a high glacial lake about 8km from Kedarnath at roughly 4,150m, with Chaukhamba views. It is a serious half-day in thin air and not for casual pilgrims or anyone short on time after darshan.', plain: 'Yes for fit trekkers — an 8km hike to a glacial lake at about 4,150m with Chaukhamba views, but a demanding half-day at altitude, not for casual visitors.' },
    { q: 'How much extra time do I need for sightseeing at Kedarnath?', a: 'The temple-side spots (Bhairavnath, Samadhi, Gandhi Sarovar) add half a day if you stay an extra night near the temple. Vasuki Tal needs a full extra day. Most package pilgrims see the temple-side spots and the road stops, not the high lakes.', plain: 'Temple-side spots add about half a day with an extra night; Vasuki Tal needs a full extra day. Most pilgrims do the temple-side and roadside spots only.' },
    { q: 'What is special about Triyuginarayan?', a: 'It is believed to be where Shiva and Parvati were married, with a sacred fire said to have burned continuously since. It sits on the road below Kedarnath near Sonprayag and makes an easy, meaningful add-on.', plain: 'Triyuginarayan is believed to be the site of Shiva and Parvati’s wedding, with a continuously-burning sacred fire. It is an easy add-on near Sonprayag.' },
  ];

  return (
    <GuideArticle
      slug="kedarnath-places-to-see"
      badge="Sightseeing · 2026"
      title="Places to See in & Around Kedarnath"
      subtitle="The temple is the reason you came, but the ridge above it and the road below hold more than most pilgrims realise. Here is what is worth your time, and what to skip if you are short on it."
      pills={['🛕 Bhairavnath','🏔️ Vasuki Tal','🔥 Triyuginarayan']}
      facts={[['Bhairavnath','30 min climb'],['Shankaracharya Samadhi','behind temple'],['Gandhi Sarovar','3km hike'],['Vasuki Tal','8km, full day'],['Triyuginarayan','road stop'],['Base town','Guptkashi']]}
      ctaIntent="kedarnath"
      faqs={faqs}
      related={[['Kedarnath Complete Guide','/blog/kedarnath-yatra-complete-guide'],['Kedarnath Trek Guide','/blog/kedarnath-trek-guide'],['Darshan Timings','/blog/kedarnath-darshan-timing'],['Kedarnath Temple','/kedarnath-temple'],['Kedarnath Packages','/kedarnath-yatra']]}
    >
      <P>Almost everyone treks 16km to Kedarnath, takes darshan, photographs the temple against the peak, and turns straight back down. That&apos;s a complete pilgrimage and there&apos;s nothing wrong with it. But if you&apos;ve come this far and can spare even half a day more, the ridge above the temple and the valley below it hold some of the quietest, most striking spots on the whole circuit. Here&apos;s what&apos;s actually worth it, ranked by how much extra effort each one costs.</P>

      <H2>Right beside the temple (no extra day needed)</H2>
      <UL items={[
        'Adi Shankaracharya Samadhi — directly behind the main shrine, the rebuilt memorial to the philosopher who revived Kedarnath. A few minutes\u2019 walk and often missed in the rush to the temple.',
        'Bhairavnath Temple — a short, steep 30-minute climb up the ridge south of the temple. Bhairav is the guardian deity of Kedarnath, said to protect the valley when the temple closes for winter. The view back over the temple and the Mandakini valley is the best in the area.',
      ]} />

      <H2>A short hike (worth an extra night)</H2>
      <P><strong>Gandhi Sarovar (Chorabari Tal)</strong> is a roughly 3km walk above the temple to a small glacial lake — the same Chorabari glacier whose overflow caused the 2013 floods. It&apos;s a gentle introduction to the high country and doable in a morning if you spend a night near the temple. Go early; clouds roll in by midday.</P>

      <H2>For fit trekkers only (a full extra day)</H2>
      <P><strong>Vasuki Tal</strong> is the serious one — about 8km from Kedarnath at around 4,150m, a high glacial lake with a clean line of sight to the Chaukhamba massif. It&apos;s a demanding half-to-full day in thin air, on a faint trail, and absolutely not something to attempt the same day you trek up. We only point experienced, acclimatised travellers towards it, and never solo without a local guide.</P>

      <H2>On the road below (easy add-ons)</H2>
      <UL items={[
        'Triyuginarayan — believed to be where Shiva and Parvati were married, with a sacred fire said to have burned for three ages. An easy detour near Sonprayag and one of the more moving lesser-known sites.',
        'Sonprayag & Gaurikund — the confluence town and the trailhead; hot springs at Gaurikund are a welcome soak before or after the trek.',
        'Guptkashi — your likely base town, home to the Vishwanath and Ardhanareshwar temples and where the Kedarnath deity is worshipped in winter at nearby Ukhimath.',
      ]} />

      <H2>How to fit it in</H2>
      <P>A standard package trekking up and down in a day leaves room only for the temple-side spots and the roadside stops. To add Gandhi Sarovar or Triyuginarayan properly, build in one extra night — either near the temple for the high spots, or at Guptkashi for the valley ones. If you want Vasuki Tal, treat it as its own day with a guide. Tell us when you book and we&apos;ll shape the itinerary around what you actually want to see, rather than rushing you back down with everyone else.</P>
    </GuideArticle>
  );
}
