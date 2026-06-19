import { ArrowRight } from "lucide-react";

const heroVideoSrc = "";

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-[#59202b] pt-16"
    >
      <div className="relative min-h-[calc(100vh-4rem)] overflow-hidden bg-[#59202b]">
        <div className="hero-red-panel relative z-20 flex min-h-[500px] items-center overflow-hidden px-6 py-14 sm:min-h-[560px] sm:px-10 lg:absolute lg:inset-y-0 lg:left-0 lg:min-h-0 lg:w-[50vw] lg:px-[7.5vw] lg:py-0">
          <div className="absolute inset-0 bg-[#c01130]" />
          <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(89,32,43,0.42),transparent_48%),radial-gradient(circle_at_22%_18%,rgba(255,255,255,0.2),transparent_2px),radial-gradient(circle_at_66%_68%,rgba(255,255,255,0.16),transparent_2px)]" />
          {/* Circuit board tech background */}
          <img
            src="/circuit-bg.svg"
            alt=""
            aria-hidden
            className="absolute inset-0 h-full w-full object-cover opacity-45 pointer-events-none select-none"
          />
          <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#8c1b2f]/75 to-transparent" />

          <div className="relative z-10 w-full max-w-[430px] text-white">
            <div className="mb-5 flex items-center gap-3">
              <div className="h-px w-8 bg-white" />
              <span className="text-xs font-bold tracking-wide sm:text-sm">
                Welcome to Apex Innovations Inc.
              </span>
            </div>

            <h1 className="mb-7 max-w-[420px] text-[42px] font-black leading-[0.98] tracking-tight sm:text-[58px] lg:text-[58px] xl:text-[62px]">
              Powerhouse of Transformative Solutions
            </h1>

            <p className="mb-9 max-w-[410px] text-base font-bold leading-snug text-white/95 sm:text-lg">
              Empowering organizations through digital transformation, IT
              infrastructure, business solutions, and strategic technology
              services.
            </p>

            <div className="flex flex-col gap-3 sm:flex-row">
              <a
                href="#contact"
                className="inline-flex h-12 items-center justify-center gap-3 rounded bg-white px-5 text-[12px] font-black uppercase tracking-tight text-[#59202b] transition-colors hover:bg-[#edebf7]"
              >
                Lets Get Started <ArrowRight size={18} strokeWidth={3} />
              </a>
              <a
                href="#about"
                className="inline-flex h-12 items-center justify-center gap-3 rounded border-2 border-white px-5 text-[12px] font-black uppercase tracking-tight text-white transition-colors hover:bg-white hover:text-[#59202b]"
              >
                View Company Profile <ArrowRight size={18} strokeWidth={3} />
              </a>
            </div>
          </div>
        </div>

        <div aria-hidden className="hero-slant-shadow" />
        <div aria-hidden className="hero-slant-line" />

        <div className="relative z-10 flex min-h-[300px] items-center justify-center overflow-hidden bg-[#59202b] sm:min-h-[360px] lg:min-h-[calc(100vh-4rem)] lg:pl-[43vw]">
          {heroVideoSrc ? (
            <video
              className="absolute inset-0 h-full w-full object-cover"
              autoPlay
              muted
              loop
              playsInline
              poster="/window.svg"
            >
              <source src={heroVideoSrc} type="video/mp4" />
            </video>
          ) : (
            <p className="relative z-10 select-none text-4xl font-extrabold tracking-tight text-white drop-shadow-[0_2px_0_rgba(0,0,0,0.35)] sm:text-5xl">
              Video
            </p>
          )}
          <div className="absolute inset-0 bg-[#59202b]/30" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_24%,rgba(255,255,255,0.08),transparent_28%),linear-gradient(135deg,rgba(216,217,197,0.06),transparent_42%)]" />
        </div>
      </div>
    </section>
  );
}
