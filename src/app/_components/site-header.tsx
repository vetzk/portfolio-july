"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Code2, Menu, X } from "lucide-react";
import P5MainMenu from "./p5-main-menu";

const PRIMARY_NAV = [
  { name: "Work", id: "works" },
  { name: "About", id: "about" },
  { name: "Skills", id: "skills" },
  { name: "AI", id: "ai" },
  { name: "Contact", id: "contact" },
];

const SCROLL_SECTIONS = [
  "home",
  "gallery",
  "about",
  "skills",
  "ai",
  "playground",
  "experience",
  "works",
  "contact",
];

type SiteHeaderProps = {
  mode?: "home" | "site";
};

export default function SiteHeader({ mode = "home" }: SiteHeaderProps) {
  const [activeSection, setActiveSection] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (mode !== "home") return;

    const handleScroll = () => {
      const sectionElements = SCROLL_SECTIONS.map((id) =>
        document.getElementById(id),
      );

      const currentSection = sectionElements.find((section) => {
        if (!section) return false;
        const rect = section.getBoundingClientRect();
        return rect.top <= 120 && rect.bottom >= 120;
      });

      if (currentSection) {
        setActiveSection(currentSection.id);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [mode]);

  useEffect(() => {
    if (!isMenuOpen) return;

    const onResize = () => {
      if (window.matchMedia("(min-width: 1024px)").matches) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [isMenuOpen]);

  useEffect(() => {
    const media = window.matchMedia("(max-width: 1023px)");

    const syncScrollLock = () => {
      const shouldLock = isMenuOpen && media.matches;
      document.body.style.overflow = shouldLock ? "hidden" : "";
    };

    syncScrollLock();
    media.addEventListener("change", syncScrollLock);
    return () => {
      media.removeEventListener("change", syncScrollLock);
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  const logo = (
    <>
      <span className="p5-logo-mark transition-transform duration-200 group-hover:rotate-0">
        <Code2 className="h-5 w-5" />
      </span>
      <span className="font-display text-2xl leading-none tracking-wide text-white md:text-3xl">
        Alfredo Vetsera
      </span>
    </>
  );

  return (
    <>
      <header
        className={`p5-nav fixed top-0 w-full ${isMenuOpen ? "z-[110]" : "z-50"}`}
        data-scrolled={isScrolled}
      >
        <div className="layout-shell flex items-center justify-between gap-4 py-4 md:py-5">
          {mode === "home" ? (
            <button
              type="button"
              onClick={() => scrollToSection("home")}
              className="group flex items-center gap-3 text-left"
            >
              {logo}
            </button>
          ) : (
            <Link href="/" className="group flex items-center gap-3 text-left">
              {logo}
            </Link>
          )}

          <nav className="hidden items-center gap-5 lg:flex xl:gap-7">
            {PRIMARY_NAV.map((item) =>
              mode === "home" ? (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => scrollToSection(item.id)}
                  className="p5-nav-link"
                  data-active={activeSection === item.id}
                >
                  {item.name}
                </button>
              ) : (
                <Link
                  key={item.id}
                  href={`/#${item.id}`}
                  className="p5-nav-link"
                >
                  {item.name}
                </Link>
              ),
            )}
          </nav>

          <div className="flex items-center gap-3">
            {mode === "home" ? (
              <button
                type="button"
                onClick={() => scrollToSection("contact")}
                className="p5-btn-ghost hidden sm:inline-flex"
              >
                <span className="text-xs md:text-sm">Hire me</span>
              </button>
            ) : (
              <Link
                href="/#contact"
                className="p5-btn-ghost hidden sm:inline-flex"
              >
                <span className="text-xs md:text-sm">Hire me</span>
              </Link>
            )}
            <button
              type="button"
              onClick={() => setIsMenuOpen((open) => !open)}
              className="border-2 border-white p-2 text-white transition-transform duration-150 hover:skew-x-[-4deg] lg:hidden"
              aria-label={isMenuOpen ? "Close main menu" : "Open main menu"}
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </button>
          </div>
        </div>
      </header>

      <P5MainMenu
        isOpen={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
        mode={mode}
        activeSection={activeSection}
        onNavigate={scrollToSection}
      />
    </>
  );
}
