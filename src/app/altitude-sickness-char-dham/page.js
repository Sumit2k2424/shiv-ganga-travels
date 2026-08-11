import Link from 'next/link';
import { SITE } from '@/data/packages';
import {
  Hero, Crumbs, Article, Updated, H2, P, LI, Table, Note,
  FAQBlock, Sources, CTA, Related, buildSchema, SchemaBlocks,
} from '@/components/LocalPageKit';

export const metadata = {
  title: { absolute: 'Altitude Sickness on Char Dham Yatra — Prevention Guide' },
  description: 'Kedarnath is 3,583 m and Gangotri 3,415 m. What AMS actually feels like, who is at risk, how to acclimatise, and the one rule that matters: go down.',
  keywords: ['altitude sickness char dham','ams kedarnath','altitude sickness kedarnath','char dham altitude','acclimatization char dham yatra','kedarnath oxygen level','altitude sickness symptoms yatra','char dham high altitude'],
  alternates: { canonical: `${SITE.baseUrl}/altitude-sickness-char-dham` },
  openGraph: {
    title: 'Altitude Sickness on Char Dham Yatra — Prevention Guide',
    description: 'What AMS feels like, who is at risk, how to acclimatise, and when to turn back.',
    url: `${SITE.baseUrl}/altitude-sickness-char-dham`, type: 'article',
    images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: 'Altitude sickness prevention on the Char Dham Yatra' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Altitude Sickness on Char Dham Yatra — Prevention Guide',
    description: 'What AMS feels like, who is at risk, and when to turn back.',
    images: [{ url: '/opengraph-image', alt: 'Altitude Sickness on Char Dham' }],
  },
};

const FAQS = [
  { q:'How high are the four dhams?',
    a:'Kedarnath is the highest at 3,583 m, then Gangotri at 3,415 m, Yamunotri at 3,291 m and Badrinath at 3,133 m. All four sit above 3,000 m, which is the threshold where acute mountain sickness becomes a genuine possibility for anyone regardless of fitness. Gaurikund, where the Kedarnath trek starts, is 1,982 m — so that trek gains roughly 1,600 m in 16 km.' },
  { q:'What does altitude sickness actually feel like?',
    a:'It usually starts as a headache that paracetamol does not fully shift, along with nausea, loss of appetite, unusual tiredness and difficulty sleeping. People commonly mistake it for exhaustion or a bad meal. The distinguishing feature is that it appears within 6 to 24 hours of gaining height and does not improve with rest at the same altitude. If it worsens — confusion, breathlessness at rest, an unsteady walk, a cough that will not settle — that is serious and the person needs to descend immediately.' },
  { q:'Does being fit protect you?',
    a:'No, and this is the most persistent misunderstanding we encounter. Altitude tolerance has almost nothing to do with cardiovascular fitness. We have seen marathon runners in their thirties struggle at Kedarnath while seventy-year-olds walk up comfortably. Fit young men are arguably at higher risk in practice, because they push on through early symptoms rather than stopping.' },
  { q:'How do I acclimatise properly?',
    a:'Gain height gradually and sleep low. A night at Guptkashi (1,319 m) or Sonprayag before the Kedarnath trek makes a real difference compared with driving up from the plains and climbing the next morning. Drink far more water than feels necessary, eat lightly, avoid alcohol entirely, and do not attempt the trek on the same day you completed a long drive. The traditional 9 to 12 day Char Dham itinerary is paced the way it is for exactly this reason.' },
  { q:'Should I take medication for altitude?',
    a:'That is a question for your doctor, not for a travel operator, and we will not recommend a drug or a dose. What we will say is that if you intend to take anything preventively, get the prescription and advice before you leave home rather than buying something at a chemist in Rudraprayag. Tell us about any medication you are on when you book, because some interact badly with altitude.' },
  { q:'Is there oxygen available on the route?',
    a:'We carry an oxygen cylinder and a first-aid kit in every vehicle, and there are medical posts along the Kedarnath trek and at the temple. Oxygen relieves symptoms temporarily; it is not a treatment. The only reliable treatment for altitude sickness is losing height. If someone needs oxygen to keep going up, they should be going down instead.' },
  { q:'Who should not attempt Kedarnath?',
    a:'Anyone with unstable heart disease, significant respiratory illness, uncontrolled blood pressure or recent surgery should discuss the trek with their doctor before booking, and in some cases should not attempt it. The Uttarakhand authorities may require a medical certificate or health screening for some pilgrims. If you tell us the medical picture honestly at booking, we can plan around it — pony, palki, helicopter, or a base at Guptkashi while the rest of the family goes up.' },
  { q:'What if someone in my group gets sick on the trek?',
    a:'Stop climbing. Do not let them push on to "just reach the temple". Descend even a few hundred metres and most mild cases improve markedly within hours. There are medical posts along the route and at Kedarnath itself. Our drivers know where they are and stay reachable. Coming down is not a failed yatra — it is the correct decision, and every year some families learn that too late.' },
];

export default function AltitudeSickness() {
  const blocks = buildSchema({
    slug:'altitude-sickness-char-dham',
    name:'Altitude Sickness on the Char Dham Yatra',
    description:'Guide to acute mountain sickness on the Char Dham Yatra — the altitude of each dham, symptoms, who is at risk, acclimatisation and when to descend.',
    types:null, faqs:FAQS,
    crumbs:[['Char Dham Yatra','/char-dham-yatra'],['Altitude Sickness','/altitude-sickness-char-dham']],
  });

  return (
    <>
      <SchemaBlocks blocks={blocks}/>

      <Hero eyebrow="Health · All four dhams above 3,000 m" title="Altitude Sickness on the Char Dham Yatra">
        Fitness does not protect you. <strong style={{ color:'#FFD166' }}>Height gained per day does.</strong>{' '}
        What AMS feels like, who is at risk, and the one rule that always works — go down.
      </Hero>

      <Crumbs trail={[['Char Dham Yatra','/char-dham-yatra'],['Altitude Sickness', null]]}/>

      <Article>
        <Updated/>

        <Note tone="alert" title="This is general information, not medical advice">
          We run vehicles and arrange yatras; we are not doctors. Everything below is what sixteen
          seasons on these routes has taught us about how altitude affects pilgrims, and it is meant to
          help you ask your doctor better questions before you travel. If you have a heart, lung or blood
          pressure condition, that conversation should happen before you book.
        </Note>

        <P>
          Every one of the four dhams sits above 3,000 metres, which is the height at which acute
          mountain sickness stops being a mountaineering concern and becomes an ordinary pilgrim's
          concern. Most people are fine. A meaningful minority are not, and the ones who get into
          trouble are rarely the ones who expected to.
        </P>

        <H2>How High Each Dham Is</H2>
        <Table
          head={['Dham','Altitude','Approach','Altitude risk']}
          rows={[
            ['Kedarnath', '3,583 m', '16 km trek from Gaurikund (1,982 m)', 'Highest — gains 1,600 m on foot'],
            ['Gangotri', '3,415 m', 'Road to the temple', 'High, but you arrive by vehicle'],
            ['Yamunotri', '3,291 m', '6 km steep trek from Janki Chatti', 'Moderate — short but sharp'],
            ['Badrinath', '3,133 m', 'Road to the temple', 'Lowest of the four'],
          ]}
        />
        <P>
          Note the pattern most pilgrims miss: Gangotri is higher than Yamunotri and second only to
          Kedarnath, yet requires no walking at all. People assume the trek is the risk. The altitude is
          the risk. You can arrive at 3,415 m in a comfortable car and still feel it that evening.
        </P>

        <H2>What to Watch For</H2>
        <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fill,minmax(250px,1fr))', gap:12, marginBottom:14 }}>
          {[
            ['🟡 Mild — common, manageable','Headache, nausea, poor appetite, broken sleep, feeling more tired than the effort explains. Rest at the same height, drink water, do not go higher until it clears.'],
            ['🔴 Serious — descend now','Breathlessness while sitting still, confusion or odd behaviour, unsteady walking, a persistent wet cough, blue lips. These are not "push through" symptoms. Lose height immediately and get medical help.'],
          ].map(([t,d])=>(
            <div key={t} style={{ background:'#fff', border:'1px solid var(--border)', borderRadius:11, padding:'15px 17px' }}>
              <div style={{ fontWeight:700, fontSize:14.5, color:'var(--navy)', marginBottom:7 }}>{t}</div>
              <div style={{ fontSize:14, color:'var(--text-mid)', lineHeight:1.75 }}>{d}</div>
            </div>
          ))}
        </div>
        <Note tone="warn" title="The mistake that causes the most trouble">
          Treating a symptom as exhaustion. A pilgrim who has driven ten hours and climbed six kilometres
          has every reason to feel awful, so a genuine altitude headache gets dismissed as tiredness and
          the person keeps climbing. The test is simple: exhaustion improves with rest at the same
          height. Altitude sickness does not.
        </Note>

        <H2>What Actually Helps</H2>
        <ul style={{ paddingLeft:20, marginBottom:14 }}>
          <LI><strong style={{ color:'var(--navy)' }}>Sleep low before you climb.</strong> A night at
          Guptkashi at 1,319 m before the Kedarnath trek is worth more than any amount of preparation at
          home. This is why our itineraries put a halt there rather than pushing to Sonprayag.</LI>
          <LI><strong style={{ color:'var(--navy)' }}>Do not drive and climb on the same day.</strong>
          The Delhi arrivals who trek the morning after a fourteen-hour drive are the group we see
          struggle most.</LI>
          <LI><strong style={{ color:'var(--navy)' }}>Water, more than feels sensible.</strong> Dehydration
          mimics and worsens AMS, and cold weather suppresses thirst.</LI>
          <LI><strong style={{ color:'var(--navy)' }}>Eat light, especially high up.</strong> Heavy meals
          at Kedarnath and Badrinath cause more trouble than people expect. See our{' '}
          <Link href="/char-dham-yatra-food-guide" style={{ color:'var(--teal)', fontWeight:600 }}>food guide</Link>.</LI>
          <LI><strong style={{ color:'var(--navy)' }}>No alcohol.</strong> It is banned at the dhams
          anyway, and it makes altitude worse.</LI>
          <LI><strong style={{ color:'var(--navy)' }}>Use the pony or palki without shame.</strong> Arriving
          rested matters more than arriving on foot. Rates on our{' '}
          <Link href="/kedarnath-pony-palki-kandi-rates" style={{ color:'var(--teal)', fontWeight:600 }}>pony and palki page</Link>.</LI>
        </ul>

        <H2>If You Cannot Go High</H2>
        <P>
          Some pilgrims should not attempt 3,583 m, and that is not the end of the yatra. Badrinath and
          Gangotri both have roads to the temple. And from November the deities move down to their winter
          seats — Kedarnath to Ukhimath at 1,311 m, Badrinath to Joshimath at 1,875 m — where the same
          priests perform the same rituals at half the altitude and none of the walking.
        </P>
        <P>
          For anyone whose doctor has advised against high altitude, our{' '}
          <Link href="/winter-char-dham-yatra" style={{ color:'var(--teal)', fontWeight:600 }}>winter Char Dham circuit</Link>{' '}
          is a serious option rather than a consolation prize, and our{' '}
          <Link href="/blog/senior-citizen-char-dham" style={{ color:'var(--teal)', fontWeight:600 }}>senior citizen guide</Link>{' '}
          covers the slower-paced road version.
        </P>

        <H2>Frequently Asked Questions</H2>
        <FAQBlock faqs={FAQS}/>

        <Sources items={[
          ['Uttarakhand Health Department — yatra health advisories','https://health.uk.gov.in/'],
          ['Char Dham Yatra registration and health screening','https://registrationandtouristcare.uk.gov.in/'],
          ['Uttarakhand State Disaster Management Authority','https://usdma.uk.gov.in/'],
        ]}/>

        <CTA
          title="Tell us the medical picture before you book"
          blurb="Heart conditions, breathing trouble, recent surgery, age. We plan around it — and if we think someone should not attempt Kedarnath, we will say so."
          waMessage="Namaste! I want to discuss altitude and health concerns for our Char Dham Yatra before booking."
        />

        <Related links={[
          ['Senior Citizen Char Dham','/blog/senior-citizen-char-dham'],
          ['Char Dham for Heart Patients','/blog/char-dham-yatra-for-heart-patients'],
          ['Pony & Palki Rates','/kedarnath-pony-palki-kandi-rates'],
          ['Winter Char Dham Yatra','/winter-char-dham-yatra'],
          ['Food on the Yatra','/char-dham-yatra-food-guide'],
          ['Mobile Network Coverage','/char-dham-yatra-mobile-network'],
          ['Emergency Contacts','/char-dham-yatra-emergency-contacts'],
        ]}/>
      </Article>
    </>
  );
}
