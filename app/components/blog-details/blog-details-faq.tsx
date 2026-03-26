"use client";

import Image from "next/image";
import { useState } from "react";
import type { JSX } from "react";

type FaqItem = {
  id: number;
  question: string;
  answer: string;
};

type BlogDetailsFaqProps = {
  faqSection?: {
    tag?: string;
    heading?: string;
    description?: string;
    backgroundImage?: string;
    items?: FaqItem[];
  };
};

export default function BlogDetailsFaq({
  faqSection,
}: BlogDetailsFaqProps): JSX.Element | null {
  const items = faqSection?.items ?? [];

  const [openId, setOpenId] = useState<number | null>(items[0]?.id ?? null);

  const toggleFaq = (id: number) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  const backgroundImage =
    faqSection?.backgroundImage && faqSection.backgroundImage.trim() !== ""
      ? faqSection.backgroundImage
      : "/about-us/faq-image.png";

  const tag = faqSection?.tag?.trim() || "FAQ";
  const heading = faqSection?.heading?.trim() || "Need Answer? We’re Here to Help";
  const description =
    faqSection?.description?.trim() || "Find answers to common questions here.";

  return (
    <section className="relative w-full overflow-hidden bg-white py-0 pb-16 lg:py-24 lg:pb-24">
      <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#f47200]" />

      <div className="absolute inset-0 z-0 hidden lg:block">
        <div className="relative h-full w-[58%]">
          <Image
            src={backgroundImage}
            alt="FAQ Background"
            fill
            priority
            className="object-cover"
          />
        </div>
      </div>

      <div className="relative z-10 mx-auto max-w-[1120px] px-6">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="max-w-[520px]">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#f47200] lg:text-[11px]">
              {tag}
            </p>

            <h2 className="mt-4 text-xl font-extrabold leading-[1.12] text-[#111827] lg:text-[38px]">
              {heading}
            </h2>

            <p className="mt-2 max-w-[430px] text-[13px] leading-6 text-[#6B7280] lg:mt-6">
              {description}
            </p>
          </div>

          <div className="space-y-5">
            {items.length > 0 ? (
              items.map((faq, index) => {
                const faqId = faq.id ?? index + 1;
                const isOpen = openId === faqId;

                return (
                  <div
                    key={faqId}
                    className="overflow-hidden rounded-[12px] bg-white shadow-[0_14px_30px_rgba(0,0,0,0.10)]"
                  >
                    <button
                      type="button"
                      onClick={() => toggleFaq(faqId)}
                      className={`flex w-full items-center justify-between px-6 py-[18px] text-left text-[13px] font-semibold transition ${
                        isOpen
                          ? "bg-[#f47200] text-white"
                          : "bg-white text-[#374151]"
                      }`}
                    >
                      <span className="flex items-center gap-2">
                        <span className={isOpen ? "text-white" : "text-[#9CA3AF]"}>
                          {faqId}.
                        </span>
                        <span className={isOpen ? "text-white" : "text-[#374151]"}>
                          {faq.question}
                        </span>
                      </span>

                      <span
                        className={`grid h-7 w-7 place-items-center rounded-[6px] text-[14px] leading-none ${
                          isOpen
                            ? "bg-[#111827] text-white"
                            : "bg-[#f47200] text-white"
                        }`}
                      >
                        {isOpen ? "−" : "+"}
                      </span>
                    </button>

                    {isOpen && (
                      <div className="bg-[#E5E7EB] px-6 py-5 text-[11px] leading-5 text-[#6B7280]">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                );
              })
            ) : (
              <div className="overflow-hidden rounded-[12px] bg-white px-6 py-5 text-[13px] leading-5 text-[#6B7280] shadow-[0_14px_30px_rgba(0,0,0,0.10)]">
                No FAQs available.
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}