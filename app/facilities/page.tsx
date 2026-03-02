import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import FacilitiesHero from "../components/facilities/facilities-hero";
import FacilitiesAbouts from "../components/facilities/facilities-about";
import FacilitiesFaq from "../components/facilities/facilities-faq";
import BookingAportment from "../components/comman/booking-aportment";

export default function Facilities() {
  return (
    <div>
      <Navbar />
      <main>
        <FacilitiesHero />
        <FacilitiesAbouts />
        <BookingAportment />
        <FacilitiesFaq />
        <Footer />
      </main>
    </div>
  );
}
