import Link from "next/link";

const SOCIAL = [
    { label: "GitHub", href: "https://github.com/vetzk" },
    {
        label: "LinkedIn",
        href: "https://linkedin.com/in/alfredo-vetsera",
    },
    { label: "Email", href: "mailto:zestvetz@gmail.com" },
];

export default function SiteFooter() {
    return (
        <footer className="mt-24 w-full border-t border-neutral-900 bg-neutral-950 py-12 md:mt-[160px]">
            <div className="layout-shell flex w-full flex-col items-center justify-between gap-10 md:flex-row">
                <div className="font-display text-xl font-bold tracking-tighter text-white">
                    Alfredo Vetsera
                </div>
                <p className="font-display text-center text-[10px] uppercase tracking-[0.3em] text-neutral-400">
                    © {new Date().getFullYear()} Alfredo Vetsera. All rights
                    reserved.
                </p>
                <div className="flex flex-wrap justify-center gap-8">
                    {SOCIAL.map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-display text-[10px] uppercase tracking-[0.3em] text-neutral-600 underline decoration-1 underline-offset-8 transition-colors duration-300 ease-in-out hover:text-white"
                        >
                            {item.label}
                        </Link>
                    ))}
                </div>
            </div>
        </footer>
    );
}
