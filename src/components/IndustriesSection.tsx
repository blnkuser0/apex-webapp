import Image from "next/image";

const industries = [
  {
    icon: "/icons/ind-icon/Corporate.png",
    title: "Corporate",
    description: "Empowering businesses with reliable IT solutions.",
  },
  {
    icon: "/icons/ind-icon/Government.png",
    title: "Government",
    description:
      "Supporting government agencies with secure and efficient systems.",
  },
  {
    icon: "/icons/ind-icon/Education.png",
    title: "Education",
    description:
      "Enabling educational institutions with technology for better learning.",
  },
  {
    icon: "/icons/ind-icon/Healthcare.png",
    title: "Healthcare",
    description:
      "Delivering secure and reliable solutions for healthcare providers.",
  },
  {
    icon: "/icons/ind-icon/Financial Services.png",
    title: "Financial Services",
    description:
      "Strengthening financial institutions with secure and compliant solutions.",
  },
  {
    icon: "/icons/ind-icon/Retail.png",
    title: "Retail",
    description:
      "Helping retailers improve operations and customer experience.",
  },
];

export default function IndustriesSection() {
  return (
    <section id="industries" className="bg-white py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        <div className="mb-12 text-center">
          <h2 className="text-2xl font-bold uppercase tracking-[0.12em] text-[#c01130] sm:text-3xl lg:text-4xl">
            Industries We Serve
          </h2>
        </div>

        <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-6">
          {industries.map((industry) => (
            <div
              key={industry.title}
              className="group flex flex-col items-center gap-3 text-center"
            >
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gray-100 transition-colors group-hover:bg-[#c01130]/10">
                <Image
                  src={industry.icon}
                  alt=""
                  width={34}
                  height={34}
                  className="h-8 w-8 object-contain"
                />
              </div>
              <h3 className="text-sm font-bold text-gray-900">
                {industry.title}
              </h3>
              <p className="text-xs leading-relaxed text-gray-500">
                {industry.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
