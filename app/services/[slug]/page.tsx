import { notFound } from "next/navigation";

import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import ServicesHero from "../../components/services-details/services-hero";
import DentalImplants from "../../components/services-details/dental-implants";
import ServicesAportment from "../../components/services-details/services-aportment";
import ServicesCount from "../../components/services-details/services-count";

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

type ServiceResponse = {
    slug: string;
    hero: any;
    overview: any;
    appointment?: any;
    count?: any;
    procedure?: any;
    value?: any;
    beforeAfter?: any;
    testimonials?: any;
    planSection?: any;
    ctaSection?: any;
    faq?: any;
};

async function getServiceBySlug(slug: string): Promise<ServiceResponse | null> {
    const url = `https://reinventmedia.in/eledenthospitals/wp-json/custom/v1/service/${encodeURIComponent(
        slug
    )}`;

    try {
        const res = await fetch(url, { cache: "no-store" });

        if (!res.ok) return null;

        const data = (await res.json()) as ServiceResponse;

        if (!data?.slug) return null;

        return data;
    } catch (err) {
        return null;
    }
}

export default async function ServicesDetailsPage({ params }: PageProps) {
    const { slug } = await params; // ✅ IMPORTANT FIX (tumhare error ka solution)

    const service = await getServiceBySlug(slug);

    if (!service) notFound();

    return (
        <div>
            <Navbar />
            <main>
                <ServicesHero data={service.hero} />

                {/* @ts-ignore */}
                <DentalImplants data={service.overview} />

                {service?.appointment ? (
                    // @ts-ignore
                    <ServicesAportment data={service.appointment} />
                ) : null}

                {service?.count ? <ServicesCount data={service.count} /> : null}

                {service?.procedure ? (
                    <PlacementProcedure procedureBlock={service.procedure} />
                ) : null}

                {service?.value ? <OverValue data={service.value} /> : null}

                {service?.beforeAfter ? <AfterBefore data={service.beforeAfter} /> : null}

                {service?.testimonials ? (
                    <ServicesTestimonial data={service.testimonials} />
                ) : null}

                {service?.planSection ? (
                    <DentalImplantsSections data={service.planSection} />
                ) : null}

                {service?.ctaSection ? (
                    <CommanTopRated data={service.ctaSection} />
                ) : null}

                {service?.faq ? <ServicesFaq data={service.faq} /> : null}
            </main>
            <Footer />
        </div>
    );
}