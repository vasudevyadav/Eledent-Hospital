"use client";

import Image from "next/image";

type Props = {
  /** Wave/texture image that appears behind the WHITE card (bottom area) */
  bgImageSrc?: string;
};

export default function ServiceAppointment({
  bgImageSrc = "/about-us/vission.png",
}: Props) {
  return (
    <section className="w-full bg-white py-12 md:py-16 lg:!pt-36 !pt-10 hidden lg:block">
      <div className="mx-auto max-w-7xl px-4">
        {/* ===== DESKTOP ===== */}
        <div className="relative hidden lg:block">
          {/* LEFT ORANGE BLOCK (behind the white card) */}
          <div className="absolute left-0 top-1/2 z-0 h-[250px] w-[240px] -translate-y-1/2 rounded-[22px] bg-[#F47A20]" />

          {/* RIGHT ORANGE MAIN CARD */}
          <div className="relative z-0 ml-[250px] overflow-hidden rounded-[22px] bg-[#F47A20] shadow-[0_18px_45px_rgba(0,0,0,0.10)]">
            <div className="flex min-h-[250px] items-center px-16 py-10">
              <div className="w-full lg:pl-[320px]">
                <p className="text-[12px] font-semibold text-white/85">
                  Lorem Ipsum
                </p>

                <h2 className="mt-3 max-w-2xl text-[30px] font-extrabold leading-[1.15] text-white">
                  Lorem ipsum dolor sit amet,
                  <br />
                  consectetur adipiscing elit,
                </h2>

                <button className="mt-7 inline-flex items-center justify-center rounded-full bg-[#1F2937] px-8 py-2.5 text-sm font-semibold text-white shadow-[0_10px_24px_rgba(0,0,0,0.25)] transition hover:bg-[#111827]">
                  Book Appointment
                </button>
              </div>
            </div>
          </div>

          {/* WHITE CARD (overlapping) */}
          <div className="absolute left-[160px] top-1/2 z-10 w-[360px] -translate-y-1/2">
            <div className="relative overflow-hidden rounded-xl bg-white shadow-[0_18px_45px_rgba(0,0,0,0.18)]">
              {/* bottom wave image (as in screenshot) */}
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[110px]">
                <Image
                  src={bgImageSrc}
                  alt=""
                  fill
                  className="object-cover object-bottom opacity-90"
                  priority
                />
                {/* soft fade so top stays clean white */}
                <div className="absolute inset-0 bg-gradient-to-t from-white/0 via-white/40 to-white" />
              </div>

              <div className="relative p-7">
                <h3 className="text-sm lg:text-2xl font-extrabold leading-[1.15] text-[#1F2937]">
                  Is There Anything I Can
                  <br />
                  Do For You?
                </h3>

                <p className="mt-3 lg:text-sm text-xs leading-relaxed text-[#6B7280]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Quis ipsum
                </p>

                <div className="my-6 h-[1px] w-full bg-[#282727]" />

                <div className=" space-y-4">

                  <div className="flex items-center gap-3 mb-6">
                    <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-[#111827]">
                      <svg
                        viewBox="0 0 24 24"
                        className="h-[21px] w-[21px]"
                        fill="none"
                        stroke="#F47A20"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                      </svg>
                    </div>

                    <div className="min-w-0">
                      <p className="text-xs text-gray-400 mb-1">
                        For Emergency Call
                      </p>
                      <a
                        href="tel:+917799639994"
                        className="text-sm lg:text-lg font-extrabold text-[#1F2937] hover:text-[#F47A20]"
                      >
                        (+91) 7799639994
                      </a>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-center gap-3 mb-2">
                    <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-[#111827]">
                      <svg
                        viewBox="0 0 24 24"
                        className="h-[21px] w-[21px]"
                        fill="none"
                        stroke="#F47A20"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <rect x="3" y="5" width="18" height="14" rx="2" />
                        <path d="m3 7 9 6 9-6" />
                      </svg>
                    </div>

                    <div className="min-w-0">
                      <p className="text-xs text-gray-400 mb-1">Send Us Email</p>
                      <a
                        href="mailto:contact@eledenthospital.com"
                        className="text-sm lg:text-base font-extrabold text-[#1F2937] hover:text-[#F47A20]"
                      >
                        contact@eledenthospital.com
                      </a>
                    </div>

                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ===== MOBILE ===== */}
        <div className="lg:hidden">
          <div className="space-y-6">
            {/* Orange card */}
            <div className="overflow-hidden rounded-[22px] bg-[#F47A20] shadow-[0_18px_45px_rgba(0,0,0,0.10)]">
              <div className="px-6 py-10">
                <p className="text-[12px] font-semibold text-white/85">
                  Lorem Ipsum
                </p>

                <h2 className="mt-3 text-[26px] font-extrabold leading-[1.15] text-white">
                  Lorem ipsum dolor sit amet,
                  <br />
                  consectetur adipiscing elit,
                </h2>

                <button className="mt-6 inline-flex items-center justify-center rounded-full bg-[#1F2937] px-7 py-2.5 text-[12px] font-semibold text-white shadow-[0_10px_24px_rgba(0,0,0,0.25)] transition hover:bg-[#111827]">
                  Book Appointment
                </button>
              </div>
            </div>

            {/* White card */}
            <div className="relative overflow-hidden rounded-[22px] bg-white shadow-[0_18px_45px_rgba(0,0,0,0.15)]">
              <div className="absolute inset-x-0 bottom-0 h-[105px]">
                <Image
                  src={bgImageSrc}
                  alt=""
                  fill
                  className="object-cover object-bottom opacity-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white/0 via-white/40 to-white" />
              </div>

              <div className="relative p-6">
                <h3 className="text-[17px] font-extrabold leading-[1.15] text-[#1F2937]">
                  Is There Anything I Can
                  <br />
                  Do For You?
                </h3>

                <p className="mt-3 text-[12px] leading-relaxed text-[#6B7280]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Quis ipsum
                </p>

                <div className="mt-5 h-[1px] w-full bg-[#E5E7EB]" />

                <div className="mt-5 space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#111827]">
                      <svg
                        viewBox="0 0 24 24"
                        className="h-[18px] w-[18px]"
                        fill="none"
                        stroke="#F47A20"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-[11px] text-[#9CA3AF]">
                        For Emergency Call
                      </p>
                      <a
                        href="tel:+917799639994"
                        className="text-[14px] font-extrabold text-[#1F2937]"
                      >
                        (+91) 7799639994
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#111827]">
                      <svg
                        viewBox="0 0 24 24"
                        className="h-[18px] w-[18px]"
                        fill="none"
                        stroke="#F47A20"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <rect x="3" y="5" width="18" height="14" rx="2" />
                        <path d="m3 7 9 6 9-6" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-[11px] text-[#9CA3AF]">Send Us Email</p>
                      <a
                        href="mailto:contact@eledenthospital.com"
                        className="text-[13px] font-semibold text-[#1F2937]"
                      >
                        contact@eledenthospital.com
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* small orange block hint (optional, matches the left block vibe) */}
            <div className="h-2 w-full rounded-full bg-[#F47A20]/20" />
          </div>
        </div>
      </div>
    </section>
  );
}
