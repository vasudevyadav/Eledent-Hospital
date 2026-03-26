import type { Metadata } from "next";

type MetaEntry = {
  title: string;
  description: string;
};

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") || "http://localhost:3000";

const defaultTitle = "Eledent Dental Hospitals";
const defaultDescription =
  "Eledent Dental Hospitals offers advanced dental care, painless treatments, expert dentists, and modern technology across Hyderabad.";

export const metadataMap: Record<string, MetaEntry> = {
  "/": {
    title:
      "Best Dental Clinics In Hyderabad | Dental Hospital Near Me - Eledent Dental Hospitals",
    description:
      "Best dental clinics in Hyderabad, India: Eledent dental hospital offer a wide range of dental services as per your dental issues among the top best Dental hospitals in Hyderabad. ✓Dental Hospitals Near Me ✓Book an Appointment for your dental surgery needs.",
  },
  "/services": {
    title: "Services - Eledent Dental Hospitals",
    description:
      "Explore dental services at Eledent Dental Hospitals including implants, root canal treatment, braces, Invisalign, smile makeovers, pediatric dentistry, and more.",
  },
  "/thankyou": {
    title: "ThankYou - Eledent Dental Hospitals",
    description:
      "Thank you for contacting Eledent Dental Hospitals. Our team will get in touch with you soon.",
  },
  "/services/microscopic-dentistry": {
    title: "Microscopic Dentistry Hyderabad - Eledent Hospitals",
    description:
      "Experience advanced microscopic dentistry in Hyderabad at Eledent Hospitals in Banjara Hills, Kukatpally, Kondapur, and Manikonda for precise, pain-free dental care.",
  },
  "/services/single-visit-dentistry": {
    title: "Single Visit Dentistry - Eledent Dental Hospitals Hyderabad",
    description:
      "Get advanced single-visit dentistry in Hyderabad at Eledent Hospitals in Banjara Hills, Kukatpally, Kondapur, and Manikonda. Fast, precise, same-day dental treatments.",
  },
  "/services/conscious-sedation": {
    title: "Conscious Sedation - Eledent Dental Hospitals Hyderabad",
    description:
      "Conscious Sedation Dentistry at Eledent Dental Hospitals Hyderabad offers painless, anxiety-free treatments in Banjara Hills, Kukatpally, Kondapur & Manikonda.",
  },
  "/services/atraumatic-extraction": {
    title: "Atraumatic Extraction - Eledent Dental Hospitals Hyderabad",
    description:
      "Atraumatic Tooth Extraction at Eledent Dental Hospitals Hyderabad ensures painless, gentle removal in Banjara Hills, Kukatpally, Kondapur & Manikonda.",
  },
  "/services/pediatric-dentistry": {
    title: "Pediatric Dental Clinic in Hyderabad | Pediatric Dentist in Hyderabad",
    description:
      "Top Pediatric Dental Clinic in Hyderabad offering gentle care for kids at Eledent Hospitals in Banjara Hills, Kukatpally, Kondapur & Manikonda. Expert pediatric dentists.",
  },
  "/dental-tourism": {
    title: "Dental Tourism in India - Eledent Dental Hospitals",
    description:
      "Dental tourism in India made easy with Eledent Dental Hospitals. Affordable treatments, expert dentists, and world-class care for international patients.",
  },
  "/services/teeth-whitening": {
    title: "Teeth Whitening Clinic in Hyderabad | Teeth Whitening Near Me",
    description:
      "Eledent is the best teeth whitening clinic in Hyderabad. Get teeth whitening treatment with best doctors near you at affordable cost. We offer teeth whitening services, take-home whitening trays and other advanced methods in the state-of-art dental clinic. ✓Book an Appointment Now!",
  },
  "/services/dental-crowns": {
    title: "Fastest Dental Crowns & Bridges | Zirconia Dental Crown in Hyderabad",
    description:
      "Get the fastest dental crowns and zirconia bridges in Hyderabad at Eledent Hospitals in Banjara Hills, Kukatpally, Kondapur, and Manikonda. ✓Book an Appointment Now!",
  },
  "/services/invisalign-treatment": {
    title: "Invisalign Treatment in Hyderabad | Invisalign Near Me",
    description:
      "Get Invisalign treatment in Hyderabad at Eledent Hospitals. Clear aligners available in Kondapur, Manikonda, Kukatpally, Banjara Hills & Kompally. ✓Book an Appointment Now!",
  },
  "/services/laser-gum-treatment": {
    title: "Laser Gum Treatment In Hyderabad | Gummy Smile Correction",
    description:
      "Get laser gummy smile correction in Hyderabad at Eledent Hospitals. Expert care with modern technology for healthy, confident smiles.",
  },
  "/services/smile-makeover": {
    title: "Smile Makeover in Hyderabad | Smile Designing Clinic Near Me",
    description:
      "Get a smile makeover in Hyderabad at Eledent Hospitals. Expert smile designing clinics in Kondapur, Manikonda, Kukatpally, Banjara Hills & Kompally. Book your consultation today!",
  },
  "/services/wisdom-teeth-removal": {
    title: "Wisdom Teeth Removal In Hyderabad - Eledent Hospitals",
    description:
      "Wisdom teeth removal in Hyderabad by Eledent Hospitals. Advanced, pain-free extraction at Kondapur, Manikonda, Kukatpally, Banjara Hills & Kompally.",
  },
  "/services/braces-aligners": {
    title: "Dental Braces Treatment in Hyderabad | Teeth Braces Near Me",
    description:
      "Get advanced dental braces treatment in Hyderabad at Eledent Hospitals in Banjara Hills, Kukatpally, Kondapur, and Manikonda. Book your teeth braces consultation today!",
  },
  "/services/root-canal-treatment": {
    title: "Painless Root Canal Treatment In Hyderabad | Root Canal Near Me",
    description:
      "Root canal treatment in Hyderabad, India: Eledent offers the best root canal treatment in Hyderabad. The root canal is treated effectively and painlessly with our in-house CEREC CAD-CAM system which creates a computer-assisted design. ✓Book an appointment for root canal treatment.",
  },
  "/services/dental-veneers": {
    title: "Dental Veneers in Hyderabad | Dental Veneers Near Me",
    description:
      "Transform your smile with dental veneers in Hyderabad at Eledent Hospitals. Premium cosmetic dentistry & natural-looking veneers at Kondapur, Manikonda, Kukatpally, Banjara Hills & Kompally.",
  },
  "/services/orthodontic-treatment": {
    title: "Best Orthodontist in Hyderabad | Orthodontist Near Me",
    description:
      "Best orthodontist in Hyderabad at Eledent Hospitals – Kukatpally, Kondapur, Manikonda, Banjara Hills & Kompally. Book now.",
  },
  "/services/tooth-pain-treatment": {
    title: "Tooth Pain Treatment in Hyderabad | Toothache Treatment",
    description:
      "Looking for toothache treatment near you in Hyderabad? Eledent Hospitals provides safe, effective tooth pain relief by experts.",
  },
  "/services/teeth-gap-treatment": {
    title: "Teeth Gap Treatment in Hyderabad - Eledent Hospitals",
    description:
      "Close teeth gaps with expert treatment in Hyderabad at Eledent Hospitals. Advanced dental care for confident, aligned smiles.",
  },

  "/services/dental-fillings": {
    title: "Dental Filling in Hyderabad | Dental Filling Near Me",
    description:
      "Get painless dental fillings in Hyderabad at Eledent Hospitals in Banjara Hills, Kukatpally, Kondapur, and Manikonda. Restore tooth decay with expert care today!",
  },
    "/services/advanced-and-painless-dental-implants": {
    title: "Advanced Dental Implants in Hyderabad | Dental Implants Near Me",
    description:
      "Dental implants in Hyderabad, India: We specialize in dental implant surgery to make the procedure pain-free and straight forward for our customers. Book an Appointment Now!",
  },

  "/about-us": {
    title: "About Us - Eledent Dental Hospitals",
    description:
      "Learn about Eledent Dental Hospital, our expert dentists, advanced technology, and commitment to providing quality dental care for healthy smiles.",
  },
  "/contact-us": {
    title: "Contact Us - Eledent Dental Hospitals",
    description:
      "Contact Eledent Dental Hospital to book appointments, consult expert dentists, and get personalized dental care support.",
  },
  "/facility": {
    title: "Facility - Eledent Dental Hospitals",
    description:
      "Explore the modern facilities at Eledent Dental Hospital designed for comfort, safety, and advanced dental treatments.",
  },
  "/guided-biofilm-therapy-gbt": {
    title: "Guided Biofilm Therapy (GBT) - Eledent Dental Hospitals",
    description:
      "Learn about Guided Biofilm Therapy (GBT), a gentle and advanced dental cleaning method for effective plaque removal.",
  },
  "/privacy-policy": {
    title: "Privacy Policy - Eledent Dental Hospitals",
    description:
      "Read Eledent Dental Hospital’s privacy policy to understand how we collect, use, and protect your personal information.",
  },
  "/technology": {
    title: "Technology - Eledent Dental Hospitals",
    description:
      "Discover advanced dental technology at Eledent Dental Hospital ensuring accurate diagnosis, safe procedures, and quality care.",
  },
  "/terms-and-conditions": {
    title: "Terms And Conditions - Eledent Dental Hospitals",
    description:
      "Review the terms and conditions of Eledent Dental Hospital regarding website usage, services, and patient responsibilities.",
  },
  "/blogs": {
    title: "Blogs - Eledent Dental Hospitals",
    description:
      "Browse dental blogs from Eledent Dental Hospital featuring oral health tips, treatment guides, smile care advice, and expert insights.",
  },
  "/location/kondapur": {
    title: "Best Dental Hospital in Kondapur, Hyderabad - Eledent Hospitals",
    description:
      "Your trusted dental hospital in Kondapur. Eledent offers advanced treatments, expert care, and personalized smile solutions for the whole family.",
  },
  "/location/manikonda": {
    title: "Best Dental Hospital in Manikonda, Hyderabad - Eledent Hospitals",
    description:
      "Experience world-class dental care in Manikonda. Our experts at Eledent Hospital provide pain-free treatments and personalized smile makeovers for all.",
  },
  "/location/kukatpally": {
    title: "Best Dental Hospital in Kukatpally, Hyderabad - Eledent Hospitals",
    description:
      "Best Dental Hospital in Kukatpally, Hyderabad – Eledent Hospitals offers expert dentists, advanced treatments, implants, Invisalign & complete dental care.",
  },
  "/location/kompally": {
    title: "Best Dental Hospital in Kompally, Hyderabad - Eledent Hospitals",
    description:
      "Get expert dental care at Eledent Hospitals, the best dental hospital in Kompally, Hyderabad, with painless treatments and modern facilities.",
  },
  "/location/banjara-hills": {
    title: "Best Dental Hospital in Banjara Hills, Hyderabad - Eledent Hospitals",
    description:
      "Experience top-tier dental care at Eledent, the best dental hospital in Banjara Hills. We offer advanced treatments & personalized smile makeovers.",
  },
};

export function getMetadataByPath(path: string): Metadata {
  const cleanPath = path.replace(/\/$/, "") || "/";
  const current = metadataMap[cleanPath];

  const title = current?.title || defaultTitle;
  const description = current?.description || defaultDescription;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: cleanPath === "/" ? siteUrl : `${siteUrl}${cleanPath}`,
      siteName: "Eledent Dental Hospitals",
      locale: "en_IN",
      type: "website",
      images: [
        {
          url: "/og-image.jpg",
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/og-image.jpg"],
    },
    icons: {
      icon: [
        { url: "/favicon.ico" },
        { url: "/icon.png", type: "image/png", sizes: "32x32" },
      ],
      shortcut: ["/favicon.ico"],
      apple: [{ url: "/apple-icon.png", sizes: "180x180", type: "image/png" }],
    },
  };
}