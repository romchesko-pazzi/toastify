import alias from '@rollup/plugin-alias';
import resolve from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';
import babel from 'rollup-plugin-babel';
import dts from 'rollup-plugin-dts';
import external from 'rollup-plugin-peer-deps-external';

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
      typescript({
        tsconfig: './tsconfig.json',
      }),
      alias({
        entries: [{ find: '@*', replacement: './src/*' }],
      }),
    ],
  },
  {
    external: ['styled-components', 'react', 'react-dom'],
    input: './src/index.ts',
    output: [
      {
        file: 'dist/index.d.ts',
        format: 'cjs',
      },
    ],
    plugins: [
      babel({
        exclude: 'node_modules/**',
        presets: ['@babel/preset-react'],
      }),
      dts(),
      external(),
      resolve(),
      typescript({
        tsconfig: './tsconfig.json',
      }),
      alias({
        entries: [{ find: '@*', replacement: './src/*' }],
      }),
    ],
  },
];
