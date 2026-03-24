"use client";

import { useMemo } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

export default function CommanTestimonial() {
    const testimonialImages = useMemo(
        () => [
            {
                image:
                    "https://reinventmedia.in/eledenthospitals/wp-content/uploads/2026/03/Kompally-4.png",
                name: "Patient Review 1",
            },
            {
                image:
                    "https://reinventmedia.in/eledenthospitals/wp-content/uploads/2026/03/Kukatpally-5.png",
                name: "Patient Review 2",
            },
            {
                image:
                    "https://reinventmedia.in/eledenthospitals/wp-content/uploads/2026/03/Kukatpally-3.png",
                name: "Patient Review 3",
            },
            {
                image:
                    "https://reinventmedia.in/eledenthospitals/wp-content/uploads/2026/03/banjara-hills.png",
                name: "Patient Review 4",
            },
            {
                image:
                    "https://reinventmedia.in/eledenthospitals/wp-content/uploads/2026/03/banjara-hills-3.png",
                name: "Patient Review 5",
            },
            {
                image:
                    "https://reinventmedia.in/eledenthospitals/wp-content/uploads/2026/03/monikonda.png",
                name: "Patient Review 6",
            },
            {
                image:
                    "https://reinventmedia.in/eledenthospitals/wp-content/uploads/2026/03/kondapur-4.png",
                name: "Patient Review 7",
            },

            {
                image:
                    "https://reinventmedia.in/eledenthospitals/wp-content/uploads/2026/03/Kukatpally-3.png",
                name: "Patient Review 8",
            },

            {
                image:
                    "https://reinventmedia.in/eledenthospitals/wp-content/uploads/2026/03/Kompally.png",
                name: "Patient Review 9",
            },
        ],
        []
    );

    return (
        <section className="w-full bg-white py-16 lg:pb-0">
            <div className="mx-auto max-w-7xl px-6">
                <div className="text-center">
                    <span className="inline-flex items-center justify-center bg-orange-500 px-2.5 py-0.5 text-sm font-semibold text-white">
                        Our
                    </span>

                    <h2 className="mt-1 text-[34px] font-bold text-gray-800 md:text-[40px]">
                        Testimonials
                    </h2>
                </div>

                <div className="mt-10">
                    <Swiper
                        modules={[Autoplay]}
                        spaceBetween={10}
                        loop={true}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
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
                    >
                        {testimonialImages.map((item, index) => (
                            <SwiperSlide key={index}>
                                <div className="overflow-hidden rounded-2xl bg-white border border-gray-400">
                                    <div className="relative lg:h-[250px] w-full">
                                        <img
                                            src={item.image}
                                            alt={item.name}
                                            className="h-full w-full object-contain"
                                            loading="lazy"
                                        />
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </section>
    );
}