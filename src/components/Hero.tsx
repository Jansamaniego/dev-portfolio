import Image from "next/image";
import type { CSSProperties } from "react";
import { site } from "@/data/site";

function delay(step: number) {
  return { "--d": step } as CSSProperties;
}

const cropMarks = [
  "-left-3 -top-3 border-l border-t",
  "-right-3 -top-3 border-r border-t",
  "-bottom-3 -left-3 border-b border-l",
  "-bottom-3 -right-3 border-b border-r",
];

const orbits = [
  { size: "w-[125%]", speed: "46s" },
  { size: "hidden w-[170%] lg:block", speed: "72s" },
  { size: "hidden w-[225%] lg:block", speed: "110s" },
];

export function Hero() {
  const hasResume = site.resumeUrl.startsWith("/");

  return (
    <section id="hero" className="relative overflow-clip">
      <div className="section-container grid min-h-[calc(100svh-11rem)] items-center gap-16 pb-14 pt-16 lg:grid-cols-[minmax(0,1.3fr)_minmax(0,0.8fr)] lg:gap-10">
        <div>
          <p className="eyebrow hero-rise flex items-center gap-3" style={delay(0)}>
            <span className="status-dot" aria-hidden />
            {site.role}
          </p>

          <h1 className="mt-8">
            <span className="sr-only">
              Hi, I&apos;m {site.name}
            </span>
            <span
              aria-hidden
              className="hero-rise block text-3xl font-light tracking-tight text-muted sm:text-5xl"
              style={delay(1)}
            >
              Hi, I&apos;m
            </span>
            <span aria-hidden className="hero-name mt-1">
              {Array.from(site.name).map((letter, index) => (
                <span
                  key={index}
                  className="hero-letter"
                  style={{ "--i": index } as CSSProperties}
                >
                  {letter}
                </span>
              ))}
            </span>
          </h1>

          <p
            className="hero-rise mt-6 max-w-lg text-xl leading-relaxed text-muted"
            style={delay(5)}
          >
            {site.tagline}
          </p>

          <div className="hero-rise mt-10 flex flex-wrap gap-3" style={delay(6)}>
            <a href="#projects" className="btn btn-primary">
              View projects <span className="arrow">→</span>
            </a>
            <a href="#contact" className="btn btn-ghost">
              Get in touch
            </a>
            {hasResume && (
              <a
                href={site.resumeUrl}
                className="btn btn-ghost text-muted"
                download
              >
                Resume <span aria-hidden>↓</span>
              </a>
            )}
          </div>
        </div>

        <div className="hero-rise mx-auto w-full max-w-[17rem] sm:max-w-[20rem] lg:ml-auto lg:mr-0" style={delay(3)}>
          <div className="parallax-hero relative">
            <div aria-hidden>
              {orbits.map((orbit) => (
                <span
                  key={orbit.size}
                  className={`orbit ${orbit.size}`}
                  style={{ "--orbit-speed": orbit.speed } as CSSProperties}
                />
              ))}
            </div>

            {cropMarks.map((position) => (
              <span key={position} className={`crop-mark ${position}`} aria-hidden />
            ))}

            <div className="portrait-frame">
              <div className="portrait-plate">
                <Image
                  src={site.profileImage}
                  alt={`Photo of ${site.name}`}
                  fill
                  className="portrait-image origin-[50%_32%] scale-[1.16] object-cover object-top"
                  priority
                  sizes="(max-width: 640px) 272px, 320px"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="hero-rise marquee overflow-hidden py-7" style={delay(8)} aria-hidden>
        <div className="marquee-track">
          {[0, 1, 2, 3].map((group) => (
            <ul key={group} className="flex shrink-0">
              {site.skills.map((skill) => (
                <li
                  key={skill}
                  className="flex items-center font-mono text-xs uppercase tracking-[0.2em] text-muted/70"
                >
                  {skill}
                  <span className="mx-8 text-accent">✦</span>
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>
    </section>
  );
}
