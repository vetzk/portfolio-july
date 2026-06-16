"use client";

import Link from "next/link";
import {
  ArrowUpRight,
  CheckCircle2,
  ClipboardCopy,
  Lightbulb,
  Sparkles,
  WandSparkles,
} from "lucide-react";
import { useMemo, useState } from "react";

type BriefTemplate = {
  key: string;
  label: string;
  projectType: string;
  timeline: string;
  stack: string[];
  features: string[];
  reference: {
    title: string;
    slug: string;
  };
};

const briefTemplates: BriefTemplate[] = [
  {
    key: "company-profile",
    label: "Company profile",
    projectType: "Trust-building brand website",
    timeline: "2-4 weeks",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "CMS-ready content"],
    features: [
      "Clear service pages and conversion-focused contact flow",
      "Reusable content sections for team, values, and case studies",
      "SEO-ready page structure with performance-first implementation",
    ],
    reference: {
      title: "Esa Creative Website",
      slug: "esa-creative-website",
    },
  },
  {
    key: "ecommerce",
    label: "E-commerce",
    projectType: "Product catalog and ordering experience",
    timeline: "4-8 weeks",
    stack: ["Next.js", "Zod", "Zustand", "Laravel API"],
    features: [
      "Product catalog with search, categories, and detailed product pages",
      "Cart and checkout flow designed around buyer confidence",
      "Admin-ready product and order management structure",
    ],
    reference: {
      title: "Toros Farm Indonesia - E-commerce Website",
      slug: "toros-farm-ecommerce",
    },
  },
  {
    key: "cms",
    label: "CMS / Admin",
    projectType: "Internal content and operations dashboard",
    timeline: "4-6 weeks",
    stack: ["Next.js", "Tiptap", "dnd-kit", "Laravel", "Zod"],
    features: [
      "Role-aware dashboard for managing core operational data",
      "Structured editor flows for content, product, or campaign updates",
      "Validation, audit-friendly forms, and scalable API boundaries",
    ],
    reference: {
      title: "Niko Electronic CMS",
      slug: "niko-electronic-cms",
    },
  },
  {
    key: "booking",
    label: "Booking system",
    projectType: "Scheduling and queue management platform",
    timeline: "6-10 weeks",
    stack: ["Laravel", "Next.js", "Pusher.js", "Twilio", "Zod"],
    features: [
      "Appointment booking with user-friendly availability states",
      "Queue, session, or status updates with real-time feedback",
      "Notification hooks for reminders, confirmations, and admin alerts",
    ],
    reference: {
      title: "Sinshe Shaolin",
      slug: "sinshe-shaolin",
    },
  },
];

const sampleIdeas = [
  "A growing furniture brand needs a premium website with product highlights and WhatsApp inquiries.",
  "A clinic wants patients to book sessions online and receive live queue updates.",
  "A distributor needs an admin panel to manage products, campaigns, and content.",
];

function summarizeIdea(idea: string, template: BriefTemplate) {
  const normalized = idea.trim();

  if (!normalized) {
    return `A ${template.label.toLowerCase()} concept that needs clearer scope, feature priorities, and a launch-ready implementation plan.`;
  }

  return normalized.length > 180
    ? `${normalized.slice(0, 180).trim()}...`
    : normalized;
}

export default function AiPlaygroundSection() {
  const [selectedKey, setSelectedKey] = useState(briefTemplates[0].key);
  const [idea, setIdea] = useState(sampleIdeas[0]);
  const [copied, setCopied] = useState(false);

  const selectedTemplate = useMemo(
    () =>
      briefTemplates.find((template) => template.key === selectedKey) ??
      briefTemplates[0],
    [selectedKey],
  );

  const generatedBrief = useMemo(() => {
    const summary = summarizeIdea(idea, selectedTemplate);

    return {
      summary,
      goal: `Turn the request into a ${selectedTemplate.projectType.toLowerCase()} with a clean user journey, maintainable codebase, and measurable handoff plan.`,
      features: selectedTemplate.features,
      stack: selectedTemplate.stack,
      timeline: selectedTemplate.timeline,
      nextSteps: [
        "Confirm target users, success metrics, and launch constraints",
        "Map the first release into must-have and later-phase features",
        "Create a clickable flow before committing to production build",
      ],
    };
  }, [idea, selectedTemplate]);

  const briefText = useMemo(
    () =>
      [
        `Project type: ${selectedTemplate.projectType}`,
        `Summary: ${generatedBrief.summary}`,
        `Goal: ${generatedBrief.goal}`,
        `Timeline: ${generatedBrief.timeline}`,
        `Stack: ${generatedBrief.stack.join(", ")}`,
        `Core features: ${generatedBrief.features.join("; ")}`,
        `Next steps: ${generatedBrief.nextSteps.join("; ")}`,
      ].join("\n"),
    [generatedBrief, selectedTemplate],
  );

  const copyBrief = async () => {
    try {
      await navigator.clipboard.writeText(briefText);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1600);
    } catch {
      setCopied(false);
    }
  };

  return (
    <section
      id="playground"
      className="scroll-mt-28 relative overflow-hidden bg-[#0a0a0a] py-24 text-[#f4f0e6] md:py-32 lg:py-[160px]"
    >
      <div className="pointer-events-none absolute inset-0 p5-halftone opacity-20" />

      <div className="layout-shell relative z-10 max-w-[1440px]">
        <div className="mb-12 max-w-3xl md:mb-16">
          <div className="mb-6 flex flex-wrap items-center gap-4">
            <span className="p5-section-tag">AI lab</span>
            <span className="label-caps text-[#e60026]">Playground</span>
          </div>
          <h2 className="font-display text-4xl leading-[0.95] text-white md:text-6xl lg:text-7xl">
            CLIENT BRIEF
            <br />
            <span className="p5-text-outline">GENERATOR.</span>
          </h2>
          <p className="mt-6 font-sans text-base leading-relaxed text-[#9a9590] md:text-lg">
            A small interactive demo of how I turn a rough client idea into
            scope, features, stack direction, and next steps.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-12 lg:gap-8">
          <div className="p5-terminal-panel p-6 lg:col-span-5 lg:p-8">
            <div className="mb-6 flex items-center justify-between gap-4">
              <div>
                <p className="label-caps text-[#9a9590]">Input</p>
                <h3 className="font-display mt-2 text-2xl text-white">
                  Describe the idea
                </h3>
              </div>
              <div className="border-2 border-[#2a2a2a] bg-[#1a1a1a] p-3 text-[#e60026]">
                <WandSparkles className="h-6 w-6" />
              </div>
            </div>

            <div className="mb-6 grid grid-cols-2 gap-2">
              {briefTemplates.map((template) => {
                const active = selectedKey === template.key;

                return (
                  <button
                    key={template.key}
                    type="button"
                    onClick={() => setSelectedKey(template.key)}
                    className={`border-2 px-3 py-3 text-left font-display text-[11px] uppercase tracking-[0.16em] transition-colors ${
                      active
                        ? "border-[#111111] bg-[#e60026] text-white"
                        : "border-[#2a2a2a] text-[#9a9590] hover:border-[#e60026] hover:text-white"
                    }`}
                  >
                    {template.label}
                  </button>
                );
              })}
            </div>

            <textarea
              value={idea}
              onChange={(event) => setIdea(event.target.value)}
              className="min-h-44 w-full resize-none border-2 border-[#2a2a2a] bg-[#0a0a0a] p-4 font-sans text-sm leading-relaxed text-[#f4f0e6] outline-none transition-colors placeholder:text-[#9a9590] focus:border-[#e60026]"
              placeholder="Example: We need a modern website for a local business that can explain services, collect leads, and be easy to update."
            />

            <div className="mt-5">
              <p className="label-caps mb-3 text-[#9a9590]">Try a prompt</p>
              <div className="space-y-2">
                {sampleIdeas.map((sample) => (
                  <button
                    key={sample}
                    type="button"
                    onClick={() => setIdea(sample)}
                    className="flex w-full items-start gap-3 border-2 border-[#2a2a2a] px-4 py-3 text-left font-sans text-sm leading-relaxed text-[#9a9590] transition-colors hover:border-[#e60026] hover:text-white"
                  >
                    <Lightbulb className="mt-0.5 h-4 w-4 shrink-0 text-[#8e9192]" />
                    {sample}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="p5-contact-panel p-6 lg:col-span-7 lg:p-8">
            <div className="mb-8 flex flex-col gap-5 md:flex-row md:items-start md:justify-between">
              <div>
                <div className="mb-3 flex items-center gap-3">
                  <Sparkles className="h-5 w-5 text-[#e60026]" />
                  <span className="label-caps text-[#9a9590]">
                    Generated output
                  </span>
                </div>
                <h3 className="font-display text-3xl text-white">
                  {selectedTemplate.projectType}
                </h3>
                <p className="mt-3 max-w-2xl font-sans leading-relaxed text-[#9a9590]">
                  {generatedBrief.summary}
                </p>
              </div>
              <button
                type="button"
                onClick={copyBrief}
                className="p5-btn-ghost shrink-0"
              >
                <span className="inline-flex items-center gap-2">
                  <ClipboardCopy className="h-4 w-4" />
                  {copied ? "Copied" : "Copy brief"}
                </span>
              </button>
            </div>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <div className="border-2 border-[#2a2a2a] bg-[#1a1a1a] p-5">
                <p className="label-caps mb-3 text-[#9a9590]">Goal</p>
                <p className="font-sans text-sm leading-relaxed text-[#9a9590]">
                  {generatedBrief.goal}
                </p>
              </div>
              <div className="border-2 border-[#2a2a2a] bg-[#1a1a1a] p-5">
                <p className="label-caps mb-3 text-[#9a9590]">Timeline</p>
                <p className="font-display text-2xl text-white">
                  {generatedBrief.timeline}
                </p>
                <p className="mt-2 font-sans text-sm leading-relaxed text-[#9a9590]">
                  Final estimate depends on integrations, content readiness,
                  and approval speed.
                </p>
              </div>
            </div>

            <div className="mt-5 border-2 border-[#2a2a2a] bg-[#1a1a1a] p-5">
              <p className="label-caps mb-4 text-[#9a9590]">Core features</p>
              <div className="grid grid-cols-1 gap-3 md:grid-cols-3">
                {generatedBrief.features.map((feature) => (
                  <div
                    key={feature}
                    className="flex items-start gap-3 font-sans text-sm leading-relaxed text-[#9a9590]"
                  >
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#e60026]" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-5 grid grid-cols-1 gap-5 md:grid-cols-2">
              <div>
                <p className="label-caps mb-3 text-[#9a9590]">Suggested stack</p>
                <div className="flex flex-wrap gap-2">
                  {generatedBrief.stack.map((item) => (
                    <span key={item} className="p5-tech-tag">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <p className="label-caps mb-3 text-[#9a9590]">
                  Matching case study
                </p>
                <Link
                  href={`/projects/${selectedTemplate.reference.slug}`}
                  className="p5-open-link group"
                >
                  {selectedTemplate.reference.title}
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
              </div>
            </div>

            <div className="mt-6 border-t-2 border-[#2a2a2a] pt-5">
              <p className="label-caps mb-3 text-[#9a9590]">Next steps</p>
              <div className="grid grid-cols-1 gap-3 md:grid-cols-3">
                {generatedBrief.nextSteps.map((step, index) => (
                  <div key={step} className="font-sans text-sm leading-relaxed text-[#9a9590]">
                    <span className="font-display mb-2 block text-[#e60026]">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    {step}
                  </div>
                ))}
              </div>
            </div>

            <p className="mt-6 font-sans text-xs leading-relaxed text-[#9a9590]">
              Prototype note: this version runs locally in the browser. It shows
              the product thinking and can be upgraded later with an actual LLM
              endpoint.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
