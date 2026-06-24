import Image from "next/image";
import { ArrowRight } from "lucide-react";
import ScrollLink from "./ScrollLink";

export default function HeroSection() {
  return (
    <section id="home" className="relative overflow-hidden pt-16">
      <div className="relative min-h-[calc(100vh-4rem)] flex items-center">

        {/* ── Background hero image ─────────────────────────── */}
        <Image
          src="/img/hero-section.png"
          alt="Apex Innovations team"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />

        {/* ── Bottom fade for depth ────────────────────────── */}
        <div className="absolute inset-x-0 bottom-0 h-24 bg-linear-to-t from-[#8c1b2f]/60 to-transparent" />

        {/* ── Text content ─────────────────────────────────── */}
        <div className="relative z-10 w-full px-6 sm:px-10 lg:px-16 xl:px-24 py-16 lg:py-0">
          <div className="max-w-xl">

            <div className="flex items-center gap-3 mb-5">
              <div className="w-8 h-px bg-white/80" />
              <span className="text-white/90 text-xs sm:text-sm font-semibold tracking-wide">
                Welcome to Apex Innovations Inc.
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-[56px] xl:text-[62px] font-black text-white leading-tight mb-6">
              Powerhouse of Transformative Solutions
            </h1>

            <p className="text-white/90 text-base sm:text-lg leading-relaxed mb-8 max-w-md">
              Empowering organizations through digital transformation, IT
              infrastructure, business solutions, and strategic technology
              services.
            </p>

            <div className="flex flex-col sm:flex-row gap-3">
              <ScrollLink
                sectionId="contact"
                className="inline-flex h-12 items-center justify-center gap-2 rounded
                           bg-white px-6 text-xs font-black uppercase tracking-tight
                           text-[#c01130] transition-colors hover:bg-gray-100"
              >
                Lets Get Started <ArrowRight size={16} strokeWidth={3} />
              </ScrollLink>
              <ScrollLink
                sectionId="about"
                className="inline-flex h-12 items-center justify-center gap-2 rounded
                           border-2 border-white px-6 text-xs font-black uppercase
                           tracking-tight text-white transition-colors
                           hover:bg-white hover:text-[#c01130]"
              >
                View Company Profile <ArrowRight size={16} strokeWidth={3} />
              </ScrollLink>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
