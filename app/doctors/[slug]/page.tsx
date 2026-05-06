import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import DoctorDetail from "../../components/doctors/doctor-detail";
import BookingAportment from "@/app/components/comman/booking-aportment";
import { DOCTORS } from "@/lib/doctors-data";
import { fetchDoctor, fetchDoctors } from "@/lib/doctors-api";
import type { DoctorAPIData } from "@/lib/doctors-api";

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
    const listDoctors = await fetchDoctors();
    const listDoctor = listDoctors.find((d) => d.slug === slug);
    const fallback = listDoctor || DOCTORS.find((d) => d.slug === slug);
    if (fallback) {
        return {
            title: `${fallback.name} | Eledent Dental Hospital`,
            description: `${fallback.name}, ${fallback.education} – ${fallback.post} at Eledent Dental Hospital.`,
        };
    }
    return {};
}

function buildFallbackApiData(doctor: { name: string; education: string; post: string; image: string }, slug: string, branch = ""): DoctorAPIData {
    return {
        id: 0,
        basicInfo: {
            name: doctor.name,
            slug,
            education: doctor.education,
            designation: doctor.post,
            experience: "",
            profileImage: doctor.image,
        },
        clinicInfo: { branch, consultationFee: "", visitingDays: "", visitingTime: "" },
        contactInfo: { phone: "", email: "", website: "" },
        professionalInfo: { languages: [], expertise: [] },
        offers: { medibuddyDiscount: "" },
        seo: { title: `${doctor.name} | Eledent Dental Hospital`, description: "" },
    };
}

export default async function DoctorPage({ params }: Props) {
    const { slug } = await params;

    const [apiData, listDoctors] = await Promise.all([
        fetchDoctor(slug),
        fetchDoctors(),
    ]);

    const staticDoctor = DOCTORS.find((d) => d.slug === slug);
    const listDoctor = listDoctors.find((d) => d.slug === slug);

    const resolvedApiData: DoctorAPIData | null =
        apiData ??
        (listDoctor
            ? buildFallbackApiData(listDoctor, slug, staticDoctor?.branch ?? "")
            : staticDoctor
            ? buildFallbackApiData(
                  { name: staticDoctor.name, education: staticDoctor.education, post: staticDoctor.post, image: staticDoctor.image ?? "" },
                  slug,
                  staticDoctor.branch
              )
            : null);

    if (!resolvedApiData) notFound();

    return (
        <div>
            <Navbar />
            <main>
                <DoctorDetail apiData={resolvedApiData} staticDoctor={staticDoctor} />
                <div className="my-10 mt-28">
                    <BookingAportment />
                </div>
                <Footer />
            </main>
        </div>
    );
}
