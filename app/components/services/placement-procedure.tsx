"use client";

import Image from "next/image";
import { useState } from "react";

type Props = {
  youtubeVideoId?: string;
  clinicImageSrc?: string;
};

export default function DentalImplantPlacement({
  youtubeVideoId = "dQw4w9WgXcQ",
  clinicImageSrc = "/services/premium-dental.png",
}: Props) {
  const [videoPlaying, setVideoPlaying] = useState(false);

  const features = [
    "Inhouse CBCT Lab, CAD CAM",
    "Integrated Implantology Guided Surgery",
    "Zero Pain Treatment",
    "Same Day Crowns",
    "Single Visit Dentistry",
    "3D Imaging",
  ];

  return (
    <>

      <section className="w-full bg-white py-10 md:py-6">
        <div className="mx-auto max-w-6xl px-4">
          <div className="rounded-[18px] bg-[#EEF2F2] p-5 md:p-7">
            <div className="grid gap-8 md:grid-cols-[360px_1fr] md:gap-10">

              {/* Left image */}
              <div className="overflow-hidden rounded-[14px] bg-[#D9DEDF] min-h-[260px]">
                <div className="relative w-full h-full">
                  <Image
                    src={clinicImageSrc}
                    alt="Dentist showing X-ray to patient at Eledent Dental Hospital"
                    fill
                       unoptimized
                    priority
                    className="object-cover object-center"
                  />
                </div>
              </div>

              {/* Right content */}
              <div className="pt-1 md:pt-3">
                <h2 className="text-xl font-bold leading-[1.25] text-[#F47A20] md:text-3xl">
                  Premium Dental Implants
                  <br />
                  in Hyderabad for a Confident Smile
                </h2>
                <p className="mt-3 max-w-2xl text-xs leading-[1.6] text-gray-700 md:text-base">
                  Want a picture perfect smile? Get the best dental implants in
                  Hyderabad personalized for natural looking results at Eledent
                  Dental Hospitals.
                </p>
                <ul className="mt-6">
                  {features.map((feature, idx) => (
                    <li
                      key={feature}
                      className={[
                        "flex items-start gap-3 py-3 text-sm font-medium text-[#484847] w-96 md:text-base",
                        "border-b-2 border-[#D3D8D8]",
                        idx === features.length - 1 ? "border-b-0" : "",
                      ].join(" ")}
                    >
                      <Image
                        src="/services/place-icon.png"
                        alt=""
                        width={18}
                        height={18}
                           unoptimized
                        className="mt-[2px] flex-shrink-0"
                        priority
                      />
                      <span className="leading-[1.35]">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

            </div>
          </div>
        </div>
      </section>


      <section className="w-full bg-white py-10 md:py-14">
        <div className="mx-auto max-w-6xl px-4">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-10 items-start">

            <div>

              <h2 className="text-xl font-bold text-gray-900 md:text-3xl leading-tight">
                Dental Implant Placement Procedure
              </h2>

              <p className="mt-2 text-sm text-gray-800  leading-relaxed md:text-lg">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna
              </p>


              <div className="mt-5 space-y-3 text-[13px] text-gray-600 leading-[1.7] md:text-sm">
                <p>
                  The implant process at Eledent starts with a consultation, clinical
                  exams, and X-rays or CBCT scans to plan precise implant placement.
                </p>
                <p>
                  A titanium implant is then placed in the jaw to act as an artificial
                  tooth root and allowed to fuse with the bone over a few months. Once
                  healed, a custom crown or prosthesis is fitted for a natural look and
                  comfortable bite.
                </p>
                <p>
                  Eledent offers accessible implant care across Kondapur, Kukatpally,
                  Manikonda, and Banjara Hills.
                </p>
              </div>

              <button className="mt-7 inline-flex items-center gap-2 rounded-sm bg-[#F47A20] px-6 py-1.5 text-[13px] font-semibold uppercase tracking-wide text-white ">
                Know More

                <div className="w-7 h-7 bg-white rounded-full flex items-center justify-center">

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="w-5 h-5 text-primary"
                  >
                    <path
                      fillRule="evenodd"
                      d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z"
                      clipRule="evenodd"
                    />
                  </svg>


                </div>


              </button>
            </div>

            <div className="relative w-full text-center ">
              <iframe
                width="380"
                height="420"
                src="https://www.youtube.com/embed/jvLg2GrJpMM?si=aLnd5WK_ifderI-O&controls=0"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
                className="mx-auto rounded-xl"
              ></iframe>
            </div>

          </div>
        </div>
      </section>

    </>
  );
}