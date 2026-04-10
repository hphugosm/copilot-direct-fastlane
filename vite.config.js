import { defineConfig } from "vite";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const rootDir = dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  base: "/copilot-direct-fastlane/",
  root: "src",
  publicDir: "../public",
  build: {
    outDir: "../dist",
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: resolve(rootDir, "src/index.html"),
        pamatky: resolve(rootDir, "src/pamatky.html"),
        zajimavosti: resolve(rootDir, "src/zajimavosti.html"),
        galerie: resolve(rootDir, "src/galerie.html"),
        faq: resolve(rootDir, "src/faq.html"),
        sources: resolve(rootDir, "src/sources.html")
      }
    }
  }
});
