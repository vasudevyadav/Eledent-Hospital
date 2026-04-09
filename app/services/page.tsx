import type { Metadata } from "next";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ServicesHero from "../components/services/services-hero";
import DentalImplants from "../components/services/dental-implants";
import ServicesFaq from "../components/services/services-faq";
import DentalServices from "../components/services/main-services";
import ServiceAppointment from "../components/services/service-appointment";
import { getMetadataByPath } from "@/lib/metadata";
import CommanTestimonial from "../components/comman/comman-testimonial";

export async function generateMetadata(): Promise<Metadata> {
  return await getMetadataByPath("/services");

}
export default function Services() {
  return (
    <div>
      <Navbar />
      <main>
        <ServicesHero />
        <DentalImplants />
        <DentalServices />
        <ServiceAppointment />
        <CommanTestimonial />
        <ServicesFaq />
        <Footer />
      </main>
    </div>
  );
}