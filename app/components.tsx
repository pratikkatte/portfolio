"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { profile, type Project } from "./site-data";

const nav = [
  { label: "Projects", href: "/" },
  { label: "Talks and Publications", href: "/publications" },
  { label: "Blogs", href: "/writing" },
  { label: "Resume", href: profile.resume },
];

export function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className="site-header">
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <nav className="nav-shell" aria-label="Primary navigation">
        <Link className="brand" href="/">
          {profile.name}
        </Link>
        <div className="nav-links">
          {nav.map((item) =>
            item.href.startsWith("/") && !item.href.endsWith(".pdf") ? (
              <Link
                key={item.href}
                href={item.href}
                aria-current={pathname === item.href ? "page" : undefined}
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
      </nav>
    </header>
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
