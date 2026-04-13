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

const STATS: StatItem[] = [
  {
    id: "patients",
    icon: Users,
    value: "8,200+",
    line1: "Patients",
    line2: "Recovered",
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
    line1: "Satisfaction",
    line2: "Rating",
    variant: "neutral",
  },
];

type StatCardProps = {
  icon: LucideIcon;
  value: string;
  line1: string;
  line2: string;
  variant: StatVariant;
};

const StatCard: FC<StatCardProps> = ({ icon: Icon, value, line1, line2, variant }) => {
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
        <Icon className={["w-5 h-5", isPrimary ? "" : "text-orange-500"].join(" ")} />
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

const AboutDetails: FC = () => {
  return (
    <section className="mt-24 mx-4 sm:mx-8 lg:mx-24">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
        {/* LEFT */}
        <div className="relative">
          <div className="relative overflow-hidden rounded-[28px] shadow-2xl bg-white">
            <Image
              src="/about-us/about-2.png"
              alt="About Eledent"
              width={900}
              height={900}
              priority
                 unoptimized
              className="w-full h-[530px] object-cover"
            />

            {/* QUALITY DENTAL CARE BOX */}
            <div className="absolute left-6 bottom-6 right-6 sm:right-auto sm:w-[360px]">
              <div className="relative overflow-hidden rounded-2xl shadow-xl px-5 py-10 flex gap-4 items-center">
                {/* Background image for the box */}
                <Image
                  src="/about-us/about-2bg.png"
                  alt="Background"
                  fill
                     unoptimized
                  priority
                  className="object-cover"
                />

                {/* Overlay for readability */}
                <div className="absolute inset-0 bg-white/75 backdrop-blur-[2px]" />

                {/* Content */}
                <div className="relative z-10 flex gap-4 items-center w-full">
                  <div className="w-14 h-14 flex items-center justify-center shrink-0">
                    <Image
                      src="/about-us/about-3.png"
                      alt="Icon"
                      width={112}
                      height={112}
                         unoptimized
                      priority
                      className="w-14 h-14 object-contain"
                    />
                  </div>

                  <div className="min-w-0">
                    <p className="text-xl font-semibold text-orange-600 leading-tight">
                      Quality Dental care
                    </p>
                    <p className="text-[15px] text-black mt-1 leading-snug">
                      Facilisis nulla lacus at ultrices us praesent fringilla scelerisque.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* /QUALITY DENTAL CARE BOX */}
          </div>
        </div>

        {/* RIGHT */}
        <div>
          <div className="inline-flex items-center bg-orange-500 text-white px-3 py-1 text-base font-semibold mb-5">
            About us
          </div>

          <h2 className="text-3xl lg:text-[40px] font-bold text-orange-600 leading-tight">
            Who &amp; Where we are
          </h2>

          <p className="text-gray-800 text-lg font-semibold mt-2">
            World-Renowned Dentistry Right At Your Neighborhood!
          </p>

          <p className="text-gray-500 text-base leading-relaxed mt-4 max-w-xl">
            Located in the core of Kondapur and Kukatpally – Hyderabad, Eledent Dental Hospital is the one-stop
            solution for all your dental needs. Our primary goal is always to offer you comprehensive dental
            treatment in relaxed and stylish surroundings. You will notice the difference the moment you enter
            the clinic.
          </p>

          <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
            {STATS.map((item) => (
              <StatCard
                key={item.id}
                icon={item.icon}
                value={item.value}
                line1={item.line1}
                line2={item.line2}
                variant={item.variant}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutDetails;
