"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function InitialLoader({
    children,
}: {
    children: React.ReactNode;
}) {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 1500); // loader duration

        return () => clearTimeout(timer);
    }, []);

    if (loading) {
        return (
            <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black opacity-75">
                <div className="flex flex-col items-center gap-3">
                    <div className="relative h-28 w-28">
                        <div className="absolute inset-0 rounded-full  bg-white border-2 border-[#f2c3a5]"></div>
                        <div className="absolute inset-0 rounded-full border-4 border-[#E87733] border-t-transparent animate-spin"></div>

                        <div className="absolute inset-2 flex items-center justify-center rounded-full bg-white">
                            <Image
                                src="/loder-logo.png"
                                alt="Loading"
                                width={50}
                                height={50}
                                className="object-contain"
                                priority
                            />
                        </div>
                    </div>


                </div>
            </div>
        );
    }

    return <>{children}</>;
}