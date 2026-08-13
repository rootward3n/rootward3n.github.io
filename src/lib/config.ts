export const siteConfig = {
  name: "rootward3n",
  handle: "@rootward3n",
  realName: "Shravan Kubade",
  role: "IT Student",
  tagline: "Learning by building at the edge of AI, security, and software.",
  description:
    "Portfolio of rootward3n — an IT student exploring artificial intelligence, cybersecurity, and software development through hands-on projects and relentless experimentation.",
  url: "https://rootward3n.github.io/portfolio/",
  email: "digicartelecom@gmail.com",
  github: "https://github.com/rootward3n",
  instagram: "https://instagram.com/rootward3n",
  linkedin: null as string | null,
  location: "Somewhere between a terminal and a whiteboard",
  availability: "Open to opportunities",
  skillItems: ["BUILD", "BREAK", "UNDERSTAND", "IMPROVE"],
  about: {
    paragraphs: [
      "I'm an IT student who learns best by taking things apart. Whether it's an AI model, a network protocol, or a piece of software I didn't write, I want to know how it works at the layer below the abstraction.",
      "My work spans three areas that feed each other: artificial intelligence, cybersecurity, and software development. Building AI systems taught me to think in pipelines. Studying security taught me to think about failure. Writing software taught me to make both of those things actually usable.",
      "I don't claim mastery. I claim curiosity, persistence, and a growing pile of projects that prove I ship what I start.",
    ],
  },
} as const;

export type ProjectStatus = "building" | "exploring" | "shipped" | "learning";

export interface Project {
  id: string;
  name: string;
  role: string;
  status: ProjectStatus;
  description: string;
  longDescription: string[];
  technologies: string[];
  links: {
    github?: string;
    demo?: string;
  };
  featured?: boolean;
  tags: string[];
}

export const projects: Project[] = [
  {
    id: "phantom",
    name: "PHANTOM",
    role: "AI Assistant / AI Systems Project",
    status: "building",
    description:
      "An AI assistant project exploring intelligent interaction, developer tooling, extensible AI providers, memory, voice capabilities, and modular system architecture.",
    longDescription: [
      "PHANTOM is an ongoing experiment in building a developer-oriented AI assistant. Rather than a single chat interface, it is designed as a modular system: pluggable model providers, a tool-use framework, persistent memory, and voice capabilities — each explored as its own subsystem.",
      "The goal is not to ship a product, but to understand how the pieces of a real AI system fit together: routing between providers, managing context, sandboxing tool execution, and keeping everything running on modest hardware.",
    ],
    technologies: [
      "Python",
      "FastAPI",
      "AI APIs",
      "SQLite",
      "Linux",
      "TypeScript",
    ],
    links: {
      github: "https://github.com/rootward3n/phantom",
    },
    featured: true,
    tags: ["INTELLIGENCE", "MEMORY", "TOOLS", "VOICE", "PROVIDERS"],
  },
  {
    id: "portfolio",
    name: "Developer Portfolio",
    role: "Frontend Developer",
    status: "shipped",
    description:
      "A personal portfolio documenting projects, technical interests, learning progress, and experiments across AI, cybersecurity, and software development.",
    longDescription: [
      "This site is itself a project: a static-export Next.js app with a hand-rolled design system, terminal-inspired visuals, and careful attention to accessibility and performance.",
    ],
    technologies: [
      "Next.js",
      "TypeScript",
      "React",
      "Framer Motion",
      "21st.dev",
      "CSS",
    ],
    links: {
      github: "https://github.com/rootward3n/portfolio",
      demo: "https://rootward3n.github.io/portfolio/",
    },
    featured: false,
    tags: ["FRONTEND", "DESIGN SYSTEM", "STATIC EXPORT"],
  },
];

export interface InterestCategory {
  id: string;
  label: string;
  icon: "cpu" | "shield" | "code" | "terminal";
  description: string;
  items: string[];
}

export const interests: InterestCategory[] = [
  {
    id: "ai",
    label: "Artificial Intelligence",
    icon: "cpu",
    description:
      "Exploring how intelligent systems are built — from model APIs to agents and memory.",
    items: ["Generative AI", "AI Systems", "AI Agents", "Computer Vision"],
  },
  {
    id: "security",
    label: "Cybersecurity",
    icon: "shield",
    description:
      "Learning how systems fail so I can understand how to build ones that don't.",
    items: [
      "Threat Modeling",
      "Web Security",
      "Offensive Security Concepts",
      "Security Research",
    ],
  },
  {
    id: "software",
    label: "Software Development",
    icon: "code",
    description:
      "Building real things end-to-end — APIs, interfaces, and the glue between them.",
    items: [
      "Full-Stack Development",
      "Developer Tooling",
      "Real-Time Systems",
      "Software Architecture",
    ],
  },
  {
    id: "systems",
    label: "Systems & Tooling",
    icon: "terminal",
    description:
      "The foundations everything runs on: the shell, the OS, the pipeline.",
    items: ["Linux", "Bash", "Git", "Automation"],
  },
];

export interface JourneyStage {
  id: string;
  label: string;
  description: string;
  detail: string;
  tags: string[];
}

export const journeyStages: JourneyStage[] = [
  {
    id: "curious",
    label: "CURIOUS",
    description: "Started asking how things actually work under the hood.",
    detail:
      "First terminal, first questions. Curiosity about machines turned into curiosity about systems.",
    tags: ["Linux", "CLI"],
  },
  {
    id: "learning",
    label: "LEARNING",
    description:
      "Studying CS fundamentals, networking, and how software is really made.",
    detail:
      "Coursework, documentation, and a lot of reading source code I barely understood.",
    tags: ["Python", "Networking", "Data Structures"],
  },
  {
    id: "experimenting",
    label: "EXPERIMENTING",
    description:
      "Small scripts, broken prototypes, and labs that taught more than lectures.",
    detail:
      "First experiments with AI APIs, security labs, and half-finished ideas that all taught something.",
    tags: ["AI APIs", "Security Labs", "Prototyping"],
  },
  {
    id: "building",
    label: "BUILDING",
    description: "Turning experiments into real projects with real structure.",
    detail:
      "PHANTOM started here — an AI assistant project built to understand how intelligent systems are assembled.",
    tags: ["FastAPI", "TypeScript", "Architecture"],
  },
  {
    id: "breaking",
    label: "BREAKING",
    description: "Deliberately breaking things to see where and why they fail.",
    detail:
      "Security testing, edge cases, stress scenarios. Failure became the fastest teacher.",
    tags: ["Penetration Testing", "Fuzzing", "Debugging"],
  },
  {
    id: "understanding",
    label: "UNDERSTANDING",
    description:
      "Patterns start to emerge. Systems stop being magic and start being design.",
    detail:
      "Reading architecture decisions, tracing bugs to root causes, seeing the whole board.",
    tags: ["System Design", "Code Review"],
  },
  {
    id: "improving",
    label: "IMPROVING",
    description:
      "Refactoring code, process, and thinking. Every iteration gets sharper.",
    detail:
      "Better tooling, cleaner architecture, more intentional decisions across every project.",
    tags: ["Refactoring", "CI/CD", "Testing"],
  },
  {
    id: "shipping",
    label: "SHIPPING",
    description:
      "Putting work out into the world — and starting the loop again.",
    detail:
      "This portfolio, public projects, and whatever comes next. The cycle never really ends.",
    tags: ["Open Source", "Deployment"],
  },
];
