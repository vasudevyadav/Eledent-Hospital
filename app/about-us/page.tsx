import type { Metadata } from "next";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import AboutHero from "../components/about-us/about-hero";
import AboutDetails from "../components/about-us/about-details";
import WhyChosse from "../components/about-us/why-chosse";
import MissionVision from "../components/about-us/misson-visson";
import AboutAppointment from "../components/about-us/about-appointment";
import AboutFaq from "../components/about-us/about-faq";
import { getMetadataByPath } from "@/lib/metadata";
import CommanTestimonial from "../components/comman/comman-testimonial";

export async function generateMetadata(): Promise<Metadata> {
  return await getMetadataByPath("/about-us");
}

export default function AboutUs() {
  return (
    <div>
      <Navbar />
      <main>
        <AboutHero />
        <AboutDetails />
        <MissionVision />
        <WhyChosse />
        <CommanTestimonial />
        <AboutAppointment />
        <AboutFaq />
        <Footer />
      </main>
    </div>
  );
}