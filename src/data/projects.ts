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
    slug: "nous",
    name: "nous",
    tagline: "A knowledge backend that answers with receipts, never with vibes.",
    longDescription:
      "Nous is a source-connected, evidence-backed knowledge backend for a product's docs and code. Ask a feature-level question and an agent investigates the connected sources, answering with citations back to the original source. Docs form a shared spine, codebases stay isolated behind Grapha indices, and the canonical source of truth is only ever read, never written back.",
    repoUrl: "https://github.com/oops-rs/nous",
    status: "private",
    primaryColor: "#c9a227",
    secondaryColor: "#5b8def",
    accentColor: "#f6ecc4",
    motif: "Library where every book cites its sources",
    orbitLabel: "Knows why, and shows where",
    commands: [
      "nous source add ./docs --scope my-feature",
      "nous investigate 'how does <the feature> work' --scope my-feature",
      "nous guide"
    ],
    capabilities: ["Cited answers over docs and code", "Grapha-backed code substrate", "CLI, server, and MCP surface"]
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
    slug: "basis",
    name: "basis",
    tagline: "The minimal set everything else is built from. Your host supplies the rest.",
    longDescription:
      "Basis is an agent harness you embed. Open a workspace, mint runs from it, read one event stream, and plug your own code into the seams. The core crate sits on Mentra with a handful of utility dependencies and carries no protocol, transport, or terminal code; the host kit, durable task layer, ACP adapter, and CLI layer on top. Any OpenAI-compatible endpoint works, Ollama and LM Studio included.",
    repoUrl: "https://github.com/oops-rs/basis",
    status: "public",
    primaryColor: "#e8e4da",
    secondaryColor: "#7d8a99",
    accentColor: "#f7f5f0",
    motif: "Bare foundation stone",
    orbitLabel: "The harness under the harness",
    commands: [
      "cargo install basis-cli",
      "basis 'summarize what changed in the last three commits'",
      "basis spawn --provider ollama --model qwen3 'explain the module layout'"
    ],
    capabilities: ["Embeddable agent harness library", "Durable runs with resumable handles", "ACP server and optional MCP"]
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
    slug: "ena",
    name: "ena",
    tagline: "Describe the change; a small crew of agents hands back a ready-to-merge branch.",
    longDescription:
      "Ena is a playbook of AI-agent workflows for project task execution, installed into real repos through Nodus. One orchestrator runs a four-role pipeline: developer and test-writer in parallel, a verification sweep, then a pre-merge reviewer. The core is language-neutral, and language packs for Rust and Swift bring their own specialists and verification.",
    repoUrl: "https://github.com/oops-rs/ena",
    status: "private",
    primaryColor: "#ef8354",
    secondaryColor: "#4f5d75",
    accentColor: "#fde3d6",
    motif: "Relay team with a referee",
    orbitLabel: "Turns a request into a merge",
    commands: ["nodus add oops-rs/ena --adapter codex", "nodus members enable ena core rust", "nodus doctor"],
    capabilities: ["Parallel develop and test roles", "Verification sweep and pre-merge review", "Rust and Swift language packs"]
  },
  {
    slug: "xipe",
    name: "xipe",
    tagline: "A load-balancing gateway that keeps every AI provider in its own lane.",
    longDescription:
      "Xipe is a provider-scoped load-balancing gateway for hosted AI account backends. It serves OpenAI-compatible and provider-native routes for ChatGPT, Claude, GLM, Grok, and Kimi accounts, and keeps each provider's credentials, sticky routing, usage accounting, request policy, and connection pool isolated. An embedded dashboard, SQLite or Postgres storage, and Prometheus metrics come with it.",
    repoUrl: "https://github.com/oops-rs/xipe",
    status: "private",
    primaryColor: "#d7263d",
    secondaryColor: "#f49d37",
    accentColor: "#fbd9dd",
    motif: "Switchyard of many rails",
    orbitLabel: "Routes every request to the right account",
    commands: ["cargo run -- migrate", "cargo run -- serve", "docker compose up -d"],
    capabilities: ["Provider-isolated account pools", "Sticky sessions and usage accounting", "Embedded admin dashboard"]
  },
  {
    slug: "feishu-botd",
    name: "feishu-botd",
    tagline: "A local sidecar that speaks Feishu so your services don't have to.",
    longDescription:
      "feishu-botd is a small local gateway and agent runtime for Feishu/Lark bots. One process owns one or more apps, along with their credentials, token lifecycle, chat routing, and dynamic CardKit messages. Local services and agents talk to it over a protobuf/gRPC contract on a Unix socket, without handling raw chat ids. Agents can stream progressive card updates and receive normalized button callbacks.",
    repoUrl: "https://github.com/oops-rs/feishu-botd",
    status: "private",
    primaryColor: "#3370ff",
    secondaryColor: "#00d6b9",
    accentColor: "#dbe6ff",
    motif: "Courier pigeon with a gRPC badge",
    orbitLabel: "Delivers messages to the team chat",
    commands: [
      "cp config/feishu-botd.example.json config/feishu-botd.json",
      "docker compose up -d --build",
      "POST /v1/notify"
    ],
    capabilities: ["Protobuf/gRPC contract over a Unix socket", "Multi-app bot ownership", "Progressive CardKit agent responses"]
  },
  {
    slug: "igniter",
    name: "igniter",
    tagline: "Watches the world and speaks up only when something is worth acting on.",
    longDescription:
      "Igniter detects actionable changes. It observes sources such as webhooks, structured API polling, HTTP endpoints, and CLI output, then emits typed signals that a person can read in one sentence and a machine can use without per-source glue. The igniterd daemon owns scheduling, ingest, detection, and SQLite persistence; the igniter CLI is its client.",
    repoUrl: "https://github.com/oops-rs/igniter",
    status: "private",
    primaryColor: "#ff7a00",
    secondaryColor: "#ffd23f",
    accentColor: "#ffe6cc",
    motif: "Flint striking in the dark",
    orbitLabel: "Turns noise into signals",
    commands: [
      "igniter validate --config ~/.igniter/igniter.toml",
      "igniterd --config ~/.igniter/igniter.toml",
      "igniter signals --json"
    ],
    capabilities: ["Webhook, poll, and CLI sources", "Typed, human-readable signals", "Stdout and webhook delivery"]
  },
  {
    slug: "mockplane",
    name: "mockplane",
    tagline: "A programmable mock and proxy gateway that many teams can share without collisions.",
    longDescription:
      "MockPlane is a programmable mock, proxy, and recording gateway for development, testing, QA, and integration debugging. Rules are data: language SDKs publish a canonical RuleSet that a Rust gateway compiles and runs across HTTP, HTTP/2, WebSocket, and gRPC. Scope-based routing keeps users, sessions, and scenarios from overwriting each other, and sidecar providers plug in dynamic behavior.",
    repoUrl: "https://github.com/oops-rs/mockplane",
    status: "private",
    primaryColor: "#00a6a6",
    secondaryColor: "#bbdef0",
    accentColor: "#d4f4f4",
    motif: "Stage set with swappable backdrops",
    orbitLabel: "Plays any backend you need",
    commands: ["cargo run -p mockplane-gateway", "mockplane publish smoke-ruleset.json", "mockplane traffic watch"],
    capabilities: ["HTTP, WebSocket, and gRPC mocking", "Versioned rule publish and rollback", "Recording with redaction"]
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
    slug: "face",
    name: "face",
    tagline: "Fold And Cluster Entries: pipe in a flat list, get a ranked map back.",
    longDescription:
      "face is a Unix-style CLI that groups, ranks, and pages structured command output. Pipe in JSON, JSONL, CSV, or TSV from rg, cargo, gh, CI logs, or an agent, and it sniffs the format, finds the items, picks a grouping, and prints a tree. You can drill into any cluster by number, nest groupings to any depth, and re-pipe its own JSON envelope without running the upstream command again.",
    repoUrl: "https://github.com/oops-rs/face",
    status: "public",
    primaryColor: "#b5179e",
    secondaryColor: "#7209b7",
    accentColor: "#f6d6ef",
    motif: "Sorting hat for terminal output",
    orbitLabel: "Finds the shape of a result set",
    commands: ["rg TODO --json | face", "face --cluster 1 < results.json", "brew install oops-rs/tap/face"],
    capabilities: ["Zero-config grouping and ranking", "Nested clusters with drill-down", "Seven output formats"]
  },
  {
    slug: "framestrip",
    name: "framestrip",
    tagline: "Sixty near-identical frames in, one honest storyboard out.",
    longDescription:
      "framestrip turns a video into a short, deduplicated, timestamped frame strip using the system ffmpeg. It samples at a fixed rate, perceptually hashes each frame, keeps only real transitions, and returns JPEGs with their timestamps and how long each screen stayed up. That lets a language model read a screen recording as \"screen A held 16 s, toast at 00:24, screen B\".",
    repoUrl: "https://github.com/oops-rs/framestrip",
    status: "public",
    primaryColor: "#2ec4b6",
    secondaryColor: "#ff9f1c",
    accentColor: "#d5f5f2",
    motif: "Contact sheet from a darkroom",
    orbitLabel: "Shows models what changed on screen",
    commands: ["cargo add framestrip", "framestrip::extract(path, &Options::default())", "framestrip::tooling()"],
    capabilities: ["Perceptual-hash deduplication", "Timestamps with hold durations", "No build-time ffmpeg linking"]
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
    slug: "svga",
    name: "svga",
    tagline: "A pure-Rust codec for SVGA animations: read, inspect, edit losslessly, write back.",
    longDescription:
      "svga is to SVGA what the png crate is to PNG. It reads SVGA 2.x, zipped 2.x, and 1.x files into one typed model, and edits 2.x files losslessly so untouched fields are written back byte for byte. It treats input as hostile, with size limits, checked arithmetic, and stable error codes, and it builds for wasm32. It deliberately does no rendering or playback.",
    repoUrl: "https://github.com/oops-rs/svga",
    status: "public",
    primaryColor: "#ff4d6d",
    secondaryColor: "#ffb3c1",
    accentColor: "#ffe0e6",
    motif: "Jeweler's loupe over a gift box",
    orbitLabel: "Opens animations without breaking them",
    commands: [
      "cargo add svga",
      "cargo run --example inspect -- gift.svga",
      "document.replace_image(\"img_12\", &optimized_png)?"
    ],
    capabilities: ["Reads SVGA 1.x and 2.x", "Byte-preserving lossless edits", "Hardened against malformed input"]
  },
  {
    slug: "rubin",
    name: "rubin",
    tagline: "Live, time-synced lyrics for whatever Music.app is playing.",
    longDescription:
      "Rubin is a native macOS lyrics companion for Music.app. It shows synced lyrics from LRCLIB in the menu bar, a compact panel, a full window, karaoke mode, the Dynamic Notch, and desktop widgets. You can seek by line, adjust timing, and import local .lrc files. A SwiftUI app sits on a Rust core, which also ships as the `rubin` terminal UI.",
    repoUrl: "https://github.com/oops-rs/rubin",
    status: "private",
    primaryColor: "#e63946",
    secondaryColor: "#f4a261",
    accentColor: "#fde2e4",
    motif: "Robin singing on the menu bar",
    orbitLabel: "Sings along with your Mac",
    commands: ["cargo install --path crates/rubecula-cli", "rubin", "rubin --lrc ./song.lrc"],
    capabilities: ["Menu bar, notch, and widget surfaces", "Synced LRC lyrics with offset control", "Rust core with a terminal UI"]
  },
  {
    slug: "pronoia",
    name: "pronoia",
    tagline: "Capture a six-word todo; get back a repo-grounded spec you can build.",
    longDescription:
      "Pronoia is a capture-first todo system. It takes a quick note and, in the background, turns it into a repo-grounded, buildable spec, with a first-class agent surface over CLI and MCP. Rust owns the agent-grade core and CLI, Swift owns the Apple capture and CloudKit sync layer, and agents coordinate on tasks through leases.",
    repoUrl: "https://github.com/oops-rs/pronoia",
    status: "private",
    primaryColor: "#06d6a0",
    secondaryColor: "#118ab2",
    accentColor: "#d2f8ec",
    motif: "Seed that wakes up as a blueprint",
    orbitLabel: "Turns notes into plans",
    commands: ["pronoia add 'fix flaky login test'", "pronoia next", "pronoia mcp"],
    capabilities: ["Background spec enrichment", "CLI and MCP agent surface", "iOS capture with CloudKit sync"]
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
