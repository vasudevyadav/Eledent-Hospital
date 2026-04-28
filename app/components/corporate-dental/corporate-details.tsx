"use client";

import Image from "next/image";
import type { FC } from "react";
import type { LucideIcon } from "lucide-react";
import { Users, Clock3, HeartPulse } from "lucide-react";


type StatVariant = "primary" | "neutral";

type StatItem = {
  id: string;
  icon: LucideIcon;
  value: string;
  line1: string;
  line2: string;
  variant: StatVariant;
};

type OfferItem = {
  id: string;
  title: string;
  description: string;
};


const STATS: StatItem[] = [
  {
    id: "patients",
    icon: Users,
    value: "30000+",
    line1: "Smiles",
    line2: "Restored",
    variant: "primary",
  },
  {
    id: "waiting",
    icon: Clock3,
    value: "15 Min",
    line1: "Average Waiting",
    line2: "Time",
    variant: "neutral",
  },
  {
    id: "rating",
    icon: HeartPulse,
    value: "4.9/5",
    line1: "Average",
    line2: "Rating",
    variant: "neutral",
  },
];

const OFFER_ITEMS: OfferItem[] = [
  {
    id: "camps",
    title: "Free Dental Camps At Your Premises",
    description:
      "We conduct free dental camps at your premises twice a year to support early dental screening, oral health awareness, and basic guidance for employees.",
  },
  {
    id: "discount",
    title: "15% Off on Further Treatments",
    description:
      "Employees under the tie-up receive 15% off on further dental treatments at Eledent Dental Hospital.",
  },
];


const StatCard: FC<Omit<StatItem, "id">> = ({ icon: Icon, value, line1, line2, variant }) => {
  const isPrimary = variant === "primary";

  return (
    <div
      className={[
        "rounded-xl p-5",
        isPrimary ? "bg-orange-500 text-white shadow-lg" : "bg-gray-100 text-gray-800",
      ].join(" ")}
    >
      <div
        className={[
          "w-10 h-10 rounded-lg flex items-center justify-center mb-4",
          isPrimary ? "bg-white/20" : "bg-white shadow-sm",
        ].join(" ")}
      >
        <Icon className={["w-5 h-5", isPrimary ? "text-white" : "text-orange-500"].join(" ")} />
      </div>

      <p className="text-2xl font-bold leading-none">{value}</p>
      <p className={["text-xs mt-2", isPrimary ? "opacity-95" : "text-gray-600"].join(" ")}>
        {line1}
      </p>
      <p className={["text-xs font-semibold mt-1", isPrimary ? "" : "text-gray-600"].join(" ")}>
        {line2}
      </p>
    </div>
  );
};



const PracticalDentalBenefits: FC = () => {
  return (
    <section className="mt-8 lg:mt-14 mx-6 sm:mx-8 lg:mx-24">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">

        {/* LEFT — text */}
        <div>
          <h2 className="text-xl lg:text-[36px] font-bold text-orange-600 leading-tight">
            Practical Dental Benefits For Your Employees
          </h2>

          <p className="text-gray-500 lg:text-base text-sm leading-relaxed mt-5 max-w-xl">
            Eledent Dental Hospital offers corporate dental tie-ups in Hyderabad for organisations
            that want to support employee oral health. As a{" "}
            <a
              href="#"
              className="text-orange-500 underline underline-offset-2 hover:text-orange-600 transition-colors"
            >
              NABH-accredited dental hospital
            </a>
            , we help companies offer preventive dental screening, specialist dental care access,
            and treatment benefits that employees can actually use.
          </p>
        </div>

        {/* RIGHT — image with NABH badge */}
        <div className="relative">

          <div className="relative z-10 overflow-hidden rounded-2xl lg:rounded-[28px]">
            <Image
              src="/corporate-about.webp"
              alt="Corporate Dental Benefits — professional smiling"
              width={1500}
              height={1500}
              priority
              className="w-full h-[360px] lg:h-[500px] object-cover object-top"
            />


          </div>
        </div>
      </div>
    </section>
  );
};


const WhatWeOffer: FC = () => {
  return (
    <section className="mt-6 lg:mt-14 mx-6 sm:mx-8 lg:mx-24">
      <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-12 gap-6 items-center max-w-7xl mx-auto">

        {/* LEFT — image */}
        <div className="overflow-hidden rounded-2xl lg:rounded-[28px] shadow-xl order-2 lg:order-1">
          <Image
            src="/corporate-about-2.webp"
            alt="Corporate handshake — dental tie-up"
            width={800}
            height={600}
            priority
            className="w-full h-[380px] lg:h-[630px] object-cover"
          />
        </div>

        <div className="order-1 lg:order-2">
          <h2 className="text-xl lg:text-[36px] font-bold text-orange-600 leading-tight">
            What We Offer Under Corporate Tie-Ups in Hyderabad
          </h2>

          <p className="text-gray-500 lg:text-base text-sm leading-relaxed mt-4 max-w-xl">
            Our corporate dental tie-up program is designed to support both companies and employees
            with clear, usable benefits. With access to multi-speciality dental care at Eledent
            Dental Hospitals, employees can consult dental specialists for dental implants, root
            canal treatment, braces and aligners, smile makeovers, preventive dental care and
            restorative dental treatments.
          </p>

          {/* Offer cards grid — matches image: 2 columns with a divider */}
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-0 border-t border-gray-600 lg:pt-4 overflow-hidden">
            {OFFER_ITEMS.map((item, idx) => (
              <div
                key={item.id}
                className={[
                  "p-3",
                  idx === 0 ? "sm:border-r border-b sm:border-b-0 border-gray-600" : "",
                ].join(" ")}
              >
                <h3 className="text-base lg:text-lg font-bold text-[#e56f23] leading-snug">
                  {item.title}
                </h3>
                <p className="text-gray-700 text-xs lg:text-base leading-relaxed mt-3">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};


const CorporatePage: FC = () => {
  return (
    <>
      <PracticalDentalBenefits />
      <WhatWeOffer />
    </>
  );
};

export default CorporatePage;