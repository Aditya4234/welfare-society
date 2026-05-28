"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { PARTNER_LOGOS_DATA } from "@/lib/site";

export function SectionPartners() {
  return (
    <section className="relative overflow-hidden py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 rounded-full bg-brand-100 dark:bg-brand-800 px-5 py-2 text-xs font-semibold uppercase tracking-wider text-brand-700 dark:text-brand-200 mb-4">
            Our Partners
          </div>
          <h2 className="font-display text-2xl font-semibold tracking-tight text-brand-950 dark:text-white sm:text-3xl">
            Trusted by Leading Organizations
          </h2>
        </motion.div>

        <div className="relative overflow-hidden">
          <div className="flex gap-12 animate-marquee">
            {[...PARTNER_LOGOS_DATA, ...PARTNER_LOGOS_DATA].map((partner, i) => (
              <div
                key={`${partner.name}-${i}`}
                className="flex items-center gap-4 shrink-0 rounded-xl bg-white/50 dark:bg-slate-800/50 border border-slate-200/50 dark:border-slate-700/30 px-6 py-4 transition-all duration-300 hover:bg-white dark:hover:bg-slate-800 hover:shadow-md"
              >
                <div className="relative w-10 h-10 rounded-lg overflow-hidden bg-slate-100 dark:bg-slate-700">
                  <Image
                    src={partner.logo}
                    alt={partner.name}
                    fill
                    className="object-cover"
                    sizes="40px"
                  />
                </div>
                <span className="text-sm font-semibold text-slate-600 dark:text-slate-300 whitespace-nowrap">
                  {partner.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-10 text-center text-sm text-slate-400 dark:text-slate-500"
        >
          We are grateful for the support from our partners and donors who make our work possible.
        </motion.p>
      </div>
    </section>
  );
}
