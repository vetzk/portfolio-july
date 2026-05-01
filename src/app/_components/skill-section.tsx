import React, { useState, useEffect } from "react";
import Image from "next/image";

const Code2Icon = () => (
    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
        <path d="M8.5 3L4 7.5 8.5 12 10 10.5 7 7.5 10 4.5 8.5 3zm7 0L14 4.5 17 7.5 14 10.5 15.5 12 20 7.5 15.5 3z" />
        <path d="M2 12h2v2H2v-2zm4 0h2v2H6v-2zm4 0h2v2h-2v-2zm4 0h2v2h-2v-2zm4 0h2v2h-2v-2z" />
    </svg>
);

const DatabaseIcon = () => (
    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
        <ellipse cx="12" cy="5" rx="9" ry="3" />
        <path d="M3 5v14c0 1.66 4.03 3 9 3s9-1.34 9-3V5" />
        <path d="M3 12c0 1.66 4.03 3 9 3s9-1.34 9-3" />
    </svg>
);

const PaletteIcon = () => (
    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2C6.49 2 2 6.49 2 12s4.49 10 10 10c1.38 0 2.5-1.12 2.5-2.5 0-.61-.23-1.21-.64-1.67-.08-.09-.13-.21-.13-.33 0-.28.22-.5.5-.5H16c3.31 0 6-2.69 6-6 0-5.51-4.49-10-10-10zM7.5 9C8.33 9 9 8.33 9 7.5S8.33 6 7.5 6 6 6.67 6 7.5 6.67 9 7.5 9zm3-4C11.33 5 12 4.33 12 3.5S11.33 2 10.5 2 9 2.67 9 3.5 9.67 5 10.5 5zm3 0c.83 0 1.5-.67 1.5-1.5S14.33 2 13.5 2 12 2.67 12 3.5 12.67 5 13.5 5zm3 4c.83 0 1.5-.67 1.5-1.5S17.33 6 16.5 6 15 6.67 15 7.5 15.67 9 16.5 9z" />
    </svg>
);

const GlobeIcon = () => (
    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="10" />
        <line x1="2" y1="12" x2="22" y2="12" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    </svg>
);

const ChevronRightIcon = () => (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M9 18l6-6-6-6" />
    </svg>
);

const ArrowRightIcon = () => (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <line x1="5" y1="12" x2="19" y2="12" />
        <polyline points="12,5 19,12 12,19" />
    </svg>
);

const skillCategories = [
    {
        title: "Frontend Development",
        icon: <Code2Icon />,
        description: "Building modern, responsive user interfaces",
        skills: [
            {
                name: "React/Next.js",
                level: 95,
                description: "Advanced component architecture",
            },
            {
                name: "Tauri",
                level: 90,
                description:
                    "Building secure, lightweight desktop applications using a Rust-powered backend",
            },
            {
                name: "TypeScript",
                level: 90,
                description: "Type-safe development",
            },
            {
                name: "Tailwind CSS",
                level: 92,
                description: "Utility-first styling",
            },
        ],
    },
    {
        title: "Backend Development",
        icon: <DatabaseIcon />,
        description: "Scalable server-side solutions",
        skills: [
            {
                name: "Node.js",
                level: 88,
                description: "Server-side JavaScript",
            },
            {
                name: "Laravel",
                level: 88,
                description: "Server-side PHP",
            },
            {
                name: "Python",
                level: 85,
                description: "Data processing & APIs",
            },
            {
                name: "PostgreSQL",
                level: 82,
                description: "Relational databases",
            },
            { name: "MongoDB", level: 80, description: "NoSQL solutions" },
        ],
    },
    {
        title: "Design & UX",
        icon: <PaletteIcon />,
        description: "User-centered design thinking",
        skills: [
            {
                name: "Figma",
                level: 90,
                description: "Interface design & prototyping",
            },
            {
                name: "Adobe Creative Suite",
                level: 85,
                description: "Visual design tools",
            },
            {
                name: "Framer",
                level: 88,
                description: "Interactive prototypes",
            },
            {
                name: "Blender",
                level: 75,
                description: "3D modeling & animation",
            },
        ],
    },
    {
        title: "DevOps & Cloud",
        icon: <GlobeIcon />,
        description: "Deployment and infrastructure",
        skills: [
            { name: "AWS", level: 80, description: "Cloud infrastructure" },
            { name: "Docker", level: 82, description: "Containerization" },
            { name: "Vercel", level: 90, description: "Frontend deployment" },
            { name: "Git/GitHub", level: 95, description: "Version control" },
        ],
    },
];

const technologies = [
    "React",
    "Next.js",
    "TypeScript",
    "Node.js",
    "Python",
    "PostgreSQL",
    "MongoDB",
    "AWS",
    "Docker",
    "Figma",
    "Three.js",
    "Tailwind CSS",
    "GraphQL",
    "REST APIs",
    "WebGL",
    "Framer Motion",
    "Prisma",
    "tRPC",
];

export default function SkillsSection() {
    const [activeCategory, setActiveCategory] = useState(0);
    const [isVisible, setIsVisible] = useState(false);
    const [animatedLevels, setAnimatedLevels] = useState<number[]>([]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    setTimeout(() => {
                        setAnimatedLevels(
                            skillCategories[activeCategory].skills.map(
                                (skill) => skill.level
                            )
                        );
                    }, 500);
                }
            },
            {
                threshold: [0, 0.1, 0.2],
                rootMargin: "0px 0px -20% 0px",
            }
        );

        const section = document.getElementById("skills");
        if (section) observer.observe(section);

        return () => observer.disconnect();
    }, [activeCategory]);

    useEffect(() => {
        if (isVisible) {
            setAnimatedLevels(
                skillCategories[activeCategory].skills.map(
                    (skill) => skill.level
                )
            );
        }
    }, [activeCategory, isVisible]);

    return (
        <section
            id="skills"
            className="scroll-mt-28 relative overflow-hidden bg-[#050505] py-24 text-[#e5e2e1] md:py-32 lg:py-[160px]"
        >
            <Image
                src="/skills-neural-grid.png"
                alt=""
                fill
                unoptimized
                className="pointer-events-none absolute inset-0 object-cover opacity-[0.22]"
            />
            <div className="pointer-events-none absolute inset-0 bg-[#050505]/85" />
            <div className="pointer-events-none absolute inset-0 opacity-30">
                <div className="absolute right-20 top-20 h-64 w-64 bg-white/[0.04] blur-[80px]" />
                <div className="absolute bottom-20 left-20 h-64 w-64 bg-white/[0.03] blur-[80px]" />
            </div>

            <div className="layout-shell relative z-10 max-w-[1440px]">
                <div className="mb-20 md:mb-28">
                    <div
                        className={`transition-all duration-1000 ${
                            isVisible
                                ? "translate-y-0 opacity-100"
                                : "translate-y-8 opacity-0"
                        }`}
                    >
                        <span className="label-caps mb-4 block text-center text-[#8e9192]">
                            Expertise
                        </span>
                        <h2 className="font-display mb-6 text-4xl font-semibold leading-none tracking-[-0.01em] text-white md:text-6xl lg:text-7xl">
                            Skills &
                            <br />
                            <span className="text-[#c4c7c8]">technologies</span>
                        </h2>
                        <p className="mx-auto max-w-2xl text-xl leading-[1.6] tracking-[0.02em] text-[#c4c7c8]">
                            A comprehensive toolkit for bringing digital visions
                            to life, from concept to deployment.
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    {/* Category Navigation */}
                    <div
                        className={`transition-all duration-1000 delay-200 ${
                            isVisible
                                ? "opacity-100 translate-x-0"
                                : "opacity-0 -translate-x-8"
                        }`}
                    >
                        <div className="space-y-4">
                            {skillCategories.map((category, index) => (
                                <button
                                    key={index}
                                    onClick={() => setActiveCategory(index)}
                                    className={`group w-full border p-6 text-left transition-all duration-300 ${
                                        activeCategory === index
                                            ? "border-white bg-[#201f1f]"
                                            : "border-[#444748] bg-[#201f1f] hover:border-[#8e9192]"
                                    }`}
                                >
                                    <div className="mb-3 flex items-center gap-4">
                                        <div
                                            className={`border border-[#444748] bg-[#2a2a2a] p-3 text-white transition-transform duration-300 ${
                                                activeCategory === index
                                                    ? "scale-[1.02]"
                                                    : "group-hover:scale-[1.02]"
                                            }`}
                                        >
                                            {category.icon}
                                        </div>
                                        <div className="flex-1">
                                            <h3 className="font-display text-xl font-semibold text-white">
                                                {category.title}
                                            </h3>
                                        </div>
                                        <div
                                            className={`transition-all duration-300 ${
                                                activeCategory === index
                                                    ? "rotate-90 text-white"
                                                    : "text-[#8e9192] group-hover:translate-x-1"
                                            }`}
                                        >
                                            <ChevronRightIcon />
                                        </div>
                                    </div>
                                    <p className="text-sm leading-[1.6] tracking-[0.01em] text-[#c4c7c8]">
                                        {category.description}
                                    </p>
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Skills Detail */}
                    <div
                        className={`lg:col-span-2 transition-all duration-1000 delay-400 ${
                            isVisible
                                ? "opacity-100 translate-x-0"
                                : "opacity-0 translate-x-8"
                        }`}
                    >
                        <div className="glass-panel p-8">
                            <div className="mb-8 flex items-center gap-4">
                                <div className="border border-[#444748] bg-[#2a2a2a] p-4 text-white">
                                    {skillCategories[activeCategory].icon}
                                </div>
                                <div>
                                    <h3 className="font-display text-3xl font-semibold text-white">
                                        {skillCategories[activeCategory].title}
                                    </h3>
                                    <p className="text-[#c4c7c8]">
                                        {
                                            skillCategories[activeCategory]
                                                .description
                                        }
                                    </p>
                                </div>
                            </div>

                            <div className="space-y-6">
                                {skillCategories[activeCategory].skills.map(
                                    (skill, index) => (
                                        <div
                                            key={index}
                                            className="group"
                                            style={{
                                                animationDelay: `${
                                                    index * 100
                                                }ms`,
                                            }}
                                        >
                                            <div className="mb-3 flex items-center justify-between">
                                                <div>
                                                    <span className="font-semibold text-white">
                                                        {skill.name}
                                                    </span>
                                                    <p className="text-sm text-[#8e9192]">
                                                        {skill.description}
                                                    </p>
                                                </div>
                                                <span className="label-caps text-[#c4c7c8]">
                                                    {skill.level}%
                                                </span>
                                            </div>
                                            <div className="h-1 w-full overflow-hidden bg-[#353534]">
                                                <div
                                                    className="h-full bg-white transition-all duration-1000 ease-out"
                                                    style={{
                                                        width: `${
                                                            animatedLevels[
                                                                index
                                                            ] || 0
                                                        }%`,
                                                    }}
                                                />
                                            </div>
                                        </div>
                                    )
                                )}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Technologies Cloud */}
                <div
                    className={`mt-20 transition-all duration-1000 delay-600 ${
                        isVisible
                            ? "opacity-100 translate-y-0"
                            : "opacity-0 translate-y-8"
                    }`}
                >
                    <div className="text-center mb-12">
                        <h3 className="font-display mb-4 text-3xl font-semibold text-white">
                            Technologies I work with
                        </h3>
                        <p className="text-[#c4c7c8]">
                            A constantly evolving toolkit of modern technologies
                        </p>
                    </div>

                    <div className="flex flex-wrap justify-center gap-4">
                        {technologies.map((tech, index) => (
                            <span
                                key={index}
                                className="label-caps cursor-default border border-[#8e9192] px-4 py-2 text-[10px] text-[#c4c7c8] transition-colors hover:border-white hover:text-white"
                                style={{
                                    animationDelay: `${index * 50}ms`,
                                }}
                            >
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>

                {/* CTA */}
                <div
                    className={`text-center mt-20 transition-all duration-1000 delay-800 ${
                        isVisible
                            ? "opacity-100 translate-y-0"
                            : "opacity-0 translate-y-8"
                    }`}
                >
                    <div className="glass-panel mx-auto max-w-3xl p-12 text-center">
                        <h3 className="font-display mb-4 text-3xl font-semibold text-white">
                            Ready to build something amazing?
                        </h3>
                        <p className="mb-8 text-lg leading-[1.6] text-[#c4c7c8]">
                            Let&apos;s combine these skills to create
                            exceptional digital experiences that make a real
                            impact.
                        </p>
                        <a
                            href="#contact"
                            className="btn-stitch-primary group inline-flex gap-3"
                        >
                            <span>Start a project</span>
                            <span className="transition-transform group-hover:translate-x-1">
                                <ArrowRightIcon />
                            </span>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
