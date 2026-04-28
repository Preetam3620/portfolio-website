"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <div className="mt-16 flex flex-col md:flex-row md:space-x-10 space-y-4 md:space-y-0">
      <div className="w-full md:w-36 flex-shrink-0">
        <h2 className="text-base font-medium text-white">About</h2>
      </div>
      <motion.div
        className="flex-1"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.15 }}
      >
        <div className="space-y-3">
          <p className="text-base leading-normal" style={{ color: "#9B9B9B" }}>
            Most people care about how an app looks. I care about how it holds up at 3:00 AM when
            traffic spikes in Europe while the US is just waking up. My time at Volkswagen was a
            masterclass in global reliability; two years ensuring backends stayed upright across
            regions and time zones. When you&apos;re building at that scale, event-driven architecture
            and cloud-native design aren&apos;t just options, they&apos;re survival tactics.
          </p>
          <p className="text-base leading-normal" style={{ color: "#9B9B9B" }}>
            My recent work has pulled me toward AI-native application development where AI Agents do
            real work, not just surface-level automation. A good example is AlphaRescue, an
            autonomous emergency dispatch system that listens to live distress calls, reasons about
            the situation, and coordinates the right response without a human in the loop.
          </p>
          <p className="text-base leading-normal" style={{ color: "#9B9B9B" }}>
            I recently graduated with a Master&apos;s in Computer Software Engineering from SJSU,
            and I&apos;m drawn to work where the problems are genuinely hard and the stakes are real.
          </p>
        </div>
      </motion.div>
    </div>
  );
}
