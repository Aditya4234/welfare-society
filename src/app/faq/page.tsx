import type { Metadata } from "next";
import { SITE } from "@/lib/site";
import { SectionFAQ } from "@/components/site/SectionFAQ";
import Link from "next/link";

export const metadata: Metadata = {
  title: "FAQ",
  description: `Frequently asked questions about ${SITE.name} — donations, volunteering, programs and more.`,
};

export default function FAQPage() {
  return (
    <main id="main">
      <section className="relative overflow-hidden bg-brand-950">
        <div className="absolute inset-0 bg-gradient-to-r from-brand-950 via-brand-900/95 to-brand-800/80" />
        <div className="absolute inset-0 bg-black/10" />
        <div className="absolute -top-24 -right-24 h-96 w-96 rounded-full bg-accent-500/10 blur-3xl" />
        <div className="absolute -bottom-24 -left-24 h-96 w-96 rounded-full bg-brand-600/10 blur-3xl" />
        <div className="relative z-10 mx-auto flex min-h-[40vh] items-center px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-5 text-sm font-semibold uppercase tracking-[0.35em] text-accent-400 sm:text-base">
              FAQ
            </p>
            <h1 className="font-display text-5xl font-bold leading-[1.02] tracking-tight text-white sm:text-6xl lg:text-7xl">
              Frequently Asked Questions
            </h1>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-brand-200 sm:text-xl">
              Find answers to common questions about our work, donations, and how you can get involved.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link
                href="/"
                className="inline-flex items-center gap-3 rounded-2xl border border-white/30 bg-white/10 px-8 py-4 text-lg font-semibold text-white backdrop-blur-md transition-all duration-300 hover:scale-[1.03] hover:bg-white/20"
              >
                Back to Home
              </Link>
            </div>
          </div>
        </div>
      </section>
      <SectionFAQ />
    </main>
  );
}
