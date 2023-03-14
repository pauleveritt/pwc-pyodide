import { expect, test } from "vitest";
import { pyodide, setupPyodide } from "../src/pwc_pyodide/app.js";
import { getModuleDir } from "../vite-plugin-pyodide.js";

test("load and initialize Pyodide", async () => {
  expect(pyodide).to.be.undefined;
  const pyodideDir = getModuleDir();
  await setupPyodide(pyodideDir);
  expect(pyodide).to.exist;
});
