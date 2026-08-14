import Link from 'next/link';
import { SITE } from '@/data/packages';
import BlogCTA from '@/components/BlogCTA';
import BlogAuthor from '@/components/BlogAuthor';
import BlogHero from '@/components/BlogHero';
import ReadingProgress from '@/components/ReadingProgress';
import BlogTOC from '@/components/BlogTOC';
import { h2, p } from "@/lib/prose";

export const metadata = {
  title: { absolute: `Char Dham Yatra History & Spiritual Significance ${SITE.season}` },
  description: `Char Dham Yatra ${SITE.season} — history & spiritual significance of the 4 dhams. Trusted operator, 15+ yrs experience, instant confirmation.`,
  // Absorbed /blog/char-dham-yatra-history (Aug 2026) — its keyword set is
  // folded in here so the merged page covers both the "history/origins" and
  // "significance/meaning" intents that used to be split across two URLs.
  keywords: ['char dham yatra history', 'char dham yatra significance', 'why char dham yatra is important', 'char dham yatra mythology', 'adi shankaracharya char dham', 'char dham yatra spiritual meaning', 'importance of char dham yatra', 'why char dham yatra', 'chota char dham meaning', 'who established char dham', 'char dham yatra origin'],
  alternates: { canonical: `${SITE.baseUrl}/blog/char-dham-yatra-significance` },
  openGraph: {
    title: 'Char Dham Yatra: History & Spiritual Significance',
    description: 'Complete history of Char Dham Yatra: Adi Shankaracharya\'s 8th-century vision, mythology of all 4 dhams, spiritual significance, and why completing this yatra is considered a path to moksha.',
    url: `${SITE.baseUrl}/blog/char-dham-yatra-significance`, type: 'article',
    images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: 'Char Dham Yatra History & Significance — Adi Shankaracharya, Mythology | Shiv Ganga Travels' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Char Dham Yatra History & Significance — Why It Is the Most Important ',
    description: 'Complete history of Char Dham Yatra: Adi Shankaracharya',
    images: [{ url: '/opengraph-image', alt: 'Char Dham Yatra History & Significance — Why It Is the Most  | Shiv Ganga Travels' }],
  },
};

// Carried over from the retired /blog/char-dham-yatra-history, which owned the
// origin-story questions. Keeping the FAQPage markup means the merge doesn't
// cost the rich-result eligibility that page already had.
const FAQS = [
  { q: 'Who established the Char Dham circuit?', a: 'The four-shrine circuit is traditionally credited to Adi Shankaracharya, the 8th-century philosopher who is said to have revived and organised these temples. The Uttarakhand Char Dham specifically (Yamunotri, Gangotri, Kedarnath, Badrinath) is also called the Chota Char Dham.' },
  { q: 'What is the difference between Char Dham and Chota Char Dham?', a: 'The original Char Dham spans the whole country — Badrinath (north), Dwarka (west), Puri (east) and Rameswaram (south). The Chota Char Dham is the Himalayan set of four in Uttarakhand. In common usage today, "Char Dham Yatra" almost always means the Uttarakhand circuit.' },
  { q: 'Why is the yatra done in a fixed order?', a: 'Tradition follows a clockwise route from west to east: Yamunotri first, then Gangotri, Kedarnath and finally Badrinath. It mirrors the parikrama (circumambulation) of a sacred space and also happens to match the most sensible road sequence from Haridwar.' },
  { q: 'What does each dham represent?', a: 'Yamunotri honours the goddess Yamuna, Gangotri the goddess Ganga, Kedarnath is one of the twelve Jyotirlingas of Shiva, and Badrinath is dedicated to Vishnu. Together they hold the source rivers and two of the great deities of the Himalaya.' },
];

function Schema() {
  const bc = {
    '@context': 'https://schema.org', '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: SITE.baseUrl },
      { '@type': 'ListItem', position: 2, name: 'Blog', item: `${SITE.baseUrl}/blog` },
      { '@type': 'ListItem', position: 3, name: 'Char Dham Yatra History & Significance', item: `${SITE.baseUrl}/blog/char-dham-yatra-significance` },
    ],
  };
  const faq = {
    '@context': 'https://schema.org', '@type': 'FAQPage',
    mainEntity: FAQS.map(f => ({
      '@type': 'Question', name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(bc) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faq) }} />
    </>
  );
}



export default function Significance() {
  return (
    <>
      <Schema />
      <ReadingProgress/>

      <BlogHero
        badge="History · Mythology · Significance"
        title="Char Dham Yatra — History, Mythology & Significance"
        dek="Where the circuit came from, why Adi Shankaracharya established it in the 8th century, the mythology behind all four dhams, why pilgrims have walked them in the same order for centuries, and what makes completing the yatra spiritually significant."
        author="Dhanesh Chandra Mishra"
        updated={`Updated ${SITE.lastUpdated}`}
        readTime="10 min read"
        facts={[
          { label:'Founder', value:'Adi Shankaracharya' },
          { label:'Era',     value:'8th century CE' },
          { label:'Deities', value:'Yamuna · Ganga · Shiva · Vishnu' },
          { label:'Also called', value:'Chota Char Dham' },
        ]}
      />

      <nav style={{ background: 'var(--bg)', borderBottom: '1px solid hsl(var(--border))', padding: '9px 20px' }}>
        <div style={{ maxWidth: 'var(--container)', margin: '0 auto', fontSize: 12, color: 'var(--text-muted)', display: 'flex', gap: 6 }}>
          <Link href="/" style={{ color:'var(--teal)', textDecoration:'none' }}>Home</Link><span>›</span>
          <Link href="/blog" style={{ color:'var(--teal)', textDecoration:'none' }}>Blog</Link><span>›</span>
          <span>Char Dham History & Significance</span>
        </div>
      </nav>

      <article className="blog-container" itemScope itemType="https://schema.org/Article">

        {/* Author byline — E-E-A-T signal */}
        <BlogAuthor variant="top" author="dhanesh" article={{"slug": "char-dham-yatra-significance", "title": "Char Dham Yatra: History & Spiritual Significance", "description": "Why Adi Shankaracharya established the Char Dham Yatra in the 8th century — the mythology of all 4 dhams and what moksha means for pilgrims.", "datePublished": "2025-08-15", "dateModified": "2026-06-20", "lang": "en-IN"}} />
        <div style={{ fontSize: 12, color: 'var(--text-muted)', marginBottom: 20, textAlign: 'right' }}>🗓️ <strong>Last updated:</strong> {SITE.lastUpdated}</div>

        <BlogTOC items={[
          { id:'what-is',       label:'What is Char Dham Yatra?' },
          { id:'shankaracharya', label:'Adi Shankaracharya' },
          { id:'mythology',     label:'Mythology of each dham' },
          { id:'fixed-order',   label:'Why the order is fixed' },
          { id:'why-special',   label:'Why completing it is special' },
          { id:'chota-vs',      label:'Chota Char Dham vs Char Dham' },
          { id:'why-it-pulls',  label:'Why it still pulls people' },
          { id:'faqs',          label:'Frequently asked questions' },
        ]}/>

        <h2 id="what-is" style={h2}>What Is Char Dham Yatra?</h2>
        <p style={p}>
          Char Dham Yatra (literally "pilgrimage to the four abodes") refers to the circuit of four sacred Himalayan shrines in Uttarakhand: Yamunotri (source of the Yamuna), Gangotri (source of the Ganga), Kedarnath (Shiva Jyotirlinga), and Badrinath (Vishnu kshetra). The four shrines sit between 3,048m (Gangotri) and 3,583m (Kedarnath), in the Garhwal Himalaya, and are collectively known as the Chota Char Dham — distinct from the pan-India Char Dham (Badrinath, Dwarka, Puri, Rameswaram) established by the same saint.
        </p>
        <p style={p}>
          The yatra follows a fixed clockwise sequence — Yamunotri, Gangotri, Kedarnath, Badrinath — running west to east across the Garhwal Himalaya. That order is not arbitrary, and it is worth understanding before you book; there is a section on it below. Completing all four in sequence is considered one of the most complete acts of Hindu devotion.
        </p>

        <h2 id="shankaracharya" style={h2}>Adi Shankaracharya — The Architect of Char Dham</h2>
        <p style={p}>
          The formal establishment of the Char Dham Yatra circuit is attributed to Adi Shankaracharya (788–820 CE), the 8th-century Hindu philosopher, theologian, and reformer from Kerala who walked the length of India multiple times in his 32-year life. Shankaracharya's contribution to Hinduism was a systematic consolidation of scattered belief systems, sacred sites, and philosophical schools that were fragmenting under centuries of divergent regional traditions.
        </p>
        <p style={p}>
          His specific goal at the Himalayan shrines was dual: first, to physically restore the temples and establish proper puja traditions where they had fallen into disrepair. At Kedarnath, Shankaracharya reportedly found the temple in ruins and personally supervised its reconstruction. At Badrinath, he is credited with establishing the Nambudiri Brahmin priest tradition from Kerala that continues to this day — the head priest (Rawal) of Badrinath is always a Nambudiri from Kerala, 1,500km from the temple. Second, Shankaracharya established monastic centres (mathas) near each dham to train priests and maintain the traditions across centuries. His matha at Joshimath, 46km from Badrinath, still operates.
        </p>
        <div style={{ background: 'rgba(232,146,10,0.07)', border: '1px solid rgba(232,146,10,0.2)', borderRadius: 12, padding: '14px 16px', marginBottom: 24, fontSize: 13.5, color: '#7B3F00' }}>
          <strong>Notable fact:</strong> Adi Shankaracharya died at Kedarnath at age 32. His Samadhi (memorial) is located directly behind the temple, just steps from the main sanctum. Most pilgrims who rush through for darshan never see it — it takes 5 minutes to walk to. This is one of the most compelling reasons to stay overnight at Kedarnath.
        </div>

        <h2 id="mythology" style={h2}>The Mythology of Each Dham</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 14, marginBottom: 28 }}>
          {[
            {
              name: '🌊 Yamunotri — The Source of Yamuna',
              deity: 'Goddess Yamuna',
              alt: '3,291m',
              myth: 'Yamuna is the daughter of Surya (the sun god) and the twin sister of Yama (the god of death). The belief is that bathing in the Yamuna at its source absolves the devotee of a fearful death — since Yamuna\'s brother Yama cannot claim those who have bathed in his sister\'s sacred waters at the source. The Surya Kund hot spring at Yamunotri (47°C) is believed to be directly heated by Surya, the sun god. Pilgrims traditionally cook rice and potatoes in the hot spring as prasad — an act that connects the mundane (cooking food) with the divine (Surya\'s thermal energy).',
              shankaracharya: 'Shankaracharya established the idol of Goddess Yamuna at this shrine and set up the worship protocols. The current temple was built in the 19th century by Maharani Guleria of Jaipur.',
            },
            {
              name: '🌿 Gangotri — The Source of the Ganga',
              deity: 'Goddess Ganga',
              alt: '3,048m',
              myth: 'King Bhagirath performed 1,000 years of penance to bring the Ganga down from heaven to earth — to purify the ashes of his 60,000 ancestors (the Sagara princes, burned by the sage Kapila\'s wrath). The problem was that the force of Ganga\'s descent from heaven would destroy the earth. Bhagirath prayed to Lord Shiva, who agreed to catch the Ganga in his matted hair (jata), breaking the fall. The Ganga then flowed from Shiva\'s locks to earth, purifying as it went. The spot where Bhagirath performed his penance is at the Bhagirathi Shila (Bhagirath\'s rock) at Gangotri. The river is called Bhagirathi from its source at Gangotri until it merges with the Alaknanda at Devprayag, where it becomes the Ganga.',
              shankaracharya: 'Shankaracharya re-established worship at Gangotri and the current temple tradition. The present temple was built in the 18th century by the Gurkha commander Amar Singh Thapa.',
            },
            {
              name: '🏔️ Kedarnath — The Jyotirlinga of Shiva',
              deity: 'Lord Shiva (as Sadashiva)',
              alt: '3,583m',
              myth: 'After the Mahabharata war, the Pandavas were tormented by the sin of having killed their own kin (gotra-hatya). They sought Shiva\'s blessing and forgiveness. Shiva, not wishing to grant them easily, disguised himself as a bull (Nandi) and hid in the Garhwal mountains. Bhima, the second Pandava, recognised the divine bull and grabbed its hump as it dived into the earth to escape. The hump emerged from the ground at Kedarnath — and this is the Shivling in the temple, in the shape of a bull\'s hump (trapezoidal, not the standard cylindrical form). The remaining body parts emerged at four other locations — the five Panch Kedar shrines.',
              shankaracharya: 'Shankaracharya rebuilt the Kedarnath temple (which the Pandavas had originally built) and died there. His samadhi behind the temple is among the most significant sacred memorials in India.',
            },
            {
              name: '🕌 Badrinath — The Abode of Vishnu',
              deity: 'Lord Vishnu (as Badrinarayan)',
              alt: '3,133m',
              myth: 'Badrinath is described in the Skanda Purana as the direct Vishnu kshetra — Vishnu\'s residence. The legend holds that Vishnu came to this location and meditated here while Lakshmi (his consort) took the form of a badri (berry) tree to protect him from sun and rain. The name Badrinath means "Lord of the Badri berries." The Narad Kund (hot spring at the base of the temple) is where the sage Narada is said to have found the original self-manifested Vishnu idol (shaligram) underwater — the same idol that is worshipped in the temple today.',
              shankaracharya: 'Shankaracharya reportedly retrieved the idol of Badrinarayan from the Narad Kund (where it had been placed during Buddhist ascendancy) and re-installed it in the temple. The Kerala Nambudiri priest tradition he established continues today.',
            },
          ].map(dham => (
            <div key={dham.name} style={{ background: '#fff', borderRadius: 12, padding: '18px 20px', border: '1px solid hsl(var(--border))' }}>
              <div style={{ display: 'flex', gap: 10, alignItems: 'center', marginBottom: 10, flexWrap: 'wrap' }}>
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.05rem', fontWeight: 700, color: 'var(--navy)', margin: 0 }}>{dham.name}</h3>
                <span style={{ fontSize: 11, background: 'var(--bg)', color: 'var(--teal)', padding: '2px 9px', borderRadius: 20, fontWeight: 700 }}>{dham.deity}</span>
                <span style={{ fontSize: 11, color: '#7C3AED', fontWeight: 600 }}>↑ {dham.alt}</span>
              </div>

              <p style={{ fontSize: 13.5, color: '#475569', lineHeight: 1.75, marginBottom: 10 }}>{dham.myth}</p>
              <div style={{ background: 'rgba(11,123,139,0.06)', borderRadius: 8, padding: '9px 12px', fontSize: 13, color: '#0D5C70' }}>
                <strong>Shankaracharya connection:</strong> {dham.shankaracharya}
              </div>
            </div>
          ))}
        </div>

        {/* ── Mid-article conversion CTA ── */}
        <BlogCTA variant="inline" intent="info" />

        <h2 id="fixed-order" style={h2}>Why the Order Is Fixed</h2>
        <p style={p}>
          Tradition runs the yatra clockwise from west to east — Yamunotri, then Gangotri, then Kedarnath, finishing at Badrinath. Devotionally it mirrors a parikrama, the circumambulation you would perform around any sacred object. Practically, it is also the cleanest road sequence out of Haridwar, which is why even pilgrims who care nothing for the symbolism end up following it.
        </p>
        <p style={p}>
          The sequence carries its own logic beyond the map. It moves from purification (Yamunotri, the water of the Yamuna) through sanctification (Gangotri, the Ganga) to liberation (Kedarnath, Shiva&apos;s grace) and final blessing (Badrinath, Vishnu&apos;s abode). Finishing at Badrinath, the most accessible of the four by road, is also a gentle way to end a physically hard trip.
        </p>

        <h2 id="why-special" style={h2}>Why Completing Char Dham Yatra Is Considered Special</h2>
        <p style={p}>
          Hindu scripture (specifically the Skanda Purana and Padma Purana) describes the Char Dham circuit as a path to moksha — liberation from the cycle of birth and death. The theological logic is specific rather than general: each dham addresses a different dimension of spiritual purification. Yamunotri cleanses fear of death. Gangotri purifies ancestral karma. Kedarnath grants Shiva's grace for sins of action. Badrinath completes the journey with Vishnu's blessing for final liberation. Together, they are understood as a complete circuit of spiritual completion.
        </p>
        <p style={p}>
          Beyond scripture, the practical reality of Char Dham Yatra in the Hindu tradition is that completing all four in one lifetime is considered a significant spiritual accomplishment — not because of any mechanical formula but because the effort involved (the 16km Kedarnath trek, the 6km Yamunotri trek, the mountain roads, the altitude, the physical demand) is understood as a form of tapas (austerity). The yatra is difficult enough that completing it is understood as an act of will and devotion, not merely a tourist trip.
        </p>

        <h2 id="chota-vs" style={h2}>Chota Char Dham vs Char Dham — The Important Distinction</h2>
        <p style={p}>
          The Uttarakhand circuit (Yamunotri, Gangotri, Kedarnath, Badrinath) is technically called <strong>Chota Char Dham</strong> (the small Char Dham). The larger <strong>Char Dham</strong> established by Adi Shankaracharya to represent all four cardinal directions of India consists of: Badrinath (north), Dwarka in Gujarat (west), Puri in Odisha (east), and Rameswaram in Tamil Nadu (south). In common modern usage, however, "Char Dham Yatra" almost universally refers to the Uttarakhand circuit — the distinction matters mainly in religious scholarship, not in pilgrimage planning.
        </p>

        <h2 id="why-it-pulls" style={h2}>Why It Still Pulls People Up the Mountain</h2>
        <p style={p}>
          You can read all of this and still not understand the yatra until you are doing it. What I have watched, year after year, is that the history stops being a fact and becomes a feeling somewhere around the Kedarnath trek — when the temple finally appears against the peak after a hard climb, and a busload of strangers who were complaining about the cold an hour earlier go completely quiet. The circuit was designed to be earned, and it still is.
        </p>
        <p style={p}>
          If you want the practical side — dates, costs, fitness, what to pack — our <Link href="/blog/char-dham-guide" style={{ color:'var(--teal)', fontWeight:600, textDecoration:'none' }}>complete Char Dham guide</Link> covers the planning, and we are always happy to talk through your specific trip on WhatsApp.
        </p>

        <h2 id="faqs" style={h2}>Frequently Asked Questions</h2>
        <div style={{ display:'flex', flexDirection:'column', gap:10, marginBottom:28 }}>
          {FAQS.map(f => (
            <details key={f.q} style={{ background:'#fff', border:'1px solid hsl(var(--border))', borderRadius:12, padding:'14px 18px' }}>
              <summary style={{ fontWeight:700, fontSize:14.5, color:'var(--navy)', cursor:'pointer' }}>{f.q}</summary>
              <p style={{ fontSize:13.5, color:'#475569', lineHeight:1.75, margin:'10px 0 0' }}>{f.a}</p>
            </details>
          ))}
        </div>

        <div style={{ borderTop: '1px solid hsl(var(--border))', paddingTop: 24, marginTop: 32 }}>
          <div style={{ fontWeight: 700, fontSize: 13, color: 'var(--navy)', marginBottom: 10 }}>Related guides</div>
          <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
            {[['Char Dham Package 2026', '/char-dham-yatra'], ['Char Dham Guide', '/blog/char-dham-guide'], ['Route Map', '/char-dham-yatra-route-map'], ['Registration Guide', '/blog/char-dham-yatra-registration'], ['Best Time to Visit', '/blog/best-time-char-dham'], ['Cost Breakdown', '/blog/char-dham-yatra-cost'], ['Kedarnath Temple', '/kedarnath-temple'], ['Badrinath Temple', '/badrinath-temple']].map(([l, h]) => (
              <Link key={h} href={h} style={{ background: 'var(--bg)', border: '1px solid hsl(var(--border))', color: 'var(--navy)', padding: '6px 12px', borderRadius: 7, fontSize: 12.5, fontWeight: 600, textDecoration: 'none' }}>{l} →</Link>
            ))}
          </div>
        </div>
      
        {/* ── End-of-article booking CTA ── */}
        <BlogCTA variant="footer" intent="info" />
</article>
    </>
  );
}
