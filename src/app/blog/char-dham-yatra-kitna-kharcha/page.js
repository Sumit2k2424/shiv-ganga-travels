import Link from 'next/link';
import { SITE } from '@/data/packages';
import BlogCTA from '@/components/BlogCTA';
import BlogAuthor from '@/components/BlogAuthor';

export const metadata = {
  title: 'चार धाम यात्रा 2026 में कितना खर्चा आता है? — प्रति व्यक्ति पूरा हिसाब',
  description: 'हरिद्वार से चार धाम यात्रा 2026 में 1 व्यक्ति का खर्चा ₹21,000 से शुरू। गाड़ी, होटल, खाना, घोड़ा, पंजीकरण — हर चीज़ का अलग-अलग हिसाब हिंदी में।',
  keywords: ['चार धाम यात्रा 2026 खर्चा', 'char dham yatra kitna kharcha 2026', 'हरिद्वार से चार धाम यात्रा कितने रुपये', 'char dham yatra cost hindi', 'चार धाम यात्रा प्रति व्यक्ति खर्च'],
  alternates: { canonical: `${SITE.baseUrl}/blog/char-dham-yatra-kitna-kharcha` },
  openGraph: { title: 'चार धाम यात्रा 2026 में कितना पैसा लगता है? — हरिद्वार से पूरा खर्चा', description: 'हरिद्वार से चार धाम यात्रा 2026 में 1 आदमी का खर्चा ₹21,000 से शुरू। गाड़ी, होटल, खाना, पंजीकरण — सब का अलग-अलग हिसाब।', url: `${SITE.baseUrl}/blog/char-dham-yatra-kitna-kharcha`, type: 'article' },
    images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: 'चार धाम यात्रा 2026 में कितना खर्चा आता है? हरिद्वार से पूरा हिसाब | Shiv Ganga Travels' }],
};

function Schema() {
  const faq = {
    '@context': 'https://schema.org', '@type': 'FAQPage',
    mainEntity: [
      { '@type': 'Question', name: 'चार धाम यात्रा में कितना पैसा लगता है?', acceptedAnswer: { '@type': 'Answer', text: 'हरिद्वार से चार धाम यात्रा 2026 में प्रति व्यक्ति ₹21,000 से ₹28,000 तक खर्चा होता है। इसमें गाड़ी, होटल, खाना, VIP दर्शन और गाइड शामिल हैं। केदारनाथ घोड़ा (₹3,500–4,500) अलग से लग सकता है।' } },
      { '@type': 'Question', name: 'क्या चार धाम यात्रा रजिस्ट्रेशन मुफ्त है?', acceptedAnswer: { '@type': 'Answer', text: 'हाँ, 2026 में चार धाम यात्रा का पंजीकरण बिल्कुल मुफ्त है। registrationandtouristcare.uk.gov.in पर ऑनलाइन करें — एक भी रुपया नहीं लगता।' } },
      { '@type': 'Question', name: 'क्या सितंबर में चार धाम यात्रा सस्ती होती है?', acceptedAnswer: { '@type': 'Answer', text: 'हाँ — सितंबर-अक्टूबर में होटल 30-40% सस्ते, भीड़ कम, घोड़ा आसानी से मिलता है। हम सितंबर-अक्टूबर में जाने की खास सलाह देते हैं।' } },
    ],
  };
  const article = { '@context': 'https://schema.org', '@type': 'Article', headline: 'चार धाम यात्रा 2026 में कितना खर्चा आता है?', inLanguage: 'hi', author: {
        '@type': 'Person',
        name: 'Sumit Mishra',
        jobTitle: 'Operations Manager, Shiv Ganga Travels',
        url: `${SITE.baseUrl}/about`,
        sameAs: ['https://www.linkedin.com/in/sumit-mishra-863734171/', 'https://www.facebook.com/sumi2112'],
      }, datePublished: '2026-05-01', dateModified: '2026-05-14', publisher: { '@type': 'Organization', name: SITE.name }, mainEntityOfPage: { '@type': 'WebPage', '@id': `${SITE.baseUrl}/blog/char-dham-yatra-kitna-kharcha` } };
  const bc = { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: SITE.baseUrl }, { '@type': 'ListItem', position: 2, name: 'Blog', item: `${SITE.baseUrl}/blog` }, { '@type': 'ListItem', position: 3, name: 'चार धाम यात्रा खर्चा 2026', item: `${SITE.baseUrl}/blog/char-dham-yatra-kitna-kharcha` }] };
  return (<><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faq) }}/><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(article) }}/><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(bc) }}/></>);
}

const h2 = { fontFamily: 'var(--font-display)', fontSize: 'clamp(1.25rem,3vw,1.75rem)', fontWeight: 700, color: 'var(--navy)', marginBottom: 12, marginTop: 36 };
const h3 = { fontSize: '1.1rem', fontWeight: 700, color: 'var(--navy)', marginBottom: 8, marginTop: 20 };
const p  = { fontSize: 15.5, color: '#334155', lineHeight: 1.9, marginBottom: 16 };

export default function CharDhamKharcha() {
  return (
    <>
      <Schema/>
      <section style={{ background: 'linear-gradient(145deg,var(--navy) 0%,#1A3E75 60%,var(--teal) 100%)', padding: '52px 20px 40px', textAlign: 'center' }}>
        <div style={{ maxWidth: 800, margin: '0 auto' }}>
          <span style={{ background: 'rgba(232,146,10,0.18)', color: '#FFD166', fontSize: 11, fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', padding: '5px 16px', borderRadius: 100, display: 'inline-block', marginBottom: 14 }}>💰 खर्चे का पूरा हिसाब · 2026</span>
          <h1 style={{ color: '#fff', fontFamily: 'var(--font-display)', fontSize: 'clamp(1.7rem,4vw,2.6rem)', fontWeight: 700, marginBottom: 14 }}>चार धाम यात्रा 2026 में कितना पैसा लगता है?</h1>
          <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: 15, lineHeight: 1.7 }}>गाड़ी · होटल · खाना · पंजीकरण · केदारनाथ घोड़ा · सब कुछ अलग-अलग</p>
        </div>
      </section>

      <nav style={{ background: 'var(--bg)', borderBottom: '1px solid var(--border)', padding: '10px 20px' }}>
        <div style={{ maxWidth: 'var(--container)', margin: '0 auto', fontSize: 12, color: 'var(--text-muted)', display: 'flex', gap: 6, flexWrap: 'wrap' }}>
          Home<span>›</span>
          Blog<span>›</span>
          <span>चार धाम यात्रा खर्चा 2026</span>
        </div>
      </nav>

      <article style={{ maxWidth: 900, margin: '0 auto', padding: '40px 20px 60px' }}>

        {/* Author byline — E-E-A-T signal */}
        <BlogAuthor variant="top" author="sumit" />
        <div style={{ fontSize: 12, color: 'var(--text-muted)', marginBottom: 20, textAlign: 'right' }}>🗓️ <strong>Last updated:</strong> {SITE.lastUpdated} · By Shiv Ganga Travels</div>

        {/* Quick answer box */}
        <div style={{ background: 'var(--navy)', borderRadius: 14, padding: '20px 24px', marginBottom: 28 }}>
          <div style={{ color: '#FFD166', fontSize: 13, fontWeight: 700, marginBottom: 10 }}>एक नज़र में — चार धाम यात्रा 2026 कुल खर्चा</div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(150px,1fr))', gap: 10 }}>
            {[['पैकेज (9N/10D)','₹21,000–₹30,000'],['केदारनाथ घोड़ा','₹3,500–₹4,500'],['पंजीकरण','मुफ्त (₹0)'],['ट्रेन दिल्ली–हरिद्वार','₹200–₹700'],['10 दिन खाने-पीने का','₹1,500–₹3,000'],['कुल (बजट यात्री)','₹22,000–₹28,000']].map(([k,v]) => (
              <div key={k}><div style={{ fontSize: 10.5, color: 'rgba(255,255,255,0.5)', marginBottom: 2 }}>{k}</div><div style={{ fontWeight: 700, fontSize: 13.5, color: '#FFD166' }}>{v}</div></div>
            ))}
          </div>
        </div>

        <p style={p}>जब भी घर में चार धाम यात्रा की बात होती है, पहला सवाल यही उठता है — <strong>"कितना पैसा लगेगा?"</strong> और यह सवाल बिल्कुल सही है। इस लेख में हम आपको पूरा सच बताएंगे — हर मद का हिसाब, कोई छुपा खर्चा नहीं। शिव गंगा ट्रेवल्स 2010 से 50,000+ तीर्थयात्रियों को सेवा दे रहा है।</p>

        <h2 style={h2}>यात्रा के प्रकार के अनुसार खर्चा</h2>
        <div style={{ overflowX: 'auto', marginBottom: 28 }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 13.5 }}>
            <thead><tr style={{ background: 'var(--navy)' }}>{['यात्रा का प्रकार','खर्चा (प्रति व्यक्ति)','दिन','क्या शामिल'].map(h => (<th key={h} style={{ padding: '10px 12px', textAlign: 'left', color: '#fff', fontWeight: 700, fontSize: 12 }}>{h}</th>))}</tr></thead>
            <tbody>
              {[
                ['बजट पैकेज','₹21,000','10-11 दिन','साझा टेम्पो, बजट होटल, खाना, VIP दर्शन'],
                ['डीलक्स पैकेज','₹30,000','11-12 दिन','प्राइवेट इनोवा, 3-स्टार होटल, गाइड'],
                ['सीनियर स्पेशल','₹24,500','12-13 दिन','घोड़ा शुल्क शामिल, ग्राउंड फ्लोर कमरा'],
                ['हेलिकॉप्टर','₹85,000','5-6 दिन','सभी 4 धाम हेलिकॉप्टर से, VIP दर्शन'],
              ].map(([type,price,days,inc],i) => (
                <tr key={type} style={{ borderBottom:'1px solid var(--border)', background: i%2===0?'#fff':'var(--bg)' }}>
                  <td style={{ padding:'10px 12px', fontWeight:600, color:'var(--navy)' }}>{type}</td>
                  <td style={{ padding:'10px 12px', fontWeight:800, color:'#1D9E75', whiteSpace:'nowrap' }}>{price}</td>
                  <td style={{ padding:'10px 12px', color:'#475569', fontSize:13 }}>{days}</td>
                  <td style={{ padding:'10px 12px', color:'#475569', fontSize:13 }}>{inc}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p style={{ ...p, fontSize: 13.5, background: 'rgba(29,158,117,0.08)', padding: '12px 16px', borderRadius: 8, borderLeft: '3px solid #1D9E75' }}>
          <strong>शिव गंगा ट्रेवल्स का बेसिक पैकेज ₹21,000 से शुरू होता है</strong> — इसमें गाड़ी, होटल, खाना, गाइड और VIP दर्शन सब शामिल हैं। कोई छुपा खर्चा नहीं।
        </p>

        <h2 style={h2}>हर मद का अलग-अलग हिसाब</h2>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginBottom: 24 }}>
          {[
            { icon:'🚗', item:'गाड़ी का खर्चा (पूरी यात्रा)', cost:'पैकेज में शामिल', detail:'हरिद्वार से पूरा सर्किट ~1,100 km है। इनोवा क्रिस्टा अलग से बुक करें तो ₹28,000–32,000। पैकेज में यह शामिल होता है।' },
            { icon:'🏨', item:'होटल (10 रातें, बजट)', cost:'₹4,000–₹8,000', detail:'साधारण होटल डबल रूम ₹400–800/रात। पीक सीजन (मई) में दाम दोगुने। पैकेज में पहले से बुक होता है।' },
            { icon:'🍱', item:'खाना (10 दिन)', cost:'₹3,000–₹5,000', detail:'पहाड़ों में दाल-चावल ₹80–150/थाली। पैकेज में नाश्ता+रात का खाना शामिल होता है।' },
            { icon:'📋', item:'पंजीकरण (Registration)', cost:'मुफ्त (₹0)', detail:'2026 में उत्तराखंड सरकार ने पंजीकरण शुल्क पूरी तरह हटा दिया। registrationandtouristcare.uk.gov.in पर करें।' },
            { icon:'🐴', item:'केदारनाथ घोड़ा (एक तरफ)', cost:'₹3,500–₹4,500', detail:'गौरीकुंड से 16 km के लिए। 60+ उम्र के लिए जरूरी। हमारे सीनियर पैकेज में शामिल।' },
            { icon:'🐴', item:'यमुनोत्री घोड़ा (एक तरफ)', cost:'₹1,800–₹2,500', detail:'जानकी चट्टी से 6 km के लिए। वैकल्पिक लेकिन बुजुर्गों के लिए सलाहनीय।' },
            { icon:'🙏', item:'VIP दर्शन', cost:'₹150–₹500/व्यक्ति', detail:'बिना VIP के 4-8 घंटे लाइन। हमारे सभी पैकेज में VIP दर्शन शामिल है — अलग से देने की जरूरत नहीं।' },
            { icon:'💵', item:'व्यक्तिगत खर्चे', cost:'₹1,500–₹3,000', detail:'प्रसाद, चाय-नाश्ता, टिप्स, स्मृति चिह्न, दवाइयां।' },
          ].map(({ icon, item, cost, detail }) => (
            <div key={item} style={{ display: 'flex', gap: 14, background: '#fff', borderRadius: 10, padding: '13px 16px', border: '1px solid var(--border)', flexWrap: 'wrap' }}>
              <div style={{ minWidth: 220 }}>
                <div style={{ fontWeight: 700, fontSize: 13.5, color: 'var(--navy)' }}>{icon} {item}</div>
                <div style={{ fontWeight: 800, fontSize: 15, color: '#1D9E75' }}>{cost}</div>
              </div>
              <div style={{ fontSize: 13.5, color: '#475569', lineHeight: 1.7, flex: 1, minWidth: 200 }}>{detail}</div>
            </div>
          ))}
        </div>

        <h2 style={h2}>असली उदाहरण — 4 लोगों की फैमिली का पूरा खर्चा</h2>
        <p style={p}><strong>रामपुर (UP) से एक परिवार — 4 लोग, मई 2025</strong></p>
        <div style={{ overflowX: 'auto', marginBottom: 24 }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 13.5 }}>
            <thead><tr style={{ background: 'var(--navy)' }}>{['मद','खर्चा'].map(h => (<th key={h} style={{ padding: '10px 12px', textAlign: 'left', color: '#fff', fontWeight: 700, fontSize: 12 }}>{h}</th>))}</tr></thead>
            <tbody>
              {[
                ['रामपुर से हरिद्वार ट्रेन (4 लोग, return)','₹4,800'],
                ['शिव गंगा ट्रेवल्स पैकेज (₹21,000 × 4)','₹78,000'],
                ['प्रसाद और पूजा','₹3,000'],
                ['माँ के लिए घोड़ा (केदारनाथ + यमुनोत्री)','₹8,000'],
                ['छोटे-मोटे खर्चे','₹2,500'],
                ['कुल','₹96,300'],
                ['प्रति व्यक्ति औसत','₹24,075'],
              ].map(([item,cost],i) => (
                <tr key={item} style={{ borderBottom:'1px solid var(--border)', background: i>=5?'rgba(29,158,117,0.08)':i%2===0?'#fff':'var(--bg)' }}>
                  <td style={{ padding:'9px 12px', fontWeight: i>=5?700:400, color:'var(--navy)' }}>{item}</td>
                  <td style={{ padding:'9px 12px', fontWeight:700, color: i>=5?'#1D9E75':'var(--navy)' }}>{cost}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* ── Mid-article conversion CTA ── */}
        <BlogCTA variant="inline" intent="cost" />

        <h2 style={h2}>सीधे ऑपरेटर vs एजेंट — कितना फर्क पड़ता है?</h2>
        <div style={{ overflowX: 'auto', marginBottom: 24 }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 13.5 }}>
            <thead><tr style={{ background: 'var(--navy)' }}>{['बुकिंग का तरीका','प्रति व्यक्ति','कमीशन'].map(h => (<th key={h} style={{ padding: '10px 12px', textAlign: 'left', color: '#fff', fontWeight: 700, fontSize: 12 }}>{h}</th>))}</tr></thead>
            <tbody>
              {[
                ['MakeMyTrip','₹29,000–₹32,000','15–20%'],
                ['Thrillophilia','₹24,000–₹27,000','12–18%'],
                ['लोकल एजेंट (बिचौलिया)','₹22,000–₹25,000','8–15%'],
                ['शिव गंगा ट्रेवल्स (सीधे)','₹21,000','0% (शून्य)'],
              ].map(([ch,price,comm],i) => (
                <tr key={ch} style={{ borderBottom:'1px solid var(--border)', background: i===3?'rgba(29,158,117,0.06)':i%2===0?'#fff':'var(--bg)' }}>
                  <td style={{ padding:'10px 12px', fontWeight: i===3?800:600, color:'var(--navy)' }}>{ch}{i===3 && <span style={{ background:'rgba(29,158,117,0.15)', color:'#1D9E75', fontSize:10, fontWeight:700, padding:'2px 7px', borderRadius:20, marginLeft:8 }}>सबसे सस्ता</span>}</td>
                  <td style={{ padding:'10px 12px', fontWeight:800, color: i===3?'#1D9E75':'var(--navy)' }}>{price}</td>
                  <td style={{ padding:'10px 12px', color: i===3?'#1D9E75':'#D85A30', fontWeight:600 }}>{comm}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 style={h2}>अक्सर पूछे जाने वाले सवाल</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginBottom: 28 }}>
          {[
            ['क्या ₹10,000 में चार धाम यात्रा हो सकती है?','नहीं। ₹10,000 में सिर्फ गाड़ी का किराया भी नहीं निकलता। जो इतने में करने का दावा करते हैं, वे या तो झूठ बोलते हैं या धर्मशाला में रहते और खुद खाना बनाते हैं।'],
            ['क्या चार धाम में ATM मिलते हैं?','हाँ — उत्तरकाशी, रुद्रप्रयाग, बद्रीनाथ में। लेकिन नेटवर्क की वजह से अक्सर बंद रहते हैं। ₹20,000 नकद जरूर साथ रखें।'],
            ['सितंबर-अक्टूबर में कितना सस्ता पड़ता है?','होटल 30-40% सस्ते, भीड़ कम, मौसम साफ। हम इसी समय जाने की खास सलाह देते हैं।'],
          ].map(([q,a]) => (
            <div key={q} style={{ background: '#fff', borderRadius: 10, padding: '14px 18px', border: '1px solid var(--border)' }}>
              <div style={{ fontWeight: 700, fontSize: 14, color: 'var(--navy)', marginBottom: 6 }}>❓ {q}</div>
              <div style={{ fontSize: 13.5, color: '#475569', lineHeight: 1.7 }}>{a}</div>
            </div>
          ))}
        </div>

        <div style={{ background: 'var(--navy)', borderRadius: 16, padding: '28px 24px', textAlign: 'center', marginTop: 32 }}>
          <h3 style={{ color: '#fff', fontFamily: 'var(--font-display)', fontSize: '1.4rem', marginBottom: 10 }}>अभी Free Quote लें — 2 घंटे में जवाब</h3>
          <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: 14, marginBottom: 20 }}>अपनी तारीख, शहर और ग्रुप का साइज बताएं — हम पूरा खर्चे का हिसाब भेजते हैं। कोई बाध्यता नहीं।</p>
          <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href={`https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent('Namaste! Char Dham Yatra 2026 ka kharcha jaanna hai. Please quote karein.')}`} target="_blank" rel="nofollow noopener noreferrer" style={{ background: '#25D366', color: '#fff', padding: '12px 24px', borderRadius: 9, fontWeight: 700, fontSize: 14, textDecoration: 'none' }}>💬 WhatsApp पर पूछें</a>
            🧮 खर्चा Calculator →
          </div>
        </div>

        <div style={{ borderTop: '1px solid var(--border)', paddingTop: 24, marginTop: 32 }}>
          <div style={{ fontWeight: 700, fontSize: 13.5, color: 'var(--navy)', marginBottom: 12 }}>और पढ़ें</div>
          <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
            {[['बुजुर्गों के लिए चार धाम','/blog/bujurg-char-dham-yatra'],['रजिस्ट्रेशन कैसे करें','/blog/char-dham-registration-hindi'],['कब जाएं?','/blog/char-dham-kab-jayen'],['पैकिंग लिस्ट','/blog/char-dham-packing-list-hindi'],['All Packages','/packages']].map(([l,h]) => (
              <Link key={h} href={h} style={{ background: 'var(--bg)', border: '1px solid var(--border)', color: 'var(--navy)', padding: '8px 16px', borderRadius: 8, fontSize: 13, fontWeight: 600, textDecoration: 'none' }}>{l} →</Link>
            ))}
          </div>
        </div>
      
        {/* ── End-of-article booking CTA ── */}
        <BlogCTA variant="footer" intent="cost" />
</article>
    </>
  );
}
