module.exports = {
  rules: {
    // enforce line breaks after opening and before closing array brackets
    // http://eslint.org/docs/rules/array-bracket-newline
    // TODO: enable? semver-major
    // 'array-bracket-newline': ['off', { multiline: true, minItems: 3 }], NO-SUPPORT

    // enforce line breaks between array elements
    // http://eslint.org/docs/rules/array-element-newline
    // TODO: enable? semver-major
    // 'array-element-newline': ['off', { multiline: true, minItems: 3 }], NO-SUPPORT

    // enforce spacing inside array brackets
    'array-bracket-spacing': [true, 'never'],

    // enforce spacing inside single-line blocks
    // http://eslint.org/docs/rules/block-spacing
    'block-spacing': [true, 'always'],

    // enforce one true brace style
    'brace-style': [true, '1tbs', { allowSingleLine: true }],

    // require camel case names
    'variable-name': [true, 'ban-keywords', 'check-format'],

    // enforce or disallow capitalization of the first letter of a comment
    // http://eslint.org/docs/rules/capitalized-comments
    // 'capitalized-comments': ['off', 'never', { NO-SUPPORT
    //   line: {
    //     ignorePattern: '.*',
    //     ignoreInlineComments: true,
    //     ignoreConsecutiveComments: true,
    //   },
    //   block: {
    //     ignorePattern: '.*',
    //     ignoreInlineComments: true,
    //     ignoreConsecutiveComments: true,
    //   },
    // }],

    // require trailing commas in multiline object literals
    'trailing-comma': [true, {
      multiline: 'always',
      singleline: 'never',
    }],

    // enforce spacing before and after comma
    // 'comma-spacing': ['error', { before: false, after: true }], NO-SUPPORT

    // enforce one true comma style
    // 'comma-style': ['error', 'last'], NO-SUPPORT

    // disallow padding inside computed properties
    // 'computed-property-spacing': ['error', 'never'], NO-SUPPORT

    // enforces consistent naming when capturing the current execution context
    // 'consistent-this': 'off', NO-SUPPORT

    // enforce newline at the end of file, with no multiple empty lines
    eofline: true,

    // enforce spacing between functions and their invocations
    // http://eslint.org/docs/rules/func-call-spacing
    'ter-func-call-spacing': [true, 'never'],

    // requires function names to match the name of the variable or property to which they are
    // assigned
    // http://eslint.org/docs/rules/func-name-matching
    // 'func-name-matching': ['off', 'always', { NO-SUPPORT
    //   includeCommonJSModuleExports: false
    // }],

    // require function expressions to have a name
    // http://eslint.org/docs/rules/func-names
    // 'func-names': 'warn', NO-SUPPORT

    // enforces use of function declarations or expressions
    // http://eslint.org/docs/rules/func-style
    // TODO: enable
    // 'func-style': ['off', 'expression'], NO-SUPPORT

    // enforce consistent line breaks inside function parentheses
    // https://eslint.org/docs/rules/function-paren-newline
    // 'function-paren-newline': ['error', 'multiline'], NO-SUPPORT

    // Blacklist certain identifiers to prevent them being used
    // http://eslint.org/docs/rules/id-blacklist
    // 'id-blacklist': 'off', NO-SUPPORT

    // this option enforces minimum and maximum identifier lengths
    // (variable names, property names etc.)
    // 'id-length': 'off', NO-SUPPORT

    // require identifiers to match the provided regular expression
    // 'id-match': 'off', NO-SUPPORT

    // this option sets a specific tab width for your code
    // http://eslint.org/docs/rules/indent
    'ter-indent': [true, 2, {
      SwitchCase: 1,
      VariableDeclarator: 1,
      outerIIFEBody: 1,
      // MemberExpression: null,
      FunctionDeclaration: {
        parameters: 1,
        body: 1
      },
      FunctionExpression: {
        parameters: 1,
        body: 1
      },
      CallExpression: {
        arguments: 1
      },
      ArrayExpression: 1,
      ObjectExpression: 1,
      ImportDeclaration: 1,
      flatTernaryExpressions: false,
      ignoredNodes: ['JSXElement *']
    }],

    // specify whether double or single quotes should be used in JSX attributes
    // http://eslint.org/docs/rules/jsx-quotes
    // 'jsx-quotes': ['off', 'prefer-double'], NO-SUPPORT

    // enforces spacing between keys and values in object literal properties
    // 'key-spacing': ['error', { beforeColon: false, afterColon: true }], NO-SUPPORT

    // require a space before & after certain keywords
    // 'keyword-spacing': ['error', { NO-SUPPORT
    //   before: true,
    //   after: true,
    //   overrides: {
    //     return: { after: true },
    //     throw: { after: true },
    //     case: { after: true }
    //   }
    // }],

    // enforce position of line comments
    // http://eslint.org/docs/rules/line-comment-position
    // TODO: enable?
    // 'line-comment-position': ['off', { NO-SUPPORT
    //   position: 'above',
    //   ignorePattern: '',
    //   applyDefaultPatterns: true,
    // }],

    // disallow mixed 'LF' and 'CRLF' as linebreaks
    // http://eslint.org/docs/rules/linebreak-style
    'linebreak-style': [true, 'LF'],

    // enforces empty lines around comments
    // 'lines-around-comment': 'off', NO-SUPPORT

    // require or disallow newlines around directives
    // http://eslint.org/docs/rules/lines-around-directive
    // 'lines-around-directive': ['error', { NO-SUPPORT
    //   before: 'always',
    //   after: 'always',
    // }],

    // specify the maximum depth that blocks can be nested
    // 'max-depth': ['off', 4], NO-SUPPORT

    // specify the maximum length of a line in your program
    // http://eslint.org/docs/rules/max-len
    'ter-max-len': [true, 100, 2, {
      ignoreUrls: true,
      ignoreComments: false,
      ignoreRegExpLiterals: true,
      ignoreStrings: true,
      ignoreTemplateLiterals: true,
    }],

    // specify the max number of lines in a file
    // http://eslint.org/docs/rules/max-lines
    'max-file-line-count': [false, 300],

    // specify the maximum depth callbacks can be nested
    // 'max-nested-callbacks': 'off', NO-SUPPORT

    // limits the number of parameters that can be used in the function declaration.
    // 'max-params': ['off', 3], NO-SUPPORT

    // specify the maximum number of statement allowed in a function
    // 'max-statements': ['off', 10], NO-SUPPORT

    // restrict the number of statements per line
    // http://eslint.org/docs/rules/max-statements-per-line
    // 'max-statements-per-line': ['off', { max: 1 }], NO-SUPPORT

    // require multiline ternary
    // http://eslint.org/docs/rules/multiline-ternary
    // TODO: enable?
    // 'multiline-ternary': ['off', 'never'], NO-SUPPORT

    // require a capital letter for constructors
    // 'new-cap': ['error', { NOT-APPLICABLE
    //   newIsCap: true,
    //   newIsCapExceptions: [],
    //   capIsNew: false,
    //   capIsNewExceptions: ['Immutable.Map', 'Immutable.Set', 'Immutable.List'],
    // }],

    // disallow the omission of parentheses when invoking a constructor with no arguments
    // http://eslint.org/docs/rules/new-parens
    'new-parens': true,

    // allow/disallow an empty newline after var statement
    // 'newline-after-var': 'off', NO-SUPPORT

    // http://eslint.org/docs/rules/newline-before-return
    // 'newline-before-return': 'off', NO-SUPPORT

    // enforces new line after each method call in the chain to make it
    // more readable and easy to maintain
    // http://eslint.org/docs/rules/newline-per-chained-call
    // 'newline-per-chained-call': ['error', { ignoreChainWithDepth: 4 }], NO-SUPPORT

    // disallow use of the Array constructor
    // 'no-array-constructor': 'error', NO-SUPPORT

    // disallow use of bitwise operators
    // http://eslint.org/docs/rules/no-bitwise
    'no-bitwise': true,

    // disallow use of the continue statement
    // http://eslint.org/docs/rules/no-continue
    // 'no-continue': 'error', NO-SUPPORT

    // disallow comments inline after code
    // 'no-inline-comments': 'off', NO-SUPPORT

    // disallow if as the only statement in an else block
    // http://eslint.org/docs/rules/no-lonely-if
    // 'no-lonely-if': 'error', NO-SUPPORT

    // disallow un-paren'd mixes of different operators
    // http://eslint.org/docs/rules/no-mixed-operators
    // 'no-mixed-operators': ['error', { NO-SUPPORT
    //   groups: [
    //     ['+', '-', '*', '/', '%', '**'],
    //     ['&', '|', '^', '~', '<<', '>>', '>>>'],
    //     ['==', '!=', '===', '!==', '>', '>=', '<', '<='],
    //     ['&&', '||'],
    //     ['in', 'instanceof']
    //   ],
    //   allowSamePrecedence: false
    // }],

    // disallow mixed spaces and tabs for indentation
    // 'no-mixed-spaces-and-tabs': 'error', see ter-indent above

    // disallow use of chained assignment expressions
    // http://eslint.org/docs/rules/no-multi-assign
    // 'no-multi-assign': ['error'], NO-SUPPORT

    // disallow multiple empty lines and only one newline at the end
    'no-consecutive-blank-lines': [true, 2],

    // disallow negated conditions
    // http://eslint.org/docs/rules/no-negated-condition
    // 'no-negated-condition': 'off', NO-SUPPORT

    // disallow nested ternary expressions
    // 'no-nested-ternary': 'error', NO-SUPPORT

    // disallow use of the Object constructor
    // 'no-new-object': 'error', NO-SUPPORT

    // disallow use of unary operators, ++ and --
    // http://eslint.org/docs/rules/no-plusplus
    // 'no-plusplus': 'error', NO-SUPPORT

    // disallow certain syntax forms
    // http://eslint.org/docs/rules/no-restricted-syntax
    // 'no-restricted-syntax': [ NO-SUPPORT
    //   'error',
    //   {
    //     selector: 'ForInStatement',
    //     message: 'for..in loops iterate over the entire prototype chain, which is virtually never what you want. Use Object.{keys,values,entries}, and iterate over the resulting array.',
    //   },
    //   {
    //     selector: 'ForOfStatement',
    //     message: 'iterators/generators require regenerator-runtime, which is too heavyweight for this guide to allow them. Separately, loops should be avoided in favor of array iterations.',
    //   },
    //   {
    //     selector: 'LabeledStatement',
    //     message: 'Labels are a form of GOTO; using them makes code confusing and hard to maintain and understand.',
    //   },
    //   {
    //     selector: 'WithStatement',
    //     message: '`with` is disallowed in strict mode because it makes code impossible to predict and optimize.',
    //   },
    // ],

    // disallow space between function identifier and application
    // 'no-spaced-func': 'error', NO-SUPPORT

    // disallow tab characters entirely
    // 'no-tabs': 'error', NO-SUPPORT

    // disallow the use of ternary operators
    // 'no-ternary': 'off', NO-SUPPORT

    // disallow trailing whitespace at the end of lines
    'no-trailing-whitespace': [true, 'ignore-comments'],

    // disallow dangling underscores in identifiers
    // 'no-underscore-dangle': ['error', { NO-SUPPORT
    //   allow: [],
    //   allowAfterThis: false,
    //   allowAfterSuper: false,
    //   enforceInMethodNames: false,
    // }],

    // disallow the use of Boolean literals in conditional expressions
    // also, prefer `a || b` over `a ? a : b`
    // http://eslint.org/docs/rules/no-unneeded-ternary
    // 'no-unneeded-ternary': ['error', { defaultAssignment: false }], NO-SUPPORT

    // disallow whitespace before properties
    // http://eslint.org/docs/rules/no-whitespace-before-property
    // 'no-whitespace-before-property': 'error', NO-SUPPORT

    // enforce the location of single-line statements
    // http://eslint.org/docs/rules/nonblock-statement-body-position
    // 'nonblock-statement-body-position': 'off', NO-SUPPORT

    // require padding inside curly braces
    'object-curly-spacing': [true, 'always'],

    // enforce line breaks between braces
    // http://eslint.org/docs/rules/object-curly-newline
    // 'object-curly-newline': ['error', { NO-SUPPORT
    //   ObjectExpression: { minProperties: 4, multiline: true, consistent: true },
    //   ObjectPattern: { minProperties: 4, multiline: true, consistent: true }
    // }],

    // enforce "same line" or "multiple line" on object properties.
    // http://eslint.org/docs/rules/object-property-newline
    // 'object-property-newline': ['error', { NO-SUPPORT
    //   allowMultiplePropertiesPerLine: true,
    // }],

    // allow just one var statement per function
    'one-variable-per-declaration': true,

    // require a newline around variable declaration
    // http://eslint.org/docs/rules/one-var-declaration-per-line
    // 'one-var-declaration-per-line': ['error', 'always'], NO-SUPPORT

    // require assignment operator shorthand where possible or prohibit it entirely
    // http://eslint.org/docs/rules/operator-assignment
    // 'operator-assignment': ['error', 'always'], NO-SUPPORT

    // enforce operators to be placed before or after line breaks
    // 'operator-linebreak': 'off', NO-SUPPORT

    // disallow padding within blocks
    // 'padded-blocks': [ NO-SUPPORT
    //   'error', { blocks: 'never', classes: 'never', switches: 'never' }],

    // Require or disallow padding lines between statements
    // http://eslint.org/docs/rules/padding-line-between-statements
    // 'padding-line-between-statements': 'off', NO-SUPPORT

    // require quotes around object literal property names
    // http://eslint.org/docs/rules/quote-props.html
    'object-literal-key-quotes': [true, 'as-needed'],

    // specify whether double or single quotes should be used
    quotemark: [true, 'single', 'avoid-escape'],

    // do not require jsdoc
    // http://eslint.org/docs/rules/require-jsdoc
    // 'require-jsdoc': 'off', NO-SUPPORT

    // require or disallow use of semicolons instead of ASI
    semicolon: [true, 'always'],

    // enforce spacing before and after semicolons
    // 'semi-spacing': ['error', { before: false, after: true }], NO-SUPPORT

    // Enforce location of semicolons
    // http://eslint.org/docs/rules/semi-style
    // 'semi-style': ['error', 'last'], NO-SUPPORT

    // requires object keys to be sorted
    // 'sort-keys': ['off', 'asc', { caseSensitive: false, natural: true }], NO-SUPPORT

    // sort variables within the same declaration block
    // 'sort-vars': 'off', NO-SUPPORT

    // require or disallow space before blocks
    // 'space-before-blocks': 'error', NO-SUPPORT

    // require or disallow space before function opening parenthesis
    // http://eslint.org/docs/rules/space-before-function-paren
    // 'space-before-function-paren': ['error', { NO-SUPPORT
    //   anonymous: 'always',
    //   named: 'never',
    //   asyncArrow: 'always'
    // }],

    // require or disallow spaces inside parentheses
    'space-in-parens': [true, 'never'],

    // require spaces around operators
    // 'space-infix-ops': 'error', NO-SUPPORT

    // Require or disallow spaces before/after unary operators
    // http://eslint.org/docs/rules/space-unary-ops
    // 'space-unary-ops': ['error', { NO-SUPPORT
    //   words: true,
    //   nonwords: false,
    //   overrides: {
    //   },
    // }],

    // require or disallow a space immediately following the // or /* in a comment
    // http://eslint.org/docs/rules/spaced-comment
    'comment-format': [true, 'check-space'],

    // Enforce spacing around colons of switch statements
    // http://eslint.org/docs/rules/switch-colon-spacing
    // 'switch-colon-spacing': ['error', { after: true, before: false }], NO-SUPPORT

    // Require or disallow spacing between template tags and their literals
    // http://eslint.org/docs/rules/template-tag-spacing
    // 'template-tag-spacing': ['error', 'never'], NO-SUPPORT

    // require or disallow the Unicode Byte Order Mark
    // http://eslint.org/docs/rules/unicode-bom
    // 'unicode-bom': ['error', 'never'], NO-SUPPORT

    // require regex literals to be wrapped in parentheses
    // 'wrap-regex': 'off' NO-SUPPORT
  }
};
