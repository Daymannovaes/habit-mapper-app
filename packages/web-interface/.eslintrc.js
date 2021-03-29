module.exports = {
  env: {
    es2021: true,
    browser: true,
    jest: true,
  },
  extends: [
    'airbnb-base',
    'plugin:import/typescript',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: 'tsconfig.json',
    tsconfigRootDir: __dirname,
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint', 'import'],
  root: true,
  ignorePatterns: ['.eslintrc.js'],
  rules: {
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        'js': 'never',
        'jsx': 'never',
        'ts': 'never',
        'tsx': 'never'
      }
   ],
   'no-useless-constructor': 0,
   'import/prefer-default-export': 0,
   '@typescript-eslint/no-empty-function': 0,
  },
};
