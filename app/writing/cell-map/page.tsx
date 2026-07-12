import type { Metadata } from "next";
import Link from "next/link";
import { ExternalLink } from "../../components";

export const metadata: Metadata = {
  title: "CellMap: Making Biology Feel Like a Place",
  description:
    "A project note on CellMap and the idea of making biology explorable from the inside.",
};

export default function CellMapArticle() {
  return (
    <main id="main" className="section-shell article-shell">
      <article className="writing-article">
        <header className="article-header">
          <p className="article-kicker">CellMap / Project notes</p>
          <h1>CellMap: Making Biology Feel Like a Place</h1>
          <p className="article-dek">
            Why I built an interactive, explorable world for understanding cells
            from the inside.
          </p>
          <p className="article-meta">July 2026 · Scientific visualization</p>
        </header>

        <div className="article-body">
          <p>
            Biology is usually handed to us as a diagram. A tidy cross-section,
            a few arrows, and a long list of labels. That format is useful, but
            it can also make a cell feel strangely lifeless. Cells are not
            lists. They are crowded, changing places, and constantly responding
            to what is happening around them.
          </p>

          <p>
            Messages are being copied. Molecular machines are assembling. Walls
            are sensing the outside world. A cell can swim, divide, hide, fight,
            cooperate, or wait for better conditions. I started CellMap because I
            wanted biology to feel less like something you only look at and more
            like a place you can visit.
          </p>

          <h2>Start with one cell</h2>

          <p>
            CellMap starts with <i>Escherichia coli</i>, one of the most studied
            organisms on Earth. You can move around its envelope, go inside,
            meet the chromosome and ribosomes, and follow the basic path from a
            gene to a protein. The point is not to show every atom or pretend
            that a visual model is a perfect simulation. The point is to give
            the important ideas somewhere to live.
          </p>

          <p>
            Once biology has a place, you can start asking better questions. What
            happens if an inducer is added? What changes when a gene is removed?
            How does a drug meet the cell wall? What happens when the cell&apos;s
            history changes? These questions are much more interesting than
            simply asking someone to identify a labeled part.
          </p>

          <blockquote>
            CellMap is an attempt to make invisible life feel navigable.
          </blockquote>

          <h2>Every new cell should teach a new idea</h2>

          <p>
            The long-term vision is not to build a collection of differently
            shaped cells. Each new organism should earn its place by showing a
            different way to be alive. <i>Bacillus subtilis</i> can show how a
            cell transforms itself into a durable spore when food runs out.
            Caulobacter can show how one division creates two cells with very
            different futures. A minimal cell can help us ask how little life
            can get away with.
          </p>

          <p>
            A cyanobacterium opens another door. Inside its folded membranes,
            captured light moves electrons, pumps protons, and helps pull carbon
            from the air. That is a direct path from bacterial life to
            chloroplasts, plants, and a planet changed by oxygen. The shape of
            the cell matters, but the biological idea behind it matters even
            more.
          </p>

          <h2>Then let the viruses in</h2>

          <p>
            Viruses make the world more complicated in a useful way. They are
            not just smaller cells that float around waiting to be labeled. They
            are relationships and processes. A T4 phage gives us a mechanical
            story: land, grip, contract, inject. Lambda gives us a decision
            story: reproduce immediately or quietly become part of the host
            chromosome. MS2 gives us a minimal assembly story, with RNA and coat
            proteins arranging themselves into a compact shell.
          </p>

          <h2>From looking to asking</h2>

          <p>
            That shift is the part of CellMap I care about most. A model viewer
            shows you what exists. An explorable world lets you compare, move
            through time, change a condition, and watch a system respond. It
            gives a curious person a way to arrive without specialist vocabulary
            and leave with a better intuition for how life works.
          </p>

          <p>
            There is still a lot to build. Eventually, I want CellMap to reach
            human cells, but not as one generic &quot;human cell.&quot; A lung cell meets
            an airborne virus. A macrophage hunts bacteria. A neuron carries an
            electrical signal across an impossible distance. The goal is to
            arrive at that complexity with the right language already in place:
            membranes, energy, infection, decisions, and time.
          </p>

          <p>
            The first door is already open. You can visit CellMap, explore the
            current <i>E. coli</i> world, and read the longer vision behind it.
          </p>
        </div>

        <footer className="article-footer">
          <ExternalLink href="https://cell-map.com/vision">
            Read the CellMap vision ↗
          </ExternalLink>
          <Link href="/writing">Back to writing</Link>
        </footer>
      </article>
    </main>
  );
}
