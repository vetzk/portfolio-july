import { ExternalLink, Github, Play, ArrowUpRight, Search } from "lucide-react";
import React, { useState, useEffect, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import {
    projects,
    getProjectType,
    getImpactLine,
} from "./project-data";
export default function ProjectSection() {
    const [isVisible, setIsVisible] = useState(false);
    const [activeFilter, setActiveFilter] = useState<
        "All" | "Live" | "Development" | "Featured"
    >("All");
    const [sortBy, setSortBy] = useState<"newest" | "oldest" | "name">(
        "newest"
    );
    const [searchQuery, setSearchQuery] = useState("");

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            {
                threshold: [0, 0.1, 0.2],
                rootMargin: "0px 0px -20% 0px",
            }
        );

        const section = document.getElementById("works");
        if (section) observer.observe(section);

        return () => observer.disconnect();
    }, []);

    const filteredProjects = useMemo(() => {
        const query = searchQuery.trim().toLowerCase();
        const byFilter = projects.filter((project) => {
            if (activeFilter === "All") return true;
            if (activeFilter === "Featured") return project.featured;
            return project.status === activeFilter;
        });

        const bySearch = byFilter.filter((project) => {
            if (!query) return true;
            const haystack = [
                project.title,
                project.description,
                project.tech.join(" "),
            ]
                .join(" ")
                .toLowerCase();
            return haystack.includes(query);
        });

        return [...bySearch].sort((a, b) => {
            if (sortBy === "name") return a.title.localeCompare(b.title);
            if (sortBy === "oldest") return Number(a.year) - Number(b.year);
            return Number(b.year) - Number(a.year);
        });
    }, [activeFilter, sortBy, searchQuery]);

    const featuredProject =
        filteredProjects.find((project) => project.featured) ??
        filteredProjects[0] ??
        null;
    const projectGrid = filteredProjects.filter(
        (project) => project.title !== featuredProject?.title
    );

    const transitionKey = `${activeFilter}:${sortBy}:${searchQuery}:${projectGrid.length}`;

    if (!featuredProject) {
        return null;
    }

    return (
        <section
            id="works"
            className="scroll-mt-28 relative overflow-hidden bg-[#050505] py-24 text-[#e5e2e1] md:py-32 lg:py-[160px]"
        >
            <div className="pointer-events-none absolute inset-0 opacity-[0.04]">
                <div className="absolute left-20 top-20 h-64 w-64 rounded-full bg-white blur-3xl" />
                <div className="absolute bottom-20 right-20 h-64 w-64 rounded-full bg-[#353534] blur-3xl" />
            </div>

            <div className="layout-shell relative z-10 max-w-[1440px]">
                <div className="mb-20 text-center md:mb-28">
                    <div
                        className={`transition-all duration-1000 ${
                            isVisible
                                ? "translate-y-0 opacity-100"
                                : "translate-y-8 opacity-0"
                        }`}
                    >
                        <span className="label-caps mb-4 block text-[#8e9192]">
                            Portfolio
                        </span>
                        <h2 className="font-display mb-6 text-4xl font-semibold leading-none tracking-[-0.01em] text-white md:text-6xl lg:text-7xl">
                            Selected
                            <br />
                            <span className="text-[#c4c7c8]">works</span>
                        </h2>
                        <p className="mx-auto max-w-2xl text-xl leading-[1.6] tracking-[0.02em] text-[#c4c7c8]">
                            A collection of projects that showcase the
                            intersection of creativity, technology, and
                            innovation.
                        </p>
                    </div>
                </div>

                <div
                    className={`mb-10 flex flex-col gap-4 md:mb-12 md:flex-row md:items-center md:justify-between ${
                        isVisible
                            ? "translate-y-0 opacity-100"
                            : "translate-y-8 opacity-0"
                    } transition-all duration-1000 delay-100`}
                >
                    <div className="flex flex-wrap gap-2">
                        {(["All", "Featured", "Live", "Development"] as const).map(
                            (filter) => (
                                <button
                                    key={filter}
                                    type="button"
                                    onClick={() => setActiveFilter(filter)}
                                    className={`label-caps border px-3 py-1 text-[10px] transition-colors ${
                                        activeFilter === filter
                                            ? "border-[#e5e2e1] bg-[#e5e2e1] text-black"
                                            : "border-[#444748] text-[#c4c7c8] hover:border-[#8e9192] hover:text-white"
                                    }`}
                                >
                                    {filter}
                                </button>
                            )
                        )}
                    </div>

                    <div className="flex w-full flex-col items-stretch gap-3 md:w-auto md:flex-row md:items-center">
                        <div className="relative md:w-[280px]">
                            <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[#8e9192]" />
                            <input
                                value={searchQuery}
                                onChange={(event) =>
                                    setSearchQuery(event.target.value)
                                }
                                placeholder="Search projects or tech"
                                className="w-full border border-[#444748] bg-[#0f0f0f] py-2 pl-9 pr-3 text-xs uppercase tracking-[0.14em] text-[#e5e2e1] outline-none placeholder:text-[#8e9192]"
                            />
                        </div>
                        <label
                            htmlFor="project-sort"
                            className="label-caps text-[10px] text-[#8e9192]"
                        >
                            Sort
                        </label>
                        <select
                            id="project-sort"
                            value={sortBy}
                            onChange={(event) =>
                                setSortBy(
                                    event.target.value as
                                        | "newest"
                                        | "oldest"
                                        | "name"
                                )
                            }
                            className="border border-[#444748] bg-[#0f0f0f] px-3 py-2 text-xs uppercase tracking-[0.14em] text-[#e5e2e1] outline-none"
                        >
                            <option value="newest">Newest</option>
                            <option value="oldest">Oldest</option>
                            <option value="name">Name</option>
                        </select>
                    </div>
                </div>

                <div
                    className={`mb-16 border border-[#222222] bg-[#0f0f0f] transition-all duration-1000 md:mb-20 ${
                        isVisible
                            ? "translate-y-0 opacity-100"
                            : "translate-y-8 opacity-0"
                    }`}
                >
                    <div className="grid grid-cols-1 lg:grid-cols-12">
                        <div className="image-zoom-container relative aspect-[16/10] border-0 lg:col-span-7 lg:aspect-auto lg:min-h-[460px]">
                            <Image
                                src={featuredProject.image}
                                alt={featuredProject.title}
                                fill
                                unoptimized
                                className="object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                        </div>
                        <div className="flex flex-col justify-between border-l-0 border-t border-[#222222] p-8 lg:col-span-5 lg:border-l lg:border-t-0 lg:p-10">
                            <div>
                                <div className="mb-4 flex flex-wrap items-center gap-3">
                                    <span className="label-caps border border-[#8e9192] px-3 py-1 text-[10px] text-[#e5e2e1]">
                                        Featured case study
                                    </span>
                                    <span className="label-caps border border-[#444748] px-3 py-1 text-[10px] text-[#c4c7c8]">
                                        {featuredProject.status}
                                    </span>
                                </div>
                                <p className="label-caps mb-3 text-[10px] text-[#8e9192]">
                                    {featuredProject.year} /{" "}
                                    {getProjectType(featuredProject.size)}
                                </p>
                                <h3 className="font-display mb-5 text-3xl font-semibold text-white md:text-4xl">
                                    {featuredProject.title}
                                </h3>
                                <p className="mb-6 text-base leading-[1.7] text-[#c4c7c8]">
                                    {getImpactLine(featuredProject.description)}
                                </p>
                                <div className="mb-8 flex flex-wrap gap-2">
                                    {featuredProject.tech
                                        .slice(0, 4)
                                        .map((tech, techIndex) => (
                                            <span
                                                key={techIndex}
                                                className="label-caps border border-[#8e9192] px-2 py-1 text-[10px] text-[#e5e2e1]"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                </div>
                            </div>

                            <div className="flex items-center gap-3">
                                <Link
                                    href={`/projects/${featuredProject.slug}`}
                                    className="inline-flex items-center gap-2 border border-[#444748] px-4 py-2 text-xs uppercase tracking-[0.18em] text-[#c4c7c8] hover:border-[#8e9192] hover:text-white"
                                >
                                    Details
                                    <ArrowUpRight className="h-4 w-4" />
                                </Link>
                                {featuredProject.github ? (
                                    <a
                                        href={featuredProject.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 border border-white px-4 py-2 text-xs uppercase tracking-[0.18em] text-white transition-colors hover:bg-white hover:text-black"
                                    >
                                        <Github className="h-4 w-4" />
                                        Code
                                    </a>
                                ) : null}
                                {featuredProject.link ? (
                                    <a
                                        href={featuredProject.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 border border-white bg-white px-4 py-2 text-xs uppercase tracking-[0.18em] text-black transition-opacity hover:opacity-90"
                                    >
                                        <Play className="h-4 w-4" />
                                        Live
                                    </a>
                                ) : null}
                            </div>
                        </div>
                    </div>
                </div>

                <div
                    key={transitionKey}
                    className="animate-[fadeIn_320ms_ease-out] grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3"
                >
                    {projectGrid.map((project, index) => (
                        <div
                            key={index}
                            className={`group relative overflow-hidden border border-[#222222] bg-[#121212] transition-all duration-700 ${
                                isVisible
                                    ? "opacity-100 translate-y-0"
                                    : "opacity-0 translate-y-12"
                            }`}
                            style={{
                                transitionDelay: `${150 + index * 100}ms`,
                            }}
                        >
                            <div className="relative flex h-full flex-col">
                                <div className="image-zoom-container relative aspect-[16/10] border-0 bg-[#353534]">
                                    <Image
                                        src={project.image}
                                        alt={project.title}
                                        fill
                                        unoptimized
                                        className="object-cover"
                                    />
                                </div>

                                <div className="flex flex-1 flex-col justify-between border-t border-[#222222] p-6">
                                    <div>
                                        <div className="mb-3 flex items-center justify-between gap-3">
                                            <span className="label-caps text-[10px] text-[#8e9192]">
                                                {project.year} /{" "}
                                                {getProjectType(project.size)}
                                            </span>
                                            <span
                                                className={`label-caps border px-2 py-1 text-[10px] ${
                                                    project.status === "Live"
                                                        ? "border-[#8e9192] text-[#e5e2e1]"
                                                        : "border-[#444748] text-[#c4c7c8]"
                                                }`}
                                            >
                                                {project.status}
                                            </span>
                                        </div>

                                        <h3
                                            className="font-display mb-3 text-2xl font-semibold text-white"
                                        >
                                            {project.title}
                                        </h3>

                                        <p className="mb-5 text-sm leading-[1.7] text-[#c4c7c8]">
                                            {getImpactLine(project.description)}
                                        </p>
                                    </div>

                                    <div className="space-y-4">
                                        <div className="flex flex-wrap gap-2">
                                            {project.tech
                                                .slice(0, 3)
                                                .map((tech, techIndex) => (
                                                    <span
                                                        key={techIndex}
                                                        className="label-caps border border-[#8e9192] px-2 py-1 text-[10px] text-[#e5e2e1]"
                                                    >
                                                        {tech}
                                                    </span>
                                                ))}
                                            {project.tech.length > 3 && (
                                                <span className="label-caps border border-[#444748] px-2 py-1 text-[10px] text-[#8e9192]">
                                                    +{project.tech.length - 3}
                                                </span>
                                            )}
                                        </div>

                                        <div className="flex items-center gap-3">
                                            <Link
                                                href={`/projects/${project.slug}`}
                                                className="inline-flex items-center gap-1 text-xs uppercase tracking-[0.14em] text-[#c4c7c8] hover:text-white"
                                            >
                                                Details
                                                <ArrowUpRight className="h-4 w-4" />
                                            </Link>
                                            {project.github ? (
                                                <a
                                                    href={project.github}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="inline-flex items-center gap-1 text-xs uppercase tracking-[0.14em] text-[#c4c7c8] hover:text-white"
                                                >
                                                    <Github className="h-4 w-4" />
                                                    Code
                                                </a>
                                            ) : null}
                                            {project.link ? (
                                                <a
                                                    href={project.link}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="inline-flex items-center gap-1 text-xs uppercase tracking-[0.14em] text-white hover:text-[#c4c7c8]"
                                                >
                                                    View live
                                                    <ExternalLink className="h-4 w-4" />
                                                </a>
                                            ) : (
                                                <span className="inline-flex items-center gap-1 text-xs uppercase tracking-[0.14em] text-[#8e9192]">
                                                    Private build
                                                    <ArrowUpRight className="h-4 w-4" />
                                                </span>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
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
                    <button
                        type="button"
                        className="btn-stitch-primary group inline-flex gap-4"
                    >
                        Showing {filteredProjects.length}{" "}
                        {filteredProjects.length === 1
                            ? "project"
                            : "projects"}
                        <ArrowUpRight className="h-5 w-5 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
                    </button>
                </div>
            </div>
            <style jsx>{`
                @keyframes fadeIn {
                    from {
                        opacity: 0;
                        transform: translateY(8px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
            `}</style>
        </section>
    );
}
