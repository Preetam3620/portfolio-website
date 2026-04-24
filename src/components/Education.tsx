"use client";

import { motion } from "framer-motion";
import { stagger } from "@/lib/animations";

const education = [
  {
    degree: "MS Computer Software Engineering",
    school: "San Jose State University",
    period: "Aug 2024 – May 2026",
    location: "San Jose, CA",
    coursework: ["Systems Software Engineering", "Cloud Technologies", "Distributed Systems", "Scalable System Design"],
  },
  {
    degree: "BE Computer Engineering",
    school: "Savitribai Phule Pune University",
    period: "Jul 2018 – Jul 2022",
    location: "Pune, India",
    coursework: ["Data Structures & Algorithms", "Object Oriented Programming", "Database Management", "Cloud Computing"],
  },
];

const cardVariant = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
};

export default function Education() {
  return (
    <section id="education" className="py-24 px-4 sm:px-6 border-t border-zinc-800/60">
      <div className="max-w-3xl mx-auto">

        <motion.div
          className="flex items-center gap-4 mb-10"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl font-semibold text-white whitespace-nowrap">Education</h2>
          <div className="flex-1 h-px bg-zinc-800" />
        </motion.div>

        <motion.div
          className="space-y-4"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {education.map((edu, i) => (
            <motion.div
              key={i}
              variants={cardVariant}
              className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 hover:border-zinc-700 transition-colors"
            >
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-2">
                <h3 className="text-white font-semibold text-base">{edu.degree}</h3>
                <span className="text-zinc-500 text-xs bg-zinc-800 border border-zinc-700 px-2.5 py-0.5 rounded-full self-start shrink-0">
                  {edu.period}
                </span>
              </div>
              <div className="flex flex-wrap items-center gap-x-2 gap-y-0.5 mb-4">
                <span className="text-blue-400 text-sm font-medium">{edu.school}</span>
                <span className="text-zinc-700">·</span>
                <span className="text-zinc-500 text-sm">{edu.location}</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {edu.coursework.map((course) => (
                  <span
                    key={course}
                    className="bg-zinc-800 border border-zinc-700 text-zinc-400 text-xs px-3 py-1 rounded-full"
                  >
                    {course}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
