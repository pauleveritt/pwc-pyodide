import { loadPyodide } from "pyodide";

const span = document.querySelector("#time-now");

async function setupPyodide() {
  const pyodide = await loadPyodide({
    indexURL: "/pyodide-data",
  });
  pyodide.runPython(`
		import js
		div = js.document.createElement("div")
		div.innerHTML = "<p><em>Hello Pyodide! This element was created from Python</</p>"
		js.document.body.append(div)
	`);
}

setupPyodide();

export default function update() {
  const now = new Date();
  span.textContent = now.toTimeString();
  setTimeout(update, 1000);
}
