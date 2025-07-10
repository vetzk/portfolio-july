import React, { useState, useEffect } from "react";

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
        color: "from-blue-500 to-cyan-500",
        skills: [
            {
                name: "React/Next.js",
                level: 95,
                description: "Advanced component architecture",
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
            { name: "Three.js", level: 85, description: "3D web experiences" },
        ],
    },
    {
        title: "Backend Development",
        icon: <DatabaseIcon />,
        description: "Scalable server-side solutions",
        color: "from-green-500 to-emerald-500",
        skills: [
            {
                name: "Node.js",
                level: 88,
                description: "Server-side JavaScript",
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
        color: "from-purple-500 to-pink-500",
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
        color: "from-orange-500 to-red-500",
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
                    // Animate skill bars with delay
                    setTimeout(() => {
                        setAnimatedLevels(
                            skillCategories[activeCategory].skills.map(
                                (skill) => skill.level
                            )
                        );
                    }, 500);
                }
            },
            { threshold: 0.3 }
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
            className="bg-gradient-to-br from-gray-50 via-white to-gray-100 text-black py-32 relative overflow-hidden"
        >
            <div className="absolute inset-0 opacity-5">
                <div className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full blur-3xl animate-pulse" />
                <div className="absolute bottom-20 left-20 w-96 h-96 bg-gradient-to-br from-pink-500 to-orange-500 rounded-full blur-3xl animate-pulse delay-1000" />
            </div>

            <div className="max-w-7xl mx-auto px-8 relative z-10">
                <div className="text-center mb-20">
                    <div
                        className={`transition-all duration-1000 ${
                            isVisible
                                ? "opacity-100 translate-y-0"
                                : "opacity-0 translate-y-8"
                        }`}
                    >
                        <span className="text-sm font-medium text-gray-500 tracking-[0.2em] uppercase mb-4 block">
                            Expertise
                        </span>
                        <h2 className="text-6xl md:text-7xl font-bold mb-6 font-['Inter'] leading-none">
                            Skills &
                            <br />
                            <span className="text-gray-400">Technologies</span>
                        </h2>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
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
                                    className={`w-full text-left p-6 rounded-2xl transition-all duration-500 hover:scale-105 group ${
                                        activeCategory === index
                                            ? "bg-white shadow-2xl border-2 border-gray-200"
                                            : "bg-white/50 hover:bg-white/80 border border-gray-200"
                                    }`}
                                >
                                    <div className="flex items-center gap-4 mb-3">
                                        <div
                                            className={`p-3 rounded-xl bg-gradient-to-r ${
                                                category.color
                                            } text-white transition-transform duration-300 ${
                                                activeCategory === index
                                                    ? "scale-110"
                                                    : "group-hover:scale-105"
                                            }`}
                                        >
                                            {category.icon}
                                        </div>
                                        <div className="flex-1">
                                            <h3 className="text-xl font-bold font-['Inter'] text-black">
                                                {category.title}
                                            </h3>
                                        </div>
                                        <div
                                            className={`transition-all duration-300 ${
                                                activeCategory === index
                                                    ? "rotate-90 text-black"
                                                    : "text-gray-400 group-hover:translate-x-1"
                                            }`}
                                        >
                                            <ChevronRightIcon />
                                        </div>
                                    </div>
                                    <p className="text-gray-600 font-['Inter'] text-sm">
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
                        <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-200">
                            <div className="flex items-center gap-4 mb-8">
                                <div
                                    className={`p-4 rounded-xl bg-gradient-to-r ${skillCategories[activeCategory].color} text-white`}
                                >
                                    {skillCategories[activeCategory].icon}
                                </div>
                                <div>
                                    <h3 className="text-3xl font-bold font-['Inter'] text-black">
                                        {skillCategories[activeCategory].title}
                                    </h3>
                                    <p className="text-gray-600 font-['Inter']">
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
                                            <div className="flex justify-between items-center mb-3">
                                                <div>
                                                    <span className="font-semibold text-black font-['Inter']">
                                                        {skill.name}
                                                    </span>
                                                    <p className="text-sm text-gray-500">
                                                        {skill.description}
                                                    </p>
                                                </div>
                                                <span className="text-sm font-medium text-gray-600">
                                                    {skill.level}%
                                                </span>
                                            </div>
                                            <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                                                <div
                                                    className={`h-full bg-gradient-to-r ${skillCategories[activeCategory].color} rounded-full transition-all duration-1000 ease-out`}
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
                        <h3 className="text-3xl font-bold font-['Inter'] mb-4">
                            Technologies I Work With
                        </h3>
                        <p className="text-gray-600 font-['Inter']">
                            A constantly evolving toolkit of modern technologies
                        </p>
                    </div>

                    <div className="flex flex-wrap justify-center gap-4">
                        {technologies.map((tech, index) => (
                            <span
                                key={index}
                                className="px-6 py-3 bg-white text-black rounded-full border border-gray-200 hover:border-gray-400 hover:shadow-lg transition-all duration-300 hover:scale-105 font-['Inter'] text-sm font-medium cursor-default"
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
                    <div className="bg-white rounded-3xl p-12 shadow-xl border border-gray-200 max-w-3xl mx-auto">
                        <h3 className="text-3xl font-bold font-['Inter'] mb-4">
                            Ready to Build Something Amazing?
                        </h3>
                        <p className="text-gray-600 font-['Inter'] mb-8 text-lg">
                            Let&apos;s combine these skills to create
                            exceptional digital experiences that make a real
                            impact.
                        </p>
                        <button className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-2xl hover:scale-105 transition-all duration-300 group">
                            <span>Start a Project</span>
                            <div className="transition-transform duration-300 group-hover:translate-x-1">
                                <ArrowRightIcon />
                            </div>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
