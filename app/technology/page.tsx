import Navbar from "../components/Navbar";
import TechnologyHero from "../components/Technology/technology-hero";
import TechnologyAbout from "../components/Technology/technology-about";
import BookingAportment from "../components/comman/booking-aportment";
import TechnologyFaq from "../components/Technology/technology-faq";
import Footer from "../components/Footer";

export default function Technology() {
  return (
    <div>
      <Navbar />
      <main>
        <TechnologyHero />
        <TechnologyAbout />
        <div className="lg:mt-12 mt-14">
          <BookingAportment />
        </div>
        <TechnologyFaq />
        <Footer />
      </main>
    </div>
  );
}
