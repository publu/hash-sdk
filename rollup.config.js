import typescript from 'rollup-plugin-typescript2'
import commonjs from 'rollup-plugin-commonjs'
import external from 'rollup-plugin-peer-deps-external'
import resolve from 'rollup-plugin-node-resolve'
import pkg from './package.json';
import json from '@rollup/plugin-json';
import sourceMaps from 'rollup-plugin-sourcemaps'



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
    json(),
    sourceMaps(),
    // svgResolverPlugin()
  ],
  // globals: {
  //   "@hashgraph/sdk": "_hashgraph_sdk",
  //   "web3-eth-abi": "_web3-eth-abi"
  // },
  external: [
    ...Object.keys(pkg.dependencies || {})
   ]
}


// plugin
export function svgResolverPlugin () {
  return ({
    resolveId(source, importer) {
      if (source.endsWith('.svg')) {
        return path.resolve(path.dirname(importer), source);
      }
    },
    load(id) {
      if (id.endsWith('.svg')) {
      	const referenceId = this.emitFile({
          type: 'asset',
          name: path.basename(id),
          source: fs.readFileSync(id)
        });
        return `export default import.meta.ROLLUP_FILE_URL_${referenceId};`;
      }
    }
  });
}