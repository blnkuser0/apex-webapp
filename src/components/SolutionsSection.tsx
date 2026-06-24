import Image from "next/image";
import ScrollLink from "./ScrollLink";

const solutions = [
  {
    icon: "/icons/sol-icon/Network Connectivity Icon.png",
    title: "Network Connectivity & Security",
    description:
      "Reliable and secure network infrastructure solutions to keep your business connected and protected.",
  },
  {
    icon: "/icons/sol-icon/IP Communication Icon.png",
    title: "IP Communication (Voice, Data, Video)",
    description:
      "Voice, data, and video communication systems that improve collaboration and operational efficiency.",
  },
  {
    icon: "/icons/sol-icon/home.png",
    title: "Home/Office Wireless Solutions",
    description:
      "High-performance wireless connectivity solutions for homes, offices, and hybrid workplaces.",
  },
  {
    icon: "/icons/sol-icon/Conference  Icon.png",
    title: "Conference Solutions",
    description:
      "Modern meeting room and video conferencing technologies for seamless collaboration.",
  },
  {
    icon: "/icons/sol-icon/Laptops, PCs, and Components Icon.png",
    title: "Laptops, PCs, and Components",
    description:
      "Enterprise-grade computing devices and hardware components from trusted brands.",
  },
  {
    icon: "/icons/sol-icon/Structured Cabling and Data center Icon.png",
    title: "Structured Cabling & Data Center",
    description:
      "Comprehensive cabling infrastructure and data center solutions for scalable business operations.",
  },
  {
    icon: "/icons/sol-icon/Advance Data Erasure Icon.png",
    title: "Advance Data Erasure Solutions",
    description:
      "Secure and compliant data destruction services to protect sensitive information.",
  },
  {
    icon: "/icons/sol-icon/Human Resources Info System Icon.png",
    title: "Human Resources Information System",
    description:
      "Digital HR platforms that automate employee management, payroll, and reporting.",
  },
  {
    icon: "/icons/sol-icon/Fire Detection & Alarm System Icon.png",
    title: "Fire Detection & Alarm Systems",
    description:
      "Advanced safety and monitoring systems designed to protect people and property.",
  },
  {
    icon: "/icons/sol-icon/Data Migration Icon.png",
    title: "Data Migration & Protection",
    description:
      "Secure migration services and backup strategies that ensure business continuity.",
  },
  {
    icon: "/icons/sol-icon/Email Security Icon.png",
    title: "Email Security",
    description:
      "Protection against phishing, malware, ransomware, and email-based cyber threats.",
  },
  {
    icon: "/icons/sol-icon/Endpoint Solutions Icon.png",
    title: "Endpoint Solutions",
    description:
      "Comprehensive endpoint management and security solutions for modern workforces.",
  },
];

export default function SolutionsSection() {
  return (
    <section
      id="solutions"
      className="relative overflow-hidden bg-gray-50 bg-cover bg-center bg-no-repeat py-14 pt-24 lg:py-20 lg:pt-32"
      style={{ backgroundImage: "url('/img/sol-section.png')" }}
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-white via-white/85 to-transparent lg:h-44" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        <div className="mb-10 text-center">
          <p className="mb-2 text-2xl font-bold uppercase tracking-[0.12em] text-[#c01130] sm:text-3xl lg:text-4xl">
            Our Solutions
          </p>
          <h2 className="mx-auto max-w-none text-base font-bold text-gray-900 sm:whitespace-nowrap sm:text-xl lg:text-2xl">
            Integrated Technology Solutions for Modern Businesses
          </h2>
        </div>

        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 md:grid-cols-4 lg:grid-cols-6">
          {solutions.map((solution) => (
            <div
              key={solution.title}
              className="group flex flex-col gap-2.5 rounded border border-gray-100 bg-white p-4 transition-all hover:border-[#c01130]/30 hover:shadow-md"
            >
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded bg-[#c01130]/10 transition-colors group-hover:bg-[#c01130]/15">
                <Image
                  src={solution.icon}
                  alt=""
                  width={24}
                  height={24}
                  className="h-6 w-6 object-contain"
                />
              </div>
              <h3 className="text-[11px] font-bold leading-snug text-gray-900 sm:text-xs">
                {solution.title}
              </h3>
              <p className="hidden flex-1 text-[10px] leading-relaxed text-gray-500 sm:block sm:text-[11px]">
                {solution.description}
              </p>
              <ScrollLink
                sectionId="contact"
                className="inline-flex items-center gap-1 text-[10px] font-bold text-[#c01130] transition-all hover:gap-2 sm:text-[11px]"
              >
                LEARN MORE <span aria-hidden>{"->"}</span>
              </ScrollLink>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
