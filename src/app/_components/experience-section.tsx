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
            className="bg-black text-white py-16 sm:py-24 lg:py-32 relative overflow-hidden"
        >
            {/* Background blur effects */}
            <div className="absolute inset-0 opacity-[0.03]">
                <div className="absolute top-10 sm:top-20 right-10 sm:right-20 w-48 sm:w-72 lg:w-96 h-48 sm:h-72 lg:h-96 bg-white rounded-full blur-3xl" />
                <div className="absolute bottom-10 sm:bottom-20 left-10 sm:left-20 w-48 sm:w-72 lg:w-96 h-48 sm:h-72 lg:h-96 bg-gray-300 rounded-full blur-3xl" />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Header */}
                <div className="text-center mb-12 sm:mb-16 lg:mb-20">
                    <div
                        className={`transition-all duration-1000 ${
                            isVisible
                                ? "opacity-100 translate-y-0"
                                : "opacity-0 translate-y-8"
                        }`}
                    >
                        <span className="text-xs sm:text-sm font-medium text-gray-400 tracking-[0.2em] uppercase mb-3 sm:mb-4 block">
                            Professional Journey
                        </span>
                        <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6 font-['Inter'] leading-none">
                            Work
                            <br />
                            <span className="text-gray-400">Experience</span>
                        </h2>
                        <p className="text-base sm:text-lg lg:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed px-4">
                            A timeline of professional growth, from intern
                            developer to front-end full timer, building
                            impactful solutions.
                        </p>
                    </div>
                </div>

                {/* Experience Cards */}
                <div className="space-y-6 sm:space-y-8">
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
                            {/* Timeline line and dot - Hidden on mobile */}
                            <div className="hidden md:block absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-gray-600 via-gray-700 to-gray-600 opacity-30" />
                            <div className="hidden md:block absolute left-6 top-8 w-4 h-4 rounded-full border-2 border-white bg-black group-hover:bg-white group-hover:border-black transition-colors duration-300">
                                {experience.featured && (
                                    <div className="absolute inset-1 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full animate-pulse" />
                                )}
                            </div>

                            {/* Card content */}
                            <div className="md:ml-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-2xl sm:rounded-3xl p-5 sm:p-6 lg:p-8 border border-gray-700 hover:border-gray-600 transition-all duration-500 hover:shadow-2xl hover:shadow-white/5 group-hover:scale-[1.02]">
                                {/* Header section */}
                                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4 sm:mb-6">
                                    <div className="flex-1">
                                        {/* Type badge and featured indicator */}
                                        <div className="flex items-center gap-2 sm:gap-3 mb-2 flex-wrap">
                                            <Briefcase className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400 flex-shrink-0" />
                                            <span
                                                className={`px-2 sm:px-3 py-1 text-xs font-medium rounded-full ${
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

                                        {/* Title */}
                                        <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-2 font-['Inter'] group-hover:text-white transition-colors duration-300">
                                            {experience.title}
                                        </h3>

                                        {/* Company */}
                                        <p className="text-lg sm:text-xl text-gray-300 font-semibold mb-3">
                                            {experience.company}
                                        </p>

                                        {/* Meta info */}
                                        <div className="flex flex-wrap gap-3 sm:gap-4 text-xs sm:text-sm text-gray-400">
                                            <div className="flex items-center gap-1.5 sm:gap-2">
                                                <Calendar className="w-3.5 h-3.5 sm:w-4 sm:h-4 flex-shrink-0" />
                                                <span className="whitespace-nowrap">
                                                    {experience.period}
                                                </span>
                                            </div>
                                            <div className="flex items-center gap-1.5 sm:gap-2">
                                                <MapPin className="w-3.5 h-3.5 sm:w-4 sm:h-4 flex-shrink-0" />
                                                <span>
                                                    {experience.location}
                                                </span>
                                            </div>
                                            <span className="px-2 py-1 bg-gray-700 rounded text-xs whitespace-nowrap">
                                                {experience.duration}
                                            </span>
                                        </div>
                                    </div>

                                    {/* Arrow icon */}
                                    <ArrowUpRight className="w-5 h-5 sm:w-6 sm:h-6 text-gray-400 group-hover:text-white group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300 mt-3 md:mt-0 self-end md:self-start" />
                                </div>

                                {/* Description */}
                                <p className="text-sm sm:text-base text-gray-300 leading-relaxed mb-5 sm:mb-6 font-['Inter']">
                                    {experience.description}
                                </p>

                                {/* Achievements */}
                                <div className="mb-5 sm:mb-6">
                                    <h4 className="text-sm sm:text-base text-white font-semibold mb-2 sm:mb-3 font-['Inter']">
                                        Key Achievements
                                    </h4>
                                    <ul className="space-y-2">
                                        {experience.achievements.map(
                                            (achievement, achIndex) => (
                                                <li
                                                    key={achIndex}
                                                    className="flex items-start gap-2 sm:gap-3 text-gray-300"
                                                >
                                                    <div className="w-1.5 h-1.5 bg-white rounded-full mt-1.5 sm:mt-2 flex-shrink-0" />
                                                    <span className="text-xs sm:text-sm leading-relaxed">
                                                        {achievement}
                                                    </span>
                                                </li>
                                            )
                                        )}
                                    </ul>
                                </div>

                                {/* Technologies */}
                                <div>
                                    <h4 className="text-sm sm:text-base text-white font-semibold mb-2 sm:mb-3 font-['Inter']">
                                        Technologies Used
                                    </h4>
                                    <div className="flex flex-wrap gap-2">
                                        {experience.tech.map(
                                            (tech, techIndex) => (
                                                <span
                                                    key={techIndex}
                                                    className="px-2.5 sm:px-3 py-1 bg-white text-black text-xs rounded-full font-['Inter'] hover:bg-gray-200 transition-colors duration-300"
                                                >
                                                    {tech}
                                                </span>
                                            )
                                        )}
                                    </div>
                                </div>
                            </div>

                            {/* Decorative dot - Hidden on mobile */}
                            <div className="hidden md:block absolute top-4 right-4 w-3 h-3 bg-gradient-to-br from-blue-400 to-purple-400 rounded-full opacity-0 group-hover:opacity-60 transition-opacity duration-500 animate-pulse" />
                        </div>
                    ))}
                </div>

                {/* Download Resume button */}
                <div
                    className={`text-center mt-12 sm:mt-16 lg:mt-20 transition-all duration-1000 delay-1000 ${
                        isVisible
                            ? "opacity-100 translate-y-0"
                            : "opacity-0 translate-y-8"
                    }`}
                >
                    <button className="group inline-flex items-center gap-3 sm:gap-4 bg-white text-black px-6 sm:px-8 lg:px-10 py-3 sm:py-4 lg:py-5 rounded-full font-semibold hover:bg-gray-200 transition-all duration-300 hover:scale-105 hover:shadow-2xl font-['Inter'] text-sm sm:text-base">
                        Download Resume
                        <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                    </button>
                </div>
            </div>
        </section>
    );
}
