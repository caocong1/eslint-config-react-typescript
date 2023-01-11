module.exports = {
  'root': true,
  'env': {
    'browser': true,
    'es2021': true,
  },
  'extends': [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
  ],
  'parser': '@typescript-eslint/parser',
  'parserOptions': {
    'ecmaFeatures': {
      'jsx': true,
    },
    'ecmaVersion': 'latest',
    'sourceType': 'module',
  },
  'plugins': [
    'react',
    '@typescript-eslint',
    'react-hooks',
  ],
  'rules': {
    'prettier/prettier': ['error', {
      'singleQuote': true,
      'semi': false,
      'trailingComma': 'all',
      'printWidth': 120
    }],
    'react/jsx-wrap-multilines': ['error', {'declaration': false, 'assignment': false}],
    // 'indent': ['error', 2, { 'SwitchCase': 1 }],
    'quotes': ['error', 'single'],
    'semi': ['error', 'never'],
    'array-bracket-newline': ['error', 'consistent'],
    'array-bracket-spacing': ['error', 'never'],
    'comma-dangle': ['error', 'always-multiline'],
    'no-multi-spaces': 'error',
    'keyword-spacing': 'error',
    'no-multiple-empty-lines': ['error', { 'max': 1, 'maxEOF': 0, 'maxBOF': 0 }],
    'object-curly-spacing': ['error', 'always'],
    'object-curly-newline': ['error', { 'consistent': true }],
    'comma-spacing': 'error',
    'key-spacing': 'error',
    'space-infix-ops': 'error',
    // 'operator-linebreak': ['error', 'after'],
    '@typescript-eslint/no-explicit-any': 'off',
    'react/prop-types': 0,
    'react/jsx-props-no-multi-spaces': 2,
    'react/jsx-tag-spacing': [
      2,
      {
        'closingSlash': 'never',
        'beforeSelfClosing': 'always',
        'afterOpening': 'never',
        'beforeClosing': 'never',
      },
    ],
    // 'react/jsx-wrap-multilines': [2, {
    //   'declaration': 'parens-new-line',
    //   'assignment': 'parens-new-line',
    //   'return': 'parens-new-line',
    //   'arrow': 'parens-new-line',
    //   'condition': 'parens-new-line',
    //   'logical': 'parens-new-line',
    //   'prop': 'parens-new-line',
    // }],
    // 'react/jsx-one-expression-per-line': [2, { 'allow': 'single-child' }],
    'react/jsx-closing-bracket-location': 2,
    // 'react/jsx-curly-newline': 2,
    // 'react/jsx-indent': [2, 2, { checkAttributes: true, indentLogicalExpressions: true }],
    'react/jsx-first-prop-new-line': [2, 'multiline'],
    'react/jsx-newline': [2, { prevent: true }],
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'arrow-spacing': 'error',
    'space-before-blocks': 'error',
  },
}
