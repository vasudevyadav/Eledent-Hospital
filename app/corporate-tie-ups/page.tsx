import type { Metadata } from "next";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { getMetadataByPath } from "@/lib/metadata";
import CorporateHero from "../components/corporate-dental/corporate-hero";
import CorporateDetails from "../components/corporate-dental/corporate-details";
import CorporateBenefit from "../components/corporate-dental/coporate-benifit";
import CorporateTieUpSections from "../components/corporate-dental/tie-ups";
import CorporateFaq from "../components/corporate-dental/corporate-faq";
import BookingAportment from "../components/comman/booking-aportment";
import Image from "next/image";
import WhyPartner from "../components/corporate-dental/corporate-partner";
export async function generateMetadata(): Promise<Metadata> {
  return await getMetadataByPath("/about-us");
}

export default function CorporateDental() {
  return (
    <div>
      <Navbar />
      <main>
        <CorporateHero />
        <CorporateDetails />
        <CorporateBenefit />
        <WhyPartner />
        <div className="max-w-7xl mx-auto py-4 mt-10">
          <Image
            src="/dental-tie-ups.webp"
            alt="Description of image"
            className="w-full"
            width={2000}
            height={2000}
          />
        </div>
        <CorporateTieUpSections />
        <div>
          <BookingAportment />
        </div>
        <CorporateFaq />
        <Footer />
      </main>
    </div>
  );
}