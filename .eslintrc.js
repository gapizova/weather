module.exports = {
  env: {
    browser: true,
    es2021: true,
    'jest/globals': true,
  },
  extends: ['airbnb-base', 'plugin:css/recommended', 'prettier'],

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
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['jest', 'css', 'html'],
  rules: {
    'max-len': [
      'error',
      {
        ignoreComments: true,
      },
      {
        code: 130,
      },
    ],
    'import/prefer-default-export': 'off',
    'jest/no-disabled-tests': 'warn',
    'jest/no-focused-tests': 'error',
    'jest/no-identical-title': 'error',
    'jest/prefer-to-have-length': 'warn',
    'jest/valid-expect': 'error',
    'import/no-unresolved': 'off',
    'import/extensions': 'off',
    'no-return-await': 'off',
    'no-param-reassign': 'off',
    'no-console': 'off',
  },
};
