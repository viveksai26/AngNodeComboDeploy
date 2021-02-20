module.exports = {
  env: {
    browser: true,
    es6: true
  },
  extends: ['plugin:prettier/recommended'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2015,
    sourceType: 'module'
  },
  plugins: ['typescript'],
  rules: {
    'prettier/prettier': ['error', { endOfLine: 'auto' }],
    'no-undef': [
      'error',
      {
        typeof: true
      }
    ],
    'one-var': ['error', 'never'],
    'no-multi-assign': 'error',
    'brace-style': 'error',
    'space-infix-ops': 'error',
    'no-whitespace-before-property': 'error',
    'space-in-parens': ['error', 'never'],
    'array-bracket-spacing': ['error', 'never'],
    'no-trailing-spaces': 'error'
  }
};
