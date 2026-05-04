import type { Metadata } from "next";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import DoctorsHero from "../components/doctors/doctors-hero";
import DoctorsList from "../components/doctors/doctors-list";
import BookingAportment from "../components/comman/booking-aportment";
import { fetchDoctors } from "@/lib/doctors-api";

export const metadata: Metadata = {
    title: "Our Doctors | Eledent Dental Hospital",
    description: "Meet our team of experienced dental specialists at Eledent Dental Hospital, Hyderabad.",
};

export default async function DoctorsPage() {
    const doctors = await fetchDoctors();

    return (
        <div>
            <Navbar />
            <main>
                <DoctorsHero />
                {doctors.length > 0 && <DoctorsList doctors={doctors} />}
                <div className="my-10 mt-28">
                    <BookingAportment />
                </div>
                <Footer />
            </main>
        </div>
    );
}
