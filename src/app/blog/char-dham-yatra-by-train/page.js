import GuideArticle, { H2, P, UL, Callout } from '@/components/GuideArticle';
import { SITE } from '@/data/packages';

export const metadata = {
  title: 'Char Dham Yatra by Train: Stations & Best Routes',
  description: 'Char Dham Yatra by train in 2026: nearest stations (Haridwar, Rishikesh, Dehradun), best trains from Delhi, Mumbai and Kolkata, plus IRCTC booking tips.',
  keywords: ['char dham yatra by train','nearest railway station to char dham','haridwar railway station char dham','train to char dham yatra','how to reach haridwar by train','char dham yatra train package 2026'],
  alternates: { canonical: `${SITE.baseUrl}/blog/char-dham-yatra-by-train` },
  openGraph: { title: 'Char Dham Yatra by Train 2026 — Nearest Stations & Routes', description: 'Nearest railheads, best trains from major cities, IRCTC tips, and how the yatra starts once you reach Haridwar.', url: `${SITE.baseUrl}/blog/char-dham-yatra-by-train`, type: 'article', images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: 'Char Dham Yatra by Train 2026 | Shiv Ganga Travels' }] },
};

export default function Page() {
  const faqs = [
    { q: 'Which is the nearest railway station for Char Dham Yatra?', a: 'Haridwar Junction (station code HW) is the main railhead for Char Dham Yatra and where most pilgrims begin the road journey. Rishikesh (RKSH/Yog Nagari Rishikesh) and Dehradun (DDN) are the other two options. From any of these, the road yatra to Yamunotri, Gangotri, Kedarnath and Badrinath begins by vehicle.', plain: 'Haridwar Junction (HW) is the nearest and most-used railhead. Rishikesh and Dehradun are the other two options, and the road yatra begins from any of them.' },
    { q: 'How do I reach Haridwar by train from Delhi?', a: 'Delhi to Haridwar takes roughly 4.5 to 6 hours. Fast options include the Shatabdi and Jan Shatabdi, plus several daily trains like the Mussoorie Express and Nanda Devi AC Express. Book the morning departures so you reach Haridwar with daylight to spare before starting the yatra the next morning.', plain: 'Delhi to Haridwar is about 4.5 to 6 hours, with fast Shatabdi and Jan Shatabdi services and several daily trains. Morning departures are best.' },
    { q: 'Can I do Char Dham Yatra entirely by train?', a: 'No — the four shrines are in the high Himalaya and have no rail connectivity. The railway only takes you as far as Haridwar, Rishikesh or Dehradun. From there the yatra is entirely by road (and on foot at Yamunotri and Kedarnath). The train is how you reach the starting point, not the shrines themselves.', plain: 'No. Trains only reach Haridwar, Rishikesh or Dehradun. From there the yatra is by road and on foot — there is no rail line to the shrines.' },
    { q: 'Does Shiv Ganga Travels arrange the yatra after I arrive by train?', a: 'Yes. We pick you up from Haridwar railway station and the package covers everything from there — vehicle, hotels, registration, darshan and the return drop back to the station. You only need to book your own train tickets to and from Haridwar; we handle the rest of the journey.', plain: 'Yes — we pick you up from Haridwar station and the package covers vehicle, hotels, registration and darshan, with a drop back to the station. You only book your own train tickets.' },
    { q: 'How early should I book train tickets for the yatra season?', a: 'Book 60 to 120 days in advance. The yatra season (late April to June, then September to October) coincides with heavy demand on Haridwar-bound trains, and confirmed berths disappear quickly. IRCTC opens reservations 60 days ahead for most trains; set a reminder and book the moment the window opens.', plain: 'Book 60 to 120 days ahead. Yatra season demand on Haridwar trains is heavy and confirmed berths go fast. IRCTC opens 60 days before departure.' },
  ];

  return (
    <GuideArticle
      slug="char-dham-yatra-by-train"
      badge="Travel Logistics"
      title="Char Dham Yatra by Train — How to Reach Haridwar in 2026"
      subtitle="There's no railway to the shrines themselves — but the train is how most of our pilgrims arrive. Here's the honest, practical guide to the nearest stations, the best trains from your city, and what happens once you step onto the platform at Haridwar."
      pills={['🚂 Nearest railhead: Haridwar','🛕 Yatra starts by road','🎫 Book 60–120 days ahead']}
      facts={[['Main railhead','Haridwar Jn (HW)'],['Alternatives','Rishikesh, Dehradun'],['Delhi → Haridwar','4.5–6 hrs'],['Booking','IRCTC, 60 days prior'],['Season','Apr–Jun, Sep–Oct'],['Yatra to shrines','By road only']]}
      ctaIntent="char-dham"
      faqs={faqs}
      related={[['Char Dham from Delhi','/char-dham-yatra-from-delhi'],['How to Reach Haridwar','/how-to-reach-haridwar'],['Delhi to Haridwar Cab','/delhi-to-haridwar-cab'],['Char Dham Packages','/char-dham-yatra'],['Best Time to Visit','/blog/best-time-char-dham']]}
    >
      <P>Almost every week someone asks us some version of &quot;can I do the Char Dham Yatra by train?&quot; The short, honest answer is that the train gets you to the doorstep, not into the house. The four shrines sit deep in the Garhwal Himalaya, far above any rail line — so the journey to the temples themselves is always by road, and at Yamunotri and Kedarnath, on foot. What the train does, and does very well, is carry you affordably and comfortably to the point where the yatra actually begins. For most pilgrims, that point is Haridwar.</P>

      <H2>The three railheads — and which one to pick</H2>
      <P>There are three usable stations within reach of the yatra route, and the right one depends on where your train actually runs and where your package starts.</P>
      <UL items={[
        'Haridwar Junction (HW) — the main railhead and the one we recommend. It is the most connected of the three, sits right on the holy Ganga, and is where our packages begin. If your train stops here, get off here.',
        'Rishikesh / Yog Nagari Rishikesh (RKSH) — about 25km from Haridwar. The newer Yog Nagari Rishikesh station has growing connectivity. Convenient if your package or hotel is in Rishikesh.',
        'Dehradun (DDN) — the terminus for many long-distance trains. About 50km from Haridwar. Useful as a fallback when Haridwar berths are sold out, since you can drive down from here.',
      ]} />
      <Callout>If you can only get a confirmed ticket to Dehradun, take it — it is a short, easy drive back to Haridwar, and we can arrange the pickup from Dehradun station instead. A confirmed Dehradun berth beats a waitlisted Haridwar one every time.</Callout>

      <H2>Best trains from major cities</H2>
      <P>These are the routes our pilgrims use most. Train numbers and timings change every season, so always confirm the live schedule on IRCTC before booking — but the pattern below holds year to year.</P>
      <UL items={[
        'From Delhi — the easiest leg by far. The Shatabdi and Jan Shatabdi are the fast picks at roughly 4.5–6 hours, and there are several daily trains including the Mussoorie Express and the Nanda Devi AC Express. A morning departure lands you in Haridwar with the afternoon free to settle.',
        'From Mumbai — expect around 26–28 hours. Look at trains running via the Dehradun route; many terminate at Dehradun rather than Haridwar, so check the stop list carefully.',
        'From Kolkata / Howrah — roughly 30+ hours on services like the Doon Express and Upasana Express, both of which run through to Dehradun via Haridwar.',
        'From Ahmedabad & the west — connections typically route through Delhi; the cleanest plan is often a train to Delhi, then a fast Shatabdi onward to Haridwar.',
        'From the south (Bengaluru, Chennai, Hyderabad) — there is no convenient single train. Most southern pilgrims fly to Delhi or Dehradun and pick up the road journey from there; a few take a long train to Delhi and switch.',
      ]} />

      <H2>Booking tips that actually save the trip</H2>
      <P>The yatra season is also peak season on these routes, and we have seen too many families nearly miss their booked package because they left train tickets to the last week. A few rules we give everyone:</P>
      <UL items={[
        'Book 60–120 days out. IRCTC opens reservations 60 days before departure for most trains; the good berths on Haridwar-bound trains vanish within days during season.',
        'Avoid arriving the same morning the yatra starts. Reach Haridwar at least the evening before. Trains run late on this route during monsoon-adjacent months, and you do not want a delayed train to cost you the first day.',
        'Prefer AC classes for the overnight long-haulers — you will be starting a physically demanding pilgrimage, and arriving rested matters more than saving a few hundred rupees.',
        'Keep your ID and the same name as on the ticket — it doubles as one of the documents you will need for yatra registration anyway.',
      ]} />

      <H2>What happens after you reach Haridwar</H2>
      <P>This is the part people worry about most and it is genuinely the simplest. When you book a package with us, we are at Haridwar railway station to receive you. From that moment the road journey is ours to run — the vehicle, the hotels, the mandatory yatra registration, the darshan arrangements, and the drop back to the station at the end. You step off the train as a passenger and step into the yatra as a pilgrim; the logistics in between are handled.</P>
      <P>So the practical division is clean: you book your train to and from Haridwar, and we take care of everything from the platform onward. If you would like, we can also tell you which arrival day fits best with the season&apos;s opening dates and your chosen package length — just message us your city and travel dates.</P>

      <P>For city-specific planning, our <a href="/char-dham-yatra-from-delhi" style={{ color:'var(--teal)', fontWeight:600, textDecoration:'none' }}>Char Dham from Delhi</a> guide and the <a href="/how-to-reach-haridwar" style={{ color:'var(--teal)', fontWeight:600, textDecoration:'none' }}>how to reach Haridwar</a> page go into road and air options too, so you can compare before you commit to the train.</P>
    </GuideArticle>
  );
}
