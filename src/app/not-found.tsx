import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";

export default function NotFound() {
    return (
        <main className="relative min-h-screen overflow-hidden bg-[#050505] text-[#e5e2e1]">
            <div className="pointer-events-none absolute inset-0 opacity-[0.05]">
                <div className="absolute left-20 top-20 h-64 w-64 rounded-full bg-white blur-3xl" />
                <div className="absolute bottom-20 right-20 h-64 w-64 rounded-full bg-[#353534] blur-3xl" />
            </div>

            <section className="layout-shell relative z-10 flex min-h-screen flex-col justify-center py-24">
                <p className="label-caps mb-6 text-[#8e9192]">Error 404</p>
                <h1 className="font-display mb-6 max-w-3xl text-5xl font-semibold leading-[1.05] tracking-[-0.02em] text-white md:text-7xl">
                    The page you are looking for does not exist.
                </h1>
                <p className="mb-10 max-w-2xl text-base leading-[1.8] text-[#c4c7c8] md:text-lg">
                    It may have been moved, renamed, or removed. You can head
                    back to the homepage or continue exploring recent work.
                </p>

                <div className="flex flex-wrap gap-3">
                    <Link
                        href="/"
                        className="inline-flex items-center gap-2 border border-white px-4 py-2 text-xs uppercase tracking-[0.18em] text-white transition-colors hover:bg-white hover:text-black"
                    >
                        <ArrowLeft className="h-4 w-4" />
                        Back home
                    </Link>
                    <Link
                        href="/#works"
                        className="inline-flex items-center gap-2 border border-[#444748] px-4 py-2 text-xs uppercase tracking-[0.18em] text-[#c4c7c8] transition-colors hover:border-[#8e9192] hover:text-white"
                    >
                        View works
                        <ArrowUpRight className="h-4 w-4" />
                    </Link>
                </div>
            </section>
        </main>
    );
}
