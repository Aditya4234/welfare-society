"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { IMAGES } from "@/lib/images";
import { SITE } from "@/lib/site";

const timeline = [
  { year: "2020", event: "Foundation of Sai Ranju Welfare Society" },
  { year: "2021", event: "First health camp organized" },
  { year: "2022", event: "Education support program launched" },
  { year: "2023", event: "Reached 50+ villages" },
  { year: "2024", event: "COVID-19 relief operations" },
  { year: "2025", event: "10,000+ children helped" },
  { year: "2026", event: "Expanding to 5 new districts" },
];

export function SectionAbout() {
  return (
    <section id="about" className="scroll-mt-20 relative overflow-hidden py-20 sm:py-28">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-40 -left-32 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-40 -right-32 w-96 h-96 bg-green-500/5 rounded-full blur-3xl" />
      </div>
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 rounded-full bg-brand-100 dark:bg-brand-800 px-5 py-2 text-xs font-semibold uppercase tracking-wider text-brand-700 dark:text-brand-200 mb-6">
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            About Us
          </div>
          <h2 className="font-display text-3xl font-semibold tracking-tight text-brand-950 dark:text-white sm:text-4xl lg:text-5xl leading-[1.1]">
            Our Story & Mission
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-slate-500 dark:text-slate-400">
            {SITE.description}
          </p>
        </motion.div>

        <div className="grid items-center gap-12 lg:grid-cols-2 mb-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="relative grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="relative overflow-hidden rounded-2xl shadow-xl aspect-[3/4]">
                  <Image src={IMAGES.about1} alt="NGO Work" fill className="object-cover hover:scale-110 transition-transform duration-700" sizes="(max-width: 768px) 50vw, 300px" />
                </div>
                <div className="relative overflow-hidden rounded-2xl shadow-lg aspect-[4/3]">
                  <Image src={IMAGES.about2} alt="Community Event" fill className="object-cover hover:scale-110 transition-transform duration-700" sizes="(max-width: 768px) 50vw, 300px" />
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="relative overflow-hidden rounded-2xl shadow-lg aspect-[4/3]">
                  <Image src={IMAGES.about3} alt="Community Program" fill className="object-cover hover:scale-110 transition-transform duration-700" sizes="(max-width: 768px) 50vw, 300px" />
                </div>
                <div className="relative overflow-hidden rounded-2xl shadow-xl aspect-[3/4]">
                  <Image src={IMAGES.about4} alt="Education" fill className="object-cover hover:scale-110 transition-transform duration-700" sizes="(max-width: 768px) 50vw, 300px" />
                </div>
              </div>
            </div>
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-accent-500/10 rounded-full blur-3xl" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="space-y-8"
          >
            <div className="rounded-2xl bg-white/60 dark:bg-slate-800/60 backdrop-blur-sm border border-slate-200/50 dark:border-slate-700/30 p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-blue-400">
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
                </div>
                <div>
                  <h3 className="font-display text-xl font-semibold text-brand-950 dark:text-white">Our Vision</h3>
                </div>
              </div>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">{SITE.vision}</p>
            </div>

            <div className="rounded-2xl bg-white/60 dark:bg-slate-800/60 backdrop-blur-sm border border-slate-200/50 dark:border-slate-700/30 p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-100 dark:bg-green-900/50 text-green-600 dark:text-green-400">
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
                </div>
                <div>
                  <h3 className="font-display text-xl font-semibold text-brand-950 dark:text-white">Our Mission</h3>
                </div>
              </div>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">{SITE.mission}</p>
            </div>

            <div className="rounded-2xl bg-gradient-to-br from-accent-500/10 to-accent-600/5 border border-accent-500/20 p-8">
              <div className="flex items-center gap-3 mb-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent-600/10 text-accent-600">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" /></svg>
                </div>
                <div>
                  <h3 className="font-display text-xl font-semibold text-brand-950 dark:text-white">Founder&apos;s Message</h3>
                </div>
              </div>
              <p className="text-slate-600 dark:text-slate-300 italic leading-relaxed">
                &ldquo;Every individual deserves a life of dignity and opportunity. At Sai Ranju Welfare Society, we are committed to being the bridge between those who have and those who need. Together, we can build a better tomorrow.&rdquo;
              </p>
              <p className="mt-3 font-semibold text-accent-600">— Mrs. Ranju, Founder</p>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="font-display text-2xl font-semibold text-center text-brand-950 dark:text-white mb-12">Our Journey</h3>
          <div className="relative">
            <div className="absolute left-1/2 -translate-x-px top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-green-500 to-accent-500 hidden md:block" />
            <div className="space-y-8 md:space-y-0 relative">
              {timeline.map((item, i) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className={`md:flex items-center gap-8 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} relative`}
                >
                  <div className={`flex-1 ${i % 2 === 0 ? "md:text-right" : "md:text-left"} mb-4 md:mb-0`}>
                    <div className={`inline-block rounded-2xl bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm border border-slate-200/50 dark:border-slate-700/30 p-5 shadow-sm ${i % 2 === 0 ? "md:mr-8" : "md:ml-8"}`}>
                      <span className="text-sm font-bold text-accent-600">{item.year}</span>
                      <p className="mt-1 text-slate-700 dark:text-slate-300 font-medium">{item.event}</p>
                    </div>
                  </div>
                  <div className="hidden md:flex relative z-10 w-12 h-12 shrink-0 items-center justify-center">
                    <div className={`w-4 h-4 rounded-full ring-4 ring-white dark:ring-slate-900 ${i % 2 === 0 ? "bg-blue-500" : i % 3 === 0 ? "bg-green-500" : "bg-accent-500"}`} />
                  </div>
                  <div className="flex-1 hidden md:block" />
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
