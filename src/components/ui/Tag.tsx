import { cn } from "@/lib/utils";

interface TagProps {
  children: React.ReactNode;
  className?: string;
}

export default function Tag({ children, className }: TagProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-sm border border-border-subtle bg-bg-elevated px-2.5 py-1",
        "font-mono text-xs text-fg-secondary transition-colors duration-200",
        "hover:border-accent/40 hover:text-accent",
        className
      )}
    >
      {children}
    </span>
  );
}
