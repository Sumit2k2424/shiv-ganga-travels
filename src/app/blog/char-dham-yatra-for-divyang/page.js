import GuideArticle, { H2, P, UL, Callout } from '@/components/GuideArticle';
import { SITE } from '@/data/packages';

export const metadata = {
  title: { absolute: 'Char Dham Yatra for Divyang & Wheelchair Pilgrims' },
  description: 'An honest accessibility guide to Char Dham — which dhams a wheelchair user can genuinely reach, what palki and kandi carriage involve, and where the helicopter changes everything.',
  keywords: ['char dham yatra for divyang', 'char dham yatra wheelchair', 'char dham yatra for disabled', 'kedarnath for handicapped pilgrims', 'accessible char dham yatra', 'palki kandi char dham'],
  alternates: { canonical: `${SITE.baseUrl}/blog/char-dham-yatra-for-divyang` },
  openGraph: {
    title: 'Char Dham Yatra for Divyang & Wheelchair Pilgrims',
    description: 'Which of the four dhams are genuinely reachable, what carriage options really involve, and how to plan a yatra that works.',
    url: `${SITE.baseUrl}/blog/char-dham-yatra-for-divyang`,
    type: 'article',
    images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: 'Char Dham Yatra accessibility guide for divyang pilgrims' }],
  },
};

export default function Page() {
  const faqs = [
    { q: 'Can a wheelchair user do the Char Dham Yatra?',
      a: 'Two of the four dhams, comfortably. Badrinath sits directly beside the road and is the most accessible of the four. Gangotri is reachable by road with a short walk to the temple that is manageable with help. Yamunotri and Kedarnath both end in treks — 6 km and 16 km — on paths a wheelchair cannot negotiate, so those require carriage or, for Kedarnath, a helicopter.',
      plain: 'Badrinath and Gangotri are reachable by road. Yamunotri and Kedarnath end in treks a wheelchair cannot negotiate and need carriage or a helicopter.' },
    { q: 'What is the difference between palki, pony and kandi?',
      a: 'A palki is a seated chair carried by four bearers — the most stable and dignified option, and the most expensive. A kandi is a basket carried on one porter\'s back, suited to lighter adults and children, and it feels precarious to many people. A pony carries you seated but demands core balance and grip, so it does not suit everyone with mobility impairment. For most divyang pilgrims the palki is the right answer despite the cost.',
      plain: 'Palki is a chair carried by four bearers, most stable and most costly. Kandi is a back-carried basket for lighter passengers. A pony needs balance and grip, so it suits fewer disabled pilgrims.' },
    { q: 'Is the Kedarnath helicopter a good option for disabled pilgrims?',
      a: 'It is the single biggest thing you can do to make Kedarnath feasible. The helicopter flies from Phata, Sersi or Guptkashi to a helipad close to the temple, removing essentially all of the 16 km trek. There is still a short walk of a few hundred metres from the helipad, and palki bearers work that stretch. Book through the official IRCTC heliyatra channel.',
      plain: 'Yes — it removes almost the entire 16 km trek, leaving a few hundred metres from the helipad where palki bearers are available. Book via the official IRCTC heliyatra channel.' },
    { q: 'Is Badrinath really accessible?',
      a: 'It is the most accessible major Himalayan shrine in Uttarakhand. The temple stands beside the road in Badrinath town, so there is no trek at all — the remaining challenge is a flight of steps at the temple itself, where assistance is generally available. If a full circuit is not realistic, a Badrinath-focused trip is a complete pilgrimage in its own right.',
      plain: 'Yes — the temple is beside the road with no trek. The main obstacle is a flight of steps at the temple, where assistance is generally available.' },
    { q: 'Should divyang pilgrims attempt all four dhams?',
      a: 'Often the better plan is not to. The full circuit is 1,500 km of mountain road over ten to twelve days, and the fatigue of the driving alone is significant before any trek. Many families get more out of Do Dham — Kedarnath by helicopter and Badrinath by road — than out of a rushed four-dham attempt. There is no religious hierarchy that makes a partial yatra lesser.',
      plain: 'Not always. Do Dham — Kedarnath by helicopter plus Badrinath by road — is often a better experience than a rushed four-dham attempt.' },
    { q: 'What documents do divyang pilgrims need?',
      a: 'The standard free yatra registration at registrationandtouristcare.uk.gov.in applies to everyone. Carry your disability certificate — it is useful at temples and for any concession that applies. Pilgrims aged 55 and over need the health screening the state requires, and it is worth getting a fitness opinion from your own doctor regardless of age given the altitude.',
      plain: 'Standard free yatra registration, plus your disability certificate. Pilgrims 55 and over need the state health screening; a doctor opinion is wise at any age.' },
    { q: 'How far in advance should we book?',
      a: 'Earlier than most, because the things you need are the things that run out. Ground-floor hotel rooms in the base towns are limited, palki bearers get booked on peak mornings, and helicopter seats sell out well ahead. Six months for a peak-season trip is reasonable.',
      plain: 'Earlier than usual — ground-floor rooms, palki bearers and helicopter seats all run out. Six months ahead for peak season.' },
    { q: 'Can you arrange a yatra built around a wheelchair user?',
      a: 'Yes, and it is worth saying that this needs planning rather than goodwill on the day. It means ground-floor rooms, a vehicle you can transfer into without a struggle, shorter driving days, palki booked in advance rather than negotiated at the trailhead, and an itinerary that does not collapse if one day goes slowly. Tell us the specifics when you enquire and we will build around them.',
      plain: 'Yes — with ground-floor rooms, an accessible vehicle, shorter driving days, palki booked in advance and slack built into the itinerary.' },
  ];

  return (
    <GuideArticle
      slug="char-dham-yatra-for-divyang"
      badge="Accessibility Guide"
      title="Char Dham Yatra for Divyang & Wheelchair Pilgrims"
      subtitle="Which dhams are genuinely reachable, what palki and kandi carriage actually involve, and how to plan a yatra that works instead of one that hopes."
      pills={['♿ Badrinath most accessible', '🚁 Heli changes Kedarnath', '🛖 Palki & kandi explained']}
      facts={[['Badrinath', 'Roadside, no trek'], ['Gangotri', 'Road + short walk'], ['Yamunotri', '6 km trek'], ['Kedarnath', '16 km trek'], ['Best aid', 'Palki (4 bearers)'], ['Registration', 'Free, mandatory']]}
      readTime="7 min read"
      takeaways={[
        <><strong>Badrinath and Gangotri</strong> are reachable by road — a genuine two-dham pilgrimage without any trek.</>,
        <>The <strong>Kedarnath helicopter</strong> removes almost the whole 16 km trek and is the single highest-value decision you can make.</>,
        <><strong>Palki</strong> — a chair carried by four bearers — is usually the right carriage, not a pony and not a kandi.</>,
        <>A <strong>partial yatra planned well</strong> beats a full circuit endured badly. Nothing about it is religiously lesser.</>,
      ]}
      ctaIntent="char-dham"
      faqs={faqs}
      related={[['Senior citizen guide', '/blog/senior-citizen-char-dham'], ['Heart patients', '/blog/char-dham-yatra-for-heart-patients'], ['Kedarnath helicopter', '/blog/kedarnath-helicopter-booking'], ['Do Dham yatra', '/do-dham-yatra'], ['Badrinath packages', '/badrinath-tour-package'], ['Medical certificate', '/blog/char-dham-yatra-medical-certificate']]}
    >
      <P>Families ask us some version of this question every season: can my father do the Char Dham Yatra in a wheelchair? The useful answer is not yes or no. It is that two of the four dhams are straightforward, one is solved by a helicopter, and one is genuinely hard — and once you know which is which, you can plan a pilgrimage that works rather than one that runs on hope and gets abandoned at a trailhead.</P>

      <H2>The four dhams, ranked by what they demand</H2>
      <UL items={[
        'Badrinath — the most accessible major shrine in the Garhwal Himalaya. The temple is beside the road in Badrinath town. No trek at all. The obstacle is a flight of steps at the temple, where help is generally at hand.',
        'Gangotri — the road runs almost to the temple, leaving a short walk over uneven ground. Manageable with a companion, and far easier than either trek dham.',
        'Yamunotri — 6 km of trek from Janki Chatti, climbing steadily. Not wheelchair-negotiable. Palki, kandi or pony only.',
        'Kedarnath — 16 km from Gaurikund, the hardest of the four on foot. This is the one the helicopter transforms.',
      ]} />
      <Callout>If the full circuit is not realistic, Badrinath and Gangotri together make a complete, road-accessible pilgrimage with no trek in it. That is a real yatra, not a consolation prize.</Callout>

      <H2>Carriage options, described honestly</H2>
      <P>At Yamunotri and Kedarnath, if you are not walking, someone is carrying you. There are three ways and they are not equivalent.</P>

      <H2>Palki — usually the right choice</H2>
      <P>A seated chair borne by four men. It is the most stable of the three, the most comfortable over hours, and by some distance the most expensive. For a wheelchair user it is nearly always the correct option: you are seated upright and properly supported, and the bearers work in a rhythm that copes with the steps. Book it in advance for peak mornings rather than negotiating at the trailhead in the dark with a queue behind you.</P>

      <H2>Kandi — for lighter passengers only</H2>
      <P>A basket carried on one porter&apos;s back. It suits children and lighter adults, and it costs less. Be aware that many people find it unnerving — you are high up, facing backwards, held by one person. Some pilgrims are entirely at ease in it; others ask to be put down within the first kilometre. If you have never used one, it is worth being honest with yourself about that before the day.</P>

      <H2>Pony — not the default people assume</H2>
      <P>A pony carries you seated, but it asks for core balance, grip strength and the ability to shift your weight on a moving animal over uneven ground for hours. For many pilgrims with mobility impairment, particularly anyone with limited trunk control or a spinal condition, it is the wrong tool. It is the option people default to because it is the most visible and the cheapest of the three, and it is the one most often regretted.</P>

      <H2>The helicopter, and why it matters so much</H2>
      <P>For Kedarnath, the helicopter is not a luxury upgrade. It is the difference between the dham being possible and not.</P>
      <P>Flights run from Phata, Sersi and Guptkashi to a helipad close to the temple, cutting out essentially the whole 16 km climb. What remains is a few hundred metres from the helipad to the sanctum, and palki bearers work that stretch. A journey that would otherwise be two days of carriage becomes a morning.</P>
      <P>Book through the official IRCTC heliyatra channel — that is the authorised route, and seats for peak dates go early. The{' '}
      <a href="/blog/kedarnath-helicopter-booking" style={{ color: 'var(--teal)', fontWeight: 600 }}>Kedarnath helicopter guide</a> covers the process and the weather cancellations you should plan around, because they do happen and you want a spare day in the itinerary.</P>

      <H2>Planning details that decide whether it works</H2>
      <P>The yatra succeeds or fails on unglamorous logistics, not on determination.</P>
      <UL items={[
        'Ground-floor rooms. Small hill hotels rarely have lifts. This is the single most useful thing to specify when booking, and it is why booking early matters more for you than for other pilgrims.',
        'The right vehicle. Getting in and out of a high SUV repeatedly is exhausting. A vehicle with a manageable step and room to store a folded wheelchair changes the whole trip.',
        'Shorter driving days. The mountain roads are tiring for everybody. Splitting long legs costs an extra night and is almost always worth it.',
        'Slack in the schedule. Build in at least one spare day. Weather cancels helicopters and bad days happen; an itinerary with no give turns a setback into an abandoned yatra.',
        'Toilets and breaks. Plan the stops rather than discovering them. Facilities on these routes are basic and irregular.',
      ]} />

      <H2>Documents and health</H2>
      <P>Everyone needs the free state registration at{' '}
      <a href="https://registrationandtouristcare.uk.gov.in" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--teal)', fontWeight: 600 }}>registrationandtouristcare.uk.gov.in</a>. Carry your disability certificate — it helps at temples and for concessions where they apply. Pilgrims aged 55 and above go through the health screening the state requires.</P>
      <P>Beyond paperwork: the dhams sit between roughly 3,000 and 3,600 metres, and altitude affects breathing and stamina regardless of mobility. Talk to your own doctor before booking, not after arriving. Our notes for{' '}
      <a href="/blog/char-dham-yatra-for-heart-patients" style={{ color: 'var(--teal)', fontWeight: 600 }}>pilgrims with heart conditions</a> apply here too.</P>

      <H2>A plan that usually works</H2>
      <P>When families describe a wheelchair user in the group, the itinerary I most often suggest is not the full circuit. It is Badrinath by road with an unhurried couple of days, Kedarnath by helicopter with a spare day for weather, and Gangotri added if time and stamina allow. Yamunotri is the one I am most likely to advise leaving out, because 6 km of carriage each way is a long, jolting day and it is the dham where I have seen the most trips come undone.</P>
      <P>That is a recommendation, not a rule. Some pilgrims want all four and are entirely clear-eyed about what it takes, and we plan those too. What I would push back on is attempting the full circuit without adjusting the pace, the rooms or the carriage — that is where a pilgrimage people saved years for turns into an ordeal.</P>
    </GuideArticle>
  );
}
