import { createRequire } from 'node:module';
import terser from '@rollup/plugin-terser';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';

const require = createRequire(import.meta.url);
const ts = require('rollup-plugin-ts');

const OUT_DIR = './lib';
const TS_CONFIG = 'tsconfig.json';

const packageBundleConfig = [
    {
        external: ['query-string', 'cross-fetch/polyfill'],
        input: './src/index.ts',
        output: {
            file: `${OUT_DIR}/index.js`,
            format: 'cjs',
        },
        plugins: [
            ts({
                tsconfig: {
                    fileName: TS_CONFIG,
                    hook: (resolvedConfig) => ({ ...resolvedConfig, declaration: true }),
                },
            }),
        ],
    },
];

const browserBundleConfig = [
    {
        input: './src/index.ts',
        output: {
            file: `${OUT_DIR}/index.min.js`,
            format: 'umd',
            name: 'Figma',
        },
        plugins: [
            ts({
                tsconfig: TS_CONFIG,
            }),
            nodeResolve({
                browser: true,
            }),
            commonjs({
                include: ['node_modules/**'],
            }),
            terser({ format: { comments: false } }),
        ],
    },
];

export default [...packageBundleConfig, ...browserBundleConfig];
