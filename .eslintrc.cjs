module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'standard-with-typescript',
    'plugin:react/jsx-runtime',
    'plugin:prettier/recommended',
  ],
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json'],
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  plugins: ['react', 'custom-rules', 'prettier'],
  rules: {
    'comma-dangle': ['error', 'always-multiline'],
    '@typescript-eslint/comma-dangle': ['error', 'always-multiline'],
    indent: 'off',
    '@typescript-eslint/no-namespace': 'off',
    '@typescript-eslint/strict-boolean-expressions': 'off',
    'react/prop-types': 'off',
    'no-unused-vars': 'error',
    'custom-rules/no-function-inside-html': 'error',
    'custom-rules/no-direct-file-import': 'error',
  },
}
