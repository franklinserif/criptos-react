module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'airbnb',
    'plugin:react/jsx-runtime',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react'],
  rules: {
    'no-unused-vars': 'error',
  },
  'react/function-component-definition': [
    2,
    {
      namedComponents: 'function-declaration',
    },
  ],
};
