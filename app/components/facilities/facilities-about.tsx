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
      "We help you give the best of the facilities to make sure that you are at ease. We assist you in terms of",
    bullets: [
      { id: "t1", text: "World class ambience with a comfortable and friendly environment." },
      { id: "t2", text: "Ample reception area with skilled staff who proudly represent Eledent who are available 24/7 to assist and welcome you." },
      {
        id: "t3",
        text: "Accommodated with a inhouse pharmacy, so that you can get all your medicines at a single go instead of searching for them at various medical stores.",
      },
      {
        id: "t4",
        text: "We have well built and furnished hygiene cafeteria with some yummy food cooked for you to make sure that you don’t skip your meals for the day during your treatment.",
      },
      {
        id: "t5",
        text: "While our experts might be busy at times with other patients, with no intention to make your day boring, we have also set up snooker tables only for you.",
      },
    ],
    image: {
      src: "/facilities/facilities-about.png",
      alt: "Facilities",
      width: 1200,
      height: 900,
      className: "w-full  object-cover",
      wrapperClassName: "relative overflow-hidden lg:rounded-[26px] rounded-lg bg-gray-100 shadow-xl",
    },
    layout: "text-image",
  },
  {
    id: "row-2",
    bullets: [
      {
        id: "r1",
        text: "Well facilitated Dress-up rooms and massage chairs for you to get freshen up after your treatment.",
      },
      { id: "r2", text: "We have air purifiers accommodated in every room to make sure that you are taking in fresh air." },
      {
        id: "r3",
        text: "We offer Aromatherapy to keep you refreshed and healthy. Dental conference room to give the doctors a forum to share the knowledge and dental case studies in order to improve our health care services. Check out san diego downtown.",
      },
      {
        id: "r4",
        text: "There is a nice dental photo studio setup for you to make sure that all your moments before and after the smile makeover are captured.",
      },
      {
        id: "r5",
        text: "We have the latest technology and Infrastructure to make things easier for you. We have CBCT room where we can get your digital x-rays done within fraction of seconds and let you know your dental condition.",
      },
    ],
    image: {
      src: "/facilities/facilities-about-1.png",
      alt: "Consultation room",
      width: 1400,
      height: 1000,
      className: "w-full  object-cover",
      wrapperClassName: "relative overflow-hidden lg:rounded-[26px] rounded-lg bg-gray-100 shadow-xl",
    },
    layout: "image-text",
  },
  {
    id: "row-3",
    bullets: [
      {
        id: "b1",
        text: "We have 6 operatory chambers to make sure that we don’t keep you waiting for your turn. We are equipped with Microscopic endodontics for a painless root canal treatment with good and sterilized Conscious sedation apparatus along with the facilities to conduct blood diagnostics.",
      },
      { id: "b2", text: "We Specialise vcare for all to is your tooth issues with Ceno technology. Check website here." },
      {
        id: "b3",
        text: "We have a huge waiting area for all patients along with executive lounges along with meet up rooms to clean yourself up after your treatment.",
      },
      {
        id: "b4",
        text: "We have 24/7 backup for electricity with International standard sterilisers to make sure there is no interruption in your treatment along with uninterrupted wifi services exclusively for you. Check how to find with diego here near me.",
      },
      { id: "b5", text: "We care for your life so we have the high standards when it comes to the safety and rooms." },
      { id: "b6", text: "With Eledent, parking is no more a issue with our valet parking services." },
    ],
    image: {
      src: "/facilities/facilities-about-2.png",
      alt: "Massage chair",
      width: 900,
      height: 900,
      className: "w-full object-contain drop-shadow-xl",
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
      </div>
    </section>
  );
};

export default FacilitiesAbouts;