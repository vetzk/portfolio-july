"use client";

import { useEffect, useState } from "react";

type P5LoadingScreenProps = {
  progress: number;
  exiting?: boolean;
};

const STEPS = [
  "Syncing dossier",
  "Loading arsenal",
  "Preparing command menu",
  "Ready",
];

export default function P5LoadingScreen({
  progress,
  exiting = false,
}: P5LoadingScreenProps) {
  const [stepIndex, setStepIndex] = useState(0);

  useEffect(() => {
    const id = window.setInterval(() => {
      setStepIndex((current) => (current + 1) % STEPS.length);
    }, 700);
    return () => window.clearInterval(id);
  }, []);

  const clamped = Math.min(100, Math.max(0, Math.round(progress)));

  return (
    <div
      className={`p5-loading-screen ${exiting ? "p5-loading-screen-exit" : ""}`}
      role="status"
      aria-live="polite"
      aria-label="Loading portfolio"
    >
      <div className="pointer-events-none absolute inset-0 p5-halftone opacity-35" />
      <div className="pointer-events-none absolute inset-0 p5-loading-stripe opacity-20" />

      <div className="relative z-10 flex min-h-[100dvh] flex-col justify-between px-6 py-8 md:px-12 md:py-10">
        <div className="flex items-start justify-between gap-6">
          <div>
            <p className="label-caps text-[#e60026]">Initializing</p>
            <h1 className="font-display text-5xl leading-[0.9] text-white md:text-7xl">
              VETSERA
              <br />
              <span className="p5-text-outline">ONLINE.</span>
            </h1>
          </div>
          <p className="font-display text-4xl text-[#e60026] md:text-5xl">
            {String(clamped).padStart(3, "0")}
          </p>
        </div>

        <div className="max-w-xl">
          <div className="mb-3 flex items-center justify-between gap-4">
            <p className="font-display text-sm uppercase tracking-[0.2em] text-white">
              {STEPS[stepIndex]}
            </p>
            <p className="label-caps text-[#9a9590]">{clamped}%</p>
          </div>
          <div className="p5-loading-track">
            <div
              className="p5-loading-fill"
              style={{ width: `${clamped}%` }}
            />
          </div>
        </div>

        <div className="h-3 w-full p5-hazard-stripe" aria-hidden />
      </div>
    </div>
  );
}
