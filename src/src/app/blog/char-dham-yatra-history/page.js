import Link from 'next/link';
import { SITE } from '@/data/packages';
import BlogCTA from '@/components/BlogCTA';
import BlogAuthor from '@/components/BlogAuthor';

export const metadata = {
  title: 'Char Dham Yatra History — Adi Shankaracharya, Ancient Texts & the Sacred Circuit',
  description: 'The complete history of Char Dham Yatra — from the Vedic origins of the four shrines to Adi Shankaracharya establishing the pilgrimage circuit in the 8th century, and its revival in the modern era.',
  keywords: ['char dham yatra history','char dham history','adi shankaracharya char dham','kedarnath history','badrinath history','gangotri history','yamunotri history','char dham significance','why char dham yatra','char dham ancient history'],
  alternates: { canonical: `${SITE.baseUrl}/blog/char-dham-yatra-history` },
  openGraph: {
    title: 'Char Dham Yatra History — From the Vedas to the Modern Pilgrimage',
    description: 'Adi Shankaracharya unified the four sacred Himalayan shrines into a single pilgrimage circuit in the 8th century. Here is the full story.',
    url: `${SITE.baseUrl}/blog/char-dham-yatra-history`,
    type: 'article',
    images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: 'Char Dham Yatra History | Shiv Ganga Travels' }],
  },
  twitter: { card: 'summary_large_image', title: 'Char Dham Yatra History', description: 'The 1,200-year story of India\'s most sacred pilgrimage circuit.' },
};

const faqData = [
  { q: 'Who established the Char Dham Yatra?', a: 'Adi Shankaracharya, the 8th-century philosopher-saint from Kerala, is credited with consolidating the Char Dham Yatra circuit. He identified four cardinal shrines — one at each corner of India (Badrinath in the north, Puri in the east, Rameshwaram in the south, Dwarka in the west) — and two of the Himalayan Char Dham (Kedarnath and Badrinath) are among the most prominent in his northern circuit.' },
  { q: 'How old is the Kedarnath Temple?', a: 'The current stone structure at Kedarnath is attributed to Adi Shankaracharya (8th century CE), who is said to have renovated an existing shrine. However, references to Kedarnath as a sacred site appear in the Mahabharata and Skanda Purana, suggesting the site\'s sanctity predates the current temple by well over a millennium. The temple survived the 2013 Kedarnath floods remarkably intact — a fact many devotees consider miraculous.' },
  { q: 'Why are the four Himalayan Dhams called "Char Dham"?', a: 'The Himalayan Char Dham — Yamunotri, Gangotri, Kedarnath and Badrinath — are sometimes called "Chota Char Dham" (small Char Dham) to distinguish them from the four corner Dhams of India. However, for most north Indian pilgrims, "Char Dham" refers to the Himalayan circuit in Uttarakhand. The four sites are the sources or presences of India\'s four most sacred rivers and deities: Yamuna, Ganga, Shiva and Vishnu.' },
  { q: 'What does completing Char Dham Yatra mean spiritually?', a: 'The traditional belief is that completing the Char Dham Yatra washes away the accumulated sins of lifetimes and grants the pilgrim moksha (liberation from the cycle of rebirth). In practice, for most pilgrims we have spoken with, the journey is as meaningful as the destination — the mountains, the physical challenge, the shared devotion, the simplicity of life on the road. Many people describe the Yatra as a reset — a return to what genuinely matters.' },
];

function Schema() {
  const article = {
    '@context': 'https://schema.org', '@type': 'BlogPosting',
    headline: 'Char Dham Yatra History — Adi Shankaracharya, Ancient Texts & the Sacred Circuit',
    author: { '@type': 'Person', name: 'Sumit Mishra', url: `${SITE.baseUrl}/about` },
    publisher: { '@type': 'Organization', name: SITE.name, url: SITE.baseUrl },
    datePublished: '2026-02-05', dateModified: '2026-05-01',
    mainEntityOfPage: `${SITE.baseUrl}/blog/char-dham-yatra-history`,
    image: '/opengraph-image',
  };
  const faq = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqData.map(f => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) };
  return (<><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(article) }}/><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faq) }}/></>);
}

const h2 = { fontFamily:'var(--font-display)', fontSize:'clamp(1.3rem,2.5vw,1.75rem)', fontWeight:600, color:'var(--navy)', letterSpacing:'-0.02em', marginBottom:12, marginTop:36 };
const p  = { fontSize:15.5, color:'#334155', lineHeight:1.85, marginBottom:16 };

export default function Page() {
  return (
    <main style={{ background:'var(--bg)', minHeight:'100vh' }}>
      <Schema/>
      <div style={{ maxWidth:820, margin:'0 auto', padding:'clamp(24px,5vw,60px) clamp(16px,4vw,24px)' }}>
        <nav style={{ fontSize:13, color:'var(--text-muted)', marginBottom:20 }}>
          <Link href="/" style={{ color:'var(--gold)', textDecoration:'none' }}>Home</Link> {' → '}
          <Link href="/blog" style={{ color:'var(--gold)', textDecoration:'none' }}>Blog</Link> {' → Char Dham History'}
        </nav>

        <div style={{ marginBottom:32 }}>
          <span style={{ background:'rgba(232,146,10,0.15)', color:'var(--gold)', fontSize:12, fontWeight:700, letterSpacing:'0.12em', textTransform:'uppercase', padding:'4px 14px', borderRadius:100, display:'inline-block', marginBottom:14 }}>History &amp; Significance</span>
          <h1 style={{ fontFamily:'var(--font-display)', fontSize:'clamp(1.75rem,4vw,2.5rem)', fontWeight:700, color:'var(--navy)', lineHeight:1.2, letterSpacing:'-0.02em', marginBottom:16 }}>
            Char Dham Yatra History — From the Vedas to Adi Shankaracharya to the Pilgrimage You Take Today
          </h1>
          <p style={{ ...p, fontSize:17, color:'#475569', marginBottom:0 }}>
            The temples at Kedarnath, Badrinath, Gangotri and Yamunotri are not just old — they are ancient in a way that India alone can produce. Their stories are written in the Mahabharata, the Puranas and the hymns of Adi Shankaracharya. Understanding even a little of this history changes how you experience the Yatra. This is that story.
          </p>
        </div>

        <BlogAuthor/>

        <h2 style={h2}>Before the Circuit — The Vedic Roots</h2>
        <p style={p}>Long before Adi Shankaracharya arrived in the Himalayas in the 8th century CE, these four sites were already considered sacred. References to Badrikashrama (Badrinath) appear in the Mahabharata — the Pandavas are said to have passed through the valley on their final journey. Kedarnath is described in the Shiva Purana. The Ganga is the most celebrated river in all of Hindu scripture, and its source at Gangotri was revered accordingly. These were not unknown places waiting to be discovered — they were already holy ground when Shankaracharya walked into the mountains.</p>

        <h2 style={h2}>Adi Shankaracharya — The Man Who Built the Circuit</h2>
        <p style={p}>In the 8th century CE, the philosopher-saint Adi Shankaracharya undertook what remains one of the most extraordinary journeys in Indian religious history. Born in Kerala, he walked the length and breadth of India, debating with scholars of every tradition, composing commentaries on the Upanishads, the Bhagavad Gita and the Brahma Sutras, and — most visibly — establishing four maths (monasteries) at the four corners of India to anchor the spiritual geography of the subcontinent.</p>
        <p style={p}>In the Himalayas, he renovated the temple at Kedarnath (where he is said to have attained mahasamadhi, his conscious death, at the age of 32) and established the Jyotir Math at Joshimath near Badrinath. He composed the Badari-stotra. His presence at these sites transformed them from places of local sanctity into nodes in a pan-Indian spiritual network. When he connected them into a circuit — the Himalayan Char Dham — he gave pilgrims from across India a reason to make the journey north.</p>

        <h2 style={h2}>The Story of Each Temple</h2>
        <h2 style={{ ...h2, fontSize:'clamp(1.1rem,2vw,1.3rem)', marginTop:20 }}>Kedarnath — Where Shiva Hid from the Pandavas</h2>
        <p style={p}>The Mahabharata tells us that after the Kurukshetra war, the Pandavas sought Shiva's blessing to wash away the sin of killing their kin. Shiva, wishing to avoid them, took the form of a bull and hid in the Kedarnath valley. When Bhima recognised him, Shiva plunged into the earth. The hump that remained above ground became the sacred Jyotirlinga at Kedarnath. The rest of his body is said to be distributed across the five Kedar shrines (Panch Kedar) in the surrounding hills.</p>
        <h2 style={{ ...h2, fontSize:'clamp(1.1rem,2vw,1.3rem)', marginTop:20 }}>Badrinath — Where Vishnu Meditated</h2>
        <p style={p}>Badrinath's name comes from Badri — the wild berry (jujube) — that Parvati is said to have gathered to feed Vishnu while he meditated here in the form of a child under a Badri tree. The Tapta Kund (hot spring) below the temple is said to be heated by Vishnu's presence. The Bhagavata Purana and Skanda Purana both reference this location as Badrikashrama, the hermitage of Vishnu.</p>
        <h2 style={{ ...h2, fontSize:'clamp(1.1rem,2vw,1.3rem)', marginTop:20 }}>Gangotri — The Descent of the Ganga</h2>
        <p style={p}>The story of the Ganga's descent from heaven is told in the Ramayana and the Puranas. King Bhagirath performed a thousand years of penance to bring the sacred river down to earth to release his ancestors' souls. Shiva allowed the Ganga to fall on his head first, to break its force, and the river descended through his matted locks. The glacier at Gomukh, 18km above Gangotri, is the physical source of the river. Gangotri temple marks the spot where Bhagirath is said to have meditated.</p>
        <h2 style={{ ...h2, fontSize:'clamp(1.1rem,2vw,1.3rem)', marginTop:20 }}>Yamunotri — The Source of the Yamuna</h2>
        <p style={p}>Yamunotri is the source of the Yamuna, second only to the Ganga in Hindu tradition. The present temple was built by Maharani Gularia of Jaipur in the 19th century, though the site's sanctity is much older. Surya (the Sun God) is said to reside at Yamunotri, and the natural hot springs here — heated by geothermal activity to near-boiling point — are attributed to his presence. Pilgrims traditionally cook rice and potatoes in the hot spring and offer them at the temple.</p>

        <h2 style={h2}>The Modern Yatra — What Has Changed and What Has Not</h2>
        <p style={p}>Roads, registered operators, online darshan slots, GMVN guesthouses — the infrastructure of the Char Dham Yatra has transformed in the last thirty years. When our founder began operating in 2010, the Kedarnath route was entirely on foot from Gaurikund, and the journey could take twelve to fourteen days. Today, the helicopter to Kedarnath takes thirty minutes and a circuit of all four Dhams is achievable in nine days. What has not changed is the mountains, the cold, the altitude, and the feeling — reported by pilgrims from every background — that the Himalayas are not merely scenic but alive with something that resists easy description.</p>

        <h2 style={h2}>Frequently Asked Questions</h2>
        {faqData.map(f => (
          <div key={f.q} style={{ marginBottom:20, padding:'18px 20px', background:'#f8fafc', borderRadius:'var(--r)', borderLeft:'3px solid var(--gold)' }}>
            <p style={{ fontWeight:700, color:'var(--navy)', fontSize:15, marginBottom:6 }}>{f.q}</p>
            <p style={{ ...p, marginBottom:0 }}>{f.a}</p>
          </div>
        ))}

        <BlogCTA/>

        <div style={{ marginTop:40, padding:'20px 24px', background:'rgba(15,43,91,0.04)', borderRadius:'var(--r)', borderLeft:'3px solid var(--navy)' }}>
          <p style={{ ...p, marginBottom:8, fontWeight:600 }}>Related Reading</p>
          <div style={{ display:'flex', flexWrap:'wrap', gap:12 }}>
            {[['Char Dham Significance','/blog/char-dham-yatra-significance'],['Char Dham Complete Guide','/blog/char-dham-yatra-complete-guide'],['Kedarnath Temple','/kedarnath-temple'],['Badrinath Temple','/badrinath-temple']].map(([t,h]) => (
              <Link key={h} href={h} style={{ fontSize:13.5, color:'var(--gold)', textDecoration:'none', fontWeight:600, background:'rgba(232,146,10,0.1)', padding:'6px 14px', borderRadius:8 }}>{t} →</Link>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
