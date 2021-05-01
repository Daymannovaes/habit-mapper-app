module.exports = {
  env: {
    es2021: true,
    node: true,
    jest: true,
  },
  extends: [
    'airbnb-base',
    'plugin:import/typescript',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: [
      "/**/tsconfig.json",
      "tsconfig.json",
    ],
    tsconfigRootDir: __dirname,
  },
  settings: {
    "import/resolver": {
      typescript: {
        project: __dirname + "/*/tsconfig.json",
      }
    }
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
   'class-methods-use-this': 0,
   'no-useless-constructor': 0,
   'import/prefer-default-export': 0,
  },
};
