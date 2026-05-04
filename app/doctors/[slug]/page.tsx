import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import DoctorDetail from "../../components/doctors/doctor-detail";
import BookingAportment from "@/app/components/comman/booking-aportment";
import { DOCTORS } from "@/lib/doctors-data";
import { fetchDoctor, fetchDoctors } from "@/lib/doctors-api";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
    const apiDoctors = await fetchDoctors();
    if (apiDoctors.length > 0) {
        return apiDoctors.map((d) => ({ slug: d.slug }));
    }
    return DOCTORS.map((d) => ({ slug: d.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;
    const data = await fetchDoctor(slug);
    if (data?.seo.title) {
        return {
            title: data.seo.title,
            description: data.seo.description,
        };
    }
    const fallback = DOCTORS.find((d) => d.slug === slug);
    if (fallback) {
        return {
            title: `${fallback.name} | Eledent Dental Hospital`,
            description: `${fallback.name}, ${fallback.education} – ${fallback.post} with ${fallback.experience} at Eledent Dental Hospital, ${fallback.branch}.`,
        };
    }
    return {};
}

export default async function DoctorPage({ params }: Props) {
    const { slug } = await params;
    const apiData = await fetchDoctor(slug);

    if (!apiData) notFound();

    const staticDoctor = DOCTORS.find((d) => d.slug === slug);

    return (
        <div>
            <Navbar />
            <main>
                <DoctorDetail apiData={apiData} staticDoctor={staticDoctor} />
                <div className="my-10 mt-28">
                    <BookingAportment />
                </div>
                <Footer />
            </main>
        </div>
    );
}
