import type { Metadata } from "next";
import Link from "next/link";
import type { Attributes, HTMLAttributes, ReactNode } from "react";

// React's JSX types do not yet include the browser's native MathML elements.
type MathElements = Record<
  "mrow" | "mo" | "mtable" | "mtr" | "mtd" | "mn" | "mi" | "msup" | "msub" | "mtext",
  HTMLAttributes<MathMLElement> & Attributes
>;

declare module "react" {
  // JSX intrinsic element augmentation requires React's JSX namespace.
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace JSX {
    interface IntrinsicElements extends MathElements {
      math: HTMLAttributes<MathMLElement> & { display?: "block" | "inline" };
    }
  }
}

export const metadata: Metadata = {
  title: "Permutation Symmetry in Graphs: Why Node Ordering Shouldn’t Matter",
  description:
    "Understanding permutation invariance, equivariance, and automorphisms in graphs, phylogenetic trees, and ancestral recombination graphs.",
};

function Equation({ children, label }: { children: ReactNode; label: string }) {
  return <div className="graph-equation"><math display="block" aria-label={label}>{children}</math></div>;
}

function Matrix({ rows }: { rows: number[][] }) {
  return <mrow><mo>[</mo><mtable>{rows.map((row, i) => <mtr key={i}>{row.map((value, j) => <mtd key={j}><mn>{value}</mn></mtd>)}</mtr>)}</mtable><mo>]</mo></mrow>;
}

function PermutedAdjacency() {
  return <mrow><mi>P</mi><mi>A</mi><msup><mi>P</mi><mi>T</mi></msup></mrow>;
}

export default function PermutationSymmetryArticle() {
  return (
    <main id="main" tabIndex={-1} className="section-shell article-shell">
      <article className="writing-article">
        <header className="article-header">
          <p className="article-kicker">Graph Theory</p>
          <h1>Permutation Symmetry in Graphs: Why Node Ordering Shouldn’t Matter</h1>
          <p className="article-dek">Graphs are fundamentally different from sequences. In a sequence, ordering matters. In a graph, nodes have no natural ordering; what matters is how they are connected.</p>
          <p className="article-meta">November 2026 · Graph Theory</p>
        </header>
        <div className="article-body">
          <p>This introduces an important concept in graph theory and machine learning: <strong>permutation symmetry</strong>.</p>

          <h2>1. What Is a Graph Permutation?</h2>
          <p>Consider a simple graph:</p>
          <Equation label="A connected to B connected to C"><mtext>A—B—C</mtext></Equation>
          <p>Its adjacency matrix is:</p>
          <Equation label="A equals the matrix with rows 0 1 0; 1 0 1; 0 1 0"><mi>A</mi><mo>=</mo><Matrix rows={[[0,1,0],[1,0,1],[0,1,0]]} /></Equation>
          <p>Now suppose we reorder the nodes from (A, B, C) to (B, C, A).</p>
          <p>We can represent this reordering using a permutation matrix:</p>
          <Equation label="P equals the matrix with rows 0 1 0; 0 0 1; 1 0 0"><mi>P</mi><mo>=</mo><Matrix rows={[[0,1,0],[0,0,1],[1,0,0]]} /></Equation>
          <p>The reordered adjacency matrix becomes:</p>
          <Equation label="A prime equals P A P transpose"><msup><mi>A</mi><mo>′</mo></msup><mo>=</mo><PermutedAdjacency /></Equation>
          <Equation label="A prime equals the matrix with rows 0 1 1; 1 0 0; 1 0 0"><msup><mi>A</mi><mo>′</mo></msup><mo>=</mo><Matrix rows={[[0,1,1],[1,0,0],[1,0,0]]} /></Equation>
          <p>Although the adjacency matrices look different, the underlying graph remains identical.</p>
          <p>The edges are still A–B and B–C.</p>
          <p><strong>A permutation changes how we represent a graph, not its connectivity.</strong></p>

          <h2>2. Permutation Invariance vs. Equivariance</h2>
          <p>When designing neural networks for graphs, we want models that respect this symmetry.</p>
          <p>Two properties become important.</p>
          <h3>Permutation Invariance</h3>
          <p>A function is permutation-invariant if its output remains unchanged regardless of node ordering.</p>
          <Equation label="f of P A P transpose equals f of A"><mi>f</mi><mo>(</mo><PermutedAdjacency /><mo>)</mo><mo>=</mo><mi>f</mi><mo>(</mo><mi>A</mi><mo>)</mo></Equation>
          <p>For example, a neural network producing a single embedding for an entire phylogenetic tree should return the same embedding regardless of how its nodes are indexed.</p>
          <h3>Permutation Equivariance</h3>
          <p>A function is permutation-equivariant if reordering its inputs produces a corresponding reordering of its outputs.</p>
          <Equation label="f of P A P transpose equals P f of A"><mi>f</mi><mo>(</mo><PermutedAdjacency /><mo>)</mo><mo>=</mo><mi>P</mi><mi>f</mi><mo>(</mo><mi>A</mi><mo>)</mo></Equation>
          <p>For example, suppose a neural network predicts a probability for each node:</p>
          <Equation label="Probabilities 0.2, 0.8, 0.5"><mo>[</mo><mn>0.2</mn><mo>,</mo><mn>0.8</mn><mo>,</mo><mn>0.5</mn><mo>]</mo></Equation>
          <p>Reordering the nodes from (A, B, C) to (C, A, B) should produce:</p>
          <Equation label="Reordered probabilities 0.5, 0.2, 0.8"><mo>[</mo><mn>0.5</mn><mo>,</mo><mn>0.2</mn><mo>,</mo><mn>0.8</mn><mo>]</mo></Equation>
          <p>The probabilities remain associated with their original nodes; only their positions change.</p>
          <p><strong>Invariance preserves the output. Equivariance preserves the correspondence between inputs and outputs.</strong></p>

          <h2>3. Graph Automorphisms</h2>
          <p>A graph automorphism is a special permutation that preserves the adjacency matrix itself:</p>
          <Equation label="P A P transpose equals A"><PermutedAdjacency /><mo>=</mo><mi>A</mi></Equation>
          <p>Consider:</p>
          <Equation label="A connected to B connected to C"><mtext>A—B—C</mtext></Equation>
          <p>Swapping A and C while keeping B fixed preserves every edge.</p>
          <p>The adjacency matrix remains unchanged because both endpoint nodes have identical structural roles.</p>
          <p>Not every permutation is an automorphism, but every automorphism is a permutation.</p>

          <h2>4. Why Does This Matter for Phylogenetic Trees?</h2>
          <p>Consider two genealogies:</p>
          <Equation label="T one equals ((A, B), (C, D))"><msub><mi>T</mi><mn>1</mn></msub><mo>=</mo><mtext>{"((A, B), (C, D))"}</mtext></Equation>
          <Equation label="T two equals ((A, C), (B, D))"><msub><mi>T</mi><mn>2</mn></msub><mo>=</mo><mtext>{"((A, C), (B, D))"}</mtext></Equation>
          <p>Both have the same unlabeled tree shape, but they represent different evolutionary relationships.</p>
          <p>A neural network should distinguish these genealogies while remaining insensitive to arbitrary node indexing.</p>
          <p>This distinction is particularly important when learning neural proposals for ancestral recombination graph (ARG) inference.</p>
          <p>A model might use:</p>
          <ul>
            <li><strong>Permutation-invariant embeddings</strong> to represent an entire genealogy.</li>
            <li><strong>Permutation-equivariant predictions</strong> to assign probabilities to branches for subtree pruning and regrafting (SPR).</li>
            <li><strong>Topology-sensitive representations</strong> to distinguish different ancestral relationships among sampled haplotypes.</li>
          </ul>
          <p>Sample identities and evolutionary relationships must be preserved even when internal node indices change.</p>

          <h2>Final Thought</h2>
          <p>The central idea is simple:</p>
          <p><strong>A graph’s representation can change without changing the graph itself.</strong></p>
          <p>Permutation symmetry allows neural networks to respect this distinction.</p>
          <p>For evolutionary genealogies, the challenge is to ignore arbitrary node ordering while retaining the biological information encoded in the topology.</p>
          <p>That is what makes permutation-aware graph representations useful for learning over phylogenetic trees and ancestral recombination graphs.</p>
        </div>
        <footer className="article-footer"><Link href="/writing">Back to writing</Link></footer>
      </article>
    </main>
  );
}
