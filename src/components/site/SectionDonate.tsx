"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { CONTACT, DONATION_AMOUNTS } from "@/lib/site";
import { PaymentButton } from "@/components/site/RazorpayButton";

const donationGoals = [
  { raised: 5025000, goal: 10000000, label: "Annual Fundraising Goal" },
];

const recentDonors = [
  { name: "Rahul S.", amount: "₹10,000", time: "2 min ago" },
  { name: "Priya M.", amount: "₹5,000", time: "15 min ago" },
  { name: "Amit K.", amount: "₹25,000", time: "1 hour ago" },
];

export function SectionDonate() {
  const [frequency, setFrequency] = useState<"once" | "monthly">("once");

  const progress = (donationGoals[0].raised / donationGoals[0].goal) * 100;

  return (
    <section id="donate" className="scroll-mt-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-950 via-slate-950 to-blue-950" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_0%,rgba(59,130,246,0.12),transparent)]" />
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-32 -right-32 h-96 w-96 rounded-full bg-blue-600/10 blur-3xl animate-pulse-soft" />
        <div className="absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-blue-500/10 blur-3xl animate-pulse-soft" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-blue-600/5 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-6xl px-4 py-20 sm:py-28 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-6 py-2.5 text-xs font-semibold uppercase tracking-wider text-white/80 mb-6 ring-1 ring-white/20 backdrop-blur-sm">
            <svg className="h-4 w-4 text-accent-400" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
            </svg>
            Make a Difference
          </div>
          <h2 className="font-display text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl leading-[1.1]">
            Support Our Cause
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-white/80">
            Your donation helps us provide education, healthcare, and support to those who need it most.
          </p>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-5">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-3 space-y-8"
          >
            <div className="rounded-2xl bg-white/10 backdrop-blur-md border border-white/10 p-8">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <p className="text-2xl font-bold text-white">₹{donationGoals[0].raised.toLocaleString()}</p>
                  <p className="text-sm text-white/60">raised of ₹{donationGoals[0].goal.toLocaleString()} goal</p>
                </div>
                <div className="text-right">
                  <p className="text-2xl font-bold text-accent-400">{Math.round(progress)}%</p>
                  <p className="text-sm text-white/60">Complete</p>
                </div>
              </div>
              <div className="relative h-3 rounded-full bg-white/10 overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${progress}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 2, ease: "easeOut" }}
                  className="absolute inset-y-0 left-0 rounded-full bg-gradient-to-r from-accent-500 to-accent-600"
                />
              </div>

              <div className="mt-6 flex justify-center gap-2 bg-white/5 rounded-xl p-1">
                <button
                  onClick={() => setFrequency("once")}
                  className={`flex-1 py-2.5 text-sm font-semibold rounded-lg transition-all ${
                    frequency === "once"
                      ? "bg-white text-slate-900 shadow-sm"
                      : "text-white/60 hover:text-white"
                  }`}
                >
                  One-Time
                </button>
                <button
                  onClick={() => setFrequency("monthly")}
                  className={`flex-1 py-2.5 text-sm font-semibold rounded-lg transition-all ${
                    frequency === "monthly"
                      ? "bg-white text-slate-900 shadow-sm"
                      : "text-white/60 hover:text-white"
                  }`}
                >
                  Monthly
                </button>
              </div>

              <div className="mt-6 grid grid-cols-3 gap-3">
                {DONATION_AMOUNTS.filter((a) => a.value !== "custom").map((tier) => (
                  <PaymentButton
                    key={tier.value}
                    amount={Number(tier.value)}
                    className="group relative rounded-xl border border-white/15 bg-white/5 p-4 text-center transition-all duration-300 hover:bg-white/10 hover:border-accent-400/50 hover:scale-105 hover:shadow-xl flex flex-col items-center justify-center"
                  >
                    <p className="text-xl font-bold text-white group-hover:text-accent-400 transition-colors">
                      {tier.label}
                    </p>
                  </PaymentButton>
                ))}
              </div>

              <div className="mt-4">
                <PaymentButton
                  amount={0}
                  className="w-full rounded-xl border border-dashed border-white/20 bg-white/5 px-6 py-4 text-sm text-white/60 hover:bg-white/10 hover:border-accent-400/50 transition-all hover:text-accent-400"
                >
                  Custom Amount
                </PaymentButton>
              </div>

              <div className="mt-6 flex items-center justify-center gap-4 text-xs text-white/50">
                <span className="flex items-center gap-1">
                  <svg className="w-4 h-4 text-green-400" fill="currentColor" viewBox="0 0 24 24"><path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
                  Secure Payment
                </span>
                <span className="flex items-center gap-1">
                  <svg className="w-4 h-4 text-green-400" fill="currentColor" viewBox="0 0 24 24"><path d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
                  80G Tax Exemption
                </span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 space-y-6"
          >
            <div className="rounded-2xl bg-white/10 backdrop-blur-md border border-white/10 p-6">
              <h3 className="font-display text-lg font-semibold text-white mb-4">Recent Donors</h3>
              <div className="space-y-4">
                {recentDonors.map((donor) => (
                  <div key={donor.name} className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-accent-500 to-accent-600 flex items-center justify-center text-sm font-bold text-white">
                        {donor.name.charAt(0)}
                      </div>
                      <div>
                        <p className="text-sm font-medium text-white">{donor.name}</p>
                        <p className="text-xs text-white/50">{donor.time}</p>
                      </div>
                    </div>
                    <span className="text-sm font-semibold text-accent-400">{donor.amount}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-2xl bg-white/10 backdrop-blur-md border border-white/10 p-6 text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-green-500/20 to-green-600/10 border border-green-500/20 flex items-center justify-center">
                <svg className="w-8 h-8 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm12 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z" /></svg>
              </div>
              <h3 className="font-display text-lg font-semibold text-white mb-2">QR Code Payment</h3>
              <p className="text-sm text-white/60 mb-4">Scan with any UPI app</p>
              <div className="w-40 h-40 mx-auto rounded-xl bg-white p-2">
                <div className="w-full h-full bg-gradient-to-br from-slate-200 to-slate-300 rounded-lg flex items-center justify-center">
                  <svg className="w-24 h-24 text-slate-600" fill="currentColor" viewBox="0 0 24 24"><path d="M3 3h7v7H3V3zm2 2v3h3V5H5zm-2 9h7v7H3v-7zm2 2v3h3v-3H5zm9-13h7v7h-7V3zm2 2v3h3V5h-3zm-2 9h7v7h-7v-7zm2 2v3h3v-3h-3z" /></svg>
                </div>
              </div>
            </div>

            <div className="rounded-2xl bg-white/10 backdrop-blur-md border border-white/10 p-6">
              <h3 className="font-display text-lg font-semibold text-white mb-3">Bank Transfer</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-white/60">Account Name:</span>
                  <span className="text-white font-medium">{CONTACT.bankDetails.name}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-white/60">Account No:</span>
                  <span className="text-white font-medium">{CONTACT.bankDetails.accountNo}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-white/60">IFSC:</span>
                  <span className="text-white font-medium">{CONTACT.bankDetails.ifsc}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-white/60">Bank:</span>
                  <span className="text-white font-medium">{CONTACT.bankDetails.bank}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-white/60">Branch:</span>
                  <span className="text-white font-medium">{CONTACT.bankDetails.branch}</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-12 grid gap-4 sm:grid-cols-3"
        >
          {[
            { icon: "📋", title: "Tax Benefits", desc: "80G certified — get tax exemption on all donations" },
            { icon: "🔍", title: "100% Transparent", desc: "Annual reports and audits available on request" },
            { icon: "🎯", title: "Direct Impact", desc: "95% of funds go directly to programs" },
          ].map((item) => (
            <div key={item.title} className="rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm p-5 text-center">
              <span className="text-2xl mb-2 block">{item.icon}</span>
              <p className="font-semibold text-white text-sm">{item.title}</p>
              <p className="mt-1 text-xs text-white/60">{item.desc}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
