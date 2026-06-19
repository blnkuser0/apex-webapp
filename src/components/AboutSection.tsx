import { Quote } from "lucide-react";

export default function AboutSection() {
  return (
    <section id="about" className="py-14 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-10 items-start">

          {/* Left — company image */}
          <div className="lg:col-span-1">
            <div className="w-full h-56 sm:h-64 lg:h-72 bg-gray-100 rounded overflow-hidden relative border border-gray-200">
              {/* Replace with actual company image using next/image */}
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <div className="w-16 h-16 rounded-full bg-gray-300 mb-2 flex items-center justify-center">
                  <span className="text-xl font-black text-[#c01130]">A</span>
                </div>
                <span className="text-xs text-gray-400">Company Photo</span>
              </div>
            </div>
          </div>

          {/* Middle — about text */}
          <div className="lg:col-span-1">
            <p className="text-[#c01130] text-[10px] sm:text-xs font-bold tracking-[0.2em] uppercase mb-2">
              About Apex Innovations, Inc.
            </p>
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 leading-snug mb-4">
              Driving Innovation. Delivering Excellence.
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed mb-6">
              Our team is composed of technical experts who have extensive
              hands-on experience in business operations and providing solutions
              from various industries, delivering the latest information,
              equipment, and data communication to meet the unfolding and
              evolving needs of businesses in the country.
            </p>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <h3 className="text-xs sm:text-sm font-bold text-gray-900 mb-1.5">
                  Our Mission
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                  To be the leading technology partner recognized for
                  innovation, quality, and integrity.
                </p>
              </div>
              <div>
                <h3 className="text-xs sm:text-sm font-bold text-gray-900 mb-1.5">
                  Our Vision
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                  To be the leading technology partner recognized for
                  innovation, quality, and integrity.
                </p>
              </div>
            </div>
          </div>

          {/* Right — CEO message card */}
          <div className="lg:col-span-1 bg-[#59202b] rounded p-6 sm:p-7 text-white flex flex-col gap-4">
            <Quote size={32} className="text-white/60 fill-white/20" />
            <div>
              <p className="text-[10px] font-bold tracking-[0.18em] uppercase text-white/70 mb-2">
                Message from our CEO
              </p>
              <p className="text-sm leading-relaxed text-white/90">
                Our commitment is to deliver innovative solutions that empower
                our clients to succeed in a rapidly changing digital world.
              </p>
            </div>
            <div className="pt-4 border-t border-white/20">
              <p className="text-sm font-bold text-white">Lemuel Podevida</p>
              <p className="text-xs text-white/70">CEO and CTO</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
