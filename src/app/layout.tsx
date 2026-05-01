import type { Metadata } from "next";
import { Epilogue, Inter } from "next/font/google";
import "./globals.css";

const epilogue = Epilogue({
  variable: "--font-epilogue",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
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
        className={`${epilogue.variable} ${inter.variable} font-sans antialiased max-w-[1920px] mx-auto w-full`}
      >
        {children}
      </body>
    </html>
  );
}
