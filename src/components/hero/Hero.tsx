"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowDown, Github, Mail } from "lucide-react";
import { siteConfig } from "@/lib/config";
import TerminalWindow from "./Terminal";

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const },
  },
};

export default function Hero() {
  const prefersReducedMotion = useReducedMotion();

  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center overflow-hidden pt-16"
    >
      <div className="grid-bg pointer-events-none absolute inset-0" aria-hidden="true" />
      <div
        className="pointer-events-none absolute left-1/2 top-1/3 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/5 blur-[120px]"
        aria-hidden="true"
      />

      <div className="mx-auto grid w-full max-w-6xl gap-12 px-6 lg:grid-cols-2 lg:items-center lg:gap-16">
        <motion.div
          variants={prefersReducedMotion ? undefined : containerVariants}
          initial={prefersReducedMotion ? false : "hidden"}
          animate="visible"
        >
          <motion.p
            variants={itemVariants}
            className="mb-4 inline-flex items-center gap-2 rounded-full border border-border-subtle bg-bg-surface px-4 py-1.5 font-mono text-xs text-accent"
          >
            <span
              className="inline-block h-2 w-2 animate-pulse-dot rounded-full bg-accent"
              aria-hidden="true"
            />
            {siteConfig.availability}
          </motion.p>

          <motion.h1
            variants={itemVariants}
            className="text-4xl font-bold leading-tight tracking-tight text-fg-primary sm:text-5xl lg:text-6xl"
          >
            Building to learn.
            <br />
            <span className="text-gradient">Breaking to understand.</span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="mt-6 max-w-xl text-lg leading-relaxed text-fg-secondary"
          >
            I&apos;m <span className="font-semibold text-fg-primary">{siteConfig.handle}</span>,
            an IT student exploring how intelligent systems work — by building
            them, breaking them, and putting them back together better.
          </motion.p>

          <motion.div variants={itemVariants} className="mt-8 flex flex-wrap items-center gap-4">
            <button
              onClick={scrollToProjects}
              className="inline-flex h-12 items-center gap-2 rounded-md bg-accent px-6 font-medium text-text-inverse transition-all duration-200 hover:bg-accent-dim hover:shadow-glow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg-deep active:scale-[0.98]"
            >
              Explore Projects
              <ArrowDown size={16} aria-hidden="true" />
            </button>
            <a
              href={siteConfig.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-12 items-center gap-2 rounded-md border border-border-strong px-6 font-medium text-fg-primary transition-all duration-200 hover:border-accent hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg-deep active:scale-[0.98]"
            >
              <Github size={18} aria-hidden="true" />
              GitHub
            </a>
            <a
              href="#contact"
              className="inline-flex h-12 items-center gap-2 rounded-md px-4 font-medium text-fg-secondary transition-colors duration-200 hover:text-fg-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
            >
              <Mail size={18} aria-hidden="true" />
              Contact
            </a>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="mt-12 flex flex-wrap items-center gap-2 font-mono text-xs text-fg-muted"
            aria-label="Core philosophy: Build, Break, Understand, Improve"
          >
            {siteConfig.skillItems.map((word, i) => (
              <span key={word} className="flex items-center gap-2">
                {i > 0 && (
                  <span className="text-accent" aria-hidden="true">
                    →
                  </span>
                )}
                <span className="rounded border border-border-subtle bg-bg-surface px-2 py-1 tracking-wider">
                  {word}
                </span>
              </span>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          initial={prefersReducedMotion ? false : { opacity: 0, y: 30, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="hidden lg:block"
        >
          <TerminalWindow />
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={prefersReducedMotion ? {} : { y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        aria-hidden="true"
      >
        <ArrowDown size={20} className="text-fg-muted" />
      </motion.div>
    </section>
  );
}
