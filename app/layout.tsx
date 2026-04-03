import type { Metadata } from "next";
import { Poppins, Geist_Mono } from "next/font/google";
import "./globals.css";
import { AppointmentModalProvider } from "@/app/context/AppointmentModalContext";
import InitialLoader from "./components/InitialLoader";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") || "http://localhost:3000";

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
    <html lang="en">
      <head>
        {/* Google Tag Manager */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-W49C7DC');`,
          }}
        />
        {/* End Google Tag Manager */}
      </head>
      <body
        className={`${poppins.variable} ${geistMono.variable} antialiased`}
      >
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-W49C7DC"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        {/* End Google Tag Manager (noscript) */}

        <AppointmentModalProvider>
          <InitialLoader>{children}</InitialLoader>
        </AppointmentModalProvider>
      </body>
    </html>
  );
}