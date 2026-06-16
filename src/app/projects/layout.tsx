import SiteFooter from "../_components/site-footer";
import SiteHeader from "../_components/site-header";

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen overflow-x-hidden bg-[#0a0a0a] text-[#f4f0e6]">
      <SiteHeader mode="site" />
      <main className="relative overflow-x-hidden">{children}</main>
      <SiteFooter />
    </div>
  );
}
