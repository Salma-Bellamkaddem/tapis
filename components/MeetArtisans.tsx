


// src/components/MeetArtisans.tsx
"use client";

import Image from "next/image";
import Link from "next/link";

export default function MeetArtisans() {
  return (
    <section className="bg-[#F3EBE0] py-24 px-4 md:px-8 border-b border-[#A44E36]/10">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">
        <div className="w-full lg:w-1/2 relative h-[450px] rounded-2xl overflow-hidden shadow-lg">
          <Image
                 src="/placeholders/artisans.jpg" 

            alt="Two weavers from the cooperative working on a loom in Taznakhte"
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover"
          />
        </div>

        <div className="w-full lg:w-1/2 flex flex-col justify-center">
          <h2 className="font-serif text-3xl md:text-4xl text-gray-900 mb-6 leading-tight">
            The hands behind every rug
          </h2>

          <p className="text-gray-700 text-base leading-relaxed mb-4">
            The women of our cooperative draw their patterns from what surrounds
            them — mountains, trees, plants, animals, insects — and knot them
            into the rug from memory, without a drawing to follow.
          </p>

          <p className="text-gray-700 text-base leading-relaxed mb-8">
            Each rug takes between three weeks and four months, depending on its
            size and the density of the knots.
          </p>

          <div className="grid grid-cols-2 gap-6 mb-8">
            <div>
              <span className="block font-serif text-3xl text-[#A44E36] mb-1">13</span>
              <span className="text-sm text-gray-600">
                Families in the cooperative
              </span>
            </div>
            <div>
              <span className="block font-serif text-3xl text-[#A44E36] mb-1">0</span>
              <span className="text-sm text-gray-600">
                Middlemen between you and the weaver
              </span>
            </div>
          </div>

          <div>
            <Link
              href="/story"
              className="bg-[#A44E36] text-white px-8 py-4 text-sm font-semibold hover:bg-[#8a3f2b] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#A44E36] transition-colors rounded shadow-sm inline-block"
            >
              Meet the weavers
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}