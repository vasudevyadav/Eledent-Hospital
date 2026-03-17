import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import AboutHero from "../components/about-us/about-hero";
import AboutDetails from "../components/about-us/about-details";
import WhyChosse from "../components/about-us/why-chosse";
import MissionVision from "../components/about-us/misson-visson";
import AboutAppointment from "../components/about-us/about-appointment";
import AboutFaq from "../components/about-us/about-faq";
import AboutTestimonial from "../components/about-us/about-testimonial";

export default function Home() {
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
