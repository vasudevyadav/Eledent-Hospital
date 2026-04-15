"use client";

import Image from "next/image";
import type { FC } from "react";

type Bullet = { id: string; text: string };

type FacilityBlock = {
  id: string;
  title?: string;
  subtitle?: string;
  bullets?: Bullet[];
  image?: {
    src: string;
    alt: string;
    width: number;
    height: number;
    className: string;
    wrapperClassName: string;
  };
  /** layout for the row */
  layout: "text-image" | "image-text" | "text-image-bottom";
};

const FACILITY_BLOCKS: FacilityBlock[] = [
  {
    id: "row-1",
    title: "Best World Class Facilities",
    subtitle:
      " We help you get the best facilities to make sure you feel at ease throughout your visit. We assist you with: ",
    bullets: [
      { id: "t1", text: "World class ambience with a comfortable and friendly environment." },
      { id: "t2", text: "Ample reception area with skilled staff who proudly represent Eledent and are available to assist and welcome you." },
      {
        id: "t3",
        text: " In-house pharmacy, so you can get your medicines in one place instead of searching across multiple medical stores. ",
      },
      {
        id: "t4",
        text: " Well-built and hygienic cafeteria with fresh food, so you do not have to miss your meals during treatment. ",
      },
      {
        id: "t5",
        text: "Recreation support including a pool table, VR games, and a recreation room to help make your waiting time more relaxed and engaging.",
      },
    ],
    image: {
      src: "/facilities/Best-World-Class-Facilities.png",
      alt: "Facilities",
      width: 1200,
      height: 600,
      className: "w-full  object-cover lg:h-[600px]",
      wrapperClassName: "relative overflow-hidden lg:rounded-[26px] rounded-lg bg-gray-100 shadow-xl",
    },
    layout: "text-image",
  },
  {
    id: "row-2",
    bullets: [
      {
        id: "r1",
        text: "Well-facilitated consultation rooms designed for smooth and comfortable patient interactions.",
      },
      { id: "r2", text: "Dress-up rooms and massage chairs to help you freshen up and relax after treatment." },
      {
        id: "r3",
        text: "Air purifiers in every room to support a fresher indoor environment.",
      },
      {
        id: "r4",
        text: "Aromatherapy support to help patients feel more refreshed and relaxed during their visit.",
      },
      {
        id: "r5",
        text: "Dental conference room that allows doctors to discuss cases and share clinical knowledge to improve patient care.",
      },
      {
        id: "r6",
        text: "Dental photo studio setup to capture before and after moments for smile makeover and aesthetic treatments.",
      },
      {
        id: "r7",
        text: "Latest technology and infrastructure to make diagnosis and treatment easier, including a CBCT room for digital dental X-rays within seconds.",
      },
      {
        id: "r8",
        text: "Six operatory chambers to reduce waiting time and support smoother treatment flow.",
      },
    ],
    image: {
      src: "/facilities/Best-World-Class-Facilities2.jpg",
      alt: "Consultation room",
      width: 1400,
      height: 700,
      className: "w-full lg:h-[450px]  object-cover",
      wrapperClassName: "relative overflow-hidden lg:rounded-[26px] rounded-lg bg-gray-100 shadow-xl",
    },
    layout: "image-text",
  },
  {
    id: "row-3",

    bullets: [
      {
        id: "b1",
        text: "Microscopic endodontics for precise root canal treatment, conscious sedation support, and facilities for blood diagnostics.",
      },
      { id: "b2", text: "Wheelchair accessibility and lift access to make movement within the hospital easier and more comfortable for all patients." },
      {
        id: "b3",
        text: "Huge waiting area with executive lounges and clean-up spaces for patient convenience.",
      },
      {
        id: "b4",
        text: "24/7 power backup with international standard sterilisers to ensure uninterrupted treatment and safety, along with uninterrupted Wi-Fi services.",
      },
      { id: "b5", text: "High standards of safety, hygiene, and patient support across all treatment and waiting areas." },
      { id: "b6", text: " Valet parking services, so parking is never a concern during your visit. " },

    ],

    image: {
      src: "/facilities/Best-World-Class-Facilities3.jpg",
      alt: "Massage chair",
      width: 900,
      height: 900,
      className: "w-full object-contain drop-shadow-xl lg:h-[600px]",
      wrapperClassName: "relative overflow-hidden rounded-[26px] bg-white",
    },
    layout: "text-image-bottom",
  },
];

const DotBullets: FC<{ items: Bullet[]; className?: string }> = ({ items, className }) => {
  return (
    <div className={["relative pl-4", className || ""].join(" ")}>

      <ul className="space-y-3">
        {items.map((it) => (
          <li key={it.id} className="relative text-[15px] leading-6 text-gray-600">
            <span className="absolute -left-[14px] top-[7px] h-[10px] w-[10px] rounded-full bg-orange-500 ring-2 ring-white z-10" />
            {it.text}
          </li>
        ))}
      </ul>
    </div>
  );
};

const FacilitiesAbouts: FC = () => {
  return (
    <section className="mx-4 sm:mx-8 lg:mx-24 lg:py-4 py-0 mb-10">
      <div className="max-w-7xl mx-auto">
        {FACILITY_BLOCKS.map((block) => {
          const hasTitle = !!block.title;
          const hasSubtitle = !!block.subtitle;
          const hasBullets = (block.bullets?.length || 0) > 0;
          const img = block.image;

          const rowBase = "grid grid-cols-1 lg:grid-cols-2 lg:gap-10 gap-6 items-center";
          const rowGap = block.id === "row-1" ? "" : "lg:mt-16 mt-8";

          if (block.layout === "text-image") {
            return (
              <div key={block.id} className={[rowBase, rowGap].join(" ")}>
                {/* LEFT */}
                <div className="pt-2">
                  {hasTitle && (
                    <h2 className="text-xl lg:text-4xl font-semibold text-orange-600 mb-3">{block.title}</h2>
                  )}
                  {hasSubtitle && <p className="mt-3 text-[15px] text-gray-500">{block.subtitle}</p>}

                  {hasBullets && (
                    <div className="mt-5">
                      <DotBullets items={block.bullets!} />
                    </div>
                  )}
                </div>

                {/* RIGHT */}
                {img && (
                  <div className="relative w-full">
                    <div className={img.wrapperClassName}>
                      <Image
                        src={img.src}
                        alt={img.alt}
                        width={img.width}
                        height={img.height}
                        className={img.className}
                        priority
                      />
                    </div>
                  </div>
                )}
              </div>
            );
          }

          if (block.layout === "image-text") {
            return (
              <div key={block.id} className={[rowBase, rowGap].join(" ")}>
                {/* LEFT IMAGE */}
                {img && (
                  <div className="relative">
                    <div className={img.wrapperClassName}>
                      <Image
                        src={img.src}
                        alt={img.alt}
                        width={img.width}
                        height={img.height}
                        className={img.className}
                        priority
                      />
                    </div>
                  </div>
                )}

                {/* RIGHT TEXT */}
                <div className="pt-1">
                  {hasBullets && (
                    <div className="mt-1">
                      <DotBullets items={block.bullets!} />
                    </div>
                  )}
                </div>
              </div>
            );
          }

          // text-image-bottom
          return (
            <div key={block.id} className={[rowBase, rowGap].join(" ")}>
              {/* LEFT TEXT */}
              <div className="pt-1">{hasBullets && <DotBullets items={block.bullets!} />}</div>

              {/* RIGHT IMAGE */}
              {img && (
                <div className="relative w-full flex justify-start lg:justify-end">
                  <div className={img.wrapperClassName}>
                    <Image
                      src={img.src}
                      alt={img.alt}
                      width={img.width}
                      height={img.height}
                      className={img.className}
                      priority
                    />
                  </div>
                </div>
              )}
            </div>
          );
        })}


        <p className="mt-10 text-base text-black font-medium">
          Above details are official statement. With those worldclass facilities, we want to make sure that our
          customers are always at their comfort level to yield better results in their dental care.
        </p>


        <h2 className="text-xl mt-6 lg:text-3xl font-semibold text-orange-600 mb-1"> Easy Access Across Our Dental Clinic Locations </h2>


        <p className="mt-2 text-base text-black font-medium mb-10">
          <ul>
            <li className="list-disc list-inside text-gray-600 ">
              Kondapur: Near HITEC City Metro Station.
            </li>

            <li className="list-disc list-inside text-gray-600 ">
              KPHB / Kukatpally: Near KPHB Colony Metro Station.
            </li>

            <li className="list-disc list-inside text-gray-600 ">
              Manikonda: Near Raidurg Metro Station.
            </li>

            <li className="list-disc list-inside text-gray-600 ">
              Banjara Hills: Near Panjagutta Metro Station.
            </li>

            <li className="list-disc list-inside text-gray-600 ">
              Kompally: Near JNTU College Metro Station.
            </li>

          </ul>
        </p>

      </div>
    </section>
  );
};

export default FacilitiesAbouts;