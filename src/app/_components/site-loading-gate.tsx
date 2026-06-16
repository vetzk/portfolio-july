"use client";

import { useEffect, useState, type ReactNode } from "react";
import P5LoadingScreen from "./p5-loading-screen";

const MIN_DISPLAY_MS = 1100;
const EXIT_MS = 520;

type SiteLoadingGateProps = {
  children: ReactNode;
};

function waitForWindowLoad() {
  if (document.readyState === "complete") {
    return Promise.resolve();
  }

  return new Promise<void>((resolve) => {
    window.addEventListener("load", () => resolve(), { once: true });
  });
}

function waitForFonts() {
  if (document.fonts?.ready) {
    return document.fonts.ready.then(() => undefined);
  }
  return Promise.resolve();
}

function waitForNextFrame() {
  return new Promise<void>((resolve) => {
    requestAnimationFrame(() => {
      requestAnimationFrame(() => resolve());
    });
  });
}

export default function SiteLoadingGate({ children }: SiteLoadingGateProps) {
  const [progress, setProgress] = useState(8);
  const [isReady, setIsReady] = useState(false);
  const [isExiting, setIsExiting] = useState(false);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    let cancelled = false;
    let progressTimer: number | undefined;

    const tickProgress = () => {
      setProgress((current) => {
        if (current >= 92) return current;
        const bump = current < 40 ? 11 : current < 75 ? 6 : 3;
        return Math.min(92, current + bump);
      });
    };

    progressTimer = window.setInterval(tickProgress, 140);

    const prepare = async () => {
      const startedAt = Date.now();

      await Promise.all([waitForWindowLoad(), waitForFonts(), waitForNextFrame()]);

      const elapsed = Date.now() - startedAt;
      if (elapsed < MIN_DISPLAY_MS) {
        await new Promise((resolve) =>
          window.setTimeout(resolve, MIN_DISPLAY_MS - elapsed),
        );
      }

      if (cancelled) return;

      window.clearInterval(progressTimer);
      setProgress(100);

      await new Promise((resolve) => window.setTimeout(resolve, 180));
      if (cancelled) return;

      const prefersReducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;

      if (prefersReducedMotion) {
        setIsReady(true);
        setShowContent(true);
        return;
      }

      setIsExiting(true);
      window.setTimeout(() => {
        if (cancelled) return;
        setIsReady(true);
        setShowContent(true);
      }, EXIT_MS);
    };

    prepare();

    return () => {
      cancelled = true;
      if (progressTimer) window.clearInterval(progressTimer);
    };
  }, []);

  return (
    <>
      {!isReady ? (
        <P5LoadingScreen progress={progress} exiting={isExiting} />
      ) : null}
      <div
        className={`transition-opacity duration-500 ${
          showContent ? "opacity-100" : "opacity-0"
        }`}
      >
        {children}
      </div>
    </>
  );
}
