import type { Metadata } from "next";
import { Poppins, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { AppointmentModalProvider } from "@/app/context/AppointmentModalContext";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") || "http://localhost:3000";

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": ["Organization", "MedicalOrganization", "Dentist"],
  "@id": "https://eledenthospitals.com/#organization",
  name: "Eledent Dental Hospitals",
  legalName: "Eledent Hospitals LLP",
  alternateName: "Eledent Dental Hospital",
  description:
    "Eledent Dental Hospitals is a multi-speciality dental hospital chain in Hyderabad with 20+ years of experience, offering dental implants, full mouth rehabilitation, root canal treatment, braces, aligners, smile makeovers, and kids dentistry across 5 locations.",
  url: "https://eledenthospitals.com",
  logo: {
    "@type": "ImageObject",
    url: "https://eledenthospitals.com/White-Logo1.png",
    caption: "Eledent Dental Hospitals Logo",
  },
  image: "https://eledenthospitals.com/home/home-banner.jpg",
  telephone: "+91-7799619994",
  email: "contact@eledenthospitals.com",
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+91-7799619994",
    contactType: "customer service",
    email: "contact@eledenthospitals.com",
    availableLanguage: ["English", "Telugu", "Hindi"],
    hoursAvailable: {
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
  },
  openingHoursSpecification: {
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
  sameAs: [
    "https://www.facebook.com/EledentHospitals/",
    "https://www.instagram.com/eledenthospitals/",
    "https://www.youtube.com/channel/UCONaCM78ATu5rcNx_DLQxBg",
  ],
  areaServed: {
    "@type": "City",
    name: "Hyderabad",
    addressRegion: "Telangana",
    addressCountry: "IN",
  },
  medicalSpecialty: [
    "Dentistry",
    "Orthodontics",
    "Endodontics",
    "Prosthodontics",
    "Periodontics",
    "Pediatric Dentistry",
    "Oral and Maxillofacial Surgery",
    "Cosmetic Dentistry",
    "Implantology",
  ],
  availableService: [
    {
      "@type": "MedicalProcedure",
      name: "Dental Implants",
      procedureType: "Surgical",
    },
    {
      "@type": "MedicalProcedure",
      name: "Full Mouth Rehabilitation",
      procedureType: "Therapeutic",
    },
    {
      "@type": "MedicalProcedure",
      name: "Root Canal Treatment",
      procedureType: "Therapeutic",
    },
    {
      "@type": "MedicalProcedure",
      name: "Dental Braces",
      procedureType: "Therapeutic",
    },
    {
      "@type": "MedicalProcedure",
      name: "Clear Aligners",
      procedureType: "Therapeutic",
    },
    {
      "@type": "MedicalProcedure",
      name: "Smile Makeover",
      procedureType: "Therapeutic",
    },
    {
      "@type": "MedicalProcedure",
      name: "Kids Dentistry",
      procedureType: "Therapeutic",
    },
    {
      "@type": "MedicalProcedure",
      name: "Zoom Teeth Whitening",
      procedureType: "Therapeutic",
    },
  ],
  award: [
    "FamDent Excellence Award – Best Clinic in India 2018",
    "FamDent Excellence Award – Best Clinic in India 2022",
    "Best Healthcare Award – Ministry of Health, Government of India 2019",
    "Best Dental Hospital – Times Health 2024",
    "Best Dental Hospital – Government of Telangana 2019",
    "Heroic Dentist Award – FamDent Excellence 2022",
    "Expert Dentist – The Luminary Health Awards 2024",
  ],
  foundingDate: "2006",
  numberOfEmployees: {
    "@type": "QuantitativeValue",
    minValue: 50,
  },
  hasMap: "https://maps.google.com/?q=Eledent+Dental+Hospital+Hyderabad",
  location: [
    {
      "@type": ["LocalBusiness", "Dentist"],
      name: "Eledent Dental Hospital – Kondapur",
      url: "https://eledenthospitals.com/kondapur",
      telephone: "+91-7799639994",
      email: "contact@eledenthospitals.com",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Kondapur",
        addressRegion: "Telangana",
        addressCountry: "IN",
        postalCode: "500084",
      },
      openingHoursSpecification: {
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
    },
    {
      "@type": ["LocalBusiness", "Dentist"],
      name: "Eledent Dental Hospital – KPHB",
      url: "https://eledenthospitals.com/kukatpally",
      telephone: "+91-9059890578",
      email: "contact@eledenthospitals.com",
      address: {
        "@type": "PostalAddress",
        addressLocality: "KPHB Colony",
        addressRegion: "Telangana",
        addressCountry: "IN",
        postalCode: "500072",
      },
      openingHoursSpecification: {
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
    },
    {
      "@type": ["LocalBusiness", "Dentist"],
      name: "Eledent Dental Hospital – Manikonda",
      url: "https://eledenthospitals.com/manikonda",
      telephone: "+91-7799659994",
      email: "contact@eledenthospitals.com",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Manikonda",
        addressRegion: "Telangana",
        addressCountry: "IN",
        postalCode: "500089",
      },
      openingHoursSpecification: {
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
    },
    {
      "@type": ["LocalBusiness", "Dentist"],
      name: "Eledent Dental Hospital – Banjara Hills",
      url: "https://eledenthospitals.com/banjara-hills",
      telephone: "+91-7799649994",
      email: "contact@eledenthospitals.com",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Banjara Hills",
        addressRegion: "Telangana",
        addressCountry: "IN",
        postalCode: "500034",
      },
      openingHoursSpecification: {
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
    },
    {
      "@type": ["LocalBusiness", "Dentist"],
      name: "Eledent Dental Hospital – Kompally",
      url: "https://eledenthospitals.com/kompally",
      telephone: "+91-7799769994",
      email: "contact@eledenthospitals.com",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Kompally",
        addressRegion: "Telangana",
        addressCountry: "IN",
        postalCode: "500100",
      },
      openingHoursSpecification: {
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
    },
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Eledent Dental Hospitals",
    template: "%s",
  },
  description:
    "Eledent Dental Hospitals offers advanced dental care, painless treatments, expert dentists, and modern technology across Hyderabad.",
  applicationName: "Eledent Dental Hospitals",
  authors: [{ name: "Eledent Dental Hospitals" }],
  creator: "Eledent Dental Hospitals",
  publisher: "Eledent Dental Hospitals",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Eledent Dental Hospitals",
    description:
      "Eledent Dental Hospitals offers advanced dental care, painless treatments, expert dentists, and modern technology across Hyderabad.",
    url: siteUrl,
    siteName: "Eledent Dental Hospitals",
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Eledent Dental Hospitals",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Eledent Dental Hospitals",
    description:
      "Eledent Dental Hospitals offers advanced dental care, painless treatments, expert dentists, and modern technology across Hyderabad.",
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      style={{ colorScheme: "light" }}
    >
      <body
        className={`${poppins.variable} ${geistMono.variable} antialiased bg-white text-black`}
        style={{
          colorScheme: "light",
          backgroundColor: "#ffffff",
          color: "#171717",
        }}
      >
        <Script id="organization-schema" type="application/ld+json">
          {JSON.stringify(organizationSchema)}
        </Script>

        <Script id="gtm-script" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){
              w[l]=w[l]||[];
              w[l].push({'gtm.start': new Date().getTime(), event:'gtm.js'});
              var f=d.getElementsByTagName(s)[0],
                  j=d.createElement(s),
                  dl=l!='dataLayer' ? '&l='+l : '';
              j.async=true;
              j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
              f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-W49C7DC');
          `}
        </Script>

        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-W49C7DC"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>

        <AppointmentModalProvider>{children}</AppointmentModalProvider>
      </body>
    </html>
  );
}