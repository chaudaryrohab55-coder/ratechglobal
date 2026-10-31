import Image from "next/image";
import {
  Building2,
  Cpu,
  GraduationCap,
  HeartPulse,
  Rocket,
  ShoppingCart,
  UtensilsCrossed,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

type Industry = {
  label: string;
  note: string;
  Icon: LucideIcon;
  // Optional photo. Put the file in /public/industries/ and write "/industries/real-estate.webp"
  image?: string;
};

const industries: Industry[] = [
  { label: "Real Estate", note: "Property leads and listings", Icon: Building2 },
  { label: "E-commerce", note: "Stores, ads and conversions", Icon: ShoppingCart },
  { label: "Food", note: "Restaurants and delivery brands", Icon: UtensilsCrossed },
  { label: "Technology", note: "SaaS, apps and IT services", Icon: Cpu },
  { label: "Startups", note: "Launch and early growth", Icon: Rocket },
  { label: "Education", note: "Schools, courses and academies", Icon: GraduationCap },
  { label: "Healthcare", note: "Clinics and wellness brands", Icon: HeartPulse },
];

function IndustryCard({ item, index }: { item: Industry; index: number }) {
  const { Icon } = item;
  return (
    <div
      className={`w-[240px] shrink-0 overflow-hidden rounded-2xl border border-[#26334a] bg-[#111b2e] ${
        index % 2 === 1 ? "mt-8" : ""
      }`}
    >
      {item.image ? (
        <div className="relative h-36 w-full">
          <Image src={item.image} alt={item.label} fill sizes="240px" className="object-cover" />
        </div>
      ) : (
        <div className="flex h-36 items-center justify-center bg-[#0d1424]">
          <span className="flex h-16 w-16 items-center justify-center rounded-2xl bg-sky-500/10 text-sky-400">
            <Icon size={30} strokeWidth={1.6} aria-hidden="true" />
          </span>
        </div>
      )}
      <div className="p-4">
        <div className="text-base font-semibold text-white">{item.label}</div>
        <div className="mt-1 text-sm text-[#8290a8]">{item.note}</div>
      </div>
    </div>
  );
}

export default function IndustriesMarquee() {
  return (
    <section className="industries-ac bg-[#080d1a] pb-16 pt-6 text-[#b5c1d5] lg:pb-24">
      <div className="mx-auto max-w-7xl px-5 text-center sm:px-8">
        <span className="inline-block rounded-full border border-[#26334a] px-3.5 py-1.5 text-[13px] text-sky-400">
          Industries we serve
        </span>
        <h2 className="font-display mt-5 text-3xl font-bold leading-tight text-white sm:text-4xl">
          Strategies that fit your industry
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-base leading-relaxed">
          Every market sells differently. We plan campaigns around how your customers actually buy.
        </p>
      </div>

      <div className="industries-viewport mt-12">
        <div className="industries-track flex w-max">
          <div className="flex gap-5 pr-5">
            {industries.map((item, i) => (
              <IndustryCard key={item.label} item={item} index={i} />
            ))}
          </div>
          <div className="flex gap-5 pr-5" aria-hidden="true">
            {industries.map((item, i) => (
              <IndustryCard key={item.label} item={item} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
