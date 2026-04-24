"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";

// Stagger container + child variant for the CTA row
const ctaContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.4 } },
};

const ctaChild = {
  hidden: { opacity: 0, y: 8 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.38, ease: "easeOut" as const } },
};

export default function Hero() {
  const reduced = useReducedMotion();

  // Returns entrance props or empty object based on reduced-motion preference
  const enter = (delay: number) =>
    reduced
      ? {}
      : {
          initial: { opacity: 0, y: 12 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.5, delay, ease: "easeOut" as const },
        };

  // Hover/tap interaction props — suppressed when reduced motion is on
  const press = reduced
    ? {}
    : {
        whileHover: { y: -1, transition: { duration: 0.15 } },
        whileTap: { scale: 0.97, transition: { duration: 0.1 } },
      };

  return (
    <section id="hero" className="py-28 px-4 sm:px-6">
      <div className="max-w-3xl mx-auto flex flex-col items-center text-center">

        {/* Avatar */}
        <motion.div
          {...(reduced
            ? {}
            : {
                initial: { opacity: 0, scale: 0.97 },
                animate: { opacity: 1, scale: 1 },
                transition: { duration: 0.45, ease: "easeOut" as const },
              })}
          className="relative w-24 h-24 rounded-full bg-zinc-800 ring-1 ring-zinc-700 overflow-hidden flex items-center justify-center mb-6 shrink-0"
        >
          <span className="text-xl font-semibold text-zinc-500 select-none">PM</span>
          <Image
            src="/preetam.png"
            alt="Preetam Maske"
            fill
            sizes="96px"
            className="object-cover"
            priority
          />
        </motion.div>

        {/* Name */}
        <motion.h1
          {...enter(0.12)}
          className="text-5xl sm:text-6xl font-bold tracking-tight leading-none text-white mb-3"
        >
          Preetam Maske
        </motion.h1>

        {/* Role */}
        <motion.p
          {...enter(0.2)}
          className="text-base sm:text-lg text-zinc-400 text-balance mb-1.5"
        >
          Full Stack Developer &amp; Software Engineer
        </motion.p>

        {/* Academic context */}
        <motion.p
          {...enter(0.26)}
          className="text-sm text-zinc-500 text-balance mb-5"
        >
          MS Computer Software Engineering &middot; San Jose State University
        </motion.p>

        {/* Location */}
        <motion.div
          {...(reduced
            ? {}
            : {
                initial: { opacity: 0 },
                animate: { opacity: 1 },
                transition: { duration: 0.4, delay: 0.32 },
              })}
          className="flex items-center gap-1.5 text-zinc-500 text-sm mb-8"
        >
          <svg
            className="w-3.5 h-3.5 shrink-0"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
          San Jose, CA
        </motion.div>

        {/* Primary CTAs — staggered entrance */}
        <motion.div
          {...(reduced
            ? {}
            : { variants: ctaContainer, initial: "hidden", animate: "visible" })}
          className="flex flex-wrap justify-center gap-3 mb-4"
        >

          {/* Resume — primary */}
          <motion.a
            {...(reduced ? {} : { variants: ctaChild })}
            {...press}
            href="/Preetam_Maske.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white text-zinc-950 hover:bg-zinc-100 transition-colors px-4 py-2.5 rounded-xl text-sm font-medium"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              />
            </svg>
            Resume
          </motion.a>

          {/* LinkedIn — secondary */}
          <motion.a
            {...(reduced ? {} : { variants: ctaChild })}
            {...press}
            href="https://www.linkedin.com/in/preetam-maske/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-zinc-900 border border-zinc-700 text-zinc-300 hover:border-zinc-500 hover:text-white transition-colors px-4 py-2.5 rounded-xl text-sm font-medium"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
            LinkedIn
          </motion.a>

          {/* GitHub — secondary */}
          <motion.a
            {...(reduced ? {} : { variants: ctaChild })}
            {...press}
            href="https://github.com/Preetam3620"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-zinc-900 border border-zinc-700 text-zinc-300 hover:border-zinc-500 hover:text-white transition-colors px-4 py-2.5 rounded-xl text-sm font-medium"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
            GitHub
          </motion.a>

        </motion.div>

        {/* Email — quiet text link, fades in last */}
        <motion.a
          {...enter(0.64)}
          whileHover={reduced ? undefined : { y: -1, transition: { duration: 0.15 } }}
          href="mailto:preetam.a.maske@gmail.com"
          className="text-sm text-zinc-600 hover:text-zinc-300 transition-colors"
        >
          preetam.a.maske@gmail.com
        </motion.a>

      </div>
    </section>
  );
}
