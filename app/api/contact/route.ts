import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const CONTACT_TEMPLATE_ID = "contact"; // your real template ID

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const {
      fullName,
      email,
      phone,
      inquiryType,
      message,
    } = body;

    if (!fullName || !email || !phone || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    await resend.emails.send({
      from: "Dritchwear <info@dritchwear.com>",

      // ✅ SEND TO BOTH RECEIVER + SENDER
      to: [
        "dritchwear@gmail.com", // receiver
        email,                  // sender
      ],

      replyTo: email,

      template: {
        id: CONTACT_TEMPLATE_ID,
        variables: {
          full_name: fullName,
          email,
          phone,
          inquiry_type: inquiryType || "General enquiry",
          message,
        },
      },
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact email error:", error);
    return NextResponse.json(
      { error: "Failed to send message" },
      { status: 500 }
    );
  }
}