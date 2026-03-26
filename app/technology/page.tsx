import type { Metadata } from "next";
import Navbar from "../components/Navbar";
import TechnologyHero from "../components/Technology/technology-hero";
import TechnologyAbout from "../components/Technology/technology-about";
import BookingAportment from "../components/comman/booking-aportment";
import TechnologyFaq from "../components/Technology/technology-faq";
import Footer from "../components/Footer";
import { getMetadataByPath } from "@/lib/metadata";

export const metadata: Metadata = getMetadataByPath("/technology");

export default function Technology() {
  return (
    <div>
      <Navbar />
      <main>
        <TechnologyHero />
        <TechnologyAbout />
        <div className="lg:mt-12 mt-14">
          <BookingAportment />
        </div>
        <TechnologyFaq />
        <Footer />
      </main>
    </div>
  );
}