import { EXPERT_ROWS } from "@/lib/site";
import { SectionShell } from "./SectionShell";

const PROGRAM_ICONS = [
  <svg key="health" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>,
  <svg key="skill" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>,
];

export function SectionExpertHelp() {
  return (
    <SectionShell id="programs-nav" tone="surface">
      <div className="text-center mb-12 animate-fade-in-up">
        <div className="inline-flex items-center gap-2 rounded-full bg-brand-100 px-5 py-2 text-xs font-semibold uppercase tracking-wider text-brand-700 mb-6">
          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" /></svg>
          Our Programs
        </div>
        <h2 className="font-display text-3xl font-semibold tracking-tight text-brand-900 sm:text-4xl lg:text-[2.75rem] leading-[1.1]">How we help</h2>
      </div>
      <div className="grid gap-8 lg:grid-cols-2 section-animate">
        {EXPERT_ROWS.map((row, i) => (
          <article key={row.title} className="card group animate-fade-in-up rounded-2xl p-8 transition-all duration-300 hover:shadow-lg hover:-translate-y-2">
            <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-gradient-to-br from-brand-100 to-brand-200 text-brand-700 mb-6 transition-transform duration-300 group-hover:scale-110">
              {PROGRAM_ICONS[i] ?? PROGRAM_ICONS[0]}
            </div>
            <h2 className="font-display text-2xl font-semibold text-brand-900 leading-tight">{row.title}</h2>
            <p className="mt-4 text-slate-600 dark:text-slate-300 leading-relaxed">{row.body}</p>
            <p className="mt-6 flex flex-wrap gap-4 text-sm font-semibold">
              {row.links.map((l) => (
                <a key={l.label} href={l.href} className="inline-flex items-center gap-1 text-accent-600 underline-offset-4 transition-all duration-300 hover:underline group-hover:text-accent-700">
                  {l.label}
                  <svg className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              ))}
            </p>
          </article>
        ))}
      </div>

      <div className="card mt-16 rounded-2xl px-8 py-10 text-center transition-shadow duration-300 hover:shadow-md animate-fade-in-up">
        <p className="font-display text-lg font-semibold text-brand-900">Are you a caregiver or community partner?</p>
        <p className="mt-3 text-slate-600 dark:text-slate-300 leading-relaxed">We have resources for you too — guides, peer circles, and training sessions.</p>
        <a href="#resources" className="mt-5 inline-flex items-center gap-1 font-semibold text-accent-600 underline-offset-4 transition-all duration-300 hover:underline group">
          Browse caregiver & partner resources
          <svg className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </a>
      </div>
    </SectionShell>
  );
}
