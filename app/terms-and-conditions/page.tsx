import type { Metadata } from "next";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import TermsHero from "../components/terms-and-conditions/terms-hero";
import TermsDetails from "../components/terms-and-conditions/terms-details";
import { getMetadataByPath } from "@/lib/metadata";

export async function generateMetadata(): Promise<Metadata> {
  return await getMetadataByPath("/terms-and-conditions");
}
export default function TermsConditions() {
  return (
    <div>
      <Navbar />
      <main>
        <TermsHero />
        <TermsDetails />
        <Footer />
      </main>
    </div>
  );
}