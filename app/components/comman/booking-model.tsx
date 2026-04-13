"use client";

import ReCAPTCHA from "react-google-recaptcha";
import type { FC, ChangeEvent, FormEvent } from "react";
import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";

type Location = {
  id: string;
  city: string;
  href: string;
  addressLines: string[];
  mapEmbedSrc: string;
};

type LocationApiResponse = {
  success: boolean;
  count: number;
  data: Location[];
};

type FormDataType = {
  name: string;
  email: string;
  phone: string;
  date: string;
  locationId: string;
  message: string;
};

type BookingModelProps = {
  closeModal: () => void;
};

const RECAPTCHA_SITE_KEY =
  process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || "";

const BookingModel: FC<BookingModelProps> = ({ closeModal }) => {
  const router = useRouter();

  const [locations, setLocations] = useState<Location[]>([]);
  const [loadingLocations, setLoadingLocations] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [captchaToken, setCaptchaToken] = useState<string | null>(null);

  const recaptchaRef = useRef<ReCAPTCHA>(null);

  const [formData, setFormData] = useState<FormDataType>({
    name: "",
    email: "",
    phone: "",
    date: "",
    locationId: "",
    message: "",
  });

  useEffect(() => {
    const fetchLocations = async () => {
      try {
        setLoadingLocations(true);

        const baseUrl =
          process.env.NEXT_PUBLIC_API_BASE_URL ||
          "https://backend.eledenthospitals.com/wp-json/custom/v1";

        const response = await fetch(`${baseUrl}/locations`, {
          cache: "no-store",
        });

        const result: LocationApiResponse = await response.json();

        if (!response.ok || !result?.success) {
          throw new Error("Failed to fetch locations");
        }

        const validLocations = Array.isArray(result.data)
          ? result.data.filter(
            (location) =>
              typeof location?.id === "string" &&
              location.id.trim() !== "" &&
              typeof location?.city === "string" &&
              location.city.trim() !== ""
          )
          : [];

        setLocations(validLocations);
      } catch (error) {
        console.error("Location fetch error:", error);
        setLocations([]);
      } finally {
        setLoadingLocations(false);
      }
    };

    fetchLocations();
  }, []);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;

    if (name === "phone") {
      const onlyNumbers = value.replace(/\D/g, "").slice(0, 10);
      setFormData((prev) => ({
        ...prev,
        [name]: onlyNumbers,
      }));
      return;
    }

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const resetCaptcha = () => {
    recaptchaRef.current?.reset();
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
      alert("Name, phone, date and location are required");
      return;
    }

    if (!/^[0-9]{10}$/.test(formData.phone)) {
      alert("Please enter a valid 10 digit phone number");
      return;
    }

    if (!captchaToken) {
      alert("Please complete the reCAPTCHA verification");
      return;
    }

    try {
      setSubmitting(true);

      const response = await fetch("/api/appointments", {
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

      const data = await response.json();

      if (!response.ok) {
        alert(data?.message || "Failed to submit appointment");
        resetCaptcha();
        return;
      }

      resetForm();
      resetCaptcha();
      closeModal();

      router.push("/thankyou");
    } catch (error) {
      console.error("Submit error:", error);
      alert("Something went wrong while submitting");
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

  return (
    <section className="relative lg:pb-20 px-0 lg:px-24 lg:-mt-6">
      <button
        type="button"
        onClick={closeModal}
        aria-label="Close modal"
        className="absolute -top-2 lg:right-22 right-0 z-50 flex h-10 w-10 items-center justify-center rounded-full bg-white text-black shadow-md transition hover:scale-105"
      >
        ✕
      </button>

      <div className="w-full max-w-[440px] z-20">
        <form
          onSubmit={handleSubmit}
          className="relative rounded-[20px] shadow-2xl p-6 sm:p-8 bg-white bg-[url('/about-us/aportment-details.png')] bg-cover bg-center bg-no-repeat"
        >
          <div className="relative z-10">
            <h3 className="lg:text-2xl font-semibold lg:mb-7 text-gray-800">
              Book An Appointment
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="modal-name"
                  className="block text-sm font-semibold text-gray-700 mb-2"
                >
                  Name
                </label>
                <input
                  id="modal-name"
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
                  htmlFor="modal-email"
                  className="block text-sm font-semibold text-gray-700 mb-2"
                >
                  Email
                </label>
                <input
                  id="modal-email"
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
                  htmlFor="modal-phone"
                  className="block text-sm font-semibold text-gray-700 mb-2"
                >
                  Phone
                </label>
                <input
                  id="modal-phone"
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
                  htmlFor="modal-date"
                  className="block text-sm font-semibold text-gray-700 mb-2"
                >
                  Date
                </label>
                <input
                  id="modal-date"
                  name="date"
                  type="date"
                  min={localToday}
                  value={formData.date}
                  onChange={handleChange}
                  className="w-full bg-white rounded-full px-6 py-3 text-sm outline-none shadow-[0_2px_20px_rgba(0,0,0,0.20)]"
                />
              </div>
            </div>

            <div className="mt-4">
              <label
                htmlFor="modal-location"
                className="block text-sm font-semibold text-gray-700 mb-2"
              >
                Location
              </label>
              <select
                id="modal-location"
                name="locationId"
                value={formData.locationId}
                onChange={handleChange}
                className="w-full bg-white rounded-full px-6 py-3 text-sm outline-none shadow-[0_2px_20px_rgba(0,0,0,0.20)]"
              >
                <option value="" disabled>
                  {loadingLocations ? "Loading locations..." : "Select Location"}
                </option>

                {locations.map((location) => (
                  <option key={location.id} value={location.id}>
                    {location.city}
                  </option>
                ))}
              </select>
            </div>

            <div className="mt-4">
              <label
                htmlFor="modal-message"
                className="block text-sm font-semibold text-gray-700 mb-2"
              >
                Message
              </label>
              <textarea
                id="modal-message"
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
                  ref={recaptchaRef}
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

            <div className="flex justify-center mt-6">
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
    </section>
  );
};

export default BookingModel;