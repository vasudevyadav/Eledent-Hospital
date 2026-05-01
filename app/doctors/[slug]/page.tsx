import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import DoctorDetail from "../../components/doctors/doctor-detail";
import { DOCTORS } from "@/lib/doctors-data";
import BookingAportment from "@/app/components/comman/booking-aportment";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
    return DOCTORS.map((d) => ({ slug: d.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;
    const doctor = DOCTORS.find((d) => d.slug === slug);
    if (!doctor) return {};
    return {
        title: `${doctor.name} | Eledent Dental Hospital`,
        description: `${doctor.name}, ${doctor.education} – ${doctor.post} with ${doctor.experience} at Eledent Dental Hospital, ${doctor.branch}.`,
    };
}

export default async function DoctorPage({ params }: Props) {
    const { slug } = await params;
    const doctor = DOCTORS.find((d) => d.slug === slug);
    if (!doctor) notFound();

    return (
        <div>
            <Navbar />
            <main>
                <DoctorDetail doctor={doctor} />
                <div className="my-10 mt-28">
                    <BookingAportment />
                </div>
                <Footer />
            </main>
        </div>
    );
}
