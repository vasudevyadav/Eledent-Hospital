import Navbar from "../components/Navbar";
import BookingAportment from "../components/comman/booking-aportment";
import Footer from "../components/Footer";
import ContactHero from "../components/contact-us/contact-hero";
import ContactAbout from "../components/contact-us/contact-about";
import ContactFaq from "../components/contact-us/contact-faq";

export default function ContactUs() {
  return (
    <div>
      <Navbar />
      <main>
        <ContactHero />
        <ContactAbout />
        <BookingAportment />
        <ContactFaq />
        <Footer />
      </main>
    </div>
  );
}
