"use client";

import { motion, useReducedMotion } from "framer-motion";
import Section from "@/components/ui/Section";
import Tag from "@/components/ui/Tag";
import { journeyStages } from "@/lib/config";

export default function Journey() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <Section
      id="journey"
      index="04"
      title="Learning Journey"
      subtitle="Not a career timeline — a map of how I learn: by doing, failing, and iterating."
      className="bg-bg-base"
    >
      <div className="relative mx-auto max-w-2xl">
        {/* Vertical line */}
        <div
          className="absolute left-[7px] top-2 bottom-2 w-px bg-gradient-to-b from-accent/60 via-border-default to-transparent"
          aria-hidden="true"
        />

        <ol className="space-y-10">
          {journeyStages.map((stage, index) => (
            <motion.li
              key={stage.id}
              initial={prefersReducedMotion ? false : { opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: 0.5,
                delay: prefersReducedMotion ? 0 : index * 0.08,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="relative pl-10"
            >
              {/* Dot */}
              <span
                className="absolute left-0 top-1.5 h-[15px] w-[15px] rounded-full border-2 border-accent bg-bg-deep"
                aria-hidden="true"
              />

              <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                <h3 className="font-mono text-sm font-semibold uppercase tracking-widest text-accent">
                  {stage.label}
                </h3>
              </div>

              <p className="mt-2 text-sm font-medium text-fg-primary">
                {stage.description}
              </p>
              <p className="mt-1 text-sm leading-relaxed text-fg-secondary">
                {stage.detail}
              </p>

              {stage.tags.length > 0 && (
                <div className="mt-3 flex flex-wrap gap-2">
                  {stage.tags.map((tag) => (
                    <Tag key={tag}>{tag}</Tag>
                  ))}
                </div>
              )}
            </motion.li>
          ))}
        </ol>
      </div>
    </Section>
  );
}
