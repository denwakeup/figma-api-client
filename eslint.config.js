import path from 'node:path';
import { fileURLToPath } from 'node:url';

import _import from 'eslint-plugin-import';
import { fixupPluginRules } from '@eslint/compat';
import js from '@eslint/js';
import { FlatCompat } from '@eslint/eslintrc';

import commentsConfig from './tools/eslint/comments.js';
import importConfig from './tools/eslint/import.js';
import typescriptConfig from './tools/eslint/typescript.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
    baseDirectory: __dirname,
    recommendedConfig: js.configs.recommended,
    allConfig: js.configs.all,
});

/** @type {import('eslint').Linter.Config} */
const config = [
    {
        ignores: ['lib/'],
    },
    ...compat.config(commentsConfig),
    ...compat.config(importConfig),
    ...compat.config(typescriptConfig),
    ...compat.extends('plugin:prettier/recommended'),
    {
        plugins: {
            import: fixupPluginRules(_import),
        },

        rules: {
            'newline-before-return': 'error',

            'padding-line-between-statements': [
                'error',
                {
                    blankLine: 'always',
                    prev: '*',
                    next: 'block-like',
                },
                {
                    blankLine: 'always',
                    prev: 'block-like',
                    next: '*',
                },
            ],

            'no-else-return': [
                'error',
                {
                    allowElseIf: false,
                },
            ],

            'no-var': 'error',
            'no-nested-ternary': 'error',

            'no-implicit-coercion': [
                'error',
                {
                    boolean: false,
                },
            ],

            curly: 'error',
        },
    },
];

export default config;
