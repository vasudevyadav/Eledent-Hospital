import Navbar from "../components/Navbar";
import HomeTestimonial from "../components/home/home-testimonial";
import Footer from "../components/Footer";
import AboutHero from "../components/about-us/about-hero";
import AboutDetails from "../components/about-us/about-details";
import WhyChosse from "../components/about-us/why-chosse";
import MissionVision from "../components/about-us/misson-visson";
import AboutAppointment from "../components/about-us/about-appointment";
import AboutFaq from "../components/about-us/about-faq";

export default function Home() {
  return (
    <div>
      <Navbar />
      <main>
        <AboutHero />
        <AboutDetails />
        <MissionVision />
        <WhyChosse />
        <HomeTestimonial />
        <AboutAppointment />
        <AboutFaq />
        <Footer />
      </main>
    </div>
  );
}
