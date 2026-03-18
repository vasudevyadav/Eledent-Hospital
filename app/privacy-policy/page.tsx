import type { Metadata } from "next";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import PrivacyDetails from "../components/privacy-policy/privacy-details";
import PrivacyHero from "../components/privacy-policy/privacy-hero";
import { getMetadataByPath } from "@/lib/metadata";

export const metadata: Metadata = getMetadataByPath("/privacy-policy");

export default function PrivacyPolicy() {
  return (
    <div>
      <Navbar />
      <main>
        <PrivacyHero />
        <PrivacyDetails />
        <Footer />
      </main>
    </div>
  );
}