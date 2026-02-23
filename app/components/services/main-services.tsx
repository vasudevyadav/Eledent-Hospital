"use client";

import Image from "next/image";
import type { JSX } from "react";
import { useState } from "react";

/* -----------------------------
  1) DATA TYPES
----------------------------- */
type ServiceCardItem = {
  imageSrc: string;
  imageAlt: string;
  iconSrc?: string;
  title: string;
  description: string;
  href?: string;
};

type ServicesSectionData = {
  badge?: string;
  heading: string;
  cards: ServiceCardItem[];
  cardsPerPage?: number;
};

/* -----------------------------
  2) PAGE DATA
----------------------------- */
const SERVICE_CARDS: ServiceCardItem[] = [
  {
    imageSrc: "/services-main/our-services.png",
    imageAlt: "Advanced And Painless Dental Implants",
    iconSrc: "/services-main/dental-icon.png",
    title: "Advanced And Painless Dental Implants",
    description:
      "Dental implants are small titanium or zirconia posts that act like artificial tooth roots.",
    href: "#dental-implants",
  },
  {
    imageSrc: "/services-main/our-services.png",
    imageAlt: "Advanced And Painless Dental Implants",
    iconSrc: "/services-main/dental-icon.png",
    title: "Advanced And Painless Dental Implants",
    description:
      "Dental implants are small titanium or zirconia posts that act like artificial tooth roots.",
    href: "#dental-implants",
  },
  {
    imageSrc: "/services-main/our-services.png",
    imageAlt: "Advanced And Painless Dental Implants",
    iconSrc: "/services-main/dental-icon.png",
    title: "Advanced And Painless Dental Implants",
    description:
      "Dental implants are small titanium or zirconia posts that act like artificial tooth roots.",
    href: "#dental-implants",
  },
  {
    imageSrc: "/services-main/our-services.png",
    imageAlt: "Advanced And Painless Dental Implants",
    iconSrc: "/services-main/dental-icon.png",
    title: "Advanced And Painless Dental Implants",
    description:
      "Dental implants are small titanium or zirconia posts that act like artificial tooth roots.",
    href: "#dental-implants",
  },

  {
    imageSrc: "/services-main/our-services.png",
    imageAlt: "Advanced And Painless Dental Implants",
    iconSrc: "/services-main/dental-icon.png",
    title: "Advanced And Painless Dental Implants",
    description:
      "Dental implants are small titanium or zirconia posts that act like artificial tooth roots.",
    href: "#dental-implants",
  },

  {
    imageSrc: "/services-main/our-services.png",
    imageAlt: "Advanced And Painless Dental Implants",
    iconSrc: "/services-main/dental-icon.png",
    title: "Advanced And Painless Dental Implants",
    description:
      "Dental implants are small titanium or zirconia posts that act like artificial tooth roots.",
    href: "#dental-implants",
  },
  {
    imageSrc: "/services-main/our-services.png",
    imageAlt: "Advanced And Painless Dental Implants",
    iconSrc: "/services-main/dental-icon.png",
    title: "Advanced And Painless Dental Implants",
    description:
      "Dental implants are small titanium or zirconia posts that act like artificial tooth roots.",
    href: "#dental-implants",
  },

  {
    imageSrc: "/services-main/our-services.png",
    imageAlt: "Advanced And Painless Dental Implants",
    iconSrc: "/services-main/dental-icon.png",
    title: "Advanced And Painless Dental Implants",
    description:
      "Dental implants are small titanium or zirconia posts that act like artificial tooth roots.",
    href: "#dental-implants",
  },

  {
    imageSrc: "/services-main/our-services.png",
    imageAlt: "Advanced And Painless Dental Implants",
    iconSrc: "/services-main/dental-icon.png",
    title: "Advanced And Painless Dental Implants",
    description:
      "Dental implants are small titanium or zirconia posts that act like artificial tooth roots.",
    href: "#dental-implants",
  },


];

const SERVICE_SECTIONS: ServicesSectionData[] = [
  {
    badge: "Our",
    heading: "Services",
    cards: SERVICE_CARDS,
    cardsPerPage: 6,
  },
];

export default function DentalServices(): JSX.Element {
  return (
    <>
      {SERVICE_SECTIONS.map((section, index) => (
        <DentalServicesGrid key={`services-section-${index}`} {...section} />
      ))}
    </>
  );
}

function DentalServicesGrid({
  badge,
  heading,
  cards,
  cardsPerPage = 6,
}: ServicesSectionData): JSX.Element {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(cards.length / cardsPerPage);
  const start = (currentPage - 1) * cardsPerPage;
  const visibleCards = cards.slice(start, start + cardsPerPage);

  return (
    <section className="w-full px-20">
      <div className="w-full bg-[#F3F4F6] py-10 sm:py-8 lg:py-12 rounded-xl">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Heading */}
          <div className="mb-6 text-center sm:mb-8 lg:mb-10">
            {badge && (
              <span className="mb-2 inline-block bg-[#F47A20] px-2.5 py-1 text-xs font-bold uppercase tracking-wide text-white sm:text-sm">
                {badge}
              </span>
            )}
            <h2 className="text-2xl font-bold leading-tight text-[#1a1a1a] sm:text-3xl lg:text-4xl">
              {heading}
            </h2>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3 lg:gap-6">
            {visibleCards.map((card, idx) => (
              <ServiceCard key={`svc-${start + idx}`} {...card} />
            ))}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="mt-6 flex flex-wrap items-center justify-center gap-2 sm:mt-8">
              <button
                type="button"
                onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                disabled={currentPage === 1}
                aria-label="Previous page"
                className="flex h-9 w-9 items-center justify-center rounded-md border border-gray-300 bg-white text-gray-600 transition hover:border-[#F47A20] hover:text-[#F47A20] disabled:cursor-not-allowed disabled:opacity-40 sm:h-10 sm:w-10"
              >
                ‹
              </button>

              {Array.from({ length: totalPages }, (_, i) => i + 1).map((pg) => (
                <button
                  key={pg}
                  type="button"
                  onClick={() => setCurrentPage(pg)}
                  aria-label={`Go to page ${pg}`}
                  aria-current={pg === currentPage ? "page" : undefined}
                  className={[
                    "flex h-9 w-9 items-center justify-center rounded-md border text-sm font-semibold transition sm:h-10 sm:w-10",
                    pg === currentPage
                      ? "border-[#F47A20] bg-[#F47A20] text-white"
                      : "border-gray-300 bg-white text-gray-700 hover:border-[#F47A20] hover:text-[#F47A20]",
                  ].join(" ")}
                >
                  {pg}
                </button>
              ))}

              <button
                type="button"
                onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
                disabled={currentPage === totalPages}
                aria-label="Next page"
                className="flex h-9 w-9 items-center justify-center rounded-md border border-gray-300 bg-white text-gray-600 transition hover:border-[#F47A20] hover:text-[#F47A20] disabled:cursor-not-allowed disabled:opacity-40 sm:h-10 sm:w-10"
              >
                ›
              </button>
            </div>
          )}
        </div>
      </div>
    </section >
  );
}

function ServiceCard({
  imageSrc,
  imageAlt,
  iconSrc,
  title,
  description,
  href,
}: ServiceCardItem): JSX.Element {
  return (
    <div className="group flex h-full flex-col overflow-hidden rounded-2xl bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
      {/* Image */}
      <div className="relative h-[200px] w-full overflow-hidden sm:h-[220px] lg:h-[240px]">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="rounded-[18px] object-cover object-center p-2 transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col px-4 pb-4 pt-3 sm:px-5 sm:pb-5">
        <div className="mb-2 flex items-start gap-2 sm:gap-2.5">
          {iconSrc ? (
            <div className="relative mt-0.5 h-7 w-7 shrink-0 sm:h-8 sm:w-8">
              <Image
                src={iconSrc}
                alt=""
                fill
                sizes="32px"
                className="object-contain"
              />
            </div>
          ) : (
            <svg
              className="mt-0.5 h-6 w-6 shrink-0 text-[#F47A20]"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M12 2C9.5 2 7 4 7 6.5c0 1.2.4 2.3 1 3.2L7 19c0 1.7 1.3 3 3 3s3-1.3 3-3V14h-1v5c0 1.1-.9 2-2 2s-2-.9-2-2l1-9.3C8.4 8.8 8 7.7 8 6.5 8 4.6 9.8 3 12 3s4 1.6 4 3.5c0 1.2-.4 2.3-1 3.2L16 19c0 1.1-.9 2-2 2v1c1.7 0 3-1.3 3-3l-1-9.3c.6-.9 1-2 1-3.2C17 4 14.5 2 12 2z" />
            </svg>
          )}

          <h3 className="text-base font-semibold leading-snug text-[#1a1a1a] sm:text-lg">
            {title}
          </h3>
        </div>

        <hr className="my-3 border-t border-[#696767] opacity-25 sm:my-4" />

        <p className="mb-4 line-clamp-3 text-sm leading-relaxed text-[#6B7280] sm:mb-5">
          {description}
        </p>

        <a
          href={href ?? "#"}
          className="mt-auto mx-auto flex w-full items-center gap-1.5 rounded-md bg-[#F47A20] px-5 py-2.5 text-xs font-semibold uppercase tracking-wide text-white transition-colors duration-300 hover:bg-[#e46713] sm:w-fit sm:px-8 sm:text-sm"
        >
          Know More
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M9 18l6-6-6-6" />
          </svg>
        </a>
      </div>
    </div>
  );
}