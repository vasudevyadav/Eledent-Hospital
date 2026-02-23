"use client";

import Image from "next/image";
import type { JSX } from "react";

/* -----------------------------
  1) DATA TYPES
----------------------------- */
type WhatSectionData = {
  type: "what";
  doctorImageSrc?: string;
  badgeText: string;
  headingAccent: string; // "Exactly Are Dental Implants?"
  paragraph1: string;
  listTitle: string;
  points: string[];
  paragraph2: string;
};

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
  headingLine1: string; // orange line
  headingLine2: string; // white line
  cards: ImplantCard[];
};

type PageSection = WhatSectionData | PlanSectionData;

/* -----------------------------
  2) PAGE DATA (ARRAY)
----------------------------- */
const IMPLANT_CARDS: ImplantCard[] = [
  {
    imageSrc: "/implants/single-tooth.png",
    imageAlt: "Single tooth dental implant illustration",
    title: "Single tooth dental implants",
    description:
      "Ideal for replacing a single missing tooth, this implant uses one crown and post for a simple, effective solution.",
    highlighted: true,
    href: "#single-tooth",
  },
  {
    imageSrc: "/implants/all-on-4-6.png",
    imageAlt: "All on 4 & 6 dental implants illustration",
    title: "All on 4 & 6 dental implants",
    description:
      "For individuals with a few missing teeth, All-on-2 or All-on-6 dental implants are often recommended.",
    href: "#all-on-4-6",
  },
  {
    imageSrc: "/implants/full-mouth.png",
    imageAlt: "Full-mouth dental implants illustration",
    title: "Full-mouth dental implants",
    description:
      "When all teeth are missing, full-mouth dental implants offer a complete restoration solution.",
    href: "#full-mouth",
  },
];

const SECTIONS: PageSection[] = [
  {
    type: "what",
    doctorImageSrc: "/services/services-what.png",
    badgeText: "What",
    headingAccent: "Exactly Are Dental Implants?",
    paragraph1:
      "Dental implants are small titanium or zirconia posts that act like artificial tooth roots. They are placed in the jaw bone and, after healing, support a fixed crown, bridge, or full arch of teeth.",
    listTitle: "A dental implant has three main parts:",
    points: [
      "Implant: the screw placed in the bone.",
      "Abutment: the connector between implant and crown.",
      "Crown or prosthesis: the visible tooth or teeth you use for chewing.",
    ],
    paragraph2:
      "Dental implants restore natural chewing, speech, and a smile with a durable, comfortable, and natural-looking replacement. Whether you choose our Kondapur or Kukatpally centre, you receive the same advanced planning, precision care, and follow-up, with uniform CBCT-based protocols and strict sterilization standards across all Eledent branches.",
  },
  {
    type: "plan",
    backgroundImageSrc: "/services/services-plan-bg.png",
    headingLine1: "Choose a Dental Implant plan",
    headingLine2: "that best suits you",
    cards: IMPLANT_CARDS,
  },
];

/* -----------------------------
  3) MAIN WRAPPER (MAP SECTIONS)
----------------------------- */
export default function DentalImplantsSections(): JSX.Element {
  return (
    <>
      {SECTIONS.map((section, index) => {
        if (section.type === "what") {
          return <DentalImplantsWhat key={`sec-${index}`} {...section} />;
        }

        return <DentalImplantsPlan key={`sec-${index}`} {...section} />;
      })}
    </>
  );
}

/* -----------------------------
  4) WHAT SECTION
----------------------------- */
function DentalImplantsWhat({
  doctorImageSrc = "/services/services-what.png",
  badgeText,
  headingAccent,
  paragraph1,
  listTitle,
  points,
  paragraph2,
}: WhatSectionData): JSX.Element {
  return (
    <section className="w-full bg-white py-10 md:py-14 mb-10">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid items-center gap-10 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <span className="inline-flex items-center bg-[#F47A20] px-4 py-1.5 text-base font-semibold leading-none text-white">
              {badgeText}
            </span>

            <h2 className="mt-4 text-[28px] font-extrabold leading-[1.15] text-[#F47A20] md:text-[34px]">
              {headingAccent}
            </h2>

            <p className="mt-4 max-w-2xl text-sm leading-relaxed text-[#6B7280] md:text-base">
              {paragraph1}
            </p>

            <div className="mt-5">
              <p className="text-base font-semibold text-[#111827]">
                {listTitle}
              </p>

              <ol className="mt-2 list-decimal space-y-1 pl-5 text-base leading-relaxed text-[#6B7280]">
                {points.map((pt, i) => (
                  <li key={`what-point-${i}`}>{pt}</li>
                ))}
              </ol>
            </div>

            <p className="mt-5 max-w-2xl text-sm leading-relaxed text-[#6B7280] md:text-base">
              {paragraph2}
            </p>
          </div>

          <div className="lg:col-span-5">
            <div className="relative mx-auto flex w-full max-w-[420px] items-center justify-center">
              <div className="relative">
                <div className="absolute inset-0 rounded-full" />
              </div>

              <div className="absolute left-1/2 top-1/2 w-[250px] -translate-x-1/2 -translate-y-1/2 md:w-[400px]">
                <Image
                  src={doctorImageSrc}
                  alt="Dental implants illustration"
                  width={900}
                  height={900}
                  className="h-auto w-full object-contain"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* -----------------------------
  5) PLAN SECTION
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
        <div className="relative overflow-hidden rounded-[22px] shadow-[0_16px_40px_-18px_rgba(15,23,42,0.45)]">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${backgroundImageSrc})` }}
          />

          <div className="absolute inset-0 bg-black/60" />

          <div className="relative z-10 px-6 py-10 md:px-10 md:py-12">
            <div className="mb-9 text-center">
              <p className="text-xl font-extrabold leading-tight md:text-3xl">
                <span className="text-[#F47A20]">{headingLine1}</span>
              </p>
              <p className="mt-1 text-xl font-semibold text-white/95 md:text-3xl">
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
  6) PLAN CARD
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
        "relative overflow-hidden rounded-[14px] bg-white",
        "shadow-[0_12px_26px_-18px_rgba(15,23,42,0.55)]",
        highlighted ? "ring-2 ring-[#F47A20]" : "ring-1 ring-black/10",
      ].join(" ")}
    >
      <div className="relative h-[140px] bg-white">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          sizes="(max-width: 768px) 90vw, 33vw"
          className="object-contain p-4"
        />
      </div>

      <div
        className={[
          "px-4 py-3 text-center text-[12px] font-extrabold uppercase tracking-wide",
          highlighted ? "bg-[#F47A20] text-white" : "bg-[#F3F4F6] text-[#111827]",
        ].join(" ")}
      >
        {title}
      </div>

      <div className="px-5 py-5">
        <p className="text-center text-[12.5px] leading-relaxed text-[#6B7280]">
          {description}
        </p>

        <div className="mt-5 flex justify-center">
          <a
            href={href ?? "#"}
            className="inline-flex items-center gap-2 text-[11px] font-extrabold uppercase tracking-wide text-[#F47A20]"
          >
            Know More
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#F47A20] text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
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

      {highlighted ? (
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute inset-x-0 bottom-0 h-[54px] bg-[#F47A20]/15" />
        </div>
      ) : null}
    </div>
  );
}
