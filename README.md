# Vite demo for Pyodide

Repo demonstrating a Pyodide project driven by Vite:

- Uses an npm installation of Pyodide
- Gets the static assets (e.g. `pyodide.asm.wasm`) from `node_modules/pyodide`
- Pyodide JS gets bundled
- But the static assets get copied into build dir
- During dev, those assets are just served
- Uses `vite-plugin-static-copy` for optimized copying over the rollup plugin

## Installing

```shell
$ npm install
```

## Using

- `npm run dev` starts the dev server
- `npm run build` builds into `dist`
