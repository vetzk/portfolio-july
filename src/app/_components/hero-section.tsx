"use client";

import { ArrowRight, Sparkles, Target, TimerReset } from "lucide-react";
import { useEffect, useState } from "react";
import P5LayeredStar from "./p5-layered-star";

const MARQUEE_ITEMS = [
  "TypeScript",
  "React",
  "Next.js",
  "Laravel",
  "Node.js",
  "PostgreSQL",
  "Tailwind CSS",
  "Framer Motion",
  "AI Workflows",
  "Cursor",
];

const QUICK_LINKS = [
  { label: "Case files", href: "#gallery" },
  { label: "Work", href: "#works" },
  { label: "Contact", href: "#contact" },
];

function formatClock(date: Date) {
  return date.toLocaleTimeString("en-GB", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
  });
}

export default function HeroSection() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const tick = () => setTime(formatClock(new Date()));
    tick();
    const id = window.setInterval(tick, 1000);
    return () => window.clearInterval(id);
  }, []);

  const marquee = [...MARQUEE_ITEMS, ...MARQUEE_ITEMS];

  return (
    <section
      id="home"
      className="relative min-h-svh overflow-hidden bg-[#0a0a0a] pt-24 md:pt-28"
    >
      <div className="pointer-events-none absolute inset-0 p5-halftone opacity-40" />
      <P5LayeredStar
        className="pointer-events-none absolute -right-6 top-20 opacity-100 md:-right-2 md:top-12"
        size={260}
      />
      <P5LayeredStar
        className="pointer-events-none absolute -left-10 bottom-28 opacity-30 md:bottom-36"
        size={140}
      />

      <div className="layout-shell relative z-10 pb-10 pt-4 md:pb-14">
        <div className="hero-fade-up mb-8 flex flex-wrap items-center gap-4 [animation-delay:60ms]">
          <div className="p5-status-bar">
            <span className="inline-block h-2 w-2 rounded-full bg-[#e60026] animate-pulse" />
            Open for projects
            {time ? <span className="text-white/70">• {time} WIB</span> : null}
          </div>
        </div>

        <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-7">
            <p className="hero-fade-up label-caps mb-4 text-[#e60026] [animation-delay:120ms]">
              Full-stack engineer • Surabaya / Remote
            </p>

            <h1 className="hero-fade-up font-display leading-[0.92] [animation-delay:180ms]">
              <span className="block text-[clamp(2.75rem,8vw,5.5rem)] text-white">
                I BUILD PRODUCTS
              </span>
              <span className="block text-[clamp(2.75rem,8vw,5.5rem)] text-white">
                THAT <span className="p5-text-outline">SHIP.</span>
              </span>
            </h1>

            <p className="hero-fade-up mt-6 max-w-xl font-sans text-base leading-relaxed text-[#9a9590] md:text-lg [animation-delay:240ms]">
              Alfredo Vetsera — full-stack developer building websites, CMS
              platforms, booking systems, and AI-assisted workflows for brands
              that need speed without sacrificing craft.
            </p>

            <div className="hero-fade-up mt-8 flex flex-wrap gap-4 [animation-delay:300ms]">
              <a href="#works" className="p5-btn-primary">
                <span className="inline-flex items-center gap-2">
                  View work
                  <ArrowRight className="h-4 w-4" />
                </span>
              </a>
              <a href="#contact" className="p5-btn-outline">
                <span>Start a project</span>
              </a>
            </div>
          </div>

          <div className="hero-fade-up lg:col-span-5 [animation-delay:360ms]">
            <div className="p5-terminal-panel relative p-6 md:p-8">
              <div className="relative z-10">
                <div className="mb-5 flex items-start justify-between gap-4">
                  <div>
                    <p className="label-caps text-[#9a9590]">Now building</p>
                    <p className="font-display text-2xl text-white">
                      Active builds
                    </p>
                  </div>
                  <div className="border-2 border-[#e60026] bg-[#111111] px-3 py-1 font-display text-xs uppercase tracking-wider text-[#e60026]">
                    In progress
                  </div>
                </div>

                <h2 className="font-display text-3xl leading-none text-white md:text-4xl">
                  Three stacks.
                  <br />
                  One product.
                </h2>
                <p className="mt-2 font-display text-sm uppercase tracking-[0.2em] text-[#e60026]">
                  Flutter · Backend · CMS
                </p>

                <div className="mt-6 space-y-4 border-t-2 border-[#2a2a2a] pt-5">
                  <div className="flex items-start gap-3">
                    <Sparkles className="mt-0.5 h-4 w-4 shrink-0 text-[#e60026]" />
                    <div>
                      <p className="font-display text-sm text-white">
                        Baking Story
                      </p>
                      <p className="mt-0.5 font-sans text-xs leading-relaxed text-[#9a9590]">
                        Flutter mobile app — recipes, stories, and community for
                        bakers
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Target className="mt-0.5 h-4 w-4 shrink-0 text-[#e60026]" />
                    <div>
                      <p className="font-display text-sm text-white">
                        Backend API
                      </p>
                      <p className="mt-0.5 font-sans text-xs leading-relaxed text-[#9a9590]">
                        REST API powering authentication, content, and user data
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <TimerReset className="mt-0.5 h-4 w-4 shrink-0 text-[#e60026]" />
                    <div>
                      <p className="font-display text-sm text-white">CMS</p>
                      <p className="mt-0.5 font-sans text-xs leading-relaxed text-[#9a9590]">
                        Content management system for recipes, categories, and
                        media
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative z-10 mt-6 h-3 w-full p5-hazard-stripe-animated" />
            </div>
          </div>
        </div>

        <div className="hero-fade-up mt-12 flex flex-wrap gap-3 [animation-delay:420ms]">
          {QUICK_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="p5-filter-btn inline-flex items-center gap-2"
            >
              {link.label}
              <ArrowRight className="h-3.5 w-3.5" />
            </a>
          ))}
        </div>
      </div>

      <div className="hero-fade-up relative z-10 mt-4 w-full [animation-delay:480ms]">
        <div className="p5-marquee-hazard" aria-hidden>
          <div className="p5-marquee-hazard-inner">
            <div className="p5-marquee-hazard-track">
              {marquee.map((item, index) => (
                <span
                  key={`${item}-${index}`}
                  className="mx-8 whitespace-nowrap"
                >
                  ★ {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .hero-fade-up {
          opacity: 0;
          transform: translateY(16px);
          animation: heroFadeUp 680ms cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        @media (prefers-reduced-motion: reduce) {
          .hero-fade-up {
            opacity: 1;
            transform: none;
            animation: none;
          }
        }

        @keyframes heroFadeUp {
          0% {
            opacity: 0;
            transform: translateY(16px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
}
