module.exports = {
  env: {
    jest: true
  },
  plugins: ['@typescript-eslint'],
  extends: ['./index', 'plugin:@typescript-eslint/recommended'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: true,
  },
  rules: {
    '@typescript-eslint/no-unused-vars': 'error',
  }
}
