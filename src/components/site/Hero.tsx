"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { IMAGES } from "@/lib/images";

const floatingStats = [
  { number: "10K+", label: "Children Helped", color: "from-blue-500 to-blue-600" },
  { number: "500+", label: "Active Volunteers", color: "from-green-500 to-emerald-500" },
  { number: "₹50L+", label: "Donations Raised", color: "from-accent-500 to-accent-600" },
];

export default function Hero() {
  return (
    <section id="top" className="relative min-h-screen w-full overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src={IMAGES.hero}
          alt="NGO Hero - Together We Can Make a Difference"
          fill
          priority
          className="object-cover scale-105"
          sizes="100vw"
        />
      </div>

      <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-slate-900/80 to-slate-900/40" />

      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" />

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-accent-500/10 blur-3xl animate-blob" />
        <div className="absolute top-1/3 -right-32 w-80 h-80 rounded-full bg-green-500/10 blur-3xl animate-blob animation-delay-2000" />
        <div className="absolute -bottom-32 left-1/3 w-96 h-96 rounded-full bg-blue-500/10 blur-3xl animate-blob animation-delay-4000" />
      </div>

      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl items-start px-4 sm:px-6 lg:pl-8 lg:pr-16">
        <div className="w-full pt-12 sm:pt-16 lg:pt-20">
          <div className="max-w-3xl ml-0">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 px-5 py-2 mb-8">
                <span className="h-2 w-2 rounded-full bg-green-400 animate-pulse" />
                <span className="text-xs font-semibold uppercase tracking-widest text-green-300">
                  Registered NGO Since 2020
                </span>
              </div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-display text-5xl font-bold leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-7xl xl:text-8xl"
            >
              Make a Better
              <br />
              <span className="text-white">
                Tomorrow Together
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-6 max-w-xl text-lg leading-relaxed text-slate-100 sm:text-xl"
            >
              We are committed to building a better society by empowering lives,
              promoting education, healthcare, and sustainable development for
              underprivileged communities across India.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-10 flex flex-wrap gap-4"
            >
              <a
                href="#donate"
                className="group inline-flex items-center gap-3 rounded-2xl bg-gradient-to-r from-accent-600 to-accent-500 px-8 py-4 text-lg font-semibold text-white shadow-xl transition-all duration-300 hover:scale-[1.03] hover:shadow-2xl"
              >
                <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
                  <path d="M12 21s-6.716-4.35-9.193-8.287C.33 8.775 2.09 4 6.5 4c2.352 0 3.828 1.26 4.5 2.09C11.672 5.26 13.148 4 15.5 4 19.91 4 21.67 8.775 21.193 12.713 18.716 16.65 12 21 12 21z" />
                </svg>
                Donate Now
              </a>

              <a
                href="#volunteer"
                className="group inline-flex items-center gap-3 rounded-2xl border border-white/30 bg-white/10 backdrop-blur-md px-8 py-4 text-lg font-semibold text-white transition-all duration-300 hover:bg-white/20 hover:scale-[1.03]"
              >
                <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                Become Volunteer
              </a>
            </motion.div>
          </div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-xs font-medium uppercase tracking-widest text-white/60">
            Scroll
          </span>
          <div className="w-6 h-10 rounded-full border-2 border-white/30 flex justify-center p-1">
            <div className="w-1.5 h-2.5 rounded-full bg-white/80 animate-bounce" />
          </div>
        </div>
      </motion.div>

      <div className="absolute bottom-8 right-8 z-10 hidden lg:block">
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col gap-3"
        >
          {floatingStats.map((stat, i) => (
            <div
              key={stat.label}
              className="group flex items-center gap-3 rounded-xl bg-white/10 backdrop-blur-xl border border-white/10 px-4 py-3 transition-all duration-300 hover:bg-white/20 hover:scale-105"
              style={{ animationDelay: `${i * 0.15}s` }}
            >
              <div className={`h-8 w-8 rounded-lg bg-gradient-to-br ${stat.color} flex items-center justify-center`}>
                <span className="text-xs font-bold text-white">{stat.number.charAt(0)}</span>
              </div>
              <div>
                <p className="text-sm font-bold text-white">{stat.number}</p>
                <p className="text-[10px] text-white/80 font-medium">{stat.label}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
