"use client";

import { useCallback, useMemo } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { ChevronLeft, ChevronRight } from "lucide-react";

const brands = [
  { name: "Linksys", color: "#0033a0" },
  { name: "Samsung", color: "#1428A0" },
  { name: "logitech", accentColor: "#00B140", nameColor: "#000000" },
  { name: "Cisco", color: "#1ba0d7" },
  { name: "Grandstream", color: "#005BAA" },
  { name: "VS>", color: "#CC0000" },
  { name: "Hikvision", color: "#C40000" },
  { name: "Epson", color: "#003087" },
  { name: "Fortinet", color: "#EE3124" },
  { name: "Acer", color: "#83b81a" },
];

export default function ProductsCarousel() {
  const autoplay = useMemo(
    () => Autoplay({ delay: 2600, stopOnInteraction: false }),
    []
  );
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: "start", slidesToScroll: 1 },
    [autoplay]
  );

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  return (
    <section className="bg-[#1a1a1a] py-12 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        <div className="flex flex-col lg:flex-row items-start lg:items-center gap-6 lg:gap-12">

          {/* Left — text block */}
          <div className="lg:w-52 shrink-0">
            <h2 className="text-xl sm:text-2xl font-bold text-white mb-2">
              Our Products
            </h2>
            <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
              We deliver excellence through our partner brands.
            </p>
          </div>

          {/* Carousel row */}
          <div className="flex items-center gap-2 sm:gap-3 flex-1 min-w-0 w-full">
            {/* Prev button */}
            <button
              onClick={scrollPrev}
              aria-label="Previous"
              className="shrink-0 w-8 h-8 sm:w-10 sm:h-10 rounded-full border border-white/20 text-white/60 flex items-center justify-center hover:border-white/50 hover:text-white transition-colors"
            >
              <ChevronLeft size={16} />
            </button>

            {/* Embla viewport */}
            <div className="overflow-hidden flex-1" ref={emblaRef}>
              <div className="flex gap-3">
                {brands.map((brand) => (
                  <div
                    key={brand.name}
                    className="shrink-0 bg-white rounded shadow-sm flex items-center justify-center px-5 h-18 sm:h-20"
                    style={{ minWidth: "120px" }}
                  >
                    <span
                      className="text-sm sm:text-base font-black tracking-tight"
                      style={{ color: brand.color ?? brand.nameColor }}
                    >
                      {brand.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Next button */}
            <button
              onClick={scrollNext}
              aria-label="Next"
              className="shrink-0 w-8 h-8 sm:w-10 sm:h-10 rounded-full border border-white/20 text-white/60 flex items-center justify-center hover:border-white/50 hover:text-white transition-colors"
            >
              <ChevronRight size={16} />
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}
