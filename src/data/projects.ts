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
    slug: "crab-code",
    name: "crab-code",
    tagline: "A Claude Code–class coding agent, forged in Rust on the Mentra runtime.",
    longDescription:
      "Crab Code is a terminal coding assistant with the same instincts as Claude Code, written in Rust on top of Mentra. It supports Anthropic, OpenAI, Gemini, and OpenRouter, ships an interactive REPL and TUI, and keeps session and tool state across runs.",
    repoUrl: "https://github.com/oops-rs/crab-code",
    status: "private",
    primaryColor: "#ff5a5f",
    secondaryColor: "#ff9aa2",
    accentColor: "#ffd9dc",
    motif: "Red shell, sharp pincers",
    orbitLabel: "A coding agent at terminal speed",
    commands: ["cargo install --path cli", "crab-code", "crab-code tui"],
    capabilities: ["Interactive REPL and TUI", "Multi-provider (Anthropic, OpenAI, Gemini, OpenRouter)", "Session and tool inspection"]
  },
  {
    slug: "fuli",
    name: "fuli",
    tagline: "A Rust-native memory core for terminal coding agents.",
    longDescription:
      "Fuli is a typed memory system for terminal coding agents, usable as an embeddable library, an operator CLI, or a daemon with an MCP server for clients like Codex and Claude Code. It stores episodic, semantic, procedural, and working memories through a store-agnostic engine with SQLite persistence and bounded recall.",
    repoUrl: "https://github.com/oops-rs/fuli",
    status: "private",
    primaryColor: "#2cc7a0",
    secondaryColor: "#ffd166",
    accentColor: "#d0f5e8",
    motif: "Lantern archive of quiet recall",
    orbitLabel: "Gives coding agents a memory",
    commands: ["fuli daemon", "fuli remember <fact>", "fuli recall 'token'"],
    capabilities: [
      "Typed memory: episodic, semantic, procedural, working",
      "MCP server for external clients",
      "SQLite-backed bounded recall"
    ]
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
    slug: "oronyx",
    name: "oronyx",
    tagline: "A developer-first clipboard engine with a durable local history.",
    longDescription:
      "Oronyx turns clipboard activity into a persistent local log with a terminal-first workflow for search, pinning, and scripting. The `oron` CLI talks to a background `orond` daemon backed by `oronyx-core` and a local store, so clipboard history outlives OS state and can be driven from the shell.",
    repoUrl: "https://github.com/oops-rs/oronyx",
    status: "private",
    primaryColor: "#8a5cf6",
    secondaryColor: "#4cc9f0",
    accentColor: "#e8dfff",
    motif: "Obsidian archive of fleeting things",
    orbitLabel: "Remembers what you copied",
    commands: ["oron search 'token'", "oron pin <id>", "oron copy <id>"],
    capabilities: ["Daemon-backed clipboard history", "Dashboard picker with shell insertion", "Scriptable CLI workflows"]
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
    slug: "numi",
    name: "numi",
    tagline: "Deterministic code generation for Apple asset and string resources.",
    longDescription:
      "Numi is a fast Rust CLI that turns Xcode asset catalogs, localization files, and file lists into generated accessors using built-in or custom Minijinja templates. It's designed for check-in-the-output workflows: generate locally, verify in CI with `numi check`, and orchestrate multi-package repos through `numi.toml`.",
    repoUrl: "https://github.com/oops-rs/numi",
    status: "public",
    primaryColor: "#6aa9ff",
    secondaryColor: "#a47bff",
    accentColor: "#d9e8ff",
    motif: "Typewriter of Apple artifacts",
    orbitLabel: "Turns resources into typed code",
    commands: ["cargo install numi", "numi init", "numi generate"],
    capabilities: ["Asset and localization codegen", "Minijinja custom templates", "CI-verifiable with `numi check`"]
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
