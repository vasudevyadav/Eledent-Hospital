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
  faqSection: {
    tag: string;
    heading: string;
    description: string;
    backgroundImage: string;
    items: FaqItem[];
  };
};

export default function BlogDetailsFaq({
  faqSection,
}: BlogDetailsFaqProps): JSX.Element {
  const [openId, setOpenId] = useState<number | null>(
    faqSection?.items?.[0]?.id ?? null
  );

  const toggleFaq = (id: number) => setOpenId((p) => (p === id ? null : id));

  const backgroundImage =
    faqSection?.backgroundImage && faqSection.backgroundImage.trim() !== ""
      ? faqSection.backgroundImage
      : "/about-us/faq-image.png";

  return (
    <section className="relative w-full overflow-hidden bg-white lg:py-24 py-0 lg:pb-24 pb-16">
      <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#f47200]" />

      <div className="absolute inset-0 z-0">
        <div className="relative h-full w-[58%]">
          <Image
            src={backgroundImage}
            alt="FAQ Background"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0" />
        </div>
      </div>

      <div className="relative z-10 mx-auto max-w-[1120px] px-6">
        <div className="grid grid-cols-1 items-center lg:gap-16 gap-10 lg:grid-cols-2">
          <div className="max-w-[520px]">
            <p className="lg:text-[11px] text-sm font-semibold tracking-[0.28em] text-[#f47200] uppercase">
              {faqSection?.tag || "FAQ"}
            </p>

            <h2 className="mt-4 lg:text-[38px] text-xl font-extrabold leading-[1.12] text-[#111827]">
              {faqSection?.heading || "Need Answer? We’re Here to Help"}
            </h2>

            <p className="lg:mt-6 mt-2 max-w-[430px] text-[13px] leading-6 text-[#6B7280]">
              {faqSection?.description ||
                "Find answers to common questions here."}
            </p>
          </div>

          <div className="space-y-5">
            {faqSection?.items?.map((faq) => {
              const isOpen = openId === faq.id;

              return (
                <div
                  key={faq.id}
                  className="overflow-hidden rounded-[12px] bg-white shadow-[0_14px_30px_rgba(0,0,0,0.10)]"
                >
                  <button
                    type="button"
                    onClick={() => toggleFaq(faq.id)}
                    className={`flex w-full items-center justify-between px-6 py-[18px] text-left text-[13px] font-semibold transition ${isOpen
                      ? "bg-[#f47200] text-white"
                      : "bg-white text-[#374151]"
                      }`}
                  >
                    <span className="flex items-center gap-2">
                      <span
                        className={`${isOpen ? "text-white" : "text-[#9CA3AF]"
                          }`}
                      >
                        {faq.id}.
                      </span>
                      <span
                        className={`${isOpen ? "text-white" : "text-[#374151]"
                          }`}
                      >
                        {faq.question}
                      </span>
                    </span>

                    <span
                      className={`grid h-7 w-7 place-items-center rounded-[6px] text-[14px] leading-none ${isOpen
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
            })}
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 1023px) {
          section :global(div[style]) {
            display: none;
          }
        }
      `}</style>
    </section>
  );
}