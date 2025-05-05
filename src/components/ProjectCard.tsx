'use client';
import { motion } from "motion/react"

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  delay?: number;
}

export default function ProjectCard({ title, description, technologies, delay = 0, }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true }}
      className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
    >
      <h3 className="text-xl font-bold text-blue-800 mb-2">{title}</h3>
      <p className="text-gray-600 text-sm mb-4">{description}</p>
      <div className="flex flex-wrap gap-2">
        {technologies.map((tech, index) => (
          <span key={index} className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-1 rounded-full border border-blue-200">
            {tech}
          </span>
        ))}
      </div>
    </motion.div>
  );
}
