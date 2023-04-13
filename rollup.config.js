import alias from '@rollup/plugin-alias';
import resolve from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';
import babel from 'rollup-plugin-babel';
import external from 'rollup-plugin-peer-deps-external';
import { terser } from 'rollup-plugin-terser';

export default [
  {
    external: ['styled-components', 'react', 'react-dom'],
    input: './src/index.ts',
    output: [
      {
        file: 'dist/index.js',
        format: 'cjs',
      },
      {
        file: 'dist/index.es.js',
        format: 'es',
        exports: 'named',
      },
    ],
    plugins: [
      babel({
        exclude: 'node_modules/**',
        presets: ['@babel/preset-react'],
      }),
      external(),
      resolve(),
      terser(),
      typescript({
        tsconfig: './tsconfig.json',
      }),
      alias({
        entries: [{ find: '@*', replacement: './src/*' }],
      }),
    ],
  },
];
