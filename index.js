module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:import/recommended',
    'plugin:import/typescript',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:oxlint/recommended',
    'plugin:@tanstack/eslint-plugin-query/recommended',
  ],
  overrides: [
    {
      env: {
        node: true,
      },
      files: ['.eslintrc.{js,cjs}'],
      parserOptions: {
        sourceType: 'script',
      },
    },
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint', 'react'],
  settings: {
    react: {
      version: 'detect',
    },
    'import/resolver': {
      typescript: true,
      alias: {
        map: [['@', './src']],
      },
    },
  },
  ignorePatterns: ['dist/*', 'node_modules/*', 'build/*'],
  rules: {
    indent: 'off',
    quotes: ['warn', 'single'],
    semi: ['warn', 'never'],
    'no-extra-semi': 'off',
    'linebreak-style': 'off',
    'import/no-unresolved': 'error',
    'no-console': ['warn', { allow: ['warn', 'error'] }],
    "react/prop-types": "off",
    "react/jsx-uses-react": "off",
    "react/react-in-jsx-scope": "off"
  },
}
