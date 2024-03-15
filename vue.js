module.exports = {
  env: {
    browser: true,
  },
  plugins: ['vue'],
  extends: [
    './index',
    './typescript',
    'plugin:vue/vue3-recommended',
    '@vue/typescript/recommended',
  ],
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@typescript-eslint/parser',
  },
  rules: {
    'vue/attributes-order': 'off',
    'vue/multi-word-component-names': 'off',
    'vue/require-default-prop': 'off',
    'vue/no-reserved-component-names': 'off',
    '@typescript-eslint/ban-types': 'off',
  },
}
