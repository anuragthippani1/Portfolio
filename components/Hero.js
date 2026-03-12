"use client";

import { motion } from "framer-motion";
import { ArrowDown, Download, Mail, FolderGit2 } from "lucide-react";
import Image from "next/image";
import profilePhoto from "@/lib/logo.PNG";

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
      className="relative min-h-screen overflow-hidden bg-background"
    >
      {/* Monochrome angled stripes background (parallax-like) */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            "repeating-linear-gradient(135deg, rgba(120,120,120,0.25) 0px, rgba(120,120,120,0.25) 2px, transparent 2px, transparent 12px)",
          transform: "translateZ(0)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center min-h-[80vh]">
          {/* Left: Bold monochrome typography */}
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-5xl md:text-7xl font-extrabold tracking-tight text-foreground"
            >
              Anurag Varma
              <br />
              Thippani
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.25 }}
              className="mt-4 text-xl md:text-2xl text-foreground/70"
            >
              AI & Full Stack Developer
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.35 }}
              className="mt-4 text-foreground/60 max-w-prose"
            >
              Building intelligent, high-impact products with a clean, minimal
              aesthetic.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.45 }}
              className="mt-10 flex flex-wrap gap-4"
            >
              <a
                href="#projects"
                onClick={(e) => handleScroll(e, "#projects")}
                className="inline-flex items-center gap-2 px-6 py-2 rounded-full border border-foreground/30 text-foreground hover:bg-foreground hover:text-background transition-colors"
              >
                <FolderGit2 size={18} />
                View Projects
              </a>
              <a
                href="#contact"
                onClick={(e) => handleScroll(e, "#contact")}
                className="inline-flex items-center gap-2 px-6 py-2 rounded-full border border-foreground/30 text-foreground/80 hover:bg-foreground/10 transition-colors"
              >
                <Mail size={18} />
                Contact
              </a>
              <a
                href="https://drive.google.com/file/d/16X8SmuAvmFebYC7SDX6qdgPh2PuL8Bgd/view?usp=share_link"
                className="inline-flex items-center gap-2 px-6 py-2 rounded-full border border-foreground/30 text-foreground/80 hover:bg-foreground/10 transition-colors"
              >
                <Download size={18} />
                Resume
              </a>
            </motion.div>
          </div>

          {/* Right: Clean geometric design area */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative w-full h-[60vh] md:h-[70vh] flex items-center justify-center"
          >
            {/* Subtle geometric pattern */}
            <div className="absolute inset-0 opacity-5">
              <div className="w-full h-full bg-[radial-gradient(circle_at_30%_20%,rgba(0,0,0,0.1)_0%,transparent_50%)]" />
              <div className="absolute top-1/4 right-1/4 w-32 h-32 border border-foreground/10 rounded-full" />
              <div className="absolute bottom-1/3 left-1/3 w-24 h-24 border border-foreground/10 rotate-45" />
              <div className="absolute top-1/2 right-1/3 w-16 h-16 bg-foreground/5 rounded-full" />
            </div>

            {/* Profile photo */}
            <div className="relative z-10">
              <div className="relative">
                {/* soft halo */}
                <div
                  aria-hidden
                  className="absolute -inset-10 rounded-full blur-3xl opacity-35 bg-gradient-to-tr from-blue-500/45 via-purple-500/35 to-pink-500/45"
                />

                {/* premium gradient ring */}
                <div className="relative p-[2px] rounded-full bg-gradient-to-tr from-blue-500/60 via-purple-500/40 to-pink-500/60 shadow-[0_18px_60px_rgba(0,0,0,0.25)]">
                  <div className="relative w-56 h-56 sm:w-60 sm:h-60 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-full overflow-hidden bg-background ring-1 ring-foreground/10">
                    <Image
                      src={profilePhoto}
                      alt="Anurag Varma Thippani"
                      fill
                      priority
                      sizes="(max-width: 640px) 240px, (max-width: 1024px) 288px, 320px"
                      className="object-cover object-[50%_48%] scale-[1.24] transform-gpu [filter:saturate(1.08)_contrast(1.06)]"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Floating elements */}
            <motion.div
              animate={{ y: [-10, 10, -10] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-1/4 left-1/4 w-2 h-2 bg-foreground/20 rounded-full"
            />
            <motion.div
              animate={{ y: [10, -10, 10] }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1,
              }}
              className="absolute bottom-1/3 right-1/4 w-1 h-1 bg-foreground/30 rounded-full"
            />
            <motion.div
              animate={{ y: [-5, 15, -5] }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 2,
              }}
              className="absolute top-1/2 left-1/2 w-1.5 h-1.5 bg-foreground/25 rounded-full"
            />
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="mt-10 flex justify-center"
        >
          <a
            href="#about"
            onClick={(e) => handleScroll(e, "#about")}
            className="inline-flex items-center gap-2 text-foreground/60 hover:text-foreground transition-colors"
          >
            <ArrowDown size={20} />
            Scroll
          </a>
        </motion.div>
      </div>
    </section>
  );
}
