import Link from 'next/link';
import { SITE } from '@/data/packages';
import BlogCTA from '@/components/BlogCTA';

export const metadata = {
  title: 'केदारनाथ यात्रा 2026 — पहली बार जाने वालों के लिए पूरी जानकारी',
  description: 'पहली बार केदारनाथ जा रहे हैं? रजिस्ट्रेशन, ट्रेक, खर्चा, कपड़े, मौसम — सब कुछ हिंदी में। 18 गलतियाँ जो नए यात्री अक्सर करते हैं — इन्हें पहले जरूर पढ़ें।',
  keywords: ['केदारनाथ यात्रा 2026 पहली बार', 'kedarnath pehli baar kaise jayen', 'केदारनाथ कैसे जाएं हिंदी', 'kedarnath trek hindi guide', 'केदारनाथ यात्रा गाइड 2026'],
  alternates: { canonical: `${SITE.baseUrl}/blog/kedarnath-pehli-baar` },
  openGraph: { title: 'केदारनाथ पहली बार जा रहे हैं? — ये 18 गलतियाँ मत करना', description: 'रजिस्ट्रेशन, ट्रेक, खर्चा, कपड़े, मौसम — पहली बार केदारनाथ जाने की पूरी जानकारी हिंदी में।', url: `${SITE.baseUrl}/blog/kedarnath-pehli-baar`, type: 'article' },
    images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: 'केदारनाथ यात्रा 2026 — पहली बार जाने वालों के लिए पूरी जानकारी हिंदी म | Shiv Ganga Travels' }],
};

function Schema() {
  const faq = {
    '@context': 'https://schema.org', '@type': 'FAQPage',
    mainEntity: [
      { '@type': 'Question', name: 'केदारनाथ ट्रेक कितना मुश्किल है?', acceptedAnswer: { '@type': 'Answer', text: 'मध्यम कठिन। गौरीकुंड से 16 km, 5-7 घंटे। अगर रोज थोड़ा चलते हैं तो हो जाता है। रुकें, पानी पिएं, जल्दी मत करें। बुजुर्गों के लिए घोड़ा या हेलिकॉप्टर।' } },
      { '@type': 'Question', name: 'केदारनाथ में कौन सा मोबाइल नेटवर्क चलता है?', acceptedAnswer: { '@type': 'Answer', text: 'गौरीकुंड के ऊपर सिर्फ BSNL का सिग्नल आता है। Jio, Airtel, Vi बंद हो जाते हैं। BSNL SIM साथ रखें।' } },
      { '@type': 'Question', name: 'केदारनाथ जाने के लिए रजिस्ट्रेशन जरूरी है?', acceptedAnswer: { '@type': 'Answer', text: 'हाँ — बिना रजिस्ट्रेशन के सोनप्रयाग पर पुलिस रोक देती है। registrationandtouristcare.uk.gov.in पर मुफ्त में करें। शिव गंगा ट्रेवल्स के पैकेज में यह हम करते हैं।' } },
    ],
  };
  const article = { '@context': 'https://schema.org', '@type': 'Article', headline: 'केदारनाथ यात्रा 2026 पहली बार — पूरी जानकारी', inLanguage: 'hi', author: { '@type': 'Organization', name: SITE.name, url: SITE.baseUrl }, datePublished: '2026-05-01', dateModified: '2026-05-14', publisher: { '@type': 'Organization', name: SITE.name }, mainEntityOfPage: { '@type': 'WebPage', '@id': `${SITE.baseUrl}/blog/kedarnath-pehli-baar` } };
  const bc = { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: SITE.baseUrl }, { '@type': 'ListItem', position: 2, name: 'Blog', item: `${SITE.baseUrl}/blog` }, { '@type': 'ListItem', position: 3, name: 'केदारनाथ पहली बार', item: `${SITE.baseUrl}/blog/kedarnath-pehli-baar` }] };
  return (<><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faq) }}/><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(article) }}/><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(bc) }}/></>);
}

const h2 = { fontFamily: 'var(--font-display)', fontSize: 'clamp(1.25rem,3vw,1.75rem)', fontWeight: 700, color: 'var(--navy)', marginBottom: 12, marginTop: 36 };
const p  = { fontSize: 15.5, color: '#334155', lineHeight: 1.9, marginBottom: 16 };

export default function KedarnathPehliBaar() {
  const mistakes = [
    ['बिना रजिस्ट्रेशन के निकल पड़ना','सोनप्रयाग पर पुलिस रोकती है। 6 घंटे गाड़ी में बैठकर आए हों — वापस। registrationandtouristcare.uk.gov.in पर मुफ्त में करें।'],
    ['मई के पहले हफ्ते में जाना','लाखों लोग opening पर पहुँचते हैं। 8-10 घंटे की लाइन। मई अंत या सितंबर-अक्टूबर बेहतर।'],
    ['सस्ते जूते पहनकर जाना','16 km पथरीला रास्ता। साधारण चप्पल में टखना मुड़ सकता है। Anti-slip ट्रेकिंग जूते जरूरी।'],
    ['ऊनी कपड़े न लाना','जून में भी रात को 3-8°C। थर्मल इनर, sweater, रेनकोट जरूरी।'],
    ['खाली पेट ट्रेक शुरू करना','गौरीकुंड में अच्छा नाश्ता करके निकलें। साथ में बिस्किट, नट्स, ORS रखें।'],
    ['बहुत ज्यादा सामान पीठ पर लेना','ट्रेक पर सिर्फ छोटा बैग — पानी, खाना, दवाइयां। 5-6 km पर कमर टूट जाती है।'],
    ['मोबाइल नेटवर्क पर निर्भर रहना','गौरीकुंड के ऊपर सिर्फ BSNL। Jio/Airtel बंद। BSNL SIM साथ रखें।'],
    ['सोनप्रयाग से खुद गाड़ी ले जाना','सोनप्रयाग के आगे प्राइवेट गाड़ी नहीं जाती। शेयर्ड जीप ₹40-60/व्यक्ति।'],
    ['बिना घोड़ा बुक किए जाना (50+ के लिए)','पीक में सुबह 9 बजे घोड़े खत्म। एडवांस बुकिंग जरूरी।'],
    ['बरसात के मौसम (जुलाई-अगस्त) में जाना','2013 की त्रासदी मानसून में हुई। लैंडस्लाइड का खतरा। इस समय बिल्कुल मत जाएं।'],
    ['जल्दी-जल्दी दर्शन करके लौटना','कम से कम 1 रात केदारनाथ में रुकें। भोर की 4:30 बजे मंगल आरती — जीवन बदल देती है।'],
    ['ATM पर निर्भर रहना','केदारनाथ में ATM नहीं। गुप्तकाशी से ₹5,000-10,000 नकद निकाल लें।'],
    ['रात 10 बजे के बाद रास्ते पर रहना','सरकारी नियम। रात 10 से सुबह 4 बजे तक गाड़ी बंद। शाम ढलने से पहले रुकने की जगह पहुँचें।'],
    ['सस्ती ऑनलाइन होटल बुकिंग पर भरोसा','पहुँचने पर कमरा नहीं मिलता। फोन पर कंफर्म करें या पैकेज में जाएं।'],
    ['Power Bank न लाना','केदारनाथ में बिजली सीमित। 20,000 mAh का Power Bank जरूरी।'],
    ['5 साल से छोटे बच्चे को 3,500m पर लाना','ऑक्सीजन कम होती है। छोटे बच्चों को गौरीकुंड में रखें।'],
    ['मंदिर में चमड़े की चीजें लाना','Belt, bag — मंदिर में न जाएं।'],
    ['रास्ते के एजेंट की बात सुनना','अनजान एजेंट गलत जानकारी देते हैं। सिर्फ पंजीकृत ऑपरेटर के साथ जाएं।'],
  ];

  return (
    <>
      <Schema/>
      <section style={{ background: 'linear-gradient(145deg,var(--navy) 0%,#1A3E75 60%,var(--teal) 100%)', padding: '52px 20px 40px', textAlign: 'center' }}>
        <div style={{ maxWidth: 800, margin: '0 auto' }}>
          <span style={{ background: 'rgba(232,146,10,0.18)', color: '#FFD166', fontSize: 11, fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', padding: '5px 16px', borderRadius: 100, display: 'inline-block', marginBottom: 14 }}>🏔️ पहली बार केदारनाथ · 2026</span>
          <h1 style={{ color: '#fff', fontFamily: 'var(--font-display)', fontSize: 'clamp(1.7rem,4vw,2.6rem)', fontWeight: 700, marginBottom: 14 }}>केदारनाथ पहली बार जा रहे हैं?</h1>
          <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: 15, lineHeight: 1.7 }}>ये 18 गलतियाँ मत करना — वरना यात्रा बर्बाद हो जाएगी</p>
        </div>
      </section>

      <nav style={{ background: 'var(--bg)', borderBottom: '1px solid var(--border)', padding: '10px 20px' }}>
        <div style={{ maxWidth: 'var(--container)', margin: '0 auto', fontSize: 12, color: 'var(--text-muted)', display: 'flex', gap: 6, flexWrap: 'wrap' }}>
          Home<span>›</span>
          Blog<span>›</span>
          <span>केदारनाथ पहली बार 2026</span>
        </div>
      </nav>

      <article style={{ maxWidth: 900, margin: '0 auto', padding: '40px 20px 60px' }}>
        <div style={{ fontSize: 12, color: 'var(--text-muted)', marginBottom: 20, textAlign: 'right' }}>🗓️ <strong>Last updated:</strong> May 21, 2026 · By Shiv Ganga Travels</div>

        <div style={{ background: 'var(--navy)', borderRadius: 14, padding: '20px 24px', marginBottom: 28 }}>
          <div style={{ color: '#FFD166', fontSize: 13, fontWeight: 700, marginBottom: 10 }}>केदारनाथ — जरूरी जानकारी एक नज़र में</div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(160px,1fr))', gap: 10 }}>
            {[['ऊंचाई','3,583 मीटर'],['ट्रेक','गौरीकुंड से 16 km'],['समय','5-7 घंटे'],['कपाट खुले','22 अप्रैल 2026'],['कपाट बंद','11 नवंबर 2026'],['BSNL नेटवर्क','ऊपर जरूरी']].map(([k,v]) => (
              <div key={k}><div style={{ fontSize: 10.5, color: 'rgba(255,255,255,0.5)', marginBottom: 2 }}>{k}</div><div style={{ fontWeight: 700, fontSize: 13.5, color: '#FFD166' }}>{v}</div></div>
            ))}
          </div>
        </div>

        <p style={p}>हर सीजन में हमें ऐसे सैकड़ों फोन आते हैं — "भैया, पहली बार केदारनाथ जा रहे हैं, क्या-क्या पता होना चाहिए?" इस लेख में हम आपको वो 18 गलतियाँ बताएंगे जो नए यात्री सबसे ज्यादा करते हैं।</p>

        <h2 style={{ ...h2, marginTop: 8 }}>18 गलतियाँ जो बिल्कुल मत करना</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginBottom: 28 }}>
          {mistakes.map(([title, detail], i) => (
            <div key={i} style={{ display: 'flex', gap: 14, background: i < 3 ? 'rgba(216,90,48,0.05)' : '#fff', borderRadius: 10, padding: '13px 16px', border: `1px solid ${i < 3 ? '#F5C4B3' : 'var(--border)'}` }}>
              <div style={{ width: 32, height: 32, borderRadius: '50%', background: i < 3 ? '#D85A30' : 'var(--navy)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontWeight: 800, fontSize: 12, flexShrink: 0 }}>{i+1}</div>
              <div style={{ flex: 1 }}>
                <div style={{ fontWeight: 700, fontSize: 14, color: 'var(--navy)', marginBottom: 4 }}>{title}</div>
                <div style={{ fontSize: 13.5, color: '#475569', lineHeight: 1.7 }}>{detail}</div>
              </div>
            </div>
          ))}
        </div>

        <h2 style={h2}>केदारनाथ ट्रेक — घंटे दर घंटे</h2>
        <div style={{ overflowX: 'auto', marginBottom: 24 }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 13.5 }}>
            <thead><tr style={{ background: 'var(--navy)' }}>{['पड़ाव','गौरीकुंड से दूरी','सुविधाएं'].map(h => (<th key={h} style={{ padding: '10px 12px', textAlign: 'left', color: '#fff', fontWeight: 700, fontSize: 12 }}>{h}</th>))}</tr></thead>
            <tbody>
              {[['जंगलचट्टी','4 km','चाय, पानी'],['भीमबली','7 km','मैगी, विश्राम'],['लिनचोली','11 km','खाना, पानी'],['रुद्रा पॉइंट','14 km','आखिरी विश्राम'],['केदारनाथ','16 km','मंदिर, होटल']].map(([stop,dist,fac],i) => (
                <tr key={stop} style={{ borderBottom:'1px solid var(--border)', background: i===4?'rgba(29,158,117,0.06)':i%2===0?'#fff':'var(--bg)' }}>
                  <td style={{ padding:'9px 12px', fontWeight: i===4?700:400, color:'var(--navy)' }}>{stop}</td>
                  <td style={{ padding:'9px 12px', fontWeight:600, color:'var(--navy)' }}>{dist}</td>
                  <td style={{ padding:'9px 12px', color:'#475569', fontSize:13 }}>{fac}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 style={h2}>कब जाएं — महीने के हिसाब से</h2>
        <div style={{ overflowX: 'auto', marginBottom: 24 }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 13 }}>
            <thead><tr style={{ background: 'var(--navy)' }}>{['महीना','मौसम','भीड़','सिफारिश'].map(h => (<th key={h} style={{ padding: '10px 12px', textAlign: 'left', color: '#fff', fontWeight: 700, fontSize: 12 }}>{h}</th>))}</tr></thead>
            <tbody>
              {[
                ['मई (अंत)','8-18°C, साफ','मध्यम','✅ अच्छा'],
                ['जुलाई-अगस्त','बरसात, landslide','—','❌ मत जाएं'],
                ['सितंबर','साफ मौसम','कम','✅✅ सबसे अच्छा'],
                ['अक्टूबर','ठंडा, शानदार','बहुत कम','✅✅ सबसे अच्छा'],
              ].map(([month,weather,crowd,rec],i) => (
                <tr key={month} style={{ borderBottom:'1px solid var(--border)', background: i%2===0?'#fff':'var(--bg)' }}>
                  <td style={{ padding:'9px 12px', fontWeight:600, color:'var(--navy)' }}>{month}</td>
                  <td style={{ padding:'9px 12px', color:'#475569' }}>{weather}</td>
                  <td style={{ padding:'9px 12px', color:'#475569' }}>{crowd}</td>
                  <td style={{ padding:'9px 12px', fontWeight:700, color: rec.includes('❌')?'#D85A30':'#1D9E75' }}>{rec}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* ── Mid-article conversion CTA ── */}
        <BlogCTA variant="inline" intent="kedarnath" />

        <div style={{ background: 'var(--navy)', borderRadius: 16, padding: '28px 24px', textAlign: 'center', marginTop: 32 }}>
          <h3 style={{ color: '#fff', fontFamily: 'var(--font-display)', fontSize: '1.4rem', marginBottom: 10 }}>हमारे साथ केदारनाथ जाएं — ₹6,499 से</h3>
          <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: 14, marginBottom: 8 }}>✅ VIP दर्शन शामिल · ✅ अनुभवी पहाड़ी ड्राइवर · ✅ 24/7 WhatsApp support</p>
          <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: 14, marginBottom: 20 }}>3 रात / 4 दिन · रजिस्ट्रेशन हम करते हैं · ऑक्सीजन + First Aid हर गाड़ी में</p>
          <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href={`https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent('Namaste! Kedarnath Yatra 2026 book karni hai. Please details bhejein.')}`} target="_blank" rel="nofollow noopener noreferrer" style={{ background: '#25D366', color: '#fff', padding: '12px 24px', borderRadius: 9, fontWeight: 700, fontSize: 14, textDecoration: 'none' }}>💬 अभी Book करें</a>
            🏔️ Packages देखें →
          </div>
        </div>

        <div style={{ borderTop: '1px solid var(--border)', paddingTop: 24, marginTop: 32 }}>
          <div style={{ fontWeight: 700, fontSize: 13.5, color: 'var(--navy)', marginBottom: 12 }}>और पढ़ें</div>
          <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
            {[['रजिस्ट्रेशन कैसे करें','/blog/char-dham-registration-hindi'],['पैकिंग लिस्ट','/blog/char-dham-packing-list-hindi'],['चार धाम खर्चा','/blog/char-dham-yatra-kitna-kharcha'],['Kedarnath Trek Guide','/blog/kedarnath-trek-guide']].map(([l,h]) => (
              <Link key={h} href={h} style={{ background: 'var(--bg)', border: '1px solid var(--border)', color: 'var(--navy)', padding: '8px 16px', borderRadius: 8, fontSize: 13, fontWeight: 600, textDecoration: 'none' }}>{l} →</Link>
            ))}
          </div>
        </div>
      
        {/* ── End-of-article booking CTA ── */}
        <BlogCTA variant="footer" intent="kedarnath" />
</article>
    </>
  );
}
