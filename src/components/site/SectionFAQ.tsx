"use client";

import { useState } from "react";
import { SITE } from "@/lib/site";

const FAQ_ITEMS = [
  {
    question: "How can I donate to {SITE.name}?",
    answer: "You can donate online using our secure payment gateway. We accept UPI, credit/debit cards, net banking, and wallets. All donations are eligible for tax exemption under Section 80G of the Income Tax Act.",
  },
  {
    question: "Is my donation tax-deductible?",
    answer: "Yes! {SITE.name} is registered under Section 80G and 12A of the Income Tax Act. You will receive a tax receipt via email immediately after your donation.",
  },
  {
    question: "How is my donation used?",
    answer: "95% of all donations go directly to our programs - healthcare camps, skill training, food distribution, and community support. Only 5% is used for administrative costs.",
  },
  {
    question: "Can I volunteer with the organization?",
    answer: "Absolutely! We welcome volunteers for various activities - health camps, teaching, event management, and administrative support. Fill out the contact form and we'll get back to you.",
  },
  {
    question: "Does the NGO work in my city?",
    answer: "We are currently active in Noida, Greater Noida, and surrounding areas in Uttar Pradesh. We are expanding to more regions. Contact us to check if we serve your area.",
  },
  {
    question: "How can I get help from the NGO?",
    answer: "You can reach out to us via our helpline number, email, or the contact form on our website. Our team will assess your needs and guide you to the appropriate support programs.",
  },
];

export function SectionFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="scroll-mt-20 bg-transparent py-16 sm:py-20">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="surface rounded-3xl p-6 sm:p-10 lg:p-12">
          <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 rounded-full bg-brand-100 px-5 py-2 text-xs font-semibold uppercase tracking-wider text-brand-700 mb-6">
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.033-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.63-3.223 2.965-1.604.306-2.772-.114-3.72-.816l-1.498 4.493a1 1 0 01-1.89.667l-3.666-5.5a1 1 0 011.89-.667l2.166 3.25c.584-.79 1.29-1.24 2.04-1.365A3.001 3.001 0 0112 9c-1.148 0-2.266.52-2.772 1z" />
            </svg>
            FAQ
          </div>
          <h2 className="font-display text-3xl font-semibold tracking-tight text-brand-900 sm:text-4xl lg:text-[2.75rem] leading-[1.1]">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-slate-600 dark:text-slate-300">
            Find answers to common questions about our work and how you can help.
          </p>
          </div>

          <div className="space-y-4">
          {FAQ_ITEMS.map((item, index) => (
            <div
              key={index}
              className="rounded-2xl border border-brand-100 bg-white dark:bg-slate-800 dark:border-slate-700 shadow-sm transition-all duration-300 hover:shadow-md"
            >
              <button
                onClick={() => toggle(index)}
                className="flex w-full items-center justify-between px-6 py-5 text-left sm:px-8"
                aria-expanded={openIndex === index}
              >
                <span className="pr-4 font-display font-semibold text-brand-900 sm:text-lg">
                  {item.question.replace("{SITE.name}", SITE.name)}
                </span>
                <svg
                  className={`h-5 w-5 shrink-0 text-brand-600 transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? "max-h-96" : "max-h-0"
                }`}
              >
                <div className="px-6 pb-5 sm:px-8 sm:pb-6">
                  <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                    {item.answer.replace("{SITE.name}", SITE.name)}
                  </p>
                </div>
              </div>
            </div>
          ))}
          </div>

          <div className="mt-12 text-center">
          <p className="text-slate-600 dark:text-slate-300">Still have questions?</p>
          <a
            href="#contact"
            className="mt-4 inline-flex items-center gap-2 rounded-full bg-brand-900 px-8 py-3 text-sm font-semibold text-white shadow-sm transition-all duration-300 hover:bg-brand-800 hover:scale-[1.02] active:scale-[0.98]"
          >
            Contact Us
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
          </div>
        </div>
      </div>
    </section>
  );
}
