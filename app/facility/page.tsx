import type { Metadata } from "next";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import FacilitiesHero from "../components/facilities/facilities-hero";
import FacilitiesAbouts from "../components/facilities/facilities-about";
import FacilitiesFaq from "../components/facilities/facilities-faq";
import BookingAportment from "../components/comman/booking-aportment";
import { getMetadataByPath } from "@/lib/metadata";

export async function generateMetadata(): Promise<Metadata> {
  return await getMetadataByPath("/facility");
}

export default function Facility() {
  return (
    <div>
      <Navbar />
      <main>
        <FacilitiesHero />
        <FacilitiesAbouts />
        <BookingAportment />
        <FacilitiesFaq />
        <Footer />
      </main>
    </div>
  );
}