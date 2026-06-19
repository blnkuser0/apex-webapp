import {
  Building2,
  Landmark,
  BookOpen,
  HeartPulse,
  Banknote,
  ShoppingCart,
} from "lucide-react";

const industries = [
  {
    icon: Building2,
    title: "Corporate",
    description:
      "Empowering businesses with reliable IT solutions.",
  },
  {
    icon: Landmark,
    title: "Government",
    description:
      "Supporting government agencies with secure and efficient systems.",
  },
  {
    icon: BookOpen,
    title: "Education",
    description:
      "Enabling educational institutions with technology for better learning.",
  },
  {
    icon: HeartPulse,
    title: "Healthcare",
    description:
      "Delivering secure and reliable solutions for healthcare providers.",
  },
  {
    icon: Banknote,
    title: "Financial Services",
    description:
      "Strengthening financial institutions with secure and compliant solutions.",
  },
  {
    icon: ShoppingCart,
    title: "Retail",
    description:
      "Helping retailers improve operations and customer experience.",
  },
];

export default function IndustriesSection() {
  return (
    <section id="industries" className="py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        <div className="text-center mb-12">
          <p className="text-[#c01130] text-xs font-bold tracking-[0.2em] uppercase">
            Industries We Serve
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
          {industries.map((industry) => {
            const Icon = industry.icon;
            return (
              <div
                key={industry.title}
                className="flex flex-col items-center text-center gap-3 group"
              >
                <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center group-hover:bg-[#c01130] transition-colors">
                  <Icon
                    size={28}
                    className="text-gray-600 group-hover:text-white transition-colors"
                  />
                </div>
                <h3 className="text-sm font-bold text-gray-900">
                  {industry.title}
                </h3>
                <p className="text-xs text-gray-500 leading-relaxed">
                  {industry.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
