import Image from "next/image";
import Link from "next/link";
import type { DoctorListItem } from "@/lib/doctors-api";

function FacebookIcon() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
        </svg>
    );
}

function InstagramIcon() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
        </svg>
    );
}

function LinkedInIcon() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
    );
}

function DoctorCard({ doctor }: { doctor: DoctorListItem }) {
    const initials = doctor.name
        .replace("Dr. ", "")
        .split(" ")
        .map((n) => n[0])
        .join("")
        .slice(0, 2);

    const hasSocial = (doctor.facebook && doctor.facebook !== "#") ||
        (doctor.instagram && doctor.instagram !== "#") ||
        (doctor.linkedin && doctor.linkedin !== "#");

    return (
        <div className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <Link href={`/doctors/${doctor.slug}`} className="block">
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

                <div className="p-5 pb-3">
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
                            {doctor.education.trim()} · {doctor.post}
                        </p>
                    </div>
                </div>
            </Link>

            {hasSocial && (
                <div className="px-5 pb-4 flex items-center gap-3 mt-1">
                    {doctor.facebook && doctor.facebook !== "#" && (
                        <a href={doctor.facebook} target="_blank" rel="noopener noreferrer"
                            className="text-slate-400 hover:text-[#1877F2] transition-colors duration-200">
                            <FacebookIcon />
                        </a>
                    )}
                    {doctor.instagram && doctor.instagram !== "#" && (
                        <a href={doctor.instagram} target="_blank" rel="noopener noreferrer"
                            className="text-slate-400 hover:text-[#E1306C] transition-colors duration-200">
                            <InstagramIcon />
                        </a>
                    )}
                    {doctor.linkedin && doctor.linkedin !== "#" && (
                        <a href={doctor.linkedin} target="_blank" rel="noopener noreferrer"
                            className="text-slate-400 hover:text-[#0A66C2] transition-colors duration-200">
                            <LinkedInIcon />
                        </a>
                    )}
                </div>
            )}
        </div>
    );
}

export default function DoctorsList({ doctors }: { doctors: DoctorListItem[] }) {
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
                    {doctors.map((doctor, idx) => (
                        <DoctorCard key={idx} doctor={doctor} />
                    ))}
                </div>

            </div>
        </section>
    );
}
