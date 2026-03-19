import type { Metadata } from "next";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import AboutHero from "../components/about-us/about-hero";
import AboutDetails from "../components/about-us/about-details";
import WhyChosse from "../components/about-us/why-chosse";
import MissionVision from "../components/about-us/misson-visson";
import AboutAppointment from "../components/about-us/about-appointment";
import AboutFaq from "../components/about-us/about-faq";
import AboutTestimonial from "../components/about-us/about-testimonial";
import { getMetadataByPath } from "@/lib/metadata";

export const metadata: Metadata = getMetadataByPath("/about-us");

export default function AboutUs() {
  return (
    <div>
      <Navbar />
      <main>
        <AboutHero />
        <AboutDetails />
        <MissionVision />
        <WhyChosse />
        <AboutTestimonial />
        <AboutAppointment />
        <AboutFaq />
        <Footer />
      </main>
    </div>
  );
}