"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { NAV_LINKS, SITE } from "@/lib/site";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
      const sections = NAV_LINKS.filter((link) =>
        link.href.startsWith("#")
      ).map((link) => link.href.replace("#", ""));
      let currentSection = "";
      sections.forEach((section) => {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop - 120;
          if (window.scrollY >= top) {
            currentSection = `#${section}`;
          }
        }
      });
      setActiveSection(currentSection);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setOpen(false);
    if (href.startsWith("#")) {
      document.getElementById(href.replace("#", ""))?.scrollIntoView({ behavior: "smooth" });
    }
  };

  const isHome = pathname === "/";

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 dark:bg-slate-900/90 backdrop-blur-xl shadow-sm border-b border-slate-200/50 dark:border-slate-700/30"
          : isHome
            ? "bg-white/60 dark:bg-slate-900/60 backdrop-blur-md border-b border-transparent"
            : "bg-white/90 dark:bg-slate-900/90 backdrop-blur-md border-b border-slate-200/50 dark:border-slate-700/30"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          onClick={(e) => {
            e.preventDefault();
            setOpen(false);
            if (pathname === "/") {
              window.scrollTo({ top: 0, behavior: "smooth" });
            } else {
              router.push("/");
            }
          }}
          className="flex items-center gap-3 group"
        >
          <div className="relative h-10 w-10 shrink-0 overflow-hidden rounded-xl transition-transform duration-300 group-hover:scale-105">
            <Image
              src={SITE.image}
              alt={SITE.name}
              fill
              className="object-cover"
              sizes="40px"
            />
          </div>
          <div className="leading-tight">
            <h2 className="text-sm font-bold text-slate-900 dark:text-white sm:text-base transition-colors">
              {SITE.name}
            </h2>
            <p className="text-[10px] font-medium text-slate-400 dark:text-slate-500">
              Since {SITE.establishedYear}
            </p>
          </div>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary Navigation">
          {NAV_LINKS.map((link) => {
            const isHash = link.href.startsWith("#");
            const isRoute = link.href.startsWith("/") && !isHash;
            const isActive = isHash
              ? activeSection === link.href
              : isRoute
                ? pathname === link.href
                : false;

            const commonClass = `relative rounded-lg px-3 py-2 text-xs font-semibold uppercase tracking-wide transition-all duration-300 ${
              isActive
                ? "bg-green-50 dark:bg-green-900/30 text-green-700 dark:text-green-300"
                : "text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800/50 hover:text-slate-900 dark:hover:text-white"
            }`;

            const isExternal = "external" in link && link.external;

            return (
              <a
                key={link.href}
                href={link.href}
                target={isExternal ? "_blank" : undefined}
                rel={isExternal ? "noopener noreferrer" : undefined}
                onClick={(e) => {
                  if (isHash) {
                    e.preventDefault();
                    handleNavClick(link.href);
                  } else {
                    setOpen(false);
                  }
                }}
                className={commonClass}
              >
                {link.label}
                {isActive && (
                  <span className="absolute bottom-0 left-1/2 h-0.5 w-4 -translate-x-1/2 rounded-full bg-green-500" />
                )}
              </a>
            );
          })}

          <div className="mx-1 h-5 w-px bg-slate-200 dark:bg-slate-700" />

          <Link
            href="/donate"
            onClick={() => setOpen(false)}
            className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-green-600 to-emerald-500 px-5 py-2.5 text-xs font-bold uppercase tracking-wide text-white shadow-md transition-all duration-300 hover:shadow-lg hover:scale-[1.02] active:scale-[0.98]"
          >
            <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
            </svg>
            Donate Now
          </Link>
        </nav>

        <div className="flex items-center gap-2 lg:hidden">
          <Link
            href="/donate"
            onClick={() => setOpen(false)}
            className="rounded-lg bg-gradient-to-r from-green-600 to-emerald-500 px-4 py-2 text-xs font-bold uppercase tracking-wide text-white shadow-sm transition-all hover:shadow-md"
          >
            Donate
          </Link>

          <button
            type="button"
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((prev) => !prev)}
            className="inline-flex items-center justify-center rounded-lg border border-slate-200 dark:border-slate-700 p-2 text-slate-700 dark:text-slate-300 transition-all hover:bg-slate-50 dark:hover:bg-slate-800"
          >
            <span className="sr-only">Toggle Menu</span>
            {open ? (
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
            ) : (
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
            )}
          </button>
        </div>
      </div>

      <div
        id="mobile-nav"
        className={`grid transition-all duration-300 ease-in-out lg:hidden ${
          open ? "grid-rows-[1fr] border-t border-slate-200/50 dark:border-slate-700/30" : "grid-rows-[0fr]"
        }`}
      >
        <div className="overflow-hidden">
          <div className="space-y-1 bg-white/95 dark:bg-slate-900/95 backdrop-blur-lg px-4 py-4">
          {NAV_LINKS.map((link) => {
            const isExternal = "external" in link && link.external;
            return (
              <a
                key={link.href}
                href={link.href}
                target={isExternal ? "_blank" : undefined}
                rel={isExternal ? "noopener noreferrer" : undefined}
                onClick={(e) => {
                  if (link.href.startsWith("#")) {
                    e.preventDefault();
                    handleNavClick(link.href);
                  } else {
                    setOpen(false);
                  }
                }}
                className="block rounded-lg px-3 py-2.5 text-sm font-medium text-slate-600 dark:text-slate-300 transition-all hover:bg-slate-50 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-white"
              >
                {link.label}
              </a>
            );
          })}
           <Link
             href="/donate"
             onClick={() => setOpen(false)}
             className="mt-3 w-full rounded-lg bg-gradient-to-r from-green-600 to-emerald-500 px-4 py-3 text-sm font-semibold text-white shadow-sm transition-all hover:shadow-md flex items-center justify-center"
           >
             Donate Now
           </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
