import { expect, test } from "vitest";
import { pyodide, setupPyodide } from "../src/pwc_pyodide/app.js";
import { getModuleDir } from "../vite-plugin-pyodide.js";

test("Load and initialize Pyodide", async () => {
  const pyodideDir = getModuleDir();
  await setupPyodide(pyodideDir);
  // expect(pyodide).to.equal(2);
});
