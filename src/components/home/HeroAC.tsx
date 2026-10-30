import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";

const FOUNDER_NAME = "ROHAB ABDULLLAH";
const FOUNDER_ROLE = "Founder & CEO";
const WHATSAPP_URL = "https://wa.me/923168612919";

const stats = [
  { value: "4x+", label: "Avg ROAS on Meta Ads" },
  { value: "40+", label: "Happy clients" },
  { value: "24h", label: "Average response time" },
  { value: "5", label: "Markets served" },
];

function Chip({
  className,
  color,
  children,
}: {
  className: string;
  color: string;
  children: ReactNode;
}) {
  return (
    <div
      className={`hero-chip absolute z-10 flex items-center gap-2.5 rounded-xl border border-[#26334a] bg-[#080d1a] px-4 py-3 text-sm font-semibold text-white ${className}`}
    >
      <svg width="18" height="18" viewBox="0 0 18 18" aria-hidden="true" className="shrink-0">
        <circle cx="9" cy="9" r="9" fill={color} />
        <path d="M5 9.5l2.5 2.5L13 6.5" fill="none" stroke="#080d1a" strokeWidth="2" />
      </svg>
      {children}
    </div>
  );
}

export default function HeroAC() {
  return (
       <section className="hero-ac overflow-x-clip bg-[#080d1a] pt-28 text-[#b5c1d5] lg:pt-36">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid items-center gap-14 pb-12 lg:grid-cols-[1.15fr_1fr] lg:gap-[72px]">
          <div>
            <span className="inline-block rounded-full border border-[#26334a] px-3.5 py-1.5 text-[13px] text-sky-400">
              Grow your business online
            </span>
            <h1 className="font-display mt-6 text-4xl font-bold leading-[1.1] text-white sm:text-5xl lg:text-[58px]">
              Pakistan&rsquo;s results-driven{" "}
              <span className="text-sky-400">digital marketing</span> agency
            </h1>
            <p className="mt-6 max-w-[560px] text-lg leading-relaxed">
              Meta Ads, Google Ads, SEO, Shopify and web development, with real,
              measurable ROI for businesses at home and worldwide.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/consultation"
                className="rounded-[10px] bg-sky-500 px-6 py-3.5 font-semibold text-[#080d1a] transition-colors hover:bg-sky-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-300"
              >
                Book free consultation
              </Link>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-[10px] border border-[#26334a] px-6 py-3.5 font-medium text-white transition-colors hover:border-sky-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-300"
              >
                WhatsApp us
              </a>
            </div>
          </div>

          <div className="relative mx-auto aspect-[4/5] w-full max-w-[400px] lg:ml-auto lg:mr-0">
            <div className="absolute inset-0 overflow-hidden rounded-3xl border border-[#26334a] bg-[#111b2e]">
              <Image
                src="/founder-hero.webp"
                alt={`${FOUNDER_NAME}, ${FOUNDER_ROLE}, Ratech Global`}
                fill
                priority
                sizes="(max-width: 1024px) 90vw, 480px"
                className="object-cover"
                style={{ objectPosition: "center 20%" }}
              />
            </div>

            <Chip color="#0ea5e9" className="hero-chip-1 right-3 top-6 sm:-right-4">
              ROI guaranteed
            </Chip>
            <Chip color="#22d3ee" className="hero-chip-2 left-3 top-[44%] sm:-left-8">
              24hr support
            </Chip>
            <Chip color="#38bdf8" className="hero-chip-3 -bottom-4 right-6">
              Free strategy session
            </Chip>

            <div className="absolute bottom-5 left-5 z-10 rounded-xl border border-[#26334a] bg-[#080d1a] px-4 py-3">
              <div className="text-[15px] font-semibold text-white">{FOUNDER_NAME}</div>
              <div className="text-[13px]">{FOUNDER_ROLE}</div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-6 border-t border-[#26334a] py-8 lg:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label}>
              <div className="text-3xl font-semibold text-sky-400 sm:text-[34px]">{s.value}</div>
              <div className="text-sm text-[#8290a8]">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
