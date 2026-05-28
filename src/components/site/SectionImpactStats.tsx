"use client";

import { useEffect, useRef, useState } from "react";
import { IMPACT_STATS } from "@/lib/site";

function Counter({ value, suffix, prefix }: { value: number; suffix: string; prefix: string }) {
  const [count, setCount] = useState(0);
  const [isInView, setIsInView] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isInView) return;
    let cancelled = false;
    let start = 0;
    const duration = 2000;
    const step = Math.ceil(value / (duration / 16));
    const timer = setInterval(() => {
      start += step;
      if (cancelled) return;
      if (start >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, 16);
    return () => {
      cancelled = true;
      clearInterval(timer);
    };
  }, [isInView, value]);

  return (
    <span ref={ref} className="tabular-nums">
      {prefix}{count.toLocaleString()}{suffix}
    </span>
  );
}

const iconMap: Record<string, string> = {
  "Children Helped": "M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z",
  "Active Volunteers": "M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z",
  "Villages Supported": "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6",
  "Donations Raised": "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
};

const colorMap: Record<string, { bg: string; text: string; ring: string }> = {
  "Children Helped": { bg: "from-blue-500/20 to-blue-600/10", text: "text-blue-600", ring: "ring-blue-500/30" },
  "Active Volunteers": { bg: "from-emerald-500/20 to-emerald-600/10", text: "text-emerald-600", ring: "ring-emerald-500/30" },
  "Villages Supported": { bg: "from-green-500/20 to-green-600/10", text: "text-green-600", ring: "ring-green-500/30" },
  "Donations Raised": { bg: "from-accent-500/20 to-accent-600/10", text: "text-accent-600", ring: "ring-accent-500/30" },
};

export function SectionImpactStats() {
  return (
    <section className="relative -mt-20 z-10">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {IMPACT_STATS.map((stat) => {
            const colors = colorMap[stat.label] || colorMap["Children Helped"];
            return (
              <div
                key={stat.label}
                className="group relative overflow-hidden rounded-2xl bg-white/80 dark:bg-slate-800/80 backdrop-blur-xl border border-white/20 dark:border-slate-700/30 p-6 sm:p-8 text-center transition-all duration-500 hover:shadow-2xl hover:-translate-y-1 hover:border-white/30"
                style={{
                  boxShadow: "0 4px 24px rgba(0,0,0,0.04), 0 1px 2px rgba(0,0,0,0.02)",
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/50 to-transparent dark:from-white/5 dark:to-transparent pointer-events-none" />
                <div className={`absolute top-0 right-0 w-32 h-32 -mr-8 -mt-8 rounded-full bg-gradient-to-br ${colors.bg} blur-2xl opacity-60`} />
                <div className="relative">
                  <div className={`mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${colors.bg} ring-1 ${colors.ring} backdrop-blur-sm transition-transform duration-300 group-hover:scale-110`}>
                    <svg className={`h-7 w-7 ${colors.text}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d={iconMap[stat.label] || iconMap["Children Helped"]} />
                    </svg>
                  </div>
                  <p className={`font-display text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white`}>
                    <Counter value={stat.number} suffix={stat.suffix} prefix={stat.prefix} />
                  </p>
                  <p className="mt-2 text-sm font-medium text-slate-500 dark:text-slate-400">
                    {stat.label}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
