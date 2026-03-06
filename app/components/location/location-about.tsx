"use client";

import Image from "next/image";
import type { FC } from "react";
import type { LocationData } from "../../../data/locations";

type Props = {
  location: LocationData;
};

const LocationAbout: FC<Props> = ({ location }) => {
  return (
    <section className="bg-white lg:mb-0 mb-8 lg:py-12 px-4 sm:px-8 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center lg:mb-6">
          <div className="pt-1">
            <h1 className="text-2xl lg:text-3xl font-semibold leading-snug text-[#f37021]">
              {location.aboutTitleLine1}
              <br />
              {location.aboutTitleLine2}
            </h1>

            <div className="mt-4 space-y-4 text-sm sm:text-base leading-7 text-gray-600">
              {location.aboutIntroParas.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>

          <div className="w-full">
            <div className="relative w-full h-[240px] lg:h-[390px] rounded-[22px] overflow-hidden bg-[#f6f6f6] shadow-sm">
              <Image
                src={location.aboutImageSrc}
                alt={location.aboutImageAlt}
                fill
                priority
                className="object-cover"
              />
            </div>
          </div>
        </div>

        <div className="pt-1">
          <div className="mt-4 space-y-4 text-sm sm:text-base leading-7 text-gray-600">
            {location.aboutBottomParas.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationAbout;