import { cn } from "@/lib/utils";

interface SectionProps {
  id: string;
  index: string;
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  className?: string;
}

export default function Section({
  id,
  index,
  title,
  subtitle,
  children,
  className,
}: SectionProps) {
  return (
    <section id={id} className={cn("relative py-24 md:py-32", className)}>
      <div className="mx-auto w-full max-w-6xl px-6">
        <div className="mb-12 md:mb-16">
          <p className="font-mono text-sm tracking-widest text-accent">
            {index}
          </p>
          <h2 className="mt-2 text-3xl font-semibold tracking-tight text-fg-primary md:text-4xl">
            {title}
          </h2>
          {subtitle && (
            <p className="mt-3 max-w-2xl text-base text-fg-secondary">
              {subtitle}
            </p>
          )}
          <div className="glow-line mt-6 w-24" aria-hidden="true" />
        </div>
        {children}
      </div>
    </section>
  );
}
