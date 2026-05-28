import Image from "next/image";
import { SITE, VISION_PILLS } from "@/lib/site";

export function SectionVisionImpact() {
  const stats = [
    { number: "2,000+", label: "Parivaaron tak madad", icon: <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" /></svg> },
    { number: "500+", label: "Jeevan parivartan", icon: <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg> },
    { number: "50+", label: "Swasthya shivir", icon: <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg> },
    { number: "15+", label: "Saal ka safar", icon: <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg> },
  ];

  return (
    <div className="border-b border-brand-900/10">
      <section id="vision" className="scroll-mt-20 relative">
        <div className="relative overflow-hidden px-4 py-20 text-white sm:px-6 sm:py-32 lg:px-8">
          {/* Background with gradient */}
          <div className="absolute inset-0 gradient-primary" />
          <div className="absolute inset-0 bg-black/20" />
          {/* Decorative elements */}
          <div className="absolute -top-24 -right-24 h-96 w-96 rounded-full bg-brand-600/10 blur-3xl" />
          <div className="absolute -bottom-24 -left-24 h-96 w-96 rounded-full bg-accent-500/10 blur-3xl" />

          <div className="relative mx-auto max-w-4xl text-center animate-fade-in-up">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-5 py-2 text-xs font-semibold uppercase tracking-wider text-brand-100 mb-6 backdrop-blur-sm ring-1 ring-white/20">
              Hamara Sapna
            </div>
            <h2 className="font-display text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-[2.75rem] leading-[1.1]">
              Hamare sapne ka Bharat — jahan koi akela na ho
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-brand-100">
              Har parivaar ke saath khade rehna, madad karna, aur ekjutta banana — yahi hai {SITE.name} ka lakshya.
            </p>
            <a
              href="#about"
              className="mt-8 inline-flex items-center gap-2 h-12 rounded-full border border-white/40 bg-white/10 px-8 text-base font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:bg-white/20 hover:scale-[1.02] active:scale-[0.98]"
            >
              {SITE.name} ke baare mein jaanein
              <svg className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </a>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              {VISION_PILLS.map((p) => (
                <a
                  key={p.label}
                  href={p.href}
                  className="rounded-full border border-white/25 bg-white/10 px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-white/20 hover:border-white/40 hover:scale-105"
                >
                  {p.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section id="involved" className="scroll-mt-20 border-t border-white/10 bg-white px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="grid grid-cols-2 gap-6 sm:grid-cols-4 section-animate">
            {stats.map((stat) => (
              <div key={stat.label} className="group animate-fade-in-up text-center rounded-2xl border border-brand-900/8 bg-white p-8 shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-2 hover:border-brand-200">
                <div className="flex justify-center text-brand-600 mb-4 group-hover:text-accent-600 transition-colors duration-300">
                  {stat.icon}
                </div>
                <p className="font-display text-4xl font-bold text-brand-900">{stat.number}</p>
                <p className="mt-2 text-sm font-medium text-slate-600">{stat.label}</p>
              </div>
            ))}
          </div>
          <div className="mx-auto mt-16 max-w-2xl text-center animate-fade-in-up" style={{animationDelay: '300ms'}}>
            <h2 className="font-display text-2xl font-semibold text-brand-900 sm:text-3xl leading-tight">
              Badlaav mein hissa lein
            </h2>
            <p className="mx-auto mt-4 text-lg leading-relaxed text-slate-600">
              Volunteer banein, daan dein, ya bas apne aas-paas logon ke saath baat share karein — har kadam maayne rakhta hai.
            </p>
            <a
              href="#contact"
              className="mt-8 inline-flex items-center gap-2 h-12 rounded-full bg-accent-600 px-8 text-base font-semibold text-white shadow-sm transition-all duration-300 hover:bg-accent-700 hover:shadow-md hover:scale-[1.02] active:scale-[0.98]"
            >
              Humse judein
              <svg className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
