"use client";

import { motion } from "framer-motion";
import { Briefcase, Calendar } from "lucide-react";

export default function Experience() {
  const experiences = [
    {
      id: 1,
      title: "Research Intern",
      company: "AI Research Lab",
      period: "2024 - Present",
      description:
        "Worked on machine learning model evaluation, data preprocessing, and AI system design. Contributed to research papers and implemented novel ML algorithms.",
      skills: [
        "Machine Learning",
        "Python",
        "TensorFlow",
        "Data Analysis",
        "Research",
      ],
    },
    {
      id: 2,
      title: "Full Stack Development Intern",
      company: "Tech Solutions Inc.",
      period: "2023 - 2024",
      description:
        "Developed REST APIs, front-end dashboards, and implemented authentication systems. Built scalable web applications using MERN stack.",
      skills: ["React", "Node.js", "MongoDB", "Express", "REST API"],
    },
  ];

  return (
    <section id="experience" className="py-20 relative bg-secondary/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Professional <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
            Hands-on experience in AI research and full-stack development
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-500" />

              <div className="relative glass rounded-2xl p-8 hover:scale-[1.02] transition-transform duration-300">
                <div className="flex items-start gap-6">
                  <div className="p-4 bg-primary/10 rounded-xl">
                    <Briefcase className="text-primary" size={32} />
                  </div>

                  <div className="flex-1">
                    <h3 className="text-2xl font-bold gradient-text mb-2">
                      {exp.title}
                    </h3>
                    <div className="flex items-center gap-2 text-foreground/60 mb-4">
                      <span className="font-semibold">{exp.company}</span>
                      <span>•</span>
                      <div className="flex items-center gap-1">
                        <Calendar size={16} />
                        <span>{exp.period}</span>
                      </div>
                    </div>

                    <p className="text-foreground/70 mb-4 leading-relaxed">
                      {exp.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full border border-primary/20"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
