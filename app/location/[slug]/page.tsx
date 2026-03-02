import BookingAportment from "@/app/components/comman/booking-aportment";
import Footer from "@/app/components/Footer";
import LocationAbout from "@/app/components/location/location-about";
import LocationFaq from "@/app/components/location/location-faq";
import LocationGallery from "@/app/components/location/location-gallery";
import LocationHero from "@/app/components/location/location-hero";
import LocationServices from "@/app/components/location/location-services";
import LocationTrust from "@/app/components/location/location-trust";
import Navbar from "@/app/components/Navbar";
import { getLocationBySlug } from "@/data/locations";
import { notFound } from "next/navigation";

export default async function LocationPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params; // ✅ unwrap params
  const location = getLocationBySlug(slug);

  if (!location) notFound();

  return (
    <div>
      <Navbar />
      <main>
        <LocationHero
          city={location.heroTitle}
          subtitle={location.heroSubtitle}
          bannerSrc={location.heroBannerSrc}
        />

        <LocationAbout location={location} />
        <LocationServices services={location.services} />

        <LocationTrust
          city={location.city}
          trustHeading={location.trustHeading}
          trustCards={location.trustCards}
        />

        <BookingAportment />

        <LocationGallery gallery={location.gallery} />

        <LocationFaq faqs={location.faqs} introText={location.faqIntroText} />

        <Footer />
      </main>
    </div>
  );
}