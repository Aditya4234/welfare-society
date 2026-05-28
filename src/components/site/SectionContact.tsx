"use client";

import { useState, FormEvent } from "react";
import { motion } from "framer-motion";
import { CONTACT } from "@/lib/site";
import { SectionShell } from "./SectionShell";

export function SectionContact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setDone(false);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (data.success) {
        setDone(true);
        setForm({ name: "", email: "", subject: "", message: "" });
        setTimeout(() => setDone(false), 4000);
      }
    } catch {
      // silent fail
    } finally {
      setLoading(false);
    }
  };

  return (
    <SectionShell id="contact" tone="surface">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <div className="inline-flex items-center gap-2 rounded-full bg-brand-100 dark:bg-brand-800 px-5 py-2 text-xs font-semibold uppercase tracking-wider text-brand-700 dark:text-brand-200 mb-6">
          Get in Touch
        </div>
        <h2 className="font-display text-3xl font-semibold tracking-tight text-brand-950 dark:text-white sm:text-4xl lg:text-5xl leading-[1.1]">
          Contact Us
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-slate-500 dark:text-slate-400">
          Have questions? We&apos;d love to hear from you. Reach out to us and we&apos;ll get back to you promptly.
        </p>
      </motion.div>

      <div className="grid gap-8 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              {
                icon: <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>,
                label: "Email",
                value: CONTACT.email,
                href: `mailto:${CONTACT.email}`,
              },
              {
                icon: <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>,
                label: "Helpline",
                value: CONTACT.helpline,
              },
              {
                icon: <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>,
                label: "Location",
                value: CONTACT.address,
                href: `https://maps.google.com/?q=${encodeURIComponent(CONTACT.address)}`,
              },
              {
                icon: <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" /></svg>,
                label: "WhatsApp",
                value: "Chat with us",
                href: `https://wa.me/${CONTACT.whatsapp}`,
              },
            ].map((item) => (
              <div key={item.label} className="flex gap-3 items-start rounded-xl bg-white/60 dark:bg-slate-800/60 backdrop-blur-sm border border-slate-200/50 dark:border-slate-700/30 p-5 transition-all hover:shadow-md hover:-translate-y-0.5">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-green-50 dark:bg-green-900/30 text-green-600 dark:text-green-400">
                  {item.icon}
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">{item.label}</p>
                  {"href" in item && item.href ? (
                    <a className="mt-0.5 font-medium text-sm text-slate-900 dark:text-white underline-offset-4 hover:underline" href={item.href}>
                      {item.value}
                    </a>
                  ) : (
                    <p className="mt-0.5 font-medium text-sm text-slate-900 dark:text-white">{item.value}</p>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="rounded-2xl overflow-hidden border border-slate-200/50 dark:border-slate-700/30 h-64">
            <iframe
              src={CONTACT.mapEmbed}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="NGO Location Map"
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="rounded-2xl bg-white/60 dark:bg-slate-800/60 backdrop-blur-sm border border-slate-200/50 dark:border-slate-700/30 p-8"
        >
          <h3 className="font-display text-xl font-semibold text-brand-950 dark:text-white mb-2">Send us a message</h3>
          <p className="text-sm text-slate-500 dark:text-slate-400 mb-6">
            We typically respond within 24 hours on business days.
          </p>
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="cf-name" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5">Name</label>
                <input
                  id="cf-name"
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full rounded-xl border border-slate-200 dark:border-slate-600 bg-white/70 dark:bg-slate-700/50 px-4 py-3 text-slate-900 dark:text-white outline-none focus:ring-2 focus:ring-accent-500/30 focus:border-accent-500 transition placeholder:text-slate-400"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="cf-email" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5">Email</label>
                <input
                  id="cf-email"
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full rounded-xl border border-slate-200 dark:border-slate-600 bg-white/70 dark:bg-slate-700/50 px-4 py-3 text-slate-900 dark:text-white outline-none focus:ring-2 focus:ring-accent-500/30 focus:border-accent-500 transition placeholder:text-slate-400"
                  placeholder="you@example.com"
                />
              </div>
            </div>
            <div>
              <label htmlFor="cf-subject" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5">Subject</label>
              <input
                id="cf-subject"
                type="text"
                value={form.subject}
                onChange={(e) => setForm({ ...form, subject: e.target.value })}
                className="w-full rounded-xl border border-slate-200 dark:border-slate-600 bg-white/70 dark:bg-slate-700/50 px-4 py-3 text-slate-900 dark:text-white outline-none focus:ring-2 focus:ring-accent-500/30 focus:border-accent-500 transition placeholder:text-slate-400"
                placeholder="How can we help?"
              />
            </div>
            <div>
              <label htmlFor="cf-message" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5">Message</label>
              <textarea
                id="cf-message"
                rows={4}
                required
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full rounded-xl border border-slate-200 dark:border-slate-600 bg-white/70 dark:bg-slate-700/50 px-4 py-3 text-slate-900 dark:text-white outline-none focus:ring-2 focus:ring-accent-500/30 focus:border-accent-500 transition resize-none placeholder:text-slate-400"
                placeholder="Write your message..."
              />
            </div>
            <button
              type="submit"
              disabled={loading}
              className="w-full rounded-xl bg-gradient-to-r from-accent-600 to-accent-500 py-3.5 text-sm font-semibold text-white shadow-md transition-all hover:shadow-lg hover:scale-[1.01] active:scale-[0.99] disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {loading ? "Sending..." : done ? "Sent!" : "Send Message"}
            </button>
          </form>
        </motion.div>
      </div>
    </SectionShell>
  );
}
