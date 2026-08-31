import Link from 'next/link';
import { SITE } from '@/data/packages';
import {
  Hero, Crumbs, Article, Updated, H2, P, LI, Table, Note,
  FAQBlock, Sources, CTA, Related, buildSchema, SchemaBlocks,
} from '@/components/LocalPageKit';
import AnswerBox from '@/components/AnswerBox';

export const metadata = {
  title: { absolute: 'Food on Char Dham Yatra — What to Expect & Eat' },
  description: 'Pure vegetarian throughout and simpler the higher you go. What is available at each stop, Jain options, and why to eat light above 3,000 m.',
  keywords: ['food on char dham yatra','char dham yatra food','jain food char dham','vegetarian food kedarnath','what to eat char dham','char dham yatra meals','food at badrinath kedarnath'],
  alternates: { canonical: `${SITE.baseUrl}/char-dham-yatra-food-guide` },
  openGraph: {
    title: 'Food on Char Dham Yatra — What to Expect & Eat',
    description: 'Pure vegetarian throughout and simpler the higher you go. What is available, and what to avoid.',
    url: `${SITE.baseUrl}/char-dham-yatra-food-guide`, type: 'article',
    images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: 'Food and meals on the Char Dham Yatra' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Food on Char Dham Yatra — What to Expect & Eat',
    description: 'Pure vegetarian throughout and simpler the higher you go.',
    images: [{ url: '/opengraph-image', alt: 'Char Dham Yatra Food Guide' }],
  },
};

const FAQS = [
  { q:'Is non-vegetarian food available on the Char Dham Yatra?',
    a:'No, and you should not go looking. The entire pilgrimage corridor is a pure vegetarian zone by custom and in places by local regulation — no meat, no eggs in most kitchens, and no alcohol. This is not a restriction imposed on tourists; it is how the region operates during the yatra. Every hotel and dhaba on the route serves satvik vegetarian food and that is the whole menu.' },
  { q:'Can I get Jain food?',
    a:'Yes, with notice. Jain cooking without onion and garlic is well understood along this route because a significant share of pilgrims request it, but the kitchens are small and they cook to a plan. Tell us at booking rather than at the table — a hotel at Guptkashi cooking for forty people cannot improvise a separate Jain thali at 9 PM. Given a day of notice it is straightforward.' },
  { q:'What food is actually available at Kedarnath?',
    a:'Simple and limited. Rice, dal, roti, a vegetable, khichdi, Maggi, tea. There are langars and small stalls along the trek and at the temple area, several run free by charitable trusts. Nothing elaborate reaches 3,583 m because everything is carried up by pony or porter. Eat before you climb, carry dry snacks, and treat what is available at the top as sustenance rather than a meal.' },
  { q:'Is the food safe to eat?',
    a:'Broadly yes at hotels and established dhabas, with sensible caution. Eat hot food that has been cooked to order rather than anything sitting out, be wary of cut fruit and salads, and stick to bottled or boiled water. The most common complaint we hear is not food poisoning but overeating — heavy meals at altitude cause more misery on this route than bad hygiene does.' },
  { q:'Why does everyone say to eat light at the dhams?',
    a:'Because digestion is harder at altitude and a full stomach makes altitude symptoms considerably worse. A heavy paratha breakfast at Kedarnath is a common prelude to nausea that gets blamed on the food when it is really the height. Eat properly at the lower halts — Guptkashi, Barkot, Uttarkashi — and lightly at anything above 3,000 m.' },
  { q:'Should I carry my own food?',
    a:'Carry dry snacks, not meals. Nuts, dried fruit, glucose biscuits, chocolate, electrolyte sachets. They cover the gap on trek days when the next meal is four hours away and the stall you counted on has run out. Full packed meals are not worth the weight, particularly on the Kedarnath trek where every kilogram matters.' },
  { q:'What is included in your packages?',
    a:'Daily vegetarian breakfast and dinner at the hotels, with Jain options on request. Lunch is generally not included because the group is on the road at midday and stops where it makes sense — that keeps the itinerary flexible rather than tying you to a fixed lunch stop. Tea and snacks along the way are your own.' },
  { q:'Is drinking water available, or should I buy bottles?',
    a:'Both work. Sealed bottled water is available everywhere on the route including at Kedarnath, though it costs several times more at the top than at Haridwar. Many pilgrims carry a bottle and refill from hotel filters at the halts, which is cheaper and produces less plastic on a route that already has a waste problem. Do not drink untreated stream water however clean it looks.' },
];

export default function FoodGuide() {
  const blocks = buildSchema({
    slug:'char-dham-yatra-food-guide',
    name:'Food on the Char Dham Yatra',
    description:'What food is available along the Char Dham Yatra route, dietary options including Jain, hygiene and why to eat lightly at altitude.',
    types:null, faqs:FAQS,
    crumbs:[['Char Dham Yatra','/char-dham-yatra'],['Food Guide','/char-dham-yatra-food-guide']],
  });

  return (
    <>
      <SchemaBlocks blocks={blocks}/>

      <Hero eyebrow="Meals · All four dhams" title="Food on the Char Dham Yatra">
        Pure vegetarian throughout, no alcohol, and{' '}
        <strong style={{ color:'#FFD166' }}>simpler the higher you go</strong>. What is actually
        available, what to avoid, and why altitude changes how you should eat.
      </Hero>

      <Crumbs trail={[['Char Dham Yatra','/char-dham-yatra'],['Food Guide', null]]}/>

      <Article>
        <Updated/>


        <AnswerBox>
          <strong>Food on the Char Dham route is simple, vegetarian and almost entirely without onion or garlic near the shrines.</strong> Expect dal, rice, roti, seasonal sabzi and plenty of tea; meat and alcohol are unavailable in the temple towns and prohibited at the shrines. Jain and diabetic requirements are normal here but need telling the operator in advance, because kitchens above Rudraprayag are small. Carry your own snacks for the trek days.
        </AnswerBox>
        <P>
          Food on the Char Dham route is satvik vegetarian from start to finish — no meat, no eggs in
          most kitchens, no alcohol anywhere near the shrines. That is not a rule for visitors, it is how
          the corridor works. What varies is not the type of food but the ambition of it: proper thalis
          at the valley towns, and rice, dal and Maggi at 3,583 m, because everything up there arrived on
          a pony.
        </P>

        <H2>What You Get, Where</H2>
        <Table
          head={['Stop','Altitude','What is available','Quality']}
          rows={[
            ['Haridwar / Rishikesh', '314 m', 'Everything — full thalis, South Indian, street food, cafés', 'Excellent'],
            ['Barkot / Uttarkashi', '1,150–1,220 m', 'Proper hotel thalis, dhabas, fresh vegetables', 'Good'],
            ['Guptkashi', '1,319 m', 'Hotel dining, dal-roti-sabzi, decent variety', 'Good'],
            ['Joshimath', '1,875 m', 'Town food, thalis, some choice', 'Good'],
            ['Janki Chatti / Sonprayag', '1,982–2,650 m', 'Basic dhabas, thali, Maggi, tea', 'Simple'],
            ['Gangotri', '3,415 m', 'Dhabas, thali, khichdi, langars', 'Simple'],
            ['Badrinath', '3,133 m', 'Dhabas and hotel kitchens, prasad from the temple', 'Simple but reliable'],
            ['Kedarnath', '3,583 m', 'Rice, dal, roti, khichdi, Maggi, langars', 'Very basic'],
          ]}
        />
        <P>
          The pattern is worth internalising: eat well at the valley halts, expect little at the top. A
          pilgrim who plans to have a good dinner at Kedarnath will be disappointed; one who ate properly
          at Guptkashi and carried some dry fruit will be fine.
        </P>

        <H2>Eating at Altitude</H2>
        <Note tone="warn" title="The mistake we watch families make every season">
          A big breakfast before the Kedarnath trek feels sensible and is close to the worst thing you
          can do. Digestion competes with everything else your body is dealing with above 3,000 m, and a
          full stomach makes nausea and headache markedly worse. The people who feel wretched at Rambara
          have usually eaten heavily at Gaurikund.
        </Note>
        <ul style={{ paddingLeft:20, marginBottom:14 }}>
          <LI><strong style={{ color:'var(--navy)' }}>Light and frequent beats large and occasional</strong> above 3,000 m.</LI>
          <LI><strong style={{ color:'var(--navy)' }}>Warm over cold.</strong> Khichdi, dal, soup, tea. Your body is already working to stay warm.</LI>
          <LI><strong style={{ color:'var(--navy)' }}>Drink far more than you feel like.</strong> Cold air suppresses thirst and dehydration mimics altitude sickness. See our{' '}
            <Link href="/altitude-sickness-char-dham" style={{ color:'var(--teal)', fontWeight:600 }}>altitude guide</Link>.</LI>
          <LI><strong style={{ color:'var(--navy)' }}>Skip the fried snacks</strong> on trek days, however good the pakoras smell at Gaurikund.</LI>
          <LI><strong style={{ color:'var(--navy)' }}>No alcohol.</strong> Banned at the dhams, and it worsens altitude symptoms sharply.</LI>
        </ul>

        <H2>Dietary Requirements</H2>
        <Table
          head={['Requirement','Availability','What to do']}
          rows={[
            ['Pure vegetarian', 'Universal — it is the only option', 'Nothing. You are already covered.'],
            ['Jain (no onion/garlic)', 'Widely understood, needs notice', 'Tell us at booking, not at the table.'],
            ['Diabetic', 'Manageable at hotels', 'Flag it — we ask kitchens to keep rice and sweets separate.'],
            ['Low salt / low oil', 'Possible at hotels, not at dhabas', 'Tell us. Roadside stops cannot adapt.'],
            ['Gluten-free', 'Difficult — roti and paratha are staples', 'Rice-based meals work. Carry your own alternatives.'],
            ['Vegan', 'Difficult — ghee and dairy are everywhere', 'Possible with notice at hotels; assume dairy at dhabas.'],
          ]}
        />

        <H2>Langars and Temple Prasad</H2>
        <P>
          Free community kitchens run along the Kedarnath trek and near several of the shrines, operated
          by charitable trusts and gurdwaras. The food is simple, hot and given freely, and taking it is
          entirely normal — this is not charity for the poor, it is seva offered to all pilgrims. If you
          eat at a langar, do so respectfully: sit where you are directed, take what you will finish, and
          leave a donation if you can.
        </P>
        <P>
          At Badrinath, temple prasad and the Bal Bhog offering are part of the darshan rather than a
          meal. At Yamunotri, pilgrims cook rice in cloth bundles in the Surya Kund hot spring and carry
          it home as prasad, which is worth doing simply because there is nowhere else you can.
        </P>

        <H2>What to Carry</H2>
        <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fill,minmax(220px,1fr))', gap:12, marginBottom:8 }}>
          {[
            ['🥜 Dry fruit and nuts','Compact, calorie-dense, no spoilage. The single most useful thing in your bag on a trek day.'],
            ['🍫 Chocolate and glucose','Fast energy when the next stall is two hours up the path.'],
            ['🧂 Electrolyte sachets','More useful than plain water at altitude. Cheap and weightless.'],
            ['🍪 Biscuits','Unglamorous and genuinely helpful when nausea makes a proper meal impossible.'],
            ['🧴 Refillable bottle','Cheaper than buying bottled water at Kedarnath prices, and less plastic on a route drowning in it.'],
            ['💊 Your own medication','Nothing on this route can dispense a prescription. Bring what you need for the whole trip.'],
          ].map(([t,d])=>(
            <div key={t} style={{ background:'var(--bg)', border:'1px solid hsl(var(--border))', borderRadius:11, padding:'14px 16px' }}>
              <div style={{ fontWeight:700, fontSize:14, color:'var(--navy)', marginBottom:6 }}>{t}</div>
              <div style={{ fontSize:13.5, color:'var(--text-muted)', lineHeight:1.7 }}>{d}</div>
            </div>
          ))}
        </div>

        <H2>Frequently Asked Questions</H2>
        <FAQBlock faqs={FAQS}/>

        <Sources items={[
          ['Uttarakhand Tourism Development Board','https://uttarakhandtourism.gov.in/'],
          ['Food Safety and Standards Authority of India','https://www.fssai.gov.in/'],
          ['Uttarakhand Health Department','https://health.uk.gov.in/'],
        ]}/>

        <CTA
          title="Tell us your dietary needs at booking"
          blurb="Jain, diabetic, low-salt, or anything else. Hill kitchens cook to a plan and cannot improvise at 9 PM — a day's notice is all it takes."
          waMessage="Namaste! I have dietary requirements for the Char Dham Yatra. Please advise on meal arrangements."
        />

        <Related links={[
          ['Altitude Sickness Guide','/altitude-sickness-char-dham'],
          ['Mobile Network Coverage','/char-dham-yatra-mobile-network'],
          ['Packing List','/blog/char-dham-yatra-packing-list'],
          ['Char Dham Yatra Checklist','/blog/char-dham-yatra-packing-list'],
          ['Senior Citizen Char Dham','/blog/senior-citizen-char-dham'],
          ['Char Dham Hotels','/char-dham-hotels'],
        ]}/>
      </Article>
    </>
  );
}
