import { SITE } from "@/lib/site";
import { SectionShell } from "./SectionShell";
import Image from "next/image";

const CERTIFICATES = [
  {
    title: "80G Registration",
    description: "Tax exemption certificate under section 80G of Income Tax Act",
    issuedBy: "Income Tax Department, Govt. of India",
    image: "/image/image9.png",
  },
  {
    title: "12A Registration",
    description: "Income tax exemption certificate for charitable organizations",
    issuedBy: "Income Tax Department, Govt. of India",
    image: "/image/image10.png",
  },
  {
    title: "Societies Registration",
    description: "Registered under Societies Registration Act, 1860",
    issuedBy: "Registrar of Societies, Uttar Pradesh",
    image: "/image/image11.png",
  },
  {
    title: "FCRA Registration",
    description: "Foreign Contribution Regulation Act registration for receiving foreign donations",
    issuedBy: "Ministry of Home Affairs, Govt. of India",
    image: "/image/image12.png",
  },
];

export function SectionCertificates() {
  return (
    <SectionShell tone="surface" className="py-0">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 rounded-full bg-brand-100 px-5 py-2 text-xs font-semibold uppercase tracking-wider text-brand-700 mb-6">
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Legal Compliance
          </div>
          <h2 className="font-display text-3xl font-semibold tracking-tight text-brand-900 sm:text-4xl lg:text-[2.75rem] leading-[1.1]">
            Registrations & Certificates
          </h2>
          <p className="mt-4 mx-auto max-w-2xl text-lg leading-relaxed text-slate-600">
            {SITE.name} is a fully compliant and registered non-profit organization.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          {CERTIFICATES.map((cert) => (
            <div
              key={cert.title}
              className="card group rounded-2xl p-6 transition-all duration-300 hover:shadow-md"
            >
              <div className="flex items-start gap-4">
                <div className="relative w-16 h-16 shrink-0 rounded-xl overflow-hidden bg-brand-50">
                  <Image
                    src={cert.image}
                    alt={cert.title}
                    fill
                    className="object-cover"
                    sizes="64px"
                  />
                </div>
                <div>
                  <h3 className="font-display text-lg font-semibold text-brand-900">
                    {cert.title}
                  </h3>
                  <p className="mt-1 text-sm text-slate-600">{cert.description}</p>
                  <p className="mt-2 text-xs text-slate-400">Issued by: {cert.issuedBy}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 rounded-2xl bg-brand-900/95 p-8 text-center text-white shadow-sm ring-1 ring-white/10">
          <p className="text-lg font-semibold">Registration No: {SITE.registrationNo}</p>
          <p className="mt-2 text-sm text-brand-200">
            All donations are eligible for tax exemption under Section 80G of Income Tax Act.
          </p>
        </div>
    </SectionShell>
  );
}
