"use client";
import {
  Code,
  Palette,
  Zap,
  ArrowRight,
  Star,
  Users,
  Award,
  MapPin,
  Mail,
  Target,
} from "lucide-react";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import P5LayeredStar from "./p5-layered-star";
import { projects } from "./project-data";

const skills = [
  {
    icon: <Code className="h-8 w-8" />,
    title: "Development",
    desc: "Full-stack development with modern frameworks",
    technologies: ["React", "Node.js", "TypeScript", "Next.js"],
  },
  {
    icon: <Palette className="h-8 w-8" />,
    title: "Design",
    desc: "UI/UX design and creative direction",
    technologies: ["Figma", "Adobe CC", "Framer", "Blender"],
  },
  {
    icon: <Zap className="h-8 w-8" />,
    title: "Innovation",
    desc: "Cutting-edge solutions and emerging tech",
    technologies: ["AI/ML", "WebGL", "Three.js", "WebRTC"],
  },
];

const stats = [
  {
    icon: <Star className="h-6 w-6" />,
    value: `${projects.length}+`,
    label: "Projects",
  },
  { icon: <Users className="h-6 w-6" />, value: "05+", label: "Clients" },
  { icon: <Award className="h-6 w-6" />, value: "02+", label: "Years" },
];

const PRINCIPLES = [
  "Start from the user journey and business goal — not the tech stack.",
  "Prototype fast, then harden UX, code quality, and edge cases.",
  "AI speeds exploration; taste, judgment, and craft stay human.",
];

const DOSSIER_FIELDS = [
  { label: "Location", value: "Surabaya, ID — Remote" },
  { label: "Focus", value: "Product sites · CMS · Booking · AI" },
  { label: "Status", value: "Open for contract work" },
];

export default function AboutSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.2 },
    );
    const section = document.getElementById("about");
    if (section) observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="about"
      className="scroll-mt-28 relative overflow-hidden bg-[#0a0a0a] py-24 text-[#f4f0e6] md:py-32 lg:py-[160px]"
    >
      <div className="pointer-events-none absolute inset-0 p5-halftone opacity-20" />
      <P5LayeredStar
        className="pointer-events-none absolute -right-10 top-24 opacity-25 md:right-4"
        size={180}
      />

      <div className="layout-shell relative z-10 max-w-[1440px]">
        <div
          className={`mb-12 transition-all duration-1000 md:mb-16 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <div className="mb-6 flex flex-wrap items-center gap-4">
            <span className="p5-section-tag">Dossier 02</span>
            <span className="label-caps text-[#e60026]">About</span>
          </div>

          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12">
            <div className="lg:col-span-5">
              <h2 className="font-display text-4xl leading-[0.95] text-white md:text-6xl lg:text-7xl">
                THE
                <br />
                <span className="p5-text-outline">BRIEF.</span>
              </h2>
            </div>
            <div className="lg:col-span-7">
              <p className="font-sans text-lg leading-relaxed text-[#9a9590] md:text-xl">
                I&apos;m a multidisciplinary developer who combines{" "}
                <span className="font-semibold text-white">
                  aesthetic craft
                </span>{" "}
                with{" "}
                <span className="font-semibold text-white">
                  functional innovation
                </span>
                — from product sites and CMS platforms to booking systems and
                AI-assisted workflows.
              </p>
            </div>
          </div>
        </div>

        <div
          className={`mb-16 grid grid-cols-1 items-start gap-6 transition-all delay-100 duration-1000 lg:mb-20 lg:grid-cols-12 lg:gap-8 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <div className="p5-card-dossier-tilt lg:col-span-5">
            <div className="p5-card-cream p5-card-dossier relative overflow-hidden p-6 md:p-8">
              <div className="relative z-10">
                <div className="mb-5 flex items-start justify-between gap-4">
                  <div>
                    <p className="label-caps text-[#9a9590]">Subject file</p>
                    <p className="font-display text-3xl text-[#111111]">002</p>
                  </div>
                  <span className="border-2 border-[#111111] bg-[#e60026] px-3 py-1 font-display text-xs uppercase tracking-wider text-white">
                    Confirmed
                  </span>
                </div>

                <div className="relative mb-6 overflow-hidden border-2 border-[#111111] bg-[#111111]">
                  <div className="relative aspect-[4/5] w-full max-h-[280px]">
                    <Image
                      src="/alfred.webp"
                      alt="Alfredo Vetsera"
                      fill
                      className="object-contain object-center grayscale contrast-125"
                      sizes="(max-width: 1024px) 100vw, 400px"
                    />
                    <div className="absolute inset-0 bg-[#e60026]/10 mix-blend-multiply" />
                    <div className="absolute inset-0 p5-halftone-light opacity-50" />
                  </div>
                  <div className="h-2 w-full p5-hazard-stripe" />
                </div>

                <h3 className="font-display text-3xl leading-none text-[#111111] md:text-4xl">
                  Alfredo Vetsera
                </h3>
                <p className="mt-1 font-display text-base uppercase tracking-wider text-[#e60026]">
                  Full-stack engineer
                </p>

                <dl className="mt-5 space-y-3 border-t-2 border-[#111111]/10 pt-5">
                  {DOSSIER_FIELDS.map((field) => (
                    <div
                      key={field.label}
                      className="grid grid-cols-[5.5rem_1fr] gap-3 font-sans text-sm"
                    >
                      <dt className="label-caps text-[10px] text-[#9a9590]">
                        {field.label}
                      </dt>
                      <dd className="text-[#111111]">{field.value}</dd>
                    </div>
                  ))}
                </dl>

                <div className="mt-5 flex flex-wrap gap-4 font-sans text-sm text-[#333333]">
                  <span className="inline-flex items-center gap-2">
                    <MapPin className="h-4 w-4 shrink-0 text-[#e60026]" />
                    Surabaya
                  </span>
                  <span className="inline-flex items-center gap-2">
                    <Mail className="h-4 w-4 shrink-0 text-[#e60026]" />
                    zestvetz@gmail.com
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-6 lg:col-span-7">
            <div className="p5-terminal-panel p-6 md:p-8">
              <p className="label-caps mb-3 text-[#e60026]">Case notes</p>
              <h3 className="font-display mb-4 text-2xl text-white md:text-3xl">
                Operator profile
              </h3>
              <p className="font-sans leading-relaxed text-[#9a9590]">
                Based in Surabaya, working remote worldwide. I care about speed,
                clarity, and shipping work that holds up after launch — not just
                on demo day.
              </p>
              <ul className="mt-6 space-y-4">
                {PRINCIPLES.map((principle) => (
                  <li
                    key={principle}
                    className="flex items-start gap-3 font-sans text-sm leading-relaxed text-[#9a9590] md:text-base"
                  >
                    <Target className="mt-0.5 h-4 w-4 shrink-0 text-[#e60026]" />
                    <span>{principle}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="grid grid-cols-3 gap-3">
              {stats.map((stat, index) => (
                <div
                  key={stat.label}
                  className={`p5-stat transition-all duration-700 ${
                    isVisible
                      ? "translate-y-0 opacity-100"
                      : "translate-y-4 opacity-0"
                  }`}
                  style={{ transitionDelay: `${300 + index * 100}ms` }}
                >
                  <div className="mb-2 flex justify-center text-[#e60026]">
                    {stat.icon}
                  </div>
                  <p className="p5-stat-value text-2xl md:text-3xl">
                    {stat.value}
                  </p>
                  <p className="p5-stat-label mt-1 text-[9px]">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-12 lg:gap-12">
          <div
            className={`lg:col-span-4 transition-all delay-200 duration-1000 ${
              isVisible
                ? "translate-x-0 opacity-100"
                : "-translate-x-8 opacity-0"
            }`}
          >
            <p className="label-caps mb-3 text-[#e60026]">Approach</p>
            <h3 className="font-display mb-5 text-3xl text-white md:text-4xl">
              How I work
            </h3>
            <p className="mb-8 font-sans text-base leading-relaxed text-[#9a9590] md:text-lg">
              I map the problem, ship a focused first version, then iterate with
              real feedback. Every build balances business goals, user flow, and
              maintainable code.
            </p>
            <a href="#contact" className="p5-btn-primary inline-flex">
              <span className="inline-flex items-center gap-2">
                Let&apos;s work together
                <ArrowRight className="h-5 w-5" />
              </span>
            </a>
          </div>

          <div
            className={`grid grid-cols-1 gap-5 lg:col-span-8 transition-all delay-300 duration-1000 ${
              isVisible
                ? "translate-x-0 opacity-100"
                : "translate-x-8 opacity-0"
            }`}
          >
            {skills.map((skill, index) => (
              <article
                key={skill.title}
                className="p5-project-card group p-6 md:p-8"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="mb-4 flex items-start gap-5">
                  <div className="border-2 border-[#2a2a2a] bg-[#1a1a1a] p-3 text-[#e60026] transition-transform group-hover:scale-[1.03]">
                    {skill.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-display text-2xl text-white">
                      {skill.title}
                    </h3>
                    <p className="mt-2 font-sans text-sm leading-relaxed text-[#9a9590]">
                      {skill.desc}
                    </p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skill.technologies.map((tech) => (
                    <span key={tech} className="p5-tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
