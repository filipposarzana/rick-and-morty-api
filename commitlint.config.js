module.exports = {
  extends: ['@commitlint/config-conventional'],
  parserPreset: {
    parserOpts: {
      referenceActions: ['closes', 'refs'],
    },
  },
  rules: {
    'footer-empty': [2, 'never'],
    'header-max-length': [2, 'always', 90],
    'references-empty': [2, 'never'],
    'scope-case': [2, 'always', 'kebab-case'],
    'scope-empty': [2, 'never'],
    'type-enum': [2, 'always', ['build', 'cr', 'feat', 'fix', 'style', 'test']],
  },
}
