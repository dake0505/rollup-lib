import babel from 'rollup-plugin-babel'
import path from 'path'
import ts from 'rollup-plugin-typescript'
import { DEFAULT_EXTENSIONS } from '@babel/core'

const getPath = _path => path.resolve(__dirname, _path)
const extensions = ['.js', '.ts', '.tsx']

const tsPlugin = ts({
  tsconfig: getPath('./tsconfig.json'),
  extensions
})

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
  }), tsPlugin],
  external: ['react']
}