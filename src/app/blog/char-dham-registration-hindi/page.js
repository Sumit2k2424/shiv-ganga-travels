import Link from 'next/link';
import { SITE } from '@/data/packages';
import BlogCTA from '@/components/BlogCTA';
import BlogAuthor from '@/components/BlogAuthor';

export const metadata = {
  title: 'चार धाम यात्रा रजिस्ट्रेशन 2026 — मोबाइल से कैसे करें? (Step-by-Step)',
  description: 'चार धाम यात्रा 2026 का ऑनलाइन रजिस्ट्रेशन मुफ्त है। WhatsApp और website से — 9 आसान steps में पूरी जानकारी हिंदी में। जरूरी दस्तावेज़ और 55+ उम्र के नियम।',
  keywords: ['चार धाम यात्रा रजिस्ट्रेशन 2026', 'char dham registration kaise kare', 'चार धाम ऑनलाइन रजिस्ट्रेशन', 'char dham yatra registration hindi', 'चार धाम पंजीकरण 2026'],
  alternates: { canonical: `${SITE.baseUrl}/blog/char-dham-registration-hindi` },
  openGraph: { title: 'चार धाम यात्रा रजिस्ट्रेशन 2026 — मोबाइल से घर बैठे कैसे करें?', description: 'ऑनलाइन रजिस्ट्रेशन मुफ्त। WhatsApp और website से करें। 9 आसान स्टेप हिंदी में।', url: `${SITE.baseUrl}/blog/char-dham-registration-hindi`, type: 'article' },
    images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: 'चार धाम यात्रा रजिस्ट्रेशन 2026 — मोबाइल से कैसे करें? Step-by-Step Hi | Shiv Ganga Travels' }],
};

function Schema() {
  const faq = {
    '@context': 'https://schema.org', '@type': 'FAQPage',
    mainEntity: [
      { '@type': 'Question', name: 'चार धाम यात्रा रजिस्ट्रेशन कहाँ करें?', acceptedAnswer: { '@type': 'Answer', text: 'registrationandtouristcare.uk.gov.in पर ऑनलाइन करें — बिल्कुल मुफ्त। WhatsApp से भी: 8394833833 पर "Hi" भेजें।' } },
      { '@type': 'Question', name: 'क्या चार धाम रजिस्ट्रेशन में पैसे लगते हैं?', acceptedAnswer: { '@type': 'Answer', text: 'नहीं — 2026 में चार धाम यात्रा रजिस्ट्रेशन पूरी तरह मुफ्त है। अगर कोई पैसे माँगे तो वह धोखा है।' } },
      { '@type': 'Question', name: 'बिना रजिस्ट्रेशन के क्या होगा?', acceptedAnswer: { '@type': 'Answer', text: 'सोनप्रयाग (केदारनाथ रूट) और जानकी चट्टी (यमुनोत्री रूट) पर पुलिस रोक देती है। 6 घंटे गाड़ी में बैठकर आए हों — वापस भेज दिए जाते हैं।' } },
    ],
  };
  const howTo = { '@context': 'https://schema.org', '@type': 'HowTo', name: 'चार धाम यात्रा रजिस्ट्रेशन कैसे करें', inLanguage: 'hi', step: [{ '@type': 'HowToStep', name: 'Website खोलें', text: 'registrationandtouristcare.uk.gov.in पर जाएं' },{ '@type': 'HowToStep', name: 'Register पर क्लिक करें', text: 'Yatra Registration बटन दबाएं' },{ '@type': 'HowToStep', name: 'Mobile Number दर्ज करें', text: 'OTP verify करें' },{ '@type': 'HowToStep', name: 'Personal Details भरें', text: 'नाम, उम्र, Aadhaar, पता' },{ '@type': 'HowToStep', name: 'E-Pass Download करें', text: 'PDF save करें और print लें' }] };
  const bc = { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: SITE.baseUrl }, { '@type': 'ListItem', position: 2, name: 'Blog', item: `${SITE.baseUrl}/blog` }, { '@type': 'ListItem', position: 3, name: 'चार धाम रजिस्ट्रेशन हिंदी', item: `${SITE.baseUrl}/blog/char-dham-registration-hindi` }] };
  return (<><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faq) }}/><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howTo) }}/><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(bc) }}/></>);
}

const h2 = { fontFamily: 'var(--font-display)', fontSize: 'clamp(1.25rem,3vw,1.75rem)', fontWeight: 700, color: 'var(--navy)', marginBottom: 12, marginTop: 36 };
const p  = { fontSize: 15.5, color: '#334155', lineHeight: 1.9, marginBottom: 16 };

function Schema() {
  const article = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'चार धाम यात्रा रजिस्ट्रेशन 2026 — मोबाइल से कैसे करें? (Step-by-Step)',
    description: '',
    image: `${SITE.baseUrl}/opengraph-image`,
    datePublished: '2025-01-01',
    dateModified: '2026-05-21',
    author: {
      '@type': 'Person',
      name: 'Sumit Mishra',
      jobTitle: 'Operations Manager, Shiv Ganga Travels',
      url: `${SITE.baseUrl}/about`,
      sameAs: ['https://www.linkedin.com/in/sumit-mishra-863734171/', 'https://www.facebook.com/sumi2112'],
    },
    publisher: {
      '@type': 'Organization',
      name: SITE.name,
      url: SITE.baseUrl,
      logo: { '@type': 'ImageObject', url: `${SITE.baseUrl}/logo.png` },
    },
    mainEntityOfPage: `${SITE.baseUrl}/blog/char-dham-registration-hindi`,
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(article) }} />;
}


export default function CharDhamRegistrationHindi() {
  const steps = [
    ['Website खोलें','Chrome में जाएं: registrationandtouristcare.uk.gov.in — यह उत्तराखंड सरकार की official website है।'],
    ['"Register" पर क्लिक करें','होम पेज पर "Yatra Registration" या "Register Now" बटन दिखेगा।'],
    ['Mobile Number दर्ज करें','अपना 10 अंकों का मोबाइल नंबर डालें। OTP आएगा — verify करें। वही नंबर दें जो यात्रा में साथ रहेगा।'],
    ['Personal Details भरें','पूरा नाम (Aadhaar जैसा), उम्र, लिंग, पता, Aadhaar Card Number (16 अंक)।'],
    ['यात्रा की जानकारी भरें','Char Dham / Do Dham / Single Dham, यात्रा शुरुआत की तारीख, आप कहाँ से आ रहे हैं।'],
    ['बाकी यात्रियों की जानकारी','साथ जाने वाले परिवार के सदस्यों की जानकारी भरें। एक रजिस्ट्रेशन में 10 लोगों तक।'],
    ['Photo Upload करें','हर व्यक्ति की पासपोर्ट साइज फोटो। मोबाइल से सफेद दीवार के सामने खींची फोटो चलेगी।'],
    ['Submit करें','सब भरने के बाद Submit करें। Registration Number मिलेगा — Screenshot लें।'],
    ['E-Pass Download करें','Registration के बाद E-Pass PDF download करें। मोबाइल में Save करें + Print लें।'],
  ];

  return (
    <>
      <Schema />
      <    <>
      <Schema/>
      <section style={{ background: 'linear-gradient(145deg,var(--navy) 0%,#1A3E75 60%,var(--teal) 100%)', padding: '52px 20px 40px', textAlign: 'center' }}>
        <div style={{ maxWidth: 800, margin: '0 auto' }}>
          <span style={{ background: 'rgba(232,146,10,0.18)', color: '#FFD166', fontSize: 11, fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', padding: '5px 16px', borderRadius: 100, display: 'inline-block', marginBottom: 14 }}>📋 रजिस्ट्रेशन गाइड · 2026</span>
          <h1 style={{ color: '#fff', fontFamily: 'var(--font-display)', fontSize: 'clamp(1.7rem,4vw,2.6rem)', fontWeight: 700, marginBottom: 14 }}>चार धाम यात्रा रजिस्ट्रेशन 2026</h1>
          <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: 15, lineHeight: 1.7 }}>मोबाइल से घर बैठे करें — मुफ्त · 9 आसान स्टेप · हिंदी में</p>
        </div>
      </section>

      <nav style={{ background: 'var(--bg)', borderBottom: '1px solid var(--border)', padding: '10px 20px' }}>
        <div style={{ maxWidth: 'var(--container)', margin: '0 auto', fontSize: 12, color: 'var(--text-muted)', display: 'flex', gap: 6, flexWrap: 'wrap' }}>
          Home<span>›</span>
          Blog<span>›</span>
          <span>चार धाम रजिस्ट्रेशन 2026</span>
        </div>
      </nav>

      <article style={{ maxWidth: 900, margin: '0 auto', padding: '40px 20px 60px' }}>

        {/* Author byline — E-E-A-T signal */}
        <BlogAuthor variant="top" author="sumit" />
        <div style={{ fontSize: 12, color: 'var(--text-muted)', marginBottom: 20, textAlign: 'right' }}>🗓️ <strong>Last updated:</strong> May 21, 2026 · By Shiv Ganga Travels</div>

        <div style={{ background: 'var(--navy)', borderRadius: 14, padding: '20px 24px', marginBottom: 28 }}>
          <div style={{ color: '#FFD166', fontSize: 13, fontWeight: 700, marginBottom: 12 }}>⚠️ यह बात पहले जान लें</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            {['बिना रजिस्ट्रेशन के सोनप्रयाग पर पुलिस वापस भेज देती है (केदारनाथ रूट)','बिना रजिस्ट्रेशन के जानकी चट्टी पर रोकते हैं (यमुनोत्री रूट)','रजिस्ट्रेशन 100% मुफ्त है — किसी को पैसे मत दें','शिव गंगा ट्रेवल्स के पैकेज में रजिस्ट्रेशन हम करते हैं — आपको कुछ नहीं करना'].map(r => (
              <div key={r} style={{ display: 'flex', gap: 8, alignItems: 'flex-start' }}><span style={{ color: '#FFD166', flexShrink: 0 }}>•</span><span style={{ color: 'rgba(255,255,255,0.85)', fontSize: 13.5 }}>{r}</span></div>
            ))}
          </div>
        </div>

        <h2 style={{ ...h2, marginTop: 8 }}>3 तरीकों से रजिस्ट्रेशन करें</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(200px,1fr))', gap: 12, marginBottom: 28 }}>
          {[
            { icon:'🌐', title:'Website से', sub:'सबसे आसान', link:'registrationandtouristcare.uk.gov.in', color:'#1D9E75' },
            { icon:'💬', title:'WhatsApp से', sub:'8394833833 पर "Hi" भेजें', link:'फिर निर्देश आएंगे', color:'#25D366' },
            { icon:'🏛️', title:'केंद्र पर', sub:'हरिद्वार / ऋषिकेश', link:'बायोमेट्रिक केंद्र', color:'#533AB7' },
          ].map(({ icon, title, sub, link, color }) => (
            <div key={title} style={{ background: '#fff', borderRadius: 12, padding: '16px', border: '1px solid var(--border)', borderTop: `3px solid ${color}` }}>
              <div style={{ fontSize: 28, marginBottom: 8 }}>{icon}</div>
              <div style={{ fontWeight: 700, fontSize: 14.5, color: 'var(--navy)', marginBottom: 4 }}>{title}</div>
              <div style={{ fontSize: 12.5, color: '#475569', marginBottom: 4 }}>{sub}</div>
              <div style={{ fontSize: 12, color, fontWeight: 600 }}>{link}</div>
            </div>
          ))}
        </div>

        <h2 style={h2}>Website से रजिस्ट्रेशन — 9 Steps</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginBottom: 28 }}>
          {steps.map(([title, detail], i) => (
            <div key={i} style={{ display: 'flex', gap: 14, background: '#fff', borderRadius: 10, padding: '14px 16px', border: '1px solid var(--border)' }}>
              <div style={{ width: 36, height: 36, borderRadius: '50%', background: i === 8 ? '#1D9E75' : 'var(--navy)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#FFD166', fontWeight: 800, fontSize: 14, flexShrink: 0 }}>
                {i === 8 ? '✓' : i + 1}
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ fontWeight: 700, fontSize: 14, color: 'var(--navy)', marginBottom: 4 }}>{title}</div>
                <div style={{ fontSize: 13.5, color: '#475569', lineHeight: 1.7 }}>{detail}</div>
              </div>
            </div>
          ))}
        </div>

        <h2 style={h2}>जरूरी दस्तावेज</h2>
        <div style={{ overflowX: 'auto', marginBottom: 24 }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 13.5 }}>
            <thead><tr style={{ background: 'var(--navy)' }}>{['दस्तावेज','जरूरी है?','नोट'].map(h => (<th key={h} style={{ padding: '10px 12px', textAlign: 'left', color: '#fff', fontWeight: 700, fontSize: 12 }}>{h}</th>))}</tr></thead>
            <tbody>
              {[
                ['Aadhaar Card','✅ हाँ — हर यात्री का','सबसे जरूरी'],
                ['पासपोर्ट साइज फोटो','✅ हाँ','मोबाइल से भी चलती है'],
                ['मोबाइल नंबर','✅ हाँ','जो यात्रा में साथ रहे'],
                ['Medical Certificate','✅ 55+ के लिए अनिवार्य','डॉक्टर से बनवाएं'],
                ['Voter ID / PAN','❌ नहीं','Aadhaar काफी है'],
              ].map(([doc,req,note],i) => (
                <tr key={doc} style={{ borderBottom:'1px solid var(--border)', background: i%2===0?'#fff':'var(--bg)' }}>
                  <td style={{ padding:'9px 12px', fontWeight:600, color:'var(--navy)' }}>{doc}</td>
                  <td style={{ padding:'9px 12px', color: req.includes('✅')?'#1D9E75':'#D85A30', fontWeight:700 }}>{req}</td>
                  <td style={{ padding:'9px 12px', color:'#475569', fontSize:13 }}>{note}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* ── Mid-article conversion CTA ── */}
        <BlogCTA variant="inline" intent="registration" />

        <h2 style={h2}>अक्सर पूछे जाने वाले सवाल</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginBottom: 28 }}>
          {[
            ['क्या रजिस्ट्रेशन हिंदी में होता है?','WhatsApp वाले option में Hindi निर्देश मिलते हैं। Website English में है।'],
            ['कितने दिन पहले करें?','कम से कम 7-10 दिन पहले। पीक सीजन में server slow होता है।'],
            ['क्या एक Registration पूरी family के लिए?','हाँ — एक में 10 लोगों तक जोड़ सकते हैं।'],
            ['एजेंट पैसे माँगें तो?','मना करें। रजिस्ट्रेशन मुफ्त है। खुद website पर करें।'],
          ].map(([q,a]) => (
            <div key={q} style={{ background: '#fff', borderRadius: 10, padding: '14px 18px', border: '1px solid var(--border)' }}>
              <div style={{ fontWeight: 700, fontSize: 14, color: 'var(--navy)', marginBottom: 6 }}>❓ {q}</div>
              <div style={{ fontSize: 13.5, color: '#475569', lineHeight: 1.7 }}>{a}</div>
            </div>
          ))}
        </div>

        <div style={{ background: 'rgba(29,158,117,0.08)', borderRadius: 14, padding: '20px 24px', border: '1px solid #9FE1CB', marginBottom: 28 }}>
          <div style={{ fontWeight: 700, fontSize: 14.5, color: '#0F6E56', marginBottom: 8 }}>✅ हमारे पैकेज में रजिस्ट्रेशन शामिल है</div>
          <p style={{ ...p, marginBottom: 0, color: '#334155', fontSize: 14 }}>शिव गंगा ट्रेवल्स के साथ जाने वाले सभी यात्रियों का रजिस्ट्रेशन <strong>हम करते हैं</strong> — बस Aadhaar की जानकारी भेजें, बाकी हम संभाल लेते हैं।</p>
        </div>

        <div style={{ background: 'var(--navy)', borderRadius: 16, padding: '28px 24px', textAlign: 'center', marginTop: 32 }}>
          <h3 style={{ color: '#fff', fontFamily: 'var(--font-display)', fontSize: '1.4rem', marginBottom: 10 }}>रजिस्ट्रेशन में मदद चाहिए?</h3>
          <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: 14, marginBottom: 20 }}>WhatsApp पर "Registration Help" लिखकर भेजें — हम मुफ्त में मदद करते हैं।</p>
          <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href={`https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent('Namaste! Char Dham Yatra 2026 registration mein help chahiye.')}`} target="_blank" rel="nofollow noopener noreferrer" style={{ background: '#25D366', color: '#fff', padding: '12px 24px', borderRadius: 9, fontWeight: 700, fontSize: 14, textDecoration: 'none' }}>💬 Registration Help</a>
            <a href={`tel:${SITE.phone}`} style={{ background: '#E8920A', color: '#fff', padding: '12px 24px', borderRadius: 9, fontWeight: 700, fontSize: 14, textDecoration: 'none' }}>📞 Call करें</a>
          </div>
        </div>

        <div style={{ borderTop: '1px solid var(--border)', paddingTop: 24, marginTop: 32 }}>
          <div style={{ fontWeight: 700, fontSize: 13.5, color: 'var(--navy)', marginBottom: 12 }}>और पढ़ें</div>
          <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
            {[['चार धाम खर्चा','/blog/char-dham-yatra-kitna-kharcha'],['केदारनाथ पहली बार','/blog/kedarnath-pehli-baar'],['पैकिंग लिस्ट','/blog/char-dham-packing-list-hindi'],['Registration Guide (English)','/blog/char-dham-yatra-registration']].map(([l,h]) => (
              <Link key={h} href={h} style={{ background: 'var(--bg)', border: '1px solid var(--border)', color: 'var(--navy)', padding: '8px 16px', borderRadius: 8, fontSize: 13, fontWeight: 600, textDecoration: 'none' }}>{l} →</Link>
            ))}
          </div>
        </div>
      
        {/* ── End-of-article booking CTA ── */}
        <BlogCTA variant="footer" intent="registration" />
</article>
    </>
  );
}
