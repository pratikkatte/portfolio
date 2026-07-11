"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { profile, type Project } from "./site-data";

const nav = [
  { label: "Projects", href: "/" },
  { label: "Talks + Publications", href: "/publications" },
  { label: "Writing", href: "/writing" },
  { label: "Resume", href: profile.resume },
];

function getInitialTheme(): "light" | "dark" {
  if (typeof window === "undefined") {
    return "light";
  }

  const storedTheme = window.localStorage.getItem("theme");
  if (storedTheme === "dark" || storedTheme === "light") {
    return storedTheme;
  }

  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

export function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className="site-header">
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <nav className="nav-shell" aria-label="Primary navigation">
        <Link className="brand" href="/">
          <span className="brand-mark" aria-hidden="true">PK</span>
          <span>{profile.name}</span>
        </Link>
        <div className="nav-tools">
          <div className="nav-links">
            {nav.map((item) =>
              item.href.startsWith("/") && !item.href.endsWith(".pdf") ? (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={
                    (item.href === "/"
                      ? pathname === "/" || pathname === "/projects"
                      : pathname === item.href)
                      ? "page"
                      : undefined
                  }
                >
                  {item.label}
                </Link>
              ) : (
                <a key={item.href} href={item.href} target="_blank" rel="noreferrer">
                  {item.label}
                </a>
              ),
            )}
          </div>
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
}

export function ThemeToggle() {
  const [theme, setTheme] = useState<"light" | "dark">(getInitialTheme);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    window.localStorage.setItem("theme", theme);
  }, [theme]);

  function toggleTheme() {
    const nextTheme = theme === "dark" ? "light" : "dark";
    setTheme(nextTheme);
    window.localStorage.setItem("theme", nextTheme);
    document.documentElement.dataset.theme = nextTheme;
  }

  return (
    <button
      className="theme-toggle"
      type="button"
      onClick={toggleTheme}
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
      title={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
      aria-pressed={theme === "dark"}
      suppressHydrationWarning
    >
      <span aria-hidden="true">{theme === "dark" ? "☀" : "☾"}</span>
    </button>
  );
}

export function SiteFooter() {
  return (
    <footer className="site-footer" id="contact">
      <p>
        <a href={`mailto:${profile.email}`}>{profile.email}</a>
      </p>
      <div className="footer-links">
        <a href={profile.linkedin} target="_blank" rel="noreferrer">
          LinkedIn
        </a>
        <a href={profile.github} target="_blank" rel="noreferrer">
          Github
        </a>
        <a href={profile.twitter} target="_blank" rel="noreferrer">
          Twitter
        </a>
      </div>
    </footer>
  );
}

export function ExternalLink({
  href,
  children,
  className,
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
}) {
  const isInternal = href.startsWith("/");
  if (isInternal) {
    return (
      <Link className={className} href={href}>
        {children}
      </Link>
    );
  }

  return (
    <a className={className} href={href} target="_blank" rel="noreferrer">
      {children}
    </a>
  );
}

export function ContactLink({
  href,
  icon,
  label,
}: {
  href: string;
  icon: string;
  label: string;
}) {
  const isEmail = href.startsWith("mailto:");

  return (
    <a
      className="contact-link"
      href={href}
      aria-label={label}
      title={label}
      target={isEmail ? undefined : "_blank"}
      rel={isEmail ? undefined : "noreferrer"}
    >
      <span className="contact-icon" aria-hidden="true">{icon}</span>
      <span>{label}</span>
    </a>
  );
}

export function ProjectSection({ project }: { project: Project }) {
  return (
    <article className="project-entry" id={project.slug}>
      <h3>{project.title}</h3>
      <div className="project-entry-body">
        {project.image ? (
          <div className={`project-image${project.slug === "niramai-fever-test" || project.slug === "thermal-capture-tool" ? " tall" : ""}`}>
            <img src={project.image} alt={project.imageAlt ?? project.title} />
          </div>
        ) : null}
        <p className="project-meta">{project.eyebrow}</p>
        <p className="project-links">
          {project.links.map((link) => (
            <ExternalLink key={link.href} href={link.href}>
              {link.label}
            </ExternalLink>
          ))}
        </p>
        <p>{project.summary}</p>
        <p className="project-impact">{project.impact}</p>
        {project.details.map((detail) => (
          <p key={detail}>{detail}</p>
        ))}
        {project.gallery ? (
          <div className="project-gallery">
            {project.gallery.map((image) => (
              <img key={image.src} src={image.src} alt={image.alt} />
            ))}
          </div>
        ) : null}
        <p className="project-tags">Topics: {project.tags.join(", ")}</p>
      </div>
    </article>
  );
}

export function SectionHeading({
  title,
  copy,
}: {
  eyebrow?: string;
  title: string;
  copy?: string;
}) {
  return (
    <div className="page-heading">
      <h1>{title}</h1>
      {copy ? <p>{copy}</p> : null}
    </div>
  );
}

export function TagList({ tags }: { tags: string[] }) {
  return <p className="project-tags">Topics: {tags.join(", ")}</p>;
}
