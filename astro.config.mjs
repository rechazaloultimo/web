// astro.config.mjs
import { defineConfig } from "astro/config";
import path from "path";
import { fileURLToPath } from "url";
import svelte from "@astrojs/svelte";
import node from "@astrojs/node";
import auth from "auth-astro";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig({
  output: "server",
  adapter: node({ mode: "standalone" }),
  site: "https://rodrigopizarro.com.ar",
  base: "/rechazaloultimo",

  vite: {
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
  },
  integrations: [svelte(), auth()],
});
