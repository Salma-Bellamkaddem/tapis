// src/components/ExperienceSection.tsx
"use client";

import { useCountUp, useInView } from "@/app/hooks/useCountUp";
import Link from "next/link";


const FOUNDING_YEAR = 2003;
const FAMILIES = 13;

export default function ExperienceSection() {
  const { ref, inView } = useInView<HTMLDivElement>();

  const families = useCountUp(FAMILIES, inView);
  const handcrafted = useCountUp(100, inView);

  return (
    <section className="bg-[#faf0e4] py-16 px-4 md:px-8 border-t border-gray-200">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl text-gray-900 font-serif mb-6 leading-tight">
          Woven by the same families since {FOUNDING_YEAR}
        </h2>

        <p className="text-gray-600 text-sm md:text-base leading-relaxed max-w-2xl mx-auto mb-12">
          Our cooperative brings together 13 families — 3 in Taznakhte and 10 in
          the surrounding villages — who hand-knot every rug from pure sheep&apos;s
          wool sourced in the Siroua mountains.
        </p>

        <div
          ref={ref}
          className="grid grid-cols-1 sm:grid-cols-3 gap-6 divide-y sm:divide-y-0 sm:divide-x divide-gray-300 mb-10 pb-6 border-b border-gray-300"
        >
          <div className="flex flex-col items-center pt-4 sm:pt-0">
            <span className="text-[#A44E36] text-3xl md:text-4xl font-serif mb-1">
              {FOUNDING_YEAR}
            </span>
            <span className="text-gray-500 text-xs tracking-wide font-semibold">
              Founded in Taznakhte
            </span>
          </div>

          <div className="flex flex-col items-center pt-4 sm:pt-0">
            <span className="text-[#A44E36] text-3xl md:text-4xl font-serif mb-1">
              {families}
            </span>
            <span className="text-gray-500 text-xs tracking-wide font-semibold">
              Weaving families
            </span>
          </div>

          <div className="flex flex-col items-center pt-4 sm:pt-0">
            <span className="text-[#A44E36] text-3xl md:text-4xl font-serif mb-1">
              {handcrafted}%
            </span>
            <span className="text-gray-500 text-xs tracking-wide font-semibold">
              Hand-knotted in Siroua wool
            </span>
          </div>
        </div>

        <Link
          href="/story"
          className="inline-flex items-center gap-2 text-gray-900 font-semibold text-sm hover:text-[#A44E36] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#A44E36] transition-colors"
        >
          Read our story
          <span aria-hidden="true">&rarr;</span>
        </Link>
      </div>
    </section>
  );
}