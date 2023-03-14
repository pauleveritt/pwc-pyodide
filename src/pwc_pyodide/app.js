import { loadPyodide } from "pyodide";

export let pyodide, current_counter;
const targetCounter = document.getElementById("counter");

export async function setupPyodide(pyodideDir = "/pyodide-data") {
  pyodide = await loadPyodide({
    indexURL: pyodideDir,
  });
}

export async function setupCounter() {
  let url = new URL("/counter.py", import.meta.url);
  url = "/counter.py";
  const response = await fetch(url);
  const content = await response.text();
  pyodide.FS.writeFile("counter.py", content, {
    encoding: "utf8",
  });
  current_counter = pyodide.runPython("import counter;counter.Counter()");
}

function renderCounter() {
  targetCounter.innerHTML = `
  <span>Current Count: ${current_counter.current_count}</span>
  `;
}

function updateCounter() {
  current_counter.increment();
  renderCounter();
}

export default async function init() {
  await setupPyodide("/pyodide-data");
  await setupCounter();
  targetCounter.addEventListener("click", updateCounter);
  // First render
  renderCounter();
}
