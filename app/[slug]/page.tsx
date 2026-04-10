import type { Metadata } from "next";
import Script from "next/script";
import BookingAportment from "@/app/components/comman/booking-aportment";
import Footer from "@/app/components/Footer";
import LocationAbout from "@/app/components/location/location-about";
import LocationFaq from "@/app/components/location/location-faq";
import LocationGallery from "@/app/components/location/location-gallery";
import LocationHero from "@/app/components/location/location-hero";
import LocationServices from "@/app/components/location/location-services";
import LocationTestimonial from "@/app/components/location/location-testimonial";
import LocationTransport from "@/app/components/location/location-transport";
import LocationTrust from "@/app/components/location/location-trust";
import Navbar from "@/app/components/Navbar";
import { getLocationBySlug } from "@/lib/location-api";
import { getMetadataByPath } from "@/lib/metadata";
import { notFound } from "next/navigation";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

const locationSchemas: Record<string, object[]> = {
  kondapur: [
    {
      "@context": "https://schema.org",
      "@type": "Dentist",
      "@id": "https://eledenthospitals.com/kondapur#dentist",
      name: "Eledent Hospitals – Kondapur",
      alternateName: "Best Dental Hospital in Kondapur",
      url: "https://eledenthospitals.com/kondapur",
      logo: "https://eledenthospitals.com/White-Logo1.png",
      image:
        "https://backend.eledenthospitals.com/wp-content/uploads/2026/03/location-main.png",
      description:
        "Eledent Dental Hospital in Kondapur offers state-of-the-art dental care including implants, braces, root canal treatment, laser gum treatment, paediatric dentistry, smile makeover, and cosmetic procedures. Located in K1 Primo Building, near Kondapur Bus Stop.",
      telephone: "+917799639994",
      email: "contact@eledenthospitals.com",
      address: {
        "@type": "PostalAddress",
        streetAddress:
          "K1 Primo Building, beside Croma and above Ratnadeep, Kondapur Main Road",
        addressLocality: "Kondapur",
        addressRegion: "Telangana",
        postalCode: "500084",
        addressCountry: "IN",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 17.4601,
        longitude: 78.3588,
      },
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
            "Sunday",
          ],
          opens: "09:00",
          closes: "21:00",
        },
      ],
      priceRange: "₹₹",
      currenciesAccepted: "INR",
      paymentAccepted: "Cash, Credit Card, UPI",
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.8",
        reviewCount: "680",
        bestRating: "5",
        worstRating: "1",
      },
      medicalSpecialty: [
        "Dentistry",
        "Orthodontics",
        "Endodontics",
        "Prosthodontics",
        "Pediatric Dentistry",
        "Oral Surgery",
      ],
      availableService: [
        { "@type": "MedicalProcedure", name: "Dental Implants" },
        { "@type": "MedicalProcedure", name: "Root Canal Treatment" },
        { "@type": "MedicalProcedure", name: "Laser Gum Treatment" },
        { "@type": "MedicalProcedure", name: "Orthodontic Treatment" },
        { "@type": "MedicalProcedure", name: "Smile Makeover" },
        { "@type": "MedicalProcedure", name: "Teeth Whitening" },
        { "@type": "MedicalProcedure", name: "Dental Crowns" },
        { "@type": "MedicalProcedure", name: "Dental Veneers" },
        { "@type": "MedicalProcedure", name: "Invisalign Treatment" },
        { "@type": "MedicalProcedure", name: "Pediatric Dentistry" },
        { "@type": "MedicalProcedure", name: "Wisdom Teeth Removal" },
        { "@type": "MedicalProcedure", name: "Braces and Aligners" },
        { "@type": "MedicalProcedure", name: "Dental Fillings" },
        { "@type": "MedicalProcedure", name: "Conscious Sedation" },
        { "@type": "MedicalProcedure", name: "Microscopic Dentistry" },
        { "@type": "MedicalProcedure", name: "Single-Visit Dentistry" },
      ],
      sameAs: [
        "https://www.facebook.com/EledentHospitals/",
        "https://www.instagram.com/eledenthospitals/",
        "https://www.youtube.com/channel/UCONaCM78ATu5rcNx_DLQxBg",
      ],
      parentOrganization: {
        "@type": "MedicalOrganization",
        name: "Eledent Hospitals LLP",
        url: "https://eledenthospitals.com",
      },
      hasMap:
        "https://maps.google.com/?q=Eledent+Hospitals+Kondapur+Hyderabad",
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "What dental treatments are available at Eledent Dental Hospital in Kondapur?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "At our dental hospital in Kondapur we offer checkups, cleanings, fillings, root canal treatment, implants, braces, aligners, gum care, extractions, paediatric dentistry, smile design and cosmetic dentistry.",
          },
        },
        {
          "@type": "Question",
          name: "Do you have specialists at your hospital in Kondapur?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Eledent Kondapur has MDS-certified specialists in implantology, endodontics, orthodontics, prosthodontics, and paediatric dentistry.",
          },
        },
        {
          "@type": "Question",
          name: "Is emergency dental treatment available at Eledent Dental Hospital in Kondapur?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, we always prioritize emergencies such as severe pain, swelling, fractures and other urgent issues. Call us @+91 77996 19994 to get the earliest available appointment.",
          },
        },
        {
          "@type": "Question",
          name: "What technologies are used at Eledent Dental Hospital in Kondapur?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "At our Kondapur hospital we use digital X-rays, intraoral scanners, rotary endodontics, CAD/CAM for same-day crowns and laser dentistry for selected gum procedures.",
          },
        },
        {
          "@type": "Question",
          name: "Do you treat children at your Kondapur dental hospital?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, we offer child-friendly dental care including preventive checkups, fillings, fluoride, sealants, habit counselling and early orthodontic assessment.",
          },
        },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://eledenthospitals.com",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Locations",
          item: "https://eledenthospitals.com/#locations",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Kondapur",
          item: "https://eledenthospitals.com/kondapur",
        },
      ],
    },
  ],

  kukatpally: [
    {
      "@context": "https://schema.org",
      "@type": "Dentist",
      "@id": "https://eledenthospitals.com/kukatpally#dentist",
      name: "Eledent Hospitals – Kukatpally",
      alternateName: "Best Dental Hospital in Kukatpally",
      url: "https://eledenthospitals.com/kukatpally",
      logo: "https://eledenthospitals.com/White-Logo1.png",
      image:
        "https://backend.eledenthospitals.com/wp-content/uploads/2026/03/location-main.png",
      description:
        "Eledent Dental Hospital in Kukatpally (KPHB) offers complete family and advanced dental care using digital X-rays, 3D scanners, CEREC CAD/CAM and laser treatments. Conveniently located opposite Holistic Hospital, KPHB Phase 1, near KPHB Metro Station and Forum Sujana Mall.",
      telephone: "+919059890578",
      email: "contact@eledenthospitals.com",
      address: {
        "@type": "PostalAddress",
        streetAddress:
          "Opposite Holistic Hospital, MIG 161, Ground Floor, Rd No.1, KPHB Phase 1",
        addressLocality: "Kukatpally",
        addressRegion: "Telangana",
        postalCode: "500072",
        addressCountry: "IN",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 17.4947,
        longitude: 78.3996,
      },
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
            "Sunday",
          ],
          opens: "09:00",
          closes: "21:00",
        },
      ],
      priceRange: "₹₹",
      currenciesAccepted: "INR",
      paymentAccepted: "Cash, Credit Card, UPI",
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "5.0",
        reviewCount: "200",
        bestRating: "5",
        worstRating: "1",
      },
      medicalSpecialty: [
        "Dentistry",
        "Orthodontics",
        "Endodontics",
        "Prosthodontics",
        "Pediatric Dentistry",
        "Oral Surgery",
      ],
      availableService: [
        { "@type": "MedicalProcedure", name: "Dental Implants" },
        { "@type": "MedicalProcedure", name: "Root Canal Treatment" },
        { "@type": "MedicalProcedure", name: "Laser Gum Treatment" },
        { "@type": "MedicalProcedure", name: "Orthodontic Treatment" },
        { "@type": "MedicalProcedure", name: "Smile Makeover" },
        { "@type": "MedicalProcedure", name: "Teeth Whitening" },
        { "@type": "MedicalProcedure", name: "Dental Crowns" },
        { "@type": "MedicalProcedure", name: "Dental Veneers" },
        { "@type": "MedicalProcedure", name: "Invisalign Treatment" },
        { "@type": "MedicalProcedure", name: "Pediatric Dentistry" },
        { "@type": "MedicalProcedure", name: "Wisdom Teeth Removal" },
        { "@type": "MedicalProcedure", name: "Braces and Aligners" },
        { "@type": "MedicalProcedure", name: "Dental Fillings" },
        { "@type": "MedicalProcedure", name: "Conscious Sedation" },
        { "@type": "MedicalProcedure", name: "Single-Visit Dentistry" },
        { "@type": "MedicalProcedure", name: "CEREC Same-Day Crowns" },
      ],
      sameAs: [
        "https://www.facebook.com/EledentHospitals/",
        "https://www.instagram.com/eledenthospitals/",
        "https://www.youtube.com/channel/UCONaCM78ATu5rcNx_DLQxBg",
      ],
      parentOrganization: {
        "@type": "MedicalOrganization",
        name: "Eledent Hospitals LLP",
        url: "https://eledenthospitals.com",
      },
      hasMap:
        "https://maps.google.com/?q=Eledent+Hospitals+Kukatpally+KPHB+Hyderabad",
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "What dental treatments are available at Eledent Dental Hospital in Kukatpally?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "We offer complete dental care including consultations, cleanings, fillings, dental implants, root canal treatment, braces, clear aligners, gum treatments, tooth extractions, paediatric dentistry, smile design, and cosmetic dentistry.",
          },
        },
        {
          "@type": "Question",
          name: "Are dental implants, braces and clear aligners available at the Kukatpally branch?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. All these services are available at the Kukatpally branch, performed by MDS-certified specialists using advanced digital technology.",
          },
        },
        {
          "@type": "Question",
          name: "Do you treat children at your Kukatpally dental hospital?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. The Kukatpally branch has a child-friendly setup with specialists for paediatric dental care.",
          },
        },
        {
          "@type": "Question",
          name: "Is emergency dental treatment available at Eledent Dental Hospital in Kukatpally?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. The clinic is open 7 days a week, 9 AM to 9 PM, and handles dental emergencies including tooth pain, swelling, and broken teeth.",
          },
        },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://eledenthospitals.com",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Locations",
          item: "https://eledenthospitals.com/#locations",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Kukatpally",
          item: "https://eledenthospitals.com/kukatpally",
        },
      ],
    },
  ],

  manikonda: [
    {
      "@context": "https://schema.org",
      "@type": "Dentist",
      "@id": "https://eledenthospitals.com/manikonda#dentist",
      name: "Eledent Hospitals – Manikonda",
      alternateName: "Best Dental Hospital in Manikonda",
      url: "https://eledenthospitals.com/manikonda",
      logo: "https://eledenthospitals.com/White-Logo1.png",
      image:
        "https://backend.eledenthospitals.com/wp-content/uploads/2026/03/location-main.png",
      description:
        "Eledent Dental Hospital in Manikonda provides advanced family and cosmetic dental care with digital radiography, 3D intraoral scanning, CAD/CAM single-day crowns, microscopic dentistry, laser systems, and Zoom whitening. Located in Sunshine Regulas Building, above KFC, Manikonda Main Road.",
      telephone: "+917799659994",
      email: "contact@eledenthospitals.com",
      address: {
        "@type": "PostalAddress",
        streetAddress:
          "Sunshine Regulas Building, Above KFC, Manikonda Main Road, Muppas Panchavati Colony",
        addressLocality: "Manikonda",
        addressRegion: "Telangana",
        postalCode: "500089",
        addressCountry: "IN",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 17.4062,
        longitude: 78.3708,
      },
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
            "Sunday",
          ],
          opens: "10:00",
          closes: "20:00",
        },
      ],
      priceRange: "₹₹",
      currenciesAccepted: "INR",
      paymentAccepted: "Cash, Credit Card, UPI",
      medicalSpecialty: [
        "Dentistry",
        "Orthodontics",
        "Endodontics",
        "Prosthodontics",
        "Pediatric Dentistry",
        "Oral Surgery",
        "Cosmetic Dentistry",
      ],
      availableService: [
        { "@type": "MedicalProcedure", name: "Dental Implants" },
        { "@type": "MedicalProcedure", name: "Root Canal Treatment" },
        { "@type": "MedicalProcedure", name: "Laser Gum Treatment" },
        { "@type": "MedicalProcedure", name: "Orthodontic Treatment" },
        { "@type": "MedicalProcedure", name: "Smile Makeover" },
        { "@type": "MedicalProcedure", name: "Teeth Whitening (Zoom)" },
        { "@type": "MedicalProcedure", name: "Dental Crowns" },
        { "@type": "MedicalProcedure", name: "Dental Veneers" },
        { "@type": "MedicalProcedure", name: "Invisalign Treatment" },
        { "@type": "MedicalProcedure", name: "Pediatric Dentistry" },
        { "@type": "MedicalProcedure", name: "Wisdom Teeth Removal" },
        { "@type": "MedicalProcedure", name: "Braces and Aligners" },
        { "@type": "MedicalProcedure", name: "Dental Fillings" },
        { "@type": "MedicalProcedure", name: "Conscious Sedation" },
        { "@type": "MedicalProcedure", name: "Microscopic Dentistry" },
        { "@type": "MedicalProcedure", name: "Single-Visit Dentistry" },
        { "@type": "MedicalProcedure", name: "Guided Biofilm Therapy" },
      ],
      sameAs: [
        "https://www.facebook.com/EledentHospitals/",
        "https://www.instagram.com/eledenthospitals/",
        "https://www.youtube.com/channel/UCONaCM78ATu5rcNx_DLQxBg",
      ],
      parentOrganization: {
        "@type": "MedicalOrganization",
        name: "Eledent Hospitals LLP",
        url: "https://eledenthospitals.com",
      },
      hasMap:
        "https://maps.google.com/?q=Eledent+Hospitals+Manikonda+Hyderabad",
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "What is the cost of basic dental treatments in Manikonda?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The cost depends on the type of treatment, the tooth involved, and your dental condition. Basic procedures like cleaning or fillings are usually affordable, while root canals, crowns, or braces cost more. You can call Eledent Manikonda to get an approximate range before visiting.",
          },
        },
        {
          "@type": "Question",
          name: "How do I know which dentist is right for my dental problem?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Different dental problems need different specialists. For example, braces need an orthodontist, root canals need an endodontist, and kids need a pediatric dentist. At Eledent, our team guides you to the right specialist after a quick check-up.",
          },
        },
        {
          "@type": "Question",
          name: "What dental emergencies require immediate attention?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Severe toothache, facial swelling, broken or knocked-out teeth, uncontrolled bleeding, or sudden injury to the mouth should be treated as dental emergencies.",
          },
        },
        {
          "@type": "Question",
          name: "Is laser dentistry really painless and safe?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Laser dentistry is safe and is designed to make dental procedures more comfortable, with less bleeding and faster healing in many cases. Most patients feel minimal discomfort compared to traditional methods.",
          },
        },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://eledenthospitals.com",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Locations",
          item: "https://eledenthospitals.com/#locations",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Manikonda",
          item: "https://eledenthospitals.com/manikonda",
        },
      ],
    },
  ],

  "banjara-hills": [
    {
      "@context": "https://schema.org",
      "@type": "Dentist",
      "@id": "https://eledenthospitals.com/banjara-hills#dentist",
      name: "Eledent Hospitals – Banjara Hills",
      alternateName: "Best Dental Hospital in Banjara Hills",
      url: "https://eledenthospitals.com/banjara-hills",
      logo: "https://eledenthospitals.com/White-Logo1.png",
      image:
        "https://backend.eledenthospitals.com/wp-content/uploads/2026/03/blog-banner-1.png",
      description:
        "Eledent Dental Hospital in Banjara Hills offers advanced orthodontic and routine dental care with CBCT, intraoral scanning, CAD/CAM, laser dentistry, Zoom whitening, and child-friendly paediatric care. Located on Road No. 12, Sri Ram Nagar Colony, Raichandani Construction building.",
      telephone: "+917799649994",
      email: "contact@eledenthospitals.com",
      address: {
        "@type": "PostalAddress",
        streetAddress:
          "Road No. 12, Sri Ram Nagar Colony, Raichandani Construction Building",
        addressLocality: "Banjara Hills",
        addressRegion: "Telangana",
        postalCode: "500034",
        addressCountry: "IN",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 17.4228,
        longitude: 78.4484,
      },
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
            "Sunday",
          ],
          opens: "09:30",
          closes: "21:00",
        },
      ],
      priceRange: "₹₹",
      currenciesAccepted: "INR",
      paymentAccepted: "Cash, Credit Card, UPI",
      medicalSpecialty: [
        "Dentistry",
        "Orthodontics",
        "Endodontics",
        "Prosthodontics",
        "Pediatric Dentistry",
        "Oral Surgery",
        "Cosmetic Dentistry",
      ],
      availableService: [
        { "@type": "MedicalProcedure", name: "Dental Implants" },
        { "@type": "MedicalProcedure", name: "Root Canal Treatment" },
        { "@type": "MedicalProcedure", name: "Laser Gum Treatment" },
        { "@type": "MedicalProcedure", name: "Orthodontic Treatment" },
        { "@type": "MedicalProcedure", name: "Smile Makeover" },
        { "@type": "MedicalProcedure", name: "Teeth Whitening (Zoom)" },
        { "@type": "MedicalProcedure", name: "Dental Crowns (CEREC)" },
        { "@type": "MedicalProcedure", name: "Dental Veneers" },
        { "@type": "MedicalProcedure", name: "Invisalign Treatment" },
        { "@type": "MedicalProcedure", name: "Pediatric Dentistry" },
        { "@type": "MedicalProcedure", name: "Wisdom Teeth Removal" },
        { "@type": "MedicalProcedure", name: "Braces and Aligners" },
        { "@type": "MedicalProcedure", name: "Dental Fillings" },
        { "@type": "MedicalProcedure", name: "Conscious Sedation" },
        { "@type": "MedicalProcedure", name: "Microscopic Dentistry" },
        { "@type": "MedicalProcedure", name: "Guided Biofilm Therapy" },
      ],
      sameAs: [
        "https://www.facebook.com/EledentHospitals/",
        "https://www.instagram.com/eledenthospitals/",
        "https://www.youtube.com/channel/UCONaCM78ATu5rcNx_DLQxBg",
      ],
      parentOrganization: {
        "@type": "MedicalOrganization",
        name: "Eledent Hospitals LLP",
        url: "https://eledenthospitals.com",
      },
      hasMap:
        "https://maps.google.com/?q=Eledent+Hospitals+Banjara+Hills+Road+No+12+Hyderabad",
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "What is the consultation fee at Eledent Dental Hospital Banjara Hills?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The consultation fee is ₹300. This includes a clinical examination and treatment discussion. X-rays or scans are advised only if needed.",
          },
        },
        {
          "@type": "Question",
          name: "What is the cost of dental braces in Hyderabad at Eledent Dental Hospital?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Braces costs vary depending on the type (metal, ceramic, Damon, or clear aligners). Ceramic and Damon braces cost more due to aesthetics and advanced mechanics. Please call for a personalized estimate.",
          },
        },
        {
          "@type": "Question",
          name: "What is the cost of a root canal in Hyderabad at Eledent?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Root canal costs depend on the tooth type (front, premolar, or molar) and whether microscopic or laser techniques are used. Call the Banjara Hills branch at +91 77996 49994 for a price estimate.",
          },
        },
        {
          "@type": "Question",
          name: "How much does a dental crown cost at Eledent Dental Hospital?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Crown prices depend on material (zirconia, ceramic, metal) and whether CEREC single-visit technology is used. Contact us for transparent pricing before treatment begins.",
          },
        },
        {
          "@type": "Question",
          name: "What is the price of a single dental implant in Hyderabad?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Implant pricing depends on the brand, bone condition, and additional procedures required. Eledent provides clear cost estimates after clinical evaluation.",
          },
        },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://eledenthospitals.com",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Locations",
          item: "https://eledenthospitals.com/#locations",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Banjara Hills",
          item: "https://eledenthospitals.com/banjara-hills",
        },
      ],
    },
  ],

  kompally: [
    {
      "@context": "https://schema.org",
      "@type": "Dentist",
      "@id": "https://eledenthospitals.com/kompally#dentist",
      name: "Eledent Hospitals – Kompally",
      alternateName: "Best Dental Hospital in Kompally",
      url: "https://eledenthospitals.com/kompally",
      logo: "https://eledenthospitals.com/wp-content/uploads/2021/09/White-Logo.webp",
      description:
        "Eledent Dental Hospital in Kompally (Suchitra Road) provides hospital-grade dental care including implants, root canal treatment, crowns, braces, aligners, paediatric dentistry, smile design, and general dentistry. Located opposite Cinepolis, 2nd Floor, Bliss MVM Building, Suchitra Road.",
      telephone: "+917799639994",
      email: "contact@eledenthospitals.com",
      address: {
        "@type": "PostalAddress",
        streetAddress:
          "2nd Floor, Bliss MVM Building, Suchitra Road, Opposite Cinepolis",
        addressLocality: "Kompally",
        addressRegion: "Telangana",
        postalCode: "500067",
        addressCountry: "IN",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 17.549,
        longitude: 78.4694,
      },
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
            "Sunday",
          ],
          opens: "09:00",
          closes: "21:00",
        },
      ],
      priceRange: "₹₹",
      currenciesAccepted: "INR",
      paymentAccepted: "Cash, Credit Card, UPI",
      medicalSpecialty: [
        "Dentistry",
        "Orthodontics",
        "Endodontics",
        "Prosthodontics",
        "Pediatric Dentistry",
        "Oral Surgery",
        "Implantology",
      ],
      availableService: [
        { "@type": "MedicalProcedure", name: "Dental Implants" },
        { "@type": "MedicalProcedure", name: "Root Canal Treatment" },
        { "@type": "MedicalProcedure", name: "Full Teeth Replacement" },
        { "@type": "MedicalProcedure", name: "Digital Smile Design" },
        { "@type": "MedicalProcedure", name: "Zirconium Crowns" },
        { "@type": "MedicalProcedure", name: "Dental Braces" },
        { "@type": "MedicalProcedure", name: "Invisible Aligners" },
        { "@type": "MedicalProcedure", name: "Teeth Whitening" },
        { "@type": "MedicalProcedure", name: "Paediatric Dentistry" },
        { "@type": "MedicalProcedure", name: "General Dentistry" },
        { "@type": "MedicalProcedure", name: "Laser Gum Treatment" },
        { "@type": "MedicalProcedure", name: "One Visit Dentistry" },
        { "@type": "MedicalProcedure", name: "Guided Biofilm Therapy" },
        { "@type": "MedicalProcedure", name: "Microscopic Dentistry" },
        { "@type": "MedicalProcedure", name: "Conscious Sedation" },
      ],
      sameAs: [
        "https://www.facebook.com/EledentHospitals/",
        "https://www.instagram.com/eledenthospitals/",
        "https://www.youtube.com/channel/UCONaCM78ATu5rcNx_DLQxBg",
      ],
      parentOrganization: {
        "@type": "MedicalOrganization",
        name: "Eledent Hospitals LLP",
        url: "https://eledenthospitals.com",
      },
      hasMap:
        "https://maps.google.com/?q=Eledent+Hospitals+Kompally+Suchitra+Hyderabad",
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "How do I reach Eledent Dental Hospital, Kompally from Suchitra Circle?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "From Suchitra Circle, take Suchitra Road towards Cinepolis. Eledent Dental Hospital is located at 2nd Floor, Bliss MVM Building, opposite Cinepolis on Suchitra Road. The clinic is a short local commute from Suchitra Circle by auto or local transport.",
          },
        },
        {
          "@type": "Question",
          name: "Which bus stop is closest to Eledent Dental Hospital, Kompally?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Suchitra Circle Bus Stop is the most common nearby bus point for this area. From there, the clinic is easily reachable by auto or local transport to Suchitra Road, opposite Cinepolis.",
          },
        },
        {
          "@type": "Question",
          name: "Is parking available at Eledent Dental Hospital, Kompally?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Parking is available within or around the building premises, subject to availability at the time of your visit. If you are coming during peak hours, arriving a little early can help.",
          },
        },
        {
          "@type": "Question",
          name: "Can I visit the Kompally dental hospital for emergency tooth pain or swelling?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. If you have severe tooth pain, swelling, bleeding, a broken tooth, or sudden sensitivity, you should get checked quickly. The first priority is diagnosis and pain control, followed by a clear next-step plan.",
          },
        },
        {
          "@type": "Question",
          name: "What happens during the first consultation at Eledent Dental Hospital, Kompally?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Your first visit usually includes symptom review, clinical examination, and an X-ray or scan only if required. The dentist then explains the diagnosis, shares treatment options, discusses timelines, and recommends the safest next step before starting any procedure.",
          },
        },
        {
          "@type": "Question",
          name: "Is Eledent Dental Hospital, Kompally suitable for children and family dental care?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. The Kompally branch is suitable for children, adults, and senior patients. Families can plan routine check-ups and required treatments in one place with easier follow-ups when needed.",
          },
        },
        {
          "@type": "Question",
          name: "How do I book an appointment at Eledent Kompally and what are the clinic hours?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "To book an appointment, call +91 7799639994. Clinic hours are 9:00 AM to 9:00 PM, Monday to Sunday.",
          },
        },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://eledenthospitals.com",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Locations",
          item: "https://eledenthospitals.com/#locations",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Kompally",
          item: "https://eledenthospitals.com/kompally",
        },
      ],
    },
  ],
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  return getMetadataByPath(`/${slug}`);
}

export default async function LocationPage({ params }: Props) {
  const { slug } = await params;
  const location = await getLocationBySlug(slug);

  if (!location) {
    notFound();
  }

  const hasTransportData =
    !!location?.city?.trim() &&
    Array.isArray(location?.addressLines) &&
    location.addressLines.length > 0 &&
    !!location?.mapEmbedSrc?.trim();

  const pageSchema = locationSchemas[slug];

  return (
    <div>
      {pageSchema ? (
        <Script id={`${slug}-schema`} type="application/ld+json">
          {JSON.stringify(pageSchema)}
        </Script>
      ) : null}

      <Navbar />

      <main>
        <LocationHero
          city={location.heroTitle}
          subtitle={location.heroSubtitle}
          bannerSrc={location.heroBannerSrc}
        />

        <LocationAbout location={location} />

        <LocationServices services={location.services} />

        <LocationTrust
          city={location.city}
          trustHeading={location.trustHeading}
          trustCards={location.trustCards}
        />

        {hasTransportData && <LocationTransport location={location} />}

        <LocationTestimonial data={location.testimonials ?? []} />

        <LocationGallery gallery={location.gallery} />

        <div className="lg:mt-12 mt-4">
          <BookingAportment />
        </div>

        <LocationFaq faqs={location.faqs} />
      </main>

      <Footer />
    </div>
  );
}