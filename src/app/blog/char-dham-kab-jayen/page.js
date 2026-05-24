import Link from 'next/link';
import { SITE } from '@/data/packages';
import BlogCTA from '@/components/BlogCTA';
import BlogAuthor from '@/components/BlogAuthor';

export const metadata = {
  title: 'चार धाम यात्रा कब जाएं 2026 — मई, सितंबर या अक्टूबर? पूरी जानकारी',
  description: 'चार धाम यात्रा 2026 के लिए सबसे अच्छा महीना कौन सा है? मई-जून में भीड़, सितंबर-अक्टूबर में शांति — हर महीने का मौसम, तापमान और सलाह हिंदी में।',
  keywords: ['चार धाम यात्रा कब जाएं 2026', 'char dham yatra best time hindi', 'चार धाम यात्रा का सही समय', 'char dham yatra kab jayen', 'चार धाम यात्रा मौसम 2026'],
  alternates: { canonical: `${SITE.baseUrl}/blog/char-dham-kab-jayen` },
  openGraph: { title: 'चार धाम यात्रा 2026 में कब जाएं? — महीने के हिसाब से पूरा गाइड', description: 'मई, जून, सितंबर, अक्टूबर — हर महीने का सच बताया। मौसम, भीड़, खर्चा — सब कुछ हिंदी में।', url: `${SITE.baseUrl}/blog/char-dham-kab-jayen`, type: 'article' },
    images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: 'चार धाम यात्रा के लिए सबसे अच्छा समय कौन सा है? 2026 Guide हिंदी में | Shiv Ganga Travels' }],
};

function Schema() {
  const faq = {
    '@context': 'https://schema.org', '@type': 'FAQPage',
    mainEntity: [
      { '@type': 'Question', name: 'चार धाम यात्रा के लिए सबसे अच्छा महीना कौन सा है?', acceptedAnswer: { '@type': 'Answer', text: 'सितंबर और अक्टूबर — कम भीड़, साफ मौसम, 30-40% सस्ते होटल। मई का अंतिम हफ्ता भी अच्छा है। जुलाई-अगस्त में बिल्कुल मत जाएं।' } },
      { '@type': 'Question', name: 'क्या जुलाई-अगस्त में चार धाम यात्रा हो सकती है?', acceptedAnswer: { '@type': 'Answer', text: 'नहीं — जुलाई-अगस्त में मानसून होता है। Landslide का खतरा रहता है। 2013 की केदारनाथ त्रासदी मानसून में ही हुई थी।' } },
      { '@type': 'Question', name: 'बुजुर्गों के लिए कौन सा महीना सबसे अच्छा है?', acceptedAnswer: { '@type': 'Answer', text: 'सितंबर का पहला हफ्ता — कम भीड़, सुहावना मौसम, घोड़ा-पालकी आसानी से मिलती है।' } },
    ],
  };
  const article = { '@context': 'https://schema.org', '@type': 'Article', headline: 'चार धाम यात्रा 2026 में कब जाएं?', inLanguage: 'hi', author: {
        '@type': 'Person',
        name: 'Sumit Mishra',
        jobTitle: 'Co-Founder & Co-Founder & Operations Manager, Shiv Ganga Travels',
        url: `${SITE.baseUrl}/about`,
        sameAs: ['https://www.linkedin.com/in/sumit-mishra-863734171/', 'https://www.facebook.com/sumi2112'],
      }, datePublished: '2026-05-01', dateModified: '2026-05-14', publisher: { '@type': 'Organization', name: SITE.name }, mainEntityOfPage: { '@type': 'WebPage', '@id': `${SITE.baseUrl}/blog/char-dham-kab-jayen` } };
  const bc = { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: SITE.baseUrl }, { '@type': 'ListItem', position: 2, name: 'Blog', item: `${SITE.baseUrl}/blog` }, { '@type': 'ListItem', position: 3, name: 'चार धाम यात्रा कब जाएं', item: `${SITE.baseUrl}/blog/char-dham-kab-jayen` }] };
  return (<><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faq) }}/><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(article) }}/><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(bc) }}/></>);
}

const h2 = { fontFamily: 'var(--font-display)', fontSize: 'clamp(1.25rem,3vw,1.75rem)', fontWeight: 700, color: 'var(--navy)', marginBottom: 12, marginTop: 36 };
const p  = { fontSize: 15.5, color: '#334155', lineHeight: 1.9, marginBottom: 16 };

export default function CharDhamKabJayen() {
  const months = [
    { month: 'अप्रैल (अंत)', temp: '5-15°C', crowd: 'बहुत ज्यादा', rec: '⚠️ सोचें', color: '#BA7517', bg: '#FAEEDA',
      pros: ['Opening ceremony','बर्फ से ढके पहाड़'], cons: ['भारी भीड़','होटल नहीं मिलते','बहुत ठंड'] },
    { month: 'मई (पहला हफ्ता)', temp: '8-20°C', crowd: 'सबसे ज्यादा', rec: '⚠️ 4 माह पहले बुक', color: '#BA7517', bg: '#FAEEDA',
      pros: ['मौसम साफ','रास्ते खुले'], cons: ['सोनप्रयाग 4-6 घंटे jam','होटल 3x महंगे','घोड़े नहीं मिलते'] },
    { month: 'मई (अंत, 20-31)', temp: '10-22°C', crowd: 'मध्यम', rec: '✅ अच्छा', color: '#1D9E75', bg: '#E1F5EE',
      pros: ['बुरांश के फूल','साफ मौसम','परिवार के लिए अच्छा'], cons: ['अभी भी कुछ भीड़'] },
    { month: 'जून (पहला)', temp: '15-25°C', crowd: 'मध्यम', rec: '✅ ठीक', color: '#1D9E75', bg: '#E1F5EE',
      pros: ['कम भीड़','साफ आसमान'], cons: ['15 जून के बाद मानसून शुरू'] },
    { month: 'जुलाई-अगस्त', temp: 'बारिश', crowd: 'कम', rec: '❌ बिल्कुल मत जाएं', color: '#D85A30', bg: '#FAECE7',
      pros: [], cons: ['Landslide','रास्ते बंद','2013 त्रासदी मानसून में','गाड़ियां फँसती हैं'] },
    { month: 'सितंबर', temp: '12-22°C', crowd: 'कम', rec: '✅✅ सबसे अच्छा', color: '#1D9E75', bg: '#E1F5EE',
      pros: ['बारिश के बाद हरियाली','झरने पूरे जोश में','होटल 30-40% सस्ते','VIP दर्शन आसान','Photography के लिए बेस्ट'], cons: ['कभी-कभी हल्की बारिश'] },
    { month: 'अक्टूबर', temp: '5-18°C', crowd: 'बहुत कम', rec: '✅✅ सबसे अच्छा', color: '#1D9E75', bg: '#E1F5EE',
      pros: ['साफ नीला आसमान','बर्फ से ढकी चोटियां','सबसे कम भीड़','सबसे सस्ता'], cons: ['रात को 0-5°C — गर्म कपड़े जरूरी'] },
  ];

  return (
    <>
      <Schema/>
      <section style={{ background: 'linear-gradient(145deg,var(--navy) 0%,#1A3E75 60%,var(--teal) 100%)', padding: '52px 20px 40px', textAlign: 'center' }}>
        <div style={{ maxWidth: 800, margin: '0 auto' }}>
          <span style={{ background: 'rgba(232,146,10,0.18)', color: '#FFD166', fontSize: 11, fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', padding: '5px 16px', borderRadius: 100, display: 'inline-block', marginBottom: 14 }}>📅 यात्रा का सही समय · 2026</span>
          <h1 style={{ color: '#fff', fontFamily: 'var(--font-display)', fontSize: 'clamp(1.7rem,4vw,2.6rem)', fontWeight: 700, marginBottom: 14 }}>चार धाम यात्रा 2026 में कब जाएं?</h1>
          <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: 15, lineHeight: 1.7 }}>हर महीने का सच — मौसम, भीड़, खर्चा और आपके लिए सबसे सही समय</p>
        </div>
      </section>

      <nav style={{ background: 'var(--bg)', borderBottom: '1px solid var(--border)', padding: '10px 20px' }}>
        <div style={{ maxWidth: 'var(--container)', margin: '0 auto', fontSize: 12, color: 'var(--text-muted)', display: 'flex', gap: 6, flexWrap: 'wrap' }}>
          Home<span>›</span>
          Blog<span>›</span>
          <span>चार धाम यात्रा कब जाएं</span>
        </div>
      </nav>

      <article style={{ maxWidth: 900, margin: '0 auto', padding: '40px 20px 60px' }}>

        {/* Author byline — E-E-A-T signal */}
        <BlogAuthor variant="top" author="sumit" />
        <div style={{ fontSize: 12, color: 'var(--text-muted)', marginBottom: 20, textAlign: 'right' }}>🗓️ <strong>Last updated:</strong> May 21, 2026 · By Shiv Ganga Travels</div>

        <div style={{ background: 'var(--navy)', borderRadius: 14, padding: '20px 24px', marginBottom: 28 }}>
          <div style={{ color: '#FFD166', fontSize: 13, fontWeight: 700, marginBottom: 10 }}>चार धाम 2026 — कपाट खुलने और बंद होने की तारीखें</div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(180px,1fr))', gap: 10 }}>
            {[['यमुनोत्री','19 अप्रैल — 11 नवंबर'],['गंगोत्री','19 अप्रैल — 10 नवंबर'],['केदारनाथ','22 अप्रैल — 11 नवंबर'],['बद्रीनाथ','23 अप्रैल — 23 नवंबर']].map(([k,v]) => (
              <div key={k}><div style={{ fontSize: 10.5, color: 'rgba(255,255,255,0.5)', marginBottom: 2 }}>{k}</div><div style={{ fontWeight: 700, fontSize: 13, color: '#FFD166' }}>{v}</div></div>
            ))}
          </div>
        </div>

        <h2 style={{ ...h2, marginTop: 8 }}>महीने के हिसाब से पूरी जानकारी</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12, marginBottom: 28 }}>
          {months.map(({ month, temp, crowd, rec, color, bg, pros, cons }) => (
            <div key={month} style={{ background: '#fff', borderRadius: 12, padding: '16px 20px', border: `1px solid var(--border)`, borderLeft: `4px solid ${color}` }}>
              <div style={{ display: 'flex', gap: 12, alignItems: 'flex-start', flexWrap: 'wrap', marginBottom: 8 }}>
                <div style={{ flex: 1, minWidth: 150 }}>
                  <div style={{ fontWeight: 700, fontSize: 15, color: 'var(--navy)' }}>{month}</div>
                  <div style={{ fontSize: 12, color: '#64748b' }}>🌡️ {temp} · भीड़: {crowd}</div>
                </div>
                <span style={{ background: bg, color, fontSize: 12, fontWeight: 700, padding: '4px 12px', borderRadius: 100, whiteSpace: 'nowrap' }}>{rec}</span>
              </div>
              <div style={{ display: 'flex', gap: 20, flexWrap: 'wrap' }}>
                {pros.length > 0 && <div style={{ flex: 1, minWidth: 160 }}>
                  <div style={{ fontSize: 11, fontWeight: 700, color: '#1D9E75', marginBottom: 4 }}>✅ फायदे</div>
                  {pros.map(pr => <div key={pr} style={{ fontSize: 12.5, color: '#334155', padding: '2px 0' }}>• {pr}</div>)}
                </div>}
                {cons.length > 0 && <div style={{ flex: 1, minWidth: 160 }}>
                  <div style={{ fontSize: 11, fontWeight: 700, color: '#D85A30', marginBottom: 4 }}>❌ नुकसान</div>
                  {cons.map(cn => <div key={cn} style={{ fontSize: 12.5, color: '#334155', padding: '2px 0' }}>• {cn}</div>)}
                </div>}
              </div>
            </div>
          ))}
        </div>

        <h2 style={h2}>अलग-अलग लोगों के लिए अलग सुझाव</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(200px,1fr))', gap: 12, marginBottom: 28 }}>
          {[
            { icon:'🧓', who:'बुजुर्ग माँ-बाप के साथ', rec:'सितंबर पहला हफ्ता', why:'कम भीड़, घोड़ा आसानी से मिलता है' },
            { icon:'👨‍👩‍👦', who:'छोटे बच्चों के साथ', rec:'मई 20-31', why:'स्कूल छुट्टी, मौसम ठीक, ज्यादा ठंड नहीं' },
            { icon:'💼', who:'नौकरी वाले (10-12 दिन)', rec:'सितंबर/अक्टूबर', why:'कम भीड़ = कम समय बर्बाद' },
            { icon:'📸', who:'Photography पसंद है', rec:'अक्टूबर', why:'साफ आसमान, बर्फ से ढकी चोटियां' },
            { icon:'💰', who:'Budget tight है', rec:'सितंबर-अक्टूबर', why:'होटल 30-40% सस्ते' },
            { icon:'🔰', who:'पहली बार जा रहे हैं', rec:'सितंबर', why:'सब आसान, कम भीड़, ज्यादा शांति' },
          ].map(({ icon, who, rec, why }) => (
            <div key={who} style={{ background: '#fff', borderRadius: 12, padding: '16px', border: '1px solid var(--border)' }}>
              <div style={{ fontSize: 28, marginBottom: 8 }}>{icon}</div>
              <div style={{ fontWeight: 700, fontSize: 13, color: 'var(--navy)', marginBottom: 4 }}>{who}</div>
              <div style={{ fontWeight: 800, fontSize: 14, color: '#1D9E75', marginBottom: 4 }}>→ {rec}</div>
              <div style={{ fontSize: 12, color: '#64748b' }}>{why}</div>
            </div>          ))}

        {/* ── Mid-article conversion CTA ── */}
        <BlogCTA variant="inline" intent="info" />

        </div>

        <h2 style={h2}>अक्सर पूछे जाने वाले सवाल</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginBottom: 28 }}>
          {[
            ['Diwali के आसपास जाना कैसा?','नवंबर में मंदिर बंद होने वाले होते हैं। Closing ceremony देखना हो तो जाएं, लेकिन मौसम बहुत ठंडा।'],
            ['क्या September में बारिश होती है?','कभी-कभी हल्की बारिश। मानसून जैसी नहीं। रेनकोट साथ रखें।'],
            ['October में कितनी ठंड होती है?','रात को 0-5°C। सही ऊनी कपड़ों के साथ बिल्कुल ठीक।'],
          ].map(([q,a]) => (
            <div key={q} style={{ background: '#fff', borderRadius: 10, padding: '14px 18px', border: '1px solid var(--border)' }}>
              <div style={{ fontWeight: 700, fontSize: 14, color: 'var(--navy)', marginBottom: 6 }}>❓ {q}</div>
              <div style={{ fontSize: 13.5, color: '#475569', lineHeight: 1.7 }}>{a}</div>
            </div>
          ))}
        </div>

        <div style={{ background: 'var(--navy)', borderRadius: 16, padding: '28px 24px', textAlign: 'center', marginTop: 32 }}>
          <h3 style={{ color: '#fff', fontFamily: 'var(--font-display)', fontSize: '1.4rem', marginBottom: 10 }}>अभी Seats बुक करें — सितंबर-अक्टूबर</h3>
          <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: 14, marginBottom: 20 }}>सितंबर और अक्टूबर के batch जल्दी भरते हैं। WhatsApp पर अपनी तारीख और ग्रुप का साइज बताएं।</p>
          <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href={`https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent('Namaste! September/October 2026 Char Dham Yatra ke liye dates aur package jaanna hai.')}`} target="_blank" rel="nofollow noopener noreferrer" style={{ background: '#25D366', color: '#fff', padding: '12px 24px', borderRadius: 9, fontWeight: 700, fontSize: 14, textDecoration: 'none' }}>💬 Dates Check करें</a>
            🏔️ Packages देखें →
          </div>
        </div>

        <div style={{ borderTop: '1px solid var(--border)', paddingTop: 24, marginTop: 32 }}>
          <div style={{ fontWeight: 700, fontSize: 13.5, color: 'var(--navy)', marginBottom: 12 }}>और पढ़ें</div>
          <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
            {[['चार धाम खर्चा','/blog/char-dham-yatra-kitna-kharcha'],['रजिस्ट्रेशन कैसे करें','/blog/char-dham-registration-hindi'],['बुजुर्गों के लिए','/blog/bujurg-char-dham-yatra'],['Best Time (English)','/blog/best-time-char-dham']].map(([l,h]) => (
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
