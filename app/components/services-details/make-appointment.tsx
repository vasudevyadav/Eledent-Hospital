"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";
import type { TopRatedSection, TopRatedStatItem } from "@/data/serviceDetails";

/** Subtle hex background as inline SVG (data-uri) */
const HEX_BG = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='180' height='120' viewBox='0 0 180 120'%3E%3Cg fill='none' stroke='%23e5e7eb' stroke-width='1'%3E%3Cpath opacity='0.55' d='M30 15l15-9 15 9v18l-15 9-15-9V15z'/%3E%3Cpath opacity='0.35' d='M90 15l15-9 15 9v18l-15 9-15-9V15z'/%3E%3Cpath opacity='0.25' d='M150 15l15-9 15 9v18l-15 9-15-9V15z'/%3E%3Cpath opacity='0.25' d='M60 60l15-9 15 9v18l-15 9-15-9V60z'/%3E%3Cpath opacity='0.18' d='M120 60l15-9 15 9v18l-15 9-15-9V60z'/%3E%3C/g%3E%3C/svg%3E")`;

type Props = {
  data?: Partial<TopRatedSection> | null;
};

interface StatIconCircleProps {
  iconSrc: string;
  iconAlt: string;
}

function StatIconCircle({ iconSrc, iconAlt }: StatIconCircleProps) {
  return (
    <div className="relative inline-flex items-center justify-center">
      <div className="relative mb-2 flex h-20 w-20 items-center justify-center bg-white lg:h-28 lg:w-28">
        <div
          className="absolute inset-[6px] rounded-full"
          style={{
            backgroundImage: "url('/services/top-services-icon.svg')",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "contain",
          }}
        />

        <div className="relative z-10 flex items-center justify-center">
          <Image
            src={iconSrc}
            alt={iconAlt}
            width={42}
            height={42}
            className="h-6 w-6 object-contain lg:h-10 lg:w-10"
          />
        </div>
      </div>
    </div>
  );
}

type NumericLike = number | string;

interface AnimatedCountProps {
  value: NumericLike;
  decimals?: NumericLike;
  suffix?: string;
  duration?: number;
}

function toNumberSafe(input: NumericLike, fallback = 0) {
  if (typeof input === "number") return Number.isFinite(input) ? input : fallback;
  const n = Number(String(input).replace(/,/g, "").trim());
  return Number.isFinite(n) ? n : fallback;
}

function toIntSafe(input: NumericLike, fallback = 0) {
  const n = Math.trunc(toNumberSafe(input, fallback));
  return Number.isFinite(n) ? n : fallback;
}

function AnimatedCount({
  value,
  decimals = 0,
  suffix = "",
  duration = 1400,
}: AnimatedCountProps) {
  const safeValue = toNumberSafe(value, 0);
  const safeDecimals = Math.max(0, toIntSafe(decimals, 0));

  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLSpanElement | null>(null);
  const rafRef = useRef<number | null>(null);
  const hasAnimatedRef = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry?.isIntersecting && !hasAnimatedRef.current) {
          setStarted(true);
          hasAnimatedRef.current = true;
          observer.disconnect();
        }
      },
      { threshold: 0.35 }
    );

    observer.observe(el);

    return () => {
      observer.disconnect();
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  useEffect(() => {
    if (!started) return;

    let startTime: number | null = null;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);

      const eased = 1 - Math.pow(1 - progress, 3);
      const nextValue = safeValue * eased;

      setCount(nextValue);

      if (progress < 1) {
        rafRef.current = requestAnimationFrame(animate);
      }
    };

    rafRef.current = requestAnimationFrame(animate);

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [started, safeValue, duration]);

  const formatted = useMemo(
    () => `${count.toFixed(safeDecimals)}${suffix}`,
    [count, safeDecimals, suffix]
  );

  const finalFormatted = `${safeValue.toFixed(safeDecimals)}${suffix}`;

  return (
    <span ref={ref} aria-label={finalFormatted}>
      {started
        ? formatted
        : `0${safeDecimals > 0 ? "." + "0".repeat(safeDecimals) : ""}${suffix}`}
    </span>
  );
}

/** Static fallback data */
const FALLBACK_DATA: TopRatedSection = {
  heroTitle: "Top Rated Dental Care",
  heroDescription:
    "We provide advanced dental treatments with experienced specialists, patient-focused care, and modern technology for better outcomes.",
  ctaText: "Book Appointment",
  ctaHref: "/contact-us",
  doctorImageSrc: "/services/top-rated-doctor.png",
  doctorImageAlt: "Top rated dentist",
  statsBgImage: "/services/stats-card-bg.png",
  stats: [
    {
      id: "1",
      iconSrc: "https://reinventmedia.in/eledenthospitals/wp-content/uploads/2026/02/rating-icon.png",
      iconAlt: "Rating icon",
      value: 5,
      decimals: 0,
      suffix: "/5",
      label: "Rating on Average by Patients",
    },
    {
      id: "2",
      iconSrc: "https://reinventmedia.in/eledenthospitals/wp-content/uploads/2026/02/year-icon.png",
      iconAlt: "Award icon",
      value: 5,
      decimals: 0,
      suffix: "+",
      label: "Awards and Recognitions",
    },
    {
      id: "3",
      iconSrc: "https://reinventmedia.in/eledenthospitals/wp-content/uploads/2026/02/count-1.png",
      iconAlt: "Experience icon",
      value: 100,
      decimals: 0,
      suffix: "+",
      label: "Years of Collective Experience",
    },
    {
      id: "4",
      iconSrc: "https://reinventmedia.in/eledenthospitals/wp-content/uploads/2026/02/count-3.png",
      iconAlt: "Implant icon",
      value: 27000,
      decimals: 0,
      suffix: "+",
      label: "Implants",
    },
  ],
};

/** Merge API data with static fallback */
function getMergedData(data?: Partial<TopRatedSection> | null): TopRatedSection {
  const incomingStats = Array.isArray(data?.stats) ? data?.stats : [];

  const mergedStats: TopRatedStatItem[] =
    incomingStats.length > 0
      ? incomingStats.map((item, index) => ({
        ...FALLBACK_DATA.stats[index],
        ...item,
      }))
      : FALLBACK_DATA.stats;

  return {
    ...FALLBACK_DATA,
    ...data,
    doctorImageSrc: data?.doctorImageSrc || FALLBACK_DATA.doctorImageSrc,
    doctorImageAlt: data?.doctorImageAlt || FALLBACK_DATA.doctorImageAlt,
    statsBgImage: data?.statsBgImage || FALLBACK_DATA.statsBgImage,
    stats: mergedStats,
  };
}

export default function CommanTopRated({ data }: Props) {
  const sectionData = getMergedData(data);

  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="relative w-full overflow-hidden bg-white">
        <div
          className="absolute left-0 top-0 h-[140px] w-full opacity-60 sm:h-[160px]"
          style={{
            backgroundImage: HEX_BG,
            backgroundRepeat: "repeat",
            backgroundPosition: "center",
          }}
        />

        <div className="relative pt-[0px] sm:pt-[90px]">
          <div className="relative rounded-2xl bg-[#f47920]">
            <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
              <div className="relative min-h-[330px] lg:min-h-[380px]">
                <div className="relative z-10 max-w-xl pb-8 pr-0 pt-8 sm:pr-[34%] sm:pt-10 lg:pb-40 lg:pr-0 lg:pt-14">
                  <h2 className="mb-4 text-2xl font-semibold leading-tight text-white sm:mb-6 lg:text-4xl">
                    {sectionData.heroTitle}
                  </h2>

                  <p className="mb-5 text-sm leading-relaxed text-white/95 sm:mb-6 sm:text-base">
                    {sectionData.heroDescription}
                  </p>

                  <div>
                    {sectionData.ctaHref ? (
                      <Link
                        href={sectionData.ctaHref}
                        className="inline-block whitespace-nowrap rounded-md bg-black px-5 py-2.5 text-sm font-medium tracking-wide text-white shadow-sm transition-colors hover:bg-neutral-900 sm:px-8 sm:py-3 sm:text-base"
                      >
                        {sectionData.ctaText}
                      </Link>
                    ) : (
                      <button
                        type="button"
                        className="whitespace-nowrap rounded-md bg-black px-5 py-2.5 text-sm font-medium tracking-wide text-white shadow-sm transition-colors hover:bg-neutral-900 sm:px-8 sm:py-3 sm:text-base"
                      >
                        {sectionData.ctaText}
                      </button>
                    )}
                  </div>
                </div>

                {/* Desktop doctor */}
                <div className="absolute right-0 bottom-0 top-[-70px] hidden w-[46%] lg:block lg:w-[48%]">
                  <div className="relative h-full w-full">
                    <Image
                      src={sectionData.doctorImageSrc}
                      alt={sectionData.doctorImageAlt}
                      fill
                      priority
                      className="object-contain object-bottom"
                      style={{ filter: "drop-shadow(0 12px 18px rgba(0,0,0,0.12))" }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="relative -mt-[110px] pb-10 lg:-mt-[70px] lg:pb-8">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-16">
            <div className="relative overflow-hidden rounded-2xl bg-white shadow-xl lg:rounded-3xl">
              <div
                className="absolute inset-0 opacity-90"
                style={{
                  backgroundImage: `url('${sectionData.statsBgImage}'), ${HEX_BG}`,
                  backgroundRepeat: "no-repeat, repeat",
                  backgroundPosition: "center, center",
                  backgroundSize: "cover, auto",
                }}
              />

              <div className="relative grid grid-cols-2 gap-4 px-3 pb-4 pt-5 sm:gap-6 sm:px-6 lg:grid-cols-4 lg:gap-8 lg:px-10 lg:py-6 lg:pt-8">
                {sectionData.stats.map((stat, index) => (
                  <div
                    key={stat.id ?? index}
                    className="flex flex-col items-center text-center"
                  >
                    <StatIconCircle
                      iconSrc={stat.iconSrc}
                      iconAlt={stat.iconAlt}
                    />

                    <div className="mb-3 mt-2 text-lg font-bold leading-none text-[#f47920] sm:mt-3 sm:text-2xl lg:text-[28px]">
                      <AnimatedCount
                        value={stat.value ?? 0}
                        decimals={stat.decimals ?? 0}
                        suffix={stat.suffix ?? ""}
                      />
                    </div>

                    <div className="mb-4 mt-1 max-w-[130px] text-xs font-medium leading-tight text-gray-600 sm:max-w-[180px] lg:text-base">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}