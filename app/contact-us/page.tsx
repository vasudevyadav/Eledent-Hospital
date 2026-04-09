import type { Metadata } from "next";
import Navbar from "../components/Navbar";
import BookingAportment from "../components/comman/booking-aportment";
import Footer from "../components/Footer";
import ContactHero from "../components/contact-us/contact-hero";
import ContactAbout from "../components/contact-us/contact-about";
import ContactFaq from "../components/contact-us/contact-faq";
import { getMetadataByPath } from "@/lib/metadata";

export async function generateMetadata(): Promise<Metadata> {
  return await getMetadataByPath("/contact-us");
}
export default function ContactUs() {
  return (
    <div>
      <Navbar />
      <main>
        <ContactHero />
        <ContactAbout />
        <div className="lg:mt-32 mt-14">
          <BookingAportment />
        </div>
        <ContactFaq />
        <Footer />
      </main>
    </div>
  );
}