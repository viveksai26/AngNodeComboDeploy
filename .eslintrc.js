module.exports = {
  'env': {
    'browser': true,
    'es2021': true,
  },
  'extends': [
    'plugin:prettier/recommended',
  ],
  'parser': '@typescript-eslint/parser',
  'parserOptions': {
    'ecmaVersion': 12,
    'sourceType': 'module',
  },
  'plugins': [
    '@typescript-eslint',
  ],
  'rules': {
    'no-undef': [
      'error',
      {
        typeof: true,
      },
    ],
    'one-var': ['error', 'never'],
    'no-multi-assign': 'error',
    'no-plusplus': 'error',
    'require-jsdoc': 0,
  },
};
