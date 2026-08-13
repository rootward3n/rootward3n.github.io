"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Github, ExternalLink, ArrowUpRight } from "lucide-react";
import Section from "@/components/ui/Section";
import Tag from "@/components/ui/Tag";
import { siteConfig, projects } from "@/lib/config";

export default function GitHubSection() {
  const prefersReducedMotion = useReducedMotion();
  const repos = projects.filter((p) => p.links.github);

  return (
    <Section
      id="github"
      index="05"
      title="GitHub"
      subtitle="Where the code lives — experiments, projects, and works in progress."
    >
      <div className="grid gap-6 lg:grid-cols-5">
        {/* Profile card */}
        <motion.div
          initial={prefersReducedMotion ? false : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col justify-between rounded-xl border border-border-subtle bg-bg-surface p-6 md:p-8 lg:col-span-2"
        >
          <div>
            <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg border border-border-subtle bg-bg-elevated text-accent">
              <Github size={22} aria-hidden="true" />
            </div>
            <h3 className="text-xl font-semibold text-fg-primary">
              Open Source &amp; Experiments
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-fg-secondary">
              Most of my work lives on GitHub — from half-finished experiments
              to polished projects. It&apos;s where I learn in public, break
              things, and iterate.
            </p>
          </div>
          <a
            href={siteConfig.github}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex h-11 w-fit items-center gap-2 rounded-md border border-border-strong px-5 font-mono text-sm text-fg-primary transition-all duration-200 hover:border-accent hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
          >
            <Github size={16} aria-hidden="true" />
            github.com/rootward3n
            <ArrowUpRight size={14} aria-hidden="true" />
          </a>
        </motion.div>

        {/* Repo list */}
        <div className="space-y-4 lg:col-span-3">
          {repos.map((repo, i) => (
            <motion.a
              key={repo.id}
              href={repo.links.github}
              target="_blank"
              rel="noopener noreferrer"
              initial={prefersReducedMotion ? false : { opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: 0.5,
                delay: prefersReducedMotion ? 0 : 0.1 + i * 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="group flex items-start gap-4 rounded-xl border border-border-subtle bg-bg-surface p-5 transition-colors duration-200 hover:border-accent/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
            >
              <div className="mt-0.5 shrink-0 text-fg-muted transition-colors group-hover:text-accent">
                <ExternalLink size={18} aria-hidden="true" />
              </div>
              <div className="min-w-0 flex-1">
                <div className="flex items-center gap-2">
                  <span className="font-mono text-sm font-medium text-fg-primary transition-colors group-hover:text-accent">
                    {repo.name.toLowerCase().replace(/\s+/g, "-")}
                  </span>
                  <ArrowUpRight
                    size={13}
                    className="shrink-0 text-fg-muted opacity-0 transition-opacity group-hover:opacity-100"
                    aria-hidden="true"
                  />
                </div>
                <p className="mt-1 text-sm text-fg-secondary">
                  {repo.description}
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {repo.technologies.slice(0, 4).map((tech) => (
                    <Tag key={tech}>{tech}</Tag>
                  ))}
                </div>
              </div>
            </motion.a>
          ))}

          <motion.div
            initial={prefersReducedMotion ? false : { opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="rounded-xl border border-dashed border-border-subtle p-5 text-center"
          >
            <p className="font-mono text-xs text-fg-muted">
              more repositories brewing…
            </p>
          </motion.div>
        </div>
      </div>
    </Section>
  );
}
