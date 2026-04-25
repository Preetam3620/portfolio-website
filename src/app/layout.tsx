import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Preetam Maske — Full Stack Developer",
  description:
    "Full Stack Developer & Software Engineer based in San Jose, CA. Specializing in React, Node.js, Python, and AWS.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} antialiased bg-[#141414] text-white`}>
        {children}
      </body>
    </html>
  );
}
