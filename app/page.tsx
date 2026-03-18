import type { Metadata } from "next";
import { getMetadataByPath } from "@/lib/metadata";

import Navbar from "./components/Navbar";
import HeroSection from "./components/home/hero-section";
import AboutUs from "./components/home/about-us";
import OurSpecialties from "./components/home/our-specialties";
import MakeAppointment from "./components/home/make-appointment";
import HomeServices from "./components/home/home-services";
import HomeTestimonial from "./components/home/home-testimonial";
import HealthPatner from "./components/home/health-patner";
import BlogMain from "./components/home/blog";
import HomeFaq from "./components/home/home-faq";
import Footer from "./components/Footer";
import BookingAportment from "./components/comman/booking-aportment";
import AwardsSection from "./components/home/award";

export const metadata: Metadata = getMetadataByPath("/");

export default function Home() {
  return (
    <div>
      <Navbar />
      <main>
        <HeroSection />
        <AboutUs />
        <OurSpecialties />
        <MakeAppointment />
        <HomeServices />
        <HomeTestimonial />
        <HealthPatner />
        <div>
          <BookingAportment />
        </div>
        <BlogMain />
        <AwardsSection />
        
        <HomeFaq />
        <Footer />
      </main>
    </div>
  );
}