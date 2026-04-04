import { defineConfig } from "astro/config";

import cloudflare from "@astrojs/cloudflare";

export default defineConfig({
  site: "https://oops.elata.ai",
  output: "static",
  adapter: cloudflare()
});