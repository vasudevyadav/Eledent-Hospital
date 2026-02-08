"use client";

import Image from "next/image";
import type { JSX } from "react";

type BlogCard = {
    img: string;
    date: string;
    title: string;
    desc: string;
    author: string;
};

export default function BlogMain(): JSX.Element {
    const cards: BlogCard[] = [
        {
            img: "/home/blog-1.jpg",
            date: "Sep 19, 2020",
            title: "What is The Success rate of a root canal?",
            desc: "Nullam mauris vitae tortor sodales efficitur. Quisque orci ante. Proin amet turpis",
            author: "Admin Rose",
        },
        {
            img: "/home/blog-2.jpg",
            date: "Sep 19, 2020",
            title: "How to handle your kids’ mystery ailments?",
            desc: "Nullam mauris vitae tortor sodales efficitur. Quisque orci ante. Proin amet turpis",
            author: "Admin Rose",
        },
        {
            img: "/home/blog-3.jpg",
            date: "Sep 19, 2020",
            title: "How to help the cardiology department",
            desc: "Nullam mauris vitae tortor sodales efficitur. Quisque orci ante. Proin amet turpis",
            author: "Admin Rose",
        },
    ];

    return (
        <section className="w-full bg-white py-24">
            <div className="mx-auto max-w-[1120px] px-6">
                {/* Heading */}
                <div className="text-center">
                    <span className="inline-flex items-center justify-center rounded-[2px] bg-[#f47200] px-[10px] py-[3px] text-[11px] font-semibold leading-none text-white">
                        Our
                    </span>
                    <h2 className="mt-3 text-[30px] font-semibold leading-none text-slate-700">Blog</h2>
                </div>

                {/* Cards */}
                <div className="mt-14 grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
                    {cards.map((c, idx) => (
                        <article
                            key={idx}
                            className="rounded-[10px] bg-white shadow-[0_18px_50px_-34px_rgba(15,23,42,0.35)]"
                        >
                            {/* Image block (with inner padding like screenshot) */}
                            <div className="px-6 pt-6">
                                <div className="relative overflow-hidden rounded-[10px]">
                                    <div className="relative h-[180px] w-full">
                                        <Image
                                            src={c.img}
                                            alt={c.title}
                                            fill
                                            sizes="(max-width: 1024px) 100vw, 360px"
                                            className="object-cover"
                                            priority={idx === 0}
                                        />
                                    </div>

                                    {/* Date badge */}
                                    <div className="absolute bottom-0 right-0 rounded-tl-[6px] bg-[#f47200] px-4 py-2 text-[11px] font-medium text-white">
                                        {c.date}
                                    </div>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="px-6 pb-5 pt-5">
                                <h3 className="text-[14px] font-semibold leading-snug text-[#f47200]">{c.title}</h3>
                                <p className="mt-3 text-[12.5px] leading-relaxed text-slate-500">{c.desc}</p>

                                {/* Divider like screenshot */}
                                <div className="mt-6 border-t border-slate-200/70" />

                                {/* Footer */}
                                <div className="mt-4 flex items-center justify-between text-[11px] text-slate-500">
                                    <span>
                                        By <span className="text-slate-600">{c.author}</span>
                                    </span>

                                    <div className="flex items-center gap-4 text-[#f47200]">
                                        {/* heart */}
                                        <div className="flex items-center gap-1">
                                            <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" aria-hidden="true">
                                                <path
                                                    d="M12 20s-7-4.5-7-10.2C5 7.1 6.7 5.5 9 5.5c1.4 0 2.6.7 3 1.8.4-1.1 1.6-1.8 3-1.8 2.3 0 4 1.6 4 4.3C19 15.5 12 20 12 20Z"
                                                    stroke="currentColor"
                                                    strokeWidth={1.6}
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                            </svg>
                                            <span className="text-[10px] text-slate-400">0</span>
                                        </div>

                                        {/* comment */}
                                        <div className="flex items-center gap-1">
                                            <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" aria-hidden="true">
                                                <path
                                                    d="M21 15a4 4 0 0 1-4 4H8l-5 3V7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4v8Z"
                                                    stroke="currentColor"
                                                    strokeWidth={1.6}
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                            </svg>
                                            <span className="text-[10px] text-slate-400">0</span>
                                        </div>

                                        {/* share (no circle, simple icon like screenshot) */}
                                        <button
                                            type="button"
                                            aria-label="Share"
                                            className="inline-flex items-center justify-center"
                                        >
                                            <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" aria-hidden="true">
                                                <path d="M12 5v12" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" />
                                                <path
                                                    d="M8.5 8.5 12 5l3.5 3.5"
                                                    stroke="currentColor"
                                                    strokeWidth={1.6}
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                                <path d="M6 19h12" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" />
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}
