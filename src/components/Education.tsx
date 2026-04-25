"use client";

import { motion } from "framer-motion";

const education = [
  {
    degree: "Master's in Computer Software Engineering",
    school: "San Jose State University",
    period: "Aug 2024 – May 2026",
    location: "San Jose, CA",
    description:
      "Focused on systems software engineering, cloud technologies, distributed systems, and scalable system design. Coursework in advanced algorithms, cloud infrastructure, and AI/ML applications.",
  },
  {
    degree: "Bachelor's in Computer Engineering",
    school: "Savitribai Phule Pune University",
    period: "Jul 2018 – Jul 2022",
    location: "Pune, India",
    description:
      "Comprehensive study of data structures, algorithms, web development, and database systems with a strong foundation in computer engineering principles. Coursework in OOP, cloud computing, and database management.",
  },
];

export default function Education() {
  return (
    <div className="mt-16 flex flex-col md:flex-row md:space-x-10 space-y-4 md:space-y-0">
      <div className="w-full md:w-36 flex-shrink-0">
        <h2 className="text-base font-medium text-white">Education</h2>
      </div>
      <motion.div
        className="flex-1 space-y-4"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        {education.map((edu, i) => (
          <div
            key={i}
            className="rounded-2xl p-6 mb-4 w-full text-left shadow-sm"
            style={{ backgroundColor: "#181818", border: "1px solid #383838", color: "#D1D1D1" }}
          >
            <div className="text-sm font-normal mb-1" style={{ color: "#A0A0A0" }}>{edu.degree}</div>
            <div className="font-medium text-white mb-1">{edu.school}</div>
            <div className="text-sm font-normal mb-3" style={{ color: "#A0A0A0" }}>
              {edu.period} · {edu.location}
            </div>
            <div className="text-sm font-normal leading-relaxed" style={{ color: "#B0B0B0" }}>
              {edu.description}
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
