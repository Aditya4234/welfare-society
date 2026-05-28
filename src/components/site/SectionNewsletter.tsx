"use client";

import { useState } from "react";
import { SITE } from "@/lib/site";

export function SectionNewsletter() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    // Simulate API call
    setTimeout(() => {
      setStatus("success");
      setEmail("");
      setTimeout(() => setStatus("idle"), 3000);
    }, 1000);
  };

  return (
    <section id="newsletter" className="scroll-mt-20 relative bg-gradient-to-br from-brand-900 via-brand-800 to-brand-700 py-20 sm:py-24">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden" aria-hidden>
        <div className="absolute -top-24 left-1/4 h-96 w-96 rounded-full bg-white/5 blur-3xl" />
        <div className="absolute -bottom-24 right-1/4 h-96 w-96 rounded-full bg-accent-500/10 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-white/10 px-5 py-2 text-xs font-semibold uppercase tracking-wider text-brand-100 ring-1 ring-white/20">
          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
          Stay Updated
        </div>

        <h2 className="font-display text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl">
          Subscribe to Our Newsletter
        </h2>
        <p className="mt-4 text-lg leading-relaxed text-brand-100">
          Get monthly updates on our work, impact stories, and upcoming events. Join 5,000+ subscribers.
        </p>

        <form onSubmit={handleSubmit} className="mt-10 max-w-2xl mx-auto">
          <div className="flex flex-col sm:flex-row gap-3">
            <div className="flex-1">
              <label htmlFor="newsletter-email" className="sr-only">Email address</label>
              <input
                id="newsletter-email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="w-full rounded-full border-2 border-white/20 bg-white/10 px-6 py-4 text-white placeholder:text-brand-200 focus:border-accent-400 focus:bg-white/20 focus:outline-none transition-all duration-300"
                disabled={status === "loading" || status === "success"}
              />
            </div>
            <button
              type="submit"
              disabled={status === "loading" || status === "success"}
              className={`rounded-full px-8 py-4 text-sm font-bold uppercase tracking-wide transition-all duration-300 ${
                status === "success"
                  ? "bg-green-600 text-white"
                  : status === "loading"
                  ? "bg-brand-600 text-white/70 cursor-not-allowed"
                  : "bg-accent-600 text-white hover:bg-accent-700 hover:shadow-lg hover:scale-105 active:scale-95"
              }`}
            >
              {status === "loading" ? (
                <span className="flex items-center gap-2">
                  <svg className="h-4 w-4 animate-spin" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                  </svg>
                  Subscribing...
                </span>
              ) : status === "success" ? (
                "Subscribed ✓"
              ) : (
                "Subscribe"
              )}
            </button>
          </div>
          <p className="mt-4 text-xs text-brand-200/70">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </form>

        {/* Social proof */}
        <div className="mt-12 flex flex-wrap justify-center gap-8 text-sm text-brand-200">
          {[
            { icon: "✓", text: "5,000+ Subscribers" },
            { icon: "✓", text: "No Spam, Ever" },
            { icon: "✓", text: "Monthly Updates" },
          ].map((item) => (
            <div key={item.text} className="flex items-center gap-2">
              <span className="text-accent-400">{item.icon}</span>
              <span>{item.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
