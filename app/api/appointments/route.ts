import { NextRequest, NextResponse } from "next/server";

const APPOINTMENT_API =
  "https://backend.eledenthospitals.com/wp-json/custom/v1/appointments/";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const { name, email, phone, date, locationId, message } = body;

    if (!name || !phone || !date || !locationId) {
      return NextResponse.json(
        { message: "Name, phone, date and location are required" },
        { status: 400 }
      );
    }

    if (!/^[0-9]{10}$/.test(phone)) {
      return NextResponse.json(
        { message: "Please enter a valid 10 digit phone number" },
        { status: 400 }
      );
    }

    const wpResponse = await fetch(APPOINTMENT_API, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        phone,
        date,
        locationId,
        message,
      }),
      cache: "no-store",
    });

    const text = await wpResponse.text();

    let data;
    try {
      data = JSON.parse(text);
    } catch {
      data = { message: text || "Invalid response from server" };
    }

    if (!wpResponse.ok) {
      return NextResponse.json(
        {
          message: data?.message || "Failed to create appointment",
          error: data,
        },
        { status: wpResponse.status }
      );
    }

    return NextResponse.json(
      {
        message: data?.message || "Appointment booked successfully",
        data,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Appointment API error:", error);
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
}