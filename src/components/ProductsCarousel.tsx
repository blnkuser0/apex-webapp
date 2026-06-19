"use client";

import { useCallback, useMemo } from "react";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { ChevronLeft, ChevronRight } from "lucide-react";

const brands = [
  { name: "Acer", src: "/logo/brand-logo/Acer.png" },
  { name: "Adata", src: "/logo/brand-logo/Adata.png" },
  { name: "APC", src: "/logo/brand-logo/APC.png" },
  { name: "Asenware", src: "/logo/brand-logo/Asenware.png" },
  { name: "Asus", src: "/logo/brand-logo/Asus.png" },
  { name: "Barco", src: "/logo/brand-logo/Barco.png" },
  { name: "Bose", src: "/logo/brand-logo/Bose.jpg" },
  { name: "Canovate", src: "/logo/brand-logo/Canovate.png" },
  { name: "Cisco", src: "/logo/brand-logo/Cisco.png" },
  { name: "Epson", src: "/logo/brand-logo/Epson.png" },
  { name: "Gigabyte", src: "/logo/brand-logo/Gigabyte.png" },
  { name: "GMKtec", src: "/logo/brand-logo/GMKtec.png" },
  { name: "Grandstream", src: "/logo/brand-logo/Grandstream.png" },
  { name: "Hikvision", src: "/logo/brand-logo/Hikvision.png" },
  { name: "HP", src: "/logo/brand-logo/HP.png" },
  { name: "Intel", src: "/logo/brand-logo/Intel.png" },
  { name: "Jabra", src: "/logo/brand-logo/Jabra.png" },
  { name: "Kingston", src: "/logo/brand-logo/Kingston.png" },
  { name: "Lenovo", src: "/logo/brand-logo/Lenovo.png" },
  { name: "LG", src: "/logo/brand-logo/LG.png" },
  { name: "Linksys", src: "/logo/brand-logo/Linksys.png" },
  { name: "Logitech", src: "/logo/brand-logo/Logitech.png" },
  { name: "MSI", src: "/logo/brand-logo/MSI.png" },
  { name: "Panduit", src: "/logo/brand-logo/Panduit.png" },
  { name: "Samsung", src: "/logo/brand-logo/Samsung.png" },
  { name: "Seagate", src: "/logo/brand-logo/Seagate.png" },
  { name: "Sennheiser", src: "/logo/brand-logo/Sennheiser.png" },
  { name: "Siemon", src: "/logo/brand-logo/Siemon.png" },
  { name: "Starlink", src: "/logo/brand-logo/Starlink.png" },
  { name: "Viewsonic", src: "/logo/brand-logo/Viewsonic.png" },
  { name: "VSSP", src: "/logo/brand-logo/VSSP.png" },
  { name: "Xigmatek", src: "/logo/brand-logo/Xigmatek.png" },
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
    <section className="bg-[#c01130] py-12 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        <div className="flex flex-col lg:flex-row items-start lg:items-center gap-6 lg:gap-12">

          {/* Left — text block */}
          <div className="w-full shrink-0 text-center lg:w-52 lg:text-left">
            <h2 className="text-xl sm:text-2xl font-bold text-white mb-2">
              Our Brands
            </h2>
            <p className="text-white/75 text-xs sm:text-sm leading-relaxed">
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
                    <Image
                      src={brand.src}
                      alt={`${brand.name} logo`}
                      width={120}
                      height={56}
                      className="h-10 w-auto object-contain"
                    />
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
