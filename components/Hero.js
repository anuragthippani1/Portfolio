"use client";

import { motion } from "framer-motion";
import { ArrowDown, Download, Mail, FolderGit2 } from "lucide-react";

export default function Hero() {
  const handleScroll = (e, id) => {
    e.preventDefault();
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Animated gradient background */}
      <div className="absolute inset-0 animated-gradient opacity-20" />

      {/* Grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <motion.h1
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl font-bold"
          >
            <span className="gradient-text">Anurag Varma Thippani</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-2xl md:text-3xl text-foreground/80 font-semibold"
          >
            AI & Full Stack Developer | Innovator in Intelligent Systems
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-lg md:text-xl text-foreground/60 max-w-3xl mx-auto"
          >
            Building adaptive intelligence systems that solve real-world
            challenges.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-wrap gap-4 justify-center pt-8"
          >
            <a
              href="#projects"
              onClick={(e) => handleScroll(e, "#projects")}
              className="group px-8 py-3 bg-primary text-primary-foreground rounded-full font-semibold flex items-center gap-2 hover:scale-105 transition-transform"
            >
              <FolderGit2 size={20} />
              View Projects
            </a>
            <a
              href="#contact"
              onClick={(e) => handleScroll(e, "#contact")}
              className="px-8 py-3 glass rounded-full font-semibold flex items-center gap-2 hover:scale-105 transition-transform"
            >
              <Mail size={20} />
              Contact Me
            </a>
            <a
              href="/resume.pdf"
              className="px-8 py-3 border border-primary/50 rounded-full font-semibold flex items-center gap-2 hover:bg-primary/10 transition-colors"
            >
              <Download size={20} />
              Download Resume
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="pt-16"
          >
            <a
              href="#about"
              onClick={(e) => handleScroll(e, "#about")}
              className="inline-block animate-bounce"
            >
              <ArrowDown size={32} className="text-primary" />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
