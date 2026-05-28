"use client";
import { SectionShell } from "@/components/site/SectionShell";

export default function RrWork() {
  const handleOpenPdf = () => {
    window.open("/image/SCAN.pdf", "_blank");
  };

  return (
    <SectionShell tone="surface">
          <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-start">
            <div>
              <p className="inline-flex items-center gap-2 rounded-full border border-brand-900/10 bg-white/70 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-slate-700">
                <span className="h-1.5 w-1.5 rounded-full bg-accent-500" aria-hidden />
                Documents
              </p>
              <h1 className="mt-4 font-display text-3xl font-semibold tracking-tight text-brand-950 sm:text-4xl">
                R&amp;R Work
              </h1>
              <p className="mt-4 text-lg leading-relaxed text-slate-600">
                View our R&amp;R work document (PDF). If you need a printed copy or verification,
                contact our office.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <button
                  type="button"
                  onClick={handleOpenPdf}
                  className="inline-flex items-center gap-3 rounded-xl bg-brand-950 px-6 py-3.5 text-base font-semibold text-white shadow-md transition-all duration-300 hover:bg-brand-900 hover:shadow-lg hover:scale-[1.02] active:scale-[0.98]"
                >
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  Open PDF
                </button>
                <a
                  href="/"
                  className="inline-flex items-center justify-center rounded-xl border border-brand-900/12 bg-white/70 px-6 py-3.5 text-base font-semibold text-brand-950 transition-all duration-300 hover:bg-white hover:shadow-md hover:scale-[1.02] active:scale-[0.98]"
                >
                  Back to home
                </a>
              </div>
            </div>

            <aside className="card rounded-2xl p-6">
              <p className="text-sm font-semibold text-brand-950">Tip</p>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                PDF opens in a new tab. If it doesn’t load on mobile, use “Download” from the
                browser menu.
              </p>
              <div className="mt-5 rounded-xl border border-brand-900/10 bg-white/70 p-4">
                <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">File</p>
                <p className="mt-1 font-medium text-brand-950">`/image/SCAN.pdf`</p>
              </div>
            </aside>
          </div>
        </SectionShell>
  );
}
