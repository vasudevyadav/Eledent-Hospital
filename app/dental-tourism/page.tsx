import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import TourismHero from "../components/dental-tourism/tourism-hero";
import TourismAbout from "../components/dental-tourism/tourism-about";
import TourismWhy from "../components/dental-tourism/tourism-why";
import TourismNeed from "../components/dental-tourism/tourism-need";
import TourismWideRange from "../components/dental-tourism/tourism-wide-range";
import VisaAccommodation from "../components/dental-tourism/visa-accommodation";
import JourneyDigitalDentistry from "../components/dental-tourism/journey-digital-dentistry";
import TourismFaq from "../components/dental-tourism/tourism-faq";
import BookingTourism from "../components/comman/booking-tourism";

export default function DentalTourism() {
  return (
    <div>
      <Navbar />
      <main>
        <TourismHero />
        <TourismAbout />
        <TourismWhy />
        <TourismNeed />
        <TourismWideRange />
        <VisaAccommodation />
        <JourneyDigitalDentistry />
        <BookingTourism />
        <TourismFaq />
        <Footer />
      </main>
    </div>
  );
}
