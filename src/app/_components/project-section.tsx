"use client";
import { ExternalLink, Github, Play, ArrowUpRight, Search } from "lucide-react";
import React, { useState, useEffect, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { projects, getProjectType, getImpactLine } from "./project-data";

function statusBadge(status: "Live" | "Development") {
  if (status === "Live") {
    return <span className="p5-badge-shipped">Shipped</span>;
  }
  return <span className="p5-badge-build">In build</span>;
}

export default function ProjectSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeFilter, setActiveFilter] = useState<
    "All" | "Live" | "Development" | "Featured"
  >("All");
  const [sortBy, setSortBy] = useState<"newest" | "oldest" | "name">("newest");
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
      },
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
    (project) => project.title !== featuredProject?.title,
  );

  const transitionKey = `${activeFilter}:${sortBy}:${searchQuery}:${projectGrid.length}`;

  if (!featuredProject) {
    return null;
  }

  return (
    <section
      id="works"
      className="scroll-mt-28 relative overflow-hidden bg-[#0a0a0a] py-24 text-[#f4f0e6] md:py-32 lg:py-[160px]"
    >
      <div className="pointer-events-none absolute inset-0 p5-halftone opacity-25" />

      <div className="layout-shell relative z-10 max-w-[1440px]">
        <div className="mb-16 md:mb-24">
          <div
            className={`transition-all duration-1000 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-8 opacity-0"
            }`}
          >
            <div className="mb-6 flex flex-wrap items-center gap-4">
              <span className="p5-section-tag">Section 02</span>
              <span className="label-caps text-[#e60026]">Portfolio</span>
            </div>
            <h2 className="font-display text-4xl leading-[0.95] text-white md:text-6xl lg:text-7xl">
              RECENT
              <br />
              <span className="p5-text-outline">WORK.</span>
            </h2>
            <p className="mt-6 max-w-2xl font-sans text-base leading-relaxed text-[#9a9590] md:text-lg">
              Flagship builds and production apps — shipped with strong design
              taste and maintainable code.
            </p>
          </div>
        </div>

        <div
          className={`mb-10 flex flex-col gap-4 md:mb-12 md:flex-row md:items-center md:justify-between ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          } transition-all duration-1000 delay-100`}
        >
          <div className="flex flex-wrap gap-2">
            {(["All", "Featured", "Live", "Development"] as const).map(
              (filter) => (
                <button
                  key={filter}
                  type="button"
                  onClick={() => setActiveFilter(filter)}
                  className="p5-filter-btn"
                  data-active={activeFilter === filter}
                >
                  {filter}
                </button>
              ),
            )}
          </div>

          <div className="flex w-full flex-col items-stretch gap-3 md:w-auto md:flex-row md:items-center">
            <div className="relative md:w-[280px]">
              <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[#9a9590]" />
              <input
                value={searchQuery}
                onChange={(event) => setSearchQuery(event.target.value)}
                placeholder="Search projects or tech"
                className="w-full border-2 border-[#2a2a2a] bg-[#111111] py-2 pl-9 pr-3 font-display text-xs uppercase tracking-[0.14em] text-[#f4f0e6] outline-none placeholder:text-[#9a9590] focus:border-[#e60026]"
              />
            </div>
            <label
              htmlFor="project-sort"
              className="label-caps text-[10px] text-[#9a9590]"
            >
              Sort
            </label>
            <select
              id="project-sort"
              value={sortBy}
              onChange={(event) =>
                setSortBy(event.target.value as "newest" | "oldest" | "name")
              }
              className="border-2 border-[#2a2a2a] bg-[#111111] px-3 py-2 font-display text-xs uppercase tracking-[0.14em] text-[#f4f0e6] outline-none focus:border-[#e60026]"
            >
              <option value="newest">Newest</option>
              <option value="oldest">Oldest</option>
              <option value="name">Name</option>
            </select>
          </div>
        </div>

        <div
          className={`p5-featured-card-shell transition-all duration-1000 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <div className="p5-featured-card overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-12">
              <div className="image-zoom-container relative aspect-[16/10] border-0 lg:col-span-7 lg:aspect-auto lg:min-h-[460px]">
                <Image
                  src={featuredProject.image}
                  alt={featuredProject.title}
                  fill
                  unoptimized
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/90 via-[#0a0a0a]/30 to-transparent" />
                <div className="absolute left-4 top-4 z-10 overflow-hidden md:left-6 md:top-6">
                  <div className="relative">
                    <span className="text-4xl leading-none p5-project-index md:text-5xl">
                      01
                    </span>
                  </div>
                </div>
              </div>
              <div className="relative flex min-h-[320px] flex-col lg:col-span-5 lg:min-h-[460px]">
                <div className="relative z-10 flex flex-1 flex-col justify-between bg-[#0a0a0a]/60 p-8 backdrop-blur-[1px] lg:p-10">
                  <div>
                    <div className="mb-4 flex flex-wrap items-center gap-3">
                      <span className="p5-badge-build">Featured</span>
                      {statusBadge(featuredProject.status)}
                    </div>
                    <p className="label-caps mb-3 text-[10px] text-[#9a9590]">
                      {featuredProject.year} /{" "}
                      {getProjectType(featuredProject.size)}
                    </p>
                    <h3 className="font-display mb-5 text-3xl text-white md:text-4xl">
                      {featuredProject.title}
                    </h3>
                    <p className="mb-6 font-sans text-base leading-[1.7] text-[#9a9590]">
                      {getImpactLine(featuredProject.description)}
                    </p>
                    <div className="mb-8 flex flex-wrap gap-2">
                      {featuredProject.tech.slice(0, 4).map((tech) => (
                        <span key={tech} className="p5-tech-tag">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center gap-4">
                    <Link
                      href={`/projects/${featuredProject.slug}`}
                      className="p5-open-link"
                    >
                      Open
                      <ArrowUpRight className="h-4 w-4" />
                    </Link>
                    {featuredProject.github ? (
                      <a
                        href={featuredProject.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p5-open-link text-[#9a9590] hover:text-white"
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
                        className="p5-btn-primary"
                      >
                        <span className="inline-flex items-center gap-2">
                          <Play className="h-4 w-4" />
                          Live
                        </span>
                      </a>
                    ) : null}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          key={transitionKey}
          className="animate-[fadeIn_320ms_ease-out] grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3"
        >
          {projectGrid.map((project, index) => (
            <article
              key={project.slug}
              className={`p5-project-card group ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-12 opacity-0"
              } transition-all duration-700`}
              style={{
                transitionDelay: `${150 + index * 100}ms`,
              }}
            >
              <div className="relative flex h-full flex-col">
                <div className="image-zoom-container relative aspect-[16/10] border-0 border-b-2 border-white/20 bg-[#1a1a1a]">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    unoptimized
                    className="object-cover"
                  />
                  <div className="absolute left-3 top-3 p5-project-index">
                    {String(index + 2).padStart(2, "0")}
                  </div>
                  <div className="absolute right-3 top-3">
                    {statusBadge(project.status)}
                  </div>
                </div>

                <div className="flex flex-1 flex-col justify-between p-6">
                  <div>
                    <p className="label-caps mb-2 text-[10px] text-[#9a9590]">
                      {project.year} / {getProjectType(project.size)}
                    </p>
                    <h3 className="font-display mb-3 text-2xl text-white">
                      {project.title}
                    </h3>
                    <p className="mb-5 font-sans text-sm leading-[1.7] text-[#9a9590]">
                      {getImpactLine(project.description)}
                    </p>
                  </div>

                  <div className="space-y-4">
                    <div className="flex flex-wrap gap-2">
                      {project.tech.slice(0, 3).map((tech) => (
                        <span key={tech} className="p5-tech-tag">
                          {tech}
                        </span>
                      ))}
                      {project.tech.length > 3 ? (
                        <span className="p5-tech-tag">
                          +{project.tech.length - 3}
                        </span>
                      ) : null}
                    </div>

                    <div className="flex items-center justify-between gap-3 border-t border-[#2a2a2a] pt-4">
                      <Link
                        href={`/projects/${project.slug}`}
                        className="p5-open-link"
                      >
                        Open
                        <ArrowUpRight className="h-4 w-4" />
                      </Link>
                      {project.link ? (
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p5-open-link text-[#9a9590] hover:text-[#e60026]"
                        >
                          Live
                          <ExternalLink className="h-4 w-4" />
                        </a>
                      ) : project.github ? (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p5-open-link text-[#9a9590] hover:text-white"
                        >
                          Code
                          <Github className="h-4 w-4" />
                        </a>
                      ) : (
                        <span className="label-caps text-[10px] text-[#9a9590]">
                          Private build
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div
          className={`mt-16 text-center transition-all delay-1000 duration-1000 md:mt-20 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <p className="mb-4 font-display text-2xl text-white md:text-3xl">
            {filteredProjects.length}{" "}
            {filteredProjects.length === 1 ? "project" : "projects"} on file
          </p>
          <a href="#contact" className="p5-btn-outline inline-flex">
            <span className="inline-flex items-center gap-2">
              Start your build
              <ArrowUpRight className="h-4 w-4" />
            </span>
          </a>
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
