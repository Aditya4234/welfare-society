import Image from "next/image";
import { Carousel, type CarouselItem } from "@/components/site/Carousel";
import { EVENT_CARDS } from "@/lib/site";
import { IMAGES } from "@/lib/images";

const EVENT_PHOTOS = [IMAGES.gallery1, IMAGES.gallery2, IMAGES.gallery3] as const;

export function SectionEventsCarousel() {
  const items: CarouselItem[] = EVENT_CARDS.map((e, i) => ({
    id: `event-${i}`,
    content: (
      <article className="flex flex-col md:flex-row gap-6 md:gap-8 items-center">
        {EVENT_PHOTOS[i] && (
          <div className="relative w-full md:w-[45%] aspect-[4/3] rounded-xl overflow-hidden shrink-0">
            <Image
              src={EVENT_PHOTOS[i]}
              alt=""
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 600px"
            />
          </div>
        )}
        <div className="md:w-[55%]">
          <h3 className="font-display text-xl font-semibold text-brand-900 leading-tight sm:text-2xl">{e.title}</h3>
          <p className="mt-4 text-slate-700 dark:text-slate-300 leading-relaxed">{e.body}</p>
          <a href="#contact" className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-brand-800 underline-offset-4 transition-all duration-300 hover:underline group">
            Register or ask for details
            <svg className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </article>
    ),
  }));

  return (
    <section id="events" className="scroll-mt-20 border-b border-brand-900/10 bg-transparent">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <Carousel items={items} title="Programs & community events" aria-label="Community events" />
      </div>
    </section>
  );
}
