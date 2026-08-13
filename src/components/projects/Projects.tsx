"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import Section from "@/components/ui/Section";
import PhantomShowcase from "./PhantomShowcase";
import { projects, type Project } from "@/lib/config";

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.article
      initial={prefersReducedMotion ? false : { opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      className="group flex flex-col rounded-xl border border-border-subtle bg-bg-surface p-6 transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-glow-sm md:p-8"
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="text-xl font-semibold text-fg-primary">{project.name}</h3>
          <p className="mt-1 font-mono text-xs uppercase tracking-widest text-fg-muted">
            {project.role}
          </p>
        </div>
        <div className="flex shrink-0 gap-2">
          {project.links.github && (
            <a
              href={project.links.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${project.name} on GitHub`}
              className="rounded-md border border-border-subtle p-2 text-fg-secondary transition-colors hover:border-accent hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
            >
              <Github size={18} aria-hidden="true" />
            </a>
          )}
          {project.links.demo && (
            <a
              href={project.links.demo}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${project.name} live demo`}
              className="rounded-md border border-border-subtle p-2 text-fg-secondary transition-colors hover:border-accent hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
            >
              <ExternalLink size={18} aria-hidden="true" />
            </a>
          )}
        </div>
      </div>

      <p className="mt-4 flex-1 text-sm leading-relaxed text-fg-secondary">
        {project.description}
      </p>

      <div className="mt-5 flex flex-wrap gap-2">
        {project.technologies.map((tech) => (
          <span
            key={tech}
            className="rounded-sm bg-bg-elevated px-2 py-1 font-mono text-xs text-fg-secondary"
          >
            {tech}
          </span>
        ))}
      </div>
    </motion.article>
  );
}

export default function Projects() {
  const featured = projects.filter((p) => p.featured);
  const others = projects.filter((p) => !p.featured);

  return (
    <Section
      id="projects"
      index="03"
      title="Projects"
      subtitle="Things I'm building to learn, break, and improve."
    >
      <div className="space-y-6">
        {featured.map((project) => (
          <PhantomShowcase key={project.id} project={project} />
        ))}

        <div className="grid gap-6 md:grid-cols-2">
          {others.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>
    </Section>
  );
}
