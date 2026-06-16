"use client";
import {
  Github,
  Linkedin,
  Mail,
  Send,
  ArrowUpRight,
  Calendar,
  MessageCircle,
  Phone,
} from "lucide-react";
import React, { useState, useEffect, FormEvent } from "react";
import Link from "next/link";

const contactMethods = [
  {
    icon: <Mail className="h-6 w-6" />,
    label: "Email",
    value: "zestvetz@gmail.com",
    href: "mailto:zestvetz@gmail.com",
    description: "Drop me a line anytime",
  },
  {
    icon: <Github className="h-6 w-6" />,
    label: "GitHub",
    value: "@vetzk",
    href: "https://github.com/vetzk",
    description: "Check out my code",
  },
  {
    icon: <Linkedin className="h-6 w-6" />,
    label: "LinkedIn",
    value: "Connect with me",
    href: "https://linkedin.com/in/alfredo-vetsera",
    description: "Let's network",
  },
  {
    icon: <Calendar className="h-6 w-6" />,
    label: "Schedule",
    value: "Book a call",
    href: "mailto:zestvetz@gmail.com?subject=Portfolio%20consultation",
    description: "30min consultation",
  },
];

const quickActions = [
  {
    label: "Project Inquiry",
    icon: <MessageCircle className="h-4 w-4 sm:h-5 sm:w-5" />,
  },
  {
    label: "Collaboration",
    icon: <Send className="h-4 w-4 sm:h-5 sm:w-5" />,
  },
  {
    label: "Consultation",
    icon: <Phone className="h-4 w-4 sm:h-5 sm:w-5" />,
  },
];

export default function ContactSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    project: "Project Inquiry",
    message: "",
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: [0, 0.1, 0.2],
        rootMargin: "0px 0px -20% 0px",
      },
    );

    const section = document.getElementById("contact");
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  const handleInputChange = (
    e:
      | React.ChangeEvent<HTMLSelectElement>
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nProject: ${formData.project}\n\n${formData.message}`,
    );
    window.location.href = `mailto:zestvetz@gmail.com?subject=${encodeURIComponent(`Portfolio: ${formData.project}`)}&body=${body}`;
  };

  return (
    <section
      id="contact"
      className="scroll-mt-28 relative overflow-hidden bg-[#0a0a0a] py-16 text-[#f4f0e6] sm:py-24 lg:py-[160px]"
    >
      <div className="pointer-events-none absolute inset-0 p5-halftone opacity-20" />

      <div className="layout-shell relative z-10 max-w-[1440px]">
        <div className="grid grid-cols-1 items-start gap-10 sm:gap-12 lg:grid-cols-2 lg:gap-16">
          <div
            className={`transition-all duration-1000 ${
              isVisible
                ? "translate-x-0 opacity-100"
                : "-translate-x-8 opacity-0"
            }`}
          >
            <div className="mb-8 sm:mb-12">
              <div className="mb-6 flex flex-wrap items-center gap-4">
                <span className="p5-section-tag">Section 03</span>
                <span className="label-caps text-[#e60026]">Contact</span>
              </div>
              <h2 className="font-display mb-4 text-4xl leading-[0.95] text-white sm:mb-6 md:text-6xl lg:text-7xl">
                LET&apos;S BUILD
                <br />
                <span className="p5-text-outline">TOGETHER.</span>
              </h2>
              <p className="max-w-xl font-sans text-base leading-relaxed text-[#9a9590] sm:text-lg">
                Ready to ship something worth showing off? Tell me about your
                product, timeline, and goals — I reply within 24 hours.
              </p>
            </div>

            <div className="mb-8 grid grid-cols-1 gap-3 sm:mb-12 sm:grid-cols-2 sm:gap-4">
              {contactMethods.map((method) => (
                <Link
                  key={method.label}
                  href={method.href}
                  className="p5-contact-method group relative p-4 sm:p-6"
                >
                  <div className="relative z-10">
                    <div className="mb-3 inline-flex border-2 border-[#2a2a2a] bg-[#1a1a1a] p-2 text-[#e60026] sm:mb-4 sm:p-3">
                      {method.icon}
                    </div>
                    <h3 className="mb-1 font-display text-lg text-white sm:mb-2 sm:text-xl">
                      {method.label}
                    </h3>
                    <p className="mb-1 font-sans text-xs text-[#9a9590] sm:mb-2 sm:text-sm">
                      {method.description}
                    </p>
                    <p className="break-all font-sans text-xs font-medium text-[#f4f0e6] sm:text-sm">
                      {method.value}
                    </p>
                    <ArrowUpRight className="absolute right-3 top-3 h-4 w-4 text-[#9a9590] transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[#e60026] sm:right-4 sm:top-4 sm:h-5 sm:w-5" />
                  </div>
                </Link>
              ))}
            </div>

            <div className="flex flex-wrap gap-2 sm:gap-3">
              {quickActions.map((action) => (
                <button
                  key={action.label}
                  type="button"
                  onClick={() =>
                    setFormData((prev) => ({ ...prev, project: action.label }))
                  }
                  className="label-caps flex items-center gap-2 border-2 border-[#2a2a2a] px-3 py-2 text-[10px] text-[#9a9590] transition-colors hover:border-[#e60026] hover:text-white sm:px-4 sm:text-[11px]"
                >
                  {action.icon}
                  <span className="whitespace-nowrap">{action.label}</span>
                </button>
              ))}
            </div>
          </div>

          <div
            className={`transition-all delay-300 duration-1000 ${
              isVisible
                ? "translate-x-0 opacity-100"
                : "translate-x-8 opacity-0"
            }`}
          >
            <div className="p5-contact-panel p-5 sm:p-6 lg:p-8">
              <h3 className="mb-2 font-display text-2xl text-white sm:mb-4 sm:text-3xl">
                Send a message
              </h3>
              <p className="mb-6 font-sans text-sm text-[#9a9590]">
                Or use the calling card below for a faster intro.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6 sm:space-y-8">
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8">
                  <div>
                    <label className="label-caps mb-2 block text-[#9a9590]">
                      Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="input-stitch"
                      placeholder="Your name"
                      required
                    />
                  </div>
                  <div>
                    <label className="label-caps mb-2 block text-[#9a9590]">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="input-stitch"
                      placeholder="your@email.com"
                      required
                    />
                  </div>
                </div>
                <div>
                  <label className="label-caps mb-2 block text-[#9a9590]">
                    Project type
                  </label>
                  <select
                    name="project"
                    value={formData.project}
                    onChange={handleInputChange}
                    className="input-stitch cursor-pointer bg-[#111111] pr-8"
                  >
                    <option>Project Inquiry</option>
                    <option>Web Development</option>
                    <option>UI/UX Design</option>
                    <option>3D Visualization</option>
                    <option>Consultation</option>
                    <option>Other</option>
                  </select>
                </div>
                <div>
                  <label className="label-caps mb-2 block text-[#9a9590]">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={5}
                    className="input-stitch resize-none"
                    placeholder="Tell me about your project..."
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="p5-btn-primary group flex w-full items-center justify-center"
                >
                  <span className="inline-flex items-center gap-2">
                    Send message
                    <Send className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 sm:h-5 sm:w-5" />
                  </span>
                </button>
              </form>

              <div className="mt-4 border-2 border-[#2a2a2a] bg-[#1a1a1a] p-3 sm:mt-6 sm:p-4">
                <p className="text-center font-sans text-xs text-[#9a9590] sm:text-sm">
                  Typical response within 24 hours
                </p>
              </div>
            </div>
          </div>
        </div>

        <div
          className={`mt-16 transition-all delay-500 duration-1000 sm:mt-20 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <div className="p5-contact-cta">
            <div className="mx-auto flex max-w-4xl flex-col items-start justify-between gap-6 md:flex-row md:items-center">
              <div>
                <h3 className="font-display text-3xl leading-none text-white md:text-5xl">
                  Got a product
                  <br />
                  worth shipping?
                </h3>
                <p className="mt-4 max-w-lg font-sans text-sm leading-relaxed text-white/90 md:text-base">
                  Drop a calling card. I take on a few contracts per quarter and
                  love hard problems with strong design taste.
                </p>
              </div>
              <a
                href="mailto:zestvetz@gmail.com?subject=Calling%20card%20from%20portfolio"
                className="p5-btn-ghost shrink-0 bg-[#111111]"
              >
                <span className="inline-flex items-center gap-2">
                  Send calling card
                  <ArrowUpRight className="h-4 w-4" />
                </span>
              </a>
            </div>
          </div>
        </div>

        <div
          className={`mt-10 text-center transition-all delay-700 duration-1000 sm:mt-12 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <p className="mb-4 font-sans text-sm text-[#9a9590] sm:text-base">
            Prefer a different channel?
          </p>
          <div className="flex flex-col flex-wrap justify-center gap-3 px-4 sm:flex-row sm:gap-4">
            <Link
              href="mailto:zestvetz@gmail.com"
              className="p5-btn-primary inline-flex"
            >
              <span className="inline-flex items-center gap-2">
                <Mail className="h-4 w-4 sm:h-5 sm:w-5" />
                Quick email
              </span>
            </Link>
            <Link
              href="https://wa.me/6282143790913"
              className="p5-btn-outline inline-flex"
            >
              <span className="inline-flex items-center gap-2">
                <Phone className="h-4 w-4 sm:h-5 sm:w-5" />
                WhatsApp
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
