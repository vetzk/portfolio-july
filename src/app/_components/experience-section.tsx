"use client";
import { Calendar, MapPin, ArrowUpRight, Briefcase } from "lucide-react";
import React, { useState, useEffect } from "react";

const experiences = [
  {
    title: "Backend Developer",
    company: "Esa Creatives",
    location: "Tangerang, Indonesia",
    period: "2026",
    duration: "ongoing",
    type: "Contract",
    description:
      "Specialized in creating backend solutions for creative agencies and startups.",
    achievements: [
      "Developed backend solutions for creative agencies and startups",
    ],
    tech: ["Laravel", "PHP", "MySQL", "PostgreSQL", "Docker", "AWS"],
    featured: true,
  },
  {
    title: "Frontend Developer",
    company: "Esa Creatives",
    location: "Tangerang, Indonesia",
    period: "2025",
    duration: "ongoing",
    type: "Contract",
    description:
      "Specialized in creating interactive and visually stunning web experiences for creative agencies and startups.",
    achievements: [
      "Increased client satisfaction scores by 35%",
      "Developed reusable component library used across projects",
    ],
    tech: ["React", "Next.js", "Figma", "Webflow"],
    featured: true,
  },
  {
    title: "Software Developer",
    company: "Choice Community Health",
    location: "Melbourne, Australia",
    period: "2026",
    duration: "2 months",
    type: "Contract",
    description:
      "Specialized in creating software solutions for choice community health.",
    achievements: ["Developed software solutions for choice community health"],
    tech: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "Zod",
      "Supabase",
    ],
    featured: false,
  },
  {
    title: "Software Developer",
    company: "Aksara Virtual Agency",
    location: "Bali, Indonesia",
    period: "2026",
    duration: "2 months",
    type: "Contract",
    description:
      "Specialized in creating software solutions for creative agencies and startups.",
    achievements: [
      "Developed software solutions for creative agencies and startups",
    ],
    tech: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "Zod",
      "Supabase",
    ],
    featured: false,
  },

  {
    title: "Full Stack Developer",
    company: "DMS",
    location: "Jakarta",
    period: "2024",
    duration: "1 year",
    type: "Internship",
    description:
      "Started my professional journey building responsive websites and learning modern development practices in a fast-paced startup environment.",
    achievements: [
      "Learned and adapted to new technologies quickly",
      "Maintained 99% uptime for client applications",
    ],
    tech: ["HTML/CSS", "JavaScript", "React.js", "MySQL", "Nest.js"],
    featured: false,
  },
];

export default function ExperienceSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.2 },
    );
    const section = document.getElementById("experience");
    if (section) observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="experience"
      className="scroll-mt-28 relative overflow-hidden bg-[#111111] py-16 text-[#f4f0e6] sm:py-24 lg:py-[160px]"
    >
      <div className="pointer-events-none absolute inset-0 p5-halftone opacity-15" />

      <div className="layout-shell relative z-10 max-w-[1440px]">
        <div className="mb-12 sm:mb-16 lg:mb-20">
          <div
            className={`transition-all duration-1000 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-8 opacity-0"
            }`}
          >
            <div className="mb-6 flex flex-wrap items-center gap-4">
              <span className="p5-section-tag">Phantom ledger</span>
              <span className="label-caps text-[#e60026]">Experience</span>
            </div>
            <h2 className="font-display text-4xl leading-[0.95] text-white sm:text-5xl md:text-6xl lg:text-7xl">
              WORK
              <br />
              <span className="p5-text-outline">HISTORY.</span>
            </h2>
            <p className="mt-6 max-w-2xl font-sans text-base leading-relaxed text-[#9a9590] sm:text-lg">
              Contract roles and builds — from intern to full-stack delivery
              across health, agency, and product teams.
            </p>
          </div>
        </div>

        <div className="space-y-6 sm:space-y-8">
          {experiences.map((experience, index) => (
            <article
              key={`${experience.company}-${experience.title}-${index}`}
              className={`p5-ledger-card group p-5 sm:p-6 lg:p-8 ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-12 opacity-0"
              } transition-all duration-700`}
              style={{ transitionDelay: `${index * 120}ms` }}
            >
              <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
                <div className="flex gap-5 md:gap-8">
                  <div className="shrink-0">
                    <p className="p5-ledger-year">{experience.period}</p>
                    <p className="mt-1 font-display text-xs uppercase tracking-wider text-[#9a9590]">
                      {String(index + 1).padStart(2, "0")}
                    </p>
                  </div>

                  <div className="flex-1">
                    <div className="mb-3 flex flex-wrap items-center gap-2">
                      <Briefcase className="h-4 w-4 text-[#e60026]" />
                      <span className="p5-badge-build">{experience.type}</span>
                      {experience.featured ? (
                        <span className="p5-badge-shipped">Active</span>
                      ) : null}
                    </div>

                    <h3 className="font-display text-2xl text-white sm:text-3xl">
                      {experience.title}
                    </h3>
                    <p className="mt-1 font-display text-lg text-[#e60026]">
                      {experience.company}
                    </p>

                    <div className="mt-3 flex flex-wrap gap-3 font-sans text-xs text-[#9a9590] sm:text-sm">
                      <span className="inline-flex items-center gap-1.5">
                        <Calendar className="h-3.5 w-3.5" />
                        {experience.period} — {experience.duration}
                      </span>
                      <span className="inline-flex items-center gap-1.5">
                        <MapPin className="h-3.5 w-3.5" />
                        {experience.location}
                      </span>
                    </div>

                    <p className="mt-4 font-sans text-sm leading-relaxed text-[#9a9590] sm:text-base">
                      {experience.description}
                    </p>

                    <ul className="mt-4 space-y-2">
                      {experience.achievements.map((achievement) => (
                        <li
                          key={achievement}
                          className="flex items-start gap-2 font-sans text-sm text-[#f4f0e6]"
                        >
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 bg-[#e60026]" />
                          {achievement}
                        </li>
                      ))}
                    </ul>

                    <div className="mt-5 flex flex-wrap gap-2">
                      {experience.tech.map((tech) => (
                        <span key={tech} className="p5-tech-tag">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <ArrowUpRight className="h-5 w-5 shrink-0 self-end text-[#9a9590] transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[#e60026] md:self-start" />
              </div>
            </article>
          ))}
        </div>

        <div
          className={`mt-12 text-center transition-all delay-700 duration-1000 sm:mt-16 lg:mt-20 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <a href="#contact" className="p5-btn-outline inline-flex">
            <span className="inline-flex items-center gap-2">
              Let&apos;s work together
              <ArrowUpRight className="h-4 w-4" />
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
