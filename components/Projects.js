"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github, Sparkles } from "lucide-react";
import projectsData from "@/data/projects.json";

export default function Projects() {
  return (
    <section id="projects" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
            Showcasing innovative solutions that blend AI, machine learning, and
            full-stack development
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-2xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500" />

              <div className="relative h-full glass rounded-2xl p-6 hover:scale-105 transition-transform duration-300">
                {project.featured && (
                  <div className="absolute -top-3 -right-3 bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1">
                    <Sparkles size={12} />
                    Featured
                  </div>
                )}

                <h3 className="text-xl font-bold mb-3 gradient-text">
                  {project.title}
                </h3>

                <p className="text-foreground/70 mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-md border border-primary/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  {project.github && project.github !== "#" ? (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm text-foreground/70 hover:text-primary transition-colors"
                    >
                      <Github size={18} />
                      Code
                    </a>
                  ) : (
                    <span className="flex items-center gap-2 text-sm text-foreground/40 cursor-not-allowed">
                      <Github size={18} />
                      Code
                    </span>
                  )}
                  
                  {project.demo && project.demo !== "#" && project.demo !== "coming-soon" ? (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm text-foreground/70 hover:text-primary transition-colors"
                    >
                      <ExternalLink size={18} />
                      Demo
                    </a>
                  ) : (
                    <a
                      href="/coming-soon"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm text-yellow-500/70 hover:text-yellow-500 transition-colors"
                    >
                      <ExternalLink size={18} />
                      Coming Soon
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
