import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

// 🔑 SUBSCRIBE TEMPLATE ID (Resend)
const SUBSCRIBE_TEMPLATE_ID = "re_YYYYYYYYYYYY"; // ⬅️ replace with your real ID

export async function POST(req: Request) {
  try {
    const { email } = await req.json();

    if (!email) {
      return new Response(
        JSON.stringify({ error: "Email is required" }),
        { status: 400 }
      );
    }

    await resend.emails.send({
      from: "Dritchwear <hello@dritchwear.com>",
      to: email,

      // ✅ Use subscribe template
      template_id: SUBSCRIBE_TEMPLATE_ID,

      // Template variables (optional, but future-proof)
      template_data: {
        email,
      },
    });

    return new Response(
      JSON.stringify({ success: true }),
      { status: 200 }
    );
  } catch (error) {
    console.error("Subscribe email error:", error);

    return new Response(
      JSON.stringify({ error: "Something went wrong" }),
      { status: 500 }
    );
  }
}