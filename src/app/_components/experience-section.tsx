import { Calendar, MapPin, ArrowUpRight, Briefcase } from "lucide-react";
import React, { useState, useEffect } from "react";

const experiences = [
    {
        title: "Frontend Developer",
        company: "Esa Creatives",
        location: "Jakarta",
        period: "2025 - now",
        duration: "ongoing",
        type: "Contract",
        description:
            "Specialized in creating interactive and visually stunning web experiences for creative agencies and startups.",
        achievements: [
            "Increased client satisfaction scores by 35%",
            "Developed reusable component library used across projects",
        ],
        tech: ["React", "Next.js", "Figma", "Webflow"],
        featured: true,
    },
    {
        title: "Full Stack Developer",
        company: "DMS",
        location: "Jakarta",
        period: "2024 - 2025",
        duration: "1 year",
        type: "Internship",
        description:
            "Started my professional journey building responsive websites and learning modern development practices in a fast-paced startup environment.",
        achievements: [
            "Learned and adapted to new technologies quickly",
            "Maintained 99% uptime for client applications",
        ],
        tech: ["HTML/CSS", "JavaScript", "React.js", "MySQL", "Nest.js"],
        featured: false,
    },
];

export default function ExperienceSection() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.2 }
        );

        const section = document.getElementById("experience");
        if (section) observer.observe(section);

        return () => observer.disconnect();
    }, []);

    return (
        <section
            id="experience"
            className="bg-black text-white py-32 relative overflow-hidden"
        >
            {/* Background Elements */}
            <div className="absolute inset-0 opacity-[0.03]">
                <div className="absolute top-20 right-20 w-96 h-96 bg-white rounded-full blur-3xl" />
                <div className="absolute bottom-20 left-20 w-96 h-96 bg-gray-300 rounded-full blur-3xl" />
            </div>

            <div className="max-w-7xl mx-auto px-8 relative z-10">
                {/* Header */}
                <div className="text-center mb-20">
                    <div
                        className={`transition-all duration-1000 ${
                            isVisible
                                ? "opacity-100 translate-y-0"
                                : "opacity-0 translate-y-8"
                        }`}
                    >
                        <span className="text-sm font-medium text-gray-400 tracking-[0.2em] uppercase mb-4 block">
                            Professional Journey
                        </span>
                        <h2 className="text-6xl md:text-7xl font-bold mb-6 font-['Inter'] leading-none">
                            Work
                            <br />
                            <span className="text-gray-400">Experience</span>
                        </h2>
                        <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
                            A timeline of professional growth, from intern
                            developer to front-end full timer, building
                            impactful solutions.
                        </p>
                    </div>
                </div>

                {/* Experience Timeline */}
                <div className="space-y-8">
                    {experiences.map((experience, index) => (
                        <div
                            key={index}
                            className={`group relative transition-all duration-700 ${
                                isVisible
                                    ? "opacity-100 translate-y-0"
                                    : "opacity-0 translate-y-12"
                            }`}
                            style={{
                                transitionDelay: `${index * 200}ms`,
                            }}
                        >
                            {/* Timeline Line */}
                            <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-gray-600 via-gray-700 to-gray-600 opacity-30" />

                            {/* Timeline Dot */}
                            <div className="absolute left-6 top-8 w-4 h-4 rounded-full border-2 border-white bg-black group-hover:bg-white group-hover:border-black transition-colors duration-300">
                                {experience.featured && (
                                    <div className="absolute inset-1 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full animate-pulse" />
                                )}
                            </div>

                            {/* Experience Card */}
                            <div className="ml-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-3xl p-8 border border-gray-700 hover:border-gray-600 transition-all duration-500 hover:shadow-2xl hover:shadow-white/5 group-hover:scale-[1.02]">
                                {/* Header */}
                                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
                                    <div className="flex-1">
                                        <div className="flex items-center gap-3 mb-2">
                                            <Briefcase className="w-5 h-5 text-gray-400" />
                                            <span
                                                className={`px-3 py-1 text-xs font-medium rounded-full ${
                                                    experience.type ===
                                                    "Full-time"
                                                        ? "bg-green-100 text-green-700 border border-green-200"
                                                        : "bg-blue-100 text-blue-700 border border-blue-200"
                                                }`}
                                            >
                                                {experience.type}
                                            </span>
                                            {experience.featured && (
                                                <div className="w-2 h-2 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full animate-pulse" />
                                            )}
                                        </div>

                                        <h3 className="text-2xl md:text-3xl font-bold mb-2 font-['Inter'] group-hover:text-white transition-colors duration-300">
                                            {experience.title}
                                        </h3>

                                        <p className="text-xl text-gray-300 font-semibold mb-3">
                                            {experience.company}
                                        </p>

                                        <div className="flex flex-wrap gap-4 text-sm text-gray-400">
                                            <div className="flex items-center gap-2">
                                                <Calendar className="w-4 h-4" />
                                                {experience.period}
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <MapPin className="w-4 h-4" />
                                                {experience.location}
                                            </div>
                                            <span className="px-2 py-1 bg-gray-700 rounded text-xs">
                                                {experience.duration}
                                            </span>
                                        </div>
                                    </div>

                                    <ArrowUpRight className="w-6 h-6 text-gray-400 group-hover:text-white group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300 mt-4 md:mt-0" />
                                </div>

                                {/* Description */}
                                <p className="text-gray-300 leading-relaxed mb-6 font-['Inter']">
                                    {experience.description}
                                </p>

                                {/* Achievements */}
                                <div className="mb-6">
                                    <h4 className="text-white font-semibold mb-3 font-['Inter']">
                                        Key Achievements
                                    </h4>
                                    <ul className="space-y-2">
                                        {experience.achievements.map(
                                            (achievement, achIndex) => (
                                                <li
                                                    key={achIndex}
                                                    className="flex items-start gap-3 text-gray-300"
                                                >
                                                    <div className="w-1.5 h-1.5 bg-white rounded-full mt-2 flex-shrink-0" />
                                                    <span className="text-sm leading-relaxed">
                                                        {achievement}
                                                    </span>
                                                </li>
                                            )
                                        )}
                                    </ul>
                                </div>

                                {/* Tech Stack */}
                                <div>
                                    <h4 className="text-white font-semibold mb-3 font-['Inter']">
                                        Technologies Used
                                    </h4>
                                    <div className="flex flex-wrap gap-2">
                                        {experience.tech.map(
                                            (tech, techIndex) => (
                                                <span
                                                    key={techIndex}
                                                    className="px-3 py-1 bg-white text-black text-xs rounded-full font-['Inter'] hover:bg-gray-200 transition-colors duration-300"
                                                >
                                                    {tech}
                                                </span>
                                            )
                                        )}
                                    </div>
                                </div>
                            </div>

                            {/* Decorative Elements */}
                            <div className="absolute top-4 right-4 w-3 h-3 bg-gradient-to-br from-blue-400 to-purple-400 rounded-full opacity-0 group-hover:opacity-60 transition-opacity duration-500 animate-pulse" />
                        </div>
                    ))}
                </div>

                {/* Call to Action */}
                <div
                    className={`text-center mt-20 transition-all duration-1000 delay-1000 ${
                        isVisible
                            ? "opacity-100 translate-y-0"
                            : "opacity-0 translate-y-8"
                    }`}
                >
                    <button className="group inline-flex items-center gap-4 bg-white text-black px-10 py-5 rounded-full font-semibold hover:bg-gray-200 transition-all duration-300 hover:scale-105 hover:shadow-2xl font-['Inter']">
                        Download Resume
                        <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                    </button>
                </div>
            </div>
        </section>
    );
}
