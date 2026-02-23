"use client";

import Image from "next/image";
import type { JSX } from "react";

/* -----------------------------
  1) DATA TYPES
----------------------------- */
type ImplantCard = {
  imageSrc: string;
  imageAlt: string;
  title: string;
  description: string;
  highlighted?: boolean;
  href?: string;
};

type PlanSectionData = {
  type: "plan";
  backgroundImageSrc?: string;
  headingLine1: string;
  headingLine2: string;
  cards: ImplantCard[];
};

type PageSection = PlanSectionData;

/* -----------------------------
  2) PAGE DATA (ARRAY)
----------------------------- */
const IMPLANT_CARDS: ImplantCard[] = [
  {
    imageSrc: "/services/premium-dental.png",
    imageAlt: "Single tooth dental implant illustration",
    title: "Single Tooth Dental Implants",
    description:
      "Ideal for replacing a single missing tooth, this implant uses one crown and post for a simple, effective solution.",
    highlighted: true,
    href: "#single-tooth",
  },
  {
    imageSrc: "/services/premium-dental.png",
    imageAlt: "Single tooth dental implant illustration",
    title: "Single Tooth Dental Implants",
    description:
      "Ideal for replacing a single missing tooth, this implant uses one crown and post for a simple, effective solution.",
    highlighted: true,
    href: "#single-tooth",
  },
  {
    imageSrc: "/services/premium-dental.png",
    imageAlt: "Single tooth dental implant illustration",
    title: "Single Tooth Dental Implants",
    description:
      "Ideal for replacing a single missing tooth, this implant uses one crown and post for a simple, effective solution.",
    highlighted: true,
    href: "#single-tooth",
  },
];

const SECTIONS: PageSection[] = [
  {
    type: "plan",
    backgroundImageSrc: "/services/services-plan-bg.png",
    headingLine1: "Choose a Dental Implant plan",
    headingLine2: "that best suits you",
    cards: IMPLANT_CARDS,
  },
];

/* -----------------------------
  3) MAIN WRAPPER
----------------------------- */
export default function DentalImplantsSections(): JSX.Element {
  return (
    <>
      {SECTIONS.map((section, index) => (
        <DentalImplantsPlan key={`sec-${index}`} {...section} />
      ))}
    </>
  );
}

/* -----------------------------
  4) PLAN SECTION
----------------------------- */
function DentalImplantsPlan({
  backgroundImageSrc = "/services/services-plan-bg.png",
  headingLine1,
  headingLine2,
  cards,
}: PlanSectionData): JSX.Element {
  return (
    <section className="w-full bg-white">
      <div className="mx-auto max-w-7xl px-4 pb-14">
        <div className="relative overflow-hidden rounded-2xl shadow-[0_16px_40px_-18px_rgba(15,23,42,0.45)]">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${backgroundImageSrc})` }}
          />

          <div className="absolute inset-0 bg-black/60" />

          <div className="relative z-10 px-6 py-10 md:px-10 md:py-12">
            <div className="mb-9 text-center">
              <p className="text-xl font-extrabold leading-tight md:text-4xl">
                <span className="text-[#F47A20]">{headingLine1}</span>
              </p>
              <p className="mt-1 text-xl font-semibold text-white/95 md:text-4xl">
                {headingLine2}
              </p>
            </div>

            <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-3">
              {cards.map((card, idx) => (
                <PlanCard key={`plan-card-${idx}`} {...card} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* -----------------------------
  5) PLAN CARD
----------------------------- */
function PlanCard({
  imageSrc,
  imageAlt,
  title,
  description,
  highlighted,
  href,
}: ImplantCard): JSX.Element {
  return (
    <div
      className={[
        "group relative overflow-hidden rounded-[14px] bg-white",
        "shadow-[0_12px_26px_-18px_rgba(15,23,42,0.55)]",
        "transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_32px_-18px_rgba(15,23,42,0.5)]",
        highlighted
          ? "ring-2 ring-[#F47A20]"
          : "ring-1 ring-black/10 hover:ring-[#F47A20]",
      ].join(" ")}
    >
      <div className="relative h-[220px] w-full bg-white lg:h-[250px] overflow-hidden">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          className="object-cover object-center w-full transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      <div
        className={[
          "absolute left-0 right-0 lg:top-[49%] top-[45%] z-50 mx-auto w-48 line-clamp-2",
          "rounded-lg px-3 py-2.5 text-center text-sm font-extrabold tracking-wide",
          "text-white transition-colors duration-300",
          highlighted ? "bg-[#484847]" : "bg-[#484847]",
          "group-hover:bg-[#e46713]",
        ].join(" ")}
      >
        {title}
      </div>

      <div className="px-5 lg:pt-11 pt-12 pb-5">
        <p className="h-[75px] text-center text-[15px] leading-relaxed text-[#6B7280] line-clamp-3">
          {description}
        </p>

        <hr className="my-4 border-t border-[#696767] opacity-40" />

        <div className="flex justify-center">
          <a
            href={href ?? "#"}
            className="inline-flex items-center gap-2 text-base font-semibold uppercase tracking-wide text-[#F47A20]"
          >
            Know More
            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#F47A20] text-white transition-transform duration-300 group-hover:translate-x-0.5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="12"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M9 18l6-6-6-6" />
              </svg>
            </span>
          </a>
        </div>
      </div>
    </div>
  );
}
