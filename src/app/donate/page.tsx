import { Metadata } from "next";
import { DonationForm } from "@/components/site/DonationForm";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Donate",
  description: `Make a secure donation to ${SITE.name}. Support education, healthcare, and community welfare programs.`,
};

export default function DonatePage() {
  return (
    <main id="main" className="py-12 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 rounded-full bg-accent-100 dark:bg-accent-900/20 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-accent-700 dark:text-accent-400 mb-6">
            <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
            </svg>
            Make a Difference
          </div>
          <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight">
            Support Our Cause
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-brand-500">
            Your contribution helps provide education, healthcare, and support to underprivileged communities.
          </p>
        </div>

        <DonationForm />

        <div className="mt-16 grid gap-6 sm:grid-cols-3">
          {[
            { icon: "📋", title: "Tax Benefits", desc: "80G certified — get 50% tax exemption on all donations" },
            { icon: "🔍", title: "100% Transparent", desc: "Annual reports and audits available on request" },
            { icon: "🎯", title: "Direct Impact", desc: "95% of funds go directly to programs" },
          ].map((item) => (
            <div key={item.title} className="card rounded-xl p-5 text-center">
              <span className="text-2xl mb-2 block">{item.icon}</span>
              <p className="font-semibold text-sm">{item.title}</p>
              <p className="mt-1 text-xs text-brand-500">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
