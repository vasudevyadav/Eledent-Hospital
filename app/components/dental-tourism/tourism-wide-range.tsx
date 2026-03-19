"use client";

import Image from "next/image";
import type { FC } from "react";

type Treatment = {
    title: string;
    img: string;
    href?: string; // optional: if you want "Know More" to link somewhere
};

const treatments: Treatment[] = [
    { title: "Dental implant", img: "/dental-tourism/wide-range-1.png" },
    { title: "Teeth with extensive filling", img: "/dental-tourism/wide-range.png" },
    { title: "Root canal treated teeth", img: "/dental-tourism/wide-range-2.png" },
    { title: "Fractured teeth", img: "/dental-tourism/wide-range-3.png" },
    { title: "Veneers", img: "/dental-tourism/wide-range-4.png" },
    { title: "Severely worn teeth", img: "/dental-tourism/wide-range-5.png" },
    { title: "Discoloured teeth", img: "/dental-tourism/wide-range-6.png" },
    { title: "Smile correction", img: "/dental-tourism/wide-range-7.png" },
    { title: "Closing of gaps", img: "/dental-tourism/wide-range-8.png" },
];

const TourismWideRange: FC = () => {
    return (
        <section className="w-full ">
            <div className="mx-auto max-w-7xl mx-10 bg-[#e9eaeb] py-14 sm:py-12 px-4 lg:px-20 lg:rounded-2xl">
                <div className="mx-auto max-w-3xl text-center">
                    <h2 className="text-xl lg:text-4xl font-semibold text-black">
                        The Wide Range of Treatments Provided Under
                        Dental Tourism Are
                    </h2>

                    <p className="lg:mt-4 text-xs sm:text-base leading-relaxed text-gray-600">
                        The services normally cost a lot if done in other countries but Eledent Dental Hospital provides these treatments at a reasonable price that
                        suits the budget so that travellers can get best-in-class services and can resume their travel without having to take care of the expenses list that might
                        otherwise hinder their travel experience. Check maids of jacksonville.
                    </p>
                </div>

                <div className="mt-10 sm:mt-12">
                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                        {treatments.map((item, idx) => (
                            <div
                                key={`${item.title}-${idx}`}
                                className="rounded-2xl bg-white shadow-md overflow-hidden"
                            >
                                <div className="p-4">
                                    <div className="relative w-full overflow-hidden rounded-xl aspect-[4/3] bg-gray-100">
                                        <Image src={item.img} alt={item.title} fill className="object-cover" />
                                    </div>

                                    <h3 className="mt-4 text-base sm:text-lg font-semibold text-gray-800 text-center">
                                        {item.title}
                                    </h3>

                                    <div className="mt-4 flex justify-center">
                                        {item.href ? (
                                            <a
                                                href={item.href}
                                                className="rounded-lg bg-[#f97316] px-5 py-2 text-sm font-semibold text-white shadow-sm hover:opacity-95 active:opacity-90"
                                            >
                                                Know More
                                            </a>
                                        ) : (
                                            <button
                                                type="button"
                                                className="rounded-lg bg-[#f97316] px-5 py-2 text-sm font-semibold text-white shadow-sm hover:opacity-95 active:opacity-90"
                                            >
                                                Know More
                                            </button>
                                        )}
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

export default TourismWideRange;