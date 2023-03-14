import { loadPyodide } from "pyodide";

export let pyodide, current_counter;

export async function setupPyodide(pyodideDir = "/pyodide-data") {
  pyodide = await loadPyodide({
    indexURL: pyodideDir,
  });
}

export async function setupCounter() {
  const url = "/counter.py";
  const response = await fetch(url);
  const content = await response.text();
  pyodide.FS.writeFile("counter.py", content, {
    encoding: "utf8",
  });
  current_counter = pyodide.runPython("import counter;counter.Counter()");
}

export function renderCounter() {
  const targetCounter = document.getElementById("counter");
  targetCounter.innerHTML = `
  <span>Current Count: ${current_counter.count}</span>
  `;
}

export function updateCounter() {
  current_counter.increment();
  renderCounter();
}

export default async function init(pyodideDir = "/pyodide-data") {
  await setupPyodide(pyodideDir);
  await setupCounter();
  const targetCounter = document.getElementById("counter");
  targetCounter.addEventListener("click", updateCounter);
  // First render
  renderCounter();
}
