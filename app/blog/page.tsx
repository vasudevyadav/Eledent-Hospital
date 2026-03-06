import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import BlogHero from "../components/blog/blog-hero";
import BlogListingSection from "../components/blog/blog-about";
import BookingAportment from "../components/comman/booking-aportment";
import BlogFaq from "../components/blog/blog-faq";

export default function Blog() {
  return (
    <div>
      <Navbar />
      <main>
        <BlogHero />
        <BlogListingSection />
        <div className="mt-28">
          <BookingAportment />
        </div>
        <BlogFaq />
        <Footer />
      </main>
    </div>
  );  
}
