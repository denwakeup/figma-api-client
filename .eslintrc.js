module.exports = {
    extends: [
        './tools/eslint/comments.js',
        './tools/eslint/import.js',
        './tools/eslint/typescript.js',

        'plugin:prettier/recommended',
    ],

    plugins: ['import'],
    rules: {
        'newline-before-return': 'error',
        'padding-line-between-statements': [
            'error',
            { blankLine: 'always', prev: '*', next: 'block-like' },
            { blankLine: 'always', prev: 'block-like', next: '*' },
        ],
        'no-else-return': ['error', { allowElseIf: false }],
        'no-var': 'error',
        'no-nested-ternary': 'error',
        'no-implicit-coercion': ['error', { boolean: false }],
        curly: 'error',
    },
};
