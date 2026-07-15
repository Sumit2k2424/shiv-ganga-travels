import GuideArticle, { H2, P, UL } from '@/components/GuideArticle';
import { SITE } from '@/data/packages';

export const metadata = {
  title: 'Char Dham Yatra History & Significance — Why These Four Shrines',
  description: 'The history behind Char Dham Yatra: Adi Shankaracharya, the meaning of all four dhams, the Chota Char Dham, and why pilgrims walk the circuit clockwise.',
  keywords: ['char dham yatra history', 'char dham significance', 'why char dham yatra', 'adi shankaracharya char dham', 'chota char dham meaning'],
  alternates: { canonical: `${SITE.baseUrl}/blog/char-dham-yatra-history` },
  openGraph: { title: 'Char Dham Yatra History & Significance', url: `${SITE.baseUrl}/blog/char-dham-yatra-history`, type: 'article', images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: 'Char Dham Yatra History' }] },
};

export default function Page() {
  const faqs = [
    { q: 'Who established the Char Dham circuit?', a: 'The four-shrine circuit is traditionally credited to Adi Shankaracharya, the 8th-century philosopher who is said to have revived and organised these temples. The Uttarakhand Char Dham specifically (Yamunotri, Gangotri, Kedarnath, Badrinath) is also called the Chota Char Dham.', plain: 'The circuit is traditionally credited to the 8th-century philosopher Adi Shankaracharya. The Uttarakhand four — Yamunotri, Gangotri, Kedarnath, Badrinath — are called the Chota Char Dham.' },
    { q: 'What is the difference between Char Dham and Chota Char Dham?', a: 'The original Char Dham spans the whole country — Badrinath (north), Dwarka (west), Puri (east) and Rameswaram (south). The Chota Char Dham is the Himalayan set of four in Uttarakhand. In common usage today, "Char Dham Yatra" almost always means the Uttarakhand circuit.', plain: 'The original Char Dham spans the country (Badrinath, Dwarka, Puri, Rameswaram). The Chota Char Dham is the Uttarakhand Himalayan set, which is what most people now mean by Char Dham Yatra.' },
    { q: 'Why is the yatra done in a fixed order?', a: 'Tradition follows a clockwise route from west to east: Yamunotri first, then Gangotri, Kedarnath and finally Badrinath. It mirrors the parikrama (circumambulation) of a sacred space and also happens to match the most sensible road sequence from Haridwar.', plain: 'Tradition runs clockwise west to east — Yamunotri, Gangotri, Kedarnath, Badrinath — mirroring a parikrama and matching the practical road order from Haridwar.' },
    { q: 'What does each dham represent?', a: 'Yamunotri honours the goddess Yamuna, Gangotri the goddess Ganga, Kedarnath is one of the twelve Jyotirlingas of Shiva, and Badrinath is dedicated to Vishnu. Together they hold the source rivers and two of the great deities of the Himalaya.', plain: 'Yamunotri honours Yamuna, Gangotri honours Ganga, Kedarnath is a Jyotirlinga of Shiva, and Badrinath is dedicated to Vishnu.' },
  ];

  return (
    <GuideArticle
      slug="char-dham-yatra-history"
      badge="History & Meaning"
      title="Char Dham Yatra — History & Significance"
      subtitle="Where the circuit came from, what each of the four shrines means, and why pilgrims have walked them in the same order for centuries."
      pills={['🛕 8th-century origins','🌊 Source of Yamuna & Ganga','🔱 Shiva & Vishnu']}
      facts={[['Tradition founder','Adi Shankaracharya'],['Era','8th century CE'],['Shrines','Yamunotri, Gangotri, Kedarnath, Badrinath'],['Also called','Chota Char Dham'],['Order','clockwise W→E'],['Region','Garhwal Himalaya']]}
      ctaIntent="char-dham"
      faqs={faqs}
      related={[['Char Dham Guide','/blog/char-dham-guide'],['Kedarnath Significance','/kedarnath-temple'],['Badrinath Temple','/badrinath-temple'],['Char Dham Packages','/char-dham-yatra'],['Best Time to Visit','/blog/best-time-char-dham']]}
    >
      <P>Most pilgrims arrive knowing the four names but not the thread that ties them together. The Char Dham isn&apos;t four random temples that happen to be in the same hills — it is a deliberate circuit, laid out around the sources of two of India&apos;s holiest rivers and two of its greatest deities. Here is the story, kept to what actually matters when you&apos;re standing in the queue wondering why you came.</P>

      <H2>The bigger Char Dham, and the Himalayan one</H2>
      <P>Strictly speaking, the original Char Dham is national in scale: Badrinath in the north, Dwarka in the west, Puri in the east and Rameswaram in the south, marking the four corners of the subcontinent. The four shrines in Uttarakhand are properly called the <strong>Chota Char Dham</strong> — the &quot;smaller&quot; Char Dham of the Garhwal Himalaya. Over the last century, as the Garhwal roads opened up, &quot;Char Dham Yatra&quot; in everyday speech came to mean this Himalayan set. That&apos;s the circuit we run, and the one this site is about.</P>

      <H2>Adi Shankaracharya and the revival</H2>
      <P>The circuit is traditionally credited to Adi Shankaracharya, the philosopher-monk of the 8th century who travelled the length of India consolidating temples and orders of monastics. He is associated with re-establishing Badrinath and Kedarnath in their present form. Whatever the precise history — and parts of it are devotional rather than documented — the effect was lasting: four scattered mountain shrines became a single pilgrimage with a recognised order and meaning.</P>

      <H2>What each dham actually honours</H2>
      <UL items={[
        'Yamunotri — the seat of the goddess Yamuna and the symbolic source of the Yamuna river. Pilgrims cook rice in the hot Surya Kund spring and offer it as prasad.',
        'Gangotri — dedicated to the goddess Ganga. The true glacial source, Gaumukh, lies a further trek beyond the temple at Bhojbasa.',
        'Kedarnath — one of the twelve Jyotirlingas, the primordial pillars of light of Shiva, and the highest of them at 3,583m.',
        'Badrinath — the abode of Vishnu as Badri Narayan, and the one shrine that belongs to both the national and the Himalayan Char Dham.',
      ]} />

      <H2>Why the order is fixed</H2>
      <P>Tradition runs the yatra clockwise from west to east — Yamunotri, then Gangotri, then Kedarnath, finishing at Badrinath. Devotionally it mirrors a parikrama, the circumambulation you&apos;d do around any sacred object. Practically, it&apos;s also the cleanest road sequence out of Haridwar, which is why even people who don&apos;t care about the symbolism end up following it. Finishing at Badrinath, the most accessible of the four by road, is a gentle way to end a hard trip.</P>

      <H2>Why it still pulls people up the mountain</H2>
      <P>You can read all of this and still not understand the yatra until you&apos;re doing it. What I&apos;ve watched, year after year, is that the history stops being a fact and becomes a feeling somewhere around the Kedarnath trek — when the temple finally appears against the peak after a hard climb, and a busload of strangers who were complaining about the cold an hour earlier go completely quiet. The circuit was designed to be earned, and it still is.</P>

      <P>If you want the practical side — dates, costs, fitness, what to pack — our <a href="/blog/char-dham-guide" style={{ color:'var(--teal)', fontWeight:600, textDecoration:'none' }}>complete Char Dham guide</a> covers the planning, and we&apos;re always happy to talk through your specific trip on WhatsApp.</P>
    </GuideArticle>
  );
}
