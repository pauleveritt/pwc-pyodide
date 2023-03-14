import { defineConfig } from "vite";
import { viteStaticCopy } from "vite-plugin-static-copy";
import { getPyodideAssets } from "./vite-plugin-pyodide.js";
import path from "path";

const root = path.join(__dirname, "src/pwc_pyodide");
export default defineConfig({
  root,
  publicDir: "static",
  build: {
    outDir: "../../dist",
    emptyOutDir: true,
  },
  plugins: [
    viteStaticCopy({
      targets: getPyodideAssets(root),
    }),
  ],
});
