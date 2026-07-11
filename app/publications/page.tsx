import type { Metadata } from "next";
import { publications, talks } from "../site-data";

export const metadata: Metadata = {
  title: "Talks and Publications",
  description:
    "Publications, abstracts, and talks by Pratik Katte on medical AI, thermal screening, and image restoration.",
};

export default function PublicationsPage() {
  return (
    <main id="main" className="section-shell">
      <section className="page-heading">
        <h1>Publications</h1>
      </section>
      <ul className="publication-list">
        {publications.map((publication) => (
          <li className="publication-item" key={publication.title}>
            <h2>{publication.title}</h2>
            <p>
              <strong>{publication.authors}</strong>
              <br />
              {publication.venue} ({publication.year})
              {publication.note ? ` - ${publication.note}` : ""}
            </p>
          </li>
        ))}
      </ul>

      <h1 className="talks-heading">Talks</h1>
      <ul className="talk-list">
        {talks.map((talk) => (
          <li className="talk-item" key={talk.href}>
            <h3>{talk.title}</h3>
            <p>
              {talk.venue} - {talk.year} [
              <a href={talk.href} target="_blank" rel="noreferrer">
                video
              </a>
              ]
            </p>
          </li>
        ))}
      </ul>
    </main>
  );
}
