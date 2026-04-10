"use client";

import { useEffect, useMemo, useState } from "react";

type TestimonialItem = {
    src?: string;
    alt?: string;
};

type Props = {
    data?: TestimonialItem[];
};

export default function LocationTestimonial({ data = [] }: Props) {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [itemsPerSlide, setItemsPerSlide] = useState(3);

    const testimonialImages = useMemo(() => {
        return Array.isArray(data) ? data.filter((item) => item?.src) : [];
    }, [data]);

    useEffect(() => {
        const updateItemsPerSlide = () => {
            if (window.innerWidth >= 1024) {
                setItemsPerSlide(3);
            } else if (window.innerWidth >= 768) {
                setItemsPerSlide(2);
            } else {
                setItemsPerSlide(1);
            }
        };

        updateItemsPerSlide();
        window.addEventListener("resize", updateItemsPerSlide);

        return () => window.removeEventListener("resize", updateItemsPerSlide);
    }, []);

    const totalSlides = Math.ceil(testimonialImages.length / itemsPerSlide);

    useEffect(() => {
        if (currentSlide >= totalSlides && totalSlides > 0) {
            setCurrentSlide(0);
        }
    }, [currentSlide, totalSlides]);

    const handlePrev = () => {
        if (!totalSlides) return;
        setCurrentSlide((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
    };

    const handleNext = () => {
        if (!totalSlides) return;
        setCurrentSlide((prev) => (prev === totalSlides - 1 ? 0 : prev + 1));
    };

    const visibleImages = useMemo(() => {
        if (!testimonialImages.length) return [];

        const start = currentSlide * itemsPerSlide;
        const result: TestimonialItem[] = [];

        for (let i = 0; i < itemsPerSlide; i++) {
            const index = (start + i) % testimonialImages.length;
            result.push(testimonialImages[index]);
        }

        return result;
    }, [testimonialImages, currentSlide, itemsPerSlide]);

    if (!testimonialImages.length) return null;

    return (
        <section className="w-full bg-white lg:pt-10">
            <div className="mx-auto max-w-7xl px-6 lg:px-0">
                <div className="text-center">
                    {/* <span className="inline-flex items-center justify-center bg-orange-500 px-2.5 py-0.5 text-sm font-semibold text-white">
                        Our
                    </span> */}

                    <h2 className="mt-1 text-[25px] lg:font-bold font-semibold text-gray-800 md:text-[40px]">
                        Testimonials
                    </h2>
                </div>

                <div className="lg:mt-10 mt-4">
                    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                        {visibleImages.map((item, index) => (
                            <div
                                key={`${item.src}-${index}`}
                                className="overflow-hidden rounded-2xl bg-white shadow-[0_10px_30px_rgba(0,0,0,0.18)]"
                            >
                                <div className="relative lg:h-[220px] h-[180px] w-full">
                                    <img
                                        src={item.src || "/images/placeholder.jpg"}
                                        alt={item.alt || "Patient testimonial"}
                                        className="h-full w-full object-contain shadow-2xl"
                                        loading="lazy"
                                    />
                                </div>
                            </div>
                        ))}
                    </div>

                    {testimonialImages.length > itemsPerSlide && (
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
                                        className={`h-2.5 w-2.5 rounded-full ${currentSlide === i ? "bg-orange-500" : "bg-gray-300"
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