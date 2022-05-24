import babel from 'rollup-plugin-babel'
import { DEFAULT_EXTENSIONS } from '@babel/core'
import typescript from 'rollup-plugin-typescript2';
import tslint from "rollup-plugin-tslint";
import less from 'rollup-plugin-less'
import postcss from 'rollup-plugin-postcss'
import replace from '@rollup/plugin-replace';

export default {
  input: './src/index.js',
  output: {
    file: './lib/bundle.js',
    format: 'esm'
  },
  plugins: [babel({
    runtimeHelpers: true,
    // 只转换源代码，不运行外部依赖
    exclude: 'node_modules/**',
    // babel 默认不支持 ts 需要手动添加
    extensions: [
      ...DEFAULT_EXTENSIONS,
      '.ts',
    ],
  }), typescript(), tslint(), postcss(), less(), replace({
    'Object.defineProperty(exports, "__esModule", { value: true });': '',
    delimiters: ['\n', '\n']
  })],
  external: ['react', "react-dom"]
}