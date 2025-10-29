"use client";

import { motion } from "framer-motion";
import {
  Code2,
  Layers,
  Brain,
  Database,
  Cloud,
  GitBranch,
  Palette,
  Server,
} from "lucide-react";

export default function Skills() {
  const skillCategories = [
    {
      title: "Languages",
      icon: Code2,
      skills: [
        { name: "Python", level: 90 },
        { name: "JavaScript", level: 85 },
        { name: "C", level: 80 },
        { name: "Java", level: 75 },
      ],
    },
    {
      title: "Frameworks",
      icon: Layers,
      skills: [
        { name: "React", level: 90 },
        { name: "Next.js", level: 85 },
        { name: "Flask", level: 85 },
        { name: "Express", level: 80 },
      ],
    },
    {
      title: "AI/ML Tools",
      icon: Brain,
      skills: [
        { name: "TensorFlow", level: 85 },
        { name: "PyTorch", level: 80 },
        { name: "scikit-learn", level: 90 },
        { name: "Keras", level: 75 },
      ],
    },
    {
      title: "Databases",
      icon: Database,
      skills: [
        { name: "MongoDB", level: 90 },
        { name: "MySQL", level: 85 },
        { name: "PostgreSQL", level: 75 },
        { name: "Redis", level: 70 },
      ],
    },
    {
      title: "Cloud & DevOps",
      icon: Cloud,
      skills: [
        { name: "AWS", level: 80 },
        { name: "Vercel", level: 90 },
        { name: "Render", level: 85 },
        { name: "Docker", level: 70 },
      ],
    },
    {
      title: "Version Control",
      icon: GitBranch,
      skills: [
        { name: "Git", level: 90 },
        { name: "GitHub", level: 90 },
        { name: "GitLab", level: 75 },
      ],
    },
    {
      title: "UI/UX Tools",
      icon: Palette,
      skills: [
        { name: "TailwindCSS", level: 95 },
        { name: "Shadcn/UI", level: 85 },
        { name: "Framer Motion", level: 80 },
        { name: "Figma", level: 70 },
      ],
    },
    {
      title: "Backend",
      icon: Server,
      skills: [
        { name: "Node.js", level: 85 },
        { name: "REST APIs", level: 90 },
        { name: "GraphQL", level: 70 },
        { name: "WebSockets", level: 75 },
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Skills & <span className="gradient-text">Technologies</span>
          </h2>
          <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
            A comprehensive toolkit for building intelligent and scalable
            applications
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="glass rounded-2xl p-6 hover:scale-105 transition-transform duration-300"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-primary/10 rounded-xl">
                    <Icon className="text-primary" size={24} />
                  </div>
                  <h3 className="text-xl font-bold">{category.title}</h3>
                </div>

                <div className="space-y-3">
                  {category.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="flex items-center gap-3 p-3 bg-secondary/50 rounded-lg hover:bg-secondary transition-colors"
                    >
                      <div className="h-2 w-2 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full"></div>
                      <span className="text-sm font-medium">{skill.name}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
