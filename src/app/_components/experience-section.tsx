import { Calendar, MapPin, ArrowUpRight, Briefcase } from "lucide-react";
import React, { useState, useEffect } from "react";

const experiences = [
  {
    title: "Software Developer",
    company: "Choice Community Health",
    location: "Melbourne, Australia",
    period: "2026 - now",
    duration: "ongoing",
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
    featured: true,
  },
  {
    title: "Software Developer",
    company: "Aksara Virtual Agency",
    location: "Bali, Indonesia",
    period: "2026 - now",
    duration: "ongoing",
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
    featured: true,
  },
  {
    title: "Backend Developer",
    company: "Esa Creatives",
    location: "Tangerang, Indonesia",
    period: "2026 - now",
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
    period: "2025 - now",
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
    title: "Full Stack Developer",
    company: "DMS",
    location: "Jakarta",
    period: "2024 - 2025",
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
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
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
      className="scroll-mt-28 relative overflow-hidden bg-[#0e0e0e] py-16 text-[#e5e2e1] sm:py-24 lg:py-[160px]"
    >
      <div className="pointer-events-none absolute inset-0 opacity-[0.06]">
        <div className="absolute right-20 top-10 h-48 w-48 bg-white blur-3xl sm:h-72 sm:w-72 lg:h-96 lg:w-96" />
        <div className="absolute bottom-10 left-20 h-48 w-48 bg-[#8e9192] blur-3xl sm:h-72 sm:w-72 lg:h-96 lg:w-96" />
      </div>

      <div className="layout-shell relative z-10 max-w-[1440px]">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <div
            className={`transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <span className="label-caps mb-3 block text-[#8e9192] sm:mb-4">
              Professional journey
            </span>
            <h2 className="font-display mb-4 text-4xl font-semibold leading-none tracking-[-0.01em] sm:mb-6 sm:text-5xl md:text-6xl lg:text-7xl">
              Work
              <br />
              <span className="text-[#c4c7c8]">experience</span>
            </h2>
            <p className="mx-auto max-w-2xl px-4 text-base leading-[1.6] text-[#c4c7c8] sm:text-lg lg:text-xl">
              A timeline of professional growth, from intern developer to
              front-end full timer, building impactful solutions.
            </p>
          </div>
        </div>

        {/* Experience Cards */}
        <div className="space-y-6 sm:space-y-8">
          {experiences.map((experience, index) => (
            <div
              key={index}
              className={`group relative transition-all duration-700 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-12"
              }`}
              style={{
                transitionDelay: `${index * 200}ms`,
              }}
            >
              {/* Timeline line and dot - Hidden on mobile */}
              <div className="absolute bottom-0 left-8 top-0 hidden w-px bg-[#444748] md:block" />
              <div className="absolute left-6 top-8 hidden h-3 w-3 border-2 border-white bg-[#131313] transition-colors duration-300 group-hover:bg-white md:block">
                {experience.featured && (
                  <div className="absolute inset-1 bg-white" />
                )}
              </div>

              {/* Card content */}
              <div className="border border-[#444748] bg-[#201f1f] p-5 transition-all duration-500 hover:border-[#8e9192] sm:p-6 md:ml-20 lg:p-8">
                {/* Header section */}
                <div className="mb-4 flex flex-col sm:mb-6 md:flex-row md:items-start md:justify-between">
                  <div className="flex-1">
                    {/* Type badge and featured indicator */}
                    <div className="mb-2 flex flex-wrap items-center gap-2 sm:gap-3">
                      <Briefcase className="h-4 w-4 flex-shrink-0 text-[#8e9192] sm:h-5 sm:w-5" />
                      <span className="label-caps border border-[#444748] px-2 py-1 text-[10px] text-[#c4c7c8] sm:px-3">
                        {experience.type}
                      </span>
                      {experience.featured && (
                        <div className="h-2 w-2 bg-white" />
                      )}
                    </div>

                    {/* Title */}
                    <h3 className="font-display mb-2 text-xl font-semibold text-white transition-colors duration-300 sm:text-2xl lg:text-3xl">
                      {experience.title}
                    </h3>

                    {/* Company */}
                    <p className="mb-3 text-lg font-semibold text-[#c4c7c8] sm:text-xl">
                      {experience.company}
                    </p>

                    {/* Meta info */}
                    <div className="flex flex-wrap gap-3 text-xs text-[#8e9192] sm:gap-4 sm:text-sm">
                      <div className="flex items-center gap-1.5 sm:gap-2">
                        <Calendar className="w-3.5 h-3.5 sm:w-4 sm:h-4 flex-shrink-0" />
                        <span className="whitespace-nowrap">
                          {experience.period}
                        </span>
                      </div>
                      <div className="flex items-center gap-1.5 sm:gap-2">
                        <MapPin className="w-3.5 h-3.5 sm:w-4 sm:h-4 flex-shrink-0" />
                        <span>{experience.location}</span>
                      </div>
                      <span className="label-caps border border-[#444748] px-2 py-1 text-[10px] text-[#c4c7c8]">
                        {experience.duration}
                      </span>
                    </div>
                  </div>

                  {/* Arrow icon */}
                  <ArrowUpRight className="mt-3 h-5 w-5 flex-shrink-0 self-end text-[#8e9192] transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-white sm:h-6 sm:w-6 md:mt-0 md:self-start" />
                </div>

                {/* Description */}
                <p className="mb-5 font-sans text-sm leading-[1.6] text-[#c4c7c8] sm:mb-6 sm:text-base">
                  {experience.description}
                </p>

                {/* Achievements */}
                <div className="mb-5 sm:mb-6">
                  <h4 className="mb-2 font-sans text-sm font-semibold text-white sm:mb-3 sm:text-base">
                    Key achievements
                  </h4>
                  <ul className="space-y-2">
                    {experience.achievements.map((achievement, achIndex) => (
                      <li
                        key={achIndex}
                        className="flex items-start gap-2 text-[#c4c7c8] sm:gap-3"
                      >
                        <div className="mt-1.5 h-1 w-1 flex-shrink-0 bg-white sm:mt-2" />
                        <span className="text-xs leading-relaxed sm:text-sm">
                          {achievement}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div>
                  <h4 className="mb-2 font-sans text-sm font-semibold text-white sm:mb-3 sm:text-base">
                    Technologies used
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {experience.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="label-caps border border-[#8e9192] px-2 py-1 text-[10px] text-[#e5e2e1]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Decorative - removed colored orb per design system */}
            </div>
          ))}
        </div>

        {/* Download Resume button */}
        <div
          className={`mt-12 text-center transition-all delay-1000 duration-1000 sm:mt-16 lg:mt-20 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <button
            type="button"
            className="btn-stitch-primary group inline-flex gap-3 text-sm sm:text-base"
          >
            Download resume
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1 sm:h-5 sm:w-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
