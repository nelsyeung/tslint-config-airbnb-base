module.exports = {
  rules: {
    // enforces getter/setter pairs in objects
    // 'accessor-pairs': 'off', NO-SUPPORT

    // enforces return statements in callbacks of array's methods
    // https://eslint.org/docs/rules/array-callback-return
    // 'array-callback-return': 'error', NO-SUPPORT

    // treat var statements as if they were block scoped
    // 'block-scoped-var': 'error', NO-SUPPORT

    // specify the maximum cyclomatic complexity allowed in a program
    'cyclomatic-complexity': [false, 11],

    // enforce that class methods use "this"
    // https://eslint.org/docs/rules/class-methods-use-this
    // 'class-methods-use-this': ['error', { NO-SUPPORT
    //   exceptMethods: [],
    // }],

    // require return statements to either always or never specify values
    // 'consistent-return': 'error', NO-SUPPORT

    // specify curly brace conventions for all control statements
    curly: [true, 'ignore-same-line'],

    // require default case in switch statements
    'switch-default': [true],

    // encourages use of dot notation whenever possible
    // 'dot-notation': ['error', { allowKeywords: true }], NO-SUPPORT

    // enforces consistent newlines before or after dots
    // https://eslint.org/docs/rules/dot-location
    // 'dot-location': ['error', 'property'], NO-SUPPORT

    // require the use of === and !==
    // https://eslint.org/docs/rules/eqeqeq
    'triple-equals': [true, 'allow-null-check'],

    // make sure for-in loops have an if statement
    forin: true,

    // enforce a maximum number of classes per file
    // https://eslint.org/docs/rules/max-classes-per-file
    // TODO: semver-major (eslint 5): enable
    'max-classes-per-file': [false, 1],

    // disallow the use of alert, confirm, and prompt
    ban: [true, {
      severity: 'warning',
    }],

    // disallow use of arguments.caller or arguments.callee
    'no-arg': true,

    // disallow lexical declarations in case/default clauses
    // https://eslint.org/docs/rules/no-case-declarations.html
    // 'no-case-declarations': 'error', NO-SUPPORT

    // disallow division operators explicitly at beginning of regular expression
    // https://eslint.org/docs/rules/no-div-regex
    // 'no-div-regex': 'off', NO-SUPPORT

    // disallow else after a return in an if
    'no-unnecessary-else': true,

    // disallow empty functions, except for standalone funcs/arrows
    // https://eslint.org/docs/rules/no-empty-function
    'no-empty': true,

    // disallow empty destructuring patterns
    // https://eslint.org/docs/rules/no-empty-pattern
    // 'no-empty-pattern': 'error', NO-SUPPORT

    // disallow comparisons to null without a type-checking operator
    // 'no-eq-null': 'off', NO-SUPPORT

    // disallow use of eval()
    'no-eval': true,

    // disallow adding to native types
    // 'no-extend-native': 'error', NO-SUPPORT

    // disallow unnecessary function binding
    // 'no-extra-bind': 'error', NO-SUPPORT

    // disallow Unnecessary Labels
    // https://eslint.org/docs/rules/no-extra-label
    // 'no-extra-label': 'error', NO-SUPPORT

    // disallow fallthrough of case statements
    'no-switch-case-fall-through': true,

    // disallow the use of leading or trailing decimal points in numeric literals
    // 'no-floating-decimal': 'error', NO-SUPPORT

    // disallow reassignments of native objects or read-only globals
    // https://eslint.org/docs/rules/no-global-assign
    // 'no-global-assign': ['error', { exceptions: [] }], NO-SUPPORT
    // deprecated in favor of no-global-assign
    // 'no-native-reassign': 'off', NOT-APPLICABLE

    // disallow implicit type conversions
    // https://eslint.org/docs/rules/no-implicit-coercion
    // 'no-implicit-coercion': ['off', { NO-SUPPORT
    //   boolean: false,
    //   number: true,
    //   string: true,
    //   allow: [],
    // }],

    // disallow var and named functions in global scope
    // https://eslint.org/docs/rules/no-implicit-globals
    // 'no-implicit-globals': 'off', NO-SUPPORT

    // disallow use of eval()-like methods
    // 'no-implied-eval': 'error', NO-SUPPORT

    // disallow this keywords outside of classes or class-like objects
    'no-invalid-this': false,

    // disallow usage of __iterator__ property
    // 'no-iterator': 'error', NO-SUPPORT

    // disallow use of labels for anything other then loops and switches
    'label-position': true,

    // disallow unnecessary nested blocks
    // 'no-lone-blocks': 'error', NO-SUPPORT

    // disallow creation of functions within loops
    // 'no-loop-func': 'error', NO-SUPPORT

    // disallow magic numbers
    // https://eslint.org/docs/rules/no-magic-numbers
    'no-magic-numbers': true,

    // disallow use of multiple spaces
    'no-multi-spaces': true,

    // disallow use of multiline strings
    // 'no-multi-str': 'error', NO-SUPPORT

    // disallow use of new operator when not part of the assignment or comparison
    // 'no-new': 'error', see no-unused-expression below

    // disallow use of new operator for Function object
    // 'no-new-func': 'error', NO-SUPPORT

    // disallows creating new instances of String, Number, and Boolean
    'no-construct': true,

    // disallow use of (old style) octal literals
    // 'no-octal': 'error', NOT-APPLICABLE

    // disallow use of octal escape sequences in string literals, such as
    // var foo = 'Copyright \251';
    // 'no-octal-escape': 'error', NO-SUPPORT

    // disallow reassignment of function parameters
    // disallow parameter object manipulation except for specific exclusions
    // rule: https://eslint.org/docs/rules/no-param-reassign.html
    // 'no-param-reassign': ['error', { NO-SUPPORT
    //   props: true,
    //   ignorePropertyModificationsFor: [
    //     'acc', // for reduce accumulators
    //     'e', // for e.returnvalue
    //     'ctx', // for Koa routing
    //     'req', // for Express requests
    //     'request', // for Express requests
    //     'res', // for Express responses
    //     'response', // for Express responses
    //     '$scope', // for Angular 1 scopes
    //   ]
    // }],

    // disallow usage of __proto__ property
    'ter-no-proto': true,

    // disallow declaring the same variable more then once
    'no-duplicate-variable': true,

    // disallow certain object properties
    // https://eslint.org/docs/rules/no-restricted-properties
    // 'no-restricted-properties': ['error', { NO-SUPPORT
    //   object: 'arguments',
    //   property: 'callee',
    //   message: 'arguments.callee is deprecated',
    // }, {
    //   object: 'global',
    //   property: 'isFinite',
    //   message: 'Please use Number.isFinite instead',
    // }, {
    //   object: 'self',
    //   property: 'isFinite',
    //   message: 'Please use Number.isFinite instead',
    // }, {
    //   object: 'window',
    //   property: 'isFinite',
    //   message: 'Please use Number.isFinite instead',
    // }, {
    //   object: 'global',
    //   property: 'isNaN',
    //   message: 'Please use Number.isNaN instead',
    // }, {
    //   object: 'self',
    //   property: 'isNaN',
    //   message: 'Please use Number.isNaN instead',
    // }, {
    //   object: 'window',
    //   property: 'isNaN',
    //   message: 'Please use Number.isNaN instead',
    // }, {
    //   property: '__defineGetter__',
    //   message: 'Please use Object.defineProperty instead.',
    // }, {
    //   property: '__defineSetter__',
    //   message: 'Please use Object.defineProperty instead.',
    // }, {
    //   object: 'Math',
    //   property: 'pow',
    //   message: 'Use the exponentiation operator (**) instead.',
    // }],

    // disallow use of assignment in return statement
    // 'no-return-assign': ['error', 'always'], NO-SUPPORT

    // disallow redundant `return await`
    // 'no-return-await': 'error', NO-SUPPORT

    // disallow use of `javascript:` urls.
    'ter-no-script-url': true,

    // disallow self assignment
    // https://eslint.org/docs/rules/no-self-assign
    // 'no-self-assign': 'error', NO-SUPPORT

    // disallow comparisons where both sides are exactly the same
    'ter-no-self-compare': true,

    // disallow use of comma operator
    // 'no-sequences': 'error', NO-SUPPORT

    // restrict what can be thrown as an exception
    'no-string-throw': true,

    // disallow unmodified conditions of loops
    // https://eslint.org/docs/rules/no-unmodified-loop-condition
    // 'no-unmodified-loop-condition': 'off', NO-SUPPORT

    // disallow usage of expressions in statement position
    'no-unused-expression': true,

    // disallow unused labels
    // https://eslint.org/docs/rules/no-unused-labels
    // 'no-unused-labels': 'error', NO-SUPPORT

    // disallow unnecessary .call() and .apply()
    // 'no-useless-call': 'off', NO-SUPPORT

    // Disallow unnecessary catch clauses
    // https://eslint.org/docs/rules/no-useless-catch
    // TODO: enable, semver-major
    // 'no-useless-catch': 'off', NO-SUPPORT

    // disallow useless string concatenation
    // https://eslint.org/docs/rules/no-useless-concat
    // 'no-useless-concat': 'error', NO-SUPPORT

    // disallow unnecessary string escaping
    // https://eslint.org/docs/rules/no-useless-escape
    // 'no-useless-escape': 'error', NO-SUPPORT

    // disallow redundant return; keywords
    // https://eslint.org/docs/rules/no-useless-return
    // 'no-useless-return': 'error', NO-SUPPORT

    // disallow use of void operator
    // https://eslint.org/docs/rules/no-void
    // 'no-void': 'error', NO-SUPPORT

    // disallow usage of configurable warning terms in comments: e.g. todo
    // 'no-warning-comments': [ NO-SUPPORT
    //   'off', { terms: ['todo', 'fixme', 'xxx'], location: 'start' }],

    // disallow use of the with statement
    // 'no-with': 'error', NO-SUPPORT

    // require using Error objects as Promise rejection reasons
    // https://eslint.org/docs/rules/prefer-promise-reject-errors
    // 'prefer-promise-reject-errors': ['error', { allowEmptyReject: true }], NO-SUPPORT

    // require use of the second argument for parseInt()
    radix: true,

    // require `await` in `async function` (note: this is a horrible rule that should never be used)
    // https://eslint.org/docs/rules/require-await
    // 'require-await': 'off', NO-SUPPORT

    // Enforce the use of u flag on RegExp
    // https://eslint.org/docs/rules/require-unicode-regexp
    // 'require-unicode-regexp': 'off', NO-SUPPORT

    // requires to declare all vars on top of their containing scope
    // 'vars-on-top': 'error', NO-SUPPORT

    // require immediate function invocation to be wrapped in parentheses
    // https://eslint.org/docs/rules/wrap-iife.html
    // 'wrap-iife': ['error', 'outside', { functionPrototypeMethods: false }], NO-SUPPORT

    // require or disallow Yoda conditions
    // yoda: 'error' NO-SUPPORT
  }
};
