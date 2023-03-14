import { vi } from "vitest";
import { readFileSync } from "node:fs";

const counterPath = "src/pwc_pyodide/counter.py";
const counterContent = readFileSync(counterPath, "utf-8");

const FILES = {
  "/counter.py": counterContent,
};

export async function mockFetch(url) {
  if (url.includes("pyodide")) {
    return {
      ok: true,
      status: 200,
    };
  }
  const fileText = FILES[url];
  return {
    ok: true,
    status: 200,
    text: async () => fileText,
  };
}

vi.stubGlobal("fetch", mockFetch);
