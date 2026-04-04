export type Project = {
  slug: string;
  name: string;
  tagline: string;
  longDescription: string;
  repoUrl: string;
  status: "public" | "private" | "in-progress";
  primaryColor: string;
  secondaryColor: string;
  accentColor: string;
  motif: string;
  orbitLabel: string;
  commands: string[];
  capabilities: string[];
};

export const projects: Project[] = [
  {
    slug: "grapha",
    name: "grapha",
    tagline: "Compiler-fed code intelligence with graph nerves and search fangs.",
    longDescription:
      "Grapha turns source code into a traversable graph so agents can reason over real structure instead of fog. It reads compiler truth where possible, layers richer syntax understanding on top, and exposes search, impact, dataflow, and MCP tooling.",
    repoUrl: "https://github.com/oops-rs/grapha",
    status: "public",
    primaryColor: "#ff6b57",
    secondaryColor: "#f8b630",
    accentColor: "#ffe8be",
    motif: "Volcanic observatory",
    orbitLabel: "Sees the shape of code",
    commands: ["grapha index .", "grapha symbol context RoomPage", "grapha serve --mcp --watch"],
    capabilities: ["Symbol graph extraction", "Impact analysis", "MCP server for coding agents"]
  },
  {
    slug: "langcodec",
    name: "langcodec",
    tagline: "Localization alchemy for strings that refuse to stay in one shape.",
    longDescription:
      "Langcodec is a Rust-native toolkit for real localization workflows. It converts, normalizes, inspects, translates, annotates, and syncs across Apple, Android, tabular, and provider-backed pipelines without treating i18n as an afterthought.",
    repoUrl: "https://github.com/oops-rs/langcodec",
    status: "public",
    primaryColor: "#f154c1",
    secondaryColor: "#ff8e3c",
    accentColor: "#ffe0f3",
    motif: "Choir of translated sparks",
    orbitLabel: "Teaches words new forms",
    commands: [
      "langcodec convert -i Localizable.xcstrings -o Localizable.xliff",
      "langcodec normalize -i 'locales/**/*.{strings,xml,xcstrings}' --check",
      "langcodec translate --provider openai --model gpt-5.4"
    ],
    capabilities: ["Format conversion", "Normalization for CI", "AI-assisted translate and annotate"]
  },
  {
    slug: "mentra",
    name: "mentra",
    tagline: "An agent runtime for systems that want memory, tools, and momentum.",
    longDescription:
      "Mentra is the runtime substrate for tool-using LLM applications in Rust. It provides provider abstraction, persistent agent state, policies, background work, teams, memory operations, and host integration points without forcing a toy architecture.",
    repoUrl: "https://github.com/oops-rs/mentra",
    status: "public",
    primaryColor: "#5d7cff",
    secondaryColor: "#41d9b5",
    accentColor: "#dce5ff",
    motif: "Cathedral of runtime echoes",
    orbitLabel: "Keeps agents alive between turns",
    commands: [
      "cargo run -p mentra-examples --example quickstart -- 'hello'",
      "cargo run -p mentra-examples --example chat",
      "Runtime::builder().with_provider(...)"
    ],
    capabilities: ["Persistent runtime state", "Tool execution primitives", "Provider abstraction"]
  },
  {
    slug: "qlipoth",
    name: "qlipoth",
    tagline: "A permission-aware sandbox that watches commands like a luminous judge.",
    longDescription:
      "Qlipoth wraps commands and interactive agents with explicit file, exec, and network policy on macOS. It offers audit logs, mediated gate execution, presets for common toolchains, and a stricter path for agentic runtime isolation.",
    repoUrl: "https://github.com/oops-rs/qlipoth",
    status: "private",
    primaryColor: "#80f27e",
    secondaryColor: "#1ab8b2",
    accentColor: "#dfffe2",
    motif: "Garden of glowing boundaries",
    orbitLabel: "Lets tools touch only what they should",
    commands: ["qlipoth run --preset rust -- cargo test", "qlipoth wrap -- /bin/sh", "qlipoth gate --preset claude -- claude"],
    capabilities: ["Sandboxed command execution", "Policy presets", "Interactive gate mediation"]
  },
  {
    slug: "xcassets",
    name: "xcassets",
    tagline: "A small precise blade for parsing Xcode asset catalogs.",
    longDescription:
      "xcassets is a focused Rust library for understanding Apple asset catalogs without dragging app-specific assumptions into the parser. It exists because infrastructure gets better when humble tools are sharp.",
    repoUrl: "https://github.com/oops-rs/xcassets",
    status: "public",
    primaryColor: "#f7eb5a",
    secondaryColor: "#ff9e68",
    accentColor: "#fff5cb",
    motif: "Pocket prism",
    orbitLabel: "Reads the hidden anatomy of assets",
    commands: ["cargo add xcassets", "use xcassets::parser", "cargo test -p xcassets"],
    capabilities: ["Asset catalog parsing", "Rust-first API", "Foundation for asset tooling"]
  },
  {
    slug: "tap",
    name: "homebrew tap",
    tagline: "A little launch rail so the tools arrive with one human-sized command.",
    longDescription:
      "The oops-rs Homebrew tap makes the public CLI tools easy to install and keep current. It is quiet infrastructure, which is to say it matters a lot.",
    repoUrl: "https://github.com/oops-rs/homebrew-tap",
    status: "public",
    primaryColor: "#ffa44f",
    secondaryColor: "#ff5d5d",
    accentColor: "#ffe3c0",
    motif: "Copper launch rail",
    orbitLabel: "Delivers tools to your machine",
    commands: ["brew tap oops-rs/tap", "brew install grapha", "brew install langcodec-cli"],
    capabilities: ["Homebrew distribution", "Release wiring", "Fast installation path"]
  }
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}
