import ts from 'rollup-plugin-typescript';

export default {
  entry: './src/main.tsx',
  dest: './dist/bundle.js',
  format: 'iife',
  moduleName: 'bundle',
  external: [
    'react'
  ],
  plugins: [
    ts()
  ],
  globals: {
    react: 'React'
  },
  sourceMap: true
};
