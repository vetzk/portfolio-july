"use client";

import {
  Bot,
  BrainCircuit,
  CheckCircle2,
  Code2,
  Layers3,
  Sparkles,
  Workflow,
} from "lucide-react";
import { useEffect, useState } from "react";

const aiCapabilities = [
  {
    icon: <Code2 className="h-7 w-7" />,
    title: "AI-assisted engineering",
    description:
      "Using AI pair-programming to move faster through architecture, refactors, debugging, and test coverage while keeping human review in the loop.",
    proof: ["Cursor workflow", "Code review loops", "Type-safe implementation"],
  },
  {
    icon: <BrainCircuit className="h-7 w-7" />,
    title: "Product AI features",
    description:
      "Designing practical AI experiences such as internal assistants, smart search, content generation, summaries, and decision-support tools.",
    proof: ["Chat UX", "RAG-ready flows", "Structured outputs"],
  },
  {
    icon: <Workflow className="h-7 w-7" />,
    title: "Automation workflows",
    description:
      "Turning repetitive product, admin, and content tasks into guided workflows that reduce handoff friction and speed up delivery.",
    proof: ["Brief extraction", "QA checklists", "Admin copilots"],
  },
];

const workflowSteps = [
  "Research the domain and user intent",
  "Prototype fast with AI-generated options",
  "Validate output against real product constraints",
  "Refine the UX, code, and edge cases manually",
  "Ship with docs, QA notes, and maintainable patterns",
];

const toolchain = [
  "Cursor", "ChatGPT", "Claude", "OpenAI API",
  "Vercel AI SDK", "Supabase", "Next.js", "TypeScript",
];

export default function AiExpertiseSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: [0, 0.1, 0.2], rootMargin: "0px 0px -20% 0px" },
    );
    const section = document.getElementById("ai");
    if (section) observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="ai"
      className="scroll-mt-28 relative overflow-hidden bg-[#0a0a0a] py-24 text-[#f4f0e6] md:py-32 lg:py-[160px]"
    >
      <div className="pointer-events-none absolute inset-0 p5-halftone opacity-25" />

      <div className="layout-shell relative z-10 max-w-[1440px]">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
          <div
            className={`lg:col-span-5 transition-all duration-1000 ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
          >
            <div className="mb-6 flex flex-wrap items-center gap-4">
              <span className="p5-section-tag">AI workflow</span>
              <span className="label-caps text-[#e60026]">Leverage</span>
            </div>
            <h2 className="font-display text-4xl leading-[0.95] text-white md:text-6xl lg:text-7xl">
              BUILDING WITH
              <br />
              <span className="p5-text-outline">AI.</span>
            </h2>
            <p className="mt-6 max-w-xl font-sans text-base leading-relaxed text-[#9a9590] md:text-lg">
              AI as a practical delivery layer — faster exploration, sharper
              implementation, and better product workflows without skipping
              engineering judgment.
            </p>

            <div className="p5-contact-panel mt-10 p-6 md:p-8">
              <div className="mb-5 flex items-center gap-3">
                <div className="border-2 border-[#2a2a2a] bg-[#1a1a1a] p-3 text-[#e60026]">
                  <Layers3 className="h-6 w-6" />
                </div>
                <div>
                  <p className="label-caps text-[#9a9590]">Process</p>
                  <h3 className="font-display text-xl text-white">
                    Human-led, AI-accelerated
                  </h3>
                </div>
              </div>
              <div className="space-y-3">
                {workflowSteps.map((step, index) => (
                  <div
                    key={step}
                    className="flex items-start gap-3 font-sans text-sm leading-relaxed text-[#9a9590]"
                  >
                    <span className="font-display text-[#e60026]">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span>{step}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
              {aiCapabilities.map((capability, index) => (
                <article
                  key={capability.title}
                  className={`p5-project-card p-6 md:p-7 ${
                    isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                  } transition-all duration-700`}
                  style={{ transitionDelay: `${150 + index * 120}ms` }}
                >
                  <div className="mb-5 inline-flex border-2 border-[#2a2a2a] bg-[#1a1a1a] p-3 text-[#e60026]">
                    {capability.icon}
                  </div>
                  <h3 className="font-display mb-3 text-xl text-white md:text-2xl">
                    {capability.title}
                  </h3>
                  <p className="mb-5 font-sans text-sm leading-relaxed text-[#9a9590]">
                    {capability.description}
                  </p>
                  <div className="space-y-2">
                    {capability.proof.map((item) => (
                      <div
                        key={item}
                        className="flex items-center gap-2 font-sans text-xs text-[#9a9590]"
                      >
                        <CheckCircle2 className="h-4 w-4 text-[#e60026]" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </article>
              ))}
            </div>

            <div
              className={`p5-terminal-panel mt-6 p-6 transition-all delay-500 duration-1000 md:p-8 ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
              }`}
            >
              <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
                <div className="max-w-xl">
                  <div className="mb-4 flex items-center gap-3">
                    <Bot className="h-5 w-5 text-[#e60026]" />
                    <span className="label-caps text-[#9a9590]">
                      Working toolkit
                    </span>
                  </div>
                  <h3 className="font-display text-2xl text-white md:text-3xl">
                    From prompt to shipped product
                  </h3>
                  <p className="mt-3 font-sans leading-relaxed text-[#9a9590]">
                    The goal is not to replace craft. It is to tighten the loop
                    between idea, prototype, review, and launch.
                  </p>
                </div>
                <div className="flex shrink-0 items-center gap-2 border-2 border-[#e60026] bg-[#111111] px-4 py-3">
                  <Sparkles className="h-5 w-5 text-[#e60026]" />
                  <span className="label-caps text-white">AI-native</span>
                </div>
              </div>

              <div className="mt-8 flex flex-wrap gap-2">
                {toolchain.map((tool) => (
                  <span key={tool} className="p5-tech-tag">
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
