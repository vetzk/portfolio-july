import Link from "next/link";

const SOCIAL = [
  { label: "GitHub", href: "https://github.com/vetzk" },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/alfredo-vetsera-45344989/",
  },
  { label: "Email", href: "mailto:zestvetz@gmail.com" },
];

export default function SiteFooter() {
  return (
    <footer className="mt-24 w-full border-t-2 border-white bg-[#0a0a0a] py-12 md:mt-[160px]">
      <div className="layout-shell flex w-full flex-col items-center justify-between gap-10 md:flex-row">
        <div className="flex items-center gap-3">
          <span className="p5-logo-mark scale-75">
            <span className="font-display text-sm">AV</span>
          </span>
          <span className="font-display text-2xl tracking-wide text-white">
            Alfredo Vetsera
          </span>
        </div>
        <p className="font-display text-center text-xs uppercase tracking-[0.2em] text-[#9a9590]">
          © {new Date().getFullYear()} Alfredo Vetsera. All rights reserved.
        </p>
        <div className="flex flex-wrap justify-center gap-6">
          {SOCIAL.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="font-display text-xs uppercase tracking-[0.14em] text-[#9a9590] underline decoration-[#2a2a2a] decoration-2 underline-offset-8 transition-colors hover:text-[#e60026] hover:decoration-[#e60026]"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
