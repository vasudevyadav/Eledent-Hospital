"use client";

import type { FC } from "react";

const ServicesAportment: FC = () => {
    return (
        <section className="py-20 px-4 sm:px-8 lg:px-20 bg-[#f4f4f4]">
            <div className="max-w-[1200px] mx-auto relative">

                {/* ORANGE CONTAINER */}
                <div className="relative bg-[#F37021] rounded-[20px] h-[360px] flex items-center px-10 overflow-visible">

                    {/* LEFT CONTENT */}
                    <div className="text-white max-w-[420px]">
                        <p className="text-xs opacity-80 mb-3">Booking</p>

                        <h2 className="text-3xl font-extrabold leading-tight mb-4">
                            Book Your Dental Care <br /> Appointment Now!
                        </h2>

                        <p className="text-sm opacity-90 mb-6">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                            eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </p>

                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-10 h-10 rounded-full bg-black flex items-center justify-center text-white">
                                ☎
                            </div>
                            <div>
                                <p className="text-sm font-semibold">Support</p>
                                <p className="text-sm font-bold">24/7 Emergency Call</p>
                            </div>
                        </div>

                        <div className="text-sm flex justify-between max-w-[300px] border-t border-white/30 pt-4">
                            <div>
                                <p>Mon–Fri</p>
                                <p>Sat–Sun</p>
                            </div>
                            <div className="text-right">
                                <p>8:00am – 6:00pm</p>
                                <p>9:00am – 4:00pm</p>
                            </div>
                        </div>
                    </div>

                    {/* RIGHT FORM CARD */}
                    <div className="absolute right-10 top-1/2 -translate-y-1/2 w-[440px]">

                        <div className="relative bg-white/60 backdrop-blur-xl rounded-[20px] shadow-2xl p-8">

                            <h3 className="text-lg font-bold mb-6 text-gray-800">
                                Book An Appointment
                            </h3>

                            <div className="grid grid-cols-2 gap-4">
                                <input
                                    type="text"
                                    placeholder="Full Name"
                                    className="bg-white rounded-full px-4 py-2 text-sm outline-none shadow-inner"
                                />
                                <input
                                    type="email"
                                    placeholder="Email Address"
                                    className="bg-white rounded-full px-4 py-2 text-sm outline-none shadow-inner"
                                />
                                <input
                                    type="tel"
                                    placeholder="Phone Number"
                                    className="bg-white rounded-full px-4 py-2 text-sm outline-none shadow-inner"
                                />
                                <input
                                    type="date"
                                    className="bg-white rounded-full px-4 py-2 text-sm outline-none shadow-inner"
                                />
                            </div>

                            <div className="mt-4">
                                <input
                                    type="text"
                                    placeholder="Find Doctor"
                                    className="w-full bg-white rounded-full px-4 py-2 text-sm outline-none shadow-inner"
                                />
                            </div>

                            <div className="mt-4">
                                <textarea
                                    placeholder="Your Message"
                                    rows={4}
                                    className="w-full bg-white rounded-xl px-4 py-3 text-sm outline-none shadow-inner resize-none"
                                />
                            </div>

                            <div className="flex justify-center mt-6">
                                <button className="bg-[#F37021] text-white px-8 py-3 rounded-full text-sm font-semibold shadow-lg hover:scale-105 transition">
                                    Book Appointment
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* RIGHT SIDE ORANGE STRIP */}
                    <div className="absolute right-0 top-0 h-full w-[90px] rounded-r-[20px] bg-[#F37021]" />
                </div>
            </div>
        </section>
    );
};

export default ServicesAportment;
