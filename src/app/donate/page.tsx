import { Metadata } from "next";
import { DonationForm } from "@/components/site/DonationForm";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Donate",
  description: `Make a secure donation to ${SITE.name}. Support education, healthcare, and community welfare programs.`,
};

export default function DonatePage() {
  return (
    <main id="main" className="relative overflow-hidden py-12 sm:py-16 lg:py-20">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-950 via-slate-950 to-blue-950" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_0%,rgba(59,130,246,0.12),transparent)]" />
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-32 -right-32 h-96 w-96 rounded-full bg-blue-600/10 blur-3xl animate-pulse-soft" />
        <div className="absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-blue-500/10 blur-3xl animate-pulse-soft" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-blue-600/5 blur-3xl" />
      </div>
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-white/80 mb-6 ring-1 ring-white/20 backdrop-blur-sm">
            <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
            </svg>
            Make a Difference
          </div>
          <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-slate-900 dark:text-white">
            Support Our Cause
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-white/80">
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
              <p className="font-semibold text-sm text-white">{item.title}</p>
              <p className="mt-1 text-xs text-white/60">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
