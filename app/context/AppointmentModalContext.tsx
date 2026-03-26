"use client";

import { createContext, useContext, useState, ReactNode } from "react";
import BookingModel from "@/app/components/comman/booking-model";

type AppointmentModalContextType = {
    openModal: () => void;
    closeModal: () => void;
};

const AppointmentModalContext = createContext<AppointmentModalContextType | null>(null);

export function AppointmentModalProvider({ children }: { children: ReactNode }) {
    const [isOpen, setIsOpen] = useState(false);

    const openModal = () => setIsOpen(true);
    const closeModal = () => setIsOpen(false);

    return (
        <AppointmentModalContext.Provider value={{ openModal, closeModal }}>
            {children}

            {isOpen && (
                <div className="fixed inset-0 z-[999] flex items-center justify-center p-4">
                    <div
                        className="absolute inset-0 bg-black/50 backdrop-blur-[2px]"
                        onClick={closeModal}
                    />
                   <BookingModel closeModal={closeModal} />
                </div>
            )}
        </AppointmentModalContext.Provider>
    );
}

export function useAppointmentModal() {
    const context = useContext(AppointmentModalContext);

    if (!context) {
        throw new Error("useAppointmentModal must be used within AppointmentModalProvider");
    }

    return context;
}