import type { Metadata } from "next";
import { Inter, Rubik } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const rubik = Rubik({
  variable: "--font-rubik",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Preetam Maske - Full Stack Developer",
  description: "Full Stack Developer & Software Engineer specializing in modern web technologies, cloud solutions, and mobile development.",
  keywords: "Full Stack Developer, Software Engineer, React, Next.js, Node.js, Python, AWS, Cloud Computing",
  authors: [{ name: "Preetam Maske" }],
  viewport: "width=device-width, initial-scale=1",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${rubik.variable} bg-primary text-text-primary font-sans antialiased`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
