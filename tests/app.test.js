import { beforeEach, expect, test } from "vitest";
import init, {
  current_counter,
  pyodide,
  setupCounter,
  setupPyodide,
  updateCounter,
} from "../src/pwc_pyodide/app.js";
import { getModuleDir } from "../vite-plugin-pyodide.js";

beforeEach(() => {
  document.body.innerHTML = `<div id="counter"></div>`;
});

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

test("increment a counter", async () => {
  const pyodideDir = getModuleDir();
  await setupPyodide(pyodideDir);
  await setupCounter();
  expect(current_counter.count).to.equal(0);
});

test("render a counter", async () => {
  const counter = document.getElementById("counter");
  expect(counter.textContent).to.be.empty;
  const pyodideDir = getModuleDir();
  await init(pyodideDir);
  expect(counter.textContent.trim()).to.equal("Current Count: 0");
});

test("update a counter", async () => {
  const counter = document.getElementById("counter");
  const pyodideDir = getModuleDir();
  await init(pyodideDir);
  expect(counter.textContent.trim()).to.equal("Current Count: 0");
  updateCounter();
  expect(counter.textContent.trim()).to.equal("Current Count: 1");
  // Now simulate a click
  counter.click();
  expect(counter.textContent.trim()).to.equal("Current Count: 2");
});
