"use client";

import { useEffect, useState } from "react";
import { Check, ClipboardCheck, FileText, Rocket, Search, TrendingUp } from "lucide-react";
import type { LucideIcon } from "lucide-react";

type Step = { title: string; text: string; Icon: LucideIcon };

const steps: Step[] = [
  {
    title: "Discovery",
    text: "A free strategy call to understand your business, customers and goals.",
    Icon: Search,
  },
  {
    title: "Audit and plan",
    text: "We review your ads, website and tracking, then share a clear plan.",
    Icon: ClipboardCheck,
  },
  {
    title: "Build and launch",
    text: "Campaigns, pages and tracking go live and are tested step by step.",
    Icon: Rocket,
  },
  {
    title: "Measure and optimize",
    text: "We watch the numbers and keep improving what works best.",
    Icon: TrendingUp,
  },
  {
    title: "Report and grow",
    text: "Weekly and monthly reports show your results and what comes next.",
    Icon: FileText,
  },
];

export default function ProcessSection() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = setInterval(() => setActive((a) => (a + 1) % steps.length), 3500);
    return () => clearInterval(id);
  }, [paused]);

  const progress = (active / (steps.length - 1)) * 100;

  return (
    <section className="process-ac border-y border-[#26334a] bg-[#080d1a] py-16 text-[#b5c1d5] lg:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="text-center">
          <span className="inline-block rounded-full border border-[#26334a] px-3.5 py-1.5 text-[13px] text-sky-400">
            Our process
          </span>
          <h2 className="font-display mt-5 text-3xl font-bold leading-tight text-white sm:text-4xl">
            A simple process, built around your results
          </h2>
        </div>

        <div
          className="relative mt-14"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <div className="absolute left-[10%] right-[10%] top-7 hidden h-0.5 bg-[#26334a] lg:block" aria-hidden="true">
            <div
              className="h-full bg-sky-500 transition-all duration-500"
              style={{ width: `${progress}%` }}
            />
          </div>

          <ol className="flex flex-col gap-8 lg:grid lg:grid-cols-5 lg:gap-4">
            {steps.map((s, i) => {
              const isActive = i === active;
              const isDone = i < active;
              const { Icon } = s;
              return (
                <li key={s.title}>
                  <button
                    type="button"
                    onClick={() => setActive(i)}
                    onFocus={() => setActive(i)}
                    aria-current={isActive ? "step" : undefined}
                    className="flex w-full items-start gap-4 text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-sky-300 lg:flex-col lg:items-center lg:text-center"
                  >
                    <span className="relative z-10 shrink-0">
                      <span
                        className={`flex h-14 w-14 items-center justify-center rounded-2xl border transition-colors duration-300 ${
                          isActive
                            ? "border-sky-500 bg-sky-500 text-[#080d1a]"
                            : isDone
                              ? "border-sky-500/60 bg-[#111b2e] text-sky-400"
                              : "border-[#26334a] bg-[#111b2e] text-[#8290a8]"
                        }`}
                      >
                        <Icon size={24} strokeWidth={1.8} aria-hidden="true" />
                      </span>
                      {isDone ? (
                        <span className="absolute -right-1.5 -top-1.5 flex h-5 w-5 items-center justify-center rounded-full bg-sky-500 text-[#080d1a]">
                          <Check size={12} strokeWidth={3} aria-hidden="true" />
                        </span>
                      ) : null}
                    </span>
                    <span className="block lg:mt-5">
                      <span className="block text-xs font-semibold tracking-wide text-sky-400">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span
                        className={`mt-1 block text-lg font-semibold transition-colors duration-300 ${
                          isActive ? "text-white" : "text-[#b5c1d5]"
                        }`}
                      >
                        {s.title}
                      </span>
                      <span className="mt-2 block text-sm leading-relaxed text-[#8290a8]">{s.text}</span>
                    </span>
                  </button>
                </li>
              );
            })}
          </ol>
        </div>

        <p className="mt-12 text-center text-sm text-[#8290a8]">
          Scope, timeline and pricing are agreed with you before any work starts.
        </p>
      </div>
    </section>
  );
}
