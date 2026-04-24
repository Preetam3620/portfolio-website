"use client";

import { motion } from "framer-motion";
import { stagger } from "@/lib/animations";

const certifications = [
  {
    title: "AWS Certified Solutions Architect – Associate",
    issuer: "Amazon Web Services",
    date: "December 2024",
    badge: "AWS",
  },
  {
    title: "UC Berkeley AI Hackathon 2025 – Best AI Agent Deployment",
    issuer: "UC Berkeley",
    date: "June 2025",
    badge: "Award",
  },
  {
    title: "ISTE Hack-SPRINT v3.0 – Business Impact Award",
    issuer: "ISTE",
    date: "September 2021",
    badge: "Award",
  },
  {
    title: "The Complete 2021 Flutter Development Bootcamp with Dart",
    issuer: "Udemy",
    date: "2021",
    badge: "Course",
  },
];

const badgeColors: Record<string, string> = {
  AWS: "bg-orange-500/10 text-orange-400 border-orange-500/25",
  Award: "bg-yellow-500/10 text-yellow-400 border-yellow-500/25",
  Course: "bg-blue-500/10 text-blue-400 border-blue-500/25",
};

const itemVariant = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45 } },
};

export default function Certifications() {
  return (
    <section id="certifications" className="py-24 px-4 sm:px-6 border-t border-zinc-800/60">
      <div className="max-w-3xl mx-auto">

        <motion.div
          className="flex items-center gap-4 mb-10"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl font-semibold text-white whitespace-nowrap">Certifications &amp; Awards</h2>
          <div className="flex-1 h-px bg-zinc-800" />
        </motion.div>

        <motion.div
          className="space-y-3"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
        >
          {certifications.map((cert, i) => (
            <motion.div
              key={i}
              variants={itemVariant}
              className="flex items-start gap-4 bg-zinc-900 border border-zinc-800 rounded-xl px-5 py-4 hover:border-zinc-700 transition-colors"
            >
              <span
                className={`text-xs font-semibold border px-2 py-0.5 rounded-full shrink-0 mt-0.5 ${
                  badgeColors[cert.badge] ?? "bg-zinc-800 text-zinc-400 border-zinc-700"
                }`}
              >
                {cert.badge}
              </span>
              <div className="flex-1 min-w-0">
                <p className="text-white text-sm font-medium leading-snug">{cert.title}</p>
                <p className="text-zinc-500 text-xs mt-1">
                  {cert.issuer} · {cert.date}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
