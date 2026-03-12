import { NextResponse } from "next/server";

export async function GET() {
    try {
        const res = await fetch("/api/specialties", {
            method: "GET",
            cache: "no-store",
        });

        if (!res.ok) {
            return NextResponse.json(
                { success: false, message: "Failed to fetch data" },
                { status: res.status }
            );
        }

        const data = await res.json();
        return NextResponse.json(data);
    } catch (error) {
        return NextResponse.json(
            { success: false, message: "Server error" },
            { status: 500 }
        );
    }
}