import type { Metadata } from "next";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import BlogHero from "../components/blog/blog-hero";
import BlogListingSection from "../components/blog/blog-about";
import BookingAportment from "../components/comman/booking-aportment";
import BlogFaq from "../components/blog/blog-faq";
import { getMetadataByPath } from "@/lib/metadata";

export const metadata: Metadata = getMetadataByPath("/blogs");

async function getBlogPageData() {
  try {
    const res = await fetch(
      "https://eledenthospitals.com/wp-json/custom/v1/blogs",
      {
        next: { revalidate: 60 },
      }
    );

    if (!res.ok) {
      throw new Error("Failed to fetch blog page data");
    }

    const result = await res.json();
    return result?.data || null;
  } catch (error) {
    console.error("Blog API Error:", error);
    return null;
  }
}

export default async function Blog() {
  const blogData = await getBlogPageData();

  const hero = blogData?.hero;
  const listingSection = blogData?.listingSection;
  const faqSection = blogData?.faqSection;

  return (
    <div>
      <Navbar />
      <main>
        <BlogHero />

        <BlogListingSection
          posts={listingSection?.posts || []}
          categories={listingSection?.categories || []}
          recentPosts={listingSection?.recentPosts || []}
        />

        <div className="mt-10 lg:mt-28">
          <BookingAportment />
        </div>

        <BlogFaq
          tag={faqSection?.tag}
          heading={faqSection?.heading}
          description={faqSection?.description}
          backgroundImage={faqSection?.backgroundImage}
          items={faqSection?.items || []}
        />
        <Footer />
      </main>
    </div>
  );
}