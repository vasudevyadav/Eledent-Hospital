import { notFound } from "next/navigation";

import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import ServicesHero from "../../components/services-details/services-hero";
import DentalImplants from "../../components/services-details/dental-implants";
import ServicesAportment from "../../components/services-details/services-aportment";
import ServicesCount from "../../components/services-details/services-count";

import { SERVICE_DETAILS_DATA } from "@/data/serviceDetails";
import PlacementProcedure from "@/app/components/services-details/placement-procedure";
import OverValue from "@/app/components/services-details/value";
import AfterBefore from "@/app/components/services-details/after-before";
import ServicesTestimonial from "@/app/components/services-details/home-testimonial";
import DentalImplantsSections from "@/app/components/services-details/dental-implant-plan";
import CommanTopRated from "@/app/components/services-details/make-appointment";
import ServicesFaq from "@/app/components/services-details/services-faq";

type PageProps = {
    params: Promise<{
        slug: string;
    }>;
};

export default async function ServicesDetailsPage({ params }: PageProps) {
    const { slug } = await params;

    const service = SERVICE_DETAILS_DATA[slug];

    if (!service) notFound();

    return (
        <div>
            <Navbar />
            <main>
                <ServicesHero data={service.hero} />
                {/* @ts-ignore */}
                <DentalImplants data={service.overview} />
                {/* @ts-ignore */}
                <ServicesAportment data={service.appointment} />
                <ServicesCount data={service.count} />
                {service?.procedure ? (
                    <PlacementProcedure procedureBlock={service.procedure} />
                ) : null}
                <OverValue data={service.value} />
                <AfterBefore data={service.beforeAfter} />
                <ServicesTestimonial data={service.testimonials} />
                <DentalImplantsSections data={service.planSection} />
                <CommanTopRated data={service.ctaSection} />
                <ServicesFaq data={service.faq} />
            </main>
            <Footer />
        </div>
    );
}