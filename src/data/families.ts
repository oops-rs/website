import { projects, type Project } from "./projects";

type FamilyDefinition = {
  id: string;
  name: string;
  blurb: string;
  slugs: string[];
};

export type Family = Omit<FamilyDefinition, "slugs"> & {
  projects: Project[];
};

const definitions: FamilyDefinition[] = [
  {
    id: "agents",
    name: "Agent runtimes",
    blurb: "The loop, the harness, the memory, and the crew that runs on top of them.",
    slugs: ["mentra", "basis", "crab-code", "fuli", "ena", "pronoia"]
  },
  {
    id: "code",
    name: "Code and knowledge",
    blurb: "Ways for people and agents to see what a codebase or result set actually contains.",
    slugs: ["grapha", "nous", "face"]
  },
  {
    id: "infra",
    name: "Gateways and sandboxes",
    blurb: "Long-running services that sit between your tools and everything they talk to.",
    slugs: ["xipe", "mockplane", "qlipoth", "igniter", "feishu-botd"]
  },
  {
    id: "apple",
    name: "Apple, localization, media",
    blurb: "Parsers, codecs, and generators for the files app teams ship every week.",
    slugs: ["xcassets", "numi", "langcodec", "svga", "rubin"]
  },
  {
    id: "utilities",
    name: "Everyday utilities",
    blurb: "Small tools for the clipboard, screen recordings, and installing the rest.",
    slugs: ["oronyx", "framestrip", "tap"]
  }
];

function resolve(definition: FamilyDefinition): Family {
  const { slugs, ...rest } = definition;
  const members = slugs.map((slug) => {
    const project = projects.find((candidate) => candidate.slug === slug);
    if (!project) {
      throw new Error(`Family "${definition.id}" lists unknown project "${slug}".`);
    }
    return project;
  });
  return { ...rest, projects: members };
}

function assertEveryProjectHasOneFamily(resolved: Family[]) {
  const assigned = resolved.flatMap((family) => family.projects.map((project) => project.slug));
  const duplicates = assigned.filter((slug, index) => assigned.indexOf(slug) !== index);
  const missing = projects.filter((project) => !assigned.includes(project.slug)).map((project) => project.slug);
  if (duplicates.length > 0 || missing.length > 0) {
    throw new Error(
      `Project families are out of sync. Duplicated: [${duplicates.join(", ")}]. Missing: [${missing.join(", ")}].`
    );
  }
}

export const families: Family[] = definitions.map(resolve);
assertEveryProjectHasOneFamily(families);

export function getFamilyOf(slug: string): Family {
  const family = families.find((candidate) => candidate.projects.some((project) => project.slug === slug));
  if (!family) {
    throw new Error(`Project "${slug}" has no family.`);
  }
  return family;
}

export const publicCount = projects.filter((project) => project.status === "public").length;
