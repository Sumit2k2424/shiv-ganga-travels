import Link from 'next/link';
import { SITE } from '@/data/packages';
import BlogCTA from '@/components/BlogCTA';
import BlogAuthor from '@/components/BlogAuthor';

export const metadata = {
  title: 'बुजुर्गों के लिए चार धाम यात्रा 2026 — घोड़ा, पालकी और हेलिकॉप्टर गाइड',
  description: '60-80 साल के बुजुर्ग भी आराम से कर सकते हैं चार धाम यात्रा। घोड़ा, पालकी, हेलिकॉप्टर विकल्प, मेडिकल सर्टिफिकेट, और Special Senior Package ₹24,500 — सब हिंदी में।',
  keywords: ['बुजुर्गों के लिए चार धाम यात्रा 2026', 'वरिष्ठ नागरिक चार धाम', 'char dham yatra for senior citizens hindi', 'बड़े उम्र में चार धाम', 'चार धाम पालकी बुजुर्ग', 'senior citizen char dham hindi'],
  alternates: { canonical: `${SITE.baseUrl}/blog/bujurg-char-dham-yatra` },
  openGraph: { title: 'बुजुर्ग माँ-बाप को चार धाम यात्रा करानी है? — 12 जरूरी बातें', description: '60-80 साल के बुजुर्ग भी कर सकते हैं चार धाम यात्रा। घोड़ा, पालकी, हेलिकॉप्टर — सब जानकारी।', url: `${SITE.baseUrl}/blog/bujurg-char-dham-yatra`, type: 'article' },
    images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: 'बुजुर्गों के लिए चार धाम यात्रा 2026 — कैसे करें, क्या सावधानी बरतें | Shiv Ganga Travels' }],
};

function Schema() {
  const faq = {
    '@context': 'https://schema.org', '@type': 'FAQPage',
    mainEntity: [
      { '@type': 'Question', name: 'क्या 70-80 साल के बुजुर्ग चार धाम यात्रा कर सकते हैं?', acceptedAnswer: { '@type': 'Answer', text: 'हाँ — घोड़ा, पालकी और हेलिकॉप्टर की मदद से 80 साल तक के बुजुर्ग भी चार धाम यात्रा कर सकते हैं। डॉक्टर का फिटनेस सर्टिफिकेट जरूरी है (55+ उम्र के लिए)।' } },
      { '@type': 'Question', name: 'बुजुर्गों के लिए केदारनाथ में क्या विकल्प हैं?', acceptedAnswer: { '@type': 'Answer', text: 'केदारनाथ के 16 km ट्रेक के लिए बुजुर्गों के पास तीन विकल्प हैं: घोड़ा (₹3,500–4,500 एक तरफ), पालकी (₹8,000–12,000 RT), या हेलिकॉप्टर (₹7,500–9,500 एक तरफ)। हेलिकॉप्टर ह्रदय रोगियों के लिए सबसे सुरक्षित है।' } },
      { '@type': 'Question', name: 'बुजुर्गों के लिए कौन सा महीना सबसे अच्छा है?', acceptedAnswer: { '@type': 'Answer', text: 'सितंबर का पहला हफ्ता सबसे अच्छा है — कम भीड़, सुहावना मौसम, घोड़ा-पालकी आसानी से मिलते हैं।' } },
    ],
  };
  const article = { '@context': 'https://schema.org', '@type': 'Article', headline: 'बुजुर्गों के लिए चार धाम यात्रा 2026', inLanguage: 'hi', author: {
        '@type': 'Person',
        name: 'Sumit Mishra',
        jobTitle: 'Co-Founder & Co-Founder & Operations Manager, Shiv Ganga Travels',
        url: `${SITE.baseUrl}/about`,
        sameAs: ['https://www.linkedin.com/in/sumit-mishra-863734171/', 'https://www.facebook.com/sumi2112'],
      }, datePublished: '2026-05-01', dateModified: '2026-05-14', publisher: { '@type': 'Organization', name: SITE.name }, mainEntityOfPage: { '@type': 'WebPage', '@id': `${SITE.baseUrl}/blog/bujurg-char-dham-yatra` } };
  const bc = { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: SITE.baseUrl }, { '@type': 'ListItem', position: 2, name: 'Blog', item: `${SITE.baseUrl}/blog` }, { '@type': 'ListItem', position: 3, name: 'बुजुर्गों के लिए चार धाम यात्रा', item: `${SITE.baseUrl}/blog/bujurg-char-dham-yatra` }] };
  return (<><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faq) }}/><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(article) }}/><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(bc) }}/></>);
}

const h2 = { fontFamily: 'var(--font-display)', fontSize: 'clamp(1.25rem,3vw,1.75rem)', fontWeight: 700, color: 'var(--navy)', marginBottom: 12, marginTop: 36 };
const h3 = { fontSize: '1.1rem', fontWeight: 700, color: 'var(--navy)', marginBottom: 8, marginTop: 20 };
const p  = { fontSize: 15.5, color: '#334155', lineHeight: 1.9, marginBottom: 16 };

export default function BujurgCharDham() {
  return (
    <>
      <Schema/>
      <section style={{ background: 'linear-gradient(145deg,var(--navy) 0%,#1A3E75 60%,var(--teal) 100%)', padding: '52px 20px 40px', textAlign: 'center' }}>
        <div style={{ maxWidth: 800, margin: '0 auto' }}>
          <span style={{ background: 'rgba(232,146,10,0.18)', color: '#FFD166', fontSize: 11, fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', padding: '5px 16px', borderRadius: 100, display: 'inline-block', marginBottom: 14 }}>👴 सीनियर यात्री गाइड · 2026</span>
          <h1 style={{ color: '#fff', fontFamily: 'var(--font-display)', fontSize: 'clamp(1.7rem,4vw,2.6rem)', fontWeight: 700, marginBottom: 14 }}>बुजुर्ग माँ-बाप को चार धाम यात्रा करानी है?</h1>
          <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: 15, lineHeight: 1.7 }}>यह 12 बातें पहले जान लें — पछताएंगे नहीं</p>
        </div>
      </section>

      <nav style={{ background: 'var(--bg)', borderBottom: '1px solid var(--border)', padding: '10px 20px' }}>
        <div style={{ maxWidth: 'var(--container)', margin: '0 auto', fontSize: 12, color: 'var(--text-muted)', display: 'flex', gap: 6, flexWrap: 'wrap' }}>
          Home<span>›</span>
          Blog<span>›</span>
          <span>बुजुर्गों के लिए चार धाम यात्रा</span>
        </div>
      </nav>

      <article style={{ maxWidth: 900, margin: '0 auto', padding: '40px 20px 60px' }}>

        {/* Author byline — E-E-A-T signal */}
        <BlogAuthor variant="top" author="sumit" />
        <div style={{ fontSize: 12, color: 'var(--text-muted)', marginBottom: 20, textAlign: 'right' }}>🗓️ <strong>Last updated:</strong> May 21, 2026 · By Shiv Ganga Travels</div>

        <p style={{ ...p, fontStyle: 'italic', background: 'rgba(15,43,91,0.05)', padding: '16px 20px', borderRadius: 10, borderLeft: '3px solid var(--navy)' }}>रमेश जी, उम्र 72 साल, बरेली से आए थे। बेटे ने कहा था "उम्र हो गई है, पहाड़ पर मत जाओ।" लेकिन वे नहीं माने। मई 2024 में हमारे साथ चार धाम गए — केदारनाथ में घोड़े पर बैठकर पहुँचे, आँखों में आँसू थे। लौटकर उन्होंने फोन किया — <strong>"बेटा, जिंदगी की सबसे बड़ी खुशी मिली।"</strong></p>

        <p style={p}>अगर आप भी अपने माँ-बाप का यह सपना पूरा करना चाहते हैं — तो यह लेख उनके लिए लिखा गया है।</p>

        <div style={{ background: 'var(--navy)', borderRadius: 14, padding: '20px 24px', marginBottom: 28 }}>
          <div style={{ color: '#FFD166', fontSize: 13, fontWeight: 700, marginBottom: 10 }}>2026 में बुजुर्गों के लिए नए नियम</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            {['55+ साल के सभी यात्रियों का बेस कैंप पर स्वास्थ्य परीक्षण अनिवार्य','ह्रदय रोग, डायबिटीज, सांस की बीमारी वालों को डॉक्टर का फिटनेस सर्टिफिकेट चाहिए','रात 10 बजे के बाद पहाड़ी रास्तों पर गाड़ियां नहीं चलतीं'].map(r => (
              <div key={r} style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}><span style={{ color: '#FFD166', flexShrink: 0, marginTop: 2 }}>⚠️</span><span style={{ color: 'rgba(255,255,255,0.85)', fontSize: 13.5 }}>{r}</span></div>
            ))}
          </div>
        </div>

        <h2 style={h2}>केदारनाथ के लिए विकल्प — 16 km ट्रेक के बदले</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(200px,1fr))', gap: 12, marginBottom: 24 }}>
          {[
            { icon:'🐴', title:'घोड़ा / खच्चर', cost:'₹3,500–₹4,500', dir:'एक तरफ', note:'सबसे किफायती। पीक में सुबह 5:30 बजे बुक कराएं।', color:'#1D9E75' },
            { icon:'🛕', title:'पालकी (डंडी)', cost:'₹8,000–₹12,000', dir:'राउंड ट्रिप', note:'4-6 व्यक्ति उठाते हैं। जिन्हें घोड़े पर डर लगे।', color:'#BA7517' },
            { icon:'🚁', title:'हेलिकॉप्टर', cost:'₹7,500–₹9,500', dir:'एक तरफ', note:'7 मिनट में केदारनाथ। ह्रदय रोगियों के लिए सबसे सुरक्षित।', color:'#533AB7' },
          ].map(({ icon, title, cost, dir, note, color }) => (
            <div key={title} style={{ background: '#fff', borderRadius: 14, padding: '18px', border: '1px solid var(--border)', borderTop: `3px solid ${color}` }}>
              <div style={{ fontSize: 28, marginBottom: 8 }}>{icon}</div>
              <div style={{ fontWeight: 700, fontSize: 14.5, color: 'var(--navy)', marginBottom: 4 }}>{title}</div>
              <div style={{ fontWeight: 900, fontSize: 20, color, marginBottom: 4 }}>{cost}</div>
              <div style={{ fontSize: 12, color: '#64748b', marginBottom: 8 }}>{dir}</div>
              <div style={{ fontSize: 12.5, color: '#475569', lineHeight: 1.6 }}>{note}</div>
            </div>
          ))}
        </div>

        <h2 style={h2}>12 जरूरी बातें — परिवार को पहले जाननी चाहिए</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginBottom: 28 }}>
          {[
            ['1', 'सीधे ऑपरेटर से जाएं, एजेंट से नहीं', 'बुजुर्गों की यात्रा में मेडिकल इमरजेंसी और रूट बदलाव आम बात है। जमीन पर मौजूद टीम ही काम आती है — एजेंट नहीं।'],
            ['2', 'घोड़ा/पालकी पहले से बुक करें', 'पीक सीजन में सुबह 9 बजे तक घोड़े की बुकिंग खत्म। हमारे पैकेज में एडवांस में होती है।'],
            ['3', 'ऊंचाई की बीमारी से सावधान रहें', 'केदारनाथ 3,583 मीटर पर है। ऑक्सीजन कम होती है। हमारी हर गाड़ी में ऑक्सीजन सिलेंडर और फर्स्ट एड होता है।'],
            ['4', 'यात्रा से पहले ये जांचें जरूर करवाएं', 'ब्लड प्रेशर, ब्लड शुगर, ECG (60+), Hemoglobin — सभी टेस्ट 2 हफ्ते पहले करवाएं।'],
            ['5', 'नियमित दवाइयां extra 3 दिन की अधिक लाएं', 'BP, Sugar, Thyroid — सब + Crocin, Combiflam, ORS, Digene, Moov।'],
            ['6', 'कमरे में ग्राउंड फ्लोर माँगें', 'हम अपने सीनियर पैकेज में Ground Floor कमरे की प्राथमिकता देते हैं — सीढ़ियां चढ़ने की परेशानी नहीं।'],
            ['7', 'बद्रीनाथ और गंगोत्री — बिल्कुल आसान', 'इन दोनों धामों में गाड़ी सीधे मंदिर तक जाती है। कोई ट्रेक नहीं।'],
            ['8', 'शुद्ध सात्विक भोजन', 'हमारे पैकेज में शुद्ध शाकाहारी, Jain option भी। पहाड़ों में तला-भुना न खाएं।'],
            ['9', 'ट्रेकिंग जूते जरूरी हैं', 'साधारण चप्पल पहाड़ पर खतरनाक। Anti-slip ट्रेकिंग जूते लाएं — ₹500–1,500 में मिलते हैं।'],
            ['10', 'डॉक्टर का Certificate बनवा लें', '55+ सभी यात्रियों के लिए 2026 में अनिवार्य। शहर के किसी भी MBBS डॉक्टर से।'],
            ['11', 'यात्रा बीमा जरूर करवाएं', '₹500–1,000 में मेडिकल इमरजेंसी और हेलिकॉप्टर रेस्क्यू भी कवर।'],
            ['12', 'परिवार का कोई युवा साथ जाए', 'ऑनलाइन बुकिंग, रजिस्ट्रेशन, आपातकाल — युवा साथी बेहद जरूरी।'],
          ].map(([num, title, detail]) => (
            <div key={num} style={{ display: 'flex', gap: 14, background: '#fff', borderRadius: 10, padding: '14px 16px', border: '1px solid var(--border)' }}>
              <div style={{ width: 32, height: 32, borderRadius: '50%', background: 'var(--navy)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#FFD166', fontWeight: 800, fontSize: 13, flexShrink: 0 }}>{num}</div>
              <div style={{ flex: 1 }}>
                <div style={{ fontWeight: 700, fontSize: 14, color: 'var(--navy)', marginBottom: 4 }}>{title}</div>
                <div style={{ fontSize: 13.5, color: '#475569', lineHeight: 1.7 }}>{detail}</div>
              </div>
            </div>
          ))}
        </div>

        <h2 style={h2}>शिव गंगा ट्रेवल्स — Senior Citizen Special Package</h2>
        <div style={{ background: 'rgba(29,158,117,0.06)', borderRadius: 14, padding: '20px 24px', border: '1px solid #9FE1CB', marginBottom: 28 }}>
          <div style={{ fontWeight: 800, fontSize: 20, color: '#1D9E75', marginBottom: 4 }}>₹24,500 प्रति व्यक्ति</div>
          <div style={{ fontSize: 13, color: '#475569', marginBottom: 14 }}>12 रात / 13 दिन (अतिरिक्त दिन — थकान के लिए)</div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(200px,1fr))', gap: 8 }}>
            {['केदारनाथ + यमुनोत्री में घोड़ा शुल्क शामिल','Ground Floor कमरे की प्राथमिकता','पालकी सेवा (जरूरत पड़ने पर)','हर गाड़ी में ऑक्सीजन + First Aid','VIP दर्शन — लाइन में नहीं खड़ा होना','शुद्ध सात्विक भोजन (Jain option)','24/7 WhatsApp support','ऑक्सीजन + First Aid हर वाहन में'].map(f => (
              <div key={f} style={{ display: 'flex', gap: 8, alignItems: 'flex-start', fontSize: 13 }}><span style={{ color: '#1D9E75', flexShrink: 0 }}>✅</span><span style={{ color: '#334155' }}>{f}</span></div>
            ))}
          </div>

        {/* ── Mid-article conversion CTA ── */}
        <BlogCTA variant="inline" intent="info" />
        </div>

        <h2 style={h2}>अक्सर पूछे जाने वाले सवाल</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginBottom: 28 }}>
          {[
            ['क्या 80 साल के बुजुर्ग चार धाम यात्रा कर सकते हैं?','हाँ। हमने 82 साल के श्रद्धालुओं को केदारनाथ दर्शन करवाए हैं — हेलिकॉप्टर और पालकी की मदद से। डॉक्टर की अनुमति जरूरी है।'],
            ['क्या डायबिटीज के मरीज यात्रा कर सकते हैं?','हाँ — नियमित दवा लेते रहें, शुगर की नियमित जांच करें, और हमारे गाइड को पहले बता दें।'],
            ['अगर यात्रा के बीच में तबीयत खराब हो जाए?','हमारे ड्राइवर और गाइड को हेल्थ इमरजेंसी की ट्रेनिंग है। आसपास के अस्पताल की जानकारी हमारे पास रहती है। हेलिकॉप्टर रेस्क्यू भी उपलब्ध।'],
          ].map(([q,a]) => (
            <div key={q} style={{ background: '#fff', borderRadius: 10, padding: '14px 18px', border: '1px solid var(--border)' }}>
              <div style={{ fontWeight: 700, fontSize: 14, color: 'var(--navy)', marginBottom: 6 }}>❓ {q}</div>
              <div style={{ fontSize: 13.5, color: '#475569', lineHeight: 1.7 }}>{a}</div>
            </div>
          ))}
        </div>

        <div style={{ background: 'var(--navy)', borderRadius: 16, padding: '28px 24px', textAlign: 'center', marginTop: 32 }}>
          <h3 style={{ color: '#fff', fontFamily: 'var(--font-display)', fontSize: '1.4rem', marginBottom: 10 }}>माँ-बाप का सपना पूरा करें</h3>
          <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: 14, marginBottom: 20 }}>"हर श्रद्धालु जो हमारी गाड़ी में बैठता है, वह आस्था, परिवार और जीवन भर का सपना लेकर आता है।" — धनेश चंद्र मिश्रा, संस्थापक (सेवानिवृत्त सेना अधिकारी)</p>
          <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href={`https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent('Namaste! Senior citizen ke liye Char Dham Yatra 2026 package chahiye. Please guide karein.')}`} target="_blank" rel="nofollow noopener noreferrer" style={{ background: '#25D366', color: '#fff', padding: '12px 24px', borderRadius: 9, fontWeight: 700, fontSize: 14, textDecoration: 'none' }}>💬 WhatsApp पर पूछें</a>
            <a href={`tel:${SITE.phone}`} style={{ background: '#E8920A', color: '#fff', padding: '12px 24px', borderRadius: 9, fontWeight: 700, fontSize: 14, textDecoration: 'none' }}>📞 अभी Call करें</a>
          </div>
        </div>

        <div style={{ borderTop: '1px solid var(--border)', paddingTop: 24, marginTop: 32 }}>
          <div style={{ fontWeight: 700, fontSize: 13.5, color: 'var(--navy)', marginBottom: 12 }}>और पढ़ें</div>
          <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
            {[['चार धाम खर्चा','/blog/char-dham-yatra-kitna-kharcha'],['पैकिंग लिस्ट','/blog/char-dham-packing-list-hindi'],['कब जाएं?','/blog/char-dham-kab-jayen'],['Senior Package','/packages/char-dham-yatra-senior-citizen-12n-13d']].map(([l,h]) => (
              <Link key={h} href={h} style={{ background: 'var(--bg)', border: '1px solid var(--border)', color: 'var(--navy)', padding: '8px 16px', borderRadius: 8, fontSize: 13, fontWeight: 600, textDecoration: 'none' }}>{l} →</Link>
            ))}
          </div>
        </div>
      
        {/* ── End-of-article booking CTA ── */}
        <BlogCTA variant="footer" intent="info" />
</article>
    </>
  );
}
