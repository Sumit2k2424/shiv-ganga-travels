import Link from 'next/link';
import { SITE, TRUST } from '@/data/packages';
import AnswerBox from '@/components/AnswerBox';
import PeopleAlsoAsk from '@/components/PeopleAlsoAsk';

export const metadata = {
  title: 'Char Dham Yatra Scam 2026 — Spot & Avoid Booking Fraud',
  description: 'Char Dham Yatra scams 2026: fake helicopter, hotel and registration fraud is rising. Spot the red flags and verify any operator in 60 seconds.',
  keywords: [
    'char dham yatra scam', 'char dham yatra booking scam 2026', 'kedarnath helicopter booking scam',
    'chardham hotel booking scam', 'char dham fake website', 'char dham fraud agent',
    'how to avoid char dham scam', 'char dham cyber fraud', 'fake helicopter booking char dham',
  ],
  alternates: { canonical: `${SITE.baseUrl}/char-dham-yatra-scams` },
  openGraph: {
    title: 'Char Dham Yatra Scams 2026 — How to Spot Fake Bookings & Stay Safe',
    description:
      'Fake helicopter, hotel and registration bookings are looting pilgrims. The red flags, the 60-second operator check, the official portals, and what to do if you have already been cheated.',
    url: `${SITE.baseUrl}/char-dham-yatra-scams`,
    type: 'article',
    images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: 'Char Dham Yatra Scam Awareness 2026 — Shiv Ganga Travels' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Char Dham Yatra Scams 2026 — Spot & Avoid Booking Fraud',
    description: 'Fake heli, hotel & registration scams are rising. Red flags, 60-second operator check, official portals, report steps.',
    images: [{ url: '/opengraph-image', alt: 'Char Dham Yatra Scam Awareness 2026' }],
  },
};

const URL = `${SITE.baseUrl}/char-dham-yatra-scams`;

const SCAM_TYPES = [
  { name: 'Fake helicopter booking', how: 'Lookalike of the IRCTC HeliYatra portal, or a "VIP quota" agent on Facebook/WhatsApp. Kedarnath heli tickets sell out fast, so desperation is the bait.', tell: 'Anyone selling Kedarnath heli tickets outside heliyatra.irctc.co.in is fake. There is no offline or agent quota.' },
  { name: 'Fake hotel booking', how: 'A "Badrinath/Kedarnath hotel" site or agent takes full advance for a room that does not exist, then goes quiet.', tell: 'No confirmation on the hotel\'s own letterhead/number, payment to a personal account, prices far below market.' },
  { name: 'Fake registration site', how: 'A site charges a "fee" to do your mandatory Yatra registration — which is actually free on the government portal.', tell: 'Any site charging for registration. The real one (registrationandtouristcare.uk.gov.in) is free.' },
  { name: 'Fake tour operator / agent', how: 'A slick website or social page with copied photos, fake "approved operator" badges and edited reviews collects your package advance and disappears.', tell: 'No verifiable address, no GSTIN, payment to a personal UPI, pressure to "pay now or lose the seat".' },
  { name: 'Paid search & social ads', how: 'Fraudsters buy Google/Facebook ads that sit above the real results, sending you to a convincing fake.', tell: 'An ad is not a verification. Always check the domain and the operator before you pay.' },
];

const REDFLAGS = [
  ['Asks you to pay a personal UPI / individual bank account', 'Collects payment to a company account (business name shows on your statement)'],
  ['Creates panic — "2 seats left", "pay in 5 minutes"', 'Gives you time, a written quote, and no pressure'],
  ['Sells Kedarnath helicopter tickets directly', 'Tells you heli tickets are IRCTC-only and helps you book there'],
  ['Charges a fee for Yatra registration', 'Does registration for free as part of the package'],
  ['No physical address, no GSTIN, no landline', 'Verifiable address, GSTIN on the invoice, real phone'],
  ['Reviews look copied or only on its own site', 'Has real, dated Google reviews you can open and read'],
  ['Brand-new domain pretending to be an old operator', 'Domain and business have a multi-year track record'],
];

const VERIFY = [
  ['Check the domain, character by character', 'Fraud sites use a one- or two-letter change from a real name. Look up the domain age at who.is — a site registered in 2025/2026 cannot be an operator "since 2010".'],
  ['Verify the GSTIN', 'Any real business at these prices is GST-registered. Ask for the GSTIN and check it at services.gst.gov.in — the name must match the operator.'],
  ['Refuse personal-account payments', 'A registered business collects to a company account. A request to pay an individual\'s UPI/Google Pay/PhonePe is a fraud signal, however polished the pitch.'],
  ['Open the Google reviews yourself', 'Search the business on Google Maps and read dated reviews. Edited or testimonial-only "reviews" on the operator\'s own page prove nothing.'],
  ['Confirm a real address and phone', 'A genuine operator has a physical office and a number that a person answers. Call it before you pay.'],
];

const REPORT = [
  ['Call 1930', 'The national cyber-fraud helpline. Call within the "golden hour" — fast reporting gives the best chance of freezing the money.'],
  ['File at cybercrime.gov.in', 'The National Cyber Crime Reporting Portal (NCRP). Keep every screenshot, UPI reference and chat.'],
  ['Email the Uttarakhand cyber cell', 'Report fraudulent Char Dham content to ccps.deh@uttarakhandpolice.uk.gov.in so the STF can take the site down.'],
  ['Tell your bank immediately', 'Ask them to flag the beneficiary account and attempt a recall. Do this in parallel, not after.'],
];

const FAQ = [
  { q: 'How common are Char Dham Yatra booking scams in 2026?', a: 'Common enough that the government is running takedown operations. In its 2025 crackdown the Uttarakhand STF blocked 51 fake helicopter-booking websites, disabled 111 fraudulent phone numbers, froze 56 bank accounts and reported 30 WhatsApp numbers — and across operations has busted 76+ fake sites. The Indian Cyber Crime Coordination Centre (I4C) under the Home Ministry has issued a national alert about fake Char Dham websites, social pages and paid ads. Victims have been reported from across India and from NRI families abroad.' },
  { q: 'What is the only official way to book a Kedarnath helicopter ticket?', a: 'Only through IRCTC HeliYatra at heliyatra.irctc.co.in. There is no offline counter, no agent quota and no "VIP" backdoor. Anyone selling Kedarnath helicopter tickets through a website, WhatsApp, Facebook or a phone call is running a scam — the STF has said this plainly.' },
  { q: 'Is Char Dham Yatra registration free, or do I have to pay for it?', a: 'It is free. Mandatory registration is done at registrationandtouristcare.uk.gov.in or the Tourist Care Uttarakhand app at no cost. Any website charging a "registration fee" is a scam. A genuine tour operator includes registration in the package and never bills you separately for it.' },
  { q: 'How can I tell if a Char Dham tour operator or website is genuine?', a: 'Run five quick checks before paying: verify the domain character-by-character and its age at who.is; ask for the GSTIN and confirm it at services.gst.gov.in; refuse to pay any personal UPI or individual bank account (real businesses collect to a company account); open the operator\'s Google reviews and read dated ones yourself; and confirm a real office address and a phone a person actually answers.' },
  { q: 'What should I do if I have already been cheated in a Char Dham booking?', a: 'Act fast. Call the 1930 cyber-fraud helpline immediately, file a complaint at cybercrime.gov.in with all your screenshots and payment references, email the Uttarakhand cyber cell at ccps.deh@uttarakhandpolice.uk.gov.in, and tell your bank to flag the beneficiary account. Reporting within the first hour gives the best chance of the money being frozen.' },
  { q: 'Why are elderly pilgrims and NRI families the biggest scam targets?', a: 'Because they rely most on online and phone bookings and are least able to spot a fake. Senior pilgrims often trust a confident phone voice and panic at "limited seats"; NRI families book remotely, sight unseen, and cannot drop in to an office. Scammers also wrap the pitch in religious language to lower the reader\'s guard. The fix is the same for everyone — verify before you pay.' },
];

const PAA = [
  { q: 'Are there fake Char Dham helicopter websites?', a: 'Yes, many. The Uttarakhand STF has blocked dozens — 51 fake sites in its 2025 drive alone, and 76+ across operations — all impersonating the official IRCTC HeliYatra portal. The only genuine helicopter booking site is heliyatra.irctc.co.in; everything else selling Kedarnath heli tickets is fraudulent.' },
  { q: 'Can a tour operator book my Kedarnath helicopter ticket for me?', a: 'No legitimate operator can sell you the IRCTC helicopter ticket itself — that booking has to be in your name on heliyatra.irctc.co.in. A good operator will guide you through the official process, but anyone claiming to hold a heli "quota" you can buy is lying.' },
  { q: 'Is it safe to book Char Dham hotels online?', a: 'It can be, if you verify. Book on a known platform or directly with the hotel using its own published number, never pay a full advance to a personal account, and get the confirmation on the hotel\'s own letterhead. Fake "hotel" sites and agents are a known Char Dham scam.' },
  { q: 'How do I report a Char Dham booking fraud?', a: 'Call 1930 immediately, file at cybercrime.gov.in, email ccps.deh@uttarakhandpolice.uk.gov.in, and alert your bank to freeze the beneficiary account. Speed matters — the first hour is when money is most recoverable.' },
  { q: 'Should I trust an operator just because it ranks on Google or runs ads?', a: 'No. Fraudsters buy ads that sit above real results, and a high ranking is not a background check. Always run the domain, GSTIN, payment-account and reviews checks before you pay, no matter where you found the operator.' },
  { q: 'How do I know Shiv Ganga Travels itself is genuine?', a: 'Apply the same checks to us. We have a physical Haridwar office, an established operating history since 2010, real dated Google reviews, IATO membership and Uttarakhand Tourism registration, and we collect payment to a company account with a GSTIN we share on the invoice. Verify all of it before you book — that is exactly the habit that keeps you safe.' },
];

function Schema() {
  const article = {
    '@context': 'https://schema.org', '@type': 'Article',
    headline: 'Char Dham Yatra Scams 2026 — How to Spot Fake Bookings & Stay Safe',
    description: metadata.description, url: URL, inLanguage: 'en-IN',
    datePublished: '2026-06-29', dateModified: SITE.lastUpdatedISO,
    image: `${SITE.baseUrl}/opengraph-image`,
    author: { '@type': 'Person', name: 'Dhanesh Chandra Mishra', jobTitle: 'Founder, Shiv Ganga Travels' },
    publisher: { '@type': 'Organization', name: SITE.name, logo: { '@type': 'ImageObject', url: `${SITE.baseUrl}/opengraph-image` } },
    about: { '@type': 'Thing', name: 'Char Dham Yatra booking fraud' },
  };
  const faq = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: FAQ.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) };
  const bc = {
    '@context': 'https://schema.org', '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: SITE.baseUrl },
      { '@type': 'ListItem', position: 2, name: 'Char Dham Yatra', item: `${SITE.baseUrl}/char-dham-yatra` },
      { '@type': 'ListItem', position: 3, name: 'Char Dham Yatra Scams', item: URL },
    ],
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(article) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faq) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(bc) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ '@context': 'https://schema.org', '@type': 'WebPage', '@id': `${URL}#webpage`, url: URL, name: metadata.title, inLanguage: 'en-IN', dateModified: SITE.lastUpdatedISO, speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.speakable-answer'] } }) }} />
    </>
  );
}

const h2 = { fontFamily: 'var(--font-display)', fontSize: 'clamp(1.25rem,3vw,1.75rem)', fontWeight: 700, color: 'var(--navy)', letterSpacing: '-0.02em', marginBottom: 12, marginTop: 40 };
const h3 = { fontSize: 'clamp(1rem,2vw,1.2rem)', fontWeight: 700, color: 'var(--navy)', marginBottom: 8, marginTop: 22 };
const p = { fontSize: 15.5, color: '#334155', lineHeight: 1.9, marginBottom: 16 };
const card = { background: '#fff', borderRadius: 12, padding: 16, border: '1px solid var(--border)' };
const thtd = { padding: '11px 12px', fontSize: 13.5, textAlign: 'left', borderBottom: '1px solid var(--border)', color: '#334155', lineHeight: 1.65, verticalAlign: 'top' };

function Table({ head, rows, headColors }) {
  return (
    <div style={{ overflowX: 'auto', margin: '8px 0 20px', border: '1px solid var(--border)', borderRadius: 12 }}>
      <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: 480 }}>
        <thead><tr style={{ background: 'var(--bg)' }}>{head.map((h, i) => <th key={h} style={{ ...thtd, fontWeight: 700, color: headColors ? headColors[i] : 'var(--navy)' }}>{h}</th>)}</tr></thead>
        <tbody>{rows.map((r, i) => <tr key={i}>{r.map((c, j) => <td key={j} style={thtd}>{c}</td>)}</tr>)}</tbody>
      </table>
    </div>
  );
}

export default function CharDhamYatraScams() {
  return (
    <>
      <Schema />

      <section style={{ background: 'linear-gradient(145deg,#7f1d1d 0%,var(--navy) 55%,#1A3E75 100%)', padding: '56px 20px 44px', textAlign: 'center' }}>
        <div style={{ maxWidth: 840, margin: '0 auto' }}>
          <span style={{ background: 'rgba(255,255,255,0.14)', color: '#FFD166', fontSize: 11, fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', padding: '5px 16px', borderRadius: 100, display: 'inline-block', marginBottom: 16 }}>⚠️ Pilgrim Safety Advisory · 2026 Season</span>
          <h1 className="display-title" style={{ color: '#fff', fontSize: 'clamp(1.8rem,4.5vw,3rem)', marginBottom: 16 }}>Char Dham Yatra Scams 2026 — Spot &amp; Avoid Booking Fraud</h1>
          <p style={{ color: 'rgba(255,255,255,0.88)', fontSize: 15, lineHeight: 1.7 }}>
            Fake helicopter, hotel and registration bookings are looting pilgrims every season.<br />
            Here are the red flags, the 60-second operator check, the official portals, and what to do if you&apos;ve already been cheated.
          </p>
        </div>
      </section>

      <article style={{ maxWidth: 860, margin: '0 auto', padding: '8px 20px 56px' }}>
        <div style={{ fontSize: 12, color: 'var(--text-muted, #64748b)', margin: '18px 0 6px', textAlign: 'right' }}>🗓️ <strong>Last updated:</strong> {SITE.lastUpdated} · Written to protect pilgrims, not to sell</div>

        <AnswerBox>
          The safest rule for Char Dham Yatra 2026: <strong>book Kedarnath helicopter tickets only at heliyatra.irctc.co.in</strong>, do your <strong>free</strong> registration only at registrationandtouristcare.uk.gov.in, and <strong>never pay a personal UPI or individual bank account</strong>. Before paying any operator, verify the domain age, the GSTIN, and the Google reviews. If you&apos;ve already been cheated, call <strong>1930</strong> and file at cybercrime.gov.in immediately.
        </AnswerBox>

        <p style={p}>I run a Char Dham operation out of Haridwar, and every season I watch families arrive in tears because they paid a fake website for a helicopter seat or a hotel that never existed. It is the cruelest kind of fraud — it preys on faith. This page is not a sales pitch. It is the plain guide I give my own callers: what the scams look like, how to check anyone you deal with (including us), and exactly what to do if it has already happened.</p>

        <h2 style={h2}>How big is the problem in 2026?</h2>
        <p style={p}>Big enough that the police are running takedown operations. In its 2025 crackdown the Uttarakhand Special Task Force blocked <strong>51 fake helicopter-booking websites</strong>, disabled <strong>111 fraudulent phone numbers</strong>, froze <strong>56 bank accounts</strong> and reported <strong>30 WhatsApp numbers</strong> — and across operations it has busted <strong>76+ fake sites</strong>. The Indian Cyber Crime Coordination Centre (I4C), under the Union Home Ministry, has issued a national alert about fake Char Dham websites, social pages and paid ads. Victims have turned up from Rajasthan to Tamil Nadu, and NRI families from the UK, US, Canada and the UAE. This is an organised industry, not a few bad actors.</p>

        <h2 style={h2}>The 5 Char Dham scams pilgrims fall for</h2>
        <p style={p}>Almost every fraud is a version of one of these five. Learn the tell for each.</p>
        {SCAM_TYPES.map((s, i) => (
          <div key={s.name} style={{ ...card, marginBottom: 12 }}>
            <div style={{ fontWeight: 800, color: 'var(--navy)', fontSize: 14.5, marginBottom: 6 }}>{i + 1}. {s.name}</div>
            <div style={{ fontSize: 13.5, color: '#475569', lineHeight: 1.8, marginBottom: 6 }}><strong>How it works:</strong> {s.how}</div>
            <div style={{ fontSize: 13.5, color: '#b91c1c', lineHeight: 1.8 }}><strong>The tell:</strong> {s.tell}</div>
          </div>
        ))}

        <h2 style={h2}>How the fake-booking scam actually works</h2>
        <p style={p}>The mechanics are remarkably consistent, whether it&apos;s a heli ticket or a hotel. Recognise the sequence and you&apos;ll see it coming.</p>
        <ol style={{ ...p, paddingLeft: 22 }}>
          <li style={{ marginBottom: 8 }}><strong>A convincing fake appears.</strong> A professional-looking site or social page with copied logos, edited reviews, fake "approved operator" badges and a countdown timer. The domain is often one or two letters off a real one.</li>
          <li style={{ marginBottom: 8 }}><strong>You call; they sound official.</strong> Trained operators use the right terminology, fake booking IDs, even an IVR greeting. It feels legitimate.</li>
          <li style={{ marginBottom: 8 }}><strong>They manufacture urgency.</strong> "Only 2 seats left." "VIP quota right now." "Pay in 5 minutes or it&apos;s gone." Panic switches off your judgement — that&apos;s the point.</li>
          <li style={{ marginBottom: 8 }}><strong>They take payment off-gateway.</strong> A personal UPI, a QR code, an individual&apos;s bank account — then often a second "insurance" or "VIP tax" demand.</li>
          <li style={{ marginBottom: 8 }}><strong>They send a fake confirmation.</strong> A polished PDF, a copied boarding pass, a realistic reference number. You only discover it&apos;s worthless at the helipad or hotel desk — by then they&apos;ve vanished.</li>
        </ol>

        <h2 style={h2}>Red flags: scam behaviour vs a real operator</h2>
        <p style={p}>Put any operator next to this list. Even one column-left match should stop you.</p>
        <Table head={['🚩 Scam signal', '✅ Real operator']} headColors={['#b91c1c', '#16a34a']} rows={REDFLAGS} />

        <h2 style={h2}>Verify any operator in 60 seconds</h2>
        <p style={p}>You don&apos;t need to be technical. Five checks, any of which a fraudster fails:</p>
        <Table head={['Check', 'Why it works']} rows={VERIFY} />
        <p style={{ ...p, fontSize: 13.5, color: '#64748b' }}>Run these on anyone — travel agents, "helicopter quota" sellers, hotel pages, and us. An honest operator passes all five and won&apos;t mind you checking.</p>

        <h2 style={h2}>Book only through official portals</h2>
        <p style={p}>For the two things scammers exploit most — helicopters and registration — there is exactly one correct source each. Memorise these.</p>
        <Table head={['What', 'Only official source', 'Cost']} rows={[
          ['Kedarnath helicopter tickets', <a key="h" href="https://heliyatra.irctc.co.in" target="_blank" rel="noopener noreferrer nofollow" style={{ color: 'var(--teal)', fontWeight: 600 }}>heliyatra.irctc.co.in (IRCTC)</a>, 'UCADA-fixed fare'],
          ['Char Dham / Yatra registration', <a key="r" href="https://registrationandtouristcare.uk.gov.in" target="_blank" rel="noopener noreferrer nofollow" style={{ color: 'var(--teal)', fontWeight: 600 }}>registrationandtouristcare.uk.gov.in</a>, 'Free'],
          ['Report a fraud', <span key="c"><a href="https://cybercrime.gov.in" target="_blank" rel="noopener noreferrer nofollow" style={{ color: 'var(--teal)', fontWeight: 600 }}>cybercrime.gov.in</a> + call 1930</span>, 'Free'],
        ]} />
        <p style={{ ...p, fontSize: 13.5 }}>IRCTC is the <strong>only</strong> authorised helicopter booking partner — the STF has stated this repeatedly. There is no agent quota and no offline window. If someone offers you a heli ticket any other way, it is fake.</p>

        <h2 style={h2}>Already been scammed? Do this now</h2>
        <p style={p}>Speed is everything — money is most recoverable in the first hour. Work down this list in parallel, not one after another.</p>
        <Table head={['Step', 'Why / how']} rows={REPORT} />

        <h2 style={h2}>How to verify that we are real</h2>
        <p style={p}>It would be hypocritical to tell you to check everyone and then ask you to trust us blindly. So run the same checks on Shiv Ganga Travels before you book anything:</p>
        <div style={{ ...card, background: 'var(--bg)' }}>
          <ul style={{ margin: 0, paddingLeft: 18, fontSize: 13.5, color: '#334155', lineHeight: 2 }}>
            <li>A physical office you can visit: {SITE.address}</li>
            <li>An operating history since {SITE.established} — not a 2026 domain pretending to be older</li>
            <li>Real, dated Google reviews — {TRUST.stats.find((s) => s.label === 'Google Rating')?.value} from verified pilgrims you can open and read</li>
            <li>IATO membership and Uttarakhand Tourism Development Board registration (verify on the official sites)</li>
            <li>Payment to a company account, with a GSTIN we put on your invoice — never a personal UPI</li>
            <li>A phone a person actually answers: <a href={`tel:${SITE.phone}`} style={{ color: 'var(--teal)', fontWeight: 600 }}>{SITE.phone}</a></li>
          </ul>
        </div>
        <p style={{ ...p, marginTop: 16 }}>If any operator — us included — can&apos;t show you these, walk away. For more on choosing well, see <Link href="/best-char-dham-yatra-operators-haridwar" style={{ color: 'var(--teal)', fontWeight: 600 }}>how to pick a Char Dham operator in Haridwar</Link> and <Link href="/direct-operator-vs-travel-aggregator-char-dham" style={{ color: 'var(--teal)', fontWeight: 600 }}>direct operator vs aggregator</Link>.</p>

        <div style={{ ...card, display: 'flex', gap: 14, alignItems: 'flex-start', marginTop: 22, background: 'var(--bg)' }}>
          <div style={{ flexShrink: 0, width: 46, height: 46, borderRadius: '50%', background: 'var(--navy)', color: '#FFD166', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800 }}>DM</div>
          <div>
            <div style={{ fontWeight: 700, color: 'var(--navy)', fontSize: 14 }}>Written by Dhanesh Chandra Mishra</div>
            <div style={{ fontSize: 12.5, color: '#475569', lineHeight: 1.7, marginTop: 3 }}>Founder, Shiv Ganga Travels · retired Army officer with 15+ Char Dham seasons. Every figure here is from the Uttarakhand STF, I4C and the official IRCTC and registration portals — checked, not paraphrased from another blog.</div>
          </div>
        </div>

        <div style={{ background: 'var(--navy)', borderRadius: 16, padding: '28px 24px', textAlign: 'center', marginTop: 32 }}>
          <div style={{ color: '#FFD166', fontSize: 13, fontWeight: 700, marginBottom: 6 }}>🛡️ Plan safely · Verify before you pay</div>
          <h3 style={{ color: '#fff', fontFamily: 'var(--font-display)', fontSize: '1.4rem', marginBottom: 10 }}>Questions before you book? Just ask</h3>
          <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: 14, marginBottom: 20 }}>We&apos;ll happily walk you through verifying us — and any quote we send is ₹0 to ask for, with no advance.</p>
          <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href={`https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent('Namaste! I have a question about booking the Char Dham Yatra safely.')}`} target="_blank" rel="nofollow noopener noreferrer" style={{ background: '#25D366', color: '#fff', padding: '12px 24px', borderRadius: 9, fontWeight: 700, fontSize: 13.5, textDecoration: 'none' }}>💬 WhatsApp Us</a>
            <a href={`tel:${SITE.phone}`} style={{ background: 'rgba(255,255,255,0.12)', color: '#fff', padding: '12px 24px', borderRadius: 9, fontWeight: 700, fontSize: 13.5, textDecoration: 'none', border: '1px solid rgba(255,255,255,0.2)' }}>📞 {SITE.phone}</a>
          </div>
        </div>

        <h2 style={h2}>Char Dham scam — FAQ</h2>
        {FAQ.map((f) => (
          <div key={f.q} style={{ marginBottom: 14 }}>
            <h3 style={{ ...h3, marginTop: 10 }}>{f.q}</h3>
            <p style={{ ...p, marginBottom: 4 }}>{f.a}</p>
          </div>
        ))}

        <div style={{ borderTop: '1px solid var(--border)', paddingTop: 24, marginTop: 32 }}>
          <div style={{ fontWeight: 700, fontSize: 13.5, color: 'var(--navy)', marginBottom: 12 }}>Plan your yatra the safe way</div>
          <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
            {[['Char Dham Yatra Guide', '/char-dham-yatra'], ['Helicopter Yatra', '/char-dham-helicopter'], ['Best Operators in Haridwar', '/best-char-dham-yatra-operators-haridwar'], ['Direct Operator vs Aggregator', '/direct-operator-vs-travel-aggregator-char-dham'], ['Emergency Contacts', '/char-dham-yatra-emergency-contacts'], ['Yatra Checklist', '/char-dham-yatra-checklist'], ['Kedarnath Yatra', '/kedarnath-yatra'], ['Char Dham from Delhi', '/char-dham-yatra-from-delhi']].map(([l, h]) => (
              <Link key={h} href={h} style={{ background: 'var(--bg)', border: '1px solid var(--border)', color: 'var(--navy)', padding: '8px 16px', borderRadius: 8, fontSize: 13, fontWeight: 600, textDecoration: 'none' }}>{l} →</Link>
            ))}
          </div>
        </div>

        <div style={{ marginTop: 36 }}>
          <PeopleAlsoAsk items={PAA} />
        </div>
      </article>
    </>
  );
}
