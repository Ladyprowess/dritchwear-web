import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

// 🔑 CONTACT TEMPLATE ID (Resend)
const CONTACT_TEMPLATE_ID = "contact"; // replace with real ID

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
      from: "Dritchwear <info@dritchwear.com>",
      to: ["dritchwear@gmail.com"],
      replyTo: email,
    
      // ✅ Use templates like this (NOT template_id)
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