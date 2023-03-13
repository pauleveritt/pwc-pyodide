import { loadPyodide } from "pyodide";

let pyodide;

async function setupPyodide() {
  pyodide = await loadPyodide({
    indexURL: "/pyodide-data",
  });
}

function updateDocument() {
  pyodide.runPython(`
		import js
		pre = js.document.getElementById("output");
		pre.innerText = "Hello Pyodide! This element was created from Python."
	`);
}

export default async function init() {
  await setupPyodide();
  updateDocument();
}
