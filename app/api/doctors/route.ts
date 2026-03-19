import { NextResponse } from "next/server";

export async function GET() {
  const doctors = [
    { id: "1", name: "Dr. Ramesh Kumar" },
    { id: "2", name: "Dr. Priya Sharma" },
    { id: "3", name: "Dr. Arjun Reddy" },
  ];

  return NextResponse.json(doctors);
}