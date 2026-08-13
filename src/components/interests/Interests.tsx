"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Brain, Shield, Code2, Terminal } from "lucide-react";
import Section from "@/components/ui/Section";
import Tag from "@/components/ui/Tag";
import { interests, type InterestCategory } from "@/lib/config";

const iconMap: Record<InterestCategory["icon"], React.ElementType> = {
  cpu: Brain,
  shield: Shield,
  code: Code2,
  terminal: Terminal,
};

export default function Interests() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <Section
      id="interests"
      index="02"
      title="Areas of Interest"
      subtitle="The domains I keep pulling at — each one feeds the others."
      className="bg-bg-base"
    >
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {interests.map((interest, i) => {
          const Icon = iconMap[interest.icon];
          return (
            <motion.article
              key={interest.id}
              initial={prefersReducedMotion ? false : { opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="group relative overflow-hidden rounded-xl border border-border-subtle bg-bg-surface p-6 transition-colors duration-300 hover:border-accent/40"
            >
              <div
                className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                style={{
                  background:
                    "radial-gradient(300px circle at 50% 0%, var(--accent-muted), transparent 70%)",
                }}
                aria-hidden="true"
              />
              <div className="relative">
                <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-lg border border-border-subtle bg-bg-elevated text-accent">
                  <Icon size={20} aria-hidden="true" />
                </div>
                <h3 className="text-lg font-semibold text-fg-primary">
                  {interest.label}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-fg-secondary">
                  {interest.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {interest.items.map((item) => (
                    <Tag key={item}>{item}</Tag>
                  ))}
                </div>
              </div>
            </motion.article>
          );
        })}
      </div>
    </Section>
  );
}
