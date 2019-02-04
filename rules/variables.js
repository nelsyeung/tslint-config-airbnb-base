// const confusingBrowserGlobals = require('confusing-browser-globals'); NO-SUPPORT

module.exports = {
  rules: {
    // enforce or disallow variable initializations at definition
    // 'init-declarations': 'off', NO-SUPPORT

    // disallow the catch clause parameter name being the same as a variable in the outer scope
    // 'no-catch-shadow': 'off', NO-SUPPORT

    // disallow deletion of variables
    // 'no-delete-var': 'error', NOT-APPLICABLE

    // disallow labels that share a name with a variable
    // https://eslint.org/docs/rules/no-label-var
    // 'no-label-var': 'error', NO-SUPPORT
    //
    // disallow specific globals
    // 'no-restricted-globals': ['error', 'isFinite', 'isNaN'].concat(confusingBrowserGlobals), NO-SUPPORT

    // disallow declaration of variables already declared in the outer scope
    'no-shadowed-variable': true,

    // disallow shadowing of names such as arguments
    // 'no-shadow-restricted-names': 'error', NO-SUPPORT

    // disallow use of undeclared variables unless mentioned in a /*global */ block
    // 'no-undef': 'error', NOT-APPLICABLE

    // disallow use of undefined when initializing variables
    // 'no-undef-init': 'error', NO-SUPPORT

    // disallow use of undefined variable
    // https://eslint.org/docs/rules/no-undefined
    // TODO: enable?
    // 'no-undefined': 'off', NO-SUPPORT

    // disallow declaration of variables that are not used in the code
    // 'no-unused-variable': true, NO-SUPPORT

    // disallow use of variables before they are defined
    'no-use-before-declare': true
  }
};
