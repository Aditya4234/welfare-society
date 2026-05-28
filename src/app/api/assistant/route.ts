import { NextResponse } from "next/server";

const replies = [
  "Thank you for reaching out! Our team will get back to you shortly. In the meantime, you can check our programs or donate directly.",
  "Great question! You can visit our programs section to learn more about our initiatives in education, healthcare, and rural development.",
  "We appreciate your interest in Sai Ranju Welfare Society. A team member will respond to your query soon.",
  "For urgent inquiries, please reach out to us directly via WhatsApp or call our helpline. We're here to help!",
];

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { message } = body;

    if (!message) {
      return NextResponse.json({ error: "Message is required" }, { status: 400 });
    }

    console.log("Assistant Query:", message);

    const reply = replies[Math.floor(Math.random() * replies.length)];

    return NextResponse.json({ success: true, reply });
  } catch {
    return NextResponse.json({ error: "Failed to process message" }, { status: 500 });
  }
}
