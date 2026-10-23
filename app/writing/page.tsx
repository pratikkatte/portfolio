import type { Metadata } from "next";
import { ExternalLink } from "../components";
import { writing } from "../site-data";

export const metadata: Metadata = {
  title: "Writing",
  description:
    "Writing by Pratik Katte on ancestral recombination graphs, scientific AI, health systems, and clinical tools.",
};

export default function WritingPage() {
  return (
    <main id="main" tabIndex={-1} className="section-shell">
      <section className="page-heading">
        <h1>Writing</h1>
        <p>Notes on genomics, applied AI, healthcare, and infrastructure.</p>
      </section>
      <ul className="writing-list">
        {writing.map((post) => (
          <li className="writing-item" id={slugify(post.title)} key={post.title}>
            {post.href === "/writing#wepp" ? <span id="wepp" /> : null}
            {post.image ? <img className="writing-image" src={post.image} alt="" /> : null}
            <h2><ExternalLink href={post.href}>{post.title}</ExternalLink></h2>
            <p>{post.summary}</p>
          </li>
        ))}
      </ul>
    </main>
  );
}

function slugify(value: string) {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}
