"use client";
import Image from "next/image";
import Link from "next/link";
import { DOCTORS, type Doctor } from "@/lib/doctors-data";

function DoctorCard({ doctor }: { doctor: Doctor }) {
    const initials = doctor.name
        .replace("Dr. ", "")
        .split(" ")
        .map((n) => n[0])
        .join("")
        .slice(0, 2);

    return (
        <Link href={`/doctors/${doctor.slug}`} className="group block bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            {/* Image area */}
            <div className="relative h-64 w-full bg-gradient-to-br from-orange-50 to-orange-100 overflow-hidden">
                {doctor.image ? (
                    <Image
                        src={doctor.image}
                        alt={doctor.name}
                        fill
                        className="object-cover object-top group-hover:scale-105 transition-transform duration-300"
                    />
                ) : (
                    <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-5xl font-bold text-orange-300">{initials}</span>
                    </div>
                )}
            </div>

            {/* Info area */}
            <div className="p-5">
                <h3 className="text-xl font-bold text-slate-900 leading-tight my-1">
                    {doctor.name}
                </h3>
                <p className="mt-2 text-sm text-[#f47200] font-semibold uppercase tracking-wide">
                    {doctor.post}
                </p>
                <div className="mt-3 flex items-start gap-2">
                    <span className="mt-0.5 h-4 w-4 shrink-0 rounded-full bg-orange-100 flex items-center justify-center">
                        <span className="h-1.5 w-1.5 rounded-full bg-[#f47200]" />
                    </span>
                    <p className="text-sm text-slate-500 font-medium leading-relaxed">
                        {doctor.education} · {doctor.experience}
                    </p>
                </div>
            </div>
        </Link>
    );
}

export default function DoctorsList() {
    return (
        <section className="w-full bg-white py-6 lg:py-6 mb-8">
            <div className="mx-auto max-w-7xl px-6 lg:px-2">

                <div className="text-center mb-10 lg:mb-14">
                    <span className="inline-flex bg-[#f47200] px-3 py-1.5 text-sm font-semibold tracking-[0.14em] text-white">
                        Expert Team
                    </span>
                    <h2 className="mt-4 text-2xl font-semibold text-slate-900 sm:text-3xl lg:text-4xl">
                        Meet Our Specialist Doctors
                    </h2>
                    <p className="mt-3 max-w-3xl mx-auto text-sm text-slate-600 leading-relaxed">
                        Our team of experienced dental specialists is dedicated to providing you with the highest quality of care across all dental disciplines.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {DOCTORS.map((doctor, idx) => (
                        <DoctorCard key={idx} doctor={doctor} />
                    ))}
                </div>

            </div>
        </section>
    );
}
