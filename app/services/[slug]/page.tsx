import type { Metadata } from "next";
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

import DentalImplantsSections from "@/app/components/services-details/dental-implant-plan";
import CommanTopRated from "@/app/components/services-details/make-appointment";
import ServicesFaq from "@/app/components/services-details/services-faq";
import ServicesTestimonial from "@/app/components/services-details/services-testimonial";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

type ServicesHeroSection = {
  title: string;
  description: string;
  image: string;
};

type ServiceResponse = {
  slug: string;
  hero: ServicesHeroSection;
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
};

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") || "http://localhost:3000";

function getAbsoluteImageUrl(image?: string) {
  if (!image) return `${siteUrl}/og-image.jpg`;
  if (image.startsWith("http://") || image.startsWith("https://")) return image;
  return `${siteUrl}${image.startsWith("/") ? image : `/${image}`}`;
}

async function getServiceBySlug(slug: string): Promise<ServiceResponse | null> {
  const url = `https://reinventmedia.in/eledenthospitals/wp-json/custom/v1/service/${encodeURIComponent(
    slug
  )}`;

  try {
    const res = await fetch(url, { cache: "no-store" });

    if (!res.ok) return null;

    const data = (await res.json()) as ServiceResponse;

    if (!data?.slug || !data?.hero) return null;

    return data;
  } catch {
    return null;
  }
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = await getServiceBySlug(slug);

  if (!service) {
    return {
      title: "Service Not Found - Eledent Dental Hospitals",
      description: "The requested service page could not be found.",
    };
  }

  const title = service.hero.title || `${slug} - Eledent Dental Hospitals`;

  const description =
    service.hero.description ||
    `Explore ${slug} treatment at Eledent Dental Hospitals with expert care and advanced technology.`;

  const image = getAbsoluteImageUrl(service.hero.image);
  const canonicalUrl = `${siteUrl}/services/${slug}`;

  return {
    title,
    description,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title,
      description,
      url: canonicalUrl,
      siteName: "Eledent Dental Hospitals",
      type: "article",
      locale: "en_IN",
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
  };
}

export default async function ServicesDetailsPage({ params }: PageProps) {
  const { slug } = await params;
  const service = await getServiceBySlug(slug);

  if (!service) notFound();

  return (
    <div>
      <Navbar />
      <main>
        <ServicesHero data={service.hero as any} />

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

        {service?.beforeAfter ? (
          <AfterBefore data={service.beforeAfter} />
        ) : null}

        <ServicesTestimonial />

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