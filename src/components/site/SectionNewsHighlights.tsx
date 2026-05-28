import Image from "next/image";
import { Carousel, type CarouselItem } from "@/components/site/Carousel";
import { NEWS_ITEMS } from "@/lib/site";
import { IMAGES } from "@/lib/images";

const NEWS_PHOTOS = [
  IMAGES.gallery4,
  IMAGES.gallery5,
  IMAGES.gallery6,
] as const;

export function SectionNewsHighlights() {
  const items: CarouselItem[] = NEWS_ITEMS.map((n, i) => ({
    id: `news-${i}`,

    content: (
      <article className="overflow-hidden rounded-3xl bg-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl">
        
        <div className="flex flex-col-reverse md:flex-row">
          {/* Content */}
          <div className="flex-1 p-6 sm:p-8">
          
          {/* Date Badge */}
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-brand-100 px-5 py-2 text-xs font-semibold uppercase tracking-wider text-brand-700">
            <svg
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>

            <time dateTime={n.date}>{n.date}</time>
          </div>

          {/* Title */}
          <h3 className="font-display text-2xl font-semibold leading-tight text-slate-900">
            {n.title}
          </h3>

          {/* Description */}
          <p className="mt-4 text-base leading-7 text-slate-600">
            {n.body}
          </p>

          {/* Button */}
          <button className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-accent-600 transition hover:text-accent-700">
            Read More
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>

        {/* Image */}
        {NEWS_PHOTOS[i] && (
          <div className="relative aspect-[16/9] w-full md:w-[40%] md:min-h-[320px]">
            <Image
              src={NEWS_PHOTOS[i]}
              alt={n.title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 40vw"
              priority={i === 0}
            />
          </div>
        )}
      </div>
      </article>
    ),
  }));

  return (
    <section id="news" className="scroll-mt-20 bg-[var(--surface)]">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        
        {/* Section Heading */}
        <div className="mb-12 text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-brand-100 px-5 py-2 text-xs font-semibold uppercase tracking-wider text-brand-700 mb-4">
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" /></svg>
            Latest News
          </div>

          <h2 className="font-display text-3xl font-semibold tracking-tight text-brand-900 sm:text-4xl lg:text-[2.75rem] leading-[1.1]">
            News & Highlights
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-slate-600">
            Stay updated with our latest activities, achievements,
            and community impact stories.
          </p>
        </div>

        {/* Carousel */}
        <Carousel
          items={items}
          title="News and highlights"
          aria-label="News highlights"
        />
      </div>
    </section>
  );
}