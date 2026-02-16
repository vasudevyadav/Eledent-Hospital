import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ServicesHero from "../components/services/services-hero";
import DentalImplants from "../components/services/dental-implants";

export default function Home() {
  return (
    <div>
      <Navbar />
      <main>
        <ServicesHero />
        <DentalImplants />
        <Footer />
      </main>
    </div>
  );
}
