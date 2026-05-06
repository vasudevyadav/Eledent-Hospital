"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import type { JSX, PointerEvent } from "react";

type BeforeAfterItem = {
    beforeSrc: string;
    afterSrc: string;
    alt?: string;
};

export default function AfterBefore(): JSX.Element {
    const beforeAfterItems: BeforeAfterItem[] = [
        {
            beforeSrc: "/services/chose-plan-image-1.png",
            afterSrc: "/services/chose-plan-image.png",
            alt: "Dental implant case 1",
        },
        {
            beforeSrc: "/services/chose-plan-image-1.png",
            afterSrc: "/services/chose-plan-image.png",
            alt: "Dental implant case 2",
        },
        {
            beforeSrc: "/services/chose-plan-image-1.png",
            afterSrc: "/services/chose-plan-image.png",
            alt: "Dental implant case 3",
        },
    ];

    return (
        <section className="w-full bg-white pb-10">
            <div className="mx-auto max-w-7xl px-6">
                <div className="mt-6">
                    <div className="rounded-[20px] bg-[#f3f4f6] px-8 py-8 shadow-[0_8px_32px_-12px_rgba(15,23,42,0.15)]">
                        <div className="mb-8 text-center">
                            <h2 className="text-3xl font-bold text-primary">Before and After</h2>
                            <p className="mt-1 text-xl font-bold text-black">Eledent Dental Implants</p>
                        </div>

                        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
                            {beforeAfterItems.map((item, idx) => (
                                <BeforeAfterCard key={idx} {...item} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

/* ─── Before & After Card (LIKE YOUR VIDEO: ONLY CENTER HANDLE, NO BOTTOM SLIDER) ─── */
function BeforeAfterCard({ beforeSrc, afterSrc, alt }: BeforeAfterItem): JSX.Element {
    const [pos, setPos] = useState(50); // start center
    const wrapRef = useRef<HTMLDivElement | null>(null);

    const clamp = (n: number) => Math.min(100, Math.max(0, n));

    const setFromClientX = (clientX: number) => {
        const el = wrapRef.current;
        if (!el) return;

        const rect = el.getBoundingClientRect();
        const pct = ((clientX - rect.left) / rect.width) * 100;
        setPos(clamp(pct));
    };

    const onHandlePointerDown = (e: PointerEvent<HTMLButtonElement>) => {
        const btn = e.currentTarget;
        btn.setPointerCapture(e.pointerId);
        setFromClientX(e.clientX);
    };

    const onHandlePointerMove = (e: PointerEvent<HTMLButtonElement>) => {
        const btn = e.currentTarget;
        if (!btn.hasPointerCapture(e.pointerId)) return;
        setFromClientX(e.clientX);
    };

    const onHandlePointerUp = (e: PointerEvent<HTMLButtonElement>) => {
        const btn = e.currentTarget;
        if (btn.hasPointerCapture(e.pointerId)) btn.releasePointerCapture(e.pointerId);
    };

    return (
        <div
            ref={wrapRef}
            className="relative h-80 overflow-hidden rounded-2xl bg-white shadow-md"
            aria-label={`Before and After${alt ? `: ${alt}` : ""}`}
        >
            {/* BEFORE (left part up to divider) */}
            <div
                className="absolute inset-0"
                style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}
                aria-hidden="true"
            >
                <Image
                    src={beforeSrc}
                    alt={alt ? `Before - ${alt}` : "Before"}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover"
                />
            </div>

            {/* AFTER (right part from divider) */}
            <div
                className="absolute inset-0"
                style={{ clipPath: `inset(0 0 0 ${pos}%)` }}
                aria-hidden="true"
            >
                <Image
                    src={afterSrc}
                    alt={alt ? `After - ${alt}` : "After"}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover"
                />
            </div>

            {/* Divider line */}
            <div
                className="pointer-events-none absolute inset-y-0"
                style={{ left: `${pos}%` }}
                aria-hidden="true"
            >
                <div className="h-full w-[2px] bg-white/90" />
            </div>

            {/* Center handle (ONLY THIS DRAGS) */}
            <div
                className="absolute top-1/2"
                style={{ left: `${pos}%`, transform: "translate(-50%, -50%)" }}
            >
                <button
                    type="button"
                    aria-label="Drag to compare before and after"
                    onPointerDown={onHandlePointerDown}
                    onPointerMove={onHandlePointerMove}
                    onPointerUp={onHandlePointerUp}
                    onPointerCancel={onHandlePointerUp}
                    className="flex h-9 w-9 items-center justify-center rounded-full bg-[#facc15] shadow-[0_6px_16px_rgba(0,0,0,0.22)]"
                    style={{ touchAction: "none" }} // important for mobile drag
                >
                    {/* small left-right arrows like the sample */}
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#111827"
                        strokeWidth="2.2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-5 w-5"
                    >
                        <path d="M10 8l-4 4 4 4" />
                        <path d="M14 8l4 4-4 4" />
                    </svg>
                </button>
            </div>
        </div>
    );
}
