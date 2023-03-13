import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import json from '@rollup/plugin-json';


// `npm run build` -> `production` is true
// `npm run dev` -> `production` is false
const production = !process.env.ROLLUP_WATCH;

export default {
	input: 'src/pwc_pyodide/main.js',
	output: {
		dir: 'public',
		format: 'es', // immediately-invoked function expression — suitable for <script> tags
		sourcemap: true
	},
	plugins: [
		json(),
		resolve(), // tells Rollup how to find date-fns in node_modules
		commonjs(), // converts date-fns to ES modules
	],
	external: ['fs/promises']
};
