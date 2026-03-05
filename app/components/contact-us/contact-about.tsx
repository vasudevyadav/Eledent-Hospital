"use client";

import React from "react";
import Link from "next/link";

type LocationCard = {
  id: string;
  city: string; // e.g. KONDAPUR
  addressLines: string[];
  mapEmbedSrc: string; // google map embed link
  href: string; // location page route
};

const LOCATIONS: LocationCard[] = [
  {
    id: "kondapur",
    city: "KONDAPUR",
    href: "/locations/kondapur", // ✅ change as per your route
    addressLines: [
      "K1, Prime Building, 3rd Floor,",
      "Beside Chrome, Above Rationshop,",
      "Near Kondapur Bus Stop, Hyderabad, Telangana, 500084",
    ],
    mapEmbedSrc:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.6800000000003!2d78.363!3d17.463!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sKondapur!5e0!3m2!1sen!2sin!4v1",
  },
  {
    id: "kukatpally",
    city: "KUKATPALLY",
    href: "/locations/kukatpally", // ✅ change as per your route
    addressLines: [
      "2 Opposite Hitech Hospital, MIG, Ground Floor,",
      "Near Nizampet X Road, KPHB Phase 1,",
      "Kukatpally, Hyderabad, Telangana, 500072",
    ],
    mapEmbedSrc:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.6800000000003!2d78.380!3d17.490!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sKukatpally!5e0!3m2!1sen!2sin!4v1",
  },
];

function LocationMapCard({ city, addressLines, mapEmbedSrc, href }: LocationCard) {
  return (
    <Link
      href={href}
      className="block rounded-[16px] border border-slate-200 bg-white overflow-hidden
                 shadow-[0_12px_26px_rgba(15,23,42,0.10)]
                 transition hover:-translate-y-[1px] hover:shadow-[0_16px_34px_rgba(15,23,42,0.14)]
                 focus:outline-none focus:ring-2 focus:ring-[#f36d00]/50"
      aria-label={`Go to ${city} location page`}
    >
      {/* Top orange header strip */}
      <div className="bg-[#f36d00] text-white px-5 py-4">
        <div className="flex items-center gap-2 font-bold tracking-wide">
          <div className="mb-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-7"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
              />
            </svg>
          </div>
          <span className="text-sm lg:text-2xl">{city}</span>
        </div>

        <div className="my-2 text-[11px] sm:text-sm leading-4 text-white/90">
          {addressLines.map((l, idx) => (
            <div key={idx}>{l}</div>
          ))}
        </div>
      </div>

      {/* Map area */}
      <div className="p-4">
        <div className="inline-flex mb-1 items-center rounded-md bg-slate-100 px-6 py-2.5 text-sm font-semibold text-slate-700">
          View Location
        </div>

        <div className="mt-3 overflow-hidden rounded-[12px] border border-slate-200 bg-slate-50">
          {/* NOTE: iframe click will navigate because whole card is a Link */}
          <div className="relative w-full h-[210px] lg:h-[300px] md:h-[260px]">
            <iframe
              src={mapEmbedSrc}
              className="absolute inset-0 h-full w-full pointer-events-none"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
              title={`${city} map`}
            />
          </div>
        </div>
      </div>
    </Link>
  );
}

export default function LocationMapsSection() {
  return (
    <section className="bg-white py-2 sm:py-4 px-4 sm:px-6 lg:px-24">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          {LOCATIONS.map((loc) => (
            <LocationMapCard key={loc.id} {...loc} />
          ))}
        </div>
      </div>
    </section>
  );
}