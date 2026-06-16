import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import SiteFooter from "./_components/site-footer";
import SiteHeader from "./_components/site-header";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-[#f4f0e6]">
      <SiteHeader mode="site" />

      <main className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 p5-halftone opacity-25" />

        <section className="layout-shell relative z-10 flex min-h-[calc(100svh-5rem)] flex-col justify-center py-24 pt-28">
          <div className="mb-6 flex flex-wrap items-center gap-4">
            <span className="p5-section-tag">Error 404</span>
            <span className="label-caps text-[#e60026]">Not found</span>
          </div>

          <h1 className="font-display mb-6 max-w-3xl text-5xl leading-[0.95] text-white md:text-7xl">
            PAGE
            <br />
            <span className="p5-text-outline">MISSING.</span>
          </h1>

          <p className="mb-10 max-w-2xl font-sans text-base leading-relaxed text-[#9a9590] md:text-lg">
            It may have been moved, renamed, or removed. Head back home or browse
            recent work.
          </p>

          <div className="flex flex-wrap gap-4">
            <Link href="/" className="p5-btn-primary inline-flex">
              <span className="inline-flex items-center gap-2">
                <ArrowLeft className="h-4 w-4" />
                Back home
              </span>
            </Link>
            <Link href="/#works" className="p5-btn-outline inline-flex">
              <span className="inline-flex items-center gap-2">
                View work
                <ArrowUpRight className="h-4 w-4" />
              </span>
            </Link>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
