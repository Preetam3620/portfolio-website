"use client";

import { motion } from "framer-motion";
import { stagger } from "@/lib/animations";

const projects = [
  {
    title: "Rufus",
    subtitle: "AI-Powered Shopping Assistant",
    year: "2025",
    number: "01",
    description:
      "AI-powered shopping assistant using a LangGraph multi-agent workflow that routes conversational, text, and image queries through GPT-4o, improving recommendation relevance by 40%. Features a Pinecone semantic retrieval pipeline with multi-stage re-ranking and a stateful FastAPI backend with Redis session persistence delivering under 800ms P95 latency.",
    tags: ["LangGraph", "GPT-4o", "Pinecone", "FastAPI", "Redis"],
    github: null,
  },
  {
    title: "AlphaRescue",
    subtitle: "AI Emergency Dispatch",
    year: "2025",
    number: "02",
    description:
      "AI-driven emergency dispatch system featuring a VAPI voice assistant powered by Gemini that transcribes live distress calls and generates structured incident briefs in under 3 seconds. Architected with specialized Fetch.ai uAgents on AgentVerse querying a Supabase RAG pipeline, reducing dispatch decision time by 70%. Real-time React/Mapbox dashboard cuts situational awareness lag to under 10 seconds.",
    tags: ["VAPI", "Gemini", "Fetch.ai", "Supabase", "React", "Mapbox"],
    github: "https://github.com/Preetam3620/Alpha-Rescue.git",
  },
  {
    title: "BookTable",
    subtitle: "Restaurant Reservation Platform",
    year: "2025",
    number: "03",
    description:
      "Role-based restaurant reservation platform built with FastAPI supporting Customer, Manager, and Admin workflows, reducing booking conflict errors by 90%. Features Redis caching and optimized relational schema reducing query latency by 35%, deployed on AWS EC2 with Terraform auto-scaling supporting 10,000+ concurrent users and zero-downtime blue-green releases.",
    tags: ["FastAPI", "PostgreSQL", "Redis", "AWS EC2", "Terraform"],
    github: "https://github.com/Preetam3620/BookTable-App.git",
  },
  {
    title: "Reflectra",
    subtitle: "AI Journaling Companion",
    year: "2024",
    number: "04",
    description:
      "AI-powered journaling platform with voice companion for task management and emotional support. Features personalized AI interactions, semantic search, mood analysis, and modular agent architecture.",
    tags: ["Python", "Reflex", "OpenAI", "Deepgram"],
    github: "https://github.com/somesh-bagadiya/Reflectra.git",
  },
  {
    title: "Fluento",
    subtitle: "Language Learning App",
    year: "2021",
    number: "05",
    description:
      "Cross-platform language learning app with interactive tutorials, quizzes, and gamified elements. Winner of ISTE Hack-SPRINT v3.0.",
    tags: ["Flutter", "Dart", "Firebase", "Android"],
    github: "https://github.com/Preetam3620/fluento_app_web.git",
  },
  {
    title: "IRIS",
    subtitle: "OCR Invoice Processing",
    year: "2023",
    number: "06",
    description:
      "Enterprise OCR-based invoice processing system built at Volkswagen. Supports 1000+ users with automated deployment pipelines and Microsoft Computer Vision integration.",
    tags: ["Angular", "Node.js", "Flask", "MongoDB"],
    github: null,
  },
];

const cardVariant = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-4 sm:px-6 border-t border-zinc-800/60">
      <div className="max-w-3xl mx-auto">

        <motion.div
          className="flex items-center gap-4 mb-10"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl font-semibold text-white whitespace-nowrap">Projects</h2>
          <div className="flex-1 h-px bg-zinc-800" />
        </motion.div>

        <motion.div
          className="space-y-6"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {projects.map((project) => (
            <motion.div
              key={project.title}
              variants={cardVariant}
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="bg-zinc-900 border border-zinc-800 rounded-xl overflow-hidden hover:border-zinc-700 hover:shadow-xl hover:shadow-black/40 transition-[border-color,box-shadow]"
            >
              {/* Image area */}
              <div className="relative h-48 bg-zinc-800 border-b border-zinc-700/60 overflow-hidden flex items-center justify-center">
                <div className="absolute inset-0 bg-gradient-to-br from-zinc-800 via-zinc-850 to-zinc-900 opacity-80" />
                <span className="relative text-zinc-600 text-sm font-medium tracking-wide">
                  {project.title}
                </span>
                <span className="absolute top-3 left-4 text-zinc-700 font-bold text-2xl select-none">
                  {project.number}
                </span>
              </div>

              {/* Card body */}
              <div className="p-6">
                <div className="flex items-start justify-between gap-4 mb-2">
                  <div>
                    <h3 className="text-white font-semibold text-base leading-tight">
                      {project.title}
                    </h3>
                    <p className="text-zinc-500 text-sm mt-0.5">{project.subtitle}</p>
                  </div>
                  <span className="text-zinc-500 text-xs bg-zinc-800 border border-zinc-700 px-2 py-0.5 rounded-full shrink-0 mt-0.5">
                    {project.year}
                  </span>
                </div>

                <p className="text-zinc-400 text-sm leading-relaxed mb-5">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-5">
                  {project.tags.map((tag) => (
                    <motion.span
                      key={tag}
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.15 }}
                      className="bg-zinc-800 border border-zinc-700 text-zinc-300 text-xs px-3 py-1 rounded-full hover:bg-zinc-700 hover:border-zinc-600 transition-colors cursor-default"
                    >
                      {tag}
                    </motion.span>
                  ))}
                </div>

                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-blue-400 hover:text-blue-300 text-sm font-medium transition-colors group"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                    View on GitHub
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
