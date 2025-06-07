import { NextResponse } from "next/server";

export async function GET() {
  const response = NextResponse.json({
    count: 5000,

  });

  return response;
}
