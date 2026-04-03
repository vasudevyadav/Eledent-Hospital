"use client";

import React, { useEffect, useMemo, useState } from "react";

type LocationCard = {
  id: string;
  city: string;
  addressLines: string[];
  mapEmbedSrc: string;
  href: string;
  map_redirect: string;
};

type LocationsApiResponse = {
  success: boolean;
  count: number;
  data: LocationCard[];
};

function isValidLocation(location: LocationCard) {
  const hasCity = typeof location.city === "string" && location.city.trim() !== "";
  const hasAddressLines =
    Array.isArray(location.addressLines) &&
    location.addressLines.some((line) => typeof line === "string" && line.trim() !== "");
  const hasMapEmbed =
    typeof location.mapEmbedSrc === "string" && location.mapEmbedSrc.trim() !== "";
  const hasRedirect =
    typeof location.map_redirect === "string" && location.map_redirect.trim() !== "";
  const hasHref = typeof location.href === "string" && location.href.trim() !== "";

  return hasCity && hasAddressLines && hasMapEmbed && (hasRedirect || hasHref);
}

function LocationMapCard({
  city,
  addressLines,
  mapEmbedSrc,
  href,
  map_redirect,
}: LocationCard) {
  const googleMapsLink = useMemo(() => {
    const fullAddress = [city, ...addressLines].filter(Boolean).join(", ");
    return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
      fullAddress
    )}`;
  }, [city, addressLines]);

  const redirectUrl = map_redirect || href || googleMapsLink;

  return (
    <a
      href={redirectUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="block overflow-hidden rounded-[16px] border border-slate-200 bg-white shadow-[0_12px_26px_rgba(15,23,42,0.10)] transition hover:-translate-y-[1px] hover:shadow-[0_16px_34px_rgba(15,23,42,0.14)] focus:outline-none focus:ring-2 focus:ring-[#f36d00]/50"
      aria-label={`Go to ${city} location page`}
    >
      <div className="bg-[#f36d00] px-5 py-4 text-white">
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

        <div className="my-2 text-xs leading-4 text-white/90 lg:text-sm">
          {addressLines.map((line, idx) => (
            <div key={idx}>{line}</div>
          ))}
        </div>
      </div>

      <div className="p-4">
        <div className="mb-1">
          <span className="inline-flex items-center rounded-md bg-slate-100 px-6 py-2.5 text-sm font-semibold text-slate-700 transition hover:bg-slate-200">
            View Location
          </span>
        </div>

        <div className="mt-3 overflow-hidden rounded-[12px] border border-slate-200 bg-slate-50">
          <div className="relative h-[210px] w-full md:h-[260px] lg:h-[300px]">
            <iframe
              src={mapEmbedSrc}
              className="pointer-events-none absolute inset-0 h-full w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
              title={`${city} map`}
            />
          </div>
        </div>
      </div>
    </a>
  );
}

export default function LocationMapsSection() {
  const [locations, setLocations] = useState<LocationCard[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchLocations = async () => {
      try {
        const baseUrl =
          process.env.NEXT_PUBLIC_API_BASE_URL ||
          "https://backend.eledenthospitals.com/wp-json/custom/v1";

        const response = await fetch(`${baseUrl}/locations`, {
          cache: "no-store",
        });

        if (!response.ok) {
          throw new Error(`Failed to fetch locations: ${response.status}`);
        }

        const result: LocationsApiResponse = await response.json();

        if (result?.success && Array.isArray(result?.data)) {
          const filteredLocations = result.data.filter(isValidLocation);
          setLocations(filteredLocations);
        } else {
          setLocations([]);
        }
      } catch (err) {
        console.error("Error fetching locations:", err);
        setError("Unable to load locations right now.");
      } finally {
        setLoading(false);
      }
    };

    fetchLocations();
  }, []);

  if (loading) {
    return (
      <section className="bg-white px-4 py-2 sm:px-6 sm:py-4 lg:px-24">
        <div className="mx-auto max-w-7xl">
          <p className="text-center text-sm text-slate-600">
            Loading locations...
          </p>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="bg-white px-4 py-2 sm:px-6 sm:py-4 lg:px-24">
        <div className="mx-auto max-w-7xl">
          <p className="text-center text-sm text-red-600">{error}</p>
        </div>
      </section>
    );
  }

  if (!locations.length) {
    return (
      <section className="bg-white px-4 py-2 sm:px-6 sm:py-4 lg:px-24">
        <div className="mx-auto max-w-7xl">
          <p className="text-center text-sm text-slate-600">
            No locations found.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-white px-4 py-2 sm:px-6 sm:py-4 lg:px-24">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-6 sm:gap-8 lg:grid-cols-2">
          {locations.map((loc) => (
            <LocationMapCard key={loc.id} {...loc} />
          ))}
        </div>
      </div>
    </section>
  );
}