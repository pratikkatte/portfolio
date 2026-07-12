export const profile = {
  name: "Pratik Katte",
  role: "Graduate student at the Corbett-Detig Lab",
  focus: "Evolutionary genomics, applied AI, and research tooling",
  email: "pratikkatte7@gmail.com",
  github: "https://github.com/pratikkatte",
  linkedin: "https://linkedin.com/in/pratikkatte",
  twitter: "https://twitter.com/pratik_katte",
  lab: "https://corbett-lab.github.io/",
  domain: "https://pratikkatte.com",
  resume: "/papers/PratikKatteResume.pdf",
};

export type Project = {
  slug: string;
  title: string;
  eyebrow: string;
  summary: string;
  impact: string;
  details: string[];
  tags: string[];
  image?: string;
  imageAlt?: string;
  gallery?: Array<{ src: string; alt: string }>;
  links: Array<{ label: string; href: string }>;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    slug: "lorax",
    title: "Lorax",
    eyebrow: "Evolutionary genomics",
    summary:
      "Interactive exploration of biobank-scale ancestral recombination graphs across the genome.",
    impact:
      "Makes local genealogy, coalescent time, variants, and sample metadata inspectable in one research interface.",
    details: [
      "Lorax helps researchers scroll across the genome and watch local genealogies change as recombination reshuffles ancestry.",
      "The interface connects trees with branch length, variants, population labels, cohorts, and custom metadata so hidden ancestry patterns are easier to spot.",
    ],
    tags: ["ARGs", "Genomics", "Visualization", "Research UX"],
    image:
      "https://raw.githubusercontent.com/pratikkatte/lorax/main/docs/images/lorax-demo-2.gif",
    imageAlt: "Animated Lorax ancestral recombination graph demo",
    links: [
      { label: "Website", href: "https://lorax.ucsc.edu/" },
      { label: "GitHub", href: "https://github.com/pratikkatte/lorax" },
      {
        label: "Paper",
        href: "https://academic.oup.com/bioinformatics/advance-article/doi/10.1093/bioinformatics/btag458/8721294",
      },
    ],
    featured: true,
  },
  {
    slug: "wepp",
    title: "WEPP",
    eyebrow: "Public health genomics",
    summary:
      "Wastewater-based epidemiology using phylogenetic placements for pathogen surveillance.",
    impact:
      "Moves wastewater analysis beyond lineage summaries toward haplotype-level signals and unexplained mutations.",
    details: [
      "WEPP places wastewater sequencing reads onto mutation-annotated phylogenies, infers likely haplotypes, and estimates their proportions.",
      "The workflow is pathogen-aware but not limited to one pathogen, with dashboard support for tree, haplotype, lineage, and read-level interpretation.",
      "Unaccounted alleles highlight mutations that the inferred haplotypes do not explain, giving teams a useful early clue for emerging variants.",
    ],
    tags: ["Wastewater", "Phylogenetics", "Dashboards", "Pathogen surveillance"],
    image: "/images/wepp.png",
    imageAlt: "WEPP dashboard preview",
    links: [
      { label: "Website", href: "https://turakhia.ucsd.edu/WEPP/" },
      { label: "GitHub", href: "https://github.com/TurakhiaLab/WEPP/" },
      {
        label: "Paper",
        href: "https://journals.plos.org/ploscompbiol/article?id=10.1371/journal.pcbi.1014124",
      },
    ],
    featured: true,
  },
  {
    slug: "cellmap",
    title: "CellMap",
    eyebrow: "Scientific visualization",
    summary:
      "An immersive, E. coli-inspired exploration of a Gram-negative bacterial cell.",
    impact:
      "Turns cellular structure into an approachable interactive experience for exploring biology on the web.",
    details: [
      "CellMap invites visitors inside a bacterial cell through a visual, web-based experience focused on the architecture of Gram-negative bacteria.",
      "The project combines scientific storytelling with an immersive interface to make cellular structure easier to explore and remember.",
    ],
    tags: ["Cell biology", "E. coli", "Scientific visualization", "Interactive web"],
    links: [{ label: "Website", href: "https://cell-map.com/" }],
    featured: true,
  },
  {
    slug: "genomic-piano",
    title: "Genomic Piano",
    eyebrow: "Genomics + creative coding",
    summary:
      "An interactive genomic instrument that turns DNA, RNA, and protein sequences into browser-generated music.",
    impact:
      "Makes sequence translation tangible by mapping amino acids to piano keys and nucleotide modifiers to sound.",
    details: [
      "Genomic Piano lets visitors paste biological sequences and hear how nucleotides, codons, and amino acids become a playable composition.",
      "The project combines genomics education, browser audio, and interactive design to make molecular information feel immediate and memorable.",
    ],
    tags: ["Genomics", "Music", "Interactive web", "Education"],
    links: [{ label: "Website", href: "https://music.pratikkatte.com/" }],
    featured: true,
  },
  {
    slug: "structhunt",
    title: "StructHunt",
    eyebrow: "LLMs for scientific curation",
    summary:
      "An LLM-powered workflow for finding biomolecular structure evidence in new preprints.",
    impact:
      "Won first prize at the 2023 QBI Hackathon at UCSF after a 36-hour prototype sprint.",
    details: [
      "StructHunt tracks bioRxiv and medRxiv papers that describe integrative biomolecular structures and surfaces them to the RCSB Protein Data Bank workflow.",
      "The prototype used embeddings, retrieval, LLM summarization, Google Docs integration, email notifications, and AWS hosting.",
    ],
    tags: ["LLMs", "Bioinformatics", "Hackathon winner", "Scientific data"],
    image: "/images/structhunt.png",
    imageAlt: "StructHunt research workflow preview",
    links: [
      { label: "GitHub", href: "https://github.com/aozalevsky/structhunt" },
      { label: "QBI Hackathon", href: "https://qbi.ucsf.edu/qbi-hackathon-2023" },
    ],
    featured: true,
  },
  {
    slug: "xraysetu",
    title: "XraySetu",
    eyebrow: "Clinical AI",
    summary:
      "WhatsApp-based chest X-ray interpretation support for doctors during the COVID-19 crisis.",
    impact:
      "Helped doctors in resource-limited settings receive AI-generated reports from X-ray images sent over WhatsApp.",
    details: [
      "XraySetu was a collaboration between Niramai Health Analytix, the Indian Institute of Science, and ARTPARK.",
      "The deep learning model produced reports for COVID-19 and other lung abnormalities, with interpretable markings to support clinical decisions.",
      "The work received broad press coverage across Indian national media during the Delta wave.",
    ],
    tags: ["Medical AI", "WhatsApp workflow", "Computer vision", "COVID-19"],
    image: "/images/xraysetu.jpg",
    imageAlt: "XraySetu product image",
    links: [
      { label: "Abstract", href: "/papers/XraySetu_Abstract.pdf" },
      {
        label: "NDTV coverage",
        href: "https://www.ndtv.com/business/a-platform-for-early-covid-detection-over-whatsapp-know-how-it-works-2454475",
      },
    ],
    gallery: [
      { src: "/images/xraysetureport_1.jpg", alt: "XraySetu generated report" },
      { src: "/images/xraysetureport_2.jpg", alt: "XraySetu WhatsApp report" },
    ],
  },
  {
    slug: "niramai-fever-test",
    title: "Niramai Fever Test",
    eyebrow: "Applied computer vision",
    summary:
      "AI-assisted thermal screening for COVID symptoms, mask detection, and community screening workflows.",
    impact:
      "Deployed across more than 100 locations and used for more than 1 million screenings.",
    details: [
      "The system combined thermal camera input with lightweight deep learning for face detection, mask detection, and fever-screening support.",
      "It was deployed in settings such as railway stations, corporate tech parks, and banks.",
    ],
    tags: ["Thermal imaging", "Deployment", "Screening", "Computer vision"],
    image: "/images/NFT.jpg",
    imageAlt: "Niramai Fever Test installation",
    links: [
      { label: "Abstract", href: "/papers/NFT_Abstract.pdf" },
      { label: "More information", href: "https://www.niramai.com/fevertest/" },
    ],
  },
  {
    slug: "thermal-capture-tool",
    title: "Niramai Thermal Capture Tool",
    eyebrow: "Clinical workflow software",
    summary:
      "A desktop tool that guides technicians through high-quality thermal breast image capture.",
    impact:
      "Improved consistency and protocol compliance before images entered downstream AI screening.",
    details: [
      "The tool helped hospital technicians capture high-precision thermal breast images and upload them to the Thermalytix platform.",
      "Deep-learning and image-processing checks caught common capture issues early, including framing, alignment, and protocol deviations.",
    ],
    tags: ["Desktop app", "Quality control", "Thermal imaging", "Healthcare AI"],
    image: "/images/NTCT.jpg",
    imageAlt: "Niramai Thermal Capture Tool preview",
    links: [{ label: "Niramai", href: "https://www.niramai.com/" }],
  },
  {
    slug: "rewind",
    title: "Rewind",
    eyebrow: "Startup",
    summary:
      "A venture attempt to streamline household recycling by connecting people with local waste workers and recyclers.",
    impact:
      "Early startup experience in marketplaces, logistics, and the waste-management problem space.",
    details: [
      "Founded in 2019 with Venkat-sai to explore pickup-based recycling for plastics, cardboard, electronics, furniture, and other household waste streams.",
      "The company did not continue, but it shaped a pragmatic view of operations-heavy climate and civic infrastructure ideas.",
    ],
    tags: ["Startup", "Waste management", "Marketplace", "Operations"],
    links: [
      {
        label: "Co-founder",
        href: "https://www.linkedin.com/in/venkat-sai-s-97708b8a/",
      },
    ],
  },
];

export const publications = [
  {
    title: "WEPP: Phylogenetic placement achieves near-haplotype resolution in wastewater-based epidemiology",
    venue: "PLOS Computational Biology 22(3)",
    year: "2026",
    authors: "Pranav Gangwar, Pratik Katte, Manu Bhat, Yatish Turakhia",
    note: "e1014124",
    link: "https://journals.plos.org/ploscompbiol/article?id=10.1371/journal.pcbi.1014124",
  },
  {
    title: "Interactive exploration of biobank-scale ancestral recombination graphs with Lorax",
    venue: "Bioinformatics",
    year: "2026",
    authors: "Pratik Katte, Russell Corbett-Detig",
    note: "Advance article, btag458",
    link: "https://academic.oup.com/bioinformatics/advance-article/doi/10.1093/bioinformatics/btag458/8721294",
  },
  {
    title: "Automated Thermal Screening for COVID-19 using Machine Learning",
    venue: "AIIIMA, MICCAI Workshop",
    year: "2022",
    authors: "Pratik K., SivaTeja K., Himanshu M., Geeta M.",
    note: "Accepted",
  },
  {
    title:
      "Diagnosing COVID-19 From Images of Chest X-rays Communicated Via WhatsApp",
    venue: "UKIO Congress",
    year: "2022",
    authors: "Sabyasachi S., Pratik K., et al.",
    note: "Abstract",
  },
  {
    title: "Restoration of Images Using Only Noisy Data",
    venue: "International Journal of Research and Analytical Reviews",
    year: "2019",
    authors: "Vivek Patil, Pratik Katte, Abhay Patil",
    note: "IJRAR 6.1",
  },
];

export const talks = [
  {
    title: "Machine Learning for COVID-19 Detection",
    venue: "Data Science Conference Europe",
    year: "2021",
    href: "https://www.youtube.com/watch?v=4JpmTIT8d1Y&list=PLmT5mor0pdnoueEUCtbOVsIrq4MB93N9q&index=51",
  },
  {
    title: "Niramai Fever Test - Automated Screening for COVID Symptoms",
    venue: "Wolfram Technology Conference",
    year: "2021",
    href: "https://www.youtube.com/watch?v=zseAn2shRVc",
  },
];

export const writing = [
  {
    title: "CellMap: Making Biology Feel Like a Place",
    summary:
      "Why I built an interactive, explorable world for understanding cells from the inside.",
    topic: "Scientific visualization",
    href: "/writing/cell-map",
  },
  {
    title: "Ancestral Recombination Graphs",
    summary:
      "An overview of ARGs and why they matter for understanding human evolution and health.",
    topic: "Evolutionary genomics",
    href: "/writing#ancestral-recombination-graphs",
    image: "/images/args_image.png",
  },
  {
    title: "Generative Flow Networks",
    summary:
      "Notes on GFlowNets and how they can be used for combinatorial optimization problems.",
    topic: "Machine learning",
    href: "/writing#generative-flow-networks",
    image: "/images/phet_system.png",
  },
  {
    title: "WEPP: Wastewater Epidemiology using Phylogenetic Placement",
    summary:
      "Why wastewater can provide early public-health signals, and how WEPP resolves haplotypes.",
    topic: "Public health genomics",
    href: "/writing#wepp",
    image: "/images/wepp-workflow.png",
  },
  {
    title: "StructHunt",
    summary:
      "A hackathon-winning tool for surfacing biomolecular structures from new preprints.",
    topic: "Scientific AI",
    href: "/writing#structhunt",
    image: "/images/structhunt_team.jpg",
  },
  {
    title: "XraySetu: AI Assistance for COVID-19 Diagnosis",
    summary:
      "How AI helped support doctors facing a shortage of radiologists during the pandemic.",
    topic: "Clinical AI",
    href: "https://pratikkatte.substack.com/p/xraysetu",
  },
  {
    title: "Breast Cancer Detection in Early Stage",
    summary:
      "How Niramai approaches early-stage breast cancer detection with thermal AI.",
    topic: "Healthcare",
    href: "https://pratikkatte.substack.com/p/breast-cancer",
  },
  {
    title: "Healing the Broken Health System in India",
    summary:
      "Thoughts on digitization, access, and building more resilient care infrastructure.",
    topic: "Health systems",
    href: "https://pratikkatte.substack.com/p/healing-the-broken-health-system",
  },
  {
    title: "Lung Diseases and Diagnostics",
    summary: "A short reflection on whether lung function testing needs better tools.",
    topic: "Diagnostics",
    href: "https://pratikkatte.substack.com/p/lung-function-test/comments",
  },
  {
    title: "Waste of a Nation",
    summary: "A book summary on garbage, growth, and waste systems in India.",
    topic: "Book notes",
    href: "https://pratikkatte.substack.com/p/book-summary-waste-of-nation",
  },
];

export const reading = {
  currently: {
    title: "Ancestral Recombination Graphs",
    description:
      "Working through how local genealogies change across the genome, and how to make that structure easier to see.",
    href: "/writing#ancestral-recombination-graphs",
  },
  books: [
    {
      title: "Waste of a Nation",
      description: "Book notes on garbage, growth, and waste systems in India.",
      href: "https://pratikkatte.substack.com/p/book-summary-waste-of-nation",
    },
    {
      title: "Dance to the Tune of Life",
      description: "On my reading list.",
    },
    {
      title: "The Selfish Gene",
      description: "On my reading list.",
    },
    {
      title: "The Great Mental Models",
      description: "On my reading list.",
    },
    {
      title: "Saakshi",
      description: "S. L. Bhyrappa",
    },
  ],
};

export const highlights = [
  "Biobank-scale genomic visualization",
  "Pathogen surveillance and phylogenetic placement",
  "Medical imaging systems deployed in real-world settings",
  "LLM workflows for scientific curation",
];
