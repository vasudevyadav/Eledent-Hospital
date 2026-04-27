import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import ServicesHero from "../../components/services-details/services-hero";
import DentalImplants from "../../components/services-details/dental-implants";
import ServicesAportment from "../../components/services-details/services-aportment";
import ServicesCount from "../../components/services-details/services-count";
import PlacementProcedure from "@/app/components/services-details/placement-procedure";
import CommanTopRated from "@/app/components/services-details/make-appointment";
import ServicesFaq from "@/app/components/services-details/services-faq";
import CommanTestimonial from "@/app/components/comman/comman-testimonial";
import RelatedBlogsSection from "@/app/components/services-details/dental-implant-plan";
import OverValue from "@/app/components/services-details/value";
import { getMetadataByPath } from "@/lib/metadata";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

type ServiceResponse = {
  slug: string;
  hero?: any;
  overview?: any;
  appointment?: any;
  count?: any;
  procedure?: any;
  value?: any;
  beforeAfter?: any;
  testimonials?: any;
  planSection?: any;
  ctaSection?: any;
  faq?: any;
  category?: {
    id?: string;
    label?: string;
    slug?: string;
  };
};

function hasData(value: any): boolean {
  if (value === null || value === undefined) return false;

  if (typeof value === "string") {
    return value.trim().length > 0;
  }

  if (Array.isArray(value)) {
    return value.length > 0;
  }

  if (typeof value === "object") {
    return Object.keys(value).length > 0;
  }

  return true;
}

async function getServiceBySlug(slug: string): Promise<ServiceResponse | null> {
  const url = `https://cms.eledenthospitals.com/wp-json/custom/v1/service/${encodeURIComponent(
    slug
  )}`;

  try {
    const res = await fetch(url, { cache: "no-store" });

    if (!res.ok) return null;

    const data = (await res.json()) as ServiceResponse;

    if (!data?.slug) return null;

    return data;
  } catch {
    return null;
  }
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  return getMetadataByPath(`/services/${slug}`);
}

export default async function ServicesDetailsPage({ params }: PageProps) {
  const { slug } = await params;

  const service = await getServiceBySlug(slug);

  if (!service) notFound();

  const currentCategorySlug = service?.category?.slug ?? "";

  return (
    <div>
      <Navbar />

      <main>
        {hasData(service.hero) ? <ServicesHero data={service.hero} /> : null}

        {hasData(service.overview) ? (
          <DentalImplants data={service.overview} />
        ) : null}

        {hasData(service.appointment) ? (
          // @ts-ignore: ServicesAportment props are not typed here; passing data anyway
          <ServicesAportment data={service.appointment} />
        ) : null}

        {hasData(service.count) ? <ServicesCount data={service.count} /> : null}

        {hasData(service.procedure) ? (
          <PlacementProcedure procedureBlock={service.procedure} />
        ) : null}

        {hasData(service.value) ? <OverValue data={service.value} /> : null}

        {/* Before/After tabhi show hoga jab data aaye */}
        {/* {hasData(service.beforeAfter) ? <AfterBefore data={service.beforeAfter} /> : null} */}

        <CommanTestimonial />

        {currentCategorySlug.trim() ? (
          <RelatedBlogsSection currentCategorySlug={currentCategorySlug} />
        ) : null}

        {hasData(service.ctaSection) ? (
          <CommanTopRated data={service.ctaSection} />
        ) : null}

        {hasData(service.faq) ? <ServicesFaq data={service.faq} /> : null}
      </main>

      <Footer />
    </div>
  );
}