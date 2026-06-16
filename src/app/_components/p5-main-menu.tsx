"use client";

import Link from "next/link";
import { useEffect } from "react";
import { X } from "lucide-react";
import P5MarqueeHazard from "./p5-marquee-hazard";

export const MENU_NAV = [
  { name: "Home", id: "home", index: "00" },
  { name: "Gallery", id: "gallery", index: "01" },
  { name: "About", id: "about", index: "02" },
  { name: "Skills", id: "skills", index: "03" },
  { name: "AI", id: "ai", index: "04" },
  { name: "Lab", id: "playground", index: "05" },
  { name: "Experience", id: "experience", index: "06" },
  { name: "Work", id: "works", index: "07" },
  { name: "Contact", id: "contact", index: "08" },
] as const;

const MARQUEE_ITEMS = ["MAIN MENU", "SELECT", "PORTFOLIO", "VETSERA"];

type P5MainMenuProps = {
  isOpen: boolean;
  onClose: () => void;
  mode: "home" | "site";
  activeSection: string;
  onNavigate: (sectionId: string) => void;
};

export default function P5MainMenu({
  isOpen,
  onClose,
  mode,
  activeSection,
  onNavigate,
}: P5MainMenuProps) {
  useEffect(() => {
    if (!isOpen) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const itemClass = "p5-main-menu-item group";

  return (
    <div
      className="p5-main-menu lg:hidden"
      role="dialog"
      aria-modal="true"
      aria-label="Main menu"
    >
      <div className="pointer-events-none absolute inset-0 p5-halftone opacity-30" />

      <div className="p5-main-menu-topbar relative z-20 shrink-0">
        <span className="font-display text-sm uppercase tracking-[0.18em] text-[#e60026]">
          Main menu
        </span>
        <button
          type="button"
          onClick={onClose}
          className="p5-main-menu-close"
          aria-label="Close menu"
        >
          <X className="h-6 w-6" />
        </button>
      </div>

      <P5MarqueeHazard
        items={MARQUEE_ITEMS}
        prefix="◆"
        className="relative z-10 shrink-0"
      />

      <div className="p5-main-menu-scroll relative z-10">
        <div className="layout-shell py-6 md:py-8">
          <div className="mb-8 md:mb-10">
            <p className="label-caps mb-2 text-[#e60026]">Pause</p>
            <h2 className="font-display text-4xl leading-[0.9] text-white sm:text-5xl md:text-6xl">
              MAIN
              <br />
              <span className="p5-text-outline">MENU.</span>
            </h2>
          </div>

          <nav className="flex flex-col gap-1 pb-6 md:gap-2">
            {MENU_NAV.map((item, index) => {
              const isActive = mode === "home" && activeSection === item.id;
              const content = (
                <>
                  <span className="p5-main-menu-index">{item.index}</span>
                  <span className="p5-main-menu-label">{item.name}</span>
                  {isActive ? (
                    <span className="p5-main-menu-active-tag">Current</span>
                  ) : null}
                </>
              );

              const style = {
                transitionDelay: `${120 + index * 55}ms`,
              };

              if (mode === "home") {
                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => onNavigate(item.id)}
                    className={itemClass}
                    data-active={isActive}
                    style={style}
                  >
                    {content}
                  </button>
                );
              }

              return (
                <Link
                  key={item.id}
                  href={`/#${item.id}`}
                  onClick={onClose}
                  className={itemClass}
                  data-active={isActive}
                  style={style}
                >
                  {content}
                </Link>
              );
            })}
          </nav>
        </div>
      </div>

      <P5MarqueeHazard
        items={MARQUEE_ITEMS}
        prefix="◆"
        className="relative z-10 shrink-0"
      />
    </div>
  );
}
