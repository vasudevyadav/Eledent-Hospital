"use client";

import Image from "next/image";
import type { FC } from "react";
import { useEffect, useMemo, useRef, useState } from "react";

type Stat = {
  id: string;
  icon: string;
  value: number;
  suffix?: string;
  label1: string;
  label2?: string;
};

const STATS: Stat[] = [
  { id: "cases", icon: "/services/count-1.png", value: 30000, suffix: "+", label1: "Cases" },
  { id: "rct", icon: "/services/count-2.png", value: 27000, suffix: "+", label1: "Root Canals" },
  { id: "implants", icon: "/services/count-3.png", value: 22000, suffix: "+", label1: "Implants" },
  { id: "smile", icon: "/services/count-4.png", value: 5000, suffix: "+", label1: "Digital Smile", label2: "Designing" },
];

const STATS_BG_IMAGE = "/services/service-count-bg.png";


function useCountUp(start: boolean, end: number, duration = 1200) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!start) return;

    let raf = 0;
    const startTime = performance.now();

    const animate = (now: number) => {
      const progress = Math.min((now - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.round(end * eased));
      if (progress < 1) raf = requestAnimationFrame(animate);
    };

    raf = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(raf);
  }, [start, end, duration]);

  return value;
}

const StatPill: FC<{ stat: Stat; start: boolean }> = ({ stat, start }) => {
  const count = useCountUp(start, stat.value);

  const formatted = useMemo(
    () => `${count}${stat.suffix ?? ""}`,
    [count, stat.suffix]
  );

  return (
    <div className="flex flex-col items-center text-center">

      <div className="relative mb-4 w-20 h-20 rounded-full border border-dashed border-blue-100 flex items-center justify-center">
        <Image
          src={stat.icon}
          alt={stat.label1}
          width={34}
          height={34}
          className="object-contain w-10 h-10"
          priority
        />
      </div>

      <p className="text-[#F37021] font-extrabold text-2xl leading-none">
        {formatted}
      </p>

      <p className="text-gray-700 text-sm mt-2 leading-tight">
        {stat.label1}
        {stat.label2 && <br />}
        {stat.label2}
      </p>
    </div>
  );
};

const StatsBar: FC = () => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [start, setStart] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          setStart(true);
          observer.disconnect();
        }
      },
      { threshold: 0.4 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="w-full">
      <div className="relative rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.12)] overflow-hidden">

        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url('${STATS_BG_IMAGE}')`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        />

        <div className="absolute inset-0 bg-white/10" />

        <div className="relative px-8 sm:px-16 py-8">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-12 items-center">
            {STATS.map((item) => (
              <StatPill key={item.id} stat={item} start={start} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const ServicesCount: FC = () => {
  return (
    <section className="max-w-6xl mx-auto my-16 px-4 sm:px-8">
      <StatsBar />
    </section>
  );
};

export default ServicesCount;
