"use client";

import Image from "next/image";
import Link from "next/link";
import type { JSX } from "react";
import type { PlanSection, PlanCardItem } from "@/data/serviceDetails";

type Props = {
  data?: PlanSection;
};

export default function DentalImplantsSections({ data }: Props): JSX.Element | null {
  if (!data) return null;

  return <DentalImplantsPlan {...data} />;
}

function DentalImplantsPlan({
  backgroundImageSrc = "/services/services-plan-bg.png",
  headingLine1,
  headingLine2,
  cards,
}: PlanSection): JSX.Element {
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
              <p className="text-xl font-bold leading-tight lg:text-4xl">
                <span className="text-[#F47A20]">{headingLine1}</span>
              </p>
              <p className="mt-1 text-lg font-semibold text-white/95 lg:text-3xl">
                {headingLine2}
              </p>
            </div>

            <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-3">
              {cards.map((card, idx) => (
                <PlanCard key={card.id ?? `plan-card-${idx}`} {...card} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function PlanCard({
  imageSrc,
  imageAlt,
  title,
  description,
  highlighted,
  href,
}: PlanCardItem): JSX.Element {
  return (
    <div
      className={[
        "group relative overflow-hidden rounded-[14px] bg-white",
        "transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0px_13px_2px_rgba(241,123,58,0.85)]",

      ].join(" ")}
    >
      <div className="relative h-[220px] w-full overflow-hidden bg-white lg:h-[250px]">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="w-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      <div
        className={[
          "absolute left-0 right-0 top-[45%] z-50 mx-auto w-48 line-clamp-2 lg:top-[49%]",
          "rounded-lg px-3 py-2.5 text-center text-sm font-extrabold tracking-wide",
          "bg-[#484847] text-white transition-colors duration-300 group-hover:bg-[#e46713]",
        ].join(" ")}
      >
        {title}
      </div>

      <div className="px-5 pb-5 pt-12 lg:pt-11">
        <p className="line-clamp-3 h-[75px] text-center text-[15px] leading-relaxed text-[#6B7280]">
          {description}
        </p>

        <hr className="my-4 border-t border-[#696767] opacity-40" />

        <div className="flex justify-center">
          <Link
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
          </Link>
        </div>
      </div>
    </div>
  );
}