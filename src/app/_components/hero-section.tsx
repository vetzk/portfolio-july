"use client";

import React, { useEffect, useMemo, useState } from "react";
import Image from "next/image";

const HERO_CHIPS = ["Next.js", "TypeScript", "Laravel", "Creative code"];

export default function HeroSection() {
    const [pointer, setPointer] = useState({ x: 0.5, y: 0.5 });
    const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

    useEffect(() => {
        const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
        const syncPreference = () => setPrefersReducedMotion(mediaQuery.matches);

        syncPreference();
        mediaQuery.addEventListener("change", syncPreference);

        return () => {
            mediaQuery.removeEventListener("change", syncPreference);
        };
    }, []);

    const imageTransform = useMemo(() => {
        const translateX = (pointer.x - 0.5) * 14;
        const translateY = (pointer.y - 0.5) * 14;
        const rotateY = (pointer.x - 0.5) * 8;
        const rotateX = (0.5 - pointer.y) * 6;
        return `translate3d(${translateX}px, ${translateY}px, 0) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    }, [pointer]);

    const handlePointerMove = (event: React.MouseEvent<HTMLElement>) => {
        if (prefersReducedMotion) return;

        const rect = event.currentTarget.getBoundingClientRect();
        const x = (event.clientX - rect.left) / rect.width;
        const y = (event.clientY - rect.top) / rect.height;
        setPointer({
            x: Math.max(0, Math.min(1, x)),
            y: Math.max(0, Math.min(1, y)),
        });
    };

    const resetPointer = () => setPointer({ x: 0.5, y: 0.5 });

    return (
        <section
            id="home"
            className="relative flex min-h-svh w-full items-end pb-24 pt-28 md:min-h-[921px] md:pb-32"
            onMouseMove={handlePointerMove}
            onMouseLeave={resetPointer}
        >
            <div className="absolute inset-0 z-0 overflow-hidden">
                {prefersReducedMotion ? (
                    <Image
                        src="/hero-cinematic-orb.png"
                        alt=""
                        fill
                        priority
                        unoptimized
                        className="object-cover opacity-60"
                    />
                ) : (
                    <video
                        aria-hidden="true"
                        autoPlay
                        className="h-full w-full object-cover opacity-60"
                        loop
                        muted
                        playsInline
                        poster="/hero-cinematic-orb.png"
                        preload="metadata"
                        style={{
                            transform: imageTransform,
                            transition:
                                "transform 160ms cubic-bezier(0.2, 0.8, 0.2, 1)",
                        }}
                    >
                        <source src="/orb.mp4" type="video/mp4" />
                    </video>
                )}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/20 to-transparent" />
                <div className="hero-pulse pointer-events-none absolute left-1/2 top-1/2 h-[48vh] w-[48vw] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/[0.04] blur-[100px]" />
            </div>

            <div className="relative z-10 layout-shell w-full">
                <span className="hero-fade-up font-display mb-4 block text-[11px] font-medium uppercase tracking-[0.35em] text-neutral-500 [animation-delay:80ms]">
                    Alfredo Vetsera / {new Date().getFullYear()}
                </span>
                <h1 className="hero-fade-up font-display mb-8 max-w-4xl text-4xl font-bold leading-[1.1] tracking-[-0.02em] text-white sm:text-5xl md:text-6xl lg:text-7xl xl:text-[80px] [animation-delay:160ms]">
                    Full stack
                    <br />
                    developer
                </h1>
                <div className="hero-fade-up flex flex-wrap gap-3 [animation-delay:240ms] md:gap-4">
                    {HERO_CHIPS.map((chip) => (
                        <div
                            key={chip}
                            className="border border-neutral-700 px-4 py-1 font-display text-[10px] font-medium uppercase tracking-widest text-[#c7c6c6]"
                        >
                            {chip}
                        </div>
                    ))}
                </div>
            </div>

            <style jsx>{`
                .hero-fade-up {
                    opacity: 0;
                    transform: translateY(14px);
                    animation: heroFadeUp 720ms cubic-bezier(0.16, 1, 0.3, 1)
                        forwards;
                }

                .hero-pulse {
                    animation: heroPulse 6s ease-in-out infinite;
                }

                @media (prefers-reduced-motion: reduce) {
                    .hero-fade-up {
                        opacity: 1;
                        transform: none;
                        animation: none;
                    }

                    .hero-pulse {
                        animation: none;
                        opacity: 0.24;
                        transform: translate(-50%, -50%) scale(1);
                    }
                }

                @keyframes heroFadeUp {
                    0% {
                        opacity: 0;
                        transform: translateY(14px);
                    }
                    100% {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }

                @keyframes heroPulse {
                    0%,
                    100% {
                        opacity: 0.2;
                        transform: translate(-50%, -50%) scale(1);
                    }
                    50% {
                        opacity: 0.34;
                        transform: translate(-50%, -50%) scale(1.08);
                    }
                }
            `}</style>
        </section>
    );
}
