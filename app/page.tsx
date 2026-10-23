import Link from "next/link";
import { ContactLink, ExternalLink } from "./components";
import { profile, projects, reading } from "./site-data";

export default function Home() {
  return (
    <main id="main" tabIndex={-1} className="section-shell home">
      <section className="home-intro" aria-labelledby="about-title">
        <div className="intro-copy">
          <h1 id="about-title">Pratik Katte</h1>
          <p className="intro-statement">I study evolutionary genomics and build research software.</p>
          <p className="intro-affiliation">
            Graduate student at the <a href={profile.lab} target="_blank" rel="noreferrer">Corbett-Detig Lab</a>.
          </p>

        </div>
        <img className="intro-portrait" src="/images/pratik.jpg" alt="Pratik Katte" width="112" height="136" />
        <div className="intro-bio">
          <p>My work spans evolutionary genomics, generative AI, and scientific visualization. I’m interested in building generative models for biological inference and making complex biological data easier to explore and use.</p>
          <p>Before my current research, I worked on clinical AI and thermal imaging tools at Niramai. I’ve also explored scientific curation with LLMs, creative coding, and a recycling startup.</p>
          <div className="contact-links" aria-label="Contact links">
            <ContactLink href={`mailto:${profile.email}`} icon="gmail" label="Email" />
            <ContactLink href={profile.github} icon="github" label="GitHub" />
            <ContactLink href={profile.linkedin} icon="linkedin" label="LinkedIn" />
            <ContactLink href={profile.scholar} icon="scholar" label="Google Scholar" />
          </div>
        </div>
      </section>

      <section aria-label="Projects">
        <ul className="home-projects">
          {projects.map((project) => (
            <li key={project.slug}>
              <article className="home-project" aria-labelledby={`${project.slug}-title`}>
                <h2 id={`${project.slug}-title`}>
                  <Link href={`/projects#${project.slug}`}>{project.title}</Link>
                  {" - "}
                  <span className="home-project-summary">{project.summary}</span>
                </h2>
                <div className="project-links" aria-label={`${project.title} links`}>
                  {project.links.map((link) => (
                    <ExternalLink key={link.href} href={link.href}>
                      {link.label} <span aria-hidden="true">↗</span>
                    </ExternalLink>
                  ))}
                </div>
              </article>
            </li>
          ))}
        </ul>
      </section>

      <section className="reading-section" aria-labelledby="reading-title">
        <aside className="reading-notes" aria-labelledby="reading-title">
          <h2 id="reading-title">On my reading desk</h2>
          <p className="reading-label">Currently working through</p>
          <h3><Link href={reading.currently.href}>{reading.currently.title}</Link></h3>
          <p>{reading.currently.description}</p>
          <ul className="book-list">
            {reading.books.map((book) => (
              <li key={book.title}>
                {book.href ? <ExternalLink href={book.href}>{book.title} ↗</ExternalLink> : <span>{book.title}</span>}
                <small>{book.description}</small>
              </li>
            ))}
          </ul>
        </aside>
      </section>
    </main>
  );
}
