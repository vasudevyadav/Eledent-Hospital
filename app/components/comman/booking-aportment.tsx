"use client";

import Image from "next/image";
import ReCAPTCHA from "react-google-recaptcha";
import { useRouter } from "next/navigation";
import type { FC, ChangeEvent, FormEvent } from "react";
import { useRef, useState } from "react";

type Location = {
  id: string;
  city: string;
};

type FormDataType = {
  name: string;
  email: string;
  phone: string;
  date: string;
  locationId: string;
  message: string;
};

const RECAPTCHA_SITE_KEY = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || "";

const staticLocations: Location[] = [
  { id: "kondapur", city: "Kondapur" },
  { id: "kukatpally", city: "Kukatpally" },
  { id: "manikonda", city: "Manikonda" },
  { id: "banjara-hills", city: "Banjara Hills" },
  { id: "kompally", city: "Kompally" },
];

const BookingAportment: FC = () => {
  const router = useRouter();

  const [submitting, setSubmitting] = useState(false);
  const [captchaToken, setCaptchaToken] = useState<string | null>(null);

  const desktopRecaptchaRef = useRef<ReCAPTCHA>(null);
  const mobileRecaptchaRef = useRef<ReCAPTCHA>(null);

  const [formData, setFormData] = useState<FormDataType>({
    name: "",
    email: "",
    phone: "",
    date: "",
    locationId: "",
    message: "",
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;

    if (name === "phone") {
      const onlyNumbers = value.replace(/\D/g, "").slice(0, 10);
      setFormData((prev) => ({ ...prev, [name]: onlyNumbers }));
      return;
    }

    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const resetCaptcha = () => {
    desktopRecaptchaRef.current?.reset();
    mobileRecaptchaRef.current?.reset();
    setCaptchaToken(null);
  };

  const resetForm = () => {
    setFormData({
      name: "",
      email: "",
      phone: "",
      date: "",
      locationId: "",
      message: "",
    });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (
      !formData.name.trim() ||
      !formData.phone.trim() ||
      !formData.date ||
      !formData.locationId
    ) {
      alert("Name, phone, date and location are required.");
      return;
    }

    if (!/^[0-9]{10}$/.test(formData.phone)) {
      alert("Please enter a valid 10 digit phone number.");
      return;
    }

    if (!captchaToken) {
      alert("Please complete the reCAPTCHA verification.");
      return;
    }

    try {
      setSubmitting(true);

      const appointmentRes = await fetch("/api/appointments", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name.trim(),
          email: formData.email.trim(),
          phone: formData.phone.trim(),
          date: formData.date,
          locationId: formData.locationId,
          message: formData.message.trim(),
          captchaToken,
        }),
      });

      const appointmentData = await appointmentRes.json();

      if (!appointmentRes.ok) {
        alert(appointmentData?.message || "Failed to submit appointment.");
        resetCaptcha();
        return;
      }

      try {
        await fetch("/api/click-to-call", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            customer: formData.phone.trim(),
            locationId: formData.locationId,
          }),
        });
      } catch (clickError) {
        console.error("Click-to-call error after appointment:", clickError);
      }

      resetCaptcha();
      resetForm();
      router.push("/thankyou");
    } catch (error) {
      console.error("Submit error:", error);
      alert("Something went wrong while submitting.");
      resetCaptcha();
    } finally {
      setSubmitting(false);
    }
  };

  const today = new Date();
  const localToday = new Date(
    today.getTime() - today.getTimezoneOffset() * 60000
  )
    .toISOString()
    .split("T")[0];

  const LocationSelect = ({ id }: { id: string }) => (
    <div className="mt-4">
      <label
        htmlFor={id}
        className="block text-sm font-semibold text-gray-700 mb-2"
      >
        Location
      </label>

      <select
        id={id}
        name="locationId"
        value={formData.locationId}
        onChange={handleChange}
        className="w-full bg-white rounded-full px-6 py-3 text-sm outline-none shadow-[0_2px_20px_rgba(0,0,0,0.20)]"
      >
        <option value="" disabled>
          Select Location
        </option>

        {staticLocations.map((location) => (
          <option key={location.id} value={location.id}>
            {location.city}
          </option>
        ))}
      </select>
    </div>
  );

  return (
    <section className="lg:pb-20 pb-10 px-4 sm:px-8 lg:px-24 -mt-6">
      <div className="lg:max-w-7xl mx-auto relative">
        <div className="relative bg-[#F37021] lg:rounded-[20px] flex items-center px-10 overflow-visible">
          <div className="flex justify-center lg:w-[56%] lg:py-16 py-8 relative z-10">
            <div className="text-white max-w-[420px]">
              <p className="text-base mb-3">Don&apos;t Delay!</p>

              <h2 className="lg:text-4xl text-2xl font-bold leading-tight mb-4">
                Book Your Dental <br /> Appointment Today!
              </h2>

              <p className="text-[15px] opacity-90 mb-10">
                Tooth pain, missing teeth, or a smile concern should not wait.
                Our dental specialists help you understand the problem, explain
                the treatment clearly, and guide you toward the right solution.
              </p>

              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-full bg-black flex items-center justify-center text-white relative overflow-hidden">
                  <Image
                    src="/services-main/support.png"
                    alt="Support"
                    fill
                    unoptimized
                    className="object-cover rounded-full p-2"
                  />
                </div>

                <div>
                  <p className="text-sm font-medium mb-1">Support</p>
                  <p className="text-lg font-semibold">Call Our Dental Team</p>
                </div>
              </div>

              <div className="text-[15px] max-w-[300px]">
                <div className="w-full flex justify-between items-center gap-4">
                  <a
                    href="tel:+917799619994"
                    className="hover:underline transition"
                  >
                    Call
                  </a>

                  <a
                    href="tel:+917799619994"
                    className="hover:underline transition"
                  >
                    +91 7799619994
                  </a>
                </div>

                <hr className="h-[1px] bg-white/70 w-full my-2 border-0" />

                <div className="w-full flex justify-between">
                  <p>Mon–Sun</p>
                  <p>9:00am – 9:00pm</p>
                </div>
              </div>
            </div>
          </div>

          {/* Desktop Form */}
          <div className="lg:absolute right-10 top-1/2 lg:-translate-y-1/2 w-[440px] z-20 hidden lg:block">
            <form
              onSubmit={handleSubmit}
              className="relative rounded-[20px] shadow-2xl p-8 bg-white bg-[url('/about-us/aportment-details.png')] bg-cover bg-center bg-no-repeat"
            >
              <div className="relative z-10">
                <h3 className="lg:text-2xl font-semibold mb-7 text-gray-800">
                  Book An Appointment
                </h3>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="desktop-name"
                      className="block text-sm font-semibold text-gray-700 mb-2"
                    >
                      Name
                    </label>
                    <input
                      id="desktop-name"
                      name="name"
                      type="text"
                      placeholder="Full Name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full bg-white rounded-full px-6 py-3 text-sm outline-none shadow-[0_2px_20px_rgba(0,0,0,0.20)]"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="desktop-email"
                      className="block text-sm font-semibold text-gray-700 mb-2"
                    >
                      Email
                    </label>
                    <input
                      id="desktop-email"
                      name="email"
                      type="email"
                      placeholder="Email Address"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full bg-white rounded-full px-6 py-3 text-sm outline-none shadow-[0_2px_20px_rgba(0,0,0,0.20)]"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="desktop-phone"
                      className="block text-sm font-semibold text-gray-700 mb-2"
                    >
                      Phone
                    </label>
                    <input
                      id="desktop-phone"
                      name="phone"
                      type="tel"
                      inputMode="numeric"
                      maxLength={10}
                      placeholder="Phone Number"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full bg-white rounded-full px-6 py-3 text-sm outline-none shadow-[0_2px_20px_rgba(0,0,0,0.20)]"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="desktop-date"
                      className="block text-sm font-semibold text-gray-700 mb-2"
                    >
                      Date
                    </label>
                    <input
                      id="desktop-date"
                      name="date"
                      type="date"
                      min={localToday}
                      value={formData.date}
                      onChange={handleChange}
                      className="w-full bg-white rounded-full px-6 py-3 text-sm outline-none shadow-[0_2px_20px_rgba(0,0,0,0.20)]"
                    />
                  </div>
                </div>

                <LocationSelect id="desktop-location" />

                <div className="mt-4">
                  <label
                    htmlFor="desktop-message"
                    className="block text-sm font-semibold text-gray-700 mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="desktop-message"
                    name="message"
                    placeholder="Your Message"
                    rows={3}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full bg-white rounded-2xl px-4 py-3 text-sm outline-none resize-none shadow-[0_2px_20px_rgba(0,0,0,0.20)]"
                  />
                </div>

                <div className="mt-4 flex justify-center">
                  {RECAPTCHA_SITE_KEY ? (
                    <ReCAPTCHA
                      ref={desktopRecaptchaRef}
                      sitekey={RECAPTCHA_SITE_KEY}
                      onChange={(token) => setCaptchaToken(token)}
                      onExpired={() => setCaptchaToken(null)}
                    />
                  ) : (
                    <p className="text-sm text-red-500">
                      reCAPTCHA site key is missing.
                    </p>
                  )}
                </div>

                <div className="flex justify-center mt-4">
                  <button
                    type="submit"
                    disabled={
                      submitting || !captchaToken || !RECAPTCHA_SITE_KEY
                    }
                    className="bg-[#F37021] text-white px-10 py-3 rounded-full text-sm font-semibold shadow-lg hover:scale-105 transition disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {submitting ? "Submitting..." : "Book Appointment"}
                  </button>
                </div>
              </div>
            </form>
          </div>

          <div className="absolute right-0 top-0 h-full w-[90px] rounded-r-[20px] bg-[#F37021] z-0 pointer-events-none" />
        </div>

        {/* Mobile Form */}
        <div className="z-20 lg:hidden block">
          <form
            onSubmit={handleSubmit}
            className="relative shadow-2xl p-8 bg-white bg-[url('/about-us/aportment-details.png')] bg-cover bg-center bg-no-repeat"
          >
            <div className="relative z-10">
              <h3 className="lg:text-2xl font-semibold mb-7 text-gray-800">
                Book An Appointment
              </h3>

              <div className="grid grid-cols-1 gap-4">
                <div>
                  <label
                    htmlFor="mobile-name"
                    className="block text-sm font-semibold text-gray-700 mb-2"
                  >
                    Name
                  </label>
                  <input
                    id="mobile-name"
                    name="name"
                    type="text"
                    placeholder="Full Name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-white rounded-full px-6 py-3 text-sm outline-none shadow-[0_2px_20px_rgba(0,0,0,0.20)]"
                  />
                </div>

                <div>
                  <label
                    htmlFor="mobile-email"
                    className="block text-sm font-semibold text-gray-700 mb-2"
                  >
                    Email
                  </label>
                  <input
                    id="mobile-email"
                    name="email"
                    type="email"
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-white rounded-full px-6 py-3 text-sm outline-none shadow-[0_2px_20px_rgba(0,0,0,0.20)]"
                  />
                </div>

                <div>
                  <label
                    htmlFor="mobile-phone"
                    className="block text-sm font-semibold text-gray-700 mb-2"
                  >
                    Phone
                  </label>
                  <input
                    id="mobile-phone"
                    name="phone"
                    type="tel"
                    inputMode="numeric"
                    maxLength={10}
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full bg-white rounded-full px-6 py-3 text-sm outline-none shadow-[0_2px_20px_rgba(0,0,0,0.20)]"
                  />
                </div>

                <div>
                  <label
                    htmlFor="mobile-date"
                    className="block text-sm font-semibold text-gray-700 mb-2"
                  >
                    Date
                  </label>
                  <input
                    id="mobile-date"
                    name="date"
                    type="date"
                    min={localToday}
                    value={formData.date}
                    onChange={handleChange}
                    className="w-full bg-white rounded-full px-6 py-3 text-sm outline-none shadow-[0_2px_20px_rgba(0,0,0,0.20)]"
                  />
                </div>
              </div>

              <LocationSelect id="mobile-location" />

              <div className="mt-4">
                <label
                  htmlFor="mobile-message"
                  className="block text-sm font-semibold text-gray-700 mb-2"
                >
                  Message
                </label>
                <textarea
                  id="mobile-message"
                  name="message"
                  placeholder="Your Message"
                  rows={3}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full bg-white rounded-2xl px-4 py-3 text-sm outline-none resize-none shadow-[0_2px_20px_rgba(0,0,0,0.20)]"
                />
              </div>

              <div className="mt-4 flex justify-center">
                {RECAPTCHA_SITE_KEY ? (
                  <ReCAPTCHA
                    ref={mobileRecaptchaRef}
                    sitekey={RECAPTCHA_SITE_KEY}
                    onChange={(token) => setCaptchaToken(token)}
                    onExpired={() => setCaptchaToken(null)}
                  />
                ) : (
                  <p className="text-sm text-red-500">
                    reCAPTCHA site key is missing.
                  </p>
                )}
              </div>

              <div className="flex justify-center mt-4">
                <button
                  type="submit"
                  disabled={submitting || !captchaToken || !RECAPTCHA_SITE_KEY}
                  className="bg-[#F37021] text-white px-10 py-3 rounded-full text-sm font-semibold shadow-lg hover:scale-105 transition disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {submitting ? "Submitting..." : "Book Appointment"}
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default BookingAportment;