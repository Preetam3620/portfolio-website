"use client";

import { motion } from "framer-motion";
import { fadeUp } from "@/lib/animations";

export default function About() {
  return (
    <section id="about" className="py-24 px-4 sm:px-6 border-t border-zinc-800/60">
      <div className="max-w-3xl mx-auto">

        <motion.div
          className="flex items-center gap-4 mb-10"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl font-semibold text-white whitespace-nowrap">About Me</h2>
          <div className="flex-1 h-px bg-zinc-800" />
        </motion.div>

        <motion.div
          className="space-y-5 text-zinc-400 leading-relaxed text-base"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.25 }}
        >
          <p>
            I&apos;m a passionate Software Engineer currently pursuing my Master&apos;s in Computer
            Software Engineering at San Jose State University. With over 2 years of professional
            experience at Volkswagen Group Technology Solutions, I&apos;ve developed expertise in
            building scalable web applications and cloud infrastructure.
          </p>
          <p>
            My journey spans from building enterprise-scale systems at Volkswagen serving 10,000+
            users to projects like Rufus, an AI shopping assistant using LangGraph multi-agent
            workflows, and AlphaRescue, an AI-driven emergency dispatch system. I specialize in
            backend engineering and full-stack development with technologies like Python, Node.js,
            FastAPI, and AWS.
          </p>
          <p>
            I believe in continuous learning and have a track record of mentoring teams, winning
            hackathons, and delivering end-to-end solutions from requirement gathering to deployment.
          </p>
        </motion.div>

      </div>
    </section>
  );
}
