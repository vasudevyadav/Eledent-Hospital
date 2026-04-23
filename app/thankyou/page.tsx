import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2, Home, PhoneCall, CalendarDays } from "lucide-react";
import Navbar from "../components/Navbar";
import { getMetadataByPath } from "@/lib/metadata";

export async function generateMetadata(): Promise<Metadata> {
  return await getMetadataByPath("/thankyou");
}

export default function ThankYou() {
  return (
    <div className=" bg-[#fff8f4]">
      <Navbar />

      <main className="relative overflow-hidden pt-36 lg:pb-3 pb-20">
        <div className="absolute inset-0 opacity-[0.04]">
          <div className=" w-full bg-[radial-gradient(circle_at_top_left,_#E87733_0,_transparent_35%),radial-gradient(circle_at_bottom_right,_#e46d2b_0,_transparent_35%)]" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-5xl lg:rounded-[28px] rounded-2xl border border-[#f2d4c3] bg-white shadow-[0_20px_60px_rgba(232,119,51,0.12)]">
            <div className="rounded-t-2xl lg:rounded-t-[28px] bg-gradient-to-r from-[#e46d2b] to-[#E87733] px-6 py-6 text-white sm:px-10">
              <div className="flex flex-col items-center text-center">
                <div className="mb-2 flex h-20 w-20 items-center justify-center rounded-full bg-white/15 backdrop-blur-sm">
                  <CheckCircle2 className="h-14 w-14" />
                </div>


                <h1 className="text-xl font-semibold leading-tight sm:text-3xl">
                  Thank You! Appointment Request Submitted
                </h1>

              </div>
            </div>

            <div className="px-6 py-8 sm:px-10 sm:py-6">
              <div className="grid gap-4 sm:grid-cols-3">
                <div className="rounded-2xl border border-[#f3e1d6] bg-[#fffaf7] p-5 text-center">
                  <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-[#E87733]/10">
                    <CalendarDays className="h-6 w-6 text-[#E87733]" />
                  </div>
                  <h2 className="text-base font-semibold text-[#1f2937]">
                    Request Received
                  </h2>
                  <p className="mt-2 text-sm leading-6 text-[#6b7280]">
                    Your form has been submitted successfully to our team.
                  </p>
                </div>

                <div className="rounded-2xl border border-[#f3e1d6] bg-[#fffaf7] p-5 text-center">
                  <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-[#E87733]/10">
                    <PhoneCall className="h-6 w-6 text-[#E87733]" />
                  </div>
                  <h2 className="text-base font-semibold text-[#1f2937]">
                    Quick Follow-Up
                  </h2>
                  <p className="mt-2 text-sm leading-6 text-[#6b7280]">
                    Our support team will call you during working hours.
                  </p>
                </div>

                <div className="rounded-2xl border border-[#f3e1d6] bg-[#fffaf7] p-5 text-center">
                  <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-[#E87733]/10">
                    <Home className="h-6 w-6 text-[#E87733]" />
                  </div>
                  <h2 className="text-base font-semibold text-[#1f2937]">
                    Visit Anytime
                  </h2>
                  <p className="mt-2 text-sm leading-6 text-[#6b7280]">
                    Explore our services, doctors, and clinic locations meanwhile.
                  </p>
                </div>
              </div>

              <div className="mt-4 rounded-2xl border border-[#f3e1d6] bg-[#fffaf7] p-6 text-center">
                <h3 className="text-xl font-semibold text-[#1f2937]">
                  Need immediate assistance?
                </h3>
                <p className="mt-2 text-sm leading-6 text-[#6b7280] sm:text-base">
                  For urgent queries, feel free to call us directly during clinic
                  hours from <span className="font-medium text-[#374151]">09:00 AM to 09:00 PM</span>.
                </p>

                <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
                  <a
                    href="tel:+917799619994"
                    className="inline-flex items-center justify-center rounded-xl bg-[#E87733] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#d96728]"
                  >
                    <PhoneCall className="mr-2 h-4 w-4" />
                    Call Now
                  </a>

                  <Link
                    href="/"
                    className="inline-flex items-center justify-center rounded-xl border border-[#E87733] px-6 py-3 text-sm font-semibold text-[#E87733] transition hover:bg-[#fff1e8]"
                  >
                    <Home className="mr-2 h-4 w-4" />
                    Back To Home
                  </Link>
                </div>
              </div>

              <div className="mt-8 text-center">
                <p className="text-sm text-[#6b7280]">
                  Thank you for choosing{" "}
                  <a href="/" className="font-semibold text-[#E87733]">
                    Eledent Hospitals
                  </a>
                  . We look forward to helping you smile better.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}