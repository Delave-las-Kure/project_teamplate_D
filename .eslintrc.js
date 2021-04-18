// .eslintrc.js
module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  ecmaFeatures: {
    modules: true,
    spread: true,
    restParams: true,
  },
  parserOptions: { ecmaVersion: 2020, sourceType: 'module' }, // to enable features such as async/await
  ignorePatterns: ['node_modules/*', '.next/*', '.out/*', '!.prettierrc.js', 'public/*'], // We don't want to lint generated files nor node_modules, but we want to lint .prettierrc.js (ignored by default by eslint)
  extends: ['eslint:recommended'],
  overrides: [
    // This configuration will apply only to TypeScript files
    {
      files: ['**/*.ts', '**/*.tsx'],
      parser: '@typescript-eslint/parser',
      settings: { react: { version: 'detect' } },
      env: {
        browser: true,
        node: true,
        es6: true,
      },
      plugins: ['no-loops'],
      extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended', // TypeScript rules
        'plugin:react/recommended', // React rules
        'plugin:react-hooks/recommended', // React hooks rules
        'plugin:jsx-a11y/recommended', // Accessibility rules
        'prettier/@typescript-eslint', // Prettier plugin
        'plugin:prettier/recommended', // Prettier recommended rules
      ],
      rules: {
        'react/display-name': [2],
        'no-loops/no-loops': 2, // no loop 'for'
        'react/prop-types': 'off', // We will use TypeScript's types for component props instead
        'react/react-in-jsx-scope': 'off', // No need to import React when using Next.js
        'jsx-a11y/anchor-is-valid': 'off', // This rule is not compatible with Next.js's <Link /> components
        '@typescript-eslint/no-unused-vars': ['error'], // Why would you want unused vars?
        /*'@typescript-eslint/explicit-function-return-type': [
          // I suggest this setting for requiring return types on functions only where usefull
          'warn',
          {
            allowExpressions: true,
            allowConciseArrowFunctionExpressionsStartingWithVoid: true,
          },
        ],*/
        'prettier/prettier': ['error', { endOfLine: 'auto' }, { usePrettierrc: true }],
      },
    },
  ],
}
