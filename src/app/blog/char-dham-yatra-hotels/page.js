import GuideArticle, { H2, P, UL, Callout } from '@/components/GuideArticle';
import { SITE } from '@/data/packages';

export const metadata = {
  title: 'Char Dham Yatra Hotels 2026 — Where Pilgrims Actually Stay',
  description: 'Honest guide to Char Dham Yatra hotels in 2026: where you really stay at each stop (Barkot, Uttarkashi, Guptkashi, Joshimath, Badrinath), what budget vs premium rooms get you, and booking tips from a Haridwar operator.',
  keywords: ['char dham yatra hotels', 'char dham hotels 2026', 'where to stay char dham', 'kedarnath accommodation', 'badrinath hotels booking'],
  alternates: { canonical: `${SITE.baseUrl}/blog/char-dham-yatra-hotels` },
  openGraph: { title: 'Char Dham Yatra Hotels 2026 — Where Pilgrims Stay', url: `${SITE.baseUrl}/blog/char-dham-yatra-hotels`, type: 'article', images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: 'Char Dham Yatra Hotels 2026' }] },
};

export default function Page() {
  const faqs = [
    { q: 'Where do you actually stay during Char Dham Yatra?', a: 'You almost never sleep at the temple towns themselves. The usual base towns are Barkot (for Yamunotri), Uttarkashi (for Gangotri), Guptkashi or Sersi (for Kedarnath) and Joshimath or Badrinath town (for Badrinath). Kedarnath itself has only basic huts and tents near the temple.', plain: 'Standard base towns are Barkot, Uttarkashi, Guptkashi/Sersi and Joshimath/Badrinath. The temple sites themselves have only basic stays; Kedarnath near the temple has huts and tents.' },
    { q: 'Are there good hotels at Kedarnath?', a: 'Not in the way most people imagine. Near the Kedarnath temple (3,583m) you get GMVN huts, simple lodges and tented camps — clean but basic, shared bathrooms common, limited heating. Anyone wanting a proper room sleeps at Guptkashi and does Kedarnath as a day trek or overnight in a basic stay.', plain: 'No conventional hotels at Kedarnath temple. Options are GMVN huts, simple lodges and tents. Comfortable rooms are at Guptkashi; Kedarnath itself is basic.' },
    { q: 'Should I book hotels myself or through a package?', a: 'During peak May–June the good rooms in small base towns sell out weeks ahead, and operators pre-block them. Self-booking in peak season often means a worse room at a higher walk-in rate. In the shoulder months you have more freedom to book direct.', plain: 'In peak May–June operators pre-block the limited good rooms, so packages usually get better rooms than peak walk-in self-booking. Shoulder months allow easier direct booking.' },
    { q: 'What is the difference between budget and premium hotel packages?', a: 'Budget gets you a clean room with hot water and a bed for the night — fine for a circuit where you arrive late and leave at dawn. Premium adds bigger rooms, better food, heating, and properties closer to the temple or with valley views. On this route, location often matters more than star rating.', plain: 'Budget gives a clean room with hot water; premium adds space, heating, better food and location. On this route location matters more than star rating.' },
  ];

  return (
    <GuideArticle
      slug="char-dham-yatra-hotels"
      badge="Accommodation Guide · 2026"
      title="Char Dham Yatra Hotels — Where Pilgrims Actually Stay"
      subtitle="The honest version: which towns you really sleep in, what a budget room versus a premium room gets you at each stop, and how booking works in peak season."
      pills={['🏨 Base-town stays','🔥 Hot water everywhere','⛺ Basic at temple sites']}
      facts={[['Yamunotri base','Barkot'],['Gangotri base','Uttarkashi'],['Kedarnath base','Guptkashi / Sersi'],['Badrinath stay','Joshimath / Badrinath'],['Peak season','book 3–4 wks ahead'],['Kedarnath temple','huts & tents only']]}
      ctaIntent="char-dham"
      faqs={faqs}
      related={[['Char Dham Cost','/blog/char-dham-yatra-cost'],['Kedarnath Hotels','/kedarnath-hotels'],['Badrinath Hotels','/badrinath-hotels'],['Budget vs Premium','/blog/char-dham-yatra-budget-vs-premium'],['Char Dham Packages','/char-dham-yatra']]}
    >
      <P>Hotels are the part of Char Dham that surprises first-timers the most. People picture checking into a city-style hotel beside each temple. The reality is mountain hospitality: small properties in base towns an hour or two below the shrines, simple rooms, reliable hot water, and food that&apos;s vegetarian by rule. None of that is a problem once you know to expect it — and on this route, where you sleep matters far less than how early you can leave in the morning.</P>

      <H2>Yamunotri — you stay at Barkot</H2>
      <P>There&apos;s no real accommodation at Yamunotri itself. The standard base is <strong>Barkot</strong>, about 36km below, with a handful of decent mid-range hotels and a few simple lodges. Janki Chatti, where the 6km Yamunotri trek begins, has very basic rooms for those who want an early start. We base groups at Barkot, leave before dawn and trek up fresh.</P>

      <H2>Gangotri — Uttarkashi or Harsil</H2>
      <P>Gangotri town has guesthouses and ashrams, but most groups sleep at <strong>Uttarkashi</strong> (around 100km away, the largest town on this leg) or, for something quieter and prettier, at <strong>Harsil</strong>. Uttarkashi has the widest range of rooms and the most reliable backup if a vehicle needs work. Gangotri is one of the few dhams where you can drive almost to the temple, so the base-town distance doesn&apos;t cost you a trek.</P>

      <H2>Kedarnath — this is the one to understand</H2>
      <P>Here is where expectations need managing. Comfortable hotels are at <strong>Guptkashi</strong> and <strong>Sersi</strong>, roughly 30km and a world away from the temple. Up at Kedarnath itself (3,583m, after a 16km trek) you get GMVN huts, simple lodges and tented camps. They&apos;re clean and the staff are kind, but rooms are tight, bathrooms are often shared, and heating is limited. Most of our pilgrims sleep at Guptkashi the night before, trek up, take darshan, and either return the same day or spend one basic night near the temple for the 4 AM aarti.</P>

      <Callout>If you only remember one thing: book your comfort at Guptkashi, not at Kedarnath. Treat the night near the temple as an adventure, not a hotel stay.</Callout>

      <H2>Badrinath — the easiest night of the trip</H2>
      <P>Badrinath rewards you at the end. You can stay in <strong>Badrinath town</strong> itself, a few minutes&apos; walk from the temple, or at <strong>Joshimath</strong> 45km below, which has more and better rooms. Because the temple is reachable by road, this is usually the most comfortable stop of the whole circuit — a fitting place to finish.</P>

      <H2>Budget vs premium — what the money actually buys</H2>
      <UL items={[
        'Budget: a clean room, hot water, two beds, simple veg meals. Perfectly adequate on a route where you arrive tired and leave at sunrise.',
        'Standard: larger rooms, attached bathrooms guaranteed, better dinners, sometimes a room heater on request.',
        'Premium: the best property in each town, valley-facing rooms, heating, richer food, and a location that shaves time off your morning start.',
      ]} />

      <H2>How booking really works in season</H2>
      <P>The honest economics: each base town has only a few good properties and a short five-month season, so during May and June they sell out weeks ahead. Operators like us pre-block rooms in winter, which is why a package room in peak season is usually better and cheaper than what you&apos;d get walking in. In the quieter shoulder months — late April, September, October — you have far more room to book direct and negotiate. Whichever way you go, confirm hot water and check whether bathrooms are attached before you pay; in these mountains that detail matters more than the star rating on the sign.</P>

      <P>We pre-block hotels for every group we run and match the category to your budget honestly — no upselling a premium tag for a standard room. Tell us your dates and group size on WhatsApp and we&apos;ll show you exactly which properties you&apos;d be in at each stop.</P>
    </GuideArticle>
  );
}
