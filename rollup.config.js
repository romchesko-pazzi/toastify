import alias from '@rollup/plugin-alias';
import resolve from '@rollup/plugin-node-resolve';
import babel from 'rollup-plugin-babel';
import external from 'rollup-plugin-peer-deps-external';

export default [
  {
    external: ['styled-components', 'react', 'react-dom'],
    input: './src/index.js',
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
      alias({
        entries: [{ find: '@*', replacement: './src/*' }],
      }),
    ],
  },
];
