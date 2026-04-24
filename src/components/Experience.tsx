"use client";

import { motion } from "framer-motion";
import { stagger } from "@/lib/animations";

const experiences = [
  {
    role: "Software Engineer",
    company: "Volkswagen Group Technology Solutions",
    period: "Aug 2022 – Jul 2024",
    location: "Pune, India",
    bullets: [
      "Owned the Spare Parts Portal end-to-end; from requirements through production, serving 10,000+ enterprise users, reducing stakeholder back-and-forth by 30% through iterative delivery and documented API contracts.",
      "Eliminated SAP posting bottlenecks by introducing Kafka to decouple OCR, validation, posting stages; designed topics, partitions, and retention policies that cut processing pipeline latency by 40% under peak traffic spikes.",
      "Engineered microservices backed by MySQL with Redis caching, added targeted indexes and query optimizations that improved P95 API response time by 35% under real production load.",
      "Integrated Computer Vision OCR into invoice processing workflows using Flask and MongoDB, automating structured data extraction and reducing manual data entry effort by 60% for the finance operations team.",
      "Automated CI/CD pipelines using Atlassian Bamboo and shell scripting, reducing average release cycle time by 50% and enabling repeatable, low-risk deployments across both AWS EC2 and on-prem environments.",
      "Configured AWS security groups, IAM policies, and EC2 health checks for production Flask services, hardening the deployment environment and maintaining zero security incidents across a 2-year production run.",
    ],
  },
  {
    role: "Software Developer Intern",
    company: "Whiz Key (OPC) Pvt Ltd",
    period: "Oct 2021 – Dec 2021",
    location: "Remote",
    bullets: [
      "Delivered a real-time sensor monitoring dashboard using Node.js and REST APIs, streaming live device data with sub-second update latency and reducing manual reporting effort for operations teams by 70%.",
      "Built a cross-platform home automation app in Flutter with MQTT-based smart device control — real-time state toggles, automated scheduling, and push notifications — delivering a unified UX across Android and iOS from a single codebase.",
      "Designed end-to-end UI/UX wireframes for the home automation app covering device control dashboards, scheduling flows, and alert screens, translating product requirements into actionable development layouts.",
    ],
  },
  {
    role: "Application Developer Intern",
    company: "Simba Developers",
    period: "Jan 2021 – Jul 2021",
    location: "Remote",
    bullets: [
      "Shipped core features for a cross-platform application in Flutter and Dart, improving input-to-render latency by 25% through UI profiling and targeted rendering optimizations on Android and iOS.",
      "Standardized API contracts and led code reviews across a 6-person team, catching integration defects pre-merge and reducing post-release bug reports by 40% over the internship period.",
      "Researched and compared SQL vs NoSQL trade-offs for a home automation backend, producing a documented architecture proposal that the team adopted, cutting estimated future service integration time by 2 weeks.",
    ],
  },
];

const cardVariant = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
};

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-4 sm:px-6 border-t border-zinc-800/60">
      <div className="max-w-3xl mx-auto">

        <motion.div
          className="flex items-center gap-4 mb-10"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl font-semibold text-white whitespace-nowrap">Experience</h2>
          <div className="flex-1 h-px bg-zinc-800" />
        </motion.div>

        <motion.div
          className="space-y-5"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              variants={cardVariant}
              className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 hover:border-zinc-700 transition-colors"
            >
              {/* Role + Period */}
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-2">
                <h3 className="text-white font-semibold text-base">{exp.role}</h3>
                <span className="text-zinc-500 text-xs bg-zinc-800 border border-zinc-700 px-2.5 py-0.5 rounded-full self-start shrink-0">
                  {exp.period}
                </span>
              </div>

              {/* Company + Location */}
              <div className="flex flex-wrap items-center gap-x-2 gap-y-0.5 mb-5">
                <span className="text-blue-400 text-sm font-medium">{exp.company}</span>
                <span className="text-zinc-700">·</span>
                <span className="text-zinc-500 text-sm">{exp.location}</span>
              </div>

              {/* Bullets */}
              <ul className="space-y-2.5">
                {exp.bullets.map((bullet, j) => (
                  <li key={j} className="flex gap-3 text-zinc-400 text-sm leading-relaxed">
                    <span className="text-zinc-600 shrink-0 mt-0.5">—</span>
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
