"use client";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import AboutSection from "./_components/about-section";
import ProjectSection from "./_components/project-section";
import ContactSection from "./_components/contact-section";
import HeroSection from "./_components/hero-section";
import SkillsSection from "./_components/skill-section";
import ExperienceSection from "./_components/experience-section";
import SiteFooter from "./_components/site-footer";

export default function Home() {
    const [activeSection, setActiveSection] = useState("home");
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({
                behavior: "smooth",
                block: "start",
            });
        }
        setIsMenuOpen(false);
    };

    useEffect(() => {
        const handleScroll = () => {
            const sections = [
                "home",
                "about",
                "skills",
                "experience",
                "works",
                "contact",
            ];
            const sectionElements = sections.map((id) =>
                document.getElementById(id)
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

        window.addEventListener("scroll", handleScroll);
        handleScroll();
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navItems = [
        { name: "Home", id: "home" },
        { name: "Work", id: "works" },
        { name: "About", id: "about" },
        { name: "Skills", id: "skills" },
        { name: "Experience", id: "experience" },
        { name: "Contact", id: "contact" },
    ];

    return (
        <div className="min-h-screen bg-[#050505] text-[#e5e2e1]">
            <header className="fixed top-0 z-50 w-full border-b border-neutral-900 bg-neutral-950/80 text-white backdrop-blur-xl">
                <div className="layout-shell flex items-center justify-between py-6 md:py-8">
                    <button
                        type="button"
                        onClick={() => scrollToSection("home")}
                        className="font-display text-xl font-bold tracking-tighter text-white transition-opacity hover:opacity-80"
                    >
                        Vetsera
                    </button>
                    <nav className="hidden items-center gap-10 md:flex lg:gap-12">
                        {navItems.map((item) => {
                            const active = activeSection === item.id;
                            return (
                                <button
                                    key={item.id}
                                    type="button"
                                    onClick={() => scrollToSection(item.id)}
                                    className={`font-display text-[11px] font-medium uppercase tracking-[0.2em] transition-colors duration-500 ${
                                        active
                                            ? "border-b border-white pb-1 text-white"
                                            : "text-neutral-500 hover:text-white"
                                    }`}
                                >
                                    {item.name}
                                </button>
                            );
                        })}
                    </nav>
                    <button
                        type="button"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="p-2 text-white md:hidden"
                        aria-label="Menu"
                    >
                        {isMenuOpen ? (
                            <X className="h-6 w-6" />
                        ) : (
                            <Menu className="h-6 w-6" />
                        )}
                    </button>
                </div>
                {isMenuOpen && (
                    <div className="border-t border-neutral-900 bg-neutral-950/95 backdrop-blur-xl md:hidden">
                        <div className="flex flex-col px-8 pb-6">
                            {navItems.map((item) => {
                                const active = activeSection === item.id;
                                return (
                                    <button
                                        key={item.id}
                                        type="button"
                                        onClick={() => scrollToSection(item.id)}
                                        className={`font-display border-b border-neutral-900 py-4 text-left text-[11px] font-medium uppercase tracking-[0.2em] ${
                                            active
                                                ? "text-white"
                                                : "text-neutral-500"
                                        }`}
                                    >
                                        {item.name}
                                    </button>
                                );
                            })}
                        </div>
                    </div>
                )}
            </header>
            <main>
                <HeroSection />
                <AboutSection />
                <SkillsSection />
                <ExperienceSection />
                <ProjectSection />
                <ContactSection />
            </main>
            <SiteFooter />
        </div>
    );
}
