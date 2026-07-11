import { ProjectSection } from "./components";
import { profile, projects } from "./site-data";

export default function Home() {
  return (
    <main id="main" className="section-shell">
      <section className="about" aria-labelledby="about-title">
        <img className="about-image" src="/images/pratik.jpg" alt="Pratik Katte" />
        <div className="about-copy">
          <h1 id="about-title">{profile.name}</h1>
          <p className="lead">
            <strong>
              Graduate Student @ {" "}
              <a href={profile.lab} target="_blank" rel="noreferrer">
                Corbett-Detig Lab
              </a>
            </strong>
            <br />
            Interested in Evolution and Generative AI
            <br />
            <a href={`mailto:${profile.email}`}>Email</a>. {" "}
            <a href={profile.linkedin} target="_blank" rel="noreferrer">
              LinkedIn
            </a>. {" "}
            <a href={profile.github} target="_blank" rel="noreferrer">
              Github
            </a>. {" "}
            <a href={profile.twitter} target="_blank" rel="noreferrer">
              Twitter
            </a>.
          </p>
        </div>
      </section>

      <section className="project-index" aria-labelledby="projects-title">
        <h2 id="projects-title">Projects</h2>
        <ul className="project-index-list">
          {projects.map((project) => (
            <li key={project.slug}>
              <a href={`#${project.slug}`}>{project.title}</a>
            </li>
          ))}
        </ul>
      </section>

      <hr />
      <section aria-label="Project details">
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
