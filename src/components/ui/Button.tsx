import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
}

export default function Button({
  variant = "primary",
  size = "md",
  className,
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-md font-medium transition-all duration-200",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg-deep",
        "disabled:pointer-events-none disabled:opacity-50",
        {
          primary:
            "bg-accent text-text-inverse hover:bg-accent-dim hover:shadow-glow-sm active:scale-[0.98]",
          secondary:
            "border border-border-strong bg-transparent text-fg-primary hover:border-accent hover:text-accent active:scale-[0.98]",
          ghost:
            "bg-transparent text-fg-secondary hover:text-fg-primary hover:bg-bg-elevated",
        }[variant],
        {
          sm: "h-9 px-4 text-sm",
          md: "h-11 px-6 text-sm",
          lg: "h-12 px-8 text-base",
        }[size],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
