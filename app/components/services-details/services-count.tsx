"use client";

import Image from "next/image";
import type { FC } from "react";
import { useEffect, useMemo, useRef, useState } from "react";

type CountStatItem = {
  id: string;
  icon: string;
  value: number;
  suffix?: string;
  label1: string;
  label2?: string;
};

type CountSectionData = {
  bgImage: string;
  stats: CountStatItem[];
};

type Props = {
  data?: CountSectionData;
};

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

const StatPill: FC<{ stat: CountStatItem; start: boolean }> = ({ stat, start }) => {
  const count = useCountUp(start, stat.value);

  const formatted = useMemo(
    () => `${count}${stat.suffix ?? ""}`,
    [count, stat.suffix]
  );

  return (
    <div className="flex flex-col items-center text-center">
      <div className="relative mb-4 h-20 w-20 rounded-full border border-dashed border-blue-100 flex items-center justify-center">
        <Image
          src={stat.icon}
          alt={stat.label1}
          width={34}
          height={34}
          className="h-10 w-10 object-contain"
          priority
        />
      </div>

      <p className="text-[#F37021] text-2xl font-extrabold leading-none">
        {formatted}
      </p>

      <p className="mt-2 text-sm leading-tight text-gray-700">
        {stat.label1}
        {stat.label2 && <br />}
        {stat.label2}
      </p>
    </div>
  );
};

const StatsBar: FC<{ data: CountSectionData }> = ({ data }) => {
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
      <div className="relative overflow-hidden rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.12)]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url('${data.bgImage}')`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        />

        <div className="absolute inset-0 bg-white/10" />

        <div className="relative px-8 py-8 sm:px-16">
          <div className="grid grid-cols-2 items-center gap-12 sm:grid-cols-4">
            {data.stats.map((item) => (
              <StatPill key={item.id} stat={item} start={start} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const ServicesCount: FC<Props> = ({ data }) => {
  if (!data || !data.stats?.length) return null;

  return (
    <section className="mx-auto lg:my-16 my-10 max-w-6xl px-4 sm:px-8">
      <StatsBar data={data} />
    </section>
  );
};

export default ServicesCount;