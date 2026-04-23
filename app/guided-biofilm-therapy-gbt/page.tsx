import type { Metadata } from "next";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import { getMetadataByPath } from "@/lib/metadata";
import Image from "next/image";

export async function generateMetadata(): Promise<Metadata> {
  return await getMetadataByPath("/guided-biofilm-therapy-gbt");
}
export default function GuidedBiofilmTherapyGb() {
  return (
    <div>
      <Navbar />
      <main>
        <div className="lg:my-5 my-3 lg:mx-24 mx-6 lg:mt-40 mt-36">

          <section className="relative z-0 lg:h-[420px] h-[300px] w-full overflow-hidden rounded-3xl">
            <Image
              src="/about-us/about-us-hero.png"
              alt="About Us banner"
              fill
              priority
              className="object-cover"
            />

            <div className="absolute inset-0 bg-black/20" />

            <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center px-6">
              <h1 className="text-white text-xl md:text-5xl font-semibold">
                Guided Biofilm Therapy (GBT)
              </h1>

            </div>


            <link href="/" className="absolute inset-0 z-10" aria-label="Go to Home" />


          </section>

        </div>

        <section className="mx-1 sm:mx-3 lg:mx-16 px-5 py-6 lg:px-8">
          <h2 className="text-lg lg:text-xl font-medium text-orange-600 leading-tight mb-4">
            Guided Biofilm Therapy (GBT)
          </h2>

          <p className="text-[#7f90a3] lg:text-base text-sm mt-2 leading-8">
            Guided Biofilm Therapy (GBT) is a systematic approach to professional tooth cleaning that uses a combination of air abrasion and ultrasonic technologies to remove biofilm, the sticky film of bacteria that forms on teeth and gums. GBT is based on the principle that biofilm is the primary cause of dental diseases such as caries and periodontal disease.
          </p>
          <h2 className="text-lg lg:text-xl font-medium text-orange-600 leading-tight mb-4">
            GBT Is Performed In Eight Steps:
          </h2>

          <span className="text-[#7f90a3] lg:text-base font-medium text-sm mt-2 leading-8">
            Disclosure:
          </span>


          <p className="text-[#7f90a3] lg:text-base text-sm mt-2 leading-8">
            The dentist or hygienist uses a disclosing solution to highlight biofilm on the patient’s teeth.
          </p>

          <div className="mt-2">
            <span className="block text-[#7f90a3] lg:text-base text-sm font-medium leading-8">
              Airflow:
            </span>
            <p className="text-[#7f90a3] lg:text-base text-sm leading-8">
              The dentist or hygienist uses an air abrasion device to remove biofilm from the supragingival (above the gumline) and subgingival (below the gumline) surfaces of the teeth.
            </p>
          </div>

          <div className="mt-2">
            <span className="block text-[#7f90a3] lg:text-base text-sm font-medium leading-8">
              Perioflow:
            </span>
            <p className="text-[#7f90a3] lg:text-base text-sm leading-8">
              The dentist or hygienist uses an ultrasonic device to remove biofilm from the periodontal pockets and other hard-to-reach areas.
            </p>
          </div>

          <div className="mt-2">
            <span className="block text-[#7f90a3] lg:text-base text-sm font-medium leading-8">
              Piezon:
            </span>
            <p className="text-[#7f90a3] lg:text-base text-sm leading-8">
              The dentist or hygienist uses an ultrasonic device to remove calculus (tartar) and biofilm from the teeth.
            </p>
          </div>

          <div className="mt-2">
            <span className="block text-[#7f90a3] lg:text-base text-sm font-medium leading-8">
              Polishing:
            </span>
            <p className="text-[#7f90a3] lg:text-base text-sm leading-8">
              The dentist or hygienist uses a polishing paste to remove any remaining stains and biofilm from the teeth.
            </p>
          </div>

          <div className="mt-2">
            <span className="block text-[#7f90a3] lg:text-base text-sm font-medium leading-8">
              Oral Hygiene Instruction:
            </span>
            <p className="text-[#7f90a3] lg:text-base text-sm leading-8">
              The dentist or hygienist provides the patient with personalized instructions on how to maintain good oral hygiene at home.
            </p>
          </div>

          <div className="mt-2">
            <span className="block text-[#7f90a3] lg:text-base text-sm font-medium leading-8">
              Risk Assessment:
            </span>
            <p className="text-[#7f90a3] lg:text-base text-sm leading-8">
              The dentist or hygienist assesses the patient’s risk of developing dental diseases and recommends a treatment schedule accordingly.
            </p>
          </div>

          <div className="mt-2">
            <span className="block text-[#7f90a3] lg:text-base text-sm font-medium leading-8">
              Recall:
            </span>
            <p className="text-[#7f90a3] lg:text-base text-sm leading-8">
              The patient is scheduled for regular GBT appointments to maintain good oral health.
            </p>
          </div>

          <span className="block text-[#7f90a3] lg:text-base text-sm font-medium leading-8">
            Recall:
          </span>


          <p className="text-[#7f90a3] lg:text-base text-sm mt-4 leading-8 mb-4">
            GBT is a minimally invasive and comfortable procedure for patients. It is also very effective at removing biofilm, which can help to prevent and treat dental diseases.  Benefits of Guided Biofilm Therapy
          </p>


          <h2 className="text-lg lg:text-xl font-medium text-orange-600 leading-tight mb-4">
            Guided Biofilm Therapy (GBT)
          </h2>

          <div className="mt-2">
            <span className="block text-[#7f90a3] lg:text-base text-sm font-medium leading-8">
              More Effective Biofilm Removal:
            </span>
            <p className="text-[#7f90a3] lg:text-base text-sm leading-8">
              GBT uses a combination of air abrasion and ultrasonic technologies to remove biofilm from all surfaces of the teeth, including hard-to-reach areas. This is more effective than traditional methods of professional tooth cleaning, which often miss biofilm in hidden areas.
            </p>
          </div>

          <div className="mt-2">
            <span className="block text-[#7f90a3] lg:text-base text-sm font-medium leading-8">
              Gentler On Teeth And Gums:
            </span>
            <p className="text-[#7f90a3] lg:text-base text-sm leading-8">
              GBT is a minimally invasive procedure that is gentle on teeth and gums. This is important for patients with sensitive teeth and gums, as well as for patients with periodontal disease.
            </p>
          </div>

          <div className="mt-2">
            <span className="block text-[#7f90a3] lg:text-base text-sm font-medium leading-8">
              More Comfortable For Patients:
            </span>
            <p className="text-[#7f90a3] lg:text-base text-sm leading-8">
              GBT is a comfortable procedure for patients. The air abrasion device is used with a water spray to keep the teeth and gums cool. The ultrasonic devices are also quiet and gentle.
            </p>
          </div>

          <div className="mt-2">
            <span className="block text-[#7f90a3] lg:text-base text-sm font-medium leading-8">
              More Predictable Results:
            </span>
            <p className="text-[#7f90a3] lg:text-base text-sm leading-8">
              GBT is a systematic approach to professional tooth cleaning that provides predictable results. This is because the procedure is based on the principle that biofilm is the primary cause of dental diseases.
              GBT for different patients
            </p>
          </div>



          <h2 className="text-lg lg:text-xl font-medium text-orange-600 leading-tight my-4">

            GBT Is Suitable For Patients of All Ages And With All Levels Of Periodontal Health. It Is Particularly Beneficial For Patients With:

          </h2>

          <div className="mt-2">
            <span className="block text-[#7f90a3] lg:text-base text-sm font-medium leading-8">
              Caries (tooth decay):
            </span>
            <p className="text-[#7f90a3] lg:text-base text-sm leading-8">
              GBT can help to prevent and treat caries by removing biofilm from the teeth.
            </p>
          </div>

          <div className="mt-2">
            <span className="block text-[#7f90a3] lg:text-base text-sm font-medium leading-8">
              Periodontal disease (gum disease):
            </span>
            <p className="text-[#7f90a3] lg:text-base text-sm leading-8">
              GBT can help to treat periodontal disease by removing biofilm from the periodontal pockets.
            </p>
          </div>

          <div className="mt-2">
            <span className="block text-[#7f90a3] lg:text-base text-sm font-medium leading-8">
              Sensitive teeth and gums:
            </span>
            <p className="text-[#7f90a3] lg:text-base text-sm leading-8">
              GBT is a gentle procedure that is suitable for patients with sensitive teeth and gums.
            </p>
          </div>

          <div className="mt-2">
            <span className="block text-[#7f90a3] lg:text-base text-sm font-medium leading-8">
              Orthodontic Appliances:
            </span>
            <p className="text-[#7f90a3] lg:text-base text-sm leading-8">
              GBT can be used to clean orthodontic appliances and remove biofilm buildup.
            </p>
          </div>

          <div className="mt-2">
            <span className="block text-[#7f90a3] lg:text-base text-sm font-medium leading-8">
              Dental Implants:
            </span>
            <p className="text-[#7f90a3] lg:text-base text-sm leading-8">
              GBT can be used to maintain the health of the gums around dental implants.
            </p>
          </div>

          <p className="text-[#7f90a3] lg:text-base text-sm my-4 leading-8">
            If you are looking for a more effective and comfortable way to clean your teeth, talk to your dentist about Guided Biofilm Therapy.
          </p>


          <ul className="space-y-3 text-[#7f90a3] lg:text-base text-sm leading-8 list-disc pl-5 marker:text-orange-600">
            <li>We have the potential to gather the subsequent information:</li>
            <li>Personal details like name and job title</li>
            <li>Contact information, including email address</li>
            <li>Demographic information, such as postcode, preferences, and interests</li>
            <li>Additional relevant information for customer surveys and/or offers</li>
          </ul>


        </section>

        <Footer />


      </main>
    </div>
  );
}