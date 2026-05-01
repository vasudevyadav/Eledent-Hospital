"use client";
import Image from "next/image";

export default function DoctorsHero() {
    return (
        <div className="lg:my-6 my-4 lg:mx-24 mx-6 lg:mt-40 mt-36">
            <section className="relative z-0 lg:h-[500px] h-[300px] w-full overflow-hidden rounded-3xl">
                <Image
                    src="/about-us/about-us.jpg"
                    alt="Our Doctors banner"
                    fill
                    priority
                    className="object-cover"
                />

                <div className="absolute inset-0 bg-black/75" />

                <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center px-6">

                    <h1 className="text-white text-4xl md:text-5xl font-semibold">
                        Our Doctors
                    </h1>

                </div>
            </section>

            <div>
                <p className="text-gray-700 text-sm md:text-base my-10">
                    At Eledent Dental Hospital, our doctors bring together experience, focused dental specialities, patient-friendly and painless treatment care across Kondapur, Kukatpally, Manikonda, Banjara Hills and Kompally. The team includes general dentists, endodontists, prosthodontists, orthodontists, implantologists, periodontists, pedodontists, oral and maxillofacial surgeons and cosmetic dentists.
                    <br />
                    <br />

                    With 19+ years of experience and 30,000+ smiles treated, doctors at Eledent Dental Hospital helps patients with routine dental care as well as advanced treatments, with honest pricing and clear treatment explanation, under one roof. Every consultation focuses on clear diagnosis, simple explanations, hygiene, comfort and long-term oral health.


                </p>
            </div>
        </div>
    );
}
