"use client";

import { motion } from "framer-motion";
import { PROGRAMS } from "@/lib/site";

const iconPaths: Record<string, string> = {
  "graduation-cap": "M12 14l9-5-9-5-9 5 9 5z M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z M12 14l9-5-9-5-9 5 9 5z M12 22.055V14",
  "users": "M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z",
  "utensils": "M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 019.5 3h-1A2.5 2.5 0 006 5.5V8m0 0v13m0-13a2 2 0 01-2-2V5.5A2.5 2.5 0 016.5 3h1A2.5 2.5 0 0110 5.5V8a2 2 0 01-2 2H6z",
  "heart-pulse": "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z M21 12a9 9 0 11-18 0 9 9 0 0118 0z M9 12h2l1-3 2 6 1-3h2",
  "shield": "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
  "tree-pine": "M17 14v6m-3-3h6M6 10l2-2 2 2M6 10v8a1 1 0 001 1h2M6 10V6a1 1 0 011-1h2a1 1 0 011 1v1m0 4l2-2 2 2m-4 0v8a1 1 0 001 1h2a1 1 0 001-1v-2",
};

const colorClasses: Record<string, { bg: string; iconBg: string; text: string; border: string; hoverBg: string }> = {
  blue: {
    bg: "bg-blue-50 dark:bg-blue-900/20",
    iconBg: "bg-blue-100 dark:bg-blue-800/40 text-blue-600 dark:text-blue-400",
    text: "text-blue-600 dark:text-blue-400",
    border: "border-blue-200/50 dark:border-blue-700/30",
    hoverBg: "group-hover:bg-blue-100 dark:group-hover:bg-blue-800/30",
  },
  green: {
    bg: "bg-green-50 dark:bg-green-900/20",
    iconBg: "bg-green-100 dark:bg-green-800/40 text-green-600 dark:text-green-400",
    text: "text-green-600 dark:text-green-400",
    border: "border-green-200/50 dark:border-green-700/30",
    hoverBg: "group-hover:bg-green-100 dark:group-hover:bg-green-800/30",
  },
  accent: {
    bg: "bg-accent-50 dark:bg-accent-900/20",
    iconBg: "bg-accent-100 dark:bg-accent-800/40 text-accent-600 dark:text-accent-400",
    text: "text-accent-600 dark:text-accent-400",
    border: "border-accent-200/50 dark:border-accent-700/30",
    hoverBg: "group-hover:bg-accent-100 dark:group-hover:bg-accent-800/30",
  },
  emerald: {
    bg: "bg-emerald-50 dark:bg-emerald-900/20",
    iconBg: "bg-emerald-100 dark:bg-emerald-800/40 text-emerald-600 dark:text-emerald-400",
    text: "text-emerald-600 dark:text-emerald-400",
    border: "border-emerald-200/50 dark:border-emerald-700/30",
    hoverBg: "group-hover:bg-emerald-100 dark:group-hover:bg-emerald-800/30",
  },
};

export function SectionPrograms() {
  return (
    <section id="programs" className="scroll-mt-20 relative overflow-hidden py-20 sm:py-28 bg-transparent">
      <div id="programs-nav" className="absolute -top-20" />
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-r from-blue-500/5 via-green-500/5 to-accent-500/5 rounded-full blur-3xl" />
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
            What We Do
          </div>
          <h2 className="font-display text-3xl font-semibold tracking-tight text-brand-950 dark:text-white sm:text-4xl lg:text-5xl leading-[1.1]">
            Our Programs & Services
          </h2>
           <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-slate-500 dark:text-slate-300">
             Comprehensive initiatives designed to create lasting impact in communities across India.
          </p>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {PROGRAMS.map((program, i) => {
            const colors = colorClasses[program.color] || colorClasses.blue;
            return (
              <motion.div
                key={program.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group relative overflow-hidden rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/50 dark:border-slate-700/30 p-8 transition-all duration-500 hover:shadow-xl hover:-translate-y-1"
              >
                <div className={`absolute top-0 right-0 w-48 h-48 -mr-16 -mt-16 rounded-full ${colors.bg} blur-3xl transition-all duration-500 ${colors.hoverBg}`} />
                <div className="relative">
                  <div className={`inline-flex items-center justify-center w-14 h-14 rounded-2xl ${colors.iconBg} mb-6 transition-transform duration-300 group-hover:scale-110`}>
                    <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d={iconPaths[program.icon] || iconPaths["graduation-cap"]} />
                    </svg>
                  </div>
                  <h3 className="font-display text-xl font-semibold text-brand-950 dark:text-white mb-3">
                    {program.title}
                  </h3>
                  <p className="text-slate-500 dark:text-slate-300 leading-relaxed text-sm">
                    {program.description}
                  </p>
                  <button className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-accent-600 hover:text-accent-700 dark:text-accent-400 dark:hover:text-accent-300 transition-colors group/btn">
                    Learn More
                    <svg className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
