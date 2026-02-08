"use client";

import { useMemo, useState } from "react";

export default function HomeTestimonial() {
    const [activeTab, setActiveTab] = useState("text");
    const [currentIndex, setCurrentIndex] = useState(0);

    // ✅ Demo images (safe to use directly)
    const testimonials = useMemo(
        () => [
            {
                text:
                    "No pain no hospital was very neat n hygienic overall treatment was Good n well covid precautions maintained here I will definitely suggest tmb madhapur for painless treatment.",
                author: "Prasanna Smily",
                role: "Hyderabad",
                rating: 4.9,
                image:
                    "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=1200&q=70",
            },
            {
                text:
                    "Very clean clinic and polite staff. Everything was explained properly and the procedure felt comfortable.",
                author: "Rajesh Kumar",
                role: "Mumbai",
                rating: 5.0,
                image:
                    "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=1200&q=70",
            },
            {
                text:
                    "Good experience overall. Modern setup, quick appointment, and the treatment was smooth.",
                author: "Priya Sharma",
                role: "Delhi",
                rating: 4.8,
                image:
                    "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1200&q=70",
            },
        ],
        []
    );

    const handlePrev = () => {
        setCurrentIndex((p) => (p === 0 ? testimonials.length - 1 : p - 1));
    };

    const handleNext = () => {
        setCurrentIndex((p) => (p === testimonials.length - 1 ? 0 : p + 1));
    };

    const t = testimonials[currentIndex];

    return (
        <section className="w-full bg-white py-16">
            <div className="mx-auto max-w-6xl px-6">
                {/* Header (matches screenshot) */}
                <div className="text-center">
                    <span className="inline-flex items-center justify-center bg-orange-500 px-2.5 py-0.5 text-[12px] font-semibold text-white rounded-[4px]">
                        Our
                    </span>

                    <h2 className="mt-2 text-[34px] md:text-[40px] font-extrabold text-gray-800">
                        Testimonials
                    </h2>

                    {/* Tabs (same pill style) */}
                    <div className="mt-5 flex items-center justify-center gap-3">
                        <button
                            onClick={() => setActiveTab("text")}
                            className={`rounded-full px-4 py-2 text-[12px] font-semibold transition ${activeTab === "text"
                                    ? "bg-orange-500 text-white shadow-sm"
                                    : "bg-white text-gray-700 border border-orange-500 hover:bg-orange-50"
                                }`}
                        >
                            Text Testimonials
                        </button>

                        <button
                            onClick={() => setActiveTab("video")}
                            className={`rounded-full px-4 py-2 text-[12px] font-semibold transition ${activeTab === "video"
                                    ? "bg-orange-500 text-white shadow-sm"
                                    : "bg-white text-orange-500 border border-orange-500 hover:bg-orange-50"
                                }`}
                        >
                            Video Testimonials
                        </button>
                    </div>
                </div>

                {/* Content */}
                <div className="mt-12 flex justify-center">
                    <div className="w-full max-w-5xl">
                        {activeTab === "video" ? (
                            // Video tab placeholder (keep same clean spacing like screenshot)
                            <div className="mx-auto flex min-h-[220px] items-center justify-center rounded-3xl border border-gray-200 bg-white">
                                <p className="text-sm text-gray-500">
                                    Video testimonials will appear here.
                                </p>
                            </div>
                        ) : (
                            <div className="flex flex-col items-center justify-center gap-10 md:flex-row md:gap-12">
                                {/* Left: Image card (same size + rounded) */}
                                <div className="relative w-[320px]">
                                    <div className="relative h-[190px] w-full overflow-hidden rounded-3xl bg-gray-100 shadow-[0_10px_30px_rgba(0,0,0,0.08)]">
                                        <img
                                            src={t.image}
                                            alt="Patient"
                                            className="h-full w-full object-cover"
                                            loading="lazy"
                                        />

                                        {/* Rating badge (same bottom-right overlay) */}
                                        <div className="absolute bottom-3 right-3 rounded-2xl bg-white/95 px-4 py-3 shadow-[0_10px_25px_rgba(0,0,0,0.12)] backdrop-blur">
                                            <div className="flex items-end gap-1">
                                                <span className="text-[20px] font-extrabold text-gray-800">
                                                    {t.rating.toFixed(1)}
                                                </span>
                                                <span className="pb-[2px] text-[12px] font-semibold text-gray-500">
                                                    /5
                                                </span>
                                            </div>

                                            <div className="mt-1 flex items-center gap-[2px]">
                                                {Array.from({ length: 5 }).map((_, i) => (
                                                    <svg
                                                        key={i}
                                                        className="h-3.5 w-3.5"
                                                        viewBox="0 0 20 20"
                                                        fill="currentColor"
                                                    >
                                                        <path
                                                            d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"
                                                            className="text-orange-500"
                                                        />
                                                    </svg>
                                                ))}
                                            </div>

                                            <p className="mt-1 text-[11px] font-medium text-gray-500">
                                                for excellence services
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* Middle vertical divider (present in screenshot) */}
                                <div className="hidden md:block h-[190px] w-px bg-gray-200" />

                                {/* Right: Text block */}
                                <div className="w-full max-w-[520px]">
                                    {/* Big pale quote (same vibe) */}
                                    <div className="mb-3">
                                        <svg
                                            className="h-14 w-14 text-orange-100"
                                            viewBox="0 0 64 64"
                                            fill="currentColor"
                                        >
                                            <path d="M26 28c0-10 8-18 18-18v8c-6 0-10 4-10 10h10v24H26V28zm-24 0C2 18 10 10 20 10v8c-6 0-10 4-10 10h10v24H2V28z" />
                                        </svg>
                                    </div>

                                    <p className="text-[13px] leading-6 text-gray-500">
                                        {t.text}
                                    </p>

                                    {/* Author row */}
                                    <div className="mt-6 flex items-center gap-3">
                                        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-orange-500 text-white">
                                            <svg
                                                className="h-4 w-4"
                                                viewBox="0 0 24 24"
                                                fill="currentColor"
                                            >
                                                <path d="M12 12a4.5 4.5 0 1 0-4.5-4.5A4.5 4.5 0 0 0 12 12Zm0 2c-4.2 0-7.5 2.2-7.5 5v1h15v-1c0-2.8-3.3-5-7.5-5Z" />
                                            </svg>
                                        </div>

                                        <div>
                                            <p className="text-[13px] font-bold text-gray-800">
                                                {t.author}
                                            </p>
                                            <p className="text-[11px] text-gray-500">{t.role}</p>
                                        </div>
                                    </div>

                                    {/* Arrows (simple chevrons like screenshot) */}
                                    <div className="mt-6 flex items-center gap-6 text-gray-400">
                                        <button
                                            onClick={handlePrev}
                                            className="transition hover:text-orange-500"
                                            aria-label="Previous testimonial"
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

                                        <button
                                            onClick={handleNext}
                                            className="transition hover:text-orange-500"
                                            aria-label="Next testimonial"
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
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}
