import Link from "next/link";
import { ContactLink, ProjectSection } from "./components";
import { profile, projects } from "./site-data";

export default function Home() {
  return (
    <main id="main" className="section-shell">
      <section className="home-hero" aria-labelledby="about-title">
        <div className="home-portrait-column">
          <div className="home-portrait-card">
            <img src="/images/pratik.jpg" alt="Pratik Katte" />
          </div>
          <p className="portrait-note">
            <span className="portrait-note-dot" aria-hidden="true" />
            Research software · Applied AI
          </p>
        </div>
        <div className="home-intro">
          <p className="home-kicker">Pratik Katte / Research portfolio</p>
          <h1 id="about-title">Building tools for a more legible living world.</h1>
          <p className="home-lede">
            I&apos;m a graduate student at the{" "}
            <a href={profile.lab} target="_blank" rel="noreferrer">
              Corbett-Detig Lab
            </a>
            , working across evolutionary genomics, applied AI, and research
            software.
          </p>
          <div className="contact-links" aria-label="Contact links">
            <ContactLink href={`mailto:${profile.email}`} icon="@" label="Email" />
            <ContactLink href={profile.linkedin} icon="in" label="LinkedIn" />
            <ContactLink href={profile.github} icon="GH" label="GitHub" />
            <ContactLink href={profile.twitter} icon="X" label="X" />
          </div>
        </div>
      </section>

      <section className="home-signal" aria-label="Current focus">
        <span className="home-signal-label">Currently exploring</span>
        <strong>Evolution, ancestral recombination graphs, and generative AI.</strong>
        <Link href="/projects" className="home-signal-link">
          View all work <span aria-hidden="true">↗</span>
        </Link>
      </section>

      <section className="home-work-index" aria-labelledby="projects-title">
        <div className="home-section-intro">
          <p className="home-kicker">Selected work</p>
          <h2 id="projects-title">Research tools built to be used.</h2>
          <p>
            From genomic visualization to public-health surveillance and clinical
            AI, each project connects a difficult research question to a usable
            interface.
          </p>
        </div>
        <div className="home-project-list">
          {projects.map((project) => (
            <a className="home-project-row" key={project.slug} href={`#${project.slug}`}>
              <span className="home-project-number" aria-hidden="true">
                {String(projects.indexOf(project) + 1).padStart(2, "0")}
              </span>
              <span>
                <strong>{project.title}</strong>
                <small>{project.eyebrow}</small>
              </span>
              <span className="home-project-arrow" aria-hidden="true">↗</span>
            </a>
          ))}
        </div>
      </section>

      <hr />
      <section className="home-project-details" aria-label="Project details">
        <div className="home-detail-heading">
          <p className="home-kicker">Project notes</p>
          <h2>What the work does</h2>
        </div>
        {projects.map((project) => (
          <div key={project.slug}>
            <ProjectSection project={project} />
            <hr />
          </div>
        ))}
      </section>
    </main>
  );
}
