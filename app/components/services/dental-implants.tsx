"use client";

import Image from "next/image";

type Props = {
  doctorImageSrc?: string;
};

export default function DentalImplantsSection({
  doctorImageSrc = "/services-main/services-main-about.png",
}: Props) {
  return (
    <section className="w-full bg-white py-10 md:py-14 mb-10">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid items-center gap-10 lg:grid-cols-12">

          <div className="lg:col-span-6">

            <h2 className="mt-4 text-[28px] font-semibold leading-[1.15] text-[#F47A20] md:text-[34px]">
              Comprehensive
              Dental Treatments for a Radiant, Healthy Smile
            </h2>

            <p className="mt-4 max-w-2xl max-w-lg text-sm text-[#6B7280] md:text-base">
              At National Dental Care, we strive to provide personalized dental solutions tailored to your needs. Let us help you
              achieve optimal oral health and a radiant smile!
            </p>


          </div>

          <div className="lg:col-span-6">
            <div className="relative mx-auto flex w-full max-w-[420px] items-center justify-center">

              <div className="relative">
                <div className="absolute inset-0 rounded-full" />
              </div>

              <div className="absolute left-1/2 top-1/2 w-[250px] -translate-x-1/2 -translate-y-1/2 md:w-[500px]">
                <Image
                  src={doctorImageSrc}
                  alt="Dental implants illustration"
                  width={900}
                  height={900}
                  className="h-auto w-full object-contain"
                  priority
                />
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
