import { ChevronDown } from "lucide-react";
import React from "react";
import Image from "next/image";

export default function HeroSection({ scrollY }: { scrollY: number }) {
    return (
        <section
            id="home"
            className="relative lg:min-h-screen flex items-center overflow-hidden pt-10"
        >
            <div
                className="absolute inset-0 bg-white"
                style={{
                    transform: `translateY(${scrollY * 0.5}px)`,
                }}
            />

            <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-0 py-20 lg:py-0">
                {/* Image Side */}
                <div className="flex-1 flex justify-center items-center order-1 lg:order-none">
                    <div
                        className="relative group w-full max-w-[300px] sm:max-w-[400px] lg:max-w-[500px]"
                        style={{
                            transform: `translateY(${
                                scrollY * 0.3
                            }px) rotateY(${scrollY * 0.1}deg)`,
                        }}
                    >
                        <Image
                            src="/abstract-black-sculpture-modern-art-design-3d-render.png"
                            alt="Sculptural Object"
                            width={500}
                            height={500}
                            unoptimized
                            className="object-cover filter drop-shadow-2xl transition-all duration-700 group-hover:scale-105 group-hover:rotate-3 w-full h-auto"
                        />
                        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full blur-xl" />
                    </div>
                </div>

                {/* Text Side */}
                <div className="flex-1 text-black lg:pl-16 text-center lg:text-left order-2 lg:order-none">
                    <p className="text-sm sm:text-base lg:text-lg font-medium mb-3 lg:mb-4 text-black/70 tracking-wider uppercase font-['Inter']">
                        Alfredo Vetsera
                    </p>
                    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 lg:mb-6 leading-tight font-['Inter']">
                        Full Stack
                        <br />
                        <span className="text-black">Developer</span>
                    </h1>
                    <p className="text-base sm:text-lg lg:text-xl mb-6 lg:mb-8 text-black leading-relaxed max-w-lg mx-auto lg:mx-0 font-['Inter'] px-4 lg:px-0">
                        Crafting digital experiences that blur the boundaries
                        between art, technology, and human interaction.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center lg:justify-start px-4 lg:px-0">
                        <button className="bg-black text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold hover:bg-white hover:text-black transition-all duration-300 hover:scale-105 hover:shadow-xl font-['Inter'] text-sm sm:text-base">
                            View Work
                        </button>
                        <button className="border-2 border-black text-black px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold hover:bg-black hover:text-white transition-all duration-300 hover:scale-105 font-['Inter'] text-sm sm:text-base">
                            Get in Touch
                        </button>
                    </div>
                </div>
            </div>

            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-black animate-bounce">
                <ChevronDown className="w-6 h-6 sm:w-8 sm:h-8" />
            </div>
        </section>
    );
}
