"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Rufus",
    subtitle: "AI-Powered Shopping Assistant",
    year: "2025",
    description:
      "AI-powered shopping assistant using a LangGraph multi-agent workflow that routes conversational, text, and image queries through GPT-4o, improving recommendation relevance by 40%. Features a Pinecone semantic retrieval pipeline with multi-stage re-ranking and a stateful FastAPI backend with Redis session persistence delivering under 800ms P95 latency.",
    tags: ["LangGraph", "GPT-4o", "Pinecone", "FastAPI", "Redis"],
    github: "https://github.com/Preetam3620/AI-Shopping-Assistant.git",
    liveUrl: null,
    gradient: "from-[#1a1a2e] via-[#16213e] to-[#0f3460]",
  },
  {
    title: "AlphaRescue",
    subtitle: "AI Emergency Dispatch",
    year: "2025",
    description:
      "AI-driven emergency dispatch system featuring a VAPI voice assistant powered by Gemini that transcribes live distress calls and generates structured incident briefs in under 3 seconds. Architected with specialized Fetch.ai uAgents on AgentVerse querying a Supabase RAG pipeline, reducing dispatch decision time by 70%.",
    tags: ["VAPI", "Gemini", "Fetch.ai", "Supabase", "React", "Mapbox"],
    github: "https://github.com/Preetam3620/Alpha-Rescue.git",
    liveUrl: null,
    gradient: "from-[#1a0a0a] via-[#2d1515] to-[#3d1a1a]",
  },
  {
    title: "BookTable",
    subtitle: "Restaurant Reservation Platform",
    year: "2025",
    description:
      "Role-based restaurant reservation platform built with FastAPI supporting Customer, Manager, and Admin workflows, reducing booking conflict errors by 90%. Features Redis caching and optimized relational schema reducing query latency by 35%, deployed on AWS EC2 with Terraform auto-scaling supporting 10,000+ concurrent users.",
    tags: ["FastAPI", "PostgreSQL", "Redis", "AWS EC2", "Terraform"],
    github: "https://github.com/Preetam3620/BookTable-App.git",
    liveUrl: null,
    gradient: "from-[#0a1a0a] via-[#0d2b0d] to-[#133d13]",
  },
  {
    title: "Reflectra",
    subtitle: "AI Journaling Companion",
    year: "2024",
    description:
      "AI-powered journaling platform with voice companion for task management and emotional support. Features personalized AI interactions, semantic search, mood analysis, and modular agent architecture.",
    tags: ["Python", "Reflex", "OpenAI", "Deepgram"],
    github: "https://github.com/somesh-bagadiya/Reflectra.git",
    liveUrl: null,
    gradient: "from-[#1a1a0a] via-[#2b2b0d] to-[#3a3a12]",
  },
  {
    title: "Fluento",
    subtitle: "Language Learning App",
    year: "2021",
    description:
      "Cross-platform language learning app with interactive tutorials, quizzes, and gamified elements. Winner of ISTE Hack-SPRINT v3.0.",
    tags: ["Flutter", "Dart", "Firebase", "Android"],
    github: "https://github.com/Preetam3620/fluento_app_web.git",
    liveUrl: null,
    gradient: "from-[#0a0a1a] via-[#0d0d2d] to-[#12124a]",
  },
  {
    title: "IRIS",
    subtitle: "OCR Invoice Processing",
    year: "2023",
    description:
      "Enterprise OCR-based invoice processing system built at Volkswagen. Supports 1000+ users with automated deployment pipelines and Microsoft Computer Vision integration.",
    tags: ["Angular", "Node.js", "Flask", "MongoDB"],
    github: null,
    liveUrl: null,
    gradient: "from-[#1a0a1a] via-[#2d0d2d] to-[#3d1240]",
  },
];

function ProjectCard({ project }: { project: typeof projects[0] }) {
  const [expanded, setExpanded] = useState(false);
  const shortDesc = project.description.length > 120
    ? project.description.slice(0, 120) + "..."
    : project.description;

  return (
    <div
      className="rounded-lg overflow-hidden group transition-all duration-300"
      style={{ backgroundColor: "#1C1C1C", border: "1px solid #383838" }}
      onMouseEnter={(e) => (e.currentTarget.style.borderColor = "#525252")}
      onMouseLeave={(e) => (e.currentTarget.style.borderColor = "#383838")}
    >
      {/* Image / Gradient placeholder */}
      <div className={`relative overflow-hidden w-full h-[180px] bg-gradient-to-br ${project.gradient} flex items-end p-4`}>
        <span className="text-white/20 text-4xl font-bold select-none">{project.title}</span>
      </div>

      {/* Card body */}
      <div
        className="p-4 pt-3 transition-colors duration-300 group-hover:bg-[#282828]"
        style={{ backgroundColor: "#1C1C1C" }}
      >
        <div className="flex items-center justify-between mb-1">
          <h3 className="text-base font-medium text-white">{project.title}</h3>
          <div className="flex items-center gap-2">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-white"
                style={{ color: "#9B9B9B" }}
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
                </svg>
              </a>
            )}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-white"
                style={{ color: "#9B9B9B" }}
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            )}
          </div>
        </div>

        <div className="flex items-center gap-2 mb-2">
          <p className="text-sm" style={{ color: "#A0A0A0" }}>{project.subtitle}</p>
          <span className="text-xs" style={{ color: "#9B9B9B" }}>• {project.year}</span>
        </div>

        <div className="mb-3">
          <p className="text-xs leading-relaxed" style={{ color: "#9B9B9B" }}>
            {expanded ? project.description : shortDesc}
          </p>
          {project.description.length > 120 && (
            <button
              className="text-xs mt-1 transition-colors hover:text-[#5BA0F2]"
              style={{ color: "#4A90E2" }}
              onClick={() => setExpanded(!expanded)}
            >
              {expanded ? "Show less" : "Show more"}
            </button>
          )}
        </div>

        <div className="flex flex-wrap gap-1.5">
          {project.tags.map((tag) => (
            <span key={tag} className="pill">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const updateButtons = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 4);
    setCanScrollRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 4);
  }, []);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    updateButtons();
    el.addEventListener("scroll", updateButtons, { passive: true });
    return () => el.removeEventListener("scroll", updateButtons);
  }, [updateButtons]);

  const scroll = (dir: "left" | "right") => {
    const el = scrollRef.current;
    if (!el) return;
    // Scroll by the visible width (2 cards)
    el.scrollBy({ left: dir === "left" ? -el.clientWidth : el.clientWidth, behavior: "smooth" });
  };

  return (
    <div className="mt-16 flex flex-col md:flex-row md:space-x-10 space-y-4 md:space-y-0">
      <div className="w-full md:w-36 flex-shrink-0">
        <h2 className="text-base font-medium text-white">Projects</h2>
      </div>
      <motion.div
        className="flex-1 min-w-0"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.05 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        {/* Scroll controls */}
        <div className="flex items-center justify-end gap-2 mb-3">
          <button
            onClick={() => scroll("left")}
            disabled={!canScrollLeft}
            className="flex items-center justify-center w-8 h-8 rounded-full transition-colors disabled:opacity-25"
            style={{ backgroundColor: "#1C1C1C", border: "1px solid #383838", color: "#9B9B9B" }}
            onMouseEnter={(e) => { if (canScrollLeft) e.currentTarget.style.borderColor = "#525252"; }}
            onMouseLeave={(e) => { e.currentTarget.style.borderColor = "#383838"; }}
            aria-label="Scroll left"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={() => scroll("right")}
            disabled={!canScrollRight}
            className="flex items-center justify-center w-8 h-8 rounded-full transition-colors disabled:opacity-25"
            style={{ backgroundColor: "#1C1C1C", border: "1px solid #383838", color: "#9B9B9B" }}
            onMouseEnter={(e) => { if (canScrollRight) e.currentTarget.style.borderColor = "#525252"; }}
            onMouseLeave={(e) => { e.currentTarget.style.borderColor = "#383838"; }}
            aria-label="Scroll right"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Horizontal scroll row — 2 cards visible, rest scrollable */}
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto pb-4"
          style={{
            scrollSnapType: "x mandatory",
            msOverflowStyle: "none",
            scrollbarWidth: "none",
          }}
        >
          {projects.map((project) => (
            <div
              key={project.title}
              className="flex-shrink-0 w-[calc(50%-12px)] min-w-[280px]"
              style={{ scrollSnapAlign: "start" }}
            >
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
