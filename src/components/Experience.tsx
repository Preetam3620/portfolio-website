"use client";

import { motion } from "framer-motion";

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

export default function Experience() {
  return (
    <div className="mt-16 flex flex-col md:flex-row md:space-x-10 space-y-4 md:space-y-0">
      <div className="w-full md:w-36 flex-shrink-0">
        <h2 className="text-base font-medium text-white">Experience</h2>
      </div>
      <motion.div
        className="flex-1 space-y-4"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.05 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        {experiences.map((exp, i) => (
          <div
            key={i}
            className="rounded-2xl p-6 mb-4 w-full text-left shadow-sm"
            style={{ backgroundColor: "#181818", border: "1px solid #383838", color: "#D1D1D1" }}
          >
            <div className="text-sm font-normal mb-1" style={{ color: "#A0A0A0" }}>{exp.role}</div>
            <div className="font-medium text-white mb-1">{exp.company}</div>
            <div className="text-sm font-normal mb-3" style={{ color: "#A0A0A0" }}>
              {exp.period} · {exp.location}
            </div>
            <div className="text-sm font-normal leading-relaxed" style={{ color: "#B0B0B0" }}>
              {exp.bullets.map((bullet, j) => (
                <div key={j} className="mb-1">• {bullet}</div>
              ))}
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
