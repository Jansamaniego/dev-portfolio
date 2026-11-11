"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { site } from "@/data/site";

const navItems = [
  { label: "About", id: "about" },
  { label: "Projects", id: "projects" },
  { label: "Photos", id: "photos" },
  { label: "Dogs", id: "dogs" },
  { label: "Contact", id: "contact" },
] as const;

export function SiteHeader() {
  const pathname = usePathname();
  const [activeId, setActiveId] = useState<string>("");
  const [menuOpen, setMenuOpen] = useState(false);
  const currentId = pathname.startsWith("/projects/") ? "projects" : activeId;

  useEffect(() => {
    // "hero" is observed so the highlight clears when scrolling back to the top.
    const sectionIds = ["hero", ...navItems.map((item) => item.id)];

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]?.target.id) {
          setActiveId(visible[0].target.id);
        }
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: [0, 0.25, 0.5] },
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!menuOpen) return;

    document.body.style.overflow = "hidden";

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };

    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [menuOpen]);

  return (
    <header className="sticky top-3 z-50 px-3 sm:top-4 sm:px-6">
      <div className="scroll-progress" aria-hidden />

      {menuOpen && (
        <button
          type="button"
          className="fixed inset-0 bg-black/60 md:hidden"
          aria-label="Close menu"
          onClick={() => setMenuOpen(false)}
        />
      )}

      <div className="nav-shell relative mx-auto flex h-14 max-w-[1052px] items-center justify-between rounded-full pl-5 pr-2 sm:pl-6">
        <Link
          href="/#top"
          className="text-lg font-semibold tracking-tight text-foreground transition-colors hover:text-accent"
          onClick={() => setMenuOpen(false)}
        >
          {site.name}
          <span className="text-accent">.</span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Main">
          {navItems.map((item) => {
            const isActive = currentId === item.id;
            return (
              <Link
                key={item.id}
                href={`/#${item.id}`}
                aria-current={isActive ? "true" : undefined}
                className={`rounded-full px-4 py-2 text-sm transition-colors duration-300 ${
                  isActive
                    ? "bg-accent/10 font-medium text-accent"
                    : "text-muted hover:bg-foreground/5 hover:text-foreground"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-foreground md:hidden"
          aria-expanded={menuOpen}
          aria-controls="mobile-nav"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span className="sr-only">{menuOpen ? "Close" : "Menu"}</span>
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            aria-hidden
          >
            {menuOpen ? (
              <>
                <path d="M6 6l12 12" />
                <path d="M18 6L6 18" />
              </>
            ) : (
              <>
                <path d="M4 8h16" />
                <path d="M4 16h16" />
              </>
            )}
          </svg>
        </button>
      </div>

      {menuOpen && (
        <nav
          id="mobile-nav"
          className="panel absolute inset-x-3 top-[calc(100%+0.5rem)] bg-background p-2 [animation:menu-in_0.35s_var(--ease-out)_both] md:hidden"
          aria-label="Mobile"
        >
          <ul className="flex flex-col gap-1">
            {navItems.map((item) => {
              const isActive = currentId === item.id;
              return (
                <li key={item.id}>
                  <Link
                    href={`/#${item.id}`}
                    aria-current={isActive ? "true" : undefined}
                    className={`block rounded-xl px-4 py-3 text-sm transition-colors ${
                      isActive
                        ? "bg-surface font-medium text-accent"
                        : "text-muted hover:bg-surface hover:text-foreground"
                    }`}
                    onClick={() => setMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      )}
    </header>
  );
}
