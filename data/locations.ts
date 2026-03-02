export type ServiceItem = {
  label: string;
  href: string;
  icon:
  | "Replace"
  | "Pill"
  | "ScanFace"
  | "Sparkles"
  | "Stethoscope"
  | "Crown"
  | "Braces"
  | "Baby";
};

export type TrustCardType = {
  title: string;
  imageSrc: string;
  imageAlt: string;
  bullets: string[];
  variant?: "dashed-teal" | "blue-frame";
};

export type GalleryItem = {
  src: string;
  alt: string;
};

export type FaqItem = {
  id: number;
  question: string;
  answer: string;
};

export type LocationData = {
  slug: string;
  city: string;
  addressLines: string[];
  mapEmbedSrc: string;
  phone?: string;

  // ✅ HERO
  heroTitle: string;
  heroSubtitle: string;
  heroBannerSrc?: string;

  // ✅ ABOUT
  aboutTitleLine1: string;
  aboutTitleLine2: string;
  aboutIntroParas: string[];
  aboutBottomParas: string[];
  aboutImageSrc: string;
  aboutImageAlt: string;

  // ✅ SERVICES
  services: ServiceItem[];

  // ✅ TRUST
  trustHeading?: string; // optional custom heading
  trustCards: TrustCardType[];

  // ✅ GALLERY
  gallery: GalleryItem[];

  // ✅ FAQ
  faqIntroText?: string;
  faqs: FaqItem[];
};

export const LOCATIONS: LocationData[] = [
  {
    slug: "kondapur",
    city: "KONDAPUR",
    addressLines: [
      "K1, Prime Building, 3rd Floor,",
      "Beside Chrome, Above Rationshop,",
      "Near Kondapur Bus Stop, Hyderabad, Telangana, 500084",
    ],
    mapEmbedSrc:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.6800000000003!2d78.363!3d17.463!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sKondapur!5e0!3m2!1sen!2sin!4v1",

    // ✅ HERO
    heroTitle: "Kondapur",
    heroSubtitle: "Modern dental care with comfortable, patient-first support.",
    heroBannerSrc: "/location/location-main.png",

    // ✅ ABOUT
    aboutTitleLine1: "Best Dental Hospital in Kondapur,",
    aboutTitleLine2: "Hyderabad",
    aboutIntroParas: [
      "Located in the prime residential location, our dental hospital in Kondapur is here to help you maintain healthy teeth and a confident smile.",
      "We offer state of the art facilities for cosmetic and general dental procedures, along with a child-friendly environment for pediatric dental care.",
      "Our team uses modern techniques for aligners, veneers, gum care, and non-invasive laser treatment at our dental hospital in Kondapur.",
    ],
    aboutBottomParas: [
      "Many treatments finish faster with digital dentistry, including 3D scans, same-day crowns, and guided surgery.",
      "With 20 years of excellence in dental care, we use digital scanners, 3D X-rays, lasers, and CAD/CAM systems to deliver precise and minimally invasive treatment.",
    ],
    aboutImageSrc: "/location/location-image_.png",
    aboutImageAlt: "Eledent International team at Kondapur",

    // ✅ SERVICES
    services: [
      { label: "DENTAL IMPLANTS", href: "/dental-implants", icon: "Replace" },
      { label: "FULL TEETH REPLACEMENT", href: "/full-teeth-replacement", icon: "Replace" },
      { label: "ROOT CANAL TREATMENT", href: "/root-canal-treatment", icon: "Pill" },
      { label: "DIGITAL SMILE DESIGNING", href: "/digital-smile-designing", icon: "ScanFace" },
      { label: "LASER GUM TREATMENT", href: "/laser-gum-treatment", icon: "Sparkles" },
      { label: "ONE VISIT DENTISTRY", href: "/one-visit-dentistry", icon: "Stethoscope" },
      { label: "ZIRCONIUM CROWNS", href: "/zirconium-crowns", icon: "Crown" },
      { label: "DENTAL BRACES", href: "/dental-braces", icon: "Braces" },
      { label: "INVISIBLE ALIGNERS", href: "/invisible-aligners", icon: "Sparkles" },
      { label: "PAEDIATRIC DENTISTRY", href: "/paediatric-dentistry", icon: "Baby" },
      { label: "GENERAL DENTISTRY", href: "/general-distry", icon: "Stethoscope" }, // ✅ check href spelling
      { label: "TEETH WHITENING", href: "/teeth-whitening", icon: "Sparkles" },
      { label: "TOOTH JEWELLERY", href: "/tooth-jewellery", icon: "Sparkles" },
    ],

    // ✅ TRUST
    trustHeading: "Why Patients Trust Eledent Dental Hospital in Kondapur?",
    trustCards: [
      {
        title: "Strong Clinical Track Record",
        imageSrc: "/location/why-patient.png",
        imageAlt: "Dentist consultation at Eledent",
        bullets: [
          "20+ years of combined clinical experience.",
          "30,000+ successful dental cases completed across branches.",
          "22,000+ dental implants and 27,000+ root canals done with set protocols.",
          "9,500+ braces and aligner cases and 5,000+ digital smile design cases.",
          "Kondapur branch holds a 4.8/5 rating based on 680+ verified customer reviews.",
        ],
        variant: "dashed-teal",
      },
      {
        title: "Technology-Driven, Faster Care",
        imageSrc: "/location/why-patient-1.png",
        imageAlt: "Digital dentistry setup at Eledent",
        bullets: [
          "3D scans for accurate planning and fewer repeat visits.",
          "CAD/CAM workflows for precise crowns and restorations.",
          "Guided implant planning for predictable outcomes.",
          "Laser dentistry options for selected gum procedures.",
          "Clear treatment plan and timeline explained before starting.",
        ],
        variant: "blue-frame",
      },
      {
        title: "Specialists Under One Roof",
        imageSrc: "/location/location-image_.png",
        imageAlt: "Dental specialists team",
        bullets: [
          "Implants, RCT, braces, aligners, and smile design support.",
          "Child-friendly dental care with gentle handling.",
          "Cosmetic dentistry planning for natural-looking results.",
          "Team-based case discussion for complex treatments.",
          "Follow-up reminders for long-term maintenance.",
        ],
        variant: "dashed-teal",
      },
      {
        title: "Clean, Comfortable Patient Experience",
        imageSrc: "/location/location-image_.png",
        imageAlt: "Reception and waiting area",
        bullets: [
          "Hygiene-first setup and sterilization protocols.",
          "Comfort-focused chairside care for nervous patients.",
          "Transparent pricing discussion before procedures.",
          "Assisted scheduling for working professionals.",
          "Easy access near Kondapur Bus Stop area.",
        ],
        variant: "blue-frame",
      },
    ],

    // ✅ GALLERY
    gallery: [
      { src: "/location/location-image_.png", alt: "Eledent clinic team" },
      { src: "/location/location-image_.png", alt: "Eledent doctors group" },
      { src: "/location/location-image_.png", alt: "Eledent reception area" },
      { src: "/location/why-patient-1.png", alt: "Digital dentistry consultation" },
    ],

    // ✅ FAQ
    faqIntroText:
      "Quick answers about appointments, services, and what to expect at our Kondapur clinic.",
    faqs: [
      {
        id: 1,
        question: "Do I need an appointment before visiting?",
        answer:
          "Walk-ins are welcome, but booking an appointment helps reduce waiting time and lets us schedule the right specialist for your concern.",
      },
      {
        id: 2,
        question: "Do you offer braces and invisible aligners at this clinic?",
        answer:
          "Yes. We provide braces and invisible aligners. We start with a bite check and scans to suggest the right option for your teeth alignment.",
      },
      {
        id: 3,
        question: "Can I get an implant consultation in one visit?",
        answer:
          "Yes. In most cases, we can do an initial evaluation, required scans, and a treatment plan in a single visit. The timeline depends on bone and gum health.",
      },
    ],
  },

  {
    slug: "kukatpally",
    city: "KUKATPALLY",
    addressLines: [
      "2 Opposite Hitech Hospital, MIG, Ground Floor,",
      "Near Nizampet X Road, KPHB Phase 1,",
      "Kukatpally, Hyderabad, Telangana, 500072",
    ],
    mapEmbedSrc:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.6800000000003!2d78.380!3d17.490!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sKukatpally!5e0!3m2!1sen!2sin!4v1",

    // ✅ HERO
    heroTitle: "Kukatpally",
    heroSubtitle: "Convenient location, quick appointments, and advanced dentistry.",
    heroBannerSrc: "/location/location-main.png",

    // ✅ ABOUT
    aboutTitleLine1: "Best Dental Hospital in Kukatpally,",
    aboutTitleLine2: "Hyderabad",
    aboutIntroParas: [
      "Our dental hospital in Kukatpally focuses on clear diagnosis first, so you know what you need and why.",
      "From general dentistry to cosmetic treatments, our team plans care in a simple, step-by-step way.",
      "We also support kids dentistry with a calm, friendly setup for families in and around KPHB.",
    ],
    aboutBottomParas: [
      "Digital dentistry helps reduce chair time with scans, guided procedures, and accurate planning.",
      "Our team uses modern tools like 3D imaging, lasers, and CAD/CAM workflows for precise treatment.",
    ],
    aboutImageSrc: "/location/location-image_.png",
    aboutImageAlt: "Eledent International team at Kukatpally",

    // ✅ SERVICES
    services: [
      { label: "DENTAL IMPLANTS", href: "/dental-implants", icon: "Replace" },
      { label: "ROOT CANAL TREATMENT", href: "/root-canal-treatment", icon: "Pill" },
      { label: "DIGITAL SMILE DESIGNING", href: "/digital-smile-designing", icon: "ScanFace" },
      { label: "LASER GUM TREATMENT", href: "/laser-gum-treatment", icon: "Sparkles" },
      { label: "ZIRCONIUM CROWNS", href: "/zirconium-crowns", icon: "Crown" },
      { label: "DENTAL BRACES", href: "/dental-braces", icon: "Braces" },
      { label: "INVISIBLE ALIGNERS", href: "/invisible-aligners", icon: "Sparkles" },
      { label: "PAEDIATRIC DENTISTRY", href: "/paediatric-dentistry", icon: "Baby" },
      { label: "GENERAL DENTISTRY", href: "/general-dentistry", icon: "Stethoscope" },
    ],

    // ✅ TRUST
    trustHeading: "Why Patients Trust Eledent Dental Hospital in Kukatpally?",
    trustCards: [
      {
        title: "Clear Diagnosis First",
        imageSrc: "/location/why-patient.png",
        imageAlt: "Dentist consultation at Eledent",
        bullets: [
          "Simple explanation of the problem and treatment options.",
          "X-rays or scans only when needed for accurate planning.",
          "Step-by-step plan with estimated visit count.",
          "Focus on pain relief and long-term oral health.",
          "Convenient access near Nizampet X Road and KPHB area.",
        ],
        variant: "dashed-teal",
      },
      {
        title: "Modern Tools for Precise Treatment",
        imageSrc: "/location/why-patient-1.png",
        imageAlt: "Digital dentistry setup at Eledent",
        bullets: [
          "3D imaging support for complex cases.",
          "CAD/CAM planning for better-fitting restorations.",
          "Laser options for selected gum care needs.",
          "Better accuracy, fewer surprises during treatment.",
          "Comfort-focused approach for anxious patients.",
        ],
        variant: "blue-frame",
      },
    ],

    // ✅ GALLERY
    gallery: [
      { src: "/location/location-image_.png", alt: "Clinic front view" },
      { src: "/location/location-image_.png", alt: "Doctors and staff" },
      { src: "/location/why-patient-1.png", alt: "Consultation room" },
    ],

    // ✅ FAQ
    faqIntroText:
      "Common questions patients ask before visiting our Kukatpally clinic.",
    faqs: [
      {
        id: 1,
        question: "Do you accept walk-ins at the Kukatpally branch?",
        answer:
          "Yes, you can walk in. If you want to avoid waiting time, it’s better to book a slot, especially on weekends.",
      },
      {
        id: 2,
        question: "What treatments are most commonly done here?",
        answer:
          "Patients commonly visit for RCT, crowns, braces, aligners, and general dental care. We also handle implant consultations and smile design.",
      },
      {
        id: 3,
        question: "How do I know whether I need braces or aligners?",
        answer:
          "We check your bite and alignment first. Then we suggest braces or aligners depending on the complexity, budget, and expected timeline.",
      },
    ],
  },
];

export function getLocationBySlug(slug: string) {
  return LOCATIONS.find((l) => l.slug === slug) || null;
}