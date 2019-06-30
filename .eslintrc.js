module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module'
  },
  // https://github.com/feross/standard/blob/master/RULES.md#javascript-standard-style
  extends: 'standard',
  rules: {
    'space-before-function-paren': [2, 'never']
  },
  // required to lint *.vue files
  plugins: ['html']
}
