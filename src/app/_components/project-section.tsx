import { ExternalLink, Github, Play, ArrowUpRight } from "lucide-react";
import React, { useState, useEffect } from "react";
import Image from "next/image";

const projects = [
    {
        title: "NIKO Electronic Website",
        description:
            "Modern product showcase website for NIKO Electronic, featuring interactive displays of electronic products with detailed specifications, high-quality imagery, and seamless user experience to drive sales and brand engagement.",
        tech: ["Laravel", "Next.js", "Framer Motion"],
        image: "/NIKO-portfolio-cover.PNG",
        link: null,
        size: "large",
        featured: true,
        status: "Development",
        year: "2025",
    },
    {
        title: "Sinshe Shaolin",
        description:
            "Comprehensive therapy booking platform featuring intelligent queue management system, real-time appointment scheduling, automated SMS notifications, and live session updates for seamless patient experience.",
        tech: [
            "Laravel",
            "Next.js",
            "Twilio",
            "Text To Speech",
            "Pusher.js",
            "Laravel Echo",
            "Zod",
        ],
        image: "/sinshe-cover.PNG",
        size: "medium",
        link: "https://www.sinsheshaolin.com",
        featured: false,
        status: "Live",
        year: "2025",
    },
    {
        title: "SAKN",
        description:
            "Professional company profile website showcasing SAKN's corporate identity, services, and achievements with elegant design and smooth animations to establish strong digital presence and credibility.",
        tech: ["Next.js", "Framer Motion"],
        image: "/sakn-cover.PNG",
        size: "small",
        link: "https://company-profile-agency.vercel.app/",
        featured: false,
        status: "Live",
        year: "2025",
    },
    {
        title: "Niko Electronic CMS",
        description:
            "Custom content management system built specifically for NIKO Electronic, featuring drag-and-drop interface, advanced content editing capabilities, and streamlined workflow for efficient product catalog management.",
        tech: ["Next.js", "Tiptap", "dnd-kit", "Laravel", "Zod"],
        image: "/niko-cms-cover.PNG",
        size: "medium",
        link: null,
        featured: true,
        status: "Live",
        year: "2024",
    },
    {
        title: "Niko Electronic Marketing Communication",
        description:
            "Comprehensive marketing communication platform for NIKO Electronic, featuring campaign management, analytics dashboard, customer engagement tools, and performance tracking to optimize marketing strategies.",
        tech: ["Next.js", "Chart.js", "Laravel", "Zod"],
        image: "/nei-sales-cover.PNG",
        size: "small",
        link: null,
        featured: false,
        status: "Live",
        year: "2025",
    },
    {
        title: "Esa Creative Website",
        description:
            "Dynamic digital agency website showcasing Esa Creative's expertise, team profiles, portfolio highlights, and service offerings with modern design and interactive elements to attract potential clients.",
        tech: ["Next.js", "Tiptap", "Framer Motion", "Nodemailer"],
        image: "/esa-creative-cover.PNG",
        size: "large",
        link: "https://www.esacreatives.com",
        featured: true,
        status: "Live",
        year: "2025",
    },
];
export default function ProjectSection() {
    const [hoveredProject, setHoveredProject] = useState<number | null>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.2 }
        );

        const section = document.getElementById("works");
        if (section) observer.observe(section);

        return () => observer.disconnect();
    }, []);

    const getCardClasses = (size: string) => {
        const baseClasses =
            "group relative overflow-hidden transition-all duration-700 hover:z-10";

        switch (size) {
            case "large":
                return `${baseClasses} col-span-2 row-span-2 min-h-[500px]`;
            case "medium":
                return `${baseClasses} col-span-1 row-span-1 min-h-[350px]`;
            case "small":
                return `${baseClasses} col-span-1 row-span-1 min-h-[280px]`;
            default:
                return `${baseClasses} col-span-1 row-span-1 min-h-[350px]`;
        }
    };

    const getImageHeight = (size: string) => {
        switch (size) {
            case "large":
                return "h-[280px]";
            case "medium":
                return "h-[180px]";
            case "small":
                return "h-[140px]";
            default:
                return "h-[200px]";
        }
    };

    return (
        <section
            id="works"
            className="bg-white text-black py-32 relative overflow-hidden"
        >
            <div className="absolute inset-0 opacity-[0.02]">
                <div className="absolute top-20 left-20 w-96 h-96 bg-black rounded-full blur-3xl" />
                <div className="absolute bottom-20 right-20 w-96 h-96 bg-gray-900 rounded-full blur-3xl" />
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
                            Portfolio
                        </span>
                        <h2 className="text-6xl md:text-7xl font-bold mb-6 font-['Inter'] leading-none">
                            Selected
                            <br />
                            <span className="text-gray-400">Works</span>
                        </h2>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
                            A collection of projects that showcase the
                            intersection of creativity, technology, and
                            innovation.
                        </p>
                    </div>
                </div>

                {/* Asymmetric Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 auto-rows-max">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className={`${getCardClasses(project.size)} ${
                                isVisible
                                    ? "opacity-100 translate-y-0"
                                    : "opacity-0 translate-y-12"
                            }`}
                            style={{
                                transitionDelay: `${index * 150}ms`,
                                transform:
                                    hoveredProject === index
                                        ? "scale(1.02) rotate(0.5deg)"
                                        : "scale(1) rotate(0deg)",
                            }}
                            onMouseEnter={() => setHoveredProject(index)}
                            onMouseLeave={() => setHoveredProject(null)}
                        >
                            {/* Card Background with Gradient */}
                            <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-gray-100 rounded-3xl" />

                            {/* Status Badge */}
                            <div className="absolute top-4 left-4 z-20">
                                <span
                                    className={`px-3 py-1 text-xs font-medium rounded-full ${
                                        project.status === "Live"
                                            ? "bg-green-100 text-green-700 border border-green-200"
                                            : "bg-yellow-100 text-yellow-700 border border-yellow-200"
                                    }`}
                                >
                                    {project.status}
                                </span>
                            </div>

                            {/* Featured Badge */}
                            {project.featured && (
                                <div className="absolute top-4 right-4 z-20">
                                    <div className="w-3 h-3 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full animate-pulse" />
                                </div>
                            )}

                            <div className="relative h-full flex flex-col rounded-3xl overflow-hidden">
                                {/* Image Container */}
                                <div
                                    className={`${getImageHeight(
                                        project.size
                                    )} relative overflow-hidden bg-gray-200`}
                                >
                                    <Image
                                        src={project.image}
                                        alt={project.title}
                                        fill
                                        unoptimized
                                        className="object-cover transition-all duration-700 group-hover:scale-110"
                                    />

                                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                                        <div className="flex gap-3">
                                            <button className="p-3 bg-white/90 backdrop-blur-sm rounded-full hover:bg-white transition-colors duration-300 hover:scale-110">
                                                <ExternalLink className="w-5 h-5 text-black" />
                                            </button>
                                            <button className="p-3 bg-white/90 backdrop-blur-sm rounded-full hover:bg-white transition-colors duration-300 hover:scale-110">
                                                <Github className="w-5 h-5 text-black" />
                                            </button>
                                            {project.status === "Live" &&
                                                project.link !== null && (
                                                    <a
                                                        href={project.link}
                                                        target="_blank"
                                                        className="p-3 bg-white/90 backdrop-blur-sm rounded-full hover:bg-white transition-colors duration-300 hover:scale-110"
                                                    >
                                                        <Play className="w-5 h-5 text-black ml-0.5" />
                                                    </a>
                                                )}
                                        </div>
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="flex-1 p-6 flex flex-col justify-between">
                                    <div>
                                        <div className="flex items-center justify-between mb-3">
                                            <span className="text-sm text-gray-500 font-medium">
                                                {project.year}
                                            </span>
                                            <ArrowUpRight className="w-5 h-5 text-gray-400 group-hover:text-black group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" />
                                        </div>

                                        <h3
                                            className={`font-bold mb-3 font-['Inter'] group-hover:text-black transition-colors duration-300 ${
                                                project.size === "large"
                                                    ? "text-3xl"
                                                    : project.size === "medium"
                                                    ? "text-2xl"
                                                    : "text-xl"
                                            }`}
                                        >
                                            {project.title}
                                        </h3>

                                        <p
                                            className={`text-gray-600 leading-relaxed font-['Inter'] mb-4 ${
                                                project.size === "small"
                                                    ? "text-sm line-clamp-2"
                                                    : project.size === "medium"
                                                    ? "text-sm line-clamp-3"
                                                    : "text-base"
                                            }`}
                                        >
                                            {project.description}
                                        </p>
                                    </div>

                                    {/* Tech Stack */}
                                    <div className="space-y-4">
                                        <div className="flex flex-wrap gap-2">
                                            {project.tech
                                                .slice(
                                                    0,
                                                    project.size === "small"
                                                        ? 2
                                                        : 3
                                                )
                                                .map((tech, techIndex) => (
                                                    <span
                                                        key={techIndex}
                                                        className="px-3 py-1 bg-black text-white text-xs rounded-full font-['Inter'] hover:bg-gray-800 transition-colors duration-300"
                                                    >
                                                        {tech}
                                                    </span>
                                                ))}
                                            {project.tech.length >
                                                (project.size === "small"
                                                    ? 2
                                                    : 3) && (
                                                <span className="px-3 py-1 bg-gray-200 text-gray-600 text-xs rounded-full font-['Inter']">
                                                    +
                                                    {project.tech.length -
                                                        (project.size ===
                                                        "small"
                                                            ? 2
                                                            : 3)}
                                                </span>
                                            )}
                                        </div>

                                        {/* View Project Link */}
                                        <button className="flex items-center gap-2 text-black font-semibold hover:gap-4 transition-all duration-300 font-['Inter'] group-hover:underline">
                                            View Project
                                            <ExternalLink className="w-4 h-4 group-hover:rotate-45 transition-transform duration-300" />
                                        </button>
                                    </div>
                                </div>
                            </div>

                            <div className="absolute -top-2 -right-2 w-4 h-4 bg-gradient-to-br from-blue-400 to-purple-400 rounded-full opacity-0 group-hover:opacity-60 transition-opacity duration-500 animate-pulse" />
                            <div className="absolute -bottom-2 -left-2 w-3 h-3 bg-gradient-to-br from-pink-400 to-orange-400 rounded-full opacity-0 group-hover:opacity-40 transition-opacity duration-700 animate-pulse delay-300" />
                        </div>
                    ))}
                </div>
                <div
                    className={`text-center mt-20 transition-all duration-1000 delay-1000 ${
                        isVisible
                            ? "opacity-100 translate-y-0"
                            : "opacity-0 translate-y-8"
                    }`}
                >
                    <button className="group inline-flex items-center gap-4 bg-black text-white px-10 py-5 rounded-full font-semibold hover:bg-gray-900 transition-all duration-300 hover:scale-105 hover:shadow-2xl font-['Inter']">
                        View All Projects
                        <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                    </button>
                </div>
            </div>

            <style jsx>{`
                .line-clamp-2 {
                    display: -webkit-box;
                    -webkit-line-clamp: 2;
                    -webkit-box-orient: vertical;
                    overflow: hidden;
                }
                .line-clamp-3 {
                    display: -webkit-box;
                    -webkit-line-clamp: 3;
                    -webkit-box-orient: vertical;
                    overflow: hidden;
                }
            `}</style>
        </section>
    );
}
