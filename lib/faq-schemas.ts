type FaqItem = {
  question: string;
  answer: string;
};

function buildFaqSchema(items: FaqItem[]): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

// ─── HOME PAGE ───────────────────────────────────────────────────────────────
const homeFaq = buildFaqSchema([
  {
    question: "How do I know which dental treatment I need ?",
    answer:
      "The right treatment depends on the cause of the problem, your tooth condition, gum health, and overall dental needs. Visit Eledent Dental Hospital for a consultation so our specialists can examine the issue, take scans if needed, and guide you to the right treatment plan.",
  },
  {
    question:
      "Do I need an appointment before visiting Eledent Dental Hospital branches in Hyderabad?",
    answer:
      "Booking an appointment before visiting Eledent Dental Hospital is recommended because it helps reduce waiting time and connects you with the right specialist faster. Call +91 7799619994 to book your appointment at any of the 5 Hyderabad branches most convenient for you.",
  },
  {
    question:
      "Do dental specialists at Eledent Dental Hospital treat both children and adults?",
    answer:
      "Yes. Our expert dentists in Hyderabad at Eledent Dental Hospital provide dental care for children, teenagers, adults, and senior patients. You can book an appointment for child dental care, braces, smile correction, pain treatment, or missing teeth solutions based on your family's needs.",
  },
  {
    question: "What should I expect during my first visit to Eledent Dental Hospital?",
    answer:
      "Your first visit at the best dental clinic in Hyderabad usually includes a discussion about your concern, a dental examination, and scans or X-rays if required. After that, our team explains the diagnosis, treatment options, expected timeline, and the next step, so you can move forward with clarity.",
  },
  {
    question:
      "Can I visit Eledent Dental Hospital for tooth pain or a dental emergency?",
    answer:
      "Yes. If you have tooth pain, swelling, a broken tooth, gum infection, or sudden discomfort, visit Eledent Dental Hospital as early as possible for prompt evaluation. Our specialists will identify the cause and help you start the right treatment without unnecessary delay.",
  },
  {
    question:
      "Do you offer smile correction and cosmetic dental treatments at Eledent Dental Hospital?",
    answer:
      "Yes. Eledent Dental Hospital offers smile-focused treatments such as teeth whitening, veneers, crowns, aligners, and smile makeovers based on your dental condition and cosmetic goals. Book a consultation to understand which option suits your smile best.",
  },
]);

// ─── ABOUT US PAGE ───────────────────────────────────────────────────────────
const aboutFaq = buildFaqSchema([
  // About Us ke FAQ yahan add karo
]);

// ─── SERVICES PAGE ───────────────────────────────────────────────────────────
const servicesFaq = buildFaqSchema([
  // Services listing ke FAQ yahan add karo
]);

// ─── CONTACT US PAGE ─────────────────────────────────────────────────────────
const contactFaq = buildFaqSchema([
  // Contact Us ke FAQ yahan add karo
]);

// ─── DENTAL TOURISM PAGE ─────────────────────────────────────────────────────
const dentalTourismFaq = buildFaqSchema([
  // Dental Tourism ke FAQ yahan add karo
]);

// ─── TECHNOLOGY PAGE ─────────────────────────────────────────────────────────
const technologyFaq = buildFaqSchema([
  // Technology ke FAQ yahan add karo
]);

// ─── FACILITY PAGE ───────────────────────────────────────────────────────────
const facilityFaq = buildFaqSchema([
  // Facility ke FAQ yahan add karo
]);

// ─── CORPORATE TIE-UPS PAGE ──────────────────────────────────────────────────
const corporateFaq = buildFaqSchema([
  // Corporate Tie-Ups ke FAQ yahan add karo
]);

// ─── GBT PAGE ────────────────────────────────────────────────────────────────
const gbtFaq = buildFaqSchema([
  {
    question: "What is Guided Biofilm Therapy in Hyderabad?",
    answer:
      "Guided Biofilm Therapy in Hyderabad is a professional teeth cleaning approach that focuses on detecting and removing biofilm from teeth and gums in a more systematic way. Eledent describes it as a combination of air abrasion and ultrasonic technologies.",
  },
  {
    question: "How is Guided Biofilm Therapy different from regular teeth cleaning?",
    answer:
      "Guided Biofilm Therapy is more targeted than a routine cleaning because it focuses specifically on highlighting and removing biofilm from visible and hard-to-reach areas. It is designed to be more structured and preventive.",
  },
  {
    question: "Is GBT cleaning painful?",
    answer:
      "GBT cleaning is generally designed to be minimally invasive and more comfortable than older cleaning approaches. Eledent's page also describes Guided Biofilm Therapy as gentler and effective at removing biofilm.",
  },
  {
    question: "Who may benefit from Guided Biofilm Therapy?",
    answer:
      "Guided Biofilm Therapy may help patients with plaque build-up, gum concerns, braces, implants, or those who need more preventive dental cleaning. A dental check-up helps decide whether GBT treatment in Hyderabad is suitable for you.",
  },
  {
    question: "Does Guided Biofilm Therapy help with gum health?",
    answer:
      "Yes, Guided Biofilm Therapy can support better gum health because it removes biofilm, which Eledent's page identifies as a primary cause of dental diseases such as caries and periodontal disease.",
  },
  {
    question: "How often should I get Guided Biofilm Therapy?",
    answer:
      "The ideal frequency for Guided Biofilm Therapy depends on your gum condition, plaque levels, braces, implants, and oral hygiene habits. Your dentist or hygienist can recommend a cleaning schedule based on your risk and recall needs.",
  },
]);

// ─── SERVICE PAGES ───────────────────────────────────────────────────────────
// Path = /services/<slug> — slug CMS se match karna chahiye
// ─── dental-implants ─────────────────────────────────────────────────────────
const dentalImplantsFaq = buildFaqSchema([
  {
    question: "What is the cost of dental implants in Hyderabad?",
    answer:
      "For dental implants in Hyderabad, single-implant fees (per unit) are: Noris ₹22,999, Alphabio ₹24,999, Dio ₹28,999, Osstem ₹29,999, Nobel Replace ₹39,499, Nobel Active ₹49,999, Straumann BLX ₹36,999, Straumann Roxolid ₹48,999. Final estimate is shared after clinical and radiographic evaluation (abutment/crown and any adjuncts assessed at consult).",
  },
  {
    question: "What are the All-on-4 / All-on-6 full-arch costs?",
    answer:
      "Per arch: All-on-4 / All-on-6- Noris ₹91,996 / ₹1,37,994 · Alphabio ₹99,996 / ₹1,49,994 · Dio ₹1,15,996 / ₹1,73,994 · Osstem ₹1,19,996 / ₹1,79,994 · Nobel Replace ₹1,57,996 / ₹2,36,994 · Nobel Active ₹1,99,996 / ₹2,99,996 · Straumann BLX ₹1,47,996 / ₹2,21,994 · Straumann Roxolid ₹1,95,996 / ₹2,93,994. Your surgeon will confirm prosthetic type and staging after planning.",
  },
  {
    question:
      "Am I a candidate for implants, and how do I start if I'm searching for a \"dental implant near me\"?",
    answer:
      "Most adults with adequate bone and healthy gums qualify. We check medical history, CBCT/X-rays, and bite, then plan grafts or sinus lifts only if required. Book a consultation at just ₹300 and we'll map your personalised implant plan, timeline, and total costs.",
  },
  {
    question: "What is the step-by-step process at Eledent Dental Hospital?",
    answer:
      "Records & CBCT → digital planning → guided placement (when indicated) → healing/osseointegration → abutment + crown. The same protocol is followed for dental implants in Kondapur and dental implants in Kukatpally at Eledent Dental Hospital, with clear milestones and review visits.",
  },
  {
    question: "How long do implants last, and which Eledent branches place them?",
    answer:
      "With good hygiene and reviews, implants are designed for long-term function. You can book at branches offering dental implants in Banjara Hills and dental implants in Manikonda; our specialist team focuses on precision, comfort, and predictable outcomes, delivering some of the best dental implants in Hyderabad. Call us at 7799619994 to book your appointment now.",
  },
]);

// ─── dental-braces ───────────────────────────────────────────────────────────
const dentalBracesFaq = buildFaqSchema([
  {
    question: "What is the cost of dental braces in Hyderabad, and what affects it?",
    answer:
      "At Eledent Dental Hospital, per-arch fees are: Basic Metal ₹35,000, Basic Ceramic ₹65,000, Self-Ligating Metal ₹55,000, Self-Ligating Ceramic ₹85,000, Damon Metal ₹95,000, Damon Ceramic ₹1,05,000. Final cost depends on bite complexity, crowding/spacing, aesthetic preference, treatment duration, and the retainer plan.",
  },
  {
    question:
      "Which braces are best, metal, ceramic, self-ligating, or Damon, and how do they differ?",
    answer:
      "Metal: durable, cost-effective. Ceramic: tooth-coloured, more aesthetic. Self-ligating (metal/ceramic): low friction, fewer adjustments. Damon (metal/ceramic): self-ligating system with refined mechanics and comfort features. Your orthodontist at Eledent Dental Hospital recommends the system after clinical records and digital planning.",
  },
  {
    question: "How long does braces treatment take, and how often are review visits?",
    answer:
      "Most cases take 12–24 months, depending on crowding, bite correction, and compliance. Reviews are typically every 4–8 weeks (self-ligating/Damon may allow slightly longer intervals). You'll receive a personalised timeline after assessment at Eledent Dental Hospital.",
  },
  {
    question:
      "Are ceramic or self-ligating braces faster or more comfortable than basic metal braces?",
    answer:
      "Ceramic prioritises appearance; speed is case-dependent. Self-ligating/Damon brackets can reduce friction and chair time and may space out visits, but overall speed still depends on biology, alignment goals, and elastic/auxiliary wear. Your Eledent Dental Hospital orthodontist will advise.",
  },
  {
    question: "Can I choose clear (aesthetic) options and still get effective results?",
    answer:
      "Yes. Ceramic and self-ligating ceramic systems provide effective tooth movement with a discreet look. Eledent Dental Hospital balances aesthetics, comfort, and biomechanics for stable results, followed by retainers to maintain alignment.",
  },
]);

// ─── dental-crowns ───────────────────────────────────────────────────────────
const dentalCrownsFaq = buildFaqSchema([
  {
    question: "What is the cost of a dental crown in Hyderabad, and what affects it?",
    answer:
      "For a dental crown in Hyderabad, prices per unit are: Nickel-Chromium ₹4,000; PFM ₹7,000; Zirconia ₹8,000–₹18,000 (Basic/Monolith/Platinum Plus); All-ceramic ₹15,000–₹18,000. Final cost depends on material, tooth position, post-RCT/core build-up needs, bite adjustments, and same-day CAD/CAM eligibility. Consultation: ₹300.",
  },
  {
    question: "Which crown is best—zirconia, all-ceramic (E-max), or PFM?",
    answer:
      "A zirconia crown in Hyderabad is usually chosen for strength on back teeth; all-ceramic/E-max excels for front-tooth aesthetics; PFM balances durability and budget. Your dentist confirms the ideal option after clinical exam, digital scan, and bite analysis to match function, look, and cost.",
  },
  {
    question: "Can I get a same-day CAD/CAM crown in Hyderabad?",
    answer:
      "Yes—same-day CAD/CAM crowns are available for eligible cases. Workflow: scan → chairside design → mill → fit in one visit; complex cases use a short two-visit plan. If you're searching dental crown near me or comparing dental crown in Kukatpally, we'll confirm suitability during your consult.",
  },
  {
    question: "How long does a crown last, and what aftercare is required?",
    answer:
      "With proper planning and hygiene, crowns are long-lasting. Expect brief sensitivity (24–48h); avoid very hard/sticky foods initially, maintain brushing/flossing, and attend bite/margin checks. This applies whether you book a dental crown in Manikonda or a dental crown in Kondapur.",
  },
  {
    question: "Do I need a crown after a root canal, and how soon can it be placed?",
    answer:
      "Most root-canal-treated teeth benefit from a crown to prevent fractures and restore function. Once symptoms settle and the core build-up is complete, we can place a same-day CAD/CAM crown (if suitable) or proceed with a precise two-visit plan, even when you're considering a dental crown in Banjara Hills.",
  },
]);

// ─── laser-gum-treatment ─────────────────────────────────────────────────────
const laserGumTreatmentFaq = buildFaqSchema([
  {
    question: "Is laser gum treatment painful?",
    answer:
      "Laser gum treatment is not usually painful. We give local anesthesia to keep you comfortable, and most patients feel only mild soreness after the procedure.",
  },
  {
    question: "How much does laser gum treatment cost in Manikonda?",
    answer:
      "At Eledent Dental Hospital, laser gum procedures like gingivectomy start at ₹5,000 per quadrant and laser flap surgery at ₹6,000 per quadrant. Your exact cost depends on how many areas need treatment after a gum evaluation.",
  },
  {
    question: "How many visits are needed for laser gum treatment?",
    answer:
      "Localised cases may be completed in one or two visits, while full-mouth gum disease may need a few sessions. Our dentist will explain the number of sittings after checking your gum pockets.",
  },
  {
    question: "Is laser gum treatment safe for diabetic patients?",
    answer:
      "Yes, laser gum treatment can be suitable for diabetic patients because it is minimally invasive and helps control infection. Our specially trained dentists check your blood sugar levels and medical history before planning treatment.",
  },
  {
    question: "Will laser gum treatment stop my gums from bleeding?",
    answer:
      "In many cases, yes. By removing infection and reducing gum pockets, laser treatment often reduces or stops bleeding when combined with proper cleaning and daily oral hygiene.",
  },
  {
    question: "Will I have swelling after wisdom tooth removal?",
    answer:
      "Mild to moderate swelling is common and usually peaks in the first 48–72 hours. Using cold compresses, taking medicines on time, and following instructions helps reduce it faster. If swelling increases after a few days, you should contact the clinic for review.",
  },
]);

// ─── clear-aligners ──────────────────────────────────────────────────────────
const clearAlignersFaq = buildFaqSchema([
  {
    question: "Do braces or aligners hurt?",
    answer:
      "Mild discomfort is common with braces and aligners, especially for the first few days. This pressure is normal and means teeth are moving. Simple pain relief, soft foods and warm salt-water rinses usually help.",
  },
  {
    question: "Which is better for me, braces or clear aligners?",
    answer:
      "Braces and clear aligners both work well when selected correctly. Braces can treat simple and complex cases, including larger bite changes. Clear aligners are almost invisible and removable, best for teens and adults who can wear them for the recommended hours. Our orthodontist in Hyderabad will advise based on your bite, lifestyle and expectations.",
  },
  {
    question: "Can adults also get braces or aligners?",
    answer:
      "Yes. Adults can successfully straighten their teeth with both braces and clear aligners. Many working professionals in Hyderabad choose ceramic braces or clear aligners for a more discreet look during work and social events.",
  },
  {
    question: "Can veneers fix gaps or slightly crooked teeth?",
    answer:
      "Yes, veneers can fix small gaps and minor misalignment. Larger corrections may need braces or aligners.",
  },
  {
    question: "Are there food restrictions with braces?",
    answer:
      "Yes, with fixed braces you should avoid very hard, sticky or chewy foods such as hard nuts, caramel, sticky sweets and chewing gum as these can damage brackets or wires. Clear aligners can be removed while eating but you should still follow good oral hygiene habits.",
  },
  {
    question: "Will aligners fix my bite as well as my smile?",
    answer:
      "Clear aligners can correct many spacing, crowding and mild bite problems. Some complex bite or jaw cases are still better treated with braces. During your consultation, our orthodontist will explain what is realistic for your particular jaw and tooth position.",
  },
]);

// ─── root-canal-treatment ────────────────────────────────────────────────────
const rootCanalFaq = buildFaqSchema([
  {
    question: "What is the cost of a root canal in Hyderabad?",
    answer:
      "For root canal treatment in Hyderabad, fees are Anterior ₹5,000, Posterior ₹5,500, Laser ₹9,000, and Microscopic ₹12,000 (per tooth). Prices vary by infection level, tooth position, and whether advanced techniques are needed. Book a consultation at just ₹300 to confirm the plan and exact estimate.",
  },
  {
    question: "Is a root canal painful?",
    answer:
      "Eledent Dental Hospital provides painless root canal treatment in Hyderabad using local anaesthesia and modern endodontic techniques (including laser or microscopic options where indicated). Most patients report only brief post-procedure soreness, managed with the medications your dentist prescribes.",
  },
  {
    question: "How many visits does a root canal take, and what's the process?",
    answer:
      "Many cases finish in 1–2 visits depending on infection and healing response. Typical flow for a root canal near me searcher: exam + X-ray, cleaning and shaping of canals, medication if needed, and final sealing with a recommended crown for long-term strength.",
  },
  {
    question: "Do you perform root canals at Kondapur and Kukatpally?",
    answer:
      "Yes, root canal treatment in Kondapur and root canal treatment in Kukatpally follow the same Eledent Dental Hospital protocol: diagnosis, anaesthesia, rotary cleaning, seal, and crown planning. Your dentist will advise if laser/microscopic support is beneficial for your tooth.",
  },
  {
    question: "Are services available at Banjara Hills and Manikonda too?",
    answer:
      "Yes, root canal treatment in Banjara Hills and root canal treatment in Manikonda are offered with identical standards, including advanced options and crown guidance after therapy. Expect clear timelines, after-care instructions, and scheduled reviews to protect your treated tooth.",
  },
]);

// ─── smile-makeover ──────────────────────────────────────────────────────────
const smileMakeoverFaq = buildFaqSchema([
  {
    question: "Is a smile makeover painful at Eledent Dental Hospitals?",
    answer:
      "Most procedures are painless because we use local anaesthesia. You may feel mild sensitivity afterward, which usually settles with medication.",
  },
  {
    question: "How long does a smile makeover treatment take?",
    answer:
      "Mild cases may take 2–3 visits, while veneers, crowns, alignment correction, or multi-tooth work may take a few weeks. Your exact timeline is given after your smile assessment.",
  },
  {
    question: "Can I choose how white I want my teeth to be?",
    answer:
      "Yes, you can pick from natural to bright shades, and we help you choose what suits your face best.",
  },
  {
    question:
      "Will I need braces or clear aligners, or can veneers alone fix my smile?",
    answer:
      "Minor alignment issues may be corrected with veneers but moderate or severe misalignment may need aligners or braces first.",
  },
  {
    question: "How soon should I start if I have a wedding or event?",
    answer:
      "Start early, especially for full smile designs. Simple cases finish in days or weeks while complex cases take longer.",
  },
]);

// ─── teeth-whitening ─────────────────────────────────────────────────────────
const teethWhiteningFaq = buildFaqSchema([
  {
    question: "What is the cost of teeth whitening in Hyderabad, and what affects the price?",
    answer:
      "Costs for teeth whitening treatment in Hyderabad vary by method (in-clinic vs at-home trays), stain depth, shade goals, and sensitivity care. An exam confirms the protocol and final quote. Book a consultation at Eledent Dental Hospital at just ₹300, and get the exact estimate for teeth whitening in Hyderabad.",
  },
  {
    question:
      "How many sessions does professional teeth whitening take, and how long do results last?",
    answer:
      "Most teeth whitening in Hyderabad finishes in one in-clinic visit; deeper stains may need touch-ups. Results typically last months to a year+, depending on diet, smoking, and hygiene, with optional maintenance trays.",
  },
  {
    question: "Is teeth whitening safe for sensitive teeth, and does it damage enamel?",
    answer:
      "Dentist-supervised whitening is safe and does not thin enamel. Our expert dentists at Eledent Dental Hospital tailor protocols for sensitivity with desensitizing gels and fluoride, available for teeth whitening in Manikonda and teeth whitening in Banjara Hills.",
  },
  {
    question: "Which is better: in-clinic whitening or at-home kits?",
    answer:
      "In-clinic whitening delivers faster, more controlled results; at-home kits help maintain or gradually improve shade. Whether you're searching for the best teeth whitening near me or teeth whitening in Kukatpally, book your visit at Eledent Dental Hospital to find the best answers.",
  },
  {
    question: "Can I get same-day whitening, and what aftercare is needed?",
    answer:
      "Same-day in-clinic whitening is available for eligible cases at Eledent Dental Hospital. Book your consultation now at +91-77996-19994. Aftercare includes avoiding strong stains (tea/coffee, wine, tobacco) for 24–48 hours and follow sensitivity guidance.",
  },
]);

// ─── wisdom-tooth-extraction ─────────────────────────────────────────────────
const wisdomToothFaq = buildFaqSchema([
  {
    question: "When should wisdom teeth be removed?",
    answer:
      "Wisdom teeth are usually removed when they cause pain, infection, swelling, decay, or start pushing other teeth out of alignment. Impacted teeth that cannot erupt properly are also often removed as a preventive step.",
  },
  {
    question: "Is wisdom tooth extraction painful?",
    answer:
      "No, the procedure at our clinics is done under local anesthesia so you should not feel pain. You may feel some pressure. Mild discomfort after the procedure is normal and can be managed with prescribed medicines and cold compresses.",
  },
  {
    question: "How long does it take to recover from wisdom tooth removal?",
    answer:
      "Most patients feel better in 3–5 days after the procedure. Complete healing of the socket takes a few weeks, but you can usually resume work or study in a day or two, depending on the complexity of the case.",
  },
  {
    question: "How much does wisdom tooth removal cost?",
    answer:
      "The cost depends on whether the tooth is simple or impacted, how many teeth are being removed, and whether special imaging or surgical steps are required. You will receive a clear estimate after your consultation and X-ray.",
  },
  {
    question: "How many visits are needed for wisdom tooth extraction?",
    answer:
      "In many cases, consultation, X-ray, and extraction can be done in a single visit. Complex or multiple extractions may require additional visits for review and suture removal.",
  },
  {
    question: "Will I have swelling after wisdom tooth removal?",
    answer:
      "Mild to moderate swelling is common and usually peaks in the first 48–72 hours. Using cold compresses, taking medicines on time, and following instructions helps reduce it faster. If swelling increases after a few days, you should contact the clinic for review.",
  },
]);

// ─── atraumatic-extraction ───────────────────────────────────────────────────
const atraumaticExtractionFaq = buildFaqSchema([
  {
    question: "What is atraumatic extraction in Hyderabad?",
    answer:
      "Atraumatic extraction in Hyderabad is a minimally invasive tooth removal technique that helps protect the surrounding bone, gums and socket. At Eledent Dental Hospitals, it is used when gentle extraction and better healing support are important.",
  },
  {
    question: "When do dentists recommend atraumatic tooth extraction?",
    answer:
      "Dentists recommend atraumatic tooth extraction when a damaged, infected or fractured tooth needs removal with minimal trauma. It is especially useful when the patient may need immediate or future dental implant placement.",
  },
  {
    question: "Is atraumatic extraction less painful than regular tooth removal?",
    answer:
      "Atraumatic extraction is usually more comfortable than regular forceps-based extraction because it uses controlled pressure and specialised tools. This can reduce tissue damage, swelling and post-operative discomfort.",
  },
  {
    question: "What are the benefits of atraumatic extraction?",
    answer:
      "The main benefits of atraumatic extraction include bone preservation, faster healing, less swelling, reduced tissue trauma and better support for dental implant placement.",
  },
  {
    question: "Can I get a dental implant after atraumatic extraction?",
    answer:
      "Yes, a dental implant can be placed after atraumatic extraction if the bone condition is suitable. In some cases, Eledent Dental Hospitals may also plan same-day implant placement after extraction.",
  },
  {
    question: "Where can I get atraumatic extraction in Hyderabad?",
    answer:
      "You can get atraumatic extraction at Eledent Dental Hospitals in Hyderabad across Kondapur, Kukatpally, Manikonda, Banjara Hills and Kompally.",
  },
]);

// ─── dental-fillings ─────────────────────────────────────────────────────────
const dentalFillingsFaq = buildFaqSchema([
  {
    question: "When do dentists recommend a dental filling?",
    answer:
      "Dentists recommend a dental filling in Hyderabad when a tooth has a cavity, small crack, or early decay. A filling removes the damaged part of the tooth and seals the space so the tooth can function normally again.",
  },
  {
    question: "How do I know if I need a tooth filling?",
    answer:
      "You may need a tooth filling treatment in Hyderabad if you notice tooth sensitivity, pain while chewing, dark spots on teeth, or food getting stuck in one area repeatedly. A dental check-up helps confirm whether a filling or another treatment is needed.",
  },
  {
    question: "Is dental filling treatment painful?",
    answer:
      "Most dental filling procedures in Hyderabad are comfortable because dentists use local anaesthesia when required. Patients usually feel only mild pressure during the procedure, and the treatment is completed quickly.",
  },
  {
    question: "What types of dental fillings are available?",
    answer:
      "Dentists usually offer different types of dental fillings in Hyderabad, including tooth-coloured composite fillings, glass ionomer fillings, and ceramic fillings. The right option depends on the size of the cavity and the tooth location.",
  },
  {
    question: "How long does a dental filling procedure take?",
    answer:
      "A dental filling treatment usually takes about 20 to 40 minutes depending on the size of the cavity and the tooth involved. Larger cavities may take slightly longer because the tooth needs proper cleaning and preparation before the filling is placed.",
  },
  {
    question: "Can cavities come back after a dental filling?",
    answer:
      "Yes, cavities can return if plaque builds up around the filling or if oral hygiene is not maintained. Regular brushing, flossing, and dental check-ups at a dental hospital in Hyderabad help protect both the filling and the natural tooth.",
  },
  {
    question: "When should I visit a dentist for cavity treatment?",
    answer:
      "You should visit a dentist as soon as you notice tooth pain, sensitivity to hot or cold, or visible tooth damage. Early cavity treatment in Hyderabad helps prevent the need for more complex procedures like root canal treatment.",
  },
  {
    question: "Where can I get dental filling treatment in Hyderabad?",
    answer:
      "You can visit Eledent Dental Hospital, a multi-speciality dental hospital in Hyderabad, for diagnosis and cavity treatment. Our specialists examine the tooth, explain the condition clearly, and guide you to the right filling treatment.",
  },
  {
    question: "How long do tooth fillings last?",
    answer:
      "Most tooth fillings can last many years when maintained properly. Composite fillings often last around 5–10 years, while ceramic fillings can last even longer with good oral hygiene and regular dental check-ups.",
  },
]);

// ─── toothache-treatment ─────────────────────────────────────────────────────
const toothacheFaq = buildFaqSchema([
  {
    question: "Do all toothaches need a root canal?",
    answer:
      "Not always, minor cavities may only need a filling. A root canal is required when the tooth nerve (pulp) is infected or damaged.",
  },
  {
    question: "How soon should I see a dentist for a toothache?",
    answer:
      "You should visit a dentist immediately if the pain is severe, persistent, or associated with swelling, fever, or difficulty chewing.",
  },
  {
    question: "Is tooth pain treatment painful?",
    answer:
      "No, at Eledent Dental Hospitals, modern anaesthesia and advanced tools are used to keep treatment as comfortable as possible.",
  },
  {
    question: "How long does dental treatment take?",
    answer:
      "Simple fillings are usually completed in one visit. Root canal treatment may take one or more visits depending on the tooth and severity of infection.",
  },
  {
    question: "Where can I get urgent toothache treatment in Hyderabad?",
    answer:
      "You can visit Eledent Dental Hospitals branches in Kondapur, Kukatpally, Manikonda, Kompally and Banjara Hills. Same-day appointments are available for patients needing urgent toothache treatment in Hyderabad.",
  },
]);

// ─── invisalign ──────────────────────────────────────────────────────────────
const invisalignFaq = buildFaqSchema([
  {
    question:
      "What is the cost of Invisalign treatment in Hyderabad, and what factors change the price?",
    answer:
      "At Eledent Dental Hospital, clear-aligner fees are Invisalign ₹2,25,000, ClearCorrect ₹1,80,000, and V Clear ₹1,50,000. Final cost depends on case complexity, number of aligner stages/refinements, need for attachments or elastics, and the retainer plan at the end.",
  },
  {
    question: "How long does Invisalign take, and how often do I change aligners?",
    answer:
      "Most cases finish in 6–18 months; complex corrections may take longer. You'll typically wear trays 20–22 hours/day and switch every 7–14 days, with review visits about every 6–8 weeks to track movement and plan refinements.",
  },
  {
    question: "Am I a good candidate for Invisalign or are braces better for my case?",
    answer:
      "Invisalign works well for crowding, spacing, and many bite corrections. Severe skeletal discrepancies or complex rotations may respond better to braces. Your clinician confirms suitability after a clinical exam, digital scan, and X-rays at Eledent Dental Hospital.",
  },
  {
    question: "What is the step-by-step Invisalign process at Eledent Dental Hospital?",
    answer:
      "Consult & records → digital 3D plan → case approval → attachments/IPR (if needed) → aligner wear 20–22h/day → reviews every 6–8 weeks → refinements (if required) → retainers to hold the result. This is the standard workflow for Invisalign treatment in Hyderabad.",
  },
  {
    question: "Is Invisalign painful, and what aftercare or diet rules should I follow?",
    answer:
      "Expect mild pressure for 1–3 days after each tray change. Remove aligners to eat; avoid hot drinks while wearing them; brush/rinse before reinserting; clean trays daily. Wear retainers after treatment to maintain alignment.",
  },
]);

// ─── pediatric-dentistry ─────────────────────────────────────────────────────
const pediatricDentistryFaq = buildFaqSchema([
  {
    question: "At what age should my child first visit the dentist?",
    answer:
      "Children should visit a dentist when their first tooth appears or by their first birthday. Early visits help monitor tooth development, prevent cavities, and get children comfortable with dental care from a young age.",
  },
  {
    question: "Is dental treatment safe for young children?",
    answer:
      "Yes, dental treatment at Eledent Dental Hospitals is safe for children. Our team uses child-friendly techniques, gentle handling, and age-appropriate tools to make each visit as comfortable and stress-free as possible.",
  },
  {
    question: "How do I know if my child needs braces or orthodontic treatment?",
    answer:
      "Signs include crowded or misaligned teeth, difficulty chewing, thumb sucking habits, or early or late loss of baby teeth. A dental check-up at Eledent Dental Hospitals can confirm whether orthodontic treatment is needed and when to start.",
  },
  {
    question: "What are dental sealants and does my child need them?",
    answer:
      "Dental sealants are thin protective coatings applied to the back teeth to prevent cavities. They are especially helpful for children who are prone to tooth decay. Our dentist will advise whether sealants are suitable after examining your child's teeth.",
  },
  {
    question: "How can I prevent cavities in my child's teeth?",
    answer:
      "Regular brushing twice a day with fluoride toothpaste, reducing sugary snacks and drinks, dental sealants, and routine check-ups every six months are the best ways to prevent cavities in children.",
  },
  {
    question: "Does my child need X-rays at every dental visit?",
    answer:
      "Not necessarily. X-rays are taken only when clinically required to check for hidden decay, monitor jaw development, or assess tooth eruption. At Eledent Dental Hospitals, we follow guidelines to minimise exposure while ensuring accurate diagnosis.",
  },
]);

// ─── teeth-gap-treatment ─────────────────────────────────────────────────────
const teethGapFaq = buildFaqSchema([
  {
    question: "What causes gaps between teeth?",
    answer:
      "Gaps between teeth can be caused by a size mismatch between the jaw and teeth, missing teeth, habits like thumb sucking, gum disease, or natural tooth spacing. A dental examination helps identify the exact cause before choosing the right treatment.",
  },
  {
    question: "Can gaps between teeth be closed without braces?",
    answer:
      "Yes, small to moderate gaps can often be closed using dental veneers, composite bonding, or dental crowns without braces. Larger gaps or those caused by bite issues may need aligners or braces for a stable and lasting result.",
  },
  {
    question: "How long does teeth gap treatment take at Eledent Dental Hospitals?",
    answer:
      "Treatment time depends on the method used. Composite bonding or veneers can be completed in one or two visits. Aligners or braces for gap closure may take a few months to over a year depending on the size of the gap and bite correction needed.",
  },
  {
    question: "Is teeth gap treatment permanent?",
    answer:
      "Most gap treatments provide long-lasting results. Veneers and crowns can last many years with good care. Orthodontic treatment followed by retainers helps maintain the corrected spacing. Your dentist at Eledent will explain what to expect for your specific case.",
  },
  {
    question: "What is the cost of teeth gap treatment in Hyderabad?",
    answer:
      "The cost of teeth gap treatment in Hyderabad depends on the method chosen, the number of teeth involved, and whether orthodontic correction is needed. Book a consultation at Eledent Dental Hospitals at ₹300 for an accurate estimate.",
  },
  {
    question: "Can veneers close large gaps between front teeth?",
    answer:
      "Veneers work well for small to moderate gaps. Very large gaps may need a combination approach such as aligners to reduce the gap first, followed by veneers to refine the appearance. Your dentist will recommend the best option after assessment.",
  },
]);

// ─── single-visit-dentistry ───────────────────────────────────────────────────
const singleVisitDentistryFaq = buildFaqSchema([
  {
    question: "What is single visit dentistry?",
    answer:
      "Single visit dentistry means completing a dental procedure such as a filling, crown, or root canal in one appointment instead of multiple visits. At Eledent Dental Hospitals, advanced technology and skilled specialists make same-day treatment possible for many cases.",
  },
  {
    question: "Which treatments can be completed in a single visit?",
    answer:
      "Many treatments can be done in one visit at Eledent Dental Hospitals, including dental fillings, CAD/CAM crowns, single-visit root canal treatment, and some extractions. Your dentist will confirm whether your case qualifies during the initial assessment.",
  },
  {
    question: "Is single visit root canal treatment safe and effective?",
    answer:
      "Yes, single visit root canal treatment is safe for suitable cases and offers the same clinical outcomes as multi-visit treatment. It is performed under local anaesthesia with rotary instruments and may include laser or microscopic support when indicated.",
  },
  {
    question: "How is single visit dentistry different from regular multi-visit treatment?",
    answer:
      "Single visit dentistry uses advanced technology and efficient clinical protocols to complete treatment in one sitting, saving you time and reducing the number of appointments. Not all cases qualify — complex infections or extensive work may still need multiple visits.",
  },
  {
    question: "Is single visit dental treatment painful?",
    answer:
      "No. All single visit procedures at Eledent Dental Hospitals are performed under local anaesthesia. Most patients feel only mild pressure during treatment and brief sensitivity afterward, managed with prescribed medication.",
  },
]);

// ─── conscious-sedation ───────────────────────────────────────────────────────
const consciousSedationFaq = buildFaqSchema([
  {
    question: "What is conscious sedation dentistry?",
    answer:
      "Conscious sedation dentistry uses medication to help patients feel deeply relaxed and calm during dental treatment. You remain awake and able to respond, but anxiety and discomfort are significantly reduced. It is offered at Eledent Dental Hospitals for patients who experience dental fear or need longer procedures.",
  },
  {
    question: "Who needs conscious sedation for dental treatment?",
    answer:
      "Conscious sedation is recommended for patients with high dental anxiety, a strong gag reflex, difficulty sitting still for long procedures, or those undergoing multiple treatments in one session. It is also helpful for patients with special needs.",
  },
  {
    question: "Will I be awake during conscious sedation?",
    answer:
      "Yes, you remain conscious and able to respond to instructions during conscious sedation. However, most patients feel deeply relaxed and have little or no memory of the procedure afterward.",
  },
  {
    question: "Is conscious sedation safe?",
    answer:
      "Yes, conscious sedation is safe when administered by trained dental professionals. At Eledent Dental Hospitals, your medical history and health condition are reviewed before sedation is planned, and you are monitored throughout the procedure.",
  },
  {
    question: "How long does the sedation effect last after the procedure?",
    answer:
      "The effects of conscious sedation usually wear off within a few hours. You will need someone to accompany you home and should avoid driving or operating machinery for the rest of the day.",
  },
  {
    question: "Can children receive conscious sedation for dental treatment?",
    answer:
      "Conscious sedation for children is considered in specific cases where a child is very anxious, uncooperative, or requires lengthy dental work. Our dental team evaluates the child's age, health, and dental needs before recommending sedation.",
  },
]);

// ─── microscopic-dentistry ────────────────────────────────────────────────────
const microscopicDentistryFaq = buildFaqSchema([
  {
    question: "What is microscopic dentistry?",
    answer:
      "Microscopic dentistry uses a dental operating microscope to magnify the treatment area, giving the dentist a highly detailed view during procedures. It improves precision, reduces the chance of errors, and supports more conservative treatment.",
  },
  {
    question: "Which dental treatments use a dental microscope?",
    answer:
      "Microscopic dentistry is most commonly used for root canal treatment, where canals are narrow and difficult to see. It is also used for crown preparation, periodontal surgery, and complex restorative work that requires enhanced precision.",
  },
  {
    question: "Is microscopic dentistry more accurate than regular dentistry?",
    answer:
      "Yes. The magnification provided by the dental microscope allows the dentist to detect issues that are invisible to the naked eye, clean canals more thoroughly, and preserve more of the natural tooth structure.",
  },
  {
    question: "Does microscopic root canal treatment cost more than regular root canal?",
    answer:
      "Microscopic root canal treatment is priced higher than a standard root canal because of the specialised equipment and additional skill required. At Eledent Dental Hospitals, microscopic root canal is available at ₹12,000 per tooth. Book a consultation to confirm whether this option is suitable for you.",
  },
  {
    question: "Who benefits most from microscopic dentistry?",
    answer:
      "Patients with complex root canal anatomy, retreatment cases, fine restorative work, or those who want the highest precision in their dental care benefit most from microscopic dentistry at Eledent Dental Hospitals.",
  },
]);

// ─────────────────────────────────────────────────────────────────────────────
// Central map: path → schema
// Naya service add karna ho to bas yahan ek line add karo
// ─────────────────────────────────────────────────────────────────────────────
export const faqSchemas: Record<string, Record<string, unknown>> = {
  // Static pages
  "/": homeFaq,
  "/about-us": aboutFaq,
  "/services": servicesFaq,
  "/contact-us": contactFaq,
  "/dental-tourism": dentalTourismFaq,
  "/technology": technologyFaq,
  "/facility": facilityFaq,
  "/corporate-tie-ups": corporateFaq,
  "/guided-biofilm-therapy-gbt": gbtFaq,
  // Service detail pages — sitemap slugs se match kiya hua
  "/services/advanced-and-painless-dental-implants": dentalImplantsFaq,
  "/services/orthodontic-treatment": dentalBracesFaq,
  "/services/braces-aligners": clearAlignersFaq,
  "/services/dental-crowns": dentalCrownsFaq,
  "/services/laser-gum-treatment-hyderabad": laserGumTreatmentFaq,
  "/services/root-canal-treatment": rootCanalFaq,
  "/services/smile-makeover-hyderabad": smileMakeoverFaq,
  "/services/teeth-whitening": teethWhiteningFaq,
  "/services/wisdom-teeth-removal": wisdomToothFaq,
  "/services/atraumatic-extraction": atraumaticExtractionFaq,
  "/services/dental-fillings": dentalFillingsFaq,
  "/services/invisalign-treatment": invisalignFaq,
  "/services/tooth-pain-treatment": toothacheFaq,
  "/services/pediatric-dentistry-in-hyderabad": pediatricDentistryFaq,
  "/services/teeth-gap-treatment": teethGapFaq,
  "/services/single-visit-dentistry": singleVisitDentistryFaq,
  "/services/conscious-sedation": consciousSedationFaq,
  "/services/microscopic-dentistry": microscopicDentistryFaq,
};

// Dynamic service slug pages ke liye helper (API data se schema banata hai)
export function buildServiceFaqSchema(
  items: { question: string; answer: string }[]
): Record<string, unknown> {
  return buildFaqSchema(items);
}
