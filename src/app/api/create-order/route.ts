import { NextResponse } from "next/server";
import Razorpay from "razorpay";

const key_id = process.env.RAZORPAY_KEY_ID;
const key_secret = process.env.RAZORPAY_KEY_SECRET;

const razorpay = key_id && key_secret ? new Razorpay({ key_id, key_secret }) : null;

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { amount, name, email, phone } = body;

    if (!razorpay) {
      return NextResponse.json({ error: "Payment gateway not configured" }, { status: 500 });
    }

    if (!amount || amount < 1) {
      return NextResponse.json({ error: "Invalid amount" }, { status: 400 });
    }

    const options = {
      amount: Math.round(amount * 100),
      currency: "INR",
      receipt: `receipt_${Date.now()}`,
      notes: {
        donor_name: name || "Anonymous",
        donor_email: email || "",
        donor_phone: phone || "",
      },
    };

    const order = await razorpay.orders.create(options);
    return NextResponse.json(order);
  } catch (error) {
    console.error("Create order error:", error);
    return NextResponse.json({ error: "Failed to create order" }, { status: 500 });
  }
}