"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Twitter, Heart } from "lucide-react";

export default function Footer() {
  const socialLinks = [
    {
      icon: Github,
      href: "https://github.com/anuragthippani1",
      label: "GitHub",
    },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/anuragvarmathippani/",
      label: "LinkedIn",
    },
    {
      icon: Twitter,
      href: "#", // Add actual Twitter URL
      label: "Twitter",
    },
  ];

  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Patents", href: "#patents" },
    { name: "Resume", href: "/resume.pdf" },
    { name: "Contact", href: "#contact" },
  ];

  const handleNavClick = (e, href) => {
    // Allow default behavior for resume link
    if (href === "/resume.pdf") {
      return;
    }
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="relative bg-secondary/20 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold gradient-text mb-4">AVT</h3>
            <p className="text-foreground/60 text-sm italic mb-4">
              "Transforming ideas into intelligent systems."
            </p>
            <p className="text-foreground/70 text-sm">
              Building the future with AI, one project at a time.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="text-foreground/60 hover:text-primary transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="font-semibold mb-4">Connect</h4>
            <div className="flex gap-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="p-3 bg-primary/10 rounded-lg hover:bg-primary/20 hover:scale-110 transition-all"
                  >
                    <Icon className="text-primary" size={20} />
                  </a>
                );
              })}
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="pt-8 border-t border-border text-center"
        >
          <p className="text-sm text-foreground/60 flex items-center justify-center gap-2">
            © {new Date().getFullYear()} Anurag Varma Thippani. Made with
            <Heart className="text-red-500 fill-red-500" size={16} />
            using Next.js & TailwindCSS
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
