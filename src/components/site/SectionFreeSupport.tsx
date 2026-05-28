import { CONTACT, SITE } from "@/lib/site";
import { SectionShell } from "./SectionShell";

export function SectionFreeSupport() {
  return (
    <SectionShell id="support" tone="surface" className="section-animate">
          <div className="flex flex-col-reverse lg:flex-row lg:items-start lg:gap-12">
          <div className="lg:flex-1 animate-fade-in-up">
            <div className="inline-flex items-center gap-2 rounded-full bg-brand-100 px-5 py-2 text-xs font-semibold uppercase tracking-wider text-brand-700 mb-6">
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              Free Support
            </div>
            <h2 className="font-display text-3xl font-semibold tracking-tight text-brand-900 sm:text-4xl lg:text-[2.75rem] leading-[1.1]">
              Get free, personalized information and support
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-slate-600 dark:text-slate-300">
              Trained coordinators and social workers are available to speak with individuals and caregivers one-on-one — at no cost — about programs, paperwork, and next steps.
            </p>
          </div>
          <div className="mt-8 lg:mt-0 lg:shrink-0 lg:w-80 animate-fade-in-up" style={{animationDelay: '150ms'}}>
            <div className="card rounded-2xl p-8 transition-shadow duration-300 hover:shadow-md">
              <p className="font-semibold text-brand-900">Welfare information specialists</p>
              <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                Connect with our team for accurate information about eligibility, local resources, and emotional support during difficult stretches.
              </p>
              <div className="mt-5 space-y-3 text-sm">
                <p className="font-semibold text-brand-800">Call: {CONTACT.helpline}</p>
                <a className="inline-flex items-center gap-1 font-semibold text-accent-600 underline-offset-4 transition-all duration-300 hover:underline group" href={`mailto:${CONTACT.email}`}>
                  Email us
                  <svg className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>
              <p className="mt-4 text-xs text-slate-500 dark:text-slate-400">{CONTACT.helplineHours}</p>
            </div>
          </div>
          </div>

          <div className="mt-12 rounded-2xl bg-gradient-to-br from-brand-50/80 to-white/70 dark:from-slate-800 dark:to-slate-900 border border-brand-900/8 p-8 animate-fade-in-up" style={{animationDelay: '300ms'}}>
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
              <div>
                <p className="font-display text-xl font-semibold text-brand-900">It is solidarity week at {SITE.name}</p>
                <p className="mt-3 text-slate-600 dark:text-slate-300 leading-relaxed">
                  Do not miss your chance to give directly to our emergency relief fund this season — and have your gift matched on select days.
                </p>
              </div>
              <a
                href="#donate"
                className="inline-flex items-center gap-2 h-12 shrink-0 rounded-full bg-accent-600 px-8 text-sm font-semibold text-white shadow-sm transition-all duration-300 hover:bg-accent-700 hover:shadow-md hover:scale-[1.02] active:scale-[0.98]"
              >
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" /></svg>
                Give now
              </a>
            </div>
          </div>
    </SectionShell>
  );
}
