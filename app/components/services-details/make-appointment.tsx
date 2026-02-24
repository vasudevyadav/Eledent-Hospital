"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";
import type { TopRatedSection, TopRatedStatItem } from "@/data/serviceDetails";

/** Subtle hex background as inline SVG (data-uri) */
const HEX_BG = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='180' height='120' viewBox='0 0 180 120'%3E%3Cg fill='none' stroke='%23e5e7eb' stroke-width='1'%3E%3Cpath opacity='0.55' d='M30 15l15-9 15 9v18l-15 9-15-9V15z'/%3E%3Cpath opacity='0.35' d='M90 15l15-9 15 9v18l-15 9-15-9V15z'/%3E%3Cpath opacity='0.25' d='M150 15l15-9 15 9v18l-15 9-15-9V15z'/%3E%3Cpath opacity='0.25' d='M60 60l15-9 15 9v18l-15 9-15-9V60z'/%3E%3Cpath opacity='0.18' d='M120 60l15-9 15 9v18l-15 9-15-9V60z'/%3E%3C/g%3E%3C/svg%3E")`;

type Props = {
  data?: TopRatedSection;
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

interface AnimatedCountProps {
  value: number;
  decimals?: number;
  suffix?: string;
  duration?: number;
}

function AnimatedCount({
  value,
  decimals = 0,
  suffix = "",
  duration = 1400,
}: AnimatedCountProps) {
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
      const nextValue = value * eased;

      setCount(nextValue);

      if (progress < 1) {
        rafRef.current = requestAnimationFrame(animate);
      }
    };

    rafRef.current = requestAnimationFrame(animate);

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [started, value, duration]);

  const formatted = useMemo(() => `${count.toFixed(decimals)}${suffix}`, [count, decimals, suffix]);
  const finalFormatted = `${value.toFixed(decimals)}${suffix}`;

  return (
    <span ref={ref} aria-label={finalFormatted}>
      {started ? formatted : `0${decimals > 0 ? "." + "0".repeat(decimals) : ""}${suffix}`}
    </span>
  );
}

export default function CommanTopRated({ data }: Props) {
  if (!data) return null;

  const stats: TopRatedStatItem[] = data.stats ?? [];

  return (
    <section className=" max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

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
          <div className="relative bg-[#f47920] rounded-2xl">
            <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
              <div className="relative min-h-[390px] sm:min-h-[400px] lg:min-h-[380px]">
                <div className="relative z-10 max-w-xl pb-8 pr-0 pt-8 sm:pr-[34%] sm:pt-10 lg:pb-40 lg:pr-0 lg:pt-14">
                  <h2 className="mb-4 text-lg font-semibold leading-tight text-white sm:mb-6 sm:text-2xl lg:text-4xl">
                    {data.heroTitle}
                  </h2>

                  <p className="mb-5 text-xs leading-relaxed text-white/95 sm:mb-6 sm:text-base">
                    {data.heroDescription}
                  </p>

                  <div>
                    {data.ctaHref ? (
                      <Link
                        href={data.ctaHref}
                        className="inline-block whitespace-nowrap rounded-md bg-black px-5 py-2.5 text-sm font-medium tracking-wide text-white shadow-sm transition-colors hover:bg-neutral-900 sm:px-8 sm:py-3 sm:text-base"
                      >
                        {data.ctaText}
                      </Link>
                    ) : (
                      <button
                        type="button"
                        className="whitespace-nowrap rounded-md bg-black px-5 py-2.5 text-sm font-medium tracking-wide text-white shadow-sm transition-colors hover:bg-neutral-900 sm:px-8 sm:py-3 sm:text-base"
                      >
                        {data.ctaText}
                      </button>
                    )}
                  </div>
                </div>

                {/* Desktop doctor */}
                <div className="absolute right-0 bottom-0 top-[-70px] hidden w-[46%] lg:block lg:w-[48%]">
                  <div className="relative h-full w-full">
                    <Image
                      src={data.doctorImageSrc}
                      alt={data.doctorImageAlt}
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
                  backgroundImage: `url('${data.statsBgImage}'), ${HEX_BG}`,
                  backgroundRepeat: "no-repeat, repeat",
                  backgroundPosition: "center, center",
                  backgroundSize: "cover, auto",
                }}
              />

              <div className="relative grid grid-cols-2 gap-4 px-3 pb-4 pt-5 sm:gap-6 sm:px-6 lg:grid-cols-4 lg:gap-8 lg:px-10 lg:py-6 lg:pt-8">
                {stats.map((stat, index) => (
                  <div key={stat.id ?? index} className="flex flex-col items-center text-center">
                    <StatIconCircle iconSrc={stat.iconSrc} iconAlt={stat.iconAlt} />

                    <div className="mt-2 text-lg font-bold leading-none text-[#f47920] sm:mt-3 mb-3 sm:text-2xl lg:text-[28px] ">
                      <AnimatedCount
                        value={stat.value}
                        decimals={stat.decimals}
                        suffix={stat.suffix}
                      />
                    </div>

                    <div className="mt-1 mb-4 max-w-[130px] text-[11px] font-medium leading-tight text-gray-600 sm:max-w-[180px] sm:text-sm lg:text-base">
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