import { site } from "@/data/site";

export function SiteFooter() {
  return (
    <footer className="mt-auto py-10">
      <div className="section-container">
        <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent" />
        <div className="mt-8 flex flex-col items-center justify-between gap-3 text-sm text-muted sm:flex-row">
          <p>
            © {new Date().getFullYear()} {site.name}. Built with Next.js.
          </p>
          <a
            href="#top"
            className="font-mono text-xs uppercase tracking-[0.2em] transition-colors hover:text-accent"
          >
            Back to top ↑
          </a>
        </div>
      </div>
    </footer>
  );
}
