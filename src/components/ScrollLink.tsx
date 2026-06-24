"use client";

import { usePathname, useRouter } from "next/navigation";
import { useEffect } from "react";
import type { MouseEvent, ReactNode } from "react";

type ScrollLinkProps = {
  children: ReactNode;
  className?: string;
  sectionId: string;
  onClick?: () => void;
};

const HEADER_OFFSET = 72;
const sectionPaths: Record<string, string> = {
  home: "/",
  about: "/about",
  solutions: "/solutions",
  industries: "/industries",
  contact: "/contact",
};

const pathSections: Record<string, string> = {
  "/": "home",
  "/about": "about",
  "/solutions": "solutions",
  "/industries": "industries",
  "/contact": "contact",
};

function scrollToSection(sectionId: string, updatePath = true) {
  const targetPath = sectionPaths[sectionId] ?? "/";

  if (sectionId === "home") {
    window.scrollTo({ top: 0, behavior: "smooth" });
    if (updatePath) window.history.pushState(null, "", targetPath);
    return;
  }

  const section = document.getElementById(sectionId);
  if (!section) return;

  const top = section.getBoundingClientRect().top + window.scrollY - HEADER_OFFSET;
  window.scrollTo({ top, behavior: "smooth" });
  if (updatePath) window.history.pushState(null, "", targetPath);
}

export default function ScrollLink({
  children,
  className,
  sectionId,
  onClick,
}: ScrollLinkProps) {
  const pathname = usePathname();
  const router = useRouter();

  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    onClick?.();

    if (!document.getElementById(sectionId)) {
      sessionStorage.setItem("pending-section", sectionId);
      router.push(sectionPaths[sectionId] ?? "/");
      return;
    }

    scrollToSection(sectionId);
  };

  return (
    <a href={sectionPaths[sectionId] ?? "/"} className={className} onClick={handleClick}>
      {children}
    </a>
  );
}

export function PendingSectionScroller() {
  const pathname = usePathname();

  useEffect(() => {
    window.requestAnimationFrame(() => {
      const sectionId =
        sessionStorage.getItem("pending-section") ?? pathSections[pathname];
      if (!sectionId) return;

      sessionStorage.removeItem("pending-section");
      scrollToSection(sectionId, false);
    });
  }, [pathname]);

  return null;
}
