import {
  Shield,
  Phone,
  Wifi,
  Video,
  Monitor,
  Server,
  Database,
  Users,
  Flame,
  HardDrive,
  Mail,
  Cpu,
} from "lucide-react";

const solutions = [
  {
    icon: Shield,
    title: "Network Connectivity & Security",
    description:
      "Reliable and secure network infrastructure solutions to keep your business connected and protected.",
  },
  {
    icon: Phone,
    title: "IP Communication (Voice, Data, Video)",
    description:
      "Voice, data, and video communication systems that improve collaboration and operational efficiency.",
  },
  {
    icon: Wifi,
    title: "Home/Office Wireless Solutions",
    description:
      "High-performance wireless connectivity solutions for homes, offices, and hybrid workplaces.",
  },
  {
    icon: Video,
    title: "Conference Solutions",
    description:
      "Modern meeting room and video conferencing technologies for seamless collaboration.",
  },
  {
    icon: Monitor,
    title: "Laptops, PCs, and Components",
    description:
      "Enterprise-grade computing devices and hardware components from trusted brands.",
  },
  {
    icon: Server,
    title: "Structured Cabling & Data Center",
    description:
      "Comprehensive cabling infrastructure and data center solutions for scalable business operations.",
  },
  {
    icon: Database,
    title: "Advance Data Erasure Solutions",
    description:
      "Secure and compliant data destruction services to protect sensitive information.",
  },
  {
    icon: Users,
    title: "Human Resources Information System",
    description:
      "Digital HR platforms that automate employee management, payroll, and reporting.",
  },
  {
    icon: Flame,
    title: "Fire Detection & Alarm Systems",
    description:
      "Advanced safety and monitoring systems designed to protect people and property.",
  },
  {
    icon: HardDrive,
    title: "Data Migration & Protection",
    description:
      "Secure migration services and backup strategies that ensure business continuity.",
  },
  {
    icon: Mail,
    title: "Email Security",
    description:
      "Protection against phishing, malware, ransomware, and email-based cyber threats.",
  },
  {
    icon: Cpu,
    title: "Endpoint Solutions",
    description:
      "Comprehensive endpoint management and security solutions for modern workforces.",
  },
];

export default function SolutionsSection() {
  return (
    <section id="solutions" className="py-14 lg:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        {/* Header */}
        <div className="text-center mb-10">
          <p className="text-[#c01130] text-[10px] sm:text-xs font-bold tracking-[0.2em] uppercase mb-2">
            Our Solutions
          </p>
          <h2 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold text-gray-900 max-w-2xl mx-auto">
            Integrated Technology Solutions for Modern Businesses
          </h2>
        </div>

        {/* Grid — 2 cols mobile, 3 cols md, 6 cols desktop */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-4">
          {solutions.map((sol) => {
            const Icon = sol.icon;
            return (
              <div
                key={sol.title}
                className="bg-white rounded border border-gray-100 p-4 flex flex-col gap-2.5 hover:shadow-md hover:border-[#c01130]/30 transition-all group"
              >
                <div className="w-8 h-8 rounded bg-[#c01130]/10 flex items-center justify-center group-hover:bg-[#c01130] transition-colors shrink-0">
                  <Icon
                    size={16}
                    className="text-[#c01130] group-hover:text-white transition-colors"
                  />
                </div>
                <h3 className="text-[11px] sm:text-xs font-bold text-gray-900 leading-snug">
                  {sol.title}
                </h3>
                <p className="text-[10px] sm:text-[11px] text-gray-500 leading-relaxed flex-1 hidden sm:block">
                  {sol.description}
                </p>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-1 text-[10px] sm:text-[11px] font-bold text-[#c01130] hover:gap-2 transition-all"
                >
                  LEARN MORE <span aria-hidden>→</span>
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
