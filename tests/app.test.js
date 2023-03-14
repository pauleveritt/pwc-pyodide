import { beforeEach, expect, test } from "vitest";
import {
  current_counter,
  pyodide,
  setupCounter,
  setupPyodide,
} from "../src/pwc_pyodide/app.js";
import { getModuleDir } from "../vite-plugin-pyodide.js";

// await setupPyodide(getModuleDir());
// const initialPyodideState = pyodide.pyodide_py._state.save_state();

// beforeEach(async () => {
//   // On each test, reset to an "empty" interpreter
//   pyodide.pyodide_py._state.restore_state(initialPyodideState);
// });

test("load and initialize Pyodide", async () => {
  expect(pyodide).to.be.undefined;
  const pyodideDir = getModuleDir();
  await setupPyodide(pyodideDir);
  expect(pyodide).to.exist;
});

test("load and initialize Counter", async () => {
  // Set up a fetch mock to
  expect(current_counter).to.be.undefined;
  const pyodideDir = getModuleDir();
  await setupPyodide(pyodideDir);
  await setupCounter();
  expect(current_counter).to.exist;
});

test("increment a counter", () => {
  expect(current_counter.current_count).to.equal(0);
});
