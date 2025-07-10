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
    { label: "Project Inquiry", icon: <MessageCircle className="w-5 h-5" /> },
    { label: "Collaboration", icon: <Send className="w-5 h-5" /> },
    { label: "Consultation", icon: <Phone className="w-5 h-5" /> },
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
            { threshold: 0.3 }
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
        // Handle form submission here
    };

    return (
        <section
            id="contact"
            className="bg-black text-white py-32 relative overflow-hidden"
        >
            {/* Animated Background Elements */}
            <div className="absolute inset-0">
                {/* Floating orbs */}
                <div className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-full blur-3xl animate-pulse opacity-60" />
                <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-br from-pink-500/20 to-orange-500/20 rounded-full blur-3xl animate-pulse delay-1000 opacity-40" />
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse delay-500 opacity-50" />

                {/* Grid pattern */}
                <div
                    className="absolute inset-0 opacity-5"
                    style={{
                        backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
                        backgroundSize: "60px 60px",
                    }}
                />
            </div>

            <div className="max-w-7xl mx-auto px-8 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                    {/* Left Side - Content */}
                    <div
                        className={`transition-all duration-1000 ${
                            isVisible
                                ? "opacity-100 translate-x-0"
                                : "opacity-0 -translate-x-8"
                        }`}
                    >
                        {/* Header */}
                        <div className="mb-12">
                            <span className="text-sm font-medium text-gray-400 tracking-[0.2em] uppercase mb-4 block">
                                Get In Touch
                            </span>
                            <h2 className="text-6xl md:text-7xl font-bold mb-6 font-['Inter'] leading-none">
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
                            <p className="text-xl text-gray-300 leading-relaxed font-['Inter'] max-w-xl">
                                Ready to bring your vision to life? Whether
                                it&apos;s a groundbreaking web application, an
                                immersive digital experience, or innovative
                                design solution, let&apos;s collaborate to
                                create something truly remarkable.
                            </p>
                        </div>

                        {/* Contact Methods */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
                            {contactMethods.map((method, index) => (
                                <a
                                    key={index}
                                    href={method.href}
                                    className="group relative p-6 bg-gray-900/50 backdrop-blur-sm rounded-2xl border border-gray-800 hover:border-gray-600 transition-all duration-500 hover:scale-105"
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
                                    {/* Gradient overlay */}
                                    <div
                                        className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${method.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                                    />

                                    <div className="relative z-10">
                                        <div
                                            className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${method.gradient} text-white mb-4 group-hover:scale-110 transition-transform duration-300`}
                                        >
                                            {method.icon}
                                        </div>
                                        <h3 className="text-lg font-semibold mb-2 text-white group-hover:text-white transition-colors duration-300">
                                            {method.label}
                                        </h3>
                                        <p className="text-gray-400 text-sm mb-2">
                                            {method.description}
                                        </p>
                                        <p className="text-gray-300 font-medium">
                                            {method.value}
                                        </p>
                                        <ArrowUpRight className="absolute top-4 right-4 w-5 h-5 text-gray-500 group-hover:text-white group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" />
                                    </div>
                                </a>
                            ))}
                        </div>

                        {/* Quick Actions */}
                        <div className="flex flex-wrap gap-3">
                            {quickActions.map((action, index) => (
                                <button
                                    key={index}
                                    className="flex items-center gap-2 px-4 py-2 bg-gray-800/50 text-gray-300 rounded-full text-sm hover:bg-gray-700/50 hover:text-white transition-all duration-300 hover:scale-105"
                                >
                                    {action.icon}
                                    {action.label}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Right Side - Contact Form */}
                    <div
                        className={`transition-all duration-1000 delay-300 ${
                            isVisible
                                ? "opacity-100 translate-x-0"
                                : "opacity-0 translate-x-8"
                        }`}
                    >
                        <div className="bg-gray-900/30 backdrop-blur-sm rounded-3xl p-8 border border-gray-800">
                            <h3 className="text-2xl font-bold mb-6 text-white">
                                Send a Message
                            </h3>

                            <form onSubmit={handleSubmit} className="space-y-6">
                                {/* Name & Email Row */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-300 mb-2">
                                            Name
                                        </label>
                                        <input
                                            type="text"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleInputChange}
                                            className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all duration-300"
                                            placeholder="Your name"
                                            required
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-300 mb-2">
                                            Email
                                        </label>
                                        <input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleInputChange}
                                            className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all duration-300"
                                            placeholder="your@email.com"
                                            required
                                        />
                                    </div>
                                </div>

                                {/* Project Type */}
                                <div>
                                    <label className="block text-sm font-medium text-gray-300 mb-2">
                                        Project Type
                                    </label>
                                    <select
                                        name="project"
                                        value={formData.project}
                                        onChange={handleInputChange}
                                        className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-xl text-white focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all duration-300"
                                    >
                                        <option>Project Inquiry</option>
                                        <option>Web Development</option>
                                        <option>UI/UX Design</option>
                                        <option>3D Visualization</option>
                                        <option>Consultation</option>
                                        <option>Other</option>
                                    </select>
                                </div>

                                {/* Message */}
                                <div>
                                    <label className="block text-sm font-medium text-gray-300 mb-2">
                                        Message
                                    </label>
                                    <textarea
                                        name="message"
                                        value={formData.message}
                                        onChange={handleInputChange}
                                        rows={5}
                                        className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all duration-300 resize-none"
                                        placeholder="Tell me about your project..."
                                        required
                                    />
                                </div>

                                {/* Submit Button */}
                                <button
                                    type="submit"
                                    className="group w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-4 rounded-xl font-semibold hover:from-purple-600 hover:to-pink-600 transition-all duration-300 hover:scale-105 hover:shadow-2xl flex items-center justify-center gap-3"
                                >
                                    Send Message
                                    <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                                </button>
                            </form>

                            {/* Response Time */}
                            <div className="mt-6 p-4 bg-gray-800/30 rounded-xl border border-gray-700">
                                <p className="text-sm text-gray-300 text-center">
                                    ⚡ I typically respond within 24 hours
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom CTA */}
                <div
                    className={`text-center mt-20 transition-all duration-1000 delay-600 ${
                        isVisible
                            ? "opacity-100 translate-y-0"
                            : "opacity-0 translate-y-8"
                    }`}
                >
                    <p className="text-gray-400 mb-6">
                        Prefer a different approach?
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <a
                            href="mailto:hello@example.com"
                            className="inline-flex items-center gap-2 bg-white text-black px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 hover:scale-105"
                        >
                            <Mail className="w-5 h-5" />
                            Quick Email
                        </a>
                        <a
                            href="#"
                            className="inline-flex items-center gap-2 border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-black transition-all duration-300 hover:scale-105"
                        >
                            <Calendar className="w-5 h-5" />
                            Schedule Call
                        </a>
                    </div>
                </div>
            </div>

            {/* Enhanced Background sculptural element */}
            <div className="absolute bottom-0 right-0 opacity-3 pointer-events-none">
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

            <div className="absolute top-32 left-16 w-2 h-2 bg-purple-400 rounded-full animate-pulse opacity-60" />
            <div className="absolute bottom-32 right-32 w-3 h-3 bg-pink-400 rounded-full animate-pulse delay-1000 opacity-40" />
            <div className="absolute top-1/2 left-20 w-1 h-1 bg-cyan-400 rounded-full animate-pulse delay-500 opacity-70" />
        </section>
    );
}
