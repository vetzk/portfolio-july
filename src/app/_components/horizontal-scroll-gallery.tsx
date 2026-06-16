"use client";

import Image from "next/image";
import P5LayeredStar from "./p5-layered-star";
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

type IntroSlide = { kind: "intro"; id: "intro" };
type ProjectSlide = { kind: "project"; id: string; project: Project };
type GallerySlide = IntroSlide | ProjectSlide;

function buildSlides(galleryProjects: Project[]): GallerySlide[] {
  const intro: IntroSlide = { kind: "intro", id: "intro" };
  const projectSlides: ProjectSlide[] = galleryProjects.map((project) => ({
    kind: "project",
    id: `project-${project.slug}`,
    project,
  }));
  return [intro, ...projectSlides];
}

function GallerySlidePanel({
  slide,
  slideNumber,
  priority,
}: {
  slide: GallerySlide;
  slideNumber: string;
  priority?: boolean;
}) {
  return (
    <>
      {slide.kind === "project" ? (
        <div className="pointer-events-none absolute inset-0">
          <Image
            src={slide.project.image}
            alt={`Cover preview for ${slide.project.title}`}
            fill
            className="object-cover object-top opacity-50"
            sizes="100vw"
            priority={priority}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/85 to-[#0a0a0a]/40" />
          <div className="absolute inset-0 p5-halftone opacity-30" />
        </div>
      ) : (
        <>
          <div className="pointer-events-none absolute inset-0 p5-halftone opacity-40" />
          <P5LayeredStar
            className="pointer-events-none absolute right-4 top-16 opacity-30 md:bottom-36"
            size={140}
          />
        </>
      )}

      <div className="p5-gallery-panel relative z-10 max-w-xl p-6 md:max-w-2xl md:p-8">
        {slide.kind === "intro" ? (
          <>
            <p className="label-caps mb-3 text-[#e60026]">Case files</p>
            <h2 className="font-display text-4xl leading-[0.95] text-white md:text-5xl lg:text-6xl">
              FEATURED
              <br />
              <span className="p5-text-outline">WORK.</span>
            </h2>
            <p className="mt-4 max-w-md font-sans text-base leading-relaxed text-[#9a9590] md:text-lg">
              Featured projects from the portfolio — scroll on desktop for the
              full case-file gallery.
            </p>
          </>
        ) : (
          <>
            <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
              <span className="font-display text-4xl text-[#e60026] md:text-5xl">
                {slideNumber}
              </span>
              {slide.project.status === "Live" ? (
                <span className="p5-badge-shipped">Shipped</span>
              ) : (
                <span className="p5-badge-build">In build</span>
              )}
            </div>
            <p className="label-caps mb-2 text-[#9a9590]">
              {getProjectType(slide.project.size)} · {slide.project.year}
            </p>
            <h2 className="font-display text-2xl text-white sm:text-3xl md:text-4xl lg:text-5xl">
              {slide.project.title}
            </h2>
            <p className="mt-4 max-w-lg font-sans text-sm leading-relaxed text-[#9a9590] md:text-base">
              {getImpactLine(slide.project.description)}
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {slide.project.tech.slice(0, 5).map((tech) => (
                <span key={tech} className="p5-tech-tag">
                  {tech}
                </span>
              ))}
            </div>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                href={`/projects/${slide.project.slug}`}
                className="p5-open-link"
              >
                Open
                <ArrowUpRight className="h-4 w-4" />
              </Link>
              <Link
                href={`/projects/${slide.project.slug}`}
                className="p5-btn-primary"
              >
                <span className="inline-flex items-center gap-2">
                  Case study
                  <ArrowUpRight className="h-4 w-4" />
                </span>
              </Link>
              {slide.project.link ? (
                <a
                  href={slide.project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p5-open-link text-[#9a9590] hover:text-[#e60026]"
                >
                  Live
                  <ExternalLink className="h-4 w-4" />
                </a>
              ) : null}
            </div>
          </>
        )}
      </div>
    </>
  );
}

export default function HorizontalScrollGallery() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  const slides = useMemo(() => buildSlides(getGalleryProjects()), []);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    const track = trackRef.current;
    if (!section || !track) return;

    const desktopMedia = window.matchMedia("(min-width: 1024px)");
    if (!desktopMedia.matches) return;

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

    const onResize = () => ScrollTrigger.refresh();
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("resize", onResize);
      ctx.revert();
    };
  }, [slides.length]);

  const firstProjectIndex = slides.findIndex((s) => s.kind === "project");

  const getSlideNumber = (index: number, slide: GallerySlide) =>
    slide.kind === "intro"
      ? "00"
      : String(
          slides.slice(0, index + 1).filter((s) => s.kind === "project").length,
        ).padStart(2, "0");

  return (
    <section
      id="gallery"
      className="relative w-full overflow-x-hidden bg-[#0a0a0a] text-[#f4f0e6]"
      aria-label="Featured project gallery"
    >
      <div className="flex flex-col lg:hidden">
        {slides.map((slide, index) => (
          <article
            key={`mobile-${slide.id}`}
            className="relative flex min-h-[70dvh] w-full flex-col justify-end border-b-[3px] border-[#111111] bg-[#0a0a0a] p-6 md:min-h-[80dvh] md:p-10"
          >
            <GallerySlidePanel
              slide={slide}
              slideNumber={getSlideNumber(index, slide)}
              priority={index === firstProjectIndex}
            />
          </article>
        ))}
      </div>

      <div ref={sectionRef} className="hidden overflow-x-hidden lg:block">
        <div
          ref={trackRef}
          className="flex h-[100dvh] w-max touch-pan-y will-change-transform"
        >
          {slides.map((slide, index) => (
            <article
              key={`desktop-${slide.id}`}
              className="relative flex h-full w-[100vw] shrink-0 flex-col justify-end border-r-[3px] border-[#111111] bg-[#0a0a0a] p-6 md:p-10 lg:p-14"
            >
              <GallerySlidePanel
                slide={slide}
                slideNumber={getSlideNumber(index, slide)}
                priority={index === firstProjectIndex}
              />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
