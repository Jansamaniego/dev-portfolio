import { site } from "@/data/site";
import { isReadyLink, isReadyValue } from "@/lib/links";
import { ScrollReveal } from "./ScrollReveal";

export function Contact() {
  const hasEmail = isReadyValue(site.email);
  const hasGithub = isReadyLink(site.social.github);
  const hasLinkedin = isReadyLink(site.social.linkedin);
  const isDev = process.env.NODE_ENV === "development";

  const links = [
    hasGithub && {
      label: "GitHub",
      href: site.social.github,
      external: true,
    },
    hasLinkedin && {
      label: "LinkedIn",
      href: site.social.linkedin,
      external: true,
    },
    {
      label: "Resume",
      href: site.resumeUrl,
      external: false,
      download: true,
    },
  ].filter(Boolean) as {
    label: string;
    href: string;
    external: boolean;
    download?: boolean;
  }[];

  return (
    <ScrollReveal className="scroll-reveal">
      <div data-spotlight className="panel relative overflow-hidden p-8 sm:p-14">
        <div
          aria-hidden
          className="absolute -right-32 -top-40 h-[28rem] w-[28rem] rounded-full"
          style={{
            background:
              "radial-gradient(closest-side, var(--accent-glow), transparent)",
          }}
        />
        <span className="orbit -right-40 left-auto top-0 w-[30rem]" aria-hidden />

        <div className="relative z-[2]">
          <p className="max-w-2xl text-2xl font-light leading-snug tracking-tight text-foreground sm:text-4xl sm:leading-[1.2]">
            Open to full-time roles and interesting collaborations. The fastest
            way to reach me is email — or connect on the links below.
          </p>

          {hasEmail && (
            <p className="mt-8">
              <span className="eyebrow block">Email</span>
              <span className="mt-2 block select-all break-all text-lg text-foreground sm:text-xl">
                {site.email}
              </span>
            </p>
          )}

          <ul className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            {links.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  {...(link.external
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                  download={link.download || undefined}
                  className="btn btn-ghost w-full min-w-[140px] sm:w-auto"
                >
                  {link.label}{" "}
                  <span className="arrow" aria-hidden>
                    {link.download ? "↓" : "→"}
                  </span>
                </a>
              </li>
            ))}
          </ul>

          {!hasEmail && !hasGithub && !hasLinkedin && isDev && (
            <p className="mt-6 text-sm text-muted">
              Add your email and social URLs in{" "}
              <code className="font-mono text-foreground/80">src/data/site.ts</code>
            </p>
          )}
        </div>
      </div>
    </ScrollReveal>
  );
}
