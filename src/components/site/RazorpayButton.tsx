"use client";

import { useState } from "react";

export function PaymentButton({ amount, children, className }: any) {
  const [loading, setLoading] = useState(false);

  const loadScript = () => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/checkout.js";
      script.onload = () => resolve(true);
      document.body.appendChild(script);
    });
  };

  const handlePayment = async () => {
    setLoading(true);

    await loadScript();

    // 1. Create order from backend
    const res = await fetch("/api/create-order", {
      method: "POST",
      body: JSON.stringify({ amount }),
    });

    if (!res.ok) {
      alert("Payment service unavailable. Please try again later.");
      setLoading(false);
      return;
    }

    const data = await res.json();

    const options = {
      key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
      amount: data.amount,
      currency: "INR",
      name: "Sai Ranju Welfare Society",
      description: "Donation",
      order_id: data.id,

      handler: async function (response: any) {
        // 2. Verify payment
        const verifyRes = await fetch("/api/verify-payment", {
          method: "POST",
          body: JSON.stringify(response),
        });

        const verifyData = await verifyRes.json();

        if (verifyData.success) {
          alert("Payment Successful 🎉");
        } else {
          alert("Payment Failed ❌");
        }
      },

      theme: {
        color: "#f97316",
      },
    };

    const paymentObject = new (window as any).Razorpay(options);
    paymentObject.open();

    setLoading(false);
  };

  return (
    <button onClick={handlePayment} disabled={loading} className={className}>
      {loading ? "Processing..." : children}
    </button>
  );
}