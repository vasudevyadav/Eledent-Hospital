import type { Metadata } from "next";
import Navbar from "../components/Navbar";
import { getMetadataByPath } from "@/lib/metadata";


export async function generateMetadata(): Promise<Metadata> {
  return await getMetadataByPath("/thankyou");
}

export default function ThankYou() {
  return (
    <div>
      <Navbar />
      <main className="my-44">
        <p className="text-red-500  text-2xl">
          Thank You
        </p>

      </main>
    </div>
  );
}