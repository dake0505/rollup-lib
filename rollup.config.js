import babel from 'rollup-plugin-babel'
import typescript from 'rollup-plugin-typescript2';
import tslint from "rollup-plugin-tslint";
import less from 'rollup-plugin-less'
import postcss from 'rollup-plugin-postcss'
import replace from '@rollup/plugin-replace';
import commonjs from '@rollup/plugin-commonjs';

export default {
  input: './src/index.js',
  output: {
    file: './lib/bundle.js',
    format: 'esm'
  },
  plugins: [commonjs(), babel(), typescript(), postcss(), less(), tslint({
    throwOnError: true,
    throwOnWarning: true,
    include: ['src/**/*.ts', 'src/**/*.tsx'],
    exclude: ['node_modules/**', '*.js', '*.scss', '*.css'],
  })],
  external: ['react', "react-dom"]
}