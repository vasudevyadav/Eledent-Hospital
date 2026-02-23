"use client";

import Image from "next/image";

type Props = {
  /** Right-side 3D doctor image (PNG/WebP with transparent bg works best) */
  doctorImageSrc?: string;
};

export default function DentalImplantsSection({
  doctorImageSrc = "/services/services-what.png",
}: Props) {
  return (
    <section className="w-full bg-white py-10 md:py-14 mb-10">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid items-center gap-10 lg:grid-cols-12">
          {/* LEFT CONTENT */}
          <div className="lg:col-span-7">
            <span className="inline-flex items-center bg-[#F47A20] px-4 py-1.5 text-base font-semibold leading-none text-white">
              What
            </span>

            <h2 className="mt-4 text-[28px] font-extrabold leading-[1.15] text-[#F47A20] md:text-[34px]">
              Exactly Are Dental Implants?
            </h2>

            <p className="mt-4 max-w-2xl text-sm leading-relaxed text-[#6B7280] md:text-base">
              Dental implants are small titanium or zirconia posts that act like
              artificial tooth roots. They are placed in the jaw bone and, after
              healing, support a fixed crown, bridge, or full arch of teeth.
            </p>

            <div className="mt-5">
              <p className="text-base font-semibold text-[#111827]">
                A dental implant has three main parts:
              </p>

              <ol className="mt-2 list-decimal space-y-1 pl-5 text-base leading-relaxed text-[#6B7280]">
                <li>Implant: the screw placed in the bone.</li>
                <li>Abutment: the connector between implant and crown.</li>
                <li>
                  Crown or prosthesis: the visible tooth or teeth you use for
                  chewing.
                </li>
              </ol>
            </div>

            <p className="mt-5 max-w-2xl text-sm leading-relaxed text-[#6B7280] md:text-base">
              Dental implants restore natural chewing, speech, and a smile with
              a durable, comfortable, and natural-looking replacement. Whether
              you choose our Kondapur or Kukatpally centre, you receive the same
              advanced planning, precision care, and follow-up, with uniform
              CBCT-based protocols and strict sterilization standards across all
              Eledent branches.
            </p>
          </div>

          <div className="lg:col-span-5">
            <div className="relative mx-auto flex w-full max-w-[420px] items-center justify-center">
             
              <div className="relative">
                <div className="absolute inset-0 rounded-full" />
              </div>

              <div className="absolute left-1/2 top-1/2 w-[250px] -translate-x-1/2 -translate-y-1/2 md:w-[400px]">
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
