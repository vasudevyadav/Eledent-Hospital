import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ServicesHero from "../components/services-details/services-hero";
import DentalImplants from "../components/services-details/dental-implants";
import ServicesAportment from "../components/services-details/services-aportment";
import ServicesCount from "../components/services-details/services-count";
import PlacementProcedure from "../components/services-details/placement-procedure";
import OverValue from "../components/services-details/value";
import AfterBefore from "../components/services-details/after-before";
import ServicesTestimonial from "../components/services-details/home-testimonial";
import DentalImplantsSections from "../components/services-details/dental-implant-plan";
import CommanTopRated from "../components/services-details/make-appointment";
import ServicesFaq from "../components/services-details/services-faq";



export default function Services() {
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
