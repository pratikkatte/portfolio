import type { Metadata } from "next";
import Link from "next/link";
import { ExternalLink } from "../../components";

export const metadata: Metadata = {
  title: "Genomic Piano: What Does DNA Sound Like?",
  description:
    "A project note on turning genomic sequences into sound and exploring whether biological patterns can become audible patterns.",
};

export default function GenomicPianoArticle() {
  return (
    <main id="main" className="section-shell article-shell">
      <article className="writing-article">
        <header className="article-header">
          <p className="article-kicker">Genomic Piano / Project notes</p>
          <h1>Genomic Piano: What Does DNA Sound Like?</h1>
          <p className="article-dek">
            A small experiment in hearing biological sequences, and a bigger
            question about whether our ears can help us notice genomic patterns.
          </p>
          <p className="article-meta">July 2026 · Genomics + sonification</p>
        </header>

        <div className="article-body">
          <p>
            Genomic data usually arrives as a wall of letters. A, C, G, and T
            repeat across a screen, sometimes for millions of positions. I work
            with these sequences every day, and even for me they can become
            abstract very quickly. We make plots, color the bases, align related
            sequences, and calculate statistics. All of that is useful. But I
            kept wondering: what if we could also listen?
          </p>

          <p>
            That question became Genomic Piano. It is a browser-based instrument
            that turns DNA, RNA, or protein sequences into music. You can paste a
            sequence, choose a tempo and an instrument, and press play. The app
            translates the biological information into a stream of notes that
            you can hear immediately.
          </p>

          <h2>What it does today</h2>

          <p>
            The main keyboard maps the 20 amino acids to piano keys. Amino acids
            with related chemical properties are placed into broad sound
            families: nonpolar residues sit in warmer lower tones, polar
            residues occupy cleaner middle tones, and charged or aromatic
            residues get more distinctive sounds. The four nucleotide letters
            also act as modifiers. A can brighten a note, C can soften it, G can
            add bass, and T can add a pulse.
          </p>

          <p>
            You can start with your own sequence or try built-in examples such
            as human insulin and a fragment of the SARS-CoV-2 spike protein.
            There are piano, synth, strings, and marimba sounds, along with tempo
            controls. Right now, the project is part instrument and part genomics
            explainer. It makes the path from nucleotides to codons to amino
            acids feel less like a diagram and more like an action.
          </p>

          <blockquote>
            The goal is not to claim that DNA contains a hidden song. The goal
            is to ask what becomes noticeable when sequence becomes sound.
          </blockquote>

          <h2>This idea already works in other fields</h2>

          <p>
            Scientists often translate information into a form our senses can
            handle. A weather map turns measurements into color. A microscope
            turns structures too small to see into images. Sonification does the
            same kind of translation with sound.
          </p>

          <p>
            NASA&apos;s Chandra team, for example, maps telescope data into audible
            frequencies. Brightness, position, and different wavelengths of
            light can control pitch, volume, or timbre. The stars are not
            literally playing those notes. The mapping gives us another way to
            move through the data, and it has also made astronomical information
            more accessible to people who are blind or have low vision. You can
            hear the examples in Chandra&apos;s{" "}
            <ExternalLink href="https://chandra.si.edu/sound/">
              Universe of Sound
            </ExternalLink>
            .
          </p>

          <p>
            Earthquake researchers do something similar. Much of a seismic
            recording is too low for human hearing, so the USGS speeds up the
            ground-motion signal and makes it audible. Differences in frequency,
            distance, and rock type can then become differences you can hear.
            Their{" "}
            <ExternalLink href="https://earthquake.usgs.gov/education/listen/">
              Listening to Earthquakes
            </ExternalLink>{" "}
            project is a good reminder that sound can be more than decoration.
            It can be another lens on structure.
          </p>

          <h2>Where I want to take it</h2>

          <p>
            The bigger vision for Genomic Piano is to move from playing one
            sequence to comparing many sequences. Imagine listening to the same
            gene across humans, chimpanzees, and other species. Conserved regions
            might return like a familiar phrase, while mutations create small
            changes in pitch or rhythm. A repeated protein motif could become a
            repeated musical pattern. A frameshift could cause the whole sound to
            change suddenly.
          </p>

          <p>
            I am especially interested in whether a useful mapping can make
            sequence similarity perceptible without first reading a score or a
            table. Could two proteins from the same family sound related? Could a
            listener notice a mutation before seeing where it happened? Could we
            layer several genomes and hear where they agree or diverge? These are
            open questions, and the answers will depend on careful mapping and
            testing, not only on making pleasant music.
          </p>

          <p>
            There are many ways to build this. Pitch could represent amino-acid
            chemistry. Rhythm could represent codon position. Instruments could
            separate genes, species, or genomic regions. Volume could show
            confidence or conservation. The interesting part is choosing rules
            that preserve something biologically meaningful while keeping the
            result understandable to a human ear.
          </p>

          <h2>A different way to pay attention</h2>

          <p>
            Genomic Piano is still an experiment. I do not see it replacing
            alignments, phylogenetic trees, or statistical analysis. I see it as
            another way into the same material: a tool for teaching, curiosity,
            and perhaps one day pattern discovery. Sometimes a new representation
            lets us ask a question we would not have asked before.
          </p>

          <p>
            For now, you can open the instrument, choose an example, and listen.
            The sequence will not reveal a secret symphony. But it may stop
            looking like a wall of letters, and that is a useful place to begin.
          </p>
        </div>

        <footer className="article-footer">
          <ExternalLink href="https://music.pratikkatte.com/">
            Play Genomic Piano ↗
          </ExternalLink>
          <Link href="/writing">Back to writing</Link>
        </footer>
      </article>
    </main>
  );
}
