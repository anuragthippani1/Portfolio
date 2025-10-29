'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Code, Database, Brain, Cloud, Award } from 'lucide-react'

export default function About() {
  const [text, setText] = useState('')
  const roles = ['AI Engineer', 'ML Innovator', 'Full Stack Developer', 'Research Intern']
  const [currentRole, setCurrentRole] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const currentText = roles[currentRole]
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setText(currentText.substring(0, text.length + 1))
        if (text === currentText) {
          setTimeout(() => setIsDeleting(true), 2000)
        }
      } else {
        setText(currentText.substring(0, text.length - 1))
        if (text === '') {
          setIsDeleting(false)
          setCurrentRole((prev) => (prev + 1) % roles.length)
        }
      }
    }, isDeleting ? 50 : 100)

    return () => clearTimeout(timeout)
  }, [text, isDeleting, currentRole, roles])

  const badges = [
    { category: 'Languages', items: ['C', 'Python', 'Java', 'JavaScript'], icon: Code },
    { category: 'Frameworks', items: ['MERN Stack', 'Next.js', 'Flask'], icon: Database },
    { category: 'AI/ML', items: ['TensorFlow', 'PyTorch', 'scikit-learn'], icon: Brain },
    { category: 'Cloud & DB', items: ['AWS', 'MongoDB', 'MySQL'], icon: Cloud },
    { category: 'Certifications', items: ['AWS', 'Cisco', 'Microsoft'], icon: Award },
  ]

  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="h-8 text-2xl font-semibold text-primary">
            {text}
            <span className="animate-pulse">|</span>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative w-full max-w-md mx-auto">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-3xl blur-2xl opacity-30 animate-pulse" />
              <div className="relative glass rounded-3xl p-8 aspect-square flex items-center justify-center">
                <div className="w-full h-full bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-2xl flex items-center justify-center">
                  <span className="text-9xl gradient-text font-bold">AT</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* About Text */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <p className="text-lg text-foreground/80 leading-relaxed">
              I'm <span className="text-primary font-semibold">Anurag</span>, a final-year Computer Science undergraduate at 
              <span className="text-primary font-semibold"> SR University</span> (2022–2026) passionate about Artificial Intelligence, 
              Machine Learning, and Full Stack Development. I specialize in building intelligent systems and scalable web applications 
              that merge innovation with real-world impact.
            </p>

            <p className="text-lg text-foreground/80 leading-relaxed">
              My journey in tech has been driven by curiosity and a desire to create solutions that make a difference. 
              From developing AI-powered systems to building full-stack applications, I thrive on turning complex problems 
              into elegant, user-friendly solutions.
            </p>

            <div className="pt-4">
              <h3 className="text-xl font-semibold mb-4 gradient-text">Quick Facts</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="glass p-4 rounded-lg">
                  <p className="text-sm text-foreground/60">Location</p>
                  <p className="font-semibold">India</p>
                </div>
                <div className="glass p-4 rounded-lg">
                  <p className="text-sm text-foreground/60">University</p>
                  <p className="font-semibold">SR University</p>
                </div>
                <div className="glass p-4 rounded-lg">
                  <p className="text-sm text-foreground/60">Graduation</p>
                  <p className="font-semibold">2026</p>
                </div>
                <div className="glass p-4 rounded-lg">
                  <p className="text-sm text-foreground/60">Degree</p>
                  <p className="font-semibold">B.Tech CSE</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Skills Badges */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <h3 className="text-3xl font-bold text-center mb-12">
            Technical <span className="gradient-text">Expertise</span>
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {badges.map((badge, index) => {
              const Icon = badge.icon
              return (
                <motion.div
                  key={badge.category}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="glass p-6 rounded-xl hover:scale-105 transition-transform"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <Icon className="text-primary" size={24} />
                    </div>
                    <h4 className="font-semibold text-lg">{badge.category}</h4>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {badge.items.map((item) => (
                      <span
                        key={item}
                        className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full border border-primary/20"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </motion.div>
              )
            })}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

