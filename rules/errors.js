module.exports = {
  rules: {
    // Enforce “for” loop update clause moving the counter in the right direction
    // https://eslint.org/docs/rules/for-direction
    // 'for-direction': 'error', NO-SUPPORT

    // Enforces that a return statement is present in property getters
    // https://eslint.org/docs/rules/getter-return
    // 'getter-return': ['error', { allowImplicit: true }], NO-SUPPORT

    // disallow using an async function as a Promise executor
    // https://eslint.org/docs/rules/no-async-promise-executor
    // TODO: enable, semver-major
    // 'no-async-promise-executor': 'off', NO-SUPPORT

    // Disallow await inside of loops
    // https://eslint.org/docs/rules/no-await-in-loop
    // 'no-await-in-loop': 'error', NO-SUPPORT

    // Disallow comparisons to negative zero
    // https://eslint.org/docs/rules/no-compare-neg-zero
    // 'no-compare-neg-zero': 'error', NO-SUPPORT

    // disallow assignment in conditional expressions
    'no-conditional-assignment': true,

    // disallow use of console
    'no-console': true,

    // disallow use of constant expressions in conditions
    'no-constant-condition': true,

    // disallow control characters in regular expressions
    'no-control-regex': true,

    // disallow use of debugger
    'no-debugger': true,

    // disallow duplicate arguments in functions
    // 'no-dupe-args': 'error', NOT-APPLICABLE

    // disallow duplicate keys when creating object literals
    // 'no-dupe-keys': 'error', NOT-APPLICABLE

    // disallow a duplicate case label.
    'no-duplicate-case': true,

    // disallow empty statements
    'no-empty': true,

    // disallow the use of empty character classes in regular expressions
    'no-empty-character-class': true,

    // disallow assigning to the exception in a catch block
    'no-ex-assign': true,

    // disallow double-negation boolean casts in a boolean context
    // https://eslint.org/docs/rules/no-extra-boolean-cast
    'no-extra-boolean-cast': true,

    // disallow unnecessary parentheses
    // https://eslint.org/docs/rules/no-extra-parens
    // 'no-extra-parens': ['off', 'all', {
    //   conditionalAssign: true,
    //   nestedBinaryExpressions: false,
    //   returnAssign: false,
    //   ignoreJSX: 'all', // delegate to eslint-plugin-react
    //   enforceForArrowConditionals: false,
    // }],

    // disallow unnecessary semicolons
    'no-extra-semi': true,

    // disallow overwriting functions written as function declarations
    // 'no-func-assign': 'error', NOT-APPLICABLE

    // disallow function or variable declarations in nested blocks
    'no-inner-declarations': true,

    // disallow invalid regular expression strings in the RegExp constructor
    'no-invalid-regexp': true,

    // disallow irregular whitespace outside of strings and comments
    'ter-no-irregular-whitespace': true,

    // Disallow characters which are made with multiple code points in character class syntax
    // https://eslint.org/docs/rules/no-misleading-character-class
    // TODO: enable, semver-major
    // 'no-misleading-character-class': 'off', NO-SUPPORT

    // disallow the use of object properties of the global object (Math and JSON) as functions
    // 'no-obj-calls': 'error', NOT-APPLICABLE

    // disallow use of Object.prototypes builtins directly
    // https://eslint.org/docs/rules/no-prototype-builtins
    // 'no-prototype-builtins': 'error', NO-SUPPORT

    // disallow multiple spaces in a regular expression literal
    'no-regex-spaces': true,

    // disallow sparse arrays
    'ter-no-sparse-arrays': true,

    // Disallow template literal placeholder syntax in regular strings
    // https://eslint.org/docs/rules/no-template-curly-in-string
    // 'no-template-curly-in-string': 'error', NO-SUPPORT

    // Avoid code that looks like two expressions but is actually one
    // https://eslint.org/docs/rules/no-unexpected-multiline
    'no-unexpected-multiline': true,

    // disallow unreachable statements after a return, throw, continue, or break statement
    // 'no-unreachable': 'error', NOT-APPLICABLE

    // disallow return/throw/break/continue inside finally blocks
    // https://eslint.org/docs/rules/no-unsafe-finally
    'no-unsafe-finally': true,

    // disallow negating the left operand of relational operators
    // https://eslint.org/docs/rules/no-unsafe-negation
    // 'no-unsafe-negation': 'error', NO-SUPPORT
    // disallow negation of the left operand of an in expression
    // deprecated in favor of no-unsafe-negation
    // 'no-negated-in-lhs': 'off', NOT-APPLICABLE

    // Disallow assignments that can lead to race conditions due to usage of await or yield
    // https://eslint.org/docs/rules/require-atomic-updates
    // TODO: enable, semver-major
    // 'require-atomic-updates': 'off', NO-SUPPORT

    // disallow comparisons with the value NaN
    'use-isnan': true,

    // ensure JSDoc comments are valid
    // https://eslint.org/docs/rules/valid-jsdoc
    'valid-jsdoc': false,

    // ensure that the results of typeof are compared against a valid string
    // https://eslint.org/docs/rules/valid-typeof
    'valid-typeof': true,
  }
};
