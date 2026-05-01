import {
  Code,
  Palette,
  Zap,
  ArrowRight,
  Star,
  Users,
  Award,
} from "lucide-react";
import React, { useState, useEffect } from "react";

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
    value: "5+",
    label: "Projects Completed",
  },
  {
    icon: <Users className="h-6 w-6" />,
    value: "5+",
    label: "Happy Clients",
  },
  {
    icon: <Award className="h-6 w-6" />,
    value: "1+",
    label: "Years Experience",
  },
];

export default function AboutSection() {
  const [hoveredSkill, setHoveredSkill] = useState<number | null>(null);
  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 },
    );

    const section = document.getElementById("about");
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="about"
      className="scroll-mt-28 relative overflow-hidden py-24 text-[#e5e2e1] md:py-32 lg:py-[160px]"
    >
      <div className="absolute inset-0 opacity-[0.04]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, #e5e2e1 1px, transparent 0)`,
            backgroundSize: "48px 48px",
            animation: "float 20s ease-in-out infinite",
          }}
        />
      </div>

      <div className="layout-shell relative z-10">
        <div
          className={`grid grid-cols-1 gap-12 md:grid-cols-12 transition-all duration-1000 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <div className="md:col-span-4">
            <h2 className="font-display sticky top-32 text-3xl font-semibold tracking-[-0.01em] text-white md:text-[32px] md:leading-[1.3]">
              The brief
            </h2>
          </div>
          <div className="md:col-span-7 md:col-start-6">
            <p className="mb-12 font-sans text-lg leading-[1.6] tracking-[0.02em] text-[#c4c7c8]">
              I&apos;m a multidisciplinary creative who believes in the power of
              combining
              <span className="font-semibold text-white">
                {" "}
                aesthetic beauty
              </span>{" "}
              with
              <span className="font-semibold text-white">
                {" "}
                functional innovation
              </span>
              . My work spans digital art, interactive installations, and
              cutting-edge web experiences.
            </p>
            <p className="font-sans text-lg leading-[1.6] tracking-[0.02em] text-[#c4c7c8]">
              I&apos;m passionate about creating solutions that not only solve
              problems but inspire and delight users—from product sites to
              internal tools and everything in between.
            </p>
          </div>
        </div>

        <div
          className={`relative z-10 mb-20 mt-20 md:mb-28 md:mt-28 transition-all delay-200 duration-1000 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="image-zoom-container aspect-21/9 w-full">
            <video
              aria-label="Abstract monochrome prism motion"
              autoPlay
              loop
              muted
              className="h-full w-full object-cover bg-red-200"
              playsInline
              poster="/about-editorial-void.png"
              preload="metadata"
            >
              <source src="/prism.mp4" type="video/mp4" />
            </video>
          </div>
        </div>

        <div className="mb-16 md:mb-24">
          <p
            className={`label-caps mb-4 text-center text-[#8e9192] transition-all duration-1000 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-8 opacity-0"
            }`}
          >
            Capabilities
          </p>
          <h2
            className={`font-display text-center text-4xl font-semibold tracking-[-0.01em] text-white transition-all delay-100 duration-1000 md:text-5xl ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-8 opacity-0"
            }`}
          >
            How I work
          </h2>
          <div
            className={`mx-auto mt-6 h-px max-w-xs bg-neutral-900 transition-all delay-200 duration-1000 ${
              isVisible ? "w-full max-w-md opacity-100" : "w-0 opacity-0"
            }`}
          />
        </div>

        <div className="grid grid-cols-1 items-start gap-16 lg:grid-cols-2 lg:gap-24">
          <div
            className={`transition-all delay-200 duration-1000 ${
              isVisible
                ? "translate-x-0 opacity-100"
                : "-translate-x-8 opacity-0"
            }`}
          >
            <p className="mb-8 text-2xl leading-[1.6] tracking-[0.02em] text-[#c4c7c8]">
              I&apos;m a multidisciplinary creative who believes in the power of
              combining
              <span className="font-semibold text-white">
                {" "}
                aesthetic beauty
              </span>{" "}
              with
              <span className="font-semibold text-white">
                {" "}
                functional innovation
              </span>
              .
            </p>

            <p className="mb-10 text-lg leading-[1.6] tracking-[0.01em] text-[#8e9192]">
              My work spans digital art, interactive installations, and
              cutting-edge web experiences. I&apos;m passionate about creating
              solutions that not only solve problems but inspire and delight
              users.
            </p>
            <div className="mb-10 grid grid-cols-3 gap-4">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className={`border border-[#444748] bg-[#201f1f] p-4 text-center transition-all duration-700 ${
                    isVisible
                      ? "translate-y-0 opacity-100"
                      : "translate-y-4 opacity-0"
                  }`}
                  style={{
                    transitionDelay: `${600 + index * 100}ms`,
                  }}
                >
                  <div className="mb-2 flex justify-center text-[#8e9192]">
                    {stat.icon}
                  </div>
                  <div className="mb-1 text-2xl font-bold text-white">
                    {stat.value}
                  </div>
                  <div className="text-xs text-[#8e9192]">{stat.label}</div>
                </div>
              ))}
            </div>
            <a
              href="#contact"
              className="btn-stitch-primary group inline-flex gap-3"
            >
              Let&apos;s work together
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
          <div
            className={`transition-all delay-300 duration-1000 ${
              isVisible
                ? "translate-x-0 opacity-100"
                : "translate-x-8 opacity-0"
            }`}
          >
            <div className="grid grid-cols-1 gap-6">
              {skills.map((skill, index) => (
                <div
                  key={index}
                  className="group relative cursor-pointer border border-[#444748] bg-[#201f1f] p-8 transition-all duration-500 hover:border-[#8e9192]"
                  onMouseEnter={() => setHoveredSkill(index)}
                  onMouseLeave={() => setHoveredSkill(null)}
                  style={{
                    transitionDelay: `${index * 100}ms`,
                    boxShadow:
                      hoveredSkill === index
                        ? "0 0 0 1px rgba(255,255,255,0.06)"
                        : undefined,
                  }}
                >
                  <div className="relative z-10">
                    <div className="mb-4 flex items-start gap-6">
                      <div className="border border-[#444748] bg-[#2a2a2a] p-3 text-white transition-transform duration-300 group-hover:scale-[1.02]">
                        {skill.icon}
                      </div>
                      <div className="flex-1">
                        <h3 className="font-display mb-3 text-2xl font-semibold text-white">
                          {skill.title}
                        </h3>
                        <p className="leading-[1.6] tracking-[0.01em] text-[#c4c7c8]">
                          {skill.desc}
                        </p>
                      </div>
                    </div>

                    <div className="mt-4 flex flex-wrap gap-2">
                      {skill.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="label-caps border border-[#8e9192] px-2 py-1 text-[10px] text-[#c4c7c8]"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-10px) rotate(1deg);
          }
        }
      `}</style>
    </section>
  );
}
