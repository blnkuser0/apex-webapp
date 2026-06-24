import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const {
      firstName,
      lastName,
      jobFunction,
      jobLevel,
      contact,
      email,
      company,
      country,
      region,
      province,
      municipality,
      barangay,
      address,
    } = body;

    await resend.emails.send({
      from: "Apex Innovations Contact Form <onboarding@resend.dev>",
      to: ["info@apexinnovations.ph"],
      replyTo: email,
      subject: `New Consultation Request – ${firstName} ${lastName} (${company})`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background-color: #c01130; padding: 24px; text-align: center;">
            <h1 style="color: white; margin: 0; font-size: 20px;">New Consultation Request</h1>
          </div>
          <div style="padding: 24px; background: #f9f9f9; border: 1px solid #e0e0e0;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 8px 0; color: #666; font-size: 13px; width: 140px;"><strong>Full Name</strong></td>
                <td style="padding: 8px 0; font-size: 13px;">${firstName} ${lastName}</td>
              </tr>
              <tr style="background: #fff;">
                <td style="padding: 8px; color: #666; font-size: 13px;"><strong>Email</strong></td>
                <td style="padding: 8px; font-size: 13px;">${email}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #666; font-size: 13px;"><strong>Contact Number</strong></td>
                <td style="padding: 8px 0; font-size: 13px;">${contact}</td>
              </tr>
              <tr style="background: #fff;">
                <td style="padding: 8px; color: #666; font-size: 13px;"><strong>Company</strong></td>
                <td style="padding: 8px; font-size: 13px;">${company}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #666; font-size: 13px;"><strong>Job Function</strong></td>
                <td style="padding: 8px 0; font-size: 13px;">${jobFunction || "—"}</td>
              </tr>
              <tr style="background: #fff;">
                <td style="padding: 8px; color: #666; font-size: 13px;"><strong>Job Level</strong></td>
                <td style="padding: 8px; font-size: 13px;">${jobLevel || "—"}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #666; font-size: 13px;"><strong>Country</strong></td>
                <td style="padding: 8px 0; font-size: 13px;">${country || "—"}</td>
              </tr>
              <tr style="background: #fff;">
                <td style="padding: 8px; color: #666; font-size: 13px;"><strong>Region</strong></td>
                <td style="padding: 8px; font-size: 13px;">${region || "—"}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #666; font-size: 13px;"><strong>Province</strong></td>
                <td style="padding: 8px 0; font-size: 13px;">${province || "—"}</td>
              </tr>
              <tr style="background: #fff;">
                <td style="padding: 8px; color: #666; font-size: 13px;"><strong>Municipality</strong></td>
                <td style="padding: 8px; font-size: 13px;">${municipality || "—"}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #666; font-size: 13px;"><strong>Barangay</strong></td>
                <td style="padding: 8px 0; font-size: 13px;">${barangay || "—"}</td>
              </tr>
              <tr style="background: #fff;">
                <td style="padding: 8px; color: #666; font-size: 13px;"><strong>Address</strong></td>
                <td style="padding: 8px; font-size: 13px;">${address || "—"}</td>
              </tr>
            </table>
          </div>
          <div style="padding: 16px; background: #c01130; text-align: center;">
            <p style="color: white; margin: 0; font-size: 12px;">Apex Innovations Inc. | apexinnovations.ph</p>
          </div>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Failed to send message. Please try again." },
      { status: 500 }
    );
  }
}
