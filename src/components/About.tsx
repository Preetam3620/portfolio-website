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
            I&apos;m a passionate Software Engineer currently pursuing my Master&apos;s in Computer
            Software Engineering at San Jose State University. With over 2 years of professional
            experience at Volkswagen, I&apos;ve developed expertise in
            building scalable web applications and cloud infrastructure.
          </p>
          <p className="text-base leading-normal" style={{ color: "#9B9B9B" }}>
            My journey spans from building enterprise-scale systems at Volkswagen to projects like Rufus, an AI shopping assistant using LangGraph multi-agent
            workflows, and AlphaRescue, an AI-driven emergency dispatch system. I specialize in
            backend engineering and full-stack development with technologies like Python, Node.js,
            FastAPI, and AWS.
          </p>
          <p className="text-base leading-normal" style={{ color: "#9B9B9B" }}>
            I believe in continuous learning and have a track record of mentoring teams, winning
            hackathons, and delivering end-to-end solutions from requirement gathering to deployment.
          </p>
        </div>
      </motion.div>
    </div>
  );
}
