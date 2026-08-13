"use client";

import { useEffect, useState, useRef } from "react";
import { useReducedMotion } from "framer-motion";

interface TerminalLine {
  type: "command" | "output";
  text: string;
  delay?: number;
}

const terminalLines: TerminalLine[] = [
  { type: "command", text: "whoami" },
  { type: "output", text: "rootward3n — IT student & builder" },
  { type: "command", text: "cat focus.txt" },
  { type: "output", text: "artificial_intelligence / cybersecurity / software" },
  { type: "command", text: "phantom --status" },
  { type: "output", text: "[██████░░░░] building — providers · memory · tools · voice" },
  { type: "command", text: "echo $PHILOSOPHY" },
  { type: "output", text: "build → break → understand → improve" },
];

export default function TerminalWindow() {
  const prefersReducedMotion = useReducedMotion();
  const [visibleLines, setVisibleLines] = useState<number>(prefersReducedMotion ? terminalLines.length : 0);
  const [typedChars, setTypedChars] = useState<number>(0);
  const [currentLine, setCurrentLine] = useState<number>(0);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    if (prefersReducedMotion) {
      setVisibleLines(terminalLines.length);
      return;
    }

    let lineIndex = 0;
    let charIndex = 0;

    const typeNext = () => {
      if (lineIndex >= terminalLines.length) {
        if (intervalRef.current) clearInterval(intervalRef.current);
        return;
      }

      const line = terminalLines[lineIndex];

      if (line.type === "command") {
        charIndex++;
        setTypedChars(charIndex);
        setVisibleLines(lineIndex + 1);

        if (charIndex >= line.text.length) {
          charIndex = 0;
          lineIndex++;
          setCurrentLine(lineIndex);
          setTypedChars(0);
        }
      } else {
        setVisibleLines(lineIndex + 1);
        lineIndex++;
        setCurrentLine(lineIndex);
      }
    };

    intervalRef.current = setInterval(typeNext, 45);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [prefersReducedMotion]);

  return (
    <div className="w-full max-w-lg rounded-lg border border-border-subtle bg-bg-surface shadow-glow-sm">
      {/* Terminal header */}
      <div className="flex items-center gap-2 border-b border-border-subtle px-4 py-3">
        <span className="h-3 w-3 rounded-full bg-red-500/80" aria-hidden="true" />
        <span className="h-3 w-3 rounded-full bg-yellow-500/80" aria-hidden="true" />
        <span className="h-3 w-3 rounded-full bg-green-500/80" aria-hidden="true" />
        <span className="ml-3 font-mono text-xs text-fg-muted">
          rootward3n@dev: ~
        </span>
      </div>

      {/* Terminal body */}
      <div
        className="min-h-[280px] p-5 font-mono text-sm leading-relaxed"
        role="region"
        aria-label="Terminal introduction"
      >
        {/* Screen reader accessible version */}
        <div className="sr-only">
          {terminalLines.map((line, i) => (
            <p key={i}>
              {line.type === "command" ? `$ ${line.text}` : line.text}
            </p>
          ))}
        </div>

        {/* Animated version */}
        <div aria-hidden="true">
          {terminalLines.slice(0, visibleLines).map((line, i) => (
            <div key={i} className="mb-1">
              {line.type === "command" ? (
                <p className="text-fg-primary">
                  <span className="text-accent">$ </span>
                  {i === currentLine && !prefersReducedMotion
                    ? line.text.slice(0, typedChars)
                    : line.text}
                  {i === currentLine && !prefersReducedMotion && (
                    <span className="ml-0.5 inline-block h-4 w-2 animate-blink bg-accent align-middle" />
                  )}
                </p>
              ) : (
                <p className="pl-4 text-fg-secondary">{line.text}</p>
              )}
            </div>
          ))}
          {visibleLines >= terminalLines.length && (
            <p className="text-fg-primary">
              <span className="text-accent">$ </span>
              <span className="inline-block h-4 w-2 animate-blink bg-accent align-middle" />
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
