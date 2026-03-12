"use client";

import Image from "next/image";
import type { FC, ChangeEvent, FormEvent } from "react";
import { useEffect, useState } from "react";

type Doctor = {
  id: string;
  name: string;
};

type FormDataType = {
  name: string;
  email: string;
  phone: string;
  date: string;
  doctorId: string;
  message: string;
};

const BookingAportment: FC = () => {
  const [doctors, setDoctors] = useState<Doctor[]>([]);
  const [loadingDoctors, setLoadingDoctors] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const [formData, setFormData] = useState<FormDataType>({
    name: "",
    email: "",
    phone: "",
    date: "",
    doctorId: "",
    message: "",
  });

  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        setLoadingDoctors(true);

        const res = await fetch("/api/doctors", {
          method: "GET",
        });

        const data = await res.json();

        if (!res.ok) {
          throw new Error(data?.message || "Failed to fetch doctors");
        }

        setDoctors(Array.isArray(data) ? data : []);
      } catch (error) {
        console.error("Doctor fetch error:", error);
      } finally {
        setLoadingDoctors(false);
      }
    };

    fetchDoctors();
  }, []);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!formData.name || !formData.phone || !formData.date || !formData.doctorId) {
      alert("Please fill all required fields");
      return;
    }

    if (!/^[0-9]{10}$/.test(formData.phone)) {
      alert("Please enter a valid 10 digit phone number");
      return;
    }

    try {
      setSubmitting(true);

      const res = await fetch("/api/appointments", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          doctorId: Number(formData.doctorId),
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
        phone: "",
        date: "",
        doctorId: "",
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

  return (
    <section className="lg:pb-20 pb-10 px-4 sm:px-8 lg:px-24 -mt-6">
      <div className="lg:max-w-7xl mx-auto relative">
        <div className="relative bg-[#F37021] lg:rounded-[20px] flex items-center px-10 overflow-visible">
          <div className="flex justify-center lg:w-[56%] lg:py-16 py-8 relative z-10">
            <div className="text-white max-w-[420px]">
              <p className="text-base mb-3">Booking</p>

              <h2 className="lg:text-4xl text-2xl font-bold leading-tight mb-4">
                Book Your Dental Care <br /> Appointment Now!
              </h2>

              <p className="text-[15px] opacity-90 mb-10">
                Book your appointment easily with our team and choose your preferred doctor and date.
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
                  <p className="text-sm font-medium mb-1">Support</p>
                  <p className="text-lg font-semibold">24/7 Emergency Call</p>
                </div>
              </div>

              <div className="text-[15px] max-w-[300px]">
                <div className="w-full flex justify-between">
                  <p>Mon–Fri</p>
                  <p>8:00am – 6:00pm</p>
                </div>

                <hr className="h-[1px] bg-white/70 w-full my-2" />

                <div className="w-full flex justify-between">
                  <p>Sat–Sun</p>
                  <p>9:00am – 4:00pm</p>
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
                <h3 className="text-2xl font-semibold mb-7 text-gray-800">
                  Book An Appointment
                </h3>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
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
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
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
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Phone
                    </label>
                    <input
                      name="phone"
                      type="tel"
                      placeholder="Phone Number"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full bg-white rounded-full px-6 py-3 text-sm outline-none shadow-[0_2px_20px_rgba(0,0,0,0.20)]"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
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
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Doctor
                  </label>
                  <select
                    name="doctorId"
                    value={formData.doctorId}
                    onChange={handleChange}
                    className="w-full bg-white rounded-full px-6 py-3 text-sm outline-none shadow-[0_2px_20px_rgba(0,0,0,0.20)]"
                  >
                    <option value="">
                      {loadingDoctors ? "Loading doctors..." : "Select Doctor"}
                    </option>
                    {doctors.map((doctor) => (
                      <option key={doctor.id} value={doctor.id}>
                        {doctor.name}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="mt-4">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
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
                    className="bg-[#F37021] text-white px-10 py-3 rounded-full text-sm font-semibold shadow-lg hover:scale-105 transition disabled:opacity-60"
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
            className="relative shadow-2xl p-8 bg-white bg-[url('/about-us/aportment-details.png')] bg-cover bg-center bg-no-repeat"
          >
            <div className="relative z-10">
              <h3 className="text-2xl font-semibold mb-7 text-gray-800">
                Book An Appointment
              </h3>

              <div className="grid grid-cols-1 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
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
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
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
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Phone
                  </label>
                  <input
                    name="phone"
                    type="tel"
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full bg-white rounded-full px-6 py-3 text-sm outline-none shadow-[0_2px_20px_rgba(0,0,0,0.20)]"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
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
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Doctor
                </label>
                <select
                  name="doctorId"
                  value={formData.doctorId}
                  onChange={handleChange}
                  className="w-full bg-white rounded-full px-6 py-3 text-sm outline-none shadow-[0_2px_20px_rgba(0,0,0,0.20)]"
                >
                  <option value="">
                    {loadingDoctors ? "Loading doctors..." : "Select Doctor"}
                  </option>
                  {doctors.map((doctor) => (
                    <option key={doctor.id} value={doctor.id}>
                      {doctor.name}
                    </option>
                  ))}
                </select>
              </div>

              <div className="mt-4">
                <label className="block text-sm font-semibold text-gray-700 mb-2">
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
                  className="bg-[#F37021] text-white px-10 py-3 rounded-full text-sm font-semibold shadow-lg hover:scale-105 transition disabled:opacity-60"
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