import { SITE, CONTACT } from "@/lib/site";
import type { Metadata } from "next";

export function generateStructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "NGO",
    name: SITE.name,
    description: SITE.description,
    url: `https://${SITE.website}`,
    logo: `https://${SITE.website}/image/banner.png`,
    sameAs: [
      "#", // Facebook
      "#", // Instagram
      "#", // YouTube
      "#", // LinkedIn
    ],
    address: {
      "@type": "PostalAddress",
      streetAddress: CONTACT.address,
      addressLocality: "Lucknow",
      addressRegion: "Uttar Pradesh",
      addressCountry: "IN",
      postalCode: "226011",
    },
    telephone: CONTACT.helpline,
    email: CONTACT.email,
    foundingDate: SITE.establishedYear,
    founder: {
      "@type": "Person",
      name: "Mrs. Ranju",
    },
    keywords: [
      "NGO",
      "welfare society",
      "healthcare",
      "skill development",
      "community service",
      "non-profit",
      "India",
      "social work",
    ],
    areaServed: {
      "@type": "Country",
      name: "India",
    },
    knowsAbout: [
      "Healthcare",
      "Skill Development",
      "Women Empowerment",
      "Community Service",
      "Social Welfare",
    ],
  };

  return JSON.stringify(structuredData);
}

export const viewport: Metadata["viewport"] = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const themeColor = [
  { media: "(prefers-color-scheme: light)", color: "#0F172A" },
  { media: "(prefers-color-scheme: dark)", color: "#0F172A" },
];
