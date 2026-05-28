"use client";

import { Suspense, useState } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { motion } from "framer-motion";
import { CheckCircle, Download, ArrowRight, Heart, Copy, Check } from "lucide-react";
import { SITE } from "@/lib/site";

function SuccessContent() {
  const searchParams = useSearchParams();
  const [copied, setCopied] = useState(false);

  const orderId = searchParams?.get("order_id") || "N/A";
  const paymentId = searchParams?.get("payment_id") || "N/A";
  const amount = searchParams?.get("amount") || "0";
  const amountNum = Number(amount);

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="max-w-lg w-full"
    >
      <div className="card rounded-2xl overflow-hidden">
        <div className="bg-gradient-to-r from-green-600 to-emerald-600 p-8 text-center text-white">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            className="w-20 h-20 mx-auto mb-4 rounded-full bg-white/20 flex items-center justify-center"
          >
            <CheckCircle className="w-10 h-10" />
          </motion.div>
          <h1 className="font-display text-2xl sm:text-3xl font-bold mb-2">Payment Successful!</h1>
          <p className="text-green-100">Thank you for your generous donation</p>
        </div>

        <div className="p-6 sm:p-8 space-y-6">
          <div className="text-center">
            <p className="text-slate-500 dark:text-slate-400 text-sm mb-1">Donation Amount</p>
            <p className="text-4xl font-bold text-green-600 dark:text-green-400">
              ₹{amountNum.toLocaleString()}
            </p>
          </div>

          <div className="bg-surface-50 dark:bg-brand-800/30 rounded-xl p-5 space-y-4">
            <h3 className="font-semibold text-sm uppercase tracking-wide text-slate-500 dark:text-slate-400">Payment Details</h3>
            
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-slate-500 dark:text-slate-400 text-sm">Order ID</span>
                <div className="flex items-center gap-2">
                  <code className="text-sm font-mono bg-surface-100 dark:bg-brand-800 px-2 py-1 rounded">
                    {orderId}
                  </code>
                  <button
                    onClick={() => handleCopy(orderId)}
                    className="text-brand-400 hover:text-brand-600 transition-colors"
                  >
                    {copied ? <Check className="w-4 h-4 text-green-500" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-slate-500 dark:text-slate-400 text-sm">Payment ID</span>
                <code className="text-sm font-mono bg-surface-100 dark:bg-brand-800 px-2 py-1 rounded">
                  {paymentId}
                </code>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-slate-500 dark:text-slate-400 text-sm">Date</span>
                <span className="text-sm font-medium text-slate-900 dark:text-slate-100">
                  {new Date().toLocaleDateString("en-IN", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </span>
              </div>
            </div>
          </div>

          <div className="rounded-xl bg-blue-50 dark:bg-blue-900/15 border border-blue-200 dark:border-blue-800 p-5 flex items-start gap-3">
            <Heart className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
            <div>
              <p className="text-sm font-medium text-blue-800 dark:text-blue-300">80G Tax Receipt</p>
              <p className="text-sm text-blue-700 dark:text-blue-400 mt-0.5">
                A detailed receipt with 80G tax exemption benefits has been sent to your registered email.
                Please check your inbox (and spam folder if needed).
              </p>
            </div>
          </div>

          <div className="space-y-3">
            <button className="w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-accent-600 to-accent-500 text-white font-semibold hover:from-accent-700 hover:to-accent-600 transition-all shadow-lg shadow-accent-500/25">
              <Download className="w-4 h-4" />
              Download Receipt (PDF)
            </button>

            <Link
              href="/"
              className="w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl border-2 border-surface-200 dark:border-brand-700 font-medium hover:bg-surface-50 dark:hover:bg-brand-800/30 transition-all"
            >
              Back to Home
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>

      <div className="mt-8 text-center">
      <p className="text-slate-500 dark:text-slate-400 text-sm">
        On behalf of {SITE.name}, we express our heartfelt gratitude for your support.
      </p>
      </div>
    </motion.div>
  );
}

export default function DonationSuccessPage() {
  return (
    <main id="main" className="min-h-screen flex items-center justify-center py-16 px-4">
      <Suspense fallback={<div className="text-center py-12">Loading...</div>}>
        <SuccessContent />
      </Suspense>
    </main>
  );
}
