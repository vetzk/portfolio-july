import { ChevronDown } from "lucide-react";
import React from "react";
import Image from "next/image";

export default function HeroSection({ scrollY }: { scrollY: number }) {
    return (
        <section
            id="home"
            className="relative h-screen flex items-center overflow-hidden"
        >
            <div
                className="absolute inset-0 bg-white"
                style={{
                    transform: `translateY(${scrollY * 0.5}px)`,
                }}
            />

            <div className="relative z-10 w-full max-w-7xl mx-auto px-8 flex items-center justify-between">
                {/* Image Side */}
                <div className="flex-1 flex justify-center items-center">
                    <div
                        className="relative group"
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
                            className="object-cover filter drop-shadow-2xl transition-all duration-700 group-hover:scale-105 group-hover:rotate-3"
                        />
                        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full blur-xl" />
                    </div>
                </div>

                {/* Text Side */}
                <div className="flex-1 text-black pl-16">
                    <p className="text-lg font-medium mb-4 text-black/70 tracking-wider uppercase font-['Inter']">
                        Alfredo Vetsera
                    </p>
                    <p className="text-7xl font-bold mb-6 leading-tight font-['Inter']">
                        Full Stack
                        <br />
                        <span className="text-black">Developer</span>
                    </p>
                    <p className="text-xl mb-8 text-black leading-relaxed max-w-lg font-['Inter']">
                        Crafting digital experiences that blur the boundaries
                        between art, technology, and human interaction.
                    </p>
                    <div className="flex gap-6">
                        <button className="bg-black text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-black transition-all duration-300 hover:scale-105 hover:shadow-xl font-['Inter']">
                            View Work
                        </button>
                        <button className="border-2 border-black text-black px-8 py-4 rounded-full font-semibold hover:bg-black hover:text-white transition-all duration-300 hover:scale-105 font-['Inter']">
                            Get in Touch
                        </button>
                    </div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-black animate-bounce">
                <ChevronDown className="w-8 h-8" />
            </div>
        </section>
    );
}
