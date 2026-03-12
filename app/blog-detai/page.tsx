import Navbar from "../components/Navbar";
import BlogDetailsHero from "../components/blog-details/blog-details-hero";
import BlogDetailsAbout from "../components/blog-details/blog-details-about";
import BlogDetailsFaq from "../components/blog-details/blog-details-faq";
import Footer from "../components/Footer";


export default function BlogDetail() {
  return (
    <div>
      <Navbar />
      <main>
        <BlogDetailsHero />
        <BlogDetailsAbout />
        <BlogDetailsFaq />
        <Footer />
      </main>
    </div>
  );
}
