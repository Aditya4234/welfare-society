"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { VOLUNTEER_SKILLS } from "@/lib/site";

export function SectionVolunteer() {
  const [step, setStep] = useState(0);
  const [showSuccess, setShowSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    skills: [] as string[],
    availability: "",
    message: "",
  });

  const updateField = (field: string, value: string | string[]) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const toggleSkill = (skill: string) => {
    setFormData((prev) => ({
      ...prev,
      skills: prev.skills.includes(skill)
        ? prev.skills.filter((s) => s !== skill)
        : [...prev.skills, skill],
    }));
  };

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async () => {
    setIsSubmitting(true);
    try {
      const res = await fetch("/api/volunteer/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (!res.ok) throw new Error("Failed to submit");
      setShowSuccess(true);
    } catch {
      alert("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const canProceed = () => {
    if (step === 0) return formData.name && formData.email && formData.phone;
    if (step === 1) return formData.skills.length > 0;
    return true;
  };

  return (
    <section id="volunteer" className="scroll-mt-20 relative overflow-hidden py-20 sm:py-28">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 right-20 w-72 h-72 bg-green-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl" />
      </div>
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 rounded-full bg-green-100 dark:bg-green-900/40 px-5 py-2 text-xs font-semibold uppercase tracking-wider text-green-700 dark:text-green-300 mb-6">
            Join Us
          </div>
          <h2 className="font-display text-3xl font-semibold tracking-tight text-brand-950 dark:text-white sm:text-4xl lg:text-5xl leading-[1.1]">
            Become a Volunteer
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-slate-500 dark:text-slate-400">
            Your time and skills can make a real difference in someone&apos;s life. Join our growing family of changemakers.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-2xl bg-white/80 dark:bg-slate-800/80 backdrop-blur-xl border border-slate-200/50 dark:border-slate-700/30 shadow-xl overflow-hidden"
        >
          <div className="flex border-b border-slate-200/50 dark:border-slate-700/30">
            {["Personal Info", "Skills", "Submit"].map((s, i) => (
              <button
                key={s}
                onClick={() => setStep(i)}
                className={`flex-1 py-4 text-sm font-semibold transition-all relative ${
                  i === step
                    ? "text-accent-600 dark:text-accent-400"
                    : i < step
                    ? "text-green-600 dark:text-green-400"
                    : "text-slate-400 dark:text-slate-500"
                }`}
              >
                {s}
                {i < step && (
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-8 h-1 rounded-full bg-green-500" />
                )}
                {i === step && (
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-8 h-1 rounded-full bg-accent-500" />
                )}
              </button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            {showSuccess ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                className="p-12 text-center"
              >
                <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-green-100 dark:bg-green-900/40 flex items-center justify-center">
                  <svg className="w-10 h-10 text-green-600 dark:text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="font-display text-2xl font-semibold text-brand-950 dark:text-white mb-2">Thank You for Registering!</h3>
                <p className="text-slate-500 dark:text-slate-400">We&apos;ll reach out to you within 48 hours with Volunteer onboarding details.</p>
                <button
                  onClick={() => {
                    setShowSuccess(false);
                    setStep(0);
                    setFormData({ name: "", email: "", phone: "", skills: [], availability: "", message: "" });
                  }}
                  className="mt-6 px-6 py-3 rounded-xl bg-accent-600 text-white text-sm font-semibold hover:bg-accent-700 transition-all"
                >
                  Submit Another
                </button>
              </motion.div>
            ) : (
              <motion.div
                key={step}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="p-8"
              >
                {step === 0 && (
                  <div className="space-y-5">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5">Full Name *</label>
                      <input
                        type="text"
                        value={formData.name}
                        onChange={(e) => updateField("name", e.target.value)}
                        className="w-full rounded-xl border border-slate-200 dark:border-slate-600 bg-white/50 dark:bg-slate-700/50 px-4 py-3 text-slate-900 dark:text-white outline-none focus:ring-2 focus:ring-accent-500/30 focus:border-accent-500 transition placeholder:text-slate-400"
                        placeholder="Your full name"
                      />
                    </div>
                    <div className="grid gap-5 sm:grid-cols-2">
                      <div>
                        <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5">Email *</label>
                        <input
                          type="email"
                          value={formData.email}
                          onChange={(e) => updateField("email", e.target.value)}
                          className="w-full rounded-xl border border-slate-200 dark:border-slate-600 bg-white/50 dark:bg-slate-700/50 px-4 py-3 text-slate-900 dark:text-white outline-none focus:ring-2 focus:ring-accent-500/30 focus:border-accent-500 transition placeholder:text-slate-400"
                          placeholder="you@example.com"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5">Phone *</label>
                        <input
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => updateField("phone", e.target.value)}
                          className="w-full rounded-xl border border-slate-200 dark:border-slate-600 bg-white/50 dark:bg-slate-700/50 px-4 py-3 text-slate-900 dark:text-white outline-none focus:ring-2 focus:ring-accent-500/30 focus:border-accent-500 transition placeholder:text-slate-400"
                          placeholder="+91 98765 43210"
                        />
                      </div>
                    </div>
                  </div>
                )}

                {step === 1 && (
                  <div>
                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-3">Select your skills (choose at least one) *</label>
                    <div className="flex flex-wrap gap-2">
                      {VOLUNTEER_SKILLS.map((skill) => (
                        <button
                          key={skill}
                          onClick={() => toggleSkill(skill)}
                          className={`px-4 py-2.5 rounded-xl text-sm font-medium transition-all ${
                            formData.skills.includes(skill)
                              ? "bg-accent-600 text-white shadow-md"
                              : "bg-slate-100 dark:bg-slate-700/50 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-600/50"
                          }`}
                        >
                          {skill}
                        </button>
                      ))}
                    </div>
                    <div className="mt-6">
                      <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5">Availability</label>
                      <select
                        value={formData.availability}
                        onChange={(e) => updateField("availability", e.target.value)}
                        className="w-full rounded-xl border border-slate-200 dark:border-slate-600 bg-white/50 dark:bg-slate-700/50 px-4 py-3 text-slate-900 dark:text-white outline-none focus:ring-2 focus:ring-accent-500/30 focus:border-accent-500 transition"
                      >
                        <option value="">Select availability</option>
                        <option value="weekdays">Weekdays</option>
                        <option value="weekends">Weekends</option>
                        <option value="both">Both Weekdays & Weekends</option>
                        <option value="flexible">Flexible</option>
                      </select>
                    </div>
                    <div className="mt-5">
                      <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5">Why do you want to volunteer?</label>
                      <textarea
                        rows={3}
                        value={formData.message}
                        onChange={(e) => updateField("message", e.target.value)}
                        className="w-full rounded-xl border border-slate-200 dark:border-slate-600 bg-white/50 dark:bg-slate-700/50 px-4 py-3 text-slate-900 dark:text-white outline-none focus:ring-2 focus:ring-accent-500/30 focus:border-accent-500 transition resize-none placeholder:text-slate-400"
                        placeholder="Tell us about yourself..."
                      />
                    </div>
                  </div>
                )}

                {step === 2 && (
                  <div className="space-y-4">
                    <div className="rounded-xl bg-green-50 dark:bg-green-900/20 p-5 border border-green-200/50 dark:border-green-700/30">
                      <h4 className="font-semibold text-green-800 dark:text-green-300 mb-2">Review your information</h4>
                      <div className="space-y-1 text-sm text-green-700 dark:text-green-400">
                        <p>Name: {formData.name}</p>
                        <p>Email: {formData.email}</p>
                        <p>Phone: {formData.phone}</p>
                        <p>Skills: {formData.skills.join(", ")}</p>
                        {formData.availability && <p>Availability: {formData.availability}</p>}
                      </div>
                    </div>
                    <div className="rounded-xl border border-dashed border-slate-300 dark:border-slate-600 p-6 text-center">
                      <svg className="w-8 h-8 mx-auto mb-2 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" /></svg>
                      <p className="text-sm text-slate-500 dark:text-slate-400">Upload Resume (Optional)</p>
                      <p className="text-xs text-slate-400 dark:text-slate-500 mt-1">PDF, DOC — Max 5MB</p>
                    </div>
                  </div>
                )}

                <div className="mt-8 flex justify-between">
                  {step > 0 ? (
                    <button
                      onClick={() => setStep((s) => s - 1)}
                      className="px-6 py-3 rounded-xl border border-slate-200 dark:border-slate-600 text-sm font-semibold text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-all"
                    >
                      Back
                    </button>
                  ) : (
                    <div />
                  )}
                  <button
                    onClick={() => {
                      if (step < 2) {
                        if (canProceed()) setStep((s) => s + 1);
                      } else {
                        handleSubmit();
                      }
                    }}
                    disabled={!canProceed() || isSubmitting}
                    className={`px-8 py-3 rounded-xl text-sm font-semibold text-white transition-all ${
                      canProceed() && !isSubmitting
                        ? "bg-accent-600 hover:bg-accent-700 shadow-md hover:shadow-lg"
                        : "bg-slate-300 dark:bg-slate-600 cursor-not-allowed"
                    }`}
                  >
                    {isSubmitting ? "Submitting..." : step < 2 ? "Continue" : "Submit Registration"}
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
