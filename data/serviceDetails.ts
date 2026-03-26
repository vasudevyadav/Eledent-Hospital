// src/data/serviceDetails.ts

/* =========================
   HERO
========================= */
export type ServicesHeroSection = {
    title: string;
    subtitle: string;
    bannerImage: string;
    bannerImageAlt: string;
    overlayLinkHref?: string;
    phoneLabel: string;
    phoneNumber: string;
    hoursLabel: string;
    visitingHours: string;
    ctaText: string;
    ctaHref: string;
};

/* =========================
   OVERVIEW
========================= */
export type OverviewPartItem = {
    text: string;
};

export type OverviewSection = {
    badge: string;
    heading: string;
    intro: string;
    partsTitle: string;
    partsList: OverviewPartItem[];
    conclusion: string;
    doctorImageSrc: string;
    doctorImageAlt: string;
};

/* =========================
   APPOINTMENT
========================= */
export type AppointmentTimingItem = {
    label: string;
    time: string;
};

export type AppointmentPlaceholders = {
    fullName?: string;
    email?: string;
    phone?: string;
    doctor?: string;
    message?: string;
};

export type AppointmentSection = {
    badge: string;
    heading: string;
    description: string;
    supportLabel: string;
    supportText: string;
    timings: AppointmentTimingItem[];
    formTitle: string;
    submitButtonText: string;
    placeholders?: AppointmentPlaceholders;
};

/* =========================
   COUNT
========================= */
export type CountStatItem = {
    id: string;
    icon: string;
    value: number;
    suffix?: string;
    label1: string;
    label2?: string;
};

export type CountSection = {
    bgImage: string;
    stats: CountStatItem[];
};

/* =========================
   PROCEDURE (Premium + Video section)
========================= */
export type PlacementProcedureSection = {
    premiumCard: {
        imageSrc: string;
        imageAlt: string;
        title: string;
        description: string;
        features: string[];
        featureIconSrc?: string;
    };
    procedureContent: {
        title: string;
        subtitle: string;
        paragraphs: string[];
        knowMoreText: string;
        knowMoreHref?: string;
    };
    video: {
        embedUrl: string;
        title?: string;
    };
};

/* =========================
   OVER VALUE
========================= */
export type OverValueCardItem = {
    title: string;
    desc: string;
    iconSrc: string;
    iconHoverSrc: string;
    iconAlt?: string;
};

export type OverValueSection = {
    leftBadge: string;
    leftTitle: string;
    leftDescription: string;
    rightBgImageSrc: string;
    rightBgImageAlt?: string;
    valueItems: OverValueCardItem[];
};

/* =========================
   BEFORE / AFTER
========================= */
export type BeforeAfterItem = {
    beforeSrc: string;
    afterSrc: string;
    alt?: string;
};

export type BeforeAfterSection = {
    heading: string;
    subheading: string;
    items: BeforeAfterItem[];
};

/* =========================
   TESTIMONIALS
========================= */
export type TestimonialItem = {
    text: string;
    author: string;
    role: string;
    rating: number;
    image: string;
    imageAlt?: string;
};

export type TestimonialsSection = {
    badge: string;
    heading: string;
    defaultTab?: "text" | "video";
    tabs?: {
        textLabel: string;
        videoLabel: string;
    };
    ratingCaption?: string;
    videoPlaceholderText?: string;
    textTestimonials: TestimonialItem[];
};

/* =========================
   PLAN SECTION
========================= */
export type PlanCardItem = {
    id?: string;
    imageSrc: string;
    imageAlt: string;
    title: string;
    description: string;
    highlighted?: boolean;
    href?: string;
};

export type PlanSection = {
    backgroundImageSrc?: string;
    headingLine1: string;
    headingLine2: string;
    cards: PlanCardItem[];
};

/* =========================
   TOP RATED CTA SECTION
========================= */
export type TopRatedStatItem = {
    id?: string;
    iconSrc: string;
    iconAlt: string;
    value: number;
    decimals?: number;
    suffix?: string;
    label: string;
};

export type TopRatedSection = {
    heroTitle: string;
    heroDescription: string;
    ctaText: string;
    ctaHref?: string;
    doctorImageSrc: string;
    doctorImageAlt: string;
    statsBgImage: string;
    stats: TopRatedStatItem[];
};

/* =========================
   FAQ
========================= */
export type ServicesFaqItem = {
    id: number;
    question: string;
    answer: string;
};

export type ServicesFaqSection = {
    badge: string;
    heading: string; // \n supported in UI if whitespace-pre-line used
    description: string;
    backgroundImageSrc?: string;
    backgroundImageAlt?: string;
    defaultOpenId?: number;
    items: ServicesFaqItem[];
};

/* =========================
   PAGE TYPE
========================= */
export type ServiceDetailsPageData = {
    slug: string;
    hero: ServicesHeroSection;
    overview: OverviewSection;
    appointment?: AppointmentSection;
    count?: CountSection;
    procedure?: PlacementProcedureSection;
    value?: OverValueSection;
    beforeAfter?: BeforeAfterSection;
    testimonials?: TestimonialsSection;
    planSection?: PlanSection;
    ctaSection?: TopRatedSection;
    faq?: ServicesFaqSection;
};

/* =========================
   DATA
========================= */
export const SERVICE_DETAILS_DATA: Record<string, ServiceDetailsPageData> = {
    "dental-implants": {
        slug: "dental-implants",

        hero: {
            title: "Advanced And Painless Dental Implants",
            subtitle: "Tincidunt suspendisse semper integer elementum maecenas.",
            bannerImage: "/services/services-banner.png",
            bannerImageAlt: "Dental implants banner",
            overlayLinkHref: "/services/dental-implants",
            phoneLabel: "Need a Dental Service?",
            phoneNumber: "+91 99838 68366",
            hoursLabel: "Visiting Hours",
            visitingHours: "Mon - Sun 9 AM to 9 PM",
            ctaText: "Book An Appointment",
            ctaHref: "/contact",
        },

        overview: {
            badge: "What",
            heading: "Exactly Are Dental Implants?",
            intro:
                "Dental implants are small titanium or zirconia posts that act like artificial tooth roots. They are placed in the jaw bone and, after healing, support a fixed crown, bridge, or full arch of teeth.",
            partsTitle: "A dental implant has three main parts:",
            partsList: [
                { text: "Implant: the screw placed in the bone." },
                { text: "Abutment: the connector between implant and crown." },
                {
                    text: "Crown or prosthesis: the visible tooth or teeth you use for chewing.",
                },
            ],
            conclusion:
                "Dental implants restore natural chewing, speech, and a smile with a durable, comfortable, and natural-looking replacement.",
            doctorImageSrc: "/services/services-what.png",
            doctorImageAlt: "Dental implants illustration",
        },

        appointment: {
            badge: "Booking",
            heading: "Book Your Dental Care Appointment Now!",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            supportLabel: "Support",
            supportText: "24/7 Emergency Call",
            timings: [
                { label: "Mon–Fri", time: "8:00am – 6:00pm" },
                { label: "Sat–Sun", time: "9:00am – 4:00pm" },
            ],
            formTitle: "Book An Appointment",
            submitButtonText: "Book Appointment",
            placeholders: {
                fullName: "Full Name",
                email: "Email Address",
                phone: "Phone Number",
                doctor: "Find Doctor",
                message: "Your Message",
            },
        },

        count: {
            bgImage: "/services/service-count-bg.png",
            stats: [
                { id: "cases", icon: "/services/count-1.png", value: 30000, suffix: "+", label1: "Cases" },
                { id: "rct", icon: "/services/count-2.png", value: 27000, suffix: "+", label1: "Root Canals" },
                { id: "implants", icon: "/services/count-3.png", value: 22000, suffix: "+", label1: "Implants" },
                {
                    id: "smile",
                    icon: "/services/count-4.png",
                    value: 5000,
                    suffix: "+",
                    label1: "Digital Smile",
                    label2: "Designing",
                },
            ],
        },

        procedure: {
            premiumCard: {
                imageSrc: "/services/premium-dental.png",
                imageAlt: "Dentist showing X-ray to patient",
                title: "Premium Dental Implants in Hyderabad for a Confident Smile",
                description:
                    "Want a picture perfect smile? Get the best dental implants in Hyderabad personalized for natural looking results.",
                featureIconSrc: "/services/place-icon.png",
                features: [
                    "Inhouse CBCT Lab, CAD CAM",
                    "Integrated Implantology Guided Surgery",
                    "Zero Pain Treatment",
                    "Same Day Crowns",
                    "Single Visit Dentistry",
                    "3D Imaging",
                ],
            },
            procedureContent: {
                title: "Dental Implant Placement Procedure",
                subtitle:
                    "A planned and step-by-step process for safe implant placement and natural-looking results.",
                paragraphs: [
                    "The implant process starts with a consultation, clinical exams, and X-rays or CBCT scans to plan precise implant placement.",
                    "A titanium implant is then placed in the jaw to act as an artificial tooth root and allowed to fuse with the bone over a few months.",
                    "Once healed, a custom crown or prosthesis is fitted for a natural look and comfortable bite.",
                ],
                knowMoreText: "Know More",
                knowMoreHref: "/services/dental-implants",
            },
            video: {
                embedUrl:
                    "https://www.youtube.com/embed/jvLg2GrJpMM?si=aLnd5WK_ifderI-O&controls=0",
                title: "Dental Implant Placement Procedure",
            },
        },

        value: {
            leftBadge: "Our Value",
            leftTitle: "How to Begin Your Journey\nWith Dental Hyderabad?",
            leftDescription:
                "We focus on quality care, modern technology, safe protocols, and a patient-friendly experience to make treatment smoother and more comfortable.",
            rightBgImageSrc: "/about-us/why-chose-right.jpg",
            rightBgImageAlt: "Dental background",
            valueItems: [
                {
                    title: "Care For The Whole Teeth",
                    desc: "Comprehensive dental care that supports long-term oral health and daily comfort.",
                    iconSrc: "/about-us/value-1.png",
                    iconHoverSrc: "/about-us/value-2.png",
                    iconAlt: "Whole care icon",
                },
                {
                    title: "Advanced Equipment",
                    desc: "Modern tools and tech for accurate diagnosis and smoother, faster treatments.",
                    iconSrc: "/about-us/value-1.png",
                    iconHoverSrc: "/about-us/value-2.png",
                    iconAlt: "Advanced equipment icon",
                },
                {
                    title: "Experienced Doctors",
                    desc: "Skilled teams focused on precision, comfort, and predictable results.",
                    iconSrc: "/about-us/value-1.png",
                    iconHoverSrc: "/about-us/value-2.png",
                    iconAlt: "Experienced doctors icon",
                },
                {
                    title: "Safe & Sterile Setup",
                    desc: "Strict hygiene and sterilization protocols followed at every step.",
                    iconSrc: "/about-us/value-1.png",
                    iconHoverSrc: "/about-us/value-2.png",
                    iconAlt: "Sterile setup icon",
                },
            ],
        },

        beforeAfter: {
            heading: "Before and After",
            subheading: "Eledent Dental Implants",
            items: [
                {
                    beforeSrc: "/services/chose-plan-image-1.png",
                    afterSrc: "/services/chose-plan-image.png",
                    alt: "Dental implant case 1",
                },
                {
                    beforeSrc: "/services/chose-plan-image-1.png",
                    afterSrc: "/services/chose-plan-image.png",
                    alt: "Dental implant case 2",
                },
                {
                    beforeSrc: "/services/chose-plan-image-1.png",
                    afterSrc: "/services/chose-plan-image.png",
                    alt: "Dental implant case 3",
                },
            ],
        },

        testimonials: {
            badge: "Our",
            heading: "Testimonials",
            defaultTab: "text",
            tabs: {
                textLabel: "Text Testimonials",
                videoLabel: "Video Testimonials",
            },
            ratingCaption: "for excellence services",
            videoPlaceholderText: "Video testimonials will appear here.",
            textTestimonials: [
                {
                    text: "No pain no hospital was very neat n hygienic overall treatment was good. I will definitely suggest this clinic for painless treatment.",
                    author: "Prasanna Smily",
                    role: "Hyderabad",
                    rating: 4.9,
                    image: "/services/testimonial-1.jpg",
                    imageAlt: "Patient testimonial 1",
                },
                {
                    text: "Very clean clinic and polite staff. Everything was explained properly and the procedure felt comfortable.",
                    author: "Rajesh Kumar",
                    role: "Mumbai",
                    rating: 5.0,
                    image: "/services/testimonial-2.jpg",
                    imageAlt: "Patient testimonial 2",
                },
                {
                    text: "Good experience overall. Modern setup, quick appointment, and the treatment was smooth.",
                    author: "Priya Sharma",
                    role: "Delhi",
                    rating: 4.8,
                    image: "/services/testimonial-3.jpg",
                    imageAlt: "Patient testimonial 3",
                },
            ],
        },

        planSection: {
            backgroundImageSrc: "/services/services-plan-bg.png",
            headingLine1: "Choose a Dental Implant plan",
            headingLine2: "that best suits you",
            cards: [
                {
                    id: "single-tooth",
                    imageSrc: "/services/premium-dental.png",
                    imageAlt: "Single tooth dental implant illustration",
                    title: "Single Tooth Dental Implants",
                    description:
                        "Ideal for replacing a single missing tooth, this implant uses one crown and post for a simple, effective solution.",
                    highlighted: true,
                    href: "/services/dental-implants#single-tooth",
                },
                {
                    id: "multiple-teeth",
                    imageSrc: "/services/premium-dental.png",
                    imageAlt: "Multiple teeth dental implant illustration",
                    title: "Multiple Teeth Implants",
                    description:
                        "A stable option to replace multiple missing teeth with implant-supported crowns or bridges for better chewing and comfort.",
                    highlighted: false,
                    href: "/services/dental-implants#multiple-teeth",
                },
                {
                    id: "full-mouth",
                    imageSrc: "/services/premium-dental.png",
                    imageAlt: "Full mouth dental implant illustration",
                    title: "Full Mouth Dental Implants",
                    description:
                        "Designed for patients with multiple missing teeth, using advanced planning for fixed and natural-looking restoration.",
                    highlighted: false,
                    href: "/services/dental-implants#full-mouth",
                },
            ],
        },

        ctaSection: {
            heroTitle: "Top-Rated Implantologists\nin Hyderabad",
            heroDescription:
                "Backed by 20+ years of experience and 27,000+ successful implant cases, our team is trusted for dental implants with consistent care across branches.",
            ctaText: "Get an Appointment",
            ctaHref: "/contact",
            doctorImageSrc: "/home/nurse-1.png",
            doctorImageAlt: "Doctor",
            statsBgImage: "/services/service-count-bg.png",
            stats: [
                {
                    id: "rating",
                    iconSrc: "/services/rating-icon.png",
                    iconAlt: "Rating icon",
                    value: 4.9,
                    decimals: 1,
                    suffix: "/5",
                    label: "Rating on Average by Patients",
                },
                {
                    id: "awards",
                    iconSrc: "/services/award-icon.png",
                    iconAlt: "Awards icon",
                    value: 10,
                    suffix: "+",
                    label: "Awards and Recognitions",
                },
                {
                    id: "experience",
                    iconSrc: "/services/year-icon.png",
                    iconAlt: "Experience icon",
                    value: 100,
                    suffix: "+",
                    label: "Years of Collective Experience",
                },
                {
                    id: "implants",
                    iconSrc: "/services/implant-icon.png",
                    iconAlt: "Implants icon",
                    value: 27000,
                    suffix: "+",
                    label: "Implants",
                },
            ],
        },

        faq: {
            badge: "FAQ",
            heading: "Need Answer? We’re\nHere to Help",
            description:
                "Get quick answers to common questions about dental implants, appointments, recovery, and treatment planning.",
            backgroundImageSrc: "/about-us/faq-image.png",
            backgroundImageAlt: "FAQ Background",
            defaultOpenId: 1,
            items: [
                {
                    id: 1,
                    question: "Do I need to make an appointment before visiting?",
                    answer:
                        "Yes, it is better to book an appointment before visiting so the team can schedule your consultation and reduce waiting time.",
                },
                {
                    id: 2,
                    question: "Are dental implants painful?",
                    answer:
                        "The procedure is usually done under local anaesthesia, so pain during treatment is minimal. Mild discomfort after the procedure is common and can be managed with prescribed medicines.",
                },
                {
                    id: 3,
                    question: "How long does dental implant treatment take?",
                    answer:
                        "The timeline depends on your bone condition, healing, and whether additional procedures are needed. Your dentist will give a case-specific treatment plan after evaluation.",
                },
            ],
        },
    },

};