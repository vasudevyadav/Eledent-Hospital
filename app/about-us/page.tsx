import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ServicesHero from "../components/services/services-hero";
import DentalImplants from "../components/services/dental-implants";
import ServicesAportment from "../components/services/services-aportment";
import ServicesCount from "../components/services/services-count";
import PlacementProcedure from "../components/services/placement-procedure";
import OverValue from "../components/services/value";
import AfterBefore from "../components/services/after-before";
import ServicesTestimonial from "../components/services/home-testimonial";
import DentalImplantsSections from "../components/services/dental-implant-plan";
import CommanTopRated from "../components/services/make-appointment";
import ServicesFaq from "../components/services/services-faq";



export default function Home() {
  return (
    <div>
      <Navbar />
      <main>
        <ServicesHero />
        <DentalImplants />
        <ServicesAportment />
        <ServicesCount />
        <PlacementProcedure />
        <OverValue />
        <AfterBefore />
        <ServicesTestimonial />
        <DentalImplantsSections />
        <CommanTopRated />
        <ServicesFaq />
        <Footer />
      </main>
    </div>
  );
}
