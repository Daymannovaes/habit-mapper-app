module.exports = {
  env: {
    es2021: true,
    browser: true,
    jest: true,
  },
  extends: [
    'airbnb-base',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
    "plugin:import/typescript"
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: 'tsconfig.json',
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint'],
  root: true,
  ignorePatterns: ['.eslintrc.js'],
  rules: {
  },
};
