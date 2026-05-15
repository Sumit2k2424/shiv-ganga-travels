import Link from 'next/link';
import { SITE } from '@/data/packages';

export const metadata = {
  title: 'चार धाम यात्रा पैकिंग लिस्ट 2026 — क्या ले जाएं, क्या छोड़ें — पूरी हिंदी लिस्ट',
  description: 'चार धाम यात्रा में क्या ले जाएं? कपड़े, दवाइयां, जूते, बर्तन — सब की लिस्ट हिंदी में। इसे print करें और घर से निकलने से पहले check करें।',
  keywords: ['चार धाम यात्रा में क्या ले जाएं','char dham yatra packing list hindi','चार धाम यात्रा सामान','char dham yatra kya le jayen'],
  alternates: { canonical: `${SITE.baseUrl}/blog/char-dham-packing-list-hindi` },
  openGraph: { title: 'चार धाम यात्रा पैकिंग लिस्ट 2026 — Print करके बैग में रख लो', description: 'कपड़े, दवाइयां, जूते, दस्तावेज — सब की पूरी हिंदी लिस्ट। घर से निकलने से पहले check करें।', url: `${SITE.baseUrl}/blog/char-dham-packing-list-hindi`, type: 'article' },
    images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: 'चार धाम यात्रा पैकिंग लिस्ट 2026 — क्या ले जाएं, क्या छोड़ें — पूरी हि | Shiv Ganga Travels' }],
};

function Schema() {
  const article = { '@context': 'https://schema.org', '@type': 'Article', headline: 'चार धाम यात्रा पैकिंग लिस्ट 2026', inLanguage: 'hi', author: { '@type': 'Organization', name: SITE.name, url: SITE.baseUrl }, datePublished: '2026-05-01', dateModified: '2026-05-14', publisher: { '@type': 'Organization', name: SITE.name }, mainEntityOfPage: { '@type': 'WebPage', '@id': `${SITE.baseUrl}/blog/char-dham-packing-list-hindi` } };
  const bc = { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: SITE.baseUrl }, { '@type': 'ListItem', position: 2, name: 'Blog', item: `${SITE.baseUrl}/blog` }, { '@type': 'ListItem', position: 3, name: 'चार धाम पैकिंग लिस्ट', item: `${SITE.baseUrl}/blog/char-dham-packing-list-hindi` }] };
  return (<><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(article) }}/><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(bc) }}/></>);
}

const h2 = { fontFamily: 'var(--font-display)', fontSize: 'clamp(1.25rem,3vw,1.75rem)', fontWeight: 700, color: 'var(--navy)', marginBottom: 12, marginTop: 36 };
const p  = { fontSize: 15.5, color: '#334155', lineHeight: 1.9, marginBottom: 16 };

function CheckList({ items, color = 'var(--navy)' }) {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(200px,1fr))', gap: 6, marginBottom: 20 }}>
      {items.map(([item, note]) => (
        <div key={item} style={{ display: 'flex', gap: 8, alignItems: 'flex-start', background: '#fff', borderRadius: 8, padding: '10px 12px', border: '1px solid var(--border)' }}>
          <span style={{ color, flexShrink: 0, fontSize: 14 }}>☐</span>
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: 13, fontWeight: 600, color: 'var(--navy)' }}>{item}</div>
            {note && <div style={{ fontSize: 11.5, color: '#64748b', marginTop: 2 }}>{note}</div>}
          </div>
        </div>
      ))}
    </div>
  );
}

export default function CharDhamPackingListHindi() {
  return (
    <>
      <Schema/>
      <section style={{ background: 'linear-gradient(145deg,var(--navy) 0%,#1A3E75 60%,var(--teal) 100%)', padding: '52px 20px 40px', textAlign: 'center' }}>
        <div style={{ maxWidth: 800, margin: '0 auto' }}>
          <span style={{ background: 'rgba(232,146,10,0.18)', color: '#FFD166', fontSize: 11, fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', padding: '5px 16px', borderRadius: 100, display: 'inline-block', marginBottom: 14 }}>🎒 पैकिंग गाइड · 2026</span>
          <h1 style={{ color: '#fff', fontFamily: 'var(--font-display)', fontSize: 'clamp(1.7rem,4vw,2.6rem)', fontWeight: 700, marginBottom: 14 }}>चार धाम यात्रा के लिए क्या-क्या सामान ले जाएं?</h1>
          <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: 15, lineHeight: 1.7 }}>यह लिस्ट Print करके बैग में रख लो — घर से निकलने से पहले एक बार check करना</p>
        </div>
      </section>

      <nav style={{ background: 'var(--bg)', borderBottom: '1px solid var(--border)', padding: '10px 20px' }}>
        <div style={{ maxWidth: 'var(--container)', margin: '0 auto', fontSize: 12, color: 'var(--text-muted)', display: 'flex', gap: 6, flexWrap: 'wrap' }}>
          <Link href="/" style={{ color: 'var(--navy)', textDecoration: 'none' }}>Home</Link><span>›</span>
          <Link href="/blog" style={{ color: 'var(--navy)', textDecoration: 'none' }}>Blog</Link><span>›</span>
          <span>चार धाम पैकिंग लिस्ट 2026</span>
        </div>
      </nav>

      <article style={{ maxWidth: 900, margin: '0 auto', padding: '40px 20px 60px' }}>
        <div style={{ fontSize: 12, color: 'var(--text-muted)', marginBottom: 20, textAlign: 'right' }}>🗓️ <strong>Last updated:</strong> May 2026 · By Shiv Ganga Travels</div>

        <div style={{ background: 'rgba(216,90,48,0.07)', borderRadius: 12, padding: '16px 20px', border: '1px solid #F5C4B3', marginBottom: 24 }}>
          <strong style={{ color: '#993C1D' }}>याद रखें:</strong><span style={{ color: '#334155', fontSize: 14 }}> 10-11 दिन की यात्रा। केदारनाथ में 16 km + यमुनोत्री में 6 km पैदल चलना है। <strong>जो उठाने में दर्द हो, वो घर छोड़ दो।</strong></span>
        </div>

        <h2 style={{ ...h2, marginTop: 8 }}>🧥 Part 1 — कपड़े</h2>
        <p style={{ ...p, fontSize: 14, marginBottom: 8 }}><strong>गर्म कपड़े (सबसे जरूरी)</strong> — केदारनाथ में रात को 2-5°C होती है, जून में भी</p>
        <CheckList color="#533AB7" items={[
          ['थर्मल इनर (ऊपर)','2 पीस'],['थर्मल इनर (नीचे)','2 पीस'],['ऊनी Sweater / Fleece','2'],
          ['मोटी Jacket','1'],['मफलर','1'],['ऊनी टोपी','1'],
          ['ऊनी दस्ताने','1 जोड़ी'],['मोटे मोजे','3-4 जोड़ी'],['रेनकोट (Disposable)','2 (₹30 में मिलते हैं)'],
        ]}/>
        <p style={{ ...p, fontSize: 14, marginBottom: 8 }}><strong>सामान्य कपड़े</strong></p>
        <CheckList items={[
          ['कुर्ता / शर्ट','4-5'],['पैजामा / ट्रैक पैंट','3'],['अंडरवियर / Baniyan','4-5'],
          ['साड़ी (अगर जरूरी हो)','सिर्फ 1-2 हल्की'],['सलवार-कमीज','2-3'],
        ]}/>
        <p style={{ ...p, fontSize: 14, marginBottom: 8 }}><strong>जूते</strong> — सबसे जरूरी</p>
        <CheckList color="#D85A30" items={[
          ['ट्रेकिंग जूते (Anti-slip)','1 जोड़ी — नए जूते मत लाएं'],['साधारण चप्पल','होटल के लिए'],['Rubber Slippers','मंदिर के लिए'],
        ]}/>

        <h2 style={h2}>💊 Part 2 — दवाइयां (Medical Kit)</h2>
        <div style={{ background: 'rgba(216,90,48,0.05)', borderRadius: 10, padding: '12px 16px', border: '1px solid #F5C4B3', marginBottom: 12, fontSize: 13.5, color: '#334155' }}>
          <strong>हमारी हर गाड़ी में ऑक्सीजन सिलेंडर और First Aid Kit होती है।</strong> फिर भी अपनी दवाइयां जरूर लाएं।
        </div>
        <CheckList color="#D85A30" items={[
          ['Paracetamol (Crocin/Dolo)','बुखार, सिरदर्द'],['Combiflam','दर्द, सूजन'],
          ['Diamox','Altitude Sickness (डॉक्टर की सलाह से)'],['ORS Packets','पानी की कमी, थकान'],
          ['Digene / Pudin Hara','पेट की गड़बड़ी'],['Avomine / Vomikind','उल्टी'],
          ['Moov / Volini Spray','पैरों में दर्द'],['Cough Syrup','सर्दी-खांसी'],
          ['Band-Aid + Betadine','घाव, कट'],['अपनी नियमित दवाएं','Extra 3 दिन की'],
        ]}/>

        <h2 style={h2}>🔦 Part 3 — Electronics</h2>
        <CheckList color="#533AB7" items={[
          ['Power Bank (20,000 mAh)','सबसे जरूरी — केदारनाथ में चार्जिंग नहीं'],
          ['Charging Cable + Adapter','1'],['BSNL SIM','पहाड़ों में जरूरी'],
          ['Torch / Headlamp','रात को'],['Extra Batteries','2-4'],
        ]}/>

        <h2 style={h2}>📦 Part 4 — जरूरी दस्तावेज</h2>
        <CheckList color="#1D9E75" items={[
          ['Aadhaar Card (original + copy)','हर यात्री का'],['E-Pass (Mobile + Print)','रजिस्ट्रेशन का'],
          ['Passport Size Photos (4-6)','जरूरत पड़ सकती है'],['Doctor Certificate','55+ उम्र के लिए अनिवार्य'],
          ['₹20,000+ नकद','ATM नहीं मिलते'],
        ]}/>

        <h2 style={h2}>🙏 Part 5 — पूजा सामग्री</h2>
        <CheckList items={[
          ['धोती / दुपट्टा','पूजा के लिए'],['रोली, चावल, फूल','घर से लाएं, सस्ता पड़ेगा'],
          ['Camphor (कपूर)','1 डिब्बी'],['माचिस','1-2'],
          ['प्रसाद (पेड़े/मिठाई)','थोड़ा'],['छोटी थैली','प्रसाद के लिए'],
        ]}/>

        <h2 style={h2}>🍎 Part 6 — खाने-पीने का सामान</h2>
        <CheckList color="#1D9E75" items={[
          ['पानी की बोतल (1L, Reusable)','2'],['Energy Bars / Dry Fruits','Cashew, Badam'],
          ['Glucose Biscuits','2-3 Packs'],['Dark Chocolate','ट्रेक पर Energy'],
          ['ORS Powder (Extra)','5-6 Packets'],['गुड़ या खजूर','जल्दी Energy'],
        ]}/>

        <h2 style={h2}>❌ यह सब घर पर छोड़ दो</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(200px,1fr))', gap: 8, marginBottom: 28 }}>
          {[
            ['5+ साड़ियां','ट्रेक में बहुत भारी'],['बड़ा सूटकेस','ट्रेक पर नहीं जाएगा'],
            ['High Heels / Fancy Shoes','पहाड़ पर खतरनाक'],['Laptop','जरूरी न हो तो'],
            ['Gold / Heavy Jewelry','खोने का डर'],['Non-veg खाना','तीर्थ यात्रा है'],
          ].map(([item, reason]) => (
            <div key={item} style={{ display: 'flex', gap: 8, background: 'rgba(216,90,48,0.05)', borderRadius: 8, padding: '10px 12px', border: '1px solid #F5C4B3' }}>
              <span style={{ color: '#D85A30', flexShrink: 0 }}>✗</span>
              <div><div style={{ fontSize: 13, fontWeight: 600, color: '#993C1D' }}>{item}</div><div style={{ fontSize: 12, color: '#64748b' }}>{reason}</div></div>
            </div>
          ))}
        </div>

        <h2 style={h2}>✅ Last Minute Checklist — घर से निकलने से 1 घंटे पहले</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(220px,1fr))', gap: 8, marginBottom: 28 }}>
          {['Aadhaar Card ✓','E-Pass (Mobile + Print) ✓','ऊनी कपड़े ✓','ट्रेकिंग जूते ✓','दवाइयां (Extra 3 दिन) ✓','Power Bank (Charged) ✓','BSNL SIM ✓','नकद ₹20,000+ ✓','Doctor Certificate (60+) ✓','रेनकोट ✓','Sunscreen + Sunglasses ✓'].map(item => (
            <div key={item} style={{ display: 'flex', gap: 8, background: 'rgba(29,158,117,0.06)', borderRadius: 8, padding: '10px 12px', border: '1px solid #9FE1CB', fontSize: 13, color: '#0F6E56', fontWeight: 600 }}>
              <span>✅</span>{item}
            </div>
          ))}
        </div>

        <div style={{ background: 'var(--navy)', borderRadius: 16, padding: '28px 24px', textAlign: 'center', marginTop: 32 }}>
          <h3 style={{ color: '#fff', fontFamily: 'var(--font-display)', fontSize: '1.4rem', marginBottom: 10 }}>हमारे साथ जाएं — सब पहले से तैयार मिलेगा</h3>
          <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: 14, marginBottom: 20 }}>होटल, रजिस्ट्रेशन, VIP दर्शन, ऑक्सीजन — सब हम संभालते हैं। आप बस यात्रा enjoy करें।</p>
          <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href={`https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent('Namaste! Char Dham Yatra 2026 book karni hai. Please packages bhejein.')}`} target="_blank" rel="nofollow noopener noreferrer" style={{ background: '#25D366', color: '#fff', padding: '12px 24px', borderRadius: 9, fontWeight: 700, fontSize: 14, textDecoration: 'none' }}>💬 Packages लें</a>
            <Link href="/packages" style={{ background: '#E8920A', color: '#fff', padding: '12px 24px', borderRadius: 9, fontWeight: 700, fontSize: 14, textDecoration: 'none' }}>🏔️ All Packages →</Link>
          </div>
        </div>

        <div style={{ borderTop: '1px solid var(--border)', paddingTop: 24, marginTop: 32 }}>
          <div style={{ fontWeight: 700, fontSize: 13.5, color: 'var(--navy)', marginBottom: 12 }}>और पढ़ें</div>
          <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
            {[['केदारनाथ पहली बार','/blog/kedarnath-pehli-baar'],['चार धाम खर्चा','/blog/char-dham-yatra-kitna-kharcha'],['कब जाएं?','/blog/char-dham-kab-jayen'],['Packing List (English)','/blog/char-dham-yatra-packing-list']].map(([l,h]) => (
              <Link key={h} href={h} style={{ background: 'var(--bg)', border: '1px solid var(--border)', color: 'var(--navy)', padding: '8px 16px', borderRadius: 8, fontSize: 13, fontWeight: 600, textDecoration: 'none' }}>{l} →</Link>
            ))}
          </div>
        </div>
      </article>
    </>
  );
}
