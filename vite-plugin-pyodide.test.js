import { expect, test } from "vitest";
import { getModuleDir } from "./vite-plugin-pyodide.js";

test("expand module paths", () => {
  const moduleDir = getModuleDir();
  expect(moduleDir).to.contain("pwc-pyodide/node_modules/pyodide");
});
