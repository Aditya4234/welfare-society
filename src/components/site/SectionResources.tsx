import { SectionShell } from "./SectionShell";

export function SectionResources() {
  const items = [
    { title: "Downloadable guides", body: "Eligibility checklists, local service maps, and caregiver planning templates.", icon: <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg> },
    { title: "Community circles", body: "Peer-led groups for caregivers and for youth navigating family illness.", icon: <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" /></svg> },
    { title: "Partner toolkit", body: "Logos, one-pagers, and event ideas for schools and workplaces.", icon: <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" /></svg> },
  ];
  return (
    <SectionShell id="resources" tone="surface">
        <div className="text-center animate-fade-in-up">
          <div className="inline-flex items-center gap-2 rounded-full bg-brand-100 px-5 py-2 text-xs font-semibold uppercase tracking-wider text-brand-700 mb-6">
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>
            Helpful Resources
          </div>
          <h2 className="font-display text-3xl font-semibold tracking-tight text-brand-900 sm:text-4xl lg:text-[2.75rem] leading-[1.1]">Resources</h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg leading-relaxed text-slate-600">
            Practical tools for patients, families, and partners — updated as our programs grow.
          </p>
        </div>
        <ul className="mt-12 grid gap-8 sm:grid-cols-3 section-animate">
          {items.map((item) => (
            <li key={item.title} className="animate-fade-in-up">
              <article className="card group h-full rounded-2xl p-8 transition-all duration-300 hover:shadow-lg hover:-translate-y-2">
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-brand-100 text-brand-700 mb-5 group-hover:bg-accent-100 group-hover:text-accent-700 transition-all duration-300 group-hover:scale-110">
                  {item.icon}
                </div>
                <h3 className="font-display text-lg font-semibold text-brand-900 leading-tight">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">{item.body}</p>
                <a href="#contact" className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-accent-600 underline-offset-4 transition-all duration-300 hover:underline group-hover:text-accent-700">
                  Request access
                  <svg className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                </a>
              </article>
            </li>
          ))}
        </ul>
    </SectionShell>
  );
}
