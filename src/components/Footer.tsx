import { Clock, Globe, Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";

const solutions = [
  "Network Connectivity & Security",
  "IP Communication",
  "Home/Office Wireless Solutions",
  "Conference Solutions",
  "Laptops, PCs and Components",
  "Structured Cabling & Data Center",
  "Advance Data Erasure Solutions",
  "HR Information System",
  "Fire Detection & Alarm Systems",
  "Data Migration & Protection",
  "Email Security",
  "Endpoint Solutions",
];

const quickLinks = [
  { label: "About Us", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Industries", href: "#industries" },
  { label: "News & Insights", href: "#" },
  { label: "Contact Us", href: "#contact" },
];

export default function Footer() {
  return (
    <footer className="bg-[#111111] text-gray-400">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-10">
        <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-6 lg:gap-8">
          <div className="col-span-2 sm:col-span-3 lg:col-span-1">
            <div className="mb-2 flex items-center gap-2">
              <div className="relative flex h-10 w-12 items-end">
                <span className="text-[38px] font-black leading-none tracking-[-0.08em] text-white">
                  A
                </span>
                <span className="absolute bottom-1 right-0 h-8 w-3 rotate-45 bg-[#0f9f6e]" />
                <span className="absolute bottom-1.5 right-1 h-5 w-3 rotate-45 bg-[#111111]" />
              </div>
              <div className="flex flex-col leading-none">
                <span className="text-[22px] font-black tracking-tight text-white">
                  APEX
                </span>
                <span className="text-[8px] font-bold uppercase tracking-[0.2em] text-white/70">
                  INNOVATIONS
                </span>
              </div>
            </div>
            <p className="mt-1 text-[9px] font-semibold uppercase tracking-[0.12em] text-gray-600">
              Powerhouse of Transformative Solutions
            </p>
          </div>

          <div className="col-span-2 lg:col-span-2">
            <h4 className="mb-3 text-[10px] font-bold uppercase tracking-widest text-white">
              Solutions
            </h4>
            <div className="grid grid-cols-2 gap-x-3 gap-y-1.5">
              {solutions.map((solution) => (
                <Link
                  key={solution}
                  href="#solutions"
                  className="text-[11px] leading-snug text-gray-400 transition-colors hover:text-[#c01130]"
                >
                  {solution}
                </Link>
              ))}
            </div>
          </div>

          <div className="col-span-1">
            <h4 className="mb-3 text-[10px] font-bold uppercase tracking-widest text-white">
              Quick Links
            </h4>
            <ul className="flex flex-col gap-1.5">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-[11px] text-gray-400 transition-colors hover:text-[#c01130]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-span-1">
            <h4 className="mb-3 text-[10px] font-bold uppercase tracking-widest text-white">
              Contact Details
            </h4>
            <ul className="flex flex-col gap-2">
              <li className="flex items-start gap-1.5">
                <MapPin size={11} className="mt-0.5 shrink-0 text-[#c01130]" />
                <span className="text-[11px] leading-snug">
                  3 Imperial Street, Brgy. E. Rodriguez, Cubao, Quezon City,
                  1105
                </span>
              </li>
              <li className="flex items-center gap-1.5">
                <Phone size={11} className="shrink-0 text-[#c01130]" />
                <span className="text-[11px]">63+ 00000000000</span>
              </li>
              <li className="flex items-center gap-1.5">
                <Mail size={11} className="shrink-0 text-[#c01130]" />
                <span className="text-[11px]">info@apexinnovations.ph</span>
              </li>
              <li className="flex items-center gap-1.5">
                <Globe size={11} className="shrink-0 text-[#c01130]" />
                <span className="text-[11px]">www.apexinnovations.ph</span>
              </li>
            </ul>
          </div>

          <div className="col-span-1">
            <h4 className="mb-3 text-[10px] font-bold uppercase tracking-widest text-white">
              Office Hours
            </h4>
            <div className="flex items-start gap-1.5">
              <Clock size={11} className="mt-0.5 shrink-0 text-[#c01130]" />
              <div>
                <p className="text-[11px] font-semibold text-white">
                  Monday - Friday
                </p>
                <p className="text-[11px]">9:30 AM - 6:00 PM</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/5 py-3">
        <p className="text-center text-[11px] text-gray-600">
          Copyright {new Date().getFullYear()} Apex Innovations Inc. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
}
