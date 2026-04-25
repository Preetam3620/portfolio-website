"use client";

import { motion } from "framer-motion";

const certifications = [
  {
    title: "AWS Certified Solutions Architect – Associate",
    issuer: "Amazon Web Services",
    year: "2026",
  },
  {
    title: "UC Berkeley AI Hackathon 2025 – Best AI Agent Deployment",
    issuer: "UC Berkeley",
    year: "2025",
  },
  {
    title: "ISTE Hack-SPRINT v3.0 – Business Impact Award",
    issuer: "ISTE",
    year: "2021",
  },
  {
    title: "The Complete 2021 Flutter Development Bootcamp with Dart",
    issuer: "Udemy",
    year: "2021",
  },
];

export default function Certifications() {
  return (
    <div className="mt-16 flex flex-col md:flex-row md:space-x-10 space-y-4 md:space-y-0">
      <div className="w-full md:w-36 flex-shrink-0">
        <h2 className="text-base font-medium text-white">Certifications</h2>
      </div>
      <motion.div
        className="flex-1 w-full"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        {certifications.map((cert, i) => (
          <div key={i} className="flex items-center py-1">
            <div className="flex items-center space-x-4 flex-shrink-0">
              <span className="text-base font-medium text-white">{cert.title}</span>
              <span className="text-base font-normal" style={{ color: "#A0A0A0" }}>{cert.issuer}</span>
            </div>
            <div className="flex-1 mx-8 border-b" style={{ borderColor: "#383838" }} />
            <div className="text-base font-normal flex-shrink-0" style={{ color: "#A0A0A0" }}>{cert.year}</div>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
