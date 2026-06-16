"use client";

import { useEffect, useMemo, useState } from "react";
import HorizontalScrollGallery from "./_components/horizontal-scroll-gallery";
import AboutSection from "./_components/about-section";
import ProjectSection from "./_components/project-section";
import ContactSection from "./_components/contact-section";
import HeroSection from "./_components/hero-section";
import SkillsSection from "./_components/skill-section";
import AiExpertiseSection from "./_components/ai-expertise-section";
import AiPlaygroundSection from "./_components/ai-playground-section";
import ExperienceSection from "./_components/experience-section";
import SiteFooter from "./_components/site-footer";
import SiteHeader from "./_components/site-header";
import P5CommandMenuDesktop from "./_components/p5-command-menu-desktop";

const SECTION_IDS = [
  "home",
  "gallery",
  "about",
  "skills",
  "ai",
  "playground",
  "experience",
  "works",
  "contact",
] as const;

type SectionId = (typeof SECTION_IDS)[number];

export default function Home() {
  const [isDesktop, setIsDesktop] = useState(false);
  const [isDesktopMenuOpen, setIsDesktopMenuOpen] = useState(false);
  const [selectedSection, setSelectedSection] = useState<SectionId | null>(null);
  const [showCommandHint, setShowCommandHint] = useState(true);

  const isValidSection = (value: string): value is SectionId =>
    SECTION_IDS.includes(value as SectionId);

  const selectedDesktopSection = useMemo(() => {
    switch (selectedSection) {
      case "home":
        return <HeroSection />;
      case "gallery":
        return <HorizontalScrollGallery />;
      case "about":
        return <AboutSection />;
      case "skills":
        return <SkillsSection />;
      case "ai":
        return <AiExpertiseSection />;
      case "playground":
        return <AiPlaygroundSection />;
      case "experience":
        return <ExperienceSection />;
      case "works":
        return <ProjectSection />;
      case "contact":
        return <ContactSection />;
      default:
        return null;
    }
  }, [selectedSection]);

  useEffect(() => {
    const media = window.matchMedia("(min-width: 1024px)");
    const syncDesktop = () => setIsDesktop(media.matches);
    syncDesktop();
    media.addEventListener("change", syncDesktop);
    return () => media.removeEventListener("change", syncDesktop);
  }, []);

  useEffect(() => {
    if (!isDesktop) return;

    const hash = window.location.hash.replace("#", "");
    if (isValidSection(hash)) {
      setSelectedSection(hash);
      setIsDesktopMenuOpen(false);
      history.replaceState({ view: "section", section: hash }, "", `#${hash}`);
      return;
    }

    const seen = localStorage.getItem("p5-desktop-command-menu-seen");
    if (!seen) {
      setSelectedSection(null);
      setIsDesktopMenuOpen(true);
      history.replaceState({ view: "menu" }, "", window.location.pathname);
    } else {
      setSelectedSection("home");
      setIsDesktopMenuOpen(false);
      history.replaceState({ view: "section", section: "home" }, "", "#home");
    }
  }, [isDesktop]);

  useEffect(() => {
    if (!isDesktop) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key.toLowerCase() === "c" && !isDesktopMenuOpen) {
        openDesktopMenu();
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [isDesktop, isDesktopMenuOpen]);

  useEffect(() => {
    if (!isDesktopMenuOpen) return;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isDesktopMenuOpen]);

  useEffect(() => {
    if (!isDesktop) return;
    const onPopState = () => {
      const hash = window.location.hash.replace("#", "");
      if (isValidSection(hash)) {
        setSelectedSection(hash);
        setIsDesktopMenuOpen(false);
      } else {
        setSelectedSection(null);
        setIsDesktopMenuOpen(true);
      }
    };
    window.addEventListener("popstate", onPopState);
    return () => window.removeEventListener("popstate", onPopState);
  }, [isDesktop]);

  const closeDesktopMenu = () => {
    localStorage.setItem("p5-desktop-command-menu-seen", "true");
    setIsDesktopMenuOpen(false);
    if (!selectedSection) {
      setSelectedSection("home");
      history.pushState({ view: "section", section: "home" }, "", "#home");
    }
  };

  const openDesktopMenu = () => {
    setSelectedSection(null);
    setIsDesktopMenuOpen(true);
    setShowCommandHint(false);
    history.pushState({ view: "menu" }, "", window.location.pathname);
  };

  const jumpToSection = (sectionId: string) => {
    if (!isValidSection(sectionId)) return;
    localStorage.setItem("p5-desktop-command-menu-seen", "true");
    setSelectedSection(sectionId);
    setIsDesktopMenuOpen(false);
    history.pushState({ view: "section", section: sectionId }, "", `#${sectionId}`);
  };

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#0a0a0a] text-[#f4f0e6]">
      {!isDesktop ? <SiteHeader mode="home" /> : null}
      <P5CommandMenuDesktop
        isOpen={isDesktopMenuOpen}
        onClose={closeDesktopMenu}
        onSelect={jumpToSection}
      />

      <main className="overflow-x-hidden">
        {!isDesktop ? (
          <>
          <HeroSection />
          <HorizontalScrollGallery />
          <AboutSection />
          <SkillsSection />
          <AiExpertiseSection />
          <AiPlaygroundSection />
          <ExperienceSection />
          <ProjectSection />
          <ContactSection />
          </>
        ) : (
          selectedDesktopSection
        )}
      </main>
      {!isDesktop ? <SiteFooter /> : null}
      {isDesktop && selectedSection && showCommandHint ? (
        <div className="pointer-events-none fixed bottom-24 left-6 z-[121] hidden max-w-[260px] border-2 border-[#111111] bg-[#e60026] px-4 py-3 text-[#111111] shadow-[4px_4px_0_#111111] lg:block">
          <p className="font-display text-xs uppercase tracking-[0.18em]">
            Switch Section
          </p>
          <p className="mt-1 font-sans text-xs leading-relaxed">
            Click <span className="font-bold">COMMAND</span> below or press{" "}
            <span className="font-bold">C</span>.
          </p>
        </div>
      ) : null}
      <button
        type="button"
        onClick={openDesktopMenu}
        className="fixed bottom-6 left-6 z-[120] hidden items-center gap-2 border-2 border-white bg-[#111111] px-5 py-3 font-display text-sm uppercase tracking-[0.16em] text-white shadow-[4px_4px_0_#e60026] transition-all hover:-translate-y-0.5 hover:border-[#e60026] hover:text-[#e60026] lg:inline-flex"
      >
        <span className="inline-block h-2 w-2 rounded-full bg-[#e60026] animate-pulse" />
        Command
      </button>
    </div>
  );
}
