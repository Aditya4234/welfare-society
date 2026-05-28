"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { DONATION_AMOUNTS, CONTACT, SITE } from "@/lib/site";
import { CreditCard, Shield, Receipt, Heart, ChevronRight, Loader2 } from "lucide-react";

interface RazorpayOptions {
  key: string;
  amount: number;
  currency: string;
  name: string;
  description: string;
  order_id: string;
  prefill: {
    name: string;
    email: string;
    contact: string;
  };
  notes: Record<string, string>;
  handler: (response: RazorpayResponse) => void | Promise<void>;
  modal: {
    ondismiss: () => void;
  };
  theme: {
    color: string;
  };
}

interface RazorpayResponse {
  razorpay_order_id: string;
  razorpay_payment_id: string;
  razorpay_signature: string;
}

declare global {
  interface Window {
    Razorpay: new (options: RazorpayOptions) => {
      open: () => void;
    };
  }
}

interface DonorDetails {
  name: string;
  email: string;
  phone: string;
  pan: string;
}

const donationSuggestions = [
  { amount: 500, impact: "Provides school supplies for 2 children" },
  { amount: 1000, impact: "Covers medical check-up for 1 family" },
  { amount: 2000, impact: "Supports mid-day meals for 20 children" },
  { amount: 5000, impact: "Sponsors 1 child's education for 3 months" },
  { amount: 10000, impact: "Emergency relief kit for 5 families" },
];

export function DonationForm() {
  const [step, setStep] = useState<"amount" | "details" | "payment">("amount");
  const [selectedAmount, setSelectedAmount] = useState<number>(1000);
  const [customAmount, setCustomAmount] = useState<string>("");
  const [frequency, setFrequency] = useState<"once" | "monthly">("once");
  const [loading, setLoading] = useState(false);
  const [donor, setDonor] = useState<DonorDetails>({
    name: "",
    email: "",
    phone: "",
    pan: "",
  });
  const [errors, setErrors] = useState<Partial<DonorDetails>>({});

  const finalAmount = customAmount ? Number(customAmount) : selectedAmount;

  const loadScript = () => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/checkout.js";
      script.onload = () => resolve(true);
      document.body.appendChild(script);
    });
  };

  const validateDetails = (): boolean => {
    const newErrors: Partial<DonorDetails> = {};
    if (!donor.name.trim()) newErrors.name = "Name is required";
    if (!donor.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(donor.email)) {
      newErrors.email = "Valid email is required";
    }
    if (!donor.phone.trim() || !/^[6-9]\d{9}$/.test(donor.phone)) {
      newErrors.phone = "Valid 10-digit phone number required";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleAmountSelect = (amount: number) => {
    setSelectedAmount(amount);
    setCustomAmount("");
  };

  const handleNext = () => {
    if (step === "amount" && finalAmount >= 1) {
      setStep("details");
    } else if (step === "details" && validateDetails()) {
      setStep("payment");
    }
  };

  const handlePayment = async () => {
    if (finalAmount < 1) {
      alert("Please enter a valid donation amount");
      return;
    }

    setLoading(true);

    try {
      await loadScript();

      const res = await fetch("/api/create-order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          amount: finalAmount,
          name: donor.name,
          email: donor.email,
          phone: donor.phone,
        }),
      });

      if (!res.ok) {
        alert("Payment service unavailable. Please try again later.");
        setLoading(false);
        return;
      }

      const data = await res.json();

      const options = {
        key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID || "rzp_test_",
        amount: data.amount,
        currency: "INR",
        name: SITE.name,
        description: `Donation - ₹${finalAmount}`,
        order_id: data.id,
        prefill: {
          name: donor.name,
          email: donor.email,
          contact: donor.phone,
        },
        notes: {
          donor_name: donor.name,
          donor_email: donor.email,
          donor_phone: donor.phone,
          donor_pan: donor.pan,
          frequency: frequency,
        },
        handler: async function (response: RazorpayResponse) {
          const verifyRes = await fetch("/api/verify-payment", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              ...response,
              donor: {
                name: donor.name,
                email: donor.email,
                phone: donor.phone,
                pan: donor.pan,
                amount: finalAmount,
              },
            }),
          });

          const verifyData = await verifyRes.json();
          setLoading(false);

          if (verifyData.success) {
            window.location.href = `/donate/success?order_id=${response.razorpay_order_id}&payment_id=${response.razorpay_payment_id}&amount=${finalAmount}`;
          } else {
            window.location.href = `/donate/failure?error=verification_failed`;
          }
        },
        modal: {
          ondismiss: function () {
            setLoading(false);
          },
        },
        theme: {
          color: "#f97316",
        },
      };

      const paymentObject = new window.Razorpay(options);
      paymentObject.open();
    } catch {
      setLoading(false);
      alert("Something went wrong. Please try again.");
    }
  };

  const getImpactText = () => {
    const match = donationSuggestions.find((d) => d.amount === finalAmount);
    if (match) return match.impact;
    if (finalAmount >= 10000) return "Your generous support will help transform many lives";
    if (finalAmount >= 5000) return "Significant contribution to our community programs";
    if (finalAmount >= 1000) return "Helps us provide essential services to those in need";
    return "Every contribution makes a difference";
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="flex items-center justify-center mb-10">
        {["amount", "details", "payment"].map((s, i) => (
          <div key={s} className="flex items-center">
            <button
               onClick={() => {
                 const steps: Array<"amount" | "details" | "payment"> = ["amount", "details", "payment"];
                 const currentIndex = steps.indexOf(step);
                 if (i <= currentIndex) {
                   setStep(steps[i]);
                 }
               }}
              className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all ${
                step === s
                  ? "bg-accent-600 text-white shadow-lg"
                  : i < ["amount", "details", "payment"].indexOf(step)
                  ? "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400"
                  : "bg-surface-100 text-brand-500 dark:bg-brand-800"
              }`}
            >
              {i < ["amount", "details", "payment"].indexOf(step) ? (
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              ) : (
                <span>{i + 1}</span>
              )}
              <span className="hidden sm:inline">
                {s === "amount" ? "Amount" : s === "details" ? "Details" : "Pay"}
              </span>
            </button>
            {i < 2 && (
              <div className={`w-8 h-0.5 mx-1 ${
                i < ["amount", "details", "payment"].indexOf(step)
                  ? "bg-green-500"
                  : "bg-surface-200 dark:bg-brand-700"
              }`} />
            )}
          </div>
        ))}
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="card rounded-2xl p-6 sm:p-8"
          >
            {step === "amount" && (
              <div className="space-y-6">
                <div>
                  <h2 className="text-xl sm:text-2xl font-display font-semibold mb-2">Choose Donation Amount</h2>
                  <p className="text-brand-500 text-sm">Select an amount or enter your own</p>
                </div>

                <div className="flex gap-2 bg-surface-100 dark:bg-brand-800/50 rounded-xl p-1">
                  <button
                    onClick={() => setFrequency("once")}
                    className={`flex-1 py-2.5 text-sm font-semibold rounded-lg transition-all ${
                      frequency === "once"
                        ? "bg-white dark:bg-brand-700 text-slate-900 dark:text-white shadow-sm"
                        : "text-brand-500 hover:text-brand-300"
                    }`}
                  >
                    One-Time
                  </button>
                  <button
                    onClick={() => setFrequency("monthly")}
                    className={`flex-1 py-2.5 text-sm font-semibold rounded-lg transition-all ${
                      frequency === "monthly"
                        ? "bg-white dark:bg-brand-700 text-slate-900 dark:text-white shadow-sm"
                        : "text-brand-500 hover:text-brand-300"
                    }`}
                  >
                    Monthly
                    <span className="ml-1.5 text-xs bg-accent-100 dark:bg-accent-900/30 text-accent-700 dark:text-accent-400 px-1.5 py-0.5 rounded-full">
                      Sustainer
                    </span>
                  </button>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {DONATION_AMOUNTS.filter((a) => a.value !== "custom").map((tier) => {
                    const amt = Number(tier.value);
                    const isSelected = selectedAmount === amt && !customAmount;
                    return (
                      <button
                        key={tier.value}
                        onClick={() => handleAmountSelect(amt)}
                        className={`relative rounded-xl border p-4 text-center transition-all duration-300 ${
                          isSelected
                            ? "border-accent-500 bg-accent-50 dark:bg-accent-900/20 ring-2 ring-accent-500/20"
                            : "border-surface-200 dark:border-brand-700 bg-surface-50 dark:bg-brand-800/30 hover:border-accent-300"
                        }`}
                      >
                        <p className={`text-xl font-bold ${
                          isSelected ? "text-accent-600 dark:text-accent-400" : "text-slate-900 dark:text-white"
                        }`}>
                          {tier.label}
                        </p>
                        {donationSuggestions.find((d) => d.amount === amt) && (
                          <p className="text-xs mt-1 text-brand-500 line-clamp-2">
                            {donationSuggestions.find((d) => d.amount === amt)?.impact}
                          </p>
                        )}
                        {isSelected && (
                          <div className="absolute -top-2 -right-2 w-6 h-6 bg-accent-600 rounded-full flex items-center justify-center">
                            <svg className="w-3.5 h-3.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                        )}
                      </button>
                    );
                  })}
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-brand-700 dark:text-brand-300">Or enter custom amount</label>
                  <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-xl font-semibold text-brand-500">₹</span>
                    <input
                      type="number"
                      value={customAmount}
                      onChange={(e) => {
                        setCustomAmount(e.target.value);
                        setSelectedAmount(0);
                      }}
                      placeholder="Enter amount"
                      min={1}
                      className="w-full pl-10 pr-4 py-4 text-xl font-semibold rounded-xl border-2 border-surface-200 dark:border-brand-700 bg-surface-50 dark:bg-brand-800/30 focus:border-accent-500 focus:ring-4 focus:ring-accent-500/10 outline-none transition-all"
                    />
                  </div>
                </div>

                {finalAmount >= 1 && (
                  <div className="rounded-xl bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 p-4 flex items-start gap-3">
                    <Heart className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-sm font-medium text-blue-800 dark:text-blue-300">Your Impact</p>
                      <p className="text-sm text-blue-700 dark:text-blue-400 mt-0.5">{getImpactText()}</p>
                    </div>
                  </div>
                )}
              </div>
            )}

            {step === "details" && (
              <div className="space-y-6">
                <div>
                  <h2 className="text-xl sm:text-2xl font-display font-semibold mb-2">Your Details</h2>
                  <p className="text-brand-500 text-sm">Help us send you the 80G tax exemption receipt</p>
                </div>

                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-1.5">Full Name *</label>
                    <input
                      type="text"
                      value={donor.name}
                      onChange={(e) => setDonor({ ...donor, name: e.target.value })}
                      placeholder="Enter your full name"
                      className={`w-full px-4 py-3 rounded-xl border-2 outline-none transition-all ${
                        errors.name
                          ? "border-red-300 focus:border-red-500 focus:ring-4 focus:ring-red-500/10"
                          : "border-surface-200 dark:border-brand-700 focus:border-accent-500 focus:ring-4 focus:ring-accent-500/10"
                      }`}
                    />
                    {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-1.5">Email *</label>
                      <input
                        type="email"
                        value={donor.email}
                        onChange={(e) => setDonor({ ...donor, email: e.target.value })}
                        placeholder="you@example.com"
                        className={`w-full px-4 py-3 rounded-xl border-2 outline-none transition-all ${
                          errors.email
                            ? "border-red-300 focus:border-red-500 focus:ring-4 focus:ring-red-500/10"
                            : "border-surface-200 dark:border-brand-700 focus:border-accent-500 focus:ring-4 focus:ring-accent-500/10"
                        }`}
                      />
                      {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1.5">Phone *</label>
                      <input
                        type="tel"
                        value={donor.phone}
                        onChange={(e) => setDonor({ ...donor, phone: e.target.value })}
                        placeholder="10-digit mobile number"
                        maxLength={10}
                        className={`w-full px-4 py-3 rounded-xl border-2 outline-none transition-all ${
                          errors.phone
                            ? "border-red-300 focus:border-red-500 focus:ring-4 focus:ring-red-500/10"
                            : "border-surface-200 dark:border-brand-700 focus:border-accent-500 focus:ring-4 focus:ring-accent-500/10"
                        }`}
                      />
                      {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-1.5">
                      PAN Number <span className="text-brand-500 font-normal">(Optional, for 80G receipt)</span>
                    </label>
                    <input
                      type="text"
                      value={donor.pan}
                      onChange={(e) => setDonor({ ...donor, pan: e.target.value.toUpperCase() })}
                      placeholder="ABCDE1234F"
                      maxLength={10}
                      className="w-full px-4 py-3 rounded-xl border-2 border-surface-200 dark:border-brand-700 focus:border-accent-500 focus:ring-4 focus:ring-accent-500/10 outline-none transition-all"
                    />
                  </div>
                </div>

                <div className="rounded-xl bg-amber-50 dark:bg-amber-900/15 border border-amber-200 dark:border-amber-800 p-4 flex items-start gap-3">
                  <Receipt className="w-5 h-5 text-amber-600 dark:text-amber-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-sm font-medium text-amber-800 dark:text-amber-300">80G Tax Exemption</p>
                    <p className="text-sm text-amber-700 dark:text-amber-400 mt-0.5">
                       We will send a detailed receipt with 80G benefits to your email within 24 hours.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {step === "payment" && (
              <div className="space-y-6">
                <div>
                  <h2 className="text-xl sm:text-2xl font-display font-semibold mb-2">Review & Pay</h2>
                  <p className="text-brand-500 text-sm">Complete your donation securely</p>
                </div>

                <div className="rounded-xl border border-surface-200 dark:border-brand-700 overflow-hidden">
                  <div className="bg-surface-50 dark:bg-brand-800/30 px-5 py-3 border-b border-surface-200 dark:border-brand-700">
                    <p className="font-medium">Donation Summary</p>
                  </div>
                  <div className="p-5 space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-brand-500">Donation Amount</span>
                      <span className="text-lg font-bold">₹{finalAmount.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-brand-500">Frequency</span>
                      <span className="font-medium capitalize">{frequency === "once" ? "One-time" : "Monthly"}</span>
                    </div>
                    <div className="h-px bg-surface-200 dark:bg-brand-700" />
                    <div className="flex justify-between items-center">
                      <span className="text-brand-500">Donor</span>
                      <span className="font-medium">{donor.name}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-brand-500">Email</span>
                      <span className="font-medium text-sm">{donor.email}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-brand-500">Phone</span>
                      <span className="font-medium">{donor.phone}</span>
                    </div>
                    {donor.pan && (
                      <div className="flex justify-between items-center">
                        <span className="text-brand-500">PAN</span>
                        <span className="font-medium">{donor.pan}</span>
                      </div>
                    )}
                    <div className="h-px bg-surface-200 dark:bg-brand-700" />
                    <div className="flex justify-between items-center">
                      <span className="font-semibold">Total Amount</span>
                      <span className="text-2xl font-bold text-accent-600 dark:text-accent-400">
                        ₹{finalAmount.toLocaleString()}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-3">
                  <div className="rounded-xl bg-green-50 dark:bg-green-900/15 border border-green-200 dark:border-green-800 p-3 flex items-center gap-3">
                    <Shield className="w-5 h-5 text-green-600 dark:text-green-400 flex-shrink-0" />
                    <div className="text-sm">
                      <p className="font-medium text-green-800 dark:text-green-300">Secure Payment</p>
                      <p className="text-green-700 dark:text-green-400 text-xs">256-bit SSL encrypted</p>
                    </div>
                  </div>
                  <div className="rounded-xl bg-blue-50 dark:bg-blue-900/15 border border-blue-200 dark:border-blue-800 p-3 flex items-center gap-3">
                    <CreditCard className="w-5 h-5 text-blue-600 dark:text-blue-400 flex-shrink-0" />
                    <div className="text-sm">
                      <p className="font-medium text-blue-800 dark:text-blue-300">Multiple Options</p>
                      <p className="text-blue-700 dark:text-blue-400 text-xs">UPI, Cards, Netbanking</p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            <div className="flex gap-3 mt-8">
              {step !== "amount" && (
                <button
                  onClick={() => setStep(step === "payment" ? "details" : "amount")}
                  className="flex-1 sm:flex-none px-6 py-3.5 rounded-xl border-2 border-surface-200 dark:border-brand-700 font-medium hover:bg-surface-50 dark:hover:bg-brand-800/30 transition-all"
                >
                  Back
                </button>
              )}
              {step !== "payment" ? (
                <button
                  onClick={handleNext}
                  disabled={finalAmount < 1}
                  className="flex-1 px-6 py-3.5 rounded-xl bg-gradient-to-r from-accent-600 to-accent-500 text-white font-semibold hover:from-accent-700 hover:to-accent-600 disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-lg shadow-accent-500/25 flex items-center justify-center gap-2"
                >
                  Continue
                  <ChevronRight className="w-4 h-4" />
                </button>
              ) : (
                <button
                  onClick={handlePayment}
                  disabled={loading}
                  className="flex-1 px-6 py-3.5 rounded-xl bg-gradient-to-r from-accent-600 to-accent-500 text-white font-semibold hover:from-accent-700 hover:to-accent-600 disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-lg shadow-accent-500/25 flex items-center justify-center gap-2"
                >
                  {loading ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      Processing...
                    </>
                  ) : (
                    <>
                      Pay ₹{finalAmount.toLocaleString()}
                      <ChevronRight className="w-4 h-4" />
                    </>
                  )}
                </button>
              )}
            </div>
          </motion.div>
        </div>

        <div className="space-y-6">
          <div className="card rounded-2xl p-5 sticky top-24">
            <h3 className="font-display font-semibold mb-4 flex items-center gap-2">
              <Shield className="w-5 h-5 text-green-600" />
              Why Donate?
            </h3>
            <div className="space-y-4">
              {[
                { icon: "📋", title: "80G Tax Benefits", desc: "Get 50% tax exemption on your donation" },
                { icon: "🔍", title: "100% Transparent", desc: "Audited reports available for review" },
                { icon: "🎯", title: "Direct Impact", desc: "95% funds go directly to programs" },
                { icon: "📧", title: "Instant Receipt", desc: "Receive receipt via email immediately" },
              ].map((item) => (
                <div key={item.title} className="flex gap-3">
                  <span className="text-lg">{item.icon}</span>
                  <div>
                    <p className="text-sm font-medium">{item.title}</p>
                    <p className="text-xs text-brand-500 mt-0.5">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 pt-6 border-t border-surface-200 dark:border-brand-700">
              <p className="text-xs text-brand-500 text-center">
                Powered by
              </p>
              <p className="text-center font-semibold text-sm mt-1">
                Razorpay Secure Payments
              </p>
            </div>
          </div>

          <div className="card rounded-2xl p-5">
            <h3 className="font-display font-semibold mb-3">Bank Transfer</h3>
            <div className="space-y-2 text-sm">
              {[
                { label: "Account", value: CONTACT.bankDetails.name },
                { label: "A/C No", value: CONTACT.bankDetails.accountNo },
                { label: "IFSC", value: CONTACT.bankDetails.ifsc },
                { label: "Bank", value: CONTACT.bankDetails.bank },
                { label: "Branch", value: CONTACT.bankDetails.branch },
              ].map((item) => (
                <div key={item.label} className="flex justify-between">
                  <span className="text-brand-500">{item.label}:</span>
                  <span className="font-medium text-right">{item.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
