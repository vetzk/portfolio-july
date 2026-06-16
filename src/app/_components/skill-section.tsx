"use client";
import React, { useState, useEffect } from "react";

const ROMAN = ["I", "II", "III", "IV"];

const Code2Icon = () => (
  <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
    <path d="M8.5 3L4 7.5 8.5 12 10 10.5 7 7.5 10 4.5 8.5 3zm7 0L14 4.5 17 7.5 14 10.5 15.5 12 20 7.5 15.5 3z" />
    <path d="M2 12h2v2H2v-2zm4 0h2v2H6v-2zm4 0h2v2h-2v-2zm4 0h2v2h-2v-2zm4 0h2v2h-2v-2z" />
  </svg>
);

const DatabaseIcon = () => (
  <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
    <ellipse cx="12" cy="5" rx="9" ry="3" />
    <path d="M3 5v14c0 1.66 4.03 3 9 3s9-1.34 9-3V5" />
    <path d="M3 12c0 1.66 4.03 3 9 3s9-1.34 9-3" />
  </svg>
);

const PaletteIcon = () => (
  <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 2C6.49 2 2 6.49 2 12s4.49 10 10 10c1.38 0 2.5-1.12 2.5-2.5 0-.61-.23-1.21-.64-1.67-.08-.09-.13-.21-.13-.33 0-.28.22-.5.5-.5H16c3.31 0 6-2.69 6-6 0-5.51-4.49-10-10-10zM7.5 9C8.33 9 9 8.33 9 7.5S8.33 6 7.5 6 6 6.67 6 7.5 6.67 9 7.5 9zm3-4C11.33 5 12 4.33 12 3.5S11.33 2 10.5 2 9 2.67 9 3.5 9.67 5 10.5 5zm3 0c.83 0 1.5-.67 1.5-1.5S14.33 2 13.5 2 12 2.67 12 3.5 12.67 5 13.5 5zm3 4c.83 0 1.5-.67 1.5-1.5S17.33 6 16.5 6 15 6.67 15 7.5 15.67 9 16.5 9z" />
  </svg>
);

const GlobeIcon = () => (
  <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
    <circle cx="12" cy="12" r="10" />
    <line x1="2" y1="12" x2="22" y2="12" />
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
  </svg>
);

const skillCategories = [
  {
    arcana: "Frontend",
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
        description: "Secure lightweight desktop apps",
      },
      { name: "TypeScript", level: 90, description: "Type-safe development" },
      { name: "Tailwind CSS", level: 92, description: "Utility-first styling" },
    ],
  },
  {
    arcana: "Backend",
    title: "Backend Development",
    icon: <DatabaseIcon />,
    description: "Scalable server-side solutions",
    skills: [
      { name: "Node.js", level: 88, description: "Server-side JavaScript" },
      { name: "Laravel", level: 88, description: "Server-side PHP" },
      { name: "Python", level: 85, description: "Data processing & APIs" },
      { name: "PostgreSQL", level: 82, description: "Relational databases" },
      { name: "MongoDB", level: 80, description: "NoSQL solutions" },
    ],
  },
  {
    arcana: "Design",
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
      { name: "Framer", level: 88, description: "Interactive prototypes" },
      { name: "Blender", level: 75, description: "3D modeling & animation" },
    ],
  },
  {
    arcana: "Cloud",
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

function MasteryBar({ level }: { level: number }) {
  const filled = Math.round(level / 10);
  return (
    <div className="p5-mastery-row">
      {Array.from({ length: 10 }).map((_, i) => (
        <span key={i} className="p5-mastery-block" data-filled={i < filled} />
      ))}
    </div>
  );
}

export default function SkillsSection() {
  const [activeCategory, setActiveCategory] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: [0, 0.1, 0.2], rootMargin: "0px 0px -20% 0px" },
    );
    const section = document.getElementById("skills");
    if (section) observer.observe(section);
    return () => observer.disconnect();
  }, []);

  const active = skillCategories[activeCategory];

  return (
    <section
      id="skills"
      className="scroll-mt-28 relative overflow-hidden bg-[#0a0a0a] py-24 text-[#f4f0e6] md:py-32 lg:py-[160px]"
    >
      <div className="pointer-events-none absolute inset-0 p5-halftone opacity-20" />

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
              <span className="p5-section-tag">Section 01</span>
              <span className="label-caps text-[#e60026]">Expertise</span>
            </div>
            <h2 className="font-display text-4xl leading-[0.95] text-white md:text-6xl lg:text-7xl">
              THE
              <br />
              <span className="p5-text-outline">ARSENAL.</span>
            </h2>
            <p className="mt-6 max-w-2xl font-sans text-base leading-relaxed text-[#9a9590] md:text-lg">
              Tools I reach for first. Every discipline sharpened in production
              — from UI craft to backend delivery.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
          {skillCategories.map((category, index) => (
            <button
              key={category.title}
              type="button"
              onClick={() => setActiveCategory(index)}
              className={`p5-arcana-card p-5 text-left transition-all duration-700 md:p-6 ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              }`}
              style={{ transitionDelay: `${120 + index * 80}ms` }}
              data-active={activeCategory === index}
            >
              <div className="mb-4 flex items-start justify-between gap-3">
                <p className="label-caps text-[10px] text-[#9a9590]">
                  Arcana · {category.arcana}
                </p>
                <span className="p5-arcana-numeral">{ROMAN[index]}</span>
              </div>
              <div className="mb-3 text-[#e60026]">{category.icon}</div>
              <h3 className="font-display text-2xl leading-none text-[#111111]">
                {category.arcana}
              </h3>
              <p className="mt-2 font-sans text-xs leading-relaxed text-[#333333]">
                {category.description}
              </p>
            </button>
          ))}
        </div>

        <div
          className={`p5-contact-panel mt-10 p-6 transition-all duration-1000 delay-300 md:p-8 lg:mt-12 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <div className="mb-8 flex flex-wrap items-center gap-4">
            <div className="border-2 border-[#2a2a2a] bg-[#1a1a1a] p-3 text-[#e60026]">
              {active.icon}
            </div>
            <div>
              <p className="label-caps text-[#9a9590]">
                Arcana · {active.arcana}
              </p>
              <h3 className="font-display text-3xl text-white">
                {active.title}
              </h3>
            </div>
          </div>

          <div className="space-y-6">
            {active.skills.map((skill) => (
              <div key={skill.name}>
                <div className="mb-2 flex items-end justify-between gap-4">
                  <div>
                    <p className="font-display text-xl text-white">
                      {skill.name}
                    </p>
                    <p className="font-sans text-xs text-[#9a9590]">
                      {skill.description}
                    </p>
                  </div>
                  <span className="label-caps text-[#e60026]">Mastery</span>
                </div>
                <MasteryBar level={skill.level} />
              </div>
            ))}
          </div>
        </div>

        <div
          className={`mt-12 text-center transition-all delay-500 duration-1000 lg:mt-16 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <a href="#contact" className="p5-btn-primary inline-flex">
            <span>Start a project</span>
          </a>
        </div>
      </div>
    </section>
  );
}
