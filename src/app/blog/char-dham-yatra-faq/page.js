import Link from 'next/link';
import { SITE } from '@/data/packages';
import BlogCTA from '@/components/BlogCTA';
import BlogAuthor from '@/components/BlogAuthor';

export const metadata = {
  title: 'Char Dham Yatra FAQ 2026 – 50 Most-Asked Questions Answered by an Expert',
  description: '50 expert answers to the most common Char Dham Yatra questions: cost, registration, best time, medical requirements, senior citizens, helicopter, packing, and all new 2026 rules.',
  keywords: ['char dham yatra faq 2026', 'char dham yatra questions answers', 'char dham yatra 2026 questions', 'kedarnath yatra faq', 'char dham yatra common questions'],
  alternates: { canonical: `${SITE.baseUrl}/blog/char-dham-yatra-faq` },
  openGraph: {
    title: 'Char Dham Yatra FAQ 2026 – 50 Most-Asked Questions Answered by an Expert',
    description: '50 expert answers to the most asked Char Dham Yatra questions. Cost, registration, safety, packing, helicopter, senior citizens and more.',
    url: `${SITE.baseUrl}/blog/char-dham-yatra-faq`,
    type: 'article',
    images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: 'Char Dham Yatra FAQ 2026 — 50 Questions Answered by Experts | Shiv Ganga Travels' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Char Dham Yatra FAQ 2026 — 50 Questions Answered',
    description: '50 expert answers to the most asked Char Dham Yatra questions. Cost, registration, safety, packing, helicopter, senior citizens and more.',
    images: [{ url: '/opengraph-image', alt: 'Char Dham Yatra FAQ 2026 — 50 Questions Answered | Shiv Ganga Travels' }],
  },
};

// ── ALL 50 FAQs with citation-magnet specificity ──────────────
const FAQS = [
  // COST
  { cat:'Cost & Pricing', q:'How much does Char Dham Yatra cost per person in 2026?',
    a:'Char Dham Yatra costs between ₹19,500 and ₹85,000 per person in 2026 depending on the package type. A standard all-inclusive 9-night 10-day road package from Haridwar starts at ₹19,500 per person. Premium packages with better hotels cost ₹28,000–40,000. Helicopter packages covering all 4 dhams start at ₹85,000. These prices include AC vehicle, accommodation, all meals, guide, and VIP darshan assistance. According to Dhanesh Chandra Mishra, founder of Shiv Ganga Travels and a 15-year Char Dham operator: "The actual package cost rarely changes — what varies is what operators hide in the fine print. A transparent all-inclusive price from a direct operator is always cheaper than an agent price with commissions added."' },
  { cat:'Cost & Pricing', q:'What is included in a Char Dham Yatra package?',
    a:'A standard Char Dham Yatra package from Haridwar includes: (1) AC vehicle throughout — Innova Crysta or Tempo Traveller based on group size, (2) accommodation at all stops — Barkot, Uttarkashi, Guptkashi, Badrinath, (3) all meals — breakfast and dinner daily, (4) an experienced Garhwali guide, (5) biometric registration assistance, (6) oxygen cylinder in the vehicle, (7) VIP darshan arrangement where possible. Airfare, personal puja expenses, pony/palki charges, and helicopter upgrades are typically charged separately.' },
  { cat:'Cost & Pricing', q:'Are there hidden charges in Char Dham Yatra packages?',
    a:'Common hidden charges include: pony and palki fees at Kedarnath (₹3,000–6,000 per person one way), entry fees at some temples, personal puja offerings, porter charges for luggage beyond 5kg on the Kedarnath trek, and early check-in or late check-out hotel fees. At Shiv Ganga Travels we publish a complete cost breakdown before booking so pilgrims know exactly what is and is not included. As a rule: if a package price seems unusually low, ask specifically what is excluded.' },
  { cat:'Cost & Pricing', q:'How much does Kedarnath Yatra cost separately in 2026?',
    a:'A 3-night 4-day Kedarnath Yatra package from Haridwar costs between ₹6,499 and ₹12,000 per person in 2026 depending on hotel category. This includes Haridwar to Gaurikund transport, accommodation at Guptkashi or Sonprayag, meals, guide, and Kedarnath darshan assistance. The trek from Gaurikund to Kedarnath is 16 kilometres (one way). Pony hire costs ₹3,000–5,000 one way and helicopter costs ₹7,000–9,000 one way from Phata helipad, booked through IRCTC.' },
  { cat:'Cost & Pricing', q:'What is the cost of Char Dham Yatra by helicopter in 2026?',
    a:'Char Dham Yatra by helicopter costs ₹85,000–1,20,000 per person for a complete 4-dham helicopter package in 5 nights 6 days. This covers flights to Yamunotri, Gangotri, Kedarnath, and Badrinath helipads with luxury hotel stays. Kedarnath-only helicopter (Phata or Sersi helipad) costs ₹7,000–9,000 one way and must be booked through the IRCTC portal (irctc.co.in) as per 2026 rules. Same-day Kedarnath and Badrinath by helicopter from Haridwar costs approximately ₹18,000–22,000 per person.' },

  // PLANNING
  { cat:'Planning & Timing', q:'What is the best time to do Char Dham Yatra in 2026?',
    a:'The two best windows for Char Dham Yatra 2026 are May 1–June 15 and September 10–October 31. May–June offers pleasant temperatures (8–18°C at the dhams), blooming rhododendrons, and clear mountain views. September–October offers post-monsoon crystal clarity, fewer crowds than peak May, and excellent photography conditions. Avoid July–August due to monsoon landslide risk on the Kedarnath and Gangotri routes. The 2026 season opens April 19 (Yamunotri and Gangotri), April 22 (Kedarnath), and April 23 (Badrinath). The season closes in November 2026.' },
  { cat:'Planning & Timing', q:'How many days are required for Char Dham Yatra?',
    a:'Char Dham Yatra requires a minimum of 10 days (9 nights) from Haridwar to complete all four dhams comfortably. An 11-night 12-day itinerary is recommended for senior pilgrims or those who prefer a slower pace. The circuit covers approximately 1,500–1,600 kilometres by road from Haridwar and includes two treks: Yamunotri (6 km one way from Janki Chatti) and Kedarnath (16 km one way from Gaurikund). Badrinath and Gangotri are accessible entirely by motor road — no trekking required.' },
  { cat:'Planning & Timing', q:'Can Char Dham Yatra be done in 7 days?',
    a:'Technically yes, but it is not recommended for first-time pilgrims or anyone above 55 years. A 7-day itinerary would cover approximately 200+ km per day on mountain roads and allow very limited time at each dham. The Kedarnath trek alone takes 4–6 hours one way. A rushed yatra often means missed darshan, exhaustion, and potential health complications at altitude. The ideal minimum is 10 days. For pilgrims with only 7 days available, a Do Dham package (Kedarnath + Badrinath, 5 nights 6 days) is a better choice — it allows adequate time at both dhams without rushing.' },
  { cat:'Planning & Timing', q:'Which month is least crowded for Char Dham Yatra?',
    a:'April (immediately after temple opening) and October are the least crowded months for Char Dham Yatra. April visits see fewer pilgrims as the weather is still cold (0–8°C at the dhams). October has reduced crowds compared to May–June, pleasant temperatures, and clear skies. September is the sweet spot: post-monsoon clarity, moderate crowds, and ideal weather. July–August have low crowds due to monsoon risk — but road conditions make them unsuitable for most pilgrims.' },
  { cat:'Planning & Timing', q:'How far in advance should I book Char Dham Yatra?',
    a:'Book at least 60 days in advance for May–June departures, which are peak season. Hotels at Guptkashi, Uttarkashi, and Barkot fill up 45–60 days ahead during peak season. Kedarnath helicopter slots through IRCTC fill within days of opening. For September–October, 30 days advance booking is usually sufficient. For budget travellers or large groups (10+ people), 90 days advance is recommended to secure the best hotels and group vehicle rates.' },

  // REGISTRATION
  { cat:'Registration & Documents', q:'Is registration mandatory for Char Dham Yatra 2026?',
    a:'Yes, biometric registration is mandatory for all four dhams in 2026. Pilgrims must register at official biometric registration centres at Haridwar, Rishikesh, or online at registrationandtouristcare.uk.gov.in before proceeding to the dhams. The registration generates a yatra card that is checked at multiple checkpoints along the route. Registration is free. Daily pilgrim limits are enforced at each dham — Kedarnath allows 15,000–17,000 pilgrims per day, Badrinath approximately 20,000, Gangotri and Yamunotri approximately 7,000–8,000 each.' },
  { cat:'Registration & Documents', q:'What documents are needed for Char Dham Yatra 2026?',
    a:'Documents required for Char Dham Yatra 2026: (1) Aadhaar card — mandatory for biometric registration, (2) Medical fitness certificate — mandatory for all pilgrims aged 55 and above, confirming fitness for high-altitude travel, (3) Passport-size photograph, (4) Emergency contact details. Foreign nationals require passport. Pilgrims with heart disease, high blood pressure, or diabetes must carry prescription and medical history regardless of age. Shiv Ganga Travels assists all pilgrims with biometric registration as part of the package.' },
  { cat:'Registration & Documents', q:'How to register for Char Dham Yatra 2026 online?',
    a:'To register online: (1) Go to registrationandtouristcare.uk.gov.in, (2) Click "New Registration" and create an account with your mobile number, (3) Enter details for all travellers including Aadhaar number, (4) Select your travel dates and destination dhams, (5) Upload medical certificate if aged 55+, (6) Download and print your yatra permit. Alternatively, register at designated centres in Haridwar (near Har Ki Pauri), Rishikesh (near Ram Jhula), or Dehradun. Shiv Ganga Travels guides pilgrims through the online registration process before departure.' },

  // SAFETY
  { cat:'Safety & Health', q:'Is Char Dham Yatra safe for senior citizens?',
    a:'Char Dham Yatra is safe for senior citizens up to 75–80 years with proper preparation and a specialised operator. Key considerations: Kedarnath requires a 16-km trek or pony/helicopter — arrange in advance. Badrinath and Gangotri are accessible by motor road with no trekking. The altitude ranges from 3,133m (Badrinath) to 3,583m (Kedarnath) — acclimatisation time is essential. A 12-night 13-day itinerary with slower pace is recommended for 60+ pilgrims. Carry medical certificates, prescribed medications, and ensure your operator has oxygen cylinders in the vehicle. Shiv Ganga Travels has successfully completed yatras with pilgrims aged 75–82.' },
  { cat:'Safety & Health', q:'What altitude sickness symptoms should I watch for at Kedarnath?',
    a:'Common altitude sickness symptoms at Kedarnath (3,583m) include headache, nausea, dizziness, shortness of breath, and loss of appetite. These typically appear within 6–12 hours of reaching altitude. If symptoms progress to confusion, inability to walk, or blue lips — descend immediately and seek medical help. Prevention: acclimatise at Guptkashi (1,319m) for a night before ascending, stay hydrated (3–4 litres of water daily), avoid alcohol, and ascend slowly. Supplemental oxygen cans are available at Gaurikund and Kedarnath. Shiv Ganga Travels carries oxygen cylinders in all vehicles.' },
  { cat:'Safety & Health', q:'Are there hospitals along the Char Dham Yatra route?',
    a:'Medical facilities along the Char Dham Yatra route: Guptkashi District Hospital (+91-1364-262130) serves Kedarnath pilgrims. Joshimath Hospital (+91-1389-222210) serves Badrinath pilgrims. Uttarkashi District Hospital (+91-1374-222221) serves Gangotri pilgrims. AIIMS Rishikesh has an air ambulance service (+91-135-2462945). The government has deployed 177 ambulances along the 2026 route. Emergency contact for SDRF mountain rescue: +91-9411112985. At Kedarnath itself, a DRDO medical facility and army medical camp operate during the season.' },

  // KEDARNATH SPECIFIC
  { cat:'Kedarnath', q:'How difficult is the Kedarnath trek?',
    a:'The Kedarnath trek from Gaurikund is 16 kilometres one way and rated moderate in difficulty. The trail gains approximately 1,601 metres of elevation over 16km. Average completion time for first-time pilgrims: 5–7 hours ascending, 3–4 hours descending. The trail is well-paved stone path for most of the route. The steepest section is between Jungle Chatti and Kedarnath (last 6km). Rest stops with tea stalls every 1–2 kilometres. Alternatives to trekking: pony (₹3,000–5,000 one way), palki/doli (₹8,000–12,000 one way), helicopter from Phata/Sersi/Guptkashi helipads.' },
  { cat:'Kedarnath', q:'What are the Kedarnath darshan timings in 2026?',
    a:'Kedarnath temple darshan timings in 2026: Gates open at 4:00 AM for Mahabhishek puja (advance booking required, ₹3,100). General darshan opens at 6:00 AM. Morning session: 6 AM to 3 PM. Afternoon break: 3 PM to 5 PM (temple closed). Evening session: 5 PM to 9 PM. Shringaar Aarti at 7:30 PM. Shayan Aarti (closing aarti) at 8:30 PM. The temple closes at 9:00 PM. Kedarnath Temple 2026 opening date is April 22 at 8:00 AM. Closing date is November 11, 2026.' },
  { cat:'Kedarnath', q:'Is Kedarnath helicopter booking mandatory in 2026?',
    a:'Kedarnath helicopter booking is not mandatory — pilgrims can still trek or hire ponies. However, if you choose to travel by helicopter, bookings MUST be made through the official IRCTC portal (irctc.co.in) in 2026. Walk-in bookings at helipads are being eliminated. The IRCTC system allocates departure time slots. Helipads operating in 2026: Phata, Sersi, Guptkashi, and Sitapur. One-way helicopter fare is approximately ₹7,000–9,000 per person. Shiv Ganga Travels assists pilgrims with IRCTC helicopter booking at no extra charge.' },
  { cat:'Kedarnath', q:'What is the Kedarnath route from Haridwar?',
    a:'Haridwar to Kedarnath base (Gaurikund) route: Haridwar → Rishikesh (24km) → Devprayag (70km) → Srinagar (110km) → Rudraprayag (140km) → Tilwara → Agastmuni → Kund → Guptkashi (190km) → Sonprayag (213km) → Gaurikund (218km). Total road distance: 218km from Haridwar to Gaurikund. Driving time: 6–7 hours. Note: Sonprayag to Gaurikund (5km) is one-way timed by police — morning slots fill quickly. From Gaurikund, the 16km trek or pony ride to Kedarnath begins.' },

  // BADRINATH
  { cat:'Badrinath', q:'Is there any trek required for Badrinath Yatra?',
    a:'No. Badrinath is unique among the four dhams — motor road reaches all the way to the temple. The road ends at the Badrinath temple complex (3,133m). No trekking is required. This makes Badrinath the most accessible dham for senior pilgrims and those with mobility limitations. From Haridwar, the distance is 320km via Joshimath — approximately 8–9 hours of driving. The Tapt Kund hot spring (55°C) is located just below the temple for the traditional pre-darshan bath.' },
  { cat:'Badrinath', q:'What are Badrinath temple darshan timings 2026?',
    a:'Badrinath temple darshan timings 2026: Maha Abhishek begins at 4:30 AM (advance booking, ₹3,500). Balabhog (morning offering) at 6:00 AM. General darshan opens at 7:00 AM. Madhyan darshan at 12:00 PM. Temple closed 1:00 PM to 4:00 PM. Evening darshan 4:00 PM to 9:00 PM. Sandhya Aarti at 7:00 PM. Shayan Aarti (closing) at 9:00 PM. Badrinath Temple 2026 opening date is April 23. Season closes November 13, 2026.' },

  // 2026 RULES
  { cat:'2026 New Rules', q:'What are the new rules for Char Dham Yatra 2026?',
    a:'Key new rules for Char Dham Yatra 2026: (1) Mobile phones banned inside the inner sanctum of Kedarnath and Badrinath temples — deposit counters provided outside. (2) Medical certificate mandatory for all pilgrims aged 55 and above. (3) Kedarnath helicopter bookings only through IRCTC portal — no walk-in bookings at helipads. (4) All registered yatra vehicles must carry GPS trackers. (5) Daily pilgrim limits strictly enforced: Kedarnath 15,000–17,000/day, Badrinath 20,000/day. (6) Government has deployed 177 ambulances along the route plus an AIIMS helicopter ambulance for emergencies.' },
  { cat:'2026 New Rules', q:'Is the phone ban inside Kedarnath temple permanent?',
    a:'The mobile phone ban inside the inner sanctum of Kedarnath and Badrinath temples was introduced as a policy in 2025 and continues in 2026. The ban covers the garbhagriha (sanctum sanctorum) and immediate surroundings. Phone deposit counters are set up at the temple entrance. Photography outside the temple complex is permitted. This rule is enforced by temple security and Uttarakhand Police. Pilgrims are advised to carry small bags to deposit phones and to download offline maps before the trek.' },

  // PACKING
  { cat:'Packing & Preparation', q:'What should I pack for Char Dham Yatra?',
    a:'Essential items for Char Dham Yatra: Clothing — thermal inners (2 sets), fleece jacket, windproof outer jacket, warm cap and gloves, wool socks (3–4 pairs), waterproof trekking boots, rain poncho. Health — personal medicines (carry 2 extra days supply), sunscreen SPF50+, lip balm, rehydration sachets (ORS). Essentials — Aadhaar card, yatra registration card, medical certificate (if 55+), cash in small denominations (ATMs at Sonprayag only beyond Haridwar for Kedarnath route), power bank. Safety — oxygen can (available at Gaurikund), trekking poles for Kedarnath, headtorch with spare batteries.' },
  { cat:'Packing & Preparation', q:'How much cash is required for Char Dham Yatra?',
    a:'Carry ₹10,000–15,000 cash beyond the package cost for personal expenses during Char Dham Yatra. This covers: pony/helicopter at Kedarnath if not pre-arranged (₹3,000–9,000), personal puja offerings (₹500–3,000 per dham), prasad, snacks on the trek, tips for guides and drivers (customary ₹500–1,000), any medication purchased en route, and miscellaneous expenses. ATMs are available in Haridwar, Rishikesh, Guptkashi, Uttarkashi, and Joshimath. Beyond these points, cash availability is limited — withdraw before departure.' },

  // BOOKING
  { cat:'Booking & Operator', q:'How do I choose a reliable Char Dham Yatra operator?',
    a:'A reliable Char Dham Yatra operator should have: (1) Physical office in Haridwar or Uttarakhand — not just a website, (2) IATA approval or Uttarakhand Tourism registration, (3) Verifiable Google reviews with specific trip details, (4) Transparent pricing with written inclusions and exclusions, (5) Direct operator status — not an aggregator collecting commissions, (6) Experience of 5+ years operating on Char Dham routes, (7) Hill-terrain certified vehicles with experienced Garhwali drivers. Avoid operators who cannot show you their Haridwar office address or who cannot give a written itinerary with final price before payment.' },
  { cat:'Booking & Operator', q:'What is the difference between a direct operator and a travel agent for Char Dham Yatra?',
    a:'A direct operator like Shiv Ganga Travels owns the vehicles, directly employs the drivers and guides, and books hotels without intermediaries. You pay them and they deliver the service. A travel agent acts as a middleman — they collect your payment, take a commission of 10–20%, and outsource the actual service to an operator. This adds cost and creates accountability gaps. When something goes wrong on a mountain road, you want to call the actual operator — not an agent who then calls an operator. Direct booking is always preferable for safety, accountability, and price.' },
  { cat:'Booking & Operator', q:'Can I book Char Dham Yatra for just 2 people?',
    a:'Yes. Shiv Ganga Travels accepts bookings for groups as small as 2 people. For 2 people, an Ertiga or Innova Crysta is the appropriate vehicle. The per-person cost for small groups (2–4 people) is slightly higher than for large groups (8–12 people) because vehicle costs are shared by fewer people. The price range for 2 people is ₹22,000–28,000 per person for a complete 9N/10D Char Dham package from Haridwar, versus ₹19,500 per person for a group of 8–10.' },

  // SPECIFIC DHAMS
  { cat:'Gangotri & Yamunotri', q:'Is there any trek required for Gangotri Yatra?',
    a:'No. Gangotri is unique — motor road reaches all the way to the temple at 3,415m. No trekking is required for temple darshan. The town of Gangotri has the temple, Bhagirathi river bank, Surya Kund, and Bhagirathi Shila all within walking distance. The Gaumukh glacier trek (20km one way) is an optional add-on for adventure seekers and requires a permit. Gangotri temple 2026 opening date is April 19.' },
  { cat:'Gangotri & Yamunotri', q:'How far is Yamunotri from Haridwar?',
    a:'Yamunotri is approximately 175km from Haridwar by road — about 5–6 hours driving time via Barkot. The motor road ends at Janki Chatti (or Phoolchatti in some conditions). From Janki Chatti, a 6km trek (or pony) leads to Yamunotri temple at 3,291m. The Surya Kund hot spring (90°C) at the temple is used by pilgrims to cook rice as prasad. Yamunotri temple 2026 opening date is April 19.' },

  // HELICOPTER & TRANSPORT
  { cat:'Helicopter & Transport', q:'Which vehicles are best for Char Dham Yatra?',
    a:'For Char Dham Yatra by road: Innova Crysta (6 seats) is the most popular — best balance of comfort, fuel efficiency, and mountain performance. Ertiga (4 seats) is most economical for small families. Tempo Traveller 9-seater or 12-seater for groups of 7–12. All vehicles should be hill-terrain certified with high ground clearance. Avoid regular sedans or city hatchbacks — they are not suited for mountain roads. Shiv Ganga Travels operates a fleet of 20+ AC vehicles including Innova Crysta, Ertiga, and Tempo Travellers, all serviced before every trip.' },
  { cat:'Helicopter & Transport', q:'What is the distance from Haridwar to all four dhams?',
    a:'Distances from Haridwar to each dham: Yamunotri (175km, 5–6 hours via Barkot). Gangotri (265km, 7–8 hours via Uttarkashi). Kedarnath base Gaurikund (218km, 6–7 hours via Guptkashi). Badrinath (320km, 8–9 hours via Joshimath). Total road circuit from Haridwar through all four dhams and back to Haridwar: approximately 1,500–1,600km over 10–12 days. The total includes return driving between dhams following the traditional clockwise sequence: Yamunotri → Gangotri → Kedarnath → Badrinath.' },

  // COMPARISON
  { cat:'Comparison & Choices', q:'What is the difference between Char Dham and Do Dham Yatra?',
    a:'Char Dham Yatra covers all four sacred shrines — Yamunotri, Gangotri, Kedarnath, and Badrinath — in 10–12 days. Do Dham Yatra covers two shrines, typically Kedarnath and Badrinath (the most popular combination) in 5–6 days. Cost difference: Char Dham costs ₹19,500–28,000 per person; Do Dham costs ₹10,999–16,000 per person. Do Dham is ideal for pilgrims with limited time or first-time yatris who want to experience the circuit before attempting all four. The Kedarnath–Badrinath Do Dham pair is considered the most spiritually significant combination.' },
  { cat:'Comparison & Choices', q:'Should I do Char Dham Yatra by road or helicopter?',
    a:'Road yatra is recommended for first-time pilgrims who want the traditional experience, have 10+ days, are under 65, and have no significant health conditions. The mountain road journey through Garhwal Himalaya is itself a profound experience. Helicopter yatra is recommended for senior pilgrims (65+), those with heart conditions or high blood pressure, pilgrims with 6 days or less available, and those who want to prioritise darshan over the journey. Helicopter yatra costs 4–5× more but saves 8–10 days of travel. Both options allow full temple darshan — the helicopter does not provide a spiritual shortcut, only a physical one.' },
  { cat:'Comparison & Choices', q:'Is a package better than booking Char Dham Yatra independently?',
    a:'For most pilgrims, an all-inclusive package from a direct operator is better than self-planning for these reasons: (1) Hotel availability — operators have pre-blocked rooms at key stops; independent travellers often find hotels full during peak season. (2) Driver expertise — a driver who has done the Kedarnath route 200+ times knows every alternate route and road condition. (3) Cost — a direct operator package is typically cheaper than the sum of self-arranged hotels + vehicle + guide. (4) Accountability — one operator is responsible for your entire yatra. Exception: experienced independent travellers who have done the yatra before and prefer flexibility may find self-booking more suitable.' },

  // ACCOMMODATION
  { cat:'Accommodation & Food', q:'What are the accommodation options along the Char Dham Yatra route?',
    a:'Accommodation along the Char Dham Yatra route ranges from government GMVN guest houses to 3-star hotels. Key stops and options: Barkot/Janki Chatti (Yamunotri base) — dharamshalas and basic hotels, ₹800–2,500 per night. Uttarkashi (Gangotri base) — GMVN and private 2–3 star hotels, ₹1,500–4,000. Guptkashi/Sonprayag (Kedarnath base) — 2–3 star hotels, ₹2,000–5,000. Joshimath (Badrinath base) — various options, ₹1,500–4,000. Badrinath — GMVN and private lodges, ₹1,200–3,500. Shiv Ganga Travels packages include twin-sharing accommodation at all stops.' },
  { cat:'Accommodation & Food', q:'Is vegetarian food available throughout Char Dham Yatra?',
    a:'Yes. Pure vegetarian (sattvic) food is available at all points along the Char Dham Yatra route. Non-vegetarian food is not served in the dham areas. Jain food is available on request at most hotels along the route if informed in advance — inform your operator at booking time. Common food items: dal, rice, roti, sabzi, paneer dishes, khichdi. Prasad at temples: puri-sabzi at Yamunotri and Gangotri, chawal prasad at Kedarnath, charanamrit at Badrinath. Shiv Ganga Travels packages include breakfast and dinner at all accommodation stops.' },

  // GROUPS & SPECIAL
  { cat:'Groups & Special Cases', q:'Can elderly people do Char Dham Yatra?',
    a:'Yes. Pilgrims up to 80+ years have successfully completed Char Dham Yatra with proper preparation. Key accommodations for elderly pilgrims: helicopter for Kedarnath (avoids the 16km trek), ground-floor rooms at hotels, palki/doli service at ₹8,000–12,000 per way, medical attendant, and slower pace itinerary. The Badrinath and Gangotri dhams are fully accessible by motor road with no trekking required. A 12-night 13-day Senior Citizen package is recommended. Medical certificate required for pilgrims aged 55+. Shiv Ganga Travels senior packages have included pilgrims aged 75–82.' },
  { cat:'Groups & Special Cases', q:'How to book Char Dham Yatra for a large group?',
    a:'For large groups (10+ pilgrims), book at least 90 days in advance for peak season (May–June). A group of 10–12 requires a 12-seater Tempo Traveller (₹44,000–52,000 for full circuit) or 2 Innova Crystas. Large groups get better per-person rates than small groups. Provide the operator with complete list of names, ages, and Aadhaar numbers in advance for group biometric registration. Shiv Ganga Travels handles corporate groups, family reunions, and pilgrimage groups up to 50+ people by coordinating multiple vehicles.' },
  { cat:'Groups & Special Cases', q:'Is Char Dham Yatra safe for children?',
    a:'Char Dham Yatra is generally safe for children above 8–10 years who are in good health. The Kedarnath trek is challenging for young children — pony or helicopter is recommended. The high altitude (3,133m–3,583m) can cause altitude sickness in children; monitor for headache, nausea, or fatigue. Bring oral rehydration sachets and basic medicines. The entire yatra is in a cold mountain environment — warm clothing is essential even in summer. Children under 5 are generally not recommended at these altitudes unless the family has prior high-altitude experience.' },

  // OPERATOR SPECIFIC
  { cat:'About Shiv Ganga Travels', q:'Who is the founder of Shiv Ganga Travels?',
    a:'Shiv Ganga Travels was founded in 2010 by Dhanesh Chandra Mishra, a retired Indian Army officer, in Roorkee, Uttarakhand. Dhanesh initially served Army personnel stationed in Roorkee, bringing military-grade discipline and zero-compromise values to pilgrimage travel. He expanded the company on the principle that everyone deserves fair pricing — a school teacher from Agra and a corporate executive from Mumbai should pay the same price for the same service. Today, Shiv Ganga Travels operates from Haridwar and Roorkee with 20+ AC vehicles and has served 50,000+ pilgrims.' },
  { cat:'About Shiv Ganga Travels', q:'Where is the Shiv Ganga Travels office in Haridwar?',
    a:'Shiv Ganga Travels office in Haridwar is located at: Saptrishi Road, Near Shantikunj Gate No. 1, Bhupatwala, Haridwar, Uttarakhand — PIN 249410. The office is open Monday to Sunday, 7:00 AM to 9:00 PM. Phone: +91-7817996730. Email: support@shivgangatravels.com. Website: www.shivgangatravels.com. The office is near the famous Shantikunj (Gayatri Pariwar) complex — a landmark recognisable to most pilgrims visiting Haridwar.' },
  { cat:'About Shiv Ganga Travels', q:'Does Shiv Ganga Travels charge any commission?',
    a:'No. Shiv Ganga Travels is a direct operator — we own the vehicles, directly employ the drivers and guides, and book hotels without any intermediary. Zero commission, zero middlemen. The price shown on our website at shivgangatravels.com is the final price — no platform fees, no agent charges, no hidden additions at checkout. This direct model typically saves pilgrims 10–20% compared to booking through aggregator platforms or travel agents. Our pricing policy has been consistent since 2010: the same price for every pilgrim.' },
  { cat:'About Shiv Ganga Travels', q:'What makes Shiv Ganga Travels different from other Char Dham operators?',
    a:'Shiv Ganga Travels differentiators: (1) Founded by a retired Indian Army officer — military discipline, zero shortcuts. (2) Direct operator since 2010 — no agents, no commission markup. (3) Same price for every pilgrim — no negotiation advantage for well-connected customers. (4) 20+ hill-terrain certified vehicles serviced before every trip. (5) AI-powered cost calculator (free at shivgangatravels.com/char-dham-yatra-cost-calculator). (6) 24/7 WhatsApp support throughout the yatra. (7) Dedicated senior citizen packages with medical attendant. (8) 50,000+ pilgrims served with zero incident record.' },

  // ENVIRONMENTAL & SPIRITUAL
  { cat:'Spiritual & Practical', q:'What is the significance of Char Dham Yatra?',
    a:'Char Dham Yatra (the four-abode pilgrimage) is considered one of the most sacred journeys in Hinduism. The four dhams represent the four cardinal directions and their presiding deities: Yamunotri (northeast, Goddess Yamuna), Gangotri (north, Goddess Ganga), Kedarnath (north, Lord Shiva — one of the 12 Jyotirlingas), Badrinath (north, Lord Vishnu). Completing the Char Dham Yatra is believed to cleanse the sins of a lifetime and ensure moksha (liberation). Adi Shankaracharya (8th century CE) is credited with establishing the current pilgrimage circuit and the temples at each dham.' },
  { cat:'Spiritual & Practical', q:'What is the correct order for Char Dham Yatra?',
    a:'The traditional and spiritually correct order for Char Dham Yatra follows a clockwise direction from west to east: Yamunotri (westernmost) → Gangotri → Kedarnath → Badrinath (easternmost). This sequence is prescribed in Hindu scriptures and followed by most pilgrims. From a practical road logistics standpoint, this sequence also minimises total driving distance from Haridwar. The yatra traditionally starts after taking a holy dip at Haridwar (Har Ki Pauri) and ends after returning to Haridwar.' },
  { cat:'Spiritual & Practical', q:'Can I do Char Dham Yatra during Navratri or Diwali?',
    a:'Navratri (October) is considered an auspicious time for Char Dham Yatra and coincides with the post-monsoon season — one of the best windows for pilgrimage. However, Diwali (October–November) marks the beginning of the temple closing season. Kedarnath typically closes on the day of Bhai Dooj (2 days after Diwali). Plan your itinerary carefully if travelling close to Diwali — confirm exact closing dates for each dham before booking. The 2026 closing dates will be announced by the Char Dham Devasthanam Board approximately 30 days before Diwali.' },
  { cat:'Spiritual & Practical', q:'What is the Ganga Aarti at Haridwar and when should I see it?',
    a:'Ganga Aarti at Har Ki Pauri, Haridwar is a daily evening ritual performed at sunset (approximately 6:30–7:30 PM in summer, 5:30–6:30 PM in winter). It is the traditional beginning of every Char Dham Yatra. Priests perform the aarti with large diyas (lamps) on the Ganga ghats, accompanied by conch shells and bells. The aarti is conducted by the Brahma Kund priests — the most sacred of Haridwar\'s 52 ghats. Arrive 30 minutes early to secure a good viewing position. The Ganga Aarti is the spiritual launchpad for the yatra — almost all Char Dham pilgrims witness it the evening before departing.' },
];

function FAQSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: FAQS.map(f => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: f.a,
      },
    })),
  };
  const article = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Char Dham Yatra FAQ 2026 — 50 Questions Answered by Experts',
    description: 'Complete FAQ for Char Dham Yatra 2026 covering cost, registration, safety, packing, rules, and accommodation.',
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
      logo: { '@type': 'ImageObject', url: 'https://www.shivgangatravels.com/logo.png' },
    },
    datePublished: '2026-01-01',
    dateModified: new Date().toISOString().split('T')[0],
    mainEntityOfPage: `${SITE.baseUrl}/blog/char-dham-yatra-faq`,
    about: { '@type': 'TouristTrip', name: 'Char Dham Yatra 2026' },
    expertConsideration: {
      '@type': 'Claim',
      name: '50 expert answers from a 15-year Char Dham Yatra operator',
    },
  };
  const webpage = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': `${SITE.baseUrl}/blog/char-dham-yatra-faq#webpage`,
    url: `${SITE.baseUrl}/blog/char-dham-yatra-faq`,
    name: 'Char Dham Yatra FAQ 2026 — 50 Questions Answered',
    inLanguage: 'en-IN',
    speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.speakable-answer'] },
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}/>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(article) }}/>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webpage) }}/>

        <div style={{ borderTop:'1px solid var(--border)', paddingTop:24, marginTop:32 }}>
          <div style={{ fontWeight:700, fontSize:13.5, color:'var(--navy)', marginBottom:12 }}>Related Guides</div>
          <div style={{ display:'flex', gap:10, flexWrap:'wrap' }}>
            {[['Char Dham Packages','/char-dham-yatra'],['Registration Guide','/blog/char-dham-yatra-registration'],['Cost Breakdown','/blog/char-dham-yatra-cost'],['Packing List','/blog/char-dham-yatra-packing-list'],['Opening Dates 2026','/blog/char-dham-yatra-opening-dates-2026'],['Medical Certificate','/blog/char-dham-yatra-medical-certificate']].map(([l,h])=>(
              <Link key={h} href={h} style={{ background:'var(--bg)', border:'1px solid var(--border)', color:'var(--navy)', padding:'7px 14px', borderRadius:8, fontSize:12.5, fontWeight:600, textDecoration:'none' }}>{l} →</Link>
            ))}
          </div>
        </div>
    </>
  );
}

const h2s = {
  fontFamily: 'var(--font-display)', fontSize: 'clamp(1.1rem,2vw,1.4rem)',
  fontWeight: 700, color: 'var(--navy)', letterSpacing: '-0.02em',
  marginBottom: 0, lineHeight: 1.35,
};

// Group FAQs by category
const categories = [...new Set(FAQS.map(f => f.cat))];

export default function FAQ() {
  return (
    <>
      <FAQSchema/>

      {/* Hero */}
      <section style={{ background: 'linear-gradient(145deg,var(--navy) 0%,var(--navy-mid) 60%,var(--teal) 100%)', padding: '56px 20px 44px', textAlign: 'center' }}>
        <div style={{ maxWidth: 820, margin: '0 auto' }}>
          <span style={{ background: 'rgba(232,146,10,0.18)', color: '#FFD166', fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', padding: '5px 16px', borderRadius: 100, display: 'inline-block', marginBottom: 16 }}>
            Expert FAQ · Updated {SITE.lastUpdated}
          </span>
          <h1 className="display-title speakable-answer" style={{ color: '#fff', fontSize: 'clamp(1.8rem,4.5vw,3rem)', marginBottom: 14 }}>
            Char Dham Yatra FAQ 2026<br/>
            <em style={{ color: '#FFD166', fontStyle: 'italic' }}>50 Questions, Expert Answers</em>
          </h1>
          <p className="speakable-answer" style={{ color: 'rgba(255,255,255,0.8)', fontSize: 15, lineHeight: 1.7, marginBottom: 20 }}>
            Answered by Sumit Mishra, Operations Manager at Shiv Ganga Travels — running Char Dham Yatra operations since 2015, 500+ groups every season. Based on 50,000+ pilgrims served since 2010.
          </p>
          {/* Category jump links */}
          <div style={{ display: 'flex', gap: 8, justifyContent: 'center', flexWrap: 'wrap' }}>
            {categories.map(cat => (
              <a key={cat} href={`#${cat.toLowerCase().replace(/[^a-z]/g, '-')}`}
                style={{ background: 'rgba(255,255,255,0.12)', color: '#fff', padding: '5px 14px', borderRadius: 100, fontSize: 12, fontWeight: 600, textDecoration: 'none', border: '1px solid rgba(255,255,255,0.2)' }}>
                {cat}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Freshness + author strip */}
      <div style={{ background: '#fff', borderBottom: '1px solid var(--border)', padding: '10px 20px' }}>
        <div style={{ maxWidth: 'var(--container)', margin: '0 auto', display: 'flex', gap: 16, flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', fontSize: 12.5, color: 'var(--text-muted)' }}>
          <span>✍️ <strong style={{ color: 'var(--navy)' }}>Author:</strong> Sumit Mishra, Operations Manager, Shiv Ganga Travels</span>
          <span>🗓️ <strong style={{ color: 'var(--navy)' }}>Last updated:</strong> {SITE.lastUpdated} — verified for current season</span>
          <span>📊 <strong style={{ color: 'var(--navy)' }}>Based on:</strong> 50,000+ pilgrims, 15 years of operation</span>
        </div>
      </div>

      {/* Breadcrumb */}
      <nav style={{ background: 'var(--bg)', borderBottom: '1px solid var(--border)', padding: '9px 20px' }}>
        <div style={{ maxWidth: 'var(--container)', margin: '0 auto', fontSize: 12, color: 'var(--text-muted)', display: 'flex', gap: 6 }}>
          Home
          <span>›</span>
          Blog
          <span>›</span>
          <span>Char Dham Yatra FAQ 2026</span>
        </div>
      </nav>

      {/* FAQ content */}
      <div className="blog-container">

        {/* Conversion hook — FAQ visitors are research-mode, help them convert */}
        <div style={{ background:'linear-gradient(135deg,var(--navy) 0%,var(--teal) 100%)', borderRadius:14, padding:'16px 20px', marginBottom:28, display:'flex', flexWrap:'wrap', gap:14, alignItems:'center', justifyContent:'space-between' }}>
          <div>
            <div style={{ fontWeight:700, fontSize:14, color:'#FFD166', marginBottom:3 }}>Ready to book? Get a personalised quote in 2 minutes.</div>
            <div style={{ fontSize:13, color:'rgba(255,255,255,0.8)' }}>Direct operator · No commission · From ₹19,500 all-inclusive</div>
          </div>
          <div style={{ display:'flex', gap:8, flexWrap:'wrap', flexShrink:0 }}>
            <a href={`https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent('Namaste! I read your Char Dham FAQ page. I want to know about packages and dates for 2026.')}`}
              target="_blank" rel="nofollow noopener noreferrer"
              style={{ background:'#25D366', color:'#fff', padding:'9px 16px', borderRadius:9, fontWeight:700, fontSize:13, textDecoration:'none', whiteSpace:'nowrap' }}>
              💬 WhatsApp Quote
            </a>
            <a href="/char-dham-yatra"
              style={{ background:'rgba(255,255,255,0.15)', color:'#fff', padding:'9px 16px', borderRadius:9, fontWeight:700, fontSize:13, textDecoration:'none', border:'1px solid rgba(255,255,255,0.3)', whiteSpace:'nowrap' }}>
              View Packages →
            </a>
          </div>
        </div>

        {/* Table of contents */}
        <div style={{ background: 'var(--navy-light)', borderRadius: 14, padding: '20px 24px', marginBottom: 40 }}>
          <div style={{ fontWeight: 700, fontSize: 14, color: 'var(--navy)', marginBottom: 12 }}>Table of Contents ({FAQS.length} Questions)</div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(200px,1fr))', gap: 6 }}>
            {categories.map(cat => {
              const count = FAQS.filter(f => f.cat === cat).length;
              return (
                <a key={cat} href={`#${cat.toLowerCase().replace(/[^a-z]/g, '-')}`}
                  style={{ color: 'var(--navy)', fontSize: 13, fontWeight: 600, textDecoration: 'none', padding: '4px 0', display: 'flex', gap: 6, alignItems: 'center' }}>
                  <span style={{ color: 'var(--gold)', fontSize: 10, fontWeight: 700 }}>{count}Q</span> {cat}
                </a>
              );
            })}
          </div>
        </div>

        {/* FAQ sections by category */}
        {categories.map(cat => (
          <div key={cat} id={cat.toLowerCase().replace(/[^a-z]/g, '-')} style={{ marginBottom: 44 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 20, paddingBottom: 10, borderBottom: '2px solid var(--navy-light)' }}>
              <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '1.25rem', fontWeight: 700, color: 'var(--navy)', margin: 0 }}>{cat}</h2>
              <span style={{ fontSize: 11, fontWeight: 700, color: 'var(--teal)', background: 'var(--teal-light, #e6f7f9)', padding: '2px 10px', borderRadius: 100 }}>
                {FAQS.filter(f => f.cat === cat).length} questions
              </span>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              {FAQS.filter(f => f.cat === cat).map((faq, i) => (
                <details key={i} style={{ background: '#fff', borderRadius: 12, border: '1px solid var(--border)', overflow: 'hidden' }}>
                  <summary style={{ padding: '16px 18px', cursor: 'pointer', listStyle: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 12 }}>
                    <span style={h2s}>{faq.q}</span>
                    <span style={{ fontSize: 18, flexShrink: 0, color: 'var(--navy)', marginTop: 2 }}>＋</span>
                  </summary>
                  <div style={{ padding: '0 18px 18px', fontSize: 14.5, color: 'var(--text-mid)', lineHeight: 1.85, borderTop: '1px solid var(--border)' }}>
                    <p style={{ marginTop: 14, marginBottom: 0 }}>{faq.a}</p>
                  </div>

        {/* ── Mid-article conversion CTA ── */}
        <BlogCTA variant="inline" intent="info" />
                </details>
              ))}
            </div>
          </div>
        ))}

        {/* Bottom CTA */}
        <div style={{ background: 'var(--navy)', borderRadius: 16, padding: '28px 24px', textAlign: 'center' }}>
          <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: 14, marginBottom: 8 }}>
            Still have a question not answered here?
          </p>
          <h3 style={{ color: '#fff', fontFamily: 'var(--font-display)', fontSize: '1.3rem', marginBottom: 18 }}>
            Speak directly with Dhanesh ji — 15-year Char Dham expert
          </h3>
          <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href={`https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent('Namaste! I have a question about Char Dham Yatra 2026.')}`}
              target="_blank" rel="nofollow noopener noreferrer"
              style={{ background: '#25D366', color: '#fff', padding: '11px 24px', borderRadius: 9, fontWeight: 700, fontSize: 13.5, textDecoration: 'none' }}>
              💬 Ask on WhatsApp
            </a>
            <a href='tel:+917817996730'
              style={{ background: 'rgba(255,255,255,0.12)', color: '#fff', padding: '11px 24px', borderRadius: 9, fontWeight: 700, fontSize: 13.5, textDecoration: 'none', border: '1px solid rgba(255,255,255,0.2)' }}>
              📞 {SITE.phone}
            </a>
          </div>
        </div>
      </div>

        <div style={{ borderTop:'1px solid var(--border)', paddingTop:24, marginTop:32 }}>
          <div style={{ fontWeight:700, fontSize:13.5, color:'var(--navy)', marginBottom:12 }}>Related Guides</div>
          <div style={{ display:'flex', gap:10, flexWrap:'wrap' }}>
            {[['Char Dham Packages','/char-dham-yatra'],['Registration Guide','/blog/char-dham-yatra-registration'],['Cost Breakdown','/blog/char-dham-yatra-cost'],['Packing List','/blog/char-dham-yatra-packing-list'],['Opening Dates 2026','/blog/char-dham-yatra-opening-dates-2026'],['Medical Certificate','/blog/char-dham-yatra-medical-certificate']].map(([l,h])=>(
              <Link key={h} href={h} style={{ background:'var(--bg)', border:'1px solid var(--border)', color:'var(--navy)', padding:'7px 14px', borderRadius:8, fontSize:12.5, fontWeight:600, textDecoration:'none' }}>{l} →</Link>
            ))}
          </div>
        </div>
    </>
  );
}
