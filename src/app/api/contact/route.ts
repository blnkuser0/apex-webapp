import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const {
      firstName,
      lastName,
      contact,
      email,
      company,
      country,
    } = body;

    // Resend is temporarily disabled so production builds do not fail
    // while RESEND_API_KEY is not configured in Vercel.
    // import { Resend } from "resend";
    // const resend = new Resend(process.env.RESEND_API_KEY);
    // await resend.emails.send({ ... });

    console.log("Contact form submission received:", {
      firstName,
      lastName,
      contact,
      email,
      company,
      country,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Failed to submit message. Please try again." },
      { status: 500 }
    );
  }
}
