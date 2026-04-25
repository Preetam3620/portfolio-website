"use client";

import { motion } from "framer-motion";

const categories = [
  {
    name: "Languages",
    skills: ["Python", "JavaScript", "TypeScript", "Java", "C++", "C#", "SQL", "Dart"],
  },
  {
    name: "Frontend",
    skills: ["React", "Next.js", "Angular", "Flutter", "HTML", "CSS", "Tailwind CSS"],
  },
  {
    name: "Backend",
    skills: ["Node.js", "FastAPI", "Flask", "Express.js", "REST APIs", "GraphQL", "Microservices", "Shell Scripting"],
  },
  {
    name: "AI & Data",
    skills: ["LangGraph", "LangChain", "RAG Pipelines", "Pinecone", "Deepgram", "Voice Processing", "Computer Vision OCR"],
  },
  {
    name: "Cloud & Database",
    skills: ["AWS", "EC2", "IAM", "ALB", "S3", "Auto Scaling", "GCP", "Docker", "Kubernetes", "MongoDB", "MySQL", "PostgreSQL", "Redis", "Supabase", "ChromaDB"],
  },
  {
    name: "Tools & Frameworks",
    skills: ["Git", "Kafka", "Atlassian Bamboo", "CircleCI", "Terraform", "Bitbucket", "CI/CD", "Linux"],
  },
];

export default function Skills() {
  return (
    <div className="mt-16 flex flex-col md:flex-row md:space-x-10 space-y-4 md:space-y-0">
      <div className="w-full md:w-36 flex-shrink-0">
        <h2 className="text-base font-medium text-white">Technical Skills</h2>
      </div>
      <motion.div
        className="flex-1 w-full space-y-4"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        {categories.map(({ name, skills }) => (
          <div key={name} className="flex items-center">
            <div className="flex-shrink-0">
              <h3 className="text-base font-medium text-white">{name}</h3>
            </div>
            <div className="flex-1 mx-8 border-b" style={{ borderColor: "#383838" }} />
            <div className="flex flex-wrap gap-1.5 justify-end">
              {skills.map((skill) => (
                <span key={skill} className="pill">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
