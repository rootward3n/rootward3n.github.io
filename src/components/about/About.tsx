"use client";

import { motion, useReducedMotion } from "framer-motion";
import Section from "@/components/ui/Section";
import { siteConfig } from "@/lib/config";

export default function About() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <Section
      id="about"
      index="01"
      title="About Me"
      subtitle="The person behind the terminal"
    >
      <div className="grid gap-12 lg:grid-cols-5">
        <motion.div
          initial={prefersReducedMotion ? false : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="space-y-5 text-base leading-relaxed text-fg-secondary lg:col-span-3"
        >
          <p>
            Hey, I&apos;m <span className="font-semibold text-fg-primary">{siteConfig.name}</span> — an
            IT student who learns best by taking things apart. Whether it&apos;s an AI model, a
            network protocol, or a piece of software I didn&apos;t write, I want to know how it
            works at the layer below the abstraction.
          </p>
          <p>
            My interests span three areas that feed each other:{" "}
            <span className="text-fg-primary">artificial intelligence</span>,{" "}
            <span className="text-fg-primary">cybersecurity</span>, and{" "}
            <span className="text-fg-primary">software development</span>. Building AI systems
            taught me to think in pipelines. Studying security taught me to think about failure.
            Writing software taught me to make both of those things actually usable.
          </p>
          <p>
            I don&apos;t claim mastery. I claim curiosity, persistence, and a growing pile of
            projects that prove I ship what I start.
          </p>
        </motion.div>

        <motion.div
          initial={prefersReducedMotion ? false : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-2"
        >
          <div className="rounded-xl border border-border-subtle bg-bg-surface p-6">
            <h3 className="font-mono text-xs uppercase tracking-widest text-accent">
              Quick Facts
            </h3>
            <ul className="mt-4 space-y-3">
              <li className="flex items-start gap-3">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden="true" />
                <span className="text-sm text-fg-secondary">
                  <span className="font-medium text-fg-primary">Status:</span>{" "}
                  {siteConfig.availability}
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden="true" />
                <span className="text-sm text-fg-secondary">
                  <span className="font-medium text-fg-primary">Focus:</span> AI,
                  Cybersecurity, Software Engineering
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden="true" />
                <span className="text-sm text-fg-secondary">
                  <span className="font-medium text-fg-primary">Approach:</span>{" "}
                  Build, break, understand, improve
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden="true" />
                <span className="text-sm text-fg-secondary">
                  <span className="font-medium text-fg-primary">Currently:</span>{" "}
                  Deepening systems knowledge and shipping side projects
                </span>
              </li>
            </ul>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
