import typescript from 'rollup-plugin-typescript2'
import commonjs from 'rollup-plugin-commonjs'
import external from 'rollup-plugin-peer-deps-external'
import resolve from 'rollup-plugin-node-resolve'
import pkg from './package.json';
import json from '@rollup/plugin-json';




export default {
  input: 'src/index.ts',
  output: [
    {
      file: pkg.main,
      format: 'cjs',
      exports: 'named',
      sourcemap: true
    },
    {
      file: pkg.module,
      format: 'es',
      exports: 'named',
      sourcemap: true
    }
  ],
  plugins: [
    external(),
    resolve(),
    typescript({
      rollupCommonJSResolveHack: true,
      exclude: '**/__tests__/**',
      clean: true
    }),
    commonjs({
      include: ['node_modules/**']
    }),
    json()
  
  ],
  globals: {
    "@hashgraph/sdk": "_hashgraph_sdk",
    "web3-eth-abi": "_web3-eth-abi"
  },
  external: [
    "@hashgraph/sdk",
    "web3-eth-abi"
  ]
}
