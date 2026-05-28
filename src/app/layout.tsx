import type { Metadata } from "next";
import { DM_Sans, Fraunces } from "next/font/google";
import "./globals.css";
import { SITE } from "@/lib/site";
import { generateStructuredData, viewport, themeColor } from "./schema";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { ScrollProgress } from "@/components/site/ScrollProgress";
import { ThemeProvider } from "./providers";
import { FloatingWidgets } from "@/components/site/FloatingWidgets";
import { Loader } from "@/components/site/Loader";

const display = Fraunces({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
});

const sans = DM_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: SITE.name,
    template: `%s | ${SITE.name}`,
  },
  description: SITE.description,
  keywords: ["NGO", "welfare society", "healthcare", "skill development", "community service", "non-profit", "India", "social work", "charity", "donation"],
  authors: [{ name: "Mrs. Ranju", url: `https://${SITE.website}` }],
  creator: SITE.name,
  publisher: SITE.name,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(`https://${SITE.website}`),
  openGraph: {
    title: SITE.name,
    description: SITE.description,
    type: "website",
    locale: "en_IN",
    siteName: SITE.name,
    images: [
      {
        url: "/image/banner.png",
        width: 1200,
        height: 630,
        alt: SITE.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE.name,
    description: SITE.description,
    images: ["/image/banner.png"],
  },
  verification: {
    google: "google-site-verification-code",
  },
  other: {
    "application/ld+json": generateStructuredData(),
  },
};

export { viewport, themeColor };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${display.variable} ${sans.variable} h-full scroll-smooth`} suppressHydrationWarning>
      <body className="bg-[var(--surface)] font-sans text-slate-900 antialiased">
        <ThemeProvider>
          <a
            href="#main"
            className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-white focus:px-4 focus:py-2 focus:text-brand-900 focus:shadow"
          >
            Skip to content
          </a>
          <Loader />
          <ScrollProgress />
          <div className="app-bg" aria-hidden />
          <SiteHeader />
          <div className="flex min-h-screen flex-col pt-16">
            {children}
            <SiteFooter />
          </div>
          <FloatingWidgets />
        </ThemeProvider>
      </body>
    </html>
  );
}
