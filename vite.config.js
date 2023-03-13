import { defineConfig } from "vite";
import { viteStaticCopy } from "vite-plugin-static-copy";

import fs from "fs";
import path from "path";
import { createRequire } from "module";

const PYODIDE_ASSETS = [
  "pyodide.asm.js",
  "pyodide.asm.wasm",
  "pyodide.asm.data",
  "pyodide_py.tar",
  "pyodide.mjs",
  "repodata.json",
];
const getModuleDir = () => {
  const require = createRequire(import.meta.url);
  const lookupPaths = require.resolve
    .paths("pyodide")
    .map((p) => path.join(p, "pyodide"));
  return lookupPaths.find((p) => fs.existsSync(p));
};

function getNormalizedAssets() {
  const pyodideDir = getModuleDir();
  return PYODIDE_ASSETS.map((asset) => {
    return {
      src: path.join(pyodideDir, asset),
      dest: "pyodide-data",
      rename: asset,
    };
  });
}

export default defineConfig({
  root: "src/pwc_pyodide",
  build: {
    outDir: "../../dist",
    emptyOutDir: true,
  },
  plugins: [
    viteStaticCopy({
      targets: getNormalizedAssets(),
    }),
  ],
});
