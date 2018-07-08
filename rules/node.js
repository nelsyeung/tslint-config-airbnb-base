module.exports = {
  // env: {
  //   node: true
  // },

  rules: {
    // enforce return after a callback
    // 'callback-return': 'off', NO-SUPPORT

    // require all requires be top-level
    // https://eslint.org/docs/rules/global-require
    // 'global-require': 'error', NO-SUPPORT

    // enforces error handling in callbacks (node environment)
    'handle-callback-err': false,

    // disallow use of the Buffer() constructor
    // https://eslint.org/docs/rules/no-buffer-constructor
    // 'no-buffer-constructor': 'error', NO-SUPPORT

    // disallow mixing regular variable and require declarations
    // 'no-mixed-requires': ['off', false], NO-SUPPORT

    // disallow use of new operator with the require function
    // 'no-new-require': 'error', NO-SUPPORT

    // disallow string concatenation with __dirname and __filename
    // https://eslint.org/docs/rules/no-path-concat
    // 'no-path-concat': 'error', NO-SUPPORT

    // disallow use of process.env
    // 'no-process-env': 'off', NO-SUPPORT

    // disallow process.exit()
    // 'no-process-exit': 'off', NO-SUPPORT

    // restrict usage of specified node modules
    // 'no-restricted-modules': 'off', NO-SUPPORT

    // disallow use of synchronous methods (off by default)
    // 'no-sync': 'off', NO-SUPPORT
  }
};
