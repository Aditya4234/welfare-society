import Image from "next/image";
import { SITE, CONTACT } from "@/lib/site";
import { SectionShell } from "@/components/site/SectionShell";

export default function OurHeadPage() {
  return (
    <>
      <main id="main">
        {/* Hero Section */}
        <section className="relative min-h-[60vh] overflow-hidden bg-brand-950">
          <div className="absolute inset-0 bg-gradient-to-r from-brand-950 via-brand-900/95 to-brand-800/80" />
          <div className="absolute inset-0 bg-black/10" />
          <div className="absolute -top-24 -right-24 h-96 w-96 rounded-full bg-accent-500/10 blur-3xl" />
          <div className="absolute -bottom-24 -left-24 h-96 w-96 rounded-full bg-brand-600/10 blur-3xl" />
          <div className="relative z-10 mx-auto flex min-h-[60vh] items-center pl-4 pr-6 sm:pl-6 sm:pr-10 lg:pl-10 lg:pr-16">
            <div className="max-w-2xl">
              <p className="mb-5 text-sm font-semibold uppercase tracking-[0.35em] text-accent-400 sm:text-base">
                Founder &amp; President
              </p>
              <h1 className="font-display text-5xl font-bold leading-[1.02] tracking-tight text-white sm:text-6xl lg:text-7xl">
                Mrs. Ranju
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-brand-200 sm:text-xl">
                Leading with compassion and dedication to build a better society.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="#about-president"
                  className="inline-flex items-center gap-3 rounded-2xl bg-accent-600 px-8 py-4 text-lg font-semibold text-white shadow-xl transition-all duration-300 hover:scale-[1.03] hover:bg-accent-700"
                >
                  Learn More
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-3 rounded-2xl border border-white/30 bg-white/10 px-8 py-4 text-lg font-semibold text-white backdrop-blur-md transition-all duration-300 hover:scale-[1.03] hover:bg-white/20"
                >
                  Contact Office
                </a>
              </div>
            </div>
          </div>
        </section>

        <SectionShell tone="surface" id="about-president">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="relative mx-auto w-full max-w-md lg:mx-0">
              <div className="aspect-[3/4] overflow-hidden rounded-3xl bg-white/70 dark:bg-slate-800/70 shadow-md ring-1 ring-brand-900/10">
                <Image
                  src="/image/president.png"
                  alt="Mrs. Ranju - President"
                  width={420}
                  height={560}
                  className="h-full w-full object-cover"
                  priority
                />
              </div>
              <div className="absolute -bottom-4 -right-4 rounded-2xl bg-white/85 dark:bg-slate-800/85 px-4 py-3 shadow-md ring-1 ring-brand-900/10 backdrop-blur">
                <p className="text-xs font-semibold text-brand-950">ESTD {SITE.establishedYear}</p>
                <p className="text-[10px] text-slate-500 dark:text-slate-400">{SITE.registrationNo}</p>
              </div>
            </div>

            <div>
              <p className="inline-flex items-center gap-2 rounded-full border border-brand-900/10 bg-white/70 dark:bg-slate-800/70 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-slate-700 dark:text-slate-300">
                <span className="h-1.5 w-1.5 rounded-full bg-accent-500" aria-hidden />
                Founder &amp; President
              </p>
              <h1 className="mt-4 font-display text-4xl font-semibold leading-tight text-brand-950 dark:text-white sm:text-5xl">
                Mrs. Ranju
              </h1>
              <p className="mt-4 text-lg text-slate-600 dark:text-slate-300">{SITE.name}</p>
              <div className="mt-6 flex flex-wrap gap-3">
                <span className="rounded-full border border-brand-900/10 bg-white/70 dark:bg-slate-800/70 px-4 py-2 text-sm text-slate-700 dark:text-slate-300">
                  {SITE.regType}
                </span>
                <span className="rounded-full border border-brand-900/10 bg-white/70 dark:bg-slate-800/70 px-4 py-2 text-sm text-slate-700 dark:text-slate-300">
                  {SITE.taxExemption}
                </span>
              </div>
              <p className="mt-6 text-base leading-relaxed text-slate-600 dark:text-slate-300">
                Leading with compassion and dedication, Mrs. Ranju has been the guiding force behind{" "}
                {SITE.name} since its establishment in {SITE.establishedYear}.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center rounded-xl bg-brand-950 px-6 py-3 text-sm font-semibold text-white shadow-md transition-all duration-300 hover:bg-brand-900 hover:shadow-lg hover:scale-[1.02] active:scale-[0.98]"
                >
                  Contact office
                </a>
                <a
                  href="/"
                  className="inline-flex items-center justify-center rounded-xl border border-brand-900/12 bg-white/70 dark:bg-slate-800/70 px-6 py-3 text-sm font-semibold text-brand-950 dark:text-white transition-all duration-300 hover:bg-white dark:hover:bg-slate-800 hover:shadow-md hover:scale-[1.02] active:scale-[0.98]"
                >
                  Back to home
                </a>
              </div>
            </div>
          </div>
        </SectionShell>

        <SectionShell tone="surface">
          <div className="mx-auto max-w-3xl">
            <h2 className="font-display text-3xl font-semibold text-brand-950 dark:text-white sm:text-4xl">
              About Mrs. Ranju
            </h2>
            <div className="mt-8 space-y-6 text-lg leading-relaxed text-slate-600 dark:text-slate-300">
              <p>
                Mrs. Ranju is the founder and president of {SITE.name}. Her vision of a society where
                no family is left behind has driven the organization's mission since {SITE.establishedYear}.
              </p>
              <p>
                With over {new Date().getFullYear() - parseInt(SITE.establishedYear)} years of experience
                in social work, she has transformed the lives of thousands of underprivileged families
                through healthcare initiatives, skill development programs, and community support services.
              </p>
              <p>
                Her dedication to social welfare and community development continues to inspire countless
                individuals to join the cause and make a difference in people's lives.
              </p>
            </div>

            <div className="mt-12 grid gap-6 sm:grid-cols-3">
              {[
                { value: "2,000+", label: "Families Supported" },
                { value: "15+", label: "Years of Service" },
                { value: "50+", label: "Health Camps Organized" },
              ].map((x) => (
                <div key={x.label} className="card rounded-2xl p-6 text-center">
                  <p className="font-display text-3xl font-bold text-brand-950 dark:text-white">{x.value}</p>
                  <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{x.label}</p>
                </div>
              ))}
            </div>
          </div>
        </SectionShell>

        <SectionShell tone="surface">
          <div className="mx-auto max-w-3xl text-center">
            <svg className="mx-auto mb-6 h-12 w-12 text-brand-700 opacity-80" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
            </svg>
            <blockquote className="font-display text-2xl font-medium leading-relaxed text-brand-950 dark:text-white italic">
              &ldquo;{SITE.tagline}&rdquo;
            </blockquote>
            <p className="mt-6 font-semibold text-brand-950 dark:text-white">Mrs. Ranju</p>
            <p className="text-sm text-slate-500 dark:text-slate-400">Founder &amp; President, {SITE.name}</p>
          </div>
        </SectionShell>

        <SectionShell id="contact" tone="surface">
          <div className="mx-auto max-w-3xl">
            <div className="text-center">
              <h2 className="font-display text-2xl font-semibold text-brand-950 dark:text-white sm:text-3xl">
                Get in Touch
              </h2>
              <p className="mt-3 text-slate-600 dark:text-slate-300">Office and contact details for quick support.</p>
            </div>
            <div className="mt-8 grid gap-6 sm:grid-cols-2">
              <div className="card rounded-2xl p-6">
                <h3 className="font-semibold text-brand-950 dark:text-white">Office Address</h3>
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{CONTACT.address}</p>
              </div>
              <div className="card rounded-2xl p-6">
                <h3 className="font-semibold text-brand-950 dark:text-white">Contact Details</h3>
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">Phone: {CONTACT.helpline}</p>
                <p className="text-sm text-slate-600 dark:text-slate-300">Email: {CONTACT.email}</p>
              </div>
            </div>
          </div>
        </SectionShell>
      </main>
    </>
  );
}
