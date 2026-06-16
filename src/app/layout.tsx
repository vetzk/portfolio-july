import type { Metadata } from "next";
import { Bebas_Neue, Inter } from "next/font/google";
import SiteLoadingGate from "./_components/site-loading-gate";
import "./globals.css";

const bebasNeue = Bebas_Neue({
  variable: "--font-bebas",
  subsets: ["latin"],
  weight: ["400"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://portfolio-july-omega.vercel.app";

export const metadata: Metadata = {
  title: "Alfredo Vetsera",
  description: "Personal Portfolio",
  metadataBase: new URL(siteUrl),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${bebasNeue.variable} ${inter.variable} font-sans antialiased mx-auto w-full max-w-[1920px]`}
      >
        <SiteLoadingGate>{children}</SiteLoadingGate>
      </body>
    </html>
  );
}
