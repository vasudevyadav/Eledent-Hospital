"use client";

import Image from "next/image";
import type { FC } from "react";

type Treatment = {
    title: string;
    img: string;
    href?: string;
};

const VisaAccommodation: FC = () => {
    return (
        <section className="w-full py-10 sm:py-12">
            <div className="mx-auto max-w-7xl">
                <div>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-center">
                        {/* Left Content */}
                        <div className="px-6 lg:px-0">
                            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-[#f97316]">
                                Visa Travel and Accommodation
                            </h2>

                            <div className="mt-5 space-y-5 text-sm sm:text-base leading-relaxed text-gray-700">
                                <p>
                                    Coming to India for dental treatment is usually simple. India offers
                                    different visa options, and for most countries the process is hassle-free.
                                    For certain nationalities, an e-Visa can be obtained online. For dental
                                    treatment, you can apply for a tourist visa or a medical visa.
                                </p>

                                <p>
                                    If you need help with booking flights, coordinating your travel plans,
                                    pre or post treatment support, or anything during your stay, our patient
                                    service team can guide you end-to-end. We take care of everything from
                                    planning the trip to reserving travel and accommodation, so you get
                                    best-in-class treatment with warm Indian hospitality.
                                </p>

                                <p>
                                    The combination of great locations and high-quality healthcare facilities
                                    makes India a strong choice for dental tourism. We can curate a package
                                    that includes both your medication planning and your vacation plan.

                                </p>
                            </div>                        </div>

                      
                        <div className="relative w-full">
                            <div className="relative w-full mx-auto aspect-[16/14]">
                                <Image
                                    src="/dental-tourism/Visa-Travel-and-Accommodation.jpg"
                                    alt="Visa Travel and Accommodation"
                                    fill
                                    className="object-contain"
                                    priority
                                />
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default VisaAccommodation;