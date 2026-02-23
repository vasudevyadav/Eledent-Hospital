import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ServicesHero from "../components/services/services-hero";
import DentalImplants from "../components/services/dental-implants";
import CommanTopRated from "../components/services/make-appointment";
import ServicesFaq from "../components/services/services-faq";
import DentalServices from "../components/services/main-services";
import ServiceAppointment from "../components/services/service-appointment";




export default function Services() {
  return (
    <div>
      <Navbar />
      <main>
        <ServicesHero />
        <DentalImplants />
        <DentalServices />
        <ServiceAppointment />
        <ServicesFaq />
        <Footer />
      </main>
    </div>
  );
}
