"use client";

import { motion } from "framer-motion";
import { Rocket, ArrowLeft, Clock } from "lucide-react";
import Link from "next/link";

export default function ComingSoon() {
  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-background via-primary/5 to-secondary/10">
      {/* Animated background */}
      <div className="absolute inset-0 animated-gradient opacity-10" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />

      <div className="relative z-10 text-center px-4 max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <div className="relative inline-block">
            <Rocket className="w-32 h-32 md:w-40 md:h-40 text-primary mx-auto animate-pulse" />
            <motion.div
              animate={{
                rotate: 360,
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute inset-0 border-4 border-primary/20 border-t-primary rounded-full"
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-6"
        >
          <h1 className="text-5xl md:text-6xl font-bold">
            <span className="gradient-text">Coming Soon!</span>
          </h1>

          <div className="flex items-center justify-center gap-3 text-xl md:text-2xl text-foreground/80">
            <Clock className="text-primary animate-pulse" size={28} />
            <p>Demo Under Development</p>
          </div>

          <p className="text-lg text-foreground/60 max-w-md mx-auto leading-relaxed">
            This project demo is currently being prepared for deployment. Check
            back soon to see it in action! In the meantime, you can explore the
            source code on GitHub.
          </p>

          <div className="pt-8 flex flex-wrap gap-4 justify-center">
            <Link
              href="/"
              className="px-8 py-3 bg-primary text-primary-foreground rounded-full font-semibold flex items-center gap-2 hover:scale-105 transition-transform"
            >
              <ArrowLeft size={20} />
              Back to Portfolio
            </Link>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="pt-12"
          >
            <div className="glass rounded-2xl p-6 max-w-md mx-auto">
              <h3 className="font-semibold mb-3 text-lg">Stay Updated!</h3>
              <p className="text-sm text-foreground/60">
                Follow my GitHub to get notified when the demo goes live.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
