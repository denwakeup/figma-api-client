const config = {
    rules: {
        'import/order': [
            'error',
            {
                pathGroupsExcludedImportTypes: ['builtin'],
                groups: [['builtin'], ['external'], ['internal'], ['parent'], ['sibling', 'index']],
                'newlines-between': 'always',
            },
        ],
        'import/no-cycle': 'error',
        'import/no-extraneous-dependencies': [
            'error',
            {
                devDependencies: [
                    // Jest
                    '**/*.test.{js,jsx,ts,tsx}',
                    '**/setupTests.ts',
                    '**/jest.config.js',
                    '**/jest.setup.js',

                    // Other tests
                    '**/**.e2e-spec.{js,jsx,ts,tsx}',
                    '**/**.spec.{js,jsx,ts,tsx}',

                    // Packages scripts
                    '**/scripts/**/*.js',

                    // Packages tools
                    '**/tools/**/*.js',

                    '**/eslint.config.js',
                ],
            },
        ],
        'import/no-deprecated': 'error',
        'import/no-duplicates': ['error', { considerQueryString: true }],
        'import/no-relative-packages': 'error',
        'import/no-useless-path-segments': 'error',
        'import/no-anonymous-default-export': [
            'error',
            {
                allowArray: false,
                allowArrowFunction: false,
                allowAnonymousClass: false,
                allowAnonymousFunction: false,
                allowCallExpression: true, // The true value here is for backward compatibility
                allowLiteral: false,
                allowObject: true,
            },
        ],
    },
};

export default config;
