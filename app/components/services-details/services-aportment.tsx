"use client";

import Image from "next/image";
import type { FC } from "react";

const ServicesAportment: FC = () => {
  return (
    <section className="lg:py-20 py-12 px-4 sm:px-8 lg:px-20 bg-[#f4f4f4]">
      <div className="lg:max-w-[1200px] mx-auto relative">
        {/* ORANGE CONTAINER */}
        <div className="relative bg-[#F37021] lg:rounded-[20px] flex items-center px-10 overflow-visible">
          {/* LEFT CONTENT */}
          <div className="flex justify-center lg:w-[56%] py-16 relative z-10">
            <div className="text-white max-w-[420px]">
              <p className="text-base mb-3">Booking</p>

              <h2 className="text-4xl font-bold leading-tight mb-4">
                Book Your Dental Care <br /> Appointment Now!
              </h2>

              <p className="text-[15px] opacity-90 mb-10">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
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

          {/* RIGHT FORM CARD */}
          <div className="lg:absolute right-10 top-1/2 lg:-translate-y-1/2 w-[440px] z-20 hidden lg:block">
            <div className="relative rounded-[20px] shadow-2xl p-8 bg-white bg-[url('/about-us/aportment-details.png')] bg-cover bg-center bg-no-repeat">



              <div className="relative z-10">
                <h3 className="text-2xl font-semibold mb-7 text-gray-800">
                  Book An Appointment
                </h3>

                <div className="grid grid-cols-2 gap-4">
                  {/* Name */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      placeholder="Full Name"
                      className="w-full bg-white rounded-full px-6 py-3 text-sm outline-none shadow-[0_2px_20px_rgba(0,0,0,0.20)]"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      placeholder="Email Address"
                      className="w-full bg-white rounded-full px-6 py-3 text-sm outline-none shadow-[0_2px_20px_rgba(0,0,0,0.20)]"
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Phone
                    </label>
                    <input
                      type="tel"
                      placeholder="Phone Number"
                      className="w-full bg-white rounded-full px-6 py-3 text-sm outline-none shadow-[0_2px_20px_rgba(0,0,0,0.20)]"
                    />
                  </div>

                  {/* Date */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Date
                    </label>
                    <input
                      type="date"
                      className="w-full bg-white rounded-full px-6 py-3 text-sm outline-none shadow-[0_2px_20px_rgba(0,0,0,0.20)]"
                    />
                  </div>
                </div>

                {/* Doctor */}
                <div className="mt-4">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Docter
                  </label>
                  <input
                    type="text"
                    placeholder="Find Docter"
                    className="w-full bg-white rounded-full px-6 py-3 text-sm outline-none shadow-[0_2px_20px_rgba(0,0,0,0.20)]"
                  />
                </div>

                {/* Message */}
                <div className="mt-4">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    placeholder="Your Message"
                    rows={3}
                    className="w-full bg-white rounded-2xl px-4 py-3 text-sm outline-none resize-none shadow-[0_2px_20px_rgba(0,0,0,0.20)]"
                  />
                </div>

                {/* Button */}
                <div className="flex justify-center mt-6">
                  <button className="bg-[#F37021] text-white px-10 py-3 rounded-full text-sm font-semibold shadow-lg hover:scale-105 transition">
                    Book Appointment
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE ORANGE STRIP (behind) */}
          <div className="absolute right-0 top-0 h-full w-[90px] rounded-r-[20px] bg-[#F37021] z-0 pointer-events-none" />
        </div>

        <div className=" z-20 lg:hidden block">
          <div className="relative shadow-2xl p-8 bg-white bg-[url('/about-us/aportment-details.png')] bg-cover bg-center bg-no-repeat">



            <div className="relative z-10">
              <h3 className="text-2xl font-semibold mb-7 text-gray-800">
                Book An Appointment
              </h3>

              <div className="grid grid-cols-1 gap-4">
                {/* Name */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    placeholder="Full Name"
                    className="w-full bg-white rounded-full px-6 py-3 text-sm outline-none shadow-[0_2px_20px_rgba(0,0,0,0.20)]"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    placeholder="Email Address"
                    className="w-full bg-white rounded-full px-6 py-3 text-sm outline-none shadow-[0_2px_20px_rgba(0,0,0,0.20)]"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Phone
                  </label>
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    className="w-full bg-white rounded-full px-6 py-3 text-sm outline-none shadow-[0_2px_20px_rgba(0,0,0,0.20)]"
                  />
                </div>

                {/* Date */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Date
                  </label>
                  <input
                    type="date"
                    className="w-full bg-white rounded-full px-6 py-3 text-sm outline-none shadow-[0_2px_20px_rgba(0,0,0,0.20)]"
                  />
                </div>
              </div>

              {/* Doctor */}
              <div className="mt-4">
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Docter
                </label>
                <input
                  type="text"
                  placeholder="Find Docter"
                  className="w-full bg-white rounded-full px-6 py-3 text-sm outline-none shadow-[0_2px_20px_rgba(0,0,0,0.20)]"
                />
              </div>

              {/* Message */}
              <div className="mt-4">
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  placeholder="Your Message"
                  rows={3}
                  className="w-full bg-white rounded-2xl px-4 py-3 text-sm outline-none resize-none shadow-[0_2px_20px_rgba(0,0,0,0.20)]"
                />
              </div>

              {/* Button */}
              <div className="flex justify-center mt-6">
                <button className="bg-[#F37021] text-white px-10 py-3 rounded-full text-sm font-semibold shadow-lg hover:scale-105 transition">
                  Book Appointment
                </button>
              </div>
            </div>
          </div>
        </div>

      </div>

    </section>
  );
};

export default ServicesAportment;