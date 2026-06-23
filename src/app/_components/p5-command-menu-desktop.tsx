"use client";

import { X } from "lucide-react";
import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type RefObject,
} from "react";
import { MENU_NAV } from "./p5-main-menu";
import P5MarqueeHazard from "./p5-marquee-hazard";

type P5CommandMenuDesktopProps = {
  isOpen: boolean;
  onClose: () => void;
  onSelect: (sectionId: string) => void;
  triggerRef?: RefObject<HTMLButtonElement | null>;
};

const ENTER_DELAY_MS = 60;
const UNFOLD_MS = 640;
const FOLD_MS = 400;

const COMMAND_MENU_MARQUEE_TOP = [
  "COMMAND SELECT",
  "SECTION NAVIGATION",
  "JUMP — NO SCROLL",
  "ALFREDO VETSERA",
  "FULL STACK ENGINEER",
  "SURABAYA / REMOTE",
  "OPEN FOR PROJECTS",
] as const;

const COMMAND_MENU_MARQUEE_BOTTOM = MENU_NAV.map((item) =>
  item.name.toUpperCase(),
);

type MenuPhase = "entering" | "open" | "exiting";

export default function P5CommandMenuDesktop({
  isOpen,
  onClose,
  onSelect,
  triggerRef,
}: P5CommandMenuDesktopProps) {
  const [hovered, setHovered] = useState<string | null>(null);
  const [isRendered, setIsRendered] = useState(false);
  const [phase, setPhase] = useState<MenuPhase>("entering");
  const shellRef = useRef<HTMLDivElement>(null);

  const syncOrigin = useCallback(() => {
    const shell = shellRef.current;
    if (!shell) return;

    const trigger = triggerRef?.current;
    if (trigger) {
      const rect = trigger.getBoundingClientRect();
      shell.style.setProperty(
        "--p5-cmd-origin-x",
        `${rect.left + rect.width / 2}px`,
      );
      shell.style.setProperty(
        "--p5-cmd-origin-y",
        `${rect.top + rect.height / 2}px`,
      );
      return;
    }

    shell.style.setProperty("--p5-cmd-origin-x", "72px");
    shell.style.setProperty("--p5-cmd-origin-y", "calc(100% - 36px)");
  }, [triggerRef]);

  useEffect(() => {
    if (!isOpen) return;

    syncOrigin();
    setIsRendered(true);
    setPhase("entering");

    const openTimer = window.setTimeout(() => setPhase("open"), UNFOLD_MS);
    return () => window.clearTimeout(openTimer);
  }, [isOpen, syncOrigin]);

  useEffect(() => {
    if (isOpen || !isRendered) return;

    setPhase("exiting");
    const closeTimer = window.setTimeout(() => {
      setIsRendered(false);
      setPhase("entering");
    }, FOLD_MS);

    return () => window.clearTimeout(closeTimer);
  }, [isOpen, isRendered]);

  useEffect(() => {
    if (!isRendered) return;
    const onResize = () => syncOrigin();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [isRendered, syncOrigin]);

  useEffect(() => {
    if (!isRendered) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [isRendered, onClose]);

  if (!isRendered) return null;

  const left = MENU_NAV.slice(0, 5);
  const right = MENU_NAV.slice(5);
  const shellClass = [
    "p5-cmd-shell",
    phase === "entering" ? "p5-cmd-shell-entering" : "",
    phase === "open" ? "p5-cmd-shell-open" : "",
    phase === "exiting" ? "p5-cmd-shell-exiting" : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div
      className={`p5-cmd-backdrop fixed inset-0 z-[140] hidden lg:block ${
        phase === "exiting"
          ? "p5-cmd-backdrop-exiting"
          : "p5-cmd-backdrop-entering"
      }`}
      aria-hidden={phase === "exiting"}
    >
      <div ref={shellRef} className={shellClass}>
        <div className="p5-cmd-paper-crease" aria-hidden />
        <div
          className="p5-cmd-grid absolute inset-0 grid"
          style={{
            gridTemplateColumns: "1fr 1fr",
            gridTemplateRows: "auto 1fr auto",
          }}
        >
          {/* halftone */}
          <div className="pointer-events-none absolute inset-0 p5-halftone opacity-30" />

          {/* top marquee — spans full width */}
          <div className="col-span-2">
            <P5MarqueeHazard
              items={[...COMMAND_MENU_MARQUEE_TOP]}
              prefix="★"
            />
          </div>

          {/* LEFT panel — red background, stacked big labels */}
          <div className="relative flex flex-col justify-between overflow-hidden bg-[#e60026] p-10 xl:p-14">
            {/* diagonal repeating star pattern, P5-style */}
            <div
              className="pointer-events-none absolute inset-0 opacity-10"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='48' height='48' viewBox='0 0 48 48' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpolygon points='24,2 29,17 45,17 32,27 37,42 24,33 11,42 16,27 3,17 19,17' fill='%23000'/%3E%3C/svg%3E")`,
                backgroundRepeat: "repeat",
              }}
              aria-hidden
            />

            <div className="relative z-10">
              <p className="label-caps mb-4 text-[#111111]/60">
                Command select
              </p>
              <h2
                className="font-display leading-[0.85] text-white"
                style={{ fontSize: "clamp(4.5rem,8vw,8rem)" }}
              >
                MAIN
                <br />
                <span
                  style={{
                    color: "transparent",
                    WebkitTextStroke: "3px #111111",
                  }}
                >
                  MENU.
                </span>
              </h2>
            </div>

            <div className="relative z-10 space-y-2">
              {left.map((item, i) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => onSelect(item.id)}
                  onMouseEnter={() => setHovered(item.id)}
                  onMouseLeave={() => setHovered(null)}
                  className="p5-cmd-item group"
                  style={{ animationDelay: `${280 + i * ENTER_DELAY_MS}ms` }}
                >
                  <span className="p5-cmd-index">{item.index}</span>
                  <span className="p5-cmd-label">{item.name}</span>
                </button>
              ))}
            </div>
          </div>

          {/* RIGHT panel — black, with geometric deco and remaining items */}
          <div className="relative flex flex-col justify-between overflow-hidden bg-[#111111] p-10 xl:p-14">
            {/* bold zigzag deco lines */}
            <div
              className="pointer-events-none absolute inset-0 overflow-hidden opacity-20"
              aria-hidden
            >
              {[...Array(8)].map((_, i) => (
                <div
                  key={i}
                  className="absolute h-[2px] w-full bg-white"
                  style={{
                    top: `${10 + i * 12}%`,
                    transform: `skewY(${i % 2 === 0 ? -4 : 4}deg)`,
                  }}
                />
              ))}
            </div>

            <div className="relative z-10">
              <p className="label-caps mb-4 text-[#9a9590]">
                Alfredo Vetsera · 2026
              </p>
              <p className="font-sans text-sm leading-relaxed text-[#9a9590]">
                Select a section to jump directly — no scrolling required.
                <br />
                Press <span className="font-bold text-white">Esc</span> to close
                at any time.
              </p>
            </div>

            <div className="relative z-10 space-y-2">
              {right.map((item, i) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => onSelect(item.id)}
                  onMouseEnter={() => setHovered(item.id)}
                  onMouseLeave={() => setHovered(null)}
                  className="p5-cmd-item-dark group"
                  style={{
                    animationDelay: `${280 + (i + left.length) * ENTER_DELAY_MS}ms`,
                  }}
                >
                  <span className="p5-cmd-index-dark">{item.index}</span>
                  <span className="p5-cmd-label-dark">{item.name}</span>
                </button>
              ))}
            </div>

            <button
              type="button"
              onClick={onClose}
              className="absolute right-8 top-8 z-20 inline-flex items-center justify-center border-2 border-[#2a2a2a] bg-[#0a0a0a] p-2 text-white transition-all hover:border-[#e60026] hover:text-[#e60026]"
              aria-label="Close command menu"
            >
              <X className="h-6 w-6" />
            </button>
          </div>

          {/* bottom marquee — section index strip */}
          <div className="col-span-2">
            <P5MarqueeHazard
              items={COMMAND_MENU_MARQUEE_BOTTOM}
              prefix="◆"
            />
          </div>
          {hovered ? (
            <div className="pointer-events-none fixed bottom-0 left-0 right-0 z-[150] h-1 bg-[#e60026]" />
          ) : null}
        </div>
      </div>
    </div>
  );
}
