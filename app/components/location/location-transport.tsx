"use client";

import type { FC } from "react";
import type { LocationData } from "@/lib/location-api";

type Props = {
  location: LocationData;
};

type InfoCard = {
  title: string;
  icon: string;
  places: { name: string; distance: string }[];
};

const defaultCards: InfoCard[] = [
  {
    title: "Transportation",
    icon: "https://admin.kgkrealty.com/wp-content/uploads/2025/06/Transport-scaled.png",
    places: [
      { name: "Jaipur Junction", distance: "2.2 Kms" },
    ],
  },
  {
    title: "Hospital",
    icon: "https://admin.kgkrealty.com/wp-content/uploads/2025/06/Commercial-Hub-scaled.png",
    places: [{ name: "Jaipur International Airport", distance: "2 Km" }],
  },

];

const LocationTransport: FC<Props> = ({ location }) => {
  const data = location as any;

  const sectionLabel =
    data?.transportSectionLabel || "A Landmark Address for Refined Urban Living";

  const sectionTitle = data?.transportSectionTitle || "Location Excellence";

  const mapEmbedUrl =
    data?.mapEmbedUrl ||
    "https://www.google.com/maps?q=Jaipur&z=14&output=embed";

  const cards: InfoCard[] = data?.locationHighlights?.length
    ? data.locationHighlights
    : defaultCards;

  return (
    <section className="w-full bg-white px-4 py-10 lg:px-20 lg:py-16">
      <div className="flex flex-col items-start gap-8 lg:flex-row lg:gap-16">
        <div className="z-10 h-80 w-full overflow-hidden rounded-2xl border border-gray-200 shadow-sm lg:h-[30rem] lg:w-5/12">
          <iframe
            src={mapEmbedUrl}
            title={`${data?.name || "Location"} map`}
            className="h-full w-full"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

        <div className="mb-8 w-full lg:mb-0 lg:w-7/12">
          <p className="mb-3 text-sm uppercase tracking-[0.2em] text-black lg:mt-6">
            {sectionLabel}
          </p>

          <h2 className="mb-6 text-2xl lg:text-3xl font-semibold text-[#f36d00]">
            {sectionTitle}
          </h2>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {cards.map((card, index) => (
              <div
                key={`${card.title}-${index}`}
                className="flex items-center gap-4 rounded-xl border border-gray-200 p-2 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md"
              >
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-[#f36d00] p-2">
                  <img
                    src={card.icon}
                    alt={card.title}
                    className="max-h-full max-w-full object-contain"
                    loading="lazy"  
                  />
                </div>

                <div className="w-full">


                  <div className="space-y-1">
                    {card.places.map((place, placeIndex) => (
                      <div
                        key={`${place.name}-${placeIndex}`}
                        className="text-sm leading-6 text-gray-700"
                      >
                        {place.name}{" "}
                        <strong>
                          <span className="whitespace-nowrap">
                            ({place.distance})
                          </span>
                        </strong>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationTransport;