"use client";

import Image from "next/image";
import type { JSX } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

type AwardItem = {
    id: number;
    image: string;
    alt: string;
    title: string;
    description: string;
    date?: string;
};

const awardsData: AwardItem[] = [
    {
        id: 1,
        image: "/trophy.jpeg",
        alt: "Best Clinic in India",
        title: "Best Clinic in India",
        description: "FamDent Excellence Awards – 2018 & 2022",
        date: "Mar 06, 2026",
    },
    {
        id: 2,
        image: "/trophy.jpeg",
        alt: "Trusted Patient Care Recognition",
        title: "Best Healthcare Award",
        description: "Ministry of Health, Government of India 2019",
        date: "Mar 06, 2026",
    },
    {
        id: 3,
        image: "/trophy.jpeg",
        alt: "Clinical Innovation Award",
        title: "Best Dental Hospital Award",
        description: "Times Health 2024",
        date: "Mar 06, 2026",
    },

    {
        id: 4,
        image: "/trophy.jpeg",
        alt: "Clinical Excellence Recognition",
        title: "Best dental hospital by the Government",
        description: "Best dental hospital by the Government of Telangana in year 2019",
        date: "Mar 06, 2026",
    },
    {
        id: 5,
        image: "/trophy.jpeg",
        alt: "Clinical Excellence Recognition",
        title: "Famdent Excellence- 2022",
        description: "Heroic dentist award by Famdent Excellence- 2022",
        date: "Mar 06, 2026",
    },
    {
        id: 6,
        image: "/trophy.jpeg",
        alt: "The Luminary Health Awards- 2024",
        title: "Heroic dentist award",
        description: "Expert dentist by The Luminary Health Awards- 2024",
        date: "Mar 06, 2026",
    },
];

export default function AwardsSection(): JSX.Element {
    return (
        <section className="w-full bg-[#f8f8f8] py-8 lg:py-12">
            <div className="mx-auto max-w-7xl px-4 lg:px-6">
                <div className="mb-8 text-center lg:mb-12">
                    <p className="mx-auto w-fit rounded-full bg-[#f36d00] px-4 py-1 text-sm font-semibold text-white">
                        OUR AWARDS
                    </p>

                    <h2 className="mt-3 text-2xl font-semibold text-slate-900 sm:text-3xl lg:text-4xl">
                        Recognition That Reflects Our Care
                    </h2>

                    <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-slate-600 sm:text-base">
                        Our commitment to patient care, clinical quality, and modern treatment
                        standards has earned trust and recognition.
                    </p>
                </div>

                <Swiper
                    modules={[Autoplay]}
                    spaceBetween={24}
                    loop={awardsData.length > 3}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                        pauseOnMouseEnter: true,
                    }}
                    breakpoints={{
                        0: {
                            slidesPerView: 1,
                        },
                        768: {
                            slidesPerView: 2,
                        },
                        1024: {
                            slidesPerView: 3,
                        },
                    }}
                    className="awards-swiper"
                >
                    {awardsData.map((award) => (
                        <SwiperSlide key={award.id}>
                            <AwardCard award={award} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
}

function AwardCard({ award }: { award: AwardItem }): JSX.Element {
    return (
        <div className="overflow-hidden rounded-[22px] bg-white transition duration-300 hover:-translate-y-1 ">
            <div className="relative h-[250px] w-full">
                <Image
                    src={award.image}
                    alt={award.alt}
                    fill
                       unoptimized
                    className="object-cover"
                />

                {award.date ? (
                    <div className="absolute bottom-0 right-0 rounded-tl-xl bg-[#f36d00] px-4 py-1.5 text-xs font-medium text-white">
                        {award.date}
                    </div>
                ) : null}
            </div>

            <div className="p-5 lg:p-6 lg:min-h-[135px]">
                <h3 className="line-clamp-1 text-xl font-semibold leading-snug text-[#f36d00]">
                    {award.title}
                </h3>

                <p className="mt-3 line-clamp-2 text-sm leading-6 text-slate-600">
                    {award.description}
                </p>
            </div>
        </div>
    );
}