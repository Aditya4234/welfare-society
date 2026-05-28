import Image from "next/image";
import { SITE } from "@/lib/site";
import { IMAGES } from "@/lib/images";

export function SectionWeAre() {
  return (
    <section id="we-are" className="scroll-mt-20 bg-transparent">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="relative">
            <div className="overflow-hidden rounded-3xl shadow-xl">
              <Image
                src={IMAGES.about3}
                alt=""
                width={700}
                height={500}
                className="h-full w-full object-cover"
              />
            </div>
          </div>
          <div className="animate-fade-in-up">
            <div className="inline-flex items-center gap-2 rounded-full border border-brand-900/10 bg-white/75 px-5 py-2 text-xs font-semibold uppercase tracking-wider text-slate-700 mb-6 backdrop-blur-sm">
              <svg className="h-4 w-4 text-accent-500" fill="currentColor" viewBox="0 0 24 24"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" /></svg>
              Hamari Pehchaan
            </div>
            <h2 className="font-display text-3xl font-semibold tracking-tight text-brand-950 sm:text-4xl lg:text-5xl leading-[1.1]">
              We are {SITE.name}.
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-slate-700">
              Sai Ranju Welfare Society — jahan seva, sahara aur samriddhi ek saath milte hain. Hum un logon ki awaaz hain jin ki koi nahi sunta.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
