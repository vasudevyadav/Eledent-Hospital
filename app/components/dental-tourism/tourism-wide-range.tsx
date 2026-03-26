"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState, type FC } from "react";

type Service = {
  imageSrc: string;
  imageAlt: string;
  iconSrc: string;
  title: string;
  description: string;
  slug: string;
};

type ServicesApiResponse = {
  data: Service[];
};

const API_URL =
  "https://reinventmedia.in/eledenthospitals/wp-json/custom/v1/services";

const TourismWideRange: FC = () => {
  const [services, setServices] = useState<Service[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const res = await fetch(API_URL, {
          method: "GET",
          cache: "no-store",
        });

        if (!res.ok) {
          throw new Error("Failed to fetch services");
        }

        const result: ServicesApiResponse = await res.json();
        setServices(result?.data || []);
      } catch (err) {
        console.error("Services fetch error:", err);
        setError("Unable to load services right now.");
      } finally {
        setLoading(false);
      }
    };

    fetchServices();
  }, []);

  return (
    <section className="w-full">
      <div className="mx-auto max-w-7xl mx-4 lg:mx-10 bg-[#e9eaeb] py-14 sm:py-12 px-4 lg:px-20 lg:rounded-2xl">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-xl lg:text-4xl font-semibold text-black">
            The Wide Range of Treatments Provided Under Dental Tourism Are
          </h2>

          <p className="lg:mt-4 mt-3 text-xs sm:text-base leading-relaxed text-gray-600">
            The services normally cost a lot if done in other countries, but
            Eledent Dental Hospital provides these treatments at a reasonable
            price that suits the budget so that travellers can access advanced
            dental care without adding financial stress to their journey.
          </p>
        </div>

        <div className="mt-10 sm:mt-12">
          {loading ? (
            <div className="text-center text-gray-600 text-sm sm:text-base">
              Loading services...
            </div>
          ) : error ? (
            <div className="text-center text-red-500 text-sm sm:text-base">
              {error}
            </div>
          ) : services.length === 0 ? (
            <div className="text-center text-gray-600 text-sm sm:text-base">
              No services found.
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {services.map((item, idx) => (
                <div
                  key={`${item.slug}-${idx}`}
                  className="rounded-2xl bg-white shadow-md overflow-hidden"
                >
                  <div className="p-4">
                    <div className="relative w-full overflow-hidden rounded-xl aspect-[4/3] bg-gray-100">
                      <Image
                        src={item.imageSrc}
                        alt={item.imageAlt || item.title}
                        fill
                        className="object-cover"
                        unoptimized
                      />
                    </div>

                    <h3 className="mt-4 text-base sm:text-lg font-semibold text-gray-800 text-center">
                      {item.title}
                    </h3>

                    {item.description ? (
                      <p className="mt-2 text-sm text-gray-600 text-center line-clamp-3">
                        {item.description}
                      </p>
                    ) : null}

                    <div className="mt-4 flex justify-center">
                      <Link
                        href={`/services/${item.slug}`}
                        className="rounded-lg bg-[#f97316] px-5 py-2 text-sm font-semibold text-white shadow-sm hover:opacity-95 active:opacity-90"
                      >
                        Know More
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default TourismWideRange;