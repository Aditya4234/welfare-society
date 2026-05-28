"use client";

import { useEffect, useState } from "react";

export function DonationTracker() {
  const [amount, setAmount] = useState(0);
  const target = 2500000; // 25 Lakh target
  const current = 1850000; // 18.5 Lakh raised

  useEffect(() => {
    const duration = 2000;
    const steps = 60;
    const increment = current / steps;
    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;
      setAmount(Math.min(increment * currentStep, current));
      if (currentStep >= steps) clearInterval(timer);
    }, duration / steps);

    return () => clearInterval(timer);
  }, []);

  const percentage = (current / target) * 100;

  return (
    <div className="rounded-2xl bg-white dark:bg-slate-800 p-8 shadow-lg">
      <h3 className="font-display text-xl font-semibold text-brand-900">
        Fundraising Progress
      </h3>

      {/* Progress Bar */}
      <div className="mt-6">
        <div className="h-4 w-full overflow-hidden rounded-full bg-brand-100">
          <div
            className="h-full rounded-full bg-gradient-to-r from-brand-600 to-accent-500 transition-all duration-1000 ease-out"
            style={{ width: `${percentage}%` }}
          />
        </div>
        <div className="mt-3 flex justify-between text-sm">
          <span className="font-semibold text-brand-900">
            ₹{Math.floor(amount).toLocaleString()}
          </span>
          <span className="text-slate-500 dark:text-slate-400">
            Goal: ₹{target.toLocaleString()}
          </span>
        </div>
        <p className="mt-2 text-center text-xs text-slate-400 dark:text-slate-500">
          {percentage.toFixed(1)}% of our goal achieved
        </p>
      </div>

      {/* Recent Donors */}
      <div className="mt-6 border-t border-brand-100 pt-6">
        <p className="text-sm font-semibold text-slate-600 dark:text-slate-300 mb-3">Recent Donors</p>
        <div className="space-y-2">
          {[
            { name: "Anonymous", amount: "₹10,000", time: "2 hours ago" },
            { name: "Rahul S.", amount: "₹5,000", time: "5 hours ago" },
            { name: "Priya M.", amount: "₹2,500", time: "Yesterday" },
          ].map((donor, i) => (
            <div key={i} className="flex items-center justify-between rounded-lg bg-brand-50 px-4 py-2">
              <div className="flex items-center gap-3">
                <div className="h-8 w-8 rounded-full bg-brand-200 animate-pulse" />
                <div>
                  <p className="text-sm font-medium text-brand-900">{donor.name}</p>
                  <p className="text-xs text-slate-400 dark:text-slate-500">{donor.time}</p>
                </div>
              </div>
              <span className="text-sm font-semibold text-accent-600">{donor.amount}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
