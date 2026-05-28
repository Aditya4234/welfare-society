import Image from "next/image";
import { CAMPAIGN_FEATURE } from "@/lib/site";
import { IMAGES } from "@/lib/images";

export function SectionFeaturedCampaign() {
  return (
    <section id="campaign" className="scroll-mt-20 bg-transparent">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center section-animate">
          <div className="animate-fade-in-up">
            <div className="inline-flex items-center gap-2 rounded-full bg-brand-100 px-5 py-2 text-xs font-semibold uppercase tracking-wider text-brand-700 mb-6">
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
              Featured Campaign
            </div>
            <h2 className="font-display text-3xl font-semibold tracking-tight text-brand-900 sm:text-4xl lg:text-[2.75rem] leading-[1.1]">
              {CAMPAIGN_FEATURE.title}
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-slate-600 dark:text-slate-300">{CAMPAIGN_FEATURE.body}</p>
            <a
              href="#donate"
              className="mt-8 inline-flex items-center gap-2 h-12 rounded-full bg-accent-600 px-8 text-base font-semibold text-white shadow-sm transition-all duration-300 hover:bg-accent-700 hover:shadow-md hover:scale-[1.02] active:scale-[0.98]"
            >
              {CAMPAIGN_FEATURE.cta}
              <svg className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </a>
            <div className="mt-10 rounded-2xl bg-white dark:bg-slate-800 p-6 shadow-sm border border-brand-900/8 dark:border-slate-700 transition-shadow duration-300 hover:shadow-md">
              <div className="flex justify-between text-sm mb-3">
                <span className="font-medium text-brand-900">Progress</span>
                <span className="font-semibold text-accent-600">68%</span>
              </div>
              <div className="h-3 rounded-full bg-brand-100 overflow-hidden">
                <div className="h-full w-[68%] rounded-full bg-gradient-to-r from-accent-500 to-accent-600 transition-all duration-1000 ease-out" />
              </div>
              <p className="mt-3 text-sm text-slate-500 dark:text-slate-400">1,360 of 2,000 families supported</p>
            </div>
          </div>
          <figure className="animate-fade-in-up" style={{animationDelay: '150ms'}}>
            <div className="overflow-hidden rounded-2xl border border-brand-900/8 bg-white dark:bg-slate-800 shadow-lg transition-shadow duration-300 hover:shadow-xl">
              <div className="relative aspect-[4/3] w-full overflow-hidden">
                <Image
                  src={IMAGES.about2}
                  alt="Community support and care"
                  fill
                  className="object-cover transition-transform duration-700 hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <figcaption className="border-t border-brand-900/8 p-6">
                <blockquote className="text-lg font-medium leading-relaxed text-slate-800 dark:text-slate-200">
                  &ldquo;When someone picks up the phone and actually listens, everything feels lighter.&rdquo;
                </blockquote>
                <div className="mt-5 flex items-center gap-3">
                  <div className="h-11 w-11 rounded-full bg-gradient-to-br from-brand-400 to-brand-600 flex items-center justify-center text-white font-semibold text-sm transition-transform duration-300 hover:scale-110">
                    {CAMPAIGN_FEATURE.storyName.split(" ").map(n => n[0]).join("")}
                  </div>
                  <div>
                    <p className="font-semibold text-brand-900">{CAMPAIGN_FEATURE.storyName}</p>
                    <p className="text-sm text-slate-500 dark:text-slate-400">{CAMPAIGN_FEATURE.storyRole}</p>
                  </div>
                </div>
              </figcaption>
            </div>
          </figure>
        </div>
        <p className="mt-12 rounded-xl border border-dashed border-brand-900/20 bg-white/80 dark:bg-slate-800/80 px-6 py-4 text-center text-sm text-slate-600 dark:text-slate-300 animate-fade-in-up" style={{animationDelay: '300ms'}}>
          Serving the community under the name <strong className="text-brand-900">Sai Ranju Welfare Society</strong>
          —carrying forward a legacy of care.{" "}
          <a href="#about" className="inline-flex items-center gap-1 font-semibold text-accent-600 underline-offset-4 transition-all duration-300 hover:underline group">
            Learn more
            <svg className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </p>
      </div>
    </section>
  );
}
