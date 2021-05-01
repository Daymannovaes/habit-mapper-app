module.exports = {
  extends: '../.eslintrc.js',
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
