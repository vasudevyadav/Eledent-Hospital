"use client";

import Image from "next/image";
import type { FC } from "react";

const TourismNeed: FC = () => {
    // Update this path to your actual asset location
    const NEED_IMAGE = "/dental-tourism/tourism-need.png";

    return (
        <section className="w-full bg-white py-14 sm:py-16">
            <div className="mx-auto max-w-7xl px-4 sm:px-8 lg:px-6">
                <div className="grid items-center gap-10 lg:grid-cols-2">
                    {/* LEFT: Content */}
                    <div>
                        <h2 className="text-2xl lg:text-3xl font-semibold text-[#f97316]">
                            Need For Dental Tourism
                        </h2>

                        <div className="mt-5 space-y-5 text-sm lg:text-base leading-relaxed text-gray-600 max-w-[640px]">
                            <p>
                                Healthy teeth are an essential aspect not just for health and
                                hygiene purposes, but also for personality upliftments. With the
                                help of our trained experts at Eledent dental hospital and
                                advanced technologies, you can be assured that you will be
                                leaving our clinic with a brighter smile. We do fast, painless,
                                accurate, and well-defined work. Our customer’s satisfaction is
                                of paramount importance for us. Medical insurance policies do
                                not cover most of the dental treatments in certain countries
                                since most of them fall under the bracket of cosmetic dentistry.
                            </p>

                            <p>
                                This is what results in a higher cost of treatments in countries
                                like the US and the UK. This led to the emergence of “dental
                                tourism” to make sure the best healthcare is provided at
                                reasonable costs. The reason one must choose India, especially
                                Hyderabad for dental treatments is because of the diverse range
                                of treatments that it offers. Even when it comes to restorative
                                or cosmetic dentistry, the services offered here can comfortably
                                accommodate the necessary requirement.
                            </p>
                        </div>
                    </div>

                    {/* RIGHT: Image Card */}
                    <div className="flex lg:justify-end">
                        <div className="relative w-full max-w-[520px] overflow-hidden rounded-2xl shadow-lg">
                            <div className="relative aspect-[4/4] w-full">
                                <Image
                                    src={NEED_IMAGE}
                                    alt="Dental tourism"
                                    fill
                                    className="object-cover"
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

export default TourismNeed;