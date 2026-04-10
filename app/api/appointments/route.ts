import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const {
      name,
      email,
      phone,
      date,
      locationId,
      message,
      captchaToken,
    } = body;

    if (!name || !phone || !date || !locationId || !captchaToken) {
      return NextResponse.json(
        { message: "Name, phone, date, location and captcha are required." },
        { status: 400 }
      );
    }

    if (!/^[0-9]{10}$/.test(phone)) {
      return NextResponse.json(
        { message: "Please enter a valid 10 digit phone number." },
        { status: 400 }
      );
    }

    const secretKey = process.env.RECAPTCHA_SECRET_KEY;

    if (!secretKey) {
      return NextResponse.json(
        { message: "reCAPTCHA secret key is missing on server." },
        { status: 500 }
      );
    }

    const captchaVerifyRes = await fetch(
      "https://www.google.com/recaptcha/api/siteverify",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams({
          secret: secretKey,
          response: captchaToken,
        }).toString(),
      }
    );

    const captchaVerifyData = await captchaVerifyRes.json();

    if (!captchaVerifyData.success) {
      return NextResponse.json(
        {
          message: "reCAPTCHA verification failed.",
          errors: captchaVerifyData["error-codes"] || [],
        },
        { status: 400 }
      );
    }

    const baseUrl =
      process.env.NEXT_PUBLIC_API_BASE_URL ||
      "https://backend.eledenthospitals.com/wp-json/custom/v1";

    const wpRes = await fetch(`${baseUrl}/appointments`, {
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
    });

    const wpData = await wpRes.json();

    if (!wpRes.ok) {
      return NextResponse.json(
        { message: wpData?.message || "Failed to create appointment." },
        { status: wpRes.status }
      );
    }

    return NextResponse.json(
      { success: true, message: "Appointment submitted successfully." },
      { status: 200 }
    );
  } catch (error) {
    console.error("Appointment API error:", error);

    return NextResponse.json(
      { message: "Something went wrong while submitting the appointment." },
      { status: 500 }
    );
  }
}