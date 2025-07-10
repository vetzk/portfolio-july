"use client";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import AboutSection from "./_components/about-section";
import ProjectSection from "./_components/project-section";
import ContactSection from "./_components/contact-section";
import HeroSection from "./_components/hero-section";
import SkillsSection from "./_components/skill-section";
import ExperienceSection from "./_components/experience-section";

export default function Home() {
    const [scrollY, setScrollY] = useState(0);
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
            setScrollY(window.scrollY);

            // Update active section based on scroll position
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
                return rect.top <= 100 && rect.bottom >= 100;
            });

            if (currentSection) {
                setActiveSection(currentSection.id);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navItems = [
        { name: "Home", id: "home" },
        { name: "About", id: "about" },
        { name: "Skills", id: "skills" },
        { name: "Experience", id: "experience" },
        { name: "Works", id: "works" },
        { name: "Contact", id: "contact" },
    ];

    return (
        <div className="min-h-screen">
            <nav
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
                    scrollY > 50
                        ? "bg-white/95 backdrop-blur-md shadow-lg"
                        : "bg-transparent"
                }`}
            >
                <div className="max-w-7xl mx-auto px-8 py-4">
                    <div className="flex items-center justify-between">
                        {/* Logo/Name */}
                        <button
                            onClick={() => scrollToSection("home")}
                            className={`text-2xl font-bold transition-colors duration-300 ${
                                scrollY > 50 ? "text-black" : "text-white"
                            } hover:opacity-70`}
                        >
                            Alfredo Vetsera
                        </button>

                        {/* Desktop Navigation */}
                        <div className="hidden md:flex items-center gap-8">
                            {navItems.map((item) => (
                                <button
                                    key={item.id}
                                    onClick={() => scrollToSection(item.id)}
                                    className={`relative px-4 py-2 font-medium transition-all duration-300 ${
                                        scrollY > 50
                                            ? "text-black"
                                            : "text-white"
                                    } hover:opacity-70`}
                                >
                                    {item.name}
                                    {activeSection === item.id && (
                                        <div
                                            className={`absolute bottom-0 left-0 right-0 h-0.5 ${
                                                scrollY > 50
                                                    ? "bg-black"
                                                    : "bg-white"
                                            } rounded-full transition-colors duration-300`}
                                        />
                                    )}
                                </button>
                            ))}
                        </div>

                        {/* Mobile Menu Button */}
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className={`md:hidden p-2 transition-colors duration-300 ${
                                scrollY > 50 ? "text-black" : "text-white"
                            }`}
                        >
                            {isMenuOpen ? (
                                <X className="w-6 h-6" />
                            ) : (
                                <Menu className="w-6 h-6" />
                            )}
                        </button>
                    </div>

                    {/* Mobile Menu */}
                    {isMenuOpen && (
                        <div className="md:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-md shadow-lg border-t border-gray-200">
                            <div className="flex flex-col py-4">
                                {navItems.map((item) => (
                                    <button
                                        key={item.id}
                                        onClick={() => scrollToSection(item.id)}
                                        className={`px-8 py-3 text-left font-medium text-black hover:bg-gray-50 transition-colors duration-200 ${
                                            activeSection === item.id
                                                ? "bg-gray-100"
                                                : ""
                                        }`}
                                    >
                                        {item.name}
                                    </button>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </nav>

            {/* Hero Section with Gradient */}
            <HeroSection scrollY={scrollY} />
            {/* About Section - Black Background */}
            <AboutSection />
            <SkillsSection />
            <ExperienceSection />
            {/* Projects Section - White Background */}
            <ProjectSection />

            {/* Contact Section - Black Background */}
            <ContactSection />
        </div>
    );
}
