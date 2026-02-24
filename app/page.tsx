import Navbar from "./components/Navbar";
import HeroSection from "./components/home/hero-section";
import AboutUs from "./components/home/about-us";
import OurSpecialties from "./components/home/our-specialties";
import MakeAppointment from "./components/home/make-appointment";
import HomeServices from "./components/home/home-services";
import HomeTestimonial from "./components/home/home-testimonial";
import HealthPatner from "./components/home/health-patner";
import HomeCareAppointment from "./components/home/home-care-appointment";
import BlogMain from "./components/home/blog";
import HomeFaq from "./components/home/home-faq";
import Footer from "./components/Footer";

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
        <HomeCareAppointment />
        <BlogMain />
        <HomeFaq />
        <Footer />
      </main>
    </div>
  );
}
