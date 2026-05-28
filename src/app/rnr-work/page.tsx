"use client";
import Image from "next/image";
import { SectionShell } from "@/components/site/SectionShell";
import RrWork from "@/components/site/RrWork";

export default function RnrWorkPage() {
  return (
    <>
      <main id="main">
        {/* Hero Section */}
        <section className="relative min-h-[50vh] overflow-hidden bg-brand-950">
          <div className="absolute inset-0 bg-gradient-to-r from-brand-950 via-brand-900/95 to-brand-800/80" />
          <div className="absolute inset-0 bg-black/10" />
          <div className="absolute -top-24 -right-24 h-96 w-96 rounded-full bg-accent-500/10 blur-3xl" />
          <div className="absolute -bottom-24 -left-24 h-96 w-96 rounded-full bg-brand-600/10 blur-3xl" />
          <div className="relative z-10 mx-auto flex min-h-[50vh] items-center pl-4 pr-6 sm:pl-6 sm:pr-10 lg:pl-10 lg:pr-16">
            <div className="max-w-2xl">
              <p className="mb-5 text-sm font-semibold uppercase tracking-[0.35em] text-accent-400 sm:text-base">
                Documents
              </p>
              <h1 className="font-display text-5xl font-bold leading-[1.02] tracking-tight text-white sm:text-6xl lg:text-7xl">
                R&amp;R Work
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-brand-200 sm:text-xl">
                View our official R&amp;R work document. Download or open the PDF for detailed information.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <button
                  type="button"
                  onClick={() => window.open("/image/SCAN.pdf", "_blank")}
                  className="inline-flex items-center gap-3 rounded-2xl bg-accent-600 px-8 py-4 text-lg font-semibold text-white shadow-xl transition-all duration-300 hover:scale-[1.03] hover:bg-accent-700"
                >
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  Open PDF
                </button>
                <a
                  href="/"
                  className="inline-flex items-center gap-3 rounded-2xl border border-white/30 bg-white/10 px-8 py-4 text-lg font-semibold text-white backdrop-blur-md transition-all duration-300 hover:scale-[1.03] hover:bg-white/20"
                >
                  Back to Home
                </a>
              </div>
            </div>
          </div>
        </section>

        <RrWork />
      </main>
    </>
  );
}
