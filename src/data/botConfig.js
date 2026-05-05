// ================================================================
// CHAT BOT CONFIGURATION — SHIV GANGA TRAVELS
// ================================================================
// TO ADD YOUR OWN Q&A:
//   1. Add a new entry to CUSTOM_QA below
//   2. "keywords" = words the bot looks for in the visitor's message
//   3. "answer" = what the bot replies (use **bold** and \n for newlines)
//   4. Save and push to GitHub — done!
// ================================================================

export const BOT_NAME    = 'Yatra Assistant';
export const BOT_TAGLINE = 'Ask me anything about your pilgrimage';
export const BOT_AVATAR  = '🙏';

// ── QUICK-TAP BUTTONS shown at the start ──────────────────────
export const QUICK_QUESTIONS = [
  'What are your Char Dham packages?',
  'What is the price for Kedarnath?',
  'Best time to visit Char Dham?',
  'Is Kedarnath trek mandatory?',
  'Do you have helicopter packages?',
  'Senior citizen packages?',
  'What is included in the package?',
  'How do I book a package?',
];

// ================================================================
// CUSTOM Q&A — 35 MOST COMMON PILGRIM QUESTIONS
// ================================================================
export const CUSTOM_QA = [

  // ── 1. GREETING ──────────────────────────────────────────────
  {
    keywords: ['hello','hi','namaste','jai','hola','hey','good morning','good afternoon','good evening','greetings'],
    answer: `Namaste! 🙏 Welcome to **Shiv Ganga Travels** — Haridwar's most trusted Char Dham Yatra specialist since 2010.\n\nI can answer all your questions about packages, prices, treks, bookings, and more.\n\nUse the quick buttons below or type your question — I'm here to help! 😊`,
  },

  // ── 2. PACKAGE PRICES OVERVIEW ───────────────────────────────
  {
    keywords: ['price','cost','rate','charge','fee','kitna','how much','budget','affordable','cheap','expensive','tariff'],
    answer: `**Package Prices 2026 — All Inclusive:**\n\n🙏 **Single Dham** (1 shrine)\n• Yamunotri — ₹5,499 · 2N/3D\n• Gangotri — ₹5,299 · 2N/3D\n• Kedarnath — ₹6,499 · 3N/4D\n• Badrinath — ₹5,999 · 2N/3D\n\n🕌 **Do Dham** (2 shrines)\n• Kedarnath + Badrinath — ₹10,999 · 5N/6D\n• Yamunotri + Gangotri — ₹8,999 · 4N/5D\n\n🏔️ **Char Dham** (all 4)\n• Classic — ₹19,500 · 9N/10D\n• Deluxe — ₹27,500 · 11N/12D\n• Senior Special — ₹24,500 · 12N/13D\n\n🚁 **Helicopter Char Dham** — ₹85,000 · 5N/6D\n\nAll prices are **per person**, fully inclusive. Zero commission. 📞 +91-7017082807`,
  },

  // ── 3. CHAR DHAM OVERVIEW ────────────────────────────────────
  {
    keywords: ['char dham','chardham','4 dham','four dham','all four','all 4'],
    answer: `**Char Dham Yatra** — the holiest Hindu pilgrimage:\n\n🌊 **Yamunotri** (3,291m) — Goddess Yamuna · source of Yamuna river\n🌿 **Gangotri** (3,415m) — source of River Ganga · Bhagirathi gorge\n🏔️ **Kedarnath** (3,583m) — Lord Shiva · 12th Jyotirlinga\n🕌 **Badrinath** (3,133m) — Lord Vishnu · one of the 108 Divya Desams\n\nDone in clockwise order: Yamunotri → Gangotri → Kedarnath → Badrinath\n\n**Our Char Dham Packages:**\n• Classic 9N/10D — ₹19,500/person\n• Deluxe 11N/12D — ₹27,500/person\n• Senior Special 12N/13D — ₹24,500/person\n• Helicopter 5N/6D — ₹85,000/person\n\nWant more details? WhatsApp us! 📞 +91-7017082807`,
  },

  // ── 4. BEST TIME TO VISIT ────────────────────────────────────
  {
    keywords: ['best time','when to visit','season','month','kab','which month','right time','ideal time','temple open','open','close'],
    answer: `**Best Time for Char Dham Yatra 2025:**\n\n✅ **May – Mid June** *(Peak season)*\nPost-opening, spring blooms, clear mountain skies. Most popular, book early!\n\n✅ **Mid September – October** *(Best season)*\nPost-monsoon, crystal clear Himalayan views, cooler weather, less crowded.\n\n⚠️ **July – August** — Monsoon. Heavy rains, landslide risk. Not recommended.\n\n❌ **November – April** — Temples closed for winter. Priests relocate to valley.\n\n📅 **Temple Opening 2025:**\n• Yamunotri & Gangotri — Akshaya Tritiya (April/May)\n• Kedarnath — 2–3 days after Yamunotri\n• Badrinath — 1–2 weeks after Kedarnath\n\n📅 **Closing:** Bhai Dooj (October/November)`,
  },

  // ── 5. KEDARNATH ─────────────────────────────────────────────
  {
    keywords: ['kedarnath','kedar','kedarna'],
    answer: `**Kedarnath Yatra** — Lord Shiva at 3,583m:\n\n💰 Single package: **₹6,499** (3N/4D)\n🗺️ Route: Haridwar → Guptkashi → Gaurikund → Kedarnath\n🥾 Trek: 16 km one way from Gaurikund (3–5 hrs)\n\n**No-Trek Options:**\n🐴 Pony — ₹3,500–4,500 one way\n🛕 Palki/Doli — ₹8,000–12,000 one way\n🚁 Helicopter — ₹7,500–9,500 round trip (Phata/Sersi helipad)\n\n✨ **Must-see at Kedarnath:**\n• Kedarnath Temple (12th Jyotirlinga)\n• Adi Shankaracharya Samadhi\n• Bhairavnath Temple (10 min walk)\n• Mandakini River & glacial views\n\nBest time: May–June & Sept–Oct. 🙏`,
  },

  // ── 6. BADRINATH ─────────────────────────────────────────────
  {
    keywords: ['badrinath','badri','badrivishal'],
    answer: `**Badrinath Yatra** — Lord Vishnu at 3,133m:\n\n💰 Single package: **₹5,999** (2N/3D)\n🗺️ Route: Haridwar → Joshimath → Badrinath\n✅ **No trek needed** — motor road all the way to the temple!\n\n✨ **Must-see at Badrinath:**\n• Badrinath Temple (Vishnu in meditative pose)\n• Tapt Kund — hot spring for holy dip before darshan\n• Mana Village (last Indian village before Tibet, 3 km)\n• Vyas Gufa, Ganesh Gufa, Bhim Pul\n• Saraswati River origin point\n• Brahmakapal Ghat — pitru puja/shraddh\n\n🕐 **Darshan timings:** 4:30 AM – 1 PM & 3 PM – 9 PM\n\nWe arrange VIP darshan to skip the queue! 🙏`,
  },

  // ── 7. YAMUNOTRI ─────────────────────────────────────────────
  {
    keywords: ['yamunotri','yamuna','yamnotri'],
    answer: `**Yamunotri Yatra** — Goddess Yamuna at 3,291m:\n\n💰 Single package: **₹5,499** (2N/3D)\n🗺️ Route: Haridwar → Barkot → Janki Chatti → Yamunotri\n🥾 Trek: 6 km from Janki Chatti (2–3 hrs)\n🐴 Pony available from Janki Chatti\n\n✨ **Must-see at Yamunotri:**\n• Yamunotri Temple (Goddess Yamuna's idol)\n• Surya Kund — boiling hot spring (cook rice in it!)\n• Divya Shila — sacred rock pillar\n• Janki Chatti — base camp with Yamuna river views\n\n📍 **Starting point:** Haridwar or Barkot\n🌡️ Temperature at Yamunotri: 5°C–15°C in season\n\nFirst stop in the Char Dham circuit! 🙏`,
  },

  // ── 8. GANGOTRI ──────────────────────────────────────────────
  {
    keywords: ['gangotri','ganges origin','ganga source','gaumukh','bhagirathi'],
    answer: `**Gangotri Yatra** — Source of the Holy Ganga at 3,415m:\n\n💰 Single package: **₹5,299** (2N/3D)\n🗺️ Route: Haridwar → Uttarkashi → Gangotri\n✅ **No trek needed** — motor road to the temple!\n\n✨ **Must-see at Gangotri:**\n• Gangotri Temple (Goddess Ganga)\n• Bhagirathi River gorge — stunning scenery\n• Harsil Valley (25 km before Gangotri) — apple orchards, serene village\n• Kedar Ganga confluence at Gangotri\n• Uttarkashi — Kashi Vishwanath Temple en route\n\n🏔️ **Gaumukh Trek** (20 km from Gangotri) — actual glacier source of Ganga — available as add-on!\n\n🌡️ Temperature: 8°C–20°C in season. Carry warm clothes!`,
  },

  // ── 9. HELICOPTER PACKAGES ───────────────────────────────────
  {
    keywords: ['helicopter','heli','copter','aerial','fly','flight','air'],
    answer: `🚁 **Helicopter Yatra Packages:**\n\n**Char Dham Helicopter** — ₹85,000/person (5N/6D)\n• Departs: Dehradun (Sahastradhara helipad)\n• All 4 dhams by air — Yamunotri, Gangotri, Kedarnath, Badrinath\n• VIP darshan at all shrines\n• Luxury hotels, all meals included\n• Best for: busy professionals, senior pilgrims\n\n**Do Dham Helicopter Same Day** — ₹28,000/person\n• Kedarnath + Badrinath in one day!\n• Departs from Phata/Sersi helipad\n• Back by evening\n\n**Kedarnath Only Helicopter** — ₹7,500–9,500 round trip\n• Available from Phata, Sersi, Guptkashi helipads\n• 7–10 minute flight each way\n\n⚠️ **Book 90+ days in advance** — helicopter slots sell out fast in peak season! 📞 +91-7017082807`,
  },

  // ── 10. WHAT IS INCLUDED ─────────────────────────────────────
  {
    keywords: ['include','included','what is included','kya milega','kya hai','whats included','package include','covers'],
    answer: `**Everything Included in Our Packages:**\n\n✅ Hotel/guesthouse on twin-sharing basis\n✅ Daily vegetarian breakfast + dinner\n✅ Private AC vehicle (Innova Crysta or Tempo Traveller)\n✅ Experienced local Garhwali guide\n✅ Temple VIP darshan assistance\n✅ Basic first-aid kit + oxygen cylinder on vehicle\n✅ Yatra biometric registration help\n✅ All toll, parking, state taxes & driver allowance\n✅ Pickup & drop at Haridwar railway station\n\n**NOT Included:**\n❌ Train/flight tickets to Haridwar\n❌ Pony, palki or porter charges\n❌ Helicopter charges (available at extra cost)\n❌ Lunch on travel days (₹150–300 at dhabas)\n❌ Personal expenses & tips\n❌ Temple entry fees (most are free)`,
  },

  // ── 11. TREK MANDATORY / ALTERNATIVES ───────────────────────
  {
    keywords: ['trek','trekking','walk','hike','difficult','can i avoid','no trek','pony','palki','doli','horse','walk how much'],
    answer: `**Trekking in Char Dham — Your Options:**\n\n🌊 **Yamunotri:** 6 km trek from Janki Chatti\n• 🐴 Pony: ₹1,800–2,500 one way\n• 🛕 Palki: ₹4,000–6,000 one way\n\n🌿 **Gangotri:** ✅ NO TREK — road to temple\n\n🏔️ **Kedarnath:** 16 km trek from Gaurikund\n• 🐴 Pony: ₹3,500–4,500 one way\n• 🛕 Palki: ₹8,000–12,000 one way\n• 🚁 Helicopter: ₹7,500–9,500 round trip\n\n🕌 **Badrinath:** ✅ NO TREK — road to temple\n\n💡 **Verdict:** Only 2 of 4 dhams require trekking. And even those have comfortable alternatives! Everyone from age 4 to 86 can complete Char Dham with us. 🙏`,
  },

  // ── 12. SENIOR CITIZENS ──────────────────────────────────────
  {
    keywords: ['senior','elderly','old age','aged','parents','mata pita','grandfather','grandmother','70','75','80','health issue'],
    answer: `👴👵 **Senior Citizen Char Dham Package — ₹24,500 (12N/13D)**\n\nSpecially designed for elderly pilgrims:\n\n✅ 3 extra rest days vs. standard package\n✅ Ground-floor hotel rooms at all stops\n✅ Pony/palki included at Yamunotri & Kedarnath\n✅ Medical attendant with oxygen cylinder on vehicle\n✅ Pulse oximeters to monitor altitude sickness\n✅ Walking sticks & compression socks provided\n✅ Slower, comfortable pace throughout\n✅ Doctor consultation before departure\n\n💡 We have successfully guided pilgrims **aged up to 86**!\n\nFor pre-existing conditions (BP, diabetes, heart issues), please share medical history and our team will advise accordingly. 📞 +91-7017082807`,
  },

  // ── 13. HOW TO BOOK ──────────────────────────────────────────
  {
    keywords: ['book','booking','reserve','how to book','kaise book','process','steps','confirm'],
    answer: `**Booking Process — 4 Simple Steps:**\n\n1️⃣ **WhatsApp or call us**\nShare your travel dates, group size, and package preference\n📞 +91-7017082807\n\n2️⃣ **Receive custom itinerary**\nWe send a detailed itinerary within 2 hours — no obligation\n\n3️⃣ **Confirm with 25% advance**\nPay advance to lock your dates & vehicles\nPayment: Bank transfer, UPI, or cash\n\n4️⃣ **Receive your complete kit**\n• Biometric registration confirmation\n• Hotel vouchers\n• Driver & guide contact numbers\n• Packing list & emergency contacts\n\n📌 **Book at least 60 days in advance** for peak season (May–June, October). Helicopter slots fill even faster!`,
  },

  // ── 14. CANCELLATION / REFUND ───────────────────────────────
  {
    keywords: ['cancel','cancellation','refund','money back','return','withdraw','postpone'],
    answer: `**Cancellation & Refund Policy:**\n\n✅ **30+ days before:** Full refund (free cancellation)\n⚠️ **15–30 days before:** 25% cancellation fee\n⚠️ **7–15 days before:** 50% cancellation fee\n❌ **Within 7 days:** No refund\n\n**Special Cases:**\n🌦️ **Weather cancellation (helicopter):** Full refund or free reschedule — no questions asked\n🏥 **Medical emergency:** Refund on case-by-case basis with doctor certificate\n🏛️ **Temple closed due to calamity:** Full refund\n\n💡 **We recommend** travel insurance (available from ₹500/person) for complete peace of mind.\n\nQuestions? WhatsApp us — we're flexible and fair! 📞 +91-7017082807`,
  },

  // ── 15. ACCOMMODATION / HOTELS ──────────────────────────────
  {
    keywords: ['hotel','accommodation','stay','room','lodge','guesthouse','where to stay','night','camp'],
    answer: `**Accommodation in Our Packages:**\n\n🏨 **Standard Package** — 2-star hotels & guesthouses\nClean, comfortable, meals included, near temple\n\n🏨 **Deluxe Package** — 3-star hotels\nBetter facilities, hot water, attached bathrooms\n\n🏕️ **At Kedarnath** — Basic heated guesthouses/lodges\n(Very limited luxury at 3,583m altitude!)\n\n**Key stops & hotels:**\n• Haridwar: City hotels\n• Barkot: Hotels near Yamuna river\n• Uttarkashi: Town hotels\n• Guptkashi: Hotels near Kedarnath base\n• Badrinath: Hotels near the temple\n\n**All rooms:** Twin sharing basis. Single room available at extra cost (usually ₹500–1,000 extra per night).\n\nTell us your preferences and we'll arrange accordingly! 🙏`,
  },

  // ── 16. FOOD / MEALS ─────────────────────────────────────────
  {
    keywords: ['food','meal','eat','dinner','breakfast','lunch','vegetarian','veg','jain','diet','sattvic'],
    answer: `**Food & Meals in Our Packages:**\n\n✅ **Included:** Daily vegetarian breakfast + dinner at all stops\n💡 **Jain food** available on request (no onion, no garlic)\n💡 **South Indian** or regional cuisine requests accepted\n\n**What you get:**\n🌅 Breakfast: Poha/paratha/idli/bread + tea/coffee\n🌙 Dinner: Dal, 2 sabzi, roti/rice, salad + dessert on weekends\n\n⚠️ **Lunch NOT included** on long driving days — stop at local hill dhabas (₹150–300/person, pay yourself)\n\n**At High Altitude (Kedarnath, Badrinath):**\nFood options are limited. Our team pre-orders at trusted dhabas for quality meals. No non-veg anywhere near the dhams.\n\n🍵 **Important:** Carry dry snacks, energy bars, and water for trek days!`,
  },

  // ── 17. BIOMETRIC REGISTRATION ──────────────────────────────
  {
    keywords: ['biometric','registration','register','permit','yatra card','mandatory register','form'],
    answer: `**Char Dham Biometric Registration — Mandatory Since 2017:**\n\nThe Government of Uttarakhand requires all pilgrims to register online before the yatra.\n\n✅ **We handle everything for you!**\nJust provide:\n• Copy of Aadhaar/Passport/Driving Licence\n• Recent passport-size photo\n• Your travel dates\n\n⏰ We submit your registration to the **Uttarakhand Tourism portal** 72 hours before your departure and share your Yatra Card via WhatsApp.\n\n**Why it’s important:**\n• Required at every dham checkpoint\n• Helps emergency services locate you\n• Daily pilgrim limits enforced (book early!)\n• Without it, entry to dhams can be denied\n\nDon't worry — we've done this 50,000+ times! 🙏`,
  },

  // ── 18. WHAT TO PACK ─────────────────────────────────────────
  {
    keywords: ['pack','packing','carry','bring','clothes','luggage','what to take','preparation','prepare'],
    answer: `**Packing List for Char Dham Yatra:**\n\n🧥 **Clothing:**\n• Warm jacket (even in summer — nights get cold!)\n• 2–3 sets of comfortable trek clothing\n• Rain poncho/windcheater\n• Comfortable trekking shoes (most important!)\n• Woollen socks & thermal innerwear\n\n💊 **Health:**\n• Personal medicines (BP, diabetes, etc.)\n• Diamox (altitude sickness) — consult doctor\n• ORS sachets, lip balm, sunscreen SPF 50\n\n📋 **Documents:**\n• Original Aadhaar/ID (multiple copies)\n• Yatra registration card (we provide)\n• Emergency contact numbers\n\n📦 **Essentials:**\n• Cash (ATMs limited in mountains)\n• Power bank & warm cap/gloves\n• Reusable water bottle\n\n💡 **Keep luggage light** — under 10 kg for trek days!`,
  },

  // ── 19. ALTITUDE SICKNESS ────────────────────────────────────
  {
    keywords: ['altitude','sickness','AMS','breathless','oxygen','mountain sickness','dizzy','headache','height'],
    answer: `**Altitude Sickness on Char Dham Yatra:**\n\n⚠️ **Kedarnath (3,583m) & Badrinath (3,133m)** can cause altitude sickness in some people.\n\n**Symptoms to watch:** Headache, dizziness, nausea, breathlessness, fatigue\n\n**Our Safety Measures:**\n✅ Oxygen cylinder on every vehicle\n✅ Pulse oximeters to monitor blood oxygen\n✅ Gradual acclimatisation built into itinerary\n✅ Driver trained in first aid\n✅ Rest day at Joshimath before Badrinath\n\n**Prevention Tips:**\n• Acclimatise gradually — don’t rush\n• Drink 3–4 litres of water daily\n• Avoid alcohol completely\n• Take Diamox (125mg) if advised by doctor\n• Rest first day at high altitude before temple visit\n\n🏥 **Nearest hospitals:** Guptkashi (Kedarnath) & Joshimath (Badrinath)`,
  },

  // ── 20. GROUP DISCOUNTS ──────────────────────────────────────
  {
    keywords: ['group','family','friends','corporate','team','together','discount group','how many'],
    answer: `**Group & Family Packages:**\n\n**Vehicle allocation by group size:**\n• 1–4 persons — Private Innova Crysta\n• 5–12 persons — AC Tempo Traveller (12 seater)\n• 13–25 persons — Mini bus + vehicles\n• 26+ persons — Full fleet with coordinator\n\n**Group Discounts:**\n• 6–10 persons — **5% off** per person\n• 11–20 persons — **8% off** per person\n• 21+ persons — **12% off** per person + complimentary welcome kit\n\n**Family packages:**\nChildren under 5: Free\nChildren 5–12: 50% of adult price\n\n**Corporate retreats:** Fully customised with dedicated coordinator, printed itineraries, and group photos at each dham.\n\nCall us for a personalised group quote! 📞 +91-7017082807`,
  },

  // ── 21. PAYMENT METHODS ──────────────────────────────────────
  {
    keywords: ['payment','pay','upi','gpay','phonepe','bank transfer','cash','advance','how to pay','deposit'],
    answer: `**Payment Options — Simple & Flexible:**\n\n✅ **UPI** — Google Pay, PhonePe, Paytm, BHIM\n✅ **Bank transfer** (NEFT/IMPS/RTGS)\n✅ **Cash** — at our Haridwar office or to driver\n✅ **Cheque** — for advance bookings\n\n**Payment Schedule:**\n• **25% advance** to confirm booking\n• **50% payment** 30 days before departure\n• **Balance 25%** on departure day to driver\n\n**Bank Details:**\nAccount: Shiv Ganga Travels\n📞 WhatsApp us for exact bank details\n\n**Receipt provided** for every payment — no surprises!\n\n💡 We do NOT accept international cards currently. For NRI pilgrims, bank wire transfer is available. Contact us for details.`,
  },

  // ── 22. MEDICAL / HEALTH REQUIREMENTS ───────────────────────
  {
    keywords: ['medical','health','doctor','fit','fitness','bp','blood pressure','diabetes','heart','pregnant','surgery'],
    answer: `**Health & Medical Requirements:**\n\n**No mandatory health certificate** required. However:\n\n⚠️ **We strongly recommend consulting your doctor before booking** if you have:\n• High blood pressure\n• Heart disease\n• Diabetes\n• Asthma or breathing issues\n• Recent surgery (within 6 months)\n• Obesity (for Kedarnath trek specifically)\n\n**Altitude of key sites:**\n• Yamunotri: 3,291m\n• Gangotri: 3,415m\n• Kedarnath: 3,583m\n• Badrinath: 3,133m\n\n**Our precautions:**\n✅ Oxygen cylinders on all vehicles\n✅ Pulse oximeters available\n✅ Medical attendant for senior packages\n✅ Emergency hospital contacts shared before departure\n\n🏥 **Always carry your regular medicines in sufficient quantity!**`,
  },

  // ── 23. SOLO TRAVEL ──────────────────────────────────────────
  {
    keywords: ['solo','alone','single','one person','alone travel','solo travel','by myself','single person'],
    answer: `**Solo Pilgrims — Yes, we welcome you!**\n\n**For solo travelers:**\n• You can join a scheduled shared batch (cost-effective)\n• Or book a private car (higher cost)\n\n**Solo pricing (joining batch):**\n• Char Dham: from ₹19,500/person\n• Do Dham: from ₹10,999/person\n• Single Dham: from ₹5,299/person\n\n**Solo Female Pilgrims:**\n✅ We assign female guide companions on request\n✅ All-female batches available during peak season\n✅ Vetted, trusted hotels — no sharing with strangers\n✅ Emergency contact shared with family at home\n\n**Solo International Travelers:**\n✅ English-speaking guide available\n✅ Biometric registration assistance included\n✅ Airport pickup from Dehradun available\n\nMany solo pilgrims have found lifelong friends in our group batches! 🙏`,
  },

  // ── 24. CHILDREN / FAMILY ────────────────────────────────────
  {
    keywords: ['children','child','kids','baby','son','daughter','family with kids','age','toddler','young'],
    answer: `**Bringing Children on Char Dham Yatra:**\n\n✅ **Minimum recommended age:** 7+ for full Char Dham\n✅ **Road-only portions:** Suitable from age 4+\n\n**Child Pricing:**\n• Under 5 years: FREE (no seat, no meal)\n• 5–11 years: 40% of adult price\n• 12+ years: Full adult price\n\n**Tips for kids:**\n• Kedarnath trek — use pony (₹2,000–3,000 one way for kids)\n• Carry anti-nausea medication for mountain roads\n• Pack snacks, ORS, and a small toy/game\n• Warm clothes even in May–June\n• Children under 12 should not cross 4,000m altitude\n\n**Family Package Benefits:**\n• Ground floor rooms when available\n• Child-friendly food arranged on request\n• Flexible rest stops on long drive days\n\nWe have taken over 5,000 families on successful Char Dham yatras! 🙏`,
  },

  // ── 25. TRANSPORTATION DETAILS ───────────────────────────────
  {
    keywords: ['vehicle','transport','car','bus','innova','tempo','traveller','ac','driver','road'],
    answer: `**Our Fleet & Transportation:**\n\n🚗 **Innova Crysta** — up to 6 passengers\nBest for small families, premium comfort\n\n🚐 **Tempo Traveller** — 9, 12, or 16 seater\nAC, push-back seats, TV, best for groups\n\n🚌 **Mini Bus / Bus** — 25–45 seater\nFor large groups and corporate pilgrimages\n\n**Our drivers:**\n✅ 10+ years hill-driving experience\n✅ Uttarakhand routes expertise\n✅ Background-verified & licensed\n✅ Hindi + basic English speaking\n✅ First-aid trained\n\n**Vehicle features:**\n• AC (switched off in steep hills — AC doesn’t work well on inclines)\n• First-aid kit + oxygen cylinder\n• GPS tracking\n• Blankets for cold nights\n\n📌 **Note:** Road conditions in mountains can be challenging after monsoon. Our drivers know the safest routes!`,
  },

  // ── 26. ATM / CASH / MOBILE NETWORK ─────────────────────────
  {
    keywords: ['atm','cash','money','network','signal','internet','jio','airtel','wifi','card'],
    answer: `**ATM, Cash & Mobile Network on Char Dham Route:**\n\n💰 **Cash is King in the mountains!**\n• ATMs available in: Haridwar, Rishikesh, Uttarkashi, Guptkashi, Joshimath\n• ATMs at Yamunotri, Gangotri, Kedarnath: **Very limited or none**\n• Carry sufficient cash before each leg\n• ₹5,000–8,000 extra per person recommended\n\n📱 **Mobile Network:**\n• **BSNL** has the best mountain coverage\n• **Jio** works in most towns, patchy on routes\n• **Airtel** works in major towns only\n• **No signal** at Yamunotri, during treks, some mountain passes\n\n🌐 **Internet:**\n• Available at hotels in major towns\n• Very slow or absent at high altitudes\n\n💡 **Pro tip:** Download offline maps (Google Maps or Maps.me) before you go!`,
  },

  // ── 27. UTTARAKHAND TOURS (NON-PILGRIMAGE) ──────────────────
  {
    keywords: ['mussoorie','nainital','rishikesh','chopta','auli','corbett','skiing','rafting','adventure','hill station','wildlife'],
    answer: `**Uttarakhand Tour Packages (Non-Pilgrimage):**\n\n🏔️ **Adventure & Hills:**\n• Chopta + Tungnath Trek — ₹6,499 (2N/3D)\n• Auli Skiing Tour — ₹12,499 (3N/4D)\n• Rishikesh Adventure (Rafting + Bungee) — ₹4,999 (2N/3D)\n\n🌸 **Leisure & Sightseeing:**\n• Mussoorie + Rishikesh + Kanatal — ₹8,499 (4N/5D)\n• Haridwar + Rishikesh Spiritual — ₹5,999 (4N/5D)\n• Nainital + Kausani + Ranikhet — ₹9,999 (4N/5D)\n\n🦁 **Wildlife:**\n• Jim Corbett + Nainital — ₹13,999 (5N/6D)\n\n🌺 **UNESCO Special:**\n• Valley of Flowers + Hemkund Sahib — ₹13,499 (5N/6D)\n\n🗺️ **Complete:**\n• Grand Uttarakhand Tour — ₹22,999 (10N/11D)\n\nBrowse all at /packages/uttarakhand! 🙏`,
  },

  // ── 28. ADVANCE BOOKING / HOW EARLY ─────────────────────────
  {
    keywords: ['advance','early','how early','when to book','last minute','urgent','same week'],
    answer: `**When to Book Your Yatra:**\n\n📅 **Recommended booking windows:**\n\n🔴 **May–June (Peak):** Book **90+ days ahead**\n• Most popular season, slots fill fast\n• Helicopter packages especially — book 3 months prior!\n\n🟡 **September–October:** Book **45–60 days ahead**\n• Clear weather, great season, still busy\n\n🟢 **Off-peak:** Can book **2–3 weeks ahead**\n• Less crowded, some discounts available\n\n**Early Bird Benefits:**\n✅ 5–10% discount for 90+ days advance booking\n✅ Better hotel options\n✅ Preferred vehicle allocation\n✅ Helicopter slots secured\n\n⚡ **Last-minute bookings (under 7 days):**\nWe try our best! Call us directly — we sometimes have cancellations available.\n\n📞 +91-7017082807 — available 7 AM–9 PM daily`,
  },

  // ── 29. PANCH KEDAR / SPECIAL TOURS ─────────────────────────
  {
    keywords: ['panch kedar','5 kedar','tungnath','rudranath','madmaheshwar','kalpeshwar','five kedar'],
    answer: `**Panch Kedar Yatra — All 5 Shiva Temples:**\n\n💰 Package: **₹21,999/person** (8N/9D)\n\n**The 5 Panch Kedar temples:**\n1️⃣ **Kedarnath** (3,583m) — Shiva’s hump\n2️⃣ **Tungnath** (3,680m) — Shiva’s arms · World's highest Shiva temple!\n3️⃣ **Rudranath** (2,286m) — Shiva’s face\n4️⃣ **Madmaheshwar** (3,497m) — Shiva’s navel\n5️⃣ **Kalpeshwar** (2,134m) — Shiva’s hair · Open all year!\n\n🥾 **Trekking required** at all 5 temples (2–22 km)\n⚠️ **Moderate–challenging** fitness level needed\n📅 **Season:** May–June & September–October only\n\nThis is our most adventurous pilgrimage! Recommended for fit pilgrims who love trekking. Legendary 8-day journey. 🙏`,
  },

  // ── 30. DIFFERENCE BETWEEN CHAR DHAM & DO DHAM ──────────────
  {
    keywords: ['difference','do dham vs','char dham vs','which one','which package','2 dham or 4','choose'],
    answer: `**Char Dham vs Do Dham — Which to Choose?**\n\n🕌 **Do Dham (2 Shrines)**\n✅ Less time needed (4–7 days)\n✅ Less expensive (from ₹8,999)\n✅ Less physically demanding\n✅ Good for first-timers or limited time\n\n**Popular Do Dham options:**\n• Kedarnath + Badrinath — ₹10,999 (5N/6D)\n• Yamunotri + Gangotri — ₹8,999 (4N/5D)\n\n🏔️ **Char Dham (All 4 Shrines)**\n✅ Complete spiritual journey (Hindu belief: moksha)\n✅ Done clockwise: Yamunotri → Gangotri → Kedarnath → Badrinath\n✅ Life-changing experience\n✅ Takes 9–15 days from ₹19,500\n\n💡 **Our recommendation:**\nIf time permits — always go for **Char Dham**. Many pilgrims regret not doing all 4 in one trip. You can always do Do Dham as your first visit and return for the other 2 later!`,
  },

  // ── 31. VALLEY OF FLOWERS / HEMKUND SAHIB ──────────────────
  {
    keywords: ['valley of flowers','hemkund','hemkund sahib','gurudwara','sikh','pushpawati','flowers'],
    answer: `**Valley of Flowers + Hemkund Sahib — ₹13,499 (5N/6D)**\n\n🌸 **Valley of Flowers** — UNESCO World Heritage Site\n• 87.5 sq km of Himalayan wildflowers (500+ species!)\n• Brahma Kamal, Blue Poppy, Cobra Lily, Anemone\n• Season: **July–September** (peak bloom)\n• Trek: 4 km from Ghangaria base camp\n\n⚔️ **Hemkund Sahib** — Sikh pilgrimage at 4,329m\n• Stunning Gurudwara on banks of a glacial lake\n• Guru Gobind Singh meditated here\n• Langar (free Sikh kitchen) open to all faiths\n• Trek: 6 km steep from Ghangaria\n\n📅 **Best time: July–August–September** — Valley in full bloom!\n\n✅ Both can be done from the same Ghangaria base camp in 2 separate days\n✅ Badrinath darshan included en route\n\nThis is one of the most beautiful treks in all of India! 🌺`,
  },

  // ── 32. TEMPLE TIMINGS ───────────────────────────────────────
  {
    keywords: ['timing','darshan time','temple open','pooja time','aarti time','mahabhishek','when open','hours'],
    answer: `**Temple Darshan Timings:**\n\n🌿 **Gangotri Temple**\n• Summer: 6:00 AM – 2:00 PM & 3:00 PM – 9:00 PM\n• Evening aarti: 8:30 PM\n\n🌊 **Yamunotri Temple**\n• Summer: 6:00 AM – 12:00 PM & 2:00 PM – 8:00 PM\n\n🏔️ **Kedarnath Temple**\n• Opens: 4:30 AM (Brahma Muhurta — most auspicious!)\n• Closes: 3:00 PM & 5:00 PM – 9:00 PM\n• Evening Aarti: 7:30 PM\n• Mahabhishek Puja: 4:30 AM (book in advance!)\n\n🕌 **Badrinath Temple**\n• Opens: 4:30 AM\n• Noon Puja: 1:00 PM – 3:00 PM (closed)\n• Evening Aarti: 8:00 PM\n• Shringar Aarti: 7:30 AM\n\n💡 We arrange **VIP early morning darshan** at all temples — no 2–4 hour queues for our pilgrims! 🙏`,
  },

  // ── 33. RISHIKESH ADVENTURE ──────────────────────────────────
  {
    keywords: ['rafting','bungee','camping','adventure rishikesh','white water','river','jump','cliff'],
    answer: `**Rishikesh Adventure Package — ₹4,999 (2N/3D)**\n\n🌊 **River Rafting:**\n• 16 km Ganga rafting (Shivpuri to Rishikesh)\n• Grade II–IV rapids: Marine Drive, Three Blind Mice, Sweet Sixteen\n• All safety equipment provided\n• No experience needed!\n\n🪂 **Bungee Jumping** (optional add-on — ₹3,500)\n• 83m — India’s highest fixed-platform bungee!\n• At Jumpin Heights, Rishikesh\n\n🏕️ **Beach Camping:**\n• Camp on Ganga riverbank under stars\n• Bonfire, music, riverside dinner\n\n🧘 **Spiritual Side:**\n• Parmarth Niketan Ganga Aarti (evening)\n• Laxman Jhula & Ram Jhula\n• Beatles Ashram\n• Triveni Ghat morning dip\n\n📅 **Best time:** October – May (avoid monsoon for rafting)\n\nPerfect for groups, couples & families! 🏄`,
  },

  // ── 34. WEATHER / WHAT TO EXPECT ────────────────────────────
  {
    keywords: ['weather','temperature','rain','cold','hot','snow','climate','degree'],
    answer: `**Weather Guide for Char Dham Yatra:**\n\n**In May–June:**\n🌤️ Days: Pleasant 10°C–22°C at dhams\n❄️ Nights: Cold 2°C–8°C\n☀️ Clear skies, occasional showers in June\n\n**In September–October:**\n🌤️ Days: Cool 8°C–18°C\n❄️ Nights: Very cold 0°C–5°C\n🏔️ Crystal-clear mountain views after monsoon\n\n**At High Altitude (Kedarnath, Chandrashila):**\n❄️ Snow patches visible even in summer\n💨 Strong winds — carry windcheater always\n\n**Essential clothing:**\n✅ Thermal innerwear\n✅ Heavy fleece/sweater\n✅ Windproof outer jacket\n✅ Woollen cap and gloves\n✅ Rain poncho\n\n💡 **Rule of thumb:** Even if you’re going in May, pack clothes for 0°C. Mountain weather changes in 30 minutes!`,
  },

  // ── 35. CONTACT / OFFICE ─────────────────────────────────────
  {
    keywords: ['contact','address','office','location','haridwar','reach','where are you','email','number','call'],
    answer: `**Contact Shiv Ganga Travels:**\n\n📍 **Office:** Saptrishi Road, Near Shantikunj Gate No. 1, Bhupatwala, Haridwar, Uttarakhand 249410, India\n\n📞 **Call/WhatsApp:** +91-7017082807\n✉️ **Email:** support@shivgangatravels.com\n\n⏰ **Working Hours:**\n• Monday–Saturday: 7:00 AM – 9:00 PM IST\n• Sunday: 8:00 AM – 8:00 PM IST\n• WhatsApp: Available 24/7\n\n🌐 **Website:** www.shivgangatravels.com\n\n💡 **Response time:**\n• WhatsApp: Within 2 hours\n• Email: Within 4 hours\n• Phone: Pick up within 3 rings (working hours)\n\nWe are the **actual operator** — no agents, no middlemen. When you call, you speak directly with our yatra planning team. 🙏`,
  },

];

// ── FALLBACK AI SYSTEM PROMPT ────────────────────────────────────
export const AI_SYSTEM_PROMPT = `You are a helpful and friendly yatra planning assistant for Shiv Ganga Travels, a trusted pilgrimage tour operator based in Haridwar, Uttarakhand, India. You have been serving pilgrims for 15+ years with 50,000+ happy customers.

Key facts:
- Phone/WhatsApp: +91-7017082807
- Email: support@shivgangatravels.com
- Location: Saptrishi Road, Near Shantikunj Gate No. 1, Bhupatwala, Haridwar, Uttarakhand 249410
- Speciality: Char Dham Yatra, Uttarakhand tours
- All packages are zero-commission, all-inclusive (hotel + meals + transport + guide)
- Prices: Single dham from ₹5,299, Do Dham from ₹8,999, Char Dham from ₹19,500, Helicopter ₹85,000
- Working hours: 7 AM - 9 PM IST, WhatsApp 24/7

Rules:
- Keep answers concise (under 120 words) and warm
- Speak in first person as the company ("We offer...", "Our packages...")
- Use Indian pilgrimage context (VIP darshan, biometric registration, pony/palki, etc.)
- For bookings, always direct to WhatsApp: +91-7017082807
- Use ₹ for prices, not USD
- Use occasional 🙏 emoji but sparingly
- Never invent prices — say "please WhatsApp us for an exact quote"
- Always end with a soft CTA`;
