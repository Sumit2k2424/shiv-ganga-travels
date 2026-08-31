import Link from 'next/link';
import { SITE } from '@/data/packages';
import BlogCTA from '@/components/BlogCTA';
import BlogAuthor from '@/components/BlogAuthor';
import BlogHero from '@/components/BlogHero';
import ReadingProgress from '@/components/ReadingProgress';
import BlogTOC from '@/components/BlogTOC';
import { h2, p } from "@/lib/prose";
import AnswerBox from '@/components/AnswerBox';

export const metadata = {
  title: { absolute: `चार धाम यात्रा रजिस्ट्रेशन ${SITE.season} | मोबाइल से कैसे करें | फ्री गाइड` },
  description: `चार धाम यात्रा ${SITE.season} रजिस्ट्रेशन मुफ्त — 9 आसान स्टेप। विश्वसनीय ऑपरेटर, 15+ वर्षों का अनुभव, तुरंत पुष्टि।`,
  keywords: [`चार धाम यात्रा रजिस्ट्रेशन ${SITE.season}`, 'char dham registration kaise kare', 'चार धाम ऑनलाइन रजिस्ट्रेशन', 'char dham yatra registration hindi', `चार धाम पंजीकरण ${SITE.season}`],
  alternates: { canonical: `${SITE.baseUrl}/blog/char-dham-registration-hindi` },
  openGraph: { title: `चार धाम यात्रा रजिस्ट्रेशन ${SITE.season} — मोबाइल से घर बैठे कैसे करें?`, description: 'ऑनलाइन रजिस्ट्रेशन मुफ्त। WhatsApp और website से करें। 9 आसान स्टेप हिंदी में।', url: `${SITE.baseUrl}/blog/char-dham-registration-hindi`, type: 'article', 
    images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: `चार धाम यात्रा रजिस्ट्रेशन ${SITE.season} — मोबाइल से घर बैठे कैसे करें?` }],
  },
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
      <ReadingProgress/>

      <BlogHero
        lang="hi"
        badge="📋 रजिस्ट्रेशन गाइड · 2026"
        title="चार धाम यात्रा रजिस्ट्रेशन 2026"
        dek="मोबाइल से घर बैठे करें — मुफ्त · 9 आसान स्टेप · हिंदी में"
        author="धनेश चंद्र मिश्रा"
        authorInitials="DM"
        updated="अपडेटेड 2026"
        readTime="5 मिनट"
        facts={[
          { label:"शुल्क", value:"मुफ्त (₹0)" },
          { label:"तरीके", value:"Website / WhatsApp" },
          { label:"जरूरी", value:"आधार कार्ड" },
          { label:"बिना पंजीकरण", value:"सोनप्रयाग से वापस" },
        ]}
      />

      <nav style={{ background: 'var(--bg)', borderBottom: '1px solid hsl(var(--border))', padding: '10px 20px' }}>
        <div style={{ maxWidth: 'var(--container)', margin: '0 auto', fontSize: 12, color: 'var(--text-muted)', display: 'flex', gap: 6, flexWrap: 'wrap' }}>
          <Link href="/" style={{ color:'var(--teal)', textDecoration:'none' }}>होम</Link><span>›</span>
          <Link href="/blog" style={{ color:'var(--teal)', textDecoration:'none' }}>ब्लॉग</Link><span>›</span>
          <span>चार धाम रजिस्ट्रेशन 2026</span>
        </div>
      </nav>

      <article className="blog-container" lang="hi" itemScope itemType="https://schema.org/Article">

        {/* Author byline — E-E-A-T signal */}
        <BlogAuthor variant="top" author="dhanesh" article={{"slug": "char-dham-registration-hindi", "title": "चार धाम यात्रा रजिस्ट्रेशन 2026: मोबाइल से कैसे करें", "description": "चार धाम यात्रा 2026 का ऑनलाइन रजिस्ट्रेशन मुफ्त है। WhatsApp और website से — 9 आसान steps में पूरी जानकारी हिंदी में। जरूरी दस्तावेज़ और 55+ उम्र के नियम।", "datePublished": "2025-08-15", "dateModified": "2026-06-20", "lang": "hi-IN"}} />

        <AnswerBox>
          <strong>चार धाम रजिस्ट्रेशन पूरी तरह मुफ़्त है और हर यात्री के लिए अनिवार्य है।</strong> registrationandtouristcare.uk.gov.in पर, Tourist Care Uttarakhand ऐप से, या WhatsApp पर +91-8394833833 नंबर पर &ldquo;Yatra&rdquo; लिखकर करें। हरिद्वार और ऋषिकेश में ऑफलाइन काउंटर भी हैं। 55 साल से ऊपर वालों को मेडिकल सर्टिफिकेट भी लगेगा। QR वाली पर्ची सोनप्रयाग चेकपोस्ट पर स्कैन होती है — प्रिंटआउट ज़रूर रखें।
        </AnswerBox>
        <div style={{ fontSize: 12, color: 'var(--text-muted)', marginBottom: 20, textAlign: 'right' }}>🗓️ <strong>Last updated:</strong> {SITE.lastUpdated} · By Shiv Ganga Travels</div>

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
            <div key={title} style={{ background: '#fff', borderRadius: 12, padding: '16px', border: '1px solid hsl(var(--border))', borderTop: `3px solid ${color}` }}>
              <div style={{ fontSize: 28, marginBottom: 8 }}>{icon}</div>
              <div style={{ fontWeight: 700, fontSize: 14.5, color: 'var(--navy)', marginBottom: 4 }}>{title}</div>
              <div style={{ fontSize: 12.5, color: '#475569', marginBottom: 4 }}>{sub}</div>
              <div style={{ fontSize: 12, color, fontWeight: 600 }}>{link}</div>
            </div>
          ))}
        </div>

        <BlogTOC title="इस गाइड में" items={[
          { id:"website-steps", label:"Website से — 9 Steps" },
          { id:"documents", label:"जरूरी दस्तावेज" },
          { id:"problems", label:"पोर्टल न चले तो क्या करें" },
          { id:"offline", label:"ऑफलाइन रजिस्ट्रेशन" },
          { id:"checkpost", label:"चेकपोस्ट पर क्या होता है" },
          { id:"faq", label:"सवाल-जवाब" },
        ]}/>

        <h2 id="website-steps" style={h2}>Website से रजिस्ट्रेशन — 9 Steps</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginBottom: 28 }}>
          {steps.map(([title, detail], i) => (
            <div key={i} style={{ display: 'flex', gap: 14, background: '#fff', borderRadius: 10, padding: '14px 16px', border: '1px solid hsl(var(--border))' }}>
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

        <h2 id="documents" style={h2}>जरूरी दस्तावेज</h2>
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
                <tr key={doc} style={{ borderBottom:'1px solid hsl(var(--border))', background: i%2===0?'#fff':'var(--bg)' }}>
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

        <h2 id="problems" style={h2}>पोर्टल न चले तो क्या करें</h2>
        <p style={p}>
          सीज़न शुरू होते ही रजिस्ट्रेशन पोर्टल पर भारी लोड आ जाता है, और अप्रैल-मई में साइट धीमी चलना या
          OTP देर से आना आम बात है। ज्यादातर लोग यहीं घबराकर किसी एजेंट को पैसे दे देते हैं — जबकि
          <strong> रजिस्ट्रेशन पूरी तरह मुफ्त है</strong> और इसके तीन अलग रास्ते हैं।
        </p>
        <div style={{ background:'#fff', borderRadius:12, border:'1px solid hsl(var(--border))', overflowX:'auto', marginBottom:18 }}>
          <table style={{ width:'100%', borderCollapse:'collapse', fontSize:13.5, minWidth:560 }}>
            <caption className="sr-only">रजिस्ट्रेशन में आने वाली आम दिक्कतें और उनका हल</caption>
            <thead>
              <tr style={{ background:'var(--navy)' }}>
                {['दिक्कत','क्या करें'].map(h => (
                  <th key={h} scope="col" style={{ padding:'10px 12px', textAlign:'left', color:'#fff', fontWeight:700, fontSize:12 }}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {[
                ['OTP नहीं आ रहा', 'वही नंबर इस्तेमाल करें जो आधार से लिंक है। 2-3 मिनट रुककर दोबारा try करें — बार-बार क्लिक करने से नंबर कुछ देर के लिए ब्लॉक हो जाता है।'],
                ['साइट खुल ही नहीं रही', 'सुबह 6-8 बजे या रात 11 बजे के बाद कोशिश करें, जब लोड कम रहता है। या WhatsApp वाला तरीका अपनाएं।'],
                ['फोटो अपलोड नहीं हो रही', 'फाइल का साइज कम करें और JPG फॉर्मेट में रखें। मोबाइल से खींची सादी फोटो भी चल जाती है।'],
                ['नाम की स्पेलिंग गलत हो गई', 'आधार से हूबहू मिलनी चाहिए। लॉगिन करके सुधारें — चेकपोस्ट पर नाम मिलान होता है।'],
                ['मेडिकल सर्टिफिकेट नहीं है', '55 साल से ऊपर वालों के लिए अनिवार्य है। किसी भी रजिस्टर्ड डॉक्टर से बन जाता है, बड़े अस्पताल की जरूरत नहीं।'],
                ['e-pass डाउनलोड नहीं हो रहा', 'लॉगिन करके "My Registrations" में जाएं। प्रिंट के साथ मोबाइल में स्क्रीनशॉट भी रख लें — ऊपर नेटवर्क नहीं मिलता।'],
              ].map(([a, b], i) => (
                <tr key={a} style={{ borderTop:'1px solid hsl(var(--border))', background: i%2===0 ? '#fff' : 'var(--bg)' }}>
                  <th scope="row" style={{ padding:'10px 12px', fontWeight:600, color:'var(--navy)', fontSize:13, textAlign:'left' }}>{a}</th>
                  <td style={{ padding:'10px 12px', color:'var(--text-mid)', fontSize:13 }}>{b}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 id="offline" style={h2}>ऑफलाइन और WhatsApp से रजिस्ट्रेशन</h2>
        <p style={p}>
          अगर वेबसाइट से नहीं हो रहा तो दो और तरीके हैं, और दोनों उतने ही वैध हैं।{' '}
          <strong>WhatsApp पर +91-8394833833</strong> नंबर पर सिर्फ &ldquo;Yatra&rdquo; लिखकर भेजें — वहीं से
          प्रक्रिया शुरू हो जाती है। दूसरा, <strong>हरिद्वार और ऋषिकेश</strong> में सरकारी काउंटर लगते हैं
          जहां मौके पर बायोमेट्रिक रजिस्ट्रेशन हो जाता है; यात्रा मार्ग पर कुछ और जगहों पर भी काउंटर होते हैं।
        </p>
        <p style={p}>
          ऑफलाइन काउंटर का एक नुकसान है — सीज़न में वहां लंबी लाइन लगती है, और कई बार दिन का कोटा पूरा हो
          जाता है। इसलिए घर से ही ऑनलाइन कर लेना सबसे आसान रहता है। हमारे पैकेज में आने वाले हर यात्री का
          रजिस्ट्रेशन हम खुद करते हैं, इसलिए आपको पोर्टल से जूझना नहीं पड़ता।
        </p>

        <h2 id="checkpost" style={h2}>चेकपोस्ट पर क्या होता है</h2>
        <p style={p}>
          रजिस्ट्रेशन सिर्फ कागजी औपचारिकता नहीं है — यह असल में जांचा जाता है। केदारनाथ के रास्ते पर{' '}
          <strong>सोनप्रयाग</strong> में और बाकी धामों के रास्तों पर भी पुलिस चेकपोस्ट हैं, जहां आपका QR कोड
          स्कैन होता है। बिना रजिस्ट्रेशन वाले यात्रियों को वहीं से वापस भेज दिया जाता है — हरिद्वार से आठ
          घंटे गाड़ी चलाने के बाद।
        </p>
        <p style={p}>
          दूसरी बात जो लोगों को नहीं पता — केदारनाथ में रोज़ाना यात्रियों की <strong>तय सीमा</strong> होती है
          (हाल के सीज़न में 18,000 तक), और खराब मौसम में यह और घटा दी जाती है। कोटा पूरा हो जाने पर सोनप्रयाग
          का बैरियर बंद कर दिया जाता है, चाहे आपके पास वैध रजिस्ट्रेशन ही क्यों न हो। इसीलिए जल्दी
          रजिस्टर करना और सुबह जल्दी निकलना दोनों मायने रखते हैं।
        </p>
        <p style={p}>
          एक और चीज साथ रखें — रजिस्ट्रेशन का <strong>प्रिंटआउट</strong>, सिर्फ मोबाइल पर भरोसा न करें।
          ऊपर के इलाकों में नेटवर्क नहीं मिलता और फोन की बैटरी ठंड में जल्दी खत्म होती है। ज्यादा जानकारी
          के लिए <Link href="/blog/char-dham-yatra-registration" style={{ color:'var(--teal)' }}>अंग्रेजी में पूरी रजिस्ट्रेशन गाइड</Link>{' '}
          और <Link href="/char-dham-yatra-emergency-contacts" style={{ color:'var(--teal)' }}>आपातकालीन नंबरों की सूची</Link> देखें।
        </p>

        <h2 id="faq" style={h2}>अक्सर पूछे जाने वाले सवाल</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginBottom: 28 }}>
          {[
            ['क्या रजिस्ट्रेशन हिंदी में होता है?','WhatsApp वाले option में Hindi निर्देश मिलते हैं। Website English में है।'],
            ['कितने दिन पहले करें?','कम से कम 7-10 दिन पहले। पीक सीजन में server slow होता है।'],
            ['क्या एक Registration पूरी family के लिए?','हाँ — एक में 10 लोगों तक जोड़ सकते हैं।'],
            ['एजेंट पैसे माँगें तो?','मना करें। रजिस्ट्रेशन मुफ्त है। खुद website पर करें।'],
          ].map(([q,a]) => (
            <div key={q} style={{ background: '#fff', borderRadius: 10, padding: '14px 18px', border: '1px solid hsl(var(--border))' }}>
              <div style={{ fontWeight: 700, fontSize: 14, color: 'var(--navy)', marginBottom: 6 }}>❓ {q}</div>
              <div style={{ fontSize: 13.5, color: '#475569', lineHeight: 1.7 }}>{a}</div>
            </div>
          ))}
        </div>

        <div style={{ background: 'rgba(29,158,117,0.08)', borderRadius: 14, padding: '20px 24px', border: '1px solid #9FE1CB', marginBottom: 28 }}>
          <div style={{ fontWeight: 700, fontSize: 14.5, color: '#0F6E56', marginBottom: 8 }}>✅ हमारे पैकेज में रजिस्ट्रेशन शामिल है</div>
          <p style={{ ...p, marginBottom: 0, color: '#334155', fontSize: 14 }}>शिव गंगा ट्रेवल्स के साथ जाने वाले सभी यात्रियों का रजिस्ट्रेशन <strong>हम करते हैं</strong> — बस Aadhaar की जानकारी भेजें, बाकी हम संभाल लेते हैं।</p>
        </div>

        <div style={{ borderTop: '1px solid hsl(var(--border))', paddingTop: 24, marginTop: 32 }}>
          <div style={{ fontWeight: 700, fontSize: 13.5, color: 'var(--navy)', marginBottom: 12 }}>और पढ़ें</div>
          <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
            {[['चार धाम खर्चा','/blog/char-dham-yatra-kitna-kharcha'],['केदारनाथ पहली बार','/blog/kedarnath-pehli-baar'],['पैकिंग लिस्ट','/blog/char-dham-packing-list-hindi'],['Registration Guide (English)','/blog/char-dham-yatra-registration']].map(([l,h]) => (
              <Link key={h} href={h} style={{ background: 'var(--bg)', border: '1px solid hsl(var(--border))', color: 'var(--navy)', padding: '8px 16px', borderRadius: 8, fontSize: 13, fontWeight: 600, textDecoration: 'none' }}>{l} →</Link>
            ))}
          </div>
        </div>
      
        {/* ── End-of-article booking CTA ── */}
        <BlogCTA variant="footer" intent="registration" />
</article>
    </>
  );
}
