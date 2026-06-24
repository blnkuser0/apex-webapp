"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import ScrollLink from "./ScrollLink";

const navLinks = [
  { label: "Home", sectionId: "home" },
  { label: "About", sectionId: "about" },
  { label: "Solutions", sectionId: "solutions" },
  { label: "Industries", sectionId: "industries" },
  { label: "Contact", sectionId: "contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-shadow duration-300 bg-white ${
        scrolled ? "shadow-md" : ""
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 flex items-center justify-between h-16">
        {/* Logo */}
        <Link href="/" className="flex items-center select-none">
          <Image
            src="/logo/ap_logo.png"
            alt="Apex Innovations logo"
            width={176}
            height={46}
            className="h-10 w-auto"
            priority
          />
        </Link>

        {/* Desktop navigation */}
        <ul className="hidden lg:flex items-center gap-7">
          {navLinks.map((link) => (
            <li key={link.label}>
              <ScrollLink
                sectionId={link.sectionId}
                className="text-[13px] font-semibold text-gray-700 transition-colors hover:text-[#c01130]"
              >
                {link.label}
              </ScrollLink>
            </li>
          ))}
        </ul>

        {/* CTA button */}
        <ScrollLink
          sectionId="contact"
          className="hidden items-center rounded bg-[#c01130] px-5 py-2.5 text-xs font-bold tracking-wide text-white transition-colors hover:bg-[#8c1b2f] lg:inline-flex whitespace-nowrap"
        >
          REQUEST A CONSULTATION
        </ScrollLink>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen((prev) => !prev)}
          className="lg:hidden p-2 text-gray-700"
          aria-label="Toggle navigation menu"
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 px-6 py-5 shadow-lg">
          <ul className="flex flex-col gap-5">
            {navLinks.map((link) => (
              <li key={link.label}>
                <ScrollLink
                  sectionId={link.sectionId}
                  className="block text-sm font-semibold text-gray-700 hover:text-[#c01130]"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </ScrollLink>
              </li>
            ))}
            <li>
              <ScrollLink
                sectionId="contact"
                className="inline-flex items-center rounded bg-[#c01130] px-5 py-2.5 text-xs font-bold tracking-wide text-white transition-colors hover:bg-[#8c1b2f]"
                onClick={() => setMenuOpen(false)}
              >
                REQUEST A CONSULTATION
              </ScrollLink>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
