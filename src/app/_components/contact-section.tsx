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
import Image from "next/image";
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
        href: "#",
        description: "30min consultation",
    },
];

const quickActions = [
    {
        label: "Project Inquiry",
        icon: <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5" />,
    },
    {
        label: "Collaboration",
        icon: <Send className="w-4 h-4 sm:w-5 sm:h-5" />,
    },
    {
        label: "Consultation",
        icon: <Phone className="w-4 h-4 sm:w-5 sm:h-5" />,
    },
];

export default function ContactSection() {
    const [hoveredMethod, setHoveredMethod] = useState<number | null>(null);
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
            }
        );

        const section = document.getElementById("contact");
        if (section) observer.observe(section);

        return () => observer.disconnect();
    }, []);

    const handleInputChange = (
        e:
            | React.ChangeEvent<HTMLSelectElement>
            | React.ChangeEvent<HTMLInputElement>
            | React.ChangeEvent<HTMLTextAreaElement>
    ) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log("Form submitted:", formData);
    };

    return (
        <section
            id="contact"
            className="scroll-mt-28 relative overflow-hidden bg-[#050505] py-16 text-[#e5e2e1] sm:py-24 lg:py-[160px]"
        >
            <div className="absolute inset-0">
                <Image
                    src="/contact-luminous-waves.png"
                    alt=""
                    fill
                    unoptimized
                    className="pointer-events-none object-cover opacity-[0.28]"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#131313]/92 via-[#131313]/88 to-[#131313]" />
                <div className="pointer-events-none absolute inset-0 opacity-[0.08]">
                    <div className="absolute left-10 top-20 h-48 w-48 bg-white blur-3xl sm:left-20 sm:h-64 sm:w-64 lg:h-72 lg:w-72" />
                    <div className="absolute bottom-20 right-10 h-64 w-64 bg-[#8e9192] blur-3xl sm:right-20 sm:h-80 sm:w-80" />
                </div>
                <div
                    className="pointer-events-none absolute inset-0 opacity-[0.04]"
                    style={{
                        backgroundImage: `radial-gradient(circle at 2px 2px, #e5e2e1 1px, transparent 0)`,
                        backgroundSize: "40px 40px",
                    }}
                />
            </div>

            <div className="layout-shell relative z-10 max-w-[1440px]">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-start">
                    <div
                        className={`transition-all duration-1000 ${
                            isVisible
                                ? "opacity-100 translate-x-0"
                                : "opacity-0 -translate-x-8"
                        }`}
                    >
                        <div className="mb-8 sm:mb-12">
                            <span className="label-caps mb-3 block text-center text-[#8e9192] sm:mb-4">
                                Get in touch
                            </span>
                            <h2 className="font-display mb-4 text-center text-4xl font-semibold leading-none tracking-[-0.01em] text-white sm:mb-6 md:text-6xl lg:text-7xl">
                                Let&apos;s create
                                <br />
                                <span className="text-[#c4c7c8]">
                                    something
                                </span>
                                <br />
                                <span className="text-white">extraordinary</span>
                            </h2>
                            <p className="mx-auto max-w-xl text-center text-base leading-[1.6] tracking-[0.02em] text-[#c4c7c8] sm:text-lg lg:text-xl">
                                Ready to bring your vision to life? Whether
                                it&apos;s a groundbreaking web application, an
                                immersive digital experience, or innovative
                                design solution, let&apos;s collaborate to
                                create something truly remarkable.
                            </p>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-8 sm:mb-12">
                            {contactMethods.map((method, index) => (
                                <Link
                                    key={index}
                                    href={method.href}
                                    className={`group relative border border-[#444748] bg-[#201f1f]/90 p-4 transition-colors sm:p-6 ${
                                        hoveredMethod === index
                                            ? "border-[#8e9192] shadow-[0_0_0_1px_rgba(255,255,255,0.06)]"
                                            : "hover:border-[#8e9192]/80"
                                    }`}
                                    onMouseEnter={() => setHoveredMethod(index)}
                                    onMouseLeave={() => setHoveredMethod(null)}
                                >
                                    <div className="relative z-10">
                                        <div className="mb-3 inline-flex border border-[#444748] bg-[#2a2a2a] p-2 text-white transition-transform group-hover:scale-[1.02] sm:mb-4 sm:p-3">
                                            {method.icon}
                                        </div>
                                        <h3 className="mb-1 text-base font-semibold text-white sm:mb-2 sm:text-lg">
                                            {method.label}
                                        </h3>
                                        <p className="mb-1 text-xs text-[#8e9192] sm:mb-2 sm:text-sm">
                                            {method.description}
                                        </p>
                                        <p className="break-all text-xs font-medium text-[#c4c7c8] sm:text-sm">
                                            {method.value}
                                        </p>
                                        <ArrowUpRight className="absolute right-3 top-3 h-4 w-4 text-[#8e9192] transition-all group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-white sm:right-4 sm:top-4 sm:h-5 sm:w-5" />
                                    </div>
                                </Link>
                            ))}
                        </div>
                        <div className="flex flex-wrap gap-2 sm:gap-3">
                            {quickActions.map((action, index) => (
                                <button
                                    key={index}
                                    className="label-caps flex items-center gap-2 border border-[#444748] px-3 py-2 text-[10px] text-[#c4c7c8] transition-colors hover:border-[#8e9192] hover:text-white sm:px-4 sm:text-[11px]"
                                >
                                    {action.icon}
                                    <span className="whitespace-nowrap">
                                        {action.label}
                                    </span>
                                </button>
                            ))}
                        </div>
                    </div>
                    <div
                        className={`transition-all duration-1000 delay-300 ${
                            isVisible
                                ? "opacity-100 translate-x-0"
                                : "opacity-0 translate-x-8"
                        }`}
                    >
                        <div className="glass-panel p-5 sm:p-6 lg:p-8">
                            <h3 className="mb-4 font-display text-xl font-semibold text-white sm:mb-6 sm:text-2xl">
                                Send a message
                            </h3>

                            <form
                                onSubmit={handleSubmit}
                                className="space-y-6 sm:space-y-8"
                            >
                                <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8">
                                    <div>
                                        <label className="label-caps mb-2 block text-[#8e9192]">
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
                                        <label className="label-caps mb-2 block text-[#8e9192]">
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
                                    <label className="label-caps mb-2 block text-[#8e9192]">
                                        Project type
                                    </label>
                                    <select
                                        name="project"
                                        value={formData.project}
                                        onChange={handleInputChange}
                                        className="input-stitch cursor-pointer bg-[#131313] pr-8"
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
                                    <label className="label-caps mb-2 block text-[#8e9192]">
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
                                    className="btn-stitch-primary group flex w-full items-center justify-center gap-2 sm:gap-3"
                                >
                                    Send message
                                    <Send className="h-4 w-4 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1 sm:h-5 sm:w-5" />
                                </button>
                            </form>
                            <div className="mt-4 border border-[#444748] bg-[#201f1f] p-3 sm:mt-6 sm:p-4">
                                <p className="text-center text-xs text-[#c4c7c8] sm:text-sm">
                                    Typical response within 24 hours
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    className={`text-center mt-12 sm:mt-16 lg:mt-20 transition-all duration-1000 delay-600 ${
                        isVisible
                            ? "opacity-100 translate-y-0"
                            : "opacity-0 translate-y-8"
                    }`}
                >
                    <p className="mb-4 text-sm text-[#8e9192] sm:mb-6 sm:text-base">
                        Prefer a different approach?
                    </p>
                    <div className="flex flex-col flex-wrap justify-center gap-3 px-4 sm:flex-row sm:gap-4">
                        <Link
                            href="mailto:zestvetz@gmail.com"
                            className="btn-stitch-primary inline-flex items-center justify-center gap-2 text-sm sm:text-base"
                        >
                            <Mail className="h-4 w-4 sm:h-5 sm:w-5" />
                            Quick email
                        </Link>
                        <Link
                            href="https://wa.me/6282143790913"
                            className="btn-stitch-secondary inline-flex items-center justify-center gap-2 text-sm sm:text-base"
                        >
                            <Phone className="h-4 w-4 sm:h-5 sm:w-5" />
                            WhatsApp
                        </Link>
                    </div>
                </div>
            </div>
            <div className="pointer-events-none absolute bottom-0 right-0 hidden opacity-20 lg:block">
                <div className="relative">
                    <Image
                        src="/abstract-white-3d-wave-form-design-elegant-swirls.png"
                        alt=""
                        width={500}
                        height={600}
                        unoptimized
                        className="rotate-12 object-contain grayscale"
                    />
                    <div className="absolute inset-0 bg-gradient-to-l from-[#131313] via-transparent to-transparent" />
                </div>
            </div>
        </section>
    );
}
