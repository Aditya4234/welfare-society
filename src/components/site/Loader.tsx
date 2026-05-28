"use client";

import { useState, useEffect, useRef } from "react";

export function Loader() {
  const [loading, setLoading] = useState(true);
  const mounted = useRef(false);

  useEffect(() => {
    mounted.current = true;
    const timer = setTimeout(() => {
      if (mounted.current) setLoading(false);
    }, 1500);
    return () => {
      mounted.current = false;
      clearTimeout(timer);
    };
  }, []);

  if (!loading) return null;

  return (
    <div className={`fixed inset-0 z-[9999] flex items-center justify-center bg-brand-900 transition-opacity duration-500 ${loading ? "opacity-100" : "opacity-0 pointer-events-none"}`}>
      <div className="text-center">
        {/* Logo Animation */}
        <div className="mb-8 inline-flex h-20 w-20 items-center justify-center rounded-full bg-white/10 animate-pulse">
          <span className="font-display text-3xl font-bold text-white">SR</span>
        </div>

        {/* Animated Dots */}
        <div className="flex justify-center gap-2">
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className="h-3 w-3 rounded-full bg-accent-500 animate-bounce"
              style={{ animationDelay: `${i * 0.15}s` }}
            />
          ))}
        </div>

        <p className="mt-6 text-sm font-medium uppercase tracking-widest text-brand-200">
          Loading...
        </p>
      </div>
    </div>
  );
}
