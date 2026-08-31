import Link from 'next/link';
import { SITE } from '@/data/packages';
import { SEASON, SEATS, seatList } from '@/data/winterSeats';
import {
  Hero, Crumbs, Article, Updated, H2, P, LI, Table, Note,
  FAQBlock, Sources, CTA, Related, buildSchema, SchemaBlocks,
} from '@/components/LocalPageKit';
import AnswerBox from '@/components/AnswerBox';

export const metadata = {
  title: { absolute: `Winter Char Dham Yatra ${SITE.season}–27 — The Four Winter Seats` },
  description: 'The dhams close in November but the deities do not stop. Worship moves to Ukhimath, Joshimath, Mukhba and Kharsali — open roads, no crowds.',
  keywords: ['winter char dham yatra','char dham in winter',`winter char dham ${SITE.season}`,'shitkalin char dham','winter abode char dham','char dham winter seats','ukhimath joshimath mukhba kharsali','char dham after closing'],
  alternates: { canonical: `${SITE.baseUrl}/winter-char-dham-yatra` },
  openGraph: {
    title: 'Winter Char Dham Yatra — The Four Winter Seats',
    description: 'When the dhams close, the deities move down. Ukhimath, Joshimath, Mukhba and Kharsali — open roads, empty temples.',
    url: `${SITE.baseUrl}/winter-char-dham-yatra`,
    type: 'article',
    images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: 'Winter Char Dham Yatra — the four winter seats of Uttarakhand' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Winter Char Dham Yatra — The Four Winter Seats',
    description: 'When the dhams close, the deities move down. Open roads, empty temples.',
    images: [{ url: '/opengraph-image', alt: 'Winter Char Dham Yatra | Shiv Ganga Travels' }],
  },
};

const FAQS = [
  { q:'Can you do the Char Dham Yatra in winter?',
    a:'Not the high shrines — Kedarnath, Badrinath, Gangotri and Yamunotri all close in November and stay shut until late April. But the deities do not stop being worshipped. Each one is carried down to a winter seat in a lower village where the same priests continue the same daily rituals for six months. Visiting those four villages is the Winter Char Dham Yatra, and it is a genuine pilgrimage rather than a consolation prize.' },
  { q:'Where do the four deities go in winter?',
    a:'Kedarnath goes to the Omkareshwar Temple at Ukhimath. Badrinath goes to the Narsingh Temple at Joshimath, with Uddhav and Kubera to Pandukeshwar. Ganga goes from Gangotri down to Mukhba near Harsil. Yamuna goes from Yamunotri to Kharsali, opposite Janki Chatti. All four are road-accessible villages at between 1,300 and 2,700 metres, rather than the 3,000-plus of the summer shrines.' },
  { q:'When exactly do the dhams close in 2026?',
    a:'Gangotri closes on 10 November 2026 on Diwali, Kedarnath and Yamunotri on 11 November on Bhai Dooj, and Badrinath on 13 November. The winter seats begin receiving pilgrims within days of those dates and continue until the doors reopen in late April or early May 2027. Our closing-dates guide has the ceremony details for each shrine.' },
  { q:'Is the winter yatra actually worth doing?',
    a:'It depends what you want. If you want the photograph of Kedarnath temple against the peaks, no — go in September. If you want to stand in front of the same deity with nobody else in the room, be recognised by the priest because you are the only visitor that morning, and drive roads that are empty rather than jammed, then yes, and it is not close. The winter seats receive a tiny fraction of the summer footfall.' },
  { q:'Are the roads open in winter?',
    a:'Mostly, with real caveats. Ukhimath and Joshimath are on main highways and are reliably reachable all winter. Mukhba in the Harsil valley and Kharsali above Barkot are higher and genuinely snow-affected in January and February — the last stretch to either can close for days at a time. This is the part where you should call and ask rather than trust a website, including this one.' },
  { q:'How cold does it get?',
    a:'Ukhimath and Joshimath sit around 1,300 to 1,900 metres and are cold but manageable — think single digits by day, near or below freezing at night. Mukhba and Kharsali at roughly 2,600 to 2,700 metres are properly cold, with sub-zero nights through January and February and snow on the ground. Pack as you would for a Himalayan winter, not for a hill station.' },
  { q:'How many days does the Winter Char Dham take?',
    a:'Seven to nine days from Haridwar covers all four seats without rushing, because the Harsil and Yamuna valleys are in the opposite direction from Ukhimath and Joshimath. If you only have three or four days, do Ukhimath and Joshimath together — they are the accessible pair and they hold Kedarnath and Badrinath between them.' },
  { q:'Is the government promoting this?',
    a:'Yes. Uttarakhand has been actively developing the winter yatra as a way of extending the tourist season and supporting hill villages that earn nothing for six months of the year. That is a good thing for the villages, and it does mean the winter seats are becoming better known — the emptiness described on this page is a current condition, not a permanent one.' },
];

export default function WinterCharDhamYatra() {
  const blocks = buildSchema({
    slug:'winter-char-dham-yatra',
    name:'Winter Char Dham Yatra',
    description:'Guide to the four winter seats of the Char Dham — Ukhimath, Joshimath, Mukhba and Kharsali — where the deities are worshipped from November to April while the high shrines are closed.',
    types:null,
    faqs:FAQS,
    crumbs:[['Char Dham Yatra','/char-dham-yatra'],['Winter Char Dham Yatra','/winter-char-dham-yatra']],
  });

  return (
    <>
      <SchemaBlocks blocks={blocks}/>

      <Hero eyebrow={`Nov ${SEASON.year} – Apr 2027 · The four winter seats`} title="Winter Char Dham Yatra">
        The doors close in November. <strong style={{ color:'#FFD166' }}>The deities do not stop.</strong>{' '}
        Worship moves down to Ukhimath, Joshimath, Mukhba and Kharsali — open roads, lower altitude,
        and almost nobody there.
      </Hero>

      <Crumbs trail={[['Char Dham Yatra','/char-dham-yatra'],['Winter Char Dham Yatra', null]]}/>

      <Article>
        <Updated/>


        <AnswerBox>
          <strong>The Char Dham shrines are closed in winter — but the deities are not out of reach.</strong> From November to April each one moves to a winter seat where worship continues daily: Ganga at Mukhba, Yamuna at Kharsali, Kedarnath at Ukhimath and Badrinath at Pandukeshwar and Joshimath. All four are motorable, far quieter than the summer circuit, and set against snow. This is the version of the yatra almost nobody does.
        </AnswerBox>
        <P>
          Most people believe the Char Dham simply shuts for six months. It does not. When Kedarnath,
          Badrinath, Gangotri and Yamunotri close in November, each deity is carried down in procession
          to a winter seat in a lower village, where the same priests perform the same daily rituals
          until the doors reopen in {SEASON.reopens}. Those four villages — Ukhimath, Joshimath, Mukhba
          and Kharsali — are the Winter Char Dham, and visiting them is a complete yatra in its own
          right.
        </P>

        <Note tone="good" title="The honest case for going in winter">
          You will not get the postcard. Kedarnath temple against the snow peaks is a summer photograph
          and no winter itinerary can give it to you. What you get instead is the same deity, the same
          rawal, the same rituals — with nobody queueing behind you. In June you shuffle past Kedarnath in
          nine seconds. In January at Ukhimath you can sit down.
        </Note>

        <H2>Where Each Deity Spends the Winter</H2>
        <Table
          head={['Summer shrine','Closes','Winter seat','Altitude','From Haridwar']}
          rows={seatList().map(s => [
            s.seatOf,
            SEASON.closing[s.seatOf.toLowerCase()].date.replace(' 2026',''),
            <Link key={s.slug} href={`/${s.slug}`} style={{ color:'var(--teal)', fontWeight:600 }}>{s.name}</Link>,
            s.altitude,
            s.fromHaridwar,
          ])}
        />
        <P>
          Note the altitudes. The summer shrines sit between 3,000 and 3,600 metres and two of them need
          a trek. The winter seats are between roughly 1,300 and 2,700 metres and every one has a road to
          it. For anyone who cannot manage the Kedarnath trek — which is a great many pilgrims — the
          winter yatra is not a lesser option. It is the accessible one.
        </P>

        <H2>The Four Seats</H2>
        {seatList().map(s => (
          <div key={s.slug} style={{ background:'#fff', border:'1px solid hsl(var(--border))', borderRadius:12, padding:'17px 19px', marginBottom:14 }}>
            <div style={{ display:'flex', justifyContent:'space-between', gap:12, flexWrap:'wrap', marginBottom:9 }}>
              <Link href={`/${s.slug}`} style={{ fontWeight:700, fontSize:16, color:'var(--navy)', textDecoration:'none' }}>
                {s.name} →
              </Link>
              <span style={{ background:'var(--navy-light)', color:'var(--navy)', fontSize:11, fontWeight:700, padding:'3px 11px', borderRadius:100, alignSelf:'flex-start' }}>
                Winter seat of {s.seatOf}
              </span>
            </div>
            <p style={{ fontSize:14.5, color:'var(--text-mid)', lineHeight:1.8, marginBottom:9 }}>{s.why}</p>
            <div style={{ fontSize:13, color:'var(--text-muted)', lineHeight:1.7 }}>
              <strong>Access:</strong> {s.access}
            </div>
          </div>
        ))}

        <H2>A 9-Day Winter Circuit from Haridwar</H2>
        <Table
          head={['Day','Route','Night']}
          rows={[
            ['1','Haridwar → Barkot','Barkot'],
            ['2','Barkot → Kharsali (Yamuna) → Barkot','Barkot'],
            ['3','Barkot → Uttarkashi → Harsil','Harsil'],
            ['4','Mukhba (Ganga), Harsil valley','Harsil'],
            ['5','Harsil → Uttarkashi → Srinagar','Srinagar'],
            ['6','Srinagar → Ukhimath (Kedarnath)','Ukhimath'],
            ['7','Ukhimath → Chopta → Joshimath','Joshimath'],
            ['8','Narsingh Temple, Joshimath → Pandukeshwar → Auli','Joshimath'],
            ['9','Joshimath → Haridwar','—'],
          ]}
        />
        <P>
          The reason this takes nine days rather than five is geography, not padding. Kharsali and Mukhba
          are in the western valleys; Ukhimath and Joshimath are in the eastern ones. There is no short
          road between them and in winter you do not want to be hunting for one.
        </P>
        <Note tone="warn" title="The short version, if you have four days">
          Do Ukhimath and Joshimath. They hold Kedarnath and Badrinath, they are on main highways, and
          they are reliably open all winter. Add{' '}
          <Link href="/chopta-tungnath" style={{ color:'#9A3412', fontWeight:700 }}>Chopta</Link>{' '}
          in the snow between them and it is one of the best short trips in Garhwal. Leave Mukhba and
          Kharsali for a longer visit or a milder month.
        </Note>

        <H2>What Winter Actually Demands</H2>
        <ul style={{ paddingLeft:20, marginBottom:14 }}>
          <LI><strong style={{ color:'var(--navy)' }}>Proper cold-weather clothing.</strong> Layers,
          a real jacket, gloves, wool cap, and footwear with grip. Mukhba and Kharsali are sub-zero at
          night through January and February.</LI>
          <LI><strong style={{ color:'var(--navy)' }}>Flexibility on the itinerary.</strong> A snow day
          closes a road. Build in a spare day rather than booking a flight home for the evening you
          return.</LI>
          <LI><strong style={{ color:'var(--navy)' }}>Modest expectations of accommodation.</strong>
          These are villages. Homestays and small guesthouses, wood heating, hot water in buckets. Clean
          and warm, not luxurious.</LI>
          <LI><strong style={{ color:'var(--navy)' }}>Short daylight.</strong> Dark by 5:30 PM in
          December. Mountain driving after dark is something we do not do, so days start early.</LI>
          <LI><strong style={{ color:'var(--navy)' }}>A phone call before you commit.</strong> Winter
          road status changes weekly. Ask us what the Harsil road is doing before you book anything.</LI>
        </ul>

        <H2>Frequently Asked Questions</H2>
        <FAQBlock faqs={FAQS}/>

        <Sources items={[
          ['Uttarakhand Tourism Development Board','https://uttarakhandtourism.gov.in/'],
          ['Shri Badarinath Kedarnath Temple Committee','https://badrinath-kedarnath.gov.in/'],
          ['Uttarakhand State Disaster Management Authority — road and weather advisories','https://usdma.uk.gov.in/'],
        ]}/>

        <CTA
          title="Plan a winter yatra"
          blurb="We run the winter seats from Haridwar and we will tell you honestly what the roads are doing that week. Four days or nine, your call."
          waMessage="Namaste! I want to do the Winter Char Dham Yatra to the winter seats. Please share the itinerary and cost."
        />

        <Related links={[
          ['Omkareshwar Ukhimath','/ukhimath'],
          ['Narsingh Temple Joshimath','/joshimath-narsingh-temple'],
          ['Mukhba, Gangotri Winter Seat','/mukhba-gangotri-winter-seat'],
          ['Kharsali, Yamunotri Winter Seat','/kharsali-yamunotri-winter-seat'],
          ['Kedarnath Doli Yatra','/kedarnath-doli-yatra'],
          ['Char Dham Closing Dates 2026','/blog/char-dham-yatra-closing-dates-2026'],
          ['Char Dham Yatra','/char-dham-yatra'],
          ['Chopta Tungnath','/chopta-tungnath'],
        ]}/>
      </Article>
    </>
  );
}
