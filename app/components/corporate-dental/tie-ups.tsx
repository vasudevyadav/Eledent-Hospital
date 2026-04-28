"use client";

import Image from "next/image";
import type { JSX } from "react";

function RecognisedTieUps(): JSX.Element {
  return (
    <section className="px-4 sm:px-8 lg:px-12 py-10 lg:py-10">
      <div className="max-w-[1240px] mx-auto">
        <div className="relative overflow-hidden rounded-2xl lg:rounded-[22px]">
          <Image
            src="/recognised.png"
            alt="Recognised Corporate Tie-Ups Background"
            width={1500}
            height={1500}
            className="object-cover lg:h-[290px] h-[410px]"
          />
          <div className="absolute top-5 z-10 px-6 sm:px-10 lg:px-16 pt-4 lg:pt-6 text-center max-w-7xl mx-auto">
            <h2 className="text-xl lg:text-4xl font-semibold text-[#f47200] leading-tight">
              Our Recognised Corporate Tie-Ups
            </h2>

            <div className="w-58 h-[2px] bg-white mx-auto my-8 " />

            <p className="text-white/90 text-sm lg:text-lg leading-relaxed">
              Eledent Dental Hospital&apos;s corporate tie-up network includes{" "}
              <span className="font-bold text-white">Toothlens</span>, reimbursement support for{" "}
              <span className="font-bold text-white">Telangana Government employees</span>, and
              recognition for{" "}
              <span className="font-bold text-white">Telangana Electricity Board employees</span>.
              These associations strengthen our corporate dental care program by extending practical
              treatment support to employees through trusted institutional connections.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}


function HowItWorks(): JSX.Element {
  return (
    <section className="w-full lg:pt-12 lg:pb-20 pb-0">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        <div className=" sm:-mt-4 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-end mb-8">
          <div className="relative w-full">
            <div className="relative mx-auto w-full max-w-xl aspect-[16/11]">
              <Image
                src="/how-corporeta.png"
                alt="Journey at Eledent International Digital Dentistry"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-contain"
              />
            </div>
          </div>

          <div className="w-full">
            <p className="text-xl lg:text-4xl leading-light text-primary font-semibold mb-8">
              How Corporate Tie-Ups in
              Hyderabad Works?
            </p>

            <div className="relative">
              <div className="absolute left-[15px] top-2 bottom-2 w-[2px] bg-[#f97316]" />

              <div className="space-y-6 sm:space-y-7">
                {[
                  "You can simply contact us on +91 99854 39499 via WhatsApp/call or fill in the enquiry form.",
                  "Our team will contact you and arrange an e-consultation at your convenience.",
                  "You can scan and send us copies of your X-ray if you already have them. After we evaluate the scan images, we will suggest the overall treatment plan and cost.",
                  "You can select the date and confirm your flight for further treatment in India.",
                ].map((step, index) => (
                  <div key={index} className="relative flex items-start gap-4">
                    <div className="relative z-10 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border-2 border-[#f97316] bg-white text-sm font-semibold text-gray-900">
                      {index + 1}
                    </div>
                    <p className="text-sm sm:text-base leading-relaxed text-gray-700">
                      {step}
                    </p>
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


export default function CorporateTieUpSections(): JSX.Element {
  return (
    <>
      <RecognisedTieUps />
      <HowItWorks />
    </>
  );
}