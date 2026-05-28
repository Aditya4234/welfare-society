"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { BLOG_POSTS } from "@/lib/site";
import { IMAGES } from "@/lib/images";

const blogImages = [IMAGES.blog1, IMAGES.blog2, IMAGES.blog3, IMAGES.blog1];
const categories = ["All", "Campaign", "Education", "Event", "Awareness"];

export function SectionBlog() {
  const [filter, setFilter] = useState("All");

  const filtered = filter === "All"
    ? BLOG_POSTS
    : BLOG_POSTS.filter((post) => post.category === filter);

  return (
    <section id="blog" className="scroll-mt-20 relative overflow-hidden py-20 sm:py-28">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-20 w-72 h-72 bg-green-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl" />
      </div>
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 rounded-full bg-brand-100 dark:bg-brand-800 px-5 py-2 text-xs font-semibold uppercase tracking-wider text-brand-700 dark:text-brand-200 mb-6">
            Blog & News
          </div>
          <h2 className="font-display text-3xl font-semibold tracking-tight text-brand-950 dark:text-white sm:text-4xl lg:text-5xl leading-[1.1]">
            Latest Updates
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-slate-500 dark:text-slate-400">
            Stay informed about our campaigns, events, and impact stories.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-2 mb-10"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-5 py-2.5 rounded-xl text-sm font-semibold transition-all ${
                filter === cat
                  ? "bg-accent-600 text-white shadow-md"
                  : "bg-white/70 dark:bg-slate-800/70 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700/50 border border-slate-200/50 dark:border-slate-700/30"
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {filtered.map((post, i) => (
            <motion.div
              key={post.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group rounded-2xl bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border border-slate-200/50 dark:border-slate-700/30 overflow-hidden transition-all duration-500 hover:shadow-xl hover:-translate-y-1"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={blogImages[i % blogImages.length]}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, 25vw"
                />
                <div className="absolute top-3 left-3">
                  <span className="px-3 py-1 text-xs font-semibold rounded-full bg-white/90 dark:bg-slate-800/90 text-slate-700 dark:text-slate-300 backdrop-blur-sm">
                    {post.category}
                  </span>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <div className="p-5">
                <p className="text-xs text-slate-400 dark:text-slate-500 mb-2">{post.date}</p>
                <h3 className="font-display text-base font-semibold text-brand-950 dark:text-white mb-2 line-clamp-2 group-hover:text-accent-600 dark:group-hover:text-accent-400 transition-colors">
                  {post.title}
                </h3>
                <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed line-clamp-3">
                  {post.excerpt}
                </p>
                <div className="mt-4 flex items-center justify-between">
                  <span className="text-xs text-slate-400">{post.author}</span>
                  <button className="text-xs font-semibold text-accent-600 dark:text-accent-400 hover:text-accent-700 dark:hover:text-accent-300 transition-colors inline-flex items-center gap-1">
                    Read More
                    <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
