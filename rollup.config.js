import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import dts from 'rollup-plugin-dts';
import postcss from 'rollup-plugin-postcss';
import { terser } from 'rollup-plugin-terser';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import babel from '@rollup/plugin-babel';

// eslint-disable-next-line @typescript-eslint/no-var-requires
import pkg from './package.json';

// const packageJson = require('./package.json');

const INPUT_FILE_PATH = 'src/index.ts';
const OUTPUT_NAME = 'Example';

const GLOBALS = {
  react: 'React',
  'react-dom': 'ReactDOM',
};
/*
const PLUGINS = [
  postcss({ extract: true }),
  babel({
    babelHelpers: 'runtime',
    exclude: 'node_modules/**',
  }),
  resolve({
    browser: true,
    resolveOnly: [/^(?!react$)/, /^(?!react-dom$)/],
  }),
  commonjs({ include: 'node_modules/**' }),
  typescript({ tsconfig: './tsconfig.json' }),
  terser({ module: 'true' }),
];

const EXTERNAL = ['react', 'react-dom'];

const CJS_AND_ES_EXTERNALS = EXTERNAL.concat(/@babel\/runtime/);

const OUTPUT_DATA = [
  {
    file: pkg.module,
    format: 'es',
  },
];

const config = OUTPUT_DATA.map(({ file, format }) => ({
  input: INPUT_FILE_PATH,
  output: {
    file,
    format,
    name: OUTPUT_NAME,
    globals: GLOBALS,
  },
  external: ['es'].includes(format) ? CJS_AND_ES_EXTERNALS : EXTERNAL,
  plugins: PLUGINS,
}));

// export default config;
*/
const extensions = ['.js', '.jsx', '.ts', '.tsx'];

export default [
  {
    input: 'src/index.ts',
    output: [
      {
        globals: GLOBALS,
        file: pkg.main,
        format: 'cjs',
        sourcemap: true,
      },
      {
        globals: GLOBALS,
        file: pkg.module,
        format: 'esm',
        sourcemap: true,
      },
    ],
    plugins: [
      peerDepsExternal(),
      babel({
        babelHelpers: 'runtime',
        exclude: 'node_modules/**',
      }),
      resolve({
        extensions,
        browser: true,
        resolveOnly: [
          /^(?!react$)/,
          /^(?!react-dom$)/,
          /^(?!@mui$)/,
          /^(?!chroma-js$)/,
        ],
      }),
      commonjs({
        include: 'node_modules/**',
      }),
      typescript({
        tsconfig: './tsconfig.json',
        sourceMap: false,
      }),
      postcss({ extract: true }),
      terser(),
    ],
    external: ['@mui/material', '@mui/material/styles', 'chroma-js'],
  },
  {
    input: 'dist/esm/types/index.d.ts',
    output: [{ file: 'dist/index.d.ts', format: 'esm' }],
    plugins: [dts()],
    external: [
      /\.css$/,
      'react',
      'react-dom',
      '@mui/material',
      '@mui/material/styles',
      'chroma-js',
    ],
  },
];
