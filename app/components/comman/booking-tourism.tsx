"use client";

import Image from "next/image";
import type {
  FC,
  ChangeEvent,
  FormEvent,
  MouseEvent as ReactMouseEvent,
} from "react";
import { useEffect, useMemo, useRef, useState } from "react";
import { getCountries, getCountryCallingCode } from "libphonenumber-js";

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
  countryCode: string;
  phone: string;
  date: string;
  locationId: string;
  message: string;
};

type CountryCodeOption = {
  label: string;
  value: string;
  country: string;
};

const BookingTourism: FC = () => {
  const [locations, setLocations] = useState<Location[]>([]);
  const [loadingLocations, setLoadingLocations] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [isCountryDropdownOpen, setIsCountryDropdownOpen] = useState(false);

  const countryDropdownRef = useRef<HTMLDivElement | null>(null);

  const [formData, setFormData] = useState<FormDataType>({
    name: "",
    email: "",
    countryCode: "+91",
    phone: "",
    date: "",
    locationId: "",
    message: "",
  });

  const countryCodes = useMemo<CountryCodeOption[]>(() => {
    const countries = getCountries();

    const formatted = countries.map((country) => ({
      label: `${country} (+${getCountryCallingCode(country)})`,
      value: `+${getCountryCallingCode(country)}`,
      country,
    }));

    return formatted.sort((a, b) => {
      if (a.country === "IN") return -1;
      if (b.country === "IN") return 1;
      return a.label.localeCompare(b.label);
    });
  }, []);

  const selectedCountry =
    countryCodes.find((item) => item.value === formData.countryCode) ||
    countryCodes.find((item) => item.country === "IN") ||
    { label: "IN (+91)", value: "+91", country: "IN" };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        countryDropdownRef.current &&
        !countryDropdownRef.current.contains(event.target as Node)
      ) {
        setIsCountryDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    const fetchLocations = async () => {
      try {
        setLoadingLocations(true);

        const baseUrl =
          process.env.NEXT_PUBLIC_API_BASE_URL ||
          "https://eledenthospitals.com/wp-json/custom/v1";

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

  const handleCountryCodeSelect = (
    e: ReactMouseEvent<HTMLButtonElement>,
    value: string
  ) => {
    e.preventDefault();
    setFormData((prev) => ({
      ...prev,
      countryCode: value,
    }));
    setIsCountryDropdownOpen(false);
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (
      !formData.name ||
      !formData.phone ||
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

    try {
      setSubmitting(true);

      const fullPhone = `${formData.countryCode} ${formData.phone}`;

      const res = await fetch("/api/appointments", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          countryCode: formData.countryCode,
          phone: formData.phone,
          fullPhone,
          date: formData.date,
          locationId: formData.locationId,
          message: formData.message,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        alert(data?.message || "Failed to submit appointment");
        return;
      }

      alert(data?.message || "Appointment booked successfully");

      setFormData({
        name: "",
        email: "",
        countryCode: "+91",
        phone: "",
        date: "",
        locationId: "",
        message: "",
      });
    } catch (error) {
      console.error("Submit error:", error);
      alert("Something went wrong while submitting");
    } finally {
      setSubmitting(false);
    }
  };

  const today = new Date().toISOString().split("T")[0];

  const CountryCodeDropdown = ({
    mobile = false,
  }: {
    mobile?: boolean;
  }) => (
    <div
      ref={countryDropdownRef}
      className={`relative ${mobile ? "w-[90px]" : "w-[140px]"}`}
    >
      <button
        type="button"
        onClick={() => setIsCountryDropdownOpen((prev) => !prev)}
        className={`w-full bg-white rounded-full ${mobile ? "px-2 text-[10px]" : "px-4 text-sm"
          } py-3 outline-none shadow-[0_2px_20px_rgba(0,0,0,0.20)] text-left flex items-center justify-between gap-2`}
      >
        <span className="truncate">{selectedCountry.label}</span>
        <span className="text-xs">▼</span>
      </button>

      {isCountryDropdownOpen && (
        <div className="absolute left-0 top-full mt-2 w-[260px] bg-white rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.16)] border border-gray-100 z-50 overflow-hidden">
          <div className="max-h-[360px] overflow-y-auto">
            {countryCodes.map((country) => (
              <button
                key={country.country}
                type="button"
                onClick={(e) => handleCountryCodeSelect(e, country.value)}
                className={`w-full px-4 py-3 text-sm text-left hover:bg-orange-50 transition ${formData.countryCode === country.value
                    ? "bg-orange-50 text-[#F37021] font-medium"
                    : "text-gray-700"
                  }`}
              >
                {country.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );

  

  return (
    <section className="lg:pb-20 pb-10 px-4 sm:px-8 lg:px-24 -mt-6">
      <div className="lg:max-w-7xl mx-auto relative">
        <div className="relative bg-[#F37021] lg:rounded-[20px] flex items-center lg:px-10 px-6 overflow-visible">
          <div className="flex justify-center lg:w-[56%] lg:py-16 py-8 relative z-10">
            <div className="text-white max-w-[420px]">
              <p className="text-base mb-3">Eledent Dental Hospitals</p>

              <h2 className="lg:text-4xl text-2xl font-bold leading-tight mb-4">
                Plan Your Dental <br /> Trip With Confidence!
              </h2>

              <p className="text-sm opacity-90 mb-6">
                Travelling for dental treatment should feel clear and well
                planned. Share your concern with our team, and we will help you
                understand the treatment process, expected timeline, and the
                next steps before your visit to Hyderabad.
              </p>

              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-full bg-black flex items-center justify-center text-white relative">
                  <Image
                    src="/services-main/support.png"
                    alt="Support"
                    fill
                    className="object-cover rounded-full p-2"
                  />
                </div>
                <div>
                  <p className="text-sm font-medium mb-1">Call Our</p>
                  <p className="text-lg font-semibold">Patient Care Team</p>
                </div>
              </div>

              <div className="text-[15px] max-w-[300px]">
                <div className="w-full flex justify-between">
                  <a
                    href="tel:+919983868366"
                    className="hover:underline transition"
                  >
                    +91 9983868366
                  </a>
                  <p>|</p>
                  <a
                    href="tel:+917799769994"
                    className="hover:underline transition"
                  >
                    +91 7799769994
                  </a>
                </div>

                <hr className="h-[1px] bg-white/70 w-full my-2" />

                <div className="w-full flex justify-between">
                  <p>Mon–Sun</p>
                  <p>9:00am – 9:00pm</p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:absolute right-10 top-1/2 lg:-translate-y-1/2 w-[440px] z-20 hidden lg:block">
            <form
              onSubmit={handleSubmit}
              className="relative rounded-[20px] shadow-2xl p-8 bg-white bg-[url('/about-us/aportment-details.png')] bg-cover bg-center bg-no-repeat"
            >
              <div className="relative z-10">
                <h3 className="text-2xl font-semibold mb-4 text-gray-800">
                  Book An Appointment
                </h3>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-2">
                      Name
                    </label>
                    <input
                      name="name"
                      type="text"
                      placeholder="Full Name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full bg-white rounded-full px-6 py-3 text-sm outline-none shadow-[0_2px_20px_rgba(0,0,0,0.20)]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-2">
                      Email
                    </label>
                    <input
                      name="email"
                      type="email"
                      placeholder="Email Address"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full bg-white rounded-full px-6 py-3 text-sm outline-none shadow-[0_2px_20px_rgba(0,0,0,0.20)]"
                    />
                  </div>

                  <div className="col-span-2">
                    <label className="block text-xs font-semibold text-gray-700 mb-2">
                      Phone
                    </label>
                    <div className="flex gap-3">
                      <CountryCodeDropdown />

                      <input
                        name="phone"
                        type="tel"
                        inputMode="numeric"
                        maxLength={10}
                        placeholder="Phone Number"
                        value={formData.phone}
                        onChange={handleChange}
                        className="flex-1 bg-white rounded-full px-6 py-3 text-sm outline-none shadow-[0_2px_20px_rgba(0,0,0,0.20)]"
                      />
                    </div>
                  </div>

                  <div className="mt-4">
                    <label className="block text-xs font-semibold text-gray-700 mb-2">
                      Date
                    </label>
                    <input
                      name="date"
                      type="date"
                      min={today}
                      value={formData.date}
                      onChange={handleChange}
                      className="w-full bg-white rounded-full px-6 py-3 text-sm outline-none shadow-[0_2px_20px_rgba(0,0,0,0.20)]"
                    />
                  </div>

                  <div className="mt-4">
                    <label className="block text-xs font-semibold text-gray-700 mb-2">
                      Location
                    </label>
                    <select
                      name="locationId"
                      value={formData.locationId}
                      onChange={handleChange}
                      className="w-full bg-white rounded-full px-6 py-3 text-sm outline-none shadow-[0_2px_20px_rgba(0,0,0,0.20)]"
                    >
                      <option value="" disabled>
                        {loadingLocations
                          ? "Loading locations..."
                          : "Select Location"}
                      </option>
                      {locations.map((location) => (
                        <option key={location.id} value={location.id}>
                          {location.city}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="mt-4">
                  <label className="block text-xs font-semibold text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    placeholder="Your Message"
                    rows={3}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full bg-white rounded-2xl px-4 py-3 text-sm outline-none resize-none shadow-[0_2px_20px_rgba(0,0,0,0.20)]"
                  />
                </div>

                <div className="flex justify-center mt-6">
                  <button
                    type="submit"
                    disabled={submitting}
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

        <div className="z-20 lg:hidden block">
          <form
            onSubmit={handleSubmit}
            className="relative shadow-2xl lg:p-8 p-4 bg-white bg-[url('/about-us/aportment-details.png')] bg-cover bg-center bg-no-repeat"
          >
            <div className="relative z-10">
              <h3 className="lg:text-2xl font-semibold mb-7 text-gray-800">
                Book An Appointment
              </h3>

              <div className="grid grid-cols-1 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-2">
                    Name
                  </label>
                  <input
                    name="name"
                    type="text"
                    placeholder="Full Name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-white rounded-full px-6 py-3 text-sm outline-none shadow-[0_2px_20px_rgba(0,0,0,0.20)]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    name="email"
                    type="email"
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-white rounded-full px-6 py-3 text-sm outline-none shadow-[0_2px_20px_rgba(0,0,0,0.20)]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-2">
                    Phone
                  </label>
                  <div className="flex gap-3">
                    <CountryCodeDropdown mobile />

                    <input
                      name="phone"
                      type="tel"
                      inputMode="numeric"
                      maxLength={10}
                      placeholder="Phone Number"
                      value={formData.phone}
                      onChange={handleChange}
                      className="flex-1 bg-white lg:w-full w-[60%] rounded-full px-6 py-3 text-sm outline-none shadow-[0_2px_20px_rgba(0,0,0,0.20)]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-2">
                    Date
                  </label>
                  <input
                    name="date"
                    type="date"
                    min={today}
                    value={formData.date}
                    onChange={handleChange}
                    className="w-full bg-white rounded-full px-6 py-3 text-sm outline-none shadow-[0_2px_20px_rgba(0,0,0,0.20)]"
                  />
                </div>
              </div>

              <div className="mt-4">
                <label className="block text-xs font-semibold text-gray-700 mb-2">
                  Location
                </label>
                <select
                  name="locationId"
                  value={formData.locationId}
                  onChange={handleChange}
                  className="w-full bg-white rounded-full px-6 py-3 text-sm outline-none shadow-[0_2px_20px_rgba(0,0,0,0.20)]"
                >
                  <option value="" disabled>
                    {loadingLocations
                      ? "Loading locations..."
                      : "Select Location"}
                  </option>
                  {locations.map((location) => (
                    <option key={location.id} value={location.id}>
                      {location.city}
                    </option>
                  ))}
                </select>
              </div>

              <div className="mt-4">
                <label className="block text-xs font-semibold text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  placeholder="Your Message"
                  rows={3}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full bg-white rounded-2xl px-4 py-3 text-sm outline-none resize-none shadow-[0_2px_20px_rgba(0,0,0,0.20)]"
                />
              </div>

              <div className="flex justify-center mt-6">
                <button
                  type="submit"
                  disabled={submitting}
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

export default BookingTourism;