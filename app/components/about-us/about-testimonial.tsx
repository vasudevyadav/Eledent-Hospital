"use client";

import { useMemo, useState } from "react";

export default function AboutTestimonial() {
    const [currentSlide, setCurrentSlide] = useState(0);

    const testimonialImages = useMemo(
        () => [
            {
                image:
                    "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=1200&q=70",
                name: "Patient Review 1",
            },
            {
                image:
                    "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=1200&q=70",
                name: "Patient Review 2",
            },
            {
                image:
                    "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1200&q=70",
                name: "Patient Review 3",
            },
            {
                image:
                    "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1200&q=70",
                name: "Patient Review 4",
            },
            {
                image:
                    "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=1200&q=70",
                name: "Patient Review 5",
            },
            {
                image:
                    "https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&w=1200&q=70",
                name: "Patient Review 6",
            },
        ],
        []
    );

    const imagesPerSlide = 3;
    const totalSlides = Math.ceil(testimonialImages.length / imagesPerSlide);

    const handlePrev = () => {
        setCurrentSlide((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
    };

    const handleNext = () => {
        setCurrentSlide((prev) => (prev === totalSlides - 1 ? 0 : prev + 1));
    };

    const visibleImages = testimonialImages.slice(
        currentSlide * imagesPerSlide,
        currentSlide * imagesPerSlide + imagesPerSlide
    );

    return (
        <section className="w-full bg-white py-16">
            <div className="mx-auto max-w-6xl px-6">
                <div className="text-center">
                    {/* <span className="inline-flex items-center justify-center  bg-orange-500 px-2.5 py-0.5 text-sm font-semibold text-white">
                        Our
                    </span> */}

                    <h2 className="mt-1 text-[34px] font-bold text-gray-800 md:text-[40px]">
                        Testimonials
                    </h2>
                </div>

                <div className="mt-10">
                    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                        {visibleImages.map((item, index) => (
                            <div
                                key={index}
                                className="overflow-hidden rounded-2xl bg-white shadow-[0_10px_30px_rgba(0,0,0,0.18)]"
                            >
                                <div className="relative h-[280px] w-full">
                                    <img
                                        src={item.image}
                                        alt={item.name}
                                        className="h-full w-full object-cover shadow-2xl"
                                        loading="lazy"
                                    />
                                </div>
                            </div>
                        ))}
                    </div>

                    {testimonialImages.length > imagesPerSlide && (
                        <div className="mt-8 flex items-center justify-center gap-6 text-gray-400">
                            <button
                                onClick={handlePrev}
                                className="rounded-full border border-gray-400 p-2 transition hover:border-orange-500 hover:text-orange-500"
                                aria-label="Previous testimonial images"
                            >
                                <svg
                                    className="h-5 w-5"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <path d="M15 18l-6-6 6-6" />
                                </svg>
                            </button>

                            <div className="flex items-center gap-2">
                                {Array.from({ length: totalSlides }).map((_, i) => (
                                    <span
                                        key={i}
                                        className={`h-2.5 w-2.5 rounded-full ${currentSlide === i
                                            ? "bg-orange-500"
                                            : "bg-gray-300"
                                            }`}
                                    />
                                ))}
                            </div>

                            <button
                                onClick={handleNext}
                                className="rounded-full border border-gray-400 p-2 transition hover:border-orange-500 hover:text-orange-500"
                                aria-label="Next testimonial images"
                            >
                                <svg
                                    className="h-5 w-5"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <path d="M9 6l6 6-6 6" />
                                </svg>
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
}