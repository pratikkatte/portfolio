import type { Metadata } from "next";
import { ProjectSection } from "../components";
import { projects } from "../site-data";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Selected projects by Pratik Katte across evolutionary genomics, public-health surveillance, medical AI, and scientific tooling.",
};

export default function ProjectsPage() {
  return (
    <main id="main" className="section-shell">
      <section className="page-heading">
        <h1>Projects</h1>
        <p>Research tools, applied AI systems, and product experiments.</p>
      </section>
      <ul className="project-index-list" aria-label="Project index">
        {projects.map((project) => (
          <li key={project.slug}>
            <a href={`#${project.slug}`}>{project.title}</a>
          </li>
        ))}
      </ul>
      <hr />
      {projects.map((project) => (
        <div key={project.slug}>
          <ProjectSection project={project} />
          <hr />
        </div>
      ))}
    </main>
  );
}
