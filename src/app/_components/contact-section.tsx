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
        icon: <Mail className="w-6 h-6" />,
        label: "Email",
        value: "zestvetz@gmail.com",
        href: "mailto:zestvetz@gmail.com",
        description: "Drop me a line anytime",
        gradient: "from-blue-500 to-cyan-500",
    },
    {
        icon: <Github className="w-6 h-6" />,
        label: "GitHub",
        value: "@vetzk",
        href: "https://github.com/vetzk",
        description: "Check out my code",
        gradient: "from-gray-500 to-gray-700",
    },
    {
        icon: <Linkedin className="w-6 h-6" />,
        label: "LinkedIn",
        value: "Connect with me",
        href: "https://linkedin.com/in/alfredo-vetsera",
        description: "Let's network",
        gradient: "from-blue-600 to-blue-800",
    },
    {
        icon: <Calendar className="w-6 h-6" />,
        label: "Schedule",
        value: "Book a call",
        href: "#",
        description: "30min consultation",
        gradient: "from-purple-500 to-purple-700",
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
            className="bg-black text-white py-16 sm:py-24 lg:py-32 relative overflow-hidden"
        >
            <div className="absolute inset-0">
                <div className="absolute top-10 sm:top-20 left-10 sm:left-20 w-48 sm:w-64 lg:w-72 h-48 sm:h-64 lg:h-72 bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-full blur-3xl animate-pulse opacity-60" />
                <div className="absolute bottom-10 sm:bottom-20 right-10 sm:right-20 w-64 sm:w-80 lg:w-96 h-64 sm:h-80 lg:h-96 bg-gradient-to-br from-pink-500/20 to-orange-500/20 rounded-full blur-3xl animate-pulse delay-1000 opacity-40" />
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 sm:w-56 lg:w-64 h-48 sm:h-56 lg:h-64 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse delay-500 opacity-50" />
                <div
                    className="absolute inset-0 opacity-5"
                    style={{
                        backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
                        backgroundSize: "40px 40px sm:60px 60px",
                    }}
                />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-start">
                    <div
                        className={`transition-all duration-1000 ${
                            isVisible
                                ? "opacity-100 translate-x-0"
                                : "opacity-0 -translate-x-8"
                        }`}
                    >
                        <div className="mb-8 sm:mb-12">
                            <span className="text-sm font-medium text-gray-400 text-center tracking-[0.2em] uppercase mb-3 sm:mb-4 block">
                                Get In Touch
                            </span>
                            <h2 className="text-5xl text-center md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6 font-['Inter'] leading-none">
                                Let&apos;s Create
                                <br />
                                <span className="bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
                                    Something
                                </span>
                                <br />
                                <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400 bg-clip-text text-transparent">
                                    Extraordinary
                                </span>
                            </h2>
                            <p className="text-base text-center sm:text-lg lg:text-xl text-gray-300 leading-relaxed font-['Inter'] max-w-xl">
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
                                    className="group relative p-4 sm:p-6 bg-gray-900/50 backdrop-blur-sm rounded-xl sm:rounded-2xl border border-gray-800 hover:border-gray-600 transition-all duration-500 hover:scale-105"
                                    style={{
                                        transitionDelay: `${index * 100}ms`,
                                        background:
                                            hoveredMethod === index
                                                ? `linear-gradient(135deg, rgba(17, 24, 39, 0.8), rgba(31, 41, 55, 0.8))`
                                                : "rgba(17, 24, 39, 0.5)",
                                    }}
                                    onMouseEnter={() => setHoveredMethod(index)}
                                    onMouseLeave={() => setHoveredMethod(null)}
                                >
                                    <div
                                        className={`absolute inset-0 rounded-xl sm:rounded-2xl bg-gradient-to-r ${method.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                                    />

                                    <div className="relative z-10">
                                        <div
                                            className={`inline-flex p-2 sm:p-3 rounded-lg sm:rounded-xl bg-gradient-to-r ${method.gradient} text-white mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300`}
                                        >
                                            {method.icon}
                                        </div>
                                        <h3 className="text-base sm:text-lg font-semibold mb-1 sm:mb-2 text-white group-hover:text-white transition-colors duration-300">
                                            {method.label}
                                        </h3>
                                        <p className="text-gray-400 text-xs sm:text-sm mb-1 sm:mb-2">
                                            {method.description}
                                        </p>
                                        <p className="text-gray-300 font-medium text-xs sm:text-sm break-all">
                                            {method.value}
                                        </p>
                                        <ArrowUpRight className="absolute top-3 sm:top-4 right-3 sm:right-4 w-4 h-4 sm:w-5 sm:h-5 text-gray-500 group-hover:text-white group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" />
                                    </div>
                                </Link>
                            ))}
                        </div>
                        <div className="flex flex-wrap gap-2 sm:gap-3">
                            {quickActions.map((action, index) => (
                                <button
                                    key={index}
                                    className="flex items-center gap-2 px-3 sm:px-4 py-2 bg-gray-800/50 text-gray-300 rounded-full text-xs sm:text-sm hover:bg-gray-700/50 hover:text-white transition-all duration-300 hover:scale-105"
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
                        <div className="bg-gray-900/30 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-5 sm:p-6 lg:p-8 border border-gray-800">
                            <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-white">
                                Send a Message
                            </h3>

                            <form
                                onSubmit={handleSubmit}
                                className="space-y-4 sm:space-y-6"
                            >
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-xs sm:text-sm font-medium text-gray-300 mb-2">
                                            Name
                                        </label>
                                        <input
                                            type="text"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleInputChange}
                                            className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-gray-800/50 border border-gray-700 rounded-lg sm:rounded-xl text-sm sm:text-base text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all duration-300"
                                            placeholder="Your name"
                                            required
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-xs sm:text-sm font-medium text-gray-300 mb-2">
                                            Email
                                        </label>
                                        <input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleInputChange}
                                            className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-gray-800/50 border border-gray-700 rounded-lg sm:rounded-xl text-sm sm:text-base text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all duration-300"
                                            placeholder="your@email.com"
                                            required
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-xs sm:text-sm font-medium text-gray-300 mb-2">
                                        Project Type
                                    </label>
                                    <select
                                        name="project"
                                        value={formData.project}
                                        onChange={handleInputChange}
                                        className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-gray-800/50 border border-gray-700 rounded-lg sm:rounded-xl text-sm sm:text-base text-white focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all duration-300"
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
                                    <label className="block text-xs sm:text-sm font-medium text-gray-300 mb-2">
                                        Message
                                    </label>
                                    <textarea
                                        name="message"
                                        value={formData.message}
                                        onChange={handleInputChange}
                                        rows={5}
                                        className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-gray-800/50 border border-gray-700 rounded-lg sm:rounded-xl text-sm sm:text-base text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all duration-300 resize-none"
                                        placeholder="Tell me about your project..."
                                        required
                                    />
                                </div>
                                <button
                                    type="submit"
                                    className="group w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg sm:rounded-xl text-sm sm:text-base font-semibold hover:from-purple-600 hover:to-pink-600 transition-all duration-300 hover:scale-105 hover:shadow-2xl flex items-center justify-center gap-2 sm:gap-3"
                                >
                                    Send Message
                                    <Send className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                                </button>
                            </form>
                            <div className="mt-4 sm:mt-6 p-3 sm:p-4 bg-gray-800/30 rounded-lg sm:rounded-xl border border-gray-700">
                                <p className="text-xs sm:text-sm text-gray-300 text-center">
                                    ⚡ I typically respond within 24 hours
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
                    <p className="text-gray-400 mb-4 sm:mb-6 text-sm sm:text-base">
                        Prefer a different approach?
                    </p>
                    <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 sm:gap-4 px-4">
                        <Link
                            href="mailto:zestvetz@gmail.com"
                            className="inline-flex items-center justify-center gap-2 bg-white text-black px-6 sm:px-8 py-2.5 sm:py-3 rounded-full text-sm sm:text-base font-semibold hover:bg-gray-100 transition-all duration-300 hover:scale-105"
                        >
                            <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
                            Quick Email
                        </Link>
                        <Link
                            href="https://wa.me/6282143790913"
                            className="inline-flex items-center justify-center gap-2 border-2 border-white text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-full text-sm sm:text-base font-semibold hover:bg-white hover:text-black transition-all duration-300 hover:scale-105"
                        >
                            <Calendar className="w-4 h-4 sm:w-5 sm:h-5" />
                            Schedule Call
                        </Link>
                    </div>
                </div>
            </div>
            <div className="hidden lg:block absolute bottom-0 right-0 opacity-3 pointer-events-none">
                <div className="relative">
                    <Image
                        src="/abstract-white-3d-wave-form-design-elegant-swirls.png"
                        alt=""
                        width={500}
                        height={600}
                        unoptimized
                        className="object-contain transform rotate-12 opacity-50"
                    />
                    <div className="absolute inset-0 bg-gradient-to-l from-transparent via-black/20 to-black/40" />
                </div>
            </div>
            <div className="hidden sm:block absolute top-20 sm:top-32 left-8 sm:left-16 w-2 h-2 bg-purple-400 rounded-full animate-pulse opacity-60" />
            <div className="hidden sm:block absolute bottom-20 sm:bottom-32 right-16 sm:right-32 w-2 sm:w-3 h-2 sm:h-3 bg-pink-400 rounded-full animate-pulse delay-1000 opacity-40" />
            <div className="hidden sm:block absolute top-1/2 left-10 sm:left-20 w-1 h-1 bg-cyan-400 rounded-full animate-pulse delay-500 opacity-70" />
        </section>
    );
}
