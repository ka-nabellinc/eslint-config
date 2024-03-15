module.exports = {
  extends: [
    'stylelint-config-recommended',
    'stylelint-config-standard',
    'stylelint-config-recommended-vue',
  ],
  rules: {
    'selector-class-pattern': null,
    'custom-property-empty-line-before': null,
    'declaration-empty-line-before': null,
    'color-function-notation': null,
    'alpha-value-notation': null,
    'color-hex-length': null,
    'property-no-vendor-prefix': null
  },
}