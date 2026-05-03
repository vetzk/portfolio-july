"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, ExternalLink } from "lucide-react";
import { useLayoutEffect, useMemo, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  type Project,
  getGalleryProjects,
  getImpactLine,
  getProjectType,
} from "./project-data";

gsap.registerPlugin(ScrollTrigger);

type MoodSlide = {
  kind: "mood";
  id: string;
  title: string;
  subtitle: string;
  image: string;
  alt: string;
};

type IntroSlide = {
  kind: "intro";
  id: "intro";
};

type ProjectSlide = {
  kind: "project";
  id: string;
  project: Project;
};

type GallerySlide = IntroSlide | ProjectSlide | MoodSlide;

const FALLBACK_MOOD: MoodSlide[] = [
  {
    kind: "mood",
    id: "orb",
    title: "Orb",
    subtitle: "Hero still — cinematic lighting.",
    image: "/hero-cinematic-orb.png",
    alt: "Monochrome abstract orb with glow",
  },
  {
    kind: "mood",
    id: "waves",
    title: "Waves",
    subtitle: "Contact luminous waves.",
    image: "/contact-luminous-waves.png",
    alt: "Luminous wave abstract",
  },
];

function buildSlides(galleryProjects: Project[]): GallerySlide[] {
  const intro: IntroSlide = { kind: "intro", id: "intro" };

  if (galleryProjects.length === 0) {
    return [
      intro,
      ...FALLBACK_MOOD.map((m, i) => ({
        ...m,
        id: `${m.id}-fb-${i}`,
      })),
    ];
  }

  const projectSlides: ProjectSlide[] = galleryProjects.map((project) => ({
    kind: "project",
    id: `project-${project.slug}`,
    project,
  }));

  return [intro, ...projectSlides];
}

export default function HorizontalScrollGallery() {
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  const slides = useMemo(() => buildSlides(getGalleryProjects()), []);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    const track = trackRef.current;
    if (!section || !track) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const scrollDistance = () =>
      Math.max(track.scrollWidth - window.innerWidth, 0);

    const snapIncrement = 1 / Math.max(slides.length - 1, 1);

    const ctx = gsap.context(() => {
      gsap.to(track, {
        x: () => -scrollDistance(),
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: () => `+=${scrollDistance()}`,
          pin: true,
          scrub: 1,
          invalidateOnRefresh: true,
          snap: {
            snapTo: snapIncrement,
            duration: { min: 0.2, max: 0.45 },
            delay: 0.05,
            ease: "power2.inOut",
          },
        },
      });
    }, section);

    const onResize = () => {
      ScrollTrigger.refresh();
    };
    window.addEventListener("resize", onResize);

    return () => {
      window.removeEventListener("resize", onResize);
      ctx.revert();
    };
  }, [slides.length]);

  const firstProjectIndex = slides.findIndex((s) => s.kind === "project");

  return (
    <section
      ref={sectionRef}
      id="gallery"
      className="relative bg-[#050505] text-[#e5e2e1]"
      aria-label="Horizontal gallery"
    >
      <div
        ref={trackRef}
        className="flex h-[100dvh] w-max touch-pan-y motion-reduce:overflow-x-auto motion-reduce:pb-4"
      >
        {slides.map((slide, index) => (
          <article
            key={slide.id}
            className="relative flex h-full w-screen shrink-0 flex-col justify-end border-r border-neutral-900 bg-[#0a0a0a] p-6 md:p-10 lg:p-14"
          >
            {slide.kind === "mood" ? (
              <div className="pointer-events-none absolute inset-0">
                <Image
                  src={slide.image}
                  alt={slide.alt}
                  fill
                  className="object-cover opacity-90"
                  sizes="100vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/70 to-transparent" />
              </div>
            ) : slide.kind === "project" ? (
              <div className="pointer-events-none absolute inset-0">
                <Image
                  src={slide.project.image}
                  alt={`Cover preview for ${slide.project.title}`}
                  fill
                  className="object-cover object-top opacity-95"
                  sizes="100vw"
                  priority={index === firstProjectIndex}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/80 to-[#050505]/25" />
              </div>
            ) : (
              <div className="pointer-events-none absolute inset-0 opacity-[0.06]">
                <div
                  className="absolute inset-0"
                  style={{
                    backgroundImage: `radial-gradient(circle at 1px 1px, #e5e2e1 1px, transparent 0)`,
                    backgroundSize: "40px 40px",
                  }}
                />
              </div>
            )}

            <div className="relative z-10 max-w-xl">
              {slide.kind === "intro" && (
                <>
                  <p className="label-caps mb-3 text-[#8e9192]">Gallery</p>
                  <h2 className="font-display text-4xl font-semibold tracking-[-0.02em] text-white md:text-5xl lg:text-6xl">
                    Selected work
                  </h2>
                  <p className="mt-4 max-w-md font-sans text-base leading-relaxed text-[#c4c7c8] md:text-lg">
                    Scroll sideways — each panel is a featured project from the
                    portfolio (same flags as in Works).
                  </p>
                </>
              )}

              {slide.kind === "project" && (
                <>
                  <p className="label-caps mb-3 text-[#8e9192]">
                    {getProjectType(slide.project.size)} · {slide.project.year}
                  </p>
                  <h2 className="font-display text-3xl font-semibold tracking-[-0.02em] text-white sm:text-4xl md:text-5xl lg:text-6xl">
                    {slide.project.title}
                  </h2>
                  <p className="mt-4 max-w-lg font-sans text-base leading-relaxed text-[#c4c7c8] md:text-lg">
                    {getImpactLine(slide.project.description)}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {slide.project.tech.slice(0, 5).map((tech) => (
                      <span
                        key={tech}
                        className="label-caps border border-[#8e9192] px-2 py-1 text-[10px] text-[#c4c7c8]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="mt-8 flex flex-wrap gap-4">
                    <Link
                      href={`/projects/${slide.project.slug}`}
                      className="btn-stitch-primary group inline-flex gap-2"
                    >
                      View case study
                      <ArrowUpRight className="h-5 w-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </Link>
                    {slide.project.link ? (
                      <a
                        href={slide.project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 border border-[#444748] px-5 py-3 font-display text-[11px] font-medium uppercase tracking-[0.2em] text-white transition-colors hover:border-[#8e9192] hover:text-white"
                      >
                        Live site
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    ) : null}
                  </div>
                </>
              )}

              {slide.kind === "mood" && (
                <>
                  <p className="label-caps mb-3 text-[#8e9192]">
                    {String(index).padStart(2, "0")}
                  </p>
                  <h2 className="font-display text-4xl font-semibold tracking-[-0.02em] text-white md:text-5xl lg:text-6xl">
                    {slide.title}
                  </h2>
                  <p className="mt-4 max-w-md font-sans text-base leading-relaxed text-[#c4c7c8] md:text-lg">
                    {slide.subtitle}
                  </p>
                </>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
