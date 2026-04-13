"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import type { JSX } from "react";
import type { ServicesFaqSection } from "@/data/serviceDetails";

type Props = {
  data?: ServicesFaqSection;
};

export default function ServicesFaq({ data }: Props): JSX.Element | null {
  const faqItems = useMemo(() => data?.items ?? [], [data]);

  const getInitialOpenId = () =>
    data?.defaultOpenId ?? faqItems[0]?.id ?? null;

  const [openId, setOpenId] = useState<number | null>(getInitialOpenId());

  useEffect(() => {
    setOpenId(getInitialOpenId());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data, faqItems.length]);

  if (!data) return null;

  const toggleFaq = (id: number) =>
    setOpenId((prev) => (prev === id ? null : id));

  return (
    <section className="relative w-full overflow-hidden bg-white py-6 lg:py-16">
      <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#f47200]" />

      <div className="absolute inset-0 z-0 hidden lg:block">
        <div className="relative h-full w-[58%] xl:w-[54%]">
          <Image
            src={data.backgroundImageSrc ?? "/about-us/faq-image.png"}
            alt={data.backgroundImageAlt ?? "FAQ Background"}
            fill
               unoptimized
            priority
            className="object-cover object-left"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-white/10 via-white/25 to-white" />
        </div>
      </div>

      <div className="relative z-10 mx-auto max-w-[1120px] px-4 sm:px-6 lg:px-6 mb-6">
        <div className="grid grid-cols-1 items-start gap-10 sm:gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
          {/* LEFT CONTENT */}
          <div className="max-w-[520px]">
            <p className="text-sm font-semibold tracking-[0.2em] text-[#f47200] sm:text-base sm:tracking-[0.24em] lg:text-xl lg:tracking-[0.28em]">
            FAQ
            </p>

            <h2 className="mt-3 whitespace-pre-line text-2xl font-bold leading-tight text-[#111827] sm:mt-4 sm:text-3xl lg:text-4xl">
              {data.heading}
            </h2>

            <p className="mt-3 max-w-[430px] text-sm leading-6 text-[#6B7280] sm:text-[15px]">
              {data.description}
            </p>
          </div>

          {/* RIGHT FAQ LIST */}
          <div className="space-y-4 sm:space-y-5">
            {faqItems.map((faq) => {
              const isOpen = openId === faq.id;
              const panelId = `faq-panel-${faq.id}`;
              const buttonId = `faq-button-${faq.id}`;

              return (
                <div
                  key={faq.id}
                  className="overflow-hidden rounded-xl bg-white shadow-[0_10px_22px_rgba(0,0,0,0.08)] sm:rounded-[12px] sm:shadow-[0_14px_30px_rgba(0,0,0,0.10)]"
                >
                  {/* HEADER */}
                  <button
                    id={buttonId}
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => toggleFaq(faq.id)}
                    className={`flex w-full items-start justify-between gap-3 px-4 py-4 text-left text-sm font-semibold transition-colors sm:items-center sm:px-6 sm:py-[18px]
                    ${isOpen
                        ? "bg-[#f47200] text-white"
                        : "bg-white text-[#374151]"
                      }`}
                  >
                    <span className="flex min-w-0 items-start gap-2">
                      <span
                        className={`shrink-0 ${isOpen ? "text-white" : "text-[#9CA3AF]"
                          }`}
                      >
                        {faq.id}.
                      </span>
                      <span
                        className={`break-words leading-5 ${isOpen ? "text-white" : "text-[#374151]"
                          }`}
                      >
                        {faq.question}
                      </span>
                    </span>

                    {/* +/- square */}
                    <span
                      className={`grid h-8 w-8 shrink-0 place-items-center rounded-md text-base leading-none sm:h-9 sm:w-9 sm:rounded-[6px]
                      ${isOpen
                          ? "bg-[#111827] text-white"
                          : "bg-[#f47200] text-white"
                        }`}
                    >
                      {isOpen ? "−" : "+"}
                    </span>
                  </button>

                  {/* BODY */}
                  {isOpen && (
                    <div
                      id={panelId}
                      role="region"
                      aria-labelledby={buttonId}
                      className="bg-[#E5E7EB] px-4 py-4 text-xs leading-5 text-[#6B7280] sm:px-6 sm:py-5 sm:text-[13px] sm:leading-6"
                    >
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}