"use client";

import { useCallback, useEffect, useState, type ReactNode } from "react";

export type CarouselItem = {
  id: string;
  content: ReactNode;
};

type CarouselProps = {
  items: CarouselItem[];
  title: string;
  "aria-label": string;
  className?: string;
};

export function Carousel({ items, title, "aria-label": ariaLabel, className = "" }: CarouselProps) {
  const [index, setIndex] = useState(0);
  const n = items.length;

  const go = useCallback(
    (dir: -1 | 1) => {
      setIndex((i) => (i + dir + n) % n);
    },
    [n],
  );

  useEffect(() => {
    const id = window.setInterval(() => go(1), 8000);
    return () => window.clearInterval(id);
  }, [go]);

  if (n === 0) return null;

  return (
    <div className={className}>
      <div className="flex items-center justify-between gap-4">
        <h2 className="font-display text-2xl font-semibold tracking-tight text-brand-900 sm:text-3xl">{title}</h2>
        <div className="flex shrink-0 gap-2">
          <button
            type="button"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-brand-900/15 text-brand-700 transition hover:bg-brand-50 hover:border-brand-900/25"
            onClick={() => go(-1)}
            aria-label="Previous highlight"
          >
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
          </button>
          <button
            type="button"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-brand-900/15 text-brand-700 transition hover:bg-brand-50 hover:border-brand-900/25"
            onClick={() => go(1)}
            aria-label="Next highlight"
          >
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
          </button>
        </div>
      </div>
      <div className="relative mt-8 min-h-[140px] overflow-hidden rounded-2xl border border-brand-900/8 bg-white dark:bg-slate-800 p-6 shadow-sm sm:p-8">
        <div key={items[index].id}>
          {items[index].content}
        </div>
      </div>
      <div className="mt-4 flex justify-center gap-2" role="tablist" aria-label={ariaLabel}>
        {items.map((item, i) => (
          <button
            key={item.id}
            type="button"
            role="tab"
            aria-selected={i === index}
            className={`h-2 rounded-full transition-all ${i === index ? "w-8 bg-accent-600" : "w-2 bg-brand-950/15 hover:bg-brand-950/25"}`}
            onClick={() => setIndex(i)}
            aria-label={`Slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
