"use client";

import { motion } from "framer-motion";
import { stagger } from "@/lib/animations";

const categories = [
  {
    name: "Frontend",
    skills: ["React", "Next.js", "TypeScript", "JavaScript", "Angular", "Flutter", "Dart"],
  },
  {
    name: "Backend",
    skills: ["Node.js", "Python", "Flask", "Express.js", "REST APIs", "GraphQL", "Microservices", "Shell Scripting", "FastAPI"],
  },
  {
    name: "Cloud & Database",
    skills: ["AWS", "EC2", "IAM", "ALB", "S3", "Auto Scaling", "GCP", "Docker", "Kubernetes", "MongoDB", "MySQL", "PostgreSQL", "Redis", "Supabase", "ChromaDB"],
  },
  {
    name: "Tools & Frameworks",
    skills: ["Git", "Kafka", "Atlassian Bamboo", "CircleCI", "Terraform", "Bitbucket", "CI/CD", "Linux"],
  },
  {
    name: "AI & Emerging Tech",
    skills: ["LangGraph", "LangChain", "RAG Pipelines", "Pinecone", "Deepgram", "Voice Processing", "Computer Vision OCR"],
  },
  {
    name: "Languages",
    skills: ["Python", "JavaScript", "TypeScript", "Java", "C++", "C#", "SQL", "Dart"],
  },
];

const rowVariant = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45 } },
};

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-4 sm:px-6 border-t border-zinc-800/60">
      <div className="max-w-3xl mx-auto">

        <motion.div
          className="flex items-center gap-4 mb-10"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl font-semibold text-white whitespace-nowrap">Technical Skills</h2>
          <div className="flex-1 h-px bg-zinc-800" />
        </motion.div>

        <motion.div
          className="space-y-7"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
        >
          {categories.map(({ name, skills }) => (
            <motion.div
              key={name}
              variants={rowVariant}
              className="flex flex-col sm:flex-row sm:items-start gap-3"
            >
              <span className="text-xs font-semibold text-zinc-500 uppercase tracking-widest sm:w-36 shrink-0 pt-1.5">
                {name}
              </span>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <motion.span
                    key={skill}
                    whileHover={{ scale: 1.07 }}
                    transition={{ duration: 0.15 }}
                    className="bg-zinc-800 border border-zinc-700 text-zinc-300 text-xs px-3 py-1.5 rounded-full cursor-default hover:bg-zinc-700 hover:border-zinc-600 hover:text-white transition-colors"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
