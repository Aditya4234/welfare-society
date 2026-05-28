import Image from "next/image";
import { IMAGES } from "@/lib/images";

export function SectionIntroNarrative() {
  return (
    <section id="about" className="scroll-mt-20 bg-transparent">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          
          {/* Left Content */}
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-brand-100 px-5 py-2 text-xs font-semibold uppercase tracking-wider text-brand-700 mb-4">
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              About Us
            </div>

            <h2 className="font-display text-3xl font-semibold tracking-tight text-brand-900 sm:text-4xl lg:text-[2.75rem] leading-[1.1]">
              We Work for a Better <br />
              and Inclusive Society
            </h2>

            <p className="mt-4 max-w-xl text-lg leading-relaxed text-slate-600 dark:text-slate-300">
              Hope & Care Welfare Society is a non-profit organization
              working for the upliftment of underprivileged communities.
              We focus on education, healthcare, women empowerment,
              and environmental sustainability to create a positive
              and lasting impact.
            </p>

            <button className="mt-8 inline-flex items-center gap-2 rounded-full bg-accent-600 px-8 py-3 text-sm font-semibold text-white shadow-sm transition-all duration-300 hover:bg-accent-700 hover:shadow-md">
              Learn More About Us
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>

          {/* Right Image */}
          <div className="relative">
            
            {/* Dotted Decoration Top Right */}
            <div className="absolute -top-4 -right-4 grid grid-cols-4 gap-1">
              {Array.from({ length: 16 }).map((_, i) => (
                <span
                  key={i}
                  className="h-1.5 w-1.5 rounded-full bg-brand-300"
                />
              ))}
            </div>

            {/* Dotted Decoration Bottom Left */}
            <div className="absolute -bottom-4 -left-4 grid grid-cols-4 gap-1">
              {Array.from({ length: 16 }).map((_, i) => (
                <span
                  key={i}
                  className="h-1.5 w-1.5 rounded-full bg-brand-300"
                />
              ))}
            </div>

            <div className="overflow-hidden rounded-3xl shadow-xl">
              <Image
                src={IMAGES.about1}
                alt="Children smiling"
                width={700}
                height={500}
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}