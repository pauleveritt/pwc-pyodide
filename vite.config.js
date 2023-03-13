import { defineConfig } from "vite";
import { viteStaticCopy } from "vite-plugin-static-copy";
import { getPyodideAssets } from "./vite-plugin-pyodide.js";

export default defineConfig({
  root: "src/pwc_pyodide",
  build: {
    outDir: "../../dist",
    emptyOutDir: true,
    rollupOptions: {
      // plugins: [resolve(), commonjs()],
    },
  },
  plugins: [
    viteStaticCopy({
      targets: getPyodideAssets(),
    }),
  ],
});
