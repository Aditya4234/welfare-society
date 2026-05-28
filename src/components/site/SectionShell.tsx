import type { ReactNode } from "react";

type Tone = "plain" | "surface";

export function SectionShell({
  id,
  className,
  tone = "plain",
  children,
}: {
  id?: string;
  className?: string;
  tone?: Tone;
  children: ReactNode;
}) {
  return (
    <section id={id} className={`scroll-mt-20 bg-transparent ${className ?? ""}`}>
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className={tone === "surface" ? "surface rounded-3xl p-6 sm:p-10 lg:p-12" : ""}>
          {children}
        </div>
      </div>
    </section>
  );
}

