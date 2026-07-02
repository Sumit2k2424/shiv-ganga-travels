import GuideArticle, { H2, P, UL, Callout } from '@/components/GuideArticle';
import { SITE } from '@/data/packages';

export const metadata = {
  title: 'Char Dham Yatra Weather 2026: Month-by-Month',
  description: 'Month-by-month weather for Yamunotri, Gangotri, Kedarnath and Badrinath in 2026 — temperatures, rain, snow risk and the weeks we actually recommend booking.',
  keywords: ['char dham weather 2026', 'char dham yatra weather', 'kedarnath temperature', 'badrinath weather month wise', 'char dham best weather month'],
  alternates: { canonical: `${SITE.baseUrl}/blog/char-dham-weather-guide` },
  openGraph: { title: 'Char Dham Yatra Weather 2026 — Month by Month', url: `${SITE.baseUrl}/blog/char-dham-weather-guide`, type: 'article', images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: 'Char Dham Yatra Weather 2026' }] },
};

export default function Page() {
  const faqs = [
    { q: 'Which month has the best weather for Char Dham Yatra?', a: 'Late April to mid-June and again late September to October. May has the clearest mornings but the biggest crowds; October has cold nights but the cleanest mountain views of the whole season.', plain: 'Late April to mid-June and late September to October are the best weather windows. May has clear mornings and big crowds; October is colder at night but has the clearest mountain views.' },
    { q: 'How cold does Kedarnath get at night?', a: 'Even in peak June, Kedarnath drops to roughly 0–5°C after dark at 3,583m. In April and October it routinely goes below freezing. Carry thermals regardless of which month you travel.', plain: 'Kedarnath drops to about 0–5°C at night even in June, and below freezing in April and October. Thermals are needed in every month.' },
    { q: 'Is it safe to do Char Dham during monsoon (July–August)?', a: 'We pause most bookings in July and August. The Rudraprayag and Gangotri stretches see landslides and road closures, and darshan plans collapse when a road shuts for a day. If you must travel then, keep two buffer days.', plain: 'July and August carry real landslide and road-closure risk on the Rudraprayag and Gangotri routes. We pause most monsoon bookings and advise buffer days if travel is unavoidable.' },
    { q: 'Does it snow during the yatra season?', a: 'Fresh snow is common at the temple sites in the first two weeks after opening (late April) and can return by late October at Kedarnath and Badrinath. Mid-season snow is rare but possible after a sudden weather system.', plain: 'Snow is common right after opening in late April and can return by late October at Kedarnath and Badrinath. Mid-season snow is rare.' },
  ];

  return (
    <GuideArticle
      slug="char-dham-weather-guide"
      badge="Weather Guide · 2026"
      title="Char Dham Yatra Weather 2026 — Month by Month"
      subtitle="What the weather actually does at Yamunotri, Gangotri, Kedarnath and Badrinath through the season — and the windows we tell our own pilgrims to book."
      pills={['🌡️ 0–5°C nights at temples', '☔ Avoid Jul–Aug', '🏔️ Best views in October']}
      facts={[['Season opens','late April'],['Season closes','Nov 11–14'],['Best window','May & October'],['Kedarnath night temp','0–5°C'],['Monsoon','Jul–Aug (avoid)'],['Rain gear','always carry']]}
      ctaIntent="char-dham"
      faqs={faqs}
      related={[['Best Time for Char Dham','/blog/best-time-char-dham'],['Packing List','/blog/char-dham-yatra-packing-list'],['Kedarnath Weather','/kedarnath-weather'],['Road Status','/char-dham-road-status'],['Opening Dates 2026','/blog/char-dham-yatra-opening-dates-2026']]}
    >
      <P>People ask us for one number — the temperature — and there isn&apos;t one. The four dhams sit between 3,000 and 3,800 metres, the valleys trap their own micro-weather, and a sunny Haridwar morning tells you almost nothing about what Kedarnath will do that afternoon. After fifteen seasons of running groups up this circuit, here is the honest month-by-month picture, written the way I&apos;d explain it to a relative who asked me when to go.</P>

      <H2>April — the opening fortnight (cold, dramatic, half-empty)</H2>
      <P>The portals open in the last week of April. The first ten days are the coldest you&apos;ll see in the &quot;official&quot; season: daytime 8–14°C at the temples, nights below freezing, and very often fresh snow still lying around Kedarnath and Badrinath. Roads have just reopened, so a stray landslide or a late snowfall can shift a day&apos;s plan. The trade-off is space — shorter darshan queues and quiet hotels. We send fit travellers and photographers in this window, not first-timers with elderly parents.</P>

      <H2>May — the clear-morning, full-house month</H2>
      <P>May is the month most families picture, and for good reason. Mornings are crisp and clear, daytime temperatures climb to a comfortable 15–20°C in the valleys, and the high passes are open and stable. It is also the single busiest month. Hotels in Guptkashi, Barkot and Joshimath fill weeks ahead, and the Kedarnath trek can hold a slow-moving line by mid-morning. If you travel in May, start every climb before sunrise and book at least a month out. Nights still drop to 2–6°C at the temples.</P>

      <H2>June — warm valleys, the first monsoon hints</H2>
      <P>Early June stays bright and is genuinely pleasant lower down. By the third week the pre-monsoon clouds build in the afternoons and you start losing the peaks behind haze after noon. It&apos;s still a strong month for darshan, just plan morning visits and treat afternoons as travel time.</P>

      <Callout>Our blunt rule for July and August: don&apos;t, unless you have flexible dates. The monsoon turns the Rudraprayag–Gaurikund and Gangotri roads into landslide zones, and a single road closure can cost you a whole dham.</Callout>

      <H2>July–August — monsoon (we mostly pause)</H2>
      <P>This is the stretch we actively discourage. Rain is heavy and persistent, visibility collapses, and the mountain roads close without warning. We&apos;ve had years where a closure near Sonprayag held groups for a full day. If a pilgrim insists on these months — usually for a specific tithi — we build in two buffer days and a clear &quot;skip this dham if the road shuts&quot; plan before we confirm anything.</P>

      <H2>September — the reset</H2>
      <P>By the second week of September the monsoon pulls back, the air rinses clean, and the rivers run full and loud. Crowds are thin because schools have reopened. Roads need a few dry days to settle after the rains, so we keep an eye on the road-status updates before locking the first departures.</P>

      <H2>October — the connoisseur&apos;s month</H2>
      <P>If you want the photographs in the brochures — sharp blue skies, snow dusting on the peaks behind the temples, almost no haze — October is it. The catch is the cold. Nights at Kedarnath and Badrinath slide back below freezing, and the portals begin closing around Diwali (Nov 11–14 in 2026). Pack as if it&apos;s winter even though the afternoons feel mild.</P>

      <H2>What to carry, in every single month</H2>
      <UL items={[
        'Thermal inners and a windproof outer layer — non-negotiable, even in June.',
        'A compact rain poncho. Afternoon showers happen outside the monsoon too.',
        'Two extra days of personal medicine in case a road closure stretches your trip.',
        'Lip balm, sunscreen and sunglasses — high-altitude sun burns faster than people expect.',
      ]} />
      <P>The short version: book May for reliability and crowds, October for views and cold, the shoulder weeks of April and September if you want quiet, and skip the monsoon. Whichever you choose, we track the live road and weather picture for every group and adjust the running order rather than push into a closed pass. If you tell us your dates, we&apos;ll tell you honestly what the mountain is likely to do.</P>
    </GuideArticle>
  );
}
