"use client";

import { useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ExternalLink, Github, Sparkles } from "lucide-react";
import Tag from "@/components/ui/Tag";
import type { Project } from "@/lib/config";

export default function PhantomShowcase({ project }: { project: Project }) {
  const prefersReducedMotion = useReducedMotion();
  const cardRef = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (prefersReducedMotion || !cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    setTilt({ x: py * -4, y: px * 4 });
  };

  const handleMouseLeave = () => setTilt({ x: 0, y: 0 });

  const modules = [
    { label: "PROVIDERS", desc: "Multi-LLM routing" },
    { label: "MEMORY", desc: "Persistent context" },
    { label: "TOOLS", desc: "Extensible tool use" },
    { label: "VOICE", desc: "Speech I/O" },
  ];

  return (
    <motion.article
      initial={prefersReducedMotion ? false : { opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="relative overflow-hidden rounded-2xl border border-accent/25 bg-bg-surface"
    >
      <div
        className="pointer-events-none absolute -top-32 right-0 h-64 w-64 rounded-full bg-accent/10 blur-3xl"
        aria-hidden="true"
      />

      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          transform: prefersReducedMotion
            ? undefined
            : `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
          transition: "transform 0.15s ease-out",
        }}
        className="relative grid gap-8 p-6 md:p-10 lg:grid-cols-2"
      >
        {/* Left: info */}
        <div>
          <div className="flex flex-wrap items-center gap-3">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-accent/30 bg-accent/10 px-3 py-1 font-mono text-[11px] uppercase tracking-widest text-accent">
              <Sparkles size={12} aria-hidden="true" />
              Featured
            </span>
            <span className="rounded-full border border-border-subtle bg-bg-elevated px-3 py-1 font-mono text-[11px] uppercase tracking-wider text-fg-muted">
              {project.status === "building" ? "In Progress" : project.status}
            </span>
          </div>

          <h3 className="mt-5 font-mono text-3xl font-bold tracking-tight text-fg-primary md:text-4xl">
            {project.name}
          </h3>
          <p className="mt-1 font-mono text-xs uppercase tracking-widest text-accent">
            {project.role}
          </p>

          <p className="mt-5 text-sm leading-relaxed text-fg-secondary md:text-base">
            {project.description}
          </p>

          <div className="mt-5 flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <Tag key={tag} className="border-accent/30 text-accent">
                {tag}
              </Tag>
            ))}
          </div>

          <div className="mt-6 flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="rounded-sm bg-bg-elevated px-2 py-1 font-mono text-xs text-fg-secondary"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            {project.links.github && (
              <a
                href={project.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-11 items-center gap-2 rounded-md bg-accent px-5 font-medium text-text-inverse transition-all duration-200 hover:bg-accent-dim hover:shadow-glow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg-deep active:scale-[0.98]"
              >
                <Github size={16} aria-hidden="true" />
                View on GitHub
              </a>
            )}
            {project.links.demo && (
              <a
                href={project.links.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-11 items-center gap-2 rounded-md border border-border-strong px-5 font-medium text-fg-primary transition-colors duration-200 hover:border-accent hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
              >
                <ExternalLink size={16} aria-hidden="true" />
                Live Demo
              </a>
            )}
          </div>
        </div>

        {/* Right: architecture visualization */}
        <div className="flex items-center justify-center">
          <div
            className="w-full max-w-sm rounded-xl border border-border-subtle bg-bg-deep p-6"
            role="img"
            aria-label="PHANTOM architecture diagram: interface connects to core engine, which connects to providers, memory, tools, and voice modules"
          >
            <p className="mb-5 text-center font-mono text-[10px] uppercase tracking-[0.2em] text-fg-muted">
              System Architecture
            </p>

            <div className="flex flex-col items-center gap-2">
              <motion.div
                initial={prefersReducedMotion ? false : { opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
                className="w-full rounded-md border border-accent/40 bg-accent/10 px-4 py-2.5 text-center font-mono text-xs font-semibold tracking-widest text-accent"
              >
                INTERFACE
              </motion.div>

              <div
                className="h-5 w-px bg-gradient-to-b from-accent/60 to-border-default"
                aria-hidden="true"
              />

              <motion.div
                initial={prefersReducedMotion ? false : { opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.15 }}
                className="w-full rounded-md border border-border-strong bg-bg-elevated px-4 py-3 text-center"
              >
                <p className="font-mono text-sm font-semibold text-fg-primary">
                  CORE ENGINE
                </p>
                <p className="mt-0.5 font-mono text-[10px] text-fg-muted">
                  FastAPI · orchestration
                </p>
              </motion.div>

              <div
                className="h-5 w-px bg-gradient-to-b from-border-default to-accent/60"
                aria-hidden="true"
              />

              <div className="grid w-full grid-cols-2 gap-2">
                {modules.map((mod, i) => (
                  <motion.div
                    key={mod.label}
                    initial={prefersReducedMotion ? false : { opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.25 + i * 0.1 }}
                    className="rounded-md border border-border-subtle bg-bg-surface px-3 py-2.5 text-center transition-colors duration-200 hover:border-accent/40"
                  >
                    <p className="font-mono text-[11px] font-semibold tracking-wider text-fg-primary">
                      {mod.label}
                    </p>
                    <p className="mt-0.5 text-[10px] text-fg-muted">{mod.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.article>
  );
}
