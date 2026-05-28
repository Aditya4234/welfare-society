"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { STORIES } from "@/lib/site";
import { IMAGES } from "@/lib/images";

const storyPhotos = [
  IMAGES.storyB,
  IMAGES.storyC,
];

export function SectionStories() {
  const [selectedStory, setSelectedStory] = useState<number | null>(null);

  useEffect(() => {
    if (selectedStory === null) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedStory(null);
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [selectedStory]);

  return (
    <section id="stories" className="scroll-mt-20 relative overflow-hidden py-20 sm:py-28">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-950 via-slate-950 to-blue-950" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_0%,rgba(59,130,246,0.12),transparent)]" />
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-32 -right-32 h-96 w-96 rounded-full bg-blue-600/10 blur-3xl animate-pulse-soft" />
        <div className="absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-blue-500/10 blur-3xl animate-pulse-soft" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-blue-600/5 blur-3xl" />
      </div>
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-5 py-2 text-xs font-semibold uppercase tracking-wider text-white/80 mb-6 ring-1 ring-white/20 backdrop-blur-sm">
            Success Stories
          </div>
          <h2 className="font-display text-3xl font-semibold tracking-tight text-brand-950 dark:text-white sm:text-4xl lg:text-5xl leading-[1.1]">
            Real Lives, Real Impact
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-white/80">
            Every number represents a real person whose life has been transformed through your support.
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 justify-center max-w-3xl mx-auto">
          {STORIES.map((story, i) => (
            <motion.div
              key={story.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="group relative"
            >
              <div className="rounded-2xl bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border border-slate-200/50 dark:border-slate-700/30 overflow-hidden transition-all duration-500 hover:shadow-xl hover:-translate-y-1">
                <div className="relative h-56 overflow-hidden bg-slate-100 dark:bg-slate-700">
                  <Image
                    src={storyPhotos[i] || IMAGES.about}
                    alt={story.name}
                    fill
                    className="object-contain brightness-110 transition-transform duration-700 group-hover:scale-110 p-2 object-top"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute bottom-3 left-3">
                    <span className="inline-block px-3 py-1 text-xs font-semibold rounded-full bg-white/90 backdrop-blur-md text-slate-800 border border-white/40 shadow-sm">
                      Before & After
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-accent-500 to-accent-600 flex items-center justify-center text-white font-bold text-sm shrink-0">
                      {story.beneficiary.charAt(0)}
                    </div>
                    <div>
                      <h3 className="font-display text-lg font-semibold text-brand-950 dark:text-white">{story.beneficiary}</h3>
                      <p className="text-xs text-slate-500 dark:text-slate-400">{story.detail}</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3 mt-4">
                    <div className="rounded-xl bg-red-50 dark:bg-red-900/20 border border-red-200/50 dark:border-red-700/30 p-3">
                      <p className="text-xs font-semibold text-red-600 dark:text-red-400 mb-1">Before</p>
                      <p className="text-xs text-slate-600 dark:text-slate-300">{story.before}</p>
                    </div>
                    <div className="rounded-xl bg-green-50 dark:bg-green-900/20 border border-green-200/50 dark:border-green-700/30 p-3">
                      <p className="text-xs font-semibold text-green-600 dark:text-green-400 mb-1">After</p>
                      <p className="text-xs text-slate-600 dark:text-slate-300">{story.after}</p>
                    </div>
                  </div>

                  <button
                    onClick={() => setSelectedStory(i)}
                    className="mt-5 w-full py-2.5 rounded-xl bg-gradient-to-r from-accent-600 to-accent-500 text-white text-sm font-semibold hover:from-accent-700 hover:to-accent-600 transition-all cursor-pointer shadow-lg shadow-accent-500/25"
                  >
                    Read Full Story
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedStory !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedStory(null)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ type: "spring", duration: 0.5 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-lg w-full rounded-2xl bg-white dark:bg-slate-800 overflow-hidden shadow-2xl"
            >
              <div className="relative h-64 overflow-hidden bg-slate-100 dark:bg-slate-700">
                <Image
                  src={storyPhotos[selectedStory] || IMAGES.about}
                  alt={STORIES[selectedStory].name}
                  fill
                  className="object-contain brightness-110 object-top"
                  sizes="600px"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-accent-500 to-accent-600 flex items-center justify-center text-white font-bold text-lg shrink-0">
                    {STORIES[selectedStory].beneficiary.charAt(0)}
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-semibold text-brand-950 dark:text-white">{STORIES[selectedStory].beneficiary}</h3>
                    <p className="text-sm text-slate-500 dark:text-slate-400">{STORIES[selectedStory].detail}</p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="rounded-xl bg-red-50 dark:bg-red-900/20 border border-red-200/50 dark:border-red-700/30 p-4">
                    <p className="text-sm font-semibold text-red-600 dark:text-red-400 mb-2">Before</p>
                    <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">{STORIES[selectedStory].before}</p>
                  </div>
                  <div className="rounded-xl bg-green-50 dark:bg-green-900/20 border border-green-200/50 dark:border-green-700/30 p-4">
                    <p className="text-sm font-semibold text-green-600 dark:text-green-400 mb-2">After</p>
                    <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">{STORIES[selectedStory].after}</p>
                  </div>
                </div>

                <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed mb-6">
                  {STORIES[selectedStory].name} is a testament to the power of community support. Through the programs at Sai Ranju Welfare Society, {STORIES[selectedStory].beneficiary} found the resources, guidance, and encouragement needed to transform their life. Today, they stand as an inspiration to others in their community, proving that with the right support, anyone can overcome adversity and build a brighter future.
                </p>

                <div className="flex gap-3">
                  <button
                    onClick={() => setSelectedStory(null)}
                    className="flex-1 py-2.5 rounded-xl bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 text-sm font-semibold hover:bg-slate-200 dark:hover:bg-slate-600 transition-all cursor-pointer"
                  >
                    Close
                  </button>
                  <button
                    onClick={() => {
                      const msg = encodeURIComponent(`I want to support ${STORIES[selectedStory].beneficiary} and help more lives like theirs.`);
                      window.open(`https://wa.me/919876543210?text=${msg}`, "_blank");
                    }}
                    className="flex-1 py-2.5 rounded-xl bg-green-600 text-white text-sm font-semibold hover:bg-green-700 transition-all cursor-pointer"
                  >
                    Support This Story
                  </button>
                </div>
              </div>

              <button
                onClick={() => setSelectedStory(null)}
                className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/40 text-white flex items-center justify-center hover:bg-black/60 transition-all cursor-pointer"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
