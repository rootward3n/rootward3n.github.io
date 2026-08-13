import { siteConfig } from "@/lib/config";

export default function Footer() {
  return (
    <footer className="border-t border-border-subtle py-8">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-4 px-6 sm:flex-row">
        <p className="font-mono text-xs text-fg-muted">
          © {new Date().getFullYear()} {siteConfig.name} · Built with Next.js,
          TypeScript &amp; Framer Motion
        </p>
        <nav aria-label="Footer">
          <ul className="flex items-center gap-4">
            <li>
              <a
                href={siteConfig.github}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-sm font-mono text-xs text-fg-secondary transition-colors hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
              >
                GitHub
              </a>
            </li>
            <li>
              <a
                href={siteConfig.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-sm font-mono text-xs text-fg-secondary transition-colors hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
              >
                Instagram
              </a>
            </li>
            <li>
              <a
                href={`mailto:${siteConfig.email}`}
                className="rounded-sm font-mono text-xs text-fg-secondary transition-colors hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
              >
                Email
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
}
