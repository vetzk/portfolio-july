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
        icon: <Code className="w-8 h-8" />,
        title: "Development",
        desc: "Full-stack development with modern frameworks",
        technologies: ["React", "Node.js", "TypeScript", "Next.js"],
        color: "from-blue-500 to-cyan-500",
    },
    {
        icon: <Palette className="w-8 h-8" />,
        title: "Design",
        desc: "UI/UX design and creative direction",
        technologies: ["Figma", "Adobe CC", "Framer", "Blender"],
        color: "from-purple-500 to-pink-500",
    },
    {
        icon: <Zap className="w-8 h-8" />,
        title: "Innovation",
        desc: "Cutting-edge solutions and emerging tech",
        technologies: ["AI/ML", "WebGL", "Three.js", "WebRTC"],
        color: "from-yellow-500 to-orange-500",
    },
];

const stats = [
    {
        icon: <Star className="w-6 h-6" />,
        value: "5+",
        label: "Projects Completed",
    },
    {
        icon: <Users className="w-6 h-6" />,
        value: "5+",
        label: "Happy Clients",
    },
    {
        icon: <Award className="w-6 h-6" />,
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
            { threshold: 0.3 }
        );

        const section = document.getElementById("about");
        if (section) observer.observe(section);

        return () => observer.disconnect();
    }, []);

    return (
        <section
            id="about"
            className="bg-black text-white py-24 relative overflow-hidden"
        >
            {/* Animated Background Grid */}
            <div className="absolute inset-0 opacity-5">
                <div
                    className="absolute inset-0"
                    style={{
                        backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
                        backgroundSize: "50px 50px",
                        animation: "float 20s ease-in-out infinite",
                    }}
                />
            </div>

            <div className="max-w-6xl mx-auto px-8 relative z-10">
                {/* Header with enhanced typography */}
                <div className="text-center mb-16">
                    <div className="inline-block">
                        <h2
                            className={`text-6xl font-bold mb-4 font-['Inter'] bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent transition-all duration-1000 ${
                                isVisible
                                    ? "opacity-100 translate-y-0"
                                    : "opacity-0 translate-y-8"
                            }`}
                        >
                            About Me
                        </h2>
                        <div
                            className={`h-1 bg-gradient-to-r from-transparent via-white to-transparent transition-all duration-1000 delay-300 ${
                                isVisible
                                    ? "w-full opacity-100"
                                    : "w-0 opacity-0"
                            }`}
                        />
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
                    {/* Enhanced Text Content */}
                    <div
                        className={`transition-all duration-1000 delay-200 ${
                            isVisible
                                ? "opacity-100 translate-x-0"
                                : "opacity-0 -translate-x-8"
                        }`}
                    >
                        <p className="text-2xl text-gray-300 mb-8 leading-relaxed font-['Inter']">
                            I&apos;m a multidisciplinary creative who believes
                            in the power of combining
                            <span className="text-white font-semibold">
                                {" "}
                                aesthetic beauty
                            </span>{" "}
                            with
                            <span className="text-white font-semibold">
                                {" "}
                                functional innovation
                            </span>
                            .
                        </p>

                        <p className="text-lg text-gray-400 mb-10 leading-relaxed font-['Inter']">
                            My work spans digital art, interactive
                            installations, and cutting-edge web experiences.
                            I&apos;m passionate about creating solutions that
                            not only solve problems but inspire and delight
                            users.
                        </p>

                        {/* Stats Section */}
                        <div className="grid grid-cols-3 gap-6 mb-10">
                            {stats.map((stat, index) => (
                                <div
                                    key={index}
                                    className={`text-center p-4 bg-gray-900/50 rounded-xl border border-gray-800 transition-all duration-700 ${
                                        isVisible
                                            ? "opacity-100 translate-y-0"
                                            : "opacity-0 translate-y-4"
                                    }`}
                                    style={{
                                        transitionDelay: `${
                                            600 + index * 100
                                        }ms`,
                                    }}
                                >
                                    <div className="flex justify-center mb-2 text-gray-400">
                                        {stat.icon}
                                    </div>
                                    <div className="text-2xl font-bold text-white mb-1">
                                        {stat.value}
                                    </div>
                                    <div className="text-sm text-gray-400">
                                        {stat.label}
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* CTA Button */}
                        <button className="group flex items-center gap-3 bg-white text-black px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 hover:scale-105 hover:shadow-2xl font-['Inter']">
                            Let&apos;s Work Together
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                        </button>
                    </div>

                    {/* Enhanced Skills Section */}
                    <div
                        className={`transition-all duration-1000 delay-400 ${
                            isVisible
                                ? "opacity-100 translate-x-0"
                                : "opacity-0 translate-x-8"
                        }`}
                    >
                        <div className="grid grid-cols-1 gap-6">
                            {skills.map((skill, index) => (
                                <div
                                    key={index}
                                    className="group relative p-8 bg-gray-900/80 backdrop-blur-sm rounded-2xl border border-gray-800 hover:border-gray-600 transition-all duration-500 hover:scale-105 cursor-pointer"
                                    onMouseEnter={() => setHoveredSkill(index)}
                                    onMouseLeave={() => setHoveredSkill(null)}
                                    style={{
                                        transitionDelay: `${index * 100}ms`,
                                        background:
                                            hoveredSkill === index
                                                ? `linear-gradient(135deg, rgba(17, 24, 39, 0.9), rgba(31, 41, 55, 0.9))`
                                                : "rgba(17, 24, 39, 0.8)",
                                    }}
                                >
                                    {/* Gradient overlay on hover */}
                                    <div
                                        className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${skill.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                                    />

                                    <div className="relative z-10">
                                        <div className="flex items-start gap-6 mb-4">
                                            <div
                                                className={`p-3 rounded-xl bg-gradient-to-r ${skill.color} text-white transition-transform duration-300 group-hover:scale-110`}
                                            >
                                                {skill.icon}
                                            </div>
                                            <div className="flex-1">
                                                <h3 className="text-2xl font-semibold mb-3 font-['Inter'] text-white group-hover:text-white transition-colors duration-300">
                                                    {skill.title}
                                                </h3>
                                                <p className="text-gray-400 font-['Inter'] leading-relaxed">
                                                    {skill.desc}
                                                </p>
                                            </div>
                                        </div>

                                        {/* Technologies */}
                                        <div className="flex flex-wrap gap-2 mt-4">
                                            {skill.technologies.map(
                                                (tech, techIndex) => (
                                                    <span
                                                        key={techIndex}
                                                        className="px-3 py-1 text-xs bg-gray-800 text-gray-300 rounded-full border border-gray-700 group-hover:border-gray-600 transition-colors duration-300"
                                                    >
                                                        {tech}
                                                    </span>
                                                )
                                            )}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Enhanced floating decorative elements */}
            <div className="absolute top-20 right-20 w-3 h-3 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full animate-pulse opacity-60"></div>
            <div className="absolute bottom-32 left-16 w-2 h-2 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full animate-pulse delay-1000 opacity-40"></div>
            <div className="absolute top-1/2 right-1/4 w-1 h-1 bg-gradient-to-r from-green-400 to-blue-400 rounded-full animate-pulse delay-500 opacity-50"></div>

            {/* Large decorative circle */}
            <div className="absolute -top-32 -right-32 w-64 h-64 bg-gradient-to-br from-purple-500/10 to-blue-500/10 rounded-full blur-3xl animate-pulse opacity-30" />
            <div className="absolute -bottom-32 -left-32 w-64 h-64 bg-gradient-to-br from-orange-500/10 to-pink-500/10 rounded-full blur-3xl animate-pulse delay-2000 opacity-30" />

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
