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
export const getModuleDir = () => {
  const require = createRequire(import.meta.url);
  const lookupPaths = require.resolve
    .paths("pyodide")
    .map((p) => path.join(p, "pyodide"));
  return lookupPaths.find((p) => fs.existsSync(p));
};

export function getPyodideAssets(projectRoot) {
  const pyodideDir = getModuleDir();
  const assets = PYODIDE_ASSETS.map((asset) => {
    return {
      src: path.join(pyodideDir, asset),
      dest: "pyodide-data",
      rename: asset,
    };
  });
  assets.push({
    src: `${projectRoot}/*.py`,
    dest: "",
  });
  return assets;
}
