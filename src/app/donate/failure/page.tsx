"use client";

import { Suspense } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { motion } from "framer-motion";
import { XCircle, ArrowRight, RotateCcw, Phone, Mail } from "lucide-react";
import { CONTACT } from "@/lib/site";

function FailureContent() {
  const searchParams = useSearchParams();
  const error = searchParams?.get("error") || "";

  const getErrorMessage = () => {
    switch (error) {
      case "verification_failed":
        return "Payment verification failed. This could be due to a network issue or payment timeout.";
      case "payment_cancelled":
        return "You cancelled the payment. No amount was deducted.";
      default:
        return "Something went wrong while processing your payment. Please try again.";
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="max-w-lg w-full"
    >
      <div className="card rounded-2xl overflow-hidden">
        <div className="bg-gradient-to-r from-red-600 to-rose-600 p-8 text-center text-white">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            className="w-20 h-20 mx-auto mb-4 rounded-full bg-white/20 flex items-center justify-center"
          >
            <XCircle className="w-10 h-10" />
          </motion.div>
          <h1 className="font-display text-2xl sm:text-3xl font-bold mb-2">Payment Incomplete</h1>
          <p className="text-red-100">Your donation could not be processed</p>
        </div>

        <div className="p-6 sm:p-8 space-y-6">
          <div className="rounded-xl bg-amber-50 dark:bg-amber-900/15 border border-amber-200 dark:border-amber-800 p-5">
            <h3 className="font-semibold text-amber-800 dark:text-amber-300 mb-2">What happened?</h3>
            <p className="text-sm text-amber-700 dark:text-amber-400">{getErrorMessage()}</p>
          </div>

          <div className="rounded-xl bg-surface-50 dark:bg-brand-800/30 p-5">
            <h3 className="font-semibold text-sm mb-3">Important Notes</h3>
            <ul className="space-y-2 text-sm text-brand-500">
              <li className="flex gap-2">
                <span className="text-green-500 mt-0.5">•</span>
                If any amount was deducted, it will be automatically refunded to your account within 5-7 business days.
              </li>
              <li className="flex gap-2">
                <span className="text-green-500 mt-0.5">•</span>
                You can try the payment again with the same or a different payment method.
              </li>
              <li className="flex gap-2">
                <span className="text-green-500 mt-0.5">•</span>
                Please ensure you have a stable internet connection during the payment process.
              </li>
            </ul>
          </div>

          <div className="space-y-3">
            <Link
              href="/donate"
              className="w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-accent-600 to-accent-500 text-white font-semibold hover:from-accent-700 hover:to-accent-600 transition-all shadow-lg shadow-accent-500/25"
            >
              <RotateCcw className="w-4 h-4" />
              Try Again
            </Link>

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

      <div className="mt-8 card rounded-xl p-5">
        <h3 className="font-semibold text-center mb-4">Need Help?</h3>
        <div className="grid sm:grid-cols-2 gap-3">
          <a
            href={`tel:${CONTACT.helpline}`}
            className="flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-surface-50 dark:bg-brand-800/30 border border-surface-200 dark:border-brand-700 hover:border-accent-300 transition-all"
          >
            <Phone className="w-4 h-4 text-accent-600" />
            <span className="text-sm font-medium">{CONTACT.helpline}</span>
          </a>
          <a
            href={`mailto:${CONTACT.email}`}
            className="flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-surface-50 dark:bg-brand-800/30 border border-surface-200 dark:border-brand-700 hover:border-accent-300 transition-all"
          >
            <Mail className="w-4 h-4 text-accent-600" />
            <span className="text-sm font-medium">{CONTACT.email}</span>
          </a>
        </div>
      </div>
    </motion.div>
  );
}

export default function DonationFailurePage() {
  return (
    <main id="main" className="min-h-screen flex items-center justify-center py-16 px-4">
      <Suspense fallback={<div className="text-center py-12">Loading...</div>}>
        <FailureContent />
      </Suspense>
    </main>
  );
}
