"use client";

import Image from "next/image";
import type { FC } from "react";

const tourismPoints = [
  "Low cost of affordable dental treatment in India.",
  "Affordable international airfare and favourable exchange rates.",
  "Quality dental care in accordance with international standards in India.",
  "Highly qualified doctors with enormous experience in dental treatment.",
  "Rigorous infection control systems which are at par with Western standards.",
  "No waiting list for patients, if planned properly in advance in comparison to a developed country.",
  "The Indian government has expanded its e-tourism VISA regime to include medical visa.",
];

type TourismSection = {
  id: string;
  titleLine1: string;
  titleLine2?: string;
  intro?: string[];
  imageSrc: string;
  imageAlt: string;
  pointsTitle?: string;
  points?: string[];
  bottomText?: string;
  flip?: boolean;
};

const SECTIONS: TourismSection[] = [
  {
    id: "hyderabad-top-1",
    titleLine1: "Dental Tourism in India,",
    titleLine2: "Hyderabad",
    intro: [
      "When we travel to another country to get surgery or a medical treatment owing to the specialisations each country offers in medical procedures is called medical tourism. Dental tourism is one of the major departments under medical tourism that is gaining popularity at an alarming rate.",
      "People generally tend to travel abroad for affordable dental care, dental treatment, dental surgery or dental check procedures which are expensive in one's own country.",
    ],
    imageSrc: "/dental-tourism/tourism-about.png",
    imageAlt: "Dental Tourism in Hyderabad",
  },
  {
    id: "hyderabad-points-1",
    titleLine1: "Dental Tourism in India",
    imageSrc: "/dental-tourism/tourism-about-1.png",
    imageAlt: "Dental Tourism in Hyderabad",
    pointsTitle: "Dental Tourism in India",
    points: tourismPoints,
    bottomText:
      "India offers the most advanced and developed technology for dental treatments, that deals explicitly with complex procedures of dental implants, cosmetic dentistry, and dentures at affordable and reasonable prices compared to other countries.",
    flip: true,
  },
  {
    id: "hyderabad-top-2",
    titleLine1: "Dental Tourism in India,",
    titleLine2: "Hyderabad",
    intro: [
      "India has transformed itself into a hub of dental tourism wherein travellers from all over the world can visit this country and get dental treatments at affordable prices and also experience the rich legacy in terms of cuisines, history, nature, and multicultural getaways.",
      "Hyderabad, in particular, is one of the highly preferred choices for tourists. Considering the amalgamation of the old and new, the city paints a vivid picture of culture and commerce.",
    ],
    imageSrc: "/dental-tourism/tourism-about.png",
    imageAlt: "Dental Tourism in Hyderabad",
  },
  {
    id: "hyderabad-points-2",
    titleLine1: "Dental Tourism in India",
    imageSrc: "/dental-tourism/tourism-about-2.png",
    imageAlt: "Dental Tourism in Hyderabad",
    pointsTitle: "Dental Tourism in India",
    points: tourismPoints,
    bottomText:
      "India offers the most advanced and developed technology for dental treatments, that deals explicitly with complex procedures of dental implants, cosmetic dentistry, and dentures at affordable and reasonable prices compared to other countries.",
    flip: true,
  },
];

const TourismAbout: FC = () => {
  return (
    <section className="bg-white py-1 lg:py-10 px-4 sm:px-8 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <div className="space-y-8 lg:space-y-18">
          {SECTIONS.map((sec) => {
            const hasIntro = !!sec.intro?.length;
            const hasPoints = !!sec.points?.length;

            return (
              <div key={sec.id} className="space-y-0 lg:space-y-8">
                {/* Block 1: Title + Intro + Image */}
                {hasIntro && (
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-center">
                    {/* Text */}
                    <div className={sec.flip ? "order-2 lg:order-2" : ""}>
                      <h2 className="text-2xl lg:text-4xl font-semibold leading-tight text-[#f37021]">
                        {sec.titleLine1}
                        {sec.titleLine2 ? (
                          <>
                            <br />
                            {sec.titleLine2}
                          </>
                        ) : null}
                      </h2>

                      <div className="mt-5 space-y-4 text-sm lg:text-base leading-8 text-gray-700 max-w-xl">
                        {sec.intro!.map((p, i) => (
                          <p key={`${sec.id}-intro-${i}`}>{p}</p>
                        ))}
                      </div>
                    </div>

                    {/* Image */}
                    <div
                      className={`flex justify-center ${sec.flip
                          ? "order-1 lg:order-1 lg:justify-start"
                          : "lg:justify-end"
                        }`}
                    >
                      <div className="relative z-10 rounded-2xl overflow-hidden">
                        <Image
                          src={sec.imageSrc}
                          alt={sec.imageAlt}
                          width={500}
                          height={500}
                          className="w-full h-[450px] object-contain"
                          priority
                        />
                      </div>
                    </div>
                  </div>
                )}

                {/* Block 2: Points + Image */}
                {hasPoints && (
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 lg:gap-10 items-center">
                    <div className="relative z-10 rounded-2xl overflow-hidden">
                      <Image
                        src={sec.imageSrc}
                        alt={sec.imageAlt}
                        width={500}
                        height={500}
                        className="w-full h-[450px] object-cover"
                        priority
                      />
                    </div>

                    <div className="mt-10 lg:mt-0">
                      <h3 className="text-2xl lg:text-4xl font-bold text-gray-800">
                        {sec.pointsTitle ?? sec.titleLine1}
                      </h3>

                      <ul className="mt-5 space-y-3 text-sm lg:text-base leading-6 text-gray-700">
                        {sec.points!.map((point, index) => (
                          <li
                            key={`${sec.id}-point-${index}`}
                            className="flex items-start gap-3"
                          >
                            <span className="mt-[8px] h-1.5 w-1.5 rounded-full bg-gray-500 shrink-0" />
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}

                {/* Bottom text */}
                {sec.bottomText && (
                  <p className="text-sm lg:text-base leading-7 text-gray-700">
                    {sec.bottomText}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TourismAbout;