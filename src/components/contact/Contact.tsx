"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Mail, Github, Instagram, Linkedin, Check, Copy } from "lucide-react";
import Section from "@/components/ui/Section";
import { siteConfig } from "@/lib/config";

export default function Contact() {
  const prefersReducedMotion = useReducedMotion();
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(siteConfig.email);
    } catch {
      const textArea = document.createElement("textarea");
      textArea.value = siteConfig.email;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand("copy");
      document.body.removeChild(textArea);
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const socials = [
    {
      label: "GitHub",
      href: siteConfig.github,
      icon: Github,
      external: true,
      disabled: false,
    },
    {
      label: "Instagram",
      href: siteConfig.instagram,
      icon: Instagram,
      external: true,
      disabled: false,
    },
    {
      label: "LinkedIn",
      href: siteConfig.linkedin ?? "#",
      icon: Linkedin,
      external: true,
      disabled: !siteConfig.linkedin,
    },
  ];

  return (
    <Section id="contact" index="06" title="Get In Touch" className="bg-bg-base">
      <motion.div
        initial={prefersReducedMotion ? false : { opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="relative mx-auto max-w-2xl overflow-hidden rounded-xl border border-border-subtle bg-bg-surface p-8 text-center md:p-12"
      >
        <div
          className="pointer-events-none absolute -top-24 left-1/2 h-48 w-96 -translate-x-1/2 rounded-full bg-accent/5 blur-3xl"
          aria-hidden="true"
        />

        <div className="relative">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-4 py-1.5">
            <span
              className="h-2 w-2 animate-pulse-dot rounded-full bg-accent"
              aria-hidden="true"
            />
            <span className="font-mono text-xs text-accent">
              {siteConfig.availability}
            </span>
          </div>

          <h3 className="text-2xl font-semibold text-fg-primary md:text-3xl">
            Let&apos;s build something together.
          </h3>

          <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-fg-secondary">
            Whether it&apos;s a project idea, a collaboration, or just a
            conversation about tech — my inbox is always open.
          </p>

          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <a
              href={`mailto:${siteConfig.email}`}
              className="inline-flex h-12 items-center gap-2 rounded-md bg-accent px-6 font-medium text-text-inverse transition-all duration-200 hover:bg-accent-dim hover:shadow-glow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg-deep active:scale-[0.98]"
            >
              <Mail size={18} aria-hidden="true" />
              Say Hello
            </a>

            <button
              onClick={handleCopyEmail}
              className="inline-flex h-12 items-center gap-2 rounded-md border border-border-strong px-6 font-mono text-sm text-fg-primary transition-all duration-200 hover:border-accent hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent active:scale-[0.98]"
              aria-label={copied ? "Email copied" : "Copy email address"}
            >
              {copied ? (
                <>
                  <Check size={16} className="text-accent" aria-hidden="true" />
                  Copied!
                </>
              ) : (
                <>
                  <Copy size={16} aria-hidden="true" />
                  {siteConfig.email}
                </>
              )}
            </button>
          </div>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            {socials.map((social) =>
              social.disabled ? (
                <span
                  key={social.label}
                  className="inline-flex h-11 items-center gap-2 rounded-md border border-border-subtle px-4 font-mono text-xs text-fg-muted opacity-50"
                  title={`${social.label} — coming soon`}
                >
                  <social.icon size={16} aria-hidden="true" />
                  {social.label}
                  <span className="text-[10px] uppercase tracking-wider">
                    soon
                  </span>
                </span>
              ) : (
                <a
                  key={social.label}
                  href={social.href}
                  target={social.external ? "_blank" : undefined}
                  rel={social.external ? "noopener noreferrer" : undefined}
                  aria-label={social.label}
                  className="inline-flex h-11 items-center gap-2 rounded-md border border-border-subtle px-4 font-mono text-xs text-fg-secondary transition-all duration-200 hover:border-accent hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                >
                  <social.icon size={16} aria-hidden="true" />
                  {social.label}
                </a>
              )
            )}
          </div>
        </div>
      </motion.div>
    </Section>
  );
}
