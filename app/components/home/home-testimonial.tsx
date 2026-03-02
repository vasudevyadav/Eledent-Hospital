"use client";

import Image from "next/image";
import { useMemo, useState } from "react";

type TextTestimonial = {
    text: string;
    author: string;
    role: string;
    rating: number;
    image: string; // left image (local or remote)
};

type VideoTestimonial = {
    title: string;
    author: string;
    role: string;
    youtubeId: string; // only id (not full url)
    image: string; // left image (local or remote) - (kept, but not shown on video tab as per requirement)
};

export default function HomeTestimonial() {
    const [activeTab, setActiveTab] = useState<"text" | "video">("text");
    const [currentIndex, setCurrentIndex] = useState(0);

    const textTestimonials = useMemo<TextTestimonial[]>(
        () => [
            {
                text:
                    "No pain no hospital was very neat n hygienic overall treatment was Good n well covid precautions maintained here I will definitely suggest tmb madhapur for painless treatment.",
                author: "Prasanna Smily",
                role: "Hyderabad",
                rating: 4.9,
                image: "/about-us/testimonial-image.png",
            },
            {
                text:
                    "Very clean clinic and polite staff. Everything was explained properly and the procedure felt comfortable.",
                author: "Rajesh Kumar",
                role: "Mumbai",
                rating: 5.0,
                image: "/about-us/testimonial-image.png",
            },
            {
                text:
                    "Good experience overall. Modern setup, quick appointment, and the treatment was smooth.",
                author: "Priya Sharma",
                role: "Delhi",
                rating: 4.8,
                image: "/about-us/testimonial-image.png",
            },
        ],
        []
    );

    const videoTestimonials = useMemo<VideoTestimonial[]>(
        () => [
            {
                title: "Comfortable treatment experience",
                author: "Ananya Verma",
                role: "Hyderabad",
                youtubeId: "dQw4w9WgXcQ",
                image: "/testimonials/testimonial-video-1.jpg",
            },
            {
                title: "Quick appointment, great staff",
                author: "Sahil Mehta",
                role: "Bangalore",
                youtubeId: "ysz5S6PUM-U",
                image: "/testimonials/testimonial-video-2.jpg",
            },
            {
                title: "Clean clinic, smooth process",
                author: "Neha Kapoor",
                role: "Delhi",
                youtubeId: "jNQXAC9IVRw",
                image: "/testimonials/testimonial-video-3.jpg",
            },
        ],
        []
    );

    const activeList = activeTab === "text" ? textTestimonials : videoTestimonials;
    const max = activeList.length;

    const handlePrev = () => setCurrentIndex((p) => (p === 0 ? max - 1 : p - 1));
    const handleNext = () => setCurrentIndex((p) => (p === max - 1 ? 0 : p + 1));

    const safeIndex = currentIndex >= max ? 0 : currentIndex;

    return (
        <section className="w-full bg-white pt-16 pb-6">
            <div className="mx-auto max-w-6xl px-6">
                {/* Header */}
                <div className="text-center">
                    <span className="inline-flex items-center justify-center bg-orange-500 px-2.5 py-0.5 text-base font-semibold text-white">
                        Our
                    </span>

                    <h2 className="mt-4 lg:text-3xl text-2xl lg:font-extrabold font-semibold text-gray-800 md:text-[40px]">
                        Testimonials
                    </h2>

                    <div className="mt-5 flex items-center justify-center gap-3">
                        <button
                            onClick={() => {
                                setActiveTab("text");
                                setCurrentIndex(0);
                            }}
                            className={`rounded-full px-6 py-2 lg:text-[15px]  font-semibold transition ${activeTab === "text"
                                ? "bg-orange-500 text-white shadow-sm"
                                : "border border-orange-500 bg-white text-gray-700 hover:bg-orange-50"
                                }`}
                        >
                            Text Testimonials
                        </button>

                        <button
                            onClick={() => {
                                setActiveTab("video");
                                setCurrentIndex(0);
                            }}
                            className={`rounded-full px-6 py-2 text-[15px] font-semibold transition ${activeTab === "video"
                                ? "bg-orange-500 text-white shadow-sm"
                                : "border border-orange-500 bg-white text-gray-700 hover:bg-orange-50"
                                }`}
                        >
                            Video Testimonials
                        </button>
                    </div>
                </div>

                {/* Content */}
                <div className="mt-12 flex justify-center">
                    <div className="w-full max-w-5xl">
                        <div
                            className={`flex flex-col items-center justify-center gap-10 ${activeTab === "video" ? "" : "md:flex-row md:gap-12"
                                }`}
                        >
                            {activeTab === "text" && (
                                <div className="relative lg:w-[400px] w-full overflow-visible">
                                    <div className="relative h-[240px] w-full ">
                                        <Image
                                            src={textTestimonials[safeIndex].image}
                                            alt="Testimonial"
                                            fill
                                            sizes="320px"
                                            className="object-cover rounded-3xl shadow-[0_10px_30px_rgba(0,0,0,0.08)]"
                                            priority={safeIndex === 0}
                                        />
                                    </div>

                                    <div className="absolute lg:bottom-3 bottom-0 lg:-right-8 right-0 z-20 lg:rounded-lg bg-[#e96a14] px-6 py-4 shadow-[0_10px_25px_rgba(0,0,0,0.12)] backdrop-blur">
                                        <div className="flex items-end gap-4 items-center">
                                            <div>
                                                <span className="text-[30px] font-extrabold text-white">
                                                    {textTestimonials[safeIndex].rating.toFixed(1)}
                                                </span>
                                                <span className="text-[30px] font-extrabold text-white">
                                                    /5
                                                </span>
                                            </div>

                                            <div>
                                                <div className="mt-1 flex items-center gap-[2px]">
                                                    {Array.from({ length: 5 }).map((_, i) => (
                                                        <svg
                                                            key={i}
                                                            className="h-4 w-4 text-white"
                                                            viewBox="0 0 20 20"
                                                            fill="currentColor"
                                                            aria-hidden="true"
                                                        >
                                                            <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                                                        </svg>
                                                    ))}
                                                </div>

                                                <p className="mt-1 text-sm font-medium text-white">
                                                    for excellence services
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}

                            {/* ✅ Divider ONLY FOR TEXT TAB */}
                            {activeTab === "text" && (
                                <div className="hidden h-[190px] w-px bg-gray-200 md:block" />
                            )}

                            {/* ✅ Right side: full width on video tab */}
                            <div
                                className={`w-full ${activeTab === "video"
                                    ? "max-w-3xl mx-auto"
                                    : "max-w-[520px]"
                                    }`}
                            >
                                <div className={`mb-3 ${activeTab === "video" ? "flex justify-center" : ""}`}>
                                    <svg
                                        className="h-14 w-14 text-orange-100"
                                        viewBox="0 0 64 64"
                                        fill="currentColor"
                                        aria-hidden="true"
                                    >
                                        <path d="M26 28c0-10 8-18 18-18v8c-6 0-10 4-10 10h10v24H26V28zm-24 0C2 18 10 10 20 10v8c-6 0-10 4-10 10h10v24H2V28z" />
                                    </svg>
                                </div>

                                {activeTab === "text" ? (
                                    <>
                                        <p className="text-[13px] leading-6 text-gray-500">
                                            {textTestimonials[safeIndex].text}
                                        </p>

                                        <div className="mt-6 flex items-center gap-3">
                                            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-orange-500 text-white">
                                                <svg
                                                    className="h-4 w-4"
                                                    viewBox="0 0 24 24"
                                                    fill="currentColor"
                                                    aria-hidden="true"
                                                >
                                                    <path d="M12 12a4.5 4.5 0 1 0-4.5-4.5A4.5 4.5 0 0 0 12 12Zm0 2c-4.2 0-7.5 2.2-7.5 5v1h15v-1c0-2.8-3.3-5-7.5-5Z" />
                                                </svg>
                                            </div>

                                            <div>
                                                <p className="text-[13px] font-bold text-gray-800">
                                                    {textTestimonials[safeIndex].author}
                                                </p>
                                                <p className="text-[11px] text-gray-500">
                                                    {textTestimonials[safeIndex].role}
                                                </p>
                                            </div>
                                        </div>
                                    </>
                                ) : (
                                    <>

                                        <p className="text-xl font-semibold text-gray-800">
                                            {videoTestimonials[safeIndex].title}
                                        </p>

                                        <div className="mt-4 overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-[0_10px_25px_rgba(0,0,0,0.06)]">
                                            <div className="relative w-full pt-[50%]">
                                                <iframe
                                                    className="absolute inset-0 h-full w-full"
                                                    src={`https://www.youtube-nocookie.com/embed/${videoTestimonials[safeIndex].youtubeId}?rel=0&modestbranding=1`}
                                                    title={videoTestimonials[safeIndex].title}
                                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                                    allowFullScreen
                                                />
                                            </div>
                                        </div>

                                        <div className="mt-6 flex items-center gap-3">
                                            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-orange-500 text-white">
                                                <svg
                                                    className="h-6 w-6"
                                                    viewBox="0 0 24 24"
                                                    fill="currentColor"
                                                    aria-hidden="true"
                                                >
                                                    <path d="M12 12a4.5 4.5 0 1 0-4.5-4.5A4.5 4.5 0 0 0 12 12Zm0 2c-4.2 0-7.5 2.2-7.5 5v1h15v-1c0-2.8-3.3-5-7.5-5Z" />
                                                </svg>
                                            </div>

                                            <div>
                                                <p className="text-base font-bold text-gray-800">
                                                    {videoTestimonials[safeIndex].author}
                                                </p>
                                                <p className="text-xs text-gray-500">
                                                    {videoTestimonials[safeIndex].role}
                                                </p>
                                            </div>
                                        </div>
                                    </>
                                )}

                                {/* Arrows */}
                                <div className="mt-2 flex items-center justify-center gap-6 text-gray-400">
                                    <button
                                        onClick={handlePrev}
                                        className="transition hover:text-orange-500"
                                        aria-label="Previous testimonial"
                                    >
                                        <svg
                                            className="h-7 w-7"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            aria-hidden="true"
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
                                            className="h-7 w-7"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            aria-hidden="true"
                                        >
                                            <path d="M9 6l6 6-6 6" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Dots */}
                        <div className="mt-6 flex justify-center gap-2">
                            {Array.from({ length: max }).map((_, i) => (
                                <button
                                    key={i}
                                    onClick={() => setCurrentIndex(i)}
                                    className={`h-2.5 w-2.5 rounded-full transition ${i === safeIndex
                                        ? "bg-orange-500"
                                        : "bg-gray-200 hover:bg-gray-300"
                                        }`}
                                    aria-label={`Go to ${activeTab} testimonial ${i + 1}`}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
