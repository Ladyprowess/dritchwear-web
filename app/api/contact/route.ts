import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

// 🔑 CONTACT TEMPLATE ID (Resend)
const CONTACT_TEMPLATE_ID = "re_XXXXXXXXXXXX"; // replace with real ID

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const {
      fullName,
      email,
      phone,
      inquiryType, // 👈 THIS IS THE IMPORTANT PART
      message,
    } = body;

    if (!fullName || !email || !phone || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    await resend.emails.send({
      from: "Dritchwear <hello@dritchwear.com>",
      to: ["hello@dritchwear.com"],
      replyTo: email,

      // ✅ CONTACT TEMPLATE
      template_id: CONTACT_TEMPLATE_ID,

      // Variables mapped to Resend template
      template_data: {
        full_name: fullName,
        email,
        phone,
        inquiry_type: inquiryType || "General enquiry",
        message,
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